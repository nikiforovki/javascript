const itemsConfig = {
    'Зелье здоровья': {
        type: 'health',
        value: 20,
        use: function () {
            const oldHealth = player.health;
            player.health = Math.min(player.maxHealth, player.health + this.value);
            return `Восстановлено ${player.health - oldHealth} здоровья`;
        }
    }
};

const enemies = {
    skeleton: {name: 'Скелет', health: 50, strength: 10, protection: 5, expReward: 20},
    goblin: {name: 'Гоблин', health: 30, strength: 15, protection: 3, expReward: 15}
};

const gameLocations = [
    {id: 1, loc: 'Деревня', items: ['Зелье здоровья'], enemies: []},
    {id: 2, loc: 'Подземелье', items: ['Зелье здоровья'], enemies: ['skeleton', 'goblin']},
    {id: 3, loc: 'Лес', items: ['Зелье здоровья'], enemies: ['goblin']}
];

const initialPlayerState = {
    name: '',
    health: 100,
    maxHealth: 100,
    strength: 20,
    protection: 5,
    level: 1,
    exp: 0,
    expToNextLevel: 100,
    inventory: [],
    currentLocation: 1,
    currentEnemy: null,
    isPlayerTurn: true
};

const player = JSON.parse(JSON.stringify(initialPlayerState));

// Журнал событий
const eventLog = {
    addEntry: function (message, type = 'info') {
        const logElement = document.querySelector('.event-log-content');
        if (!logElement) return;

        const entry = document.createElement('div');
        entry.className = `log-entry log-${type}`;
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logElement.prepend(entry);

        while (logElement.children.length > 50) {
            logElement.removeChild(logElement.lastChild);
        }
    }
};

// Боевая система
const combatSystem = {
    startCombat: function (enemyType) {
        player.currentEnemy = {...enemies[enemyType]};
        player.isPlayerTurn = true;
        this.updateCombatUI(true);
        eventLog.addEntry(`На вас напал ${player.currentEnemy.name}!`, 'danger');

        if (Math.random() < 0.25) {
            player.isPlayerTurn = false;
            setTimeout(() => this.enemyAttack(), 500);
        }
    },

    playerAttack: function () {
        if (!player.currentEnemy || !player.isPlayerTurn) {
            if (!player.currentEnemy) {
                eventLog.addEntry("Нет врага для атаки!", "warning");
            }
            return;
        }

        player.isPlayerTurn = false;

        const damage = this.calculateDamage(player.strength, player.currentEnemy.protection);
        player.currentEnemy.health -= damage;
        eventLog.addEntry(`Вы атаковали и нанесли ${damage} урона!`, 'success');

        if (player.currentEnemy.health <= 0) {
            this.endCombat(true);
        } else {
            setTimeout(() => this.enemyAttack(), 500);
        }
    },

    enemyAttack: function () {
        if (!player.currentEnemy) return;

        const damage = this.calculateDamage(player.currentEnemy.strength, player.protection);
        player.health -= damage;
        this.updatePlayerStats();
        eventLog.addEntry(`${player.currentEnemy.name} атаковал и нанес ${damage} урона!`, 'danger');

        if (player.health <= 0) {
            player.health = 0;
            this.updatePlayerStats();
            this.gameOver();
        } else {
            player.isPlayerTurn = true;
            this.updateCombatUI(true);
        }
    },

    gameOver: function () {
        this.updateCombatUI(false);
        this.disableMovementButtons(true);
        eventLog.addEntry('Вы проиграли! Игра окончена.', 'danger');
        eventLog.addEntry('Нажмите "Restart", чтобы начать заново.', 'info');
        document.getElementById('btn-restart').style.display = 'inline-block';
    },

    calculateDamage: function (attack, defense) {
        const baseDamage = Math.max(1, attack - defense);
        return Math.random() < 0.1 ? baseDamage * 2 : baseDamage;
    },

    playerDefend: function () {
        if (!player.currentEnemy || !player.isPlayerTurn) {
            if (!player.currentEnemy) {
                eventLog.addEntry("Некого защищаться!", "warning");
            }
            return;
        }

        player.isPlayerTurn = false;

        const originalProtection = player.protection;
        player.protection = Math.floor(originalProtection * 1.5);
        eventLog.addEntry(`Вы защищаетесь! Защита увеличена до ${player.protection}`, 'info');
        this.updatePlayerStats();

        setTimeout(() => {
            this.enemyAttack();
            player.protection = originalProtection;
            this.updatePlayerStats();
        }, 500);
    },


    useItem: function () {
        const potionIndex = player.inventory.indexOf('Зелье здоровья');
        if (potionIndex !== -1) {
            player.inventory.splice(potionIndex, 1);
            const result = itemsConfig['Зелье здоровья'].use();
            this.updatePlayerStats();
            eventLog.addEntry(`Использовано зелье здоровья! ${result}`, 'success');
        } else {
            eventLog.addEntry('Нет зелий здоровья в инвентаре!', 'warning');
        }
    },

    endCombat: function (playerWon) {
        if (playerWon) {
            const expGained = player.currentEnemy.expReward;
            player.exp += expGained;
            this.updatePlayerStats();

            const expToNext = player.expToNextLevel - player.exp;
            eventLog.addEntry(`Победа! Получено ${expGained} опыта. До следующего уровня: ${expToNext > 0 ? expToNext : 0} опыта`, 'success');

            if (player.exp >= player.expToNextLevel) {
                this.levelUp();
            }

            if (Math.random() < 0.3) {
                this.findItemAfterBattle();
            }
        }

        player.currentEnemy = null;
        this.updateCombatUI(false);
    },

    levelUp: function () {
        while (player.exp >= player.expToNextLevel) {
            player.level++;
            player.exp -= player.expToNextLevel;
            player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5);
            player.maxHealth += 10;
            player.strength += 2;
            player.protection += 1;
        }
        player.health = player.maxHealth;
        this.updatePlayerStats();
        eventLog.addEntry(`Уровень повышен! Теперь вы ${player.level} уровня. Требуется ${player.expToNextLevel} опыта до следующего уровня`, 'success');
    },

    findItemAfterBattle: function () {
        player.inventory.push('Зелье здоровья');
        this.updatePlayerStats();
        eventLog.addEntry(`Найден предмет: Зелье здоровья!`, 'success');
    },

    updateCombatUI: function (inCombat) {
        ['btn-attack', 'btn-defend', 'btn-use'].forEach(id => {
            const button = document.getElementById(id);
            if (button) {
                button.disabled = !inCombat || !player.isPlayerTurn;
            }
        });
    },

    disableMovementButtons: function (disabled) {
        ['actions-1', 'actions-2', 'actions-home'].forEach(id => {
            const button = document.getElementById(id);
            if (button) button.disabled = disabled;
        });
    },

    updatePlayerStats: function () {
        const translations = {
            health: 'Здоровье',
            strength: 'Сила',
            protection: 'Защита',
            level: 'Уровень',
            inventory: 'Зелья здоровья'
        };

        const stats = ['health', 'strength', 'protection', 'level', 'inventory'];
        stats.forEach(stat => {
            const element = document.getElementById(stat);
            if (element) {
                if (stat === 'health') {
                    element.textContent = `${translations[stat]}: ${player.health}/${player.maxHealth}`;
                } else if (stat === 'inventory') {
                    const potionCount = player.inventory.filter(item => item === 'Зелье здоровья').length;
                    element.textContent = `${translations[stat]}: ${potionCount}`;
                } else if (stat === 'level') {
                    element.textContent = `${translations[stat]}: ${player.level} (Опыт: ${player.exp}/${player.expToNextLevel})`;
                } else {
                    element.textContent = `${translations[stat]}: ${player[stat]}`;
                }
            }
        });
    }
};

// Инициализация кнопок
function initButtons() {
    document.getElementById('btn-attack').addEventListener('click', () => combatSystem.playerAttack());
    document.getElementById('btn-defend').addEventListener('click', () => combatSystem.playerDefend());
    document.getElementById('btn-use').addEventListener('click', () => combatSystem.useItem());
    document.getElementById('btn-restart').addEventListener('click', restartGame);
    document.getElementById('btn-restart').style.display = 'none';
    document.getElementById('actions-1').addEventListener('click', () => changeLocation(3));
    document.getElementById('actions-2').addEventListener('click', () => changeLocation(2));
    document.getElementById('actions-home').addEventListener('click', () => changeLocation(1));
}

function changeLocation(locationId) {
    if (player.currentLocation === locationId) return;

    const oldLocation = gameLocations.find(loc => loc.id === player.currentLocation);
    const newLocation = gameLocations.find(loc => loc.id === locationId);

    eventLog.addEntry(`Покинули ${oldLocation.loc}`, 'info');
    player.currentLocation = locationId;
    updateLocationDisplay();
    eventLog.addEntry(`Вошел в ${newLocation.loc}`, 'success');

    if (newLocation.enemies.length > 0 && Math.random() < 0.7) {
        const enemyType = newLocation.enemies[Math.floor(Math.random() * newLocation.enemies.length)];
        setTimeout(() => combatSystem.startCombat(enemyType), 1000);
    } else if (locationId === 3 && Math.random() < 0.3) {
        player.inventory.push('Зелье здоровья');
        combatSystem.updatePlayerStats();
        eventLog.addEntry(`Нашел Зелье здоровья в лесу!`, 'success');
    }
}

function updateLocationDisplay() {
    const location = gameLocations.find(loc => loc.id === player.currentLocation);
    const element = document.getElementById('current-location');
    if (element) {
        element.textContent = `Текущая локация: ${location.loc}`;
        element.classList.add('location-changed');
        setTimeout(() => element.classList.remove('location-changed'), 500);
    }
}

function restartGame() {
    Object.assign(player, JSON.parse(JSON.stringify(initialPlayerState)));
    document.querySelector('.event-log-content').innerHTML = '';
    combatSystem.disableMovementButtons(false);
    document.getElementById('btn-restart').style.display = 'none';
    startGame();
}

function startGame() {
    player.name = prompt('Введите имя героя', 'Игрок') || 'Игрок';
    document.getElementById('name').textContent = `Имя: ${player.name}`;
    combatSystem.updatePlayerStats();
    updateLocationDisplay();
    initButtons();
    eventLog.addEntry(`Добро пожаловать, ${player.name}!`, 'success');
}

document.addEventListener('DOMContentLoaded', startGame);

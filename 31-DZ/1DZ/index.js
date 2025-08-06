let input1 = document.getElementById('inputName');
let input2 = document.getElementById('inputPhone');
let input3 = document.getElementById('inputEmail');
let button = document.querySelector('button');


button.onclick = function(event) {
    event.preventDefault();
    
    let name = input1.value;
    let phone = input2.value;
    let email = input3.value;

const user = {
    name: name,
    phone: phone,
    email: email
}

localStorage.setItem('user', JSON.stringify(user))
console.log('Данные', user);

}



let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let button = document.querySelector('button');


function checkLength(value) {
    if (value.length < 3) {
        console.log('Должнобыть больше 3 символов');

    } else if (value.length > 20) {
        console.log('Не должно превышать 20 символов');
        
    } else {
        console.log('OK');
    }  
}


button.onclick = function(event) {
    event.preventDefault();
    let a = input1.value
    console.log('Инпут 1:', a);
    checkLength(a)
    let b = input2.value
    console.log('Инпут 2:', b);
    checkLength(b)

}



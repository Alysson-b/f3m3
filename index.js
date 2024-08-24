const arr = [];

const button = document.getElementById('submit-button')
const divResult = document.getElementById('array-result')




button.addEventListener('click', function(){

    const input = document.getElementById('input-text')
    const inputValue = input.value.trim();


    if(inputValue === ""){
        const p = document.createElement('p')
        p.innerHTML = 'Insira valores!'
        divResult.innerHTML = ''
        divResult.appendChild(p)   
    }else{

        arr.push(inputValue)
        input.value = "";


        const inputReverse = inverse(arr);
        divResult.innerHTML = `${inputReverse.join(',')}`;

    }

})


function inverse(arr){
    const reverse = new Array(arr.length)
 
    for(let i = 0; i < arr.length; i++){
     reverse[arr.length - 1  - i] = arr[i]
    }
    return reverse;
 
 }
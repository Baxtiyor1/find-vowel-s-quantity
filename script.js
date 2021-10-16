const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elResultText = document.querySelector('.result');

let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']


elForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    elResultText.classList.add('result__active')
    
    let inputValue = elInput.value.trim()
    let resultArr = inputValue.split('')
    let result = 0
    
    resultArr.forEach(item =>{
        for(let i = 0; i <= vowels.length; i++)
        if(item === vowels[i]){
            result++
        }
    })
    
    elResultText.textContent = result
    
    elInput.value = ''
})
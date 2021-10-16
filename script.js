const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elResultText = document.querySelector('.result');


elForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    elResultText.classList.add('result__active')

    let inputValue = elInput.value.trim()
    let resultArr = inputValue.split('')
    let result = 0
    
    resultArr.forEach(item =>{
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u'){
            result++
        }
    })

    elResultText.textContent = result

    elInput.value = ''
})
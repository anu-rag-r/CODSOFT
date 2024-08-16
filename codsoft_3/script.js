let result = ""
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            result = eval(result);
        }
        else if(e.target.innerHTML == "C"){
            result = ""
        }
        else if(e.target.innerHTML == 'backspace'){
            result = document.querySelector('input').value.slice(0, -1)
        }
        else{
            result = result + e.target.innerHTML;
        }
        document.querySelector('input').value = result
    })
})
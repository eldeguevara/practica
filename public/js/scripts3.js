const nombrepro = document.getElementById('nom')
const telpro = document.getElementById('tel')
const form3 = document.getElementById('form3')


function checkInputs3(){
    const nomproValue = nombrepro.value.trim()
    const telproValue = telpro.value.trim()
    const erros3 = []

    if(nomproValue === ''){
        setErrorFor(nombrepro, 'No puedes dejar el nombre en blanco')
        erros3.push({text: 'error'})
    }else{
        setSuccessFor(nombrepro)
        erros3.pop()
    }

    if(telproValue === ''){
        setErrorFor(telpro, 'No puedes dejar el telefono en blanco')
        erros3.push({text: 'error'})
    }else if(telproValue.length>8){
        setErrorFor(telpro, 'el telefono no pude ser mayor a 8 digitos')
        erros3.push({text: 'error'})
    }else{
        setSuccessFor(telpro)
    }

    

    return erros3
}







form3.addEventListener('submit', e => {
    if(checkInputs3().length>0){
        e.preventDefault();
    checkInputs();
    }else{
        e.submitter()
    }
});






function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}
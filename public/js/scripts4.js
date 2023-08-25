const idpro = document.getElementById('idpro')
const precio = document.getElementById('precio')
const cant = document.getElementById('cant')
const prov = document.getElementById('prov')
const formen = document.getElementById('formen')

function checkInputs4(){
    const idproValue = idpro.value.trim()
    const precioValue = precio.value.trim()
    const cantValue = cant.value.trim()
    const provValue = prov.value.trim()
    const erros4 = []

    if(idproValue === ''){
        setErrorFor(idpro, 'No se puede dejar el id del producto en blanco')
        erros4.push({text: 'error'})
    }else{
        setSuccessFor(idpro)
        erros4.pop()
    }

    if(precioValue === ''){
        setErrorFor(precio, 'No se puede dejar el precio en blanco')
        erros4.push({text: 'error'})
    }else{
        setSuccessFor(precio)
    }

    if(cantValue === ''){
        setErrorFor(cant, 'No puedes dejar la cantidad en blanco')
        erros4.push({text: 'error'})
    }else{
        setSuccessFor(cant)
    }

    if(provValue === ''){
        setErrorFor(prov, 'No puedes dejar el id del proveedor en blanco')
        erros4.push({text: 'error'})
    }else{
        setSuccessFor(prov)
    }

    return erros4
}






formen.addEventListener('submit', e => {
    if(checkInputs4().length>0){
        e.preventDefault();
    checkInputs4();
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

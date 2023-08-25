const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const nit = document.getElementById('nit')


function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim();
	const telValue = telefono.value.trim();
	const nitValue = nit.value.trim()
	const errors = []
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
		errors.push({text: 'error'})
	} else {
		setSuccessFor(nombre);
		errors.pop()
	}

	if(telValue === ''){
		setErrorFor(telefono, 'No se puede dejar el telefono en blanco');
		errors.push({text: 'error'})
	}else if(telValue.length>8){
		setErrorFor(telefono, 'el telefono no pude ser mayor a 8 digitos');
		errors.push({text: 'error'})
	}else{
		setSuccessFor(telefono);
	}

	if(nitValue === ''){
		setErrorFor(nit, 'No se puede dejar el NIT en blanco')
		errors.push({text: 'error'})
	}else{
		setSuccessFor(nit)
	}
	
	return errors
}


form.addEventListener('submit', e => {
		if(checkInputs().length>0){
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










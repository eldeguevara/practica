/*form2*/

const form2 = document.getElementById('form2')
const nompro = document.getElementById('nompro')


function checkInputs2(){
	const nomproValue = nompro.value.trim()
	const errors2 = []

	if(nomproValue === ''){
		setErrorFor(nompro, 'No puede dejar el nombre del producto en blanco');
		errors2.push({text: 'error'})
	}else{
		setSuccessFor(nompro);
		errors2.pop()
	}


	return errors2
}

form2.addEventListener('submit', e =>{
	if(checkInputs2().length>0){
		e.preventDefault()
		checkInputs2();
	}else{
		e.submitter()
	}
})



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
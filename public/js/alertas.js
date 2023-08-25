/*alertas*/
const alertaGuardado = document.querySelector('.alerta')

window.onload = function(){
	alertaGuardado.classList.toggle('alerta-activa')
}

setTimeout(function(){
	alertaGuardado.classList.remove('alerta-activa')
},3000)
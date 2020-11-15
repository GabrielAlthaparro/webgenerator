const user=document.getElementById('user');
const pass=document.getElementById('pass');
const formInicio=document.getElementById('formInicio');

formInicio.addEventListener('submit', (e) => {
	e.preventDefault();
	if ((user.value.trim().length===0) || (pass.value.trim().length===0)){
		alert('Complete todos los campos');
	}else{
		/*consula GET con fetch*/

		fetch(`login.php?user=${user.value.trim()}&pass=${pass.value.trim()}`)
			.then( (peticion) => {
				return peticion.ok ? Promise.resolve(peticion):Promise.reject(peticion)
			})
			.then( (datosJSON) => {
				return datosJSON.json();
			})
			.then( (iniciar) => {
				/*console.log(iniciar);*/
				if (iniciar==='no'){
					alert("Esos datos no están registrados");
				}else{
					formInicio.submit();
				}
			})
			.catch( (err) => console.log(err) )


		/*Consulta POST con fetch y urlSearchParams*/

		/*const data = new URLSearchParams(`user=${user.value.trim().toString()}&pass=${pass.value.trim().toString()}`);
		fetch('login.php', {
		  	method: 'POST',
		   	body: data
		})
		.then( (peticion) => {
				return peticion.ok ? Promise.resolve(peticion):Promise.reject(peticion)
			})
			.then( (datosJSON) => {
				return datosJSON.json()
			})
			.then( (iniciar) => {
				console.log(iniciar);
				if (iniciar==='no'){
					alert("Esos datos no están registrados");
				}else{
					formInicio.submit();
				}
			})
			.catch( (err) => console.log(err) )*/
	}

})
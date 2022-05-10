function myFunction() {
	var p1 = document.getElementById('password').value;
	var p2 = document.getElementById('password2').value;

	if (p1 != p2) {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Contraseñas no coinciden';
	} else {
		window.open('gracias.html', '_self');
	}
}

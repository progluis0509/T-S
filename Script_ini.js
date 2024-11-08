document.getElementById('validar').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Definir las credenciales correctas
    const correctUsername = 'T&S';
    const correctPassword = '2024';

    const user1='angelica';
    const passworduser1='angelica';

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar los datos
    if (username === correctUsername && password === correctPassword) {
        // Redirigir si son correctos
        window.location.href = '';
    } else {
        // Mostrar mensaje de error
        document.getElementById('error').textContent = 'Usuario o contraseña incorrectos.';
    }


    if (username=== user1  && password===passworduser1) {
        window.location.href = '';
    }   else {
        // Mostrar mensaje de error
        document.getElementById('error').textContent = 'Usuario o contraseña incorrectos.';
    }




});
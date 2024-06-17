let mensaje=document.getElementById('mensaje')
let boton=document.getElementById('registro')


boton.addEventListener("click",()=>{
    event.preventDefault()
    const usuario=document.getElementById('floatingInput').value
    const contrasena=document.getElementById('floatingPassword').value

    if(usuario=="" || contrasena==""){
        mensaje.textContent='Ingrese ambos datos'
        setTimeout(() => {
            mensaje.textContent = ''
        }, 3000)
    }else{
        // Verificar si el usuario ya está registrado en el LocalStorage
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || {}
        if (usuariosRegistrados[usuario]) {
            mensaje.textContent = 'Usuario ya registrado'
        } else {
            // Guardar usuario y contraseña en el LocalStorage
            usuariosRegistrados[usuario] = contrasena
            localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados))
            mensaje.textContent = 'Ya se ha usado ese correo'

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                mensaje.textContent = ''
            }, 3000)
        }
    }
})
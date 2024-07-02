const formularioContacto = document.getElementById('formularioContacto');

formularioContacto.addEventListener('submit', (event) => {
  event.preventDefault();
  validarFormulario();
});

const validarFormulario = () => {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const comentario = document.getElementById('comentario').value.trim();

  if (nombre === '' || apellido === '' || correo === '' || comentario === '') {
    let campoFaltante = '';
    if (nombre === '') {
      campoFaltante = 'Nombre';
    } else if (apellido === '') {
      campoFaltante = 'Apellido';
    } else if (correo === '') {
      campoFaltante = 'Correo';
    } else if (comentario === '') {
      campoFaltante = 'Comentario';
    }

    alert(`Por favor, complete el campo ${campoFaltante}.`);
    return false;
  }

  alert('Formulario enviado correctamente.');
  return true;
}
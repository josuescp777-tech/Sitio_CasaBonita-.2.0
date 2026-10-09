function mostrarMenu(){document.querySelector('.menu-links').classList.toggle('activo')}
document.querySelectorAll('.menu-links a').forEach(function(enlace){enlace.addEventListener('click',function(){document.querySelector('.menu-links').classList.remove('activo')})});
const formulario=document.getElementById('formularioContacto');
if(formulario){formulario.addEventListener('submit',function(evento){evento.preventDefault();document.getElementById('mensajeFormulario').textContent='Gracias por contactarnos. Hemos recibido tu consulta.';this.reset()})}

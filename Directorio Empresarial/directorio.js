const form = document.getElementById('formulario-input');
const nombre = document.getElementById('name');
const correo = document.getElementById('email');
const numero = document.getElementById('number');
const pTabla = document.getElementById('padreTabla');
let num = 1;

form.addEventListener('submit',function(event){
    event.preventDefault();
    
    const hijo = document.createElement('tr'),
            tagth = document.createElement('th'),
            tagtNombre = document.createElement('td'),
            tagtEmail = document.createElement('td'),
            tagtTelefono = document.createElement('td'),
            tagthBoton = document.createElement('td'),
            botonElim = document.createElement('button');

    hijo.classList.add('table-secondary', 'tabla');
    botonElim.classList.add("btn", "btn-dark");
    hijo.id = num;
    botonElim.type = 'button'

    tagth.textContent = `${num}`
    tagtNombre.textContent = `${nombre.value}`
    tagtEmail.textContent = `${correo.value}`
    tagtTelefono.textContent = `${numero.value}`
    botonElim.textContent = 'Eliminar';
    
    
    hijo.appendChild(tagth)
    hijo.appendChild(tagtNombre)
    hijo.appendChild(tagtEmail)
    hijo.appendChild(tagtTelefono)
    tagthBoton.appendChild(botonElim)
    hijo.appendChild(tagthBoton)

    pTabla.appendChild(hijo)

    nombre.value = '';
    numero.value = '';
    correo.value = '';

    num++


    botonElim.addEventListener('click',function(){
        hijo.remove();
    })

});




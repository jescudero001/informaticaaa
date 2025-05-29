const personajes = {
  alex: {
    nombre: "Alex",
    historia: [
      {
        texto: "Alex es un estudiante universitario que cree en la igualdad de género y quiere promoverla en su campus. Un día ve que una compañera es interrumpida en clase por un compañero.",
        opciones: [
          { texto: "Intervenir y apoyar a su compañera", siguiente: 1 },
          { texto: "No hacer nada y seguir con su trabajo", siguiente: 2 }
        ]
      },
      {
        texto: "Alex interviene respetuosamente y anima a su compañero a escuchar. La clase valora su postura y él ayuda a crear un grupo para discutir igualdad.",
        opciones: [
          { texto: "Continuar", siguiente: null }
        ]
      },
      {
        texto: "Alex decide no intervenir. La compañera se siente ignorada y Alex se siente mal después por no actuar.",
        opciones: [
          { texto: "Reflexionar sobre su actitud y prometer cambiar", siguiente: null }
        ]
      }
    ]
  },

  maria: {
    nombre: "María",
    historia: [
      {
        texto: "María es una ingeniera que lucha por que haya más mujeres en tecnología. En su trabajo, nota que no se le asignan proyectos importantes por su género.",
        opciones: [
          { texto: "Hablar con su jefe para pedir igualdad en asignaciones", siguiente: 1 },
          { texto: "Seguir trabajando sin decir nada", siguiente: 2 }
        ]
      },
      {
        texto: "Su jefe escucha sus inquietudes y empieza un programa de igualdad para apoyar a mujeres en tecnología.",
        opciones: [
          { texto: "Continuar", siguiente: null }
        ]
      },
      {
        texto: "María sigue trabajando, pero siente frustración. Decide buscar apoyo en una red de mujeres profesionales para impulsar cambios.",
        opciones: [
          { texto: "Continuar", siguiente: null }
        ]
      }
    ]
  },

  juan: {
    nombre: "Juan",
    historia: [
      {
        texto: "Juan es padre y cree en criar a sus hijos con igualdad, sin roles de género tradicionales. En una reunión escolar, sugiere actividades que rompan estereotipos.",
        opciones: [
          { texto: "Proponer un taller de igualdad para padres y maestros", siguiente: 1 },
          { texto: "No decir nada para evitar conflictos", siguiente: 2 }
        ]
      },
      {
        texto: "El taller es un éxito y ayuda a cambiar la mentalidad de la comunidad escolar.",
        opciones: [
          { texto: "Continuar", siguiente: null }
        ]
      },
      {
        texto: "Juan se arrepiente de no hablar y decide organizar un grupo de padres para promover igualdad en la educación.",
        opciones: [
          { texto: "Continuar", siguiente: null }
        ]
      }
    ]
  }
};

const seleccionPersonaje = document.getElementById('seleccion-personaje');
const historiaSection = document.getElementById('historia');
const textoHistoria = document.getElementById('texto-historia');
const opcionesDiv = document.getElementById('opciones');

let personajeActual = null;
let pasoActual = 0;

function mostrarHistoria(personaje, paso) {
  const nodo = personajes[personaje].historia[paso];
  textoHistoria.textContent = nodo.texto;
  opcionesDiv.innerHTML = '';

  nodo.opciones.forEach((opcion, index) => {
    const btn = document.createElement('button');
    btn.textContent = opcion.texto;
    btn.classList.add('opcion-btn');
    btn.onclick = () => {
      if (opcion.siguiente !== null) {
        pasoActual = opcion.siguiente;
        mostrarHistoria(personajeActual, pasoActual);
      } else {
        // Historia terminada, mostrar mensaje final
        textoHistoria.textContent = "¡Gracias por participar en esta historia sobre igualdad de género!";
        opcionesDiv.innerHTML = '';
        const volverBtn = document.createElement('button');
        volverBtn.textContent = "Volver a seleccionar personaje";
        volverBtn.classList.add('opcion-btn');
        volverBtn.onclick = () => {
          historiaSection.classList.add('oculto');
          seleccionPersonaje.classList.remove('oculto');
        };
        opcionesDiv.appendChild(volverBtn);
      }
    };
    opcionesDiv.appendChild(btn);
  });
}

document.querySelectorAll('.personaje-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    personajeActual = btn.getAttribute('data-personaje');
    pasoActual = 0;
    seleccionPersonaje.classList.add('oculto');
    historiaSection.classList.remove('oculto');
    mostrarHistoria(personajeActual, pasoActual);
  });
});

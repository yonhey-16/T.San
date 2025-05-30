import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const palabrasClave = {
  gato: ['🐱', '¿Sabías que los gatos duermen unas 16 horas al día? ¡Qué vida!'],
  pizza: ['🍕', 'La pizza fue considerada vegetal en EE.UU. por un tiempo. 😆'],
  noche: ['🌙', 'La noche es perfecta para soñar... o para comer cereal.'],
  perro: ['🐶', 'Un perro puede oler tus emociones. ¡Son increíbles!'],
  sol: ['☀️', '¡No olvides tu protector solar!'],
  escuela: ['🏫', 'Ánimo, cada día aprendes algo nuevo.'],
  robot: ['🤖', '¡Yo también soy uno! Pero no muerdo.'],
  cine: ['🎬', 'Una buena película puede cambiarte el día.'],
  lluvia: ['🌧️', 'Perfecto para una mantita y un chocolate caliente.']
};

document.getElementById('enviar').addEventListener('click', () => {
  const texto = document.getElementById('mensaje').value.toLowerCase();
  const respuestaDiv = document.getElementById('respuesta');

  let respuesta = 'Hmm... no encontré nada interesante 😅';
  for (const clave in palabrasClave) {
    if (texto.includes(clave)) {
      const [emoji, mensaje] = palabrasClave[clave];
      respuesta = `${mensaje} ${emoji}`;
      break;
    }
  }

  respuestaDiv.textContent = respuesta;
});

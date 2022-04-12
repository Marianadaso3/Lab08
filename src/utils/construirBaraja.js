//Importaciones
//de shuffle
import shuffle from "lodash.shuffle";
//de font
import FontAwesomeClasses from "./fontAwesomeClasees";

//Definir constante del numero de cartas por baraja
const NUMERO_DE_CARTAS = 10;

export default function construirBaraja() {
  const fontAwesomeClasses = FontAwesomeClasses();
  let cartas = [];
  let indexYaUtilizados = [];

  //Implementacion para generar nueva baraja
  while (cartas.length < NUMERO_DE_CARTAS) {
    let index = 0;
    while (true) {
      //Traer random el icono del array
      index = Math.floor(Math.random() * fontAwesomeClasses.length);

      if (!indexYaUtilizados.includes(index)) {
        indexYaUtilizados.push(index);
        break;
      }
    }

    let carta = {
      id: index,
      icono: fontAwesomeClasses[index],
      fueAdivinada: false,
    };

    cartas.push(carta);
    //clonar la carta
  }

  let cartasTotales = [];
  for (let i = 1; i < 3; i++) {
    for (let j = 0; j < cartas.length; j++) {
      const carta = cartas[j];

      cartasTotales.push({ ...carta, num: i });
    }
  }

  //cartas.push(...carta);
  return shuffle(cartasTotales);
}

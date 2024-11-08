/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("<----Esercizio 1---->");
const pets = ["dog", "cat", "hamster", "redfish"];

for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("<----Esercizio 2---->");

const newPets = pets.sort();

console.log(newPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("<----Esercizio 3---->");

const reversePets = newPets.reverse();

console.log(newPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.

*/
console.log("<----Esercizio 4---->");

let shiftPets = newPets.shift();
newPets.push(shiftPets);
console.log(newPets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log("<----Esercizio 5---->");

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "XXXXXX";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("<----Esercizio 6---->");

//creo un nuovo oggetto
let newCar = {
  brand: "Fiat",
  model: "Panda",
  color: "yellow",
  trims: ["life", "style"],
  licensePlate: "XXXXXX",
};

cars.push(newCar); //lo pusho dentro all'array

for (i = 0; i < cars.length; i++) {
  //per ogni elemento all'interno dell'array cars
  cars[i].trims.pop(); //all'interno di ogni i di cars, guarda i trim e elimina l'ultimo elemento
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

console.log("<----Esercizio 7---->");

for (i = 0; i < cars.length; i++) {
  let x = cars[i].trims.shift();
  justTrims.push(x);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("<----Esercizio 8---->");

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log("<----Esercizio 9---->");

let x = 23;
let indexA = numericArray.indexOf(x);
while (i <= indexA) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array 
    composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

console.log("<----Esercizio 10---->");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];

const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  let index = alphabet.indexOf(charactersArray[i]);
  newArray.push(index + 1);
}
console.log(newArray);

console.log("<----Esercizio 10 con lo switch 1---->");

const position = [];

for (let i = 0; i < charactersArray.length; i++) {
  let index = alphabet.indexOf(charactersArray[i]);
  switch (index) {
    case -1:
      position.push(-1);
      break;
    default:
      position.push(index + 1);
  }
}
console.log(position);

console.log("<----Esercizio 10 con lo switch 2---->");

const pos2 = [];

for (let i = 0; i < charactersArray.length; i++) {
  let index = alphabet.indexOf(charactersArray[i]);
  switch (true) {
    case index !== -1:
      pos2.push(index + 1);
      break;
    default:
      console.log("caratteri non validi");
      break;
  }
}
console.log(pos2);

console.log("<----Esercizio 10 con lo switch 3---->");

const positionArray = []
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      positionArray.push(1);
      break;
    case "b":
      positionArray.push(2);
      break;
    case "c":
      positionArray.push(3);
      break;
    case "d":
      positionArray.push(4);
      break;
    case "e":
      positionArray.push(5);
      break;
    case "f":
      positionArray.push(6);
      break;
    case "g":
      positionArray.push(7);
      break;
    case "h":
      positionArray.push(8);
      break;
    case "i":
      positionArray.push(9);
      break;
    case "l":
      positionArray.push(10);
      break;
    case "m":
      positionArray.push(11);
      break;
    case "n":
      positionArray.push(12);
      break;
    case "o":
      positionArray.push(13);
      break;
    case "p":
      positionArray.push(14);
      break;
    case "q":
      positionArray.push(15);
      break;
    case "r":
      positionArray.push(16);
      break;
    case "s":
      positionArray.push(17);
      break;
    case "t":
      positionArray.push(18);
      break;
    case "u":
      positionArray.push(19);
      break;
    case "v":
      positionArray.push(20);
      break;
    case "z":
      positionArray.push(21);
    break
  }
}

console.log (positionArray)

// creating cards
const nameList = ["Jake", "John", "Jilpeth"];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
}

writeCards(nameList, 'birthday'); 

// decrementing

function countDown(counting) {
    let i = counting; 
    while (i >= 0) {
      console.log(i--);
      debugger;
    }
}

countDown(11);

module.exports = {grootsteGetal}

/* Algoritmiek opgave #3
   Opdracht: pas de functie zo aan,
   dat de functie het grootste getal
   van a en b teruggeeft
*/

function grootsteGetal(a, b) {
  var uitkomst = undefined;
  // vul hieronder aan
  if (a - b < 0) {
    uitkomst = b
  }
  else {
    uitkomst = a
  }

  return uitkomst;
}
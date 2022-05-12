//DO ALL'UTENTE LA POSSIBILITA DI SCEGLIERE FRA PARI E DISPARI
let userSelection = document.getElementById('selection').value;

//DO ALL'UTENTE LA POSSIBILITA DI SCEGLIERE UN NUMERO DA 1  A 5
let userNum = parseInt(document.getElementById('number').value);

//CREO UN EVENTO PER INVIARE LE INFORMAZIONI
const startButton = document.getElementById('start');

startButton.addEventListener ('click', 
function () {
    console.log(userSelection);
    console.log(userNum);
    //RICHIAMO LA FUNZIONE CHE GENERA UN NUMERO RANDOM DA 1 A 5 PER IL PC
    pcNum = parseInt(getRandomNum (1, 5));
    console.log(pcNum);

    // CREO UNA FUNZIONE CHE SOMMI IL NUMERO SCELTO DALL'UTENTE
    // CON IL NUMERO RANDOM ASSEGNATO AL PC E VERIFICHI
    // SE E PARI O DISPARI
    function sumNum () {
        let sum = userNum + pcNum;
        console.log(sum);

        let sumSign;
        if (sum % 2 === 0) {
            sumSign = 'pari'
        } else {
            sumSign = 'dispari'
        };

        return sumSign;
    };

    //SE LA SOMMA CORRISPONDE ALLA SCELTA(FRA PARI E DISPARI) DELL'UTENTE
    //DICHIARO ALL'UTENTE CHE HA VINTO
    //ALTRIMENTI DICHIARO ALL'UTENTE CHE HA PERSO
    let evenOrOdd = sumNum();

    if (evenOrOdd == userSelection) {
        console.log('you win');
    } else {
        console.log('you lose');
    };

});

//CREO UNA FUNZIONE CHE GENERI UN NUMERO RANDOM DA 1 A 5 PER IL PC
function getRandomNum (min, max) {
    let randomNum = Math.floor(Math.random() * (max - min) +1) +1;

    return randomNum;
};







//CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA E AVVIARE LA VERIFICA


const startVerify = document.getElementById('verify');

startVerify.addEventListener ('click',
function () {
    let userWord  = document.getElementById('word').value;
    console.log(userWord); 

  
    //TRASFORMO LA PAROLA IN UN ARRAY DI LETTERE E VICEVERSA
     let wordArr = userWord.split('');
     console.log(wordArr);

     let wordArrReverse = wordArr.reverse();
     console.log(wordArrReverse);

     let wordReverse = wordArrReverse.join('');
     console.log(wordReverse);

    ///ANALIZZO LA PAROLA E CONTROLLO SE E' PALINDROMA
    //AVVISO L'UTENTE DEL RISULTATO DELLA VERIFICA
     if (userWord == wordReverse) {
         console.log("questa parola e' palindroma");
     } else {
         console.log("questa parola non e' palindroma");
     };

    // console.log(checkWord());

    // function checkWord () {
    //     let wordArr = userWord.split('');
    //     console.log(wordArr);

    //     let letterByLeft;

    //     let letterByRight;
    
    //     for (let i = 0; i < wordArr.length; i ++) {
    //         letterByLeft = wordArr[i];
    //     };
    
    //     for (let j = wordArr.length; j > 0; j --) {
    //         letterByRight = wordArr[j];
    //     };

    //     if (letterByLeft == letterByRight) {
    //         return "questa parola e' palindroma";
    //     } else {
    //         return "questa parola non e' palindroma";
    //     };

    // };


});





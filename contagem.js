let tempo = 10;
const contador = setInterval(() => {
     console.log(tempo);

     if (tempo === 0){
         clearInterval(contador);
         console.log ("Lançamento realizado!");


     }
     tempo--;




}, 1000 );
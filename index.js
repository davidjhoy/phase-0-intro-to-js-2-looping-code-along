// Code your solutions in this file
function writeCards(arra, occasion){
    const newAr = [];
    for(let i=0; i<arra.length; i++){
        newAr.push(`Thank you, ${arra[i]}, for the wonderful ${occasion} gift!`);

    }
    return newAr;
    
}

function countDown(num){
    for(let i = num; i>= 0; i--){
        console.log(i);
    }
}


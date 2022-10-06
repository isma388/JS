// you can write js here
console.log('exo-2');
const myDate = new Date();
const dayS = "nous somme en jour de semaine";
const dayW = "nous somme le weekend";


console.log(myDate.getDay());

        if (myDate.getDay() > 1 && myDate.getDay() < 6){
        console.log(dayS);
        }
        else if (myDate.getDay() === 1 && myDate.getHours() < 9){
            console.log(dayS);
        }

        else if (myDate.getDay() === 5 && myDate.getHours() < 17) {
            console.log(dayS);
        }
            else{
                console.log(dayW);
            }

            const isTesting = false;
            let jourJ = myDate.getDay();
            let hour = myDate.getHours();

            if (isTesting){
                jourJ = prompt('quelle jour de la semaine sommes-nous',10);
                hour = prompt('quelle heure est-il ?',5);
                console.log(isTesting);
             }else {
                 console.log(jourJ,'/',hour);
             }


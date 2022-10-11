import { Book } from "./Book";


let konyvek : Book[] = [];

let konyv = new Book('Kőszívű ember fiai', 2);
let konyv1 = new Book('Paranox', 3);
let konyv2 = new Book('Egy Ropi Naplója', 10);
let konyv3 = new Book('Egy Ropi Naplója 2', 8);
let konyv4 = new Book('Egy Ropi Naplója 3', 9);

konyvek.push(konyv);
konyvek.push(konyv1);
konyvek.push(konyv2);
konyvek.push(konyv3);
konyvek.push(konyv4);

for(let e of konyvek){
    if(e.getrating() > 7){
        e.kiir();
    }
}

console.log("");

function bestof(konyvek : Book[]) : Book{
    let max : Book = konyvek[0];
    for(let e of konyvek){
        if(e.getrating() > max.getrating()){
            max = e;
        }
    }
    return max;
}

bestof(konyvek).kiir();






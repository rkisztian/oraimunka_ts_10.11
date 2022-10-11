"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let konyvek = [];
let konyv = new Book_1.Book('Kőszívű ember fiai', 2);
let konyv1 = new Book_1.Book('Paranox', 3);
let konyv2 = new Book_1.Book('Egy Ropi Naplója', 10);
let konyv3 = new Book_1.Book('Egy Ropi Naplója 2', 8);
let konyv4 = new Book_1.Book('Egy Ropi Naplója 3', 9);
konyvek.push(konyv);
konyvek.push(konyv1);
konyvek.push(konyv2);
konyvek.push(konyv3);
konyvek.push(konyv4);
for (let e of konyvek) {
    if (e.getrating() > 7) {
        e.kiir();
    }
}
console.log("");
function bestof(konyvek) {
    let max = konyvek[0];
    for (let e of konyvek) {
        if (e.getrating() > max.getrating()) {
            max = e;
        }
    }
    return max;
}
bestof(konyvek).kiir();

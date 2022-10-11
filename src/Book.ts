
export class Book{
    
    #name : string;
    #rating : number;
    length: any;

    constructor(name : string, rating : number){
        this.#name = name;
        this.#rating = rating;
    }

    public getrating(){
        return this.#rating;
    }


    public setrating (rating : number){
        if(this.#rating <= 1 || this.#rating >=10){
            this.#rating = rating;
        }else{
            console.log("Nem megfelelő értékkel értékelte a könyvet.")
        }
    }    


    kiir() : void{
        console.log("Könyv neve: " + this.#name + " Értékelése: " + this.#rating)
    }

}





console.log("Esto es código hecho con TypeScript");

class Bebida{
    private name: string

    constructor(name: string){
        this.name = name;

    }

    info(): string{
        return this.name;
    }

}
const beber = new Bebida("agua");
console.log(beber.info());


//Inferface

interface Product{
    price: number;
    getPrice(): string;
}

// Herencia

class Cerveza extends Bebida implements Product{
    private alcohol: number;
    price: number;

    constructor (name: string, alcohol: number, price:number){
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return "$ " +this.price;
    }
    info(): string {
        return super.info()+ " " +this.alcohol;
    }

}

//Implementación de interface

class Snack implements Product{
    name : string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "El precio es: $" +this.price;
    }
}

const cerveza = new Cerveza("erdinger",8.5, 100);
console.log(cerveza.info());

const prodcuts: Product[] = [
    new Cerveza("corona", 4.5 ,3500),
    new Snack("Papas", 2500),
    new Cerveza("Heineken", 5, 4000),
];

function getPrices(items: Product[]){
    for(const item of items){
        console.log(item.getPrice());
    }
}

getPrices(prodcuts);


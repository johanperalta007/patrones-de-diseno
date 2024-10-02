
class SaleContext{

    constructor(strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    calculate(amount){
        return this.strategy.calculate(amount);

    }
}

class RegularSalesStrategy{
    constructor(tax){
        this.tax = tax;
    }

    calculate(amount){
        return amount + (amount * this.tax);
    }
}

class DiscountSalesStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount){
        return amount + (amount * this.tax) - this.discount;
    }

}

class ForeignSalesStrategy{


    calculate(amount){

        return amount * this.getDollarPrice();
    }
    getDollarPrice(){
        return 20;
    }

}

// const regularSale = new RegularSalesStrategy(0.16);
// const discountSale = new DiscountSalesStrategy(0.16, 3);
// const foreignSale = new ForeignSalesStrategy();
// const sale = new SaleContext(regularSale);
// console.log(sale.calculate(10));
// sale.setStrategy(discountSale);
// console.log(sale.calculate(10));
// sale.setStrategy(foreignSale);
// console.log(sale.calculate(10));


//Exlicacion práctica ----------------------------------------------------

const data = [{
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza del estilo Weizenbock",
    img: "/images/erdinger.jpeg",
},
{
    name: "Corona",
    country: "México",
    info: "la cerveza corona es una marca mundialmente reconocida",
    img: "https://i5.walmartimages.com/seo/Corona-Extra-Mexican-Lager-Import-Beer-12-Pack-12-fl-oz-Glass-Bottles-4-6-ABV_d51afc9c-2cfd-4538-9838-b20f3743f975.8fe3882e04ab80e47fbb6a40e2ef04e6.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
},
{
    name: "Andina",
    country: "Colombia",
    info: "Cerveza patrocinadora oficial de Millonarios FC",
    img: "https://http2.mlstatic.com/D_NQ_NP_793245-MCO53950504901_022023-O.webp",
}

];


class InfoContext{

    constructor(strategy,data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }
    setStrategy(strategy){
        this.strategy = strategy;

    }
    show(){
        this.strategy.show(this.data, this.element);
    }

}

class ListStrategy{

    show(data, element){

        //'reduce' realiza un recorrido y despues nos devulve un String concatenado con cada elemento
        element.innerHTML = data.reduce((ac, beer) => { 
            return ac + `<div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
        </div>
    <hr>`;
        }, "");

    }
}

class DetailedListStrategy{

    show(data, element){

        element.innerHTML = data.reduce((ac, beer) => { 
            return ac + `<div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
            <p>${beer.info}</p>
        </div>
    <hr>`;
        }, "");

    }
}

class ListWithImagesStrategy{

    show(data, element){

        element.innerHTML = data.reduce((ac, beer) => { 
            return ac + `<div>
            <img width="10%" src="${beer.img}">
            <h2>${beer.name}</h2>
        </div>
    <hr>`;
        }, "");

    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImagesStrategy()
]

const info = new InfoContext(new ListStrategy(),
data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});


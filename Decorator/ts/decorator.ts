interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}


// Decorator
// La palabra abstract impide crear un objeto directamente de la clase, pero de los hijos sí.
abstract class ProductDecorator implements Component {
    protected component: Component;
    constructor(component: Component) {
        this.component = component;
    }
    // Envuelve el componente que estamos recibiendo en el constructor
    public getDetail(): string {
        return this.component.getDetail();
    }
}

// Decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
    private tradeName: string;
    private brand: string;

    constructor(component: Component, tradeName: string, brand: string) {
        super(component);
        this.tradeName = tradeName;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradeName} ${this.brand} ` + super.getDetail();
    }
}

// decorator 2

class   StoreProdcutDecorator extends ProductDecorator{
    private price: number;

    constructor(component: Component, price:number) {
        super(component);

        this.price = price;
    }

    getDetail(): string {
        return super.getDetail() +
            `${this.price}`;
    }
}

// Decorator 3

class HTMLProductDecorator extends  ProductDecorator{

    getDetail(): string {
        return `<h1>Información del producto</h1>
        <p>
        ${super.getDetail()}
        </p>`;
    }

}


// Ejecución
const productComponent = new ProductComponent("Cerveza ");
console.log(productComponent.getDetail()); // Salida: Cerveza
// Decorator 1 conponent
const commercialInfoProduct = new ComercialInfoProductDecorator(productComponent, "London Porter","Fuller's");
console.log(commercialInfoProduct.getDetail());

// Decorator 2 con component

const storeProduct = new StoreProdcutDecorator(productComponent,  15.5);
console.log(storeProduct.getDetail());

// Decorator 2 con decorator 1
const storeProduct2 = new StoreProdcutDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

// Decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());




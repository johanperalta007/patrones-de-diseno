class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

// Decorator
class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(e => {
            e.title = e.title.toUpperCase();
            return e;
        });
        return newData;
    }
}

//Decorator 2

class HtmlClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(e => {
            e.title = `<h1>${e.title}</h1>`
            e.thumbnailUrl = `<img src="${e.thumbnailUrl}">`
            return e;
        });
        return newData;
    }
}

// Función anónima
(async function () {
    // console.log("HOLAAAAA SOY UNA FUNCIÓN ANÓNIMA");

    const url = "https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponent(url);
    const upperCaseClient = new UpperCaseClientDecorator(client);
    const data = await upperCaseClient.getData();
    //console.log(data);

    const upperClient = new UpperCaseClientDecorator(client);
    const data2 = await upperClient.getData();
    //console.log(data2);

    const htmlClient = new HtmlClientDecorator(upperClient);
    const data3 = await htmlClient.getData();
    console.log(data3);
    divContent1.innerHTML = data3.reduce((ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    }, "");

    const htmlClient2 = new HtmlClientDecorator(client);
    const data4 = await  htmlClient2.getData();
    divContent2.innerHTML = data4.reduce((ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    }, "");


})();

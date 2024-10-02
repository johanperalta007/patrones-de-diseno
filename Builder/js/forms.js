class Form{
    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    }
    //'reduce' recorre todo el Array y asigna todos sus valores en la variable jp

    getContent(){
        return `<form method="post" action="${this.action}">
     
            ${this.controls.reduce((jp, c)=>{ 
                return jp + `<div>
                    ${this.getLabel(c)}
                    ${this.getInput(c)}
            </div>`
        }, "")}
        <button type="submit">Enviar</button>  
      </form>`
    }

    getLabel(control){
        return  `<label>${control.text}</label>`
    }

    getInput(control){
        return `<input type="${control.type}"
                id="${control.name}"
                name="${control.name}"            
                >`
    }

}

class FormBuilder{
    constructor() {
        this.reset();
    }
    reset(){
        this.action = "";
        this.controls = [];
    }

    setAction(action){
        this.action = action;
        return this; // Se retorna el mismo objeto para poder encadenar los métodos
    }

    setText(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "text"
        });
        return this;
    }

    setEmail(name, email){
        this.controls.push({
            name: name,
            text: email,
            type: "email"
        });
        return this;
    }

    setCheckBox(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "checkBox"
        });
        return this;
    }

    setColor(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "color"
        });
        return this;
    }

    build(){

        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }
}

class FormDirector{
    constructor(formBuilder) {
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    }

    createPeopleForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("firstName", "Nombre")
        .setText("lastName", "Apellidos");
    }

    createContactForm(){
        this.formBuilder.reset(); // Va a borrar todo lo que tenga la clase FormBuilder
        this.formBuilder.setText("name", "Nombre del interesado")
            .setEmail("email", "Apellidos")
            .setText("message", "Mensaje");

    }
}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder.setAction("add.php")
                                    .setText("firstName","Nombre")
                                    .setText("lastName","Apellidos")
                                    .setCheckBox("drinker","¿Eres bebedor?")
                                    .setColor("favoriteColor","Color Favorito")
                                    .build();

console.log(formPeople);

form1.innerHTML = formPeople.getContent();

const forMail = frmBuilder.setAction("send.php")
                                      .setText("name", "Nombre")
                                      .setEmail("email", "Correo Electrónico")
                                      .build();

form2.innerHTML = forMail.getContent();

const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();

// Se va a cerear nuevo formulario reutilizando el método sin necesidad de escribir de nuevo todos los campos

director.createPeopleForm();
form4.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();



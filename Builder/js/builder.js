
class Person{
    constructor(name, lastName, age, country, city, hobbies) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(){
        return  this.name + " " + this.lastName;
    }
}

class PersonBuilder{
    constructor() {

        this.reset();
    }

    reset(){
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name){
        this.name = name;
        return this; // Va a retornarse asi mismo
    }
    setLastName(lastName){
        this.lastName = lastName;
        return this;
    }

    setAge(age){
        this.age = age;
        return this;
    }

    setCountry(country){
        this.country = country;
        return this;
    }
    setCity(city){
        this.city = city;
        return this;
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
        return this;
    }

    build(){
        const person = new Person(

            this.name,
        this.lastName,
        this.age,
        this.country,
        this.city,
        this.hobbies

        );
        this.reset();
        return person;
    }
}

const personBuilder = new PersonBuilder();

// Usar el builder para crear una instancia de Person

const johan =  personBuilder.setName("Johan")
                                             .setLastName("Peralta")
                                             .addHobby("Jugar Video Juegos")
                                             .addHobby("hablar con mi amorcito")
                                             .build();  //Retorna un obejto del tipo person a Johan

console.log(johan);

const juan = personBuilder.setName("Juan")
                                  .setLastName("el Gay")
                                  .setAge(24)
                                  .setCountry("Colombia")
                                  .setCity("Bogota")
                                  .addHobby("jugar FIFA")
                                  .addHobby("Estar con Ana")
                                  .build();
console.log(juan);

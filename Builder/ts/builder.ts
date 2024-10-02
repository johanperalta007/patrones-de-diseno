class Person{
    private name:string;
    private lastName:string;
    private age:number;
    private country:string;
    private city:string;
    private hobbies:string[];

    constructor(name: string,
    lastName:string,
                age: number, country: string,
                city:string, hobbies:string[]) {

        this.name= name;
        this.lastName= lastName;
        this.age= age;
        this.country= country;
        this.city= city;
        this.hobbies= hobbies;

    }

    getFullName(): string{
        return this.name + " " + this.lastName;
    }

}
interface PersoonBuilder{
    name:string;
    lastName:string;
    age:number;
    country:string;
    city: string;
    hobbies: string[];

    setName(name: string): PersoonBuilder;
    setLastName(lastName: string): PersoonBuilder;
    setAge(age: number): PersoonBuilder;
    setCountry(country: string): PersoonBuilder;
    setCity(city: string): PersoonBuilder;
    addHobby(hobby: string): PersoonBuilder;
    build(): Person;

}

class NormalPersonBuilder implements  PersoonBuilder{
    name:string;
    lastName:string;
    age:number;
    country:string;
    city: string;
    hobbies: string[];

    constructor() {

        this.name= "";
        this.lastName= "";
        this.age= 0;
        this.country= "";
        this.city= "";
        this.hobbies= [];
    }
    reset(): void{
        this.name= "";
        this.lastName= "";
        this.age= 0;
        this.country= "";
        this.city= "";
        this.hobbies= [];
    }

    setName(name: string): PersoonBuilder{
        this.name = name;
        return this;
    }
    setLastName(lastName: string): PersoonBuilder{
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): PersoonBuilder{
        this.age = age;
        return this;
    }
    setCountry(country: string): PersoonBuilder{
        this.country = country;
        return this;
    }
    setCity(city: string): PersoonBuilder{
        this.city = city;
        return this;
    }
    addHobby(hobby: string): PersoonBuilder {
        this.hobbies.push(hobby);
        return this;
    }

    build(): Person{
        const person = new Person(this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies);

        this.reset();
        return person;
    }

}

class PersonDirector{

    private personBuilder: PersoonBuilder;

    constructor(personBuilder: PersoonBuilder) {
        this.personBuilder = personBuilder;
    }

    createSimplePerson(name: string, lastName:string){
        this.personBuilder.setName(name)
            .setLastName(lastName);
    }


}

// creación 1

const personBuilder = new NormalPersonBuilder();

const hector = personBuilder.setName("Hector").setLastName("De León")
    .addHobby("Comer")
    .addHobby("Dormir")
    .build();

console.log(hector);

// creación 2

const juan = personBuilder.setName("Juan").setLastName("Rivera")
    .addHobby("Dormir")
    .addHobby("Jugar Xbox")
    .addHobby("Levantarse Tarde")
    .setAge(25)
    .setCountry("Colombia")
    .setCity("Bogotá")
    .build();
console.log(juan);

// Creación con director
const director = new PersonDirector(personBuilder);
director.createSimplePerson("John", "Cena");
const johnCena = personBuilder.build();

console.log(johnCena);


class Singleton{

    static getInstance(){
        return Singleton.instance;
    }

    constructor(){  // Se invoca un construcotr por cada objeto de la clase
        
        this.random = Math.random();
        if(Singleton.instance){
            
            return Singleton.instance;

        }
        Singleton.instance = this;

    }
}

// const singleton = new Singleton(); // Sirve para crear un objeto
// const singleton2 = new Singleton();
// const singleton3 = Singleton.getInstance(); 
// console.log(singleton.random);
// console.log(singleton2.random);
// console.log(singleton3.random);
// console.log(singleton === singleton2);
// console.log(singleton3 === singleton2);

class  WeekDays{
    daysEs = ["Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"]

    daysEn = ["Mondey",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]

    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }

        WeekDays.instance = this;

    }
    getDays(){
        return this.lang === "Es" ?
        this.daysEs:
        this.daysEn;

    }
}

const weekDays = new WeekDays("Es");
const weekDays2 = new WeekDays("En");
console.log(weekDays.getDays());
console.log(weekDays.getDays());

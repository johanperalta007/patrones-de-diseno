

 // En TypesScript se peude privatizar los atribustos de una clase para no poder acceder
 // A diferencia de JavasScript que hayq eu ahcer trucos para que esto suceda, en este lenguaje es mucho más complecado.
class SingletonTS{

   private static instance: SingletonTS;  
   public random: number;

   private constructor(){

    this.random = Math.random();

   }

   public static getInstance(): SingletonTS{
    if(!this.instance){
        this.instance = new SingletonTS();
    }
    return this.instance;
   }

}

const singleton =  SingletonTS.getInstance();
const singleton2 =  SingletonTS.getInstance();

console.log(singleton.random);
console.log(singleton2.random);

// console.log(singleton === singleton2);

singleton.random = 10;

console.log(singleton.random);
console.log(singleton2.random);
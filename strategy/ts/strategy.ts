
interface Strategy{
    login(user: string, password:string) : boolean;
}

class loginContext{
    private strategy: Strategy;

    constructor(strategy: Strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean{
        return this.strategy.login(user,password);
    }
}

class loginDBStrategy implements Strategy{

    login(user: string, password:string){
        console.log("Nos dirigimos a la base de datos");
        if(user == "admin" && password == "entra"){
            return true;
        }
        return false;
    }

}

class loginServiceStrategy implements Strategy{

    login(user: string, password:string){
        console.log("Nos dirigimos a un servicio de auntenticación");
        if(user == "admin" && password == "entra"){
            return true;
        }
        return false;
    }

}

class loginGoogleStrategy implements Strategy{

    login(user: string, password:string){
        console.log("Nos dirigimos a un servicio de Goolge authenticator");
        if(user == "admin" && password == "entra"){
            return true;
        }
        return false;
    }

}

const auth = new loginContext(new loginDBStrategy());
const resp = auth.login("admin", "entra");
// console.log(resp);

auth.setStrategy(new loginServiceStrategy());
auth.login("admin", "entra");
auth.setStrategy(new loginGoogleStrategy());
auth.login("admin", "entra");

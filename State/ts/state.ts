interface State {
    next(ticket: Ticket): number | null;
    add(ticket: Ticket, quantity: number): void;
}

class Ticket {
    private state: State;
    quantity: number;
    readonly limit: number;
    private number: number;

    constructor(limit: number) {
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        this.state = new EmptyState(); // Establecer el estado inicial
    }

    get getNumber(): number {
        return this.number++;
    }

    setState(state: State): void {
        this.state = state;
    }

    next(): number | null {
        return this.state.next(this);
    }

    add(quantity: number): void {
        this.state.add(this, quantity);
    }

    getState(): State {
        return this.state;
    }
}

class EmptyState implements State {
    next(ticket: Ticket): null {
        return null;
    }

    add(ticket: Ticket, quantity: number): void {
        if ((ticket.quantity + quantity) < ticket.limit) {
            ticket.quantity += quantity;
            ticket.setState(new WithDataState());
        } else if ((ticket.quantity + quantity) === ticket.limit) {
            ticket.quantity += quantity;
            ticket.setState(new FullState());
        }
    }
}

class WithDataState implements State {
    next(ticket: Ticket): number {
        ticket.quantity--;
        if (ticket.quantity <= 0) {
            ticket.setState(new EmptyState());
        }
        return ticket.getNumber;
    }

    add(ticket: Ticket, quantity: number): void {
        if ((ticket.quantity + quantity) < ticket.limit) {
            ticket.quantity += quantity;
        } else if ((ticket.quantity + quantity) === ticket.limit) {
            ticket.quantity += quantity;
            ticket.setState(new FullState());
        }
    }
}

class FullState implements State {
    next(ticket: Ticket): number {
        ticket.quantity--;
        if (ticket.quantity <= 0) {
            ticket.setState(new EmptyState());
        } else {
            ticket.setState(new WithDataState());
        }
        return ticket.getNumber;
    }

    add(ticket: Ticket, quantity: number): void {
        console.log("Ticket lleno");
    }
}

// Ejecución
const ticket = new Ticket(5);
console.log(ticket.getState());
console.log(ticket.next());
ticket.add(6);
console.log(ticket.getState());
console.log(ticket.next());
ticket.add(4); // No esta lleno falta 1
console.log(ticket.getState());
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3); // con 3 queda lleno en 5
console.log(ticket.getState());
ticket.add(1); // No se agregan ya que esta lleno
console.log(ticket.next());
console.log(ticket.getState());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.getState());
console.log(ticket.next()); // Ya no hay Tickets


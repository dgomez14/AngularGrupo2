export interface Person {
    name: string;
    age?: number;
    username?: string;
    email?: string;
}

export class User implements Person {
    constructor(public name: string, public username: string = 'username', public age: number = 18) {
    }
}

import { Melody } from './melody.model';

export class User {
    //Constructor
    constructor(
        private _username: string,
        private _name: string,
        private _firstName: string,
        private _melodies = new Array<Melody>()
    ) { }

    //Getters
    get username(): string {
        return this._username;
    }

    get name(): string {
        return this._name;
    }

    get firstName(): string {
        return this._firstName;
    }

    get melodies(): Array<Melody> {
        return this._melodies;
    }

    //Methods
    toJSON(): any {
        return {
            username: this.username,
            name: this.name,
            firstName: this.firstName,
            melodies: this.melodies.map(melody => melody.toJSON())
        };
    }
}
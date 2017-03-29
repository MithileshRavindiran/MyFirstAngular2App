/**
 * Created by x073880 on 3/15/2017.
 */

export class Address {
street: string;
suite: string;
city: string;
zipcode: number;
}

export class User {
id: number;
name: string;
phone: number;
email: string;
address = new Address();
}
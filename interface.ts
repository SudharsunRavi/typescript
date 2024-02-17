//INTERFACES- same as TYPE ALIASES, but used to create objects
//it can be extended, rewritten, used for another interface

interface Person{
    name: string;
    age: number;
    gender: string;
}

//extending the interface
interface Person{
    email: string;
    phone: number;
}
//now the PERSON interface consists of name, age, gender, email, phone

interface User extends Person{
    premiumUser: boolean;
}
//now the USER interface consists of name, age, gender, email, phone, premiumUser

export {}
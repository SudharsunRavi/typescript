//UNION - used when a value can be more than a single type

let a: string | number ;
a=10; //allowed
a="10" //allowed

//-------------------------------------------------------------------------------------------------------------------------------//

//TUPLES- used when a value can be more than a single type, but the order of the types is fixed. The order should be properly maintained
// if we want a datatype to be in a following order, first dtring, then number, then boolean

let admin: [string, number, boolean];
admin=["Sudharsun", 19, true]; //allowed
// admin=[19, "Sudharsun", true]; not allowed as the order is not maintained
//1 - normal function syntax
//function <function Name> <parameters> {body}
function PrintName(name) {
    //console.log('Welcome ' + name);
    return 'Welcome ' + name;
}
function Add(number1, number2) {
    const result = number1 + number2;
    console.log(result);
    const name = PrintName('Heba');
    console.log(name);
}
//2- Arrow function syntax
const PrintNameArrow = (name) => {
    console.log('Welcome ' + name);
};
//3- Anonymous function
//(name)=>{}

//PrintName('Heba')
Add(10, 20);

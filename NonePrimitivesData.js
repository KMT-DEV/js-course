//1- Arrays
//2- Objects
//3- Functions
// Function:
//Arrow Function
//Normal Function

const colors = ['Red', 'Green', 'Blue'];
console.log(colors);

const SalesTable = {
    SalesId: 100,
    Tax: 14,
    TotalAmount: 1000,
    return: false,
};
const SalesLine1 = {
    SalesId: 100,
    ProductId: 1,
    Quantity: 2,
};
const SalesLine2 = {
    SalesId: 100,
    ProductId: 2,
    Quantity: 4,
};
const SalesLines = [SalesLine1, SalesLine2];
const SalesOrder = {
    SalesHeader: SalesTable,
    SalesLines: SalesLines,
};
// const SalesOrder = {
//     SalesId: 100,
//     Tax: 14,
//     TotalAmount: 1000,
//     return: false,
//     SalesLines: [
//         {
//             SalesId: 100,
//             ProductId: 2,
//             Quantity: 4,
//         },
//         {
//             SalesId: 100,
//             ProductId: 1,
//             Quantity: 2,
//         },
//     ],
// };

console.log(SalesOrder);


const isBlack = true
const isWhite = true

console.log(isBlack + isWhite)
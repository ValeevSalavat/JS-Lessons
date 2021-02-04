const allProducts = {
    "1Product":123,
    "2Product":234,
    "3Product":345,
    "4Product":456,
    "5Product":567,
    "6Product":678,
    "7Product":789,
    "8Product":890,
    "9Product":901,
    "10Product":12,
    "11Product":1234,
    "12Product":2345,
    "13Product":3456,
    "14Product":4567,
    "15Product":5678
}

let usersProducts=[];
let totalPrice=0;

function addProductToBin(...args){
    args.forEach(element => {
        usersProducts.push(element);
    });
    
}  
function countBasketPrice(...args){
    args.forEach(element => {
        totalPrice = allProducts[element]++;
    })
}


addProductToBin("2Product","3Product","5Product");
countBasketPrice("2Product","3Product","5Product");

console.log(usersProducts);
console.log(totalPrice);


const allProducts = {
    "чашка":123,
    "ложка":234,
    "миска":345,
    "тарелка":456,
    "миксер":567,
    "шмиксер":678,
    "товар 666":789,
    "кольца":890,
    "ноутбук":901,
    "телефон":12,
    "монитор":1234,
    "оригами":2345,
    "ютуб":3456, 
    "кря":4567,
    "пис":5678
}

let usersProducts=[];
let totalPrice=0;

function addProductToBin(...args){
    args.forEach(element => {
        usersProducts.push(element);
    });
    
}  
function getTotalyPrice(){
    let output=0;
    usersProducts.forEach(item=>{
        output+=allProducts[item];
    });
    return output;
}



addProductToBin("чашка","тарелка","монитор","ютуб","товар 666","ноутбук");


var binContainer = document.querySelector(".container");
let template= binContainer.appendChild(document.createElement("div"));
template.textContent="ТОВАР    :    Цена";

let liChilds= binContainer.appendChild(document.createElement("div"));
liChilds.className= binContainer.className+"__liChild";



usersProducts.forEach(item=>{
    liChilds.appendChild(document.createElement("div"));
    
    let q = usersProducts.indexOf(item);
    liChilds.childNodes[q].textContent =`${item.toUpperCase()}    :    ${allProducts[item]} евро`;
    liChilds.childNodes[q].className=binContainer.className+"__item";

});


let totalyPrice= binContainer.appendChild(document.createElement("div"));
totalyPrice.className=binContainer.className+"__totalyPrice";

totalyPrice.textContent = `Общая стоимость корзины:  ${getTotalyPrice()}. Всего товаров ${usersProducts.length} штук.`;


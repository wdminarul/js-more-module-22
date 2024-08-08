const phones = [
    {name: 'samsung', color: 'black', ram: '8gb', price: 42000},
    {name: 'Oppo', color: 'red', ram: '8gb', price: 33000},
    {name: 'Motorola', color: 'black', ram: '8gb', price: 27000},
    {name: 'Iphone', color: 'black', ram: '8gb', price: 70000},
]

function getChipest(phones){

    let cheap = phones[0]
    for(const num of phones){
        if(num.price < cheap.price){
            cheap = num
        }
        
    }
    return cheap;
}

const allPhone = getChipest(phones);
console.log(allPhone);
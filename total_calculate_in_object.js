const shopping =[
    {name: 'Beef', price: 700},
    {name: 'chicken', price: 250},
    {name: 'potato', price: 50},
    {name: 'vegetable', price: 80},
    {name: 'oil', price: 230},
    {name: 'Mosla', price: 150},
    {name: 'rice', price: 1800},
]

function totalShoppingCost(prices){
    let total = 0;

    for(const num of prices){
        total = total + num.price
    }
    return total
}

const shoppingCost = totalShoppingCost(shopping);
console.log('Total shopping cost is :', shoppingCost);
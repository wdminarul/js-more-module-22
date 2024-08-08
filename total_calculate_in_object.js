const shopping =[
    {name: 'Beef', price: 700,quantity:1},
    {name: 'chicken', price: 250, quantity:2},
    {name: 'potato', price: 50, quantity:2},
    {name: 'vegetable', price: 80, quantity:4},
    {name: 'oil', price: 230, quantity:2},
    {name: 'Mosla', price: 150, quantity:5},
    {name: 'rice', price: 1800, quantity:30},
]

function totalShoppingCost(prices){
    let total = 0;

    for(const num of prices){
        total = total + num.price
    }
    return total
}

const shoppingCost = totalShoppingCost(shopping);
// console.log('Total shopping cost is :', shoppingCost);

// find total cost ammount in shopping 
function totalBazar(total){
    let totalTaka = 0;
    for(let num of total){
        const multipleTotal = num.price * num.quantity;
        totalTaka = totalTaka + multipleTotal;
    }

    return totalTaka
}

const totalKhoroc = totalBazar(shopping);
console.log('This is total khoroc in bazar :', totalKhoroc)
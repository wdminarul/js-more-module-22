const first100Price = 100;
const second100price = 90;
const above200 = 70

function discount(quantity) {
    if (quantity <= 100) {
        const firstTotal = quantity * 100;
        return firstTotal
    }
    else if (quantity <= 200) {
        const secondTotal = quantity * 90;
        return secondTotal
    }
    else if (quantity > 200) {
        const thirdtTotal = quantity * 70;
        return thirdtTotal
    }
}

const purchse = discount(201);
console.log(purchse);
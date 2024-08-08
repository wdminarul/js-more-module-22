

function multiDiscount(quantity) {
    const first100Price = 100;
    const second100price = 90;
    const above200 = 70
    if (quantity <= 100) {
        const total = first100Price * quantity;
        return total
    }
    else if (quantity <= 200) {
        const firstPrice = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * 90;
        const total = firstPrice + remainingTotal;
        return total;
    }
    if (quantity > 200) {
        const price1 = first100Price * 100;
        const price2 = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const abovetotal = remainingQuantity * above200;
        const total = price1 + price2 + abovetotal;
        return total;
    }
}

const totalQuantity = multiDiscount(201);
console.log(totalQuantity);
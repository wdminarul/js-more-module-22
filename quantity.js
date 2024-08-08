const shirtPrice = 480;
const panPrice = 670;
const shoePrice = 1120;

function quentityTotalCalculator(shirt,pant,shoe){
    const  totalShit = shirtPrice * shirt;
    const totalPant = panPrice * pant;
    const totalShoe = shoePrice * shoe;

    const totalPrice = totalShit + totalPant + totalShoe ;
    return totalPrice;
}

const calculator = quentityTotalCalculator(4,3,2);
console.log('Total shopping price is : ', calculator);
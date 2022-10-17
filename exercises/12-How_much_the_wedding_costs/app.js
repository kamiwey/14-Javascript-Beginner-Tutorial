let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if(guests <=50){
        let price = 4000;
        return price;
    }
    if(guests <=100){
        let price = 10000;
        return price;
    }
    if(guests <=200){
        let price = 15000;
        return price;
    }
    if(guests >200){
        let price = 20000;
        return price;
    }
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');

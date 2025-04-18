let Orders = {
    book: {
        name: 'the compound effect',
        model: 2010,
        price: 5000,
        count: 5
    },

    pen: {
        name: 'Black Elephant',
        model: "BIC",
        price: 2000,
        count: 10
    },

    laptop: {
        name: "Dell",
        model: "15-9500",
        price: 35000,
        count: 2
    }
};

for (let item in Orders) {
    Orders[item].price += 10;
    Orders[item].price * Orders[item.count];
}

let Total = 0;
for (let item in Orders) {
    Total += Orders[item].price * Orders[item].count;
}

console.log("Total purchase amount:" + Total + "count");
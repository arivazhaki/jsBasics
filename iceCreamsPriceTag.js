/*Upon execution, the code will return – 
["Chocolate ice cream has a popularity score of 100 and is priced at INR 10", 
"Strawberry ice cream has a popularity score of 200 and is priced at INR 15",
 "Vanilla ice cream has a popularity score of 50 and is priced at INR 5", 
 "Butterscotch ice-cream has a popularity score of 150 and is priced at INR 20"].*/

const iceCreams = [
    {
        flavor:"chocolate",
        price:10,
        popularityScore:100
    },
    {
        flavor:"strawberry",
        price:15,
        popularityScore:200
    },
    {
        flavor:"vanilla",
        price:5,
        popularityScore:50
    },
    {
        flavor:"butterscotch",
        price:20,
        popularityScore:150
    }
];
console.table(iceCreams);
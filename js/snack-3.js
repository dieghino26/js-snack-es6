//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso. Stampare in console la bici con peso minore utilizzando il destructuring

const bikes = [
    {
        name: "Scott",
        weight: "14",
        price: "700"
    },
    {
        name: "Atala",
        weight: "13",
        price: "400"
    },
    {
        name: "Bianchi",
        weight: "11",
        price: "650"
    },
    {
        name: "Bottecchia",
        weight: "16",
        price: "750"
    },
    {
        name: "Cinelli",
        weight: "12",
        price: "500"
    }
];
let lightestBike = bikes[0];

bikes.forEach(bike => {
    const { weight } = bike;
    if (weight < lightestBike.weight) lightestBike = bike;
});

console.log(lightestBike);
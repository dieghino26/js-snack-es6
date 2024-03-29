// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo  e la lista degli invitati in ordine di posto.
// const tableName = 'Tavolo Vip';

// const guests = [
//     'Brad Pitt',
//     'Johnny Depp',
//     'Lady Gaga',
//     'Cristiano Ronaldo',
//     'Georgina Rodriguez',
//     'Chiara Ferragni',
//     'Fedez',
//     'George Clooney',
//     'Amal Clooney',
//     'Maneskin'
// ];
// Per stampare il tutto, la tipografia  vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
// Generiamo questo array in una variabile guestsList e stampiamolo in console


const table = 'Tavolo Vip';

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
];


const list = guests.map((name, i) => ({ table, name, place: i + 1 }));


console.log(list);
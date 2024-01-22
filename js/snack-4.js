// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const teams = [
    {
        team: "cosenza",
        points: 0,
        fouls: 0,

    },
    {
        team: "sassuolo",
        points: 0,
        fouls: 0,

    },
    {
        team: "como",
        points: 0,
        fouls: 0,

    },
    {
        team: "salernitana",
        points: 0,
        fouls: 0,

    },
];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

teams.forEach(teams => {
    team.points = getRandomNumber(0, 100);
    team.fouls = getRandomNumber(0, 100);
})

const newArray = teams.map(({ name, fouls }) => ({ name, fouls }))
const bateria = 65;

console.log(bateria < 20 ? 'Crítica' :
    (bateria >= 20 && bateria < 80) ?
        'Moderada' : 'Cheia'
);

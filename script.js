const notes = [12, 15, 9, 18];
console.log(notes[0]); // Affiche 12 console.log(notes[1]); // Affiche 15
console.log(notes.length); // Affiche 4
for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];
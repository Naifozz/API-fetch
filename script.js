const nom = document.getElementById("nom");
img = document.getElementById("image");
async function afficherPerso() {
    const reponse = await fetch("https://rickandmortyapi.com/api/character");
    const data = await reponse.json();
    chiffreRandom = data.info.count
    console.log(data.info.count);
    
    const random = Math.floor(Math.random() * chiffreRandom) + 1;
    const reponse1 = await fetch("https://rickandmortyapi.com/api/character/" + random);
    const data1 = await reponse1.json();
    console.log(data1);
    nom.innerHTML = data1.name;
    img.src = data1.image;

}

// fetch("https://rickandmortyapi.com/api")
//     .then(response => response.json())
//     .then(data => console.log(data));


button = document.getElementById("button");
button.addEventListener("click", () => {
    afficherPerso();
    
    
});
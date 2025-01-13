const nom = document.getElementById("nom");
img = document.getElementById("image");
async function afficherPerso() {

    const random = Math.floor(Math.random() * 826) + 1;
    const reponse = await fetch("https://rickandmortyapi.com/api/character/" + random);
    const data = await reponse.json();
    console.log(data);
    nom.innerHTML = data.name;
    img.src = data.image;

}


button = document.getElementById("button");
button.addEventListener("click", () => {
    afficherPerso();
    
    
});
//https://github.com/Splidejs/splide/releases/tag/v2.4.21
//https://splidejs.com/

//Film cover slider
new Splide( '#splide-crew', {
    type: 'slide',
    perMove: 4,
    gap:'1em',
    fixedWidth:'8.125em',
    pagination: false,
} ).mount();


new Splide( '#splide-stills', {
    type: 'slide',
    perMove: 4,
    gap:'1em',
    fixedWidth:'10em',
    pagination: false,
} ).mount();


//Code voor de image-gallery
let elementList = document.querySelectorAll('#splide-stills img');

//ittereer over alle plaatjes in de Stills slider
for (var i = elementList.length - 1, item; item = elementList[i]; i--) {
  item.addEventListener('click', function(){

      //dit zou dan een modal zichtbaar maken en het juiste plaatje erin laden
      alert("Gallery popup");

  });
}

//Lees meer functie
var collapsed = true;

function leesmeer() {
    leesMeer = document.getElementById("lees-meer");
    leesMeerButton = document.getElementById("lees-meer-button");

    //pas de Hidden css regel toe die display: none; heeft
    leesMeer.classList.toggle("hidden");

    collapsed = !collapsed; //draai de variable om van true naar false

    //als de tekst is ingeklapt is de button tekst "lees meer" anders "lees minder";
    if (collapsed) {
        leesMeerButton.innerText = "lees meer";
    } else {
        leesMeerButton.innerText = "lees minder";
    }
}

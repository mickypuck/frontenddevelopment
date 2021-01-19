//https://github.com/Splidejs/splide/releases/tag/v2.4.21
//https://splidejs.com/

//Film cover slider
new Splide('#splide-movies', {
    type: 'slide',
    perMove: 1,
    start:2,
    fixedWidth: '20em',
    pagination: false,
}).mount();

//nieuws slider
new Splide('#splide-cards', {
    type: 'slide',
    perMove: 1,
    gap: '2em',
    fixedWidth: '18em',
    pagination: false,
}).mount();


function bestelToggle() {
    toggleElements = Array.from(document.getElementsByClassName("button"));
    toggleBios = document.getElementById("bios-in-de-buurt");
    toggleZoek = document.getElementById("favoriete-bios");

    toggleBios.classList.toggle("hidden");
    toggleZoek.classList.toggle("hidden");
    toggleElements.forEach(element => element.classList.toggle("inactive"));
    //document.getElementsByClassName("toggle-background")[0].classList.toggle("active");
}

function add_doggo() {
    fetch("https://dog.ceo/api/breed/shiba/images/random")
        .then(response => response.json())
        .then(function(dogsObj) {
            show_image(dogsObj.message, 500,500, "Doggo");
        });
}


function show_image(src, width, height, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = 'doggo_image';

    const current_image = document.getElementById(img.id);
    if (current_image) {
        document.body.replaceChild(img, current_image);
    } else {
        document.body.appendChild(img);
    }
}
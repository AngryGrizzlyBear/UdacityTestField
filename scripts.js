function add_doggo() {
    var src = "https://dog.ceo/api/breed/shiba/images";
    show_image("https://dog.ceo/api/breed/shiba/images", 500,500, "Doggo");
}


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
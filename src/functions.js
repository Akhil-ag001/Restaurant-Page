export function Div(className){
    const div = document.createElement("div");
    div.classList.add(className);

    return div;
}

export function Img(url){
    const img = document.createElement("img");
    img.src = url;

    return img;
}
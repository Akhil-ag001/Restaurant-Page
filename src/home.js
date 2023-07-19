import image1 from "./../src/Assets/Home/image1.jpg"
import image2 from "./../src/Assets/Home/image2.jpg"
import image3 from "./../src/Assets/Home/image3.jpg"

export default function createHome(){

    const home = document.createElement("div");
    home.classList.add("home");

    const title = document.createElement("div");
    title.classList.add("content");
    title.textContent = "A beautiful place with amazing ambiance and food. Perfect for your Family Get-Togethers and your dates. A budget friendly place to have some quality time with your loved ones or alone. Do visit once and treat yourselves with a lovely experience";

    home.appendChild(title);

    const img1 = createImgDiv(image1);
    const img2 = createImgDiv(image2);
    const img3 = createImgDiv(image3);

    function createImgDiv(url){
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("home-img");

        return img;
    }

    const imgGroup = document.createElement("div");
    imgGroup.classList.add("img-group");

    imgGroup.appendChild(img1);
    imgGroup.appendChild(img2);
    imgGroup.appendChild(img3);

    home.appendChild(imgGroup);

    return home;
}

export { image1, image2, image3 };
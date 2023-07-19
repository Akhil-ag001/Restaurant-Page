import dish1 from "./../src/Assets/Menu/dish1.jpg";
import dish2 from "./../src/Assets/Menu/dish2.jpg";
import dish3 from "./../src/Assets/Menu/dish3.jpg";
import dish4 from "./../src/Assets/Menu/dish4.jpg";

import { Div, Img } from "./functions";

const images = [dish1, dish2, dish3, dish4];

export default function CreateMenu(){
    const menu = Div("menu");

    for(let i=1; i<=4; i++){
        const dish = Div("dish");
        const dishItem = Div("dish-item");

        const img = Img(images[i-1]);
        const disc = Div("dish-desc");
        disc.textContent = "Lorem ipsum dolor sit amet consectur repoid"

        dish.appendChild(img);
        dish.appendChild(disc);

        dishItem.appendChild(dish);

        menu.appendChild(dishItem);
    }

    return menu;
}

export {
    dish1, dish2, dish3, dish4
}
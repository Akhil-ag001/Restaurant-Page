import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import { Div, Img} from "./functions.js";

import "./style.css";




const content = document.getElementById("content");
const body = document.querySelector("body");

const navBar = Div("navbar");

const name = Div("name");

name.textContent = "Pizzeria Palace";

navBar.appendChild(name);

const buttons = Div("buttons");

const homeBtn = Div("home-btn");
homeBtn.classList.add("button");
homeBtn.textContent = "Home";
buttons.appendChild(homeBtn);

const menuBtn = Div("menu-btn");
menuBtn.classList.add("button");
menuBtn.textContent = "Menu";
buttons.appendChild(menuBtn);

const contactBtn = Div("contact-btn");
contactBtn.classList.add("button");
contactBtn.textContent = "Contact";
buttons.appendChild(contactBtn);

navBar.appendChild(buttons);

body.insertBefore(navBar, content);

content.appendChild(home())

homeBtn.addEventListener("click", ()=>{
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild)
    }

    content.appendChild(home());
})

menuBtn.addEventListener("click", ()=>{
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild)
    }

    content.appendChild(menu());
})

contactBtn.addEventListener("click", ()=>{
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild)
    }

    content.appendChild(contact());
})



import { Div } from "./functions.js"

export default function contact(){
    const contact = Div("contact");

    const timings = Div("timings");
    const text2 = Div("text");
    text2.textContent = "Timings- "
    timings.appendChild(text2);
    const weekdays = Div("weekdays");
    weekdays.textContent = "Weekdays: 7:00 PM - 10:00 PM";
    timings.appendChild(weekdays);
    const weekends = Div("weekends");
    weekends.textContent = "Weekends: 6:30 PM - 11:00 PM";
    timings.appendChild(weekends);

    contact.appendChild(timings);

    const details = Div("details");

    const text  = Div("text");
    text.textContent = "Book your table or contact us at-";
    details.appendChild(text);
    const phone = Div("phone");
    phone.textContent = "637888 XXXXX";
    details.appendChild(phone);
    const email = Div("email");
    email.textContent = "pizzeria_india_@abc.com";
    details.appendChild(email);

    contact.appendChild(details);

    return contact;
}
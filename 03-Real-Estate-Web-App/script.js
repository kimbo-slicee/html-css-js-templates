import {createElement} from "./utils/createElement";
import SERVICES from "./data/services.js";

const cardsContainer = document.querySelector(".cards");
function createServiceCard({icon,title,service}) {
    const card = createElement("div", "service-card");

    // Header
    const cardHeader = createElement("div", "cardHeader");
    const headerIcon = createElement("i", `ti ti-${icon}`);
    const h1 = createElement("h1", "", title);
    cardHeader.append(headerIcon, h1);

    // Body
    const cardBody = createElement("div", "card-body");
    const p = createElement("p", "", service);
    cardBody.append(p);

    // Footer
    const cardFooter = createElement("div", "card-footer");
    const button = createElement("button", "", "Learn More");
    const footerIcon = createElement("i", "ti ti-arrow-right");
    cardFooter.append(button, footerIcon);

    card.append(cardHeader, cardBody, cardFooter);
    return card;
}

// Render all cards
SERVICES.forEach(service => {
    const card = createServiceCard(service);
    cardsContainer.appendChild(card);
});


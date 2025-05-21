import createElement from "./utils/createElement.js";
import SERVICES from "./data/services.js";
const cardsContainer = document.querySelector(".cards");
console.log("hello world!");
function createServiceCard({icon,title,service}) {
    const card = createElement("div", "service-card");

    // Header
    const cardHeader = createElement("div", "card-header");
    const headerIcon = createElement("i", `ti ti-${icon}`);
    const h1 = createElement("h1", "", title);
    cardHeader.append(headerIcon, h1);

    // Body
    const cardBody = createElement("div", "card-body");
    const p = createElement("p", "", service);
    cardBody.append(p);

    // Footer
    const cardFooter = createElement("div", "card-footer");
    const button = createElement("button", "", "Let Talk");
    const footerIcon = createElement("i", "ti ti-arrow-narrow-right");
    cardFooter.append(button, footerIcon);

    card.append(cardHeader, cardBody, cardFooter);
    return card;
}

// Render all cards
SERVICES.forEach(service => {
    const card = createServiceCard(service);
    cardsContainer.appendChild(card);
});

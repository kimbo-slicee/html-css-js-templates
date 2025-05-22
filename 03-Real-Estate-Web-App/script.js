import createElement from "./utils/createElement.js";
import SERVICES from "./data/services.js";
import ABOUT from "./data/about.js";
const cardsContainer = document.querySelector(".cards");
const about=document.querySelector(".about-us .about-content")

// create Services Cards
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
// Create About Sections Content
function createAboutUs({section,title,description,services}) {
    const sectionName=createElement("p","section-name",section);
    const about_title=createElement("h1","about-title",title);
    const aboutDescription=createElement("p","about-description",description);
    const whatWeOffer=services.map(({icon,title,description})=>{
        const serviceContainer=createElement("div","container")
        const wrapper=createElement("div","wrapper")
        const iconElement=createElement("i",`ti ti-${icon}`);
        const h1=createElement("h1","service-title",title);
        const p=createElement("p","description",description)
        const button=createElement("button","discover-now-btn","Discover Now")
        const arrowIcon = createElement("i", "ti ti-chevron-right");
        button.appendChild(arrowIcon);
        serviceContainer.append(iconElement);
        wrapper.append(h1,p,button)
        serviceContainer.append(wrapper);
        return serviceContainer
    })
    about.append(sectionName,about_title,aboutDescription,...whatWeOffer)
}
createAboutUs(ABOUT)

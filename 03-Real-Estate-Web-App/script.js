import createElement from "./utils/createElement.js";
import SERVICES from "./data/services.js";
import ABOUT from "./data/about.js";
import PROPERTIES from "./data/properties.js";
const cardsContainer = document.querySelector(".cards");
const about=document.querySelector(".about-us .about-content");
const propertiesSection=document.querySelector("#properties")

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
createAboutUs(ABOUT);
// Create Properties Section
const cards=(properties)=>{
    properties.forEach(({title,bedrooms,bathrooms,description,square_feet,price,agent_name,location,image,agent_image})=>{
        const div=createElement("div","card");
        const propertyImage=createElement("img","property-image")
        propertyImage.setAttribute("src",image);
        // create card Header
        const cardHeader=createElement("div","card-header");
        const propertyName=createElement("h3","property-name",title);
        const propertyPrice=createElement("h2","property-price",price);
        cardHeader.append(propertyName,propertyPrice);
        // create card body
        const cardBody=createElement("div","card-body");
        const propertyDescription=createElement("p","property-description",description);
        const propertyDetails=createElement("div","property-details");
        const bedroomsNumber=createElement("span","rooms-number",bedrooms)
        const bedroomIcon=createElement("i","ti ti-bed");
        bedroomsNumber.insertAdjacentElement('afterbegin',bedroomIcon);
        const bathRoomsNumber=createElement("span","rooms-number",bathrooms)
        const bathroomIcon=createElement("i","ti ti-bath");
        bathRoomsNumber.insertAdjacentElement('afterbegin',bathroomIcon);
        bedroomsNumber.insertAdjacentElement('afterbegin',bedroomsNumber);
        const space=createElement("span","rooms-number",square_feet)
        const rulerIcon=createElement("i","ti ti-ruler-2");
        space.insertAdjacentElement('afterbegin',rulerIcon);
        //card footer
        const cardFooter=createElement("div","card-footer");
        const agentImage=createElement("img","agent-image");
        agentImage.src=agent_image;
        
    })
}

function creatProperties ({title,subTitle,description,properties}){
    const div=createElement("div","wrapper")
    const h4=createElement("h4","properties-title",title)
    const h1=createElement("h1","sub-properties-title",subTitle)
    const p=createElement("p","p-properties-description",description);
    // create properties header
    div.append(h4,h1,p);
    propertiesSection.append(div)
    cards(properties)
}
creatProperties(PROPERTIES)

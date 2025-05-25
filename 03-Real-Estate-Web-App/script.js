import { initTheme } from "./utils/theme.js";
import SERVICES from "./data/services.js";
import PROPERTIES from "./data/properties.js";
const navItems=document.querySelectorAll("ul a");
const cards=document.querySelector(".cards");
const propertiesContainer=document.querySelector(".properties-container");
const showMorBtn=document.querySelector(".show-more-btn button")
let cardsNumberDisplay=3

/*show More Properties */
const showMore=()=>{
    showMorBtn.addEventListener("click",()=>{
     cardsNumberDisplay+=3;
        properties(PROPERTIES,cardsNumberDisplay);
    })
}
/*Check active section*/
navItems.forEach((item)=>{
        item.addEventListener("click",()=>{
            navItems.forEach((item)=>item.classList.remove("active"))
            item.classList.add("active")
        });

})
/*show home heading*/
const services=(services)=>{
    cards.innerHTML=services.map(({icon,title,service})=>{
    return `
    <div class="card">
            <div class="card-header">
                <span class="material-symbols-outlined">${icon}</span>
                <h1>${title}</h1>
            </div>
            <div class="card-body">
            <article>${service}</article>
            </div>
            <div class="card-footer">
            <button>Let Talk</button>
            <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>
    </div>`
    }).join('')
}
const properties=({properties},cardsNumberDisplay)=>{
    propertiesContainer.innerHTML= properties.map((property)=>{
        return ` <div class="card">
                <div class="card-image">
                    <img src=${property.image} alt="propritie image">
                </div>
                <div class="card-body">
                    <div class="card-heading">
                        <h3>${property.title}</h3>
                        <h1>${property.price}</h1>
                    </div>
                    <article class="property-description">${property.description}</article>
                    <div class="property-details">
                    <p>Bed ${property.bedrooms} <span class="material-symbols-outlined">hotel</span></p>
                    <p>Bath ${property.bathrooms} <span class="material-symbols-outlined">bathtub</span></p>
                    <p>Feet ${property.square_feet} <span class="material-symbols-outlined">square_foot</span></p>
                    </div>
                </div>
                <div class="card-footer">
                        <img src=${property.agent_image} alt="agent-image">
                        <div class="footer-info">
                            <p>${property.agent_name}</p>
                            <span>${property.location}</span>
                        </div>
                </div>
        </div>
    `
    }).slice(0,cardsNumberDisplay).join(' ');

}
showMore();
properties(PROPERTIES,cardsNumberDisplay)
services(SERVICES)
initTheme();

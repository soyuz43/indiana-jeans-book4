// main.js
import { OwnsJeansChoices } from "./OwnsJeans.js";
import { LivingAreaSurveyChoices } from "./UrbanDweller.js";


const container = document.querySelector("#container")

const render = async () => {
    
    const jeansOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LivingAreaSurveyChoices()
    container.innerHTML = `
                            ${jeansOwnershipHTML}
                            ${locationsHTML}
                          `
}
render()

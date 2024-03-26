// main.js
import { OwnsJeansChoices } from "./OwnsJeans.js";
import { LivingAreaSurveyChoices } from "./UrbanDweller.js";
import { OwnsJeansSubmission } from "./SaveSubmission.js"; 


const container = document.querySelector("#container")

const render = async () => {
    
    const jeansOwnershipHTML =  OwnsJeansChoices()
    const locationsHTML      =  await LivingAreaSurveyChoices()
    const buttonHTML         =  await OwnsJeansSubmission()
    container.innerHTML = `
                            ${jeansOwnershipHTML}
                            ${locationsHTML}
                            ${buttonHTML}
                          `
}
render()

// main.js
import { OwnsJeansChoices } from "./OwnsJeans.js";
import { LivingAreaSurveyChoices } from "./UrbanDweller.js";
import { OwnsJeansSubmission } from "./SaveSubmission.js"; 
import { SubmissionList } from "./Submissions.js"; // Make sure this is correctly imported or implemented

const container = document.querySelector("#container")

const render = async () => {
    
    const jeansOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LivingAreaSurveyChoices()
    const buttonHTML = OwnsJeansSubmission()
    const submissionListHTML = await SubmissionList() // This needs to fetch and format the submissions.

    container.innerHTML = `
                            ${jeansOwnershipHTML}
                            ${locationsHTML}
                            ${buttonHTML}
                            ${submissionListHTML} 
                          `
}


document.addEventListener("newSubmissionCreated", render)
render()
 
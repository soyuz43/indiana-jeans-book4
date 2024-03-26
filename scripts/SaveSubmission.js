// OwnsJeans.js

import { saveSurveySubmission } from "./TransientState.js"


// Handle click event on survey submission, by checking the id of the clicked element    
const handleSurveySubmissionClick = (clickEvent) => {
   if (clickEvent.target.id === "saveSubmission") {
       saveSurveySubmission()
   }
}
// Adding a button to the DOM w/ click event listener        
export const OwnsJeansSubmission = () => {                                             
    document.addEventListener("click", handleSurveySubmissionClick)
    
    return  `"<button id='saveSubmission'>Save & Submit</button>"`
    }
    
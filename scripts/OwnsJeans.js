// OwnsJeans.js

import { setOwnsBlueJeans } from "./TransientState.js"


//  Function to handle state change on survey submission

const handleOwnershipChange = (changeEvent) => {
   if (changeEvent.target.name === "ownsJeans") {
       const convertedToBoolean = JSON.parse(changeEvent.target.value)
       setOwnsBlueJeans(convertedToBoolean)
   }
}


// Component for OwnsJeans submission form
// Adds a click event listener to the document, saved to JSON upon click.
export const OwnsJeansChoices = () => {                                             
    
    document.addEventListener("change", handleOwnershipChange)
    
    let choicesHTML = "<h1>Do you own jeans?</h1>"
        choicesHTML += "<input type='radio' name='ownsJeans' value=true /> Yes"
        choicesHTML += "<input type='radio' name='ownsJeans' value=false /> No"
        
    return choicesHTML
}
    
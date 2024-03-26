// Urban Dweller.js
import { setSocioLocationId } from "./TransientState.js"



const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = JSON.parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}


export const LivingAreaSurveyChoices = async () => {
        const response = await fetch('http://localhost:8088/socioLocations');
        const locationObjectFromJson = await response.json()

        document.addEventListener("change", handleLocationChange)

        let choicesHTML = "<h2>What type of region do you live in</h2>"
        for (const location of locationObjectFromJson) {
            choicesHTML += `<input type='radio' name='location' value='${location.id}' />${location.label}`
        }
        return choicesHTML
}

// TransientState.js



// # Set up the transient data structure and provide initial valuess


const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}

// # Modify each property of transient state


export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState);
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState);
}

// # Function to convert transient state to permanent state


export const saveSurveySubmission = async () => {
    
        const postOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transientState),
        }
        const response = await fetch("http://localhost:8088/submissions", postOptions)
        const customEvent = new CustomEvent("NewSubmissionAdded")
        document.dispatchEvent(customEvent)
    }




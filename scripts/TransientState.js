// TransientState.js



//  Set up the transient state data structure and provide initial valuess


const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}

//  Functions to modify each property of transient state


export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState);
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState);
}

//  Function to convert transient state to permanent state


// export const saveSurveySubmission = async () => {
    
//         const postOptions = {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(transientState),
//         };
//         const data =  postOptions.json();
//         console.log(data); // Log the postOptions for debuggi catch (error) {
//         console.error('Error sending survey submission:', error);
//     }
// const response = await fetch('http://localhost:8088/submit', postOptions)




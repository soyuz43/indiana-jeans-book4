// OwnsJeans.js

/*  
    Responsibility: UI controls for true/false choice on jeans ownership
    Strat: Produve HTML for 2 HTML buttons 'yes' & 'no' 
*/

export const OwnsJeansChoices = () => {
    let html =  "<input type='radio' name='ownsJeans' value='true' /> Yes"
    html +=     "<input type='radio' name='ownsJeans' value='false' /> No"
    return html
}
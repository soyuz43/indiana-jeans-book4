
// main.js
console.log('Main.js loaded');

import { OwnsJeansChoices } from "./OwnsJeans.js";

const container = document.querySelector("#container")

const render = () => {
    const jeansOwnershipHTML = OwnsJeansChoices()
    container.innerHTML = jeansOwnershipHTML
}

render()
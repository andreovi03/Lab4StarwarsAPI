import "./components/export";
import {traer_api} from "./components/data"
import Card, { Attribute } from "./components/card/card"

class AppContainer extends HTMLElement {
    SwaList: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const dataSwa = await traer_api();
        dataSwa.forEach((data: any) => {
            console.log(data);
        });

        dataSwa.forEach((data: any) => {
            const SwaCard = this.ownerDocument.createElement("my-card") as Card;
                SwaCard.setAttribute(Attribute.climate, data.climate);
                SwaCard.setAttribute(Attribute.name, data.name);
                SwaCard.setAttribute(Attribute.gravity, data.gravity);
                this.SwaList.push(SwaCard);
        });
        this.render(this.SwaList);
    }

    render(SwaList:any) {
        const SwaCards = this.ownerDocument.createElement("section")
        SwaCards.className = "SwaSection"
        this.SwaList.forEach((SwaCard) => {
            SwaCards.appendChild(SwaCard)
        });
        this.shadowRoot?.appendChild(SwaCards);
    }
}

customElements.define("app-container", AppContainer);
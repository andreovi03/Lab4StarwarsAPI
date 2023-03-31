export enum Attribute {
    "climate" = "climate",
    "name" = "name",
    "gravity" = "gravity"

}

class Card extends HTMLElement {
    climate?: string;
    name?: string;
    gravity?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            climate: null,
            gravity: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="">
                <section>
                <h1>Name: ${this.name}</h1>
                <h2>Gravity: ${this.gravity}</h2>
                <p>Climate: ${this.climate}</p>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
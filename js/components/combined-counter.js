class CombinedCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const title = this.getAttribute("title") || "Lorem Ipsum Title";
    const value = parseInt(this.getAttribute("value")) || 0;

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; width: 100%; }
        .wrapper {
          text-align: center;
          border: 1px solid #000;
          padding: 12px;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          font-family: sans-serif;
          border-radius: 10px;
          box-sizing: border-box;
          background: #fafafa;
        }
        counter-display, counter-controls {
          display: block;
          width: 100%;
        }
      </style>
      <div class="wrapper">
        <counter-display id="display" title="${title}" value="${value}"></counter-display>
        <counter-controls id="controls"></counter-controls>
      </div>
    `;
  }

  connectedCallback() {
    const display = this.shadowRoot.getElementById("display");
    const controls = this.shadowRoot.getElementById("controls");
    controls.addEventListener("count-change", (e) => {
      display.count += e.detail.delta;
    });
  }
}
customElements.define("combined-counter", CombinedCounter);

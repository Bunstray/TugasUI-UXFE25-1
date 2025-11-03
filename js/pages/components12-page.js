class Components12Page extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; width: 100%; }
        .container {
          width: min(100%, 1000px);
          margin: 32px auto;
          padding: 24px;
          border: 1px solid #ddd;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 6px 16px rgba(0,0,0,.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
        }
        counter-display, counter-controls {
          display: block;
          width: 100%;
        }
      </style>
      <div class="container">
        <counter-display id="display" title="Lorem Ipsum Title" value="99"></counter-display>
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
customElements.define("components12-page", Components12Page);

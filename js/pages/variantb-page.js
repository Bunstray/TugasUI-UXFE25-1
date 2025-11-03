class VariantBPage extends HTMLElement {
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
        counter-display-b, counter-controls-b {
          display: block;
          width: 100%;
        }
      </style>
      <div class="container">
        <counter-display-b id="displayB" title="Varian B Counter" value="99"></counter-display-b>
        <counter-controls-b target="displayB"></counter-controls-b>
      </div>
    `;
  }
}
customElements.define("variantb-page", VariantBPage);

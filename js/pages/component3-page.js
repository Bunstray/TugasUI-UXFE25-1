class Component3Page extends HTMLElement {
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
          justify-content: center;
          box-sizing: border-box;
        }
        combined-counter {
          display: block;
          width: 100%;
        }
      </style>
      <div class="container">
        <combined-counter title="Combined Counter" value="99"></combined-counter>
      </div>
    `;
  }
}
customElements.define("component3-page", Component3Page);

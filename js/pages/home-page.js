class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: sans-serif;
        }
      </style>

      <div class="container">
        <user-info></user-info>
        <web-explanation></web-explanation>
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);

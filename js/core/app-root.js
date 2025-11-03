class AppRoot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; width: 100%; }
        .app { display: flex; flex-direction: column; width: 100%; }
        main {
          width: 100%;
          display: block;
          /* center inner pages but allow them to be wide */
        }
      </style>
      <div class="app">
        <nav-bar></nav-bar>
        <main id="content">
          <home-page></home-page>
        </main>
      </div>
    `;
  }

  connectedCallback() {
    const content = this.shadowRoot.getElementById("content");
    this.shadowRoot.addEventListener("navigate", (e) => {
      const map = {
        home: "home-page",
        components12: "components12-page",
        component3: "component3-page",
        variantb: "variantb-page",
      };
      const tag = map[e.detail.page] || "home-page";
      content.innerHTML = `<${tag}></${tag}>`;
    });
  }
}
customElements.define("app-root", AppRoot);

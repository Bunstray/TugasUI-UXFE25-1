class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        .bar {
          background-color: #2b3a67;
          color: #fff;
          width: 100%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 16px;
          display: flex;
          gap: 30px;
          justify-content: center;
          align-items: center;
          font-family: sans-serif;
        }
        button {
          background: none;
          border: none;
          color: inherit;
          font-size: 1.05rem;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 6px;
          transition: background-color .2s, color .2s;
        }
        button:hover { background-color: #ffd166; color: #2b3a67; }
      </style>
      <div class="bar">
        <nav>
          <button data-page="home">Home</button>
          <button data-page="components12">Component 1 & 2</button>
          <button data-page="component3">Component 3</button>
          <button data-page="variantb">Variant B</button>
        </nav>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const page = e.currentTarget.getAttribute("data-page");
        this.dispatchEvent(
          new CustomEvent("navigate", {
            detail: { page },
            bubbles: true,
            composed: true,
          })
        );
      });
    });
  }
}
customElements.define("nav-bar", NavBar);

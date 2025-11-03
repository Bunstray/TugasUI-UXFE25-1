class CounterControlsB extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        .controls {
          display: flex;
          border: 1px solid #000;
          width: 100%;
          box-sizing: border-box;
        }
        button {
          flex: 1;
          background-color: #d3d3d3;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          height: 44px;
        }
        button:not(:last-child) { border-right: 1px solid #000; }
        button:hover { background-color: #bdbdbd; }
      </style>
      <div class="controls">
        <button id="minus">-</button>
        <button id="plus">+</button>
      </div>
    `;
  }

  connectedCallback() {
    this.targetId = this.getAttribute("target");

    const plus = this.shadowRoot.getElementById("plus");
    const minus = this.shadowRoot.getElementById("minus");

    plus.addEventListener("click", () => this.updateTarget(1));
    minus.addEventListener("click", () => this.updateTarget(-1));
  }

  updateTarget(delta) {
    if (!this.targetId) return;

    // first search in same shadow root hierarchy
    let root = this.getRootNode();
    let target = root.getElementById
      ? root.getElementById(this.targetId)
      : null;

    // fallback: search entire document if not found
    if (!target && document.getElementById) {
      target = document.getElementById(this.targetId);
    }

    if (target && typeof target.count !== "undefined") {
      target.count += delta;
    }
  }
}

customElements.define("counter-controls-b", CounterControlsB);

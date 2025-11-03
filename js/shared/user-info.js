class UserInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .info-box {
          display: inline-block;
          padding: 15px 25px;
          background-color: #e3e3ff;
          border: 1px solid #000;
          border-radius: 8px;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
          margin-bottom: 30px;
          font-family: sans-serif;
        }
        .title {
          text-align: center;
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
      </style>

      <div class="info-box">
        <div class="title">Informasi</div>
        <div>Nama: Muhammad Rayyan Buna Satria</div>
        <div>NIM: 24/543564/PA/23096</div>
      </div>
    `;
  }
}

customElements.define("user-info", UserInfo);

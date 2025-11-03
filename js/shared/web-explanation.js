class WebExplanation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .explanation {
          text-align: justify;
          background: #fff;
          border: 1px solid #ccc;
          padding: 24px;
          border-radius: 10px;
          line-height: 1.6;
          font-family: sans-serif;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          max-width: 900px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          color: #2b3a67;
          margin-bottom: 20px;
        }
        p, ul { margin-bottom: 12px; }
      </style>

      <div class="explanation">
        <h2>Cara Kerja Web Component & Micro Frontends</h2>

        <p>
          Web ini menggunakan konsep <b>Web Components</b>, di mana setiap bagian UI dibuat
          sebagai elemen HTML kustom dengan logika dan gaya sendiri menggunakan <b>shadow DOM</b>.
          Hal ini membuat tiap komponen terisolasi dan tidak saling mengganggu.
        </p>

        <p>
          Komponen utama:
          <ul>
            <li><code>&lt;counter-display&gt;</code> – menampilkan angka.</li>
            <li><code>&lt;counter-controls&gt;</code> – tombol <b>+</b> dan <b>-</b> yang mengirim event <code>count-change</code>.</li>
            <li><code>&lt;combined-counter&gt;</code> – menggabungkan dua komponen menjadi satu.</li>
            <li><b>Varian B</b> – memakai atribut <code>target</code> untuk mengubah nilai tanpa event.</li>
          </ul>
        </p>

        <p>
          Navigasi dikendalikan oleh <code>&lt;nav-bar&gt;</code> dan <code>&lt;app-root&gt;</code>.
          Saat tombol di navbar ditekan, event <code>navigate</code> dikirim ke
          <code>&lt;app-root&gt;</code> untuk mengganti halaman tanpa reload penuh.
        </p>

        <p>
          Semua ini menerapkan prinsip <b>Micro Frontends</b> — setiap bagian dikembangkan secara
          terpisah namun digabungkan menjadi satu sistem utuh. Aplikasi menjadi modular,
          mudah diperluas, dan fleksibel.
        </p>

        <p style="text-align:center; font-style:italic; color:#555;">
          - Pengembangan UI/UX dan FrontEnd 2025 -
        </p>
      </div>
    `;
  }
}

customElements.define("web-explanation", WebExplanation);

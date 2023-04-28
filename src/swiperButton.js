class SwiperButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .checkout{
            text-align:center;
          }
          .checkout button{
            font-size:1rem;
            padding:1rem 1.5rem;
            border:none;
            border-radius:30px;
            cursor:pointer;
            width:50%;
            font-weight:600;
            text-transform:uppercase;
            background-color:rgba(0, 247, 41, 0.7);
        
          }
          .checkout button:hover{
            
           background-color:#e74b4b;
           transform: scale(1.3);
           transition:.3s ease-in-out;
          }
        </style>
          
        <div class="checkout">
            <button id="modal-button">Comprar</button>
        </div> 

      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
    }
  
  }
  
  customElements.define("swiper-button-component", SwiperButton);
  
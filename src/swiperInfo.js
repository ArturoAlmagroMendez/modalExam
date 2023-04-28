class SwiperInfo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        
        .modal-content-front {
            height:100%;
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 3rem;
          }
        .modal-title h4{
            font-size:2.4rem;
            margin:0;
          }
           .modal-subtitle p{
            opacity:.5;
            margin:0;
          }
           .prices {
            display:flex;
            gap:1rem;
          }
           .prices .old-price {
            text-decoration:line-through;
          }
           .prices .old-price span {
            color:red;
            font-weight:600;
          }
          .prices span{
            font-family: 'Poppins', sans-serif;
          }
          .prices .new-price span{
            font-weight:600;
            font-size:1.8rem;
            
          }
           .prices .new-price:hover{
            transform: scale(1.2);
            transition:.3s ease-in-out;
          }
           .prices .offert-price span{
            background-color:rgba(0, 247, 41, 0.7);
            font-weight:600;
            font-size:1.8rem;
            padding:0 .5rem;
            border-radius:30px;
          }
          ul{
            display:flex;
            gap:.7rem;
            list-style:none;
          }
          ul li a{
            cursor:pointer;
          }
          ul li a:hover{
            border-bottom: 1px solid black;
          }
          ul li a.tab.active{
            border-bottom: 1px solid black;
          }
          .modal-description{
            display:flex;
            flex-direction: column;
            gap:.5rem;
          }
          .tab-content{
           display:none;
          }
          .modal-description-list{
            display:flex;
            flex-direction: column;
            gap:1rem;
          }
           .tab-content p{
            font-size:1.2rem;
          }
          .tab-content.active{
            display:block;
          }
          .plus-minus-button{
            display:flex;
            width:20%;
            height:2rem;
            font-family: 'Poppins' , sans-serif;
        }
        .minus-button{
            width:25%;
            height:100%;
        }
        .minus-button button{
            width: 100%;
            height:100%;
            background-color: rgba(0, 247, 41, 0.7);
            border: none;
            border-top-left-radius:20px;
            border-bottom-left-radius: 20px;
            font-size: 1.4rem;
            cursor:pointer;
        
        }
        .minus-button button:hover{
            background-color: rgb(255, 43, 43);
        }
        .input-plus-minus{
            width:50%;
            height:100%;    
        }
        .input-plus-minus input{
            width: 100%;
            height:100%;
            text-align: center;
        }
        .input-plus-minus input::-webkit-inner-spin-button,
        .input-plus-minus input::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .plus-button{
            width:25%;
            height:100%;
        }
        .plus-button button{
            height:100%;
            width: 100%;
            background-color: rgba(0, 247, 41, 0.7);
            font-size: 1.4rem;
            border-top-right-radius:20px;
            border-bottom-right-radius: 20px;
            border:none;
            cursor: pointer;
        
        }
        .plus-button button:hover{
            background-color: rgb(255, 43, 43);
        }
        
        .total-price{
            font-weight:600;
        }
        .shipment{
            color:rgb(255, 43, 43);
            font-weight: 600;
        }
        </style>
        <div class="modal-content-front">
            <div class="title-subtitle">
                <div class="modal-title">
                    <h4>Curso de programación web desde cero</h4>
                </div>
                <div class="modal-subtitle">
                    <p>Autor: Arturo Almagro</p>
                </div>
            </div>
            <div class="prices">
                <div class="old-price">
                    <span>39.99€</span>
                </div>
                <div class="new-price">
                    <span>9.99€</span>
                </div>
                <div class="offert-price">
                    <span>oferta 75%</span>
                </div>
                
            </div>
            <div class="modal-description">
                <div class="modal-description-list">
                    <ul>
                        <li><a class="tab active" data-target="modal-description-text" >Description</a></li>
                        <li><a class="tab" data-target="modal-details-text">Details</a></li>
                        <li><a class="tab" data-target="modal-info-text">+Info</a></li>
                    </ul>
                    <div class="tab-content active" id="modal-description-text">
                        <p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, </p>
                    </div>
                    <div class="tab-content" id="modal-details-text">
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                    </div>
                    <div class="tab-content" id="modal-info-text">
                        <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </p>
                    </div>
                </div>
                <div class="plus-minus-button">
                    <div class="minus-button">
                        <button id="minus-btn">-</button>
                    </div>
                    <div class="input-plus-minus">
                        <input type="number" id="input-value" value="1">
                    </div>
                    <div class="plus-button">
                        <button id="plus-btn">+</button>
                    </div>
                    
                </div>
                <div class="total-shipment-price">
                    <div class="total-price">
                        <p>Precio total: 9.99€</p>
                    </div>
                    <div class="shipment">
                        <p>+ 4.99€ de envío</p>
                    </div>
                </div>
                <slot name="checkout"></slot>
            </div>
        </div>

      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
    }
  
  
    disconnectedCallback() {
      // Método que se ejecuta cuando el componente se elimina del DOM
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // Método que se ejecuta cuando se cambia un atributo del componente
    }
  
    static get observedAttributes() {
      return ["attribute1", "attribute2"];
    }
  
    set attribute1(value) {
      // Método que se ejecuta cuando se cambia el valor del atributo attribute1
    }
  
    set attribute2(value) {
      // Método que se ejecuta cuando se cambia el valor del atributo attribute2
    }
  
  
  }
  
  customElements.define("swiper-info-component", SwiperInfo);
  

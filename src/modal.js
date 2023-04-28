class Modal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
                <style>
            
                .modal-container {
                    box-shadow: 0 0 62px rgba(0, 0, 0, 0.3);
                    display: flex;
                    color: #000;
                    top: 15%;
                    left: 10%;
                    width: 80%;
                    height: 80vh;
                    border: none;
                    align-items: center;
                    border-radius: 5px;
                    background-color: #fff;
                    z-index: -1;
                    opacity: 0;
                    transition: 0.3s linear;
                    position: fixed;
                    overflow: hidden;
                  }
                  .modal-container.active {
                    z-index: 2000;
                    opacity: 1;
                  }
                  .modal-content{
                    height:100%;
                    width:100%;
                    display:flex;
                    padding:0 4rem;
                    justify-content:center;
                    gap:2rem;
                    color:#000;
                    z-index: 1000;
                    position: absolute;
                    transform: translateX(50%);
                    transition: .2s linear;
                  }
                  .modal-close-button{
                    width:2rem;
                    height:2rem;
                    position: absolute;
                    top: 2%;
                    left: 97%;
                    z-index:1001;
                    font-size:.7rem;
                    text-align: center;
                    } 
                  .modal-close-button button{
                    width:100%;
                    height:100%;
                    border-radius:30px;
                    background-color: #000;
                    color:#fff;
                    border:none;
                    cursor: pointer;
                    font-family: 'Poppins', sans-serif;
                    
                  }
                  .modal-close-button button:hover{
                    background-color: #fff;
                    color:#000;
                    border:2px solid black;
                  }
                  .modal-return-button{
                    display:none;
                    width:2rem;
                    height:2rem;
                    position: absolute;
                    top: 2%;
                    left: 51%;
                    z-index:1001;
                    font-size:.7rem;
                    text-align: center;
                
                  }
                  .modal-return-button button{
                     width:100%;
                    height:100%;
                    border-radius:30px;
                    background-color: #000;
                    color:#fff;
                    border:none;
                    cursor: pointer;
                    font-family: 'Poppins', sans-serif;
                    font-size:1rem;
                    font-weight: 600;
                  }
                  .modal-return-button button:hover{
                    background-color: #fff;
                    color:#000;
                    border:2px solid black;
                  }
                  .modal-return-button.active{
                    display:block;
                
                  }
                  .modal-slider{
                    width:50%;
                    height:100%;   
                    z-index: 9999;
                  }
                  
                 
                  .modal-content.active {
                    transform: translateX(0%);
                  }
        
                </style>
                
                <div class="modal-container active"> 
                  <div class="modal">
                    <div class="modal-close-button">
                      <button class="close-button">X</button>
                    </div> 
                    <div class="modal-return-button">
                      <button class="return-button">←</button>
                    </div>
                  </div>
                  
                  <div class="modal-slider">
                      <slot name="modal-img"></slot>
                  </div>
                  <div class="modal-content">
                      <slot name="info"></slot>
                      <slot name="form"></slot>
                  </div>
                </div>
              `;
            }
            connectedCallback() {
              // Método que se ejecuta cuando el componente se agrega al DOM
            }
          
          }
          
          customElements.define("modal-component", Modal);
          
        
      
    

  

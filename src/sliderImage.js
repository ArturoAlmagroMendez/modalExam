class SliderImage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
           
          .modal-slider{
            width:100%;
            height:100%;   
            z-index: 9999;
          }
          
          .modal-slider-image {
            height: 100%;
            width: 100%;
            z-index: 9999;
            
          }
         .modal-slider-image .swiper-wrapper {
            height: 100%;
            width: 100%;
          }
          .modal-slider-image .swiper-wrapper .swiper-slide {
            height: 100%;
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          
        </style>
        <div class="modal-slider">
            <div class="modal-slider-image">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <slot name="swiper-image"></slot>
                    </div>
                </div>
            </div> 
        </div>
      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
    }
  
  }
  
  customElements.define("slider-image-component", SliderImage);
  

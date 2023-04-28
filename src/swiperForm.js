class SwiperForm extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .modal-content-hidden {
            width: 100%;
            height: 100%;
          }
        .modal-form{
            height:100%;
            width:100%;
          }
          form{
            height:100%;
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:2rem;
            padding:0 5%;
          }
          form .modal-form-input{
            width:100%;
            height:3rem;
          }
          form .modal-form-input input{
            height:100%;
          }
          form .modal-form-name-surname{
            width:100%;
            display:flex;
            gap:.5rem;
            height:3rem;
          }
          form .modal-form-name-surname input{
            width: 50%;
          }
          form .modal-form-location{
            width:100%;
            display:flex;
            gap:.5rem;
            height:3rem;
          }
          form .modal-form-location input{
            width: 50%;
          }
          form .modal-form-input input,
          form .modal-form-input select{
            width:100%;
          }
        
          form input,
          form button,
          .modal-form-input{
            font-family: 'Poppins',sans-serif;
          }
          form .modal-form-button{
            width:100%;
            height:4.5rem;
            
          }
          form .modal-form-button button{
            border:none;
            width: 100%;
            height: 100%;
            background-color: #0084ff;
            color:#fff;
            font-weight: 600;
            cursor:pointer;
          }
          form .modal-form-button button:hover{
            background-color: #000;
          }
          .invalid{
            border: 1px solid red;
            
          }
          .invalid::placeholder{
            color:red;
          }
          
          #notification{
            background-color: hsl(0, 0%, 89%);
            border-radius: 0.2rem;
            bottom: 1rem;
            color: rgb(0, 0, 0);
            opacity: 0;
            padding: 1rem;
            position: fixed;
            right: 1rem;
            text-align: center;
            transition: opacity 0.3s ease-in-out;
        }
        
        #notification.active{
            opacity: 1;
        }
        
        #notification.success{
            border-top: 0.2rem solid hsl(120, 100%, 50%);
        }
        
        #notification p{
            font-size: 1.5rem;
        }
        </style>
        <div class="modal-content-hidden">
            <div class="modal-form">
                <form>    
                    <div class="modal-form-name-surname">
                        <input type="text" placeholder="First name" data-validate="only-letters">
                        <input type="text" placeholder="Last name" data-validate="only-letters">
                    </div>
                    <div class="modal-form-input">
                        <input type="email" placeholder="E-mail address" data-validate="email">
                    </div>
                    <div class="modal-form-input">
                        <input type="text" placeholder="Address Line 1">
                    </div>
                    <div class="modal-form-input">
                        <input type="text" placeholder="Adress Line 2">
                    </div>
                    <div class="modal-form-location">
                        <input type="text" placeholder="State" data-validate="only-letters">
                        <input type="number" placeholder="Zip Code" data-validate="only-numbers">
                    </div>
                    <div class="modal-form-input">
                        <select name="" id="" >
                            <option value="" selected>Select An Option</option>
                        </select>
                    </div>
                    <div class="modal-form-button">
                        <button class="send-btn">Buy</button>
                    </div>
                    
                </form>
        </div>
        </div>  

            
      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
    }
  }
  
  customElements.define("swiper-form-component", SwiperForm);
  
 
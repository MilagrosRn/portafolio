export default () => {
    const view = `
    <div class="header">
    <section class="text-header">

    <div class="container">
        <div class="text">
            <h1>Milagros Rodriguez</h1>
            <h2>Front – end Developer</h2>
        </div>
        <div class="logo-int ">
            <img class="circle responsive-img" src="./imagenes/logo4.png" alt="">
        </div>
    </div>
</section>
<div class="wave" style="height: 150px; overflow: hidden;">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M500.00,68.58 C256.83,143.58 214.92,-57.72 -4.54,76.47 L-2.73,159.38 L505.46,160.36 Z"
            style="stroke: none; fill: #ffffff;"></path>
    </svg>
</div>
    </div>

    <section class=" description">
    <div class="description-img">
        <img src="./imagenes/coding-sit.svg" alt="">
        <div class="description-img-text">
            <h2> Desarrollo productos web mejorando continuamente procesos y presentación de productos a los
                clientes.</h2>
            <button class="bubbly-button btn-download">Descarga mi CV</button>
        </div>
    </div>
</section>
<section class="container tools">
<div class="section-tools">
    <h2 class="work">Trabajo con metodologías como:</h2>
      
    <div class="work-tools">
    
       <div class="tool-container">
            <div class="container-img">
                <img class="browser-default" src="./imagenes/telefono-inteligente.svg" alt="">
    
            </div >
           <div class="container-text">
                <h3>Mobile First</h3>
           </div>
       </div>
    
       <div class="tool-container">
           
       <div class="container-img">
                
            <img class="browser-default" src="./imagenes/agil.svg" alt="">
    
            </div> 
            
            <div class="container-text">
                
            <h3>Scrum</h3>
    
            </div>
       </div>
       <div class="tool-container">
     <div class="container-img">
                
            <img class="browser-default" src="./imagenes/plan.svg" alt="">
    
            </div> 
            
            <div class="container-text">
                
            <h3>Kanban</h3>
    
            </div>
       </div>
       </div>
</div>
</section>
<section class="container space-habilities ">
    <div class="section-habilities">
    <h2>Habilidades Tecnicas</h2>
        <div class="row">
            <div class="col s4">
                <div class="card">
                    <div class="card-image">
                        <img src="./imagenes/nodejs.png">
                    </div>
                    <div class="card-content">
                        <span class="card-title">Node Js</span>
                    </div>
                    <div class="card-action">
                        <a href="#">¿Qué es?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `

    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}

/*
    <section class="container space-habilities ">
       <div class="habilities">
            <h2 class="titulo" >Habilidades Tecnicas</h2>
            <div class="galeria-port">
                <div class="imagen-port">
                    <img class="img" src="./imagenes/node.png" alt="">
                    <a href="https://nodejs.org/en/">
                        <div class="hover-galeria">
                            <img src="./imagenes/hacer-clic.svg" alt="">
                            <p>¿Qué es?</p>
                        </div>
                    </a>
                </div>
                <div class="imagen-port">
                    <img src="./imagenes/angular1.png" alt="">
                    <a href="https://angular.io/">
                        <div class="hover-galeria">
                            <img src="./imagenes/clic.png" alt="">
                            <p>¿Qué es?</p>
                        </div>
                    </a>
                </div>
       </div>
        </div>
    </section>*/
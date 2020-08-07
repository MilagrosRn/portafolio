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
    <div class="img-des">
        <h2>¿Qué hago?</h2>
            <img src="./imagenes/coding-sit.svg" alt="">
    </div>
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
<section class="space-habilities ">
    <div class="section-habilities">
    <h2>Habilidades Técnicas</h2>
        <div class="content-all">
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/nodejs.png" alt="">
                </div>
                <div class="card-text">
                    <p>Node Js</p>
                    <hr>
                    <a href="https://nodejs.org/en/">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/angular1.png" alt="">
                </div>
                <div class="card-text">
                    <p>Angular</p>
                    <hr>
                    <a href="https://angular.io/">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/fire.png" alt="">
                </div>
                <div class="card-text">
                    <p>Firebase</p>
                    <hr>
                    <a href="https://firebase.google.com/">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/jest.png" alt="">
                </div>
                <div class="card-text">
                    <p>Jest</p>
                    <hr>
                    <a href="https://jestjs.io/">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/sass.png" alt="">
                </div>
                <div class="card-text">
                    <p>Sass</p>
                    <hr>
                    <a href="https://sass-lang.com/">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/js.png" alt="">
                </div>
                <div class="card-text">
                    <p>JavaScript</p>
                    <hr>
                    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/ts.png" alt="">
                </div>
                <div class="card-text">
                    <p>Typescript</p>
                    <hr>
                    <a href="https://www.typescriptlang.org/">Ver más</a>
                </div>
            </div>

            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/html.png" alt="">
                </div>
                <div class="card-text">
                    <p>Html</p>
                    <hr>
                    <a href="https://developer.mozilla.org/es/docs/Web/HTML">Ver más</a>
                </div>
            </div>

            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/git.png" alt="">
                </div>
                <div class="card-text">
                    <p>Git</p>
                    <hr>
                    <a href="https://git-scm.com/">Ver más</a>
                </div>
            </div>

            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/figma.png" alt="">
                </div>
                <div class="card-text">
                    <p>Figma</p>
                    <hr>
                    <a href="https://www.figma.com/">Ver más</a>
                </div>
            </div>
            <div class ="each-card">
            <div class="card-img">
                <img src="./imagenes/css.png" alt="">
            </div>
            <div class="card-text">
                <p>Css</p>
                <hr>
                <a href="https://developer.mozilla.org/es/docs/Web/CSS">Ver más</a>
            </div>
        </div>
            <div class ="each-card">
                <div class="card-img">
                    <img src="./imagenes/visual.png" alt="">
                </div>
                <div class="card-text">
                    <p>Visual Code</p>
                    <hr>
                    <a href="https://code.visualstudio.com/">Ver más</a>
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

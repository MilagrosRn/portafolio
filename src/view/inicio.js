// <img class="fondo" src="./imagenes/api.jpg"> L44
export default () => {
    const view = `
   
    <div class="row"> 
        <div class="min1">
            <div class="bloque"> 
                <div class="col-portada-home" >
                    <div class="text-portada col l5 s6">
                        <div class="container col-portada-home-div">
                            <h1>Milagros Rodriguez</h1>
                            <h2>Front-end Developer</h2>
                            <button class="btn-descarga">
                <a href="./imagenes/habil/milagroscv.pdf" download="CVMilagrosRodriguez">
                Descarga mi CV
                </a>
            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
    <div class="about ">
    <h2 class="center-align">Un poco sobre mi</h2>
    <div class="row">
        <div class="col s12 m4">
            <h3>¿Qué hago?</h3>
            <p>
            Desarrollo productos web mejorando continuamente procesos y presentación de productos a los clientes. 
            </p>
         </div>
        <div class="col s12 m4">
            <h3>¿Cómo lo hago?</h3>
            <p>
            Me comprometo con mi trabajo, combino conocimientos con aprendizaje constante y pasion por lo que hago.
            </p>
        </div>
        <div class="col s12 m4">
            <h3>¿Porqué yo?</h3>
            <p>
            No le temo a los nuevos retos, soy proactiva, adaptable y resilente.Trabajo con la mejor actitud ya sea individual o en equipo. 
            </p>
        </div>
    </div>
    </div>
   
    <div class="habil" > 
        <div class="bloque-habil">
            
                <div class="cont-text">
                    <h2>Habilidades Técnicas</h2>
                </div>
        </div>
    </div>


    
<div class="container-tabs">
<div class="row">
    <div class="col s12 m4">
        <div class="card">
            <div class="card-image">
                <img src="./imagenes/habil/celcomp111.jpeg">
                <span class="card-title">Diseño Web</span>
            </div>
            <div class="card-content">
                <li>Html</li>
                <li>Javascript</li>
                <li>Sass</li>
                <li>Css</li>
            </div>
        </div>
    </div>
    <div class="col s12 m4">
        <div class="card">
            <div class="card-image">
                <img src="./imagenes/habil/pagina-web-1.jpg">
                <span class="card-title">Maquetacion</span>
            </div>
            <div class="card-content">
                <li>Figma</li>
                <li>Mobile First Design</li>
                <li>Photoshop</li>
                <li>Corel Draw</li>
            </div>
        </div>
    </div>
    <div class="col s12 m4">
        <div class="card">
            <div class="card-image">
                <img src="./imagenes/habil/ang.jpg">
                <span class="card-title">Frameworks</span>
            </div>
            <div class="card-content">
                <li>Angular</li>
            </div>
        </div>
    </div>
    </div>
    <div  class="row">
    <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src="./imagenes/habil/node.jpg">
                    <span class="card-title">API's</span>
                </div>
                <div class="card-content">
                    <li>NodeJs</li>
                     <li>Consumo de API's</li>
                </div>
            </div>
        </div>
        
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src="./imagenes/habil/api111.jpg">
                    <span class="card-title">Control de versiones</span>
                </div>
                <div class="card-content">
                    <li>Git</li>
                     <li>Github</li>
                </div>
            </div>
        </div>
        
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src="./imagenes/habil/test111.jpg">
                    <span class="card-title">Testing</span>
                </div>
                <div class="card-content">
                    <li>Jest</li>
                     <li>Jasmine</li>
                </div>
            </div>
        </div>
</div>
</div>

    `

    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}
/*
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
</section>*/
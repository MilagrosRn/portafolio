export default ()=>{
    const view =`
    <section class="container description">
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
        <h2 class="work">Trabajo con metodologías como:</h2>
       <div class="work-tools">
            
           <div class="tool-container">
                <div class="container-img">
                    <img src="../imagenes/telefono-inteligente.svg" alt="">
                    
                </div><h3>Mobile First</h3>
           </div>
           <div class="tool-container">
                <div class="container-img">
                    <img src="./imagenes/agil.svg" alt="">
                   
                </div> <h3>Scrum y Kanban</h3>
           </div>
            <div class="tool-container">
                <div class="container-img">
                    <img src="./imagenes/cara.svg" alt="">
                </div>                
                <h3>Diseño pensado en el usuario</h3>
            </div>

       </div>
    </section>
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
    </section>
   

    `
    
    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}
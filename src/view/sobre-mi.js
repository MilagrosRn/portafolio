export default ()=>{
    const view =`
    

    <section class="sob">
    <div class="row">
        <div class="col s4 " >
                <div class="img-sob">
                    <img src="./imagenes/about.jpeg" alt="">
                </div>
                <div class="redes">
               <a href="mailto:milagros.rodrigueznav@gmail.com?subject=Enviado desde portafolio&body=Hola me gustaría que contactáramos">
               <img class="icon" src="./imagenes/icons/correo.png" alt="">
               </a>
               <a  href="https://github.com/MilagrosRn">
               <img class="icon" src="./imagenes/icons/git.png" >
               </a>
               <a href="https://www.linkedin.com/in/milagrosrn/">
               <img class="icon" src="./imagenes/icons/lk.png" >
               </a>
                
                <a >
                <img class="icon" src="./imagenes/icons/insta.png" alt="">
               </a>
                </div>
        </div>  

        <div class="col s8  container">
            <h2>Sobre mi</h2>
            <p>
            Soy Milagros Font-end Developer egresada de Laboratoria .Me gusta aprender constantemente para crear 
            interfaces que busquen una mejor experiencia de usuario.
            </p>
            <p>
            En mi formación consolide habilidades como el autoaprendizaje, trabajo en equipo,
            orientacion a resultados y la aplicación de metodologías agiles.

            </p>
            <p>
            Me considero una persona positiva, suelo contagiar ese ánimo al equipo de trabajo y
            me comprometo con los productos que desarrollo.
            </p>
            <button class="btn-descarga">
                <a href="./imagenes/habil/milagroscv.pdf" download="CVMilagrosRodriguez">
                Descarga mi CV
                </a>
            </button>
        </div>

        </div>
</section>
<div class="habil" > 
<div class="bloque-habil div-about-hab">
    
        <div class="cont-text about-hab">
            <h2>Habilidades Blandas</h2>
        </div>
</div>
</div>
<section class=" tools hab-cont-blandas">
    <div class="section-tools hab-blandas" >
        <div class="row">
            <div class="col s12 m12">
                <div class="card-panel teal ">
                <img src="./imagenes/icons/charla.png" alt="">
                    <span class="">Comunicacion Asertiva</span>
                </div>
            </div>
            <div class="col s12 m12">
                <div class="card-panel teal"><img src="./imagenes/icons/mente.png" alt="">         
                    <span class="">Resolución de problemas</span>
                </div>
            </div>
            <div class="col s12 m12">
                <div class="card-panel teal"><img src="./imagenes/icons/grupo.png" alt="">
                    <span class="">Trabajo en equipo</span>
                </div>
            </div>
        </div>
        <div  class="div-img-about">
        <img src="./imagenes/programingP.svg" alt="">
        </div>
    </div>
</section>

    `
    
    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}
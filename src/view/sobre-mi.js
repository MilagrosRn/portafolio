export default ()=>{
    const view =`

    
    <section class="container sob">
    <div class="section-sob">
        <h2>Sobre mi</h2>
        <figure>
            <div class="sob-img">
                <img src="./imagenes/ndfoto.png" alt="">
            </div>
            <div class="sob-text">
        
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
        <button class="bubbly-button btn-download btn-hab">Descarga mi CV</button>
            </div>
            
        </figure>
        
    </div>
</section>
<section class="container tools hab-cont-blandas">
<div class="section-tools hab-blandas" >
    <h2 class="work">Habilidades Blandas</h2>
      
    <div class="work-tools hab-text">
    
       <div class=" each-hab-text">
            <div class="container-img each-hab-img">
                <img class="browser-default" src="./imagenes/222.svg" alt="">
    
            </div >
           <div class="container-text">
                <h3>Responsable</h3>
           </div>
       </div>
    
       <div class=" each-hab-text">
           
       <div class="container-img each-hab-img">
                
            <img class="browser-default" src="./imagenes/111.svg" alt="">
    
            </div> 
            
            <div class="container-text">
                
            <h3>Trabajo en equipo</h3>
    
            </div>
       </div>
       <div class=" each-hab-text">
     <div class="container-img each-hab-img">
                
            <img class="browser-default" src="./imagenes/cv2.svg" alt="">
    
            </div> 
            
            <div class="container-text">
                
            <h3>Comunicacion Asertiva</h3>
    
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
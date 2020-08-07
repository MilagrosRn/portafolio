export default ()=>{
    const view =`
<section class="container">
<div class="row">
<form class="col s6">
    <div class="row card-panel">
<div class="input-field col s12"> 
<input type="text" id="nombre" placeholder="Ingresa tu nombre">
<label for="nombre">Nombre</label>
</div>
<div class="input-field col s12"> 
<input type="text" id="apellido" placeholder="Ingresa tu apellido" class="validate" required>
<label for="apellido">Apellido</label>
</div>
<div class="input-field col s12"> 
    <input type="text" id="asunto" placeholder="Ingresa tu asunto" class="validate" required>
    <label for="asunto">asunto</label>
    </div>
    <div class="input-field col s12"> 
        <textarea name=""  id="descripcion" placeholder="Ingresa tu descripcion" cols="30" 
            rows="10"  value=""></textarea>
        <label for="descripcion">descripcion</label>
        </div> <button class="bubbly-button  ">Enviar Correo</button>
    </div>
   
</form>
</div>
</section>
    `
    
    const div = document.createElement('div')
    div.innerHTML = view;
    return div
}
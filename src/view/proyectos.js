export default ()=>{
    const view =`

    
    <div class="parallax-container">
    <div class="parallax"><img class="centered"src="./imagenes/portafolio.jpg"></div>
  </div>
  <section class="container">
<div class="proyectos">
    <h2>Proyectos</h2>
    <div class="group-proy center">
        <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="./imagenes/card.png">
                  <span class="card-title">Card Title</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src="./imagenes/card.png">
                <span class="card-title">Card Title</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="./imagenes/card.png">
              <span class="card-title">Card Title</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        
        <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="./imagenes/card.png">
            <span class="card-title">Card Title</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>

      <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="./imagenes/card.png">
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>

    <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src="./imagenes/card.png">
        <span class="card-title">Card Title</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
      </div>
    </div>
  </div>
  
  <div class="col s12 m6">
  <div class="card">
    <div class="card-image">
      <img src="./imagenes/card.png">
      <span class="card-title">Card Title</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
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
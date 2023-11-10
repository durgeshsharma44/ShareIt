const navbarHtml = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"><img src="logo.png" alt="logo" style="max-height:50px;"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
 
  <li>
  <a class="nav-link" href="mahakal.html">Status</a>
  </li>
  <li>
  <a class="nav-link" href="quotes.html">Quotes</a>
  </li>
  <li>
  <a class="nav-link" href="images.html">Images</a>
  </li>

 
 
    </ul>
    <a style="margin: 10px;"  href="https://instagram.com/mahakal_k_bhakt12?igshid=OGQ2MjdiOTE="><img style="height: 20px; width: 20px;" src="ig.png" alt=""></a>

    <a href="https://www.youtube.com/@mahakalkbhakt12"><img style="height: 25px; width: 25px;" src="yt.png" alt=""></a>

  </div>
</div>
</nav>`;


const footerHtml = `<div class="text-center mt-auto py-3 footer">&copy mahakal_k_bhakt12</div>`;

const carouselData = [
  "crouselimages/mahakaleshwar.jpg",
  "crouselimages/Ramanathaswamy-Temple-Rameshwaram.jpg",
  "crouselimages/Omkareshwar.jpg",
  "crouselimages/Nageshwar-jyotirlinga-image.jpg"
]

function createCarousel(){
  
  let carouselHtml = `<div id="carouselPanchayat" class="carousel slide  " style="height: 20% ;z-index: 2;" data-bs-ride="carousel">
  <div class="carousel-indicators">`;
  let len = carouselData.length;
  for(let i=0;i<len;i++){
    if(i==0) carouselHtml += `<button type="button" data-bs-target="#carouselPanchayat" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
    
    else carouselHtml += `<button type="button" data-bs-target="#carouselPanchayat" data-bs-slide-to="`+ i +`" aria-label="Slide `+ i+1+`"></button>`;
    }
  carouselHtml += `</div>
  <div class="carousel-inner carOusel" >`;

  for(let i=0;i<len;i++){
    if(i==0) carouselHtml += `
    <div class="carousel-item active" >
      <img src="`+ carouselData[i] +`" class="d-block w-100" alt="...">
    </div>`;
    else carouselHtml += `
    <div class="carousel-item">
      <img src="`+ carouselData[i] +`" class="d-block w-100" alt="...">
    </div>
      `
  }
  carouselHtml += `</div>`;
  carouselHtml += `<button class="carousel-control-prev bg-dark rounded-circle" type="button" data-bs-target="#carouselPanchayat" data-bs-slide="prev">
  <span class="carousel-control-prev-icon h-50" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next bg-dark rounded-circle" type="button" data-bs-target="#carouselPanchayat" data-bs-slide="next">
    <span class="carousel-control-next-icon h-50" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
 `
  document.getElementById('carousel-container-home').innerHTML = carouselHtml;
  
}

function webOnInit(){
  document.getElementById("navBar").innerHTML = navbarHtml;
  document.getElementById("fooTer").innerHTML = footerHtml;
  createCarousel();
}
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


let dotselementhtml =document.getElementsByClassName('dots')[0]
for (let pas = 0; pas < slides.length; pas++) {
	console.log("Faire" + pas + "pas vers l'est");
	let newDiv= document.createElement('div')
    dotselementhtml.prepend(newDiv)
	newDiv.classList.add("dot")
  }
const dots = document.querySelectorAll('.dot');
  console.log(dotselementhtml)
  console.log(dots)

  function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}
let selectedDot = 0
updateDots(selectedDot)


//fonction avec 2 parametres qui va mettre à jour le slide interactif sur notre site web
function updateCarousel(direction) {

	// L'index c'est pour l'index de la diapositive sélectionnée dans le carrousel
	//La direction  représente la direction dans laquelle le carrousel doit être mis à jour (gauche ou droite).


	// condition
	if (selectedDot === -1 && direction === 'left') {
		selectedDot = slides.length - 1;
  } else if (selectedDot === slides.length && direction === 'right') {
	selectedDot = 0;
  }

  // Mettre à jour l'image
  const imagePath = `assets/images/slideshow/${slides[selectedDot].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${selectedDot + 1}`;

  // Mettre à jour le texte
  const tagLine = slides[selectedDot].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}


//   ajouter AddEventListener sur le click Gauche et Droit
arrowLeft.addEventListener('click', function () {
    selectedDot = (selectedDot - 1);
    updateDots(selectedDot); // Mettez à jour les points indicateurs
	updateCarousel('left');
    updateDots(selectedDot);
});

arrowRight.addEventListener('click', function () {
    selectedDot = (selectedDot + 1) ;
    updateDots(selectedDot); // Mettez à jour les points indicateurs
	updateCarousel('right');
    updateDots(selectedDot);
});

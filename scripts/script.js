// création du carroussel sur la bannière :

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// copie de valeurs pour utilisation sans altération

let position = 0;
const listeSlides = slides.length;

// Création des flèches navivation interne carrousel

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

//   Mise en place d'un AddEventListener pour verifier que les boutons fonctionnent avec console log.

arrowLeft.addEventListener("click", (event) => {
  //   console.log("left");
  if (position == 0) {
    position = listeSlides - 1;
  } else {
    position--;
  }
  actioncarrousel(position);
});

//   si la position est 0 alors retour sur la slide "3"

arrowRight.addEventListener("click", (event) => {
  //   console.log("Right");
  if (position == listeSlides - 1) {
    position = 0;
  } else {
    position++;
  }

  actioncarrousel(position);
});
//   si la slide est "0" je passe au suivant. Arrivé au bout je reviens sur "0"

// Mise en place des dots pour avoir autant de dots que de slides
const dots = document.querySelector(".dots");
// console.log('dots');

function createDots() {
  // Je créer la boucle qui va générer autant de dots que de slides
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
    //   console.log(dot);
  }
}

// Je créer la fonction qui va actualisé le dot avec la class selected
function selectedDot() {
  const dotList = document.querySelectorAll(".dot");
  for (let index = 0; index < dotList.length; index++) {
    const dot = dotList[index];
    if (index == position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

function actioncarrousel(position) {
  const element = slides[position];
  // console.log();

  // J'affiche mes slides en provenance de mon fichier images/slideshow
  const img = document.querySelector(".banner-img");
  img.setAttribute("src", "/assets/images/slideshow/" + element.image);
  console.log(img);

  // Je modifie le texte en fonction de ma slide en provenance du tableau slides
  const p = document.querySelector(".banner-txt");
  p.innerHTML = element.tagLine;
  // console.log(tagLines);

  selectedDot();
}

// Appel des fonctions dans l'ordre

createDots();
selectedDot();
actioncarrousel(position);

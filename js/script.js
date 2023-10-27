VanillaTilt.init(document.querySelectorAll(".glassmorphic-card"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": .1,
});

let flaga_menu_mobilne = false;
let flaga_menu_lang_mobilne = false;
function menu_togle() {
  let lista_menu = document.getElementById("lista_menu");
  let lista_menu_2 = document.getElementById("lista_menu_2");

  if (flaga_menu_mobilne == false) {
    lista_menu.style.display = "flex"
  }
  if (flaga_menu_mobilne == true) {
    lista_menu.removeAttribute("style");
    if(flaga_menu_lang_mobilne == true){
      lista_menu_2.removeAttribute("style");
    }
  }

  flaga_menu_mobilne = !flaga_menu_mobilne;
}

function togle_lang() {
  let lista_menu_2 = document.getElementById("lista_menu_2");

  if (flaga_menu_lang_mobilne == false) {
    lista_menu_2.style.display = "block"
  }
  if (flaga_menu_lang_mobilne == true) {
    lista_menu_2.removeAttribute("style");
  }

  flaga_menu_lang_mobilne = !flaga_menu_lang_mobilne;
}

function chek_ekren(){
  let info_firmowe=document.getElementById("info_firmowe")
  let mapaGoogle = document.getElementById("mapaGoogle")
  let ekran =window.innerWidth;
  if(ekran<=1000){
    info_firmowe.classList.remove("col-5")
    info_firmowe.classList.add("col-11")
    mapaGoogle.classList.remove("col-5")
    mapaGoogle.classList.add("col-11")
  }
  if(ekran>1000){
    info_firmowe.classList.remove("col-11")
    info_firmowe.classList.add("col-5")
    mapaGoogle.classList.remove("col-11")
    mapaGoogle.classList.add("col-5")
  }
}

chek_ekren()
window.onresize = chek_ekren;
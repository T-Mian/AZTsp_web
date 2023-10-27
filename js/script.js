VanillaTilt.init(document.querySelectorAll(".glassmorphic-card"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": .1,
});

let flaga_menu_mobilne= false;
let flaga_menu_lang_mobilne= false;
function menu_togle(){
  let lista_menu=document.getElementById("lista_menu");

  if(flaga_menu_mobilne==false){
    lista_menu.style.display="flex"
  }
  if(flaga_menu_mobilne==true){
    lista_menu.removeAttribute("style");
  }
  flaga_menu_mobilne=!flaga_menu_mobilne;
}

function togle_lang(){
  let lista_menu_2=document.getElementById("lista_menu_2");
  
  if(flaga_menu_lang_mobilne==false){
      lista_menu_2.style.display="flex"
  }
  if(flaga_menu_lang_mobilne==true){
      lista_menu_2.removeAttribute("style");
  }
    flaga_menu_lang_mobilne=!flaga_menu_lang_mobilne;
}

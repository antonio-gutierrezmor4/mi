var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const banner = document.querySelector("#banner");
let bannerSelection = document.querySelectorAll(".banners");
let bannerSelectionLast = bannerSelection[bannerSelection.length -1];

const btnDerecha = document.querySelector("#btn-derecha");
const btnIzquierda = document.querySelector("#btn-izquierda");

banner.insertAdjacentElement('afterbegin', bannerSelectionLast);

function next(){
  let bannerSelectionFirst = document.querySelectorAll(".banners")[0];
  banner.style.marginLeft = "-200%";
  banner . style.transition = "all 0.5s";
  setTimeout(function(){
    banner.style.transition = "none";
    banner.insertAdjacentElement('beforeend' , bannerSelectionFirst);
    banner.style.marginLeft = "-100%";
  }, 500);
}


function prev(){
let bannerSelection = document.querySelectorAll(".banners");
let bannerSelectionLast = bannerSelection[bannerSelection.length -1];
  banner.style.marginLeft = "0";
  banner.style.transition = "all 0.5s";
  setTimeout(function(){
    banner.style.transition = "none";
    banner.insertAdjacentElement('afterbegin', bannerSelectionLast);
    banner.style.marginLeft = "-100%";
  }, 500);
}

btnDerecha.addEventListener('click' , function( ){
  next();
});

btnIzquierda.addEventListener('click' , function( ){
  prev();
});

setInterval(function (){
  next();
}, 5000);





}
/*
     FILE ARCHIVED ON 07:06:41 Jan 08, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:28 Oct 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.557
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.011
  esindex: 0.01
  cdx.remote: 7.863
  LoadShardBlock: 91.245 (3)
  PetaboxLoader3.datanode: 54.54 (4)
  PetaboxLoader3.resolve: 79.42 (2)
  load_resource: 55.42
*/
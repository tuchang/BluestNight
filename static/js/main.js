$(document).foundation();
var menu = new Foundation.ResponsiveMenu($("#main-nav"));
//var menuToggle = new Foundation.Toggler($("#menu-toggle"));

function getIsMobile() {
  return document.getElementById("main-nav").children[0].className.includes("is-drilldown");
}

// Trigger change on first call
var isMobile = !getIsMobile();

function changeMenu() {
  var nav = document.getElementById("main-nav");
  if (nav.getAttribute("style") === "display: none;") {
    nav.setAttribute("style", "display: block;");
  }
  else {
    nav.setAttribute("style", "display: none;");
  }
}

function checkChangeMenu() {
  var wasMobile = isMobile;
  var nav = document.getElementById("main-nav");
  var isMobile = getIsMobile();
  if (isMobile !== wasMobile) {
    if (isMobile || (!isMobile && nav.getAttribute("style") === "display: none;")) {
      changeMenu();
    }
  }
}

function rmInvisibleSubMenu() {
  var nav = document.getElementById("main-nav");
  var submenus = nav.getElementsByClassName("submenu invisible");
  var c;
  for (menu of submenus) {
    c = menu.getAttribute("class");
    menu.setAttribute("class", c.substring(0, c.indexOf("invisible")) + c.substring(c.indexOf("invisible") + 9));
  }
}

function onResize() {
  checkChangeMenu();
  rmInvisibleSubMenu();
}

// After this call, isMobile is correct
checkChangeMenu();

window.addEventListener("resize", onResize, false);
window.addEventListener("orientationchange", onResize, false);
document.getElementById("menu-toggle").addEventListener("click", changeMenu, false);

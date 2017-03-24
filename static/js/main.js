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

function rmInvisibleSubMenu(topmenu) {
  var submenus = topmenu.getElementsByClassName("submenu");
  var c;
  for (menu of submenus) {
    if (menu.getAttribute("class").includes("invisible")) {
      c = menu.getAttribute("class");
      menu.setAttribute("class", c.substring(0, c.indexOf("invisible")) + c.substring(c.indexOf("invisible") + 9));
    }
    rmInvisibleSubMenu(menu);
  }
}

function onResize() {
  checkChangeMenu();
  rmInvisibleSubMenu(document.getElementById("main-nav"));
}

// After this call, isMobile is correct
checkChangeMenu();

window.addEventListener("resize", onResize, false);
window.addEventListener("orientationchange", onResize, false);
document.getElementById("menu-toggle").addEventListener("click", changeMenu, false);

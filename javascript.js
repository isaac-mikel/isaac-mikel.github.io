
// hamborger menu collapse + add margin to content-container
function hamBurger() {
  var x = document.getElementById("menu-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("content-container");
  if (x.style.marginTop === "180px") {
    x.style.marginTop = "20px";
  } else {
    x.style.marginTop = "180px";
  }
}

// 6 functions for each category on click, expand cards below
function cardExpandlogos() {
  var x = document.getElementById("card-preview-logos");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("arrow-up-1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function cardExpandillustrations() {
  var x = document.getElementById("card-preview-illustration");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("arrow-up-2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function cardExpandanimation() {
  var x = document.getElementById("card-preview-animation");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("arrow-up-3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function cardExpandpackage() {
  var x = document.getElementById("card-preview-package");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("arrow-up-4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function cardExpandvideo() {
  var x = document.getElementById("card-preview-video");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("arrow-up-5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function cardExpandfun() {
  var x = document.getElementById("card-preview-fun");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  var x = document.getElementById("arrow-up-6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

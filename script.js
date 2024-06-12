function hideNav() {
  let hn = document.querySelector(".mobile_list");

  hn.style.display = "none";
}
function showNav() {
  let sn = document.querySelector(".mobile_list");
  sn.style.display = "inline";
}

let hn = document.querySelectorAll("#navsvg");
hn.style.cursor = "pointer";

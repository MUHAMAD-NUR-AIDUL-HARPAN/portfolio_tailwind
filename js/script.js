//
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// form whatsap
document.getElementById("waForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = "6283805480105";
  const name = encodeURIComponent(document.getElementById("name").value.trim());
  const email = encodeURIComponent(
    document.getElementById("email").value.trim()
  );
  const note = encodeURIComponent(document.getElementById("note").value.trim());

  const text =
    `Halo,%0A` + `Nama: ${name}%0A` + `Email: ${email}%0A` + `Catatan: ${note}`;

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});

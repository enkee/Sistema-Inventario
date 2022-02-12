
//Salir
const btnSalir = document.querySelector("#logout");
btnSalir.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
  });
});

// Cambio de estado de autentificacion
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logeado");
  } else {
    console.log("no has ingresado");
    window.location.href = "./index.html";
  }
});
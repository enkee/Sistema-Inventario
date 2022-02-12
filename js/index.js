
const ingresoformulario = document.querySelector("#ingreso-formulario");

//Ingreso con Correo
ingresoformulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = ingresoformulario["mail"].value;
  const password = ingresoformulario["pass"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    ingresoformulario.reset();
    console.log("logeado");
  });
});


// Cambio de estado de autentificacion
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logeado");
    window.location.href = "./main.html";
    
  } else {
    console.log("no has ingresado");
  }
});
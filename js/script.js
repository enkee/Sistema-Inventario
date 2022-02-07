const firebaseConfig = {
  apiKey: "AIzaSyBO3XZXj4rgbScd46Qi44tk6hHPKVJ2EoI",
  authDomain: "fb-proyecto-8d3d2.firebaseapp.com",
  databaseURL: "https://fb-proyecto-8d3d2-default-rtdb.firebaseio.com",
  projectId: "fb-proyecto-8d3d2",
  storageBucket: "fb-proyecto-8d3d2.appspot.com",
  messagingSenderId: "178825416497",
  appId: "1:178825416497:web:6113aedea7184511b1aa10",
  measurementId: "G-G212NQ37FN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const ingresoformulario = document.querySelector("#ingreso-formulario");
const ingreso = document.querySelector("#ingreso");
const listado = document.querySelector("#listado");

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
    btnSalir.style.display = "block";
    listado.style.display = "block";
    ingreso.style.display = "none";
  } else {
    console.log("no has ingresado");
    btnSalir.style.display = "none";
    listado.style.display = "none";
    ingreso.style.display = "block";
  }
});
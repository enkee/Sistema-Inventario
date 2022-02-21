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


//Selectores
var listadoBienes = $("#pnl-listado");

//* Leer bienes
function readBienes() {
  db.collection("Bienes").where("Amb","==","T03").get().then((bienesRef) => {
    console.log(bienesRef.docs)
    listBienes(bienesRef.docs);
  });
}


// Listar bienes
function listBienes(data) {
  listadoBienes.empty();
  console.log(data.length);
  if (data.length > 0) {
    let content = "";
    data.forEach(document => {
      let doc = document.data();
      const divPost = `
                    <div style='border:solid 2px;'>
                        <h5>${doc.Desc}</h5><br>
                        <span>Cod.Int.: ${doc.CodInt}</span>
                        <span>Cod.UGEL.: ${doc.CodUgel}</span>
                        <span>Cant.: ${doc.Cant}</span><br>
                        <span><strong>${doc.Amb}</strong></span>
                        <span>Color: ${doc.color}</span>
                        <span>Dimen: ${doc.dimen}</span>
                    </div>
                  
                `;
      content += divPost;
    });
    listadoBienes.append(content);
  }
}

/* OPERACIONES CON POST 
// Cunado se obtienen los Post
const onGetBien = (callback) => db.collection('Bienes').onSnapshot(callback);*/

// EVENTOS
// Al cargar la Pagina, listar los Estados.
window.addEventListener('DOMContentLoaded', () => {
  readBienes();
});

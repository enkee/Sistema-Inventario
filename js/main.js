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
async function readBienes() {
  await db.collection("Bienes").where("Amb","==","T03").get().then((bienesRef) => {
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
                    <div class="item">
                        <div class="item-img">
                          <i class="fa-solid fa-image"></i>
                        </div>
                        <div class="item-data">
                          <h9>${doc.Desc}</h9><br>
                          <span>INT.: ${doc.CodInt}</span>
                          <span>UGEL.: ${doc.CodUgel}</span><br>
                          <span><strong>${doc.Amb}</strong></span>
                          <span>C.: ${doc.color}</span>
                          <span>D.: ${doc.dimen}</span>
                        </div>
                        <div class="item-cant">
                          <span>${doc.Cant}</span><br>
                          <span>uni</span><br>
                        </div>
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

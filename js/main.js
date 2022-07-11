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


//====================== Bienes ==========================


// Selectores del formulario Bien
const bienForm = document.querySelector('#bien-form');

const bienCodInt = document.querySelector('#bien-cod-int');
const bienCodUgel = document.querySelector('#bien-cod-ugel');
const bienDesc = document.querySelector('#bien-desc');
const bienTipo = document.querySelector('#bien-tipo');
const bienUbi = document.querySelector('#bien-ubi');
const bienEstado = document.querySelector('#bien-estado');
const bienOrigen = document.querySelector('#bien-origen');
const bienCantidad = document.querySelector('#bien-cant');
const bienChequeado = document.querySelector('#bien-checked');
const bienFecIn = document.querySelector('#bien-fec-in');
const bienFecOut = document.querySelector('#bien-fec-out');
const bienMarca = document.querySelector('#bien-marca');
const bienModel = document.querySelector('#bien-model');
const bienColor = document.querySelector('#bien-color');
const bienAncho = document.querySelector('#bien-ancho');
const bienLargo = document.querySelector('#bien-largo');
const bienAlto = document.querySelector('#bien-alto');
const bienSerie = document.querySelector('#bien-serie');
const bienObs = document.querySelector('#bien-obs');
const bienImg = document.querySelector('#bien-img');

const bienAceptar = document.querySelector('#bien-aceptar');

//Selector del Listado
const listadoBienes = document.querySelector('#pnl-listado');



/* OPERACIONES CON POST */
// Leer bienes

const onGetBienes = (callback) => db.collection("Bienes").where("Amb", "==", "T03").onSnapshot(callback);

// Guardar bien
const savePost = (bienCodInt, bienCodUgel, bienDesc, bienTipo, bienUbi,
  bienEstado, bienOrigen, bienCantidad, bienChequeado, bienFecIn, bienFecOut,
  bienMarca, bienModel, bienColor, bienAncho, bienLargo, bienAlto, bienSerie, bienObs) =>
  db.collection("Bienes").add({
    CodInt: bienCodInt,
    CodUgel: bienCodUgel,
    Desc: bienDesc,
    Tipo: bienTipo,
    Amb: bienUbi,
    Est: bienEstado,
    orig: bienOrigen,
    Cant: bienCantidad,
    Flag: bienChequeado,
    FecE: bienFecIn,
    FecS: bienFecOut,
    Marca: bienMarca,
    Modelo: bienModel,
    color: bienColor,
    Ancho: bienAncho,
    Largo: bienLargo,
    Alto: bienAlto,
    serie: bienSerie,
    Obs: bienObs
  });


/* EVENTOS */

// Al cargar la Pagina, listar los Bienes.
window.addEventListener('DOMContentLoaded', () => {
  onGetBienes((data) => {
    listadoBienes.innerHTML = '';
    data.forEach(document => {
      //console.log(document.data());

      const doc = document.data();

      listadoBienes.innerHTML += `
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
    });
  })
});

//Al Presionar Nuevo Bien, guardar bien
bienAceptar.addEventListener("click", async (e) => {
  await savePost(bienCodInt.value, bienCodUgel.value, bienDesc.value, bienTipo.value, bienUbi.value,
    bienEstado.value, bienOrigen.value, bienCantidad.value, bienChequeado.value, bienFecIn.value, bienFecOut.value,
    bienMarca.value, bienModel.value, bienColor.value, bienAncho.value, bienLargo.value, bienAlto.value, bienSerie.value, bienObs.value);

    console.log('Bien guradado');

    bienForm.reset();
    bienCodInt.focus();
});


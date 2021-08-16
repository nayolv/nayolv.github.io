import { datitos } from './data.js';
import data from './data/pokemon/pokemon.js';
const dataImportada = data.pokemon;

const contenedorInicio = document.getElementById("pokeInicio");
let contenedorTarjetas = document.createElement("div");

//CREA CONTENEDORES DE TARJETAS EN INICIO 
const templateCard = (arrayData) => {

  contenedorInicio.innerHTML = "";

  arrayData.forEach(item => {
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
    contenedorImgyNombre.setAttribute("class", "claseTarjeta");
    contenedorInicio.appendChild(contenedorImgyNombre);

    const liNum = document.createElement("p");
    liNum.textContent = "N° " + item.num;
    contenedorImgyNombre.appendChild(liNum);

    const elementoImg = document.createElement("img");
    elementoImg.src = item.img;
    contenedorImgyNombre.appendChild(elementoImg);

    const liNombre = document.createElement("p");
    liNombre.textContent = item.name;
    contenedorImgyNombre.appendChild(liNombre);

    //MODAL CARACTERISTICAS 
    contenedorImgyNombre.addEventListener("click", function () {

      document.getElementById("modalPoke").style.display = "block";
      const imagenP = document.getElementById("imgPoke");
      const nombreP = document.getElementById("namePoke");
      const tipoP = document.getElementById("tipo");
      const resistenciaP = document.getElementById("resistencia");
      const debilidadP = document.getElementById("debilidad");

      imagenP.src = item.img;
      nombreP.textContent = "Name: " + item.name;
      tipoP.textContent = item.type;
      resistenciaP.textContent = item.resistant;
      debilidadP.textContent = item.weaknesses;

      document.getElementById("closePoke").addEventListener("click", function () {
        document.getElementById("modalPoke").style.display = "none";
      });
    });


  });

};
contenedorInicio.innerHTML = contenedorTarjetas;

templateCard(dataImportada);

//BOTON PARA ORDENAR A-Z
document.getElementById("az").addEventListener("click", () => {
  const ordenarAz = datitos.sortAz(dataImportada);
  templateCard(ordenarAz);
});
//BOTON PARA ORDENAR Z-A
document.getElementById("za").addEventListener("click", function organizadorZa() {
  const ordenarZa = datitos.sortZa(dataImportada);
  templateCard(ordenarZa);
});


//BUSCADOR POR NOMBRE
document.getElementById("searchIcon").addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const dataFiltrada = datitos.infoFiltrada(dataImportada, searchUser);
  const pokeData = datitos.mapeandoData(dataFiltrada);
  const resultadoE = datitos.pokeError(pokeData, searchUser);
  if (resultadoE == false) { alert("pokemon no encontrado") }

  dataFiltrada.forEach(item => {

    const imagenP = document.getElementById("imgPoke");
    imagenP.src = item.img;
    const nombreP = document.getElementById("namePoke");
    nombreP.textContent = "Name: " + item.name;
    const tipoP = document.getElementById("tipo");
    tipoP.textContent = item.type;
    const resistenciaP = document.getElementById("resistencia");
    resistenciaP.textContent = item.resistant;
    const debilidadP = document.getElementById("debilidad");
    debilidadP.textContent = item.weaknesses;
});

//FILTRADO POR TIPO

  //DISPLAY PARA MODAL
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";
  if (resultadoE == false) {
    modalP.style.display = "none";
  }
  document.getElementById("closePoke").addEventListener("click", function () {
  document.getElementById("modalPoke").style.display = "none";
  });
});

//FILTRADO POR TIPO

document.getElementById("menuDesplegable").addEventListener("change", function () {
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const pokePorTipo = datitos.filtradoPorTipo(dataImportada, elementoSeleccionado);
  templateCard(pokePorTipo);
});

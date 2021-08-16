const datitos = {
  //FUNCIONES PARA EL BUSCADOR
  infoFiltrada: function (dataImportada, searchUser) {
    return dataImportada.filter(poke =>{
      return poke.name.includes(searchUser)
    });
  },
  
  mapeandoData: function (dataFiltrada) {
    return dataFiltrada.map(pokenombre => {
      return pokenombre.name
      });
  },

  pokeError(pokeData, searchUser) {
    if (searchUser != pokeData || searchUser == "") {
      return false
    }
  },
  //FILTRA POR TIPO DE POKEMON
filtradoPorTipo(dataImportada, elementoSeleccionado) {

  return dataImportada.filter(poke =>{ 
     return poke.type.includes(elementoSeleccionado)
});
},

  //ORDENA ASCENDENTE
sortAz(dataImportada) {
    
  const az= dataImportada.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  });
  return az;
},

//ORDENA DE DESCENDENTE
sortZa(dataImportada) {

  const za= dataImportada.sort((a, b) => {
    if (a.name < b.name) {
      return 1
    }
    if (a.name > b.name) {
      return -1
    }
    return 0
  });
  return za;
}
};

export { datitos }
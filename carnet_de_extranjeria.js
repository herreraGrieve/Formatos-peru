// CARNET DE EXTRANJERÍA (CE) //

//*CONDICIONES*
// 1. Alfanumérico.
// 2. Mínimo 9 dígitos.
// 3. Máximo 12 dígitos.

// *ANOTACIONES*
// Las consultas en linea en la web de Migraciones acepta 9 caracteres
// como longitud exacta para validar correctamente el CE.
// Sin embargo, el parámetro aceptado sobre el CE en el PDT de la
// Sunat acepta como válido un máximo de 12 caracteres.

const validateCEPeru = (val) => {
  const rex = /^[a-zA-Z0-9]{9,12}$/;

  if (rex.test(val))
    return true
  else
    return false
}
  
//console.log(
  //validateCEPeru('123456789')     : true
  //validateCEPeru('123456789012')  : true
  //validateCEPeru('123abc123P')    : true

  //validateCEPeru('12345678')      : false
  //validateCEPeru('1234567890123') : false
  //validateCEPeru('12345678´A0*')  : false
//)

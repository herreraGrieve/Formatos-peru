// PLACA DE AUTO //

//*CONDICIONES*
// 1. El primer digito siempre es una letra.
// 2. El segundo y tercer digito son caracteres alfanuméricos.
// 3. Los últimos 3 o 4 caracteres son solo dígitos.
// 4. Acepte un guión opcional en la posición 4 (contando 0).

// *ANOTACIONES*
// Valida placas de auto de vehículos particulares,
// otros tipos de autos especiales como de la policia, bomberos, del estado, etc
// necesitan otro tipo de validación.

const validateCarPlatePeru = (plate) => {
  const rex = `/^([a-zA-Z]{1}[a-zA-Z0-9]{1,2}-?\d{3,4})$/`;

  if (rex.test(plate))
    true
  else
    false
}
  
//console.log(
  //validatePlateCarPeru('A43-2234')  : true
  //validatePlateCarPeru('A43-223')   : true
  //validatePlateCarPeru('A43223')    : true

  //validatePlateCarPeru('243-2234')  : false
  //validatePlateCarPeru('243-2A34')  : false
  //validatePlateCarPeru('243-25342') : false
//)
//Proyecto Freelander: Una calculadora para saber cuánto cobrar como freelancer.

////////////////////////////////////////////////////////////////////////////////
// alert
// Bienvienida.
alert(
  "Bienvenido a Freelo Calculator. Una herramienta simple para que sepas cuanto cobrar como freelancer."
);

////////////////////////////////////////////////////////////////////////////////
// let / prompt / while / switch
// Solicitud de ingreso de la moneda para hacer el cálculo.
let moneda = prompt(
  "Ingresa LA MONEDA con la que deseas hacer el cálculo."
).toLowerCase();

while (
  moneda !== "dólar" &&
  moneda !== "dólares" &&
  moneda !== "dolar" &&
  moneda !== "dolares" &&
  moneda !== "euro" &&
  moneda !== "euros"
) {
  switch (moneda) {
    case "peso":
    case "pesos":
    case "peso argentino":
    case "pesos argentinos":
      alert(
        "¿Pero estás loco?. ¿Cómo vas a calcular en PESOS jaja?. Esa moneda devalúa constantemente. Elige por favor una moneda estable de intercambio y ahorro a nivel mundial."
      );
      break;
    case "real":
    case "reales":
    case "peso uruguayo":
    case "pesos uruguayos":
    case "libra":
    case "libras":
      alert(
        "No te recomendamos hacer el cálculo con esa moneda ya que es de uso local. Elige por favor una moneda de intercambio y ahorro a nivel mundial."
      );
      break;
    default:
      alert(
        "No ingresaste una moneda válida o el sistema no puede hacer el cálculo con esa moneda."
      );
      break;
  }
  moneda = prompt(
    "Ingresa LA MONEDA con la que deseas hacer el cálculo."
  ).toLowerCase();
}

// if
// Cambio del string "dolar o "dólar" o "euro" de singular a plural para el caso
// en el que el usuario lo ingrese en singular. Para que quede bien en la redacción.

// Optimización del if con Operador ternario
moneda === "dolar" ||
moneda === "dólar" ||
moneda === "dolares" ||
moneda === "dólares"
  ? (moneda = "DÓLARES")
  : (moneda = "EUROS");

// console.log para registrar el ingreso
console.log("La moneda es: " + moneda);

////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso del monto que pretende ganar por mes.

let ingresos = parseInt(
  prompt(
    "Calculemos TUS INGRESOS:\nIngresa EL MONTO en " +
      moneda +
      " de lo que pretendes ganar por Mes."
  )
);
// variable para el string que devuelve la función chequearInputOperadorSimple
let stringIngresos = "Pretensión de Ingresos mensuales: ";
// variable para el string que devuelve el while en el else
let stringIngresosPrompt =
  "Ingresa EL MONTO en " + moneda + " de lo que pretendes ganar por Mes";

////////////////////////////////////////////////////////////////////////////////
//INGRESOS//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Función chequearOperadorSimple////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* arrow_function con Operador Simple y parámetros para reutilizar en los inputs */
const chequearInputOperadorSimple = (
  varInputCantidad,
  varPromptCantidad,
  varPromptWhile
) => {
  let input = varInputCantidad;
  while (isNaN(input) || input < 1) {
    // Optimización del if con Operador ternario
    input < 1
      ? alert("Debes Ingresar un número mayor a 0.")
      : alert(
          "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
        );

    input = parseInt(prompt(varPromptWhile));
  }
  // console.log para registrar que los ingresos sean mayores que los gastos
  console.log(varPromptCantidad + input);
  return input;
};

////////////////////////////////////////////////////////////////////////////////

/* Declaración de una variable para obtenter el valor del return de la variable input de la función chequearInputOperadorSimple */
let inputIngresos = chequearInputOperadorSimple(
  ingresos,
  stringIngresos,
  stringIngresosPrompt
);

// console.log para registrar el return de la función chequearInputOperadorSimple
console.log(inputIngresos); // retornará el valor ingresado por el usuario en el prompt

// console.log para registrar que los ingresos sean mayores que los gastos

/* console.log(
  "Pretension de ingresos mensuales: " + inputIngresos + " " + moneda
); */

////////////////////////////////////////////////////////////////////////////////
//DIAS//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso de los días que pretende trabajar por mes.
let dias = parseInt(
  prompt("Ingresa La Cantidad de DÍAS que pretendes trabajar por Mes.")
);

// variable para el string que devuelve la función chequearInputOperadorDoble
let stringDias = "Cantidad de días laborables por mes: ";

// variable para el string que devuelve el while en el else
let stringDiasPrompt =
  "Ingresa La Cantidad de Días que pretendes trabajar por Mes";

////////////////////////////////////////////////////////////////////////////////
//Función chequearOperadorDoble/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* arrow_function con Operador Doble y parámetros para reutilizar en los inputs */

const chequearInputOperadorDoble = (
  varInputTiempo,
  varPromptTiempo,
  varPromptWhile,
  valorMayorTiempo
) => {
  let input = varInputTiempo;
  while (isNaN(input) || input > valorMayorTiempo || input < 1) {
    // Optimización del if con Operador ternario
    input > valorMayorTiempo || input < 1
      ? alert("Debes Ingresar un número del 1 al " + valorMayorTiempo)
      : alert(
          "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
        );

    input = parseInt(prompt(varPromptWhile));
  }
  // console.log para registrar que los ingresos sean mayores que los gastos
  console.log(varPromptTiempo + input);
  return input;
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* Declaración de una variable para obtenter el valor del return de la variable input de la función chequearInputOperadorDoble */
let inputDias = chequearInputOperadorDoble(
  dias,
  stringDias,
  stringDiasPrompt,
  31
);

// console.log para registrar el return de la función chequearInputOperadorSimple
console.log(inputDias);
// console.log para registrar el ingreso
/* console.log("Cantidad de días laborables por mes: " + inputDias + " días."); */

////////////////////////////////////////////////////////////////////////////////
//HORAS//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso de las horas que pretende trabajar por día.
let horas = parseInt(
  prompt("Ingresa La Cantidad de HORAS que pretendes trabajar por Día.")
);

// variable para el string que devuelve la función chequearInputOperadorDoble
let stringHoras = "Cantidad de horas laborables por día: ";

// variable para el string que devuelve el while en el else
let stringHorasPrompt =
  "Ingresa la Cantidad de Horas que pretendes trabajar por día";

/* Declaración de una variable para obtenter el valor del return de la variable input de la función chequearInputOperadorDoble */
let inputHoras = chequearInputOperadorDoble(
  horas,
  stringHoras,
  stringHorasPrompt,
  24
);

console.log(inputHoras);

// console.log para registrar el ingreso
/* console.log(
  "Cantidad de horas laborables por mes es: " + inputHoras + " horas."
); */

////////////////////////////////////////////////////////////////////////////////

alert(
  "Pretendes ganar " +
    inputIngresos +
    " " +
    moneda +
    " mensuales durante " +
    inputDias +
    " días por mes trabajando " +
    inputHoras +
    " horas por día.\nPara lograrlo y cotizar los trabajos correctamente debemos calcular el precio a cobrar por Hora de Trabajo. Vamos a calcularlo ..."
);

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//GASTOS FIJOS//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Objetos
//Calcular la costosFijosTotales de Gastos Fijos en un objeto.

class GastosFijos {
  constructor(oficina, internet, software) {
    this.oficina = oficina;
    this.internet = internet;
    this.software = software;
  }
  resumen() {
    alert(
      "Tus Gastos Fijos mensuales son " +
        (this.oficina + this.internet + this.software) +
        " " +
        moneda.toUpperCase() +
        "."
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
//GASTOS OFICINA////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso del monto de los gastos de oficina.
let gastosOficina = parseInt(
  prompt(
    "Calculemos TUS GASTOS FIJOS mensuales:\nIngresa tus Gastos de OFICINA en " +
      moneda.toUpperCase() +
      " por Mes."
  )
);

// variable para el string que devuelve la función chequearInputOperadorSimple
let stringGastosDeOficina = "Gastos de Oficina Mensuales: ";
// variable para el string que devuelve el while en el else
let stringGastosDeOficinaPrompt =
  "Ingresa tus Gastos de OFICINA en " + moneda.toUpperCase() + " por Mes.";

/* Declaración de una variable para obtenter el valor del return de la variable input de la función chequearInputOperadorSimple */
let inputGastosDeOficina = chequearInputOperadorSimple(
  gastosOficina,
  stringGastosDeOficina,
  stringGastosDeOficinaPrompt
);

// console.log para registrar el return de la función chequearInputOperadorSimple
console.log(inputGastosDeOficina); // retornará el valor ingresado por el usuario en el prompt

////////////////////////////////////////////////////////////////////////////////
//GASTOS INTERNET////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// Solicitud de ingreso del monto de los gastos de internet.
let gastosInternet = parseInt(
  prompt(
    "Ingresa tus Gastos de INTERNET en " + moneda.toUpperCase() + " por Mes."
  )
);

// variable para el string que devuelve la función chequearInputOperadorSimple
let stringGastosDeInternet = "Gastos de Internet Mensuales: ";
// variable para el string que devuelve el while en el else
let stringGastosDeInternetPrompt =
  "Ingresa tus Gastos de INTERNET en " + moneda.toUpperCase() + " por Mes.";

/* Declaración de una variable para obtenter el valor del return de la variable input de la función chequearInputOperadorSimple */
let inputGastosDeInternet = chequearInputOperadorSimple(
  gastosInternet,
  stringGastosDeInternet,
  stringGastosDeInternetPrompt
);

// console.log para registrar el return de la función chequearInputOperadorSimple
console.log(inputGastosDeInternet); // retornará el valor ingresado por el usuario en el prompt

////////////////////////////////////////////////////////////////////////////////
//GASTOS SOFTWARE////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso del monto de los gastos de software.
let gastosSoftware = parseInt(
  prompt(
    "Ingresa tus Gastos de SOFTWARE en " + moneda.toUpperCase() + " por Mes."
  )
);

// variable para el string que devuelve la función chequearInputOperadorSimple
let stringGastosDeSoftware = "Gastos de Software Mensuales: ";
// variable para el string que devuelve el while en el else
let stringGastosDeSoftwarePrompt =
  "Ingresa tus Gastos de SOFTWARE en " + moneda.toUpperCase() + " por Mes.";

/* Declaración de una variable para obtenter el valor del return de la variable input de la función chequearInputOperadorSimple */
let inputGastosDeSoftware = chequearInputOperadorSimple(
  gastosSoftware,
  stringGastosDeSoftware,
  stringGastosDeSoftwarePrompt
);

// console.log para registrar el return de la función chequearInputOperadorSimple
console.log(inputGastosDeSoftware); // retornará el valor ingresado por el usuario en el prompt

// construcción de un objeto de la class Gastos fijos
const persona1 = new GastosFijos(
  inputGastosDeOficina,
  inputGastosDeInternet,
  inputGastosDeSoftware
);

// ejecución
persona1.resumen();

//Declaración de la variable gastosFijosTotales para  guardar la suma de los Gastos fijos. Para cuando haya que sacar el total
// de los gastos por hora reutilizando la arrow_function calcularPorHora.
let gastosFijosTotales =
  inputGastosDeOficina + inputGastosDeInternet + inputGastosDeSoftware;

// console.log para registrar el ingreso
console.log("Gastos fijos por mes es: " + gastosFijosTotales + " " + moneda);

console.log(parseInt(gastosFijosTotales));

////////////////////////////////////////////////////////////////////////////////
//COSTOS DE VIDA////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Arrays
//Calcular la costosFijosTotales de Costos de Vida en un array

const costosDeVida = ["Tu Seguro de salud.", "Tus Impuestos.", "Otros Costos."];
const resultadoTotal = [];

for (let index = 0; index < costosDeVida.length; index++) {
  let resultado = parseInt(
    prompt(
      "Calculemos TUS COSTOS DE VIDA mensuales:\nIngresa el costo mensual en  " +
        moneda.toUpperCase() +
        " de " +
        costosDeVida[index]
    )
  );
  while (isNaN(resultado) || resultado < 1) {
    if (resultado < 1) {
      alert("Debes Ingresar un número mayor a 0.");
    } else {
      alert(
        "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
      );
    }
    resultado = parseInt(
      prompt(
        "Calculemos TUS COSTOS DE VIDA mensuales:\nIngresa el costo mensual en  " +
          moneda.toUpperCase() +
          " de " +
          costosDeVida[index]
      )
    );
  }
  console.log([index] + " index / " + "Costos de Vida Mensual: " + resultado);
  //utilización del metodo push() del array.
  resultadoTotal.push(resultado);
}

console.log(resultadoTotal);

let costosFijosTotales = 0;

//recorrido del array y uso de la propiedad length.
for (let i = 0; i < resultadoTotal.length; i++) {
  costosFijosTotales += resultadoTotal[i];
}

alert("Tus Costos de Vida mensuales son " + costosFijosTotales + " " + moneda) +
  ".";

//Declaración de la variable gastosMasCostos. Para saber el total de gastos más costos.
let gastosMasCostos = gastosFijosTotales + costosFijosTotales;

// console.log para registrar el ingreso
console.log(
  "Costo de vida fijos por mes es: " + costosFijosTotales + " " + moneda
);

console.log(parseInt(costosFijosTotales));

// console.log utilizando el metodo join para registrar el ingreso del array y compararlo con la suma de Costos de vida fijos.
console.log(
  "El resultado de los Costos de vida fijos por mes es la suma de los valores ingresados " +
    resultadoTotal.join(" , ")
);

// console.log para registrar el ingreso
console.log(
  "El total de los Gastos mas el Costo de vida mensual es: " +
    gastosMasCostos +
    " " +
    moneda
);

console.log(parseInt(gastosMasCostos));

////////////////////////////////////////////////////////////////////////////////
// arrow_function calcularPorHora para sacar el valor por hora con parámetros dinámicos // Abstracción para reutilizar en Ingresos pretendidos, Gastos fijos y Costos de vida mensuales.
const calcularPorHora = (totalIngresos, totalDias, totalHoras) => {
  return totalIngresos / (totalDias * totalHoras);
};

let precioPorHora = calcularPorHora(inputIngresos, inputDias, inputHoras);
let gastosPorHora = calcularPorHora(gastosFijosTotales, inputDias, inputHoras);
let costosPorHora = calcularPorHora(costosFijosTotales, inputDias, inputHoras);

////////////////////////////////////////////////////////////////////////////////
let precioPorHoraLibreDeGastos = precioPorHora + gastosPorHora + costosPorHora;

// Optimización del if con Operador ternario
precioPorHora < gastosPorHora + costosPorHora
  ? alert(
      "Tus pretensiones de Ingreso son mas bajas que tus gastos. Esperemos que no trabajes de programador."
    )
  : alert(
      "Según los datos que ingresaste el cálculo en Horas de trabajo es:\n" +
        "\n" +
        "Dinero pretendido por Hora de Trabajo libre de gastos: " +
        // metodo toFixed() para devolver el precio por hora con dos decimales.
        precioPorHora.toFixed(2) +
        " " +
        moneda +
        ".\n" +
        "Gastos por Hora de Trabajo: " +
        gastosPorHora.toFixed(2) +
        " " +
        moneda +
        ".\n" +
        "Costo de Vida por Hora de Trabajo: " +
        costosPorHora.toFixed(2) +
        " " +
        moneda +
        ".\n" +
        "\n" +
        "Para ganar  " +
        inputIngresos +
        " " +
        moneda +
        " mensuales trabajando " +
        inputHoras +
        " horas por día durante " +
        inputDias +
        " días por mes, debes cobrar " +
        precioPorHoraLibreDeGastos.toFixed(2) +
        " " +
        moneda +
        " por Hora de Trabajo."
    );

//función de orden superior para comparar si el ingreso pretendido supera el sueldo mensual
// promedio de un programador junior

const sueldoPromedioDeUnProgramadorJunior = 500;

const chequearSueldoPromedio = (ingresoPretendido, sueldo) => {
  return ingresoPretendido >= sueldo
    ? "Tus ingresos pretendidos son superiores a " +
        sueldoPromedioDeUnProgramadorJunior +
        " " +
        moneda +
        " que es el sueldo promedio de un programador Junior.\nVas por buen camino. Mucha suerte!!"
    : "Tus ingresos pretendidos son menores a " +
        sueldoPromedioDeUnProgramadorJunior +
        " " +
        moneda +
        " que es el sueldo promedio de un programador Junior. Valora tu trabajo. Si quieres volver a intentarlo presiona F5.";
};
const testJunior = chequearSueldoPromedio(
  inputIngresos,
  sueldoPromedioDeUnProgramadorJunior
);
alert(testJunior);

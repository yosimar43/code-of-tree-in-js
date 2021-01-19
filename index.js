function createATree(psymbol, height1, symbolt) {
  console.log(
    "%c~~FELIZ NAVIDA~~",
    "background:linear-gradient(aqua, #fff); color:red; padding: 5px 10px; border-radius: 10px;"
  );

  let controlador = height1;

  if (controlador >= 26) {
    controlador = 25;
    console.warn(
      "EL parametro de altura no puede ser mayor a 25 si ves este mensaje el parametro de altura ha sido asignado con el valor de 25"
    );
  }
  if (controlador < 4 || controlador == null) {
    controlador = 5;

    console.warn(
      "si el parametro de altura es igual a 0 o a null  la variable que controla el valor de la altura se establecera en 5"
    );
  }
  if (Math.sign(controlador) === -1) {
    controlador = 5;

    console.warn(
      "El numero ingresado no puede ser negativo en su lugar la variable que controla la altura sera defina a  5"
    );
  }

  if (typeof controlador !== "number") {
    controlador = 5;

    console.warn(
      "El valor ingresado a sido un dato de tipo diferente a number  en su lugar la variable que controla la altura sera defina a  5"
    );
  }

  let symbol = psymbol;
  let symbol2 = psymbol;

  if (symbol.length > 1) {
    while (symbol.length > 1) {
      symbol = symbol.substring(1);
    }

    symbol2 = symbol;

    console.warn("el symbol no puede tener mas de 1 caracter");
  }

  symbol = symbol.toString();
  symbol2 = symbol2.toString();

  let letterSpacing = " ";
  let letterSpacingH = " ";

  if (letterSpacing.length !== controlador) {
    while (letterSpacing.length < controlador) {
      letterSpacing += letterSpacingH;
    }
  }

  if (symbol.length !== controlador) {
    while (symbol.length < controlador) {
      if (letterSpacing.length <= controlador) {
        letterSpacing = letterSpacing.substring(1);
      }
      console.log(`${letterSpacing}${symbol}${symbol}`);

      symbol = symbol + symbol2;
    }
  }

  let tronco = symbolt;
  let troncoh = symbolt;

  let espacios = " ";
  let espaciosh = " ";
  if (tronco.lenght !== Math.floor(controlador / 2)) {
    while (tronco.length < Math.floor(controlador / 2)) {
      tronco += troncoh;
    }
    while (espacios.length < Math.floor(controlador / 2 + controlador / 3)) {
      espacios += espaciosh;
    }

    for (let i = 0; i < Math.floor(controlador / 4); i++) {
      console.log(`${espacios}${tronco}`);
    }
  }

  /* console.log(Math.floor(controlador/2));
   */
}

createATree("*", 15, "I");

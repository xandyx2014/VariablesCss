/*
CSSOM

* getComputedStyle(element)

Para recuperar la variable

* getComputedStyle(element).getProrpertyValue("--color-text")

Para sobreescribir la variable
Donde $0 es el valor selecccionado
* $0.style.setProperty("--variable","value");


Para recuperar las variables de root

document.documentElement
*/
const rootStyle = getComputedStyle(document.documentElement);

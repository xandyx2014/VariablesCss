# Grandes ventajas en variables css y grandes varibles en variables css

* Sass se puede Seleccionar sin selector
* css necesita un selector

```css
/*Sass*/
$color:red;
/*css
--color:red; NO_Valido_css
*/
body{
    background:$color;
}

```

* Variables Sass tiene scope de bloque
* Variables en css tiene scope De Dom
* Operaciones aritmeticas vs cal()

```css
/*sass*/
$size:2em;
$color:red;
div{
    height:$size*2;/*output 4em*/
    color:darken($color,20);/*ay funciones en css pero no soy soportadas*/
}
/*css*/
:root{
    --size:2em;
}
div{
    height:calc(var(--size)*2);
}
```

* Sass se puede usar interpoladas
* CSS no puede ser interploadas y solo puede ser utilisadas como valor

```css
$select:button;
#{$select}{ /*button*/
    color:red;
}
```

* CSS las media queries no funcionan el navegadores no le entiende

```css
$large: 1024px;
@media screen and (min-width: $large){
    body{
        background:yellow;
    }
}

```

* Sass las variables no se puede redefinir
* CSS si se puede redifinar

```css

/*css*/
:root{
    --color:red;
}
p{
    color:var(--color);
}
.psecond{
    --color:green;
}

```

* Las variables sass no existen despues de la compilacion
* las variables css existen en el Dom

```css
$color:red;

p{
    color:$color;
}

```

> NO podremos manipular las variables Sass porq no existen en el Dom

SE recomienda usar **Ambas** porq sass tiene cosas que no tiene css 
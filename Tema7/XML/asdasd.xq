
(:BOOKSTORE. SE DECLARA LA RUTA PERSONALIZADA USADA A CONTINUACION:)
(:RUTA =  :)
let $ruta := doc("Bookstore.xml")/bookstore
(:Ejercicio 1 

:)

let $libro := number($ruta/book/@category = "COOKING")
return max($libro)
(:Ejercicio 2 

let $libro := $ruta[book/@soldout = "true"]

return min($libro/price)
:)


(:Ejercicio 3
No se me ocurre como hacerlo :C
for $libros in $ruta
where $libros/book/@soldout = 'true'
let $suma := sum($libros/precio/number())
return $suma
:)

(:Ejercicio 4
Devuielve todo 
let $maximo := max($ruta/book/price)
for $libro in $ruta
where $libro/book/price = $maximo
return 
<libros>
  <titulo>{$libro/book/title/text()}</titulo>
  <precio>{$libro/book/price/number()}</precio>
</libros>
:)

(:Ejercicio 5
let $promedio := avg($ruta/book/price/number()) where $ruta/book/@category = 'WEB'
return $promedio
:)

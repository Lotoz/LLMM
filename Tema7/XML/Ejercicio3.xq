(:BAILES. SE DECLARA LA RUTA PERSONALIZADA USADA A CONTINUACION:)
(:RUTA = let $ruta := doc("bailes.xml")/bailes/baile :)

(:Bailes
Ejercicio 1
let $precios := doc("bailes.xml")/bailes/baile/number(precio)
let $maximo := max($precios)
return $maximo
:)

(:Ejercicio 2
let $precios := doc("bailes.xml")/bailes/baile/number(precio)
let $suma := sum($precios)
return $suma
:)

(:Ejercicio 3
for $baile in $ruta
let $cantidad :=  count($baile)  where $baile/precio > 30
return $cantidad
:)


(:ÏMPRESORAS. SE DECLARA LA RUTA PERSONALIZADA USADA A CONTINUACION:)
(:Ruta = let $ruta := doc("impresoras.xml")/impresoras/impresora:)

(:Ejercicio1 
for $imp in $ruta
let $cuentaTam := count($imp/tamanios/tamanio)
where $cuentaTam > 1
return 
<impresoras>
  <marca>{$imp/marca/text()}</marca>
  <modelo>{$imp/modelo/text()}</modelo>
</impresoras>
:)

(:Ejercicio 2
for $imp in $ruta
let $cuentaTam := count($imp/tamanios/tamanio)
where $cuentaTam = 1 and $imp/tamanios/tamanio = 'A4'
return 
<impresoras>
  <marca>{$imp/marca/text()}</marca>
  <modelo>{$imp/modelo/text()}</modelo>
</impresoras>
:)

(:VIDEOCLUB. SE DECLARA LA RUTA PERSONALIZADA USADA A CONTINUACION:)
(:Ruta = let $ruta := doc("videoclub.xml")/Videoclub/Pelicula:)


(:Ejercicio 1 
let $promedio := avg($ruta/@precio) where 
:)

(:Ejercicio 2
let $promedio := avg($ruta/@precio)
:)


(:for $peli in $ruta
where $peli/@precio < $promedio

return 
<li>{$peli/Titulo/text()}</li>
       <li>{data($peli/@precio)}</li>:)
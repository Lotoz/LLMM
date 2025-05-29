(:Actividad 1
for $impresora in doc("impresoras.xml")/impresoras/impresora
where $impresora/@tipo = 'láser'
return $impresora/marca/text()
:)

(:Actividad 2
for $impresora in doc("impresoras.xml")/impresoras/impresora
where $impresora/@compra > 2018
return $impresora/marca/text()
:)

(:Actividad 3
for $impresora in doc("impresoras.xml")/impresoras/impresora
where $impresora/@tipo = 'matricial'
return $impresora/marca/text()
:)


(:Actividad 4
for $impresora in doc("impresoras.xml")/impresoras/impresora
where $impresora/tamanios/tamanio = 'A3'
return $impresora/marca/text()
:)

(:Actividad 5
for $impresora in doc("impresoras.xml")	/impresoras/impresora
where $impresora/peso > 4
return $impresora/marca/text()
:)

(:Actividad 6:)
<ul>
  {
     for $impresora in doc("impresoras.xml")	/impresoras/impresora
where  exists($impresora/enred)
return <li>{$impresora/modelo/text()}</li>
}
</ul>


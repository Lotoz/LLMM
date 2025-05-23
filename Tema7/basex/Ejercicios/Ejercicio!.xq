(:Ejercicio 1/
Actividad 1
<artistas>
{
for $artista in doc("artistas.xml")/	artistas/artista
return 
<artista>
 <nombre>{$artista/nombreCompleto/text()}</nombre> 
 <pais>{$artista/pais/text()}</pais> 
</artista>
}</artistas>
:)

(:Actividad 2
for $artista in doc("artistas.xml")/	artistas/artista
where $artista/number(nacimiento)>1500
return $artista/nombreCompleto/text()
:)

(:Actividad 3
for $artista in doc("artistas.xml")/	artistas/artista
where not(exists($artista/fallecimiento))
return $artista/nombreCompleto/text()
:)
(:Actividad 4
<html>
<body>
  <ul>
  {
     for $artista in doc("artistas.xml")/	artistas/artista
where $artista/pais = 'España'
return <li>{$artista/nombreCompleto/text()}</li>
}
  </ul>
</body>
</html>
:)

(:Actividad 5

:)
<trabajadores>
{
    for $artista in doc("artistas.xml")/artistas/artista
return 

  <artista>
    <codigo>{data($artista/@cod)}</codigo>
    <nombre>{$artista/nombreCompleto/text()}</nombre>
  </artista>
}
</trabajadores>


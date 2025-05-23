(:Para recorrer el for y sacar el texto
for $baile in doc("bailes.xml")/bailes/baile
return $baile/profesor/text():)
(:Para poner la etiqueta padre:)
<bailes>
{
for $baile in doc("bailes.xml")/bailes/baile
where $baile/number(precio)>40
order by $baile/profesor
return 
<baile>
  <precio>{$baile/number(precio)}</precio> 
  <profesor>{$baile/profesor/text()}</profesor> 
  <nombre>{$baile/nombre/text()}</nombre> 
</baile>
}</bailes>
(:<baile>
  <precio>{$baile/precio/text()}</precio> 
  <profesor>{$baile/profesor/text()}</profesor> 
  <nombre>{$baile/nombre/text()}</nombre> 
</baile>
('Asi se imprime cadena'):)
(: <nombre>{$baile/nombre/text()}</nombre> 
<profesor>{$baile/profesor/text()}</profesor> 
<precio>{$baile/precio/text()}</precio>

for $baile in doc("bailes.xml")/bailes/baile
return ('Imprime segun etiquetas cadena'):)

(:Ejercicios:)



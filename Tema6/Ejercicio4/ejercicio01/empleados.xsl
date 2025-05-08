<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="empresa">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel='stylesheet' type='text/css' media='screen' href='assets/main.css'></link>
            <title>Empleados</title>
        </head>
        <body>
            <h2 class="titulo">Lista Empleados</h2>
            <table class="tablaEstetica">
                <tr>
                    <th>Nombre</th>
                    <th>Puesto</th>
                    <th>Departamento</th>
                    <th>Salario</th>
                    <th>Antiguedad</th>
                </tr>
                <xsl:for-each select="empleado">
                <xsl:sort select="nombre" order="asedending"/>
                <xsl:choose>
                    <xsl:when  test=" antiguedad &gt; 5 and antiguedad &lt;= 10">
                    <tr>
                        <td class="fondoVerde"><xsl:value-of select="nombre"/></td>
                        <td class="fondoVerde"><xsl:value-of select="puesto"/></td>
                        <td class="fondoVerde"><xsl:value-of select="departamento"/></td>
                        <td class="fondoVerde"><xsl:value-of select="salario"/></td>
                        <td class="fondoVerde"><xsl:value-of select="antiguedad"/></td>
                    </tr>
                </xsl:when>
                <xsl:otherwise>
                    <tr>
                        <td><xsl:value-of select="nombre"/></td>
                        <td><xsl:value-of select="puesto"/></td>
                        <td><xsl:value-of select="departamento"/></td>
                        <td><xsl:value-of select="salario"/></td>
                        <td><xsl:value-of select="antiguedad"/></td>
                    </tr>
                </xsl:otherwise>
                </xsl:choose>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
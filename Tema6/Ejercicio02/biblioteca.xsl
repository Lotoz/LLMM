<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <style>  
                body {
                    font-size: <xsl:value-of select="biblioteca/css/body/letra"/> 
                    <xsl:value-of select="biblioteca/css/body/letra/@unidad"/>;
                } 
                table, td {
                    border-style: <xsl:value-of select="biblioteca/css/tabla/tipoBorder"/>; 
                    border-width: <xsl:value-of select="biblioteca/css/tabla/tamanioBorder"/>
                        <xsl:value-of select="biblioteca/css/tabla/tamanioBorder/@unidad"/>;
                    border-color: <xsl:value-of select="biblioteca/css/tabla/colorBorder"/>;
                    border-collapse: collapse;
                }
                .anio{
                    color: red;
                    font-weight: bold;
                }
                .amarillo{
                    background-color: yellow;
                }
                </style> 
            <title>Biblioteca</title>
        </head>
        <body>
            <table>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Año</th>
                    <th>Categoria</th>
                    <th>Estado</th>
                </tr>
                <xsl:for-each select="biblioteca/libro">
                    <tr>
                        <td><xsl:value-of select="titulo"/></td>
                        <td><xsl:value-of select="autor"/></td>
                        <xsl:choose>
                            <xsl:when test="año &lt; 2000">
                                <td class="anio"><xsl:value-of select="año"/></td>
                            </xsl:when>
                            <xsl:otherwise>
                                <td><xsl:value-of select="año"/></td>
                            </xsl:otherwise>
                        </xsl:choose>
                        <td><xsl:value-of select="categoria"/></td>
                        <xsl:choose>
                            <xsl:when test="@prestado = 'sí'">
                                <td class="amarillo">Disponible</td>
                            </xsl:when>
                            <xsl:otherwise>
                                <td>Prestado</td>
                            </xsl:otherwise>
                        </xsl:choose>
                    </tr>
                </xsl:for-each>
            </table>
            <ol>
                <xsl:for-each select="biblioteca/libro">
                    <xsl:sort select="autor" order="descending"/>
                    <xsl:if test="año &gt; 1950">
                        <li><xsl:value-of select="autor"/></li>
                    </xsl:if>
                </xsl:for-each>
            </ol>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
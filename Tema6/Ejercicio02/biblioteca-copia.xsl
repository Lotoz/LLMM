<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>Biblioteca</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style> body {font-size: <xsl:value-of select="biblioteca/css/body/letra" />
                    <xsl:value-of
                        select="biblioteca/css/body/letra/@unidad" />;} 
                        table, td {border-collapse: collapse;
                            border-color : <xsl:value-of
                            select="biblioteca/css/tabla/colorBorder" />;
                            border-width:  <xsl:value-of
                            select="biblioteca/css/tabla/tamanioBorder"/> 
                         <xsl:value-of
                            select="biblioteca/css/tabla/tamanioBorder/@unidad" /> ;
                            border-style: <xsl:value-of
                        select="biblioteca/css/tabla/tipoBorder" />;         
                     }
                        .antiguo { color: red;
                                 font-weight: bold;}
                        .disponibilidad {background-color: yellow;}
                </style>
            </head>
            <body>
                <h2>Biblioteca</h2>
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
                            <td>
                                <xsl:value-of select="titulo"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="autor"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="año &lt;= 2000">
                                        <span class="antiguo"><xsl:value-of select="año"></xsl:value-of></span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="año"></xsl:value-of>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td>
                                <xsl:value-of select="categoria"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="@prestado = 'no'">
                                        Disponible
                                    </xsl:when>
                                    <xsl:otherwise>
                                       <span class="disponibilidad">Prestado</span> 
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h2>Listado de autores posteriores a 1950</h2>
                <ol>
                    <xsl:for-each select="biblioteca/libro">
                        <xsl:sort select="autor" data-type="line" order="descending"/>
                    <xsl:if test="año &gt;= 1950">
                    <li>
                        <xsl:value-of select="autor"></xsl:value-of>
                    </li>
                  </xsl:if>
                </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes" />
    <xsl:template match="peliculas">
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel='stylesheet' type='text/css' media='screen' href='assets/main.css'></link>
                <title>Peliculas</title>
            </head>
            <body>
                <h2 class="titulo">Lista de Peliculas</h2>
                <div class="caja">
                <xsl:for-each select="pelicula">
                    <xsl:sort select="anio" order="descending" />
                <xsl:choose>
                        <xsl:when test="duracion &gt; 150">
                            <div class="bordeAzul">    
                                <ul>
                                    <h2 class="subTitulo"><xsl:value-of select="titulo"/></h2>
                                    <li>
                                        <span class="letraNegra">Genero: </span>
                                        <xsl:value-of select="genero" />
                                    </li>
                                    <li>
                                        <span class="letraNegra">Año: </span>
                                        <xsl:value-of select="anio" />
                                    </li>
                                    <li>
                                        <span class="letraNegra">Duración: </span>
                                        <xsl:value-of select="duracion" />
                                    </li>
                                </ul>
                            </div>
                        </xsl:when>
                        <xsl:otherwise>
                            <div>  
                                <ul>
                                    <h2 class="subTitulo"><xsl:value-of select="titulo"/></h2>
                                    <li>
                                        <span class="letraNegra">Genero: </span>
                                        <xsl:value-of select="genero" />
                                    </li>
                                    <li>
                                        <span class="letraNegra">Año: </span>
                                        <xsl:value-of select="anio" />
                                    </li>
                                    <li>
                                        <span class="letraNegra">Duración: </span>
                                        <xsl:value-of select="duracion" />
                                    </li>
                                </ul>
                            </div>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:for-each>
            </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
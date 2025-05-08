<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="estudiantes">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel='stylesheet' type='text/css' media='screen' href='assets/main.css'></link>
            <title>Estudiantes</title>
        </head>
        <body>
            <h2 class="titulo">Lista de Estudiantes</h2>
                <xsl:for-each select="estudiante">
                <xsl:sort select="edad" order="descending"/>
                <xsl:choose>
                    <xsl:when  test="calificacion &gt; 9">
                        <div class="fondoVerde">
                            <ol>
                                <li><span class="letraNegra">Nombre: </span><xsl:value-of select="nombre"/></li>
                                <li><span class="letraNegra">Edad: </span><xsl:value-of select="edad"/></li>
                                <li><span class="letraNegra"> Calificacion: </span><xsl:value-of select="calificacion"/></li>
                            </ol>
                        </div>
                    </xsl:when>
                    <xsl:otherwise>
                        <div>
                            <ol>
                                <li><span class="letraNegra">Nombre: </span><xsl:value-of select="nombre"/></li>
                                <li><span class="letraNegra">Edad: </span><xsl:value-of select="edad"/></li>
                                <li><span class="letraNegra">Calificacion: </span><xsl:value-of select="calificacion"/></li>
                            </ol>
                        </div>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
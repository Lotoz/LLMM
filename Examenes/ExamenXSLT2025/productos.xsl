<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- Pillo la etiquera raiz productos-->
    <xsl:template match="productos">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Productos Examen</title>
                <meta name ="viewport" content="width=device-width, initial-scale=1.0"/>   
                <link rel='stylesheet' type='text/css' media='screen' href='assets/main.css'></link>
            </head>
            <body>
                <!-- Titulo de la pagina recogido de xml-->
                <xsl:for-each select="empresa">
                    <h1>Lista de productos: <xsl:value-of select="nombre"></xsl:value-of></h1>
                </xsl:for-each>
                <!-- Creo la tabla-->
                <table class="tablaEstetica">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Peso</th>
                        <th>Descripcion</th>
                        <th>Ciudades</th>
                    </tr>
                    <xsl:for-each select="producto">
                        <xsl:sort select="precio" data-type="number" order="ascending"/>
                        <tr>
                            <!--Si el peso es menor que 1kg se pone de color verde-->
                            ...existing code...
                            <!--Si el peso es menor que 1kg se pone de color verde-->
                            <xsl:if test="peso &lt; 1">
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda = 'usd'">
                                        <td class="colorVerde">
                                            <span class="colorAzul"><xsl:value-of select="nombre"/></span>
                                        </td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <td class="colorVerde">
                                            <span class="colorRojo"><xsl:value-of select="nombre"/></span>
                                        </td>
                                    </xsl:otherwise>
                                </xsl:choose>
                                <td class="colorVerde">
                                    <xsl:value-of select="precio"/>
                                    <xsl:choose>
                                        <xsl:when test="precio/@moneda = 'usd'">$</xsl:when>
                                        <xsl:otherwise>€</xsl:otherwise>
                                    </xsl:choose>
                                </td>
                                <td class="colorVerde">
                                    <xsl:value-of select="peso"/>(<xsl:value-of select="peso/@unidad"/>)
                                </td>
                                <td class="colorVerde">
                                    <xsl:value-of select="descripcion"/>
                                </td>
                                <td class="colorVerde">
                                    <ul>
                                        <xsl:for-each select="ciudades/ciudad">
                                            <xsl:sort select="@paquetes" data-type="number" order="descending"/>
                                            <li>
                                                <xsl:value-of select="."/> (<xsl:value-of select="@paquetes"/>)
                                            </li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                            </xsl:if>
                            
                            <!--Si el peso está entre 1 y 5 se pone de color rojo-->
                            <xsl:if test="peso &gt;= 1 and peso &lt;= 5">
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda = 'usd'">
                                        <td class="colorRojoTd">
                                            <span class="colorAzul"><xsl:value-of select="nombre"/></span>
                                        </td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <td class="colorRojoTd">
                                            <span class="colorRojo"><xsl:value-of select="nombre"/></span>
                                        </td>
                                    </xsl:otherwise>
                                </xsl:choose>
                                <td class="colorRojoTd">
                                    <xsl:value-of select="precio"/>
                                    <xsl:choose>
                                        <xsl:when test="precio/@moneda = 'usd'">$</xsl:when>
                                        <xsl:otherwise>€</xsl:otherwise>
                                    </xsl:choose>
                                </td>
                                <td class="colorRojoTd">
                                    <xsl:value-of select="peso"/>(<xsl:value-of select="peso/@unidad"/>)
                                </td>
                                <td class="colorRojoTd">
                                    <xsl:value-of select="descripcion"/>
                                </td>
                                <td class="colorRojoTd">
                                    <ul>
                                        <xsl:for-each select="ciudades/ciudad">
                                            <xsl:sort select="@paquetes" data-type="number" order="descending"/>
                                            <li>
                                                <xsl:value-of select="."/> (<xsl:value-of select="@paquetes"/>)
                                            </li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                            </xsl:if>
                            
                            <!--Si el peso es mayor que 5 se pone de color naranja-->
                            <xsl:if test="peso &gt; 5">
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda = 'usd'">
                                        <td class="colorNaranja">
                                            <span class="colorAzul"><xsl:value-of select="nombre"/></span>
                                        </td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <td class="colorNaranja">
                                            <span class="colorRojo"><xsl:value-of select="nombre"/></span>
                                        </td>
                                    </xsl:otherwise>
                                </xsl:choose>
                                <td class="colorNaranja">
                                    <xsl:value-of select="precio"/>
                                    <xsl:choose>
                                        <xsl:when test="precio/@moneda = 'usd'">$</xsl:when>
                                        <xsl:otherwise>€</xsl:otherwise>
                                    </xsl:choose>
                                </td>
                                <td class="colorNaranja">
                                    <xsl:value-of select="peso"/>(<xsl:value-of select="peso/@unidad"/>)
                                </td>
                                <td class="colorNaranja">
                                    <xsl:value-of select="descripcion"/>
                                </td>
                                <td class="colorNaranja">
                                    <ul>
                                        <xsl:for-each select="ciudades/ciudad">
                                            <xsl:sort select="@paquetes" data-type="number" order="descending"/>
                                            <li>
                                                <xsl:value-of select="."/> (<xsl:value-of select="@paquetes"/>)
                                            </li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                            </xsl:if>
                            ...existing code...
                        </tr>   
                    </xsl:for-each>
                </table>
                <!-- Recoge la dirreccion del xml-->
                <xsl:for-each select="empresa">
                    <p>Dirrecion de la empresa: <span class="letraNegra"><xsl:value-of select="direccion"/></span></p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
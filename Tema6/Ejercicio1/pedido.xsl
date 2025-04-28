<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Pedido</title>
                <meta name ="viewport" content="width=device-width, initial-scale=1.0"/>   
            </head>
            <body>
                <xsl:for-each select="pedido/portatiles/portatil">
                <h2>Portatiles</h2>
                    <table>
                        <tr>
                            <th>Peso</th>
                            <th>RAM</th>
                            <th>Disco</th>
                            <th>Precio</th>
                        </tr>
                            <xsl:if test="precio &lt; 900 and disco/@tipo = 'ssd'">
                                <tr>
                                    <td>
                                        <xsl:value-of select="peso"></xsl:value-of>
                                    </td>
                                    <td>
                                        <xsl:value-of select="ram"></xsl:value-of>
                                    </td>
                                    <td>
                                        <xsl:value-of select="disco"></xsl:value-of>
                                    </td>
                                    <td>
                                        <xsl:value-of select="precio"></xsl:value-of>
                                    </td>
                                </tr>
                            </xsl:if>
                    </table>
                </xsl:for-each>
                <h2>Tablets</h2>
                <table>
                    <tr>
                        <th>Plataforma</th>
                        <th>RAM</th>
                        <th>Bateria</th>
                    </tr>
                    <xsl:for-each select="pedido/tablets/tablet">
                        <tr>
                            <td>
                                <xsl:value-of select="plataforma"></xsl:value-of>
                            </td>
                            <!--En la misma condicion se puede hacer el filtrado-->
                            <xsl:for-each select="caracteristicas">
                            <xsl:if test="memoria &gt;= 2 and tamanio &gt;= 7">
                                <td>
                                    <xsl:value-of select="memoria"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="bateria"></xsl:value-of>
                                </td>   
                            </xsl:if>
                    </xsl:for-each>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
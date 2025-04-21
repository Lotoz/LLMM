<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
        <!-- Esqueleto base
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Producto</title>
                <meta name ="viewport" content="width=device-width, initial-scale=1.0"/>   
            </head>
            <body>

            </body>
        </html>
        -->
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Producto</title>
                <meta name ="viewport" content="width=device-width, initial-scale=1.0"/>   
            </head>
            <body>
                <h2>Productos de Electronica</h2>
                <ul>
                    <xsl:for-each select="productos/producto">
                        <li>
                            <xsl:value-of select="nombre"/> -
                            <xsl:value-of select="precio"/>$
                            <xsl:value-of select="@tipo"/>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
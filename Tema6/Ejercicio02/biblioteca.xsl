<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Biblioteca</title>
                <meta name ="viewport" content="width=device-width, initial-scale=1.0"/>
                <style>
                    body {font-size: <xsl:value-of select="biblioteca/css/body/letra"/>
                    <xsl:value-of select="biblioteca/css/body/letra/@unidad"/>;}
                    
                </style>
            </head>
            <body>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
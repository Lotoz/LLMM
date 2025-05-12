<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="UTF-8"/>    
    <xsl:template match="baseDeDatos">
        <xsl:for-each select="tabla">
            CREATE TABLE <xsl:value-of select="@nombre"/> (
                <xsl:for-each select="campo">
                    <xsl:value-of select="@nombre"/>  
                    <xsl:text> </xsl:text>
                    <xsl:value-of select="@"/>  
                </xsl:for-each>
            );
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
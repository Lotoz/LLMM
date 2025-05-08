<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" indent="no"></xsl:output>
    <xsl:template match="listado">
        {
            "cuentas" : [
            <xsl:for-each select="cuenta">
                {
                    "dnititular" : <xsl:value-of select="titular/@dni"/>,
                    "creacion" : <xsl:value-of select="fechacreacion"/>,
                    "titular" : <xsl:value-of select="titular"/>,
                    "saldoactual" : <xsl:value-of select="saldoactual"/> <xsl:value-of select="saldoactual/@moneda"/>    
                }<xsl:if test="position() != last()">,</xsl:if>
            </xsl:for-each>    
            ],
            "fondos" : [
                <xsl:for-each select="fondo">
                    {
                        "cuentaasociada" : <xsl:value-of select="cuentaasociada"/>,
                        <xsl:for-each select="datos">
                            "cantidaddepositada" : <xsl:value-of select="cantidaddepositada"/>,
                            "moneda" : <xsl:value-of select="moneda"/>
                        </xsl:for-each>
                    }<xsl:if test="position() != last()">,</xsl:if>
                </xsl:for-each>    
                ]
        }
    </xsl:template>
</xsl:stylesheet>
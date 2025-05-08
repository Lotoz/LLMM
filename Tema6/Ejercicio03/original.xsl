<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"></xsl:output>
    <xsl:template match="listado">
        <datos>
            <xsl:for-each select="cuenta">
                <cuenta dnititular="{titular/@dni}">
                    <creacion>
                        <xsl:value-of select="fechacreacion"/>
                    </creacion>
                    <titular>
                        <xsl:value-of select="titular"/>
                    </titular>
                    <saldoactual moneda="{saldoactual/@moneda}">
                        <xsl:value-of select="saldoactual"/>
                    </saldoactual>
                </cuenta>
            </xsl:for-each>
            <xsl:for-each select="fondo">
                <fondo cuentaasociada="{cuentaasociada}">
                    <xsl:for-each select="datos">
                    <cantidaddepositada>
                        <xsl:value-of select="cantidaddepositada"></xsl:value-of>
                    </cantidaddepositada>
                    <moneda>
                        <xsl:value-of select="moneda"></xsl:value-of>
                    </moneda>
                </xsl:for-each>
                </fondo>
            </xsl:for-each>
        </datos>
    </xsl:template>
</xsl:stylesheet>
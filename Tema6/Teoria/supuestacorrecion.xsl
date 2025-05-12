<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="UTF-8"/>    

<xsl:template match="baseDeDatos">
    DROP DATABASE LLMM;
    CREATE DATABASE LLMM;
    USE LLMM;

    <xsl:for-each select="tabla">
        CREATE TABLE <xsl:value-of select="@nombre"/> (
            <xsl:for-each select="campo">
                <xsl:value-of select="@nombre"/>  
                <xsl:text> </xsl:text>
                <xsl:value-of select="@tipo"/>  
                <xsl:if test="@clavePrimaria = 'true'">
                    <xsl:text> PRIMARY KEY</xsl:text>
                </xsl:if>
                <xsl:if test="position() != last()">,</xsl:if>
            </xsl:for-each>
        );
        
        <xsl:choose>
            <xsl:when test="@nombre = 'Autores'">
                <xsl:for-each select="datos/fila">
                    INSERT INTO Autores VALUES (
                    <xsl:value-of select="id"/>, '<xsl:value-of select="nombre"/>');
                </xsl:for-each>    
            </xsl:when>
            <xsl:otherwise>
                <xsl:for-each select="datos/fila">
                    INSERT INTO Libros VALUES (
                    <xsl:value-of select="id"/>, '<xsl:value-of select="titulo"/>', <xsl:value-of select="idAutor"/>);
                </xsl:for-each>     
            </xsl:otherwise>
        </xsl:choose>
    </xsl:for-each>

    <!-- Validación y generación segura de clave foránea -->
    <xsl:variable name="idAutorTipo" select="tabla[@nombre='Libros']/campo[@nombre='idAutor']/@tipo"/>
    <xsl:variable name="idTipo" select="tabla[@nombre='Autores']/campo[@nombre='id']/@tipo"/>
    
    <xsl:if test="$idAutorTipo = $idTipo and string-length($idAutorTipo) > 0">
        ALTER TABLE Libros ADD CONSTRAINT FK_AUTOR_ID FOREIGN KEY(idAutor) REFERENCES Autores(id);
    </xsl:if>
</xsl:template>

</xsl:stylesheet>
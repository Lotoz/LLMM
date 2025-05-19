<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="UTF-8"/>    
    <xsl:template match="baseDeDatos">
        <!-- Profe, aqui agrego una linea a fuerza bruta para generar una base de datos. Que cuando lo probe en Maria DB me di cuenta que faltaba eso,
         de todas formas, se pueden generar las tablas sin ninguna dificultad en una base de datos ya existente-->
        DROP DATABASE LLMM;
        CREATE DATABASE LLMM;
        USE LLMM;

        <xsl:for-each select="tabla">
            CREATE TABLE <xsl:value-of select="@nombre"/> (
                <xsl:for-each select="campo">
                    <xsl:value-of select="@nombre"/>  
                    <xsl:text> </xsl:text>
                    <xsl:value-of select="@tipo"/>  
                    <xsl:text> </xsl:text>
                    <xsl:if test="@clavePrimaria = 'true'">
                        <xsl:text> PRIMARY KEY</xsl:text>
                    </xsl:if>
                    <xsl:if test="@claveForanea = 'true'">
                        <xsl:text>REFERENCES</xsl:text>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="@referencia"/>  
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
                
         
                <!--
                     Supongo que se deberia hacer con xsl pero no se me ocurre como hacerlo si no es asi. lo he intentado del siguiente modo con xsl pero falla
                     (Genera campos repetidos)
                ALTER TABLE Libros ADD CONSTRAINT FK_AUTOR_ID FOREIGN KEY(
                    <xsl:if test="@nombre = 'idAutor'">        
                        <xsl:value-of select="@nombre"/> 
                    </xsl:if>) REFERENCES Autores (
                    <xsl:if test="@nombre = 'id'">
                        <xsl:value-of select="@nombre"/> 
                    </xsl:if>
                    );
                </xsl:for-each>
                       ALTER TABLE Libros ADD CONSTRAINT FK_AUTOR_ID FOREIGN KEY(idAutor) REFERENCES Autores(id);
    
                -->
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
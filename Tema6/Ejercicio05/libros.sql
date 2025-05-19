
        DROP DATABASE LLMM;
        CREATE DATABASE LLMM;
        USE LLMM;

        
            CREATE TABLE Autores (
                id INT  PRIMARY KEY,nombre VARCHAR(255) 
            );
                
                            INSERT INTO Autores VALUES (
                        1, 'Gabriel García Márquez');
                        
                            INSERT INTO Autores VALUES (
                        2, 'Isabel Allende');
                        
            CREATE TABLE Libros (
                id INT  PRIMARY KEY,titulo VARCHAR(255) ,idAutor INT REFERENCES Autores(id)
            );
                
                            INSERT INTO Libros VALUES (
                        101, 'Cien años de soledad', 1);
                        
                            INSERT INTO Libros VALUES (
                        102, 'El amor en los tiempos del cólera', 1);
                        
                            INSERT INTO Libros VALUES (
                        201, 'La casa de los espíritus', 2);
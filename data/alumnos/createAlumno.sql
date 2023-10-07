INSERT INTO [dbo].[alumno]
(
    [nombre]
    ,[apellidos]
    ,[genero]
    ,[fechaNacimiento]
)
VALUES (
    @nombre,
    @apellidos,
    @genero,
    @fechaNacimiento
)

SELECT SCOPE_IDENTITY() AS id
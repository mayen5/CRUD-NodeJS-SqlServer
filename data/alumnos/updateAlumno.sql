UPDATE [dbo].[alumno]
SET [nombre] = @nombre
    ,[apellidos] = @apellidos
    ,[genero] = @genero
    ,[fechaNacimiento] = @fechaNacimiento
WHERE [id] = @id

SELECT * 
FROM [colegio].[dbo].[alumno] WITH(NOLOCK)
WHERE [id] = @id
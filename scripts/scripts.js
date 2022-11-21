$(document).ready(function()
        { 
            
            $("#generar").click(function()
            {             
                            
                //creacion de usuarios         
                 var nombre = "usuario"                
                 var edad = 22;
        
                
                // Crear nombre 
                //var Fullname = nombre + " " + apellidos;
/*
                // calcular primera letra del nombre
                var letra =asd.substr(0,1);
                var correo = (letra+apellidos+year+"@"+tipo_Correo+".com").toLowerCase();
                
                
*/                           
                $("#inputName").val(nombre);
                $("#inputAge").val(edad);
                
            });
        });
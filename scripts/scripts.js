$(document).ready(function()
        { 
            
            $("#generar").click(function()
            {             
                // num aletario para Usuario
                var min = 1; var max = 10;
                var x = Math.random()*(max - min)+min;
                var xint = Math.round(x);
                
                            
                //creacion de usuarios         
                var name = "user"+ xint               
                 
                //edad
                
                // num aletario para Usuario
                var min = 10; var max = 30;
                var x = Math.random()*(max - min)+min;
                var age = Math.round(x);
                
            
/*
                // calcular primera letra del nombre
                var letra =asd.substr(0,1);
                var correo = (letra+apellidos+year+"@"+tipo_Correo+".com").toLowerCase();
                
                
*/                           
                $("#inputName").val(name);
                $("#inputAge").val(age);
                
            });
        });
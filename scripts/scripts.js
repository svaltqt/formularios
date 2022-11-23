$(document).ready(function()
        { 
            
            $("#generar").click(function()
            {    
                //obtener valor del select
                var tipoUsuario = $("#SubjectsList option:selected").text();
                
                // Funcion generar numero random con dos args
                function getRandom(min, max) {
                    var x = Math.random()*(max - min)+min;               
                    var random = Math.round(x);  
                    return random;
                }
                
                // Calcular fecha de nacimiento
                var dia = getRandom(1, 30);
                var mes = getRandom(1, 12);
                var ano = getRandom(1980, 2020);
                var fechaNacimiento = dia + "/" + mes + "/" + ano 
              
                //creacion de usuarios  
                var random = getRandom(1, 10);      
                var name = "user"+ random;            
      
                // Enviar informacion al Input
                $("#inputName").val(name);
                $("#inputAge").val(fechaNacimiento);
                alert(tipoUsuario);

                //sessionStorage
                // guarda en Session Storage
                 sessionStorage.setItem(name, age);
                 let personName = sessionStorage.getItem(age);
                 let storageAge = sessionStorage.getItem(name);

                // Condicion de mayor de edad
                if (storageAge >= 18){
                    document.getElementById("nusuario").innerHTML = personName;
                    document.getElementById("nedad").innerHTML = storageAge;
                    alert("MAYOR o igual a 18");

                }else if(storageAge < 18){
                    document.getElementById("nusuario").innerHTML = personName;
                    document.getElementById("nedad").innerHTML = storageAge;
                    alert("MENOR de 18");

                }



                 
                 //document.getElementById("nedad").innerHTML = storageAge;
                
            });
        });
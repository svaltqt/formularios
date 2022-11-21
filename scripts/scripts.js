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
                

                // Enviar informacion al Input
                $("#inputName").val(name);
                $("#inputAge").val(age);

                 //sessionStorage
                 // guarda en Session Storage
                 sessionStorage.setItem(name, age);
                 let personName = sessionStorage.getItem(age);
                 let storageAge = sessionStorage.getItem(name);

                // Mayor que 18
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
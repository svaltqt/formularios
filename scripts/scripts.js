$(document).ready(function()
        { 
            
            $("#SubjectsList").change(function(){
               // Obtener valor del select
               var tipoUsuario = $("#SubjectsList option:selected").text();

               if(tipoUsuario =='Usuario1'){ 
                   var add = "<div>"
                   add+="<img src='./images/usuario1.jpg' class='img-fluid profile-image-pic img-thumbnail rounded-circle my-3'width='200px' alt='profile'>"
                   add+="</div>"                
                   $("#profileIMG" ).html(add);
               } else if(tipoUsuario =='Usuario2'){
                   var add = "<div>"
                   add+="<img src='./images/usuario2.jpg' class='img-fluid profile-image-pic img-thumbnail rounded-circle my-3'width='200px' alt='profile'>"
                   add+="</div>"                
                   $("#profileIMG" ).html(add);
                   //$("#profileIMG").append(add);  
               }   
            });                 
            
            $("#generar").click(function()
            {               

                          

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

                // Guardando los datos en SessionStorage
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("bday", fechaNacimiento);
                sessionStorage.setItem("tUser", tipoUsuario);         
            });
            // DOM Global

            // Extraer datos del SessinStorage
            var usuario = sessionStorage.getItem('tUser')
            var userName = sessionStorage.getItem('name')
            var userBday = sessionStorage.getItem('bday')            
            
            // Cargar IMG en la web USUARIOS
            if(usuario =='Usuario1'){                
                var add = "<div>"
                add+="<img src='./images/usuario1.jpg' class='img-fluid profile-image-pic img-thumbnail rounded-circle my-3'width='200px' alt='profile'>"
                add+="</div>"                
                $("#UserprofileIMG").append(add);
            } else if(usuario =='Usuario2'){                            
                var add = "<div>"
                add+="<img src='./images/usuario2.jpg' class='img-fluid profile-image-pic img-thumbnail rounded-circle my-3'width='200px' alt='profile'>"
                add+="</div>"               
                $("#UserprofileIMG").append(add);
            }              

            // Calcular la edad    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
            function calcularEdad(bday){
                // Separamos por '/' Ejemplo: 20/3/2001
                var birthday_arr = bday.split('/');
                // En el arreglo 0 es el día, 1, el mes, 2 el año  | Se resta 1 al mes ya que el index inica en 0 y no en 1
                var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
                // Calculamos la fecha actual
                var today = new Date();
                // hacemos el calculo de la fecha actual menos la fecha del usuario
                var age = Math.floor((today-birthday_date) / (365.25 * 24 * 60 * 60 * 1000));
                // retornamos la fecha en numeros enteros
                return age;                
            }
            // Llamamos al método con el valor del Session ya guardado
            var edadActual = calcularEdad(userBday);

            var actualStyle = document.getElementById('estilos');  //usuarios.html 
                // Asignar estilo segun la edad  
                  if(edadActual < 18){
                    actualStyle.className = 'usuario1';  
                } else if(edadActual >= 18){
                    actualStyle.className = 'usuario2';  
                }
                
            // Crear el codigo HTML en donde se insertará la información
            var add = "<div class row>"
            add+="<td>"+" Usuario:" + userName + "</td>"
            add+="<td>"+"   Edad:" + edadActual + "</td>"            
            add+="</div>"                 
        
            $("#userContent").append(add);

            // Mostrar datos en html
            var add = "<tr>"
            add+="<td>" + userName + "</td>"
            add+="<td>" + userBday + "</td>"
            add+="<td>"+edadActual+"</td>"
            add+="<tr>"                

            $("table").append(add);

        });



        
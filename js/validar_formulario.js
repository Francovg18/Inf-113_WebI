
   function validar(){
      var carnet, paterno, materno, nombre, correo, edad;
      carnet = document.getElementById("carnet").value;
      paterno = document.getElementById("paterno").value;
      materno = document.getElementById("materno").value;
      nombre = document.getElementById("nombre").value;
      correo = document.getElementById("correo").value;
      contraseña = document.getElementById("contraseña").value;
      expresion1 = /[0-9]\s+[A-Z]/;
      expresion2 = /^[a-zA-Z]/;
      expresion3 = /^[1-9]\d$/;
      expresion4 = /\w+@\w+\.+[a-z]/;

      if(carnet == "" || paterno =="" || materno =="" || nombre =="" || correo=="" || contraseña ==""){
         alert("Debe de llenar todos los campos");
         return false;
      }
      else if (!expresion1.test(carnet)){
         alert("El carnet no es valido");
         return false;
      }
      else if (!expresion2.test(paterno)){
         alert("Apellido paterno no valido");
         return false;
      }
      else if (!expresion2.test(materno)){
         alert("Apellido materno no valido");
         return false;
      }
      else if (!expresion2.test(nombre)){
         alert("Nombre no valido");
         return false;
      }
      else if (!expresion4.test(correo)){
         alert("Introduce un correo válido");
         return false;
      }
      else if (!expresion2.test(contraseña)){
         alert("La contraseña debe ser minimo 4 caracteres");
         return false;
      }
   }

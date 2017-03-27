var boton=document.getElementById("mostrar")
	var ficha=[];
	boton.addEventListener("click",function(e){
		e.preventDefault();
		var name=document.getElementById("nombre").value;
		var lastName=document.getElementById("apellido").value;
		 var country=document.getElementById("pais").options[document.getElementById("pais").selectedIndex].text;
		var city=document.getElementById("ciudad").value;
		var year=document.getElementById("edad").value;
		var gender=document.getElementById("genero").options[document.getElementById("genero").selectedIndex].text;
		function Person(nombre,apellido,edad,pais){
			this.nombre=nombre;
			this.apellido=apellido;
			this.edad= edad;
			this.pais=pais;
			this.file=function(){
					return"<br>"+"Nombre: "+ this.nombre+" "+this.apellido+"<br>"+"Edad: "+ this.edad+"<br>"+"Pais: "+ this.pais+"<br>";
				}
		}
		ficha.push(new Person(name, lastName,year,country));
			var print=document.getElementById("aqui");
		print.innerHTML+= ficha[ficha.length-1].file();
		document.getElementById("todo").reset();
	});
		var nome=document.getElementById("nombre");
		var conome=document.getElementById("apellido");
		var paese=document.getElementsByTagName("pais")[0];
		var cita=document.getElementById("ciudad");
		var agno=document.getElementById("edad");
		var genda=document.getElementById("genero");
		var input=document.getElementsByClassName('obligatorio')
		input[0].onblur=function(j) {
			if(this.value.trim().length==0){
				this.value="";
				this.nextElementSibling.innerText="Este campo es obligatorio"

			}

		}
	var soloLetras= function(l){var codigoTecla=l.keyCode;
		if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla<=90&&codigoTecla>=65)||codigoTecla==39||codigoTecla==32){
			 return true
			 }else{
			 return false
			 }
			}
			var soloNumeros= function(l){var codigoTecla=l.keyCode;
				if(codigoTecla>=48 && codigoTecla<=57){
					 return true
					 }else{
					 return false
					 }
					}
	nome.onkeypress=soloLetras;
	conome.onkeypress=soloLetras
	cita.onkeypress=soloLetras;
	agno.onkeypress=soloNumeros;

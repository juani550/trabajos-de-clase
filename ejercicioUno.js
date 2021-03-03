/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */


/*
function probarEjercicio(){

	var perro;
	var gato;
	var otracosa;

	var tipoAnimal;

	var tipoPelaje;
	var tipoPelajeGato;
	var tipopelajePerro;
	var tipoPelajeOtraCosa;


	var edadMascotas;
	var edadGato;
	var edadperro;
	var edadOtracosa;

	var nombreMascota;
	var nombreGato;
	var nombreperro;
	var nombreOtracosa;

	var raza;
	var razaGato;
	var razaPerro;
	var razaOtracosa;

	var peso;
	var pesoGato;
	var pesoPerro;
	var pesoOtracosa;


	var estadoClinico;
	var temperatura;
	var continuar;

		
		tipoAnimal = prompt('ingrese un tipo de animal: "gato" "perro" "otracosa" ');
		while( !(tipoAnimal == "gato" || "perro" || "otracosa" ) ){
			tipoAnimal = prompt("por favor ingrese un tipo correcto");
		}
		

		do{
		switch(tipoAnimal){
			case "gato":
				tipoPelajeGato = prompt('ingrese tipo de pelo: "corto," "largo," "sin pelo." ');	
				edadGato = parseInt(prompt("ingrese edad: "));
				nombreGato = prompt("ingrese nombre: ");
				razaGato = prompt("ingrese raza: ");
				pesoGato = parseFloat(prompt("ingrese un peso: "));
				estadoClinicoGato = prompt("ingrese un estado clinico: ");
				temperaturaGato = parseFloat(prompt("ingrese una temperatura: "));
				break;
			case "perro":
				tipoPelajeGato = prompt('ingrese tipo de pelo: "corto," "largo," "sin pelo." ');	
				edadGato = parseInt(prompt("ingrese edad: "));
				nombreGato = prompt("ingrese nombre: ");
				razaGato = prompt("ingrese raza: ");
				pesoGato = parseFloat(prompt("ingrese un peso: "));
				estadoClinicoGato = prompt("ingrese un estado clinico: ");
				temperaturaGato = parseFloat(prompt("ingrese una temperatura: "));
				break;
			case "otracosa":
				tipoPelajeGato = prompt('ingrese tipo de pelo: "corto," "largo," "sin pelo." ');	
				edadGato = parseInt(prompt("ingrese edad: "));
				nombreGato = prompt("ingrese nombre: ");
				razaGato = prompt("ingrese raza: ");
				pesoGato = parseFloat(prompt("ingrese un peso: "));
				estadoClinicoGato = prompt("ingrese un estado clinico: ");
				temperaturaGato = parseFloat(prompt("ingrese una temperatura: "));
				break;
		}

		continuar = prompt("desea ingresar otro animal");
		}while(continuar == "si");
 


}
*/

function probarEjercicio(){

	var tipoAnimal;

	var tipoPelaje;
	var tipoPelajeGato;
	var tipopelajePerro;
	var tipoPelajeOtraCosa;
	var edadMascotas;
	var edadGato;
	var edadperro;
	var edadOtracosa;
	var nombreMascota;
	var nombreGato;
	var nombreperro;
	var nombreOtracosa;
	var raza;
	var razaGato;
	var razaPerro;
	var razaOtracosa;
	var peso;
	var pesoGato;
	var pesoPerro;
	var pesoOtracosa;
	var estadoClinico;
	var estadoClinicoperro;
	var estadoClinicoOtracosa;
	var temperatura;
	var temperaturaGato;
	var temperaperro;
	var temperaOtracosa;
	var Perromaspesado;
	var flagPerro;
	var contadorMascotas = 0;

	var continuar;

		
		tipoAnimal = prompt('ingrese un tipo de animal: "gato" "perro" "otracosa" ');
		while( !(tipoAnimal == "gato" || "perro" || "otracosa" ) ){
			tipoAnimal = prompt("por favor ingrese un tipo correcto");
		}
		

		do{
		switch(tipoAnimal){
			case "gato":
				tipoPelajeGato = prompt('ingrese tipo de pelo: "corto," "largo," "sin pelo." ');	
				edadGato = parseInt(prompt("ingrese edad: "));
				nombreGato = prompt("ingrese nombre: ");
				razaGato = prompt("ingrese raza: ");
				pesoGato = parseFloat(prompt("ingrese un peso: "));
				estadoClinicoGato = prompt("ingrese un estado clinico: ");
				temperaturaGato = parseFloat(prompt("ingrese una temperatura: "));
				contadorMascotas++;
				break;
			case "perro":
				tipopelajePerro = prompt('ingrese tipo de pelo: "corto," "largo," "sin pelo." ');	
				edadperro = parseInt(prompt("ingrese edad: "));
				nombreperro = prompt("ingrese nombre: ");
				razaPerro = prompt("ingrese raza: ");
				pesoPerro = parseFloat(prompt("ingrese un peso: "));
				estadoClinicoperro = prompt("ingrese un estado clinico: ");
				temperaperro = parseFloat(prompt("ingrese una temperatura: "));

				if(flagPerro == 0 || pesoPerro > Perromaspesado ){
					Perromaspesado = pesoPerro;

					flagPerro = 1;
				}
				contadorMascotas++;
				break;
			case "otracosa":
				tipoPelajeGato = prompt('ingrese tipo de pelo: "corto," "largo," "sin pelo." ');	
				edadGato = parseInt(prompt("ingrese edad: "));
				nombreGato = prompt("ingrese nombre: ");
				razaGato = prompt("ingrese raza: ");
				pesoGato = parseFloat(prompt("ingrese un peso: "));
				estadoClinicoGato = prompt("ingrese un estado clinico: ");
				temperaturaGato = parseFloat(prompt("ingrese una temperatura: "));
				contadorMascotas++;
				break;
		}

		continuar = prompt("desea ingresar mas datos de animales");
		}while(continuar == "si");

		
		A-alert("el perro mas pesado tiene: "+ Perromaspesado );
		B-alert("el porcentaje de enfermos sobre total de mascotas es: " + () )

}
let grupocObj = {
	nombre: "Tina,Jhon,Jhonny,Abderrahmane",
	email: "tina@example.com,Jhon@example.com, Jhonny@example.com, Abderrahmane@example.com",
	edad: "41,35,28"
  };
  
document.write(JSON.stringify(grupocObj, ['email']));

/* let texto = '{"nombre":"Tina,Jhon,Jhonny,Abderrahmane","email":"tina@example.com,Jhon@example.com,Jhonny@example.com,Abderrahmane@example.com"}';

const objeto = JSON.parse(texto);
console.log(objeto);

 */
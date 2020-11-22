function addition(x, y){
	return x + y;
}

const plus5 = addition.bind(x, 5) // uma nova função fixando um argumento da função addition
plus5(10) // chamando a função com apenas um argumento

// output -> 15

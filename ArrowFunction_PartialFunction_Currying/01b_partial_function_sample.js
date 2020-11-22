function addition(x, y){
	return x + y;
}

const plus5 = addition.bind(x, 5)
plus5(10)

// output -> 15

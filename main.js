const listOfProducts = [
	{
		productName: "TV",
		quantity: 10,
		description: "television",
	},
	{
		productName: "AC",
		quantity: 5,
		description: "air conditioner",
	},
	{
		productName: "TV",
		quantity: 10,
		description: "television",
	},
	{
		productName: "AC",
		quantity: 5,
		description: "air conditioner",
	},
	{
		productName: "FAN",
		quantity: 10,
		description: "Ceiling Fan",
	},
];

const getUniqueProductCount = (arr) => {
	const count = {};

	arr.forEach((e) => {
		count[e.productName] = (count[e.productName] || 0) + 1;
	});
	return count;
};

const getUniquePrducts = (arr) => {
	const count = {};
	arr.forEach((e) => {
		if (count[e.productName] == undefined) {
			count[e.productName] = e;
		} else {
			count[e.productName].quantity += e.quantity;
		}
	});

	return Object.values(count);
};

console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));

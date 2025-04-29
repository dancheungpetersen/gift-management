db = db.getSiblingDB('mydb');
db.users.insertMany([
	{
		"name": "Lucius Santiago",
		"phone": "081-471-8039",
		"email": "in@hotmail.couk",
		"age": 25
	},
	{
		"name": "Shannon Flynn",
		"phone": "028-338-9457",
		"email": "magna.sed.eu@google.edu",
		"age": 72
	},
	{
		"name": "Buckminster Nash",
		"phone": "018-362-8670",
		"email": "semper@protonmail.net",
		"age": 25
	},
	{
		"name": "Dylan Klein",
		"phone": "048-587-5728",
		"email": "interdum@outlook.couk",
		"age": 59
	},
	{
		"name": "Christopher Blanchard",
		"phone": "015-824-3142",
		"email": "massa.rutrum@yahoo.com",
		"age": 28
	}
]);
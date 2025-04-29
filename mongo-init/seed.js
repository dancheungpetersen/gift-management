db = db.getSiblingDB('mydb');
db.users.insertMany([
	[
		{
		  "_id": "660d7ba3e6a4165d4c8d4857",
		  "name": "Lucius Santiago",
		  "phone": "081-471-8039",
		  "email": "in@hotmail.couk",
		  "age": 25,
		  "role": "department_user",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4858",
		  "name": "Shannon Flynn",
		  "phone": "028-338-9457",
		  "email": "magna.sed.eu@google.edu",
		  "age": 72,
		  "role": "department_head",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4859",
		  "name": "Buckminster Nash",
		  "phone": "018-362-8670",
		  "email": "semper@protonmail.net",
		  "age": 25,
		  "role": "cpro_department_admin",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4860",
		  "name": "Dylan Klein",
		  "phone": "048-587-5728",
		  "email": "interdum@outlook.couk",
		  "age": 59,
		  "role": "department_user",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4861",
		  "name": "Christopher Blanchard",
		  "phone": "015-824-3142",
		  "email": "massa.rutrum@yahoo.com",
		  "age": 28,
		  "role": "department_head",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4862",
		  "name": "Eleanor Rigby",
		  "phone": "033-112-4598",
		  "email": "eleanor.rigby@example.com",
		  "age": 35,
		  "role": "cpro_department_admin",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4863",
		  "name": "Marcus Aurelius",
		  "phone": "044-765-3321",
		  "email": "marcus.a@philosophy.edu",
		  "age": 42,
		  "role": "department_head",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		},
		{
		  "_id": "660d7ba3e6a4165d4c8d4864",
		  "name": "Sophia Loren",
		  "phone": "055-889-7743",
		  "email": "sophia.l@cinema.it",
		  "age": 38,
		  "role": "department_user",
    	  "password": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
		}
	  ]
]);
db.gifts.insertMany([
	{
	  _id: ObjectId("663010000000000000000001"),
	  name: "Teddy Bear",
	  description: "Soft toy",
	  qty: 10,
	  type: "normal",
	  photo: "https://dummyimage.com/300"
	},
	{
	  _id: ObjectId("663010000000000000000002"),
	  name: "VIP Watch",
	  description: "Luxury watch",
	  qty: 2,
	  type: "vip",
	  photo: "https://dummyimage.com/300"
	}
]);
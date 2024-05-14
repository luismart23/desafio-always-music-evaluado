DROP TABLE IF EXISTS ESTUDIANTES;

CREATE TABLE ESTUDIANTES (
    ID SERIAL PRIMARY KEY,
    NOMBRE VARCHAR(100),
    CURSO VARCHAR(50),
    NIVEL INT NOT NULL
);

SELECT * FROM ESTUDIANTES;


-- seeders
INSERT INTO ESTUDIANTES (ID, NOMBRE, CURSO, NIVEL) VALUES 
[
{
"id": "1Nl9AhK0qZJiJ3vnsgqfR",
"nombre": "Alex",
"curso": "Canto",
"nivel": 4
},
{
"id": "rb-iK4l-4xD8-rK3DoXNL",
"nombre": "Camila",
"curso": "Bajo",
"nivel": 4
},
{
"id": "0418ucU1rhzfCj8R8AdV6",
"nombre": "Luis",
"curso": "Bateria",
"nivel": 5
},
{
"id": "ZE8fQyuydqO9Ohs3DX9zo",
"nombre": "Paula",
"curso": "Violin",
"nivel": 5
},
{
"id": "44Vk4_gareIsZgBdhBM2a",
"nombre": "Laura",
"curso": "Ukelele",
"nivel": 5
},
{
"id": "5DOCYRrcKCJWTIw7hjRoN",
"nombre": "Fernanda",
"curso": "Teclado",
"nivel": 3
}
]
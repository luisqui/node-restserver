//Puerto
process.env.PORT = process.env.PORT || 3000;


// Entorno
//paa saber si estoy en dev o prod uso (si la variable no existe significa que estoy en dev)
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


//Base de datos
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://admin:s0x5PRzTpQMriS3A@cluster0.467z8.mongodb.net/cafe'
}

process.env.URLDB = urlDB
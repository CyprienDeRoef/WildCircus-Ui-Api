const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'cyp', // le nom d'utilisateur
    password: 'cyp', // le mot de passe
    database: 'wild_circus', // le nom de la base de données
});
module.exports = connection;
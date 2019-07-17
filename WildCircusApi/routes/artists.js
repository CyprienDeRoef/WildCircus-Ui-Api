const express = require('express');
const router = express.Router();
const connection = require('../conf');


const bodyParser = require('body-parser');


router.get('/artists', (req, res) => {
    connection.query('SELECT * from artists', (err, results) => {
        console.log(err)
        if (err) {
            res.status(500).send('Erreur lors de la récupération des artistes');
        } else {
            res.json(results);
        }
    });
});


router.post('/artists', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO artists SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la sauvegarde d'un nouvel artiste");
            return
        }
        if (!results) {
            res.status(400).send();
            return;
        }
    });
});


router.get('/artists/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * from artists WHERE id = ?', id, err => {
        console.log(err)
        if (err) {
            res.status(500).send("Erreur lors de la récupération de l'artiste");
            return;
        }
        res.json(results);
    });
});


router.delete('/artists/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM artists WHERE id = ? ', id, err => {
        if (err) {
            res.status(500).send("Erreur lors de la suppression");
            return;
        }
        res.status(201).send()
    })
})


module.exports = router
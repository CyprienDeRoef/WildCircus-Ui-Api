const express = require('express');
const router = express.Router();
const connection = require('../conf');


const bodyParser = require('body-parser');


router.get('/shows', (req, res) => {
    connection.query('SELECT * from shows', (err, results) => {
        console.log(err)
        if (err) {
            res.status(500).send('Erreur lors de la récupération des spectacles');
        } else {
            res.json(results);
        }
    });
});


router.post('/shows', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO shows SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la sauvegarde d'un nouveau spectacle");
            return
        }
        if (!results) {
            res.status(400).send();
            return;
        }
    });
});


router.get('/shows/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * from shows WHERE id = ?', id, err => {
        console.log(err)
        if (err) {
            res.status(500).send('Erreur lors de la récupération du spectacle');
            return;
        }
        res.json(results);
    });
});


router.delete('/shows/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM shows WHERE id = ? ', id, err => {
        if (err) {
            res.status(500).send("Erreur lors de la suppression");
            return;
        }
        res.status(201).send()
    })
})

module.exports = router;
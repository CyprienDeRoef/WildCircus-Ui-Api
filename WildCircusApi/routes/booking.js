const express = require('express');
const router = express.Router();
const connection = require('../conf');


const bodyParser = require('body-parser');


router.get('/bookings', (req, res) => {
    connection.query('SELECT * FROM reservation', (err, results) => {
        console.log(err)
        if (err) {
            res.status(500).send('Erreur lors de la récupération de la réservation');
        } else {
            res.json(results);
        }
    });
});


router.post('/bookings', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO reservation SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la sauvegarde d'une nouvelle réservation");
            return
        }
        if (!results) {
            res.status(400).send();
            return;
        }
    });
});


router.get('/bookings/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM reservation WHERE id = ?', id, err => {
        console.log(err)
        if (err) {
            res.status(500).send('Erreur lors de la récupération de la réservation');
            return;
        }
        res.json(results);
    });
});


router.delete('/bookings/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM reservation WHERE id = ? ', id, err => {
        if (err) {
            res.status(500).send("Erreur lors de la suppression");
            return;
        }
        res.status(201).send()
    })
})


module.exports = router;
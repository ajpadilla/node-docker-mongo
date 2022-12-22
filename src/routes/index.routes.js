const { Router } = require('express');
const Persona = require("../persona");
const router = Router();

router.get('/', async (req, res) => {
    const persona = new Persona({"nombre": "Jose Bustamante", "cedula": "19234099"});
    persona.save();

    const personaEncontrada = await Persona.find({});

    res.json( personaEncontrada );
});

module.exports = router;
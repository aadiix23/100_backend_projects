const service = require("../service/service");

async function getfact(req, res) {
    try {
        const number = req.params.number;
        const result = await service(number);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { fact: getfact };
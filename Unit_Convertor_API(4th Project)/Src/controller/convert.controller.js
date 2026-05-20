const svc = require("../services/convertor.service.js")

exports.convert = (req, res, next) => {
    try {
        const { value, from, to } = req.query;
        const result = svc.convert(Number(value), from, to);
        res.json({ value: Number(value), from, to, result });
    } catch (error) {
        next(error);
    }
};

exports.categories = (_req, res) => {
    res.json({ categories: svc.getCategories() });
};

exports.units = (req, res, next) => {
    try {
        res.json({ units: svc.getUnits(req.params.cat) });
    } catch (error) {
        next(error);
    }
};
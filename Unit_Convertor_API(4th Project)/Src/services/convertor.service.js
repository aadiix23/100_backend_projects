const UNITS = require("../config/unit.js")

exports.convert = (value, from, to) => {
    const fromUnit = findUnit(from);
    const toUnit = findUnit(to);

    if (!fromUnit) throw { status: 422, message: `Unknown Unit ${from}` };
    if (!toUnit) throw { status: 422, message: `Unknown Unit ${to}` }
    if (fromUnit.category !== toUnit.category)
        throw { status: 422, message: `Cannot convert from ${fromUnit.category} -> ${toUnit.category}` }
    return parseFloat((value * fromUnit.factor / toUnit.factor).toFixed(6));
}

exports.getCategories =()=>Object.keys(UNITS);
exports.getUnits=(cat)=>{
    if(!UNITS[cat]) throw { status: 404, message: `Unknown category: ${cat}` };
    return Object.keys(UNITS[cat]);
}

function findUnit(key){
    for (const [cat, units] of Object.entries(UNITS))
    if (units[key]) return { ...units[key], category: cat };
  return null;
}
export function getEvolutions(_, res) {
    res.send([{ "period": 1980, "territory": "Huelva" }])
}

export function findByperiod(_, res) {
    res.send({ "period": 1980, "territory": "Huelva"})
}



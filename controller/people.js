const {people} = require('../data.js');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
}

const createPeople = (req, res) => {
    const { name } = req.body;
    if(name) {
        return res.status(201).send({success: true, person:name});
    }
    res.status(404).send({success: false, msg:'please input your username'});
}

const updatePeople = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find(person => person.id === Number(id));
    if(person) {
        const updatePerson = people.map(person => {
            if(person.id === Number(id)) {
                person.name = name;
            }
            return person;
        });
        return res.status(200).json({success: true, people: updatePerson});
    }
    res.status(404).json({ success: false, msg: `no user with id ${id}` });
}

const deletePeople = (req, res) => {
    const {id} = req.params;
    const person = people.find(person => person.id === Number(id));
    if(person) {
        const newPeople = people.filter(person => person.id !== Number(id));
        return res.status(200).json({ success: true, people: newPeople });
    }
    res.status(404).json({ success: false, msg: `no user with id ${id}` });
}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}
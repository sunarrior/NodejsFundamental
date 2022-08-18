const login = (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(201).send({success: true, msg:`welcome ${name}!`});
    }
    res.status(404).send({success: false, msg:'invalid username'});
}

module.exports = login
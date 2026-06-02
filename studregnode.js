const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('/stud.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'stud.html'));
});

app.get('/process_get', function (req, res) {

    const response = {
        stud_name: req.query.sname,
        stud_contact: req.query.scon,
        stud_gender: req.query.g,
        stud_address: req.query.sadd,
        stud_hobbies: req.query.shob,
        stud_skillset: req.query.sss,
        stud_highest_qualification: req.query.shq,
        stud_district: req.query.sdis
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server running at http://%s:%s", host, port);
});

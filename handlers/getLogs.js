const log = require("../logging");
const fs = require("fs");
let mylogs = require("../logs.json");
module.exports.getAllLogs = function(req, res, payload, cb) {
    log.log(req.url, JSON.stringify(payload));

    fs.readFile("../logs.json", 'utf8', (err, data) =>	{
        if (err) {
            log.log(req.url, JSON.stringify(err));
        }
        console.log("val");
        cb(null, data);
    });
};
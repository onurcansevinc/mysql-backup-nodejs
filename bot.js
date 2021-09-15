var mysqlDump = require('mysqldump');
var fs = require('fs');
var config = fs.readFileSync('config.json', 'utf8');
config = JSON.parse(config);
let databases = config.databases;

for (var i = 0; i < databases.length; i++) {
    mysqlDump({
        connection: {
            host: databases[i].host,
            user: databases[i].user,
            password: databases[i].password,
            database: databases[i].database
        },
        dumpToFile: './backups/'+databases[i].foldername+'/' + time() + '.sql',
    });
}


function time() {
    let m = new Date();
    return m.getFullYear() + "-" +
        ("0" + (m.getMonth() + 1)).slice(-2) + "-" +
        ("0" + m.getDate()).slice(-2);
}
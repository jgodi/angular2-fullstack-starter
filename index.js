var path = require('path');
var nodemon = require('nodemon');
var isProduction = process.env.NODE_ENV === 'production';

nodemon({
    execMap: {
        js: 'babel-node'
    },
    script: path.join(__dirname, '/server/index'),
    ignore: [],
    watch: !isProduction ? ['server/*'] : false,
    ext: 'js'
}).on('restart', function () {
    console.log('Changes detected on the server, restarting!'); // eslint-disable-line
}).on('quit', function () {
    process.exit(1);
});

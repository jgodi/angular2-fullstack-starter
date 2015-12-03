import path from 'path';
import convict from 'convict';

// Define a config schema
const conf = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV' // Listens to the NODE_ENV property to change this config
    },
    host: {
        doc: 'Database host name/IP',
        format: String,
        default: 'http://localhost:3000'
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    myapp: {
        mockConfigId: {
            doc: 'Custom API Config ID',
            format: String,
            default: 'empty'
        }
    }
});

// Load environment dependent configuration
const env = conf.get('env');
conf.loadFile(path.join(__dirname, '/config/' + env + '.json'));

// Perform validation
conf.validate({strict: false});

export default conf;

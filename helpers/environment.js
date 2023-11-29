/**
 * Title: Environment
 */
const environments={};

environments.staging= {
    port: 3500,
    envName: 'staging',
    secretkey: 'your secret'
}
environments.production= {
    port: 5500,
    envName: 'production',
    secretkey: 'your business secret'
}

const currentEnv = typeof(process.env.NODE_ENV)==='string'
? process.env.NODE_ENV : 'staging';
const envToExport = typeof(environments[currentEnv])==='object'?environments[currentEnv]:environments.staging;

module.exports = envToExport;
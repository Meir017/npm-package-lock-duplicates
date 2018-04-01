const glob = require("glob");
const fs = require("fs");

function findDupsFromNodeModules(directory) {
    const dups = {};
    const packageJsons = glob.sync(`${directory}/node_modules/**/package.json`);
    for (const packageJson of packageJsons) {
        try {
            const json = require(packageJson);
            if (!json.name || !json.version) {
                throw "invalid package.json";
            }
            if (!dups[json.name]) {
                dups[json.name] = {};
            }
            if (!dups[json.name][json.version]) {
                dups[json.name][json.version] = 1;
            } else {
                dups[json.name][json.version]++;
            }
        } catch (error) {
            console.error(`invalid package.json`, packageJson);
        }
    }

    for (const key in dups) {
        const versions = Object.keys(dups[key]);
        if (versions.length === 1 && dups[key][versions[0]] === 1) {
            delete dups[key];
        }
    }
    return dups;
}

module.exports = {
    findDupsFromNodeModules
}
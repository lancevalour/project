#!/usr/bin/env node

var fs = require('fs');

var folder = ["./apk", "./code", "./design", "./screenshot", "./test"];

console.log(process.argv[2]);
console.log("Scaffolding...");

var projectName = process.argv[2];

createProjectFolder(projectName);

function createProjectFolder(folderName) {
    folderName = "./" + folderName;
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
    }
    try {
        process.chdir(folderName);
        console.log('New directory: ' + process.cwd());
    } catch (err) {
        console.log('chdir: ' + err);
    }
    createSubfolders();
}

function createSubfolders() {
    folder.forEach(function(entry) {
        if (!fs.existsSync(entry)) {
            fs.mkdirSync(entry);
        }
    });
}

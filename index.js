#!/usr/bin/env node

var fs = require('fs');

var folder = ["./apk", "./code", "./design", "./screenshot", "./test"];

console.log("Scaffolding...");

var argv = ["node", "project", "-type=custom", "folder1", "folder2", "folder3", "-g", "-s", "-a=some", "some1", "some2"];

//var argv = process.argv;

var projectName = argv[2];
var optionName = argv[3];
var options = argv.slice(2);
console.log(options);
console.log(options.join());

parseOptions(options)

function parseOptions(options){
    optionList = options.join().split("-");

    console.log(optionList);

    optionList.forEach(function(option) {

      parseOption(option);
  });

}

function parseOption(option){
    optionNameValues = option.split(",").filter(function(v){return v!==''});

    if (optionNameValues.length === 0){
        return;
    }
    console.log(optionNameValues);
    console.log(optionNameValues.length);


    optionName = optionNameValues[0];
    optionValues = optionNameValues.slice(1);

    console.log("optionName: " + optionName);
    console.log(optionValues);


    console.log("optionname 1 " + optionName.split("=")[0]);
    
    optionNameValue = optionName.split("=").slice(1);

    
    switch (optionName.split("=")[0]){
        case "type":
        createProjectFolder(projectName);
        break;
        case "option2":
        createProjectFolder(projectName);
        break;
        default:
        console.log("No ");
        break;

    }

}

function parseType(optionNameValues){

}


// function createProjectFolder(folderName) {
//     folderName = "./" + folderName;
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName)
//     }
//     try {
//         process.chdir(folderName);
//         console.log('New directory: ' + process.cwd());
//     } catch (err) {
//         console.log('chdir: ' + err);
//     }

//     createSubfolders();
// }

// function createSubfolders(folderList) {
//     folderList.forEach(function(entry) {
//         if (!fs.existsSync(entry)) {
//             fs.mkdirSync(entry);
//         }
//     });
// }

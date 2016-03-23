#!/usr/bin/env node

var fs = require('fs');

var folder_android = ["./apk", "./code", "./design", "./screenshot", "./test"];

var folder_java = ["./code", "./design", "./test", "./screenshot"];


console.log("Scaffolding...");

// var argv = ["node", "project", "-type=custom", "folder1", "folder2", "folder3", "-g", "-s", "-a=some", "some1", "some2"];

// var argv = process.argv;

var projectName = process.argv[2];
var options = process.argv.slice(3);
console.log(projectName);
console.log(options);
console.log(options.join());

if (options.length !== 0){
    parseOptions(options)
}
else{
    createProjectFolder(projectName, []);
}

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
    

    optionNameKey = optionName.split("=")[0];
    optionNameValue = optionName.split("=")[1];


    switch (optionNameKey){
        case "type":
        parseType(optionNameValue, optionValues);
        break;
        case "option2":
        // createProjectFolder(projectName);
        break;
        case "option3":
        break;
        default:
        console.log("No option " + optionNameKey);
        break;
    }

}

function parseType(optionNameValue, optionValues){
    switch (optionNameValue){
        case "android":
        createProjectFolder(projectName, folder_android);
        break;
        case "custom":
        createProjectFolder(projectName, optionValues);
        break;
        case "java":
        createProjectFolder(projectName, folder_java);
        break;
        default:
        console.log("No type " + optionNameValue);
        break;
    }
}


function createProjectFolder(folderName, folderList) {
    folderName = "./" + folderName;
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        try {
            process.chdir(folderName);
            console.log('New directory: ' + process.cwd());
        } catch (err) {
            console.log('chdir: ' + err);
        }

        createSubfolders(folderList);
    }

    
}

function createSubfolders(folderList) {
    folderList.forEach(function(entry) {
        if (!fs.existsSync(entry)) {
            fs.mkdirSync(entry);
        }
    });
}

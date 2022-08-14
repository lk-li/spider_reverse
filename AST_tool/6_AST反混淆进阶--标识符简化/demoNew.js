let a = 1;
let b = 2;

//定义后，未使用，删除
function ffd() {
  console.log('dad');
}

ffd(); //函数ffd被使用，保留

//f1未被使用，将会删除
function f2() {
  let a = {
    'l': 1,
    'p': 2
  }; //c没有被使用，删除
}

f2(); //函数f2被使用，保留
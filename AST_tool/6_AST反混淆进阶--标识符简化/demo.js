let a=1;
let b=2;
let c=a+b;
//a,b被使用，保留，c定义后，没有被使用，删除


let dd,e,f;
//定义后，未使用，删除

function ffd(){
  console.log('dad');
}
ffd();
//函数ffd被使用，保留


function f1() {
  console.log('ello')
}
//f1未被使用，将会删除

function f2(){
  let a={'l':1,'p':2}
  let b={'l2':1,'p2':2}//这里b没有被使用，将删除
  let c=a['p'];//c没有被使用，删除
}
f2();
//函数f2被使用，保留
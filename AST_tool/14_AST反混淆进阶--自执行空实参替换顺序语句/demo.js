//第一种自执行无参数
(function () {
    b = 123;
    c = 456;
    console.log(c);
}());
//第一种自执行带参数
(function (a) {
    if (!a) {
        a = 10
    }
    b = 123;
    c = 456;
    console.log(a);
}());
//第二种，自执行不带参数
!function () {
    b = 123;
    c = 456;
    console.log(b);
}();
//第二种，自执行带参数
!function (a) {
    if (!a) {
        a = 20
    }
    b = 123;
    c = 456;
    console.log(a);
}();
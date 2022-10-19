function x() {
        var x = 1 > 0 && void 0 !== arguments[0] ? arguments[0] : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
          , r = "";
        return r || (r = x.replace(/[xy]/g, function(x) {
            var r = 16 * Math.random() | 0;
            return ("x" == x ? r : 3 & r | 8).toString(16);
        })),
        r;
    }

console.log(x())
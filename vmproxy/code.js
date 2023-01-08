

function _signature(e, t) {
    var a, r;
    var n = "https://www.toutiao.com/toutiao"
    var i = {
        url: n + e
    };
    a = window.byted_acrawler
    r = a.sign
    var c = r.call(a, i)
    return c
}

function get_signature(headers_url) {
    return _signature(headers_url)
}

console.log(get_signature('/api/pc/feed/?max_behot_time=1609371619&category=news_entertainment&utm_source=toutiao&widen=1&tadrequire=true'))
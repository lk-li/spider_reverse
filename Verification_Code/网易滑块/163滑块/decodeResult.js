(function () {
  window["NECaptcha"] = function (B) {
    function p(v) {
      if (m[v]) return m[v]["exports"];
      var R = m[v] = {
        'exports': {},
        'id': v,
        'loaded': !1
      };
      return B[v]["call"](R['exports'], R, R['exports'], p), R['loaded'] = !0, R["exports"];
    }

    var m = {};
    return p['m'] = B, p['c'] = m, p['p'] = "/2.26.1/", p(0);
  }([function (B, p, m) {
    m(69), m(59);
    var v = m(40);
    B["exports"] = v;
  }, function (B, p, m) {
    B["exports"] = m['p'] + "images/icon_light.4e88fb8.png";
  }, function (B, p, m) {
    B["exports"] = m['p'] + "images/icon_light@2x.f3de6ba.png";
  }, function (B, p) {
    var m = {}["toString"],
        v = "ujg3ps2znyw",
        R = {
      'slice': function (a, D, X) {
        for (var O = [], K = D || 0, F = X || a["length"]; K < F; K++) O["push"](K);

        return O;
      },
      'getObjKey': function (a, D) {
        for (var X in a) if (a["hasOwnProperty"](X) && a[X] === D) return X;
      },
      'typeOf': function (a) {
        return null == a ? String(a) : m['call'](a)['slice'](8, -1)["toLowerCase"]();
      },
      'isFn': function (a) {
        return "function" == typeof a;
      },
      'log': function (a, D) {
        var X = ["info", "warn", 'error'];
        return 'string' == typeof a && ~X['indexOf'](a) ? void (console && console[a]("[NECaptcha] " + D)) : void R['error']("util.log(type, msg): \"type\" must be one string of " + X["toString"]());
      },
      'warn': function (a) {
        R['log']("warn", a);
      },
      'error': function (a) {
        R["log"]("error", a);
      },
      'assert': function (a, D) {
        if (!a) throw new Error("[NECaptcha] " + D);
      },
      'msie': function a() {
        var D = navigator["userAgent"],
            X = parseInt((/msie (\d+)/["exec"](D['toLowerCase']()) || [])[1]);
        return isNaN(X) && (X = parseInt((/trident\/.*; rv:(\d+)/["exec"](D["toLowerCase"]()) || [])[1])), X;
      },
      'now': function () {
        return new Date()["getTime"]();
      },
      'getIn': function (D, X, O) {
        if ("[object Object]" !== Object['prototype']["toString"]["call"](D)) return O;
        "string" == typeof X && (X = X["split"]('.'));

        for (var K = 0, F = X["length"]; K < F; K++) {
          var Z = X[K];
          if (K < F - 1 && !D[Z]) return O || void 0;
          D = D[Z];
        }

        return D;
      },
      'raf': function D(X) {
        var O = window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || function (K) {
          window["setTimeout"](K, 16);
        };

        O(X);
      },
      'nextFrame': function (X) {
        R["raf"](function () {
          return R["raf"](X);
        });
      },
      'sample': function (X, O) {
        var K = X["length"];
        if (K <= O) return X;

        for (var F = [], Z = 0, H = 0; H < K; H++) H >= Z * (K - 1) / (O - 1) && (F["push"](X[H]), Z += 1);

        return F;
      },
      'template': function (X, O) {
        var K = function (z) {
          return z["replace"](/([.*+?^${}()|[\]\/\\])/g, "\\$1");
        },
            F = {
          'start': '<%',
          'end': '%>',
          'interpolate': /<%=(.+?)%>/g
        },
            Z = F,
            H = new RegExp("'(?=[^" + Z["end"]["substr"](0, 1) + ']*' + K(Z["end"]) + ')', 'g'),
            S = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + X["replace"](/[\r\t\n]/g, " ")["replace"](H, "\t")["split"]("'")["join"]("\\'")["split"]("\t")['join']("'")["replace"](Z['interpolate'], "',$1,'")["split"](Z['start'])["join"]("');")["split"](Z["end"])["join"]("p.push('") + "');}return p.join('');");

        return O ? S(O) : S;
      },
      'uuid': function X(O, K) {
        var F = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"["split"](''),
            Z = [],
            H = void 0;

        if (K = K || F["length"], O) {
          for (H = 0; H < O; H++) Z[H] = F[0 | Math["random"]() * K];
        } else {
          var S = void 0;

          for (Z[8] = Z[13] = Z[18] = Z[23] = '-', Z[14] = '4', H = 0; H < 36; H++) Z[H] || (S = 0 | 16 * Math['random'](), Z[H] = F[19 === H ? 3 & S | 8 : S]);
        }

        return Z["join"]('');
      },
      'reverse': function (O) {
        return Array["isArray"](O) ? O["reverse"]() : "string" === R["typeOf"](O) ? O['split']('')["reverse"]()["join"]('') : O;
      },
      'encodeUrlParams': function (O) {
        var K = [];

        for (var F in O) O['hasOwnProperty'](F) && K["push"](window["encodeURIComponent"](F) + '=' + window["encodeURIComponent"](O[F]));

        return K["join"]('&');
      },
      'adsorb': function (O, K, F) {
        return void 0 === K || null === K || void 0 === F || null === F ? O : Math["max"](Math["min"](O, F), K);
      },
      'unique2DArray': function (O) {
        var K = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!Array["isArray"](O)) return O;

        for (var F = {}, Z = [], H = 0, S = O["length"]; H < S; H++) {
          var z = O[H][K];
          null === z || void 0 === z || F[z] || (F[z] = !0, Z["push"](O[H]));
        }

        return Z;
      },
      'setDeviceToken': function (O) {
        try {
          window["localStorage"]["setItem"](v, O);
        } catch (K) {
          return null;
        }
      },
      'getDeviceToken': function () {
        try {
          var O = window["localStorage"]["getItem"](v);
          return O;
        } catch (K) {
          return null;
        }
      }
    };
    B["exports"] = R;
  }, function (B, R, D) {
    function X(C) {
      if (C = C || window["event"], C[U]) return C;
      this["event"] = C, this["target"] = C["target"] || C["srcElement"];
      var E = this['type'] = C["type"];

      if (I['test'](E) && (this["clientX"] = C["clientX"] || C["changedTouches"] && C["changedTouches"][0]["clientX"], this["clientY"] = C["clientY"] || C["changedTouches"] && C['changedTouches'][0]["clientY"], this['pageX'] = null != C['pageX'] ? C['pageX'] : C["clientX"] + L["scrollLeft"], this["pageY"] = null != C["pageX"] ? C['pageY'] : C["clientY"] + L['scrollTop'], "mouseover" === E || 'mouseout' === E)) {
        for (var w = C["relatedTarget"] || C[("mouseover" === E ? "from" : 'to') + "Element"]; w && 3 === w["nodeType"];) w = w["parentNode"];

        this["relatedTarget"] = w;
      }

      this[U] = !0;
    }

    function O(C) {
      var E = C["nodeType"];
      return 1 === E || 9 === E || 11 === E ? "string" == typeof C["textContent"] ? C["textContent"] : C["innerText"] : 3 === E || 4 === E ? C['nodeValue'] : '';
    }

    var K,
        F,
        Z = "function" == typeof Symbol && "symbol" == typeof Symbol['iterator'] ? function (C) {
      return typeof C;
    } : function (C) {
      return C && 'function' == typeof Symbol && C["constructor"] === Symbol && C !== Symbol["prototype"] ? "symbol" : typeof C;
    },
        H = D(3),
        S = D(19),
        z = document["createElement"]("div"),
        I = /^(?:click|dblclick|contextmenu|DOMMouseScroll|(mouse|touch|pointer)(?:\w+))$/,
        L = document;
    L = L["compatMode"] && "CSS1Compat" !== L['compatMode'] ? L["body"] : L["documentElement"];

    var N = /Mobile/i["test"](window["navigator"]["userAgent"]),
        P = N && /Android/i["test"](window["navigator"]["userAgent"]),
        q = function () {
      var C = 0,
          E = !1,
          w = window['navigator'];
      "undefined" != typeof w["maxTouchPoints"] ? C = w['maxTouchPoints'] : "undefined" != typeof w["msMaxTouchPoints"] && (C = w["msMaxTouchPoints"]);

      try {
        document['createEvent']("TouchEvent"), E = !0;
      } catch (J) {}

      var Q = ("ontouchstart" in window);
      return C > 0 || E || Q;
    }(),
        j = function () {
      try {
        return document["createEvent"]("PointerEvent"), !0;
      } catch (C) {
        return !1;
      }
    }(),
        G = function () {
      try {
        var C = new Audio();
        return "oncanplaythrough" in C;
      } catch (E) {
        return !1;
      }
    }(),
        A = "undefined" != typeof window['CanvasRenderingContext2D'],
        V = {
      'click': "touchstart",
      'mousedown': "touchstart",
      'mousemove': "touchmove",
      'mouseup': "touchend"
    },
        U = "_fixed_" + Math["random"]()["toString"](36)['slice'](2, 7),
        W = !1;

    try {
      document["createElement"]("div")["addEventListener"]("test", function () {}, Object["defineProperty"]({}, 'passive', {
        'get': function () {
          return W = !0, !1;
        }
      }));
    } catch (C) {}

    Object['assign'](X["prototype"], {
      'stop': function () {
        this["preventDefault"]()['stopPropagation']();
      },
      'preventDefault': function () {
        var E = this["event"];
        return !q && E["preventDefault"] ? E['preventDefault']() : E["returnValue"] = !1, this;
      },
      'stopPropagation': function () {
        return this["event"]["stopPropagation"] ? this["event"]['stopPropagation']() : this['event']["cancelBubble"] = !0, this;
      },
      'stopImmediatePropagation': function () {
        this["event"]["stopImmediatePropagation"] && this["event"]["stopImmediatePropagation"]();
      }
    });
    var M = {};
    M["body"] = document['body'], M["doc"] = document, M["isMobile"] = N, M["isAndroid"] = P, M["supportTouch"] = q, M["supportPointer"] = j, M["supportPassive"] = W, M["supportAudio"] = G, M["supportCanvas"] = A, z["addEventListener"] ? (K = function (E, w, Q) {
      E["addEventListener"](w, Q, !1);
    }, F = function (E, w, Q) {
      E["removeEventListener"](w, Q, !1);
    }) : (K = function (E, w, Q) {
      E["attachEvent"]('on' + w, Q);
    }, F = function (E, w, Q) {
      E["detachEvent"]('on' + w, Q);
    }), M['on'] = function (E, w, Q) {
      var J = arguments["length"] > 3 && void 0 !== arguments[3] && arguments[3],
          g0 = w["split"](" ");
      return Q["real"] = function (g1) {
        var g2 = new X(g1);
        g2["origin"] = E, Q['call'](E, g2);
      }, g0["map"](function (g1) {
        switch (!0) {
          case N:
            K(E, (J ? g1 : V[g1]) || g1, Q["real"]);
            break;

          case !N && q:
            K(E, g1, Q['real']), "click" !== g1 && K(E, V[g1], Q["real"]);
            break;

          default:
            K(E, g1, Q["real"]);
        }
      }), M;
    }, M['once'] = function (E, w, Q) {
      var J = function g0() {
        var g1 = Q["apply"](this, arguments);
        return M["off"](E, w, g0), g1;
      };

      return M['on'](E, w, J);
    }, M['off'] = function (E, w, Q) {
      var J = arguments["length"] > 3 && void 0 !== arguments[3] && arguments[3],
          g0 = w['split'](" ");
      Q = Q["real"] || Q, g0['map'](function (g1) {
        switch (!0) {
          case N:
            F(E, (J ? g1 : V[g1]) || g1, Q);
            break;

          case !N && q:
            F(E, g1, Q), F(E, V[g1], Q);
            break;

          default:
            F(E, g1, Q);
        }
      });
    }, M['find'] = function (E, w) {
      return 'object' === ("undefined" == typeof E ? "undefined" : Z(E)) && E["nodeType"] ? E : E ? (E = E["trim"](), w = w || document, w["querySelector"] ? w["querySelector"](E) : /^#[^#]+$/["test"](E) ? document["getElementById"](E["slice"](1)) : /^\.[^.]+$/["test"](E) ? M['getElementsByClassName'](E["slice"](1), w)[0] || null : /^[^.#]+$/['test'](E) ? w["getElementsByTagName"](E)[0] || null : null) : null;
    }, M["findAll"] = function (E, w) {
      if (w = w || document, E = E["trim"](), w["querySelectorAll"]) return w["querySelectorAll"](E);

      if (/^#[^#]+$/["test"](E)) {
        var Q = document["getElementById"](E["slice"](1));
        return Q ? [Q] : [];
      }

      return /^\.[^.]+$/["test"](E) ? M["getElementsByClassName"](E["slice"](1), w) : /^[^.#]+$/["test"](E) ? w["getElementsByTagName"](E) : [];
    }, M["html"] = function (E, w) {
      return 'undefined' === H["typeOf"](w) ? E["innerHTML"] : void (E['innerHTML'] = w);
    }, M["css"] = function (E, w) {
      E["style"]["cssText"] += ';' + w;
    }, M['replace'] = function (E, w) {
      w["parentNode"] && w["parentNode"]["replaceChild"](E, w);
    }, M["remove"] = function (E) {
      E["parentNode"] && E["parentNode"]['removeChild'](E);
    }, M["getComputedStyle"] = function (E, w) {
      var Q = E["currentStyle"] || window['getComputedStyle'](E, null);
      return w ? Q[w] : Q;
    }, M['addClass'] = function (E, w) {
      if (E) {
        var Q = E["className"] || '';
        ~(" " + Q + " ")["indexOf"](" " + w + " ") || (E["className"] = Q ? Q + " " + w : w);
      }
    }, M["delClass"] = function (E, w) {
      if (E) {
        var Q = E['className'] || '';
        E["className"] = (" " + Q + " ")["replace"](" " + w + " ", " ")['trim']();
      }
    }, M['hasClass'] = function (E, w) {
      if (!E) return !1;
      var Q = E["className"] || '';
      return ~(" " + Q + " ")["indexOf"](" " + w + " ");
    }, M['getElementsByClassName'] = function (E, w) {
      if (w = w || document, document["getElementsByClassName"]) return w["getElementsByClassName"](E);

      for (var Q, J = w["getElementsByTagName"]('*'), g0 = [], g1 = 0, g2 = J['length']; g1 < g2; g1++) Q = J[g1], ~(" " + Q["className"] + " ")["indexOf"](" " + E + " ") && g0["push"](Q);

      return g0;
    }, M["getBubblePath"] = function (E) {
      for (var w = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : document, Q = [], J = E; J && J !== w;) Q["push"](J), J = J["parentNode"];

      return Q;
    }, M['transition'] = function (Q, J) {
      function g0() {}

      H["assert"](Q && Q["nodeType"], "transition(el, opts) \"el\" must be a DOM element!");
      var g1 = {
        'name': '',
        'enter-class': '',
        'enter-active-class': '',
        'leave-class': '',
        'leave-active-class': '',
        'beforeEnter': g0,
        'enter': g0,
        'afterEnter': g0,
        'enterCanceled': g0,
        'beforeLeave': g0,
        'leave': g0,
        'afterLeave': g0,
        'leaveCanceled': g0,
        'insert': g0
      };
      J = Object['assign']({}, g1, J);
      var g2 = J,
          g3 = g2['name'],
          g4 = g2["beforeEnter"],
          g5 = g2["enter"],
          g6 = g2["afterEnter"],
          g7 = g2["enterCanceled"],
          g8 = g2["beforeLeave"],
          g9 = g2["leave"],
          gg = g2['afterLeave'],
          gT = g2['leaveCanceled'],
          gB = g2['insert'],
          gp = J["enter-class"] || g3 && g3 + "-enter",
          gm = J["enter-active-class"] || g3 && g3 + "-enter-active",
          gv = J["leave-class"] || g3 && g3 + '-leave',
          gi = J["leave-active-class"] || g3 && g3 + '-leave-active',
          gR = !H["msie"]() || H['msie']() > 9,
          ga = "transitionend",
          gD = "animationend",
          gX = !0,
          gO = !1,
          gr = !1;

      if (void 0 === window["ontransitionend"] && void 0 !== window["onwebkittransitionend"] && (ga = "webkitTransitionEnd"), void 0 === !window["onanimationend"] && void 0 !== window['onwebkitanimationend'] && (gD = "webkitAnimationEnd"), gR) {
        var gK = function () {
          gO && (gX = !0, gO = !1, M["delClass"](Q, gm), g6(Q)), gr && (gr = !1, M["delClass"](Q, gi), gg(Q));
        };

        Q["addEventListener"](ga, gK), Q["addEventListener"](gD, gK);
      }

      return {
        'enter': function () {
          if (Q) {
            if (!gR) return gB(Q), void g6(Q);
            Q["className"] = S(Q["className"]["trim"]()['split'](/\s+/), gp, gm), g4(Q), gB(Q), gX = !1, gO = !0, H['nextFrame'](function () {
              M["delClass"](Q, gp), g5(Q);
            });
          }
        },
        'leave': function () {
          if (Q) {
            if (!gR || !gX) return void gg(Q);
            Q["className"] = S(Q["className"]["trim"]()["split"](/\s+/), gv, gi), g8(Q), gr = !0, H["nextFrame"](function () {
              M["delClass"](Q, gv), g9(Q);
            });
          }
        },
        'cancelEnter': function () {
          gO && (gO = !1, M["delClass"](Q, gm), g7(Q));
        },
        'cancelLeave': function () {
          gr && (gr = !1, M['delClass'](Q, gi), gT(Q));
        },
        'dispose': function () {
          gR && (Q["removeEventListener"](ga, gK), Q["removeEventListener"](gD, gK)), Q = null;
        }
      };
    }, M["text"] = function (E, w) {
      if (void 0 === w) return O(E);
      var Q = E["nodeType"];
      1 !== Q && 11 !== Q && 9 !== Q || ("string" == typeof E["textContent"] ? E["textContent"] = w : E["innerText"] = w);
    }, z['className'] = 'yidun_class', M["className"] = z["getAttribute"]("className") ? function (E) {
      return E['getAttribute']("className");
    } : function (E) {
      return E['getAttribute']("class");
    }, M["getRect"] = function (E) {
      var w = E['getBoundingClientRect']();
      if ("width" in w) return w;
      var Q = w["left"],
          J = w["top"],
          g0 = w["right"],
          g1 = w["bottom"];
      return Object["assign"]({}, w, {
        'width': g0 - Q,
        'height': g1 - J
      });
    }, B['exports'] = M;
  }, function (B, p) {
    p["CAPTCHA_TYPE"] = {
      'JIGSAW': 2,
      'POINT': 3,
      'SMS': 4,
      'INTELLISENSE': 5,
      'AVOID': 6,
      'ICON_POINT': 7,
      'WORD_GROUP': 8,
      'INFERENCE': 9,
      'WORD_ORDER': 10,
      'SPACE': 11,
      'VOICE': 12
    }, p['CAPTCHA_CLASS'] = {
      'CAPTCHA': "yidun",
      'PANEL': "yidun_panel",
      'SLIDE_INDICATOR': "yidun_slide_indicator",
      'SLIDER': "yidun_slider",
      'JIGSAW': "yidun_jigsaw",
      'POINT': "point",
      'SMS': "yidun_sms",
      'TIPS': "yidun_tips",
      'REFRESH': 'yidun_refresh',
      'CONTROL': 'yidun_control',
      'BGIMG': 'yidun_bgimg',
      'INPUT': "yidun_input",
      'LOADBOX': "yidun_loadbox",
      'LOADICON': 'yidun_loadicon',
      'LOADTEXT': "yidun_loadtext",
      'ERROR': "error",
      'WARN': 'warn',
      'VERIFY': 'verifying',
      'SUCCESS': "success",
      'LOADING': "loading",
      'LOADFAIL': 'loadfail'
    }, p["WIDTH_LIMIT"] = [220, 10000], p["SLIDER_START_LEFT_LIMIT"] = 40, p["LARGE_SIZE_TYPE"] = {
      'medium': 18,
      'large': 20,
      'x-large': 24
    }, p['SIZE_TYPE'] = {
      'DEFAULT': 10,
      'LARGE': 20
    }, p["SAMPLE_NUM"] = 50, p["BIGGER_SAMPLE_NUM"] = 100, p["DEVICE"] = {
      'MOUSE': 1,
      'TOUCH': 2,
      'MOUSE_TOUCH': 3
    }, p["MAX_VERIFICATION"] = 5, p["RTL_LANGS"] = ['ar', 'he', 'ug', 'fa', 'ur'], p["CACHE_MIN"] = 60000, p["FILE_DETECT_KEY"] = {
      'core': "NECaptcha",
      'light': 'NECaptcha_theme_light',
      'dark': "NECaptcha_theme_dark",
      'plugins': "NECaptcha_plugin",
      'watchman': 'initCaptchaWatchman'
    }, p['FEEDBACK_URL'] = "http://support.dun.163.com/feedback/captcha", p['RUN_ENV'] = {
      'WEB': 10,
      'ANDROID': 20,
      'IOS': 30,
      'MINIPROGRAM': 40,
      'JUMPER_MINI_PROGRAM': 50,
      'QUICKAPP': 60
    }, p['CLOSE_SOURCE'] = {
      'USER': 1,
      'PROCESS': 2,
      'CLOSE': 3
    }, p["IV_VERSION"] = 3, p["POPUP_PRELOAD_SHIFTING_CLASS"] = 'yidun_popup--shifting', p["CLASSIC_WRAPPER_PRELOAD_SHIFTING_CLASS"] = 'yidun_classic-wrapper--shifting';
  }, function (B, p) {
    var m = {
      'INVOKE_HOOK': "INVOKE_HOOK",
      'EVENT_CLOSE': "EVENT_CLOSE",
      'EVENT_RESET': "EVENT_RESET",
      'SWITCH_TYPE': "SWITCH_TYPE",
      'SET_TYPE': "SET_TYPE",
      'SWITCH_LOAD_STATUS': "SWITCH_LOAD_STATUS",
      'UPDATE_VERIFY_STATUS': "UPDATE_VERIFY_STATUS",
      'REFRESH': "REFRESH",
      'UPDATE_COUNTS_OF_VERIFYERROR': "UPDATE_COUNTS_OF_VERIFYERROR",
      'SET_TOKEN': 'SET_TOKEN',
      'EVENT_RESET_CLASSIC': "EVENT_RESET_CLASSIC",
      'UPDATE_LINK_TIME': 'UPDATE_LINK_TIME'
    };
    B['exports'] = m;
  }, function (B, R) {
    function D(M, C, E) {
      return C in M ? Object["defineProperty"](M, C, {
        'value': E,
        'enumerable': !0,
        'configurable': !0,
        'writable': !0
      }) : M[C] = E, M;
    }

    function X(M, C) {
      function E() {}

      E["prototype"] = C["prototype"], M["prototype"] = new E(), M['prototype']["constructor"] = M;
    }

    function O(M, C, E) {
      this["name"] = 'CaptchaError', this["code"] = M, this["message"] = M + ('(' + W[M] + ')') + (C ? " - " + C : ''), Error["captureStackTrace"] ? Error["captureStackTrace"](this, this["constructor"]) : this['stack'] = new Error()["stack"], this["data"] = E || {};
    }

    var K,
        F = "function" == typeof Symbol && "symbol" == typeof Symbol['iterator'] ? function (M) {
      return typeof M;
    } : function (M) {
      return M && "function" == typeof Symbol && M["constructor"] === Symbol && M !== Symbol['prototype'] ? "symbol" : typeof M;
    },
        Z = "prototype",
        H = 100,
        S = 200,
        z = 300,
        I = 430,
        L = 432,
        k = 500,
        N = 501,
        P = 502,
        q = 503,
        j = 504,
        G = 505,
        A = 600,
        V = 601,
        U = 1000,
        W = (K = {}, D(K, H, "script error"), D(K, S, "business error"), D(K, z, "unpass error"), D(K, I, "qps limit error"), D(K, L, "captcha id is invalid"), D(K, k, "request error"), D(K, N, "request api error"), D(K, P, "request script error"), D(K, q, "request img error"), D(K, j, "request timeout error"), D(K, G, "request audio error"), D(K, A, "request anticheat token error"), D(K, V, "init anticheat error"), D(K, U, "unknown error"), K);
    X(O, Error), O[Z]["toString"] = function () {
      var M = String(this["stack"]);
      return 0 === M["indexOf"]("CaptchaError:") ? M : this["name"] + ": " + this["message"] + (M ? "\n    " + M : '');
    }, O['set'] = function (M, C) {
      'number' == typeof M && "string" == typeof C && (W[M] = C), "object" === ("undefined" == typeof M ? "undefined" : F(M)) && M && Object["assign"](W, M);
    }, O["get"] = function (M) {
      return W[M];
    }, O["remove"] = function (M) {
      String(M) in W && delete W[M];
    }, R = B["exports"] = O, R['SCRIPT_ERROR'] = H, R["BUSINESS_ERROR"] = S, R["UNPASS_ERROR"] = z, R["QPS_LIMIT_ERROR"] = I, R['ID_INVAILD_ERROR'] = L, R["REQUEST_ERROR"] = k, R["REQUEST_API_ERROR"] = N, R['REQUEST_SCRIPT_ERROR'] = P, R["REQUEST_IMG_ERROR"] = q, R["REQUEST_TIMEOUT_ERROR"] = j, R["REQUEST_AUDIO_ERROR"] = G, R["ANTICHEAT_TOKEN_ERROR"] = A, R['ANTICHEAT_INIT_ERROR'] = V, R["UNKNOWN_ERROR"] = U;
  }, function (B, R, D) {
    function X(W) {
      var x = {};
      return W['map'](function (M) {
        x[M] = function () {
          var C = this,
              E = U["options"]["mixins"] || {};
          (E[M] || [])["map"](function (w) {
            return w["call"](C);
          }), this['$options'][M]["map"](function (w) {
            return w['call'](C);
          });
        };
      }), x;
    }

    function O(W) {
      function x() {}

      function M() {
        E['apply'](this, arguments);
      }

      if (W instanceof U) return W;
      var C = {};
      Object['keys'](W)['map'](function (w) {
        ["render"]["indexOf"](w) > -1 && (C[w] = W[w]);
      }), z(W['methods']) && Object["assign"](C, W['methods']);
      var E = this["extend"]({});
      return x["prototype"] = E["prototype"], M["prototype"] = new x(), Object['assign'](M["prototype"], C), M["prototype"]["constructor"] = M, M['_options'] = W, M["_extend"] = O, M;
    }

    var K = Object['assign'] || function (W) {
      for (var x = 1; x < arguments["length"]; x++) {
        var M = arguments[x];

        for (var C in M) Object['prototype']['hasOwnProperty']["call"](M, C) && (W[C] = M[C]);
      }

      return W;
    },
        F = D(20),
        Z = D(51),
        H = D(12),
        S = H['getDocFragmentRegex'],
        z = H["isPlainObject"],
        I = H["getIn"],
        L = H['parseAttrsStr'],
        k = H["diffDataToUpdate"],
        N = H["nextTick"],
        P = H['lifeCycleHooks'],
        q = D(50),
        j = D(49),
        G = D(52),
        A = D(4),
        V = 0,
        U = F(K({
      'initialize': function () {
        var W = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            x = this['constructor'],
            M = V++;
        this['id'] = "__c_" + M, this["name"] = W["name"], this["_isMounted"] = !1, this['$options'] = q(x['_options'] || {}, W), W["render"] && (this["render"] = W["render"]), W['methods'] && Object["assign"](this, W["methods"]), this["_boundProps"] = W['_boundProps'] || {};
        var C = this["$parent"] = W['$parent'] || null;

        if (C) {
          if (C["$root"]) this["$root"] = C["$root"];else {
            for (var E = C; E['$parent'];) E = E["$parent"];

            this["$root"] = E;
          }
        }

        this["beforeCreate"]();
        var w = this['$options'],
            Q = w["template"],
            J = w['propsData'],
            g0 = w["data"];
        this["$props"] = this["_validateProps"](J, !0) || {}, Object["assign"](this, this["$props"]), this['$data'] = "function" == typeof g0 ? g0['call'](this) : g0 || {}, Object["assign"](this, this["$data"]), this["_composer"] = Z(Q, this), this["$children"] = [], this["_instantiateChildren"](), this['_updater'] = {
          'id': M,
          'instance': this,
          'data': {}
        }, this["created"](), W['el'] && this['$mount'](W['el']);
      },
      '$mount': function (W) {
        this["beforeMount"](), this['_childrenBeforeMount'](), this["_composeString"](this["_composer"], this);
        var x = this["_composer"]['toString']();
        if ("string" == typeof W || W && 1 === W["nodeType"]) W = A["find"](W), this["$options"]['abstract'] ? this['$el'] = W : (W['innerHTML'] = x, this["$el"] = W['children'][0]);else {
          var M = document["createElement"]("div");
          M["innerHTML"] = x, this["$el"] = M['children'][0], "function" == typeof W && W(this["$el"]);
        }
        return this["_childrenMounted"](), this["_initEvents"](), this["_isMounted"] = !0, this["mounted"](), this;
      }
    }, X(P), {
      '$setData': function (W, x) {
        !x && (W = k(W, this["$data"])), W && Object['keys'](W)["length"] && (this["_resolveWatch"](W)["map"](function (M) {
          return M();
        }), Object["assign"](this["$data"], W), Object["assign"](this, this["$data"]), Object['assign'](this["_updater"]['data'], W), j(this["_updater"]), this['_renderChildren'](W));
      },
      '$forceUpdate': function () {
        var W = Object['assign']({}, this["$data"], this["$props"]);
        this["$setData"](W, !0);
      },
      '$replaceChild': function (W, x) {
        var M = x['$el']["parentElement"],
            C = x["$el"]["nextSibling"],
            E = void 0;
        E = null === C ? function (Q) {
          M["appendChild"](Q);
        } : function (Q) {
          M["insertBefore"](Q, C);
        }, W["_boundProps"] = x['_boundProps'], W["$parent"] = this, x['$destroy']();
        var w = this["$children"]['indexOf'](x);
        w > -1 && this["$children"]["splice"](w, 1, W), W["$mount"](E);
      },
      '$destroy': function (W) {
        this["_isMounted"] && (this["beforeDestroy"](), this["_childrenBeforeDestroy"](), !W && !this["$options"]['abstract'] && this["$el"] && this["$el"]["parentElement"] && this['$el']["parentElement"]["removeChild"](this["$el"]), this['_events'] && (this["_events"]["off"](), this["_events"] = null), this["$el"] = null, this["$props"] = null, this["$data"] = null, this["$root"] = null, this["$parent"] = null, this['$children'] = null, this["$options"] = null, this["_isMounted"] = !1);
      },
      '$nextTick': N,
      'render': function () {},
      '_initEvents': function () {
        var W = this,
            x = this['$el'],
            M = this['$options']['on'];

        if (x && z(M)) {
          var C = {};
          Object["keys"](M)["map"](function (E) {
            C[E] = M[E]['bind'](W);
          }), this['_events'] = new G({
            '$el': x,
            'events': C
          });
        }
      },
      '_childrenBeforeMount': function () {
        this['$children']["map"](function (W) {
          W["beforeMount"](), W['_childrenBeforeMount']();
        });
      },
      '_childrenMounted': function () {
        this["$children"]["map"](function (W) {
          W["_childrenMounted"]();
          var x = W['$root']["$el"];
          W["$el"] = A["find"](W['$options']['el'], x) || A["find"](W["$options"]['el'], x["parentElement"]), W["_initEvents"](), W["_isMounted"] = !0, W["mounted"]();
        });
      },
      '_childrenBeforeDestroy': function () {
        this['$children']['map'](function (W) {
          W["$destroy"](!0);
        });
      },
      '_composeString': function (W, x) {
        var M = this;
        x['$children']["map"](function (C) {
          W["compose"](C["name"], C["_composer"]["toString"]()), M["_composeString"](W, C);
        });
      },
      '_setProps': function (W) {
        W = k(W, this["$props"]), W && Object['keys'](W)["length"] && (W = this["_validateProps"](W), this["_resolveWatch"](W)["map"](function (x) {
          return x();
        }), Object["assign"](this['$props'], W), Object["assign"](this, this["$props"]), Object["assign"](this["_updater"]['data'], W), j(this["_updater"]));
      },
      '_resolveWatch': function (W) {
        var x = this,
            M = this['$options']["watch"];
        if (!M) return [];
        var C = [];
        return Object["keys"](M)["map"](function (E) {
          var w = I(W, E);

          if (void 0 !== w) {
            var Q = M[E]["bind"](x, w, I(x, E));
            C["push"](Q);
          }
        }), C;
      },
      '_renderChildren': function (W) {
        this['$children']["map"](function (x) {
          var M = x["_boundProps"],
              C = {};
          Object["keys"](M)["map"](function (E) {
            var w = I(W, M[E]);
            void 0 !== w && (C[E] = w);
          }), x["_setProps"](C), x["_renderChildren"](C);
        });
      },
      '_validateProps': function (W, x) {
        if (W) {
          var M = this['$options']["props"],
              C = {};
          return z(M) ? (Object["keys"](M)["map"](function (E) {
            var w = M[E],
                Q = W[E];

            if (z(w) || (w = {
              'type': w
            }), void 0 !== Q) {
              var J = Object["prototype"]["toString"];
              if (w["type"] && J["call"](Q) !== J["call"](w['type']())) throw new Error('[' + E + "] is not valid type.");
              C[E] = Q;
            } else x && (C[E] = w["default"]);
          }), C) : W;
        }
      },
      '_instantiateChildren': function () {
        var W = this,
            x = this["$options"]["components"];

        if (x) {
          var M = this['_composer']['toString']();
          Object['keys'](x)["map"](function (C) {
            var E = M["match"](S(C, !0)) || [];
            E["map"](function (w) {
              w = w["match"](S(C)) || [];
              var Q = L(w[1]),
                  J = Q['props'],
                  g0 = Q["bound"];
              Object["keys"](g0)["map"](function (g3) {
                var g4 = I(W, g0[g3]);
                J[g3] = "function" == typeof g4 ? g4["bind"](W) : g4;
              });
              var g1 = U["_extend"](x[C]),
                  g2 = new g1({
                'name': C,
                'propsData': J,
                '_boundProps': g0,
                '$parent': W
              });
              W["$children"]["push"](g2);
            });
          });
        }
      }
    }));

    U['options'] = {}, U["_extend"] = O, U["mixin"] = function (W) {
      var x = U["options"]['mixins'] || {};
      U["options"]["mixins"] = q(x, W);
    }, B['exports'] = U;
  }, function (B, R, D) {
    function X(E, w) {
      var Q = {};

      for (var J in E) w["indexOf"](J) >= 0 || Object["prototype"]["hasOwnProperty"]["call"](E, J) && (Q[J] = E[J]);

      return Q;
    }

    function O(E, w) {
      function Q() {}

      Q["prototype"] = w["prototype"], E["prototype"] = new Q(), E["prototype"]["constructor"] = E;
    }

    function K(E, w) {
      this['enable'] = !0, this["snaker"] = new z(S({}, E, {
        'pid': "captcha",
        'limit': 9,
        'random': 0.3,
        'version': "2.26.1"
      })), this['_captchaConfig'] = w || {}, this["events"] = {};
    }

    function F(E, w) {
      var Q = N(E);
      if ("string" === Q || 'number' === Q) return "string" === Q && (E = parseFloat(E), !isNaN(E) && (E = E["toFixed"])), E["toFixed"](w);
    }

    function Z(E) {
      var w = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Q = "network";
      return function (J, g0, g1, g2) {
        var g3 = g2["status"],
            g4 = g2["error"],
            g5 = g2["index"],
            g6 = g2["res"],
            g7 = g2['perfEntry'];

        try {
          var g8 = I(J),
              g9 = "image" === g1 ? 'image' : g8["path"];

          if (g4) {
            E["remove"](Q, g9, g0);
            var gg = {
              'script': j,
              'image': A,
              'audio': V,
              'api': G
            },
                gT = new P(gg[g1], g4['message'], S({}, w, {
              'url': J
            }));
            E["collectErr"](gT, {
              'times': g5 + 1
            });
          } else {
            var gB = C[g3];

            if (M) {
              if ("end" !== gB) return;
              var gp = g7 || W['getEntriesByName'](g6 && g6['_originUrl'] || J)[0];
              if (!gp) return;
              E["collect"](Q, g9, {
                'tc': F(gp["responseEnd"] - (gp["domainLookupStart"] || gp['connectStart']), 1),
                'dc': F(gp["domainLookupEnd"] - gp['domainLookupStart'], 1),
                'cc': F(gp["connectEnd"] - gp["connectStart"], 1),
                'rc': F(gp["responseStart"] - gp["requestStart"], 1),
                'rr': F(gp["responseEnd"] - gp["responseStart"], 1),
                'url': J,
                'host': g8["host"],
                'https': "https" === g8["protocol"],
                'from': "PERF"
              }, {}, S({}, w));
            } else E["collect"](Q, g9, {
              'timestamp': new Date()["valueOf"](),
              'url': J,
              'host': g8['host'],
              'https': 'https' === g8["protocol"],
              'from': 'js'
            }, {
              'rangeId': g0,
              'rangeType': gB
            }, S({}, w));
          }
        } catch (gm) {}
      };
    }

    function H(E) {
      var w = arguments['length'] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Q = "network",
          J = 'linkTime';

      try {
        E["collectLinkTime"](Q, J, S({}, w, {
          'from': "LINK_TIME"
        }));
      } catch (g0) {}
    }

    var S = Object["assign"] || function (E) {
      for (var w = 1; w < arguments["length"]; w++) {
        var Q = arguments[w];

        for (var J in Q) Object["prototype"]["hasOwnProperty"]["call"](Q, J) && (E[J] = Q[J]);
      }

      return E;
    },
        z = D(29),
        I = D(54),
        L = D(3),
        N = L["typeOf"],
        P = D(7),
        q = D(45),
        j = P["REQUEST_SCRIPT_ERROR"],
        G = P["REQUEST_API_ERROR"],
        A = P["REQUEST_IMG_ERROR"],
        V = P["REQUEST_AUDIO_ERROR"],
        U = "prototype",
        W = window["performance"] || window["msPerformance"] || window["webkitPerformance"] || {},
        M = W && 'getEntriesByName' in W;

    O(K, Error), K[U]["collect"] = function (E, w, Q, J, g0) {
      var g1 = J['rangeId'],
          g2 = J["rangeType"];
      if (this["enable"]) try {
        if (g1) {
          var g3 = Q["timestamp"],
              g4 = X(Q, ["timestamp"]);
          !this['events'][E] && (this["events"][E] = {}), !this["events"][E][w] && (this["events"][E][w] = {});
          var g5 = this["events"][E][w][g1];

          if ("start" !== g2 || g5) {
            if ("end" === g2 && g5 && !g5["end"]) {
              Object['assign'](g5, S({
                'end': g3,
                'zoneId': this["_captchaConfig"]["zoneId"],
                'extra': g0
              }, g4));
              var g6 = g5["end"],
                  g7 = g5["start"],
                  g8 = g5["extra"],
                  g9 = X(g5, ["end", "start", "extra"]);
              this["snaker"]['trackAsync'](E, w, window["encodeURIComponent"](JSON["stringify"](S({
                'tc': g6 - g7
              }, g9))), S({}, g8, {
                'nts': new Date()["valueOf"]()
              })), this["events"][E][w][g1] = null;
            }
          } else this["events"][E][w][g1] = S({
            'ev': g5,
            'start': g3,
            'extra': g0
          }, g4);
        } else this['snaker']["trackAsync"](E, w, "string" === N(Q) ? Q : window["encodeURIComponent"](JSON['stringify'](S({}, Q, {
          'zoneId': this["_captchaConfig"]['zoneId']
        }))), S({}, g0, {
          'nts': new Date()["valueOf"]()
        }));
      } catch (gg) {}
    }, K[U]["collectLinkTime"] = function (E, w, Q) {
      if (this['enable']) try {
        this["snaker"]['trackAsync'](E, w, "string" === N(Q) ? Q : window["encodeURIComponent"](JSON["stringify"](S({}, Q))), {
          'nts': new Date()["valueOf"]()
        });
      } catch (J) {}
    }, K[U]['collectErr'] = function (E, w) {
      q(E, this['_captchaConfig'], S({}, w));
    }, K[U]["remove"] = function (E, w, Q) {
      E && w && Q ? this["events"][E] && this["events"][E][w] && delete this['events'][E][w][Q] : E && w ? this["events"][E] && (this["events"][E][w] = {}) : E && (this["events"][E] = {});
    }, K[U]["clear"] = function () {
      if (this["enable"]) try {
        this["snaker"]["flush"](), this["events"] = {};
      } catch (E) {}
    };
    var C = {
      'start': "start",
      'success': 'end'
    };
    R = B['exports'] = K, R["createNetCollect"] = Z, R["createLinkTimeCollect"] = H, R["supportEntries"] = M;
  }, function (X, K, F) {
    function Z(gP) {
      if (Array["isArray"](gP)) {
        for (var gh = 0, gf = Array(gP['length']); gh < gP['length']; gh++) gf[gh] = gP[gh];

        return gf;
      }

      return Array["from"](gP);
    }

    function H(gP) {
      var gh = [];
      if (!gP["length"]) return ga(64);
      if (gP["length"] >= 64) return gP["splice"](0, 64);

      for (var gf = 0; gf < 64; gf++) gh[gf] = gP[gf % gP["length"]];

      return gh;
    }

    function q(gP) {
      if (!gP["length"]) return ga(64);
      var gh = [],
          gf = gP['length'],
          gq = gf % 64 <= 60 ? 64 - gf % 64 - 4 : 128 - gf % 64 - 4;
      gp(gP, 0, gh, 0, gf);

      for (var ge = 0; ge < gq; ge++) gh[gf + ge] = 0;

      return gp(gR(gf), 0, gh, gf + gq, 4), gh;
    }

    function G(gP) {
      if (gP["length"] % 64 !== 0) return [];

      for (var gh = [], gf = gP["length"] / 64, gq = 0, ge = 0; gq < gf; gq++) {
        gh[gq] = [];

        for (var gd = 0; gd < 64; gd++) gh[gq][gd] = gP[ge++];
      }

      return gh;
    }

    function W(gP) {
      var gh = gi(gL),
          gf = function (gj) {
        return gh[16 * (gj >>> 4 & 15) + (15 & gj)];
      };

      if (!gP['length']) return [];

      for (var gq = [], ge = 0, gd = gP['length']; ge < gd; ge++) gq[ge] = gf(gP[ge]);

      return gq;
    }

    function Q() {
      for (var gP = [], gh = 0; gh < 4; gh++) gP[gh] = gK(Math["floor"](256 * Math["random"]()));

      return gP;
    }

    function J(gP, gh) {
      if (!gP["length"]) return [];
      gh = gK(gh);

      for (var gf = [], gq = 0, ge = gP["length"]; gq < ge; gq++) gf["push"](gF(gP[gq], gh));

      return gf;
    }

    function g0(gP, gh) {
      if (!gP["length"]) return [];
      gh = gK(gh);

      for (var gf = [], gq = 0, ge = gP["length"]; gq < ge; gq++) gf['push'](gF(gP[gq], gh++));

      return gf;
    }

    function g1(gP, gh) {
      if (!gP["length"]) return [];
      gh = gK(gh);

      for (var gf = [], gq = 0, ge = gP["length"]; gq < ge; gq++) gf["push"](gF(gP[gq], gh--));

      return gf;
    }

    function g2(gP, gh) {
      if (!gP["length"]) return [];
      gh = gK(gh);

      for (var gf = [], gq = 0, ge = gP["length"]; gq < ge; gq++) gf["push"](gD(gP[gq], gh));

      return gf;
    }

    function g3(gP, gh) {
      if (!gP["length"]) return [];
      gh = gK(gh);

      for (var gf = [], gq = 0, ge = gP["length"]; gq < ge; gq++) gf["push"](gD(gP[gq], gh++));

      return gf;
    }

    function g4(gP, gh) {
      if (!gP["length"]) return [];
      gh = gK(gh);

      for (var gf = [], gq = 0, ge = gP['length']; gq < ge; gq++) gf["push"](gD(gP[gq], gh--));

      return gf;
    }

    function g5(gP) {
      var gh = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return gh + 256 >= 0 ? gP : [];
    }

    function g6(gP) {
      for (var gh = [g5, J, g2, g0, g3, g1, g4], gf = gN, gq = 0, ge = gf['length']; gq < ge;) {
        var gd = gf["substring"](gq, gq + 4),
            gj = gv(gd["substring"](0, 2)),
            gb = gv(gd["substring"](2, 4));
        gP = gh[gj](gP, gb), gq += 4;
      }

      return gP;
    }

    function g7() {
      var gP = gr(gk),
          gh = Q();
      return gP = H(gP), gP = gZ(gP, H(gh)), gP = H(gP), [gP, gh];
    }

    function g8(gP, gh) {
      var gf = gr(gh),
          gq = gr(gP);
      return gz(gZ(gf, gq));
    }

    function g9(gP, gh) {
      var gf = gS(gh),
          gq = gr(gP);
      return gO(gZ(gf, gq));
    }

    function gg(gP) {
      for (var gh = gr(gP), gf = g7(), gq = gT(gf, 2), ge = gq[0], gd = gq[1], gj = gr(gm(gh)), gb = q([]['concat'](Z(gh), Z(gj))), gG = G(gb), gA = []['concat'](Z(gd)), gV = ge, gn = 0, gt = gG["length"]; gn < gt; gn++) {
        var gu = gZ(g6(gG[gn]), ge),
            gU = gX(gu, gV);
        gu = gZ(gU, gV), gV = W(W(gu)), gp(gV, 0, gA, 64 * gn + 4, 64);
      }

      return gl(gA);
    }

    var gT = function () {
      function gP(gh, gf) {
        var gq = [],
            ge = !0,
            gd = !1,
            gj = void 0;

        try {
          for (var gb, gG = gh[Symbol["iterator"]](); !(ge = (gb = gG['next']())['done']) && (gq["push"](gb["value"]), !gf || gq["length"] !== gf); ge = !0);
        } catch (gA) {
          gd = !0, gj = gA;
        } finally {
          try {
            !ge && gG["return"] && gG['return']();
          } finally {
            if (gd) throw gj;
          }
        }

        return gq;
      }

      return function (gh, gf) {
        if (Array["isArray"](gh)) return gh;
        if (Symbol["iterator"] in Object(gh)) return gP(gh, gf);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        gB = F(25),
        gp = gB["copyToBytes"],
        gm = gB["genCrc32"],
        gv = gB['hexToByte'],
        gi = gB["hexsToBytes"],
        gR = gB["intToBytes"],
        ga = gB["paddingArrayZero"],
        gD = gB["shift"],
        gX = gB["shifts"],
        gO = gB["bytesToString"],
        gr = gB["stringToBytes"],
        gK = gB["toByte"],
        gF = gB["xor"],
        gZ = gB["xors"],
        gH = F(58),
        gS = gH["base64Decode"],
        gz = gH["base64Encode"],
        gl = gH["base64EncodePrivate"],
        gI = F(26),
        gL = gI["__SBOX__"],
        gk = gI["__SEED_KEY__"],
        gN = gI["__ROUND_KEY__"];

    K["aes"] = gg, K['xorEncode'] = g8, K['xorDecode'] = g9;
  }, function (B, m, v) {
    function R(q, j) {
      var b = {};

      for (var G in q) j["indexOf"](G) >= 0 || Object['prototype']["hasOwnProperty"]["call"](q, G) && (b[G] = q[G]);

      return b;
    }

    var D = Object["assign"] || function (q) {
      for (var j = 1; j < arguments["length"]; j++) {
        var b = arguments[j];

        for (var G in b) Object["prototype"]["hasOwnProperty"]["call"](b, G) && (q[G] = b[G]);
      }

      return q;
    },
        X = v(76),
        O = v(21),
        K = v(62),
        F = v(53),
        Z = v(3),
        H = 0,
        S = /MicroMessenger|Weibo/i["test"](window["navigator"]["userAgent"]),
        z = function (q) {
      return "string" == typeof q ? [q, q] : Array['isArray'](q) && 1 === q["length"] ? q["concat"](q) : q;
    },
        I = function () {
      var q = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return parseInt(new Date()['valueOf']() / q, 10);
    },
        L = {
      'script': function (q, j) {
        var b = this;
        this['cacheTime'] && (q = q + "?v=" + I(this["cacheTime"])), X(q, {
          'charset': "UTF-8"
        }, function (G, A) {
          var V = b["detectKey"];

          if (G || V && !window[V]) {
            var U = G && G["message"] || "unreliable script",
                W = new Error("Failed to load script(" + q + ').' + U);
            return W["data"] = {
              'url': q,
              'retry': !!b["_options"]["retry"]
            }, void j(W);
          }

          j({
            'scriptEl': A,
            '_originUrl': q
          });
        });
      },
      'image': function (q, j) {
        var b = this,
            G = document["createElement"]("img");
        G["onload"] = function () {
          G["onload"] = G["onerror"] = null, j({
            'width': G['width'],
            'height': G["height"],
            'src': q
          });
        }, G['onerror'] = function (A) {
          G['onload'] = G["onerror"] = null;
          var V = A && A["message"] || "unreliable image error",
              U = new Error("Failed to load image(" + q + ').' + V);
          U['data'] = {
            'url': q,
            'retry': !!b['_options']["retry"]
          }, j(U);
        }, G["src"] = q;
      },
      'audio': function (q, j) {
        var b = this;

        try {
          if (S) {
            var G = new XMLHttpRequest();
            G["open"]("GET", q), G["responseType"] = "blob", G["onload"] = function () {
              var U = new Blob([G["response"]], {
                'type': "audio/mpeg"
              }),
                  W = URL["createObjectURL"](U);
              j({
                'src': W
              });
            }, G["onerror"] = function () {
              G["onload"] = G["onerror"] = null;
              var U = G["statusText"] || "unreliable audio error",
                  W = G["status"] || '',
                  Y = new Error("Failed to load audio(" + q + ').' + U + '.' + W);
              Y["data"] = {
                'url': q,
                'retry': !!this["_options"]["retry"]
              }, j(Y);
            }, G['send']();
          } else {
            var A = new Audio();
            A["oncanplaythrough"] = function (U) {
              A["oncanplaythrough"] = A["onerror"] = null, j({
                'src': q
              });
            }, A["onerror"] = function (U) {
              A['oncanplaythrough'] = A['onerror'] = null;
              var W = A['error'] && A['error']['message'] || "unreliable audio error",
                  Y = A["error"] && A['code'] || '',
                  x = new Error("Failed to play audio(" + q + ').' + W + '.' + Y);
              x["data"] = {
                'url': q,
                'retry': !!b['_options']["retry"]
              }, j(x);
            }, A["src"] = q, A['load']();
          }
        } catch (U) {
          var V = new Error("not support audio");
          V["data"] = {
            'url': q,
            'retry': !!this["_options"]["retry"]
          }, j(V);
        }
      },
      'api': function (q, j, b) {
        var G = this;
        F(q, b, function (A, V, U) {
          if (A) {
            var W = A && A["message"] || "unreliable api error",
                Y = new Error("Failed to request api(" + q + ').' + W);
            return Y["data"] = {
              'url': q,
              'retry': !!G["_options"]['retry']
            }, void j(Y);
          }

          j(D({}, V, {
            '_originUrl': U["url"]
          }));
        }, {
          'timeout': this["timeout"]
        });
      }
    },
        k = function (q) {
      this['id'] = q['id'] || "resource_" + H++, this["type"] = q["type"] || "script", this["url"] = q["url"] || '', this["payload"] = q["payload"], this['timeout'] = q["timeout"] || 6000, this["cacheTime"] = q['cacheTime'] ? parseInt(q['cacheTime'], 10) : 0, this['detectKey'] = q["detectKey"] || '', this["_options"] = q, O['call'](this), this["load"](), this['setTimeout']();
    };

    K(k, O), Object["assign"](k["prototype"], {
      'load': function () {
        var q = this,
            j = L[this['type']];
        j && j["call"](this, this['url'], function (b) {
          return q["resolve"](b);
        }, this['payload']);
      },
      'addSupport': function (q, j, b) {
        ("function" != typeof L[q] || b) && (L[q] = j);
      },
      'setTimeout': function () {
        var q = this;
        window["setTimeout"](function () {
          var j = String(q['url']),
              b = new Error("Timeout: failed to request " + q["type"] + '(' + j + ').');
          b["data"] = {
            'url': j
          }, q["resolve"](b);
        }, this["timeout"]);
      }
    }), k["SUPPORTS"] = L;

    var N = function (q) {
      L["hasOwnProperty"](q) && (k[q] = function (j) {
        var b = j["disableRetry"],
            G = j["onProcess"],
            A = j["checkResult"],
            V = R(j, ["disableRetry", "onProcess", 'checkResult']);

        if (b) {
          var U = V['url'];
          return Array["isArray"](U) && (U = U[0] || ''), new k(D({}, V, {
            'url': U,
            'type': q
          }));
        }

        var W = z(j["url"]),
            Y = new O(),
            x = function M() {
          var C = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              E = function (g1) {
            var g2 = W["length"];
            C < g2 - 1 ? M(C + 1) : C === g2 - 1 && (g1["data"] = D({}, g1["data"], {
              'url': String(W),
              'requestId': g0['id']
            }), Y["resolve"](g1)), Z['isFn'](G) && G(J, g0['id'], q, {
              'status': "error",
              'error': g1,
              'index': C
            });
          },
              w = function (g1) {
            var g2 = g1 instanceof Error ? g1 : new Error("Failed to check result of " + J);
            g2["data"] = {
              'url': J,
              'retry': !!V['retry']
            }, E(g2);
          },
              Q = function (g1) {
            Z['isFn'](G) && G(J, g0['id'], q, {
              'status': "success",
              'res': g1
            }), Y["resolve"](g1);
          },
              J = W[C],
              g0 = new k(D({}, V, {
            'type': q,
            'url': J,
            'retry': C > 0
          }));

          Z["isFn"](G) && G(J, g0['id'], q, {
            'status': "start"
          }), g0["then"](function (g1) {
            if (!Z["isFn"](A)) return Q(g1);
            var g2 = A(g1);
            g2 instanceof O ? g2['then'](Q(g1))["catch"](function (g3) {
              return w(g3);
            }) : g2 ? Q(g1) : w();
          })["catch"](function (g1) {
            return E(g1);
          });
        };

        return x(0), Y;
      });
    };

    for (var P in L) N(P);

    k['all'] = function (q) {
      var j = 0,
          b = !1,
          G = new O(),
          A = [];
      return q["map"](function (V, U) {
        V["then"](function (W) {
          b || (A[U] = W, j++, j === q["length"] && G["resolve"](A));
        })["catch"](function (W) {
          b = !0, G["resolve"](W);
        });
      }), G;
    }, B["exports"] = k;
  }, function (B, p) {
    var m = function () {
      function v(R, a) {
        var D = [],
            X = !0,
            O = !1,
            K = void 0;

        try {
          for (var F, Z = R[Symbol["iterator"]](); !(X = (F = Z["next"]())["done"]) && (D["push"](F["value"]), !a || D["length"] !== a); X = !0);
        } catch (H) {
          O = !0, K = H;
        } finally {
          try {
            !X && Z["return"] && Z['return']();
          } finally {
            if (O) throw K;
          }
        }

        return D;
      }

      return function (R, a) {
        if (Array["isArray"](R)) return R;
        if (Symbol["iterator"] in Object(R)) return v(R, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();

    p["getDocFragmentRegex"] = function (v, R) {
      return new RegExp('<' + v + "\\s*([\\s\\S]+)?(?!%)>([\\s\\S]+)?<\\/" + v + '>', R ? 'g' : '');
    }, p['isPlainObject'] = function (v) {
      return "[object Object]" === Object['prototype']["toString"]["call"](v) && v && v["constructor"] === Object;
    }, p["getIn"] = function (v, R, a) {
      "string" == typeof R && (R = R["split"]('.'));

      for (var D = 0, X = R['length']; D < X; D++) {
        var O = R[D];
        if (D < X - 1 && !v[O]) return a;
        v = v[O];
      }

      return v;
    }, p['parseAttrsStr'] = function () {
      var v = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          R = v['match'](/[^<>*+\s=]+(?:=".*?")?/g);
      if (!R) return {
        'props': {},
        'bound': {}
      };
      var a = {},
          D = {};
      return R["map"](function (X) {
        var O = X["split"]('='),
            K = m(O, 2),
            F = K[0],
            Z = K[1];
        void 0 === Z && (Z = !0);

        try {
          Z = JSON["parse"](Z);
        } catch (S) {
          console && console["error"](S);
        }

        if (0 === F["indexOf"](':')) {
          var H = !1;
          F = F["substring"](1);

          try {
            Z = JSON["parse"](Z);
          } catch (z) {
            D[F] = Z, H = !0;
          }

          !H && (a[F] = Z);
        }

        0 === F["indexOf"]('@') ? (F = F["substring"](1), D[F] = Z) : a[F] = Z;
      }), {
        'props': a,
        'bound': D
      };
    }, p["nextTick"] = function (v) {
      window['Promise'] ? Promise["resolve"]()["then"](v) : window["setTimeout"](v, 0);
    }, p['diffDataToUpdate'] = function (v, R) {
      var a = {};

      for (var D in v) {
        var X = v[D];
        X !== R[D] && (a[D] = X);
      }

      return a;
    }, p["lifeCycleHooks"] = ['beforeCreate', "created", "beforeMount", 'mounted', 'beforeDestroy'];
  }, function (B, p, m) {
    function v(D) {
      var X = this;
      a['mixin'](this);

      var O = function (K) {
        return X["resolve"](K);
      },
          r = function (K) {
        return X["resolve"](K);
      };

      "function" == typeof D && D(O, r);
    }

    var R = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (D) {
      return typeof D;
    } : function (D) {
      return D && "function" == typeof Symbol && D["constructor"] === Symbol && D !== Symbol['prototype'] ? 'symbol' : typeof D;
    },
        a = m(21);
    v['all'] = function (D) {
      return new v(function (X, O) {
        var r = 0,
            K = !1,
            F = [];
        D['map'](function (Z, H) {
          Z["then"](function (S) {
            K || (F[H] = S, r++, r === D["length"] && X(F));
          })["catch"](function (S) {
            K = !0, O(S);
          });
        });
      });
    }, v["resolve"] = function (D) {
      return D && "object" === ("undefined" == typeof D ? "undefined" : R(D)) && "function" == typeof D["then"] ? D : new v(function (X) {
        return X(D);
      });
    }, v['reject'] = function (D) {
      return new v(function (X, O) {
        return O(D);
      });
    }, B["exports"] = v;
  }, function (B, p) {
    var m = {
      'FETCH_CAPTCHA': 'FETCH_CAPTCHA',
      'FETCH_INTELLISENSE_CAPTCHA': 'FETCH_INTELLISENSE_CAPTCHA',
      'VERIFY_CAPTCHA': "VERIFY_CAPTCHA",
      'VERIFY_INTELLISENSE_CAPTCHA': 'VERIFY_INTELLISENSE_CAPTCHA',
      'RESET_STATE': 'RESET_STATE'
    };
    B["exports"] = m;
  }, function (B, X, K) {
    function F(gF, gZ, gH) {
      return gZ in gF ? Object['defineProperty'](gF, gZ, {
        'value': gH,
        'enumerable': !0,
        'configurable': !0,
        'writable': !0
      }) : gF[gZ] = gH, gF;
    }

    function Z(gF, gZ) {
      if (!gF) return {};
      var gH = gF["customStyles"],
          gS = gF["width"],
          gz = gF["minWidth"],
          gl = parseInt(gH["controlBar"]["height"], 10),
          gI = parseInt(gH['gap'], 10),
          gL = Math["max"](parseInt(gS, 10), parseInt(gz, 10)) / 2;
      return {
        'controlBarHeight': gl,
        'imagePanelHeight': gZ ? 0 : gL,
        'gapHeight': gZ ? 0 : gI,
        'total': gZ ? gl : gl + gI + gL
      };
    }

    var H,
        L = K(3),
        q = K(4),
        j = K(5),
        G = j["CAPTCHA_TYPE"],
        V = j["CAPTCHA_CLASS"],
        U = j['WIDTH_LIMIT'],
        W = j["SIZE_TYPE"],
        Q = j["LARGE_SIZE_TYPE"],
        J = j['RTL_LANGS'],
        g0 = j["FEEDBACK_URL"],
        g1 = K(17),
        g2 = g1['applyColorIfNeed'],
        g3 = g1["applyStyleIfNeed"],
        g4 = K(19),
        g5 = K(6),
        g6 = g5["SWITCH_TYPE"],
        g7 = g5["INVOKE_HOOK"],
        g8 = g5["EVENT_RESET"],
        g9 = g5['SWITCH_LOAD_STATUS'],
        gg = g5['UPDATE_VERIFY_STATUS'],
        gT = g5["REFRESH"],
        gB = g5['EVENT_RESET_CLASSIC'],
        gp = g5["SET_TOKEN"],
        gm = K(14),
        gv = gm["FETCH_CAPTCHA"],
        gi = gm["VERIFY_CAPTCHA"],
        gR = gm["RESET_STATE"],
        ga = K(36),
        gD = K(37),
        gX = K(38),
        gO = K(35),
        gr = K(39),
        gK = K(34);
    B['exports'] = {
      'el': ".yidun",
      'template': K(73),
      'props': {
        'autoWidth': {
          'type': Boolean,
          'default': !1
        },
        'intellisense': {
          'type': Boolean,
          'default': !1
        },
        'enableColor': {
          'type': Boolean,
          'default': !1
        },
        'onWidthGeted': Function
      },
      'data': function () {
        var gF = this['$store']['state'],
            gZ = gF["captchaType"],
            gH = gF['langPkg'],
            gS = gF["config"],
            gz = gF["load"],
            gl = gF['verifyStatus'],
            gI = gF["smsNew"],
            gL = gF['smsVersion'],
            gk = q['isMobile'] && this["intellisense"] && "bind" !== gS["mode"] ? '260px' : gS['width'];
        return {
          'captchaId': gS["captchaId"],
          'captchaType': gZ,
          'theme': gS["theme"],
          'customStyles': gS["customStyles"],
          'feedback': {
            'url': g0,
            'enable': !!gS["feedbackEnable"]
          },
          'mode': 'bind' === gS["mode"] ? "popup" : this['intellisense'] ? "embed" : gS["mode"],
          'width': this["autoWidth"] ? "auto" : gk,
          'size': gS['size'],
          'minWidth': U[0] + 'px',
          'langPkg': gH,
          'smsNew': gI,
          'smsVersion': gL,
          'load': gz,
          'verifyStatus': gl,
          'verifyPayload': null,
          'inferences': [0, 1, 2, 3, 4, 5, 6, 7],
          'audio': gS["__serverConfig__"]["audio"] && q["supportAudio"],
          'fixedAudio': !1,
          'isRtlLang': J["indexOf"](gS["lang"]) !== -1,
          'isMobile': q["isMobile"],
          'disableFocusVisible': gS["disableFocusVisible"]
        };
      },
      'on': (H = {}, F(H, '.' + V['REFRESH'] + " click", function (gF) {
        this["switchTypeAndRefresh"](gF);
      }), F(H, ".yidun_tips click", function () {
        var gF = this["$store"]["state"],
            gZ = gF['config'],
            gH = gF["countsOfVerifyError"],
            gS = gF["verifyStatus"];
        "error" === gS && gH > gZ["maxVerification"] && this["$store"]["commit"](gB);
      }), H),
      'watch': {
        'captchaType': function (gF, gZ) {
          gF !== gZ && this["updateUIByType"](gF, gZ);
        }
      },
      'mounted': function () {
        var gF = this,
            gZ = this["$store"]['state'],
            gH = gZ["config"],
            gS = gZ["token"];
        g2(gH['customStyles']["primaryColor"], this["$el"], this["enableColor"]), g3(gH["customStyles"], this["$el"], this["enableColor"]), this['_baseClassNames'] = this['$el']["className"]["trim"](), this["_removeEvents"] = this["initEvents"](), this["_unsubscribe"] = this["$store"]["subscribe"](function (gz, gl) {
          var gI = gz["type"],
              gL = gz['payload'],
              gk = gl["captchaType"],
              gN = gl['load'],
              gP = gl["verifyStatus"];

          switch (gI) {
            case g6:
              gF["$setData"]({
                'captchaType': gk
              });
              break;

            case g9:
              gF["$setData"]({
                'load': gN
              }), gN && "done" === gN["status"] && gF["$store"]['commit'](g7, {
                'name': 'onDidRefresh'
              });
              break;

            case gg:
              gF["$setData"]({
                'verifyStatus': gP,
                'verifyPayload': gL
              });
              break;

            case g8:
              gF['$setData']({
                'fixedAudio': !1
              }), !gF['intellisense'] && gF["reset"]();
              break;

            case gB:
              var gh = gF["intellisense"] ? {
                'token': gS
              } : null;
              gF['$setData']({
                'fixedAudio': !1
              }), gF["reset"](gh);
              break;

            case gp:
              gF["setFeedbackUrl"]();
          }
        }), this["intellisense"] || this['reset']({
          'token': gS
        }), "bind" === gH["mode"] && this["refresh"]({
          'token': gS
        });
      },
      'beforeDestroy': function () {
        this["_unsubscribe"](), this["_removeEvents"]();
      },
      'render': function (gF) {
        var gZ = gF["captchaType"],
            gH = gF["load"],
            gS = gF['verifyStatus'],
            gz = gF['verifyPayload'];
        "undefined" != typeof gZ && this['switchCaptchaType'](gZ), 'undefined' != typeof gH && this["changeLoadStatus"](gH), "undefined" != typeof gS && this['updateVerifyStatus'](gS, gz);
      },
      'methods': {
        'initEvents': function () {
          var gF = this,
              gZ = void 0;
          "float" === this["mode"] && (gZ = this["initFloatMode"]());

          var gH = function (gl) {
            /^IMG$/i['test'](gl["target"]["tagName"]) && gl["preventDefault"]();
          };

          q['on'](this["$el"], "dragstart", gH);

          var gS = function (gl) {
            gF["switchTypeAndRefresh"](gl, !0);
          },
              gz = q["find"]('.yidun_top__audio', this["$el"]);

          return gz && q['on'](gz, 'click', gS, !0), function () {
            gZ && gZ(), q["off"](gF["$el"], 'dragstart', gH), gz && q["off"](gz, "click", gS, !0);
          };
        },
        'initFloatMode': function () {
          var gF = this,
              gZ = q["find"]('.' + V['PANEL'], this['$el']),
              gH = q["find"]('.' + V["CONTROL"], this["$el"]),
              gS = !1,
              gz = null,
              gl = null,
              gI = q["transition"](gZ, {
            'name': 'panel_ease_' + this['customStyles']["imagePanel"]["align"],
            'insert': function (gj) {
              gj["style"]["display"] = "block", gS = !0;
            },
            'afterLeave': function (gj) {
              gj["style"]["display"] = "none", gS = !1;
            },
            'leaveCanceled': function (gj) {
              gj['style']['display'] = 'none', gS = !1;
            }
          }),
              gL = this,
              gk = function (gj) {
            gL["panelVisible"] = !gj, gL["$children"] && gL['$children']['map'](function (gb) {
              gb['floatStatusChange'] && gb["floatStatusChange"]();
            }), q["isMobile"] && setTimeout(function () {
              gL["_isMounted"] && gL["$store"]['commit'](g7, {
                'name': 'onFloatHeightChange',
                'args': [Z(gL["$data"], gj)]
              });
            }, 200);
          },
              gN = !0,
              gP = function (gj) {
            if (gF['_isMounted']) {
              var gb = gj["relatedTarget"] && gF['$el']['contains'](gj['relatedTarget']);
              if ((gN || !gb || "mouseover" !== gj["type"]) && (gN = !1, window["clearTimeout"](gl), gI["cancelLeave"](), 'success' !== gF["$store"]["state"]["verifyStatus"])) return gS ? gk() : void (gz = window["setTimeout"](function () {
                var gG = document["activeElement"];
                gG && gG !== document["body"] && gG['blur'](), gI['enter'](), gk();
              }, 300));
            }
          },
              gh = function (gj) {
            if (gF["_isMounted"]) {
              var gb = gj["relatedTarget"] && gF['$el']["contains"](gj["relatedTarget"]),
                  gG = !(q["isMobile"] || !q["supportTouch"]) && null === gj["relatedTarget"];

              if (!gb && !gG || "mouseout" !== gj["type"]) {
                gN = !0;
                var gA = q["getBubblePath"](gj["target"]);

                if (!(~['touchstart', "pointerdown"]["indexOf"](gj['type']) && ~gA["indexOf"](gF['$el']) || ~["mouseleave", "pointerleave"]["indexOf"](gj['type']) && null === gj["event"]["relatedTarget"])) {
                  window["clearTimeout"](gz), gI["cancelEnter"]();
                  var gV = gF["$children"][0],
                      gn = gV && gV["drag"];
                  !gS || gn && 'dragging' === gn['status'] || (gl = window["setTimeout"](function () {
                    gI["leave"](), gk(!0);
                  }, 300));
                }
              }
            }
          },
              gf = this["$store"]['subscribe'](function (gj, gb) {
            var gG = gj["type"];
            gG === gg && "success" === gb["verifyStatus"] && (gI["leave"](), gk(!0));
          }),
              gq = L['msie'](),
              ge = gq ? "mouseenter" : "mouseover",
              gd = gq ? 'mouseleave' : 'mouseout';

          switch (q['on'](gH, "focus", gP), !0) {
            case q["isMobile"]:
              q['on'](gH, "touchstart", gP), q['on'](document["body"], "touchstart", gh);
              break;

            case !q['isMobile'] && q['supportTouch']:
              q['on'](gH, "touchstart", gP), q['on'](document['body'], "touchstart", gh), q['on'](this['$el'], ge, gP), q['on'](this['$el'], gd, gh);
              break;

            case q['supportPointer']:
              q['on'](gH, "pointerdown", gP), q['on'](document['body'], 'pointerdown', gh), q['on'](this["$el"], "pointerenter", gP), q['on'](this['$el'], "pointerleave", gh);
              break;

            default:
              q['on'](this["$el"], ge, gP), q['on'](this['$el'], gd, gh);
          }

          return function () {
            q["off"](gH, 'focus', gP), q["off"](gF['$el'], ge, gP), q["off"](gF["$el"], gd, gh), q['off'](gH, "touchstart", gP), q['off'](document["body"], "touchstart", gh), q["supportPointer"] && (q["off"](gH, "pointerdown", gP), q['off'](document["body"], 'pointerdown', gh), q["off"](gF['$el'], "pointerenter", gP), q["off"](gF["$el"], 'pointerleave', gh)), gf(), gI["dispose"]();
          };
        },
        'switchTypeAndRefresh': function (gF, gZ) {
          gF["stopPropagation"]();
          var gH = this['$store']["state"],
              gS = gH["config"],
              gz = gH['countsOfVerifyError'],
              gl = gH['verifyStatus'];
          gz > gS["maxVerification"] || "verifying" === gl && this["captchaType"] !== G['SMS'] || this["load"] && "loading" === this["load"]["status"] || (void 0 !== gZ && this['$setData']({
            'fixedAudio': gZ
          }), this['refresh']());
        },
        'fetchCaptcha': function (gF, gZ) {
          var gH = {
            'width': this["getWidth"](),
            'audio': this["fixedAudio"] || !1,
            'sizeType': this['getSizeType']()
          };
          this['smsNew'] && (gH["smsVersion"] = this["smsVersion"]), gH["token"] = this["intellisense"] ? this['$store']["state"]["token"] : this["$store"]["state"]['previousToken'], Object["assign"](gH, gF), this['$store']["dispatch"](gv, gH, gZ), this["onWidthGeted"] && "function" == typeof this["onWidthGeted"] && this["onWidthGeted"]();
        },
        'verifyCaptcha': function (gF) {
          this["$store"]['commit'](gg, {
            'verifyStatus': 'verifying'
          });
          var gZ = this["$store"]['state']["token"];
          this['$store']['dispatch'](gi, Object['assign']({
            'token': gZ,
            'width': this["getWidth"]()
          }, gF));
        },
        'reset': function (gF) {
          this["$store"]['dispatch'](gR), this["refresh"](gF);
        },
        'refresh': function (gF, gZ) {
          var gH = this['$children'][0];
          gH && gH['reset'](), this["$store"]["commit"](gT), this['fetchCaptcha'](gF, gZ);
        },
        'updateUIByType': function (gF, gZ) {
          gZ && q['delClass'](this["$el"], this["getCaptchaTypeClassName"](gZ)), q["addClass"](this['$el'], this['getCaptchaTypeClassName'](gF));
        },
        'getCaptchaTypeClassName': function (gF) {
          return gF ? V['CAPTCHA'] + '--' + L['getObjKey'](G, gF)['toLowerCase']() : '';
        },
        'getWidth': function () {
          return this["$el"]['offsetWidth'];
        },
        'getSizeType': function () {
          return Object['keys'](Q)["indexOf"](this["size"]) !== -1 ? W["LARGE"] : W["DEFAULT"];
        },
        'resetClassNames': function () {
          for (var gF = this["_baseClassNames"]['split'](/\s+/), gZ = arguments["length"], gH = Array(gZ), gS = 0; gS < gZ; gS++) gH[gS] = arguments[gS];

          this["$el"]["className"] = g4(gF, this['getCaptchaTypeClassName'](this['captchaType']), gH);
        },
        'switchCaptchaType': function (gF) {
          if (gF) {
            var gZ = G["JIGSAW"],
                gH = G["POINT"],
                gS = G['SMS'],
                gz = G["ICON_POINT"],
                gl = G["WORD_GROUP"],
                gI = G['INFERENCE'],
                gL = G['AVOID'],
                gk = G["WORD_ORDER"],
                gN = G['SPACE'],
                gP = G["VOICE"],
                gh = {
              'el': this["$el"],
              'propsData': {
                'loadInfo': this['load'],
                'mode': this["mode"],
                'size': this["size"],
                'type': gF,
                'onVerifyCaptcha': this["verifyCaptcha"]["bind"](this),
                'fixedAudio': this['fixedAudio'],
                'isRtlLang': this["isRtlLang"]
              },
              '_boundProps': {
                'loadInfo': 'load'
              },
              '$parent': this
            },
                gf = this['$children'][0];

            switch (gf && gf["$destroy"](), gF) {
              case gZ:
                gf = new ga(gh);
                break;

              case gH:
              case gz:
              case gl:
              case gk:
              case gN:
                gf = new gD(gh);
                break;

              case gS:
                gf = new gX(gh);
                break;

              case gI:
                gf = new gO(gh);
                break;

              case gP:
                gf = new gr(gh);
                break;

              case gL:
                gf = new gK(gh);
            }

            gf["$forceUpdate"](), this["$children"] = [gf];
          }
        },
        'changeLoadStatus': function (gF) {
          if (gF) {
            var gZ = V["CAPTCHA"],
                gH = V["LOADING"],
                gS = V["LOADFAIL"],
                gz = V["LOADTEXT"],
                gl = q["find"]('.' + gz, this['$el']),
                gI = q["find"](".yidun_tips__text", this["$el"]),
                gL = q["find"]('.yidun_tips__answer', this["$el"]),
                gk = this["$store"]["state"]["langPkg"],
                gN = gF["status"],
                gP = gF["data"];

            switch (gN) {
              case "loading":
                gP || (this["resetClassNames"](gZ + '--' + gH), q["text"](gl, gk["loading"]), q["text"](gI, gk['loading']), q["addClass"](gL, "hide"));
                break;

              case "done":
                this['resetClassNames']();
                break;

              case "fail":
                this["resetClassNames"](gZ + '--' + gS), q["supportAudio"] || this["captchaType"] !== G["VOICE"] ? (q['text'](gl, gk["loadfail"]), q['text'](gI, gk['loadfail'])) : (q["text"](gl, gk["notSupportVoice"]), q["text"](gI, gk["notSupportVoice"])), q["addClass"](gL, "hide");
            }

            "done" !== gN || this["intellisense"] || this["isReady"] || (this["isReady"] = !0, this["$store"]['commit'](g7, {
              'name': "onReady"
            }));
          }
        },
        'updateVerifyStatus': function (gF, gZ) {
          var gH = this,
              gS = V["CAPTCHA"],
              gz = V["SUCCESS"],
              gl = V["VERIFY"],
              gI = V["ERROR"],
              gL = q["find"]('.yidun_tips__text', this["$el"]),
              gk = q["find"]('.yidun_tips__answer', this["$el"]),
              gN = q["find"](".yidun_slider__icon--img", this["$el"]),
              gP = this['$data']["customStyles"],
              gh = gP["controlBar"],
              gf = void 0 === gh ? {} : gh,
              gq = gP["icon"],
              ge = void 0 === gq ? {} : gq,
              gd = this['$store']["state"],
              gj = gd["langPkg"],
              gb = gd["config"],
              gG = gd["countsOfVerifyError"],
              gA = function (gU) {
            !ge["slider"] && gN && (gU ? (gN["src"] = gU, gN['style']["display"] = "block") : gN['style']["display"] = "none");
          };

          switch (gF) {
            case 'verifying':
              this["resetClassNames"](gS + '--' + gl);
              break;

            case 'success':
              this['resetClassNames'](gS + '--' + gz), this['captchaType'] === G['JIGSAW'] ? q['text'](gL, '') : q["text"](gL, gj["verifySuccess"]), q['addClass'](gk, 'hide'), gA(gf["slideIconSuccess"]);
              break;

            case "error":
              var gV = gG > gb['maxVerification'],
                  gn = gS + '--' + gI,
                  gt = gV ? gn + " yidun--maxerror" : gn;

              if (this["resetClassNames"](gt), gV ? q["text"](gL, gj["verifyOutOfLimit"]) : this["captchaType"] === G["JIGSAW"] ? q['text'](gL, '') : q["text"](gL, gj["verifyError"]), q['addClass'](gk, "hide"), gA(gf["slideIconError"]), !gV) {
                var gu = [G["POINT"], G["INFERENCE"], G["WORD_ORDER"], G["ICON_POINT"], G["WORD_GROUP"], G['SPACE']]["indexOf"](this["captchaType"]) > -1 ? 1200 : gb["refreshInterval"];
                this["captchaType"] === G["VOICE"] && (gu = 2500), window["setTimeout"](function () {
                  return gH['refresh']();
                }, gu);
              }

          }
        },
        'setFeedbackUrl': function () {
          var gF = q["find"]('.yidun_feedback', this["$el"]);

          if (gF) {
            var gZ = this["$store"]['state']['token'];
            gF["href"] = this["feedback"]["url"] + '?' + L["encodeUrlParams"]({
              'captchaId': this["captchaId"],
              'token': gZ
            });
          }
        },
        'shouldHandleFloatChange': function (gF) {
          var gZ = this["$store"]["state"],
              gH = gZ["countsOfVerifyError"],
              gS = gZ['verifyStatus'],
              gz = gZ["config"];
          return !(gH > gz["maxVerification"]) && (!gF || "done" === gF["status"]) && !gS;
        }
      }
    };
  }, function (B, R, D) {
    function X(E, w) {
      var Q = {};

      for (var J in E) w['indexOf'](J) >= 0 || Object["prototype"]["hasOwnProperty"]["call"](E, J) && (Q[J] = E[J]);

      return Q;
    }

    function O(E) {
      E['stopPropagation'](), E["nativeEvent"]["stopPropagation"](), this["close"](A['USER']);
    }

    function K(E) {
      return /[%|em|rem]/["test"](E);
    }

    function F(E, w, Q) {
      return w = w || E, Q = Q || E, K(w) || K(Q) ? 0 : (w = parseFloat(w, 10), Q = parseFloat(Q, 10), G[0] + w + Q + 2);
    }

    function Z(Q, J, g0) {
      if (!J) return Q;
      var g1 = Object["assign"]({}, Q, J),
          g2 = g1["capPadding"],
          g3 = g1["capPaddingTop"],
          g4 = g1["capPaddingRight"],
          g5 = g1['capPaddingBottom'],
          g6 = g1["capPaddingLeft"],
          g7 = g1["capBarHeight"],
          g8 = g1['capBarTextSize'],
          g9 = g1["width"],
          gg = g1['top'],
          gT = g1["bottom"],
          gB = g1["opacity"],
          gp = g1["radius"],
          gm = g1['paddingTop'],
          gv = g1["paddingBottom"],
          gi = g1["position"],
          gR = X(g1, ["capPadding", "capPaddingTop", "capPaddingRight", 'capPaddingBottom', "capPaddingLeft", "capBarHeight", "capBarTextSize", "width", "top", 'bottom', 'opacity', "radius", "paddingTop", "paddingBottom", "position"]);
      g2 = parseFloat(g2, 10), g2 = g2 && 0 !== g2 ? g2 : Q['capPadding'], g3 = g3 && parseFloat(g3, 10), g4 = g4 && parseFloat(g4, 10), g5 = g5 && parseFloat(g5, 10), g6 = g6 && parseFloat(g6, 10), g7 = 0 !== g7 && M(g7) || M(Q['capBarHeight']), g8 = M(g8), gp = M(gp), gm = M(gm), gv = M(gv), gB = parseFloat(gB), !gB && 0 !== gB && (gB = Q["opacity"]), 'static' === gi && (gi = Q["position"]);
      var ga = "auto" !== g9;

      if (ga) {
        var gD = F(g2, g4, g6);
        (g0 <= 1 || !K(g9)) && (g9 = parseFloat(g9, 10) || 0, g9 = g9 > gD ? g9 : gD, g9 += 'px');
      }

      "auto" !== gT && (gg = "auto", "number" === z["typeOf"](gT) || Number(gT) || '0' === gT ? gT += 'px' : /\d+(\.\d+)?(px|rem)/["test"](gT) || (gT = parseFloat(gT, 10) || 0, gT = gT >= 0 && gT <= 100 ? gT + '%' : Q["bottom"]));
      var gX = "auto" !== gg;
      return gX && ("number" === z['typeOf'](gg) || Number(gg) || '0' === gg ? gg += 'px' : /\d+(\.\d+)?(px|rem)/["test"](gg) || (gg = parseFloat(gg, 10) || 0, gg = gg >= 0 && gg <= 100 ? gg + '%' : Q["top"])), H({
        'width': g9,
        'top': gg,
        'bottom': gT,
        'capPadding': g2,
        'capPaddingTop': g3,
        'capPaddingRight': g4,
        'capPaddingBottom': g5,
        'capPaddingLeft': g6,
        'capBarHeight': g7,
        'capBarTextSize': g8,
        'opacity': gB,
        'radius': gp,
        'paddingTop': gm,
        'paddingBottom': gv,
        'position': gi
      }, gR);
    }

    var H = Object['assign'] || function (E) {
      for (var w = 1; w < arguments["length"]; w++) {
        var Q = arguments[w];

        for (var J in Q) Object["prototype"]["hasOwnProperty"]['call'](Q, J) && (E[J] = Q[J]);
      }

      return E;
    },
        S = D(4),
        z = D(3),
        I = D(6),
        L = I['UPDATE_VERIFY_STATUS'],
        N = I['EVENT_CLOSE'],
        P = D(15),
        q = D(5),
        j = q["RTL_LANGS"],
        G = q['WIDTH_LIMIT'],
        A = q["CLOSE_SOURCE"],
        V = D(17),
        U = V["applyColorIfNeed"],
        W = V["applyStyleIfNeed"],
        M = D(23),
        C = {
      'capPadding': 15,
      'capBarHeight': 50,
      'width': "auto",
      'top': "20%",
      'opacity': 0.3,
      'position': '',
      'bottom': 'auto'
    };

    B["exports"] = {
      'el': ".yidun_popup",
      'template': D(75),
      'components': {
        'captcha-core': P
      },
      'props': {
        'autoOpen': {
          'type': Boolean,
          'default': !0
        },
        'intellisense': {
          'type': Boolean,
          'default': !1
        },
        'enableColor': {
          'type': Boolean,
          'default': !1
        },
        'onOpen': Function,
        'onBeforeClose': Function,
        'onClose': Function,
        'onWidthGeted': Function
      },
      'data': function () {
        var E = this["$store"]["state"],
            w = E['langPkg'],
            Q = E["config"],
            J = H({}, C, Q["appendTo"] ? {
          'top': "auto"
        } : {}),
            g0 = Z(J, Q["popupStyles"], Q['apiVersion']),
            g1 = "auto" !== g0["width"],
            g2 = "auto" !== g0["top"],
            g3 = "auto" !== g0["bottom"];
        return {
          'langPkg': w,
          'widthIsNotAuto': g1,
          'width': g0["width"],
          'topIsNotAuto': g2,
          'bottomIsNotAuto': g3,
          'theme': Q["theme"],
          'size': Q['size'],
          'curCloseSource': '',
          'popupStyles': g0,
          'appendTo': Q["appendTo"],
          'isRtlLang': j["indexOf"](Q["lang"]) !== -1,
          'enableClose': Q["enableClose"],
          'hideCloseBtn': Q["hideCloseBtn"],
          'disableMaskClose': Q["disableMaskClose"],
          'enableAutoFocus': Q["enableAutoFocus"],
          'disableFocusVisible': Q['disableFocusVisible'],
          'bodyCloseModalFn': this["bodyCloseModal"]["bind"](this)
        };
      },
      'on': Object['assign']({
        ".yidun_modal__close click": O
      }, {
        ".yidun_popup__mask click": function (E) {
          this["disableMaskClose"] || O['call'](this, E);
        }
      }),
      'mounted': function () {
        var E = this,
            w = this["$store"]["state"]["config"];
        U(w["customStyles"]["primaryColor"], this["$el"], this["enableColor"]), W(w['customStyles'], this["$el"]);
        var Q = S["find"](".yidun_modal", this["$el"]),
            J = S["find"](".yidun_popup__mask", this["$el"]),
            g0 = null,
            g1 = this['popupStyles']["opacity"];
        S['on'](this["appendTo"] ? J : document, "click", this['bodyCloseModalFn']), this["_transition"] = S["transition"](Q, {
          'name': "popup_ease",
          'beforeEnter': function () {
            J["style"]["opacity"] = '0', E["onOpen"] && E['onOpen'](), E["enableAutoFocus"] && document["activeElement"] && document['activeElement'] !== Q && (g0 = document["activeElement"]);
          },
          'insert': function () {
            if (E["$el"]["style"]["display"] = "block", E['$store']["state"]["config"]["apiVersion"] > 1 && K(E["width"]) && E["widthIsNotAuto"]) {
              var g2 = F(E["popupStyles"]['capPadding']);
              Q["offsetWidth"] < g2 && (E["$setData"]({
                'width': g2 + 'px'
              }), Q["style"]["width"] = g2 + 'px');
            }

            E["enableAutoFocus"] && Q["focus"]();
          },
          'enter': function () {
            J['style']["opacity"] = g1;
          },
          'leave': function () {
            J["style"]['opacity'] = '0';
          },
          'afterLeave': function () {
            var g2 = E["onClose"];
            E['$el']["style"]["display"] = "none", E["$store"]["commit"](N), g2 && g2(E['curCloseSource']), E["enableAutoFocus"] && g0 && g0['focus']();
          }
        }), this['_unsubscribe'] = this['$store']["subscribe"](function (g2, g3) {
          var g4 = g2["type"];
          g4 === L && "success" === g3["verifyStatus"] && window["setTimeout"](function () {
            E["close"]();
          }, 500);
        }), this["autoOpen"] && this["open"]();
      },
      'beforeDestroy': function () {
        this['_transition']['dispose'](), S["off"](this["appendTo"] ? S["find"](".yidun_popup__mask", this["$el"]) : document, "click", this['bodyCloseModalFn']);
      },
      'methods': {
        'onWidthGetedForCore': function () {
          this["onWidthGeted"] && "function" == typeof this["onWidthGeted"] && this["onWidthGeted"](this['$el']);
        },
        'open': function () {
          var E = this;
          z["nextFrame"](function () {
            return E['_transition']["enter"]();
          });
        },
        'bodyCloseModal': function (E) {
          var w = S['className'](E["target"]);
          w && w['search'](/yidun/g) > -1 || this['close'](A['USER']);
        },
        'close': function (E) {
          this["$store"]['state']["config"]['enableClose'] || this["closeModal"](E);
        },
        'closeModal': function () {
          var E = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : A['PROCESS'];
          this['_isMounted'] && 'none' !== this["$el"]["style"]["display"] && (this['$store']["state"]['config']["enableClose"] && (E = A["CLOSE"]), this["onBeforeClose"] && this['onBeforeClose'](), this["curCloseSource"] = E, this["_transition"]['leave']());
        },
        'refresh': function () {
          var E = this['$children'][0];
          E && E["refresh"]["apply"](E, arguments);
        }
      }
    };
  }, function (B, p, m) {
    function v(X, O) {
      var K = !(arguments['length'] > 2 && void 0 !== arguments[2]) || arguments[2];

      if (X && K) {
        var F = D['uuid'](),
            Z = "\n    .yidun_intellisense .yidun_intelli-tips:hover .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--checking .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--loading .yidun_intelli-icon,\n    .yidun.yidun--jigsaw .yidun_control .yidun_slider:hover,\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slider {\n      background-color: " + X + ";\n    }\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      border-color: " + X + ";\n    }\n  ",
            H = Object["assign"]([["NECaptcha-color__" + F, Z]]);
        a(H, O);
      }
    }

    function R(X, O) {
      var K = !(arguments['length'] > 2 && void 0 !== arguments[2]) || arguments[2];

      if (K) {
        var F = X["controlBar"],
            Z = X["imagePanel"],
            H = '';

        if (F) {
          var S = F['borderColor'],
              z = F["background"],
              I = F["borderColorMoving"],
              L = F['backgroundMoving'],
              N = F["borderColorSuccess"],
              P = F['backgroundSuccess'],
              q = F["borderColorError"],
              j = F['backgroundError'],
              G = F['slideBackground'],
              A = F['textSize'],
              V = F['textColor'],
              U = F["paddingLeft"];
          H += "\n    .yidun.yidun-custom.yidun--light .yidun_control,\n    .yidun.yidun-custom.yidun--dark .yidun_control {\n      " + (S ? "border-color: " + S : '') + ";\n      " + (z ? "background: " + z : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      " + (I ? "border-color: " + I : '') + ";\n      " + (L ? "background: " + L : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slider,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slider {\n      " + (I ? "background: " + I : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_control .yidun_slide_indicator {\n      " + (N ? "border-color: " + N : '') + ";\n      " + (P ? "background: " + P : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--success .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--success .yidun_control .yidun_slider {\n      " + (N ? "background: " + N : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--success:not(.yidun--jigsaw) .yidun_control {\n      " + (N ? "border-color: " + N : '') + ";\n      " + (P ? "background: " + P : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_tips {\n      " + (N ? "color: " + N : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_control .yidun_slide_indicator {\n      " + (q ? "border-color: " + q : '') + ";\n      " + (j ? "background: " + j : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--error .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--error .yidun_control .yidun_slider {\n      " + (q ? "background: " + q : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error:not(.yidun--jigsaw) .yidun_control {\n      " + (q ? "border-color: " + q : '') + ";\n      " + (j ? "background: " + j : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_control {\n      " + (q ? "border-color: " + q : '') + ";\n      " + (j ? "background: " + j : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_tips {\n      " + (q ? "color: " + q : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_tips {\n      " + (q ? "color: " + q : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_slider {\n      " + (G ? "background: " + G : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_slider.yidun_slider--hover:hover,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_slider.yidun_slider--hover:hover {\n      " + (I ? "background: " + I : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_tips__content,\n    .yidun.yidun-custom.yidun--dark .yidun_tips__content {\n      " + (A ? "font-size: " + A : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light:not(.yidun--error):not(.yidun--success) .yidun_tips,\n    .yidun.yidun-custom.yidun--dark:not(.yidun--error):not(.yidun--success) .yidun_tips {\n      " + (V ? "color: " + V : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_tips {\n      " + (U ? "padding-left: " + U : '') + ";\n    }\n  ";
        }

        if (Z) {
          var W = Z["loadBackgroundImage"],
              M = Z["loadBackgroundColor"];
          H += "\n    .yidun.yidun-custom.yidun--light .yidun_loadbox,\n    .yidun.yidun-custom.yidun--dark .yidun_loadbox {\n      " + (W ? "background-image: url(" + W + ')' : '') + ";\n      " + (M ? "background-color: " + M : '') + ";\n    }\n    ";
        }

        var C = D["uuid"](),
            E = Object["assign"]([["NECaptcha-color__" + C, H]]);
        a(E, O);
      }
    }

    var a = m(24),
        D = m(3);
    B['exports'] = {
      'applyColorIfNeed': v,
      'applyStyleIfNeed': R
    };
  }, function (B, p) {
    B["exports"] = function (m) {
      var v = m['protocol'],
          R = void 0 === v ? '' : v,
          D = m["host"],
          X = void 0 === D ? '' : D,
          O = m["port"],
          K = void 0 === O ? '' : O,
          F = m["path"],
          Z = void 0 === F ? '' : F,
          H = m["search"],
          S = void 0 === H ? '' : H,
          z = m['hash'],
          I = void 0 === z ? '' : z;

      if (R && (R = R["replace"](/:?\/{0,2}$/, "://")), X) {
        var L = X["match"](/^([-0-9a-zA-Z.:]*)(\/.*)?/);
        X = L[1], Z = (L[2] || '') + '/' + Z;
      }

      if (!X && (R = ''), K) {
        if (!X) throw Error("\"host\" is required, if \"port\" was provided");
        K = ':' + K;
      }

      return Z && (Z = Z["replace"](/^\/*|\/+/g, '/')), S && (S = S["replace"](/^\??/, '?')), I && (I = I["replace"](/^#?/, '#')), R + X + K + Z + S + I;
    };
  }, function (B, p, m) {
    var v,
        R,
        a = "function" == typeof Symbol && 'symbol' == typeof Symbol["iterator"] ? function (D) {
      return typeof D;
    } : function (D) {
      return D && "function" == typeof Symbol && D["constructor"] === Symbol && D !== Symbol["prototype"] ? "symbol" : typeof D;
    };
    !function () {
      var D = function () {
        function X() {}

        function O(I, L) {
          for (var k = L["length"], N = 0; N < k; ++N) H(I, L[N]);
        }

        function K(I, L) {
          I[L] = !0;
        }

        function F(I, L) {
          for (var k in L) z["call"](L, k) && (I[k] = !!L[k]);
        }

        function Z(I, L) {
          for (var k = L["split"](l), N = k["length"], P = 0; P < N; ++P) I[k[P]] = !0;
        }

        function H(I, L) {
          if (L) {
            var k = "undefined" == typeof L ? "undefined" : a(L);
            "string" === k ? Z(I, L) : Array["isArray"](L) ? O(I, L) : "object" === k ? F(I, L) : 'number' === k && K(I, L);
          }
        }

        function S() {
          for (var I = arguments["length"], L = Array(I), k = 0; k < I; k++) L[k] = arguments[k];

          var N = new X();
          O(N, L);
          var P = [];

          for (var h in N) N[h] && P['push'](h);

          return P["join"](" ");
        }

        X['prototype'] = {};
        var z = {}['hasOwnProperty'],
            l = /\s+/;
        return S;
      }();

      'undefined' != typeof B && B['exports'] ? B["exports"] = D : "object" === a(m(28)) && m(28) ? (v = [], R = function () {
        return D;
      }["apply"](p, v), !(void 0 !== R && (B['exports'] = R))) : window["classNames"] = D;
    }();
  }, function (B, p) {
    function m() {
      function R(H) {
        return O["call"](a(H) ? H : function () {}, H, 1);
      }

      function a(H) {
        return ('undefined' == typeof H ? 'undefined' : v(H)) === K;
      }

      function D(H, S, z) {
        return function () {
          var l = this["supr"];
          this['supr'] = z[Z][H];
          var I = {}["fabricatedUndefined"],
              L = I;

          try {
            L = S["apply"](this, arguments);
          } finally {
            this["supr"] = l;
          }

          return L;
        };
      }

      function X(H, S, z) {
        for (var l in S) S["hasOwnProperty"](l) && (H[l] = a(S[l]) && a(z[Z][l]) && F["test"](S[l]) ? D(l, S[l], z) : S[l]);
      }

      function O(H, S) {
        function z() {}

        function I() {
          this["initialize"] ? this["initialize"]["apply"](this, arguments) : (S || N && L["apply"](this, arguments), P["apply"](this, arguments));
        }

        z[Z] = this[Z];
        var L = this,
            k = new z(),
            N = a(H),
            P = N ? H : this,
            h = N ? {} : H;
        return I["methods"] = function (f) {
          return X(k, f, L), I[Z] = k, this;
        }, I["methods"]['call'](I, h)['prototype']["constructor"] = I, I["extend"] = O, I[Z]["implement"] = I["statics"] = function (f, q) {
          return f = 'string' == typeof f ? function () {
            var j = {};
            return j[f] = q, j;
          }() : f, X(this, f, L), this;
        }, I;
      }

      var K = 'function',
          F = /xyz/["test"](function () {
        xyz;
      }) ? /\bsupr\b/ : /.*/,
          Z = 'prototype';
      return R;
    }

    var v = "function" == typeof Symbol && "symbol" == typeof Symbol['iterator'] ? function (R) {
      return typeof R;
    } : function (R) {
      return R && "function" == typeof Symbol && R["constructor"] === Symbol && R !== Symbol["prototype"] ? "symbol" : typeof R;
    };
    B["exports"] = m();
  }, function (B, p) {
    function m() {
      this["_state"] = a, this['_arg'] = void 0, this["_fullfilledCallback"] = [], this["_rejectedCallback"] = [];
    }

    function v(O) {
      window["setTimeout"](O, 1);
    }

    function R(O) {
      if (O) {
        var K = new m();
        O["then"] = function () {
          return K["then"]["apply"](K, arguments);
        }, O["catch"] = function () {
          return K["catch"]["apply"](K, arguments);
        }, O["finally"] = function () {
          return K["finally"]["apply"](K, arguments);
        }, O["resolve"] = function () {
          return K['resolve']['apply'](K, arguments);
        };
      }
    }

    var a = "pending",
        D = "fullfilled",
        X = 'rejected';
    Object["assign"](m["prototype"], {
      'then': function (O, K) {
        var F = function (Z) {
          return "function" == typeof Z;
        };

        return F(O) && this["_fullfilledCallback"]['push'](O), F(K) && this["_rejectedCallback"]["push"](K), this["_state"] !== a && this["_emit"](this["_state"]), this;
      },
      'catch': function (O) {
        return this["then"](null, O);
      },
      'finally': function (O) {
        return this['then'](O, O);
      },
      'resolve': function (O) {
        this["_state"] === a && (O instanceof Error ? this["_state"] = X : this["_state"] = D, this["_arg"] = O, this['_emit'](this["_state"]));
      },
      '_emit': function (O) {
        var K = this;

        switch (O) {
          case D:
            v(function () {
              K["_fullfilledCallback"]["map"](function (F) {
                return F(K["_arg"]);
              }), K['_fullfilledCallback'] = [], K["_rejectedCallback"] = [];
            });
            break;

          case X:
            v(function () {
              K['_rejectedCallback']["map"](function (F) {
                return F(K["_arg"]);
              }), K["_fullfilledCallback"] = [], K['_rejectedCallback'] = [];
            });
        }
      }
    }), m["mixin"] = R, B["exports"] = m;
  }, function (B, p, m) {
    var v = Object["assign"] || function (X) {
      for (var O = 1; O < arguments["length"]; O++) {
        var K = arguments[O];

        for (var F in K) Object["prototype"]["hasOwnProperty"]['call'](K, F) && (X[F] = K[F]);
      }

      return X;
    },
        R = m(11),
        a = m(46),
        D = m(3);

    B["exports"] = function () {
      var X = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          O = X["captchaConfig"],
          K = void 0 === O ? {} : O;
      return function (F, Z, H, S) {
        var z = D["getDeviceToken"]();
        Z = Object['assign']({
          'referer': a(),
          'zoneId': K['zoneId'] || ''
        }, z ? {
          'dt': z
        } : {}, Z);
        var I = v({}, X, S, {
          'url': F,
          'payload': Z
        });
        R["api"](I)['then'](function (L) {
          return H(null, L);
        })["catch"](H);
      };
    };
  }, function (B, p) {
    B["exports"] = function (m) {
      if ("number" == typeof m || /^\d+(\.\d+)?$/["test"](m)) return m + 'px';
      if (void 0 !== m && '' !== m) return m;
    };
  }, function (B, p) {
    function m(X, O) {
      Object["keys"](O)['map'](function (K) {
        X["setAttribute"](K, O[K]);
      });
    }

    function v(X, O) {
      var K = null;
      K = O && O["nodeType"] ? O : document['head'] || document["getElementsByTagName"]("head")[0], K["appendChild"](X);
    }

    function R(X) {
      var O = document["createElement"]("style"),
          K = {
        'type': "text/css"
      };
      return m(O, K), v(O, X), O;
    }

    function a(X, O, K) {
      var F = O["css"],
          Z = O["media"];
      if (Z && X['setAttribute']('media', Z), X["styleSheet"]) X["styleSheet"]["cssText"] = F;else {
        for (; X["firstChild"];) X["removeChild"](X["firstChild"]);

        X["appendChild"](document["createTextNode"](F));
      }
    }

    var D = {};

    B['exports'] = function (X, O) {
      var K = X[0],
          F = K[0],
          Z = {
        'css': K[1],
        'media': K[2]
      };
      !D[F] && (D[F] = R(O)), a(D[F], Z);
    };
  }, function (B, R, D) {
    function X(V, U) {
      for (var W = [], x = 0; x < V; x++) W["push"](U);

      return W;
    }

    function O(V) {
      return V < -128 ? O(256 + V) : V > 127 ? O(V - 256) : V;
    }

    function K(V, U) {
      return O(V + U);
    }

    function F() {
      for (var V = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], U = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], W = [], x = U["length"], M = 0, C = V["length"]; M < C; M++) W[M] = K(V[M], U[M % x]);

      return W;
    }

    function Z(V, U) {
      return O(O(V) ^ O(U));
    }

    function H() {
      for (var V = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], U = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], W = [], x = U["length"], M = 0, C = V["length"]; M < C; M++) W[M] = Z(V[M], U[M % x]);

      return W;
    }

    function S(V) {
      var U = [];
      return U[0] = O(V >>> 24 & 255), U[1] = O(V >>> 16 & 255), U[2] = O(V >>> 8 & 255), U[3] = O(255 & V), U;
    }

    function z(V) {
      V = '' + V;

      for (var U = [], W = A(), x = W["safeGlobal"], M = 0, C = 0, E = V["length"] / 2; M < E; M++) {
        var w = x["parseInt"](V["charAt"](C++), 16) << 4,
            Q = x["parseInt"](V["charAt"](C++), 16);
        U[M] = O(w + Q);
      }

      return U;
    }

    function I(V) {
      V = window["encodeURIComponent"](V);

      for (var U = [], W = 0, x = V['length']; W < x; W++) '%' === V["charAt"](W) ? W + 2 < x && U["push"](z('' + V["charAt"](++W) + V['charAt'](++W))[0]) : U['push'](O(V["charCodeAt"](W)));

      return U;
    }

    function L(V) {
      for (var U = [], W = 0; W < V["length"]; W++) U["push"]('%'), U["push"](k(V[W]));

      return window["decodeURIComponent"](U["join"](''));
    }

    function k(V) {
      var U = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
      return '' + U[V >>> 4 & 15] + U[15 & V];
    }

    function N(V) {
      V = '' + V;
      var U = A(),
          W = U["safeGlobal"],
          x = W["parseInt"](V["charAt"](0), 16) << 4,
          M = W["parseInt"](V["charAt"](1), 16);
      return O(x + M);
    }

    function P(V) {
      return V["map"](function (U) {
        return k(U);
      })['join']('');
    }

    function q(V) {
      return P(S(V));
    }

    function j(V, U, W, x, M) {
      for (var C = 0, E = V["length"]; C < M; C++) U + C < E && (W[x + C] = V[U + C]);

      return W;
    }

    function b(V) {
      return X(V, 0);
    }

    function G(V) {
      for (var U = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], W = 4294967295, x = 0, M = V["length"]; x < M; x++) W = W >>> 8 ^ U[255 & (W ^ V[x])];

      return q(4294967295 ^ W);
    }

    var A = D(27);
    R["copyToBytes"] = j, R["genCrc32"] = G, R["hexToByte"] = N, R["hexsToBytes"] = z, R['intToBytes'] = S, R["paddingArrayZero"] = b, R["shift"] = K, R["shifts"] = F, R["stringToBytes"] = I, R["toByte"] = O, R['xor'] = Z, R["xors"] = H, R["bytesToString"] = L;
  }, function (B, p) {
    B["exports"] = {
      '__SBOX__': "a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e",
      '__ROUND_KEY__': '037606da0296055c',
      '__SEED_KEY__': "fd6a43ae25f74398b61c03c83be37449",
      '__BASE64_ALPHABET__': "MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo",
      '__BASE64_PADDING__': '7'
    };
  }, function (B, p) {
    function m() {
      var v = "NECaptchaSafeWindow",
          R = function () {
        var O = document["getElementById"](v);
        O && (document["body"]["removeChild"](O), O = null);
      },
          a = document["getElementById"](v);

      if (a) return {
        'safeGlobal': a["contentWindow"],
        'destroy': R
      };
      var D = window;

      try {
        var X = document["createElement"]("iframe");
        X["setAttribute"]('id', v), X['style']["display"] = "none", document["body"]['appendChild'](X), D = X["contentWindow"];
      } catch (O) {
        D = window;
      }

      return {
        'safeGlobal': D,
        'destroy': R
      };
    }

    B["exports"] = m;
  }, function (B, p) {
    (function (m) {
      B["exports"] = m;
    })['call'](p, {});
  }, function (B, p, m) {
    !function (v, R) {
      B["exports"] = R();
    }(this, function () {
      'use strict';

      function v(Z) {
        var H = new RegExp("(^|;)[ ]*" + Z + "=([^;]*)"),
            S = H["exec"](document["cookie"]);
        return S ? decodeURIComponent(S[2]) : '';
      }

      function R(Z, H, S) {
        var z,
            l = Z + '=' + encodeURIComponent(H) + ';';
        S && (z = new Date(), z['setTime'](z["getTime"]() + S), l += "expires=" + z['toUTCString']()), document["cookie"] = l;
      }

      function a() {
        for (var Z = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", H = '', S = 0, z = Z["length"]; S < 16; S++) H += Z['charAt'](Math["floor"](Math["random"]() * z));

        return H;
      }

      var D,
          X = function () {
        return X = Object['assign'] || function (Z) {
          for (var H, S = 1, z = arguments['length']; S < z; S++) {
            H = arguments[S];

            for (var l in H) Object["prototype"]["hasOwnProperty"]["call"](H, l) && (Z[l] = H[l]);
          }

          return Z;
        }, X["apply"](this, arguments);
      },
          O = {
        'userData': null,
        'name': location["hostname"] + '_snaker',
        'init': function () {
          if (!O["userData"]) try {
            O["userData"] = document['createElement']("INPUT"), O["userData"]["type"] = "hidden", O["userData"]["style"]["display"] = "none", O["userData"]["addBehavior"]("#default#userData"), O['userData'] && document["body"]["appendChild"](O["userData"]);
            var Z = new Date();
            Z["setDate"](Z['getDate']() + 365), O["userData"]["expires"] = Z["toUTCString"]();
          } catch (H) {
            return console["log"]("userData is disabled!"), !1;
          }
          return !0;
        },
        'setItem': function (Z, H) {
          O['init']() && O["userData"] && (O["userData"]["load"](O['name']), O["userData"]["setAttribute"](Z, H), O["userData"]['save'](O['name']));
        },
        'getItem': function (Z) {
          return O["init"]() && O["userData"] ? (O["userData"]["load"](O['name']), O["userData"]["getAttribute"](Z) || '') : '';
        },
        'removeItem': function (Z) {
          O['init']() && O["userData"] && (O["userData"]["load"](O["name"]), O["userData"]["removeAttribute"](Z), O["userData"]["save"](O["name"]));
        }
      };

      try {
        D = localStorage || O;
      } catch (Z) {
        D = O;
      }

      var K = function () {
        function H(S) {
          this["name"] = S;
        }

        return H['prototype']["push"] = function (S) {
          if (S) try {
            var z = D["getItem"](this['name']);
            D["setItem"](this["name"], z ? z + ',' + S : S);
          } catch (l) {
            console['log']("localstorage or userData is disabled!");
          }
        }, H["prototype"]['length'] = function () {
          try {
            var S = D["getItem"](this["name"]) || '';
            return S ? S["split"](',')['length'] : 0;
          } catch (z) {
            return console['log']("localstorage or userData is disabled!"), 0;
          }
        }, H['prototype']["pop"] = function (S) {
          void 0 === S && (S = 1);
          var z;

          try {
            var l = D['getItem'](this["name"]),
                I = l ? l['split'](',') : [];
            z = I["splice"](0, S), D["setItem"](this["name"], I['join'](','));
          } catch (L) {
            z = [], console["log"]("localstorage or userData is disabled!");
          }

          return z;
        }, H['prototype']["clear"] = function () {
          try {
            D["removeItem"](this['name']);
          } catch (S) {
            console["log"]("localstorage or userData is disabled!");
          }
        }, H;
      }(),
          F = function () {
        function H(S) {
          if (!S["pid"]) throw new Error("product id is required!");
          var z = S['pid'],
              I = S["bid"],
              L = S["url"],
              k = S["random"],
              N = S['limit'],
              P = S["disabled"],
              h = S["version"];
          this["pid"] = z, this['bid'] = I, this['random'] = k || 100, this["limit"] = N || 5, this['disabled'] = P, this["version"] = h || '', this["url"] = L || "https://da.dun.163.com/sn.gif", this["prefix"] = "__snaker__id", this['cache'] = new K(this["prefix"]);
          var f = v(this['prefix']);
          f ? this["uuid"] = f : (this["uuid"] = a(), R(this["prefix"], this["uuid"], 31536000000));
        }

        return H["prototype"]["setUser"] = function (S) {
          if ("string" == typeof S) this["user"] = {
            'uid': S
          };else {
            this['user'] = {
              'uid': S["uid"]
            };

            for (var z in S) S["hasOwnProperty"](z) && "uid" !== z && (this["user"]['$user_' + z] = S[z]);
          }
        }, H["prototype"]["serialize"] = function (S, z) {
          var I = this,
              L = I["pid"],
              k = I['bid'],
              N = I["uuid"],
              P = I["user"],
              q = I["version"],
              j = S["type"],
              b = S['name'],
              G = S["value"],
              A = function (C, E) {
            return C['substring'](0, E);
          },
              V = screen["width"] + 'x' + screen["height"],
              U = A(location["href"], 200),
              W = new Date()["getTime"]() + '',
              Y = X(X({
            'pid': L,
            'bid': k,
            'uuid': N,
            'type': j,
            'name': b,
            'version': q,
            'value': G,
            'res': V,
            'pu': U,
            'nts': W
          }, z), P),
              x = [];

          for (var M in Y) Y["hasOwnProperty"](M) && void 0 !== Y[M] && x["push"](encodeURIComponent(M + '=') + encodeURIComponent(encodeURIComponent(Y[M])));

          return x["join"]("%26");
        }, H['prototype']["sendRequest"] = function (S, z) {
          if (!this["disabled"]) {
            var l = new Image(1, 1);
            l['src'] = S + "?d=" + z;
          }
        }, H["prototype"]["report"] = function (S, z, l, I, L) {
          if (!this["disabled"]) {
            var k = this["serialize"]({
              'type': S,
              'name': z,
              'value': l
            }, L ? L : {});
            this["random"] < Math["random"]() || (I ? (this['cache']["push"](k), this["cache"]["length"]() >= this['limit'] && this["flush"]()) : this['sendRequest'](this['url'], k));
          }
        }, H["prototype"]["track"] = function (S, z, l, I) {
          this["report"](S, z, l, !1, I);
        }, H['prototype']["trackAsync"] = function (S, z, l, I) {
          this["report"](S, z, l, !0, I);
        }, H["prototype"]["flush"] = function () {
          for (var S = '', z = this['cache']["pop"](this["limit"]); z["length"];) {
            var l = z['pop']() || '';
            l && (S["length"] + l["length"] <= 1800 ? (S = S ? S + ',' + l : l, z["length"] || this["sendRequest"](this["url"], S)) : (this["sendRequest"](this["url"], S), S = l));
          }
        }, H;
      }();

      return F;
    });
  }, function (B, p) {
    B["exports"] = function () {
      var m = [];
      return m["toString"] = function () {
        for (var v = [], R = 0; R < this['length']; R++) {
          var a = this[R];
          a[2] ? v["push"]("@media " + a[2] + '{' + a[1] + '}') : v["push"](a[1]);
        }

        return v["join"]('');
      }, m['i'] = function (v, R) {
        'string' == typeof v && (v = [[null, v, '']]);

        for (var a = {}, D = 0; D < this["length"]; D++) {
          var X = this[D][0];
          "number" == typeof X && (a[X] = !0);
        }

        for (D = 0; D < v['length']; D++) {
          var O = v[D];
          "number" == typeof O[0] && a[O[0]] || (R && !O[2] ? O[2] = R : R && (O[2] = '(' + O[2] + ") and (" + R + ')'), m["push"](O));
        }
      }, m;
    };
  }, function (B, p, m) {
    B["exports"] = m['p'] + 'images/tipBg.ea0d5cf.png';
  }, function (B, p, m) {
    B["exports"] = m['p'] + "images/tipBg@2x.b36c7c5.png";
  }, function (B, R, D) {
    var X = D(14),
        O = X["FETCH_INTELLISENSE_CAPTCHA"],
        K = X["VERIFY_INTELLISENSE_CAPTCHA"],
        F = X["RESET_STATE"],
        Z = D(6),
        H = Z["SWITCH_LOAD_STATUS"],
        S = Z['UPDATE_VERIFY_STATUS'],
        z = Z["INVOKE_HOOK"],
        I = Z["EVENT_RESET"],
        L = D(5),
        N = L["CAPTCHA_TYPE"],
        P = L["SAMPLE_NUM"],
        q = L["POPUP_PRELOAD_SHIFTING_CLASS"],
        j = D(3),
        G = D(10),
        A = G["aes"],
        V = G["xorEncode"],
        U = D(8),
        W = D(16),
        M = D(13),
        C = D(4);
    B['exports'] = {
      'data': function () {
        return {
          'beginTime': j["now"](),
          'traceData': [],
          'status': "normal",
          'classicVisible': !1
        };
      },
      'mounted': function () {
        this['_removeEvents'] = this["initEvents"](), this["fetchCaptcha"]();
      },
      'beforeDestroy': function () {
        this["_removeEvents"](), this["clear"]();
      },
      'methods': {
        'fetchCaptcha': function () {
          var E = this;
          return new M(function (w, Q) {
            var J = {
              'width': ''
            };
            E['$store']["state"]['smsNew'] && (J["smsVersion"] = E['$store']["state"]["smsVersion"]), E["$store"]["dispatch"](O, J, function (g0, g1) {
              if (E["_isMounted"]) {
                if (g0) return E["$setData"]({
                  'status': "loadfail"
                }), void Q(g0);
                E["$store"]["commit"](z, {
                  'name': 'onReady'
                }), E["$store"]["commit"](z, {
                  'name': "onDidRefresh"
                }), w(g1);
              }
            });
          });
        },
        'initEvents': function () {
          var E = this,
              w = this['$store']["subscribe"](function (Q, J) {
            var g0 = Q['type'],
                g1 = (Q["payload"], J["verifyStatus"]),
                g2 = J["load"];

            switch (g0) {
              case H:
                g2 && ("loading" === g2["status"] && E["$setData"]({
                  'status': "loading"
                }), "done" === g2["status"] && E['$setData']({
                  'status': "loaddone"
                }), 'fail' === g2["status"] && E['$setData']({
                  'status': "loadfail"
                }));
                break;

              case S:
                "success" === g1 && E["$setData"]({
                  'status': 'success'
                }), 'error' === g1 && E["$setData"]({
                  'status': "error"
                });
                break;

              case I:
                E["reset"]();
            }
          });
          return function () {
            w();
          };
        },
        'reset': function () {
          var E = this;
          this['$store']["dispatch"](F), this['fetchCaptcha']()["then"](function () {
            E["clear"](), E["$setData"]({
              'status': "normal"
            });
          });
        },
        'clear': function () {
          var E = this;
          this["_captchaIns"] && (this["$setData"]({
            'classicVisible': !1
          }), this["$nextTick"](function () {
            E["_captchaIns"]["$destroy"](), E['_captchaIns'] = null;
          })), this["beginTime"] = 0, this["traceData"] = [];
        },
        'verifyCaptcha': function () {
          "normal" === this['status'] ? this["verifyIntellisenseCaptcha"]() : this["_captchaIns"] && this["_captchaIns"]["open"]();
        },
        'verifyIntellisenseCaptcha': function () {
          var E = this,
              w = this["$store"]["state"]["token"],
              Q = j["now"](),
              J = V(w, [0, 0, Q - (this["beginTime"] || Q)] + ''),
              g0 = this['traceData']["map"](function (g1) {
            return V(w, g1);
          });
          this["$store"]["dispatch"](K, {
            'token': w,
            'type': N["INTELLISENSE"],
            'width': '240',
            'data': JSON["stringify"]({
              'd': '',
              'm': A(j["sample"](g0, P)["join"](':')),
              'p': A(J),
              'ext': A(V(w, '1,' + g0["length"]))
            })
          }, function (g1) {
            if (E["_isMounted"]) {
              if (!g1) return void E["$setData"]({
                'status': "success"
              });

              if (!E["_captchaIns"]) {
                var g2 = E['$store']["state"]["config"],
                    g3 = U['_extend'](W);
                E['_captchaIns'] = new g3({
                  'store': E["$store"],
                  'propsData': {
                    'autoOpen': !1,
                    'intellisense': !0,
                    'enableColor': !0,
                    'onBeforeClose': function () {
                      E["$store"]["commit"](z, {
                        'name': "onBeforeClose"
                      });
                    },
                    'onClose': function (g4) {
                      E["$store"]["commit"](z, {
                        'name': 'onClose',
                        'args': [{
                          'source': g4
                        }]
                      });
                    },
                    'onOpen': function () {
                      E["$store"]["commit"](z, {
                        'name': "onOpen"
                      });
                    },
                    'onWidthGeted': function (g4) {
                      C["delClass"](g4, q);
                    }
                  }
                })['$mount'](function (g4) {
                  C["addClass"](g4, q), g2['appendTo'] ? g2["appendTo"]["appendChild"](g4) : document["body"]["appendChild"](g4);
                }), E["$setData"]({
                  'status': "loading"
                });
              }

              E["_captchaIns"]["open"]();
            }
          });
        },
        'closeModal': function () {
          this['_captchaIns'] && this["_captchaIns"]['closeModal']();
        }
      }
    };
  }, function (B, R, D) {
    var X = function () {
      function M(C, E) {
        var w = [],
            Q = !0,
            J = !1,
            g0 = void 0;

        try {
          for (var g1, g2 = C[Symbol["iterator"]](); !(Q = (g1 = g2['next']())['done']) && (w["push"](g1["value"]), !E || w["length"] !== E); Q = !0);
        } catch (g3) {
          J = !0, g0 = g3;
        } finally {
          try {
            !Q && g2["return"] && g2['return']();
          } finally {
            if (J) throw g0;
          }
        }

        return w;
      }

      return function (C, E) {
        if (Array['isArray'](C)) return C;
        if (Symbol["iterator"] in Object(C)) return M(C, E);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        O = D(8),
        K = D(4),
        F = D(3),
        Z = D(10),
        H = Z["aes"],
        S = Z["xorEncode"],
        z = D(5),
        I = z["SAMPLE_NUM"],
        L = z["BIGGER_SAMPLE_NUM"],
        k = D(6),
        N = k["SWITCH_LOAD_STATUS"],
        P = k["INVOKE_HOOK"],
        q = D(7),
        j = q["REQUEST_IMG_ERROR"],
        G = D(11),
        A = D(9),
        V = A["createNetCollect"],
        U = document,
        W = {
      'status': "dragend",
      'beginTime': 0,
      'clientX': 0,
      'startX': 0,
      'clientY': 0,
      'startY': 0,
      'dragX': 0,
      'dragY': 0
    };

    B["exports"] = O["_extend"]({
      'abstract': !0,
      'props': ["loadInfo", "mode", "type", "isRtlLang"],
      'data': function () {
        var M = this["$store"]["state"]["langPkg"];
        return {
          'langPkg': M
        };
      },
      'mounted': function () {
        this["initData"](), this["$bgImg"] = K["find"](".yidun_bgimg", this["$el"]), this["$canvas"] = K["find"](".yidun_avoid-canvas", this['$el']), this['$dragAvoidBall'] = K["find"](".yidun_avoid-front", this["$el"]), this["canvasContext"] = K["supportCanvas"] ? this["$canvas"]["getContext"]('2d') : null, this["firstEventType"] = '', this['width'] = this["$el"]["offsetWidth"], this["$dragAvoidBall"]["style"]['width'] = 60 * this['width'] / 960 + 'px', this["_removeEvents"] = this["initEvents"](), this["initCanvas"]();
      },
      'beforeDestroy': function () {
        this["_removeEvents"](), this['$bgImg'] = null, this["$dragAvoidBall"] = null;
      },
      'render': function (M) {
        var C = M["loadInfo"];

        if (C && "done" === C["status"]) {
          var E = C["data"] && C["data"]["front"];
          Array["isArray"](E) && (E = E[0], C["data"]['front'] = E);
        }

        C && this["changeLoadStatus"](C);
      },
      'methods': {
        'initData': function () {
          this['beginTime'] = 0, this["mouseDownCounts"] = 0, this["drag"] = Object["assign"]({}, W), this["traceData"] = [], this['ballTraceData'] = [];
        },
        'initPosition': function () {
          this["$dragAvoidBall"]['style']["left"] = '0px', this["$dragAvoidBall"]["style"]["bottom"] = "0px";
        },
        'initCanvas': function () {
          if (this["$canvas"]["width"] = this["width"], this['$canvas']["height"] = this["width"] / 2, this["canvasContext"]) try {
            this["canvasContext"]["clearRect"](0, 0, this["width"], this['width'] / 2);
          } catch (M) {}
        },
        'reset': function () {
          var M = this["$store"]["state"],
              C = M['countsOfVerifyError'],
              E = M['config'],
              w = C > E['maxVerification'];
          w || (this["initData"](), this["initCanvas"](), this["initPosition"]());
        },
        'floatStatusChange': function () {
          this["$parent"]['shouldHandleFloatChange'](this["loadInfo"]) && this['changeTipElText']();
        },
        'initEvents': function () {
          var M = this,
              C = function (g4) {
            return function (g5) {
              var g6 = g5["type"] || '';
              M["firstEventType"] || (M["firstEventType"] = g6), g6["indexOf"]("pointer") === -1 && M['firstEventType']["indexOf"]("pointer") > -1 || M["firstEventType"]['indexOf']("pointer") === -1 && g6["indexOf"]('pointer') > -1 || g4(g5);
            };
          },
              E = C(this["onMouseDown"]["bind"](this)),
              w = C(this['onMouseMove']['bind'](this)),
              Q = this['onMouseUp']["bind"](this),
              J = K['supportPointer'] ? "pointer" : "mouse";

          if (K['on'](this["$dragAvoidBall"], J + "down", E), K['on'](U, J + 'move', w), K['on'](U, J + 'up', Q), 'pointer' === J) {
            var g0 = C(this["onMouseDown"]["bind"](this)),
                g1 = C(this["onMouseMove"]["bind"](this)),
                g2 = this["onMouseUp"]["bind"](this),
                g3 = "mouse";
            K['on'](this["$dragAvoidBall"], g3 + "down", g0), K['on'](U, g3 + "move", g1), K['on'](U, g3 + 'up', g2), this['_removeMouseEvent'] = function () {
              K["off"](M['$dragAvoidBall'], g3 + "down", g0), K['off'](U, g3 + "move", g1), K["off"](U, g3 + 'up', g2);
            };
          }

          return K["supportPointer"] && (document["documentElement"]["style"]["touchAction"] = "none"), function () {
            K['off'](M["$dragAvoidBall"], J + 'down', E), K["off"](U, J + "move", w), K["off"](U, J + 'up', Q), "pointer" === J && M['_removeMouseEvent'](), K["supportPointer"] && (document['documentElement']["style"]['touchAction'] = "auto");
          };
        },
        'changeTipElText': function () {
          var M = this["$store"]["state"]["config"],
              C = this['langPkg'],
              E = this["$parent"]["panelVisible"],
              w = "float" === (this["mode"] || M["mode"]),
              Q = K["find"](".yidun_tips__text", this["$el"]),
              J = K["find"]('.yidun_tips__answer', this["$el"]);
          w && !E ? (K["text"](Q, C["clickButton"]), K['addClass'](this["$el"], "yidun--button"), K["addClass"](J, "hide")) : (K["text"](Q, C['dragToAvoidObstacle']), K['delClass'](J, "hide"), K["delClass"](this["$el"], "yidun--button"));
        },
        'changeLoadStatus': function (M) {
          var C = this,
              E = M['status'],
              w = M["data"];

          switch (E) {
            case "loading":
              if (w) {
                var Q = K["find"]('.yidun_bg-img', this['$el']),
                    J = K["find"]('.yidun_avoid-front', this["$el"]),
                    g0 = K["find"](".yidun_tips__img", this["$el"]),
                    g1 = this["$store"],
                    g2 = g1["commit"],
                    g3 = g1["state"],
                    g4 = G['all']([G["image"]({
                  'url': w['bg'],
                  'timeout': g3["config"]["timeout"],
                  'onProcess': V(g3['captchaCollector'], {
                    'token': w["token"]
                  })
                }), G["image"]({
                  'url': w["front"],
                  'timeout': g3["config"]['timeout'],
                  'onProcess': V(g3["captchaCollector"], {
                    'token': w["token"]
                  })
                })]);
                g4['then'](function (g5) {
                  if (C["_isMounted"]) {
                    var g6 = X(g5, 2),
                        g7 = g6[0],
                        g8 = g6[1];
                    Q['src'] = g7["src"], J["src"] = g8["src"], g0["src"] = g7["src"], g2(N, {
                      'status': "done",
                      'data': w
                    });
                  }
                })["catch"](function (g5) {
                  if (C["_isMounted"]) {
                    var g6 = Object["assign"]({}, g5["data"], {
                      'token': w["token"]
                    });
                    g2(N, {
                      'status': 'fail'
                    }), g2(P, {
                      'name': "onError",
                      'args': [new q(j, g5["message"], g6)]
                    });
                  }
                });
              }

              break;

            case "done":
              this['changeTipElText']();
          }
        },
        'drawTrackLine': function (M, C) {
          var E = this["getActualDragCoordinate"](),
              w = E["actualLeft"],
              Q = E["actualBottom"],
              J = this['drag']["status"],
              g0 = this["$bgImg"]["getBoundingClientRect"](),
              g1 = g0['height'],
              g2 = this["$dragAvoidBall"]['getBoundingClientRect'](),
              g3 = g2["width"],
              g4 = M + g3 / 2,
              g5 = g1 - C - g3 / 2,
              g6 = w + g3 / 2,
              g7 = g1 - Q - g3 / 2;

          if (this["canvasContext"] && "dragging" === J) {
            var g8 = this["canvasContext"];
            g8['beginPath'](), g8["moveTo"](g4, g5), g8['lineTo'](g6, g7), g8["strokeStyle"] = "#fff", g8["lineWidth"] = 2, g8['stroke']();
          }
        },
        'onMouseDown': function (M) {
          M["event"]['cancelable'] !== !1 && M["preventDefault"](), this['mouseDownCounts']++;
          var C = this['$store']['state'],
              E = C["load"],
              w = C["verifyStatus"];

          if ("done" === E["status"] && !w) {
            var Q = M['clientX'],
                J = M['clientY'],
                g0 = this["drag"];
            "dragend" === g0["status"] && Object["assign"](g0, {
              'beginTime': F["now"](),
              'clientX': Q,
              'startX': Q,
              'clientY': J,
              'startY': J,
              'dragX': 0,
              'dragY': 0
            });
          }
        },
        'onMouseMove': function (M) {
          var C = M['clientX'],
              E = M['clientY'],
              w = this["drag"],
              Q = w['status'],
              J = w["beginTime"];

          if (w["status"] = J && 'dragend' === Q ? "dragstart" : Q, "dragend" !== w['status']) {
            !(M["type"]['indexOf']("touch") !== -1 && K["supportPassive"] || M['event']["cancelable"] !== !1) && M['preventDefault']();
            var g0 = this["getActualDragCoordinate"](),
                g1 = g0["actualLeft"],
                g2 = g0["actualBottom"];
            Object["assign"](w, {
              'clientX': C,
              'clientY': E,
              'dragX': C - w["startX"],
              'dragY': E - w["startY"]
            }), this["drawTrackLine"](g1, g2);
            var g3 = this["$store"]["state"]['token'],
                g4 = F["now"]() - w['beginTime'],
                g5 = [Math["round"](w["dragX"]), Math["round"](w['dragY']), g4],
                g6 = S(g3, g5 + '');
            this["traceData"]['push'](g6);
            var g7 = this['$dragAvoidBall']['getBoundingClientRect'](),
                g8 = g7["width"],
                g9 = g7["height"],
                gg = this['$bgImg']["getBoundingClientRect"](),
                gT = gg['height'],
                gB = [Math["round"](g1 + g8 / 2), Math['round'](gT - (g2 + g9 / 2)), g4];
            this["ballTraceData"]['push'](S(g3, gB + '')), "dragstart" === w["status"] && this["onMouseMoveStart"](M), "dragging" === w['status'] && this['onMouseMoving'](M);
          }
        },
        'onMouseMoveStart': function () {
          Object["assign"](this["drag"], {
            'status': "dragging"
          });
        },
        'onMouseMoving': function () {
          var M = this["getActualDragCoordinate"](),
              C = M["actualLeft"],
              E = M["actualBottom"];
          this["$dragAvoidBall"]["style"]["left"] = C + 'px', this["$dragAvoidBall"]["style"]['bottom'] = E + 'px';
        },
        'onMouseUp': function () {
          var M = this["drag"],
              C = this["getActualDragCoordinate"](),
              E = C["actualLeft"],
              w = C["actualBottom"],
              Q = this["$dragAvoidBall"]["getBoundingClientRect"](),
              J = Q['width'],
              g0 = Q["height"],
              g1 = this["$bgImg"]["getBoundingClientRect"](),
              g2 = g1["height"];
          if ("dragend" === M['status']) return void Object["assign"](M, {
            'beginTime': 0
          });
          Object["assign"](M, W);
          var g3 = F["msie"](),
              g4 = F['sample'](this["ballTraceData"], g3 ? I : L),
              g5 = this['$store']["state"]["token"],
              g6 = H(S(g5, [Math["round"](E + J / 2), Math["round"](g2 - (w + g0 / 2)), F["now"]() - this['beginTime']] + ''));
          this['onVerifyCaptcha']({
            'data': JSON['stringify']({
              'd': '',
              'm': H(g4["join"](':')),
              'p': g6,
              'ext': H(S(g5, this["mouseDownCounts"] + ',' + this["traceData"]["length"]))
            })
          });
        },
        'getActualDragCoordinate': function () {
          var M = this["drag"],
              C = M['dragX'],
              E = M["dragY"],
              w = this["$bgImg"]['getBoundingClientRect'](),
              Q = w['width'],
              J = w["height"],
              g0 = this["$dragAvoidBall"]['getBoundingClientRect'](),
              g1 = g0["width"],
              g2 = g0["height"],
              g3 = Q - g1,
              g4 = J - g2,
              g5 = Math['min'](Math["max"](C, 0), g3),
              g6 = -Math["min"](Math["max"](E, -g4), 0);
          return {
            'actualLeft': g5,
            'actualBottom': g6
          };
        }
      }
    });
  }, function (B, R, D) {
    var X = D(8),
        O = D(4),
        K = D(3),
        F = D(10),
        Z = F["aes"],
        H = F["xorEncode"],
        S = D(5),
        z = S['CAPTCHA_CLASS'],
        I = S["SAMPLE_NUM"],
        L = D(6),
        k = L['SWITCH_LOAD_STATUS'],
        N = L["INVOKE_HOOK"],
        P = D(7),
        q = P["REQUEST_IMG_ERROR"],
        j = D(11),
        G = D(9),
        A = G["createNetCollect"],
        V = 4,
        U = 2,
        W = {
      'status': "dragend",
      'beginTime': 0,
      'clientX': 0,
      'clientY': 0,
      'startX': 0,
      'startY': 0,
      'startLeft': 0,
      'startTop': 0,
      'el': null
    };
    B["exports"] = X["_extend"]({
      'abstract': !0,
      'props': ['loadInfo', 'mode'],
      'data': function () {
        var M = this["$store"]["state"]['langPkg'];
        return {
          'langPkg': M
        };
      },
      'mounted': function () {
        this["initData"](), this["_removeEvents"] = this["initEvents"](), this["initCustomStyles"]();
      },
      'beforeDestroy': function () {
        this['_removeEvents'](), this["$el"] = null, this["$bgImgWrap"] = null, this["$picViews"] = [], this["drag"] = null, this["traceData"] = null, this["exchangePos"] = null;
      },
      'render': function (M) {
        var C = M['loadInfo'];
        C && this["changeLoadStatus"](C);
      },
      'methods': {
        'initData': function () {
          this["clickCounts"] = 0, this['traceData'] = [], this["exchangePos"] = [], this["drag"] = Object["assign"]({}, W);
        },
        'initEvents': function () {
          var M = this;
          this["$bgImgWrap"] = O['find']('.' + z['BGIMG'], this["$el"]), this["$picViews"] = [];

          for (var C = O["findAll"](".yidun_inference", this["$el"]), E = function (g2) {
            g2["target"]['className']["indexOf"]("yidun_inference") !== -1 && M["onMouseDown"](g2);
          }, w = this["onDragEnd"]["bind"](this), Q = this["onMouseMove"]["bind"](this), J = 0, g0 = C["length"]; J < g0; J++) this['$picViews']["push"]({
            'view': C[J],
            'img': O["find"](".yidun_inference__img", C[J])
          });

          var g1 = O["supportPointer"] ? "pointer" : "mouse";
          return O['on'](this["$bgImgWrap"], g1 + 'down', E), O['on'](document, g1 + 'up', w), O['on'](document, g1 + "move", Q), function () {
            O["off"](M["$bgImgWrap"], g1 + 'down', E), O["off"](document, g1 + 'up', w), O["off"](document, g1 + "move", Q);
          };
        },
        'initCustomStyles': function () {
          var M = this['$store']['state']['config']["customStyles"]["imagePanel"];
          this["$picViews"][0]["view"]["style"]['borderTopLeftRadius'] = M["borderRadius"], this["$picViews"][V - 1]['view']["style"]["borderTopRightRadius"] = M["borderRadius"], this['$picViews'][V]["view"]["style"]["borderBottomLeftRadius"] = M["borderRadius"], this["$picViews"][V * U - 1]["view"]["style"]["borderBottomRightRadius"] = M["borderRadius"];
        },
        'reset': function () {
          var M = this["$store"]["state"],
              C = M["countsOfVerifyError"],
              E = M['config'],
              w = C > E["maxVerification"];

          if (!w) {
            var Q = this["$picViews"];
            this['initData'](), O['delClass'](this["$bgImgWrap"], 'yidun_bgimg--dragging');

            for (var J = 0, g0 = Q["length"]; J < g0; J++) {
              this["cleanInferenceCls"](J);
              var g1 = Q[J]['img'];
              g1["style"]['top'] = '', g1["style"]["left"] = '';
            }
          }
        },
        'cleanInferenceCls': function (M) {
          this["$picViews"][M] && (this["$picViews"][M]["view"]["className"] = "yidun_inference yidun_inference--" + M);
        },
        'floatStatusChange': function () {
          this["$parent"]["shouldHandleFloatChange"](this['loadInfo']) && this["changeTipElText"]();
        },
        'changeTipElText': function () {
          var M = O['find'](".yidun_tips__text", this["$el"]),
              C = this["$store"]['state']["config"];
          'float' !== (this['mode'] || C['mode']) || this["$parent"]["panelVisible"] ? (O['text'](M, this["langPkg"]["inferenceTip"]), O['delClass'](this["$el"], "yidun--button")) : (O['text'](M, this["langPkg"]['clickButton']), O["addClass"](this["$el"], 'yidun--button'));
        },
        'changeLoadStatus': function (M) {
          var C = this,
              E = M['status'],
              w = M["data"];

          if ("loading" === E && w) {
            var Q = O["find"](".yidun_bg-img", this["$el"]),
                J = O["find"](".yidun_tips__text", this["$el"]),
                g0 = this["$store"],
                g1 = g0["commit"],
                g2 = g0["state"],
                g3 = g2['langPkg'],
                g4 = g2["config"],
                g5 = g2['captchaCollector'];
            j['image']({
              'url': w['bg'],
              'timeout': g4['timeout'],
              'onProcess': A(g5, {
                'token': w["token"]
              })
            })["then"](function (g6) {
              if (C["_isMounted"]) {
                Q["src"] = g6["src"];

                for (var g7 = 0, g8 = C["$picViews"]['length']; g7 < g8; g7++) C['$picViews'][g7]["img"]['src'] = g6["src"];

                O["text"](J, g3["inferenceTip"]), g1(k, {
                  'status': "done",
                  'data': w
                });
              }
            })['catch'](function (g6) {
              if (C['_isMounted']) {
                var g7 = Object["assign"]({}, g6["data"], {
                  'token': w["token"]
                });
                g1(k, {
                  'status': 'fail'
                }), g1(N, {
                  'name': 'onError',
                  'args': [new P(q, g6["message"], g7)]
                });
              }
            });
          } else "done" === E && this["changeTipElText"]();
        },
        'onMouseDown': function (M) {
          if (M['preventDefault'](), this["handleDown"]() && 'dragend' === this["drag"]["status"]) {
            var C = M["clientX"],
                E = M["clientY"];
            Object["assign"](this["drag"], {
              'beginTime': K["now"](),
              'clientX': C,
              'clientY': E,
              'startX': C,
              'startY': E
            });
          }

          return !1;
        },
        'onDragEnd': function (M) {
          if ("dragend" === this["drag"]["status"]) return void Object['assign'](this["drag"], {
            'beginTime': 0
          });
          var C = this["drag"]['el'];
          Object['assign'](this["drag"], W);
          var E = this["exchangePos"][0],
              w = this["$picViews"][E]['view'];
          C["style"]["display"] = "none", this["cleanInferenceCls"](E);
          var Q = w["cloneNode"](!0);

          if (O['replace'](Q, w), this["$picViews"][E]['view'] = Q, this["$picViews"][E]["img"] = O["find"](".yidun_inference__img", Q), O["delClass"](this['$bgImgWrap'], "yidun_bgimg--dragging"), this["exchangePos"][1] || 0 === this["exchangePos"][1]) {
            var J = this["$picViews"][this["exchangePos"][1]]["img"],
                g0 = this["getImgPos"](E),
                g1 = g0["top"],
                g2 = g0['left'];
            J["style"]["top"] = g1, J["style"]["left"] = g2, this["onVerifyCaptcha"]({
              'data': JSON["stringify"]({
                'd': '',
                'm': Z(K["sample"](this["traceData"], I)["join"](':')),
                'p': Z(H(this["$store"]["state"]["token"], this["exchangePos"]["join"](','))),
                'ext': Z(H(this["$store"]["state"]["token"], this["clickCounts"] + ',' + this["traceData"]["length"]))
              })
            });
          } else {
            var g3 = this['$picViews'][E]["img"];
            g3["style"]["top"] = '', g3['style']["left"] = '';
          }
        },
        'onMouseMove': function (M) {
          var C = M["clientX"],
              E = M["clientY"],
              w = this["drag"],
              Q = w["status"],
              J = w['beginTime'],
              g0 = w['startX'],
              g1 = w['startY'],
              g2 = C - g0,
              g3 = E - g1;

          if ("dragend" === Q && J && (this["drag"]["status"] = "dragstart"), 'dragend' !== this['drag']['status']) {
            Object['assign'](this['drag'], {
              'clientX': C,
              'clientY': E
            });
            var g4 = this["$store"]["state"]['token'],
                g5 = H(g4, [Math["round"](g2), Math['round'](g3), K['now']() - this['drag']['beginTime']] + '');
            this["traceData"]["push"](g5), 'dragstart' === this["drag"]["status"] && this["startDrag"](M), "dragging" === this["drag"]["status"] && this['dragging'](M);
          }
        },
        'handleDown': function () {
          this["clickCounts"]++;
          var M = this["$store"]["state"],
              C = M["load"],
              E = M["verifyStatus"];
          return "done" === C["status"] && !E && "dragend" === this['drag']["status"];
        },
        'startDrag': function (M) {
          var C = M['target'];
          O["addClass"](this["$bgImgWrap"], 'yidun_bgimg--dragging');
          var E = C["parentNode"],
              w = E["cloneNode"](!0);
          w["draggable"] = !1, w["removeAttribute"]("style");

          for (var Q = O["findAll"](".yidun_inference--drag", this["$bgImgWrap"]), J = 0, g0 = Q['length']; J < g0; J++) O["remove"](Q[J]);

          O["addClass"](w, "yidun_inference--drag"), this["$bgImgWrap"]["appendChild"](w), O['addClass'](E, "yidun_inference--origin"), Object["assign"](this["drag"], {
            'status': "dragging",
            'el': w,
            'startLeft': w["offsetLeft"],
            'startTop': w["offsetTop"]
          });

          for (var g1 = 0, g2 = this["$picViews"]['length']; g1 < g2; g1++) if (this["$picViews"][g1]["view"] === E) {
            this['exchangePos'][0] = g1;
            break;
          }
        },
        'dragging': function () {
          var M = this["drag"],
              C = M["clientX"],
              E = M["clientY"],
              w = M['startX'],
              Q = M["startY"],
              J = M['el'],
              g0 = this["computeOffset"](C - w, E - Q),
              g1 = g0['x'],
              g2 = g0['y'];
          J["style"]["left"] = g1 + 'px', J["style"]["top"] = g2 + 'px', this["readyExchange"](g1, g2);
        },
        'readyExchange': function (M, C) {
          var E = this['getDragCenterIndex'](M, C),
              w = this['exchangePos'][0],
              Q = this["$picViews"][w]["view"];

          if (E !== this["exchangePos"][1]) {
            for (var J = 0, g0 = this["$picViews"]["length"]; J < g0; J++) O['delClass'](this["$picViews"][J]["view"], 'yidun_inference--target');

            if (E === -1 || w === E) return O["delClass"](Q, "yidun_inference--swap"), void (this["exchangePos"][1] = void 0);
            this['exchangePos'][1] = E, O['addClass'](this["$picViews"][E]["view"], 'yidun_inference--target'), O["addClass"](Q, "yidun_inference--swap");
            var g1 = this["$picViews"][w]["img"],
                g2 = this["getImgPos"](E),
                g3 = g2["top"],
                g4 = g2["left"];
            g1['style']['top'] = g3, g1["style"]['left'] = g4;
          }
        },
        'computeOffset': function (M, C) {
          var E = this["drag"],
              w = E["startLeft"],
              Q = E["startTop"],
              J = E['el'],
              g0 = this['$bgImgWrap']['offsetWidth'] - J["offsetWidth"],
              g1 = this['$bgImgWrap']["offsetHeight"] - J["offsetHeight"],
              g2 = M + w,
              g3 = C + Q;
          return g2 < 0 ? g2 = 0 : g2 > g0 && (g2 = g0), g3 < 0 ? g3 = 0 : g3 > g1 && (g3 = g1), {
            'x': g2,
            'y': g3
          };
        },
        'getDragCenterIndex': function (M, C) {
          var E = O['getRect'](this['drag']['el']),
              w = E["width"],
              Q = E['height'],
              J = M + w / 2,
              g0 = C + Q / 2,
              g1 = parseInt(J / w, 10),
              g2 = parseInt(g0 / Q, 10);
          return J % w === 0 || g0 % Q === 0 ? -1 : g1 + g2 * V;
        },
        'getImgPos': function (M) {
          var C = M - V;
          return {
            'top': (C < 0 ? 0 : -100) + '%',
            'left': (C < 0 ? M * -100 : C * -100) + '%'
          };
        }
      }
    });
  }, function (B, R, D) {
    var X = function () {
      function E(w, Q) {
        var J = [],
            g0 = !0,
            g1 = !1,
            g2 = void 0;

        try {
          for (var g3, g4 = w[Symbol["iterator"]](); !(g0 = (g3 = g4['next']())["done"]) && (J['push'](g3["value"]), !Q || J["length"] !== Q); g0 = !0);
        } catch (g5) {
          g1 = !0, g2 = g5;
        } finally {
          try {
            !g0 && g4["return"] && g4["return"]();
          } finally {
            if (g1) throw g2;
          }
        }

        return J;
      }

      return function (w, Q) {
        if (Array['isArray'](w)) return w;
        if (Symbol["iterator"] in Object(w)) return E(w, Q);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        O = D(8),
        K = D(4),
        F = D(3),
        Z = D(56),
        H = D(5),
        S = H["CAPTCHA_CLASS"],
        z = H['SAMPLE_NUM'],
        I = D(6),
        L = I["SWITCH_LOAD_STATUS"],
        N = I['INVOKE_HOOK'],
        P = D(10),
        q = P["aes"],
        j = P['xorEncode'],
        G = D(7),
        A = G["REQUEST_IMG_ERROR"],
        V = D(11),
        U = D(9),
        W = U["createNetCollect"],
        M = document,
        C = {
      'status': "dragend",
      'beginTime': 0,
      'clientX': 0,
      'startX': 0,
      'clientY': 0,
      'startY': 0,
      'startLeft': 0,
      'dragX': 0
    };

    B["exports"] = O["_extend"]({
      'abstract': !0,
      'props': ['loadInfo'],
      'mounted': function () {
        this["initData"](), this["firstEventType"] = '', this["_removeEvents"] = this["initEvents"](), this["initPosition"]();
      },
      'beforeDestroy': function () {
        this["_removeEvents"](), this['sliderTransition'] = null, this['$slider']['style']["transition"] = '', this["$el"] = null, this["$slideIndicator"] = null, this["$slider"] = null, this['$jigsaw'] = null, this["startLeft"] = 0, this["drag"] = null, this['initialDrag'] = null;
      },
      'render': function (E) {
        var w = E['loadInfo'];
        w && this["changeLoadStatus"](w);
      },
      'methods': {
        'initData': function () {
          var E = this["$store"]["state"]["config"];
          this['startLeft'] = parseInt(E["startLeft"], 10), this["initialDrag"] = Object["assign"](C, {
            'startLeft': this["startLeft"]
          }), this["drag"] = Object["assign"]({}, this["initialDrag"]), this["traceData"] = [], this["atomTraceData"] = [], this["mouseDownCounts"] = 0, this["attrs"] = void 0, this["ratio"] = 1;
        },
        'changeSlideIcon': function (E) {
          !this["$store"]['state']['config']["customStyles"]["icon"]["slider"] && this["$slideIcon"] && (E ? (this["$slideIcon"]["src"] = E, this["$slideIcon"]["style"]["display"] = 'block') : this["$slideIcon"]["style"]["display"] = 'none');
        },
        'initEvents': function () {
          var E = this;
          this["$slideIndicator"] = K["find"]('.' + S["SLIDE_INDICATOR"], this['$el']), this['$jigsaw'] = K["find"]('.' + S["JIGSAW"], this["$el"]), this["$control"] = K["find"]('.' + S['CONTROL'], this["$el"]), this['$slider'] = K["find"]('.' + S["SLIDER"], this["$el"]), this["$slideIcon"] = K["find"](".yidun_slider__icon--img", this['$el']);
          var w = this["$parent"]['$data']["customStyles"]["controlBar"],
              Q = void 0 === w ? {} : w;
          this['controlBar'] = Q;

          var J = function (gg) {
            return function (gT) {
              var gB = gT["type"] || '';
              E['firstEventType'] || (E['firstEventType'] = gB), gB['indexOf']("pointer") === -1 && E['firstEventType']["indexOf"]("pointer") > -1 || E["firstEventType"]["indexOf"]("pointer") === -1 && gB["indexOf"]('pointer') > -1 || gg(gT);
            };
          },
              g0 = J(this["onMouseDown"]["bind"](this)),
              g1 = J(this["onMouseDown"]["bind"](this)),
              g2 = J(this["onMouseMove"]["bind"](this)),
              g3 = this['onMouseUp']["bind"](this),
              g4 = K["supportPointer"] ? "pointer" : 'mouse';

          if (K['on'](this['$slider'], g4 + "down", g0), K['on'](this["$jigsaw"], g4 + "down", g1), K['on'](M, g4 + "move", g2), K['on'](M, g4 + 'up', g3), 'pointer' === g4) {
            var g5 = J(this["onMouseDown"]["bind"](this)),
                g6 = J(this["onMouseDown"]["bind"](this)),
                g7 = J(this["onMouseMove"]["bind"](this)),
                g8 = this["onMouseUp"]['bind'](this),
                g9 = "mouse";
            K['on'](this["$slider"], g9 + "down", g5), K['on'](this["$jigsaw"], g9 + 'down', g6), K['on'](M, g9 + "move", g7), K['on'](M, g9 + 'up', g8), this["_removeMouseEvent"] = function () {
              K['off'](E["$slider"], g9 + "down", g5), K["off"](E["$jigsaw"], g9 + "down", g6), K["off"](M, g9 + "move", g7), K["off"](M, g9 + 'up', g8);
            };
          }

          return this["sliderTransition"] = K["transition"](this['$slider'], {
            'beforeLeave': function (gg) {
              gg['style']["transition"] = "left .3s ease-out";
            },
            'afterLeave': function (gg) {
              gg["style"]["transition"] = '';
            }
          }), K["supportPointer"] && (document["documentElement"]["style"]["touchAction"] = "none"), function () {
            K["off"](E['$slider'], g4 + "down", g0), K["off"](E["$jigsaw"], g4 + "down", g1), K["off"](M, g4 + "move", g2), K['off'](M, g4 + 'up', g3), "pointer" === g4 && E["_removeMouseEvent"](), E["sliderTransition"]['dispose'](), K['supportPointer'] && (document["documentElement"]["style"]["touchAction"] = "auto");
          };
        },
        'initPosition': function () {
          var E = this["$slider"]["offsetWidth"];
          this['$slider']["style"]['left'] = this["startLeft"] + 'px', this["$jigsaw"]["style"]["left"] = this["startLeft"] + 'px', this["$jigsaw"]['style']["transform"] = '', this["$jigsaw"]['style']["transformOrigin"] = '', this["$slideIndicator"]["style"]["width"] = this['startLeft'] + E + 'px';
        },
        'updateJigsawRotateAndLeft': function () {
          var E = this['$el']["offsetWidth"],
              w = this["$slider"]["offsetWidth"],
              Q = this["$jigsaw"]["offsetWidth"],
              J = this["restrict"](this['$jigsaw'], w - Q);

          if (this['ratio'] = (E / 2 - Q) / E, this["attrs"]) {
            var g0 = this['attrs'][0],
                g1 = J * this['ratio'];
            this["$jigsaw"]["style"]["left"] = g1 + 'px', this["$jigsaw"]['style']["transform"] = "rotate(" + g0 * g1 + 'deg)', this['$jigsaw']['style']['transformOrigin'] = g0 > 0 ? "bottom right" : "top right";
          }
        },
        'initJigsawPos': function (E) {
          E && (this["attrs"] = E['attrs'], this["updateJigsawRotateAndLeft"]());
        },
        'floatStatusChange': function () {
          this["updateJigsawRotateAndLeft"]();
        },
        'reset': function () {
          var E = this["$store"]['state'],
              w = E["countsOfVerifyError"],
              Q = E["config"],
              J = w > Q['maxVerification'];
          J || (this["initData"](), K["delClass"](this['$control'], "yidun_control--moving"), parseInt(this["$slider"]["style"]['left']) && this["sliderTransition"]["leave"](), this['initPosition']());
        },
        'changeLoadStatus': function (E) {
          var w = this,
              Q = E["data"];

          if (this["changeSlideIcon"](this['controlBar']["slideIcon"]), "loading" === E["status"] && Q) {
            var J = this["$store"]['state'],
                g0 = J["langPkg"],
                g1 = J["config"],
                g2 = J["captchaCollector"],
                g3 = K['find'](".yidun_tips__text", this['$el']),
                g4 = K["find"](".yidun_bg-img", this["$el"]),
                g5 = K['find']('.' + S["JIGSAW"], this["$el"]),
                g6 = this["$store"]["commit"],
                g7 = W(g2, {
              'token': Q["token"]
            });
            V["all"]([V["image"]({
              'url': Q['bg'],
              'timeout': g1["timeout"],
              'onProcess': g7
            }), V['image']({
              'url': Q["front"],
              'timeout': g1["timeout"],
              'onProcess': g7
            })])["then"](function (g8) {
              if (w["_isMounted"]) {
                var g9 = X(g8, 2),
                    gg = g9[0],
                    gT = g9[1];
                g4["src"] = gg["src"], g5["src"] = gT["src"], g5["onload"] = function () {
                  w["initJigsawPos"](Q);
                }, K["text"](g3, g0["slideTip"]), g6(L, {
                  'status': "done",
                  'data': Q
                });
              }
            })["catch"](function (g8) {
              if (w['_isMounted']) {
                var g9 = Object['assign']({}, g8['data'], {
                  'token': Q["token"]
                });
                g6(L, {
                  'status': "fail"
                }), g6(N, {
                  'name': "onError",
                  'args': [new G(A, g8['message'], g9)]
                });
              }
            });
          }
        },
        'onMouseDown': function (E) {
          E["event"]['cancelable'] !== !1 && E["preventDefault"](), this["mouseDownCounts"]++, this["width"] = this["$el"]["offsetWidth"];
          var w = this["$store"]["state"],
              Q = w['load'],
              J = w["verifyStatus"];

          if ('done' === Q['status'] && !J) {
            var g0 = E['clientX'],
                g1 = E["clientY"],
                g2 = this['drag'];
            "dragend" === g2["status"] && Object["assign"](g2, {
              'beginTime': F["now"](),
              'clientX': g0,
              'startX': g0,
              'clientY': g1,
              'startY': g1,
              'dragX': 0
            });
          }
        },
        'onMouseMove': function (E) {
          var w = E["clientX"],
              Q = E["clientY"],
              J = this['drag'],
              g0 = J["status"],
              g1 = J["beginTime"],
              g2 = J['startX'];

          if (J["status"] = g1 && w - g2 > 3 && "dragend" === g0 ? 'dragstart' : g0, "dragend" !== J['status']) {
            !(E["type"]["indexOf"]("touch") !== -1 && K["supportPassive"] || E["event"]["cancelable"] !== !1) && E['preventDefault'](), Object["assign"](J, {
              'clientX': w,
              'clientY': Q,
              'dragX': w - J["startX"]
            });
            var g3 = this["$store"]["state"]["token"],
                g4 = [Math["round"](J['dragX'] < 0 ? 0 : J["dragX"]), Math["round"](J["clientY"] - J["startY"]), F["now"]() - J["beginTime"]];
            this["atomTraceData"]["push"](g4);
            var g5 = j(g3, g4 + '');
            this["traceData"]["push"](g5), 'dragstart' === J["status"] && this["onMouseMoveStart"](E), "dragging" === J["status"] && this['onMouseMoving'](E);
          }
        },
        'onMouseMoveStart': function (E) {
          var w = K["getComputedStyle"](this["$slider"], 'left'),
              Q = K["find"](".yidun_tips__text", this["$el"]);
          K['text'](Q, ''), Object["assign"](this["drag"], {
            'status': "dragging",
            'startLeft': parseInt(w["slice"](0, -2), 10)
          });
        },
        'onMouseMoving': function () {
          var E = this["restrict"](this['$slider']);
          this["$slider"]["style"]["left"] = E + 'px';
          var w = this["$slider"]["offsetWidth"],
              Q = this["$jigsaw"]['offsetWidth'],
              J = this["restrict"](this["$jigsaw"], w - Q);
          this["attrs"] ? this["updateJigsawRotateAndLeft"]() : this['$jigsaw']["style"]["left"] = J + 'px', K["addClass"](this['$control'], "yidun_control--moving"), this["$slideIndicator"]["style"]["width"] = E + w + 'px', this['changeSlideIcon'](this['controlBar']["slideIconMoving"]);
        },
        'onMouseUp': function (E) {
          var w = this["drag"];
          if ("dragend" === w["status"]) return void Object['assign'](w, {
            'beginTime': 0
          });
          Object["assign"](w, this["initialDrag"]);
          var Q = F["sample"](this["traceData"], z),
              J = this["$store"]["state"]["token"],
              g0 = q(j(J, parseInt(this["$jigsaw"]["style"]['left'], 10) / this["width"] * 100 + '')),
              g1 = Z(F["unique2DArray"](this["atomTraceData"], 2));
          this['onVerifyCaptcha']({
            'data': JSON["stringify"]({
              'd': q(Q["join"](':')),
              'm': '',
              'p': g0,
              'f': q(j(J, g1["join"](','))),
              'ext': q(j(J, this["mouseDownCounts"] + ',' + this["traceData"]["length"]))
            })
          });
        },
        'restrict': function (E, w) {
          if (E) {
            var Q,
                J,
                g0 = this["drag"],
                g1 = g0["startLeft"],
                g2 = g0["dragX"],
                g3 = this['width'],
                g4 = E['offsetWidth'],
                g5 = this["$slider"]['offsetWidth'],
                g6 = g3 - g4,
                g7 = g1 + g2,
                g8 = w < 0 ? -w : w / 2;
            return E === this["$jigsaw"] && (g2 <= g8 ? (Q = g2, J = w < 0 ? -Q / 2 : Q, g7 += J) : g3 - g2 - g5 <= g8 ? (Q = g2 - (g3 - g5 - g8), J = w < 0 ? -Q / 2 : Q, g7 += w / 2 + J) : g7 += w / 2), g7 <= this["startLeft"] && (g7 = this["startLeft"]), g7 >= g6 && (g7 = g6), g7;
          }
        }
      }
    });
  }, function (B, R, D) {
    function X(M, C, E) {
      return C in M ? Object["defineProperty"](M, C, {
        'value': E,
        'enumerable': !0,
        'configurable': !0,
        'writable': !0
      }) : M[C] = E, M;
    }

    var O,
        K = D(8),
        F = D(4),
        Z = D(3),
        H = D(10),
        S = H["aes"],
        z = H["xorEncode"],
        I = D(5),
        L = I["CAPTCHA_TYPE"],
        k = I['CAPTCHA_CLASS'],
        N = I["SAMPLE_NUM"],
        P = D(6),
        q = P['SWITCH_LOAD_STATUS'],
        j = P["INVOKE_HOOK"],
        G = D(7),
        A = G["REQUEST_IMG_ERROR"],
        V = D(11),
        U = D(9),
        W = U["createNetCollect"];
    B["exports"] = K['_extend']({
      'abstract': !0,
      'props': ['loadInfo', "mode", 'type', 'isRtlLang'],
      'data': function () {
        var M = this["$store"]["state"]['langPkg'];
        return {
          'langPkg': M
        };
      },
      'on': (O = {}, X(O, '.' + k["BGIMG"] + " click", function (M) {
        this["onClick"](M);
      }), X(O, '.' + k["BGIMG"] + " mousemove", function (M) {
        this["trackMoving"](M);
      }), O),
      'mounted': function () {
        this["initData"](), this["$bgImg"] = F['find']('.' + k["BGIMG"], this["$el"]);
      },
      'beforeDestroy': function () {
        this["$bgImg"] = null;
      },
      'render': function (M) {
        var C = M["loadInfo"];

        if (C && "done" === C['status']) {
          var E = C["data"] && C["data"]["front"];
          Array["isArray"](E) && (E = E[0], C['data']["front"] = E);
        }

        C && this["changeLoadStatus"](C);
      },
      'methods': {
        'initData': function () {
          this["pointsStack"] = [], this["MAX_POINTS"] = 0, this["traceData"] = [], this['beginTime'] = 0, this["clickCounts"] = 0;
        },
        'reset': function () {
          var M = this['$store']["state"],
              C = M["countsOfVerifyError"],
              E = M["config"],
              w = C > E["maxVerification"];
          w || (this["cleanPoints"](), this["initData"]());
        },
        'floatStatusChange': function () {
          if (this["$parent"]["shouldHandleFloatChange"](this["loadInfo"])) {
            var M = this["loadInfo"]["data"]["front"] || '';
            this["changeTipElText"]({
              'message': M
            });
          }
        },
        'changeTipElText': function (M) {
          var C = M["message"],
              E = void 0 === C ? '' : C,
              w = this["$store"]['state']["config"],
              Q = this["langPkg"],
              J = this["$parent"]["panelVisible"],
              g0 = "float" === (this['mode'] || w["mode"]),
              g1 = F["find"](".yidun_tips__text", this["$el"]),
              g2 = F["find"]('.yidun_tips__answer', this["$el"]),
              g3 = F["find"](".yidun_tips__point", this['$el']);
          g0 && !J ? (F["text"](g1, Q['clickButton']), F["addClass"](this["$el"], "yidun--button"), F["addClass"](g2, "hide")) : (this["type"] === L["ICON_POINT"] ? F['text'](g1, Q['clickInTurn']) : this["type"] === L["WORD_GROUP"] ? F["text"](g1, Q["clickOverlapWord"]) : this["type"] === L["WORD_ORDER"] ? F["text"](g1, Q["clickWordInTurn"]) : this["type"] === L['SPACE'] ? F["text"](g1, E) : (this['isRtlLang'] && (E = Z["reverse"](E)), F["text"](g3, E['replace'](/./g, " \"$&\"")), F["text"](g1, Q["clickInTurn"])), F["delClass"](g2, "hide"), F["delClass"](this["$el"], "yidun--button"));
        },
        'changeLoadStatus': function (M) {
          var C = this,
              E = M['status'],
              w = M["data"];

          switch (E) {
            case "loading":
              if (w) {
                var Q = F["find"](".yidun_bg-img", this['$el']),
                    J = F["find"](".yidun_tips__img", this["$el"]),
                    g0 = this["$store"],
                    g1 = g0["commit"],
                    g2 = g0["state"],
                    g3 = V["image"]({
                  'url': w['bg'],
                  'timeout': g2["config"]["timeout"],
                  'onProcess': W(g2['captchaCollector'], {
                    'token': w["token"]
                  })
                });
                g3["then"](function (g6) {
                  C["_isMounted"] && (Q["src"] = g6["src"], C["type"] === L['ICON_POINT'] && (J["src"] = g6["src"]), g1(q, {
                    'status': "done",
                    'data': w
                  }));
                })["catch"](function (g6) {
                  if (C["_isMounted"]) {
                    var g7 = Object["assign"]({}, g6["data"], {
                      'token': w["token"]
                    });
                    g1(q, {
                      'status': "fail"
                    }), g1(j, {
                      'name': 'onError',
                      'args': [new G(A, g6["message"], g7)]
                    });
                  }
                });
              }

              break;

            case "done":
              var g4 = w["front"] || '',
                  g5 = 0;
              g5 = this['type'] === L["ICON_POINT"] ? 3 : this["type"] === L["WORD_GROUP"] || this['type'] === L["WORD_ORDER"] ? parseInt(g4, 10) : this['type'] === L["SPACE"] ? 1 : g4["length"], this["MAX_POINTS"] = g5, this["changeTipElText"]({
                'message': g4
              });
          }
        },
        'onClick': function (M) {
          var C = this,
              E = this["$store"]["state"],
              w = E["countsOfVerifyError"],
              Q = E["config"],
              J = w > Q['maxVerification'];

          if (!J) {
            this["clickCounts"]++;
            var g0 = this["$bgImg"]["getBoundingClientRect"](),
                g1 = g0["left"],
                g2 = g0["top"];
            this["pointsStack"]["length"] || (this['beginTime'] = Z["now"]());
            var g3 = this["pointsStack"]['slice'](-1)[0];
            return g3 && M["target"] === g3['el'] && !this["$store"]["state"]["verifyStatus"] ? void Z['raf'](function () {
              return C["$bgImg"]['removeChild'](C["pointsStack"]["pop"]()['el']);
            }) : void this["addPoint"]({
              'left': M["clientX"] - g1,
              'top': M["clientY"] - g2
            });
          }
        },
        'trackMoving': function (M) {
          if (this["beginTime"]) {
            var C = this['$bgImg']["getBoundingClientRect"](),
                E = C["left"],
                w = C["top"],
                Q = z(this['$store']["state"]["token"], [Math["round"](M['clientX'] - E), Math["round"](M["clientY"] - w), Z["now"]() - this["beginTime"]] + '');
            this["traceData"]["push"](Q);
          }
        },
        'addPoint': function (M) {
          var C = M["left"],
              E = M['top'],
              w = this["pointsStack"]["length"] + 1;

          if (!(w > this["MAX_POINTS"])) {
            var Q = document["createElement"]("div");
            Q['className'] = "yidun_icon-point yidun_point-" + w, F['css'](Q, "left: " + (C - 10) + "px; top: " + (E - 25) + "px;"), this["$bgImg"]["appendChild"](Q), this["pointsStack"]["push"]({
              'el': Q,
              'coord': z(this['$store']["state"]['token'], [Math["round"](C), Math["round"](E), Z["now"]() - this['beginTime']] + '')
            }), this['shouldVerifyCaptcha']();
          }
        },
        'shouldVerifyCaptcha': function () {
          var M = this['pointsStack'];

          if (M["length"] === this["MAX_POINTS"]) {
            var C = M['map'](function (w) {
              return w['coord'];
            }),
                E = this["traceData"];
            this['onVerifyCaptcha']({
              'data': JSON["stringify"]({
                'd': '',
                'm': S(Z['sample'](E, N)['join'](':')),
                'p': S(C["join"](':')),
                'ext': S(z(this["$store"]["state"]["token"], this['clickCounts'] + ',' + E["length"]))
              })
            });
          }
        },
        'cleanPoints': function () {
          for (var M; M = this["pointsStack"]["pop"]();) this["$bgImg"]["removeChild"](M['el']);
        }
      }
    });
  }, function (B, m, v) {
    var R = v(8),
        D = v(4),
        X = v(61),
        O = v(3),
        K = v(6),
        F = K["SWITCH_LOAD_STATUS"],
        Z = K["UPDATE_VERIFY_STATUS"],
        H = K["INVOKE_HOOK"],
        S = v(7),
        z = S['REQUEST_IMG_ERROR'],
        I = v(11),
        L = v(9),
        k = L["createNetCollect"];
    B["exports"] = R['_extend']({
      'abstract': !0,
      'props': ["loadInfo"],
      'data': function () {
        var N = this["$store"]['state'],
            P = N["langPkg"],
            f = N["config"]["lang"],
            q = N["smsNew"],
            j = N["smsNewVersion"],
            b = N["version"];
        return {
          'langPkg': P,
          'lang': f,
          'smsNew': q,
          'qr': null,
          'smsNewVersion': j,
          'version': b
        };
      },
      'mounted': function () {
        var N = this;
        this["TIMEOUT_SECONDS"] = 300, this["_unsubscribe"] = this['$store']["subscribe"](function (P, f) {
          var q = P["type"],
              j = f["verifyStatus"];

          switch (q) {
            case Z:
              switch (j) {
                case "success":
                case "error":
                  N["clearTimers"]();
              }

          }
        }), this["smsNew"] && (this["_removeEvents"] = this['initEvents']());
      },
      'beforeDestroy': function () {
        this["_unsubscribe"](), this["clearTimers"](), this["smsNew"] && this["_removeEvents"] && this["_removeEvents"]();
      },
      'render': function (N) {
        var P = N["loadInfo"];
        P && this["changeLoadStatus"](P);
      },
      'methods': {
        'initEvents': function () {
          var N = D["find"]('.yidun_smsbox', this["$el"]),
              P = D["find"]('.yidun_smsbox-text--manual', this['$el']),
              f = D['find'](".yidun_smsbox-mobile--manual-btn", this["$el"]),
              q = D["find"](".yidun_smsbox-manual--qr", this["$el"]),
              j = D["find"](".yidun_smsbox-manual--btn", this["$el"]),
              b = function () {
            D["addClass"](N, "yidun_smsbox--manual");
          };

          P && D['on'](P, "click", b, !0), f && D['on'](f, "click", b, !0);

          var G = function () {
            D['delClass'](N, "yidun_smsbox--manual");
          };

          return q && D['on'](q, "click", G, !0), j && D['on'](j, "click", G, !0), function () {
            P && D['off'](P, 'click', b, !0), q && D["off"](q, "click", G, !0), j && D["off"](j, "click", G, !0);
          };
        },
        'changeLoadStatus': function (N) {
          var P = this,
              q = N["status"],
              j = N["data"];

          switch (q) {
            case 'loading':
              if (j) {
                var G = D["find"](".yidun_bg-img", this['$el']),
                    A = D["find"]('.yidun_smsbox-qrcode--img', this["$el"]),
                    V = D["find"](".yidun_smsbox-manual--edit-content", this["$el"]),
                    U = D["find"]('.yidun_smsbox-manual--send-content__short', this["$el"]),
                    W = D["find"](".yidun_smsbox-manual--send-content__backup", this["$el"]),
                    M = D['find']('.yidun_smsbox--mobile-btn-inner', this['$el']),
                    C = this["$store"],
                    E = C["commit"],
                    w = C["state"],
                    Q = I["image"]({
                  'url': j['bg'],
                  'timeout': w["config"]["timeout"],
                  'onProcess': k(w['captchaCollector'], {
                    'token': j["token"]
                  })
                });
                Q['then'](function (g1) {
                  if (P['smsNew'] && A && V && U && W && M) {
                    var g2 = j["front"] && "string" == typeof j["front"] ? j["front"]['split'](',') : [];

                    if (3 === g2["length"]) {
                      D["text"](V, g2[0]), D["text"](U, g2[1]), D["text"](W, P["langPkg"]["sms"]['or'] + g2[2]);
                      var g3 = !1,
                          g4 = g3 ? 'http' : 'https',
                          g5 = P["$store"]["state"]["config"]["staticServer"],
                          g6 = O['encodeUrlParams']({
                        'code': g2[0],
                        'phone': g2[1],
                        'phoneBackup': g2[2],
                        'lang': P["lang"],
                        'version': w["smsVersion"]
                      }),
                          g7 = "sms" + (g3 ? '' : '.v' + P['version']) + ".html",
                          g8 = g4 + "://" + (Array["isArray"](g5) ? g5[0] : g5) + (g3 ? '' : "/api/v2") + '/' + g7 + '?' + g6;
                      P['qr'] && P['qr']['clear'] && (P['qr']["clear"](), P['qr'] = null), D["html"](A, ''), P['qr'] = new X(A, {
                        'text': g8,
                        'width': 96,
                        'height': 96,
                        'useCanvas': !0,
                        'correctLevel': X['CorrectLevel']['M']
                      });
                      var g9 = "10690163",
                          gg = "106981630163",
                          gT = g2[1]["indexOf"](g9) || g2[1]['indexOf'](gg) || g2[2]["indexOf"](g9) || g2[2]["indexOf"](gg);

                      if (gT) {
                        var gB = '',
                            gp = window["navigator"]['userAgent'],
                            gm = g2[1];
                        gB = /(iPhone|iPad|iPod|iOS)/i["test"](gp) ? "sms:" + gm + "&body=" + g2[0] : "sms:" + gm + "?body=" + g2[0], M["setAttribute"]("href", P["smsNewVersion"] > 1 ? gB : g8);
                      }
                    }
                  } else G["src"] = g1["src"];

                  E(F, {
                    'status': "done",
                    'data': j
                  });
                })["catch"](function (g1) {
                  var g2 = Object['assign']({}, g1["data"], {
                    'token': j['token']
                  });
                  E(F, {
                    'status': "fail"
                  }), E(H, {
                    'name': 'onError',
                    'args': [new S(z, g1["message"], g2)]
                  });
                });
              }

              break;

            case "done":
              var J = D["find"](".yidun_tips__text", this["$el"]),
                  g0 = this['langPkg'];
              J['innerHTML'] = g0["waitForSMS"] + "\n          <span class=\"yidun_sms-counter\"></span>", this["countDown"](), this["pollingToVerify"]();
          }
        },
        'pollingToVerify': function () {
          var N = this,
              P = this['TIMEOUT_SECONDS'],
              f = 5,
              q = 0,
              j = function b() {
            return f * q >= P ? void N["$store"]["commit"](Z, {
              'verifyStatus': "error",
              'error': new Error("SMS is outdated")
            }) : (q++, N["onVerifyCaptcha"]({
              'data': ''
            }), void (N['pollingTimer'] = setTimeout(b, 1000 * f)));
          };

          j();
        },
        'countDown': function () {
          var N = this,
              P = this["TIMEOUT_SECONDS"],
              f = D['find'](".yidun_sms-counter", this["$el"]),
              q = function j() {
            D["text"](f, P-- + 's'), 0 !== P && (N['countTimer'] = setTimeout(j, 1000));
          };

          q();
        },
        'clearTimers': function () {
          this["countTimer"] && (clearTimeout(this['countTimer']), this["countTimer"] = null), this["pollingTimer"] && (clearTimeout(this["pollingTimer"]), this["pollingTimer"] = null);
        },
        'reset': function () {
          this['clearTimers']();
        }
      }
    });
  }, function (B, R, D) {
    function X(E, w, Q) {
      return w in E ? Object["defineProperty"](E, w, {
        'value': Q,
        'enumerable': !0,
        'configurable': !0,
        'writable': !0
      }) : E[w] = Q, E;
    }

    var O,
        K = D(8),
        F = D(4),
        Z = D(3),
        H = D(10),
        S = H["aes"],
        z = H["xorEncode"],
        I = D(5),
        L = I["CAPTCHA_CLASS"],
        N = I["SAMPLE_NUM"],
        P = I["LARGE_SIZE_TYPE"],
        q = D(6),
        j = q["SWITCH_LOAD_STATUS"],
        G = q['INVOKE_HOOK'],
        A = q["EVENT_CLOSE"],
        V = D(7),
        U = V["REQUEST_AUDIO_ERROR"],
        W = D(11),
        M = D(9),
        C = M['createNetCollect'];
    B['exports'] = K["_extend"]({
      'abstract': !0,
      'props': ["loadInfo", 'mode', "size", "type", 'fixedAudio'],
      'data': function () {
        var E = this["$store"]["state"]["langPkg"];
        return {
          'langPkg': E,
          'playStatus': "start",
          'yidunFontSize': null
        };
      },
      'on': (O = {}, X(O, '.' + L["CONTROL"] + " keydown", function (E) {
        function w(Q) {
          return E["apply"](this, arguments);
        }

        return w["toString"] = function () {
          return E["toString"]();
        }, w;
      }(function (E) {
        if (E) {
          var w = E["nativeEvent"]["event"];

          if (w) {
            var Q = !1;
            void 0 !== w["key"] ? Q = "Spacebar" === w["key"] || " " === w["key"] || 'Enter' === w['key'] : void 0 !== w["keyCode"] && (Q = 13 === w["keyCode"] || 32 === w["keyCode"]), Q && (E["preventDefault"](), this["handleVerifyBtn"](E));
          }
        }
      })), X(O, ".yidun_voice__input keydown", function (E) {
        if (E) {
          var w = E["nativeEvent"]["event"];

          if (w) {
            var Q = !1;
            void 0 !== w['key'] ? Q = "Spacebar" === w["key"] || " " === w["key"] || "Enter" === w["key"] : void 0 !== w["keyCode"] && (Q = 13 === w["keyCode"] || 32 === w['keyCode']), Q && (E['preventDefault'](), this["handleVerifyBtn"]());
          }
        }
      }), X(O, '.' + L["BGIMG"] + " mousemove", function (E) {
        this['trackMoving'](E);
      }), O),
      'mounted': function () {
        var E = this;

        if (this['initData'](), this["_removeEvents"] = this['initEvents'](), this["fixedAudio"]) {
          var w = F["find"](".yidun_voice__back", this["$el"]);
          w["style"]["display"] = "inline-block";
        }

        this["_unsubscribe"] = this["$store"]['subscribe'](function (Q, J) {
          var g0 = Q["type"];
          g0 === A && E["resetAudio"]();
        }), this["adjustUI"]();
      },
      'beforeDestroy': function () {
        this["_removeEvents"](), this["_unsubscribe"](), this["$bgImg"] = null, this["$input"] = null;
      },
      'render': function (E) {
        var w = E["loadInfo"],
            Q = E['playStatus'];
        w && this['changeLoadStatus'](w), Q && this['changeAudioStatus'](Q);
      },
      'methods': {
        'initData': function () {
          this["traceData"] = [], this["beginTime"] = 0, this["clickCounts"] = 0;
        },
        'adjustUI': function () {
          function E(g0, g1) {
            if (!g1 || "function" != typeof window["getComputedStyle"]) return g0;
            var g2 = g0;

            try {
              g2 = parseInt(window["getComputedStyle"](g1, null)["getPropertyValue"]('font-size'), 10);
            } catch (g4) {
              return g2;
            }

            var g3 = g0 / g2;
            return Math["floor"](g0 * g3);
          }

          var w = F["find"](".yidun_voice", this["$el"]);
          this["$el"]["offsetWidth"] <= 280 && F['addClass'](w, "yidun_voice-280"), this['$el']["offsetWidth"] < 240 && F["addClass"](w, "yidun_voice-240");
          var Q = F["find"](".yidun");

          if (Q) {
            var J = Q["style"]["fontSize"];
            '' !== J && this["$setData"]({
              'yidunFontSize': J
            }), Q["style"]['fontSize'] = E(P[this["size"]], Q) + 'px';
          }
        },
        'resetYidunFontSize': function () {
          var E = F["find"](".yidun");
          E && (null !== this["yidunFontSize"] ? E['style']['fontSize'] = this["yidunFontSize"] : E["style"]["fontSize"] = '');
        },
        'initEvents': function () {
          var E = this,
              w = this["onClick"]['bind'](this);
          this["$bgImg"] = F['find']('.' + L["BGIMG"], this["$el"]), this["$input"] = F["find"]('.yidun_voice__input', this["$el"]);

          var Q = F["find"](".yidun_audio__play", this['$el']),
              J = F["find"](".yidun_audio__source", this["$el"]),
              g0 = F["find"]('.' + L["CONTROL"], this["$el"]),
              g1 = F["find"]('.yidun_voice__refresh', this['$el']),
              g2 = F["find"](".yidun_audio__refresh", this["$el"]),
              g3 = F["find"](".yidun_voice__back", this['$el']),
              g4 = this['onPlayerClick']["bind"](this),
              g5 = this["onAudioEnded"]["bind"](this),
              g6 = this['handleVerifyBtn']["bind"](this),
              g7 = function (gT) {
            var gB = !(arguments["length"] > 1 && void 0 !== arguments[1]) || arguments[1];
            return function (gp) {
              E["resetYidunFontSize"](), gB && E["adjustUI"]();
              var gm = E["$store"]["state"]["verifyStatus"];
              gm || (gT || E["resetAudio"](), E["$parent"]['switchTypeAndRefresh'](gp, gT));
            };
          },
              g8 = g7(),
              g9 = g7(),
              gg = g7(!1, !1);

          return F['on'](this["$input"], "focus", w), F['on'](Q, 'click', g4, !0), F['on'](J, 'ended', g5), F['on'](g0, "click", g6, !0), F['on'](g1, 'click', g8, !0), g2 && F['on'](g2, "click", g9, !0), g3 && F['on'](g3, "click", gg, !0), function () {
            F["off"](E['$input'], "focus", w), F["off"](Q, "click", g4, !0), F["off"](J, "ended", g5), F["off"](g0, "click", g6, !0), F["off"](g1, "click", g8, !0), g2 && F["off"](g2, 'click', g9, !0), g3 && F["off"](g3, 'click', gg, !0);
          };
        },
        'reset': function () {
          var E = this["$store"]["state"],
              w = E["countsOfVerifyError"],
              Q = E["config"],
              J = w > Q["maxVerification"];

          if (!J) {
            this["initData"](), this["$input"]["value"] = '';
            var g0 = F["find"]('.' + L["CONTROL"], this['$el']);
            g0["setAttribute"]("role", '');
          }
        },
        'changeLoadStatus': function (E) {
          var w = this,
              Q = E["status"],
              J = E["data"];

          if ("loading" === Q && J) {
            var g0 = F["find"]('.yidun_audio__source', this["$el"]),
                g1 = F["find"](".yidun_tips__text", this["$el"]),
                g2 = F["find"]('.' + L["CONTROL"], this["$el"]),
                g3 = this["$store"],
                g4 = g3['commit'],
                g5 = g3["state"],
                g6 = W["audio"]({
              'url': J['bg'],
              'timeout': g5["config"]["timeout"],
              'onProcess': C(g5["captchaCollector"], {
                'token': J['token']
              })
            });
            g6["then"](function (g8) {
              w['_isMounted'] && (g0["src"] = g8['src'], F["text"](g1, g5['langPkg']["check"]), g2["setAttribute"]('role', 'button'), g4(j, {
                'status': 'done',
                'data': g8
              }), w["$setData"]({
                'playStatus': "start"
              }), w['addAudioWave']());
            })["catch"](function (g8) {
              if (w["_isMounted"]) {
                var g9 = Object["assign"]({}, g8["data"], {
                  'token': J["token"]
                });
                g4(j, {
                  'status': "fail"
                }), g4(G, {
                  'name': "onError",
                  'args': [new V(U, g8["message"], g9)]
                });
              }
            });
          } else {
            if ('done' === Q) {
              var g7 = F["find"](".yidun_audio__play", this['$el']);
              setTimeout(function () {
                return g7["focus"]();
              }, 150);
            }
          }
        },
        'addAudioWave': function () {
          var E = this,
              w = F["find"](".yidun_audio__source", this["$el"]);
          w["onloadeddata"] = function () {
            w['onloadeddata'] = null;
            var Q = F['find']('.yidun_audio__wave', E["$el"]);
            Q["innerHTML"] = '';

            for (var J = w["duration"] > 7 && w["duration"] !== 1 / 0 ? w["duration"] : 7, g0 = Math["round"](1000 * J / 500), g1 = document["createDocumentFragment"](); g0;) {
              var g2 = document['createElement']("span");
              g2["className"] = "yidun_wave__item yidun_wave-" + g0 % 10, g2["innerHTML"] = "<span class=\"yidun_wave__inner\"></span>", g1["appendChild"](g2), g0--;
            }

            Q['appendChild'](g1);
          }, w["load"]();
        },
        'changeAudioStatus': function (E) {
          var w = this,
              Q = F["find"](".yidun_audio__play", this["$el"]),
              J = F['find'](".yidun_audio__refresh", this['$el']),
              g0 = function () {
            var g2 = F["findAll"](".yidun_wave__item", w["$el"]),
                g3 = F["find"](".yidun_audio__wave", w['$el']);
            g3 && g3["focus"]();

            var g4 = 0,
                g5 = function g6() {
              w["timer"] && clearTimeout(w['timer']), g4 > g2['length'] || (F["addClass"](g2[g4], 'yidun_wave__item-light'), g4++, w["timer"] = setTimeout(g6, 480));
            };

            g5();
          },
              g1 = function () {
            clearTimeout(w["timer"]);

            for (var g2 = F['findAll'](".yidun_wave__item", w["$el"]), g3 = 0; g3 < g2["length"]; g3++) F['delClass'](g2[g3], "yidun_wave__item-light");
          };

          switch (E) {
            case "start":
              Q['style']["display"] = '', J["style"]["display"] = "none", g1();
              break;

            case 'playing':
              Q['style']["display"] = "none", J["style"]["display"] = "none", g0();
              break;

            case 'ended':
              Q["style"]['display'] = '', J["style"]["display"] = '', g1();
          }
        },
        'resetAudio': function () {
          var E = F['find'](".yidun_audio__source", this["$el"]);
          E && (E['pause'](), E["currentTime"] = 0, this["$setData"]({
            'playStatus': "start"
          }));
        },
        'onPlayerClick': function (E) {
          this['beginTime'] = Z["now"](), this["onClick"](E);
          var w = F['find'](".yidun_audio__source", this['$el']);
          w && w['play'](), this["$setData"]({
            'playStatus': "playing"
          });
        },
        'onClick': function (E) {
          var w = this["$store"]["state"],
              Q = w["countsOfVerifyError"],
              J = w["config"],
              g0 = Q > J['maxVerification'];
          g0 || this["clickCounts"]++;
        },
        'onAudioEnded': function () {
          this["$setData"]({
            'playStatus': "ended"
          });
        },
        'trackMoving': function (E) {
          if (this["beginTime"]) {
            var w = this["$bgImg"]['getBoundingClientRect'](),
                Q = w['left'],
                J = w["top"],
                g0 = z(this["$store"]['state']['token'], [Math["round"](E["clientX"] - Q), Math["round"](E["clientY"] - J), Z["now"]() - this["beginTime"]] + '');
            this['traceData']["push"](g0);
          }
        },
        'handleVerifyBtn': function (E) {
          var w = this["$store"]['state'],
              Q = w["load"],
              J = w['verifyStatus'];

          if ('done' === Q["status"] && !J) {
            var g0 = F["find"]('.' + L["CONTROL"], this["$el"]);
            g0['setAttribute']('role', ''), this["onClick"]();
            var g1 = this["$input"]["value"],
                g2 = this["traceData"];
            this["onVerifyCaptcha"]({
              'data': JSON["stringify"]({
                'd': '',
                'm': S(Z["sample"](g2, N)["join"](':')),
                'p': S(z(this['$store']["state"]["token"], g1 + ',' + (Z["now"]() - this['beginTime']))),
                'ext': S(z(this["$store"]["state"]["token"], this["clickCounts"] + ',' + this['traceData']['length']))
              })
            }), this["beginTime"] = 0;
          }
        }
      }
    });
  }, function (B, D, X) {
    function K(gX, gO) {
      var gr = this,
          gK = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          gF = gK["startTimestamp"];
      gX = g1(gX);
      var gZ = {};
      gZ = 'dark' === gX['theme'] ? gX["__theme__"] : gD, J(gZ, {
        'protocol': gX["protocol"],
        'staticServer': Array["isArray"](gX["staticServer"]) ? gX["staticServer"][0] : gX["staticServer"],
        'theme': gX["theme"]
      });
      var gH = window['gdxidpyhxde'];
      gO = gO || new gR({
        'bid': gX['captchaId'],
        'url': ''
      }, gX);

      var gS = Object['assign']({}, Q["state"], {
        'config': gX,
        'fingerprint': gH,
        'langPkg': gX['customTexts'],
        'smsNew': (gX['smsNewVersion'] > 1 || !!gX['smsNew'] || !g2["isMobile"]) && g2["supportCanvas"],
        'smsNewVersion': gX['smsNewVersion'],
        'smsVersion': 'v3',
        'iv': gm,
        '$fetch': g0({
          'timeout': gX['timeout'],
          'captchaConfig': gX
        }),
        '$captchaAnticheat': new gi(gX, gO),
        'captchaCollector': gO,
        'browserFeature': ga,
        'startTimestamp': gF
      }),
          gz = new W(Object["assign"]({}, Q, {
        'state': gS
      })),
          gl = gX['__serverConfig__']["smart"],
          gI = null,
          gL = function (gq) {
        var ge = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : '';

        if (!gX['disableValidateInput'] && gq && gq['nodeType']) {
          var gd = g2["find"](".yidun_input", gq);
          gd ? gd["value"] = ge : (gd = document["createElement"]('input'), gd["type"] = 'hidden', gd['name'] = "NECaptchaValidate", gd["value"] = ge, gd['className'] = "yidun_input", gq["appendChild"](gd));
        }
      },
          gk = {
        'onVerify': function (gq, ge) {
          if (gq) {
            var gd = gq['data'];

            if (gd && gd['counts'] > gX["maxVerification"]) {
              var gj = new g7(g8, "verify failed more then " + gX["maxVerification"] + " times--" + gq["message"], Object["assign"]({
                'token': gd["token"]
              }, gq["data"]));
              return void gO["collectErr"](gj);
            }

            return void (gq["code"] === g9 && gq["data"]["errorCode"] !== gg && gO["collectErr"](gq));
          }

          var gb = ge["validate"];
          gL(gX['element'], gb), gO["clear"]();
        },
        'onError': function (gq) {
          gq && "get" === gq["data"]['api'] && gq["code"] === g9 && gq["data"]['errorCode'] !== gg && gO["collectErr"](gq);
        }
      };

      this["version"] = gz['state']["version"], this['captchaId'] = gX["captchaId"], this["captchaType"] = gz["state"]["captchaType"], this["mode"] = gX["mode"], this["theme"] = gX['theme'], this['protocol'] = gX["protocol"], this['lang'] = gX["lang"];
      var gN = gz["subscribe"](function (gq, ge) {
        var gd = gq["type"],
            gj = gq["payload"];

        switch (gd) {
          case q:
            gr['captchaType'] = ge["captchaType"];
            break;

          case V:
          case G:
            gL(gX['element'], '');
            break;

          case j:
            var gb = gj["name"],
                gG = gj['args'];
            window['setTimeout'](function () {
              var gA = gk[gb];
              !gG && (gG = [gr]), gA && gA['apply'](null, gG), "function" == typeof gX[gb] && gX[gb]['apply'](null, gG);
            });
        }
      });
      F["mixin"]({
        'beforeCreate': function () {
          this['$store'] = this['$parent'] && this["$parent"]["$store"] || this["$options"]['store'];
        }
      }), this["popUp"] = function () {
        gX["apiVersion"] > 1 ? gT['assert'](!1, "apiVersion: " + gX["apiVersion"] + " unsupport popUp") : gT["assert"](!1, "popUp function could only be invoked in not intellisense and mode is popup");
      }, this['close'] = function () {
        gT["assert"](!1, "close function could only be invoked in only \"enableClose\" is true and intellisense on mobile devices or mode is bind/popup");
      }, this['verify'] = function () {
        gX['apiVersion'] > 1 ? gT["assert"](!1, "verify function could only be invoked when mode is popup") : gT["assert"](!1, "verify function could only be invoked in intellisense and mode is bind");
      };

      var gP = function (gq, ge) {
        gX['enableClose'] && (ge && !g2["isMobile"] || (gr["close"] = function () {
          var gd = gq || gI;
          gd && gd["closeModal"]();
        }));
      };

      switch (gl) {
        case !0:
          if ("bind" === this["mode"]) {
            var gh = F["_extend"](g6);
            gI = new gh({
              'abstract': !0,
              'el': gX["element"],
              'store': gz
            }), this["verify"] = function () {
              if (gz["state"]['token']) gI["verifyCaptcha"]();else var gq = gz["subscribe"](function (ge, gd) {
                var gj = ge["type"];
                ge["payload"], gj === U && (gI['verifyCaptcha'](), gq());
              });
            }, gP(gI), this["_captchaIns"] = gI;
          } else {
            gI = new F({
              'el': gX['element'],
              'store': gz,
              'template': '<captcha-intellisense></captcha-intellisense>',
              'components': {
                'captcha-intellisense': g5
              }
            });
            var gf = gI && gI['$children'] && gI['$children'][0];
            gP(gf, !0), this["_captchaIns"] = gf;
          }

          break;

        case !1:
        default:
          'popup' === this["mode"] ? (this[gX['apiVersion'] > 1 ? "verify" : 'popUp'] = function () {
            if (!gI) {
              var gq = F["_extend"](g4);
              gI = new gq({
                'store': gz,
                'propsData': {
                  'onBeforeClose': function () {
                    gz["commit"](j, {
                      'name': "onBeforeClose"
                    });
                  },
                  'onClose': function (ge) {
                    gz["commit"](j, {
                      'name': "onClose",
                      'args': [{
                        'source': ge
                      }]
                    });
                  },
                  'onOpen': function () {
                    gz['commit'](j, {
                      'name': "onOpen"
                    });
                  },
                  'onWidthGeted': function (ge) {
                    g2["delClass"](ge, gv);
                  },
                  'enableColor': !0,
                  'autoOpen': !1
                }
              })['$mount'](function (ge) {
                g2["addClass"](ge, gv), gX["appendTo"] ? gX["appendTo"]["appendChild"](ge) : document["body"]["appendChild"](ge);
              });
            }

            gI["open"](), this["_captchaIns"] = gI;
          }, gP()) : (gI = new F({
            'el': gX["element"],
            'store': gz,
            'template': "<captcha-core :enableColor=\"true\"></captcha-core>",
            'components': {
              'captcha-core': g3
            }
          }), this['_captchaIns'] = gI);
      }

      gL(gX["element"]), this["getCaptchaType"] = function () {
        for (var gq in gp) if (gp[gq] === gz['state']["type"]) return gq["toLowerCase"]();

        return '';
      }, this['isIntellisense'] = function () {
        return !!gl;
      }, this["refresh"] = function () {
        gz["commit"](G);
      }, this["destroy"] = function () {
        gN(), gI && (gI["$destroy"](), gI = null);
        var gq = gX["element"];

        if (gq) {
          var ge = g2["find"](".yidun_input", gq);
          ge && gq["removeChild"](ge);
        }

        L && "function" == typeof L && L();
      };
    }

    var F = X(8),
        Z = X(27),
        H = Z(),
        L = H["destroy"],
        N = X(6),
        q = N["SWITCH_TYPE"],
        j = N['INVOKE_HOOK'],
        G = N["EVENT_RESET"],
        V = N["EVENT_RESET_CLASSIC"],
        U = N["SET_TOKEN"],
        W = X(55),
        Q = X(71),
        J = X(42),
        g0 = X(22),
        g1 = X(47),
        g2 = X(4),
        g3 = X(15),
        g4 = X(16),
        g5 = X(41),
        g6 = X(33),
        g7 = X(7),
        g8 = g7["UNPASS_ERROR"],
        g9 = g7["BUSINESS_ERROR"],
        gg = g7["QPS_LIMIT_ERROR"],
        gT = X(3),
        gB = X(5),
        gp = gB["CAPTCHA_TYPE"],
        gm = gB["IV_VERSION"],
        gv = gB["POPUP_PRELOAD_SHIFTING_CLASS"],
        gi = X(44),
        gR = X(9),
        ga = X(43),
        gD = X(72);
    B["exports"] = window["NECaptcha"] || K;
  }, function (B, D, X) {
    var K = function () {
      function gv(gi, gR) {
        var ga = [],
            gD = !0,
            gX = !1,
            gO = void 0;

        try {
          for (var gr, gK = gi[Symbol["iterator"]](); !(gD = (gr = gK['next']())["done"]) && (ga["push"](gr["value"]), !gR || ga["length"] !== gR); gD = !0);
        } catch (gF) {
          gX = !0, gO = gF;
        } finally {
          try {
            !gD && gK["return"] && gK['return']();
          } finally {
            if (gX) throw gO;
          }
        }

        return ga;
      }

      return function (gi, gR) {
        if (Array["isArray"](gi)) return gi;
        if (Symbol['iterator'] in Object(gi)) return gv(gi, gR);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        F = X(14),
        Z = F["FETCH_INTELLISENSE_CAPTCHA"],
        H = F["VERIFY_INTELLISENSE_CAPTCHA"],
        L = F["RESET_STATE"],
        N = X(6),
        P = N["SWITCH_LOAD_STATUS"],
        q = N["UPDATE_VERIFY_STATUS"],
        j = N["INVOKE_HOOK"],
        G = N['EVENT_RESET'],
        V = X(5),
        U = V["CAPTCHA_TYPE"],
        W = V["SAMPLE_NUM"],
        M = V["RTL_LANGS"],
        Q = V["SIZE_TYPE"],
        J = V["LARGE_SIZE_TYPE"],
        g0 = V["POPUP_PRELOAD_SHIFTING_CLASS"],
        g1 = V["CLASSIC_WRAPPER_PRELOAD_SHIFTING_CLASS"],
        g2 = X(3),
        g3 = X(4),
        g4 = X(19),
        g5 = X(10),
        g6 = g5['aes'],
        g7 = g5['xorEncode'],
        g8 = X(8),
        g9 = X(15),
        gg = X(16),
        gT = X(13),
        gB = X(17),
        gp = gB["applyColorIfNeed"],
        gm = gB["applyStyleIfNeed"];

    B['exports'] = {
      'el': ".yidun_intellisense",
      'template': X(74),
      'components': {
        'captcha-core': g9
      },
      'data': function () {
        var gv = this["$store"]['state'],
            gi = gv["langPkg"],
            gR = gv['config'];
        return {
          'langPkg': gi,
          'theme': gR["theme"],
          'size': gR['size'],
          'status': "normal",
          'classicVisible': !1,
          'icon': gR["customStyles"]["icon"],
          'isAndroid': g3["isAndroid"]
        };
      },
      'on': {
        ".yidun_intelli-control click": function (gv) {
          this["handleControlClick"](gv);
        },
        ".yidun_intelli-control keydown": function (gv) {
          if (gv) {
            var gi = gv["nativeEvent"]["event"];

            if (gi) {
              var gR = !1;
              return void 0 !== gi["key"] ? gR = "Spacebar" === gi["key"] || " " === gi["key"] || 'Enter' === gi["key"] : void 0 !== gi["keyCode"] && (gR = 13 === gi["keyCode"] || 32 === gi['keyCode']), gR ? (gv['preventDefault'](), this["handleControlClick"](gv), !1) : void 0;
            }
          }
        },
        ".yidun_intelli-control mousemove": function (gv) {
          this["trackMoving"](gv);
        }
      },
      'watch': {
        'status': function (gv) {
          "loaddone" === gv && this['firstLoad'] && (this["$setData"]({
            'classicVisible': !0
          }), this["firstLoad"] = !1), "success" === gv && this["$setData"]({
            'classicVisible': !1
          });
        }
      },
      'mounted': function () {
        var gv = this;
        gp(this["$store"]['state']['config']["customStyles"]["primaryColor"], this["$el"]), gm(this["$store"]['state']["config"]['customStyles'], this["$el"]), this['beginTime'] = 0, this["traceData"] = [], this["_baseClassNames"] = this["$el"]["className"]['trim'](), this["_removeEvents"] = this["initEvents"](), this['fetchCaptcha']()["then"](function () {
          gv["$store"]["commit"](j, {
            'name': 'onReady'
          }), gv["$store"]["commit"](j, {
            'name': 'onDidRefresh'
          });
        })['finally'](function () {
          gv['$el']["style"]["display"] = '';
        }), M['indexOf'](this["$store"]["state"]["config"]['lang']) !== -1 && (this['$el']["style"]["direction"] = "rtl");
      },
      'beforeDestroy': function () {
        this["_removeEvents"](), this["clear"]();
      },
      'render': function (gv) {
        var gi = gv['status'],
            gR = gv["classicVisible"];
        void 0 !== gi && this["updateUI"](gi), void 0 !== gR && this["toggleClassicVisible"](gR);
      },
      'methods': {
        'handleControlClick': function (gv) {
          if (!(['checking', "loading", "loadfail", "success"]["indexOf"](this["status"]) > -1)) return 'normal' === this['status'] ? void this['verifyIntelliCaptcha'](gv) : void (!this["classicVisible"] && this["$setData"]({
            'classicVisible': !0
          }));
        },
        'initEvents': function () {
          var gv = this,
              gi = g3["find"]('.yidun_intelli-control', this["$el"]),
              gR = function (gX) {
            gv["$el"]["contains"](gX["target"]) || gv["classicVisible"] && gv["$setData"]({
              'classicVisible': !1
            });
          },
              ga = function (gX) {
            gv["beginTime"] || (gv['beginTime'] = g2["now"]());
          };

          !g3["isMobile"] && g3['on'](document, "mousedown", gR), g3['on'](gi, 'mouseover', ga);
          var gD = this["$store"]['subscribe'](function (gX, gO) {
            var gr = gX["type"],
                gK = (gX["payload"], gO["load"]),
                gF = gO["verifyStatus"];

            switch (gr) {
              case P:
                gK && ("loading" === gK['status'] && gv['$setData']({
                  'status': "loading"
                }), "done" === gK['status'] && gv["$setData"]({
                  'status': "loaddone"
                }), 'fail' === gK["status"] && gv["$setData"]({
                  'status': "loadfail"
                }));
                break;

              case q:
                "success" === gF && gv['$setData']({
                  'status': "success"
                }), 'error' === gF && gv["$setData"]({
                  'status': "error"
                });
                break;

              case G:
                gv["reset"]();
            }
          });
          return function () {
            !g3["isMobile"] && g3['off'](document, "mousedown", gR), g3['off'](gi, "mouseover", ga), gD();
          };
        },
        'createClassicCaptcha': function () {
          var gv = this;

          if (g3['isMobile']) {
            var gi = this["$store"]["state"]['config'],
                gR = g8["_extend"](gg);
            this['_captchaIns'] = new gR({
              'store': this["$store"],
              'propsData': {
                'autoOpen': !1,
                'intellisense': !0,
                'enableColor': !1,
                'onBeforeClose': function () {
                  gv["$store"]["commit"](j, {
                    'name': "onBeforeClose"
                  });
                },
                'onClose': function (gD) {
                  gv["$setData"]({
                    'classicVisible': !1
                  }), gv['$store']["commit"](j, {
                    'name': "onClose",
                    'args': [{
                      'source': gD
                    }]
                  });
                },
                'onOpen': function () {
                  gv["$store"]["commit"](j, {
                    'name': 'onOpen'
                  });
                },
                'onWidthGeted': function (gD) {
                  g3["delClass"](gD, g0);
                }
              }
            })["$mount"](function (gD) {
              g3['addClass'](gD, g0), gi["appendTo"] ? gi["appendTo"]["appendChild"](gD) : document["body"]['appendChild'](gD);
            });
          } else {
            var ga = g8["_extend"](g9);
            this["_captchaIns"] = new ga({
              'store': this['$store'],
              'propsData': {
                'intellisense': !0,
                'enableColor': !1,
                'onWidthGeted': function () {
                  var gD = g3["find"](".yidun_classic-wrapper");
                  g3["delClass"](gD, g1);
                }
              }
            })['$mount'](function (gD) {
              var gX = g3["find"]('.yidun_classic-wrapper', gv["$el"]);
              g3["addClass"](gX, g1), gX['appendChild'](gD);
            });
          }
        },
        'fetchCaptcha': function () {
          var gv = this;
          return new gT(function (gi, gR) {
            var ga = {
              'width': gv["getWidth"](),
              'sizeType': gv["getSizeType"]()
            };
            gv["$store"]["state"]['smsNew'] && (ga["smsVersion"] = gv["$store"]["state"]["smsVersion"]), gv['$store']["dispatch"](Z, ga, function (gD, gX) {
              if (gv['_isMounted']) return gD ? (gv["$setData"]({
                'status': 'loadfail'
              }), void gR(gD)) : void gi(gX);
            });
          });
        },
        'clear': function () {
          var gv = this;
          this["_captchaIns"] && (this["$setData"]({
            'classicVisible': !1
          }), this["$nextTick"](function () {
            gv["_captchaIns"]["$destroy"](), gv['_captchaIns'] = null;
          })), this["beginTime"] = 0, this["traceData"] = [];
        },
        'reset': function () {
          var gv = this;
          this["$store"]["dispatch"](L), this["fetchCaptcha"]()["then"](function () {
            gv["clear"](), gv["resetClassNames"](), gv["$setData"]({
              'status': "normal"
            });
          });
        },
        'getWidth': function () {
          return this["$el"]["offsetWidth"];
        },
        'getSizeType': function () {
          return Object["keys"](J)["indexOf"](this['size']) !== -1 ? Q["LARGE"] : Q["DEFAULT"];
        },
        'resetClassNames': function () {
          for (var gv = this["_baseClassNames"]["split"](/\s+/), gi = arguments['length'], gR = Array(gi), ga = 0; ga < gi; ga++) gR[ga] = arguments[ga];

          this["$el"]["className"] = g4(gv, gR);
        },
        'loadClassicCaptcha': function () {
          this['createClassicCaptcha'](), this["firstLoad"] = !0, this["$setData"]({
            'status': 'loading'
          }), this["_captchaIns"]["refresh"]();
        },
        'verifyIntelliCaptcha': function (gv) {
          var gi = this;
          this["$setData"]({
            'status': "checking"
          }), gT["all"]([new gT(function (gR, ga) {
            var gD = gi["$store"]["state"]["token"],
                gX = gi['$el']["getBoundingClientRect"](),
                gO = gX["left"],
                gr = gX["top"],
                gK = g2["now"](),
                gF = g7(gD, (void 0 !== gv["clientX"] && void 0 !== gv['clientY'] ? [Math["round"](gv["clientX"] - gO), Math["round"](gv['clientY'] - gr), gK - (gi["beginTime"] || gK)] : []) + ''),
                gZ = gi['traceData']["map"](function (gH) {
              return g7(gD, gH);
            });
            gi["$store"]["dispatch"](H, {
              'token': gD,
              'type': U["INTELLISENSE"],
              'width': gi["getWidth"](),
              'data': JSON["stringify"]({
                'd': '',
                'm': g6(g2['sample'](gZ, W)['join'](':')),
                'p': g6(gF),
                'ext': g6(g7(gD, '1,' + gZ["length"]))
              })
            }, function (gH, gS) {
              if (gi["_isMounted"]) return gH ? void ga(gH) : void gR(gS);
            });
          }), new gT(function (gR, ga) {
            window['setTimeout'](gR, 300);
          })])['then'](function (gR) {
            var ga = K(gR, 1);
            ga[0], gi["$setData"]({
              'status': "success"
            });
          })["catch"](function () {
            return gi["loadClassicCaptcha"]();
          });
        },
        'trackMoving': function (gv) {
          if (this["beginTime"]) {
            var gi = this["$el"]['getBoundingClientRect'](),
                gR = gi['left'],
                ga = gi["top"],
                gD = [Math["round"](gv['clientX'] - gR), Math['round'](gv["clientY"] - ga), g2["now"]() - this['beginTime']] + '';
            this["traceData"]["push"](gD);
          }
        },
        'toggleClassicVisible': function (gv) {
          var gi = this["_captchaIns"];
          if (g3["isMobile"] && gi) gv && gi["open"](), !gv && gi["close"]();else {
            var gR = g3['find'](".yidun_classic-wrapper", this['$el']);
            gR["style"]['display'] = gv ? "block" : "none";
          }
        },
        'updateUI': function (gv) {
          var gi = this,
              gR = g3["find"](".yidun_intelli-text", this["$el"]),
              ga = g3["find"]('.yidun_tips__text', this["$el"]),
              gD = this["langPkg"]["intellisense"],
              gX = "yidun_intellisense",
              gO = this["$store"]["state"],
              gr = gO["countsOfVerifyError"],
              gK = gO['config'],
              gF = function (gH) {
            gH["stopPropagation"](), gi["$store"]["commit"](G);
          };

          switch (g3["off"](ga, "click", gF), gv) {
            case "normal":
              g3["text"](gR, gD["normal"]);
              break;

            case 'checking':
              this["resetClassNames"](gX + "--checking"), g3['text'](gR, gD["checking"]);
              break;

            case "loading":
              this["resetClassNames"](gX + '--loading'), g3['text'](gR, gD["loading"]);
              break;

            case "loaddone":
              this["resetClassNames"](), g3["text"](gR, gD["loaddone"]);
              break;

            case "loadfail":
              this["resetClassNames"](gX + "--loadfail"), g3["text"](ga, gD['loadfail']);
              break;

            case "success":
              this["resetClassNames"](gX + "--success"), g3["text"](ga, this["langPkg"]['verifySuccess']);
              break;

            case "error":
              var gZ = gX + "--error";
              gr > gK['maxVerification'] ? (gZ += " " + gX + "--maxerror", g3['text'](ga, this["langPkg"]["verifyOutOfLimit"]), g3['on'](ga, "click", gF)) : g3["text"](ga, this["langPkg"]["verifyError"]), this["resetClassNames"](gZ);
          }
        },
        'closeModal': function () {
          g3["isMobile"] && this['_captchaIns'] && this["_captchaIns"]["closeModal"]();
        }
      }
    };
  }, function (B, p, m) {
    var v = m(24),
        R = m(3),
        a = m(18),
        D = {};

    B["exports"] = function (X, O) {
      X = Object["assign"]([], X);
      var K = O["protocol"],
          F = O['staticServer'],
          Z = O["theme"],
          H = X[0]["slice"](0);

      if (!D[Z]) {
        R["assert"](X, "apply [" + Z + " theme] failed");
        var S = a({
          'protocol': K,
          'host': F
        });
        H[1] = H[1]["replace"](/url\(['"]?\/?([^'"\s]+?)['"]?\)/g, "url(\"" + S + "$1\")"), X[0] = H, v(X), D[Z] = !0, delete X["__theme__"];
      }
    };
  }, function (B, p) {
    function m() {
      var O = void 0;

      try {
        null[0]();
      } catch (Z) {
        O = Z;
      }

      if (O && 'string' == typeof O['stack']) {
        for (var K = ["phantomjs", "rhino", "nodejs", "couchjs", "selenium"], F = 0; F < K["length"]; F++) if (O["stack"]["indexOf"](K[F]) > -1) return 1001 + F;
      }

      return 0;
    }

    function v() {
      for (var O = ["_Selenium_IDE_Recorder", "_phantom", "phantom.injectJs", "callPhantom", '_selenium', 'callSelenium', 'domAutomation', 'domAutomationController', '__nightmare', "context.hashCode", 'java.lang.System.exit', "spawn", "Buffer", "emit", "webdriver"], K = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", '__selenium_unwrapped', "__fxdriver_unwrapped", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn"], F = ["selenium", "webdriver", "driver"], Z = 0, H = O["length"]; Z < H; Z++) if (D(window, O[Z])) return Z + 2001;

      for (var S = 0, z = K["length"]; S < z; S++) if (D(document, K[S])) return S + 3001;

      for (var l = 0, I = F["length"]; l < I; l++) if (document["documentElement"]['getAttribute'](F[l])) return l + 4001;

      return D(navigator, "webdriver") === !0 ? 5001 : 0;
    }

    function R() {
      for (var O in document) if (document[O]) {
        try {
          if (document[O]["cache_"] && O["match"] && O["match"](/\$[a-z]dc_/)) return 5002;
        } catch (K) {
          return 0;
        }

        return 0;
      }
    }

    function a() {
      try {
        return window["external"] && ~window['external']["toString"]()['indexOf']("Sequentum") ? 5003 : 0;
      } catch (O) {
        return 0;
      }
    }

    function D(O, K) {
      for (var F = K["split"]('.'), Z = O, H = 0; H < F["length"]; H++) {
        if (void 0 == Z[F[H]]) return;
        Z = Z[F[H]];
      }

      return Z;
    }

    var X = function () {
      try {
        return m() || v() || R() || a();
      } catch (O) {
        return 0;
      }
    }();

    B["exports"] = X;
  }, function (B, p, m) {
    function v(O, K) {
      this["_captchaConf"] = O, this["_captchaCollector"] = K;
    }

    var R = m(13),
        a = m(7),
        D = a['ANTICHEAT_TOKEN_ERROR'],
        X = m(3);
    v["prototype"]["getAnticheat"] = function () {
      return this["_captchaConf"]["__anticheat__"] ? this["_captchaConf"]["__anticheat__"]["instance"] : null;
    }, v["prototype"]["getToken"] = function (O) {
      var K = this,
          F = O["timeout"],
          Z = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          H = this["_captchaConf"],
          S = new R(function (z) {
        var l = function I() {
          var L = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              k = null,
              N = function (P) {
            if (clearTimeout(k), L < Z) setTimeout(function () {
              return I(L + 1);
            }, 200);else {
              var h = new a(D, P["message"] + ";initCaptchaWatchman: " + X["typeOf"](window["initCaptchaWatchman"]) + '}');
              K["_captchaCollector"]["collectErr"](h), z(H["acConfig"]["token"] || '');
            }
          };

          try {
            k = setTimeout(function () {
              N(new Error("get anticheat token timeout"));
            }, F + 50), K['getAnticheat']()["getToken"](H["acConfig"]["bid"], function (P) {
              clearTimeout(k), z(P);
            }, F);
          } catch (P) {
            N(P);
          }
        };

        1 === H["acConfig"]["enable"] ? l(0) : z('');
      });
      return S;
    }, B["exports"] = v;
  }, function (B, R, D) {
    function X(W, x, M) {
      return x in W ? Object["defineProperty"](W, x, {
        'value': M,
        'enumerable': !0,
        'configurable': !0,
        'writable': !0
      }) : W[x] = M, W;
    }

    var O,
        K = D(22),
        F = D(18),
        Z = D(7),
        H = Z['REQUEST_SCRIPT_ERROR'],
        S = Z["REQUEST_API_ERROR"],
        z = Z["REQUEST_IMG_ERROR"],
        I = Z['REQUEST_AUDIO_ERROR'],
        L = Z["BUSINESS_ERROR"],
        k = Z["UNPASS_ERROR"],
        N = Z["ANTICHEAT_TOKEN_ERROR"],
        P = Z["ANTICHEAT_INIT_ERROR"],
        q = D(21),
        j = D(11),
        G = D(3),
        A = G["uuid"],
        V = (O = {}, X(O, S, "api"), X(O, z, "image"), X(O, I, "audio"), X(O, H, "script"), X(O, L, "business"), X(O, k, 'unpass'), X(O, N, "anticheat"), X(O, P, "anticheat"), O),
        U = null;

    B["exports"] = function (W, M, C) {
      var E = M["protocol"],
          w = M['apiServer'],
          Q = M["__serverConfig__"],
          J = void 0 === Q ? {} : Q,
          g0 = M['captchaId'],
          g1 = M["timeout"],
          g2 = M["ipv6"],
          g3 = new q(),
          g4 = function (gB) {
        var gp = "/api/v2/collect";
        return Array["isArray"](gB) ? gB["map"](function (gm) {
          return F({
            'protocol': E,
            'host': gm,
            'path': gp
          });
        }) : F({
          'protocol': E,
          'host': gB,
          'path': gp
        });
      },
          g5 = g2 ? [['c.dun.163.com', 'c.dun.163yun.com'], ['c-v6.dun.163.com', 'c.dun.163yun.com']][1] : [["c.dun.163.com", "c.dun.163yun.com"], ['c-v6.dun.163.com', "c.dun.163yun.com"]][0],
          g6 = g4(w || J['apiServer'] || g5),
          g7 = K({
        'timeout': g1,
        'disableRetry': !0,
        'captchaConfig': M
      }),
          g8 = W["data"],
          g9 = Object["assign"]({
        'id': g0,
        'token': g8['token'] || '',
        'type': V[W["code"]] || 'other',
        'target': g8["url"] || g8["resource"] || '',
        'message': W['toString']()
      }, C);

      null == window['ip'] && (window['ip'] = function (gB, gp, gm) {
        U = {
          'ip': gB,
          'dns': gm
        };
      });

      var gg = function () {
        Object["assign"](g9, U), g7(g6, g9, function (gB, gp) {
          if (gB || gp["error"]) {
            console && console['warn']("Failed to collect error.");
            var gm = new Error(gB ? gB["message"] : gp["msg"]);
            return gm["data"] = {
              'url': g6
            }, void g3["resolve"](gm);
          }

          g3["resolve"]();
        });
      },
          gT = E + "://only-d-" + A(32) + '-' + new Date()["valueOf"]() + ".nstool.netease.com/ip.js";

      return j["script"]({
        'url': gT,
        'timeout': g1,
        'checkResult': function (gB) {
          gB && gB["scriptEl"] && gB["scriptEl"]["parentElement"]['removeChild'](gB["scriptEl"]);
          var gp = new q();
          return U && U["dns"] ? (gp['resolve'](), gp) : (setTimeout(function () {
            return gp["resolve"](new Error("try to collect dns again"));
          }, 100), gp);
        }
      })['finally'](function () {
        gg();
      }), g3;
    };
  }, function (B, p) {
    B["exports"] = function () {
      return location['href']["replace"](/\?[\s\S]*/, '')["substring"](0, 128);
    };
  }, function (B, D, X) {
    function O(g2) {
      return "number" === P["typeOf"](g2);
    }

    function K(g2, g3) {
      var g4 = /^((\d|[1-9]\d+)(\.\d+)?)(px|rem|%)?$/,
          g5 = g2["width"],
          g6 = g5 === Q["width"],
          g7 = "popup" === g2['mode'] || "bind" === g2["mode"];
      P["assert"](g5 === Q["width"] || g4['test'](g5) || O(g5) && g5 >= 0, "config: \"width\" should be a valid number or string like \"**px\", \"**rem\", \"**%\"(except popup/bind mode) or \"auto\". By default, it is \"auto\""), P["assert"](!(g7 && /%$/['test'](g5)), "config: \"width\" can't be percentage like \"**%\", when mode is \"popup\".");
      var g8 = P['msie']();
      P["assert"](!(g8 < 9 && /rem$/['test'](g5)), "config: \"width\", IE" + g8 + " does not support \"rem\", please use a valid value");
      var g9 = g5;
      return g6 && g7 ? g9 = N["isMobile"] ? '260px' : g0 + 'px' : (O(g5) || Number(g5)) && (g9 = g5 + 'px'), g9;
    }

    function F(g2) {
      var g3 = g2["startLeft"],
          g4 = void 0 === g3 ? E : g3,
          g5 = parseInt(g4, 10),
          g6 = isNaN(g5) ? E + 'px' : P["adsorb"](g5, 0, U) + 'px';
      return Object["assign"]({}, g2, {
        'startLeft': g6
      });
    }

    function Z(g2) {
      var g3 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          g4 = {
        'imagePanel': {},
        'controlBar': {},
        'gap': '',
        'icon': {},
        'primaryColor': ''
      };
      return Object['assign'](g4["imagePanel"], g2["imagePanel"], g3['imagePanel']), Object["assign"](g4["controlBar"], g2["controlBar"], g3["controlBar"]), g4['imagePanel']["borderRadius"] = C(g3["imagePanel"] && g3["imagePanel"]["borderRadius"]) || C(g2["imagePanel"] && g2['imagePanel']['borderRadius']), g4["gap"] = C(g3["gap"]) || C(g2["gap"]), g4["controlBar"]['height'] = C(g3["controlBar"] && g3["controlBar"]["height"]) || C(g2["controlBar"] && g2["controlBar"]["height"]), g4["controlBar"]['textSize'] = C(g3["controlBar"] && g3["controlBar"]["textSize"]) || C(g2["controlBar"] && g2["controlBar"]["textSize"]), g4["controlBar"]['borderRadius'] = C(g3['controlBar'] && g3["controlBar"]["borderRadius"]) || C(g2["controlBar"] && g2['controlBar']["borderRadius"]), g4["controlBar"]["paddingLeft"] = C(g3['controlBar'] && g3["controlBar"]["paddingLeft"]) || C(g2['controlBar'] && g2['controlBar']['paddingLeft']), g4['primaryColor'] = g3["primaryColor"] || g2["primaryColor"], g4['executeBorderRadius'] = C(g3["executeBorderRadius"]) || C(g2["executeBorderRadius"]), g4['executeBackground'] = g3["executeBackground"] || g2["executeBackground"], g4["executeTop"] = C(g3["executeTop"]) || C(g2["executeTop"]), g4["executeRight"] = C(g3["executeRight"]) || C(g2["executeRight"]), Object["assign"](g4["icon"], g2["icon"], g3["icon"]), g4;
    }

    function H(g2) {
      var g3 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          g4 = function g5(g6, g7) {
        for (var g8 = {}, g9 = Object["keys"](g6), gg = 0, gT = g9["length"]; gg < gT; gg++) {
          var gB = g9[gg];
          void 0 === g7[gB] ? g8[gB] = g6[gB] : 'string' === P["typeOf"](g6[gB]) ? g8[gB] = g7[gB] + '' : g8[gB] = g5(g6[gB], g7[gB]);
        }

        return g8;
      };

      return g4(g2, g3);
    }

    function S(g2) {
      var g3 = {};
      g3 = I({}, q, g2["__lang__"]), g2 = F(Object['assign']({}, Q, g2));
      var g4 = g2["__serverConfig__"]["smart"],
          g5 = g2['element'],
          g6 = 'popup' === g2["mode"],
          g7 = g2["apiVersion"];
      P["assert"](g2["captchaId"], "config: \"captchaId\" is required!"), P["assert"](O(g7), "apiVersion must be number"), g7 > 1 ? (!g5 && (g5 = "body"), P['assert'](~["float", "embed", 'popup']["indexOf"](g2["mode"]), "config: \"mode \"" + g2["mode"] + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected"), g4 && "popup" === g2["mode"] && (g2["mode"] = 'bind'), g2["appendTo"] = g5, g2["enableClose"] = g2["closeEnable"]) : (P["assert"](g6 || g5, "config: \"element\" is required when \"mode\" is not \"popup\""), !g4 && P["assert"](~["float", "embed", "popup"]["indexOf"](g2["mode"]), "config: \"current captcha is not intellisense , mode \"" + g2["mode"] + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected")), P['assert'](!g2["size"] || ~["small", "medium", 'large', "x-large"]["indexOf"](g2["size"]), "config: \"size " + g2["size"] + "\" is invalid. \"small\", \"medium\", \"large\" and \"x-large\" is expected. If no value is passed, it defaults to \"small\"."), g5["nodeType"] || "string" !== P["typeOf"](g5) || (g5 = N["find"](g5), P["assert"](g5, "config: \"element " + g2["element"] + "\" not found"), g2["element"] = g5), P['assert'](!g2['theme'] || ~["light", "dark"]["indexOf"](g2["theme"]), "config: \"theme " + g2['theme'] + "\" is invalid. \"light\", \"dark\" is expected. By default, it depends on console's config"), P["assert"](/^https?$/["test"](g2["protocol"]), "config: \"protocol " + g2["protocol"] + "\" is invalid. \"http\", \"https\" is expected. By default, it depends on user's website"), Object["keys"](g1)["indexOf"](g2['lang']) > -1 && (g2["lang"] = g1[g2['lang']]), P['assert'](g3[g2["lang"]], "config: \"lang " + g2['lang'] + "\" is invalid, supported lang: " + Object["keys"](g3)["toString"]() + ". By default, it's " + Q["lang"]), g4 && "bind" !== g2["mode"] ? g2["width"] = Q["width"] : g2["width"] = K(g2, g5);
      var g8 = g2['appendTo'];
      return !g4 && 'popup' === g2["mode"] || 'bind' === g2["mode"] || g4 && N["isMobile"] ? P['assert'](!g8 || g8["nodeType"] || "string" === P["typeOf"](g8), "config: appendTo should be a elment or string") : g7 <= 1 && P["assert"](!g8, "config: appendTo could only be valid when captchaType is not intellisense and mode is \"popup\", or mode is bind, or captchaType is intellisense on the mobile side"), g8 && !g8["nodeType"] && "string" === P["typeOf"](g8) && (g8 = N["find"](g8), P["assert"](g8, "config: \"element " + g2["appendTo"] + "\" which \"appendTo\" defined not found"), g2["appendTo"] = g8), (g7 <= 1 || g7 >= 1 && g8 !== document['body']) && g8 && "static" === N["getComputedStyle"](g8, "position") && (g8["style"]["position"] = "relative"), g2["__serverConfig__"]["customStyles"] ? (P["assert"](g2['customStyles'] && M(g2["customStyles"]), "config: \"customStyles\" must be a plain Object"), g2["customStyles"] = Z(Q["customStyles"], g2["customStyles"]), P['assert'](g2['customTexts'] && M(g2["customTexts"]), "config: \"customTexts\" must be a plain Object"), g2["customTexts"] = H(g3[g2["lang"]], g2["customTexts"])) : (g2["customStyles"] = Q["customStyles"], g2["customTexts"] = g3[g2["lang"]]), P["assert"]("string" === P["typeOf"](g2["group"]) && g2["group"]["length"] <= 32, "config: \"group\" must be a string and it's length less than or equal 32"), P['assert']("string" === P["typeOf"](g2['scene']) && g2["scene"]["length"] <= 32, "config: \"scene\" must be a string and it's length less than or equal 32"), P['assert'](O(g2["maxVerification"]) && g2["maxVerification"] >= 0, "config: \"maxVerification\" must be a number and it's greater than or equal 0"), P['assert'](O(g2["refreshInterval"]) && g2['refreshInterval'] >= 0, "config: \"refreshInterval\" must be a number and it's greater than or equal 0"), g2["acConfig"] = g2["acConfig"] || g2["__serverConfig__"]['ac'] || {}, g2;
    }

    var I = Object["assign"] || function (g2) {
      for (var g3 = 1; g3 < arguments['length']; g3++) {
        var g4 = arguments[g3];

        for (var g5 in g4) Object["prototype"]['hasOwnProperty']["call"](g4, g5) && (g2[g5] = g4[g5]);
      }

      return g2;
    },
        L = function () {
      function g2(g3, g4) {
        var g5 = [],
            g6 = !0,
            g7 = !1,
            g8 = void 0;

        try {
          for (var g9, gg = g3[Symbol["iterator"]](); !(g6 = (g9 = gg["next"]())["done"]) && (g5["push"](g9['value']), !g4 || g5['length'] !== g4); g6 = !0);
        } catch (gT) {
          g7 = !0, g8 = gT;
        } finally {
          try {
            !g6 && gg["return"] && gg['return']();
          } finally {
            if (g7) throw g8;
          }
        }

        return g5;
      }

      return function (g3, g4) {
        if (Array["isArray"](g3)) return g3;
        if (Symbol['iterator'] in Object(g3)) return g2(g3, g4);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        N = X(4),
        P = X(3),
        q = X(57),
        j = X(5),
        G = j['WIDTH_LIMIT'],
        A = j["RUN_ENV"],
        V = j["MAX_VERIFICATION"],
        U = j["SLIDER_START_LEFT_LIMIT"],
        W = X(12),
        M = W["isPlainObject"],
        C = X(23),
        E = 0,
        Q = {
      'apiVersion': 1,
      'captchaId': '',
      'element': null,
      'appendTo': null,
      'mode': N["isMobile"] ? "popup" : "float",
      'size': "small",
      'protocol': window["location"]["protocol"]['replace'](':', ''),
      'lang': "zh-CN",
      'width': "auto",
      'startLeft': E + 'px',
      'ipv6': !1,
      'enableClose': !1,
      'hideCloseBtn': !1,
      'disableMaskClose': !1,
      'enableAutoFocus': !1,
      'disableFocusVisible': !1,
      'refreshInterval': 300,
      'customStyles': {
        'imagePanel': {
          'align': "top",
          'borderRadius': '2px'
        },
        'controlBar': {
          'height': "40px",
          'borderRadius': "2px"
        },
        'gap': '15px',
        'icon': {
          'intellisenseLogo': '',
          'slider': ''
        },
        'primaryColor': ''
      },
      'customTexts': {},
      'feedbackEnable': !0,
      'runEnv': A["WEB"],
      'group': '',
      'scene': '',
      'maxVerification': V,
      'disableValidateInput': !1
    },
        J = L(G, 1),
        g0 = J[0],
        g1 = {
      'en': "en-US",
      'iw': 'he',
      'nb': 'no',
      'in': 'id'
    };

    B["exports"] = S;
  }, function (B, p) {
    B['exports'] = function (m) {
      var v = {
        "\\": '-',
        '/': '_',
        '+': '*'
      };
      return m['replace'](/[\\\/+]/g, function (R) {
        return v[R];
      });
    };
  }, function (B, m, v) {
    function R() {
      S = I['length'] = 0, z = {}, Z = H = !1;
    }

    function D() {
      H = !0;
      var L = void 0,
          k = void 0;

      for (I["sort"](function (P, h) {
        return P['id'] - h['id'];
      }), S = 0; S < I["length"]; S++) L = I[S], k = L["instance"], z[L['id']] = null, k['_isMounted'] && k["render"](L["data"]);

      var N = I["slice"]();
      R(), X(N);
    }

    function X(L) {
      for (var k = L["length"]; k--;) {
        var N = L[k],
            P = N["instance"];
        P["_updater"] === N && P["_isMounted"] && (N["data"] = {});
      }
    }

    function O(L) {
      var k = L['id'];

      if (null == z[k]) {
        if (z[k] = !0, H) {
          for (var N = I["length"] - 1; N > S && I[N]['id'] > L['id'];) N--;

          I["splice"](N + 1, 0, L);
        } else I["push"](L);

        Z || (Z = !0, F(D));
      }
    }

    var K = v(12),
        F = K["nextTick"],
        Z = !1,
        H = !1,
        S = 0,
        z = {},
        I = [];
    B['exports'] = O;
  }, function (B, p, m) {
    var v = m(12),
        R = v["lifeCycleHooks"];

    B["exports"] = function () {
      var D = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          X = arguments['length'] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          O = {},
          K = X['el'] || D['el'],
          F = X['template'] || D["template"],
          Z = D["abstract"],
          H = X["components"] || D['components'],
          S = X['on'] || D['on'],
          z = X["render"] || D['render'],
          I = D['props'],
          L = X["propsData"],
          k = X['data'] || D["data"],
          N = D["methods"] || X["methods"],
          P = D["watch"] || X["watch"];
      K && (O['el'] = K), F && (O["template"] = F), Z && (O['abstract'] = !!Z), H && (O["components"] = H), S && (O['on'] = Object["assign"]({}, D['on'], X['on'])), z && (O["render"] = z), I && (O["props"] = I), L && (O['propsData'] = L), k && (O["data"] = k), N && (O["methods"] = Object["assign"]({}, D['methods'], X["methods"])), P && (O['watch'] = Object["assign"]({}, D['watch'], X["watch"]));

      var f = function (q, j) {
        var b = [];
        return q && (b = b["concat"](q)), j && (b = b["concat"](j)), b;
      };

      return R["map"](function (q) {
        O[q] = f(D[q], X[q]);
      }), O = Object["assign"]({}, X, O);
    };
  }, function (B, p, m) {
    function v() {
      var X = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          O = arguments[1];
      return this instanceof v ? (this['_originalTemplate'] = X, void (this["_composedStr"] = O ? R["template"](X, O) : X)) : new v(X, O);
    }

    var R = m(3),
        a = m(12),
        D = a["getDocFragmentRegex"];
    v["prototype"]["compose"] = function (X, O, K) {
      var F = D(X),
          Z = R["template"](O, K);
      return this["_composedStr"] = this["_composedStr"]["replace"](F, Z), this;
    }, v["prototype"]['toString'] = function () {
      return this['_composedStr'];
    }, v["prototype"]['reset'] = function (X) {
      return this["_composedStr"] = R['template'](this["_originalTemplate"], X), this;
    }, B["exports"] = v;
  }, function (B, p, m) {
    var v = function () {
      function O(K, F) {
        var Z = [],
            H = !0,
            S = !1,
            z = void 0;

        try {
          for (var l, I = K[Symbol["iterator"]](); !(H = (l = I["next"]())["done"]) && (Z["push"](l["value"]), !F || Z["length"] !== F); H = !0);
        } catch (L) {
          S = !0, z = L;
        } finally {
          try {
            !H && I["return"] && I["return"]();
          } finally {
            if (S) throw z;
          }
        }

        return Z;
      }

      return function (K, F) {
        if (Array['isArray'](K)) return K;
        if (Symbol['iterator'] in Object(K)) return O(K, F);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        R = m(4),
        a = m(20),
        D = a({
      'initialize': function (O) {
        var K = this['nativeEvent'] = O["nativeEvent"];
        this["target"] = K["target"], this["currentTarget"] = O["currentTarget"], this["pageX"] = K['pageX'], this["pageY"] = K["pageY"], this["clientX"] = K['clientX'], this['clientY'] = K["clientY"], this["defaultPrevented"] = !1, this["cancelBubble"] = !1, this['cancelImmediateBubble'] = !1, this['type'] = K["type"];
      },
      'preventDefault': function () {
        this["defaultPrevented"] = !0;
      },
      'stopPropagation': function () {
        this["cancelBubble"] = !0;
      },
      'stopImmediatePropagation': function () {
        this["cancelImmediateBubble"] = !0;
      }
    }),
        X = a({
      'initialize': function (O) {
        this["$el"] = O["$el"], this["initEvents"](O['events']);
      },
      'initEvents': function (O) {
        var K = this;
        this["_captureEvents"] = {}, this["_bubbleEvents"] = {}, this["_delegationHandlers"] = {};
        var F = this["normalizeEvents"](O);
        Object["keys"](F)['map'](function (Z) {
          var H = F[Z];
          H["map"](function (z) {
            K["delegate"](Z, z["selector"], z["handler"]);
          });

          var S = K["_delegationHandlers"][Z] = function (z) {
            var l = z["target"],
                I = l,
                L = !1,
                k = function () {
              var N = null,
                  P = K["_bubbleEvents"][Z];
              Object["keys"](P)["map"](function (h) {
                var f = h["match"](/^([.#])([^.#\s]+)$/) || [],
                    q = f[1],
                    j = f[2];

                if ('.' === q && ~I["className"]["indexOf"](j) || '#' === q && I['id'] === j) {
                  N = I;

                  for (var b = P[h], G = 0; G < b["length"]; G++) {
                    var A = b[G],
                        V = new D({
                      'nativeEvent': z,
                      'currentTarget': N
                    });

                    if (A["call"](N, V), V["defaultPrevented"] && z['preventDefault'](), V["cancelImmediateBubble"]) {
                      L = !0;
                      break;
                    }
                  }

                  V["cancelBubble"] && (L = !0);
                }
              }), I = I["parentElement"], I === K['$el'] && (L = !0);
            };

            do k(); while (K["$el"] && !L && I);
          };

          R['on'](K['$el'], Z, S);
        });
      },
      'off': function () {
        var O = this["_delegationHandlers"];

        for (var K in O) R['off'](this["$el"], K, O[K]);

        this["_captureEvents"] = {}, this['_bubbleEvents'] = {}, this['_delegationHandlers'] = {}, this["$el"] = null;
      },
      'delegate': function (O, K, F) {
        this["_bubbleEvents"][O] || (this["_bubbleEvents"][O] = {});
        var Z = this["_bubbleEvents"][O];
        Z[K] || (Z[K] = []);
        var H = Z[K];
        return H["push"](F), function () {
          var S = H["indexOf"](F);
          S > -1 && H["splice"](S, 1);
        };
      },
      'normalizeEvents': function (O) {
        var K = {};

        for (var F in O) if (O["hasOwnProperty"](F)) {
          var Z = F["split"](/\s+/),
              H = v(Z, 2),
              S = H[0],
              z = H[1];
          K[z] || (K[z] = []);
          var l = K[z];
          l['push']({
            'selector': S,
            'handler': O[F]
          });
        }

        return K;
      }
    });

    B["exports"] = X;
  }, function (B, p) {
    function m() {}

    function v(D, X, O, K) {
      function F() {
        S['parentNode'] && S["parentNode"]["removeChild"](S), window[k] = m, z && clearTimeout(z);
      }

      function Z() {
        window[k] && F();
      }

      function H(b) {
        var G = [];

        for (var A in b) b['hasOwnProperty'](A) && G['push'](q(A) + '=' + q(b[A]));

        return G["join"]('&');
      }

      'object' === ("undefined" == typeof O ? "undefined" : R(O)) && (K = O, O = null), "function" == typeof X && (O = X, X = null), K || (K = {});
      var S,
          z,
          I = Math["random"]()['toString'](36)['slice'](2, 9),
          L = K['prefix'] || "__JSONP",
          k = K["name"] || L + ('_' + I) + ('_' + a++),
          N = K["param"] || "callback",
          P = K["timeout"] || 6000,
          q = window["encodeURIComponent"],
          j = document["getElementsByTagName"]("script")[0] || document['head'];
      return P && (z = setTimeout(function () {
        F(), O && O(new Error("Timeout"));
      }, P)), window[k] = function (b) {
        F(), O && O(null, b, {
          'url': D
        });
      }, X && (D = D["split"]('?')[0]), D += (~D['indexOf']('?') ? '&' : '?') + H(X) + '&' + N + '=' + q(k), D = D["replace"]('?&', '?'), S = document["createElement"]('script'), S["type"] = 'text/javascript', S['src'] = D, j["parentNode"]['insertBefore'](S, j), Z;
    }

    var R = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (D) {
      return typeof D;
    } : function (D) {
      return D && 'function' == typeof Symbol && D["constructor"] === Symbol && D !== Symbol["prototype"] ? "symbol" : typeof D;
    },
        a = 0;
    B["exports"] = v;
  }, function (B, p) {
    function m(v) {
      if (!v) return {};
      var R = document['createElement']('a');
      return R["href"] = v, {
        'source': v,
        'protocol': R['protocol']["replace"](':', ''),
        'host': R["hostname"],
        'port': R["port"],
        'query': R["search"],
        'hash': R["hash"]["replace"]('#', ''),
        'path': R["pathname"]["replace"](/^([^\/])/, "/$1"),
        'segments': R["pathname"]['replace'](/^\//, '')["split"]('/')
      };
    }

    B["exports"] = m;
  }, function (B, p, m) {
    var v = m(20),
        R = m(3),
        a = m(13),
        D = v({
      'initialize': function (X) {
        this["state"] = X['state'], this["_committing"] = !1, this['_subscribers'] = [];
        var O = this,
            K = this["dispatch"],
            F = this['commit'];
        this['dispatch'] = function (Z, H, S) {
          return K["call"](O, Z, H, S);
        }, this['commit'] = function (Z, H) {
          return F["call"](O, Z, H);
        }, this["registerMutations"](X["mutations"]), this["registerActions"](X["actions"]);
      },
      'registerMutations': function (X) {
        this["_mutations"] = Object["assign"](this["_mutations"] || {}, X);
      },
      'registerActions': function (X) {
        this['_actions'] = Object['assign'](this["_actions"] || {}, X);
      },
      'commit': function (X, O) {
        var K = this,
            F = {
          'type': X,
          'payload': O
        },
            Z = this['_mutations'][X];
        return Z ? (this["_withCommit"](function () {
          Z(K["state"], O);
        }), void this["_subscribers"]["map"](function (H) {
          return H(F, K["state"]);
        })) : void R["error"]("[Store] unknown mutation type: " + X);
      },
      '_withCommit': function (X) {
        var O = this["_committing"];
        this["_committing"] = !0, X(), this["_committing"] = O;
      },
      'dispatch': function (X, O, K) {
        var F = this['_actions'][X];
        if (!F) return void R['error']("[Store] unknown action type: " + X);
        var Z = {
          'state': this["state"],
          'commit': this["commit"],
          'dispatch': this["dispatch"]
        };
        return a["resolve"](F(Z, O, K));
      },
      'subscribe': function (X) {
        var O = this["_subscribers"];
        return O["indexOf"](X) < 0 && O["push"](X), function () {
          var K = O['indexOf'](X);
          K > -1 && O["splice"](K, 1);
        };
      },
      'replaceState': function () {
        var X = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this["state"] = X;
      }
    });
    B["exports"] = D;
  }, function (B, m) {
    function v(L) {
      if (Array["isArray"](L)) {
        for (var k = 0, N = Array(L["length"]); k < L["length"]; k++) N[k] = L[k];

        return N;
      }

      return Array["from"](L);
    }

    function R(L) {
      for (var k = [], N = L["length"], P = 0; P < N; P++) k["indexOf"](L[P]) === -1 && k['push'](L[P]);

      return k;
    }

    function D(L) {
      for (var k = 0, N = L['length'], P = 0; P < N; P++) k += L[P];

      return k / N;
    }

    function X(L) {
      for (var k = D(L), N = L['length'], P = [], h = 0; h < N; h++) {
        var f = L[h] - k;
        P["push"](Math["pow"](f, 2));
      }

      for (var q = 0, j = 0; j < P["length"]; j++) P[j] && (q += P[j]);

      return Math['sqrt'](q / N);
    }

    function O(L) {
      return parseFloat(L["toFixed"](4));
    }

    function K(L, k) {
      var N = L["sort"](function (q, j) {
        return q - j;
      });
      if (k <= 0) return N[0];
      if (k >= 100) return N[N["length"] - 1];
      var P = Math['floor']((N["length"] - 1) * (k / 100)),
          h = N[P],
          f = N[P + 1];
      return h + (f - h) * ((N['length'] - 1) * (k / 100) - P);
    }

    function F(L, k) {
      for (var N = [], P = [], h = 0; h < L['length'] - 1; h++) N["push"](L[h + 1] - L[h]), P["push"](k[h + 1] - k[h]);

      for (var f = [], q = 0; q < P["length"]; q++) f['push'](P[q] / N[q]);

      return f;
    }

    function Z() {
      var L = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          k = [],
          N = [],
          P = [];
      if (!Array["isArray"](L) || L["length"] <= 2) return [k, N, P];

      for (var h = 0; h < L['length']; h++) {
        var f = L[h];
        k["push"](f[0]), N['push'](f[1]), P["push"](f[2]);
      }

      return [k, N, P];
    }

    function H(L, k, N) {
      for (var P = F(N, L), h = F(N, k), f = [], q = 0; q < L["length"]; q++) {
        var j = Math["sqrt"](Math["pow"](L[q], 2) + Math["pow"](k[q], 2));
        f["push"](j);
      }

      var b = F(N, f);
      return [P, h, b];
    }

    function S(L, k, N, P) {
      var h = P["slice"](0, -1),
          f = F(h, L),
          q = F(h, k),
          j = F(h, N);
      return [f, q, j];
    }

    function z() {
      var g0 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if (!Array["isArray"](g0) || g0["length"] <= 2) return [];
      var g1 = Z(g0),
          g2 = I(g1, 3),
          g3 = g2[0],
          g4 = g2[1],
          g5 = g2[2],
          g6 = H(g3, g4, g5),
          g7 = I(g6, 3),
          g8 = g7[0],
          g9 = g7[1],
          gg = g7[2],
          gT = S(g8, g9, gg, g5),
          gB = I(gT, 3),
          gp = gB[0],
          gm = gB[1],
          gv = gB[2],
          gR = R(g3)['length'],
          ga = R(g4)["length"],
          gD = O(D(g4)),
          gX = O(X(g4)),
          gO = g3["length"],
          gr = O(Math["min"]["apply"](Math, v(g8))),
          gK = O(Math['max']['apply'](Math, v(g8))),
          gF = O(D(g8)),
          gZ = O(X(g8)),
          gH = R(g8)['length'],
          gS = O(K(g8, 25)),
          gz = O(K(g8, 75)),
          gl = O(Math["min"]["apply"](Math, v(g9))),
          gI = O(Math["max"]['apply'](Math, v(g9))),
          gL = O(D(g9)),
          gk = O(X(g9)),
          gN = R(g9)["length"],
          gP = O(K(g9, 25)),
          gh = O(K(g9, 75)),
          gf = O(Math["min"]['apply'](Math, v(gg))),
          gq = O(Math["max"]["apply"](Math, v(gg))),
          ge = O(D(gg)),
          gd = O(X(gg)),
          gj = R(gg)["length"],
          gb = O(K(gg, 25)),
          gG = O(K(gg, 75)),
          gA = O(Math['min']["apply"](Math, v(gp))),
          gV = O(Math["max"]["apply"](Math, v(gp))),
          gn = O(D(gp)),
          gt = O(X(gp)),
          gu = R(gp)['length'],
          gU = O(K(gp, 25)),
          gW = O(K(gp, 75)),
          gY = O(Math["min"]['apply'](Math, v(gm))),
          gx = O(Math["max"]['apply'](Math, v(gm))),
          go = O(D(gm)),
          gM = O(X(gm)),
          gC = R(gm)["length"],
          gs = O(K(gm, 25)),
          gE = O(K(gm, 75)),
          gw = O(Math["min"]["apply"](Math, v(gv))),
          gQ = O(Math["max"]["apply"](Math, v(gv))),
          gc = O(D(gv)),
          gJ = O(X(gv)),
          gy = R(gv)["length"],
          T0 = O(K(gv, 25)),
          T1 = O(K(gv, 75));
      return [gR, ga, gD, gX, gO, gr, gK, gF, gZ, gH, gS, gz, gl, gI, gL, gk, gN, gP, gh, gf, gq, ge, gd, gj, gb, gG, gA, gV, gn, gt, gu, gU, gW, gY, gx, go, gM, gC, gs, gE, gw, gQ, gc, gJ, gy, T0, T1];
    }

    var I = function () {
      function L(k, N) {
        var P = [],
            h = !0,
            f = !1,
            q = void 0;

        try {
          for (var j, b = k[Symbol["iterator"]](); !(h = (j = b["next"]())["done"]) && (P["push"](j["value"]), !N || P["length"] !== N); h = !0);
        } catch (G) {
          f = !0, q = G;
        } finally {
          try {
            !h && b["return"] && b["return"]();
          } finally {
            if (f) throw q;
          }
        }

        return P;
      }

      return function (k, N) {
        if (Array["isArray"](k)) return k;
        if (Symbol["iterator"] in Object(k)) return L(k, N);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();

    B["exports"] = z;
  }, function (B, p) {
    B["exports"] = {
      'zh-CN': {
        'loading': "加载中...",
        'loadfail': "加载失败",
        'verifySuccess': "验证成功",
        'verifyError': "验证失败，请重试",
        'verifyOutOfLimit': "失败过多，点此重试",
        'clickButton': "点此进行验证",
        'clickInTurn': "请依次点击",
        'clickOverlapWord': "请点击两下“叠加的文字”，组成成语",
        'dragToAvoidObstacle': "拖动左下白色排球，躲避障碍击中",
        'clickWordInTurn': "请按语序依次点击文字",
        'slideTip': "向右拖动滑块填充拼图",
        'inferenceTip': '拖动交换2个图块复原图片',
        'waitForSMS': '等待短信验证，剩余',
        'popupTitle': "请完成安全验证",
        'refresh': '刷新',
        'feedback': "提交使用问题反馈",
        'switchToVoice': "切换至语音验证码",
        'playVoice': "播放语音验证码",
        'back': '返回',
        'enterCode': "请输入听到的内容",
        'check': '验证',
        'close': '关闭',
        'notSupportVoice': "您的浏览器版本过低，暂不支持语音验证码",
        'intellisense': {
          'normal': "点击完成验证",
          'checking': '安全检测中',
          'loading': "正在加载验证",
          'loadfail': "加载失败",
          'loaddone': "请完成安全验证",
          'longtap': '双击后长按0.5秒完成验证'
        },
        'sms': {
          'scanQrToSMS': "扫描二维码发送验证短信",
          'noScanQr': '无法扫描二维码',
          'manualSMS': "手动发送验证短信",
          'clickToSMS': "点击按钮发送验证短信",
          'editSMS': "编辑短信",
          'sendSMSTo': '发送至',
          'or': '或',
          'toSMS': "去发送验证短信",
          'cannotJump': "无法跳转"
        }
      },
      'en-US': {
        'loading': "loading...",
        'loadfail': "Load failed",
        'verifySuccess': "verify success",
        'verifyError': "verify failed",
        'verifyOutOfLimit': "Verify failed. Please retry",
        'clickButton': "Click here to verify",
        'clickInTurn': "click in turn",
        'clickOverlapWord': '请点击两下“叠加的文字”，组成成语',
        'dragToAvoidObstacle': "拖动左下白色排球，躲避障碍击中",
        'clickWordInTurn': "Please click on the text in order",
        'slideTip': "Slide to complete the image",
        'inferenceTip': "swap 2 tiles to restore the image",
        'waitForSMS': "waiting for SMS，remaining",
        'popupTitle': "Please complete verification",
        'refresh': "Refresh",
        'feedback': "Submit feedback on usage problems",
        'switchToVoice': "Switch to voice verification",
        'playVoice': "Play voice verification code",
        'back': "return",
        'enterCode': "Enter the verification code you hear",
        'check': "verification",
        'close': 'close',
        'notSupportVoice': "Your browser version is too low to support voice verification codes",
        'intellisense': {
          'normal': "Click the button to verify",
          'checking': "verifying...",
          'loading': 'loading...',
          'loadfail': "Load failed",
          'loaddone': "Please complete verification",
          'longtap': "Double click and press for 0.5 seconds to complete the verification"
        },
        'sms': {
          'scanQrToSMS': "Scan QR code to send verification SMS",
          'noScanQr': "Unable to scan QR code",
          'manualSMS': "send a verification SMS manually",
          'clickToSMS': "Click the button to send verification SMS",
          'editSMS': "Edit SMS",
          'sendSMSTo': "Send to",
          'or': 'or',
          'toSMS': "send a verification SMS",
          'cannotJump': "cannot jump to SMS"
        }
      },
      'en-GB': {
        'loading': "loading...",
        'loadfail': "Load failed",
        'verifySuccess': "verify success",
        'verifyError': "verify failed",
        'verifyOutOfLimit': "Verify failed. Please retry",
        'clickButton': "Click here to verify",
        'clickInTurn': "click in turn",
        'clickOverlapWord': "请点击两下“叠加的文字”，组成成语",
        'dragToAvoidObstacle': '拖动左下白色排球，躲避障碍击中',
        'clickWordInTurn': "Please click on the text in order",
        'slideTip': "Drag the pieces atop one another",
        'inferenceTip': "swap 2 tiles to restore the image",
        'waitForSMS': "waiting for SMS，remaining",
        'popupTitle': "Please complete verification",
        'refresh': "Refresh",
        'feedback': "Submit feedback on usage problems",
        'switchToVoice': "Switch to voice verification",
        'playVoice': "Play voice verification code",
        'back': 'return',
        'enterCode': "Enter the verification code you hear",
        'check': 'verification',
        'close': "close",
        'notSupportVoice': "Your browser version is too low to support voice verification codes",
        'intellisense': {
          'normal': "Click the button to verify",
          'checking': "verifying...",
          'loading': "loading...",
          'loadfail': "Load failed",
          'loaddone': "Please complete verification",
          'longtap': "Double click and press for 0.5 seconds to complete the verification"
        },
        'sms': {
          'scanQrToSMS': "Scan QR code to send verification SMS",
          'noScanQr': "Unable to scan QR code",
          'manualSMS': "send a verification SMS manually",
          'clickToSMS': "Click the button to send verification SMS",
          'editSMS': "Edit SMS",
          'sendSMSTo': "Send to",
          'or': 'or',
          'toSMS': "send a verification SMS",
          'cannotJump': "cannot jump to SMS"
        }
      }
    };
  }, function (B, m, v) {
    function R(k, N, P) {
      var h = void 0,
          f = void 0,
          q = void 0,
          j = [];

      switch (k["length"]) {
        case 1:
          h = k[0], f = q = 0, j["push"](N[h >>> 2 & 63], N[(h << 4 & 48) + (f >>> 4 & 15)], P, P);
          break;

        case 2:
          h = k[0], f = k[1], q = 0, j["push"](N[h >>> 2 & 63], N[(h << 4 & 48) + (f >>> 4 & 15)], N[(f << 2 & 60) + (q >>> 6 & 3)], P);
          break;

        case 3:
          h = k[0], f = k[1], q = k[2], j["push"](N[h >>> 2 & 63], N[(h << 4 & 48) + (f >>> 4 & 15)], N[(f << 2 & 60) + (q >>> 6 & 3)], N[63 & q]);
          break;

        default:
          return '';
      }

      return j["join"]('');
    }

    function D(k, N, P) {
      if (!k || 0 === k["length"]) return '';

      try {
        for (var h = 0, f = []; h < k['length'];) {
          if (!(h + 3 <= k["length"])) {
            var q = k["slice"](h);
            f['push'](R(q, N, P));
            break;
          }

          var j = k['slice'](h, h + 3);
          f['push'](R(j, N, P)), h += 3;
        }

        return f['join']('');
      } catch (b) {
        return '';
      }
    }

    function X(k) {
      var N = [];

      switch (k["length"]) {
        case 2:
          N['push'](S((k[0] << 2 & 255) + (k[1] >>> 4 & 3)));
          break;

        case 3:
          N["push"](S((k[0] << 2 & 255) + (k[1] >>> 4 & 3))), N['push'](S((k[1] << 4 & 255) + (k[2] >>> 2 & 15)));
          break;

        case 4:
          N['push'](S((k[0] << 2 & 255) + (k[1] >>> 4 & 3))), N["push"](S((k[1] << 4 & 255) + (k[2] >>> 2 & 15))), N["push"](S((k[2] << 6 & 255) + (63 & k[3])));
      }

      return N;
    }

    function O(k, N, P) {
      for (var h = function (U) {
        return N["indexOf"](U);
      }, f = 0, q = [], j = k["indexOf"](P), b = j !== -1 ? k["substring"](0, j)["split"]('') : k['split'](''), G = b['length']; f < G;) {
        if (!(f + 4 <= G)) {
          var A = b["slice"](f)["map"](h);
          q = q["concat"](X(A));
          break;
        }

        var V = b["slice"](f, f + 4)["map"](h);
        q = q["concat"](X(V)), f += 4;
      }

      return q;
    }

    function K(k) {
      var N = ['i', '/', 'x', '1', 'X', 'g', 'U', '0', 'z', '7', 'k', '8', 'N', '+', 'l', 'C', 'p', 'O', 'n', 'P', 'r', 'v', '6', "\\", 'q', 'u', '2', 'G', 'j', '9', 'H', 'R', 'c', 'w', 'T', 'Y', 'Z', '4', 'b', 'f', 'S', 'J', 'B', 'h', 'a', 'W', 's', 't', 'A', 'e', 'o', 'M', 'I', 'E', 'Q', '5', 'm', 'D', 'd', 'V', 'F', 'L', 'K', 'y'],
          P = '3';
      return D(k, N, P);
    }

    function F(k) {
      var N = ['i', '/', 'x', '1', 'X', 'g', 'U', '0', 'z', '7', 'k', '8', 'N', '+', 'l', 'C', 'p', 'O', 'n', 'P', 'r', 'v', '6', "\\", 'q', 'u', '2', 'G', 'j', '9', 'H', 'R', 'c', 'w', 'T', 'Y', 'Z', '4', 'b', 'f', 'S', 'J', 'B', 'h', 'a', 'W', 's', 't', 'A', 'e', 'o', 'M', 'I', 'E', 'Q', '5', 'm', 'D', 'd', 'V', 'F', 'L', 'K', 'y'],
          P = '3';
      return O(k, N, P);
    }

    function Z(k, N, P) {
      var h = void 0 !== N && null !== N ? N : I,
          f = void 0 !== P && null !== P ? P : L;
      return D(k, h["split"](''), f);
    }

    var H = v(25),
        S = H['toByte'],
        z = v(26),
        I = z["__BASE64_ALPHABET__"],
        L = z["__BASE64_PADDING__"];
    m["base64EncodePrivate"] = Z, m["base64Encode"] = K, m['base64Decode'] = F;
  }, function (B, p) {
    'use strict';

    var m = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (v) {
      return typeof v;
    } : function (v) {
      return v && "function" == typeof Symbol && v["constructor"] === Symbol && v !== Symbol["prototype"] ? "symbol" : typeof v;
    };
    !function () {
      function v() {
        var K = '2izvR3Ydkgw605lf'["split"]('');
        this['m'] = function (F) {
          if (null == F || void 0 == F) return F;
          if (0 != F["length"] % 2) throw Error("1100");

          for (var Z = [], H = 0; H < F["length"]; H++) {
            0 == H % 2 && Z["push"]('%');

            for (var S = K, z = 0; z < S["length"]; z++) if (F["charAt"](H) == S[z]) {
              Z["push"](z["toString"](16));
              break;
            }
          }

          return decodeURIComponent(Z["join"](''));
        }, this['f'] = function (F) {
          if (null == F || void 0 == F) return F;
          if (0 != F["length"] % 2) throw Error("1100");

          for (var Z = [], H = 0; H < F["length"]; H++) {
            0 == H % 2 && Z["push"]('%');

            for (var S = K, z = 0; z < S['length']; z++) if (F["charAt"](H) == S[z]) {
              Z['push'](z['toString'](16));
              break;
            }
          }

          return decodeURIComponent(Z["join"](''));
        };
      }

      var R = new v()['f'],
          a = new v()['m'],
          D = new v()['f'],
          X = new v()['f'],
          O = new v()['f'];
      !function () {
        var K = [X(''), D("RddzYidg3RY3dkdR"), X("d2YidzY3YldR"), X("l36g60l3g0kY"), X("d2Y0d3YdYgYldv"), O("RiYRYfYzY3R3dkR5YiYlRRY3dRY3YvdR"), O("v2v2viv2"), a("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3YdYgYl"), D("3YY3Y3dRY0Y3z23R3Yz2RvYfdzY3"), O('v2v2v2vd'), a("v2v2v2vR"), R('v2v2v2vz'), a("v2v2v2vv"), O("v2v2v2v2"), D("v2v2v2vi"), X("33YlYgdRdgz232Y0YidgY3dz"), R("3vY6dgd2Y3z23dY3Yzz232Y0d3YdYgYl"), O('3dY3YzR6YgdRz5YgYldRY3YddzYgY3dzdRY3z232RRRY'), X("YdYRdkYgYRd2dgYkdkYRR3"), D("RzY3Y0Y0z2R53R"), R("v2v2v2vk"), X('YdY3dR3vd3d2d2YfdzdRY3YRR3dkdRY3YldvYgYfYldv'), O("v2v2v2vg"), D("3vYiYYY33vY3YidzYvYk"), a("dvY3dR3RYgY5Y3"), R("Yid2d2Y3YlYRRvYkYgY0YR"), O('zz'), R('zR'), a("33YlYgdYY3dzdv"), O('z3'), X('zY'), O('zd'), D("viviviv2"), D("YdY3dRz2d2Y0d3YdYgYlz2dvdRdzYgYlYdz2Y3dkYvY3d2dRYgYfYl"), R("3RYkdzY3Y3RR3vYkYiYRYfdd"), X('z6'), R('z0'), a('z5'), D('RidzYiYz'), R("lkk66glYglg0lR6k65ld66kYl3wlk6"), X('zl'), O("RY333wR33vYkYidzY3"), a('zf'), D('v2'), X('vi'), D('vz'), X('vv'), a('vR'), D("lR666fl3wlk63fRdRzvzvvvivz"), D('v3'), O('vY'), R("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl3RY3dkdR"), R('vd'), X("3dR3Rz3wR3Rlz2RzdzYfdddvY3dzz2R3dkdRY3YldvYgYfYl"), X('vk'), X('vg'), a("RRYgdY3kz2RzdzYfdddvY3dzz232Y0d3Ydz5RgYl"), R('vw'), R('v6'), D("33d2Y0Yidgz232Rv"), X('v5'), R("YvYiYldYYidvz2Y3dkYvY3d2dRYgYfYl"), O('Ri'), R('Rz'), a('Rv'), D('RR'), a('R3'), X("l36lwllk65wflgg6k3lg66gi"), O('RY'), R("RkYidzdzYgYlYddRYfYl"), R('Rd'), D('Rk'), X('Rg'), a('Rw'), O("RdYlYfY5Y3z23vYkY3Y0Y0z2RgYldRY3YddzYidRYgYfYl"), a('R6'), O('R0'), O('R5'), O('Rl'), D('Rf'), R('32'), O('3i'), D('3z'), X('3v'), O('RlYgYiYdYidzYiz23vYfY0YgYR'), D('3R'), R("3vY3YYRvY0YgY3YldRz232Y0d3YdYgYl"), O('33'), X('3Y'), O("vivivivi"), O('3d'), O('3k'), X('3g'), D('3w'), a("RdYfd3YRdgz2RfY0YRz23vdRdgY0Y3"), a('30'), O('3zYfYzY0Yfdkz2R0Yid3YlYvYkY3dzz232Y0d3YdYgYl'), O("R5YgYvdzYfdvYfYYdRz2RfYYYYYgYvY3z2vzv2vivv"), R('3i3iR5d3dvYgYv'), R('Yi'), X("R3d3dzYfdvdRYgY0Y3"), D('Yz'), O("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0zlvi"), a('Yv'), X("3vYvdzYgd2dRYgYlYdzlRRYgYvdRYgYfYlYidzdg"), O('YR'), a("lR666fl3wlk6"), R('Y3'), a('YY'), R('Yd'), O('Yk'), O("R5Yiz5RvYfYlYYYgYdzlYvYfY5z2d2Y0d3YdYgYl"), a('Yg'), O("viv2viv2"), R("RvYidvd3YiY0"), D('Yw'), a('Y6'), O('Y0'), O('Y5'), D('Yl'), X('Yf'), R('d2'), X('viv2v2vk'), D('YRYfRlYfdR3RdzYiYvY6'), X('di'), R("YvdR"), a("lR6k65l3wlk6z232dzYf"), R('dz'), O("dvY3dR3RYgY5Y3Yfd3dR"), a("RdYgdvYkYi"), R("YdY3dR3RYgY5Y3dwYfYlY3RfYYYYdvY3dR"), O('dv'), a("viv2v2v3"), X('viv2v2vR'), X('dR'), D('viv2v2vv'), a('d3'), O('dY'), O("viv2v2vi"), X('dd'), O('dk'), R("YRdzYiddRidzdzYidgdv"), X('dg'), O('dw'), X('d6'), R('d5'), O('dl'), R("YYYfYldR"), R("viv2v2vg"), X("dvd3YYYYYgdkY3dv"), R("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2Y3dkd2YgdzY3dvv5"), D("3vYkY3Y0Y0zl33RgRkY3Y0d2Y3dz"), D("dRYfRRYidRYi333zR0"), O('3dYgYlYRYfdd3RY3dkdR'), D('Y0YiYlYdd3YiYdY3'), D("lR6k65lg66giz232dzYf"), O("YRYf"), O("RkYgYdYkY0YgYdYkdR3RY3dkdR"), X("YRYgdY"), R("R5Y3Yld33RY3dkdR"), X("RiRfR0z2R5Y3YRYgYiz232Y0YidgYzYiYvY6z232Y0d3YdYgYl"), R("RvYgdRdzYgdkz2YfYlY0YgYlY3z2d2Y0d3Ydz5YgYl"), O("Y3Yv"), a("RRY3dvYRY3Y5YfYlYi"), D('RgYlYiYvdRYgdYY3RzYfdzYRY3dz'), D("3zY3YiY032Y0YidgY3dz"), O("z0z2zdYvYfYRY3zdvw"), a("RkR3R0R0Rf"), a("Yld23RYfYlYdYzd3RiYRYRYgYl"), a("Y3Y5"), a('YvdzY3YidRY3R3Y0Y3Y5Y3YldR'), D("d2YkYiYldRYfY5"), D("R53vz232R5YgYlYvYkYf"), D("lYw36dlR65gv"), D("Y3dYYiY0"), O('Y3dk'), X('RRYgdY3kz23YRfRRz2RkY3Y0d2Y3dzz232Y0d3Ydz5YgYl'), D("lYgY62ld66kYlYgkkllR65gv"), D('3id3YgYvY63RYgY5Y3RvYkY3YvY6RfYzYwY3YvdRzl3id3YgYvY63RYgY5Y3RvYkY3YvY6zlvi'), O("RYY0dgRfdzRRYgY3z2RdYiY5Y3dvz232Y0d3YdYgYl"), R("YidRdRYiYvYk3vYkYiYRY3dz"), D("32Y0YidgRfYlz232Y0d3Ydz5YgYl"), D("YdY3dR3RYgY5Y3"), O("vizlv2vi"), O("RzdzYfYiYRddYidg"), a("YYd2"), R('RiY0YiddYidzz2Rl32Ri32Rgz2d3dRYgY0dv'), O('RYYfdzdRY3'), O("YkYidvYkRvYfYRY3"), D("lYgY6glYw5wvl3wdgwlR65gv"), a("R33vRlz23vYfYlYidzz2Ri32Rg"), R("Rk32RRY3dRY3YvdR"), O("RzYgdRYRY3YYY3YlYRY3dzz23id3YgYvY63vYvYiYl"), D('RgR3z23RYiYzz2d2Y0d3YdYgYl'), D("Rzd3dRdRYfYlRYYiYvY3"), O("zdz0"), R("Yvd2d3RvY0Yidvdv"), X("Y5Y3dvdvYiYdY3"), a("RvY3YldRd3dzdgz2RdYfdRYkYgYv"), R('RfYlY0YgYlY3z23vdRYfdzYiYdY3z2d2Y0d3Ydz5YgYl'), a("3vYiYYY3dzz233d2YRYidRY3"), D("R5dvdkY5Y0vzzlRRRfR5RRYfYvd3Y5Y3YldR"), R("R3YlYddzYidYY3dzdvz2R53R"), a('3vYgY0dYY3dzY0YgYdYkdRz232Y0d3Ydz5RgYl'), R('RdYfYfYdY0Y3z2RdY3Yidzdvz2v2zlv3zlvvvvzlv2'), R("RvYgdRdzYgdkz2RgRvRiz2RvY0YgY3YldR"), D('YiY0d2YkYiYzY3dRYgYv'), D("YvYfYldRY3dkdR"), a('3YRRYfddYlY0YfYiYRY3dz'), D("l3k5kllYgYkdlYw36dlR65gv"), X("YidRdRdz3YY3dzdRY3dk"), O("l3wlk6lR65gv"), D("YvYfYfY6YgY3"), D("z3vzvz"), O("z3vzvY"), X('RvY3YldRYid3dz'), O("vRYdYiY5Y3"), O("3zYfYvY6ddY3Y0Y0"), R("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvYvi"), a('RfYvdRYfdvYkYid2Y3z23vdRdzY3YiY5YgYlYdz23vY3dzdYYgYvY3dv'), O("dRYfRdR53R3vdRdzYgYlYd"), D("dRYkv5zf"), a('3vd3Y5YidRdzYi32RRRYz2RzdzYfdddvY3dzz232Y0d3YdYgYl'), X('32RRRYzl32YRYYRvdRdzY0'), D("YYYgY0Y03vdRdgY0Y3"), O("YYYfYldR3vYgdwY3"), D("RiYRYfYzY3z2R5YgYlYdz23vdRYR"), a('YwY3'), a("3RYfdzYvYkRkY3Y0d2Y3dz"), X("RYdzYiYlY6Y0YgYlz2RdYfdRYkYgYvz2RkY3YidYdg"), D("l3k5kllYgYkdlR666fl3wlk6"), O("RkYidzY5YfYldgz232Y0d3Ydz5RgYl"), D("RdYgYdYg"), X("dYvizlvi"), X("R6YgYlYfz2R53R"), R("3vYgY5RkY3Yg"), X("RiY0Yg3v3vRfR0YfYdYgYlz2d2Y0d3YdYgYl"), a("3zY3YiY032Y0YidgY3dzzl3zY3YiY032Y0YidgY3dzzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), X('3gYiYlYRY3dkz232RRRYz23YYgY3ddY3dz'), X('RvYgdRdzYgdkz23zY3YvY3YgdYY3dzz232Y0d3Ydz5YgYl'), D('dRYfd2'), X('Y5YiYg'), a("RiYvdzYf32RRRYzl32RRRY"), R("YvYiYldYYidvz2Yid2Ygz2Y3dkYvY3d2dRYgYfYl"), R("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl"), X("R5Y3Yld3"), D("d2dzY3YvYgdvYgYfYlz2Y5Y3YRYgd3Y5d2z2YYY0YfYidRv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2YdY03fRYdzYiYdRvYfY0Yfdzz2v5z2dYY3YvvRzkdYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z0z2v2z0z2vizgv6z2d5"), a("3i3ivzv2vivvz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), X("RdYfYfYdY0Y3z233d2YRYidRY3"), X("l3k5kllYgYkdl365wglR6wgi"), X("Y3R5d3dvYgYv32Y0d3YdYgYlz2RRR0R5vY"), R("3dY3Yzz2RvYfY5d2YfYlY3YldRdv"), O("RzYiYzdgY0YfYlz23RYfYfY0RzYidz"), R("RvYfYfddYfYlz233d2YRYidRY3"), a("RgYlYYYf3RY3dkdR"), a("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0"), R('YgR5Y3dvYkz2d2Y0d3YdYgYl'), D('3zY3YiY0RRYfddYlY0YfYiYRY3dzz232Y0d3YdYgYl'), a('3vdgY5YiYldRY3Yvz232R6Rgz2RvY0YgY3YldR'), O("3fd2YkYiYldRYfY5"), R("RdRRR0z2RfYzYwY3YvdRz23dY3Yzz232Y0d3Ydz5YgYlz2vivYzlv2v2"), D('ddY3YzYdY0'), a('l3k5kllYgYkdl3wlk6lR65gv'), R("dvYvdzY3Y3Yl"), D("YzYfYRdg"), R('3R3zRgRiRlRdR0R33f3v3R3zRg32'), X("3RY0ddYdR5YfYlYf"), O("Ylv5"), X("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvvv3"), R('zdvwzd'), X("YYd3YlYvdRYgYfYl"), a("YvYfYldRY3dkdRzlYkYidvYkRvYfYRY3"), X("RidzYvYkYgRvRiRR"), O('3YR33z3RR33k3f3vRkRiRRR33z'), O('33Yzd3YldRd3'), R("RYYiYvY3YzYfYfY6z232Y0d3YdYgYl"), R('RiYvdRYgdYY3RvYid2dRYgYfYl'), O("ld66kYlYgkkllR65gv"), a("R5YiY0Ydd3Ylz2RdYfdRYkYgYv"), a('RlY3dddvz2RdYfdRYkYgYvz2R53R'), a("RvYid2dRYgYfYl3RY3dkdR"), D("Yi3wYz3gv2Yv3kYR3dviY33YYYvz33Ydvv3RYkvR3vYg3zv3Yw3iY6vY32Y0RfvdY5RlYlvkR5YfR0vgd2R6diRwdzRgdvRkdRRdd3RYdYR3ddRRdkRvdgRzdwRi"), a("RRY3YwYi3Yd3z2R0RdRvz23vYiYldvz2R5YfYlYf"), a("RvYfd2d2Y3dzd2Y0YidRY3z2RdYfdRYkYgYvz2R0YgYdYkdR"), a('3vY3YdYfY3z232dzYgYldR'), O('3vYiddYidvYRY3Y3'), X("RzYid3YkYid3dvz2vgvv"), a("RvYkYiY0Y6YRd3dvdRY3dz"), X("RiYzYiYRYgz2R53Rz2RvYfYlYRY3YldvY3YRz2R0YgYdYkdR"), a("R0d3YvYgYRYiz2RzdzYgYdYkdR"), D('3dYgYRY3z2R0YidRYgYl'), O('YYYfYldRz2YRY3dRY3YvdRz2Y3dzdzYfdz'), R('R6Yfdwd3Y6Yiz2RdYfdRYkYgYvz232dzvYRl'), X("RkdRY5Y0v3z2Y0YfYvYidRYgYfYlz2d2dzYfdYYgYRY3dz"), R("RRYgdY3kz232Y0d3dvz23dY3Yzz232Y0YidgY3dz"), a('3YY0YiYRYgY5Ygdzz23vYvdzYgd2dR'), X('RYYgY0Y3z2RRYfddYlY0YfYiYRY3dzz232Y0d3Ydz5YgYl'), O("YfYz"), a('RiYRYfYRYzzl3vdRdzY3YiY5'), R("R5Y3YlY0Yf"), a('YvYiY0Y032YkYiYldRYfY5'), a("3dYfY0YYdzYiY5z2R5YidRYkY3Y5YidRYgYvYi"), O("RvYidRYiY0YgYlYiRddzYfd3d2z233d2YRYidRY3"), D("R3dzYidvz2RzYfY0YRz2Rg3RRv"), R('RRY3dYYiY03Y3z3kRvdRdzY0zlRRY3dYYiY03Y3z3kRvdRdzY0zlvi'), O("l3k5kllYgYkdld66kYlg66gi"), D("YiYRYRRzY3YkYidYYgYfdz"), O("d2Yi"), a("RzYgdRdvdRdzY3YiY5z23YY3dzYiz23vY3dzYgYY"), O("zkYYd3YlYvdRYgYfYlzkzgd6dzY3dRd3dzYlz2vivzvvv6d5zgzkzgv6"), R('d2Yg'), D("3RY3YlYvY3YldRz2RY3RRlz2d2Y0d3Ydz5YgYl"), D('dzY3Y5YfdYY3RvYkYgY0YR'), O('RYYfY0dkz2vvz2RzdzYfdddvY3dzz232Y0d3YdYgYl'), D("d3dvY332dzYfYddzYiY5"), R("YkYfdvdRYlYiY5Y3"), R("d2YkYiYldRYfY5zlYgYlYwY3YvdRRwdv"), X("3vYkYfYvY6ddYidYY3RYY0YidvYkzl3vYkYfYvY6ddYidYY3RYY0YidvYk"), D("YkY3YgYdYkdR"), X("dzYdYzYizkviv2vzz0z2vzv2vRz0z2v2z0z2v2zlvdzg"), R("RiYRYzY0YfYvY632Y0d3YdYgYl"), a("RzYiYvY6YddzYfd3YlYR"), O("RiYdRvYfYldRdzYfY0zlRiYdRvYfYldRdzYfY0"), D("32YkYfdRYfRvY3YldRY3dz32Y0d3YdYgYlvizlvizlvzzlvz"), a("Rdd3YlYd3vY3Yf"), a("dvv5"), D("YRY3YvYfYRY3333zRg"), R("lYgY6glYw5wvlkkkgzlR65gv"), O("l3k5kllYgYkdlYgY62lgw5kf"), a('vivzvv'), R("ddY3YzYdY0z2Y3dkYvY3d2dRYgYfYl"), O("dzY3"), X('3dR532Y0YidgY3dzzlRfRv3k'), O("vdvzd2dk"), a("Rid2d23dYfdzY6dvd2YiYvY3"), X("RkYgYdYkY0YgYdYkdR"), a("YRYfYvd3Y5Y3YldR"), X('3gYiYlYRY3dkz2R5Y3YRYgYiz232Y0d3YdYgYl'), X("R33vRlz2R0Yid3YlYvYkz2R5YfdwYgY0Y0Yiz232Y0d3YdYgYl"), O("vdv2d2dkz2zdRidzYgYiY0zd"), D("YgYlYwY3YvdRRwdv"), O("R0YfY5Yi"), a("RzYgdRRvYfY5Y3dRRiYdY3YldR"), a('RvYiY0YgYzdzYg'), O("RzYfYfY6Y5YiYlz2RfY0YRz23vdRdgY0Y3"), a('dvY3dvdvYgYfYl3vdRYfdzYiYdY3'), X("33dRYfd2YgYi"), R('YvYfY5d2YgY0Y33vYkYiYRY3dz'), R("Y3dvYvYid2Y3"), X("3vYvdzYfY0Y0YzYidz"), D('3dYgYlYRYfdd'), a("lggw6YlR6gwY"), D('R6Yidvd2Y3dzdvY6dgz232YidvdvddYfdzYRz2R5YiYlYiYdY3dz'), X("R5YgYlYdR0Yg33z5R3dkdRRz"), D("YdY3dRz2dvdgdvdRY3Y5z2YvYfY0Yfdzdvz2Y3dkYvY3d2dRYgYfYl"), R('3vY6dgd2Y3zlRRY3dRY3YvdRYgYfYl'), a("RYYgY0Y3R0YiYzz2d2Y0d3YdYgYl"), D("Yld2Ri32Rgz232Y0d3YdYgYl"), X("YlYfdR3fY3dkYgdvdR3fYkYfdvdR"), D('vzYR'), O("RiYvdRYgdYY33kRfYzYwY3YvdR"), O("RRYfdRd3Y5"), a("32RRRYz53kRvYkYiYlYdY3z23YYgY3ddY3dz"), X("YfYYYYdvY3dRRkY3YgYdYkdR"), O("32R5YgYlYdR0Yg33"), D("YvYfY0YfdzRRY3d2dRYk"), a("RlYfY6YgYiz23vd3YgdRY3z2R3YlYiYzY0Y3dzz232Y0d3YdYgYl"), a('3zY3YiY03YYgYRY3Yfzl3zY3YiY03YYgYRY3YfzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg'), X("R5YiYdYlY3dRYf"), R("RiYRYfYzY3R3dkR5YiYlRvRvRRY3dRY3YvdR"), X("RdYiYzdzYgYfY0Yi"), O("32Y0YidgYzYgY0Y0"), X('YlYidYYgYdYidRYfdz'), a("3zYiYvYkYiYlYi"), D("3Rddz2RvY3Ylz2R53Rz2RvYfYlYRY3YldvY3YRz2R3dkdRdzYiz2RzYfY0YR"), a("3i3iR5YgYlYgRRR0z232Y0d3YdYgYl"), O('zvYYvYv2'), O("YYYgY0Y03zY3YvdR"), R('RRY3YYYid3Y0dRz2RzdzYfdddvY3dzz2RkY3Y0d2Y3dz'), O("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2YRYfY5YiYgYlv5"), O("RYdzY3YlYvYkz23vYvdzYgd2dRz2R53R"), X("lYw2kdlYw36dlR65gv"), X('Y3YlYvYfYRY3333zRg'), a("33Y5d2d3dvYk"), O("YgYvd2"), a("l3k5kllYgYkdldg2w3ldkfk2"), R("YvdzY3YidRY332dzYfYddzYiY5"), O('Y5YfYlYfdvd2YiYvY3'), R('Rzd3dRdRYfYl3vYkYiYRYfdd'), D("RzYfYRYfYlYgz2R53R"), a("3v3RRi3RRgRv3fRR3zRi3d"), O("lg66gilR65gv"), O("YRYfddYlY0YfYiYR33d2YRYidRY3dz"), a("RiY0YgY3YRYgdRz232Y0d3Ydz5RgYl"), D("32RRRYz2YgYldRY3YddzYiYRYfz2YRYfz23dY3YzR6YgdR"), R("d3YlYgYYYfdzY5RfYYYYdvY3dR"), a("Y3YlYvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), D("32YgYvYidvYi"), D("RiYRYfYzY3z2RYYiYlYddvYfYlYdz23vdRYR"), X("YzYgYlYRRzd3YYYYY3dz"), O("Ri3YRdz23vYgdRY33vYiYYY3dRdgz2d2Y0d3YdYgYl"), D("RfdzYzYgdRz2RRYfddYlY0YfYiYRY3dz"), D("YvYfY0Yfdz"), a('YkYgYRYRY3Yl'), a("Y0YfYvYiY03vdRYfdzYiYdY3"), a("RdYfYfYdY0Y3z23RYiY0Y6z2R3YYYYY3YvdRdvz232Y0d3YdYgYl"), O("YRY3dvYvdzYgd2dRYgYfYl"), R("YgYlYRY3dkY3YRRRRz"), a("R0d3YvYgYRYiz2RYYidk"), a("RiY5YidwYfYlR532vvRRYfddYlY0YfYiYRY3dz32Y0d3YdYgYl"), O("YvdzY3YidRY3Rzd3YYYYY3dz"), X('RvYidvdRY3Y0Y0Yidz'), O("Y0YgYlY632dzYfYddzYiY5"), a('RvYiY0YgYYYfdzYlYgYiYlz2RYRz'), a('3RYkdzY3Y3RRRkYgYdYkY0YgYdYkdR'), R("YvdzY3YidRY33vYkYiYRY3dz"), D("Rdd3Y0YgY5"), O("RldgdkR0Yid3YlYvYkY3dz"), X("3gYfd33Rd3YzY3z232Y0d3Ydz5YgYl"), a("lYw36dlR65gv3fRdRzvzvvvivz"), a('3v3dRvdRY0zl3v3dRvdRY0'), D('RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3Ydz5YgYl'), a("3i3iRRYfddYlY0YfYiYRz232Y0d3YdYgYl"), D("RlYfdzdRYfYlz2RgYRY3YldRYgdRdgz23vYiYYY3"), O('d2YidzdvY3RgYldR'), D("3vYgY5d2Y0Y3z232Yidvdv"), a('RvYfY0YfYlYlYiz2R53R'), a("dwYiY6Yf"), D("YdY3dR33YlYgYYYfdzY5R0YfYvYidRYgYfYl"), X("dvYkYiYRY3dz3vYfd3dzYvY3"), D('RRYfddYlY0YfYiYRY3dzdvz2d2Y0d3YdYgYl'), a("Y0YfYvYidRYgYfYl"), X("RkY3dzYfY3dvz2zYz2RdY3YlY3dzYiY0dvz2Y0YgdYY3"), R('ddYgYlYRYfdd'), X("3vYkYfddYvYidzYRz2RdYfdRYkYgYv"), R("l36lwllk65wflYw5wvlg66gilR65gv"), X("l3k5kllYgYkdlkwik0lYw36d"), O("RdYgYlYdY3dz"), O("3zYfYvY6R5Y3Y0dRz233d2YRYidRY3"), R('3dYgYlYRYfddRYdzYiY5Y3'), a("Y3YlYiYzY0Y33YY3dzdRY3dkRidRdRdzYgYzRidzdzYidg"), D("R6YiYvdvdRRfYlY3"), O("YidRdRdzYgYzd3dRY3z2dYY3Yvvzz2YidRdRdz3YY3dzdRY3dkv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2d3YlYgYYYfdzY5z2dYY3Yvvzz2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z2v5z2YidRdRdz3YY3dzdRY3dkz2z6z2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2z2z2YdY03f32YfdvYgdRYgYfYlz2v5z2dYY3YvvRzkYidRdRdz3YY3dzdRY3dkz0z2v2z0z2vizgv6z2d5"), a('32Y3dzd2Y3dRd3Yi'), O("Yfd2Y3YlRRYidRYiYzYidvY3"), D("YvYiYldYYidv"), O("YgRdY3dRdRY3dz3vYvdzYgd2dRYiYzY0Y332Y0d3YdYgYl"), O("RgYlYYYfdzY5YiY0z23zYfY5YiYl"), O("RlYgdRdzYfz232RRRYz232Y0d3Ydz5RgYl"), a("R5dvdkY5Y0vzzl3kR5R0Rk3R3R32"), O("l3k5kllYgYkdlg66gilR65gv"), D("Rl32R0YidvdR32Yidvdv"), O("3RYkdzY3Y3RRRYYiYvY3"), D("dvdRdgY0Y3"), X("R0YidvdR32Yidvdv"), a("vwvw"), D("d2YidzdvY3RYY0YfYidR"), a("l3k5kllYgYkdlggw6YlR6gwY"), R("v6z2"), X("YdY3dRRidRdRdzYgYzR0YfYvYidRYgYfYl"), R('d6zdYlYiY5Y3zdvw'), O("RldgYiY0Yi"), O("YlYfdR3fY3dkYgdvdR3fYkYfdvdRYlYiY5Y3"), D("30zd"), D("RdRYRiRvR3z232Y0d3YdYgYl"), X("d3YlYRY3YYYgYlY3YR"), a("lYgY62l3wlk6lR65gv"), O("30zl"), O("R5YidRd3dzYiz2R53Rz23vYvdzYgd2dRz2RvYid2YgdRYiY0dv"), X("RidzYgYiY0z2RzY0YiYvY6"), D("RYYiYlYd3vYfYlYd"), X("Y5ddRvz2YlY6YzYiYYYwYfdzYRz2d2YkdvYdY0dgz2Y3dkdYdRz2dwdiYgd3z0z2li65w2z2dRd2YkdvdRzfvwzfd3YkYzYddRYgYvzlY5YfzfY0Y3dYdYYi"), a('RzdzYiYdYdYiYRYfYvYgYf'), R("RkYidzY5YfYldgz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), R("32YiY0YiYvY3z23vYvdzYgd2dRz2R53R"), R("RlYidRYgdYY3z2RvY0YgY3YldR"), D("YfYYYYdvY3dR3dYgYRdRYk")],
            F = [X("d3dvY3dzRiYdY3YldR"), D("3id3YgYvY63RYgY5Y3zl3id3YgYvY63RYgY5Y3"), R('Y3dkd2Y3dzYgY5Y3YldRYiY0z5ddY3YzYdY0'), R("Ri3z3zRi3g3fRz33RYRYR33z"), D("lkk66glYglg0lR6k65lR6kw5lg66gi"), D("RiY0Ygd2Yidgz23vY3Yvd3dzYgdRdgz2RvYfYldRdzYfY0z2vv"), D('3vYvdzYgd2dRz2R53Rz2RzYfY0YR'), D("z0z2zdYzdzYfdddvY3dz32dzYfd2zdvw"), R("3RRRRvRvdRY0zl3RRRRvRvdRY0"), a("ddYgYRdRYk"), O("dvY3Y0YY"), R("RgYlYYYfRzYiYvY6YddzYfd3YlYR"), a("32YiYlYRYfz23dY3Yzz232Y0d3YdYgYl"), X('RkYiY3dRdRY3YldvYvYkddY3YgY0Y3dz'), R('dvd2YiYl'), R("YgYlYlY3dzRk3RR5R0"), O('RiYvdRYgdYY3RzYfdzYRY3dz'), a('3RYkdzY3Y3RRR0YgYdYkdR3vYkYiYRYfdd'), R("v2vzv2vz"), D("v2vzv2vv"), O("YYYfYldRRYYiY5YgY0dg"), R("v2vzv2v2"), X("v2vzv2vi"), D("3d32Rgz2RRY3dRY3YvdRYfdzz2vizlvR"), R('v6z2Y3dkd2YgdzY3dvv5'), D("3RYkdzY3Y3RRRRYidzY63vYkYiYRYfdd"), O("R3dkYgYYz2R3dYY3dzdgddYkY3dzY3"), R("RzYidRdRY0Y3Y0YfYdz2RdYiY5Y3z2R0Yid3YlYvYkY3dz"), O("RgY5d2YiYvdR"), D("3YR0Rvz2R5d3Y0dRYgY5Y3YRYgYiz232Y0d3YdYgYl"), a("RiYRYfYzY3z2RkY3YzdzY3dd"), D("RzY0d3Y33vdRYiYvY6dvz2RgYldvdRYiY0Y0z2RRY3dRY3YvdRYfdz"), R("ddddddY5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y0Y0Yg"), D("YkYgdvdRYfdzdg"), O("dvYiYldvz5dvY3dzYgYY"), X("vivRvdvvvivzv3v3vzvvvRYRvRvivRYvRYvgvivvv3vYYRvYvkvRR3vRR3vkRYv3RYv3vYYvvkYYviYzYv"), R("32Yid2dgdzd3dv"), D("Rzd3dRdRYfYl3RY3dkdR"), O("v2vzvivi"), D("Rid2d233d2"), a("32YidzYfY5zl3R3Yz2d2Y0YidgY3dzz2d2Y0d3YdYgYl"), X("RRY3YiY032Y0dgR0YgdYY3z233d2YRYidRY3"), R("R0YfYkYgdRz2Rdd3YwYidzYidRYg"), R("RY3zRiRdR5R3Rl3R3f3vRkRiRRR33z"), O("RiYdY3YlYvdgz2RYRz"), D('R5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dzzlR5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dz'), O("zvzvzv"), a("3dYfdzYRRvYid2dRd3dzY33k"), R("YdY3dRRvYfY5d2d3dRY3YR3vdRdgY0Y3"), R("d2Y0YidRYYYfdzY5"), X("v2viv2v3"), O('RidzYiYzYgYvz23Rdgd2Y3dvY3dRdRYgYlYd'), X("v2viv2vY"), D('v2viv2vv'), X('l3k5kllYgYkdlR6kw5l3wlk6'), O("v2viv2vR"), X("v2viv2vi"), R("v2viv2vz"), O("v2viv2v2"), R("v2viv2vd"), O("Rzd3dRdRYfYlRkYgYdYkY0YgYdYkdR"), D("dYY3dzdRY3dkRidRdRdzYgYz32YfYgYldRY3dz"), R("v2viv2vk"), R("dRY3dkdRRzYidvY3Y0YgYlY3"), a("zvv2vYvg"), D("YRYfd3YzY0Y33RddYgdvdRz23dY3Yzz232Y0d3YdYgYl"), a('Y5YidRYvYk'), a('d3YlY3dvYvYid2Y3'), R("3RYkd3YlYRY3dzz2RRYid2RvdRdzY0z2Rl32Ri32Rgz232Y0d3YdYgYl"), a("RzYidRYiYlYd"), O("RRRYR6YiYgz53vRz"), R("3vYlYid2z2Rg3RRv"), X("R5YgYlYgYzYidz32Y0d3YdYgYl"), D("RRYidRY3"), R('YRY3YvYfYRY3333zRgRvYfY5d2YfYlY3YldR'), O('Rl3232Y0YidgY3dz3vYkY3Y0Y0'), a("R53vz23zY3YYY3dzY3YlYvY3z23vYiYldvz23vY3dzYgYY"), O("RkYgdzYiYdYgYlYfz23vYiYldvz2RdRz"), O("dvY3dzYgYY"), R("YdY3dRRvYfYldRY3dkdR"), O("d3YlYgYYYfdzY5vzYY"), a("R5YfYfY0RzYfdzYiYl")];
        !function () {
          var Z = [36, 28, 51, 9, 23, 7, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, -11, 11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, -18, 18, 19, -19, 20, -20, 21, -21, -22, 22, -23, 23, 24, -24, 25, -25, -26, 26, 27, -27, 28, -28, 29, -29, 30, -30, 31, -31, 33, -33, -32, 32, -34, -35, 34, 35, 37, -37, 36, -36, 38, 39, -39, -38, 40, 41, -41, -40, 42, -43, -42, 43, 45, -45, -44, 44, 47, -46, -47, 46, 48, -49, -48, 49, -50, 51, -51, 50, 570562233, 53, -52, 52, -53, -54, -55, 55, 54, 503444072, 57, -56, -57, 56, 59, 58, -59, -58, 60, 61, -61, -60, 62, 63, -63, -62, -64, 711928724, -66, 67, -65, 65, -67, 66, 64, -71, -69, 69, 68, 70, -68, -70, 71, -72, 3686517206, -74, -73, 73, 75, 74, -75, 72, -79, 76, 79, 78, -78, -76, 77, -77, 3554079995, -81, 81, -82, -83, 80, -80, 82, 83, -84, 84, 85, -86, -87, 86, -85, 87, 90, -88, -89, -90, 88, 89, 91, -91, 94, 92, 95, -94, 93, -93, -95, -92, -98, 97, 98, -97, -99, 96, 99, -96, -100, 3272380065, 102, -102, -101, -103, 103, 100, 101, -107, -104, 105, 104, 106, -106, -105, 107, 109, -109, -108, -111, 110, -110, 111, 108, 251722036, 115, -115, 112, -114, -112, 113, 114, -113, -117, 119, -116, -119, 117, -118, 118, 116, 123, -120, 122, -121, 120, -122, -123, 121, 125, 127, 3412177804, -127, 126, -126, 124, -125, -124, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 2097651377, 376229701, 853044451, 752459403, 426522225, 1000, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1231636301, 10000, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918000, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, 0.4, 2238001368, 2512341634, 2647816111, -0.2, 314042704, 1510334235, 900000, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -0.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, 0.732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -0.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 840000, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
          !function () {
            function g0(gc) {
              if (null == gc) return null;

              for (var gJ = [], gy = Z[6], T0 = gc["length"]; gy < T0; gy++) {
                var T1 = gc[gy];
                gJ[gy] = gV[(T1 >>> Z[14] & Z[47]) * Z[49] + (T1 & Z[47])];
              }

              return gJ;
            }

            function g1(gc) {
              var gJ = [];
              if (null == gc || void 0 == gc || gc["length"] == Z[6]) return g4(gt);

              if (gc['length'] >= gt) {
                gJ = Z[6];
                var gy = [];

                if (null != gc && gc["length"] != Z[6]) {
                  if (gc["length"] < gt) throw Error(K[135]);

                  for (var T0 = Z[6]; T0 < gt; T0++) gy[T0] = gc[gJ + T0];
                }

                return gy;
              }

              for (gy = Z[6]; gy < gt; gy++) gJ[gy] = gc[gy % gc["length"]];

              return gJ;
            }

            function g2(gc) {
              var gJ = Z[394];

              if (null != gc) {
                for (var gy = Z[6]; gy < gc["length"]; gy++) gJ = gJ >>> Z[29] ^ gA[(gJ ^ gc[gy]) & Z[290]];
              }

              if (gc = g6(gJ ^ Z[394]), gJ = gc["length"], null == gc || gJ < Z[6]) gc = new String(K[0]);else {
                gy = [];

                for (var T0 = Z[6]; T0 < gJ; T0++) gy["push"](g9(gc[T0]));

                gc = gy["join"](K[0]);
              }
              return gc;
            }

            function g3(gc, gJ, gy) {
              var T0 = [K[45], K[47], K[43], K[99], K[92], K[71], K[112], K[81], K[140], K[76], K[95], K[93], K[136], K[108], K[88], K[117], K[109], K[54], K[131], K[80], K[77], K[82], K[50], K[105], K[70], K[116], K[91], K[137], K[79], K[42], K[64], K[101], K[139], K[55], K[90], K[65], K[115], K[44], K[66], K[85], K[142], K[72], K[83], K[103], K[118], K[107], K[120], K[73], K[143], K[46], K[52], K[124], K[134], K[110], K[63], K[127], K[87], K[35], K[75], K[78], K[62], K[49], K[121], K[119]],
                  T1 = K[68],
                  T2 = [];

              if (gy == Z[531]) {
                gy = gc[gJ];
                var T3 = Z[6];
                T2['push'](T0[gy >>> Z[7] & Z[144]]), T2['push'](T0[(gy << Z[14] & Z[113]) + (T3 >>> Z[14] & Z[47])]), T2['push'](T1), T2["push"](T1);
              } else {
                if (gy == Z[7]) gy = gc[gJ], T3 = gc[gJ + Z[531]], gc = Z[6], T2["push"](T0[gy >>> Z[7] & Z[144]]), T2["push"](T0[(gy << Z[14] & Z[113]) + (T3 >>> Z[14] & Z[47])]), T2["push"](T0[(T3 << Z[7] & Z[139]) + (gc >>> Z[21] & Z[10])]), T2['push'](T1);else {
                  if (gy != Z[10]) throw Error(K[113]);
                  gy = gc[gJ], T3 = gc[gJ + Z[531]], gc = gc[gJ + Z[7]], T2['push'](T0[gy >>> Z[7] & Z[144]]), T2["push"](T0[(gy << Z[14] & Z[113]) + (T3 >>> Z[14] & Z[47])]), T2["push"](T0[(T3 << Z[7] & Z[139]) + (gc >>> Z[21] & Z[10])]), T2["push"](T0[gc & Z[144]]);
                }
              }

              return T2["join"](K[0]);
            }

            function g4(gc) {
              for (var gJ = [], gy = Z[6]; gy < gc; gy++) gJ[gy] = Z[6];

              return gJ;
            }

            function g5(gc, gJ, gy, T0, T1) {
              if (null == gc || gc["length"] == Z[6]) return gy;
              if (null == gy) throw Error(K[133]);
              if (gc['length'] < T1) throw Error(K[135]);

              for (var T2 = Z[6]; T2 < T1; T2++) gy[T0 + T2] = gc[gJ + T2];

              return gy;
            }

            function g6(gc) {
              var gJ = [];
              return gJ[0] = gc >>> Z[65] & Z[290], gJ[1] = gc >>> Z[49] & Z[290], gJ[2] = gc >>> Z[29] & Z[290], gJ[3] = gc & Z[290], gJ;
            }

            function g7(gc) {
              if (null == gc || void 0 == gc) return gc;
              gc = encodeURIComponent(gc);

              for (var gJ = [], gy = gc["length"], T0 = Z[6]; T0 < gy; T0++) if (gc["charAt"](T0) == K[29]) {
                if (!(T0 + Z[7] < gy)) throw Error(K[148]);
                gJ["push"](g8(gc["charAt"](++T0) + K[0] + gc["charAt"](++T0))[0]);
              } else gJ["push"](gc["charCodeAt"](T0));

              return gJ;
            }

            function g8(gc) {
              if (null == gc || gc['length'] == Z[6]) return [];
              gc = new String(gc);

              for (var gJ = [], gy = gc['length'] / Z[7], T0 = Z[6], T1 = Z[6]; T1 < gy; T1++) {
                var T2 = parseInt(gc['charAt'](T0++), Z[49]) << Z[14],
                    T3 = parseInt(gc["charAt"](T0++), Z[49]);
                gJ[T1] = gp(T2 + T3);
              }

              return gJ;
            }

            function g9(gc) {
              var gJ = [];
              return gJ["push"](gG[gc >>> Z[14] & Z[47]]), gJ['push'](gG[gc & Z[47]]), gJ["join"](K[0]);
            }

            function gg(gc, gJ) {
              if (null == gc || null == gJ || gc["length"] != gJ["length"]) return gc;

              for (var gy = [], T0 = Z[6], T1 = gc['length']; T0 < T1; T0++) gy[T0] = gT(gc[T0], gJ[T0]);

              return gy;
            }

            function gT(gc, gJ) {
              return gc = gp(gc), gJ = gp(gJ), gp(gc ^ gJ);
            }

            function gB(gc, gJ) {
              return gp(gc + gJ);
            }

            function gp(gc) {
              if (gc < Z[281]) return gp(Z[282] - (Z[281] - gc));
              if (gc >= Z[281] && gc <= Z[273]) return gc;
              if (gc > Z[273]) return gp(Z[283] + gc - Z[273]);
              throw Error(K[138]);
            }

            function gm(gc) {
              function gJ() {
                for (var Tm = [K[288], K[398], F[30], K[226], F[44], K[38], F[51], K[469], F[69], K[286], K[19], K[308], K[389], K[344], K[472], K[184], K[343], K[413], K[411], K[114], K[215], K[198], K[287], K[426], K[283], K[282], K[163], F[70], K[361], K[202], K[303], K[100], K[470], K[187], K[229], K[380], K[370], K[232], K[129], K[94], K[416], K[324], F[13], K[69], F[77], F[28], K[447], K[441], K[234], K[292], F[42], K[341], K[289], K[408], K[368], K[278], K[468], K[299], K[353], F[81], K[172], F[76], K[279], K[84], K[461], K[474], F[36], K[443], K[371], K[364], K[373], K[217], K[285], F[6], K[284], K[434], K[235], F[71], K[266], K[374], K[274], K[383], K[28], K[346], K[295], K[290], K[106], F[54], K[230], K[262], K[249], K[328], K[209], K[385], K[305], K[436], K[457], K[211], K[3], K[67], K[466], K[189], K[327], K[173], K[351], K[391], K[177], K[277], K[381], K[48], K[419], K[435], K[450], K[155], K[126], F[4], K[39]], Tv = [], Ti = Z[6]; Ti < Tm["length"]; Ti++) try {
                  var TR = Tm[Ti];
                  gy()(TR) && Tv["push"](TR);
                } catch (Ta) {}

                return Tv['join'](K[58]);
              }

              function gy() {
                function Tm(TO) {
                  var Tr = {};
                  return TX[K[453]][F[20]] = TO, TD[K[25]](TX), Tr[K[318]] = TX[K[363]], Tr[F[9]] = TX[K[476]], TD[K[312]](TX), Tr;
                }

                var Tv = [K[387], F[34], F[78]],
                    Ti = [],
                    TR = F[32],
                    Ta = K[333],
                    TD = ge[K[264]],
                    TX = ge[K[170]](F[14]);

                for (TX[K[453]][K[225]] = Ta, TX[K[453]]["visibility"] = K[403], TX[F[15]] = TR, TR = Z[6]; TR < Tv['length']; TR++) Ti[TR] = Tm(Tv[TR]);

                return function (TO) {
                  for (var Tr = Z[6]; Tr < Ti['length']; Tr++) {
                    var TK = Tm(TO + K[36] + Tv[Tr]),
                        TF = Ti[Tr];
                    if (TK[K[318]] !== TF[K[318]] || TK[F[9]] !== TF[F[9]]) return !0;
                  }

                  return !1;
                };
              }

              function T0() {
                var Tm = null,
                    Tv = null,
                    Ti = [];

                try {
                  Tv = ge[K[170]](K[445]), Tm = Tv[F[79]](K[261]) || Tv[F[79]](F[2]);
                } catch (TR) {}

                if (!Tm) return Ti;

                try {
                  Ti['push'](Tm[K[21]]());
                } catch (Ta) {}

                try {
                  Ti["push"](T1(Tm, Tv));
                } catch (TD) {}

                return Ti["join"](K[58]);
              }

              function T1(Tm, Tv) {
                try {
                  var Ti = K[442],
                      TR = K[246],
                      Ta = Tm[K[410]]();
                  Tm[K[399]](Tm[F[3]], Ta), Tm["bufferData"](Tm[F[3]], new Float32Array([Z[421], Z[477], Z[6], Z[417], Z[442], Z[6], Z[6], Z[457], Z[6]]), Tm[K[390]]), Ta['s'] = Z[10], Ta['u'] = Z[10];
                  var TD = Tm[K[386]](),
                      TX = Tm[K[415]](Tm[K[273]]);
                  Tm[K[429]](TX, Ti), Tm[K[347]](TX);
                  var TO = Tm[K[415]](Tm[F[43]]);
                  return Tm[K[429]](TO, TR), Tm[K[347]](TO), Tm[K[180]](TD, TX), Tm[K[180]](TD, TO), Tm[K[412]](TD), Tm[K[314]](TD), TD['A'] = Tm[K[459]](TD, K[210]), TD['w'] = Tm[K[428]](TD, K[395]), Tm[K[440]](TD['B']), Tm[F[61]](TD['A'], Ta['s'], Tm["FLOAT"], !Z[531], Z[6], Z[6]), Tm[F[80]](TD['w'], Z[531], Z[531]), Tm[K[141]](Tm[K[265]], Z[6], Ta['u']), gv(Tv[K[152]]());
                } catch (Tr) {
                  return K[330];
                }
              }

              function T2() {
                var Tm = ge[K[170]](K[158]),
                    Tv = [],
                    Ti = [F[16], K[276], K[334], K[321], K[194], F[60], K[388], F[37], K[280], K[1], K[335], K[157], K[164], K[244], K[51], F[11], K[254], K[245], K[159], K[349], F[25], K[452], K[414], F[17], K[34], K[350], K[439], K[153]];
                if (!window[F[48]]) return Tv['join'](K[0]);

                for (var TR = Z[6]; TR < Ti["length"]; TR++) try {
                  ge[K[264]][K[25]](Tm), Tm[K[453]]["color"] = Ti[TR], Tv["push"](Ti[TR]), Tv["push"](window[F[48]](Tm)["getPropertyValue"](K[402])), ge[K[264]][K[312]](Tm);
                } catch (Ta) {
                  Tv['push'](K[354]);
                }

                return Tv["join"](K[57]);
              }

              function T3() {
                try {
                  var Tm = ge[K[170]](K[445]),
                      Tv = Tm[F[79]](K[359]),
                      Ti = K[471];
                  return Tv[F[63]] = K[240], Tv[K[147]] = K[339], Tv[F[63]] = K[206], Tv[K[224]] = K[376], Tv[K[377]](Z[272], Z[531], Z[143], Z[57]), Tv[K[224]] = F[64], Tv["fillText"](Ti, Z[7], Z[47]), Tv[K[224]] = K[319], Tv["fillText"](Ti, Z[14], Z[51]), Tm[K[152]]();
                } catch (TR) {
                  return K[243];
                }
              }

              function T4() {
                try {
                  return window[K[360]] && Tp['j'] ? T6() : T5();
                } catch (Tm) {
                  return K[33];
                }
              }

              function T5() {
                if (!gd[K[4]]) return K[0];
                var Tm = [K[216], K[320], K[369], K[5], K[186], K[393], F[5], K[236], K[409], K[160], F[39], K[272], K[400], K[252], F[27], K[342], K[192], F[31], K[302], K[205], K[161], K[239], K[253], F[41], K[378], K[56], K[294], K[176], F[65], K[430], K[392], K[250], K[338], K[190], F[26], K[275], K[296], K[356], K[179], K[313], K[41], K[260], K[464], K[437], K[74], K[7], K[421], K[204], K[405], K[248], K[473], K[231], K[432], K[191], K[293], K[193], K[446], K[256], K[352], K[454], K[268], K[218], K[111], K[97], F[72], K[475], K[448], K[366], K[423], K[357], K[451], F[75], K[168], K[417], K[219], K[199], K[401], F[12], F[40], K[394], K[362], K[323], K[397], K[181], K[247], K[422], K[375], K[98], K[257], K[96], K[438], K[200], K[23], K[104], K[86], K[151], K[203], K[425], K[16], K[222], K[258], K[311], F[68], K[228], K[15], K[59], K[208], K[8], F[29], K[251], K[17], K[53], K[301], F[47], F[23], K[337], K[238], K[418], K[427]],
                    Tv = [],
                    Ti = {};
                return Tv['push'](T9(gd[K[4]], function (TR) {
                  Ti[TR["name"]] = Z[531];
                  var Ta = T9(TR, function (TD) {
                    return [TD["type"], TD[K[149]]]["join"](K[146]);
                  })["join"](K[36]);
                  return [TR["name"], TR[K[406]], Ta]["join"](K[455]);
                }, this)["join"](K[27])), Tv["push"](T9(Tm, function (TR) {
                  if (Ti[TR]) return K[0];
                  if (TR = gd[K[4]][TR], !TR) return K[0];
                  var Ta = T9(TR, function (TD) {
                    return [TD["type"], TD[K[149]]]['join'](K[146]);
                  })["join"](K[36]);
                  return [TR["name"], TR[K[406]], Ta]["join"](K[455]);
                }, this)["join"](K[58])), Tv["join"](K[58]);
              }

              function T6() {
                return window[K[360]] ? T9([K[242], K[298], K[322], K[304], F[45], K[201], K[449], K[223], F[1], K[178], K[255], K[102], K[165], K[237], K[367], K[255], K[104], K[151], K[317], K[420], K[355], F[8], K[332]], function (Tm) {
                  try {
                    return new window[K[360]](Tm), Tm;
                  } catch (Tv) {
                    return null;
                  }
                })["join"](K[58]) : K[0];
              }

              function T7() {
                try {
                  return !!window[K[345]];
                } catch (Tm) {
                  return !0;
                }
              }

              function T8() {
                try {
                  return !!window[K[404]];
                } catch (Tm) {
                  return !0;
                }
              }

              function T9(Tm, Tv, Ti) {
                var TR = [];
                return null == Tm ? TR : TB && Tm['map'] === TB ? Tm["map"](Tv, Ti) : (Tg(Tm, function (Ta, TD, TX) {
                  TR[TR['length']] = Tv["call"](Ti, Ta, TD, TX);
                }), TR);
              }

              function Tg(Tm, Tv, Ti) {
                if (null !== Tm) {
                  if (TT && Tm["forEach"] === TT) Tm["forEach"](Tv, Ti);else {
                    if (Tm["length"] === +Tm['length']) {
                      for (var TR = Z[6], Ta = Tm["length"]; TR < Ta && Tv["call"](Ti, Tm[TR], TR, Tm) !== {}; TR++);
                    } else {
                      for (TR in Tm) if (Tm["hasOwnProperty"](TR) && Tv["call"](Ti, Tm[TR], TR, Tm) === {}) break;
                    }
                  }
                }
              }

              var TT = Array["prototype"]['forEach'],
                  TB = Array["prototype"]["map"],
                  Tp = {
                'g': gv,
                'o': !0,
                'l': !0,
                'j': !0,
                'b': !0,
                'a': !0
              };
              ("undefined" == typeof gc ? "undefined" : m(gc)) == K[270] ? Tp['g'] = gc : (null != gc['b'] && void 0 != gc['b'] && (Tp['b'] = gc['b']), null != gc['a'] && void 0 != gc['a'] && (Tp['a'] = gc['a'])), this["get"] = function () {
                var Tm = [],
                    Tv = [];

                if (gf) {
                  Tm["push"](T7()), Tm["push"](T8()), Tm["push"](!!window[K[407]]), ge[K[264]] ? Tm['push'](m(ge[K[264]][K[306]])) : Tm['push']('undefined'), Tm["push"](m(window[K[444]])), Tm["push"](gd[K[196]]), Tm["push"](gd[F[49]]);
                  var Ti;
                  if (Ti = Tp['l']) try {
                    var TR = ge[K[170]](K[445]);
                    Ti = !(!TR[F[79]] || !TR[F[79]](K[359]));
                  } catch (Ta) {
                    Ti = !1;
                  }
                  if (Ti) try {
                    Tm["push"](T3()), Tp['b'] && Tm["push"](T0());
                  } catch (TD) {
                    Tm['push'](K[61]);
                  }
                  Tm["push"](T2()), Tp['a'] && Tv["push"](gJ()), Tv['push'](gd[F[0]]), Tv["push"](gd[K[154]]), Tv["push"](window[K[263]][K[365]]), Tp['o'] && (Ti = window[K[263]] ? [window[K[263]][K[318]], window[K[263]][F[9]]] : [Z[6], Z[6]], ('undefined' == typeof Ti ? "undefined" : m(Ti)) !== K[465] && Tv["push"](Ti["join"](K[140]))), Tv["push"](new Date()[K[130]]()), Tv["push"](gd[K[123]]), Tv["push"](T4());
                }

                return Ti = [], Tp['g'] ? (Ti["push"](Tp['g'](Tm["join"](F[46]))), Ti["push"](Tp['g'](Tv["join"](F[46])))) : (Ti["push"](gv(Tm["join"](F[46]))), Ti["push"](gv(Tv["join"](F[46])))), Ti;
              };
            }

            function gv(gc) {
              var gJ,
                  gy = Z[79],
                  T0 = gc['length'] & Z[10],
                  T1 = gc["length"] - T0,
                  T2 = gy;
              gy = Z[12];
              var T3 = Z[365];

              for (gJ = Z[6]; gJ < T1;) {
                var T4 = gc["charCodeAt"](gJ) & Z[290] | (gc["charCodeAt"](++gJ) & Z[290]) << Z[29] | (gc["charCodeAt"](++gJ) & Z[290]) << Z[49] | (gc["charCodeAt"](++gJ) & Z[290]) << Z[65];
                ++gJ, T4 = (T4 & Z[475]) * gy + (((T4 >>> Z[49]) * gy & Z[475]) << Z[49]) & Z[394], T4 = T4 << Z[47] | T4 >>> Z[51], T4 = (T4 & Z[475]) * T3 + (((T4 >>> Z[49]) * T3 & Z[475]) << Z[49]) & Z[394], T2 ^= T4, T2 = T2 << Z[41] | T2 >>> Z[55], T2 = (T2 & Z[475]) * Z[17] + (((T2 >>> Z[49]) * Z[17] & Z[475]) << Z[49]) & Z[394], T2 = (T2 & Z[475]) + Z[384] + (((T2 >>> Z[49]) + Z[425] & Z[475]) << Z[49]);
              }

              switch (T4 = Z[6], T0) {
                case Z[10]:
                  T4 ^= (gc["charCodeAt"](gJ + Z[7]) & Z[290]) << Z[49];

                case Z[7]:
                  T4 ^= (gc["charCodeAt"](gJ + Z[531]) & Z[290]) << Z[29];

                case Z[531]:
                  T4 ^= gc["charCodeAt"](gJ) & Z[290], T4 = (T4 & Z[475]) * gy + (((T4 >>> Z[49]) * gy & Z[475]) << Z[49]) & Z[394], T4 = T4 << Z[47] | T4 >>> Z[51], T4 = (T4 & Z[475]) * T3 + (((T4 >>> Z[49]) * T3 & Z[475]) << Z[49]) & Z[394], T2 ^= T4;
              }

              T2 ^= gc["length"], T2 ^= T2 >>> Z[49], T2 = (T2 & Z[475]) * Z[396] + (((T2 >>> Z[49]) * Z[396] & Z[475]) << Z[49]) & Z[394], T2 ^= T2 >>> Z[41], T2 = (T2 & Z[475]) * Z[339] + (((T2 >>> Z[49]) * Z[339] & Z[475]) << Z[49]) & Z[394], T2 ^= T2 >>> Z[49], gc = T2 >>> Z[6], T0 = [], T0["push"](gc);

              try {
                for (var T5, T6 = gc + K[0], T7 = Z[6], T8 = Z[6], T9 = Z[6]; T9 < T6["length"]; T9++) try {
                  var Tg = parseInt(T6["charAt"](T9) + K[0]);
                  T7 = Tg || Tg === Z[6] ? T7 + Tg : T7 + Z[531], T8++;
                } catch (TX) {
                  T7 += Z[531], T8++;
                }

                T8 = T8 == Z[6] ? Z[531] : T8, T5 = gi(T7 * Z[531] / T8, gj);

                for (var TT, TB = Math['floor'](T5 / Math["pow"](Z[34], gj - Z[531])), Tp = gc + K[0], Tm = Z[6], Tv = Z[6], Ti = Z[6], TR = Z[6], Ta = Z[6]; Ta < Tp["length"]; Ta++) try {
                  var TD = parseInt(Tp["charAt"](Ta) + K[0]);
                  TD || TD === Z[6] ? TD < TB ? (Tv++, Tm += TD) : (TR++, Ti += TD) : (TR++, Ti += TB);
                } catch (TO) {
                  TR++, Ti += TB;
                }

                TR = TR == Z[6] ? Z[531] : TR, Tv = Tv == Z[6] ? Z[531] : Tv, TT = gi(Ti * Z[531] / TR - Tm * Z[531] / Tv, gb), T0["push"](gR(T5, !0, gj, K[43])), T0["push"](gR(TT, !0, gb, K[43]));
              } catch (Tr) {
                T0 = [], T0["push"](gc), T0["push"](ga(gj, K[37])["join"](K[0])), T0['push'](ga(gb, K[37])["join"](K[0]));
              }

              return T0["join"](K[0]);
            }

            function gi(gc, gJ) {
              if (gc < Z[6] || gc >= Z[34]) throw Error(K[32]);
              gJ = ga(gJ, K[43]), gc = K[0] + gc;

              for (var gy = Z[6], T0 = Z[6]; gy < gJ["length"] && T0 < gc["length"]; T0++) gc["charAt"](T0) != K[40] && (gJ[gy++] = gc["charAt"](T0));

              return parseInt(gJ["join"](K[0]));
            }

            function gR(gc, gJ, gy, T0) {
              if (gc = K[0] + gc, gc["length"] > gy) throw Error(K[89]);
              if (gc["length"] == gy) return gc;
              var T1 = [];
              gJ || T1["push"](gc);

              for (var T2 = gc['length']; T2 < gy; T2++) T1["push"](T0);

              return gJ && T1["push"](gc), T1["join"](K[0]);
            }

            function ga(gc, gJ) {
              if (gc <= Z[6]) return [Z[6]];

              for (var gy = [], T0 = Z[6]; T0 < gc; T0++) gy["push"](gJ);

              return gy;
            }

            function gD(gc) {
              return null == gc || void 0 == gc;
            }

            function gX(gc, gJ, gy) {
              this['h'] = gc, this['c'] = gJ, gD(gy) ? this['i'] = !0 : this['i'] = gy;
            }

            function gO(gc) {
              if (gD(gc) || gD(gc['h']) || gD(gc['c'])) return !1;

              try {
                if (gD(window[gc['h']])) return !1;
              } catch (gJ) {
                return !1;
              }

              return !0;
            }

            function gr(gc, gJ) {
              if (gD(gc)) return K[0];

              for (var gy = Z[6]; gy < gc["length"]; gy++) {
                var T0 = gc[gy];
                if (!gD(T0) && T0['h'] == gJ) return T0;
              }
            }

            function gK() {
              Ta: {
                var gc = gh;
                if (!gD(gc)) for (var gJ = Z[6]; gJ < gc['length']; gJ++) {
                  var gy = gc[gJ];

                  if (gy['i'] && !gO(gy)) {
                    gc = gy;
                    break Ta;
                  }
                }
                gc = null;
              }

              if (gD(gc)) {
                try {
                  var T0 = window["parseFloat"](K[183]) === Z[374] && window["isNaN"](window["parseFloat"](K[167]));
                } catch (T9) {
                  T0 = !1;
                }

                if (T0) {
                  try {
                    var T1 = window['parseInt'](K[329]) === Z[264] && window["isNaN"](window["parseInt"](K[167]));
                  } catch (Tg) {
                    T1 = !1;
                  }

                  if (T1) {
                    try {
                      var T2 = window["decodeURI"](K[213]) === K[26];
                    } catch (TT) {
                      T2 = !1;
                    }

                    if (T2) {
                      try {
                        var T3 = window["decodeURIComponent"](K[214]) === K[30];
                      } catch (TB) {
                        T3 = !1;
                      }

                      if (T3) {
                        try {
                          var T4 = window["encodeURI"](K[26]) === K[213];
                        } catch (Tp) {
                          T4 = !1;
                        }

                        if (T4) {
                          try {
                            var T5 = window['encodeURIComponent'](K[30]) === K[214];
                          } catch (Tm) {
                            T5 = !1;
                          }

                          if (T5) {
                            try {
                              var T6 = window['escape'](K[30]) === K[214];
                            } catch (Tv) {
                              T6 = !1;
                            }

                            if (T6) {
                              try {
                                var T7 = window["unescape"](K[214]) === K[30];
                              } catch (Ti) {
                                T7 = !1;
                              }

                              if (T7) {
                                try {
                                  var T8 = window["eval"](K[309]) === Z[264];
                                } catch (TR) {
                                  T8 = !1;
                                }

                                T0 = T8 ? null : gr(gh, K[174]);
                              } else T0 = gr(gh, F[67]);
                            } else T0 = gr(gh, K[348]);
                          } else T0 = gr(gh, K[396]);
                        } else T0 = gr(gh, K[382]);
                      } else T0 = gr(gh, F[74]);
                    } else T0 = gr(gh, K[326]);
                  } else T0 = gr(gh, K[424]);
                } else T0 = gr(gh, K[456]);
              } else T0 = gc;

              return T0;
            }

            function gF() {
              var gc = gK();
              if (!gD(gc)) return gc['c'];

              try {
                gc = gD(window[K[171]]) || gD(window[K[171]][K[340]]) ? null : gr(gh, K[316]);
              } catch (gJ) {
                gc = null;
              }

              if (!gD(gc)) return gc['c'];

              try {
                gc = gD(window[K[207]]) || gD(window[K[207]][K[188]]) ? null : gr(gh, K[271]);
              } catch (gy) {
                gc = null;
              }

              return gD(gc) ? null : gc['c'];
            }

            function gZ(gc) {
              for (var gJ = [], gy = Z[6]; gy < gc; gy++) {
                var T0 = Math["random"]() * go;
                T0 = Math["floor"](T0), gJ["push"](gx['charAt'](T0));
              }

              return gJ["join"](K[0]);
            }

            function gH(gc) {
              for (var gJ = (ge[K[212]] || K[0])["split"](K[458]), gy = Z[6]; gy < gJ["length"]; gy++) {
                var T0 = gJ[gy]["indexOf"](K[60]);

                if (T0 >= Z[6]) {
                  var T1 = gJ[gy]["substring"](T0 + Z[531], gJ[gy]["length"]);
                  if (gJ[gy]['substring'](Z[6], T0) == gc) return window["decodeURIComponent"](T1);
                }
              }

              return null;
            }

            function gS(gc) {
              var gJ = [K[137], K[185], K[136], K[110], K[162], K[169], K[384]],
                  gy = K[0];
              if (null == gc || void 0 == gc) return gc;

              if (("undefined" == typeof gc ? 'undefined' : m(gc)) == [K[297], K[227], K[125]]["join"](K[0])) {
                gy += K[144];

                for (var T0 = Z[6]; T0 < gJ["length"]; T0++) if (gc["hasOwnProperty"](gJ[T0])) {
                  var T1 = K[31] + gJ[T0] + K[269],
                      T2 = K[0] + gc[gJ[T0]];
                  T2 = null == T2 || void 0 == T2 ? T2 : T2["replace"](/'/g, K[463])["replace"](/"/g, K[26]), gy += T1 + T2 + K[195];
                }

                return gy["charAt"](gy["length"] - Z[531]) == K[36] && (gy = gy["substring"](Z[6], gy["length"] - Z[531])), gy += K[145];
              }

              return null;
            }

            function gz(gc, gJ, gy, T0) {
              var T1 = [];
              T1['push'](gc + K[60] + encodeURIComponent(gJ)), gy && (gc = new Date(T0)[K[220]](), T1["push"](K[458]), T1['push'](K[175]), T1["push"](K[310]), T1['push'](K[331]), T1["push"](K[325]), T1["push"](gc)), T1["push"](K[458]), T1["push"](K[307]), T1['push'](K[221]), null != gE && void 0 != gE && gE != K[0] && (T1['push'](K[458]), T1['push'](K[156]), T1["push"](K[241]), T1["push"](K[267]), T1['push'](gE)), ge[K[212]] = T1["join"](K[0]);
            }

            function gl(gc, gJ) {
              for (var gy = [], T0 = Z[6]; T0 < gJ; T0++) gy["push"](gc);

              return gy["join"](K[0]);
            }

            function gI(gc) {
              return null == gc || void 0 == gc || gc == K[0] ? null : (gc = gc["split"](K[57]), gc["length"] < Z[7] || !/^[0-9]+$/gi["test"](gc[1]) ? null : parseInt(gc[1]));
            }

            function gL() {
              var gc = gH(gY);
              return null != gc && void 0 != gc && gc != K[0] || (gc = window[gw]), gc;
            }

            function gk() {
              var gc = gL(gY);
              return null == gc || void 0 == gc || gc == K[0] ? Z[6] : (gc = gI(gc), null == gc ? Z[6] : gc - (gM - gC) - new window[F[73]]()[K[182]]());
            }

            function gN() {
              if (!(null == gQ || void 0 == gQ || gQ["length"] <= Z[6])) for (var gc = Z[6]; gc < gQ["length"]; gc++) {
                var gJ = gQ[gc];

                if ((null != gE && void 0 != gE && gE != K[0] || null != gJ && void 0 != gJ && gJ != K[0]) && gE != gJ) {
                  var gy = gY,
                      T0 = new window[F[73]]();
                  T0[K[24]](T0[K[182]]() - Z[317]), window[K[336]][K[212]] = null == gJ || void 0 == gJ || gJ == K[0] ? gy + K[150] + T0[K[220]]() : gy + K[379] + gJ + F[24] + T0[K[220]]();
                }
              }
            }

            function gP() {
              gN(), window[gw] = null;
              var gc = !0,
                  gJ = {
                'v': K[233]
              },
                  gy = gF();
              gy && (gJ[K[384]] = gy), gy = null, gJ[K[110]] = gq;
              var T0 = new window[F[73]]()[K[182]]() + gM,
                  T1 = T0 + Z[299] * Z[139] * Z[139] * Z[65] * Z[77];
              gJ[K[136]] = gZ(Z[10]) + T0 + gZ(Z[10]);

              try {
                var T2 = new gm({
                  'b': !1,
                  'a': !1
                })["get"]();
                null != T2 && void 0 != T2 && T2["length"] > Z[6] ? gJ[K[185]] = T2['join'](K[36]) : (gJ[K[185]] = gl(K[43], Z[34]), gJ[K[162]] = K[44], gc = !1);
              } catch (TG) {
                gJ[K[185]] = gl(K[43], Z[34]), gJ[K[162]] = K[44], gc = !1;
              }

              try {
                var T3 = gy = gS(gJ);
                if (gJ = gW, null == gJ || void 0 == gJ) throw Error(K[122]);
                null != T3 && void 0 != T3 || (T3 = K[0]), T2 = T3;
                var T4 = g2(null == T3 ? [] : g7(T3)),
                    T5 = g7(T2 + T4),
                    T6 = g7(gJ);
                null == T5 && (T5 = []), T4 = [];

                for (var T7 = Z[6]; T7 < gU; T7++) {
                  var T8 = Math["random"]() * Z[292];
                  T8 = Math["floor"](T8), T4[T7] = gp(T8);
                }

                if (T6 = g1(T6), T6 = gg(T6, g1(T4)), T7 = T6 = g1(T6), T8 = T5, null == T8 || void 0 == T8 || T8["length"] == Z[6]) var T9 = g4(gn);else {
                  var Tg = T8['length'],
                      TT = Tg % gn <= gn - gu ? gn - Tg % gn - gu : gn * Z[7] - Tg % gn - gu;
                  T5 = [], g5(T8, Z[6], T5, Z[6], Tg);

                  for (var TB = Z[6]; TB < TT; TB++) T5[Tg + TB] = Z[6];

                  var Tp = g6(Tg);
                  g5(Tp, Z[6], T5, Tg + TT, gu), T9 = T5;
                }
                if (Tg = T9, null == Tg || Tg["length"] % gn != Z[6]) throw Error(K[132]);
                T9 = [];

                for (var Tm = Z[6], Tv = Tg['length'] / gn, Ti = Z[6]; Ti < Tv; Ti++) {
                  T9[Ti] = [];

                  for (var TR = Z[6]; TR < gn; TR++) T9[Ti][TR] = Tg[Tm++];
                }

                Tm = [], g5(T4, Z[6], Tm, Z[6], gU);

                for (var Ta = T9["length"], TD = Z[6]; TD < Ta; TD++) {
                  var TX = T9[TD];
                  if (null == TX) var TO = null;else {
                    var Tr = gp(Z[89]);
                    Tv = [];

                    for (var TK = TX["length"], TF = Z[6]; TF < TK; TF++) Tv["push"](gT(TX[TF], Tr));

                    TO = Tv;
                  }
                  if (Tv = TO, null == Tv) var TZ = null;else {
                    var TH = gp(Z[88]);
                    Ti = [];

                    for (var TS = Tv["length"], Tz = Z[6]; Tz < TS; Tz++) Ti['push'](gT(Tv[Tz], TH--));

                    TZ = Ti;
                  }
                  if (Tv = TZ, null == Tv) var Tl = null;else {
                    var TI = gp(Z[107]);
                    Ti = [];

                    for (var TL = Tv["length"], Tk = Z[6]; Tk < TL; Tk++) Ti["push"](gB(Tv[Tk], TI++));

                    Tl = Ti;
                  }
                  var TN = gg(Tl, T6);
                  if (Tv = TN, Ti = T7, null == Tv) var TP = null;else {
                    if (null == Ti) TP = Tv;else {
                      TR = [];

                      for (var Th = Ti["length"], Tf = Z[6], Tq = Tv["length"]; Tf < Tq; Tf++) TR[Tf] = gp(Tv[Tf] + Ti[Tf % Th]);

                      TP = TR;
                    }
                  }
                  TN = gg(TP, T7);
                  var Te = g0(TN);
                  Te = g0(Te), g5(Te, Z[6], Tm, TD * gn + gU, gn), T7 = Te;
                }

                if (null == Tm || void 0 == Tm) var Td = null;else {
                  if (Tm["length"] == Z[6]) Td = K[0];else {
                    var Tj = Z[10];

                    try {
                      Ta = [];

                      for (var Tb = Z[6]; Tb < Tm['length'];) {
                        if (!(Tb + Tj <= Tm["length"])) {
                          Ta["push"](g3(Tm, Tb, Tm["length"] - Tb));
                          break;
                        }

                        Ta['push'](g3(Tm, Tb, Tj)), Tb += Tj;
                      }

                      Td = Ta["join"](K[0]);
                    } catch (TA) {
                      throw Error(K[113]);
                    }
                  }
                }
                gy = Td;
              } catch (TV) {
                gy = gS({
                  'ec': K[45],
                  'em': TV[K[197]]
                }), gc = !1;
              }

              gy = gy + K[57] + T0, gz(gY, gy, gc, T1), gc = gY, Td = gy, Tj = gH(gc), null !== Tj && void 0 !== Tj && Tj !== K[0] || gz(gc, Td, !1), window[gw] = gy, window[K[128]] && window[K[128]](gP, gC);
            }

            gX["prototype"] = {
              'toString': function () {
                return K[460] + this['h'] + K[166] + this['c'] + F[7] + this['i'] + K[145];
              }
            };
            var gh = [new gX(K[433], K[13]), new gX(K[336], K[14]), new gX(K[372], K[11]), new gX(K[431], K[12]), new gX(F[33], K[10]), new gX(K[263], K[9]), new gX(K[2], K[20]), new gX(K[240], K[22]), new gX(F[10], K[6]), new gX(K[456], F[58]), new gX(K[424], F[56]), new gX(K[326], F[57]), new gX(F[74], F[53]), new gX(K[382], F[55]), new gX(K[396], F[50]), new gX(K[348], F[52]), new gX(F[67], F[59]), new gX(K[174], F[62]), new gX(K[259], F[21], !1), new gX(K[300], F[22], !1), new gX(K[171], F[18], !1), new gX(K[316], F[19], !1), new gX(K[271], F[38], !1)],
                gf = !gK(),
                gq = window && window[K[431]] && window[K[431]]["host"] || K[358],
                ge = window[K[336]],
                gd = window[K[372]],
                gj = Z[7],
                gb = Z[7],
                gG = [K[43], K[44], K[45], K[46], K[47], K[49], K[50], K[52], K[54], K[55], K[99], K[101], K[103], K[105], K[107], K[108]],
                gA = [Z[6], Z[367], Z[373], Z[511], Z[438], Z[306], Z[484], Z[333], Z[451], Z[532], Z[300], Z[450], Z[485], Z[453], Z[404], Z[31], Z[444], Z[353], Z[523], Z[391], Z[428], Z[284], Z[356], Z[500], Z[480], Z[482], Z[465], Z[323], Z[529], Z[401], Z[288], Z[416], Z[463], Z[20], Z[359], Z[492], Z[315], Z[343], Z[536], Z[380], Z[409], Z[430], Z[165], Z[432], Z[296], Z[490], Z[458], Z[326], Z[497], Z[321], Z[471], Z[345], Z[348], Z[389], Z[369], Z[518], Z[514], Z[448], Z[412], Z[25], Z[397], Z[509], Z[309], Z[435], Z[460], Z[427], Z[38], Z[406], Z[538], Z[495], Z[452], Z[302], Z[310], Z[247], Z[335], Z[487], Z[370], Z[385], Z[512], Z[375], Z[405], Z[527], Z[418], Z[289], Z[486], Z[476], Z[325], Z[467], Z[291], Z[422], Z[502], Z[357], Z[358], Z[440], Z[393], Z[524], Z[493], Z[286], Z[327], Z[459], Z[433], Z[402], Z[434], Z[181], Z[344], Z[307], Z[381], Z[537], Z[24], Z[455], Z[494], Z[360], Z[510], Z[387], Z[436], Z[311], Z[449], Z[506], Z[28], Z[413], Z[392], Z[340], Z[519], Z[371], Z[324], Z[488], Z[346], Z[472], Z[470], Z[322], Z[441], Z[479], Z[287], Z[420], Z[331], Z[408], Z[526], Z[390], Z[505], Z[352], Z[355], Z[504], Z[468], Z[294], Z[304], Z[447], Z[130], Z[530], Z[403], Z[44], Z[298], Z[462], Z[377], Z[508], Z[378], Z[364], Z[483], Z[338], Z[330], Z[314], Z[415], Z[19], Z[517], Z[445], Z[308], Z[439], Z[379], Z[515], Z[474], Z[342], Z[499], Z[319], Z[368], Z[522], Z[332], Z[398], Z[274], Z[431], Z[410], Z[426], Z[456], Z[329], Z[121], Z[498], Z[362], Z[491], Z[464], Z[13], Z[535], Z[386], Z[297], Z[350], Z[503], Z[354], Z[293], Z[337], Z[388], Z[525], Z[351], Z[318], Z[419], Z[285], Z[407], Z[372], Z[320], Z[469], Z[478], Z[23], Z[336], Z[481], Z[312], Z[349], Z[507], Z[376], Z[363], Z[399], Z[42], Z[400], Z[461], Z[313], Z[446], Z[303], Z[528], Z[295], Z[521], Z[366], Z[395], Z[334], Z[341], Z[473], Z[316], Z[501], Z[437], Z[305], Z[513], Z[382], Z[15], Z[414], Z[443], Z[520], Z[383], Z[534], Z[347], Z[301], Z[489], Z[361], Z[8], Z[466], Z[328], Z[454], Z[496], Z[148], Z[429], Z[223], Z[423], Z[411]],
                gV = [Z[32], Z[190], Z[117], Z[135], Z[248], Z[224], Z[131], Z[272], Z[206], Z[48], Z[47], Z[7], Z[164], Z[214], Z[173], Z[93], Z[132], Z[114], Z[174], Z[69], Z[256], Z[139], Z[198], Z[33], Z[231], Z[39], Z[156], Z[222], Z[144], Z[101], Z[53], Z[73], Z[265], Z[36], Z[81], Z[105], Z[175], Z[207], Z[89], Z[215], Z[14], Z[136], Z[216], Z[191], Z[217], Z[199], Z[208], Z[232], Z[43], Z[200], Z[176], Z[201], Z[257], Z[149], Z[41], Z[18], Z[75], Z[258], Z[16], Z[182], Z[71], Z[97], Z[137], Z[102], Z[192], Z[113], Z[166], Z[239], Z[147], Z[70], Z[150], Z[82], Z[249], Z[6], Z[90], Z[225], Z[202], Z[115], Z[273], Z[193], Z[98], Z[233], Z[9], Z[266], Z[103], Z[250], Z[209], Z[183], Z[80], Z[151], Z[226], Z[45], Z[152], Z[116], Z[153], Z[251], Z[227], Z[194], Z[56], Z[234], Z[154], Z[167], Z[85], Z[177], Z[106], Z[72], Z[240], Z[241], Z[109], Z[140], Z[195], Z[104], Z[126], Z[67], Z[155], Z[86], Z[107], Z[122], Z[252], Z[91], Z[168], Z[203], Z[184], Z[118], Z[83], Z[94], Z[185], Z[186], Z[196], Z[242], Z[40], Z[138], Z[228], Z[178], Z[110], Z[275], Z[87], Z[531], Z[218], Z[46], Z[133], Z[243], Z[235], Z[210], Z[123], Z[37], Z[253], Z[57], Z[236], Z[169], Z[143], Z[157], Z[95], Z[127], Z[259], Z[276], Z[254], Z[264], Z[34], Z[179], Z[267], Z[30], Z[170], Z[59], Z[211], Z[51], Z[141], Z[60], Z[237], Z[277], Z[54], Z[278], Z[52], Z[124], Z[35], Z[180], Z[66], Z[61], Z[268], Z[212], Z[68], Z[219], Z[244], Z[62], Z[63], Z[158], Z[279], Z[281], Z[111], Z[96], Z[533], Z[10], Z[58], Z[229], Z[159], Z[230], Z[17], Z[260], Z[269], Z[108], Z[119], Z[92], Z[99], Z[65], Z[187], Z[77], Z[188], Z[145], Z[100], Z[213], Z[204], Z[22], Z[125], Z[280], Z[146], Z[74], Z[245], Z[55], Z[120], Z[246], Z[160], Z[161], Z[76], Z[171], Z[220], Z[205], Z[142], Z[162], Z[163], Z[261], Z[11], Z[189], Z[197], Z[26], Z[84], Z[128], Z[79], Z[270], Z[271], Z[238], Z[255], Z[112], Z[78], Z[262], Z[129], Z[64], Z[263], Z[50], Z[27], Z[21], Z[88], Z[49], Z[221], Z[134], Z[172], Z[29]],
                gn = Z[155],
                gt = Z[155],
                gu = Z[14],
                gU = Z[14],
                gW = F[35],
                gY = K[18],
                gx = K[281],
                go = gx['length'],
                gM = Z[424],
                gC = Z[516],
                gs = window && window[K[431]] && window[K[431]][K[315]] || K[462],
                gE = K[0];

            gE = function (gc, gJ) {
              if (null == gc || void 0 == gc || gc == K[0] || null == gJ || void 0 == gJ || gJ["length"] <= Z[6]) return null;
              gJ = gJ["split"](K[58]);

              for (var gy = Z[6]; gy < gJ["length"]; gy++) {
                var T0 = new RegExp(gJ[gy]['replace'](/\./g, K[467]) + K[27]);
                if (null != gc[F[66]](T0) || null != (K[40] + gc)[F[66]](T0)) return gJ[gy];
              }

              return null;
            }(gs, gE);

            var gw = gY["replace"](/[^a-zA-Z0-9$]/g, K[0])["toLowerCase"](),
                gQ = function (gc) {
              var gJ = [];
              if (!gc) return gJ;
              gc = gc['split'](K[40]);

              for (var gy = K[0], T0 = Z[6]; T0 < gc["length"]; T0++) T0 < gc["length"] - Z[531] && (gy = K[40] + gc[gc['length'] - Z[531] - T0] + gy, gJ["push"](gy));

              return gJ;
            }(gs);

            gQ["push"](null), gQ["push"](K[40] + gs), function (gc) {
              for (var gJ = Z[6], gy = (ge[K[212]] || K[0])["split"](K[458]), T0 = Z[6]; T0 < gy['length']; T0++) {
                var T1 = gy[T0]['indexOf'](K[60]);
                T1 >= Z[6] && gy[T0]["substring"](Z[6], T1) == gc && (gJ += Z[531]);
              }

              return gJ;
            }(gY) > Z[531] && gN(), function () {
              var gc = gL();
              return null == gc || void 0 == gc || gc == K[0] ? gc = !1 : (gc = gI(gc), gc = !(null == gc || isNaN(gc) || gc - new window[F[73]]()[K[182]]() <= gM - gC)), gc;
            }() ? (window[gw] = gL(), gs = gk(), window[K[128]] && window[K[128]](gP, gs)) : gP();
          }();
        }();
      }();
    }();
  }, function (B, p) {
    var m = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (v) {
      return typeof v;
    } : function (v) {
      return v && "function" == typeof Symbol && v["constructor"] === Symbol && v !== Symbol['prototype'] ? "symbol" : typeof v;
    };
    'object' !== ('undefined' == typeof JSON ? "undefined" : m(JSON)) && (JSON = {}), function () {
      'use strict';

      function v(l) {
        return l < 10 ? '0' + l : l;
      }

      function i() {
        return this["valueOf"]();
      }

      function R(l) {
        return K["lastIndex"] = 0, K["test"](l) ? "\"" + l['replace'](K, function (I) {
          var L = S[I];
          return "string" == typeof L ? L : "\\u" + ("0000" + I["charCodeAt"](0)["toString"](16))["slice"](-4);
        }) + "\"" : "\"" + l + "\"";
      }

      function a(l, I) {
        var L,
            k,
            N,
            P,
            h,
            q = Z,
            j = I[l];

        switch (j && "object" === ("undefined" == typeof j ? "undefined" : m(j)) && "function" == typeof j["toJSON"] && (j = j["toJSON"](l)), "function" == typeof z && (j = z["call"](I, l, j)), 'undefined' == typeof j ? "undefined" : m(j)) {
          case "string":
            return R(j);

          case "number":
            return isFinite(j) ? String(j) : 'null';

          case 'boolean':
          case "null":
            return String(j);

          case "object":
            if (!j) return "null";

            if (Z += H, h = [], "[object Array]" === Object["prototype"]['toString']["apply"](j)) {
              for (P = j["length"], L = 0; L < P; L += 1) h[L] = a(L, j) || "null";

              return N = 0 === h["length"] ? '[]' : Z ? "[\n" + Z + h["join"](",\n" + Z) + "\n" + q + ']' : '[' + h["join"](',') + ']', Z = q, N;
            }

            if (z && "object" === ("undefined" == typeof z ? "undefined" : m(z))) {
              for (P = z["length"], L = 0; L < P; L += 1) 'string' == typeof z[L] && (k = z[L], N = a(k, j), N && h["push"](R(k) + (Z ? ": " : ':') + N));
            } else {
              for (k in j) Object['prototype']['hasOwnProperty']["call"](j, k) && (N = a(k, j), N && h["push"](R(k) + (Z ? ": " : ':') + N));
            }

            return N = 0 === h["length"] ? '{}' : Z ? "{\n" + Z + h["join"](",\n" + Z) + "\n" + q + '}' : '{' + h['join'](',') + '}', Z = q, N;
        }
      }

      var D = /^[\],:{}\s]*$/,
          X = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          O = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          r = /(?:^|:|,)(?:\s*\[)+/g,
          K = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          F = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      'function' != typeof Date["prototype"]["toJSON"] && (Date["prototype"]["toJSON"] = function () {
        return isFinite(this['valueOf']()) ? this["getUTCFullYear"]() + '-' + v(this["getUTCMonth"]() + 1) + '-' + v(this["getUTCDate"]()) + 'T' + v(this["getUTCHours"]()) + ':' + v(this["getUTCMinutes"]()) + ':' + v(this["getUTCSeconds"]()) + 'Z' : null;
      }, Boolean["prototype"]['toJSON'] = i, Number["prototype"]['toJSON'] = i, String["prototype"]["toJSON"] = i);
      var Z, H, S, z;
      'function' != typeof JSON["stringify"] && (S = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\"": "\\\"",
        "\\": "\\\\"
      }, JSON['stringify'] = function (l, I, L) {
        var k;

        if (Z = '', H = '', 'number' == typeof L) {
          for (k = 0; k < L; k += 1) H += " ";
        } else "string" == typeof L && (H = L);

        if (z = I, I && "function" != typeof I && ("object" !== ("undefined" == typeof I ? 'undefined' : m(I)) || "number" != typeof I["length"])) throw new Error('JSON.stringify');
        return a('', {
          '': l
        });
      }), "function" != typeof JSON["parse"] && (JSON["parse"] = function (l, I) {
        function L(N, P) {
          var h,
              q,
              d = N[P];

          if (d && "object" === ("undefined" == typeof d ? "undefined" : m(d))) {
            for (h in d) Object["prototype"]["hasOwnProperty"]["call"](d, h) && (q = L(d, h), void 0 !== q ? d[h] = q : delete d[h]);
          }

          return I["call"](N, P, d);
        }

        var k;
        if (l = String(l), F["lastIndex"] = 0, F["test"](l) && (l = l["replace"](F, function (N) {
          return "\\u" + ("0000" + N['charCodeAt'](0)["toString"](16))["slice"](-4);
        })), D['test'](l["replace"](X, '@')["replace"](O, ']')["replace"](r, ''))) return k = eval('(' + l + ')'), "function" == typeof I ? L({
          '': k
        }, '') : k;
        throw new SyntaxError("JSON.parse");
      });
    }();
  }, function (B, m) {
    function R(G) {
      this["mode"] = I["MODE_8BIT_BYTE"], this["data"] = G, this["parsedData"] = [];

      for (var A = 0, V = this['data']["length"]; A < V; A++) {
        var U = [],
            W = this["data"]["charCodeAt"](A);
        W > 65536 ? (U[0] = 240 | (1835008 & W) >>> 18, U[1] = 128 | (258048 & W) >>> 12, U[2] = 128 | (4032 & W) >>> 6, U[3] = 128 | 63 & W) : W > 2048 ? (U[0] = 224 | (61440 & W) >>> 12, U[1] = 128 | (4032 & W) >>> 6, U[2] = 128 | 63 & W) : W > 128 ? (U[0] = 192 | (1984 & W) >>> 6, U[1] = 128 | 63 & W) : U[0] = W, this["parsedData"]["push"](U);
      }

      this["parsedData"] = Array['prototype']["concat"]["apply"]([], this['parsedData']), this["parsedData"]['length'] != this["data"]["length"] && (this["parsedData"]["unshift"](191), this["parsedData"]['unshift'](187), this["parsedData"]["unshift"](239));
    }

    function D(G, A) {
      this['typeNumber'] = G, this["errorCorrectLevel"] = A, this["modules"] = null, this["moduleCount"] = 0, this["dataCache"] = null, this['dataList'] = [];
    }

    function X(G, A) {
      if (void 0 == G["length"]) throw new Error(G["length"] + '/' + A);

      for (var V = 0; V < G['length'] && 0 == G[V];) V++;

      this['num'] = new Array(G["length"] - V + A);

      for (var U = 0; U < G['length'] - V; U++) this['num'][U] = G[U + V];
    }

    function O(G, A) {
      this["totalCount"] = G, this['dataCount'] = A;
    }

    function K() {
      this['buffer'] = [], this["length"] = 0;
    }

    function F() {
      return "undefined" != typeof CanvasRenderingContext2D;
    }

    function Z() {
      var G = !1,
          A = navigator['userAgent'];

      if (/android/i["test"](A)) {
        G = !0;
        var V = A['toString']()["match"](/android ([0-9]\.[0-9])/i);
        V && V[1] && (G = parseFloat(V[1]));
      }

      return G;
    }

    function H(G, A) {
      for (var V = 1, U = S(G), W = 0, x = j["length"]; W <= x; W++) {
        var M = 0;

        switch (A) {
          case L['L']:
            M = j[W][0];
            break;

          case L['M']:
            M = j[W][1];
            break;

          case L['Q']:
            M = j[W][2];
            break;

          case L['H']:
            M = j[W][3];
        }

        if (U <= M) break;
        V++;
      }

      if (V > j["length"]) throw new Error("Too long data");
      return V;
    }

    function S(G) {
      var A = encodeURI(G)["toString"]()["replace"](/\%[0-9a-fA-F]{2}/g, 'a');
      return A['length'] + (A['length'] != G ? 3 : 0);
    }

    var z;
    R['prototype'] = {
      'getLength': function (G) {
        return this["parsedData"]["length"];
      },
      'write': function (G) {
        for (var A = 0, V = this["parsedData"]["length"]; A < V; A++) G['put'](this["parsedData"][A], 8);
      }
    }, D["prototype"] = {
      'addData': function (G) {
        var A = new R(G);
        this['dataList']['push'](A), this["dataCache"] = null;
      },
      'isDark': function (G, A) {
        if (G < 0 || this['moduleCount'] <= G || A < 0 || this["moduleCount"] <= A) throw new Error(G + ',' + A);
        return this["modules"][G][A];
      },
      'getModuleCount': function () {
        return this["moduleCount"];
      },
      'make': function () {
        this["makeImpl"](!1, this["getBestMaskPattern"]());
      },
      'makeImpl': function (G, A) {
        this["moduleCount"] = 4 * this["typeNumber"] + 17, this["modules"] = new Array(this["moduleCount"]);

        for (var V = 0; V < this["moduleCount"]; V++) {
          this["modules"][V] = new Array(this["moduleCount"]);

          for (var U = 0; U < this["moduleCount"]; U++) this["modules"][V][U] = null;
        }

        this["setupPositionProbePattern"](0, 0), this["setupPositionProbePattern"](this["moduleCount"] - 7, 0), this["setupPositionProbePattern"](0, this["moduleCount"] - 7), this["setupPositionAdjustPattern"](), this["setupTimingPattern"](), this['setupTypeInfo'](G, A), this["typeNumber"] >= 7 && this["setupTypeNumber"](G), null == this["dataCache"] && (this['dataCache'] = D["createData"](this['typeNumber'], this["errorCorrectLevel"], this["dataList"])), this["mapData"](this["dataCache"], A);
      },
      'setupPositionProbePattern': function (G, A) {
        for (var V = -1; V <= 7; V++) if (!(G + V <= -1 || this['moduleCount'] <= G + V)) {
          for (var U = -1; U <= 7; U++) A + U <= -1 || this['moduleCount'] <= A + U || (0 <= V && V <= 6 && (0 == U || 6 == U) || 0 <= U && U <= 6 && (0 == V || 6 == V) || 2 <= V && V <= 4 && 2 <= U && U <= 4 ? this["modules"][G + V][A + U] = !0 : this['modules'][G + V][A + U] = !1);
        }
      },
      'getBestMaskPattern': function () {
        for (var G = 0, A = 0, V = 0; V < 8; V++) {
          this["makeImpl"](!0, V);
          var U = N["getLostPoint"](this);
          (0 == V || G > U) && (G = U, A = V);
        }

        return A;
      },
      'createMovieClip': function (G, A, V) {
        var U = G["createEmptyMovieClip"](A, V),
            W = 1;
        this['make']();

        for (var x = 0; x < this["modules"]["length"]; x++) for (var M = x * W, C = 0; C < this['modules'][x]["length"]; C++) {
          var E = C * W,
              w = this["modules"][x][C];
          w && (U["beginFill"](0, 100), U["moveTo"](E, M), U['lineTo'](E + W, M), U["lineTo"](E + W, M + W), U['lineTo'](E, M + W), U['endFill']());
        }

        return U;
      },
      'setupTimingPattern': function () {
        for (var G = 8; G < this["moduleCount"] - 8; G++) null == this["modules"][G][6] && (this["modules"][G][6] = G % 2 == 0);

        for (var A = 8; A < this["moduleCount"] - 8; A++) null == this["modules"][6][A] && (this["modules"][6][A] = A % 2 == 0);
      },
      'setupPositionAdjustPattern': function () {
        for (var G = N['getPatternPosition'](this["typeNumber"]), A = 0; A < G["length"]; A++) for (var V = 0; V < G["length"]; V++) {
          var U = G[A],
              W = G[V];

          if (null == this['modules'][U][W]) {
            for (var x = -2; x <= 2; x++) for (var M = -2; M <= 2; M++) x == -2 || 2 == x || M == -2 || 2 == M || 0 == x && 0 == M ? this['modules'][U + x][W + M] = !0 : this["modules"][U + x][W + M] = !1;
          }
        }
      },
      'setupTypeNumber': function (G) {
        for (var A = N['getBCHTypeNumber'](this["typeNumber"]), V = 0; V < 18; V++) {
          var U = !G && 1 == (A >> V & 1);
          this['modules'][Math["floor"](V / 3)][V % 3 + this["moduleCount"] - 8 - 3] = U;
        }

        for (var V = 0; V < 18; V++) {
          var U = !G && 1 == (A >> V & 1);
          this["modules"][V % 3 + this['moduleCount'] - 8 - 3][Math["floor"](V / 3)] = U;
        }
      },
      'setupTypeInfo': function (G, A) {
        for (var V = this['errorCorrectLevel'] << 3 | A, U = N["getBCHTypeInfo"](V), W = 0; W < 15; W++) {
          var x = !G && 1 == (U >> W & 1);
          W < 6 ? this["modules"][W][8] = x : W < 8 ? this["modules"][W + 1][8] = x : this['modules'][this["moduleCount"] - 15 + W][8] = x;
        }

        for (var W = 0; W < 15; W++) {
          var x = !G && 1 == (U >> W & 1);
          W < 8 ? this["modules"][8][this["moduleCount"] - W - 1] = x : W < 9 ? this["modules"][8][15 - W - 1 + 1] = x : this["modules"][8][15 - W - 1] = x;
        }

        this["modules"][this["moduleCount"] - 8][8] = !G;
      },
      'mapData': function (G, A) {
        for (var V = -1, U = this["moduleCount"] - 1, W = 7, x = 0, M = this["moduleCount"] - 1; M > 0; M -= 2) for (6 == M && M--;;) {
          for (var C = 0; C < 2; C++) if (null == this['modules'][U][M - C]) {
            var E = !1;
            x < G['length'] && (E = 1 == (G[x] >>> W & 1));
            var w = N['getMask'](A, U, M - C);
            w && (E = !E), this['modules'][U][M - C] = E, W--, W == -1 && (x++, W = 7);
          }

          if (U += V, U < 0 || this["moduleCount"] <= U) {
            U -= V, V = -V;
            break;
          }
        }
      }
    }, D['PAD0'] = 236, D["PAD1"] = 17, D['createData'] = function (G, A, V) {
      for (var U = O["getRSBlocks"](G, A), W = new K(), x = 0; x < V['length']; x++) {
        var M = V[x];
        W["put"](M["mode"], 4), W['put'](M["getLength"](), N['getLengthInBits'](M["mode"], G)), M["write"](W);
      }

      for (var C = 0, x = 0; x < U["length"]; x++) C += U[x]["dataCount"];

      if (W["getLengthInBits"]() > 8 * C) throw new Error("code length overflow. (" + W["getLengthInBits"]() + '>' + 8 * C + ')');

      for (W['getLengthInBits']() + 4 <= 8 * C && W["put"](0, 4); W["getLengthInBits"]() % 8 != 0;) W['putBit'](!1);

      for (;;) {
        if (W['getLengthInBits']() >= 8 * C) break;
        if (W["put"](D["PAD0"], 8), W["getLengthInBits"]() >= 8 * C) break;
        W["put"](D["PAD1"], 8);
      }

      return D["createBytes"](W, U);
    }, D["createBytes"] = function (G, A) {
      for (var V = 0, U = 0, W = 0, x = new Array(A["length"]), M = new Array(A["length"]), C = 0; C < A["length"]; C++) {
        var E = A[C]['dataCount'],
            w = A[C]["totalCount"] - E;
        U = Math["max"](U, E), W = Math["max"](W, w), x[C] = new Array(E);

        for (var Q = 0; Q < x[C]['length']; Q++) x[C][Q] = 255 & G["buffer"][Q + V];

        V += E;
        var J = N["getErrorCorrectPolynomial"](w),
            g0 = new X(x[C], J["getLength"]() - 1),
            g1 = g0['mod'](J);
        M[C] = new Array(J["getLength"]() - 1);

        for (var Q = 0; Q < M[C]['length']; Q++) {
          var g2 = Q + g1['getLength']() - M[C]["length"];
          M[C][Q] = g2 >= 0 ? g1["get"](g2) : 0;
        }
      }

      for (var g3 = 0, Q = 0; Q < A["length"]; Q++) g3 += A[Q]["totalCount"];

      for (var g4 = new Array(g3), g5 = 0, Q = 0; Q < U; Q++) for (var C = 0; C < A["length"]; C++) Q < x[C]["length"] && (g4[g5++] = x[C][Q]);

      for (var Q = 0; Q < W; Q++) for (var C = 0; C < A["length"]; C++) Q < M[C]["length"] && (g4[g5++] = M[C][Q]);

      return g4;
    };

    for (var I = {
      'MODE_NUMBER': 1,
      'MODE_ALPHA_NUM': 2,
      'MODE_8BIT_BYTE': 4,
      'MODE_KANJI': 8
    }, L = {
      'L': 1,
      'M': 0,
      'Q': 3,
      'H': 2
    }, k = {
      'PATTERN000': 0,
      'PATTERN001': 1,
      'PATTERN010': 2,
      'PATTERN011': 3,
      'PATTERN100': 4,
      'PATTERN101': 5,
      'PATTERN110': 6,
      'PATTERN111': 7
    }, N = {
      'PATTERN_POSITION_TABLE': [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      'G15': 1335,
      'G18': 7973,
      'G15_MASK': 21522,
      'getBCHTypeInfo': function (G) {
        for (var A = G << 10; N["getBCHDigit"](A) - N["getBCHDigit"](N["G15"]) >= 0;) A ^= N["G15"] << N["getBCHDigit"](A) - N['getBCHDigit'](N["G15"]);

        return (G << 10 | A) ^ N["G15_MASK"];
      },
      'getBCHTypeNumber': function (G) {
        for (var A = G << 12; N["getBCHDigit"](A) - N["getBCHDigit"](N["G18"]) >= 0;) A ^= N["G18"] << N['getBCHDigit'](A) - N["getBCHDigit"](N["G18"]);

        return G << 12 | A;
      },
      'getBCHDigit': function (G) {
        for (var A = 0; 0 != G;) A++, G >>>= 1;

        return A;
      },
      'getPatternPosition': function (G) {
        return N["PATTERN_POSITION_TABLE"][G - 1];
      },
      'getMask': function (G, A, V) {
        switch (G) {
          case k["PATTERN000"]:
            return (A + V) % 2 == 0;

          case k["PATTERN001"]:
            return A % 2 == 0;

          case k["PATTERN010"]:
            return V % 3 == 0;

          case k["PATTERN011"]:
            return (A + V) % 3 == 0;

          case k["PATTERN100"]:
            return (Math["floor"](A / 2) + Math["floor"](V / 3)) % 2 == 0;

          case k['PATTERN101']:
            return A * V % 2 + A * V % 3 == 0;

          case k['PATTERN110']:
            return (A * V % 2 + A * V % 3) % 2 == 0;

          case k["PATTERN111"]:
            return (A * V % 3 + (A + V) % 2) % 2 == 0;

          default:
            throw new Error("bad maskPattern:" + G);
        }
      },
      'getErrorCorrectPolynomial': function (G) {
        for (var A = new X([1], 0), V = 0; V < G; V++) A = A["multiply"](new X([1, P["gexp"](V)], 0));

        return A;
      },
      'getLengthInBits': function (G, A) {
        if (1 <= A && A < 10) switch (G) {
          case I["MODE_NUMBER"]:
            return 10;

          case I['MODE_ALPHA_NUM']:
            return 9;

          case I["MODE_8BIT_BYTE"]:
            return 8;

          case I["MODE_KANJI"]:
            return 8;

          default:
            throw new Error("mode:" + G);
        } else {
          if (A < 27) switch (G) {
            case I['MODE_NUMBER']:
              return 12;

            case I['MODE_ALPHA_NUM']:
              return 11;

            case I["MODE_8BIT_BYTE"]:
              return 16;

            case I["MODE_KANJI"]:
              return 10;

            default:
              throw new Error("mode:" + G);
          } else {
            if (!(A < 41)) throw new Error('type:' + A);

            switch (G) {
              case I["MODE_NUMBER"]:
                return 14;

              case I["MODE_ALPHA_NUM"]:
                return 13;

              case I["MODE_8BIT_BYTE"]:
                return 16;

              case I["MODE_KANJI"]:
                return 12;

              default:
                throw new Error("mode:" + G);
            }
          }
        }
      },
      'getLostPoint': function (G) {
        for (var A = G["getModuleCount"](), V = 0, U = 0; U < A; U++) for (var W = 0; W < A; W++) {
          for (var x = 0, M = G["isDark"](U, W), C = -1; C <= 1; C++) if (!(U + C < 0 || A <= U + C)) {
            for (var E = -1; E <= 1; E++) W + E < 0 || A <= W + E || 0 == C && 0 == E || M == G["isDark"](U + C, W + E) && x++;
          }

          x > 5 && (V += 3 + x - 5);
        }

        for (var U = 0; U < A - 1; U++) for (var W = 0; W < A - 1; W++) {
          var w = 0;
          G["isDark"](U, W) && w++, G["isDark"](U + 1, W) && w++, G["isDark"](U, W + 1) && w++, G['isDark'](U + 1, W + 1) && w++, 0 != w && 4 != w || (V += 3);
        }

        for (var U = 0; U < A; U++) for (var W = 0; W < A - 6; W++) G["isDark"](U, W) && !G["isDark"](U, W + 1) && G["isDark"](U, W + 2) && G['isDark'](U, W + 3) && G['isDark'](U, W + 4) && !G["isDark"](U, W + 5) && G["isDark"](U, W + 6) && (V += 40);

        for (var W = 0; W < A; W++) for (var U = 0; U < A - 6; U++) G["isDark"](U, W) && !G["isDark"](U + 1, W) && G["isDark"](U + 2, W) && G["isDark"](U + 3, W) && G["isDark"](U + 4, W) && !G['isDark'](U + 5, W) && G["isDark"](U + 6, W) && (V += 40);

        for (var Q = 0, W = 0; W < A; W++) for (var U = 0; U < A; U++) G["isDark"](U, W) && Q++;

        var J = Math['abs'](100 * Q / A / A - 50) / 5;
        return V += 10 * J;
      }
    }, P = {
      'glog': function (G) {
        if (G < 1) throw new Error("glog(" + G + ')');
        return P["LOG_TABLE"][G];
      },
      'gexp': function (G) {
        for (; G < 0;) G += 255;

        for (; G >= 256;) G -= 255;

        return P["EXP_TABLE"][G];
      },
      'EXP_TABLE': new Array(256),
      'LOG_TABLE': new Array(256)
    }, q = 0; q < 8; q++) P["EXP_TABLE"][q] = 1 << q;

    for (var q = 8; q < 256; q++) P['EXP_TABLE'][q] = P["EXP_TABLE"][q - 4] ^ P["EXP_TABLE"][q - 5] ^ P["EXP_TABLE"][q - 6] ^ P["EXP_TABLE"][q - 8];

    for (var q = 0; q < 255; q++) P["LOG_TABLE"][P["EXP_TABLE"][q]] = q;

    X["prototype"] = {
      'get': function (G) {
        return this["num"][G];
      },
      'getLength': function () {
        return this["num"]["length"];
      },
      'multiply': function (G) {
        for (var A = new Array(this["getLength"]() + G["getLength"]() - 1), V = 0; V < this["getLength"](); V++) for (var U = 0; U < G["getLength"](); U++) A[V + U] ^= P["gexp"](P["glog"](this["get"](V)) + P['glog'](G['get'](U)));

        return new X(A, 0);
      },
      'mod': function (G) {
        if (this["getLength"]() - G["getLength"]() < 0) return this;

        for (var A = P["glog"](this["get"](0)) - P["glog"](G["get"](0)), V = new Array(this["getLength"]()), U = 0; U < this["getLength"](); U++) V[U] = this["get"](U);

        for (var U = 0; U < G["getLength"](); U++) V[U] ^= P["gexp"](P["glog"](G["get"](U)) + A);

        return new X(V, 0)["mod"](G);
      }
    }, O["RS_BLOCK_TABLE"] = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], O['getRSBlocks'] = function (G, A) {
      var V = O['getRsBlockTable'](G, A);
      if (void 0 == V) throw new Error("bad rs block @ typeNumber:" + G + "/errorCorrectLevel:" + A);

      for (var U = V["length"] / 3, W = [], x = 0; x < U; x++) for (var M = V[3 * x + 0], C = V[3 * x + 1], E = V[3 * x + 2], w = 0; w < M; w++) W['push'](new O(C, E));

      return W;
    }, O['getRsBlockTable'] = function (G, A) {
      switch (A) {
        case L['L']:
          return O["RS_BLOCK_TABLE"][4 * (G - 1) + 0];

        case L['M']:
          return O["RS_BLOCK_TABLE"][4 * (G - 1) + 1];

        case L['Q']:
          return O["RS_BLOCK_TABLE"][4 * (G - 1) + 2];

        case L['H']:
          return O["RS_BLOCK_TABLE"][4 * (G - 1) + 3];

        default:
          return;
      }
    }, K["prototype"] = {
      'get': function (G) {
        var A = Math['floor'](G / 8);
        return 1 == (this["buffer"][A] >>> 7 - G % 8 & 1);
      },
      'put': function (G, A) {
        for (var V = 0; V < A; V++) this["putBit"](1 == (G >>> A - V - 1 & 1));
      },
      'getLengthInBits': function () {
        return this["length"];
      },
      'putBit': function (G) {
        var A = Math["floor"](this["length"] / 8);
        this["buffer"]["length"] <= A && this['buffer']["push"](0), G && (this['buffer'][A] |= 128 >>> this["length"] % 8), this["length"]++;
      }
    };

    var j = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
        b = function () {
      function G() {
        this["_htOption"]["useCanvas"] ? (this["_elImage"]['style']["display"] = 'none', this["_elCanvas"]["style"]["display"] = 'block') : (this['_elImage']["src"] = this['_elCanvas']["toDataURL"]("image/png"), this['_elImage']["style"]["display"] = "block", this["_elCanvas"]["style"]['display'] = "none");
      }

      function A(x, M) {
        var C = this;

        if (C['_fFail'] = M, C["_fSuccess"] = x, null === C["_bSupportDataURI"]) {
          var E = document['createElement']("img"),
              w = function () {
            C["_bSupportDataURI"] = !1, C["_fFail"] && C['_fFail']["call"](C);
          },
              Q = function () {
            C["_bSupportDataURI"] = !0, C["_fSuccess"] && C["_fSuccess"]["call"](C);
          };

          return E["onabort"] = w, E['onerror'] = w, E["onload"] = Q, void (E["src"] = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
        }

        C["_bSupportDataURI"] === !0 && C["_fSuccess"] ? C["_fSuccess"]["call"](C) : C["_bSupportDataURI"] === !1 && C["_fFail"] && C["_fFail"]['call'](C);
      }

      if (this && this["_android"] && this['_android'] <= 2.1) {
        var V = 1 / window['devicePixelRatio'],
            U = CanvasRenderingContext2D["prototype"]["drawImage"];

        CanvasRenderingContext2D["prototype"]["drawImage"] = function (x, M, C, E, w, Q, J, g0, g1) {
          if ('nodeName' in x && /img/i["test"](x["nodeName"])) {
            for (var g2 = arguments["length"] - 1; g2 >= 1; g2--) arguments[g2] = arguments[g2] * V;
          } else "undefined" == typeof g0 && (arguments[1] *= V, arguments[2] *= V, arguments[3] *= V, arguments[4] *= V);

          U['apply'](this, arguments);
        };
      }

      var W = function (x, M) {
        this["_bIsPainted"] = !1, this["_android"] = Z(), this["_htOption"] = M, this['_elCanvas'] = document['createElement']("canvas"), this["_elCanvas"]["width"] = M["width"], this['_elCanvas']["height"] = M['height'], this["_htOption"]['useCanvas'] && x['appendChild'](this["_elCanvas"]), this["_el"] = x, this['_oContext'] = this["_elCanvas"]["getContext"]('2d'), this["_bIsPainted"] = !1, this["_elImage"] = document["createElement"]("img"), this['_elImage']["alt"] = "SMS jump QR code", this["_elImage"]["style"]['display'] = "none", this["_htOption"]['useCanvas'] || this['_el']['appendChild'](this["_elImage"]), this["_bSupportDataURI"] = null;
      };

      return W['prototype']["draw"] = function (x) {
        var M = this['_elImage'],
            C = this["_elCanvas"],
            E = this['_oContext'],
            w = this["_htOption"],
            Q = x["getModuleCount"](),
            J = w["width"] / Q,
            g0 = w["height"] / Q,
            g1 = Math["round"](J),
            g2 = Math['round'](g0);
        M["style"]["display"] = "none", C["style"]["display"] = "none", this["clear"]();

        for (var g3 = 0; g3 < Q; g3++) for (var g4 = 0; g4 < Q; g4++) {
          var g5 = x["isDark"](g3, g4),
              g6 = g4 * J,
              g7 = g3 * g0;
          E['strokeStyle'] = g5 ? w["colorDark"] : w["colorLight"], E['lineWidth'] = 1, E["fillStyle"] = g5 ? w["colorDark"] : w['colorLight'], E['fillRect'](g6, g7, J, g0), E["strokeRect"](Math['floor'](g6) + 0.5, Math["floor"](g7) + 0.5, g1, g2), E["strokeRect"](Math["ceil"](g6) - 0.5, Math['ceil'](g7) - 0.5, g1, g2);
        }

        if (this["_htOption"]["imgSrc"] && F()) {
          var g8 = new Image();
          g8["crossOrigin"] = '*';
          var g9 = this["_htOption"]['width'],
              gg = this["_htOption"]["imgWidth"],
              gT = (g9 - gg) / 2,
              gB = this;
          g8["onload"] = function () {
            E['drawImage'](g8, gT, gT, gg, gg), gB["_htOption"]["useCanvas"] || gB["makeImage"]();
          }, g8["src"] = this["_htOption"]["imgSrc"], (g8['complete'] || void 0 === g8["complete"]) && (g8['src'] = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", g8["src"] = this["_htOption"]["imgSrc"]);
        }

        this["_bIsPainted"] = !0;
      }, W['prototype']["makeImage"] = function () {
        this["_bIsPainted"] && A['call'](this, G);
      }, W["prototype"]["isPainted"] = function () {
        return this['_bIsPainted'];
      }, W['prototype']['clear'] = function () {
        this["_oContext"]["clearRect"](0, 0, this["_elCanvas"]["width"], this["_elCanvas"]["height"]), this["_bIsPainted"] = !1;
      }, W["prototype"]["round"] = function (x) {
        return x ? Math["floor"](1000 * x) / 1000 : x;
      }, W;
    }();

    z = function (G, A) {
      if (this['_htOption'] = {
        'width': 256,
        'height': 256,
        'typeNumber': 4,
        'colorDark': "#000",
        'colorLight': "#fff",
        'correctLevel': L['H'],
        'imgSrc': void 0,
        'useCanvas': !0
      }, this["_htOption"]["imgWidth"] = this["_htOption"]['width'] / 4, "string" == typeof A && (A = {
        'text': A
      }), A) {
        for (var V in A) this['_htOption'][V] = A[V];

        A["width"] && !A["imgWidth"] && (this['_htOption']["imgWidth"] = this['_htOption']["width"] / 4);
      }

      "string" == typeof G && (G = document["getElementById"](G)), this["_android"] = Z(), this["_el"] = G, this["_oQRCode"] = null, this["_oDrawing"] = new b(this['_el'], this["_htOption"]), this["_htOption"]["text"] && this['makeCode'](this["_htOption"]["text"]);
    }, z["prototype"]['makeCode'] = function (G) {
      this['_oQRCode'] = new D(H(G, this['_htOption']["correctLevel"]), this["_htOption"]["correctLevel"]), this["_oQRCode"]["addData"](G), this["_oQRCode"]["make"](), this['_el']['title'] = G, this["_oDrawing"]["draw"](this['_oQRCode']), this['_htOption']["imgSrc"] && !this["_htOption"]["useCanvas"] || this["makeImage"]();
    }, z["prototype"]['makeImage'] = function () {
      "function" == typeof this["_oDrawing"]["makeImage"] && (!this['_android'] || this["_android"] >= 3) && this["_oDrawing"]["makeImage"]();
    }, z["prototype"]['clear'] = function () {
      this["_oDrawing"]['clear']();
    }, z['CorrectLevel'] = L, B["exports"] = z;
  }, function (B, p) {
    B["exports"] = function (m, v) {
      function R() {}

      R["prototype"] = v['prototype'], m["prototype"] = new R(), m['prototype']["constructor"] = m;
    };
  }, function (B, p) {
    Array["isArray"] || (Array['isArray'] = function (m) {
      return "[object Array]" === Object['prototype']["toString"]["call"](m);
    });
  }, function (B, p) {
    "function" != typeof Object["assign"] && (Object["assign"] = function (m) {
      if (null == m) throw new TypeError("Cannot convert undefined or null to object");
      m = Object(m);

      for (var v = 1; v < arguments["length"]; v++) {
        var R = arguments[v];

        if (null != R) {
          for (var a in R) Object["prototype"]["hasOwnProperty"]["call"](R, a) && (m[a] = R[a]);
        }
      }

      return m;
    });
  }, function (B, p) {
    var m = "function" == typeof Symbol && "symbol" == typeof Symbol['iterator'] ? function (v) {
      return typeof v;
    } : function (v) {
      return v && "function" == typeof Symbol && v["constructor"] === Symbol && v !== Symbol["prototype"] ? "symbol" : typeof v;
    };
    Object["keys"] || (Object["keys"] = function () {
      'use strict';

      var v = Object["prototype"]["hasOwnProperty"],
          R = !{
        'toString': null
      }["propertyIsEnumerable"]('toString'),
          a = ['toString', "toLocaleString", "valueOf", 'hasOwnProperty', "isPrototypeOf", "propertyIsEnumerable", 'constructor'],
          D = a["length"];
      return function (X) {
        if ("function" != typeof X && ("object" !== ("undefined" == typeof X ? "undefined" : m(X)) || null === X)) throw new TypeError("Object.keys called on non-object");
        var O,
            K,
            F = [];

        for (O in X) v['call'](X, O) && F["push"](O);

        if (R) {
          for (K = 0; K < D; K++) v["call"](X, a[K]) && F["push"](a[K]);
        }

        return F;
      };
    }());
  }, function (B, p) {
    Array["prototype"]['indexOf'] || (Array["prototype"]["indexOf"] = function (m, v) {
      var R;
      if (null == this) throw new TypeError("\"this\" is null or not defined");
      var a = Object(this),
          D = a['length'] >>> 0;
      if (0 === D) return -1;
      var X = +v || 0;
      if (Math['abs'](X) === 1 / 0 && (X = 0), X >= D) return -1;

      for (R = Math["max"](X >= 0 ? X : D - Math["abs"](X), 0); R < D;) {
        if (R in a && a[R] === m) return R;
        R++;
      }

      return -1;
    });
  }, function (B, p) {
    Array["prototype"]['map'] || (Array["prototype"]['map'] = function (m, v) {
      var R, a, D;
      if (null == this) throw new TypeError(" this is null or not defined");
      var X = Object(this),
          O = X['length'] >>> 0;
      if ("[object Function]" !== Object["prototype"]["toString"]['call'](m)) throw new TypeError(m + " is not a function");

      for (v && (R = v), a = new Array(O), D = 0; D < O;) {
        var K, F;
        D in X && (K = X[D], F = m['call'](R, K, D, X), a[D] = F), D++;
      }

      return a;
    });
  }, function (B, p) {
    Function["prototype"]["bind"] || (Function["prototype"]["bind"] = function (m) {
      if ('function' != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

      var v = Array["prototype"]['slice']["call"](arguments, 1),
          R = this,
          a = function () {},
          D = function () {
        return R["apply"](this instanceof a ? this : m, v["concat"](Array["prototype"]["slice"]["call"](arguments)));
      };

      return this['prototype'] && (a["prototype"] = this["prototype"]), D["prototype"] = new a(), D;
    });
  }, function (B, p, m) {
    m(60), m(67), m(66), m(63), m(65), m(64), m(70), m(68);
  }, function (B, p) {
    String["prototype"]["trim"] || (String['prototype']['trim'] = function () {
      return this["replace"](/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    });
  }, function (X, K, Z) {
    function q(gG, gA, gV) {
      return gA in gG ? Object["defineProperty"](gG, gA, {
        'value': gV,
        'enumerable': !0,
        'configurable': !0,
        'writable': !0
      }) : gG[gA] = gV, gG;
    }

    function Q(gG, gA) {
      var gV = gG["apiServer"],
          gn = gG["protocol"],
          gt = "/api/v3" + gA;
      return Array['isArray'](gV) ? gV["map"](function (gu) {
        return gl({
          'protocol': gn,
          'host': gu,
          'path': gt
        });
      }) : gl({
        'protocol': gn,
        'host': gV,
        'path': gt
      });
    }

    function J(gG, gA, gV) {
      var gn = gG || !gA && new Error("Server error, \"res\" is not right.(" + gV + ')') || gA["error"] && new Error(gA["error"] + ": " + gA["msg"] + '.(' + gV + ')') || null;
      return !gG && gA && gA["error"] ? (gn["code"] = gd, gn['errorCode'] = gA["error"], gn["errorMsg"] = gA["msg"]) : !gG && gA || (gn["code"] = ge), gn;
    }

    function g0(gG) {
      var gA = arguments['length'] > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
      return null == gG ? '' : String(gz['isFn'](gG) ? gG() : gG)["substring"](0, gA);
    }

    function g1() {
      var gG = gz["uuid"](32);
      return gL(gG);
    }

    function g2(gG, gA, gV) {
      var gn = gk(gL(gG + '::' + gA)),
          gt = gV ? gV + '_' + gn : gn;
      return gt + "_v_i_1";
    }

    var g3,
        g4,
        g5 = Z(6),
        g6 = g5['INVOKE_HOOK'],
        g7 = g5['EVENT_CLOSE'],
        g8 = g5["EVENT_RESET"],
        g9 = g5["SWITCH_TYPE"],
        gg = g5['SET_TYPE'],
        gT = g5["SWITCH_LOAD_STATUS"],
        gB = g5["UPDATE_VERIFY_STATUS"],
        gp = g5["REFRESH"],
        gm = g5["UPDATE_COUNTS_OF_VERIFYERROR"],
        gv = g5["SET_TOKEN"],
        gi = g5['EVENT_RESET_CLASSIC'],
        gR = g5["UPDATE_LINK_TIME"],
        ga = Z(14),
        gD = ga["FETCH_CAPTCHA"],
        gX = ga["FETCH_INTELLISENSE_CAPTCHA"],
        gO = ga["VERIFY_CAPTCHA"],
        gr = ga['VERIFY_INTELLISENSE_CAPTCHA'],
        gK = ga['RESET_STATE'],
        gF = Z(5),
        gZ = gF["CAPTCHA_TYPE"],
        gH = gF["DEVICE"],
        gS = Z(4),
        gz = Z(3),
        gl = Z(18),
        gI = Z(10),
        gL = gI["aes"],
        gk = Z(48),
        gN = Z(9),
        gP = gN["createNetCollect"],
        gh = gN["createLinkTimeCollect"],
        gf = Z(7),
        gq = gf["UNPASS_ERROR"],
        ge = gf["REQUEST_API_ERROR"],
        gd = gf['BUSINESS_ERROR'],
        gj = gS["isMobile"] ? gH["TOUCH"] : gS["supportTouch"] ? gH["MOUSE_TOUCH"] : gH['MOUSE'],
        gb = {
      'state': {
        'version': "2.26.1",
        'fingerprint': '',
        'config': null,
        'langPkg': null,
        'smsNew': !1,
        'captchaType': null,
        'type': '',
        'load': null,
        'verifyStatus': '',
        'token': '',
        'previousToken': '',
        'countsOfVerifyError': 0,
        'startTimestamp': null,
        'getApiCount': 0
      },
      'mutations': (g3 = {}, q(g3, g6, function () {}), q(g3, g7, function () {}), q(g3, g8, function () {}), q(g3, gi, function () {}), q(g3, g9, function (gG, gA) {
        gG['captchaType'] = gA['captchaType'];
      }), q(g3, gg, function (gG, gA) {
        gG["type"] = gA['captchaType'];
      }), q(g3, gT, function (gG, gA) {
        gG["load"] = gA;
      }), q(g3, gB, function (gG, gA) {
        gG["verifyStatus"] = gA["verifyStatus"];
      }), q(g3, gp, function (gG) {
        gG["load"] = null, gG["verifyStatus"] = '';
      }), q(g3, gm, function (gG, gA) {
        gG['countsOfVerifyError'] = gA["counts"];
      }), q(g3, gv, function (gG, gA) {
        gA && (gG["previousToken"] = gA), gG["token"] = gA;
      }), q(g3, gR, function (gG, gA) {
        gA && (gG["startTimestamp"] = gA['startTimestamp'], gG["getApiCount"] = gA["getApiCount"]);
      }), g3),
      'actions': (g4 = {}, q(g4, gK, function (gG) {
        var gA = gG["commit"];
        gA(g9, {
          'captchaType': null
        }), gA(gT, null), gA(gB, {
          'verifyStatus': ''
        }), gA(gv, ''), gA(gm, {
          'counts': 0
        });
      }), q(g4, gD, function (gG, gA) {
        var gV = gG["commit"],
            gn = gG["state"],
            gt = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            gu = gn["fingerprint"],
            gU = gn["version"],
            gW = gn["$fetch"],
            gY = gn["$captchaAnticheat"],
            gx = gn['captchaCollector'],
            go = gn['iv'],
            gM = gn["startTimestamp"],
            gC = gn['getApiCount'],
            gs = gn["config"],
            gE = gs['apiServer'],
            gw = gs["captchaId"],
            gQ = gs["protocol"],
            gc = gs["captchaType"],
            gJ = gs["ipv6"],
            gy = gs["runEnv"],
            T0 = gs["group"],
            T1 = gs["scene"],
            T2 = gs["lang"],
            T3 = gs['sdkVer'],
            T4 = Object["assign"]({
          'id': gw,
          'fp': gu,
          'https': "https" === gQ,
          'type': gc,
          'version': gU,
          'dpr': window["devicePixelRatio"] || 1,
          'dev': gj,
          'cb': g1(),
          'ipv6': gJ,
          'runEnv': gy,
          'group': T0,
          'scene': T1,
          'lang': T2,
          'sdkVersion': T3,
          'iv': go
        }, gA),
            T5 = Q({
          'apiServer': gE,
          'protocol': gQ
        }, "/get");
        gV(gT, {
          'status': "loading"
        }), gY["getToken"]({
          'timeout': 500
        })["then"](function (T6) {
          gW(T5, Object["assign"]({
            'acToken': T6
          }, T4), function (T7, T8) {
            if (T7 = J(T7, T8, T5)) {
              var T9 = new gf(T7['code'], T7['message'], {
                'url': T5,
                'api': "get",
                'errorCode': T7["errorCode"] || null,
                'errorMsg': T7["errorMsg"] || null
              });
              return gt(T9), gV(gT, {
                'status': "fail",
                'data': T9
              }), void gV(g6, {
                'name': "onError",
                'args': [T9]
              });
            }

            gt(null, T8), gM && 0 === gC && (gh(gx, {
              'lt': new Date()["getTime"]() - gM,
              'ct': gc
            }), gV(gR, {
              'getApiCount': gC + 1,
              'startTimestamp': null
            }));
            var Tg = T8['data'];
            Tg["type"] !== gZ['INTELLISENSE'] && Tg["type"] !== gn['captchaType'] && gV(g9, {
              'captchaType': Tg["type"],
              'prevCaptchaType': gn["captchaType"]
            }), gV(gg, {
              'captchaType': Tg["type"]
            }), gV(gv, Tg['token']), gV(gT, {
              'status': "loading",
              'data': Tg
            });
          }, {
            'onProcess': gP(gx)
          });
        });
      }), q(g4, gX, function (gG, gA) {
        var gV = gG["commit"],
            gn = gG["state"],
            gt = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            gu = gn['fingerprint'],
            gU = gn['version'],
            gW = gn["$fetch"],
            gY = gn["$captchaAnticheat"],
            gx = gn["captchaCollector"],
            go = gn['iv'],
            gM = gn["startTimestamp"],
            gC = gn['getApiCount'],
            gs = gn["config"],
            gE = gs['apiServer'],
            gw = gs['captchaId'],
            gQ = gs['protocol'],
            gc = gs["captchaType"],
            gJ = gs['ipv6'],
            gy = gs["runEnv"],
            T0 = gs["group"],
            T1 = gs["scene"],
            T2 = gs["sdkVer"],
            T3 = Q({
          'apiServer': gE,
          'protocol': gQ
        }, "/get");
        gY["getToken"]({
          'timeout': 500
        })["then"](function (T4) {
          var T5 = Object["assign"]({
            'id': gw,
            'fp': gu,
            'https': "https" === gQ,
            'type': gc,
            'width': gA['width'],
            'sizeType': gA['sizeType'],
            'version': gU,
            'dpr': window["devicePixelRatio"] || 1,
            'dev': gj,
            'cb': g1(),
            'acToken': T4,
            'ipv6': gJ,
            'runEnv': gy,
            'group': T0,
            'scene': T1,
            'sdkVersion': T2,
            'iv': go
          }, gA);
          gW(T3, T5, function (T6, T7) {
            if (T6 = J(T6, T7, T3)) {
              var T8 = new gf(T6["code"], T6["message"], {
                'url': T3,
                'api': "get",
                'errorCode': T6["errorCode"] || null,
                'errorMsg': T6["errorMsg"] || null
              });
              return gV(g6, {
                'name': 'onError',
                'args': [T8]
              }), void gt(T8);
            }

            gV(gg, {
              'captchaType': gZ["INTELLISENSE"]
            }), gV(gv, T7["data"]["token"]), gt(null, T7), gM && 0 === gC && (gh(gx, {
              'lt': new Date()["getTime"]() - gM,
              'ct': gc
            }), gV(gR, {
              'getApiCount': gC + 1,
              'startTimestamp': null
            }));
          }, {
            'onProcess': gP(gx)
          });
        });
      }), q(g4, gr, function (gG, gA, gV) {
        var gn = gG['commit'],
            gt = gG["state"],
            gu = gt["version"],
            gU = gt['type'],
            gW = gt["$fetch"],
            gY = gt['captchaCollector'],
            gx = gt["browserFeature"],
            go = gt['iv'],
            gM = gt["config"],
            gC = gM['apiServer'],
            gs = gM["captchaId"],
            gE = gM["protocol"],
            gw = gM["extraData"],
            gQ = gM["runEnv"],
            gc = gM["zoneId"],
            gJ = gM['sdkVer'],
            gy = Object["assign"]({
          'id': gs,
          'version': gu,
          'cb': g1(),
          'extraData': g0(gw),
          'bf': gx,
          'runEnv': gQ,
          'sdkVersion': gJ,
          'iv': go
        }, gA),
            T0 = Q({
          'apiServer': gC,
          'protocol': gE
        }, "/check");
        gW(T0, gy, function (T1, T2) {
          if (T1 = J(T1, T2, T0), T1 ? T1 = new gf(T1["code"], T1["message"], {
            'url': T0,
            'token': gy['token'],
            'type': gU,
            'errorCode': T1["errorCode"] || null,
            'errorMsg': T1["errorMsg"] || null
          }) : gz['getIn'](T2, 'data.result') || (T1 = new gf(gq, "Failed to verify captcha.", {
            'url': T0,
            'type': gU,
            'token': gy["token"]
          })), T1) gn(g6, {
            'name': "onVerify",
            'args': [T1]
          });else {
            var T3 = gt["fingerprint"],
                T4 = g2(T2["data"]['validate'], T3, gc);
            gn(g6, {
              'name': "onVerify",
              'args': [null, {
                'validate': T4
              }]
            });
          }
          gV && gV(T1, T2);
        }, {
          'onProcess': gP(gY, {
            'token': gy["token"]
          })
        });
      }), q(g4, gO, function (gG, gA) {
        var gV = gG["commit"],
            gn = gG["state"],
            gt = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            gu = gn["fingerprint"],
            gU = gn["captchaType"],
            gW = gn["version"],
            gY = gn['verifyStatus'],
            gx = gn["countsOfVerifyError"],
            go = gn['$fetch'],
            gM = gn["type"],
            gC = gn['captchaCollector'],
            gs = gn["browserFeature"],
            gE = gn['iv'],
            gw = gn["config"],
            gQ = gw["apiServer"],
            gc = gw['captchaId'],
            gJ = gw["protocol"],
            gy = gw["extraData"],
            T0 = gw["runEnv"],
            T1 = gw["zoneId"],
            T2 = gw["sdkVer"],
            T3 = gA['token'],
            T4 = gA["data"],
            T5 = gA["width"],
            T6 = gA["acToken"],
            T7 = Q({
          'apiServer': gQ,
          'protocol': gJ
        }, "/check");
        gV(gB, {
          'verifyStatus': "verifying"
        });

        var T8 = function (T9, Tg) {
          var TT = Tg && Tg['data'];

          if (T9 = J(T9, Tg, T7), !(["success", "error"]["indexOf"](gY) > -1)) {
            if (T9 || !TT["result"] && gU !== gZ['SMS']) {
              var TB = T9 ? T9["message"] : "Failed to verify captcha.",
                  Tp = T9 ? T9["code"] : gq,
                  Tm = T9 ? T9["errorCode"] : null,
                  Tv = T9 ? T9["errorMsg"] : null;
              return T9 = new gf(Tp, TB, {
                'url': T7,
                'token': T3,
                'type': gM,
                'counts': gx + 1,
                'errorCode': Tm,
                'errorMsg': Tv
              }), gV(gB, {
                'verifyStatus': 'error',
                'error': T9
              }), gV(gm, {
                'counts': gx + 1
              }), gV(g6, {
                'name': "onVerify",
                'args': [T9]
              }), void gt(T9);
            }

            if (TT['result']) {
              var Ti = g2(TT["validate"], gu, T1);
              gV(gB, {
                'verifyStatus': "success",
                'validate': TT['validate']
              }), gV(g6, {
                'name': "onVerify",
                'args': [null, {
                  'validate': Ti
                }]
              }), gt(null, Tg);
            }
          }
        };

        go(T7, {
          'id': gc,
          'token': T3,
          'acToken': T6,
          'data': T4,
          'width': T5,
          'type': gU,
          'version': gW,
          'cb': g1(),
          'extraData': g0(gy),
          'bf': gs,
          'runEnv': T0,
          'sdkVersion': T2,
          'iv': gE
        }, T8, {
          'onProcess': gP(gC, {
            'token': T3
          })
        });
      }), g4)
    };
    X["exports"] = gb;
  }, function (B, p, m) {
    p = B['exports'] = m(30)(), p["push"]([B['id'], ".yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner,.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon,.yidun.yidun--light .yidun_tips__answer,.yidun.yidun--light .yidun_tips__before,.yidun.yidun--light .yidun_tips__content,.yidun_intellisense--light .yidun_classic-tips .yidun_tips__icon,.yidun_intellisense--light .yidun_intelli-icon,.yidun_popup.yidun_popup--light .yidun_modal,.yidun_popup.yidun_popup--light .yidun_modal__before,.yidun_popup.yidun_popup--light .yidun_modal__sibling,.yidun_popup.yidun_popup--light .yidun_modal__title{display:inline-block;*display:inline;zoom:1;vertical-align:top}.yidun,.yidun_popup{-webkit-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;text-size-adjust:100%!important;-moz-text-size-adjust:100%!important}.yidun{-webkit-tap-highlight-color:transparent}.yidun *{box-sizing:border-box}.yidun :focus-visible{outline:2px solid #4997fd}.panel_ease_top-enter,.panel_ease_top-leave-active{opacity:0;transform:translateY(20px)}.panel_ease_bottom-enter,.panel_ease_bottom-leave-active{opacity:0;transform:translateY(-20px)}.panel_ease_bottom-enter-active,.panel_ease_bottom-leave-active,.panel_ease_top-enter-active,.panel_ease_top-leave-active{transition:all .2s linear;pointer-events:none}.popup_scale-enter,.popup_scale-leave-active{opacity:0;transform:scale(0)}.popup_scale-enter-active{transition:all .3s cubic-bezier(.76,.01,.35,1.56)}.popup_scale-leave-active{transition:all .2s ease-out}.popup_ease-enter{opacity:0;transform:translateY(-20px)}.popup_ease-enter-active{transition:opacity .3s linear,transform .3s linear}.popup_ease-leave-active{opacity:0;transform:translateY(-20px);transition:all .2s ease-out}@keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ball-scale-multiple{0%{transform:scale(.22);opacity:0}5%{opacity:1}to{transform:scale(1);opacity:0}}@keyframes bright{0%{opacity:.5}to{opacity:1}}.yidun_cover-frame{position:absolute;top:0;left:0;width:100%;height:100%;border:0;opacity:0;filter:alpha(opacity=0)}.yidun.yidun--light{position:relative;margin:auto;font-size:14px;-ms-touch-action:none;touch-action:none}.yidun.yidun--light img{pointer-events:none}.yidun.yidun--light .yidun_avoid-canvas,.yidun.yidun--light .yidun_avoid-front,.yidun.yidun--light .yidun_jigsaw,.yidun.yidun--light .yidun_slide_indicator,.yidun.yidun--light .yidun_slider{display:none}.yidun.yidun--light.yidun--jigsaw .yidun_jigsaw,.yidun.yidun--light.yidun--jigsaw .yidun_slide_indicator,.yidun.yidun--light.yidun--jigsaw .yidun_slider{display:block}.yidun.yidun--light.yidun--jigsaw .yidun_tips__content{width:100%}.yidun.yidun--light.yidun--jigsaw .yidun_tips{padding-left:40px}.yidun.yidun--light .yidun_jigsaw{position:absolute;left:0;top:0;width:auto;height:100%;-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden;pointer-events:auto}.yidun.yidun--light .yidun_icon-point{position:absolute;width:26px;height:33px;cursor:pointer;background-repeat:no-repeat}.yidun.yidun--light .yidun_icon-point.yidun_point-1{background-image:url(" + m(1) + ");background-position:0 -997px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-1{background-image:url(" + m(2) + ");background-position:0 -994px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-2{background-image:url(" + m(1) + ");background-position:0 -1111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-2{background-image:url(" + m(2) + ");background-position:0 -1108px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-3{background-image:url(" + m(1) + ");background-position:0 -1035px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-3{background-image:url(" + m(2) + ");background-position:0 -1032px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-4{background-image:url(" + m(1) + ");background-position:0 -1073px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-4{background-image:url(" + m(2) + ");background-position:0 -1070px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-5{background-image:url(" + m(1) + ");background-position:0 -1149px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-5{background-image:url(" + m(2) + ");background-position:0 -1146px;background-size:40px 1515px}}.yidun.yidun--light.yidun--space .yidun_icon-point{width:29px;height:29px;background-image:url(" + m(1) + ");background-position:0 -646px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--space .yidun_icon-point{background-image:url(" + m(2) + ");background-position:0 -643px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_icon-point{cursor:default}.yidun.yidun--light .yidun_inference{display:none;position:absolute;width:25%;height:50%;overflow:hidden;box-sizing:border-box;background-color:transparent}.yidun.yidun--light .yidun_inference .yidun_inference__border{display:block;position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;border:1px solid #fff;box-sizing:border-box;background:transparent;border-radius:inherit;transition:border .2s ease-out 0s}.yidun.yidun--light .yidun_inference.yidun_inference--0,.yidun.yidun--light .yidun_inference.yidun_inference--0 .yidun_inference__img{top:0;left:0}.yidun.yidun--light .yidun_inference.yidun_inference--1{top:0;left:25%}.yidun.yidun--light .yidun_inference.yidun_inference--1 .yidun_inference__img{top:0;left:-100%}.yidun.yidun--light .yidun_inference.yidun_inference--2{top:0;left:50%}.yidun.yidun--light .yidun_inference.yidun_inference--2 .yidun_inference__img{top:0;left:-200%}.yidun.yidun--light .yidun_inference.yidun_inference--3{top:0;left:75%}.yidun.yidun--light .yidun_inference.yidun_inference--3 .yidun_inference__img{top:0;left:-300%}.yidun.yidun--light .yidun_inference.yidun_inference--4,.yidun.yidun--light .yidun_inference.yidun_inference--4 .yidun_inference__img{bottom:0;left:0}.yidun.yidun--light .yidun_inference.yidun_inference--5{bottom:0;left:25%}.yidun.yidun--light .yidun_inference.yidun_inference--5 .yidun_inference__img{bottom:0;left:-100%}.yidun.yidun--light .yidun_inference.yidun_inference--6{bottom:0;left:50%}.yidun.yidun--light .yidun_inference.yidun_inference--6 .yidun_inference__img{bottom:0;left:-200%}.yidun.yidun--light .yidun_inference.yidun_inference--7{bottom:0;left:75%}.yidun.yidun--light .yidun_inference.yidun_inference--7 .yidun_inference__img{bottom:0;left:-300%}.yidun.yidun--light .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light .yidun_inference:hover .yidun_inference__border{border-color:#2c6eff;border-width:2px}.yidun.yidun--light .yidun_inference.yidun_inference--drag,.yidun.yidun--light .yidun_inference:hover{background-color:#fff}.yidun.yidun--light .yidun_inference.yidun_inference--drag .yidun_inference__img,.yidun.yidun--light .yidun_inference:hover .yidun_inference__img{opacity:.3;filter:alpha(opacity=30)}.yidun.yidun--light .yidun_inference:hover{cursor:pointer}.yidun.yidun--light .yidun_inference.yidun_inference--drag{z-index:1;box-shadow:0 2px 6px 30%}.yidun.yidun--light .yidun_inference.yidun_inference--origin .yidun_inference__border{background-color:#d8d8d8}.yidun.yidun--light .yidun_inference.yidun_inference--swap .yidun_inference__border{background:transparent}.yidun.yidun--light .yidun_inference__img{position:absolute;width:400%;height:200%;transition:opacity .2s ease-out}.yidun.yidun--light.yidun--inference .yidun_inference{display:block;background-color:#fff}.yidun.yidun--light.yidun--inference .yidun_bg-img{display:none}.yidun.yidun--light .yidun_avoid-front{position:absolute;z-index:10;left:0;bottom:0;-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden;pointer-events:auto}.yidun.yidun--light .yidun_avoid-canvas{position:absolute;left:0;top:0;pointer-events:none}.yidun.yidun--light.yidun--avoid .yidun_avoid-canvas,.yidun.yidun--light.yidun--avoid .yidun_avoid-front,.yidun.yidun--light.yidun--sms .yidun_smsbox{display:block}.yidun.yidun--light.yidun--sms .yidun_smsbox~.yidun_bg-img{display:none}.yidun.yidun--light.yidun--float .yidun_panel{display:none;position:absolute;left:0;width:100%;z-index:999}.yidun.yidun--light .yidun_panel{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:1}.yidun.yidun--light .yidun_panel-placeholder{pointer-events:auto;position:relative;padding-top:50%}.yidun.yidun--light .yidun_bgimg{pointer-events:auto;position:absolute;top:0;left:0;width:100%;height:100%}.yidun.yidun--light .yidun_bgimg .yidun_bg-img{vertical-align:top;width:100%}.yidun.yidun--light .yidun_smsbox{width:100%;height:100%;text-align:left;font-size:0;background:#f8f9fb;background:linear-gradient(103.18deg,#dae3f6 7.63%,#c8d9fa 94.65%);display:none;position:relative;color:#45494c}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-qrcode{width:120px;height:100px;padding:0 10px;position:absolute;left:0;top:0;bottom:0;margin:auto 0;z-index:1}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-qrcode .yidun_smsbox-qrcode--img{width:100%;height:100%;padding:2px;background:#fff}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text{position:absolute;left:0;top:0;bottom:0;right:0;padding:0 0 0 120px;font-size:14px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;white-space:nowrap;z-index:1}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text:before{content:\"\";width:0;display:inline-block;vertical-align:middle;height:100%}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide{display:inline-block;vertical-align:middle;width:96%;white-space:normal}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--qr{margin-bottom:8px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + m(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual:after{background-image:url(" + m(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper{display:none;padding:9% 20px 0;font-size:14px;white-space:normal}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-guide{margin-bottom:8px;text-align:center}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-btn{text-align:center;margin-bottom:10px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-btn>a{display:inline-block;padding:8px 16px;background:#176ae5;color:#fff;text-decoration:none;border-radius:4px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual{width:100%;text-align:center}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + m(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span:after{background-image:url(" + m(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;font-size:14px;padding:0 16px;display:none;white-space:nowrap}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual:before{content:\"\";width:0;display:inline-block;vertical-align:middle;height:100%}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper{display:inline-block;vertical-align:middle;width:100%;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit{margin-bottom:8px;line-height:26px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit .yidun_smsbox-manual--edit-title{display:inline-block;width:66px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit .yidun_smsbox-manual--edit-content{font-size:24px;color:#45494c}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send{margin-bottom:10px;display:table}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send .yidun_smsbox-manual--edit-title{min-width:66px;display:table-cell}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send .yidun_smsbox-manual--send-content{display:table-cell}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn:after,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + m(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn:after,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr:after{background-image:url(" + m(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual.yidun_smsbox--mobile .yidun_smsbox--mobile-wrapper,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-qrcode,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-text{display:none}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-manual{display:block}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox-qrcode,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox-text{display:none}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox--mobile-wrapper{display:block}.yidun.yidun--light.yidun--avoid .yidun_bgimg,.yidun.yidun--light.yidun--avoid .yidun_panel-placeholder,.yidun.yidun--light.yidun--icon_point .yidun_bgimg,.yidun.yidun--light.yidun--icon_point .yidun_panel-placeholder,.yidun.yidun--light.yidun--inference .yidun_bgimg,.yidun.yidun--light.yidun--inference .yidun_panel-placeholder,.yidun.yidun--light.yidun--point .yidun_bgimg,.yidun.yidun--light.yidun--point .yidun_panel-placeholder,.yidun.yidun--light.yidun--space .yidun_bgimg,.yidun.yidun--light.yidun--space .yidun_panel-placeholder,.yidun.yidun--light.yidun--word_group .yidun_bgimg,.yidun.yidun--light.yidun--word_group .yidun_panel-placeholder,.yidun.yidun--light.yidun--word_order .yidun_bgimg,.yidun.yidun--light.yidun--word_order .yidun_panel-placeholder{overflow:hidden}.yidun.yidun--light .yidun_voice{display:none}.yidun.yidun--light.yidun--voice .yidun_voice{display:block;width:100%;height:100%;overflow:hidden;position:relative}.yidun.yidun--light.yidun--voice .yidun_top,.yidun.yidun--light.yidun--voice .yidun_top__audio{display:none}.yidun.yidun--light.yidun--voice .yidun_bgimg{background-color:#f8f9fb;border:1px solid #e6e7eb;padding:0 8px}.yidun.yidun--light.yidun--voice .yidun_avoid-front,.yidun.yidun--light.yidun--voice .yidun_bg-img,.yidun.yidun--light.yidun--voice .yidun_jigsaw{display:none}.yidun.yidun--light.yidun--voice .yidun_control{background-color:#e9edf3;border-color:#e9edf3;cursor:pointer}.yidun.yidun--light.yidun--voice .yidun_control[role=button] .yidun_tips{color:#45494c}.yidun.yidun--light.yidun--voice .yidun_tips,.yidun.yidun--light.yidun--voice .yidun_tips .yidun_tips__content{font-size:inherit}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio{margin-bottom:6px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_voice__btns{margin-top:4px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio__play,.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio__refresh{width:40px;height:40px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_voice__input{padding:0}.yidun.yidun--light.yidun--voice .yidun_voice-240 .yidun_audio{margin-bottom:2px}.yidun.yidun--light.yidun--voice .yidun_voice-240 .yidun_voice__btns{margin-top:0}.yidun.yidun--light .yidun_audio{height:40px;margin-bottom:24px;position:relative;text-align:center}.yidun.yidun--light .yidun_audio__wave{pointer-events:none;position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:-1;white-space:nowrap;height:100%;line-height:40px;font-size:0}.yidun.yidun--light .yidun_wave__item{display:inline-block;width:4px;height:10px;border-radius:3px;position:relative;overflow:hidden;background-color:#dfe6f4;vertical-align:middle;margin:0 3px}.yidun.yidun--light .yidun_wave__item.yidun_wave__item-light .yidun_wave__inner{transform:translateX(0);transition:transform .35s linear}.yidun.yidun--light .yidun_wave__inner{position:absolute;top:0;left:0;width:4px;height:100%;border-radius:3px;transform:translateX(-4px);background-color:#1991fa}.yidun.yidun--light .yidun_wave-1{height:12px}.yidun.yidun--light .yidun_wave-2{height:18px}.yidun.yidun--light .yidun_wave-3{height:24px}.yidun.yidun--light .yidun_wave-4,.yidun.yidun--light .yidun_wave-5{height:30px}.yidun.yidun--light .yidun_wave-6{height:24px}.yidun.yidun--light .yidun_wave-7{height:18px}.yidun.yidun--light .yidun_wave-8{height:12px}.yidun.yidun--light .yidun_wave-9,.yidun.yidun--light .yidun_wave-10{height:6px}.yidun.yidun--light .yidun_wave-11{height:12px}.yidun.yidun--light .yidun_wave-12{height:18px}.yidun.yidun--light .yidun_wave-13{height:24px}.yidun.yidun--light .yidun_wave-14,.yidun.yidun--light .yidun_wave-15{height:30px}.yidun.yidun--light .yidun_wave-16{height:24px}.yidun.yidun--light .yidun_wave-17{height:18px}.yidun.yidun--light .yidun_wave-18{height:12px}.yidun.yidun--light .yidun_wave-19,.yidun.yidun--light .yidun_wave-20{height:6px}.yidun.yidun--light .yidun_wave-21{height:12px}.yidun.yidun--light .yidun_wave-22{height:18px}.yidun.yidun--light .yidun_wave-23{height:24px}.yidun.yidun--light .yidun_wave-24,.yidun.yidun--light .yidun_wave-25{height:30px}.yidun.yidun--light .yidun_wave-26{height:24px}.yidun.yidun--light .yidun_wave-27{height:18px}.yidun.yidun--light .yidun_wave-28{height:12px}.yidun.yidun--light .yidun_wave-29,.yidun.yidun--light .yidun_wave-30{height:6px}.yidun.yidun--light .yidun_audio__play,.yidun.yidun--light .yidun_audio__refresh{width:40px;height:40px;background-color:#0776f8;box-shadow:0 3px 16px rgba(73,103,180,.32);border:none;outline:none;font-size:0;vertical-align:middle;border-radius:50%;margin:0 16px}.yidun.yidun--light .yidun_audio__play:hover,.yidun.yidun--light .yidun_audio__refresh:hover{background-color:#1991fa;cursor:pointer}.yidun.yidun--light .yidun_audio__play:before,.yidun.yidun--light .yidun_audio__refresh:before{content:\"\";width:20px;height:20px;display:block;margin:auto}.yidun.yidun--light .yidun_audio__play:before{background-image:url(" + m(1) + ");background-position:0 -324px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_audio__play:before{background-image:url(" + m(2) + ");background-position:0 -321px;background-size:40px 1515px}}.yidun.yidun--light .yidun_audio__refresh:before{background-image:url(" + m(1) + ");background-position:0 -299px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_audio__refresh:before{background-image:url(" + m(2) + ");background-position:0 -296px;background-size:40px 1515px}}.yidun.yidun--light .yidun_audio__source,.yidun.yidun--light .yidun_audio__txt{display:none}.yidun.yidun--light .yidun_voice__inner{position:absolute;top:50%;width:100%;transform:translateY(-50%)}.yidun.yidun--light .yidun_voice__input{-moz-appearance:none;width:calc(100% - 4px);height:32px;line-height:30px;font-size:14px;border:1px solid;border-radius:2px;-webkit-appearance:none;text-indent:4px;border-color:#e6e7eb;background-color:#fff;color:#44494a;padding:2px}.yidun.yidun--light .yidun_voice__input:-ms-input-placeholder{color:#c7c7c7}.yidun.yidun--light .yidun_voice__input::placeholder{color:#c7c7c7}.yidun.yidun--light .yidun_voice__input:focus{border-color:#4997fd}.yidun.yidun--light .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--light .yidun_voice__back,.yidun.yidun--light .yidun_voice__refresh{color:#45494c}.yidun.yidun--light .yidun_voice__back:before,.yidun.yidun--light .yidun_voice__refresh:before{content:\"\";display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-position:50%;vertical-align:middle;margin-right:4px}.yidun.yidun--light .yidun_voice__back span,.yidun.yidun--light .yidun_voice__refresh span{vertical-align:middle}.yidun.yidun--light .yidun_voice__refresh:before{background-image:url(" + m(1) + ");background-position:0 -274px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_voice__refresh:before{background-image:url(" + m(2) + ");background-position:0 -271px;background-size:40px 1515px}}.yidun.yidun--light .yidun_voice__back,.yidun.yidun--light .yidun_voice__refresh{border:none;background:transparent;font-size:12px;line-height:20px;padding:0;cursor:pointer;vertical-align:middle}.yidun.yidun--light .yidun_voice__back{display:none}.yidun.yidun--light .yidun_voice__back:before{background-image:url(" + m(1) + ");background-position:0 -399px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_voice__back:before{background-image:url(" + m(2) + ");background-position:0 -396px;background-size:40px 1515px}}.yidun.yidun--light .yidun_voice__right{float:right}.yidun.yidun--light .yidun_loadbox{display:none;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;background-image:url(" + m(31) + ");background-color:#f7f9fa;background-position:50%;background-size:cover}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_loadbox{background-image:url(" + m(32) + ")}}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner{position:relative;top:50%;margin-top:-25px}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:32px;height:32px;background-repeat:no-repeat}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{display:block;line-height:20px;color:#45494c}.yidun.yidun--light .yidun_top{position:absolute;right:0;top:0;max-width:98px;*max-width:68px;z-index:2;background-color:rgba(0,0,0,.12);*background-color:transparent;_background-color:transparent}.yidun.yidun--light .yidun_top:hover{background-color:rgba(0,0,0,.2);*background-color:transparent;_background-color:transparent}.yidun.yidun--light .yidun_top__right{float:right}.yidun.yidun--light .yidun_refresh,.yidun.yidun--light .yidun_top__audio{width:30px;height:30px;margin-left:4px;cursor:pointer;font-size:0;vertical-align:top;text-indent:-9999px;text-transform:capitalize;border:none;background-color:transparent}.yidun.yidun--light .yidun_refresh{float:left;background-image:url(" + m(1) + ");background-position:0 -750px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_refresh{background-image:url(" + m(2) + ");background-position:0 -747px;background-size:40px 1515px}}.yidun.yidun--light .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -785px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -782px;background-size:40px 1515px}}.yidun.yidun--light .yidun_top__audio{float:right;background-image:url(" + m(1) + ");background-position:0 -820px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_top__audio{background-image:url(" + m(2) + ");background-position:0 -817px;background-size:40px 1515px}}.yidun.yidun--light .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -925px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -922px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--light.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -750px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -747px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -820px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -817px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback{float:left;display:block;width:30px;height:30px;cursor:pointer;background-image:url(" + m(1) + ");background-position:0 -615px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_feedback{background-image:url(" + m(2) + ");background-position:0 -612px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback:hover{background-image:url(" + m(1) + ");background-position:0 -715px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_feedback:hover{background-image:url(" + m(2) + ");background-position:0 -712px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback_txt{font-size:0;clip:rect(0,0,0,0);-webkit-clip-path:inset(0 0 99.9% 99.9%);clip-path:inset(0 0 99.9% 99.9%)}.yidun.yidun--light .yidun_control{position:relative;border:1px solid #e4e7eb;background-color:#f7f9fa}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator{border-color:#1991fa;background-color:#d1e9fe}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider{background-color:#1991fa}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -30px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -30px;background-size:40px 1515px}}.yidun.yidun--light .yidun_slide_indicator{position:absolute;top:-1px;left:-1px;width:0;border:1px solid transparent}.yidun.yidun--light .yidun_slider{position:absolute;top:0;left:0;height:100%;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.3);cursor:pointer;transition:background .2s linear}.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover{background-color:#1991fa}.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -30px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -30px;background-size:40px 1515px}}.yidun.yidun--light .yidun_slider .yidun_slider__icon{position:absolute;top:50%;margin-top:-6px;left:50%;margin-left:-6px;width:14px;height:10px;background-image:url(" + m(1) + ");background-position:0 -15px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -15px;background-size:40px 1515px}}.yidun.yidun--light .yidun_slider img.yidun_slider__icon{width:100%;height:100%;top:0;left:0;margin:0;background-image:none!important}.yidun.yidun--light .yidun_tips{text-align:center;color:#45494c;height:100%;white-space:nowrap;font-size:0}.yidun.yidun--light .yidun_tips .yidun_sms-counter{color:#1991fa}.yidun.yidun--light .yidun_tips__before{height:100%;width:0;vertical-align:middle}.yidun.yidun--light .yidun_tips__content{display:inline-block;vertical-align:middle;white-space:normal;font-size:14px;line-height:18px}.yidun.yidun--light .yidun_tips__text{vertical-align:middle;word-break:break-word}.yidun.yidun--light .yidun_tips__answer{vertical-align:middle;font-weight:700}.yidun.yidun--light .yidun_tips__answer.hide{display:none}.yidun.yidun--light.yidun--point .yidun_tips__point{display:inline}.yidun.yidun--light.yidun--point .yidun_tips__img,.yidun.yidun--light.yidun--space .yidun_tips__answer,.yidun.yidun--light.yidun--space .yidun_tips__img,.yidun.yidun--light.yidun--space .yidun_tips__point,.yidun.yidun--light.yidun--word_group .yidun_tips__answer,.yidun.yidun--light.yidun--word_group .yidun_tips__img,.yidun.yidun--light.yidun--word_group .yidun_tips__point,.yidun.yidun--light.yidun--word_order .yidun_tips__answer,.yidun.yidun--light.yidun--word_order .yidun_tips__img,.yidun.yidun--light.yidun--word_order .yidun_tips__point{display:none}.yidun.yidun--light.yidun--icon_point .yidun_tips__answer{width:80px;height:19px;margin-left:8px;overflow:hidden;position:relative}.yidun.yidun--light.yidun--icon_point .yidun_tips__point{display:none}.yidun.yidun--light.yidun--icon_point .yidun_tips__img{display:block;position:absolute;top:-161px;left:0;width:400%}.yidun.yidun--light.yidun--avoid .yidun_tips__answer{width:26.667px;height:19px;margin-left:8px;overflow:hidden;position:relative}.yidun.yidun--light.yidun--avoid .yidun_tips__point{display:none}.yidun.yidun--light.yidun--avoid .yidun_tips__img{display:block;position:absolute;top:-161px;left:0;width:1200%}.yidun.yidun--light.yidun--loadfail .yidun_bgimg,.yidun.yidun--light.yidun--loading .yidun_bgimg{display:none}.yidun.yidun--light.yidun--loadfail .yidun_loadbox,.yidun.yidun--light.yidun--loading .yidun_loadbox{display:block}.yidun.yidun--light.yidun--loadfail .yidun_slider,.yidun.yidun--light.yidun--loading .yidun_slider{cursor:not-allowed}.yidun.yidun--light.yidun--loadfail .yidun_slider:hover,.yidun.yidun--light.yidun--loading .yidun_slider:hover{background-color:#fff}.yidun.yidun--light.yidun--loadfail .yidun_slider:hover .yidun_slider__icon,.yidun.yidun--light.yidun--loading .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -15px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loadfail .yidun_slider:hover .yidun_slider__icon,.yidun.yidun--light.yidun--loading .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -15px;background-size:40px 1515px}}.yidun.yidun--light.yidun--loadfail .yidun_top,.yidun.yidun--light.yidun--loading .yidun_top{display:block}.yidun.yidun--light.yidun--loading .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -960px;background-size:40px 1518px;animation:loading .8s linear infinite}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loading .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -957px;background-size:40px 1515px}}.yidun.yidun--light.yidun--loading .yidun_refresh,.yidun.yidun--light.yidun--loading .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--loading .yidun_control{border-color:#e4e7eb;background-color:#f7f9fa}.yidun.yidun--light.yidun--loadfail .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -890px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loadfail .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -887px;background-size:40px 1515px}}.yidun.yidun--light.yidun--avoid.yidun--button .yidun_control,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_control,.yidun.yidun--light.yidun--inference.yidun--button .yidun_control,.yidun.yidun--light.yidun--point.yidun--button .yidun_control,.yidun.yidun--light.yidun--space.yidun--button .yidun_control,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_control,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_control{cursor:pointer;background:#f7f9fa;background:linear-gradient(180deg,#fff 0,#ebedf0 87%)}.yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon{margin-right:8px;width:20px;height:20px;vertical-align:middle;background-image:url(" + m(1) + ");background-position:0 -374px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -371px;background-size:40px 1515px}}.yidun.yidun--light.yidun--icon_point.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--icon_point.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--jigsaw.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--jigsaw.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--point.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--point.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--word_icon.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--word_icon.yidun--verifying .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference--target .yidun_inference__img{animation:bright .6s ease-in .3s}.yidun.yidun--light.yidun--success .yidun_tips{color:#52ccba}.yidun.yidun--light.yidun--success .yidun_refresh,.yidun.yidun--light.yidun--success .yidun_top__audio{display:none}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slide_indicator{border-color:#52ccba;background-color:#d2f4ef}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider{background-color:#52ccba}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 0;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 0;background-size:40px 1515px}}.yidun.yidun--light.yidun--success.yidun--avoid .yidun_control,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_control,.yidun.yidun--light.yidun--success.yidun--inference .yidun_control,.yidun.yidun--light.yidun--success.yidun--point .yidun_control,.yidun.yidun--light.yidun--success.yidun--sms .yidun_control,.yidun.yidun--light.yidun--success.yidun--space .yidun_control,.yidun.yidun--light.yidun--success.yidun--voice .yidun_control,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_control,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_control{border-color:#52ccba;background-color:#d2f4ef}.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{margin-right:5px;width:17px;height:12px;vertical-align:middle;background-image:url(" + m(1) + ");background-position:0 -111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -111px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error .yidun_tips{color:#f57a7a}.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_slide_indicator,.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_slider{display:none}.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_tips{padding-left:0}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slide_indicator{border-color:#f57a7a;background-color:#fce1e1}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider{background-color:#f57a7a}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:12px;height:12px;background-image:url(" + m(1) + ");background-position:0 -94px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -94px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider img.yidun_slider__icon{width:100%;height:100%}.yidun.yidun--light.yidun--error.yidun--avoid .yidun_control,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_control,.yidun.yidun--light.yidun--error.yidun--inference .yidun_control,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_control,.yidun.yidun--light.yidun--error.yidun--point .yidun_control,.yidun.yidun--light.yidun--error.yidun--sms .yidun_control,.yidun.yidun--light.yidun--error.yidun--space .yidun_control,.yidun.yidun--light.yidun--error.yidun--voice .yidun_control,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_control,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_control{border-color:#f57a7a;background-color:#fce1e1}.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{margin-right:5px;width:12px;height:12px;vertical-align:middle;background-image:url(" + m(1) + ");background-position:0 -77px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -77px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips:hover{cursor:pointer}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference{cursor:default}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference:hover .yidun_inference__border{content:\"\";border-color:#fff;border-width:1px}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference:hover .yidun_inference__img{opacity:1;filter:alpha(opacity=100)}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--swap .yidun_inference__border{border-color:#2c6eff;border-width:2px}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target{background-color:#000}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target .yidun_inference__border{border:2px solid #2c6eff}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target .yidun_inference__img{opacity:.4;filter:alpha(opacity=40)}.yidun.yidun--light.yidun--voice.yidun--error .yidun_control,.yidun.yidun--light.yidun--voice.yidun--error .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--error .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_control,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--success .yidun_control,.yidun.yidun--light.yidun--voice.yidun--success .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--success .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_control,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_voice__refresh{cursor:not-allowed}.yidun.yidun--light.yidun--rtl{direction:rtl}.yidun.yidun--light.yidun--rtl .yidun_top{left:0;right:auto}.yidun.yidun--light.yidun--rtl .yidun_feedback{float:right;margin-left:4px;background-image:url(" + m(1) + ");background-position:0 -680px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_feedback{background-image:url(" + m(2) + ");background-position:0 -677px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_feedback:hover{background-image:url(" + m(1) + ");background-position:0 -855px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_feedback:hover{background-image:url(" + m(2) + ");background-position:0 -852px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_top__right{float:left}.yidun.yidun--light.yidun--rtl .yidun_top__audio{float:left;margin-left:0}.yidun.yidun--light.yidun--rtl .yidun_tips__img{top:-181px}.yidun.yidun--light.yidun--rtl .yidun_voice__right{float:left}.yidun.yidun--light.yidun--rtl .yidun_voice__refresh{float:right}.yidun.yidun--light.yidun--rtl .yidun_audio__play:before{background-image:url(" + m(1) + ");background-position:0 -349px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_audio__play:before{background-image:url(" + m(2) + ");background-position:0 -346px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_voice__back{margin-left:4px}.yidun.yidun--light.yidun--rtl .yidun_voice__back:before{background-image:url(" + m(1) + ");background-position:0 -424px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_voice__back:before{background-image:url(" + m(2) + ");background-position:0 -421px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_voice__back:before,.yidun.yidun--light.yidun--rtl .yidun_voice__refresh:before{margin-left:2px;margin-right:0}.yidun.yidun--light.yidun--rtl .yidun_wave__inner{transform:translateX(4px)}.yidun.yidun--light.yidun--disable-focus-outline .yidun_control,.yidun.yidun--light.yidun--disable-focus-outline .yidun_feedback,.yidun.yidun--light.yidun--disable-focus-outline .yidun_refresh,.yidun.yidun--light.yidun--disable-focus-outline .yidun_top__audio,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__back,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__input,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__refresh{-webkit-tap-highlight-color:rgba(255,255,255,0)!important;outline:none!important}.yidun.yidun--size-medium{font-size:18px}.yidun.yidun--size-medium .yidun_tips__content{font-size:18px;line-height:19px}.yidun.yidun--size-medium .yidun_top{max-width:116px}.yidun.yidun--size-medium .yidun_refresh,.yidun.yidun--size-medium .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-medium .yidun_refresh{background-image:url(" + m(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_refresh{background-image:url(" + m(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_top__audio{background-image:url(" + m(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_top__audio{background-image:url(" + m(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_feedback{width:36px;height:36px;background-image:url(" + m(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_feedback{background-image:url(" + m(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_feedback:hover{background-image:url(" + m(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_feedback:hover{background-image:url(" + m(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + m(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + m(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + m(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(" + m(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + m(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-medium .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-medium.yidun--loading .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--loading .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--loadfail .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--loadfail .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_audio__play,.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-medium.yidun--voice .yidun_audio__play:before{background-image:url(" + m(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_audio__play:before{background-image:url(" + m(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh:before{background-image:url(" + m(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh:before{background-image:url(" + m(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + m(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + m(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + m(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + m(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-large{font-size:20px}.yidun.yidun--size-large .yidun_tips__content{font-size:20px;line-height:21px}.yidun.yidun--size-large .yidun_top{max-width:116px}.yidun.yidun--size-large .yidun_refresh,.yidun.yidun--size-large .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-large .yidun_refresh{background-image:url(" + m(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_refresh{background-image:url(" + m(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_top__audio{background-image:url(" + m(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_top__audio{background-image:url(" + m(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_feedback{width:36px;height:36px;background-image:url(" + m(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_feedback{background-image:url(" + m(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_feedback:hover{background-image:url(" + m(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_feedback:hover{background-image:url(" + m(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + m(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + m(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + m(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(" + m(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + m(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-large.yidun--loading .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--loading .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--loadfail .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--loadfail .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_audio__play,.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-large.yidun--voice .yidun_audio__play:before{background-image:url(" + m(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_audio__play:before{background-image:url(" + m(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + m(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + m(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + m(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + m(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + m(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + m(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-large.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-x-large,.yidun.yidun--size-x-large .yidun_tips__content{font-size:24px}.yidun.yidun--size-x-large .yidun_top{max-width:116px}.yidun.yidun--size-x-large .yidun_refresh,.yidun.yidun--size-x-large .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-x-large .yidun_refresh{background-image:url(" + m(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_refresh{background-image:url(" + m(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_top__audio{background-image:url(" + m(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_top__audio{background-image:url(" + m(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_feedback{width:36px;height:36px;background-image:url(" + m(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_feedback{background-image:url(" + m(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_feedback:hover{background-image:url(" + m(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_feedback:hover{background-image:url(" + m(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + m(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + m(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + m(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(" + m(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + m(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + m(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-x-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-x-large.yidun--loading .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--loading .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--loadfail .yidun_loadicon{background-image:url(" + m(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--loadfail .yidun_loadicon{background-image:url(" + m(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play,.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play:before{background-image:url(" + m(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play:before{background-image:url(" + m(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + m(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + m(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + m(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + m(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + m(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + m(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + m(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + m(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;text-align:center}.yidun_popup.yidun_popup--light .yidun_popup__mask{-ms-touch-action:none;touch-action:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;transition:opacity .3s linear;will-change:opacity}.yidun_popup.yidun_popup--light .yidun_modal{position:relative;box-sizing:border-box;border-radius:2px;border:1px solid #e4e7eb;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.3);-ms-touch-action:none;touch-action:none}.yidun_popup.yidun_popup--light .yidun_modal__wrap{height:100%;width:100%}.yidun_popup.yidun_popup--light .yidun_modal__subwrap{height:100%;width:100%;white-space:nowrap}.yidun_popup.yidun_popup--light .yidun_modal__sibling{width:0;height:100%}.yidun_popup.yidun_popup--light .yidun_modal__header{padding:0 15px;height:50px;text-align:left;font-size:0;color:#45494c;border-bottom:1px solid #e4e7eb;white-space:nowrap;position:relative}.yidun_popup.yidun_popup--light .yidun_modal__before{width:0;height:100%;vertical-align:middle}.yidun_popup.yidun_popup--light .yidun_modal__title{font-size:16px;line-height:20px;vertical-align:middle;white-space:normal}.yidun_popup.yidun_popup--light .yidun_modal__close{position:absolute;top:0;right:9px;width:24px;height:100%;text-align:center;border:none;background:transparent;padding:0;cursor:pointer}.yidun_popup.yidun_popup--light .yidun_modal__close:before{content:\"\";display:inline-block;height:100%;vertical-align:middle;font-size:0}.yidun_popup.yidun_popup--light .yidun_modal__close .yidun_icon-close{display:inline-block;width:11px;height:11px;font-size:0;text-indent:-9999px;text-transform:capitalize;margin:auto;vertical-align:middle;background-image:url(" + m(1) + ");background-position:0 -61px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_popup.yidun_popup--light .yidun_modal__close .yidun_icon-close{background-image:url(" + m(2) + ");background-position:0 -61px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light .yidun_modal__close:hover .yidun_icon-close{background-image:url(" + m(1) + ");background-position:0 -45px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_popup.yidun_popup--light .yidun_modal__close:hover .yidun_icon-close{background-image:url(" + m(2) + ");background-position:0 -45px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light .yidun_modal__body{padding:15px}.yidun_popup.yidun_popup--light .yidun_modal__body .yidun{*margin:0}.yidun_popup.yidun_popup--shifting{display:block!important;position:absolute!important;left:-99999px!important;top:-99999px!important}.yidun_popup.yidun_popup--auto .yidun_modal{top:auto;*top:-50%}.yidun_popup.yidun_popup--auto .yidun_modal__wrap{display:table;*position:relative}.yidun_popup.yidun_popup--auto .yidun_modal__subwrap{display:table-cell;vertical-align:middle;*height:auto;*position:absolute;*top:50%;*left:0}@supports (display:flex){.yidun_popup.yidun_popup--auto .yidun_modal{top:auto;margin:auto}.yidun_popup.yidun_popup--auto .yidun_modal__wrap{display:block}.yidun_popup.yidun_popup--auto .yidun_modal__subwrap{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}}.yidun_popup.yidun_popup--append{position:absolute}.yidun_popup.yidun_popup--rtl{direction:rtl}.yidun_popup.yidun_popup--rtl .yidun_modal__header{text-align:right;padding:0 15px}.yidun_popup.yidun_popup--rtl .yidun_modal__close{left:9px;right:auto}.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_control,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_feedback,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_refresh,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_top__audio,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__back,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__input,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__refresh,.yidun_popup.yidun_popup--disable-focus-outline .yidun_modal,.yidun_popup.yidun_popup--disable-focus-outline .yidun_modal__close{-webkit-tap-highlight-color:rgba(255,255,255,0)!important;outline:none!important}.yidun_popup.yidun_popup--size-medium,.yidun_popup.yidun_popup--size-medium .yidun_modal__title{font-size:18px}.yidun_popup.yidun_popup--size-large,.yidun_popup.yidun_popup--size-large .yidun_modal__title{font-size:20px}.yidun_popup.yidun_popup--size-x-large,.yidun_popup.yidun_popup--size-x-large .yidun_modal__title{font-size:24px}.yidun_intellisense--light{position:relative}.yidun_intellisense--light *{box-sizing:border-box}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-control{cursor:default}.yidun_intellisense--light .yidun_intelli-control{position:relative;height:40px;font-size:14px;cursor:pointer;border-radius:2px;border:1px solid #e4e7eb;background-color:#f7f9fa;overflow:hidden;outline:none}.yidun_intellisense--light .yidun_intelli-tips{text-align:center;color:#45494c}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon{background-color:#1991fa;box-shadow:0 2px 6px 1px rgba(25,145,250,.5)}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon .yidun_logo{background-image:url(" + m(1) + ");background-position:0 -229px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon .yidun_logo{background-image:url(" + m(2) + ");background-position:0 -226px;background-size:40px 1515px}}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-text{color:#1991fa}.yidun_intellisense--light .yidun_intelli-icon{position:relative;margin-right:5px;width:28px;height:28px;vertical-align:middle;border-radius:50%;background-color:#fff;box-shadow:0 2px 8px 1px rgba(188,196,204,.5);transition:all .2s linear}.yidun_intellisense--light .yidun_intelli-icon .yidun_logo{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px;width:15px;height:17px;background-image:url(" + m(1) + ");background-position:0 -207px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light .yidun_intelli-icon .yidun_logo{background-image:url(" + m(2) + ");background-position:0 -204px;background-size:40px 1515px}}.yidun_intellisense--light .yidun_intelli-icon img.yidun_logo{width:100%;height:100%;top:0;left:0;margin:0;border-radius:50%;background-image:none!important}.yidun_intellisense--light .yidun_intelli-text{line-height:38px;vertical-align:middle;transition:all .2s linear}.yidun_intellisense--light .yidun_classic-tips{display:none;text-align:center}.yidun_intellisense--light .yidun_classic-tips .yidun_tips__icon{margin-right:5px;width:12px;height:12px;vertical-align:middle}.yidun_intellisense--light .yidun_classic-tips .yidun_tips__text{line-height:38px;vertical-align:middle}.yidun_intellisense--light .yidun_classic-container{position:absolute;bottom:0;left:0;width:100%;z-index:1000}.yidun_intellisense--light .yidun_classic-wrapper{display:none;width:100%;padding:9px;border:1px solid #e4e7eb;border-radius:2px;background-color:#fff}.yidun_intellisense--light .yidun_classic-wrapper--shifting{display:block!important;position:absolute!important;left:-99999px!important;top:-99999px!important}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon{background-color:#1991fa}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon .yidun_logo,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon .yidun_logo{background-image:url(" + m(1) + ");background-position:0 -229px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon .yidun_logo,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon .yidun_logo{background-image:url(" + m(2) + ");background-position:0 -226px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-text,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-text{color:#1991fa}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple{position:absolute;top:50%;left:50%;transform:translateY(-80px)}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div:nth-child(2){animation-delay:-1.2s}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div:nth-child(3){animation-delay:-.6s}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div{position:absolute;box-shadow:inset 0 0 40px rgba(25,145,250,.5);border-radius:100%;animation-fill-mode:both;left:-80px;top:0;opacity:0;width:160px;height:160px;animation:ball-scale-multiple 1.8s 0s linear infinite}.yidun_intellisense--light.yidun_intellisense--loading .yidun_logo{display:none}.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-loading{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px;width:16px;height:16px;border-radius:50%;border-width:2px;border-style:solid;border-color:#fff #fff transparent;animation:loading .75s linear infinite;background-position:0 0}.yidun_intellisense--light.yidun_intellisense--error .yidun_intelli-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-tips,.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-tips{display:none}.yidun_intellisense--light.yidun_intellisense--error .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--success .yidun_classic-tips{display:block}.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-control{border-color:#52ccba;background-color:#d2f4ef}.yidun_intellisense--light.yidun_intellisense--success .yidun_classic-tips{color:#52ccba}.yidun_intellisense--light.yidun_intellisense--success .yidun_tips__icon{width:17px;background-image:url(" + m(1) + ");background-position:0 -111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -111px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--error .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-control{border-color:#f57a7a;background-color:#fce1e1}.yidun_intellisense--light.yidun_intellisense--error .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_classic-tips{color:#f57a7a}.yidun_intellisense--light.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + m(1) + ");background-position:0 -77px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -77px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--maxerror .yidun_intelli-control .yidun_tips__text:hover{cursor:pointer;text-decoration:underline}.yidun_intellisense--size-medium,.yidun_intellisense--size-medium .yidun_intelli-control{font-size:18px}.yidun_intellisense--size-medium.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + m(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-medium.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-medium.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-medium.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + m(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-medium.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-medium.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun_intellisense--size-large{font-size:20px}.yidun_intellisense--size-large .yidun_intelli-control{font-size:20px;line-height:19px}.yidun_intellisense--size-large.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + m(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-large.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-large.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + m(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-large.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun_intellisense--size-x-large,.yidun_intellisense--size-x-large .yidun_intelli-control{font-size:24px}.yidun_intellisense--size-x-large.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + m(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-x-large.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-x-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-x-large.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + m(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-x-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-x-large.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + m(2) + ");background-position:0 -248px;background-size:40px 1515px}}", '']);
  }, function (B, p) {
    B["exports"] = "<div\r\n  class=\"yidun yidun-custom <%= 'yidun--' + theme %> <%= 'yidun--' + mode %> <%= 'yidun--size-' + size %> <% if (isRtlLang) { %> yidun--rtl <% } %> <% if (disableFocusVisible) { %> yidun--disable-focus-outline <% } %>\"\r\n  style=\"width: <%= width %>; min-width: <%= minWidth %>\">\r\n  <div class=\"yidun_panel\"\r\n    <% if (mode === 'float') { %>\r\n    style=\"<%= customStyles.imagePanel.align === 'top'\r\n    ? 'bottom: ' + customStyles.controlBar.height + '; padding-bottom: ' + customStyles.gap\r\n    : 'top: ' + customStyles.controlBar.height + '; padding-top: ' + customStyles.gap %>\"\r\n    <% } else { %>\r\n    style=\"padding-bottom: <%= customStyles.gap %>\"\r\n    <% } %>\r\n  >\r\n    <div class=\"yidun_panel-placeholder\">\r\n      <% if (mode === 'float') { %>\r\n      <iframe class=\"yidun_cover-frame\"></iframe>\r\n      <% } %>\r\n      <div class=\"yidun_bgimg\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\r\n        <% if (smsNew) { %>\r\n          <div class=\"yidun_smsbox <% if (isMobile) { %> yidun_smsbox--mobile <% } %>\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\r\n            <div class=\"yidun_smsbox-qrcode\">\r\n            <div class=\"yidun_smsbox-qrcode--img\"></div>\r\n            </div>\r\n            <div class=\"yidun_smsbox-text\">\r\n              <div class=\"yidun_smsbox-text--guide\">\r\n                <div class=\"yidun_smsbox-text--qr\"><%= langPkg['sms']['scanQrToSMS'] %></div>\r\n                <span class=\"yidun_smsbox-text--manual\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['noScanQr'] %></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"yidun_smsbox--mobile-wrapper\">\r\n              <div class=\"yidun_smsbox--mobile-guide\"><%= langPkg['sms']['clickToSMS'] %>:</div>\r\n              <div class=\"yidun_smsbox--mobile-btn\">\r\n                <a class=\"yidun_smsbox--mobile-btn-inner\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\" href=\"#\" target=\"_blank\"><%= langPkg['sms']['toSMS'] %></a>\r\n              </div>\r\n              <div class=\"yidun_smsbox-mobile--manual\">\r\n                <span class=\"yidun_smsbox-mobile--manual-btn\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['cannotJump'] %></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"yidun_smsbox-manual\">\r\n              <div class=\"yidun_smsbox-manual-wrapper\">\r\n                <div class=\"yidun_smsbox-manual--edit\">\r\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['editSMS'] %></span>\r\n                  <span class=\"yidun_smsbox-manual--edit-content\"></span>\r\n                </div>\r\n                <div class=\"yidun_smsbox-manual--send\">\r\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['sendSMSTo'] %></span>\r\n                  <span class=\"yidun_smsbox-manual--send-content\">\r\n                    <span class=\"yidun_smsbox-manual--send-content__short\"></span>\r\n                    <span class=\"yidun_smsbox-manual--send-content__backup\"></span>\r\n                  </span>\r\n                </div>\r\n                <% if (isMobile) { %>\r\n                  <span class=\"yidun_smsbox-manual--btn\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\"><%= langPkg['sms']['toSMS'] %></span>\r\n                <% } else { %>\r\n                  <span class=\"yidun_smsbox-manual--qr\" aria-label=\"<%= langPkg['sms']['scanQrToSMS'] %>\" type=\"button\"><%= langPkg['sms']['scanQrToSMS'] %></span>\r\n                <% } %>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <% } %>\r\n        <img class=\"yidun_bg-img\" alt=\"验证码背景\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\"/>\r\n        <img class=\"yidun_jigsaw\" alt=\"验证码滑块\" />\r\n        <img class=\"yidun_avoid-front\" alt=\"障碍躲避验证码方形体\" />\r\n        <canvas class=\"yidun_avoid-canvas\"></canvas>\r\n        <% for (var i in inferences) { %>\r\n          <% if (inferences.hasOwnProperty(i)) { %>\r\n          <div class=\"yidun_inference <%= 'yidun_inference--' + i %>\" draggable=\"true\">\r\n            <img class=\"yidun_inference__img\" draggable=\"false\" />\r\n            <span class=\"yidun_inference__border\"></span>\r\n          </div>\r\n          <% } %>\r\n        <% } %>\r\n        <div class=\"yidun_voice\">\r\n          <div class=\"yidun_voice__inner\">\r\n            <div class=\"yidun_audio\">\r\n              <div class=\"yidun_audio__wave\" tabindex=\"-1\"></div>\r\n              <audio class=\"yidun_audio__source\" src=\"\"></audio>\r\n              <button type=\"button\" class=\"yidun_audio__play\" aria-label=\"<%= langPkg['playVoice'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['playVoice'] %></span></button>\r\n              <button type=\"button\" class=\"yidun_audio__refresh\" aria-label=\"<%= langPkg['refresh'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['refresh'] %></span></button>\r\n            </div>\r\n            <input class=\"yidun_voice__input\" aria-label=\"<%= langPkg['enterCode'] %>\" placeholder=\"<%= langPkg['enterCode'] %>\" maxlength=\"10\" type=\"tel\" />\r\n            <div class=\"yidun_voice__btns\">\r\n              <button type=\"button\" class=\"yidun_voice__refresh\"><span class=\"yidun_voice__txt\"><%= langPkg['refresh'] %></span></button>\r\n              <div class=\"yidun_voice__right\">\r\n                <button type=\"button\" class=\"yidun_voice__back\"><span class=\"yidun_voice__txt\"><%= langPkg['back'] %></span></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"yidun_loadbox\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\r\n        <div class=\"yidun_loadbox__inner\">\r\n          <div class=\"yidun_loadicon\"></div>\r\n          <span class=\"yidun_loadtext\"><%= langPkg['loading'] %></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"yidun_top\" style=\"<% if (customStyles.executeBorderRadius === undefined) { %>border-top-right-radius: <%= customStyles.imagePanel.borderRadius %>; <% } %> <% if (customStyles.executeTop !== undefined) { %>top: <%= customStyles.executeTop %>; <% } %> <% if (customStyles.executeRight !== undefined) { %>right: <%= customStyles.executeRight %>; <% } %> <% if (customStyles.executeBorderRadius) { %>border-radius: <%= customStyles.executeBorderRadius %>; <% } %> <% if (!!customStyles.executeBackground) { %>background: <%= customStyles.executeBackground %>; <% } %>\">\r\n        <% if (feedback.enable) { %>\r\n        <a\r\n          class=\"yidun_feedback\"\r\n          href=\"<%= feedback.url + '?captchaId=' + captchaId %>\"\r\n          target=\"_blank\"\r\n          tabindex=\"0\"><span class=\"yidun_feedback_txt\"><%= langPkg['feedback'] %></span></a>\r\n        <% } %>\r\n        <div class=\"yidun_top__right\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"yidun_refresh\"\r\n            style=\"<% if (!audio && !feedback.enable) { %>margin-left: 0px; <% } %>\"><%= langPkg['refresh'] %></button>\r\n          <% if (audio) { %>\r\n          <button\r\n            type=\"button\"\r\n            class=\"yidun_top__audio\"><%= langPkg['switchToVoice'] %></button>\r\n          <% } %>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div\r\n    class=\"yidun_control\"\r\n    style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"\r\n    tabindex=\"0\"\r\n    role=\"button\">\r\n    <div class=\"yidun_slide_indicator\" style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"></div>\r\n    <div class=\"yidun_slider <% if (!isMobile) { %> yidun_slider--hover <% } %>\" style=\"width: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\">\r\n      <!-- 分支二兼容旧接口 -->\r\n      <% if (customStyles.icon.slider) { %>\r\n      <img src=\"<%= customStyles.icon.slider %>\" class=\"yidun_slider__icon\" />\r\n      <% } else if (customStyles.controlBar.slideIcon || customStyles.controlBar.slideIconSuccess || customStyles.controlBar.slideIconError || customStyles.controlBar.slideIconMoving) { %>\r\n      <span class=\"yidun_slider__icon\"></span>\r\n      <img src=\"<%= customStyles.controlBar.slideIcon %>\" class=\"yidun_slider__icon yidun_slider__icon--img\" />\r\n      <% } else { %>\r\n      <span class=\"yidun_slider__icon\"></span>\r\n      <% } %>\r\n    </div>\r\n    <div\r\n      class=\"yidun_tips\"\r\n      aria-live=\"polite\">\r\n      <i class=\"yidun_tips__before\"></i>\r\n      <div class=\"yidun_tips__content\">\r\n        <span class=\"yidun_tips__icon\"></span>\r\n        <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\r\n        <div class=\"yidun_tips__answer\">\r\n          <span class=\"yidun_tips__point\"></span>\r\n          <img class=\"yidun_tips__img\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
  }, function (B, p) {
    B["exports"] = "<div class=\"yidun_intellisense <%= 'yidun_intellisense--' + theme %> <%= 'yidun_intellisense--size-' + size %>\" style=\"display: none\">\r\n  <div\r\n    class=\"yidun_intelli-control\"\r\n    tabindex=\"0\"\r\n    aria-live=\"polite\">\r\n    <div class=\"yidun_intelli-tips\">\r\n      <div class=\"yidun_intelli-icon\">\r\n        <% if (icon.intellisenseLogo) { %>\r\n          <img src=\"<%= icon.intellisenseLogo%>\" class=\"yidun_logo\" />\r\n        <% } else { %>\r\n          <span class=\"yidun_logo\"></span>\r\n        <% } %>\r\n        <span class=\"yidun_intelli-loading\"></span>\r\n        <div class=\"yidun_ball-scale-multiple\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <span\r\n        class=\"yidun_intelli-text\"\r\n        <% if (isAndroid) { %>\r\n          aria-label=\"<%= langPkg.intellisense.longtap %>\"\r\n        <% }%>><%= langPkg.intellisense.normal %></span>\r\n    </div>\r\n    <div class=\"yidun_classic-tips\">\r\n      <span class=\"yidun_tips__icon\"></span>\r\n      <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"yidun_classic-container\">\r\n    <iframe class=\"yidun_cover-frame\"></iframe>\r\n    <div class=\"yidun_classic-wrapper\" style=\"display: <%= classicVisible ? 'block' : 'none' %>\"></div>\r\n  </div>\r\n</div>\r\n";
  }, function (B, p) {
    B['exports'] = "<div\n  class=\"<%= 'yidun_popup--' + theme %> yidun_popup <%= 'yidun_popup--size-' + size %> <%= topIsNotAuto || bottomIsNotAuto ? '' : 'yidun_popup--auto' %> <%= appendTo ? 'yidun_popup--append' : '' %> <% if (isRtlLang) { %> yidun_popup--rtl <% } %> <% if (disableFocusVisible) { %> yidun_popup--disable-focus-outline <% } %>\"\n  style=\"display: none;position: <%= popupStyles.position %>\">\n  <!-- iframe用于遮挡页面中object、embed、select等元素 -->\n  <iframe class=\"yidun_cover-frame\"></iframe>\n  <div\n    class=\"yidun_popup__mask\"\n    style=\"opacity: <%= popupStyles.opacity %>;filter: alpha(opacity=<%= popupStyles.opacity * 100 %>);\"></div>\n  <div class=\"yidun_modal__wrap\">\n    <div class=\"yidun_modal__subwrap\">\n      <% if (bottomIsNotAuto) { %>\n      <span class=\"yidun_modal__sibling\"></span>\n      <% } %>\n      <div\n        class=\"yidun_modal\"\n        style=\"<% if (topIsNotAuto) { %>top: <%= popupStyles.top %>; <% } %><% if (bottomIsNotAuto) { %>vertical-align:bottom;bottom: <%= popupStyles.bottom %>; <% } %><% if (widthIsNotAuto) { %>width: <%= width %>; <% } %><% if (popupStyles.radius) { %>border-radius: <%= popupStyles.radius %>; <% } %><% if (popupStyles.borderColor) { %>border-color: <%= popupStyles.borderColor %>; <% } %><% if (popupStyles.background) { %>background: <%= popupStyles.background %>; <% } %><% if (popupStyles.paddingTop) { %>padding-top: <%= popupStyles.paddingTop %>; <% } %><% if (popupStyles.paddingBottom) { %>padding-bottom: <%= popupStyles.paddingBottom %>; <% } %>\"\n        tabindex=\"-1\">\n        <div\n          class=\"yidun_modal__header\"\n          style=\"height: <%= popupStyles.capBarHeight %>; <% if (popupStyles.capBarTextAlign) { %>text-align: <%= popupStyles.capBarTextAlign %>; <% } %><% if (popupStyles.capBarBorderColor) { %>border-bottom-color: <%= popupStyles.capBarBorderColor %>; <% } %>\">\n            <span class=\"yidun_modal__before\"></span>\n            <span class=\"yidun_modal__title\" style=\"<% if (popupStyles.capBarTextColor) { %>color: <%= popupStyles.capBarTextColor %>; <% } %><% if (popupStyles.capBarTextSize) { %>font-size: <%= popupStyles.capBarTextSize %>; <% } %><% if (popupStyles.capBarTextWeight) { %>font-weight: <%= popupStyles.capBarTextWeight %>; <% } %>\"><%= langPkg['popupTitle'] %></span>\n          <% if (!enableClose && !hideCloseBtn) { %>\n            <button\n              type=\"button\"\n              class=\"yidun_modal__close\">\n              <span class=\"yidun_icon-close\"><%= langPkg['close']%></span>\n            </button>\n          <% } %>\n        </div>\n        <div\n          class=\"yidun_modal__body\"\n          style=\"padding: <%= popupStyles.capPadding %>px; <% if (popupStyles.capPaddingTop !== undefined) { %>padding-top: <%= popupStyles.capPaddingTop %>px; <% } %> <% if (popupStyles.capPaddingRight !== undefined) { %>padding-right: <%= popupStyles.capPaddingRight %>px; <% } %> <% if (popupStyles.capPaddingBottom !== undefined) { %>padding-bottom: <%= popupStyles.capPaddingBottom %>px; <% } %> <% if (popupStyles.capPaddingLeft !== undefined) { %>padding-left: <%= popupStyles.capPaddingLeft %>px; <% } %>\">\n          <captcha-core :intellisense=\"intellisense\" :autoWidth=\"widthIsNotAuto\" :enableColor=\"false\" :onWidthGeted=\"onWidthGetedForCore\"></captcha-core>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  }, function (B, p) {
    function m(a, D) {
      for (var X in D) a["setAttribute"](X, D[X]);
    }

    function v(a, D) {
      a['onload'] = function () {
        this["onerror"] = this['onload'] = null, D(null, a);
      }, a["onerror"] = function () {
        this["onerror"] = this["onload"] = null, D(new Error("Failed to load " + this["src"]), a);
      };
    }

    function R(a, D) {
      a["onreadystatechange"] = function () {
        "complete" != this["readyState"] && 'loaded' != this["readyState"] || (this['onreadystatechange'] = null, D(null, a));
      };
    }

    B["exports"] = function (a, D, X) {
      var O = document["head"] || document["getElementsByTagName"]("head")[0],
          K = document['createElement']('script');
      "function" == typeof D && (X = D, D = {}), D = D || {}, X = X || function () {}, K["type"] = D["type"] || 'text/javascript', K["charset"] = D["charset"] || "utf8", K['async'] = !('async' in D) || !!D["async"], K["src"] = a, D['attrs'] && m(K, D["attrs"]), D["text"] && (K["text"] = '' + D['text']);
      var F = 'onload' in K ? v : R;
      F(K, X), K['onload'] || v(K, X), O['appendChild'](K);
    };
  }]);
})();
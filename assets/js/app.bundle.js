!function(e) {
    var t = {};
    function s(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
    }
    s.m = e, s.c = t, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, s.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return s.d(t, "a", t), t;
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = "./js/app.js");
}({
    "./js/app.js": function(e, t, s) {
        "use strict";
        var n, o = s("./scss/app.scss");
        (n = o) && n.__esModule;
        s("./js/modules/_main.js"), s("./js/modules/_header.js");
    },
    "./js/modules/_header.js": function(e, t, s) {
        "use strict";
        $(function() {
            console.log("header");
        });
    },
    "./js/modules/_main.js": function(e, t, s) {
        "use strict";
        var n;
        (n = jQuery)(document).ready(function() {
            n.mobile && (n("#myCarousel, #myCarousel2, #agnosia-bootstrap-carousel, #carousel-example-generic").swiperight(function() {
                n(this).carousel("prev");
            }), n("#myCarousel, #myCarousel2, #agnosia-bootstrap-carousel, #carousel-example-generic").swipeleft(function() {
                n(this).carousel("next");
            }));
        }), n(document).ready(function() {
            n(".smoothscroll").click(function() {
                var e = n(this.hash), t = n("body").css("padding-top");
                if (t && (t = t.replace("px", "")), (e = e.length ? e : n("[name=" + this.hash.slice(1) + "]")).length) return n("html,body").animate({
                    scrollTop: e.offset().top - t
                }, 1e3), !1;
            }), n(document).ready(function() {
                n("#xsbf-after-content").wrapAll('<div id="xsbf-after-content-wrapper" />'), n("#xsbf-entry-content").append(n("#xsbf-after-content-wrapper"));
            });
        });
    },
    "./scss/app.scss": function(e, t) {}
});
/* clarity-js v0.7.0: https://github.com/microsoft/clarity (License: MIT) */
!function () {
    "use strict";
    var t = Object.freeze({
        __proto__: null, get start() {
            return Dn
        }, get stop() {
            return Cn
        }, get parse() {
            return jn
        }, get getId() {
            return zn
        }, get add() {
            return Ln
        }, get update() {
            return An
        }, get sameorigin() {
            return Rn
        }, get iframe() {
            return Hn
        }, get hashText() {
            return Xn
        }, get getNode() {
            return qn
        }, get getValue() {
            return Pn
        }, get get() {
            return Un
        }, get lookup() {
            return Bn
        }, get has() {
            return Vn
        }, get updates() {
            return Fn
        }
    }), e = Object.freeze({
        __proto__: null, get track() {
            return wa
        }, get start() {
            return Ma
        }, get queue() {
            return Sa
        }, get stop() {
            return Na
        }
    }), n = Object.freeze({
        __proto__: null, get data() {
            return Wa
        }, get keys() {
            return Xa
        }, get fragments() {
            return Ua
        }, get start() {
            return Ba
        }, get clone() {
            return Va
        }, get compute() {
            return Fa
        }, get reset() {
            return Ja
        }, get update() {
            return Ga
        }, get stop() {
            return Za
        }
    }), a = Object.freeze({
        __proto__: null, get data() {
            return Ya
        }, get start() {
            return er
        }, get check() {
            return nr
        }, get trigger() {
            return ar
        }, get compute() {
            return rr
        }, get stop() {
            return ir
        }
    }), r = Object.freeze({
        __proto__: null, get data() {
            return or
        }, get updates() {
            return ur
        }, get start() {
            return cr
        }, get stop() {
            return sr
        }, get log() {
            return lr
        }, get compute() {
            return dr
        }, get reset() {
            return fr
        }
    }), i = Object.freeze({
        __proto__: null, get data() {
            return hr
        }, get callbacks() {
            return pr
        }, get start() {
            return gr
        }, get stop() {
            return mr
        }, get metadata() {
            return br
        }, get id() {
            return yr
        }, get consent() {
            return wr
        }, get clear() {
            return kr
        }, get save() {
            return Er
        }
    }), o = Object.freeze({
        __proto__: null, get data() {
            return Cr
        }, get start() {
            return Ir
        }, get stop() {
            return jr
        }, get envelope() {
            return zr
        }
    }), u = {
        projectId: null,
        delay: 1e3,
        lean: !1,
        track: !0,
        content: !0,
        drop: [],
        mask: [],
        unmask: [],
        regions: [],
        extract: [],
        cookies: [],
        fraud: !0,
        checksum: [],
        report: null,
        upload: null,
        fallback: null,
        upgrade: null,
        action: null
    };

    function c(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }

    var s = 0;

    function l(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
        return Math.max(Math.round(e - s), 0)
    }

    var d = "0.7.0";

    function f(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }

    var h = /\S/gi, p = !0, v = null, g = null, m = null;

    function b(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function (t) {
                            var e = -1, n = 0, a = !1, r = !1, i = !1, o = null;
                            if (p && null === v) try {
                                v = new RegExp("\\p{N}", "gu"), g = new RegExp("\\p{L}", "gu"), m = new RegExp("\\p{Sc}", "gu")
                            } catch (t) {
                                p = !1
                            }
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = p && null !== m ? s.match(m) ? s : s.replace(g, "▪").replace(v, "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return k(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                        return a ? function (t) {
                            var e = t.trim();
                            if (e.length > 0) {
                                var n = e[0], a = t.indexOf(n), r = t.substr(0, a), i = t.substr(a + e.length);
                                return "".concat(r).concat(e.length.toString(36)).concat(i)
                            }
                            return t
                        }(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return k(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
        }
        return t
    }

    function y(t) {
        var e = u.drop;
        if (e && e.length > 0 && t && t.indexOf("?") > 0) {
            var n = t.split("?"), a = n[0], r = n[1];
            return a + "?" + r.split("&").map((function (t) {
                return e.some((function (e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function w(t) {
        return t.replace(h, "•")
    }

    function k(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    var E = null, O = null, x = !1;

    function M() {
        x && (E = {
            time: l(),
            event: 4,
            data: {
                visible: O.visible,
                docWidth: O.docWidth,
                docHeight: O.docHeight,
                screenWidth: O.screenWidth,
                screenHeight: O.screenHeight,
                scrollX: O.scrollX,
                scrollY: O.scrollY,
                pointerX: O.pointerX,
                pointerY: O.pointerY,
                activityTime: O.activityTime
            }
        }), O = O || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function S(t, e, n) {
        switch (t) {
            case 8:
                O.docWidth = e, O.docHeight = n;
                break;
            case 11:
                O.screenWidth = e, O.screenHeight = n;
                break;
            case 10:
                O.scrollX = e, O.scrollY = n;
                break;
            default:
                O.pointerX = e, O.pointerY = n
        }
        x = !0
    }

    function N(t) {
        O.activityTime = t
    }

    function _(t, e) {
        O.visible = "visible" === e ? 1 : 0, O.visible || N(t), x = !0
    }

    function T() {
        x && tr(4)
    }

    var D = Object.freeze({
        __proto__: null, get state() {
            return E
        }, start: function () {
            x = !1, M()
        }, reset: M, track: S, activity: N, visibility: _, compute: T, stop: function () {
            M()
        }
    }), C = null;

    function I(t, e) {
        Qr() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (C = {
            key: t,
            value: e
        }, tr(24))
    }

    var j, z = null, L = null;

    function A(t) {
        t in z || (z[t] = 0), t in L || (L[t] = 0), z[t]++, L[t]++
    }

    function R(t, e) {
        null !== e && (t in z || (z[t] = 0), t in L || (L[t] = 0), z[t] += e, L[t] += e)
    }

    function H(t, e) {
        null !== e && !1 === isNaN(e) && (t in z || (z[t] = 0), (e > z[t] || 0 === z[t]) && (L[t] = e, z[t] = e))
    }

    function Y(t, e, n) {
        return window.setTimeout(Rr(t), e, n)
    }

    function W(t) {
        return window.clearTimeout(t)
    }

    var X = 0, q = 0, P = null;

    function U() {
        P && W(P), P = Y(B, q), X = l()
    }

    function B() {
        var t = l();
        j = {gap: t - X}, tr(25), j.gap < 3e5 ? P = Y(B, q) : Gr && (I("clarity", "suspend"), pi(), ["mousemove", "touchstart"].forEach((function (t) {
            return Yr(document, t, ti)
        })), ["resize", "scroll", "pageshow"].forEach((function (t) {
            return Yr(window, t, ti)
        })))
    }

    var V = Object.freeze({
        __proto__: null, get data() {
            return j
        }, start: function () {
            q = 6e4, X = 0
        }, reset: U, stop: function () {
            W(P), X = 0, q = 0
        }
    }), F = null;

    function J(t, e) {
        if (t in F) {
            var n = F[t], a = n[n.length - 1];
            e - a[0] > 100 ? F[t].push([e, 0]) : a[1] = e - a[0]
        } else F[t] = [[e, 0]]
    }

    function G() {
        tr(36)
    }

    function Z() {
        F = {}
    }

    var K = Object.freeze({
        __proto__: null, get data() {
            return F
        }, start: function () {
            F = {}
        }, stop: function () {
            F = {}
        }, track: J, compute: G, reset: Z
    }), Q = null;

    function $(t) {
        Qr() && u.lean && (u.lean = !1, Q = {key: t}, Er(), u.upgrade && u.upgrade(t), tr(3))
    }

    var tt = Object.freeze({
        __proto__: null, get data() {
            return Q
        }, start: function () {
            !u.lean && u.upgrade && u.upgrade("Config"), Q = null
        }, upgrade: $, stop: function () {
            Q = null
        }
    }), et = null;

    function nt(t, e) {
        rt(t, "string" == typeof e ? [e] : e)
    }

    function at(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = null), rt("userId", [t]), rt("sessionId", [e]), rt("pageId", [n])
    }

    function rt(t, e) {
        if (Qr() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in et ? et[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            et[t] = n
        }
    }

    function it() {
        tr(34)
    }

    function ot() {
        et = {}
    }

    function ut(t, e, n, a) {
        return new (n || (n = Promise))((function (r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(o, u)
            }

            c((a = a.apply(t, e || [])).next())
        }))
    }

    function ct(t, e) {
        var n, a, r, i, o = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function u(i) {
            return function (u) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return o.label++, {value: i[1], done: !1};
                            case 5:
                                o.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < r[1]) {
                                    o.label = r[1], r = i;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(i);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, u])
            }
        }
    }

    var st = "CompressionStream" in window;

    function lt(t) {
        return ut(this, void 0, void 0, (function () {
            var e, n;
            return ct(this, (function (a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), st ? (e = new ReadableStream({
                            start: function (e) {
                                return ut(this, void 0, void 0, (function () {
                                    return ct(this, (function (n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, dt(e)]) : [3, 2];
                    case 1:
                        return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function dt(t) {
        return ut(this, void 0, void 0, (function () {
            var e, n, a, r, i;
            return ct(this, (function (o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }

    var ft = [D, r, Object.freeze({
        __proto__: null, get data() {
            return et
        }, start: function () {
            ot()
        }, set: nt, identify: at, compute: it, reset: ot, stop: function () {
            ot()
        }
    }), a, K, i, o, e, V, tt, n];

    function ht() {
        z = {}, L = {}, A(5), ft.forEach((function (t) {
            return Rr(t.start)()
        }))
    }

    function pt() {
        ft.slice().reverse().forEach((function (t) {
            return Rr(t.stop)()
        })), z = {}, L = {}
    }

    function vt() {
        it(), T(), dr(), tr(0), G(), rr(), Fa()
    }

    var gt, mt = [];

    function bt(t, e, n) {
        u.fraud && null !== t && n && n.length >= 5 && (gt = {
            id: t,
            target: e,
            checksum: f(n, 24)
        }, mt.indexOf(gt.checksum) < 0 && (mt.push(gt.checksum), La(41)))
    }

    var yt = "load,active,fixed,visible,focus,show,collaps,animat".split(","), wt = {};

    function kt(t, e) {
        var n = t.attributes, a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r), o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function (t) {
                        return Et(t)
                    })).join(".") : null;
                if (u && u.length > 0) if (0 === e) {
                    var c = "".concat(function (t) {
                        for (var e = t.split(">"), n = 0; n < e.length; n++) {
                            var a = e[n].indexOf("~"), r = e[n].indexOf(".");
                            e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                        }
                        return e.join(">")
                    }(a)).concat(t.tag).concat(".").concat(u);
                    c in wt || (wt[c] = []), wt[c].indexOf(t.id) < 0 && wt[c].push(t.id), i = "".concat(c).concat("~").concat(wt[c].indexOf(t.id))
                } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && Et(o) ? "".concat(function (t) {
                    var e = t.lastIndexOf("*S"), n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function Et(t) {
        if (!t) return !1;
        if (yt.some((function (e) {
            return t.toLowerCase().indexOf(e) >= 0
        }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }

    var Ot = {}, xt = [], Mt = null, St = null, Nt = null;

    function _t() {
        Ot = {}, xt = [], Mt = null, St = null
    }

    function Tt(t, e) {
        return void 0 === e && (e = 0), ut(this, void 0, void 0, (function () {
            var n, a, r;
            return ct(this, (function (i) {
                for (n = 0, a = xt; n < a.length; n++) if (a[n].task === t) return [2];
                return r = new Promise((function (n) {
                    xt[1 === e ? "unshift" : "push"]({task: t, resolve: n, id: yr()})
                })), null === Mt && null === St && Dt(), [2, r]
            }))
        }))
    }

    function Dt() {
        var t = xt.shift();
        t && (Mt = t, t.task().then((function () {
            t.id === yr() && (t.resolve(), Mt = null, Dt())
        })).catch((function (e) {
            t.id === yr() && (e && Ha(0, 1, e.name, e.message, e.stack), Mt = null, Dt())
        })))
    }

    function Ct(t) {
        var e = Lt(t);
        return e in Ot ? performance.now() - Ot[e].start > Ot[e].yield ? 0 : 1 : 2
    }

    function It(t) {
        Ot[Lt(t)] = {start: performance.now(), calls: 0, yield: 30}
    }

    function jt(t) {
        var e = performance.now(), n = Lt(t), a = e - Ot[n].start;
        R(t.cost, a), A(5), Ot[n].calls > 0 && R(4, a)
    }

    function zt(t) {
        return ut(this, void 0, void 0, (function () {
            var e, n;
            return ct(this, (function (a) {
                switch (a.label) {
                    case 0:
                        return (e = Lt(t)) in Ot ? (jt(t), n = Ot[e], [4, At()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(), function (t) {
                            var e = Lt(t);
                            if (Ot && Ot[e]) {
                                var n = Ot[e].calls, a = Ot[e].yield;
                                It(t), Ot[e].calls = n + 1, Ot[e].yield = a
                            }
                        }(t), a.label = 2;
                    case 2:
                        return [2, e in Ot ? 1 : 2]
                }
            }))
        }))
    }

    function Lt(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function At() {
        return ut(this, void 0, void 0, (function () {
            return ct(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return St ? [4, St] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function (t) {
                            Ht(t, {timeout: 5e3})
                        }))]
                }
            }))
        }))
    }

    var Rt, Ht = window.requestIdleCallback || function (t, e) {
        var n = performance.now(), a = new MessageChannel, r = a.port1, i = a.port2;
        r.onmessage = function (a) {
            var r = performance.now(), o = r - n, u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function () {
                i.postMessage(r)
            })); else {
                var c = o > e.timeout;
                t({
                    didTimeout: c, timeRemaining: function () {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function () {
            i.postMessage(performance.now())
        }))
    };

    function Yt(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), ut(this, void 0, void 0, (function () {
            var a, r, i, o, c, s, d, f, h, p, v, g, m, y, w, k, E, O, x, M, _, T;
            return ct(this, (function (D) {
                switch (D.label) {
                    case 0:
                        switch (a = n || l(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 5:
                            case 6:
                                return [3, 3]
                        }
                        return [3, 10];
                    case 1:
                        return i = Rt, r.push(i.width), r.push(i.height), S(t, i.width, i.height), Sa(r), [3, 10];
                    case 2:
                        for (o = 0, c = Zn; o < c.length; o++) s = c[o], (r = [s.time, 7]).push(s.data.id), r.push(s.data.interaction), r.push(s.data.visibility), r.push(s.data.name), Sa(r);
                        return ca(), [3, 10];
                    case 3:
                        if (2 === Ct(e)) return [3, 10];
                        if (!((d = Fn()).length > 0)) return [3, 9];
                        f = 0, h = d, D.label = 4;
                    case 4:
                        return f < h.length ? (p = h[f], 0 !== (v = Ct(e)) ? [3, 6] : [4, zt(e)]) : [3, 8];
                    case 5:
                        v = D.sent(), D.label = 6;
                    case 6:
                        if (2 === v) return [3, 8];
                        for (g = p.data, m = p.metadata.active, y = p.metadata.suspend, w = p.metadata.privacy, k = function (t) {
                            var e = t.metadata.privacy;
                            return "*T" === t.data.tag && !(0 === e || 1 === e)
                        }(p), E = 0, O = m ? ["tag", "attributes", "value"] : ["tag"]; E < O.length; E++) if (g[x = O[E]]) switch (x) {
                            case "tag":
                                M = Wt(p), _ = k ? -1 : 1, r.push(p.id * _), p.parent && m && r.push(p.parent), p.previous && m && r.push(p.previous), r.push(y ? "*M" : g[x]), M && 2 === M.length && r.push("".concat("#").concat(Xt(M[0]), ".").concat(Xt(M[1])));
                                break;
                            case "attributes":
                                for (T in g[x]) void 0 !== g[x][T] && r.push(qt(T, g[x][T], w));
                                break;
                            case "value":
                                bt(p.metadata.fraud, p.id, g[x]), r.push(b(g[x], g.tag, w, k))
                        }
                        D.label = 7;
                    case 7:
                        return f++, [3, 4];
                    case 8:
                        6 === t && N(a), Sa(function (t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++) if ("string" == typeof t[i]) {
                                var o = t[i], u = n[o] || -1;
                                u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                            } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !u.lean), D.label = 9;
                    case 9:
                        return [3, 10];
                    case 10:
                        return [2]
                }
            }))
        }))
    }

    function Wt(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = qn(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Xt(t) {
        return t.toString(36)
    }

    function qt(t, e, n) {
        return "".concat(t, "=").concat(b(e, t, n))
    }

    function Pt() {
        Rt = null
    }

    function Ut() {
        var t = document.body, e = document.documentElement, n = t ? t.clientWidth : null, a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null, i = e ? e.clientWidth : null, o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null, c = Math.max(n, a, r, i, o, u), s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null, d = t ? t.offsetHeight : null, f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null, p = e ? e.offsetHeight : null, v = Math.max(s, l, d, f, h, p);
        null !== Rt && c === Rt.width && v === Rt.height || null === c || null === v || (Rt = {
            width: c,
            height: v
        }, Yt(8))
    }

    var Bt = [];

    function Vt(t) {
        var e = sa(t);
        if (e) {
            var n = e.value, a = n && n.length >= 5 && u.fraud ? f(n, 24) : "";
            Bt.push({
                time: l(t),
                event: 42,
                data: {target: sa(t), type: e.type, value: n, checksum: a}
            }), Tt(da.bind(this, 42))
        }
    }

    function Ft() {
        Bt = []
    }

    function Jt(t) {
        var e = {x: 0, y: 0};
        if (t && t.offsetParent) do {
            var n = t.offsetParent, a = null === n ? Hn(t.ownerDocument) : null;
            e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
        } while (t);
        return e
    }

    var Gt = ["input", "textarea", "radio", "button", "canvas"], Zt = [];

    function Kt(t) {
        Yr(t, "click", Qt.bind(this, 9, t), !0)
    }

    function Qt(t, e, n) {
        var a = Hn(e), r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Jt(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = sa(n), s = function (t) {
            for (; t && t !== document;) {
                if (t.nodeType === Node.ELEMENT_NODE) {
                    var e = t;
                    if ("A" === e.tagName) return e
                }
                t = t.parentNode
            }
            return null
        }(c), d = function (t) {
            var e = null, n = document.documentElement;
            if ("function" == typeof t.getBoundingClientRect) {
                var a = t.getBoundingClientRect();
                a && a.width > 0 && a.height > 0 && (e = {
                    x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                    y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                    w: Math.floor(a.width),
                    h: Math.floor(a.height)
                })
            }
            return e
        }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Zt.push({
            time: l(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: te(c),
                context: ee(s),
                text: $t(c),
                link: s ? s.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), Tt(da.bind(this, t)))
    }

    function $t(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25))
        }
        return e
    }

    function te(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Gt.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function ee(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function ne() {
        Zt = []
    }

    var ae = [];

    function re(t, e) {
        ae.push({time: l(e), event: 38, data: {target: sa(e), action: t}}), Tt(da.bind(this, 38))
    }

    function ie() {
        ae = []
    }

    var oe = null, ue = [];

    function ce(t) {
        var e = sa(t), n = Un(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {target: e, value: a};
            ue.length > 0 && ue[ue.length - 1].data.target === r.target && ue.pop(), ue.push({
                time: l(t),
                event: 27,
                data: r
            }), W(oe), oe = Y(se, 1e3, 27)
        }
    }

    function se(t) {
        Tt(da.bind(this, t))
    }

    function le() {
        ue = []
    }

    var de, fe = [], he = null;

    function pe(t, e, n) {
        var a = Hn(e), r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Jt(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && ge({time: l(n), event: t, data: {target: sa(n), x: i, y: o}})
    }

    function ve(t, e, n) {
        var a = Hn(e), r = a ? a.contentDocument.documentElement : document.documentElement, i = n.changedTouches,
            o = l(n);
        if (i) for (var u = 0; u < i.length; u++) {
            var c = i[u], s = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
            s = s && a ? s + Math.round(a.offsetLeft) : s, d = d && a ? d + Math.round(a.offsetTop) : d, null !== s && null !== d && ge({
                time: o,
                event: t,
                data: {target: sa(n), x: s, y: d}
            })
        }
    }

    function ge(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = fe.length, n = e > 1 ? fe[e - 2] : null;
                n && function (t, e) {
                    var n = t.data.x - e.data.x, a = t.data.y - e.data.y, r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time, o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && fe.pop(), fe.push(t), W(he), he = Y(me, 500, t.event);
                break;
            default:
                fe.push(t), me(t.event)
        }
    }

    function me(t) {
        Tt(da.bind(this, t))
    }

    function be() {
        fe = []
    }

    function ye() {
        var t = document.documentElement;
        de = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, da(11)
    }

    function we() {
        de = null
    }

    var ke = [], Ee = null;

    function Oe(t) {
        void 0 === t && (t = null);
        var e = window, n = document.documentElement, a = t ? sa(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Hn(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = {time: l(t), event: 10, data: {target: a, x: i, y: o}};
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var c = ke.length, s = c > 1 ? ke[c - 2] : null;
            s && function (t, e) {
                var n = t.data.x - e.data.x, a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(s, u) && ke.pop(), ke.push(u), W(Ee), Ee = Y(xe, 500, 10)
        }
    }

    function xe(t) {
        Tt(da.bind(this, t))
    }

    var Me = null, Se = null, Ne = null;

    function _e(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = Me.start ? Me.start : null;
            null !== Se && null !== Me.start && n !== e.anchorNode && (W(Ne), Te(21)), Me = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, Se = e, W(Ne), Ne = Y(Te, 500, 21)
        }
    }

    function Te(t) {
        Tt(da.bind(this, t))
    }

    function De() {
        Se = null, Me = {start: 0, startOffset: 0, end: 0, endOffset: 0}
    }

    var Ce, Ie, je = [];

    function ze(t) {
        je.push({time: l(t), event: 39, data: {target: sa(t)}}), Tt(da.bind(this, 39))
    }

    function Le() {
        je = []
    }

    function Ae(t) {
        Ce = {name: t.type}, da(26, l(t)), pi()
    }

    function Re() {
        Ce = null
    }

    function He(t) {
        void 0 === t && (t = null), Ie = {visible: "visibilityState" in document ? document.visibilityState : "default"}, da(28, l(t))
    }

    function Ye() {
        Ie = null
    }

    function We(t) {
        !function (t) {
            var e = Hn(t);
            Yr(e ? e.contentWindow : t === document ? window : t, "scroll", Oe, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Kt(t), function (t) {
            Yr(t, "cut", re.bind(this, 0), !0), Yr(t, "copy", re.bind(this, 1), !0), Yr(t, "paste", re.bind(this, 2), !0)
        }(t), function (t) {
            Yr(t, "mousedown", pe.bind(this, 13, t), !0), Yr(t, "mouseup", pe.bind(this, 14, t), !0), Yr(t, "mousemove", pe.bind(this, 12, t), !0), Yr(t, "wheel", pe.bind(this, 15, t), !0), Yr(t, "dblclick", pe.bind(this, 16, t), !0), Yr(t, "touchstart", ve.bind(this, 17, t), !0), Yr(t, "touchend", ve.bind(this, 18, t), !0), Yr(t, "touchmove", ve.bind(this, 19, t), !0), Yr(t, "touchcancel", ve.bind(this, 20, t), !0)
        }(t), function (t) {
            Yr(t, "input", ce, !0)
        }(t), function (t) {
            Yr(t, "selectstart", _e.bind(this, t), !0), Yr(t, "selectionchange", _e.bind(this, t), !0)
        }(t), function (t) {
            Yr(t, "change", Vt, !0)
        }(t), function (t) {
            Yr(t, "submit", ze, !0)
        }(t))
    }

    var Xe = Object.freeze({
        __proto__: null, start: function () {
            fa = [], pa(), ne(), ie(), be(), le(), Yr(window, "resize", ye), ye(), Yr(document, "visibilitychange", He), He(), ke = [], Oe(), De(), Ft(), Le(), Yr(window, "pagehide", Ae)
        }, stop: function () {
            fa = [], pa(), ne(), ie(), W(he), fe.length > 0 && me(fe[fe.length - 1].event), W(oe), le(), we(), Ye(), W(Ee), ke = [], De(), W(Ne), Ft(), Le(), Re()
        }, observe: We
    }), qe = /[^0-9\.]/g;

    function Pe(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e], r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    lr(5, t[a]), lr(8, t.creator), lr(18, t.headline);
                    break;
                case "product":
                    lr(5, t[a]), lr(10, t.name), lr(12, t.sku), t.brand && lr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (H(11, Ue(t.ratingValue, 100)), H(18, Ue(t.bestRating)), H(19, Ue(t.worstRating))), H(12, Ue(t.ratingCount)), H(17, Ue(t.reviewCount));
                    break;
                case "person":
                    lr(8, t.name);
                    break;
                case "offer":
                    lr(7, t.availability), lr(14, t.itemCondition), lr(13, t.priceCurrency), lr(12, t.sku), H(13, Ue(t.price));
                    break;
                case "brand":
                    lr(6, t.name)
            }
            null !== r && "object" == typeof r && Pe(r)
        }
    }

    function Ue(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(qe, "")) * e)
        }
        return null
    }

    var Be = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"], Ve = /[\r\n]+/g;

    function Fe(e, n) {
        var a, r = null;
        if (2 === n && !1 === Vn(e)) return r;
        0 !== n && e.nodeType === Node.TEXT_NODE && e.parentElement && "STYLE" === e.parentElement.tagName && (e = e.parentNode);
        var i = !1 === Vn(e) ? "add" : "update", o = e.parentElement ? e.parentElement : null,
            u = e.ownerDocument !== document;
        switch (e.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                o = u && e.parentNode ? Hn(e.parentNode) : o;
                var c = e, s = {
                    tag: (u ? "iframe:" : "") + "*D",
                    attributes: {name: c.name, publicId: c.publicId, systemId: c.systemId}
                };
                t[i](e, o, s, n);
                break;
            case Node.DOCUMENT_NODE:
                e === document && jn(document), Je(e);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var l = e;
                if (l.host) if (jn(l), "function" === typeof l.constructor && l.constructor.toString().indexOf("[native code]") >= 0) {
                    Je(l);
                    for (var d = "", f = 0, h = ("adoptedStyleSheets" in l ? l.adoptedStyleSheets : []); f < h.length; f++) {
                        d += Ze(h[f])
                    }
                    var p = {tag: "*S", attributes: {style: d}};
                    t[i](e, l.host, p, n)
                } else t[i](e, l.host, {tag: "*P", attributes: {}}, n);
                break;
            case Node.TEXT_NODE:
                if (o = o || e.parentNode, "update" === i || o && Vn(o) && "STYLE" !== o.tagName) {
                    var v = {tag: "*T", value: e.nodeValue};
                    t[i](e, o, v, n)
                }
                break;
            case Node.ELEMENT_NODE:
                var g = e, m = g.tagName, b = function (t) {
                    var e = {}, n = t.attributes;
                    if (n && n.length > 0) for (var a = 0; a < n.length; a++) {
                        var r = n[a].name;
                        Be.indexOf(r) < 0 && (e[r] = n[a].value)
                    }
                    "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                    return e
                }(g);
                switch (o = e.parentElement ? e.parentElement : e.parentNode ? e.parentNode : null, "http://www.w3.org/2000/svg" === g.namespaceURI && (m = "svg:" + m), m) {
                    case "HTML":
                        o = u && o ? Hn(o) : null;
                        var y = {tag: (u ? "iframe:" : "") + m, attributes: b};
                        t[i](e, o, y, n);
                        break;
                    case "SCRIPT":
                        if ("type" in b && "application/ld+json" === b.type) try {
                            Pe(JSON.parse(g.text.replace(Ve, "")))
                        } catch (t) {
                        }
                        break;
                    case "NOSCRIPT":
                        break;
                    case "META":
                        var w = "property" in b ? "property" : "name" in b ? "name" : null;
                        if (w && "content" in b) {
                            var k = b.content;
                            switch (b[w]) {
                                case "og:title":
                                    lr(20, k);
                                    break;
                                case "og:type":
                                    lr(19, k);
                                    break;
                                case "generator":
                                    lr(21, k)
                            }
                        }
                        break;
                    case "HEAD":
                        var E = {tag: m, attributes: b},
                            O = u && (null === (a = e.ownerDocument) || void 0 === a ? void 0 : a.location) ? e.ownerDocument.location : location;
                        E.attributes["*B"] = O.protocol + "//" + O.hostname + O.pathname, t[i](e, o, E, n);
                        break;
                    case "BASE":
                        var x = Un(e.parentElement);
                        if (x) {
                            var M = document.createElement("a");
                            M.href = b.href, x.data.attributes["*B"] = M.protocol + "//" + M.hostname + M.pathname
                        }
                        break;
                    case "STYLE":
                        var S = {tag: m, attributes: b, value: Ge(g)};
                        t[i](e, o, S, n);
                        break;
                    case "IFRAME":
                        var N = e, _ = {tag: m, attributes: b};
                        Rn(N) && (!function (t) {
                            !1 === Vn(t) && Yr(t, "load", hn.bind(this, t, "childList"), !0)
                        }(N), _.attributes["*O"] = "true", N.contentDocument && N.contentWindow && "loading" !== N.contentDocument.readyState && (r = N.contentDocument)), t[i](e, o, _, n);
                        break;
                    default:
                        var T = {tag: m, attributes: b};
                        g.shadowRoot && (r = g.shadowRoot), t[i](e, o, T, n)
                }
        }
        return r
    }

    function Je(t) {
        Vn(t) || (!function (t) {
            try {
                var e = c("MutationObserver"), n = e in window ? new window[e](Rr(cn)) : null;
                n && (n.observe(t, {attributes: !0, childList: !0, characterData: !0, subtree: !0}), Qe.push(n))
            } catch (t) {
                Ha(2, 0, t ? t.name : null)
            }
        }(t), We(t))
    }

    function Ge(t) {
        var e = t.textContent ? t.textContent.trim() : "", n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Ze(t.sheet)), e
    }

    function Ze(t) {
        var e = "", n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Ha(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function Ke(t, e, n) {
        return ut(this, void 0, void 0, (function () {
            var a, r, i, o, u;
            return ct(this, (function (c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = Ct(e)) ? [3, 3] : [4, zt(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = Fe(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }

    var Qe = [], $e = [], tn = null, en = null, nn = null, an = [], rn = null, on = null, un = {};

    function cn(t) {
        var e = l();
        J(6, e), $e.push({time: e, mutations: t}), Tt(sn, 1).then((function () {
            Y(Ut), Rr(ra)()
        }))
    }

    function sn() {
        return ut(this, void 0, void 0, (function () {
            var t, e, n, a, r, i, o, u, c;
            return ct(this, (function (s) {
                switch (s.label) {
                    case 0:
                        It(t = {id: yr(), cost: 3}), s.label = 1;
                    case 1:
                        if (!($e.length > 0)) return [3, 8];
                        e = $e.shift(), n = 0, a = e.mutations, s.label = 2;
                    case 2:
                        return n < a.length ? (r = a[n], 0 !== (i = Ct(t)) ? [3, 4] : [4, zt(t)]) : [3, 6];
                    case 3:
                        i = s.sent(), s.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        switch (o = r.target, u = function (t, e) {
                            var n = t.target ? Un(t.target.parentNode) : null;
                            if (n && "HTML" !== n.data.tag) {
                                var a = l() > on, r = Un(t.target),
                                    i = r && r.selector ? r.selector.join() : t.target.nodeName,
                                    o = [n.selector ? n.selector.join() : "", i, t.attributeName, ln(t.addedNodes), ln(t.removedNodes)].join();
                                un[o] = o in un ? un[o] : [0];
                                var u = un[o];
                                if (!1 === a && u[0] >= 10 && dn(u[1], 2, e), u[0] = a ? u[0] + 1 : 1, 10 === u[0]) return u[1] = t.removedNodes, "suspend";
                                if (u[0] > 10) return ""
                            }
                            return t.type
                        }(r, t), u && o && o.ownerDocument && jn(o.ownerDocument), u && o && o.nodeType == Node.DOCUMENT_FRAGMENT_NODE && o.host && jn(o), u) {
                            case "attributes":
                                Fe(o, 3);
                                break;
                            case "characterData":
                                Fe(o, 4);
                                break;
                            case "childList":
                                dn(r.addedNodes, 1, t), dn(r.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (c = Un(o)) && (c.metadata.suspend = !0)
                        }
                        s.label = 5;
                    case 5:
                        return n++, [3, 2];
                    case 6:
                        return [4, Yt(6, t, e.time)];
                    case 7:
                        return s.sent(), [3, 1];
                    case 8:
                        return jt(t), [2]
                }
            }))
        }))
    }

    function ln(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function dn(t, e, n) {
        return ut(this, void 0, void 0, (function () {
            var a, r, i;
            return ct(this, (function (o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (Ke(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = Ct(n)) ? [3, 4] : [4, zt(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        Fe(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function fn(t, e) {
        return void 0 === e && (e = !1), an.indexOf(t) < 0 && an.push(t), rn && W(rn), rn = Y((function () {
            !function (t) {
                for (var e = 0, n = an; e < n.length; e++) {
                    var a = n[e];
                    if (a) {
                        var r = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (r && Vn(a)) continue;
                        hn(a, r || t ? "childList" : "characterData")
                    }
                }
                an = []
            }(e)
        }), 33), t
    }

    function hn(t, e) {
        Rr(cn)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    var pn = 1, vn = [], gn = [], mn = [], bn = {}, yn = [], wn = [], kn = {}, En = [], On = [], xn = [], Mn = [],
        Sn = null, Nn = null, _n = null, Tn = null;

    function Dn() {
        In(), jn(document, !0)
    }

    function Cn() {
        In()
    }

    function In() {
        pn = 1, vn = [], gn = [], mn = [], bn = {}, yn = [], wn = [], En = "address,password,contact".split(","), On = "password,secret,pass,social,ssn,code,hidden".split(","), xn = "radio,checkbox,range,button,reset,submit".split(","), Mn = "INPUT,SELECT,TEXTAREA".split(","), Sn = new WeakMap, Nn = new WeakMap, _n = new WeakMap, Tn = new WeakMap, wt = {}
    }

    function jn(t, e) {
        void 0 === e && (e = !1);
        try {
            e && u.unmask.forEach((function (t) {
                return t.indexOf("!") < 0 ? wn.push(t) : yn.push(t.substr(1))
            })), "querySelectorAll" in t && (u.regions.forEach((function (e) {
                return t.querySelectorAll(e[1]).forEach((function (t) {
                    return na(t, "".concat(e[0]))
                }))
            })), u.mask.forEach((function (e) {
                return t.querySelectorAll(e).forEach((function (t) {
                    return _n.set(t, 3)
                }))
            })), u.checksum.forEach((function (e) {
                return t.querySelectorAll(e[1]).forEach((function (t) {
                    return Tn.set(t, e[0])
                }))
            })), wn.forEach((function (e) {
                return t.querySelectorAll(e).forEach((function (t) {
                    return _n.set(t, 0)
                }))
            })))
        } catch (t) {
            Ha(5, 1, t ? t.name : null)
        }
    }

    function zn(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Sn.get(t);
        return !n && e && (n = pn++, Sn.set(t, n)), n || null
    }

    function Ln(t, e, n, a) {
        var r, i = zn(t, !0), o = e ? zn(e) : null, c = Jn(t), s = null, l = aa(t) ? i : null, d = null,
            f = Tn.has(t) ? Tn.get(t) : null, h = u.content ? 1 : 3;
        o >= 0 && gn[o] && ((s = gn[o]).children.push(i), l = null === l ? s.region : l, d = s.fragment, f = null === f ? s.metadata.fraud : f, h = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (na(t, n.attributes["data-clarity-region"]), l = i), vn[i] = t, gn[i] = {
            id: i,
            parent: o,
            previous: c,
            children: [],
            data: n,
            selector: null,
            hash: null,
            region: l,
            metadata: {active: !0, suspend: !1, privacy: h, position: null, fraud: f, size: null},
            fragment: d
        }, function (t, e, n) {
            var a = e.data, r = e.metadata, i = r.privacy, o = a.attributes || {}, u = a.tag.toUpperCase();
            switch (!0) {
                case Mn.indexOf(u) >= 0:
                    var c = o.type, s = "";
                    Object.keys(o).forEach((function (t) {
                        return s += o[t].toLowerCase()
                    }));
                    var l = On.some((function (t) {
                        return s.indexOf(t) >= 0
                    }));
                    r.privacy = "INPUT" === u && xn.indexOf(c) >= 0 ? i : l ? 4 : 2;
                    break;
                case "data-clarity-mask" in o:
                    r.privacy = 3;
                    break;
                case "data-clarity-unmask" in o:
                    r.privacy = 0;
                    break;
                case _n.has(t):
                    r.privacy = _n.get(t);
                    break;
                case Tn.has(t):
                    r.privacy = 2;
                    break;
                case "*T" === u:
                    var d = n && n.data ? n.data.tag : "", f = n && n.selector ? n.selector[1] : "",
                        h = ["STYLE", "TITLE", "svg:style"];
                    r.privacy = h.includes(d) || yn.some((function (t) {
                        return f.indexOf(t) >= 0
                    })) ? 0 : i;
                    break;
                case 1 === i:
                    r.privacy = function (t, e, n) {
                        if (t && e.some((function (e) {
                            return t.indexOf(e) >= 0
                        }))) return 2;
                        return n.privacy
                    }(o.class, En, r)
            }
        }(t, gn[i], s), Wn(gn[i]), "IMG" === (r = gn[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), Gn(i, a, gn[i].fragment)
    }

    function An(t, e, n, a) {
        var r = zn(t), i = e ? zn(e) : null, o = Jn(t), u = !1, c = !1;
        if (r in gn) {
            var s = gn[r];
            if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                u = !0;
                var l = s.parent;
                if (s.parent = i, null !== i && i >= 0) {
                    var d = null === o ? 0 : gn[i].children.indexOf(o) + 1;
                    gn[i].children.splice(d, 0, r), s.region = aa(t) ? r : gn[i].region
                } else !function (t, e) {
                    if (t in gn) {
                        var n = gn[t];
                        n.metadata.active = !1, n.parent = null, Gn(t, e)
                    }
                }(r, a);
                if (null !== l && l >= 0) {
                    var f = gn[l].children.indexOf(r);
                    f >= 0 && gn[l].children.splice(f, 1)
                }
                c = !0
            }
            for (var h in n) Yn(s.data, n, h) && (u = !0, s.data[h] = n[h]);
            s.fragment && kn[s.fragment] && (u = !0), Wn(s), Gn(r, a, gn[r].fragment, u, c)
        }
    }

    function Rn(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Nn.set(n.contentDocument, n), e = !0)
            } catch (t) {
            }
        }
        return e
    }

    function Hn(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Nn.has(e) ? Nn.get(e) : null
    }

    function Yn(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Wn(t) {
        var e = t.parent && t.parent in gn ? gn[t.parent] : null, n = e ? e.selector : null, a = t.data,
            r = function (t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = gn[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t), i = {id: t.id, tag: a.tag, prefix: n, position: r, attributes: a.attributes};
        t.selector = [kt(i, 0), kt(i, 1)], t.hash = t.selector.map((function (t) {
            return t ? f(t) : null
        })), t.hash.forEach((function (e) {
            return bn[e] = t.id
        })), t.hash.some((function (t) {
            return -1 !== Ua.indexOf(t)
        })) && (t.fragment = t.id)
    }

    function Xn(t) {
        var e = qn(Bn(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function qn(t) {
        return t in vn ? vn[t] : null
    }

    function Pn(t) {
        return t in gn ? gn[t] : null
    }

    function Un(t) {
        var e = zn(t);
        return e in gn ? gn[e] : null
    }

    function Bn(t) {
        return t in bn ? bn[t] : null
    }

    function Vn(t) {
        return zn(t) in vn
    }

    function Fn() {
        for (var t = [], e = 0, n = mn; e < n.length; e++) {
            (a = n[e]) in gn && t.push(gn[a])
        }
        for (var a in mn = [], kn) Ga(kn[a], a, !0);
        return kn = {}, t
    }

    function Jn(t) {
        for (var e = null; null === e && t.previousSibling;) e = zn(t.previousSibling), t = t.previousSibling;
        return e
    }

    function Gn(t, e, n, a, r) {
        if (void 0 === n && (n = null), void 0 === a && (a = !0), void 0 === r && (r = !1), n && !kn[n]) {
            var i = qn(n), o = Pn(n);
            i && o && (fn(i, !0), o.hash.forEach((function (t) {
                -1 !== Ua.indexOf(t) && (kn[n] = t)
            })))
        }
        var u = mn.indexOf(t);
        u >= 0 && 1 === e && r ? (mn.splice(u, 1), mn.push(t)) : -1 === u && a && mn.push(t)
    }

    var Zn = [], Kn = null, Qn = {}, $n = [], ta = !1, ea = null;

    function na(t, e) {
        !1 === Kn.has(t) && (Kn.set(t, e), (ea = null === ea && ta ? new IntersectionObserver(ia, {threshold: [0, .2, .4, .6, .8, 1]}) : ea) && t && t.nodeType === Node.ELEMENT_NODE && ea.observe(t))
    }

    function aa(t) {
        return Kn && Kn.has(t)
    }

    function ra() {
        for (var t = [], e = 0, n = $n; e < n.length; e++) {
            var a = n[e], r = zn(a.node);
            r in Qn || (r ? (a.data.id = r, Qn[r] = a.data, Zn.push(ua(a.data))) : t.push(a))
        }
        $n = t, Zn.length > 0 && Yt(7)
    }

    function ia(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e], r = a.target, i = a.boundingClientRect, o = a.intersectionRect, u = a.rootBounds;
            if (Kn.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? zn(r) : null,
                    s = c in Qn ? Qn[c] : {id: c, name: Kn.get(r), interaction: 16, visibility: 0},
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                oa(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && ea && ea.unobserve(r)
            }
        }
        Zn.length > 0 && Yt(7)
    }

    function oa(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Qn && r || !(e.id in Qn)) && (Qn[e.id] = e, Zn.push(ua(e))) : $n.push({
            node: t,
            data: e
        })
    }

    function ua(t) {
        return {time: l(), data: {id: t.id, interaction: t.interaction, visibility: t.visibility, name: t.name}}
    }

    function ca() {
        Zn = []
    }

    function sa(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null, n = e && e.length > 0 ? e[0] : t.target;
        return on = l() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function la(t, e, n) {
        void 0 === n && (n = null);
        var a = {id: 0, hash: null, privacy: 2, node: t};
        if (t) {
            var r = Un(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function (t, e) {
                    var n = qn(t), a = t in Qn ? Qn[t] : {id: t, visibility: 0, interaction: 16, name: Kn.get(n)},
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    oa(n, a, r, a.visibility)
                }(r.region, e), i.fraud && bt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function da(t, e) {
        return void 0 === e && (e = null), ut(this, void 0, void 0, (function () {
            var n, a, r, i, o, u, c, s, d, f, h, p, v, g, m, w, k, E, O, x, M, N, T, D, C, I, j, z, L, A, R;
            return ct(this, (function (H) {
                switch (n = e || l(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = fe; r < i.length; r++) A = i[r], (o = la(A.data.target, A.event)).id > 0 && ((a = [A.time, A.event]).push(o.id), a.push(A.data.x), a.push(A.data.y), Sa(a), S(A.event, A.data.x, A.data.y));
                        be();
                        break;
                    case 9:
                        for (u = 0, c = Zt; u < c.length; u++) A = c[u], s = la(A.data.target, A.event, A.data.text), a = [A.time, A.event], d = s.hash.join("."), a.push(s.id), a.push(A.data.x), a.push(A.data.y), a.push(A.data.eX), a.push(A.data.eY), a.push(A.data.button), a.push(A.data.reaction), a.push(A.data.context), a.push(b(A.data.text, "click", s.privacy)), a.push(y(A.data.link)), a.push(d), a.push(A.data.trust), Sa(a), va(A.time, A.event, d, A.data.x, A.data.y, A.data.reaction, A.data.context);
                        ne();
                        break;
                    case 38:
                        for (f = 0, h = ae; f < h.length; f++) A = h[f], a = [A.time, A.event], (j = la(A.data.target, A.event)).id > 0 && (a.push(j.id), a.push(A.data.action), Sa(a));
                        ie();
                        break;
                    case 11:
                        p = de, a.push(p.width), a.push(p.height), S(t, p.width, p.height), we(), Sa(a);
                        break;
                    case 26:
                        v = Ce, a.push(v.name), Re(), Sa(a);
                        break;
                    case 27:
                        for (g = 0, m = ue; g < m.length; g++) A = m[g], w = la(A.data.target, A.event, A.data.value), (a = [A.time, A.event]).push(w.id), a.push(b(A.data.value, "input", w.privacy)), Sa(a);
                        le();
                        break;
                    case 21:
                        (k = Me) && (E = la(k.start, t), O = la(k.end, t), a.push(E.id), a.push(k.startOffset), a.push(O.id), a.push(k.endOffset), De(), Sa(a));
                        break;
                    case 10:
                        for (x = 0, M = ke; x < M.length; x++) A = M[x], (N = la(A.data.target, A.event)).id > 0 && ((a = [A.time, A.event]).push(N.id), a.push(A.data.x), a.push(A.data.y), Sa(a), S(A.event, A.data.x, A.data.y));
                        ke = [];
                        break;
                    case 42:
                        for (T = 0, D = Bt; T < D.length; T++) A = D[T], a = [A.time, A.event], (j = la(A.data.target, A.event)).id > 0 && ((a = [A.time, A.event]).push(j.id), a.push(A.data.type), a.push(b(A.data.value, "change", j.privacy)), a.push(b(A.data.checksum, "checksum", j.privacy)), Sa(a));
                        Ft();
                        break;
                    case 39:
                        for (C = 0, I = je; C < I.length; C++) A = I[C], a = [A.time, A.event], (j = la(A.data.target, A.event)).id > 0 && (a.push(j.id), Sa(a));
                        Le();
                        break;
                    case 22:
                        for (z = 0, L = ha; z < L.length; z++) A = L[z], (a = [A.time, A.event]).push(A.data.type), a.push(A.data.hash), a.push(A.data.x), a.push(A.data.y), a.push(A.data.reaction), a.push(A.data.context), Sa(a, !1);
                        pa();
                        break;
                    case 28:
                        R = Ie, a.push(R.visible), Sa(a), _(n, R.visible), Ye()
                }
                return [2]
            }))
        }))
    }

    var fa = [], ha = [];

    function pa() {
        ha = []
    }

    function va(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), fa.push({
            time: t,
            event: 22,
            data: {type: e, hash: n, x: a, y: r, reaction: i, context: o}
        }), S(e, a, r)
    }

    var ga, ma, ba, ya, wa, ka = 0, Ea = 0, Oa = null, xa = 0;

    function Ma() {
        ya = !0, ka = 0, Ea = 0, xa = 0, ga = [], ma = [], ba = {}, wa = null
    }

    function Sa(t, e) {
        if (void 0 === e && (e = !0), ya) {
            var n = l(), a = t.length > 1 ? t[1] : null, r = JSON.stringify(t);
            switch (a) {
                case 5:
                    ka += r.length;
                case 37:
                case 6:
                    Ea += r.length, ga.push(r);
                    break;
                default:
                    ma.push(r)
            }
            A(25);
            var i = function () {
                var t = !1 === u.lean && ka > 0 ? 100 : Cr.sequence * u.delay;
                return "string" == typeof u.upload ? Math.max(Math.min(t, 3e4), 100) : u.delay
            }();
            n - xa > 2 * i && (W(Oa), Oa = null), e && null === Oa && (25 !== a && U(), Oa = Y(_a, i), xa = n, nr(Ea))
        }
    }

    function Na() {
        W(Oa), _a(!0), ka = 0, Ea = 0, xa = 0, ga = [], ma = [], ba = {}, wa = null, ya = !1
    }

    function _a(t) {
        return void 0 === t && (t = !1), ut(this, void 0, void 0, (function () {
            var e, n, a, r, i, o, c, s;
            return ct(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return Oa = null, (e = !1 === u.lean && Ea > 0 && (Ea < 1048576 || Cr.sequence > 0)) && H(1, 1), ra(), function () {
                            var t = [];
                            ha = [];
                            for (var e = Cr.start + Cr.duration, n = Math.max(e - 2e3, 0), a = 0, r = fa; a < r.length; a++) {
                                var i = r[a];
                                i.time >= n && (i.time <= e && ha.push(i), t.push(i))
                            }
                            fa = t, da(22)
                        }(), vt(), n = !0 === t, a = JSON.stringify(zr(n)), r = "[".concat(ma.join(), "]"), i = e ? "[".concat(ga.join(), "]") : "", o = function (t) {
                            return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                        }({e: a, a: r, p: i}), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, lt(o)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return R(2, (c = s) ? c.length : o.length), Ta(o, c, Cr.sequence, n), ma = [], e && (ga = [], Ea = 0, ka = 0), [2]
                }
            }))
        }))
    }

    function Ta(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof u.upload) {
            var r = u.upload, i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && Ca(n)
            } catch (t) {
            }
            if (!1 === i) {
                n in ba ? ba[n].attempts++ : ba[n] = {data: t, attempts: 1};
                var o = new XMLHttpRequest;
                o.open("POST", r), null !== n && (o.onreadystatechange = function () {
                    Rr(Da)(o, n)
                }), o.withCredentials = !0, e ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"), o.send(e)) : o.send(t)
            }
        } else if (u.upload) {
            (0, u.upload)(t), Ca(n)
        }
    }

    function Da(t, e) {
        var n = ba[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? ar(6) : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload), Ta(n.data, null, e)) : (wa = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && tr(2), 200 === t.status && t.responseText && function (t) {
            var e = t && t.length > 0 ? t.split(" ") : [""];
            switch (e[0]) {
                case "END":
                    ar(6);
                    break;
                case "UPGRADE":
                    $("Auto");
                    break;
                case "ACTION":
                    u.action && e.length > 1 && u.action(e[1])
            }
        }(t.responseText), 0 === t.status && (Ta(n.data, null, e, !0), ar(3)), t.status >= 200 && t.status <= 208 && Ca(e), delete ba[e]))
    }

    function Ca(t) {
        1 === t && Er()
    }

    var Ia, ja = {};

    function za(t) {
        var e = t.error || t;
        return e.message in ja || (ja[e.message] = 0), ja[e.message]++ >= 5 || e && e.message && (Ia = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, La(31)), !0
    }

    function La(t) {
        return ut(this, void 0, void 0, (function () {
            var e;
            return ct(this, (function (n) {
                switch (e = [l(), t], t) {
                    case 31:
                        e.push(Ia.message), e.push(Ia.line), e.push(Ia.column), e.push(Ia.stack), e.push(y(Ia.source)), Sa(e);
                        break;
                    case 33:
                        Aa && (e.push(Aa.code), e.push(Aa.name), e.push(Aa.message), e.push(Aa.stack), e.push(Aa.severity), Sa(e, !1));
                        break;
                    case 41:
                        gt && (e.push(gt.id), e.push(gt.target), e.push(gt.checksum), Sa(e, !1))
                }
                return [2]
            }))
        }))
    }

    var Aa, Ra = {};

    function Ha(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Ra && Ra[t].indexOf(i) >= 0 || (Aa = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in Ra ? Ra[t].push(i) : Ra[t] = [i], La(33))
    }

    var Ya, Wa = {}, Xa = [], qa = {}, Pa = {}, Ua = [];

    function Ba() {
        try {
            var t = u.extract;
            if (!t) return;
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e], a = t[e + 1];
                switch (n) {
                    case 0:
                        var r = t[e + 2];
                        qa[a] = Ka(r);
                        break;
                    case 1:
                        break;
                    case 2:
                        var i = t[e + 2];
                        Pa[a] = i;
                        break;
                    case 3:
                        Ua = t[e + 2]
                }
            }
        } catch (t) {
            Ha(8, 1, t ? t.name : null)
        }
    }

    function Va(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Fa() {
        try {
            for (var t in qa) {
                var e = (r = Qa(Va(qa[t]))) ? JSON.stringify(r).substring(0, 1e4) : r;
                e && Ga(t, e)
            }
            for (var n in Pa) {
                var a = document.querySelector(Pa[n]);
                a && Ga(n, a.innerText)
            }
        } catch (t) {
            Ha(5, 1, t ? t.name : null)
        }
        var r;
        tr(40)
    }

    function Ja() {
        Xa = []
    }

    function Ga(t, e, n) {
        void 0 === n && (n = !1), (!(t in Wa) || t in Wa && Wa[t] !== e || n) && (Wa[t] = e, Xa.push(t))
    }

    function Za() {
        Wa = {}, Xa = [], qa = {}, Pa = {}
    }

    function Ka(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(), r = a.indexOf("["), i = a.indexOf("{"), o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function Qa(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && $a(r, a.condition)) n = Qa(t, r); else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if ($a(c, a.condition)) {
                        var s = Qa(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function $a(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function tr(t) {
        var e = [l(), t];
        switch (t) {
            case 4:
                var n = E;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), Sa(e, !1)), M();
                break;
            case 25:
                e.push(j.gap), Sa(e);
                break;
            case 35:
                e.push(Ya.check), Sa(e, !1);
                break;
            case 3:
                e.push(Q.key), Sa(e);
                break;
            case 2:
                e.push(wa.sequence), e.push(wa.attempts), e.push(wa.status), Sa(e, !1);
                break;
            case 24:
                e.push(C.key), e.push(C.value), Sa(e);
                break;
            case 34:
                var a = Object.keys(et);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(et[o])
                    }
                    ot(), Sa(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(L);
                if (u.length > 0) {
                    for (var c = 0, s = u; c < s.length; c++) {
                        var d = s[c], f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(L[d]))
                    }
                    L = {}, Sa(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(ur);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(ur[g])
                    }
                    fr(), Sa(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(F);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], F[w]))
                    }
                    Z(), Sa(e, !1)
                }
                break;
            case 40:
                for (var k = 0, O = Xa; k < O.length; k++) {
                    w = O[k];
                    e.push(w), e.push(Wa[w])
                }
                Ja(), Sa(e, !1)
        }
    }

    function er() {
        Ya = {check: 0}
    }

    function nr(t) {
        if (0 === Ya.check) {
            var e = Ya.check;
            e = Cr.sequence >= 128 ? 1 : e, e = l() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Ya.check && ar(e)
        }
    }

    function ar(t) {
        Ya.check = t, kr(), pi()
    }

    function rr() {
        0 !== Ya.check && tr(35)
    }

    function ir() {
        Ya = null
    }

    var or = null, ur = null;

    function cr() {
        or = {}, ur = {}
    }

    function sr() {
        or = {}, ur = {}
    }

    function lr(t, e) {
        e && (e = "".concat(e), t in or || (or[t] = []), or[t].indexOf(e) < 0 && (or[t].push(e), t in ur || (ur[t] = []), ur[t].push(e), or[t].length > 128 && ar(5)))
    }

    function dr() {
        tr(1)
    }

    function fr() {
        ur = {}
    }

    var hr = null, pr = [], vr = null;

    function gr() {
        vr = null;
        var t, e = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            n = document && document.title ? document.title : "", a = function () {
                var t = {session: Mr(), ts: Math.round(Date.now()), count: 1, upgrade: null, upload: ""}, e = _r("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Sr(n[1]) < 18e5 && (t.session = n[0], t.count = Sr(n[2]) + 1, t.upgrade = Sr(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(), r = Nr(), i = u.projectId || f(location.host);
        hr = {
            projectId: i,
            userId: r.id,
            sessionId: a.session,
            pageNum: a.count
        }, u.lean = u.track && null !== a.upgrade ? 0 === a.upgrade : u.lean, u.upload = u.track && "string" == typeof u.upload && a.upload && a.upload.length > "https://".length ? a.upload : u.upload, lr(0, e), lr(3, n), lr(1, y(location.href)), lr(2, document.referrer), lr(15, function () {
            var t = Mr();
            if (u.track && Or(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), lr(16, document.documentElement.lang), lr(17, document.dir), lr(26, "".concat(window.devicePixelRatio)), H(0, a.ts), H(1, 0), navigator && (lr(9, navigator.language), H(33, navigator.hardwareConcurrency), H(32, navigator.maxTouchPoints), H(34, Math.round(navigator.deviceMemory)), (t = navigator.userAgentData) && t.getHighEntropyValues ? t.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function (t) {
            var e;
            lr(22, t.platform), lr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function (t) {
                lr(24, t.name + "~" + t.version)
            })), lr(25, t.model), H(27, t.mobile ? 1 : 0)
        })) : lr(22, navigator.platform)), screen && (H(14, Math.round(screen.width)), H(15, Math.round(screen.height)), H(16, Math.round(screen.colorDepth)));
        for (var o = 0, c = u.cookies; o < c.length; o++) {
            var s = c[o], l = _r(s);
            l && nt(s, l)
        }
        xr(r)
    }

    function mr() {
        vr = null, hr = null
    }

    function br(t, e) {
        void 0 === e && (e = !0), hr && !1 === e && t(hr, !u.lean), pr.push({callback: t, wait: e})
    }

    function yr() {
        return hr ? [hr.userId, hr.sessionId, hr.pageNum].join(".") : ""
    }

    function wr() {
        Qr() && (u.track = !0, xr(Nr(), 1))
    }

    function kr() {
        Tr("_clsk", "", 0)
    }

    function Er() {
        var t = Math.round(Date.now()),
            e = u.upload && "string" == typeof u.upload ? u.upload.replace("https://", "") : "", n = u.lean ? 0 : 1;
        !function (t) {
            pr.length > 0 && pr.forEach((function (e) {
                !e.callback || e.wait && !t || e.callback(hr, !u.lean)
            }))
        }(n), Tr("_clsk", [hr.sessionId, t, hr.pageNum, n, e].join("|"), 1)
    }

    function Or(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function xr(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5);
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) && Tr("_clck", [hr.userId, 1, n.toString(36), e].join("|"), 365)
    }

    function Mr() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function Sr(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Nr() {
        var t = {id: Mr(), expiry: null, consent: 0}, e = _r("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var o = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(o), document.cookie = "".concat("_clsk", "=").concat(o)
            }
            n.length > 2 && (t.expiry = Sr(n[2], 36)), n.length > 3 && 1 === Sr(n[3]) && (t.consent = 1), u.track = u.track || 1 === t.consent, t.id = u.track ? n[0] : t.id
        }
        return t
    }

    function _r(t) {
        if (Or(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e) for (var n = 0; n < e.length; n++) {
                var a = e[n].split("=");
                if (a.length > 1 && a[0] && a[0].trim() === t) return a[1]
            }
        }
        return null
    }

    function Tr(t, e, n) {
        if (u.track && (navigator && navigator.cookieEnabled || Or(document, "cookie"))) {
            var a = new Date;
            a.setDate(a.getDate() + n);
            var r = a ? "expires=" + a.toUTCString() : "",
                i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
            try {
                if (null === vr) {
                    for (var o = location.hostname ? location.hostname.split(".") : [], c = o.length - 1; c >= 0; c--) if (vr = ".".concat(o[c]).concat(vr || ""), c < o.length - 1 && (document.cookie = "".concat(i).concat(";").concat("domain=").concat(vr), _r(t) === e)) return;
                    vr = ""
                }
            } catch (t) {
                vr = ""
            }
            document.cookie = vr ? "".concat(i).concat(";").concat("domain=").concat(vr) : i
        }
    }

    var Dr, Cr = null;

    function Ir() {
        var t = hr;
        Cr = {
            version: d,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function jr() {
        Cr = null
    }

    function zr(t) {
        return Cr.start = Cr.start + Cr.duration, Cr.duration = l() - Cr.start, Cr.sequence++, Cr.upload = t && "sendBeacon" in navigator ? 1 : 0, Cr.end = t ? 1 : 0, [Cr.version, Cr.sequence, Cr.start, Cr.duration, Cr.projectId, Cr.userId, Cr.sessionId, Cr.pageNum, Cr.upload, Cr.end]
    }

    function Lr() {
        Dr = []
    }

    function Ar(t) {
        if (Dr && -1 === Dr.indexOf(t.message)) {
            var e = u.report;
            if (e && e.length > 0) {
                var n = {v: Cr.version, p: Cr.projectId, u: Cr.userId, s: Cr.sessionId, n: Cr.pageNum};
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e), a.send(JSON.stringify(n)), Dr.push(t.message)
            }
        }
        return t
    }

    function Rr(t) {
        return function () {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw Ar(t)
            }
            var n = performance.now() - e;
            R(4, n), n > 30 && (A(7), H(6, n))
        }
    }

    var Hr = [];

    function Yr(t, e, n, a) {
        void 0 === a && (a = !1), n = Rr(n);
        try {
            t[c("addEventListener")](e, n, a), Hr.push({event: e, target: t, listener: n, capture: a})
        } catch (t) {
        }
    }

    function Wr() {
        for (var t = 0, e = Hr; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[c("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {
            }
        }
        Hr = []
    }

    var Xr = null, qr = null, Pr = null, Ur = 0;

    function Br() {
        return !(Ur++ > 20) || (Ha(4, 0), !1)
    }

    function Vr() {
        Ur = 0, Pr !== Jr() && (pi(), window.setTimeout(Fr, 250))
    }

    function Fr() {
        hi(), H(29, 1)
    }

    function Jr() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }

    var Gr = !1;

    function Zr() {
        Gr = !0, s = performance.now(), _t(), Wr(), Lr(), Pr = Jr(), Ur = 0, Yr(window, "popstate", Vr), null === Xr && (Xr = history.pushState, history.pushState = function () {
            Xr.apply(this, arguments), Qr() && Br() && Vr()
        }), null === qr && (qr = history.replaceState, history.replaceState = function () {
            qr.apply(this, arguments), Qr() && Br() && Vr()
        })
    }

    function Kr() {
        Pr = null, Ur = 0, Lr(), Wr(), _t(), s = 0, Gr = !1
    }

    function Qr() {
        return Gr
    }

    function $r(t) {
        if (null === t || Gr) return !1;
        for (var e in t) e in u && (u[e] = t[e]);
        return !0
    }

    function ti() {
        hi(), I("clarity", "restart")
    }

    var ei = Object.freeze({
        __proto__: null, start: function () {
            !function () {
                mt = [], H(26, navigator.webdriver ? 1 : 0);
                try {
                    H(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    H(31, 0)
                }
            }(), Yr(window, "error", za), ja = {}, Ra = {}
        }, stop: function () {
            Ra = {}
        }
    });

    function ni() {
        return ut(this, void 0, void 0, (function () {
            var t, e;
            return ct(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return t = l(), It(e = {id: yr(), cost: 3}), [4, Ke(document, e, 0)];
                    case 1:
                        return n.sent(), [4, Yt(5, e, t)];
                    case 2:
                        return n.sent(), jt(e), [2]
                }
            }))
        }))
    }

    var ai = Object.freeze({
        __proto__: null, start: function () {
            Pt(), Ut(), ca(), ea = null, Kn = new WeakMap, Qn = {}, $n = [], ta = !!window.IntersectionObserver, Dn(), function () {
                if (Qe = [], an = [], rn = null, on = 0, un = {}, null === tn && (tn = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function () {
                    return Qr() && fn(this.ownerNode), tn.apply(this, arguments)
                }), null === en && (en = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function () {
                    return Qr() && fn(this.ownerNode), en.apply(this, arguments)
                }), null === nn) {
                    nn = Element.prototype.attachShadow;
                    try {
                        Element.prototype.attachShadow = function () {
                            return Qr() ? fn(nn.apply(this, arguments)) : nn.apply(this, arguments)
                        }
                    } catch (t) {
                        nn = null
                    }
                }
            }(), Tt(ni, 1).then((function () {
                Rr(Ut)(), Rr(ra)()
            }))
        }, stop: function () {
            ca(), Kn = null, Qn = {}, $n = [], ea && (ea.disconnect(), ea = null), ta = !1, Cn(), function () {
                for (var t = 0, e = Qe; t < e.length; t++) {
                    var n = e[t];
                    n && n.disconnect()
                }
                Qe = [], un = {}, $e = [], an = [], on = 0, rn = null
            }(), Pt()
        }, hashText: Xn
    });
    var ri, ii = null;

    function oi() {
        ii = null
    }

    function ui(t) {
        ii = {
            fetchStart: Math.round(t.fetchStart),
            connectStart: Math.round(t.connectStart),
            connectEnd: Math.round(t.connectEnd),
            requestStart: Math.round(t.requestStart),
            responseStart: Math.round(t.responseStart),
            responseEnd: Math.round(t.responseEnd),
            domInteractive: Math.round(t.domInteractive),
            domComplete: Math.round(t.domComplete),
            loadEventStart: Math.round(t.loadEventStart),
            loadEventEnd: Math.round(t.loadEventEnd),
            redirectCount: Math.round(t.redirectCount),
            size: t.transferSize ? t.transferSize : 0,
            type: t.type,
            protocol: t.nextHopProtocol,
            encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
            decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
        }, function (t) {
            ut(this, void 0, void 0, (function () {
                var e, n;
                return ct(this, (function (a) {
                    return e = l(), n = [e, t], 29 === t && (n.push(ii.fetchStart), n.push(ii.connectStart), n.push(ii.connectEnd), n.push(ii.requestStart), n.push(ii.responseStart), n.push(ii.responseEnd), n.push(ii.domInteractive), n.push(ii.domComplete), n.push(ii.loadEventStart), n.push(ii.loadEventEnd), n.push(ii.redirectCount), n.push(ii.size), n.push(ii.type), n.push(ii.protocol), n.push(ii.encodedSize), n.push(ii.decodedSize), oi(), Sa(n, !1)), [2]
                }))
            }))
        }(29)
    }

    var ci = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function si() {
        try {
            ri && ri.disconnect(), ri = new PerformanceObserver(Rr(li));
            for (var t = 0, e = ci; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && R(9, 0), ri.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Ha(3, 1)
        }
    }

    function li(t) {
        !function (t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        ui(a);
                        break;
                    case "resource":
                        var r = a.name;
                        lr(4, di(r)), r !== u.upload && r !== u.fallback || H(28, a.duration);
                        break;
                    case "longtask":
                        A(7);
                        break;
                    case "first-input":
                        e && H(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && R(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && H(8, a.startTime)
                }
            }
            performance && "memory" in performance && performance.memory.usedJSHeapSize && H(30, Math.abs(performance.memory.usedJSHeapSize / 1048576))
        }(t.getEntries())
    }

    function di(t) {
        var e = document.createElement("a");
        return e.href = t, e.hostname
    }

    var fi = [ei, ai, Xe, Object.freeze({
        __proto__: null, start: function () {
            oi(), function () {
                navigator && "connection" in navigator && lr(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Yr(window, "load", Y.bind(this, si, 0)) : si() : Ha(3, 0)
            }()
        }, stop: function () {
            ri && ri.disconnect(), ri = null, oi()
        }
    })];

    function hi(t) {
        void 0 === t && (t = null), function () {
            try {
                return !1 === Gr && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
            } catch (t) {
                return !1
            }
        }() && ($r(t), Zr(), ht(), fi.forEach((function (t) {
            return Rr(t.start)()
        })))
    }

    function pi() {
        Qr() && (fi.slice().reverse().forEach((function (t) {
            return Rr(t.stop)()
        })), pt(), Kr())
    }

    var vi = Object.freeze({
        __proto__: null, version: d, start: hi, pause: function () {
            Qr() && (I("clarity", "pause"), null === St && (St = new Promise((function (t) {
                Nt = t
            }))))
        }, resume: function () {
            Qr() && (St && (Nt(), St = null, null === Mt && Dt()), I("clarity", "resume"))
        }, stop: pi, consent: wr, event: I, identify: at, set: nt, upgrade: $, metadata: br, hashText: Xn
    });
    !function () {
        if ("undefined" != typeof window) {
            var t = window, e = "clarity";
            if (t[e] && t[e].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var n = t[e] && t[e].q || [];
            for (t[e] = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return vi[t].apply(vi, e)
            }, t[e].v = d; n.length > 0;) t[e].apply(t, n.shift())
        }
    }()
}();

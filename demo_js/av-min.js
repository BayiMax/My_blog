!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AV = e() : t.AV = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = { i: r, l: !1, exports: {} };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 81)
    }([function (t, e, n) {
        (function (t, n) {
            var r, i;
            !function () {
                var o = "object" == typeof self && self.self === self && self || "object" == typeof t && t.global === t && t || this || {},
                    s = o._, a = Array.prototype, u = Object.prototype,
                    c = "undefined" != typeof Symbol ? Symbol.prototype : null, l = a.push, f = a.slice, h = u.toString,
                    d = u.hasOwnProperty, p = Array.isArray, v = Object.keys, _ = Object.create, y = function () {
                    }, m = function (t) {
                        return t instanceof m ? t : this instanceof m ? void (this._wrapped = t) : new m(t)
                    };
                void 0 === e || e.nodeType ? o._ = m : (void 0 !== n && !n.nodeType && n.exports && (e = n.exports = m), e._ = m), m.VERSION = "1.9.1";
                var g, b = function (t, e, n) {
                    if (void 0 === e) return t;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function (n) {
                                return t.call(e, n)
                            };
                        case 3:
                            return function (n, r, i) {
                                return t.call(e, n, r, i)
                            };
                        case 4:
                            return function (n, r, i, o) {
                                return t.call(e, n, r, i, o)
                            }
                    }
                    return function () {
                        return t.apply(e, arguments)
                    }
                }, w = function (t, e, n) {
                    return m.iteratee !== g ? m.iteratee(t, e) : null == t ? m.identity : m.isFunction(t) ? b(t, e, n) : m.isObject(t) && !m.isArray(t) ? m.matcher(t) : m.property(t)
                };
                m.iteratee = g = function (t, e) {
                    return w(t, e, 1 / 0)
                };
                var O = function (t, e) {
                    return e = null == e ? t.length - 1 : +e, function () {
                        for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + e];
                        switch (e) {
                            case 0:
                                return t.call(this, r);
                            case 1:
                                return t.call(this, arguments[0], r);
                            case 2:
                                return t.call(this, arguments[0], arguments[1], r)
                        }
                        var o = Array(e + 1);
                        for (i = 0; i < e; i++) o[i] = arguments[i];
                        return o[e] = r, t.apply(this, o)
                    }
                }, A = function (t) {
                    if (!m.isObject(t)) return {};
                    if (_) return _(t);
                    y.prototype = t;
                    var e = new y;
                    return y.prototype = null, e
                }, S = function (t) {
                    return function (e) {
                        return null == e ? void 0 : e[t]
                    }
                }, E = function (t, e) {
                    return null != t && d.call(t, e)
                }, C = function (t, e) {
                    for (var n = e.length, r = 0; r < n; r++) {
                        if (null == t) return;
                        t = t[e[r]]
                    }
                    return n ? t : void 0
                }, x = Math.pow(2, 53) - 1, T = S("length"), j = function (t) {
                    var e = T(t);
                    return "number" == typeof e && e >= 0 && e <= x
                };
                m.each = m.forEach = function (t, e, n) {
                    e = b(e, n);
                    var r, i;
                    if (j(t)) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t); else {
                        var o = m.keys(t);
                        for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
                    }
                    return t
                }, m.map = m.collect = function (t, e, n) {
                    e = w(e, n);
                    for (var r = !j(t) && m.keys(t), i = (r || t).length, o = Array(i), s = 0; s < i; s++) {
                        var a = r ? r[s] : s;
                        o[s] = e(t[a], a, t)
                    }
                    return o
                };
                var N = function (t) {
                    var e = function (e, n, r, i) {
                        var o = !j(e) && m.keys(e), s = (o || e).length, a = t > 0 ? 0 : s - 1;
                        for (i || (r = e[o ? o[a] : a], a += t); a >= 0 && a < s; a += t) {
                            var u = o ? o[a] : a;
                            r = n(r, e[u], u, e)
                        }
                        return r
                    };
                    return function (t, n, r, i) {
                        var o = arguments.length >= 3;
                        return e(t, b(n, i, 4), r, o)
                    }
                };
                m.reduce = m.foldl = m.inject = N(1), m.reduceRight = m.foldr = N(-1), m.find = m.detect = function (t, e, n) {
                    var r = j(t) ? m.findIndex : m.findKey, i = r(t, e, n);
                    if (void 0 !== i && -1 !== i) return t[i]
                }, m.filter = m.select = function (t, e, n) {
                    var r = [];
                    return e = w(e, n), m.each(t, function (t, n, i) {
                        e(t, n, i) && r.push(t)
                    }), r
                }, m.reject = function (t, e, n) {
                    return m.filter(t, m.negate(w(e)), n)
                }, m.every = m.all = function (t, e, n) {
                    e = w(e, n);
                    for (var r = !j(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (!e(t[s], s, t)) return !1
                    }
                    return !0
                }, m.some = m.any = function (t, e, n) {
                    e = w(e, n);
                    for (var r = !j(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (e(t[s], s, t)) return !0
                    }
                    return !1
                }, m.contains = m.includes = m.include = function (t, e, n, r) {
                    return j(t) || (t = m.values(t)), ("number" != typeof n || r) && (n = 0), m.indexOf(t, e, n) >= 0
                }, m.invoke = O(function (t, e, n) {
                    var r, i;
                    return m.isFunction(e) ? i = e : m.isArray(e) && (r = e.slice(0, -1), e = e[e.length - 1]), m.map(t, function (t) {
                        var o = i;
                        if (!o) {
                            if (r && r.length && (t = C(t, r)), null == t) return;
                            o = t[e]
                        }
                        return null == o ? o : o.apply(t, n)
                    })
                }), m.pluck = function (t, e) {
                    return m.map(t, m.property(e))
                }, m.where = function (t, e) {
                    return m.filter(t, m.matcher(e))
                }, m.findWhere = function (t, e) {
                    return m.find(t, m.matcher(e))
                }, m.max = function (t, e, n) {
                    var r, i, o = -1 / 0, s = -1 / 0;
                    if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                        t = j(t) ? t : m.values(t);
                        for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r > o && (o = r)
                    } else e = w(e, n), m.each(t, function (t, n, r) {
                        ((i = e(t, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = t, s = i)
                    });
                    return o
                }, m.min = function (t, e, n) {
                    var r, i, o = 1 / 0, s = 1 / 0;
                    if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                        t = j(t) ? t : m.values(t);
                        for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r < o && (o = r)
                    } else e = w(e, n), m.each(t, function (t, n, r) {
                        ((i = e(t, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
                    });
                    return o
                }, m.shuffle = function (t) {
                    return m.sample(t, 1 / 0)
                }, m.sample = function (t, e, n) {
                    if (null == e || n) return j(t) || (t = m.values(t)), t[m.random(t.length - 1)];
                    var r = j(t) ? m.clone(t) : m.values(t), i = T(r);
                    e = Math.max(Math.min(e, i), 0);
                    for (var o = i - 1, s = 0; s < e; s++) {
                        var a = m.random(s, o), u = r[s];
                        r[s] = r[a], r[a] = u
                    }
                    return r.slice(0, e)
                }, m.sortBy = function (t, e, n) {
                    var r = 0;
                    return e = w(e, n), m.pluck(m.map(t, function (t, n, i) {
                        return { value: t, index: r++, criteria: e(t, n, i) }
                    }).sort(function (t, e) {
                        var n = t.criteria, r = e.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1
                        }
                        return t.index - e.index
                    }), "value")
                };
                var U = function (t, e) {
                    return function (n, r, i) {
                        var o = e ? [[], []] : {};
                        return r = w(r, i), m.each(n, function (e, i) {
                            var s = r(e, i, n);
                            t(o, e, s)
                        }), o
                    }
                };
                m.groupBy = U(function (t, e, n) {
                    E(t, n) ? t[n].push(e) : t[n] = [e]
                }), m.indexBy = U(function (t, e, n) {
                    t[n] = e
                }), m.countBy = U(function (t, e, n) {
                    E(t, n) ? t[n]++ : t[n] = 1
                });
                var I = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                m.toArray = function (t) {
                    return t ? m.isArray(t) ? f.call(t) : m.isString(t) ? t.match(I) : j(t) ? m.map(t, m.identity) : m.values(t) : []
                }, m.size = function (t) {
                    return null == t ? 0 : j(t) ? t.length : m.keys(t).length
                }, m.partition = U(function (t, e, n) {
                    t[n ? 0 : 1].push(e)
                }, !0), m.first = m.head = m.take = function (t, e, n) {
                    return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[0] : m.initial(t, t.length - e)
                }, m.initial = function (t, e, n) {
                    return f.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
                }, m.last = function (t, e, n) {
                    return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[t.length - 1] : m.rest(t, Math.max(0, t.length - e))
                }, m.rest = m.tail = m.drop = function (t, e, n) {
                    return f.call(t, null == e || n ? 1 : e)
                }, m.compact = function (t) {
                    return m.filter(t, Boolean)
                };
                var k = function (t, e, n, r) {
                    r = r || [];
                    for (var i = r.length, o = 0, s = T(t); o < s; o++) {
                        var a = t[o];
                        if (j(a) && (m.isArray(a) || m.isArguments(a))) if (e) for (var u = 0, c = a.length; u < c;) r[i++] = a[u++]; else k(a, e, n, r), i = r.length; else n || (r[i++] = a)
                    }
                    return r
                };
                m.flatten = function (t, e) {
                    return k(t, e, !1)
                }, m.without = O(function (t, e) {
                    return m.difference(t, e)
                }), m.uniq = m.unique = function (t, e, n, r) {
                    m.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = w(n, r));
                    for (var i = [], o = [], s = 0, a = T(t); s < a; s++) {
                        var u = t[s], c = n ? n(u, s, t) : u;
                        e && !n ? (s && o === c || i.push(u), o = c) : n ? m.contains(o, c) || (o.push(c), i.push(u)) : m.contains(i, u) || i.push(u)
                    }
                    return i
                }, m.union = O(function (t) {
                    return m.uniq(k(t, !0, !0))
                }), m.intersection = function (t) {
                    for (var e = [], n = arguments.length, r = 0, i = T(t); r < i; r++) {
                        var o = t[r];
                        if (!m.contains(e, o)) {
                            var s;
                            for (s = 1; s < n && m.contains(arguments[s], o); s++);
                            s === n && e.push(o)
                        }
                    }
                    return e
                }, m.difference = O(function (t, e) {
                    return e = k(e, !0, !0), m.filter(t, function (t) {
                        return !m.contains(e, t)
                    })
                }), m.unzip = function (t) {
                    for (var e = t && m.max(t, T).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = m.pluck(t, r);
                    return n
                }, m.zip = O(m.unzip), m.object = function (t, e) {
                    for (var n = {}, r = 0, i = T(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                    return n
                };
                var P = function (t) {
                    return function (e, n, r) {
                        n = w(n, r);
                        for (var i = T(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t) if (n(e[o], o, e)) return o;
                        return -1
                    }
                };
                m.findIndex = P(1), m.findLastIndex = P(-1), m.sortedIndex = function (t, e, n, r) {
                    n = w(n, r, 1);
                    for (var i = n(e), o = 0, s = T(t); o < s;) {
                        var a = Math.floor((o + s) / 2);
                        n(t[a]) < i ? o = a + 1 : s = a
                    }
                    return o
                };
                var R = function (t, e, n) {
                    return function (r, i, o) {
                        var s = 0, a = T(r);
                        if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
                        if (i !== i) return o = e(f.call(r, s, a), m.isNaN), o >= 0 ? o + s : -1;
                        for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (r[o] === i) return o;
                        return -1
                    }
                };
                m.indexOf = R(1, m.findIndex, m.sortedIndex), m.lastIndexOf = R(-1, m.findLastIndex), m.range = function (t, e, n) {
                    null == e && (e = t || 0, t = 0), n || (n = e < t ? -1 : 1);
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; o < r; o++, t += n) i[o] = t;
                    return i
                }, m.chunk = function (t, e) {
                    if (null == e || e < 1) return [];
                    for (var n = [], r = 0, i = t.length; r < i;) n.push(f.call(t, r, r += e));
                    return n
                };
                var D = function (t, e, n, r, i) {
                    if (!(r instanceof e)) return t.apply(n, i);
                    var o = A(t.prototype), s = t.apply(o, i);
                    return m.isObject(s) ? s : o
                };
                m.bind = O(function (t, e, n) {
                    if (!m.isFunction(t)) throw new TypeError("Bind must be called on a function");
                    var r = O(function (i) {
                        return D(t, r, e, this, n.concat(i))
                    });
                    return r
                }), m.partial = O(function (t, e) {
                    var n = m.partial.placeholder, r = function () {
                        for (var i = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === n ? arguments[i++] : e[a];
                        for (; i < arguments.length;) s.push(arguments[i++]);
                        return D(t, r, this, this, s)
                    };
                    return r
                }), m.partial.placeholder = m, m.bindAll = O(function (t, e) {
                    e = k(e, !1, !1);
                    var n = e.length;
                    if (n < 1) throw new Error("bindAll must be passed function names");
                    for (; n--;) {
                        var r = e[n];
                        t[r] = m.bind(t[r], t)
                    }
                }), m.memoize = function (t, e) {
                    var n = function (r) {
                        var i = n.cache, o = "" + (e ? e.apply(this, arguments) : r);
                        return E(i, o) || (i[o] = t.apply(this, arguments)), i[o]
                    };
                    return n.cache = {}, n
                }, m.delay = O(function (t, e, n) {
                    return setTimeout(function () {
                        return t.apply(null, n)
                    }, e)
                }), m.defer = m.partial(m.delay, m, 1), m.throttle = function (t, e, n) {
                    var r, i, o, s, a = 0;
                    n || (n = {});
                    var u = function () {
                        a = !1 === n.leading ? 0 : m.now(), r = null, s = t.apply(i, o), r || (i = o = null)
                    }, c = function () {
                        var c = m.now();
                        a || !1 !== n.leading || (a = c);
                        var l = e - (c - a);
                        return i = this, o = arguments, l <= 0 || l > e ? (r && (clearTimeout(r), r = null), a = c, s = t.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), s
                    };
                    return c.cancel = function () {
                        clearTimeout(r), a = 0, r = i = o = null
                    }, c
                }, m.debounce = function (t, e, n) {
                    var r, i, o = function (e, n) {
                        r = null, n && (i = t.apply(e, n))
                    }, s = O(function (s) {
                        if (r && clearTimeout(r), n) {
                            var a = !r;
                            r = setTimeout(o, e), a && (i = t.apply(this, s))
                        } else r = m.delay(o, e, this, s);
                        return i
                    });
                    return s.cancel = function () {
                        clearTimeout(r), r = null
                    }, s
                }, m.wrap = function (t, e) {
                    return m.partial(e, t)
                }, m.negate = function (t) {
                    return function () {
                        return !t.apply(this, arguments)
                    }
                }, m.compose = function () {
                    var t = arguments, e = t.length - 1;
                    return function () {
                        for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
                        return r
                    }
                }, m.after = function (t, e) {
                    return function () {
                        if (--t < 1) return e.apply(this, arguments)
                    }
                }, m.before = function (t, e) {
                    var n;
                    return function () {
                        return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
                    }
                }, m.once = m.partial(m.before, 2), m.restArguments = O;
                var L = !{ toString: null }.propertyIsEnumerable("toString"),
                    M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                    q = function (t, e) {
                        var n = M.length, r = t.constructor, i = m.isFunction(r) && r.prototype || u, o = "constructor";
                        for (E(t, o) && !m.contains(e, o) && e.push(o); n--;) (o = M[n]) in t && t[o] !== i[o] && !m.contains(e, o) && e.push(o)
                    };
                m.keys = function (t) {
                    if (!m.isObject(t)) return [];
                    if (v) return v(t);
                    var e = [];
                    for (var n in t) E(t, n) && e.push(n);
                    return L && q(t, e), e
                }, m.allKeys = function (t) {
                    if (!m.isObject(t)) return [];
                    var e = [];
                    for (var n in t) e.push(n);
                    return L && q(t, e), e
                }, m.values = function (t) {
                    for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
                    return r
                }, m.mapObject = function (t, e, n) {
                    e = w(e, n);
                    for (var r = m.keys(t), i = r.length, o = {}, s = 0; s < i; s++) {
                        var a = r[s];
                        o[a] = e(t[a], a, t)
                    }
                    return o
                }, m.pairs = function (t) {
                    for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];
                    return r
                }, m.invert = function (t) {
                    for (var e = {}, n = m.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
                    return e
                }, m.functions = m.methods = function (t) {
                    var e = [];
                    for (var n in t) m.isFunction(t[n]) && e.push(n);
                    return e.sort()
                };
                var F = function (t, e) {
                    return function (n) {
                        var r = arguments.length;
                        if (e && (n = Object(n)), r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++) for (var o = arguments[i], s = t(o), a = s.length, u = 0; u < a; u++) {
                            var c = s[u];
                            e && void 0 !== n[c] || (n[c] = o[c])
                        }
                        return n
                    }
                };
                m.extend = F(m.allKeys), m.extendOwn = m.assign = F(m.keys), m.findKey = function (t, e, n) {
                    e = w(e, n);
                    for (var r, i = m.keys(t), o = 0, s = i.length; o < s; o++) if (r = i[o], e(t[r], r, t)) return r
                };
                var W = function (t, e, n) {
                    return e in n
                };
                m.pick = O(function (t, e) {
                    var n = {}, r = e[0];
                    if (null == t) return n;
                    m.isFunction(r) ? (e.length > 1 && (r = b(r, e[1])), e = m.allKeys(t)) : (r = W, e = k(e, !1, !1), t = Object(t));
                    for (var i = 0, o = e.length; i < o; i++) {
                        var s = e[i], a = t[s];
                        r(a, s, t) && (n[s] = a)
                    }
                    return n
                }), m.omit = O(function (t, e) {
                    var n, r = e[0];
                    return m.isFunction(r) ? (r = m.negate(r), e.length > 1 && (n = e[1])) : (e = m.map(k(e, !1, !1), String), r = function (t, n) {
                        return !m.contains(e, n)
                    }), m.pick(t, r, n)
                }), m.defaults = F(m.allKeys, !0), m.create = function (t, e) {
                    var n = A(t);
                    return e && m.extendOwn(n, e), n
                }, m.clone = function (t) {
                    return m.isObject(t) ? m.isArray(t) ? t.slice() : m.extend({}, t) : t
                }, m.tap = function (t, e) {
                    return e(t), t
                }, m.isMatch = function (t, e) {
                    var n = m.keys(e), r = n.length;
                    if (null == t) return !r;
                    for (var i = Object(t), o = 0; o < r; o++) {
                        var s = n[o];
                        if (e[s] !== i[s] || !(s in i)) return !1
                    }
                    return !0
                };
                var B, Q;
                B = function (t, e, n, r) {
                    if (t === e) return 0 !== t || 1 / t == 1 / e;
                    if (null == t || null == e) return !1;
                    if (t !== t) return e !== e;
                    var i = typeof t;
                    return ("function" === i || "object" === i || "object" == typeof e) && Q(t, e, n, r)
                }, Q = function (t, e, n, r) {
                    t instanceof m && (t = t._wrapped), e instanceof m && (e = e._wrapped);
                    var i = h.call(t);
                    if (i !== h.call(e)) return !1;
                    switch (i) {
                        case "[object RegExp]":
                        case "[object String]":
                            return "" + t == "" + e;
                        case "[object Number]":
                            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +t == +e;
                        case "[object Symbol]":
                            return c.valueOf.call(t) === c.valueOf.call(e)
                    }
                    var o = "[object Array]" === i;
                    if (!o) {
                        if ("object" != typeof t || "object" != typeof e) return !1;
                        var s = t.constructor, a = e.constructor;
                        if (s !== a && !(m.isFunction(s) && s instanceof s && m.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
                    }
                    n = n || [], r = r || [];
                    for (var u = n.length; u--;) if (n[u] === t) return r[u] === e;
                    if (n.push(t), r.push(e), o) {
                        if ((u = t.length) !== e.length) return !1;
                        for (; u--;) if (!B(t[u], e[u], n, r)) return !1
                    } else {
                        var l, f = m.keys(t);
                        if (u = f.length, m.keys(e).length !== u) return !1;
                        for (; u--;) if (l = f[u], !E(e, l) || !B(t[l], e[l], n, r)) return !1
                    }
                    return n.pop(), r.pop(), !0
                }, m.isEqual = function (t, e) {
                    return B(t, e)
                }, m.isEmpty = function (t) {
                    return null == t || (j(t) && (m.isArray(t) || m.isString(t) || m.isArguments(t)) ? 0 === t.length : 0 === m.keys(t).length)
                }, m.isElement = function (t) {
                    return !(!t || 1 !== t.nodeType)
                }, m.isArray = p || function (t) {
                    return "[object Array]" === h.call(t)
                }, m.isObject = function (t) {
                    var e = typeof t;
                    return "function" === e || "object" === e && !!t
                }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (t) {
                    m["is" + t] = function (e) {
                        return h.call(e) === "[object " + t + "]"
                    }
                }), m.isArguments(arguments) || (m.isArguments = function (t) {
                    return E(t, "callee")
                });
                var V = o.document && o.document.childNodes;
                "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof V && (m.isFunction = function (t) {
                    return "function" == typeof t || !1
                }), m.isFinite = function (t) {
                    return !m.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
                }, m.isNaN = function (t) {
                    return m.isNumber(t) && isNaN(t)
                }, m.isBoolean = function (t) {
                    return !0 === t || !1 === t || "[object Boolean]" === h.call(t)
                }, m.isNull = function (t) {
                    return null === t
                }, m.isUndefined = function (t) {
                    return void 0 === t
                }, m.has = function (t, e) {
                    if (!m.isArray(e)) return E(t, e);
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = e[r];
                        if (null == t || !d.call(t, i)) return !1;
                        t = t[i]
                    }
                    return !!n
                }, m.noConflict = function () {
                    return o._ = s, this
                }, m.identity = function (t) {
                    return t
                }, m.constant = function (t) {
                    return function () {
                        return t
                    }
                }, m.noop = function () {
                }, m.property = function (t) {
                    return m.isArray(t) ? function (e) {
                        return C(e, t)
                    } : S(t)
                }, m.propertyOf = function (t) {
                    return null == t ? function () {
                    } : function (e) {
                        return m.isArray(e) ? C(t, e) : t[e]
                    }
                }, m.matcher = m.matches = function (t) {
                    return t = m.extendOwn({}, t), function (e) {
                        return m.isMatch(e, t)
                    }
                }, m.times = function (t, e, n) {
                    var r = Array(Math.max(0, t));
                    e = b(e, n, 1);
                    for (var i = 0; i < t; i++) r[i] = e(i);
                    return r
                }, m.random = function (t, e) {
                    return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
                }, m.now = Date.now || function () {
                    return (new Date).getTime()
                };
                var K = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                    J = m.invert(K), G = function (t) {
                        var e = function (e) {
                            return t[e]
                        }, n = "(?:" + m.keys(t).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
                        return function (t) {
                            return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
                        }
                    };
                m.escape = G(K), m.unescape = G(J), m.result = function (t, e, n) {
                    m.isArray(e) || (e = [e]);
                    var r = e.length;
                    if (!r) return m.isFunction(n) ? n.call(t) : n;
                    for (var i = 0; i < r; i++) {
                        var o = null == t ? void 0 : t[e[i]];
                        void 0 === o && (o = n, i = r), t = m.isFunction(o) ? o.call(t) : o
                    }
                    return t
                };
                var z = 0;
                m.uniqueId = function (t) {
                    var e = ++z + "";
                    return t ? t + e : e
                }, m.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var H = /(.)^/, $ = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                    X = /\\|'|\r|\n|\u2028|\u2029/g, Y = function (t) {
                        return "\\" + $[t]
                    };
                m.template = function (t, e, n) {
                    !e && n && (e = n), e = m.defaults({}, e, m.templateSettings);
                    var r = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
                        i = 0, o = "__p+='";
                    t.replace(r, function (e, n, r, s, a) {
                        return o += t.slice(i, a).replace(X, Y), i = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
                    }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                    var s;
                    try {
                        s = new Function(e.variable || "obj", "_", o)
                    } catch (t) {
                        throw t.source = o, t
                    }
                    var a = function (t) {
                        return s.call(this, t, m)
                    };
                    return a.source = "function(" + (e.variable || "obj") + "){\n" + o + "}", a
                }, m.chain = function (t) {
                    var e = m(t);
                    return e._chain = !0, e
                };
                var Z = function (t, e) {
                    return t._chain ? m(e).chain() : e
                };
                m.mixin = function (t) {
                    return m.each(m.functions(t), function (e) {
                        var n = m[e] = t[e];
                        m.prototype[e] = function () {
                            var t = [this._wrapped];
                            return l.apply(t, arguments), Z(this, n.apply(m, t))
                        }
                    }), m
                }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
                    var e = a[t];
                    m.prototype[t] = function () {
                        var n = this._wrapped;
                        return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], Z(this, n)
                    }
                }), m.each(["concat", "join", "slice"], function (t) {
                    var e = a[t];
                    m.prototype[t] = function () {
                        return Z(this, e.apply(this._wrapped, arguments))
                    }
                }), m.prototype.value = function () {
                    return this._wrapped
                }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
                    return String(this._wrapped)
                }, r = [], void 0 !== (i = function () {
                    return m
                }.apply(e, r)) && (n.exports = i)
            }()
        }).call(e, n(67), n(104)(t))
    }, function (t, e) {
        var n = t.exports = { version: "2.6.9" };
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        t.exports = { default: n(84), __esModule: !0 }
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e, n) {
        var r = n(42)("wks"), i = n(32), o = n(3).Symbol, s = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t))
        }).store = r
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(138), a = n(0), u = a.extend, c = n(18), l = n(6), f = l.getSessionToken, h = n(48),
            d = function (t, e) {
                var n = (new Date).getTime(), r = s(n + t);
                return e ? r + "," + n + ",master" : r + "," + n
            }, p = function (t, e) {
                e ? t["X-LC-Sign"] = d(c.applicationKey) : t["X-LC-Key"] = c.applicationKey
            }, v = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1],
                    n = { "X-LC-Id": c.applicationId, "Content-Type": "application/json;charset=UTF-8" }, r = !1;
                return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey : "boolean" == typeof c._config.useMasterKey && (r = c._config.useMasterKey), r ? c.masterKey ? e ? n["X-LC-Sign"] = d(c.masterKey, !0) : n["X-LC-Key"] = c.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), p(n, e)) : p(n, e), c.hookKey && (n["X-LC-Hook-Key"] = c.hookKey), null !== c._config.production && (n["X-LC-Prod"] = String(c._config.production)), n["X-LC-UA"] = c._sharedConfig.userAgent, i.default.resolve().then(function () {
                    var e = f(t);
                    if (e) n["X-LC-Session"] = e; else if (!c._config.disableCurrentUser) return c.User.currentAsync().then(function (t) {
                        return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken), n
                    });
                    return n
                })
            }, _ = function (t) {
                var e = t.service, n = void 0 === e ? "api" : e, r = t.version, i = void 0 === r ? "1.1" : r, o = t.path,
                    s = c._config.serverURLs[n];
                if (!s) throw new Error("undefined server URL for " + n);
                return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s
            }, y = function (t) {
                var e = t.service, n = t.version, r = t.method, i = t.path, s = t.query, a = t.data, u = t.authOptions,
                    l = t.signKey, f = void 0 === l || l;
                if (!c.applicationId || !c.applicationKey && !c.masterKey) throw new Error("Not initialized");
                c._appRouter && c._appRouter.refresh();
                var d = c._config.requestTimeout, p = _({ service: e, path: i, version: n });
                return v(u, f).then(function (t) {
                    return h({ method: r, url: p, query: s, data: a, headers: t, timeout: d }).catch(function (t) {
                        var e = { code: t.code || -1, error: t.message || t.responseText };
                        if (t.response && t.response.code) e = t.response; else if (t.responseText) try {
                            e = JSON.parse(t.responseText)
                        } catch (t) {
                        }
                        e.rawMessage = e.rawMessage || e.error, c._sharedConfig.keepErrorRawMessage || (e.error += " [" + (t.statusCode || "N/A") + " " + r + " " + p + "]");
                        var n = new Error(e.error);
                        throw delete e.error, o.extend(n, e)
                    })
                })
            }, m = function (t, e, n, r, i, o, s) {
                var a = "";
                if (t && (a += "/" + t), e && (a += "/" + e), n && (a += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
                if (i && i._where) throw new Error("_where should be in the query");
                return r && "get" === r.toLowerCase() && (s = u({}, s, i), i = null), y({
                    method: r,
                    path: a,
                    query: s,
                    data: i,
                    authOptions: o
                })
            };
        c.request = y, t.exports = { _request: m, request: y }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = n(2), o = r(i), s = n(112), a = r(s), u = n(0), c = function (t) {
            return u.isNull(t) || u.isUndefined(t)
        }, l = function (t) {
            return u.isArray(t) ? t : void 0 === t || null === t ? [] : [t]
        }, f = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.keys, n = t.include,
                r = t.includeACL, i = {};
            return e && (i.keys = l(e).join(",")), n && (i.include = l(n).join(",")), r && (i.returnACL = r), i
        }, h = function (t) {
            return t.sessionToken ? t.sessionToken : t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0
        }, d = function (t) {
            return function (e) {
                return t(e), e
            }
        }, p = function () {
        }, v = function (t, e, n) {
            var r;
            return r = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                t.apply(this, arguments)
            }, u.extend(r, t), p.prototype = t.prototype, r.prototype = new p, e && u.extend(r.prototype, e), n && u.extend(r, n), r.prototype.constructor = r, r.__super__ = t.prototype, r
        }, _ = function (t) {
            return new Date(t)
        }, y = function (t, e, n) {
            var r = e.split("."), i = r.pop(), o = t;
            return r.forEach(function (t) {
                void 0 === o[t] && (o[t] = {}), o = o[t]
            }), o[i] = n, t
        }, m = function (t, e) {
            for (var n = e.split("."), r = n[0], i = n.pop(), o = t, s = 0; s < n.length; s++) if (void 0 === (o = o[n[s]])) return [void 0, void 0, i];
            return [o[i], o, i, r]
        }, g = function (t) {
            return u.isObject(t) && (0, a.default)(t) === Object.prototype
        }, b = function t(e, n) {
            return e() ? n().then(function () {
                return t(e, n)
            }) : o.default.resolve()
        };
        t.exports = {
            isNullOrUndefined: c,
            ensureArray: l,
            transformFetchOptions: f,
            getSessionToken: h,
            tap: d,
            inherits: v,
            parseDate: _,
            setValue: y,
            findValue: m,
            isPlainObject: g,
            continueWhile: b
        }
    }, function (t, e, n) {
        var r = n(8), i = n(54), o = n(39), s = Object.defineProperty;
        e.f = n(11) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return s(t, e, n)
            } catch (t) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        var r = n(13);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        t.exports = { default: n(105), __esModule: !0 }
    }, function (t, e, n) {
        var r = n(3), i = n(1), o = n(23), s = n(12), a = n(14), u = function (t, e, n) {
            var c, l, f, h = t & u.F, d = t & u.G, p = t & u.S, v = t & u.P, _ = t & u.B, y = t & u.W,
                m = d ? i : i[e] || (i[e] = {}), g = m.prototype, b = d ? r : p ? r[e] : (r[e] || {}).prototype;
            d && (n = e);
            for (c in n) (l = !h && b && void 0 !== b[c]) && a(m, c) || (f = l ? b[c] : n[c], m[c] = d && "function" != typeof b[c] ? n[c] : _ && l ? o(f, r) : y && b[c] == f ? function (t) {
                var e = function (e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(f) : v && "function" == typeof f ? o(Function.call, f) : f, v && ((m.virtual || (m.virtual = {}))[c] = f, t & u.R && g && !g[c] && s(g, c, f)))
        };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
    }, function (t, e, n) {
        t.exports = !n(24)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(7), i = n(25);
        t.exports = n(11) ? function (t, e, n) {
            return r.f(t, e, i(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e, n) {
        var r = n(88), i = n(37);
        t.exports = function (t) {
            return r(i(t))
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n = new Error(e);
            return n.code = t, n
        }

        n(0).extend(r, {
            OTHER_CAUSE: -1,
            INTERNAL_SERVER_ERROR: 1,
            CONNECTION_FAILED: 100,
            OBJECT_NOT_FOUND: 101,
            INVALID_QUERY: 102,
            INVALID_CLASS_NAME: 103,
            MISSING_OBJECT_ID: 104,
            INVALID_KEY_NAME: 105,
            INVALID_POINTER: 106,
            INVALID_JSON: 107,
            COMMAND_UNAVAILABLE: 108,
            NOT_INITIALIZED: 109,
            INCORRECT_TYPE: 111,
            INVALID_CHANNEL_NAME: 112,
            PUSH_MISCONFIGURED: 115,
            OBJECT_TOO_LARGE: 116,
            OPERATION_FORBIDDEN: 119,
            CACHE_MISS: 120,
            INVALID_NESTED_KEY: 121,
            INVALID_FILE_NAME: 122,
            INVALID_ACL: 123,
            TIMEOUT: 124,
            INVALID_EMAIL_ADDRESS: 125,
            MISSING_CONTENT_TYPE: 126,
            MISSING_CONTENT_LENGTH: 127,
            INVALID_CONTENT_LENGTH: 128,
            FILE_TOO_LARGE: 129,
            FILE_SAVE_ERROR: 130,
            FILE_DELETE_ERROR: 153,
            DUPLICATE_VALUE: 137,
            INVALID_ROLE_NAME: 139,
            EXCEEDED_QUOTA: 140,
            SCRIPT_FAILED: 141,
            VALIDATION_ERROR: 142,
            INVALID_IMAGE_DATA: 150,
            UNSAVED_FILE_ERROR: 151,
            INVALID_PUSH_TIME_ERROR: 152,
            USERNAME_MISSING: 200,
            PASSWORD_MISSING: 201,
            USERNAME_TAKEN: 202,
            EMAIL_TAKEN: 203,
            EMAIL_MISSING: 204,
            EMAIL_NOT_FOUND: 205,
            SESSION_MISSING: 206,
            MUST_CREATE_USER_THROUGH_SIGNUP: 207,
            ACCOUNT_ALREADY_LINKED: 208,
            LINKED_ID_MISSING: 250,
            INVALID_LINKED_SESSION: 251,
            UNSUPPORTED_SERVICE: 252,
            X_DOMAIN_REQUEST: 602
        }), t.exports = r
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            function r(t) {
                return t && t.__esModule ? t : { default: t }
            }

            var i = n(9), o = r(i), s = n(68), a = r(s), u = n(2), c = r(u), l = n(0), f = n(69), h = n(19), d = n(6),
                p = d.inherits, v = d.parseDate, _ = n(70), y = n(20), m = y.setAdapters, g = y.adapterManager,
                b = e.AV || {};
            b._config = { serverURLs: {}, useMasterKey: !1, production: null, realtime: null, requestTimeout: null };
            var w = "LeanCloud-JS-SDK/" + _;
            b._sharedConfig = { userAgent: w, liveQueryRealtime: null }, g.on("platformInfo", function (t) {
                var e = w;
                if (t) if (t.userAgent) e = t.userAgent; else {
                    var n = t.name;
                    t.version && (n += "/" + t.version), t.extra && (n += "; " + t.extra), e += " (" + n + ")"
                }
                b._sharedConfig.userAgent = e
            }), b._getAVPath = function (t) {
                if (!b.applicationId) throw new Error("You need to call AV.initialize before using AV.");
                if (t || (t = ""), !l.isString(t)) throw new Error("Tried to get a localStorage path that wasn't a String.");
                return "/" === t[0] && (t = t.substring(1)), "AV/" + b.applicationId + "/" + t
            }, b._installationId = null, b._getInstallationId = function () {
                if (b._installationId) return c.default.resolve(b._installationId);
                var t = b._getAVPath("installationId");
                return b.localStorage.getItemAsync(t).then(function (e) {
                    return b._installationId = e, b._installationId ? e : (b._installationId = e = f(), b.localStorage.setItemAsync(t, e).then(function () {
                        return e
                    }))
                })
            }, b._subscriptionId = null, b._refreshSubscriptionId = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b._getAVPath("subscriptionId"),
                    e = b._subscriptionId = f();
                return b.localStorage.setItemAsync(t, e).then(function () {
                    return e
                })
            }, b._getSubscriptionId = function () {
                if (b._subscriptionId) return c.default.resolve(b._subscriptionId);
                var t = b._getAVPath("subscriptionId");
                return b.localStorage.getItemAsync(t).then(function (e) {
                    return b._subscriptionId = e, b._subscriptionId || (e = b._refreshSubscriptionId(t)), e
                })
            }, b._parseDate = v, b._extend = function (t, e) {
                var n = p(this, t, e);
                return n.extend = this.extend, n
            }, b._encode = function (t, e, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (t instanceof b.Object) {
                    if (n) throw new Error("AV.Objects not allowed here");
                    return e && !l.include(e, t) && t._hasData ? t._toFullJSON(e.concat(t), r) : t._toPointer()
                }
                if (t instanceof b.ACL) return t.toJSON();
                if (l.isDate(t)) return r ? { __type: "Date", iso: t.toJSON() } : t.toJSON();
                if (t instanceof b.GeoPoint) return t.toJSON();
                if (l.isArray(t)) return l.map(t, function (t) {
                    return b._encode(t, e, n, r)
                });
                if (l.isRegExp(t)) return t.source;
                if (t instanceof b.Relation) return t.toJSON();
                if (t instanceof b.Op) return t.toJSON();
                if (t instanceof b.File) {
                    if (!t.url() && !t.id) throw new Error("Tried to save an object containing an unsaved file.");
                    return t._toFullJSON(e, r)
                }
                return l.isObject(t) ? l.mapObject(t, function (t, i) {
                    return b._encode(t, e, n, r)
                }) : t
            }, b._decode = function (t, e) {
                if (!l.isObject(t) || l.isDate(t)) return t;
                if (l.isArray(t)) return l.map(t, function (t) {
                    return b._decode(t)
                });
                if (t instanceof b.Object) return t;
                if (t instanceof b.File) return t;
                if (t instanceof b.Op) return t;
                if (t instanceof b.GeoPoint) return t;
                if (t instanceof b.ACL) return t;
                if ("ACL" === e) return new b.ACL(t);
                if (t.__op) return b.Op._decode(t);
                var n;
                if ("Pointer" === t.__type) {
                    n = t.className;
                    var r = b.Object._create(n);
                    if ((0, a.default)(t).length > 3) {
                        var i = l.clone(t);
                        delete i.__type, delete i.className, r._finishFetch(i, !0)
                    } else r._finishFetch({ objectId: t.objectId }, !1);
                    return r
                }
                if ("Object" === t.__type) {
                    n = t.className;
                    var o = l.clone(t);
                    delete o.__type, delete o.className;
                    var s = b.Object._create(n);
                    return s._finishFetch(o, !0), s
                }
                if ("Date" === t.__type) return b._parseDate(t.iso);
                if ("GeoPoint" === t.__type) return new b.GeoPoint({ latitude: t.latitude, longitude: t.longitude });
                if ("Relation" === t.__type) {
                    if (!e) throw new Error("key missing decoding a Relation");
                    var u = new b.Relation(null, e);
                    return u.targetClassName = t.className, u
                }
                if ("File" === t.__type) {
                    var c = new b.File(t.name), f = l.clone(t);
                    return delete f.__type, c._finishFetch(f), c
                }
                return l.mapObject(t, b._decode)
            }, b.parseJSON = b._decode, b.parse = function (t) {
                return b.parseJSON(JSON.parse(t))
            }, b.stringify = function (t) {
                return (0, o.default)(b._encode(t, [], !1, !0))
            }, b._encodeObjectOrArray = function (t) {
                var e = function (t) {
                    return t && t._toFullJSON && (t = t._toFullJSON([])), l.mapObject(t, function (t) {
                        return b._encode(t, [])
                    })
                };
                return l.isArray(t) ? t.map(function (t) {
                    return e(t)
                }) : e(t)
            }, b._arrayEach = l.each, b._traverse = function (t, e, n) {
                if (t instanceof b.Object) {
                    if (n = n || [], l.indexOf(n, t) >= 0) return;
                    return n.push(t), b._traverse(t.attributes, e, n), e(t)
                }
                return t instanceof b.Relation || t instanceof b.File ? e(t) : l.isArray(t) ? (l.each(t, function (r, i) {
                    var o = b._traverse(r, e, n);
                    o && (t[i] = o)
                }), e(t)) : l.isObject(t) ? (b._each(t, function (r, i) {
                    var o = b._traverse(r, e, n);
                    o && (t[i] = o)
                }), e(t)) : e(t)
            }, b._objectEach = b._each = function (t, e) {
                l.isObject(t) ? l.each(l.keys(t), function (n) {
                    e(t[n], n)
                }) : l.each(t, e)
            }, b.debug = {
                enable: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "leancloud*";
                    return h.enable(t)
                }, disable: h.disable
            }, b.setAdapters = m, t.exports = b
        }).call(e, n(67))
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }

        function o(e) {
            if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var r = 0, i = 0;
                e[0].replace(/%[a-zA-Z%]/g, function (t) {
                    "%%" !== t && (r++, "%c" === t && (i = r))
                }), e.splice(i, 0, n)
            }
        }

        function s() {
            var t;
            return "object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && (t = console).log.apply(t, arguments)
        }

        function a(t) {
            try {
                t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
            } catch (t) {
            }
        }

        function u() {
            var t;
            try {
                t = e.storage.getItem("debug")
            } catch (t) {
            }
            return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t
        }

        e.log = s, e.formatArgs = o, e.save = a, e.load = u, e.useColors = i, e.storage = function () {
            try {
                return localStorage
            } catch (t) {
            }
        }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n(110)(e), t.exports.formatters.j = function (t) {
            try {
                return JSON.stringify(t)
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(71), o = n(6), s = o.inherits, a = s(i, {
            constructor: function () {
                i.apply(this), this._adapters = {}
            }, getAdapter: function (t) {
                var e = this._adapters[t];
                if (void 0 === e) throw new Error(t + " adapter is not configured");
                return e
            }, setAdapters: function (t) {
                var e = this;
                r.extend(this._adapters, t), r.keys(t).forEach(function (n) {
                    return e.emit(n, t[n])
                })
            }
        }), u = new a;
        t.exports = { getAdapter: u.getAdapter.bind(u), setAdapters: u.setAdapters.bind(u), adapterManager: u }
    }, function (t, e, n) {
        "use strict";
        var r = n(85)(!0);
        n(53)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, n = this._i;
            return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 })
        })
    }, function (t, e) {
        t.exports = !0
    }, function (t, e, n) {
        var r = n(30);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        var r = n(37);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        e.__esModule = !0;
        var i = n(35), o = r(i), s = n(29), a = r(s),
            u = "function" == typeof a.default && "symbol" == typeof o.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : typeof t
            };
        e.default = "function" == typeof a.default && "symbol" === u(o.default) ? function (t) {
            return void 0 === t ? "undefined" : u(t)
        } : function (t) {
            return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : void 0 === t ? "undefined" : u(t)
        }
    }, function (t, e, n) {
        t.exports = { default: n(120), __esModule: !0 }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        var r = n(57), i = n(43);
        t.exports = Object.keys || function (t) {
            return r(t, i)
        }
    }, function (t, e) {
        var n = 0, r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e, n) {
        var r = n(7).f, i = n(14), o = n(4)("toStringTag");
        t.exports = function (t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, { configurable: !0, value: e })
        }
    }, function (t, e, n) {
        n(91);
        for (var r = n(3), i = n(12), o = n(17), s = n(4)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
            var c = a[u], l = r[c], f = l && l.prototype;
            f && !f[s] && i(f, s, c), o[c] = o.Array
        }
    }, function (t, e, n) {
        t.exports = { default: n(119), __esModule: !0 }
    }, function (t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        var r = n(13), i = n(3).document, o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    }, function (t, e, n) {
        var r = n(13);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e, n) {
        var r = n(36), i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var r = n(42)("keys"), i = n(32);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t))
        }
    }, function (t, e, n) {
        var r = n(1), i = n(3), o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(22) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var r = n(26), i = n(4)("toStringTag"), o = "Arguments" == r(function () {
            return arguments
        }()), s = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        };
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    }, function (t, e, n) {
        var r = n(44), i = n(4)("iterator"), o = n(17);
        t.exports = n(1).getIteratorMethod = function (t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e, n;
            this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            }), this.resolve = i(e), this.reject = i(n)
        }

        var i = n(30);
        t.exports.f = function (t) {
            return new r(t)
        }
    }, function (t, e, n) {
        var r = n(10), i = n(1), o = n(24);
        t.exports = function (t, e) {
            var n = (i.Object || {})[t] || Object[t], s = {};
            s[t] = e(n), r(r.S + r.F * o(function () {
                n(1)
            }), "Object", s)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = n(9), o = r(i), s = n(28), a = r(s), u = n(68), c = r(u), l = (n(0), n(128)), f = l.timeout, h = n(19),
            d = h("leancloud:request"), p = h("leancloud:request:error"), v = n(20), _ = v.getAdapter, y = 0,
            m = function (t) {
                var e = t.method, n = t.url, r = t.query, i = t.data, s = t.headers, u = void 0 === s ? {} : s,
                    l = t.timeout, v = t.onprogress;
                if (r) {
                    var m = (0, c.default)(r).map(function (t) {
                        var e = r[t];
                        if (void 0 !== e) {
                            var n = "object" === (void 0 === e ? "undefined" : (0, a.default)(e)) ? (0, o.default)(e) : e;
                            return encodeURIComponent(t) + "=" + encodeURIComponent(n)
                        }
                    }).filter(function (t) {
                        return t
                    }).join("&");
                    n = n + "?" + m
                }
                var g = y++;
                d("request(%d) %s %s %o %o %o", g, e, n, r, i, u);
                var b = _("request"), w = b(n, { method: e, headers: u, data: i, onprogress: v }).then(function (t) {
                    if (d("response(%d) %d %O %o", g, t.status, t.data || t.text, t.header), !1 === t.ok) {
                        var e = new Error;
                        throw e.response = t, e
                    }
                    return t.data
                }).catch(function (t) {
                    throw t.response && (h.enabled("leancloud:request") || p("request(%d) %s %s %o %o %o", g, e, n, r, i, u), p("response(%d) %d %O %o", g, t.response.status, t.response.data || t.response.text, t.response.header), t.statusCode = t.response.status, t.responseText = t.response.text, t.response = t.response.data), t
                });
                return l ? f(w, l) : w
            };
        t.exports = m
    }, function (t, e, n) {
        e.f = n(4)
    }, function (t, e, n) {
        var r = n(3), i = n(1), o = n(22), s = n(49), a = n(7).f;
        t.exports = function (t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, { value: s.f(t) })
        }
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e) {
    }, function (t, e, n) {
        "use strict";
        var r = n(22), i = n(10), o = n(55), s = n(12), a = n(17), u = n(86), c = n(33), l = n(59),
            f = n(4)("iterator"), h = !([].keys && "next" in [].keys()), d = function () {
                return this
            };
        t.exports = function (t, e, n, p, v, _, y) {
            u(n, e, p);
            var m, g, b, w = function (t) {
                if (!h && t in E) return E[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, O = e + " Iterator", A = "values" == v, S = !1, E = t.prototype,
                C = E[f] || E["@@iterator"] || v && E[v], x = C || w(v), T = v ? A ? w("entries") : x : void 0,
                j = "Array" == e ? E.entries || C : C;
            if (j && (b = l(j.call(new t))) !== Object.prototype && b.next && (c(b, O, !0), r || "function" == typeof b[f] || s(b, f, d)), A && C && "values" !== C.name && (S = !0, x = function () {
                return C.call(this)
            }), r && !y || !h && !S && E[f] || s(E, f, x), a[e] = x, a[O] = d, v) if (m = {
                values: A ? x : w("values"),
                keys: _ ? x : w("keys"),
                entries: T
            }, y) for (g in m) g in E || o(E, g, m[g]); else i(i.P + i.F * (h || S), e, m);
            return m
        }
    }, function (t, e, n) {
        t.exports = !n(11) && !n(24)(function () {
            return 7 != Object.defineProperty(n(38)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        t.exports = n(12)
    }, function (t, e, n) {
        var r = n(8), i = n(87), o = n(43), s = n(41)("IE_PROTO"), a = function () {
        }, u = function () {
            var t, e = n(38)("iframe"), r = o.length;
            for (e.style.display = "none", n(58).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
            return u()
        };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[s] = t) : n = u(), void 0 === e ? n : i(n, e)
        }
    }, function (t, e, n) {
        var r = n(14), i = n(15), o = n(89)(!1), s = n(41)("IE_PROTO");
        t.exports = function (t, e) {
            var n, a = i(t), u = 0, c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; e.length > u;) r(a, n = e[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function (t, e, n) {
        var r = n(3).document;
        t.exports = r && r.documentElement
    }, function (t, e, n) {
        var r = n(14), i = n(27), o = n(41)("IE_PROTO"), s = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function (t, e, n) {
        var r = n(8);
        t.exports = function (t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(17), i = n(4)("iterator"), o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function (t, e, n) {
        var r = n(8), i = n(30), o = n(4)("species");
        t.exports = function (t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || void 0 == (n = r(s)[o]) ? e : i(n)
        }
    }, function (t, e, n) {
        var r, i, o, s = n(23), a = n(97), u = n(58), c = n(38), l = n(3), f = l.process, h = l.setImmediate,
            d = l.clearImmediate, p = l.MessageChannel, v = l.Dispatch, _ = 0, y = {}, m = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e()
                }
            }, g = function (t) {
                m.call(t.data)
            };
        h && d || (h = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return y[++_] = function () {
                a("function" == typeof t ? t : Function(t), e)
            }, r(_), _
        }, d = function (t) {
            delete y[t]
        }, "process" == n(26)(f) ? r = function (t) {
            f.nextTick(s(m, t, 1))
        } : v && v.now ? r = function (t) {
            v.now(s(m, t, 1))
        } : p ? (i = new p, o = i.port2, i.port1.onmessage = g, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function (t) {
            l.postMessage(t + "", "*")
        }, l.addEventListener("message", g, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
            u.appendChild(c("script")).onreadystatechange = function () {
                u.removeChild(this), m.call(t)
            }
        } : function (t) {
            setTimeout(s(m, t, 1), 0)
        }), t.exports = { set: h, clear: d }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return { e: !1, v: t() }
            } catch (t) {
                return { e: !0, v: t }
            }
        }
    }, function (t, e, n) {
        var r = n(8), i = n(13), o = n(46);
        t.exports = function (t, e) {
            if (r(t), i(e) && e.constructor === t) return e;
            var n = o.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function (t, e, n) {
        var r = n(4)("iterator"), i = !1;
        try {
            var o = [7][r]();
            o.return = function () {
                i = !0
            }, Array.from(o, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7], s = o[r]();
                s.next = function () {
                    return { done: n = !0 }
                }, o[r] = function () {
                    return s
                }, t(o)
            } catch (t) {
            }
            return n
        }
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e, n) {
        t.exports = { default: n(106), __esModule: !0 }
    }, function (t, e, n) {
        function r(t, e, n) {
            var r = e && n || 0;
            "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null), t = t || {};
            var s = t.random || (t.rng || i)();
            if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) for (var a = 0; a < 16; ++a) e[r + a] = s[a];
            return e || o(s)
        }

        var i = n(108), o = n(109);
        t.exports = r
    }, function (t, e, n) {
        "use strict";
        t.exports = "4.10.0"
    }, function (t, e, n) {
        "use strict";

        function r() {
        }

        function i(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1
        }

        function o() {
            this._events = new r, this._eventsCount = 0
        }

        var s = Object.prototype.hasOwnProperty, a = "~";
        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), o.prototype.eventNames = function () {
            var t, e, n = [];
            if (0 === this._eventsCount) return n;
            for (e in t = this._events) s.call(t, e) && n.push(a ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
        }, o.prototype.listeners = function (t, e) {
            var n = a ? a + t : t, r = this._events[n];
            if (e) return !!r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
            return s
        }, o.prototype.emit = function (t, e, n, r, i, o) {
            var s = a ? a + t : t;
            if (!this._events[s]) return !1;
            var u, c, l = this._events[s], f = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                    case 1:
                        return l.fn.call(l.context), !0;
                    case 2:
                        return l.fn.call(l.context, e), !0;
                    case 3:
                        return l.fn.call(l.context, e, n), !0;
                    case 4:
                        return l.fn.call(l.context, e, n, r), !0;
                    case 5:
                        return l.fn.call(l.context, e, n, r, i), !0;
                    case 6:
                        return l.fn.call(l.context, e, n, r, i, o), !0
                }
                for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u)
            } else {
                var h, d = l.length;
                for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), f) {
                    case 1:
                        l[c].fn.call(l[c].context);
                        break;
                    case 2:
                        l[c].fn.call(l[c].context, e);
                        break;
                    case 3:
                        l[c].fn.call(l[c].context, e, n);
                        break;
                    case 4:
                        l[c].fn.call(l[c].context, e, n, r);
                        break;
                    default:
                        if (!u) for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                        l[c].fn.apply(l[c].context, u)
                }
            }
            return !0
        }, o.prototype.on = function (t, e, n) {
            var r = new i(e, n || this), o = a ? a + t : t;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
        }, o.prototype.once = function (t, e, n) {
            var r = new i(e, n || this, !0), o = a ? a + t : t;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
        }, o.prototype.removeListener = function (t, e, n, i) {
            var o = a ? a + t : t;
            if (!this._events[o]) return this;
            if (!e) return 0 == --this._eventsCount ? this._events = new r : delete this._events[o], this;
            var s = this._events[o];
            if (s.fn) s.fn !== e || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[o]); else {
                for (var u = 0, c = [], l = s.length; u < l; u++) (s[u].fn !== e || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r : delete this._events[o]
            }
            return this
        }, o.prototype.removeAllListeners = function (t) {
            var e;
            return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r : delete this._events[e])) : (this._events = new r, this._eventsCount = 0), this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
            return this
        }, o.prefixed = a, o.EventEmitter = o, t.exports = o
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(20), s = o.getAdapter, a = ["getItem", "setItem", "removeItem", "clear"], u = {
            get async() {
                return s("storage").async
            }
        };
        a.forEach(function (t) {
            u[t + "Async"] = function () {
                var e = s("storage");
                return i.default.resolve(e[t].apply(e, arguments))
            }, u[t] = function () {
                var e = s("storage");
                if (!e.async) return e[t].apply(e, arguments);
                var n = new Error("Synchronous API [" + t + "] is not available in this runtime.");
                throw n.code = "SYNC_API_NOT_AVAILABLE", n
            }
        }), t.exports = u
    }, function (t, e, n) {
        "use strict";
        var r = n(9), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(72), s = n(18), a = e.removeAsync = o.removeItemAsync.bind(o), u = function (t, e) {
            try {
                t = JSON.parse(t)
            } catch (t) {
                return null
            }
            if (t) {
                return t.expiredAt && t.expiredAt < Date.now() ? a(e).then(function () {
                    return null
                }) : t.value
            }
            return null
        };
        e.getAsync = function (t) {
            return t = "AV/" + s.applicationId + "/" + t, o.getItemAsync(t).then(function (e) {
                return u(e, t)
            })
        }, e.setAsync = function (t, e, n) {
            var r = { value: e };
            return "number" == typeof n && (r.expiredAt = Date.now() + n), o.setItemAsync("AV/" + s.applicationId + "/" + t, (0, i.default)(r))
        }
    }, function (t, e, n) {
        t.exports = { default: n(116), __esModule: !0 }
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, n) {
        var r = n(57), i = n(43).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, i)
        }
    }, function (t, e, n) {
        var r = n(51), i = n(25), o = n(15), s = n(39), a = n(14), u = n(54), c = Object.getOwnPropertyDescriptor;
        e.f = n(11) ? c : function (t, e) {
            if (t = o(t), e = s(e, !0), u) try {
                return c(t, e)
            } catch (t) {
            }
            if (a(t, e)) return i(!r.f.call(t, e), t[e])
        }
    }, function (t, e) {
        var n = {
            utf8: {
                stringToBytes: function (t) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
                }, bytesToString: function (t) {
                    return decodeURIComponent(escape(n.bin.bytesToString(t)))
                }
            }, bin: {
                stringToBytes: function (t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                    return e
                }, bytesToString: function (t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                    return e.join("")
                }
            }
        };
        t.exports = n
    }, function (t, e, n) {
        t.exports = { default: n(147), __esModule: !0 }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        function i(t) {
            "@babel/helpers - typeof";
            return (i = "function" == typeof f.default && "symbol" === (0, c.default)(a.default) ? function (t) {
                return void 0 === t ? "undefined" : (0, c.default)(t)
            } : function (t) {
                return t && "function" == typeof f.default && t.constructor === f.default && t !== f.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, c.default)(t)
            })(t)
        }

        function o(t) {
            return null !== t && "object" === i(t)
        }

        var s = n(35), a = r(s), u = n(28), c = r(u), l = n(29), f = r(l);
        t.exports = o
    }, function (t, e, n) {
        "use strict";
        var r = n(82), i = n(166);
        t.exports = i(r)
    }, function (t, e, n) {
        "use strict";
        t.exports = n(83)
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(18);
        s._ = o, s.version = n(70), s.Promise = i.default, s.localStorage = n(72), s.Cache = n(73), s.Error = n(16), n(115), n(129)(s), n(130)(s), n(131)(s), n(132)(s), n(133)(s), n(134)(s), n(142)(s), n(152)(s), n(153)(s), n(155)(s), n(156)(s), n(157)(s), n(158)(s), n(159)(s), n(160)(s), n(161)(s), n(162)(s), n(163)(s), s.Conversation = n(164), n(165), t.exports = s
    }, function (t, e, n) {
        n(52), n(21), n(34), n(94), n(102), n(103), t.exports = n(1).Promise
    }, function (t, e, n) {
        var r = n(36), i = n(37);
        t.exports = function (t) {
            return function (e, n) {
                var o, s, a = String(i(e)), u = r(n), c = a.length;
                return u < 0 || u >= c ? t ? "" : void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(56), i = n(25), o = n(33), s = {};
        n(12)(s, n(4)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(s, { next: i(1, n) }), o(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(7), i = n(8), o = n(31);
        t.exports = n(11) ? Object.defineProperties : function (t, e) {
            i(t);
            for (var n, s = o(e), a = s.length, u = 0; a > u;) r.f(t, n = s[u++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(26);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        var r = n(15), i = n(40), o = n(90);
        t.exports = function (t) {
            return function (e, n, s) {
                var a, u = r(e), c = i(u.length), l = o(s, c);
                if (t && n != n) {
                    for (; c > l;) if ((a = u[l++]) != a) return !0
                } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(36), i = Math.max, o = Math.min;
        t.exports = function (t, e) {
            return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(92), i = n(93), o = n(17), s = n(15);
        t.exports = n(53)(Array, "Array", function (t, e) {
            this._t = s(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function (t, e) {
        t.exports = function () {
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t }
        }
    }, function (t, e, n) {
        "use strict";
        var r, i, o, s, a = n(22), u = n(3), c = n(23), l = n(44), f = n(10), h = n(13), d = n(30), p = n(95),
            v = n(96), _ = n(62), y = n(63).set, m = n(98)(), g = n(46), b = n(64), w = n(99), O = n(65),
            A = u.TypeError, S = u.process, E = S && S.versions, C = E && E.v8 || "", x = u.Promise,
            T = "process" == l(S), j = function () {
            }, N = i = g.f, U = !!function () {
                try {
                    var t = x.resolve(1), e = (t.constructor = {})[n(4)("species")] = function (t) {
                        t(j, j)
                    };
                    return (T || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                } catch (t) {
                }
            }(), I = function (t) {
                var e;
                return !(!h(t) || "function" != typeof (e = t.then)) && e
            }, k = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    m(function () {
                        for (var r = t._v, i = 1 == t._s, o = 0; n.length > o;) !function (e) {
                            var n, o, s, a = i ? e.ok : e.fail, u = e.resolve, c = e.reject, l = e.domain;
                            try {
                                a ? (i || (2 == t._h && D(t), t._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === e.promise ? c(A("Promise-chain cycle")) : (o = I(n)) ? o.call(n, u, c) : u(n)) : c(r)
                            } catch (t) {
                                l && !s && l.exit(), c(t)
                            }
                        }(n[o++]);
                        t._c = [], t._n = !1, e && !t._h && P(t)
                    })
                }
            }, P = function (t) {
                y.call(u, function () {
                    var e, n, r, i = t._v, o = R(t);
                    if (o && (e = b(function () {
                        T ? S.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                            promise: t,
                            reason: i
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                    }), t._h = T || R(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                })
            }, R = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, D = function (t) {
                y.call(u, function () {
                    var e;
                    T ? S.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v })
                })
            }, L = function (t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), k(e, !0))
            }, M = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw A("Promise can't be resolved itself");
                        (e = I(t)) ? m(function () {
                            var r = { _w: n, _d: !1 };
                            try {
                                e.call(t, c(M, r, 1), c(L, r, 1))
                            } catch (t) {
                                L.call(r, t)
                            }
                        }) : (n._v = t, n._s = 1, k(n, !1))
                    } catch (t) {
                        L.call({ _w: n, _d: !1 }, t)
                    }
                }
            };
        U || (x = function (t) {
            p(this, x, "Promise", "_h"), d(t), r.call(this);
            try {
                t(c(M, this, 1), c(L, this, 1))
            } catch (t) {
                L.call(this, t)
            }
        }, r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, r.prototype = n(100)(x.prototype, {
            then: function (t, e) {
                var n = N(_(this, x));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = T ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), o = function () {
            var t = new r;
            this.promise = t, this.resolve = c(M, t, 1), this.reject = c(L, t, 1)
        }, g.f = N = function (t) {
            return t === x || t === s ? new o(t) : i(t)
        }), f(f.G + f.W + f.F * !U, { Promise: x }), n(33)(x, "Promise"), n(101)("Promise"), s = n(1).Promise, f(f.S + f.F * !U, "Promise", {
            reject: function (t) {
                var e = N(this);
                return (0, e.reject)(t), e.promise
            }
        }), f(f.S + f.F * (a || !U), "Promise", {
            resolve: function (t) {
                return O(a && this === s ? x : this, t)
            }
        }), f(f.S + f.F * !(U && n(66)(function (t) {
            x.all(t).catch(j)
        })), "Promise", {
            all: function (t) {
                var e = this, n = N(e), r = n.resolve, i = n.reject, o = b(function () {
                    var n = [], o = 0, s = 1;
                    v(t, !1, function (t) {
                        var a = o++, u = !1;
                        n.push(void 0), s++, e.resolve(t).then(function (t) {
                            u || (u = !0, n[a] = t, --s || r(n))
                        }, i)
                    }), --s || r(n)
                });
                return o.e && i(o.v), n.promise
            }, race: function (t) {
                var e = this, n = N(e), r = n.reject, i = b(function () {
                    v(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return i.e && r(i.v), n.promise
            }
        })
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var r = n(23), i = n(60), o = n(61), s = n(8), a = n(40), u = n(45), c = {}, l = {},
            e = t.exports = function (t, e, n, f, h) {
                var d, p, v, _, y = h ? function () {
                    return t
                } : u(t), m = r(n, f, e ? 2 : 1), g = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (o(y)) {
                    for (d = a(t.length); d > g; g++) if ((_ = e ? m(s(p = t[g])[0], p[1]) : m(t[g])) === c || _ === l) return _
                } else for (v = y.call(t); !(p = v.next()).done;) if ((_ = i(v, m, p.value, e)) === c || _ === l) return _
            };
        e.BREAK = c, e.RETURN = l
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var r = n(3), i = n(63).set, o = r.MutationObserver || r.WebKitMutationObserver, s = r.process, a = r.Promise,
            u = "process" == n(26)(s);
        t.exports = function () {
            var t, e, n, c = function () {
                var r, i;
                for (u && (r = s.domain) && r.exit(); t;) {
                    i = t.fn, t = t.next;
                    try {
                        i()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (u) n = function () {
                s.nextTick(c)
            }; else if (!o || r.navigator && r.navigator.standalone) if (a && a.resolve) {
                var l = a.resolve(void 0);
                n = function () {
                    l.then(c)
                }
            } else n = function () {
                i.call(r, c)
            }; else {
                var f = !0, h = document.createTextNode("");
                new o(c).observe(h, { characterData: !0 }), n = function () {
                    h.data = f = !f
                }
            }
            return function (r) {
                var i = { fn: r, next: void 0 };
                e && (e.next = i), t || (t = i, n()), e = i
            }
        }
    }, function (t, e, n) {
        var r = n(3), i = r.navigator;
        t.exports = i && i.userAgent || ""
    }, function (t, e, n) {
        var r = n(12);
        t.exports = function (t, e, n) {
            for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(3), i = n(1), o = n(7), s = n(11), a = n(4)("species");
        t.exports = function (t) {
            var e = "function" == typeof i[t] ? i[t] : r[t];
            s && e && !e[a] && o.f(e, a, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(10), i = n(1), o = n(3), s = n(62), a = n(65);
        r(r.P + r.R, "Promise", {
            finally: function (t) {
                var e = s(this, i.Promise || o.Promise), n = "function" == typeof t;
                return this.then(n ? function (n) {
                    return a(e, t()).then(function () {
                        return n
                    })
                } : t, n ? function (n) {
                    return a(e, t()).then(function () {
                        throw n
                    })
                } : t)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(10), i = n(46), o = n(64);
        r(r.S, "Promise", {
            try: function (t) {
                var e = i.f(this), n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise
            }
        })
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0, get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, e, n) {
        var r = n(1), i = r.JSON || (r.JSON = { stringify: JSON.stringify });
        t.exports = function (t) {
            return i.stringify.apply(i, arguments)
        }
    }, function (t, e, n) {
        n(107), t.exports = n(1).Object.keys
    }, function (t, e, n) {
        var r = n(27), i = n(31);
        n(47)("keys", function () {
            return function (t) {
                return i(r(t))
            }
        })
    }, function (t, e) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            t.exports = function () {
                return n(r), r
            }
        } else {
            var i = new Array(16);
            t.exports = function () {
                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;
                return i
            }
        }
    }, function (t, e) {
        function n(t, e) {
            var n = e || 0, i = r;
            return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("")
        }

        for (var r = [], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);
        t.exports = n
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            function e(t) {
                for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
                return r.colors[Math.abs(e) % r.colors.length]
            }

            function r(t) {
                function n() {
                    if (n.enabled) {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        var o = n, a = Number(new Date), u = a - (s || a);
                        o.diff = u, o.prev = s, o.curr = a, s = a, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                        var c = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, function (t, n) {
                            if ("%%" === t) return t;
                            c++;
                            var i = r.formatters[n];
                            if ("function" == typeof i) {
                                var s = e[c];
                                t = i.call(o, s), e.splice(c, 1), c--
                            }
                            return t
                        }), r.formatArgs.call(o, e);
                        (o.log || r.log).apply(o, e)
                    }
                }

                var s;
                return n.namespace = t, n.enabled = r.enabled(t), n.useColors = r.useColors(), n.color = e(t), n.destroy = i, n.extend = o, "function" == typeof r.init && r.init(n), r.instances.push(n), n
            }

            function i() {
                var t = r.instances.indexOf(this);
                return -1 !== t && (r.instances.splice(t, 1), !0)
            }

            function o(t, e) {
                return r(this.namespace + (void 0 === e ? ":" : e) + t)
            }

            function s(t) {
                r.save(t), r.names = [], r.skips = [];
                var e, n = ("string" == typeof t ? t : "").split(/[\s,]+/), i = n.length;
                for (e = 0; e < i; e++) n[e] && (t = n[e].replace(/\*/g, ".*?"), "-" === t[0] ? r.skips.push(new RegExp("^" + t.substr(1) + "$")) : r.names.push(new RegExp("^" + t + "$")));
                for (e = 0; e < r.instances.length; e++) {
                    var o = r.instances[e];
                    o.enabled = r.enabled(o.namespace)
                }
            }

            function a() {
                r.enable("")
            }

            function u(t) {
                if ("*" === t[t.length - 1]) return !0;
                var e, n;
                for (e = 0, n = r.skips.length; e < n; e++) if (r.skips[e].test(t)) return !1;
                for (e = 0, n = r.names.length; e < n; e++) if (r.names[e].test(t)) return !0;
                return !1
            }

            function c(t) {
                return t instanceof Error ? t.stack || t.message : t
            }

            return r.debug = r, r.default = r, r.coerce = c, r.disable = a, r.enable = s, r.enabled = u, r.humanize = n(111), Object.keys(t).forEach(function (e) {
                r[e] = t[e]
            }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = e, r.enable(r.load()), r
        }

        t.exports = r
    }, function (t, e) {
        function n(t) {
            if (t = String(t), !(t.length > 100)) {
                var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * f;
                        case "weeks":
                        case "week":
                        case "w":
                            return n * l;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * a;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * s;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function r(t) {
            var e = Math.abs(t);
            return e >= c ? Math.round(t / c) + "d" : e >= u ? Math.round(t / u) + "h" : e >= a ? Math.round(t / a) + "m" : e >= s ? Math.round(t / s) + "s" : t + "ms"
        }

        function i(t) {
            var e = Math.abs(t);
            return e >= c ? o(t, e, c, "day") : e >= u ? o(t, e, u, "hour") : e >= a ? o(t, e, a, "minute") : e >= s ? o(t, e, s, "second") : t + " ms"
        }

        function o(t, e, n, r) {
            var i = e >= 1.5 * n;
            return Math.round(t / n) + " " + r + (i ? "s" : "")
        }

        var s = 1e3, a = 60 * s, u = 60 * a, c = 24 * u, l = 7 * c, f = 365.25 * c;
        t.exports = function (t, e) {
            e = e || {};
            var o = typeof t;
            if ("string" === o && t.length > 0) return n(t);
            if ("number" === o && isFinite(t)) return e.long ? i(t) : r(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    }, function (t, e, n) {
        t.exports = { default: n(113), __esModule: !0 }
    }, function (t, e, n) {
        n(114), t.exports = n(1).Object.getPrototypeOf
    }, function (t, e, n) {
        var r = n(27), i = n(59);
        n(47)("getPrototypeOf", function () {
            return function (t) {
                return i(r(t))
            }
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (p(t)) return {};
            var e = t.slice(0, 8).toLowerCase(), n = "lncldglobal.com";
            return {
                push: "https://" + e + ".push." + n,
                stats: "https://" + e + ".stats." + n,
                engine: "https://" + e + ".engine." + n,
                api: "https://" + e + ".api." + n,
                rtm: "https://" + e + ".rtm." + n
            }
        }

        var i = n(74), o = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(i), s = n(18), a = n(118), u = n(6), c = u.isNullOrUndefined, l = n(0), f = l.extend, h = l.isObject,
            d = l.isEmpty, p = function (t) {
                return "-MdYXbMMI" !== t.slice(-9)
            }, v = function (t) {
                return { push: t, stats: t, engine: t, api: t, rtm: t }
            }, _ = !1, y = !1;
        s.init = function (t) {
            if (!h(t)) return s.init({
                appId: t,
                appKey: arguments.length <= 1 ? void 0 : arguments[1],
                masterKey: arguments.length <= 2 ? void 0 : arguments[2]
            });
            var e = t.appId, n = t.appKey, i = t.masterKey, o = t.hookKey, u = t.serverURL, c = t.serverURLs,
                l = void 0 === c ? u : c, m = t.disableCurrentUser, g = t.production, b = t.realtime;
            if (y && console.warn("Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations."), !e) throw new TypeError("appId must be a string");
            if (!n) throw new TypeError("appKey must be a string");
            if (i && console.warn("MasterKey is not supposed to be used at client side."), p(e) && !l && d(s._config.serverURLs)) throw new TypeError("serverURL option is required for apps from CN region");
            e !== s._config.applicationId ? (s._config.masterKey = i, s._config.hookKey = o) : (i && (s._config.masterKey = i), o && (s._config.hookKey = o)), s._config.applicationId = e, s._config.applicationKey = n, s.setProduction(g), void 0 !== m && (s._config.disableCurrentUser = m);
            var w = _ || void 0 !== l;
            if (w || (s._appRouter = new a(s)), s._setServerURLs(f({}, r(e), s._config.serverURLs, "string" == typeof l ? v(l) : l), w), b) s._config.realtime = b; else if (s._sharedConfig.liveQueryRealtime) {
                var O = s._config.serverURLs, A = O.api, S = O.rtm;
                s._config.realtime = new s._sharedConfig.liveQueryRealtime({
                    appId: e,
                    appKey: n,
                    server: { api: A, RTMRouter: S }
                })
            }
            y = !0
        }, s.setProduction = function (t) {
            c(t) ? s._config.production = null : s._config.production = t ? 1 : 0
        }, s._setServerURLs = function (t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            "string" != typeof t ? f(s._config.serverURLs, t) : s._config.serverURLs = v(t), e && (s._appRouter ? s._appRouter.disable() : _ = !0)
        }, s.setServerURL = function (t) {
            return s._setServerURLs(t)
        }, s.setServerURLs = s.setServerURL, s.keepErrorRawMessage = function (t) {
            s._sharedConfig.keepErrorRawMessage = t
        }, s.setRequestTimeout = function (t) {
            s._config.requestTimeout = t
        }, s.initialize = s.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function (t) {
            return (0, o.default)(s, t, {
                get: function () {
                    return s._config[t]
                }, set: function (e) {
                    s._config[t] = e
                }
            })
        })
    }, function (t, e, n) {
        n(117);
        var r = n(1).Object;
        t.exports = function (t, e, n) {
            return r.defineProperty(t, e, n)
        }
    }, function (t, e, n) {
        var r = n(10);
        r(r.S + r.F * !n(11), "Object", { defineProperty: n(7).f })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = this;
            this.AV = t, this.lockedUntil = 0, o.getAsync("serverURLs").then(function (t) {
                if (!e.disabled) {
                    if (!t) return e.lock(0);
                    var n = t.serverURLs, r = t.lockedUntil;
                    e.AV._setServerURLs(n, !1), e.lockedUntil = r
                }
            }).catch(function () {
                return e.lock(0)
            })
        }

        var i = n(48), o = n(73);
        r.prototype.disable = function () {
            this.disabled = !0
        }, r.prototype.lock = function (t) {
            this.lockedUntil = Date.now() + t
        }, r.prototype.refresh = function () {
            var t = this;
            if (!(this.disabled || Date.now() < this.lockedUntil)) {
                this.lock(10);
                return i({
                    method: "get",
                    url: "https://app-router.com/2/route",
                    query: { appId: this.AV.applicationId }
                }).then(function (e) {
                    if (!t.disabled) {
                        var n = e.ttl;
                        if (!n) throw new Error("missing ttl");
                        n *= 1e3;
                        var r = {
                            push: "https://" + e.push_server,
                            stats: "https://" + e.stats_server,
                            engine: "https://" + e.engine_server,
                            api: "https://" + e.api_server
                        };
                        return t.AV._setServerURLs(r, !1), t.lock(n), o.setAsync("serverURLs", {
                            serverURLs: r,
                            lockedUntil: t.lockedUntil
                        }, n)
                    }
                }).catch(function (e) {
                    console.warn("refresh server URLs failed: " + e.message), t.lock(600)
                })
            }
        }, t.exports = r
    }, function (t, e, n) {
        n(21), n(34), t.exports = n(49).f("iterator")
    }, function (t, e, n) {
        n(121), n(52), n(126), n(127), t.exports = n(1).Symbol
    }, function (t, e, n) {
        "use strict";
        var r = n(3), i = n(14), o = n(11), s = n(10), a = n(55), u = n(122).KEY, c = n(24), l = n(42), f = n(33),
            h = n(32), d = n(4), p = n(49), v = n(50), _ = n(123), y = n(124), m = n(8), g = n(13), b = n(27),
            w = n(15), O = n(39), A = n(25), S = n(56), E = n(125), C = n(77), x = n(75), T = n(7), j = n(31), N = C.f,
            U = T.f, I = E.f, k = r.Symbol, P = r.JSON, R = P && P.stringify, D = d("_hidden"), L = d("toPrimitive"),
            M = {}.propertyIsEnumerable, q = l("symbol-registry"), F = l("symbols"), W = l("op-symbols"),
            B = Object.prototype, Q = "function" == typeof k && !!x.f, V = r.QObject,
            K = !V || !V.prototype || !V.prototype.findChild, J = o && c(function () {
                return 7 != S(U({}, "a", {
                    get: function () {
                        return U(this, "a", { value: 7 }).a
                    }
                })).a
            }) ? function (t, e, n) {
                var r = N(B, e);
                r && delete B[e], U(t, e, n), r && t !== B && U(B, e, r)
            } : U, G = function (t) {
                var e = F[t] = S(k.prototype);
                return e._k = t, e
            }, z = Q && "symbol" == typeof k.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof k
            }, H = function (t, e, n) {
                return t === B && H(W, e, n), m(t), e = O(e, !0), m(n), i(F, e) ? (n.enumerable ? (i(t, D) && t[D][e] && (t[D][e] = !1), n = S(n, { enumerable: A(0, !1) })) : (i(t, D) || U(t, D, A(1, {})), t[D][e] = !0), J(t, e, n)) : U(t, e, n)
            }, $ = function (t, e) {
                m(t);
                for (var n, r = _(e = w(e)), i = 0, o = r.length; o > i;) H(t, n = r[i++], e[n]);
                return t
            }, X = function (t, e) {
                return void 0 === e ? S(t) : $(S(t), e)
            }, Y = function (t) {
                var e = M.call(this, t = O(t, !0));
                return !(this === B && i(F, t) && !i(W, t)) && (!(e || !i(this, t) || !i(F, t) || i(this, D) && this[D][t]) || e)
            }, Z = function (t, e) {
                if (t = w(t), e = O(e, !0), t !== B || !i(F, e) || i(W, e)) {
                    var n = N(t, e);
                    return !n || !i(F, e) || i(t, D) && t[D][e] || (n.enumerable = !0), n
                }
            }, tt = function (t) {
                for (var e, n = I(w(t)), r = [], o = 0; n.length > o;) i(F, e = n[o++]) || e == D || e == u || r.push(e);
                return r
            }, et = function (t) {
                for (var e, n = t === B, r = I(n ? W : w(t)), o = [], s = 0; r.length > s;) !i(F, e = r[s++]) || n && !i(B, e) || o.push(F[e]);
                return o
            };
        Q || (k = function () {
            if (this instanceof k) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
                this === B && e.call(W, n), i(this, D) && i(this[D], t) && (this[D][t] = !1), J(this, t, A(1, n))
            };
            return o && K && J(B, t, { configurable: !0, set: e }), G(t)
        }, a(k.prototype, "toString", function () {
            return this._k
        }), C.f = Z, T.f = H, n(76).f = E.f = tt, n(51).f = Y, x.f = et, o && !n(22) && a(B, "propertyIsEnumerable", Y, !0), p.f = function (t) {
            return G(d(t))
        }), s(s.G + s.W + s.F * !Q, { Symbol: k });
        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) d(nt[rt++]);
        for (var it = j(d.store), ot = 0; it.length > ot;) v(it[ot++]);
        s(s.S + s.F * !Q, "Symbol", {
            for: function (t) {
                return i(q, t += "") ? q[t] : q[t] = k(t)
            }, keyFor: function (t) {
                if (!z(t)) throw TypeError(t + " is not a symbol!");
                for (var e in q) if (q[e] === t) return e
            }, useSetter: function () {
                K = !0
            }, useSimple: function () {
                K = !1
            }
        }), s(s.S + s.F * !Q, "Object", {
            create: X,
            defineProperty: H,
            defineProperties: $,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: tt,
            getOwnPropertySymbols: et
        });
        var st = c(function () {
            x.f(1)
        });
        s(s.S + s.F * st, "Object", {
            getOwnPropertySymbols: function (t) {
                return x.f(b(t))
            }
        }), P && s(s.S + s.F * (!Q || c(function () {
            var t = k();
            return "[null]" != R([t]) || "{}" != R({ a: t }) || "{}" != R(Object(t))
        })), "JSON", {
            stringify: function (t) {
                for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                if (n = e = r[1], (g(e) || void 0 !== t) && !z(t)) return y(e) || (e = function (t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e
                }), r[1] = e, R.apply(P, r)
            }
        }), k.prototype[L] || n(12)(k.prototype, L, k.prototype.valueOf), f(k, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
    }, function (t, e, n) {
        var r = n(32)("meta"), i = n(13), o = n(14), s = n(7).f, a = 0, u = Object.isExtensible || function () {
            return !0
        }, c = !n(24)(function () {
            return u(Object.preventExtensions({}))
        }), l = function (t) {
            s(t, r, { value: { i: "O" + ++a, w: {} } })
        }, f = function (t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, r)) {
                if (!u(t)) return "F";
                if (!e) return "E";
                l(t)
            }
            return t[r].i
        }, h = function (t, e) {
            if (!o(t, r)) {
                if (!u(t)) return !0;
                if (!e) return !1;
                l(t)
            }
            return t[r].w
        }, d = function (t) {
            return c && p.NEED && u(t) && !o(t, r) && l(t), t
        }, p = t.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: h, onFreeze: d }
    }, function (t, e, n) {
        var r = n(31), i = n(75), o = n(51);
        t.exports = function (t) {
            var e = r(t), n = i.f;
            if (n) for (var s, a = n(t), u = o.f, c = 0; a.length > c;) u.call(t, s = a[c++]) && e.push(s);
            return e
        }
    }, function (t, e, n) {
        var r = n(26);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, e, n) {
        var r = n(15), i = n(76).f, o = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            a = function (t) {
                try {
                    return i(t)
                } catch (t) {
                    return s.slice()
                }
            };
        t.exports.f = function (t) {
            return s && "[object Window]" == o.call(t) ? a(t) : i(r(t))
        }
    }, function (t, e, n) {
        n(50)("asyncIterator")
    }, function (t, e, n) {
        n(50)("observable")
    }, function (t, e, n) {
        "use strict";
        var r;
        t.exports.timeout = function (t, e) {
            var n, i = new r;
            return Promise.race([t, new Promise(function (t, r) {
                n = setTimeout(function () {
                    r(i)
                }, e)
            })]).then(function (t) {
                return clearTimeout(n), t
            }, function (t) {
                throw clearTimeout(n), t
            })
        };
        r = t.exports.TimeoutError = function () {
            Error.call(this), this.stack = Error().stack, this.message = "Timeout"
        }, r.prototype = Object.create(Error.prototype), r.prototype.name = "TimeoutError"
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function (t) {
            var e = /\s+/, n = Array.prototype.slice;
            t.Events = {
                on: function (t, n, r) {
                    var i, o, s, a, u;
                    if (!n) return this;
                    for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), o = t.shift(); o;) u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = {
                        tail: a,
                        next: u ? u.next : s
                    }, o = t.shift();
                    return this
                }, off: function (t, n, i) {
                    var o, s, a, u, c, l;
                    if (s = this._callbacks) {
                        if (!(t || n || i)) return delete this._callbacks, this;
                        for (t = t ? t.split(e) : r.keys(s), o = t.shift(); o;) if (a = s[o], delete s[o], a && (n || i)) {
                            for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), a = a.next;
                            o = t.shift()
                        }
                        return this
                    }
                }, trigger: function (t) {
                    var r, i, o, s, a, u, c;
                    if (!(o = this._callbacks)) return this;
                    for (u = o.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) {
                        if (i = o[r]) for (s = i.tail; (i = i.next) !== s;) i.callback.apply(i.context || this, c);
                        if (i = u) for (s = i.tail, a = [r].concat(c); (i = i.next) !== s;) i.callback.apply(i.context || this, a);
                        r = t.shift()
                    }
                    return this
                }
            }, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0);
        t.exports = function (t) {
            t.GeoPoint = function (e, n) {
                o.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : o.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : o.isNumber(e) && o.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                var r = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
                    return r._latitude
                }), this.__defineGetter__("longitude", function () {
                    return r._longitude
                }), this.__defineSetter__("latitude", function (e) {
                    t.GeoPoint._validate(e, r.longitude), r._latitude = e
                }), this.__defineSetter__("longitude", function (e) {
                    t.GeoPoint._validate(r.latitude, e), r._longitude = e
                }))
            }, t.GeoPoint._validate = function (t, e) {
                if (t < -90) throw new Error("AV.GeoPoint latitude " + t + " < -90.0.");
                if (t > 90) throw new Error("AV.GeoPoint latitude " + t + " > 90.0.");
                if (e < -180) throw new Error("AV.GeoPoint longitude " + e + " < -180.0.");
                if (e > 180) throw new Error("AV.GeoPoint longitude " + e + " > 180.0.")
            }, t.GeoPoint.current = function () {
                return new i.default(function (e, n) {
                    navigator.geolocation.getCurrentPosition(function (n) {
                        e(new t.GeoPoint({ latitude: n.coords.latitude, longitude: n.coords.longitude }))
                    }, n)
                })
            }, o.extend(t.GeoPoint.prototype, {
                toJSON: function () {
                    return t.GeoPoint._validate(this.latitude, this.longitude), {
                        __type: "GeoPoint",
                        latitude: this.latitude,
                        longitude: this.longitude
                    }
                }, radiansTo: function (t) {
                    var e = Math.PI / 180, n = this.latitude * e, r = this.longitude * e, i = t.latitude * e,
                        o = t.longitude * e, s = n - i, a = r - o, u = Math.sin(s / 2), c = Math.sin(a / 2),
                        l = u * u + Math.cos(n) * Math.cos(i) * c * c;
                    return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
                }, kilometersTo: function (t) {
                    return 6371 * this.radiansTo(t)
                }, milesTo: function (t) {
                    return 3958.8 * this.radiansTo(t)
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function (t) {
            t.ACL = function (e) {
                var n = this;
                if (n.permissionsById = {}, r.isObject(e)) if (e instanceof t.User) n.setReadAccess(e, !0), n.setWriteAccess(e, !0); else {
                    if (r.isFunction(e)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                    t._objectEach(e, function (e, i) {
                        if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                        n.permissionsById[i] = {}, t._objectEach(e, function (t, e) {
                            if ("read" !== e && "write" !== e) throw new Error("Tried to create an ACL with an invalid permission type.");
                            if (!r.isBoolean(t)) throw new Error("Tried to create an ACL with an invalid permission value.");
                            n.permissionsById[i][e] = t
                        })
                    })
                }
            }, t.ACL.prototype.toJSON = function () {
                return r.clone(this.permissionsById)
            }, t.ACL.prototype._setAccess = function (e, n, i) {
                if (n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
                if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
                var o = this.permissionsById[n];
                if (!o) {
                    if (!i) return;
                    o = {}, this.permissionsById[n] = o
                }
                i ? this.permissionsById[n][e] = !0 : (delete o[e], r.isEmpty(o) && delete this.permissionsById[n])
            }, t.ACL.prototype._getAccess = function (e, n) {
                n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
                var r = this.permissionsById[n];
                return !!r && !!r[e]
            }, t.ACL.prototype.setReadAccess = function (t, e) {
                this._setAccess("read", t, e)
            }, t.ACL.prototype.getReadAccess = function (t) {
                return this._getAccess("read", t)
            }, t.ACL.prototype.setWriteAccess = function (t, e) {
                this._setAccess("write", t, e)
            }, t.ACL.prototype.getWriteAccess = function (t) {
                return this._getAccess("write", t)
            }, t.ACL.prototype.setPublicReadAccess = function (t) {
                this.setReadAccess("*", t)
            }, t.ACL.prototype.getPublicReadAccess = function () {
                return this.getReadAccess("*")
            }, t.ACL.prototype.setPublicWriteAccess = function (t) {
                this.setWriteAccess("*", t)
            }, t.ACL.prototype.getPublicWriteAccess = function () {
                return this.getWriteAccess("*")
            }, t.ACL.prototype.getRoleReadAccess = function (e) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getReadAccess("role:" + e);
                throw new Error("role must be a AV.Role or a String")
            }, t.ACL.prototype.getRoleWriteAccess = function (e) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getWriteAccess("role:" + e);
                throw new Error("role must be a AV.Role or a String")
            }, t.ACL.prototype.setRoleReadAccess = function (e, n) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setReadAccess("role:" + e, n);
                throw new Error("role must be a AV.Role or a String")
            }, t.ACL.prototype.setRoleWriteAccess = function (e, n) {
                if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setWriteAccess("role:" + e, n);
                throw new Error("role must be a AV.Role or a String")
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function (t) {
            t.Op = function () {
                this._initialize.apply(this, arguments)
            }, r.extend(t.Op.prototype, {
                _initialize: function () {
                }
            }), r.extend(t.Op, {
                _extend: t._extend, _opDecoderMap: {}, _registerDecoder: function (e, n) {
                    t.Op._opDecoderMap[e] = n
                }, _decode: function (e) {
                    var n = t.Op._opDecoderMap[e.__op];
                    return n ? n(e) : void 0
                }
            }), t.Op._registerDecoder("Batch", function (e) {
                var n = null;
                return t._arrayEach(e.ops, function (e) {
                    e = t.Op._decode(e), n = e._mergeWithPrevious(n)
                }), n
            }), t.Op.Set = t.Op._extend({
                _initialize: function (t) {
                    this._value = t
                }, value: function () {
                    return this._value
                }, toJSON: function () {
                    return t._encode(this.value())
                }, _mergeWithPrevious: function (t) {
                    return this
                }, _estimate: function (t) {
                    return this.value()
                }
            }), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({
                toJSON: function () {
                    return { __op: "Delete" }
                }, _mergeWithPrevious: function (t) {
                    return this
                }, _estimate: function (e) {
                    return t.Op._UNSET
                }
            }), t.Op._registerDecoder("Delete", function (e) {
                return new t.Op.Unset
            }), t.Op.Increment = t.Op._extend({
                _initialize: function (t) {
                    this._amount = t
                }, amount: function () {
                    return this._amount
                }, toJSON: function () {
                    return { __op: "Increment", amount: this._amount }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount());
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount());
                        if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (t) {
                    return t ? t + this.amount() : this.amount()
                }
            }), t.Op._registerDecoder("Increment", function (e) {
                return new t.Op.Increment(e.amount)
            }), t.Op.BitAnd = t.Op._extend({
                _initialize: function (t) {
                    this._value = t
                }, value: function () {
                    return this._value
                }, toJSON: function () {
                    return { __op: "BitAnd", value: this.value() }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(0);
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() & this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (t) {
                    return t & this.value()
                }
            }), t.Op._registerDecoder("BitAnd", function (e) {
                return new t.Op.BitAnd(e.value)
            }), t.Op.BitOr = t.Op._extend({
                _initialize: function (t) {
                    this._value = t
                }, value: function () {
                    return this._value
                }, toJSON: function () {
                    return { __op: "BitOr", value: this.value() }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() | this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (t) {
                    return t | this.value()
                }
            }), t.Op._registerDecoder("BitOr", function (e) {
                return new t.Op.BitOr(e.value)
            }), t.Op.BitXor = t.Op._extend({
                _initialize: function (t) {
                    this._value = t
                }, value: function () {
                    return this._value
                }, toJSON: function () {
                    return { __op: "BitXor", value: this.value() }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
                        if (e instanceof t.Op.Set) return new t.Op.Set(e.value() ^ this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (t) {
                    return t ^ this.value()
                }
            }), t.Op._registerDecoder("BitXor", function (e) {
                return new t.Op.BitXor(e.value)
            }), t.Op.Add = t.Op._extend({
                _initialize: function (t) {
                    this._objects = t
                }, objects: function () {
                    return this._objects
                }, toJSON: function () {
                    return { __op: "Add", objects: t._encode(this.objects()) }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
                        if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                        if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (t) {
                    return t ? t.concat(this.objects()) : r.clone(this.objects())
                }
            }), t.Op._registerDecoder("Add", function (e) {
                return new t.Op.Add(t._decode(e.objects))
            }), t.Op.AddUnique = t.Op._extend({
                _initialize: function (t) {
                    this._objects = r.uniq(t)
                }, objects: function () {
                    return this._objects
                }, toJSON: function () {
                    return { __op: "AddUnique", objects: t._encode(this.objects()) }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
                        if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                        if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (e) {
                    if (e) {
                        var n = r.clone(e);
                        return t._arrayEach(this.objects(), function (e) {
                            if (e instanceof t.Object && e.id) {
                                var i = r.find(n, function (n) {
                                    return n instanceof t.Object && n.id === e.id
                                });
                                if (i) {
                                    var o = r.indexOf(n, i);
                                    n[o] = e
                                } else n.push(e)
                            } else r.contains(n, e) || n.push(e)
                        }), n
                    }
                    return r.clone(this.objects())
                }
            }), t.Op._registerDecoder("AddUnique", function (e) {
                return new t.Op.AddUnique(t._decode(e.objects))
            }), t.Op.Remove = t.Op._extend({
                _initialize: function (t) {
                    this._objects = r.uniq(t)
                }, objects: function () {
                    return this._objects
                }, toJSON: function () {
                    return { __op: "Remove", objects: t._encode(this.objects()) }
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) return e;
                        if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                        if (e instanceof t.Op.Remove) return new t.Op.Remove(r.union(e.objects(), this.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (e) {
                    if (e) {
                        var n = r.difference(e, this.objects());
                        return t._arrayEach(this.objects(), function (e) {
                            e instanceof t.Object && e.id && (n = r.reject(n, function (n) {
                                return n instanceof t.Object && n.id === e.id
                            }))
                        }), n
                    }
                    return []
                }
            }), t.Op._registerDecoder("Remove", function (e) {
                return new t.Op.Remove(t._decode(e.objects))
            }), t.Op.Relation = t.Op._extend({
                _initialize: function (e, n) {
                    this._targetClassName = null;
                    var i = this, o = function (e) {
                        if (e instanceof t.Object) {
                            if (!e.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                            if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".");
                            return e.id
                        }
                        return e
                    };
                    this.relationsToAdd = r.uniq(r.map(e, o)), this.relationsToRemove = r.uniq(r.map(n, o))
                }, added: function () {
                    var e = this;
                    return r.map(this.relationsToAdd, function (n) {
                        var r = t.Object._create(e._targetClassName);
                        return r.id = n, r
                    })
                }, removed: function () {
                    var e = this;
                    return r.map(this.relationsToRemove, function (n) {
                        var r = t.Object._create(e._targetClassName);
                        return r.id = n, r
                    })
                }, toJSON: function () {
                    var t = null, e = null, n = this, i = function (t) {
                        return { __type: "Pointer", className: n._targetClassName, objectId: t }
                    }, o = null;
                    return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), t = {
                        __op: "AddRelation",
                        objects: o
                    }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), e = {
                        __op: "RemoveRelation",
                        objects: o
                    }), t && e ? { __op: "Batch", ops: [t, e] } : t || e || {}
                }, _mergeWithPrevious: function (e) {
                    if (e) {
                        if (e instanceof t.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
                        if (e instanceof t.Op.Relation) {
                            if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.");
                            var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                                i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                                o = new t.Op.Relation(n, i);
                            return o._targetClassName = this._targetClassName, o
                        }
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                }, _estimate: function (e, n, r) {
                    if (e) {
                        if (e instanceof t.Relation) {
                            if (this._targetClassName) if (e.targetClassName) {
                                if (e.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                            } else e.targetClassName = this._targetClassName;
                            return e
                        }
                        throw new Error("Op is invalid after previous op.")
                    }
                    new t.Relation(n, r).targetClassName = this._targetClassName
                }
            }), t.Op._registerDecoder("AddRelation", function (e) {
                return new t.Op.Relation(t._decode(e.objects), [])
            }), t.Op._registerDecoder("RemoveRelation", function (e) {
                return new t.Op.Relation([], t._decode(e.objects))
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        t.exports = function (t) {
            t.Relation = function (t, e) {
                if (!r.isString(e)) throw new TypeError("key must be a string");
                this.parent = t, this.key = e, this.targetClassName = null
            }, t.Relation.reverseQuery = function (e, n, r) {
                var i = new t.Query(e);
                return i.equalTo(n, r._toPointer()), i
            }, r.extend(t.Relation.prototype, {
                _ensureParentAndKey: function (t, e) {
                    if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                    if (this.key !== e) throw new Error("Internal Error. Relation retrieved from two different keys.")
                }, add: function (e) {
                    r.isArray(e) || (e = [e]);
                    var n = new t.Op.Relation(e, []);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName
                }, remove: function (e) {
                    r.isArray(e) || (e = [e]);
                    var n = new t.Op.Relation([], e);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName
                }, toJSON: function () {
                    return { __type: "Relation", className: this.targetClassName }
                }, query: function () {
                    var e, n;
                    return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._defaultParams.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(135), a = n(136), u = n(137), c = n(16), l = n(5)._request, f = n(6), h = f.tap,
            d = f.transformFetchOptions, p = n(19)("leancloud:file"), v = n(141);
        t.exports = function (t) {
            var e = function (t) {
                return o.isString(t) ? t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : ""
            }, n = function (t) {
                if (t < 26) return String.fromCharCode(65 + t);
                if (t < 52) return String.fromCharCode(t - 26 + 97);
                if (t < 62) return String.fromCharCode(t - 52 + 48);
                if (62 === t) return "+";
                if (63 === t) return "/";
                throw new Error("Tried to encode large digit " + t + " in base64.")
            }, r = function (t) {
                var e = [];
                return e.length = Math.ceil(t.length / 3), o.times(e.length, function (r) {
                    var i = t[3 * r], o = t[3 * r + 1] || 0, s = t[3 * r + 2] || 0, a = 3 * r + 1 < t.length,
                        u = 3 * r + 2 < t.length;
                    e[r] = [n(i >> 2 & 63), n(i << 4 & 48 | o >> 4 & 15), a ? n(o << 2 & 60 | s >> 6 & 3) : "=", u ? n(63 & s) : "="].join("")
                }), e.join("")
            };
            t.File = function (n, i, s) {
                if (this.attributes = {
                    name: n,
                    url: "",
                    metaData: {},
                    base64: ""
                }, o.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
                o.isArray(i) && (this.attributes.metaData.size = i.length, i = { base64: r(i) }), this._extName = "", this._data = i, this._uploadHeaders = {}, i && i.blob && "string" == typeof i.blob.uri && (this._extName = e(i.blob.uri)), "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = e(i.name)));
                var a = void 0;
                if (i && i.owner) a = i.owner; else if (!t._config.disableCurrentUser) try {
                    a = t.User.current()
                } catch (t) {
                    if ("SYNC_API_NOT_AVAILABLE" !== t.code) throw t
                }
                this.attributes.metaData.owner = a ? a.id : "unknown", this.set("mime_type", s)
            }, t.File.withURL = function (e, n, r, i) {
                if (!e || !n) throw new Error("Please provide file name and url");
                var o = new t.File(e, null, i);
                if (r) for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
                return o.attributes.url = n, o.attributes.metaData.__source = "external", o.attributes.metaData.size = 0, o
            }, t.File.createWithoutData = function (e) {
                if (!e) throw new TypeError("The objectId must be provided");
                var n = new t.File;
                return n.id = e, n
            }, o.extend(t.File.prototype, {
                className: "_File", _toFullJSON: function (e) {
                    var n = this, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = o.clone(this.attributes);
                    return t._objectEach(i, function (n, o) {
                        i[o] = t._encode(n, e, void 0, r)
                    }), t._objectEach(this._operations, function (t, e) {
                        i[e] = t
                    }), o.has(this, "id") && (i.objectId = this.id), o(["createdAt", "updatedAt"]).each(function (t) {
                        if (o.has(n, t)) {
                            var e = n[t];
                            i[t] = o.isDate(e) ? e.toJSON() : e
                        }
                    }), r && (i.__type = "File"), i
                }, toFullJSON: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(t)
                }, toJSON: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
                    return this._toFullJSON(n, !1)
                }, _toPointer: function () {
                    return { __type: "Pointer", className: this.className, objectId: this.id }
                }, getACL: function () {
                    return this._acl
                }, setACL: function (e) {
                    return e instanceof t.ACL ? (this._acl = e, this) : new c(c.OTHER_CAUSE, "ACL must be a AV.ACL.")
                }, name: function () {
                    return this.get("name")
                }, url: function () {
                    return this.get("url")
                }, get: function (t) {
                    switch (t) {
                        case "objectId":
                            return this.id;
                        case "url":
                        case "name":
                        case "mime_type":
                        case "metaData":
                        case "createdAt":
                        case "updatedAt":
                            return this.attributes[t];
                        default:
                            return this.attributes.metaData[t]
                    }
                }, set: function () {
                    for (var t = this, e = function (e, n) {
                        switch (e) {
                            case "name":
                            case "url":
                            case "mime_type":
                            case "base64":
                            case "metaData":
                                t.attributes[e] = n;
                                break;
                            default:
                                t.attributes.metaData[e] = n
                        }
                    }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    switch (r.length) {
                        case 1:
                            for (var o in r[0]) e(o, r[0][o]);
                            break;
                        case 2:
                            e(r[0], r[1])
                    }
                    return this
                }, setUploadHeader: function (t, e) {
                    return this._uploadHeaders[t] = e, this
                }, metaData: function (t, e) {
                    return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData
                }, thumbnailURL: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "png",
                        o = this.attributes.url;
                    if (!o) throw new Error("Invalid url.");
                    if (!t || !e || t <= 0 || e <= 0) throw new Error("Invalid width or height value.");
                    if (n <= 0 || n > 100) throw new Error("Invalid quality value.");
                    return o + "?imageView/" + (r ? 2 : 1) + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i
                }, size: function () {
                    return this.metaData().size
                }, ownerId: function () {
                    return this.metaData().owner
                }, destroy: function (t) {
                    return this.id ? l("files", null, this.id, "DELETE", null, t) : i.default.reject(new Error("The file id does not eixst."))
                }, _fileToken: function (t, n) {
                    var r = this.attributes.name, i = e(r);
                    !i && this._extName && (r += this._extName, i = this._extName);
                    var o = {
                        name: r,
                        keep_file_name: n.keepFileName,
                        key: n.key,
                        ACL: this._acl,
                        mime_type: t,
                        metaData: this.attributes.metaData
                    };
                    return l("fileTokens", null, null, "POST", o, n)
                }, save: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.id) throw new Error("File is already saved.");
                    if (!this._previousSave) if (this._data) {
                        var n = this.get("mime_type");
                        this._previousSave = this._fileToken(n, e).then(function (r) {
                            return r.mime_type && (n = r.mime_type, t.set("mime_type", n)), t._token = r.token, i.default.resolve().then(function () {
                                var e = t._data;
                                if (e && e.base64) return v(e.base64, n);
                                if (e && e.blob) return !e.blob.type && n && (e.blob.type = n), e.blob.name || (e.blob.name = t.get("name")), e.blob;
                                if ("undefined" != typeof Blob && e instanceof Blob) return e;
                                throw new TypeError("malformed file data")
                            }).then(function (n) {
                                var i = o.extend({}, e);
                                switch (e.onprogress && (i.onprogress = function (t) {
                                    if ("download" !== t.direction) return e.onprogress(t)
                                }), r.provider) {
                                    case "s3":
                                        return u(r, n, t, i);
                                    case "qcloud":
                                        return s(r, n, t, i);
                                    case "qiniu":
                                    default:
                                        return a(r, n, t, i)
                                }
                            }).then(h(function () {
                                return t._callback(!0)
                            }), function (e) {
                                throw t._callback(!1), e
                            })
                        })
                    } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                        var r = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url
                        };
                        this._previousSave = l("files", null, null, "post", r, e).then(function (e) {
                            return t.id = e.objectId, t
                        })
                    }
                    return this._previousSave
                }, _callback: function (t) {
                    l("fileCallback", null, null, "post", {
                        token: this._token,
                        result: t
                    }).catch(p), delete this._token, delete this._data
                }, fetch: function (t, e) {
                    return l("files", null, this.id, "GET", d(t), e).then(this._finishFetch.bind(this))
                }, _finishFetch: function (e) {
                    var n = t.Object.prototype.parse(e);
                    return n.attributes = {
                        name: n.name,
                        url: n.url,
                        mime_type: n.mime_type,
                        bucket: n.bucket
                    }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, o.extend(this, n), this
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(20), i = r.getAdapter, o = n(19)("cos");
        t.exports = function (t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
            var s = t.upload_url + "?sign=" + encodeURIComponent(t.token),
                a = { field: "fileContent", data: e, name: n.attributes.name },
                u = { headers: n._uploadHeaders, data: { op: "upload" }, onprogress: r.onprogress };
            return o("url: %s, file: %o, options: %o", s, a, u), i("upload")(s, a, u).then(function (t) {
                if (o(t.status, t.data), !1 === t.ok) {
                    var e = new Error(t.status);
                    throw e.response = t, e
                }
                return n
            }, function (t) {
                var e = t.response;
                throw e && (o(e.status, e.data), t.statusCode = e.status, t.response = e.data), t
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(9), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(20), s = o.getAdapter, a = n(19)("leancloud:qiniu");
        t.exports = function (t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
            var o = t.token, u = t.upload_url || "https://upload.qiniup.com",
                c = { field: "file", data: e, name: n.attributes.name }, l = {
                    headers: n._uploadHeaders,
                    data: { name: n.attributes.name, key: t.key, token: o },
                    onprogress: r.onprogress
                };
            return a("url: %s, file: %o, options: %o", u, c, l), s("upload")(u, c, l).then(function (t) {
                if (a(t.status, t.data), !1 === t.ok) {
                    var e = t.status;
                    t.data && (e = t.data.error ? t.data.error : (0, i.default)(t.data));
                    var r = new Error(e);
                    throw r.response = t, r
                }
                return n
            }, function (t) {
                var e = t.response;
                throw e && (a(e.status, e.data), t.statusCode = e.status, t.response = e.data), t
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(48);
        t.exports = function (t, e, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId, i({
                url: t.upload_url,
                method: "PUT",
                data: e,
                headers: r.extend({
                    "Content-Type": n.get("mime_type"),
                    "Cache-Control": "public, max-age=31536000"
                }, n._uploadHeaders),
                onprogress: o.onprogress
            }).then(function () {
                return n
            })
        }
    }, function (t, e, n) {
        !function () {
            var e = n(139), r = n(78).utf8, i = n(140), o = n(78).bin, s = function (t, n) {
                t.constructor == String ? t = n && "binary" === n.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
                for (var p = s._ff, v = s._gg, _ = s._hh, y = s._ii, d = 0; d < a.length; d += 16) {
                    var m = c, g = l, b = f, w = h;
                    c = p(c, l, f, h, a[d + 0], 7, -680876936), h = p(h, c, l, f, a[d + 1], 12, -389564586), f = p(f, h, c, l, a[d + 2], 17, 606105819), l = p(l, f, h, c, a[d + 3], 22, -1044525330), c = p(c, l, f, h, a[d + 4], 7, -176418897), h = p(h, c, l, f, a[d + 5], 12, 1200080426), f = p(f, h, c, l, a[d + 6], 17, -1473231341), l = p(l, f, h, c, a[d + 7], 22, -45705983), c = p(c, l, f, h, a[d + 8], 7, 1770035416), h = p(h, c, l, f, a[d + 9], 12, -1958414417), f = p(f, h, c, l, a[d + 10], 17, -42063), l = p(l, f, h, c, a[d + 11], 22, -1990404162), c = p(c, l, f, h, a[d + 12], 7, 1804603682), h = p(h, c, l, f, a[d + 13], 12, -40341101), f = p(f, h, c, l, a[d + 14], 17, -1502002290), l = p(l, f, h, c, a[d + 15], 22, 1236535329), c = v(c, l, f, h, a[d + 1], 5, -165796510), h = v(h, c, l, f, a[d + 6], 9, -1069501632), f = v(f, h, c, l, a[d + 11], 14, 643717713), l = v(l, f, h, c, a[d + 0], 20, -373897302), c = v(c, l, f, h, a[d + 5], 5, -701558691), h = v(h, c, l, f, a[d + 10], 9, 38016083), f = v(f, h, c, l, a[d + 15], 14, -660478335), l = v(l, f, h, c, a[d + 4], 20, -405537848), c = v(c, l, f, h, a[d + 9], 5, 568446438), h = v(h, c, l, f, a[d + 14], 9, -1019803690), f = v(f, h, c, l, a[d + 3], 14, -187363961), l = v(l, f, h, c, a[d + 8], 20, 1163531501), c = v(c, l, f, h, a[d + 13], 5, -1444681467), h = v(h, c, l, f, a[d + 2], 9, -51403784), f = v(f, h, c, l, a[d + 7], 14, 1735328473), l = v(l, f, h, c, a[d + 12], 20, -1926607734), c = _(c, l, f, h, a[d + 5], 4, -378558), h = _(h, c, l, f, a[d + 8], 11, -2022574463), f = _(f, h, c, l, a[d + 11], 16, 1839030562), l = _(l, f, h, c, a[d + 14], 23, -35309556), c = _(c, l, f, h, a[d + 1], 4, -1530992060), h = _(h, c, l, f, a[d + 4], 11, 1272893353), f = _(f, h, c, l, a[d + 7], 16, -155497632), l = _(l, f, h, c, a[d + 10], 23, -1094730640), c = _(c, l, f, h, a[d + 13], 4, 681279174), h = _(h, c, l, f, a[d + 0], 11, -358537222), f = _(f, h, c, l, a[d + 3], 16, -722521979), l = _(l, f, h, c, a[d + 6], 23, 76029189), c = _(c, l, f, h, a[d + 9], 4, -640364487), h = _(h, c, l, f, a[d + 12], 11, -421815835), f = _(f, h, c, l, a[d + 15], 16, 530742520), l = _(l, f, h, c, a[d + 2], 23, -995338651), c = y(c, l, f, h, a[d + 0], 6, -198630844), h = y(h, c, l, f, a[d + 7], 10, 1126891415), f = y(f, h, c, l, a[d + 14], 15, -1416354905), l = y(l, f, h, c, a[d + 5], 21, -57434055), c = y(c, l, f, h, a[d + 12], 6, 1700485571), h = y(h, c, l, f, a[d + 3], 10, -1894986606), f = y(f, h, c, l, a[d + 10], 15, -1051523), l = y(l, f, h, c, a[d + 1], 21, -2054922799), c = y(c, l, f, h, a[d + 8], 6, 1873313359), h = y(h, c, l, f, a[d + 15], 10, -30611744), f = y(f, h, c, l, a[d + 6], 15, -1560198380), l = y(l, f, h, c, a[d + 13], 21, 1309151649), c = y(c, l, f, h, a[d + 4], 6, -145523070), h = y(h, c, l, f, a[d + 11], 10, -1120210379), f = y(f, h, c, l, a[d + 2], 15, 718787259), l = y(l, f, h, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, f = f + b >>> 0, h = h + w >>> 0
                }
                return e.endian([c, l, f, h])
            };
            s._ff = function (t, e, n, r, i, o, s) {
                var a = t + (e & n | ~e & r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }, s._gg = function (t, e, n, r, i, o, s) {
                var a = t + (e & r | n & ~r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }, s._hh = function (t, e, n, r, i, o, s) {
                var a = t + (e ^ n ^ r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }, s._ii = function (t, e, n, r, i, o, s) {
                var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + e
            }, s._blocksize = 16, s._digestsize = 16, t.exports = function (t, n) {
                if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
                var r = e.wordsToBytes(s(t, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r)
            }
        }()
    }, function (t, e) {
        !function () {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function (t, e) {
                    return t << e | t >>> 32 - e
                }, rotr: function (t, e) {
                    return t << 32 - e | t >>> e
                }, endian: function (t) {
                    if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                    return t
                }, randomBytes: function (t) {
                    for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                    return e
                }, bytesToWords: function (t) {
                    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
                    return e
                }, wordsToBytes: function (t) {
                    for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                    return e
                }, bytesToHex: function (t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
                    return e.join("")
                }, hexToBytes: function (t) {
                    for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
                    return e
                }, bytesToBase64: function (t) {
                    for (var n = [], r = 0; r < t.length; r += 3) for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                }, base64ToBytes: function (t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                    return n
                }
            };
            t.exports = n
        }()
    }, function (t, e) {
        function n(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }

        function r(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        }/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        t.exports = function (t) {
            return null != t && (n(t) || r(t) || !!t._isBuffer)
        }
    }, function (t, e, n) {
        "use strict";
        var r = function (t, e) {
            var n;
            t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]);
            for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
            return new Blob([r], { type: e })
        };
        t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        function i(t, e) {
            return t && t[e] ? d.isFunction(t[e]) ? t[e]() : t[e] : null
        }

        var o = n(143), s = r(o), a = n(9), u = r(a), c = n(146), l = r(c), f = n(2), h = r(f), d = n(0), p = n(16),
            v = n(5), _ = v._request, y = n(6), m = y.isNullOrUndefined, g = y.ensureArray, b = y.transformFetchOptions,
            w = y.setValue, O = y.findValue, A = y.isPlainObject, S = y.continueWhile, E = function t(e) {
                return d.isArray(e) ? e.map(t) : A(e) ? d.mapObject(e, t) : d.isObject(e) && e._toPointer ? e._toPointer() : e
            }, C = ["objectId", "createdAt", "updatedAt"], x = function (t) {
                if (-1 !== C.indexOf(t)) throw new Error("key[" + t + "] is reserved")
            }, T = function (t) {
                var e = d.find(t, function (t) {
                    return t instanceof Error
                });
                if (!e) return t;
                var n = new p(e.code, e.message);
                throw n.results = t, n
            };
        t.exports = function (t) {
            t.Object = function (e, n) {
                if (d.isString(e)) return t.Object._create.apply(this, arguments);
                e = e || {}, n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e));
                var r = i(this, "defaults");
                r && (e = d.extend({}, r, e)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = d.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, { silent: !0 }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = d.clone(this.attributes), this.initialize.apply(this, arguments)
            }, t.Object.saveAll = function (e, n) {
                return t.Object._deepSaveAsync(e, null, n)
            }, t.Object.fetchAll = function (t, e) {
                return h.default.resolve().then(function () {
                    return _("batch", null, null, "POST", {
                        requests: d.map(t, function (t) {
                            if (!t.className) throw new Error("object must have className to fetch");
                            if (!t.id) throw new Error("object must have id to fetch");
                            if (t.dirty()) throw new Error("object is modified but not saved");
                            return { method: "GET", path: "/1.1/classes/" + t.className + "/" + t.id }
                        })
                    }, e)
                }).then(function (e) {
                    var n = d.map(t, function (t, n) {
                        if (e[n].success) {
                            var r = t.parse(e[n].success);
                            return t._cleanupUnsetKeys(r), t._finishFetch(r), t
                        }
                        return null === e[n].success ? new p(p.OBJECT_NOT_FOUND, "Object not found.") : new p(e[n].error.code, e[n].error.error)
                    });
                    return T(n)
                })
            }, d.extend(t.Object.prototype, t.Events, {
                _fetchWhenSave: !1, initialize: function () {
                }, fetchWhenSave: function (t) {
                    if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !d.isBoolean(t)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = t
                }, getObjectId: function () {
                    return this.id
                }, getCreatedAt: function () {
                    return this.createdAt
                }, getUpdatedAt: function () {
                    return this.updatedAt
                }, toJSON: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this._toFullJSON(n, !1)
                }, toFullJSON: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(t)
                }, _toFullJSON: function (e) {
                    var n = this, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = d.clone(this.attributes);
                    if (d.isArray(e)) var o = e.concat(this);
                    return t._objectEach(i, function (e, n) {
                        i[n] = t._encode(e, o, void 0, r)
                    }), t._objectEach(this._operations, function (t, e) {
                        i[e] = t
                    }), d.has(this, "id") && (i.objectId = this.id), d(["createdAt", "updatedAt"]).each(function (t) {
                        if (d.has(n, t)) {
                            var e = n[t];
                            i[t] = d.isDate(e) ? e.toJSON() : e
                        }
                    }), r && (i.__type = "Object", d.isArray(e) && e.length && (i.__type = "Pointer"), i.className = this.className), i
                }, _refreshCache: function () {
                    var e = this;
                    e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function (n, r) {
                        n instanceof t.Object ? n._refreshCache() : d.isObject(n) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(n), { silent: !0 })
                    }), delete e._refreshingCache)
                }, dirty: function (t) {
                    this._refreshCache();
                    var e = d.last(this._opSetQueue);
                    return t ? !!e[t] : !this.id || d.keys(e).length > 0
                }, dirtyKeys: function () {
                    this._refreshCache();
                    var t = d.last(this._opSetQueue);
                    return d.keys(t)
                }, _toPointer: function () {
                    return { __type: "Pointer", className: this.className, objectId: this.id }
                }, get: function (t) {
                    switch (t) {
                        case "objectId":
                            return this.id;
                        case "createdAt":
                        case "updatedAt":
                            return this[t];
                        default:
                            return this.attributes[t]
                    }
                }, relation: function (e) {
                    var n = this.get(e);
                    if (n) {
                        if (!(n instanceof t.Relation)) throw new Error("Called relation() on non-relation field " + e);
                        return n._ensureParentAndKey(this, e), n
                    }
                    return new t.Relation(this, e)
                }, escape: function (t) {
                    var e = this._escapedAttributes[t];
                    if (e) return e;
                    var n, r = this.attributes[t];
                    return n = m(r) ? "" : d.escape(r.toString()), this._escapedAttributes[t] = n, n
                }, has: function (t) {
                    return !m(this.attributes[t])
                }, _mergeMagicFields: function (e) {
                    var n = this, r = ["objectId", "createdAt", "updatedAt"];
                    return t._arrayEach(r, function (r) {
                        e[r] && ("objectId" === r ? n.id = e[r] : "createdAt" !== r && "updatedAt" !== r || d.isDate(e[r]) ? n[r] = e[r] : n[r] = t._parseDate(e[r]), delete e[r])
                    }), e
                }, _startSave: function () {
                    this._opSetQueue.push({})
                }, _cancelSave: function () {
                    var e = d.first(this._opSetQueue);
                    this._opSetQueue = d.rest(this._opSetQueue);
                    var n = d.first(this._opSetQueue);
                    t._objectEach(e, function (t, r) {
                        var i = e[r], o = n[r];
                        i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
                    }), this._saving = this._saving - 1
                }, _finishSave: function (e) {
                    var n = {};
                    t._traverse(this.attributes, function (e) {
                        e instanceof t.Object && e.id && e._hasData && (n[e.id] = e)
                    });
                    var r = d.first(this._opSetQueue);
                    this._opSetQueue = d.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e);
                    var i = this;
                    t._objectEach(e, function (e, r) {
                        i._serverData[r] = t._decode(e, r);
                        var o = t._traverse(i._serverData[r], function (e) {
                            if (e instanceof t.Object && n[e.id]) return n[e.id]
                        });
                        o && (i._serverData[r] = o)
                    }), this._rebuildAllEstimatedData();
                    var o = this._opSetQueue.map(d.clone);
                    this._refreshCache(), this._opSetQueue = o, this._saving = this._saving - 1
                }, _finishFetch: function (e, n) {
                    this._opSetQueue = [{}], this._mergeMagicFields(e);
                    var r = this;
                    t._objectEach(e, function (e, n) {
                        r._serverData[n] = t._decode(e, n)
                    }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
                }, _applyOpSet: function (e, n) {
                    var r = this;
                    t._objectEach(e, function (e, i) {
                        var o = O(n, i), s = (0, l.default)(o, 3), a = s[0], u = s[1], c = s[2];
                        w(n, i, e._estimate(a, r, i)), u && u[c] === t.Op._UNSET && delete u[c]
                    })
                }, _resetCacheForKey: function (e) {
                    var n = this.attributes[e];
                    if (d.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) {
                        var r = (0, u.default)(E(n));
                        if (this._hashedJSON[e] !== r) {
                            var i = !!this._hashedJSON[e];
                            return this._hashedJSON[e] = r, i
                        }
                    }
                    return !1
                }, _rebuildEstimatedDataForKey: function (e) {
                    var n = this;
                    delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function (r) {
                        var i = r[e];
                        if (i) {
                            var o = O(n.attributes, e), s = (0, l.default)(o, 4), a = s[0], u = s[1], c = s[2],
                                f = s[3];
                            w(n.attributes, e, i._estimate(a, n, e)), u && u[c] === t.Op._UNSET && delete u[c], n._resetCacheForKey(f)
                        }
                    })
                }, _rebuildAllEstimatedData: function () {
                    var e = this, n = d.clone(this.attributes);
                    this.attributes = d.clone(this._serverData), t._arrayEach(this._opSetQueue, function (n) {
                        e._applyOpSet(n, e.attributes), t._objectEach(n, function (t, n) {
                            e._resetCacheForKey(n)
                        })
                    }), t._objectEach(n, function (t, n) {
                        e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {})
                    }), t._objectEach(this.attributes, function (t, r) {
                        d.has(n, r) || e.trigger("change:" + r, e, t, {})
                    })
                }, set: function (e, n, r) {
                    var i;
                    if (d.isObject(e) || m(e) ? (i = d.mapObject(e, function (e, n) {
                        return x(n), t._decode(e, n)
                    }), r = n) : (i = {}, x(e), i[e] = t._decode(n, e)), r = r || {}, !i) return this;
                    i instanceof t.Object && (i = i.attributes), r.unset && t._objectEach(i, function (e, n) {
                        i[n] = new t.Op.Unset
                    });
                    var o = d.clone(i), s = this;
                    t._objectEach(o, function (e, n) {
                        e instanceof t.Op && (o[n] = e._estimate(s.attributes[n], s, n), o[n] === t.Op._UNSET && delete o[n])
                    }), this._validate(i, r), r.changes = {};
                    var a = this._escapedAttributes;
                    return t._arrayEach(d.keys(i), function (e) {
                        var n = i[e];
                        n instanceof t.Relation && (n.parent = s), n instanceof t.Op || (n = new t.Op.Set(n));
                        var o = !0;
                        n instanceof t.Op.Set && d.isEqual(s.attributes[e], n.value) && (o = !1), o && (delete a[e], r.silent ? s._silent[e] = !0 : r.changes[e] = !0);
                        var u = d.last(s._opSetQueue);
                        u[e] = n._mergeWithPrevious(u[e]), s._rebuildEstimatedDataForKey(e), o ? (s.changed[e] = s.attributes[e], r.silent || (s._pending[e] = !0)) : (delete s.changed[e], delete s._pending[e])
                    }), r.silent || this.change(r), this
                }, unset: function (t, e) {
                    return e = e || {}, e.unset = !0, this.set(t, null, e)
                }, increment: function (e, n) {
                    return (d.isUndefined(n) || d.isNull(n)) && (n = 1), this.set(e, new t.Op.Increment(n))
                }, add: function (e, n) {
                    return this.set(e, new t.Op.Add(g(n)))
                }, addUnique: function (e, n) {
                    return this.set(e, new t.Op.AddUnique(g(n)))
                }, remove: function (e, n) {
                    return this.set(e, new t.Op.Remove(g(n)))
                }, bitAnd: function (e, n) {
                    return this.set(e, new t.Op.BitAnd(n))
                }, bitOr: function (e, n) {
                    return this.set(e, new t.Op.BitOr(n))
                }, bitXor: function (e, n) {
                    return this.set(e, new t.Op.BitXor(n))
                }, op: function (t) {
                    return d.last(this._opSetQueue)[t]
                }, clear: function (t) {
                    t = t || {}, t.unset = !0;
                    var e = d.extend(this.attributes, this._operations);
                    return this.set(e, t)
                }, revert: function (t) {
                    var e = d.last(this._opSetQueue);
                    return g(t || d.keys(e)).forEach(function (t) {
                        delete e[t]
                    }), this._rebuildAllEstimatedData(), this
                }, _getSaveJSON: function () {
                    var e = d.clone(d.first(this._opSetQueue));
                    return t._objectEach(e, function (t, n) {
                        e[n] = t.toJSON()
                    }), e
                }, _canBeSerialized: function () {
                    return t.Object._canBeSerializedAsValue(this.attributes)
                }, fetch: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1],
                        n = this;
                    return _("classes", this.className, this.id, "GET", b(t), e).then(function (e) {
                        var r = n.parse(e);
                        return n._cleanupUnsetKeys(r, t.keys ? g(t.keys).join(",").split(",") : void 0), n._finishFetch(r, !0), n
                    })
                }, _cleanupUnsetKeys: function (t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.keys(this._serverData);
                    d.forEach(n, function (n) {
                        void 0 === t[n] && delete e._serverData[n]
                    })
                }, save: function (e, n, r) {
                    var i, o, s;
                    d.isObject(e) || m(e) ? (i = e, s = n) : (i = {}, i[e] = n, s = r), s = d.clone(s) || {}, s.wait && (o = d.clone(this.attributes));
                    var a = d.clone(s) || {};
                    a.wait && (a.silent = !0), i && this.set(i, a);
                    var u = this, c = [], l = [];
                    return t.Object._findUnsavedChildren(u, c, l), c.length + l.length > 1 ? t.Object._deepSaveAsync(this, u, s) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || h.default.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function (t) {
                    }).then(function () {
                        var t = u.id ? "PUT" : "POST", e = u._getSaveJSON(), n = {};
                        if ((u._fetchWhenSave || s.fetchWhenSave) && (n.new = "true"), s._failOnNotExist && (n.failOnNotExist = "true"), s.query) {
                            var r;
                            if ("function" == typeof s.query._getParams && (r = s.query._getParams()) && (n.where = r.where), !n.where) {
                                throw new Error("options.query is not an AV.Query")
                            }
                        }
                        d.extend(e, u._flags);
                        var c = "classes", l = u.className;
                        "_User" !== u.className || u.id || (c = "users", l = null);
                        var f = s._makeRequest || _, h = f(c, l, u.id, t, e, s, n);
                        return h = h.then(function (t) {
                            var e = u.parse(t);
                            return s.wait && (e = d.extend(i || {}, e)), u._finishSave(e), s.wait && u.set(o, a), u
                        }, function (t) {
                            throw u._cancelSave(), t
                        })
                    }), this._allPreviousSaves)
                }, destroy: function (t) {
                    t = t || {};
                    var e = this, n = function () {
                        e.trigger("destroy", e, e.collection, t)
                    };
                    return this.id ? (t.wait || n(), _("classes", this.className, this.id, "DELETE", this._flags, t).then(function () {
                        return t.wait && n(), e
                    })) : n()
                }, parse: function (e) {
                    var n = d.clone(e);
                    return d(["createdAt", "updatedAt"]).each(function (e) {
                        n[e] && (n[e] = t._parseDate(n[e]))
                    }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n
                }, clone: function () {
                    return new this.constructor(this.attributes)
                }, isNew: function () {
                    return !this.id
                }, change: function (e) {
                    e = e || {};
                    var n = this._changing;
                    this._changing = !0;
                    var r = this;
                    t._objectEach(this._silent, function (t) {
                        r._pending[t] = !0
                    });
                    var i = d.extend({}, e.changes, this._silent);
                    if (this._silent = {}, t._objectEach(i, function (t, n) {
                        r.trigger("change:" + n, r, r.get(n), e)
                    }), n) return this;
                    for (var o = function (t, e) {
                        r._pending[e] || r._silent[e] || delete r.changed[e]
                    }; !d.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, o), r._previousAttributes = d.clone(this.attributes);
                    return this._changing = !1, this
                }, previous: function (t) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null
                }, previousAttributes: function () {
                    return d.clone(this._previousAttributes)
                }, isValid: function () {
                    try {
                        this.validate(this.attributes)
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, validate: function (e) {
                    if (d.has(e, "ACL") && !(e.ACL instanceof t.ACL)) throw new p(p.OTHER_CAUSE, "ACL must be a AV.ACL.")
                }, _validate: function (t, e) {
                    !e.silent && this.validate && (t = d.extend({}, this.attributes, t), this.validate(t))
                }, getACL: function () {
                    return this.get("ACL")
                }, setACL: function (t, e) {
                    return this.set("ACL", t, e)
                }, disableBeforeHook: function () {
                    this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
                }, disableAfterHook: function () {
                    this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
                }, ignoreHook: function (e) {
                    if (!d.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e)) throw new Error("Unsupported hookName: " + e);
                    if (!t.hookKey) throw new Error("ignoreHook required hookKey");
                    this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(e)
                }
            }), t.Object.createWithoutData = function (e, n, r) {
                var i = void 0;
                if (d.isString(e)) i = t.Object._getSubclass(e); else {
                    if (!(e.prototype && e.prototype instanceof t.Object)) throw new Error("class must be a string or a subclass of AV.Object.");
                    i = e
                }
                if (!n) throw new TypeError("The objectId must be provided");
                var o = new i;
                return o.id = n, o._hasData = r, o
            }, t.Object.destroyAll = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t || 0 === t.length) return h.default.resolve();
                var n = d.groupBy(t, function (t) {
                    return (0, u.default)({ className: t.className, flags: t._flags })
                }), r = {
                    requests: d.map(n, function (t) {
                        var e = d.map(t, "id").join(",");
                        return { method: "DELETE", path: "/1.1/classes/" + t[0].className + "/" + e, body: t[0]._flags }
                    })
                };
                return _("batch", null, null, "POST", r, e).then(function (t) {
                    var e = d.find(t, function (t) {
                        return !t.success
                    });
                    if (e) throw new p(e.error.code, e.error.error)
                })
            }, t.Object._getSubclass = function (e) {
                if (!d.isString(e)) throw new Error("AV.Object._getSubclass requires a string argument.");
                var n = t.Object._classMap[e];
                return n || (n = t.Object.extend(e), t.Object._classMap[e] = n), n
            }, t.Object._create = function (e, n, r) {
                return new (t.Object._getSubclass(e))(n, r)
            }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.new = function (e, n) {
                return new t.Object(e, n)
            }, t.Object.extend = function (e, n, r) {
                if (!d.isString(e)) {
                    if (e && d.has(e, "className")) return t.Object.extend(e.className, e, n);
                    throw new Error("AV.Object.extend's first argument should be the className.")
                }
                "User" === e && (e = "_User");
                var i = null;
                if (d.has(t.Object._classMap, e)) {
                    var o = t.Object._classMap[e];
                    if (!n && !r) return o;
                    i = o._extend(n, r)
                } else n = n || {}, n._className = e, i = this._extend(n, r);
                return i.extend = function (n) {
                    if (d.isString(n) || n && d.has(n, "className")) return t.Object.extend.apply(i, arguments);
                    var r = [e].concat(d.toArray(arguments));
                    return t.Object.extend.apply(i, r)
                }, Object.defineProperty(i, "query", (0, s.default)(t.Object, "query")), i.new = function (t, e) {
                    return new i(t, e)
                }, t.Object._classMap[e] = i, i
            }, Object.defineProperty(t.Object.prototype, "className", {
                get: function () {
                    var t = this._className || this.constructor._LCClassName || this.constructor.name;
                    return "User" === t ? "_User" : t
                }
            }), t.Object.register = function (e, n) {
                if (!(e.prototype instanceof t.Object)) throw new Error("registered class is not a subclass of AV.Object");
                var r = n || e.name;
                if (!r.length) throw new Error("registered class must be named");
                n && (e._LCClassName = n), t.Object._classMap[r] = e
            }, Object.defineProperty(t.Object, "query", {
                get: function () {
                    return new t.Query(this.prototype.className)
                }
            }), t.Object._findUnsavedChildren = function (e, n, r) {
                t._traverse(e, function (e) {
                    return e instanceof t.Object ? void (e.dirty() && n.push(e)) : e instanceof t.File ? void (e.id || r.push(e)) : void 0
                })
            }, t.Object._canBeSerializedAsValue = function (e) {
                var n = !0;
                return e instanceof t.Object || e instanceof t.File ? n = !!e.id : d.isArray(e) ? t._arrayEach(e, function (e) {
                    t.Object._canBeSerializedAsValue(e) || (n = !1)
                }) : d.isObject(e) && t._objectEach(e, function (e) {
                    t.Object._canBeSerializedAsValue(e) || (n = !1)
                }), n
            }, t.Object._deepSaveAsync = function (e, n, r) {
                var i = [], o = [];
                t.Object._findUnsavedChildren(e, i, o);
                var s = h.default.resolve();
                d.each(o, function (t) {
                    s = s.then(function () {
                        return t.save()
                    })
                });
                var a = d.uniq(i), u = d.uniq(a);
                return s.then(function () {
                    return S(function () {
                        return u.length > 0
                    }, function () {
                        var e = [], n = [];
                        if (t._arrayEach(u, function (t) {
                            t._canBeSerialized() ? e.push(t) : n.push(t)
                        }), u = n, 0 === e.length) return h.default.reject(new p(p.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                        var i = h.default.resolve(d.map(e, function (t) {
                            return t._allPreviousSaves || h.default.resolve()
                        })), o = i.then(function () {
                            return _("batch", null, null, "POST", {
                                requests: d.map(e, function (t) {
                                    var e = t.id ? "PUT" : "POST", n = t._getSaveJSON();
                                    d.extend(n, t._flags);
                                    var r = t.className, i = "/classes/" + r;
                                    "_User" !== t.className || t.id || (i = "/users");
                                    var i = "/1.1" + i;
                                    return t.id && (i = i + "/" + t.id), t._startSave(), { method: e, path: i, body: n }
                                })
                            }, r).then(function (t) {
                                var n = d.map(e, function (e, n) {
                                    return t[n].success ? (e._finishSave(e.parse(t[n].success)), e) : (e._cancelSave(), new p(t[n].error.code, t[n].error.error))
                                });
                                return T(n)
                            })
                        });
                        return t._arrayEach(e, function (t) {
                            t._allPreviousSaves = o
                        }), o
                    })
                }).then(function () {
                    return e
                })
            }
        }
    }, function (t, e, n) {
        t.exports = { default: n(144), __esModule: !0 }
    }, function (t, e, n) {
        n(145);
        var r = n(1).Object;
        t.exports = function (t, e) {
            return r.getOwnPropertyDescriptor(t, e)
        }
    }, function (t, e, n) {
        var r = n(15), i = n(77).f;
        n(47)("getOwnPropertyDescriptor", function () {
            return function (t, e) {
                return i(r(t), e)
            }
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        e.__esModule = !0;
        var i = n(79), o = r(i), s = n(149), a = r(s);
        e.default = function () {
            function t(t, e) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var s, u = (0, a.default)(t); !(r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    i = !0, o = t
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }

            return function (e, n) {
                if (Array.isArray(e)) return e;
                if ((0, o.default)(Object(e))) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }, function (t, e, n) {
        n(34), n(21), t.exports = n(148)
    }, function (t, e, n) {
        var r = n(44), i = n(4)("iterator"), o = n(17);
        t.exports = n(1).isIterable = function (t) {
            var e = Object(t);
            return void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e))
        }
    }, function (t, e, n) {
        t.exports = { default: n(150), __esModule: !0 }
    }, function (t, e, n) {
        n(34), n(21), t.exports = n(151)
    }, function (t, e, n) {
        var r = n(8), i = n(45);
        t.exports = n(1).getIterator = function (t) {
            var e = i(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return r(e.call(t))
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(16);
        t.exports = function (t) {
            t.Role = t.Object.extend("_Role", {
                constructor: function (e, n) {
                    if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), n) {
                        if (!(n instanceof t.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n)
                    }
                }, getName: function () {
                    return this.get("name")
                }, setName: function (t, e) {
                    return this.set("name", t, e)
                }, getUsers: function () {
                    return this.relation("users")
                }, getRoles: function () {
                    return this.relation("roles")
                }, validate: function (e, n) {
                    if ("name" in e && e.name !== this.getName()) {
                        var o = e.name;
                        if (this.id && this.id !== e.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                        if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
                    }
                    return !!t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n)
                }
            })
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = n(9), o = r(i), s = n(154), a = r(s), u = n(2), c = r(u), l = n(0), f = n(69), h = n(16), d = n(5),
            p = d._request, v = d.request, _ = n(20), y = _.getAdapter, m = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin";
                return function (e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = r.unionIdPlatform,
                        o = void 0 === i ? t : i, s = r.asMainAccount, a = void 0 !== s && s;
                    if ("string" != typeof n) throw new h(h.OTHER_CAUSE, "unionId is not a string");
                    if ("string" != typeof o) throw new h(h.OTHER_CAUSE, "unionIdPlatform is not a string");
                    return l.extend({}, e, { platform: o, unionid: n, main_account: Boolean(a) })
                }
            };
        t.exports = function (t) {
            t.User = t.Object.extend("_User", {
                _isCurrentUser: !1, _mergeMagicFields: function (e) {
                    return e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e)
                }, _cleanupAuthData: function () {
                    if (this.isCurrent()) {
                        var e = this.get("authData");
                        e && t._objectEach(this.get("authData"), function (t, n) {
                            e[n] || delete e[n]
                        })
                    }
                }, _synchronizeAllAuthData: function () {
                    if (this.get("authData")) {
                        var e = this;
                        t._objectEach(this.get("authData"), function (t, n) {
                            e._synchronizeAuthData(n)
                        })
                    }
                }, _synchronizeAuthData: function (e) {
                    if (this.isCurrent()) {
                        var n;
                        l.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType();
                        var r = this.get("authData");
                        if (r && e) {
                            e.restoreAuthentication(r[n]) || this.dissociateAuthData(e)
                        }
                    }
                }, _handleSaveResult: function (e) {
                    return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !e && !this.isCurrent() || t._config.disableCurrentUser ? c.default.resolve() : c.default.resolve(t.User._saveCurrentUser(this))
                }, _linkWith: function (e, n) {
                    var r, i = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = o.failOnNotExist, u = void 0 !== s && s;
                    return l.isString(e) ? (r = e, e = t.User._authProviders[e]) : r = e.getAuthType(), n ? this.save({ authData: (0, a.default)({}, r, n) }, {
                        fetchWhenSave: !!this.get("authData"),
                        _failOnNotExist: u
                    }).then(function (t) {
                        return t._handleSaveResult(!0).then(function () {
                            return t
                        })
                    }) : e.authenticate().then(function (t) {
                        return i._linkWith(e, t)
                    })
                }, associateWithAuthData: function (t, e) {
                    return this._linkWith(e, t)
                }, associateWithAuthDataAndUnionId: function (t, e, n, r) {
                    return this._linkWith(e, m()(t, n, r))
                }, associateWithMiniApp: function (t, e) {
                    var n = this;
                    if (void 0 === t) {
                        return y("getAuthInfo")().then(function (t) {
                            return n._linkWith(t.provider, t.authData, e)
                        })
                    }
                    return this._linkWith(t.provider, t.authData, e)
                }, associateWithQQApp: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.preferUnionId, r = void 0 !== n && n, i = e.unionIdPlatform, o = void 0 === i ? "qq" : i,
                        s = e.asMainAccount, a = void 0 === s || s;
                    return y("getAuthInfo")({ preferUnionId: r, asMainAccount: a, platform: o }).then(function (e) {
                        return e.provider = "lc_qqapp", t.associateWithMiniApp(e)
                    })
                }, associateWithWeapp: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.preferUnionId, r = void 0 !== n && n, i = e.unionIdPlatform,
                        o = void 0 === i ? "weixin" : i, s = e.asMainAccount, a = void 0 === s || s;
                    return y("getAuthInfo")({ preferUnionId: r, asMainAccount: a, platform: o }).then(function (e) {
                        return t.associateWithMiniApp(e)
                    })
                }, linkWithWeapp: function (t) {
                    return console.warn("DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替"), this.associateWithWeapp(t)
                }, associateWithQQAppWithUnionId: function (e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.unionIdPlatform, o = void 0 === i ? "qq" : i, s = r.asMainAccount, a = void 0 !== s && s;
                    return y("getAuthInfo")({ platform: o }).then(function (r) {
                        return r = t.User.mergeUnionId(r, e, { asMainAccount: a }), r.provider = "lc_qqapp", n.associateWithMiniApp(r)
                    })
                }, associateWithWeappWithUnionId: function (e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.unionIdPlatform, o = void 0 === i ? "weixin" : i, s = r.asMainAccount,
                        a = void 0 !== s && s;
                    return y("getAuthInfo")({ platform: o }).then(function (r) {
                        return r = t.User.mergeUnionId(r, e, { asMainAccount: a }), n.associateWithMiniApp(r)
                    })
                }, dissociateAuthData: function (t) {
                    return this.unset("authData." + t), this.save().then(function (t) {
                        return t._handleSaveResult(!0).then(function () {
                            return t
                        })
                    })
                }, _unlinkFrom: function (t) {
                    return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(t)
                }, _isLinked: function (t) {
                    var e;
                    return e = l.isString(t) ? t : t.getAuthType(), !!(this.get("authData") || {})[e]
                }, isAnonymous: function () {
                    return this._isLinked("anonymous")
                }, logOut: function () {
                    this._logOutWithAll(), this._isCurrentUser = !1
                }, _logOutWithAll: function () {
                    if (this.get("authData")) {
                        var e = this;
                        t._objectEach(this.get("authData"), function (t, n) {
                            e._logOutWith(n)
                        })
                    }
                }, _logOutWith: function (e) {
                    this.isCurrent() && (l.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate())
                }, signUp: function (t, e) {
                    var n = t && t.username || this.get("username");
                    if (!n || "" === n) throw new h(h.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    var r = t && t.password || this.get("password");
                    if (!r || "" === r) throw new h(h.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    return this.save(t, e).then(function (t) {
                        return t.isAnonymous() && (t.unset("authData.anonymous"), t._opSetQueue = [{}]), t._handleSaveResult(!0).then(function () {
                            return t
                        })
                    })
                }, signUpOrlogInWithMobilePhone: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber");
                    if (!n || "" === n) throw new h(h.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    var r = t && t.smsCode || this.get("smsCode");
                    if (!r || "" === r) throw new h(h.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    return e._makeRequest = function (t, e, n, r, i) {
                        return p("usersByMobilePhone", null, null, "POST", i)
                    }, this.save(t, e).then(function (t) {
                        return delete t.attributes.smsCode, delete t._serverData.smsCode, t._handleSaveResult(!0).then(function () {
                            return t
                        })
                    })
                }, loginWithAuthData: function (t, e, n) {
                    return this._linkWith(e, t, n)
                }, loginWithAuthDataAndUnionId: function (t, e, n, r) {
                    return this.loginWithAuthData(m()(t, n, r), e, r)
                }, loginWithWeapp: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.preferUnionId, r = void 0 !== n && n, i = e.unionIdPlatform,
                        o = void 0 === i ? "weixin" : i, s = e.asMainAccount, a = void 0 === s || s,
                        u = e.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ preferUnionId: r, asMainAccount: a, platform: o }).then(function (e) {
                        return t.loginWithMiniApp(e, { failOnNotExist: c })
                    })
                }, loginWithWeappWithUnionId: function (e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.unionIdPlatform, o = void 0 === i ? "weixin" : i, s = r.asMainAccount,
                        a = void 0 !== s && s, u = r.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ platform: o }).then(function (r) {
                        return r = t.User.mergeUnionId(r, e, { asMainAccount: a }), n.loginWithMiniApp(r, { failOnNotExist: c })
                    })
                }, loginWithQQApp: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.preferUnionId, r = void 0 !== n && n, i = e.unionIdPlatform, o = void 0 === i ? "qq" : i,
                        s = e.asMainAccount, a = void 0 === s || s, u = e.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ preferUnionId: r, asMainAccount: a, platform: o }).then(function (e) {
                        return e.provider = "lc_qqapp", t.loginWithMiniApp(e, { failOnNotExist: c })
                    })
                }, loginWithQQAppWithUnionId: function (e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.unionIdPlatform, o = void 0 === i ? "qq" : i, s = r.asMainAccount, a = void 0 !== s && s,
                        u = r.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ platform: o }).then(function (r) {
                        return r = t.User.mergeUnionId(r, e, { asMainAccount: a }), r.provider = "lc_qqapp", n.loginWithMiniApp(r, { failOnNotExist: c })
                    })
                }, loginWithMiniApp: function (t, e) {
                    var n = this;
                    if (void 0 === t) {
                        return y("getAuthInfo")().then(function (t) {
                            return n.loginWithAuthData(t.authData, t.provider, e)
                        })
                    }
                    return this.loginWithAuthData(t.authData, t.provider, e)
                }, logIn: function () {
                    var t = this;
                    return p("login", null, null, "POST", this.toJSON()).then(function (e) {
                        var n = t.parse(e);
                        return t._finishFetch(n), t._handleSaveResult(!0).then(function () {
                            return n.smsCode || delete t.attributes.smsCode, t
                        })
                    })
                }, save: function (e, n, r) {
                    var i, o;
                    return l.isObject(e) || l.isNull(e) || l.isUndefined(e) ? (i = e, o = n) : (i = {}, i[e] = n, o = r), o = o || {}, t.Object.prototype.save.call(this, i, o).then(function (t) {
                        return t._handleSaveResult(!1).then(function () {
                            return t
                        })
                    })
                }, follow: function (e, n) {
                    if (!this.id) throw new Error("Please signin.");
                    var r = void 0, i = void 0;
                    e.user ? (r = e.user, i = e.attributes) : r = e;
                    var o = l.isString(r) ? r : r.id;
                    if (!o) throw new Error("Invalid target user.");
                    var s = "users/" + this.id + "/friendship/" + o;
                    return p(s, null, null, "POST", t._encode(i), n)
                }, unfollow: function (t, e) {
                    if (!this.id) throw new Error("Please signin.");
                    var n = void 0;
                    n = t.user ? t.user : t;
                    var r = l.isString(n) ? n : n.id;
                    if (!r) throw new Error("Invalid target user.");
                    var i = "users/" + this.id + "/friendship/" + r;
                    return p(i, null, null, "DELETE", null, e)
                }, getFollowersAndFollowees: function (e, n) {
                    if (!this.id) throw new Error("Please signin.");
                    return v({
                        method: "GET",
                        path: "/users/" + this.id + "/followersAndFollowees",
                        query: {
                            skip: e && e.skip,
                            limit: e && e.limit,
                            include: "follower,followee",
                            keys: "follower,followee"
                        },
                        authOptions: n
                    }).then(function (e) {
                        var n = e.followers, r = e.followees;
                        return {
                            followers: n.map(function (e) {
                                var n = e.follower;
                                return t._decode(n)
                            }), followees: r.map(function (e) {
                                var n = e.followee;
                                return t._decode(n)
                            })
                        }
                    })
                }, followerQuery: function () {
                    return t.User.followerQuery(this.id)
                }, followeeQuery: function () {
                    return t.User.followeeQuery(this.id)
                }, fetch: function (e, n) {
                    return t.Object.prototype.fetch.call(this, e, n).then(function (t) {
                        return t._handleSaveResult(!1).then(function () {
                            return t
                        })
                    })
                }, updatePassword: function (t, e, n) {
                    var r = this, i = "users/" + this.id + "/updatePassword";
                    return p(i, null, null, "PUT", { old_password: t, new_password: e }, n).then(function (t) {
                        return r._finishFetch(r.parse(t)), r._handleSaveResult(!0).then(function () {
                            return t
                        })
                    })
                }, isCurrent: function () {
                    return this._isCurrentUser
                }, getUsername: function () {
                    return this.get("username")
                }, getMobilePhoneNumber: function () {
                    return this.get("mobilePhoneNumber")
                }, setMobilePhoneNumber: function (t, e) {
                    return this.set("mobilePhoneNumber", t, e)
                }, setUsername: function (t, e) {
                    return this.set("username", t, e)
                }, setPassword: function (t, e) {
                    return this.set("password", t, e)
                }, getEmail: function () {
                    return this.get("email")
                }, setEmail: function (t, e) {
                    return this.set("email", t, e)
                }, authenticated: function () {
                    return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id
                }, isAuthenticated: function () {
                    var e = this;
                    return c.default.resolve().then(function () {
                        return !!e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function () {
                            return !0
                        }, function (t) {
                            if (211 === t.code) return !1;
                            throw t
                        })
                    })
                }, getSessionToken: function () {
                    return this._sessionToken
                }, refreshSessionToken: function (t) {
                    var e = this;
                    return p("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function (t) {
                        return e._finishFetch(t), e._handleSaveResult(!0).then(function () {
                            return e
                        })
                    })
                }, getRoles: function (e) {
                    return t.Relation.reverseQuery("_Role", "users", this).find(e)
                }
            }, {
                _currentUser: null,
                _currentUserMatchesDisk: !1,
                _CURRENT_USER_KEY: "currentUser",
                _authProviders: {},
                signUp: function (e, n, r, i) {
                    return r = r || {}, r.username = e, r.password = n, t.Object._create("_User").signUp(r, i)
                },
                logIn: function (e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({ username: e, password: n }), r.logIn()
                },
                become: function (t) {
                    return this._fetchUserBySessionToken(t).then(function (t) {
                        return t._handleSaveResult(!0).then(function () {
                            return t
                        })
                    })
                },
                _fetchUserBySessionToken: function (e) {
                    if (void 0 === e) return c.default.reject(new Error("The sessionToken cannot be undefined"));
                    var n = t.Object._create("_User");
                    return v({ method: "GET", path: "/users/me", authOptions: { sessionToken: e } }).then(function (t) {
                        var e = n.parse(t);
                        return n._finishFetch(e), n
                    })
                },
                logInWithMobilePhoneSmsCode: function (e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({ mobilePhoneNumber: e, smsCode: n }), r.logIn()
                },
                signUpOrlogInWithMobilePhone: function (e, n, r, i) {
                    return r = r || {}, r.mobilePhoneNumber = e, r.smsCode = n, t.Object._create("_User").signUpOrlogInWithMobilePhone(r, i)
                },
                logInWithMobilePhone: function (e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({ mobilePhoneNumber: e, password: n }), r.logIn()
                },
                loginWithEmail: function (e, n) {
                    var r = t.Object._create("_User");
                    return r._finishFetch({ email: e, password: n }), r.logIn()
                },
                loginWithAuthData: function (e, n, r) {
                    return t.User._logInWith(n, e, r)
                },
                signUpOrlogInWithAuthData: function () {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), this.loginWithAuthData.apply(this, arguments)
                },
                loginWithAuthDataAndUnionId: function (t, e, n, r) {
                    return this.loginWithAuthData(m()(t, n, r), e, r)
                },
                signUpOrlogInWithAuthDataAndUnionId: function () {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), this.loginWithAuthDataAndUnionId.apply(this, arguments)
                },
                mergeUnionId: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.asMainAccount,
                        i = void 0 !== r && r;
                    t = JSON.parse((0, o.default)(t));
                    var s = t, a = s.authData, u = s.platform;
                    return a.platform = u, a.main_account = i, a.unionid = e, t
                },
                loginWithWeapp: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.preferUnionId, r = void 0 !== n && n, i = e.unionIdPlatform,
                        o = void 0 === i ? "weixin" : i, s = e.asMainAccount, a = void 0 === s || s,
                        u = e.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ preferUnionId: r, asMainAccount: a, platform: o }).then(function (e) {
                        return t.loginWithMiniApp(e, { failOnNotExist: c })
                    })
                },
                loginWithWeappWithUnionId: function (e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.unionIdPlatform, o = void 0 === i ? "weixin" : i, s = r.asMainAccount,
                        a = void 0 !== s && s, u = r.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ platform: o }).then(function (r) {
                        return r = t.User.mergeUnionId(r, e, { asMainAccount: a }), n.loginWithMiniApp(r, { failOnNotExist: c })
                    })
                },
                loginWithQQApp: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.preferUnionId, r = void 0 !== n && n, i = e.unionIdPlatform, o = void 0 === i ? "qq" : i,
                        s = e.asMainAccount, a = void 0 === s || s, u = e.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ preferUnionId: r, asMainAccount: a, platform: o }).then(function (e) {
                        return e.provider = "lc_qqapp", t.loginWithMiniApp(e, { failOnNotExist: c })
                    })
                },
                loginWithQQAppWithUnionId: function (e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.unionIdPlatform, o = void 0 === i ? "qq" : i, s = r.asMainAccount, a = void 0 !== s && s,
                        u = r.failOnNotExist, c = void 0 !== u && u;
                    return y("getAuthInfo")({ platform: o }).then(function (r) {
                        return r = t.User.mergeUnionId(r, e, { asMainAccount: a }), r.provider = "lc_qqapp", n.loginWithMiniApp(r, { failOnNotExist: c })
                    })
                },
                loginWithMiniApp: function (t, e) {
                    var n = this;
                    if (void 0 === t) {
                        return y("getAuthInfo")().then(function (t) {
                            return n.loginWithAuthData(t.authData, t.provider, e)
                        })
                    }
                    return this.loginWithAuthData(t.authData, t.provider, e)
                },
                _genId: function () {
                    return f()
                },
                loginAnonymously: function () {
                    return this.loginWithAuthData({ id: t.User._genId() }, "anonymous")
                },
                associateWithAuthData: function (t, e, n) {
                    return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), t._linkWith(e, n)
                },
                logOut: function () {
                    return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), c.default.resolve(null)) : (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function () {
                        return t._refreshSubscriptionId()
                    }))
                },
                followerQuery: function (e) {
                    if (!e || !l.isString(e)) throw new Error("Invalid user object id.");
                    var n = new t.FriendShipQuery("_Follower");
                    return n._friendshipTag = "follower", n.equalTo("user", t.Object.createWithoutData("_User", e)), n
                },
                followeeQuery: function (e) {
                    if (!e || !l.isString(e)) throw new Error("Invalid user object id.");
                    var n = new t.FriendShipQuery("_Followee");
                    return n._friendshipTag = "followee", n.equalTo("user", t.Object.createWithoutData("_User", e)), n
                },
                requestPasswordReset: function (t) {
                    return p("requestPasswordReset", null, null, "POST", { email: t })
                },
                requestEmailVerify: function (t) {
                    return p("requestEmailVerify", null, null, "POST", { email: t })
                },
                requestMobilePhoneVerify: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = { mobilePhoneNumber: t };
                    return e.validateToken && (n.validate_token = e.validateToken), p("requestMobilePhoneVerify", null, null, "POST", n, e)
                },
                requestPasswordResetBySmsCode: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = { mobilePhoneNumber: t };
                    return e.validateToken && (n.validate_token = e.validateToken), p("requestPasswordResetBySmsCode", null, null, "POST", n, e)
                },
                requestChangePhoneNumber: function (t, e, n) {
                    var r = { mobilePhoneNumber: t };
                    return e && (r.ttl = n.ttl), n && n.validateToken && (r.validate_token = n.validateToken), p("requestChangePhoneNumber", null, null, "POST", r, n)
                },
                changePhoneNumber: function (t, e) {
                    return p("changePhoneNumber", null, null, "POST", { mobilePhoneNumber: t, code: e })
                },
                resetPasswordBySmsCode: function (t, e) {
                    return p("resetPasswordBySmsCode", null, t, "PUT", { password: e })
                },
                verifyMobilePhone: function (t) {
                    return p("verifyMobilePhone", null, t, "POST", null)
                },
                requestLoginSmsCode: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = { mobilePhoneNumber: t };
                    return e.validateToken && (n.validate_token = e.validateToken), p("requestLoginSmsCode", null, null, "POST", n, e)
                },
                currentAsync: function () {
                    return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), c.default.resolve(null)) : t.User._currentUser ? c.default.resolve(t.User._currentUser) : t.User._currentUserMatchesDisk ? c.default.resolve(t.User._currentUser) : t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function (e) {
                        if (!e) return null;
                        t.User._currentUserMatchesDisk = !0, t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(e);
                        return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
                    })
                },
                current: function () {
                    if (t._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
                    if (t.localStorage.async) {
                        var e = new Error("Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.");
                        throw e.code = "SYNC_API_NOT_AVAILABLE", e
                    }
                    if (t.User._currentUser) return t.User._currentUser;
                    if (t.User._currentUserMatchesDisk) return t.User._currentUser;
                    t.User._currentUserMatchesDisk = !0;
                    var n = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));
                    if (!n) return null;
                    t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
                    var r = JSON.parse(n);
                    return t.User._currentUser.id = r._id, delete r._id, t.User._currentUser._sessionToken = r._sessionToken, delete r._sessionToken, t.User._currentUser._finishFetch(r), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
                },
                _saveCurrentUser: function (e) {
                    var n;
                    return n = t.User._currentUser !== e ? t.User.logOut() : c.default.resolve(), n.then(function () {
                        e._isCurrentUser = !0, t.User._currentUser = e;
                        var n = e._toFullJSON();
                        return n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), (0, o.default)(n)).then(function () {
                            return t.User._currentUserMatchesDisk = !0, t._refreshSubscriptionId()
                        })
                    })
                },
                _registerAuthenticationProvider: function (e) {
                    t.User._authProviders[e.getAuthType()] = e, !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType())
                },
                _logInWith: function (e, n, r) {
                    return t.Object._create("_User")._linkWith(e, n, r)
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(74), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r);
        e.default = function (t, e, n) {
            return e in t ? (0, i.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = n(9), o = r(i), s = n(2), a = r(s), u = n(0), c = n(19)("leancloud:query"), l = n(16), f = n(5),
            h = f._request, d = f.request, p = n(6), v = p.ensureArray, _ = p.transformFetchOptions,
            y = p.continueWhile, m = function (t, e) {
                if (void 0 === t) throw new Error(e)
            };
        t.exports = function (t) {
            t.Query = function (e) {
                u.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._defaultParams = {}
            }, t.Query.or = function () {
                var e = u.toArray(arguments), n = null;
                t._arrayEach(e, function (t) {
                    if (u.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class")
                });
                var r = new t.Query(n);
                return r._orQuery(e), r
            }, t.Query.and = function () {
                var e = u.toArray(arguments), n = null;
                t._arrayEach(e, function (t) {
                    if (u.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class")
                });
                var r = new t.Query(n);
                return r._andQuery(e), r
            }, t.Query.doCloudQuery = function (e, n, r) {
                var i = { cql: e };
                return u.isArray(n) ? i.pvalues = n : r = n, h("cloudQuery", null, null, "GET", i, r).then(function (e) {
                    var n = new t.Query(e.className);
                    return {
                        results: u.map(e.results, function (t) {
                            var r = n._newObject(e);
                            return r._finishFetch && r._finishFetch(n._processResult(t), !0), r
                        }), count: e.count, className: e.className
                    }
                })
            }, t.Query.fromJSON = function (e) {
                var n = e.className, r = e.where, i = e.include, o = e.select, s = e.includeACL, a = e.limit,
                    c = e.skip, l = e.order;
                if ("string" != typeof n) throw new TypeError("Invalid Query JSON, className must be a String.");
                var f = new t.Query(n);
                return u.extend(f, {
                    _where: r,
                    _include: i,
                    _select: o,
                    _includeACL: s,
                    _limit: a,
                    _skip: c,
                    _order: l
                }), f
            }, t.Query._extend = t._extend, u.extend(t.Query.prototype, {
                _processResult: function (t) {
                    return t
                }, get: function (t, e) {
                    if (!u.isString(t)) throw new Error("objectId must be a string");
                    if ("" === t) return a.default.reject(new l(l.OBJECT_NOT_FOUND, "Object not found."));
                    var n = this._newObject();
                    n.id = t;
                    var r = this._getParams(), i = {};
                    return r.keys && (i.keys = r.keys), r.include && (i.include = r.include), r.includeACL && (i.includeACL = r.includeACL), h("classes", this.className, t, "GET", _(i), e).then(function (t) {
                        if (u.isEmpty(t)) throw new l(l.OBJECT_NOT_FOUND, "Object not found.");
                        return n._finishFetch(n.parse(t), !0), n
                    })
                }, toJSON: function () {
                    return {
                        className: this.className,
                        where: this._where,
                        include: this._include,
                        select: this._select,
                        includeACL: this._includeACL,
                        limit: this._limit,
                        skip: this._skip,
                        order: this._order
                    }
                }, _getParams: function () {
                    var t = u.extend({}, this._defaultParams, { where: this._where });
                    return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), t
                }, _newObject: function (e) {
                    return e && e.className ? new t.Object(e.className) : new this.objectClass
                }, _createRequest: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getParams(),
                        e = arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
                    if (encodeURIComponent((0, o.default)(t)).length > 2e3) {
                        return d({
                            path: "/batch",
                            method: "POST",
                            data: { requests: [{ method: "GET", path: "/1.1" + n, params: t }] },
                            authOptions: e
                        }).then(function (t) {
                            var e = t[0];
                            if (e.success) return e.success;
                            var n = new Error(e.error.error || "Unknown batch error");
                            throw n.code = e.error.code, n
                        })
                    }
                    return d({ method: "GET", path: n, query: t, authOptions: e })
                }, _parseResponse: function (t) {
                    var e = this;
                    return u.map(t.results, function (n) {
                        var r = e._newObject(t);
                        return r._finishFetch && r._finishFetch(e._processResult(n), !0), r
                    })
                }, find: function (t) {
                    return this._createRequest(void 0, t).then(this._parseResponse.bind(this))
                }, scan: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.orderedBy, r = e.batchSize, i = arguments[1], o = this._getParams();
                    c("scan %O", o), o.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete o.order), o.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete o.skip), o.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete o.limit), n && (o.scan_key = n), r && (o.limit = r);
                    var s = a.default.resolve([]), l = void 0, f = !1;
                    return {
                        next: function () {
                            return s = s.then(function (e) {
                                return f ? [] : e.length > 1 ? e : l || 0 === e.length ? h("scan/classes", t.className, null, "GET", l ? u.extend({}, o, { cursor: l }) : o, i).then(function (e) {
                                    return l = e.cursor, t._parseResponse(e)
                                }).then(function (t) {
                                    return t.length || (f = !0), e.concat(t)
                                }) : (f = !0, e)
                            }), s.then(function (t) {
                                return t.shift()
                            }).then(function (t) {
                                return { value: t, done: f }
                            })
                        }
                    }
                }, destroyAll: function (e) {
                    return this.find(e).then(function (n) {
                        return t.Object.destroyAll(n, e)
                    })
                }, count: function (t) {
                    var e = this._getParams();
                    return e.limit = 0, e.count = 1, this._createRequest(e, t).then(function (t) {
                        return t.count
                    })
                }, first: function (t) {
                    var e = this, n = this._getParams();
                    return n.limit = 1, this._createRequest(n, t).then(function (t) {
                        return u.map(t.results, function (t) {
                            var n = e._newObject();
                            return n._finishFetch && n._finishFetch(e._processResult(t), !0), n
                        })[0]
                    })
                }, skip: function (t) {
                    return m(t, "undefined is not a valid skip value"), this._skip = t, this
                }, limit: function (t) {
                    return m(t, "undefined is not a valid limit value"), this._limit = t, this
                }, equalTo: function (e, n) {
                    return m(e, "undefined is not a valid key"), m(n, "undefined is not a valid value"), this._where[e] = t._encode(n), this
                }, _addCondition: function (e, n, r) {
                    return m(e, "undefined is not a valid condition key"), m(n, "undefined is not a valid condition"), m(r, "undefined is not a valid condition value"), this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this
                }, sizeEqualTo: function (t, e) {
                    return this._addCondition(t, "$size", e), this
                }, notEqualTo: function (t, e) {
                    return this._addCondition(t, "$ne", e), this
                }, lessThan: function (t, e) {
                    return this._addCondition(t, "$lt", e), this
                }, greaterThan: function (t, e) {
                    return this._addCondition(t, "$gt", e), this
                }, lessThanOrEqualTo: function (t, e) {
                    return this._addCondition(t, "$lte", e), this
                }, greaterThanOrEqualTo: function (t, e) {
                    return this._addCondition(t, "$gte", e), this
                }, containedIn: function (t, e) {
                    return this._addCondition(t, "$in", e), this
                }, notContainedIn: function (t, e) {
                    return this._addCondition(t, "$nin", e), this
                }, containsAll: function (t, e) {
                    return this._addCondition(t, "$all", e), this
                }, exists: function (t) {
                    return this._addCondition(t, "$exists", !0), this
                }, doesNotExist: function (t) {
                    return this._addCondition(t, "$exists", !1), this
                }, matches: function (t, e, n) {
                    return this._addCondition(t, "$regex", e), n || (n = ""), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && n.length && this._addCondition(t, "$options", n), this
                }, matchesQuery: function (t, e) {
                    var n = e._getParams();
                    return n.className = e.className, this._addCondition(t, "$inQuery", n), this
                }, doesNotMatchQuery: function (t, e) {
                    var n = e._getParams();
                    return n.className = e.className, this._addCondition(t, "$notInQuery", n), this
                }, matchesKeyInQuery: function (t, e, n) {
                    var r = n._getParams();
                    return r.className = n.className, this._addCondition(t, "$select", { key: e, query: r }), this
                }, doesNotMatchKeyInQuery: function (t, e, n) {
                    var r = n._getParams();
                    return r.className = n.className, this._addCondition(t, "$dontSelect", { key: e, query: r }), this
                }, _orQuery: function (t) {
                    var e = u.map(t, function (t) {
                        return t._getParams().where
                    });
                    return this._where.$or = e, this
                }, _andQuery: function (t) {
                    var e = u.map(t, function (t) {
                        return t._getParams().where
                    });
                    return this._where.$and = e, this
                }, _quote: function (t) {
                    return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E"
                }, contains: function (t, e) {
                    return this._addCondition(t, "$regex", this._quote(e)), this
                }, startsWith: function (t, e) {
                    return this._addCondition(t, "$regex", "^" + this._quote(e)), this
                }, endsWith: function (t, e) {
                    return this._addCondition(t, "$regex", this._quote(e) + "$"), this
                }, ascending: function (t) {
                    return m(t, "undefined is not a valid key"), this._order = t, this
                }, addAscending: function (t) {
                    return m(t, "undefined is not a valid key"), this._order ? this._order += "," + t : this._order = t, this
                }, descending: function (t) {
                    return m(t, "undefined is not a valid key"), this._order = "-" + t, this
                }, addDescending: function (t) {
                    return m(t, "undefined is not a valid key"), this._order ? this._order += ",-" + t : this._order = "-" + t, this
                }, near: function (e, n) {
                    return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this
                }, withinRadians: function (t, e, n) {
                    return this.near(t, e), this._addCondition(t, "$maxDistance", n), this
                }, withinMiles: function (t, e, n) {
                    return this.withinRadians(t, e, n / 3958.8)
                }, withinKilometers: function (t, e, n) {
                    return this.withinRadians(t, e, n / 6371)
                }, withinGeoBox: function (e, n, r) {
                    return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", { $box: [n, r] }), this
                }, include: function (t) {
                    var e = this;
                    return m(t, "undefined is not a valid key"), u.forEach(arguments, function (t) {
                        e._include = e._include.concat(v(t))
                    }), this
                }, includeACL: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this._includeACL = t, this
                }, select: function (t) {
                    var e = this;
                    return m(t, "undefined is not a valid key"), u.forEach(arguments, function (t) {
                        e._select = e._select.concat(v(t))
                    }), this
                }, each: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._order || this._skip || this._limit >= 0) {
                        var r = new Error("Cannot iterate on a query with sort, skip, or limit.");
                        return a.default.reject(r)
                    }
                    var i = new t.Query(this.objectClass);
                    i._limit = n.batchSize || 100, i._where = u.clone(this._where), i._include = u.clone(this._include), i.ascending("objectId");
                    var o = !1;
                    return y(function () {
                        return !o
                    }, function () {
                        return i.find(n).then(function (t) {
                            var n = a.default.resolve();
                            return u.each(t, function (t) {
                                n = n.then(function () {
                                    return e(t)
                                })
                            }), n.then(function () {
                                t.length >= i._limit ? i.greaterThan("objectId", t[t.length - 1].id) : o = !0
                            })
                        })
                    })
                }, subscribe: function (e) {
                    return t.LiveQuery.init(this, e)
                }
            }), t.FriendShipQuery = t.Query._extend({
                _newObject: function () {
                    return new (t.Object._getSubclass("_User"))
                }, _processResult: function (t) {
                    if (t && t[this._friendshipTag]) {
                        var e = t[this._friendshipTag];
                        return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className), e
                    }
                    return null
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(71), a = n(6), u = a.inherits, c = n(5), l = c.request, f = function (t, e) {
            return l({ method: "POST", path: "/LiveQuery/subscribe", data: { query: t, id: e } })
        };
        t.exports = function (t) {
            var e = function () {
                if (!t._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query")
            };
            t.LiveQuery = u(s, {
                constructor: function (t, e, n, r) {
                    var i = this;
                    s.apply(this), this.id = t, this._client = e, this._client.register(this), this._queryJSON = n, this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function () {
                        f(i._queryJSON, i._subscriptionId).catch(function (t) {
                            return console.error("LiveQuery resubscribe error: " + t.message)
                        })
                    }, e.on("message", this._onMessage), e.on("reconnect", this._onReconnect)
                }, _dispatch: function (e) {
                    var n = this;
                    e.forEach(function (e) {
                        var r = e.op, i = e.object, s = e.query_id, a = e.updatedKeys;
                        if (s === n.id) {
                            var u = t.parseJSON(o.extend({ __type: "_File" === i.className ? "File" : "Object" }, i));
                            a ? n.emit(r, u, a) : n.emit(r, u)
                        }
                    })
                }, unsubscribe: function () {
                    var t = this._client;
                    return t.off("message", this._onMessage), t.off("reconnect", this._onReconnect), t.deregister(this), l({
                        method: "POST",
                        path: "/LiveQuery/unsubscribe",
                        data: { id: t.id, query_id: this.id }
                    })
                }
            }, {
                init: function (n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = r.subscriptionId,
                        s = void 0 === o ? t._getSubscriptionId() : o;
                    if (e(), !(n instanceof t.Query)) throw new TypeError("LiveQuery must be inited with a Query");
                    return i.default.resolve(s).then(function (e) {
                        return t._config.realtime.createLiveQueryClient(e).then(function (r) {
                            var i = n._getParams(), o = i.where, s = i.keys, a = i.returnACL,
                                u = { where: o, keys: s, returnACL: a, className: n.className },
                                c = f(u, e).then(function (n) {
                                    var i = n.query_id;
                                    return new t.LiveQuery(i, r, u, e)
                                }).finally(function () {
                                    r.deregister(c)
                                });
                            return r.register(c), c
                        })
                    })
                }, pause: function () {
                    return e(), t._config.realtime.pause()
                }, resume: function () {
                    return e(), t._config.realtime.resume()
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(6), o = i.tap;
        t.exports = function (t) {
            t.Captcha = function (t, e) {
                this._options = t, this._authOptions = e, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0
            }, t.Captcha.prototype.refresh = function () {
                var e = this;
                return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function (t) {
                    var n = t.captchaToken, i = t.url;
                    return r.extend(e, { captchaToken: n, url: i }), i
                })
            }, t.Captcha.prototype.verify = function (e) {
                var n = this;
                return t.Cloud.verifyCaptcha(e, this.captchaToken).then(o(function (t) {
                    return n.validateToken = t
                }))
            }, t.Captcha.prototype.bind = function (t, e) {
                var n = this, r = t.textInput, i = t.image, o = t.verifyButton, s = e.success, a = e.error;
                if ("string" == typeof r && !(r = document.getElementById(r))) throw new Error("textInput with id " + r + " not found");
                if ("string" == typeof i && !(i = document.getElementById(i))) throw new Error("image with id " + i + " not found");
                if ("string" == typeof o && !(o = document.getElementById(o))) throw new Error("verifyButton with id " + o + " not found");
                this.__refresh = function () {
                    return n.refresh().then(function (t) {
                        i.src = t, r && (r.value = "", r.focus())
                    }).catch(function (t) {
                        return console.warn("refresh captcha fail: " + t.message)
                    })
                }, i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)), this.__verify = function () {
                    var t = r.value;
                    n.verify(t).catch(function (t) {
                        throw n.__refresh(), t
                    }).then(s, a).catch(function (t) {
                        return console.warn("verify captcha fail: " + t.message)
                    })
                }, r && o && (this.__verifyButton = o, o.addEventListener("click", this.__verify))
            }, t.Captcha.prototype.unbind = function () {
                this.__image && this.__image.removeEventListener("click", this.__refresh), this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify)
            }, t.Captcha.request = function (e, n) {
                var r = new t.Captcha(e, n);
                return r.refresh().then(function () {
                    return r
                })
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(5), a = s._request, u = s.request;
        t.exports = function (t) {
            t.Cloud = t.Cloud || {}, o.extend(t.Cloud, {
                run: function (e, n, r) {
                    return u({
                        service: "engine",
                        method: "POST",
                        path: "/functions/" + e,
                        data: t._encode(n, null, !0),
                        authOptions: r
                    }).then(function (e) {
                        return t._decode(e).result
                    })
                }, rpc: function (e, n, r) {
                    return o.isArray(n) ? i.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : u({
                        service: "engine",
                        method: "POST",
                        path: "/call/" + e,
                        data: t._encodeObjectOrArray(n),
                        authOptions: r
                    }).then(function (e) {
                        return t._decode(e).result
                    })
                }, getServerDate: function () {
                    return a("date", null, null, "GET").then(function (e) {
                        return t._decode(e)
                    })
                }, requestSmsCode: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (o.isString(t) && (t = { mobilePhoneNumber: t }), !t.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
                    return e.validateToken && (t = o.extend({}, t, { validate_token: e.validateToken })), a("requestSmsCode", null, null, "POST", t, e)
                }, verifySmsCode: function (t, e) {
                    if (!t) throw new Error("Missing sms code.");
                    var n = {};
                    return o.isString(e) && (n.mobilePhoneNumber = e), a("verifySmsCode", t, null, "POST", n)
                }, _requestCaptcha: function (t, e) {
                    return a("requestCaptcha", null, null, "GET", t, e).then(function (t) {
                        var e = t.captcha_url;
                        return { captchaToken: t.captcha_token, url: e }
                    })
                }, requestCaptcha: t.Captcha.request, verifyCaptcha: function (t, e) {
                    return a("verifyCaptcha", null, null, "POST", {
                        captcha_code: t,
                        captcha_token: e
                    }).then(function (t) {
                        return t.validate_token
                    })
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(5).request;
        t.exports = function (t) {
            t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function (t, e) {
                if (t.where && (t.where = t.where._getParams().where), t.where && t.cql) throw new Error("Both where and cql can't be set");
                if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_interval) throw new Error("Both expiration_time and expiration_interval can't be set");
                return r({ service: "push", method: "POST", path: "/push", data: t, authOptions: e })
            }
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = n(2), o = r(i), s = n(28), a = r(s), u = n(0), c = n(5)._request, l = n(6), f = l.getSessionToken;
        t.exports = function (t) {
            var e = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return f(e) ? t.User._fetchUserBySessionToken(f(e)) : t.User.currentAsync()
            }, n = function (n) {
                return e(n).then(function (e) {
                    return t.Object.createWithoutData("_User", e.id)._toPointer()
                })
            };
            t.Status = function (t, e) {
                return this.data = {}, this.inboxType = "default", this.query = null, t && "object" === (void 0 === t ? "undefined" : (0, a.default)(t)) ? this.data = t : (t && (this.data.image = t), e && (this.data.message = e)), this
            }, u.extend(t.Status.prototype, {
                get: function (t) {
                    return this.data[t]
                }, set: function (t, e) {
                    return this.data[t] = e, this
                }, destroy: function (t) {
                    return this.id ? c("statuses", null, this.id, "DELETE", t) : o.default.reject(new Error("The status id is not exists."))
                }, toObject: function () {
                    return this.id ? t.Object.createWithoutData("_Status", this.id) : null
                }, _getDataJSON: function () {
                    var e = u.clone(this.data);
                    return t._encode(e)
                }, send: function () {
                    var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!f(r) && !t.User.current()) throw new Error("Please signin an user.");
                    return this.query ? n(r).then(function (t) {
                        var n = e.query._getParams();
                        n.className = e.query.className;
                        var i = {};
                        return i.query = n, e.data = e.data || {}, e.data.source = e.data.source || t, i.data = e._getDataJSON(), i.inboxType = e.inboxType || "default", c("statuses", null, null, "POST", i, r)
                    }).then(function (n) {
                        return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
                    }) : t.Status.sendStatusToFollowers(this, r)
                }, _finishFetch: function (e) {
                    this.id = e.objectId, this.createdAt = t._parseDate(e.createdAt), this.updatedAt = t._parseDate(e.updatedAt), this.messageId = e.messageId, delete e.messageId, delete e.objectId, delete e.createdAt, delete e.updatedAt, this.data = t._decode(e)
                }
            }), t.Status.sendStatusToFollowers = function (e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!f(r) && !t.User.current()) throw new Error("Please signin an user.");
                return n(r).then(function (n) {
                    var i = {};
                    i.className = "_Follower", i.keys = "follower", i.where = { user: n };
                    var o = {};
                    return o.query = i, e.data = e.data || {}, e.data.source = e.data.source || n, o.data = e._getDataJSON(), o.inboxType = e.inboxType || "default", c("statuses", null, null, "POST", o, r).then(function (n) {
                        return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
                    })
                })
            }, t.Status.sendPrivateStatus = function (e, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!f(i) && !t.User.current()) throw new Error("Please signin an user.");
                if (!r) throw new Error("Invalid target user.");
                var o = u.isString(r) ? r : r.id;
                if (!o) throw new Error("Invalid target user.");
                return n(i).then(function (n) {
                    var r = {};
                    r.className = "_User", r.where = { objectId: o };
                    var s = {};
                    return s.query = r, e.data = e.data || {}, e.data.source = e.data.source || n, s.data = e._getDataJSON(), s.inboxType = "private", e.inboxType = "private", c("statuses", null, null, "POST", s, i).then(function (n) {
                        return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
                    })
                })
            }, t.Status.countUnreadStatuses = function (n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (u.isString(r) || (i = r), !f(i) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return o.default.resolve(n || e(i)).then(function (e) {
                    var n = {};
                    return n.inboxType = t._encode(r), n.owner = t._encode(e), c("subscribe/statuses/count", null, null, "GET", n, i)
                })
            }, t.Status.resetUnreadCount = function (n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (u.isString(r) || (i = r), !f(i) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return o.default.resolve(n || e(i)).then(function (e) {
                    var n = {};
                    return n.inboxType = t._encode(r), n.owner = t._encode(e), c("subscribe/statuses/resetUnreadCount", null, null, "POST", n, i)
                })
            }, t.Status.statusQuery = function (e) {
                var n = new t.Query("_Status");
                return e && n.equalTo("source", e), n
            }, t.InboxQuery = t.Query._extend({
                _objectClass: t.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function () {
                    return new t.Status
                },
                _createRequest: function (e, n) {
                    return t.InboxQuery.__super__._createRequest.call(this, e, n, "/subscribe/statuses")
                },
                sinceId: function (t) {
                    return this._sinceId = t, this
                },
                maxId: function (t) {
                    return this._maxId = t, this
                },
                owner: function (t) {
                    return this._owner = t, this
                },
                inboxType: function (t) {
                    return this._inboxType = t, this
                },
                _getParams: function () {
                    var e = t.InboxQuery.__super__._getParams.call(this);
                    return e.owner = t._encode(this._owner), e.inboxType = t._encode(this._inboxType), e.sinceId = t._encode(this._sinceId), e.maxId = t._encode(this._maxId), e
                }
            }), t.Status.inboxQuery = function (e, n) {
                var r = new t.InboxQuery(t.Status);
                return e && (r._owner = e), n && (r._inboxType = n), r
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(9), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(5)._request;
        t.exports = function (t) {
            t.SearchSortBuilder = function () {
                this._sortFields = []
            }, o.extend(t.SearchSortBuilder.prototype, {
                _addField: function (t, e, n, r) {
                    var i = {};
                    return i[t] = {
                        order: e || "asc",
                        mode: n || "avg",
                        missing: "_" + (r || "last")
                    }, this._sortFields.push(i), this
                }, ascending: function (t, e, n) {
                    return this._addField(t, "asc", e, n)
                }, descending: function (t, e, n) {
                    return this._addField(t, "desc", e, n)
                }, whereNear: function (t, e, n) {
                    n = n || {};
                    var r = {}, i = { lat: e.latitude, lon: e.longitude },
                        o = { order: n.order || "asc", mode: n.mode || "avg", unit: n.unit || "km" };
                    return o[t] = i, r._geo_distance = o, this._sortFields.push(r), this
                }, build: function () {
                    return (0, i.default)(t._encode(this._sortFields))
                }
            }), t.SearchQuery = t.Query._extend({
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _clazz: null,
                constructor: function (e) {
                    e ? this._clazz = e : e = "__INVALID_CLASS", t.Query.call(this, e)
                },
                _createRequest: function (t, e) {
                    return s("search/select", null, null, "GET", t || this._getParams(), e)
                },
                sid: function (t) {
                    return this._sid = t, this
                },
                queryString: function (t) {
                    return this._queryString = t, this
                },
                highlights: function (t) {
                    var e;
                    return e = t && o.isString(t) ? o.toArray(arguments) : t, this._highlights = e, this
                },
                sortBy: function (t) {
                    return this._sortBuilder = t, this
                },
                hits: function () {
                    return this._hits || (this._hits = 0), this._hits
                },
                _processResult: function (t) {
                    return delete t.className, delete t._app_url, delete t._deeplink, t
                },
                hasMore: function () {
                    return !this._hitEnd
                },
                reset: function () {
                    this._hitEnd = !1, this._sid = null, this._hits = 0
                },
                find: function (t) {
                    var e = this;
                    return this._createRequest(void 0, t).then(function (t) {
                        return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, o.map(t.results, function (n) {
                            n.className && (t.className = n.className);
                            var r = e._newObject(t);
                            return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r
                        })
                    })
                },
                _getParams: function () {
                    var e = t.SearchQuery.__super__._getParams.call(this);
                    if (delete e.where, this._clazz && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
                    if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order) throw new Error("sort and order can not be set at same time.");
                    return this._sortBuilder && (e.sort = this._sortBuilder.build()), e
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(16), a = n(5), u = a.request;
        t.exports = function (t) {
            t.Insight = t.Insight || {}, o.extend(t.Insight, {
                startJob: function (e, n) {
                    if (!e || !e.sql) throw new Error("Please provide the sql to run the job.");
                    var r = { jobConfig: e, appId: t.applicationId };
                    return u({
                        path: "/bigquery/jobs",
                        method: "POST",
                        data: t._encode(r, null, !0),
                        authOptions: n,
                        signKey: !1
                    }).then(function (e) {
                        return t._decode(e).id
                    })
                }, on: function (t, e) {
                }
            }), t.Insight.JobQuery = function (t, e) {
                if (!t) throw new Error("Please provide the job id.");
                this.id = t, this.className = e, this._skip = 0, this._limit = 100
            }, o.extend(t.Insight.JobQuery.prototype, {
                skip: function (t) {
                    return this._skip = t, this
                }, limit: function (t) {
                    return this._limit = t, this
                }, find: function (t) {
                    var e = { skip: this._skip, limit: this._limit };
                    return u({
                        path: "/bigquery/jobs/" + this.id,
                        method: "GET",
                        query: e,
                        authOptions: t,
                        signKey: !1
                    }).then(function (t) {
                        return t.error ? i.default.reject(new s(t.code, t.error)) : i.default.resolve(t)
                    })
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(5), o = i.request, s = n(6), a = s.getSessionToken;
        t.exports = function (t) {
            t.Friendship = {
                request: function (e, n) {
                    if (!t.User.current()) throw new Error("Please signin an user.");
                    var i = void 0, s = void 0;
                    e.friend ? (i = e.friend, s = e.attributes) : i = e;
                    var a = r.isString(i) ? t.Object.createWithoutData("_User", i) : i;
                    return o({
                        method: "POST",
                        path: "/users/friendshipRequests",
                        data: t._encode({ user: t.User.current(), friend: a, friendship: s }),
                        authOptions: n
                    })
                }, acceptRequest: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!a(n) && !t.User.current()) throw new Error("Please signin an user.");
                    var i = void 0, s = void 0;
                    e.request ? (i = e.request, s = e.attributes) : i = e;
                    var u = r.isString(i) ? i : i.id;
                    return o({
                        method: "PUT",
                        path: "/users/friendshipRequests/" + u + "/accept",
                        data: { friendship: t._encode(s) },
                        authOptions: n
                    })
                }, declineRequest: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!a(n) && !t.User.current()) throw new Error("Please signin an user.");
                    var i = r.isString(e) ? e : e.id;
                    return o({ method: "PUT", path: "/users/friendshipRequests/" + i + "/decline", authOptions: n })
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(9), i = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(r), o = n(0), s = n(5), a = s._request, u = n(18), c = function (t) {
            return "string" == typeof t ? t : "function" == typeof t.getPayload ? (0, i.default)(t.getPayload()) : (0, i.default)(t)
        };
        t.exports = u.Object.extend("_Conversation", {
            constructor: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u.Object.prototype.constructor.call(this, null, null), this.set("name", t), void 0 !== e.isSystem && this.set("sys", !!e.isSystem), void 0 !== e.isTransient && this.set("tr", !!e.isTransient)
            }, getCreator: function () {
                return this.get("c")
            }, getLastMessageAt: function () {
                return this.get("lm")
            }, getMembers: function () {
                return this.get("m")
            }, addMember: function (t) {
                return this.add("m", t)
            }, getMutedMembers: function () {
                return this.get("mu")
            }, getName: function () {
                return this.get("name")
            }, isTransient: function () {
                return this.get("tr")
            }, isSystem: function () {
                return this.get("sys")
            }, send: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = { from_peer: t, conv_id: this.id, transient: !1, message: c(e) };
                return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), a("rtm", "messages", null, "POST", i, r)
            }, broadcast: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = { from_peer: t, conv_id: this.id, message: c(e) };
                if (void 0 !== n.pushData && (i.push = n.pushData), void 0 !== n.validTill) {
                    var s = n.validTill;
                    o.isDate(s) && (s = s.getTime()), n.valid_till = s
                }
                return a("rtm", "broadcast", null, "POST", i, r)
            }
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = t.name, n = t.value, r = t.version;
            this.name = e, this.value = n, this.version = r
        }

        var i = n(2), o = function (t) {
            return t && t.__esModule ? t : { default: t }
        }(i), s = n(0), a = n(5), u = a.request, c = n(6), l = c.ensureArray, f = c.parseDate, h = n(18);
        h.LeaderboardVersionChangeInterval = {
            NEVER: "never",
            DAY: "day",
            WEEK: "week",
            MONTH: "month"
        }, h.LeaderboardOrder = {
            ASCENDING: "ascending",
            DESCENDING: "descending"
        }, h.LeaderboardUpdateStrategy = { BETTER: "better", LAST: "last", SUM: "sum" };
        var d = function (t) {
            var e = h._decode(t);
            return new r({ name: e.statisticName, value: e.statisticValue, version: e.version })
        };
        h.Leaderboard = function (t) {
            this.statisticName = t, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0
        };
        var p = h.Leaderboard;
        h.Leaderboard.createWithoutData = function (t) {
            return new p(t)
        }, h.Leaderboard.createLeaderboard = function (t, e) {
            var n = t.statisticName, r = t.order, i = t.versionChangeInterval, o = t.updateStrategy;
            return u({
                method: "POST",
                path: "/leaderboard/leaderboards",
                data: { statisticName: n, order: r, versionChangeInterval: i, updateStrategy: o },
                authOptions: e
            }).then(function (t) {
                return new p(n)._finishFetch(t)
            })
        }, h.Leaderboard.getLeaderboard = function (t, e) {
            return p.createWithoutData(t).fetch(e)
        }, h.Leaderboard.getStatistics = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.statisticNames,
                r = arguments[2];
            return o.default.resolve().then(function () {
                if (!t || !t.id) throw new Error("user must be an AV.User");
                return u({
                    method: "GET",
                    path: "/leaderboard/users/" + t.id + "/statistics",
                    query: { statistics: n ? l(n).join(",") : void 0 },
                    authOptions: r
                }).then(function (t) {
                    return t.results.map(d)
                })
            })
        }, h.Leaderboard.updateStatistics = function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return o.default.resolve().then(function () {
                if (!t || !t.id) throw new Error("user must be an AV.User");
                var r = s.map(e, function (t, e) {
                    return { statisticName: e, statisticValue: t }
                }), i = n.overwrite;
                return u({
                    method: "POST",
                    path: "/leaderboard/users/" + t.id + "/statistics",
                    query: { overwrite: i ? 1 : void 0 },
                    data: r,
                    authOptions: n
                }).then(function (t) {
                    return t.results.map(d)
                })
            })
        }, h.Leaderboard.deleteStatistics = function (t, e, n) {
            return o.default.resolve().then(function () {
                if (!t || !t.id) throw new Error("user must be an AV.User");
                return u({
                    method: "DELETE",
                    path: "/leaderboard/users/" + t.id + "/statistics",
                    query: { statistics: l(e).join(",") },
                    authOptions: n
                }).then(function () {
                })
            })
        }, s.extend(p.prototype, {
            _finishFetch: function (t) {
                var e = this;
                return s.forEach(t, function (t, n) {
                    "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (t = f(t)), t && "Date" === t.__type && (t = f(t.iso)), e[n] = t)
                }), this
            }, fetch: function (t) {
                var e = this;
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: t
                }).then(function (t) {
                    return e._finishFetch(t)
                })
            }, count: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.version,
                    n = arguments[1];
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks",
                    query: { count: 1, limit: 0, version: e },
                    authOptions: n
                }).then(function (t) {
                    return t.count
                })
            }, _getResults: function (t, e, n) {
                var r = t.skip, i = t.limit, o = t.selectUserKeys, a = t.includeUserKeys, c = t.includeStatistics,
                    f = t.version;
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
                    query: {
                        skip: r,
                        limit: i,
                        selectUserKeys: s.union(l(o), l(a)).join(",") || void 0,
                        includeUser: a ? l(a).join(",") : void 0,
                        includeStatistics: c ? l(c).join(",") : void 0,
                        version: f
                    },
                    authOptions: e
                }).then(function (t) {
                    return t.results.map(function (t) {
                        var e = h._decode(t), n = e.user, r = e.statisticValue, i = e.rank, o = e.statistics;
                        return { user: n, value: r, rank: i, includedStatistics: (void 0 === o ? [] : o).map(d) }
                    })
                })
            }, getResults: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.skip, n = t.limit,
                    r = t.selectUserKeys, i = t.includeUserKeys, o = t.includeStatistics, s = t.version,
                    a = arguments[1];
                return this._getResults({
                    skip: e,
                    limit: n,
                    selectUserKeys: r,
                    includeUserKeys: i,
                    includeStatistics: o,
                    version: s
                }, a)
            }, getResultsAroundUser: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments[2];
                if (t && "string" != typeof t.id) return this.getResultsAroundUser(void 0, t, e);
                var r = e.limit, i = e.selectUserKeys, o = e.includeUserKeys, s = e.includeStatistics, a = e.version;
                return this._getResults({
                    limit: r,
                    selectUserKeys: i,
                    includeUserKeys: o,
                    includeStatistics: s,
                    version: a
                }, n, t ? t.id : "self")
            }, _update: function (t, e) {
                var n = this;
                return u({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    data: t,
                    authOptions: e
                }).then(function (t) {
                    return n._finishFetch(t)
                })
            }, updateVersionChangeInterval: function (t, e) {
                return this._update({ versionChangeInterval: t }, e)
            }, updateUpdateStrategy: function (t, e) {
                return this._update({ updateStrategy: t }, e)
            }, reset: function (t) {
                var e = this;
                return u({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
                    authOptions: t
                }).then(function (t) {
                    return e._finishFetch(t)
                })
            }, destroy: function (t) {
                return h.request({
                    method: "DELETE",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: t
                }).then(function () {
                })
            }, getArchives: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.skip,
                    r = e.limit, i = arguments[1];
                return u({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
                    query: { skip: n, limit: r },
                    authOptions: i
                }).then(function (e) {
                    return e.results.map(function (e) {
                        var n = e.version, r = e.status, i = e.url, o = e.activatedAt, s = e.deactivatedAt;
                        return {
                            statisticName: t.statisticName,
                            version: n,
                            status: r,
                            url: i,
                            activatedAt: f(o.iso),
                            deactivatedAt: f(s.iso)
                        }
                    })
                })
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(167);
        t.exports = function (t) {
            return t.setAdapters(r), t
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(168);
        Object.defineProperty(e, "request", {
            enumerable: !0, get: function () {
                return r.request
            }
        }), Object.defineProperty(e, "upload", {
            enumerable: !0, get: function () {
                return r.upload
            }
        });
        var i = window.localStorage, o = window.WebSocket, s = { name: "Browser" };
        e.WebSocket = o, e.platformInfo = s, e.storage = i
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return { ok: t.ok, status: t.status, headers: t.header, data: t.body }
        }

        Object.defineProperty(e, "__esModule", { value: !0 }), e.upload = e.request = void 0;
        var i = n(169), o = n(170);
        e.request = function (t, e) {
            void 0 === e && (e = {});
            var n = e.method, s = void 0 === n ? "GET" : n, a = e.data, u = e.headers, c = e.onprogress, l = e.signal;
            if (null === l || void 0 === l ? void 0 : l.aborted) return Promise.reject(new i.AbortError("Request aborted"));
            var f = o(s, t);
            return u && f.set(u), c && f.on("progress", c), new Promise(function (t, e) {
                var n = function () {
                    e(new i.AbortError("Request aborted")), f.abort()
                };
                null === l || void 0 === l || l.addEventListener("abort", n), f.send(a).then(function (e) {
                    return t(r(e))
                }).catch(function (n) {
                    n.response ? t(r(n.response)) : e(n)
                }).finally(function () {
                    return null === l || void 0 === l ? void 0 : l.removeEventListener("abort", n)
                })
            })
        }, e.upload = function (t, e, n) {
            void 0 === n && (n = {});
            var s = n.method, a = void 0 === s ? "POST" : s, u = n.data, c = n.headers, l = n.onprogress, f = n.signal;
            if (null === f || void 0 === f ? void 0 : f.aborted) return Promise.reject(new i.AbortError("Request aborted"));
            var h = o(a, t).attach(e.field, e.data, e.name);
            return u && h.field(u), c && h.set(c), l && h.on("progress", l), new Promise(function (t, e) {
                var n = function () {
                    e(new i.AbortError("Request aborted")), h.abort()
                };
                null === f || void 0 === f || f.addEventListener("abort", n), h.then(function (e) {
                    return t(r(e))
                }).catch(function (n) {
                    n.response ? t(r(n.response)) : e(n)
                }).finally(function () {
                    return null === f || void 0 === f ? void 0 : f.removeEventListener("abort", n)
                })
            })
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                this.constructor = t
            }

            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }

        Object.defineProperty(e, "__esModule", { value: !0 }), n.d(e, "AbortError", function () {
            return o
        });/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var i = function (t, e) {
            return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
        }, o = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "AbortError", e
            }

            return r(e, t), e
        }(Error)
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        function i(t) {
            "@babel/helpers - typeof";
            return (i = "function" == typeof b.default && "symbol" === (0, m.default)(_.default) ? function (t) {
                return void 0 === t ? "undefined" : (0, m.default)(t)
            } : function (t) {
                return t && "function" == typeof b.default && t.constructor === b.default && t !== b.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, m.default)(t)
            })(t)
        }

        function o() {
        }

        function s(t) {
            if (!S(t)) return t;
            var e = [];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && a(e, n, t[n]);
            return e.join("&")
        }

        function a(t, e, n) {
            if (void 0 !== n) {
                if (null === n) return void t.push(encodeURI(e));
                if (Array.isArray(n)) n.forEach(function (n) {
                    a(t, e, n)
                }); else if (S(n)) for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && a(t, "".concat(e, "[").concat(r, "]"), n[r]); else t.push(encodeURI(e) + "=" + encodeURIComponent(n))
            }
        }

        function u(t) {
            for (var e, n, r = {}, i = t.split("&"), o = 0, s = i.length; o < s; ++o) e = i[o], n = e.indexOf("="), -1 === n ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
            return r
        }

        function c(t) {
            for (var e, n, r, i, o = t.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) n = o[a], -1 !== (e = n.indexOf(":")) && (r = n.slice(0, e).toLowerCase(), i = T(n.slice(e + 1)), s[r] = i);
            return s
        }

        function l(t) {
            return /[\/+]json($|[^-\w])/.test(t)
        }

        function f(t) {
            this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
            var e = this.xhr.status;
            1223 === e && (e = 204), this._setStatusProperties(e), this.headers = c(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
        }

        function h(t, e) {
            var n = this;
            this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function () {
                var t = null, e = null;
                try {
                    e = new f(n)
                } catch (e) {
                    return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
                }
                n.emit("response", e);
                var r;
                try {
                    n._isResponseOK(e) || (r = new Error(e.statusText || e.text || "Unsuccessful HTTP response"))
                } catch (t) {
                    r = t
                }
                r ? (r.original = t, r.response = e, r.status = e.status, n.callback(r, e)) : n.callback(null, e)
            })
        }

        function d(t, e, n) {
            var r = x("DELETE", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }

        var p, v = n(35), _ = r(v), y = n(28), m = r(y), g = n(29), b = r(g);
        "undefined" != typeof window ? p = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), p = void 0) : p = self;
        var w = n(171), O = n(172), A = n(173), S = n(80), E = n(174), C = n(176);
        t.exports = function (t, n) {
            return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 === arguments.length ? new e.Request("GET", t) : new e.Request(t, n)
        }, e = t.exports;
        var x = e;
        e.Request = h, x.getXHR = function () {
            if (p.XMLHttpRequest && (!p.location || "file:" !== p.location.protocol || !p.ActiveXObject)) return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (t) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
            }
            throw new Error("Browser-only version of superagent could not find XHR")
        };
        var T = "".trim ? function (t) {
            return t.trim()
        } : function (t) {
            return t.replace(/(^\s*|\s*$)/g, "")
        };
        x.serializeObject = s, x.parseString = u, x.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, x.serialize = {
            "application/x-www-form-urlencoded": s,
            "application/json": O
        }, x.parse = {
            "application/x-www-form-urlencoded": u,
            "application/json": JSON.parse
        }, E(f.prototype), f.prototype._parseBody = function (t) {
            var e = x.parse[this.type];
            return this.req._parser ? this.req._parser(this, t) : (!e && l(this.type) && (e = x.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null)
        }, f.prototype.toError = function () {
            var t = this.req, e = t.method, n = t.url,
                r = "cannot ".concat(e, " ").concat(n, " (").concat(this.status, ")"), i = new Error(r);
            return i.status = this.status, i.method = e, i.url = n, i
        }, x.Response = f, w(h.prototype), A(h.prototype), h.prototype.type = function (t) {
            return this.set("Content-Type", x.types[t] || t), this
        }, h.prototype.accept = function (t) {
            return this.set("Accept", x.types[t] || t), this
        }, h.prototype.auth = function (t, e, n) {
            1 === arguments.length && (e = ""), "object" === i(e) && null !== e && (n = e, e = ""), n || (n = { type: "function" == typeof btoa ? "basic" : "auto" });
            var r = function (t) {
                if ("function" == typeof btoa) return btoa(t);
                throw new Error("Cannot use basic auth, btoa is not a function")
            };
            return this._auth(t, e, n, r)
        }, h.prototype.query = function (t) {
            return "string" != typeof t && (t = s(t)), t && this._query.push(t), this
        }, h.prototype.attach = function (t, e, n) {
            if (e) {
                if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(t, e, n || e.name)
            }
            return this
        }, h.prototype._getFormData = function () {
            return this._formData || (this._formData = new p.FormData), this._formData
        }, h.prototype.callback = function (t, e) {
            if (this._shouldRetry(t, e)) return this._retry();
            var n = this._callback;
            this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e)
        }, h.prototype.crossDomainError = function () {
            var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
        }, h.prototype.agent = function () {
            return console.warn("This is not supported in browser version of superagent"), this
        }, h.prototype.ca = h.prototype.agent, h.prototype.buffer = h.prototype.ca, h.prototype.write = function () {
            throw new Error("Streaming is not supported in browser version of superagent")
        }, h.prototype.pipe = h.prototype.write, h.prototype._isHost = function (t) {
            return t && "object" === i(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
        }, h.prototype.end = function (t) {
            this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || o, this._finalizeQueryString(), this._end()
        }, h.prototype._setUploadTimeout = function () {
            var t = this;
            this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function () {
                t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
            }, this._uploadTimeout))
        }, h.prototype._end = function () {
            if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
            var t = this;
            this.xhr = x.getXHR();
            var e = this.xhr, n = this._formData || this._data;
            this._setTimeouts(), e.onreadystatechange = function () {
                var n = e.readyState;
                if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === n) {
                    var r;
                    try {
                        r = e.status
                    } catch (t) {
                        r = 0
                    }
                    if (!r) {
                        if (t.timedout || t._aborted) return;
                        return t.crossDomainError()
                    }
                    t.emit("end")
                }
            };
            var r = function (e, n) {
                n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(t._uploadTimeoutTimer)), n.direction = e, t.emit("progress", n)
            };
            if (this.hasListeners("progress")) try {
                e.addEventListener("progress", r.bind(null, "download")), e.upload && e.upload.addEventListener("progress", r.bind(null, "upload"))
            } catch (t) {
            }
            e.upload && this._setUploadTimeout();
            try {
                this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
            } catch (t) {
                return this.callback(t)
            }
            if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
                var i = this._header["content-type"], o = this._serializer || x.serialize[i ? i.split(";")[0] : ""];
                !o && l(i) && (o = x.serialize["application/json"]), o && (n = o(n))
            }
            for (var s in this.header) null !== this.header[s] && Object.prototype.hasOwnProperty.call(this.header, s) && e.setRequestHeader(s, this.header[s]);
            this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 === n ? null : n)
        }, x.agent = function () {
            return new C
        }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (t) {
            C.prototype[t.toLowerCase()] = function (e, n) {
                var r = new x.Request(t, e);
                return this._setDefaults(r), n && r.end(n), r
            }
        }), C.prototype.del = C.prototype.delete, x.get = function (t, e, n) {
            var r = x("GET", t);
            return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
        }, x.head = function (t, e, n) {
            var r = x("HEAD", t);
            return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
        }, x.options = function (t, e, n) {
            var r = x("OPTIONS", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, x.del = d, x.delete = d, x.patch = function (t, e, n) {
            var r = x("PATCH", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, x.post = function (t, e, n) {
            var r = x("POST", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, x.put = function (t, e, n) {
            var r = x("PUT", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }
    }, function (t, e, n) {
        function r(t) {
            if (t) return i(t)
        }

        function i(t) {
            for (var e in r.prototype) t[e] = r.prototype[e];
            return t
        }

        t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
        }, r.prototype.once = function (t, e) {
            function n() {
                this.off(t, n), e.apply(this, arguments)
            }

            return n.fn = e, this.on(t, n), this
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
            for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === e || r.fn === e) {
                n.splice(i, 1);
                break
            }
            return 0 === n.length && delete this._callbacks["$" + t], this
        }, r.prototype.emit = function (t) {
            this._callbacks = this._callbacks || {};
            for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            if (n) {
                n = n.slice(0);
                for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e)
            }
            return this
        }, r.prototype.listeners = function (t) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
        }, r.prototype.hasListeners = function (t) {
            return !!this.listeners(t).length
        }
    }, function (t, e) {
        function n(t, e, n) {
            r(t, "", [], void 0);
            var i;
            for (i = 0 === c.length ? JSON.stringify(t, e, n) : JSON.stringify(t, a(e), n); 0 !== u.length;) {
                var o = u.pop();
                4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
            }
            return i
        }

        function r(t, e, n, i) {
            var o;
            if ("object" == typeof t && null !== t) {
                for (o = 0; o < n.length; o++) if (n[o] === t) {
                    var s = Object.getOwnPropertyDescriptor(i, e);
                    return void (void 0 !== s.get ? s.configurable ? (Object.defineProperty(i, e, { value: "[Circular]" }), u.push([i, e, t, s])) : c.push([t, e]) : (i[e] = "[Circular]", u.push([i, e, t])))
                }
                if (n.push(t), Array.isArray(t)) for (o = 0; o < t.length; o++) r(t[o], o, n, t); else {
                    var a = Object.keys(t);
                    for (o = 0; o < a.length; o++) {
                        var l = a[o];
                        r(t[l], l, n, t)
                    }
                }
                n.pop()
            }
        }

        function i(t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        }

        function o(t, e, n) {
            var r, i = s(t, "", [], void 0) || t;
            for (r = 0 === c.length ? JSON.stringify(i, e, n) : JSON.stringify(i, a(e), n); 0 !== u.length;) {
                var o = u.pop();
                4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
            }
            return r
        }

        function s(t, e, n, r) {
            var o;
            if ("object" == typeof t && null !== t) {
                for (o = 0; o < n.length; o++) if (n[o] === t) {
                    var a = Object.getOwnPropertyDescriptor(r, e);
                    return void (void 0 !== a.get ? a.configurable ? (Object.defineProperty(r, e, { value: "[Circular]" }), u.push([r, e, t, a])) : c.push([t, e]) : (r[e] = "[Circular]", u.push([r, e, t])))
                }
                if ("function" == typeof t.toJSON) return;
                if (n.push(t), Array.isArray(t)) for (o = 0; o < t.length; o++) s(t[o], o, n, t); else {
                    var l = {}, f = Object.keys(t).sort(i);
                    for (o = 0; o < f.length; o++) {
                        var h = f[o];
                        s(t[h], h, n, t), l[h] = t[h]
                    }
                    if (void 0 === r) return l;
                    u.push([r, e, t]), r[e] = l
                }
                n.pop()
            }
        }

        function a(t) {
            return t = void 0 !== t ? t : function (t, e) {
                return e
            }, function (e, n) {
                if (c.length > 0) for (var r = 0; r < c.length; r++) {
                    var i = c[r];
                    if (i[1] === e && i[0] === n) {
                        n = "[Circular]", c.splice(r, 1);
                        break
                    }
                }
                return t.call(this, e, n)
            }
        }

        t.exports = n, n.default = n, n.stable = o, n.stableStringify = o;
        var u = [], c = []
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        function i(t) {
            "@babel/helpers - typeof";
            return (i = "function" == typeof p.default && "symbol" === (0, h.default)(l.default) ? function (t) {
                return void 0 === t ? "undefined" : (0, h.default)(t)
            } : function (t) {
                return t && "function" == typeof p.default && t.constructor === p.default && t !== p.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, h.default)(t)
            })(t)
        }

        function o(t) {
            if (t) return s(t)
        }

        function s(t) {
            for (var e in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, e) && (t[e] = o.prototype[e]);
            return t
        }

        var a = n(2), u = r(a), c = n(35), l = r(c), f = n(28), h = r(f), d = n(29), p = r(d), v = n(80);
        t.exports = o, o.prototype.clearTimeout = function () {
            return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
        }, o.prototype.parse = function (t) {
            return this._parser = t, this
        }, o.prototype.responseType = function (t) {
            return this._responseType = t, this
        }, o.prototype.serialize = function (t) {
            return this._serializer = t, this
        }, o.prototype.timeout = function (t) {
            if (!t || "object" !== i(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;
            for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
                case "deadline":
                    this._timeout = t.deadline;
                    break;
                case "response":
                    this._responseTimeout = t.response;
                    break;
                case "upload":
                    this._uploadTimeout = t.upload;
                    break;
                default:
                    console.warn("Unknown timeout option", e)
            }
            return this
        }, o.prototype.retry = function (t, e) {
            return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
        };
        var _ = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        o.prototype._shouldRetry = function (t, e) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
            if (this._retryCallback) try {
                var n = this._retryCallback(t, e);
                if (!0 === n) return !0;
                if (!1 === n) return !1
            } catch (t) {
                console.error(t)
            }
            if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
            if (t) {
                if (t.code && _.includes(t.code)) return !0;
                if (t.timeout && "ECONNABORTED" === t.code) return !0;
                if (t.crossDomain) return !0
            }
            return !1
        }, o.prototype._retry = function () {
            return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
        }, o.prototype.then = function (t, e) {
            var n = this;
            if (!this._fullfilledPromise) {
                var r = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new u.default(function (t, e) {
                    r.on("abort", function () {
                        if (!(n._maxRetries && n._maxRetries > n._retries)) {
                            if (n.timedout && n.timedoutError) return void e(n.timedoutError);
                            var t = new Error("Aborted");
                            t.code = "ABORTED", t.status = n.status, t.method = n.method, t.url = n.url, e(t)
                        }
                    }), r.end(function (n, r) {
                        n ? e(n) : t(r)
                    })
                })
            }
            return this._fullfilledPromise.then(t, e)
        }, o.prototype.catch = function (t) {
            return this.then(void 0, t)
        }, o.prototype.use = function (t) {
            return t(this), this
        }, o.prototype.ok = function (t) {
            if ("function" != typeof t) throw new Error("Callback required");
            return this._okCallback = t, this
        }, o.prototype._isResponseOK = function (t) {
            return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
        }, o.prototype.get = function (t) {
            return this._header[t.toLowerCase()]
        }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function (t, e) {
            if (v(t)) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.set(n, t[n]);
                return this
            }
            return this._header[t.toLowerCase()] = e, this.header[t] = e, this
        }, o.prototype.unset = function (t) {
            return delete this._header[t.toLowerCase()], delete this.header[t], this
        }, o.prototype.field = function (t, e) {
            if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
            if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
            if (v(t)) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.field(n, t[n]);
                return this
            }
            if (Array.isArray(e)) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && this.field(t, e[r]);
                return this
            }
            if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof e && (e = String(e)), this._getFormData().append(t, e), this
        }, o.prototype.abort = function () {
            return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
        }, o.prototype._auth = function (t, e, n, r) {
            switch (n.type) {
                case "basic":
                    this.set("Authorization", "Basic ".concat(r("".concat(t, ":").concat(e))));
                    break;
                case "auto":
                    this.username = t, this.password = e;
                    break;
                case "bearer":
                    this.set("Authorization", "Bearer ".concat(t))
            }
            return this
        }, o.prototype.withCredentials = function (t) {
            return void 0 === t && (t = !0), this._withCredentials = t, this
        }, o.prototype.redirects = function (t) {
            return this._maxRedirects = t, this
        }, o.prototype.maxResponseSize = function (t) {
            if ("number" != typeof t) throw new TypeError("Invalid argument");
            return this._maxResponseSize = t, this
        }, o.prototype.toJSON = function () {
            return { method: this.method, url: this.url, data: this._data, headers: this._header }
        }, o.prototype.send = function (t) {
            var e = v(t), n = this._header["content-type"];
            if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
            if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {}); else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
            if (e && v(this._data)) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (this._data[r] = t[r]); else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === n ? this._data ? "".concat(this._data, "&").concat(t) : t : (this._data || "") + t) : this._data = t;
            return !e || this._isHost(t) ? this : (n || this.type("json"), this)
        }, o.prototype.sortQuery = function (t) {
            return this._sort = void 0 === t || t, this
        }, o.prototype._finalizeQueryString = function () {
            var t = this._query.join("&");
            if (t && (this.url += (this.url.includes("?") ? "&" : "?") + t), this._query.length = 0, this._sort) {
                var e = this.url.indexOf("?");
                if (e >= 0) {
                    var n = this.url.slice(e + 1).split("&");
                    "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.slice(0, e) + "?" + n.join("&")
                }
            }
        }, o.prototype._appendQueryString = function () {
            console.warn("Unsupported")
        }, o.prototype._timeoutError = function (t, e, n) {
            if (!this._aborted) {
                var r = new Error("".concat(t + e, "ms exceeded"));
                r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.timedoutError = r, this.abort(), this.callback(r)
            }
        }, o.prototype._setTimeouts = function () {
            var t = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function () {
                t._timeoutError("Timeout of ", t._timeout, "ETIME")
            }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
                t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
            }, this._responseTimeout))
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (t) return i(t)
        }

        function i(t) {
            for (var e in r.prototype) Object.prototype.hasOwnProperty.call(r.prototype, e) && (t[e] = r.prototype[e]);
            return t
        }

        var o = n(175);
        t.exports = r, r.prototype.get = function (t) {
            return this.header[t.toLowerCase()]
        }, r.prototype._setHeaderProperties = function (t) {
            var e = t["content-type"] || "";
            this.type = o.type(e);
            var n = o.params(e);
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (this[r] = n[r]);
            this.links = {};
            try {
                t.link && (this.links = o.parseLinks(t.link))
            } catch (t) {
            }
        }, r.prototype._setStatusProperties = function (t) {
            var e = t / 100 | 0;
            this.statusCode = t, this.status = this.statusCode, this.statusType = e, this.info = 1 === e, this.ok = 2 === e, this.redirect = 3 === e, this.clientError = 4 === e, this.serverError = 5 === e, this.error = (4 === e || 5 === e) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t
        }
    }, function (t, e, n) {
        "use strict";
        e.type = function (t) {
            return t.split(/ *; */).shift()
        }, e.params = function (t) {
            return t.split(/ *; */).reduce(function (t, e) {
                var n = e.split(/ *= */), r = n.shift(), i = n.shift();
                return r && i && (t[r] = i), t
            }, {})
        }, e.parseLinks = function (t) {
            return t.split(/ *, */).reduce(function (t, e) {
                var n = e.split(/ *; */), r = n[0].slice(1, -1);
                return t[n[1].split(/ *= */)[1].slice(1, -1)] = r, t
            }, {})
        }, e.cleanHeader = function (t, e) {
            return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && (delete t.authorization, delete t.cookie), t
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : { default: t }
        }

        function i(t) {
            return u(t) || a(t) || s(t) || o()
        }

        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return c(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? (0, _.default)(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
            }
        }

        function a(t) {
            if (void 0 !== p.default && (0, h.default)(Object(t))) return (0, _.default)(t)
        }

        function u(t) {
            if (Array.isArray(t)) return c(t)
        }

        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function l() {
            this._defaults = []
        }

        var f = n(79), h = r(f), d = n(29), p = r(d), v = n(177), _ = r(v);
        ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach(function (t) {
            l.prototype[t] = function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return this._defaults.push({ fn: t, args: n }), this
            }
        }), l.prototype._setDefaults = function (t) {
            this._defaults.forEach(function (e) {
                t[e.fn].apply(t, i(e.args))
            })
        }, t.exports = l
    }, function (t, e, n) {
        t.exports = { default: n(178), __esModule: !0 }
    }, function (t, e, n) {
        n(21), n(179), t.exports = n(1).Array.from
    }, function (t, e, n) {
        "use strict";
        var r = n(23), i = n(10), o = n(27), s = n(60), a = n(61), u = n(40), c = n(180), l = n(45);
        i(i.S + i.F * !n(66)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, n, i, f, h = o(t), d = "function" == typeof this ? this : Array, p = arguments.length,
                    v = p > 1 ? arguments[1] : void 0, _ = void 0 !== v, y = 0, m = l(h);
                if (_ && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && a(m)) for (e = u(h.length), n = new d(e); e > y; y++) c(n, y, _ ? v(h[y], y) : h[y]); else for (f = m.call(h), n = new d; !(i = f.next()).done; y++) c(n, y, _ ? s(f, v, [i.value, y], !0) : i.value);
                return n.length = y, n
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(7), i = n(25);
        t.exports = function (t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }])
});
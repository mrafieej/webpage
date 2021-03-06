/*! For license information please see 1.0c077c01.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    203: function(t, e, n) {
        var r;
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function o() {
                for (var t = [], e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    if (r) {
                        var i = typeof r;
                        if ("string" === i || "number" === i)
                            t.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var a = o.apply(null, r);
                            a && t.push(a)
                        } else if ("object" === i)
                            for (var c in r)
                                n.call(r, c) && r[c] && t.push(c)
                    }
                }
                return t.join(" ")
            }
            t.exports ? (o.default = o, t.exports = o) : void 0 === (r = function() {
                return o
            }.apply(e, [])) || (t.exports = r)
        }()
    },
    208: function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(56);
        e.a = function() {
            return Object(r.useContext)(o.a)
        }
    },
    223: function(t, e, n) {
        "use strict";
        var r = n(1),
            o = (n(510), n(511), n(82), n(90), n(778), n(779), n(0)),
            i = n.n(o),
            a = n(203),
            c = n.n(a),
            s = {
                plain: {
                    backgroundColor: "#2a2734",
                    color: "#9a86fd"
                },
                styles: [{
                    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                    style: {
                        color: "#6c6783"
                    }
                }, {
                    types: ["namespace"],
                    style: {
                        opacity: .7
                    }
                }, {
                    types: ["tag", "operator", "number"],
                    style: {
                        color: "#e09142"
                    }
                }, {
                    types: ["property", "function"],
                    style: {
                        color: "#9a86fd"
                    }
                }, {
                    types: ["tag-id", "selector", "atrule-id"],
                    style: {
                        color: "#eeebff"
                    }
                }, {
                    types: ["attr-name"],
                    style: {
                        color: "#c4b9fe"
                    }
                }, {
                    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
                    style: {
                        color: "#ffcc99"
                    }
                }, {
                    types: ["deleted"],
                    style: {
                        textDecorationLine: "line-through"
                    }
                }, {
                    types: ["inserted"],
                    style: {
                        textDecorationLine: "underline"
                    }
                }, {
                    types: ["italic"],
                    style: {
                        fontStyle: "italic"
                    }
                }, {
                    types: ["important", "bold"],
                    style: {
                        fontWeight: "bold"
                    }
                }, {
                    types: ["important"],
                    style: {
                        color: "#c4b9fe"
                    }
                }]
            },
            l = {
                Prism: n(58).a,
                theme: s
            };
        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        function f() {
            return (f = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }).apply(this, arguments)
        }
        var p = /\r\n|\r|\n/,
            y = function(t) {
                0 === t.length ? t.push({
                    types: ["plain"],
                    content: "",
                    empty: !0
                }) : 1 === t.length && "" === t[0].content && (t[0].empty = !0)
            },
            h = function(t, e) {
                var n = t.length;
                return n > 0 && t[n - 1] === e ? t : t.concat(e)
            },
            d = function(t, e) {
                var n = t.plain,
                    r = Object.create(null),
                    o = t.styles.reduce((function(t, n) {
                        var r = n.languages,
                            o = n.style;
                        return r && !r.includes(e) || n.types.forEach((function(e) {
                            var n = f({}, t[e], o);
                            t[e] = n
                        })), t
                    }), r);
                return o.root = n, o.plain = f({}, n, {
                    backgroundColor: null
                }), o
            };
        function g(t, e) {
            var n = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && -1 === e.indexOf(r) && (n[r] = t[r]);
            return n
        }
        var v = function(t) {
                function e() {
                    for (var e = this, n = [], r = arguments.length; r--;)
                        n[r] = arguments[r];
                    t.apply(this, n), u(this, "getThemeDict", (function(t) {
                        if (void 0 !== e.themeDict && t.theme === e.prevTheme && t.language === e.prevLanguage)
                            return e.themeDict;
                        e.prevTheme = t.theme, e.prevLanguage = t.language;
                        var n = t.theme ? d(t.theme, t.language) : void 0;
                        return e.themeDict = n
                    })), u(this, "getLineProps", (function(t) {
                        var n = t.key,
                            r = t.className,
                            o = t.style,
                            i = f({}, g(t, ["key", "className", "style", "line"]), {
                                className: "token-line",
                                style: void 0,
                                key: void 0
                            }),
                            a = e.getThemeDict(e.props);
                        return void 0 !== a && (i.style = a.plain), void 0 !== o && (i.style = void 0 !== i.style ? f({}, i.style, o) : o), void 0 !== n && (i.key = n), r && (i.className += " " + r), i
                    })), u(this, "getStyleForToken", (function(t) {
                        var n = t.types,
                            r = t.empty,
                            o = n.length,
                            i = e.getThemeDict(e.props);
                        if (void 0 !== i) {
                            if (1 === o && "plain" === n[0])
                                return r ? {
                                    display: "inline-block"
                                } : void 0;
                            if (1 === o && !r)
                                return i[n[0]];
                            var a = r ? {
                                    display: "inline-block"
                                } : {},
                                c = n.map((function(t) {
                                    return i[t]
                                }));
                            return Object.assign.apply(Object, [a].concat(c))
                        }
                    })), u(this, "getTokenProps", (function(t) {
                        var n = t.key,
                            r = t.className,
                            o = t.style,
                            i = t.token,
                            a = f({}, g(t, ["key", "className", "style", "token"]), {
                                className: "token " + i.types.join(" "),
                                children: i.content,
                                style: e.getStyleForToken(i),
                                key: void 0
                            });
                        return void 0 !== o && (a.style = void 0 !== a.style ? f({}, a.style, o) : o), void 0 !== n && (a.key = n), r && (a.className += " " + r), a
                    }))
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function() {
                    var t = this.props,
                        e = t.Prism,
                        n = t.language,
                        r = t.code,
                        o = t.children,
                        i = this.getThemeDict(this.props),
                        a = e.languages[n];
                    return o({
                        tokens: function(t) {
                            for (var e = [[]], n = [t], r = [0], o = [t.length], i = 0, a = 0, c = [], s = [c]; a > -1;) {
                                for (; (i = r[a]++) < o[a];) {
                                    var l = void 0,
                                        u = e[a],
                                        f = n[a][i];
                                    if ("string" == typeof f ? (u = a > 0 ? u : ["plain"], l = f) : (u = h(u, f.type), f.alias && (u = h(u, f.alias)), l = f.content), "string" == typeof l) {
                                        var d = l.split(p),
                                            g = d.length;
                                        c.push({
                                            types: u,
                                            content: d[0]
                                        });
                                        for (var v = 1; v < g; v++)
                                            y(c), s.push(c = []), c.push({
                                                types: u,
                                                content: d[v]
                                            })
                                    } else
                                        a++, e.push(u), n.push(l), r.push(0), o.push(l.length)
                                }
                                a--, e.pop(), n.pop(), r.pop(), o.pop()
                            }
                            return y(c), s
                        }(void 0 !== a ? e.tokenize(r, a, n) : [r]),
                        className: "prism-code language-" + n,
                        style: void 0 !== i ? i.root : {},
                        getLineProps: this.getLineProps,
                        getTokenProps: this.getTokenProps
                    })
                }, e
            }(o.Component),
            m = {
                plain: {
                    color: "#bfc7d5",
                    backgroundColor: "#292d3e"
                },
                styles: [{
                    types: ["comment"],
                    style: {
                        color: "rgb(105, 112, 152)",
                        fontStyle: "italic"
                    }
                }, {
                    types: ["string", "inserted"],
                    style: {
                        color: "rgb(195, 232, 141)"
                    }
                }, {
                    types: ["number"],
                    style: {
                        color: "rgb(247, 140, 108)"
                    }
                }, {
                    types: ["builtin", "char", "constant", "function"],
                    style: {
                        color: "rgb(130, 170, 255)"
                    }
                }, {
                    types: ["punctuation", "selector"],
                    style: {
                        color: "rgb(199, 146, 234)"
                    }
                }, {
                    types: ["variable"],
                    style: {
                        color: "rgb(191, 199, 213)"
                    }
                }, {
                    types: ["class-name", "attr-name"],
                    style: {
                        color: "rgb(255, 203, 107)"
                    }
                }, {
                    types: ["tag", "deleted"],
                    style: {
                        color: "rgb(255, 85, 114)"
                    }
                }, {
                    types: ["operator"],
                    style: {
                        color: "rgb(137, 221, 255)"
                    }
                }, {
                    types: ["boolean"],
                    style: {
                        color: "rgb(255, 88, 116)"
                    }
                }, {
                    types: ["keyword"],
                    style: {
                        fontStyle: "italic"
                    }
                }, {
                    types: ["doctype"],
                    style: {
                        color: "rgb(199, 146, 234)",
                        fontStyle: "italic"
                    }
                }, {
                    types: ["namespace"],
                    style: {
                        color: "rgb(178, 204, 214)"
                    }
                }, {
                    types: ["url"],
                    style: {
                        color: "rgb(221, 221, 221)"
                    }
                }]
            },
            b = n(782),
            k = n.n(b),
            x = n(783),
            E = n.n(x),
            j = n(208),
            w = n(276),
            T = n(170),
            S = n.n(T),
            O = /{([\d,-]+)}/,
            _ = function(t) {
                void 0 === t && (t = ["js", "jsBlock", "jsx", "python", "html"]);
                var e = {
                        js: {
                            start: "\\/\\/",
                            end: ""
                        },
                        jsBlock: {
                            start: "\\/\\*",
                            end: "\\*\\/"
                        },
                        jsx: {
                            start: "\\{\\s*\\/\\*",
                            end: "\\*\\/\\s*\\}"
                        },
                        python: {
                            start: "#",
                            end: ""
                        },
                        html: {
                            start: "\x3c!--",
                            end: "--\x3e"
                        }
                    },
                    n = ["highlight-next-line", "highlight-start", "highlight-end"].join("|"),
                    r = t.map((function(t) {
                        return "(?:" + e[t].start + "\\s*(" + n + ")\\s*" + e[t].end + ")"
                    })).join("|");
                return new RegExp("^\\s*(?:" + r + ")\\s*$")
            },
            A = /title=".*"/;
        e.a = function(t) {
            var e = t.children,
                n = t.className,
                a = t.metastring,
                s = Object(j.a)().siteConfig.themeConfig.prism,
                u = void 0 === s ? {} : s,
                f = Object(o.useState)(!1),
                p = f[0],
                y = f[1],
                h = Object(o.useState)(!1),
                d = h[0],
                g = h[1];
            Object(o.useEffect)((function() {
                g(!0)
            }), []);
            var b = Object(o.useRef)(null),
                x = Object(o.useRef)(null),
                T = [],
                C = "",
                P = Object(w.a)().isDarkTheme,
                L = u.theme || m,
                N = u.darkTheme || L,
                R = P ? N : L;
            if (a && O.test(a)) {
                var F = a.match(O)[1];
                T = E.a.parse(F).filter((function(t) {
                    return t > 0
                }))
            }
            a && A.test(a) && (C = a.match(A)[0].split("title=")[1].replace(/"+/g, "")), Object(o.useEffect)((function() {
                var t;
                return x.current && (t = new k.a(x.current, {
                    target: function() {
                        return b.current
                    }
                })), function() {
                    t && t.destroy()
                }
            }), [x.current, b.current]);
            var D = n && n.replace(/language-/, "");
            !D && u.defaultLanguage && (D = u.defaultLanguage);
            var M = e.replace(/\n$/, "");
            if (0 === T.length && void 0 !== D) {
                for (var B, I = "", H = function(t) {
                        switch (t) {
                        case "js":
                        case "javascript":
                        case "ts":
                        case "typescript":
                            return _(["js", "jsBlock"]);
                        case "jsx":
                        case "tsx":
                            return _(["js", "jsBlock", "jsx"]);
                        case "html":
                            return _(["js", "jsBlock", "html"]);
                        case "python":
                        case "py":
                            return _(["python"]);
                        default:
                            return _()
                        }
                    }(D), q = e.replace(/\n$/, "").split("\n"), $ = 0; $ < q.length;) {
                    var z = $ + 1,
                        W = q[$].match(H);
                    if (null !== W) {
                        switch (W.slice(1).reduce((function(t, e) {
                            return t || e
                        }), void 0)) {
                        case "highlight-next-line":
                            I += z + ",";
                            break;
                        case "highlight-start":
                            B = z;
                            break;
                        case "highlight-end":
                            I += B + "-" + (z - 1) + ","
                        }
                        q.splice($, 1)
                    } else
                        $ += 1
                }
                T = E.a.parse(I), M = q.join("\n")
            }
            var J = function() {
                window.getSelection().empty(), y(!0), setTimeout((function() {
                    return y(!1)
                }), 2e3)
            };
            return i.a.createElement(v, Object(r.a)({}, l, {
                key: d,
                theme: R,
                code: M,
                language: D
            }), (function(t) {
                var e,
                    n,
                    o = t.className,
                    a = t.style,
                    s = t.tokens,
                    l = t.getLineProps,
                    u = t.getTokenProps;
                return i.a.createElement(i.a.Fragment, null, C && i.a.createElement("div", {
                    style: a,
                    className: S.a.codeBlockTitle
                }, C), i.a.createElement("div", {
                    className: S.a.codeBlockContent
                }, i.a.createElement("button", {
                    ref: x,
                    type: "button",
                    "aria-label": "Copy code to clipboard",
                    className: c()(S.a.copyButton, (e = {}, e[S.a.copyButtonWithTitle] = C, e)),
                    onClick: J
                }, p ? "Copied" : "Copy"), i.a.createElement("div", {
                    tabIndex: "0",
                    className: c()(o, S.a.codeBlock, (n = {}, n[S.a.codeBlockWithTitle] = C, n))
                }, i.a.createElement("div", {
                    ref: b,
                    className: S.a.codeBlockLines,
                    style: a
                }, s.map((function(t, e) {
                    1 === t.length && "" === t[0].content && (t[0].content = "\n");
                    var n = l({
                        line: t,
                        key: e
                    });
                    return T.includes(e + 1) && (n.className = n.className + " docusaurus-highlight-code-line"), i.a.createElement("div", Object(r.a)({
                        key: e
                    }, n), t.map((function(t, e) {
                        return i.a.createElement("span", Object(r.a)({
                            key: e
                        }, u({
                            token: t,
                            key: e
                        })))
                    })))
                }))))))
            }))
        }
    },
    249: function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n.n(r).a.createContext({
                isDarkTheme: !1,
                setLightTheme: function() {},
                setDarkTheme: function() {}
            });
        e.a = o
    },
    250: function(t, e, n) {
        var r = n(81),
            o = n(55).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    },
    272: function(t, e, n) {
        var r = n(79),
            o = n(28);
        t.exports = function(t, e, n) {
            if (r(e))
                throw TypeError("String#" + n + " doesn't accept regex!");
            return String(o(t))
        }
    },
    273: function(t, e, n) {
        var r = n(2)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (n) {
                try {
                    return e[r] = !1, !"/./"[t](e)
                } catch (o) {}
            }
            return !0
        }
    },
    274: function(t, e, n) {
        var r = n(52),
            o = n(53),
            i = n(27),
            a = n(78),
            c = n(26),
            s = n(80),
            l = Object.getOwnPropertyDescriptor;
        e.f = n(10) ? l : function(t, e) {
            if (t = i(t), e = a(e, !0), s)
                try {
                    return l(t, e)
                } catch (n) {}
            if (c(t, e))
                return o(!r.f.call(t, e), t[e])
        }
    },
    276: function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(249);
        e.a = function() {
            return Object(r.useContext)(o.a)
        }
    },
    510: function(t, e, n) {
        "use strict";
        var r = n(13),
            o = n(86)(!0);
        r(r.P, "Array", {
            includes: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(85)("includes")
    },
    511: function(t, e, n) {
        "use strict";
        var r = n(13),
            o = n(272);
        r(r.P + r.F * n(273)("includes"), "String", {
            includes: function(t) {
                return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    778: function(t, e, n) {
        "use strict";
        var r = n(8),
            o = n(29),
            i = n(61),
            a = n(62);
        n(63)("match", 1, (function(t, e, n, c) {
            return [function(n) {
                var r = t(this),
                    o = null == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
            }, function(t) {
                var e = c(n, t, this);
                if (e.done)
                    return e.value;
                var s = r(t),
                    l = String(this);
                if (!s.global)
                    return a(s, l);
                var u = s.unicode;
                s.lastIndex = 0;
                for (var f, p = [], y = 0; null !== (f = a(s, l));) {
                    var h = String(f[0]);
                    p[y] = h, "" === h && (s.lastIndex = i(l, o(s.lastIndex), u)), y++
                }
                return 0 === y ? null : p
            }]
        }))
    },
    779: function(t, e, n) {
        var r = n(5),
            o = n(780),
            i = n(25).f,
            a = n(250).f,
            c = n(79),
            s = n(83),
            l = r.RegExp,
            u = l,
            f = l.prototype,
            p = /a/g,
            y = /a/g,
            h = new l(p) !== p;
        if (n(10) && (!h || n(14)((function() {
            return y[n(2)("match")] = !1, l(p) != p || l(y) == y || "/a/i" != l(p, "i")
        })))) {
            l = function(t, e) {
                var n = this instanceof l,
                    r = c(t),
                    i = void 0 === e;
                return !n && r && t.constructor === l && i ? t : o(h ? new u(r && !i ? t.source : t, e) : u((r = t instanceof l) ? t.source : t, r && i ? s.call(t) : e), n ? this : f, l)
            };
            for (var d = function(t) {
                    t in l || i(l, t, {
                        configurable: !0,
                        get: function() {
                            return u[t]
                        },
                        set: function(e) {
                            u[t] = e
                        }
                    })
                }, g = a(u), v = 0; g.length > v;)
                d(g[v++]);
            f.constructor = l, l.prototype = f, n(16)(r, "RegExp", l)
        }
        n(88)("RegExp")
    },
    780: function(t, e, n) {
        var r = n(15),
            o = n(781).set;
        t.exports = function(t, e, n) {
            var i,
                a = e.constructor;
            return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(t, i), t
        }
    },
    781: function(t, e, n) {
        var r = n(15),
            o = n(8),
            i = function(t, e) {
                if (o(t), !r(e) && null !== e)
                    throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                try {
                    (r = n(31)(Function.call, n(274).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (o) {
                    e = !0
                }
                return function(t, n) {
                    return i(t, n), e ? t.__proto__ = n : r(t, n), t
                }
            }({}, !1) : void 0),
            check: i
        }
    },
    782: function(t, e, n) {
        var r;
        r = function() {
            return function(t) {
                var e = {};
                function n(r) {
                    if (e[r])
                        return e[r].exports;
                    var o = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e)
                        return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule)
                        return t;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                        for (var o in t)
                            n.d(r, o, function(e) {
                                return t[e]
                            }.bind(null, o));
                    return r
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 6)
            }([function(t, e) {
                t.exports = function(t) {
                    var e;
                    if ("SELECT" === t.nodeName)
                        t.focus(), e = t.value;
                    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                        var n = t.hasAttribute("readonly");
                        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                    } else {
                        t.hasAttribute("contenteditable") && t.focus();
                        var r = window.getSelection(),
                            o = document.createRange();
                        o.selectNodeContents(t), r.removeAllRanges(), r.addRange(o), e = r.toString()
                    }
                    return e
                }
            }, function(t, e) {
                function n() {}
                n.prototype = {
                    on: function(t, e, n) {
                        var r = this.e || (this.e = {});
                        return (r[t] || (r[t] = [])).push({
                            fn: e,
                            ctx: n
                        }), this
                    },
                    once: function(t, e, n) {
                        var r = this;
                        function o() {
                            r.off(t, o), e.apply(n, arguments)
                        }
                        return o._ = e, this.on(t, o, n)
                    },
                    emit: function(t) {
                        for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++)
                            n[r].fn.apply(n[r].ctx, e);
                        return this
                    },
                    off: function(t, e) {
                        var n = this.e || (this.e = {}),
                            r = n[t],
                            o = [];
                        if (r && e)
                            for (var i = 0, a = r.length; i < a; i++)
                                r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                        return o.length ? n[t] = o : delete n[t], this
                    }
                }, t.exports = n, t.exports.TinyEmitter = n
            }, function(t, e, n) {
                var r = n(3),
                    o = n(4);
                t.exports = function(t, e, n) {
                    if (!t && !e && !n)
                        throw new Error("Missing required arguments");
                    if (!r.string(e))
                        throw new TypeError("Second argument must be a String");
                    if (!r.fn(n))
                        throw new TypeError("Third argument must be a Function");
                    if (r.node(t))
                        return function(t, e, n) {
                            return t.addEventListener(e, n), {
                                destroy: function() {
                                    t.removeEventListener(e, n)
                                }
                            }
                        }(t, e, n);
                    if (r.nodeList(t))
                        return function(t, e, n) {
                            return Array.prototype.forEach.call(t, (function(t) {
                                t.addEventListener(e, n)
                            })), {
                                destroy: function() {
                                    Array.prototype.forEach.call(t, (function(t) {
                                        t.removeEventListener(e, n)
                                    }))
                                }
                            }
                        }(t, e, n);
                    if (r.string(t))
                        return function(t, e, n) {
                            return o(document.body, t, e, n)
                        }(t, e, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            }, function(t, e) {
                e.node = function(t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                }, e.nodeList = function(t) {
                    var n = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
                }, e.string = function(t) {
                    return "string" == typeof t || t instanceof String
                }, e.fn = function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
            }, function(t, e, n) {
                var r = n(5);
                function o(t, e, n, r, o) {
                    var a = i.apply(this, arguments);
                    return t.addEventListener(n, a, o), {
                        destroy: function() {
                            t.removeEventListener(n, a, o)
                        }
                    }
                }
                function i(t, e, n, o) {
                    return function(n) {
                        n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
                    }
                }
                t.exports = function(t, e, n, r, i) {
                    return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                        return o(t, e, n, r, i)
                    })))
                }
            }, function(t, e) {
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var n = Element.prototype;
                    n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
                }
                t.exports = function(t, e) {
                    for (; t && 9 !== t.nodeType;) {
                        if ("function" == typeof t.matches && t.matches(e))
                            return t;
                        t = t.parentNode
                    }
                }
            }, function(t, e, n) {
                "use strict";
                n.r(e);
                var r = n(0),
                    o = n.n(r),
                    i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    c = function() {
                        function t(e) {
                            !function(t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.resolveOptions(e), this.initSelection()
                        }
                        return a(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var t = this,
                                    e = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = o()(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = o()(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (e) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function(t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = t, "copy" !== this._action && "cut" !== this._action)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), t
                    }(),
                    s = n(1),
                    l = n.n(s),
                    u = n(2),
                    f = n.n(u),
                    p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    y = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    h = function(t) {
                        function e(t, n) {
                            !function(t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var r = function(t, e) {
                                if (!t)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" != typeof e && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return r.resolveOptions(n), r.listenClick(t), r
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), y(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === p(t.container) ? t.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(t) {
                                var e = this;
                                this.listener = f()(t, "click", (function(t) {
                                    return e.onClick(t)
                                }))
                            }
                        }, {
                            key: "onClick",
                            value: function(t) {
                                var e = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c({
                                    action: this.action(e),
                                    target: this.target(e),
                                    text: this.text(e),
                                    container: this.container,
                                    trigger: e,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(t) {
                                return d("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(t) {
                                var e = d("target", t);
                                if (e)
                                    return document.querySelector(e)
                            }
                        }, {
                            key: "defaultText",
                            value: function(t) {
                                return d("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    e = "string" == typeof t ? [t] : t,
                                    n = !!document.queryCommandSupported;
                                return e.forEach((function(t) {
                                    n = n && !!document.queryCommandSupported(t)
                                })), n
                            }
                        }]), e
                    }(l.a);
                function d(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n))
                        return e.getAttribute(n)
                }
                e.default = h
            }]).default
        }, t.exports = r()
    },
    783: function(t, e) {
        t.exports.parse = function(t) {
            var e = t.split(",").map((function(t) {
                return function(t) {
                    if (/^-?\d+$/.test(t))
                        return parseInt(t, 10);
                    var e;
                    if (e = t.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)) {
                        var n = e[1],
                            r = e[2],
                            o = e[3];
                        if (n && o) {
                            var i = [],
                                a = (n = parseInt(n)) < (o = parseInt(o)) ? 1 : -1;
                            "-" != r && ".." != r && "\u2025" != r || (o += a);
                            for (var c = n; c != o; c += a)
                                i.push(c);
                            return i
                        }
                    }
                    return []
                }(t)
            }));
            return 0 === e.length ? [] : 1 === e.length ? Array.isArray(e[0]) ? e[0] : e : e.reduce((function(t, e) {
                return Array.isArray(t) || (t = [t]), Array.isArray(e) || (e = [e]), t.concat(e)
            }))
        }
    }
}]);


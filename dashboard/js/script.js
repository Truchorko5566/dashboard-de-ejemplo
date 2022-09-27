const twind = function (a) { "use strict"; function b(a, b, c) { return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c, a } function c(a) { for (var c = 1; c < arguments.length; c++) { var d = null != arguments[c] ? arguments[c] : {}, e = Object.keys(d); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(d).filter(function (a) { return Object.getOwnPropertyDescriptor(d, a).enumerable }))), e.forEach(function (c) { b(a, c, d[c]) }) } return a } function d(a, b) { if (null == a) return {}; var c, d, e = function (a, b) { if (null == a) return {}; var c, d, e = {}, f = Object.keys(a); for (d = 0; d < f.length; d++)c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]); return e }(a, b); if (Object.getOwnPropertySymbols) { var f = Object.getOwnPropertySymbols(a); for (d = 0; d < f.length; d++)c = f[d], !(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c]) } return e } const e = new Map(); function f(a, b) { return e.set(a, b), a } const g = "undefined" != typeof CSS && CSS.escape || (a => a.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")); function h(a) { for (var b = 9, c = a.length; c--;)b = Math.imul(b ^ a.charCodeAt(c), 1597334677); return "#" + ((b ^ b >>> 9) >>> 0).toString(36) } function i(a, b = "@media ") { return b + j(a).map(a => ("string" == typeof a && (a = { min: a }), a.raw || Object.keys(a).map(b => `(${b}-width:${a[b]})`).join(" and "))).join(",") } function j(a = []) { return Array.isArray(a) ? a : null == a ? [] : [a] } function k(a) { return a } function l() { } function m(a) { return [...a.v, (a.i ? "!" : "") + a.n].join(":") } const n = { d: 0, b: 134217728, c: 268435456, s: 671088640, u: 805306368, o: 939524096 }; function o(a, b) { return a & ~n.o | b } function p(a) { var b; return (null === (b = a.match(/[-=:;]/g)) || void 0 === b ? void 0 : b.length) || 0 } function q(a) { return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(a) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(p(a), 15) << 18 } const r = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire",]; function s(a) { return 1 << ~(/:([a-z-]+)/.test(a) && ~r.indexOf(RegExp.$1.slice(2, 7)) || -18) } function t(a) { return "-" == a[0] ? 0 : p(a) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(a) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1 } function u({ n: a, i: b, v: c = [] }, d, e, f) { for (const g of (a && (a = m({ n: a, i: b, v: c })), f = [...j(f)], c)) { const h = d.theme("screens", g), k = h && i(h) || d.v(g); f.push(k), e |= h ? 67108864 | q(k) : "dark" == g ? 1073741824 : "@" == k[0] ? q(k) : s(k) } return { n: a, p: e, r: f, i: b } } function v(a) { if (a.d) { const b = [], c = w(a.r.reduce((a, c) => "@" == c[0] ? (b.push(c), a) : c ? y(a, c) : a, "&"), b => x(b, a.n ? "." + g(a.n) : "")); return c && b.push(c.replace(/:merge\((.+?)\)/g, "$1")), b.reduceRight((a, b) => b + "{" + a + "}", a.d) } } function w(a, b) { return a.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (a, c, d) => b(c) + d) } function x(a, b) { return a.replace(/&/g, b) } function y(a, b) { return w(a, a => w(b, b => { const c = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(b); if (c) { const d = a.indexOf(c[1]); return ~d ? a.slice(0, d) + c[0] + a.slice(d + c[1].length) : x(a, b) } return x(b, a) })) } function z(a, b, c, d) { return f(a, (a, e) => { const { n: f, p: g, r: h, i: i } = u(a, e, b); return c && M(f, b, c, e, g, h, i, d) }) } function A(a, b = ",") { return a.map(m).join(b) } function B(a, b) { if ("(" != a[a.length - 1]) { const c = []; let d = !1, e = !1, f = ""; for (let g of a) if (!("(" == g || /[~@]$/.test(g))) { if ("!" == g[0] && (g = g.slice(1), d = !d), g.endsWith(":")) { c["dark:" == g ? "unshift" : "push"](g.slice(0, -1)); continue } "-" == g[0] && (g = g.slice(1), e = !e), g.endsWith("-") && (g = g.slice(0, -1)), g && "&" != g && (f += (f && "-") + g) } f && (e && (f = "-" + f), b[0].push({ n: f, v: c.filter(C), i: d })) } } function C(a, b, c) { return c.indexOf(a) == b } function D(a) { return a.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ") } const E = new Map(); function F(a) { let b = E.get(a); if (!b) { a = D(a); const c = [], d = [[]]; let e = 0, f = 0, g = 0; const i = (b, f = 0) => { e != g && (c.push(a.slice(e, g + f)), b && B(c, d)), e = g + 1 }; for (; g < a.length; g++) { const j = a[g]; if (f) "\\" != a[g - 1] && (f += +("[" == j) || -("]" == j)); else if ("[" == j) f += 1; else if ("(" == j) i(), c.push(j); else if (":" == j) ":" != a[g + 1] && i(!1, 1); else if (/[\s,)]/.test(j)) { i(!0); let k = c.lastIndexOf("("); if (")" == j) { const l = c[k - 1]; if (/[~@]$/.test(l)) { const m = d.shift(); c.length = k, B([...c, "#"], d); const { v: o } = d[0].pop(); for (const p of m) p.v.splice(+("dark" == p.v[0]) - +("dark" == o[0]), o.length); B([...c, z(l.length > 1 ? l.slice(0, -1) + h(JSON.stringify([l, m])) : l + "(" + A(m) + ")", n.s, m, /@$/.test(l)),], d) } k = c.lastIndexOf("(", k - 1) } c.length = k + 1 } else /[~@]/.test(j) && "(" == a[g + 1] && d.unshift([]) } i(!0), E.set(a, b = d[0]) } return b } const G = new Intl.Collator("en", { numeric: !0 }); function H(a, b) { for (var c = 0, d = a.length; c < d;) { const e = d + c >> 1; 0 >= I(a[e], b) ? c = e + 1 : d = e } return d } function I(a, b) { const c = a.p & n.o; return c == (b.p & n.o) && (c == n.b || c == n.o) ? 0 : a.p - b.p || a.o - b.o || G.compare(a.n, b.n) } function J(a, b) { const d = []; let e; for (const f of a) f.d && f.n ? (null == e ? void 0 : e.p) == f.p && "" + e.r == "" + f.r ? (e.c = [e.c, f.c].filter(Boolean).join(" "), e.d = e.d + ";" + f.d) : d.push(e = c({}, f, { n: f.n && b })) : d.push(c({}, f, { n: f.n && b })); return d } function K(a, b, c = n.u, d, e) { const f = []; for (const g of a) for (const h of L(g, b, c, d, e)) f.splice(H(f, h), 0, h); return f } function L(a, b, d, f, g) { var h; a = c({}, a, { i: a.i || g }); const i = function (a, b) { const c = e.get(a.n); return c ? c(a, b) : b.r(a.n, "dark" == a.v[0]) }(a, b); return i ? "string" == typeof i ? ({ r: f, p: d } = u(a, b, d, f), J(K(F(i), b, d, f, a.i), a.n)) : Array.isArray(i) ? i.map(a => c({ o: 0 }, a, { r: [...j(f), ...j(a.r)], p: o(d, null !== (h = a.p) && void 0 !== h ? h : d) })) : P(i, a, b, d, f) : [{ c: m(a), p: 0, o: 0, r: [] }] } function M(a, b, d, e, f, g, h, i) { return J((i ? d.flatMap(a => K([a], e, f, g, h)) : K(d, e, f, g, h)).map(a => a.p & n.o && (a.n || b == n.b) ? c({}, a, { p: o(a.p, b), o: 0 }) : a), a) } function N(a, b) { return Math.round(parseInt(a, 16) * b) } function O(a, b = {}) { if ("function" == typeof a) return a(b); const { opacityValue: c = "1", opacityVariable: d } = b, e = d ? `var(${d})` : c; if ("#" == a[0] && (4 == a.length || 7 == a.length)) { const f = (a.length - 1) / 3, g = [17, 1, .062272][f - 1]; return `rgba(${[N(a.substr(1, f), g), N(a.substr(1 + f, f), g), N(a.substr(1 + 2 * f, f), g), e,]})` } return "1" == e ? a : "0" == e ? "#0000" : a } function P(a, b, c, d, e = []) { return Q(a, u(b, c, d, e), c) } function Q(a, { n: b, p: c, r: d = [], i: e }, f) { const g = []; let k = "", l = 0, m = 0; for (let p in a || {}) { const r = a[p]; if ("@" == p[0]) { if (!r) continue; if ("a" == p[1]) { g.push(...M(b, c, F("" + r), f, c, d, e, !0)); continue } if ("l" == p[1]) { for (const s of j(r)) g.push(...Q(s, { n: b, p: o(c, n[p[7]]), r: d, i: e }, f)); continue } if ("i" == p[1]) { g.push(...j(r).map(a => ({ p: -1, o: 0, r: [], d: p + " " + a }))); continue } if ("k" == p[1]) { g.push({ p: n.d, o: 0, r: [p], d: Q(r, { p: n.d }, f).map(v).join("") }); continue } if ("f" == p[1]) { g.push(...j(r).map(a => ({ p: n.d, o: 0, r: [p], d: Q(a, { p: n.d }, f).map(v).join("") }))); continue } } if ("object" != typeof r || Array.isArray(r)) "label" == p && r ? b = r + h(JSON.stringify([c, e, a])) : (r || 0 === r) && (m += 1, l = Math.max(l, t(p = p.replace(/[A-Z]/g, a => "-" + a.toLowerCase()))), k += (k ? ";" : "") + j(r).map(a => f.s(p, R("" + a, f) + (e ? " !important" : ""))).join(";")); else if ("@" == p[0] || p.includes("&")) { let u = c; "@" == p[0] && (u |= q(p = p.replace(/\bscreen\(([^)]+)\)/g, (a, b) => { const c = f.theme("screens", b); return c ? (u |= 67108864, i(c, "")) : a }))), g.push(...Q(r, { n: b, p: u, r: [...d, p], i: e }, f)) } else g.push(...Q(r, { p: c, r: [p] }, f)) } return g.unshift({ n: b, p: c, o: Math.max(0, 15 - m) + 1.5 * Math.min(l || 15, 15), r: d, d: k }), g.sort(I) } function R(a, b) { return a.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (a, c, d, e, f) => { const g = b.theme(d, f); return "function" == typeof g && /color|fill|stroke/i.test(d) ? O(g) : g }) } function S(a, b, c) { return b.reduce((b, d, e) => b + c(d) + a[e + 1], a[0]) } function T(a, b) { return Array.isArray(a) ? V(S(a, b, a => null != a && "boolean" != typeof a ? a : "")) : "string" == typeof a ? V(a) : [a] } const U = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g; function V(a) { a = D(a); const b = [{}], c = [b[0]], d = []; let e; for (; e = U.exec(a);)e[4] && (b.shift(), d.shift()), e[3] ? (d.unshift(e[3]), b.unshift({}), c.push(d.reduce((a, b) => ({ [b]: a }), b[0]))) : e[4] || (b[0][e[1]] && (b.unshift({}), c.push(d.reduce((a, b) => ({ [b]: a }), b[0]))), b[0][e[1]] = e[2]); return c } function W(a, ...b) { var c; const d = T(a, b), e = ((null === (c = d.find(a => a.label)) || void 0 === c ? void 0 : c.label) || "css") + h(JSON.stringify(d)); return f(e, (a, b) => J(d.flatMap(c => P(c, a, b, n.o)), e)) } const X = new Proxy(function a(a, b) { return Y("animation", a, b) }, { get(a, b) { return b in a ? a[b] : function (a, c) { return Y(b, a, c) } } }); function Y(a, b, d) { return { toString() { return W({ label: a, "@layer components": c({}, "object" == typeof b ? b : { animation: b }, { animationName: "" + d }) }) } } } function Z(a, b) { return a != b && "" + a.split(" ").sort() != "" + b.split(" ").sort() } function $(a, b = []) { const c = {}; for (const d in a) { const e = a[d]; let f = [...b, d]; c[f.join("-")] = e, "DEFAULT" == d && (f = b, c[b.join("-")] = e), "object" == typeof e && Object.assign(c, $(e, f)) } return c } function _(a, b, c, d, e, f) { for (const g of b) { let h = c.get(g); h || c.set(g, h = d(g)); const i = h(a, e, f); if (i) return i } } function aa(a) { return ca(a[0], a[1]) } function ba(a) { return Array.isArray(a) ? da(a[0], a[1], a[2]) : da(a) } function ca(a, b) { return fa(a, "function" == typeof b ? b : () => b) } function da(a, b, c) { return fa(a, b ? "function" == typeof b ? b : "string" == typeof b && /^[\w-]+$/.test(b) ? (a, d) => ({ [b]: c ? c(a, d) : ea(a.input, a.slice(1).find(Boolean) || a.$$ || a.input) }) : () => b : a => ({ [a[1]]: ea(a.input, a.slice(2).find(Boolean) || a.$$ || a.input) })) } function ea(a, b) { return "-" == a[0] ? `calc(${b} * -1)` : b } function fa(a, b) { return ga(a, (a, c, d, e) => { const f = c.exec(a); if (f) return f.$$ = a.slice(f[0].length), f.dark = e, b(f, d) }) } function ga(a, b) { const c = j(a).map(ha); return (a, d, e) => { for (const f of c) { const g = b(a, f, d, e); if (g) return g } } } function ha(a) { return "string" == typeof a ? new RegExp("^" + a + (a.includes("$") || "-" == a.slice(-1) ? "" : "$")) : a } function ia(a, b) { return a.replace(/--(tw-[\w-]+)\b/g, (a, c) => "--" + b(c).replace("#", "")) } function ja(a) { var { presets: b = [] } = a, e = d(a, ["presets"]); let f = { preflight: !1 !== e.preflight && [], darkMode: void 0, darkColor: void 0, theme: {}, variants: j(e.variants), rules: j(e.rules), ignorelist: j(e.ignorelist), hash: e.hash, stringify: e.stringify || ka }; for (const g of j([...b, { darkMode: e.darkMode, darkColor: e.darkColor, preflight: !1 !== e.preflight && j(e.preflight), theme: e.theme },])) { const { preflight: h, darkMode: i = f.darkMode, darkColor: k = f.darkColor, theme: l, variants: m, rules: n, hash: o = f.hash, ignorelist: p, stringify: q = f.stringify } = "function" == typeof g ? g(f) : g; f = { preflight: !1 !== f.preflight && !1 !== h && [...f.preflight, ...j(h)], darkMode: i, darkColor: k, theme: c({}, f.theme, l, { extend: c({}, f.theme.extend, null == l ? void 0 : l.extend) }), variants: [...f.variants, ...j(m)], rules: [...f.rules, ...j(n)], ignorelist: [...f.ignorelist, ...j(p)], hash: o, stringify: q } } return f } function ka(a, b) { return a + ":" + b } function la(a, b) { const e = ja(a), f = function ({ theme: a, darkMode: b, darkColor: c, variants: e, rules: f, hash: i, stringify: j, ignorelist: l }) { const m = new Map(), n = new Map(), o = new Map(), p = new Map(), q = ga(l, (a, b) => b.test(a)); e.push(["dark", "class" == b ? ".dark &" : "string" == typeof b && "media" != b ? b : "@media (prefers-color-scheme:dark)",]); const r = "function" == typeof i ? a => i(a, h) : i ? h : k; return { theme: (function (a) { var { extend: b = {} } = a, c = d(a, ["extend"]); const e = {}, f = { colors: g("colors"), theme: g, negative() { return {} }, breakpoints(a) { const b = {}; for (const c in a) "string" == typeof a[c] && (b["screen-" + c] = a[c]); return b } }; function g(a, d, f) { if (a) { var i; if (/[.[]/.test(a)) { const j = []; a.replace(/\[([^\]]+)\]|([^.[]+)/g, (a, b, c = b) => j.push(c)), a = j.shift(), f = d, d = j.join("-") } const k = e[a] || Object.assign(Object.assign(e[a] = {}, h(c, a)), h(b, a)); return null == d ? k : null !== (i = k[d || "DEFAULT"]) && void 0 !== i ? i : f } const l = {}; for (const m of [...Object.keys(c), ...Object.keys(b)]) l[m] = g(m); return l } function h(a, b) { let c = a[b]; return ("function" == typeof c && (c = c(f)), c && /color|fill|stroke/i.test(b)) ? $(c) : c } return g })(a), e: g, h: r, s(a, b) { return j(ia(a, r), ia(b, r), this) }, d(a, b, d) { return null == c ? void 0 : c(a, b, this, d) }, v(a) { return m.has(a) || m.set(a, _(a, e, n, aa, this) || "&:" + a), m.get(a) }, r(a, b) { const c = JSON.stringify([a, b]); return o.has(c) || o.set(c, !q(a, this) && _(a, f, p, ba, this, b)), o.get(c) } } }(e), i = new Map(), l = [], m = new Set(); function o(a) { const d = a.n && f.h(a.n), e = v(d ? c({}, a, { n: d }) : a); if (e && !m.has(e)) { m.add(e); const g = H(l, a); b.insert(e, g, a), l.splice(g, 0, a) } return d } return b.resume(a => i.set(a, a), (a, c) => { b.insert(a, l.length, c), l.push(c), m.add(a) }), Object.defineProperties(function (a) { if (!i.size) for (let b of j(e.preflight)) "function" == typeof b && (b = b(f)), b && ("string" == typeof b ? M("", n.b, F(b), f, n.b, [], !1, !0) : P(b, {}, f, n.b)).forEach(o); a = "" + a; let c = i.get(a); if (!c) { const d = new Set(); for (const g of K(F(a), f)) d.add(g.c).add(o(g)); c = [...d].filter(Boolean).join(" "), i.set(a, c).set(c, c) } return c }, Object.getOwnPropertyDescriptors({ get target() { return b.target }, theme: f.theme, config: e, clear() { b.clear(), m.clear(), i.clear(), l.length = 0 }, destroy() { this.clear(), b.destroy() } })) } function ma(a = ta, b = document.documentElement) { if (!b) return a; const c = new MutationObserver(e); c.observe(b, { attributeFilter: ["class"], subtree: !0, childList: !0 }), f(b), e([{ target: b, type: "" }]); const { destroy: d } = a; function e(a) { for (const { type: b, target: d } of a) if ("a" == b[0]) f(d); else for (const e of d.querySelectorAll("[class]")) f(e); c.takeRecords() } function f(b) { const c = b.getAttribute("class"); let d; c && Z(c, d = a(c)) && b.setAttribute("class", d) } return a.destroy = () => { c.disconnect(), d.call(a) }, a } function na(a) { let b = a || document.querySelector("style[data-twind]"); return b && "STYLE" == b.tagName || ((b = document.createElement("style")).dataset.twind = "", document.head.prepend(b)), b } function oa(a) { var b; const c = (null === (b = a) || void 0 === b ? void 0 : b.cssRules) ? a : na(a).sheet; return { target: c, clear() { for (let a = c.cssRules.length; a--;)c.deleteRule(a) }, destroy() { var a; null === (a = c.ownerNode) || void 0 === a || a.remove() }, insert(a, b) { try { c.insertRule(a, b) } catch (d) { c.insertRule(":root{}", b), /:-[mwo]/.test(a) || console.warn(d, a) } }, resume: l } } function pa(a) { const b = na(a); return { target: b, clear() { b.textContent = "" }, destroy() { b.remove() }, insert(a, c) { b.insertBefore(document.createTextNode(a), b.childNodes[c] || null) }, resume: l } } function qa(a, b) { const c = a ? pa() : oa(); return b || (c.resume = sa), c } function ra(a) { var b; return (null === (b = a.ownerNode || a) || void 0 === b ? void 0 : b.textContent) || (a.cssRules ? Array.from(a.cssRules, a => a.cssText) : j(a)).join("") } function sa(a, b) { const c = ra(this.target), d = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g; if (d.test(c)) { for (const e of (d.lastIndex = 0, this.clear(), document.querySelectorAll("[class]"))) a(e.getAttribute("class")); let f; for (var g; g = d.exec(c), f && b(c.slice(f.index + f[0].length, null == g ? void 0 : g.index), { p: parseInt(f[1], 36), o: parseInt(f[2], 36) / 2, n: f[3] }), f = g;); } } const ta = Object.defineProperties(function (...a) { return ua(...a) }, Object.getOwnPropertyDescriptors({ get target() { return ua.target }, theme(...a) { return ua.theme(...a) }, get config() { return ua.config }, clear() { return ua.clear() }, destroy() { return ua.destroy() } })); let ua; function va(a = {}, b = qa(), c) { var d; const e = !ua; return e || ua.destroy(), ua = ma(la(a, b), c), e && (document.activeElement || null === (d = document.querySelector("[autofocus]")) || void 0 === d || d.focus()), ua } function wa(a, b = ta) { let c = "", d = 0; return xa(a, (e, f, g) => { const h = a.slice(e, f), i = "\"" == g ? h.replace(/(\[)&#x27;|&#x27;(])/g, "$1'$2") : "'" == g ? h.replace(/(\[)&quot;|&quot;(])/g, "$1\"$2") : h, j = b(i); Z(h, j) && (g = g ? "" : "\"", c += a.slice(d, e) + g + j + g, d = f) }), c + a.slice(d, a.length) } function xa(a, b) { let c = 1, d = 0, e = "", f = ""; const g = a => { 5 == c && "class" == f && b(d, a, e) }; for (let h = 0; h < a.length; h++) { const i = a[h]; 1 == c ? "<" == i && (c = "!--" == a.substr(h + 1, 3) ? 4 : 3) : 4 == c ? ">" == i && "--" == a.slice(h - 2, h) && (c = 1) : e ? i == e && "\\" != a[h - 1] && (g(h), c = 2, e = "") : "\"" == i || "'" == i ? (e = i, d += 1) : ">" == i ? (g(h), c = 1) : c && ("=" == i ? (f = a.slice(d, h), c = 5, d = h + 1) : "/" == i && (c < 5 || ">" == a[h + 1]) ? (g(h), c = 0) : /\s/.test(i) && (g(h), c = 2, d = h + 1)) } } function ya(a, b) { return Array.isArray(a) && Array.isArray(a.raw) ? S(a, b, a => za(a).trim()) : b.filter(Boolean).reduce((a, b) => a + za(b), a ? za(a) : "") } function za(a) { let b = "", c; if (a && "object" == typeof a) if (Array.isArray(a)) (c = ya(a[0], a.slice(1))) && (b += " " + c); else for (const d in a) a[d] && (b += " " + d); else null != a && "boolean" != typeof a && (b += " " + a); return b } function Aa(a, b = ta) { return b.clear(), { html: wa(a, b), css: ra(b.target) } } const Ba = Ca(); function Ca(a) { return new Proxy(function (b, ...c) { return Da(a, "", b, c) }, { get(b, c) { return "bind" === c ? Ca : c in b ? b[c] : function (b, ...d) { return Da(a, c, b, d) } } }) } function Da(a, b, c, d) { return { toString() { const e = T(c, d), f = g(b + h(JSON.stringify([b, e]))); return ("function" == typeof a ? a : ta)(W({ [`@keyframes ${f}`]: T(c, d) })), f } } } const Ea = Ga("@"), Fa = Ga("~"); function Ga(a) { function b(b, c, d) { return A(F(b + a + "(" + ya(c, d) + ")")) } return new Proxy(function (a, ...c) { return b("", a, c) }, { get(a, c) { return c in a ? a[c] : function (a, ...d) { return b(c, a, d) } } }) } function Ha(a, b, c) { if ("[" == a[0] && "]" == a.slice(-1)) { if (a = R(a.slice(1, -1), c), /color|fill|stroke/i.test(b)) { if (/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(a)) return a } else if (!/image/i.test(b)) return a.includes("calc(") && (a = a.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ")), a.replace(/(^|[^\\])_+(?![^(]*\))/g, (a, b) => b + " ".repeat(a.length - 1)).replace(/\\_(?![^(]*\))/g, "_"); else if (/^[a-z-]+\(/.test(a)) return a } } function Ia(a) { return a.replace(/-./g, a => a[1].toUpperCase()) } function Ja(a = {}, b) { const { label: d = "style", base: e, props: f = {}, defaults: i, when: j = [] } = a, k = c({}, null == b ? void 0 : b.defaults, i), l = h(JSON.stringify([d, null == b ? void 0 : b.className, e, f, k, j])), m = o("", e || "", n.c); function o(a, c, e) { return z(((b ? b.className.replace(/#.+$/, "~") : "") + d + a + l).replace(/[: ,()[\]]/, ""), e, c && F(c)) } return Object.defineProperties(function (a) { let d; Array.isArray(a) && (d = !0, a = Object.fromEntries(new URLSearchParams(a[1]).entries())); const e = c({}, k, a); let g = d ? "" : (b ? b(e) + " " : "") + m, h; for (const i in f) { const l = f[i], n = e[i]; if (n === Object(n)) { let p = ""; for (const q in h = "", n) { const r = l[n[q]]; r && (p += "@" + q + "-" + n[q], h += (h && " ") + ("_" == q ? r : q + ":(" + r + ")")) } h && (g += " " + o("--" + i + "-" + p, h, 402653184)) } else (h = l[n]) && (g += " " + o("--" + i + "-" + n, h, 402653184)) } return j.forEach((a, b) => { let c = ""; for (const d in a[0]) { const f = e[d]; if (f !== Object(f) && "" + f == "" + a[0][d]) c += (c && "_") + d + "-" + f; else { c = ""; break } } c && (h = a[1]) && (g += " " + o("-" + b + "--" + c, h, 536870912)) }), g }, Object.getOwnPropertyDescriptors({ className: m, defaults: k, selector: "." + g(m) })) } return a.animation = X, a.apply = Ea, a.arbitrary = Ha, a.asArray = j, a.auto = function (a) { if (document.currentScript) { const b = () => c.disconnect(), c = new MutationObserver(c => { for (const { target: d } of c) if (d === document.body) return a(), b() }); return c.observe(document.documentElement, { childList: !0, subtree: !0 }), b } return l }, a.autoDarkColor = function (a, b, { theme: c }) { return c(a, b = b.replace(/\d+$/, a => 100 * (9 - ~~(parseInt(a, 10) / 100) || .5))) }, a.colorFromTheme = function (a = {}, b) { return (c, d) => { const { section: e = Ia(c[0]).replace("-", "") + "Color" } = a; if (!/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/.test(c.$$)) return; const { $1: f, $2: g } = RegExp, h = d.theme(e, f) || Ha(f, e, d); if (!h) return; const { opacityVariable: i = `--tw-${c[0].replace(/-$/, "")}-opacity`, opacitySection: j = e.replace("Color", "Opacity"), property: k = e, selector: l } = a, m = d.theme(j, g || "DEFAULT") || g && Ha(g, j, d), n = b || (a => { const b = {}, c = a._.value; return i && c.includes(i) && (b[i] = m || "1"), b[k] = c, l ? { [l]: b } : b }); c._ = { value: O(h, { opacityVariable: i || void 0, opacityValue: m || void 0 }), color: a => O(h, a) }; let o = n(c, d); if (!c.dark) { const p = d.d(e, f, h); p && p !== h && (c._ = { value: O(p, { opacityVariable: i || void 0, opacityValue: m || void 0 }), color: a => O(p, a) }, o = { "&": o, [d.v("dark")]: n(c, d) }) } return o } }, a.consume = wa, a.css = W, a.cssom = oa, a.cx = function (a, ...b) { return A(F(ya(a, b)), " ") }, a.defineConfig = ja, a.dom = pa, a.escape = g, a.extract = Aa, a.fromTheme = function (a, b, c) { const d = b ? "string" == typeof b ? (a, d) => ({ [b]: c ? c(a, d) : a._ }) : b : ({ 1: a, _: b }, c, d) => ({ [a || d]: b }); return (b, c) => { var e; const f = Ia(a || b[1]), g = null !== (e = c.theme(f, b.$$)) && void 0 !== e ? e : Ha(b.$$, f, c); if (null != g) return b._ = "-" == b.input[0] ? `calc(${g} * -1)` : g, d(b, c, f) } }, a.getSheet = qa, a.hash = h, a.identity = k, a.injectGlobal = function (a, ...b) { ("function" == typeof this ? this : ta)(W({ "@layer base": T(a, b) })) }, a.inline = function (a, b = {}) { const { tw: c = ta, minify: d = k } = "function" == typeof b ? { tw: b } : b, { html: e, css: f } = Aa(a, c); return e.replace("</head>", `<style data-twind>${d(f, e)}</style></head>`) }, a.install = function (a, b) { var d; const e = ja(a); return va(c({}, e, { hash: null !== (d = e.hash) && void 0 !== d ? d : b }), qa(!b)) }, a.keyframes = Ba, a.mql = i, a.noop = l, a.observe = ma, a.setup = va, a.shortcut = Fa, a.stringify = ra, a.style = (a, b) => "function" == typeof a ? Ja(b, a) : Ja(a), a.toColorValue = O, a.tw = ta, a.twind = la, a.tx = function (a, ...b) { return ("function" == typeof this ? this : ta)(ya(a, b)) }, a.virtual = function (a) { const b = []; return { target: b, clear() { b.length = 0 }, destroy() { this.clear() }, insert(c, d, e) { b.splice(d, 0, a ? `/*!${e.p.toString(36)},${(2 * e.o).toString(36)}${e.n ? "," + e.n : ""}*/${c}` : c) }, resume: l } }, a }({})
this.twind = {};
this.twind.presetTailwind = (function (a) { "use strict"; function b(a, b, c) { return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c, a } function c(a) { for (var c = 1; c < arguments.length; c++) { var d = null != arguments[c] ? arguments[c] : {}, e = Object.keys(d); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(d).filter(function (a) { return Object.getOwnPropertyDescriptor(d, a).enumerable }))), e.forEach(function (c) { b(a, c, d[c]) }) } return a } const d = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: { __proto__: null, inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" } }, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: c({ px: "1px", 0: "0px" }, h(4, "rem", 4, .5, .5), h(12, "rem", 4, 5), { 14: "3.5rem" }, h(64, "rem", 4, 16, 4), { 72: "18rem", 80: "20rem", 96: "24rem" }), durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: i("blur"), backdropBrightness: i("brightness"), backdropContrast: i("contrast"), backdropGrayscale: i("grayscale"), backdropHueRotate: i("hueRotate"), backdropInvert: i("invert"), backdropOpacity: i("opacity"), backdropSaturate: i("saturate"), backdropSepia: i("sepia"), backgroundColor: i("colors"), backgroundImage: { none: "none" }, backgroundOpacity: i("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: c({}, h(200, "", 100, 0, 50), h(110, "", 100, 90, 5), { 75: "0.75", 125: "1.25" }), borderColor: ({ theme: a }) => c({}, a("colors"), { DEFAULT: a("colors.gray.200", "currentColor") }), borderOpacity: i("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderWidth: c({}, g(8, "px"), { DEFAULT: "1px" }), boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: i("colors"), caretColor: i("colors"), accentColor: ({ theme: a }) => c({}, a("colors"), { auto: "auto" }), contrast: c({}, h(200, "", 100, 0, 50), { 75: "0.75", 125: "1.25" }), content: { none: "none" }, divideColor: i("borderColor"), divideOpacity: i("borderOpacity"), divideWidth: i("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: i("colors"), grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: a }) => c({}, a("spacing"), f(2, 6), f(12, 12), { auto: "auto", full: "100%" }), flexGrow: { 0: 0, DEFAULT: 1 }, flexShrink: { 0: 0, DEFAULT: 1 }, fontFamily: { sans: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"".split(","), serif: "ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif".split(","), mono: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace".split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: i("spacing"), gradientColorStops: i("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: a }) => c({}, a("spacing"), f(2, 6), { min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: a }) => c({}, a("spacing"), f(2, 4), { auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: c({}, h(10, "rem", 4, 3), { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }), margin: ({ theme: a }) => c({}, a("spacing"), { auto: "auto" }), maxHeight: ({ theme: a }) => c({}, a("spacing"), { full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }), maxWidth: ({ theme: a, breakpoints: b }) => c({}, b(a("screens")), { none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: c({}, h(100, "", 100, 0, 10), { 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }), order: { first: "-9999", last: "9999", none: "0" }, padding: i("spacing"), placeholderColor: i("colors"), placeholderOpacity: i("opacity"), outlineColor: i("colors"), outlineOffset: g(8, "px"), outlineWidth: g(8, "px"), ringColor: ({ theme: a }) => c({}, a("colors"), { DEFAULT: a("colors.blue.500", "#3b82f6") }), ringOffsetColor: i("colors"), ringOffsetWidth: g(8, "px"), ringOpacity: ({ theme: a }) => c({}, a("opacity"), { DEFAULT: "0.5" }), ringWidth: c({}, g(8, "px"), { DEFAULT: "3px" }), rotate: c({}, g(2, "deg"), g(12, "deg", 3), g(180, "deg", 45)), saturate: h(200, "", 100, 0, 50), scale: c({}, h(150, "", 100, 0, 50), h(110, "", 100, 90, 5), { 75: "0.75", 125: "1.25" }), scrollMargin: i("spacing"), scrollPadding: i("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: c({}, g(2, "deg"), g(12, "deg", 3)), space: i("spacing"), stroke: i("colors"), strokeWidth: h(2), textColor: i("colors"), textDecorationColor: i("colors"), textDecorationThickness: c({ "from-font": "from-font", auto: "auto" }, g(8, "px")), textUnderlineOffset: c({ auto: "auto" }, g(8, "px")), textIndent: i("spacing"), textOpacity: i("opacity"), transitionDuration: ({ theme: a }) => c({}, a("durations"), { DEFAULT: "150ms" }), transitionDelay: i("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: a }) => c({}, a("spacing"), f(2, 4), { full: "100%" }), width: ({ theme: a }) => c({}, a("flexBasis"), { min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw" }), zIndex: c({}, h(50, "", 1, 0, 10), { auto: "auto" }) }, e = d; function f(a, b) { const c = {}; do for (var d = 1; d < a; d++)c[`${d}/${a}`] = Number((d / a * 100).toFixed(6)) + "%"; while (++a <= b); return c } function g(a, b, c = 0) { const d = {}; for (; c <= a; c = 2 * c || 1)d[c] = c + b; return d } function h(a, b = "", c = 1, d = 0, e = 1, f = {}) { for (; d <= a; d += e)f[d] = d / c + b; return f } function i(a) { return ({ theme: b }) => b(a) } const j = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${e.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${e.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, "button,[role=\"button\"]": { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, k = j, l = [["\\[([-\\w]+):(.+)]", ({ 1: b, 2: c }, d) => ({ "@layer overrides": { "&": { [b]: a.arbitrary(`[${c}]`, b, d) } } }),], ["(group|peer)(~[^-[]+)?", ({ input: a }, { h: b }) => [{ c: b(a) }]], ["aspect-", a.fromTheme("aspectRatio")], ["container", (b, { theme: d }) => { const { screens: e = d("screens"), center: f, padding: g } = d("container"), h = c({ width: "100%", marginRight: f && "auto", marginLeft: f && "auto" }, k("xs")); for (const i in e) { const j = e[i]; "string" == typeof j && (h[a.mql(j)] = { "&": c({ maxWidth: j }, k(i)) }) } function k(a) { const b = g && ("string" == typeof g ? g : g[a] || g.DEFAULT); if (b) return { paddingRight: b, paddingLeft: b } } return h },], ["content-", a.fromTheme("content", ({ _: a }) => ({ "--tw-content": a, content: "var(--tw-content)" })),], ["(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"], ["box-(border|content)", "boxSizing", ({ 1: a }) => a + "-box"], ["hidden", { display: "none" }], ["table-(auto|fixed)", "tableLayout"], [["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))",], "display",], "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", ["isolate", "isolation"], ["object-(contain|cover|fill|none|scale-down)", "objectFit"], ["object-", a.fromTheme("objectPosition")], ["object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", n], ["overscroll(-[xy])?-(auto|contain|none)", ({ 1: a = "", 2: b }) => ({ ["overscroll-behavior" + a]: b }),], ["(static|fixed|absolute|relative|sticky)", "position"], ["-?inset(-[xy])?(?:-|$)", a.fromTheme("inset", ({ 1: a, _: b }) => ({ top: "-x" != a && b, right: "-y" != a && b, bottom: "-x" != a && b, left: "-y" != a && b })),], ["-?(top|bottom|left|right)(?:-|$)", a.fromTheme("inset")], ["visible", "visibility"], ["invisible", { visibility: "hidden" }], ["-?z-", a.fromTheme("zIndex")], ["flex-((row|col)(-reverse)?)", "flexDirection", o], ["flex-(wrap|wrap-reverse|nowrap)", "flexWrap"], ["(flex-(?:grow|shrink))(?:-|$)", a.fromTheme()], ["(flex)-", a.fromTheme()], ["grow(?:-|$)", a.fromTheme("flexGrow")], ["shrink(?:-|$)", a.fromTheme("flexShrink")], ["basis-", a.fromTheme("flexBasis")], ["-?(order)-", a.fromTheme()], "-?(order)-(\\d+)", ["grid-cols-", a.fromTheme("gridTemplateColumns")], ["grid-cols-(\\d+)", "gridTemplateColumns", y], ["col-", a.fromTheme("gridColumn")], ["col-(span)-(\\d+)", "gridColumn", x], ["col-start-", a.fromTheme("gridColumnStart")], ["col-start-(\\d+|auto)", "gridColumnStart"], ["col-end-", a.fromTheme("gridColumnEnd")], ["col-end-(\\d+|auto)", "gridColumnEnd"], ["grid-rows-", a.fromTheme("gridTemplateRows")], ["grid-rows-(\\d+)", "gridTemplateRows", y], ["row-", a.fromTheme("gridRow")], ["row-(span)-(\\d+)", "gridRow", x], ["row-start-", a.fromTheme("gridRowStart")], ["row-start-(\\d+|auto)", "gridRowStart"], ["row-end-", a.fromTheme("gridRowEnd")], ["row-end-(\\d+|auto)", "gridRowEnd"], ["grid-flow-((row|col)(-dense)?)", "gridAutoFlow", a => n(o(a))], ["auto-cols-", a.fromTheme("gridAutoColumns")], ["auto-rows-", a.fromTheme("gridAutoRows")], ["gap-x(?:-|$)", a.fromTheme("gap", "columnGap")], ["gap-y(?:-|$)", a.fromTheme("gap", "rowGap")], ["gap(?:-|$)", a.fromTheme("gap")], "(justify-(?:items|self))-", ["justify-", "justifyContent", r], ["(content|items|self)-", a => ({ ["align-" + a[1]]: r(a) }),], ["(place-(content|items|self))-", ({ 1: a, $$: b }) => ({ [a]: ("wun".includes(b[3]) ? "space-" : "") + b }),], ["p([xytrbl])?(?:-|$)", a.fromTheme("padding", s("padding"))], ["-?m([xytrbl])?(?:-|$)", a.fromTheme("margin", s("margin"))], ["-?space-(x|y)(?:-|$)", a.fromTheme("space", ({ 1: a, _: b }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${a}-reverse`]: "0", ["margin-" + ({ y: "top", x: "left" })[a]]: `calc(${b} * calc(1 - var(--tw-space-${a}-reverse)))`, ["margin-" + ({ y: "bottom", x: "right" })[a]]: `calc(${b} * var(--tw-space-${a}-reverse))` } })),], ["space-(x|y)-reverse", ({ 1: a }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${a}-reverse`]: "1" } }),], ["w-", a.fromTheme("width")], ["min-w-", a.fromTheme("minWidth")], ["max-w-", a.fromTheme("maxWidth")], ["h-", a.fromTheme("height")], ["min-h-", a.fromTheme("minHeight")], ["max-h-", a.fromTheme("maxHeight")], ["font-", a.fromTheme("fontWeight")], ["font-", a.fromTheme("fontFamily", "fontFamily", q)], ["antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" },], ["subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" },], ["italic", "fontStyle"], ["not-italic", { fontStyle: "normal" }], ["(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: a, 2: b = "", 3: c }) => "normal" == b ? { fontVariantNumeric: "normal" } : { ["--tw-" + (c ? "numeric-fraction" : "pt".includes(b[0]) ? "numeric-spacing" : b ? "numeric-figure" : a)]: a, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } },], ["tracking-", a.fromTheme("letterSpacing")], ["leading-", a.fromTheme("lineHeight")], ["list-(inside|outside)", "listStylePosition"], ["list-", a.fromTheme("listStyleType")], ["list-", "listStyleType"], ["placeholder-opacity-", a.fromTheme("placeholderOpacity", ({ _: a }) => ({ ["&::placeholder"]: { "--tw-placeholder-opacity": a } })),], ["placeholder-", a.colorFromTheme({ property: "color", selector: "&::placeholder" })], ["text-(left|center|right|justify)", "textAlign"], ["text-opacity-", a.fromTheme("textOpacity", "--tw-text-opacity")], ["text-", a.colorFromTheme({ property: "color" })], ["text-", a.fromTheme("fontSize", ({ _: a }) => "string" == typeof a ? { fontSize: a } : c({ fontSize: a[0] }, "string" == typeof a[1] ? { lineHeight: a[1] } : a[1])),], ["indent-", a.fromTheme("textIndent")], ["(overline|underline|line-through)", "textDecorationLine"], ["no-underline", { textDecorationLine: "none" }], ["underline-", a.fromTheme("textUnderlineOffset")], ["decoration-", a.colorFromTheme({ section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }),], ["decoration-", a.fromTheme("textDecorationThickness")], ["decoration-", "textDecorationStyle"], ["(uppercase|lowercase|capitalize)", "textTransform"], ["normal-case", { textTransform: "none" }], ["truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" },], ["text-(ellipsis|clip)", "textOverflow"], ["overflow-(ellipsis)", "textOverflow"], ["align-", "verticalAlign"], ["whitespace-", "whiteSpace"], ["break-normal", { wordBreak: "normal", overflowWrap: "normal" }], ["break-words", { overflowWrap: "break-word" }], ["break-all", { wordBreak: "break-all" }], ["caret-", a.colorFromTheme({ section: "caretColor", opacityVariable: !1, opacitySection: "opacity" }),], ["accent-", a.colorFromTheme({ section: "accentColor", opacityVariable: !1, opacitySection: "opacity" }),], ["bg-gradient-to-([trbl]{1,2})", "backgroundImage", ({ 1: a }) => `linear-gradient(to ${p(a, " ")},var(--tw-gradient-stops))`,], ["from-", a.colorFromTheme({ section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: a }) => ({ "--tw-gradient-from": a.value, "--tw-gradient-to": a.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })),], ["via-", a.colorFromTheme({ section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: a }) => ({ "--tw-gradient-to": a.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${a.value},var(--tw-gradient-to)` })),], ["to-", a.colorFromTheme({ section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }),], ["bg-(fixed|local|scroll)", "backgroundAttachment"], ["bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: a }) => a + "-box"], [["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"], ["bg-blend-", "backgroundBlendMode"], ["bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: a }) => a + ("text" == a ? "" : "-box"),], ["bg-opacity-", a.fromTheme("backgroundOpacity", "--tw-bg-opacity")], ["bg-", a.colorFromTheme({ section: "backgroundColor" })], ["bg-", a.fromTheme("backgroundImage")], ["bg-", a.fromTheme("backgroundSize")], ["bg-", a.fromTheme("backgroundPosition")], ["bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", n], ["rounded(?:-|$)", a.fromTheme("borderRadius")], ["rounded-([trbl]{1,2})(?:-|$)", a.fromTheme("borderRadius", ({ 1: a, _: b }) => { const c = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[a] || [a, a]; return { [`border-${p(c[0])}-radius`]: b, [`border-${p(c[1])}-radius`]: b } }),], ["border-(collapse|separate)", "borderCollapse"], ["border-opacity(?:-|$)", a.fromTheme("borderOpacity", "--tw-border-opacity")], ["border-(solid|dashed|dotted|double|none)", "borderStyle"], ["border-", a.colorFromTheme()], ["border-([xytrbl])(?:-|$)", a.fromTheme("borderWidth", s("border", "Width"))], ["border(?:-|$)", a.fromTheme("borderWidth")], ["divide-opacity(?:-|$)", a.fromTheme("divideOpacity", ({ _: a }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": a } })),], ["divide-(solid|dashed|dotted|double|none)", ({ 1: a }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: a } }),], ["divide-([xy]-reverse)", ({ 1: a }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + a]: "1" } }),], ["divide-([xy])(?:-|$)", a.fromTheme("divideWidth", ({ 1: a, _: b }) => { const c = { x: "lr", y: "tb" }[a]; return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${a}-reverse`]: "0", [`border-${p(c[0])}Width`]: `calc(${b} * calc(1 - var(--tw-divide-${a}-reverse)))`, [`border-${p(c[1])}Width`]: `calc(${b} * var(--tw-divide-${a}-reverse))` } } }),], ["divide-", a.colorFromTheme({ property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }),], ["ring-opacity(?:-|$)", a.fromTheme("ringOpacity", "--tw-ring-opacity")], ["ring-offset(?:-|$)", a.colorFromTheme({ property: "--tw-ring-offset-color", opacityVariable: !1 }),], ["ring-offset(?:-|$)", a.fromTheme("ringOffsetWidth", "--tw-ring-offset-width")], ["ring-inset", { "--tw-ring-inset": "inset" }], ["ring-", a.colorFromTheme({ property: "--tw-ring-color" }),], ["ring(?:-|$)", a.fromTheme("ringWidth", ({ _: b }, { theme: c }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${b} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": c("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": a.toColorValue(c("ringOffsetColor", "", "#fff")), "--tw-ring-color": a.toColorValue(c("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": c("ringOpacity", "", "0.5") } } } })),], ["shadow(?:-|$)", a.colorFromTheme({ section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: a }) => ({ "--tw-shadow-color": a.value, "--tw-shadow": "var(--tw-shadow-colored)" })),], ["shadow(?:-|$)", a.fromTheme("boxShadow", ({ _: a }) => ({ "--tw-shadow": q(a), "--tw-shadow-colored": q(a).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })),], ["(opacity)-", a.fromTheme()], ["mix-blend-", "mixBlendMode"], ...t(), ...t("backdrop-"), ["transition(?:-|$)", a.fromTheme("transitionProperty", (a, { theme: b }) => ({ transitionProperty: q(a), transitionTimingFunction: "none" == a._ ? void 0 : q(b("transitionTimingFunction", "")), transitionDuration: "none" == a._ ? void 0 : q(b("transitionDuration", "")) })),], ["duration(?:-|$)", a.fromTheme("transitionDuration", "transitionDuration", q)], ["ease(?:-|$)", a.fromTheme("transitionTimingFunction", "transitionTimingFunction", q)], ["delay(?:-|$)", a.fromTheme("transitionDelay", "transitionDelay", q)], ["animate(?:-|$)", a.fromTheme("animation", (a, { theme: b, h: c }) => { const d = q(a), e = d.split(" "), f = b("keyframes", e[0]); return f ? { ["@keyframes " + (e[0] = c(e[0]))]: f, animation: e.join(" ") } : { animation: d } }),], "(transform)-(none)", ["transform", v], ["transform-(cpu|gpu)", ({ 1: a }) => ({ "--tw-transform": w("gpu" == a) }),], ["scale(-[xy])?-", a.fromTheme("scale", ({ 1: a, _: b }) => c({ ["--tw-scale" + (a || "-x")]: b, ["--tw-scale" + (a || "-y")]: b }, v())),], ["-?(rotate)-", a.fromTheme("rotate", u)], ["-?(translate-[xy])-", a.fromTheme("translate", u)], ["-?(skew-[xy])-", a.fromTheme("skew", u)], ["origin(-center|(-top|-bottom)?(-(left|right))?)", "transformOrigin", n], "(appearance)-", ["(columns)-", a.fromTheme()], "(columns)-(\\d+)", "(break-(?:before|after|inside))-", ["(cursor)-", a.fromTheme()], "(cursor)-", ["snap-(none)", "scroll-snap-type"], ["snap-(x|y|both)", ({ 1: a }) => ({ "scroll-snap-type": a + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after": { "--tw-scroll-snap-strictness": "proximity" } } }),], ["snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"], ["snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"], ["snap-(normal|always)", "scroll-snap-stop"], ["scroll-(auto|smooth)", "scroll-behavior"], ["scroll-p([xytrbl])?(?:-|$)", a.fromTheme("padding", s("scroll-padding"))], ["-?scroll-m([xytrbl])?(?:-|$)", a.fromTheme("scroll-margin", s("scroll-margin")),], ["touch-(auto|none|manipulation)", "touch-action"], ["touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: a, 2: b, 3: c }) => ({ [`--tw-${b ? "pan-x" : c ? "pan-y" : a}`]: a, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } }),], ["outline-none", { outline: "2px solid transparent", "outline-offset": "2px" },], ["outline", { outlineStyle: "solid" }], ["outline-(dashed|dotted|double|hidden)", "outlineStyle"], ["(outline-offset)-", a.fromTheme()], ["outline-", a.colorFromTheme({ section: "outlineColor", opacityVariable: !1, opacitySection: "opacity" }),], ["outline-", a.fromTheme("outlineWidth")], "(pointer-events)-", ["(will-change)-", a.fromTheme()], "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: a }) => ({ x: "horizontal", y: "vertical" })[a] || a || "both",], ["select-(none|text|all|auto)", "userSelect"], ["(fill|stroke)-", a.fromTheme()], ["stroke-", a.fromTheme("strokeWidth")], ["sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" },], ["not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" },],], m = l; function n(a) { return ("string" == typeof a ? a : a[1]).replace(/-/g, " ").trim() } function o(a) { return ("string" == typeof a ? a : a[1]).replace("col", "column") } function p(a, b = "-") { const c = []; for (const d of a) c.push({ t: "top", r: "right", b: "bottom", l: "left" }[d]); return c.join(b) } function q(a) { return a && "" + (a._ || a) } function r({ $$: a }) { return (({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" })[a[3] || ""] || "") + a } function s(a, b = "") { return ({ 1: c, _: d }) => { const e = { x: "lr", y: "tb" }[c] || c + c; return e ? { [a + "-" + p(e[0]) + b]: d, [a + "-" + p(e[1]) + b]: d } : { [a + b]: d } } } function t(b = "") { const d = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", b && "opacity", "saturate", "sepia", !b && "drop-shadow",].filter(Boolean); let e = {}; for (const f of d) e[`--tw-${b}${f}`] = "var(--tw-empty,/*!*/ /*!*/)"; return e = { [`${b}filter`]: d.map(a => `var(--tw-${b}${a})`).join(" "), "@layer defaults": { "*,::before,::after": e } }, [`(${b}filter)-(none)`, [`${b}filter`, e], ...d.map(d => [`${"h" == d[0] ? "-?" : ""}(${b}${d})(?:-|$)`, a.fromTheme(d, ({ 1: b, _: f }) => c({ [`--tw-${b}`]: a.asArray(f).map(a => `${d}(${a})`).join(" ") }, e)),]),] } function u({ 1: a, _: b }) { return c({ ["--tw-" + a]: b }, v()) } function v() { return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": w() } } } } function w(a) { return [a ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))",].join(" ") } function x({ 1: a, 2: b }) { return `${a} ${b} / ${a} ${b}` } function y({ 1: a }) { return `repeat(${a},minmax(0,1fr))` } const z = [["sticky", "@supports ((position: -webkit-sticky) or (position:sticky))"], ["motion-reduce", "@media (prefers-reduced-motion:reduce)"], ["motion-safe", "@media (prefers-reduced-motion:no-preference)"], ["print", "@media print"], ["portrait", "@media (orientation:portrait)"], ["landscape", "@media (orientation:landscape)"], ["first-letter", "&::first-letter"], ["first-line", "&::first-line"], ["marker", "& *::marker,&::marker"], ["selection", "& *::selection,&::selection"], ["file", "&::file-selector-button"], ["placeholder", "&::placeholder"], ["first", "&:first-child"], ["last", "&:last-child"], ["even", "&:nth-child(2n)"], ["odd", "&:nth-child(odd)"], ["open", "[open]"], ["((group|peer)(~[^-[]+)?)(-[a-z-]+|\\[.+])", ({ 1: a, 4: b }, { e: c, h: d }) => `:merge(.${c(d(a))})${"[" == b[0] ? b : ":" + b.slice(1)}${"p" == a[0] ? "~" : " "}&`,], ["(ltr|rtl)", ({ 1: a }) => `[dir="${a}"] &`],]; return function ({ disablePreflight: a } = {}) { return { preflight: a ? void 0 : k, theme: e, variants: z, rules: m } } })(twind)
  ;
this.twind.presetAutoprefix = (function () {
  "use strict";

  var a = new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]

  ]);

  const b = [["-webkit-", 1], ["-moz-", 2], ["-ms-", 4]]; return function () { return ({ stringify: c }) => ({ stringify(d, e, f) { var g, h, i, j, k, l; let m = ""; const n = (g = d, a.get(g)); n && (m += c(n, e, f) + ";"); const o = (h = d, (i = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(h)) ? i[1] ? 1 : i[2] ? 2 : i[3] ? 3 : 5 : 0), p = (j = d, k = e, (l = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(j)) ? l[1] ? /^sti/i.test(k) ? 1 : 0 : l[2] ? /^pat/i.test(k) ? 1 : 0 : l[3] ? /^image-/i.test(k) ? 1 : 0 : l[4] ? "-" === k[3] ? 2 : 0 : /^(?:inline-)?grid$/i.test(k) ? 4 : 0 : 0); for (const q of b) o & q[1] && (m += c(q[0] + d, e, f) + ";"), p & q[1] && (m += c(d, q[0] + e, f) + ";"); return m + c(d, e, f) } }) }
})()
const defaultTheme = this.twind.presetTailwind().theme;
this.twind.presetTypography = (function (a) { "use strict"; function b(a, b, c) { return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c, a } function c(a) { for (var c = 1; c < arguments.length; c++) { var d = null != arguments[c] ? arguments[c] : {}, e = Object.keys(d); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(d).filter(function (a) { return Object.getOwnPropertyDescriptor(d, a).enumerable }))), e.forEach(function (c) { b(a, c, d[c]) }) } return a } function d(a, b, c) { const d = {}; for (const f in c) d[e(a, f, b, c => `.${b.e(b.h(a))}${c}`)] = c[f]; return d } function e(a, b, { e: c, h: d }, e) { return b.replace(/^[^>:]+$|(>)?((?:[^:,]+(?::[\w-]+)?)|:[\w-]+)(::[\w-]+)?/g, (b, f = " ", g = b, h = "") => e(`${f}:where(${g}):not(:where(.${c(d("not-" + a))} *))${h}`)) } function f(a) { return a ? "string" == typeof a ? { fontSize: a } : c({ fontSize: a[0] }, "string" == typeof a[1] ? { lineHeight: a[1] } : a[1]) : void 0 } function g(a, b) { return `${(a / b).toFixed(3).replace(/^0|\.?0+$/g, "")}em` } return function ({ className: b = "prose", defaultColor: h = "gray", extend: i = {}, colors: j = {} } = {}) { function k(b, c) { const d = {}, e = {}, f = (d, f, g) => { const h = c.theme(`colors.${b}.${f}`, f); g["--tw-prose-" + d] = a.toColorValue(h); const i = g != e && c.d("colors", `${b}.${f}`, h); i && (e["--tw-prose-" + d] = a.toColorValue(i)) }; for (const g in j) { const h = j[g]; "dark" != g && h && f(g, h, d) } for (const i in j.dark || {}) { const k = j.dark[i]; k && (j.dark ? f("invert-" + i, k, d) : f(i, k, e)) } return Object.keys(d).length ? { "@layer defaults": { "&": d, [c.v("dark")]: e } } : void 0 } return j = c({ body: "700", headings: "900", lead: "600", links: "900", bold: "900", counters: "500", bullets: "300", hr: "200", quotes: "900", "quote-borders": "200", captions: "500", code: "900", "pre-code": "200", "pre-bg": "800", "th-borders": "300", "td-borders": "200" }, j, { dark: null === j.dark ? null : c({ body: "300", headings: "#fff", lead: "400", links: "#fff", bold: "#fff", counters: "400", bullets: "600", hr: "700", quotes: "100", "quote-borders": "700", captions: "400", code: "#fff", "pre-code": "300", "pre-bg": "rgb(0 0 0 / 50%)", "th-borders": "600", "td-borders": "700" }, j.dark) }), { variants: [["headings", "h1,h2,h3,h4,th"], ["lead", ".lead"], ["h1"], ["h2"], ["h3"], ["h4"], ["p"], ["a"], ["blockquote"], ["figure"], ["figcaption"], ["strong"], ["em"], ["code"], ["pre"], ["ol"], ["ul"], ["li"], ["img"], ["video"], ["hr"],].map(([a, c = a]) => [`${b}-${a}`, (a, d) => e(b, "." == c[0] ? "." + d.e(d.h(c.slice(1))) : c, d, a => `& :is(${a.trim()})`),]), rules: [[`(lead|not-${b})`, ({ 1: a }, { h: b }) => [{ c: b(a) }]], [`${b}-invert`, { "@layer defaults": { "--tw-prose-body": "var(--tw-prose-invert-body)", "--tw-prose-headings": "var(--tw-prose-invert-headings)", "--tw-prose-lead": "var(--tw-prose-invert-lead)", "--tw-prose-links": "var(--tw-prose-invert-links)", "--tw-prose-bold": "var(--tw-prose-invert-bold)", "--tw-prose-counters": "var(--tw-prose-invert-counters)", "--tw-prose-bullets": "var(--tw-prose-invert-bullets)", "--tw-prose-hr": "var(--tw-prose-invert-hr)", "--tw-prose-quotes": "var(--tw-prose-invert-quotes)", "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)", "--tw-prose-captions": "var(--tw-prose-invert-captions)", "--tw-prose-code": "var(--tw-prose-invert-code)", "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)", "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)", "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)", "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)" } },], [b + "-", ({ $$: a }, b) => { const c = f(b.theme("fontSize", a)); return c && { "@layer components": c } },], [b + "-", ({ $$: a }, b) => k(a, b)], [b, (a, e) => c({}, k(h, e), { "@layer base": [d(b, e, { a: { color: "var(--tw-prose-links)", textDecorationLine: "underline", fontWeight: "500" }, strong: { color: "var(--tw-prose-bold)", fontWeight: "600" }, ul: { listStyleType: "disc" }, ol: { listStyleType: "decimal" }, "ol[type=\"A\"]": { listStyleType: "upper-alpha" }, "ol[type=\"a\"]": { listStyleType: "lower-alpha" }, "ol[type=\"A\" s]": { listStyleType: "upper-alpha" }, "ol[type=\"a\" s]": { listStyleType: "lower-alpha" }, "ol[type=\"I\"]": { listStyleType: "upper-roman" }, "ol[type=\"i\"]": { listStyleType: "lower-roman" }, "ol[type=\"I\" s]": { listStyleType: "upper-roman" }, "ol[type=\"i\" s]": { listStyleType: "lower-roman" }, "ol[type=\"1\"]": { listStyleType: "decimal" }, "ol,ul": { marginTop: g(20, 16), marginBottom: g(20, 16), paddingLeft: g(26, 16) }, li: { marginTop: g(8, 16), marginBottom: g(8, 16) }, "ol>li,ul>li": { paddingLeft: g(6, 16) }, ">ul>li p": { marginTop: g(12, 16), marginBottom: g(12, 16) }, ">ul>li>*:first-child,>ol>li>*:last-child": { marginTop: g(20, 16) }, ">ul>li>*:last-child,>ol>li>*:last-child": { marginBottom: g(20, 16) }, "ol>li::marker": { fontWeight: "400", color: "var(--tw-prose-counters)" }, "ul>li::marker": { color: "var(--tw-prose-bullets)" }, "ul ul,ul ol,ol ul,ol ol": { marginTop: g(12, 16), marginBottom: g(12, 16) }, hr: { borderColor: "var(--tw-prose-hr)", borderTopWidth: "1", marginTop: g(48, 16), marginBottom: g(48, 16) }, blockquote: { marginTop: g(32, 20), marginBottom: g(32, 20), paddingLeft: g(20, 20), fontWeight: "500", fontStyle: "italic", color: "var(--tw-prose-quotes)", borderLeftWidth: "0.25rem", borderLeftColor: "var(--tw-prose-quote-borders)", quotes: "\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"" }, "blockquote p:first-of-type::before": { content: "open-quote" }, "blockquote p:last-of-type::after": { content: "close-quote" }, p: { marginTop: g(20, 16), marginBottom: g(20, 16) }, h1: { color: "var(--tw-prose-headings)", fontWeight: "800", fontSize: g(36, 16), marginTop: "0", marginBottom: g(32, 36), lineHeight: 1.15 }, "h1 strong": { fontWeight: "900" }, h2: { color: "var(--tw-prose-headings)", fontWeight: "700", fontSize: g(24, 16), marginTop: g(48, 24), marginBottom: g(24, 24), lineHeight: "1.35" }, "h2 strong": { fontWeight: "800" }, h3: { color: "var(--tw-prose-headings)", fontWeight: "600", fontSize: g(20, 16), marginTop: g(32, 20), marginBottom: g(12, 20), lineHeight: "1.6" }, "h3 strong": { fontWeight: "700" }, h4: { color: "var(--tw-prose-headings)", fontWeight: "600", marginTop: g(24, 16), marginBottom: g(8, 16), lineHeight: "1.5" }, "h4 strong": { fontWeight: "700" }, "hr+*,h2+*,h3+*,h4+*": { marginTop: "0" }, "img,video,figure": { marginTop: g(32, 16), marginBottom: g(32, 16) }, "figure>*": { marginTop: "0", marginBottom: "0" }, figcaption: { color: "var(--tw-prose-captions)", fontSize: g(14, 16), lineHeight: "1.4", marginTop: g(12, 14) }, code: { color: "var(--tw-prose-code)", fontWeight: "600", fontSize: g(14, 16) }, "code::before,code::after": { content: "\"`\"" }, "h2 code": { fontSize: g(21, 24) }, "h3 code": { fontSize: g(18, 20) }, "a code": { color: "var(--tw-prose-links)" }, pre: { color: "var(--tw-prose-pre-code)", backgroundColor: "var(--tw-prose-pre-bg)", overflowX: "auto", fontWeight: "400", fontSize: g(14, 16), lineHeight: "1.7", marginTop: g(24, 14), marginBottom: g(24, 14), borderRadius: "0.375rem", paddingTop: g(12, 14), paddingRight: g(16, 14), paddingBottom: g(12, 14), paddingLeft: g(16, 14) }, "pre code": { backgroundColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0", fontWeight: "inherit", color: "inherit", fontSize: "inherit", fontFamily: "inherit", lineHeight: "inherit" }, "pre code::before": { content: "none" }, "pre code::after": { content: "none" }, [`.${e.e(e.h("lead"))}`]: { color: "var(--tw-prose-lead)", fontSize: g(20, 16), lineHeight: "1.6", marginTop: g(24, 20), marginBottom: g(24, 20) }, ">:first-child": { marginTop: "0" }, ">:last-child": { marginBottom: "0" } }), d(b, e, i),], "@layer components": c({}, f(e.theme("fontSize", "base")), { color: "var(--tw-prose-body)", maxWidth: "theme(max-w.prose, 65ch)" }) }),],] } } })(twind)
this.twind.presetTailwindForms = (function (a, b, c) { "use strict"; var d; const e = function (a) { if (a && a.__esModule) return a; const b = Object.create(null); if (a) { for (const c in a) if ("default" !== c) { const d = Object.getOwnPropertyDescriptor(a, c); Object.defineProperty(b, c, d.get ? d : { enumerable: !0, get: () => a[c] }) } } return b.default = a, b }(b), f = (d = c) && d.__esModule ? d : { default: d }, [g, h] = f.default.fontSize.base, { spacing: i, borderWidth: j, borderRadius: k } = f.default, l = [{ b: ["[type='text']", "[type='email']", "[type='url']", "[type='password']", "[type='number']", "[type='date']", "[type='datetime-local']", "[type='month']", "[type='search']", "[type='tel']", "[type='time']", "[type='week']", "[multiple]", "textarea", "select",], c: ["form-input", "form-textarea", "form-select", "form-multiselect"], s: ({ theme: b }) => ({ appearance: "none", "background-color": "#fff", "border-color": a.toColorValue(b("colors.gray.500", e.gray[500])), "border-width": j.DEFAULT, "border-radius": k.none, "padding-top": i[2], "padding-right": i[3], "padding-bottom": i[2], "padding-left": i[3], "font-size": g, "line-height": h, "--tw-shadow": "0 0 #0000", "&:focus": { outline: "2px solid transparent", "outline-offset": "2px", "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": "0px", "--tw-ring-offset-color": "#fff", "--tw-ring-color": a.toColorValue(b("colors.blue.600", e.blue[600])), "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)", "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)", "border-color": a.toColorValue(b("colors.blue.600", e.blue[600])) } }) }, { b: ["input", "textarea"], c: ["form-input", "form-textarea"], s: ({ theme: b }) => ({ "&::placeholder": { color: a.toColorValue(b("colors.gray.500", e.gray[500])), opacity: "1" } }) }, { b: [""], c: ["form-input"], s: { "&::-webkit-datetime-edit-fields-wrapper": { padding: "0" }, "&::-webkit-date-and-time-value": { "min-height": "1.5em" } } }, { b: ["select"], c: ["form-select"], s: ({ theme: b }) => ({ "background-image": `url("${n(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a.toColorValue(b("colors.gray.500", e.gray[500]))}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`, "background-position": `right ${i[2]} center`, "background-repeat": "no-repeat", "background-size": "1.5em 1.5em", "padding-right": i[10], "color-adjust": "exact" }) }, { b: ["[multiple]"], s: { "background-image": "initial", "background-position": "initial", "background-repeat": "unset", "background-size": "initial", "padding-right": i[3], "color-adjust": "unset" } }, { b: ["[type='checkbox']", "[type='radio']"], c: ["form-checkbox", "form-radio"], s: ({ theme: b }) => ({ appearance: "none", padding: "0", "color-adjust": "exact", display: "inline-block", "vertical-align": "middle", "background-origin": "border-box", "user-select": "none", "flex-shrink": "0", height: i[4], width: i[4], color: a.toColorValue(b("colors.blue.600", e.blue[600])), "background-color": "#fff", "border-color": a.toColorValue(b("colors.gray.500", e.gray[500])), "border-width": j.DEFAULT, "--tw-shadow": "0 0 #0000", "&:focus": { outline: "2px solid transparent", "outline-offset": "2px", "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": "2px", "--tw-ring-offset-color": "#fff", "--tw-ring-color": a.toColorValue(b("colors.blue.600", e.blue[600])), "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)", "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)" }, "&:checked": { "border-color": "transparent", "background-color": "currentColor", "background-size": "100% 100%", "background-position": "center", "background-repeat": "no-repeat", "&:hover,&:focus": { "border-color": "transparent", "background-color": "currentColor" } } }) }, { b: ["[type='checkbox']"], c: ["form-checkbox"], s: { "border-radius": k.none, "&:checked": { "background-image": `url("${n("<svg viewBox=\"0 0 16 16\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\"/></svg>")}")` }, "&:indeterminate": { "background-image": `url("${n("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 8h8\"/></svg>")}")`, "border-color": "transparent", "background-color": "currentColor", "background-size": "100% 100%", "background-position": "center", "background-repeat": "no-repeat", "&:hover,&:focus": { "border-color": "transparent", "background-color": "currentColor" } } } }, { b: ["[type='radio']"], c: ["form-radio"], s: { "border-radius": "100%", "&:checked": { "background-image": `url("${n("<svg viewBox=\"0 0 16 16\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"3\"/></svg>")}")` } } }, { b: ["[type='file']"], s: { background: "unset", "border-color": "inherit", "border-width": "0", "border-radius": "0", padding: "0", "font-size": "unset", "line-height": "inherit", "&:focus": { outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"] } } },]; function m(a) { switch (a) { case "%20": return " "; case "%3D": return "="; case "%3A": return ":"; case "%2F": return "/"; default: return a.toLowerCase() } } function n(a) { return "data:image/svg+xml," + encodeURIComponent(a.trim().replace(/\s+/g, " ").replace(/"/g, "'")).replace(/%[\dA-F]{2}/g, m) } return function ({ strategy: a } = {}) { return "class" == a ? { rules: [["(" + l.map(a => a.c).filter(Boolean).join("|") + ")", (a, b) => ({ "@layer base": l.filter(b => { var c; return null === (c = b.c) || void 0 === c ? void 0 : c.includes(a[1]) }).map(({ c: a, s: c }) => ({ ["" + a.map(a => "." + b.e(b.h(a)))]: "function" == typeof c ? c(b) : c })) }),],] } : { preflight(a) { const b = {}; for (const { b: c, s: d } of l) b["" + c] = "function" == typeof d ? d(a) : d; return b } } } })(twind, defaultTheme.colors, defaultTheme)

window.innerWidth;
let {
  colors,
  components,
  theme
} = {
  "name": "Versoly UI Default",
  "version": "1.0.0",
  "versoly-ui-version": "2.0.0",
  "author": "Versoly",
  "fonts": ["Inter", "Rubik"],
  "components": {
      "body": "font-sans bg-light",
      "html :where(a)": "text-primary hover:text-primary-800",
      "html :where(a.text-{color})": "{text=link.text} {hover:text=link.hover:text} {active:text=link.active:text}",
      "html :where(a.text-white)": "hover:text-gray-300",
      "html :where(a.text-dark)": "hover:text-gray-600",
      "h1, h2, h3, h4, h5, p": "mb-3 text-white",
      "h1, .h1": "text-[calc(1.375rem+1.5vw)] xl:text-5xl",
      "h2, .h2": "text-[calc(1.325rem+0.9vw)] xl:text-4xl",
      "h3, .h3": "text-[calc(1.3rem+0.6vw)] xl:text-3xl",
      "h4, .h4": "text-[calc(1.275rem+0.3vw)] xl:text-2xl",
      "h5, .h5": "text-xl",
      ".display-1": "text-[calc(1.625rem+4.5vw)] lg:text-[5rem] leading-[1.2] font-light",
      ".display-2": "text-[calc(1.575rem+3.9vw)] lg:text-[4.5rem] leading-[1.2] font-light",
      ".display-3": "text-[calc(1.525rem+3.3vw)] lg:text-[4rem] leading-[1.2] font-light",
      ".display-4": "text-[calc(1.475rem+2.7vw)] lg:text-[3.5rem] leading-[1.2] font-light",
      ".display-5": "text-[calc(1.425rem+2.1vw)] lg:text-[3rem] leading-[1.2] font-light",
      ".display-6": "text-[calc(1.375rem+1.6vw)] lg:text-[2.5rem] leading-[1.2] font-light",
      ".blockquote": "text-xl italic font-semibold text-neutral-900",
      ".blockquote-{color}": "p-4 {bg=alert.bg} border-l-[4px]  {border=DEFAULT.DEFAULT}",
      ".accordion-item": "flex flex-col bg-white rounded-lg p-4 mb-3",
      ".accordion-header": "flex items-center text-xl w-full cursor-pointer font-semibold text-dark hover:text-primary-700 transition-all duration-300 after:transition after:duration-300 after:flex-shrink-0 after:w-5 after:h-5 after:ml-auto after:bg-arrow-down after:content-['']",
      ".accordion-header[aria-expanded=\"true\"]": "text-primary hover:text-primary-700 after:rotate-180",
      ".accordion-collapse": "transition-all duration-300",
      ".accordion-body": "py-3",
      ".alert": "flex flex-row rounded-md px-3 py-2 text-gray-700 bg-gray-100 transition-opacity duration-300",
      ".alert-{color}": "{text=alert.text} {bg=alert.bg}",
      ".badge": "inline-block px-2 py-0.5 rounded text-xs text-white font-semibold",
      ".badge-lg": "px-3 py-1 rounded text-sm text-white font-semibold",
      ".btn": "inline-flex flex-wrap items-center justify-center text-center cursor-pointer select-none transition duration-200 ease-in-out flex-shrink-0 font-semibold py-2 px-4 rounded-md disabled:opacity-80 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:no-underline border-0",
      ".btn-ani": "transform-all hover:-translate-y-0.5 duration-300 ease",
      ".btn-{color}": "{bg=DEFAULT.DEFAULT} {hover:bg=DEFAULT.hover:bg} {hover:text=DEFAULT.hover:text} {active:bg=DEFAULT.active:bg} {text=DEFAULT.text} {border=DEFAULT.DEFAULT} {hover:border=DEFAULT.hover:bg} {ring=DEFAULT.DEFAULT} {focus:ring=DEFAULT.active:bg}",
      ".btn-outline.btn-{color}": "bg-transparent {text=DEFAULT.DEFAULT} {hover:bg=DEFAULT.hover:bg} {active:bg=DEFAULT.active:bg} active:text-white hover:text-white {border=DEFAULT.DEFAULT} border {focus:ring=DEFAULT.active:bg}",
      ".btn-subtle.btn-{color}": "bg-transparent {bg=subtle.bg} {hover:bg=subtle.hover:bg} {hover:text=subtle.hover:text} {active:bg=subtle.active:bg} {text=DEFAULT.DEFAULT} border-0 {focus:ring=DEFAULT.active:bg}",
      ".btn-link.btn-{color}": "bg-transparent hover:bg-transparent active:bg-transparent border-transparent {text=link.text} {hover:text=link.hover:text} {active:text=link.active:text} border-0 hover:underline {focus:ring=DEFAULT.active:bg}",
      ".btn-ghost.btn-{color}": "bg-transparent {hover:bg=ghost.hover:bg} {hover:text=ghost.hover:text} {active:bg=ghost.active:bg} {text=DEFAULT.DEFAULT} border-0 {focus:ring=DEFAULT.active:bg}",
      ".btn-ghost.btn-light:not(.c)": "text-gray-900",
      ".btn-xs, .btn-group-xs>.btn": "py-1 px-1 text-xs",
      ".btn-sm, .btn-group-sm>.btn": "py-1 px-2 text-sm",
      ".btn-lg, .btn-group-lg>.btn": "py-3 px-5 text-lg",
      ".btn-xl, .btn-group-xl>.btn": "py-4 px-6 text-xl",
      ".btn-group": "inline-flex",
      ".btn-group .btn": "rounded-none first:rounded-l-md last:rounded-r-md",
      ".btn-group > .btn-outline:not(:first-child)": "border-l-0 border-r-[1px]",
      ".pagination > .btn": "px-3 py-1",
      ".btn-outline.btn-{color}[aria-current=\"page\"]": "{bg=DEFAULT.DEFAULT} {text=DEFAULT.text}",
      ".btn-ghost.btn-{color}[aria-current=\"page\"]": "{hover:text=ghost.hover:text} {bg=ghost.hover:bg} {text=DEFAULT.DEFAULT}",
      ".modal": "fixed left-0 top-0 w-screen h-screen overflow-auto z-50 transition-opacity duration-500 opacity-0",
      ".modal-bg": "fixed w-screen h-screen left-0 top-0 z-30 pt-16 bg-gray-900 overflow-auto transition-opacity duration-500 opacity-50",
      "html :where(.modal-content)": "relative m-auto mt-16 bg-gray-100 shadow-lg z-40 max-w-md",
      ".modal-lg": "max-w-screen-md",
      ".modal-sm": "max-w-sm",
      ".modal-xl": "max-w-screen-xl",
      ".disabled": "opacity-80 pointer-events-none",
      ".form-checkbox": "rounded border-primary-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50",
      ".form-checkbox[type=\"checkbox\"]": "rounded",
      ".form-radio[type=\"radio\"]": "text-primary-600 ring-offset-2 focus:ring-2 focus:ring-primary-300",
      ".form-input": "block mt-0 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50",
      ".form-select": "block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50",
      ".form-input-sm": "px-2 py-1 text-sm",
      ".form-input-lg": "px-4 py-2 text-lg",
      ".form-select-sm": "pl-2 py-1 text-sm",
      ".form-select-lg": "pl-4 py-2 text-lg",
      ".navbar": "z-20 py-3 relative",
      ".navbar > .container-fluid, .navbar > .container": "flex flex-wrap justify-between md:flex-nowrap px-3 md:px-5",
      ".navbar-dark .navbar-btn": "focus:ring-white",
      ".navbar-btn": "w-6 mr-5 cursor-pointer select-none rounded md:hidden",
      ".navbar-brand": "flex flex-row items-center space-x-3 ml-5 md:ml-0 text-primary font-bold text-xl",
      ".navbar-col": "flex flex-col items-center mt-3 space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:mt-0",
      ".navbar-row": "hidden w-screen items-center md:flex md:flex-grow md:justify-between md:w-auto md:ml-4 transition-all transform duration-300 opacity-0 h-0 md:h-auto md:opacity-100 !md:h-auto md:overflow-visible",
      ".navbar-row.show": "opacity-100",
      ".dropdown-menu": "absolute hidden transition duration-200 opacity-0 w-max py-2 bg-white border border-gray-300 rounded mt-2 min-w-[160px]",
      ".dropdown-item": "bg-transparent py-1.5 px-4 hover:text-primary-800 focus:text-primary-800 hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus:shadow-outline",
      ".dropdown-menu.show": "opacity-100 block",
      "[data-toggle=\"dropdown\"]": "flex ml-4 items-center gap-x-1 after:flex-shrink-0 after:w-4 after:h-4 after:bg-caret-down after:content-[''] after:bg-no-repeat",
      "[data-popper-arrow]::before": "content-[''] rotate-[45deg] absolute h-4 w-4 bg-white border-l border-t border-gray-300 rounded-tl",
      "[data-popper-placement^='top'] > [data-popper-arrow]": "-bottom-2",
      "[data-popper-placement^='bottom'] > [data-popper-arrow]": "-top-2",
      "[data-popper-placement^='left'] > [data-popper-arrow]": "-right-2",
      "[data-popper-placement^='right'] > [data-popper-arrow]": "-left-2",
      ".container": "override:w-full override:max-w-full override:lg:max-w-[calc(min(100vw-60px,1220px))] mx-auto px-5",
      ".container-fluid": "override:w-full override:max-w-full mx-auto px-5",
      ".row": "flex flex-wrap flex-row -mx-5",
      ".col": "relative w-full px-5",
      ".progress": "flex w-full overflow-hidden bg-gray-200 rounded-full h-2.5",
      ".progress-bar": "h-full",
      ".progress-sm": "h-1.5",
      ".progress-lg": "h-4",
      ".progress-xl": "h-6",
      ".card": "relative flex flex-col overflow-hidden shadow-md rounded-md bg-white",
      ".card-body": "p-5 flex-grow",
      ".card-header": "px-5 py-3 bg-gray-100",
      ".card-footer": "px-5 py-3 bg-gray-100",
      ".tab-list": "flex flex-wrap gap-x-2 mb-2 select-none",
      ".tab-content": "py-2",
      ".tab-pane": "",
      ".tab": "px-4 py-2 border-b-2 hover:text-primary ring-0 focus:outline-none",
      ".tab[aria-selected=\"true\"]": "border-primary text-primary",
      ".tab-list-underline": "border-b-2 border-gray-300",
      ".tab-underline": "px-3 py-2 text-muted hover:text-primary focus:outline-none",
      ".tab-underline[aria-selected=\"true\"]": "-mb-1 border-0 border-b-2 border-primary text-primary",
      ".table": "min-w-full",
      "html :where(.table>thead)": "bg-gray-50",
      "html :where(.table>thead>tr>th)": "py-3 px-4 text-xs font-semibold text-left text-gray-700",
      ".table>tbody>tr": "bg-white border-b",
      "html :where(.table>tbody>tr>td)": "py-3 px-4 text-sm text-gray-900",
      ".table-sm>thead>tr>th": "py-1",
      ".table-sm>tbody>tr>td": "py-1",
      ".table-striped>thead>tr": "bg-gray-50 border-b border-gray-300",
      ".table-striped>tbody>tr": "even:bg-gray-100",
      ".table-hover>tbody>tr": "hover:bg-gray-200",
      ".prose > blockquote": "border-l-4 border-gray-600 my-3 py-3 pl-4 text-xl -ml-5",
      ".prose a": "text-primary hover:text-primary-700",
      ".prose ul ul": "list-disc",
      ".prose ul ul ul": "list-[square]",
      ".prose h4": "text-lg",
      ".fa-ul": "ml-6",
      ".tooltip": "hidden absolute invisible top-0 left-0 bg-dark text-white font-normal py-2 px-3 rounded-lg shadow-sm text-sm pointer-events-none opacity-0 transition-opacity duration-300",
      ".tooltip-arrow": "absolute bg-dark w-2 h-2 rotate-45",
      ".test2": "py-2",
      ".test": "py-2"
  },
  "colors": {
      "primary": {
          "DEFAULT": {
              "DEFAULT": "brink-pink-600",
              "hover:bg": "brink-pink-900",
              "active:bg": "brink-pink-900",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "brink-pink-100",
              "active:bg": "brink-pink-200",
              "hover:text": "brink-pink-900"
          },
          "subtle": {
              "bg": "brink-pink-100",
              "hover:bg": "brink-pink-200",
              "active:bg": "brink-pink-300",
              "hover:text": "brink-pink-900"
          },
          "link": {
              "text": "brink-pink-600",
              "hover:text": "brink-pink-900",
              "active:text": "brink-pink-1000"
          },
          "alert": {
              "bg": "brink-pink-50",
              "text": "brink-pink-600"
          }
      },
      "secondary": {
          "DEFAULT": {
              "DEFAULT": "pink-600",
              "hover:bg": "pink-700",
              "active:bg": "pink-800",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "pink-100",
              "active:bg": "pink-200",
              "hover:text": "pink-700"
          },
          "subtle": {
              "bg": "pink-100",
              "hover:bg": "pink-200",
              "active:bg": "pink-300",
              "hover:text": "pink-700"
          },
          "link": {
              "text": "pink-600",
              "hover:text": "pink-800",
              "active:text": "pink-900"
          },
          "alert": {
              "bg": "pink-50",
              "text": "pink-600"
          }
      },
      "tertiary": {
          "DEFAULT": {
              "DEFAULT": "violet-600",
              "hover:bg": "violet-700",
              "active:bg": "violet-800",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "violet-100",
              "active:bg": "violet-200",
              "hover:text": "violet-700"
          },
          "subtle": {
              "bg": "violet-100",
              "hover:bg": "violet-200",
              "active:bg": "violet-300",
              "hover:text": "violet-700"
          },
          "link": {
              "text": "violet-600",
              "hover:text": "violet-800",
              "active:text": "violet-900"
          },
          "alert": {
              "bg": "violet-50",
              "text": "violet-600"
          }
      },
      "neutral": {
          "DEFAULT": {
              "DEFAULT": "slate-600",
              "hover:bg": "slate-700",
              "active:bg": "slate-800",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "slate-100",
              "active:bg": "slate-200",
              "hover:text": "slate-700"
          },
          "subtle": {
              "bg": "slate-100",
              "hover:bg": "slate-200",
              "active:bg": "slate-300",
              "hover:text": "slate-700"
          },
          "link": {
              "text": "slate-600",
              "hover:text": "slate-800",
              "active:text": "slate-900"
          },
          "alert": {
              "bg": "slate-50",
              "text": "slate-600"
          }
      },
      "success": {
          "DEFAULT": {
              "DEFAULT": "emerald-500",
              "hover:bg": "emerald-600",
              "active:bg": "emerald-700",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "emerald-100",
              "active:bg": "emerald-200",
              "hover:text": "emerald-600"
          },
          "subtle": {
              "bg": "emerald-100",
              "hover:bg": "emerald-200",
              "active:bg": "emerald-300",
              "hover:text": "emerald-600"
          },
          "link": {
              "text": "emerald-500",
              "hover:text": "emerald-700",
              "active:text": "emerald-800"
          },
          "alert": {
              "bg": "emerald-50",
              "text": "emerald-600"
          }
      },
      "info": {
          "DEFAULT": {
              "DEFAULT": "blue-400",
              "hover:bg": "blue-500",
              "active:bg": "blue-600",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "blue-100",
              "active:bg": "blue-200",
              "hover:text": "blue-500"
          },
          "subtle": {
              "bg": "blue-100",
              "hover:bg": "blue-200",
              "active:bg": "blue-300",
              "hover:text": "blue-500"
          },
          "link": {
              "text": "blue-400",
              "hover:text": "blue-600",
              "active:text": "blue-700"
          },
          "alert": {
              "bg": "blue-50",
              "text": "blue-600"
          }
      },
      "warning": {
          "DEFAULT": {
              "DEFAULT": "amber-500",
              "hover:bg": "amber-600",
              "active:bg": "amber-700",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "amber-100",
              "active:bg": "amber-200",
              "hover:text": "amber-600"
          },
          "subtle": {
              "bg": "amber-100",
              "hover:bg": "amber-200",
              "active:bg": "amber-300",
              "hover:text": "amber-600"
          },
          "link": {
              "text": "amber-500",
              "hover:text": "amber-700",
              "active:text": "amber-800"
          },
          "alert": {
              "bg": "amber-50",
              "text": "amber-600"
          }
      },
      "danger": {
          "DEFAULT": {
              "DEFAULT": "red-600",
              "hover:bg": "red-700",
              "active:bg": "red-800",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "hover:bg": "red-100",
              "active:bg": "red-200",
              "hover:text": "red-700"
          },
          "subtle": {
              "bg": "red-100",
              "hover:bg": "red-200",
              "active:bg": "red-300",
              "hover:text": "red-700"
          },
          "link": {
              "text": "red-600",
              "hover:text": "red-800",
              "active:text": "red-900"
          },
          "alert": {
              "bg": "red-50",
              "text": "red-600"
          }
      },
      "light": {
          "DEFAULT": {
              "DEFAULT": "gray-800",
              "hover:bg": "gray-200",
              "active:bg": "gray-300",
              "text": "gray-200",
              "hover:text": "gray-50"
          },
          "ghost": {
              "hover:bg": "gray-100",
              "active:bg": "gray-200",
              "hover:text": "gray-200"
          },
          "subtle": {
              "bg": "gray-100",
              "hover:bg": "gray-200",
              "active:bg": "gray-300",
              "hover:text": "gray-200"
          },
          "link": {
              "text": "gray-100",
              "hover:text": "gray-300",
              "active:text": "gray-400"
          },
          "alert": {
              "bg": "gray-50",
              "text": "gray-600"
          }
      },
      "dark": {
          "DEFAULT": {
              "DEFAULT": "gray-800",
              "hover:bg": "gray-900",
              "active:bg": "gray-800",
              "text": "white",
              "hover:text": "white"
          },
          "ghost": {
              "DEFAULT": "pink-100",
              "hover:bg": "pink-200",
              "hover:text": "gray-800"
          },
          "link": {
              "text": "gray-800",
              "hover:text": "gray-900",
              "active:text": "gray-1000"
          },
          "subtle": {
              "bg": "gray-100",
              "hover:bg": "gray-200",
              "active:bg": "gray-300",
              "hover:text": "gray-900"
          }
      },
      "white": {
          "DEFAULT": {
              "DEFAULT": "white",
              "text": "black"
          }
      },
      "black": {
          "DEFAULT": {
              "DEFAULT": "black",
              "text": "white"
          }
      },
      "muted": {
          "DEFAULT": {
              "DEFAULT": "gray-500"
          }
      }
  },
  "theme": {
      "extend": {
          "fontFamily": {
              "sans": "\"Rubik\"",
              "serif": "\"Rubik\",ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif",
              "mono": "\"Rubik\",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
          },
          "spacing": {
              "112": "28rem",
              "128": "32rem",
              "144": "36rem",
              "160": "40rem",
              "192": "48rem"
          },
          "colors": {
              "primary": {
                  "50": "#fff7f9",
                  "100": "#fff0f2",
                  "200": "#ffd8df",
                  "300": "#ffc1cb",
                  "400": "#ff93a4",
                  "500": "#ff8397",
                  "600": "#dda200",
                  "700": "#C27800",
                  "800": "#D49D00",
                  "900": "#F48500",
                  "DEFAULT": "#dda200"
              },
              "secondary": {
                  "50": "#fdf2f8",
                  "100": "#fce7f3",
                  "200": "#fbcfe8",
                  "300": "#f9a8d4",
                  "400": "#f472b6",
                  "500": "#ec4899",
                  "600": "#db2777",
                  "700": "#be185d",
                  "800": "#9d174d",
                  "900": "#831843",
                  "DEFAULT": "#db2777"
              },
              "tertiary": {
                  "50": "#f5f3ff",
                  "100": "#ede9fe",
                  "200": "#ddd6fe",
                  "300": "#c4b5fd",
                  "400": "#a78bfa",
                  "500": "#8b5cf6",
                  "600": "#7c3aed",
                  "700": "#6d28d9",
                  "800": "#5b21b6",
                  "900": "#4c1d95",
                  "DEFAULT": "#7c3aed"
              },
              "neutral": {
                  "50": "#f8fafc",
                  "100": "#f1f5f9",
                  "200": "#e2e8f0",
                  "300": "#cbd5e1",
                  "400": "#94a3b8",
                  "500": "#64748b",
                  "600": "#475569",
                  "700": "#334155",
                  "800": "#1e293b",
                  "900": "#0f172a",
                  "DEFAULT": "#475569"
              },
              "success": {
                  "50": "#ecfdf5",
                  "100": "#d1fae5",
                  "200": "#a7f3d0",
                  "300": "#6ee7b7",
                  "400": "#34d399",
                  "500": "#10b981",
                  "600": "#059669",
                  "700": "#047857",
                  "800": "#065f46",
                  "900": "#064e3b",
                  "DEFAULT": "#10b981"
              },
              "info": {
                  "50": "#eff6ff",
                  "100": "#dbeafe",
                  "200": "#bfdbfe",
                  "300": "#93c5fd",
                  "400": "#60a5fa",
                  "500": "#3b82f6",
                  "600": "#2563eb",
                  "700": "#1d4ed8",
                  "800": "#1e40af",
                  "900": "#1e3a8a",
                  "DEFAULT": "#60a5fa"
              },
              "warning": {
                  "50": "#fffbeb",
                  "100": "#fef3c7",
                  "200": "#fde68a",
                  "300": "#fcd34d",
                  "400": "#fbbf24",
                  "500": "#f59e0b",
                  "600": "#d97706",
                  "700": "#b45309",
                  "800": "#92400e",
                  "900": "#78350f",
                  "DEFAULT": "#f59e0b"
              },
              "danger": {
                  "50": "#fef2f2",
                  "100": "#fee2e2",
                  "200": "#fecaca",
                  "300": "#fca5a5",
                  "400": "#f87171",
                  "500": "#ef4444",
                  "600": "#dc2626",
                  "700": "#b91c1c",
                  "800": "#991b1b",
                  "900": "#7f1d1d",
                  "DEFAULT": "#dc2626"
              },
              "light": {
                  "50": "#f9fafb",
                  "100": "#f3f4f6",
                  "200": "#e5e7eb",
                  "300": "#d1d5db",
                  "400": "#9ca3af",
                  "500": "#6b7280",
                  "600": "#4b5563",
                  "700": "#374151",
                  "800": "#1f2937",
                  "900": "#111827",
                  "DEFAULT": "#1f2937"
              },
              "dark": {
                  "50": "#f9fafb",
                  "100": "#f3f4f6",
                  "200": "#e5e7eb",
                  "300": "#d1d5db",
                  "400": "#9ca3af",
                  "500": "#6b7280",
                  "600": "#4b5563",
                  "700": "#374151",
                  "800": "#1f2937",
                  "900": "#111827",
                  "DEFAULT": "#1f2937"
              },
              "white": "white",
              "black": "black",
              "muted": "#6b7280",
              "brink-pink": {
                  "50": "#fff7f9",
                  "100": "#fff0f2",
                  "200": "#ffd8df",
                  "300": "#ffc1cb",
                  "400": "#ff93a4",
                  "500": "#ff8397",
                  "600": "#dda200",
                  "700": "#C27800",
                  "800": "#D49D00",
                  "900": "#F48500",
                  "DEFAULT": "#dda200"
              }
          },
          "backgroundImage": {
              "arrow-down": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
              "caret-down": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentFill' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");"
          }
      }
  },
  "updatedAt": 1663949594468
};

components = {
    ...components,
    ".bg-{color}": "{bg=DEFAULT.DEFAULT}",
    ".border-{color}": "{border=DEFAULT.DEFAULT}",
    ".ring-{color}": "{ring=DEFAULT.DEFAULT}",
    ".text-{color}": "{text=DEFAULT.DEFAULT}",
    ".bg-{color}.btn": "{bg=DEFAULT.DEFAULT}",
    ".text-{color}.btn": "{text=DEFAULT.DEFAULT}",
    ".mc0": "p-2 relative lg:max-w-sm",
    ".mcw": "w-full h-full",
    ".mc1": "relative overflow-hidden form-card min-w-xs w-96 lg:w-72 h-28 rounded-md bg-blend-overlay block",
    ".mc2": "absolute inset-0 overflow-hidden form-card bg-cover bg-center w-full h-40 lg:h-36 rounded-md transform filter blur-2xl transition duration-500 ease-in-out hover:translate-y-1 block",
    ".mc3": "w-full h-full absolute object-cover inset-0 bg-black z-20",
    ".mc4": "gradient-circle w-24 h-24 absolute right-2 top-2 z-30",
    ".mc5": "w-full h-full z-40 absolute inset-0",
    ".mc6": "mx-auto flex flex-col lg:flex-row justify-start w-full h-full",
    ".mc7": "flex items-center p-2 w-full lg:w-36",
    ".mc8": "w-20 h-20 mx-auto z-30 my-0 rounded-md",
    ".mc9": "flex flex-col w-full h-20 my-auto justify-start items-center text-center relative lg:text-left lg:items-start",
    ".mc10": "absolute mx-auto -bottom-2 lg:right-2",
    ".mc11": "text-center p-2 w-24",
    ".mc12": "block w-full transition duration-300 transform hover:translate-y-1 p-2 ease-in-out font-montserrat flex items-center flex-wrap bg-opacity-50 rounded-md hover:text-white btn",
    ".mc13": "text-center text-sm mx-auto",
    ".mc14": "overflow-hidden font-bold text-md p-px pr-2",
    ".mc15": "text-xs p-px",
    ".mt1": "display-6 text-center font-semibold mb-12",
    ".mh1": "bg-neutral-700 static pt-0 py-1",
    ".mf0": "bg-dark py-12",
    ".mf1": "text-center -25 -mt-32",
    ".mf2": "block h5 mb-6 font-semibold text-white",
    ".mf3": "d-inline-block inline-block text-primary",
    ".mf4": "flex flex-col md:flex-row justify-center mx-auto mb-6 gap-y-3",
    ".mf5": "px-4 no-underline text-white",
    ".mf6": "text-center text-white text-sm mb-6",
    ".mf7": "text-white mx-2",
    ".mf8": "position-fixed fixed px-2 z-[1000]",
    ".mf9": "btn btn-dark btn-sm px-2",
    '.mn0': 'top-0 navbar-dark bg-gray-900 sticky',
    '.mn1': 'navbar-btn',
    '.mn2': 'sr-only',
    '.mn3': 'block h-1 rounded-full bg-white',
    '.mn4': 'block h-1 mt-1 rounded-full bg-white',
    '.mn5': 'navbar-brand text-white',
    '.mn6': 'flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent md:border-0 hover:text-primary md:p-0 md:w-auto text-white',
    '.mn7': 'nav-link text-white font-semibold',
    '.mn8': 'ml-1 w-4 h-4',
    '.mn9': 'hidden z-10 w-44 bg-dark rounded divide-y divide-gray-100 shadow',
    '.mn10': 'py-1 text-sm text-gray-700',
    '.mn11': 'block py-2 px-4 hover:bg-gray-700 hover:text-primary text-gray-300',
    '.mn12': 'block py-2 px-4 hover:bg-danger hover:text-white text-danger',
    '.mn13': 'nav-link text-white font-semibold',
    '.mn14': '',
    '.mn15': '',
    '.mn16': '',
    '.mn17': '',
    '.mn18': '',
    '.mn19': '',
    '.mn20': ''
    //"": "",
}

let rules = [
  ["container", components['.container'].replaceAll('override:', '')],
  ["container-fluid", components['.container-fluid'].replaceAll('override:', '')],
]
let preflight = {}

Object.entries(components).forEach(([cKey, cValue]) => {

  if (!cKey.includes('{color}')) {
    preflight['' + cKey] = cValue
    return
  }

  Object.entries(colors).forEach(([key, value]) => {
    let compClasses = ''
    cValue.split(' ').forEach(classValue => {
      classValue = classValue.trim()

      if (!classValue.match(/{(.*?)}/g)) {
        compClasses += ' ' + classValue
        return
      }

      let [k, v] = classValue.slice(1, classValue.length - 1).split('=')

      if (!v) {
        return
      }

      if (v.includes("'")) {
        compClasses += ' ' + k + '-' + '[' + v.slice(1, v.length - 1) + ']'
        return
      }

      let computedV = value
      v.split('.').forEach(vSplit => {
        computedV = computedV[vSplit] || computedV
      })

      if (!computedV.includes) {
        return
      }
      compClasses += ' ' + k + '-' + computedV
    })

    if (['.alert-{color}', '.btn-{color}'].includes(cKey)) {
      rules = [
        ...rules,
        [cKey.replaceAll('{color}', key).replace('.', ''), compClasses]
      ]
      return
    }
    preflight[cKey.replaceAll('{color}', key)] = compClasses
  })
})




preflight = Object.entries(preflight)


preflight = preflight.map(([key, value]) => {
  if (value.includes('override')) {
    return ''
  }
  if (!value) {
    return ''
  }
  return key + ' {\n    @apply ' + value + ';\n  }'
}).filter(Boolean)




const { css, setup } = twind
const { presetTailwind, presetAutoprefix, presetTypography, presetTailwindForms } = this.twind


preflight = css(preflight.join(''))

setup({
  preflight,
  presets: [
    presetTailwind(),
    presetAutoprefix(),
    presetTypography(),
    presetTailwindForms(),
  ],
  theme,
  mode: "silent",
  rules
});


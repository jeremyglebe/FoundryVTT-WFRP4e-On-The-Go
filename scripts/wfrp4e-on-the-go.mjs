//#region src/module/constants.ts
var e = "wfrp4e-on-the-go", t = "WFRP On The Go", n = "wfrp4e";
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/* @__NO_SIDE_EFFECTS__ */
function r(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var i = {}, a = [], o = () => {}, s = () => !1, c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), l = (e) => e.startsWith("onUpdate:"), u = Object.assign, d = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, f = Object.prototype.hasOwnProperty, p = (e, t) => f.call(e, t), m = Array.isArray, h = (e) => w(e) === "[object Map]", g = (e) => w(e) === "[object Set]", _ = (e) => w(e) === "[object Date]", v = (e) => typeof e == "function", y = (e) => typeof e == "string", b = (e) => typeof e == "symbol", x = (e) => typeof e == "object" && !!e, S = (e) => (x(e) || v(e)) && v(e.then) && v(e.catch), C = Object.prototype.toString, w = (e) => C.call(e), ee = (e) => w(e).slice(8, -1), te = (e) => w(e) === "[object Object]", ne = (e) => y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, re = /* @__PURE__ */ r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ie = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ae = /-\w/g, T = ie((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, se = ie((e) => e.replace(oe, "-$1").toLowerCase()), ce = ie((e) => e.charAt(0).toUpperCase() + e.slice(1)), E = ie((e) => e ? `on${ce(e)}` : ""), D = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ue = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function me(e) {
	if (m(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = y(r) ? ve(r) : me(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (y(e) || x(e)) return e;
}
var he = /;(?![^(]*\))/g, ge = /:([^]+)/, _e = /\/\*[^]*?\*\//g;
function ve(e) {
	let t = {};
	return e.replace(_e, "").split(he).forEach((e) => {
		if (e) {
			let n = e.split(ge);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ye(e) {
	let t = "";
	if (y(e)) t = e;
	else if (m(e)) for (let n = 0; n < e.length; n++) {
		let r = ye(e[n]);
		r && (t += r + " ");
	}
	else if (x(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var be = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xe = /* @__PURE__ */ r(be);
be + "";
function Se(e) {
	return !!e || e === "";
}
function Ce(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = O(e[r], t[r]);
	return n;
}
function O(e, t) {
	if (e === t) return !0;
	let n = _(e), r = _(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = b(e), r = b(t), n || r) return e === t;
	if (n = m(e), r = m(t), n || r) return n && r ? Ce(e, t) : !1;
	if (n = x(e), r = x(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !O(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function we(e, t) {
	return e.findIndex((e) => O(e, t));
}
var Te = (e) => !!(e && e.__v_isRef === !0), k = (e) => y(e) ? e : e == null ? "" : m(e) || x(e) && (e.toString === C || !v(e.toString)) ? Te(e) ? k(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => Te(t) ? Ee(e, t.value) : h(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : g(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : b(t) ? De(t) : x(t) && !m(t) && !te(t) ? String(t) : t, De = (e, t = "") => b(e) ? `Symbol(${e.description ?? t})` : e, A, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function ke() {
	return A;
}
var j, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, qe(this), Re(this);
		let e = j, t = M;
		j = this, M = !0;
		try {
			return this.fn();
		} finally {
			ze(this), j = e, M = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Pe, Pe = e;
		return;
	}
	e.next = Ne, Ne = e;
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Je) || (e.globalVersion = Je, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = M;
	j = e, M = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, M = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var M = !0, We = [];
function Ge() {
	We.push(M), M = !1;
}
function Ke() {
	let e = We.pop();
	M = e === void 0 ? !0 : e;
}
function qe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var Je = 0, Ye = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Xe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !M || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Ye(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, Ze(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Je++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Ze(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ze(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (M && j) {
		let t = Qe.get(e);
		t || Qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Xe()), r.map = t, r.key = n), r.track();
	}
}
function nt(e, t, n, r, i, a) {
	let o = Qe.get(e);
	if (!o) {
		Je++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = m(e), a = i && ne(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === tt || !b(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(tt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get($e)), h(e) && s(o.get(et)));
				break;
			case "delete":
				i || (s(o.get($e)), h(e) && s(o.get(et)));
				break;
			case "set":
				h(e) && s(o.get($e));
				break;
		}
	}
	Le();
}
function rt(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e ? t : (N(t, "iterate", tt), /* @__PURE__ */ P(e) ? t : t.map(I));
}
function it(e) {
	return N(e = /* @__PURE__ */ F(e), "iterate", tt), e;
}
function at(e, t) {
	return /* @__PURE__ */ Ht(e) ? Gt(/* @__PURE__ */ Vt(e) ? I(t) : t) : I(t);
}
var ot = {
	__proto__: null,
	[Symbol.iterator]() {
		return st(this, Symbol.iterator, (e) => at(this, e));
	},
	concat(...e) {
		return rt(this).concat(...e.map((e) => m(e) ? rt(e) : e));
	},
	entries() {
		return st(this, "entries", (e) => (e[1] = at(this, e[1]), e));
	},
	every(e, t) {
		return lt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return lt(this, "filter", e, t, (e) => e.map((e) => at(this, e)), arguments);
	},
	find(e, t) {
		return lt(this, "find", e, t, (e) => at(this, e), arguments);
	},
	findIndex(e, t) {
		return lt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return lt(this, "findLast", e, t, (e) => at(this, e), arguments);
	},
	findLastIndex(e, t) {
		return lt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return lt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return dt(this, "includes", e);
	},
	indexOf(...e) {
		return dt(this, "indexOf", e);
	},
	join(e) {
		return rt(this).join(e);
	},
	lastIndexOf(...e) {
		return dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return lt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ft(this, "pop");
	},
	push(...e) {
		return ft(this, "push", e);
	},
	reduce(e, ...t) {
		return ut(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ut(this, "reduceRight", e, t);
	},
	shift() {
		return ft(this, "shift");
	},
	some(e, t) {
		return lt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ft(this, "splice", e);
	},
	toReversed() {
		return rt(this).toReversed();
	},
	toSorted(e) {
		return rt(this).toSorted(e);
	},
	toSpliced(...e) {
		return rt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ft(this, "unshift", e);
	},
	values() {
		return st(this, "values", (e) => at(this, e));
	}
};
function st(e, t, n) {
	let r = it(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ P(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
	let o = it(e), s = o !== e && !/* @__PURE__ */ P(e), c = o[t];
	if (c !== ct[t]) {
		let t = c.apply(e, a);
		return s ? I(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, at(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
	let i = it(e), a = i !== e && !/* @__PURE__ */ P(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = at(e, t)), n.call(this, t, at(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? at(e, c) : c;
}
function dt(e, t, n) {
	let r = /* @__PURE__ */ F(e);
	N(r, "iterate", tt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ut(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
	Ge(), Ie();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Le(), Ke(), r;
}
var pt = /* @__PURE__ */ r("__proto__,__v_isRef,__isVue"), mt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(b));
function ht(e) {
	b(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = m(e);
		if (!r) {
			let e;
			if (a && (e = ot[t])) return e;
			if (t === "hasOwnProperty") return ht;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ L(e) ? e : n);
		if ((b(t) ? mt.has(t) : pt(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ L(o)) {
			let e = a && ne(t) ? o : o.value;
			return r && x(e) ? /* @__PURE__ */ zt(e) : e;
		}
		return x(o) ? r ? /* @__PURE__ */ zt(o) : /* @__PURE__ */ Lt(o) : o;
	}
}, _t = class extends gt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = m(e) && ne(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ht(i);
			if (!/* @__PURE__ */ P(n) && !/* @__PURE__ */ Ht(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !a && /* @__PURE__ */ L(i) && !/* @__PURE__ */ L(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : p(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ L(e) ? e : r);
		return e === /* @__PURE__ */ F(r) && (o ? D(n, i) && nt(e, "set", t, n, i) : nt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = p(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && nt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!b(t) || !mt.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", m(e) ? "length" : $e), Reflect.ownKeys(e);
	}
}, vt = class extends gt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e) => e, Ct = (e) => Reflect.getPrototypeOf(e);
function wt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ F(i), o = h(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), d = n ? St : t ? Gt : I;
		return !t && N(a, "iterate", c ? et : $e), u(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Tt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Et(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ F(r), a = /* @__PURE__ */ F(n);
			e || (D(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = Ct(i), s = t ? St : e ? Gt : I;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ F(t), "iterate", $e), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (D(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? St : e ? Gt : I;
			return !e && N(o, "iterate", $e), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return u(n, e ? {
		add: Tt("add"),
		set: Tt("set"),
		delete: Tt("delete"),
		clear: Tt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ F(this), r = Ct(n), i = /* @__PURE__ */ F(e), a = !t && !/* @__PURE__ */ P(e) && !/* @__PURE__ */ Ht(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), nt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ P(n) && !/* @__PURE__ */ Ht(n) && (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ F(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && nt(r, "set", e, n, s) : nt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ F(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ F(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && nt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ F(this), t = e.size !== 0, n = e.clear();
			return t && nt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = wt(r, e, t);
	}), n;
}
function Dt(e, t) {
	let n = Et(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(p(n, r) && r in t ? n : t, r, i);
}
var Ot = { get: /* @__PURE__ */ Dt(!1, !1) }, kt = { get: /* @__PURE__ */ Dt(!1, !0) }, At = { get: /* @__PURE__ */ Dt(!0, !1) }, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function It(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Ft(ee(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Lt(e) {
	return /* @__PURE__ */ Ht(e) ? e : Bt(e, !1, yt, Ot, jt);
}
/* @__NO_SIDE_EFFECTS__ */
function Rt(e) {
	return Bt(e, !1, xt, kt, Mt);
}
/* @__NO_SIDE_EFFECTS__ */
function zt(e) {
	return Bt(e, !0, bt, At, Nt);
}
function Bt(e, t, n, r, i) {
	if (!x(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = It(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return /* @__PURE__ */ Ht(e) ? /* @__PURE__ */ Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Ht(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function P(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Ut(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function F(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ F(t) : e;
}
function Wt(e) {
	return !p(e, "__v_skip") && Object.isExtensible(e) && ue(e, "__v_skip", !0), e;
}
var I = (e) => x(e) ? /* @__PURE__ */ Lt(e) : e, Gt = (e) => x(e) ? /* @__PURE__ */ zt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function L(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function R(e) {
	return Kt(e, !1);
}
function Kt(e, t) {
	return /* @__PURE__ */ L(e) ? e : new qt(e, t);
}
var qt = class {
	constructor(e, t) {
		this.dep = new Xe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : I(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ P(e) || /* @__PURE__ */ Ht(e);
		e = n ? e : /* @__PURE__ */ F(e), D(e, t) && (this._rawValue = e, this._value = n ? e : I(e), this.dep.trigger());
	}
};
function Jt(e) {
	return /* @__PURE__ */ L(e) ? e.value : e;
}
var Yt = {
	get: (e, t, n) => t === "__v_raw" ? e : Jt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ L(i) && !/* @__PURE__ */ L(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Xt(e) {
	return /* @__PURE__ */ Vt(e) ? e : new Proxy(e, Yt);
}
var Zt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Xe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Je - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function Qt(e, t, n = !1) {
	let r, i;
	return v(e) ? r = e : (r = e.get, i = e.set), new Zt(r, i, n);
}
var $t = {}, en = /* @__PURE__ */ new WeakMap(), tn = void 0;
function nn(e, t = !1, n = tn) {
	if (n) {
		let t = en.get(n);
		t || en.set(n, t = []), t.push(e);
	}
}
function rn(e, t, n = i) {
	let { immediate: r, deep: a, once: s, scheduler: c, augmentJob: l, call: u } = n, f = (e) => a ? e : /* @__PURE__ */ P(e) || a === !1 || a === 0 ? an(e, 1) : an(e), p, h, g, _, y = !1, b = !1;
	if (/* @__PURE__ */ L(e) ? (h = () => e.value, y = /* @__PURE__ */ P(e)) : /* @__PURE__ */ Vt(e) ? (h = () => f(e), y = !0) : m(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Vt(e) || /* @__PURE__ */ P(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ L(e)) return e.value;
		if (/* @__PURE__ */ Vt(e)) return f(e);
		if (v(e)) return u ? u(e, 2) : e();
	})) : h = v(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (g) {
			Ge();
			try {
				g();
			} finally {
				Ke();
			}
		}
		let t = tn;
		tn = p;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			tn = t;
		}
	} : o, t && a) {
		let e = h, t = a === !0 ? Infinity : a;
		h = () => an(e(), t);
	}
	let x = ke(), S = () => {
		p.stop(), x && x.active && d(x.effects, p);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill($t) : $t, w = (e) => {
		if (!(!(p.flags & 1) || !p.dirty && !e)) if (t) {
			let e = p.run();
			if (a || y || (b ? e.some((e, t) => D(e, C[t])) : D(e, C))) {
				g && g();
				let n = tn;
				tn = p;
				try {
					let n = [
						e,
						C === $t ? void 0 : b && C[0] === $t ? [] : C,
						_
					];
					C = e, u ? u(t, 3, n) : t(...n);
				} finally {
					tn = n;
				}
			}
		} else p.run();
	};
	return l && l(w), p = new je(h), p.scheduler = c ? () => c(w, !1) : w, _ = (e) => nn(e, !1, p), g = p.onStop = () => {
		let e = en.get(p);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			en.delete(p);
		}
	}, t ? r ? w(!0) : C = p.run() : c ? c(w.bind(null, !0), !0) : p.run(), S.pause = p.pause.bind(p), S.resume = p.resume.bind(p), S.stop = S, S;
}
function an(e, t = Infinity, n) {
	if (t <= 0 || !x(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ L(e)) an(e.value, t, n);
	else if (m(e)) for (let r = 0; r < e.length; r++) an(e[r], t, n);
	else if (g(e) || h(e)) e.forEach((e) => {
		an(e, t, n);
	});
	else if (te(e)) {
		for (let r in e) an(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && an(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function on(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		sn(e, t, n);
	}
}
function z(e, t, n, r) {
	if (v(e)) {
		let i = on(e, t, n, r);
		return i && S(i) && i.catch((e) => {
			sn(e, t, n);
		}), i;
	}
	if (m(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(z(e[a], t, n, r));
		return i;
	}
}
function sn(e, t, n, r = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || i;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			Ge(), on(o, null, 10, [
				e,
				i,
				a
			]), Ke();
			return;
		}
	}
	cn(e, n, a, r, s);
}
function cn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var B = [], ln = -1, un = [], dn = null, fn = 0, pn = /* @__PURE__ */ Promise.resolve(), mn = null;
function hn(e) {
	let t = mn || pn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function gn(e) {
	let t = ln + 1, n = B.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = B[r], a = Sn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function _n(e) {
	if (!(e.flags & 1)) {
		let t = Sn(e), n = B[B.length - 1];
		!n || !(e.flags & 2) && t >= Sn(n) ? B.push(e) : B.splice(gn(t), 0, e), e.flags |= 1, vn();
	}
}
function vn() {
	mn ||= pn.then(Cn);
}
function yn(e) {
	m(e) ? un.push(...e) : dn && e.id === -1 ? dn.splice(fn + 1, 0, e) : e.flags & 1 || (un.push(e), e.flags |= 1), vn();
}
function bn(e, t, n = ln + 1) {
	for (; n < B.length; n++) {
		let t = B[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			B.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function xn(e) {
	if (un.length) {
		let e = [...new Set(un)].sort((e, t) => Sn(e) - Sn(t));
		if (un.length = 0, dn) {
			dn.push(...e);
			return;
		}
		for (dn = e, fn = 0; fn < dn.length; fn++) {
			let e = dn[fn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		dn = null, fn = 0;
	}
}
var Sn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Cn(e) {
	try {
		for (ln = 0; ln < B.length; ln++) {
			let e = B[ln];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), on(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; ln < B.length; ln++) {
			let e = B[ln];
			e && (e.flags &= -2);
		}
		ln = -1, B.length = 0, xn(e), mn = null, (B.length || un.length) && Cn(e);
	}
}
var V = null, wn = null;
function Tn(e) {
	let t = V;
	return V = e, wn = e && e.type.__scopeId || null, t;
}
function En(e, t = V, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ai(-1);
		let i = Tn(t), a;
		try {
			a = e(...n);
		} finally {
			Tn(i), r._d && Ai(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Dn(e, t) {
	if (V === null) return e;
	let n = da(V), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = i] = t[e];
		a && (v(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && an(o), r.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function On(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ge(), z(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ke());
	}
}
function kn(e, t) {
	if (X) {
		let n = X.provides, r = X.parent && X.parent.provides;
		r === n && (n = X.provides = Object.create(r)), n[e] = t;
	}
}
function An(e, t, n = !1) {
	let r = Xi();
	if (r || Fr) {
		let i = Fr ? Fr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && v(t) ? t.call(r && r.proxy) : t;
	}
}
var jn = /* @__PURE__ */ Symbol.for("v-scx"), Mn = () => An(jn);
function Nn(e, t, n) {
	return Pn(e, t, n);
}
function Pn(e, t, n = i) {
	let { immediate: r, deep: a, flush: s, once: c } = n, l = u({}, n), d = t && r || !t && s !== "post", f;
	if (na) {
		if (s === "sync") {
			let e = Mn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = o, e.resume = o, e.pause = o, e;
		}
	}
	let p = X;
	l.call = (e, t, n) => z(e, p, t, n);
	let m = !1;
	s === "post" ? l.scheduler = (e) => {
		U(e, p && p.suspense);
	} : s !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : _n(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = rn(e, t, l);
	return na && (f ? f.push(h) : d && h()), h;
}
function Fn(e, t, n) {
	let r = this.proxy, i = y(e) ? e.includes(".") ? In(r, e) : () => r[e] : e.bind(r, r), a;
	v(t) ? a = t : (a = t.handler, n = t);
	let o = $i(this), s = Pn(i, a.bind(r), n);
	return o(), s;
}
function In(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Ln = /* @__PURE__ */ Symbol("_vte"), Rn = (e) => e.__isTeleport, zn = /* @__PURE__ */ Symbol("_leaveCb");
function Bn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/* @__NO_SIDE_EFFECTS__ */
function Vn(e, t) {
	return v(e) ? /* @__PURE__ */ u({ name: e.name }, t, { setup: e }) : e;
}
function Hn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Un(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Wn = /* @__PURE__ */ new WeakMap();
function Gn(e, t, n, r, a = !1) {
	if (m(e)) {
		e.forEach((e, i) => Gn(e, t && (m(t) ? t[i] : t), n, r, a));
		return;
	}
	if (qn(r) && !a) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Gn(e, t, n, r.component.subTree);
		return;
	}
	let o = r.shapeFlag & 4 ? da(r.component) : r.el, c = a ? null : o, { i: l, r: u } = e, f = t && t.r, h = l.refs === i ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ F(g), b = g === i ? s : (e) => Un(h, e) ? !1 : p(_, e), x = (e, t) => !(t && Un(h, t));
	if (f != null && f !== u) {
		if (Kn(t), y(f)) h[f] = null, b(f) && (g[f] = null);
		else if (/* @__PURE__ */ L(f)) {
			let e = t;
			x(f, e.k) && (f.value = null), e.k && (h[e.k] = null);
		}
	}
	if (v(u)) on(u, l, 12, [c, h]);
	else {
		let t = y(u), r = /* @__PURE__ */ L(u);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(u) ? g[u] : h[u] : x(u) || !e.k ? u.value : h[e.k];
					if (a) m(n) && d(n, o);
					else if (m(n)) n.includes(o) || n.push(o);
					else if (t) h[u] = [o], b(u) && (g[u] = h[u]);
					else {
						let t = [o];
						x(u, e.k) && (u.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[u] = c, b(u) && (g[u] = c)) : r && (x(u, e.k) && (u.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), Wn.delete(e);
				};
				t.id = -1, Wn.set(e, t), U(t, n);
			} else Kn(e), i();
		}
	}
}
function Kn(e) {
	let t = Wn.get(e);
	t && (t.flags |= 8, Wn.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var qn = (e) => !!e.type.__asyncLoader, Jn = (e) => e.type.__isKeepAlive;
function Yn(e, t) {
	Zn(e, "a", t);
}
function Xn(e, t) {
	Zn(e, "da", t);
}
function Zn(e, t, n = X) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if ($n(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Jn(e.parent.vnode) && Qn(r, t, n, e), e = e.parent;
	}
}
function Qn(e, t, n, r) {
	let i = $n(t, e, r, !0);
	or(() => {
		d(r[t], i);
	}, n);
}
function $n(e, t, n = X, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = $i(n), a = z(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var er = (e) => (t, n = X) => {
	(!na || e === "sp") && $n(e, (...e) => t(...e), n);
}, tr = er("bm"), nr = er("m"), rr = er("bu"), ir = er("u"), ar = er("bum"), or = er("um"), sr = er("sp"), cr = er("rtg"), lr = er("rtc");
function ur(e, t = X) {
	$n("ec", e, t);
}
var dr = /* @__PURE__ */ Symbol.for("v-ndc");
function fr(e, t, n, r) {
	let i, a = n && n[r], o = m(e);
	if (o || y(e)) {
		let n = o && /* @__PURE__ */ Vt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ P(e), s = /* @__PURE__ */ Ht(e), e = it(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Gt(I(e[n])) : I(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (x(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var pr = (e) => e ? ta(e) ? da(e) : pr(e.parent) : null, mr = /* @__PURE__ */ u(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => pr(e.parent),
	$root: (e) => pr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Cr(e),
	$forceUpdate: (e) => e.f ||= () => {
		_n(e.update);
	},
	$nextTick: (e) => e.n ||= hn.bind(e.proxy),
	$watch: (e) => Fn.bind(e)
}), hr = (e, t) => e !== i && !e.__isScriptSetup && p(e, t), gr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (hr(r, t)) return s[t] = 1, r[t];
			else if (a !== i && p(a, t)) return s[t] = 2, a[t];
			else if (p(o, t)) return s[t] = 3, o[t];
			else if (n !== i && p(n, t)) return s[t] = 4, n[t];
			else vr && (s[t] = 0);
		}
		let u = mr[t], d, f;
		if (u) return t === "$attrs" && N(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== i && p(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, p(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: a, ctx: o } = e;
		return hr(a, t) ? (a[t] = n, !0) : r !== i && p(r, t) ? (r[t] = n, !0) : p(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== i && c[0] !== "$" && p(e, c) || hr(t, c) || p(o, c) || p(r, c) || p(mr, c) || p(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? p(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function _r(e) {
	return m(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var vr = !0;
function yr(e) {
	let t = Cr(e), n = e.proxy, r = e.ctx;
	vr = !1, t.beforeCreate && xr(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: h, updated: g, activated: _, deactivated: y, beforeDestroy: b, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: ae, inheritAttrs: T, components: oe, directives: se, filters: ce } = t;
	if (u && br(u, r, null), s) for (let e in s) {
		let t = s[e];
		v(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		x(t) && (e.data = /* @__PURE__ */ Lt(t));
	}
	if (vr = !0, a) for (let e in a) {
		let t = a[e], i = Z({
			get: v(t) ? t.bind(n, n) : v(t.get) ? t.get.bind(n, n) : o,
			set: !v(t) && v(t.set) ? t.set.bind(n) : o
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Sr(c[e], r, n, e);
	if (l) {
		let e = v(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			kn(t, e[t]);
		});
	}
	d && xr(d, e, "c");
	function E(e, t) {
		m(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (E(tr, f), E(nr, p), E(rr, h), E(ir, g), E(Yn, _), E(Xn, y), E(ur, re), E(lr, te), E(cr, ne), E(ar, S), E(or, w), E(sr, ie), m(ae)) if (ae.length) {
		let t = e.exposed ||= {};
		ae.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === o && (e.render = ee), T != null && (e.inheritAttrs = T), oe && (e.components = oe), se && (e.directives = se), ie && Hn(e);
}
function br(e, t, n = o) {
	m(e) && (e = Or(e));
	for (let n in e) {
		let r = e[n], i;
		i = x(r) ? "default" in r ? An(r.from || n, r.default, !0) : An(r.from || n) : An(r), /* @__PURE__ */ L(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function xr(e, t, n) {
	z(m(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sr(e, t, n, r) {
	let i = r.includes(".") ? In(n, r) : () => n[r];
	if (y(e)) {
		let n = t[e];
		v(n) && Nn(i, n);
	} else if (v(e)) Nn(i, e.bind(n));
	else if (x(e)) if (m(e)) e.forEach((e) => Sr(e, t, n, r));
	else {
		let r = v(e.handler) ? e.handler.bind(n) : t[e.handler];
		v(r) && Nn(i, r, e);
	}
}
function Cr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => wr(c, e, o, !0)), wr(c, t, o)), x(t) && a.set(t, c), c;
}
function wr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && wr(e, a, n, !0), i && i.forEach((t) => wr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Tr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Tr = {
	data: Er,
	props: Ar,
	emits: Ar,
	methods: kr,
	computed: kr,
	beforeCreate: H,
	created: H,
	beforeMount: H,
	mounted: H,
	beforeUpdate: H,
	updated: H,
	beforeDestroy: H,
	beforeUnmount: H,
	destroyed: H,
	unmounted: H,
	activated: H,
	deactivated: H,
	errorCaptured: H,
	serverPrefetch: H,
	components: kr,
	directives: kr,
	watch: jr,
	provide: Er,
	inject: Dr
};
function Er(e, t) {
	return t ? e ? function() {
		return u(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
	} : t : e;
}
function Dr(e, t) {
	return kr(Or(e), Or(t));
}
function Or(e) {
	if (m(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function H(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function kr(e, t) {
	return e ? u(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ar(e, t) {
	return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : u(/* @__PURE__ */ Object.create(null), _r(e), _r(t ?? {})) : t;
}
function jr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = u(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function Mr() {
	return {
		app: null,
		config: {
			isNativeTag: s,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Nr = 0;
function Pr(e, t) {
	return function(n, r = null) {
		v(n) || (n = u({}, n)), r != null && !x(r) && (r = null);
		let i = Mr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Nr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: pa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && v(e.install) ? (a.add(e), e.install(c, ...t)) : v(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Li(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, da(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (z(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Fr;
				Fr = c;
				try {
					return e();
				} finally {
					Fr = t;
				}
			}
		};
		return c;
	};
}
var Fr = null, Ir = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${se(t)}Modifiers`];
function Lr(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || i, a = n, o = t.startsWith("update:"), s = o && Ir(r, t.slice(7));
	s && (s.trim && (a = n.map((e) => y(e) ? e.trim() : e)), s.number && (a = n.map(de)));
	let c, l = r[c = E(t)] || r[c = E(T(t))];
	!l && o && (l = r[c = E(se(t))]), l && z(l, e, 6, a);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, z(u, e, 6, a);
	}
}
var Rr = /* @__PURE__ */ new WeakMap();
function zr(e, t, n = !1) {
	let r = n ? Rr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!v(e)) {
		let r = (e) => {
			let n = zr(e, t, !0);
			n && (s = !0, u(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (x(e) && r.set(e, null), null) : (m(a) ? a.forEach((e) => o[e] = null) : u(o, a), x(e) && r.set(e, o), o);
}
function Br(e, t) {
	return !e || !c(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), p(e, t[0].toLowerCase() + t.slice(1)) || p(e, se(t)) || p(e, t));
}
function Vr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Tn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ui(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Ui(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : Hr(s);
		}
	} catch (t) {
		Di.length = 0, sn(t, e, 1), v = Li(Ti);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(l) && (y = Ur(y, a)), b = Bi(b, y, !1, !0));
	}
	return n.dirs && (b = Bi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Bn(b, n.transition), v = b, Tn(_), v;
}
var Hr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || c(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ur = (e, t) => {
	let n = {};
	for (let r in e) (!l(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Wr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Gr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Kr(o, r, n) && !Br(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Gr(r, o, l) : !0 : !!o;
	return !1;
}
function Gr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Kr(t, e, a) && !Br(n, a)) return !0;
	}
	return !1;
}
function Kr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && x(r) && x(i) ? !O(r, i) : r !== i;
}
function qr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Jr = {}, Yr = () => Object.create(Jr), Xr = (e) => Object.getPrototypeOf(e) === Jr;
function Zr(e, t, n, r = !1) {
	let i = {}, a = Yr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), $r(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Rt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Qr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Br(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (p(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = T(o);
					i[t] = ei(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		$r(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !p(t, a) && ((r = se(a)) === a || !p(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ei(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !p(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function $r(e, t, n, r) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let i in t) {
		if (re(i)) continue;
		let l = t[i], u;
		a && p(a, u = T(i)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Br(e.emitsOptions, i) || (!(i in r) || l !== r[i]) && (r[i] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ F(n), r = c || i;
		for (let i = 0; i < o.length; i++) {
			let s = o[i];
			n[s] = ei(a, t, s, r[s], e, !p(r, s));
		}
	}
	return s;
}
function ei(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = p(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && v(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = $i(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === se(n)) && (r = !0));
	}
	return r;
}
var ti = /* @__PURE__ */ new WeakMap();
function ni(e, t, n = !1) {
	let r = n ? ti : t.propsCache, o = r.get(e);
	if (o) return o;
	let s = e.props, c = {}, l = [], d = !1;
	if (!v(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = ni(e, t, !0);
			u(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return x(e) && r.set(e, a), a;
	if (m(s)) for (let e = 0; e < s.length; e++) {
		let t = T(s[e]);
		ri(t) && (c[t] = i);
	}
	else if (s) for (let e in s) {
		let t = T(e);
		if (ri(t)) {
			let n = s[e], r = c[t] = m(n) || v(n) ? { type: n } : u({}, n), i = r.type, a = !1, o = !0;
			if (m(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = v(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = v(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || p(r, "default")) && l.push(t);
		}
	}
	let f = [c, l];
	return x(e) && r.set(e, f), f;
}
function ri(e) {
	return e[0] !== "$" && !re(e);
}
var ii = (e) => e === "_" || e === "_ctx" || e === "$stable", ai = (e) => m(e) ? e.map(Ui) : [Ui(e)], oi = (e, t, n) => {
	if (t._n) return t;
	let r = En((...e) => ai(t(...e)), n);
	return r._c = !1, r;
}, si = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ii(n)) continue;
		let i = e[n];
		if (v(i)) t[n] = oi(n, i, r);
		else if (i != null) {
			let e = ai(i);
			t[n] = () => e;
		}
	}
}, ci = (e, t) => {
	let n = ai(t);
	e.slots.default = () => n;
}, li = (e, t, n) => {
	for (let r in t) (n || !ii(r)) && (e[r] = t[r]);
}, ui = (e, t, n) => {
	let r = e.slots = Yr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (li(r, t, n), n && ue(r, "_", e, !0)) : si(t, r);
	} else t && ci(e, t);
}, di = (e, t, n) => {
	let { vnode: r, slots: a } = e, o = !0, s = i;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : li(a, t, n) : (o = !t.$stable, si(t, a)), s = t;
	} else t && (ci(e, t), s = { default: 1 });
	if (o) for (let e in a) !ii(e) && s[e] == null && delete a[e];
}, U = Ci;
function fi(e) {
	return pi(e);
}
function pi(e, t) {
	let n = pe();
	n.__VUE__ = !0;
	let { insert: r, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = o, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Pi(e, t) && (r = xe(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case wi:
				y(e, t, n, r);
				break;
			case Ti:
				b(e, t, n, r);
				break;
			case Ei:
				e ?? x(t, n, r, o);
				break;
			case W:
				oe(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? se(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, O);
		}
		u != null && i ? Gn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Gn(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = u(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = d(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, i, a, o, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, o, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, a, mi(e, o), s, u), _ && On(e, null, i, "created"), te(d, e, e.scopeId, s, i), m) {
			for (let e in m) e !== "value" && !re(e) && c(d, e, null, m[e], o, i);
			"value" in m && c(d, "value", null, m.value, o), (f = m.onVnodeBeforeMount) && Y(f, i, e);
		}
		_ && On(e, null, i, "beforeMount");
		let v = gi(a, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && Y(f, i, e), v && g.enter(d), _ && On(e, null, i, "mounted");
			} finally {}
		}, a);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Si(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Wi(e[l]) : Ui(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || i, h = t.props || i, g;
		if (n && hi(n, !1), (g = h.onVnodeBeforeUpdate) && Y(g, n, t, e), f && On(t, e, n, "beforeUpdate"), n && hi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, mi(t, a), o) : s || de(e, t, l, null, n, r, mi(t, a), o, !1), u > 0) {
			if (u & 16) T(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && T(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && U(() => {
			g && Y(g, n, t, e), f && On(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !Pi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, T = (e, t, n, r, a) => {
		if (t !== n) {
			if (t !== i) for (let i in t) !re(i) && !(i in n) && c(e, i, t[i], null, a, r);
			for (let i in n) {
				if (re(i)) continue;
				let o = n[i], s = t[i];
				o !== s && i !== "value" && c(e, i, s, o, a, r);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, oe = (e, t, n, i, a, o, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && _i(e, t, !0)) : de(e, t, n, f, a, o, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : E(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = Yi(e, r, i);
		if (Jn(e) && (s.ctx.renderer = O), ra(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, D, o), !e.el) {
				let r = s.subTree = Li(Ti);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else D(s, e, t, n, i, a, o);
	}, E = (e, t, n) => {
		let r = t.component = e.component;
		if (Wr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, D = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = yi(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							U(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				hi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Y(d, s, t, c), hi(e, !0);
				let f = Vr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), xe(p), e, i, a), t.el = f.el, u === null && qr(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => Y(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = qn(t);
				if (hi(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && Y(o, d, t), hi(e, !0), s && Te) {
					let t = () => {
						e.subTree = Vr(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Vr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => Y(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && qn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => _n(u), hi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Qr(e, t.props, r, n), di(e, t.children, n), Ge(), bn(e), Ke();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, fe = (e, t, n, r, i, o, s, c, l) => {
		e ||= a, t ||= a;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Wi(t[p]) : Ui(t[p]);
			v(e[p], r, n, null, i, o, s, c, l);
		}
		u > d ? be(e, i, o, !0, !1, f) : ne(t, n, r, i, o, s, c, l, f);
	}, me = (e, t, n, r, i, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], a = t[u] = l ? Wi(t[u]) : Ui(t[u]);
			if (Pi(r, a)) v(r, a, n, null, i, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], a = t[p] = l ? Wi(t[p]) : Ui(t[p]);
			if (Pi(r, a)) v(r, a, n, null, i, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, a = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Wi(t[u]) : Ui(t[u]), n, a, i, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], i, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Wi(t[u]) : Ui(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ge(r, i, o, !0);
					continue;
				}
				let a;
				if (r.key != null) a = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Pi(r, t[_])) {
					a = _;
					break;
				}
				a === void 0 ? ge(r, i, o, !0) : (C[a - h] = u + 1, a >= S ? S = a : x = !0, v(r, t[a], n, null, i, o, s, c, l), y++);
			}
			let w = x ? vi(C) : a;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, a = t[e], f = t[e + 1], p = e + 1 < d ? f.el || xi(f) : r;
				C[u] === 0 ? v(null, a, n, p, i, o, s, c, l) : x && (_ < 0 || u !== w[_] ? he(a, n, p, 2) : _--);
			}
		}
	}, he = (e, t, n, i, a = null) => {
		let { el: o, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			he(e.component.subTree, t, n, i);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, i);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, O);
			return;
		}
		if (c === W) {
			r(o, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, i);
			r(e.anchor, t, n);
			return;
		}
		if (c === Ei) {
			S(e, t, n);
			return;
		}
		if (i !== 2 && d & 1 && l) if (i === 0) l.beforeEnter(o), r(o, t, n), U(() => l.enter(o), a);
		else {
			let { leave: i, delayLeave: a, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(o) : r(o, t, n);
			}, d = () => {
				o._isLeaving && o[zn](!0), i(o, () => {
					u(), c && c();
				});
			};
			a ? a(o, u, d) : d();
		}
		else r(o, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), Gn(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !qn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Y(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && On(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, O, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && Y(_, t, e), h && On(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === W) {
			ve(n, r);
			return;
		}
		if (t === Ei) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ve = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		bi(c), bi(l), r && le(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && U(s, t), U(() => {
			e.isUnmounted = !0;
		}, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Ln];
		return n ? h(n) : t;
	}, Se = !1, Ce = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ge(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, bn(r), xn(), !1);
	}, O = {
		p: v,
		um: ge,
		m: he,
		r: _e,
		mt: ce,
		mc: ne,
		pc: de,
		pbc: ae,
		n: xe,
		o: e
	}, we, Te;
	return t && ([we, Te] = t(O)), {
		render: Ce,
		hydrate: we,
		createApp: Pr(Ce, we)
	};
}
function mi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function hi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function _i(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (m(r) && m(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Wi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && _i(t, a)), a.type === wi && (a.patchFlag === -1 && (a = i[e] = Wi(a)), a.el = t.el), a.type === Ti && !a.el && (a.el = t.el);
	}
}
function vi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function yi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : yi(t);
}
function bi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function xi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? xi(t.subTree) : null;
}
var Si = (e) => e.__isSuspense;
function Ci(e, t) {
	t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : yn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), wi = /* @__PURE__ */ Symbol.for("v-txt"), Ti = /* @__PURE__ */ Symbol.for("v-cmt"), Ei = /* @__PURE__ */ Symbol.for("v-stc"), Di = [], G = null;
function K(e = !1) {
	Di.push(G = e ? null : []);
}
function Oi() {
	Di.pop(), G = Di[Di.length - 1] || null;
}
var ki = 1;
function Ai(e, t = !1) {
	ki += e, e < 0 && G && t && (G.hasOnce = !0);
}
function ji(e) {
	return e.dynamicChildren = ki > 0 ? G || a : null, Oi(), ki > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return ji(J(e, t, n, r, i, a, !0));
}
function Mi(e, t, n, r, i) {
	return ji(Li(e, t, n, r, i, !0));
}
function Ni(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Pi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Fi = ({ key: e }) => e ?? null, Ii = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : y(e) || /* @__PURE__ */ L(e) || v(e) ? {
	i: V,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Fi(t),
		ref: t && Ii(t),
		scopeId: wn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: V
	};
	return s ? (Gi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= y(n) ? 8 : 16), ki > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Li = Ri;
function Ri(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === dr) && (e = Ti), Ni(e)) {
		let r = Bi(e, t, !0);
		return n && Gi(r, n), ki > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (fa(e) && (e = e.__vccOpts), t) {
		t = zi(t);
		let { class: e, style: n } = t;
		e && !y(e) && (t.class = ye(e)), x(n) && (/* @__PURE__ */ Ut(n) && !m(n) && (n = u({}, n)), t.style = me(n));
	}
	let o = y(e) ? 1 : Si(e) ? 128 : Rn(e) ? 64 : x(e) ? 4 : v(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function zi(e) {
	return e ? /* @__PURE__ */ Ut(e) || Xr(e) ? u({}, e) : e : null;
}
function Bi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ki(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Fi(l),
		ref: t && t.ref ? n && a ? m(a) ? a.concat(Ii(t)) : [a, Ii(t)] : Ii(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Bi(e.ssContent),
		ssFallback: e.ssFallback && Bi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Bn(u, c.clone(u)), u;
}
function Vi(e = " ", t = 0) {
	return Li(wi, null, e, t);
}
function Hi(e = "", t = !1) {
	return t ? (K(), Mi(Ti, null, e)) : Li(Ti, null, e);
}
function Ui(e) {
	return e == null || typeof e == "boolean" ? Li(Ti) : m(e) ? Li(W, null, e.slice()) : Ni(e) ? Wi(e) : Li(wi, null, String(e));
}
function Wi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function Gi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (m(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Gi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Xr(t) ? t._ctx = V : r === 3 && V && (V.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else v(t) ? (t = {
		default: t,
		_ctx: V
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Vi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Ki(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ye([t.class, r.class]));
		else if (e === "style") t.style = me([t.style, r.style]);
		else if (c(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(m(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !l(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Y(e, t, n, r = null) {
	z(e, t, 7, [n, r]);
}
var qi = Mr(), Ji = 0;
function Yi(e, t, n) {
	let r = e.type, a = (t ? t.appContext : e.appContext) || qi, o = {
		uid: Ji++,
		vnode: e,
		type: r,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Oe(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: ni(r, a),
		emitsOptions: zr(r, a),
		emit: null,
		emitted: null,
		propsDefaults: i,
		inheritAttrs: r.inheritAttrs,
		ctx: i,
		data: i,
		props: i,
		attrs: i,
		slots: i,
		refs: i,
		setupState: i,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Lr.bind(null, o), e.ce && e.ce(o), o;
}
var X = null, Xi = () => X || V, Zi, Qi;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Zi = t("__VUE_INSTANCE_SETTERS__", (e) => X = e), Qi = t("__VUE_SSR_SETTERS__", (e) => na = e);
}
var $i = (e) => {
	let t = X;
	return Zi(e), e.scope.on(), () => {
		e.scope.off(), Zi(t);
	};
}, ea = () => {
	X && X.scope.off(), Zi(null);
};
function ta(e) {
	return e.vnode.shapeFlag & 4;
}
var na = !1;
function ra(e, t = !1, n = !1) {
	t && Qi(t);
	let { props: r, children: i } = e.vnode, a = ta(e);
	Zr(e, r, a, t), ui(e, i, n || t);
	let o = a ? ia(e, t) : void 0;
	return t && Qi(!1), o;
}
function ia(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gr);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? ua(e) : null, i = $i(e), a = on(r, e, 0, [e.props, n]), o = S(a);
		if (Ke(), i(), (o || e.sp) && !qn(e) && Hn(e), o) {
			if (a.then(ea, ea), t) return a.then((n) => {
				aa(e, n, t);
			}).catch((t) => {
				sn(t, e, 0);
			});
			e.asyncDep = a;
		} else aa(e, a, t);
	} else ca(e, t);
}
function aa(e, t, n) {
	v(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : x(t) && (e.setupState = Xt(t)), ca(e, n);
}
var oa, sa;
function ca(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && oa && !r.render) {
			let t = r.template || Cr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = oa(t, u(u({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || o, sa && sa(e);
	}
	{
		let t = $i(e);
		Ge();
		try {
			yr(e);
		} finally {
			Ke(), t();
		}
	}
}
var la = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function ua(e) {
	return {
		attrs: new Proxy(e.attrs, la),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function da(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Xt(Wt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in mr) return mr[n](e);
		},
		has(e, t) {
			return t in e || t in mr;
		}
	}) : e.proxy;
}
function fa(e) {
	return v(e) && "__vccOpts" in e;
}
var Z = (e, t) => /* @__PURE__ */ Qt(e, t, na), pa = "3.5.34", ma = void 0, ha = typeof window < "u" && window.trustedTypes;
if (ha) try {
	ma = /* @__PURE__ */ ha.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ga = ma ? (e) => ma.createHTML(e) : (e) => e, _a = "http://www.w3.org/2000/svg", va = "http://www.w3.org/1998/Math/MathML", ya = typeof document < "u" ? document : null, ba = ya && /* @__PURE__ */ ya.createElement("template"), xa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ya.createElementNS(_a, e) : t === "mathml" ? ya.createElementNS(va, e) : n ? ya.createElement(e, { is: n }) : ya.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ya.createTextNode(e),
	createComment: (e) => ya.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ya.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			ba.innerHTML = ga(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ba.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Sa = /* @__PURE__ */ Symbol("_vtc");
function Ca(e, t, n) {
	let r = e[Sa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var wa = /* @__PURE__ */ Symbol("_vod"), Ta = /* @__PURE__ */ Symbol("_vsh"), Ea = /* @__PURE__ */ Symbol(""), Da = /(?:^|;)\s*display\s*:/;
function Oa(e, t, n) {
	let r = e.style, i = y(n), a = !1;
	if (n && !i) {
		if (t) if (y(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Aa(r, t, "");
		}
		else for (let e in t) n[e] ?? Aa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Aa(r, i, "") : Pa(e, i, !y(t) && t ? t[i] : void 0, o) || Aa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ea];
			e && (n += ";" + e), r.cssText = n, a = Da.test(n);
		}
	} else t && e.removeAttribute("style");
	wa in e && (e[wa] = a ? r.display : "", e[Ta] && (r.display = "none"));
}
var ka = /\s*!important$/;
function Aa(e, t, n) {
	if (m(n)) n.forEach((n) => Aa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Na(e, t);
		ka.test(n) ? e.setProperty(se(r), n.replace(ka, ""), "important") : e[r] = n;
	}
}
var ja = [
	"Webkit",
	"Moz",
	"ms"
], Ma = {};
function Na(e, t) {
	let n = Ma[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return Ma[t] = r;
	r = ce(r);
	for (let n = 0; n < ja.length; n++) {
		let i = ja[n] + r;
		if (i in e) return Ma[t] = i;
	}
	return t;
}
function Pa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && y(r) && n === r;
}
var Fa = "http://www.w3.org/1999/xlink";
function Ia(e, t, n, r, i, a = xe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fa, t.slice(6, t.length)) : e.setAttributeNS(Fa, t, n) : n == null || a && !Se(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : b(n) ? String(n) : n);
}
function La(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ga(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Se(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ra(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function za(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ba = /* @__PURE__ */ Symbol("_vei");
function Va(e, t, n, r, i = null) {
	let a = e[Ba] || (e[Ba] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ua(t);
		r ? Ra(e, n, a[t] = qa(r, i), s) : o && (za(e, n, o, s), a[t] = void 0);
	}
}
var Ha = /(?:Once|Passive|Capture)$/;
function Ua(e) {
	let t;
	if (Ha.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Ha);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : se(e.slice(2)), t];
}
var Wa = 0, Ga = /* @__PURE__ */ Promise.resolve(), Ka = () => Wa ||= (Ga.then(() => Wa = 0), Date.now());
function qa(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		z(Ja(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Ka(), n;
}
function Ja(e, t) {
	if (m(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Ya = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xa = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ca(e, r, o) : t === "style" ? Oa(e, n, r) : c(t) ? l(t) || Va(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Za(e, t, r, o)) ? (La(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ia(e, t, r, o, a, t !== "value")) : e._isVueCE && (Qa(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !y(r))) ? La(e, T(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ia(e, t, r, o));
};
function Za(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ya(t) && v(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ya(t) && y(n) ? !1 : t in e;
}
function Qa(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var $a = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return m(t) ? (e) => le(t, e) : t;
};
function eo(e) {
	e.target.composing = !0;
}
function to(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var no = /* @__PURE__ */ Symbol("_assign");
function ro(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var io = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[no] = $a(i);
		let a = r || i.props && i.props.type === "number";
		Ra(e, t ? "change" : "input", (t) => {
			t.target.composing || e[no](ro(e.value, n, a));
		}), (n || a) && Ra(e, "change", () => {
			e.value = ro(e.value, n, a);
		}), t || (Ra(e, "compositionstart", eo), Ra(e, "compositionend", to), Ra(e, "change", to));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[no] = $a(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ao = {
	deep: !0,
	created(e, t, n) {
		e[no] = $a(n), Ra(e, "change", () => {
			let t = e._modelValue, n = lo(e), r = e.checked, i = e[no];
			if (m(t)) {
				let e = we(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (g(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(uo(e, r));
		});
	},
	mounted: oo,
	beforeUpdate(e, t, n) {
		e[no] = $a(n), oo(e, t, n);
	}
};
function oo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (m(t)) i = we(t, r.props.value) > -1;
	else if (g(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = O(t, uo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var so = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = g(t);
		Ra(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? de(lo(e)) : lo(e));
			e[no](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, hn(() => {
				e._assigning = !1;
			});
		}), e[no] = $a(r);
	},
	mounted(e, { value: t }) {
		co(e, t);
	},
	beforeUpdate(e, t, n) {
		e[no] = $a(n);
	},
	updated(e, { value: t }) {
		e._assigning || co(e, t);
	}
};
function co(e, t) {
	let n = e.multiple, r = m(t);
	if (!(n && !r && !g(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = lo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = we(t, o) > -1;
			} else a.selected = t.has(o);
			else if (O(lo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function lo(e) {
	return "_value" in e ? e._value : e.value;
}
function uo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var fo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], po = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => fo.some((n) => e[`${n}Key`] && !t.includes(n))
}, mo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = po[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, ho = /* @__PURE__ */ u({ patchProp: Xa }, xa), go;
function _o() {
	return go ||= fi(ho);
}
var vo = ((...e) => {
	let t = _o().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = bo(e);
		if (!r) return;
		let i = t._component;
		!v(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, yo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function yo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function bo(e) {
	return y(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/view/apps/mobile-journals/MobileJournalList.vue?vue&type=script&setup=true&lang.ts
var xo = { class: "mobile-journal-shell__list-view" }, So = { class: "mobile-journal-shell__search" }, Co = ["value"], wo = { class: "mobile-journal-shell__list-summary" }, To = {
	class: "mobile-journal-shell__sections",
	"aria-label": "Journal sources"
}, Eo = { class: "mobile-journal-shell__section-header" }, Do = {
	class: "mobile-journal-shell__folders",
	"aria-label": "Journal folders"
}, Oo = ["aria-expanded", "onClick"], ko = {
	key: 0,
	class: "mobile-journal-shell__folder-entries"
}, Ao = ["onClick"], jo = {
	key: 0,
	class: "mobile-journal-shell__empty"
}, Mo = /* @__PURE__ */ Vn({
	__name: "MobileJournalList",
	props: {
		journalCount: {},
		searchText: {},
		sections: {},
		totalPageCount: {}
	},
	emits: ["openEntry", "update:searchText"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ R(new Set(o(n.sections))), a = Z(() => n.searchText.trim().length > 0);
		function o(e) {
			return e.flatMap((e) => e.folders.map((e) => e.id));
		}
		function s(e) {
			let t = new Set(i.value);
			t.has(e) ? t.delete(e) : t.add(e), i.value = t;
		}
		function c(e) {
			return a.value || i.value.has(e);
		}
		function l(e) {
			let t = e.target;
			t instanceof HTMLInputElement && r("update:searchText", t.value);
		}
		return (t, n) => (K(), q("section", xo, [
			J("label", So, [n[0] ||= J("span", null, "Search Journals", -1), J("input", {
				value: e.searchText,
				type: "search",
				autocomplete: "off",
				class: "otg-input otg-input-bordered",
				onInput: l
			}, null, 40, Co)]),
			J("div", wo, [J("span", null, k(e.journalCount) + " journals", 1), J("span", null, k(e.totalPageCount) + " pages", 1)]),
			J("nav", To, [(K(!0), q(W, null, fr(e.sections, (e) => (K(), q("section", {
				key: e.id,
				class: "mobile-journal-shell__section"
			}, [J("header", Eo, [
				J("span", null, k(e.type === "world" ? "World" : "Compendium"), 1),
				J("strong", null, k(e.label), 1),
				J("small", null, k(e.journalCount) + " journals / " + k(e.pageCount) + " pages", 1)
			]), J("div", Do, [(K(!0), q(W, null, fr(e.folders, (e) => (K(), q("section", {
				key: e.id,
				class: "mobile-journal-shell__folder"
			}, [J("button", {
				type: "button",
				class: "mobile-journal-shell__folder-button",
				"aria-expanded": c(e.id),
				onClick: (t) => s(e.id)
			}, [
				J("i", {
					class: ye(["fa-solid", c(e.id) ? "fa-folder-open" : "fa-folder"]),
					"aria-hidden": "true"
				}, null, 2),
				J("span", null, k(e.name), 1),
				J("small", null, k(e.journals.length), 1),
				n[1] ||= J("i", {
					class: "fa-solid fa-chevron-right mobile-journal-shell__folder-chevron",
					"aria-hidden": "true"
				}, null, -1)
			], 8, Oo), c(e.id) ? (K(), q("div", ko, [(K(!0), q(W, null, fr(e.journals, (e) => (K(), q("button", {
				key: e.id,
				type: "button",
				class: "mobile-journal-shell__journal-row",
				onClick: (t) => r("openEntry", e)
			}, [n[2] ||= J("i", {
				class: "fa-solid fa-book-open",
				"aria-hidden": "true"
			}, null, -1), J("span", null, [J("strong", null, k(e.name), 1), J("small", null, k(e.pages.length) + " pages", 1)])], 8, Ao))), 128))])) : Hi("", !0)]))), 128))])]))), 128))]),
			e.sections.length === 0 ? (K(), q("section", jo, [...n[3] ||= [J("h2", null, "No Journals", -1)]])) : Hi("", !0)
		]));
	}
}), No = {
	key: 0,
	class: "mobile-journal-shell__reader"
}, Po = { class: "mobile-journal-shell__reader-bar" }, Fo = { class: "mobile-journal-shell__reader-title" }, Io = { class: "mobile-journal-shell__reader-controls" }, Lo = ["disabled"], Ro = { class: "mobile-journal-shell__select-control" }, zo = ["value"], Bo = ["value"], Vo = ["disabled"], Ho = {
	key: 0,
	class: "mobile-journal-shell__select-control mobile-journal-shell__select-control--wide"
}, Uo = ["value"], Wo = ["innerHTML"], Go = /* @__PURE__ */ Vn({
	__name: "MobileJournalReader",
	props: {
		entry: {},
		pageId: {}
	},
	emits: ["back", "update:pageId"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ R(""), a = /* @__PURE__ */ R(null), o = Z(() => n.entry.pages.find((e) => e.id === n.pageId) ?? n.entry.pages[0]), s = Z(() => n.entry.pages.findIndex((e) => e.id === o.value?.id)), c = Z(() => o.value ? h(o.value) : {
			headers: [],
			html: ""
		}), l = Z(() => n.entry.folderName ? `${n.entry.source.label} / ${n.entry.folderName}` : n.entry.source.label);
		Nn(() => n.pageId, () => {
			i.value = "", hn(() => {
				a.value?.scrollTo({ top: 0 });
			});
		});
		function u() {
			m(-1);
		}
		function d() {
			m(1);
		}
		function f(e) {
			let t = e.target;
			t instanceof HTMLSelectElement && r("update:pageId", t.value);
		}
		function p() {
			i.value && document.getElementById(i.value)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		function m(e) {
			let t = n.entry.pages[s.value + e];
			t && r("update:pageId", t.id);
		}
		function h(e) {
			let t = new DOMParser().parseFromString(e.html, "text/html");
			return {
				headers: [...t.body.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((t, n) => {
					let r = t.textContent.trim() || `Heading ${n + 1}`, i = `otg-${e.id}-heading-${n}`;
					return t.id = i, {
						id: i,
						level: Number(t.tagName.slice(1)),
						text: r
					};
				}),
				html: t.body.innerHTML
			};
		}
		return (t, n) => o.value ? (K(), q("article", No, [
			J("header", Po, [J("button", {
				type: "button",
				class: "otg-btn otg-btn-square otg-btn-ghost",
				"aria-label": "Back to journal list",
				onClick: n[0] ||= (e) => r("back")
			}, [...n[2] ||= [J("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]]), J("div", Fo, [J("p", null, k(l.value), 1), J("h2", null, k(e.entry.name), 1)])]),
			J("div", Io, [
				J("button", {
					type: "button",
					class: "otg-btn otg-btn-square otg-btn-ghost",
					"aria-label": "Previous page",
					disabled: s.value <= 0,
					onClick: u
				}, [...n[3] ||= [J("i", {
					class: "fa-solid fa-arrow-left",
					"aria-hidden": "true"
				}, null, -1)]], 8, Lo),
				J("label", Ro, [n[4] ||= J("span", null, "Page", -1), J("select", {
					value: e.pageId,
					class: "otg-select otg-select-bordered",
					onChange: f
				}, [(K(!0), q(W, null, fr(e.entry.pages, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Bo))), 128))], 40, zo)]),
				J("button", {
					type: "button",
					class: "otg-btn otg-btn-square otg-btn-ghost",
					"aria-label": "Next page",
					disabled: s.value >= e.entry.pages.length - 1,
					onClick: d
				}, [...n[5] ||= [J("i", {
					class: "fa-solid fa-arrow-right",
					"aria-hidden": "true"
				}, null, -1)]], 8, Vo),
				c.value.headers.length > 0 ? (K(), q("label", Ho, [n[7] ||= J("span", null, "Headings", -1), Dn(J("select", {
					"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
					class: "otg-select otg-select-bordered",
					onChange: p
				}, [n[6] ||= J("option", { value: "" }, "Jump to heading", -1), (K(!0), q(W, null, fr(c.value.headers, (e) => (K(), q("option", {
					key: e.id,
					value: e.id
				}, k("-".repeat(Math.max(0, e.level - 1))) + " " + k(e.text), 9, Uo))), 128))], 544), [[so, i.value]])])) : Hi("", !0)
			]),
			J("section", {
				ref_key: "pageScrollElement",
				ref: a,
				class: "mobile-journal-shell__page"
			}, [J("h3", null, k(o.value.name), 1), J("div", {
				class: "mobile-journal-shell__content",
				innerHTML: c.value.html
			}, null, 8, Wo)], 512)
		])) : Hi("", !0);
	}
}), Ko = { class: "mobile-journal-shell" }, qo = { class: "mobile-journal-shell__app-header" }, Jo = { class: "otg-badge otg-badge-primary" }, Yo = "No Folder", Xo = "World", Zo = /* @__PURE__ */ Vn({
	__name: "MobileJournalApp",
	props: { journals: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ R(!1), r = /* @__PURE__ */ R(""), i = /* @__PURE__ */ R(""), a = /* @__PURE__ */ R(""), o = Z(() => {
			let e = r.value.trim().toLocaleLowerCase();
			return e ? t.journals.filter((t) => {
				let n = t.pages.some((t) => t.name.toLocaleLowerCase().includes(e));
				return t.name.toLocaleLowerCase().includes(e) || t.folderName?.toLocaleLowerCase().includes(e) || t.source.label.toLocaleLowerCase().includes(e) || n;
			}) : t.journals;
		}), s = Z(() => {
			let e = /* @__PURE__ */ new Map();
			for (let t of o.value) {
				let n = `${t.source.type}:${t.source.id}`, r = u(e, n, t), i = t.folderName ?? d(t), a = `${n}:folder:${i.toLocaleLowerCase()}`, o = r.folders.find((e) => e.id === a);
				o ? o.journals.push(t) : r.folders.push({
					id: a,
					journals: [t],
					name: i
				}), r.journalCount += 1, r.pageCount += t.pages.length;
			}
			let t = [...e.values()];
			for (let e of t) e.folders.sort(p);
			return t.sort(f);
		}), c = Z(() => o.value.reduce((e, t) => e + t.pages.length, 0)), l = Z(() => t.journals.find((e) => e.id === i.value));
		function u(e, t, n) {
			let r = e.get(t);
			if (r) return r;
			let i = {
				folders: [],
				id: t,
				journalCount: 0,
				label: n.source.label,
				pageCount: 0,
				type: n.source.type
			};
			return e.set(t, i), i;
		}
		function d(e) {
			return e.source.type === "world" ? Xo : Yo;
		}
		function f(e, t) {
			return m(e.type) - m(t.type) || e.label.localeCompare(t.label);
		}
		function p(e, t) {
			return e.name.localeCompare(t.name);
		}
		function m(e) {
			return e === "world" ? 0 : 1;
		}
		function h(e) {
			i.value = e.id, a.value = e.pages[0]?.id ?? "", n.value = !0;
		}
		function g() {
			n.value = !1;
		}
		return (e, t) => (K(), q("main", Ko, [J("header", qo, [t[2] ||= J("div", null, [J("p", null, "WFRP On The Go"), J("h1", null, "Journals")], -1), J("span", Jo, k(o.value.length), 1)]), n.value ? l.value ? (K(), Mi(Go, {
			key: 1,
			"page-id": a.value,
			"onUpdate:pageId": t[1] ||= (e) => a.value = e,
			entry: l.value,
			onBack: g
		}, null, 8, ["page-id", "entry"])) : Hi("", !0) : (K(), Mi(Mo, {
			key: 0,
			"search-text": r.value,
			"onUpdate:searchText": t[0] ||= (e) => r.value = e,
			sections: s.value,
			"journal-count": o.value.length,
			"total-page-count": c.value,
			onOpenEntry: h
		}, null, 8, [
			"search-text",
			"sections",
			"journal-count",
			"total-page-count"
		]))]));
	}
}), Qo = { class: "on-the-go-shell" }, $o = { class: "on-the-go-shell__top-bar" }, es = {
	key: 1,
	class: "on-the-go-shell__top-bar-spacer",
	"aria-hidden": "true"
}, ts = {
	key: 0,
	class: "on-the-go-shell__home",
	"aria-label": "Main menu"
}, ns = {
	key: 1,
	class: "on-the-go-shell__content"
}, rs = { class: "on-the-go-shell__toggle otg-card" }, is = { class: "on-the-go-shell__field" }, as = {
	class: "on-the-go-shell__gm-list",
	"aria-label": "Enabled GM users"
}, os = ["checked", "onChange"], ss = { class: "on-the-go-shell__actions" }, cs = { "aria-live": "polite" }, ls = ["disabled"], us = ["disabled"], ds = /* @__PURE__ */ Vn({
	__name: "MobileShellApp",
	props: {
		activationSettings: {},
		disableForcedMode: { type: Function },
		journals: {},
		saveActivationSettings: { type: Function }
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ R("home"), r = /* @__PURE__ */ R(!1), i = /* @__PURE__ */ R(""), a = /* @__PURE__ */ Lt(m(t.activationSettings)), o = Z(() => n.value === "journals" ? "Journals" : n.value === "settings" ? "Settings" : "Home"), s = Z(() => t.journals.reduce((e, t) => e + t.pages.length, 0));
		function c(e) {
			n.value = e, i.value = "";
		}
		function l() {
			n.value = "home";
		}
		function u(e, t) {
			let n = a.users.find((t) => t.id === e);
			n && (n.enabled = t);
		}
		function d(e, t) {
			let n = t.target;
			n instanceof HTMLInputElement && u(e, n.checked);
		}
		async function f() {
			r.value = !0, i.value = "";
			try {
				await t.saveActivationSettings(m(a)), i.value = "Saved";
			} finally {
				r.value = !1;
			}
		}
		async function p() {
			r.value = !0, i.value = "";
			try {
				a.forceMobileUi = !1, await t.disableForcedMode(), i.value = "Forced mode is off. Refresh to return to Foundry.";
			} finally {
				r.value = !1;
			}
		}
		function m(e) {
			return {
				forceMobileUi: e.forceMobileUi,
				mobileWidthThreshold: e.mobileWidthThreshold,
				users: e.users.map((e) => ({ ...e }))
			};
		}
		return (t, u) => (K(), q("main", Qo, [J("header", $o, [
			n.value === "home" ? (K(), q("span", es)) : (K(), q("button", {
				key: 0,
				type: "button",
				class: "otg-btn otg-btn-square otg-btn-ghost",
				"aria-label": "Back to home",
				onClick: l
			}, [...u[4] ||= [J("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]])),
			J("div", null, [u[5] ||= J("p", null, "WFRP On The Go", -1), J("h1", null, k(o.value), 1)]),
			u[6] ||= J("span", {
				class: "on-the-go-shell__top-bar-spacer",
				"aria-hidden": "true"
			}, null, -1)
		]), n.value === "home" ? (K(), q("section", ts, [J("button", {
			type: "button",
			class: "on-the-go-shell__menu-button otg-card",
			onClick: u[0] ||= (e) => c("journals")
		}, [u[8] ||= J("i", {
			class: "fa-solid fa-book-open",
			"aria-hidden": "true"
		}, null, -1), J("span", null, [u[7] ||= J("strong", null, "Journals", -1), J("small", null, k(e.journals.length) + " entries, " + k(s.value) + " pages", 1)])]), J("button", {
			type: "button",
			class: "on-the-go-shell__menu-button otg-card",
			onClick: u[1] ||= (e) => c("settings")
		}, [u[10] ||= J("i", {
			class: "fa-solid fa-sliders",
			"aria-hidden": "true"
		}, null, -1), J("span", null, [u[9] ||= J("strong", null, "Settings", -1), J("small", null, k(a.forceMobileUi ? "Forced on this client" : "Automatic activation"), 1)])])])) : n.value === "journals" ? (K(), q("section", ns, [Li(Zo, { journals: e.journals }, null, 8, ["journals"])])) : (K(), q("form", {
			key: 2,
			class: "on-the-go-shell__settings",
			onSubmit: mo(f, ["prevent"])
		}, [
			J("label", rs, [J("span", null, [u[11] ||= J("strong", null, "Force On This Client", -1), J("small", null, k(a.forceMobileUi ? "On" : "Off"), 1)]), Dn(J("input", {
				"onUpdate:modelValue": u[2] ||= (e) => a.forceMobileUi = e,
				type: "checkbox",
				class: "otg-toggle otg-toggle-primary"
			}, null, 512), [[ao, a.forceMobileUi]])]),
			J("label", is, [u[12] ||= J("span", null, "Mobile Width Threshold", -1), Dn(J("input", {
				"onUpdate:modelValue": u[3] ||= (e) => a.mobileWidthThreshold = e,
				type: "number",
				min: "320",
				max: "1400",
				step: "10",
				class: "otg-input otg-input-bordered"
			}, null, 512), [[
				io,
				a.mobileWidthThreshold,
				void 0,
				{ number: !0 }
			]])]),
			J("section", as, [u[13] ||= J("h2", null, "Enabled GM Users", -1), (K(!0), q(W, null, fr(a.users, (e) => (K(), q("label", {
				key: e.id,
				class: ye(["on-the-go-shell__toggle otg-card", { "on-the-go-shell__toggle--current": e.isCurrentUser }])
			}, [J("span", null, [J("strong", null, k(e.name), 1), J("small", null, k(e.isCurrentUser ? "Current user" : "GM user"), 1)]), J("input", {
				type: "checkbox",
				class: "otg-toggle otg-toggle-primary",
				checked: e.enabled,
				onChange: (t) => d(e.id, t)
			}, null, 40, os)], 2))), 128))]),
			J("footer", ss, [
				J("p", cs, k(i.value), 1),
				J("button", {
					type: "button",
					class: "otg-btn otg-btn-outline",
					disabled: r.value,
					onClick: p
				}, [...u[14] ||= [J("i", {
					class: "fa-solid fa-power-off",
					"aria-hidden": "true"
				}, null, -1), J("span", null, "Turn Off Forced Mode", -1)]], 8, ls),
				J("button", {
					type: "submit",
					class: "otg-btn otg-btn-primary",
					disabled: r.value
				}, [u[15] ||= J("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), J("span", null, k(r.value ? "Saving" : "Save"), 1)], 8, us)
			])
		], 32))]));
	}
}), fs = {
	id: "world",
	label: "World Journals",
	type: "world"
};
async function ps() {
	let e = ms(), t = await hs();
	return [...e, ...t].sort(Ds);
}
function ms() {
	let e = {
		idPrefix: "world",
		source: fs
	};
	return gs().map((t) => xs(t, e)).filter((e) => e !== void 0);
}
async function hs() {
	let e = [];
	for (let t of _s()) {
		let n = bs(t);
		if (!n) continue;
		let r = {
			idPrefix: `compendium:${n.id}`,
			source: {
				id: n.id,
				label: n.label,
				type: "compendium"
			}
		}, i = await ys(t);
		e.push(...i.map((e) => xs(e, r)).filter((e) => e !== void 0));
	}
	return e;
}
function gs() {
	let e = game.journal;
	return Array.isArray(e.contents) ? e.contents : [];
}
function _s() {
	return Ts(game.packs).filter(vs);
}
function vs(e) {
	if (!$(e)) return !1;
	let t = Q(e.documentName), n = $(e.metadata) ? e.metadata : {}, r = Q(n.type) ?? Q(n.documentName);
	return t === "JournalEntry" || r === "JournalEntry";
}
async function ys(e) {
	if (!As(e)) return [];
	let t = await e.getDocuments();
	return Array.isArray(t) ? t : [];
}
function bs(e) {
	if (!$(e)) return;
	let t = $(e.metadata) ? e.metadata : {}, n = Q(e.collection) ?? Q(t.id) ?? Q(t.name), r = Q(e.title) ?? Q(e.label) ?? Q(t.label) ?? n;
	if (!(!n || !r)) return {
		id: n,
		label: r
	};
}
function xs(e, t) {
	if (!$(e)) return;
	let n = ws(e);
	if (!n) return;
	let r = Es(e.folder), i = Ss(e.pages), a = {
		id: `${t.idPrefix}:${n.id}`,
		name: n.name,
		pages: i,
		source: t.source
	};
	return r && (a.folderName = r), a;
}
function Ss(e) {
	return Ts(e).map(Cs).filter((e) => e !== void 0).sort((e, t) => e.sort - t.sort || e.name.localeCompare(t.name));
}
function Cs(e) {
	if (!$(e)) return;
	let t = ws(e);
	if (t) return {
		html: Q(($(e.text) ? e.text : {}).content) ?? "",
		id: t.id,
		name: t.name,
		sort: ks(e.sort) ?? 0,
		type: Q(e.type) ?? "unknown"
	};
}
function ws(e) {
	let t = Q(e.id), n = Q(e.name);
	if (!(!t || !n)) return {
		id: t,
		name: n
	};
}
function Ts(e) {
	return Array.isArray(e) ? e : $(e) && Array.isArray(e.contents) ? e.contents : [];
}
function Es(e) {
	if (!$(e)) return;
	let t = [], n = e;
	for (; $(n);) {
		let e = Q(n.name);
		e && t.unshift(e), n = n.folder;
	}
	return t.length > 0 ? t.join(" / ") : void 0;
}
function Ds(e, t) {
	return Os(e.source.type) - Os(t.source.type) || e.source.label.localeCompare(t.source.label) || e.name.localeCompare(t.name);
}
function Os(e) {
	return e === "world" ? 0 : 1;
}
function ks(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
}
function Q(e) {
	if (typeof e == "string" && e.trim() !== "") return e;
}
function As(e) {
	return $(e) && typeof e.getDocuments == "function";
}
function $(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/mobile-ui-styles.ts
var js = "data-wfrp-on-the-go-mobile-ui-styles", Ms;
async function Ns() {
	Ms ??= Ps(), await Ms;
}
async function Ps() {
	await Promise.resolve({            });
	let e = new URL("../styles/mobile.css", import.meta.url).href;
	await Fs(e);
}
async function Fs(e) {
	document.querySelector(`link[${js}="true"]`) || await new Promise((t, n) => {
		let r = document.createElement("link");
		r.rel = "stylesheet", r.href = e, r.setAttribute(js, "true"), r.addEventListener("load", () => {
			t();
		}, { once: !0 }), r.addEventListener("error", () => {
			n(/* @__PURE__ */ Error("Mobile UI stylesheet failed to load."));
		}, { once: !0 }), document.head.append(r);
	});
}
//#endregion
//#region src/module/settings/activation-settings.ts
var Is = "enabledGmUserIds", Ls = "forceMobileUi", Rs = "mobileWidthThreshold", zs = 800;
function Bs() {
	game.settings.register(e, Is, {
		name: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.name",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.hint",
		scope: "world",
		config: !1,
		default: [],
		type: Object
	}), game.settings.register(e, Rs, {
		name: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.name",
		hint: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.hint",
		scope: "world",
		config: !0,
		restricted: !0,
		default: zs,
		type: Number,
		range: {
			min: 320,
			max: 1400,
			step: 10
		}
	}), game.settings.register(e, Ls, {
		name: "WFRP_ON_THE_GO.settings.forceMobileUi.name",
		hint: "WFRP_ON_THE_GO.settings.forceMobileUi.hint",
		scope: "client",
		config: !0,
		default: !1,
		type: Boolean
	});
}
function Vs() {
	let e = new Set(qs());
	return Zs().map((t) => ({
		enabled: e.has(t.id),
		id: t.id,
		isCurrentUser: t.id === game.user.id,
		name: t.name
	}));
}
function Hs() {
	return {
		forceMobileUi: Js(),
		mobileWidthThreshold: Ys(),
		users: Vs()
	};
}
async function Us(t) {
	let n = new Set(Zs().map((e) => e.id)), r = t.filter((e, r) => n.has(e) && t.indexOf(e) === r);
	await game.settings.set(e, Is, r);
}
async function Ws(t) {
	await Us(t.users.filter((e) => e.enabled).map((e) => e.id)), await game.settings.set(e, Rs, Xs(t.mobileWidthThreshold)), await game.settings.set(e, Ls, t.forceMobileUi);
}
async function Gs(t) {
	await game.settings.set(e, Ls, t);
}
function Ks(e = window.innerWidth) {
	return game.user.isGM && qs().includes(game.user.id) && (Js() || e <= Ys());
}
function qs() {
	let t = game.settings.get(e, Is);
	return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
}
function Js() {
	return game.settings.get(e, Ls) === !0;
}
function Ys() {
	let t = game.settings.get(e, Rs);
	return typeof t != "number" || !Number.isFinite(t) ? zs : t;
}
function Xs(e) {
	return Number.isFinite(e) ? Math.min(1400, Math.max(320, Math.round(e))) : zs;
}
function Zs() {
	return game.users.filter((e) => e.isGM);
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Qs = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp-on-the-go-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp-on-the-go-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = vo(this.getVueComponent(), r), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, $s = "wfrp-on-the-go-mode-active", ec = "wfrp-on-the-go-mobile-shell-window", tc = class extends Qs {
	#e = [];
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${e}-mobile-shell`,
		classes: [e, ec],
		tag: "section",
		window: {
			title: t,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !1
		},
		position: {
			left: 0,
			top: 0,
			width: 430,
			height: 800
		}
	};
	getVueComponent() {
		return ds;
	}
	getVueProps() {
		return {
			activationSettings: Hs(),
			disableForcedMode: async () => {
				await Gs(!1);
			},
			journals: this.#e,
			saveActivationSettings: Ws
		};
	}
	async _renderHTML(e, t) {
		let [n] = await Promise.all([
			super._renderHTML(e, t),
			Ns(),
			this.loadJournals()
		]);
		return n;
	}
	_replaceHTML(e, t, n) {
		document.body.classList.add($s), super._replaceHTML(e, t, n);
	}
	async loadJournals() {
		this.#e = await ps();
	}
}, nc = { class: "starter-workbench" }, rc = {
	class: "starter-workbench__panel",
	"aria-labelledby": "status-heading"
}, ic = { class: "starter-workbench__facts" }, ac = /* @__PURE__ */ Vn({
	__name: "StarterWorkbenchApp",
	props: {
		hostName: { default: "Unknown user" },
		systemId: { default: "preview" }
	},
	setup(e) {
		return (t, n) => (K(), q("main", nc, [
			n[3] ||= J("header", { class: "starter-workbench__header" }, [J("p", { class: "starter-workbench__eyebrow" }, "WFRP On The Go"), J("h1", null, "Diagnostic Workbench")], -1),
			J("section", rc, [n[2] ||= J("h2", { id: "status-heading" }, "Runtime Context", -1), J("dl", ic, [J("div", null, [n[0] ||= J("dt", null, "User", -1), J("dd", null, k(e.hostName), 1)]), J("div", null, [n[1] ||= J("dt", null, "System", -1), J("dd", null, k(e.systemId), 1)])])]),
			n[4] ||= J("section", {
				class: "starter-workbench__panel",
				"aria-labelledby": "next-heading"
			}, [J("h2", { id: "next-heading" }, "Next Slice"), J("p", null, " The first project-owned workflow is a GM-only mobile journal browser. Keep Foundry document work in the module layer, then pass plain data into Vue. ")], -1)
		]));
	}
}), oc = class extends Qs {
	static DEFAULT_OPTIONS = {
		id: `${e}-starter-workbench`,
		tag: "section",
		window: {
			title: `${t} Diagnostic Workbench`,
			icon: "fa-solid fa-flask",
			resizable: !0
		},
		position: {
			width: 720,
			height: "auto"
		}
	};
	getVueComponent() {
		return ac;
	}
	getVueProps() {
		return {
			hostName: game.user.name,
			systemId: game.system.id
		};
	}
};
//#endregion
//#region src/module/create-module-api.ts
function sc() {
	return {
		isMobileUiActive() {
			return Ks();
		},
		async openDiagnosticWorkbench() {
			await new oc().render(!0);
		},
		async openMobileUi() {
			await new tc().render(!0);
		},
		async openMobileJournals() {
			await new tc().render(!0);
		}
	};
}
//#endregion
//#region src/module/logging.ts
function cc(e, ...t) {
	console.info(e, ...t);
}
function lc(e, ...t) {
	console.warn(e, ...t);
}
//#endregion
//#region src/module/open-mobile-ui.ts
async function uc() {
	Ks() && await new tc().render(!0);
}
//#endregion
//#region src/view/apps/activation-settings/ActivationSettingsApp.vue?vue&type=script&setup=true&lang.ts
var dc = { class: "wfrp-on-the-go-settings" }, fc = {
	key: 0,
	class: "wfrp-on-the-go-settings__users"
}, pc = ["value"], mc = { key: 0 }, hc = {
	key: 1,
	class: "wfrp-on-the-go-settings__empty"
}, gc = { class: "wfrp-on-the-go-settings__actions" }, _c = { "aria-live": "polite" }, vc = ["disabled"], yc = /* @__PURE__ */ Vn({
	__name: "ActivationSettingsApp",
	props: {
		saveEnabledGmUserIds: { type: Function },
		users: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ R(s()), r = /* @__PURE__ */ R(!1), i = /* @__PURE__ */ R(!1), a = Z(() => t.users.length > 0);
		Nn(() => t.users, () => {
			n.value = s(), i.value = !1;
		});
		async function o() {
			r.value = !0;
			try {
				await t.saveEnabledGmUserIds(n.value), i.value = !0;
			} finally {
				r.value = !1;
			}
		}
		function s() {
			return t.users.filter((e) => e.enabled).map((e) => e.id);
		}
		return (t, s) => (K(), q("main", dc, [s[1] ||= J("header", { class: "wfrp-on-the-go-settings__header" }, [J("p", { class: "wfrp-on-the-go-settings__eyebrow" }, "WFRP On The Go"), J("h1", null, "Enabled GM Users")], -1), J("form", {
			class: "wfrp-on-the-go-settings__form",
			onSubmit: mo(o, ["prevent"])
		}, [a.value ? (K(), q("div", fc, [(K(!0), q(W, null, fr(e.users, (e) => (K(), q("label", {
			key: e.id,
			class: ye(["wfrp-on-the-go-settings__user", { "wfrp-on-the-go-settings__user--current": e.isCurrentUser }])
		}, [
			Dn(J("input", {
				"onUpdate:modelValue": s[0] ||= (e) => n.value = e,
				type: "checkbox",
				value: e.id
			}, null, 8, pc), [[ao, n.value]]),
			J("span", null, k(e.name), 1),
			e.isCurrentUser ? (K(), q("strong", mc, "Current")) : Hi("", !0)
		], 2))), 128))])) : (K(), q("p", hc, "No GM users are available.")), J("footer", gc, [J("p", _c, k(i.value ? "Saved" : ""), 1), J("button", {
			type: "submit",
			disabled: r.value || !a.value
		}, k(r.value ? "Saving" : "Save"), 9, vc)])], 32)]));
	}
}), bc = class extends Qs {
	static DEFAULT_OPTIONS = {
		id: `${e}-activation-settings`,
		tag: "section",
		window: {
			title: `${t} Activation`,
			icon: "fa-solid fa-mobile-screen-button",
			resizable: !0
		},
		position: {
			width: 520,
			height: "auto"
		}
	};
	getVueComponent() {
		return yc;
	}
	getVueProps() {
		return {
			saveEnabledGmUserIds: Us,
			users: Vs()
		};
	}
};
//#endregion
//#region src/module/register-module-settings.ts
function xc() {
	Bs(), game.settings.registerMenu(e, "enabledGmUsers", {
		name: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.name",
		label: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.label",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: bc
	}), game.settings.registerMenu(e, "openDiagnosticWorkbench", {
		name: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.name",
		label: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.label",
		hint: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.hint",
		icon: "fa-solid fa-window-restore",
		restricted: !0,
		type: oc
	}), game.settings.registerMenu(e, "openMobileUi", {
		name: "WFRP_ON_THE_GO.settings.openMobileUi.name",
		label: "WFRP_ON_THE_GO.settings.openMobileUi.label",
		hint: "WFRP_ON_THE_GO.settings.openMobileUi.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: tc
	});
}
Hooks.once("init", () => {
	cc(`${e} | Initializing`), xc();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		lc(`${e} | Loaded outside ${n}; skipping module API registration.`);
		return;
	}
	let t = game.modules.get(e);
	if (!t) {
		lc(`${e} | Foundry did not expose the module entry.`);
		return;
	}
	t.api = sc(), uc(), cc(`${e} | Ready`);
});
//#endregion

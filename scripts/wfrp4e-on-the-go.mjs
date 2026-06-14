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
}, ae = /-\w/g, T = ie((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, E = ie((e) => e.replace(oe, "-$1").toLowerCase()), se = ie((e) => e.charAt(0).toUpperCase() + e.slice(1)), D = ie((e) => e ? `on${se(e)}` : ""), O = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de, fe = () => de ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function pe(e) {
	if (m(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = y(r) ? _e(r) : pe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (y(e) || x(e)) return e;
}
var me = /;(?![^(]*\))/g, he = /:([^]+)/, ge = /\/\*[^]*?\*\//g;
function _e(e) {
	let t = {};
	return e.replace(ge, "").split(me).forEach((e) => {
		if (e) {
			let n = e.split(he);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ve(e) {
	let t = "";
	if (y(e)) t = e;
	else if (m(e)) for (let n = 0; n < e.length; n++) {
		let r = ve(e[n]);
		r && (t += r + " ");
	}
	else if (x(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ye = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", be = /* @__PURE__ */ r(ye);
ye + "";
function xe(e) {
	return !!e || e === "";
}
function Se(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = k(e[r], t[r]);
	return n;
}
function k(e, t) {
	if (e === t) return !0;
	let n = _(e), r = _(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = b(e), r = b(t), n || r) return e === t;
	if (n = m(e), r = m(t), n || r) return n && r ? Se(e, t) : !1;
	if (n = x(e), r = x(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !k(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Ce(e, t) {
	return e.findIndex((e) => k(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0), A = (e) => y(e) ? e : e == null ? "" : m(e) || x(e) && (e.toString === C || !v(e.toString)) ? we(e) ? A(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : h(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : g(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : b(t) ? Ee(t) : x(t) && !m(t) && !te(t) ? String(t) : t, Ee = (e, t = "") => b(e) ? `Symbol(${e.description ?? t})` : e, j, De = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
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
function Oe() {
	return j;
}
var M, ke = /* @__PURE__ */ new WeakSet(), Ae = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, ke.has(this) && (ke.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ke(this), Le(this);
		let e = M, t = N;
		M = this, N = !0;
		try {
			return this.fn();
		} finally {
			Re(this), M = e, N = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ve(e);
			this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		ze(this) && this.run();
	}
	get dirty() {
		return ze(this);
	}
}, je = 0, Me, Ne;
function Pe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ne, Ne = e;
		return;
	}
	e.next = Me, Me = e;
}
function Fe() {
	je++;
}
function Ie() {
	if (--je > 0) return;
	if (Ne) {
		let e = Ne;
		for (Ne = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Me;) {
		let t = Me;
		for (Me = void 0; t;) {
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
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Re(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ve(r), He(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Be(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Be(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ze(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = N;
	M = e, N = !0;
	try {
		Le(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, N = r, Re(e), e.flags &= -3;
	}
}
function Ve(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ve(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function He(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var N = !0, Ue = [];
function We() {
	Ue.push(N), N = !1;
}
function Ge() {
	let e = Ue.pop();
	N = e === void 0 ? !0 : e;
}
function Ke(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var qe = 0, Je = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ye = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !N || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Je(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Xe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, qe++, this.notify(e);
	}
	notify(e) {
		Fe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ie();
		}
	}
};
function Xe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Xe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function P(e, t, n) {
	if (N && M) {
		let t = Ze.get(e);
		t || Ze.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
	}
}
function tt(e, t, n, r, i, a) {
	let o = Ze.get(e);
	if (!o) {
		qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Fe(), t === "clear") o.forEach(s);
	else {
		let i = m(e), a = i && ne(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === et || !b(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Qe)), h(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(Qe)), h(e) && s(o.get($e)));
				break;
			case "set":
				h(e) && s(o.get(Qe));
				break;
		}
	}
	Ie();
}
function nt(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e ? t : (P(t, "iterate", et), /* @__PURE__ */ I(e) ? t : t.map(R));
}
function rt(e) {
	return P(e = /* @__PURE__ */ L(e), "iterate", et), e;
}
function F(e, t) {
	return /* @__PURE__ */ Bt(e) ? Ut(/* @__PURE__ */ zt(e) ? R(t) : t) : R(t);
}
var it = {
	__proto__: null,
	[Symbol.iterator]() {
		return at(this, Symbol.iterator, (e) => F(this, e));
	},
	concat(...e) {
		return nt(this).concat(...e.map((e) => m(e) ? nt(e) : e));
	},
	entries() {
		return at(this, "entries", (e) => (e[1] = F(this, e[1]), e));
	},
	every(e, t) {
		return st(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return st(this, "filter", e, t, (e) => e.map((e) => F(this, e)), arguments);
	},
	find(e, t) {
		return st(this, "find", e, t, (e) => F(this, e), arguments);
	},
	findIndex(e, t) {
		return st(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return st(this, "findLast", e, t, (e) => F(this, e), arguments);
	},
	findLastIndex(e, t) {
		return st(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return st(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return lt(this, "includes", e);
	},
	indexOf(...e) {
		return lt(this, "indexOf", e);
	},
	join(e) {
		return nt(this).join(e);
	},
	lastIndexOf(...e) {
		return lt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return st(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ut(this, "pop");
	},
	push(...e) {
		return ut(this, "push", e);
	},
	reduce(e, ...t) {
		return ct(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ct(this, "reduceRight", e, t);
	},
	shift() {
		return ut(this, "shift");
	},
	some(e, t) {
		return st(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ut(this, "splice", e);
	},
	toReversed() {
		return nt(this).toReversed();
	},
	toSorted(e) {
		return nt(this).toSorted(e);
	},
	toSpliced(...e) {
		return nt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ut(this, "unshift", e);
	},
	values() {
		return at(this, "values", (e) => F(this, e));
	}
};
function at(e, t, n) {
	let r = rt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ I(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ot = Array.prototype;
function st(e, t, n, r, i, a) {
	let o = rt(e), s = o !== e && !/* @__PURE__ */ I(e), c = o[t];
	if (c !== ot[t]) {
		let t = c.apply(e, a);
		return s ? R(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, F(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ct(e, t, n, r) {
	let i = rt(e), a = i !== e && !/* @__PURE__ */ I(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = F(e, t)), n.call(this, t, F(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? F(e, c) : c;
}
function lt(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	P(r, "iterate", et);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Vt(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function ut(e, t, n = []) {
	We(), Fe();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Ie(), Ge(), r;
}
var dt = /* @__PURE__ */ r("__proto__,__v_isRef,__isVue"), ft = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(b));
function pt(e) {
	b(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return P(t, "has", e), t.hasOwnProperty(e);
}
var mt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Mt : jt : i ? At : kt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = m(e);
		if (!r) {
			let e;
			if (a && (e = it[t])) return e;
			if (t === "hasOwnProperty") return pt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ z(e) ? e : n);
		if ((b(t) ? ft.has(t) : dt(t)) || (r || P(e, "get", t), i)) return o;
		if (/* @__PURE__ */ z(o)) {
			let e = a && ne(t) ? o : o.value;
			return r && x(e) ? /* @__PURE__ */ Lt(e) : e;
		}
		return x(o) ? r ? /* @__PURE__ */ Lt(o) : /* @__PURE__ */ Ft(o) : o;
	}
}, ht = class extends mt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = m(e) && ne(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Bt(i);
			if (!/* @__PURE__ */ I(n) && !/* @__PURE__ */ Bt(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : p(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ z(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && (o ? O(n, i) && tt(e, "set", t, n, i) : tt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = p(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && tt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!b(t) || !ft.has(t)) && P(e, "has", t), n;
	}
	ownKeys(e) {
		return P(e, "iterate", m(e) ? "length" : Qe), Reflect.ownKeys(e);
	}
}, gt = class extends mt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, _t = /* @__PURE__ */ new ht(), vt = /* @__PURE__ */ new gt(), yt = /* @__PURE__ */ new ht(!0), bt = (e) => e, xt = (e) => Reflect.getPrototypeOf(e);
function St(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = h(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), d = n ? bt : t ? Ut : R;
		return !t && P(a, "iterate", c ? $e : Qe), u(Object.create(l), { next() {
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
function Ct(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function wt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (O(n, a) && P(i, "get", n), P(i, "get", a));
			let { has: o } = xt(i), s = t ? bt : e ? Ut : R;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && P(/* @__PURE__ */ L(t), "iterate", Qe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (O(t, i) && P(r, "has", t), P(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? bt : e ? Ut : R;
			return !e && P(o, "iterate", Qe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return u(n, e ? {
		add: Ct("add"),
		set: Ct("set"),
		delete: Ct("delete"),
		clear: Ct("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = xt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ I(e) && !/* @__PURE__ */ Bt(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), tt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ I(n) && !/* @__PURE__ */ Bt(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = xt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ L(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && tt(r, "set", e, n, s) : tt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = xt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ L(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && tt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = e.clear();
			return t && tt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = St(r, e, t);
	}), n;
}
function Tt(e, t) {
	let n = wt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(p(n, r) && r in t ? n : t, r, i);
}
var Et = { get: /* @__PURE__ */ Tt(!1, !1) }, Dt = { get: /* @__PURE__ */ Tt(!1, !0) }, Ot = { get: /* @__PURE__ */ Tt(!0, !1) }, kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap();
function Nt(e) {
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
function Pt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Nt(ee(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Ft(e) {
	return /* @__PURE__ */ Bt(e) ? e : Rt(e, !1, _t, Et, kt);
}
/* @__NO_SIDE_EFFECTS__ */
function It(e) {
	return Rt(e, !1, yt, Dt, At);
}
/* @__NO_SIDE_EFFECTS__ */
function Lt(e) {
	return Rt(e, !0, vt, Ot, jt);
}
function Rt(e, t, n, r, i) {
	if (!x(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Pt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function zt(e) {
	return /* @__PURE__ */ Bt(e) ? /* @__PURE__ */ zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Bt(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function I(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function Ht(e) {
	return !p(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var R = (e) => x(e) ? /* @__PURE__ */ Ft(e) : e, Ut = (e) => x(e) ? /* @__PURE__ */ Lt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function z(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return Gt(e, !1);
}
function Gt(e, t) {
	return /* @__PURE__ */ z(e) ? e : new Kt(e, t);
}
var Kt = class {
	constructor(e, t) {
		this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : R(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ I(e) || /* @__PURE__ */ Bt(e);
		e = n ? e : /* @__PURE__ */ L(e), O(e, t) && (this._rawValue = e, this._value = n ? e : R(e), this.dep.trigger());
	}
};
function qt(e) {
	return /* @__PURE__ */ z(e) ? e.value : e;
}
var Jt = {
	get: (e, t, n) => t === "__v_raw" ? e : qt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Yt(e) {
	return /* @__PURE__ */ zt(e) ? e : new Proxy(e, Jt);
}
var Xt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Pe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Be(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function Zt(e, t, n = !1) {
	let r, i;
	return v(e) ? r = e : (r = e.get, i = e.set), new Xt(r, i, n);
}
var Qt = {}, $t = /* @__PURE__ */ new WeakMap(), en = void 0;
function tn(e, t = !1, n = en) {
	if (n) {
		let t = $t.get(n);
		t || $t.set(n, t = []), t.push(e);
	}
}
function nn(e, t, n = i) {
	let { immediate: r, deep: a, once: s, scheduler: c, augmentJob: l, call: u } = n, f = (e) => a ? e : /* @__PURE__ */ I(e) || a === !1 || a === 0 ? rn(e, 1) : rn(e), p, h, g, _, y = !1, b = !1;
	if (/* @__PURE__ */ z(e) ? (h = () => e.value, y = /* @__PURE__ */ I(e)) : /* @__PURE__ */ zt(e) ? (h = () => f(e), y = !0) : m(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ zt(e) || /* @__PURE__ */ I(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ z(e)) return e.value;
		if (/* @__PURE__ */ zt(e)) return f(e);
		if (v(e)) return u ? u(e, 2) : e();
	})) : h = v(e) ? t ? u ? () => u(e, 2) : e : () => {
		if (g) {
			We();
			try {
				g();
			} finally {
				Ge();
			}
		}
		let t = en;
		en = p;
		try {
			return u ? u(e, 3, [_]) : e(_);
		} finally {
			en = t;
		}
	} : o, t && a) {
		let e = h, t = a === !0 ? Infinity : a;
		h = () => rn(e(), t);
	}
	let x = Oe(), S = () => {
		p.stop(), x && x.active && d(x.effects, p);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(Qt) : Qt, w = (e) => {
		if (!(!(p.flags & 1) || !p.dirty && !e)) if (t) {
			let e = p.run();
			if (a || y || (b ? e.some((e, t) => O(e, C[t])) : O(e, C))) {
				g && g();
				let n = en;
				en = p;
				try {
					let n = [
						e,
						C === Qt ? void 0 : b && C[0] === Qt ? [] : C,
						_
					];
					C = e, u ? u(t, 3, n) : t(...n);
				} finally {
					en = n;
				}
			}
		} else p.run();
	};
	return l && l(w), p = new Ae(h), p.scheduler = c ? () => c(w, !1) : w, _ = (e) => tn(e, !1, p), g = p.onStop = () => {
		let e = $t.get(p);
		if (e) {
			if (u) u(e, 4);
			else for (let t of e) t();
			$t.delete(p);
		}
	}, t ? r ? w(!0) : C = p.run() : c ? c(w.bind(null, !0), !0) : p.run(), S.pause = p.pause.bind(p), S.resume = p.resume.bind(p), S.stop = S, S;
}
function rn(e, t = Infinity, n) {
	if (t <= 0 || !x(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ z(e)) rn(e.value, t, n);
	else if (m(e)) for (let r = 0; r < e.length; r++) rn(e[r], t, n);
	else if (g(e) || h(e)) e.forEach((e) => {
		rn(e, t, n);
	});
	else if (te(e)) {
		for (let r in e) rn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && rn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function an(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		on(e, t, n);
	}
}
function B(e, t, n, r) {
	if (v(e)) {
		let i = an(e, t, n, r);
		return i && S(i) && i.catch((e) => {
			on(e, t, n);
		}), i;
	}
	if (m(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(B(e[a], t, n, r));
		return i;
	}
}
function on(e, t, n, r = !0) {
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
			We(), an(o, null, 10, [
				e,
				i,
				a
			]), Ge();
			return;
		}
	}
	sn(e, n, a, r, s);
}
function sn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var V = [], cn = -1, ln = [], un = null, dn = 0, fn = /* @__PURE__ */ Promise.resolve(), pn = null;
function mn(e) {
	let t = pn || fn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function hn(e) {
	let t = cn + 1, n = V.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = V[r], a = xn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function gn(e) {
	if (!(e.flags & 1)) {
		let t = xn(e), n = V[V.length - 1];
		!n || !(e.flags & 2) && t >= xn(n) ? V.push(e) : V.splice(hn(t), 0, e), e.flags |= 1, _n();
	}
}
function _n() {
	pn ||= fn.then(Sn);
}
function vn(e) {
	m(e) ? ln.push(...e) : un && e.id === -1 ? un.splice(dn + 1, 0, e) : e.flags & 1 || (ln.push(e), e.flags |= 1), _n();
}
function yn(e, t, n = cn + 1) {
	for (; n < V.length; n++) {
		let t = V[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			V.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function bn(e) {
	if (ln.length) {
		let e = [...new Set(ln)].sort((e, t) => xn(e) - xn(t));
		if (ln.length = 0, un) {
			un.push(...e);
			return;
		}
		for (un = e, dn = 0; dn < un.length; dn++) {
			let e = un[dn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		un = null, dn = 0;
	}
}
var xn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Sn(e) {
	try {
		for (cn = 0; cn < V.length; cn++) {
			let e = V[cn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), an(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; cn < V.length; cn++) {
			let e = V[cn];
			e && (e.flags &= -2);
		}
		cn = -1, V.length = 0, bn(e), pn = null, (V.length || ln.length) && Sn(e);
	}
}
var H = null, Cn = null;
function wn(e) {
	let t = H;
	return H = e, Cn = e && e.type.__scopeId || null, t;
}
function Tn(e, t = H, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ki(-1);
		let i = wn(t), a;
		try {
			a = e(...n);
		} finally {
			wn(i), r._d && ki(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function En(e, t) {
	if (H === null) return e;
	let n = ca(H), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = i] = t[e];
		a && (v(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && rn(o), r.push({
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
function Dn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (We(), B(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ge());
	}
}
function On(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function kn(e, t, n = !1) {
	let r = qi();
	if (r || Pr) {
		let i = Pr ? Pr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && v(t) ? t.call(r && r.proxy) : t;
	}
}
var An = /* @__PURE__ */ Symbol.for("v-scx"), jn = () => kn(An);
function Mn(e, t, n) {
	return Nn(e, t, n);
}
function Nn(e, t, n = i) {
	let { immediate: r, deep: a, flush: s, once: c } = n, l = u({}, n), d = t && r || !t && s !== "post", f;
	if ($i) {
		if (s === "sync") {
			let e = jn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = o, e.resume = o, e.pause = o, e;
		}
	}
	let p = $;
	l.call = (e, t, n) => B(e, p, t, n);
	let m = !1;
	s === "post" ? l.scheduler = (e) => {
		W(e, p && p.suspense);
	} : s !== "sync" && (m = !0, l.scheduler = (e, t) => {
		t ? e() : gn(e);
	}), l.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = nn(e, t, l);
	return $i && (f ? f.push(h) : d && h()), h;
}
function Pn(e, t, n) {
	let r = this.proxy, i = y(e) ? e.includes(".") ? Fn(r, e) : () => r[e] : e.bind(r, r), a;
	v(t) ? a = t : (a = t.handler, n = t);
	let o = Xi(this), s = Nn(i, a.bind(r), n);
	return o(), s;
}
function Fn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var In = /* @__PURE__ */ Symbol("_vte"), Ln = (e) => e.__isTeleport, Rn = /* @__PURE__ */ Symbol("_leaveCb");
function zn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, zn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/* @__NO_SIDE_EFFECTS__ */
function Bn(e, t) {
	return v(e) ? /* @__PURE__ */ u({ name: e.name }, t, { setup: e }) : e;
}
function Vn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Hn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Un = /* @__PURE__ */ new WeakMap();
function Wn(e, t, n, r, a = !1) {
	if (m(e)) {
		e.forEach((e, i) => Wn(e, t && (m(t) ? t[i] : t), n, r, a));
		return;
	}
	if (Kn(r) && !a) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Wn(e, t, n, r.component.subTree);
		return;
	}
	let o = r.shapeFlag & 4 ? ca(r.component) : r.el, c = a ? null : o, { i: l, r: u } = e, f = t && t.r, h = l.refs === i ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ L(g), b = g === i ? s : (e) => Hn(h, e) ? !1 : p(_, e), x = (e, t) => !(t && Hn(h, t));
	if (f != null && f !== u) {
		if (Gn(t), y(f)) h[f] = null, b(f) && (g[f] = null);
		else if (/* @__PURE__ */ z(f)) {
			let e = t;
			x(f, e.k) && (f.value = null), e.k && (h[e.k] = null);
		}
	}
	if (v(u)) an(u, l, 12, [c, h]);
	else {
		let t = y(u), r = /* @__PURE__ */ z(u);
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
					i(), Un.delete(e);
				};
				t.id = -1, Un.set(e, t), W(t, n);
			} else Gn(e), i();
		}
	}
}
function Gn(e) {
	let t = Un.get(e);
	t && (t.flags |= 8, Un.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var Kn = (e) => !!e.type.__asyncLoader, qn = (e) => e.type.__isKeepAlive;
function Jn(e, t) {
	Xn(e, "a", t);
}
function Yn(e, t) {
	Xn(e, "da", t);
}
function Xn(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Qn(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) qn(e.parent.vnode) && Zn(r, t, n, e), e = e.parent;
	}
}
function Zn(e, t, n, r) {
	let i = Qn(t, e, r, !0);
	ar(() => {
		d(r[t], i);
	}, n);
}
function Qn(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			We();
			let i = Xi(n), a = B(t, n, e, r);
			return i(), Ge(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var $n = (e) => (t, n = $) => {
	(!$i || e === "sp") && Qn(e, (...e) => t(...e), n);
}, er = $n("bm"), tr = $n("m"), nr = $n("bu"), rr = $n("u"), ir = $n("bum"), ar = $n("um"), or = $n("sp"), sr = $n("rtg"), cr = $n("rtc");
function lr(e, t = $) {
	Qn("ec", e, t);
}
var ur = /* @__PURE__ */ Symbol.for("v-ndc");
function dr(e, t, n, r) {
	let i, a = n && n[r], o = m(e);
	if (o || y(e)) {
		let n = o && /* @__PURE__ */ zt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ I(e), s = /* @__PURE__ */ Bt(e), e = rt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Ut(R(e[n])) : R(e[n]) : e[n], n, void 0, a && a[n]);
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
var fr = (e) => e ? Qi(e) ? ca(e) : fr(e.parent) : null, pr = /* @__PURE__ */ u(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => fr(e.parent),
	$root: (e) => fr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Sr(e),
	$forceUpdate: (e) => e.f ||= () => {
		gn(e.update);
	},
	$nextTick: (e) => e.n ||= mn.bind(e.proxy),
	$watch: (e) => Pn.bind(e)
}), mr = (e, t) => e !== i && !e.__isScriptSetup && p(e, t), hr = {
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
			else if (mr(r, t)) return s[t] = 1, r[t];
			else if (a !== i && p(a, t)) return s[t] = 2, a[t];
			else if (p(o, t)) return s[t] = 3, o[t];
			else if (n !== i && p(n, t)) return s[t] = 4, n[t];
			else _r && (s[t] = 0);
		}
		let u = pr[t], d, f;
		if (u) return t === "$attrs" && P(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== i && p(n, t)) return s[t] = 4, n[t];
		if (f = l.config.globalProperties, p(f, t)) return f[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: a, ctx: o } = e;
		return mr(a, t) ? (a[t] = n, !0) : r !== i && p(r, t) ? (r[t] = n, !0) : p(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== i && c[0] !== "$" && p(e, c) || mr(t, c) || p(o, c) || p(r, c) || p(pr, c) || p(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? p(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function gr(e) {
	return m(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var _r = !0;
function vr(e) {
	let t = Sr(e), n = e.proxy, r = e.ctx;
	_r = !1, t.beforeCreate && br(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: p, beforeUpdate: h, updated: g, activated: _, deactivated: y, beforeDestroy: b, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: ie, expose: ae, inheritAttrs: T, components: oe, directives: E, filters: se } = t;
	if (u && yr(u, r, null), s) for (let e in s) {
		let t = s[e];
		v(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		x(t) && (e.data = /* @__PURE__ */ Ft(t));
	}
	if (_r = !0, a) for (let e in a) {
		let t = a[e], i = ua({
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
	if (c) for (let e in c) xr(c[e], r, n, e);
	if (l) {
		let e = v(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			On(t, e[t]);
		});
	}
	d && br(d, e, "c");
	function D(e, t) {
		m(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(er, f), D(tr, p), D(nr, h), D(rr, g), D(Jn, _), D(Yn, y), D(lr, re), D(cr, te), D(sr, ne), D(ir, S), D(ar, w), D(or, ie), m(ae)) if (ae.length) {
		let t = e.exposed ||= {};
		ae.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === o && (e.render = ee), T != null && (e.inheritAttrs = T), oe && (e.components = oe), E && (e.directives = E), ie && Vn(e);
}
function yr(e, t, n = o) {
	m(e) && (e = Dr(e));
	for (let n in e) {
		let r = e[n], i;
		i = x(r) ? "default" in r ? kn(r.from || n, r.default, !0) : kn(r.from || n) : kn(r), /* @__PURE__ */ z(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function br(e, t, n) {
	B(m(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function xr(e, t, n, r) {
	let i = r.includes(".") ? Fn(n, r) : () => n[r];
	if (y(e)) {
		let n = t[e];
		v(n) && Mn(i, n);
	} else if (v(e)) Mn(i, e.bind(n));
	else if (x(e)) if (m(e)) e.forEach((e) => xr(e, t, n, r));
	else {
		let r = v(e.handler) ? e.handler.bind(n) : t[e.handler];
		v(r) && Mn(i, r, e);
	}
}
function Sr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Cr(c, e, o, !0)), Cr(c, t, o)), x(t) && a.set(t, c), c;
}
function Cr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Cr(e, a, n, !0), i && i.forEach((t) => Cr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = wr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var wr = {
	data: Tr,
	props: kr,
	emits: kr,
	methods: Or,
	computed: Or,
	beforeCreate: U,
	created: U,
	beforeMount: U,
	mounted: U,
	beforeUpdate: U,
	updated: U,
	beforeDestroy: U,
	beforeUnmount: U,
	destroyed: U,
	unmounted: U,
	activated: U,
	deactivated: U,
	errorCaptured: U,
	serverPrefetch: U,
	components: Or,
	directives: Or,
	watch: Ar,
	provide: Tr,
	inject: Er
};
function Tr(e, t) {
	return t ? e ? function() {
		return u(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
	} : t : e;
}
function Er(e, t) {
	return Or(Dr(e), Dr(t));
}
function Dr(e) {
	if (m(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function U(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Or(e, t) {
	return e ? u(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function kr(e, t) {
	return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : u(/* @__PURE__ */ Object.create(null), gr(e), gr(t ?? {})) : t;
}
function Ar(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = u(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = U(e[r], t[r]);
	return n;
}
function jr() {
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
var Mr = 0;
function Nr(e, t) {
	return function(n, r = null) {
		v(n) || (n = u({}, n)), r != null && !x(r) && (r = null);
		let i = jr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Mr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: da,
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
					let u = c._ceVNode || X(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ca(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (B(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Pr;
				Pr = c;
				try {
					return e();
				} finally {
					Pr = t;
				}
			}
		};
		return c;
	};
}
var Pr = null, Fr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function Ir(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || i, a = n, o = t.startsWith("update:"), s = o && Fr(r, t.slice(7));
	s && (s.trim && (a = n.map((e) => y(e) ? e.trim() : e)), s.number && (a = n.map(ue)));
	let c, l = r[c = D(t)] || r[c = D(T(t))];
	!l && o && (l = r[c = D(E(t))]), l && B(l, e, 6, a);
	let u = r[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, B(u, e, 6, a);
	}
}
var Lr = /* @__PURE__ */ new WeakMap();
function Rr(e, t, n = !1) {
	let r = n ? Lr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!v(e)) {
		let r = (e) => {
			let n = Rr(e, t, !0);
			n && (s = !0, u(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (x(e) && r.set(e, null), null) : (m(a) ? a.forEach((e) => o[e] = null) : u(o, a), x(e) && r.set(e, o), o);
}
function zr(e, t) {
	return !e || !c(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), p(e, t[0].toLowerCase() + t.slice(1)) || p(e, E(t)) || p(e, t));
}
function Br(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = wn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Z(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Z(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(f, null)), y = t.props ? s : Vr(s);
		}
	} catch (t) {
		Ei.length = 0, on(t, e, 1), v = X(wi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(l) && (y = Hr(y, a)), b = Ri(b, y, !1, !0));
	}
	return n.dirs && (b = Ri(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && zn(b, n.transition), v = b, wn(_), v;
}
var Vr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || c(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Hr = (e, t) => {
	let n = {};
	for (let r in e) (!l(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Ur(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Wr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Gr(o, r, n) && !zr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Wr(r, o, l) : !0 : !!o;
	return !1;
}
function Wr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Gr(t, e, a) && !zr(n, a)) return !0;
	}
	return !1;
}
function Gr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && x(r) && x(i) ? !k(r, i) : r !== i;
}
function Kr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var qr = {}, Jr = () => Object.create(qr), Yr = (e) => Object.getPrototypeOf(e) === qr;
function Xr(e, t, n, r = !1) {
	let i = {}, a = Jr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Qr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ It(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Zr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (zr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (p(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = T(o);
					i[t] = $r(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Qr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !p(t, a) && ((r = E(a)) === a || !p(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = $r(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !p(t, e)) && (delete a[e], l = !0);
	}
	l && tt(e.attrs, "set", "");
}
function Qr(e, t, n, r) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let i in t) {
		if (re(i)) continue;
		let l = t[i], u;
		a && p(a, u = T(i)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : zr(e.emitsOptions, i) || (!(i in r) || l !== r[i]) && (r[i] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ L(n), r = c || i;
		for (let i = 0; i < o.length; i++) {
			let s = o[i];
			n[s] = $r(a, t, s, r[s], e, !p(r, s));
		}
	}
	return s;
}
function $r(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = p(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && v(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Xi(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var ei = /* @__PURE__ */ new WeakMap();
function ti(e, t, n = !1) {
	let r = n ? ei : t.propsCache, o = r.get(e);
	if (o) return o;
	let s = e.props, c = {}, l = [], d = !1;
	if (!v(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = ti(e, t, !0);
			u(c, n), r && l.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return x(e) && r.set(e, a), a;
	if (m(s)) for (let e = 0; e < s.length; e++) {
		let t = T(s[e]);
		ni(t) && (c[t] = i);
	}
	else if (s) for (let e in s) {
		let t = T(e);
		if (ni(t)) {
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
function ni(e) {
	return e[0] !== "$" && !re(e);
}
var ri = (e) => e === "_" || e === "_ctx" || e === "$stable", ii = (e) => m(e) ? e.map(Z) : [Z(e)], ai = (e, t, n) => {
	if (t._n) return t;
	let r = Tn((...e) => ii(t(...e)), n);
	return r._c = !1, r;
}, oi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ri(n)) continue;
		let i = e[n];
		if (v(i)) t[n] = ai(n, i, r);
		else if (i != null) {
			let e = ii(i);
			t[n] = () => e;
		}
	}
}, si = (e, t) => {
	let n = ii(t);
	e.slots.default = () => n;
}, ci = (e, t, n) => {
	for (let r in t) (n || !ri(r)) && (e[r] = t[r]);
}, li = (e, t, n) => {
	let r = e.slots = Jr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ci(r, t, n), n && le(r, "_", e, !0)) : oi(t, r);
	} else t && si(e, t);
}, ui = (e, t, n) => {
	let { vnode: r, slots: a } = e, o = !0, s = i;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : ci(a, t, n) : (o = !t.$stable, oi(t, a)), s = t;
	} else t && (si(e, t), s = { default: 1 });
	if (o) for (let e in a) !ri(e) && s[e] == null && delete a[e];
}, W = Si;
function di(e) {
	return fi(e);
}
function fi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: r, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = o, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ni(e, t) && (r = be(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Ci:
				y(e, t, n, r);
				break;
			case wi:
				b(e, t, n, r);
				break;
			case Ti:
				e ?? x(t, n, r, o);
				break;
			case G:
				oe(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? E(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, k);
		}
		u != null && i ? Wn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Wn(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, o, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, i, a, pi(e, o), s, u), _ && Dn(e, null, i, "created"), te(d, e, e.scopeId, s, i), m) {
			for (let e in m) e !== "value" && !re(e) && c(d, e, null, m[e], o, i);
			"value" in m && c(d, "value", null, m.value, o), (f = m.onVnodeBeforeMount) && Q(f, i, e);
		}
		_ && Dn(e, null, i, "beforeMount");
		let v = hi(a, g);
		v && g.beforeEnter(d), r(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && W(() => {
			try {
				f && Q(f, i, e), v && g.enter(d), _ && Dn(e, null, i, "mounted");
			} finally {}
		}, a);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || xi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Vi(e[l]) : Z(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, t, n, r, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || i, h = t.props || i, g;
		if (n && mi(n, !1), (g = h.onVnodeBeforeUpdate) && Q(g, n, t, e), f && Dn(t, e, n, "beforeUpdate"), n && mi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, n, r, pi(t, a), o) : s || ue(e, t, l, null, n, r, pi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && W(() => {
			g && Q(g, n, t, e), f && Dn(t, e, n, "updated");
		}, r);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === G || !Ni(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), ne(t.children || [], n, f, a, o, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, a, o, s, c), (t.key != null || a && t === a.subTree) && gi(e, t, !0)) : ue(e, t, n, f, a, o, s, c, l);
	}, E = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : D(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = Ki(e, r, i);
		if (qn(e) && (s.ctx.renderer = k), ea(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, O, o), !e.el) {
				let r = s.subTree = X(wi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else O(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (Ur(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, O = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = vi(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							W(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				mi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Q(d, s, t, c), mi(e, !0);
				let f = Br(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && Kr(e, f.el), r && W(r, i), (d = t.props && t.props.onVnodeUpdated) && W(() => Q(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Kn(t);
				if (mi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Q(o, d, t), mi(e, !0), s && we) {
					let t = () => {
						e.subTree = Br(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Br(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && W(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					W(() => Q(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Kn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && W(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ae(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => gn(u), mi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Zr(e, t.props, r, n), ui(e, t.children, n), We(), yn(e), Ge();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, i, o, s, c, l) => {
		e ||= a, t ||= a;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Vi(t[p]) : Z(t[p]);
			v(e[p], r, n, null, i, o, s, c, l);
		}
		u > d ? ye(e, i, o, !0, !1, f) : ne(t, n, r, i, o, s, c, l, f);
	}, pe = (e, t, n, r, i, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], a = t[u] = l ? Vi(t[u]) : Z(t[u]);
			if (Ni(r, a)) v(r, a, n, null, i, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], a = t[p] = l ? Vi(t[p]) : Z(t[p]);
			if (Ni(r, a)) v(r, a, n, null, i, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, a = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Vi(t[u]) : Z(t[u]), n, a, i, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], i, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Vi(t[u]) : Z(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					he(r, i, o, !0);
					continue;
				}
				let a;
				if (r.key != null) a = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Ni(r, t[_])) {
					a = _;
					break;
				}
				a === void 0 ? he(r, i, o, !0) : (C[a - h] = u + 1, a >= S ? S = a : x = !0, v(r, t[a], n, null, i, o, s, c, l), y++);
			}
			let w = x ? _i(C) : a;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, a = t[e], f = t[e + 1], p = e + 1 < d ? f.el || bi(f) : r;
				C[u] === 0 ? v(null, a, n, p, i, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(a, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, i, a = null) => {
		let { el: o, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, i);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, i);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, k);
			return;
		}
		if (c === G) {
			r(o, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, i);
			r(e.anchor, t, n);
			return;
		}
		if (c === Ti) {
			S(e, t, n);
			return;
		}
		if (i !== 2 && d & 1 && l) if (i === 0) l.beforeEnter(o), r(o, t, n), W(() => l.enter(o), a);
		else {
			let { leave: i, delayLeave: a, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(o) : r(o, t, n);
			}, d = () => {
				o._isLeaving && o[Rn](!0), i(o, () => {
					u(), c && c();
				});
			};
			a ? a(o, u, d) : d();
		}
		else r(o, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (We(), Wn(s, null, n, e, !0), Ge()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Kn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Q(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Dn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, k, r) : l && !l.hasOnce && (a !== G || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === G && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && W(() => {
			_ && Q(_, t, e), h && Dn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === G) {
			_e(n, r);
			return;
		}
		if (t === Ti) {
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
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		yi(c), yi(l), r && ce(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && W(s, t), W(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[In];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, yn(r), bn(), !1);
	}, k = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: se,
		mc: ne,
		pc: ue,
		pbc: ae,
		n: be,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(k)), {
		render: Se,
		hydrate: Ce,
		createApp: Nr(Se, Ce)
	};
}
function pi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (m(r) && m(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Vi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && gi(t, a)), a.type === Ci && (a.patchFlag === -1 && (a = i[e] = Vi(a)), a.el = t.el), a.type === wi && !a.el && (a.el = t.el);
	}
}
function _i(e) {
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
function vi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : vi(t);
}
function yi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function bi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? bi(t.subTree) : null;
}
var xi = (e) => e.__isSuspense;
function Si(e, t) {
	t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : vn(e);
}
var G = /* @__PURE__ */ Symbol.for("v-fgt"), Ci = /* @__PURE__ */ Symbol.for("v-txt"), wi = /* @__PURE__ */ Symbol.for("v-cmt"), Ti = /* @__PURE__ */ Symbol.for("v-stc"), Ei = [], K = null;
function q(e = !1) {
	Ei.push(K = e ? null : []);
}
function Di() {
	Ei.pop(), K = Ei[Ei.length - 1] || null;
}
var Oi = 1;
function ki(e, t = !1) {
	Oi += e, e < 0 && K && t && (K.hasOnce = !0);
}
function Ai(e) {
	return e.dynamicChildren = Oi > 0 ? K || a : null, Di(), Oi > 0 && K && K.push(e), e;
}
function J(e, t, n, r, i, a) {
	return Ai(Y(e, t, n, r, i, a, !0));
}
function ji(e, t, n, r, i) {
	return Ai(X(e, t, n, r, i, !0));
}
function Mi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ni(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Pi = ({ key: e }) => e ?? null, Fi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : y(e) || /* @__PURE__ */ z(e) || v(e) ? {
	i: H,
	r: e,
	k: t,
	f: !!n
} : e);
function Y(e, t = null, n = null, r = 0, i = null, a = e === G ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Pi(t),
		ref: t && Fi(t),
		scopeId: Cn,
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
		ctx: H
	};
	return s ? (Hi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= y(n) ? 8 : 16), Oi > 0 && !o && K && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && K.push(c), c;
}
var X = Ii;
function Ii(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === ur) && (e = wi), Mi(e)) {
		let r = Ri(e, t, !0);
		return n && Hi(r, n), Oi > 0 && !a && K && (r.shapeFlag & 6 ? K[K.indexOf(e)] = r : K.push(r)), r.patchFlag = -2, r;
	}
	if (la(e) && (e = e.__vccOpts), t) {
		t = Li(t);
		let { class: e, style: n } = t;
		e && !y(e) && (t.class = ve(e)), x(n) && (/* @__PURE__ */ Vt(n) && !m(n) && (n = u({}, n)), t.style = pe(n));
	}
	let o = y(e) ? 1 : xi(e) ? 128 : Ln(e) ? 64 : x(e) ? 4 : v(e) ? 2 : 0;
	return Y(e, t, n, r, i, o, a, !0);
}
function Li(e) {
	return e ? /* @__PURE__ */ Vt(e) || Yr(e) ? u({}, e) : e : null;
}
function Ri(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ui(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Pi(l),
		ref: t && t.ref ? n && a ? m(a) ? a.concat(Fi(t)) : [a, Fi(t)] : Fi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== G ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ri(e.ssContent),
		ssFallback: e.ssFallback && Ri(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && zn(u, c.clone(u)), u;
}
function zi(e = " ", t = 0) {
	return X(Ci, null, e, t);
}
function Bi(e = "", t = !1) {
	return t ? (q(), ji(wi, null, e)) : X(wi, null, e);
}
function Z(e) {
	return e == null || typeof e == "boolean" ? X(wi) : m(e) ? X(G, null, e.slice()) : Mi(e) ? Vi(e) : X(Ci, null, String(e));
}
function Vi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ri(e);
}
function Hi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (m(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Hi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Yr(t) ? t._ctx = H : r === 3 && H && (H.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else v(t) ? (t = {
		default: t,
		_ctx: H
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Ui(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ve([t.class, r.class]));
		else if (e === "style") t.style = pe([t.style, r.style]);
		else if (c(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(m(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !l(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Q(e, t, n, r = null) {
	B(e, t, 7, [n, r]);
}
var Wi = jr(), Gi = 0;
function Ki(e, t, n) {
	let r = e.type, a = (t ? t.appContext : e.appContext) || Wi, o = {
		uid: Gi++,
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
		scope: new De(!0),
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
		propsOptions: ti(r, a),
		emitsOptions: Rr(r, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ir.bind(null, o), e.ce && e.ce(o), o;
}
var $ = null, qi = () => $ || H, Ji, Yi;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ji = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), Yi = t("__VUE_SSR_SETTERS__", (e) => $i = e);
}
var Xi = (e) => {
	let t = $;
	return Ji(e), e.scope.on(), () => {
		e.scope.off(), Ji(t);
	};
}, Zi = () => {
	$ && $.scope.off(), Ji(null);
};
function Qi(e) {
	return e.vnode.shapeFlag & 4;
}
var $i = !1;
function ea(e, t = !1, n = !1) {
	t && Yi(t);
	let { props: r, children: i } = e.vnode, a = Qi(e);
	Xr(e, r, a, t), li(e, i, n || t);
	let o = a ? ta(e, t) : void 0;
	return t && Yi(!1), o;
}
function ta(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hr);
	let { setup: r } = n;
	if (r) {
		We();
		let n = e.setupContext = r.length > 1 ? sa(e) : null, i = Xi(e), a = an(r, e, 0, [e.props, n]), o = S(a);
		if (Ge(), i(), (o || e.sp) && !Kn(e) && Vn(e), o) {
			if (a.then(Zi, Zi), t) return a.then((n) => {
				na(e, n, t);
			}).catch((t) => {
				on(t, e, 0);
			});
			e.asyncDep = a;
		} else na(e, a, t);
	} else aa(e, t);
}
function na(e, t, n) {
	v(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : x(t) && (e.setupState = Yt(t)), aa(e, n);
}
var ra, ia;
function aa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && ra && !r.render) {
			let t = r.template || Sr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = ra(t, u(u({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || o, ia && ia(e);
	}
	{
		let t = Xi(e);
		We();
		try {
			vr(e);
		} finally {
			Ge(), t();
		}
	}
}
var oa = { get(e, t) {
	return P(e, "get", ""), e[t];
} };
function sa(e) {
	return {
		attrs: new Proxy(e.attrs, oa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ca(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Yt(Ht(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in pr) return pr[n](e);
		},
		has(e, t) {
			return t in e || t in pr;
		}
	}) : e.proxy;
}
function la(e) {
	return v(e) && "__vccOpts" in e;
}
var ua = (e, t) => /* @__PURE__ */ Zt(e, t, $i), da = "3.5.34", fa = void 0, pa = typeof window < "u" && window.trustedTypes;
if (pa) try {
	fa = /* @__PURE__ */ pa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ma = fa ? (e) => fa.createHTML(e) : (e) => e, ha = "http://www.w3.org/2000/svg", ga = "http://www.w3.org/1998/Math/MathML", _a = typeof document < "u" ? document : null, va = _a && /* @__PURE__ */ _a.createElement("template"), ya = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? _a.createElementNS(ha, e) : t === "mathml" ? _a.createElementNS(ga, e) : n ? _a.createElement(e, { is: n }) : _a.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => _a.createTextNode(e),
	createComment: (e) => _a.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => _a.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			va.innerHTML = ma(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = va.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ba = /* @__PURE__ */ Symbol("_vtc");
function xa(e, t, n) {
	let r = e[ba];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Sa = /* @__PURE__ */ Symbol("_vod"), Ca = /* @__PURE__ */ Symbol("_vsh"), wa = /* @__PURE__ */ Symbol(""), Ta = /(?:^|;)\s*display\s*:/;
function Ea(e, t, n) {
	let r = e.style, i = y(n), a = !1;
	if (n && !i) {
		if (t) if (y(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Oa(r, t, "");
		}
		else for (let e in t) n[e] ?? Oa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Oa(r, i, "") : Ma(e, i, !y(t) && t ? t[i] : void 0, o) || Oa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[wa];
			e && (n += ";" + e), r.cssText = n, a = Ta.test(n);
		}
	} else t && e.removeAttribute("style");
	Sa in e && (e[Sa] = a ? r.display : "", e[Ca] && (r.display = "none"));
}
var Da = /\s*!important$/;
function Oa(e, t, n) {
	if (m(n)) n.forEach((n) => Oa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = ja(e, t);
		Da.test(n) ? e.setProperty(E(r), n.replace(Da, ""), "important") : e[r] = n;
	}
}
var ka = [
	"Webkit",
	"Moz",
	"ms"
], Aa = {};
function ja(e, t) {
	let n = Aa[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return Aa[t] = r;
	r = se(r);
	for (let n = 0; n < ka.length; n++) {
		let i = ka[n] + r;
		if (i in e) return Aa[t] = i;
	}
	return t;
}
function Ma(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && y(r) && n === r;
}
var Na = "http://www.w3.org/1999/xlink";
function Pa(e, t, n, r, i, a = be(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Na, t.slice(6, t.length)) : e.setAttributeNS(Na, t, n) : n == null || a && !xe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : b(n) ? String(n) : n);
}
function Fa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ma(n) : n);
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
		r === "boolean" ? n = xe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ia(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function La(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ra = /* @__PURE__ */ Symbol("_vei");
function za(e, t, n, r, i = null) {
	let a = e[Ra] || (e[Ra] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Va(t);
		r ? Ia(e, n, a[t] = Ga(r, i), s) : o && (La(e, n, o, s), a[t] = void 0);
	}
}
var Ba = /(?:Once|Passive|Capture)$/;
function Va(e) {
	let t;
	if (Ba.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Ba);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var Ha = 0, Ua = /* @__PURE__ */ Promise.resolve(), Wa = () => Ha ||= (Ua.then(() => Ha = 0), Date.now());
function Ga(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		B(Ka(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Wa(), n;
}
function Ka(e, t) {
	if (m(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var qa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ja = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? xa(e, r, o) : t === "style" ? Ea(e, n, r) : c(t) ? l(t) || za(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ya(e, t, r, o)) ? (Fa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pa(e, t, r, o, a, t !== "value")) : e._isVueCE && (Xa(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !y(r))) ? Fa(e, T(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pa(e, t, r, o));
};
function Ya(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && qa(t) && v(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return qa(t) && y(n) ? !1 : t in e;
}
function Xa(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var Za = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return m(t) ? (e) => ce(t, e) : t;
};
function Qa(e) {
	e.target.composing = !0;
}
function $a(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var eo = /* @__PURE__ */ Symbol("_assign");
function to(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var no = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[eo] = Za(i);
		let a = r || i.props && i.props.type === "number";
		Ia(e, t ? "change" : "input", (t) => {
			t.target.composing || e[eo](to(e.value, n, a));
		}), (n || a) && Ia(e, "change", () => {
			e.value = to(e.value, n, a);
		}), t || (Ia(e, "compositionstart", Qa), Ia(e, "compositionend", $a), Ia(e, "change", $a));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[eo] = Za(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ro = {
	deep: !0,
	created(e, t, n) {
		e[eo] = Za(n), Ia(e, "change", () => {
			let t = e._modelValue, n = ao(e), r = e.checked, i = e[eo];
			if (m(t)) {
				let e = Ce(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (g(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(oo(e, r));
		});
	},
	mounted: io,
	beforeUpdate(e, t, n) {
		e[eo] = Za(n), io(e, t, n);
	}
};
function io(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (m(t)) i = Ce(t, r.props.value) > -1;
	else if (g(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = k(t, oo(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
function ao(e) {
	return "_value" in e ? e._value : e.value;
}
function oo(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var so = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], co = {
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
	exact: (e, t) => so.some((n) => e[`${n}Key`] && !t.includes(n))
}, lo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = co[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, uo = /* @__PURE__ */ u({ patchProp: Ja }, ya), fo;
function po() {
	return fo ||= di(uo);
}
var mo = ((...e) => {
	let t = po().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = go(e);
		if (!r) return;
		let i = t._component;
		!v(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ho(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ho(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function go(e) {
	return y(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/view/apps/mobile-journals/MobileJournalApp.vue?vue&type=script&setup=true&lang.ts
var _o = { class: "mobile-journal-shell" }, vo = { class: "mobile-journal-shell__app-header" }, yo = { class: "otg-badge otg-badge-primary" }, bo = { class: "mobile-journal-shell__search" }, xo = {
	class: "mobile-journal-shell__layout",
	"aria-label": "Journal browser"
}, So = {
	class: "mobile-journal-shell__entries",
	"aria-label": "Entries"
}, Co = ["onClick"], wo = {
	key: 0,
	class: "mobile-journal-shell__reader"
}, To = { class: "mobile-journal-shell__reader-header" }, Eo = {
	class: "mobile-journal-shell__pages",
	"aria-label": "Pages"
}, Do = ["onClick"], Oo = { class: "mobile-journal-shell__page otg-card" }, ko = ["innerHTML"], Ao = {
	key: 1,
	class: "mobile-journal-shell__empty"
}, jo = /* @__PURE__ */ Bn({
	__name: "MobileJournalApp",
	props: { journals: {} },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt(""), r = /* @__PURE__ */ Wt(t.journals[0]?.id ?? ""), i = /* @__PURE__ */ Wt(t.journals[0]?.pages[0]?.id ?? ""), a = ua(() => {
			let e = n.value.trim().toLocaleLowerCase();
			return e ? t.journals.filter((t) => {
				let n = t.pages.some((t) => t.name.toLocaleLowerCase().includes(e));
				return t.name.toLocaleLowerCase().includes(e) || t.folderName?.toLocaleLowerCase().includes(e) || n;
			}) : t.journals;
		}), o = ua(() => t.journals.find((e) => e.id === r.value) ?? t.journals[0]), s = ua(() => o.value?.pages.find((e) => e.id === i.value) ?? o.value?.pages[0]);
		function c(e) {
			r.value = e.id, i.value = e.pages[0]?.id ?? "";
		}
		function l(e) {
			i.value = e.id;
		}
		return (e, t) => (q(), J("main", _o, [
			Y("header", vo, [t[1] ||= Y("div", null, [Y("p", null, "WFRP On The Go"), Y("h1", null, "Journals")], -1), Y("span", yo, A(a.value.length), 1)]),
			Y("label", bo, [t[2] ||= Y("span", null, "Search", -1), En(Y("input", {
				"onUpdate:modelValue": t[0] ||= (e) => n.value = e,
				type: "search",
				autocomplete: "off",
				class: "otg-input otg-input-bordered"
			}, null, 512), [[no, n.value]])]),
			Y("section", xo, [Y("nav", So, [(q(!0), J(G, null, dr(a.value, (e) => (q(), J("button", {
				key: e.id,
				class: ve(["otg-btn otg-btn-ghost", { "mobile-journal-shell__entry--active": e.id === o.value?.id }]),
				type: "button",
				onClick: (t) => c(e)
			}, [
				Y("span", null, A(e.folderName ?? "World"), 1),
				Y("strong", null, A(e.name), 1),
				Y("small", null, A(e.pages.length) + " pages", 1)
			], 10, Co))), 128))]), o.value && s.value ? (q(), J("article", wo, [
				Y("header", To, [Y("p", null, A(o.value.folderName ?? "World"), 1), Y("h2", null, A(o.value.name), 1)]),
				Y("nav", Eo, [(q(!0), J(G, null, dr(o.value.pages, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: ve(["otg-btn otg-btn-sm", { "mobile-journal-shell__page--active": e.id === s.value.id }]),
					onClick: (t) => l(e)
				}, A(e.name), 11, Do))), 128))]),
				Y("section", Oo, [Y("h3", null, A(s.value.name), 1), Y("div", {
					class: "mobile-journal-shell__content",
					innerHTML: s.value.html
				}, null, 8, ko)])
			])) : (q(), J("section", Ao, [...t[3] ||= [Y("h2", null, "No Journals", -1)]]))])
		]));
	}
}), Mo = { class: "on-the-go-shell" }, No = { class: "on-the-go-shell__top-bar" }, Po = {
	key: 1,
	class: "on-the-go-shell__top-bar-spacer",
	"aria-hidden": "true"
}, Fo = {
	key: 0,
	class: "on-the-go-shell__home",
	"aria-label": "Main menu"
}, Io = {
	key: 1,
	class: "on-the-go-shell__content"
}, Lo = { class: "on-the-go-shell__toggle otg-card" }, Ro = { class: "on-the-go-shell__field" }, zo = {
	class: "on-the-go-shell__gm-list",
	"aria-label": "Enabled GM users"
}, Bo = ["checked", "onChange"], Vo = { class: "on-the-go-shell__actions" }, Ho = { "aria-live": "polite" }, Uo = ["disabled"], Wo = ["disabled"], Go = /* @__PURE__ */ Bn({
	__name: "MobileShellApp",
	props: {
		activationSettings: {},
		disableForcedMode: { type: Function },
		journals: {},
		saveActivationSettings: { type: Function }
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt("home"), r = /* @__PURE__ */ Wt(!1), i = /* @__PURE__ */ Wt(""), a = /* @__PURE__ */ Ft(m(t.activationSettings)), o = ua(() => n.value === "journals" ? "Journals" : n.value === "settings" ? "Settings" : "Home"), s = ua(() => t.journals.reduce((e, t) => e + t.pages.length, 0));
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
		return (t, u) => (q(), J("main", Mo, [Y("header", No, [
			n.value === "home" ? (q(), J("span", Po)) : (q(), J("button", {
				key: 0,
				type: "button",
				class: "otg-btn otg-btn-square otg-btn-ghost",
				"aria-label": "Back to home",
				onClick: l
			}, [...u[4] ||= [Y("i", {
				class: "fa-solid fa-chevron-left",
				"aria-hidden": "true"
			}, null, -1)]])),
			Y("div", null, [u[5] ||= Y("p", null, "WFRP On The Go", -1), Y("h1", null, A(o.value), 1)]),
			u[6] ||= Y("span", {
				class: "on-the-go-shell__top-bar-spacer",
				"aria-hidden": "true"
			}, null, -1)
		]), n.value === "home" ? (q(), J("section", Fo, [Y("button", {
			type: "button",
			class: "on-the-go-shell__menu-button otg-card",
			onClick: u[0] ||= (e) => c("journals")
		}, [u[8] ||= Y("i", {
			class: "fa-solid fa-book-open",
			"aria-hidden": "true"
		}, null, -1), Y("span", null, [u[7] ||= Y("strong", null, "Journals", -1), Y("small", null, A(e.journals.length) + " entries, " + A(s.value) + " pages", 1)])]), Y("button", {
			type: "button",
			class: "on-the-go-shell__menu-button otg-card",
			onClick: u[1] ||= (e) => c("settings")
		}, [u[10] ||= Y("i", {
			class: "fa-solid fa-sliders",
			"aria-hidden": "true"
		}, null, -1), Y("span", null, [u[9] ||= Y("strong", null, "Settings", -1), Y("small", null, A(a.forceMobileUi ? "Forced on this client" : "Automatic activation"), 1)])])])) : n.value === "journals" ? (q(), J("section", Io, [X(jo, { journals: e.journals }, null, 8, ["journals"])])) : (q(), J("form", {
			key: 2,
			class: "on-the-go-shell__settings",
			onSubmit: lo(f, ["prevent"])
		}, [
			Y("label", Lo, [Y("span", null, [u[11] ||= Y("strong", null, "Force On This Client", -1), Y("small", null, A(a.forceMobileUi ? "On" : "Off"), 1)]), En(Y("input", {
				"onUpdate:modelValue": u[2] ||= (e) => a.forceMobileUi = e,
				type: "checkbox",
				class: "otg-toggle otg-toggle-primary"
			}, null, 512), [[ro, a.forceMobileUi]])]),
			Y("label", Ro, [u[12] ||= Y("span", null, "Mobile Width Threshold", -1), En(Y("input", {
				"onUpdate:modelValue": u[3] ||= (e) => a.mobileWidthThreshold = e,
				type: "number",
				min: "320",
				max: "1400",
				step: "10",
				class: "otg-input otg-input-bordered"
			}, null, 512), [[
				no,
				a.mobileWidthThreshold,
				void 0,
				{ number: !0 }
			]])]),
			Y("section", zo, [u[13] ||= Y("h2", null, "Enabled GM Users", -1), (q(!0), J(G, null, dr(a.users, (e) => (q(), J("label", {
				key: e.id,
				class: ve(["on-the-go-shell__toggle otg-card", { "on-the-go-shell__toggle--current": e.isCurrentUser }])
			}, [Y("span", null, [Y("strong", null, A(e.name), 1), Y("small", null, A(e.isCurrentUser ? "Current user" : "GM user"), 1)]), Y("input", {
				type: "checkbox",
				class: "otg-toggle otg-toggle-primary",
				checked: e.enabled,
				onChange: (t) => d(e.id, t)
			}, null, 40, Bo)], 2))), 128))]),
			Y("footer", Vo, [
				Y("p", Ho, A(i.value), 1),
				Y("button", {
					type: "button",
					class: "otg-btn otg-btn-outline",
					disabled: r.value,
					onClick: p
				}, [...u[14] ||= [Y("i", {
					class: "fa-solid fa-power-off",
					"aria-hidden": "true"
				}, null, -1), Y("span", null, "Turn Off Forced Mode", -1)]], 8, Uo),
				Y("button", {
					type: "submit",
					class: "otg-btn otg-btn-primary",
					disabled: r.value
				}, [u[15] ||= Y("i", {
					class: "fa-solid fa-floppy-disk",
					"aria-hidden": "true"
				}, null, -1), Y("span", null, A(r.value ? "Saving" : "Save"), 1)], 8, Wo)
			])
		], 32))]));
	}
});
//#endregion
//#region src/module/journals/mobile-journal-adapter.ts
function Ko() {
	return qo().map(Jo).filter((e) => e !== void 0).sort(es);
}
function qo() {
	let e = game.journal;
	return Array.isArray(e.contents) ? e.contents : [];
}
function Jo(e) {
	if (!rs(e)) return;
	let t = Zo(e);
	if (!t) return;
	let n = $o(e.folder), r = Yo(e.pages), i = {
		id: t.id,
		name: t.name,
		pages: r
	};
	return n && (i.folderName = n), i;
}
function Yo(e) {
	return Qo(e).map(Xo).filter((e) => e !== void 0).sort((e, t) => e.sort - t.sort || e.name.localeCompare(t.name));
}
function Xo(e) {
	if (!rs(e)) return;
	let t = Zo(e);
	if (t) return {
		html: ns((rs(e.text) ? e.text : {}).content) ?? "",
		id: t.id,
		name: t.name,
		sort: ts(e.sort) ?? 0,
		type: ns(e.type) ?? "unknown"
	};
}
function Zo(e) {
	let t = ns(e.id), n = ns(e.name);
	if (!(!t || !n)) return {
		id: t,
		name: n
	};
}
function Qo(e) {
	return Array.isArray(e) ? e : rs(e) && Array.isArray(e.contents) ? e.contents : [];
}
function $o(e) {
	if (rs(e)) return ns(e.name);
}
function es(e, t) {
	return e.name.localeCompare(t.name);
}
function ts(e) {
	if (typeof e == "number" && Number.isFinite(e)) return e;
}
function ns(e) {
	if (typeof e == "string" && e.trim() !== "") return e;
}
function rs(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region src/module/mobile-ui-styles.ts
var is = "data-wfrp-on-the-go-mobile-ui-styles", as;
async function os() {
	as ??= ss(), await as;
}
async function ss() {
	await Promise.resolve({            });
	let e = new URL("../styles/mobile.css", import.meta.url).href;
	await cs(e);
}
async function cs(e) {
	document.querySelector(`link[${is}="true"]`) || await new Promise((t, n) => {
		let r = document.createElement("link");
		r.rel = "stylesheet", r.href = e, r.setAttribute(is, "true"), r.addEventListener("load", () => {
			t();
		}, { once: !0 }), r.addEventListener("error", () => {
			n(/* @__PURE__ */ Error("Mobile UI stylesheet failed to load."));
		}, { once: !0 }), document.head.append(r);
	});
}
//#endregion
//#region src/module/settings/activation-settings.ts
var ls = "enabledGmUserIds", us = "forceMobileUi", ds = "mobileWidthThreshold", fs = 800;
function ps() {
	game.settings.register(e, ls, {
		name: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.name",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.hint",
		scope: "world",
		config: !1,
		default: [],
		type: Object
	}), game.settings.register(e, ds, {
		name: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.name",
		hint: "WFRP_ON_THE_GO.settings.mobileWidthThreshold.hint",
		scope: "world",
		config: !0,
		restricted: !0,
		default: fs,
		type: Number,
		range: {
			min: 320,
			max: 1400,
			step: 10
		}
	}), game.settings.register(e, us, {
		name: "WFRP_ON_THE_GO.settings.forceMobileUi.name",
		hint: "WFRP_ON_THE_GO.settings.forceMobileUi.hint",
		scope: "client",
		config: !0,
		default: !1,
		type: Boolean
	});
}
function ms() {
	let e = new Set(bs());
	return ws().map((t) => ({
		enabled: e.has(t.id),
		id: t.id,
		isCurrentUser: t.id === game.user.id,
		name: t.name
	}));
}
function hs() {
	return {
		forceMobileUi: xs(),
		mobileWidthThreshold: Ss(),
		users: ms()
	};
}
async function gs(t) {
	let n = new Set(ws().map((e) => e.id)), r = t.filter((e, r) => n.has(e) && t.indexOf(e) === r);
	await game.settings.set(e, ls, r);
}
async function _s(t) {
	await gs(t.users.filter((e) => e.enabled).map((e) => e.id)), await game.settings.set(e, ds, Cs(t.mobileWidthThreshold)), await game.settings.set(e, us, t.forceMobileUi);
}
async function vs(t) {
	await game.settings.set(e, us, t);
}
function ys(e = window.innerWidth) {
	return game.user.isGM && bs().includes(game.user.id) && (xs() || e <= Ss());
}
function bs() {
	let t = game.settings.get(e, ls);
	return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
}
function xs() {
	return game.settings.get(e, us) === !0;
}
function Ss() {
	let t = game.settings.get(e, ds);
	return typeof t != "number" || !Number.isFinite(t) ? fs : t;
}
function Cs(e) {
	return Number.isFinite(e) ? Math.min(1400, Math.max(320, Math.round(e))) : fs;
}
function ws() {
	return game.users.filter((e) => e.isGM);
}
//#endregion
//#region src/module/apps/FoundryVueApplication.ts
var Ts = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp-on-the-go-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp-on-the-go-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = mo(this.getVueComponent(), r), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Es = "wfrp-on-the-go-mode-active", Ds = "wfrp-on-the-go-mobile-shell-window", Os = class extends Ts {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${e}-mobile-shell`,
		classes: [e, Ds],
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
		return Go;
	}
	getVueProps() {
		return {
			activationSettings: hs(),
			disableForcedMode: async () => {
				await vs(!1);
			},
			journals: Ko(),
			saveActivationSettings: _s
		};
	}
	async _renderHTML(e, t) {
		return await os(), await super._renderHTML(e, t);
	}
	_replaceHTML(e, t, n) {
		document.body.classList.add(Es), super._replaceHTML(e, t, n);
	}
}, ks = { class: "starter-workbench" }, As = {
	class: "starter-workbench__panel",
	"aria-labelledby": "status-heading"
}, js = { class: "starter-workbench__facts" }, Ms = /* @__PURE__ */ Bn({
	__name: "StarterWorkbenchApp",
	props: {
		hostName: { default: "Unknown user" },
		systemId: { default: "preview" }
	},
	setup(e) {
		return (t, n) => (q(), J("main", ks, [
			n[3] ||= Y("header", { class: "starter-workbench__header" }, [Y("p", { class: "starter-workbench__eyebrow" }, "WFRP On The Go"), Y("h1", null, "Diagnostic Workbench")], -1),
			Y("section", As, [n[2] ||= Y("h2", { id: "status-heading" }, "Runtime Context", -1), Y("dl", js, [Y("div", null, [n[0] ||= Y("dt", null, "User", -1), Y("dd", null, A(e.hostName), 1)]), Y("div", null, [n[1] ||= Y("dt", null, "System", -1), Y("dd", null, A(e.systemId), 1)])])]),
			n[4] ||= Y("section", {
				class: "starter-workbench__panel",
				"aria-labelledby": "next-heading"
			}, [Y("h2", { id: "next-heading" }, "Next Slice"), Y("p", null, " The first project-owned workflow is a GM-only mobile journal browser. Keep Foundry document work in the module layer, then pass plain data into Vue. ")], -1)
		]));
	}
}), Ns = class extends Ts {
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
		return Ms;
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
function Ps() {
	return {
		isMobileUiActive() {
			return ys();
		},
		async openDiagnosticWorkbench() {
			await new Ns().render(!0);
		},
		async openMobileUi() {
			await new Os().render(!0);
		},
		async openMobileJournals() {
			await new Os().render(!0);
		}
	};
}
//#endregion
//#region src/module/logging.ts
function Fs(e, ...t) {
	console.info(e, ...t);
}
function Is(e, ...t) {
	console.warn(e, ...t);
}
//#endregion
//#region src/module/open-mobile-ui.ts
async function Ls() {
	ys() && await new Os().render(!0);
}
//#endregion
//#region src/view/apps/activation-settings/ActivationSettingsApp.vue?vue&type=script&setup=true&lang.ts
var Rs = { class: "wfrp-on-the-go-settings" }, zs = {
	key: 0,
	class: "wfrp-on-the-go-settings__users"
}, Bs = ["value"], Vs = { key: 0 }, Hs = {
	key: 1,
	class: "wfrp-on-the-go-settings__empty"
}, Us = { class: "wfrp-on-the-go-settings__actions" }, Ws = { "aria-live": "polite" }, Gs = ["disabled"], Ks = /* @__PURE__ */ Bn({
	__name: "ActivationSettingsApp",
	props: {
		saveEnabledGmUserIds: { type: Function },
		users: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt(s()), r = /* @__PURE__ */ Wt(!1), i = /* @__PURE__ */ Wt(!1), a = ua(() => t.users.length > 0);
		Mn(() => t.users, () => {
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
		return (t, s) => (q(), J("main", Rs, [s[1] ||= Y("header", { class: "wfrp-on-the-go-settings__header" }, [Y("p", { class: "wfrp-on-the-go-settings__eyebrow" }, "WFRP On The Go"), Y("h1", null, "Enabled GM Users")], -1), Y("form", {
			class: "wfrp-on-the-go-settings__form",
			onSubmit: lo(o, ["prevent"])
		}, [a.value ? (q(), J("div", zs, [(q(!0), J(G, null, dr(e.users, (e) => (q(), J("label", {
			key: e.id,
			class: ve(["wfrp-on-the-go-settings__user", { "wfrp-on-the-go-settings__user--current": e.isCurrentUser }])
		}, [
			En(Y("input", {
				"onUpdate:modelValue": s[0] ||= (e) => n.value = e,
				type: "checkbox",
				value: e.id
			}, null, 8, Bs), [[ro, n.value]]),
			Y("span", null, A(e.name), 1),
			e.isCurrentUser ? (q(), J("strong", Vs, "Current")) : Bi("", !0)
		], 2))), 128))])) : (q(), J("p", Hs, "No GM users are available.")), Y("footer", Us, [Y("p", Ws, A(i.value ? "Saved" : ""), 1), Y("button", {
			type: "submit",
			disabled: r.value || !a.value
		}, A(r.value ? "Saving" : "Save"), 9, Gs)])], 32)]));
	}
}), qs = class extends Ts {
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
		return Ks;
	}
	getVueProps() {
		return {
			saveEnabledGmUserIds: gs,
			users: ms()
		};
	}
};
//#endregion
//#region src/module/register-module-settings.ts
function Js() {
	ps(), game.settings.registerMenu(e, "enabledGmUsers", {
		name: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.name",
		label: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.label",
		hint: "WFRP_ON_THE_GO.settings.activation.enabledGmUsers.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: qs
	}), game.settings.registerMenu(e, "openDiagnosticWorkbench", {
		name: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.name",
		label: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.label",
		hint: "WFRP_ON_THE_GO.settings.openDiagnosticWorkbench.hint",
		icon: "fa-solid fa-window-restore",
		restricted: !0,
		type: Ns
	}), game.settings.registerMenu(e, "openMobileUi", {
		name: "WFRP_ON_THE_GO.settings.openMobileUi.name",
		label: "WFRP_ON_THE_GO.settings.openMobileUi.label",
		hint: "WFRP_ON_THE_GO.settings.openMobileUi.hint",
		icon: "fa-solid fa-mobile-screen-button",
		restricted: !0,
		type: Os
	});
}
Hooks.once("init", () => {
	Fs(`${e} | Initializing`), Js();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		Is(`${e} | Loaded outside ${n}; skipping module API registration.`);
		return;
	}
	let t = game.modules.get(e);
	if (!t) {
		Is(`${e} | Foundry did not expose the module entry.`);
		return;
	}
	t.api = Ps(), Ls(), Fs(`${e} | Ready`);
});
//#endregion

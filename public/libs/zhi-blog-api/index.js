var Oo = Object.defineProperty;
var Io = (e, t, n) => t in e ? Oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Y = (e, t, n) => (Io(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ao = /* @__PURE__ */ ((e) => (e[e.Markdown = 0] = "Markdown", e[e.Html = 1] = "Html", e[e.Formatter = 2] = "Formatter", e[e.Markdown_And_Formatter = 3] = "Markdown_And_Formatter", e[e.MDX = 4] = "MDX", e))(Ao || {}), Ro = /* @__PURE__ */ ((e) => (e[e.PasswordType_Password = 0] = "PasswordType_Password", e[e.PasswordType_Token = 1] = "PasswordType_Token", e))(Ro || {});
class gu {
  constructor() {
    /**
     * 首页
     */
    Y(this, "home");
    /**
     * API地址
     */
    Y(this, "apiUrl");
    /**
     * 用户名
     */
    Y(this, "username");
    /**
     * 密码类型
     */
    Y(this, "passwordType");
    /**
     * 密码
     */
    Y(this, "password");
    /**
     * 是否发布
     */
    Y(this, "apiStatus");
    /**
     * 博客名（API获取）
     */
    Y(this, "blogName");
    /**
     * 文章别名key
     */
    Y(this, "posidKey");
    /**
     * 文章预览链接
     */
    Y(this, "previewUrl");
    /**
     * 文章类型
     */
    Y(this, "pageType");
    /**
     * 操作提示
     */
    Y(this, "placeholder");
    /**
     * 是否处理标题
     *
     * @protected
     */
    Y(this, "fixTitle");
    this.home = "", this.apiUrl = "", this.username = "", this.passwordType = 0, this.password = "", this.apiStatus = !1, this.blogName = "", this.posidKey = "", this.previewUrl = "", this.pageType = 0, this.placeholder = void 0, this.fixTitle = !1;
  }
}
class yu {
  constructor() {
    /**
     * 首页操作提示
     */
    Y(this, "homePlaceholder");
    /**
     * API 地址操作提示
     */
    Y(this, "apiUrlPlaceholder");
    /**
     * 用户名操作提示
     */
    Y(this, "usernamePlaceholder");
    /**
     * 密码类型操作提示
     */
    Y(this, "passwordTypePlaceholder");
    /**
     * 密码操作提示
     */
    Y(this, "passwordPlaceholder");
    /**
     * API状态是否正常操作提示
     */
    Y(this, "apiStatusPlaceholder");
    /**
     * 博客名（API获取）操作提示
     */
    Y(this, "blogNamePlaceholder");
    /**
     * 文章别名key操作提示
     */
    Y(this, "posidKeyPlaceholder");
    /**
     * 文章预览链接操作提示
     */
    Y(this, "previewUrlPlaceholder");
    /**
     * 文章类型操作提示
     */
    Y(this, "pageTypePlaceholder");
    this.homePlaceholder = "", this.apiUrlPlaceholder = "", this.usernamePlaceholder = "", this.passwordTypePlaceholder = "", this.passwordPlaceholder = "", this.apiStatusPlaceholder = !1, this.blogNamePlaceholder = "", this.posidKeyPlaceholder = "", this.previewUrlPlaceholder = "", this.pageTypePlaceholder = "";
  }
}
class _u {
  async deletePost(t) {
    throw new Error("You must implement this method in sub class");
  }
  async editPost(t, n, a) {
    throw new Error("You must implement this method in sub class");
  }
  async getCategories() {
    throw new Error("You must implement this method in sub class");
  }
  async getPost(t, n) {
    throw new Error("You must implement this method in sub class");
  }
  async getPreviewUrl(t) {
    throw new Error("You must implement this method in sub class");
  }
  async getRecentPosts(t, n, a) {
    throw new Error("You must implement this method in sub class");
  }
  async getRecentPostsCount(t) {
    throw new Error("You must implement this method in sub class");
  }
  async getUsersBlogs() {
    throw new Error("You must implement this method in sub class");
  }
  async newMediaObject(t) {
    throw new Error("You must implement this method in sub class");
  }
  async newPost(t, n) {
    throw new Error("You must implement this method in sub class");
  }
}
var Sn = /* @__PURE__ */ ((e) => (e.PostStatusEnum_Publish = "publish", e.PostStatusEnum_Draft = "draft", e.PostStatusEnum_Inherit = "inherit", e))(Sn || {});
class Lo {
  constructor() {
    /**
     * 文章ID
     */
    Y(this, "postid");
    /**
     * 标题
     */
    Y(this, "title");
    /**
     * 逗号分隔的标签
     */
    Y(this, "mt_keywords");
    /**
     * 链接
     */
    Y(this, "link");
    /**
     * 永久链接
     */
    Y(this, "permalink");
    /**
     * 摘要
     */
    Y(this, "shortDesc");
    /**
     * 描述
     */
    Y(this, "description");
    /**
     * 短评
     */
    Y(this, "mt_excerpt");
    /**
     * 别名
     */
    Y(this, "wp_slug");
    /**
     * 创建时间
     */
    Y(this, "dateCreated");
    /**
     * 分类
     */
    Y(this, "categories");
    /**
     * 更多
     */
    Y(this, "mt_text_more");
    /**
     * 发布状态
     */
    Y(this, "post_status");
    /**
     * 是否发布
     */
    Y(this, "isPublished");
    /**
     * 发布密码
     */
    Y(this, "wp_password");
    this.postid = "", this.title = "", this.mt_keywords = "", this.permalink = "", this.description = "", this.wp_slug = "", this.dateCreated = /* @__PURE__ */ new Date(), this.categories = [], this.isPublished = !0, this.post_status = Sn.PostStatusEnum_Publish, this.wp_password = "";
  }
}
var Mo = Object.defineProperty, zo = (e, t, n) => t in e ? Mo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $e = (e, t, n) => (zo(e, typeof t != "symbol" ? t + "" : t, n), n), jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ur = { exports: {} }, Tn = {}, Ge = {}, Rt = {}, ar = {}, se = {}, rr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor(T) {
      if (super(), !e.IDENTIFIER.test(T))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = T;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = n;
  class a extends t {
    constructor(T) {
      super(), this._items = typeof T == "string" ? [T] : T;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const T = this._items[0];
      return T === "" || T === '""';
    }
    get str() {
      var T;
      return (T = this._str) !== null && T !== void 0 ? T : this._str = this._items.reduce((R, r) => `${R}${r}`, "");
    }
    get names() {
      var T;
      return (T = this._names) !== null && T !== void 0 ? T : this._names = this._items.reduce((R, r) => (r instanceof n && (R[r.str] = (R[r.str] || 0) + 1), R), {});
    }
  }
  e._Code = a, e.nil = new a("");
  function i($, ...T) {
    const R = [$[0]];
    let r = 0;
    for (; r < T.length; )
      b(R, T[r]), R.push($[++r]);
    return new a(R);
  }
  e._ = i;
  const l = new a("+");
  function f($, ...T) {
    const R = [M($[0])];
    let r = 0;
    for (; r < T.length; )
      R.push(l), b(R, T[r]), R.push(l, M($[++r]));
    return k(R), new a(R);
  }
  e.str = f;
  function b($, T) {
    T instanceof a ? $.push(...T._items) : T instanceof n ? $.push(T) : $.push(S(T));
  }
  e.addCodeArg = b;
  function k($) {
    let T = 1;
    for (; T < $.length - 1; ) {
      if ($[T] === l) {
        const R = _($[T - 1], $[T + 1]);
        if (R !== void 0) {
          $.splice(T - 1, 3, R);
          continue;
        }
        $[T++] = "+";
      }
      T++;
    }
  }
  function _($, T) {
    if (T === '""')
      return $;
    if ($ === '""')
      return T;
    if (typeof $ == "string")
      return T instanceof n || $[$.length - 1] !== '"' ? void 0 : typeof T != "string" ? `${$.slice(0, -1)}${T}"` : T[0] === '"' ? $.slice(0, -1) + T.slice(1) : void 0;
    if (typeof T == "string" && T[0] === '"' && !($ instanceof n))
      return `"${$}${T.slice(1)}`;
  }
  function y($, T) {
    return T.emptyStr() ? $ : $.emptyStr() ? T : f`${$}${T}`;
  }
  e.strConcat = y;
  function S($) {
    return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : M(Array.isArray($) ? $.join(",") : $);
  }
  function A($) {
    return new a(M($));
  }
  e.stringify = A;
  function M($) {
    return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = M;
  function O($) {
    return typeof $ == "string" && e.IDENTIFIER.test($) ? new a(`.${$}`) : i`[${$}]`;
  }
  e.getProperty = O;
  function C($) {
    if (typeof $ == "string" && e.IDENTIFIER.test($))
      return new a(`${$}`);
    throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
  }
  e.getEsmExportName = C;
  function x($) {
    return new a($.toString());
  }
  e.regexpCode = x;
})(rr);
var Br = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = rr;
  class n extends Error {
    constructor(_) {
      super(`CodeGen: "code" for ${_} not defined`), this.value = _.value;
    }
  }
  var a;
  (function(k) {
    k[k.Started = 0] = "Started", k[k.Completed = 1] = "Completed";
  })(a = e.UsedValueState || (e.UsedValueState = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class i {
    constructor({ prefixes: _, parent: y } = {}) {
      this._names = {}, this._prefixes = _, this._parent = y;
    }
    toName(_) {
      return _ instanceof t.Name ? _ : this.name(_);
    }
    name(_) {
      return new t.Name(this._newName(_));
    }
    _newName(_) {
      const y = this._names[_] || this._nameGroup(_);
      return `${_}${y.index++}`;
    }
    _nameGroup(_) {
      var y, S;
      if (!((S = (y = this._parent) === null || y === void 0 ? void 0 : y._prefixes) === null || S === void 0) && S.has(_) || this._prefixes && !this._prefixes.has(_))
        throw new Error(`CodeGen: prefix "${_}" is not allowed in this scope`);
      return this._names[_] = { prefix: _, index: 0 };
    }
  }
  e.Scope = i;
  class l extends t.Name {
    constructor(_, y) {
      super(y), this.prefix = _;
    }
    setValue(_, { property: y, itemIndex: S }) {
      this.value = _, this.scopePath = (0, t._)`.${new t.Name(y)}[${S}]`;
    }
  }
  e.ValueScopeName = l;
  const f = (0, t._)`\n`;
  class b extends i {
    constructor(_) {
      super(_), this._values = {}, this._scope = _.scope, this.opts = { ..._, _n: _.lines ? f : t.nil };
    }
    get() {
      return this._scope;
    }
    name(_) {
      return new l(_, this._newName(_));
    }
    value(_, y) {
      var S;
      if (y.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const A = this.toName(_), { prefix: M } = A, O = (S = y.key) !== null && S !== void 0 ? S : y.ref;
      let C = this._values[M];
      if (C) {
        const T = C.get(O);
        if (T)
          return T;
      } else
        C = this._values[M] = /* @__PURE__ */ new Map();
      C.set(O, A);
      const x = this._scope[M] || (this._scope[M] = []), $ = x.length;
      return x[$] = y.ref, A.setValue(y, { property: M, itemIndex: $ }), A;
    }
    getValue(_, y) {
      const S = this._values[_];
      if (S)
        return S.get(y);
    }
    scopeRefs(_, y = this._values) {
      return this._reduceValues(y, (S) => {
        if (S.scopePath === void 0)
          throw new Error(`CodeGen: name "${S}" has no value`);
        return (0, t._)`${_}${S.scopePath}`;
      });
    }
    scopeCode(_ = this._values, y, S) {
      return this._reduceValues(_, (A) => {
        if (A.value === void 0)
          throw new Error(`CodeGen: name "${A}" has no value`);
        return A.value.code;
      }, y, S);
    }
    _reduceValues(_, y, S = {}, A) {
      let M = t.nil;
      for (const O in _) {
        const C = _[O];
        if (!C)
          continue;
        const x = S[O] = S[O] || /* @__PURE__ */ new Map();
        C.forEach(($) => {
          if (x.has($))
            return;
          x.set($, a.Started);
          let T = y($);
          if (T) {
            const R = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            M = (0, t._)`${M}${R} ${$} = ${T};${this.opts._n}`;
          } else if (T = A == null ? void 0 : A($))
            M = (0, t._)`${M}${T}${this.opts._n}`;
          else
            throw new n($);
          x.set($, a.Completed);
        });
      }
      return M;
    }
  }
  e.ValueScope = b;
})(Br);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = rr, n = Br;
  var a = rr;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return a._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return a.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return a.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return a.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return a.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return a.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return a.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return a.Name;
  } });
  var i = Br;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return i.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return i.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return i.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return i.varKinds;
  } }), e.operators = {
    GT: new t._Code(">"),
    GTE: new t._Code(">="),
    LT: new t._Code("<"),
    LTE: new t._Code("<="),
    EQ: new t._Code("==="),
    NEQ: new t._Code("!=="),
    NOT: new t._Code("!"),
    OR: new t._Code("||"),
    AND: new t._Code("&&"),
    ADD: new t._Code("+")
  };
  class l {
    optimizeNodes() {
      return this;
    }
    optimizeNames(d, v) {
      return this;
    }
  }
  class f extends l {
    constructor(d, v, I) {
      super(), this.varKind = d, this.name = v, this.rhs = I;
    }
    render({ es5: d, _n: v }) {
      const I = d ? n.varKinds.var : this.varKind, G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${I} ${this.name}${G};` + v;
    }
    optimizeNames(d, v) {
      if (d[this.name.str])
        return this.rhs && (this.rhs = D(this.rhs, d, v)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class b extends l {
    constructor(d, v, I) {
      super(), this.lhs = d, this.rhs = v, this.sideEffects = I;
    }
    render({ _n: d }) {
      return `${this.lhs} = ${this.rhs};` + d;
    }
    optimizeNames(d, v) {
      if (!(this.lhs instanceof t.Name && !d[this.lhs.str] && !this.sideEffects))
        return this.rhs = D(this.rhs, d, v), this;
    }
    get names() {
      const d = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return F(d, this.rhs);
    }
  }
  class k extends b {
    constructor(d, v, I, G) {
      super(d, I, G), this.op = v;
    }
    render({ _n: d }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + d;
    }
  }
  class _ extends l {
    constructor(d) {
      super(), this.label = d, this.names = {};
    }
    render({ _n: d }) {
      return `${this.label}:` + d;
    }
  }
  class y extends l {
    constructor(d) {
      super(), this.label = d, this.names = {};
    }
    render({ _n: d }) {
      return `break${this.label ? ` ${this.label}` : ""};` + d;
    }
  }
  class S extends l {
    constructor(d) {
      super(), this.error = d;
    }
    render({ _n: d }) {
      return `throw ${this.error};` + d;
    }
    get names() {
      return this.error.names;
    }
  }
  class A extends l {
    constructor(d) {
      super(), this.code = d;
    }
    render({ _n: d }) {
      return `${this.code};` + d;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(d, v) {
      return this.code = D(this.code, d, v), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class M extends l {
    constructor(d = []) {
      super(), this.nodes = d;
    }
    render(d) {
      return this.nodes.reduce((v, I) => v + I.render(d), "");
    }
    optimizeNodes() {
      const { nodes: d } = this;
      let v = d.length;
      for (; v--; ) {
        const I = d[v].optimizeNodes();
        Array.isArray(I) ? d.splice(v, 1, ...I) : I ? d[v] = I : d.splice(v, 1);
      }
      return d.length > 0 ? this : void 0;
    }
    optimizeNames(d, v) {
      const { nodes: I } = this;
      let G = I.length;
      for (; G--; ) {
        const K = I[G];
        K.optimizeNames(d, v) || (q(d, K.names), I.splice(G, 1));
      }
      return I.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((d, v) => V(d, v.names), {});
    }
  }
  class O extends M {
    render(d) {
      return "{" + d._n + super.render(d) + "}" + d._n;
    }
  }
  class C extends M {
  }
  class x extends O {
  }
  x.kind = "else";
  class $ extends O {
    constructor(d, v) {
      super(v), this.condition = d;
    }
    render(d) {
      let v = `if(${this.condition})` + super.render(d);
      return this.else && (v += "else " + this.else.render(d)), v;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const d = this.condition;
      if (d === !0)
        return this.nodes;
      let v = this.else;
      if (v) {
        const I = v.optimizeNodes();
        v = this.else = Array.isArray(I) ? new x(I) : I;
      }
      if (v)
        return d === !1 ? v instanceof $ ? v : v.nodes : this.nodes.length ? this : new $(g(d), v instanceof $ ? [v] : v.nodes);
      if (!(d === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(d, v) {
      var I;
      if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames(d, v), !!(super.optimizeNames(d, v) || this.else))
        return this.condition = D(this.condition, d, v), this;
    }
    get names() {
      const d = super.names;
      return F(d, this.condition), this.else && V(d, this.else.names), d;
    }
  }
  $.kind = "if";
  class T extends O {
  }
  T.kind = "for";
  class R extends T {
    constructor(d) {
      super(), this.iteration = d;
    }
    render(d) {
      return `for(${this.iteration})` + super.render(d);
    }
    optimizeNames(d, v) {
      if (super.optimizeNames(d, v))
        return this.iteration = D(this.iteration, d, v), this;
    }
    get names() {
      return V(super.names, this.iteration.names);
    }
  }
  class r extends T {
    constructor(d, v, I, G) {
      super(), this.varKind = d, this.name = v, this.from = I, this.to = G;
    }
    render(d) {
      const v = d.es5 ? n.varKinds.var : this.varKind, { name: I, from: G, to: K } = this;
      return `for(${v} ${I}=${G}; ${I}<${K}; ${I}++)` + super.render(d);
    }
    get names() {
      const d = F(super.names, this.from);
      return F(d, this.to);
    }
  }
  class s extends T {
    constructor(d, v, I, G) {
      super(), this.loop = d, this.varKind = v, this.name = I, this.iterable = G;
    }
    render(d) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(d);
    }
    optimizeNames(d, v) {
      if (super.optimizeNames(d, v))
        return this.iterable = D(this.iterable, d, v), this;
    }
    get names() {
      return V(super.names, this.iterable.names);
    }
  }
  class o extends O {
    constructor(d, v, I) {
      super(), this.name = d, this.args = v, this.async = I;
    }
    render(d) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(d);
    }
  }
  o.kind = "func";
  class c extends M {
    render(d) {
      return "return " + super.render(d);
    }
  }
  c.kind = "return";
  class u extends O {
    render(d) {
      let v = "try" + super.render(d);
      return this.catch && (v += this.catch.render(d)), this.finally && (v += this.finally.render(d)), v;
    }
    optimizeNodes() {
      var d, v;
      return super.optimizeNodes(), (d = this.catch) === null || d === void 0 || d.optimizeNodes(), (v = this.finally) === null || v === void 0 || v.optimizeNodes(), this;
    }
    optimizeNames(d, v) {
      var I, G;
      return super.optimizeNames(d, v), (I = this.catch) === null || I === void 0 || I.optimizeNames(d, v), (G = this.finally) === null || G === void 0 || G.optimizeNames(d, v), this;
    }
    get names() {
      const d = super.names;
      return this.catch && V(d, this.catch.names), this.finally && V(d, this.finally.names), d;
    }
  }
  class m extends O {
    constructor(d) {
      super(), this.error = d;
    }
    render(d) {
      return `catch(${this.error})` + super.render(d);
    }
  }
  m.kind = "catch";
  class p extends O {
    render(d) {
      return "finally" + super.render(d);
    }
  }
  p.kind = "finally";
  class j {
    constructor(d, v = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...v, _n: v.lines ? `
` : "" }, this._extScope = d, this._scope = new n.Scope({ parent: d }), this._nodes = [new C()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(d) {
      return this._scope.name(d);
    }
    // reserves unique name in the external scope
    scopeName(d) {
      return this._extScope.name(d);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(d, v) {
      const I = this._extScope.value(d, v);
      return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
    }
    getScopeValue(d, v) {
      return this._extScope.getValue(d, v);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(d) {
      return this._extScope.scopeRefs(d, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(d, v, I, G) {
      const K = this._scope.toName(v);
      return I !== void 0 && G && (this._constants[K.str] = I), this._leafNode(new f(d, K, I)), K;
    }
    // `const` declaration (`var` in es5 mode)
    const(d, v, I) {
      return this._def(n.varKinds.const, d, v, I);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(d, v, I) {
      return this._def(n.varKinds.let, d, v, I);
    }
    // `var` declaration with optional assignment
    var(d, v, I) {
      return this._def(n.varKinds.var, d, v, I);
    }
    // assignment code
    assign(d, v, I) {
      return this._leafNode(new b(d, v, I));
    }
    // `+=` code
    add(d, v) {
      return this._leafNode(new k(d, e.operators.ADD, v));
    }
    // appends passed SafeExpr to code or executes Block
    code(d) {
      return typeof d == "function" ? d() : d !== t.nil && this._leafNode(new A(d)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...d) {
      const v = ["{"];
      for (const [I, G] of d)
        v.length > 1 && v.push(","), v.push(I), (I !== G || this.opts.es5) && (v.push(":"), (0, t.addCodeArg)(v, G));
      return v.push("}"), new t._Code(v);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(d, v, I) {
      if (this._blockNode(new $(d)), v && I)
        this.code(v).else().code(I).endIf();
      else if (v)
        this.code(v).endIf();
      else if (I)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(d) {
      return this._elseNode(new $(d));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new x());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode($, x);
    }
    _for(d, v) {
      return this._blockNode(d), v && this.code(v).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(d, v) {
      return this._for(new R(d), v);
    }
    // `for` statement for a range of values
    forRange(d, v, I, G, K = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const re = this._scope.toName(d);
      return this._for(new r(K, re, v, I), () => G(re));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(d, v, I, G = n.varKinds.const) {
      const K = this._scope.toName(d);
      if (this.opts.es5) {
        const re = v instanceof t.Name ? v : this.var("_arr", v);
        return this.forRange("_i", 0, (0, t._)`${re}.length`, (ne) => {
          this.var(K, (0, t._)`${re}[${ne}]`), I(K);
        });
      }
      return this._for(new s("of", G, K, v), () => I(K));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(d, v, I, G = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(d, (0, t._)`Object.keys(${v})`, I);
      const K = this._scope.toName(d);
      return this._for(new s("in", G, K, v), () => I(K));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(T);
    }
    // `label` statement
    label(d) {
      return this._leafNode(new _(d));
    }
    // `break` statement
    break(d) {
      return this._leafNode(new y(d));
    }
    // `return` statement
    return(d) {
      const v = new c();
      if (this._blockNode(v), this.code(d), v.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(c);
    }
    // `try` statement
    try(d, v, I) {
      if (!v && !I)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const G = new u();
      if (this._blockNode(G), this.code(d), v) {
        const K = this.name("e");
        this._currNode = G.catch = new m(K), v(K);
      }
      return I && (this._currNode = G.finally = new p(), this.code(I)), this._endBlockNode(m, p);
    }
    // `throw` statement
    throw(d) {
      return this._leafNode(new S(d));
    }
    // start self-balancing block
    block(d, v) {
      return this._blockStarts.push(this._nodes.length), d && this.code(d).endBlock(v), this;
    }
    // end the current self-balancing block
    endBlock(d) {
      const v = this._blockStarts.pop();
      if (v === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const I = this._nodes.length - v;
      if (I < 0 || d !== void 0 && I !== d)
        throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${d} expected`);
      return this._nodes.length = v, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(d, v = t.nil, I, G) {
      return this._blockNode(new o(d, v, I)), G && this.code(G).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(o);
    }
    optimize(d = 1) {
      for (; d-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(d) {
      return this._currNode.nodes.push(d), this;
    }
    _blockNode(d) {
      this._currNode.nodes.push(d), this._nodes.push(d);
    }
    _endBlockNode(d, v) {
      const I = this._currNode;
      if (I instanceof d || v && I instanceof v)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${v ? `${d.kind}/${v.kind}` : d.kind}"`);
    }
    _elseNode(d) {
      const v = this._currNode;
      if (!(v instanceof $))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = v.else = d, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const d = this._nodes;
      return d[d.length - 1];
    }
    set _currNode(d) {
      const v = this._nodes;
      v[v.length - 1] = d;
    }
  }
  e.CodeGen = j;
  function V(N, d) {
    for (const v in d)
      N[v] = (N[v] || 0) + (d[v] || 0);
    return N;
  }
  function F(N, d) {
    return d instanceof t._CodeOrName ? V(N, d.names) : N;
  }
  function D(N, d, v) {
    if (N instanceof t.Name)
      return I(N);
    if (!G(N))
      return N;
    return new t._Code(N._items.reduce((K, re) => (re instanceof t.Name && (re = I(re)), re instanceof t._Code ? K.push(...re._items) : K.push(re), K), []));
    function I(K) {
      const re = v[K.str];
      return re === void 0 || d[K.str] !== 1 ? K : (delete d[K.str], re);
    }
    function G(K) {
      return K instanceof t._Code && K._items.some((re) => re instanceof t.Name && d[re.str] === 1 && v[re.str] !== void 0);
    }
  }
  function q(N, d) {
    for (const v in d)
      N[v] = (N[v] || 0) - (d[v] || 0);
  }
  function g(N) {
    return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${B(N)}`;
  }
  e.not = g;
  const H = P(e.operators.AND);
  function W(...N) {
    return N.reduce(H);
  }
  e.and = W;
  const J = P(e.operators.OR);
  function U(...N) {
    return N.reduce(J);
  }
  e.or = U;
  function P(N) {
    return (d, v) => d === t.nil ? v : v === t.nil ? d : (0, t._)`${B(d)} ${N} ${B(v)}`;
  }
  function B(N) {
    return N instanceof t.Name ? N : (0, t._)`(${N})`;
  }
})(se);
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
  const t = se, n = rr;
  function a(o) {
    const c = {};
    for (const u of o)
      c[u] = !0;
    return c;
  }
  e.toHash = a;
  function i(o, c) {
    return typeof c == "boolean" ? c : Object.keys(c).length === 0 ? !0 : (l(o, c), !f(c, o.self.RULES.all));
  }
  e.alwaysValidSchema = i;
  function l(o, c = o.schema) {
    const { opts: u, self: m } = o;
    if (!u.strictSchema || typeof c == "boolean")
      return;
    const p = m.RULES.keywords;
    for (const j in c)
      p[j] || s(o, `unknown keyword: "${j}"`);
  }
  e.checkUnknownRules = l;
  function f(o, c) {
    if (typeof o == "boolean")
      return !o;
    for (const u in o)
      if (c[u])
        return !0;
    return !1;
  }
  e.schemaHasRules = f;
  function b(o, c) {
    if (typeof o == "boolean")
      return !o;
    for (const u in o)
      if (u !== "$ref" && c.all[u])
        return !0;
    return !1;
  }
  e.schemaHasRulesButRef = b;
  function k({ topSchemaRef: o, schemaPath: c }, u, m, p) {
    if (!p) {
      if (typeof u == "number" || typeof u == "boolean")
        return u;
      if (typeof u == "string")
        return (0, t._)`${u}`;
    }
    return (0, t._)`${o}${c}${(0, t.getProperty)(m)}`;
  }
  e.schemaRefOrVal = k;
  function _(o) {
    return A(decodeURIComponent(o));
  }
  e.unescapeFragment = _;
  function y(o) {
    return encodeURIComponent(S(o));
  }
  e.escapeFragment = y;
  function S(o) {
    return typeof o == "number" ? `${o}` : o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  e.escapeJsonPointer = S;
  function A(o) {
    return o.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  e.unescapeJsonPointer = A;
  function M(o, c) {
    if (Array.isArray(o))
      for (const u of o)
        c(u);
    else
      c(o);
  }
  e.eachItem = M;
  function O({ mergeNames: o, mergeToName: c, mergeValues: u, resultToName: m }) {
    return (p, j, V, F) => {
      const D = V === void 0 ? j : V instanceof t.Name ? (j instanceof t.Name ? o(p, j, V) : c(p, j, V), V) : j instanceof t.Name ? (c(p, V, j), j) : u(j, V);
      return F === t.Name && !(D instanceof t.Name) ? m(p, D) : D;
    };
  }
  e.mergeEvaluated = {
    props: O({
      mergeNames: (o, c, u) => o.if((0, t._)`${u} !== true && ${c} !== undefined`, () => {
        o.if((0, t._)`${c} === true`, () => o.assign(u, !0), () => o.assign(u, (0, t._)`${u} || {}`).code((0, t._)`Object.assign(${u}, ${c})`));
      }),
      mergeToName: (o, c, u) => o.if((0, t._)`${u} !== true`, () => {
        c === !0 ? o.assign(u, !0) : (o.assign(u, (0, t._)`${u} || {}`), x(o, u, c));
      }),
      mergeValues: (o, c) => o === !0 ? !0 : { ...o, ...c },
      resultToName: C
    }),
    items: O({
      mergeNames: (o, c, u) => o.if((0, t._)`${u} !== true && ${c} !== undefined`, () => o.assign(u, (0, t._)`${c} === true ? true : ${u} > ${c} ? ${u} : ${c}`)),
      mergeToName: (o, c, u) => o.if((0, t._)`${u} !== true`, () => o.assign(u, c === !0 ? !0 : (0, t._)`${u} > ${c} ? ${u} : ${c}`)),
      mergeValues: (o, c) => o === !0 ? !0 : Math.max(o, c),
      resultToName: (o, c) => o.var("items", c)
    })
  };
  function C(o, c) {
    if (c === !0)
      return o.var("props", !0);
    const u = o.var("props", (0, t._)`{}`);
    return c !== void 0 && x(o, u, c), u;
  }
  e.evaluatedPropsToName = C;
  function x(o, c, u) {
    Object.keys(u).forEach((m) => o.assign((0, t._)`${c}${(0, t.getProperty)(m)}`, !0));
  }
  e.setEvaluated = x;
  const $ = {};
  function T(o, c) {
    return o.scopeValue("func", {
      ref: c,
      code: $[c.code] || ($[c.code] = new n._Code(c.code))
    });
  }
  e.useFunc = T;
  var R;
  (function(o) {
    o[o.Num = 0] = "Num", o[o.Str = 1] = "Str";
  })(R = e.Type || (e.Type = {}));
  function r(o, c, u) {
    if (o instanceof t.Name) {
      const m = c === R.Num;
      return u ? m ? (0, t._)`"[" + ${o} + "]"` : (0, t._)`"['" + ${o} + "']"` : m ? (0, t._)`"/" + ${o}` : (0, t._)`"/" + ${o}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return u ? (0, t.getProperty)(o).toString() : "/" + S(o);
  }
  e.getErrorPath = r;
  function s(o, c, u = o.opts.strictSchema) {
    if (u) {
      if (c = `strict mode: ${c}`, u === !0)
        throw new Error(c);
      o.self.logger.warn(c);
    }
  }
  e.checkStrictMode = s;
})(ce);
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
const Ee = se, Do = {
  // validation function arguments
  data: new Ee.Name("data"),
  // args passed from referencing schema
  valCxt: new Ee.Name("valCxt"),
  instancePath: new Ee.Name("instancePath"),
  parentData: new Ee.Name("parentData"),
  parentDataProperty: new Ee.Name("parentDataProperty"),
  rootData: new Ee.Name("rootData"),
  dynamicAnchors: new Ee.Name("dynamicAnchors"),
  // function scoped variables
  vErrors: new Ee.Name("vErrors"),
  errors: new Ee.Name("errors"),
  this: new Ee.Name("this"),
  // "globals"
  self: new Ee.Name("self"),
  scope: new Ee.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new Ee.Name("json"),
  jsonPos: new Ee.Name("jsonPos"),
  jsonLen: new Ee.Name("jsonLen"),
  jsonPart: new Ee.Name("jsonPart")
};
Qe.default = Do;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = se, n = ce, a = Qe;
  e.keywordError = {
    message: ({ keyword: x }) => (0, t.str)`must pass "${x}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: x, schemaType: $ }) => $ ? (0, t.str)`"${x}" keyword must be ${$} ($data)` : (0, t.str)`"${x}" keyword is invalid ($data)`
  };
  function i(x, $ = e.keywordError, T, R) {
    const { it: r } = x, { gen: s, compositeRule: o, allErrors: c } = r, u = S(x, $, T);
    R ?? (o || c) ? k(s, u) : _(r, (0, t._)`[${u}]`);
  }
  e.reportError = i;
  function l(x, $ = e.keywordError, T) {
    const { it: R } = x, { gen: r, compositeRule: s, allErrors: o } = R, c = S(x, $, T);
    k(r, c), s || o || _(R, a.default.vErrors);
  }
  e.reportExtraError = l;
  function f(x, $) {
    x.assign(a.default.errors, $), x.if((0, t._)`${a.default.vErrors} !== null`, () => x.if($, () => x.assign((0, t._)`${a.default.vErrors}.length`, $), () => x.assign(a.default.vErrors, null)));
  }
  e.resetErrorsCount = f;
  function b({ gen: x, keyword: $, schemaValue: T, data: R, errsCount: r, it: s }) {
    if (r === void 0)
      throw new Error("ajv implementation error");
    const o = x.name("err");
    x.forRange("i", r, a.default.errors, (c) => {
      x.const(o, (0, t._)`${a.default.vErrors}[${c}]`), x.if((0, t._)`${o}.instancePath === undefined`, () => x.assign((0, t._)`${o}.instancePath`, (0, t.strConcat)(a.default.instancePath, s.errorPath))), x.assign((0, t._)`${o}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${$}`), s.opts.verbose && (x.assign((0, t._)`${o}.schema`, T), x.assign((0, t._)`${o}.data`, R));
    });
  }
  e.extendErrors = b;
  function k(x, $) {
    const T = x.const("err", $);
    x.if((0, t._)`${a.default.vErrors} === null`, () => x.assign(a.default.vErrors, (0, t._)`[${T}]`), (0, t._)`${a.default.vErrors}.push(${T})`), x.code((0, t._)`${a.default.errors}++`);
  }
  function _(x, $) {
    const { gen: T, validateName: R, schemaEnv: r } = x;
    r.$async ? T.throw((0, t._)`new ${x.ValidationError}(${$})`) : (T.assign((0, t._)`${R}.errors`, $), T.return(!1));
  }
  const y = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function S(x, $, T) {
    const { createErrors: R } = x.it;
    return R === !1 ? (0, t._)`{}` : A(x, $, T);
  }
  function A(x, $, T = {}) {
    const { gen: R, it: r } = x, s = [
      M(r, T),
      O(x, T)
    ];
    return C(x, $, s), R.object(...s);
  }
  function M({ errorPath: x }, { instancePath: $ }) {
    const T = $ ? (0, t.str)`${x}${(0, n.getErrorPath)($, n.Type.Str)}` : x;
    return [a.default.instancePath, (0, t.strConcat)(a.default.instancePath, T)];
  }
  function O({ keyword: x, it: { errSchemaPath: $ } }, { schemaPath: T, parentSchema: R }) {
    let r = R ? $ : (0, t.str)`${$}/${x}`;
    return T && (r = (0, t.str)`${r}${(0, n.getErrorPath)(T, n.Type.Str)}`), [y.schemaPath, r];
  }
  function C(x, { params: $, message: T }, R) {
    const { keyword: r, data: s, schemaValue: o, it: c } = x, { opts: u, propertyName: m, topSchemaRef: p, schemaPath: j } = c;
    R.push([y.keyword, r], [y.params, typeof $ == "function" ? $(x) : $ || (0, t._)`{}`]), u.messages && R.push([y.message, typeof T == "function" ? T(x) : T]), u.verbose && R.push([y.schema, o], [y.parentSchema, (0, t._)`${p}${j}`], [a.default.data, s]), m && R.push([y.propertyName, m]);
  }
})(ar);
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.boolOrEmptySchema = Rt.topBoolOrEmptySchema = void 0;
const Vo = ar, Uo = se, Bo = Qe, Fo = {
  message: "boolean schema is false"
};
function Ho(e) {
  const { gen: t, schema: n, validateName: a } = e;
  n === !1 ? Cn(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(Bo.default.data) : (t.assign((0, Uo._)`${a}.errors`, null), t.return(!0));
}
Rt.topBoolOrEmptySchema = Ho;
function qo(e, t) {
  const { gen: n, schema: a } = e;
  a === !1 ? (n.var(t, !1), Cn(e)) : n.var(t, !0);
}
Rt.boolOrEmptySchema = qo;
function Cn(e, t) {
  const { gen: n, data: a } = e, i = {
    gen: n,
    keyword: "false schema",
    data: a,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, Vo.reportError)(i, Fo, void 0, t);
}
var nr = {}, wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.getRules = wt.isJSONType = void 0;
const Go = ["string", "number", "integer", "boolean", "null", "object", "array"], Ko = new Set(Go);
function Wo(e) {
  return typeof e == "string" && Ko.has(e);
}
wt.isJSONType = Wo;
function Yo() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
wt.getRules = Yo;
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.shouldUseRule = rt.shouldUseGroup = rt.schemaHasRulesForType = void 0;
function Jo({ schema: e, self: t }, n) {
  const a = t.RULES.types[n];
  return a && a !== !0 && Nn(e, a);
}
rt.schemaHasRulesForType = Jo;
function Nn(e, t) {
  return t.rules.some((n) => On(e, n));
}
rt.shouldUseGroup = Nn;
function On(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((a) => e[a] !== void 0));
}
rt.shouldUseRule = On;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
  const t = wt, n = rt, a = ar, i = se, l = ce;
  var f;
  (function(R) {
    R[R.Correct = 0] = "Correct", R[R.Wrong = 1] = "Wrong";
  })(f = e.DataType || (e.DataType = {}));
  function b(R) {
    const r = k(R.type);
    if (r.includes("null")) {
      if (R.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!r.length && R.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      R.nullable === !0 && r.push("null");
    }
    return r;
  }
  e.getSchemaTypes = b;
  function k(R) {
    const r = Array.isArray(R) ? R : R ? [R] : [];
    if (r.every(t.isJSONType))
      return r;
    throw new Error("type must be JSONType or JSONType[]: " + r.join(","));
  }
  e.getJSONTypes = k;
  function _(R, r) {
    const { gen: s, data: o, opts: c } = R, u = S(r, c.coerceTypes), m = r.length > 0 && !(u.length === 0 && r.length === 1 && (0, n.schemaHasRulesForType)(R, r[0]));
    if (m) {
      const p = C(r, o, c.strictNumbers, f.Wrong);
      s.if(p, () => {
        u.length ? A(R, r, u) : $(R);
      });
    }
    return m;
  }
  e.coerceAndCheckDataType = _;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function S(R, r) {
    return r ? R.filter((s) => y.has(s) || r === "array" && s === "array") : [];
  }
  function A(R, r, s) {
    const { gen: o, data: c, opts: u } = R, m = o.let("dataType", (0, i._)`typeof ${c}`), p = o.let("coerced", (0, i._)`undefined`);
    u.coerceTypes === "array" && o.if((0, i._)`${m} == 'object' && Array.isArray(${c}) && ${c}.length == 1`, () => o.assign(c, (0, i._)`${c}[0]`).assign(m, (0, i._)`typeof ${c}`).if(C(r, c, u.strictNumbers), () => o.assign(p, c))), o.if((0, i._)`${p} !== undefined`);
    for (const V of s)
      (y.has(V) || V === "array" && u.coerceTypes === "array") && j(V);
    o.else(), $(R), o.endIf(), o.if((0, i._)`${p} !== undefined`, () => {
      o.assign(c, p), M(R, p);
    });
    function j(V) {
      switch (V) {
        case "string":
          o.elseIf((0, i._)`${m} == "number" || ${m} == "boolean"`).assign(p, (0, i._)`"" + ${c}`).elseIf((0, i._)`${c} === null`).assign(p, (0, i._)`""`);
          return;
        case "number":
          o.elseIf((0, i._)`${m} == "boolean" || ${c} === null
              || (${m} == "string" && ${c} && ${c} == +${c})`).assign(p, (0, i._)`+${c}`);
          return;
        case "integer":
          o.elseIf((0, i._)`${m} === "boolean" || ${c} === null
              || (${m} === "string" && ${c} && ${c} == +${c} && !(${c} % 1))`).assign(p, (0, i._)`+${c}`);
          return;
        case "boolean":
          o.elseIf((0, i._)`${c} === "false" || ${c} === 0 || ${c} === null`).assign(p, !1).elseIf((0, i._)`${c} === "true" || ${c} === 1`).assign(p, !0);
          return;
        case "null":
          o.elseIf((0, i._)`${c} === "" || ${c} === 0 || ${c} === false`), o.assign(p, null);
          return;
        case "array":
          o.elseIf((0, i._)`${m} === "string" || ${m} === "number"
              || ${m} === "boolean" || ${c} === null`).assign(p, (0, i._)`[${c}]`);
      }
    }
  }
  function M({ gen: R, parentData: r, parentDataProperty: s }, o) {
    R.if((0, i._)`${r} !== undefined`, () => R.assign((0, i._)`${r}[${s}]`, o));
  }
  function O(R, r, s, o = f.Correct) {
    const c = o === f.Correct ? i.operators.EQ : i.operators.NEQ;
    let u;
    switch (R) {
      case "null":
        return (0, i._)`${r} ${c} null`;
      case "array":
        u = (0, i._)`Array.isArray(${r})`;
        break;
      case "object":
        u = (0, i._)`${r} && typeof ${r} == "object" && !Array.isArray(${r})`;
        break;
      case "integer":
        u = m((0, i._)`!(${r} % 1) && !isNaN(${r})`);
        break;
      case "number":
        u = m();
        break;
      default:
        return (0, i._)`typeof ${r} ${c} ${R}`;
    }
    return o === f.Correct ? u : (0, i.not)(u);
    function m(p = i.nil) {
      return (0, i.and)((0, i._)`typeof ${r} == "number"`, p, s ? (0, i._)`isFinite(${r})` : i.nil);
    }
  }
  e.checkDataType = O;
  function C(R, r, s, o) {
    if (R.length === 1)
      return O(R[0], r, s, o);
    let c;
    const u = (0, l.toHash)(R);
    if (u.array && u.object) {
      const m = (0, i._)`typeof ${r} != "object"`;
      c = u.null ? m : (0, i._)`!${r} || ${m}`, delete u.null, delete u.array, delete u.object;
    } else
      c = i.nil;
    u.number && delete u.integer;
    for (const m in u)
      c = (0, i.and)(c, O(m, r, s, o));
    return c;
  }
  e.checkDataTypes = C;
  const x = {
    message: ({ schema: R }) => `must be ${R}`,
    params: ({ schema: R, schemaValue: r }) => typeof R == "string" ? (0, i._)`{type: ${R}}` : (0, i._)`{type: ${r}}`
  };
  function $(R) {
    const r = T(R);
    (0, a.reportError)(r, x);
  }
  e.reportTypeError = $;
  function T(R) {
    const { gen: r, data: s, schema: o } = R, c = (0, l.schemaRefOrVal)(R, o, "type");
    return {
      gen: r,
      keyword: "type",
      data: s,
      schema: o.type,
      schemaCode: c,
      schemaValue: c,
      parentSchema: o,
      params: {},
      it: R
    };
  }
})(nr);
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.assignDefaults = void 0;
const xt = se, Zo = ce;
function Qo(e, t) {
  const { properties: n, items: a } = e.schema;
  if (t === "object" && n)
    for (const i in n)
      Wa(e, i, n[i].default);
  else
    t === "array" && Array.isArray(a) && a.forEach((i, l) => Wa(e, l, i.default));
}
Cr.assignDefaults = Qo;
function Wa(e, t, n) {
  const { gen: a, compositeRule: i, data: l, opts: f } = e;
  if (n === void 0)
    return;
  const b = (0, xt._)`${l}${(0, xt.getProperty)(t)}`;
  if (i) {
    (0, Zo.checkStrictMode)(e, `default is ignored for: ${b}`);
    return;
  }
  let k = (0, xt._)`${b} === undefined`;
  f.useDefaults === "empty" && (k = (0, xt._)`${k} || ${b} === null || ${b} === ""`), a.if(k, (0, xt._)`${b} = ${(0, xt.stringify)(n)}`);
}
var Ze = {}, oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.validateUnion = oe.validateArray = oe.usePattern = oe.callValidateCode = oe.schemaProperties = oe.allSchemaProperties = oe.noPropertyInData = oe.propertyInData = oe.isOwnProperty = oe.hasPropFunc = oe.reportMissingProp = oe.checkMissingProp = oe.checkReportMissingProp = void 0;
const ge = se, Yr = ce, nt = Qe, Xo = ce;
function es(e, t) {
  const { gen: n, data: a, it: i } = e;
  n.if(Zr(n, a, t, i.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, ge._)`${t}` }, !0), e.error();
  });
}
oe.checkReportMissingProp = es;
function ts({ gen: e, data: t, it: { opts: n } }, a, i) {
  return (0, ge.or)(...a.map((l) => (0, ge.and)(Zr(e, t, l, n.ownProperties), (0, ge._)`${i} = ${l}`)));
}
oe.checkMissingProp = ts;
function rs(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
oe.reportMissingProp = rs;
function In(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, ge._)`Object.prototype.hasOwnProperty`
  });
}
oe.hasPropFunc = In;
function Jr(e, t, n) {
  return (0, ge._)`${In(e)}.call(${t}, ${n})`;
}
oe.isOwnProperty = Jr;
function as(e, t, n, a) {
  const i = (0, ge._)`${t}${(0, ge.getProperty)(n)} !== undefined`;
  return a ? (0, ge._)`${i} && ${Jr(e, t, n)}` : i;
}
oe.propertyInData = as;
function Zr(e, t, n, a) {
  const i = (0, ge._)`${t}${(0, ge.getProperty)(n)} === undefined`;
  return a ? (0, ge.or)(i, (0, ge.not)(Jr(e, t, n))) : i;
}
oe.noPropertyInData = Zr;
function An(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
oe.allSchemaProperties = An;
function ns(e, t) {
  return An(t).filter((n) => !(0, Yr.alwaysValidSchema)(e, t[n]));
}
oe.schemaProperties = ns;
function os({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: a, schemaPath: i, errorPath: l }, it: f }, b, k, _) {
  const y = _ ? (0, ge._)`${e}, ${t}, ${a}${i}` : t, S = [
    [nt.default.instancePath, (0, ge.strConcat)(nt.default.instancePath, l)],
    [nt.default.parentData, f.parentData],
    [nt.default.parentDataProperty, f.parentDataProperty],
    [nt.default.rootData, nt.default.rootData]
  ];
  f.opts.dynamicRef && S.push([nt.default.dynamicAnchors, nt.default.dynamicAnchors]);
  const A = (0, ge._)`${y}, ${n.object(...S)}`;
  return k !== ge.nil ? (0, ge._)`${b}.call(${k}, ${A})` : (0, ge._)`${b}(${A})`;
}
oe.callValidateCode = os;
const ss = (0, ge._)`new RegExp`;
function is({ gen: e, it: { opts: t } }, n) {
  const a = t.unicodeRegExp ? "u" : "", { regExp: i } = t.code, l = i(n, a);
  return e.scopeValue("pattern", {
    key: l.toString(),
    ref: l,
    code: (0, ge._)`${i.code === "new RegExp" ? ss : (0, Xo.useFunc)(e, i)}(${n}, ${a})`
  });
}
oe.usePattern = is;
function cs(e) {
  const { gen: t, data: n, keyword: a, it: i } = e, l = t.name("valid");
  if (i.allErrors) {
    const b = t.let("valid", !0);
    return f(() => t.assign(b, !1)), b;
  }
  return t.var(l, !0), f(() => t.break()), l;
  function f(b) {
    const k = t.const("len", (0, ge._)`${n}.length`);
    t.forRange("i", 0, k, (_) => {
      e.subschema({
        keyword: a,
        dataProp: _,
        dataPropType: Yr.Type.Num
      }, l), t.if((0, ge.not)(l), b);
    });
  }
}
oe.validateArray = cs;
function ls(e) {
  const { gen: t, schema: n, keyword: a, it: i } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((b) => (0, Yr.alwaysValidSchema)(i, b)) && !i.opts.unevaluated)
    return;
  const l = t.let("valid", !1), f = t.name("_valid");
  t.block(() => n.forEach((b, k) => {
    const _ = e.subschema({
      keyword: a,
      schemaProp: k,
      compositeRule: !0
    }, f);
    t.assign(l, (0, ge._)`${l} || ${f}`), e.mergeValidEvaluated(_, f) || t.if((0, ge.not)(l));
  })), e.result(l, () => e.reset(), () => e.error(!0));
}
oe.validateUnion = ls;
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.validateKeywordUsage = Ze.validSchemaType = Ze.funcKeywordCode = Ze.macroKeywordCode = void 0;
const Se = se, yt = Qe, us = oe, ds = ar;
function hs(e, t) {
  const { gen: n, keyword: a, schema: i, parentSchema: l, it: f } = e, b = t.macro.call(f.self, i, l, f), k = Rn(n, a, b);
  f.opts.validateSchema !== !1 && f.self.validateSchema(b, !0);
  const _ = n.name("valid");
  e.subschema({
    schema: b,
    schemaPath: Se.nil,
    errSchemaPath: `${f.errSchemaPath}/${a}`,
    topSchemaRef: k,
    compositeRule: !0
  }, _), e.pass(_, () => e.error(!0));
}
Ze.macroKeywordCode = hs;
function ps(e, t) {
  var n;
  const { gen: a, keyword: i, schema: l, parentSchema: f, $data: b, it: k } = e;
  ms(k, t);
  const _ = !b && t.compile ? t.compile.call(k.self, l, f, k) : t.validate, y = Rn(a, i, _), S = a.let("valid");
  e.block$data(S, A), e.ok((n = t.valid) !== null && n !== void 0 ? n : S);
  function A() {
    if (t.errors === !1)
      C(), t.modifying && Ya(e), x(() => e.error());
    else {
      const $ = t.async ? M() : O();
      t.modifying && Ya(e), x(() => fs(e, $));
    }
  }
  function M() {
    const $ = a.let("ruleErrs", null);
    return a.try(() => C((0, Se._)`await `), (T) => a.assign(S, !1).if((0, Se._)`${T} instanceof ${k.ValidationError}`, () => a.assign($, (0, Se._)`${T}.errors`), () => a.throw(T))), $;
  }
  function O() {
    const $ = (0, Se._)`${y}.errors`;
    return a.assign($, null), C(Se.nil), $;
  }
  function C($ = t.async ? (0, Se._)`await ` : Se.nil) {
    const T = k.opts.passContext ? yt.default.this : yt.default.self, R = !("compile" in t && !b || t.schema === !1);
    a.assign(S, (0, Se._)`${$}${(0, us.callValidateCode)(e, y, T, R)}`, t.modifying);
  }
  function x($) {
    var T;
    a.if((0, Se.not)((T = t.valid) !== null && T !== void 0 ? T : S), $);
  }
}
Ze.funcKeywordCode = ps;
function Ya(e) {
  const { gen: t, data: n, it: a } = e;
  t.if(a.parentData, () => t.assign(n, (0, Se._)`${a.parentData}[${a.parentDataProperty}]`));
}
function fs(e, t) {
  const { gen: n } = e;
  n.if((0, Se._)`Array.isArray(${t})`, () => {
    n.assign(yt.default.vErrors, (0, Se._)`${yt.default.vErrors} === null ? ${t} : ${yt.default.vErrors}.concat(${t})`).assign(yt.default.errors, (0, Se._)`${yt.default.vErrors}.length`), (0, ds.extendErrors)(e);
  }, () => e.error());
}
function ms({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function Rn(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, Se.stringify)(n) });
}
function gs(e, t, n = !1) {
  return !t.length || t.some((a) => a === "array" ? Array.isArray(e) : a === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == a || n && typeof e > "u");
}
Ze.validSchemaType = gs;
function ys({ schema: e, opts: t, self: n, errSchemaPath: a }, i, l) {
  if (Array.isArray(i.keyword) ? !i.keyword.includes(l) : i.keyword !== l)
    throw new Error("ajv implementation error");
  const f = i.dependencies;
  if (f != null && f.some((b) => !Object.prototype.hasOwnProperty.call(e, b)))
    throw new Error(`parent schema must have dependencies of ${l}: ${f.join(",")}`);
  if (i.validateSchema && !i.validateSchema(e[l])) {
    const b = `keyword "${l}" value is invalid at path "${a}": ` + n.errorsText(i.validateSchema.errors);
    if (t.validateSchema === "log")
      n.logger.error(b);
    else
      throw new Error(b);
  }
}
Ze.validateKeywordUsage = ys;
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.extendSubschemaMode = lt.extendSubschemaData = lt.getSubschema = void 0;
const Je = se, Ln = ce;
function _s(e, { keyword: t, schemaProp: n, schema: a, schemaPath: i, errSchemaPath: l, topSchemaRef: f }) {
  if (t !== void 0 && a !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const b = e.schema[t];
    return n === void 0 ? {
      schema: b,
      schemaPath: (0, Je._)`${e.schemaPath}${(0, Je.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: b[n],
      schemaPath: (0, Je._)`${e.schemaPath}${(0, Je.getProperty)(t)}${(0, Je.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, Ln.escapeFragment)(n)}`
    };
  }
  if (a !== void 0) {
    if (i === void 0 || l === void 0 || f === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: a,
      schemaPath: i,
      topSchemaRef: f,
      errSchemaPath: l
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
lt.getSubschema = _s;
function bs(e, t, { dataProp: n, dataPropType: a, data: i, dataTypes: l, propertyName: f }) {
  if (i !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: b } = t;
  if (n !== void 0) {
    const { errorPath: _, dataPathArr: y, opts: S } = t, A = b.let("data", (0, Je._)`${t.data}${(0, Je.getProperty)(n)}`, !0);
    k(A), e.errorPath = (0, Je.str)`${_}${(0, Ln.getErrorPath)(n, a, S.jsPropertySyntax)}`, e.parentDataProperty = (0, Je._)`${n}`, e.dataPathArr = [...y, e.parentDataProperty];
  }
  if (i !== void 0) {
    const _ = i instanceof Je.Name ? i : b.let("data", i, !0);
    k(_), f !== void 0 && (e.propertyName = f);
  }
  l && (e.dataTypes = l);
  function k(_) {
    e.data = _, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, _];
  }
}
lt.extendSubschemaData = bs;
function ws(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: a, createErrors: i, allErrors: l }) {
  a !== void 0 && (e.compositeRule = a), i !== void 0 && (e.createErrors = i), l !== void 0 && (e.allErrors = l), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
lt.extendSubschemaMode = ws;
var Pe = {}, Mn = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var a, i, l;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length)
        return !1;
      for (i = a; i-- !== 0; )
        if (!e(t[i], n[i]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (l = Object.keys(t), a = l.length, a !== Object.keys(n).length)
      return !1;
    for (i = a; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, l[i]))
        return !1;
    for (i = a; i-- !== 0; ) {
      var f = l[i];
      if (!e(t[f], n[f]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}, zn = { exports: {} }, ct = zn.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var a = typeof n == "function" ? n : n.pre || function() {
  }, i = n.post || function() {
  };
  br(t, a, i, e, "", e);
};
ct.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
ct.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
ct.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
ct.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function br(e, t, n, a, i, l, f, b, k, _) {
  if (a && typeof a == "object" && !Array.isArray(a)) {
    t(a, i, l, f, b, k, _);
    for (var y in a) {
      var S = a[y];
      if (Array.isArray(S)) {
        if (y in ct.arrayKeywords)
          for (var A = 0; A < S.length; A++)
            br(e, t, n, S[A], i + "/" + y + "/" + A, l, i, y, a, A);
      } else if (y in ct.propsKeywords) {
        if (S && typeof S == "object")
          for (var M in S)
            br(e, t, n, S[M], i + "/" + y + "/" + vs(M), l, i, y, a, M);
      } else
        (y in ct.keywords || e.allKeys && !(y in ct.skipKeywords)) && br(e, t, n, S, i + "/" + y, l, i, y, a);
    }
    n(a, i, l, f, b, k, _);
  }
}
function vs(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var $s = zn.exports;
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.getSchemaRefs = Pe.resolveUrl = Pe.normalizeId = Pe._getFullPath = Pe.getFullPath = Pe.inlineRef = void 0;
const ks = ce, Ps = Mn, Es = $s, Ss = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function js(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Fr(e) : t ? Dn(e) <= t : !1;
}
Pe.inlineRef = js;
const xs = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Fr(e) {
  for (const t in e) {
    if (xs.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(Fr) || typeof n == "object" && Fr(n))
      return !0;
  }
  return !1;
}
function Dn(e) {
  let t = 0;
  for (const n in e)
    if (n === "$ref" || (t++, !Ss.has(n) && (typeof e[n] == "object" && (0, ks.eachItem)(e[n], (a) => t += Dn(a)), t === 1 / 0)))
      return 1 / 0;
  return t;
}
function Vn(e, t = "", n) {
  n !== !1 && (t = It(t));
  const a = e.parse(t);
  return Un(e, a);
}
Pe.getFullPath = Vn;
function Un(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Pe._getFullPath = Un;
const Ts = /#\/?$/;
function It(e) {
  return e ? e.replace(Ts, "") : "";
}
Pe.normalizeId = It;
function Cs(e, t, n) {
  return n = It(n), e.resolve(t, n);
}
Pe.resolveUrl = Cs;
const Ns = /^[a-z_][-a-z0-9._]*$/i;
function Os(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: a } = this.opts, i = It(e[n] || t), l = { "": i }, f = Vn(a, i, !1), b = {}, k = /* @__PURE__ */ new Set();
  return Es(e, { allKeys: !0 }, (S, A, M, O) => {
    if (O === void 0)
      return;
    const C = f + A;
    let x = l[O];
    typeof S[n] == "string" && (x = $.call(this, S[n])), T.call(this, S.$anchor), T.call(this, S.$dynamicAnchor), l[A] = x;
    function $(R) {
      const r = this.opts.uriResolver.resolve;
      if (R = It(x ? r(x, R) : R), k.has(R))
        throw y(R);
      k.add(R);
      let s = this.refs[R];
      return typeof s == "string" && (s = this.refs[s]), typeof s == "object" ? _(S, s.schema, R) : R !== It(C) && (R[0] === "#" ? (_(S, b[R], R), b[R] = S) : this.refs[R] = C), R;
    }
    function T(R) {
      if (typeof R == "string") {
        if (!Ns.test(R))
          throw new Error(`invalid anchor "${R}"`);
        $.call(this, `#${R}`);
      }
    }
  }), b;
  function _(S, A, M) {
    if (A !== void 0 && !Ps(S, A))
      throw y(M);
  }
  function y(S) {
    return new Error(`reference "${S}" resolves to more than one schema`);
  }
}
Pe.getSchemaRefs = Os;
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.getData = Ge.KeywordCxt = Ge.validateFunctionCode = void 0;
const Bn = Rt, Ja = nr, Qr = rt, kr = nr, Is = Cr, Jt = Ze, Rr = lt, Z = se, ee = Qe, As = Pe, at = ce, Kt = ar;
function Rs(e) {
  if (qn(e) && (Gn(e), Hn(e))) {
    zs(e);
    return;
  }
  Fn(e, () => (0, Bn.topBoolOrEmptySchema)(e));
}
Ge.validateFunctionCode = Rs;
function Fn({ gen: e, validateName: t, schema: n, schemaEnv: a, opts: i }, l) {
  i.code.es5 ? e.func(t, (0, Z._)`${ee.default.data}, ${ee.default.valCxt}`, a.$async, () => {
    e.code((0, Z._)`"use strict"; ${Za(n, i)}`), Ms(e, i), e.code(l);
  }) : e.func(t, (0, Z._)`${ee.default.data}, ${Ls(i)}`, a.$async, () => e.code(Za(n, i)).code(l));
}
function Ls(e) {
  return (0, Z._)`{${ee.default.instancePath}="", ${ee.default.parentData}, ${ee.default.parentDataProperty}, ${ee.default.rootData}=${ee.default.data}${e.dynamicRef ? (0, Z._)`, ${ee.default.dynamicAnchors}={}` : Z.nil}}={}`;
}
function Ms(e, t) {
  e.if(ee.default.valCxt, () => {
    e.var(ee.default.instancePath, (0, Z._)`${ee.default.valCxt}.${ee.default.instancePath}`), e.var(ee.default.parentData, (0, Z._)`${ee.default.valCxt}.${ee.default.parentData}`), e.var(ee.default.parentDataProperty, (0, Z._)`${ee.default.valCxt}.${ee.default.parentDataProperty}`), e.var(ee.default.rootData, (0, Z._)`${ee.default.valCxt}.${ee.default.rootData}`), t.dynamicRef && e.var(ee.default.dynamicAnchors, (0, Z._)`${ee.default.valCxt}.${ee.default.dynamicAnchors}`);
  }, () => {
    e.var(ee.default.instancePath, (0, Z._)`""`), e.var(ee.default.parentData, (0, Z._)`undefined`), e.var(ee.default.parentDataProperty, (0, Z._)`undefined`), e.var(ee.default.rootData, ee.default.data), t.dynamicRef && e.var(ee.default.dynamicAnchors, (0, Z._)`{}`);
  });
}
function zs(e) {
  const { schema: t, opts: n, gen: a } = e;
  Fn(e, () => {
    n.$comment && t.$comment && Wn(e), Fs(e), a.let(ee.default.vErrors, null), a.let(ee.default.errors, 0), n.unevaluated && Ds(e), Kn(e), Gs(e);
  });
}
function Ds(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, Z._)`${n}.evaluated`), t.if((0, Z._)`${e.evaluated}.dynamicProps`, () => t.assign((0, Z._)`${e.evaluated}.props`, (0, Z._)`undefined`)), t.if((0, Z._)`${e.evaluated}.dynamicItems`, () => t.assign((0, Z._)`${e.evaluated}.items`, (0, Z._)`undefined`));
}
function Za(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, Z._)`/*# sourceURL=${n} */` : Z.nil;
}
function Vs(e, t) {
  if (qn(e) && (Gn(e), Hn(e))) {
    Us(e, t);
    return;
  }
  (0, Bn.boolOrEmptySchema)(e, t);
}
function Hn({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function qn(e) {
  return typeof e.schema != "boolean";
}
function Us(e, t) {
  const { schema: n, gen: a, opts: i } = e;
  i.$comment && n.$comment && Wn(e), Hs(e), qs(e);
  const l = a.const("_errs", ee.default.errors);
  Kn(e, l), a.var(t, (0, Z._)`${l} === ${ee.default.errors}`);
}
function Gn(e) {
  (0, at.checkUnknownRules)(e), Bs(e);
}
function Kn(e, t) {
  if (e.opts.jtd)
    return Qa(e, [], !1, t);
  const n = (0, Ja.getSchemaTypes)(e.schema), a = (0, Ja.coerceAndCheckDataType)(e, n);
  Qa(e, n, !a, t);
}
function Bs(e) {
  const { schema: t, errSchemaPath: n, opts: a, self: i } = e;
  t.$ref && a.ignoreKeywordsWithRef && (0, at.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function Fs(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, at.checkStrictMode)(e, "default is ignored in the schema root");
}
function Hs(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, As.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function qs(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Wn({ gen: e, schemaEnv: t, schema: n, errSchemaPath: a, opts: i }) {
  const l = n.$comment;
  if (i.$comment === !0)
    e.code((0, Z._)`${ee.default.self}.logger.log(${l})`);
  else if (typeof i.$comment == "function") {
    const f = (0, Z.str)`${a}/$comment`, b = e.scopeValue("root", { ref: t.root });
    e.code((0, Z._)`${ee.default.self}.opts.$comment(${l}, ${f}, ${b}.schema)`);
  }
}
function Gs(e) {
  const { gen: t, schemaEnv: n, validateName: a, ValidationError: i, opts: l } = e;
  n.$async ? t.if((0, Z._)`${ee.default.errors} === 0`, () => t.return(ee.default.data), () => t.throw((0, Z._)`new ${i}(${ee.default.vErrors})`)) : (t.assign((0, Z._)`${a}.errors`, ee.default.vErrors), l.unevaluated && Ks(e), t.return((0, Z._)`${ee.default.errors} === 0`));
}
function Ks({ gen: e, evaluated: t, props: n, items: a }) {
  n instanceof Z.Name && e.assign((0, Z._)`${t}.props`, n), a instanceof Z.Name && e.assign((0, Z._)`${t}.items`, a);
}
function Qa(e, t, n, a) {
  const { gen: i, schema: l, data: f, allErrors: b, opts: k, self: _ } = e, { RULES: y } = _;
  if (l.$ref && (k.ignoreKeywordsWithRef || !(0, at.schemaHasRulesButRef)(l, y))) {
    i.block(() => Zn(e, "$ref", y.all.$ref.definition));
    return;
  }
  k.jtd || Ws(e, t), i.block(() => {
    for (const A of y.rules)
      S(A);
    S(y.post);
  });
  function S(A) {
    (0, Qr.shouldUseGroup)(l, A) && (A.type ? (i.if((0, kr.checkDataType)(A.type, f, k.strictNumbers)), Xa(e, A), t.length === 1 && t[0] === A.type && n && (i.else(), (0, kr.reportTypeError)(e)), i.endIf()) : Xa(e, A), b || i.if((0, Z._)`${ee.default.errors} === ${a || 0}`));
  }
}
function Xa(e, t) {
  const { gen: n, schema: a, opts: { useDefaults: i } } = e;
  i && (0, Is.assignDefaults)(e, t.type), n.block(() => {
    for (const l of t.rules)
      (0, Qr.shouldUseRule)(a, l) && Zn(e, l.keyword, l.definition, t.type);
  });
}
function Ws(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (Ys(e, t), e.opts.allowUnionTypes || Js(e, t), Zs(e, e.dataTypes));
}
function Ys(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      Yn(e.dataTypes, n) || Xr(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), Xs(e, t);
  }
}
function Js(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && Xr(e, "use allowUnionTypes to allow union type keyword");
}
function Zs(e, t) {
  const n = e.self.RULES.all;
  for (const a in n) {
    const i = n[a];
    if (typeof i == "object" && (0, Qr.shouldUseRule)(e.schema, i)) {
      const { type: l } = i.definition;
      l.length && !l.some((f) => Qs(t, f)) && Xr(e, `missing type "${l.join(",")}" for keyword "${a}"`);
    }
  }
}
function Qs(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Yn(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function Xs(e, t) {
  const n = [];
  for (const a of e.dataTypes)
    Yn(t, a) ? n.push(a) : t.includes("integer") && a === "number" && n.push("integer");
  e.dataTypes = n;
}
function Xr(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, at.checkStrictMode)(e, t, e.opts.strictTypes);
}
class Jn {
  constructor(t, n, a) {
    if ((0, Jt.validateKeywordUsage)(t, n, a), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = a, this.data = t.data, this.schema = t.schema[a], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, at.schemaRefOrVal)(t, this.schema, a, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Qn(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Jt.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${a} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = t.gen.const("_errs", ee.default.errors));
  }
  result(t, n, a) {
    this.failResult((0, Z.not)(t), n, a);
  }
  failResult(t, n, a) {
    this.gen.if(t), a ? a() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, n) {
    this.failResult((0, Z.not)(t), void 0, n);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: n } = this;
    this.fail((0, Z._)`${n} !== undefined && (${(0, Z.or)(this.invalid$data(), t)})`);
  }
  error(t, n, a) {
    if (n) {
      this.setParams(n), this._error(t, a), this.setParams({});
      return;
    }
    this._error(t, a);
  }
  _error(t, n) {
    (t ? Kt.reportExtraError : Kt.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, Kt.reportError)(this, this.def.$dataError || Kt.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Kt.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, n) {
    n ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, n, a = Z.nil) {
    this.gen.block(() => {
      this.check$data(t, a), n();
    });
  }
  check$data(t = Z.nil, n = Z.nil) {
    if (!this.$data)
      return;
    const { gen: a, schemaCode: i, schemaType: l, def: f } = this;
    a.if((0, Z.or)((0, Z._)`${i} === undefined`, n)), t !== Z.nil && a.assign(t, !0), (l.length || f.validateSchema) && (a.elseIf(this.invalid$data()), this.$dataError(), t !== Z.nil && a.assign(t, !1)), a.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: n, schemaType: a, def: i, it: l } = this;
    return (0, Z.or)(f(), b());
    function f() {
      if (a.length) {
        if (!(n instanceof Z.Name))
          throw new Error("ajv implementation error");
        const k = Array.isArray(a) ? a : [a];
        return (0, Z._)`${(0, kr.checkDataTypes)(k, n, l.opts.strictNumbers, kr.DataType.Wrong)}`;
      }
      return Z.nil;
    }
    function b() {
      if (i.validateSchema) {
        const k = t.scopeValue("validate$data", { ref: i.validateSchema });
        return (0, Z._)`!${k}(${n})`;
      }
      return Z.nil;
    }
  }
  subschema(t, n) {
    const a = (0, Rr.getSubschema)(this.it, t);
    (0, Rr.extendSubschemaData)(a, this.it, t), (0, Rr.extendSubschemaMode)(a, t);
    const i = { ...this.it, ...a, items: void 0, props: void 0 };
    return Vs(i, n), i;
  }
  mergeEvaluated(t, n) {
    const { it: a, gen: i } = this;
    a.opts.unevaluated && (a.props !== !0 && t.props !== void 0 && (a.props = at.mergeEvaluated.props(i, t.props, a.props, n)), a.items !== !0 && t.items !== void 0 && (a.items = at.mergeEvaluated.items(i, t.items, a.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: a, gen: i } = this;
    if (a.opts.unevaluated && (a.props !== !0 || a.items !== !0))
      return i.if(n, () => this.mergeEvaluated(t, Z.Name)), !0;
  }
}
Ge.KeywordCxt = Jn;
function Zn(e, t, n, a) {
  const i = new Jn(e, n, t);
  "code" in n ? n.code(i, a) : i.$data && n.validate ? (0, Jt.funcKeywordCode)(i, n) : "macro" in n ? (0, Jt.macroKeywordCode)(i, n) : (n.compile || n.validate) && (0, Jt.funcKeywordCode)(i, n);
}
const ei = /^\/(?:[^~]|~0|~1)*$/, ti = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Qn(e, { dataLevel: t, dataNames: n, dataPathArr: a }) {
  let i, l;
  if (e === "")
    return ee.default.rootData;
  if (e[0] === "/") {
    if (!ei.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    i = e, l = ee.default.rootData;
  } else {
    const _ = ti.exec(e);
    if (!_)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const y = +_[1];
    if (i = _[2], i === "#") {
      if (y >= t)
        throw new Error(k("property/index", y));
      return a[t - y];
    }
    if (y > t)
      throw new Error(k("data", y));
    if (l = n[t - y], !i)
      return l;
  }
  let f = l;
  const b = i.split("/");
  for (const _ of b)
    _ && (l = (0, Z._)`${l}${(0, Z.getProperty)((0, at.unescapeJsonPointer)(_))}`, f = (0, Z._)`${f} && ${l}`);
  return f;
  function k(_, y) {
    return `Cannot access ${_} ${y} levels up, current level is ${t}`;
  }
}
Ge.getData = Qn;
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
class ri extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
or.default = ri;
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
const Lr = Pe;
class ai extends Error {
  constructor(t, n, a, i) {
    super(i || `can't resolve reference ${a} from id ${n}`), this.missingRef = (0, Lr.resolveUrl)(t, n, a), this.missingSchema = (0, Lr.normalizeId)((0, Lr.getFullPath)(t, this.missingRef));
  }
}
sr.default = ai;
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.resolveSchema = Oe.getCompilingSchema = Oe.resolveRef = Oe.compileSchema = Oe.SchemaEnv = void 0;
const Be = se, ni = or, mt = Qe, qe = Pe, en = ce, oi = Ge;
class Nr {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let a;
    typeof t.schema == "object" && (a = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, qe.normalizeId)(a == null ? void 0 : a[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = a == null ? void 0 : a.$async, this.refs = {};
  }
}
Oe.SchemaEnv = Nr;
function ea(e) {
  const t = Xn.call(this, e);
  if (t)
    return t;
  const n = (0, qe.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: a, lines: i } = this.opts.code, { ownProperties: l } = this.opts, f = new Be.CodeGen(this.scope, { es5: a, lines: i, ownProperties: l });
  let b;
  e.$async && (b = f.scopeValue("Error", {
    ref: ni.default,
    code: (0, Be._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const k = f.scopeName("validate");
  e.validateName = k;
  const _ = {
    gen: f,
    allErrors: this.opts.allErrors,
    data: mt.default.data,
    parentData: mt.default.parentData,
    parentDataProperty: mt.default.parentDataProperty,
    dataNames: [mt.default.data],
    dataPathArr: [Be.nil],
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Be.stringify)(e.schema) } : { ref: e.schema }),
    validateName: k,
    ValidationError: b,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: Be.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Be._)`""`,
    opts: this.opts,
    self: this
  };
  let y;
  try {
    this._compilations.add(e), (0, oi.validateFunctionCode)(_), f.optimize(this.opts.code.optimize);
    const S = f.toString();
    y = `${f.scopeRefs(mt.default.scope)}return ${S}`, this.opts.code.process && (y = this.opts.code.process(y, e));
    const A = new Function(`${mt.default.self}`, `${mt.default.scope}`, y)(this, this.scope.get());
    if (this.scope.value(k, { ref: A }), A.errors = null, A.schema = e.schema, A.schemaEnv = e, e.$async && (A.$async = !0), this.opts.code.source === !0 && (A.source = { validateName: k, validateCode: S, scopeValues: f._values }), this.opts.unevaluated) {
      const { props: M, items: O } = _;
      A.evaluated = {
        props: M instanceof Be.Name ? void 0 : M,
        items: O instanceof Be.Name ? void 0 : O,
        dynamicProps: M instanceof Be.Name,
        dynamicItems: O instanceof Be.Name
      }, A.source && (A.source.evaluated = (0, Be.stringify)(A.evaluated));
    }
    return e.validate = A, e;
  } catch (S) {
    throw delete e.validate, delete e.validateName, y && this.logger.error("Error compiling schema, function code:", y), S;
  } finally {
    this._compilations.delete(e);
  }
}
Oe.compileSchema = ea;
function si(e, t, n) {
  var a;
  n = (0, qe.resolveUrl)(this.opts.uriResolver, t, n);
  const i = e.refs[n];
  if (i)
    return i;
  let l = li.call(this, e, n);
  if (l === void 0) {
    const f = (a = e.localRefs) === null || a === void 0 ? void 0 : a[n], { schemaId: b } = this.opts;
    f && (l = new Nr({ schema: f, schemaId: b, root: e, baseId: t }));
  }
  if (l !== void 0)
    return e.refs[n] = ii.call(this, l);
}
Oe.resolveRef = si;
function ii(e) {
  return (0, qe.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : ea.call(this, e);
}
function Xn(e) {
  for (const t of this._compilations)
    if (ci(t, e))
      return t;
}
Oe.getCompilingSchema = Xn;
function ci(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function li(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || Or.call(this, e, t);
}
function Or(e, t) {
  const n = this.opts.uriResolver.parse(t), a = (0, qe._getFullPath)(this.opts.uriResolver, n);
  let i = (0, qe.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && a === i)
    return Mr.call(this, n, e);
  const l = (0, qe.normalizeId)(a), f = this.refs[l] || this.schemas[l];
  if (typeof f == "string") {
    const b = Or.call(this, e, f);
    return typeof (b == null ? void 0 : b.schema) != "object" ? void 0 : Mr.call(this, n, b);
  }
  if (typeof (f == null ? void 0 : f.schema) == "object") {
    if (f.validate || ea.call(this, f), l === (0, qe.normalizeId)(t)) {
      const { schema: b } = f, { schemaId: k } = this.opts, _ = b[k];
      return _ && (i = (0, qe.resolveUrl)(this.opts.uriResolver, i, _)), new Nr({ schema: b, schemaId: k, root: e, baseId: i });
    }
    return Mr.call(this, n, f);
  }
}
Oe.resolveSchema = Or;
const ui = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function Mr(e, { baseId: t, schema: n, root: a }) {
  var i;
  if (((i = e.fragment) === null || i === void 0 ? void 0 : i[0]) !== "/")
    return;
  for (const b of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const k = n[(0, en.unescapeFragment)(b)];
    if (k === void 0)
      return;
    n = k;
    const _ = typeof n == "object" && n[this.opts.schemaId];
    !ui.has(b) && _ && (t = (0, qe.resolveUrl)(this.opts.uriResolver, t, _));
  }
  let l;
  if (typeof n != "boolean" && n.$ref && !(0, en.schemaHasRulesButRef)(n, this.RULES)) {
    const b = (0, qe.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    l = Or.call(this, a, b);
  }
  const { schemaId: f } = this.opts;
  if (l = l || new Nr({ schema: n, schemaId: f, root: a, baseId: t }), l.schema !== l.root.schema)
    return l;
}
const di = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", hi = "Meta-schema for $data reference (JSON AnySchema extension proposal)", pi = "object", fi = [
  "$data"
], mi = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, gi = !1, yi = {
  $id: di,
  description: hi,
  type: pi,
  required: fi,
  properties: mi,
  additionalProperties: gi
};
var ta = {}, Hr = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(e, t) {
  (function(n, a) {
    a(t);
  })(jn, function(n) {
    function a() {
      for (var h = arguments.length, w = Array(h), E = 0; E < h; E++)
        w[E] = arguments[E];
      if (w.length > 1) {
        w[0] = w[0].slice(0, -1);
        for (var L = w.length - 1, z = 1; z < L; ++z)
          w[z] = w[z].slice(1, -1);
        return w[L] = w[L].slice(1), w.join("");
      } else
        return w[0];
    }
    function i(h) {
      return "(?:" + h + ")";
    }
    function l(h) {
      return h === void 0 ? "undefined" : h === null ? "null" : Object.prototype.toString.call(h).split(" ").pop().split("]").shift().toLowerCase();
    }
    function f(h) {
      return h.toUpperCase();
    }
    function b(h) {
      return h != null ? h instanceof Array ? h : typeof h.length != "number" || h.split || h.setInterval || h.call ? [h] : Array.prototype.slice.call(h) : [];
    }
    function k(h, w) {
      var E = h;
      if (w)
        for (var L in w)
          E[L] = w[L];
      return E;
    }
    function _(h) {
      var w = "[A-Za-z]", E = "[0-9]", L = a(E, "[A-Fa-f]"), z = i(i("%[EFef]" + L + "%" + L + L + "%" + L + L) + "|" + i("%[89A-Fa-f]" + L + "%" + L + L) + "|" + i("%" + L + L)), X = "[\\:\\/\\?\\#\\[\\]\\@]", Q = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", le = a(X, Q), be = h ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", de = h ? "[\\uE000-\\uF8FF]" : "[]", ie = a(w, E, "[\\-\\.\\_\\~]", be);
      i(w + a(w, E, "[\\+\\-\\.]") + "*"), i(i(z + "|" + a(ie, Q, "[\\:]")) + "*");
      var me = i(i("25[0-5]") + "|" + i("2[0-4]" + E) + "|" + i("1" + E + E) + "|" + i("0?[1-9]" + E) + "|0?0?" + E), ye = i(me + "\\." + me + "\\." + me + "\\." + me), te = i(L + "{1,4}"), we = i(i(te + "\\:" + te) + "|" + ye), he = i(i(te + "\\:") + "{6}" + we), Re = i("\\:\\:" + i(te + "\\:") + "{5}" + we), jt = i(i(te) + "?\\:\\:" + i(te + "\\:") + "{4}" + we), Ue = i(i(i(te + "\\:") + "{0,1}" + te) + "?\\:\\:" + i(te + "\\:") + "{3}" + we), et = i(i(i(te + "\\:") + "{0,2}" + te) + "?\\:\\:" + i(te + "\\:") + "{2}" + we), ht = i(i(i(te + "\\:") + "{0,3}" + te) + "?\\:\\:" + te + "\\:" + we), pt = i(i(i(te + "\\:") + "{0,4}" + te) + "?\\:\\:" + we), Le = i(i(i(te + "\\:") + "{0,5}" + te) + "?\\:\\:" + te), tt = i(i(i(te + "\\:") + "{0,6}" + te) + "?\\:\\:"), ft = i([he, Re, jt, Ue, et, ht, pt, Le, tt].join("|")), Ye = i(i(ie + "|" + z) + "+");
      i("[vV]" + L + "+\\." + a(ie, Q, "[\\:]") + "+"), i(i(z + "|" + a(ie, Q)) + "*");
      var lr = i(z + "|" + a(ie, Q, "[\\:\\@]"));
      return i(i(z + "|" + a(ie, Q, "[\\@]")) + "+"), i(i(lr + "|" + a("[\\/\\?]", de)) + "*"), {
        NOT_SCHEME: new RegExp(a("[^]", w, E, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(a("[^\\%\\:]", ie, Q), "g"),
        NOT_HOST: new RegExp(a("[^\\%\\[\\]\\:]", ie, Q), "g"),
        NOT_PATH: new RegExp(a("[^\\%\\/\\:\\@]", ie, Q), "g"),
        NOT_PATH_NOSCHEME: new RegExp(a("[^\\%\\/\\@]", ie, Q), "g"),
        NOT_QUERY: new RegExp(a("[^\\%]", ie, Q, "[\\:\\@\\/\\?]", de), "g"),
        NOT_FRAGMENT: new RegExp(a("[^\\%]", ie, Q, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(a("[^]", ie, Q), "g"),
        UNRESERVED: new RegExp(ie, "g"),
        OTHER_CHARS: new RegExp(a("[^\\%]", ie, le), "g"),
        PCT_ENCODED: new RegExp(z, "g"),
        IPV4ADDRESS: new RegExp("^(" + ye + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + ft + ")" + i(i("\\%25|\\%(?!" + L + "{2})") + "(" + Ye + ")") + "?\\]?$")
        //RFC 6874, with relaxed parsing rules
      };
    }
    var y = _(!1), S = _(!0), A = function() {
      function h(w, E) {
        var L = [], z = !0, X = !1, Q = void 0;
        try {
          for (var le = w[Symbol.iterator](), be; !(z = (be = le.next()).done) && (L.push(be.value), !(E && L.length === E)); z = !0)
            ;
        } catch (de) {
          X = !0, Q = de;
        } finally {
          try {
            !z && le.return && le.return();
          } finally {
            if (X)
              throw Q;
          }
        }
        return L;
      }
      return function(w, E) {
        if (Array.isArray(w))
          return w;
        if (Symbol.iterator in Object(w))
          return h(w, E);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), M = function(h) {
      if (Array.isArray(h)) {
        for (var w = 0, E = Array(h.length); w < h.length; w++)
          E[w] = h[w];
        return E;
      } else
        return Array.from(h);
    }, O = 2147483647, C = 36, x = 1, $ = 26, T = 38, R = 700, r = 72, s = 128, o = "-", c = /^xn--/, u = /[^\0-\x7E]/, m = /[\x2E\u3002\uFF0E\uFF61]/g, p = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, j = C - x, V = Math.floor, F = String.fromCharCode;
    function D(h) {
      throw new RangeError(p[h]);
    }
    function q(h, w) {
      for (var E = [], L = h.length; L--; )
        E[L] = w(h[L]);
      return E;
    }
    function g(h, w) {
      var E = h.split("@"), L = "";
      E.length > 1 && (L = E[0] + "@", h = E[1]), h = h.replace(m, ".");
      var z = h.split("."), X = q(z, w).join(".");
      return L + X;
    }
    function H(h) {
      for (var w = [], E = 0, L = h.length; E < L; ) {
        var z = h.charCodeAt(E++);
        if (z >= 55296 && z <= 56319 && E < L) {
          var X = h.charCodeAt(E++);
          (X & 64512) == 56320 ? w.push(((z & 1023) << 10) + (X & 1023) + 65536) : (w.push(z), E--);
        } else
          w.push(z);
      }
      return w;
    }
    var W = function(h) {
      return String.fromCodePoint.apply(String, M(h));
    }, J = function(h) {
      return h - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : C;
    }, U = function(h, w) {
      return h + 22 + 75 * (h < 26) - ((w != 0) << 5);
    }, P = function(h, w, E) {
      var L = 0;
      for (
        h = E ? V(h / R) : h >> 1, h += V(h / w);
        /* no initialization */
        h > j * $ >> 1;
        L += C
      )
        h = V(h / j);
      return V(L + (j + 1) * h / (h + T));
    }, B = function(h) {
      var w = [], E = h.length, L = 0, z = s, X = r, Q = h.lastIndexOf(o);
      Q < 0 && (Q = 0);
      for (var le = 0; le < Q; ++le)
        h.charCodeAt(le) >= 128 && D("not-basic"), w.push(h.charCodeAt(le));
      for (var be = Q > 0 ? Q + 1 : 0; be < E; ) {
        for (
          var de = L, ie = 1, me = C;
          ;
          /* no condition */
          me += C
        ) {
          be >= E && D("invalid-input");
          var ye = J(h.charCodeAt(be++));
          (ye >= C || ye > V((O - L) / ie)) && D("overflow"), L += ye * ie;
          var te = me <= X ? x : me >= X + $ ? $ : me - X;
          if (ye < te)
            break;
          var we = C - te;
          ie > V(O / we) && D("overflow"), ie *= we;
        }
        var he = w.length + 1;
        X = P(L - de, he, de == 0), V(L / he) > O - z && D("overflow"), z += V(L / he), L %= he, w.splice(L++, 0, z);
      }
      return String.fromCodePoint.apply(String, w);
    }, N = function(h) {
      var w = [];
      h = H(h);
      var E = h.length, L = s, z = 0, X = r, Q = !0, le = !1, be = void 0;
      try {
        for (var de = h[Symbol.iterator](), ie; !(Q = (ie = de.next()).done); Q = !0) {
          var me = ie.value;
          me < 128 && w.push(F(me));
        }
      } catch (Gt) {
        le = !0, be = Gt;
      } finally {
        try {
          !Q && de.return && de.return();
        } finally {
          if (le)
            throw be;
        }
      }
      var ye = w.length, te = ye;
      for (ye && w.push(o); te < E; ) {
        var we = O, he = !0, Re = !1, jt = void 0;
        try {
          for (var Ue = h[Symbol.iterator](), et; !(he = (et = Ue.next()).done); he = !0) {
            var ht = et.value;
            ht >= L && ht < we && (we = ht);
          }
        } catch (Gt) {
          Re = !0, jt = Gt;
        } finally {
          try {
            !he && Ue.return && Ue.return();
          } finally {
            if (Re)
              throw jt;
          }
        }
        var pt = te + 1;
        we - L > V((O - z) / pt) && D("overflow"), z += (we - L) * pt, L = we;
        var Le = !0, tt = !1, ft = void 0;
        try {
          for (var Ye = h[Symbol.iterator](), lr; !(Le = (lr = Ye.next()).done); Le = !0) {
            var qa = lr.value;
            if (qa < L && ++z > O && D("overflow"), qa == L) {
              for (
                var ur = z, dr = C;
                ;
                /* no condition */
                dr += C
              ) {
                var hr = dr <= X ? x : dr >= X + $ ? $ : dr - X;
                if (ur < hr)
                  break;
                var Ga = ur - hr, Ka = C - hr;
                w.push(F(U(hr + Ga % Ka, 0))), ur = V(Ga / Ka);
              }
              w.push(F(U(ur, 0))), X = P(z, pt, te == ye), z = 0, ++te;
            }
          }
        } catch (Gt) {
          tt = !0, ft = Gt;
        } finally {
          try {
            !Le && Ye.return && Ye.return();
          } finally {
            if (tt)
              throw ft;
          }
        }
        ++z, ++L;
      }
      return w.join("");
    }, d = function(h) {
      return g(h, function(w) {
        return c.test(w) ? B(w.slice(4).toLowerCase()) : w;
      });
    }, v = function(h) {
      return g(h, function(w) {
        return u.test(w) ? "xn--" + N(w) : w;
      });
    }, I = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "2.1.0",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: H,
        encode: W
      },
      decode: B,
      encode: N,
      toASCII: v,
      toUnicode: d
    }, G = {};
    function K(h) {
      var w = h.charCodeAt(0), E = void 0;
      return w < 16 ? E = "%0" + w.toString(16).toUpperCase() : w < 128 ? E = "%" + w.toString(16).toUpperCase() : w < 2048 ? E = "%" + (w >> 6 | 192).toString(16).toUpperCase() + "%" + (w & 63 | 128).toString(16).toUpperCase() : E = "%" + (w >> 12 | 224).toString(16).toUpperCase() + "%" + (w >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (w & 63 | 128).toString(16).toUpperCase(), E;
    }
    function re(h) {
      for (var w = "", E = 0, L = h.length; E < L; ) {
        var z = parseInt(h.substr(E + 1, 2), 16);
        if (z < 128)
          w += String.fromCharCode(z), E += 3;
        else if (z >= 194 && z < 224) {
          if (L - E >= 6) {
            var X = parseInt(h.substr(E + 4, 2), 16);
            w += String.fromCharCode((z & 31) << 6 | X & 63);
          } else
            w += h.substr(E, 6);
          E += 6;
        } else if (z >= 224) {
          if (L - E >= 9) {
            var Q = parseInt(h.substr(E + 4, 2), 16), le = parseInt(h.substr(E + 7, 2), 16);
            w += String.fromCharCode((z & 15) << 12 | (Q & 63) << 6 | le & 63);
          } else
            w += h.substr(E, 9);
          E += 9;
        } else
          w += h.substr(E, 3), E += 3;
      }
      return w;
    }
    function ne(h, w) {
      function E(L) {
        var z = re(L);
        return z.match(w.UNRESERVED) ? z : L;
      }
      return h.scheme && (h.scheme = String(h.scheme).replace(w.PCT_ENCODED, E).toLowerCase().replace(w.NOT_SCHEME, "")), h.userinfo !== void 0 && (h.userinfo = String(h.userinfo).replace(w.PCT_ENCODED, E).replace(w.NOT_USERINFO, K).replace(w.PCT_ENCODED, f)), h.host !== void 0 && (h.host = String(h.host).replace(w.PCT_ENCODED, E).toLowerCase().replace(w.NOT_HOST, K).replace(w.PCT_ENCODED, f)), h.path !== void 0 && (h.path = String(h.path).replace(w.PCT_ENCODED, E).replace(h.scheme ? w.NOT_PATH : w.NOT_PATH_NOSCHEME, K).replace(w.PCT_ENCODED, f)), h.query !== void 0 && (h.query = String(h.query).replace(w.PCT_ENCODED, E).replace(w.NOT_QUERY, K).replace(w.PCT_ENCODED, f)), h.fragment !== void 0 && (h.fragment = String(h.fragment).replace(w.PCT_ENCODED, E).replace(w.NOT_FRAGMENT, K).replace(w.PCT_ENCODED, f)), h;
    }
    function fe(h) {
      return h.replace(/^0*(.*)/, "$1") || "0";
    }
    function xe(h, w) {
      var E = h.match(w.IPV4ADDRESS) || [], L = A(E, 2), z = L[1];
      return z ? z.split(".").map(fe).join(".") : h;
    }
    function Xe(h, w) {
      var E = h.match(w.IPV6ADDRESS) || [], L = A(E, 3), z = L[1], X = L[2];
      if (z) {
        for (var Q = z.toLowerCase().split("::").reverse(), le = A(Q, 2), be = le[0], de = le[1], ie = de ? de.split(":").map(fe) : [], me = be.split(":").map(fe), ye = w.IPV4ADDRESS.test(me[me.length - 1]), te = ye ? 7 : 8, we = me.length - te, he = Array(te), Re = 0; Re < te; ++Re)
          he[Re] = ie[Re] || me[we + Re] || "";
        ye && (he[te - 1] = xe(he[te - 1], w));
        var jt = he.reduce(function(Le, tt, ft) {
          if (!tt || tt === "0") {
            var Ye = Le[Le.length - 1];
            Ye && Ye.index + Ye.length === ft ? Ye.length++ : Le.push({ index: ft, length: 1 });
          }
          return Le;
        }, []), Ue = jt.sort(function(Le, tt) {
          return tt.length - Le.length;
        })[0], et = void 0;
        if (Ue && Ue.length > 1) {
          var ht = he.slice(0, Ue.index), pt = he.slice(Ue.index + Ue.length);
          et = ht.join(":") + "::" + pt.join(":");
        } else
          et = he.join(":");
        return X && (et += "%" + X), et;
      } else
        return h;
    }
    var Dt = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Vt = "".match(/(){0}/)[1] === void 0;
    function Ie(h) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = {}, L = w.iri !== !1 ? S : y;
      w.reference === "suffix" && (h = (w.scheme ? w.scheme + ":" : "") + "//" + h);
      var z = h.match(Dt);
      if (z) {
        Vt ? (E.scheme = z[1], E.userinfo = z[3], E.host = z[4], E.port = parseInt(z[5], 10), E.path = z[6] || "", E.query = z[7], E.fragment = z[8], isNaN(E.port) && (E.port = z[5])) : (E.scheme = z[1] || void 0, E.userinfo = h.indexOf("@") !== -1 ? z[3] : void 0, E.host = h.indexOf("//") !== -1 ? z[4] : void 0, E.port = parseInt(z[5], 10), E.path = z[6] || "", E.query = h.indexOf("?") !== -1 ? z[7] : void 0, E.fragment = h.indexOf("#") !== -1 ? z[8] : void 0, isNaN(E.port) && (E.port = h.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), E.host && (E.host = Xe(xe(E.host, L), L)), E.scheme === void 0 && E.userinfo === void 0 && E.host === void 0 && E.port === void 0 && !E.path && E.query === void 0 ? E.reference = "same-document" : E.scheme === void 0 ? E.reference = "relative" : E.fragment === void 0 ? E.reference = "absolute" : E.reference = "uri", w.reference && w.reference !== "suffix" && w.reference !== E.reference && (E.error = E.error || "URI is not a " + w.reference + " reference.");
        var X = G[(w.scheme || E.scheme || "").toLowerCase()];
        if (!w.unicodeSupport && (!X || !X.unicodeSupport)) {
          if (E.host && (w.domainHost || X && X.domainHost))
            try {
              E.host = I.toASCII(E.host.replace(L.PCT_ENCODED, re).toLowerCase());
            } catch (Q) {
              E.error = E.error || "Host's domain name can not be converted to ASCII via punycode: " + Q;
            }
          ne(E, y);
        } else
          ne(E, L);
        X && X.parse && X.parse(E, w);
      } else
        E.error = E.error || "URI can not be parsed.";
      return E;
    }
    function Ut(h, w) {
      var E = w.iri !== !1 ? S : y, L = [];
      return h.userinfo !== void 0 && (L.push(h.userinfo), L.push("@")), h.host !== void 0 && L.push(Xe(xe(String(h.host), E), E).replace(E.IPV6ADDRESS, function(z, X, Q) {
        return "[" + X + (Q ? "%25" + Q : "") + "]";
      })), (typeof h.port == "number" || typeof h.port == "string") && (L.push(":"), L.push(String(h.port))), L.length ? L.join("") : void 0;
    }
    var $t = /^\.\.?\//, kt = /^\/\.(\/|$)/, Pt = /^\/\.\.(\/|$)/, Bt = /^\/?(?:.|\n)*?(?=\/|$)/;
    function Ke(h) {
      for (var w = []; h.length; )
        if (h.match($t))
          h = h.replace($t, "");
        else if (h.match(kt))
          h = h.replace(kt, "/");
        else if (h.match(Pt))
          h = h.replace(Pt, "/"), w.pop();
        else if (h === "." || h === "..")
          h = "";
        else {
          var E = h.match(Bt);
          if (E) {
            var L = E[0];
            h = h.slice(L.length), w.push(L);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return w.join("");
    }
    function Te(h) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = w.iri ? S : y, L = [], z = G[(w.scheme || h.scheme || "").toLowerCase()];
      if (z && z.serialize && z.serialize(h, w), h.host && !E.IPV6ADDRESS.test(h.host) && (w.domainHost || z && z.domainHost))
        try {
          h.host = w.iri ? I.toUnicode(h.host) : I.toASCII(h.host.replace(E.PCT_ENCODED, re).toLowerCase());
        } catch (le) {
          h.error = h.error || "Host's domain name can not be converted to " + (w.iri ? "Unicode" : "ASCII") + " via punycode: " + le;
        }
      ne(h, E), w.reference !== "suffix" && h.scheme && (L.push(h.scheme), L.push(":"));
      var X = Ut(h, w);
      if (X !== void 0 && (w.reference !== "suffix" && L.push("//"), L.push(X), h.path && h.path.charAt(0) !== "/" && L.push("/")), h.path !== void 0) {
        var Q = h.path;
        !w.absolutePath && (!z || !z.absolutePath) && (Q = Ke(Q)), X === void 0 && (Q = Q.replace(/^\/\//, "/%2F")), L.push(Q);
      }
      return h.query !== void 0 && (L.push("?"), L.push(h.query)), h.fragment !== void 0 && (L.push("#"), L.push(h.fragment)), L.join("");
    }
    function Et(h, w) {
      var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, L = arguments[3], z = {};
      return L || (h = Ie(Te(h, E), E), w = Ie(Te(w, E), E)), E = E || {}, !E.tolerant && w.scheme ? (z.scheme = w.scheme, z.userinfo = w.userinfo, z.host = w.host, z.port = w.port, z.path = Ke(w.path || ""), z.query = w.query) : (w.userinfo !== void 0 || w.host !== void 0 || w.port !== void 0 ? (z.userinfo = w.userinfo, z.host = w.host, z.port = w.port, z.path = Ke(w.path || ""), z.query = w.query) : (w.path ? (w.path.charAt(0) === "/" ? z.path = Ke(w.path) : ((h.userinfo !== void 0 || h.host !== void 0 || h.port !== void 0) && !h.path ? z.path = "/" + w.path : h.path ? z.path = h.path.slice(0, h.path.lastIndexOf("/") + 1) + w.path : z.path = w.path, z.path = Ke(z.path)), z.query = w.query) : (z.path = h.path, w.query !== void 0 ? z.query = w.query : z.query = h.query), z.userinfo = h.userinfo, z.host = h.host, z.port = h.port), z.scheme = h.scheme), z.fragment = w.fragment, z;
    }
    function Ft(h, w, E) {
      var L = k({ scheme: "null" }, E);
      return Te(Et(Ie(h, L), Ie(w, L), L, !0), L);
    }
    function ut(h, w) {
      return typeof h == "string" ? h = Te(Ie(h, w), w) : l(h) === "object" && (h = Ie(Te(h, w), w)), h;
    }
    function Ht(h, w, E) {
      return typeof h == "string" ? h = Te(Ie(h, E), E) : l(h) === "object" && (h = Te(h, E)), typeof w == "string" ? w = Te(Ie(w, E), E) : l(w) === "object" && (w = Te(w, E)), h === w;
    }
    function cr(h, w) {
      return h && h.toString().replace(!w || !w.iri ? y.ESCAPE : S.ESCAPE, K);
    }
    function Ae(h, w) {
      return h && h.toString().replace(!w || !w.iri ? y.PCT_ENCODED : S.PCT_ENCODED, re);
    }
    var dt = {
      scheme: "http",
      domainHost: !0,
      parse: function(h, w) {
        return h.host || (h.error = h.error || "HTTP URIs must have a host."), h;
      },
      serialize: function(h, w) {
        var E = String(h.scheme).toLowerCase() === "https";
        return (h.port === (E ? 443 : 80) || h.port === "") && (h.port = void 0), h.path || (h.path = "/"), h;
      }
    }, Ma = {
      scheme: "https",
      domainHost: dt.domainHost,
      parse: dt.parse,
      serialize: dt.serialize
    };
    function za(h) {
      return typeof h.secure == "boolean" ? h.secure : String(h.scheme).toLowerCase() === "wss";
    }
    var qt = {
      scheme: "ws",
      domainHost: !0,
      parse: function(h, w) {
        var E = h;
        return E.secure = za(E), E.resourceName = (E.path || "/") + (E.query ? "?" + E.query : ""), E.path = void 0, E.query = void 0, E;
      },
      serialize: function(h, w) {
        if ((h.port === (za(h) ? 443 : 80) || h.port === "") && (h.port = void 0), typeof h.secure == "boolean" && (h.scheme = h.secure ? "wss" : "ws", h.secure = void 0), h.resourceName) {
          var E = h.resourceName.split("?"), L = A(E, 2), z = L[0], X = L[1];
          h.path = z && z !== "/" ? z : void 0, h.query = X, h.resourceName = void 0;
        }
        return h.fragment = void 0, h;
      }
    }, Da = {
      scheme: "wss",
      domainHost: qt.domainHost,
      parse: qt.parse,
      serialize: qt.serialize
    }, vo = {}, Va = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", We = "[0-9A-Fa-f]", $o = i(i("%[EFef]" + We + "%" + We + We + "%" + We + We) + "|" + i("%[89A-Fa-f]" + We + "%" + We + We) + "|" + i("%" + We + We)), ko = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Po = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Eo = a(Po, '[\\"\\\\]'), So = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", jo = new RegExp(Va, "g"), St = new RegExp($o, "g"), xo = new RegExp(a("[^]", ko, "[\\.]", '[\\"]', Eo), "g"), Ua = new RegExp(a("[^]", Va, So), "g"), To = Ua;
    function Ar(h) {
      var w = re(h);
      return w.match(jo) ? w : h;
    }
    var Ba = {
      scheme: "mailto",
      parse: function(h, w) {
        var E = h, L = E.to = E.path ? E.path.split(",") : [];
        if (E.path = void 0, E.query) {
          for (var z = !1, X = {}, Q = E.query.split("&"), le = 0, be = Q.length; le < be; ++le) {
            var de = Q[le].split("=");
            switch (de[0]) {
              case "to":
                for (var ie = de[1].split(","), me = 0, ye = ie.length; me < ye; ++me)
                  L.push(ie[me]);
                break;
              case "subject":
                E.subject = Ae(de[1], w);
                break;
              case "body":
                E.body = Ae(de[1], w);
                break;
              default:
                z = !0, X[Ae(de[0], w)] = Ae(de[1], w);
                break;
            }
          }
          z && (E.headers = X);
        }
        E.query = void 0;
        for (var te = 0, we = L.length; te < we; ++te) {
          var he = L[te].split("@");
          if (he[0] = Ae(he[0]), w.unicodeSupport)
            he[1] = Ae(he[1], w).toLowerCase();
          else
            try {
              he[1] = I.toASCII(Ae(he[1], w).toLowerCase());
            } catch (Re) {
              E.error = E.error || "Email address's domain name can not be converted to ASCII via punycode: " + Re;
            }
          L[te] = he.join("@");
        }
        return E;
      },
      serialize: function(h, w) {
        var E = h, L = b(h.to);
        if (L) {
          for (var z = 0, X = L.length; z < X; ++z) {
            var Q = String(L[z]), le = Q.lastIndexOf("@"), be = Q.slice(0, le).replace(St, Ar).replace(St, f).replace(xo, K), de = Q.slice(le + 1);
            try {
              de = w.iri ? I.toUnicode(de) : I.toASCII(Ae(de, w).toLowerCase());
            } catch (te) {
              E.error = E.error || "Email address's domain name can not be converted to " + (w.iri ? "Unicode" : "ASCII") + " via punycode: " + te;
            }
            L[z] = be + "@" + de;
          }
          E.path = L.join(",");
        }
        var ie = h.headers = h.headers || {};
        h.subject && (ie.subject = h.subject), h.body && (ie.body = h.body);
        var me = [];
        for (var ye in ie)
          ie[ye] !== vo[ye] && me.push(ye.replace(St, Ar).replace(St, f).replace(Ua, K) + "=" + ie[ye].replace(St, Ar).replace(St, f).replace(To, K));
        return me.length && (E.query = me.join("&")), E;
      }
    }, Co = /^([^\:]+)\:(.*)/, Fa = {
      scheme: "urn",
      parse: function(h, w) {
        var E = h.path && h.path.match(Co), L = h;
        if (E) {
          var z = w.scheme || L.scheme || "urn", X = E[1].toLowerCase(), Q = E[2], le = z + ":" + (w.nid || X), be = G[le];
          L.nid = X, L.nss = Q, L.path = void 0, be && (L = be.parse(L, w));
        } else
          L.error = L.error || "URN can not be parsed.";
        return L;
      },
      serialize: function(h, w) {
        var E = w.scheme || h.scheme || "urn", L = h.nid, z = E + ":" + (w.nid || L), X = G[z];
        X && (h = X.serialize(h, w));
        var Q = h, le = h.nss;
        return Q.path = (L || w.nid) + ":" + le, Q;
      }
    }, No = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Ha = {
      scheme: "urn:uuid",
      parse: function(h, w) {
        var E = h;
        return E.uuid = E.nss, E.nss = void 0, !w.tolerant && (!E.uuid || !E.uuid.match(No)) && (E.error = E.error || "UUID is not valid."), E;
      },
      serialize: function(h, w) {
        var E = h;
        return E.nss = (h.uuid || "").toLowerCase(), E;
      }
    };
    G[dt.scheme] = dt, G[Ma.scheme] = Ma, G[qt.scheme] = qt, G[Da.scheme] = Da, G[Ba.scheme] = Ba, G[Fa.scheme] = Fa, G[Ha.scheme] = Ha, n.SCHEMES = G, n.pctEncChar = K, n.pctDecChars = re, n.parse = Ie, n.removeDotSegments = Ke, n.serialize = Te, n.resolveComponents = Et, n.resolve = Ft, n.normalize = ut, n.equal = Ht, n.escapeComponent = cr, n.unescapeComponent = Ae, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Hr, Hr.exports);
var _i = Hr.exports;
Object.defineProperty(ta, "__esModule", { value: !0 });
const eo = _i;
eo.code = 'require("ajv/dist/runtime/uri").default';
ta.default = eo;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Ge;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = se;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return n.CodeGen;
  } });
  const a = or, i = sr, l = wt, f = Oe, b = se, k = Pe, _ = nr, y = ce, S = yi, A = ta, M = (U, P) => new RegExp(U, P);
  M.code = "new RegExp";
  const O = ["removeAdditional", "useDefaults", "coerceTypes"], C = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), x = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, $ = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, T = 200;
  function R(U) {
    var P, B, N, d, v, I, G, K, re, ne, fe, xe, Xe, Dt, Vt, Ie, Ut, $t, kt, Pt, Bt, Ke, Te, Et, Ft;
    const ut = U.strict, Ht = (P = U.code) === null || P === void 0 ? void 0 : P.optimize, cr = Ht === !0 || Ht === void 0 ? 1 : Ht || 0, Ae = (N = (B = U.code) === null || B === void 0 ? void 0 : B.regExp) !== null && N !== void 0 ? N : M, dt = (d = U.uriResolver) !== null && d !== void 0 ? d : A.default;
    return {
      strictSchema: (I = (v = U.strictSchema) !== null && v !== void 0 ? v : ut) !== null && I !== void 0 ? I : !0,
      strictNumbers: (K = (G = U.strictNumbers) !== null && G !== void 0 ? G : ut) !== null && K !== void 0 ? K : !0,
      strictTypes: (ne = (re = U.strictTypes) !== null && re !== void 0 ? re : ut) !== null && ne !== void 0 ? ne : "log",
      strictTuples: (xe = (fe = U.strictTuples) !== null && fe !== void 0 ? fe : ut) !== null && xe !== void 0 ? xe : "log",
      strictRequired: (Dt = (Xe = U.strictRequired) !== null && Xe !== void 0 ? Xe : ut) !== null && Dt !== void 0 ? Dt : !1,
      code: U.code ? { ...U.code, optimize: cr, regExp: Ae } : { optimize: cr, regExp: Ae },
      loopRequired: (Vt = U.loopRequired) !== null && Vt !== void 0 ? Vt : T,
      loopEnum: (Ie = U.loopEnum) !== null && Ie !== void 0 ? Ie : T,
      meta: (Ut = U.meta) !== null && Ut !== void 0 ? Ut : !0,
      messages: ($t = U.messages) !== null && $t !== void 0 ? $t : !0,
      inlineRefs: (kt = U.inlineRefs) !== null && kt !== void 0 ? kt : !0,
      schemaId: (Pt = U.schemaId) !== null && Pt !== void 0 ? Pt : "$id",
      addUsedSchema: (Bt = U.addUsedSchema) !== null && Bt !== void 0 ? Bt : !0,
      validateSchema: (Ke = U.validateSchema) !== null && Ke !== void 0 ? Ke : !0,
      validateFormats: (Te = U.validateFormats) !== null && Te !== void 0 ? Te : !0,
      unicodeRegExp: (Et = U.unicodeRegExp) !== null && Et !== void 0 ? Et : !0,
      int32range: (Ft = U.int32range) !== null && Ft !== void 0 ? Ft : !0,
      uriResolver: dt
    };
  }
  class r {
    constructor(P = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), P = this.opts = { ...P, ...R(P) };
      const { es5: B, lines: N } = this.opts.code;
      this.scope = new b.ValueScope({ scope: {}, prefixes: C, es5: B, lines: N }), this.logger = V(P.logger);
      const d = P.validateFormats;
      P.validateFormats = !1, this.RULES = (0, l.getRules)(), s.call(this, x, P, "NOT SUPPORTED"), s.call(this, $, P, "DEPRECATED", "warn"), this._metaOpts = p.call(this), P.formats && u.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), P.keywords && m.call(this, P.keywords), typeof P.meta == "object" && this.addMetaSchema(P.meta), c.call(this), P.validateFormats = d;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: P, meta: B, schemaId: N } = this.opts;
      let d = S;
      N === "id" && (d = { ...S }, d.id = d.$id, delete d.$id), B && P && this.addMetaSchema(d, d[N], !1);
    }
    defaultMeta() {
      const { meta: P, schemaId: B } = this.opts;
      return this.opts.defaultMeta = typeof P == "object" ? P[B] || P : void 0;
    }
    validate(P, B) {
      let N;
      if (typeof P == "string") {
        if (N = this.getSchema(P), !N)
          throw new Error(`no schema with key or ref "${P}"`);
      } else
        N = this.compile(P);
      const d = N(B);
      return "$async" in N || (this.errors = N.errors), d;
    }
    compile(P, B) {
      const N = this._addSchema(P, B);
      return N.validate || this._compileSchemaEnv(N);
    }
    compileAsync(P, B) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: N } = this.opts;
      return d.call(this, P, B);
      async function d(ne, fe) {
        await v.call(this, ne.$schema);
        const xe = this._addSchema(ne, fe);
        return xe.validate || I.call(this, xe);
      }
      async function v(ne) {
        ne && !this.getSchema(ne) && await d.call(this, { $ref: ne }, !0);
      }
      async function I(ne) {
        try {
          return this._compileSchemaEnv(ne);
        } catch (fe) {
          if (!(fe instanceof i.default))
            throw fe;
          return G.call(this, fe), await K.call(this, fe.missingSchema), I.call(this, ne);
        }
      }
      function G({ missingSchema: ne, missingRef: fe }) {
        if (this.refs[ne])
          throw new Error(`AnySchema ${ne} is loaded but ${fe} cannot be resolved`);
      }
      async function K(ne) {
        const fe = await re.call(this, ne);
        this.refs[ne] || await v.call(this, fe.$schema), this.refs[ne] || this.addSchema(fe, ne, B);
      }
      async function re(ne) {
        const fe = this._loading[ne];
        if (fe)
          return fe;
        try {
          return await (this._loading[ne] = N(ne));
        } finally {
          delete this._loading[ne];
        }
      }
    }
    // Adds schema to the instance
    addSchema(P, B, N, d = this.opts.validateSchema) {
      if (Array.isArray(P)) {
        for (const I of P)
          this.addSchema(I, void 0, N, d);
        return this;
      }
      let v;
      if (typeof P == "object") {
        const { schemaId: I } = this.opts;
        if (v = P[I], v !== void 0 && typeof v != "string")
          throw new Error(`schema ${I} must be string`);
      }
      return B = (0, k.normalizeId)(B || v), this._checkUnique(B), this.schemas[B] = this._addSchema(P, N, B, d, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(P, B, N = this.opts.validateSchema) {
      return this.addSchema(P, B, !0, N), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(P, B) {
      if (typeof P == "boolean")
        return !0;
      let N;
      if (N = P.$schema, N !== void 0 && typeof N != "string")
        throw new Error("$schema must be a string");
      if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const d = this.validate(N, P);
      if (!d && B) {
        const v = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(v);
        else
          throw new Error(v);
      }
      return d;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(P) {
      let B;
      for (; typeof (B = o.call(this, P)) == "string"; )
        P = B;
      if (B === void 0) {
        const { schemaId: N } = this.opts, d = new f.SchemaEnv({ schema: {}, schemaId: N });
        if (B = f.resolveSchema.call(this, d, P), !B)
          return;
        this.refs[P] = B;
      }
      return B.validate || this._compileSchemaEnv(B);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(P) {
      if (P instanceof RegExp)
        return this._removeAllSchemas(this.schemas, P), this._removeAllSchemas(this.refs, P), this;
      switch (typeof P) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const B = o.call(this, P);
          return typeof B == "object" && this._cache.delete(B.schema), delete this.schemas[P], delete this.refs[P], this;
        }
        case "object": {
          const B = P;
          this._cache.delete(B);
          let N = P[this.opts.schemaId];
          return N && (N = (0, k.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(P) {
      for (const B of P)
        this.addKeyword(B);
      return this;
    }
    addKeyword(P, B) {
      let N;
      if (typeof P == "string")
        N = P, typeof B == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), B.keyword = N);
      else if (typeof P == "object" && B === void 0) {
        if (B = P, N = B.keyword, Array.isArray(N) && !N.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (D.call(this, N, B), !B)
        return (0, y.eachItem)(N, (v) => q.call(this, v)), this;
      H.call(this, B);
      const d = {
        ...B,
        type: (0, _.getJSONTypes)(B.type),
        schemaType: (0, _.getJSONTypes)(B.schemaType)
      };
      return (0, y.eachItem)(N, d.type.length === 0 ? (v) => q.call(this, v, d) : (v) => d.type.forEach((I) => q.call(this, v, d, I))), this;
    }
    getKeyword(P) {
      const B = this.RULES.all[P];
      return typeof B == "object" ? B.definition : !!B;
    }
    // Remove keyword
    removeKeyword(P) {
      const { RULES: B } = this;
      delete B.keywords[P], delete B.all[P];
      for (const N of B.rules) {
        const d = N.rules.findIndex((v) => v.keyword === P);
        d >= 0 && N.rules.splice(d, 1);
      }
      return this;
    }
    // Add format
    addFormat(P, B) {
      return typeof B == "string" && (B = new RegExp(B)), this.formats[P] = B, this;
    }
    errorsText(P = this.errors, { separator: B = ", ", dataVar: N = "data" } = {}) {
      return !P || P.length === 0 ? "No errors" : P.map((d) => `${N}${d.instancePath} ${d.message}`).reduce((d, v) => d + B + v);
    }
    $dataMetaSchema(P, B) {
      const N = this.RULES.all;
      P = JSON.parse(JSON.stringify(P));
      for (const d of B) {
        const v = d.split("/").slice(1);
        let I = P;
        for (const G of v)
          I = I[G];
        for (const G in N) {
          const K = N[G];
          if (typeof K != "object")
            continue;
          const { $data: re } = K.definition, ne = I[G];
          re && ne && (I[G] = J(ne));
        }
      }
      return P;
    }
    _removeAllSchemas(P, B) {
      for (const N in P) {
        const d = P[N];
        (!B || B.test(N)) && (typeof d == "string" ? delete P[N] : d && !d.meta && (this._cache.delete(d.schema), delete P[N]));
      }
    }
    _addSchema(P, B, N, d = this.opts.validateSchema, v = this.opts.addUsedSchema) {
      let I;
      const { schemaId: G } = this.opts;
      if (typeof P == "object")
        I = P[G];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof P != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let K = this._cache.get(P);
      if (K !== void 0)
        return K;
      N = (0, k.normalizeId)(I || N);
      const re = k.getSchemaRefs.call(this, P, N);
      return K = new f.SchemaEnv({ schema: P, schemaId: G, meta: B, baseId: N, localRefs: re }), this._cache.set(K.schema, K), v && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = K), d && this.validateSchema(P, !0), K;
    }
    _checkUnique(P) {
      if (this.schemas[P] || this.refs[P])
        throw new Error(`schema with key or id "${P}" already exists`);
    }
    _compileSchemaEnv(P) {
      if (P.meta ? this._compileMetaSchema(P) : f.compileSchema.call(this, P), !P.validate)
        throw new Error("ajv implementation error");
      return P.validate;
    }
    _compileMetaSchema(P) {
      const B = this.opts;
      this.opts = this._metaOpts;
      try {
        f.compileSchema.call(this, P);
      } finally {
        this.opts = B;
      }
    }
  }
  e.default = r, r.ValidationError = a.default, r.MissingRefError = i.default;
  function s(U, P, B, N = "error") {
    for (const d in U) {
      const v = d;
      v in P && this.logger[N](`${B}: option ${d}. ${U[v]}`);
    }
  }
  function o(U) {
    return U = (0, k.normalizeId)(U), this.schemas[U] || this.refs[U];
  }
  function c() {
    const U = this.opts.schemas;
    if (U)
      if (Array.isArray(U))
        this.addSchema(U);
      else
        for (const P in U)
          this.addSchema(U[P], P);
  }
  function u() {
    for (const U in this.opts.formats) {
      const P = this.opts.formats[U];
      P && this.addFormat(U, P);
    }
  }
  function m(U) {
    if (Array.isArray(U)) {
      this.addVocabulary(U);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const P in U) {
      const B = U[P];
      B.keyword || (B.keyword = P), this.addKeyword(B);
    }
  }
  function p() {
    const U = { ...this.opts };
    for (const P of O)
      delete U[P];
    return U;
  }
  const j = { log() {
  }, warn() {
  }, error() {
  } };
  function V(U) {
    if (U === !1)
      return j;
    if (U === void 0)
      return console;
    if (U.log && U.warn && U.error)
      return U;
    throw new Error("logger must implement log, warn and error methods");
  }
  const F = /^[a-z_$][a-z0-9_$:-]*$/i;
  function D(U, P) {
    const { RULES: B } = this;
    if ((0, y.eachItem)(U, (N) => {
      if (B.keywords[N])
        throw new Error(`Keyword ${N} is already defined`);
      if (!F.test(N))
        throw new Error(`Keyword ${N} has invalid name`);
    }), !!P && P.$data && !("code" in P || "validate" in P))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function q(U, P, B) {
    var N;
    const d = P == null ? void 0 : P.post;
    if (B && d)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: v } = this;
    let I = d ? v.post : v.rules.find(({ type: K }) => K === B);
    if (I || (I = { type: B, rules: [] }, v.rules.push(I)), v.keywords[U] = !0, !P)
      return;
    const G = {
      keyword: U,
      definition: {
        ...P,
        type: (0, _.getJSONTypes)(P.type),
        schemaType: (0, _.getJSONTypes)(P.schemaType)
      }
    };
    P.before ? g.call(this, I, G, P.before) : I.rules.push(G), v.all[U] = G, (N = P.implements) === null || N === void 0 || N.forEach((K) => this.addKeyword(K));
  }
  function g(U, P, B) {
    const N = U.rules.findIndex((d) => d.keyword === B);
    N >= 0 ? U.rules.splice(N, 0, P) : (U.rules.push(P), this.logger.warn(`rule ${B} is not defined`));
  }
  function H(U) {
    let { metaSchema: P } = U;
    P !== void 0 && (U.$data && this.opts.$data && (P = J(P)), U.validateSchema = this.compile(P, !0));
  }
  const W = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function J(U) {
    return { anyOf: [U, W] };
  }
})(Tn);
var ra = {}, aa = {}, na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
const bi = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
na.default = bi;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.callRef = vt.getValidate = void 0;
const wi = sr, tn = oe, Ne = se, Tt = Qe, rn = Oe, pr = ce, vi = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: a } = e, { baseId: i, schemaEnv: l, validateName: f, opts: b, self: k } = a, { root: _ } = l;
    if ((n === "#" || n === "#/") && i === _.baseId)
      return S();
    const y = rn.resolveRef.call(k, _, i, n);
    if (y === void 0)
      throw new wi.default(a.opts.uriResolver, i, n);
    if (y instanceof rn.SchemaEnv)
      return A(y);
    return M(y);
    function S() {
      if (l === _)
        return wr(e, f, l, l.$async);
      const O = t.scopeValue("root", { ref: _ });
      return wr(e, (0, Ne._)`${O}.validate`, _, _.$async);
    }
    function A(O) {
      const C = to(e, O);
      wr(e, C, O, O.$async);
    }
    function M(O) {
      const C = t.scopeValue("schema", b.code.source === !0 ? { ref: O, code: (0, Ne.stringify)(O) } : { ref: O }), x = t.name("valid"), $ = e.subschema({
        schema: O,
        dataTypes: [],
        schemaPath: Ne.nil,
        topSchemaRef: C,
        errSchemaPath: n
      }, x);
      e.mergeEvaluated($), e.ok(x);
    }
  }
};
function to(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, Ne._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
vt.getValidate = to;
function wr(e, t, n, a) {
  const { gen: i, it: l } = e, { allErrors: f, schemaEnv: b, opts: k } = l, _ = k.passContext ? Tt.default.this : Ne.nil;
  a ? y() : S();
  function y() {
    if (!b.$async)
      throw new Error("async schema referenced by sync schema");
    const O = i.let("valid");
    i.try(() => {
      i.code((0, Ne._)`await ${(0, tn.callValidateCode)(e, t, _)}`), M(t), f || i.assign(O, !0);
    }, (C) => {
      i.if((0, Ne._)`!(${C} instanceof ${l.ValidationError})`, () => i.throw(C)), A(C), f || i.assign(O, !1);
    }), e.ok(O);
  }
  function S() {
    e.result((0, tn.callValidateCode)(e, t, _), () => M(t), () => A(t));
  }
  function A(O) {
    const C = (0, Ne._)`${O}.errors`;
    i.assign(Tt.default.vErrors, (0, Ne._)`${Tt.default.vErrors} === null ? ${C} : ${Tt.default.vErrors}.concat(${C})`), i.assign(Tt.default.errors, (0, Ne._)`${Tt.default.vErrors}.length`);
  }
  function M(O) {
    var C;
    if (!l.opts.unevaluated)
      return;
    const x = (C = n == null ? void 0 : n.validate) === null || C === void 0 ? void 0 : C.evaluated;
    if (l.props !== !0)
      if (x && !x.dynamicProps)
        x.props !== void 0 && (l.props = pr.mergeEvaluated.props(i, x.props, l.props));
      else {
        const $ = i.var("props", (0, Ne._)`${O}.evaluated.props`);
        l.props = pr.mergeEvaluated.props(i, $, l.props, Ne.Name);
      }
    if (l.items !== !0)
      if (x && !x.dynamicItems)
        x.items !== void 0 && (l.items = pr.mergeEvaluated.items(i, x.items, l.items));
      else {
        const $ = i.var("items", (0, Ne._)`${O}.evaluated.items`);
        l.items = pr.mergeEvaluated.items(i, $, l.items, Ne.Name);
      }
  }
}
vt.callRef = wr;
vt.default = vi;
Object.defineProperty(aa, "__esModule", { value: !0 });
const $i = na, ki = vt, Pi = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  $i.default,
  ki.default
];
aa.default = Pi;
var oa = {}, sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
const Pr = se, ot = Pr.operators, Er = {
  maximum: { okStr: "<=", ok: ot.LTE, fail: ot.GT },
  minimum: { okStr: ">=", ok: ot.GTE, fail: ot.LT },
  exclusiveMaximum: { okStr: "<", ok: ot.LT, fail: ot.GTE },
  exclusiveMinimum: { okStr: ">", ok: ot.GT, fail: ot.LTE }
}, Ei = {
  message: ({ keyword: e, schemaCode: t }) => (0, Pr.str)`must be ${Er[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Pr._)`{comparison: ${Er[e].okStr}, limit: ${t}}`
}, Si = {
  keyword: Object.keys(Er),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: Ei,
  code(e) {
    const { keyword: t, data: n, schemaCode: a } = e;
    e.fail$data((0, Pr._)`${n} ${Er[t].fail} ${a} || isNaN(${n})`);
  }
};
sa.default = Si;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
const Zt = se, ji = {
  message: ({ schemaCode: e }) => (0, Zt.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Zt._)`{multipleOf: ${e}}`
}, xi = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: ji,
  code(e) {
    const { gen: t, data: n, schemaCode: a, it: i } = e, l = i.opts.multipleOfPrecision, f = t.let("res"), b = l ? (0, Zt._)`Math.abs(Math.round(${f}) - ${f}) > 1e-${l}` : (0, Zt._)`${f} !== parseInt(${f})`;
    e.fail$data((0, Zt._)`(${a} === 0 || (${f} = ${n}/${a}, ${b}))`);
  }
};
ia.default = xi;
var ca = {}, la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
function ro(e) {
  const t = e.length;
  let n = 0, a = 0, i;
  for (; a < t; )
    n++, i = e.charCodeAt(a++), i >= 55296 && i <= 56319 && a < t && (i = e.charCodeAt(a), (i & 64512) === 56320 && a++);
  return n;
}
la.default = ro;
ro.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(ca, "__esModule", { value: !0 });
const _t = se, Ti = ce, Ci = la, Ni = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, _t.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, _t._)`{limit: ${e}}`
}, Oi = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: Ni,
  code(e) {
    const { keyword: t, data: n, schemaCode: a, it: i } = e, l = t === "maxLength" ? _t.operators.GT : _t.operators.LT, f = i.opts.unicode === !1 ? (0, _t._)`${n}.length` : (0, _t._)`${(0, Ti.useFunc)(e.gen, Ci.default)}(${n})`;
    e.fail$data((0, _t._)`${f} ${l} ${a}`);
  }
};
ca.default = Oi;
var ua = {};
Object.defineProperty(ua, "__esModule", { value: !0 });
const Ii = oe, Sr = se, Ai = {
  message: ({ schemaCode: e }) => (0, Sr.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, Sr._)`{pattern: ${e}}`
}, Ri = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: Ai,
  code(e) {
    const { data: t, $data: n, schema: a, schemaCode: i, it: l } = e, f = l.opts.unicodeRegExp ? "u" : "", b = n ? (0, Sr._)`(new RegExp(${i}, ${f}))` : (0, Ii.usePattern)(e, a);
    e.fail$data((0, Sr._)`!${b}.test(${t})`);
  }
};
ua.default = Ri;
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
const Qt = se, Li = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Qt.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Qt._)`{limit: ${e}}`
}, Mi = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: Li,
  code(e) {
    const { keyword: t, data: n, schemaCode: a } = e, i = t === "maxProperties" ? Qt.operators.GT : Qt.operators.LT;
    e.fail$data((0, Qt._)`Object.keys(${n}).length ${i} ${a}`);
  }
};
da.default = Mi;
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
const Wt = oe, Xt = se, zi = ce, Di = {
  message: ({ params: { missingProperty: e } }) => (0, Xt.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Xt._)`{missingProperty: ${e}}`
}, Vi = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: Di,
  code(e) {
    const { gen: t, schema: n, schemaCode: a, data: i, $data: l, it: f } = e, { opts: b } = f;
    if (!l && n.length === 0)
      return;
    const k = n.length >= b.loopRequired;
    if (f.allErrors ? _() : y(), b.strictRequired) {
      const M = e.parentSchema.properties, { definedProperties: O } = e.it;
      for (const C of n)
        if ((M == null ? void 0 : M[C]) === void 0 && !O.has(C)) {
          const x = f.schemaEnv.baseId + f.errSchemaPath, $ = `required property "${C}" is not defined at "${x}" (strictRequired)`;
          (0, zi.checkStrictMode)(f, $, f.opts.strictRequired);
        }
    }
    function _() {
      if (k || l)
        e.block$data(Xt.nil, S);
      else
        for (const M of n)
          (0, Wt.checkReportMissingProp)(e, M);
    }
    function y() {
      const M = t.let("missing");
      if (k || l) {
        const O = t.let("valid", !0);
        e.block$data(O, () => A(M, O)), e.ok(O);
      } else
        t.if((0, Wt.checkMissingProp)(e, n, M)), (0, Wt.reportMissingProp)(e, M), t.else();
    }
    function S() {
      t.forOf("prop", a, (M) => {
        e.setParams({ missingProperty: M }), t.if((0, Wt.noPropertyInData)(t, i, M, b.ownProperties), () => e.error());
      });
    }
    function A(M, O) {
      e.setParams({ missingProperty: M }), t.forOf(M, a, () => {
        t.assign(O, (0, Wt.propertyInData)(t, i, M, b.ownProperties)), t.if((0, Xt.not)(O), () => {
          e.error(), t.break();
        });
      }, Xt.nil);
    }
  }
};
ha.default = Vi;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
const er = se, Ui = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, er.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, er._)`{limit: ${e}}`
}, Bi = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: Ui,
  code(e) {
    const { keyword: t, data: n, schemaCode: a } = e, i = t === "maxItems" ? er.operators.GT : er.operators.LT;
    e.fail$data((0, er._)`${n}.length ${i} ${a}`);
  }
};
pa.default = Bi;
var fa = {}, ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
const ao = Mn;
ao.code = 'require("ajv/dist/runtime/equal").default';
ir.default = ao;
Object.defineProperty(fa, "__esModule", { value: !0 });
const zr = nr, ke = se, Fi = ce, Hi = ir, qi = {
  message: ({ params: { i: e, j: t } }) => (0, ke.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, ke._)`{i: ${e}, j: ${t}}`
}, Gi = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: qi,
  code(e) {
    const { gen: t, data: n, $data: a, schema: i, parentSchema: l, schemaCode: f, it: b } = e;
    if (!a && !i)
      return;
    const k = t.let("valid"), _ = l.items ? (0, zr.getSchemaTypes)(l.items) : [];
    e.block$data(k, y, (0, ke._)`${f} === false`), e.ok(k);
    function y() {
      const O = t.let("i", (0, ke._)`${n}.length`), C = t.let("j");
      e.setParams({ i: O, j: C }), t.assign(k, !0), t.if((0, ke._)`${O} > 1`, () => (S() ? A : M)(O, C));
    }
    function S() {
      return _.length > 0 && !_.some((O) => O === "object" || O === "array");
    }
    function A(O, C) {
      const x = t.name("item"), $ = (0, zr.checkDataTypes)(_, x, b.opts.strictNumbers, zr.DataType.Wrong), T = t.const("indices", (0, ke._)`{}`);
      t.for((0, ke._)`;${O}--;`, () => {
        t.let(x, (0, ke._)`${n}[${O}]`), t.if($, (0, ke._)`continue`), _.length > 1 && t.if((0, ke._)`typeof ${x} == "string"`, (0, ke._)`${x} += "_"`), t.if((0, ke._)`typeof ${T}[${x}] == "number"`, () => {
          t.assign(C, (0, ke._)`${T}[${x}]`), e.error(), t.assign(k, !1).break();
        }).code((0, ke._)`${T}[${x}] = ${O}`);
      });
    }
    function M(O, C) {
      const x = (0, Fi.useFunc)(t, Hi.default), $ = t.name("outer");
      t.label($).for((0, ke._)`;${O}--;`, () => t.for((0, ke._)`${C} = ${O}; ${C}--;`, () => t.if((0, ke._)`${x}(${n}[${O}], ${n}[${C}])`, () => {
        e.error(), t.assign(k, !1).break($);
      })));
    }
  }
};
fa.default = Gi;
var ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
const qr = se, Ki = ce, Wi = ir, Yi = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, qr._)`{allowedValue: ${e}}`
}, Ji = {
  keyword: "const",
  $data: !0,
  error: Yi,
  code(e) {
    const { gen: t, data: n, $data: a, schemaCode: i, schema: l } = e;
    a || l && typeof l == "object" ? e.fail$data((0, qr._)`!${(0, Ki.useFunc)(t, Wi.default)}(${n}, ${i})`) : e.fail((0, qr._)`${l} !== ${n}`);
  }
};
ma.default = Ji;
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
const Yt = se, Zi = ce, Qi = ir, Xi = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Yt._)`{allowedValues: ${e}}`
}, ec = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: Xi,
  code(e) {
    const { gen: t, data: n, $data: a, schema: i, schemaCode: l, it: f } = e;
    if (!a && i.length === 0)
      throw new Error("enum must have non-empty array");
    const b = i.length >= f.opts.loopEnum;
    let k;
    const _ = () => k ?? (k = (0, Zi.useFunc)(t, Qi.default));
    let y;
    if (b || a)
      y = t.let("valid"), e.block$data(y, S);
    else {
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const M = t.const("vSchema", l);
      y = (0, Yt.or)(...i.map((O, C) => A(M, C)));
    }
    e.pass(y);
    function S() {
      t.assign(y, !1), t.forOf("v", l, (M) => t.if((0, Yt._)`${_()}(${n}, ${M})`, () => t.assign(y, !0).break()));
    }
    function A(M, O) {
      const C = i[O];
      return typeof C == "object" && C !== null ? (0, Yt._)`${_()}(${n}, ${M}[${O}])` : (0, Yt._)`${n} === ${C}`;
    }
  }
};
ga.default = ec;
Object.defineProperty(oa, "__esModule", { value: !0 });
const tc = sa, rc = ia, ac = ca, nc = ua, oc = da, sc = ha, ic = pa, cc = fa, lc = ma, uc = ga, dc = [
  // number
  tc.default,
  rc.default,
  // string
  ac.default,
  nc.default,
  // object
  oc.default,
  sc.default,
  // array
  ic.default,
  cc.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  lc.default,
  uc.default
];
oa.default = dc;
var ya = {}, Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.validateAdditionalItems = void 0;
const bt = se, Gr = ce, hc = {
  message: ({ params: { len: e } }) => (0, bt.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, bt._)`{limit: ${e}}`
}, pc = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: hc,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: a } = t;
    if (!Array.isArray(a)) {
      (0, Gr.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    no(e, a);
  }
};
function no(e, t) {
  const { gen: n, schema: a, data: i, keyword: l, it: f } = e;
  f.items = !0;
  const b = n.const("len", (0, bt._)`${i}.length`);
  if (a === !1)
    e.setParams({ len: t.length }), e.pass((0, bt._)`${b} <= ${t.length}`);
  else if (typeof a == "object" && !(0, Gr.alwaysValidSchema)(f, a)) {
    const _ = n.var("valid", (0, bt._)`${b} <= ${t.length}`);
    n.if((0, bt.not)(_), () => k(_)), e.ok(_);
  }
  function k(_) {
    n.forRange("i", t.length, b, (y) => {
      e.subschema({ keyword: l, dataProp: y, dataPropType: Gr.Type.Num }, _), f.allErrors || n.if((0, bt.not)(_), () => n.break());
    });
  }
}
Mt.validateAdditionalItems = no;
Mt.default = pc;
var _a = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.validateTuple = void 0;
const an = se, vr = ce, fc = oe, mc = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return oo(e, "additionalItems", t);
    n.items = !0, !(0, vr.alwaysValidSchema)(n, t) && e.ok((0, fc.validateArray)(e));
  }
};
function oo(e, t, n = e.schema) {
  const { gen: a, parentSchema: i, data: l, keyword: f, it: b } = e;
  y(i), b.opts.unevaluated && n.length && b.items !== !0 && (b.items = vr.mergeEvaluated.items(a, n.length, b.items));
  const k = a.name("valid"), _ = a.const("len", (0, an._)`${l}.length`);
  n.forEach((S, A) => {
    (0, vr.alwaysValidSchema)(b, S) || (a.if((0, an._)`${_} > ${A}`, () => e.subschema({
      keyword: f,
      schemaProp: A,
      dataProp: A
    }, k)), e.ok(k));
  });
  function y(S) {
    const { opts: A, errSchemaPath: M } = b, O = n.length, C = O === S.minItems && (O === S.maxItems || S[t] === !1);
    if (A.strictTuples && !C) {
      const x = `"${f}" is ${O}-tuple, but minItems or maxItems/${t} are not specified or different at path "${M}"`;
      (0, vr.checkStrictMode)(b, x, A.strictTuples);
    }
  }
}
zt.validateTuple = oo;
zt.default = mc;
Object.defineProperty(_a, "__esModule", { value: !0 });
const gc = zt, yc = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, gc.validateTuple)(e, "items")
};
_a.default = yc;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
const nn = se, _c = ce, bc = oe, wc = Mt, vc = {
  message: ({ params: { len: e } }) => (0, nn.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, nn._)`{limit: ${e}}`
}, $c = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: vc,
  code(e) {
    const { schema: t, parentSchema: n, it: a } = e, { prefixItems: i } = n;
    a.items = !0, !(0, _c.alwaysValidSchema)(a, t) && (i ? (0, wc.validateAdditionalItems)(e, i) : e.ok((0, bc.validateArray)(e)));
  }
};
ba.default = $c;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
const De = se, fr = ce, kc = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, De.str)`must contain at least ${e} valid item(s)` : (0, De.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, De._)`{minContains: ${e}}` : (0, De._)`{minContains: ${e}, maxContains: ${t}}`
}, Pc = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: kc,
  code(e) {
    const { gen: t, schema: n, parentSchema: a, data: i, it: l } = e;
    let f, b;
    const { minContains: k, maxContains: _ } = a;
    l.opts.next ? (f = k === void 0 ? 1 : k, b = _) : f = 1;
    const y = t.const("len", (0, De._)`${i}.length`);
    if (e.setParams({ min: f, max: b }), b === void 0 && f === 0) {
      (0, fr.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (b !== void 0 && f > b) {
      (0, fr.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, fr.alwaysValidSchema)(l, n)) {
      let C = (0, De._)`${y} >= ${f}`;
      b !== void 0 && (C = (0, De._)`${C} && ${y} <= ${b}`), e.pass(C);
      return;
    }
    l.items = !0;
    const S = t.name("valid");
    b === void 0 && f === 1 ? M(S, () => t.if(S, () => t.break())) : f === 0 ? (t.let(S, !0), b !== void 0 && t.if((0, De._)`${i}.length > 0`, A)) : (t.let(S, !1), A()), e.result(S, () => e.reset());
    function A() {
      const C = t.name("_valid"), x = t.let("count", 0);
      M(C, () => t.if(C, () => O(x)));
    }
    function M(C, x) {
      t.forRange("i", 0, y, ($) => {
        e.subschema({
          keyword: "contains",
          dataProp: $,
          dataPropType: fr.Type.Num,
          compositeRule: !0
        }, C), x();
      });
    }
    function O(C) {
      t.code((0, De._)`${C}++`), b === void 0 ? t.if((0, De._)`${C} >= ${f}`, () => t.assign(S, !0).break()) : (t.if((0, De._)`${C} > ${b}`, () => t.assign(S, !1).break()), f === 1 ? t.assign(S, !0) : t.if((0, De._)`${C} >= ${f}`, () => t.assign(S, !0)));
    }
  }
};
wa.default = Pc;
var so = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = se, n = ce, a = oe;
  e.error = {
    message: ({ params: { property: k, depsCount: _, deps: y } }) => {
      const S = _ === 1 ? "property" : "properties";
      return (0, t.str)`must have ${S} ${y} when property ${k} is present`;
    },
    params: ({ params: { property: k, depsCount: _, deps: y, missingProperty: S } }) => (0, t._)`{property: ${k},
    missingProperty: ${S},
    depsCount: ${_},
    deps: ${y}}`
    // TODO change to reference
  };
  const i = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(k) {
      const [_, y] = l(k);
      f(k, _), b(k, y);
    }
  };
  function l({ schema: k }) {
    const _ = {}, y = {};
    for (const S in k) {
      if (S === "__proto__")
        continue;
      const A = Array.isArray(k[S]) ? _ : y;
      A[S] = k[S];
    }
    return [_, y];
  }
  function f(k, _ = k.schema) {
    const { gen: y, data: S, it: A } = k;
    if (Object.keys(_).length === 0)
      return;
    const M = y.let("missing");
    for (const O in _) {
      const C = _[O];
      if (C.length === 0)
        continue;
      const x = (0, a.propertyInData)(y, S, O, A.opts.ownProperties);
      k.setParams({
        property: O,
        depsCount: C.length,
        deps: C.join(", ")
      }), A.allErrors ? y.if(x, () => {
        for (const $ of C)
          (0, a.checkReportMissingProp)(k, $);
      }) : (y.if((0, t._)`${x} && (${(0, a.checkMissingProp)(k, C, M)})`), (0, a.reportMissingProp)(k, M), y.else());
    }
  }
  e.validatePropertyDeps = f;
  function b(k, _ = k.schema) {
    const { gen: y, data: S, keyword: A, it: M } = k, O = y.name("valid");
    for (const C in _)
      (0, n.alwaysValidSchema)(M, _[C]) || (y.if(
        (0, a.propertyInData)(y, S, C, M.opts.ownProperties),
        () => {
          const x = k.subschema({ keyword: A, schemaProp: C }, O);
          k.mergeValidEvaluated(x, O);
        },
        () => y.var(O, !0)
        // TODO var
      ), k.ok(O));
  }
  e.validateSchemaDeps = b, e.default = i;
})(so);
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
const io = se, Ec = ce, Sc = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, io._)`{propertyName: ${e.propertyName}}`
}, jc = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: Sc,
  code(e) {
    const { gen: t, schema: n, data: a, it: i } = e;
    if ((0, Ec.alwaysValidSchema)(i, n))
      return;
    const l = t.name("valid");
    t.forIn("key", a, (f) => {
      e.setParams({ propertyName: f }), e.subschema({
        keyword: "propertyNames",
        data: f,
        dataTypes: ["string"],
        propertyName: f,
        compositeRule: !0
      }, l), t.if((0, io.not)(l), () => {
        e.error(!0), i.allErrors || t.break();
      });
    }), e.ok(l);
  }
};
va.default = jc;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
const mr = oe, Fe = se, xc = Qe, gr = ce, Tc = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Fe._)`{additionalProperty: ${e.additionalProperty}}`
}, Cc = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: Tc,
  code(e) {
    const { gen: t, schema: n, parentSchema: a, data: i, errsCount: l, it: f } = e;
    if (!l)
      throw new Error("ajv implementation error");
    const { allErrors: b, opts: k } = f;
    if (f.props = !0, k.removeAdditional !== "all" && (0, gr.alwaysValidSchema)(f, n))
      return;
    const _ = (0, mr.allSchemaProperties)(a.properties), y = (0, mr.allSchemaProperties)(a.patternProperties);
    S(), e.ok((0, Fe._)`${l} === ${xc.default.errors}`);
    function S() {
      t.forIn("key", i, (x) => {
        !_.length && !y.length ? O(x) : t.if(A(x), () => O(x));
      });
    }
    function A(x) {
      let $;
      if (_.length > 8) {
        const T = (0, gr.schemaRefOrVal)(f, a.properties, "properties");
        $ = (0, mr.isOwnProperty)(t, T, x);
      } else
        _.length ? $ = (0, Fe.or)(..._.map((T) => (0, Fe._)`${x} === ${T}`)) : $ = Fe.nil;
      return y.length && ($ = (0, Fe.or)($, ...y.map((T) => (0, Fe._)`${(0, mr.usePattern)(e, T)}.test(${x})`))), (0, Fe.not)($);
    }
    function M(x) {
      t.code((0, Fe._)`delete ${i}[${x}]`);
    }
    function O(x) {
      if (k.removeAdditional === "all" || k.removeAdditional && n === !1) {
        M(x);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: x }), e.error(), b || t.break();
        return;
      }
      if (typeof n == "object" && !(0, gr.alwaysValidSchema)(f, n)) {
        const $ = t.name("valid");
        k.removeAdditional === "failing" ? (C(x, $, !1), t.if((0, Fe.not)($), () => {
          e.reset(), M(x);
        })) : (C(x, $), b || t.if((0, Fe.not)($), () => t.break()));
      }
    }
    function C(x, $, T) {
      const R = {
        keyword: "additionalProperties",
        dataProp: x,
        dataPropType: gr.Type.Str
      };
      T === !1 && Object.assign(R, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(R, $);
    }
  }
};
Ir.default = Cc;
var $a = {};
Object.defineProperty($a, "__esModule", { value: !0 });
const Nc = Ge, on = oe, Dr = ce, sn = Ir, Oc = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: a, data: i, it: l } = e;
    l.opts.removeAdditional === "all" && a.additionalProperties === void 0 && sn.default.code(new Nc.KeywordCxt(l, sn.default, "additionalProperties"));
    const f = (0, on.allSchemaProperties)(n);
    for (const S of f)
      l.definedProperties.add(S);
    l.opts.unevaluated && f.length && l.props !== !0 && (l.props = Dr.mergeEvaluated.props(t, (0, Dr.toHash)(f), l.props));
    const b = f.filter((S) => !(0, Dr.alwaysValidSchema)(l, n[S]));
    if (b.length === 0)
      return;
    const k = t.name("valid");
    for (const S of b)
      _(S) ? y(S) : (t.if((0, on.propertyInData)(t, i, S, l.opts.ownProperties)), y(S), l.allErrors || t.else().var(k, !0), t.endIf()), e.it.definedProperties.add(S), e.ok(k);
    function _(S) {
      return l.opts.useDefaults && !l.compositeRule && n[S].default !== void 0;
    }
    function y(S) {
      e.subschema({
        keyword: "properties",
        schemaProp: S,
        dataProp: S
      }, k);
    }
  }
};
$a.default = Oc;
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
const cn = oe, yr = se, ln = ce, un = ce, Ic = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: a, parentSchema: i, it: l } = e, { opts: f } = l, b = (0, cn.allSchemaProperties)(n), k = b.filter((C) => (0, ln.alwaysValidSchema)(l, n[C]));
    if (b.length === 0 || k.length === b.length && (!l.opts.unevaluated || l.props === !0))
      return;
    const _ = f.strictSchema && !f.allowMatchingProperties && i.properties, y = t.name("valid");
    l.props !== !0 && !(l.props instanceof yr.Name) && (l.props = (0, un.evaluatedPropsToName)(t, l.props));
    const { props: S } = l;
    A();
    function A() {
      for (const C of b)
        _ && M(C), l.allErrors ? O(C) : (t.var(y, !0), O(C), t.if(y));
    }
    function M(C) {
      for (const x in _)
        new RegExp(C).test(x) && (0, ln.checkStrictMode)(l, `property ${x} matches pattern ${C} (use allowMatchingProperties)`);
    }
    function O(C) {
      t.forIn("key", a, (x) => {
        t.if((0, yr._)`${(0, cn.usePattern)(e, C)}.test(${x})`, () => {
          const $ = k.includes(C);
          $ || e.subschema({
            keyword: "patternProperties",
            schemaProp: C,
            dataProp: x,
            dataPropType: un.Type.Str
          }, y), l.opts.unevaluated && S !== !0 ? t.assign((0, yr._)`${S}[${x}]`, !0) : !$ && !l.allErrors && t.if((0, yr.not)(y), () => t.break());
        });
      });
    }
  }
};
ka.default = Ic;
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
const Ac = ce, Rc = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: a } = e;
    if ((0, Ac.alwaysValidSchema)(a, n)) {
      e.fail();
      return;
    }
    const i = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, i), e.failResult(i, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
Pa.default = Rc;
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
const Lc = oe, Mc = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: Lc.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Ea.default = Mc;
var Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
const $r = se, zc = ce, Dc = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, $r._)`{passingSchemas: ${e.passing}}`
}, Vc = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: Dc,
  code(e) {
    const { gen: t, schema: n, parentSchema: a, it: i } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    if (i.opts.discriminator && a.discriminator)
      return;
    const l = n, f = t.let("valid", !1), b = t.let("passing", null), k = t.name("_valid");
    e.setParams({ passing: b }), t.block(_), e.result(f, () => e.reset(), () => e.error(!0));
    function _() {
      l.forEach((y, S) => {
        let A;
        (0, zc.alwaysValidSchema)(i, y) ? t.var(k, !0) : A = e.subschema({
          keyword: "oneOf",
          schemaProp: S,
          compositeRule: !0
        }, k), S > 0 && t.if((0, $r._)`${k} && ${f}`).assign(f, !1).assign(b, (0, $r._)`[${b}, ${S}]`).else(), t.if(k, () => {
          t.assign(f, !0), t.assign(b, S), A && e.mergeEvaluated(A, $r.Name);
        });
      });
    }
  }
};
Sa.default = Vc;
var ja = {};
Object.defineProperty(ja, "__esModule", { value: !0 });
const Uc = ce, Bc = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: a } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const i = t.name("valid");
    n.forEach((l, f) => {
      if ((0, Uc.alwaysValidSchema)(a, l))
        return;
      const b = e.subschema({ keyword: "allOf", schemaProp: f }, i);
      e.ok(i), e.mergeEvaluated(b);
    });
  }
};
ja.default = Bc;
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
const jr = se, co = ce, Fc = {
  message: ({ params: e }) => (0, jr.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, jr._)`{failingKeyword: ${e.ifClause}}`
}, Hc = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: Fc,
  code(e) {
    const { gen: t, parentSchema: n, it: a } = e;
    n.then === void 0 && n.else === void 0 && (0, co.checkStrictMode)(a, '"if" without "then" and "else" is ignored');
    const i = dn(a, "then"), l = dn(a, "else");
    if (!i && !l)
      return;
    const f = t.let("valid", !0), b = t.name("_valid");
    if (k(), e.reset(), i && l) {
      const y = t.let("ifClause");
      e.setParams({ ifClause: y }), t.if(b, _("then", y), _("else", y));
    } else
      i ? t.if(b, _("then")) : t.if((0, jr.not)(b), _("else"));
    e.pass(f, () => e.error(!0));
    function k() {
      const y = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, b);
      e.mergeEvaluated(y);
    }
    function _(y, S) {
      return () => {
        const A = e.subschema({ keyword: y }, b);
        t.assign(f, b), e.mergeValidEvaluated(A, f), S ? t.assign(S, (0, jr._)`${y}`) : e.setParams({ ifClause: y });
      };
    }
  }
};
function dn(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, co.alwaysValidSchema)(e, n);
}
xa.default = Hc;
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
const qc = ce, Gc = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, qc.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
Ta.default = Gc;
Object.defineProperty(ya, "__esModule", { value: !0 });
const Kc = Mt, Wc = _a, Yc = zt, Jc = ba, Zc = wa, Qc = so, Xc = va, el = Ir, tl = $a, rl = ka, al = Pa, nl = Ea, ol = Sa, sl = ja, il = xa, cl = Ta;
function ll(e = !1) {
  const t = [
    // any
    al.default,
    nl.default,
    ol.default,
    sl.default,
    il.default,
    cl.default,
    // object
    Xc.default,
    el.default,
    Qc.default,
    tl.default,
    rl.default
  ];
  return e ? t.push(Wc.default, Jc.default) : t.push(Kc.default, Yc.default), t.push(Zc.default), t;
}
ya.default = ll;
var Ca = {}, Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
const _e = se, ul = {
  message: ({ schemaCode: e }) => (0, _e.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, _e._)`{format: ${e}}`
}, dl = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: ul,
  code(e, t) {
    const { gen: n, data: a, $data: i, schema: l, schemaCode: f, it: b } = e, { opts: k, errSchemaPath: _, schemaEnv: y, self: S } = b;
    if (!k.validateFormats)
      return;
    i ? A() : M();
    function A() {
      const O = n.scopeValue("formats", {
        ref: S.formats,
        code: k.code.formats
      }), C = n.const("fDef", (0, _e._)`${O}[${f}]`), x = n.let("fType"), $ = n.let("format");
      n.if((0, _e._)`typeof ${C} == "object" && !(${C} instanceof RegExp)`, () => n.assign(x, (0, _e._)`${C}.type || "string"`).assign($, (0, _e._)`${C}.validate`), () => n.assign(x, (0, _e._)`"string"`).assign($, C)), e.fail$data((0, _e.or)(T(), R()));
      function T() {
        return k.strictSchema === !1 ? _e.nil : (0, _e._)`${f} && !${$}`;
      }
      function R() {
        const r = y.$async ? (0, _e._)`(${C}.async ? await ${$}(${a}) : ${$}(${a}))` : (0, _e._)`${$}(${a})`, s = (0, _e._)`(typeof ${$} == "function" ? ${r} : ${$}.test(${a}))`;
        return (0, _e._)`${$} && ${$} !== true && ${x} === ${t} && !${s}`;
      }
    }
    function M() {
      const O = S.formats[l];
      if (!O) {
        T();
        return;
      }
      if (O === !0)
        return;
      const [C, x, $] = R(O);
      C === t && e.pass(r());
      function T() {
        if (k.strictSchema === !1) {
          S.logger.warn(s());
          return;
        }
        throw new Error(s());
        function s() {
          return `unknown format "${l}" ignored in schema at path "${_}"`;
        }
      }
      function R(s) {
        const o = s instanceof RegExp ? (0, _e.regexpCode)(s) : k.code.formats ? (0, _e._)`${k.code.formats}${(0, _e.getProperty)(l)}` : void 0, c = n.scopeValue("formats", { key: l, ref: s, code: o });
        return typeof s == "object" && !(s instanceof RegExp) ? [s.type || "string", s.validate, (0, _e._)`${c}.validate`] : ["string", s, c];
      }
      function r() {
        if (typeof O == "object" && !(O instanceof RegExp) && O.async) {
          if (!y.$async)
            throw new Error("async format in sync schema");
          return (0, _e._)`await ${$}(${a})`;
        }
        return typeof x == "function" ? (0, _e._)`${$}(${a})` : (0, _e._)`${$}.test(${a})`;
      }
    }
  }
};
Na.default = dl;
Object.defineProperty(Ca, "__esModule", { value: !0 });
const hl = Na, pl = [hl.default];
Ca.default = pl;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.contentVocabulary = Lt.metadataVocabulary = void 0;
Lt.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
Lt.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(ra, "__esModule", { value: !0 });
const fl = aa, ml = oa, gl = ya, yl = Ca, hn = Lt, _l = [
  fl.default,
  ml.default,
  (0, gl.default)(),
  yl.default,
  hn.metadataVocabulary,
  hn.contentVocabulary
];
ra.default = _l;
var Oa = {}, lo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0, function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e.DiscrError || (e.DiscrError = {}));
})(lo);
Object.defineProperty(Oa, "__esModule", { value: !0 });
const Ct = se, Kr = lo, pn = Oe, bl = ce, wl = {
  message: ({ params: { discrError: e, tagName: t } }) => e === Kr.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Ct._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, vl = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: wl,
  code(e) {
    const { gen: t, data: n, schema: a, parentSchema: i, it: l } = e, { oneOf: f } = i;
    if (!l.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const b = a.propertyName;
    if (typeof b != "string")
      throw new Error("discriminator: requires propertyName");
    if (a.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!f)
      throw new Error("discriminator: requires oneOf keyword");
    const k = t.let("valid", !1), _ = t.const("tag", (0, Ct._)`${n}${(0, Ct.getProperty)(b)}`);
    t.if((0, Ct._)`typeof ${_} == "string"`, () => y(), () => e.error(!1, { discrError: Kr.DiscrError.Tag, tag: _, tagName: b })), e.ok(k);
    function y() {
      const M = A();
      t.if(!1);
      for (const O in M)
        t.elseIf((0, Ct._)`${_} === ${O}`), t.assign(k, S(M[O]));
      t.else(), e.error(!1, { discrError: Kr.DiscrError.Mapping, tag: _, tagName: b }), t.endIf();
    }
    function S(M) {
      const O = t.name("valid"), C = e.subschema({ keyword: "oneOf", schemaProp: M }, O);
      return e.mergeEvaluated(C, Ct.Name), O;
    }
    function A() {
      var M;
      const O = {}, C = $(i);
      let x = !0;
      for (let r = 0; r < f.length; r++) {
        let s = f[r];
        s != null && s.$ref && !(0, bl.schemaHasRulesButRef)(s, l.self.RULES) && (s = pn.resolveRef.call(l.self, l.schemaEnv.root, l.baseId, s == null ? void 0 : s.$ref), s instanceof pn.SchemaEnv && (s = s.schema));
        const o = (M = s == null ? void 0 : s.properties) === null || M === void 0 ? void 0 : M[b];
        if (typeof o != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
        x = x && (C || $(s)), T(o, r);
      }
      if (!x)
        throw new Error(`discriminator: "${b}" must be required`);
      return O;
      function $({ required: r }) {
        return Array.isArray(r) && r.includes(b);
      }
      function T(r, s) {
        if (r.const)
          R(r.const, s);
        else if (r.enum)
          for (const o of r.enum)
            R(o, s);
        else
          throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
      }
      function R(r, s) {
        if (typeof r != "string" || r in O)
          throw new Error(`discriminator: "${b}" values must be unique strings`);
        O[r] = s;
      }
    }
  }
};
Oa.default = vl;
const $l = "http://json-schema.org/draft-07/schema#", kl = "http://json-schema.org/draft-07/schema#", Pl = "Core schema meta-schema", El = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, Sl = [
  "object",
  "boolean"
], jl = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, xl = {
  $schema: $l,
  $id: kl,
  title: Pl,
  definitions: El,
  type: Sl,
  properties: jl,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
  const n = Tn, a = ra, i = Oa, l = xl, f = ["/properties"], b = "http://json-schema.org/draft-07/schema";
  class k extends n.default {
    _addVocabularies() {
      super._addVocabularies(), a.default.forEach((O) => this.addVocabulary(O)), this.opts.discriminator && this.addKeyword(i.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const O = this.opts.$data ? this.$dataMetaSchema(l, f) : l;
      this.addMetaSchema(O, b, !1), this.refs["http://json-schema.org/schema"] = b;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(b) ? b : void 0);
    }
  }
  e.exports = t = k, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = k;
  var _ = Ge;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return _.KeywordCxt;
  } });
  var y = se;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return y._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return y.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return y.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return y.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return y.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return y.CodeGen;
  } });
  var S = or;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return S.default;
  } });
  var A = sr;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return A.default;
  } });
})(Ur, Ur.exports);
var Tl = Ur.exports;
const Cl = /* @__PURE__ */ xn(Tl);
class Nl {
  constructor() {
    $e(this, "ajv"), this.ajv = new Cl();
  }
  validateJson(t, n) {
    const a = this.ajv.validate(t, n);
    return a ? { valid: a } : { valid: a, error: this.ajv.errorsText() };
  }
  validateObjectSchema(t, n) {
    const a = this.ajv.validate(t, n);
    return a ? { valid: a } : { valid: a, error: this.ajv.errorsText() };
  }
}
class Ol {
  constructor() {
    $e(this, "TIME_SPLIT", " ");
  }
  /**
   * 给日期添加小时
   *
   * @param date - Date
   * @param numOfHours - 数字
   * @author terwer
   * @since 1.0.0
   */
  addHoursToDate(t, n) {
    return t.setTime(t.getTime() + n * 60 * 60 * 1e3), t;
  }
  /**
   * 转换ISO日期为中文日期的通用转换方法
   *
   * @param str - '2022-07-18T06:25:48.000Z
   * @param isAddTimeZone - 是否增加时区（默认不增加）
   * @param isShort - 是否只返回日期
   * @author terwer
   * @since 1.0.0
   */
  formatIsoToZhDateFormat(t, n, a) {
    if (!t)
      return "";
    let i = t;
    const l = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{3})Z$/gm, f = i.match(l);
    if (f == null)
      return t;
    for (let b = 0; b < f.length; b++) {
      const k = f[b];
      let _ = k;
      n && (_ = this.addHoursToDate(new Date(k), 8).toISOString());
      const y = _.split("T"), S = y[0], A = y[1].split(".")[0];
      let M = S + this.TIME_SPLIT + A;
      a && (M = S), i = i.replace(k, M);
    }
    return i;
  }
  /**
   * 转换ISO日期为中文完整时间
   *
   * @param str - '2022-07-18T06:25:48.000Z
   */
  formatIsoToZh(t) {
    return this.formatIsoToZhDateFormat(t, !1, !1);
  }
  /**
   * 转换ISO日期为中文日期
   *
   * @param str - '2022-07-18T06:25:48.000Z
   */
  formatIsoToZhDate(t) {
    return this.formatIsoToZhDateFormat(t, !1, !0);
  }
  /**
   * 转换ISO日期为中文时间
   *
   * @param str - '2022-07-18T06:25:48.000Z
   */
  formatIsoToZhTime(t) {
    return this.formatIsoToZhDateFormat(t, !1).split(this.TIME_SPLIT)[1];
  }
  /**
   * 当前日期时间完整格式，格式：2023-03-10 02:03:43
   */
  nowZh() {
    return this.formatIsoToZhDateFormat((/* @__PURE__ */ new Date()).toISOString(), !0);
  }
  /**
   * 当前日期，格式：2023-03-10
   */
  nowDateZh() {
    return this.formatIsoToZhDateFormat((/* @__PURE__ */ new Date()).toISOString(), !0, !0);
  }
  /**
   * 当前时间，格式：02:03:43
   */
  nowTimeZh() {
    return this.formatIsoToZhDateFormat((/* @__PURE__ */ new Date()).toISOString(), !0).split(this.TIME_SPLIT)[1];
  }
}
class Il {
  /**
   * 格式化字符串
   *
   * @param str - 字符串，可用占位符，例如：test \{0\} str
   * @param args - 按占位符顺序排列的参数
   * @author terwer
   * @since 0.0.1
   */
  f(t, ...n) {
    let a = t;
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      typeof l == "string" ? a = a.replace(`{${i}}`, l) : a = a.replace(`{${i}}`, l.toString());
    }
    return a;
  }
  /**
   * 字符串拼接
   *
   * @param str - 字符串数组
   */
  appendStr(...t) {
    return t.join("");
  }
  /**
   * 判断字符串中，是否包含数组中任何一个元素
   *
   * @param str - 字符串
   * @param arr - 字符串数组
   */
  includeInArray(t, n) {
    let a = !1;
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      t.includes(l) && (a = !0);
    }
    return a;
  }
  /**
   * 截取指定长度的字符串
   *
   * @param str - str
   * @param length - 长度
   * @param ignore - 不要结尾省略号
   */
  getByLength(t, n, a) {
    const i = t;
    return i.length < n ? i : a ? i.substring(0, n) : i.substring(0, n) + "...";
  }
  /**
   * 字符串空值检测
   *
   * @param str - 待检测的字符串
   */
  isEmptyString(t) {
    return !t || typeof t != "string" ? !0 : t.trim().length === 0;
  }
  /**
   * 路径组合，解决多出来/的问题
   *
   * @param path1 - 路径1
   * @param path2 - 路径2
   */
  pathJoin(t, n) {
    let a = t;
    const i = t.lastIndexOf("/");
    return i + 1 === t.length && (a = t.substring(0, i)), n.indexOf("/") > 0 ? a = a + "/" + n : a = a + n, a;
  }
  /**
   * 强转boolean
   *
   * @param val - val
   */
  parseBoolean(t) {
    return t || (t = "false"), t.toString().toLowerCase() === "true";
  }
}
const Vr = (e, t) => {
  const n = fn(e), a = fn(t), i = n.pop(), l = a.pop(), f = yn(n, a);
  return f !== 0 ? f : i && l ? yn(i.split("."), l.split(".")) : i || l ? i ? -1 : 1 : 0;
}, Al = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i, fn = (e) => {
  if (typeof e != "string")
    throw new TypeError("Invalid argument expected string");
  const t = e.match(Al);
  if (!t)
    throw new Error(`Invalid argument not valid semver ('${e}' received)`);
  return t.shift(), t;
}, mn = (e) => e === "*" || e === "x" || e === "X", gn = (e) => {
  const t = parseInt(e, 10);
  return isNaN(t) ? e : t;
}, Rl = (e, t) => typeof e != typeof t ? [String(e), String(t)] : [e, t], Ll = (e, t) => {
  if (mn(e) || mn(t))
    return 0;
  const [n, a] = Rl(gn(e), gn(t));
  return n > a ? 1 : n < a ? -1 : 0;
}, yn = (e, t) => {
  for (let n = 0; n < Math.max(e.length, t.length); n++) {
    const a = Ll(e[n] || "0", t[n] || "0");
    if (a !== 0)
      return a;
  }
  return 0;
};
class Ml {
  /**
   * Compare [semver](https://semver.org/) version strings
   * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
   *
   * @param v1 - First version to compare
   * @param v2 - Second version to compare
   * @returns boolean true if v1 is higher than v2
   */
  greater(t, n) {
    return Vr(t, n) > 0;
  }
  /**
   * Compare [semver](https://semver.org/) version strings
   * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
   *
   * @param v1 - First version to compare
   * @param v2 - Second version to compare
   * @returns boolean true if v1 is equal to v2
   */
  equal(t, n) {
    return Vr(t, n) === 0;
  }
  /**
   * Compare [semver](https://semver.org/) version strings
   * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
   *
   * @param v1 - First version to compare
   * @param v2 - Second version to compare
   * @returns boolean true if v1 is lesser than v2
   */
  lesser(t, n) {
    return Vr(t, n) < 0;
  }
}
var zl = Object.defineProperty, Dl = (e, t, n) => t in e ? zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nt = (e, t, n) => (Dl(e, typeof t != "symbol" ? t + "" : t, n), n);
let st = class {
};
Nt(st, "NODE_ENV_KEY", "NODE_ENV"), /**
* 开发环境
*/
Nt(st, "NODE_ENV_DEVELOPMENT", "development"), /**
* 生产环境
*/
Nt(st, "NODE_ENV_PRODUCTION", "production"), /**
* 测试环境
*/
Nt(st, "NODE_ENV_TEST", "test"), /**
* 是否处于调试模式
*/
Nt(st, "VITE_DEBUG_MODE_KEY", "VITE_DEBUG_MODE");
class Vl {
  /**
   * 环境初始化
   *
   * @param envMeta - 需要传入 {"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":false} 。特别提醒：此参数是静态元数据，取决于最终使用的项目。因此仅仅在最终使用的地方显示传递此值，中间项目请保持参数传递
   * @see {@link https://vitejs.dev/guide/env-and-mode.html#production-replacement}
   */
  constructor(t) {
    Nt(this, "envMeta"), this.envMeta = t;
  }
  /**
   * 是否是开发阶段调试
   */
  isNodeDev() {
    return this.getEnv(st.NODE_ENV_KEY) === st.NODE_ENV_DEVELOPMENT;
  }
  /**
   * 是否是调试阶段
   */
  isDev() {
    return this.isNodeDev() || this.getBooleanEnv(st.VITE_DEBUG_MODE_KEY);
  }
  /**
   * 获取环境变量，key不存在返回undefined
   * @param key - key
   */
  getEnv(t) {
    let n;
    try {
      this.envMeta[t] && (n = this.envMeta[t]);
    } catch {
    }
    return n;
  }
  /**
   * 获取String类型的环境变量，key不存在直接返回空值
   * @param key - key
   */
  getStringEnv(t) {
    return this.getEnv(t) ?? "";
  }
  /**
   * 获取Boolean类型的环境变量，key不存在返回false
   * @param key - key
   */
  getBooleanEnv(t) {
    let n = !1;
    return this.getEnv(t) && (n = this.getStringEnv(t).toLowerCase() === "true"), n;
  }
  /**
   * 获取环境变量，如果未定义或者为空值，用指定的默认值代替
   *
   * @param key - key
   * @param defaultValue - 默认值
   * @since 0.1.0
   * @author terwer
   */
  getEnvOrDefault(t, n) {
    const a = this.getStringEnv(t);
    return a.trim().length == 0 ? n : a;
  }
}
var Ul = Object.defineProperty, Bl = (e, t, n) => t in e ? Ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, At = (e, t, n) => (Bl(e, typeof t != "symbol" ? t + "" : t, n), n);
class xr {
}
At(xr, "LOG_LEVEL_KEY", "VITE_LOG_LEVEL"), At(xr, "LOG_PREFIX_KEY", "VITE_LOG_PREFIX");
var Ve = /* @__PURE__ */ ((e) => (e.LOG_LEVEL_TRACE = "TRACE", e.LOG_LEVEL_DEBUG = "DEBUG", e.LOG_LEVEL_INFO = "INFO", e.LOG_LEVEL_WARN = "WARN", e.LOG_LEVEL_ERROR = "ERROR", e))(Ve || {}), uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ho = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports ? e.exports = n() : t.log = n();
  })(uo, function() {
    var t = function() {
    }, n = "undefined", a = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent), i = [
      "trace",
      "debug",
      "info",
      "warn",
      "error"
    ];
    function l(C, x) {
      var $ = C[x];
      if (typeof $.bind == "function")
        return $.bind(C);
      try {
        return Function.prototype.bind.call($, C);
      } catch {
        return function() {
          return Function.prototype.apply.apply($, [C, arguments]);
        };
      }
    }
    function f() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function b(C) {
      return C === "debug" && (C = "log"), typeof console === n ? !1 : C === "trace" && a ? f : console[C] !== void 0 ? l(console, C) : console.log !== void 0 ? l(console, "log") : t;
    }
    function k(C, x) {
      for (var $ = 0; $ < i.length; $++) {
        var T = i[$];
        this[T] = $ < C ? t : this.methodFactory(T, C, x);
      }
      this.log = this.debug;
    }
    function _(C, x, $) {
      return function() {
        typeof console !== n && (k.call(this, x, $), this[C].apply(this, arguments));
      };
    }
    function y(C, x, $) {
      return b(C) || _.apply(this, arguments);
    }
    function S(C, x, $) {
      var T = this, R;
      x = x ?? "WARN";
      var r = "loglevel";
      typeof C == "string" ? r += ":" + C : typeof C == "symbol" && (r = void 0);
      function s(m) {
        var p = (i[m] || "silent").toUpperCase();
        if (!(typeof window === n || !r)) {
          try {
            window.localStorage[r] = p;
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(r) + "=" + p + ";";
          } catch {
          }
        }
      }
      function o() {
        var m;
        if (!(typeof window === n || !r)) {
          try {
            m = window.localStorage[r];
          } catch {
          }
          if (typeof m === n)
            try {
              var p = window.document.cookie, j = p.indexOf(
                encodeURIComponent(r) + "="
              );
              j !== -1 && (m = /^([^;]+)/.exec(p.slice(j))[1]);
            } catch {
            }
          return T.levels[m] === void 0 && (m = void 0), m;
        }
      }
      function c() {
        if (!(typeof window === n || !r)) {
          try {
            window.localStorage.removeItem(r);
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(r) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {
          }
        }
      }
      T.name = C, T.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
      }, T.methodFactory = $ || y, T.getLevel = function() {
        return R;
      }, T.setLevel = function(m, p) {
        if (typeof m == "string" && T.levels[m.toUpperCase()] !== void 0 && (m = T.levels[m.toUpperCase()]), typeof m == "number" && m >= 0 && m <= T.levels.SILENT) {
          if (R = m, p !== !1 && s(m), k.call(T, m, C), typeof console === n && m < T.levels.SILENT)
            return "No console available for logging";
        } else
          throw "log.setLevel() called with invalid level: " + m;
      }, T.setDefaultLevel = function(m) {
        x = m, o() || T.setLevel(m, !1);
      }, T.resetLevel = function() {
        T.setLevel(x, !1), c();
      }, T.enableAll = function(m) {
        T.setLevel(T.levels.TRACE, m);
      }, T.disableAll = function(m) {
        T.setLevel(T.levels.SILENT, m);
      };
      var u = o();
      u == null && (u = x), T.setLevel(u, !1);
    }
    var A = new S(), M = {};
    A.getLogger = function(C) {
      if (typeof C != "symbol" && typeof C != "string" || C === "")
        throw new TypeError("You must supply a name when creating a logger.");
      var x = M[C];
      return x || (x = M[C] = new S(
        C,
        A.getLevel(),
        A.methodFactory
      )), x;
    };
    var O = typeof window !== n ? window.log : void 0;
    return A.noConflict = function() {
      return typeof window !== n && window.log === A && (window.log = O), A;
    }, A.getLoggers = function() {
      return M;
    }, A.default = A, A;
  });
})(ho);
var Fl = ho.exports;
const _r = /* @__PURE__ */ Ia(Fl);
var po = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports ? e.exports = n() : t.prefix = n(t);
  })(uo, function(t) {
    var n = function(y) {
      for (var S = 1, A = arguments.length, M; S < A; S++)
        for (M in arguments[S])
          Object.prototype.hasOwnProperty.call(arguments[S], M) && (y[M] = arguments[S][M]);
      return y;
    }, a = {
      template: "[%t] %l:",
      levelFormatter: function(y) {
        return y.toUpperCase();
      },
      nameFormatter: function(y) {
        return y || "root";
      },
      timestampFormatter: function(y) {
        return y.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      },
      format: void 0
    }, i, l = {}, f = function(y) {
      if (!y || !y.getLogger)
        throw new TypeError("Argument is not a root logger");
      i = y;
    }, b = function(y, S) {
      if (!y || !y.setLevel)
        throw new TypeError("Argument is not a logger");
      var A = y.methodFactory, M = y.name || "", O = l[M] || l[""] || a;
      function C(x, $, T) {
        var R = A(x, $, T), r = l[T] || l[""], s = r.template.indexOf("%t") !== -1, o = r.template.indexOf("%l") !== -1, c = r.template.indexOf("%n") !== -1;
        return function() {
          for (var u = "", m = arguments.length, p = Array(m), j = 0; j < m; j++)
            p[j] = arguments[j];
          if (M || !l[T]) {
            var V = r.timestampFormatter(/* @__PURE__ */ new Date()), F = r.levelFormatter(x), D = r.nameFormatter(T);
            r.format ? u += r.format(F, D, V) : (u += r.template, s && (u = u.replace(/%t/, V)), o && (u = u.replace(/%l/, F)), c && (u = u.replace(/%n/, D))), p.length && typeof p[0] == "string" ? p[0] = u + " " + p[0] : p.unshift(u);
          }
          R.apply(void 0, p);
        };
      }
      return l[M] || (y.methodFactory = C), S = S || {}, S.template && (S.format = void 0), l[M] = n({}, O, S), y.setLevel(y.getLevel()), i || y.warn(
        "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
      ), y;
    }, k = {
      reg: f,
      apply: b
    }, _;
    return t && (_ = t.prefix, k.noConflict = function() {
      return t.prefix === k && (t.prefix = _), k;
    }), k;
  });
})(po);
var Hl = po.exports;
const _n = /* @__PURE__ */ Ia(Hl);
function ql() {
  const e = Error.prepareStackTrace;
  Error.prepareStackTrace = (n, a) => a;
  const t = new Error().stack.slice(1);
  return Error.prepareStackTrace = e, t;
}
class Tr {
  /**
   * 解析日志级别为枚举
   *
   * @param enumObj - 枚举对象
   * @param value - 配置的值
   */
  static stringToEnumValue(t, n) {
    return t[Object.keys(t).filter((a) => t[a].toString() === n)[0]];
  }
  /**
   * 获取配置的日志级别
   */
  static getEnvLevel(t) {
    if (!t)
      return;
    let n;
    try {
      n = t.getEnvOrDefault(xr.LOG_LEVEL_KEY, Ve.LOG_LEVEL_INFO);
    } catch {
      n = Ve.LOG_LEVEL_INFO;
    }
    const a = Tr.stringToEnumValue(Ve, n.toUpperCase());
    return a || console.warn(
      "[zhi-log] LOG_LEVEL is invalid in you .env file.It must be either debug, info, warn or error, fallback to default info level"
    ), a ?? Ve.LOG_LEVEL_INFO;
  }
  /**
   * 获取默认日志
   */
  static getEnvLogger(t) {
    return t ? t.getEnv(xr.LOG_PREFIX_KEY) : void 0;
  }
}
var Aa = { exports: {} }, bn = { exports: {} }, wn;
function Gl() {
  return wn || (wn = 1, function(e) {
    const t = typeof process < "u" && process.env.TERM_PROGRAM === "Hyper", n = typeof process < "u" && process.platform === "win32", a = typeof process < "u" && process.platform === "linux", i = {
      ballotDisabled: "☒",
      ballotOff: "☐",
      ballotOn: "☑",
      bullet: "•",
      bulletWhite: "◦",
      fullBlock: "█",
      heart: "❤",
      identicalTo: "≡",
      line: "─",
      mark: "※",
      middot: "·",
      minus: "－",
      multiplication: "×",
      obelus: "÷",
      pencilDownRight: "✎",
      pencilRight: "✏",
      pencilUpRight: "✐",
      percent: "%",
      pilcrow2: "❡",
      pilcrow: "¶",
      plusMinus: "±",
      question: "?",
      section: "§",
      starsOff: "☆",
      starsOn: "★",
      upDownArrow: "↕"
    }, l = Object.assign({}, i, {
      check: "√",
      cross: "×",
      ellipsisLarge: "...",
      ellipsis: "...",
      info: "i",
      questionSmall: "?",
      pointer: ">",
      pointerSmall: "»",
      radioOff: "( )",
      radioOn: "(*)",
      warning: "‼"
    }), f = Object.assign({}, i, {
      ballotCross: "✘",
      check: "✔",
      cross: "✖",
      ellipsisLarge: "⋯",
      ellipsis: "…",
      info: "ℹ",
      questionFull: "？",
      questionSmall: "﹖",
      pointer: a ? "▸" : "❯",
      pointerSmall: a ? "‣" : "›",
      radioOff: "◯",
      radioOn: "◉",
      warning: "⚠"
    });
    e.exports = n && !t ? l : f, Reflect.defineProperty(e.exports, "common", { enumerable: !1, value: i }), Reflect.defineProperty(e.exports, "windows", { enumerable: !1, value: l }), Reflect.defineProperty(e.exports, "other", { enumerable: !1, value: f });
  }(bn)), bn.exports;
}
const Kl = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Wl = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g, Yl = () => typeof process < "u" ? process.env.FORCE_COLOR !== "0" : !1, fo = () => {
  const e = {
    enabled: Yl(),
    visible: !0,
    styles: {},
    keys: {}
  }, t = (l) => {
    let f = l.open = `\x1B[${l.codes[0]}m`, b = l.close = `\x1B[${l.codes[1]}m`, k = l.regex = new RegExp(`\\u001b\\[${l.codes[1]}m`, "g");
    return l.wrap = (_, y) => {
      _.includes(b) && (_ = _.replace(k, b + f));
      let S = f + _ + b;
      return y ? S.replace(/\r*\n/g, `${b}$&${f}`) : S;
    }, l;
  }, n = (l, f, b) => typeof l == "function" ? l(f) : l.wrap(f, b), a = (l, f) => {
    if (l === "" || l == null)
      return "";
    if (e.enabled === !1)
      return l;
    if (e.visible === !1)
      return "";
    let b = "" + l, k = b.includes(`
`), _ = f.length;
    for (_ > 0 && f.includes("unstyle") && (f = [.../* @__PURE__ */ new Set(["unstyle", ...f])].reverse()); _-- > 0; )
      b = n(e.styles[f[_]], b, k);
    return b;
  }, i = (l, f, b) => {
    e.styles[l] = t({ name: l, codes: f }), (e.keys[b] || (e.keys[b] = [])).push(l), Reflect.defineProperty(e, l, {
      configurable: !0,
      enumerable: !0,
      set(k) {
        e.alias(l, k);
      },
      get() {
        let k = (_) => a(_, k.stack);
        return Reflect.setPrototypeOf(k, e), k.stack = this.stack ? this.stack.concat(l) : [l], k;
      }
    });
  };
  return i("reset", [0, 0], "modifier"), i("bold", [1, 22], "modifier"), i("dim", [2, 22], "modifier"), i("italic", [3, 23], "modifier"), i("underline", [4, 24], "modifier"), i("inverse", [7, 27], "modifier"), i("hidden", [8, 28], "modifier"), i("strikethrough", [9, 29], "modifier"), i("black", [30, 39], "color"), i("red", [31, 39], "color"), i("green", [32, 39], "color"), i("yellow", [33, 39], "color"), i("blue", [34, 39], "color"), i("magenta", [35, 39], "color"), i("cyan", [36, 39], "color"), i("white", [37, 39], "color"), i("gray", [90, 39], "color"), i("grey", [90, 39], "color"), i("bgBlack", [40, 49], "bg"), i("bgRed", [41, 49], "bg"), i("bgGreen", [42, 49], "bg"), i("bgYellow", [43, 49], "bg"), i("bgBlue", [44, 49], "bg"), i("bgMagenta", [45, 49], "bg"), i("bgCyan", [46, 49], "bg"), i("bgWhite", [47, 49], "bg"), i("blackBright", [90, 39], "bright"), i("redBright", [91, 39], "bright"), i("greenBright", [92, 39], "bright"), i("yellowBright", [93, 39], "bright"), i("blueBright", [94, 39], "bright"), i("magentaBright", [95, 39], "bright"), i("cyanBright", [96, 39], "bright"), i("whiteBright", [97, 39], "bright"), i("bgBlackBright", [100, 49], "bgBright"), i("bgRedBright", [101, 49], "bgBright"), i("bgGreenBright", [102, 49], "bgBright"), i("bgYellowBright", [103, 49], "bgBright"), i("bgBlueBright", [104, 49], "bgBright"), i("bgMagentaBright", [105, 49], "bgBright"), i("bgCyanBright", [106, 49], "bgBright"), i("bgWhiteBright", [107, 49], "bgBright"), e.ansiRegex = Wl, e.hasColor = e.hasAnsi = (l) => (e.ansiRegex.lastIndex = 0, typeof l == "string" && l !== "" && e.ansiRegex.test(l)), e.alias = (l, f) => {
    let b = typeof f == "string" ? e[f] : f;
    if (typeof b != "function")
      throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
    b.stack || (Reflect.defineProperty(b, "name", { value: l }), e.styles[l] = b, b.stack = [l]), Reflect.defineProperty(e, l, {
      configurable: !0,
      enumerable: !0,
      set(k) {
        e.alias(l, k);
      },
      get() {
        let k = (_) => a(_, k.stack);
        return Reflect.setPrototypeOf(k, e), k.stack = this.stack ? this.stack.concat(b.stack) : b.stack, k;
      }
    });
  }, e.theme = (l) => {
    if (!Kl(l))
      throw new TypeError("Expected theme to be an object");
    for (let f of Object.keys(l))
      e.alias(f, l[f]);
    return e;
  }, e.alias("unstyle", (l) => typeof l == "string" && l !== "" ? (e.ansiRegex.lastIndex = 0, l.replace(e.ansiRegex, "")) : ""), e.alias("noop", (l) => l), e.none = e.clear = e.noop, e.stripColor = e.unstyle, e.symbols = Gl(), e.define = i, e;
};
Aa.exports = fo();
Aa.exports.create = fo;
var Jl = Aa.exports;
const Me = /* @__PURE__ */ Ia(Jl);
let Wr, mo, go, yo, _o = !0;
typeof process < "u" && ({ FORCE_COLOR: Wr, NODE_DISABLE_COLORS: mo, NO_COLOR: go, TERM: yo } = process.env || {}, _o = process.stdout && process.stdout.isTTY);
const ae = {
  enabled: !mo && go == null && yo !== "dumb" && (Wr != null && Wr !== "0" || _o),
  // modifiers
  reset: pe(0, 0),
  bold: pe(1, 22),
  dim: pe(2, 22),
  italic: pe(3, 23),
  underline: pe(4, 24),
  inverse: pe(7, 27),
  hidden: pe(8, 28),
  strikethrough: pe(9, 29),
  // colors
  black: pe(30, 39),
  red: pe(31, 39),
  green: pe(32, 39),
  yellow: pe(33, 39),
  blue: pe(34, 39),
  magenta: pe(35, 39),
  cyan: pe(36, 39),
  white: pe(37, 39),
  gray: pe(90, 39),
  grey: pe(90, 39),
  // background colors
  bgBlack: pe(40, 49),
  bgRed: pe(41, 49),
  bgGreen: pe(42, 49),
  bgYellow: pe(43, 49),
  bgBlue: pe(44, 49),
  bgMagenta: pe(45, 49),
  bgCyan: pe(46, 49),
  bgWhite: pe(47, 49)
};
function vn(e, t) {
  let n = 0, a, i = "", l = "";
  for (; n < e.length; n++)
    a = e[n], i += a.open, l += a.close, ~t.indexOf(a.close) && (t = t.replace(a.rgx, a.close + a.open));
  return i + t + l;
}
function Zl(e, t) {
  let n = { has: e, keys: t };
  return n.reset = ae.reset.bind(n), n.bold = ae.bold.bind(n), n.dim = ae.dim.bind(n), n.italic = ae.italic.bind(n), n.underline = ae.underline.bind(n), n.inverse = ae.inverse.bind(n), n.hidden = ae.hidden.bind(n), n.strikethrough = ae.strikethrough.bind(n), n.black = ae.black.bind(n), n.red = ae.red.bind(n), n.green = ae.green.bind(n), n.yellow = ae.yellow.bind(n), n.blue = ae.blue.bind(n), n.magenta = ae.magenta.bind(n), n.cyan = ae.cyan.bind(n), n.white = ae.white.bind(n), n.gray = ae.gray.bind(n), n.grey = ae.grey.bind(n), n.bgBlack = ae.bgBlack.bind(n), n.bgRed = ae.bgRed.bind(n), n.bgGreen = ae.bgGreen.bind(n), n.bgYellow = ae.bgYellow.bind(n), n.bgBlue = ae.bgBlue.bind(n), n.bgMagenta = ae.bgMagenta.bind(n), n.bgCyan = ae.bgCyan.bind(n), n.bgWhite = ae.bgWhite.bind(n), n;
}
function pe(e, t) {
  let n = {
    open: `\x1B[${e}m`,
    close: `\x1B[${t}m`,
    rgx: new RegExp(`\\x1b\\[${t}m`, "g")
  };
  return function(a) {
    return this !== void 0 && this.has !== void 0 ? (~this.has.indexOf(e) || (this.has.push(e), this.keys.push(n)), a === void 0 ? this : ae.enabled ? vn(this.keys, a + "") : a + "") : a === void 0 ? Zl([e], [n]) : ae.enabled ? vn([n], a + "") : a + "";
  };
}
var Ql = Object.defineProperty, Xl = (e, t, n) => t in e ? Ql(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ve = (e, t, n) => (Xl(e, typeof t != "symbol" ? t + "" : t, n), n);
const He = class {
  /**
   * 检测是否运行在Chrome插件中
   */
  static isInChromeExtension() {
    return He.isInBrowser ? window.location.href.indexOf("chrome-extension://") > -1 : !1;
  }
};
let ue = He;
ve(ue, "isNode", typeof process < "u"), /**
* 是否在浏览器环境
*/
ve(ue, "isInBrowser", typeof window < "u"), /**
* 浏览器路径分隔符
*/
ve(ue, "BrowserSeperator", "/"), /**
* 是否是Electron环境
*/
ve(ue, "isElectron", () => !He.isInBrowser || !window.navigator || !window.navigator.userAgent ? !1 : /Electron/.test(window.navigator.userAgent)), /**
* 是否有Node环境，目前包括 Electron 和 Node
*/
ve(ue, "hasNodeEnv", () => He.isElectron() || He.isNode), /**
* 获取url参数
*
* @param sParam - 参数
*/
ve(ue, "getQueryString", (e) => {
  if (!He.isInBrowser)
    return "";
  const t = window.location.search.substring(1).split("&");
  for (let n = 0; n < t.length; n++) {
    const a = t[n].split("=");
    if (a[0] === e)
      return a[1];
  }
  return "";
}), /**
* 替换 URL 的参数
* 思路：
* 1. 使用了 URLSearchParams 对象来解析和构建 URL 查询参数。
*
* 2. 在处理包含 hash 片段的 URL 时使用了 split 函数将 URL 分成两部分：基本 URL 和 hash 片段。
*
* 3. 然后，再次使用 split 函数将基本 URL 分成两部分：路径和查询参数。
*
* 4. 将查询参数转换为 URLSearchParams 对象，然后设置指定的参数名和值。
*
* 5. 最后，使用 toString 函数将查询参数转换为字符串，并将其与路径组合成新的基本 URL。如果 URL 包含 hash 片段，则将其添加到新的基本 URL 中。
*
* @param url - 链接地址
* @param paramName - 参数名
* @param paramValue - 参数值
*/
ve(ue, "replaceUrlParam", (e, t, n) => {
  n == null && (n = "");
  const a = new RegExp("\\b(" + t + "=).*?(&|#|$)");
  if (e.search(a) >= 0)
    return e.replace(a, "$1" + n + "$2");
  const [i, l] = e.split("#"), [f, b] = i.split("?"), k = new URLSearchParams(b);
  k.set(t, n);
  const _ = k.toString(), y = f + (_ ? "?" + _ : "");
  return l ? y + "#" + l : y;
}), /**
* 设置url参数
*
* @param urlstring - url
* @param key - key
* @param value - value
*/
ve(ue, "setUrlParameter", (e, t, n) => {
  if (e.includes(t))
    return He.replaceUrlParam(e, t, n);
  const a = e.split("#");
  let i = a[0];
  const l = a[1];
  return i.includes("?") ? i += `&${t}=${n}` : i += `?${t}=${n}`, l && (i += "#" + l), i;
}), /**
* 重新加载指定tab
*
* @param tabname - tabname
* @param t - 延迟时间
*/
ve(ue, "reloadTabPage", (e, t = 200) => {
  setTimeout(function() {
    if (He.isInBrowser) {
      const n = window.location.href;
      window.location.href = He.setUrlParameter(n, "tab", e);
    }
  }, t);
}), /**
* 刷新当前tab页面
*/
ve(ue, "reloadPage", () => {
  setTimeout(function() {
    He.isInBrowser && window.location.reload();
  }, 200);
}), /**
* 刷新当前tab页面
*
* @param msg - 消息提示
* @param cb - 回调
*/
ve(ue, "reloadPageWithMessageCallback", (e, t) => {
  t && t(e), setTimeout(function() {
    He.isInBrowser && window.location.reload();
  }, 200);
});
var je = /* @__PURE__ */ ((e) => (e.BasePathType_Appearance = "Appearance", e.BasePathType_Data = "Data", e.BasePathType_Themes = "Themes", e.BasePathType_ZhiTheme = "ZhiTheme", e.BasePathType_None = "None", e))(je || {});
const Ce = class {
  /**
   * 检测是否运行在思源打开的浏览器中
   */
  static isInSiyuanBrowser() {
    return ue.isInBrowser ? typeof window.siyuan < "u" && typeof window.Lute < "u" : !1;
  }
  /**
   * 思源笔记 window 对象
   */
  static siyuanWindow() {
    let e;
    return this.isInSiyuanWidget() ? e = parent.window : this.isInSiyuanNewWin() || this.isInSiyuanBrowser() || typeof window < "u" ? e = window : e = void 0, e;
  }
  // =========================
  // require end
  // =========================
  // =========================
  // import start
  // =========================
  /**
   * 引入json
   *
   * @param jsPath - js相对路径全路径
   * @param type - 类型
   */
  static async importJs(e, t) {
    let n = e;
    switch (t) {
      case je.BasePathType_Appearance:
        n = this.browserJoinPath(this.siyuanAppearanceRelativePath(), e);
        break;
      case je.BasePathType_Data:
        n = this.browserJoinPath(this.siyuanDataRelativePath(), e);
        break;
      case je.BasePathType_Themes:
        n = this.browserJoinPath(this.siyuanThemeRelativePath(), e);
        break;
      case je.BasePathType_ZhiTheme:
        n = this.browserJoinPath(this.zhiThemeRelativePath(), e);
        break;
      default:
        throw new Error("type must be provided");
    }
    const { default: a } = await import(
      /* @vite-ignore */
      n
    );
    return a;
  }
  /**
   * 引入json
   *
   * @param jsonPath - json相对路径全路径
   * @param type - 类型
   */
  // public static async importJson(jsonPath: string, type: BasePathTypeEnum) {
  //   let fullJsonPath = jsonPath
  //   switch (type) {
  //     case BasePathTypeEnum.BasePathType_Appearance:
  //       fullJsonPath = this.browserJoinPath(this.siyuanAppearanceRelativePath(), jsonPath)
  //       break
  //     case BasePathTypeEnum.BasePathType_Data:
  //       fullJsonPath = this.browserJoinPath(this.siyuanDataRelativePath(), jsonPath)
  //       break
  //     case BasePathTypeEnum.BasePathType_Themes:
  //       fullJsonPath = this.browserJoinPath(this.siyuanThemeRelativePath(), jsonPath)
  //       break
  //     case BasePathTypeEnum.BasePathType_ZhiTheme:
  //       fullJsonPath = this.browserJoinPath(this.zhiThemeRelativePath(), jsonPath)
  //       break
  //     default:
  //       throw new Error("type must be provided")
  //   }
  //
  //   const { default: data } = await import(/* @vite-ignore */ fullJsonPath, { assert: { type: "json" } })
  //   return data
  // }
  /**
   * 引入 json - 以 data 为基本路径
   *
   * @param jsonPath - 相对于 data 的相对路径
   */
  // public static async importDataJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_Data)
  // }
  /**
   * 引入 json - 以 appearance 为基本路径
   *
   * @param jsonPath - 相对于 appearance 的相对路径
   */
  // public static async importAppearanceJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_Appearance)
  // }
  /**
   * 引入 json - 以 themes 为基本路径
   *
   * @param jsonPath - 相对于 themes 的相对路径
   */
  // public static async importThemesJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_Themes)
  // }
  /**
   * 引入 zhi 主题的 json - 以 zhi 主题 的根路径为基本路径
   *
   * @param jsonPath - 相对于 zhi 主题根路径的相对路径
   */
  // public static async importZhiThemeJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_ZhiTheme)
  // }
  /**
   * 引入 zhi 主题的 js - 以 zhi 主题 的根路径为基本路径
   *
   * @param jsPath - 相对于 zhi 主题根路径的相对路径
   */
  static async importZhiThemeJs(e) {
    return await this.importJs(e, je.BasePathType_ZhiTheme);
  }
  // =========================
  // import start
  // =========================
  /**
   * 路径拼接
   *
   * @param paths - 路径数组
   */
  static joinPath(...e) {
    if (ue.hasNodeEnv()) {
      const t = this.requireLib("path");
      if (t)
        return t.join(...e);
    }
    return this.browserJoinPath(...e);
  }
  static browserJoinPath(...e) {
    return e.join(ue.BrowserSeperator);
  }
  /**
   * 思源笔记 conf 目录
   */
  static siyuanConfPath() {
    const e = this.siyuanWindow();
    if (!e)
      throw new Error("Not in siyuan env");
    return e.siyuan.config.system.confDir;
  }
  /**
   * 思源笔记 data 目录
   */
  static siyuanDataPath() {
    const e = this.siyuanWindow();
    if (!e)
      throw new Error("Not in siyuan env");
    return e.siyuan.config.system.dataDir;
  }
  /**
   * 思源笔记 data 目录-相对路径
   */
  static siyuanDataRelativePath() {
    if (!this.siyuanWindow())
      throw new Error("Not in siyuan env");
    return "";
  }
  /**
   * 思源笔记 appearance 目录
   */
  static siyuanAppearancePath() {
    return this.joinPath(this.siyuanConfPath(), "appearance");
  }
  /**
   * 思源笔记 appearance 目录-相对路径
   */
  static siyuanAppearanceRelativePath() {
    if (!this.siyuanWindow())
      throw new Error("Not in siyuan env");
    return this.browserJoinPath("", "appearance");
  }
  /**
   * 思源笔记 themes 目录-绝对路径
   *
   * 注意: 如果是非 electron 和 Node 环境，这里返回的是浏览器的路径，不是物理路径
   * 如果使用物理路径，请调用 siyuanAppearancePath 或者 siyuanDataPath
   *
   * @author terwer
   * @since 0.1.0
   */
  static siyuanThemePath() {
    if (ue.hasNodeEnv())
      return this.joinPath(this.siyuanAppearancePath(), "themes");
    {
      const e = this.siyuanWindow();
      if (!e)
        throw new Error("Not in siyuan env");
      return this.joinPath(e.location.origin, "appearance", "themes");
    }
  }
  /**
   * 思源笔记 themes 目录-相对路径
   */
  static siyuanThemeRelativePath() {
    if (!this.siyuanWindow())
      throw new Error("Not in siyuan env");
    return this.browserJoinPath("", "appearance", "themes");
  }
  /**
   * zhi 主题目录 - 绝对路径
   */
  static zhiThemePath() {
    return this.joinPath(this.siyuanThemePath(), "zhi");
  }
  /**
   * zhi 主题目录 - 相对路径
   */
  static zhiThemeRelativePath() {
    return this.browserJoinPath(this.siyuanThemeRelativePath(), "zhi");
  }
};
let gt = Ce;
ve(gt, "isInSiyuanWidget", () => ue.isInBrowser ? window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== "" : !1), /**
* 思源笔记新窗口
*
* @deprecated window.terwer 判断方式已废弃，建议以后打开新窗口注入 window.siyuanNewWin ，这样语义会更容易理解
* @author terwer
* @version 0.1.0
* @since 0.0.1
*/
ve(gt, "isInSiyuanNewWin", () => !ue.isInBrowser || !ue.isElectron() ? !1 : typeof window.terwer < "u" || typeof window.siyuanNewWin < "u"), // =========================
// require start
// =========================
/**
 * 引入依赖
 *
 * @param libpath - 依赖全路径
 * @param abs - 可选，是否使用觉得路径，默认是 true ， 启用之后 type参数无效
 * @param type - 可选，以谁的基本路径为准
 */
ve(gt, "requireLib", (e, t = !0, n = je.BasePathType_None) => {
  if (!ue.hasNodeEnv())
    throw new Error("require ony works on node env");
  let a = e;
  if (!t)
    switch (n) {
      case je.BasePathType_Appearance:
        a = Ce.joinPath(Ce.siyuanAppearancePath(), e);
        break;
      case je.BasePathType_Data:
        a = Ce.joinPath(Ce.siyuanDataPath(), e);
        break;
      case je.BasePathType_Themes:
        a = Ce.joinPath(Ce.siyuanAppearancePath(), "themes", e);
        break;
      case je.BasePathType_ZhiTheme:
        a = Ce.joinPath(Ce.siyuanAppearancePath(), "themes", "zhi", e);
        break;
      default:
        throw new Error("type must be provided when not use absolute path");
    }
  const i = Ce.siyuanWindow();
  if (!i)
    return require(a);
  if (typeof i.require < "u")
    return i.require(a);
}), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 appearance 的相对路径
*/
ve(gt, "requireAppearanceLib", (e) => Ce.requireLib(e, !1, je.BasePathType_Appearance)), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 data 的相对路径
*/
ve(gt, "requireDataLib", (e) => Ce.requireLib(e, !1, je.BasePathType_Data)), /**
* 引入依赖，以 theme 的基本路径为准
*
* @param libpath - 相对于 theme 的相对路径
*/
ve(gt, "requireThemesLib", (e) => Ce.requireLib(e, !1, je.BasePathType_Themes)), /**
* 引入依赖，以 ZhiTheme 的基本路径为准
*
* @param libpath - 相对于 ZhiTheme 的相对路径
*/
ve(gt, "requireZhiThemeLib", (e) => Ce.requireLib(e, !1, je.BasePathType_ZhiTheme));
const ze = {
  white: (e) => ue.isElectron() ? Me.whiteBright(e) : ae.white(e),
  gray: (e) => ue.isElectron() ? Me.gray(e) : ae.gray(e),
  blue: (e) => ue.isElectron() ? Me.blue(e) : ae.blue(e),
  green: (e) => ue.isElectron() ? Me.green(e) : ae.green(e),
  yellow: (e) => ue.isElectron() ? Me.yellow(e) : ae.yellow(e),
  red: (e) => ue.isElectron() ? Me.red(e) : ae.red(e),
  bgWhite: (e) => ue.isElectron() ? Me.bgWhiteBright(e) : ae.bgWhite(e),
  bgGrey: (e) => ue.isElectron() ? Me.bgCyanBright(e) : ae.bgCyan(e),
  bgBlue: (e) => ue.isElectron() ? Me.bgBlueBright(e) : ae.bgBlue(e),
  bgGreen: (e) => ue.isElectron() ? Me.bgGreenBright(e) : ae.bgGreen(e),
  bgYellow: (e) => ue.isElectron() ? Me.bgYellowBright(e) : ae.bgYellow(e),
  bgRed: (e) => ue.isElectron() ? Me.bgRedBright(e) : ae.bgRed(e)
};
class eu {
  constructor(t, n, a) {
    At(this, "consoleLogger", "console"), At(this, "stackSize", 1), At(this, "getLogger", (f) => {
      let b;
      if (f)
        b = f;
      else {
        const k = this.getCallStack(), _ = [], y = [];
        for (let S = 0; S < k.length; S++) {
          const A = k[S], M = A.getFileName() ?? "none";
          if (S > this.stackSize - 1)
            break;
          const O = M + "-" + A.getLineNumber() + ":" + A.getColumnNumber();
          _.push(O);
        }
        y.length > 0 && (b = _.join(" -> "));
      }
      return (!b || b.trim().length === 0) && (b = this.consoleLogger), _r.getLogger(b);
    }), this.stackSize = 1;
    let i;
    t ? i = t : i = Tr.getEnvLevel(a), i = i ?? Ve.LOG_LEVEL_INFO, _r.setLevel(i);
    const l = (f, b, k, _) => {
      const y = [], S = n ?? Tr.getEnvLogger(a) ?? "zhi";
      return y.push(ze.gray("[") + _(S) + ze.gray("]")), y.push(ze.gray("[") + ze.gray(k.toString()) + ze.gray("]")), y.push(_(f.toUpperCase().toString())), y.push(_(b)), y.push(ze.gray(":")), y;
    };
    _n.reg(_r), _n.apply(_r, {
      format(f, b, k) {
        let _ = [];
        const y = b ?? "";
        switch (f) {
          case Ve.LOG_LEVEL_TRACE:
            _ = l(f, y, k, ze.gray);
            break;
          case Ve.LOG_LEVEL_DEBUG:
            _ = l(f, y, k, ze.blue);
            break;
          case Ve.LOG_LEVEL_INFO:
            _ = l(f, y, k, ze.green);
            break;
          case Ve.LOG_LEVEL_WARN:
            _ = l(f, y, k, ze.yellow);
            break;
          case Ve.LOG_LEVEL_ERROR:
            _ = l(f, y, k, ze.red);
            break;
          default:
            _ = l(Ve.LOG_LEVEL_INFO, y, k, ze.green);
            break;
        }
        return _.join(" ");
      }
    });
  }
  /**
   * 设置输出栈的深度，默认1
   *
   * @param stackSize - 栈的深度
   */
  setStackSize(t) {
    this.stackSize = t ?? 1;
  }
  /**
   * 获取调用堆栈，若未获取到直接返回空数组
   *
   * @author terwer
   * @since 1.6.0
   */
  getCallStack() {
    let t;
    try {
      t = ql();
    } catch {
      t = [];
    }
    return t;
  }
}
class tu {
  /**
   * 默认日志级别
   *
   * @param level - 可选，未设置默认INFO
   * @param sign - 可选前缀，默认zhi
   * @param env - 可选环境变量实例
   */
  constructor(t, n, a) {
    At(this, "logger"), this.logger = new eu(t, n, a);
  }
  /**
   * 获取日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @param stackSize - 打印栈的深度
   * @protected
   */
  getLogger(t, n) {
    return this.logger.setStackSize(n), this.logger.getLogger(t);
  }
}
class $n extends tu {
  constructor(t, n, a) {
    super(t, n, a);
  }
  /**
   * 获取默认的日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @param stackSize - 打印栈的深度
   */
  getLogger(t, n) {
    return super.getLogger(t, n);
  }
}
class Ra {
  /**
   * 默认日志记录器
   *
   * @param stackSize - 栈的深度
   * @param env - 环境变量实例
   */
  static defaultLogger(t, n) {
    return Ra.customLogFactory(void 0, void 0, t).getLogger(void 0, n);
  }
  /**
   * 自定义日志工厂
   *
   * @param level - 级别
   * @param sign - 标志
   * @param env - 环境变量
   */
  static customLogFactory(t, n, a) {
    return new $n(t, n, a);
  }
  /**
   * 自定义日志工厂，自定义前缀
   *
   * @param sign - 标志
   * @param env - 环境变量
   */
  static customSignLogFactory(t, n) {
    return new $n(void 0, t, n);
  }
}
const ru = "zhi";
class tr {
  /**
   * 某些情况下，可能需要手动 init 之后才能用
   */
  static initEnv(t) {
    this.env = t;
  }
  /**
   * 获取 zhi-env 实例 - 必须在使用的时候重写此方法
   *
   * ```
   * if (!this.env) {
   *   this.env = new Env({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":false})
   * }
   * return this.env
   * ```
   *
   * @see {@link https://github.com/terwer/zhi/tree/main/apps/zhi-env#usage docs for zhi-env usage}
   */
  static zhiEnv() {
    throw new Error("Method 'zhiEnv' must be implemented");
  }
  /**
   * 获取 zhi-log 实例
   *
   * @param sign - 标志
   * @param loggerName - 日志名称
   */
  static zhiLogWithSign(t, n) {
    if (this.loggerMap[n])
      return this.loggerMap[n].debug("Zhi-log use cache"), this.loggerMap[n];
    const a = this.env, i = Ra.customSignLogFactory(t, a).getLogger(n);
    return this.loggerMap[n] = i, i.debug("Zhi-log add new logger"), i;
  }
  /**
   * 获取 zhi-log 实例
   *
   * @param loggerName - 日志名称
   */
  static zhiLog(t) {
    return this.zhiLogWithSign(ru, t);
  }
  /**
   * 获取 zhi-common 实例
   */
  static zhiCommon() {
    return this.common || (this.common = new iu()), this.common;
  }
}
$e(tr, "env"), /**
* zhi-util 的日志器缓存
*/
$e(tr, "loggerMap", {}), /**
* zhi-util 的通用工具类
*/
$e(tr, "common");
class La extends tr {
  static zhiEnv() {
    return this.env || (this.env = new Vl({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 })), this.env;
  }
}
class kn {
  constructor() {
    $e(this, "logger"), this.logger = La.zhiLog("lute-adaptor"), Lute ? this.logger.debug("Detected Lute is bundled, will use!") : this.logger.debug("Lute is not available!");
  }
  isAvailable() {
    return typeof Lute < "u";
  }
  /**
   * 高亮关键字
   *
   * @param str - 字符串
   * @private
   */
  highlightWords(t) {
    const n = new RegExp("(?<=^|[\\s\\S])==([^\\n]+?)==(?=($|[\\s\\S]))", "g");
    return t.replace(n, '<span class="mark">$1</span>');
  }
  /**
   * 渲染Markdown
   *
   * @param md - Markdown
   */
  async renderMarkdownStr(t) {
    if (!this.isAvailable())
      return this.logger.error("Lute is not available, will return original md"), t;
    const n = Lute, a = n.New(), i = {
      renderText: (l, f) => f ? [this.highlightWords(l.Text()), n.WalkContinue] : ["", n.WalkContinue]
      // renderStrong: (node: any, entering: any) => {
      //     return ["", luteObj.WalkContinue]
      // },
      // renderParagraph: (node: any, entering: any) => {
      //     return ["", luteObj.WalkContinue]
      // }
    };
    return a.SetJSRenderers({
      renderers: {
        Md2HTML: i
      }
    }), this.logger.info("Lute is rendering md to HTML..."), a.MarkdownStr("", t);
  }
}
var bo = { exports: {} };
(function(e) {
  (function() {
    function t(r) {
      var s = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean"
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean"
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string"
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean"
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean"
        },
        rawHeaderId: {
          defaultValue: !1,
          describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
          type: "boolean"
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer"
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean"
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean"
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe: "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean"
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean"
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean"
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean"
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean"
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean"
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean"
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean"
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe: "Prevents weird effects in live previews due to incomplete input",
          type: "boolean"
        },
        smartIndentationFix: {
          defaultValue: !1,
          describe: "Tries to smartly fix indentation in es6 strings",
          type: "boolean"
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          describe: "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean"
        },
        simpleLineBreaks: {
          defaultValue: !1,
          describe: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean"
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean"
        },
        ghMentions: {
          defaultValue: !1,
          describe: "Enables github @mentions",
          type: "boolean"
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string"
        },
        encodeEmails: {
          defaultValue: !0,
          describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean"
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          describe: "Open all links in new windows",
          type: "boolean"
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean"
        },
        emoji: {
          defaultValue: !1,
          describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean"
        },
        underline: {
          defaultValue: !1,
          describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean"
        },
        ellipsis: {
          defaultValue: !0,
          describe: "Replaces three dots with the ellipsis unicode character",
          type: "boolean"
        },
        completeHTMLDocument: {
          defaultValue: !1,
          describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean"
        },
        metadata: {
          defaultValue: !1,
          describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean"
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          describe: "Split adjacent blockquote blocks",
          type: "boolean"
        }
      };
      if (r === !1)
        return JSON.parse(JSON.stringify(s));
      var o = {};
      for (var c in s)
        s.hasOwnProperty(c) && (o[c] = s[c].defaultValue);
      return o;
    }
    function n() {
      var r = t(!0), s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = !0);
      return s;
    }
    var a = {}, i = {}, l = {}, f = t(!0), b = "vanilla", k = {
      github: {
        omitExtraWLInCodeBlocks: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        disableForced4SpacesIndentedSublists: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghCompatibleHeaderId: !0,
        ghMentions: !0,
        backslashEscapesHTMLTags: !0,
        emoji: !0,
        splitAdjacentBlockquotes: !0
      },
      original: {
        noHeaderId: !0,
        ghCodeBlocks: !1
      },
      ghost: {
        omitExtraWLInCodeBlocks: !0,
        parseImgDimensions: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        smoothLivePreview: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghMentions: !1,
        encodeEmails: !0
      },
      vanilla: t(!0),
      allOn: n()
    };
    a.helper = {}, a.extensions = {}, a.setOption = function(r, s) {
      return f[r] = s, this;
    }, a.getOption = function(r) {
      return f[r];
    }, a.getOptions = function() {
      return f;
    }, a.resetOptions = function() {
      f = t(!0);
    }, a.setFlavor = function(r) {
      if (!k.hasOwnProperty(r))
        throw Error(r + " flavor was not found");
      a.resetOptions();
      var s = k[r];
      b = r;
      for (var o in s)
        s.hasOwnProperty(o) && (f[o] = s[o]);
    }, a.getFlavor = function() {
      return b;
    }, a.getFlavorOptions = function(r) {
      if (k.hasOwnProperty(r))
        return k[r];
    }, a.getDefaultOptions = function(r) {
      return t(r);
    }, a.subParser = function(r, s) {
      if (a.helper.isString(r))
        if (typeof s < "u")
          i[r] = s;
        else {
          if (i.hasOwnProperty(r))
            return i[r];
          throw Error("SubParser named " + r + " not registered!");
        }
    }, a.extension = function(r, s) {
      if (!a.helper.isString(r))
        throw Error("Extension 'name' must be a string");
      if (r = a.helper.stdExtName(r), a.helper.isUndefined(s)) {
        if (!l.hasOwnProperty(r))
          throw Error("Extension named " + r + " is not registered!");
        return l[r];
      } else {
        typeof s == "function" && (s = s()), a.helper.isArray(s) || (s = [s]);
        var o = _(s, r);
        if (o.valid)
          l[r] = s;
        else
          throw Error(o.error);
      }
    }, a.getAllExtensions = function() {
      return l;
    }, a.removeExtension = function(r) {
      delete l[r];
    }, a.resetExtensions = function() {
      l = {};
    };
    function _(r, s) {
      var o = s ? "Error in " + s + " extension->" : "Error in unnamed extension", c = {
        valid: !0,
        error: ""
      };
      a.helper.isArray(r) || (r = [r]);
      for (var u = 0; u < r.length; ++u) {
        var m = o + " sub-extension " + u + ": ", p = r[u];
        if (typeof p != "object")
          return c.valid = !1, c.error = m + "must be an object, but " + typeof p + " given", c;
        if (!a.helper.isString(p.type))
          return c.valid = !1, c.error = m + 'property "type" must be a string, but ' + typeof p.type + " given", c;
        var j = p.type = p.type.toLowerCase();
        if (j === "language" && (j = p.type = "lang"), j === "html" && (j = p.type = "output"), j !== "lang" && j !== "output" && j !== "listener")
          return c.valid = !1, c.error = m + "type " + j + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', c;
        if (j === "listener") {
          if (a.helper.isUndefined(p.listeners))
            return c.valid = !1, c.error = m + '. Extensions of type "listener" must have a property called "listeners"', c;
        } else if (a.helper.isUndefined(p.filter) && a.helper.isUndefined(p.regex))
          return c.valid = !1, c.error = m + j + ' extensions must define either a "regex" property or a "filter" method', c;
        if (p.listeners) {
          if (typeof p.listeners != "object")
            return c.valid = !1, c.error = m + '"listeners" property must be an object but ' + typeof p.listeners + " given", c;
          for (var V in p.listeners)
            if (p.listeners.hasOwnProperty(V) && typeof p.listeners[V] != "function")
              return c.valid = !1, c.error = m + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + V + " must be a function but " + typeof p.listeners[V] + " given", c;
        }
        if (p.filter) {
          if (typeof p.filter != "function")
            return c.valid = !1, c.error = m + '"filter" must be a function, but ' + typeof p.filter + " given", c;
        } else if (p.regex) {
          if (a.helper.isString(p.regex) && (p.regex = new RegExp(p.regex, "g")), !(p.regex instanceof RegExp))
            return c.valid = !1, c.error = m + '"regex" property must either be a string or a RegExp object, but ' + typeof p.regex + " given", c;
          if (a.helper.isUndefined(p.replace))
            return c.valid = !1, c.error = m + '"regex" extensions must implement a replace string or function', c;
        }
      }
      return c;
    }
    a.validateExtension = function(r) {
      var s = _(r, null);
      return s.valid ? !0 : (console.warn(s.error), !1);
    }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(r) {
      return typeof r == "string" || r instanceof String;
    }, a.helper.isFunction = function(r) {
      var s = {};
      return r && s.toString.call(r) === "[object Function]";
    }, a.helper.isArray = function(r) {
      return Array.isArray(r);
    }, a.helper.isUndefined = function(r) {
      return typeof r > "u";
    }, a.helper.forEach = function(r, s) {
      if (a.helper.isUndefined(r))
        throw new Error("obj param is required");
      if (a.helper.isUndefined(s))
        throw new Error("callback param is required");
      if (!a.helper.isFunction(s))
        throw new Error("callback param must be a function/closure");
      if (typeof r.forEach == "function")
        r.forEach(s);
      else if (a.helper.isArray(r))
        for (var o = 0; o < r.length; o++)
          s(r[o], o, r);
      else if (typeof r == "object")
        for (var c in r)
          r.hasOwnProperty(c) && s(r[c], c, r);
      else
        throw new Error("obj does not seem to be an array or an iterable object");
    }, a.helper.stdExtName = function(r) {
      return r.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function y(r, s) {
      var o = s.charCodeAt(0);
      return "¨E" + o + "E";
    }
    a.helper.escapeCharactersCallback = y, a.helper.escapeCharacters = function(r, s, o) {
      var c = "([" + s.replace(/([\[\]\\])/g, "\\$1") + "])";
      o && (c = "\\\\" + c);
      var u = new RegExp(c, "g");
      return r = r.replace(u, y), r;
    }, a.helper.unescapeHTMLEntities = function(r) {
      return r.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var S = function(r, s, o, c) {
      var u = c || "", m = u.indexOf("g") > -1, p = new RegExp(s + "|" + o, "g" + u.replace(/g/g, "")), j = new RegExp(s, u.replace(/g/g, "")), V = [], F, D, q, g, H;
      do
        for (F = 0; q = p.exec(r); )
          if (j.test(q[0]))
            F++ || (D = p.lastIndex, g = D - q[0].length);
          else if (F && !--F) {
            H = q.index + q[0].length;
            var W = {
              left: { start: g, end: D },
              match: { start: D, end: q.index },
              right: { start: q.index, end: H },
              wholeMatch: { start: g, end: H }
            };
            if (V.push(W), !m)
              return V;
          }
      while (F && (p.lastIndex = D));
      return V;
    };
    a.helper.matchRecursiveRegExp = function(r, s, o, c) {
      for (var u = S(r, s, o, c), m = [], p = 0; p < u.length; ++p)
        m.push([
          r.slice(u[p].wholeMatch.start, u[p].wholeMatch.end),
          r.slice(u[p].match.start, u[p].match.end),
          r.slice(u[p].left.start, u[p].left.end),
          r.slice(u[p].right.start, u[p].right.end)
        ]);
      return m;
    }, a.helper.replaceRecursiveRegExp = function(r, s, o, c, u) {
      if (!a.helper.isFunction(s)) {
        var m = s;
        s = function() {
          return m;
        };
      }
      var p = S(r, o, c, u), j = r, V = p.length;
      if (V > 0) {
        var F = [];
        p[0].wholeMatch.start !== 0 && F.push(r.slice(0, p[0].wholeMatch.start));
        for (var D = 0; D < V; ++D)
          F.push(
            s(
              r.slice(p[D].wholeMatch.start, p[D].wholeMatch.end),
              r.slice(p[D].match.start, p[D].match.end),
              r.slice(p[D].left.start, p[D].left.end),
              r.slice(p[D].right.start, p[D].right.end)
            )
          ), D < V - 1 && F.push(r.slice(p[D].wholeMatch.end, p[D + 1].wholeMatch.start));
        p[V - 1].wholeMatch.end < r.length && F.push(r.slice(p[V - 1].wholeMatch.end)), j = F.join("");
      }
      return j;
    }, a.helper.regexIndexOf = function(r, s, o) {
      if (!a.helper.isString(r))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      if (!(s instanceof RegExp))
        throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
      var c = r.substring(o || 0).search(s);
      return c >= 0 ? c + (o || 0) : c;
    }, a.helper.splitAtIndex = function(r, s) {
      if (!a.helper.isString(r))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      return [r.substring(0, s), r.substring(s)];
    }, a.helper.encodeEmailAddress = function(r) {
      var s = [
        function(o) {
          return "&#" + o.charCodeAt(0) + ";";
        },
        function(o) {
          return "&#x" + o.charCodeAt(0).toString(16) + ";";
        },
        function(o) {
          return o;
        }
      ];
      return r = r.replace(/./g, function(o) {
        if (o === "@")
          o = s[Math.floor(Math.random() * 2)](o);
        else {
          var c = Math.random();
          o = c > 0.9 ? s[2](o) : c > 0.45 ? s[1](o) : s[0](o);
        }
        return o;
      }), r;
    }, a.helper.padEnd = function(r, s, o) {
      return s = s >> 0, o = String(o || " "), r.length > s ? String(r) : (s = s - r.length, s > o.length && (o += o.repeat(s / o.length)), String(r) + o.slice(0, s));
    }, typeof console > "u" && (console = {
      warn: function(r) {
        alert(r);
      },
      log: function(r) {
        alert(r);
      },
      error: function(r) {
        throw r;
      }
    }), a.helper.regexes = {
      asteriskDashAndColon: /([*_:~])/g
    }, a.helper.emojis = {
      "+1": "👍",
      "-1": "👎",
      100: "💯",
      1234: "🔢",
      "1st_place_medal": "🥇",
      "2nd_place_medal": "🥈",
      "3rd_place_medal": "🥉",
      "8ball": "🎱",
      a: "🅰️",
      ab: "🆎",
      abc: "🔤",
      abcd: "🔡",
      accept: "🉑",
      aerial_tramway: "🚡",
      airplane: "✈️",
      alarm_clock: "⏰",
      alembic: "⚗️",
      alien: "👽",
      ambulance: "🚑",
      amphora: "🏺",
      anchor: "⚓️",
      angel: "👼",
      anger: "💢",
      angry: "😠",
      anguished: "😧",
      ant: "🐜",
      apple: "🍎",
      aquarius: "♒️",
      aries: "♈️",
      arrow_backward: "◀️",
      arrow_double_down: "⏬",
      arrow_double_up: "⏫",
      arrow_down: "⬇️",
      arrow_down_small: "🔽",
      arrow_forward: "▶️",
      arrow_heading_down: "⤵️",
      arrow_heading_up: "⤴️",
      arrow_left: "⬅️",
      arrow_lower_left: "↙️",
      arrow_lower_right: "↘️",
      arrow_right: "➡️",
      arrow_right_hook: "↪️",
      arrow_up: "⬆️",
      arrow_up_down: "↕️",
      arrow_up_small: "🔼",
      arrow_upper_left: "↖️",
      arrow_upper_right: "↗️",
      arrows_clockwise: "🔃",
      arrows_counterclockwise: "🔄",
      art: "🎨",
      articulated_lorry: "🚛",
      artificial_satellite: "🛰",
      astonished: "😲",
      athletic_shoe: "👟",
      atm: "🏧",
      atom_symbol: "⚛️",
      avocado: "🥑",
      b: "🅱️",
      baby: "👶",
      baby_bottle: "🍼",
      baby_chick: "🐤",
      baby_symbol: "🚼",
      back: "🔙",
      bacon: "🥓",
      badminton: "🏸",
      baggage_claim: "🛄",
      baguette_bread: "🥖",
      balance_scale: "⚖️",
      balloon: "🎈",
      ballot_box: "🗳",
      ballot_box_with_check: "☑️",
      bamboo: "🎍",
      banana: "🍌",
      bangbang: "‼️",
      bank: "🏦",
      bar_chart: "📊",
      barber: "💈",
      baseball: "⚾️",
      basketball: "🏀",
      basketball_man: "⛹️",
      basketball_woman: "⛹️&zwj;♀️",
      bat: "🦇",
      bath: "🛀",
      bathtub: "🛁",
      battery: "🔋",
      beach_umbrella: "🏖",
      bear: "🐻",
      bed: "🛏",
      bee: "🐝",
      beer: "🍺",
      beers: "🍻",
      beetle: "🐞",
      beginner: "🔰",
      bell: "🔔",
      bellhop_bell: "🛎",
      bento: "🍱",
      biking_man: "🚴",
      bike: "🚲",
      biking_woman: "🚴&zwj;♀️",
      bikini: "👙",
      biohazard: "☣️",
      bird: "🐦",
      birthday: "🎂",
      black_circle: "⚫️",
      black_flag: "🏴",
      black_heart: "🖤",
      black_joker: "🃏",
      black_large_square: "⬛️",
      black_medium_small_square: "◾️",
      black_medium_square: "◼️",
      black_nib: "✒️",
      black_small_square: "▪️",
      black_square_button: "🔲",
      blonde_man: "👱",
      blonde_woman: "👱&zwj;♀️",
      blossom: "🌼",
      blowfish: "🐡",
      blue_book: "📘",
      blue_car: "🚙",
      blue_heart: "💙",
      blush: "😊",
      boar: "🐗",
      boat: "⛵️",
      bomb: "💣",
      book: "📖",
      bookmark: "🔖",
      bookmark_tabs: "📑",
      books: "📚",
      boom: "💥",
      boot: "👢",
      bouquet: "💐",
      bowing_man: "🙇",
      bow_and_arrow: "🏹",
      bowing_woman: "🙇&zwj;♀️",
      bowling: "🎳",
      boxing_glove: "🥊",
      boy: "👦",
      bread: "🍞",
      bride_with_veil: "👰",
      bridge_at_night: "🌉",
      briefcase: "💼",
      broken_heart: "💔",
      bug: "🐛",
      building_construction: "🏗",
      bulb: "💡",
      bullettrain_front: "🚅",
      bullettrain_side: "🚄",
      burrito: "🌯",
      bus: "🚌",
      business_suit_levitating: "🕴",
      busstop: "🚏",
      bust_in_silhouette: "👤",
      busts_in_silhouette: "👥",
      butterfly: "🦋",
      cactus: "🌵",
      cake: "🍰",
      calendar: "📆",
      call_me_hand: "🤙",
      calling: "📲",
      camel: "🐫",
      camera: "📷",
      camera_flash: "📸",
      camping: "🏕",
      cancer: "♋️",
      candle: "🕯",
      candy: "🍬",
      canoe: "🛶",
      capital_abcd: "🔠",
      capricorn: "♑️",
      car: "🚗",
      card_file_box: "🗃",
      card_index: "📇",
      card_index_dividers: "🗂",
      carousel_horse: "🎠",
      carrot: "🥕",
      cat: "🐱",
      cat2: "🐈",
      cd: "💿",
      chains: "⛓",
      champagne: "🍾",
      chart: "💹",
      chart_with_downwards_trend: "📉",
      chart_with_upwards_trend: "📈",
      checkered_flag: "🏁",
      cheese: "🧀",
      cherries: "🍒",
      cherry_blossom: "🌸",
      chestnut: "🌰",
      chicken: "🐔",
      children_crossing: "🚸",
      chipmunk: "🐿",
      chocolate_bar: "🍫",
      christmas_tree: "🎄",
      church: "⛪️",
      cinema: "🎦",
      circus_tent: "🎪",
      city_sunrise: "🌇",
      city_sunset: "🌆",
      cityscape: "🏙",
      cl: "🆑",
      clamp: "🗜",
      clap: "👏",
      clapper: "🎬",
      classical_building: "🏛",
      clinking_glasses: "🥂",
      clipboard: "📋",
      clock1: "🕐",
      clock10: "🕙",
      clock1030: "🕥",
      clock11: "🕚",
      clock1130: "🕦",
      clock12: "🕛",
      clock1230: "🕧",
      clock130: "🕜",
      clock2: "🕑",
      clock230: "🕝",
      clock3: "🕒",
      clock330: "🕞",
      clock4: "🕓",
      clock430: "🕟",
      clock5: "🕔",
      clock530: "🕠",
      clock6: "🕕",
      clock630: "🕡",
      clock7: "🕖",
      clock730: "🕢",
      clock8: "🕗",
      clock830: "🕣",
      clock9: "🕘",
      clock930: "🕤",
      closed_book: "📕",
      closed_lock_with_key: "🔐",
      closed_umbrella: "🌂",
      cloud: "☁️",
      cloud_with_lightning: "🌩",
      cloud_with_lightning_and_rain: "⛈",
      cloud_with_rain: "🌧",
      cloud_with_snow: "🌨",
      clown_face: "🤡",
      clubs: "♣️",
      cocktail: "🍸",
      coffee: "☕️",
      coffin: "⚰️",
      cold_sweat: "😰",
      comet: "☄️",
      computer: "💻",
      computer_mouse: "🖱",
      confetti_ball: "🎊",
      confounded: "😖",
      confused: "😕",
      congratulations: "㊗️",
      construction: "🚧",
      construction_worker_man: "👷",
      construction_worker_woman: "👷&zwj;♀️",
      control_knobs: "🎛",
      convenience_store: "🏪",
      cookie: "🍪",
      cool: "🆒",
      policeman: "👮",
      copyright: "©️",
      corn: "🌽",
      couch_and_lamp: "🛋",
      couple: "👫",
      couple_with_heart_woman_man: "💑",
      couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
      couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
      couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
      couplekiss_man_woman: "💏",
      couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
      cow: "🐮",
      cow2: "🐄",
      cowboy_hat_face: "🤠",
      crab: "🦀",
      crayon: "🖍",
      credit_card: "💳",
      crescent_moon: "🌙",
      cricket: "🏏",
      crocodile: "🐊",
      croissant: "🥐",
      crossed_fingers: "🤞",
      crossed_flags: "🎌",
      crossed_swords: "⚔️",
      crown: "👑",
      cry: "😢",
      crying_cat_face: "😿",
      crystal_ball: "🔮",
      cucumber: "🥒",
      cupid: "💘",
      curly_loop: "➰",
      currency_exchange: "💱",
      curry: "🍛",
      custard: "🍮",
      customs: "🛃",
      cyclone: "🌀",
      dagger: "🗡",
      dancer: "💃",
      dancing_women: "👯",
      dancing_men: "👯&zwj;♂️",
      dango: "🍡",
      dark_sunglasses: "🕶",
      dart: "🎯",
      dash: "💨",
      date: "📅",
      deciduous_tree: "🌳",
      deer: "🦌",
      department_store: "🏬",
      derelict_house: "🏚",
      desert: "🏜",
      desert_island: "🏝",
      desktop_computer: "🖥",
      male_detective: "🕵️",
      diamond_shape_with_a_dot_inside: "💠",
      diamonds: "♦️",
      disappointed: "😞",
      disappointed_relieved: "😥",
      dizzy: "💫",
      dizzy_face: "😵",
      do_not_litter: "🚯",
      dog: "🐶",
      dog2: "🐕",
      dollar: "💵",
      dolls: "🎎",
      dolphin: "🐬",
      door: "🚪",
      doughnut: "🍩",
      dove: "🕊",
      dragon: "🐉",
      dragon_face: "🐲",
      dress: "👗",
      dromedary_camel: "🐪",
      drooling_face: "🤤",
      droplet: "💧",
      drum: "🥁",
      duck: "🦆",
      dvd: "📀",
      "e-mail": "📧",
      eagle: "🦅",
      ear: "👂",
      ear_of_rice: "🌾",
      earth_africa: "🌍",
      earth_americas: "🌎",
      earth_asia: "🌏",
      egg: "🥚",
      eggplant: "🍆",
      eight_pointed_black_star: "✴️",
      eight_spoked_asterisk: "✳️",
      electric_plug: "🔌",
      elephant: "🐘",
      email: "✉️",
      end: "🔚",
      envelope_with_arrow: "📩",
      euro: "💶",
      european_castle: "🏰",
      european_post_office: "🏤",
      evergreen_tree: "🌲",
      exclamation: "❗️",
      expressionless: "😑",
      eye: "👁",
      eye_speech_bubble: "👁&zwj;🗨",
      eyeglasses: "👓",
      eyes: "👀",
      face_with_head_bandage: "🤕",
      face_with_thermometer: "🤒",
      fist_oncoming: "👊",
      factory: "🏭",
      fallen_leaf: "🍂",
      family_man_woman_boy: "👪",
      family_man_boy: "👨&zwj;👦",
      family_man_boy_boy: "👨&zwj;👦&zwj;👦",
      family_man_girl: "👨&zwj;👧",
      family_man_girl_boy: "👨&zwj;👧&zwj;👦",
      family_man_girl_girl: "👨&zwj;👧&zwj;👧",
      family_man_man_boy: "👨&zwj;👨&zwj;👦",
      family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
      family_man_man_girl: "👨&zwj;👨&zwj;👧",
      family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
      family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
      family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
      family_man_woman_girl: "👨&zwj;👩&zwj;👧",
      family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
      family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
      family_woman_boy: "👩&zwj;👦",
      family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
      family_woman_girl: "👩&zwj;👧",
      family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
      family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
      family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
      family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
      family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
      family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
      family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
      fast_forward: "⏩",
      fax: "📠",
      fearful: "😨",
      feet: "🐾",
      female_detective: "🕵️&zwj;♀️",
      ferris_wheel: "🎡",
      ferry: "⛴",
      field_hockey: "🏑",
      file_cabinet: "🗄",
      file_folder: "📁",
      film_projector: "📽",
      film_strip: "🎞",
      fire: "🔥",
      fire_engine: "🚒",
      fireworks: "🎆",
      first_quarter_moon: "🌓",
      first_quarter_moon_with_face: "🌛",
      fish: "🐟",
      fish_cake: "🍥",
      fishing_pole_and_fish: "🎣",
      fist_raised: "✊",
      fist_left: "🤛",
      fist_right: "🤜",
      flags: "🎏",
      flashlight: "🔦",
      fleur_de_lis: "⚜️",
      flight_arrival: "🛬",
      flight_departure: "🛫",
      floppy_disk: "💾",
      flower_playing_cards: "🎴",
      flushed: "😳",
      fog: "🌫",
      foggy: "🌁",
      football: "🏈",
      footprints: "👣",
      fork_and_knife: "🍴",
      fountain: "⛲️",
      fountain_pen: "🖋",
      four_leaf_clover: "🍀",
      fox_face: "🦊",
      framed_picture: "🖼",
      free: "🆓",
      fried_egg: "🍳",
      fried_shrimp: "🍤",
      fries: "🍟",
      frog: "🐸",
      frowning: "😦",
      frowning_face: "☹️",
      frowning_man: "🙍&zwj;♂️",
      frowning_woman: "🙍",
      middle_finger: "🖕",
      fuelpump: "⛽️",
      full_moon: "🌕",
      full_moon_with_face: "🌝",
      funeral_urn: "⚱️",
      game_die: "🎲",
      gear: "⚙️",
      gem: "💎",
      gemini: "♊️",
      ghost: "👻",
      gift: "🎁",
      gift_heart: "💝",
      girl: "👧",
      globe_with_meridians: "🌐",
      goal_net: "🥅",
      goat: "🐐",
      golf: "⛳️",
      golfing_man: "🏌️",
      golfing_woman: "🏌️&zwj;♀️",
      gorilla: "🦍",
      grapes: "🍇",
      green_apple: "🍏",
      green_book: "📗",
      green_heart: "💚",
      green_salad: "🥗",
      grey_exclamation: "❕",
      grey_question: "❔",
      grimacing: "😬",
      grin: "😁",
      grinning: "😀",
      guardsman: "💂",
      guardswoman: "💂&zwj;♀️",
      guitar: "🎸",
      gun: "🔫",
      haircut_woman: "💇",
      haircut_man: "💇&zwj;♂️",
      hamburger: "🍔",
      hammer: "🔨",
      hammer_and_pick: "⚒",
      hammer_and_wrench: "🛠",
      hamster: "🐹",
      hand: "✋",
      handbag: "👜",
      handshake: "🤝",
      hankey: "💩",
      hatched_chick: "🐥",
      hatching_chick: "🐣",
      headphones: "🎧",
      hear_no_evil: "🙉",
      heart: "❤️",
      heart_decoration: "💟",
      heart_eyes: "😍",
      heart_eyes_cat: "😻",
      heartbeat: "💓",
      heartpulse: "💗",
      hearts: "♥️",
      heavy_check_mark: "✔️",
      heavy_division_sign: "➗",
      heavy_dollar_sign: "💲",
      heavy_heart_exclamation: "❣️",
      heavy_minus_sign: "➖",
      heavy_multiplication_x: "✖️",
      heavy_plus_sign: "➕",
      helicopter: "🚁",
      herb: "🌿",
      hibiscus: "🌺",
      high_brightness: "🔆",
      high_heel: "👠",
      hocho: "🔪",
      hole: "🕳",
      honey_pot: "🍯",
      horse: "🐴",
      horse_racing: "🏇",
      hospital: "🏥",
      hot_pepper: "🌶",
      hotdog: "🌭",
      hotel: "🏨",
      hotsprings: "♨️",
      hourglass: "⌛️",
      hourglass_flowing_sand: "⏳",
      house: "🏠",
      house_with_garden: "🏡",
      houses: "🏘",
      hugs: "🤗",
      hushed: "😯",
      ice_cream: "🍨",
      ice_hockey: "🏒",
      ice_skate: "⛸",
      icecream: "🍦",
      id: "🆔",
      ideograph_advantage: "🉐",
      imp: "👿",
      inbox_tray: "📥",
      incoming_envelope: "📨",
      tipping_hand_woman: "💁",
      information_source: "ℹ️",
      innocent: "😇",
      interrobang: "⁉️",
      iphone: "📱",
      izakaya_lantern: "🏮",
      jack_o_lantern: "🎃",
      japan: "🗾",
      japanese_castle: "🏯",
      japanese_goblin: "👺",
      japanese_ogre: "👹",
      jeans: "👖",
      joy: "😂",
      joy_cat: "😹",
      joystick: "🕹",
      kaaba: "🕋",
      key: "🔑",
      keyboard: "⌨️",
      keycap_ten: "🔟",
      kick_scooter: "🛴",
      kimono: "👘",
      kiss: "💋",
      kissing: "😗",
      kissing_cat: "😽",
      kissing_closed_eyes: "😚",
      kissing_heart: "😘",
      kissing_smiling_eyes: "😙",
      kiwi_fruit: "🥝",
      koala: "🐨",
      koko: "🈁",
      label: "🏷",
      large_blue_circle: "🔵",
      large_blue_diamond: "🔷",
      large_orange_diamond: "🔶",
      last_quarter_moon: "🌗",
      last_quarter_moon_with_face: "🌜",
      latin_cross: "✝️",
      laughing: "😆",
      leaves: "🍃",
      ledger: "📒",
      left_luggage: "🛅",
      left_right_arrow: "↔️",
      leftwards_arrow_with_hook: "↩️",
      lemon: "🍋",
      leo: "♌️",
      leopard: "🐆",
      level_slider: "🎚",
      libra: "♎️",
      light_rail: "🚈",
      link: "🔗",
      lion: "🦁",
      lips: "👄",
      lipstick: "💄",
      lizard: "🦎",
      lock: "🔒",
      lock_with_ink_pen: "🔏",
      lollipop: "🍭",
      loop: "➿",
      loud_sound: "🔊",
      loudspeaker: "📢",
      love_hotel: "🏩",
      love_letter: "💌",
      low_brightness: "🔅",
      lying_face: "🤥",
      m: "Ⓜ️",
      mag: "🔍",
      mag_right: "🔎",
      mahjong: "🀄️",
      mailbox: "📫",
      mailbox_closed: "📪",
      mailbox_with_mail: "📬",
      mailbox_with_no_mail: "📭",
      man: "👨",
      man_artist: "👨&zwj;🎨",
      man_astronaut: "👨&zwj;🚀",
      man_cartwheeling: "🤸&zwj;♂️",
      man_cook: "👨&zwj;🍳",
      man_dancing: "🕺",
      man_facepalming: "🤦&zwj;♂️",
      man_factory_worker: "👨&zwj;🏭",
      man_farmer: "👨&zwj;🌾",
      man_firefighter: "👨&zwj;🚒",
      man_health_worker: "👨&zwj;⚕️",
      man_in_tuxedo: "🤵",
      man_judge: "👨&zwj;⚖️",
      man_juggling: "🤹&zwj;♂️",
      man_mechanic: "👨&zwj;🔧",
      man_office_worker: "👨&zwj;💼",
      man_pilot: "👨&zwj;✈️",
      man_playing_handball: "🤾&zwj;♂️",
      man_playing_water_polo: "🤽&zwj;♂️",
      man_scientist: "👨&zwj;🔬",
      man_shrugging: "🤷&zwj;♂️",
      man_singer: "👨&zwj;🎤",
      man_student: "👨&zwj;🎓",
      man_teacher: "👨&zwj;🏫",
      man_technologist: "👨&zwj;💻",
      man_with_gua_pi_mao: "👲",
      man_with_turban: "👳",
      tangerine: "🍊",
      mans_shoe: "👞",
      mantelpiece_clock: "🕰",
      maple_leaf: "🍁",
      martial_arts_uniform: "🥋",
      mask: "😷",
      massage_woman: "💆",
      massage_man: "💆&zwj;♂️",
      meat_on_bone: "🍖",
      medal_military: "🎖",
      medal_sports: "🏅",
      mega: "📣",
      melon: "🍈",
      memo: "📝",
      men_wrestling: "🤼&zwj;♂️",
      menorah: "🕎",
      mens: "🚹",
      metal: "🤘",
      metro: "🚇",
      microphone: "🎤",
      microscope: "🔬",
      milk_glass: "🥛",
      milky_way: "🌌",
      minibus: "🚐",
      minidisc: "💽",
      mobile_phone_off: "📴",
      money_mouth_face: "🤑",
      money_with_wings: "💸",
      moneybag: "💰",
      monkey: "🐒",
      monkey_face: "🐵",
      monorail: "🚝",
      moon: "🌔",
      mortar_board: "🎓",
      mosque: "🕌",
      motor_boat: "🛥",
      motor_scooter: "🛵",
      motorcycle: "🏍",
      motorway: "🛣",
      mount_fuji: "🗻",
      mountain: "⛰",
      mountain_biking_man: "🚵",
      mountain_biking_woman: "🚵&zwj;♀️",
      mountain_cableway: "🚠",
      mountain_railway: "🚞",
      mountain_snow: "🏔",
      mouse: "🐭",
      mouse2: "🐁",
      movie_camera: "🎥",
      moyai: "🗿",
      mrs_claus: "🤶",
      muscle: "💪",
      mushroom: "🍄",
      musical_keyboard: "🎹",
      musical_note: "🎵",
      musical_score: "🎼",
      mute: "🔇",
      nail_care: "💅",
      name_badge: "📛",
      national_park: "🏞",
      nauseated_face: "🤢",
      necktie: "👔",
      negative_squared_cross_mark: "❎",
      nerd_face: "🤓",
      neutral_face: "😐",
      new: "🆕",
      new_moon: "🌑",
      new_moon_with_face: "🌚",
      newspaper: "📰",
      newspaper_roll: "🗞",
      next_track_button: "⏭",
      ng: "🆖",
      no_good_man: "🙅&zwj;♂️",
      no_good_woman: "🙅",
      night_with_stars: "🌃",
      no_bell: "🔕",
      no_bicycles: "🚳",
      no_entry: "⛔️",
      no_entry_sign: "🚫",
      no_mobile_phones: "📵",
      no_mouth: "😶",
      no_pedestrians: "🚷",
      no_smoking: "🚭",
      "non-potable_water": "🚱",
      nose: "👃",
      notebook: "📓",
      notebook_with_decorative_cover: "📔",
      notes: "🎶",
      nut_and_bolt: "🔩",
      o: "⭕️",
      o2: "🅾️",
      ocean: "🌊",
      octopus: "🐙",
      oden: "🍢",
      office: "🏢",
      oil_drum: "🛢",
      ok: "🆗",
      ok_hand: "👌",
      ok_man: "🙆&zwj;♂️",
      ok_woman: "🙆",
      old_key: "🗝",
      older_man: "👴",
      older_woman: "👵",
      om: "🕉",
      on: "🔛",
      oncoming_automobile: "🚘",
      oncoming_bus: "🚍",
      oncoming_police_car: "🚔",
      oncoming_taxi: "🚖",
      open_file_folder: "📂",
      open_hands: "👐",
      open_mouth: "😮",
      open_umbrella: "☂️",
      ophiuchus: "⛎",
      orange_book: "📙",
      orthodox_cross: "☦️",
      outbox_tray: "📤",
      owl: "🦉",
      ox: "🐂",
      package: "📦",
      page_facing_up: "📄",
      page_with_curl: "📃",
      pager: "📟",
      paintbrush: "🖌",
      palm_tree: "🌴",
      pancakes: "🥞",
      panda_face: "🐼",
      paperclip: "📎",
      paperclips: "🖇",
      parasol_on_ground: "⛱",
      parking: "🅿️",
      part_alternation_mark: "〽️",
      partly_sunny: "⛅️",
      passenger_ship: "🛳",
      passport_control: "🛂",
      pause_button: "⏸",
      peace_symbol: "☮️",
      peach: "🍑",
      peanuts: "🥜",
      pear: "🍐",
      pen: "🖊",
      pencil2: "✏️",
      penguin: "🐧",
      pensive: "😔",
      performing_arts: "🎭",
      persevere: "😣",
      person_fencing: "🤺",
      pouting_woman: "🙎",
      phone: "☎️",
      pick: "⛏",
      pig: "🐷",
      pig2: "🐖",
      pig_nose: "🐽",
      pill: "💊",
      pineapple: "🍍",
      ping_pong: "🏓",
      pisces: "♓️",
      pizza: "🍕",
      place_of_worship: "🛐",
      plate_with_cutlery: "🍽",
      play_or_pause_button: "⏯",
      point_down: "👇",
      point_left: "👈",
      point_right: "👉",
      point_up: "☝️",
      point_up_2: "👆",
      police_car: "🚓",
      policewoman: "👮&zwj;♀️",
      poodle: "🐩",
      popcorn: "🍿",
      post_office: "🏣",
      postal_horn: "📯",
      postbox: "📮",
      potable_water: "🚰",
      potato: "🥔",
      pouch: "👝",
      poultry_leg: "🍗",
      pound: "💷",
      rage: "😡",
      pouting_cat: "😾",
      pouting_man: "🙎&zwj;♂️",
      pray: "🙏",
      prayer_beads: "📿",
      pregnant_woman: "🤰",
      previous_track_button: "⏮",
      prince: "🤴",
      princess: "👸",
      printer: "🖨",
      purple_heart: "💜",
      purse: "👛",
      pushpin: "📌",
      put_litter_in_its_place: "🚮",
      question: "❓",
      rabbit: "🐰",
      rabbit2: "🐇",
      racehorse: "🐎",
      racing_car: "🏎",
      radio: "📻",
      radio_button: "🔘",
      radioactive: "☢️",
      railway_car: "🚃",
      railway_track: "🛤",
      rainbow: "🌈",
      rainbow_flag: "🏳️&zwj;🌈",
      raised_back_of_hand: "🤚",
      raised_hand_with_fingers_splayed: "🖐",
      raised_hands: "🙌",
      raising_hand_woman: "🙋",
      raising_hand_man: "🙋&zwj;♂️",
      ram: "🐏",
      ramen: "🍜",
      rat: "🐀",
      record_button: "⏺",
      recycle: "♻️",
      red_circle: "🔴",
      registered: "®️",
      relaxed: "☺️",
      relieved: "😌",
      reminder_ribbon: "🎗",
      repeat: "🔁",
      repeat_one: "🔂",
      rescue_worker_helmet: "⛑",
      restroom: "🚻",
      revolving_hearts: "💞",
      rewind: "⏪",
      rhinoceros: "🦏",
      ribbon: "🎀",
      rice: "🍚",
      rice_ball: "🍙",
      rice_cracker: "🍘",
      rice_scene: "🎑",
      right_anger_bubble: "🗯",
      ring: "💍",
      robot: "🤖",
      rocket: "🚀",
      rofl: "🤣",
      roll_eyes: "🙄",
      roller_coaster: "🎢",
      rooster: "🐓",
      rose: "🌹",
      rosette: "🏵",
      rotating_light: "🚨",
      round_pushpin: "📍",
      rowing_man: "🚣",
      rowing_woman: "🚣&zwj;♀️",
      rugby_football: "🏉",
      running_man: "🏃",
      running_shirt_with_sash: "🎽",
      running_woman: "🏃&zwj;♀️",
      sa: "🈂️",
      sagittarius: "♐️",
      sake: "🍶",
      sandal: "👡",
      santa: "🎅",
      satellite: "📡",
      saxophone: "🎷",
      school: "🏫",
      school_satchel: "🎒",
      scissors: "✂️",
      scorpion: "🦂",
      scorpius: "♏️",
      scream: "😱",
      scream_cat: "🙀",
      scroll: "📜",
      seat: "💺",
      secret: "㊙️",
      see_no_evil: "🙈",
      seedling: "🌱",
      selfie: "🤳",
      shallow_pan_of_food: "🥘",
      shamrock: "☘️",
      shark: "🦈",
      shaved_ice: "🍧",
      sheep: "🐑",
      shell: "🐚",
      shield: "🛡",
      shinto_shrine: "⛩",
      ship: "🚢",
      shirt: "👕",
      shopping: "🛍",
      shopping_cart: "🛒",
      shower: "🚿",
      shrimp: "🦐",
      signal_strength: "📶",
      six_pointed_star: "🔯",
      ski: "🎿",
      skier: "⛷",
      skull: "💀",
      skull_and_crossbones: "☠️",
      sleeping: "😴",
      sleeping_bed: "🛌",
      sleepy: "😪",
      slightly_frowning_face: "🙁",
      slightly_smiling_face: "🙂",
      slot_machine: "🎰",
      small_airplane: "🛩",
      small_blue_diamond: "🔹",
      small_orange_diamond: "🔸",
      small_red_triangle: "🔺",
      small_red_triangle_down: "🔻",
      smile: "😄",
      smile_cat: "😸",
      smiley: "😃",
      smiley_cat: "😺",
      smiling_imp: "😈",
      smirk: "😏",
      smirk_cat: "😼",
      smoking: "🚬",
      snail: "🐌",
      snake: "🐍",
      sneezing_face: "🤧",
      snowboarder: "🏂",
      snowflake: "❄️",
      snowman: "⛄️",
      snowman_with_snow: "☃️",
      sob: "😭",
      soccer: "⚽️",
      soon: "🔜",
      sos: "🆘",
      sound: "🔉",
      space_invader: "👾",
      spades: "♠️",
      spaghetti: "🍝",
      sparkle: "❇️",
      sparkler: "🎇",
      sparkles: "✨",
      sparkling_heart: "💖",
      speak_no_evil: "🙊",
      speaker: "🔈",
      speaking_head: "🗣",
      speech_balloon: "💬",
      speedboat: "🚤",
      spider: "🕷",
      spider_web: "🕸",
      spiral_calendar: "🗓",
      spiral_notepad: "🗒",
      spoon: "🥄",
      squid: "🦑",
      stadium: "🏟",
      star: "⭐️",
      star2: "🌟",
      star_and_crescent: "☪️",
      star_of_david: "✡️",
      stars: "🌠",
      station: "🚉",
      statue_of_liberty: "🗽",
      steam_locomotive: "🚂",
      stew: "🍲",
      stop_button: "⏹",
      stop_sign: "🛑",
      stopwatch: "⏱",
      straight_ruler: "📏",
      strawberry: "🍓",
      stuck_out_tongue: "😛",
      stuck_out_tongue_closed_eyes: "😝",
      stuck_out_tongue_winking_eye: "😜",
      studio_microphone: "🎙",
      stuffed_flatbread: "🥙",
      sun_behind_large_cloud: "🌥",
      sun_behind_rain_cloud: "🌦",
      sun_behind_small_cloud: "🌤",
      sun_with_face: "🌞",
      sunflower: "🌻",
      sunglasses: "😎",
      sunny: "☀️",
      sunrise: "🌅",
      sunrise_over_mountains: "🌄",
      surfing_man: "🏄",
      surfing_woman: "🏄&zwj;♀️",
      sushi: "🍣",
      suspension_railway: "🚟",
      sweat: "😓",
      sweat_drops: "💦",
      sweat_smile: "😅",
      sweet_potato: "🍠",
      swimming_man: "🏊",
      swimming_woman: "🏊&zwj;♀️",
      symbols: "🔣",
      synagogue: "🕍",
      syringe: "💉",
      taco: "🌮",
      tada: "🎉",
      tanabata_tree: "🎋",
      taurus: "♉️",
      taxi: "🚕",
      tea: "🍵",
      telephone_receiver: "📞",
      telescope: "🔭",
      tennis: "🎾",
      tent: "⛺️",
      thermometer: "🌡",
      thinking: "🤔",
      thought_balloon: "💭",
      ticket: "🎫",
      tickets: "🎟",
      tiger: "🐯",
      tiger2: "🐅",
      timer_clock: "⏲",
      tipping_hand_man: "💁&zwj;♂️",
      tired_face: "😫",
      tm: "™️",
      toilet: "🚽",
      tokyo_tower: "🗼",
      tomato: "🍅",
      tongue: "👅",
      top: "🔝",
      tophat: "🎩",
      tornado: "🌪",
      trackball: "🖲",
      tractor: "🚜",
      traffic_light: "🚥",
      train: "🚋",
      train2: "🚆",
      tram: "🚊",
      triangular_flag_on_post: "🚩",
      triangular_ruler: "📐",
      trident: "🔱",
      triumph: "😤",
      trolleybus: "🚎",
      trophy: "🏆",
      tropical_drink: "🍹",
      tropical_fish: "🐠",
      truck: "🚚",
      trumpet: "🎺",
      tulip: "🌷",
      tumbler_glass: "🥃",
      turkey: "🦃",
      turtle: "🐢",
      tv: "📺",
      twisted_rightwards_arrows: "🔀",
      two_hearts: "💕",
      two_men_holding_hands: "👬",
      two_women_holding_hands: "👭",
      u5272: "🈹",
      u5408: "🈴",
      u55b6: "🈺",
      u6307: "🈯️",
      u6708: "🈷️",
      u6709: "🈶",
      u6e80: "🈵",
      u7121: "🈚️",
      u7533: "🈸",
      u7981: "🈲",
      u7a7a: "🈳",
      umbrella: "☔️",
      unamused: "😒",
      underage: "🔞",
      unicorn: "🦄",
      unlock: "🔓",
      up: "🆙",
      upside_down_face: "🙃",
      v: "✌️",
      vertical_traffic_light: "🚦",
      vhs: "📼",
      vibration_mode: "📳",
      video_camera: "📹",
      video_game: "🎮",
      violin: "🎻",
      virgo: "♍️",
      volcano: "🌋",
      volleyball: "🏐",
      vs: "🆚",
      vulcan_salute: "🖖",
      walking_man: "🚶",
      walking_woman: "🚶&zwj;♀️",
      waning_crescent_moon: "🌘",
      waning_gibbous_moon: "🌖",
      warning: "⚠️",
      wastebasket: "🗑",
      watch: "⌚️",
      water_buffalo: "🐃",
      watermelon: "🍉",
      wave: "👋",
      wavy_dash: "〰️",
      waxing_crescent_moon: "🌒",
      wc: "🚾",
      weary: "😩",
      wedding: "💒",
      weight_lifting_man: "🏋️",
      weight_lifting_woman: "🏋️&zwj;♀️",
      whale: "🐳",
      whale2: "🐋",
      wheel_of_dharma: "☸️",
      wheelchair: "♿️",
      white_check_mark: "✅",
      white_circle: "⚪️",
      white_flag: "🏳️",
      white_flower: "💮",
      white_large_square: "⬜️",
      white_medium_small_square: "◽️",
      white_medium_square: "◻️",
      white_small_square: "▫️",
      white_square_button: "🔳",
      wilted_flower: "🥀",
      wind_chime: "🎐",
      wind_face: "🌬",
      wine_glass: "🍷",
      wink: "😉",
      wolf: "🐺",
      woman: "👩",
      woman_artist: "👩&zwj;🎨",
      woman_astronaut: "👩&zwj;🚀",
      woman_cartwheeling: "🤸&zwj;♀️",
      woman_cook: "👩&zwj;🍳",
      woman_facepalming: "🤦&zwj;♀️",
      woman_factory_worker: "👩&zwj;🏭",
      woman_farmer: "👩&zwj;🌾",
      woman_firefighter: "👩&zwj;🚒",
      woman_health_worker: "👩&zwj;⚕️",
      woman_judge: "👩&zwj;⚖️",
      woman_juggling: "🤹&zwj;♀️",
      woman_mechanic: "👩&zwj;🔧",
      woman_office_worker: "👩&zwj;💼",
      woman_pilot: "👩&zwj;✈️",
      woman_playing_handball: "🤾&zwj;♀️",
      woman_playing_water_polo: "🤽&zwj;♀️",
      woman_scientist: "👩&zwj;🔬",
      woman_shrugging: "🤷&zwj;♀️",
      woman_singer: "👩&zwj;🎤",
      woman_student: "👩&zwj;🎓",
      woman_teacher: "👩&zwj;🏫",
      woman_technologist: "👩&zwj;💻",
      woman_with_turban: "👳&zwj;♀️",
      womans_clothes: "👚",
      womans_hat: "👒",
      women_wrestling: "🤼&zwj;♀️",
      womens: "🚺",
      world_map: "🗺",
      worried: "😟",
      wrench: "🔧",
      writing_hand: "✍️",
      x: "❌",
      yellow_heart: "💛",
      yen: "💴",
      yin_yang: "☯️",
      yum: "😋",
      zap: "⚡️",
      zipper_mouth_face: "🤐",
      zzz: "💤",
      /* special emojis :P */
      octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
      showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
    }, a.Converter = function(r) {
      var s = {}, o = [], c = [], u = {}, m = b, p = {
        parsed: {},
        raw: "",
        format: ""
      };
      j();
      function j() {
        r = r || {};
        for (var g in f)
          f.hasOwnProperty(g) && (s[g] = f[g]);
        if (typeof r == "object")
          for (var H in r)
            r.hasOwnProperty(H) && (s[H] = r[H]);
        else
          throw Error("Converter expects the passed parameter to be an object, but " + typeof r + " was passed instead.");
        s.extensions && a.helper.forEach(s.extensions, V);
      }
      function V(g, H) {
        if (H = H || null, a.helper.isString(g))
          if (g = a.helper.stdExtName(g), H = g, a.extensions[g]) {
            console.warn("DEPRECATION WARNING: " + g + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), F(a.extensions[g], g);
            return;
          } else if (!a.helper.isUndefined(l[g]))
            g = l[g];
          else
            throw Error('Extension "' + g + '" could not be loaded. It was either not found or is not a valid extension.');
        typeof g == "function" && (g = g()), a.helper.isArray(g) || (g = [g]);
        var W = _(g, H);
        if (!W.valid)
          throw Error(W.error);
        for (var J = 0; J < g.length; ++J) {
          switch (g[J].type) {
            case "lang":
              o.push(g[J]);
              break;
            case "output":
              c.push(g[J]);
              break;
          }
          if (g[J].hasOwnProperty("listeners"))
            for (var U in g[J].listeners)
              g[J].listeners.hasOwnProperty(U) && D(U, g[J].listeners[U]);
        }
      }
      function F(g, H) {
        typeof g == "function" && (g = g(new a.Converter())), a.helper.isArray(g) || (g = [g]);
        var W = _(g, H);
        if (!W.valid)
          throw Error(W.error);
        for (var J = 0; J < g.length; ++J)
          switch (g[J].type) {
            case "lang":
              o.push(g[J]);
              break;
            case "output":
              c.push(g[J]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!");
          }
      }
      function D(g, H) {
        if (!a.helper.isString(g))
          throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof g + " given");
        if (typeof H != "function")
          throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof H + " given");
        u.hasOwnProperty(g) || (u[g] = []), u[g].push(H);
      }
      function q(g) {
        var H = g.match(/^\s*/)[0].length, W = new RegExp("^\\s{0," + H + "}", "gm");
        return g.replace(W, "");
      }
      this._dispatch = function(g, H, W, J) {
        if (u.hasOwnProperty(g))
          for (var U = 0; U < u[g].length; ++U) {
            var P = u[g][U](g, H, this, W, J);
            P && typeof P < "u" && (H = P);
          }
        return H;
      }, this.listen = function(g, H) {
        return D(g, H), this;
      }, this.makeHtml = function(g) {
        if (!g)
          return g;
        var H = {
          gHtmlBlocks: [],
          gHtmlMdBlocks: [],
          gHtmlSpans: [],
          gUrls: {},
          gTitles: {},
          gDimensions: {},
          gListLevel: 0,
          hashLinkCounts: {},
          langExtensions: o,
          outputModifiers: c,
          converter: this,
          ghCodeBlocks: [],
          metadata: {
            parsed: {},
            raw: "",
            format: ""
          }
        };
        return g = g.replace(/¨/g, "¨T"), g = g.replace(/\$/g, "¨D"), g = g.replace(/\r\n/g, `
`), g = g.replace(/\r/g, `
`), g = g.replace(/\u00A0/g, "&nbsp;"), s.smartIndentationFix && (g = q(g)), g = `

` + g + `

`, g = a.subParser("detab")(g, s, H), g = g.replace(/^[ \t]+$/mg, ""), a.helper.forEach(o, function(W) {
          g = a.subParser("runExtension")(W, g, s, H);
        }), g = a.subParser("metadata")(g, s, H), g = a.subParser("hashPreCodeTags")(g, s, H), g = a.subParser("githubCodeBlocks")(g, s, H), g = a.subParser("hashHTMLBlocks")(g, s, H), g = a.subParser("hashCodeTags")(g, s, H), g = a.subParser("stripLinkDefinitions")(g, s, H), g = a.subParser("blockGamut")(g, s, H), g = a.subParser("unhashHTMLSpans")(g, s, H), g = a.subParser("unescapeSpecialChars")(g, s, H), g = g.replace(/¨D/g, "$$"), g = g.replace(/¨T/g, "¨"), g = a.subParser("completeHTMLDocument")(g, s, H), a.helper.forEach(c, function(W) {
          g = a.subParser("runExtension")(W, g, s, H);
        }), p = H.metadata, g;
      }, this.makeMarkdown = this.makeMd = function(g, H) {
        if (g = g.replace(/\r\n/g, `
`), g = g.replace(/\r/g, `
`), g = g.replace(/>[ \t]+</, ">¨NBSP;<"), !H)
          if (window && window.document)
            H = window.document;
          else
            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        var W = H.createElement("div");
        W.innerHTML = g;
        var J = {
          preList: d(W)
        };
        N(W);
        for (var U = W.childNodes, P = "", B = 0; B < U.length; B++)
          P += a.subParser("makeMarkdown.node")(U[B], J);
        function N(v) {
          for (var I = 0; I < v.childNodes.length; ++I) {
            var G = v.childNodes[I];
            G.nodeType === 3 ? !/\S/.test(G.nodeValue) && !/^[ ]+$/.test(G.nodeValue) ? (v.removeChild(G), --I) : (G.nodeValue = G.nodeValue.split(`
`).join(" "), G.nodeValue = G.nodeValue.replace(/(\s)+/g, "$1")) : G.nodeType === 1 && N(G);
          }
        }
        function d(v) {
          for (var I = v.querySelectorAll("pre"), G = [], K = 0; K < I.length; ++K)
            if (I[K].childElementCount === 1 && I[K].firstChild.tagName.toLowerCase() === "code") {
              var re = I[K].firstChild.innerHTML.trim(), ne = I[K].firstChild.getAttribute("data-language") || "";
              if (ne === "")
                for (var fe = I[K].firstChild.className.split(" "), xe = 0; xe < fe.length; ++xe) {
                  var Xe = fe[xe].match(/^language-(.+)$/);
                  if (Xe !== null) {
                    ne = Xe[1];
                    break;
                  }
                }
              re = a.helper.unescapeHTMLEntities(re), G.push(re), I[K].outerHTML = '<precode language="' + ne + '" precodenum="' + K.toString() + '"></precode>';
            } else
              G.push(I[K].innerHTML), I[K].innerHTML = "", I[K].setAttribute("prenum", K.toString());
          return G;
        }
        return P;
      }, this.setOption = function(g, H) {
        s[g] = H;
      }, this.getOption = function(g) {
        return s[g];
      }, this.getOptions = function() {
        return s;
      }, this.addExtension = function(g, H) {
        H = H || null, V(g, H);
      }, this.useExtension = function(g) {
        V(g);
      }, this.setFlavor = function(g) {
        if (!k.hasOwnProperty(g))
          throw Error(g + " flavor was not found");
        var H = k[g];
        m = g;
        for (var W in H)
          H.hasOwnProperty(W) && (s[W] = H[W]);
      }, this.getFlavor = function() {
        return m;
      }, this.removeExtension = function(g) {
        a.helper.isArray(g) || (g = [g]);
        for (var H = 0; H < g.length; ++H) {
          for (var W = g[H], J = 0; J < o.length; ++J)
            o[J] === W && o.splice(J, 1);
          for (var U = 0; U < c.length; ++U)
            c[U] === W && c.splice(U, 1);
        }
      }, this.getAllExtensions = function() {
        return {
          language: o,
          output: c
        };
      }, this.getMetadata = function(g) {
        return g ? p.raw : p.parsed;
      }, this.getMetadataFormat = function() {
        return p.format;
      }, this._setMetadataPair = function(g, H) {
        p.parsed[g] = H;
      }, this._setMetadataFormat = function(g) {
        p.format = g;
      }, this._setMetadataRaw = function(g) {
        p.raw = g;
      };
    }, a.subParser("anchors", function(r, s, o) {
      r = o.converter._dispatch("anchors.before", r, s, o);
      var c = function(u, m, p, j, V, F, D) {
        if (a.helper.isUndefined(D) && (D = ""), p = p.toLowerCase(), u.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          j = "";
        else if (!j)
          if (p || (p = m.toLowerCase().replace(/ ?\n/g, " ")), j = "#" + p, !a.helper.isUndefined(o.gUrls[p]))
            j = o.gUrls[p], a.helper.isUndefined(o.gTitles[p]) || (D = o.gTitles[p]);
          else
            return u;
        j = j.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
        var q = '<a href="' + j + '"';
        return D !== "" && D !== null && (D = D.replace(/"/g, "&quot;"), D = D.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), q += ' title="' + D + '"'), s.openLinksInNewWindow && !/^#/.test(j) && (q += ' rel="noopener noreferrer" target="¨E95Eblank"'), q += ">" + m + "</a>", q;
      };
      return r = r.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, c), r = r.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        c
      ), r = r.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        c
      ), r = r.replace(/\[([^\[\]]+)]()()()()()/g, c), s.ghMentions && (r = r.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(u, m, p, j, V) {
        if (p === "\\")
          return m + j;
        if (!a.helper.isString(s.ghMentionsLink))
          throw new Error("ghMentionsLink option must be a string");
        var F = s.ghMentionsLink.replace(/\{u}/g, V), D = "";
        return s.openLinksInNewWindow && (D = ' rel="noopener noreferrer" target="¨E95Eblank"'), m + '<a href="' + F + '"' + D + ">" + j + "</a>";
      })), r = o.converter._dispatch("anchors.after", r, s, o), r;
    });
    var A = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, M = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, O = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, $ = function(r) {
      return function(s, o, c, u, m, p, j) {
        c = c.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
        var V = c, F = "", D = "", q = o || "", g = j || "";
        return /^www\./i.test(c) && (c = c.replace(/^www\./i, "http://www.")), r.excludeTrailingPunctuationFromURLs && p && (F = p), r.openLinksInNewWindow && (D = ' rel="noopener noreferrer" target="¨E95Eblank"'), q + '<a href="' + c + '"' + D + ">" + V + "</a>" + F + g;
      };
    }, T = function(r, s) {
      return function(o, c, u) {
        var m = "mailto:";
        return c = c || "", u = a.subParser("unescapeSpecialChars")(u, r, s), r.encodeEmails ? (m = a.helper.encodeEmailAddress(m + u), u = a.helper.encodeEmailAddress(u)) : m = m + u, c + '<a href="' + m + '">' + u + "</a>";
      };
    };
    a.subParser("autoLinks", function(r, s, o) {
      return r = o.converter._dispatch("autoLinks.before", r, s, o), r = r.replace(O, $(s)), r = r.replace(x, T(s, o)), r = o.converter._dispatch("autoLinks.after", r, s, o), r;
    }), a.subParser("simplifiedAutoLinks", function(r, s, o) {
      return s.simplifiedAutoLink && (r = o.converter._dispatch("simplifiedAutoLinks.before", r, s, o), s.excludeTrailingPunctuationFromURLs ? r = r.replace(M, $(s)) : r = r.replace(A, $(s)), r = r.replace(C, T(s, o)), r = o.converter._dispatch("simplifiedAutoLinks.after", r, s, o)), r;
    }), a.subParser("blockGamut", function(r, s, o) {
      return r = o.converter._dispatch("blockGamut.before", r, s, o), r = a.subParser("blockQuotes")(r, s, o), r = a.subParser("headers")(r, s, o), r = a.subParser("horizontalRule")(r, s, o), r = a.subParser("lists")(r, s, o), r = a.subParser("codeBlocks")(r, s, o), r = a.subParser("tables")(r, s, o), r = a.subParser("hashHTMLBlocks")(r, s, o), r = a.subParser("paragraphs")(r, s, o), r = o.converter._dispatch("blockGamut.after", r, s, o), r;
    }), a.subParser("blockQuotes", function(r, s, o) {
      r = o.converter._dispatch("blockQuotes.before", r, s, o), r = r + `

`;
      var c = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
      return s.splitAdjacentBlockquotes && (c = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), r = r.replace(c, function(u) {
        return u = u.replace(/^[ \t]*>[ \t]?/gm, ""), u = u.replace(/¨0/g, ""), u = u.replace(/^[ \t]+$/gm, ""), u = a.subParser("githubCodeBlocks")(u, s, o), u = a.subParser("blockGamut")(u, s, o), u = u.replace(/(^|\n)/g, "$1  "), u = u.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(m, p) {
          var j = p;
          return j = j.replace(/^  /mg, "¨0"), j = j.replace(/¨0/g, ""), j;
        }), a.subParser("hashBlock")(`<blockquote>
` + u + `
</blockquote>`, s, o);
      }), r = o.converter._dispatch("blockQuotes.after", r, s, o), r;
    }), a.subParser("codeBlocks", function(r, s, o) {
      r = o.converter._dispatch("codeBlocks.before", r, s, o), r += "¨0";
      var c = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
      return r = r.replace(c, function(u, m, p) {
        var j = m, V = p, F = `
`;
        return j = a.subParser("outdent")(j, s, o), j = a.subParser("encodeCode")(j, s, o), j = a.subParser("detab")(j, s, o), j = j.replace(/^\n+/g, ""), j = j.replace(/\n+$/g, ""), s.omitExtraWLInCodeBlocks && (F = ""), j = "<pre><code>" + j + F + "</code></pre>", a.subParser("hashBlock")(j, s, o) + V;
      }), r = r.replace(/¨0/, ""), r = o.converter._dispatch("codeBlocks.after", r, s, o), r;
    }), a.subParser("codeSpans", function(r, s, o) {
      return r = o.converter._dispatch("codeSpans.before", r, s, o), typeof r > "u" && (r = ""), r = r.replace(
        /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
        function(c, u, m, p) {
          var j = p;
          return j = j.replace(/^([ \t]*)/g, ""), j = j.replace(/[ \t]*$/g, ""), j = a.subParser("encodeCode")(j, s, o), j = u + "<code>" + j + "</code>", j = a.subParser("hashHTMLSpans")(j, s, o), j;
        }
      ), r = o.converter._dispatch("codeSpans.after", r, s, o), r;
    }), a.subParser("completeHTMLDocument", function(r, s, o) {
      if (!s.completeHTMLDocument)
        return r;
      r = o.converter._dispatch("completeHTMLDocument.before", r, s, o);
      var c = "html", u = `<!DOCTYPE HTML>
`, m = "", p = `<meta charset="utf-8">
`, j = "", V = "";
      typeof o.metadata.parsed.doctype < "u" && (u = "<!DOCTYPE " + o.metadata.parsed.doctype + `>
`, c = o.metadata.parsed.doctype.toString().toLowerCase(), (c === "html" || c === "html5") && (p = '<meta charset="utf-8">'));
      for (var F in o.metadata.parsed)
        if (o.metadata.parsed.hasOwnProperty(F))
          switch (F.toLowerCase()) {
            case "doctype":
              break;
            case "title":
              m = "<title>" + o.metadata.parsed.title + `</title>
`;
              break;
            case "charset":
              c === "html" || c === "html5" ? p = '<meta charset="' + o.metadata.parsed.charset + `">
` : p = '<meta name="charset" content="' + o.metadata.parsed.charset + `">
`;
              break;
            case "language":
            case "lang":
              j = ' lang="' + o.metadata.parsed[F] + '"', V += '<meta name="' + F + '" content="' + o.metadata.parsed[F] + `">
`;
              break;
            default:
              V += '<meta name="' + F + '" content="' + o.metadata.parsed[F] + `">
`;
          }
      return r = u + "<html" + j + `>
<head>
` + m + p + V + `</head>
<body>
` + r.trim() + `
</body>
</html>`, r = o.converter._dispatch("completeHTMLDocument.after", r, s, o), r;
    }), a.subParser("detab", function(r, s, o) {
      return r = o.converter._dispatch("detab.before", r, s, o), r = r.replace(/\t(?=\t)/g, "    "), r = r.replace(/\t/g, "¨A¨B"), r = r.replace(/¨B(.+?)¨A/g, function(c, u) {
        for (var m = u, p = 4 - m.length % 4, j = 0; j < p; j++)
          m += " ";
        return m;
      }), r = r.replace(/¨A/g, "    "), r = r.replace(/¨B/g, ""), r = o.converter._dispatch("detab.after", r, s, o), r;
    }), a.subParser("ellipsis", function(r, s, o) {
      return s.ellipsis && (r = o.converter._dispatch("ellipsis.before", r, s, o), r = r.replace(/\.\.\./g, "…"), r = o.converter._dispatch("ellipsis.after", r, s, o)), r;
    }), a.subParser("emoji", function(r, s, o) {
      if (!s.emoji)
        return r;
      r = o.converter._dispatch("emoji.before", r, s, o);
      var c = /:([\S]+?):/g;
      return r = r.replace(c, function(u, m) {
        return a.helper.emojis.hasOwnProperty(m) ? a.helper.emojis[m] : u;
      }), r = o.converter._dispatch("emoji.after", r, s, o), r;
    }), a.subParser("encodeAmpsAndAngles", function(r, s, o) {
      return r = o.converter._dispatch("encodeAmpsAndAngles.before", r, s, o), r = r.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), r = r.replace(/<(?![a-z\/?$!])/gi, "&lt;"), r = r.replace(/</g, "&lt;"), r = r.replace(/>/g, "&gt;"), r = o.converter._dispatch("encodeAmpsAndAngles.after", r, s, o), r;
    }), a.subParser("encodeBackslashEscapes", function(r, s, o) {
      return r = o.converter._dispatch("encodeBackslashEscapes.before", r, s, o), r = r.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), r = r.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), r = o.converter._dispatch("encodeBackslashEscapes.after", r, s, o), r;
    }), a.subParser("encodeCode", function(r, s, o) {
      return r = o.converter._dispatch("encodeCode.before", r, s, o), r = r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), r = o.converter._dispatch("encodeCode.after", r, s, o), r;
    }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(r, s, o) {
      r = o.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", r, s, o);
      var c = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, u = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
      return r = r.replace(c, function(m) {
        return m.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
      }), r = r.replace(u, function(m) {
        return m.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
      }), r = o.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", r, s, o), r;
    }), a.subParser("githubCodeBlocks", function(r, s, o) {
      return s.ghCodeBlocks ? (r = o.converter._dispatch("githubCodeBlocks.before", r, s, o), r += "¨0", r = r.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(c, u, m, p) {
        var j = s.omitExtraWLInCodeBlocks ? "" : `
`;
        return p = a.subParser("encodeCode")(p, s, o), p = a.subParser("detab")(p, s, o), p = p.replace(/^\n+/g, ""), p = p.replace(/\n+$/g, ""), p = "<pre><code" + (m ? ' class="' + m + " language-" + m + '"' : "") + ">" + p + j + "</code></pre>", p = a.subParser("hashBlock")(p, s, o), `

¨G` + (o.ghCodeBlocks.push({ text: c, codeblock: p }) - 1) + `G

`;
      }), r = r.replace(/¨0/, ""), o.converter._dispatch("githubCodeBlocks.after", r, s, o)) : r;
    }), a.subParser("hashBlock", function(r, s, o) {
      return r = o.converter._dispatch("hashBlock.before", r, s, o), r = r.replace(/(^\n+|\n+$)/g, ""), r = `

¨K` + (o.gHtmlBlocks.push(r) - 1) + `K

`, r = o.converter._dispatch("hashBlock.after", r, s, o), r;
    }), a.subParser("hashCodeTags", function(r, s, o) {
      r = o.converter._dispatch("hashCodeTags.before", r, s, o);
      var c = function(u, m, p, j) {
        var V = p + a.subParser("encodeCode")(m, s, o) + j;
        return "¨C" + (o.gHtmlSpans.push(V) - 1) + "C";
      };
      return r = a.helper.replaceRecursiveRegExp(r, c, "<code\\b[^>]*>", "</code>", "gim"), r = o.converter._dispatch("hashCodeTags.after", r, s, o), r;
    }), a.subParser("hashElement", function(r, s, o) {
      return function(c, u) {
        var m = u;
        return m = m.replace(/\n\n/g, `
`), m = m.replace(/^\n/, ""), m = m.replace(/\n+$/g, ""), m = `

¨K` + (o.gHtmlBlocks.push(m) - 1) + `K

`, m;
      };
    }), a.subParser("hashHTMLBlocks", function(r, s, o) {
      r = o.converter._dispatch("hashHTMLBlocks.before", r, s, o);
      var c = [
        "pre",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "table",
        "dl",
        "ol",
        "ul",
        "script",
        "noscript",
        "form",
        "fieldset",
        "iframe",
        "math",
        "style",
        "section",
        "header",
        "footer",
        "nav",
        "article",
        "aside",
        "address",
        "audio",
        "canvas",
        "figure",
        "hgroup",
        "output",
        "video",
        "p"
      ], u = function(g, H, W, J) {
        var U = g;
        return W.search(/\bmarkdown\b/) !== -1 && (U = W + o.converter.makeHtml(H) + J), `

¨K` + (o.gHtmlBlocks.push(U) - 1) + `K

`;
      };
      s.backslashEscapesHTMLTags && (r = r.replace(/\\<(\/?[^>]+?)>/g, function(g, H) {
        return "&lt;" + H + "&gt;";
      }));
      for (var m = 0; m < c.length; ++m)
        for (var p, j = new RegExp("^ {0,3}(<" + c[m] + "\\b[^>]*>)", "im"), V = "<" + c[m] + "\\b[^>]*>", F = "</" + c[m] + ">"; (p = a.helper.regexIndexOf(r, j)) !== -1; ) {
          var D = a.helper.splitAtIndex(r, p), q = a.helper.replaceRecursiveRegExp(D[1], u, V, F, "im");
          if (q === D[1])
            break;
          r = D[0].concat(q);
        }
      return r = r.replace(
        /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
        a.subParser("hashElement")(r, s, o)
      ), r = a.helper.replaceRecursiveRegExp(r, function(g) {
        return `

¨K` + (o.gHtmlBlocks.push(g) - 1) + `K

`;
      }, "^ {0,3}<!--", "-->", "gm"), r = r.replace(
        /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
        a.subParser("hashElement")(r, s, o)
      ), r = o.converter._dispatch("hashHTMLBlocks.after", r, s, o), r;
    }), a.subParser("hashHTMLSpans", function(r, s, o) {
      r = o.converter._dispatch("hashHTMLSpans.before", r, s, o);
      function c(u) {
        return "¨C" + (o.gHtmlSpans.push(u) - 1) + "C";
      }
      return r = r.replace(/<[^>]+?\/>/gi, function(u) {
        return c(u);
      }), r = r.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(u) {
        return c(u);
      }), r = r.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(u) {
        return c(u);
      }), r = r.replace(/<[^>]+?>/gi, function(u) {
        return c(u);
      }), r = o.converter._dispatch("hashHTMLSpans.after", r, s, o), r;
    }), a.subParser("unhashHTMLSpans", function(r, s, o) {
      r = o.converter._dispatch("unhashHTMLSpans.before", r, s, o);
      for (var c = 0; c < o.gHtmlSpans.length; ++c) {
        for (var u = o.gHtmlSpans[c], m = 0; /¨C(\d+)C/.test(u); ) {
          var p = RegExp.$1;
          if (u = u.replace("¨C" + p + "C", o.gHtmlSpans[p]), m === 10) {
            console.error("maximum nesting of 10 spans reached!!!");
            break;
          }
          ++m;
        }
        r = r.replace("¨C" + c + "C", u);
      }
      return r = o.converter._dispatch("unhashHTMLSpans.after", r, s, o), r;
    }), a.subParser("hashPreCodeTags", function(r, s, o) {
      r = o.converter._dispatch("hashPreCodeTags.before", r, s, o);
      var c = function(u, m, p, j) {
        var V = p + a.subParser("encodeCode")(m, s, o) + j;
        return `

¨G` + (o.ghCodeBlocks.push({ text: u, codeblock: V }) - 1) + `G

`;
      };
      return r = a.helper.replaceRecursiveRegExp(r, c, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), r = o.converter._dispatch("hashPreCodeTags.after", r, s, o), r;
    }), a.subParser("headers", function(r, s, o) {
      r = o.converter._dispatch("headers.before", r, s, o);
      var c = isNaN(parseInt(s.headerLevelStart)) ? 1 : parseInt(s.headerLevelStart), u = s.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, m = s.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
      r = r.replace(u, function(V, F) {
        var D = a.subParser("spanGamut")(F, s, o), q = s.noHeaderId ? "" : ' id="' + j(F) + '"', g = c, H = "<h" + g + q + ">" + D + "</h" + g + ">";
        return a.subParser("hashBlock")(H, s, o);
      }), r = r.replace(m, function(V, F) {
        var D = a.subParser("spanGamut")(F, s, o), q = s.noHeaderId ? "" : ' id="' + j(F) + '"', g = c + 1, H = "<h" + g + q + ">" + D + "</h" + g + ">";
        return a.subParser("hashBlock")(H, s, o);
      });
      var p = s.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
      r = r.replace(p, function(V, F, D) {
        var q = D;
        s.customizedHeaderId && (q = D.replace(/\s?\{([^{]+?)}\s*$/, ""));
        var g = a.subParser("spanGamut")(q, s, o), H = s.noHeaderId ? "" : ' id="' + j(D) + '"', W = c - 1 + F.length, J = "<h" + W + H + ">" + g + "</h" + W + ">";
        return a.subParser("hashBlock")(J, s, o);
      });
      function j(V) {
        var F, D;
        if (s.customizedHeaderId) {
          var q = V.match(/\{([^{]+?)}\s*$/);
          q && q[1] && (V = q[1]);
        }
        return F = V, a.helper.isString(s.prefixHeaderId) ? D = s.prefixHeaderId : s.prefixHeaderId === !0 ? D = "section-" : D = "", s.rawPrefixHeaderId || (F = D + F), s.ghCompatibleHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : s.rawHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : F = F.replace(/[^\w]/g, "").toLowerCase(), s.rawPrefixHeaderId && (F = D + F), o.hashLinkCounts[F] ? F = F + "-" + o.hashLinkCounts[F]++ : o.hashLinkCounts[F] = 1, F;
      }
      return r = o.converter._dispatch("headers.after", r, s, o), r;
    }), a.subParser("horizontalRule", function(r, s, o) {
      r = o.converter._dispatch("horizontalRule.before", r, s, o);
      var c = a.subParser("hashBlock")("<hr />", s, o);
      return r = r.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, c), r = r.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, c), r = r.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, c), r = o.converter._dispatch("horizontalRule.after", r, s, o), r;
    }), a.subParser("images", function(r, s, o) {
      r = o.converter._dispatch("images.before", r, s, o);
      var c = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, u = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, m = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, p = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, j = /!\[([^\[\]]+)]()()()()()/g;
      function V(D, q, g, H, W, J, U, P) {
        return H = H.replace(/\s/g, ""), F(D, q, g, H, W, J, U, P);
      }
      function F(D, q, g, H, W, J, U, P) {
        var B = o.gUrls, N = o.gTitles, d = o.gDimensions;
        if (g = g.toLowerCase(), P || (P = ""), D.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          H = "";
        else if (H === "" || H === null)
          if ((g === "" || g === null) && (g = q.toLowerCase().replace(/ ?\n/g, " ")), H = "#" + g, !a.helper.isUndefined(B[g]))
            H = B[g], a.helper.isUndefined(N[g]) || (P = N[g]), a.helper.isUndefined(d[g]) || (W = d[g].width, J = d[g].height);
          else
            return D;
        q = q.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), H = H.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
        var v = '<img src="' + H + '" alt="' + q + '"';
        return P && a.helper.isString(P) && (P = P.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), v += ' title="' + P + '"'), W && J && (W = W === "*" ? "auto" : W, J = J === "*" ? "auto" : J, v += ' width="' + W + '"', v += ' height="' + J + '"'), v += " />", v;
      }
      return r = r.replace(p, F), r = r.replace(m, V), r = r.replace(u, F), r = r.replace(c, F), r = r.replace(j, F), r = o.converter._dispatch("images.after", r, s, o), r;
    }), a.subParser("italicsAndBold", function(r, s, o) {
      r = o.converter._dispatch("italicsAndBold.before", r, s, o);
      function c(u, m, p) {
        return m + u + p;
      }
      return s.literalMidWordUnderscores ? (r = r.replace(/\b___(\S[\s\S]*?)___\b/g, function(u, m) {
        return c(m, "<strong><em>", "</em></strong>");
      }), r = r.replace(/\b__(\S[\s\S]*?)__\b/g, function(u, m) {
        return c(m, "<strong>", "</strong>");
      }), r = r.replace(/\b_(\S[\s\S]*?)_\b/g, function(u, m) {
        return c(m, "<em>", "</em>");
      })) : (r = r.replace(/___(\S[\s\S]*?)___/g, function(u, m) {
        return /\S$/.test(m) ? c(m, "<strong><em>", "</em></strong>") : u;
      }), r = r.replace(/__(\S[\s\S]*?)__/g, function(u, m) {
        return /\S$/.test(m) ? c(m, "<strong>", "</strong>") : u;
      }), r = r.replace(/_([^\s_][\s\S]*?)_/g, function(u, m) {
        return /\S$/.test(m) ? c(m, "<em>", "</em>") : u;
      })), s.literalMidWordAsterisks ? (r = r.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(u, m, p) {
        return c(p, m + "<strong><em>", "</em></strong>");
      }), r = r.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(u, m, p) {
        return c(p, m + "<strong>", "</strong>");
      }), r = r.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(u, m, p) {
        return c(p, m + "<em>", "</em>");
      })) : (r = r.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(u, m) {
        return /\S$/.test(m) ? c(m, "<strong><em>", "</em></strong>") : u;
      }), r = r.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(u, m) {
        return /\S$/.test(m) ? c(m, "<strong>", "</strong>") : u;
      }), r = r.replace(/\*([^\s*][\s\S]*?)\*/g, function(u, m) {
        return /\S$/.test(m) ? c(m, "<em>", "</em>") : u;
      })), r = o.converter._dispatch("italicsAndBold.after", r, s, o), r;
    }), a.subParser("lists", function(r, s, o) {
      function c(p, j) {
        o.gListLevel++, p = p.replace(/\n{2,}$/, `
`), p += "¨0";
        var V = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, F = /\n[ \t]*\n(?!¨0)/.test(p);
        return s.disableForced4SpacesIndentedSublists && (V = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), p = p.replace(V, function(D, q, g, H, W, J, U) {
          U = U && U.trim() !== "";
          var P = a.subParser("outdent")(W, s, o), B = "";
          return J && s.tasklists && (B = ' class="task-list-item" style="list-style-type: none;"', P = P.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var N = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            return U && (N += " checked"), N += ">", N;
          })), P = P.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(N) {
            return "¨A" + N;
          }), q || P.search(/\n{2,}/) > -1 ? (P = a.subParser("githubCodeBlocks")(P, s, o), P = a.subParser("blockGamut")(P, s, o)) : (P = a.subParser("lists")(P, s, o), P = P.replace(/\n$/, ""), P = a.subParser("hashHTMLBlocks")(P, s, o), P = P.replace(/\n\n+/g, `

`), F ? P = a.subParser("paragraphs")(P, s, o) : P = a.subParser("spanGamut")(P, s, o)), P = P.replace("¨A", ""), P = "<li" + B + ">" + P + `</li>
`, P;
        }), p = p.replace(/¨0/g, ""), o.gListLevel--, j && (p = p.replace(/\s+$/, "")), p;
      }
      function u(p, j) {
        if (j === "ol") {
          var V = p.match(/^ *(\d+)\./);
          if (V && V[1] !== "1")
            return ' start="' + V[1] + '"';
        }
        return "";
      }
      function m(p, j, V) {
        var F = s.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, D = s.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, q = j === "ul" ? F : D, g = "";
        if (p.search(q) !== -1)
          (function W(J) {
            var U = J.search(q), P = u(p, j);
            U !== -1 ? (g += `

<` + j + P + `>
` + c(J.slice(0, U), !!V) + "</" + j + `>
`, j = j === "ul" ? "ol" : "ul", q = j === "ul" ? F : D, W(J.slice(U))) : g += `

<` + j + P + `>
` + c(J, !!V) + "</" + j + `>
`;
          })(p);
        else {
          var H = u(p, j);
          g = `

<` + j + H + `>
` + c(p, !!V) + "</" + j + `>
`;
        }
        return g;
      }
      return r = o.converter._dispatch("lists.before", r, s, o), r += "¨0", o.gListLevel ? r = r.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(p, j, V) {
          var F = V.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return m(j, F, !0);
        }
      ) : r = r.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(p, j, V, F) {
          var D = F.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return m(V, D, !1);
        }
      ), r = r.replace(/¨0/, ""), r = o.converter._dispatch("lists.after", r, s, o), r;
    }), a.subParser("metadata", function(r, s, o) {
      if (!s.metadata)
        return r;
      r = o.converter._dispatch("metadata.before", r, s, o);
      function c(u) {
        o.metadata.raw = u, u = u.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), u = u.replace(/\n {4}/g, " "), u.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(m, p, j) {
          return o.metadata.parsed[p] = j, "";
        });
      }
      return r = r.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(u, m, p) {
        return c(p), "¨M";
      }), r = r.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(u, m, p) {
        return m && (o.metadata.format = m), c(p), "¨M";
      }), r = r.replace(/¨M/g, ""), r = o.converter._dispatch("metadata.after", r, s, o), r;
    }), a.subParser("outdent", function(r, s, o) {
      return r = o.converter._dispatch("outdent.before", r, s, o), r = r.replace(/^(\t|[ ]{1,4})/gm, "¨0"), r = r.replace(/¨0/g, ""), r = o.converter._dispatch("outdent.after", r, s, o), r;
    }), a.subParser("paragraphs", function(r, s, o) {
      r = o.converter._dispatch("paragraphs.before", r, s, o), r = r.replace(/^\n+/g, ""), r = r.replace(/\n+$/g, "");
      for (var c = r.split(/\n{2,}/g), u = [], m = c.length, p = 0; p < m; p++) {
        var j = c[p];
        j.search(/¨(K|G)(\d+)\1/g) >= 0 ? u.push(j) : j.search(/\S/) >= 0 && (j = a.subParser("spanGamut")(j, s, o), j = j.replace(/^([ \t]*)/g, "<p>"), j += "</p>", u.push(j));
      }
      for (m = u.length, p = 0; p < m; p++) {
        for (var V = "", F = u[p], D = !1; /¨(K|G)(\d+)\1/.test(F); ) {
          var q = RegExp.$1, g = RegExp.$2;
          q === "K" ? V = o.gHtmlBlocks[g] : D ? V = a.subParser("encodeCode")(o.ghCodeBlocks[g].text, s, o) : V = o.ghCodeBlocks[g].codeblock, V = V.replace(/\$/g, "$$$$"), F = F.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, V), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(F) && (D = !0);
        }
        u[p] = F;
      }
      return r = u.join(`
`), r = r.replace(/^\n+/g, ""), r = r.replace(/\n+$/g, ""), o.converter._dispatch("paragraphs.after", r, s, o);
    }), a.subParser("runExtension", function(r, s, o, c) {
      if (r.filter)
        s = r.filter(s, c.converter, o);
      else if (r.regex) {
        var u = r.regex;
        u instanceof RegExp || (u = new RegExp(u, "g")), s = s.replace(u, r.replace);
      }
      return s;
    }), a.subParser("spanGamut", function(r, s, o) {
      return r = o.converter._dispatch("spanGamut.before", r, s, o), r = a.subParser("codeSpans")(r, s, o), r = a.subParser("escapeSpecialCharsWithinTagAttributes")(r, s, o), r = a.subParser("encodeBackslashEscapes")(r, s, o), r = a.subParser("images")(r, s, o), r = a.subParser("anchors")(r, s, o), r = a.subParser("autoLinks")(r, s, o), r = a.subParser("simplifiedAutoLinks")(r, s, o), r = a.subParser("emoji")(r, s, o), r = a.subParser("underline")(r, s, o), r = a.subParser("italicsAndBold")(r, s, o), r = a.subParser("strikethrough")(r, s, o), r = a.subParser("ellipsis")(r, s, o), r = a.subParser("hashHTMLSpans")(r, s, o), r = a.subParser("encodeAmpsAndAngles")(r, s, o), s.simpleLineBreaks ? /\n\n¨K/.test(r) || (r = r.replace(/\n+/g, `<br />
`)) : r = r.replace(/  +\n/g, `<br />
`), r = o.converter._dispatch("spanGamut.after", r, s, o), r;
    }), a.subParser("strikethrough", function(r, s, o) {
      function c(u) {
        return s.simplifiedAutoLink && (u = a.subParser("simplifiedAutoLinks")(u, s, o)), "<del>" + u + "</del>";
      }
      return s.strikethrough && (r = o.converter._dispatch("strikethrough.before", r, s, o), r = r.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(u, m) {
        return c(m);
      }), r = o.converter._dispatch("strikethrough.after", r, s, o)), r;
    }), a.subParser("stripLinkDefinitions", function(r, s, o) {
      var c = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, u = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
      r += "¨0";
      var m = function(p, j, V, F, D, q, g) {
        return j = j.toLowerCase(), r.toLowerCase().split(j).length - 1 < 2 ? p : (V.match(/^data:.+?\/.+?;base64,/) ? o.gUrls[j] = V.replace(/\s/g, "") : o.gUrls[j] = a.subParser("encodeAmpsAndAngles")(V, s, o), q ? q + g : (g && (o.gTitles[j] = g.replace(/"|'/g, "&quot;")), s.parseImgDimensions && F && D && (o.gDimensions[j] = {
          width: F,
          height: D
        }), ""));
      };
      return r = r.replace(u, m), r = r.replace(c, m), r = r.replace(/¨0/, ""), r;
    }), a.subParser("tables", function(r, s, o) {
      if (!s.tables)
        return r;
      var c = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, u = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
      function m(D) {
        return /^:[ \t]*--*$/.test(D) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(D) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(D) ? ' style="text-align:center;"' : "";
      }
      function p(D, q) {
        var g = "";
        return D = D.trim(), (s.tablesHeaderId || s.tableHeaderId) && (g = ' id="' + D.replace(/ /g, "_").toLowerCase() + '"'), D = a.subParser("spanGamut")(D, s, o), "<th" + g + q + ">" + D + `</th>
`;
      }
      function j(D, q) {
        var g = a.subParser("spanGamut")(D, s, o);
        return "<td" + q + ">" + g + `</td>
`;
      }
      function V(D, q) {
        for (var g = `<table>
<thead>
<tr>
`, H = D.length, W = 0; W < H; ++W)
          g += D[W];
        for (g += `</tr>
</thead>
<tbody>
`, W = 0; W < q.length; ++W) {
          g += `<tr>
`;
          for (var J = 0; J < H; ++J)
            g += q[W][J];
          g += `</tr>
`;
        }
        return g += `</tbody>
</table>
`, g;
      }
      function F(D) {
        var q, g = D.split(`
`);
        for (q = 0; q < g.length; ++q)
          /^ {0,3}\|/.test(g[q]) && (g[q] = g[q].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(g[q]) && (g[q] = g[q].replace(/\|[ \t]*$/, "")), g[q] = a.subParser("codeSpans")(g[q], s, o);
        var H = g[0].split("|").map(function(v) {
          return v.trim();
        }), W = g[1].split("|").map(function(v) {
          return v.trim();
        }), J = [], U = [], P = [], B = [];
        for (g.shift(), g.shift(), q = 0; q < g.length; ++q)
          g[q].trim() !== "" && J.push(
            g[q].split("|").map(function(v) {
              return v.trim();
            })
          );
        if (H.length < W.length)
          return D;
        for (q = 0; q < W.length; ++q)
          P.push(m(W[q]));
        for (q = 0; q < H.length; ++q)
          a.helper.isUndefined(P[q]) && (P[q] = ""), U.push(p(H[q], P[q]));
        for (q = 0; q < J.length; ++q) {
          for (var N = [], d = 0; d < U.length; ++d)
            a.helper.isUndefined(J[q][d]), N.push(j(J[q][d], P[d]));
          B.push(N);
        }
        return V(U, B);
      }
      return r = o.converter._dispatch("tables.before", r, s, o), r = r.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), r = r.replace(c, F), r = r.replace(u, F), r = o.converter._dispatch("tables.after", r, s, o), r;
    }), a.subParser("underline", function(r, s, o) {
      return s.underline && (r = o.converter._dispatch("underline.before", r, s, o), s.literalMidWordUnderscores ? (r = r.replace(/\b___(\S[\s\S]*?)___\b/g, function(c, u) {
        return "<u>" + u + "</u>";
      }), r = r.replace(/\b__(\S[\s\S]*?)__\b/g, function(c, u) {
        return "<u>" + u + "</u>";
      })) : (r = r.replace(/___(\S[\s\S]*?)___/g, function(c, u) {
        return /\S$/.test(u) ? "<u>" + u + "</u>" : c;
      }), r = r.replace(/__(\S[\s\S]*?)__/g, function(c, u) {
        return /\S$/.test(u) ? "<u>" + u + "</u>" : c;
      })), r = r.replace(/(_)/g, a.helper.escapeCharactersCallback), r = o.converter._dispatch("underline.after", r, s, o)), r;
    }), a.subParser("unescapeSpecialChars", function(r, s, o) {
      return r = o.converter._dispatch("unescapeSpecialChars.before", r, s, o), r = r.replace(/¨E(\d+)E/g, function(c, u) {
        var m = parseInt(u);
        return String.fromCharCode(m);
      }), r = o.converter._dispatch("unescapeSpecialChars.after", r, s, o), r;
    }), a.subParser("makeMarkdown.blockquote", function(r, s) {
      var o = "";
      if (r.hasChildNodes())
        for (var c = r.childNodes, u = c.length, m = 0; m < u; ++m) {
          var p = a.subParser("makeMarkdown.node")(c[m], s);
          p !== "" && (o += p);
        }
      return o = o.trim(), o = "> " + o.split(`
`).join(`
> `), o;
    }), a.subParser("makeMarkdown.codeBlock", function(r, s) {
      var o = r.getAttribute("language"), c = r.getAttribute("precodenum");
      return "```" + o + `
` + s.preList[c] + "\n```";
    }), a.subParser("makeMarkdown.codeSpan", function(r) {
      return "`" + r.innerHTML + "`";
    }), a.subParser("makeMarkdown.emphasis", function(r, s) {
      var o = "";
      if (r.hasChildNodes()) {
        o += "*";
        for (var c = r.childNodes, u = c.length, m = 0; m < u; ++m)
          o += a.subParser("makeMarkdown.node")(c[m], s);
        o += "*";
      }
      return o;
    }), a.subParser("makeMarkdown.header", function(r, s, o) {
      var c = new Array(o + 1).join("#"), u = "";
      if (r.hasChildNodes()) {
        u = c + " ";
        for (var m = r.childNodes, p = m.length, j = 0; j < p; ++j)
          u += a.subParser("makeMarkdown.node")(m[j], s);
      }
      return u;
    }), a.subParser("makeMarkdown.hr", function() {
      return "---";
    }), a.subParser("makeMarkdown.image", function(r) {
      var s = "";
      return r.hasAttribute("src") && (s += "![" + r.getAttribute("alt") + "](", s += "<" + r.getAttribute("src") + ">", r.hasAttribute("width") && r.hasAttribute("height") && (s += " =" + r.getAttribute("width") + "x" + r.getAttribute("height")), r.hasAttribute("title") && (s += ' "' + r.getAttribute("title") + '"'), s += ")"), s;
    }), a.subParser("makeMarkdown.links", function(r, s) {
      var o = "";
      if (r.hasChildNodes() && r.hasAttribute("href")) {
        var c = r.childNodes, u = c.length;
        o = "[";
        for (var m = 0; m < u; ++m)
          o += a.subParser("makeMarkdown.node")(c[m], s);
        o += "](", o += "<" + r.getAttribute("href") + ">", r.hasAttribute("title") && (o += ' "' + r.getAttribute("title") + '"'), o += ")";
      }
      return o;
    }), a.subParser("makeMarkdown.list", function(r, s, o) {
      var c = "";
      if (!r.hasChildNodes())
        return "";
      for (var u = r.childNodes, m = u.length, p = r.getAttribute("start") || 1, j = 0; j < m; ++j)
        if (!(typeof u[j].tagName > "u" || u[j].tagName.toLowerCase() !== "li")) {
          var V = "";
          o === "ol" ? V = p.toString() + ". " : V = "- ", c += V + a.subParser("makeMarkdown.listItem")(u[j], s), ++p;
        }
      return c += `
<!-- -->
`, c.trim();
    }), a.subParser("makeMarkdown.listItem", function(r, s) {
      for (var o = "", c = r.childNodes, u = c.length, m = 0; m < u; ++m)
        o += a.subParser("makeMarkdown.node")(c[m], s);
      return /\n$/.test(o) ? o = o.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : o += `
`, o;
    }), a.subParser("makeMarkdown.node", function(r, s, o) {
      o = o || !1;
      var c = "";
      if (r.nodeType === 3)
        return a.subParser("makeMarkdown.txt")(r, s);
      if (r.nodeType === 8)
        return "<!--" + r.data + `-->

`;
      if (r.nodeType !== 1)
        return "";
      var u = r.tagName.toLowerCase();
      switch (u) {
        case "h1":
          o || (c = a.subParser("makeMarkdown.header")(r, s, 1) + `

`);
          break;
        case "h2":
          o || (c = a.subParser("makeMarkdown.header")(r, s, 2) + `

`);
          break;
        case "h3":
          o || (c = a.subParser("makeMarkdown.header")(r, s, 3) + `

`);
          break;
        case "h4":
          o || (c = a.subParser("makeMarkdown.header")(r, s, 4) + `

`);
          break;
        case "h5":
          o || (c = a.subParser("makeMarkdown.header")(r, s, 5) + `

`);
          break;
        case "h6":
          o || (c = a.subParser("makeMarkdown.header")(r, s, 6) + `

`);
          break;
        case "p":
          o || (c = a.subParser("makeMarkdown.paragraph")(r, s) + `

`);
          break;
        case "blockquote":
          o || (c = a.subParser("makeMarkdown.blockquote")(r, s) + `

`);
          break;
        case "hr":
          o || (c = a.subParser("makeMarkdown.hr")(r, s) + `

`);
          break;
        case "ol":
          o || (c = a.subParser("makeMarkdown.list")(r, s, "ol") + `

`);
          break;
        case "ul":
          o || (c = a.subParser("makeMarkdown.list")(r, s, "ul") + `

`);
          break;
        case "precode":
          o || (c = a.subParser("makeMarkdown.codeBlock")(r, s) + `

`);
          break;
        case "pre":
          o || (c = a.subParser("makeMarkdown.pre")(r, s) + `

`);
          break;
        case "table":
          o || (c = a.subParser("makeMarkdown.table")(r, s) + `

`);
          break;
        case "code":
          c = a.subParser("makeMarkdown.codeSpan")(r, s);
          break;
        case "em":
        case "i":
          c = a.subParser("makeMarkdown.emphasis")(r, s);
          break;
        case "strong":
        case "b":
          c = a.subParser("makeMarkdown.strong")(r, s);
          break;
        case "del":
          c = a.subParser("makeMarkdown.strikethrough")(r, s);
          break;
        case "a":
          c = a.subParser("makeMarkdown.links")(r, s);
          break;
        case "img":
          c = a.subParser("makeMarkdown.image")(r, s);
          break;
        default:
          c = r.outerHTML + `

`;
      }
      return c;
    }), a.subParser("makeMarkdown.paragraph", function(r, s) {
      var o = "";
      if (r.hasChildNodes())
        for (var c = r.childNodes, u = c.length, m = 0; m < u; ++m)
          o += a.subParser("makeMarkdown.node")(c[m], s);
      return o = o.trim(), o;
    }), a.subParser("makeMarkdown.pre", function(r, s) {
      var o = r.getAttribute("prenum");
      return "<pre>" + s.preList[o] + "</pre>";
    }), a.subParser("makeMarkdown.strikethrough", function(r, s) {
      var o = "";
      if (r.hasChildNodes()) {
        o += "~~";
        for (var c = r.childNodes, u = c.length, m = 0; m < u; ++m)
          o += a.subParser("makeMarkdown.node")(c[m], s);
        o += "~~";
      }
      return o;
    }), a.subParser("makeMarkdown.strong", function(r, s) {
      var o = "";
      if (r.hasChildNodes()) {
        o += "**";
        for (var c = r.childNodes, u = c.length, m = 0; m < u; ++m)
          o += a.subParser("makeMarkdown.node")(c[m], s);
        o += "**";
      }
      return o;
    }), a.subParser("makeMarkdown.table", function(r, s) {
      var o = "", c = [[], []], u = r.querySelectorAll("thead>tr>th"), m = r.querySelectorAll("tbody>tr"), p, j;
      for (p = 0; p < u.length; ++p) {
        var V = a.subParser("makeMarkdown.tableCell")(u[p], s), F = "---";
        if (u[p].hasAttribute("style")) {
          var D = u[p].getAttribute("style").toLowerCase().replace(/\s/g, "");
          switch (D) {
            case "text-align:left;":
              F = ":---";
              break;
            case "text-align:right;":
              F = "---:";
              break;
            case "text-align:center;":
              F = ":---:";
              break;
          }
        }
        c[0][p] = V.trim(), c[1][p] = F;
      }
      for (p = 0; p < m.length; ++p) {
        var q = c.push([]) - 1, g = m[p].getElementsByTagName("td");
        for (j = 0; j < u.length; ++j) {
          var H = " ";
          typeof g[j] < "u" && (H = a.subParser("makeMarkdown.tableCell")(g[j], s)), c[q].push(H);
        }
      }
      var W = 3;
      for (p = 0; p < c.length; ++p)
        for (j = 0; j < c[p].length; ++j) {
          var J = c[p][j].length;
          J > W && (W = J);
        }
      for (p = 0; p < c.length; ++p) {
        for (j = 0; j < c[p].length; ++j)
          p === 1 ? c[p][j].slice(-1) === ":" ? c[p][j] = a.helper.padEnd(c[p][j].slice(-1), W - 1, "-") + ":" : c[p][j] = a.helper.padEnd(c[p][j], W, "-") : c[p][j] = a.helper.padEnd(c[p][j], W);
        o += "| " + c[p].join(" | ") + ` |
`;
      }
      return o.trim();
    }), a.subParser("makeMarkdown.tableCell", function(r, s) {
      var o = "";
      if (!r.hasChildNodes())
        return "";
      for (var c = r.childNodes, u = c.length, m = 0; m < u; ++m)
        o += a.subParser("makeMarkdown.node")(c[m], s, !0);
      return o.trim();
    }), a.subParser("makeMarkdown.txt", function(r) {
      var s = r.nodeValue;
      return s = s.replace(/ +/g, " "), s = s.replace(/¨NBSP;/g, " "), s = a.helper.unescapeHTMLEntities(s), s = s.replace(/([*_~|`])/g, "\\$1"), s = s.replace(/^(\s*)>/g, "\\$1>"), s = s.replace(/^#/gm, "\\#"), s = s.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), s = s.replace(/^( {0,3}\d+)\./gm, "$1\\."), s = s.replace(/^( {0,3})([+-])/gm, "$1\\$2"), s = s.replace(/]([\s]*)\(/g, "\\]$1\\("), s = s.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), s;
    });
    var R = this;
    e.exports ? e.exports = a : R.showdown = a;
  }).call(jn);
})(bo);
var au = bo.exports;
const Pn = /* @__PURE__ */ xn(au);
class En {
  constructor() {
    $e(this, "logger"), $e(this, "converter"), this.logger = La.zhiLog("showdown-adaptor"), this.converter = new Pn.Converter();
  }
  isAvailable() {
    return typeof Pn < "u";
  }
  renderMarkdownStr(t) {
    if (!this.isAvailable())
      throw new Error("Showdown is not available");
    return this.logger.info("Showdown is rendering md to HTML..."), Promise.resolve(this.converter.makeHtml(t));
  }
}
class wo {
  constructor() {
    $e(this, "logger"), $e(this, "mdAdaptor", new En()), this.logger = La.zhiLog("markdown-util");
  }
  /**
   * 获取当前 MD 解析器名称
   */
  getCurrentAdaptorName() {
    return this.mdAdaptor instanceof kn ? "Lute" : this.mdAdaptor instanceof En ? "Showdown" : "None";
  }
  /**
   * 渲染Markdown
   *
   * @param md - Markdown文本
   */
  async renderHTML(t) {
    const n = new kn();
    return this.logger.debug("Lute status =>", n.isAvailable()), n.isAvailable() && (this.mdAdaptor = n), this.logger.info(`Using ${this.getCurrentAdaptorName()} as markdown renderer`), await this.mdAdaptor.renderMarkdownStr(t);
  }
}
class nu {
  constructor() {
    $e(this, "mdUtil"), this.mdUtil = new wo();
  }
  /**
   * 移除标题数字
   *
   * @param str - 字符串
   */
  removeTitleNumber(t) {
    let n = t;
    const a = /([0-9]*)\./;
    return n = n.replace(a, ""), n;
  }
  /**
   * 删除挂件的HTML
   *
   * @param str - 原字符
   */
  removeWidgetTag(t) {
    let n = t.toString();
    const a = /<iframe.*src="\/widgets\/publisher.*<\/iframe>/g;
    n = n.replace(a, "");
    const i = /<iframe.*src="\/widgets\/sy-post-publisher.*<\/iframe>/g;
    n = n.replace(i, "");
    const l = /<iframe.*\/widgets\/Note*\sAttrs.*\/iframe>/g;
    return n = n.replace(l, ""), n;
  }
  /**
   * 删除Markdown文本的挂件的HTML
   *
   * @param str - 原字符
   */
  removeMdWidgetTag(t) {
    let n = t.toString();
    return n = this.removeWidgetTag(n), n;
  }
  /**
   * 去除html标签，残缺不全也可以
   *
   * @param str - 字符串
   */
  filterHtml(t) {
    t = t.replace(/<style((.|\n|\r)*?)<\/style>/g, ""), t = t.replace(/<script((.|\n|\r)*?)<\/script>/g, ""), t = t.replace(/<[^>]*>/g, ""), t = t.replace(/&.*;/g, ""), t = t.replace(/(^\s*)|(\s*$)/g, ""), t = t.replace(/</g, "").replace(/>/g, ""), t = t.replace(/"/g, "").replace(/'/g, ""), t = t.replace(/\*/g, ""), t = t.replace(/\$/g, ""), t = t.replace(/\./g, ""), t = t.replace(/\+/g, ""), t = t.replace(/\s+/g, ""), t = t.replace(/[:|：]/g, "_"), t = t.replace(/[;|；]/g, "_"), t = t.replace(/\^/g, "_"), t = t.replace(/!/g, "_"), t = t.replace(/@/g, "at_");
    const n = ["\\d*/\\d/\\d*", "[、|\\\\]", "[，|,]", "\\d", "/", "-"];
    for (let a = 0; a < n.length; a++) {
      const i = new RegExp(n[a], "g");
      t = t.replace(i, "");
    }
    return t = t.toLowerCase(), t;
  }
  /**
   * 截取指定长度html
   *
   * @param html - html
   * @param length - 长度
   * @param ignore - 不要结尾省略号
   */
  parseHtml(t, n, a) {
    const i = this.filterHtml(t);
    return i.length < n ? i : a === !0 ? i.substring(0, n) : i.substring(0, n) + "...";
  }
  /**
   * 将Markdown转换为HTML
   *
   * @param md - Markdown
   */
  async mdToHtml(t) {
    const n = await this.mdUtil.renderHTML(t);
    return this.removeWidgetTag(n);
  }
  /**
   * 将Markdown转换为纯文本
   *
   * @param md - Markdown
   */
  async mdToPlainText(t) {
    const n = await this.mdToHtml(t);
    return this.filterHtml(n);
  }
  /**
   * 移除H1标签
   *
   * @param html - html
   */
  removeH1(t) {
    let n = t;
    const a = /<h1.*\/h1>/g;
    return n = n.replace(a, ""), n;
  }
  /**
   * 移除Markdown里面的H1标签
   *
   * JavaScript 正则表达式可以用来删除所有 Markdown 中的 h1 标签。下面是一个示例代码：
   *
   * const str = "# This is an H1\n## This is an H2\n### This is an H3";
   *
   * const regex = /^# .*$/gm;
   * const result = str.replace(regex, '');
   *
   * console.log(result);
   * 在这个例子中，我们使用正则表达式 /^# .*$/gm 来匹配所有的 h1 标签。
   * 在 JavaScript 中，^ 匹配行首，# 匹配 # 字符，.* 匹配任意字符，$ 匹配行尾，m 标记表示多行模式。
   */
  removeMdH1(t) {
    let n = t;
    const a = /^# .*$/gm;
    return n = n.replace(a, ""), n;
  }
}
class ou {
  /**
   * 检测是否是空对象
   *
   * @param obj - 对象
   */
  isEmptyObject(t) {
    return t ? Object.getPrototypeOf(t) === Object.prototype && Object.getOwnPropertyNames(t).length === 0 && Object.getOwnPropertySymbols(t).length === 0 : !0;
  }
}
class su {
  constructor() {
    $e(this, "dateUtil"), $e(this, "strUtil"), $e(this, "versionUtil"), $e(this, "htmlUtil"), $e(this, "markdownUtil"), $e(this, "jsonUtil"), $e(this, "objectUtil"), this.dateUtil = new Ol(), this.strUtil = new Il(), this.versionUtil = new Ml(), this.htmlUtil = new nu(), this.markdownUtil = new wo(), this.jsonUtil = new Nl(), this.objectUtil = new ou();
  }
}
const iu = su;
var cu = Object.defineProperty, lu = (e, t, n) => t in e ? cu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ot = (e, t, n) => (lu(e, typeof t != "symbol" ? t + "" : t, n), n);
class it {
}
Ot(it, "NODE_ENV_KEY", "NODE_ENV"), /**
* 开发环境
*/
Ot(it, "NODE_ENV_DEVELOPMENT", "development"), /**
* 生产环境
*/
Ot(it, "NODE_ENV_PRODUCTION", "production"), /**
* 测试环境
*/
Ot(it, "NODE_ENV_TEST", "test"), /**
* 是否处于调试模式
*/
Ot(it, "VITE_DEBUG_MODE_KEY", "VITE_DEBUG_MODE");
class uu {
  /**
   * 环境初始化
   *
   * @param envMeta - 需要传入 {"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":false} 。特别提醒：此参数是静态元数据，取决于最终使用的项目。因此仅仅在最终使用的地方显示传递此值，中间项目请保持参数传递
   * @see {@link https://vitejs.dev/guide/env-and-mode.html#production-replacement}
   */
  constructor(t) {
    Ot(this, "envMeta"), this.envMeta = t;
  }
  /**
   * 是否是开发阶段调试
   */
  isNodeDev() {
    return this.getEnv(it.NODE_ENV_KEY) === it.NODE_ENV_DEVELOPMENT;
  }
  /**
   * 是否是调试阶段
   */
  isDev() {
    return this.isNodeDev() || this.getBooleanEnv(it.VITE_DEBUG_MODE_KEY);
  }
  /**
   * 获取环境变量，key不存在返回undefined
   * @param key - key
   */
  getEnv(t) {
    let n;
    try {
      this.envMeta[t] && (n = this.envMeta[t]);
    } catch {
    }
    return n;
  }
  /**
   * 获取String类型的环境变量，key不存在直接返回空值
   * @param key - key
   */
  getStringEnv(t) {
    return this.getEnv(t) ?? "";
  }
  /**
   * 获取Boolean类型的环境变量，key不存在返回false
   * @param key - key
   */
  getBooleanEnv(t) {
    let n = !1;
    return this.getEnv(t) && (n = this.getStringEnv(t).toLowerCase() === "true"), n;
  }
  /**
   * 获取环境变量，如果未定义或者为空值，用指定的默认值代替
   *
   * @param key - key
   * @param defaultValue - 默认值
   * @since 0.1.0
   * @author terwer
   */
  getEnvOrDefault(t, n) {
    const a = this.getStringEnv(t);
    return a.trim().length == 0 ? n : a;
  }
}
class du extends tr {
  static zhiEnv() {
    return this.env || (this.env = new uu({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 })), this.env;
  }
}
class bu {
  /**
   * 初始化博客 API
   *
   * @param apiAdaptor - 对应博客的适配器，例如：SiYuanApiAdaptor
   */
  constructor(t) {
    Y(this, "logger");
    Y(this, "apiAdaptor");
    /**
     * 博客API版本号
     */
    Y(this, "VERSION");
    this.logger = du.zhiLog("zhi-blog-api"), this.VERSION = "1.0.0", this.apiAdaptor = t;
  }
  /**
   * 博客配置列表
   */
  async getUsersBlogs() {
    return await this.apiAdaptor.getUsersBlogs();
  }
  /**
   * 最新文章数目
   *
   * @param keyword - 关键字（可选，部分平台不支持搜索）
   */
  async getRecentPostsCount(t) {
    return await this.apiAdaptor.getRecentPostsCount(t);
  }
  /**
   * 最新文章
   *
   * @param numOfPosts - 文章数目
   * @param page - 页码（可选，从0开始，部分平台不支持分页）
   * @param keyword - 关键字（可选，部分平台不支持搜索）
   */
  async getRecentPosts(t, n, a) {
    try {
      return await this.apiAdaptor.getRecentPosts(t, n, a);
    } catch (i) {
      return this.logger.error("getRecentPosts fetch posts failed", i), Promise.resolve([]);
    }
  }
  /**
   * 发布文章
   *
   * @param post - 文章
   * @param publish - 可选，是否发布
   */
  async newPost(t, n) {
    return await this.apiAdaptor.newPost(t, n);
  }
  /**
   * 文章详情
   * @param postid - postid
   * @param useSlug - 是否使用的是别名（可选，部分平台不支持）
   */
  async getPost(t, n) {
    try {
      return await this.apiAdaptor.getPost(t, n);
    } catch (a) {
      return this.logger.error(`getPost fetch posts failed => ${t},`, a), Promise.resolve(new Lo());
    }
  }
  /**
   * 更新文章
   *
   * @param postid - 文章id
   * @param post - 文章
   * @param publish - 可选，是否发布
   */
  async editPost(t, n, a) {
    return await this.apiAdaptor.editPost(t, n, a);
  }
  /**
   * 删除文章
   *
   * @param postid - 文章ID
   */
  async deletePost(t) {
    return await this.apiAdaptor.deletePost(t);
  }
  /**
   * 获取分类列表
   */
  async getCategories() {
    return await this.apiAdaptor.getCategories();
  }
  /**
   * 获取预览链接
   *
   * @param postid - 文章ID
   */
  async getPreviewUrl(t) {
    return await this.apiAdaptor.getPreviewUrl(t);
  }
  /**
   * 上传附件
   *
   * @param mediaObject
   */
  async newMediaObject(t) {
    return await this.apiAdaptor.newMediaObject(t);
  }
}
class hu {
  constructor() {
    /**
     * 博客ID
     */
    Y(this, "blogid");
    /**
     * 博客地址
     */
    Y(this, "url");
    /**
     * 博客名称
     */
    Y(this, "blogName");
    /**
     * 是否是管理员
     */
    Y(this, "isAdmin");
    /**
     * xmlrpc地址
     */
    Y(this, "xmlrpc");
    this.blogid = "", this.url = "", this.blogName = "";
  }
}
class wu {
  constructor() {
    /**
     * 博客信息
     */
    Y(this, "userBlog");
    /**
     * 域名
     */
    Y(this, "domain");
    /**
     * 站点链接
     */
    Y(this, "weburl");
    /**
     * 站点主题
     */
    Y(this, "webtheme");
    /**
     * 站点名称
     */
    Y(this, "webname");
    /**
     * 站点口号
     */
    Y(this, "webslogen");
    /**
     * 关键字
     */
    Y(this, "keywords");
    /**
     * 描述
     */
    Y(this, "description");
    /**
     * 备案信息
     */
    Y(this, "beianinfo");
    this.userBlog = new hu(), this.domain = "", this.weburl = "", this.webtheme = "default", this.webname = "浅海拾贝", this.webslogen = "寻找未知的技术拼图", this.keywords = "软件架构、服务端开发、Java、Spring、Dubbo、Zookeeper、微服务", this.description = "浅海拾贝致力于Java后端开发及服务端技术、软件架构、微服务技术分享的个人博客", this.beianinfo = "粤ICP备18023717号-1";
  }
}
class vu {
  constructor() {
    /**
     * 分类ID
     */
    Y(this, "categoryId");
    /**
     * 父分类ID
     */
    Y(this, "parentId");
    /**
     * 分类名称
     */
    Y(this, "description");
    /**
     * 分类英文名
     */
    Y(this, "categoryName");
    /**
     * 分类详情
     */
    Y(this, "categoryDescription");
    /**
     * 分类地址
     */
    Y(this, "htmlUrl");
    /**
     * 分类订阅地址
     */
    Y(this, "rssUrl");
    this.categoryId = "-1", this.parentId = "0", this.description = "分类1", this.categoryDescription = "这是测试分类1", this.categoryName = "cate1", this.htmlUrl = "", this.rssUrl = "";
  }
}
class $u {
  constructor(t, n, a) {
    Y(this, "name");
    Y(this, "type");
    Y(this, "bits");
    this.name = t, this.type = n, this.bits = a;
  }
}
class pu {
}
/**
 * 博客类型
 */
Y(pu, "DEFAULT_BLOG_TYPE_KEY", "VITE_DEFAULT_TYPE");
var fu = /* @__PURE__ */ ((e) => (e.BlogTypeEnum_Siyuan = "siyuan", e.BlogTypeEnum_Metaweblog = "metaweblog", e.BlogTypeEnum_Wordpress = "wordpress", e))(fu || {});
export {
  bu as BlogAdaptor,
  _u as BlogApi,
  gu as BlogConfig,
  pu as BlogConstants,
  yu as BlogPlaceholder,
  fu as BlogTypeEnum,
  vu as CategoryInfo,
  $u as MediaObject,
  Ao as PageType,
  Ro as PasswordType,
  Lo as Post,
  Sn as PostStatusEnum,
  wu as SiteConfig,
  hu as UserBlog
};

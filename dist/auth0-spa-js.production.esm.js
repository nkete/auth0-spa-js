var e = function(t, n) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(e, t) {
        e.__proto__ = t;
      }) ||
    function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(t, n);
};
var t = function() {
  return (t =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function n(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function r(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function a(e) {
      try {
        u(r.next(e));
      } catch (e) {
        i(e);
      }
    }
    function c(e) {
      try {
        u(r.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function u(e) {
      e.done
        ? o(e.value)
        : new n(function(t) {
            t(e.value);
          }).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function o(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
  return (
    (i = { next: c(0), throw: c(1), return: c(2) }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function() {
        return this;
      }),
    i
  );
  function c(i) {
    return function(c) {
      return (function(i) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                  (6 === i[0] || 2 === i[0])
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, c]);
    };
  }
}
var i =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function c(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var u,
  s,
  f,
  l = 'object',
  d = function(e) {
    return e && e.Math == Math && e;
  },
  p =
    d(typeof globalThis == l && globalThis) ||
    d(typeof window == l && window) ||
    d(typeof self == l && self) ||
    d(typeof i == l && i) ||
    Function('return this')(),
  h = function(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  v = !h(function() {
    return (
      7 !=
      Object.defineProperty({}, 'a', {
        get: function() {
          return 7;
        }
      }).a
    );
  }),
  y = {}.propertyIsEnumerable,
  m = Object.getOwnPropertyDescriptor,
  w = {
    f:
      m && !y.call({ 1: 2 }, 1)
        ? function(e) {
            var t = m(this, e);
            return !!t && t.enumerable;
          }
        : y
  },
  g = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
  b = {}.toString,
  _ = function(e) {
    return b.call(e).slice(8, -1);
  },
  k = ''.split,
  S = h(function() {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function(e) {
        return 'String' == _(e) ? k.call(e, '') : Object(e);
      }
    : Object,
  T = function(e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  O = function(e) {
    return S(T(e));
  },
  E = function(e) {
    return 'object' == typeof e ? null !== e : 'function' == typeof e;
  },
  A = function(e, t) {
    if (!E(e)) return e;
    var n, r;
    if (t && 'function' == typeof (n = e.toString) && !E((r = n.call(e))))
      return r;
    if ('function' == typeof (n = e.valueOf) && !E((r = n.call(e)))) return r;
    if (!t && 'function' == typeof (n = e.toString) && !E((r = n.call(e))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  I = {}.hasOwnProperty,
  x = function(e, t) {
    return I.call(e, t);
  },
  j = p.document,
  P = E(j) && E(j.createElement),
  C = function(e) {
    return P ? j.createElement(e) : {};
  },
  U =
    !v &&
    !h(function() {
      return (
        7 !=
        Object.defineProperty(C('div'), 'a', {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
  D = Object.getOwnPropertyDescriptor,
  F = {
    f: v
      ? D
      : function(e, t) {
          if (((e = O(e)), (t = A(t, !0)), U))
            try {
              return D(e, t);
            } catch (e) {}
          if (x(e, t)) return g(!w.f.call(e, t), e[t]);
        }
  },
  L = function(e) {
    if (!E(e)) throw TypeError(String(e) + ' is not an object');
    return e;
  },
  R = Object.defineProperty,
  M = {
    f: v
      ? R
      : function(e, t, n) {
          if ((L(e), (t = A(t, !0)), L(n), U))
            try {
              return R(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        }
  },
  q = v
    ? function(e, t, n) {
        return M.f(e, t, g(1, n));
      }
    : function(e, t, n) {
        return (e[t] = n), e;
      },
  W = function(e, t) {
    try {
      q(p, e, t);
    } catch (n) {
      p[e] = t;
    }
    return t;
  },
  N = c(function(e) {
    var t = p['__core-js_shared__'] || W('__core-js_shared__', {});
    (e.exports = function(e, n) {
      return t[e] || (t[e] = void 0 !== n ? n : {});
    })('versions', []).push({
      version: '3.2.1',
      mode: 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  }),
  z = N('native-function-to-string', Function.toString),
  J = p.WeakMap,
  B = 'function' == typeof J && /native code/.test(z.call(J)),
  G = 0,
  H = Math.random(),
  Y = function(e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++G + H).toString(36)
    );
  },
  V = N('keys'),
  K = function(e) {
    return V[e] || (V[e] = Y(e));
  },
  Q = {},
  X = p.WeakMap;
if (B) {
  var Z = new X(),
    $ = Z.get,
    ee = Z.has,
    te = Z.set;
  (u = function(e, t) {
    return te.call(Z, e, t), t;
  }),
    (s = function(e) {
      return $.call(Z, e) || {};
    }),
    (f = function(e) {
      return ee.call(Z, e);
    });
} else {
  var ne = K('state');
  (Q[ne] = !0),
    (u = function(e, t) {
      return q(e, ne, t), t;
    }),
    (s = function(e) {
      return x(e, ne) ? e[ne] : {};
    }),
    (f = function(e) {
      return x(e, ne);
    });
}
var re = {
    set: u,
    get: s,
    has: f,
    enforce: function(e) {
      return f(e) ? s(e) : u(e, {});
    },
    getterFor: function(e) {
      return function(t) {
        var n;
        if (!E(t) || (n = s(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required');
        return n;
      };
    }
  },
  oe = c(function(e) {
    var t = re.get,
      n = re.enforce,
      r = String(z).split('toString');
    N('inspectSource', function(e) {
      return z.call(e);
    }),
      (e.exports = function(e, t, o, i) {
        var a = !!i && !!i.unsafe,
          c = !!i && !!i.enumerable,
          u = !!i && !!i.noTargetGet;
        'function' == typeof o &&
          ('string' != typeof t || x(o, 'name') || q(o, 'name', t),
          (n(o).source = r.join('string' == typeof t ? t : ''))),
          e !== p
            ? (a ? !u && e[t] && (c = !0) : delete e[t],
              c ? (e[t] = o) : q(e, t, o))
            : c
            ? (e[t] = o)
            : W(t, o);
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && t(this).source) || z.call(this);
      });
  }),
  ie = p,
  ae = function(e) {
    return 'function' == typeof e ? e : void 0;
  },
  ce = function(e, t) {
    return arguments.length < 2
      ? ae(ie[e]) || ae(p[e])
      : (ie[e] && ie[e][t]) || (p[e] && p[e][t]);
  },
  ue = Math.ceil,
  se = Math.floor,
  fe = function(e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? se : ue)(e);
  },
  le = Math.min,
  de = function(e) {
    return e > 0 ? le(fe(e), 9007199254740991) : 0;
  },
  pe = Math.max,
  he = Math.min,
  ve = function(e) {
    return function(t, n, r) {
      var o,
        i = O(t),
        a = de(i.length),
        c = (function(e, t) {
          var n = fe(e);
          return n < 0 ? pe(n + t, 0) : he(n, t);
        })(r, a);
      if (e && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((e || c in i) && i[c] === n) return e || c || 0;
      return !e && -1;
    };
  },
  ye = { includes: ve(!0), indexOf: ve(!1) },
  me = ye.indexOf,
  we = function(e, t) {
    var n,
      r = O(e),
      o = 0,
      i = [];
    for (n in r) !x(Q, n) && x(r, n) && i.push(n);
    for (; t.length > o; ) x(r, (n = t[o++])) && (~me(i, n) || i.push(n));
    return i;
  },
  ge = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ],
  be = ge.concat('length', 'prototype'),
  _e = {
    f:
      Object.getOwnPropertyNames ||
      function(e) {
        return we(e, be);
      }
  },
  ke = { f: Object.getOwnPropertySymbols },
  Se =
    ce('Reflect', 'ownKeys') ||
    function(e) {
      var t = _e.f(L(e)),
        n = ke.f;
      return n ? t.concat(n(e)) : t;
    },
  Te = function(e, t) {
    for (var n = Se(t), r = M.f, o = F.f, i = 0; i < n.length; i++) {
      var a = n[i];
      x(e, a) || r(e, a, o(t, a));
    }
  },
  Oe = /#|\.prototype\./,
  Ee = function(e, t) {
    var n = Ie[Ae(e)];
    return n == je || (n != xe && ('function' == typeof t ? h(t) : !!t));
  },
  Ae = (Ee.normalize = function(e) {
    return String(e)
      .replace(Oe, '.')
      .toLowerCase();
  }),
  Ie = (Ee.data = {}),
  xe = (Ee.NATIVE = 'N'),
  je = (Ee.POLYFILL = 'P'),
  Pe = Ee,
  Ce = F.f,
  Ue = function(e, t) {
    var n,
      r,
      o,
      i,
      a,
      c = e.target,
      u = e.global,
      s = e.stat;
    if ((n = u ? p : s ? p[c] || W(c, {}) : (p[c] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (a = Ce(n, r)) && a.value : n[r]),
          !Pe(u ? r : c + (s ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Te(i, o);
        }
        (e.sham || (o && o.sham)) && q(i, 'sham', !0), oe(n, r, i, e);
      }
  },
  De =
    !!Object.getOwnPropertySymbols &&
    !h(function() {
      return !String(Symbol());
    }),
  Fe = p.Symbol,
  Le = N('wks'),
  Re = function(e) {
    return Le[e] || (Le[e] = (De && Fe[e]) || (De ? Fe : Y)('Symbol.' + e));
  },
  Me = Re('match'),
  qe = function(e) {
    if (
      (function(e) {
        var t;
        return E(e) && (void 0 !== (t = e[Me]) ? !!t : 'RegExp' == _(e));
      })(e)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
  We = Re('match'),
  Ne = function(e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[We] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  ze = ''.startsWith,
  Je = Math.min;
Ue(
  { target: 'String', proto: !0, forced: !Ne('startsWith') },
  {
    startsWith: function(e) {
      var t = String(T(this));
      qe(e);
      var n = de(Je(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = String(e);
      return ze ? ze.call(t, r, n) : t.slice(n, n + r.length) === r;
    }
  }
);
var Be,
  Ge,
  He,
  Ye = function(e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function');
    return e;
  },
  Ve = function(e, t, n) {
    if ((Ye(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function() {
          return e.call(t);
        };
      case 1:
        return function(n) {
          return e.call(t, n);
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r);
        };
      case 3:
        return function(n, r, o) {
          return e.call(t, n, r, o);
        };
    }
    return function() {
      return e.apply(t, arguments);
    };
  },
  Ke = Function.call,
  Qe = function(e, t, n) {
    return Ve(Ke, p[e].prototype[t], n);
  },
  Xe =
    (Qe('String', 'startsWith'),
    function(e) {
      return function(t, n) {
        var r,
          o,
          i = String(T(t)),
          a = fe(n),
          c = i.length;
        return a < 0 || a >= c
          ? e
            ? ''
            : void 0
          : (r = i.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === c ||
            (o = i.charCodeAt(a + 1)) < 56320 ||
            o > 57343
          ? e
            ? i.charAt(a)
            : r
          : e
          ? i.slice(a, a + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    }),
  Ze = { codeAt: Xe(!1), charAt: Xe(!0) },
  $e = function(e) {
    return Object(T(e));
  },
  et = !h(function() {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  tt = K('IE_PROTO'),
  nt = Object.prototype,
  rt = et
    ? Object.getPrototypeOf
    : function(e) {
        return (
          (e = $e(e)),
          x(e, tt)
            ? e[tt]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? nt
            : null
        );
      },
  ot = Re('iterator'),
  it = !1;
[].keys &&
  ('next' in (He = [].keys())
    ? (Ge = rt(rt(He))) !== Object.prototype && (Be = Ge)
    : (it = !0)),
  null == Be && (Be = {}),
  x(Be, ot) ||
    q(Be, ot, function() {
      return this;
    });
var at = { IteratorPrototype: Be, BUGGY_SAFARI_ITERATORS: it },
  ct =
    Object.keys ||
    function(e) {
      return we(e, ge);
    },
  ut = v
    ? Object.defineProperties
    : function(e, t) {
        L(e);
        for (var n, r = ct(t), o = r.length, i = 0; o > i; )
          M.f(e, (n = r[i++]), t[n]);
        return e;
      },
  st = ce('document', 'documentElement'),
  ft = K('IE_PROTO'),
  lt = function() {},
  dt = function() {
    var e,
      t = C('iframe'),
      n = ge.length;
    for (
      t.style.display = 'none',
        st.appendChild(t),
        t.src = String('javascript:'),
        (e = t.contentWindow.document).open(),
        e.write('<script>document.F=Object</script>'),
        e.close(),
        dt = e.F;
      n--;

    )
      delete dt.prototype[ge[n]];
    return dt();
  },
  pt =
    Object.create ||
    function(e, t) {
      var n;
      return (
        null !== e
          ? ((lt.prototype = L(e)),
            (n = new lt()),
            (lt.prototype = null),
            (n[ft] = e))
          : (n = dt()),
        void 0 === t ? n : ut(n, t)
      );
    };
Q[ft] = !0;
var ht = M.f,
  vt = Re('toStringTag'),
  yt = function(e, t, n) {
    e &&
      !x((e = n ? e : e.prototype), vt) &&
      ht(e, vt, { configurable: !0, value: t });
  },
  mt = {},
  wt = at.IteratorPrototype,
  gt = function() {
    return this;
  },
  bt =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function() {
          var e,
            t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function(n, r) {
            return (
              L(n),
              (function(e) {
                if (!E(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + ' as a prototype');
              })(r),
              t ? e.call(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  _t = at.IteratorPrototype,
  kt = at.BUGGY_SAFARI_ITERATORS,
  St = Re('iterator'),
  Tt = function() {
    return this;
  },
  Ot = Ze.charAt,
  Et = re.set,
  At = re.getterFor('String Iterator');
!(function(e, t, n, r, o, i, a) {
  !(function(e, t, n) {
    var r = t + ' Iterator';
    (e.prototype = pt(wt, { next: g(1, n) })), yt(e, r, !1), (mt[r] = gt);
  })(n, t, r);
  var c,
    u,
    s,
    f = function(e) {
      if (e === o && v) return v;
      if (!kt && e in p) return p[e];
      switch (e) {
        case 'keys':
        case 'values':
        case 'entries':
          return function() {
            return new n(this, e);
          };
      }
      return function() {
        return new n(this);
      };
    },
    l = t + ' Iterator',
    d = !1,
    p = e.prototype,
    h = p[St] || p['@@iterator'] || (o && p[o]),
    v = (!kt && h) || f(o),
    y = ('Array' == t && p.entries) || h;
  if (
    (y &&
      ((c = rt(y.call(new e()))),
      _t !== Object.prototype &&
        c.next &&
        (rt(c) !== _t &&
          (bt ? bt(c, _t) : 'function' != typeof c[St] && q(c, St, Tt)),
        yt(c, l, !0))),
    'values' == o &&
      h &&
      'values' !== h.name &&
      ((d = !0),
      (v = function() {
        return h.call(this);
      })),
    p[St] !== v && q(p, St, v),
    (mt[t] = v),
    o)
  )
    if (
      ((u = {
        values: f('values'),
        keys: i ? v : f('keys'),
        entries: f('entries')
      }),
      a)
    )
      for (s in u) (!kt && !d && s in p) || oe(p, s, u[s]);
    else Ue({ target: t, proto: !0, forced: kt || d }, u);
})(
  String,
  'String',
  function(e) {
    Et(this, { type: 'String Iterator', string: String(e), index: 0 });
  },
  function() {
    var e,
      t = At(this),
      n = t.string,
      r = t.index;
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Ot(n, r)), (t.index += e.length), { value: e, done: !1 });
  }
);
var It = function(e, t, n, r) {
    try {
      return r ? t(L(n)[0], n[1]) : t(n);
    } catch (t) {
      var o = e.return;
      throw (void 0 !== o && L(o.call(e)), t);
    }
  },
  xt = Re('iterator'),
  jt = Array.prototype,
  Pt = function(e) {
    return void 0 !== e && (mt.Array === e || jt[xt] === e);
  },
  Ct = function(e, t, n) {
    var r = A(t);
    r in e ? M.f(e, r, g(0, n)) : (e[r] = n);
  },
  Ut = Re('toStringTag'),
  Dt =
    'Arguments' ==
    _(
      (function() {
        return arguments;
      })()
    ),
  Ft = function(e) {
    var t, n, r;
    return void 0 === e
      ? 'Undefined'
      : null === e
      ? 'Null'
      : 'string' ==
        typeof (n = (function(e, t) {
          try {
            return e[t];
          } catch (e) {}
        })((t = Object(e)), Ut))
      ? n
      : Dt
      ? _(t)
      : 'Object' == (r = _(t)) && 'function' == typeof t.callee
      ? 'Arguments'
      : r;
  },
  Lt = Re('iterator'),
  Rt = function(e) {
    if (null != e) return e[Lt] || e['@@iterator'] || mt[Ft(e)];
  },
  Mt = Re('iterator'),
  qt = !1;
try {
  var Wt = 0,
    Nt = {
      next: function() {
        return { done: !!Wt++ };
      },
      return: function() {
        qt = !0;
      }
    };
  (Nt[Mt] = function() {
    return this;
  }),
    Array.from(Nt, function() {
      throw 2;
    });
} catch (e) {}
var zt = !(function(e, t) {
  if (!t && !qt) return !1;
  var n = !1;
  try {
    var r = {};
    (r[Mt] = function() {
      return {
        next: function() {
          return { done: (n = !0) };
        }
      };
    }),
      e(r);
  } catch (e) {}
  return n;
})(function(e) {
  Array.from(e);
});
Ue(
  { target: 'Array', stat: !0, forced: zt },
  {
    from: function(e) {
      var t,
        n,
        r,
        o,
        i = $e(e),
        a = 'function' == typeof this ? this : Array,
        c = arguments.length,
        u = c > 1 ? arguments[1] : void 0,
        s = void 0 !== u,
        f = 0,
        l = Rt(i);
      if (
        (s && (u = Ve(u, c > 2 ? arguments[2] : void 0, 2)),
        null == l || (a == Array && Pt(l)))
      )
        for (n = new a((t = de(i.length))); t > f; f++)
          Ct(n, f, s ? u(i[f], f) : i[f]);
      else
        for (o = l.call(i), n = new a(); !(r = o.next()).done; f++)
          Ct(n, f, s ? It(o, u, [r.value, f], !0) : r.value);
      return (n.length = f), n;
    }
  }
);
ie.Array.from;
var Jt,
  Bt = M.f,
  Gt = p.DataView,
  Ht = Gt && Gt.prototype,
  Yt = p.Int8Array,
  Vt = Yt && Yt.prototype,
  Kt = p.Uint8ClampedArray,
  Qt = Kt && Kt.prototype,
  Xt = Yt && rt(Yt),
  Zt = Vt && rt(Vt),
  $t = Object.prototype,
  en = $t.isPrototypeOf,
  tn = Re('toStringTag'),
  nn = Y('TYPED_ARRAY_TAG'),
  rn = !(!p.ArrayBuffer || !Gt),
  on = rn && !!bt && 'Opera' !== Ft(p.opera),
  an = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
  cn = function(e) {
    return E(e) && x(an, Ft(e));
  };
for (Jt in an) p[Jt] || (on = !1);
if (
  (!on || 'function' != typeof Xt || Xt === Function.prototype) &&
  ((Xt = function() {
    throw TypeError('Incorrect invocation');
  }),
  on)
)
  for (Jt in an) p[Jt] && bt(p[Jt], Xt);
if ((!on || !Zt || Zt === $t) && ((Zt = Xt.prototype), on))
  for (Jt in an) p[Jt] && bt(p[Jt].prototype, Zt);
if ((on && rt(Qt) !== Zt && bt(Qt, Zt), v && !x(Zt, tn)))
  for (Jt in (!0,
  Bt(Zt, tn, {
    get: function() {
      return E(this) ? this[nn] : void 0;
    }
  }),
  an))
    p[Jt] && q(p[Jt], nn, Jt);
rn && bt && rt(Ht) !== $t && bt(Ht, $t);
var un = function(e) {
    if (cn(e)) return e;
    throw TypeError('Target is not a typed array');
  },
  sn = function(e) {
    if (bt) {
      if (en.call(Xt, e)) return e;
    } else
      for (var t in an)
        if (x(an, Jt)) {
          var n = p[t];
          if (n && (e === n || en.call(n, e))) return e;
        }
    throw TypeError('Target is not a typed array constructor');
  },
  fn = function(e, t, n) {
    if (v) {
      if (n)
        for (var r in an) {
          var o = p[r];
          o && x(o.prototype, e) && delete o.prototype[e];
        }
      (Zt[e] && !n) || oe(Zt, e, n ? t : (on && Vt[e]) || t);
    }
  },
  ln = Re('species'),
  dn = un,
  pn = sn,
  hn = [].slice;
fn(
  'slice',
  function(e, t) {
    for (
      var n = hn.call(dn(this), e, t),
        r = (function(e, t) {
          var n,
            r = L(e).constructor;
          return void 0 === r || null == (n = L(r)[ln]) ? t : Ye(n);
        })(this, this.constructor),
        o = 0,
        i = n.length,
        a = new (pn(r))(i);
      i > o;

    )
      a[o] = n[o++];
    return a;
  },
  h(function() {
    new Int8Array(1).slice();
  })
);
var vn = Re('unscopables'),
  yn = Array.prototype;
null == yn[vn] && q(yn, vn, pt(null));
var mn,
  wn = ye.includes;
Ue(
  { target: 'Array', proto: !0 },
  {
    includes: function(e) {
      return wn(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }
),
  (mn = 'includes'),
  (yn[vn][mn] = !0);
Qe('Array', 'includes');
Ue(
  { target: 'String', proto: !0, forced: !Ne('includes') },
  {
    includes: function(e) {
      return !!~String(T(this)).indexOf(
        qe(e),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }
);
Qe('String', 'includes');
function gn(e) {
  var t = this.constructor;
  return this.then(
    function(n) {
      return t.resolve(e()).then(function() {
        return n;
      });
    },
    function(n) {
      return t.resolve(e()).then(function() {
        return t.reject(n);
      });
    }
  );
}
var bn = setTimeout;
function _n(e) {
  return Boolean(e && void 0 !== e.length);
}
function kn() {}
function Sn(e) {
  if (!(this instanceof Sn))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    xn(e, this);
}
function Tn(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      Sn._immediateFn(function() {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var r;
          try {
            r = n(e._value);
          } catch (e) {
            return void En(t.promise, e);
          }
          On(t.promise, r);
        } else (1 === e._state ? On : En)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function On(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof Sn) return (e._state = 3), (e._value = t), void An(e);
      if ('function' == typeof n)
        return void xn(
          ((r = n),
          (o = t),
          function() {
            r.apply(o, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), An(e);
  } catch (t) {
    En(e, t);
  }
  var r, o;
}
function En(e, t) {
  (e._state = 2), (e._value = t), An(e);
}
function An(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    Sn._immediateFn(function() {
      e._handled || Sn._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) Tn(e, e._deferreds[t]);
  e._deferreds = null;
}
function In(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function xn(e, t) {
  var n = !1;
  try {
    e(
      function(e) {
        n || ((n = !0), On(t, e));
      },
      function(e) {
        n || ((n = !0), En(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), En(t, e);
  }
}
(Sn.prototype.catch = function(e) {
  return this.then(null, e);
}),
  (Sn.prototype.then = function(e, t) {
    var n = new this.constructor(kn);
    return Tn(this, new In(e, t, n)), n;
  }),
  (Sn.prototype.finally = gn),
  (Sn.all = function(e) {
    return new Sn(function(t, n) {
      if (!_n(e)) return n(new TypeError('Promise.all accepts an array'));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function i(e, a) {
        try {
          if (a && ('object' == typeof a || 'function' == typeof a)) {
            var c = a.then;
            if ('function' == typeof c)
              return void c.call(
                a,
                function(t) {
                  i(e, t);
                },
                n
              );
          }
          (r[e] = a), 0 == --o && t(r);
        } catch (e) {
          n(e);
        }
      }
      for (var a = 0; a < r.length; a++) i(a, r[a]);
    });
  }),
  (Sn.resolve = function(e) {
    return e && 'object' == typeof e && e.constructor === Sn
      ? e
      : new Sn(function(t) {
          t(e);
        });
  }),
  (Sn.reject = function(e) {
    return new Sn(function(t, n) {
      n(e);
    });
  }),
  (Sn.race = function(e) {
    return new Sn(function(t, n) {
      if (!_n(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var r = 0, o = e.length; r < o; r++) Sn.resolve(e[r]).then(t, n);
    });
  }),
  (Sn._immediateFn =
    ('function' == typeof setImmediate &&
      function(e) {
        setImmediate(e);
      }) ||
    function(e) {
      bn(e, 0);
    }),
  (Sn._unhandledRejectionFn = function(e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var jn = (function() {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'Promise' in jn
  ? jn.Promise.prototype.finally || (jn.Promise.prototype.finally = gn)
  : (jn.Promise = Sn),
  (function(e) {
    function t(e) {
      if ('utf-8' !== (e = void 0 === e ? 'utf-8' : e))
        throw new RangeError(
          "Failed to construct 'TextEncoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
    }
    function n(e, t) {
      if (
        ((t = void 0 === t ? { fatal: !1 } : t),
        'utf-8' !== (e = void 0 === e ? 'utf-8' : e))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function(e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            r = 0,
            o = Math.max(32, n + (n >> 1) + 7),
            i = new Uint8Array((o >> 3) << 3);
          t < n;

        ) {
          var a = e.charCodeAt(t++);
          if (55296 <= a && 56319 >= a) {
            if (t < n) {
              var c = e.charCodeAt(t);
              56320 == (64512 & c) &&
                (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= a && 56319 >= a) continue;
          }
          if (
            (r + 4 > i.length &&
              ((o += 8),
              (o = ((o *= 1 + (t / e.length) * 2) >> 3) << 3),
              (c = new Uint8Array(o)).set(i),
              (i = c)),
            0 == (4294967168 & a))
          )
            i[r++] = a;
          else {
            if (0 == (4294965248 & a)) i[r++] = ((a >> 6) & 31) | 192;
            else if (0 == (4294901760 & a))
              (i[r++] = ((a >> 12) & 15) | 224),
                (i[r++] = ((a >> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & a)) continue;
              (i[r++] = ((a >> 18) & 7) | 240),
                (i[r++] = ((a >> 12) & 63) | 128),
                (i[r++] = ((a >> 6) & 63) | 128);
            }
            i[r++] = (63 & a) | 128;
          }
        }
        return i.slice(0, r);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 }),
      (n.prototype.decode = function(e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        t = 0;
        for (var n = (e = new Uint8Array(e)).length, r = []; t < n; ) {
          var o = e[t++];
          if (0 === o) break;
          if (0 == (128 & o)) r.push(o);
          else if (192 == (224 & o)) {
            var i = 63 & e[t++];
            r.push(((31 & o) << 6) | i);
          } else if (224 == (240 & o)) {
            i = 63 & e[t++];
            var a = 63 & e[t++];
            r.push(((31 & o) << 12) | (i << 6) | a);
          } else if (240 == (248 & o)) {
            65535 <
              (o =
                ((7 & o) << 18) |
                ((i = 63 & e[t++]) << 12) |
                ((a = 63 & e[t++]) << 6) |
                (63 & e[t++])) &&
              ((o -= 65536),
              r.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
              r.push(o);
          }
        }
        return String.fromCharCode.apply(null, r);
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : i);
var Pn = c(function(e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function() {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function(t, n) {
          var r = e.locked.get(t);
          void 0 === r
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
        }),
        (this.isLocked = function(t) {
          return e.locked.has(t);
        }),
        (this.lock = function(t) {
          return new Promise(function(n, r) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function(t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var r = n.pop();
            e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function() {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function() {
    return n.getInstance();
  };
});
a(Pn);
var Cn = a(
  c(function(e, t) {
    var n =
        (i && i.__awaiter) ||
        function(e, t, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              e.done
                ? o(e.value)
                : new n(function(t) {
                    t(e.value);
                  }).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
      r =
        (i && i.__generator) ||
        function(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function() {
                return this;
              }),
            i
          );
          function c(i) {
            return function(c) {
              return (function(i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = 'browser-tabs-lock-key';
    function a(e) {
      return new Promise(function(t) {
        return setTimeout(t, e);
      });
    }
    function c(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          r = 0;
        r < e;
        r++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var u = (function() {
      function e() {
        (this.acquiredIatSet = new Set()),
          (this.id = Date.now().toString() + c(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ = this.releaseLock__private__.bind(
            this
          )),
          (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
            this
          )),
          (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
            this
          )),
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function(e, t) {
          return (
            void 0 === t && (t = 5e3),
            n(this, void 0, void 0, function() {
              var n, i, u, f, l, d;
              return r(this, function(r) {
                switch (r.label) {
                  case 0:
                    (n = Date.now() + c(4)),
                      (i = Date.now() + t),
                      (u = o + '-' + e),
                      (f = window.localStorage),
                      (r.label = 1);
                  case 1:
                    return Date.now() < i
                      ? null !== f.getItem(u)
                        ? [3, 4]
                        : ((l = this.id + '-' + e + '-' + n),
                          [4, a(Math.floor(25 * Math.random()))])
                      : [3, 7];
                  case 2:
                    return (
                      r.sent(),
                      f.setItem(
                        u,
                        JSON.stringify({
                          id: this.id,
                          iat: n,
                          timeoutKey: l,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now()
                        })
                      ),
                      [4, a(30)]
                    );
                  case 3:
                    return (
                      r.sent(),
                      null !== (d = f.getItem(u)) &&
                      (d = JSON.parse(d)).id === this.id &&
                      d.iat === n
                        ? (this.acquiredIatSet.add(n),
                          this.refreshLockWhileAcquired(u, n),
                          [2, !0])
                        : [3, 6]
                    );
                  case 4:
                    return s(), [4, this.waitForSomethingToChange(i)];
                  case 5:
                    r.sent(), (r.label = 6);
                  case 6:
                    return (n = Date.now() + c(4)), [3, 1];
                  case 7:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (e.prototype.refreshLockWhileAcquired = function(e, t) {
          return n(this, void 0, void 0, function() {
            var o = this;
            return r(this, function(i) {
              return (
                setTimeout(function() {
                  return n(o, void 0, void 0, function() {
                    var n, o;
                    return r(this, function(r) {
                      switch (r.label) {
                        case 0:
                          return [4, Pn.default().lock(t)];
                        case 1:
                          return (
                            r.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (o = n.getItem(e))
                                  ? (Pn.default().unlock(t), [2])
                                  : (((o = JSON.parse(
                                      o
                                    )).timeRefreshed = Date.now()),
                                    n.setItem(e, JSON.stringify(o)),
                                    Pn.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (Pn.default().unlock(t), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e.prototype.waitForSomethingToChange = function(t) {
          return n(this, void 0, void 0, function() {
            return r(this, function(n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function(n) {
                      var r = !1,
                        o = Date.now(),
                        i = 50,
                        a = !1;
                      function c() {
                        if (
                          (a ||
                            (window.removeEventListener('storage', c),
                            e.removeFromWaiting(c),
                            clearTimeout(u),
                            (a = !0)),
                          !r)
                        ) {
                          r = !0;
                          var t = i - (Date.now() - o);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', c), e.addToWaiting(c);
                      var u = setTimeout(c, Math.max(0, t - Date.now()));
                    })
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function(t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function(t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function(e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function() {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function(e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function(e) {
          return n(this, void 0, void 0, function() {
            return r(this, function(t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function(t) {
          return n(this, void 0, void 0, function() {
            var n, i, a;
            return r(this, function(r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (i = o + '-' + t),
                    null === (a = n.getItem(i))
                      ? [2]
                      : (a = JSON.parse(a)).id !== this.id
                      ? [3, 2]
                      : [4, Pn.default().lock(a.iat)]
                  );
                case 1:
                  r.sent(),
                    this.acquiredIatSet.delete(a.iat),
                    n.removeItem(i),
                    Pn.default().unlock(a.iat),
                    e.notifyWaiters(),
                    (r.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.waiters = void 0),
        e
      );
    })();
    function s() {
      for (
        var e = Date.now() - 5e3,
          t = window.localStorage,
          n = Object.keys(t),
          r = !1,
          i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (a.includes(o)) {
          var c = t.getItem(a);
          null !== c &&
            ((void 0 === (c = JSON.parse(c)).timeRefreshed &&
              c.timeAcquired < e) ||
              (void 0 !== c.timeRefreshed && c.timeRefreshed < e)) &&
            (t.removeItem(a), (r = !0));
        }
      }
      r && u.notifyWaiters();
    }
    t.default = u;
  })
);
function Un(e, t) {
  return (
    (t = t || {}),
    new Promise(function(n, r) {
      var o = new XMLHttpRequest(),
        i = [],
        a = [],
        c = {},
        u = function() {
          return {
            ok: 2 == ((o.status / 100) | 0),
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function() {
              return Promise.resolve(o.responseText);
            },
            json: function() {
              return Promise.resolve(JSON.parse(o.responseText));
            },
            blob: function() {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: u,
            headers: {
              keys: function() {
                return i;
              },
              entries: function() {
                return a;
              },
              get: function(e) {
                return c[e.toLowerCase()];
              },
              has: function(e) {
                return e.toLowerCase() in c;
              }
            }
          };
        };
      for (var s in (o.open(t.method || 'get', e, !0),
      (o.onload = function() {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
            i.push((t = t.toLowerCase())),
              a.push([t, n]),
              (c[t] = c[t] ? c[t] + ',' + n : n);
          }),
          n(u());
      }),
      (o.onerror = r),
      (o.withCredentials = 'include' == t.credentials),
      t.headers))
        o.setRequestHeader(s, t.headers[s]);
      o.send(t.body || null);
    })
  );
}
var Dn = { timeoutInSeconds: 60 },
  Fn = function(e) {
    return e.filter(function(t, n) {
      return e.indexOf(t) === n;
    });
  },
  Ln = { error: 'timeout', error_description: 'Timeout' },
  Rn = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = e.filter(Boolean).join();
    return Fn(n.replace(/\s/g, ',').split(','))
      .join(' ')
      .trim();
  },
  Mn = function() {
    var e = window.open(
      '',
      'auth0:authorize:popup',
      'left=100,top=100,width=400,height=600,resizable,scrollbars=yes,status=1'
    );
    if (!e) throw new Error('Could not open popup');
    return e;
  },
  qn = function(e, n, r) {
    return (
      (e.location.href = n),
      new Promise(function(n, o) {
        var i = setTimeout(function() {
          o(t(t({}, Ln), { popup: e }));
        }, 1e3 * (r.timeoutInSeconds || 60));
        window.addEventListener('message', function(t) {
          if (t.data && 'authorization_response' === t.data.type) {
            if ((clearTimeout(i), e.close(), t.data.response.error))
              return o(t.data.response);
            n(t.data.response);
          }
        });
      })
    );
  },
  Wn = function() {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Vn().getRandomValues(new Uint8Array(43))).forEach(function(n) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Nn = function(e) {
    return btoa(e);
  },
  zn = function(e) {
    return Object.keys(e)
      .filter(function(t) {
        return void 0 !== e[t];
      })
      .map(function(t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  Jn = function(e) {
    return r(void 0, void 0, void 0, function() {
      var t;
      return o(this, function(n) {
        switch (n.label) {
          case 0:
            return (
              (t = Kn().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function(e, n) {
                      (t.oncomplete = function(t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function(e) {
                          n(e.error);
                        }),
                        (t.onabort = function() {
                          n('The digest operation was aborted');
                        });
                    })
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Bn = function(e) {
    return (function(e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function(e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  Gn = function(e) {
    var t = new Uint8Array(e);
    return (function(e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[\+\/=]/g, function(e) {
        return t[e];
      });
    })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
  },
  Hn = function(e, t) {
    return r(void 0, void 0, void 0, function() {
      var r, i, a, c, u, s, f;
      return o(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, Un(e, t)];
          case 1:
            if (!(r = o.sent()).ok && 429 === r.status)
              throw (((f = new Error('to_many_requests')).error_description =
                'To Many Requests'),
              f);
            return [4, r.json()];
          case 2:
            if (
              ((i = o.sent()),
              (a = i.error),
              (c = i.error_description),
              (u = n(i, ['error', 'error_description'])),
              !r.ok)
            )
              throw ((s = c || 'HTTP error. Unable to fetch ' + e),
              ((f = new Error(s)).error = a || 'request_error'),
              (f.error_description = s),
              f);
            return [2, u];
        }
      });
    });
  },
  Yn = function(e) {
    return r(void 0, void 0, void 0, function() {
      var r = e.baseUrl,
        i = n(e, ['baseUrl']);
      return o(this, function(e) {
        switch (e.label) {
          case 0:
            return [
              4,
              Hn(r + '/oauth/token', {
                method: 'POST',
                body: JSON.stringify(
                  t(
                    {
                      grant_type: 'authorization_code',
                      redirect_uri: window.location.origin
                    },
                    i
                  )
                ),
                headers: { 'Content-type': 'application/json' }
              })
            ];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  },
  Vn = function() {
    return window.crypto || window.msCrypto;
  },
  Kn = function() {
    var e = Vn();
    return e.subtle || e.webkitSubtle;
  },
  Qn = function() {
    if (!Vn())
      throw new Error(
        'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
      );
    if (void 0 === Kn())
      throw new Error(
        '\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    '
      );
  },
  Xn = function(e) {
    return e.audience + '::' + e.scope;
  },
  Zn = (function() {
    function e() {
      this.cache = {};
    }
    return (
      (e.prototype.save = function(e) {
        var t = this,
          n = Xn(e);
        this.cache[n] = e;
        var r,
          o,
          i,
          a =
            ((r = e.expires_in),
            (o = e.decodedToken.claims.exp),
            (i = (new Date(1e3 * o).getTime() - new Date().getTime()) / 1e3),
            1e3 * Math.min(r, i) * 0.8);
        setTimeout(function() {
          delete t.cache[n];
        }, a);
      }),
      (e.prototype.get = function(e) {
        return this.cache[Xn(e)];
      }),
      e
    );
  })(),
  $n = c(function(e, t) {
    var n =
      (i && i.__assign) ||
      Object.assign ||
      function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      };
    function r(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function o(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function(e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            r('Expires', e.expires ? e.expires.toUTCString() : '') +
            r('Domain', e.domain) +
            r('Path', e.path) +
            r('Secure', e.secure) +
            r('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function a(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], r = /(%[0-9A-Z]{2})+/g, o = 0;
        o < n.length;
        o++
      ) {
        var i = n[o].split('='),
          a = i.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[i[0].replace(r, decodeURIComponent)] = a.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function c() {
      return a(document.cookie);
    }
    function u(e, t, r) {
      document.cookie = o(e, t, n({ path: '/' }, r));
    }
    (t.__esModule = !0),
      (t.encode = o),
      (t.parse = a),
      (t.getAll = c),
      (t.get = function(e) {
        return c()[e];
      }),
      (t.set = u),
      (t.remove = function(e, t) {
        u(e, '', n({}, t, { expires: -1 }));
      });
  });
a($n);
$n.encode, $n.parse;
var er = $n.getAll,
  tr = $n.get,
  nr = $n.set,
  rr = $n.remove,
  or = function() {
    return Object.keys(er() || {});
  },
  ir = function(e) {
    var t = tr(e);
    if (void 0 !== t) return JSON.parse(t);
  },
  ar = function(e, t, n) {
    nr(e, JSON.stringify(t), { expires: n.daysUntilExpire });
  },
  cr = function(e) {
    rr(e);
  },
  ur = 'a0.spajs.txs.',
  sr = function(e) {
    return '' + ur + e;
  },
  fr = (function() {
    function e() {
      var e = this;
      (this.transactions = {}),
        or()
          .filter(function(e) {
            return e.startsWith(ur);
          })
          .forEach(function(t) {
            var n = t.replace(ur, '');
            e.transactions[n] = ir(t);
          });
    }
    return (
      (e.prototype.create = function(e, t) {
        (this.transactions[e] = t), ar(sr(e), t, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function(e) {
        return this.transactions[e];
      }),
      (e.prototype.remove = function(e) {
        delete this.transactions[e], cr(sr(e));
      }),
      e
    );
  })(),
  lr = function(e) {
    return 'number' == typeof e;
  },
  dr = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm'
  ],
  pr = function(e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function(e) {
      var t = e.split('.'),
        n = t[0],
        r = t[1],
        o = t[2];
      if (3 !== t.length || !n || !r || !o)
        throw new Error('ID token could not be decoded');
      var i = JSON.parse(Bn(r)),
        a = { __raw: e },
        c = {};
      return (
        Object.keys(i).forEach(function(e) {
          (a[e] = i[e]), dr.includes(e) || (c[e] = i[e]);
        }),
        {
          encoded: { header: n, payload: r, signature: o },
          header: JSON.parse(Bn(n)),
          claims: a,
          user: c
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "' +
          e.iss +
          '", found "' +
          t.claims.iss +
          '"'
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "' +
          t.header.alg +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but was not one of "' +
            t.claims.aud.join(', ') +
            '"'
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              e.aud +
              '", found "' +
              t.claims.azp +
              '"'
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          e.aud +
          '" but found "' +
          t.claims.aud +
          '"'
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "' +
            e.nonce +
            '", found "' +
            t.claims.nonce +
            '"'
        );
    }
    if (e.max_age && !lr(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!lr(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!lr(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      r = new Date(),
      o = new Date(0),
      i = new Date(0),
      a = new Date(0);
    if (
      (a.setUTCSeconds((parseInt(t.claims.auth_time) + e.max_age) / 1e3 + n),
      o.setUTCSeconds(t.claims.exp + n),
      i.setUTCSeconds(t.claims.nbf - n),
      r > o)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time (' +
          r +
          ') is after expiration time (' +
          o +
          ')'
      );
    if (lr(t.claims.nbf) && r < i)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          r +
          ') is before ' +
          i
      );
    if (lr(t.claims.auth_time) && r > a)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          r +
          ') is after last auth at ' +
          a
      );
    return t;
  },
  hr = (function(t) {
    function n(e, r, o) {
      var i = t.call(this, r) || this;
      return (
        (i.error = e),
        (i.error_description = r),
        (i.state = o),
        Object.setPrototypeOf(i, n.prototype),
        i
      );
    }
    return (
      (function(t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      })(n, t),
      n
    );
  })(Error),
  vr = new Cn(),
  yr = (function() {
    function e(e) {
      (this.options = e),
        (this.DEFAULT_SCOPE = 'openid profile email'),
        (this.cache = new Zn()),
        (this.transactionManager = new fr()),
        (this.domainUrl = 'https://' + this.options.domain),
        (this.tokenIssuer = this.options.issuer
          ? 'https://' + this.options.issuer + '/'
          : this.domainUrl + '/');
    }
    return (
      (e.prototype._url = function(e) {
        var t = encodeURIComponent(
          btoa(JSON.stringify({ name: 'auth0-spa-js', version: '1.6.2' }))
        );
        return '' + this.domainUrl + e + '&auth0Client=' + t;
      }),
      (e.prototype._getParams = function(e, r, o, i, a) {
        var c = this.options,
          u = (c.domain, c.leeway, n(c, ['domain', 'leeway']));
        return t(t(t({}, u), e), {
          scope: Rn(this.DEFAULT_SCOPE, this.options.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: r,
          nonce: o,
          redirect_uri: a || this.options.redirect_uri,
          code_challenge: i,
          code_challenge_method: 'S256'
        });
      }),
      (e.prototype._authorizeUrl = function(e) {
        return this._url('/authorize?' + zn(e));
      }),
      (e.prototype._verifyIdToken = function(e, t) {
        return pr({
          iss: this.tokenIssuer,
          aud: this.options.client_id,
          id_token: e,
          nonce: t,
          leeway: this.options.leeway,
          max_age: this._parseNumber(this.options.max_age)
        });
      }),
      (e.prototype._parseNumber = function(e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype.buildAuthorizeUrl = function(e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function() {
            var t, r, i, a, c, u, s, f, l, d, p;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (r = e.appState),
                    (i = n(e, ['redirect_uri', 'appState'])),
                    (a = Nn(Wn())),
                    (c = Wn()),
                    (u = Wn()),
                    [4, Jn(u)]
                  );
                case 1:
                  return (
                    (s = o.sent()),
                    (f = Gn(s)),
                    (l = e.fragment ? '#' + e.fragment : ''),
                    (d = this._getParams(i, a, c, f, t)),
                    (p = this._authorizeUrl(d)),
                    this.transactionManager.create(a, {
                      nonce: c,
                      code_verifier: u,
                      appState: r,
                      scope: d.scope,
                      audience: d.audience || 'default'
                    }),
                    [2, p + l]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function(e, i) {
        return (
          void 0 === e && (e = {}),
          void 0 === i && (i = Dn),
          r(this, void 0, void 0, function() {
            var r, a, c, u, s, f, l, d, p, h, v, y, m;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return [4, Mn()];
                case 1:
                  return (
                    (r = o.sent()),
                    (a = n(e, [])),
                    (c = Nn(Wn())),
                    (u = Wn()),
                    (s = Wn()),
                    [4, Jn(s)]
                  );
                case 2:
                  return (
                    (f = o.sent()),
                    (l = Gn(f)),
                    (d = this._getParams(
                      a,
                      c,
                      u,
                      l,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (p = this._authorizeUrl(
                      t(t({}, d), { response_mode: 'web_message' })
                    )),
                    [4, qn(r, p, i)]
                  );
                case 3:
                  if (((h = o.sent()), c !== h.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    Yn({
                      baseUrl: this.domainUrl,
                      audience: e.audience || this.options.audience,
                      client_id: this.options.client_id,
                      code_verifier: s,
                      code: h.code
                    })
                  ];
                case 4:
                  return (
                    (v = o.sent()),
                    (y = this._verifyIdToken(v.id_token, u)),
                    (m = t(t({}, v), {
                      decodedToken: y,
                      scope: d.scope,
                      audience: d.audience || 'default'
                    })),
                    this.cache.save(m),
                    ar('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getUser = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience || 'default',
              scope: this.options.scope || this.DEFAULT_SCOPE
            }),
          r(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
              return (
                (e.scope = Rn(this.DEFAULT_SCOPE, e.scope)),
                [2, (t = this.cache.get(e)) && t.decodedToken.user]
              );
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience || 'default',
              scope: this.options.scope || this.DEFAULT_SCOPE
            }),
          r(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
              return (
                (e.scope = Rn(this.DEFAULT_SCOPE, e.scope)),
                [2, (t = this.cache.get(e)) && t.decodedToken.claims]
              );
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function(e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
              switch (n.label) {
                case 0:
                  return [4, this.buildAuthorizeUrl(e)];
                case 1:
                  return (t = n.sent()), window.location.assign(t), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function(e) {
        return (
          void 0 === e && (e = window.location.href),
          r(this, void 0, void 0, function() {
            var n, r, i, a, c, u, s, f, l, d;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  if (0 === (n = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((r = (function(e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var n = e.split('&'),
                        r = {};
                      return (
                        n.forEach(function(e) {
                          var t = e.split('='),
                            n = t[0],
                            o = t[1];
                          r[n] = decodeURIComponent(o);
                        }),
                        t(t({}, r), { expires_in: parseInt(r.expires_in) })
                      );
                    })(n.join(''))),
                    (i = r.state),
                    (a = r.code),
                    (c = r.error),
                    (u = r.error_description),
                    c)
                  )
                    throw (this.transactionManager.remove(i), new hr(c, u, i));
                  if (!(s = this.transactionManager.get(i)))
                    throw new Error('Invalid state');
                  return (
                    this.transactionManager.remove(i),
                    [
                      4,
                      Yn({
                        baseUrl: this.domainUrl,
                        audience: this.options.audience,
                        client_id: this.options.client_id,
                        code_verifier: s.code_verifier,
                        code: a
                      })
                    ]
                  );
                case 1:
                  return (
                    (f = o.sent()),
                    (l = this._verifyIdToken(f.id_token, s.nonce)),
                    (d = t(t({}, f), {
                      decodedToken: l,
                      audience: s.audience,
                      scope: s.scope
                    })),
                    this.cache.save(d),
                    ar('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2, { appState: s.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getTokenSilently = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.DEFAULT_SCOPE,
              ignoreCache: !1
            }),
          r(this, void 0, void 0, function() {
            var r, i, a, c, u, s, f, l, d, p, h, v, y, m, w, g, b;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  (e.scope = Rn(this.DEFAULT_SCOPE, e.scope)), (o.label = 1);
                case 1:
                  return (
                    o.trys.push([1, 6, 7, 9]),
                    (r = e.audience),
                    (i = e.scope),
                    (a = e.ignoreCache),
                    (c = n(e, ['audience', 'scope', 'ignoreCache'])),
                    !a &&
                    (u = this.cache.get({ scope: i, audience: r || 'default' }))
                      ? [2, u.access_token]
                      : [4, vr.acquireLock('auth0.lock.getTokenSilently', 5e3)]
                  );
                case 2:
                  return (
                    o.sent(), (s = Nn(Wn())), (f = Wn()), (l = Wn()), [4, Jn(l)]
                  );
                case 3:
                  return (
                    (d = o.sent()),
                    (p = Gn(d)),
                    (h = t({ audience: r, scope: i }, c)),
                    (v = this._getParams(
                      h,
                      s,
                      f,
                      p,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (y = this._authorizeUrl(
                      t(t({}, v), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    [
                      4,
                      ((_ = y),
                      (k = this.domainUrl),
                      new Promise(function(e, t) {
                        var n = window.document.createElement('iframe');
                        n.setAttribute('width', '0'),
                          n.setAttribute('height', '0'),
                          (n.style.display = 'none');
                        var r = setTimeout(function() {
                            t(Ln), window.document.body.removeChild(n);
                          }, 6e4),
                          o = function(i) {
                            i.origin == k &&
                              i.data &&
                              'authorization_response' === i.data.type &&
                              (i.source.close(),
                              i.data.response.error
                                ? t(i.data.response)
                                : e(i.data.response),
                              clearTimeout(r),
                              window.removeEventListener('message', o, !1),
                              window.document.body.removeChild(n));
                          };
                        window.addEventListener('message', o, !1),
                          window.document.body.appendChild(n),
                          n.setAttribute('src', _);
                      }))
                    ]
                  );
                case 4:
                  if (((m = o.sent()), s !== m.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    Yn({
                      baseUrl: this.domainUrl,
                      audience: e.audience || this.options.audience,
                      client_id: this.options.client_id,
                      code_verifier: l,
                      code: m.code
                    })
                  ];
                case 5:
                  return (
                    (w = o.sent()),
                    (g = this._verifyIdToken(w.id_token, f)),
                    (b = t(t({}, w), {
                      decodedToken: g,
                      scope: v.scope,
                      audience: v.audience || 'default'
                    })),
                    this.cache.save(b),
                    ar('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2, w.access_token]
                  );
                case 6:
                  throw o.sent();
                case 7:
                  return [4, vr.releaseLock('auth0.lock.getTokenSilently')];
                case 8:
                  return o.sent(), [7];
                case 9:
                  return [2];
              }
              var _, k;
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function(e, t) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.DEFAULT_SCOPE
            }),
          void 0 === t && (t = Dn),
          r(this, void 0, void 0, function() {
            return o(this, function(n) {
              switch (n.label) {
                case 0:
                  return (
                    (e.scope = Rn(
                      this.DEFAULT_SCOPE,
                      this.options.scope,
                      e.scope
                    )),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    n.sent(),
                    [
                      2,
                      this.cache.get({
                        scope: e.scope,
                        audience: e.audience || 'default'
                      }).access_token
                    ]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function() {
        return r(this, void 0, void 0, function() {
          return o(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.logout = function(e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id,
          cr('auth0.is.authenticated');
        var t = e.federated,
          r = n(e, ['federated']),
          o = t ? '&federated' : '',
          i = this._url('/v2/logout?' + zn(r));
        window.location.assign('' + i + o);
      }),
      e
    );
  })();
export default function(e) {
  return r(this, void 0, void 0, function() {
    var t;
    return o(this, function(n) {
      switch (n.label) {
        case 0:
          if ((Qn(), (t = new yr(e)), !ir('auth0.is.authenticated')))
            return [2, t];
          n.label = 1;
        case 1:
          return (
            n.trys.push([1, 3, , 4]),
            [
              4,
              t.getTokenSilently({
                audience: e.audience,
                scope: e.scope,
                ignoreCache: !0
              })
            ]
          );
        case 2:
        case 3:
          return n.sent(), [3, 4];
        case 4:
          return [2, t];
      }
    });
  });
}
//# sourceMappingURL=auth0-spa-js.production.esm.js.map

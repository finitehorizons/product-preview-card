(function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === "childList")
                for (const u of o.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : l.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = t(l);
        fetch(l.href, o);
    }
})();
function sc(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Ki = { exports: {} },
    nl = {},
    Yi = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
    ac = Symbol.for("react.portal"),
    cc = Symbol.for("react.fragment"),
    fc = Symbol.for("react.strict_mode"),
    dc = Symbol.for("react.profiler"),
    pc = Symbol.for("react.provider"),
    mc = Symbol.for("react.context"),
    vc = Symbol.for("react.forward_ref"),
    hc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.memo"),
    gc = Symbol.for("react.lazy"),
    Iu = Symbol.iterator;
function wc(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Iu && e[Iu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Xi = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Gi = Object.assign,
    Zi = {};
function ut(e, n, t) {
    (this.props = e),
        (this.context = n),
        (this.refs = Zi),
        (this.updater = t || Xi);
}
ut.prototype.isReactComponent = {};
ut.prototype.setState = function (e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, n, "setState");
};
ut.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ji() {}
Ji.prototype = ut.prototype;
function Ao(e, n, t) {
    (this.props = e),
        (this.context = n),
        (this.refs = Zi),
        (this.updater = t || Xi);
}
var Vo = (Ao.prototype = new Ji());
Vo.constructor = Ao;
Gi(Vo, ut.prototype);
Vo.isPureReactComponent = !0;
var Fu = Array.isArray,
    qi = Object.prototype.hasOwnProperty,
    Bo = { current: null },
    bi = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
    var r,
        l = {},
        o = null,
        u = null;
    if (n != null)
        for (r in (n.ref !== void 0 && (u = n.ref),
        n.key !== void 0 && (o = "" + n.key),
        n))
            qi.call(n, r) && !bi.hasOwnProperty(r) && (l[r] = n[r]);
    var i = arguments.length - 2;
    if (i === 1) l.children = t;
    else if (1 < i) {
        for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
    return {
        $$typeof: Gt,
        type: e,
        key: o,
        ref: u,
        props: l,
        _owner: Bo.current,
    };
}
function Sc(e, n) {
    return {
        $$typeof: Gt,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Ho(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function kc(e) {
    var n = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (t) {
            return n[t];
        })
    );
}
var Uu = /\/+/g;
function Sl(e, n) {
    return typeof e == "object" && e !== null && e.key != null
        ? kc("" + e.key)
        : n.toString(36);
}
function wr(e, n, t, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var u = !1;
    if (e === null) u = !0;
    else
        switch (o) {
            case "string":
            case "number":
                u = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Gt:
                    case ac:
                        u = !0;
                }
        }
    if (u)
        return (
            (u = e),
            (l = l(u)),
            (e = r === "" ? "." + Sl(u, 0) : r),
            Fu(l)
                ? ((t = ""),
                  e != null && (t = e.replace(Uu, "$&/") + "/"),
                  wr(l, n, t, "", function (c) {
                      return c;
                  }))
                : l != null &&
                  (Ho(l) &&
                      (l = Sc(
                          l,
                          t +
                              (!l.key || (u && u.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(Uu, "$&/") + "/") +
                              e
                      )),
                  n.push(l)),
            1
        );
    if (((u = 0), (r = r === "" ? "." : r + ":"), Fu(e)))
        for (var i = 0; i < e.length; i++) {
            o = e[i];
            var s = r + Sl(o, i);
            u += wr(o, n, t, s, l);
        }
    else if (((s = wc(e)), typeof s == "function"))
        for (e = s.call(e), i = 0; !(o = e.next()).done; )
            (o = o.value), (s = r + Sl(o, i++)), (u += wr(o, n, t, s, l));
    else if (o === "object")
        throw (
            ((n = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (n === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : n) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return u;
}
function tr(e, n, t) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        wr(e, r, "", "", function (o) {
            return n.call(t, o, l++);
        }),
        r
    );
}
function Ec(e) {
    if (e._status === -1) {
        var n = e._result;
        (n = n()),
            n.then(
                function (t) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = t));
                },
                function (t) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = t));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = n));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ie = { current: null },
    Sr = { transition: null },
    xc = {
        ReactCurrentDispatcher: ie,
        ReactCurrentBatchConfig: Sr,
        ReactCurrentOwner: Bo,
    };
L.Children = {
    map: tr,
    forEach: function (e, n, t) {
        tr(
            e,
            function () {
                n.apply(this, arguments);
            },
            t
        );
    },
    count: function (e) {
        var n = 0;
        return (
            tr(e, function () {
                n++;
            }),
            n
        );
    },
    toArray: function (e) {
        return (
            tr(e, function (n) {
                return n;
            }) || []
        );
    },
    only: function (e) {
        if (!Ho(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
L.Component = ut;
L.Fragment = cc;
L.Profiler = dc;
L.PureComponent = Ao;
L.StrictMode = fc;
L.Suspense = hc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
L.cloneElement = function (e, n, t) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Gi({}, e.props),
        l = e.key,
        o = e.ref,
        u = e._owner;
    if (n != null) {
        if (
            (n.ref !== void 0 && ((o = n.ref), (u = Bo.current)),
            n.key !== void 0 && (l = "" + n.key),
            e.type && e.type.defaultProps)
        )
            var i = e.type.defaultProps;
        for (s in n)
            qi.call(n, s) &&
                !bi.hasOwnProperty(s) &&
                (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = t;
    else if (1 < s) {
        i = Array(s);
        for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
        r.children = i;
    }
    return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: u };
};
L.createContext = function (e) {
    return (
        (e = {
            $$typeof: mc,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: pc, _context: e }),
        (e.Consumer = e)
    );
};
L.createElement = es;
L.createFactory = function (e) {
    var n = es.bind(null, e);
    return (n.type = e), n;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (e) {
    return { $$typeof: vc, render: e };
};
L.isValidElement = Ho;
L.lazy = function (e) {
    return { $$typeof: gc, _payload: { _status: -1, _result: e }, _init: Ec };
};
L.memo = function (e, n) {
    return { $$typeof: yc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
    var n = Sr.transition;
    Sr.transition = {};
    try {
        e();
    } finally {
        Sr.transition = n;
    }
};
L.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, n) {
    return ie.current.useCallback(e, n);
};
L.useContext = function (e) {
    return ie.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
    return ie.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
    return ie.current.useEffect(e, n);
};
L.useId = function () {
    return ie.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
    return ie.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
    return ie.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
    return ie.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
    return ie.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
    return ie.current.useReducer(e, n, t);
};
L.useRef = function (e) {
    return ie.current.useRef(e);
};
L.useState = function (e) {
    return ie.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
    return ie.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
    return ie.current.useTransition();
};
L.version = "18.2.0";
Yi.exports = L;
var Wo = Yi.exports;
const tn = sc(Wo);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = Wo,
    _c = Symbol.for("react.element"),
    Nc = Symbol.for("react.fragment"),
    Pc = Object.prototype.hasOwnProperty,
    zc =
        Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, n, t) {
    var r,
        l = {},
        o = null,
        u = null;
    t !== void 0 && (o = "" + t),
        n.key !== void 0 && (o = "" + n.key),
        n.ref !== void 0 && (u = n.ref);
    for (r in n) Pc.call(n, r) && !Lc.hasOwnProperty(r) && (l[r] = n[r]);
    if (e && e.defaultProps)
        for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
    return {
        $$typeof: _c,
        type: e,
        key: o,
        ref: u,
        props: l,
        _owner: zc.current,
    };
}
nl.Fragment = Nc;
nl.jsx = ns;
nl.jsxs = ns;
Ki.exports = nl;
var G = Ki.exports,
    Kl = {},
    ts = { exports: {} },
    ge = {},
    rs = { exports: {} },
    ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function n(x, P) {
        var z = x.length;
        x.push(P);
        e: for (; 0 < z; ) {
            var H = (z - 1) >>> 1,
                X = x[H];
            if (0 < l(X, P)) (x[H] = P), (x[z] = X), (z = H);
            else break e;
        }
    }
    function t(x) {
        return x.length === 0 ? null : x[0];
    }
    function r(x) {
        if (x.length === 0) return null;
        var P = x[0],
            z = x.pop();
        if (z !== P) {
            x[0] = z;
            e: for (var H = 0, X = x.length, er = X >>> 1; H < er; ) {
                var gn = 2 * (H + 1) - 1,
                    wl = x[gn],
                    wn = gn + 1,
                    nr = x[wn];
                if (0 > l(wl, z))
                    wn < X && 0 > l(nr, wl)
                        ? ((x[H] = nr), (x[wn] = z), (H = wn))
                        : ((x[H] = wl), (x[gn] = z), (H = gn));
                else if (wn < X && 0 > l(nr, z))
                    (x[H] = nr), (x[wn] = z), (H = wn);
                else break e;
            }
        }
        return P;
    }
    function l(x, P) {
        var z = x.sortIndex - P.sortIndex;
        return z !== 0 ? z : x.id - P.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var u = Date,
            i = u.now();
        e.unstable_now = function () {
            return u.now() - i;
        };
    }
    var s = [],
        c = [],
        v = 1,
        m = null,
        p = 3,
        g = !1,
        w = !1,
        S = !1,
        I = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(x) {
        for (var P = t(c); P !== null; ) {
            if (P.callback === null) r(c);
            else if (P.startTime <= x)
                r(c), (P.sortIndex = P.expirationTime), n(s, P);
            else break;
            P = t(c);
        }
    }
    function h(x) {
        if (((S = !1), d(x), !w))
            if (t(s) !== null) (w = !0), yl(E);
            else {
                var P = t(c);
                P !== null && gl(h, P.startTime - x);
            }
    }
    function E(x, P) {
        (w = !1), S && ((S = !1), f(N), (N = -1)), (g = !0);
        var z = p;
        try {
            for (
                d(P), m = t(s);
                m !== null && (!(m.expirationTime > P) || (x && !Ne()));

            ) {
                var H = m.callback;
                if (typeof H == "function") {
                    (m.callback = null), (p = m.priorityLevel);
                    var X = H(m.expirationTime <= P);
                    (P = e.unstable_now()),
                        typeof X == "function"
                            ? (m.callback = X)
                            : m === t(s) && r(s),
                        d(P);
                } else r(s);
                m = t(s);
            }
            if (m !== null) var er = !0;
            else {
                var gn = t(c);
                gn !== null && gl(h, gn.startTime - P), (er = !1);
            }
            return er;
        } finally {
            (m = null), (p = z), (g = !1);
        }
    }
    var C = !1,
        _ = null,
        N = -1,
        B = 5,
        T = -1;
    function Ne() {
        return !(e.unstable_now() - T < B);
    }
    function at() {
        if (_ !== null) {
            var x = e.unstable_now();
            T = x;
            var P = !0;
            try {
                P = _(!0, x);
            } finally {
                P ? ct() : ((C = !1), (_ = null));
            }
        } else C = !1;
    }
    var ct;
    if (typeof a == "function")
        ct = function () {
            a(at);
        };
    else if (typeof MessageChannel < "u") {
        var Du = new MessageChannel(),
            ic = Du.port2;
        (Du.port1.onmessage = at),
            (ct = function () {
                ic.postMessage(null);
            });
    } else
        ct = function () {
            I(at, 0);
        };
    function yl(x) {
        (_ = x), C || ((C = !0), ct());
    }
    function gl(x, P) {
        N = I(function () {
            x(e.unstable_now());
        }, P);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (x) {
            x.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || g || ((w = !0), yl(E));
        }),
        (e.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (B = 0 < x ? Math.floor(1e3 / x) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return t(s);
        }),
        (e.unstable_next = function (x) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = p;
            }
            var z = p;
            p = P;
            try {
                return x();
            } finally {
                p = z;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (x, P) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3;
            }
            var z = p;
            p = x;
            try {
                return P();
            } finally {
                p = z;
            }
        }),
        (e.unstable_scheduleCallback = function (x, P, z) {
            var H = e.unstable_now();
            switch (
                (typeof z == "object" && z !== null
                    ? ((z = z.delay),
                      (z = typeof z == "number" && 0 < z ? H + z : H))
                    : (z = H),
                x)
            ) {
                case 1:
                    var X = -1;
                    break;
                case 2:
                    X = 250;
                    break;
                case 5:
                    X = 1073741823;
                    break;
                case 4:
                    X = 1e4;
                    break;
                default:
                    X = 5e3;
            }
            return (
                (X = z + X),
                (x = {
                    id: v++,
                    callback: P,
                    priorityLevel: x,
                    startTime: z,
                    expirationTime: X,
                    sortIndex: -1,
                }),
                z > H
                    ? ((x.sortIndex = z),
                      n(c, x),
                      t(s) === null &&
                          x === t(c) &&
                          (S ? (f(N), (N = -1)) : (S = !0), gl(h, z - H)))
                    : ((x.sortIndex = X), n(s, x), w || g || ((w = !0), yl(E))),
                x
            );
        }),
        (e.unstable_shouldYield = Ne),
        (e.unstable_wrapCallback = function (x) {
            var P = p;
            return function () {
                var z = p;
                p = P;
                try {
                    return x.apply(this, arguments);
                } finally {
                    p = z;
                }
            };
        });
})(ls);
rs.exports = ls;
var Tc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var os = Wo,
    ye = Tc;
function y(e) {
    for (
        var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            t = 1;
        t < arguments.length;
        t++
    )
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var us = new Set(),
    Rt = {};
function Rn(e, n) {
    bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
    for (Rt[e] = n, e = 0; e < n.length; e++) us.add(n[e]);
}
var We = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Yl = Object.prototype.hasOwnProperty,
    Oc =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $u = {},
    Au = {};
function Rc(e) {
    return Yl.call(Au, e)
        ? !0
        : Yl.call($u, e)
        ? !1
        : Oc.test(e)
        ? (Au[e] = !0)
        : (($u[e] = !0), !1);
}
function Mc(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : t !== null
                ? !t.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function jc(e, n, t, r) {
    if (n === null || typeof n > "u" || Mc(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
        switch (t.type) {
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
    return !1;
}
function se(e, n, t, r, l, o, u) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = o),
        (this.removeEmptyString = u);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ee[e] = new se(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var n = e[0];
    ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qo = /[\-:]([a-z])/g;
function Ko(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Qo, Ko);
        ee[n] = new se(n, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Qo, Ko);
        ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(Qo, Ko);
    ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, n, t, r) {
    var l = ee.hasOwnProperty(n) ? ee[n] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
        (jc(n, t, l, r) && (t = null),
        r || l === null
            ? Rc(n) &&
              (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
            : l.mustUseProperty
            ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
            : ((n = l.attributeName),
              (r = l.attributeNamespace),
              t === null
                  ? e.removeAttribute(n)
                  : ((l = l.type),
                    (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = os.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rr = Symbol.for("react.element"),
    Dn = Symbol.for("react.portal"),
    In = Symbol.for("react.fragment"),
    Xo = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    is = Symbol.for("react.provider"),
    ss = Symbol.for("react.context"),
    Go = Symbol.for("react.forward_ref"),
    Gl = Symbol.for("react.suspense"),
    Zl = Symbol.for("react.suspense_list"),
    Zo = Symbol.for("react.memo"),
    Ze = Symbol.for("react.lazy"),
    as = Symbol.for("react.offscreen"),
    Vu = Symbol.iterator;
function ft(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Vu && e[Vu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var A = Object.assign,
    kl;
function wt(e) {
    if (kl === void 0)
        try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            kl = (n && n[1]) || "";
        }
    return (
        `
` +
        kl +
        e
    );
}
var El = !1;
function xl(e, n) {
    if (!e || El) return "";
    El = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (
                ((n = function () {
                    throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(n, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (c) {
                    r = c;
                }
                e.call(n.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var l = c.stack.split(`
`),
                    o = r.stack.split(`
`),
                    u = l.length - 1,
                    i = o.length - 1;
                1 <= u && 0 <= i && l[u] !== o[i];

            )
                i--;
            for (; 1 <= u && 0 <= i; u--, i--)
                if (l[u] !== o[i]) {
                    if (u !== 1 || i !== 1)
                        do
                            if ((u--, i--, 0 > i || l[u] !== o[i])) {
                                var s =
                                    `
` + l[u].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        s.includes("<anonymous>") &&
                                        (s = s.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= u && 0 <= i);
                    break;
                }
        }
    } finally {
        (El = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Dc(e) {
    switch (e.tag) {
        case 5:
            return wt(e.type);
        case 16:
            return wt("Lazy");
        case 13:
            return wt("Suspense");
        case 19:
            return wt("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = xl(e.type, !1)), e;
        case 11:
            return (e = xl(e.type.render, !1)), e;
        case 1:
            return (e = xl(e.type, !0)), e;
        default:
            return "";
    }
}
function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case In:
            return "Fragment";
        case Dn:
            return "Portal";
        case Xl:
            return "Profiler";
        case Xo:
            return "StrictMode";
        case Gl:
            return "Suspense";
        case Zl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case ss:
                return (e.displayName || "Context") + ".Consumer";
            case is:
                return (e._context.displayName || "Context") + ".Provider";
            case Go:
                var n = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = n.displayName || n.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Zo:
                return (
                    (n = e.displayName || null),
                    n !== null ? n : Jl(e.type) || "Memo"
                );
            case Ze:
                (n = e._payload), (e = e._init);
                try {
                    return Jl(e(n));
                } catch {}
        }
    return null;
}
function Ic(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = n.render),
                (e = e.displayName || e.name || ""),
                n.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jl(n);
        case 8:
            return n === Xo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n;
    }
    return null;
}
function pn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function cs(e) {
    var n = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (n === "checkbox" || n === "radio")
    );
}
function Fc(e) {
    var n = cs(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (
        !e.hasOwnProperty(n) &&
        typeof t < "u" &&
        typeof t.get == "function" &&
        typeof t.set == "function"
    ) {
        var l = t.get,
            o = t.set;
        return (
            Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (u) {
                    (r = "" + u), o.call(this, u);
                },
            }),
            Object.defineProperty(e, n, { enumerable: t.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (u) {
                    r = "" + u;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[n];
                },
            }
        );
    }
}
function lr(e) {
    e._valueTracker || (e._valueTracker = Fc(e));
}
function fs(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return (
        e && (r = cs(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== t ? (n.setValue(e), !0) : !1
    );
}
function Or(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function ql(e, n) {
    var t = n.checked;
    return A({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked,
    });
}
function Bu(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    (t = pn(n.value != null ? n.value : t)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled:
                n.type === "checkbox" || n.type === "radio"
                    ? n.checked != null
                    : n.value != null,
        });
}
function ds(e, n) {
    (n = n.checked), n != null && Yo(e, "checked", n, !1);
}
function bl(e, n) {
    ds(e, n);
    var t = pn(n.value),
        r = n.type;
    if (t != null)
        r === "number"
            ? ((t === 0 && e.value === "") || e.value != t) &&
              (e.value = "" + t)
            : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    n.hasOwnProperty("value")
        ? eo(e, n.type, t)
        : n.hasOwnProperty("defaultValue") && eo(e, n.type, pn(n.defaultValue)),
        n.checked == null &&
            n.defaultChecked != null &&
            (e.defaultChecked = !!n.defaultChecked);
}
function Hu(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (n.value !== void 0 && n.value !== null)
            )
        )
            return;
        (n = "" + e._wrapperState.initialValue),
            t || n === e.value || (e.value = n),
            (e.defaultValue = n);
    }
    (t = e.name),
        t !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        t !== "" && (e.name = t);
}
function eo(e, n, t) {
    (n !== "number" || Or(e.ownerDocument) !== e) &&
        (t == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Yn(e, n, t, r) {
    if (((e = e.options), n)) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++)
            (l = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== l && (e[t].selected = l),
                l && r && (e[t].defaultSelected = !0);
    } else {
        for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
            if (e[l].value === t) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            n !== null || e[l].disabled || (n = e[l]);
        }
        n !== null && (n.selected = !0);
    }
}
function no(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
    return A({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Wu(e, n) {
    var t = n.value;
    if (t == null) {
        if (((t = n.children), (n = n.defaultValue), t != null)) {
            if (n != null) throw Error(y(92));
            if (St(t)) {
                if (1 < t.length) throw Error(y(93));
                t = t[0];
            }
            n = t;
        }
        n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: pn(t) };
}
function ps(e, n) {
    var t = pn(n.value),
        r = pn(n.defaultValue);
    t != null &&
        ((t = "" + t),
        t !== e.value && (e.value = t),
        n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
        r != null && (e.defaultValue = "" + r);
}
function Qu(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
        n !== "" &&
        n !== null &&
        (e.value = n);
}
function ms(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function to(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ms(n)
        : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var or,
    vs = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (n, t, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(n, t, r, l);
                  });
              }
            : e;
    })(function (e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = n;
        else {
            for (
                or = or || document.createElement("div"),
                    or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = or.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
    });
function Mt(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return;
        }
    }
    e.textContent = n;
}
var xt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function (e) {
    Uc.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
    });
});
function hs(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
        ? ""
        : t ||
          typeof n != "number" ||
          n === 0 ||
          (xt.hasOwnProperty(e) && xt[e])
        ? ("" + n).trim()
        : n + "px";
}
function ys(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                l = hs(t, n[t], r);
            t === "float" && (t = "cssFloat"),
                r ? e.setProperty(t, l) : (e[t] = l);
        }
}
var $c = A(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function ro(e, n) {
    if (n) {
        if ($c[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(y(60));
            if (
                typeof n.dangerouslySetInnerHTML != "object" ||
                !("__html" in n.dangerouslySetInnerHTML)
            )
                throw Error(y(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(y(62));
    }
}
function lo(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var oo = null;
function Jo(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var uo = null,
    Xn = null,
    Gn = null;
function Ku(e) {
    if ((e = qt(e))) {
        if (typeof uo != "function") throw Error(y(280));
        var n = e.stateNode;
        n && ((n = ul(n)), uo(e.stateNode, e.type, n));
    }
}
function gs(e) {
    Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function ws() {
    if (Xn) {
        var e = Xn,
            n = Gn;
        if (((Gn = Xn = null), Ku(e), n))
            for (e = 0; e < n.length; e++) Ku(n[e]);
    }
}
function Ss(e, n) {
    return e(n);
}
function ks() {}
var Cl = !1;
function Es(e, n, t) {
    if (Cl) return e(n, t);
    Cl = !0;
    try {
        return Ss(e, n, t);
    } finally {
        (Cl = !1), (Xn !== null || Gn !== null) && (ks(), ws());
    }
}
function jt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = ul(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(y(231, n, typeof t));
    return t;
}
var io = !1;
if (We)
    try {
        var dt = {};
        Object.defineProperty(dt, "passive", {
            get: function () {
                io = !0;
            },
        }),
            window.addEventListener("test", dt, dt),
            window.removeEventListener("test", dt, dt);
    } catch {
        io = !1;
    }
function Ac(e, n, t, r, l, o, u, i, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, c);
    } catch (v) {
        this.onError(v);
    }
}
var Ct = !1,
    Rr = null,
    Mr = !1,
    so = null,
    Vc = {
        onError: function (e) {
            (Ct = !0), (Rr = e);
        },
    };
function Bc(e, n, t, r, l, o, u, i, s) {
    (Ct = !1), (Rr = null), Ac.apply(Vc, arguments);
}
function Hc(e, n, t, r, l, o, u, i, s) {
    if ((Bc.apply(this, arguments), Ct)) {
        if (Ct) {
            var c = Rr;
            (Ct = !1), (Rr = null);
        } else throw Error(y(198));
        Mr || ((Mr = !0), (so = c));
    }
}
function Mn(e) {
    var n = e,
        t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
        e = n;
        do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
        while (e);
    }
    return n.tag === 3 ? t : null;
}
function xs(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (
            (n === null &&
                ((e = e.alternate), e !== null && (n = e.memoizedState)),
            n !== null)
        )
            return n.dehydrated;
    }
    return null;
}
function Yu(e) {
    if (Mn(e) !== e) throw Error(y(188));
}
function Wc(e) {
    var n = e.alternate;
    if (!n) {
        if (((n = Mn(e)), n === null)) throw Error(y(188));
        return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
        var l = t.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                t = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === t) return Yu(l), e;
                if (o === r) return Yu(l), n;
                o = o.sibling;
            }
            throw Error(y(188));
        }
        if (t.return !== r.return) (t = l), (r = o);
        else {
            for (var u = !1, i = l.child; i; ) {
                if (i === t) {
                    (u = !0), (t = l), (r = o);
                    break;
                }
                if (i === r) {
                    (u = !0), (r = l), (t = o);
                    break;
                }
                i = i.sibling;
            }
            if (!u) {
                for (i = o.child; i; ) {
                    if (i === t) {
                        (u = !0), (t = o), (r = l);
                        break;
                    }
                    if (i === r) {
                        (u = !0), (r = o), (t = l);
                        break;
                    }
                    i = i.sibling;
                }
                if (!u) throw Error(y(189));
            }
        }
        if (t.alternate !== r) throw Error(y(190));
    }
    if (t.tag !== 3) throw Error(y(188));
    return t.stateNode.current === t ? e : n;
}
function Cs(e) {
    return (e = Wc(e)), e !== null ? _s(e) : null;
}
function _s(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var n = _s(e);
        if (n !== null) return n;
        e = e.sibling;
    }
    return null;
}
var Ns = ye.unstable_scheduleCallback,
    Xu = ye.unstable_cancelCallback,
    Qc = ye.unstable_shouldYield,
    Kc = ye.unstable_requestPaint,
    W = ye.unstable_now,
    Yc = ye.unstable_getCurrentPriorityLevel,
    qo = ye.unstable_ImmediatePriority,
    Ps = ye.unstable_UserBlockingPriority,
    jr = ye.unstable_NormalPriority,
    Xc = ye.unstable_LowPriority,
    zs = ye.unstable_IdlePriority,
    tl = null,
    Fe = null;
function Gc(e) {
    if (Fe && typeof Fe.onCommitFiberRoot == "function")
        try {
            Fe.onCommitFiberRoot(
                tl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : qc,
    Zc = Math.log,
    Jc = Math.LN2;
function qc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Zc(e) / Jc) | 0)) | 0;
}
var ur = 64,
    ir = 4194304;
function kt(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Dr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        u = t & 268435455;
    if (u !== 0) {
        var i = u & ~l;
        i !== 0 ? (r = kt(i)) : ((o &= u), o !== 0 && (r = kt(o)));
    } else (u = t & ~l), u !== 0 ? (r = kt(u)) : o !== 0 && (r = kt(o));
    if (r === 0) return 0;
    if (
        n !== 0 &&
        n !== r &&
        !(n & l) &&
        ((l = r & -r),
        (o = n & -n),
        l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
        for (e = e.entanglements, n &= r; 0 < n; )
            (t = 31 - Oe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
}
function bc(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function ef(e, n) {
    for (
        var t = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var u = 31 - Oe(o),
            i = 1 << u,
            s = l[u];
        s === -1
            ? (!(i & t) || i & r) && (l[u] = bc(i, n))
            : s <= n && (e.expiredLanes |= i),
            (o &= ~i);
    }
}
function ao(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ls() {
    var e = ur;
    return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function _l(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
}
function Zt(e, n, t) {
    (e.pendingLanes |= n),
        n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (n = 31 - Oe(n)),
        (e[n] = t);
}
function nf(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= n),
        (e.mutableReadLanes &= n),
        (e.entangledLanes &= n),
        (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
        var l = 31 - Oe(t),
            o = 1 << l;
        (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
    }
}
function bo(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
        var r = 31 - Oe(t),
            l = 1 << r;
        (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
}
var R = 0;
function Ts(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Os,
    eu,
    Rs,
    Ms,
    js,
    co = !1,
    sr = [],
    rn = null,
    ln = null,
    on = null,
    Dt = new Map(),
    It = new Map(),
    qe = [],
    tf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Gu(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            rn = null;
            break;
        case "dragenter":
        case "dragleave":
            ln = null;
            break;
        case "mouseover":
        case "mouseout":
            on = null;
            break;
        case "pointerover":
        case "pointerout":
            Dt.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            It.delete(n.pointerId);
    }
}
function pt(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: n,
              domEventName: t,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          n !== null && ((n = qt(n)), n !== null && eu(n)),
          e)
        : ((e.eventSystemFlags |= r),
          (n = e.targetContainers),
          l !== null && n.indexOf(l) === -1 && n.push(l),
          e);
}
function rf(e, n, t, r, l) {
    switch (n) {
        case "focusin":
            return (rn = pt(rn, e, n, t, r, l)), !0;
        case "dragenter":
            return (ln = pt(ln, e, n, t, r, l)), !0;
        case "mouseover":
            return (on = pt(on, e, n, t, r, l)), !0;
        case "pointerover":
            var o = l.pointerId;
            return Dt.set(o, pt(Dt.get(o) || null, e, n, t, r, l)), !0;
        case "gotpointercapture":
            return (
                (o = l.pointerId),
                It.set(o, pt(It.get(o) || null, e, n, t, r, l)),
                !0
            );
    }
    return !1;
}
function Ds(e) {
    var n = En(e.target);
    if (n !== null) {
        var t = Mn(n);
        if (t !== null) {
            if (((n = t.tag), n === 13)) {
                if (((n = xs(t)), n !== null)) {
                    (e.blockedOn = n),
                        js(e.priority, function () {
                            Rs(t);
                        });
                    return;
                }
            } else if (
                n === 3 &&
                t.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
        var t = fo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            (oo = r), t.target.dispatchEvent(r), (oo = null);
        } else return (n = qt(t)), n !== null && eu(n), (e.blockedOn = t), !1;
        n.shift();
    }
    return !0;
}
function Zu(e, n, t) {
    kr(e) && t.delete(n);
}
function lf() {
    (co = !1),
        rn !== null && kr(rn) && (rn = null),
        ln !== null && kr(ln) && (ln = null),
        on !== null && kr(on) && (on = null),
        Dt.forEach(Zu),
        It.forEach(Zu);
}
function mt(e, n) {
    e.blockedOn === n &&
        ((e.blockedOn = null),
        co ||
            ((co = !0),
            ye.unstable_scheduleCallback(ye.unstable_NormalPriority, lf)));
}
function Ft(e) {
    function n(l) {
        return mt(l, e);
    }
    if (0 < sr.length) {
        mt(sr[0], e);
        for (var t = 1; t < sr.length; t++) {
            var r = sr[t];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        rn !== null && mt(rn, e),
            ln !== null && mt(ln, e),
            on !== null && mt(on, e),
            Dt.forEach(n),
            It.forEach(n),
            t = 0;
        t < qe.length;
        t++
    )
        (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); )
        Ds(t), t.blockedOn === null && qe.shift();
}
var Zn = Xe.ReactCurrentBatchConfig,
    Ir = !0;
function of(e, n, t, r) {
    var l = R,
        o = Zn.transition;
    Zn.transition = null;
    try {
        (R = 1), nu(e, n, t, r);
    } finally {
        (R = l), (Zn.transition = o);
    }
}
function uf(e, n, t, r) {
    var l = R,
        o = Zn.transition;
    Zn.transition = null;
    try {
        (R = 4), nu(e, n, t, r);
    } finally {
        (R = l), (Zn.transition = o);
    }
}
function nu(e, n, t, r) {
    if (Ir) {
        var l = fo(e, n, t, r);
        if (l === null) Dl(e, n, r, Fr, t), Gu(e, r);
        else if (rf(l, e, n, t, r)) r.stopPropagation();
        else if ((Gu(e, r), n & 4 && -1 < tf.indexOf(e))) {
            for (; l !== null; ) {
                var o = qt(l);
                if (
                    (o !== null && Os(o),
                    (o = fo(e, n, t, r)),
                    o === null && Dl(e, n, r, Fr, t),
                    o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else Dl(e, n, r, null, t);
    }
}
var Fr = null;
function fo(e, n, t, r) {
    if (((Fr = null), (e = Jo(r)), (e = En(e)), e !== null))
        if (((n = Mn(e)), n === null)) e = null;
        else if (((t = n.tag), t === 13)) {
            if (((e = xs(n)), e !== null)) return e;
            e = null;
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated)
                return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
        } else n !== e && (e = null);
    return (Fr = e), null;
}
function Is(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Yc()) {
                case qo:
                    return 1;
                case Ps:
                    return 4;
                case jr:
                case Xc:
                    return 16;
                case zs:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var en = null,
    tu = null,
    Er = null;
function Fs() {
    if (Er) return Er;
    var e,
        n = tu,
        t = n.length,
        r,
        l = "value" in en ? en.value : en.textContent,
        o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++);
    return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
    var n = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
            : (e = n),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function ar() {
    return !0;
}
function Ju() {
    return !1;
}
function we(e) {
    function n(t, r, l, o, u) {
        (this._reactName = t),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = u),
            (this.currentTarget = null);
        for (var i in e)
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? ar
                : Ju),
            (this.isPropagationStopped = Ju),
            this
        );
    }
    return (
        A(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                    (t.preventDefault
                        ? t.preventDefault()
                        : typeof t.returnValue != "unknown" &&
                          (t.returnValue = !1),
                    (this.isDefaultPrevented = ar));
            },
            stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                    (t.stopPropagation
                        ? t.stopPropagation()
                        : typeof t.cancelBubble != "unknown" &&
                          (t.cancelBubble = !0),
                    (this.isPropagationStopped = ar));
            },
            persist: function () {},
            isPersistent: ar,
        }),
        n
    );
}
var it = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    ru = we(it),
    Jt = A({}, it, { view: 0, detail: 0 }),
    sf = we(Jt),
    Nl,
    Pl,
    vt,
    rl = A({}, Jt, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: lu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== vt &&
                      (vt && e.type === "mousemove"
                          ? ((Nl = e.screenX - vt.screenX),
                            (Pl = e.screenY - vt.screenY))
                          : (Pl = Nl = 0),
                      (vt = e)),
                  Nl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Pl;
        },
    }),
    qu = we(rl),
    af = A({}, rl, { dataTransfer: 0 }),
    cf = we(af),
    ff = A({}, Jt, { relatedTarget: 0 }),
    zl = we(ff),
    df = A({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pf = we(df),
    mf = A({}, it, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    vf = we(mf),
    hf = A({}, it, { data: 0 }),
    bu = we(hf),
    yf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    gf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    wf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Sf(e) {
    var n = this.nativeEvent;
    return n.getModifierState
        ? n.getModifierState(e)
        : (e = wf[e])
        ? !!n[e]
        : !1;
}
function lu() {
    return Sf;
}
var kf = A({}, Jt, {
        key: function (e) {
            if (e.key) {
                var n = yf[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress"
                ? ((e = xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? gf[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: lu,
        charCode: function (e) {
            return e.type === "keypress" ? xr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? xr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Ef = we(kf),
    xf = A({}, rl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    ei = we(xf),
    Cf = A({}, Jt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: lu,
    }),
    _f = we(Cf),
    Nf = A({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pf = we(Nf),
    zf = A({}, rl, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Lf = we(zf),
    Tf = [9, 13, 27, 32],
    ou = We && "CompositionEvent" in window,
    _t = null;
We && "documentMode" in document && (_t = document.documentMode);
var Of = We && "TextEvent" in window && !_t,
    Us = We && (!ou || (_t && 8 < _t && 11 >= _t)),
    ni = String.fromCharCode(32),
    ti = !1;
function $s(e, n) {
    switch (e) {
        case "keyup":
            return Tf.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function As(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Rf(e, n) {
    switch (e) {
        case "compositionend":
            return As(n);
        case "keypress":
            return n.which !== 32 ? null : ((ti = !0), ni);
        case "textInput":
            return (e = n.data), e === ni && ti ? null : e;
        default:
            return null;
    }
}
function Mf(e, n) {
    if (Fn)
        return e === "compositionend" || (!ou && $s(e, n))
            ? ((e = Fs()), (Er = tu = en = null), (Fn = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(n.ctrlKey || n.altKey || n.metaKey) ||
                (n.ctrlKey && n.altKey)
            ) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which);
            }
            return null;
        case "compositionend":
            return Us && n.locale !== "ko" ? null : n.data;
        default:
            return null;
    }
}
var jf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function ri(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!jf[e.type] : n === "textarea";
}
function Vs(e, n, t, r) {
    gs(r),
        (n = Ur(n, "onChange")),
        0 < n.length &&
            ((t = new ru("onChange", "change", null, t, r)),
            e.push({ event: t, listeners: n }));
}
var Nt = null,
    Ut = null;
function Df(e) {
    qs(e, 0);
}
function ll(e) {
    var n = An(e);
    if (fs(n)) return e;
}
function If(e, n) {
    if (e === "change") return n;
}
var Bs = !1;
if (We) {
    var Ll;
    if (We) {
        var Tl = "oninput" in document;
        if (!Tl) {
            var li = document.createElement("div");
            li.setAttribute("oninput", "return;"),
                (Tl = typeof li.oninput == "function");
        }
        Ll = Tl;
    } else Ll = !1;
    Bs = Ll && (!document.documentMode || 9 < document.documentMode);
}
function oi() {
    Nt && (Nt.detachEvent("onpropertychange", Hs), (Ut = Nt = null));
}
function Hs(e) {
    if (e.propertyName === "value" && ll(Ut)) {
        var n = [];
        Vs(n, Ut, e, Jo(e)), Es(Df, n);
    }
}
function Ff(e, n, t) {
    e === "focusin"
        ? (oi(), (Nt = n), (Ut = t), Nt.attachEvent("onpropertychange", Hs))
        : e === "focusout" && oi();
}
function Uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ll(Ut);
}
function $f(e, n) {
    if (e === "click") return ll(n);
}
function Af(e, n) {
    if (e === "input" || e === "change") return ll(n);
}
function Vf(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Me = typeof Object.is == "function" ? Object.is : Vf;
function $t(e, n) {
    if (Me(e, n)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof n != "object" ||
        n === null
    )
        return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
        var l = t[r];
        if (!Yl.call(n, l) || !Me(e[l], n[l])) return !1;
    }
    return !0;
}
function ui(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function ii(e, n) {
    var t = ui(e);
    e = 0;
    for (var r; t; ) {
        if (t.nodeType === 3) {
            if (((r = e + t.textContent.length), e <= n && r >= n))
                return { node: t, offset: n - e };
            e = r;
        }
        e: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e;
                }
                t = t.parentNode;
            }
            t = void 0;
        }
        t = ui(t);
    }
}
function Ws(e, n) {
    return e && n
        ? e === n
            ? !0
            : e && e.nodeType === 3
            ? !1
            : n && n.nodeType === 3
            ? Ws(e, n.parentNode)
            : "contains" in e
            ? e.contains(n)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(n) & 16)
            : !1
        : !1;
}
function Qs() {
    for (var e = window, n = Or(); n instanceof e.HTMLIFrameElement; ) {
        try {
            var t = typeof n.contentWindow.location.href == "string";
        } catch {
            t = !1;
        }
        if (t) e = n.contentWindow;
        else break;
        n = Or(e.document);
    }
    return n;
}
function uu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        n &&
        ((n === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            n === "textarea" ||
            e.contentEditable === "true")
    );
}
function Bf(e) {
    var n = Qs(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (
        n !== t &&
        t &&
        t.ownerDocument &&
        Ws(t.ownerDocument.documentElement, t)
    ) {
        if (r !== null && uu(t)) {
            if (
                ((n = r.start),
                (e = r.end),
                e === void 0 && (e = n),
                "selectionStart" in t)
            )
                (t.selectionStart = n),
                    (t.selectionEnd = Math.min(e, t.value.length));
            else if (
                ((e =
                    ((n = t.ownerDocument || document) && n.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = t.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = ii(t, o));
                var u = ii(t, r);
                l &&
                    u &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== u.node ||
                        e.focusOffset !== u.offset) &&
                    ((n = n.createRange()),
                    n.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(n), e.extend(u.node, u.offset))
                        : (n.setEnd(u.node, u.offset), e.addRange(n)));
            }
        }
        for (n = [], e = t; (e = e.parentNode); )
            e.nodeType === 1 &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof t.focus == "function" && t.focus(), t = 0;
            t < n.length;
            t++
        )
            (e = n[t]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Hf = We && "documentMode" in document && 11 >= document.documentMode,
    Un = null,
    po = null,
    Pt = null,
    mo = !1;
function si(e, n, t) {
    var r =
        t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    mo ||
        Un == null ||
        Un !== Or(r) ||
        ((r = Un),
        "selectionStart" in r && uu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Pt && $t(Pt, r)) ||
            ((Pt = r),
            (r = Ur(po, "onSelect")),
            0 < r.length &&
                ((n = new ru("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = Un))));
}
function cr(e, n) {
    var t = {};
    return (
        (t[e.toLowerCase()] = n.toLowerCase()),
        (t["Webkit" + e] = "webkit" + n),
        (t["Moz" + e] = "moz" + n),
        t
    );
}
var $n = {
        animationend: cr("Animation", "AnimationEnd"),
        animationiteration: cr("Animation", "AnimationIteration"),
        animationstart: cr("Animation", "AnimationStart"),
        transitionend: cr("Transition", "TransitionEnd"),
    },
    Ol = {},
    Ks = {};
We &&
    ((Ks = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete $n.animationend.animation,
        delete $n.animationiteration.animation,
        delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
function ol(e) {
    if (Ol[e]) return Ol[e];
    if (!$n[e]) return e;
    var n = $n[e],
        t;
    for (t in n) if (n.hasOwnProperty(t) && t in Ks) return (Ol[e] = n[t]);
    return e;
}
var Ys = ol("animationend"),
    Xs = ol("animationiteration"),
    Gs = ol("animationstart"),
    Zs = ol("transitionend"),
    Js = new Map(),
    ai =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function vn(e, n) {
    Js.set(e, n), Rn(n, [e]);
}
for (var Rl = 0; Rl < ai.length; Rl++) {
    var Ml = ai[Rl],
        Wf = Ml.toLowerCase(),
        Qf = Ml[0].toUpperCase() + Ml.slice(1);
    vn(Wf, "on" + Qf);
}
vn(Ys, "onAnimationEnd");
vn(Xs, "onAnimationIteration");
vn(Gs, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Zs, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
Rn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Et =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Kf = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Et)
    );
function ci(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Hc(r, n, void 0, e), (e.currentTarget = null);
}
function qs(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (n)
                for (var u = r.length - 1; 0 <= u; u--) {
                    var i = r[u],
                        s = i.instance,
                        c = i.currentTarget;
                    if (((i = i.listener), s !== o && l.isPropagationStopped()))
                        break e;
                    ci(l, i, c), (o = s);
                }
            else
                for (u = 0; u < r.length; u++) {
                    if (
                        ((i = r[u]),
                        (s = i.instance),
                        (c = i.currentTarget),
                        (i = i.listener),
                        s !== o && l.isPropagationStopped())
                    )
                        break e;
                    ci(l, i, c), (o = s);
                }
        }
    }
    if (Mr) throw ((e = so), (Mr = !1), (so = null), e);
}
function j(e, n) {
    var t = n[wo];
    t === void 0 && (t = n[wo] = new Set());
    var r = e + "__bubble";
    t.has(r) || (bs(n, e, 2, !1), t.add(r));
}
function jl(e, n, t) {
    var r = 0;
    n && (r |= 4), bs(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
    if (!e[fr]) {
        (e[fr] = !0),
            us.forEach(function (t) {
                t !== "selectionchange" &&
                    (Kf.has(t) || jl(t, !1, e), jl(t, !0, e));
            });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[fr] || ((n[fr] = !0), jl("selectionchange", !1, n));
    }
}
function bs(e, n, t, r) {
    switch (Is(n)) {
        case 1:
            var l = of;
            break;
        case 4:
            l = uf;
            break;
        default:
            l = nu;
    }
    (t = l.bind(null, n, t, e)),
        (l = void 0),
        !io ||
            (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(n, t, { capture: !0, passive: l })
                : e.addEventListener(n, t, !0)
            : l !== void 0
            ? e.addEventListener(n, t, { passive: l })
            : e.addEventListener(n, t, !1);
}
function Dl(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var u = r.tag;
            if (u === 3 || u === 4) {
                var i = r.stateNode.containerInfo;
                if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
                if (u === 4)
                    for (u = r.return; u !== null; ) {
                        var s = u.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = u.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return;
                        u = u.return;
                    }
                for (; i !== null; ) {
                    if (((u = En(i)), u === null)) return;
                    if (((s = u.tag), s === 5 || s === 6)) {
                        r = o = u;
                        continue e;
                    }
                    i = i.parentNode;
                }
            }
            r = r.return;
        }
    Es(function () {
        var c = o,
            v = Jo(t),
            m = [];
        e: {
            var p = Js.get(e);
            if (p !== void 0) {
                var g = ru,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (xr(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Ef;
                        break;
                    case "focusin":
                        (w = "focus"), (g = zl);
                        break;
                    case "focusout":
                        (w = "blur"), (g = zl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = zl;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = qu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = cf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = _f;
                        break;
                    case Ys:
                    case Xs:
                    case Gs:
                        g = pf;
                        break;
                    case Zs:
                        g = Pf;
                        break;
                    case "scroll":
                        g = sf;
                        break;
                    case "wheel":
                        g = Lf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = vf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = ei;
                }
                var S = (n & 4) !== 0,
                    I = !S && e === "scroll",
                    f = S ? (p !== null ? p + "Capture" : null) : p;
                S = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var h = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            h !== null &&
                            ((d = h),
                            f !== null &&
                                ((h = jt(a, f)),
                                h != null && S.push(Vt(a, h, d)))),
                        I)
                    )
                        break;
                    a = a.return;
                }
                0 < S.length &&
                    ((p = new g(p, w, null, t, v)),
                    m.push({ event: p, listeners: S }));
            }
        }
        if (!(n & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (g = e === "mouseout" || e === "pointerout"),
                    p &&
                        t !== oo &&
                        (w = t.relatedTarget || t.fromElement) &&
                        (En(w) || w[Qe]))
                )
                    break e;
                if (
                    (g || p) &&
                    ((p =
                        v.window === v
                            ? v
                            : (p = v.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    g
                        ? ((w = t.relatedTarget || t.toElement),
                          (g = c),
                          (w = w ? En(w) : null),
                          w !== null &&
                              ((I = Mn(w)),
                              w !== I || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((g = null), (w = c)),
                    g !== w)
                ) {
                    if (
                        ((S = qu),
                        (h = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (a = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((S = ei),
                            (h = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (a = "pointer")),
                        (I = g == null ? p : An(g)),
                        (d = w == null ? p : An(w)),
                        (p = new S(h, a + "leave", g, t, v)),
                        (p.target = I),
                        (p.relatedTarget = d),
                        (h = null),
                        En(v) === c &&
                            ((S = new S(f, a + "enter", w, t, v)),
                            (S.target = d),
                            (S.relatedTarget = I),
                            (h = S)),
                        (I = h),
                        g && w)
                    )
                        n: {
                            for (S = g, f = w, a = 0, d = S; d; d = jn(d)) a++;
                            for (d = 0, h = f; h; h = jn(h)) d++;
                            for (; 0 < a - d; ) (S = jn(S)), a--;
                            for (; 0 < d - a; ) (f = jn(f)), d--;
                            for (; a--; ) {
                                if (
                                    S === f ||
                                    (f !== null && S === f.alternate)
                                )
                                    break n;
                                (S = jn(S)), (f = jn(f));
                            }
                            S = null;
                        }
                    else S = null;
                    g !== null && fi(m, p, g, S, !1),
                        w !== null && I !== null && fi(m, I, w, S, !0);
                }
            }
            e: {
                if (
                    ((p = c ? An(c) : window),
                    (g = p.nodeName && p.nodeName.toLowerCase()),
                    g === "select" || (g === "input" && p.type === "file"))
                )
                    var E = If;
                else if (ri(p))
                    if (Bs) E = Af;
                    else {
                        E = Uf;
                        var C = Ff;
                    }
                else
                    (g = p.nodeName) &&
                        g.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (E = $f);
                if (E && (E = E(e, c))) {
                    Vs(m, E, t, v);
                    break e;
                }
                C && C(e, p, c),
                    e === "focusout" &&
                        (C = p._wrapperState) &&
                        C.controlled &&
                        p.type === "number" &&
                        eo(p, "number", p.value);
            }
            switch (((C = c ? An(c) : window), e)) {
                case "focusin":
                    (ri(C) || C.contentEditable === "true") &&
                        ((Un = C), (po = c), (Pt = null));
                    break;
                case "focusout":
                    Pt = po = Un = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (mo = !1), si(m, t, v);
                    break;
                case "selectionchange":
                    if (Hf) break;
                case "keydown":
                case "keyup":
                    si(m, t, v);
            }
            var _;
            if (ou)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                Fn
                    ? $s(e, t) && (N = "onCompositionEnd")
                    : e === "keydown" &&
                      t.keyCode === 229 &&
                      (N = "onCompositionStart");
            N &&
                (Us &&
                    t.locale !== "ko" &&
                    (Fn || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && Fn && (_ = Fs())
                        : ((en = v),
                          (tu = "value" in en ? en.value : en.textContent),
                          (Fn = !0))),
                (C = Ur(c, N)),
                0 < C.length &&
                    ((N = new bu(N, e, null, t, v)),
                    m.push({ event: N, listeners: C }),
                    _
                        ? (N.data = _)
                        : ((_ = As(t)), _ !== null && (N.data = _)))),
                (_ = Of ? Rf(e, t) : Mf(e, t)) &&
                    ((c = Ur(c, "onBeforeInput")),
                    0 < c.length &&
                        ((v = new bu(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            t,
                            v
                        )),
                        m.push({ event: v, listeners: c }),
                        (v.data = _)));
        }
        qs(m, n);
    });
}
function Vt(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = jt(e, t)),
            o != null && r.unshift(Vt(e, o, l)),
            (o = jt(e, n)),
            o != null && r.push(Vt(e, o, l))),
            (e = e.return);
    }
    return r;
}
function jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function fi(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r; ) {
        var i = t,
            s = i.alternate,
            c = i.stateNode;
        if (s !== null && s === r) break;
        i.tag === 5 &&
            c !== null &&
            ((i = c),
            l
                ? ((s = jt(t, o)), s != null && u.unshift(Vt(t, s, i)))
                : l || ((s = jt(t, o)), s != null && u.push(Vt(t, s, i)))),
            (t = t.return);
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
}
var Yf = /\r\n?/g,
    Xf = /\u0000|\uFFFD/g;
function di(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Yf,
            `
`
        )
        .replace(Xf, "");
}
function dr(e, n, t) {
    if (((n = di(n)), di(e) !== n && t)) throw Error(y(425));
}
function $r() {}
var vo = null,
    ho = null;
function yo(e, n) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof n.children == "string" ||
        typeof n.children == "number" ||
        (typeof n.dangerouslySetInnerHTML == "object" &&
            n.dangerouslySetInnerHTML !== null &&
            n.dangerouslySetInnerHTML.__html != null)
    );
}
var go = typeof setTimeout == "function" ? setTimeout : void 0,
    Gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pi = typeof Promise == "function" ? Promise : void 0,
    Zf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof pi < "u"
            ? function (e) {
                  return pi.resolve(null).then(e).catch(Jf);
              }
            : go;
function Jf(e) {
    setTimeout(function () {
        throw e;
    });
}
function Il(e, n) {
    var t = n,
        r = 0;
    do {
        var l = t.nextSibling;
        if ((e.removeChild(t), l && l.nodeType === 8))
            if (((t = l.data), t === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Ft(n);
                    return;
                }
                r--;
            } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
        t = l;
    } while (t);
    Ft(n);
}
function un(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
            if (n === "/$") return null;
        }
    }
    return e;
}
function mi(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--;
            } else t === "/$" && n++;
        }
        e = e.previousSibling;
    }
    return null;
}
var st = Math.random().toString(36).slice(2),
    Ie = "__reactFiber$" + st,
    Bt = "__reactProps$" + st,
    Qe = "__reactContainer$" + st,
    wo = "__reactEvents$" + st,
    qf = "__reactListeners$" + st,
    bf = "__reactHandles$" + st;
function En(e) {
    var n = e[Ie];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
        if ((n = t[Qe] || t[Ie])) {
            if (
                ((t = n.alternate),
                n.child !== null || (t !== null && t.child !== null))
            )
                for (e = mi(e); e !== null; ) {
                    if ((t = e[Ie])) return t;
                    e = mi(e);
                }
            return n;
        }
        (e = t), (t = e.parentNode);
    }
    return null;
}
function qt(e) {
    return (
        (e = e[Ie] || e[Qe]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function An(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
}
function ul(e) {
    return e[Bt] || null;
}
var So = [],
    Vn = -1;
function hn(e) {
    return { current: e };
}
function D(e) {
    0 > Vn || ((e.current = So[Vn]), (So[Vn] = null), Vn--);
}
function M(e, n) {
    Vn++, (So[Vn] = e.current), (e.current = n);
}
var mn = {},
    le = hn(mn),
    fe = hn(!1),
    Pn = mn;
function et(e, n) {
    var t = e.type.contextTypes;
    if (!t) return mn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in t) l[o] = n[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = n),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function de(e) {
    return (e = e.childContextTypes), e != null;
}
function Ar() {
    D(fe), D(le);
}
function vi(e, n, t) {
    if (le.current !== mn) throw Error(y(168));
    M(le, n), M(fe, t);
}
function ea(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
        return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(y(108, Ic(e) || "Unknown", l));
    return A({}, t, r);
}
function Vr(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            mn),
        (Pn = le.current),
        M(le, e),
        M(fe, fe.current),
        !0
    );
}
function hi(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    t
        ? ((e = ea(e, n, Pn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          D(fe),
          D(le),
          M(le, e))
        : D(fe),
        M(fe, t);
}
var Ae = null,
    il = !1,
    Fl = !1;
function na(e) {
    Ae === null ? (Ae = [e]) : Ae.push(e);
}
function ed(e) {
    (il = !0), na(e);
}
function yn() {
    if (!Fl && Ae !== null) {
        Fl = !0;
        var e = 0,
            n = R;
        try {
            var t = Ae;
            for (R = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ae = null), (il = !1);
        } catch (l) {
            throw (Ae !== null && (Ae = Ae.slice(e + 1)), Ns(qo, yn), l);
        } finally {
            (R = n), (Fl = !1);
        }
    }
    return null;
}
var Bn = [],
    Hn = 0,
    Br = null,
    Hr = 0,
    Se = [],
    ke = 0,
    zn = null,
    Ve = 1,
    Be = "";
function Sn(e, n) {
    (Bn[Hn++] = Hr), (Bn[Hn++] = Br), (Br = e), (Hr = n);
}
function ta(e, n, t) {
    (Se[ke++] = Ve), (Se[ke++] = Be), (Se[ke++] = zn), (zn = e);
    var r = Ve;
    e = Be;
    var l = 32 - Oe(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var o = 32 - Oe(n) + l;
    if (30 < o) {
        var u = l - (l % 5);
        (o = (r & ((1 << u) - 1)).toString(32)),
            (r >>= u),
            (l -= u),
            (Ve = (1 << (32 - Oe(n) + l)) | (t << l) | r),
            (Be = o + e);
    } else (Ve = (1 << o) | (t << l) | r), (Be = e);
}
function iu(e) {
    e.return !== null && (Sn(e, 1), ta(e, 1, 0));
}
function su(e) {
    for (; e === Br; )
        (Br = Bn[--Hn]), (Bn[Hn] = null), (Hr = Bn[--Hn]), (Bn[Hn] = null);
    for (; e === zn; )
        (zn = Se[--ke]),
            (Se[ke] = null),
            (Be = Se[--ke]),
            (Se[ke] = null),
            (Ve = Se[--ke]),
            (Se[ke] = null);
}
var he = null,
    ve = null,
    F = !1,
    Te = null;
function ra(e, n) {
    var t = Ee(5, null, null, 0);
    (t.elementType = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        (n = e.deletions),
        n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function yi(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return (
                (n =
                    n.nodeType !== 1 ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                        ? null
                        : n),
                n !== null
                    ? ((e.stateNode = n), (he = e), (ve = un(n.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                n !== null ? ((e.stateNode = n), (he = e), (ve = null), !0) : !1
            );
        case 13:
            return (
                (n = n.nodeType !== 8 ? null : n),
                n !== null
                    ? ((t = zn !== null ? { id: Ve, overflow: Be } : null),
                      (e.memoizedState = {
                          dehydrated: n,
                          treeContext: t,
                          retryLane: 1073741824,
                      }),
                      (t = Ee(18, null, null, 0)),
                      (t.stateNode = n),
                      (t.return = e),
                      (e.child = t),
                      (he = e),
                      (ve = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
    if (F) {
        var n = ve;
        if (n) {
            var t = n;
            if (!yi(e, n)) {
                if (ko(e)) throw Error(y(418));
                n = un(t.nextSibling);
                var r = he;
                n && yi(e, n)
                    ? ra(r, t)
                    : ((e.flags = (e.flags & -4097) | 2), (F = !1), (he = e));
            }
        } else {
            if (ko(e)) throw Error(y(418));
            (e.flags = (e.flags & -4097) | 2), (F = !1), (he = e);
        }
    }
}
function gi(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    he = e;
}
function pr(e) {
    if (e !== he) return !1;
    if (!F) return gi(e), (F = !0), !1;
    var n;
    if (
        ((n = e.tag !== 3) &&
            !(n = e.tag !== 5) &&
            ((n = e.type),
            (n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps))),
        n && (n = ve))
    ) {
        if (ko(e)) throw (la(), Error(y(418)));
        for (; n; ) ra(e, n), (n = un(n.nextSibling));
    }
    if ((gi(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(y(317));
        e: {
            for (e = e.nextSibling, n = 0; e; ) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            ve = un(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
                }
                e = e.nextSibling;
            }
            ve = null;
        }
    } else ve = he ? un(e.stateNode.nextSibling) : null;
    return !0;
}
function la() {
    for (var e = ve; e; ) e = un(e.nextSibling);
}
function nt() {
    (ve = he = null), (F = !1);
}
function au(e) {
    Te === null ? (Te = [e]) : Te.push(e);
}
var nd = Xe.ReactCurrentBatchConfig;
function ze(e, n) {
    if (e && e.defaultProps) {
        (n = A({}, n)), (e = e.defaultProps);
        for (var t in e) n[t] === void 0 && (n[t] = e[t]);
        return n;
    }
    return n;
}
var Wr = hn(null),
    Qr = null,
    Wn = null,
    cu = null;
function fu() {
    cu = Wn = Qr = null;
}
function du(e) {
    var n = Wr.current;
    D(Wr), (e._currentValue = n);
}
function xo(e, n, t) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
                : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
            e === t)
        )
            break;
        e = e.return;
    }
}
function Jn(e, n) {
    (Qr = e),
        (cu = Wn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
    var n = e._currentValue;
    if (cu !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), Wn === null)) {
            if (Qr === null) throw Error(y(308));
            (Wn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
        } else Wn = Wn.next = e;
    return n;
}
var xn = null;
function pu(e) {
    xn === null ? (xn = [e]) : xn.push(e);
}
function oa(e, n, t, r) {
    var l = n.interleaved;
    return (
        l === null ? ((t.next = t), pu(n)) : ((t.next = l.next), (l.next = t)),
        (n.interleaved = t),
        Ke(e, r)
    );
}
function Ke(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
        (e.childLanes |= n),
            (t = e.alternate),
            t !== null && (t.childLanes |= n),
            (t = e),
            (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function mu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ua(e, n) {
    (e = e.updateQueue),
        n.updateQueue === e &&
            (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function He(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function sn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), O & 2)) {
        var l = r.pending;
        return (
            l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
            (r.pending = n),
            Ke(e, t)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((n.next = n), pu(r)) : ((n.next = l.next), (l.next = n)),
        (r.interleaved = n),
        Ke(e, t)
    );
}
function Cr(e, n, t) {
    if (
        ((n = n.updateQueue),
        n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), bo(e, t);
    }
}
function wi(e, n) {
    var t = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
        var l = null,
            o = null;
        if (((t = t.firstBaseUpdate), t !== null)) {
            do {
                var u = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null,
                };
                o === null ? (l = o = u) : (o = o.next = u), (t = t.next);
            } while (t !== null);
            o === null ? (l = o = n) : (o = o.next = n);
        } else l = o = n;
        (t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = t);
        return;
    }
    (e = t.lastBaseUpdate),
        e === null ? (t.firstBaseUpdate = n) : (e.next = n),
        (t.lastBaseUpdate = n);
}
function Kr(e, n, t, r) {
    var l = e.updateQueue;
    Je = !1;
    var o = l.firstBaseUpdate,
        u = l.lastBaseUpdate,
        i = l.shared.pending;
    if (i !== null) {
        l.shared.pending = null;
        var s = i,
            c = s.next;
        (s.next = null), u === null ? (o = c) : (u.next = c), (u = s);
        var v = e.alternate;
        v !== null &&
            ((v = v.updateQueue),
            (i = v.lastBaseUpdate),
            i !== u &&
                (i === null ? (v.firstBaseUpdate = c) : (i.next = c),
                (v.lastBaseUpdate = s)));
    }
    if (o !== null) {
        var m = l.baseState;
        (u = 0), (v = c = s = null), (i = o);
        do {
            var p = i.lane,
                g = i.eventTime;
            if ((r & p) === p) {
                v !== null &&
                    (v = v.next =
                        {
                            eventTime: g,
                            lane: 0,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null,
                        });
                e: {
                    var w = e,
                        S = i;
                    switch (((p = n), (g = t), S.tag)) {
                        case 1:
                            if (((w = S.payload), typeof w == "function")) {
                                m = w.call(g, m, p);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = S.payload),
                                (p =
                                    typeof w == "function"
                                        ? w.call(g, m, p)
                                        : w),
                                p == null)
                            )
                                break e;
                            m = A({}, m, p);
                            break e;
                        case 2:
                            Je = !0;
                    }
                }
                i.callback !== null &&
                    i.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = l.effects),
                    p === null ? (l.effects = [i]) : p.push(i));
            } else
                (g = {
                    eventTime: g,
                    lane: p,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null,
                }),
                    v === null ? ((c = v = g), (s = m)) : (v = v.next = g),
                    (u |= p);
            if (((i = i.next), i === null)) {
                if (((i = l.shared.pending), i === null)) break;
                (p = i),
                    (i = p.next),
                    (p.next = null),
                    (l.lastBaseUpdate = p),
                    (l.shared.pending = null);
            }
        } while (1);
        if (
            (v === null && (s = m),
            (l.baseState = s),
            (l.firstBaseUpdate = c),
            (l.lastBaseUpdate = v),
            (n = l.shared.interleaved),
            n !== null)
        ) {
            l = n;
            do (u |= l.lane), (l = l.next);
            while (l !== n);
        } else o === null && (l.shared.lanes = 0);
        (Tn |= u), (e.lanes = u), (e.memoizedState = m);
    }
}
function Si(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = t), typeof l != "function"))
                    throw Error(y(191, l));
                l.call(r);
            }
        }
}
var ia = new os.Component().refs;
function Co(e, n, t, r) {
    (n = e.memoizedState),
        (t = t(r, n)),
        (t = t == null ? n : A({}, n, t)),
        (e.memoizedState = t),
        e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Mn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = ue(),
            l = cn(e),
            o = He(r, l);
        (o.payload = n),
            t != null && (o.callback = t),
            (n = sn(e, o, l)),
            n !== null && (Re(n, e, l, r), Cr(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = ue(),
            l = cn(e),
            o = He(r, l);
        (o.tag = 1),
            (o.payload = n),
            t != null && (o.callback = t),
            (n = sn(e, o, l)),
            n !== null && (Re(n, e, l, r), Cr(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = ue(),
            r = cn(e),
            l = He(t, r);
        (l.tag = 2),
            n != null && (l.callback = n),
            (n = sn(e, l, r)),
            n !== null && (Re(n, e, r, t), Cr(n, e, r));
    },
};
function ki(e, n, t, r, l, o, u) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, u)
            : n.prototype && n.prototype.isPureReactComponent
            ? !$t(t, r) || !$t(l, o)
            : !0
    );
}
function sa(e, n, t) {
    var r = !1,
        l = mn,
        o = n.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = Ce(o))
            : ((l = de(n) ? Pn : le.current),
              (r = n.contextTypes),
              (o = (r = r != null) ? et(e, l) : mn)),
        (n = new n(t, o)),
        (e.memoizedState =
            n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = sl),
        (e.stateNode = n),
        (n._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        n
    );
}
function Ei(e, n, t, r) {
    (e = n.state),
        typeof n.componentWillReceiveProps == "function" &&
            n.componentWillReceiveProps(t, r),
        typeof n.UNSAFE_componentWillReceiveProps == "function" &&
            n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && sl.enqueueReplaceState(n, n.state, null);
}
function _o(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = ia), mu(e);
    var o = n.contextType;
    typeof o == "object" && o !== null
        ? (l.context = Ce(o))
        : ((o = de(n) ? Pn : le.current), (l.context = et(e, o))),
        (l.state = e.memoizedState),
        (o = n.getDerivedStateFromProps),
        typeof o == "function" && (Co(e, n, o, t), (l.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((n = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            n !== l.state && sl.enqueueReplaceState(l, l.state, null),
            Kr(e, t, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ht(e, n, t) {
    if (
        ((e = t.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (t._owner) {
            if (((t = t._owner), t)) {
                if (t.tag !== 1) throw Error(y(309));
                var r = t.stateNode;
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                o = "" + e;
            return n !== null &&
                n.ref !== null &&
                typeof n.ref == "function" &&
                n.ref._stringRef === o
                ? n.ref
                : ((n = function (u) {
                      var i = l.refs;
                      i === ia && (i = l.refs = {}),
                          u === null ? delete i[o] : (i[o] = u);
                  }),
                  (n._stringRef = o),
                  n);
        }
        if (typeof e != "string") throw Error(y(284));
        if (!t._owner) throw Error(y(290, e));
    }
    return e;
}
function mr(e, n) {
    throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
            y(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : e
            )
        ))
    );
}
function xi(e) {
    var n = e._init;
    return n(e._payload);
}
function aa(e) {
    function n(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
        }
    }
    function t(f, a) {
        if (!e) return null;
        for (; a !== null; ) n(f, a), (a = a.sibling);
        return null;
    }
    function r(f, a) {
        for (f = new Map(); a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
                (a = a.sibling);
        return f;
    }
    function l(f, a) {
        return (f = fn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, a, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
                      : ((f.flags |= 2), a))
                : ((f.flags |= 1048576), a)
        );
    }
    function u(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, h) {
        return a === null || a.tag !== 6
            ? ((a = Wl(d, f.mode, h)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, h) {
        var E = d.type;
        return E === In
            ? v(f, a, d.props.children, h, d.key)
            : a !== null &&
              (a.elementType === E ||
                  (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === Ze &&
                      xi(E) === a.type))
            ? ((h = l(a, d.props)), (h.ref = ht(f, a, d)), (h.return = f), h)
            : ((h = Tr(d.type, d.key, d.props, null, f.mode, h)),
              (h.ref = ht(f, a, d)),
              (h.return = f),
              h);
    }
    function c(f, a, d, h) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== d.containerInfo ||
            a.stateNode.implementation !== d.implementation
            ? ((a = Ql(d, f.mode, h)), (a.return = f), a)
            : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function v(f, a, d, h, E) {
        return a === null || a.tag !== 7
            ? ((a = Nn(d, f.mode, h, E)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function m(f, a, d) {
        if ((typeof a == "string" && a !== "") || typeof a == "number")
            return (a = Wl("" + a, f.mode, d)), (a.return = f), a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case rr:
                    return (
                        (d = Tr(a.type, a.key, a.props, null, f.mode, d)),
                        (d.ref = ht(f, null, a)),
                        (d.return = f),
                        d
                    );
                case Dn:
                    return (a = Ql(a, f.mode, d)), (a.return = f), a;
                case Ze:
                    var h = a._init;
                    return m(f, h(a._payload), d);
            }
            if (St(a) || ft(a))
                return (a = Nn(a, f.mode, d, null)), (a.return = f), a;
            mr(f, a);
        }
        return null;
    }
    function p(f, a, d, h) {
        var E = a !== null ? a.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return E !== null ? null : i(f, a, "" + d, h);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case rr:
                    return d.key === E ? s(f, a, d, h) : null;
                case Dn:
                    return d.key === E ? c(f, a, d, h) : null;
                case Ze:
                    return (E = d._init), p(f, a, E(d._payload), h);
            }
            if (St(d) || ft(d)) return E !== null ? null : v(f, a, d, h, null);
            mr(f, d);
        }
        return null;
    }
    function g(f, a, d, h, E) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (f = f.get(d) || null), i(a, f, "" + h, E);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case rr:
                    return (
                        (f = f.get(h.key === null ? d : h.key) || null),
                        s(a, f, h, E)
                    );
                case Dn:
                    return (
                        (f = f.get(h.key === null ? d : h.key) || null),
                        c(a, f, h, E)
                    );
                case Ze:
                    var C = h._init;
                    return g(f, a, d, C(h._payload), E);
            }
            if (St(h) || ft(h))
                return (f = f.get(d) || null), v(a, f, h, E, null);
            mr(a, h);
        }
        return null;
    }
    function w(f, a, d, h) {
        for (
            var E = null, C = null, _ = a, N = (a = 0), B = null;
            _ !== null && N < d.length;
            N++
        ) {
            _.index > N ? ((B = _), (_ = null)) : (B = _.sibling);
            var T = p(f, _, d[N], h);
            if (T === null) {
                _ === null && (_ = B);
                break;
            }
            e && _ && T.alternate === null && n(f, _),
                (a = o(T, a, N)),
                C === null ? (E = T) : (C.sibling = T),
                (C = T),
                (_ = B);
        }
        if (N === d.length) return t(f, _), F && Sn(f, N), E;
        if (_ === null) {
            for (; N < d.length; N++)
                (_ = m(f, d[N], h)),
                    _ !== null &&
                        ((a = o(_, a, N)),
                        C === null ? (E = _) : (C.sibling = _),
                        (C = _));
            return F && Sn(f, N), E;
        }
        for (_ = r(f, _); N < d.length; N++)
            (B = g(_, f, N, d[N], h)),
                B !== null &&
                    (e &&
                        B.alternate !== null &&
                        _.delete(B.key === null ? N : B.key),
                    (a = o(B, a, N)),
                    C === null ? (E = B) : (C.sibling = B),
                    (C = B));
        return (
            e &&
                _.forEach(function (Ne) {
                    return n(f, Ne);
                }),
            F && Sn(f, N),
            E
        );
    }
    function S(f, a, d, h) {
        var E = ft(d);
        if (typeof E != "function") throw Error(y(150));
        if (((d = E.call(d)), d == null)) throw Error(y(151));
        for (
            var C = (E = null), _ = a, N = (a = 0), B = null, T = d.next();
            _ !== null && !T.done;
            N++, T = d.next()
        ) {
            _.index > N ? ((B = _), (_ = null)) : (B = _.sibling);
            var Ne = p(f, _, T.value, h);
            if (Ne === null) {
                _ === null && (_ = B);
                break;
            }
            e && _ && Ne.alternate === null && n(f, _),
                (a = o(Ne, a, N)),
                C === null ? (E = Ne) : (C.sibling = Ne),
                (C = Ne),
                (_ = B);
        }
        if (T.done) return t(f, _), F && Sn(f, N), E;
        if (_ === null) {
            for (; !T.done; N++, T = d.next())
                (T = m(f, T.value, h)),
                    T !== null &&
                        ((a = o(T, a, N)),
                        C === null ? (E = T) : (C.sibling = T),
                        (C = T));
            return F && Sn(f, N), E;
        }
        for (_ = r(f, _); !T.done; N++, T = d.next())
            (T = g(_, f, N, T.value, h)),
                T !== null &&
                    (e &&
                        T.alternate !== null &&
                        _.delete(T.key === null ? N : T.key),
                    (a = o(T, a, N)),
                    C === null ? (E = T) : (C.sibling = T),
                    (C = T));
        return (
            e &&
                _.forEach(function (at) {
                    return n(f, at);
                }),
            F && Sn(f, N),
            E
        );
    }
    function I(f, a, d, h) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === In &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case rr:
                    e: {
                        for (var E = d.key, C = a; C !== null; ) {
                            if (C.key === E) {
                                if (((E = d.type), E === In)) {
                                    if (C.tag === 7) {
                                        t(f, C.sibling),
                                            (a = l(C, d.props.children)),
                                            (a.return = f),
                                            (f = a);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === E ||
                                    (typeof E == "object" &&
                                        E !== null &&
                                        E.$$typeof === Ze &&
                                        xi(E) === C.type)
                                ) {
                                    t(f, C.sibling),
                                        (a = l(C, d.props)),
                                        (a.ref = ht(f, C, d)),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                }
                                t(f, C);
                                break;
                            } else n(f, C);
                            C = C.sibling;
                        }
                        d.type === In
                            ? ((a = Nn(d.props.children, f.mode, h, d.key)),
                              (a.return = f),
                              (f = a))
                            : ((h = Tr(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  h
                              )),
                              (h.ref = ht(f, a, d)),
                              (h.return = f),
                              (f = h));
                    }
                    return u(f);
                case Dn:
                    e: {
                        for (C = d.key; a !== null; ) {
                            if (a.key === C)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    a.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    t(f, a.sibling),
                                        (a = l(a, d.children || [])),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                } else {
                                    t(f, a);
                                    break;
                                }
                            else n(f, a);
                            a = a.sibling;
                        }
                        (a = Ql(d, f.mode, h)), (a.return = f), (f = a);
                    }
                    return u(f);
                case Ze:
                    return (C = d._init), I(f, a, C(d._payload), h);
            }
            if (St(d)) return w(f, a, d, h);
            if (ft(d)) return S(f, a, d, h);
            mr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              a !== null && a.tag === 6
                  ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
                  : (t(f, a), (a = Wl(d, f.mode, h)), (a.return = f), (f = a)),
              u(f))
            : t(f, a);
    }
    return I;
}
var tt = aa(!0),
    ca = aa(!1),
    bt = {},
    Ue = hn(bt),
    Ht = hn(bt),
    Wt = hn(bt);
function Cn(e) {
    if (e === bt) throw Error(y(174));
    return e;
}
function vu(e, n) {
    switch ((M(Wt, n), M(Ht, e), M(Ue, bt), (e = n.nodeType), e)) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : to(null, "");
            break;
        default:
            (e = e === 8 ? n.parentNode : n),
                (n = e.namespaceURI || null),
                (e = e.tagName),
                (n = to(n, e));
    }
    D(Ue), M(Ue, n);
}
function rt() {
    D(Ue), D(Ht), D(Wt);
}
function fa(e) {
    Cn(Wt.current);
    var n = Cn(Ue.current),
        t = to(n, e.type);
    n !== t && (M(Ht, e), M(Ue, t));
}
function hu(e) {
    Ht.current === e && (D(Ue), D(Ht));
}
var U = hn(0);
function Yr(e) {
    for (var n = e; n !== null; ) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (
                t !== null &&
                ((t = t.dehydrated),
                t === null || t.data === "$?" || t.data === "$!")
            )
                return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128) return n;
        } else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
}
var Ul = [];
function yu() {
    for (var e = 0; e < Ul.length; e++)
        Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0;
}
var _r = Xe.ReactCurrentDispatcher,
    $l = Xe.ReactCurrentBatchConfig,
    Ln = 0,
    $ = null,
    K = null,
    Z = null,
    Xr = !1,
    zt = !1,
    Qt = 0,
    td = 0;
function ne() {
    throw Error(y(321));
}
function gu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!Me(e[t], n[t])) return !1;
    return !0;
}
function wu(e, n, t, r, l, o) {
    if (
        ((Ln = o),
        ($ = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (_r.current = e === null || e.memoizedState === null ? ud : id),
        (e = t(r, l)),
        zt)
    ) {
        o = 0;
        do {
            if (((zt = !1), (Qt = 0), 25 <= o)) throw Error(y(301));
            (o += 1),
                (Z = K = null),
                (n.updateQueue = null),
                (_r.current = sd),
                (e = t(r, l));
        } while (zt);
    }
    if (
        ((_r.current = Gr),
        (n = K !== null && K.next !== null),
        (Ln = 0),
        (Z = K = $ = null),
        (Xr = !1),
        n)
    )
        throw Error(y(300));
    return e;
}
function Su() {
    var e = Qt !== 0;
    return (Qt = 0), e;
}
function De() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
    if (K === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = K.next;
    var n = Z === null ? $.memoizedState : Z.next;
    if (n !== null) (Z = n), (K = e);
    else {
        if (e === null) throw Error(y(310));
        (K = e),
            (e = {
                memoizedState: K.memoizedState,
                baseState: K.baseState,
                baseQueue: K.baseQueue,
                queue: K.queue,
                next: null,
            }),
            Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e);
    }
    return Z;
}
function Kt(e, n) {
    return typeof n == "function" ? n(e) : n;
}
function Al(e) {
    var n = _e(),
        t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = K,
        l = r.baseQueue,
        o = t.pending;
    if (o !== null) {
        if (l !== null) {
            var u = l.next;
            (l.next = o.next), (o.next = u);
        }
        (r.baseQueue = l = o), (t.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var i = (u = null),
            s = null,
            c = o;
        do {
            var v = c.lane;
            if ((Ln & v) === v)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var m = {
                    lane: v,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                s === null ? ((i = s = m), (u = r)) : (s = s.next = m),
                    ($.lanes |= v),
                    (Tn |= v);
            }
            c = c.next;
        } while (c !== null && c !== o);
        s === null ? (u = r) : (s.next = i),
            Me(r, n.memoizedState) || (ce = !0),
            (n.memoizedState = r),
            (n.baseState = u),
            (n.baseQueue = s),
            (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), ($.lanes |= o), (Tn |= o), (l = l.next);
        while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
}
function Vl(e) {
    var n = _e(),
        t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
        l = t.pending,
        o = n.memoizedState;
    if (l !== null) {
        t.pending = null;
        var u = (l = l.next);
        do (o = e(o, u.action)), (u = u.next);
        while (u !== l);
        Me(o, n.memoizedState) || (ce = !0),
            (n.memoizedState = o),
            n.baseQueue === null && (n.baseState = o),
            (t.lastRenderedState = o);
    }
    return [o, r];
}
function da() {}
function pa(e, n) {
    var t = $,
        r = _e(),
        l = n(),
        o = !Me(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (ce = !0)),
        (r = r.queue),
        ku(ha.bind(null, t, r, e), [e]),
        r.getSnapshot !== n || o || (Z !== null && Z.memoizedState.tag & 1))
    ) {
        if (
            ((t.flags |= 2048),
            Yt(9, va.bind(null, t, r, l, n), void 0, null),
            J === null)
        )
            throw Error(y(349));
        Ln & 30 || ma(t, n, l);
    }
    return l;
}
function ma(e, n, t) {
    (e.flags |= 16384),
        (e = { getSnapshot: n, value: t }),
        (n = $.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }),
              ($.updateQueue = n),
              (n.stores = [e]))
            : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function va(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ya(n) && ga(e);
}
function ha(e, n, t) {
    return t(function () {
        ya(n) && ga(e);
    });
}
function ya(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !Me(e, t);
    } catch {
        return !0;
    }
}
function ga(e) {
    var n = Ke(e, 1);
    n !== null && Re(n, e, 1, -1);
}
function Ci(e) {
    var n = De();
    return (
        typeof e == "function" && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Kt,
            lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = od.bind(null, $, e)),
        [n.memoizedState, e]
    );
}
function Yt(e, n, t, r) {
    return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        (n = $.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }),
              ($.updateQueue = n),
              (n.lastEffect = e.next = e))
            : ((t = n.lastEffect),
              t === null
                  ? (n.lastEffect = e.next = e)
                  : ((r = t.next),
                    (t.next = e),
                    (e.next = r),
                    (n.lastEffect = e))),
        e
    );
}
function wa() {
    return _e().memoizedState;
}
function Nr(e, n, t, r) {
    var l = De();
    ($.flags |= e),
        (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function al(e, n, t, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (K !== null) {
        var u = K.memoizedState;
        if (((o = u.destroy), r !== null && gu(r, u.deps))) {
            l.memoizedState = Yt(n, t, o, r);
            return;
        }
    }
    ($.flags |= e), (l.memoizedState = Yt(1 | n, t, o, r));
}
function _i(e, n) {
    return Nr(8390656, 8, e, n);
}
function ku(e, n) {
    return al(2048, 8, e, n);
}
function Sa(e, n) {
    return al(4, 2, e, n);
}
function ka(e, n) {
    return al(4, 4, e, n);
}
function Ea(e, n) {
    if (typeof n == "function")
        return (
            (e = e()),
            n(e),
            function () {
                n(null);
            }
        );
    if (n != null)
        return (
            (e = e()),
            (n.current = e),
            function () {
                n.current = null;
            }
        );
}
function xa(e, n, t) {
    return (
        (t = t != null ? t.concat([e]) : null), al(4, 4, Ea.bind(null, n, e), t)
    );
}
function Eu() {}
function Ca(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && gu(n, r[1])
        ? r[0]
        : ((t.memoizedState = [e, n]), e);
}
function _a(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && gu(n, r[1])
        ? r[0]
        : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Na(e, n, t) {
    return Ln & 21
        ? (Me(t, n) ||
              ((t = Ls()), ($.lanes |= t), (Tn |= t), (e.baseState = !0)),
          n)
        : (e.baseState && ((e.baseState = !1), (ce = !0)),
          (e.memoizedState = t));
}
function rd(e, n) {
    var t = R;
    (R = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1), n();
    } finally {
        (R = t), ($l.transition = r);
    }
}
function Pa() {
    return _e().memoizedState;
}
function ld(e, n, t) {
    var r = cn(e);
    if (
        ((t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        za(e))
    )
        La(n, t);
    else if (((t = oa(e, n, t, r)), t !== null)) {
        var l = ue();
        Re(t, e, r, l), Ta(t, n, r);
    }
}
function od(e, n, t) {
    var r = cn(e),
        l = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (za(e)) La(n, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = n.lastRenderedReducer), o !== null)
        )
            try {
                var u = n.lastRenderedState,
                    i = o(u, t);
                if (((l.hasEagerState = !0), (l.eagerState = i), Me(i, u))) {
                    var s = n.interleaved;
                    s === null
                        ? ((l.next = l), pu(n))
                        : ((l.next = s.next), (s.next = l)),
                        (n.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (t = oa(e, n, l, r)),
            t !== null && ((l = ue()), Re(t, e, r, l), Ta(t, n, r));
    }
}
function za(e) {
    var n = e.alternate;
    return e === $ || (n !== null && n === $);
}
function La(e, n) {
    zt = Xr = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
        (e.pending = n);
}
function Ta(e, n, t) {
    if (t & 4194240) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), bo(e, t);
    }
}
var Gr = {
        readContext: Ce,
        useCallback: ne,
        useContext: ne,
        useEffect: ne,
        useImperativeHandle: ne,
        useInsertionEffect: ne,
        useLayoutEffect: ne,
        useMemo: ne,
        useReducer: ne,
        useRef: ne,
        useState: ne,
        useDebugValue: ne,
        useDeferredValue: ne,
        useTransition: ne,
        useMutableSource: ne,
        useSyncExternalStore: ne,
        useId: ne,
        unstable_isNewReconciler: !1,
    },
    ud = {
        readContext: Ce,
        useCallback: function (e, n) {
            return (De().memoizedState = [e, n === void 0 ? null : n]), e;
        },
        useContext: Ce,
        useEffect: _i,
        useImperativeHandle: function (e, n, t) {
            return (
                (t = t != null ? t.concat([e]) : null),
                Nr(4194308, 4, Ea.bind(null, n, e), t)
            );
        },
        useLayoutEffect: function (e, n) {
            return Nr(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
            return Nr(4, 2, e, n);
        },
        useMemo: function (e, n) {
            var t = De();
            return (
                (n = n === void 0 ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
            );
        },
        useReducer: function (e, n, t) {
            var r = De();
            return (
                (n = t !== void 0 ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = ld.bind(null, $, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var n = De();
            return (e = { current: e }), (n.memoizedState = e);
        },
        useState: Ci,
        useDebugValue: Eu,
        useDeferredValue: function (e) {
            return (De().memoizedState = e);
        },
        useTransition: function () {
            var e = Ci(!1),
                n = e[0];
            return (e = rd.bind(null, e[1])), (De().memoizedState = e), [n, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, n, t) {
            var r = $,
                l = De();
            if (F) {
                if (t === void 0) throw Error(y(407));
                t = t();
            } else {
                if (((t = n()), J === null)) throw Error(y(349));
                Ln & 30 || ma(r, n, t);
            }
            l.memoizedState = t;
            var o = { value: t, getSnapshot: n };
            return (
                (l.queue = o),
                _i(ha.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Yt(9, va.bind(null, r, o, t, n), void 0, null),
                t
            );
        },
        useId: function () {
            var e = De(),
                n = J.identifierPrefix;
            if (F) {
                var t = Be,
                    r = Ve;
                (t = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + t),
                    (n = ":" + n + "R" + t),
                    (t = Qt++),
                    0 < t && (n += "H" + t.toString(32)),
                    (n += ":");
            } else (t = td++), (n = ":" + n + "r" + t.toString(32) + ":");
            return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
    },
    id = {
        readContext: Ce,
        useCallback: Ca,
        useContext: Ce,
        useEffect: ku,
        useImperativeHandle: xa,
        useInsertionEffect: Sa,
        useLayoutEffect: ka,
        useMemo: _a,
        useReducer: Al,
        useRef: wa,
        useState: function () {
            return Al(Kt);
        },
        useDebugValue: Eu,
        useDeferredValue: function (e) {
            var n = _e();
            return Na(n, K.memoizedState, e);
        },
        useTransition: function () {
            var e = Al(Kt)[0],
                n = _e().memoizedState;
            return [e, n];
        },
        useMutableSource: da,
        useSyncExternalStore: pa,
        useId: Pa,
        unstable_isNewReconciler: !1,
    },
    sd = {
        readContext: Ce,
        useCallback: Ca,
        useContext: Ce,
        useEffect: ku,
        useImperativeHandle: xa,
        useInsertionEffect: Sa,
        useLayoutEffect: ka,
        useMemo: _a,
        useReducer: Vl,
        useRef: wa,
        useState: function () {
            return Vl(Kt);
        },
        useDebugValue: Eu,
        useDeferredValue: function (e) {
            var n = _e();
            return K === null
                ? (n.memoizedState = e)
                : Na(n, K.memoizedState, e);
        },
        useTransition: function () {
            var e = Vl(Kt)[0],
                n = _e().memoizedState;
            return [e, n];
        },
        useMutableSource: da,
        useSyncExternalStore: pa,
        useId: Pa,
        unstable_isNewReconciler: !1,
    };
function lt(e, n) {
    try {
        var t = "",
            r = n;
        do (t += Dc(r)), (r = r.return);
        while (r);
        var l = t;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function No(e, n) {
    try {
        console.error(n.value);
    } catch (t) {
        setTimeout(function () {
            throw t;
        });
    }
}
var ad = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, n, t) {
    (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
        (t.callback = function () {
            Jr || ((Jr = !0), (Io = r)), No(e, n);
        }),
        t
    );
}
function Ra(e, n, t) {
    (t = He(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = n.value;
        (t.payload = function () {
            return r(l);
        }),
            (t.callback = function () {
                No(e, n);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (t.callback = function () {
                No(e, n),
                    typeof r != "function" &&
                        (an === null ? (an = new Set([this])) : an.add(this));
                var u = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: u !== null ? u : "",
                });
            }),
        t
    );
}
function Ni(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ad();
        var l = new Set();
        r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = xd.bind(null, e, n, t)), n.then(e, e));
}
function Pi(e) {
    do {
        var n;
        if (
            ((n = e.tag === 13) &&
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated !== null : !0)),
            n)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function zi(e, n, t, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === n
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (t.flags |= 131072),
                (t.flags &= -52805),
                t.tag === 1 &&
                    (t.alternate === null
                        ? (t.tag = 17)
                        : ((n = He(-1, 1)), (n.tag = 2), sn(t, n, 1))),
                (t.lanes |= 1)),
          e);
}
var cd = Xe.ReactCurrentOwner,
    ce = !1;
function oe(e, n, t, r) {
    n.child = e === null ? ca(n, null, t, r) : tt(n, e.child, t, r);
}
function Li(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return (
        Jn(n, l),
        (r = wu(e, n, t, r, o, l)),
        (t = Su()),
        e !== null && !ce
            ? ((n.updateQueue = e.updateQueue),
              (n.flags &= -2053),
              (e.lanes &= ~l),
              Ye(e, n, l))
            : (F && t && iu(n), (n.flags |= 1), oe(e, n, r, l), n.child)
    );
}
function Ti(e, n, t, r, l) {
    if (e === null) {
        var o = t.type;
        return typeof o == "function" &&
            !Tu(o) &&
            o.defaultProps === void 0 &&
            t.compare === null &&
            t.defaultProps === void 0
            ? ((n.tag = 15), (n.type = o), Ma(e, n, o, r, l))
            : ((e = Tr(t.type, null, r, n, n.mode, l)),
              (e.ref = n.ref),
              (e.return = n),
              (n.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var u = o.memoizedProps;
        if (
            ((t = t.compare),
            (t = t !== null ? t : $t),
            t(u, r) && e.ref === n.ref)
        )
            return Ye(e, n, l);
    }
    return (
        (n.flags |= 1),
        (e = fn(o, r)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e)
    );
}
function Ma(e, n, t, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if ($t(o, r) && e.ref === n.ref)
            if (((ce = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (ce = !0);
            else return (n.lanes = e.lanes), Ye(e, n, l);
    }
    return Po(e, n, t, r, l);
}
function ja(e, n, t) {
    var r = n.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(n.mode & 1))
            (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                M(Kn, me),
                (me |= t);
        else {
            if (!(t & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | t : t),
                    (n.lanes = n.childLanes = 1073741824),
                    (n.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (n.updateQueue = null),
                    M(Kn, me),
                    (me |= e),
                    null
                );
            (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : t),
                M(Kn, me),
                (me |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | t), (n.memoizedState = null))
            : (r = t),
            M(Kn, me),
            (me |= r);
    return oe(e, n, l, t), n.child;
}
function Da(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
        ((n.flags |= 512), (n.flags |= 2097152));
}
function Po(e, n, t, r, l) {
    var o = de(t) ? Pn : le.current;
    return (
        (o = et(n, o)),
        Jn(n, l),
        (t = wu(e, n, t, r, o, l)),
        (r = Su()),
        e !== null && !ce
            ? ((n.updateQueue = e.updateQueue),
              (n.flags &= -2053),
              (e.lanes &= ~l),
              Ye(e, n, l))
            : (F && r && iu(n), (n.flags |= 1), oe(e, n, t, l), n.child)
    );
}
function Oi(e, n, t, r, l) {
    if (de(t)) {
        var o = !0;
        Vr(n);
    } else o = !1;
    if ((Jn(n, l), n.stateNode === null))
        Pr(e, n), sa(n, t, r), _o(n, t, r, l), (r = !0);
    else if (e === null) {
        var u = n.stateNode,
            i = n.memoizedProps;
        u.props = i;
        var s = u.context,
            c = t.contextType;
        typeof c == "object" && c !== null
            ? (c = Ce(c))
            : ((c = de(t) ? Pn : le.current), (c = et(n, c)));
        var v = t.getDerivedStateFromProps,
            m =
                typeof v == "function" ||
                typeof u.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
                typeof u.componentWillReceiveProps != "function") ||
            ((i !== r || s !== c) && Ei(n, u, r, c)),
            (Je = !1);
        var p = n.memoizedState;
        (u.state = p),
            Kr(n, r, u, l),
            (s = n.memoizedState),
            i !== r || p !== s || fe.current || Je
                ? (typeof v == "function" &&
                      (Co(n, t, v, r), (s = n.memoizedState)),
                  (i = Je || ki(n, t, i, r, p, s, c))
                      ? (m ||
                            (typeof u.UNSAFE_componentWillMount != "function" &&
                                typeof u.componentWillMount != "function") ||
                            (typeof u.componentWillMount == "function" &&
                                u.componentWillMount(),
                            typeof u.UNSAFE_componentWillMount == "function" &&
                                u.UNSAFE_componentWillMount()),
                        typeof u.componentDidMount == "function" &&
                            (n.flags |= 4194308))
                      : (typeof u.componentDidMount == "function" &&
                            (n.flags |= 4194308),
                        (n.memoizedProps = r),
                        (n.memoizedState = s)),
                  (u.props = r),
                  (u.state = s),
                  (u.context = c),
                  (r = i))
                : (typeof u.componentDidMount == "function" &&
                      (n.flags |= 4194308),
                  (r = !1));
    } else {
        (u = n.stateNode),
            ua(e, n),
            (i = n.memoizedProps),
            (c = n.type === n.elementType ? i : ze(n.type, i)),
            (u.props = c),
            (m = n.pendingProps),
            (p = u.context),
            (s = t.contextType),
            typeof s == "object" && s !== null
                ? (s = Ce(s))
                : ((s = de(t) ? Pn : le.current), (s = et(n, s)));
        var g = t.getDerivedStateFromProps;
        (v =
            typeof g == "function" ||
            typeof u.getSnapshotBeforeUpdate == "function") ||
            (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
                typeof u.componentWillReceiveProps != "function") ||
            ((i !== m || p !== s) && Ei(n, u, r, s)),
            (Je = !1),
            (p = n.memoizedState),
            (u.state = p),
            Kr(n, r, u, l);
        var w = n.memoizedState;
        i !== m || p !== w || fe.current || Je
            ? (typeof g == "function" &&
                  (Co(n, t, g, r), (w = n.memoizedState)),
              (c = Je || ki(n, t, c, r, p, w, s) || !1)
                  ? (v ||
                        (typeof u.UNSAFE_componentWillUpdate != "function" &&
                            typeof u.componentWillUpdate != "function") ||
                        (typeof u.componentWillUpdate == "function" &&
                            u.componentWillUpdate(r, w, s),
                        typeof u.UNSAFE_componentWillUpdate == "function" &&
                            u.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof u.componentDidUpdate == "function" && (n.flags |= 4),
                    typeof u.getSnapshotBeforeUpdate == "function" &&
                        (n.flags |= 1024))
                  : (typeof u.componentDidUpdate != "function" ||
                        (i === e.memoizedProps && p === e.memoizedState) ||
                        (n.flags |= 4),
                    typeof u.getSnapshotBeforeUpdate != "function" ||
                        (i === e.memoizedProps && p === e.memoizedState) ||
                        (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = w)),
              (u.props = r),
              (u.state = w),
              (u.context = s),
              (r = c))
            : (typeof u.componentDidUpdate != "function" ||
                  (i === e.memoizedProps && p === e.memoizedState) ||
                  (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                  (i === e.memoizedProps && p === e.memoizedState) ||
                  (n.flags |= 1024),
              (r = !1));
    }
    return zo(e, n, t, r, o, l);
}
function zo(e, n, t, r, l, o) {
    Da(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u) return l && hi(n, t, !1), Ye(e, n, o);
    (r = n.stateNode), (cd.current = n);
    var i =
        u && typeof t.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (n.flags |= 1),
        e !== null && u
            ? ((n.child = tt(n, e.child, null, o)),
              (n.child = tt(n, null, i, o)))
            : oe(e, n, i, o),
        (n.memoizedState = r.state),
        l && hi(n, t, !0),
        n.child
    );
}
function Ia(e) {
    var n = e.stateNode;
    n.pendingContext
        ? vi(e, n.pendingContext, n.pendingContext !== n.context)
        : n.context && vi(e, n.context, !1),
        vu(e, n.containerInfo);
}
function Ri(e, n, t, r, l) {
    return nt(), au(l), (n.flags |= 256), oe(e, n, t, r), n.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Fa(e, n, t) {
    var r = n.pendingProps,
        l = U.current,
        o = !1,
        u = (n.flags & 128) !== 0,
        i;
    if (
        ((i = u) ||
            (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        i
            ? ((o = !0), (n.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        M(U, l & 1),
        e === null)
    )
        return (
            Eo(n),
            (e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (n.mode & 1
                      ? e.data === "$!"
                          ? (n.lanes = 8)
                          : (n.lanes = 1073741824)
                      : (n.lanes = 1),
                  null)
                : ((u = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = n.mode),
                        (o = n.child),
                        (u = { mode: "hidden", children: u }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = u))
                            : (o = dl(u, r, 0, null)),
                        (e = Nn(e, r, t, null)),
                        (o.return = n),
                        (e.return = n),
                        (o.sibling = e),
                        (n.child = o),
                        (n.child.memoizedState = To(t)),
                        (n.memoizedState = Lo),
                        e)
                      : xu(n, u))
        );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
        return fd(e, n, u, r, i, l, t);
    if (o) {
        (o = r.fallback), (u = n.mode), (l = e.child), (i = l.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(u & 1) && n.child !== l
                ? ((r = n.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (n.deletions = null))
                : ((r = fn(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            i !== null
                ? (o = fn(i, o))
                : ((o = Nn(o, u, t, null)), (o.flags |= 2)),
            (o.return = n),
            (r.return = n),
            (r.sibling = o),
            (n.child = r),
            (r = o),
            (o = n.child),
            (u = e.child.memoizedState),
            (u =
                u === null
                    ? To(t)
                    : {
                          baseLanes: u.baseLanes | t,
                          cachePool: null,
                          transitions: u.transitions,
                      }),
            (o.memoizedState = u),
            (o.childLanes = e.childLanes & ~t),
            (n.memoizedState = Lo),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = fn(o, { mode: "visible", children: r.children })),
        !(n.mode & 1) && (r.lanes = t),
        (r.return = n),
        (r.sibling = null),
        e !== null &&
            ((t = n.deletions),
            t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r
    );
}
function xu(e, n) {
    return (
        (n = dl({ mode: "visible", children: n }, e.mode, 0, null)),
        (n.return = e),
        (e.child = n)
    );
}
function vr(e, n, t, r) {
    return (
        r !== null && au(r),
        tt(n, e.child, null, t),
        (e = xu(n, n.pendingProps.children)),
        (e.flags |= 2),
        (n.memoizedState = null),
        e
    );
}
function fd(e, n, t, r, l, o, u) {
    if (t)
        return n.flags & 256
            ? ((n.flags &= -257), (r = Bl(Error(y(422)))), vr(e, n, u, r))
            : n.memoizedState !== null
            ? ((n.child = e.child), (n.flags |= 128), null)
            : ((o = r.fallback),
              (l = n.mode),
              (r = dl({ mode: "visible", children: r.children }, l, 0, null)),
              (o = Nn(o, l, u, null)),
              (o.flags |= 2),
              (r.return = n),
              (o.return = n),
              (r.sibling = o),
              (n.child = r),
              n.mode & 1 && tt(n, e.child, null, u),
              (n.child.memoizedState = To(u)),
              (n.memoizedState = Lo),
              o);
    if (!(n.mode & 1)) return vr(e, n, u, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
        return (
            (r = i), (o = Error(y(419))), (r = Bl(o, r, void 0)), vr(e, n, u, r)
        );
    }
    if (((i = (u & e.childLanes) !== 0), ce || i)) {
        if (((r = J), r !== null)) {
            switch (u & -u) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | u) ? 0 : l),
                l !== 0 &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), Ke(e, l), Re(r, e, l, -1));
        }
        return Lu(), (r = Bl(Error(y(421)))), vr(e, n, u, r);
    }
    return l.data === "$?"
        ? ((n.flags |= 128),
          (n.child = e.child),
          (n = Cd.bind(null, e)),
          (l._reactRetry = n),
          null)
        : ((e = o.treeContext),
          (ve = un(l.nextSibling)),
          (he = n),
          (F = !0),
          (Te = null),
          e !== null &&
              ((Se[ke++] = Ve),
              (Se[ke++] = Be),
              (Se[ke++] = zn),
              (Ve = e.id),
              (Be = e.overflow),
              (zn = n)),
          (n = xu(n, r.children)),
          (n.flags |= 4096),
          n);
}
function Mi(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), xo(e.return, n, t);
}
function Hl(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: n,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: t,
              tailMode: l,
          })
        : ((o.isBackwards = n),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = t),
          (o.tailMode = l));
}
function Ua(e, n, t) {
    var r = n.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((oe(e, n, r.children, t), (r = U.current), r & 2))
        (r = (r & 1) | 2), (n.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = n.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Mi(e, t, n);
                else if (e.tag === 19) Mi(e, t, n);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === n) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((M(U, r), !(n.mode & 1))) n.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (t = n.child, l = null; t !== null; )
                    (e = t.alternate),
                        e !== null && Yr(e) === null && (l = t),
                        (t = t.sibling);
                (t = l),
                    t === null
                        ? ((l = n.child), (n.child = null))
                        : ((l = t.sibling), (t.sibling = null)),
                    Hl(n, !1, l, t, o);
                break;
            case "backwards":
                for (t = null, l = n.child, n.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && Yr(e) === null)) {
                        n.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = t), (t = l), (l = e);
                }
                Hl(n, !0, t, null, o);
                break;
            case "together":
                Hl(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null;
        }
    return n.child;
}
function Pr(e, n) {
    !(n.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
    if (
        (e !== null && (n.dependencies = e.dependencies),
        (Tn |= n.lanes),
        !(t & n.childLanes))
    )
        return null;
    if (e !== null && n.child !== e.child) throw Error(y(153));
    if (n.child !== null) {
        for (
            e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n;
            e.sibling !== null;

        )
            (e = e.sibling),
                (t = t.sibling = fn(e, e.pendingProps)),
                (t.return = n);
        t.sibling = null;
    }
    return n.child;
}
function dd(e, n, t) {
    switch (n.tag) {
        case 3:
            Ia(n), nt();
            break;
        case 5:
            fa(n);
            break;
        case 1:
            de(n.type) && Vr(n);
            break;
        case 4:
            vu(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                l = n.memoizedProps.value;
            M(Wr, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = n.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (M(U, U.current & 1), (n.flags |= 128), null)
                    : t & n.child.childLanes
                    ? Fa(e, n, t)
                    : (M(U, U.current & 1),
                      (e = Ye(e, n, t)),
                      e !== null ? e.sibling : null);
            M(U, U.current & 1);
            break;
        case 19:
            if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
                if (r) return Ua(e, n, t);
                n.flags |= 128;
            }
            if (
                ((l = n.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                M(U, U.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (n.lanes = 0), ja(e, n, t);
    }
    return Ye(e, n, t);
}
var $a, Oo, Aa, Va;
$a = function (e, n) {
    for (var t = n.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === n) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) return;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
};
Oo = function () {};
Aa = function (e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = n.stateNode), Cn(Ue.current);
        var o = null;
        switch (t) {
            case "input":
                (l = ql(e, l)), (r = ql(e, r)), (o = []);
                break;
            case "select":
                (l = A({}, l, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (l = no(e, l)), (r = no(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = $r);
        }
        ro(t, r);
        var u;
        t = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var i = l[c];
                    for (u in i)
                        i.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (Rt.hasOwnProperty(c)
                            ? o || (o = [])
                            : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (
                ((i = l != null ? l[c] : void 0),
                r.hasOwnProperty(c) && s !== i && (s != null || i != null))
            )
                if (c === "style")
                    if (i) {
                        for (u in i)
                            !i.hasOwnProperty(u) ||
                                (s && s.hasOwnProperty(u)) ||
                                (t || (t = {}), (t[u] = ""));
                        for (u in s)
                            s.hasOwnProperty(u) &&
                                i[u] !== s[u] &&
                                (t || (t = {}), (t[u] = s[u]));
                    } else t || (o || (o = []), o.push(c, t)), (t = s);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                          (i = i ? i.__html : void 0),
                          s != null && i !== s && (o = o || []).push(c, s))
                        : c === "children"
                        ? (typeof s != "string" && typeof s != "number") ||
                          (o = o || []).push(c, "" + s)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (Rt.hasOwnProperty(c)
                              ? (s != null &&
                                    c === "onScroll" &&
                                    j("scroll", e),
                                o || i === s || (o = []))
                              : (o = o || []).push(c, s));
        }
        t && (o = o || []).push("style", t);
        var c = o;
        (n.updateQueue = c) && (n.flags |= 4);
    }
};
Va = function (e, n, t, r) {
    t !== r && (n.flags |= 4);
};
function yt(e, n) {
    if (!F)
        switch (e.tailMode) {
            case "hidden":
                n = e.tail;
                for (var t = null; n !== null; )
                    n.alternate !== null && (t = n), (n = n.sibling);
                t === null ? (e.tail = null) : (t.sibling = null);
                break;
            case "collapsed":
                t = e.tail;
                for (var r = null; t !== null; )
                    t.alternate !== null && (r = t), (t = t.sibling);
                r === null
                    ? n || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function te(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var l = e.child; l !== null; )
            (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function pd(e, n, t) {
    var r = n.pendingProps;
    switch ((su(n), n.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return te(n), null;
        case 1:
            return de(n.type) && Ar(), te(n), null;
        case 3:
            return (
                (r = n.stateNode),
                rt(),
                D(fe),
                D(le),
                yu(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (pr(n)
                        ? (n.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                          ((n.flags |= 1024),
                          Te !== null && ($o(Te), (Te = null)))),
                Oo(e, n),
                te(n),
                null
            );
        case 5:
            hu(n);
            var l = Cn(Wt.current);
            if (((t = n.type), e !== null && n.stateNode != null))
                Aa(e, n, t, r, l),
                    e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
            else {
                if (!r) {
                    if (n.stateNode === null) throw Error(y(166));
                    return te(n), null;
                }
                if (((e = Cn(Ue.current)), pr(n))) {
                    (r = n.stateNode), (t = n.type);
                    var o = n.memoizedProps;
                    switch (
                        ((r[Ie] = n), (r[Bt] = o), (e = (n.mode & 1) !== 0), t)
                    ) {
                        case "dialog":
                            j("cancel", r), j("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            j("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Et.length; l++) j(Et[l], r);
                            break;
                        case "source":
                            j("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            j("error", r), j("load", r);
                            break;
                        case "details":
                            j("toggle", r);
                            break;
                        case "input":
                            Bu(r, o), j("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                j("invalid", r);
                            break;
                        case "textarea":
                            Wu(r, o), j("invalid", r);
                    }
                    ro(t, o), (l = null);
                    for (var u in o)
                        if (o.hasOwnProperty(u)) {
                            var i = o[u];
                            u === "children"
                                ? typeof i == "string"
                                    ? r.textContent !== i &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          dr(r.textContent, i, e),
                                      (l = ["children", i]))
                                    : typeof i == "number" &&
                                      r.textContent !== "" + i &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          dr(r.textContent, i, e),
                                      (l = ["children", "" + i]))
                                : Rt.hasOwnProperty(u) &&
                                  i != null &&
                                  u === "onScroll" &&
                                  j("scroll", r);
                        }
                    switch (t) {
                        case "input":
                            lr(r), Hu(r, o, !0);
                            break;
                        case "textarea":
                            lr(r), Qu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = $r);
                    }
                    (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
                } else {
                    (u = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ms(t)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? t === "script"
                                ? ((e = u.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = u.createElement(t, { is: r.is }))
                                : ((e = u.createElement(t)),
                                  t === "select" &&
                                      ((u = e),
                                      r.multiple
                                          ? (u.multiple = !0)
                                          : r.size && (u.size = r.size)))
                            : (e = u.createElementNS(e, t)),
                        (e[Ie] = n),
                        (e[Bt] = r),
                        $a(e, n, !1, !1),
                        (n.stateNode = e);
                    e: {
                        switch (((u = lo(t, r)), t)) {
                            case "dialog":
                                j("cancel", e), j("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                j("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Et.length; l++) j(Et[l], e);
                                l = r;
                                break;
                            case "source":
                                j("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                j("error", e), j("load", e), (l = r);
                                break;
                            case "details":
                                j("toggle", e), (l = r);
                                break;
                            case "input":
                                Bu(e, r), (l = ql(e, r)), j("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = A({}, r, { value: void 0 })),
                                    j("invalid", e);
                                break;
                            case "textarea":
                                Wu(e, r), (l = no(e, r)), j("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        ro(t, l), (i = l);
                        for (o in i)
                            if (i.hasOwnProperty(o)) {
                                var s = i[o];
                                o === "style"
                                    ? ys(e, s)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && vs(e, s))
                                    : o === "children"
                                    ? typeof s == "string"
                                        ? (t !== "textarea" || s !== "") &&
                                          Mt(e, s)
                                        : typeof s == "number" && Mt(e, "" + s)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (Rt.hasOwnProperty(o)
                                          ? s != null &&
                                            o === "onScroll" &&
                                            j("scroll", e)
                                          : s != null && Yo(e, o, s, u));
                            }
                        switch (t) {
                            case "input":
                                lr(e), Hu(e, r, !1);
                                break;
                            case "textarea":
                                lr(e), Qu(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + pn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? Yn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          Yn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = $r);
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (n.flags |= 4);
                }
                n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
            }
            return te(n), null;
        case 6:
            if (e && n.stateNode != null) Va(e, n, e.memoizedProps, r);
            else {
                if (typeof r != "string" && n.stateNode === null)
                    throw Error(y(166));
                if (((t = Cn(Wt.current)), Cn(Ue.current), pr(n))) {
                    if (
                        ((r = n.stateNode),
                        (t = n.memoizedProps),
                        (r[Ie] = n),
                        (o = r.nodeValue !== t) && ((e = he), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    dr(r.nodeValue, t, (e.mode & 1) !== 0);
                        }
                    o && (n.flags |= 4);
                } else
                    (r = (
                        t.nodeType === 9 ? t : t.ownerDocument
                    ).createTextNode(r)),
                        (r[Ie] = n),
                        (n.stateNode = r);
            }
            return te(n), null;
        case 13:
            if (
                (D(U),
                (r = n.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (F && ve !== null && n.mode & 1 && !(n.flags & 128))
                    la(), nt(), (n.flags |= 98560), (o = !1);
                else if (((o = pr(n)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(y(318));
                        if (
                            ((o = n.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(y(317));
                        o[Ie] = n;
                    } else
                        nt(),
                            !(n.flags & 128) && (n.memoizedState = null),
                            (n.flags |= 4);
                    te(n), (o = !1);
                } else Te !== null && ($o(Te), (Te = null)), (o = !0);
                if (!o) return n.flags & 65536 ? n : null;
            }
            return n.flags & 128
                ? ((n.lanes = t), n)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((n.child.flags |= 8192),
                      n.mode & 1 &&
                          (e === null || U.current & 1
                              ? Y === 0 && (Y = 3)
                              : Lu())),
                  n.updateQueue !== null && (n.flags |= 4),
                  te(n),
                  null);
        case 4:
            return (
                rt(),
                Oo(e, n),
                e === null && At(n.stateNode.containerInfo),
                te(n),
                null
            );
        case 10:
            return du(n.type._context), te(n), null;
        case 17:
            return de(n.type) && Ar(), te(n), null;
        case 19:
            if ((D(U), (o = n.memoizedState), o === null)) return te(n), null;
            if (((r = (n.flags & 128) !== 0), (u = o.rendering), u === null))
                if (r) yt(o, !1);
                else {
                    if (Y !== 0 || (e !== null && e.flags & 128))
                        for (e = n.child; e !== null; ) {
                            if (((u = Yr(e)), u !== null)) {
                                for (
                                    n.flags |= 128,
                                        yt(o, !1),
                                        r = u.updateQueue,
                                        r !== null &&
                                            ((n.updateQueue = r),
                                            (n.flags |= 4)),
                                        n.subtreeFlags = 0,
                                        r = t,
                                        t = n.child;
                                    t !== null;

                                )
                                    (o = t),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (u = o.alternate),
                                        u === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = u.childLanes),
                                              (o.lanes = u.lanes),
                                              (o.child = u.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  u.memoizedProps),
                                              (o.memoizedState =
                                                  u.memoizedState),
                                              (o.updateQueue = u.updateQueue),
                                              (o.type = u.type),
                                              (e = u.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (t = t.sibling);
                                return M(U, (U.current & 1) | 2), n.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        W() > ot &&
                        ((n.flags |= 128),
                        (r = !0),
                        yt(o, !1),
                        (n.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Yr(u)), e !== null)) {
                        if (
                            ((n.flags |= 128),
                            (r = !0),
                            (t = e.updateQueue),
                            t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                            yt(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !u.alternate &&
                                !F)
                        )
                            return te(n), null;
                    } else
                        2 * W() - o.renderingStartTime > ot &&
                            t !== 1073741824 &&
                            ((n.flags |= 128),
                            (r = !0),
                            yt(o, !1),
                            (n.lanes = 4194304));
                o.isBackwards
                    ? ((u.sibling = n.child), (n.child = u))
                    : ((t = o.last),
                      t !== null ? (t.sibling = u) : (n.child = u),
                      (o.last = u));
            }
            return o.tail !== null
                ? ((n = o.tail),
                  (o.rendering = n),
                  (o.tail = n.sibling),
                  (o.renderingStartTime = W()),
                  (n.sibling = null),
                  (t = U.current),
                  M(U, r ? (t & 1) | 2 : t & 1),
                  n)
                : (te(n), null);
        case 22:
        case 23:
            return (
                zu(),
                (r = n.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (n.flags |= 8192),
                r && n.mode & 1
                    ? me & 1073741824 &&
                      (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                    : te(n),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(y(156, n.tag));
}
function md(e, n) {
    switch ((su(n), n.tag)) {
        case 1:
            return (
                de(n.type) && Ar(),
                (e = n.flags),
                e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 3:
            return (
                rt(),
                D(fe),
                D(le),
                yu(),
                (e = n.flags),
                e & 65536 && !(e & 128)
                    ? ((n.flags = (e & -65537) | 128), n)
                    : null
            );
        case 5:
            return hu(n), null;
        case 13:
            if (
                (D(U),
                (e = n.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (n.alternate === null) throw Error(y(340));
                nt();
            }
            return (
                (e = n.flags),
                e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 19:
            return D(U), null;
        case 4:
            return rt(), null;
        case 10:
            return du(n.type._context), null;
        case 22:
        case 23:
            return zu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var hr = !1,
    re = !1,
    vd = typeof WeakSet == "function" ? WeakSet : Set,
    k = null;
function Qn(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null);
            } catch (r) {
                V(e, n, r);
            }
        else t.current = null;
}
function Ro(e, n, t) {
    try {
        t();
    } catch (r) {
        V(e, n, r);
    }
}
var ji = !1;
function hd(e, n) {
    if (((vo = Ir), (e = Qs()), uu(e))) {
        if ("selectionStart" in e)
            var t = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                t = ((t = e.ownerDocument) && t.defaultView) || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType, o.nodeType;
                    } catch {
                        t = null;
                        break e;
                    }
                    var u = 0,
                        i = -1,
                        s = -1,
                        c = 0,
                        v = 0,
                        m = e,
                        p = null;
                    n: for (;;) {
                        for (
                            var g;
                            m !== t ||
                                (l !== 0 && m.nodeType !== 3) ||
                                (i = u + l),
                                m !== o ||
                                    (r !== 0 && m.nodeType !== 3) ||
                                    (s = u + r),
                                m.nodeType === 3 && (u += m.nodeValue.length),
                                (g = m.firstChild) !== null;

                        )
                            (p = m), (m = g);
                        for (;;) {
                            if (m === e) break n;
                            if (
                                (p === t && ++c === l && (i = u),
                                p === o && ++v === r && (s = u),
                                (g = m.nextSibling) !== null)
                            )
                                break;
                            (m = p), (p = m.parentNode);
                        }
                        m = g;
                    }
                    t = i === -1 || s === -1 ? null : { start: i, end: s };
                } else t = null;
            }
        t = t || { start: 0, end: 0 };
    } else t = null;
    for (
        ho = { focusedElem: e, selectionRange: t }, Ir = !1, k = n;
        k !== null;

    )
        if (
            ((n = k),
            (e = n.child),
            (n.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = n), (k = e);
        else
            for (; k !== null; ) {
                n = k;
                try {
                    var w = n.alternate;
                    if (n.flags & 1024)
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var S = w.memoizedProps,
                                        I = w.memoizedState,
                                        f = n.stateNode,
                                        a = f.getSnapshotBeforeUpdate(
                                            n.elementType === n.type
                                                ? S
                                                : ze(n.type, S),
                                            I
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = n.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(y(163));
                        }
                } catch (h) {
                    V(n, n.return, h);
                }
                if (((e = n.sibling), e !== null)) {
                    (e.return = n.return), (k = e);
                    break;
                }
                k = n.return;
            }
    return (w = ji), (ji = !1), w;
}
function Lt(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && Ro(n, t, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function cl(e, n) {
    if (
        ((n = n.updateQueue),
        (n = n !== null ? n.lastEffect : null),
        n !== null)
    ) {
        var t = (n = n.next);
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
            }
            t = t.next;
        } while (t !== n);
    }
}
function Mo(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t;
        }
        typeof n == "function" ? n(e) : (n.current = e);
    }
}
function Ba(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Ba(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((n = e.stateNode),
            n !== null &&
                (delete n[Ie],
                delete n[Bt],
                delete n[wo],
                delete n[qf],
                delete n[bf])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ha(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Di(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ha(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function jo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            n
                ? t.nodeType === 8
                    ? t.parentNode.insertBefore(e, n)
                    : t.insertBefore(e, n)
                : (t.nodeType === 8
                      ? ((n = t.parentNode), n.insertBefore(e, t))
                      : ((n = t), n.appendChild(e)),
                  (t = t._reactRootContainer),
                  t != null || n.onclick !== null || (n.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (jo(e, n, t), e = e.sibling; e !== null; )
            jo(e, n, t), (e = e.sibling);
}
function Do(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Do(e, n, t), e = e.sibling; e !== null; )
            Do(e, n, t), (e = e.sibling);
}
var q = null,
    Le = !1;
function Ge(e, n, t) {
    for (t = t.child; t !== null; ) Wa(e, n, t), (t = t.sibling);
}
function Wa(e, n, t) {
    if (Fe && typeof Fe.onCommitFiberUnmount == "function")
        try {
            Fe.onCommitFiberUnmount(tl, t);
        } catch {}
    switch (t.tag) {
        case 5:
            re || Qn(t, n);
        case 6:
            var r = q,
                l = Le;
            (q = null),
                Ge(e, n, t),
                (q = r),
                (Le = l),
                q !== null &&
                    (Le
                        ? ((e = q),
                          (t = t.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(t)
                              : e.removeChild(t))
                        : q.removeChild(t.stateNode));
            break;
        case 18:
            q !== null &&
                (Le
                    ? ((e = q),
                      (t = t.stateNode),
                      e.nodeType === 8
                          ? Il(e.parentNode, t)
                          : e.nodeType === 1 && Il(e, t),
                      Ft(e))
                    : Il(q, t.stateNode));
            break;
        case 4:
            (r = q),
                (l = Le),
                (q = t.stateNode.containerInfo),
                (Le = !0),
                Ge(e, n, t),
                (q = r),
                (Le = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !re &&
                ((r = t.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        u = o.destroy;
                    (o = o.tag),
                        u !== void 0 && (o & 2 || o & 4) && Ro(t, n, u),
                        (l = l.next);
                } while (l !== r);
            }
            Ge(e, n, t);
            break;
        case 1:
            if (
                !re &&
                (Qn(t, n),
                (r = t.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = t.memoizedProps),
                        (r.state = t.memoizedState),
                        r.componentWillUnmount();
                } catch (i) {
                    V(t, n, i);
                }
            Ge(e, n, t);
            break;
        case 21:
            Ge(e, n, t);
            break;
        case 22:
            t.mode & 1
                ? ((re = (r = re) || t.memoizedState !== null),
                  Ge(e, n, t),
                  (re = r))
                : Ge(e, n, t);
            break;
        default:
            Ge(e, n, t);
    }
}
function Ii(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new vd()),
            n.forEach(function (r) {
                var l = _d.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
    }
}
function Pe(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
                var o = e,
                    u = n,
                    i = u;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                        case 5:
                            (q = i.stateNode), (Le = !1);
                            break e;
                        case 3:
                            (q = i.stateNode.containerInfo), (Le = !0);
                            break e;
                        case 4:
                            (q = i.stateNode.containerInfo), (Le = !0);
                            break e;
                    }
                    i = i.return;
                }
                if (q === null) throw Error(y(160));
                Wa(o, u, l), (q = null), (Le = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (c) {
                V(l, n, c);
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null; ) Qa(n, e), (n = n.sibling);
}
function Qa(e, n) {
    var t = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Pe(n, e), je(e), r & 4)) {
                try {
                    Lt(3, e, e.return), cl(3, e);
                } catch (S) {
                    V(e, e.return, S);
                }
                try {
                    Lt(5, e, e.return);
                } catch (S) {
                    V(e, e.return, S);
                }
            }
            break;
        case 1:
            Pe(n, e), je(e), r & 512 && t !== null && Qn(t, t.return);
            break;
        case 5:
            if (
                (Pe(n, e),
                je(e),
                r & 512 && t !== null && Qn(t, t.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Mt(l, "");
                } catch (S) {
                    V(e, e.return, S);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    u = t !== null ? t.memoizedProps : o,
                    i = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        i === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            ds(l, o),
                            lo(i, u);
                        var c = lo(i, o);
                        for (u = 0; u < s.length; u += 2) {
                            var v = s[u],
                                m = s[u + 1];
                            v === "style"
                                ? ys(l, m)
                                : v === "dangerouslySetInnerHTML"
                                ? vs(l, m)
                                : v === "children"
                                ? Mt(l, m)
                                : Yo(l, v, m, c);
                        }
                        switch (i) {
                            case "input":
                                bl(l, o);
                                break;
                            case "textarea":
                                ps(l, o);
                                break;
                            case "select":
                                var p = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null
                                    ? Yn(l, !!o.multiple, g, !1)
                                    : p !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? Yn(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : Yn(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        l[Bt] = o;
                    } catch (S) {
                        V(e, e.return, S);
                    }
            }
            break;
        case 6:
            if ((Pe(n, e), je(e), r & 4)) {
                if (e.stateNode === null) throw Error(y(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (S) {
                    V(e, e.return, S);
                }
            }
            break;
        case 3:
            if (
                (Pe(n, e),
                je(e),
                r & 4 && t !== null && t.memoizedState.isDehydrated)
            )
                try {
                    Ft(n.containerInfo);
                } catch (S) {
                    V(e, e.return, S);
                }
            break;
        case 4:
            Pe(n, e), je(e);
            break;
        case 13:
            Pe(n, e),
                je(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (Nu = W())),
                r & 4 && Ii(e);
            break;
        case 22:
            if (
                ((v = t !== null && t.memoizedState !== null),
                e.mode & 1
                    ? ((re = (c = re) || v), Pe(n, e), (re = c))
                    : Pe(n, e),
                je(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !v && e.mode & 1)
                )
                    for (k = e, v = e.child; v !== null; ) {
                        for (m = k = v; k !== null; ) {
                            switch (((p = k), (g = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Lt(4, p, p.return);
                                    break;
                                case 1:
                                    Qn(p, p.return);
                                    var w = p.stateNode;
                                    if (
                                        typeof w.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = p), (t = p.return);
                                        try {
                                            (n = r),
                                                (w.props = n.memoizedProps),
                                                (w.state = n.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (S) {
                                            V(r, t, S);
                                        }
                                    }
                                    break;
                                case 5:
                                    Qn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Ui(m);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = p), (k = g)) : Ui(m);
                        }
                        v = v.sibling;
                    }
                e: for (v = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (v === null) {
                            v = m;
                            try {
                                (l = m.stateNode),
                                    c
                                        ? ((o = l.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((i = m.stateNode),
                                          (s = m.memoizedProps.style),
                                          (u =
                                              s != null &&
                                              s.hasOwnProperty("display")
                                                  ? s.display
                                                  : null),
                                          (i.style.display = hs("display", u)));
                            } catch (S) {
                                V(e, e.return, S);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (v === null)
                            try {
                                m.stateNode.nodeValue = c
                                    ? ""
                                    : m.memoizedProps;
                            } catch (S) {
                                V(e, e.return, S);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        v === m && (v = null), (m = m.return);
                    }
                    v === m && (v = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling);
                }
            }
            break;
        case 19:
            Pe(n, e), je(e), r & 4 && Ii(e);
            break;
        case 21:
            break;
        default:
            Pe(n, e), je(e);
    }
}
function je(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null; ) {
                    if (Ha(t)) {
                        var r = t;
                        break e;
                    }
                    t = t.return;
                }
                throw Error(y(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Mt(l, ""), (r.flags &= -33));
                    var o = Di(e);
                    Do(e, o, l);
                    break;
                case 3:
                case 4:
                    var u = r.stateNode.containerInfo,
                        i = Di(e);
                    jo(e, i, u);
                    break;
                default:
                    throw Error(y(161));
            }
        } catch (s) {
            V(e, e.return, s);
        }
        e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
}
function yd(e, n, t) {
    (k = e), Ka(e);
}
function Ka(e, n, t) {
    for (var r = (e.mode & 1) !== 0; k !== null; ) {
        var l = k,
            o = l.child;
        if (l.tag === 22 && r) {
            var u = l.memoizedState !== null || hr;
            if (!u) {
                var i = l.alternate,
                    s = (i !== null && i.memoizedState !== null) || re;
                i = hr;
                var c = re;
                if (((hr = u), (re = s) && !c))
                    for (k = l; k !== null; )
                        (u = k),
                            (s = u.child),
                            u.tag === 22 && u.memoizedState !== null
                                ? $i(l)
                                : s !== null
                                ? ((s.return = u), (k = s))
                                : $i(l);
                for (; o !== null; ) (k = o), Ka(o), (o = o.sibling);
                (k = l), (hr = i), (re = c);
            }
            Fi(e);
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (k = o))
                : Fi(e);
    }
}
function Fi(e) {
    for (; k !== null; ) {
        var n = k;
        if (n.flags & 8772) {
            var t = n.alternate;
            try {
                if (n.flags & 8772)
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            re || cl(5, n);
                            break;
                        case 1:
                            var r = n.stateNode;
                            if (n.flags & 4 && !re)
                                if (t === null) r.componentDidMount();
                                else {
                                    var l =
                                        n.elementType === n.type
                                            ? t.memoizedProps
                                            : ze(n.type, t.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        t.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = n.updateQueue;
                            o !== null && Si(n, o, r);
                            break;
                        case 3:
                            var u = n.updateQueue;
                            if (u !== null) {
                                if (((t = null), n.child !== null))
                                    switch (n.child.tag) {
                                        case 5:
                                            t = n.child.stateNode;
                                            break;
                                        case 1:
                                            t = n.child.stateNode;
                                    }
                                Si(n, u, t);
                            }
                            break;
                        case 5:
                            var i = n.stateNode;
                            if (t === null && n.flags & 4) {
                                t = i;
                                var s = n.memoizedProps;
                                switch (n.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && t.focus();
                                        break;
                                    case "img":
                                        s.src && (t.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (n.memoizedState === null) {
                                var c = n.alternate;
                                if (c !== null) {
                                    var v = c.memoizedState;
                                    if (v !== null) {
                                        var m = v.dehydrated;
                                        m !== null && Ft(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(y(163));
                    }
                re || (n.flags & 512 && Mo(n));
            } catch (p) {
                V(n, n.return, p);
            }
        }
        if (n === e) {
            k = null;
            break;
        }
        if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (k = t);
            break;
        }
        k = n.return;
    }
}
function Ui(e) {
    for (; k !== null; ) {
        var n = k;
        if (n === e) {
            k = null;
            break;
        }
        var t = n.sibling;
        if (t !== null) {
            (t.return = n.return), (k = t);
            break;
        }
        k = n.return;
    }
}
function $i(e) {
    for (; k !== null; ) {
        var n = k;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try {
                        cl(4, n);
                    } catch (s) {
                        V(n, t, s);
                    }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = n.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            V(n, l, s);
                        }
                    }
                    var o = n.return;
                    try {
                        Mo(n);
                    } catch (s) {
                        V(n, o, s);
                    }
                    break;
                case 5:
                    var u = n.return;
                    try {
                        Mo(n);
                    } catch (s) {
                        V(n, u, s);
                    }
            }
        } catch (s) {
            V(n, n.return, s);
        }
        if (n === e) {
            k = null;
            break;
        }
        var i = n.sibling;
        if (i !== null) {
            (i.return = n.return), (k = i);
            break;
        }
        k = n.return;
    }
}
var gd = Math.ceil,
    Zr = Xe.ReactCurrentDispatcher,
    Cu = Xe.ReactCurrentOwner,
    xe = Xe.ReactCurrentBatchConfig,
    O = 0,
    J = null,
    Q = null,
    b = 0,
    me = 0,
    Kn = hn(0),
    Y = 0,
    Xt = null,
    Tn = 0,
    fl = 0,
    _u = 0,
    Tt = null,
    ae = null,
    Nu = 0,
    ot = 1 / 0,
    $e = null,
    Jr = !1,
    Io = null,
    an = null,
    yr = !1,
    nn = null,
    qr = 0,
    Ot = 0,
    Fo = null,
    zr = -1,
    Lr = 0;
function ue() {
    return O & 6 ? W() : zr !== -1 ? zr : (zr = W());
}
function cn(e) {
    return e.mode & 1
        ? O & 2 && b !== 0
            ? b & -b
            : nd.transition !== null
            ? (Lr === 0 && (Lr = Ls()), Lr)
            : ((e = R),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
              e)
        : 1;
}
function Re(e, n, t, r) {
    if (50 < Ot) throw ((Ot = 0), (Fo = null), Error(y(185)));
    Zt(e, t, r),
        (!(O & 2) || e !== J) &&
            (e === J && (!(O & 2) && (fl |= t), Y === 4 && be(e, b)),
            pe(e, r),
            t === 1 &&
                O === 0 &&
                !(n.mode & 1) &&
                ((ot = W() + 500), il && yn()));
}
function pe(e, n) {
    var t = e.callbackNode;
    ef(e, n);
    var r = Dr(e, e === J ? b : 0);
    if (r === 0)
        t !== null && Xu(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
        if ((t != null && Xu(t), n === 1))
            e.tag === 0 ? ed(Ai.bind(null, e)) : na(Ai.bind(null, e)),
                Zf(function () {
                    !(O & 6) && yn();
                }),
                (t = null);
        else {
            switch (Ts(r)) {
                case 1:
                    t = qo;
                    break;
                case 4:
                    t = Ps;
                    break;
                case 16:
                    t = jr;
                    break;
                case 536870912:
                    t = zs;
                    break;
                default:
                    t = jr;
            }
            t = ec(t, Ya.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = t);
    }
}
function Ya(e, n) {
    if (((zr = -1), (Lr = 0), O & 6)) throw Error(y(327));
    var t = e.callbackNode;
    if (qn() && e.callbackNode !== t) return null;
    var r = Dr(e, e === J ? b : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
    else {
        n = r;
        var l = O;
        O |= 2;
        var o = Ga();
        (J !== e || b !== n) && (($e = null), (ot = W() + 500), _n(e, n));
        do
            try {
                kd();
                break;
            } catch (i) {
                Xa(e, i);
            }
        while (1);
        fu(),
            (Zr.current = o),
            (O = l),
            Q !== null ? (n = 0) : ((J = null), (b = 0), (n = Y));
    }
    if (n !== 0) {
        if (
            (n === 2 && ((l = ao(e)), l !== 0 && ((r = l), (n = Uo(e, l)))),
            n === 1)
        )
            throw ((t = Xt), _n(e, 0), be(e, r), pe(e, W()), t);
        if (n === 6) be(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !wd(l) &&
                    ((n = br(e, r)),
                    n === 2 &&
                        ((o = ao(e)), o !== 0 && ((r = o), (n = Uo(e, o)))),
                    n === 1))
            )
                throw ((t = Xt), _n(e, 0), be(e, r), pe(e, W()), t);
            switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    kn(e, ae, $e);
                    break;
                case 3:
                    if (
                        (be(e, r),
                        (r & 130023424) === r && ((n = Nu + 500 - W()), 10 < n))
                    ) {
                        if (Dr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ue(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = go(kn.bind(null, e, ae, $e), n);
                        break;
                    }
                    kn(e, ae, $e);
                    break;
                case 4:
                    if ((be(e, r), (r & 4194240) === r)) break;
                    for (n = e.eventTimes, l = -1; 0 < r; ) {
                        var u = 31 - Oe(r);
                        (o = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~o);
                    }
                    if (
                        ((r = l),
                        (r = W() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * gd(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = go(kn.bind(null, e, ae, $e), r);
                        break;
                    }
                    kn(e, ae, $e);
                    break;
                case 5:
                    kn(e, ae, $e);
                    break;
                default:
                    throw Error(y(329));
            }
        }
    }
    return pe(e, W()), e.callbackNode === t ? Ya.bind(null, e) : null;
}
function Uo(e, n) {
    var t = Tt;
    return (
        e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256),
        (e = br(e, n)),
        e !== 2 && ((n = ae), (ae = t), n !== null && $o(n)),
        e
    );
}
function $o(e) {
    ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function wd(e) {
    for (var n = e; ; ) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && ((t = t.stores), t !== null))
                for (var r = 0; r < t.length; r++) {
                    var l = t[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Me(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
            (t.return = n), (n = t);
        else {
            if (n === e) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) return !0;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }
    return !0;
}
function be(e, n) {
    for (
        n &= ~_u,
            n &= ~fl,
            e.suspendedLanes |= n,
            e.pingedLanes &= ~n,
            e = e.expirationTimes;
        0 < n;

    ) {
        var t = 31 - Oe(n),
            r = 1 << t;
        (e[t] = -1), (n &= ~r);
    }
}
function Ai(e) {
    if (O & 6) throw Error(y(327));
    qn();
    var n = Dr(e, 0);
    if (!(n & 1)) return pe(e, W()), null;
    var t = br(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = ao(e);
        r !== 0 && ((n = r), (t = Uo(e, r)));
    }
    if (t === 1) throw ((t = Xt), _n(e, 0), be(e, n), pe(e, W()), t);
    if (t === 6) throw Error(y(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = n),
        kn(e, ae, $e),
        pe(e, W()),
        null
    );
}
function Pu(e, n) {
    var t = O;
    O |= 1;
    try {
        return e(n);
    } finally {
        (O = t), O === 0 && ((ot = W() + 500), il && yn());
    }
}
function On(e) {
    nn !== null && nn.tag === 0 && !(O & 6) && qn();
    var n = O;
    O |= 1;
    var t = xe.transition,
        r = R;
    try {
        if (((xe.transition = null), (R = 1), e)) return e();
    } finally {
        (R = r), (xe.transition = t), (O = n), !(O & 6) && yn();
    }
}
function zu() {
    (me = Kn.current), D(Kn);
}
function _n(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Gf(t)), Q !== null))
        for (t = Q.return; t !== null; ) {
            var r = t;
            switch ((su(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ar();
                    break;
                case 3:
                    rt(), D(fe), D(le), yu();
                    break;
                case 5:
                    hu(r);
                    break;
                case 4:
                    rt();
                    break;
                case 13:
                    D(U);
                    break;
                case 19:
                    D(U);
                    break;
                case 10:
                    du(r.type._context);
                    break;
                case 22:
                case 23:
                    zu();
            }
            t = t.return;
        }
    if (
        ((J = e),
        (Q = e = fn(e.current, null)),
        (b = me = n),
        (Y = 0),
        (Xt = null),
        (_u = fl = Tn = 0),
        (ae = Tt = null),
        xn !== null)
    ) {
        for (n = 0; n < xn.length; n++)
            if (((t = xn[n]), (r = t.interleaved), r !== null)) {
                t.interleaved = null;
                var l = r.next,
                    o = t.pending;
                if (o !== null) {
                    var u = o.next;
                    (o.next = l), (r.next = u);
                }
                t.pending = r;
            }
        xn = null;
    }
    return e;
}
function Xa(e, n) {
    do {
        var t = Q;
        try {
            if ((fu(), (_r.current = Gr), Xr)) {
                for (var r = $.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Xr = !1;
            }
            if (
                ((Ln = 0),
                (Z = K = $ = null),
                (zt = !1),
                (Qt = 0),
                (Cu.current = null),
                t === null || t.return === null)
            ) {
                (Y = 1), (Xt = n), (Q = null);
                break;
            }
            e: {
                var o = e,
                    u = t.return,
                    i = t,
                    s = n;
                if (
                    ((n = b),
                    (i.flags |= 32768),
                    s !== null &&
                        typeof s == "object" &&
                        typeof s.then == "function")
                ) {
                    var c = s,
                        v = i,
                        m = v.tag;
                    if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = v.alternate;
                        p
                            ? ((v.updateQueue = p.updateQueue),
                              (v.memoizedState = p.memoizedState),
                              (v.lanes = p.lanes))
                            : ((v.updateQueue = null),
                              (v.memoizedState = null));
                    }
                    var g = Pi(u);
                    if (g !== null) {
                        (g.flags &= -257),
                            zi(g, u, i, o, n),
                            g.mode & 1 && Ni(o, c, n),
                            (n = g),
                            (s = c);
                        var w = n.updateQueue;
                        if (w === null) {
                            var S = new Set();
                            S.add(s), (n.updateQueue = S);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(n & 1)) {
                            Ni(o, c, n), Lu();
                            break e;
                        }
                        s = Error(y(426));
                    }
                } else if (F && i.mode & 1) {
                    var I = Pi(u);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256),
                            zi(I, u, i, o, n),
                            au(lt(s, i));
                        break e;
                    }
                }
                (o = s = lt(s, i)),
                    Y !== 4 && (Y = 2),
                    Tt === null ? (Tt = [o]) : Tt.push(o),
                    (o = u);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                            var f = Oa(o, s, n);
                            wi(o, f);
                            break e;
                        case 1:
                            i = s;
                            var a = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof a.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (an === null || !an.has(d))))
                            ) {
                                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                                var h = Ra(o, i, n);
                                wi(o, h);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Ja(t);
        } catch (E) {
            (n = E), Q === t && t !== null && (Q = t = t.return);
            continue;
        }
        break;
    } while (1);
}
function Ga() {
    var e = Zr.current;
    return (Zr.current = Gr), e === null ? Gr : e;
}
function Lu() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
        J === null || (!(Tn & 268435455) && !(fl & 268435455)) || be(J, b);
}
function br(e, n) {
    var t = O;
    O |= 2;
    var r = Ga();
    (J !== e || b !== n) && (($e = null), _n(e, n));
    do
        try {
            Sd();
            break;
        } catch (l) {
            Xa(e, l);
        }
    while (1);
    if ((fu(), (O = t), (Zr.current = r), Q !== null)) throw Error(y(261));
    return (J = null), (b = 0), Y;
}
function Sd() {
    for (; Q !== null; ) Za(Q);
}
function kd() {
    for (; Q !== null && !Qc(); ) Za(Q);
}
function Za(e) {
    var n = ba(e.alternate, e, me);
    (e.memoizedProps = e.pendingProps),
        n === null ? Ja(e) : (Q = n),
        (Cu.current = null);
}
function Ja(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (((e = n.return), n.flags & 32768)) {
            if (((t = md(t, n)), t !== null)) {
                (t.flags &= 32767), (Q = t);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Y = 6), (Q = null);
                return;
            }
        } else if (((t = pd(t, n, me)), t !== null)) {
            Q = t;
            return;
        }
        if (((n = n.sibling), n !== null)) {
            Q = n;
            return;
        }
        Q = n = e;
    } while (n !== null);
    Y === 0 && (Y = 5);
}
function kn(e, n, t) {
    var r = R,
        l = xe.transition;
    try {
        (xe.transition = null), (R = 1), Ed(e, n, t, r);
    } finally {
        (xe.transition = l), (R = r);
    }
    return null;
}
function Ed(e, n, t, r) {
    do qn();
    while (nn !== null);
    if (O & 6) throw Error(y(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
        throw Error(y(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = t.lanes | t.childLanes;
    if (
        (nf(e, o),
        e === J && ((Q = J = null), (b = 0)),
        (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
            yr ||
            ((yr = !0),
            ec(jr, function () {
                return qn(), null;
            })),
        (o = (t.flags & 15990) !== 0),
        t.subtreeFlags & 15990 || o)
    ) {
        (o = xe.transition), (xe.transition = null);
        var u = R;
        R = 1;
        var i = O;
        (O |= 4),
            (Cu.current = null),
            hd(e, t),
            Qa(t, e),
            Bf(ho),
            (Ir = !!vo),
            (ho = vo = null),
            (e.current = t),
            yd(t),
            Kc(),
            (O = i),
            (R = u),
            (xe.transition = o);
    } else e.current = t;
    if (
        (yr && ((yr = !1), (nn = e), (qr = l)),
        (o = e.pendingLanes),
        o === 0 && (an = null),
        Gc(t.stateNode),
        pe(e, W()),
        n !== null)
    )
        for (r = e.onRecoverableError, t = 0; t < n.length; t++)
            (l = n[t]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Jr) throw ((Jr = !1), (e = Io), (Io = null), e);
    return (
        qr & 1 && e.tag !== 0 && qn(),
        (o = e.pendingLanes),
        o & 1 ? (e === Fo ? Ot++ : ((Ot = 0), (Fo = e))) : (Ot = 0),
        yn(),
        null
    );
}
function qn() {
    if (nn !== null) {
        var e = Ts(qr),
            n = xe.transition,
            t = R;
        try {
            if (((xe.transition = null), (R = 16 > e ? 16 : e), nn === null))
                var r = !1;
            else {
                if (((e = nn), (nn = null), (qr = 0), O & 6))
                    throw Error(y(331));
                var l = O;
                for (O |= 4, k = e.current; k !== null; ) {
                    var o = k,
                        u = o.child;
                    if (k.flags & 16) {
                        var i = o.deletions;
                        if (i !== null) {
                            for (var s = 0; s < i.length; s++) {
                                var c = i[s];
                                for (k = c; k !== null; ) {
                                    var v = k;
                                    switch (v.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Lt(8, v, o);
                                    }
                                    var m = v.child;
                                    if (m !== null) (m.return = v), (k = m);
                                    else
                                        for (; k !== null; ) {
                                            v = k;
                                            var p = v.sibling,
                                                g = v.return;
                                            if ((Ba(v), v === c)) {
                                                k = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = g), (k = p);
                                                break;
                                            }
                                            k = g;
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var S = w.child;
                                if (S !== null) {
                                    w.child = null;
                                    do {
                                        var I = S.sibling;
                                        (S.sibling = null), (S = I);
                                    } while (S !== null);
                                }
                            }
                            k = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && u !== null)
                        (u.return = o), (k = u);
                    else
                        e: for (; k !== null; ) {
                            if (((o = k), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Lt(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (k = f);
                                break e;
                            }
                            k = o.return;
                        }
                }
                var a = e.current;
                for (k = a; k !== null; ) {
                    u = k;
                    var d = u.child;
                    if (u.subtreeFlags & 2064 && d !== null)
                        (d.return = u), (k = d);
                    else
                        e: for (u = a; k !== null; ) {
                            if (((i = k), i.flags & 2048))
                                try {
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            cl(9, i);
                                    }
                                } catch (E) {
                                    V(i, i.return, E);
                                }
                            if (i === u) {
                                k = null;
                                break e;
                            }
                            var h = i.sibling;
                            if (h !== null) {
                                (h.return = i.return), (k = h);
                                break e;
                            }
                            k = i.return;
                        }
                }
                if (
                    ((O = l),
                    yn(),
                    Fe && typeof Fe.onPostCommitFiberRoot == "function")
                )
                    try {
                        Fe.onPostCommitFiberRoot(tl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (R = t), (xe.transition = n);
        }
    }
    return !1;
}
function Vi(e, n, t) {
    (n = lt(t, n)),
        (n = Oa(e, n, 1)),
        (e = sn(e, n, 1)),
        (n = ue()),
        e !== null && (Zt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
    if (e.tag === 3) Vi(e, e, t);
    else
        for (; n !== null; ) {
            if (n.tag === 3) {
                Vi(n, e, t);
                break;
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (
                    typeof n.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (an === null || !an.has(r)))
                ) {
                    (e = lt(t, e)),
                        (e = Ra(n, e, 1)),
                        (n = sn(n, e, 1)),
                        (e = ue()),
                        n !== null && (Zt(n, 1, e), pe(n, e));
                    break;
                }
            }
            n = n.return;
        }
}
function xd(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
        (n = ue()),
        (e.pingedLanes |= e.suspendedLanes & t),
        J === e &&
            (b & t) === t &&
            (Y === 4 || (Y === 3 && (b & 130023424) === b && 500 > W() - Nu)
                ? _n(e, 0)
                : (_u |= t)),
        pe(e, n);
}
function qa(e, n) {
    n === 0 &&
        (e.mode & 1
            ? ((n = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304))
            : (n = 1));
    var t = ue();
    (e = Ke(e, n)), e !== null && (Zt(e, n, t), pe(e, t));
}
function Cd(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), qa(e, t);
}
function _d(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (t = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314));
    }
    r !== null && r.delete(n), qa(e, t);
}
var ba;
ba = function (e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
        else {
            if (!(e.lanes & t) && !(n.flags & 128))
                return (ce = !1), dd(e, n, t);
            ce = !!(e.flags & 131072);
        }
    else (ce = !1), F && n.flags & 1048576 && ta(n, Hr, n.index);
    switch (((n.lanes = 0), n.tag)) {
        case 2:
            var r = n.type;
            Pr(e, n), (e = n.pendingProps);
            var l = et(n, le.current);
            Jn(n, t), (l = wu(null, n, r, e, l, t));
            var o = Su();
            return (
                (n.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((n.tag = 1),
                      (n.memoizedState = null),
                      (n.updateQueue = null),
                      de(r) ? ((o = !0), Vr(n)) : (o = !1),
                      (n.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      mu(n),
                      (l.updater = sl),
                      (n.stateNode = l),
                      (l._reactInternals = n),
                      _o(n, r, e, t),
                      (n = zo(null, n, r, !0, o, t)))
                    : ((n.tag = 0),
                      F && o && iu(n),
                      oe(null, n, l, t),
                      (n = n.child)),
                n
            );
        case 16:
            r = n.elementType;
            e: {
                switch (
                    (Pr(e, n),
                    (e = n.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (n.type = r),
                    (l = n.tag = Pd(r)),
                    (e = ze(r, e)),
                    l)
                ) {
                    case 0:
                        n = Po(null, n, r, e, t);
                        break e;
                    case 1:
                        n = Oi(null, n, r, e, t);
                        break e;
                    case 11:
                        n = Li(null, n, r, e, t);
                        break e;
                    case 14:
                        n = Ti(null, n, r, ze(r.type, e), t);
                        break e;
                }
                throw Error(y(306, r, ""));
            }
            return n;
        case 0:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Po(e, n, r, l, t)
            );
        case 1:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Oi(e, n, r, l, t)
            );
        case 3:
            e: {
                if ((Ia(n), e === null)) throw Error(y(387));
                (r = n.pendingProps),
                    (o = n.memoizedState),
                    (l = o.element),
                    ua(e, n),
                    Kr(n, r, null, t);
                var u = n.memoizedState;
                if (((r = u.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: u.cache,
                            pendingSuspenseBoundaries:
                                u.pendingSuspenseBoundaries,
                            transitions: u.transitions,
                        }),
                        (n.updateQueue.baseState = o),
                        (n.memoizedState = o),
                        n.flags & 256)
                    ) {
                        (l = lt(Error(y(423)), n)), (n = Ri(e, n, r, t, l));
                        break e;
                    } else if (r !== l) {
                        (l = lt(Error(y(424)), n)), (n = Ri(e, n, r, t, l));
                        break e;
                    } else
                        for (
                            ve = un(n.stateNode.containerInfo.firstChild),
                                he = n,
                                F = !0,
                                Te = null,
                                t = ca(n, null, r, t),
                                n.child = t;
                            t;

                        )
                            (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
                else {
                    if ((nt(), r === l)) {
                        n = Ye(e, n, t);
                        break e;
                    }
                    oe(e, n, r, t);
                }
                n = n.child;
            }
            return n;
        case 5:
            return (
                fa(n),
                e === null && Eo(n),
                (r = n.type),
                (l = n.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (u = l.children),
                yo(r, l)
                    ? (u = null)
                    : o !== null && yo(r, o) && (n.flags |= 32),
                Da(e, n),
                oe(e, n, u, t),
                n.child
            );
        case 6:
            return e === null && Eo(n), null;
        case 13:
            return Fa(e, n, t);
        case 4:
            return (
                vu(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                e === null ? (n.child = tt(n, null, r, t)) : oe(e, n, r, t),
                n.child
            );
        case 11:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Li(e, n, r, l, t)
            );
        case 7:
            return oe(e, n, n.pendingProps, t), n.child;
        case 8:
            return oe(e, n, n.pendingProps.children, t), n.child;
        case 12:
            return oe(e, n, n.pendingProps.children, t), n.child;
        case 10:
            e: {
                if (
                    ((r = n.type._context),
                    (l = n.pendingProps),
                    (o = n.memoizedProps),
                    (u = l.value),
                    M(Wr, r._currentValue),
                    (r._currentValue = u),
                    o !== null)
                )
                    if (Me(o.value, u)) {
                        if (o.children === l.children && !fe.current) {
                            n = Ye(e, n, t);
                            break e;
                        }
                    } else
                        for (
                            o = n.child, o !== null && (o.return = n);
                            o !== null;

                        ) {
                            var i = o.dependencies;
                            if (i !== null) {
                                u = o.child;
                                for (var s = i.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            (s = He(-1, t & -t)), (s.tag = 2);
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var v = c.pending;
                                                v === null
                                                    ? (s.next = s)
                                                    : ((s.next = v.next),
                                                      (v.next = s)),
                                                    (c.pending = s);
                                            }
                                        }
                                        (o.lanes |= t),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= t),
                                            xo(o.return, t, n),
                                            (i.lanes |= t);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (o.tag === 10)
                                u = o.type === n.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((u = o.return), u === null))
                                    throw Error(y(341));
                                (u.lanes |= t),
                                    (i = u.alternate),
                                    i !== null && (i.lanes |= t),
                                    xo(u, t, n),
                                    (u = o.sibling);
                            } else u = o.child;
                            if (u !== null) u.return = o;
                            else
                                for (u = o; u !== null; ) {
                                    if (u === n) {
                                        u = null;
                                        break;
                                    }
                                    if (((o = u.sibling), o !== null)) {
                                        (o.return = u.return), (u = o);
                                        break;
                                    }
                                    u = u.return;
                                }
                            o = u;
                        }
                oe(e, n, l.children, t), (n = n.child);
            }
            return n;
        case 9:
            return (
                (l = n.type),
                (r = n.pendingProps.children),
                Jn(n, t),
                (l = Ce(l)),
                (r = r(l)),
                (n.flags |= 1),
                oe(e, n, r, t),
                n.child
            );
        case 14:
            return (
                (r = n.type),
                (l = ze(r, n.pendingProps)),
                (l = ze(r.type, l)),
                Ti(e, n, r, l, t)
            );
        case 15:
            return Ma(e, n, n.type, n.pendingProps, t);
        case 17:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Pr(e, n),
                (n.tag = 1),
                de(r) ? ((e = !0), Vr(n)) : (e = !1),
                Jn(n, t),
                sa(n, r, l),
                _o(n, r, l, t),
                zo(null, n, r, !0, e, t)
            );
        case 19:
            return Ua(e, n, t);
        case 22:
            return ja(e, n, t);
    }
    throw Error(y(156, n.tag));
};
function ec(e, n) {
    return Ns(e, n);
}
function Nd(e, n, t, r) {
    (this.tag = e),
        (this.key = t),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ee(e, n, t, r) {
    return new Nd(e, n, t, r);
}
function Tu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pd(e) {
    if (typeof e == "function") return Tu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Go)) return 11;
        if (e === Zo) return 14;
    }
    return 2;
}
function fn(e, n) {
    var t = e.alternate;
    return (
        t === null
            ? ((t = Ee(e.tag, n, e.key, e.mode)),
              (t.elementType = e.elementType),
              (t.type = e.type),
              (t.stateNode = e.stateNode),
              (t.alternate = e),
              (e.alternate = t))
            : ((t.pendingProps = n),
              (t.type = e.type),
              (t.flags = 0),
              (t.subtreeFlags = 0),
              (t.deletions = null)),
        (t.flags = e.flags & 14680064),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies =
            n === null
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
    );
}
function Tr(e, n, t, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) Tu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
        e: switch (e) {
            case In:
                return Nn(t.children, l, o, n);
            case Xo:
                (u = 8), (l |= 8);
                break;
            case Xl:
                return (
                    (e = Ee(12, t, n, l | 2)),
                    (e.elementType = Xl),
                    (e.lanes = o),
                    e
                );
            case Gl:
                return (
                    (e = Ee(13, t, n, l)),
                    (e.elementType = Gl),
                    (e.lanes = o),
                    e
                );
            case Zl:
                return (
                    (e = Ee(19, t, n, l)),
                    (e.elementType = Zl),
                    (e.lanes = o),
                    e
                );
            case as:
                return dl(t, l, o, n);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case is:
                            u = 10;
                            break e;
                        case ss:
                            u = 9;
                            break e;
                        case Go:
                            u = 11;
                            break e;
                        case Zo:
                            u = 14;
                            break e;
                        case Ze:
                            (u = 16), (r = null);
                            break e;
                    }
                throw Error(y(130, e == null ? e : typeof e, ""));
        }
    return (
        (n = Ee(u, t, n, l)),
        (n.elementType = e),
        (n.type = r),
        (n.lanes = o),
        n
    );
}
function Nn(e, n, t, r) {
    return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function dl(e, n, t, r) {
    return (
        (e = Ee(22, e, r, n)),
        (e.elementType = as),
        (e.lanes = t),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Wl(e, n, t) {
    return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Ql(e, n, t) {
    return (
        (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
        (n.lanes = t),
        (n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        n
    );
}
function zd(e, n, t, r, l) {
    (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = _l(0)),
        (this.expirationTimes = _l(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = _l(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function Ou(e, n, t, r, l, o, u, i, s) {
    return (
        (e = new zd(e, n, t, i, s)),
        n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
        (o = Ee(3, null, null, n)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: t,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        mu(o),
        e
    );
}
function Ld(e, n, t) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t,
    };
}
function nc(e) {
    if (!e) return mn;
    e = e._reactInternals;
    e: {
        if (Mn(e) !== e || e.tag !== 1) throw Error(y(170));
        var n = e;
        do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (de(n.type)) {
                        n =
                            n.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            n = n.return;
        } while (n !== null);
        throw Error(y(171));
    }
    if (e.tag === 1) {
        var t = e.type;
        if (de(t)) return ea(e, t, n);
    }
    return n;
}
function tc(e, n, t, r, l, o, u, i, s) {
    return (
        (e = Ou(t, r, !0, e, l, o, u, i, s)),
        (e.context = nc(null)),
        (t = e.current),
        (r = ue()),
        (l = cn(t)),
        (o = He(r, l)),
        (o.callback = n ?? null),
        sn(t, o, l),
        (e.current.lanes = l),
        Zt(e, l, r),
        pe(e, r),
        e
    );
}
function pl(e, n, t, r) {
    var l = n.current,
        o = ue(),
        u = cn(l);
    return (
        (t = nc(t)),
        n.context === null ? (n.context = t) : (n.pendingContext = t),
        (n = He(o, u)),
        (n.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (n.callback = r),
        (e = sn(l, n, u)),
        e !== null && (Re(e, l, u, o), Cr(e, l, u)),
        u
    );
}
function el(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Bi(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n;
    }
}
function Ru(e, n) {
    Bi(e, n), (e = e.alternate) && Bi(e, n);
}
function Td() {
    return null;
}
var rc =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Mu(e) {
    this._internalRoot = e;
}
ml.prototype.render = Mu.prototype.render = function (e) {
    var n = this._internalRoot;
    if (n === null) throw Error(y(409));
    pl(e, n, null, null);
};
ml.prototype.unmount = Mu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        On(function () {
            pl(null, e, null, null);
        }),
            (n[Qe] = null);
    }
};
function ml(e) {
    this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var n = Ms();
        e = { blockedOn: null, target: e, priority: n };
        for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
        qe.splice(t, 0, e), t === 0 && Ds(e);
    }
};
function ju(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Hi() {}
function Od(e, n, t, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = el(u);
                o.call(c);
            };
        }
        var u = tc(n, r, e, 0, null, !1, !1, "", Hi);
        return (
            (e._reactRootContainer = u),
            (e[Qe] = u.current),
            At(e.nodeType === 8 ? e.parentNode : e),
            On(),
            u
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var i = r;
        r = function () {
            var c = el(s);
            i.call(c);
        };
    }
    var s = Ou(e, 0, !1, null, null, !1, !1, "", Hi);
    return (
        (e._reactRootContainer = s),
        (e[Qe] = s.current),
        At(e.nodeType === 8 ? e.parentNode : e),
        On(function () {
            pl(n, s, t, r);
        }),
        s
    );
}
function hl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
        var u = o;
        if (typeof l == "function") {
            var i = l;
            l = function () {
                var s = el(u);
                i.call(s);
            };
        }
        pl(n, u, e, l);
    } else u = Od(t, n, e, l, r);
    return el(u);
}
Os = function (e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var t = kt(n.pendingLanes);
                t !== 0 &&
                    (bo(n, t | 1),
                    pe(n, W()),
                    !(O & 6) && ((ot = W() + 500), yn()));
            }
            break;
        case 13:
            On(function () {
                var r = Ke(e, 1);
                if (r !== null) {
                    var l = ue();
                    Re(r, e, 1, l);
                }
            }),
                Ru(e, 1);
    }
};
eu = function (e) {
    if (e.tag === 13) {
        var n = Ke(e, 134217728);
        if (n !== null) {
            var t = ue();
            Re(n, e, 134217728, t);
        }
        Ru(e, 134217728);
    }
};
Rs = function (e) {
    if (e.tag === 13) {
        var n = cn(e),
            t = Ke(e, n);
        if (t !== null) {
            var r = ue();
            Re(t, e, n, r);
        }
        Ru(e, n);
    }
};
Ms = function () {
    return R;
};
js = function (e, n) {
    var t = R;
    try {
        return (R = e), n();
    } finally {
        R = t;
    }
};
uo = function (e, n, t) {
    switch (n) {
        case "input":
            if ((bl(e, t), (n = t.name), t.type === "radio" && n != null)) {
                for (t = e; t.parentNode; ) t = t.parentNode;
                for (
                    t = t.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + n) +
                            '][type="radio"]'
                    ),
                        n = 0;
                    n < t.length;
                    n++
                ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                        var l = ul(r);
                        if (!l) throw Error(y(90));
                        fs(r), bl(r, l);
                    }
                }
            }
            break;
        case "textarea":
            ps(e, t);
            break;
        case "select":
            (n = t.value), n != null && Yn(e, !!t.multiple, n, !1);
    }
};
Ss = Pu;
ks = On;
var Rd = { usingClientEntryPoint: !1, Events: [qt, An, ul, gs, ws, Pu] },
    gt = {
        findFiberByHostInstance: En,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Md = {
        bundleType: gt.bundleType,
        version: gt.version,
        rendererPackageName: gt.rendererPackageName,
        rendererConfig: gt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Cs(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: gt.findFiberByHostInstance || Td,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            (tl = gr.inject(Md)), (Fe = gr);
        } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
ge.createPortal = function (e, n) {
    var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ju(n)) throw Error(y(200));
    return Ld(e, n, null, t);
};
ge.createRoot = function (e, n) {
    if (!ju(e)) throw Error(y(299));
    var t = !1,
        r = "",
        l = rc;
    return (
        n != null &&
            (n.unstable_strictMode === !0 && (t = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = Ou(e, 1, !1, null, null, t, !1, r, l)),
        (e[Qe] = n.current),
        At(e.nodeType === 8 ? e.parentNode : e),
        new Mu(n)
    );
};
ge.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
        throw typeof e.render == "function"
            ? Error(y(188))
            : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (e = Cs(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
    return On(e);
};
ge.hydrate = function (e, n, t) {
    if (!vl(n)) throw Error(y(200));
    return hl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
    if (!ju(e)) throw Error(y(405));
    var r = (t != null && t.hydratedSources) || null,
        l = !1,
        o = "",
        u = rc;
    if (
        (t != null &&
            (t.unstable_strictMode === !0 && (l = !0),
            t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (n = tc(n, null, e, 1, t ?? null, l, !1, o, u)),
        (e[Qe] = n.current),
        At(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (t = r[e]),
                (l = t._getVersion),
                (l = l(t._source)),
                n.mutableSourceEagerHydrationData == null
                    ? (n.mutableSourceEagerHydrationData = [t, l])
                    : n.mutableSourceEagerHydrationData.push(t, l);
    return new ml(n);
};
ge.render = function (e, n, t) {
    if (!vl(n)) throw Error(y(200));
    return hl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
    if (!vl(e)) throw Error(y(40));
    return e._reactRootContainer
        ? (On(function () {
              hl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Qe] = null);
              });
          }),
          !0)
        : !1;
};
ge.unstable_batchedUpdates = Pu;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
    if (!vl(t)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return hl(e, n, t, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
function lc() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
        } catch (e) {
            console.error(e);
        }
}
lc(), (ts.exports = ge);
var jd = ts.exports,
    Wi = jd;
(Kl.createRoot = Wi.createRoot), (Kl.hydrateRoot = Wi.hydrateRoot);
var oc = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    Qi = tn.createContext && tn.createContext(oc),
    dn =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (dn =
                    Object.assign ||
                    function (e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++) {
                            n = arguments[t];
                            for (var l in n)
                                Object.prototype.hasOwnProperty.call(n, l) &&
                                    (e[l] = n[l]);
                        }
                        return e;
                    }),
                dn.apply(this, arguments)
            );
        },
    Dd =
        (globalThis && globalThis.__rest) ||
        function (e, n) {
            var t = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                    n.indexOf(r) < 0 &&
                    (t[r] = e[r]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (
                    var l = 0, r = Object.getOwnPropertySymbols(e);
                    l < r.length;
                    l++
                )
                    n.indexOf(r[l]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
                        (t[r[l]] = e[r[l]]);
            return t;
        };
function uc(e) {
    return (
        e &&
        e.map(function (n, t) {
            return tn.createElement(n.tag, dn({ key: t }, n.attr), uc(n.child));
        })
    );
}
function Id(e) {
    return function (n) {
        return tn.createElement(
            Fd,
            dn({ attr: dn({}, e.attr) }, n),
            uc(e.child)
        );
    };
}
function Fd(e) {
    var n = function (t) {
        var r = e.attr,
            l = e.size,
            o = e.title,
            u = Dd(e, ["attr", "size", "title"]),
            i = l || t.size || "1em",
            s;
        return (
            t.className && (s = t.className),
            e.className && (s = (s ? s + " " : "") + e.className),
            tn.createElement(
                "svg",
                dn(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                    },
                    t.attr,
                    r,
                    u,
                    {
                        className: s,
                        style: dn(
                            dn({ color: e.color || t.color }, t.style),
                            e.style
                        ),
                        height: i,
                        width: i,
                        xmlns: "http://www.w3.org/2000/svg",
                    }
                ),
                o && tn.createElement("title", null, o),
                e.children
            )
        );
    };
    return Qi !== void 0
        ? tn.createElement(Qi.Consumer, null, function (t) {
              return n(t);
          })
        : n(oc);
}
function Ud(e) {
    return Id({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z",
                },
            },
        ],
    })(e);
}
const $d = () =>
    G.jsx(G.Fragment, {
        children: G.jsx("body", {
            className:
                "bg-card-bg min-h-screen grid place-items-center min-w-full",
            children: G.jsxs("div", {
                className: "w-[600px] mx-auto flex",
                children: [
                    G.jsx("div", {
                        className:
                            "flex flex-row rounded-tl-[12px] rounded-bl-[12px] w-[50%]",
                        children: G.jsx("img", {
                            src: "image-product-desktop.jpg",
                            alt: "",
                            className:
                                "object-cover rounded-tl-[12px] rounded-bl-[12px]",
                        }),
                    }),
                    G.jsx("div", {
                        className:
                            "bg-white flex flex-row w-[50%] rounded-tr-[12px] rounded-br-[12px] px-10 py-6",
                        children: G.jsxs("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                G.jsx("p", {
                                    className:
                                        "text-flavor-text uppercase tracking-[5px]",
                                    children: "perfume",
                                }),
                                G.jsx("h2", {
                                    className: "text-3xl font-Fraunces hello",
                                    children: "Gabrielle Essence Eau De Parfum",
                                }),
                                G.jsxs("p", {
                                    className:
                                        "text-flavor-text tracking-tight",
                                    children: [
                                        " ",
                                        "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
                                    ],
                                }),
                                G.jsxs("div", {
                                    className:
                                        "relative flex items-center mt-1",
                                    children: [
                                        G.jsx("span", {
                                            className:
                                                "text-3xl font-Fraunces text-green-default",
                                            children: "$149.99",
                                        }),
                                        G.jsx("span", {
                                            className:
                                                "line-through text-flavor-text font-Montserrat absolute text-xs right-9",
                                            children: "$169.99",
                                        }),
                                    ],
                                }),
                                G.jsxs("button", {
                                    className:
                                        "mt-2 w-full bg-green-default p-3 text-white font-Montserrat text-sm rounded-lg flex items-center justify-center hover:bg-button-hover-bg ",
                                    children: [
                                        G.jsx(Ud, {
                                            className: "mr-3 font-bold",
                                        }),
                                        "Add to Cart",
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
Kl.createRoot(document.getElementById("root")).render(
    G.jsx(tn.StrictMode, { children: G.jsx($d, {}) })
);

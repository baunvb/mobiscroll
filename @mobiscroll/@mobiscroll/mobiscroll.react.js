/* eslint-disable */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("react"), require("react-dom"), require("prop-types")) : "function" == typeof define && define.amd ? define(["react", "react-dom", "prop-types"], t) : e.mobiscroll = t(e.React, e.ReactDOM, e.PropTypes);
  }(this, function (e, t, a) {
    "use strict";
  
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, a = a && a.hasOwnProperty("default") ? a.default : a;
  
    var n = n || {},
        s = {},
        i = {},
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    },
        r = function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    },
        l = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
  
      return function (t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    }(),
        c = function e(t, a, n) {
      null === t && (t = Function.prototype);
      var s = Object.getOwnPropertyDescriptor(t, a);
  
      if (void 0 === s) {
        var i = Object.getPrototypeOf(t);
        return null === i ? void 0 : e(i, a, n);
      }
  
      if ("value" in s) return s.value;
      var o = s.get;
      return void 0 !== o ? o.call(n) : void 0;
    },
        u = function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    },
        d = function d(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t;
    },
        m = {
      "column-count": 1,
      columns: 1,
      "font-weight": 1,
      "line-height": 1,
      opacity: 1,
      "z-index": 1,
      zoom: 1
    },
        p = {
      readonly: "readOnly"
    },
        h = [],
        f = Array.prototype.slice;
  
    function v(e) {
      return "function" == typeof e;
    }
  
    function b(e) {
      return "object" === (void 0 === e ? "undefined" : o(e));
    }
  
    function g(e) {
      return "number" == typeof e.length;
    }
  
    function x(e) {
      return e.replace(/-+(.)?/g, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }
  
    function y(e) {
      return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }
  
    function T(e, t) {
      return "number" != typeof t || m[y(e)] ? t : t + "px";
    }
  
    var _,
        w,
        C,
        S,
        M = function () {
      var e = function e(_e2) {
        var a = 0;
  
        for (a = 0; a < _e2.length; a++) {
          this[a] = _e2[a];
        }
  
        return this.length = _e2.length, t(this);
      },
          t = function t(a, n) {
        var s,
            i,
            o,
            r = [],
            l = 0;
        if (a && !n && a instanceof e) return a;
        if (v(a)) return t(document).ready(a);
        if (a) if ("string" == typeof a) {
          if (a = o = a.trim(), o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
            var c = "div";
  
            for (0 === o.indexOf("<li") && (c = "ul"), 0 === o.indexOf("<tr") && (c = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (c = "tr"), 0 === o.indexOf("<tbody") && (c = "table"), 0 === o.indexOf("<option") && (c = "select"), (i = document.createElement(c)).innerHTML = o, l = 0; l < i.childNodes.length; l++) {
              r.push(i.childNodes[l]);
            }
          } else for (n || "#" !== a[0] || a.match(/[ .<>:~]/) ? (n instanceof e && (n = n[0]), s = (n || document).querySelectorAll(a)) : s = [document.getElementById(a.split("#")[1])], l = 0; l < s.length; l++) {
            s[l] && r.push(s[l]);
          }
        } else if (a.nodeType || a === window || a === document) r.push(a);else if (a.length > 0 && a[0].nodeType) for (l = 0; l < a.length; l++) {
          r.push(a[l]);
        } else t.isArray(a) && (r = a);
        return new e(r);
      };
  
      return e.prototype = {
        ready: function ready(e) {
          return (document.attachEvent ? "complete" == document.readyState : "loading" != document.readyState) ? e(t) : document.addEventListener("DOMContentLoaded", function () {
            e(t);
          }, !1), this;
        },
        concat: h.concat,
        empty: function empty() {
          return this.each(function () {
            this.innerHTML = "";
          });
        },
        map: function map(e) {
          return t(t.map(this, function (t, a) {
            return e.call(t, a, t);
          }));
        },
        slice: function slice() {
          return t(f.apply(this, arguments));
        },
        addClass: function addClass(e) {
          if (void 0 === e) return this;
  
          for (var t = e.split(" "), a = 0; a < t.length; a++) {
            for (var n = 0; n < this.length; n++) {
              void 0 !== this[n].classList && "" !== t[a] && this[n].classList.add(t[a]);
            }
          }
  
          return this;
        },
        removeClass: function removeClass(e) {
          if (void 0 === e) return this;
  
          for (var t = e.split(" "), a = 0; a < t.length; a++) {
            for (var n = 0; n < this.length; n++) {
              void 0 !== this[n].classList && "" !== t[a] && this[n].classList.remove(t[a]);
            }
          }
  
          return this;
        },
        hasClass: function hasClass(e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function toggleClass(e) {
          for (var t = e.split(" "), a = 0; a < t.length; a++) {
            for (var n = 0; n < this.length; n++) {
              void 0 !== this[n].classList && this[n].classList.toggle(t[a]);
            }
          }
  
          return this;
        },
        closest: function closest(e, a) {
          var n = this[0],
              s = !1;
  
          for (b(e) && (s = t(e)); n && !(s ? s.indexOf(n) >= 0 : t.matches(n, e));) {
            n = n !== a && n.nodeType !== n.DOCUMENT_NODE && n.parentNode;
          }
  
          return t(n);
        },
        attr: function attr(e, t) {
          var a;
  
          if (1 !== arguments.length || "string" != typeof e) {
            for (var n = 0; n < this.length; n++) {
              if (2 === arguments.length) this[n].setAttribute(e, t);else for (var s in e) {
                this[n][s] = e[s], this[n].setAttribute(s, e[s]);
              }
            }
  
            return this;
          }
  
          if (this.length) return a = this[0].getAttribute(e), a || "" === a ? a : void 0;
        },
        removeAttr: function removeAttr(e) {
          for (var t = 0; t < this.length; t++) {
            this[t].removeAttribute(e);
          }
  
          return this;
        },
        prop: function prop(e, t) {
          if (e = p[e] || e, 1 === arguments.length && "string" == typeof e) return this[0] ? this[0][e] : void 0;
  
          for (var a = 0; a < this.length; a++) {
            this[a][e] = t;
          }
  
          return this;
        },
        val: function val(e) {
          if (void 0 === e) return this.length && this[0].multiple ? t.map(this.find("option:checked"), function (e) {
            return e.value;
          }) : this[0] ? this[0].value : void 0;
          if (this.length && this[0].multiple) t.each(this[0].options, function () {
            this.selected = -1 != e.indexOf(this.value);
          });else for (var a = 0; a < this.length; a++) {
            this[a].value = e;
          }
          return this;
        },
        on: function on(e, a, n, s) {
          var i,
              o,
              r = e.split(" ");
  
          function l(e) {
            var s,
                i,
                o = e.target;
            if (t(o).is(a)) n.call(o, e);else for (i = t(o).parents(), s = 0; s < i.length; s++) {
              t(i[s]).is(a) && n.call(i[s], e);
            }
          }
  
          function c(e, t, a, n) {
            var s = t.split(".");
            e.DomNameSpaces || (e.DomNameSpaces = []), e.DomNameSpaces.push({
              namespace: s[1],
              event: s[0],
              listener: a,
              capture: n
            }), e.addEventListener(s[0], a, n);
          }
  
          for (i = 0; i < this.length; i++) {
            if (v(a) || !1 === a) for (v(a) && (s = n || !1, n = a), o = 0; o < r.length; o++) {
              -1 != r[o].indexOf(".") ? c(this[i], r[o], n, s) : this[i].addEventListener(r[o], n, s);
            } else for (o = 0; o < r.length; o++) {
              this[i].DomLiveListeners || (this[i].DomLiveListeners = []), this[i].DomLiveListeners.push({
                listener: n,
                liveListener: l
              }), -1 != r[o].indexOf(".") ? c(this[i], r[o], l, s) : this[i].addEventListener(r[o], l, s);
            }
          }
  
          return this;
        },
        off: function off(e, t, a, n) {
          var s,
              i,
              o,
              r,
              l = this;
  
          function c(e) {
            var t,
                a,
                n,
                s = e.split("."),
                i = s[0],
                o = s[1];
  
            for (t = 0; t < l.length; ++t) {
              if (l[t].DomNameSpaces) {
                for (a = 0; a < l[t].DomNameSpaces.length; ++a) {
                  (n = l[t].DomNameSpaces[a]).namespace != o || n.event != i && i || (l[t].removeEventListener(n.event, n.listener, n.capture), n.removed = !0);
                }
  
                for (a = l[t].DomNameSpaces.length - 1; a >= 0; --a) {
                  l[t].DomNameSpaces[a].removed && l[t].DomNameSpaces.splice(a, 1);
                }
              }
            }
          }
  
          for (s = e.split(" "), i = 0; i < s.length; i++) {
            for (o = 0; o < this.length; o++) {
              if (v(t) || !1 === t) v(t) && (n = a || !1, a = t), 0 === s[i].indexOf(".") ? c(s[i].substr(1)) : this[o].removeEventListener(s[i], a, n);else {
                if (this[o].DomLiveListeners) for (r = 0; r < this[o].DomLiveListeners.length; r++) {
                  this[o].DomLiveListeners[r].listener === a && this[o].removeEventListener(s[i], this[o].DomLiveListeners[r].liveListener, n);
                }
                this[o].DomNameSpaces && this[o].DomNameSpaces.length && s[i] && c(s[i]);
              }
            }
          }
  
          return this;
        },
        trigger: function trigger(e, t) {
          for (var a = e.split(" "), n = 0; n < a.length; n++) {
            for (var s = 0; s < this.length; s++) {
              var i;
  
              try {
                i = new CustomEvent(a[n], {
                  detail: t,
                  bubbles: !0,
                  cancelable: !0
                });
              } catch (e) {
                (i = document.createEvent("Event")).initEvent(a[n], !0, !0), i.detail = t;
              }
  
              this[s].dispatchEvent(i);
            }
          }
  
          return this;
        },
        width: function width(e) {
          return void 0 !== e ? this.css("width", e) : this[0] === window ? window.innerWidth : this[0] === document ? document.documentElement.scrollWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
        },
        height: function height(e) {
          if (void 0 !== e) return this.css("height", e);
          if (this[0] === window) return window.innerHeight;
  
          if (this[0] === document) {
            var t = document.body,
                a = document.documentElement;
            return Math.max(t.scrollHeight, t.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight);
          }
  
          return this.length > 0 ? parseFloat(this.css("height")) : null;
        },
        innerWidth: function innerWidth() {
          var e = this;
  
          if (this.length > 0) {
            if (this[0].innerWidth) return this[0].innerWidth;
            var t = this[0].offsetWidth;
            return ["left", "right"].forEach(function (a) {
              t -= parseInt(e.css(x("border-" + a + "-width")) || 0, 10);
            }), t;
          }
        },
        innerHeight: function innerHeight() {
          var e = this;
  
          if (this.length > 0) {
            if (this[0].innerHeight) return this[0].innerHeight;
            var t = this[0].offsetHeight;
            return ["top", "bottom"].forEach(function (a) {
              t -= parseInt(e.css(x("border-" + a + "-width")) || 0, 10);
            }), t;
          }
        },
        offset: function offset() {
          if (this.length > 0) {
            var e = this[0].getBoundingClientRect(),
                t = document.documentElement;
            return {
              top: e.top + window.pageYOffset - t.clientTop,
              left: e.left + window.pageXOffset - t.clientLeft
            };
          }
        },
        hide: function hide() {
          for (var e = 0; e < this.length; e++) {
            this[e].style.display = "none";
          }
  
          return this;
        },
        show: function show() {
          for (var e = 0; e < this.length; e++) {
            "none" == this[e].style.display && (this[e].style.display = ""), "none" == getComputedStyle(this[e], "").getPropertyValue("display") && (this[e].style.display = "block");
          }
  
          return this;
        },
        clone: function clone() {
          return this.map(function () {
            return this.cloneNode(!0);
          });
        },
        styles: function styles() {
          return this[0] ? window.getComputedStyle(this[0], null) : void 0;
        },
        css: function css(e, t) {
          var a,
              n,
              s = this[0],
              i = "";
  
          if (arguments.length < 2) {
            if (!s) return;
            if ("string" == typeof e) return s.style[e] || getComputedStyle(s, "").getPropertyValue(e);
          }
  
          if ("string" == typeof e) t || 0 === t ? i = y(e) + ":" + T(e, t) : this.each(function () {
            this.style.removeProperty(y(e));
          });else for (n in e) {
            if (e[n] || 0 === e[n]) i += y(n) + ":" + T(n, e[n]) + ";";else for (a = 0; a < this.length; a++) {
              this[a].style.removeProperty(y(n));
            }
          }
          return this.each(function () {
            this.style.cssText += ";" + i;
          });
        },
        each: function each(e) {
          for (var t = 0; t < this.length && !1 !== e.apply(this[t], [t, this[t]]); t++) {
            ;
          }
  
          return this;
        },
        filter: function filter(a) {
          for (var n = [], s = 0; s < this.length; s++) {
            v(a) ? a.call(this[s], s, this[s]) && n.push(this[s]) : t.matches(this[s], a) && n.push(this[s]);
          }
  
          return new e(n);
        },
        html: function html(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          this.empty();
  
          for (var t = 0; t < this.length; t++) {
            this[t].innerHTML = e;
          }
  
          return this;
        },
        text: function text(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
  
          for (var t = 0; t < this.length; t++) {
            this[t].textContent = e;
          }
  
          return this;
        },
        is: function is(e) {
          return this.length > 0 && t.matches(this[0], e);
        },
        not: function not(e) {
          var a = [];
          if (v(e) && void 0 !== e.call) this.each(function (t) {
            e.call(this, t) || a.push(this);
          });else {
            var n = "string" == typeof e ? this.filter(e) : g(e) && v(e.item) ? f.call(e) : t(e);
            b(n) && (n = t.map(n, function (e) {
              return e;
            })), this.each(function (e, t) {
              n.indexOf(t) < 0 && a.push(t);
            });
          }
          return t(a);
        },
        indexOf: function indexOf(e) {
          for (var t = 0; t < this.length; t++) {
            if (this[t] === e) return t;
          }
        },
        index: function index(e) {
          return e ? this.indexOf(t(e)[0]) : this.parent().children().indexOf(this[0]);
        },
        get: function get(e) {
          return void 0 === e ? f.call(this) : this[e >= 0 ? e : e + this.length];
        },
        eq: function eq(t) {
          if (void 0 === t) return this;
          var a,
              n = this.length;
          return new e(t > n - 1 ? [] : t < 0 ? (a = n + t) < 0 ? [] : [this[a]] : [this[t]]);
        },
        append: function append(t) {
          var a, n;
  
          for (a = 0; a < this.length; a++) {
            if ("string" == typeof t) {
              var s = document.createElement("div");
  
              for (s.innerHTML = t; s.firstChild;) {
                this[a].appendChild(s.firstChild);
              }
            } else if (t instanceof e) for (n = 0; n < t.length; n++) {
              this[a].appendChild(t[n]);
            } else this[a].appendChild(t);
          }
  
          return this;
        },
        appendTo: function appendTo(e) {
          return t(e).append(this), this;
        },
        prepend: function prepend(t) {
          var a, n;
  
          for (a = 0; a < this.length; a++) {
            if ("string" == typeof t) {
              var s = document.createElement("div");
  
              for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n--) {
                this[a].insertBefore(s.childNodes[n], this[a].childNodes[0]);
              }
            } else if (t instanceof e) for (n = 0; n < t.length; n++) {
              this[a].insertBefore(t[n], this[a].childNodes[0]);
            } else this[a].insertBefore(t, this[a].childNodes[0]);
          }
  
          return this;
        },
        prependTo: function prependTo(e) {
          return t(e).prepend(this), this;
        },
        insertBefore: function insertBefore(e) {
          for (var a = t(e), n = 0; n < this.length; n++) {
            if (1 === a.length) a[0].parentNode.insertBefore(this[n], a[0]);else if (a.length > 1) for (var s = 0; s < a.length; s++) {
              a[s].parentNode.insertBefore(this[n].cloneNode(!0), a[s]);
            }
          }
  
          return this;
        },
        insertAfter: function insertAfter(e) {
          for (var a = t(e), n = 0; n < this.length; n++) {
            if (1 === a.length) a[0].parentNode.insertBefore(this[n], a[0].nextSibling);else if (a.length > 1) for (var s = 0; s < a.length; s++) {
              a[s].parentNode.insertBefore(this[n].cloneNode(!0), a[s].nextSibling);
            }
          }
  
          return this;
        },
        next: function next(a) {
          return this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([]);
        },
        nextAll: function nextAll(a) {
          var n = [],
              s = this[0];
          if (!s) return new e([]);
  
          for (; s.nextElementSibling;) {
            var i = s.nextElementSibling;
            a ? t(i).is(a) && n.push(i) : n.push(i), s = i;
          }
  
          return new e(n);
        },
        prev: function prev(a) {
          return this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? new e([this[0].previousElementSibling]) : new e([]) : this[0].previousElementSibling ? new e([this[0].previousElementSibling]) : new e([]) : new e([]);
        },
        prevAll: function prevAll(a) {
          var n = [],
              s = this[0];
          if (!s) return new e([]);
  
          for (; s.previousElementSibling;) {
            var i = s.previousElementSibling;
            a ? t(i).is(a) && n.push(i) : n.push(i), s = i;
          }
  
          return new e(n);
        },
        parent: function parent(e) {
          for (var a = [], n = 0; n < this.length; n++) {
            null !== this[n].parentNode && (e ? t(this[n].parentNode).is(e) && a.push(this[n].parentNode) : a.push(this[n].parentNode));
          }
  
          return t(t.unique(a));
        },
        parents: function parents(e) {
          for (var a = [], n = 0; n < this.length; n++) {
            for (var s = this[n].parentNode; s;) {
              e ? t(s).is(e) && a.push(s) : a.push(s), s = s.parentNode;
            }
          }
  
          return t(t.unique(a));
        },
        find: function find(t) {
          for (var a = [], n = 0; n < this.length; n++) {
            for (var s = this[n].querySelectorAll(t), i = 0; i < s.length; i++) {
              a.push(s[i]);
            }
          }
  
          return new e(a);
        },
        children: function children(a) {
          for (var n = [], s = 0; s < this.length; s++) {
            for (var i = this[s].childNodes, o = 0; o < i.length; o++) {
              a ? 1 === i[o].nodeType && t(i[o]).is(a) && n.push(i[o]) : 1 === i[o].nodeType && n.push(i[o]);
            }
          }
  
          return new e(t.unique(n));
        },
        remove: function remove() {
          for (var e = 0; e < this.length; e++) {
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          }
  
          return this;
        },
        add: function add() {
          var e, a;
  
          for (e = 0; e < arguments.length; e++) {
            var n = t(arguments[e]);
  
            for (a = 0; a < n.length; a++) {
              this[this.length] = n[a], this.length++;
            }
          }
  
          return this;
        },
        before: function before(e) {
          return t(e).insertBefore(this), this;
        },
        after: function after(e) {
          return t(e).insertAfter(this), this;
        },
        scrollTop: function scrollTop(e) {
          if (this.length) {
            var t = "scrollTop" in this[0];
            return void 0 === e ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
              this.scrollTop = e;
            } : function () {
              this.scrollTo(this.scrollX, e);
            });
          }
        },
        scrollLeft: function scrollLeft(e) {
          if (this.length) {
            var t = "scrollLeft" in this[0];
            return void 0 === e ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
              this.scrollLeft = e;
            } : function () {
              this.scrollTo(e, this.scrollY);
            });
          }
        },
        contents: function contents() {
          return this.map(function (e, t) {
            return f.call(t.childNodes);
          });
        },
        nextUntil: function nextUntil(e) {
          for (var a = this, n = []; a.length && !a.filter(e).length;) {
            n.push(a[0]), a = a.next();
          }
  
          return t(n);
        },
        prevUntil: function prevUntil(e) {
          for (var a = this, n = []; a.length && !t(a).filter(e).length;) {
            n.push(a[0]), a = a.prev();
          }
  
          return t(n);
        },
        detach: function detach() {
          return this.remove();
        }
      }, t.fn = e.prototype, t;
    }(),
        k = M;
  
    n.$ = M, k.inArray = function (e, t, a) {
      return h.indexOf.call(t, e, a);
    }, k.extend = function (e) {
      var t,
          a = f.call(arguments, 1);
      return "boolean" == typeof e && (t = e, e = a.shift()), e = e || {}, a.forEach(function (a) {
        !function e(t, a, n) {
          for (var s in a) {
            n && (k.isPlainObject(a[s]) || k.isArray(a[s])) ? ((k.isPlainObject(a[s]) && !k.isPlainObject(t[s]) || k.isArray(a[s]) && !k.isArray(t[s])) && (t[s] = {}), e(t[s], a[s], n)) : void 0 !== a[s] && (t[s] = a[s]);
          }
        }(e, a, t);
      }), e;
    }, k.isFunction = v, k.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, k.isPlainObject = function (e) {
      return b(e) && null !== e && e !== e.window && Object.getPrototypeOf(e) == Object.prototype;
    }, k.each = function (e, t) {
      var a, n;
  
      if (b(e) && t) {
        if (k.isArray(e) || e instanceof M) for (a = 0; a < e.length && !1 !== t.call(e[a], a, e[a]); a++) {
          ;
        } else for (n in e) {
          if (e.hasOwnProperty(n) && "length" !== n && !1 === t.call(e[n], n, e[n])) break;
        }
        return this;
      }
    }, k.unique = function (e) {
      for (var t = [], a = 0; a < e.length; a++) {
        -1 === t.indexOf(e[a]) && t.push(e[a]);
      }
  
      return t;
    }, k.map = function (e, t) {
      var a,
          n,
          s,
          i = [];
      if (g(e)) for (n = 0; n < e.length; n++) {
        null !== (a = t(e[n], n)) && i.push(a);
      } else for (s in e) {
        null !== (a = t(e[s], s)) && i.push(a);
      }
      return i.length > 0 ? k.fn.concat.apply([], i) : i;
    }, k.matches = function (e, t) {
      return !(!t || !e || 1 !== e.nodeType) && (e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector).call(e, t);
    };
  
    var D = [],
        O = "undefined" != typeof window,
        N = O ? navigator.userAgent : "",
        P = /Safari/.test(N),
        E = N.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        V = O && window.requestAnimationFrame || function (e) {
      return setTimeout(e, 20);
    },
        A = O && window.cancelAnimationFrame || function (e) {
      clearTimeout(e);
    };
  
    function F() {}
  
    function I(e) {
      var t,
          a = [];
  
      for (t in e) {
        a.push(e[t]);
      }
  
      return a;
    }
  
    function j(e) {
      var t,
          a = {};
      if (e) for (t = 0; t < e.length; t++) {
        a[e[t]] = e[t];
      }
      return a;
    }
  
    function L(e) {
      return e - parseFloat(e) >= 0;
    }
  
    function H(e) {
      return "string" == typeof e;
    }
  
    function z(e, t, a) {
      return Math.max(t, Math.min(e, a));
    }
  
    function U(e, t) {
      for (e += "", t = t || 2; e.length < t;) {
        e = "0" + e;
      }
  
      return e;
    }
  
    function Y(e, t) {
      var a, n;
      return t = t || 100, function () {
        var s = this,
            i = +new Date(),
            o = arguments;
        a && i < a + t ? (clearTimeout(n), n = setTimeout(function () {
          a = i, e.apply(s, o);
        }, t)) : (a = i, e.apply(s, o));
      };
    }
  
    function R(e) {
      "vibrate" in navigator && navigator.vibrate(e || 50);
    }
  
    function $(e, t, a) {
      return 100 * (e - t) / (a - t);
    }
  
    function W(e, t, a) {
      var n = a.attr(e);
      return void 0 === n || "" === n ? t : "true" === n;
    }
  
    /Android/i.test(E) ? (_ = "android", (w = N.match(/Android\s+([\d\.]+)/i)) && (D = w[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(E) ? (_ = "ios", (w = N.match(/OS\s+([\d\_]+)/i)) && (D = w[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(E) ? _ = "wp" : /Windows|MSIE/i.test(E) && (_ = "windows"), C = D[0], S = D[1];
    var J = 0,
        q = void 0;
  
    function B() {
      J++, setTimeout(function () {
        J--;
      }, 500);
    }
  
    function K(e, t) {
      if (!t.mbscClick) {
        var a = (e.originalEvent || e).changedTouches[0],
            n = document.createEvent("MouseEvents");
        n.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), n.isMbscTap = !0, n.isIonicTap = !0, q = !0, t.mbscChange = !0, t.mbscClick = !0, t.dispatchEvent(n), q = !1, B(), setTimeout(function () {
          delete t.mbscClick;
        });
      }
    }
  
    function G(e, t, a) {
      var n = e.originalEvent || e,
          s = (a ? "page" : "client") + t;
      return n.targetTouches && n.targetTouches[0] ? n.targetTouches[0][s] : n.changedTouches && n.changedTouches[0] ? n.changedTouches[0][s] : e[s];
    }
  
    function X(e) {
      var t = e[0],
          a = e.attr("data-role"),
          n = e.attr("type") || t.nodeName.toLowerCase();
      return /(switch|range|rating|segmented|stepper|select)/.test(a) && (n = a), n;
    }
  
    function Z(e, t, a) {
      e.focus(), /(button|submit|checkbox|switch|radio)/.test(t) && a.preventDefault(), /select/.test(t) || K(a, e);
    }
  
    function Q(e, t, a, s, i, o) {
      var r,
          l,
          c,
          u,
          d,
          m = (0, n.$)(t);
      i = i || 9, e.settings.tap && m.on("touchstart.mbsc", function (e) {
        c || (s && e.preventDefault(), c = this, r = G(e, "X"), l = G(e, "Y"), u = !1, d = new Date());
      }).on("touchcancel.mbsc", function () {
        c = !1;
      }).on("touchmove.mbsc", function (e) {
        c && !u && (Math.abs(G(e, "X") - r) > i || Math.abs(G(e, "Y") - l) > i) && (u = !0);
      }).on("touchend.mbsc", function (e) {
        c && (o && new Date() - d < 100 || !u ? K(e, e.target) : B(), c = !1);
      }), m.on("click.mbsc", function (t) {
        s && t.preventDefault(), a.call(this, t, e);
      });
    }
  
    function ee(e) {
      if (J && !q && !e.isMbscTap && ("TEXTAREA" != e.target.nodeName || "mousedown" != e.type)) return e.stopPropagation(), e.preventDefault(), !1;
    }
  
    function te(e, t, a, n, s, i, o) {
      var r = new Date(e, t, a, n || 0, s || 0, i || 0, o || 0);
      return 23 == r.getHours() && 0 === (n || 0) && r.setHours(r.getHours() + 2), r;
    }
  
    function ae(e, t, a) {
      if (!t) return null;
  
      var n,
          s,
          i = Se({}, ge, a),
          o = function o(t) {
        for (var a = 0; n + 1 < e.length && e.charAt(n + 1) == t;) {
          a++, n++;
        }
  
        return a;
      },
          r = function r(e, t, a) {
        var n = "" + t;
        if (o(e)) for (; n.length < a;) {
          n = "0" + n;
        }
        return n;
      },
          l = function l(e, t, a, n) {
        return o(e) ? n[t] : a[t];
      },
          c = "",
          u = !1;
  
      for (n = 0; n < e.length; n++) {
        if (u) "'" != e.charAt(n) || o("'") ? c += e.charAt(n) : u = !1;else switch (e.charAt(n)) {
          case "d":
            c += r("d", i.getDay(t), 2);
            break;
  
          case "D":
            c += l("D", t.getDay(), i.dayNamesShort, i.dayNames);
            break;
  
          case "o":
            c += r("o", (t.getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5, 3);
            break;
  
          case "m":
            c += r("m", i.getMonth(t) + 1, 2);
            break;
  
          case "M":
            c += l("M", i.getMonth(t), i.monthNamesShort, i.monthNames);
            break;
  
          case "y":
            s = i.getYear(t), c += o("y") ? s : (s % 100 < 10 ? "0" : "") + s % 100;
            break;
  
          case "h":
            var d = t.getHours();
            c += r("h", d > 12 ? d - 12 : 0 === d ? 12 : d, 2);
            break;
  
          case "H":
            c += r("H", t.getHours(), 2);
            break;
  
          case "i":
            c += r("i", t.getMinutes(), 2);
            break;
  
          case "s":
            c += r("s", t.getSeconds(), 2);
            break;
  
          case "a":
            c += t.getHours() > 11 ? i.pmText : i.amText;
            break;
  
          case "A":
            c += t.getHours() > 11 ? i.pmText.toUpperCase() : i.amText.toUpperCase();
            break;
  
          case "'":
            o("'") ? c += "'" : u = !0;
            break;
  
          default:
            c += e.charAt(n);
        }
      }
  
      return c;
    }
  
    function ne(e, t, a) {
      var n = Se({}, ge, a),
          s = ue(n.defaultValue || new Date());
      if (!e || !t) return s;
      if (t.getTime) return t;
      t = "object" == (void 0 === t ? "undefined" : o(t)) ? t.toString() : t + "";
  
      var i,
          r = n.shortYearCutoff,
          l = n.getYear(s),
          c = n.getMonth(s) + 1,
          u = n.getDay(s),
          d = -1,
          m = s.getHours(),
          p = s.getMinutes(),
          h = 0,
          f = -1,
          v = !1,
          b = function b(t) {
        var a = i + 1 < e.length && e.charAt(i + 1) == t;
        return a && i++, a;
      },
          g = function g(e) {
        b(e);
        var a = new RegExp("^\\d{1," + ("@" == e ? 14 : "!" == e ? 20 : "y" == e ? 4 : "o" == e ? 3 : 2) + "}"),
            n = t.substr(T).match(a);
        return n ? (T += n[0].length, parseInt(n[0], 10)) : 0;
      },
          x = function x(e, a, n) {
        var s,
            i = b(e) ? n : a;
  
        for (s = 0; s < i.length; s++) {
          if (t.substr(T, i[s].length).toLowerCase() == i[s].toLowerCase()) return T += i[s].length, s + 1;
        }
  
        return 0;
      },
          y = function y() {
        T++;
      },
          T = 0;
  
      for (i = 0; i < e.length; i++) {
        if (v) "'" != e.charAt(i) || b("'") ? y() : v = !1;else switch (e.charAt(i)) {
          case "d":
            u = g("d");
            break;
  
          case "D":
            x("D", n.dayNamesShort, n.dayNames);
            break;
  
          case "o":
            d = g("o");
            break;
  
          case "m":
            c = g("m");
            break;
  
          case "M":
            c = x("M", n.monthNamesShort, n.monthNames);
            break;
  
          case "y":
            l = g("y");
            break;
  
          case "H":
            m = g("H");
            break;
  
          case "h":
            m = g("h");
            break;
  
          case "i":
            p = g("i");
            break;
  
          case "s":
            h = g("s");
            break;
  
          case "a":
            f = x("a", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
            break;
  
          case "A":
            f = x("A", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
            break;
  
          case "'":
            b("'") ? y() : v = !0;
            break;
  
          default:
            y();
        }
      }
  
      if (l < 100 && (l += new Date().getFullYear() - new Date().getFullYear() % 100 + (l <= ("string" != typeof r ? r : new Date().getFullYear() % 100 + parseInt(r, 10)) ? 0 : -100)), d > -1) {
        c = 1, u = d;
  
        do {
          var _ = 32 - new Date(l, c - 1, 32, 12).getDate();
  
          u > _ && (c++, u -= _);
        } while (u > _);
      }
  
      m = -1 == f ? m : f && m < 12 ? m + 12 : f || 12 != m ? m : 0;
      var w = n.getDate(l, c - 1, u, m, p, h);
      return n.getYear(w) != l || n.getMonth(w) + 1 != c || n.getDay(w) != u ? s : w;
    }
  
    function se(e, t) {
      return Math.round((t - e) / 864e5);
    }
  
    function ie(e) {
      return te(e.getFullYear(), e.getMonth(), e.getDate());
    }
  
    function oe(e) {
      return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
    }
  
    function re(e, t) {
      var a = "",
          n = "";
      return e && (t.h && (n += U(e.getHours()) + ":" + U(e.getMinutes()), t.s && (n += ":" + U(e.getSeconds())), t.u && (n += "." + U(e.getMilliseconds(), 3)), t.tz && (n += t.tz)), t.y ? (a += e.getFullYear(), t.m && (a += "-" + U(e.getMonth() + 1), t.d && (a += "-" + U(e.getDate())), t.h && (a += "T" + n))) : t.h && (a = n)), a;
    }
  
    function le(e, t, a) {
      var n,
          s,
          i = {
        y: 1,
        m: 2,
        d: 3,
        h: 4,
        i: 5,
        s: 6,
        u: 7,
        tz: 8
      };
      if (a) for (n in i) {
        (s = e[i[n] - t]) && (a[n] = "tz" == n ? s : 1);
      }
    }
  
    function ce(e, t, a) {
      var n = window.moment || t.moment,
          s = t.returnFormat;
  
      if (e) {
        if ("moment" == s && n) return n(e);
        if ("locale" == s) return ae(a, e, t);
        if ("iso8601" == s) return re(e, t.isoParts);
      }
  
      return e;
    }
  
    function ue(e, t, a, n) {
      var s;
      return e ? e.getTime ? e : e.toDate ? e.toDate() : ("string" == typeof e && (e = e.trim()), (s = fe.exec(e)) ? (le(s, 2, n), new Date(1970, 0, 1, s[2] ? +s[2] : 0, s[3] ? +s[3] : 0, s[4] ? +s[4] : 0, s[5] ? +s[5] : 0)) : (s || (s = he.exec(e)), s ? (le(s, 0, n), new Date(s[1] ? +s[1] : 1970, s[2] ? s[2] - 1 : 0, s[3] ? +s[3] : 1, s[4] ? +s[4] : 0, s[5] ? +s[5] : 0, s[6] ? +s[6] : 0, s[7] ? +s[7] : 0)) : ne(t, e, a))) : null;
    }
  
    function de(e, t) {
      return e.getFullYear() == t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate();
    }
  
    O && (["mouseover", "mousedown", "mouseup", "click"].forEach(function (e) {
      document.addEventListener(e, ee, !0);
    }), "android" == _ && C < 5 && document.addEventListener("change", function (e) {
      J && "checkbox" == e.target.type && !e.target.mbscChange && (e.stopPropagation(), e.preventDefault()), delete e.target.mbscChange;
    }, !0));
    var me,
        pe,
        he = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?((Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        fe = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        ve = /^\d{1,2}(\/\d{1,2})?$/,
        be = /^w\d$/i,
        ge = {
      shortYearCutoff: "+10",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
      amText: "am",
      pmText: "pm",
      getYear: function getYear(e) {
        return e.getFullYear();
      },
      getMonth: function getMonth(e) {
        return e.getMonth();
      },
      getDay: function getDay(e) {
        return e.getDate();
      },
      getDate: te,
      getMaxDayOfMonth: function getMaxDayOfMonth(e, t) {
        return 32 - new Date(e, t, 32, 12).getDate();
      },
      getWeekNumber: function getWeekNumber(e) {
        (e = new Date(e)).setHours(0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
        var t = new Date(e.getFullYear(), 0, 1);
        return Math.ceil(((e - t) / 864e5 + 1) / 7);
      }
    };
  
    function xe(e, t, a) {
      O && ye(function () {
        ye(e).each(function () {
          new t(this);
        }), ye(document).on("mbsc-enhance", function (a, n) {
          ye(a.target).is(e) ? new t(a.target, n) : ye(e, a.target).each(function () {
            new t(this, n);
          });
        }), a && ye(document).on("mbsc-refresh", function (t) {
          var a;
          ye(t.target).is(e) ? (a = _e[t.target.id]) && a.refresh() : ye(e, t.target).each(function () {
            (a = _e[this.id]) && a.refresh();
          });
        });
      });
    }
  
    s.datetime = {
      formatDate: ae,
      parseDate: ne
    }, console.info("The trial is being authenticated with remote calls made to https://trial.mobiscroll.com. This is strictly necessary for the trial. No remote calls are made from the licensed version. More info on the trial and its limitations: http://help.mobiscroll.com/trials/what-are-the-limitations-of-the-trial");
    var ye = n.$,
        Te = +new Date(),
        _e = {},
        we = {},
        Ce = {
      xsmall: 0,
      small: 576,
      medium: 768,
      large: 992,
      xlarge: 1200
    },
        Se = ye.extend;
    Se(s, {
      getCoord: G,
      preventClick: B,
      vibrate: R
    }), pe = Se(n, {
      $: ye,
      version: "4.7.3",
      autoTheme: "mobiscroll",
      themes: {
        form: {},
        page: {},
        frame: {},
        scroller: {},
        listview: {},
        navigation: {},
        progress: {},
        card: {}
      },
      platform: {
        name: _,
        majorVersion: C,
        minorVersion: S
      },
      i18n: {},
      instances: _e,
      classes: we,
      util: s,
      settings: {},
      setDefaults: function setDefaults(e) {
        Se(this.settings, e);
      },
      customTheme: function customTheme(e, t) {
        var a,
            s = n.themes,
            i = ["frame", "scroller", "listview", "navigation", "form", "page", "progress", "card"];
  
        for (a = 0; a < i.length; a++) {
          s[i[a]][e] = Se({}, s[i[a]][t], {
            baseTheme: t
          });
        }
      }
    });
  
    var Me = function Me(e, t) {
      var a,
          s,
          i,
          r,
          l,
          c,
          u,
          d,
          m,
          p = this;
  
      function h(e) {
        var t, n;
        return l.responsive && (n = e || a.offsetWidth, ye.each(l.responsive, function (e, a) {
          n >= (a.breakpoint || Ce[e]) && (t = a);
        })), t;
      }
  
      p.settings = {}, p._getText = new Function("mobiscroll, p", function () {
        var e,
            t = function (e, t) {
          var a,
              n = function (e) {
            var t,
                a = e[0];
  
            for (t = 0; t < 16; ++t) {
              if (a * t % 16 == 1) return [t, e[1]];
            }
          }(t),
              s = function (e, t, a, n) {
            var s,
                i = "0123456789abcdef",
                o = "",
                r = t.length;
  
            for (s = 0; s < r; ++s) {
              o += e ? i[(a * i.indexOf(t[s]) + n) % 16] : i[((a * i.indexOf(t[s]) - a * n) % 16 + 16) % 16];
            }
  
            return o;
          }(0, e, n[0], n[1]),
              i = s.length,
              o = [];
  
          for (a = 0; a < i; a += 2) {
            o.push(s[a] + s[a + 1]);
          }
  
          return o;
        }("9a90939d474140439545904142420cfe4aabfbfa575b5d904f9a9f904c0ea74b9a4e0c904b4c4a41470e0352a74b9a4e0c474b9e0e560c56540296035109524a439406959a93424f5700090d449f4c459a43414c0e4f039d944b90069a574f0c424f4c499a4e024c02905d994e43424f0e560b57579a039d9057a74b9a4e0c44424141900ea74b9a4e0c904b4c4a41470e03089a035d9a07575b5d4c574ffd9af75d4ffd9af7574ffd90f75d4ffd90f7574c97904f9a9f904c064f970efd094a439596424b9358404241454d0b43479641909a4b4c9a090209964195439a43414c584b409541429f9a4f0b43479641909a4b4c9a0902099807434c4a4f9e58075b0902099a419658560b43479641909a4b4c9a090209424f449a58560b43479641909a4b4c9a09020940419a9a414758560b43479641909a4b4c9a0902099043494e9a58560b43479641909a4b4c9a090209474b9049434c58560b43479641909a4b4c9a090209964b4a4a434c4958560b43479641909a4b4c9a09020944414c9a079543984f585e969e0b43479641909a4b4c9a09020942434c4f074e4f43494e9a585b50969e0902099a4f9e9a074b4243494c58454f4c9a4f9009020941964b45439a9358090d0ea74b9a4e0c44424141900ea74b9a4e0c904b4c4a41470e0308505603015b56560d560c5e030d090b43479641909a4b4c9a09f7030c4841434c0e095d09030d09005cf29f56565f5af29f56565f50f29f56565a53f29f56565a5bf29f56565a4552014a43945c095809090397454b9a454e0e4f039d904f9a9f904c0609099778", [5, 6]),
            a = "",
            n = t.length;
  
        for (e = 0; e < n; e++) {
          a += String.fromCharCode(parseInt(t[e], 16));
        }
  
        return a;
      }()), p.element = e, p._init = F, p._destroy = F, p._processSettings = F, p._checkResp = function (e) {
        if (p && p._responsive) {
          var t = h(e);
          if (r !== t) return r = t, p.init({}), !0;
        }
      }, p.init = function (o) {
        var f, v;
  
        for (f in o && p.getVal && (v = p.getVal()), p.settings) {
          delete p.settings[f];
        }
  
        l = p.settings, Se(t, o), p._hasDef && (m = pe.settings), Se(l, p._defaults, m, t), p._hasTheme && ("auto" != (u = l.theme) && u || (u = pe.autoTheme), "default" == u && (u = "mobiscroll"), t.theme = u, c = pe.themes[p._class] ? pe.themes[p._class][u] : {}), p._hasLang && (s = pe.i18n[l.lang]), Se(l, c, s, m, t), a = ye(l.context)[0], p._responsive && (r || (r = h()), Se(l, r)), p._processSettings(r || {});
  
        function b(e) {
          return "string" == typeof e ? e : re(ue(e), {
            y: 1,
            m: 1,
            d: 1,
            h: 1,
            i: 1,
            s: 1,
            u: 1
          });
        }
  
        function g() {
          p._init(o), o && p.setVal && p.setVal(v, !0), d("onInit");
        }
  
        if (!p._class || {
          form: !0,
          page: !0,
          progress: !0,
          switch: !0,
          slider: !0,
          stepper: !0
        }[p._class]) g();else {
          if (!pe.fwv) {
            var x;
  
            switch (pe.fw) {
              case "angular":
                x = ye("[ng-version]").attr("ng-version");
                break;
  
              case "jquery":
                x = ye.fn && ye.fn.jquery;
            }
  
            pe.fwv = x || "N/A";
          }
  
          var y,
              T,
              _ = {
            className: p._class,
            buttons: p.buttons,
            platform: pe.platform,
            fw: pe.fw + (window.Ionic || window.ionic ? "-ionic" : ""),
            fwv: pe.fwv,
            demo: !!window.isMbscDemo,
            userAgent: navigator.userAgent,
            defSortHandle: ye(e).find(l.listSelector || "ul,ol").length ? "left" : "right",
            settings: {
              activeClass: l.activeClass,
              ampmText: l.ampmText,
              amText: l.amText,
              animateIcons: l.animateIcons,
              backText: l.backText,
              baseTheme: l.baseTheme,
              buttons: l.buttons,
              btnClass: l.btnClass,
              btnWidth: l.btnWidth,
              btnReverse: l.btnReverse,
              closeIcon: l.closeIcon,
              context: "body" == l.context ? "body" : "",
              controls: l.controls,
              cssClass: l.cssClass,
              dateDisplay: l.dateDisplay,
              dateFormat: l.dateFormat,
              dateWheels: l.dateWheels,
              dayNames: l.dayNames,
              dayNamesShort: l.dayNamesShort,
              daySuffix: l.daySuffix,
              display: l.display,
              dayText: l.dayText,
              endYear: l.endYear,
              fixedHeader: l.fixedHeader,
              handleClass: l.handleClass,
              handleMarkup: l.handleMarkup,
              hideText: l.hideText,
              hourText: l.hourText,
              itemNode: l.itemNode,
              itemWidth: l.itemWidth,
              lang: l.lang,
              lapIcon: l.lapIcon,
              lapText: l.lapText,
              layout: l.layout,
              leftArrowClass: l.leftArrowClass,
              max: b(l.max),
              min: b(l.min),
              minuteText: l.minuteText,
              monthNames: l.monthNames,
              monthNamesShort: l.monthNamesShort,
              monthSuffix: l.monthSuffix,
              monthText: l.monthText,
              nowIcon: l.nowIcon,
              nowText: l.nowText,
              pmText: l.pmText,
              preset: l.preset,
              resetIcon: l.resetIcon,
              resetText: l.resetText,
              rightArrowClass: l.rightArrowClass,
              rtl: l.rtl,
              secText: l.secText,
              select: l.select,
              showOverlay: l.showOverlay,
              snap: l.snap,
              sort: l.sort,
              sortable: l.sortable,
              sortHandle: l.sortHandle,
              startIcon: l.startIcon,
              startText: l.startText,
              startYear: l.startYear,
              stepHour: l.stepHour,
              stepMinute: l.stepMinute,
              stepSecond: l.stepSecond,
              steps: l.steps,
              stopIcon: l.stopIcon,
              stopText: l.stopText,
              striped: l.striped,
              theme: l.theme,
              timeFormat: l.timeFormat,
              timeWheels: l.timeWheels,
              todayText: l.todayText,
              type: l.type,
              variant: l.variant,
              wrapperClass: l.wrapperClass,
              yearSuffix: l.yearSuffix,
              yearText: l.yearText
            }
          },
              w = [],
              C = {},
              S = ["refresh", "redraw", "navigate", "changeTab", "getDate", "setDate", "addEvent", "removeEvent", "getEvents", "setEvents", "setActiveDate", "start", "stop", "reset", "lap", "resetlap", "getTime", "setTime", "getEllapsedTime", "setEllapsedTime"],
              M = {
            jsonp: 1,
            getInst: 1,
            init: 1,
            destroy: 1
          },
              k = function k(e) {
            p[e] = function () {
              w.push({
                func: e,
                args: arguments
              });
            };
          };
  
          for (T in p) {
            "function" != typeof p[T] || M[T] || (C[T] = p[T], k(T));
          }
  
          for (y = 0; y < S.length; y++) {
            k(S[y]);
          }
  
          "timer" != l.preset || t.buttons || (_.settings.buttons = ["resetlap", "toggle"], "inline" !== l.display && _.settings.buttons.unshift("hide")), "eventcalendar" != l.preset || t.buttons || "inline" == l.display || (_.settings.buttons = ["close"]), l.zone = l.zone || {
            run: function run(e) {
              e();
            },
            runOutsideAngular: function runOutsideAngular(e) {
              e();
            }
          }, p.jsonp("remote", _, function (a) {
            l.zone.run(function () {
              if (p) {
                for (T in p.remote = a, C) {
                  p[T] = C[T];
                }
  
                void 0 === a.notification || me || (me = !0, n.snackbar(a.notification));
                var s = Se({}, t);
  
                for (delete s.data, p._presets && (i = p._presets[l.preset]) && (i = i.call(e, p, t), Se(l, i, s, r)), g(), y = 0; y < w.length; y++) {
                  p[w[y].func].apply(p, w[y].args);
                }
  
                w = null, C = null;
              }
            });
          });
        }
      }, p.destroy = function () {
        p && (p._destroy(), d("onDestroy"), delete _e[e.id], p = null);
      }, p.tap = function (e, t, a, n, s) {
        Q(p, e, t, a, n, s);
      }, p.trigger = function (a, n) {
        var s,
            o,
            r,
            l = [m, c, i, t];
  
        for (o = 0; o < 4; o++) {
          (r = l[o]) && r[a] && (s = r[a].call(e, n || {}, p));
        }
  
        return s;
      }, p.option = function (e, a) {
        var n = {},
            s = ["data", "invalid", "valid", "readonly"];
        /calendar|eventcalendar|range/.test(l.preset) && s.push("marked", "labels", "colors"), "object" === (void 0 === e ? "undefined" : o(e)) ? n = e : n[e] = a, s.forEach(function (e) {
          t[e] = l[e];
        }), p.init(n);
      }, p.getInst = function () {
        return p;
      }, p.jsonp = De, t = t || {}, d = p.trigger, p.__ready || (ye(e).addClass("mbsc-comp"), e.id ? _e[e.id] && _e[e.id].destroy() : e.id = "mobiscroll" + ++Te, _e[e.id] = p, p.__ready = !0);
    };
  
    function ke() {
      var e = document.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      document.cookie = "mobiscrollClientError=1; expires=" + new Date(new Date().getTime() + 864e5).toUTCString() + "; path=/";
  
      try {
        window.name = (window.name || "") + ";mobiscrollClientError";
      } catch (e) {}
  
      De("error", {
        trialCode: pe.apiKey,
        sessionID: e
      }, function () {
        document.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  
        try {
          window.name = (window.name || "").replace(/;mobiscrollClientError/g, "");
        } catch (e) {}
      });
    }
  
    function De(e, t, a, n) {
      var s,
          i = document.createElement("script"),
          o = "jsonp" + ++Te;
  
      function r() {
        window[o] && window[o](), n < 4 ? De(e, t, a, n + 1) : pe.trialError || "error" === e || (pe.trialError = !0, ke(), "mbscdemo" != pe.apiKey && alert("Mobiscroll trial not loaded. Please check your connection. If the problem persists, contact us at support@mobiscroll.com"));
      }
  
      n = n || 1, window[o] = function (e) {
        clearTimeout(s), i.parentNode.removeChild(i), delete window[o], e && a(JSON.parse(e, function (e, t) {
          return "string" != typeof t ? t : "function" === t.substring(0, 8) ? window.eval("(" + t + ")") : t.match(he) ? ue(t) : t;
        }));
      }, s = setTimeout(r, 6e3), i.onerror = r, i.src = pe.apiUrl + pe.apiKey + "/" + e + "?callback=" + o + "&data=" + encodeURIComponent(JSON.stringify(t)), document.body.appendChild(i);
    }
  
    O && ye(function () {
      (document.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*\=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(window.name || "")) && ke();
    });
  
    var Oe,
        Ne,
        Pe,
        Ee,
        Ve = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    };
  
    var Ae = a.bool,
        Fe = a.string,
        Ie = a.func,
        je = a.number,
        Le = a.object,
        He = a.oneOfType([Le, Fe]),
        ze = a.oneOfType([je, a.arrayOf(je)]),
        Ue = {
      theme: Fe,
      lang: Fe,
      rtl: Ae,
      responsive: Le,
      context: a.oneOfType([Fe, Le])
    },
        Ye = {
      anchor: a.oneOfType([Fe, Le]),
      animate: a.oneOfType([Ae, a.oneOf(["fade", "flip", "pop", "swing", "slidevertical", "slidehorizontal", "slidedown", "slideup"])]),
      buttons: a.array,
      closeOnOverlayTap: Ae,
      cssClass: Fe,
      disabled: Ae,
      display: a.oneOf(["top", "bottom", "bubble", "inline", "center"]),
      focusOnClose: a.oneOfType([Ae, Fe, Le]),
      focusTrap: Ae,
      headerText: a.oneOfType([Ae, Fe, Ie]),
      layout: a.oneOf(["liquid", "fixed"]),
      scrollLock: Ae,
      showOnFocus: Ae,
      showOnTap: Ae,
      showOnOverlay: Ae,
      touchUi: Ae,
      onBeforeClose: Ie,
      onBeforeShow: Ie,
      onCancel: Ie,
      onClose: Ie,
      onDestroy: Ie,
      onMarkupReady: Ie,
      onPosition: Ie,
      onShow: Ie
    },
        Re = {
      circular: a.oneOfType([Ae, a.arrayOf(Ae)]),
      height: je,
      maxWidth: ze,
      minWidth: ze,
      multiline: je,
      readOnly: a.oneOfType([Ae, a.arrayOf(Ae)]),
      rows: je,
      showLabel: Ae,
      showScrollArrows: Ae,
      wheels: a.array,
      width: je,
      onChange: Ie,
      validate: Ie,
      onSet: Ie,
      onItemTap: Ie,
      onClear: Ie,
      cancelText: Fe,
      clearText: Fe,
      selectedText: Fe,
      setText: Fe,
      formatValue: Ie,
      parseValue: Ie
    },
        $e = {
      defaultValue: He,
      invalid: a.array,
      max: He,
      min: He,
      returnFormat: a.oneOf(["iso8601", "moment", "locale", "jsdate"]),
      steps: a.shape({
        hour: je,
        minute: je,
        second: je,
        zeroBased: Ae
      }),
      valid: a.array,
      calendarSystem: a.oneOf(["jalali", "hijri", "gregorian"]),
      ampmText: Fe,
      amText: Fe,
      dateFormat: Fe,
      dateWheels: Fe,
      dayNames: a.arrayOf(Fe),
      dayNamesShort: a.arrayOf(Fe),
      dayText: Fe,
      hourText: Fe,
      minuteText: Fe,
      monthNames: a.arrayOf(Fe),
      monthNamesShort: a.arrayOf(Fe),
      monthSuffix: Fe,
      monthText: Fe,
      nowText: Fe,
      pmText: Fe,
      secText: Fe,
      timeFormat: Fe,
      timeWheels: Fe,
      yearSuffix: Fe,
      yearText: Fe
    },
        We = {
      calendarHeight: je,
      calendarScroll: a.oneOf(["horizontal", "vertical"]),
      calendarWidth: je,
      counter: Ae,
      defaultValue: a.oneOfType([He, a.array]),
      events: a.arrayOf(a.shape({
        start: He,
        end: He,
        d: a.oneOfType([Le, je, Fe]),
        text: Fe,
        color: Fe,
        background: Fe,
        cssClass: Fe
      })),
      labels: a.arrayOf(a.shape({
        start: He,
        end: He,
        d: a.oneOfType([Le, je, Fe]),
        text: Fe,
        color: Fe,
        background: Fe,
        cssClass: Fe
      })),
      marked: a.arrayOf(a.oneOfType([Le, je, Fe, a.shape({
        d: a.oneOfType([Le, Fe, je]),
        color: Fe,
        background: Fe,
        cssClass: Fe
      })])),
      colors: a.arrayOf(a.shape({
        d: a.oneOfType([Le, Fe, je]),
        background: Fe,
        cssClass: Fe
      })),
      months: je,
      mousewheel: Ae,
      weeks: je,
      outerMonthChange: Ae,
      showOuterDays: Ae,
      tabs: Ae,
      weekCounter: a.oneOf(["year", "month"]),
      weekDays: a.oneOf(["full", "short", "min"]),
      yearChange: Ae,
      dateText: Fe,
      dayNames: a.arrayOf(Fe),
      dayNamesMin: a.arrayOf(Fe),
      firstDay: je,
      timeText: Fe,
      moreEventsPluralText: Fe,
      moreEventsText: Fe,
      onTabChange: Ie,
      onDayChange: Ie,
      onLabelTap: Ie,
      onMonthChange: Ie,
      onMonthLoading: Ie,
      onMonthLoaded: Ie,
      onPageChange: Ie,
      onPageLoading: Ie,
      onPageLoaded: Ie,
      onSetDate: Ie
    };
  
    function Je(e, a) {
      var n = t.findDOMNode(this),
          s = e.replace(/\s+/g, " ").trim(),
          i = a.replace(/\s+/g, " ").trim();
      s && n.classList.remove.apply(n.classList, s.split(" ")), i && n.classList.add.apply(n.classList, i.split(" "));
    }
  
    function qe(e, t) {
      var a = [],
          n = [];
      return function e(t, s, i) {
        var r;
        if (isNaN(t) && isNaN(s) && "number" == typeof t && "number" == typeof s) return !0;
        if (t === s) return !0;
        if ("function" == typeof t && "function" == typeof s) return !1;
        if (t instanceof Date && s instanceof Date || t instanceof RegExp && s instanceof RegExp || t instanceof String && s instanceof String || t instanceof Number && s instanceof Number) return t.toString() === s.toString();
        if (!(t instanceof Object && s instanceof Object)) return !1;
        if (t.isPrototypeOf(s) || s.isPrototypeOf(t)) return !1;
        if (t.constructor !== s.constructor) return !1;
        if (t.prototype !== s.prototype) return !1;
        if (a.indexOf(t) > -1 || n.indexOf(s) > -1) return !1;
  
        for (r in s) {
          if (s.hasOwnProperty(r) !== t.hasOwnProperty(r)) return !1;
          if (o(s[r]) !== o(t[r])) return !1;
        }
  
        var l = i ? {
          $$typeof: 1,
          key: 1,
          props: 1,
          ref: 1,
          type: 1
        } : t;
  
        for (r in l) {
          if (s.hasOwnProperty(r) !== t.hasOwnProperty(r)) return !1;
          if (o(s[r]) !== o(t[r])) return !1;
  
          switch (o(t[r])) {
            case "object":
            case "function":
              if (a.push(t), n.push(s), !e(t[r], s[r], t[r] && void 0 !== t[r].$$typeof)) return !1;
              a.pop(), n.pop();
              break;
  
            default:
              if (t[r] !== s[r]) return !1;
          }
        }
  
        return !0;
      }(e, t);
    }
  
    var Be,
        Ke,
        Ge,
        Xe,
        Ze,
        Qe,
        et = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.initialCssClass = a.props.className || "", a;
      }
  
      return u(t, e), l(t, [{
        key: "render",
        value: function value() {
          return null;
        }
      }, {
        key: "getSettingsFromProps",
        value: function value(e, t) {
          var a = {};
  
          if (void 0 !== e) {
            /* eslint-disable no-unused-vars */
            var n = e.options,
                s = (e.children, e.value, e.checked, e.data, e.className, function (e, t) {
              var a = {};
  
              for (var n in e) {
                t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
              }
  
              return a;
            }(e, ["options", "children", "value", "checked", "data", "className"])),
                i = n || "{}";
            a = n || {}, void 0 !== n && "string" == typeof i && (a = new Function("return " + i + ";")()), a = Se({}, a, s, t || {});
          }
  
          return a;
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          this.instance.destroy(), delete this.instance;
        }
      }]), t;
    }(e.Component),
        tt = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.updateForIonInput = t.updateForIonInput.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "updateForIonInput",
        value: function value() {
          this.valueState && (this.optimizeUpdate = null, this.forceUpdate());
        }
      }, {
        key: "isIonInput",
        value: function value(t) {
          return t && 1 == e.Children.count(t) && t.type && t.type.render && "IonInput" === t.type.render.displayName;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.optimizeUpdate ? (this.optimizeUpdate.updateOptions && this.instance.option(e), this.optimizeUpdate.updateValue && void 0 !== this.props.value && !qe(this.props.value, this.instance.getVal()) && this.instance.setVal(this.props.value, !0), this.updateForIonInput()) : null !== this.optimizeUpdate && (this.instance.option(e), void 0 !== this.props.value && this.instance.setVal(this.props.value, !0));
        }
      }]), a;
    }(),
        at = function (e) {
      function t(e) {
        return r(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }
  
      return u(t, tt), l(t, [{
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = !qe(this.getSettingsFromProps(e), this.getSettingsFromProps(this.props)),
              a = !qe(e.value, this.props.value),
              n = !qe(e.children, this.props.children);
          return this.optimizeUpdate = {
            updateOptions: t,
            updateValue: a,
            updateChildren: n
          }, t || a || n;
        }
      }]), t;
    }(),
        nt = (Ne = Oe = function (a) {
      function n() {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
      }
  
      return u(n, at), l(n, [{
        key: "render",
        value: function value() {
          var t = this.props,
              a = t.type,
              n = t.readOnly,
              s = t.disabled,
              i = t.placeholder,
              o = t.children;
  
          if (a = a || "text", this.isIonInput(o)) {
            this.valueState = !0;
            var r = this.instance ? this.instance._value : "";
            return e.cloneElement(o, Ve({
              value: r
            }, o.props));
          }
  
          return o ? this.props.children : e.createElement("input", {
            className: this.initialCssClass,
            type: a,
            readOnly: n,
            disabled: s,
            placeholder: i
          });
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props, this.mbscInit),
              a = t.findDOMNode(this),
              n = ye(a).find("input");
          n.length && (a = n), this.instance = new we[this.mbscInit.component || "Scroller"](a, e), void 0 !== this.props.value && (this.instance.setVal(this.props.value, !0), this.updateForIonInput());
        }
      }]), n;
    }(), Oe.propTypes = Ve({}, Ue, Ye, {
      type: a.string,
      placeholder: a.string
    }), Ne),
        st = (Ee = Pe = function (a) {
      function n() {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
      }
  
      return u(n, at), l(n, [{
        key: "render",
        value: function value() {
          return e.createElement("ul", {
            className: this.initialCssClass + " mbsc-cloak"
          }, this.props.children);
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props, this.mbscInit),
              a = t.findDOMNode(this);
          this.instance = new we[this.mbscInit.component || "Scroller"](a, e), void 0 !== this.props.value && this.instance.setVal(this.props.value, !0), (this.instance._markup || ye(a)).on("click", function (e) {
            e.stopPropagation();
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          !this.optimizeUpdate.updateOptions && this.optimizeUpdate.updateChildren && this.instance.option(this.getSettingsFromProps(this.props));
          var e = t.findDOMNode(this);
          (this.instance._markup || ye(e)).on("click", function (e) {
            e.stopPropagation();
          });
        }
      }]), n;
    }(), Pe.propTypes = Ve({}, Ue, Ye, Re), Ee);
  
    function it(e) {
      var t;
  
      for (t in e) {
        if (void 0 !== Ke[e[t]]) return !0;
      }
  
      return !1;
    }
  
    function ot(e, t) {
      if ("touchstart" == e.type) ye(t).attr("data-touch", "1");else if (ye(t).attr("data-touch")) return ye(t).removeAttr("data-touch"), !1;
      return !0;
    }
  
    function rt(e, t) {
      var a,
          n = getComputedStyle(e[0]);
      return ye.each(["t", "webkitT", "MozT", "OT", "msT"], function (e, t) {
        if (void 0 !== n[t + "ransform"]) return a = n[t + "ransform"], !1;
      }), a = a.split(")")[0].split(", "), t ? a[13] || a[5] : a[12] || a[4];
    }
  
    function lt(e) {
      if (e) {
        if (ut[e]) return ut[e];
        var t = ye('<div style="background-color:' + e + ';"></div>').appendTo("body"),
            a = getComputedStyle(t[0]).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
            n = .299 * a[0] + .587 * a[1] + .114 * a[2] < 130 ? "#fff" : "#000";
        return t.remove(), ut[e] = n, n;
      }
    }
  
    function ct(e, t, a, n) {
      var s = ye(e);
      a ? (s.scrollTop(t), n && n()) : function e(t, a, n, s, i) {
        var o = Math.min(1, (new Date() - a) / 468),
            r = .5 * (1 - Math.cos(Math.PI * o)),
            l = n + (s - n) * r;
        t.scrollTop(l), l !== s ? V(function () {
          e(t, a, n, s, i);
        }) : i && i();
      }(s, new Date(), s.scrollTop(), t, n);
    }
  
    var ut = {};
  
    function dt(e, t, a, n, s, i) {
      var o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f = n || F;
  
      function v(e) {
        var t;
        o = ye(this), p = +o.attr("data-step"), l = +o.attr("data-index"), r = !0, s && e.stopPropagation(), "mousedown" == e.type && e.preventDefault(), "keydown" != e.type ? (d = G(e, "X"), m = G(e, "Y"), t = ot(e, this)) : t = 32 === e.keyCode, c || !t || o.hasClass("mbsc-disabled") || (y(l, p, e) && (o.addClass("mbsc-active"), i && i.addRipple(o.find(".mbsc-segmented-content"), e)), "mousedown" == e.type && ye(document).on("mousemove", b).on("mouseup", g));
      }
  
      function b(e) {
        (Math.abs(d - G(e, "X")) > 7 || Math.abs(m - G(e, "Y")) > 7) && (r = !0, x());
      }
  
      function g(e) {
        "touchend" == e.type && e.preventDefault(), x(), "mouseup" == e.type && ye(document).off("mousemove", b).off("mouseup", g);
      }
  
      function x() {
        c = !1, clearInterval(h), o && (o.removeClass("mbsc-active"), i && setTimeout(function () {
          i.removeRipple();
        }, 100));
      }
  
      function y(e, t, a) {
        return c || f(e) || (l = e, p = t, u = a, c = !0, r = !1, setTimeout(T, 100)), c;
      }
  
      function T() {
        o && o.hasClass("mbsc-disabled") ? x() : (!c && r || (r = !0, t(l, p, u, T)), c && a && (clearInterval(h), h = setInterval(function () {
          t(l, p, u);
        }, a)));
      }
  
      return e.on("touchstart mousedown keydown", v).on("touchmove", b).on("touchend touchcancel keyup", g), {
        start: y,
        stop: x,
        destroy: function destroy() {
          e.off("touchstart mousedown keydown", v).off("touchmove", b).off("touchend touchcancel keyup", g);
        }
      };
    }
  
    O && (Ke = document.createElement("modernizr").style, Ge = function () {
      var e,
          t = ["Webkit", "Moz", "O", "ms"];
  
      for (e in t) {
        if (it([t[e] + "Transform"])) return "-" + t[e].toLowerCase() + "-";
      }
  
      return "";
    }(), Qe = Ge.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz"), Be = void 0 !== Ke.animation ? "animationend" : "webkitAnimationEnd", Ze = void 0 !== Ke.transition, Xe = void 0 === Ke.touchAction || "ios" == _ && !P && (C < 12 || 12 == C && S < 2));
    var mt,
        pt,
        ht = "position:absolute;left:0;top:0;",
        ft = ht + "right:0;bottom:0;overflow:hidden;z-index:-1;",
        vt = '<div style="' + ft + '"><div style="' + ht + '"></div></div><div style="' + ft + '"><div style="' + ht + 'width:200%;height:200%;"></div></div>';
  
    function bt(e, t, a) {
      function n() {
        l.style.width = "100000px", l.style.height = "100000px", r.scrollLeft = 1e5, r.scrollTop = 1e5, d.scrollLeft = 1e5, d.scrollTop = 1e5;
      }
  
      function s() {
        var e = new Date();
        c = 0, m || (e - p > 200 && !r.scrollTop && !r.scrollLeft && (p = e, n()), c || (c = V(s)));
      }
  
      function i() {
        u || (u = V(o));
      }
  
      function o() {
        u = 0, n(), t();
      }
  
      var r = void 0,
          l = void 0,
          c = void 0,
          u = void 0,
          d = void 0,
          m = void 0,
          p = 0,
          h = document.createElement("div");
      return h.innerHTML = vt, h.dir = "ltr", d = h.childNodes[1], r = h.childNodes[0], l = r.childNodes[0], e.appendChild(h), r.addEventListener("scroll", i), d.addEventListener("scroll", i), a ? a.runOutsideAngular(function () {
        V(s);
      }) : V(s), {
        detach: function detach() {
          e.removeChild(h), m = !0;
        }
      };
    }
  
    var gt = n.themes,
        xt = /(iphone|ipod)/i.test(N) && C >= 7,
        yt = "android" == _,
        Tt = "ios" == _,
        _t = Tt && 8 == C,
        wt = Tt && C > 7,
        Ct = function Ct(e) {
      e.preventDefault();
    },
        St = "input,select,textarea,button",
        Mt = 'textarea,button,input[type="button"],input[type="submit"]',
        kt = St + ',[tabindex="0"]',
        Dt = function Dt(e, t, a) {
      var s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O,
          N,
          P,
          E,
          V,
          A,
          I,
          j,
          L = this,
          U = ye(e),
          Y = [],
          R = new Date();
  
      function $(e) {
        h && h.removeClass("mbsc-active"), (h = ye(this)).hasClass("mbsc-disabled") || h.hasClass("mbsc-fr-btn-nhl") || h.addClass("mbsc-active"), "mousedown" === e.type ? ye(document).on("mouseup", W) : "pointerdown" === e.type && ye(document).on("pointerup", W);
      }
  
      function W(e) {
        h && (h.removeClass("mbsc-active"), h = null), "mouseup" === e.type ? ye(document).off("mouseup", W) : "pointerup" === e.type && ye(document).off("pointerup", W);
      }
  
      function J(e) {
        n.activeInstance == L && (13 != e.keyCode || ye(e.target).is(Mt) && !e.shiftKey ? 27 == e.keyCode && L.cancel() : L.select());
      }
  
      function q(e) {
        e || yt || !L._activeElm || (R = new Date(), L._activeElm.focus());
      }
  
      function K(e) {
        var t = mt,
            a = P.focusOnClose;
        L._markupRemove(), r.remove(), g && (f.mbscModals--, P.scrollLock && f.mbscLock--, f.mbscLock || o.removeClass("mbsc-fr-lock"), S && (f.mbscIOSLock--, f.mbscIOSLock || (o.removeClass("mbsc-fr-lock-ios"), s.css({
          top: "",
          left: ""
        }), d.scrollLeft(f.mbscScrollLeft), d.scrollTop(f.mbscScrollTop))), f.mbscModals || o.removeClass("mbsc-fr-lock-ctx"), f.mbscModals && !N || e || (t || (t = U), setTimeout(function () {
          void 0 === a || !0 === a ? (pt = !0, t[0].focus()) : a && ye(a)[0].focus();
        }, 200))), N = void 0, x = !1, A("onHide");
      }
  
      function X() {
        clearTimeout(O), O = setTimeout(function () {
          L.position(!0) && (D.style.visibility = "hidden", D.offsetHeight, D.style.visibility = "");
        }, 200);
      }
  
      function Z(e) {
        n.activeInstance == L && e.target.nodeType && !k.contains(e.target) && new Date() - R > 100 && (R = new Date(), L._activeElm.focus());
      }
  
      function Q(e, t) {
        if (g) r.appendTo(s);else if (U.is("div") && !L._hasContent) U.empty().append(r);else if (U.hasClass("mbsc-control")) {
          var a = U.closest(".mbsc-control-w");
          r.insertAfter(a), a.hasClass("mbsc-select") && a.addClass("mbsc-select-inline");
        } else r.insertAfter(U);
        x = !0, L._markupInserted(r), A("onMarkupInserted", {
          target: T
        }), r.on("mousedown", ".mbsc-btn-e,.mbsc-fr-btn-e", Ct).on("touchstart mousedown", function (e) {
          P.stopProp && e.stopPropagation();
        }).on("keydown", ".mbsc-fr-btn-e", function (e) {
          32 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.click());
        }).on("keydown", function (e) {
          if (32 != e.keyCode || ye(e.target).is(St)) {
            if (9 == e.keyCode && g && P.focusTrap) {
              var t = r.find(kt).filter(function () {
                return this.offsetWidth > 0 || this.offsetHeight > 0;
              }),
                  a = t.index(ye(":focus", r)),
                  n = t.length - 1,
                  s = 0;
              e.shiftKey && (n = 0, s = -1), a === n && (t.eq(s)[0].focus(), e.preventDefault());
            }
          } else e.preventDefault();
        }).on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", $).on("touchend", ".mbsc-fr-btn-e", W), T.addEventListener("touchstart", function () {
          V || (V = !0, s.find(".mbsc-no-touch").removeClass("mbsc-no-touch"));
        }, !0), ye.each(p, function (e, t) {
          L.tap(ye(".mbsc-fr-btn" + e, r), function (e) {
            (H((t = H(t) ? L.buttons[t] : t).handler) ? L.handlers[t.handler] : t.handler).call(this, e, L);
          }, !0);
        }), L._attachEvents(r), !1 !== L.position() && (M = bt(T, X, P.zone), g && (r.removeClass("mbsc-fr-pos"), v && !e ? r.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + v).on(Be, function e() {
          r.off(Be, e).removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + v).find(".mbsc-fr-popup").removeClass("mbsc-anim-" + v), q(t);
        }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + v) : q(t)), A("onShow", {
          target: T,
          valueText: L._tempValue
        }));
      }
  
      function ee(e, t) {
        L._isVisible || (e && e(), !1 !== L.show() && (mt = t));
      }
  
      function te() {
        L._fillValue(), A("onSet", {
          valueText: L._value
        });
      }
  
      function ae() {
        A("onCancel", {
          valueText: L._value
        });
      }
  
      function ne() {
        L.setVal(null, !0);
      }
  
      Me.call(this, e, t, !0), L.position = function (e) {
        var t,
            a,
            n,
            i,
            o,
            l,
            p,
            h,
            v,
            y,
            S,
            M,
            k,
            O,
            N,
            V,
            F,
            H,
            Y,
            R = {},
            $ = 0,
            W = 0,
            J = 0,
            q = 0;
        if (!x) return !1;
  
        if (V = I, N = j, k = T.offsetHeight, (O = T.offsetWidth) && k && (I !== O || j !== k || !e)) {
          if (L._checkResp(O)) return !1;
          if (I = O, j = k, L._isFullScreen || /top|bottom/.test(P.display) ? u.width(O) : g && m.width(""), L._position(r), !L._isFullScreen && /center|bubble/.test(P.display) && (ye(".mbsc-w-p", r).each(function () {
            F = this.getBoundingClientRect().width, q += F, J = F > J ? F : J;
          }), M = q > O - 16 || !0 === P.tabs, m.css({
            width: L._isLiquid ? Math.min(P.maxPopupWidth, O - 16) : Math.ceil(M ? J : q),
            "white-space": M ? "" : "nowrap"
          })), !1 !== A("onPosition", {
            target: T,
            popup: D,
            hasTabs: M,
            oldWidth: V,
            oldHeight: N,
            windowWidth: O,
            windowHeight: k
          }) && g) return C && ($ = d.scrollLeft(), W = d.scrollTop(), I && c.css({
            width: "",
            height: ""
          })), _ = D.offsetWidth, w = D.offsetHeight, E = w <= k && _ <= O, "center" == P.display ? (Y = Math.max(0, $ + (O - _) / 2), H = Math.max(0, W + (k - w) / 2)) : "bubble" == P.display ? (t = void 0 === P.anchor ? U : ye(P.anchor), p = ye(".mbsc-fr-arr-i", r)[0], o = (i = t.offset()).top + (b ? W - s.offset().top : 0), l = i.left + (b ? $ - s.offset().left : 0), a = t[0].offsetWidth, n = t[0].offsetHeight, h = p.offsetWidth, v = p.offsetHeight, Y = z(l - (_ - a) / 2, $ + 3, $ + O - _ - 3), (H = o + n + v / 2) + w + 8 > W + k && o - w - v / 2 > W ? (u.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"), H = o - w - v / 2) : u.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"), ye(".mbsc-fr-arr", r).css({
            left: z(l + a / 2 - (Y + (_ - h) / 2), 0, h)
          }), E = H > W && Y > $ && H + w <= W + k && Y + _ <= $ + O) : (Y = $, H = "top" == P.display ? W : Math.max(0, W + k - w)), C && (y = Math.max(H + w, b ? f.scrollHeight : ye(document).height()), S = Math.max(Y + _, b ? f.scrollWidth : ye(document).width()), c.css({
            width: S,
            height: y
          }), P.scroll && "bubble" == P.display && (H + w + 8 > W + k || o > W + k || o + n < W) && d.scrollTop(Math.min(o, H + w - k + 8, y - k))), R.top = Math.floor(H), R.left = Math.floor(Y), u.css(R), !0;
        }
      }, L.attachShow = function (e, t) {
        var a,
            n = ye(e).off(".mbsc"),
            s = n.prop("readonly");
        "inline" !== P.display && ((P.showOnFocus || P.showOnTap) && n.is("input,select") && (n.prop("readonly", !0).on("mousedown.mbsc", function (e) {
          e.preventDefault();
        }).on("focus.mbsc", function () {
          L._isVisible && this.blur();
        }), (a = ye('label[for="' + n.attr("id") + '"]')).length || (a = n.closest("label"))), n.is("select") || (P.showOnFocus && n.on("focus.mbsc", function () {
          pt ? pt = !1 : ee(t, n);
        }), P.showOnTap && (n.on("keydown.mbsc", function (e) {
          32 != e.keyCode && 13 != e.keyCode || (e.preventDefault(), e.stopPropagation(), ee(t, n));
        }), L.tap(n, function (e) {
          e.isMbscTap && (V = !0), ee(t, n);
        }), a && a.length && L.tap(a, function (e) {
          e.preventDefault(), e.target !== n[0] && ee(t, n);
        }))), Y.push({
          readOnly: s,
          el: n,
          lbl: a
        }));
      }, L.select = function () {
        g ? L.hide(!1, "set", !1, te) : te();
      }, L.cancel = function () {
        g ? L.hide(!1, "cancel", !1, ae) : ae();
      }, L.clear = function () {
        L._clearValue(), A("onClear"), g && L._isVisible && !L.live ? L.hide(!1, "clear", !1, ne) : ne();
      }, L.enable = function () {
        P.disabled = !1, ye.each(Y, function (e, t) {
          t.el.is("input,select") && (t.el[0].disabled = !1);
        });
      }, L.disable = function () {
        P.disabled = !0, ye.each(Y, function (e, t) {
          t.el.is("input,select") && (t.el[0].disabled = !0);
        });
      }, L.show = function (e, t) {
        var a, h, x;
  
        if (!P.disabled && !L._isVisible) {
          if (L._readValue(), !1 === A("onBeforeShow")) return !1;
  
          var _, w, M, O;
  
          if (mt = null, v = P.animate, p = P.buttons || [], C = b || "bubble" == P.display, S = xt && !C && P.scrollLock, p.length > 0, !1 !== v && ("top" == P.display ? v = v || "slidedown" : "bottom" == P.display ? v = v || "slideup" : "center" != P.display && "bubble" != P.display || (v = v || "pop")), g && (I = 0, j = 0, S && !o.hasClass("mbsc-fr-lock-ios") && (f.mbscScrollTop = x = Math.max(0, d.scrollTop()), f.mbscScrollLeft = h = Math.max(0, d.scrollLeft()), s.css({
            top: -x + "px",
            left: -h + "px"
          })), o.addClass((P.scrollLock ? "mbsc-fr-lock" : "") + (S ? " mbsc-fr-lock-ios" : "") + (b ? " mbsc-fr-lock-ctx" : "")), ye(document.activeElement).is("input,textarea") && document.activeElement.blur(), N = n.activeInstance, n.activeInstance = L, f.mbscModals = (f.mbscModals || 0) + 1, S && (f.mbscIOSLock = (f.mbscIOSLock || 0) + 1), P.scrollLock && (f.mbscLock = (f.mbscLock || 0) + 1)), a = L.remote.html1.replace("mbsc-no-touch", "") + " mbsc-fr-" + P.display + " " + (P.cssClass || "") + " " + (P.compClass || "") + (g ? " mbsc-fr-pos" + (P.showOverlay ? "" : " mbsc-fr-no-overlay") : "") + (y ? " mbsc-fr-pointer" : "") + (L._isLiquid ? " mbsc-fr-liq" : "") + (wt ? " mbsc-fr-hb" : "") + (V ? "" : " mbsc-no-touch") + L.remote.html2 + (P.headerText ? " mbsc-fr-has-hdr" : "") + '">' + ("bubble" === P.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : "") + L.remote.html3 + (P.headerText ? '<div class="mbsc-fr-hdr">' + (H(P.headerText) ? P.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">', a += L._generateContent(), a += L.remote.html4, r = ye(a), c = ye(".mbsc-fr-persp", r), l = ye(".mbsc-fr-scroll", r), m = ye(".mbsc-fr-w", r), u = ye(".mbsc-fr-popup", r), i = ye(".mbsc-fr-hdr", r), T = r[0], k = l[0], D = u[0], L._activeElm = ye(".mbsc-fr-focus", r)[0], L._markup = r, L._isVisible = !0, L.markup = T, L._markupReady(r), A("onMarkupReady", {
            target: T
          }), g) if (ye(window).on("keydown", J), P.scrollLock && r.on("touchmove mousewheel wheel", function (e) {
            E && e.preventDefault();
          }), P.focusTrap && d.on("focusin", Z), P.closeOnOverlayTap) l.on("touchstart mousedown", function (e) {
            w || e.target != k || (w = !0, _ = !1, M = G(e, "X"), O = G(e, "Y"));
          }).on("touchmove mousemove", function (e) {
            w && !_ && (Math.abs(G(e, "X") - M) > 9 || Math.abs(G(e, "Y") - O) > 9) && (_ = !0);
          }).on("touchcancel", function () {
            w = !1;
          }).on("touchend click", function (e) {
            w && !_ && (L.cancel(), "touchend" == e.type && B()), w = !1;
          });
          g && S ? setTimeout(function () {
            Q(e, t);
          }, 100) : Q(e, t);
        }
      }, L.hide = function (e, t, a, s) {
        if (!L._isVisible || !a && !L._isValid && "set" == t || !a && !1 === A("onBeforeClose", {
          valueText: L._tempValue,
          button: t
        })) return !1;
        L._isVisible = !1, M && (M.detach(), M = null), g && (ye(document.activeElement).is("input,textarea") && D.contains(document.activeElement) && document.activeElement.blur(), n.activeInstance == L && (n.activeInstance = N), ye(window).off("keydown", J), d.off("focusin", Z)), r && (g && v && !e ? r.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + v).on(Be, function t() {
          r.off(Be, t), K(e);
        }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + v) : K(e), L._detachEvents(r)), s && s(), U.trigger("blur"), A("onClose", {
          valueText: L._value
        });
      }, L.isVisible = function () {
        return L._isVisible;
      }, L.setVal = F, L.getVal = F, L._generateContent = F, L._attachEvents = F, L._detachEvents = F, L._readValue = F, L._clearValue = F, L._fillValue = F, L._markupReady = F, L._markupInserted = F, L._markupRemove = F, L._position = F, L.__processSettings = F, L.__init = F, L.__destroy = F, L._destroy = function () {
        L.hide(!0, !1, !0), U.off(".mbsc"), ye.each(Y, function (e, t) {
          t.el.off(".mbsc").prop("readonly", t.readOnly), t.lbl && t.lbl.off(".mbsc");
        }), L.__destroy();
      }, L._updateHeader = function () {
        var t = P.headerText,
            a = t ? "function" == typeof t ? t.call(e, L._tempValue) : t.replace(/\{value\}/i, L._tempValue) : "";
        i.html(a || "&nbsp;");
      }, L._processSettings = function (e) {
        var a, n;
  
        for (L.__processSettings(e), (y = !P.touchUi) && (P.display = e.display || t.display || "bubble", P.buttons = e.buttons || t.buttons || [], P.showOverlay = e.showOverlay || t.showOverlay || !1), P.buttons = P.buttons || ("inline" !== P.display ? ["cancel", "set"] : []), P.headerText = void 0 === P.headerText ? "inline" !== P.display && "{value}" : P.headerText, p = P.buttons || [], g = "inline" !== P.display, b = "body" != P.context, s = ye(P.context), o = b ? s : ye("body,html"), f = s[0], L._$window = d = ye(b ? P.context : window), L.live = !0, n = 0; n < p.length; n++) {
          "ok" != (a = p[n]) && "set" != a && "set" != a.handler || (L.live = !1);
        }
  
        L.buttons.set = {
          text: P.setText,
          icon: P.setIcon,
          handler: "set"
        }, L.buttons.cancel = {
          text: P.cancelText,
          icon: P.cancelIcon,
          handler: "cancel"
        }, L.buttons.close = {
          text: P.closeText,
          icon: P.closeIcon,
          handler: "cancel"
        }, L.buttons.clear = {
          text: P.clearText,
          icon: P.clearIcon,
          handler: "clear"
        }, L._isInput = U.is("input");
      }, L._init = function (e) {
        var t = L._isVisible,
            a = t && !r.hasClass("mbsc-fr-pos");
        t && L.hide(!0, !1, !0), U.off(".mbsc"), L.__init(e), L._isLiquid = "liquid" == P.layout, g ? (L._readValue(), L._hasContent || P.skipShow || L.attachShow(U), t && L.show(a)) : L.show(), U.removeClass("mbsc-cloak").filter("input, select, textarea").on("change.mbsc", function () {
          L._preventChange || L.setVal(U.val(), !0, !1), L._preventChange = !1;
        });
      }, L.buttons = {}, L.handlers = {
        set: L.select,
        cancel: L.cancel,
        clear: L.clear
      }, L._value = null, L._isValid = !0, L._isVisible = !1, P = L.settings, A = L.trigger, a || L.init();
    };
  
    Dt.prototype._defaults = {
      lang: "en",
      setText: "Set",
      selectedText: "{count} selected",
      closeText: "Close",
      cancelText: "Cancel",
      clearText: "Clear",
      context: "body",
      maxPopupWidth: 600,
      disabled: !1,
      closeOnOverlayTap: !0,
      showOnFocus: yt || Tt,
      showOnTap: !0,
      display: "center",
      scroll: !0,
      scrollLock: !0,
      showOverlay: !0,
      tap: !0,
      touchUi: !0,
      btnClass: "mbsc-fr-btn",
      btnWidth: !0,
      focusTrap: !0,
      focusOnClose: !_t
    }, we.Frame = Dt, gt.frame.mobiscroll = {
      headerText: !1,
      btnWidth: !1
    }, gt.scroller.mobiscroll = Se({}, gt.frame.mobiscroll, {
      rows: 5,
      showLabel: !1,
      selectedLineBorder: 1,
      weekDays: "min",
      checkIcon: "ion-ios7-checkmark-empty",
      btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
      btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
      btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
      btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }), O && ye(window).on("focus", function () {
      mt && (pt = !0);
    })
    /* eslint-disable no-unused-vars */
    ;
  
    var Ot = "ios" == _,
        Nt = function Nt(e, t, a) {
      var s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O,
          N,
          P,
          E,
          F,
          I,
          j,
          U,
          Y,
          R,
          $,
          W,
          J,
          q,
          B,
          K,
          X,
          Z,
          Q,
          ee,
          te = this,
          ae = 0,
          ne = 1,
          se = t,
          ie = ye(e);
  
      function oe(e) {
        Z("onStart", {
          domEvent: e
        }), se.stopProp && e.stopPropagation(), se.prevDef && e.preventDefault(), se.readonly || se.lock && C || ot(e, this) && !w && n.XdAQT && (s && s.removeClass("mbsc-active"), g = !1, C || (s = ye(e.target).closest(".mbsc-btn-e", this)).length && !s.hasClass("mbsc-disabled") && (g = !0, r = setTimeout(function () {
          s.addClass("mbsc-active");
        }, 100)), w = !0, E = !1, S = !1, te.scrolled = C, W = G(e, "X"), J = G(e, "Y"), f = W, c = 0, u = 0, d = 0, $ = new Date(), R = +rt(B, Q) || 0, C && be(R, Ot ? 0 : 1), "mousedown" === e.type && ye(document).on("mousemove", re).on("mouseup", ce));
      }
  
      function re(e) {
        w && (se.stopProp && e.stopPropagation(), f = G(e, "X"), v = G(e, "Y"), c = f - W, u = v - J, d = Q ? u : c, g && (Math.abs(u) > se.thresholdY || Math.abs(c) > se.thresholdX) && (clearTimeout(r), s.removeClass("mbsc-active"), g = !1), (te.scrolled || !S && Math.abs(d) > X) && (E || Z("onGestureStart", b), te.scrolled = E = !0, k || (k = !0, M = V(le))), Q || se.scrollLock ? e.preventDefault() : te.scrolled ? e.preventDefault() : Math.abs(u) > 7 && (S = !0, te.scrolled = !0, ce()));
      }
  
      function le() {
        T && (d = z(d, -U * T, U * T)), be(z(R + d, _ - h, y + h)), k = !1;
      }
  
      function ce(e) {
        if (w) {
          var t,
              a = new Date() - $;
          se.stopProp && e && e.stopPropagation(), A(M), k = !1, !S && te.scrolled && (se.momentum && a < 300 && (t = d / a, d = Math.max(Math.abs(d), t * t / se.speedUnit) * (d < 0 ? -1 : 1)), ve(d)), g && (clearTimeout(r), s.addClass("mbsc-active"), setTimeout(function () {
            s.removeClass("mbsc-active");
          }, 100), S || te.scrolled || Z("onBtnTap", {
            target: s[0],
            domEvent: e
          })), e && "mouseup" == e.type && ye(document).off("mousemove", re).off("mouseup", ce), w = !1;
        }
      }
  
      function ue(e) {
        if (e = e.originalEvent || e, d = Q ? void 0 == e.deltaY ? e.wheelDelta || e.detail : e.deltaY : e.deltaX, Z("onStart", {
          domEvent: e
        }), se.stopProp && e.stopPropagation(), d && n.XdAQT) {
          if (e.preventDefault(), e.deltaMode && 1 == e.deltaMode && (d *= 15), d = z(-d, -I, I), R = ee, se.readonly) return;
          if (E || fe(), R + d < _ && (R = _, d = 0), R + d > y && (R = y, d = 0), k || (k = !0, M = V(le)), !d && E) return;
          E = !0, clearTimeout(F), F = setTimeout(function () {
            A(M), k = !1, E = !1, ve(d);
          }, 200);
        }
      }
  
      function de(e) {
        Z("onStart", {
          domEvent: e
        }), se.readonly || (e.stopPropagation(), R = ee, E = !1, e.target == D ? (J = G(e, "Y", !0), ye(document).on("mousemove", me).on("mouseup", pe)) : (J = i.offset().top, me(e), pe()));
      }
  
      function me(e) {
        var t = (G(e, "Y", !0) - J) / l;
        d = x ? z(d = -(T * U * 2 + l) * t, -U * T, U * T) : (_ - y - l) * t, E || fe(), E = !0, be(z(R + d, _ - h, y + h));
      }
  
      function pe() {
        R = ee, ve(0), ye(document).off("mousemove", me).off("mouseup", pe);
      }
  
      function he(e) {
        e.stopPropagation();
      }
  
      function fe() {
        Z("onGestureStart", b = {
          posX: Q ? 0 : ee,
          posY: Q ? ee : 0,
          originX: Q ? 0 : R,
          originY: Q ? R : 0,
          direction: d > 0 ? Q ? 270 : 360 : Q ? 90 : 180
        });
      }
  
      function ve(e) {
        var t, a, n;
  
        if (T && (e = z(e, -U * T, U * T)), n = z(Math.round((R + e) / U) * U, _, y), Y) {
          if (e < 0) {
            for (t = Y.length - 1; t >= 0; t--) {
              if (Math.abs(n) + l >= Y[t].breakpoint) {
                ae = t, ne = 2, n = Y[t].snap2;
                break;
              }
            }
          } else if (e >= 0) for (t = 0; t < Y.length; t++) {
            if (Math.abs(n) <= Y[t].breakpoint) {
              ae = t, ne = 1, n = Y[t].snap1;
              break;
            }
          }
  
          n = z(n, _, y);
        }
  
        a = se.time || (ee < _ || ee > y ? 1e3 : Math.max(1e3, Math.abs(n - ee) * se.timeUnit)), b.destinationX = Q ? 0 : n, b.destinationY = Q ? n : 0, b.duration = a, b.transitionTiming = p, Z("onGestureEnd", b), te.scroll(n, a);
      }
  
      function be(e, t, a, n) {
        var s,
            i = e != ee,
            o = t > 1,
            r = t ? Ge + "transform " + Math.round(t) + "ms " + p : "",
            c = function c() {
          clearInterval(j), clearTimeout(K), C = !1, ee = e, b.posX = Q ? 0 : e, b.posY = Q ? e : 0, i && Z("onMove", b), o && Z("onAnimationEnd", b), n && n();
        };
  
        b = {
          posX: Q ? 0 : ee,
          posY: Q ? ee : 0,
          originX: Q ? 0 : R,
          originY: Q ? R : 0,
          direction: e - ee > 0 ? Q ? 270 : 360 : Q ? 90 : 180
        }, ee = e, o && (b.destinationX = Q ? 0 : e, b.destinationY = Q ? e : 0, b.duration = t, b.transitionTiming = p, Z("onAnimationStart", b)), q[Qe + "Transition"] = r, q[Qe + "Transform"] = "translate3d(" + (Q ? "0," + e + "px," : e + "px,0,") + "0)", D && O && (s = x ? (N - e) / (T * U * 2) : (e - y) / (_ - y), D.style[Qe + "Transition"] = r, D.style[Qe + "Transform"] = "translate3d(0," + Math.max(0, Math.min((l - O) * s, l - O)) + "px,0)"), !i && !C || !t || t <= 1 ? c() : t && (C = !a, clearInterval(j), j = setInterval(function () {
          var t = +rt(B, Q) || 0;
          b.posX = Q ? 0 : t, b.posY = Q ? t : 0, Z("onMove", b), Math.abs(t - e) < 2 && c();
        }, 100), clearTimeout(K), K = setTimeout(function () {
          c();
        }, t)), se.sync && se.sync(e, t, p);
      }
  
      Me.call(this, e, t, !0), te.scrolled = !1, te.scroll = function (t, a, n, s) {
        t = z(t = L(t) ? Math.round(t / U) * U : Math.ceil((ye(t, e).length ? Math.round(B.offset()[m] - ye(t, e).offset()[m]) : ee) / U) * U, _, y), ae = Math.round(t / U), R = ee, N = T * U + t, be(t, a, n, s);
      }, te.refresh = function (e) {
        var t;
  
        for (l = (void 0 === se.contSize ? Q ? ie.height() : ie.width() : se.contSize) || 0, y = (void 0 === se.maxScroll ? 0 : se.maxScroll) || 0, _ = Math.min(y, void 0 === se.minScroll ? Math.min(0, Q ? l - B.height() : l - B.width()) : se.minScroll) || 0, Y = null, !Q && se.rtl && (t = y, y = -_, _ = -t), H(se.snap) && (Y = [], B.find(se.snap).each(function () {
          var e = Q ? this.offsetTop : this.offsetLeft,
              t = Q ? this.offsetHeight : this.offsetWidth;
          Y.push({
            breakpoint: e + t / 2,
            snap1: -e,
            snap2: l - e - t
          });
        })), U = L(se.snap) ? se.snap : 1, T = se.snap ? se.maxSnapScroll : 0, p = se.easing, h = se.elastic ? L(se.snap) ? U : L(se.elastic) ? se.elastic : 0 : 0, I = U; I > 44;) {
          I /= 2;
        }
  
        I = Math.round(44 / I) * I, D && (x = _ == -1 / 0 || y == 1 / 0, O = _ < y ? Math.max(20, l * l / (y - _ + l)) : 0, D.style.height = O + "px", P.style.height = O ? "" : 0), void 0 === ee && (ee = se.initialPos, ae = Math.round(ee / U)), e || te.scroll(se.snap ? Y ? Y[ae]["snap" + ne] : ae * U : ee);
      }, te._processSettings = function () {
        Q = "Y" == se.axis, m = Q ? "top" : "left", B = se.moveElement || ie.children().eq(0), q = B[0].style, X = Q ? se.thresholdY : se.thresholdX, se.scrollbar && (o = se.scrollbar, i = o.find(".mbsc-sc-bar"), D = i[0], P = o[0]);
      }, te._init = function () {
        te.refresh(), ie.on("touchstart mousedown", oe).on("touchmove", re).on("touchend touchcancel", ce), se.mousewheel && ie.on("wheel mousewheel", ue), D && o.on("mousedown", de).on("click", he), e.addEventListener("click", function (e) {
          te.scrolled && (te.scrolled = !1, e.stopPropagation(), e.preventDefault());
        }, !0);
      }, te._destroy = function () {
        clearInterval(j), ie.off("touchstart mousedown", oe).off("touchmove", re).off("touchend touchcancel", ce).off("wheel mousewheel", ue), D && o.off("mousedown", de).off("click", he);
      }, se = te.settings, Z = te.trigger, a || te.init();
    };
  
    Nt.prototype = {
      _defaults: {
        speedUnit: .0022,
        timeUnit: 3,
        initialPos: 0,
        axis: "Y",
        thresholdX: 10,
        thresholdY: 5,
        easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        stopProp: !0,
        momentum: !0,
        mousewheel: !0,
        elastic: !0
      }
    };
    /* eslint-disable no-unused-vars */
  
    var Pt = {},
        Et = O ? window.CSS : null,
        Vt = Et && Et.supports && Et.supports("(transform-style: preserve-3d)");
  
    function At(e) {
      return (e + "").replace('"', "___");
    }
  
    var Ft = function Ft(e, t, a) {
      var s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T = 40,
          _ = 1e3,
          w = this,
          C = ye(e);
  
      function S(e) {
        var t,
            a,
            n = +ye(this).attr("data-index");
        38 == e.keyCode ? (t = !0, a = -1) : 40 == e.keyCode ? (t = !0, a = 1) : 32 == e.keyCode && (t = !0, k(n, ye(e.target))), t && (e.stopPropagation(), e.preventDefault(), a && u.start(n, a, e));
      }
  
      function M() {
        u.stop();
      }
  
      function k(e, t) {
        var a = x[e],
            n = +t.attr("data-index"),
            s = A(a, n),
            i = w._tempSelected[e],
            o = L(a.multiple) ? a.multiple : 1 / 0;
        !1 !== b("onItemTap", {
          target: t[0],
          index: e,
          value: s,
          selected: t.hasClass("mbsc-sc-itm-sel")
        }) && (a.multiple && !a._disabled[s] && (void 0 !== i[s] ? (t.removeClass(l).removeAttr("aria-selected"), delete i[s]) : (1 == o && (w._tempSelected[e] = i = {}, a._$markup.find(".mbsc-sc-itm-sel").removeClass(l).removeAttr("aria-selected")), I(i).length < o && (t.addClass(l).attr("aria-selected", "true"), i[s] = s))), R(a, e, n, _, a._index < n ? 1 : 2, !0, a.multiple), w.live && (!a.multiple || 1 === a.multiple && v.tapSelect) && (!0 === v.setOnTap || v.setOnTap[e]) && setTimeout(function () {
          w.select();
        }, v.tapSelect ? 0 : 200));
      }
  
      function D(e) {
        return -(e.max - e._offset - (e.multiple && !r ? Math.floor(v.rows / 2) : 0)) * m;
      }
  
      function O(e) {
        return -(e.min - e._offset + (e.multiple && !r ? Math.floor(v.rows / 2) : 0)) * m;
      }
  
      function N(e, t) {
        return (e._array ? e._map[t] : +e.getIndex(t, w)) || 0;
      }
  
      function P(e, t) {
        var a = e.data;
        if (t >= e.min && t <= e.max) return e._array ? e.circular ? ye(a).get(t % e._length) : a[t] : ye.isFunction(a) ? a(t, w) : "";
      }
  
      function E(e) {
        return ye.isPlainObject(e) ? void 0 !== e.value ? e.value : e.display : e;
      }
  
      function V(e) {
        var t = ye.isPlainObject(e) ? e.display : e;
        return void 0 === t ? "" : t + w._getText(n, .2);
      }
  
      function A(e, t) {
        return E(P(e, t));
      }
  
      function F(e, t, a) {
        var n = x[e];
        R(n, e, n._index + t, v.delay + 100, 1 == t ? 1 : 2, !1, !1, "keydown" == a.type);
      }
  
      function j(e) {
        return ye.isArray(v.readonly) ? v.readonly[e] : v.readonly;
      }
  
      function H(e, t, a) {
        var n = e._index - e._batch;
        return e.data = e.data || [], e.key = void 0 !== e.key ? e.key : t, e.label = void 0 !== e.label ? e.label : t, e._map = {}, e._array = ye.isArray(e.data), e._array && (e._length = e.data.length, ye.each(e.data, function (t, a) {
          e._map[E(a)] = t;
        })), e.circular = void 0 === v.circular ? void 0 === e.circular ? e._array && e._length > v.rows : e.circular : ye.isArray(v.circular) ? v.circular[t] : v.circular, e.min = e._array ? e.circular ? -1 / 0 : 0 : void 0 === e.min ? -1 / 0 : e.min, e.max = e._array ? e.circular ? 1 / 0 : e._length - 1 : void 0 === e.max ? 1 / 0 : e.max, e._nr = t, e._index = N(e, d[t]), e._disabled = {}, e._batch = 0, e._current = e._index, e._first = e._index - T, e._last = e._index + T, e._offset = e._first, a ? (e._offset -= e._margin / m + (e._index - n), e._margin += (e._index - n) * m) : e._margin = 0, e._refresh = function (t) {
          Se(e._scroller.settings, {
            minScroll: D(e),
            maxScroll: O(e)
          }), e._scroller.refresh(t);
        }, y[e.key] = e, e;
      }
  
      function z(e, t, a, n, s) {
        var i,
            r,
            c,
            u,
            p,
            h,
            f,
            b,
            x = "",
            y = w._tempSelected[t],
            T = e._disabled || {};
  
        for (i = a; i <= n; i++) {
          p = V(c = P(e, i)), u = E(c), r = c && void 0 !== c.cssClass ? c.cssClass : "", h = c && void 0 !== c.label ? c.label : "", f = c && c.invalid, b = void 0 !== u && u == d[t] && !e.multiple, x += '<div role="option" tabindex="-1" aria-selected="' + !!y[u] + '" class="mbsc-sc-itm ' + (s ? "mbsc-sc-itm-3d " : "") + r + " " + (b ? "mbsc-sc-itm-sel " : "") + (y[u] ? l : "") + (void 0 === u ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (f ? " mbsc-sc-itm-inv-h mbsc-disabled" : "") + (T[u] ? " mbsc-sc-itm-inv mbsc-disabled" : "") + '" data-index="' + i + '" data-val="' + At(u) + '"' + (h ? ' aria-label="' + h + '"' : "") + (b ? ' aria-selected="true"' : "") + ' style="height:' + m + "px;line-height:" + m + "px;" + (s ? Ge + "transform:rotateX(" + (e._offset - i) * o % 360 + "deg) translateZ(" + m * v.rows / 2 + "px);" : "") + '">' + (g > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(m / g) + "px;font-size:" + Math.round(m / g * .8) + 'px;">' : "") + p + (g > 1 ? "</div>" : "") + "</div>";
        }
  
        return x;
      }
  
      function U(e, t, a, n) {
        var s,
            i = x[e],
            o = n || i._disabled,
            r = N(i, t),
            l = A(i, r),
            c = l,
            u = l,
            d = 0,
            m = 0;
  
        if (!0 === o[l]) {
          for (s = 0; r - d >= i.min && o[c] && s < 100;) {
            s++, c = A(i, r - ++d);
          }
  
          for (s = 0; r + m < i.max && o[u] && s < 100;) {
            s++, u = A(i, r + ++m);
          }
  
          l = (m < d && m && 2 !== a || !d || r - d < 0 || 1 == a) && !o[u] ? u : c;
        }
  
        return l;
      }
  
      function Y(t, a, n, s, i, o, c) {
        var u,
            p,
            h,
            g,
            y = w._isVisible;
        f = !0, g = v.validate.call(e, {
          values: d.slice(0),
          index: a,
          direction: n
        }, w) || {}, f = !1, g.valid && (w._tempWheelArray = d = g.valid.slice(0)), o || ye.each(x, function (e, s) {
          if (y && s._$markup.find(".mbsc-sc-itm-inv").removeClass("mbsc-sc-itm-inv mbsc-disabled"), s._disabled = {}, g.disabled && g.disabled[e] && ye.each(g.disabled[e], function (e, t) {
            s._disabled[t] = !0, y && s._$markup.find('.mbsc-sc-itm[data-val="' + At(t) + '"]').addClass("mbsc-sc-itm-inv mbsc-disabled");
          }), d[e] = s.multiple ? d[e] : U(e, d[e], n), y) {
            if (s.multiple && void 0 !== a || s._$markup.find(".mbsc-sc-itm-sel").removeClass(l).removeAttr("aria-selected"), p = N(s, d[e]), u = p - s._index + s._batch, Math.abs(u) > 2 * T + 1 && (h = u + (2 * T + 1) * (u > 0 ? -1 : 1), s._offset += h, s._margin -= h * m, s._refresh()), s._index = p + s._batch, s.multiple) {
              if (void 0 === a) for (var o in w._tempSelected[e]) {
                s._$markup.find('.mbsc-sc-itm[data-val="' + At(o) + '"]').addClass(l).attr("aria-selected", "true");
              }
            } else s._$markup.find('.mbsc-sc-itm[data-val="' + At(d[e]) + '"]').addClass("mbsc-sc-itm-sel").attr("aria-selected", "true");
  
            s._$active && s._$active.attr("tabindex", -1), s._$active = s._$markup.find('.mbsc-sc-itm[data-index="' + s._index + '"]').eq(r && s.multiple ? 1 : 0).attr("tabindex", 0), c && a === e && s._$active.length && (s._$active[0].focus(), s._$scroller.parent().scrollTop(0)), s._scroller.scroll(-(p - s._offset + s._batch) * m, a === e || void 0 === a ? t : _, i);
          }
        }), b("onValidated", {
          index: a,
          time: t
        }), w._tempValue = v.formatValue.call(e, d, w), y && w._updateHeader(), w.live && function (e, t) {
          var a = x[e];
          return a && (!a.multiple || 1 !== a.multiple && t && (!0 === v.setOnTap || v.setOnTap[e]));
        }(a, o) && (w._hasValue = s || w._hasValue, $(s, s, 0, !0), s && b("onSet", {
          valueText: w._value
        })), s && b("onChange", {
          index: a,
          valueText: w._tempValue
        });
      }
  
      function R(e, t, a, n, s, i, o, r) {
        var l = A(e, a);
        void 0 !== l && (d[t] = l, e._batch = e._array ? Math.floor(a / e._length) * e._length : 0, e._index = a, setTimeout(function () {
          Y(n, t, s, !0, i, o, r);
        }, 10));
      }
  
      function $(t, a, n, s, i) {
        if (s ? w._tempValue = v.formatValue.call(e, w._tempWheelArray, w) : Y(n), !i) {
          w._wheelArray = [];
  
          for (var o = 0; o < d.length; o++) {
            w._wheelArray[o] = x[o] && x[o].multiple ? Object.keys(w._tempSelected[o] || {})[0] : d[o];
          }
  
          w._value = w._hasValue ? w._tempValue : null, w._selected = Se(!0, {}, w._tempSelected);
        }
  
        t && (w._isInput && C.val(w._hasValue ? w._tempValue : ""), b("onFill", {
          valueText: w._hasValue ? w._tempValue : "",
          change: a
        }), a && (w._preventChange = !0, C.trigger("change")));
      }
  
      Dt.call(this, e, t, !0), w.setVal = w._setVal = function (t, a, n, s, i) {
        w._hasValue = null !== t && void 0 !== t, w._tempWheelArray = d = ye.isArray(t) ? t.slice(0) : v.parseValue.call(e, t, w) || [], $(a, void 0 === n ? a : n, i, !1, s);
      }, w.getVal = w._getVal = function (e) {
        var t = w._hasValue || e ? w[e ? "_tempValue" : "_value"] : null;
        return L(t) ? +t : t;
      }, w.setArrayVal = w.setVal, w.getArrayVal = function (e) {
        return e ? w._tempWheelArray : w._wheelArray;
      }, w.changeWheel = function (e, t, a) {
        var n, s;
        ye.each(e, function (e, t) {
          (s = y[e]) && (n = s._nr, Se(s, t), H(s, n, !0), w._isVisible && (r && s._$3d.html(z(s, n, s._first + T - i + 1, s._last - T + i, !0)), s._$scroller.html(z(s, n, s._first, s._last)).css("margin-top", s._margin + "px"), s._refresh(f)));
        }), !w._isVisible || w._isLiquid || f || w.position(), f || Y(t, void 0, void 0, a);
      }, w.getValidValue = U, w._generateContent = function () {
        var e,
            t = 0,
            a = "",
            n = r ? Ge + "transform: translateZ(" + (m * v.rows / 2 + 3) + "px);" : "",
            s = '<div class="mbsc-sc-whl-l" style="' + n + "height:" + m + "px;margin-top:-" + (m / 2 + (v.selectedLineBorder || 0)) + 'px;"></div>',
            o = 0;
        return ye.each(v.wheels, function (l, u) {
          a += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (r ? " mbsc-sc-whl-gr-3d-c" : "") + (v.showLabel ? " mbsc-sc-lbl-v" : "") + '">' + s + '<div class="mbsc-sc-whl-gr' + (r ? " mbsc-sc-whl-gr-3d" : "") + (c ? " mbsc-sc-cp" : "") + (v.width || v.maxWidth ? '"' : '" style="max-width:' + v.maxPopupWidth + 'px;"') + ">", ye.each(u, function (l, u) {
            w._tempSelected[o] = Se({}, w._selected[o]), x[o] = H(u, o), t += v.maxWidth ? v.maxWidth[o] || v.maxWidth : v.width ? v.width[o] || v.width : 0, e = void 0 !== u.label ? u.label : l, a += '<div class="mbsc-sc-whl-w ' + (u.cssClass || "") + (u.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (v.width ? "width:" + (v.width[o] || v.width) + "px;" : (v.minWidth ? "min-width:" + (v.minWidth[o] || v.minWidth) + "px;" : "") + (v.maxWidth ? "max-width:" + (v.maxWidth[o] || v.maxWidth) + "px;" : "")) + '">' + (h ? '<div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div>' : "") + '<div class="mbsc-sc-whl-o" style="' + n + '"></div>' + s + '<div aria-live="off" aria-label="' + e + '"' + (u.multiple ? ' aria-multiselectable="true"' : "") + ' role="listbox" data-index="' + o + '" class="mbsc-sc-whl" style="height:' + v.rows * m * (r ? 1.1 : 1) + 'px;">' + (c ? '<div data-index="' + o + '" data-step="1" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (v.btnPlusClass || "") + '"></div><div data-index="' + o + '" data-step="-1" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (v.btnMinusClass || "") + '"></div>' : "") + '<div class="mbsc-sc-lbl">' + e + '</div><div class="mbsc-sc-whl-c" style="height:' + p + "px;margin-top:-" + (p / 2 + 1) + "px;" + n + '"><div class="mbsc-sc-whl-sc" style="top:' + (p - m) / 2 + 'px;">', a += z(u, o, u._first, u._last) + "</div></div>", r && (a += '<div class="mbsc-sc-whl-3d" style="height:' + m + "px;margin-top:-" + m / 2 + 'px;">', a += z(u, o, u._first + T - i + 1, u._last - T + i, !0), a += "</div>"), a += "</div></div>", o++;
          }), a += "</div></div>";
        }), t && (v.maxPopupWidth = t), a;
      }, w._attachEvents = function (e) {
        u = dt(ye(".mbsc-sc-btn", e), F, v.delay, j, !0), ye(".mbsc-sc-whl", e).on("keydown", S).on("keyup", M);
      }, w._detachEvents = function () {
        u.stop();
  
        for (var e = 0; e < x.length; e++) {
          x[e]._scroller.destroy();
        }
      }, w._markupReady = function (e) {
        ye(".mbsc-sc-whl-w", s = e).each(function (e) {
          var t,
              a = ye(this),
              n = x[e];
          n._$markup = a, n._$scroller = ye(".mbsc-sc-whl-sc", this), n._$3d = ye(".mbsc-sc-whl-3d", this), n._scroller = new Nt(this, {
            mousewheel: v.mousewheel,
            moveElement: n._$scroller,
            scrollbar: ye(".mbsc-sc-bar-c", this),
            initialPos: (n._first - n._index) * m,
            contSize: v.rows * m,
            snap: m,
            minScroll: D(n),
            maxScroll: O(n),
            maxSnapScroll: T,
            prevDef: !0,
            stopProp: !0,
            timeUnit: 3,
            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            sync: function sync(e, t, a) {
              var s = t ? Ge + "transform " + Math.round(t) + "ms " + a : "";
              r && (n._$3d[0].style[Qe + "Transition"] = s, n._$3d[0].style[Qe + "Transform"] = "rotateX(" + -e / m * o + "deg)");
            },
            onStart: function onStart(t, a) {
              a.settings.readonly = j(e);
            },
            onGestureStart: function onGestureStart() {
              a.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), b("onWheelGestureStart", {
                index: e
              });
            },
            onGestureEnd: function onGestureEnd(a) {
              var s = 90 == a.direction ? 1 : 2,
                  i = a.duration,
                  o = a.destinationY;
              t = Math.round(-o / m) + n._offset, R(n, e, t, i, s);
            },
            onAnimationStart: function onAnimationStart() {
              a.addClass("mbsc-sc-whl-anim");
            },
            onAnimationEnd: function onAnimationEnd() {
              a.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), b("onWheelAnimationEnd", {
                index: e
              }), n._$3d.find(".mbsc-sc-itm-del").remove();
            },
            onMove: function onMove(t) {
              !function (e, t, a) {
                var n = Math.round(-a / m) + e._offset,
                    s = n - e._current,
                    o = e._first,
                    l = e._last,
                    c = o + T - i + 1,
                    u = l - T + i;
  
                s && (e._first += s, e._last += s, e._current = n, s > 0 ? (e._$scroller.append(z(e, t, Math.max(l + 1, o + s), l + s)), ye(".mbsc-sc-itm", e._$scroller).slice(0, Math.min(s, l - o + 1)).remove(), r && (e._$3d.append(z(e, t, Math.max(u + 1, c + s), u + s, !0)), ye(".mbsc-sc-itm", e._$3d).slice(0, Math.min(s, u - c + 1)).attr("class", "mbsc-sc-itm-del"))) : s < 0 && (e._$scroller.prepend(z(e, t, o + s, Math.min(o - 1, l + s))), ye(".mbsc-sc-itm", e._$scroller).slice(Math.max(s, o - l - 1)).remove(), r && (e._$3d.prepend(z(e, t, c + s, Math.min(c - 1, u + s), !0)), ye(".mbsc-sc-itm", e._$3d).slice(Math.max(s, c - u - 1)).attr("class", "mbsc-sc-itm-del"))), e._margin += s * m, e._$scroller.css("margin-top", e._margin + "px"));
              }(n, e, t.posY);
            },
            onBtnTap: function onBtnTap(t) {
              k(e, ye(t.target));
            }
          });
        }), Y();
      }, w._fillValue = function () {
        w._hasValue = !0, $(!0, !0, 0, !0);
      }, w._clearValue = function () {
        ye(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", s).removeClass(l).removeAttr("aria-selected");
      }, w._readValue = function () {
        var t = C.val() || "",
            a = 0;
        "" !== t && (w._hasValue = !0), w._tempWheelArray = d = w._hasValue && w._wheelArray ? w._wheelArray.slice(0) : v.parseValue.call(e, t, w) || [], w._tempSelected = Se(!0, {}, w._selected), ye.each(v.wheels, function (e, t) {
          ye.each(t, function (e, t) {
            x[a] = H(t, a), a++;
          });
        }), $(!1, !1, 0, !0), b("onRead");
      }, w.__processSettings = function (e) {
        v = w.settings, b = w.trigger, g = v.multiline, l = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + v.checkIcon, (h = !v.touchUi) && (v.tapSelect = !0, v.circular = !1, v.rows = e.rows || t.rows || 7);
      }, w.__init = function (e) {
        e && (w._wheelArray = null), x = [], y = {}, c = v.showScrollArrows, r = v.scroll3d && Vt && !c && !h && ("ios" == v.theme || "ios" == v.baseTheme), m = v.height, p = r ? 2 * Math.round((m - .03 * (m * v.rows / 2 + 3)) / 2) : m, i = Math.round(1.8 * v.rows), o = 360 / (2 * i), c && (v.rows = Math.max(3, v.rows));
      }, w._getItemValue = E, w._tempSelected = {}, w._selected = {}, a || w.init();
    };
  
    Ft.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _responsive: !0,
      _class: "scroller",
      _presets: Pt,
      _defaults: Se({}, Dt.prototype._defaults, {
        minWidth: 80,
        height: 40,
        rows: 3,
        multiline: 1,
        delay: 200,
        readonly: !1,
        showLabel: !0,
        setOnTap: !1,
        wheels: [],
        preset: "",
        speedUnit: .0012,
        timeUnit: .08,
        checkIcon: "checkmark",
        compClass: "mbsc-sc",
        validate: function validate() {},
        formatValue: function formatValue(e) {
          return e.join(" ");
        },
        parseValue: function parseValue(e, t) {
          var a,
              n,
              s = [],
              i = [],
              o = 0;
          return null !== e && void 0 !== e && (s = (e + "").split(" ")), ye.each(t.settings.wheels, function (e, r) {
            ye.each(r, function (e, r) {
              n = r.data, a = t._getItemValue(n[0]), ye.each(n, function (e, n) {
                if (s[o] == t._getItemValue(n)) return a = t._getItemValue(n), !1;
              }), i.push(a), o++;
            });
          }), i;
        }
      })
    }, we.Scroller = Ft;
  
    var It = {
      separator: " ",
      dateFormat: "mm/dd/yy",
      dateDisplay: "MMddyy",
      timeFormat: "h:ii A",
      dayText: "Day",
      monthText: "Month",
      yearText: "Year",
      hourText: "Hours",
      minuteText: "Minutes",
      ampmText: "&nbsp;",
      secText: "Seconds",
      nowText: "Now",
      todayText: "Today"
    },
        jt = function jt(e) {
      function t(e) {
        var t,
            a,
            n,
            s,
            i = [];
  
        if (e) {
          for (t = 0; t < e.length; t++) {
            if ((a = e[t]).start && a.end && !fe.test(a.start)) for (n = new Date(ue(a.start, M, w)), s = new Date(ue(a.end, M, w)); n <= s;) {
              i.push(te(n.getFullYear(), n.getMonth(), n.getDate())), n.setDate(n.getDate() + 1);
            } else i.push(a);
          }
  
          return i;
        }
  
        return e;
      }
  
      function a(e, t, a, n) {
        return Math.min(n, Math.floor(e / t) * t + a);
      }
  
      function n(e, t, a) {
        return Math.floor((a - t) / e) * e + t;
      }
  
      function s(e) {
        return e.getFullYear() + "-" + U(e.getMonth() + 1) + "-" + U(e.getDate());
      }
  
      function o(e, t, a, n) {
        var s;
        return void 0 === b[t] || (s = +e[b[t]], isNaN(s)) ? a ? Q[t](a) : void 0 !== g[t] ? g[t] : Q[t](n) : s;
      }
  
      function r(e) {
        var t,
            a = new Date(new Date().setHours(0, 0, 0, 0));
        if (null === e) return e;
        void 0 !== b.dd && (t = e[b.dd].split("-"), t = new Date(t[0], t[1] - 1, t[2])), void 0 !== b.tt && (t = t || a, t = new Date(t.getTime() + e[b.tt] % 86400 * 1e3));
        var n = o(e, "y", t, a),
            s = o(e, "m", t, a),
            i = Math.min(o(e, "d", t, a), w.getMaxDayOfMonth(n, s)),
            r = o(e, "h", t, a);
        return w.getDate(n, s, i, I && o(e, "a", t, a) ? r + 12 : r, o(e, "i", t, a), o(e, "s", t, a), o(e, "u", t, a));
      }
  
      function l(e, t) {
        var a,
            n,
            s = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"],
            i = [];
        if (null === e || void 0 === e) return e;
  
        for (a = 0; a < s.length; a++) {
          void 0 !== b[n = s[a]] && (i[b[n]] = Q[n](e)), t && (g[n] = Q[n](e));
        }
  
        return i;
      }
  
      function c(e, t) {
        return !(!t && e < V) && !(!t && e > A) && (!!u(e, E) || !u(e, P));
      }
  
      function u(e, t) {
        var a, n, s;
        if (t) for (n = 0; n < t.length; n++) {
          if (s = (a = t[n]) + "", !a.start) if (be.test(s)) {
            if ((s = +s.replace("w", "")) == e.getDay()) return !0;
          } else if (ve.test(s)) {
            if ((s = s.split("/"))[1]) {
              if (s[0] - 1 == e.getMonth() && s[1] == e.getDate()) return !0;
            } else if (s[0] == e.getDate()) return !0;
          } else if (a = ue(a, M, w), e.getFullYear() == a.getFullYear() && e.getMonth() == a.getMonth() && e.getDate() == a.getDate()) return !0;
        }
        return !1;
      }
  
      function d(e, t, a, n, s, i, o) {
        var r, l, c, u;
        if (e) for (l = 0; l < e.length; l++) {
          if (u = (r = e[l]) + "", !r.start) if (be.test(u)) for (c = (u = +u.replace("w", "")) - n; c < s; c += 7) {
            c >= 0 && (i[c + 1] = o);
          } else ve.test(u) ? (u = u.split("/"))[1] ? u[0] - 1 == a && (i[u[1]] = o) : i[u[0]] = o : (r = ue(r, M, w), w.getYear(r) == t && w.getMonth(r) == a && (i[w.getDay(r)] = o));
        }
      }
  
      function m(e, t, n, s, i, o, r, l) {
        var c,
            u,
            d,
            m,
            h,
            f,
            v,
            b,
            g,
            y,
            T,
            _,
            C,
            S,
            M,
            k,
            D,
            O,
            N,
            P,
            E = {},
            V = w.getDate(s, i, o),
            A = ["a", "h", "i", "s"];
  
        if (e) {
          for (v = 0; v < e.length; v++) {
            (T = e[v]).start && (T.apply = !1, O = (D = (d = T.d) + "").split("/"), d && (d.getTime && s == w.getYear(d) && i == w.getMonth(d) && o == w.getDay(d) || !be.test(D) && (O[1] && o == O[1] && i == O[0] - 1 || !O[1] && o == O[0]) || be.test(D) && V.getDay() == +D.replace("w", "")) && (T.apply = !0, E[V] = !0));
          }
  
          for (v = 0; v < e.length; v++) {
            if (T = e[v], c = 0, k = 0, b = G[n], g = X[n], S = !0, M = !0, u = !1, T.start && (T.apply || !T.d && !E[V])) {
              for (_ = T.start.split(":"), C = T.end.split(":"), y = 0; y < 3; y++) {
                void 0 === _[y] && (_[y] = 0), void 0 === C[y] && (C[y] = 59), _[y] = +_[y], C[y] = +C[y];
              }
  
              if ("tt" == n) b = a(Math.round((new Date(V).setHours(_[0], _[1], _[2]) - new Date(V).setHours(0, 0, 0, 0)) / 1e3), p, 0, 86400), g = a(Math.round((new Date(V).setHours(C[0], C[1], C[2]) - new Date(V).setHours(0, 0, 0, 0)) / 1e3), p, 0, 86400);else {
                for (_.unshift(_[0] > 11 ? 1 : 0), C.unshift(C[0] > 11 ? 1 : 0), I && (_[1] >= 12 && (_[1] = _[1] - 12), C[1] >= 12 && (C[1] = C[1] - 12)), y = 0; y < t; y++) {
                  void 0 !== x[y] && (N = a(_[y], Z[A[y]], G[A[y]], X[A[y]]), P = a(C[y], Z[A[y]], G[A[y]], X[A[y]]), m = 0, h = 0, f = 0, I && 1 == y && (m = _[0] ? 12 : 0, h = C[0] ? 12 : 0, f = x[0] ? 12 : 0), S || (N = 0), M || (P = X[A[y]]), (S || M) && N + m < x[y] + f && x[y] + f < P + h && (u = !0), x[y] != N && (S = !1), x[y] != P && (M = !1));
                }
  
                if (!l) for (y = t + 1; y < 4; y++) {
                  _[y] > 0 && (c = Z[n]), C[y] < X[A[y]] && (k = Z[n]);
                }
                u || (N = a(_[t], Z[n], G[n], X[n]) + c, P = a(C[t], Z[n], G[n], X[n]) - k, S && (b = N), M && (g = P));
              }
              if (S || M || u) for (y = b; y <= g; y += Z[n]) {
                r[y] = !l;
              }
            }
          }
        }
      }
  
      var p,
          h,
          f,
          v,
          b = {},
          g = {},
          x = [],
          y = function (e) {
        var t,
            a,
            n,
            s = {};
  
        if (e.is("input")) {
          switch (e.attr("type")) {
            case "date":
              t = "yy-mm-dd";
              break;
  
            case "datetime":
              t = "yy-mm-ddTHH:ii:ssZ";
              break;
  
            case "datetime-local":
              t = "yy-mm-ddTHH:ii:ss";
              break;
  
            case "month":
              t = "yy-mm", s.dateOrder = "mmyy";
              break;
  
            case "time":
              t = "HH:ii:ss";
          }
  
          s.format = t, a = e.attr("min"), n = e.attr("max"), a && "undefined" != a && (s.min = ne(t, a)), n && "undefined" != n && (s.max = ne(t, n));
        }
  
        return s;
      }(ye(this)),
          T = Se({}, e.settings),
          _ = i[T.calendarSystem],
          w = Se(e.settings, ge, _, It, y, T),
          C = w.preset,
          S = "datetime" == C ? w.dateFormat + w.separator + w.timeFormat : "time" == C ? w.timeFormat : w.dateFormat,
          M = y.format || S,
          k = (w.dateWheels || w.dateFormat, w.timeWheels || w.timeFormat),
          D = w.dateWheels || w.dateDisplay,
          O = k,
          N = w.baseTheme || w.theme,
          P = t(w.invalid),
          E = t(w.valid),
          V = ue(w.min, M, w),
          A = ue(w.max, M, w),
          F = /time/i.test(C),
          I = /h/.test(O),
          j = /D/.test(D),
          L = w.steps || {},
          H = L.hour || w.stepHour || 1,
          z = L.minute || w.stepMinute || 1,
          Y = L.second || w.stepSecond || 1,
          R = L.zeroBased,
          $ = R || !V ? 0 : V.getHours() % H,
          W = R || !V ? 0 : V.getMinutes() % z,
          J = R || !V ? 0 : V.getSeconds() % Y,
          q = n(H, $, I ? 11 : 23),
          B = n(z, W, 59),
          K = n(z, W, 59),
          G = {
        y: V ? V.getFullYear() : -1 / 0,
        m: 0,
        d: 1,
        h: $,
        i: W,
        s: J,
        a: 0,
        tt: 0
      },
          X = {
        y: A ? A.getFullYear() : 1 / 0,
        m: 11,
        d: 31,
        h: q,
        i: B,
        s: K,
        a: 1,
        tt: 86400
      },
          Z = {
        y: 1,
        m: 1,
        d: 1,
        h: H,
        i: z,
        s: Y,
        a: 1,
        tt: 1
      },
          Q = {
        y: function y(e) {
          return w.getYear(e);
        },
        m: function m(e) {
          return w.getMonth(e);
        },
        d: function d(e) {
          return w.getDay(e);
        },
        h: function h(e) {
          var t = e.getHours();
          return a(t = I && t >= 12 ? t - 12 : t, H, $, q);
        },
        i: function i(e) {
          return a(e.getMinutes(), z, W, B);
        },
        s: function s(e) {
          return a(e.getSeconds(), Y, J, K);
        },
        u: function u(e) {
          return e.getMilliseconds();
        },
        a: function a(e) {
          return e.getHours() > 11 ? 1 : 0;
        },
        dd: s,
        tt: function tt(e) {
          return a(Math.round((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), p || 1, 0, 86400);
        }
      };
  
      return e.getVal = function (t) {
        return e._hasValue || t ? ce(r(e.getArrayVal(t)), w, M) : null;
      }, e.getDate = function (t) {
        return e._hasValue || t ? r(e.getArrayVal(t)) : null;
      }, e.setDate = function (t, a, n, s, i) {
        e.setArrayVal(l(t, !0), a, i, s, n);
      }, b = e.remote.datetime.wheelOrder, h = e.remote.datetime.oneDateWheel, p = e.remote.datetime.timeStep, f = e.remote.datetime.wheels, w.isoParts = v = e.remote.datetime.isoParts, w.dateDisplay = D, e.remote.datetime.isValid = c, e.remote.datetime.getFullDate = s, e.remote.datetime.getDateIndex = function (e, t) {
        return t ? Math.floor(new Date(e) / 864e5) : e.getMonth() + 12 * (e.getFullYear() - 1970);
      }, e.remote.datetime.datetime = {
        formatDate: ae
      }, e._format = S, e._order = b, e.handlers.now = function () {
        e.setDate(new Date(), e.live, 1e3, !0, !0);
      }, e.buttons.now = {
        text: w.nowText,
        icon: w.nowIcon,
        handler: "now"
      }, {
        minWidth: h && F ? {
          bootstrap: 46,
          ios: 50,
          material: 46,
          mobiscroll: 46,
          windows: 50
        }[N] : void 0,
        compClass: "mbsc-dt mbsc-sc",
        wheels: f,
        headerText: !!w.headerText && function () {
          return ae(S, r(e.getArrayVal(!0)), w);
        },
        formatValue: function formatValue(e) {
          return ae(M, r(e), w);
        },
        parseValue: function parseValue(e) {
          return e || (g = {}), l(ue(e || w.defaultValue || new Date(), M, w, v), !!e);
        },
        validate: function validate(t) {
          var a,
              n,
              s,
              i,
              o = t.values,
              u = t.index,
              p = t.direction,
              h = w.wheels[0][b.d],
              f = function (e, t) {
            var a,
                n,
                s = !1,
                i = !1,
                o = 0,
                u = 0,
                d = V ? r(l(V)) : -1 / 0,
                m = A ? r(l(A)) : 1 / 0;
            if (c(e)) return e;
            if (e < d && (e = d), e > m && (e = m), a = e, n = e, 2 !== t) for (s = c(a, !0); !s && a < m;) {
              s = c(a = new Date(a.getTime() + 864e5), !0), o++;
            }
            if (1 !== t) for (i = c(n, !0); !i && n > d;) {
              i = c(n = new Date(n.getTime() - 864e5), !0), u++;
            }
            return 1 === t && s ? a : 2 === t && i ? n : u <= o && i ? n : a;
          }(r(o), p),
              v = l(f),
              g = [],
              y = {},
              T = Q.y(f),
              _ = Q.m(f),
              C = w.getMaxDayOfMonth(T, _),
              S = !0,
              M = !0;
  
          if (ye.each(["dd", "y", "m", "d", "tt", "a", "h", "i", "s"], function (e, t) {
            var a = G[t],
                s = X[t],
                i = Q[t](f);
  
            if (g[b[t]] = [], S && V && (a = Q[t](V)), M && A && (s = Q[t](A)), i < a && (i = a), i > s && (i = s), "dd" !== t && "tt" !== t && (S && (S = i == a), M && (M = i == s)), void 0 !== b[t]) {
              if ("y" != t && "dd" != t) for (n = G[t]; n <= X[t]; n += Z[t]) {
                (n < a || n > s) && g[b[t]].push(n);
              }
  
              if ("d" == t) {
                var o = w.getDate(T, _, 1).getDay(),
                    r = {};
                d(P, T, _, o, C, r, 1), d(E, T, _, o, C, r, 0), ye.each(r, function (e, a) {
                  a && g[b[t]].push(e);
                });
              }
            }
          }), F && ye.each(["a", "h", "i", "s", "tt"], function (t, a) {
            var n = Q[a](f),
                s = Q.d(f),
                i = {};
            void 0 !== b[a] && (m(P, t, a, T, _, s, i, 0), m(E, t, a, T, _, s, i, 1), ye.each(i, function (e, t) {
              t && g[b[a]].push(e);
            }), x[t] = e.getValidValue(b[a], n, p, i));
          }), h && (h._length !== C || j && (void 0 === u || u === b.y || u === b.m))) {
            for (y[b.d] = h, h.data = [], a = 1; a <= C; a++) {
              i = w.getDate(T, _, a).getDay(), s = D.replace(/[my|]/gi, "").replace(/dd/, (a < 10 ? "0" + a : a) + (w.daySuffix || "")).replace(/d/, a + (w.daySuffix || "")), h.data.push({
                value: a,
                display: /DD/.test(s) ? s.replace(/DD/, '<span class="mbsc-dt-day">' + w.dayNames[i] + "</span>") : s.replace(/D/, '<span class="mbsc-dt-day">' + w.dayNamesShort[i] + "</span>")
              });
            }
  
            e._tempWheelArray[b.d] = v[b.d], e.changeWheel(y);
          }
  
          return {
            disabled: g,
            valid: v
          };
        }
      };
    },
        Lt = {
      controls: ["calendar"],
      firstDay: 0,
      weekDays: "short",
      maxMonthWidth: 170,
      breakPointMd: 768,
      months: 1,
      pageBuffer: 1,
      weeks: 6,
      highlight: !0,
      outerMonthChange: !0,
      quickNav: !0,
      yearChange: !0,
      tabs: "auto",
      todayClass: "mbsc-cal-today",
      btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
      btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
      dateText: "Date",
      timeText: "Time",
      todayText: "Today",
      fromText: "Start",
      toText: "End",
      moreEventsText: "{count} more",
      prevMonthText: "Previous Month",
      nextMonthText: "Next Month",
      prevYearText: "Previous Year",
      nextYearText: "Next Year"
    };
  
    var Ht = function Ht(e) {
      var t,
          a,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O,
          N,
          P,
          E,
          V,
          A,
          I,
          j,
          L,
          H,
          z,
          U,
          Y,
          R,
          $,
          W,
          J,
          q,
          K,
          G,
          X,
          Z,
          Q,
          ee,
          ae,
          ne,
          re,
          le,
          ce,
          me,
          pe,
          he,
          fe,
          ge,
          xe,
          Te,
          _e,
          we,
          Ce,
          Me,
          ke,
          De,
          Oe,
          Ne,
          Pe,
          Ee,
          Ve = 1,
          Ae = this;
  
      function Fe(e) {
        e.hasClass("mbsc-cal-h") || e.addClass("mbsc-cal-h");
      }
  
      function Ie(t) {
        t.hasClass("mbsc-cal-h") ? function (t) {
          t.hasClass("mbsc-cal-h") && (t.removeClass("mbsc-cal-h"), e._onSelectShow());
        }(t) : Fe(t);
      }
  
      function je(e, t, a) {
        e[t] = e[t] || [], e[t].push(a);
      }
  
      function Le(e, t, a) {
        var n,
            s,
            i,
            o,
            r = fe.getYear(t),
            l = fe.getMonth(t),
            c = {};
        return e && ye.each(e, function (e, u) {
          if (n = u.d || u.start || u, s = n + "", u.start && u.end) for (o = ie(ue(u.start, M, fe)), i = ie(ue(u.end, M, fe)); o <= i;) {
            je(c, o, u), o = fe.getDate(fe.getYear(o), fe.getMonth(o), fe.getDay(o) + 1);
          } else if (be.test(s)) for (o = it(t, !1, +s.replace("w", "")); o <= a;) {
            je(c, o, u), o = fe.getDate(fe.getYear(o), fe.getMonth(o), fe.getDay(o) + 7);
          } else if (ve.test(s)) {
            if ((s = s.split("/"))[1]) for (o = fe.getDate(r, s[0] - 1, s[1]); o <= a;) {
              je(c, o, u), o = fe.getDate(fe.getYear(o) + 1, fe.getMonth(o), s[1]);
            } else for (o = fe.getDate(r, l, s[0]); o <= a;) {
              je(c, o, u), o = fe.getDate(fe.getYear(o), fe.getMonth(o) + 1, s[0]);
            }
          } else je(c, ie(ue(n, M, fe)), u);
        }), c;
      }
  
      function He(e) {
        return !(e < K) && !(e > R) && (void 0 === V[e] || void 0 !== Te[e]);
      }
  
      function ze(t) {
        var a,
            n,
            s,
            i,
            o = !!U[t] && U[t],
            r = !!Y[t] && Y[t],
            l = r && r[0].background ? r[0].background : o && o[0].background,
            c = "";
        if (r) for (a = 0; a < r.length; a++) {
          c += (r[a].cssClass || "") + " ";
        }
  
        if (o) {
          for (s = '<div class="mbsc-cal-marks">', a = 0; a < o.length; a++) {
            c += ((n = o[a]).cssClass || "") + " ", s += '<div class="mbsc-cal-mark"' + (n.color ? ' style="background:' + n.color + ';"' : "") + "></div>";
          }
  
          s += "</div>";
        }
  
        return i = {
          marked: o,
          background: l,
          cssClass: c,
          markup: w[t] ? w[t].join("") : N ? s : ""
        }, Se(i, e._getDayProps(t, i));
      }
  
      function Ue(e) {
        return ' style="' + (H ? "transform: translateY(" + 100 * e + "%)" : "left:" + 100 * e * he + "%") + '"';
      }
  
      function Ye(e) {
        return ot(e, ce - 1) > R && (e = ot(R, 1 - ce)), e < K && (e = K), e;
      }
  
      function Re(e, t, a) {
        var n = e.color,
            s = e.text;
        return '<div data-id="' + e._id + '" data-index="' + t + '" class="mbsc-cal-txt" title="' + ye("<div>" + s + "</div>").text() + '"' + (n ? ' style="background:' + n + (a ? ";color:" + lt(n) : "") + ';"' : "") + ">" + (a ? s : "") + "</div>";
      }
  
      function $e(t) {
        var a = it(ot(t, -me - le), !1),
            n = it(ot(t, -me + ce + le - 1), !1);
        n = fe.getDate(fe.getYear(n), fe.getMonth(n), fe.getDay(n) + 7 * p), e._onGenMonth(a, n), V = Le(fe.invalid, a, n), Te = Le(fe.valid, a, n), U = Le(fe.labels || fe.events || fe.marked, a, n), Y = Le(fe.colors, a, n), z = e._labels || U || Y, (O = fe.labels || e._labels) && function () {
          w = {};
  
          for (var e = {}, t = a, s = function s() {
            t.getDay() == k && (e = {});
  
            for (var a = W, n = z[t] || [], s = n.length, i = [], o = void 0, r = void 0, l = 0, c = 0, u = 0, d = void 0; l < a;) {
              if (o = null, n.forEach(function (t, a) {
                e[l] == t && (o = t, r = a);
              }), l == a - 1 && (c < s - 1 || s && u == s && !o)) {
                var m = s - c,
                    p = (m > 1 && fe.moreEventsPluralText || fe.moreEventsText).replace(/{count}/, m);
                m && i.push('<div class="mbsc-cal-txt-more">' + p + "</div>"), o && (e[l] = null, o._days.forEach(function (e) {
                  w[e][l] = '<div class="mbsc-cal-txt-more">' + fe.moreEventsText.replace(/{count}/, 1) + "</div>";
                })), c++, l++;
              } else if (o) r == u && u++, de(t, ue(o.end)) && (e[l] = null), i.push(Re(o, r)), l++, c++, o._days.push(t);else if (u < s) {
                var h = n[u],
                    f = h.start && ue(h.start),
                    v = h.end && ue(h.end),
                    b = t.getDay(),
                    g = k - b > 0 ? 7 : 0,
                    x = v && !de(f, v);
                f && !de(t, f) && b != k || (void 0 === h._id && (h._id = Ve++), x && (e[l] = h), h._days = [t], d = x ? 100 * Math.min(se(t, ie(v)) + 1, 7 + k - b - g) : 100, i.push(x ? '<div class="mbsc-cal-txt-w" style="width:' + d + '%">' + Re(h, u, !0) + "</div>" + Re(h, u) : Re(h, u, !0)), l++, c++), u++;
              } else i.push('<div class="mbsc-cal-txt-ph"></div>'), l++;
            }
  
            w[t] = i, t = fe.getDate(fe.getYear(t), fe.getMonth(t), fe.getDay(t) + 1);
          }; t < n;) {
            s();
          }
        }();
      }
  
      function We(e) {
        var t = fe.getYear(e),
            a = fe.getMonth(e);
        _ = e, d = e, et(e), xe("onMonthChange", {
          year: t,
          month: a
        }), xe("onMonthLoading", {
          year: t,
          month: a
        }), xe("onPageChange", {
          firstDay: e
        }), xe("onPageLoading", {
          firstDay: e
        }), $e(e);
      }
  
      function Je(e) {
        var t = fe.getYear(e),
            a = fe.getMonth(e);
        void 0 === re ? qe(e, t, a) : Ge(e, re, !0), Xe(d, S.focus), S.focus = !1;
      }
  
      function qe(e, t, a) {
        var n = S.$scroller;
        ye(".mbsc-cal-slide", n).removeClass("mbsc-cal-slide-a"), ye(".mbsc-cal-slide", n).slice(le, le + ce).addClass("mbsc-cal-slide-a"), O && ye(".mbsc-cal-slide-a .mbsc-cal-txt", n).on("mouseenter", function () {
          var e = ye(this).attr("data-id");
          ye('.mbsc-cal-txt[data-id="' + e + '"]', n).addClass("mbsc-hover");
        }).on("mouseleave", function () {
          ye(".mbsc-cal-txt.mbsc-hover", n).removeClass("mbsc-hover");
        }), xe("onMonthLoaded", {
          year: t,
          month: a
        }), xe("onPageLoaded", {
          firstDay: e
        });
      }
  
      function Be(e, t) {
        var a,
            n = fe.getYear(e),
            s = '<div class="mbsc-cal-slide"' + Ue(t) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
  
        for (a = 0; a < 12; a++) {
          a && a % 3 == 0 && (s += '</div><div class="mbsc-cal-row">'), s += '<div role="gridcell" tabindex="-1" aria-label="' + n + '" data-val="' + n + '" class="mbsc-cal-cell mbsc-btn-e ' + (n < Z || n > q ? " mbsc-disabled " : "") + (n == fe.getYear(_) ? y : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + n + Oe + "</div></div>", n++;
        }
  
        return s += "</div></div></div>";
      }
  
      function Ke(t, a) {
        var s,
            i,
            o,
            r,
            l,
            c,
            u,
            d,
            m,
            h,
            f,
            v,
            b,
            g,
            x,
            T,
            _ = 1,
            w = fe.getYear(t),
            S = fe.getMonth(t),
            M = fe.getDay(t),
            D = null !== fe.defaultValue || e._hasValue ? e.getDate(!0) : null,
            O = fe.getDate(w, S, M).getDay(),
            N = k - O > 0 ? 7 : 0,
            P = '<div class="mbsc-cal-slide"' + Ue(a) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
  
        for (T = 0; T < 7 * p; T++) {
          x = T + k - N, o = (s = fe.getDate(w, S, x - O + M)).getFullYear(), r = s.getMonth(), l = s.getDate(), c = fe.getMonth(s), u = fe.getDay(s), g = fe.getMaxDayOfMonth(o, r), d = o + "-" + (r + 1) + "-" + l, h = (m = Se({
            valid: He(s),
            selected: D && de(D, s)
          }, ze(s))).valid, f = m.selected, i = m.cssClass, v = new Date(s).setHours(12, 0, 0, 0) === new Date().setHours(12, 0, 0, 0), b = c !== S, C[d] = m, T && T % 7 == 0 && (P += '</div><div class="mbsc-cal-row">'), we && T % 7 == 0 && ("month" == we && b && _ > 1 ? _ = 1 == l ? 1 : 2 : "year" == we && (_ = fe.getWeekNumber(fe.getDate(o, r, l + (7 - k + 1) % 7))), P += '<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">' + _ + "</div>", _++), P += '<div role="gridcell" aria-label="' + (v ? fe.todayText + ", " : "") + fe.dayNames[s.getDay()] + ", " + fe.monthNames[c] + " " + u + " " + (m.ariaLabel ? ", " + m.ariaLabel : "") + '"' + (b && !ge ? ' aria-hidden="true"' : ' data-full="' + d + '"') + (f ? ' aria-selected="true"' : "") + (h ? ' tabindex="-1"' : ' aria-disabled="true"') + ' class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day' + x % 7 + " " + (fe.dayClass || "") + " " + (f ? y : "") + (v ? " " + fe.todayClass : "") + (i ? " " + i : "") + (1 == u ? " mbsc-cal-day-first" : "") + (u == g ? " mbsc-cal-day-last" : "") + (b ? " mbsc-cal-day-diff" : "") + (h ? " mbsc-btn-e" : " mbsc-disabled") + (m.marked ? " mbsc-cal-day-marked" : "") + (m.background ? " mbsc-cal-day-colored" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt"' + (m.background ? ' style="background:' + m.background + ";color:" + lt(m.background) + '"' : "") + ">" + u + "</div>" + e._getText(n, .06) + (m.markup || "") + "</div></div>";
        }
  
        return P += "</div></div></div>";
      }
  
      function Ge(e, t, a) {
        var n,
            s = fe.getYear(e),
            i = fe.getMonth(e),
            o = S ? S.pos : 0,
            r = "";
        if (C = {}, p) for (t || (xe("onMonthLoading", {
          year: s,
          month: i
        }), xe("onPageLoading", {
          firstDay: e
        })), $e(e), n = 0; n < pe; n++) {
          r += Ke(ot(e, n - me - le), o * he + n - le);
        }
        return re = void 0, a && S && (S.$active = null, S.$scroller.html(r), qe(e, s, i)), r;
      }
  
      function Xe(e, t) {
        if (S) {
          var a = S.$active;
          a && a.length && (a[0].blur(), a.hasClass("mbsc-disabled") ? a.removeAttr("tabindex") : a.attr("tabindex", "-1")), S.$active = ye('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + oe(e) + '"]', S.$scroller).attr("tabindex", "0"), t && S.$active.length && S.$active[0].focus();
        }
      }
  
      function Ze(e, t) {
        ye(".mbsc-selected", t).removeClass(y).removeAttr("aria-selected"), ye('.mbsc-cal-cell[data-val="' + e + '"]', t).addClass(y).attr("aria-selected", "true");
      }
  
      function Qe(t, a, n, s) {
        var i, o;
        _e && (t < K && (t = K), t > R && (t = R), "calendar" !== _e && P && !a || (e._isSetDate = !a, D && p && (o = it(Ye(t), j), ne && (t < ot(_, -me) || t >= ot(_, ce - me)) && (i = j ? fe.getMonth(o) - fe.getMonth(_) + 12 * (fe.getYear(o) - fe.getYear(_)) : Math.floor(se(_, o) / (7 * p))) && (S.queue = [], S.focus = s && n, ct(S, i, n)), i && n || Xe(t, s), a || function (t) {
          var a = S && S.$scroller;
          fe.highlight && S && (ye(".mbsc-selected", a).removeClass(y).removeAttr("aria-selected"), (null !== fe.defaultValue || e._hasValue) && ye('.mbsc-cal-day[data-full="' + oe(t) + '"]', a).addClass(y).attr("aria-selected", "true"));
        }(t), j || et(t, !0), d = t, ne = !0), e._onSetDate(t, i), e._isSetDate = !1));
      }
  
      function et(e, t) {
        var a,
            n,
            o,
            r = fe.getYear(e),
            l = fe.getMonth(e),
            u = r + Oe;
  
        if (E) {
          if (Ze(l, ae.$scroller), Ze(r, De.$scroller), ct(De, Math.floor(r / 12) - Math.floor(fe.getYear(De.first) / 12), !0), ye(".mbsc-cal-cell", ae.$scroller).removeClass("mbsc-disabled"), r === Z) for (a = 0; a < X; a++) {
            ye('.mbsc-cal-cell[data-val="' + a + '"]', ae.$scroller).addClass("mbsc-disabled");
          }
          if (r === q) for (a = J + 1; a <= 12; a++) {
            ye('.mbsc-cal-cell[data-val="' + a + '"]', ae.$scroller).addClass("mbsc-disabled");
          }
        }
  
        for (t || (tt(ye(".mbsc-cal-prev-m", s), ot(e, -me) <= K), tt(ye(".mbsc-cal-next-m", s), ot(e, ce - me) > R), tt(ye(".mbsc-cal-prev-y", s), fe.getDate(r - 1, l + 1, 1) <= K), tt(ye(".mbsc-cal-next-y", s), fe.getDate(r + 1, l, 1) > R)), c.attr("aria-label", r).html(u), a = 0; a < ce; a++) {
          e = fe.getDate(r, l - me + a, 1), n = fe.getYear(e), o = fe.getMonth(e), u = n + Oe, i.eq(a).attr("aria-label", fe.monthNames[o] + (Me ? "" : " " + r)).html((!Me && ke < Q ? u + " " : "") + ee[o] + (!Me && ke > Q ? " " + u : ""));
        }
      }
  
      function tt(e, t) {
        t ? e.addClass(x).attr("aria-disabled", "true") : e.removeClass(x).removeAttr("aria-disabled");
      }
  
      function at(t, a) {
        var n = e.getDate(!0),
            s = t[0],
            i = t.attr("data-full"),
            o = i ? i.split("-") : [],
            r = te(o[0], o[1] - 1, o[2]),
            l = te(r.getFullYear(), r.getMonth(), r.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()),
            c = t.hasClass("mbsc-selected"),
            u = ye(a.target),
            d = u[0];
  
        if (ge || !t.hasClass("mbsc-cal-day-diff")) {
          if (O && s.contains(d)) for (; d != s;) {
            if (u.hasClass("mbsc-cal-txt") || u.hasClass("mbsc-cal-txt-more")) {
              var m = u.attr("data-index"),
                  p = z[r];
              if (!1 === xe("onLabelTap", {
                date: l,
                domEvent: a,
                target: u[0],
                labels: p,
                label: p[m]
              })) return;
              break;
            }
  
            d = (u = u.parent())[0];
          }
          !1 === xe("onDayChange", Se(C[i], {
            date: l,
            target: s,
            selected: c
          })) || fe.readonly || t.hasClass("mbsc-disabled") || e._selectDay(t, r, l, c);
        }
      }
  
      function nt(e) {
        Fe(o), Qe(fe.getDate(fe.getYear(S.first), e.attr("data-val"), 1), !0, !0);
      }
  
      function st(e) {
        Fe(u), Qe(fe.getDate(e.attr("data-val"), fe.getMonth(S.first), 1), !0, !0);
      }
  
      function it(e, t, a) {
        var n = fe.getYear(e),
            s = fe.getMonth(e),
            i = e.getDay(),
            o = k - i > 0 ? 7 : 0;
        return t ? fe.getDate(n, s, 1) : fe.getDate(n, s, (void 0 === a ? k : a) - o - i + fe.getDay(e));
      }
  
      function ot(e, t) {
        var a = fe.getYear(e),
            n = fe.getMonth(e),
            s = fe.getDay(e);
        return j ? fe.getDate(a, n + t, 1) : fe.getDate(a, n, s + t * p * 7);
      }
  
      function rt(e, t) {
        var a = 12 * Math.floor(fe.getYear(e) / 12);
        return fe.getDate(a + 12 * t, 0, 1);
      }
  
      function ct(t, a, n, s) {
        a && e._isVisible && (t.queue.push(arguments), 1 == t.queue.length && function e(t, a, n, s) {
          var i,
              o,
              r = "",
              l = t.$scroller,
              c = t.buffer,
              u = t.offset,
              d = t.pages,
              m = t.total,
              p = t.first,
              h = t.genPage,
              f = t.getFirst,
              v = a > 0 ? Math.min(a, c) : Math.max(a, -c),
              b = t.pos * he + v - a + u,
              g = Math.abs(a) > c;
          t.callback && (t.load(), t.callback());
          t.first = f(p, a);
          t.pos += v * he;
          t.changing = !0;
  
          t.load = function () {
            if (g) {
              for (i = 0; i < d; i++) {
                r += h(f(p, o = a + i - u), b + o);
              }
  
              a > 0 ? (ye(".mbsc-cal-slide", l).slice(-d).remove(), l.append(r)) : a < 0 && (ye(".mbsc-cal-slide", l).slice(0, d).remove(), l.prepend(r));
            }
          };
  
          t.callback = function () {
            var n = Math.abs(v),
                r = "";
  
            for (i = 0; i < n; i++) {
              r += h(f(p, o = a + i - u - c + (a > 0 ? m - n : 0)), b + o);
            }
  
            if (a > 0 ? (l.append(r), ye(".mbsc-cal-slide", l).slice(0, v).remove()) : a < 0 && (l.prepend(r), ye(".mbsc-cal-slide", l).slice(v).remove()), g) {
              for (r = "", i = 0; i < n; i++) {
                r += h(f(p, o = a + i - u - c + (a > 0 ? 0 : m - n)), b + o);
              }
  
              a > 0 ? (ye(".mbsc-cal-slide", l).slice(0, v).remove(), l.prepend(r)) : a < 0 && (ye(".mbsc-cal-slide", l).slice(v).remove(), l.append(r));
            }
  
            mt(t), s && s(), t.callback = null, t.load = null, t.queue.shift(), g = !1, t.queue.length ? e.apply(this, t.queue[0]) : (t.changing = !1, t.onAfterChange(t.first));
          };
  
          t.onBeforeChange(t.first);
          t.load();
          t.scroller.scroll(-t.pos * t.size, n ? 200 : 0, !1, t.callback);
        }(t, a, n, s));
      }
  
      function ut(t, a, n, s, i, o, r, l, c, u, d, m, p) {
        var h = H ? "Y" : "X",
            f = {
          $scroller: ye(".mbsc-cal-scroll", t),
          queue: [],
          buffer: s,
          offset: i,
          pages: o,
          first: l,
          total: r,
          pos: 0,
          min: a,
          max: n,
          genPage: m,
          getFirst: p,
          onBeforeChange: u,
          onAfterChange: d
        };
        return f.scroller = new Nt(t, {
          axis: h,
          easing: "",
          contSize: 0,
          maxSnapScroll: s,
          mousewheel: void 0 === fe.mousewheel ? H : fe.mousewheel,
          time: 200,
          lock: !0,
          rtl: L,
          stopProp: !1,
          minScroll: 0,
          maxScroll: 0,
          onBtnTap: function onBtnTap(e) {
            "touchend" == e.domEvent.type && B(), c(ye(e.target), e.domEvent);
          },
          onAnimationStart: function onAnimationStart() {
            f.changing = !0;
          },
          onAnimationEnd: function onAnimationEnd(e) {
            m && ct(f, Math.round((-f.pos * f.size - e["pos" + h]) / f.size) * he);
          }
        }), e._scrollers.push(f.scroller), f;
      }
  
      function mt(e, t) {
        var a,
            n = 0,
            s = 0,
            i = e.first;
  
        if (!e.changing || !t) {
          if (e.getFirst) {
            for (n = e.buffer, s = e.buffer; s && e.getFirst(i, s + e.pages - e.offset - 1) > e.max;) {
              s--;
            }
  
            for (; n && e.getFirst(i, 1 - n - e.offset) <= e.min;) {
              n--;
            }
          }
  
          a = Math.round(h / e.pages), I && a && e.size != a && e.$scroller[H ? "height" : "width"](a), Se(e.scroller.settings, {
            snap: a,
            minScroll: (-e.pos * he - s) * a,
            maxScroll: (-e.pos * he + n) * a
          }), e.size = a, e.scroller.refresh();
        }
      }
  
      function pt(t) {
        e._onRefresh(t), e._isVisible && D && p && (S && S.changing ? re = t : (Ge(_, t, !0), Xe(d)));
      }
  
      return b = {}, g = [], w = {}, xe = e.trigger, t = ye(Ae), Ee = Se({}, e.settings), Ne = (fe = Se(e.settings, Lt, Ee)).controls.join(","), k = fe.firstDay, L = fe.rtl, le = fe.pageBuffer, we = fe.weekCounter, p = fe.weeks, j = 6 == p, H = "vertical" == fe.calendarScroll, v = "inline" == fe.display ? t.is("div") ? t : t.parent() : e._$window, Ce = "full" == fe.weekDays ? "" : "min" == fe.weekDays ? "Min" : "Short", Pe = fe.layout || ("inline" == fe.display || /top|bottom/.test(fe.display) && fe.touchUi ? "liquid" : ""), f = (I = "liquid" == Pe) ? null : fe.calendarWidth, he = L && !H ? -1 : 1, x = "mbsc-disabled " + (fe.disabledClass || ""), T = "mbsc-selected " + (fe.selectedTabClass || ""), y = "mbsc-selected " + (fe.selectedClass || ""), W = Math.max(1, Math.floor(((fe.calendarHeight || 0) / p - 45) / 18)), Ne.match(/calendar/) && (b.calendar = 1, D = !0), Ne.match(/date/) && !D && (b.date = 1), Ne.match(/time/) && (b.time = 1), fe.controls.forEach(function (e) {
        b[e] && g.push(e);
      }), E = fe.quickNav && D && j, Me = fe.yearChange && j, I && D && "center" == fe.display && (e._isFullScreen = !0), fe.layout = Pe, fe.preset = (b.date || D ? "date" : "") + (b.time ? "time" : ""), m = jt.call(this, e), ee = Me ? fe.monthNamesShort : fe.monthNames, Oe = fe.yearSuffix || "", Q = (fe.dateWheels || fe.dateFormat).search(/m/i), ke = (fe.dateWheels || fe.dateFormat).search(/y/i), M = e._format, fe.min && (K = ie(ue(fe.min, M, fe)), Z = fe.getYear(K), X = fe.getMonth(K), G = fe.getDate(12 * Math.floor(Z / 12), 0, 1)), fe.max && (R = ie(ue(fe.max, M, fe)), q = fe.getYear(R), J = fe.getMonth(R), $ = fe.getDate(12 * Math.floor(q / 12), 0, 1)), e.refresh = function () {
        pt(!1);
      }, e.redraw = function () {
        pt(!0);
      }, e.navigate = function (e, t) {
        Qe(ue(e, M, fe), !0, t);
      }, e.changeTab = function (t) {
        e._isVisible && b[t] && _e != t && (_e = t, ye(".mbsc-cal-tab", s).removeClass(T).removeAttr("aria-selected"), ye('.mbsc-cal-tab[data-control="' + t + '"]', s).addClass(T).attr("aria-selected", "true"), P && (l.addClass("mbsc-cal-h"), b[_e].removeClass("mbsc-cal-h")), "calendar" == _e && Qe(e.getDate(!0), !1, !0), e._showDayPicker(), e.trigger("onTabChange", {
          tab: _e
        }));
      }, e._checkSize = !0, e._onGenMonth = F, e._onSelectShow = F, e._onSetDate = F, e._onRefresh = F, e._getDayProps = F, e._prepareObj = Le, e._showDayPicker = function () {
        E && (Fe(u), Fe(o));
      }, e._selectDay = e.__selectDay = function (t, a, n) {
        var s = e.live;
        ne = fe.outerMonthChange, A = !0, e.setDate(n, s, 1e3, !s, !0), s && xe("onSet", {
          valueText: e._value
        });
      }, Se(m, {
        labels: null,
        compClass: "mbsc-calendar mbsc-dt mbsc-sc",
        onMarkupReady: function onMarkupReady(t) {
          var n,
              m,
              x,
              y = 0;
          s = ye(t.target), r = ye(".mbsc-fr-c", s), d = e.getDate(!0), h = 0, D && (N = !(!fe.marked && !fe.data || fe.labels || fe.multiLabel || fe.showEventCount), ne = !0, _e = "calendar", ce = "auto" == fe.months ? Math.max(1, Math.min(3, Math.floor((f || (n = v)[0].innerWidth || n.innerWidth()) / 280))) : +fe.months, pe = ce + 2 * le, me = 0, H = H && ce < 2, ge = void 0 === fe.showOuterDays ? ce < 2 && !H : fe.showOuterDays, _ = it(Ye(d), j), r.append(function () {
            var e,
                t,
                a,
                n,
                s,
                i,
                o = "",
                r = L ? fe.btnCalNextClass : fe.btnCalPrevClass,
                l = L ? fe.btnCalPrevClass : fe.btnCalNextClass;
  
            for (s = '<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="' + fe.prevMonthText + '" class="' + r + ' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>', t = 0; t < (p ? ce : 1); t++) {
              s += '<div role="button" class="mbsc-cal-month"></div>';
            }
  
            if (s += '<div data-step="1" role="button" tabindex="0" aria-label="' + fe.nextMonthText + '" class="' + l + ' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>', Me && (o = '<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="' + fe.prevYearText + '" class="' + r + ' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="' + fe.nextYearText + '" class="' + l + ' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'), p && (i = Ge(_)), e = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal ' + (j ? "" : " mbsc-cal-week-view") + (ce > 1 ? " mbsc-cal-multi " : "") + (we ? " mbsc-cal-weeks " : "") + (H ? " mbsc-cal-vertical" : "") + (N ? " mbsc-cal-has-marks" : "") + (O ? " mbsc-cal-has-labels" : "") + (ge ? "" : " mbsc-cal-hide-diff ") + (fe.calendarClass || "") + '"' + (I ? "" : ' style="width:' + (f || 280 * ce) + 'px;"') + '><div class="mbsc-cal-hdr">' + (ke < Q || ce > 1 ? o + s : s + o) + "</div>", p) {
              for (e += '<div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">', a = 0; a < ce; a++) {
                for (e += '<div class="mbsc-cal-days">', t = 0; t < 7; t++) {
                  e += '<div class="mbsc-cal-week-day' + (n = (t + k) % 7) + '" aria-label="' + fe.dayNames[n] + '">' + fe["dayNames" + Ce][n] + "</div>";
                }
  
                e += "</div>";
              }
  
              e += '</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c ' + (fe.calendarClass || "") + '"' + (fe.calendarHeight ? ' style="height:' + fe.calendarHeight + 'px"' : "") + '><div class="mbsc-cal-scroll" style="width:' + 100 / ce + '%">' + i + "</div></div>";
            }
  
            if (e += "</div>", E) {
              for (e += '<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (fe.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = 0; t < 3; t++) {
                for (e += '<div class="mbsc-cal-slide"' + Ue(t - 1) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">', a = 0; a < 12; a++) {
                  a && a % 3 == 0 && (e += '</div><div class="mbsc-cal-row">'), e += '<div role="gridcell"' + (1 == t ? ' tabindex="-1" aria-label="' + fe.monthNames[a] + '" data-val="' + a + '"' : "") + ' class="mbsc-cal-cell' + (1 == t ? " mbsc-btn-e" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + (1 == t ? fe.monthNamesShort[a] : "&nbsp;") + "</div></div>";
                }
  
                e += "</div></div></div>";
              }
  
              for (e += "</div></div></div>", e += '<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (fe.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = -1; t < 2; t++) {
                e += Be(rt(_, t), t);
              }
  
              e += "</div></div></div>";
            }
  
            return e += "</div></div></div>";
          }()), i = ye(".mbsc-cal-month", s), c = ye(".mbsc-cal-year", s), a = ye(".mbsc-cal-day-scroll-c", s)), E && (u = ye(".mbsc-cal-year-picker", s), o = ye(".mbsc-cal-month-picker", s)), l = ye(".mbsc-w-p", s), g.length > 1 && r.before((m = '<div class="mbsc-cal-tabs-c"><div class="mbsc-cal-tabs" role="tablist">', g.forEach(function (e, t) {
            x = fe[("calendar" == e ? "date" : e) + "Text"], m += '<div role="tab" aria-controls="' + Ae.id + "-mbsc-pnl-" + t + '" class="mbsc-cal-tab mbsc-fr-btn-e ' + (t ? "" : T) + '" data-control="' + e + '"' + (fe.tabLink ? '><a href="#">' + x + "</a>" : ' tabindex="0">' + x) + "</div>";
          }), m += "</div></div>")), ["date", "time", "calendar"].forEach(function (e) {
            b[e] ? (b[e] = l.eq(y), y++) : "date" == e && !b.date && D && (l.eq(y).remove(), y++);
          }), g.forEach(function (e) {
            r.append(b[e]);
          }), !D && b.date && b.date.css("position", "relative"), e._scrollers = [], function () {
            if (D && p) {
              var t = ye(".mbsc-cal-scroll-c", s);
              S = ut(t[0], K, R, le, me, ce, pe, _, at, We, Je, Ke, ot), E && (ae = ut(t[1], null, null, 1, 0, 1, 3, _, nt), De = ut(t[2], G, $, 1, 0, 1, 3, _, st, F, F, Be, rt), e.tap(i, function () {
                Ie(o), Fe(u);
              }), e.tap(c, function () {
                Ie(u), Fe(o);
              })), dt(ye(".mbsc-cal-btn", s), function (e, t, a, n) {
                ct(S, t, !0, n);
              }), Je(_), null === fe.defaultValue && !e._hasValue || e._multiple || (e._activeElm = S.$active[0]), a.on("keydown", function (e) {
                var t,
                    a = fe.getYear(d),
                    n = fe.getMonth(d),
                    s = fe.getDay(d);
  
                switch (e.keyCode) {
                  case 32:
                    at(S.$active, e);
                    break;
  
                  case 37:
                    t = fe.getDate(a, n, s - 1 * he);
                    break;
  
                  case 39:
                    t = fe.getDate(a, n, s + 1 * he);
                    break;
  
                  case 38:
                    t = fe.getDate(a, n, s - 7);
                    break;
  
                  case 40:
                    t = fe.getDate(a, n, s + 7);
                    break;
  
                  case 36:
                    t = fe.getDate(a, n, 1);
                    break;
  
                  case 35:
                    t = fe.getDate(a, n + 1, 0);
                    break;
  
                  case 33:
                    t = e.altKey ? fe.getDate(a - 1, n, s) : j ? fe.getDate(a, n - 1, s) : fe.getDate(a, n, s - 7 * p);
                    break;
  
                  case 34:
                    t = e.altKey ? fe.getDate(a + 1, n, s) : j ? fe.getDate(a, n + 1, s) : fe.getDate(a, n, s + 7 * p);
                }
  
                t && (e.preventDefault(), Qe(t, !0, !1, !0));
              });
            }
  
            e.tap(ye(".mbsc-cal-tab", s), function () {
              e.changeTab(ye(this).attr("data-control"));
            });
          }();
        },
        onShow: function onShow() {
          D && p && et(j ? _ : d);
        },
        onHide: function onHide() {
          e._scrollers.forEach(function (e) {
            e.destroy();
          }), C = null, S = null, ae = null, De = null, _e = null;
        },
        onValidated: function onValidated(t) {
          var a,
              n,
              s = t.index,
              i = e._order;
          n = e.getDate(!0), A ? a = "calendar" : void 0 !== s && (a = i.dd == s || i.d == s || i.m == s || i.y == s ? "date" : "time"), xe("onSetDate", {
            date: n,
            control: a
          }), "time" !== a && Qe(n, !1, !!t.time, A && !e._multiple), A = !1;
        },
        onPosition: function onPosition(t) {
          var n,
              o,
              r,
              c,
              u,
              d,
              m,
              v = t.oldHeight,
              x = t.windowHeight;
  
          if (P = (t.hasTabs || !0 === fe.tabs || !1 !== fe.tabs && I) && g.length > 1, I && (t.windowWidth >= fe.breakPointMd ? ye(t.target).addClass("mbsc-fr-md") : ye(t.target).removeClass("mbsc-fr-md")), P ? (s.addClass("mbsc-cal-tabbed"), _e = ye(".mbsc-cal-tab.mbsc-selected", s).attr("data-control"), l.addClass("mbsc-cal-h"), b[_e].removeClass("mbsc-cal-h")) : (s.removeClass("mbsc-cal-tabbed"), l.removeClass("mbsc-cal-h")), e._isFullScreen && (a.height(""), m = x - (u = t.popup.offsetHeight) + a[0].offsetHeight, x >= u && a.height(m)), O && p && x != v) {
            var y = m || a[0].offsetHeight,
                T = ye(".mbsc-cal-txt-ph")[0],
                w = T.offsetTop,
                C = T.offsetHeight,
                M = Math.max(1, Math.floor((y / p - w) / (C + 2)));
            W != M && (W = M, e.redraw());
          }
  
          if (D && p) {
            if (c = (d = I || H || P ? a[0][H ? "offsetHeight" : "offsetWidth"] : f || 280 * ce) != h, h = d, I && c && Me) for (ee = fe.maxMonthWidth > i[0].offsetWidth ? fe.monthNamesShort : fe.monthNames, o = fe.getYear(_), r = fe.getMonth(_), n = 0; n < ce; n++) {
              i.eq(n).text(ee[fe.getMonth(fe.getDate(o, r - me + n, 1))]);
            }
            c && mt(S, !0);
          }
  
          E && c && (mt(ae, !0), mt(De, !0));
        }
      });
    },
        zt = {};
  
    Pt.calendar = function (e) {
      function t(e) {
        return te(e.getFullYear(), e.getMonth(), e.getDate());
      }
  
      function a(e) {
        var a,
            n,
            s = null;
        if (f = {}, e && e.length) for (n = 0; n < e.length; n++) {
          a = ue(e[n], o, u, u.isoParts), s = s || a, f[t(a)] = a;
        }
        return s;
      }
  
      function n() {
        e.redraw();
      }
  
      var s,
          i,
          o,
          r,
          l,
          c = Se({}, e.settings),
          u = Se(e.settings, zt, c),
          d = "mbsc-selected " + (u.selectedClass || ""),
          m = u.defaultValue,
          p = "multiple" == u.select || u.select > 1 || "week" == u.selectType,
          h = L(u.select) ? u.select : 1 / 0,
          f = {};
      return s = Ht.call(this, e), r = void 0 === u.firstSelectDay ? u.firstDay : u.firstSelectDay, o = e._format, p && a(m), e._multiple = p, e._getDayProps = function (e) {
        return {
          selected: p ? void 0 !== f[e] : void 0
        };
      }, e._selectDay = function (t, a, s, o) {
        if (u.setOnDayTap && "multiple" != u.select && "inline" != u.display) return e.setDate(s), void e.select();
        if (p) if ("week" == u.selectType) {
          var l,
              c,
              m = a.getDay() - r;
  
          for (m = m < 0 ? 7 + m : m, "multiple" != u.select && (f = {}), l = 0; l < 7; l++) {
            c = te(a.getFullYear(), a.getMonth(), a.getDate() - m + l), o ? delete f[c] : I(f).length / 7 < h && (f[c] = c);
          }
  
          n();
        } else {
          var v = ye('.mbsc-cal-day[data-full="' + t.attr("data-full") + '"]', i);
          o ? (v.removeClass(d).removeAttr("aria-selected"), delete f[a]) : I(f).length < h && (v.addClass(d).attr("aria-selected", "true"), f[a] = a);
        }
  
        e.__selectDay(t, a, s);
      }, e.setVal = function (t, s, i, o, r) {
        p && (t = a(t)), e._setVal(t, s, i, o, r), p && n();
      }, e.getVal = function (t) {
        var a,
            n = [];
  
        if (p) {
          for (a in f) {
            n.push(ce(f[a], u, o));
          }
  
          return n;
        }
  
        return ce(e.getDate(t), u, o);
      }, Se({}, s, {
        highlight: !p,
        outerMonthChange: !p,
        parseValue: function parseValue(e) {
          return p && e && "string" == typeof e && (e = a(e.split(","))), p && m && m.length && (u.defaultValue = m[0]), s.parseValue.call(this, e);
        },
        formatValue: function formatValue(t) {
          var a,
              n = [];
  
          if (p) {
            for (a in f) {
              n.push(ae(o, f[a], u));
            }
  
            return n.join(", ");
          }
  
          return s.formatValue.call(this, t, e);
        },
        onClear: function onClear() {
          p && (f = {}, n());
        },
        onBeforeShow: function onBeforeShow() {
          void 0 !== u.setOnDayTap || u.buttons && u.buttons.length || 1 != u.controls.length || (u.setOnDayTap = !0), u.setOnDayTap && "inline" != u.display && (u.outerMonthChange = !1), u.counter && p && (u.headerText = function () {
            var e = 0,
                t = "week" == u.selectType ? 7 : 1;
            return ye.each(f, function () {
              e++;
            }), ((e = Math.round(e / t)) > 1 && u.selectedPluralText || u.selectedText).replace(/{count}/, e);
          });
        },
        onMarkupReady: function onMarkupReady(e) {
          s.onMarkupReady.call(this, e), i = ye(e.target), p && (ye(".mbsc-fr-hdr", i).attr("aria-live", "off"), l = Se({}, f));
        },
        onCancel: function onCancel() {
          !e.live && p && (f = Se({}, l));
        }
      });
    };
  
    var Ut = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Yt = a.bool,
        Rt = a.func,
        $t = a.number,
        Wt = {
      controls: a.arrayOf(a.oneOf(["time", "date", "calendar"])),
      firstSelectDay: $t,
      select: a.oneOfType([$t, a.oneOf(["single", "multiple"])]),
      selectType: a.oneOf(["day", "week"]),
      setOnDayTap: Yt,
      onEventSelect: Rt,
      onSetDate: Rt
    },
        Jt = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "calendar"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Jt.propTypes = Ut({}, Jt.propTypes, Re, $e, We, Wt), n.Calendar = Jt;
    var qt = "mbsc-input-wrap",
        Bt = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup", "mouseleave"],
        Kt = {
      tap: Xe
    },
        Gt = void 0;
  
    function Xt(e, t) {
      var a = {},
          n = e[0],
          s = e.parent(),
          i = s.find(".mbsc-err-msg"),
          o = e.attr("data-icon-align") || "left",
          r = e.attr("data-icon");
      s.hasClass(qt) ? s = s.parent() : ye('<span class="' + qt + '"></span>').insertAfter(e).append(e), i && s.find("." + qt).append(i), r && (-1 !== r.indexOf("{") ? a = JSON.parse(r) : a[o] = r), "file" == n.type && (a.right = e.attr("data-icon-upload") || "upload"), (r || t) && (Se(a, t), s.addClass((a.right ? "mbsc-ic-right " : "") + (a.left ? " mbsc-ic-left" : "")).find("." + qt).append('<span class="mbsc-input-fill"></span>').append(a.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + a.left + '"></span>' : "").append(a.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + a.right + '"></span>' : ""));
    }
  
    function Zt(e, t, a, n, s) {
      "button" != t && "submit" != t && "segmented" != t && (e.addClass("mbsc-control-w").addClass("box" == a ? "mbsc-input-box" : "").addClass("outline" == a ? "mbsc-input-outline" : "").addClass("inline" == n ? "mbsc-label-inline" : "").addClass("stacked" == n ? "mbsc-label-stacked" : "").addClass("floating" == n ? "mbsc-label-floating" : "").addClass("floating" == n && s.value ? "mbsc-label-floating-active" : "").find("label").addClass("mbsc-label").each(function (e, t) {
        ye(t).attr("title", ye(t).text());
      }), e.contents().filter(function () {
        return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue);
      }).each(function () {
        ye('<span class="mbsc-label" title="' + this.textContent.trim() + '"></span>').insertAfter(this).append(this);
      }));
    }
  
    function Qt(e) {
      var t = n.themes.form[e];
      return t && t.addRipple ? t : null;
    }
  
    function ea(e, t, a) {
      var n = e.attr(t);
      return void 0 === n || "" === n ? a : n;
    }
  
    var ta = function () {
      function e(t, a) {
        var s = this;
        r(this, e);
        var i = Se({}, Kt, n.settings, a),
            o = ye(t),
            l = o.parent(),
            c = l.hasClass("mbsc-input-wrap") ? l.parent() : l,
            u = o.next().hasClass("mbsc-fr") ? o.next() : null,
            d = X(o),
            m = ea(o, "data-input-style", i.inputStyle),
            p = ea(o, "data-label-style", i.labelStyle);
        u && u.insertAfter(c), Zt(c, d, m, p, t), o.addClass("mbsc-control"), Bt.forEach(function (e) {
          t.addEventListener(e, s);
        }), this.settings = i, this._type = d, this._elm = t, this._$elm = o, this._$parent = c, this._$frame = u, this._ripple = Qt(i.theme), this._isFloating = "floating" == p || c.hasClass("mbsc-label-floating"), t.mbscInst = this;
      }
  
      return l(e, [{
        key: "destroy",
        value: function value() {
          var e = this;
          this._$elm.removeClass("mbsc-control"), Bt.forEach(function (t) {
            e._elm.removeEventListener(t, e);
          }), delete this._elm.mbscInst;
        }
      }, {
        key: "option",
        value: function value(e) {
          Se(this.settings, e), this._ripple = Qt(this.settings.theme);
        }
      }, {
        key: "handleEvent",
        value: function value(e) {
          switch (e.type) {
            case "touchstart":
            case "mousedown":
              this._onStart(e);
  
              break;
  
            case "touchmove":
            case "mousemove":
              this._onMove(e);
  
              break;
  
            case "touchend":
            case "touchcancel":
            case "mouseup":
            case "mouseleave":
              this._onEnd(e);
  
          }
        }
      }, {
        key: "_addRipple",
        value: function value(e) {
          this._ripple && this._$rippleElm && this._ripple.addRipple(this._$rippleElm, e);
        }
      }, {
        key: "_removeRipple",
        value: function value() {
          this._ripple && this._$rippleElm && this._ripple.removeRipple();
        }
      }, {
        key: "_onStart",
        value: function value(e) {
          var t = this._elm;
          ot(e, t) && (this._startX = G(e, "X"), this._startY = G(e, "Y"), Gt && Gt.removeClass("mbsc-active"), t.disabled || (this._isActive = !0, (Gt = this._$elm).addClass("mbsc-active"), this._addRipple(e)));
        }
      }, {
        key: "_onMove",
        value: function value(e) {
          (this._isActive && Math.abs(G(e, "X") - this._startX) > 9 || Math.abs(G(e, "Y") - this._startY) > 9) && (this._$elm.removeClass("mbsc-active"), this._removeRipple(), this._isActive = !1);
        }
      }, {
        key: "_onEnd",
        value: function value(e) {
          var t = this,
              a = this._elm,
              n = this._type;
          this._isActive && this.settings.tap && "touchend" == e.type && !a.readOnly && Z(a, n, e), this._isActive && setTimeout(function () {
            t._$elm.removeClass("mbsc-active"), t._removeRipple();
          }, 100), this._isActive = !1, Gt = null;
        }
      }]), e;
    }(),
        aa = ["focus", "change", "blur", "animationstart"],
        na = function (e) {
      function t(e, a) {
        r(this, t);
  
        var n,
            s,
            i,
            o,
            l,
            c,
            u,
            m,
            p = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
            h = p._$elm,
            f = p._$parent.find(".mbsc-select-input");
  
        if (n = p, s = p._$parent, o = {}, l = (i = h)[0], c = i.attr("data-password-toggle"), u = i.attr("data-icon-show") || "eye", m = i.attr("data-icon-hide") || "eye-blocked", c && (o.right = "password" == l.type ? u : m), Xt(i, o), c && Q(n, s.find(".mbsc-right-ic").addClass("mbsc-input-toggle"), function () {
          "text" == l.type ? (l.type = "password", ye(this).addClass("mbsc-ic-" + u).removeClass("mbsc-ic-" + m)) : (l.type = "text", ye(this).removeClass("mbsc-ic-" + u).addClass("mbsc-ic-" + m));
        }), "file" == e.type) {
          var v = ye('<input type="text" class="' + (h.attr("class") || "") + '" placeholder="' + (h.attr("placeholder") || "") + '"/>').insertAfter(h);
          h.on("change", function (e) {
            for (var t = e.target.files, a = [], n = 0; n < t.length; ++n) {
              a.push(t[n].name);
            }
  
            a.join(", "), v.val(a);
          });
        }
  
        return p._$parent.addClass("mbsc-input"), p.checkLabel = p.checkLabel.bind(p), aa.forEach(function (e) {
          h.on(e, p.checkLabel);
        }), f.length && (h.after(f), p._delm = f[0], p.refresh()), p;
      }
  
      return u(t, ta), l(t, [{
        key: "checkLabel",
        value: function value(e) {
          this._isFloating && ((this._delm || this._elm).value || e && ("focus" == e.type || "animationstart" == e.type && this._$elm.is("*:-webkit-autofill")) ? this._$parent.addClass("mbsc-label-floating-active") : this._$parent.removeClass("mbsc-label-floating-active"));
        }
      }, {
        key: "refresh",
        value: function value() {
          this.checkLabel();
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = this;
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-input-ic").remove(), this._$parent.find(".mbsc-input-fill").remove(), aa.forEach(function (t) {
            e._$elm.off(t, e.checkLabel);
          });
        }
      }]), t;
    }(),
        sa = function (e) {
      function t(e, a) {
        r(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
            s = n._$elm,
            i = s.attr("data-icon");
        return s.addClass("mbsc-btn").find(".mbsc-btn-ic").remove(), i && (s.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + i + '"></span>'), "" === s.text() && s.addClass("mbsc-btn-icon-only")), n._$rippleElm = s, n;
      }
  
      return u(t, ta), t;
    }(),
        ia = function (e) {
      function t(e, a) {
        r(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
        return n._$parent.prepend(n._$elm).addClass("mbsc-checkbox mbsc-control-w").find(".mbsc-checkbox-box").remove(), n._$elm.after('<span class="mbsc-checkbox-box"></span>'), n;
      }
  
      return u(t, ta), t;
    }(),
        oa = function (e) {
      function t(e, a) {
        r(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
        return n._$parent.addClass("mbsc-radio mbsc-control-w").find(".mbsc-radio-box").remove(), n._$elm.after('<span class="mbsc-radio-box"><span></span></span>'), n;
      }
  
      return u(t, ta), t;
    }(),
        ra = function (e) {
      function t(e, a) {
        r(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
            s = n._$elm,
            i = n._$parent,
            o = i.find(".mbsc-select-input"),
            l = o.length ? o : ye('<input tabindex="-1" class="mbsc-select-input mbsc-control" readonly>');
        return n._$input = l, n._delm = l[0], n._setText = n._setText.bind(n), i.addClass("mbsc-select" + (n._$frame ? " mbsc-select-inline" : "")), s.after(l), l.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>'), s.on("change", n._setText), n._setText(), n;
      }
  
      return u(t, na), l(t, [{
        key: "destroy",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.find(".mbsc-select-ic").remove(), this._$elm.off("change", this._setText);
        }
      }, {
        key: "_setText",
        value: function value() {
          var e = this._elm,
              t = ye(e);
          t.is("select") && !t.hasClass("mbsc-comp") && this._$input.val(-1 != e.selectedIndex ? e.options[e.selectedIndex].text : ""), this.refresh();
        }
      }]), t;
    }(),
        la = ["keydown", "input", "scroll"],
        ca = void 0;
  
    function ua() {
      clearTimeout(ca), ca = setTimeout(function () {
        ye("textarea.mbsc-control").each(function () {
          da(this);
        });
      }, 100);
    }
  
    function da(e) {
      var t = void 0,
          a = void 0,
          n = void 0,
          s = ye(e).attr("rows") || 6;
      e.offsetHeight && (e.style.height = "", n = e.scrollHeight - e.offsetHeight, t = e.offsetHeight + (n > 0 ? n : 0), (a = Math.round(t / 24)) > s ? (t = 24 * s + (t - 24 * a), ye(e).addClass("mbsc-textarea-scroll")) : ye(e).removeClass("mbsc-textarea-scroll"), t && (e.style.height = t + "px"));
    }
  
    O && ye(window).on("resize orientationchange", ua);
  
    var ma = function (e) {
      function t(e, a) {
        r(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
        return n._$parent.addClass("mbsc-textarea"), la.forEach(function (e) {
          n._elm.addEventListener(e, n);
        }), da(e), n;
      }
  
      return u(t, na), l(t, [{
        key: "destroy",
        value: function value() {
          var e = this;
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), la.forEach(function (t) {
            e._elm.removeEventListener(t, e);
          });
        }
      }, {
        key: "handleEvent",
        value: function value(e) {
          switch (c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this).call(this, e), e.type) {
            case "keydown":
            case "input":
              this._onInput(e);
  
              break;
  
            case "scroll":
              !function (e) {
                var t = ye(e);
  
                if (!t.hasClass("mbsc-textarea-scroll")) {
                  var a = e.scrollHeight - e.offsetHeight,
                      n = e.offsetHeight + a;
                  Math.round(n / 24) <= (t.attr("rows") || 6) && (e.scrollTop = 0, e.style.height = n + "px");
                }
              }(this._elm);
          }
        }
      }, {
        key: "_onInput",
        value: function value() {
          var e = this;
          clearTimeout(this._debounce), this._debounce = setTimeout(function () {
            da(e._elm);
          }, 100);
        }
      }, {
        key: "refresh",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "refresh", this).call(this), clearTimeout(this._debounce), da(this._elm);
        }
      }]), t;
    }(),
        pa = function (e) {
      function t(e, a) {
        r(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
            s = void 0,
            i = void 0,
            o = n._$elm,
            l = n._$parent;
        return l.hasClass("mbsc-segmented-item-ready") || (s = ye('<div class="mbsc-segmented"></div>'), l.after(s), l.parent().find('input[name="' + o.attr("name") + '"]').each(function () {
          var e = ye(this);
          i = e.parent().addClass("mbsc-segmented-item mbsc-segmented-item-ready"), ye('<span class="mbsc-segmented-content">' + (e.attr("data-icon") ? '<span class="mbsc-ic mbsc-ic-' + e.attr("data-icon") + '"></span>' : "") + "</span>").append(i.contents()).appendTo(i), i.prepend(e), s.append(i);
        })), n._$rippleElm = o.next(), n;
      }
  
      return u(t, ta), t;
    }(),
        ha = function ha(e, t) {
      var a,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x = this,
          y = ye(e),
          T = v;
  
      function _() {
        var t;
        e.disabled || (t = parseFloat(ye(this).val()), S(isNaN(t) ? v : t));
      }
  
      function w() {
        return e.disabled;
      }
  
      function C(e, t) {
        S(v + t * m);
      }
  
      function S(e, t, n) {
        T = v, void 0 === t && (t = !0), void 0 === n && (n = t), v = k(e), i.removeClass("mbsc-disabled"), t && y.val(v), v == l ? s.addClass("mbsc-disabled") : v == r && a.addClass("mbsc-disabled"), v !== T && n && y.trigger("change");
      }
  
      function M(e, t, a) {
        var n = y.attr(e);
        return void 0 === n || "" === n ? t : a ? n : +n;
      }
  
      function k(e) {
        return +Math.min(r, Math.max(Math.round(e / m) * m, l)).toFixed(d);
      }
  
      Me.call(this, e, t, !0), x.getVal = function () {
        var e = parseFloat(y.val());
        return k(e = isNaN(e) ? v : e);
      }, x.setVal = function (e, t, a) {
        e = parseFloat(e), S(isNaN(e) ? v : e, t, a);
      }, x._init = function () {
        b = y.parent().hasClass("mbsc-stepper"), g = b ? y.closest(".mbsc-stepper-cont") : y.parent(), h = x.settings, l = void 0 === t.min ? M("min", h.min) : t.min, r = void 0 === t.max ? M("max", h.max) : t.max, m = void 0 === t.step ? M("step", h.step) : t.step, d = Math.abs(m) < 1 ? (m + "").split(".")[1].length : 0, c = void 0 === t.inputStyle ? M("data-input-style", h.inputStyle, !0) : t.inputStyle, o = y.attr("data-val") || h.val, v = k(+e.value || 0), f = n.themes.form[h.theme], u = f && f.addRipple ? f : null, b || g.addClass("mbsc-stepper-cont mbsc-control-w").addClass("box" == c ? "mbsc-input-box" : "").addClass("outline" == c ? "mbsc-input-outline" : "").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (v == l ? "mbsc-disabled" : "") + '" data-step="-1" tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (v == r ? "mbsc-disabled" : "") + '"  data-step="1" tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span></span></span>').prepend(y), s = ye(".mbsc-stepper-minus", g), a = ye(".mbsc-stepper-plus", g), i = ye(".mbsc-stepper-control", g), b || ("left" == o ? (g.addClass("mbsc-stepper-val-left"), y.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == o ? (g.addClass("mbsc-stepper-val-right"), a.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : s.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>')), p || (y.on("change", _), p = dt(i, C, 150, w, !1, u)), y.val(v).attr("data-role", "stepper").attr("min", l).attr("max", r).attr("step", m).addClass("mbsc-control"), e.mbscInst = x;
      }, x._destroy = function () {
        y.removeClass("mbsc-control").off("change", _), p.destroy(), delete e.mbscInst;
      }, x.init();
    };
  
    ha.prototype = {
      _class: "stepper",
      _hasDef: !0,
      _hasTheme: !0,
      _defaults: {
        min: 0,
        max: 100,
        step: 1
      }
    }, we.Stepper = ha;
  
    var fa = function fa(e, t, a) {
      var n,
          s,
          i,
          o,
          r = this;
      Me.call(this, e, t, !0), r.__init = F, r.__destroy = F, r._init = function () {
        var t;
        o = r.settings, n = ye(e), t = !!s, s = (s = n.parent()).hasClass("mbsc-input-wrap") ? s.parent() : s, r._$parent = s, i && s.removeClass(i), i = r._css + " mbsc-progress-w mbsc-control-w mbsc-" + o.theme + (o.baseTheme ? " mbsc-" + o.baseTheme : "") + (o.rtl ? " mbsc-rtl" : " mbsc-ltr"), s.addClass(i), n.addClass("mbsc-control"), r.__init(), t || r._attachChange(), r.refresh(), e.mbscInst = r;
      }, r._destroy = function () {
        r.__destroy(), s.removeClass(i), n.removeClass("mbsc-control"), delete e.mbscInst;
      }, a || r.init();
    },
        va = function va(e, t, a) {
      var n,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O,
          N,
          P,
          E,
          V,
          A,
          I,
          j,
          L = this,
          H = new Date();
  
      function z(t) {
        "mousedown" === t.type && t.preventDefault(), !ot(t, this) || u && !x || e.disabled || e.readOnly || (O.stopProp && t.stopPropagation(), u = !0, S = !1, m = !1, P = G(t, "X"), E = G(t, "Y"), v = P, c.removeClass("mbsc-progress-anim"), s = M ? ye(".mbsc-slider-handle", this) : o, i && i.removeClass("mbsc-handle-curr"), i = s.parent().addClass("mbsc-active mbsc-handle-curr"), n.addClass("mbsc-active"), g = +s.attr("data-index"), I = c[0].offsetWidth, f = c[0].getBoundingClientRect().left, "mousedown" === t.type && (y = !0, ye(document).on("mousemove", U).on("mouseup", Y)), "mouseenter" === t.type && (x = !0, ye(document).on("mousemove", U)));
      }
  
      function U(e) {
        u && (v = G(e, "X"), b = G(e, "Y"), p = v - P, h = b - E, Math.abs(p) > 5 && (S = !0), (S || y || x) && Math.abs(H - new Date()) > 50 && (H = new Date(), Q(v, O.round, _ && (!x || y))), S ? e.preventDefault() : Math.abs(h) > 7 && "touchmove" == e.type && Z());
      }
  
      function Y(e) {
        u && (e.preventDefault(), M || c.addClass("mbsc-progress-anim"), x && !y ? ee(j[g], g, !1, !1, !0) : Q(v, !0, !0), S || m || ("touchend" == e.type && B(), L._onTap(j[g])), "mouseup" == e.type && (y = !1), "mouseleave" == e.type && (x = !1), x || Z());
      }
  
      function R() {
        u && Z();
      }
  
      function W() {
        var e = L._readValue(ye(this)),
            t = +ye(this).attr("data-index");
  
        e !== j[t] && (j[t] = e, k[t] = e, ee(e, t));
      }
  
      function J(e) {
        e.stopPropagation();
      }
  
      function q(e) {
        e.preventDefault();
      }
  
      function K(t) {
        var a;
  
        if (!e.disabled) {
          switch (t.keyCode) {
            case 38:
            case 39:
              a = 1;
              break;
  
            case 40:
            case 37:
              a = -1;
          }
  
          a && (t.preventDefault(), A || (g = +ye(this).attr("data-index"), ee(j[g] + D * a, g, !0), A = setInterval(function () {
            ee(j[g] + D * a, g, !0);
          }, 200)));
        }
      }
  
      function X(e) {
        e.preventDefault(), clearInterval(A), A = null;
      }
  
      function Z() {
        u = !1, i.removeClass("mbsc-active"), n.removeClass("mbsc-active"), ye(document).off("mousemove", U).off("mouseup", Y);
      }
  
      function Q(e, t, a) {
        var n = t ? Math.min(Math[L._rounding || "round"](Math.max(100 * (e - f) / I, 0) / N / D) * D * 100 / (w - C + d), 100) : Math.max(0, Math.min(100 * (e - f) / I, 100));
        T && (n = 100 - n), ee(Math.round((C - d + n / N) * V) / V, g, a, n);
      }
  
      function ee(e, t, a, n, s, i) {
        var r = o.eq(t),
            l = r.parent();
        e = Math.min(w, Math.max(e, C)), void 0 === i && (i = a), L._update ? e = L._update(e, j, t, n, M, s, l) : l.css({
          left: T ? "auto" : (n || $(e, C, w)) + "%",
          right: T ? (n || $(e, C, w)) + "%" : "auto"
        }), e > C ? l.removeClass("mbsc-slider-start") : (j[t] > C || s) && l.addClass("mbsc-slider-start"), a && (j[t] = e), a && k[t] != e && (m = !0, k[t] = e, L._fillValue(e, t, i)), r.attr("aria-valuenow", e);
      }
  
      fa.call(this, e, t, !0), L._onTap = F, L.___init = F, L.___destroy = F, L._attachChange = function () {
        n.on(O.changeEvent, W);
      }, L.__init = function () {
        var e;
        o && (e = !0, o.parent().remove()), L.___init(), l = L._$parent, c = L._$track, n = l.find("input"), O = L.settings, C = L._min, w = L._max, d = L._base || 0, D = L._step, _ = L._live, V = D % 1 != 0 ? 100 / (100 * +(D % 1).toFixed(2)) : 1, N = 100 / (w - C + d) || 100, M = n.length > 1, T = O.rtl, j = [], k = [], n.each(function (e) {
          j[e] = L._readValue(ye(this)), ye(this).attr("data-index", e);
        }), o = l.find(".mbsc-slider-handle"), r = l.find(M ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"), o.on("keydown", K).on("keyup", X).on("blur", X), r.on("touchstart mousedown" + (O.hover ? " mouseenter" : ""), z).on("touchmove", U).on("touchend touchcancel" + (O.hover ? " mouseleave" : ""), Y).on("pointercancel", R), e || (n.on("click", J), l.on("click", q));
      }, L.__destroy = function () {
        l.off("click", q), n.off(O.changeEvent, W).off("click", J), o.off("keydown", K).off("keyup", X).off("blur", X), r.off("touchstart mousedown mouseenter", z).off("touchmove", U).off("touchend touchcancel mouseleave", Y).off("pointercancel", R), L.___destroy();
      }, L.refresh = function () {
        n.each(function (e) {
          ee(L._readValue(ye(this)), e, !0, !1, !0, !1);
        });
      }, L.getVal = function () {
        return M ? j.slice(0) : j[0];
      }, L.setVal = L._setVal = function (e, t, a) {
        ye.isArray(e) || (e = [e]), ye.each(e, function (e, t) {
          j[e] = t;
        }), ye.each(e, function (e, t) {
          ee(t, e, !0, !1, !0, a);
        });
      }, a || L.init();
    },
        ba = function ba(e, t) {
      var a,
          n,
          s,
          i,
          o = this;
      Se(t = t || {}, {
        changeEvent: "click",
        round: !1
      }), va.call(this, e, t, !0), o._readValue = function () {
        return e.checked ? 1 : 0;
      }, o._fillValue = function (e, t, n) {
        a.prop("checked", !!e), n && a.trigger("change");
      }, o._onTap = function (e) {
        o._setVal(e ? 0 : 1);
      }, o.___init = function () {
        s = o.settings, a = ye(e), (n = a.parent()).find(".mbsc-switch-track").remove(), n.prepend(a), a.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + s.offText + '</span><span class="mbsc-switch-txt-on">' + s.onText + "</span></span></span></span></span>"), i && i.destroy(), i = new ta(e, s), o._$track = n.find(".mbsc-progress-track"), o._min = 0, o._max = 1, o._step = 1;
      }, o.___destroy = function () {
        i.destroy();
      }, o.getVal = function () {
        return e.checked;
      }, o.setVal = function (e, t, a) {
        o._setVal(e ? 1 : 0, t, a);
      }, o.init();
    };
  
    ba.prototype = {
      _class: "switch",
      _css: "mbsc-switch",
      _hasTheme: !0,
      _hasLang: !0,
      _hasDef: !0,
      _defaults: {
        stopProp: !0,
        offText: "Off",
        onText: "On"
      }
    }, we.Switch = ba;
    /* eslint-disable no-unused-vars */
  
    var ga = function ga(e, t, a) {
      var n,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b = this;
  
      function g() {
        var e = x("value", c);
        e !== f && y(e);
      }
  
      function x(e, t, a) {
        var n = s.attr(e);
        return void 0 === n || "" === n ? t : a ? n : +n;
      }
  
      function y(e, t, a, n) {
        e = Math.min(u, Math.max(e, c)), o.css("width", 100 * (e - c) / (u - c) + "%"), void 0 === a && (a = !0), void 0 === n && (n = a), (e !== f || t) && b._display(e), e !== f && (f = e, a && s.attr("value", f), n && s.trigger("change"));
      }
  
      fa.call(this, e, t, !0), b._display = function (e) {
        v = h && p.returnAffix ? h.replace(/\{value\}/, e).replace(/\{max\}/, u) : e, r && r.html(v), n && n.html(v);
      }, b._attachChange = function () {
        s.on("change", g);
      }, b.__init = function () {
        var a, v, g, y;
        if (p = b.settings, s = ye(e), y = !!i, i = b._$parent, c = b._min = void 0 === t.min ? x("min", p.min) : t.min, u = b._max = void 0 === t.max ? x("max", p.max) : t.max, d = void 0 === t.inputStyle ? x("data-input-style", p.inputStyle, !0) : t.inputStyle, m = void 0 === t.labelStyle ? x("data-label-style", p.labelStyle, !0) : t.labelStyle, f = x("value", c), a = s.attr("data-val") || p.val, g = (g = s.attr("data-step-labels")) ? JSON.parse(g) : p.stepLabels, h = s.attr("data-template") || (100 != u || p.template ? p.template : "{value}%"), y ? (a && (n.remove(), i.removeClass("mbsc-progress-value-" + ("right" == a ? "right" : "left"))), g && ye(".mbsc-progress-step-label", l).remove()) : (Zt(i, null, d, m, e), Xt(s), i.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'), o = b._$progress = i.find(".mbsc-progress-bar"), l = b._$track = i.find(".mbsc-progress-track")), s.attr("min", c).attr("max", u), a && (n = ye('<span class="mbsc-progress-value"></span>'), i.addClass("mbsc-progress-value-" + ("right" == a ? "right" : "left")).find(".mbsc-input-wrap").append(n)), g) for (v = 0; v < g.length; ++v) {
          l.append('<span class="mbsc-progress-step-label" style="' + (p.rtl ? "right" : "left") + ": " + 100 * (g[v] - c) / (u - c) + '%" >' + g[v] + "</span>");
        }
        r = ye(s.attr("data-target") || p.target);
      }, b.__destroy = function () {
        i.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-progress-cont").remove(), i.find(".mbsc-input-ic").remove(), s.off("change", g);
      }, b.refresh = function () {
        y(x("value", c), !0, !1);
      }, b.getVal = function () {
        return f;
      }, b.setVal = function (e, t, a) {
        y(e, !0, t, a);
      }, a || b.init();
    };
  
    ga.prototype = {
      _class: "progress",
      _css: "mbsc-progress",
      _hasTheme: !0,
      _hasLang: !0,
      _hasDef: !0,
      _defaults: {
        min: 0,
        max: 100,
        returnAffix: !0
      }
    }, we.Progress = ga;
  
    var xa = function xa(e, t, a) {
      var n,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v = this;
      ga.call(this, e, t, !0);
      var b = v.__init,
          g = v.__destroy;
      va.call(this, e, t, !0);
      var x = v.__init,
          y = v.__destroy;
      v.__init = function () {
        b(), x();
      }, v.__destroy = function () {
        g(), y();
      }, v._update = function (e, t, a, n, s, r, h) {
        return u ? 0 === a ? (e = Math.min(e, t[1]), i.css({
          width: $(t[1], p, m) - $(e, p, m) + "%",
          left: d ? "auto" : $(e, p, m) + "%",
          right: d ? $(e, p, m) + "%" : "auto"
        })) : (e = Math.max(e, t[0]), i.css({
          width: $(e, p, m) - $(t[0], p, m) + "%"
        })) : s || !l ? h.css({
          left: d ? "auto" : (n || $(e, p, m)) + "%",
          right: d ? (n || $(e, p, m)) + "%" : "auto"
        }) : i.css("width", (n || $(e, p, m)) + "%"), c && o.eq(a).html(e), s || t[a] == e && !r || v._display(e), e;
      }, v._readValue = function (e) {
        return +e.val();
      }, v._fillValue = function (e, t, a) {
        n.eq(t).val(e), a && n.eq(t).trigger("change");
      }, v._markupReady = function () {
        var e, t;
        if (c && s.addClass("mbsc-slider-has-tooltip"), 1 != h) for (t = (m - p) / h, e = 0; e <= t; ++e) {
          r.append('<span class="mbsc-slider-step" style="' + (d ? "right" : "left") + ":" + 100 / t * e + '%"></span>');
        }
        n.each(function (e) {
          "range" == this.type && ye(this).attr("min", p).attr("max", m).attr("step", h), (l ? i : r).append('<span class="mbsc-slider-handle-cont' + (u && !e ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + p + '" aria-valuemax="' + m + '" data-index="' + e + '"></span>' + (c ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>");
        }), o = s.find(".mbsc-slider-tooltip");
      }, v.___init = function () {
        s && (s.removeClass("mbsc-slider-has-tooltip"), 1 != h && ye(".mbsc-slider-step", r).remove()), s = v._$parent, r = v._$track, i = v._$progress, n = s.find("input"), f = v.settings, p = v._min, m = v._max, v._step = h = void 0 === t.step ? +n.attr("step") || f.step : t.step, v._live = W("data-live", f.live, n), c = W("data-tooltip", f.tooltip, n), l = W("data-highlight", f.highlight, n) && n.length < 3, u = l && 2 == n.length, d = f.rtl, v._markupReady();
      }, a || v.init();
    };
  
    xa.prototype = {
      _class: "progress",
      _css: "mbsc-progress mbsc-slider",
      _hasTheme: !0,
      _hasLang: !0,
      _hasDef: !0,
      _defaults: {
        changeEvent: "change",
        stopProp: !0,
        min: 0,
        max: 100,
        step: 1,
        live: !0,
        highlight: !0,
        round: !0,
        returnAffix: !0
      }
    }, we.Slider = xa;
  
    var ya = function ya(e, t, a) {
      var n,
          s,
          i,
          o,
          r,
          l,
          c,
          u = this,
          d = ye(e);
      xa.call(this, e, t, !0), u._update = function (e, t, a, s, o, r) {
        return n.css("width", $(e, 0, i) + "%"), o || t[a] == e && !r || u._display(e), e;
      }, u._markupReady = function () {
        var e,
            t = "",
            a = "";
  
        for (s = u._$track, n = u._$progress, c = u.settings, o = u._min, i = u._max, u._base = o, u._rounding = c.rtl ? "floor" : "ceil", r = d.attr("data-empty") || c.empty, l = d.attr("data-filled") || c.filled, e = 0; e < i; ++e) {
          t += '<span class="mbsc-ic mbsc-ic-' + r + '"></span>', a += '<span class="mbsc-ic mbsc-ic-' + l + '"></span>';
        }
  
        s.html(t), s.append(n), n.html(a), s.append('<span class="mbsc-rating-handle-cont"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + o + '" aria-valuemax="' + i + '" data-index="0"></span></span>');
      }, a || u.init();
    };
  
    ya.prototype = {
      _class: "progress",
      _css: "mbsc-progress mbsc-rating",
      _hasTheme: !0,
      _hasLang: !0,
      _hasDef: !0,
      _defaults: {
        changeEvent: "change",
        stopProp: !0,
        min: 1,
        max: 5,
        step: 1,
        live: !0,
        round: !0,
        hover: !0,
        highlight: !0,
        returnAffix: !0,
        empty: "star",
        filled: "star3"
      }
    }, we.Rating = ya;
  
    var Ta = 1,
        _a = function () {
      function e(t, a) {
        var n = this;
        r(this, e);
        var s = void 0,
            i = void 0,
            o = void 0,
            l = ye(t);
  
        if (this.settings = a, this._isOpen = a.isOpen || !1, l.addClass("mbsc-collapsible " + (this._isOpen ? "mbsc-collapsible-open" : "")), l.hasClass("mbsc-card") ? (i = l.find(".mbsc-card-header").eq(0).addClass("mbsc-collapsible-header"), o = l.find(".mbsc-card-content").eq(0).addClass("mbsc-collapsible-content")) : l.hasClass("mbsc-form-group") || l.hasClass("mbsc-form-group-inset") ? (i = l.find(".mbsc-form-group-title").eq(0).addClass("mbsc-collapsible-header"), o = l.find(".mbsc-form-group-content").eq(0).addClass("mbsc-collapsible-content")) : (i = l.find(".mbsc-collapsible-header").eq(0), o = l.find(".mbsc-collapsible-content").eq(0)), (s = o[0]) && !s.id && (s.id = "mbsc-collapsible-" + Ta++), i.length && s) {
          var c = ye('<span class="mbsc-collapsible-icon mbsc-ic mbsc-ic-arrow-down5"></span>');
          Q(this, i, function () {
            n.collapse();
          }), i.attr("role", "button").attr("aria-expanded", this._isOpen).attr("aria-controls", s.id).attr("tabindex", "0").on("mousedown", function (e) {
            e.preventDefault();
          }).on("keydown", function (e) {
            32 !== e.which && 13 != e.keyCode || (e.preventDefault(), n.collapse());
          }).append(c);
        }
  
        t.mbscInst = this, this._$header = i, this._$content = o, this._$elm = l, this._$accordionParent = l.parent("[mbsc-accordion], mbsc-accordion, .mbsc-accordion"), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.toggle = this.toggle.bind(this);
      }
  
      return l(e, [{
        key: "collapse",
        value: function value(e) {
          var t = this._$elm,
              a = this._$content;
          void 0 === e && (e = !this._isOpen), e && this._isOpen || !e && !this._isOpen || !a.length || (e ? (Ze && a.on("transitionend", function e() {
            a.off("transitionend", e).css("height", "");
          }).css("height", a[0].scrollHeight), t.addClass("mbsc-collapsible-open")) : (Ze && a.css("height", getComputedStyle(a[0]).height), setTimeout(function () {
            a.css("height", 0), t.removeClass("mbsc-collapsible-open");
          })), e && this._$accordionParent && this._$accordionParent.find(".mbsc-collapsible-open").each(function () {
            this !== t[0] && this.mbscInst.hide();
          }), this._isOpen = e, this._$header.attr("aria-expanded", this._isOpen));
        }
      }, {
        key: "show",
        value: function value() {
          this.collapse(!0);
        }
      }, {
        key: "hide",
        value: function value() {
          this.collapse(!1);
        }
      }, {
        key: "toggle",
        value: function value() {
          this.collapse();
        }
      }, {
        key: "destroy",
        value: function value() {
          this._$elm.removeClass("mbsc-collapsible mbsc-collapsible-open"), this._$content.removeClass("mbsc-collapsible-content"), this._$header.removeClass("mbsc-collapsible-header").find(".mbsc-collapsible-icon").remove();
        }
      }]), e;
    }();
  
    we.CollapsibleBase = _a;
    var wa = 0;
  
    function Ca(e, t, a, n) {
      ye("input,select,textarea,progress,button", e).each(function () {
        var e = ye(this),
            n = X(e);
        if ("false" != e.attr("data-enhance")) if (e.hasClass("mbsc-control")) this.mbscInst && this.mbscInst.option({
          theme: a.theme,
          lang: a.lang,
          rtl: a.rtl,
          onText: a.onText,
          offText: a.offText,
          stopProp: a.stopProp
        });else switch (this.id || (this.id = "mbsc-form-control-" + ++wa), n) {
          case "button":
          case "submit":
            t[this.id] = new sa(this, {
              theme: a.theme,
              tap: a.tap
            });
            break;
  
          case "switch":
            t[this.id] = new ba(this, {
              theme: a.theme,
              lang: a.lang,
              rtl: a.rtl,
              tap: a.tap,
              onText: a.onText,
              offText: a.offText,
              stopProp: a.stopProp
            });
            break;
  
          case "checkbox":
            t[this.id] = new ia(this, {
              tap: a.tap
            });
            break;
  
          case "range":
            ye(this).parent().hasClass("mbsc-slider") || (t[this.id] = new xa(this, {
              theme: a.theme,
              lang: a.lang,
              rtl: a.rtl,
              stopProp: a.stopProp,
              labelStyle: a.labelStyle
            }));
            break;
  
          case "rating":
            t[this.id] = new ya(this, {
              theme: a.theme,
              lang: a.lang,
              rtl: a.rtl,
              stopProp: a.stopProp
            });
            break;
  
          case "progress":
            t[this.id] = new ga(this, {
              theme: a.theme,
              lang: a.lang,
              rtl: a.rtl,
              labelStyle: a.labelStyle
            });
            break;
  
          case "radio":
            t[this.id] = new oa(this, {
              tap: a.tap
            });
            break;
  
          case "select":
          case "select-one":
          case "select-multiple":
            t[this.id] = new ra(this, {
              tap: a.tap,
              inputStyle: a.inputStyle,
              labelStyle: a.labelStyle
            });
            break;
  
          case "textarea":
            t[this.id] = new ma(this, {
              tap: a.tap,
              inputStyle: a.inputStyle,
              labelStyle: a.labelStyle
            });
            break;
  
          case "segmented":
            t[this.id] = new pa(this, {
              theme: a.theme,
              tap: a.tap
            });
            break;
  
          case "stepper":
            t[this.id] = new ha(this, {
              theme: a.theme
            });
            break;
  
          case "hidden":
            return;
  
          default:
            t[this.id] = new na(this, {
              tap: a.tap,
              inputStyle: a.inputStyle,
              labelStyle: a.labelStyle
            });
        }
      }), ye("[data-collapsible]:not(.mbsc-collapsible)", e).each(function () {
        var e = ye(this).attr("data-open");
        this.id || (this.id = "mbsc-form-control-" + ++wa), t[this.id] = new _a(this, {
          isOpen: void 0 !== e && "false" != e
        }), _e[this.id] = t[this.id];
      }), n || ua();
    }
    /* eslint-disable no-unused-vars */
  
  
    var Sa = function Sa(e, t) {
      var a,
          s,
          i = "",
          o = ye(e),
          r = {},
          l = this;
  
      function c() {
        o.removeClass("mbsc-no-touch");
      }
  
      Me.call(this, e, t, !0), l.refresh = function (e) {
        Ca(o, r, a, e);
      }, l._init = function () {
        var t = void 0 !== a.collapsible || void 0 !== o.attr("data-collapsible");
  
        if (o.hasClass("mbsc-card") || o.on("touchstart", c).show(), i && o.removeClass(i), i = l.remote.cards.cssClass, o.addClass(i).removeClass("mbsc-cloak"), t && !s) {
          var r = o.attr("data-open");
          s = new _a(e, {
            isOpen: void 0 !== r && "false" != r || !0 === a.collapsible
          });
        }
  
        o.append(l._getText(n, .5)), l.refresh();
      }, l._destroy = function () {
        for (var e in o.removeClass(i).off("touchstart", c), r) {
          r[e].destroy();
        }
  
        s && s.destroy();
      }, l.toggle = function () {
        s && s.toggle();
      }, l.hide = function () {
        s && s.hide();
      }, l.show = function () {
        s && s.show();
      }, a = l.settings, l.init();
    };
  
    Sa.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _class: "card",
      _defaults: {
        tap: Xe,
        stopProp: !0,
        rtl: !1
      }
    }, we.Card = Sa, xe("[mbsc-card]", Sa, !0);
  
    var Ma = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    };
  
    function ka(e, t) {
      var a = {};
  
      for (var n in e) {
        t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
      }
  
      return a;
    }
  
    var Da = {
      collapsible: a.bool,
      open: a.bool
    },
        Oa = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, tt), l(n, [{
        key: "componentDidUpdate",
        value: function value() {
          if (this.optimizeThisUpdate.updateOptions) {
            var e = this.getSettingsFromProps(this.props, {
              collapsible: this.props.open || !1
            });
            this.instance.option(e);
          } else this.optimizeThisUpdate.updateCollapsible && (this.props.open ? this.instance.show() : this.instance.hide());
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = this.getSettingsFromProps(this.props),
              a = t.open,
              n = ka(t, ["open"]),
              s = this.getSettingsFromProps(e),
              i = s.open,
              o = !qe(ka(s, ["open"]), n),
              r = !qe(i, a),
              l = !qe(e.children, this.props.children);
          return this.optimizeThisUpdate = {
            updateOptions: o,
            updateCollapsible: r,
            updateChildren: l
          }, o || r || l;
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.props.collapsible && (e.collapsible = this.props.open || !1), this.instance = new Sa(t.findDOMNode(this), e);
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children, t.collapsible, t.open, t.theme, t.lang, t.rtl, ka(t, ["className", "children", "collapsible", "open", "theme", "lang", "rtl"]));
          return e.createElement("div", Ma({
            className: this.initialCssClass + " mbsc-cloak"
          }, a), this.props.children);
        }
      }]), n;
    }(),
        Na = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.initialCssClass = e.className, a.state = {
          cssClasses: e.className
        }, a.getCssClasses = a.getCssClasses.bind(a), a;
      }
  
      return u(t, e), l(t, [{
        key: "getCssClasses",
        value: function value(e) {
          return e + (this.initialCssClass ? " " + this.initialCssClass : "");
        }
      }]), t;
    }(e.Component),
        Pa = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, Na), l(a, [{
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children, ka(t, ["className", "children"])),
              n = this.getCssClasses("mbsc-card-header");
          return e.createElement("div", Ma({
            className: n
          }, a), this.props.children);
        }
      }]), a;
    }(),
        Ea = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, Na), l(a, [{
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children, ka(t, ["className", "children"])),
              n = this.getCssClasses("mbsc-card-content");
          return e.createElement("div", Ma({
            className: n
          }, a), this.props.children);
        }
      }]), a;
    }(),
        Va = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, Na), l(a, [{
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children, ka(t, ["className", "children"])),
              n = this.getCssClasses("mbsc-card-footer");
          return e.createElement("div", Ma({
            className: n
          }, a), this.props.children);
        }
      }]), a;
    }(),
        Aa = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, Na), l(a, [{
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children, ka(t, ["className", "children"])),
              n = this.getCssClasses("mbsc-card-title");
          return e.createElement("div", Ma({
            className: n
          }, a), this.props.children);
        }
      }]), a;
    }(),
        Fa = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, Na), l(a, [{
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children, ka(t, ["className", "children"])),
              n = this.getCssClasses("mbsc-card-subtitle");
          return e.createElement("div", Ma({
            className: n
          }, a), this.props.children);
        }
      }]), a;
    }();
  
    function Ia(e) {
      var t = [Math.round(e.r).toString(16), Math.round(e.g).toString(16), Math.round(e.b).toString(16)];
      return ye.each(t, function (e, a) {
        1 == a.length && (t[e] = "0" + a);
      }), "#" + t.join("");
    }
  
    function ja(e) {
      return {
        r: (e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16)) >> 16,
        g: (65280 & e) >> 8,
        b: 255 & e,
        toString: function toString() {
          return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        }
      };
    }
  
    function La(e) {
      var t,
          a,
          n,
          s = e.h,
          i = 255 * e.s / 100,
          o = 255 * e.v / 100;
      if (0 === i) t = a = n = o;else {
        var r = (255 - i) * o / 255,
            l = s % 60 * (o - r) / 60;
        360 == s && (s = 0), s < 60 ? (t = o, n = r, a = r + l) : s < 120 ? (a = o, n = r, t = o - l) : s < 180 ? (a = o, t = r, n = r + l) : s < 240 ? (n = o, t = r, a = o - l) : s < 300 ? (n = o, a = r, t = r + l) : s < 360 ? (t = o, a = r, n = o - l) : t = a = n = 0;
      }
      return {
        r: t,
        g: a,
        b: n,
        toString: function toString() {
          return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        }
      };
    }
  
    function Ha(e) {
      var t,
          a,
          n = 0,
          s = Math.min(e.r, e.g, e.b),
          i = Math.max(e.r, e.g, e.b),
          o = i - s;
      return a = i, n = (t = i ? 255 * o / i : 0) ? e.r == i ? (e.g - e.b) / o : e.g == i ? 2 + (e.b - e.r) / o : 4 + (e.r - e.g) / o : -1, (n *= 60) < 0 && (n += 360), {
        h: n,
        s: t *= 100 / 255,
        v: a *= 100 / 255,
        toString: function toString() {
          return "hsv(" + Math.round(this.h) + "," + Math.round(this.s) + "%," + Math.round(this.v) + "%)";
        }
      };
    }
  
    function za(e) {
      var t,
          a,
          n = e.r / 255,
          s = e.g / 255,
          i = e.b / 255,
          o = Math.max(n, s, i),
          r = Math.min(n, s, i),
          l = (o + r) / 2;
      if (o == r) t = a = 0;else {
        var c = o - r;
  
        switch (a = l > .5 ? c / (2 - o - r) : c / (o + r), o) {
          case n:
            t = (s - i) / c + (s < i ? 6 : 0);
            break;
  
          case s:
            t = (i - n) / c + 2;
            break;
  
          case i:
            t = (n - s) / c + 4;
        }
  
        t /= 6;
      }
      return {
        h: Math.round(360 * t),
        s: Math.round(100 * a),
        l: Math.round(100 * l),
        toString: function toString() {
          return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)";
        }
      };
    }
  
    function Ua(e) {
      return za(ja(e));
    }
  
    function Ya(e) {
      return Ia(function (e) {
        var t,
            a,
            n,
            s,
            i,
            o,
            r = e.h,
            l = e.s,
            c = e.l;
        return isFinite(r) || (r = 0), isFinite(l) || (l = 0), isFinite(c) || (c = 0), (r /= 60) < 0 && (r = 6 - -r % 6), r %= 6, l = Math.max(0, Math.min(1, l / 100)), c = Math.max(0, Math.min(1, c / 100)), o = (i = (1 - Math.abs(2 * c - 1)) * l) * (1 - Math.abs(r % 2 - 1)), r < 1 ? (t = i, a = o, n = 0) : r < 2 ? (t = o, a = i, n = 0) : r < 3 ? (t = 0, a = i, n = o) : r < 4 ? (t = 0, a = o, n = i) : r < 5 ? (t = o, a = 0, n = i) : (t = i, a = 0, n = o), s = c - i / 2, {
          r: Math.round(255 * (t + s)),
          g: Math.round(255 * (a + s)),
          b: Math.round(255 * (n + s)),
          toString: function toString() {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
          }
        };
      }(e));
    }
  
    function Ra(e) {
      return Ia(La(e));
    }
  
    function $a(e) {
      return Ha(ja(e));
    }
  
    Oa.propTypes = Ma({}, Ue, Da), n.Card = Oa, n.CardHeader = Pa, n.CardContent = Ea, n.CardFooter = Va, n.CardTitle = Aa, n.CardSubtitle = Fa;
  
    var Wa = function Wa(e, t, a) {
      var s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O = this,
          N = ye(e),
          P = 0,
          E = {},
          V = {};
  
      function A(e, t, a) {
        if (!a) {
          O._value = O._hasValue ? O._tempValue.slice(0) : null;
  
          for (var n = 0; n < o.length; ++n) {
            o[n].tempChangedColor && O._value && -1 != O._value.indexOf(o[n].tempChangedColor) && (o[n].changedColor = o[n].tempChangedColor), delete o[n].tempChangedColor;
          }
        }
  
        e && (O._isInput && N.val(O._hasValue ? O._tempValue : ""), r("onFill", {
          valueText: O._hasValue ? O._tempValue : "",
          change: t
        }), t && (E = Se(!0, {}, V), O._preventChange = !0, N.trigger("change")), z(O._value, !0));
      }
  
      function F(e, t) {
        return '<div class="mbsc-color-input-item" data-color="' + (void 0 !== (t = void 0 !== t ? t : j(e)) ? t : e) + '" style="background: ' + e + ';">' + (T ? "" : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + "</div>";
      }
  
      function I(e) {
        f[0].style.background = e ? Ge + "linear-gradient(left, " + (s.rtl ? "#000000" : "#FFFFFF") + " 0%, " + e + " 50%, " + (s.rtl ? "#FFFFFF" : "#000000") + " 100%)" : "";
      }
  
      function j(e) {
        if (Object.keys(V).length && !isNaN(e)) return e;
  
        for (var t in o) {
          if (e == o[t].color || e == o[t].changedColor) return t;
        }
      }
  
      function L(e, t) {
        var a,
            n = e.match(/\d+/gim);
  
        switch (!0) {
          case e.indexOf("rgb") > -1:
            a = Ia({
              r: n[0],
              g: n[1],
              b: n[2]
            });
            break;
  
          case e.indexOf("hsl") > -1:
            a = Ya({
              h: n[0],
              s: n[1],
              l: n[2]
            });
            break;
  
          case e.indexOf("hsv") > -1:
            a = Ra({
              h: n[0],
              s: n[1],
              v: n[2]
            });
            break;
  
          case e.indexOf("#") > -1:
            a = e;
        }
  
        return function (e, t) {
          switch (t) {
            case "rgb":
              return ja(e);
  
            case "hsl":
              return Ua(e);
  
            case "hsv":
              return $a(e);
  
            default:
              return e;
          }
        }(a, t || s.format);
      }
  
      function H(e, t) {
        ye(".mbsc-color-active", t).removeClass("mbsc-color-active"), v && (e.parent().addClass("mbsc-color-active"), h && e && void 0 !== P && M.eq(P).parent().addClass("mbsc-color-active"));
      }
  
      function z(e, t) {
        var a,
            n,
            i = [],
            r = 0,
            u = ye.map(o, function (e) {
          return e.changedColor || e.color;
        });
  
        if (T) {
          if (e = ye.isArray(e) ? e[0] : e, (n = u.indexOf(e)) > -1 && i.push(n), e && !i.length && v) {
            var d = +ye(".mbsc-color-input-item", C).attr("data-color");
            isNaN(d) ? d = void 0 : i.push(d), x = d;
          }
        } else if (e) if (h && v) for (var m in E) {
          void 0 !== E[m].colorIndex && i.push(+E[m].colorIndex);
        } else for (a = 0; a < e.length; ++a) {
          (n = u.indexOf(e[a])) > -1 && (i.push(n), u[n] = "temp" + a);
        }
  
        for (a = 0; a < i.length; ++a) {
          o[i[a]] && U(!0, i[a], r++, o[i[a]].changedColor || o[i[a]].color, !0);
        }
  
        for (a = 0; a < o.length; ++a) {
          -1 == i.indexOf(a) && U(!1, a, void 0, o[a].changedColor || o[a].color, !1);
        }
  
        if (h) for (a = r; a < s.select; ++a) {
          V[a] = {}, M && M.eq(a).addClass("mbsc-color-preview-item-empty").css({
            background: "transparent"
          });
        }
        E = Se(!0, {}, V), !1 !== t && function () {
          if (y) {
            var e,
                t = "";
  
            if (C.empty(), O._hasValue) {
              if (T) t += F(O._value, x);else for (e = 0; e < O._value.length; ++e) {
                t += F(O._value[e], Object.keys(V).length && V[e].colorIndex ? V[e].colorIndex : j(O._value[e]));
              }
              C.append(t), O.tap(ye(".mbsc-color-input-item", C), function (e) {
                if (ye(e.target).hasClass("mbsc-color-input-item-close")) {
                  var t = ye(this).index();
                  e.stopPropagation(), e.preventDefault(), void 0 === x && (x = ye(e.target).parent().attr("data-color")), h && o[x] && (P = o[x].previewInd, M.eq(P).parent().removeClass("mbsc-color-active"), E[t] = {}, V[t] = {}), O._value.splice(t, 1), O.setVal(O._value, !0, !0);
                } else v && "inline" !== s.display && (x = ye(e.target).attr("data-color"), isNaN(x) && (x = j(x)), x && o[x] && (o[x].selected = !0, P = o[x].previewInd, setTimeout(function () {
                  l.scroll(S.eq(x), 400), h && c.scroll(M.eq(P), 400);
                }, 200)));
              });
            }
          }
        }();
      }
  
      function U(e, t, a, n, s, i) {
        if (h && s && (V[a].colorIndex = e ? t : void 0, V[a].color = e ? n : void 0, M)) {
          var r = M.eq(a);
          r.removeClass("mbsc-color-preview-item-empty").css({
            background: e ? n : "transparent"
          }), e || r.addClass("mbsc-color-preview-item-empty").parent().removeClass("mbsc-color-active");
        }
  
        i && (e ? O._tempValue.splice(a, 0, n) : O._tempValue.splice(O._tempValue.indexOf(n), 1)), S && (e ? S.eq(t).addClass("mbsc-color-selected") : S.eq(t).removeClass("mbsc-color-selected").parent().removeClass("mbsc-color-active")), o[t].previewInd = e ? a : void 0, o[t].selected = e;
      }
  
      function R(e, t) {
        void 0 !== e && (T || o[e] && o[e].selected) ? (x = e, o[e] && (d = o[e].changedColor || o[e].color, k = S.eq(e), v && (H(S.eq(e), t || ""), (m = L(o[e].color, "hsl")).l = L(d, "hsl").l, I(o[e].color), g.setVal(100 - m.l, !1, !1)))) : v && I();
      }
  
      function $(e, t) {
        var a = ye(e.target).index();
        x = V[a].colorIndex, k = S.eq(x), P = a, R(x, t), l.scroll(k, 250), r("onPreviewItemTap", {
          target: e.target,
          value: V[a].color,
          index: a
        });
      }
  
      function W(e, t) {
        var a = !1,
            i = ye(".mbsc-color-selected", t);
        if ((k = ye(e.target)).hasClass("mbsc-color-clear-item")) return d = "", void O.clear();
        (T || _ > +i.length || k.hasClass("mbsc-color-selected")) && n.XdAQT && (x = k.attr("data-index"), h && (P = void 0 !== o[x].previewInd ? o[x].previewInd : function () {
          var e;
  
          for (e = 0; e < s.select; ++e) {
            if (void 0 === V[e].colorIndex) return e;
          }
        }(), a = v && k.hasClass("mbsc-color-selected") && !k.parent().hasClass("mbsc-color-active"), M.length > 6 && c.scroll(M.eq(P))), d = o[x].changedColor || o[x].color, T ? (i.removeClass("mbsc-color-selected"), O._tempValue = d, d && k.toggleClass("mbsc-color-selected"), H(k, t)) : (H(k, t), a || U(!o[x].selected, x, P, d, !0, !0)), R(x, t), O.live && (O._fillValue(), r("onSet", {
          value: O._value
        })), r("onItemTap", {
          target: e.target,
          value: d,
          selected: o[x].selected,
          index: x
        }), O._updateHeader());
      }
  
      Dt.call(this, e, t, !0), O.setVal = O._setVal = function (e, t, a, n) {
        O._hasValue = null !== e && void 0 !== e, O._tempValue = T ? ye.isArray(e) ? e[0] : e : ye.isArray(e) ? e : e ? [e] : [], A(t, void 0 === a ? t : a, n);
      }, O.getVal = O._getVal = function (e) {
        return O._hasValue || e ? w ? function () {
          var e,
              t = [];
  
          for (e = 0; e < o.length; ++e) {
            o[e].selected && t.push(o[e]);
          }
  
          return t;
        }() : O[e ? "_tempValue" : "_value"] : null;
      }, O._readValue = function () {
        var e = N.val() || "";
        O._hasValue = !1, 0 !== e.length && "" !== e && (O._hasValue = !0), O._hasValue ? (O._tempValue = T ? e : "hex" == s.format ? e.split(",") : e.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gim), A(!0)) : O._tempValue = [], z(O._tempValue, O._hasValue);
      }, O._fillValue = function () {
        O._hasValue = !0, A(!0, !0);
      }, O._generateContent = function () {
        var e,
            t,
            a,
            i = u ? 1 : 0;
  
        for (b = p ? Math.ceil((o.length + i) / s.rows) : s.rows, t = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (p ? "" : "mbsc-color-vertical") + '"><div class="mbsc-color-cont">' + (p ? '<div class="mbsc-color-row">' : ""), e = 0; e < o.length; ++e) {
          a = o[e].changedColor || o[e].color, u && 0 === e && (t += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>'), 0 !== e && (e + i) % b == 0 && (t += p ? '</div><div class="mbsc-color-row">' : ""), t += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + e + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (o[e].selected ? "mbsc-color-selected" : "") + '"  style="background:' + a + '"></div>' + O._getText(n, .2) + "</div>";
        }
  
        if (t += "</div></div>" + (p ? "</div>" : ""), v && (t += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>'), h) {
          for (var r in t += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">', E) {
            t += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (E[r].color ? "" : "mbsc-color-preview-item-empty") + '" style="background: ' + (E[r].color || "initial") + ';"></div></div>';
          }
  
          t += "</div></div>";
        }
  
        return t;
      }, O._position = function (e) {
        var t, a;
        p || (t = e.find(".mbsc-color-cont"), a = Math.ceil(t.find(".mbsc-color-item-c")[0].offsetWidth), t.width(Math.min(Math.floor(e.find(".mbsc-fr-c").width() / a), Math.round(o.length / s.rows)) * a + 1)), l && l.refresh(), c && c.refresh();
      }, O._markupInserted = function (e) {
        p || e.find(".mbsc-color-scroll-cont").css("max-height", e.find(".mbsc-color-item-c")[0].offsetHeight * s.rows), l = new Nt(e.find(".mbsc-color-scroll-cont")[0], {
          axis: p ? "X" : "Y",
          rtl: s.rtl,
          elastic: 60,
          stopProp: !1,
          mousewheel: s.mousewheel,
          onBtnTap: function onBtnTap(t) {
            W(t, e);
          }
        });
      }, O._attachEvents = function (e) {
        var t;
        S = ye(".mbsc-color-item", e), e.on("keydown", ".mbsc-color-btn-e", function (t) {
          t.stopPropagation(), 32 == t.keyCode && (t.target.classList.contains("mbsc-color-item") ? W(t, e) : $(t, e));
        }), h && (M = ye(".mbsc-color-preview-item", e)), v && (e.addClass("mbsc-color-refine"), D = ye(".mbsc-color-slider", e), g = new xa(D[0], {
          theme: s.theme,
          rtl: s.rtl
        }), f = e.find(".mbsc-progress-track"), x && O._value && R(x, e), D.on("change", function () {
          void 0 !== x && (T || o[x] && o[x].selected) && (m.l = 100 - this.value, t = L(m.toString()).toString(), T ? O._tempValue = t : O._tempValue[void 0 !== P ? P : O._tempValue.length] = t, o[x].tempChangedColor = t, S.eq(x).css("background", t), h && (V[P].color = t, M.eq(P).removeClass("mbsc-color-preview-item-empty").css({
            background: t
          })), O.live && Y(O._fillValue()));
        })), h && (c = new Nt(e.find(".mbsc-color-preview-cont")[0], {
          axis: "X",
          rtl: s.rtl,
          stopProp: !1,
          mousewheel: s.mousewheel,
          onBtnTap: function onBtnTap(t) {
            $(t, e);
          }
        })), O._updateHeader();
      }, O._markupRemove = function () {
        l && l.destroy(), g && g.destroy(), c && c.destroy();
      }, O.__processSettings = function () {
        var t, a;
        if (s = O.settings, r = O.trigger, p = "horizontal" == s.navigation, O._value = [], O._tempValue = [], T = "single" == s.select, u = void 0 !== s.clear ? s.clear : T, !(a = s.data || []).length) switch (s.format) {
          case "rgb":
            a = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"], u && a.splice(10, 0, "rgb(83, 71, 65)");
            break;
  
          case "hsl":
            a = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"], u && a.splice(10, 0, "hsl(20, 12%, 29%)");
            break;
  
          default:
            a = ["#ffeb3c", "#ff9900", "#f44437", "#ea1e63", "#9c26b0", "#683ab7", "#3f51b5", "#2196f3", "#009788", "#4baf4f", "#7e5d4e", "#9e9e9e"], u && a.splice(10, 0, "#534741");
        }
        if (v = "refine" == s.mode, h = !isNaN(s.select), _ = isNaN(s.select) ? T ? 2 : a.length : s.select, w = ye.isPlainObject(a[0]), h && !Object.keys(E).length) for (t = 0; t < s.select; ++t) {
          E[t] = {}, V[t] = {};
        }
  
        for (o = a.slice(0), t = 0; t < o.length; ++t) {
          ye.isPlainObject(a[t]) ? o[t].color = a[t].color : (a[t] = a[t].toLowerCase(), o[t] = {
            key: t,
            name: a[t],
            color: a[t]
          });
        }
  
        i = s.defaultValue || o[0].color, m = L(d = i, "hsl"), (y = s.enhance && N.is("input")) && (N.hasClass("mbsc-color-input-hdn") ? C = N.prev() : ((C = ye("<div " + (e.placeholder ? 'data-placeholder="' + e.placeholder + '"' : "") + ' class="mbsc-control mbsc-color-input ' + (s.inputClass || "") + '" readonly ></div>')).insertBefore(N), N.addClass("mbsc-color-input-hdn").attr("tabindex", -1)), s.anchor = C, O.attachShow(C));
      }, O.__destroy = function () {
        y && (N.removeClass("mbsc-color-input-hdn"), C.remove());
      }, O._checkSize = !0, a || O.init();
    };
  
    Wa.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _class: "color",
      _defaults: Se({}, Dt.prototype._defaults, {
        headerText: !1,
        validate: F,
        parseValue: F,
        enhance: !0,
        rows: 2,
        select: "single",
        format: "hex",
        navigation: "horizontal",
        compClass: "mbsc-color"
      })
    }, we.Color = Wa, n.themes.color = n.themes.frame, s.color = {
      hsv2hex: Ra,
      hsv2rgb: La,
      rgb2hsv: Ha,
      rgb2hex: Ia,
      rgb2hsl: za,
      hex2rgb: ja,
      hex2hsv: $a,
      hex2hsl: Ua
    };
  
    var Ja = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        qa = {
      clear: a.bool,
      data: a.array,
      defaultValue: a.string,
      enhance: a.bool,
      format: a.oneOf(["hex", "rgb", "hsl"]),
      inputClass: a.string,
      mode: a.oneOf(["preset", "refine"]),
      navigation: a.oneOf(["horizontal", "vertical"]),
      preview: a.bool,
      previewText: a.bool,
      rows: a.number,
      select: a.oneOfType([a.oneOf(["single", "multiple"]), a.number]),
      valueText: a.string,
      onSet: a.func,
      onClear: a.func
    },
        Ba = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          component: "Color",
          data: e.data
        }, a;
      }
  
      return u(t, nt), l(t, [{
        key: "shouldComponentUpdate",
        value: function value(e) {
          var a = c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "shouldComponentUpdate", this).call(this, e);
          return this.optimizeUpdate.updateData = !qe(this.props.data, e.data), a || this.optimizeUpdate.updateData;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          e.data = this.props.data, (this.optimizeUpdate.updateOptions || this.optimizeUpdate.updateData) && this.instance.option(e), this.optimizeUpdate.updateValue && void 0 !== this.props.value && !qe(this.props.value, this.instance.getVal()) && this.instance.setVal(this.props.value, !0);
        }
      }]), t;
    }();
  
    Ba.propTypes = Ja({}, Ba.propTypes, qa), n.Color = Ba, Pt.date = jt, Pt.time = jt, Pt.datetime = jt;
  
    var Ka = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Ga = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "datetime"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Ga.propTypes = Ka({}, Ga.propTypes, Re, $e);
  
    var Xa = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "date"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Xa.propTypes = Ka({}, Xa.propTypes, Re, $e);
  
    var Za = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "time"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Za.propTypes = Ka({}, Za.propTypes, Re, $e), n.Datetime = Ga, n.Date = Xa, n.Time = Za;
  
    var Qa = function Qa(e, t, a) {
      function s(e) {
        ye(".mbsc-fr-c", e).append(l._getText(n, .7)), !ye(".mbsc-fr-c", e).hasClass("mbsc-wdg-c") && n.XdAQT && (ye(".mbsc-fr-c", e).addClass("mbsc-wdg-c").append(r.show()), ye(".mbsc-w-p", e).length || ye(".mbsc-fr-c", e).addClass("mbsc-w-p"));
      }
  
      var i,
          o,
          r = ye(e),
          l = this;
      Dt.call(this, e, t, !0), l._generateContent = function () {
        return "";
      }, l._markupReady = function (e) {
        "inline" != i.display && s(e);
      }, l._markupInserted = function (e) {
        "inline" == i.display && s(e), e.trigger("mbsc-enhance", [{
          theme: i.theme,
          lang: i.lang
        }]);
      }, l._markupRemove = function () {
        r.hide(), o && o.parent().length && o.after(r);
      }, l.__processSettings = function () {
        i = l.settings, l.buttons.ok = {
          text: i.okText,
          icon: i.okIcon,
          handler: "set"
        }, i.buttons = i.buttons || ("inline" == i.display ? [] : ["ok"]), !o && r.parent().length && (o = ye(document.createComment("popup")), r.before(o)), r.hide();
      }, a || l.init();
    };
  
    Qa.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasContent: !0,
      _hasLang: !0,
      _responsive: !0,
      _class: "popup",
      _defaults: Se({}, Dt.prototype._defaults, {
        compClass: "mbsc-wdg",
        okText: "OK",
        headerText: !1
      })
    }, we.Popup = Qa, we.Widget = Qa, n.themes.popup = n.themes.frame;
    var en = {
      view: {
        calendar: {
          type: "month",
          popover: !0
        }
      },
      allDayText: "All-day",
      labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"],
      eventText: "event",
      eventsText: "events",
      noEventsText: "No events"
    },
        tn = {
      yearChange: !1,
      weekDays: "short"
    };
  
    Pt.eventcalendar = function (e, t) {
      function a(t, a, s) {
        var o,
            r,
            l,
            c,
            u = 0,
            d = [],
            m = "",
            p = [];
  
        for (s || (s = e._prepareObj(K, t, a)), o = ie(t); o <= a; o.setDate(o.getDate() + 1)) {
          (c = s[o]) && c.length && p.push({
            d: new Date(o),
            list: i(c)
          });
        }
  
        if (p.length > 0) for (r = 0; r < p.length; r++) {
          for (m += '<div><div class="mbsc-lv-gr-title mbsc-event-day" data-full="' + oe((c = p[r]).d) + '">' + ae(J.dateFormat, c.d, J) + "</div>", l = 0; l < c.list.length; l++) {
            var h = c.list[l],
                v = h.start ? ue(h.start) : null,
                b = h.end ? ue(h.end) : null,
                g = h.color,
                x = be.test(h.d) || ve.test(h.d),
                y = v && b && !de(v, b),
                T = !y || de(v, c.d),
                _ = !y || de(b, c.d),
                w = h.d ? x ? h.d : ue(h.d) : v,
                C = h.allDay || x || y && !T && !_;
  
            d.push({
              d: c.d,
              e: h
            }), m += '<div class="mbsc-lv-item mbsc-lv-item-actionable" data-index="' + u + '"><div class="mbsc-event-time">' + (C ? J.allDayText : T && w && w.getTime ? ae(J.timeFormat, w) : y && _ ? J.toText : "") + (!C && _ && b && b.getTime ? "<br/>" + ae(J.timeFormat, b) : "") + '</div><div class="mbsc-event-color"' + (g ? ' style="background:' + g + ';"' : "") + '></div><div class="mbsc-event-txt">' + h.text + "</div>" + e._getText(n, .3) + "</div>", u++;
          }
  
          m += "</div>";
        } else m += '<div class="mbsc-lv-gr-title mbsc-event-empty"><div class="mbsc-empty"><h3>' + J.noEventsText + "</h3></div></div>";
        q++, f.html('<div class="mbsc-lv mbsc-lv-v">' + m + "</div>").scrollTop(0), setTimeout(function () {
          q--;
        }, 150), e.tap(ye(".mbsc-lv-item", f), function (e) {
          var t = d[ye(this).attr("data-index")];
          X("onEventSelect", {
            domEvent: e,
            event: t.e,
            date: t.d
          });
        });
      }
  
      function s() {
        if (N) {
          var t = ie(N.d);
          !function (t, a, n) {
            if (t) {
              var s,
                  o,
                  l,
                  c,
                  u = '<div class="mbsc-cal-event-list">';
              s = ye('<div class="mbsc-cal-events ' + (J.eventBubbleClass || "") + '"><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div><div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div></div></div>'), o = ye(".mbsc-cal-events-i", s), l = ye(".mbsc-cal-events-sc", s), e.tap(o, function () {
                c.scrolled || r();
              }), P = new Qa(s[0], {
                display: "bubble",
                theme: J.theme,
                lang: J.lang,
                context: J.context,
                buttons: [],
                anchor: n,
                showOverlay: !1,
                cssClass: "mbsc-no-padding mbsc-cal-events-popup",
                onShow: function onShow() {
                  c = new Nt(o[0], {
                    scrollbar: ye(".mbsc-sc-bar-c", s),
                    stopProp: !1
                  });
                },
                onClose: function onClose(e, t) {
                  t.destroy(), c.destroy();
                }
              }), y = n, t = i(t), ye.each(t, function (e, t) {
                var n = t.start ? ue(t.start) : null,
                    s = t.end ? ue(t.end) : null,
                    i = be.test(t.d) || ve.test(t.d),
                    o = t.d ? i ? t.d : ue(t.d) : n,
                    r = n && s && !de(n, s),
                    l = !r || de(n, a),
                    c = !r || de(s, a),
                    d = t.allDay || i || r && !l && !c,
                    m = t.color,
                    p = "",
                    h = "",
                    f = ye("<div>" + t.text + "</div>").text();
                o.getTime && (p = ae((r ? "MM d yy " : "") + J.timeFormat, o)), s && (h = ae((r ? "MM d yy " : "") + J.timeFormat, s)), u += '<div role="button" title="' + f + '" aria-label="' + f + (p ? ", " + J.fromText + ": " + p : "") + (h ? ", " + J.toText + ": " + h : "") + '" class="mbsc-cal-event mbsc-lv-item mbsc-lv-item-actionable"><div class="mbsc-cal-event-color" style="' + (m ? "background:" + m + ";" : "") + '"></div><div class="mbsc-cal-event-text"><div class="mbsc-cal-event-time">' + (d ? J.allDayText : l && o.getTime ? ae(J.timeFormat, o) : "") + "</div>" + t.text + "</div>" + (n && s && !t.allDay ? '<div class="mbsc-cal-event-dur">' + J.formatDuration(n, s, t) + "</div>" : "") + "</div>";
              }), u += "</div>", l.html(u), P.show(), X("onEventBubbleShow", {
                target: y,
                eventList: s[0]
              }), e.tap(ye(".mbsc-cal-event", l), function (e) {
                c.scrolled || X("onEventSelect", {
                  domEvent: e,
                  event: t[ye(this).index()],
                  date: a
                });
              }), w = !0;
            }
          }(N.events || _[t], t, N.cell || ye('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + oe(t) + '"]', e._markup)[0]), N = null;
        }
      }
  
      function i(e) {
        return e.slice(0).sort(function (e, t) {
          var a = e.start ? ue(e.start) : null,
              n = t.start ? ue(t.start) : null,
              s = e.end ? ue(e.end) : null,
              i = t.end ? ue(t.end) : null,
              o = be.test(e.d) || ve.test(e.d),
              r = be.test(t.d) || ve.test(t.d),
              l = e.d ? o ? e.d : ue(e.d) : a,
              c = t.d ? r ? t.d : ue(t.d) : n,
              u = l.getTime ? a && s && a.toDateString() !== s.toDateString() ? 1 : e.allDay ? 2 : l.getTime() : 0,
              d = c.getTime ? n && i && n.toDateString() !== i.toDateString() ? 1 : t.allDay ? 2 : c.getTime() : 0;
          return u == d ? e.text > t.text ? 1 : -1 : u - d;
        });
      }
  
      function o() {
        var t, a, n;
        q || ye(".mbsc-event-day", this).each(function () {
          if ((a = this.offsetTop - T.scrollTop) >= 0 && a < 35) return n = ye(this).attr("data-full").split("-"), de(t = te(n[0], n[1] - 1, n[2]), b) || (E = !0, e.setVal(t)), !1;
        });
      }
  
      function r() {
        P && w && P.hide(), y = null, w = !1;
      }
  
      function l(e) {
        0 == ye(e.target).closest(".mbsc-cal-day").length && r();
      }
  
      function c() {
        r(), e.redraw();
      }
  
      function u(e) {
        var t = J.getYear(e),
            a = J.getMonth(e),
            n = J.getDay(e);
        if (g = e, "day" == k) x = J.getDate(t, a, n + D - 1);else if ("week" == k) {
          var s,
              i = g.getDay();
          s = n + J.firstDay - (J.firstDay - i > 0 ? 7 : 0) - i, g = J.getDate(t, a, s), x = J.getDate(t, a, s + 7 * D - 1);
        } else "month" == k ? (g = J.getDate(t, a, 1), x = J.getDate(t, a + D, 0)) : "year" == k && (g = J.getDate(t, 0, 1), x = J.getDate(t + D, 0, 0));
      }
  
      function d(e, t) {
        if (F && !E) {
          var a = ye('.mbsc-event-day[data-full="' + oe(e) + '"]', f);
          a.length && (q++, ct(T, a.parent()[0].offsetTop, t, function () {
            setTimeout(function () {
              q--;
            }, 150);
          }));
        }
      }
  
      function m(e, t) {
        e && X("onPageChange", {
          firstDay: g,
          lastDay: x
        }), t || X("onPageLoading", {
          firstDay: g,
          lastDay: x
        }), X("onPageLoaded", {
          firstDay: g,
          lastDay: x
        });
      }
  
      var p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O,
          N,
          P,
          E,
          V,
          A,
          F,
          I,
          j,
          L,
          H,
          z,
          U,
          R,
          $ = this,
          W = Se({}, e.settings),
          J = Se(e.settings, en, W, tn, t),
          q = 0,
          B = 0,
          K = Se(!0, [], J.data),
          G = !0,
          X = e.trigger;
  
      return J.data = K, ye.each(K, function (e, t) {
        void 0 === t._id && (t._id = B++);
      }), L = J.view, H = L.calendar, z = L.eventList, U = J.months, R = J.weeks, H ? ("week" == H.type ? R = H.size || 1 : H.size && (U = H.size), M = !1) : (R = 0, M = !0), z && (k = z.type, D = z.size || 1), O = H && H.labels, A = z && z.scrollable, F = L.eventList, I = void 0 === J.eventBubble ? H && H.popover : J.eventBubble, J.weeks = R, J.months = U, p = Ht.call(this, e), e._onSelectShow = function () {
        r();
      }, e._onGenMonth = function (t, a) {
        _ = e._prepareObj(K, t, a), e._labels = O ? _ : null;
      }, e._onRefresh = function (e) {
        V = !0, M && m(!1, e);
      }, e._onSetDate = function (e, t) {
        M && !E ? (u(e), m(!0)) : t || C || (F && "day" == k && a(e, e, _), !I && !j || S || s(), d(e)), b = e, E = !1, j = !1, S = !1;
      }, e._getDayProps = function (e) {
        var t = _[e],
            a = {
          events: t
        };
        return J.marked || J.labels || O || (t ? (a.background = t[0] && t[0].background, a.marked = t, a.markup = J.showEventCount ? '<div class="mbsc-cal-txt">' + t.length + " " + (t.length > 1 ? J.eventsText : J.eventText) + "</div>" : '<div class="mbsc-cal-marks"><div class="mbsc-cal-mark"></div></div>') : a.markup = J.showEventCount ? '<div class="mbsc-cal-txt-ph"></div>' : ""), a;
      }, e.addEvent = function (e) {
        var t = [];
        return e = Se(!0, [], ye.isArray(e) ? e : [e]), ye.each(e, function (e, a) {
          void 0 === a._id && (a._id = B++), K.push(a), t.push(a._id);
        }), c(), t;
      }, e.updateEvent = function (e) {
        ye.each(K, function (t, a) {
          if (a._id === e._id) return K.splice(t, 1, e), !1;
        }), c();
      }, e.removeEvent = function (e) {
        e = ye.isArray(e) ? e : [e], ye.each(e, function (e, t) {
          ye.each(K, function (e, a) {
            if (a._id === t) return K.splice(e, 1), !1;
          });
        }), c();
      }, e.getEvents = function (t) {
        var a;
        return t ? (t.setHours(0, 0, 0, 0), (a = e._prepareObj(K, t, t))[t] ? i(a[t]) : []) : Se(!0, [], K);
      }, e.setEvents = function (e) {
        var t = [];
        return J.data = K = Se(!0, [], e), ye.each(K, function (e, a) {
          void 0 === a._id && (a._id = B++), t.push(a._id);
        }), c(), t;
      }, e.navigate = function (t, a, n) {
        N = n ? {
          d: t
        } : null, e.setVal(t, !0, !0, !1, a ? 200 : 0);
      }, Se({}, p, {
        multiLabel: O,
        headerText: !1,
        buttons: "inline" !== J.display ? ["close"] : J.buttons,
        compClass: "mbsc-ev-cal mbsc-calendar mbsc-dt mbsc-sc",
        formatDuration: function formatDuration(e, t) {
          var a = J.labelsShort,
              n = t - e,
              s = Math.abs(n) / 1e3,
              i = s / 60,
              o = i / 60,
              r = o / 24,
              l = r / 365;
          return s < 45 && Math.round(s) + " " + a[5].toLowerCase() || i < 45 && Math.round(i) + " " + a[4].toLowerCase() || o < 24 && Math.round(o) + " " + a[3].toLowerCase() || r < 30 && Math.round(r) + " " + a[2].toLowerCase() || r < 365 && Math.round(r / 30) + " " + a[1].toLowerCase() || Math.round(l) + " " + a[0].toLowerCase();
        },
        onMarkupReady: function onMarkupReady(e, t) {
          h = ye(e.target), b = t.getDate(!0), F && ((f = ye('<div class="mbsc-lv-cont mbsc-lv-' + J.theme + (J.baseTheme ? " mbsc-lv-" + J.baseTheme : "") + (A ? " mbsc-event-list-h" : "") + ' mbsc-event-list"></div>').appendTo(ye(".mbsc-fr-w", h))).on("scroll", Y(o)), T = f[0]), p.onMarkupReady.call(this, e), v = ye(".mbsc-cal-month", h), w = !1, u(b), F && M && (m(), dt(ye(".mbsc-cal-btn", h), function (e, t) {
            var a = J.getYear(g),
                n = J.getMonth(g),
                s = J.getDay(g);
            "day" == k ? (g = J.getDate(a, n, s + t * D), x = J.getDate(a, n, s + (t + 1) * D - 1)) : "week" == k ? (g = J.getDate(a, n, s + t * D * 7), x = J.getDate(a, n, s + (t + 1) * D * 7 - 1)) : "month" == k ? (g = J.getDate(a, n + t * D, 1), x = J.getDate(a, n + (t + 1) * D, 0)) : "year" == k && (g = J.getDate(a + t * D, 0, 1), x = J.getDate(a + (t + 1) * D, 0, 0)), m(!0);
          }, 200)), ye(document).on("click", l);
        },
        onDayChange: function onDayChange(e) {
          var t = e.target,
              a = t !== y;
          r(), a && (j = !1 !== I && ye(".mbsc-cal-txt-more", t).length, N = {
            d: e.date,
            cell: J.outerMonthChange && ye(t).hasClass("mbsc-cal-day-diff") ? null : t,
            events: e.events
          });
        },
        onLabelTap: function onLabelTap(e) {
          e.label && (X("onEventSelect", {
            domEvent: e.domEvent,
            event: e.label,
            date: e.date
          }), S = !0);
        },
        onPageChange: function onPageChange(t) {
          r(), C = !0, e._isSetDate || e.setVal(t.firstDay);
        },
        onPageLoaded: function onPageLoaded(t) {
          var n = t.firstDay,
              i = t.lastDay;
          F && (M ? (a(n, i), function (e, t) {
            var a,
                n = (J.dateWheels || J.dateFormat).search(/m/i),
                s = (J.dateWheels || J.dateFormat).search(/y/i),
                i = J.getYear(e),
                o = J.getMonth(e),
                r = J.getYear(t),
                l = J.getMonth(t);
            "day" == k ? a = ae(J.dateFormat, e, J) + (D > 1 ? " - " + ae(J.dateFormat, t, J) : "") : "week" == k ? a = ae(J.dateFormat, e, J) + " - " + ae(J.dateFormat, t, J) : "month" == k ? a = 1 == D ? s < n ? i + " " + J.monthNames[o] : J.monthNames[o] + " " + i : s < n ? i + " " + J.monthNamesShort[o] + " - " + r + " " + J.monthNamesShort[l] : J.monthNamesShort[o] + " " + i + " - " + J.monthNamesShort[l] + " " + r : "year" == k && (a = i + (D > 1 ? " - " + r : "")), v.html(a);
          }(n, i)) : (i = "month" == k ? J.getDate(J.getYear(n), J.getMonth(n) + D, 0) : "week" == k ? J.getDate(J.getYear(n), J.getMonth(n), J.getDay(n) + 7 * D - 1) : n = e.getVal(!0), a(n, i, _)), G || de(b, n) || (d(b, V), V = !1)), I && s(), C = !1;
        },
        onPosition: function onPosition(e) {
          if (p.onPosition.call(this, e), P && P.position(), F && A) {
            f.addClass("mbsc-event-list-h");
            var t = "inline" == J.display ? $.parentNode : window,
                a = (n = t, s = getComputedStyle(n), n.innerHeight || n.clientHeight - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom)) - e.popup.offsetHeight;
            T.style.height = a > 200 ? a + "px" : "", f.removeClass("mbsc-event-list-h"), G && a && (d(b, !0), G = !1);
          }
          /* eslint-disable no-unused-vars */
  
  
          var n, s;
        },
        onHide: function onHide() {
          p.onHide.call(this), P && P.destroy(), ye(document).off("click", l);
        }
      });
    };
  
    var an = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        nn = a.number,
        sn = a.bool,
        on = a.func,
        rn = a.object,
        ln = a.string,
        cn = {
      data: a.arrayOf(a.shape({
        start: He,
        end: He,
        d: a.oneOfType([rn, nn, ln]),
        text: ln,
        color: ln,
        allDay: sn
      })),
      eventBubble: sn,
      formatDuration: on,
      showEventCount: sn,
      view: a.shape({
        calendar: a.shape({
          type: a.oneOf(["week", "month"]),
          size: nn,
          popover: sn,
          labels: sn
        }),
        eventList: a.shape({
          type: a.oneOf(["day", "week", "month", "year"]),
          size: nn,
          scrollable: sn
        })
      }),
      allDayText: ln,
      noEventsText: ln,
      eventText: ln,
      eventsText: ln,
      labelsShort: a.arrayOf(ln),
      onEventSelect: a.func
    },
        un = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, tt), l(n, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props, {
            preset: "eventcalendar",
            data: this.props.data || []
          });
          this.instance = new Ft(t.findDOMNode(this), e);
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.optimizeUpdate.updateOptions && this.instance.option(this.getSettingsFromProps(this.props)), this.optimizeUpdate.updateData && this.instance.setEvents(this.props.data);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = !qe(this.getSettingsFromProps(this.props), this.getSettingsFromProps(e)),
              a = !qe(this.props.data, e.data);
          return this.optimizeUpdate = {
            updateOptions: t,
            updateValue: !1,
            updateData: a
          }, t || a;
        }
      }, {
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.initialCssClass
          });
        }
      }]), n;
    }();
  
    un.propTypes = an({}, un.propTypes, Re, $e, We, cn), n.Eventcalendar = un;
    var dn = O && !!window.Promise,
        mn = [],
        pn = [],
        hn = void 0;
  
    function fn(e) {
      mn.length || e.show(), mn.push(e);
    }
  
    function vn(e, t, a, n) {
      return Se({
        display: t.display || "center",
        cssClass: "mbsc-alert",
        okText: t.okText,
        cancelText: t.cancelText,
        context: t.context,
        theme: t.theme,
        closeOnOverlayTap: !1,
        onBeforeClose: function onBeforeClose() {
          e.shift();
        },
        onHide: function onHide(e, n) {
          a && a(n._resolve), t.callback && t.callback(n._resolve), n && n.destroy(), mn.length ? mn[0].show() : pn.length && pn[0].show(!1, !0);
        }
      }, n);
    }
  
    function bn(e) {
      return (e.title ? "<h2>" + e.title + "</h2>" : "") + "<p>" + (e.message || "") + "</p>";
    }
  
    function gn(e, t, a) {
      fn(new Qa(e, vn(mn, t, a)));
    }
  
    function xn(e, t, a) {
      var n = new Qa(e, vn(mn, t, a, {
        buttons: ["cancel", "ok"],
        onSet: function onSet() {
          n._resolve = !0;
        }
      }));
      n._resolve = !1, fn(n);
    }
  
    function yn(e, t, a) {
      var n = void 0,
          s = new Qa(e, vn(mn, t, a, {
        buttons: ["cancel", "ok"],
        onMarkupReady: function onMarkupReady(e, t) {
          n = t._markup.find("input")[0], setTimeout(function () {
            n.focus(), n.setSelectionRange(0, n.value.length);
          }, 300);
        },
        onSet: function onSet() {
          s._resolve = n.value;
        }
      }));
      s._resolve = null, fn(s);
    }
  
    function Tn(e, t, a, n, s) {
      var i,
          o,
          r = void 0,
          l = new Qa(e, vn(pn, t, a, {
        display: t.display || "bottom",
        animate: s,
        cssClass: (n || "mbsc-snackbar") + (t.color ? " mbsc-" + t.color : ""),
        scrollLock: !1,
        focusTrap: !1,
        buttons: [],
        onShow: function onShow(e, a) {
          hn = a, !1 !== t.duration && (r = setTimeout(function () {
            a && a.hide();
          }, t.duration || 3e3)), t.button && a.tap(ye(".mbsc-snackbar-btn", e.target), function () {
            a.hide(), t.button.action && t.button.action.call(this);
          });
        },
        onClose: function onClose() {
          hn = null, clearTimeout(r);
        }
      }));
      i = l, o = pn.length, pn.push(i), mn.length || (o ? pn[0].hide() : i.show(!1, !0));
    }
  
    function _n(e, t, a) {
      Tn(e, t, a, "mbsc-toast", "fade");
    }
  
    function wn(e, t, a) {
      var n = void 0;
      return dn ? n = new Promise(function (n) {
        e(t, a, n);
      }) : e(t, a), n;
    }
  
    n.alert = function (e) {
      var t = document.createElement("div");
      return t.innerHTML = bn(e), wn(gn, t, e);
    }, n.confirm = function (e) {
      var t = document.createElement("div");
      return t.innerHTML = bn(e), wn(xn, t, e);
    }, n.prompt = function (e) {
      var t = document.createElement("div");
      return t.innerHTML = bn(e) + '<label class="mbsc-input">' + (e.label ? '<span class="mbsc-label">' + e.label + "</span>" : "") + '<input tabindex="0" type="' + (e.inputType || "text") + '" placeholder="' + (e.placeholder || "") + '" value="' + (e.value || "") + '"></label>', wn(yn, t, e);
    }, n.snackbar = function (e) {
      var t = document.createElement("div"),
          a = e.button;
      return t.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (e.message || "") + "</div>" + (a ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (a.icon ? '<span class="mbsc-ic ' + (a.text ? "mbsc-btn-ic " : "") + "mbsc-ic-" + a.icon + '"></span>' : "") + (a.text || "") + "</button>" : "") + "</div>", wn(Tn, t, e);
    }, n.toast = function (e) {
      var t = document.createElement("div");
      return t.innerHTML = '<div class="mbsc-toast-msg">' + (e.message || "") + "</div>", wn(_n, t, e);
    }, n.notification = {
      dismiss: function dismiss() {
        hn && hn.hide();
      }
    };
  
    var Cn = "ios" == _ && C > 7,
        Sn = function Sn(e, t) {
      var a,
          s = "",
          i = ye(e),
          o = {},
          r = this;
  
      function l() {
        i.removeClass("mbsc-no-touch");
      }
  
      Me.call(this, e, t, !0), r.refresh = function (e) {
        Ca(i, o, a, e);
      }, r._init = function () {
        n.themes.form[a.theme] || (a.theme = "mobiscroll"), i.hasClass("mbsc-form") || i.on("touchstart", l).show(), s && i.removeClass(s), s = "mbsc-form mbsc-no-touch mbsc-" + a.theme + (Cn ? " mbsc-form-hb" : "") + (a.baseTheme ? " mbsc-" + a.baseTheme : "") + (a.rtl ? " mbsc-rtl" : " mbsc-ltr") + ("box" == a.inputStyle ? " mbsc-form-box" : "") + ("outline" == a.inputStyle ? " mbsc-form-outline" : ""), i.addClass(s).removeClass("mbsc-cloak"), r.refresh();
      }, r._destroy = function () {
        for (var e in i.removeClass(s).off("touchstart", l), o) {
          o[e].destroy();
        }
      }, r.controls = o, a = r.settings, r.init();
    };
  
    Sn.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _class: "form",
      _defaults: {
        tap: Xe,
        stopProp: !0,
        rtl: !1
      }
    }, n.themes.form.mobiscroll = {}, we.Form = Sn, xe("[mbsc-enhance],[mbsc-form]", Sn, !0);
  
    var Mn,
        kn,
        Dn = function Dn(e, t) {
      var a = "",
          n = ye(e),
          s = this.settings;
      Me.call(this, e, t, !0), this._init = function () {
        var e = s.context,
            t = ye(e),
            i = t.find(".mbsc-ms-top .mbsc-ms"),
            o = t.find(".mbsc-ms-bottom .mbsc-ms"),
            r = {};
        "body" == e ? ye("body,html").addClass("mbsc-page-ctx") : t.addClass("mbsc-page-ctx"), a && n.removeClass(a), i.length && (r.paddingTop = i[0].offsetHeight), o.length && (r.paddingBottom = o[0].offsetHeight), a = "mbsc-page mbsc-" + s.theme + (s.baseTheme ? " mbsc-" + s.baseTheme : "") + (s.rtl ? " mbsc-rtl" : " mbsc-ltr"), n.addClass(a).removeClass("mbsc-cloak").css(r);
      }, this._destroy = function () {
        n.removeClass(a);
      }, s = this.settings, this.init();
    };
  
    Dn.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _class: "page",
      _defaults: {
        context: "body"
      }
    }, we.Page = Dn, n.themes.page.mobiscroll = {}, xe("[mbsc-page]", Dn);
  
    var On = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Nn = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, tt), l(n, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new Dn(t.findDOMNode(this), e);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = !qe(this.getSettingsFromProps(this.props), this.getSettingsFromProps(e));
          return this.optimizeUpdate = {
            updateOptions: t
          }, !0;
        }
      }, {
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.initialCssClass
          }, this.props.children);
        }
      }]), n;
    }();
  
    Nn.propTypes = On({}, Nn.propTypes, Ue, {
      onInit: a.func
    });
  
    var Pn = (kn = Mn = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, t), l(a, [{
        key: "render",
        value: function value() {
          var t = "mbsc-note mbsc-note-" + this.props.color;
          return e.createElement("div", {
            className: t
          }, this.props.children);
        }
      }]), a;
    }(e.Component), Mn.propTypes = {
      color: a.string
    }, Mn.defaultProps = {
      color: "primary"
    }, kn),
        En = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, t), l(a, [{
        key: "render",
        value: function value() {
          return e.createElement("img", {
            className: "mbsc-avatar",
            src: this.props.src,
            alt: this.props.alt
          });
        }
      }]), a;
    }(e.Component);
  
    n.Page = Nn, n.Note = Pn, n.Avatar = En;
  
    var Vn,
        An,
        Fn,
        In,
        jn,
        Ln,
        Hn,
        zn,
        Un,
        Yn,
        Rn,
        $n,
        Wn,
        Jn,
        qn,
        Bn,
        Kn,
        Gn,
        Xn,
        Zn,
        Qn,
        es,
        ts,
        as,
        ns,
        ss,
        is,
        os,
        rs = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    };
  
    function ls(e, t) {
      var a = {};
  
      for (var n in e) {
        t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
      }
  
      return a;
    }
  
    var cs = a.number,
        us = a.string,
        ds = a.func,
        ms = a.bool,
        ps = {
      onInit: ds,
      onChange: ds,
      value: cs,
      disabled: ms,
      min: cs,
      max: cs,
      step: cs,
      val: a.oneOf(["left", "right"])
    },
        hs = {
      onInit: ds,
      onChange: ds,
      checked: ms,
      disabled: ms,
      value: ms
    },
        fs = (An = Vn = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, at), l(n, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new Sn(t.findDOMNode(this), e);
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          if (!this.optimizeUpdate.updateOptions && this.optimizeUpdate.updateChildren) this.instance.refresh(!0);else if (this.optimizeUpdate.updateOptions) {
            var e = this.getSettingsFromProps(this.props);
            this.instance.option(e);
          }
        }
      }, {
        key: "checkFormWrapper",
        value: function value(t) {
          return 1 == e.Children.count(t.props.children) && "form" == t.props.children.type;
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              a = t.action,
              n = t.method,
              s = t.noValidate,
              i = t.renderForm,
              o = t.name,
              r = t.target,
              l = t.autoComplete,
              c = t.onSubmit;
          return this.checkFormWrapper(this) || !i ? this.props.children : e.createElement("form", {
            className: this.initialCssClass,
            action: a,
            name: o,
            target: r,
            method: n,
            autoComplete: l,
            noValidate: s,
            onSubmit: c
          }, this.props.children);
        }
      }]), n;
    }(), Vn.defaultProps = {
      renderForm: !0
    }, Vn.propTypes = rs({}, Ue, {
      labelStyle: us,
      inputStyle: us,
      onInit: ds
    }), An);
    n.Form = fs;
    var vs = (In = Fn = function (t) {
      function a(t) {
        r(this, a);
        var n = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
        return n.render = function () {
          /* eslint-disable no-unused-vars */
          var t = n.props,
              a = (t.valid, t.className, t.color, t.children),
              s = (t.presetName, t.inputStyle, t.labelStyle, ls(t, ["valid", "className", "color", "children", "presetName", "inputStyle", "labelStyle"]));
          return e.createElement("label", s, a);
        }, n;
      }
  
      return u(a, t), l(a, [{
        key: "componentDidMount",
        value: function value() {
          Je.call(this, "", this.getClasses(this.props));
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.cssClassUpdate && Je.call(this, this.cssClassUpdate.prev, this.cssClassUpdate.next);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = this.getClasses(e),
              a = this.getClasses(this.props);
          return this.cssClassUpdate = a !== t ? {
            prev: a,
            next: t
          } : null, !qe(this.props, e);
        }
      }, {
        key: "getClasses",
        value: function value(e) {
          /* eslint-disable no-unused-vars */
          var t = e.valid,
              a = e.className,
              n = e.color,
              s = e.presetName,
              i = e.inputStyle,
              o = e.labelStyle,
              r = [];
          n && r.push("mbsc-" + s + "-" + n), a && r.push(a), i && r.push("mbsc-input-" + i), o && r.push("mbsc-label-" + o), void 0 === t || t || r.push("mbsc-err");
          var l = "";
          return r.length && (l = r.reduce(function (e, t) {
            return e + " " + t;
          }).replace(/\s+/g, " ").trim()), l;
        }
      }]), a;
    }(e.Component), Fn.propTypes = {
      valid: a.bool,
      color: a.string,
      presetName: a.string,
      inputStyle: a.string,
      labelStyle: a.string
    }, In);
    n.Form.Label = vs, n.Label = vs;
    var bs = (Ln = jn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.inputMounted = t.inputMounted.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new na(this.inputNode, e);
        }
      }, {
        key: "inputMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.valid,
              n = t.errorMessage,
              s = t.type,
              i = t.icon,
              o = t.iconAlign,
              r = t.passwordToggle,
              l = t.iconShow,
              c = t.iconHide,
              u = t.iconUpload,
              d = t.inputStyle,
              m = t.labelStyle,
              p = t.children,
              h = t.dropdown,
              f = ls(t, ["valid", "errorMessage", "type", "icon", "iconAlign", "passwordToggle", "iconShow", "iconHide", "iconUpload", "inputStyle", "labelStyle", "children", "dropdown"]),
              v = null;
          n && !a && (v = e.createElement("span", {
            className: "mbsc-err-msg"
          }, n));
          var b = null;
          return h && (b = e.createElement("span", {
            className: "mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"
          })), s = s || "text", e.createElement(vs, {
            valid: a,
            inputStyle: d,
            labelStyle: m,
            className: h ? "mbsc-select" : ""
          }, p, e.createElement("span", {
            className: "mbsc-input-wrap"
          }, e.createElement("input", rs({
            ref: this.inputMounted,
            type: s,
            "data-icon": i,
            "data-icon-align": o,
            "data-password-toggle": r,
            "data-icon-show": l,
            "data-icon-hide": c,
            "data-icon-upload": u
          }, f)), b, v));
        }
      }]), a;
    }(), jn.propTypes = {
      disabled: a.bool,
      valid: a.bool,
      errorMessage: a.string,
      type: a.string,
      icon: a.string,
      iconAlign: a.string,
      passwordToggle: a.bool,
      iconShow: a.string,
      iconHide: a.string,
      iconUpload: a.string,
      name: a.string,
      dropdown: a.bool,
      inputStyle: a.string,
      labelStyle: a.string
    }, Ln);
    n.Input = bs;
    var gs = (zn = Hn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.textMounted = t.textMounted.bind(t), t;
      }
  
      return u(a, at), l(a, [{
        key: "componentDidUpdate",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.optimizeUpdate ? (this.optimizeUpdate.updateOptions && this.instance.option(e), this.optimizeUpdate.updateValue && this.instance.refresh()) : (this.instance.option(e), void 0 !== this.props.value && this.instance.refresh());
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new ma(this.inputNode, e);
        }
      }, {
        key: "textMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.valid,
              n = t.errorMessage,
              s = t.icon,
              i = t.iconAlign,
              o = (t.inputStyle, t.labelStyle, t.children),
              r = ls(t, ["valid", "errorMessage", "icon", "iconAlign", "inputStyle", "labelStyle", "children"]),
              l = null;
          return n && !a && (l = e.createElement("span", {
            className: "mbsc-err-msg"
          }, n)), e.createElement(vs, {
            valid: a
          }, o, e.createElement("span", {
            className: "mbsc-input-wrap"
          }, e.createElement("textarea", rs({
            ref: this.textMounted,
            "data-icon": s,
            "data-icon-align": i
          }, r)), l));
        }
      }]), a;
    }(), Hn.propTypes = {
      disabled: a.bool,
      valid: a.bool,
      errorMessage: a.string,
      icon: a.string,
      iconAlign: a.string,
      name: a.string,
      inputStyle: a.string,
      labelStyle: a.string
    }, zn);
    n.Textarea = gs;
    var xs = (Yn = Un = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.selectMounted = t.selectMounted.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new ra(this.selectNode, e);
        }
      }, {
        key: "selectMounted",
        value: function value(e) {
          this.selectNode = e;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.instance._setText();
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.label,
              n = t.valid,
              s = t.errorMessage,
              i = t.icon,
              o = t.iconAlign,
              r = (t.inputStyle, t.labelStyle, t.children),
              l = ls(t, ["label", "valid", "errorMessage", "icon", "iconAlign", "inputStyle", "labelStyle", "children"]),
              c = null;
          return c = s && !n ? e.createElement("span", {
            className: "mbsc-err-msg"
          }, s) : e.createElement("span", null), e.createElement(vs, {
            valid: n
          }, a, e.createElement("span", {
            className: "mbsc-input-wrap"
          }, e.createElement("select", rs({
            ref: this.selectMounted,
            "data-icon": i,
            "data-icon-align": o
          }, l), r), c));
        }
      }]), a;
    }(), Un.propTypes = {
      label: a.string,
      disabled: a.bool,
      valid: a.bool,
      errorMessage: a.string,
      icon: a.string,
      iconAlign: a.string,
      name: a.string,
      inputStyle: a.string,
      labelStyle: a.string
    }, Yn);
    n.Dropdown = xs;
    var ys = ($n = Rn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.btnMounted = t.btnMounted.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new sa(this.btnNode, e), Je.call(this, "", this.getCssClasses(this.props));
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.cssClassUpdate && Je.call(this, this.cssClassUpdate.prev, this.cssClassUpdate.next);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = this.getCssClasses(e),
              a = this.getCssClasses(this.props);
          return this.cssClassUpdate = a !== t ? {
            prev: a,
            next: t
          } : null, !0;
        }
      }, {
        key: "btnMounted",
        value: function value(e) {
          this.btnNode = e;
        }
      }, {
        key: "getCssClasses",
        value: function value(e) {
          var t = e.className,
              a = e.color,
              n = e.flat,
              s = e.block,
              i = e.outline,
              o = [];
          n && o.push("mbsc-btn-flat"), s && o.push("mbsc-btn-block"), i && o.push("mbsc-btn-outline"), a && o.push("mbsc-btn-" + a), t && o.push(t);
          var r = "";
          return o.length && (r = o.reduce(function (e, t) {
            return e + " " + t;
          }).replace(/\s+/g, " ").trim()), r;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.type,
              n = t.children,
              s = (t.className, t.color, t.flat, t.block, t.outline, t.icon),
              i = ls(t, ["type", "children", "className", "color", "flat", "block", "outline", "icon"]);
          return a = a || "button", e.createElement("button", rs({
            ref: this.btnMounted,
            type: a,
            "data-icon": s
          }, i), n);
        }
      }]), a;
    }(), Rn.propTypes = {
      type: a.string,
      color: a.string,
      flat: a.bool,
      block: a.bool,
      outline: a.bool,
      icon: a.string,
      disabled: a.bool,
      name: a.string
    }, $n);
    n.Button = ys;
    var Ts = (Jn = Wn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.inputMounted = t.inputMounted.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new ia(this.inputNode, e);
        }
      }, {
        key: "inputMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.color,
              n = t.children,
              s = (t.inputStyle, ls(t, ["color", "children", "inputStyle"]));
          return e.createElement(vs, {
            color: a,
            presetName: "checkbox"
          }, e.createElement("input", rs({
            ref: this.inputMounted,
            type: "checkbox"
          }, s)), n);
        }
      }]), a;
    }(), Wn.propTypes = {
      color: a.string,
      disabled: a.bool,
      name: a.string,
      inputStyle: a.string
    }, Jn);
    n.Checkbox = Ts;
  
    var _s = (Bn = qn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.inputMounted = t.inputMounted.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new oa(this.inputNode, e);
        }
      }, {
        key: "inputMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.color,
              n = t.children,
              s = (t.inputStyle, ls(t, ["color", "children", "inputStyle"]));
          return e.createElement(vs, {
            color: a,
            presetName: "radio"
          }, e.createElement("input", rs({
            ref: this.inputMounted,
            type: "radio"
          }, s)), n);
        }
      }]), a;
    }(), qn.propTypes = {
      color: a.string,
      name: a.string,
      disabled: a.bool,
      inputStyle: a.string
    }, Bn);
  
    n.Radio = _s;
    var ws = (Gn = Kn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.inputMounted = t.inputMounted.bind(t), t;
      }
  
      return u(a, et), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new pa(this.inputNode, e);
        }
      }, {
        key: "inputMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              a = t.color,
              n = t.children,
              s = t.multiSelect,
              i = t.icon,
              o = ls(t, ["color", "children", "multiSelect", "icon"]),
              r = s ? "checkbox" : "radio";
          return e.createElement(vs, {
            color: a,
            presetName: "segmented"
          }, e.createElement("input", rs({
            ref: this.inputMounted,
            type: r,
            "data-icon": i,
            "data-role": "segmented"
          }, o)), n);
        }
      }]), a;
    }(), Kn.propTypes = {
      color: a.string,
      name: a.string,
      disabled: a.bool,
      multiSelect: a.bool,
      icon: a.string
    }, Gn);
    n.Segmented = ws;
  
    var Cs = (Zn = Xn = function (t) {
      function a(e, t) {
        r(this, a);
        var n = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return n.presetName = t, n.inputMounted = n.inputMounted.bind(n), n;
      }
  
      return u(a, at), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props, this.mbscInit);
          this.instance = new we[this.mbscInit.component || "Scroller"](this.inputNode, e), ye(this.inputNode).on("change", this.props.onChange || function () {}), Je.call(this, "", this.getCssClasses(this.props));
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = this.getCssClasses(e),
              n = this.getCssClasses(this.props);
          return this.cssClassUpdate = n !== t ? {
            prev: n,
            next: t
          } : null, c(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "shouldComponentUpdate", this).call(this, e) || this.cssClassUpdate;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          if (this.cssClassUpdate && Je.call(this, this.cssClassUpdate.prev, this.cssClassUpdate.next), this.optimizeUpdate.updateOptions) {
            var e = this.getSettingsFromProps(this.props);
            this.instance.option(e);
          }
        }
      }, {
        key: "inputMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "getCssClasses",
        value: function value(e) {
          var t = e.className,
              a = e.color,
              n = [];
          return a && n.push("mbsc-" + this.presetName + "-" + a), t && n.push(t), n.length ? n.reduce(function (e, t) {
            return e + " " + t;
          }).replace(/\s+/g, " ").trim() : "";
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children),
              n = (t.value, t.checked, t.onChange, t.name),
              s = (t.color, t.labelStyle),
              i = t.inputStyle,
              o = ls(t, ["className", "children", "value", "checked", "onChange", "name", "color", "labelStyle", "inputStyle"]),
              r = this.inputType || "text";
          return e.createElement(vs, {
            inputStyle: i,
            labelStyle: s
          }, a, e.createElement("input", rs({
            ref: this.inputMounted,
            type: r,
            "data-role": n,
            "data-enhance": "false"
          }, o)));
        }
      }]), a;
    }(), Xn.propTypes = rs({}, Ue, {
      color: us,
      labelStyle: us,
      inputStyle: us
    }), Zn),
        Ss = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "switch"));
        return a.mbscInit = {
          component: "Switch"
        }, a.inputType = "checkbox", a;
      }
  
      return u(t, Cs), l(t, [{
        key: "componentDidMount",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "componentDidMount", this).call(this), void 0 !== this.props.checked && this.instance.setVal(this.props.checked, !0, !1);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var a = c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "shouldComponentUpdate", this).call(this, e),
              n = this.optimizeUpdate.updateChecked = !qe(e.checked, this.props.checked);
          return a || n;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "componentDidUpdate", this).call(this), this.optimizeUpdate.updateChecked && !qe(this.instance.getVal(), this.props.checked) && this.instance.setVal(this.props.checked);
        }
      }]), t;
    }();
  
    Ss.propTypes = rs({}, Ss.propTypes, hs), n.Switch = Ss;
  
    var Ms = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "stepper"));
        return a.mbscInit = {
          component: "Stepper"
        }, a;
      }
  
      return u(t, Cs), l(t, [{
        key: "componentDidMount",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "componentDidMount", this).call(this), void 0 !== this.props.value && this.instance.setVal(this.props.value, !0, !1);
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "componentDidUpdate", this).call(this), this.optimizeUpdate.updateValue && !qe(this.props.value, this.instance.getVal()) && this.instance.setVal(this.props.value);
        }
      }]), t;
    }();
  
    Ms.propTypes = rs({}, Ms.propTypes, ps), n.Stepper = Ms;
  
    var ks = function (e) {
      function t(e) {
        return r(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }
  
      return u(t, at), l(t, [{
        key: "componentDidMount",
        value: function value() {
          Je.call(this, "", this.getCssClasses(this.props));
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "componentDidUpdate", this).call(this), this.cssClassUpdate && Je.call(this, this.cssClassUpdate.prev, this.cssClassUpdate.next);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var a = this.getCssClasses(e),
              n = this.getCssClasses(this.props);
          return this.cssClassUpdate = n !== a ? {
            prev: n,
            next: a
          } : null, c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "shouldComponentUpdate", this).call(this, e) || this.cssClassUpdate;
        }
      }, {
        key: "getCssClasses",
        value: function value(e) {
          var t = e.className,
              a = e.color,
              n = [];
          return a && n.push("mbsc-" + this.presetName + "-" + a), t && n.push(t), n.length ? n.reduce(function (e, t) {
            return e + " " + t;
          }).replace(/\s+/g, " ").trim() : "";
        }
      }]), t;
    }(),
        Ds = (es = Qn = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.presetName = "progress", t.progressMounted = t.progressMounted.bind(t), t;
      }
  
      return u(a, ks), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new ga(this.progressNode, e), void 0 !== this.props.value && this.instance.setVal(this.props.value, !0), c(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "componentDidMount", this).call(this);
        }
      }, {
        key: "progressMounted",
        value: function value(e) {
          this.progressNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children),
              n = (t.value, t.color, t.inputStyle),
              s = t.labelStyle,
              i = ls(t, ["className", "children", "value", "color", "inputStyle", "labelStyle"]);
          return e.createElement(vs, {
            labelStyle: s,
            inputStyle: n
          }, a, e.createElement("progress", rs({
            ref: this.progressMounted
          }, i)));
        }
      }]), a;
    }(), Qn.propTypes = rs({}, Ue, {
      "data-icon": us,
      "data-icon-align": a.oneOf(["left", "right"]),
      val: a.oneOf(["left", "right"]),
      disabled: ms,
      max: cs,
      value: cs,
      color: us,
      inputStyle: us,
      labelStyle: us
    }), es);
  
    n.Progress = Ds;
    var Os = (as = ts = function (a) {
      function n(e) {
        r(this, n);
        var t = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return t.presetName = "slider", t.firstInputMounted = t.firstInputMounted.bind(t), t.parentMounted = t.parentMounted.bind(t), t;
      }
  
      return u(n, ks), l(n, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new xa(this.firstInput, e), void 0 !== this.props.value && this.instance.setVal(this.props.value, !0);
          var t = this;
          ye(this.label).on("change", function () {
            if (t.props.onChange) {
              var e = t.instance.getVal();
              t.props.onChange(e);
            }
          }), c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "componentDidMount", this).call(this);
        }
      }, {
        key: "firstInputMounted",
        value: function value(e) {
          this.firstInput = e;
        }
      }, {
        key: "parentMounted",
        value: function value(e) {
          this.label = t.findDOMNode(e);
        }
      }, {
        key: "onValueChanged",
        value: function value() {}
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.children,
              n = t.value,
              s = (t.onChange, t.className, t.icon),
              i = t.live,
              o = (t.stepLabels, t.tooltip, t.color, t.inputStyle),
              r = t.labelStyle,
              l = ls(t, ["children", "value", "onChange", "className", "icon", "live", "stepLabels", "tooltip", "color", "inputStyle", "labelStyle"]),
              c = n || [];
          return i = i || this.props["data-live"] || !1, s = s || this.props["data-icon"], void 0 === n || Array.isArray(n) || (c = [n]), e.createElement(vs, {
            ref: this.parentMounted,
            labelStyle: r,
            inputStyle: o
          }, a, c.map(function (t, a) {
            return 0 === a ? e.createElement("input", rs({
              ref: this.firstInputMounted,
              "data-label-style": r,
              "data-input-style": o,
              "data-icon": s,
              "data-live": i,
              key: a,
              type: "range"
            }, l)) : e.createElement("input", {
              key: a,
              type: "range",
              "data-live": i,
              "data-index": a,
              "data-label-style": r,
              "data-input-style": o
            });
          }, this));
        }
      }]), n;
    }(), ts.propTypes = rs({}, Ue, {
      highlight: ms,
      live: ms,
      stepLabels: a.arrayOf(cs),
      "data-icon": us,
      tooltip: ms,
      val: a.oneOf(["left", "right"]),
      disabled: ms,
      max: cs,
      min: cs,
      step: cs,
      value: a.oneOfType([cs, a.arrayOf(cs)]),
      color: us,
      inputStyle: us,
      labelStyle: us
    }), as);
    n.Slider = Os;
    var Ns = (ss = ns = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.presetName = "rating", t.inputMounted = t.inputMounted.bind(t), t.parentMounted = t.parentMounted.bind(t), t;
      }
  
      return u(a, ks), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this,
              t = this.getSettingsFromProps(this.props);
          this.instance = new ya(this.inputNode, t), void 0 !== this.props.value && this.instance.setVal(this.props.value, !0), ye(this.label).on("change", function () {
            if (e.props.onChange) {
              var t = e.instance.getVal();
              e.props.onChange(t);
            }
          }), c(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "componentDidMount", this).call(this);
        }
      }, {
        key: "inputMounted",
        value: function value(e) {
          this.inputNode = e;
        }
      }, {
        key: "parentMounted",
        value: function value(e) {
          this.label = e;
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.className, t.children),
              n = (t.onChange, t.value, t.empty),
              s = t.filled,
              i = t.template,
              o = t.val,
              r = (t.color, t.inputStyle),
              l = t.labelStyle,
              c = ls(t, ["className", "children", "onChange", "value", "empty", "filled", "template", "val", "color", "inputStyle", "labelStyle"]);
          return e.createElement(vs, {
            ref: this.parentMounted,
            labelStyle: l,
            inputStyle: r
          }, a, e.createElement("input", rs({
            type: "rating",
            "data-role": "rating",
            "data-val": o,
            "data-template": i,
            "data-empty": n,
            "data-filled": s,
            ref: this.inputMounted
          }, c)));
        }
      }]), a;
    }(), ns.propTypes = rs({}, Ue, {
      val: a.oneOf(["left", "right"]),
      disabled: ms,
      max: cs,
      min: cs,
      step: cs,
      template: us,
      empty: us,
      filled: us,
      value: cs,
      color: us,
      inputStyle: us,
      labelStyle: us
    }), ss);
    n.Rating = Ns;
    var Ps = (os = is = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, a), l(n, [{
        key: "componentDidMount",
        value: function value() {
          if (void 0 !== this.props.collapsible) {
            var e = this.props.open || !1;
            this.instance = new _a(t.findDOMNode(this), {
              isOpen: e
            });
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function value(e) {
          void 0 !== this.props.open && this.props.open != e.open && (this.props.open ? this.instance.show() : this.instance.hide());
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = t.children,
              n = t.inset,
              s = (t.collapsible, t.className),
              i = ls(t, ["children", "inset", "collapsible", "className"]),
              o = "mbsc-form-group" + (void 0 !== n ? "-inset" : "") + " " + (s || "");
          return e.createElement("div", rs({
            className: o
          }, i), a);
        }
      }]), n;
    }(e.Component), is.propTypes = {
      collapsible: a.bool,
      open: a.bool,
      inset: a.any
    }, os);
    n.FormGroup = Ps, n.MbscFormGroup = Ps;
  
    var Es = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.cssClasses = "mbsc-form-group-title " + (t.props.className || ""), t;
      }
  
      return u(a, t), l(a, [{
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.cssClasses
          }, this.props.children);
        }
      }]), a;
    }(e.Component);
  
    n.FormGroupTitle = Es, n.MbscFormGroupTitle = Es;
  
    var Vs = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.cssClasses = "mbsc-form-group-content " + (t.props.className || ""), t;
      }
  
      return u(a, t), l(a, [{
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.cssClasses
          }, this.props.children);
        }
      }]), a;
    }(e.Component);
  
    n.FormGroupContent = Vs, n.MbscFormGroupContent = Vs;
  
    var As = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.cssClasses = "mbsc-accordion " + (t.props.className || ""), t;
      }
  
      return u(a, t), l(a, [{
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.cssClasses
          }, this.props.children);
        }
      }]), a;
    }(e.Component);
  
    n.Accordion = As;
  
    var Fs = {
      invalid: [],
      showInput: !0,
      inputClass: "",
      itemSelector: "li"
    },
        Is = function Is(e) {
      var t,
          a,
          n,
          s,
          i = Se({}, e.settings),
          o = Se(e.settings, Fs, i),
          r = o.layout || (/top|bottom/.test(o.display) ? "liquid" : ""),
          l = "liquid" == r,
          c = o.readonly,
          u = ye(this),
          d = this.id + "_dummy",
          m = 0,
          p = [],
          h = o.wheelArray || function t(a) {
        var n = [];
        var s = a.length > 1 ? a : a.children(o.itemSelector);
        s.each(function (a) {
          var s = ye(this),
              i = s.clone();
          i.children("ul,ol").remove(), i.children(o.itemSelector).remove();
          var r = e._processMarkup ? e._processMarkup(i) : i.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
              l = !!s.attr("data-invalid"),
              c = {
            key: void 0 === s.attr("data-val") || null === s.attr("data-val") ? a : s.attr("data-val"),
            value: r,
            invalid: l,
            children: null
          },
              u = "li" === o.itemSelector ? s.children("ul,ol") : s.children(o.itemSelector);
          u.length && (c.children = t(u)), n.push(c);
        });
        return n;
      }(u),
          f = function (e) {
        var t,
            a = [],
            n = e,
            s = !0,
            i = 0;
  
        for (; s;) {
          t = g(n), a[i++] = t.key, (s = t.children) && (n = s);
        }
  
        return a;
      }(h);
  
      function v(e, t, a) {
        for (var n, s = 0, i = a, o = []; s < t;) {
          var r = e[s];
  
          for (n in i) {
            if (i[n].key == r) {
              i = i[n].children;
              break;
            }
          }
  
          s++;
        }
  
        for (s = 0; s < i.length;) {
          i[s].invalid && o.push(i[s].key), s++;
        }
  
        return o;
      }
  
      function b(e, t, a) {
        var n,
            s,
            i = 0,
            o = !0,
            r = [[]],
            c = h;
        if (t) for (s = 0; s < t; s++) {
          l ? r[0][s] = {} : r[s] = [{}];
        }
  
        for (; o;) {
          for (l ? r[0][i] = x(c, i) : r[i] = [x(c, i)], s = 0, n = null; s < c.length && !n;) {
            c[s].key == e[i] && (void 0 !== a && i <= a || void 0 === a) && (n = c[s]), s++;
          }
  
          n || (n = g(c)), n && n.children ? (c = n.children, i++) : o = !1;
        }
  
        return r;
      }
  
      function g(e, t) {
        if (!e) return !1;
  
        for (var a, n = 0; n < e.length;) {
          if (!(a = e[n++]).invalid) return t ? n - 1 : a;
        }
  
        return !1;
      }
  
      function x(e, t) {
        for (var a = {
          data: [],
          label: o.labels && o.labels[t] ? o.labels[t] : t
        }, n = 0; n < e.length;) {
          a.data.push({
            value: e[n].key,
            display: e[n].value
          }), n++;
        }
  
        return a;
      }
  
      function y(t) {
        e._isVisible && ye(".mbsc-sc-whl-w", e._markup).css("display", "").slice(t).hide();
      }
  
      function T(e, t) {
        for (var a, n, s, i = 0, o = h, r = !0, l = []; r;) {
          if (void 0 !== e[i] && i <= t) for (s = 0, n = e[i], a = void 0; s < o.length && void 0 === a;) {
            o[s].key != e[i] || o[s].invalid || (a = s), s++;
          } else n = o[a = g(o, !0)] && o[a].key;
          l[i] = n, i++, r = !!o[a] && o[a].children, o = o[a] && o[a].children;
        }
  
        return {
          lvl: i,
          nVector: l
        };
      }
  
      function _(t, a, s) {
        var i,
            o,
            r = (a || 0) + 1,
            c = [],
            u = {};
  
        for (o = b(t, null, a), i = 0; i < t.length; i++) {
          e._tempWheelArray[i] = t[i] = s.nVector[i] || 0;
        }
  
        for (; r < s.lvl;) {
          u[r] = l ? o[0][r] : o[r][0], c.push(r++);
        }
  
        y(s.lvl), p = t.slice(0), c.length && (n = !0, e.changeWheel(u));
      }
  
      return function e(t, a) {
        var n;
  
        for (m = a > m ? a : m, n = 0; n < t.length; n++) {
          t[n].children && e(t[n].children, a + 1);
        }
      }(h, 1), s = b(f, m), ye("#" + d).remove(), o.input ? a = ye(o.input) : o.showInput && (a = ye('<input type="text" id="' + d + '" value="" class="' + o.inputClass + '" placeholder="' + (o.placeholder || "") + '" readonly />').insertBefore(u)), a && e.attachShow(a), o.wheelArray || u.hide(), {
        wheels: s,
        anchor: a,
        layout: r,
        headerText: !1,
        setOnTap: 1 == m,
        formatValue: function formatValue(e) {
          return void 0 === t && (t = T(e, e.length).lvl), e.slice(0, t).join(" ");
        },
        parseValue: function parseValue(e) {
          return e ? (e + "").split(" ") : (o.defaultValue || f).slice(0);
        },
        onBeforeShow: function onBeforeShow() {
          var t = e.getArrayVal(!0);
          p = t.slice(0), o.wheels = b(t, m, m), n = !0;
        },
        onWheelGestureStart: function onWheelGestureStart(e) {
          o.readonly = function (e, t) {
            for (var a = []; e;) {
              a[--e] = !0;
            }
  
            return a[t] = !1, a;
          }(m, e.index);
        },
        onWheelAnimationEnd: function onWheelAnimationEnd(a) {
          var n = a.index,
              s = e.getArrayVal(!0),
              i = T(s, n);
          t = i.lvl, o.readonly = c, s[n] != p[n] && _(s, n, i);
        },
        onFill: function onFill(e) {
          t = void 0, a && a.val(e.valueText);
        },
        validate: function validate(e) {
          var a = e.values,
              s = e.index,
              i = T(a, a.length);
          return t = i.lvl, void 0 === s && (y(i.lvl), n || _(a, s, i)), n = !1, {
            disabled: function (e, t, a) {
              for (var n = 0, s = []; n < e;) {
                s[n] = v(a, n, t), n++;
              }
  
              return s;
            }(t, h, a)
          };
        },
        onDestroy: function onDestroy() {
          a && ye("#" + d).remove(), u.show();
        }
      };
    };
  
    Pt.image = function (e) {
      return e.settings.enhance && (e._processMarkup = function (e) {
        var t = e.attr("data-icon");
        return e.children().each(function (e, t) {
          (t = ye(t)).is("img") ? ye('<div class="mbsc-img-c"></div>').insertAfter(t).append(t.addClass("mbsc-img")) : t.is("p") && t.addClass("mbsc-img-txt");
        }), t && e.prepend('<div class="mbsc-ic mbsc-ic-' + t + '"></div'), e.html('<div class="mbsc-img-w">' + e.html() + "</div>"), e.html();
      }), Is.call(this, e);
    };
  
    var js = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Ls = {
      defaultValue: a.arrayOf(a.oneOfType([a.number, a.string])),
      enhance: a.bool,
      inputClass: a.string,
      invalid: a.array,
      labels: a.arrayOf(a.string),
      placeholder: a.string,
      showInput: a.bool
    },
        Hs = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "image"
        }, a;
      }
  
      return u(t, st), t;
    }();
  
    Hs.propTypes = js({}, Hs.propTypes, Ls), n.Image = Hs;
  
    var zs,
        Us = "mbsc-selected",
        Ys = "mbsc-lv-item-active",
        Rs = 1,
        $s = "transparent",
        Ws = function Ws(e, t) {
      var a,
          s,
          i,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S,
          M,
          k,
          D,
          O,
          N,
          P,
          E,
          I,
          j,
          H,
          z,
          U,
          $,
          W,
          J,
          q,
          K,
          Q,
          ee,
          te,
          ae,
          ne,
          se,
          ie,
          oe,
          re,
          le,
          ce,
          ue,
          de,
          me,
          pe,
          he,
          fe,
          ve,
          be,
          ge,
          xe,
          Te,
          we,
          Ce,
          ke,
          De,
          Oe,
          Ne,
          Pe,
          Ee,
          Ve,
          Ae,
          Fe,
          Ie,
          je,
          Le,
          He,
          ze,
          Ue,
          Ye,
          Re,
          $e,
          We,
          Je,
          qe,
          Ke,
          Xe,
          Ze,
          et,
          tt,
          at,
          nt,
          st,
          it,
          lt,
          ct,
          ut,
          dt,
          mt,
          pt,
          ht,
          ft,
          vt,
          bt,
          gt,
          xt = this,
          yt = e,
          Tt = ye(yt),
          _t = 0,
          wt = 0,
          Ct = 0,
          St = {},
          Mt = {},
          kt = {};
  
      function Dt() {
        He = !1, Pe = !1, r = 0, Xe = 0, Ze = new Date(), re = p.width(), v = ia(p), ue = v.index(le), ce = le[0].offsetHeight, Ct = le[0].offsetTop, dt = mt[le.attr("data-type") || "defaults"], Ke = dt.stages;
      }
  
      function Ot(e) {
        var t;
        "touchstart" === e.type && (d.removeClass("mbsc-no-touch"), Ee = !0, clearTimeout(Ve)), !ot(e, this) || a || _t || zs || xa || !n.XdAQT || (a = !0, l = !0, se = !1, oe = "touchstart" === e.type, et = G(e, "X"), tt = G(e, "Y"), T = 0, _ = 0, le = ye(this), t = le, Dt(), lt = dt.actionable || le.hasClass("mbsc-lv-parent") || le.hasClass("mbsc-lv-back"), pe = le.offset().top, lt && (i = setTimeout(function () {
          t.addClass(oe ? Ys : ""), N("onItemActivate", {
            target: t[0],
            domEvent: e
          });
        }, 120)), xt.sortable && !le.hasClass("mbsc-lv-back") && (xt.sortable.group || (De = le.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), Ae = le.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), ge = (xt.sortable.group ? p.children(me).eq(0) : Ae.length ? Ae.eq(-1) : le)[0].offsetTop - Ct, be = (xt.sortable.group ? p.children(me).eq(-1) : De.length ? De.eq(-1) : le)[0].offsetTop - Ct, xt.sortable.handle ? ye(e.target).hasClass("mbsc-lv-handle") && (clearTimeout(i), "Moz" === Qe ? (e.preventDefault(), It()) : ut = setTimeout(function () {
          It();
        }, 100)) : ut = setTimeout(function () {
          P.appendTo(le), P[0].style[Qe + "Animation"] = "mbsc-lv-fill " + (Ye.sortDelay - 100) + "ms linear", clearTimeout(k), clearTimeout(i), l = !1, ut = setTimeout(function () {
            P[0].style[Qe + "Animation"] = "", It();
          }, Ye.sortDelay - 80);
        }, 80)), "mousedown" == e.type && ye(document).on("mousemove", Nt).on("mouseup", Pt));
      }
  
      function Nt(e) {
        var t = !1,
            n = !0,
            s = r;
        if (a) if (D = G(e, "X"), O = G(e, "Y"), T = D - et, _ = O - tt, clearTimeout(k), S || nt || Re || le.hasClass("mbsc-lv-back") || (Math.abs(_) > 10 ? (Re = !0, Pt(Se({}, e, {
          type: "mousemove" == e.type ? "mouseup" : "touchend"
        })), clearTimeout(i)) : Math.abs(T) > 7 && Vt()), nt) e.preventDefault(), r = T / re * 100, At(s);else if (S) {
          e.preventDefault();
          var o,
              l = ft.scrollTop(),
              c = Math.max(ge, Math.min(_ + bt, be)),
              u = H ? pe - gt + l - bt : pe;
          vt + l < u + c + ce ? (ft.scrollTop(u + c - vt + ce), o = !0) : u + c < l && (ft.scrollTop(u + c), o = !0), o && (bt += ft.scrollTop() - l), Ce && (xt.sortable.multiLevel && we.hasClass("mbsc-lv-parent") ? Ct + ce / 4 + c > Ce ? t = !0 : Ct + ce - ce / 4 + c > Ce && (w = we.addClass("mbsc-lv-item-hl"), n = !1) : Ct + ce / 2 + c > Ce && (we.hasClass("mbsc-lv-back") ? xt.sortable.multiLevel && (C = we.addClass("mbsc-lv-item-hl"), n = !1) : t = !0), t && (Fe.insertAfter(we), Ie = we, we = ra(we, "next"), je = Ce, Ce = we.length && we[0].offsetTop, m++)), !t && je && (xt.sortable.multiLevel && Ie.hasClass("mbsc-lv-parent") ? Ct + ce - ce / 4 + c < je ? t = !0 : Ct + ce / 4 + c < je && (w = Ie.addClass("mbsc-lv-item-hl"), n = !1) : Ct + ce / 2 + c < je && (Ie.hasClass("mbsc-lv-back") ? xt.sortable.multiLevel && (C = Ie.addClass("mbsc-lv-item-hl"), n = !1) : t = !0), t && (Fe.insertBefore(Ie), we = Ie, Ie = ra(Ie, "prev"), Ce = je, je = Ie.length && Ie[0].offsetTop + Ie[0].offsetHeight, m--)), n && (w && (w.removeClass("mbsc-lv-item-hl"), w = !1), C && (C.removeClass("mbsc-lv-item-hl"), C = !1)), t && N("onSortChange", {
            target: le[0],
            index: m
          }), Kt(le, c), N("onSort", {
            target: le[0],
            index: m
          });
        } else (Math.abs(T) > 5 || Math.abs(_) > 5) && Gt();
      }
  
      function Pt(e) {
        var t,
            n,
            s,
            o = le;
        a && (a = !1, Gt(), "mouseup" == e.type && ye(document).off("mousemove", Nt).off("mouseup", Pt), Re || (Ve = setTimeout(function () {
          Ee = !1;
        }, 300)), (nt || Re || S) && (Pe = !0), nt ? Ft() : S ? (s = p, w ? (ea(le.detach()), n = kt[w.attr("data-ref")], m = ia(n.child).length, w.removeClass("mbsc-lv-item-hl"), Ye.navigateOnDrop ? pa(w, function () {
          xt.add(null, le, null, null, w, !0), da(le), jt(le, ue, s, !0);
        }) : (xt.add(null, le, null, null, w, !0), jt(le, ue, s, !0))) : C ? (ea(le.detach()), n = kt[C.attr("data-back")], m = ia(n.parent).index(n.item) + 1, C.removeClass("mbsc-lv-item-hl"), Ye.navigateOnDrop ? pa(C, function () {
          xt.add(null, le, m, null, p, !0), da(le), jt(le, ue, s, !0);
        }) : (xt.add(null, le, m, null, n.parent, !0), jt(le, ue, s, !0))) : (t = Fe[0].offsetTop - Ct, Kt(le, t, 6 * Math.abs(t - Math.max(ge, Math.min(_ + bt, be))), function () {
          ea(le), le.insertBefore(Fe), jt(le, ue, s, m !== ue);
        })), S = !1) : !Re && Math.abs(T) < 5 && Math.abs(_) < 5 && (se = !0, "touchend" === e.type && Ye.tap && Z(e.target, X(ye(e.target)), e)), clearTimeout(i), setTimeout(function () {
          o.removeClass(Ys), N("onItemDeactivate", {
            target: o[0]
          });
        }, 100), Re = !1, b = null);
      }
  
      function Et(e) {
        var t;
        se && (t = "true" == le.attr("data-selected"), dt.tap && dt.tap.call(yt, {
          target: le,
          index: ue,
          domEvent: e
        }, xt), lt && !le.hasClass(Ys) && (le.addClass(oe ? Ys : ""), N("onItemActivate", {
          target: le[0],
          domEvent: e
        })), $e && (Te ? t ? ga(le) : ba(le) : (ga(ye(me, d).filter("." + Us)), ba(le))), !1 !== N("onItemTap", {
          target: le[0],
          index: ue,
          domEvent: e,
          selected: t
        }) && pa(le));
      }
  
      function Vt() {
        (nt = ta(dt.swipe, {
          target: le[0],
          index: ue,
          direction: T > 0 ? "right" : "left"
        })) && (Gt(), clearTimeout(i), dt.actions ? (s = ua(dt, T), xe.html(dt.icons).show().children().css("width", s + "%"), ae.hide(), ye(".mbsc-lv-ic-m", ne).removeClass("mbsc-lv-ic-disabled"), ye(dt.leftMenu).each(Rt), ye(dt.rightMenu).each(Rt)) : (ae.show(), xe.hide(), g = dt.start, b = Ke[g], Le = Ke[g - 1], ke = Ke[g + 1]), le.addClass("mbsc-lv-item-swiping").removeClass(Ys), ct.css("line-height", ce + "px"), ne.css({
          top: Ct,
          height: ce,
          backgroundColor: la(T)
        }).addClass("mbsc-lv-stage-c-v").appendTo(p.parent()), Ye.iconSlide && le.append(ae), N("onSlideStart", {
          target: le[0],
          index: ue
        }));
      }
  
      function At(e) {
        var t = !1;
        Ue || (dt.actions ? ne.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (r < 0 ? "right" : "left")) : (Le && (r < 0 ? r <= Le.percent : r < b.percent) ? (ke = b, b = Le, Le = Ke[--g - 1], t = !0) : ke && (r < 0 ? r > b.percent : r >= ke.percent) && (Le = b, b = ke, ke = Ke[++g + 1], t = !0), b && ((t || r > 0 == e <= 0) && Xt(b, Ye.iconSlide), t && N("onStageChange", {
          target: le[0],
          index: ue,
          stage: b
        }))), We || (Ue = !0, ze = V(Jt)));
      }
  
      function Ft(e) {
        var t,
            a,
            n = !1;
        A(ze), Ue = !1, We || Jt(), dt.actions ? Math.abs(r) > 10 && s && (Bt(le, r < 0 ? -s : s, 200), n = !0, zs = !0, c = le, u = ue, ye(document).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (t) {
          t.preventDefault(), qt(le, !0, e);
        })) : r && (Ye.quickSwipe && !We && (t = (a = new Date() - Ze) < 300 && T > 50, a < 300 && T < -50 ? (He = !0, Xt(b = dt.left, Ye.iconSlide)) : t && (He = !0, Xt(b = dt.right, Ye.iconSlide))), b && b.action && (ta(b.disabled, {
          target: le[0],
          index: ue
        }) || (n = !0, (zs = We || ta(b.confirm, {
          target: le[0],
          index: ue
        })) ? (Bt(le, (r < 0 ? -1 : 1) * ae[0].offsetWidth * 100 / re, 200, !0), Wt(b, le, ue, !1, e)) : $t(b, le, ue, e)))), n || qt(le, !0, e), nt = !1;
      }
  
      function It() {
        S = !0, w = !1, C = !1, bt = 0, m = ue, Ye.vibrate && R(), we = ra(le, "next"), Ce = we.length && we[0].offsetTop, Ie = ra(le, "prev"), je = Ie.length && Ie[0].offsetTop + Ie[0].offsetHeight, Fe.height(ce).insertAfter(le), le.css({
          top: Ct
        }).addClass("mbsc-lv-item-dragging").removeClass(Ys).appendTo(M), N("onSortStart", {
          target: le[0],
          index: m
        });
      }
  
      function jt(e, t, a, n) {
        e.removeClass("mbsc-lv-item-dragging"), Fe.remove(), N("onSortEnd", {
          target: e[0],
          index: m
        }), Ye.vibrate && R(), n && (xt.addUndoAction(function (n) {
          xt.move(e, t, null, n, a, !0);
        }, !0), N("onSortUpdate", {
          target: e[0],
          index: m
        }));
      }
  
      function Lt() {
        Ee || (clearTimeout(K), zs && ye(document).trigger("touchstart"), W && (xt.close($, J), W = !1, $ = null));
      }
  
      function Ht() {
        clearTimeout(x), x = setTimeout(function () {
          vt = ft[0].innerHeight || ft.innerHeight(), gt = H ? ft.offset().top : 0, a && (Ct = le[0].offsetTop, ce = le[0].offsetHeight, ne.css({
            top: Ct,
            height: ce
          }));
        }, 200);
      }
  
      function zt(e) {
        Pe && (e.stopPropagation(), e.preventDefault(), Pe = !1);
      }
  
      function Ut() {
        ie || (clearTimeout(Ne), Ne = setTimeout(function () {
          var e = H ? ft[0].getBoundingClientRect().top + ft.innerHeight() : window.innerHeight,
              t = ve[0].getBoundingClientRect().top - 3 < e;
          !ie && t && N("onListEnd");
        }, 250));
      }
  
      function Yt() {
        if (S || !a) {
          var e,
              t = ft.scrollTop(),
              n = Tt.offset().top,
              s = Tt[0].offsetHeight,
              i = H ? ft.offset().top : t;
          ye(".mbsc-lv-gr-title", Tt).each(function (t, a) {
            ye(a).offset().top < i && (e = a);
          }), n < i && n + s > i ? I.show().empty().append(ye(e).clone()) : I.hide();
        }
      }
  
      function Rt(e, t) {
        ta(t.disabled, {
          target: le[0],
          index: ue
        }) && ye(".mbsc-ic-" + t.icon, ne).addClass("mbsc-lv-ic-disabled");
      }
  
      function $t(e, t, a, n) {
        var s,
            i = {
          icon: "undo2",
          text: Ye.undoText,
          action: function action() {
            xt.undo();
          }
        };
        e.undo && (xt.startActionTrack(), ye.isFunction(e.undo) && xt.addUndoAction(function () {
          e.undo.call(yt, {
            target: t[0],
            index: a
          }, xt);
        }), pt = t.attr("data-ref")), s = e.action.call(yt, {
          target: t[0],
          index: a
        }, xt), e.undo ? (xt.endActionTrack(), !1 !== s && Bt(t, +t.attr("data-pos") < 0 ? -100 : 100, 200), Fe.height(ce).insertAfter(t), t.css("top", Ct).addClass("mbsc-lv-item-undo"), xe.hide(), ae.show(), ne.append(ae), Xt(i), Wt(i, t, a, !0, n)) : qt(t, s, n);
      }
  
      function Wt(e, t, a, n, s) {
        var i, o;
        zs = !0, ye(document).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (e) {
          e.preventDefault(), n && Qt(t), qt(t, !0, s);
        }), y || ae.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (e) {
          e.stopPropagation(), i = G(e, "X"), o = G(e, "Y");
        }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function (r) {
          r.preventDefault(), "touchend" === r.type && B(), Math.abs(G(r, "X") - i) < 10 && Math.abs(G(r, "Y") - o) < 10 && ($t(e, t, a, s), n && (ht = null, Qt(t)));
        });
      }
  
      function Jt() {
        Bt(le, Xe + 100 * T / re), Ue = !1;
      }
  
      function qt(e, t, a) {
        ye(document).off(".mbsc-lv-conf"), ae.off(".mbsc-lv-conf"), !1 !== t ? Bt(e, 0, "0" !== e.attr("data-pos") ? 200 : 0, !1, function () {
          Zt(e, a), ea(e);
        }) : Zt(e, a), zs = !1;
      }
  
      function Bt(e, t, a, n, s) {
        t = Math.max("right" == nt ? 0 : -100, Math.min(t, "left" == nt ? 0 : 100)), at = e[0].style, e.attr("data-pos", t), at[Qe + "Transform"] = "translate3d(" + (n ? re * t / 100 + "px" : t + "%") + ",0,0)", at[Qe + "Transition"] = Ge + "transform " + (a || 0) + "ms", s && (_t++, setTimeout(function () {
          s(), _t--;
        }, a)), r = t;
      }
  
      function Kt(e, t, a, n) {
        t = Math.max(ge, Math.min(t, be)), (at = e[0].style)[Qe + "Transform"] = "translate3d(0," + t + "px,0)", at[Qe + "Transition"] = Ge + "transform " + (a || 0) + "ms ease-out", n && (_t++, setTimeout(function () {
          n(), _t--;
        }, a));
      }
  
      function Gt() {
        clearTimeout(ut), !l && xt.sortable && (l = !0, P.remove());
      }
  
      function Xt(e, t) {
        var a = ta(e.text, {
          target: le[0],
          index: ue
        }) || "";
        ta(e.disabled, {
          target: le[0],
          index: ue
        }) ? ne.addClass("mbsc-lv-ic-disabled") : ne.removeClass("mbsc-lv-ic-disabled"), ne.css("background-color", e.color || (0 === e.percent ? la(r) : $s)), ae.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (t ? "move-" : "") + (r < 0 ? "right" : "left")), te.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (e.icon || "none")), ct.attr("class", "mbsc-lv-ic-text" + (e.icon ? "" : " mbsc-lv-ic-text-only") + (a ? "" : " mbsc-lv-ic-only")).html(a || "&nbsp;"), Ye.animateIcons && (He ? te.addClass("mbsc-lv-ic-v") : setTimeout(function () {
          te.addClass("mbsc-lv-ic-a");
        }, 10));
      }
  
      function Zt(e, t) {
        a || (te.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), ne.attr("style", "").removeClass("mbsc-lv-stage-c-v"), ct.html("")), ne.removeClass("mbsc-lv-left mbsc-lv-right"), e && (N("onSlideEnd", {
          target: e[0],
          index: ue
        }), t && t());
      }
  
      function Qt(e) {
        e.css("top", "").removeClass("mbsc-lv-item-undo"), ht ? xt.animate(Fe, "collapse", function () {
          Fe.remove();
        }) : Fe.remove(), Zt(), pt = null, ht = null;
      }
  
      function ea(e) {
        (at = e[0].style)[Qe + "Transform"] = "", at[Qe + "Transition"] = "", at.top = "", e.removeClass("mbsc-lv-item-swiping");
      }
  
      function ta(e, t) {
        return ye.isFunction(e) ? e.call(this, t, xt) : e;
      }
  
      function aa(e) {
        return $e && !e.hasClass("mbsc-lv-parent") && !e.hasClass("mbsc-lv-back");
      }
  
      function na(e) {
        var t = e.attr("data-ref"),
            a = e.attr("data-role"),
            s = mt[e.attr("data-type") || "defaults"],
            i = aa(e) && "true" == e.attr("data-selected");
  
        if (t || (t = Rs++, e.attr("data-ref", t)), kt[t] = {
          item: e,
          child: e.children(fe),
          parent: e.parent(),
          ref: e.parent()[0] === yt ? null : e.parent().parent().attr("data-ref")
        }, e.addClass("list-divider" == a ? "mbsc-lv-gr-title" : "mbsc-lv-item" + (s.actionable ? " mbsc-lv-item-actionable" : "") + (i ? " " + Us : "")), e.attr("aria-selected", i ? "true" : "false"), xt.sortable.handle && "list-divider" != a && !e.children(".mbsc-lv-handle-c").length && e.append(z), Ye.enhance && !e.hasClass("mbsc-lv-item-enhanced")) {
          var o = e.attr("data-icon"),
              r = e.find("img").eq(0).addClass("mbsc-lv-img");
          r.is(":first-child") ? e.addClass("mbsc-lv-img-" + (Ye.rtl ? "right" : "left")) : r.length && e.addClass("mbsc-lv-img-" + (Ye.rtl ? "left" : "right")), e.addClass("mbsc-lv-item-enhanced").children().each(function (e, t) {
            (t = ye(t)).is("p, h1, h2, h3, h4, h5, h6") && t.addClass("mbsc-lv-txt");
          }), o && e.addClass("mbsc-lv-item-ic-" + (e.attr("data-icon-align") || (Ye.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + o + '"></div>');
        }
  
        e.append(xt._getText(n, .2));
      }
  
      function sa(e) {
        ye(me, e).not(".mbsc-lv-back").each(function () {
          na(ye(this));
        }), ye(fe, e).not(".mbsc-lv").addClass("mbsc-lv").prepend(Q).parent().addClass("mbsc-lv-parent mbsc-lv-item-actionable").prepend(ee), ye(".mbsc-lv-back", e).each(function () {
          ye(this).attr("data-back", ye(this).parent().parent().attr("data-ref"));
        });
      }
  
      function ia(e) {
        return e.children(me).not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph");
      }
  
      function oa(e) {
        return "object" !== (void 0 === e ? "undefined" : o(e)) && (e = ye(me, d).filter('[data-id="' + e + '"]')), ye(e);
      }
  
      function ra(e, t) {
        for (e = e[t](); e.length && (!e.hasClass("mbsc-lv-item") || e.hasClass("mbsc-lv-ph") || e.hasClass("mbsc-lv-item-dragging"));) {
          if (!xt.sortable.group && e.hasClass("mbsc-lv-gr-title")) return !1;
          e = e[t]();
        }
  
        return e;
      }
  
      function la(e) {
        return (e > 0 ? dt.right : dt.left).color || $s;
      }
  
      function ca(e) {
        return L(e) ? e + "" : 0;
      }
  
      function ua(e, t) {
        return +(t < 0 ? ca((e.actionsWidth || 0).right) || ca(e.actionsWidth) || ca(Ye.actionsWidth.right) || ca(Ye.actionsWidth) : ca((e.actionsWidth || 0).left) || ca(e.actionsWidth) || ca(Ye.actionsWidth.left) || ca(Ye.actionsWidth));
      }
  
      function da(e, t) {
        if (e) {
          var a = ft.scrollTop(),
              n = e.is(".mbsc-lv-item") ? e[0].offsetHeight : 0,
              s = e.offset().top + (H ? a - gt : 0);
          t ? (s < a || s + n > a + vt) && ft.scrollTop(s) : s < a ? ft.scrollTop(s) : s + n > a + vt && ft.scrollTop(Math.min(s, s + n - vt / 2));
        }
      }
  
      function ma(e, t, a, n, s) {
        var i = t.parent(),
            o = t.prev();
        n = n || F, o[0] === ae[0] && (o = ae.prev()), p[0] !== t[0] ? (N("onNavStart", {
          level: wt,
          direction: e,
          list: t[0]
        }), Je.prepend(t.addClass("mbsc-lv-v mbsc-lv-sl-new")), da(d), ha(Je, "mbsc-lv-sl-" + e, function () {
          p.removeClass("mbsc-lv-sl-curr"), t.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr"), h && h.length ? p.removeClass("mbsc-lv-v").insertAfter(h) : f.append(p.removeClass("mbsc-lv-v")), h = o, f = i, p = t, da(a, s), n.call(yt, a), N("onNavEnd", {
            level: wt,
            direction: e,
            list: t[0]
          });
        })) : (da(a, s), n.call(yt, a));
      }
  
      function pa(e, t) {
        _t || (e.hasClass("mbsc-lv-parent") ? (wt++, ma("r", kt[e.attr("data-ref")].child, null, t)) : e.hasClass("mbsc-lv-back") && (wt--, ma("l", kt[e.attr("data-back")].parent, kt[e.attr("data-back")].item, t)));
      }
  
      function ha(e, t, a) {
        var n;
  
        function s() {
          clearTimeout(n), _t--, e.off(Be, s).removeClass(t), a.call(yt, e);
        }
  
        a = a || F, Ye.animation && "mbsc-lv-item-none" !== t ? (_t++, e.on(Be, s).addClass(t), n = setTimeout(s, 250)) : a.call(yt, e);
      }
  
      function fa(e, t) {
        var a,
            n = e.attr("data-ref");
        a = Mt[n] = Mt[n] || [], t && a.push(t), e.attr("data-action") || (t = a.shift()) && (e.attr("data-action", 1), t(function () {
          e.removeAttr("data-action"), a.length ? fa(e) : delete Mt[n];
        }));
      }
  
      function va(e, t, a) {
        var n, s;
        e && e.length && (n = 100 / (e.length + 2), ye.each(e, function (i, o) {
          void 0 === o.key && (o.key = qe++), void 0 === o.percent && (o.percent = t * n * (i + 1), a && ((s = Se({}, o)).key = qe++, s.percent = -n * (i + 1), e.push(s), St[s.key] = s)), St[o.key] = o;
        }));
      }
  
      function ba(e) {
        aa(e) && e.addClass(Us).attr("data-selected", "true").attr("aria-selected", "true");
      }
  
      function ga(e) {
        e.removeClass(Us).removeAttr("data-selected").removeAttr("aria-selected");
      }
  
      Me.call(this, e, t, !0), xt.animate = function (e, t, a) {
        ha(e, "mbsc-lv-item-" + t, a);
      }, xt.add = function (e, t, a, n, s, i) {
        var r,
            l,
            c,
            u,
            m,
            p,
            h = "",
            f = void 0 === s ? Tt : oa(s),
            v = f,
            b = "object" !== (void 0 === t ? "undefined" : o(t)) ? ye("<" + de + ' data-ref="' + Rs++ + '" data-id="' + e + '">' + t + "</" + de + ">") : ye(t),
            g = b[0],
            x = g.style,
            y = b.attr("data-pos") < 0 ? "left" : "right",
            T = b.attr("data-ref");
        n = n || F, T || (T = Rs++, b.attr("data-ref", T)), na(b), i || xt.addUndoAction(function (e) {
          u ? xt.navigate(f, function () {
            v.remove(), f.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove(), m.child = f.children(fe), xt.remove(b, null, e, !0);
          }) : xt.remove(b, null, e, !0);
        }, !0), fa(b, function (e) {
          ea(b.css("top", "").removeClass("mbsc-lv-item-undo")), f.is(me) ? (p = f.attr("data-ref"), f.children(fe).length || (u = !0, f.append("<" + he + "></" + he + ">"))) : p = f.children(".mbsc-lv-back").attr("data-back"), (m = kt[p]) && (m.child.length ? v = m.child : (f.addClass("mbsc-lv-parent").prepend(ee), v = f.children(fe).prepend(Q).addClass("mbsc-lv"), m.child = v, ye(".mbsc-lv-back", f).attr("data-back", p))), kt[T] = {
            item: b,
            child: b.children(fe),
            parent: v,
            ref: p
          }, c = ia(v), l = c.length, void 0 !== a && null !== a || (a = l), i && (h = "mbsc-lv-item-new-" + (i ? y : "")), sa(b.addClass(h)), !1 !== a && (l ? a < l ? b.insertBefore(c.eq(a)) : b.insertAfter(c.eq(l - 1)) : (r = ye(".mbsc-lv-back", v)).length ? b.insertAfter(r) : v.append(b)), d.trigger("mbsc-refresh"), Ye.animateAddRemove && v.hasClass("mbsc-lv-v") ? (x.height = g.offsetHeight + "px", xt.animate(b, i && pt === T ? "none" : "expand", function (t) {
            xt.animate(t, i ? "add-" + y : "pop-in", function (t) {
              x.height = "", n.call(yt, t.removeClass(h)), e();
            });
          })) : (n.call(yt, b.removeClass(h)), e()), N("onItemAdd", {
            target: g
          });
        });
      }, xt.swipe = function (e, t, n, s, i) {
        var o;
        e = oa(e), le = e, y = s, We = !0, a = !0, n = void 0 === n ? 300 : n, T = t > 0 ? 1 : -1, Dt(), Vt(), Bt(e, t, n), clearTimeout(it), clearInterval(st), st = setInterval(function () {
          o = r, r = rt(e) / re * 100, At(o);
        }, 10), it = setTimeout(function () {
          clearInterval(st), o = r, r = t, At(o), Ft(i), y = !1, We = !1, a = !1;
        }, n);
      }, xt.openStage = function (e, t, a, n) {
        St[t] && xt.swipe(e, St[t].percent, a, n);
      }, xt.openActions = function (e, t, a, n) {
        e = oa(e);
        var s = ua(mt[e.attr("data-type") || "defaults"], "left" == t ? -1 : 1);
        xt.swipe(e, "left" == t ? -s : s, a, n);
      }, xt.close = function (e, t) {
        xt.swipe(e, 0, t);
      }, xt.remove = function (e, t, a, n) {
        var s, i, o, r, l, c, u;
        a = a || F, l = (s = oa(e)).attr("data-ref"), s.length && kt[l] && (i = s.parent(), r = ia(i).index(s), u = s[0].style, function e(t) {
          t && (c = c || t.hasClass("mbsc-lv-v"), t.children("[data-ref]").each(function () {
            var t = ye(this).attr("data-ref");
            kt[t] && (e(kt[t].child), delete kt[t]);
          }));
        }(kt[l].child), c && (o = Ye.animation, Ye.animation = !1, xt.navigate(s), Ye.animation = o), delete kt[l], n || (s.attr("data-ref") === pt && (ht = !0), xt.addUndoAction(function (e) {
          xt.add(null, s, r, e, i, !0);
        }, !0)), fa(s, function (e) {
          t = t || (s.attr("data-pos") < 0 ? "left" : "right"), Ye.animateAddRemove && i.hasClass("mbsc-lv-v") ? xt.animate(s.addClass("mbsc-lv-removed"), n ? "pop-out" : "remove-" + t, function (t) {
            u.height = t[0].offsetHeight + "px", xt.animate(t, "collapse", function (t) {
              u.height = "", ea(t.removeClass("mbsc-lv-removed")), !1 !== a.call(yt, t) && t.remove(), e();
            });
          }) : (!1 !== a.call(yt, s) && s.remove(), e()), N("onItemRemove", {
            target: s[0]
          });
        }));
      }, xt.move = function (e, t, a, n, s, i) {
        e = oa(e), i || xt.startActionTrack(), ne.append(ae), xt.remove(e, a, null, i), xt.add(null, e, t, n, s, i), i || xt.endActionTrack();
      }, xt.navigate = function (e, t) {
        var a, n;
        e = oa(e), a = kt[e.attr("data-ref")], n = function (e) {
          for (var t = 0, a = kt[e.attr("data-ref")]; a && a.ref;) {
            t++, a = kt[a.ref];
          }
  
          return t;
        }(e), a && (ma(n >= wt ? "r" : "l", a.parent, e, t, !0), wt = n);
      }, xt.showLoading = function () {
        ie = !0, ve.addClass("mbsc-show-lv-loading"), ft.scrollTop(H ? ft[0].scrollHeight : ye(Ye.context)[0].scrollHeight);
      }, xt.hideLoading = function () {
        ve.removeClass("mbsc-show-lv-loading"), setTimeout(function () {
          ie = !1;
        }, 100);
      }, xt.select = function (e) {
        Te || ga(ye(me, d).filter("." + Us)), ba(oa(e));
      }, xt.deselect = function (e) {
        ga(oa(e));
      }, xt._processSettings = function () {
        Tt.is("[mbsc-enhance]") && (j = !0, Tt.removeAttr("mbsc-enhance"));
      }, xt._init = function () {
        var e,
            t,
            a,
            n = 0,
            s = "",
            i = "",
            o = "";
        he = Ye.listNode, fe = Ye.listSelector, de = Ye.itemNode, me = Ye.itemSelector, Te = "multiple" == Ye.select, $e = "off" != Ye.select, a = xt.remote.listview.sortable, xt.remote.listview.handlePos, z = xt.remote.listview.handleDiv, Q = xt.remote.listview.htmlLeft, ee = xt.remote.listview.htmlRight, e = xt.remote.listview.contClass, xt.sortable = a || !1, d ? (d.attr("class", e), ye(".mbsc-lv-handle-c", d).remove(), ye(me, d).not(".mbsc-lv-back").removeClass("mbsc-lv-item"), ft.off("orientationchange resize", Ht), Oe && ft.off("scroll touchmove", Oe), ft.off("scroll touchmove", Ut)) : (s += '<div class="mbsc-lv-multi-c"></div>', s += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>', Tt.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").removeClass("mbsc-cloak").show(), ne = ye('<div class="mbsc-lv-stage-c">' + s + "</div>"), ae = ye(".mbsc-lv-ic-c", ne), xe = ye(".mbsc-lv-multi-c", ne), te = ye(".mbsc-lv-ic-s", ne), ct = ye(".mbsc-lv-ic-text", ne), Fe = ye("<" + de + ' class="mbsc-lv-item mbsc-lv-ph"></' + de + ">"), P = ye('<div class="mbsc-lv-fill-item"></div>'), d = ye('<div class="' + e + '"><' + he + ' class="mbsc-lv mbsc-lv-dummy"></' + he + '><div class="mbsc-lv-sl-c"></div><div class="mbsc-lv-loading"><span class="mbsc-ic mbsc-ic-' + (Ye.loadingIcon || "loop2") + '"></span></div></div>'), M = ye(".mbsc-lv-dummy", d), ve = ye(".mbsc-lv-loading", d), d.insertAfter(Tt), Ht(), d.on("touchstart mousedown", ".mbsc-lv-item", Ot).on("touchmove", ".mbsc-lv-item", Nt).on("touchend touchcancel", ".mbsc-lv-item", Pt).on("click", ".mbsc-lv-item", Et), yt.addEventListener("click", zt, !0), d.on("touchstart mousedown", ".mbsc-lv-ic-m", function (e) {
          y || (e.stopPropagation(), e.preventDefault()), et = G(e, "X"), tt = G(e, "Y");
        }).on("touchend mouseup", ".mbsc-lv-ic-m", function (e) {
          y || ("touchend" === e.type && B(), zs && !ye(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(G(e, "X") - et) < 10 && Math.abs(G(e, "Y") - tt) < 10 && $t((r < 0 ? dt.rightMenu : dt.leftMenu)[ye(this).index()], c, u));
        }), Je = ye(".mbsc-lv-sl-c", d).append(Tt.addClass("mbsc-lv-sl-curr")).attr("data-ref", Rs++), p = Tt, f = d), H = "body" !== Ye.context, (ft = ye(H ? Ye.context : window)).on("orientationchange resize", Ht), ft.on("scroll touchmove", Ut), qe = 0, (mt = Ye.itemGroups || {}).defaults = {
          swipeleft: Ye.swipeleft,
          swiperight: Ye.swiperight,
          stages: Ye.stages,
          actions: Ye.actions,
          actionsWidth: Ye.actionsWidth,
          actionable: Ye.actionable
        }, sa(Tt), ye.each(mt, function (e, t) {
          if (t.swipe = void 0 !== t.swipe ? t.swipe : Ye.swipe, t.actionable = void 0 !== t.actionable ? t.actionable : Ye.actionable, t.stages = t.stages || [], va(t.stages, 1, !0), va(t.stages.left, 1), va(t.stages.right, -1), (t.stages.left || t.stages.right) && (t.stages = [].concat(t.stages.left || [], t.stages.right || [])), E = !1, t.stages.length || (t.swipeleft && t.stages.push({
            percent: -30,
            action: t.swipeleft
          }), t.swiperight && t.stages.push({
            percent: 30,
            action: t.swiperight
          })), ye.each(t.stages, function (e, t) {
            if (0 === t.percent) return E = !0, !1;
          }), E || t.stages.push({
            percent: 0
          }), t.stages.sort(function (e, t) {
            return e.percent - t.percent;
          }), ye.each(t.stages, function (e, a) {
            if (0 === a.percent) return t.start = e, !1;
          }), E ? t.left = t.right = t.stages[t.start] : (t.left = t.stages[t.start - 1] || {}, t.right = t.stages[t.start + 1] || {}), t.actions) {
            for (t.leftMenu = t.actions.left || t.actions, t.rightMenu = t.actions.right || t.leftMenu, i = "", o = "", n = 0; n < t.leftMenu.length; n++) {
              i += "<div " + (t.leftMenu[n].color ? 'style="background-color: ' + t.leftMenu[n].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.leftMenu[n].icon + '">' + (t.leftMenu[n].text || "") + "</div>";
            }
  
            for (n = 0; n < t.rightMenu.length; ++n) {
              o += "<div " + (t.rightMenu[n].color ? 'style="background-color: ' + t.rightMenu[n].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.rightMenu[n].icon + '">' + (t.rightMenu[n].text || "") + "</div>";
            }
  
            t.actions.left && (t.swipe = t.actions.right ? t.swipe : "right"), t.actions.right && (t.swipe = t.actions.left ? t.swipe : "left"), t.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + i + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + o + "</div>";
          }
        }), Ye.fixedHeader && (t = "mbsc-lv-fixed-header" + (H ? " mbsc-lv-fixed-header-ctx mbsc-lv-" + Ye.theme + " mbsc-" + Ye.theme + (Ye.baseTheme ? " mbsc-lv-" + Ye.baseTheme + " mbsc-" + Ye.baseTheme : "") : ""), I ? (I.attr("class", t), Yt()) : I = ye('<div class="' + t + '"></div>'), H ? ft.before(I) : d.prepend(I), Oe = Y(Yt, 200), ft.on("scroll touchmove", Oe)), Ye.hover && (J || d.on("mouseover.mbsc-lv", ".mbsc-lv-item", function () {
          $ && $[0] == this || (Lt(), $ = ye(this), mt[$.attr("data-type") || "defaults"].actions && (K = setTimeout(function () {
            Ee ? $ = null : (W = !0, xt.openActions($, U, J, !1));
          }, q)));
        }).on("mouseleave.mbsc-lv", Lt), J = Ye.hover.time || 200, q = Ye.hover.timeout || 200, U = Ye.hover.direction || Ye.hover || "right"), j && d.attr("mbsc-enhance", ""), d.trigger("mbsc-enhance", [{
          theme: Ye.theme,
          lang: Ye.lang
        }]);
      }, xt._destroy = function () {
        var e;
        f.append(p), H && I && I.remove(), j && (Tt.attr("mbsc-enhance", ""), (e = _e[d[0].id]) && e.destroy()), yt.removeEventListener("click", zt, !0), d.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img"), d.find(fe).removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find(me).removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref"), ye(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", d).remove(), Tt.insertAfter(d), d.remove(), ne.remove(), ft.off("orientationchange resize", Ht), ft.off("scroll touchmove", Ut), Oe && ft.off("scroll touchmove", Oe);
      };
      var xa,
          ya = [],
          Ta = [],
          _a = [],
          wa = 0;
      xt.startActionTrack = function () {
        wa || (_a = []), wa++;
      }, xt.endActionTrack = function () {
        --wa || Ta.push(_a);
      }, xt.addUndoAction = function (e, t) {
        var a = {
          action: e,
          async: t
        };
        wa ? _a.push(a) : (Ta.push([a]), Ta.length > Ye.undoLimit && Ta.shift());
      }, xt.undo = function () {
        var e, t, a;
  
        function n() {
          t < 0 ? (xa = !1, s()) : (e = a[t], t--, e.async ? e.action(n) : (e.action(), n()));
        }
  
        function s() {
          (a = ya.shift()) && (xa = !0, t = a.length - 1, n());
        }
  
        Ta.length && ya.push(Ta.pop()), xa || s();
      }, Ye = xt.settings, N = xt.trigger, xt.init();
    };
  
    Ws.prototype = {
      _class: "listview",
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _defaults: {
        context: "body",
        actionsWidth: 90,
        sortDelay: 250,
        undoLimit: 10,
        tap: Xe,
        swipe: !0,
        quickSwipe: !0,
        animateAddRemove: !0,
        animateIcons: !0,
        animation: !0,
        revert: !0,
        vibrate: !0,
        actionable: !0,
        handleClass: "",
        handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
        listNode: "ul",
        listSelector: "ul,ol",
        itemNode: "li",
        itemSelector: "li",
        leftArrowClass: "mbsc-ic-arrow-left4",
        rightArrowClass: "mbsc-ic-arrow-right4",
        backText: "Back",
        undoText: "Undo",
        stages: [],
        select: "off"
      }
    }, we.ListView = Ws, n.themes.listview.mobiscroll = {
      leftArrowClass: "mbsc-ic-arrow-left5",
      rightArrowClass: "mbsc-ic-arrow-right5"
    };
  
    var Js,
        qs,
        Bs = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Ks = function (a) {
      function n(e) {
        r(this, n);
        var a = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return a.componentWillLeave = function (e) {
          var n = ye(t.findDOMNode(a));
          a.props.instanceReady ? a.props.instance.remove(n, void 0, function () {
            return n.parent().find(".mbsc-lv-stage-c").remove(), e(), !1;
          }) : e();
        }, a.componentWillEnter = function (e) {
          if (a.props.instanceReady) {
            var n = ye(t.findDOMNode(a)),
                s = a.props.parentItem ? ye(t.findDOMNode(a.props.parentItem)) : void 0;
  
            if (s) {
              var i = n.parent();
              i.prepend(i.children(".mbsc-lv-back"));
            }
  
            a.props.instance.add(null, n, n.index(), void 0, s);
          }
  
          e();
        }, a.childrenMounted = a.childrenMounted.bind(a), a;
      }
  
      return u(n, a), l(n, [{
        key: "shouldComponentUpdate",
        value: function value(e) {
          return !qe(this.props, e);
        }
      }, {
        key: "childrenMounted",
        value: function value(e) {
          var a, n;
          if (this.props.instanceReady) if (e) {
            var s = ye(t.findDOMNode(this));
            n = this.props.instance, a = ye(t.findDOMNode(e)).children("li"), s && s.hasClass("mbsc-lv-item") && a.each(function () {
              var e = ye(this);
              n.add(null, e, e.index(), void 0, s);
            });
          } else {
            var i = ye(t.findDOMNode(this)).children("ul");
            n = this.props.instance, (a = i.children("li").not(".mbsc-lv-back")).each(function () {
              var e = ye(this);
              n.remove(e, void 0, function () {
                e.parent().find(".mbsc-lv-stage-c").remove();
              });
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var t = Se({}, {
            item: this.props.item
          }, this.props.itemProps),
              a = null;
          return this.props.item.children && (a = void 0 !== e.addons && void 0 !== e.addons.TransitionGroup ? e.createElement(e.addons.TransitionGroup, {
            component: "ul",
            ref: this.childrenMounted
          }, this.props.item.children.map(function (t) {
            return e.createElement(n, {
              key: t[this.props.dataKeyField],
              item: t,
              instance: this.props.instance,
              instanceReady: this.props.instanceReady,
              itemType: this.props.itemType,
              itemProps: this.props.itemProps,
              dataKeyField: this.props.dataKeyField,
              mounter: this.props.mounter,
              parentItem: this,
              ref: this.props.mounter(t, this)
            });
          }, this)) : e.createElement("ul", null, this.props.item.children.map(function (t) {
            return e.createElement(n, {
              key: t[this.props.dataKeyField],
              item: t,
              instance: this.props.instance,
              instanceReady: this.props.instanceReady,
              itemType: this.props.itemType,
              itemProps: this.props.itemProps,
              dataKeyField: this.props.dataKeyField,
              mounter: this.props.mounter,
              parentItem: this,
              ref: this.props.mounter(t, this)
            });
          }, this))), e.createElement(this.props.itemType, t, a);
        }
      }]), n;
    }(e.Component),
        Gs = a.object,
        Xs = a.array,
        Zs = a.number,
        Qs = a.bool,
        ei = a.string,
        ti = a.func,
        ai = (qs = Js = function (a) {
      function n(e) {
        r(this, n);
        var t = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return t.mountFunctions = {}, t.state = {
          instanceReady: !1
        }, t.listMounted = t.listMounted.bind(t), t.listItemMounted = t.listItemMounted.bind(t), t.getMountFunction = t.getMountFunction.bind(t), t;
      }
  
      return u(n, tt), l(n, [{
        key: "listMounted",
        value: function value(e) {
          this.wrapperList = t.findDOMNode(e);
        }
      }, {
        key: "listItemMounted",
        value: function value(a, n, s) {
          if (!e.addons || !e.addons.TransitionGroup) if (s) {
            if (void 0 !== this.instance) {
              var i = ye(t.findDOMNode(s)),
                  o = n ? ye(t.findDOMNode(n)) : void 0;
              (void 0 === o || o.hasClass("mbsc-lv-item")) && this.instance.add(null, i, i.index(), void 0, o);
            }
          } else ye(this.wrapperList).find(".mbsc-lv-stage-c").remove();
        }
      }, {
        key: "getMountFunction",
        value: function value(e, t) {
          return void 0 === this.mountFunctions[e[this.props.dataKeyField]] && (this.mountFunctions[e[this.props.dataKeyField]] = this.listItemMounted.bind(this, e, t)), this.mountFunctions[e[this.props.dataKeyField]];
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new Ws(this.wrapperList, e), this.setState({
            instanceReady: !0
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t,
              a = this.props.data.map(function (t) {
            return e.createElement(Ks, {
              instance: this.instance,
              instanceReady: this.state.instanceReady,
              itemType: this.props.itemType,
              itemProps: this.props.itemProps,
              key: t[this.props.dataKeyField],
              dataKeyField: this.props.dataKeyField,
              ref: this.getMountFunction(t),
              mounter: this.getMountFunction,
              item: t
            });
          }, this);
          return t = void 0 !== e.addons && void 0 !== e.addons.TransitionGroup ? e.createElement(e.addons.TransitionGroup, {
            component: "ul",
            className: "mbsc-cloak",
            ref: this.listMounted
          }, a) : e.createElement("ul", {
            className: "mbsc-cloak",
            ref: this.listMounted
          }, a), e.createElement("div", {
            className: this.initialCssClass
          }, t);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e, t) {
          var a = this.getSettingsFromProps(this.props),
              n = !qe(this.getSettingsFromProps(e), a),
              s = !qe(e.data, this.props.data),
              i = this.state.instanceReady !== t.instanceReady;
          return this.optimizeUpdate = {
            updateOptions: n,
            updateValue: !1,
            updateData: s
          }, n || s || i;
        }
      }]), n;
    }(), Js.propTypes = Bs({}, Ue, {
      dataKeyField: a.string,
      itemType: a.func.isRequired,
      itemProps: Gs,
      data: a.array.isRequired,
      actions: a.oneOfType([Gs, Xs]),
      actionsWidth: Zs,
      striped: Qs,
      animateAddRemove: Qs,
      actionable: Qs,
      animateIcons: Qs,
      display: a.oneOf(["inline"]),
      enhance: Qs,
      fillAnimation: Qs,
      fixedHeader: Qs,
      hover: a.oneOfType([a.shape({
        time: Zs,
        timeout: Zs,
        direction: a.oneOf(["left", "right"])
      }), a.oneOf(["left", "right"])]),
      iconSlide: Qs,
      itemGroups: Gs,
      loadingIcon: ei,
      navigateOnDrop: Qs,
      quickSwipe: Qs,
      sortable: a.oneOfType([Qs, Gs]),
      select: a.oneOf(["off", "single", "multiple"]),
      sortDelay: Zs,
      stages: a.oneOfType([Xs, Gs]),
      swipe: a.oneOfType([ti, Qs, a.oneOf(["left", "right"])]),
      swipeLeft: ti,
      swipeRight: ti,
      vibrate: Qs,
      undoText: ei,
      backText: ei,
      onItemTap: ti,
      onItemAdd: ti,
      onItemRemove: ti,
      onListEnd: ti,
      onNavEnd: ti,
      onNavStart: ti,
      onSlideEnd: ti,
      onSlideStart: ti,
      onSort: ti,
      onSortChange: ti,
      onSortStart: ti,
      onSortEnd: ti,
      onSortUpdate: ti,
      onStageChange: ti
    }), Js.defaultProps = {
      dataKeyField: "id"
    }, qs);
  
    n.Listview = ai;
    var ni = {
      batch: 50,
      min: 0,
      max: 100,
      defaultUnit: "",
      units: null,
      unitNames: null,
      invalid: [],
      sign: !1,
      step: .05,
      scale: 2,
      convert: function convert(e) {
        return e;
      },
      signText: "&nbsp;",
      wholeText: "Whole",
      fractionText: "Fraction",
      unitText: "Unit"
    };
  
    Pt.measurement = function (e) {
      var t,
          a,
          n,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f = Se({}, e.settings),
          v = Se(e.settings, ni, f),
          b = {},
          g = [[]],
          x = {},
          y = {},
          T = {},
          _ = [],
          w = v.sign,
          C = v.units && v.units.length,
          S = C ? v.defaultUnit || v.units[0] : "",
          M = [],
          k = v.step < 1,
          D = v.step > 1 ? v.step : 1,
          O = k ? Math.max(v.scale, (v.step + "").split(".")[1].length) : 1,
          N = Math.pow(10, O),
          P = Math.round(k ? v.step * N : v.step),
          E = 0,
          V = 0,
          A = 0;
  
      function F(e) {
        return Math.max(c, Math.min(u, k ? e < 0 ? Math.ceil(e) : Math.floor(e) : H(Math.round(e - E), P) + E));
      }
  
      function I(e) {
        return k ? H((Math.abs(e) - Math.abs(F(e))) * N - V, P) + V : 0;
      }
  
      function j(e) {
        var t = F(e),
            a = I(e);
        return a >= N && (e < 0 ? t-- : t++, a = 0), [e < 0 ? "-" : "+", t, a];
      }
  
      function L(e) {
        var t = +e[i],
            a = k ? e[s] / N * (t < 0 ? -1 : 1) : 0;
        return (w && "-" == e[0] ? -1 : 1) * (t + a);
      }
  
      function H(e, t) {
        return Math.round(e / t) * t;
      }
  
      function Y(e, t, a) {
        return t !== a && v.convert ? v.convert.call(this, e, t, a) : e;
      }
  
      function R(e) {
        var t, a;
        r = Y(v.min, S, e), l = Y(v.max, S, e), k ? (c = r < 0 ? Math.ceil(r) : Math.floor(r), u = l < 0 ? Math.ceil(l) : Math.floor(l), d = I(r), m = I(l)) : (c = Math.round(r), u = Math.round(l), u = c + Math.floor((u - c) / P) * P, E = c % P), t = c, a = u, w && (a = Math.abs(t) > Math.abs(a) ? Math.abs(t) : Math.abs(a), t = t < 0 ? 0 : t), y.min = t < 0 ? Math.ceil(t / D) : Math.floor(t / D), y.max = a < 0 ? Math.ceil(a / D) : Math.floor(a / D);
      }
  
      function $(e) {
        return L(e).toFixed(k ? O : 0) + (C ? " " + M[e[o]] : "");
      }
  
      if (e.setVal = function (t, a, n, s, i) {
        e._setVal(ye.isArray(t) ? $(t) : t, a, n, s, i);
      }, v.units) for (h = 0; h < v.units.length; ++h) {
        p = v.units[h], M.push(v.unitNames && v.unitNames[p] || p);
      }
      if (w) if (w = !1, C) for (h = 0; h < v.units.length; h++) {
        Y(v.min, S, v.units[h]) < 0 && (w = !0);
      } else w = v.min < 0;
  
      if (w && (g[0].push({
        data: ["-", "+"],
        label: v.signText
      }), A++), y = {
        label: v.wholeText,
        data: function data(e) {
          return c % D + e * D;
        },
        getIndex: function getIndex(e) {
          return Math.round((e - c % D) / D);
        }
      }, g[0].push(y), i = A++, R(S), k) {
        for (g[0].push(T), T.data = [], T.label = v.fractionText, h = V; h < N; h += P) {
          _.push(h), T.data.push({
            value: h,
            display: "." + U(h, O)
          });
        }
  
        s = A++, t = Math.ceil(100 / P), v.invalid && v.invalid.length && (ye.each(v.invalid, function (e, t) {
          var a = t > 0 ? Math.floor(t) : Math.ceil(t);
          0 === a && (a = t <= 0 ? -.001 : .001), x[a] = (x[a] || 0) + 1, 0 === t && (x[a = .001] = (x[a] || 0) + 1);
        }), ye.each(x, function (e, a) {
          a < t ? delete x[e] : x[e] = e;
        }));
      }
  
      if (C) {
        for (b = {
          data: [],
          label: v.unitText,
          cssClass: "mbsc-msr-whl-unit",
          circular: !1
        }, h = 0; h < v.units.length; h++) {
          b.data.push({
            value: h,
            display: M[h]
          });
        }
  
        g[0].push(b);
      }
  
      return o = A, {
        wheels: g,
        minWidth: w && k ? 70 : 80,
        showLabel: !1,
        formatValue: $,
        compClass: "mbsc-msr mbsc-sc",
        parseValue: function parseValue(e) {
          var t,
              d = ((("number" == typeof e ? e + "" : e) || v.defaultValue) + "").split(" "),
              m = +d[0],
              p = [],
              h = "";
          return C && (h = -1 == (h = -1 == (h = ye.inArray(d[1], M)) ? ye.inArray(S, v.units) : h) ? 0 : h), R(n = C ? v.units[h] : ""), (t = j(m = z(m = isNaN(m) ? 0 : m, r, l)))[1] = z(t[1], c, u), a = m, w && (p[0] = t[0], t[1] = Math.abs(t[1])), p[i] = t[1], k && (p[s] = t[2]), C && (p[o] = h), p;
        },
        onCancel: function onCancel() {
          a = void 0;
        },
        validate: function validate(t) {
          var p,
              h,
              f,
              b,
              g,
              T = t.values,
              M = t.index,
              O = t.direction,
              N = {},
              E = [],
              V = {},
              F = C ? v.units[T[o]] : "";
          if (w && 0 === M && (a = Math.abs(a) * ("-" == T[0] ? -1 : 1)), (M === i || M === s && k || void 0 === a || void 0 === M) && (a = L(T), n = F), (C && M === o && n !== F || void 0 === M) && (R(F), a = Y(a, n, F), n = F, h = j(a), void 0 !== M && (V[i] = y, e.changeWheel(V)), w && (T[0] = h[0])), E[i] = [], w) for (E[0] = [], r > 0 && (E[0].push("-"), T[0] = "+"), l < 0 && (E[0].push("+"), T[0] = "-"), g = Math.abs("-" == T[0] ? c : u), A = g + D; A < g + 20 * D; A += D) {
            E[i].push(A), N[A] = !0;
          }
  
          if (a = z(a, r, l), h = j(a), f = w ? Math.abs(h[1]) : h[1], p = w ? "-" == T[0] : a < 0, T[i] = f, p && (h[0] = "-"), k && (T[s] = h[2]), ye.each(k ? x : v.invalid, function (e, t) {
            if (w && p) {
              if (!(t <= 0)) return;
              t = Math.abs(t);
            }
  
            t = H(Y(t, S, F), k ? 1 : P), N[t] = !0, E[i].push(t);
          }), T[i] = e.getValidValue(i, f, O, N), h[1] = T[i] * (w && p ? -1 : 1), k) {
            E[s] = [];
            var I = w ? T[0] + T[1] : (a < 0 ? "-" : "+") + Math.abs(h[1]),
                U = (r < 0 ? "-" : "+") + Math.abs(c),
                $ = (l < 0 ? "-" : "+") + Math.abs(u);
            I === U && ye(_).each(function (e, t) {
              (p ? t > d : t < d) && E[s].push(t);
            }), I === $ && ye(_).each(function (e, t) {
              (p ? t < m : t > m) && E[s].push(t);
            }), ye.each(v.invalid, function (e, t) {
              b = j(Y(t, S, F)), (h[0] === b[0] || 0 === h[1] && 0 === b[1] && 0 === b[2]) && h[1] === b[1] && E[s].push(b[2]);
            });
          }
  
          return {
            disabled: E,
            valid: T
          };
        }
      };
    };
  
    var si = {
      min: 0,
      max: 100,
      defaultUnit: "km",
      units: ["m", "km", "in", "ft", "yd", "mi"]
    },
        ii = {
      mm: .001,
      cm: .01,
      dm: .1,
      m: 1,
      dam: 10,
      hm: 100,
      km: 1e3,
      in: .0254,
      ft: .3048,
      yd: .9144,
      ch: 20.1168,
      fur: 201.168,
      mi: 1609.344,
      lea: 4828.032
    };
  
    Pt.distance = function (e) {
      var t = Se({}, si, e.settings);
      return Se(e.settings, t, {
        sign: !1,
        convert: function convert(e, t, a) {
          return e * ii[t] / ii[a];
        }
      }), Pt.measurement.call(this, e);
    };
  
    var oi = {
      min: 0,
      max: 100,
      defaultUnit: "N",
      units: ["N", "kp", "lbf", "pdl"]
    },
        ri = {
      N: 1,
      kp: 9.80665,
      lbf: 4.448222,
      pdl: .138255
    };
  
    Pt.force = function (e) {
      var t = Se({}, oi, e.settings);
      return Se(e.settings, t, {
        sign: !1,
        convert: function convert(e, t, a) {
          return e * ri[t] / ri[a];
        }
      }), Pt.measurement.call(this, e);
    };
  
    var li = {
      min: 0,
      max: 1e3,
      defaultUnit: "kg",
      units: ["g", "kg", "oz", "lb"],
      unitNames: {
        tlong: "t (long)",
        tshort: "t (short)"
      }
    },
        ci = {
      mg: .001,
      cg: .01,
      dg: .1,
      g: 1,
      dag: 10,
      hg: 100,
      kg: 1e3,
      t: 1e6,
      drc: 1.7718452,
      oz: 28.3495,
      lb: 453.59237,
      st: 6350.29318,
      qtr: 12700.58636,
      cwt: 50802.34544,
      tlong: 1016046.9088,
      tshort: 907184.74
    };
  
    Pt.mass = function (e) {
      var t = Se({}, li, e.settings);
      return Se(e.settings, t, {
        sign: !1,
        convert: function convert(e, t, a) {
          return e * ci[t] / ci[a];
        }
      }), Pt.measurement.call(this, e);
    };
  
    var ui = {
      min: 0,
      max: 100,
      defaultUnit: "kph",
      units: ["kph", "mph", "mps", "fps", "knot"],
      unitNames: {
        kph: "km/h",
        mph: "mi/h",
        mps: "m/s",
        fps: "ft/s",
        knot: "knot"
      }
    },
        di = {
      kph: 1,
      mph: 1.60934,
      mps: 3.6,
      fps: 1.09728,
      knot: 1.852
    };
  
    Pt.speed = function (e) {
      var t = Se({}, ui, e.settings);
      return Se(e.settings, t, {
        sign: !1,
        convert: function convert(e, t, a) {
          return e * di[t] / di[a];
        }
      }), Pt.measurement.call(this, e);
    };
  
    var mi = {
      min: -20,
      max: 40,
      defaultUnit: "c",
      units: ["c", "k", "f", "r"],
      unitNames: {
        c: "°C",
        k: "K",
        f: "°F",
        r: "°R"
      }
    },
        pi = {
      c2k: function c2k(e) {
        return e + 273.15;
      },
      c2f: function c2f(e) {
        return 9 * e / 5 + 32;
      },
      c2r: function c2r(e) {
        return 9 * (e + 273.15) / 5;
      },
      k2c: function k2c(e) {
        return e - 273.15;
      },
      k2f: function k2f(e) {
        return 9 * e / 5 - 459.67;
      },
      k2r: function k2r(e) {
        return 9 * e / 5;
      },
      f2c: function f2c(e) {
        return 5 * (e - 32) / 9;
      },
      f2k: function f2k(e) {
        return 5 * (e + 459.67) / 9;
      },
      f2r: function f2r(e) {
        return e + 459.67;
      },
      r2c: function r2c(e) {
        return 5 * (e - 491.67) / 9;
      },
      r2k: function r2k(e) {
        return 5 * e / 9;
      },
      r2f: function r2f(e) {
        return e - 459.67;
      }
    };
  
    Pt.temperature = function (e) {
      var t = Se({}, mi, e.settings);
      return Se(e.settings, t, {
        sign: !0,
        convert: function convert(e, t, a) {
          return pi[t + "2" + a](e);
        }
      }), Pt.measurement.call(this, e);
    };
  
    var hi = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        fi = a.number,
        vi = a.bool,
        bi = a.string,
        gi = a.object,
        xi = {
      max: fi,
      min: fi,
      convert: a.func,
      defaultValue: bi,
      invalid: a.array,
      scale: fi,
      step: fi,
      wholeText: bi,
      fractionText: bi,
      signText: bi
    },
        yi = {
      convert: vi,
      defaultUnit: bi,
      unitNames: gi,
      units: a.arrayOf(bi)
    },
        Ti = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "measurement"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Ti.propTypes = hi({}, Ti.propTypes, Re, xi), n.Measurement = Ti;
  
    var _i = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "temperature"
        }, a;
      }
  
      return u(t, Ti), t;
    }();
  
    _i.propTypes = hi({}, _i.propTypes, yi), n.Temperature = _i;
  
    var wi = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "mass"
        }, a;
      }
  
      return u(t, _i), t;
    }();
  
    n.Mass = wi;
  
    var Ci = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "force"
        }, a;
      }
  
      return u(t, _i), t;
    }();
  
    n.Force = Ci;
  
    var Si = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "speed"
        }, a;
      }
  
      return u(t, _i), t;
    }();
  
    n.Speed = Si;
  
    var Mi = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "distance"
        }, a;
      }
  
      return u(t, _i), t;
    }();
  
    n.Distance = Mi;
    /* eslint-disable no-unused-vars */
  
    var ki = 1,
        Di = function Di(e, t, a) {
      var s,
          i,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T = {},
          _ = 1e3,
          w = this,
          C = ye(e);
  
      function S(e) {
        clearTimeout(p), p = setTimeout(function () {
          D(!e || "load" !== e.type);
        }, 200);
      }
  
      function M(t, a) {
        if (t.length) {
          if (a = w._onItemTap(t, a), s = t, t.parent()[0] == e) {
            var n = t.offset().left,
                o = t[0].offsetLeft,
                r = t[0].offsetWidth,
                l = i.offset().left;
            h && (o = g - o - r), "a" == b.variant ? n < l ? f.scroll(h ? o + r - c : -o, _, !0) : n + r > l + c && f.scroll(h ? o : c - o - r, _, !0) : f.scroll((c / 2 - o - r / 2) * (h ? -1 : 1), _, !0);
          }
  
          a && y("onItemTap", {
            target: t[0]
          });
        }
      }
  
      function k() {
        var e;
        w._initMarkup(i), C.find(".mbsc-ripple").remove(), w._$items = C.children(), w._$items.each(function (t) {
          var a,
              i = ye(this),
              o = i.attr("data-ref");
          o || (o = ki++), 0 === t && (e = i), s || (s = w._getActiveItem(i)), a = "mbsc-scv-item mbsc-btn-e " + ((w._getItemProps(i) || {}).cssClass || ""), i.attr("data-ref", o).removeClass(T[o]).addClass(a), T[o] = a, i.append(w._getText(n, .2));
        }), s || (s = e), w._markupReady(i);
      }
  
      function D(t, a) {
        var n = b.itemWidth,
            s = b.layout;
        if (w.contWidth = c = i.width(), w._checkResp()) return !1;
        t && m === c || !c || (m = c, L(s) && (u = c ? c / s : n) < n && (s = "liquid"), n && ("liquid" == s ? u = c ? c / Math.min(Math.floor(c / n), w._$items.length) : n : "fixed" == s && (u = n)), w._size(c, u), u && C.children().css("width", u + "px"), w.totalWidth = g = e.offsetWidth, Se(f.settings, {
          contSize: c,
          maxSnapScroll: !!b.paging && 1,
          maxScroll: 0,
          minScroll: g > c ? c - g : 0,
          snap: b.paging ? c : !!v && (u || ".mbsc-scv-item"),
          elastic: g > c && (u || c)
        }), f.refresh(a));
      }
  
      Me.call(this, e, t, !0), w.navigate = function (e, t) {
        M(w._getItem(e), t);
      }, w.next = function (e) {
        if (s) {
          var t = s.next();
          t.length && M(s = t, e);
        }
      }, w.prev = function (e) {
        if (s) {
          var t = s.prev();
          t.length && M(s = t, e);
        }
      }, w.refresh = w.position = function (e) {
        k(), D(!1, e);
      }, w._init = function () {
        var e;
        r = ye(b.context), l = ye("body" == b.context ? window : b.context), w.__init(), h = w.remote.menustrip.rtlSetting, v = w.remote.menustrip.snapSetting, e = w.remote.menustrip.contClass + (w._getContClass() || ""), i ? (i.attr("class", e), C.off(".mbsc-ripple")) : ((i = ye('<div class="' + e + '"><div class="mbsc-scv-sc"></div></div>').insertAfter(C)).find(".mbsc-scv-sc").append(C), i.find("img").on("load", S), l.on("orientationchange resize", S), d = bt(i[0], S, b.zone), f = new Nt(i[0], {
          axis: "X",
          contSize: 0,
          maxScroll: 0,
          maxSnapScroll: 1,
          minScroll: 0,
          snap: 1,
          elastic: 1,
          rtl: h,
          mousewheel: b.mousewheel,
          thresholdX: b.threshold,
          stopProp: b.stopProp,
          onStart: function onStart(e) {
            x || "touchstart" != e.domEvent.type || (x = !0, r.find(".mbsc-no-touch").removeClass("mbsc-no-touch"));
          },
          onBtnTap: function onBtnTap(e) {
            "touchend" === e.domEvent.type && K(e.domEvent, e.domEvent.target), M(ye(e.target), !0);
          },
          onGestureStart: function onGestureStart(e) {
            y("onGestureStart", e);
          },
          onGestureEnd: function onGestureEnd(e) {
            y("onGestureEnd", e);
          },
          onMove: function onMove(e) {
            y("onMove", e);
          },
          onAnimationStart: function onAnimationStart(e) {
            y("onAnimationStart", e);
          },
          onAnimationEnd: function onAnimationEnd(e) {
            y("onAnimationEnd", e);
          }
        })), C.css("display", "").addClass("mbsc-scv").removeClass("mbsc-cloak"), k(), y("onMarkupReady", {
          target: i[0]
        }), D();
      }, w._size = F, w._initMarkup = F, w._markupReady = F, w._getContClass = F, w._getItemProps = F, w._getActiveItem = F, w.__init = F, w.__destroy = F, w._destroy = function () {
        w.__destroy(), l.off("orientationchange resize", S), C.removeClass("mbsc-scv").insertAfter(i).find(".mbsc-scv-item").each(function () {
          var e = ye(this);
          e.width("").removeClass(T[e.attr("data-ref")]);
        }), i.remove(), f.destroy(), d.detach();
      }, w._getItem = function (e) {
        return "object" !== (void 0 === e ? "undefined" : o(e)) && (e = w._$items.filter('[data-id="' + e + '"]')), ye(e);
      }, w._onItemTap = function (e, t) {
        return void 0 === t || t;
      }, b = w.settings, y = w.trigger, a || w.init();
    };
  
    Di.prototype = {
      _class: "scrollview",
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _responsive: !0,
      _defaults: {
        tap: !0,
        stopProp: !1,
        context: "body",
        layout: "liquid"
      }
    }, we.ScrollView = Di;
  
    var Oi = function Oi(e, t, a) {
      var n,
          s,
          i,
          o,
          r,
          l,
          c = ye(e),
          u = this;
  
      function d() {
        s && "inline" != s && n.find(".mbsc-page").css("padding-" + s, "");
      }
  
      function m(e) {
        e.addClass(r).attr("data-selected", "true").attr("aria-selected", "true");
      }
  
      function p(e) {
        e.removeClass(r).removeAttr("data-selected").removeAttr("aria-selected");
      }
  
      Di.call(this, e, t, !0), u.select = function (e) {
        i || p(u._$items.filter(".mbsc-ms-item-sel")), m(u._getItem(e));
      }, u.deselect = function (e) {
        p(u._getItem(e));
      }, u.enable = function (e) {
        u._getItem(e).removeClass("mbsc-disabled").removeAttr("data-disabled").removeAttr("aria-disabled");
      }, u.disable = function (e) {
        u._getItem(e).addClass("mbsc-disabled").attr("data-disabled", "true").attr("aria-disabled", "true");
      }, u.setBadge = function (e, t) {
        var a;
        e = u._getItem(e).attr("data-badge", t), (a = ye(".mbsc-ms-badge", e)).length ? t ? a.html(t) : a.remove() : t && e.append('<span class="mbsc-ms-badge">' + t + "</span>");
      }, u._markupReady = function (e) {
        u._hasIcons ? e.addClass("mbsc-ms-icons") : e.removeClass("mbsc-ms-icons"), u._hasText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"), u.__markupReady(e);
      }, u._size = function (t, a) {
        u.__size(t, a), "inline" != s && n.find(".mbsc-page").css("padding-" + s, e.offsetHeight + "px");
      }, u._onItemTap = function (e, t) {
        return !1 !== u.__onItemTap(e, t) && (void 0 === t && (t = !i), o && t && !e.hasClass("mbsc-disabled") && (i ? "true" == e.attr("data-selected") ? p(e) : m(e) : (p(u._$items.filter(".mbsc-ms-item-sel")), m(e))), t);
      }, u._getActiveItem = function (e) {
        var t = "true" == e.attr("data-selected");
        if (o && !i && t) return e;
      }, u._getItemProps = function (e) {
        var t = "true" == e.attr("data-selected"),
            a = "true" == e.attr("data-disabled"),
            n = e.attr("data-icon"),
            s = e.attr("data-badge");
        return e.attr("data-role", "button").attr("aria-selected", t ? "true" : "false").attr("aria-disabled", a ? "true" : "false").find(".mbsc-ms-badge").remove(), s && e.append('<span class="mbsc-ms-badge">' + s + "</span>"), n && (u._hasIcons = !0), e.text() && (u._hasText = !0), {
          cssClass: "mbsc-ms-item " + (l.itemClass || "") + " " + (t ? r : "") + (a ? " mbsc-disabled " + (l.disabledClass || "") : "") + (n ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + n : "")
        };
      }, u._getContClass = function () {
        return " mbsc-ms-c mbsc-ms-" + l.variant + " mbsc-ms-" + s + (o ? "" : " mbsc-ms-nosel") + (u.__getContClass() || "");
      }, u.__init = function () {
        u.___init(), n = ye(l.context), d(), s = l.display, i = "multiple" == l.select, o = "off" != l.select, r = " mbsc-ms-item-sel " + (l.activeClass || ""), c.addClass("mbsc-ms mbsc-ms-base " + (l.groupClass || ""));
      }, u.__destroy = function () {
        c.removeClass("mbsc-ms mbsc-ms-base " + (l.groupClass || "")), d(), u.___destroy();
      }, u.__onItemTap = F, u.__getContClass = F, u.__markupReady = F, u.__size = F, u.___init = F, u.___destroy = F, l = u.settings, a || u.init();
    };
  
    Oi.prototype = {
      _defaults: Se({}, Di.prototype._defaults)
    };
  
    var Ni = function Ni(e, t) {
      Oi.call(this, e, t, !0), this.___init = function () {}, this.init();
    };
  
    Ni.prototype = {
      _class: "optionlist",
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _responsive: !0,
      _defaults: Se({}, Oi.prototype._defaults, {
        select: "multiple",
        variant: "a",
        display: "inline"
      })
    }, we.Optionlist = Ni, n.themes.optionlist = n.themes.navigation;
  
    var Pi,
        Ei,
        Vi,
        Ai,
        Fi = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Ii = a.func,
        ji = function (e) {
      function t(e) {
        return r(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }
  
      return u(t, tt), l(t, [{
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = this.getSettingsFromProps(e),
              a = this.getSettingsFromProps(this.props);
          return this.optimizeUpdate = {
            updateOptions: !qe(a, t),
            updateChildren: !qe(this.props.children, e.children)
          }, !0;
        }
      }]), t;
    }();
  
    ji.propTypes = Fi({}, Ue, {
      itemWidth: a.number,
      layout: a.oneOf(["liquid", "fixed"]),
      mousewheel: a.bool,
      snap: a.bool,
      threshold: a.number,
      paging: a.bool,
      onItemTap: Ii,
      onMarkupReady: Ii,
      onAnimationStart: Ii,
      onAnimationEnd: Ii,
      onMove: Ii,
      onGestureStart: Ii,
      onGestureEnd: Ii
    });
  
    var Li = (Ei = Pi = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.childComponents = [], t.renderChildren = t.renderChildren.bind(t), t;
      }
  
      return u(a, ji), l(a, [{
        key: "renderChildren",
        value: function value() {
          var t = this;
          return this.context.router && n.Route ? e.Children.map(this.props.children, function (a) {
            if (!a) return a;
            var s = a.props,
                i = s.replace,
                r = s.to,
                l = s.exact,
                c = s.strict,
                u = s.location,
                d = s.isActive,
                m = s.sensitive,
                p = "object" === (void 0 === r ? "undefined" : o(r)) ? r.pathname : r,
                h = p && p.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
            return e.createElement(n.Route, {
              path: h,
              exact: l,
              strict: c,
              location: u,
              sensitive: m
            }, function (n) {
              var s = n.location,
                  o = n.match,
                  r = !!(d ? d(o, s) : o);
              return e.cloneElement(a, {
                replace: void 0 !== i ? i : t.props.replace,
                ref: function ref(e) {
                  t.childComponents.push(e);
                },
                selected: r
              });
            });
          }) : e.Children.map(this.props.children, function (a) {
            return a ? e.cloneElement(a, {
              ref: function ref(e) {
                t.childComponents.push(e);
              }
            }) : a;
          });
        }
      }]), a;
    }(), Pi.contextTypes = {
      router: a.shape({
        history: a.shape({
          push: a.func.isRequired,
          replace: a.func.isRequired,
          createHref: a.func.isRequired
        })
      })
    }, Ei),
        Hi = +new Date(),
        zi = (Ai = Vi = function (e) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t._instance = null, t._DOMNode = null, t.id = e.id || Hi++, t.setInstance = t.setInstance.bind(t), t;
      }
  
      return u(a, e), l(a, [{
        key: "setInstance",
        value: function value(e) {
          this._instance = e;
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          this._DOMNode = t.findDOMNode(this);
        }
      }]), a;
    }(e.Component), Vi.propTypes = {
      selected: a.bool,
      disabled: a.bool,
      icon: a.string,
      id: a.oneOfType([a.string, a.number]),
      to: a.oneOfType([a.string, a.object]),
      onClick: a.func,
      replace: a.bool,
      isActive: a.func,
      exact: a.bool,
      strict: a.bool,
      sensitive: a.bool,
      location: a.oneOfType([a.string, a.object])
    }, Vi.contextTypes = {
      router: a.shape({
        history: a.shape({
          push: a.func.isRequired,
          replace: a.func.isRequired,
          createHref: a.func.isRequired
        })
      })
    }, Ai),
        Ui = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    };
  
    var Yi = a.number,
        Ri = a.bool,
        $i = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, Li), l(n, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props),
              a = t.findDOMNode(this);
          this.instance = new Ni(a, e);
  
          for (var n = 0; n < this.childComponents.length; n++) {
            this.childComponents[n].setInstance && this.childComponents[n].setInstance(this.instance);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.optimizeUpdate.updateChildren && this.instance.refresh(!0);
        }
      }, {
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.initialCssClass + " mbsc-cloak"
          }, this.renderChildren());
        }
      }]), n;
    }(),
        Wi = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, zi), l(a, [{
        key: "render",
        value: function value() {
          var t = this.props,
              a = t.icon,
              n = t.selected,
              s = t.disabled,
              i = t.onClick,
              o = t.children,
              r = function (e, t) {
            var a = {};
  
            for (var n in e) {
              t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
            }
  
            return a;
          }(t, ["icon", "selected", "disabled", "onClick", "children"]);
  
          return e.createElement("div", Ui({
            "data-icon": a,
            "data-id": this.id,
            "data-selected": n,
            "data-disabled": s,
            onClick: i
          }, r), o);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          return this.optimizeUpdate = {
            updateChildren: !qe(this.props.children, e.children),
            updateSelected: this.props.selected !== e.selected,
            updateDisabled: this.props.disabled !== e.disabled
          }, this.optimizeUpdate.updateChildren || this.optimizeUpdate.updateSelected || this.optimizeUpdate.updateDisabled;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this._instance && (this.optimizeUpdate.updateSelected && (this.props.selected ? this._instance.select(this._DOMNode) : this._instance.deselect(this._DOMNode)), this.optimizeUpdate.updateDisabled && (this.props.disabled ? this._instance.disable(this._DOMNode) : this._instance.enable(this._DOMNode)));
        }
      }]), a;
    }();
  
    $i.propTypes = Ui({}, Li.propTyes, {
      paging: Ri,
      select: a.oneOf(["off", "single", "multiple"]),
      snap: Ri,
      threshold: Yi,
      children: function children(t, a, n) {
        var s,
            i = t[a];
        return e.Children.forEach(i, function (e) {
          s || e.type !== Wi && (s = new Error("`" + n + "` only accepts `OptionItem`."));
        }), s;
      }
    }), n.Optionlist = $i, n.OptionItem = Wi;
  
    var Ji = function Ji(e, t) {
      var a,
          n,
          s,
          i,
          o,
          r = ye(e),
          l = r.is("ul,ol"),
          c = this;
      Oi.call(this, e, t, !0), c._initMarkup = function () {
        a && a.remove(), n && r.append(n.children());
      }, c.__size = function (e, t) {
        var l,
            u = t || 72,
            d = c._$items.length,
            m = 0;
        o.hide(), "bottom" == i.type && (r.removeClass("mbsc-scv-liq"), a.remove(), c._$items.remove().each(function (a) {
          var s = ye(this);
          r.append(s), m += t || this.offsetWidth || 0, Math.round(m + (a < d - 1 ? u : 0)) > e && (l = !0, n.append(s.css("width", "").addClass("mbsc-fr-btn-e")));
        }), a.attr("class", s + (i.moreIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + i.moreIcon : "")).html(c._hasIcons && c._hasText ? i.moreText : ""), l && r.append(a)), "liquid" == i.layout && r.addClass("mbsc-scv-liq");
      }, c.__onItemTap = function (e) {
        if (e.hasClass("mbsc-menu-item") && !1 !== c.trigger("onMenuShow", {
          target: e[0],
          menu: o
        })) return o.show(!1, !0), !1;
      }, c.__getContClass = function () {
        return "hamburger" == i.type ? " mbsc-ms-hamburger" : "";
      }, c.__markupReady = function (e) {
        "hamburger" == i.type && (n.append(c._$items.addClass("mbsc-fr-btn-e")), a.attr("class", s + (i.menuIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + i.menuIcon : "")).html(i.menuText || ""), r.append(a), i.menuText && i.menuIcon || e.removeClass("mbsc-ms-icons"), i.menuText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"));
      }, c.___init = function () {
        var e;
        "tab" == i.type ? (i.display = i.display || "top", i.variant = i.variant || "b") : "bottom" == i.type ? (i.display = i.display || "bottom", i.variant = i.variant || "a") : "hamburger" == i.type && (i.display = i.display || "inline", i.variant = i.variant || "a"), s = "mbsc-scv-item mbsc-ms-item mbsc-btn-e mbsc-menu-item " + (i.itemClass || ""), a || (a = ye(l ? "<li></li>" : "<div></div>"), n = ye(l ? "<ul></ul>" : "<div></div>").addClass("mbsc-scv mbsc-ms")), o = new Qa(n[0], {
          display: "bubble",
          theme: i.theme,
          lang: i.lang,
          context: i.context,
          buttons: [],
          anchor: a,
          onBeforeShow: function onBeforeShow(t, a) {
            e = null, a.settings.cssClass = "mbsc-wdg mbsc-ms-a mbsc-ms-more" + (c._hasText ? "" : " mbsc-ms-more-icons");
          },
          onBeforeClose: function onBeforeClose() {
            return c.trigger("onMenuHide", {
              target: e && e[0],
              menu: o
            });
          },
          onMarkupReady: function onMarkupReady(t, a) {
            c.tap(a._markup.find(".mbsc-fr-c"), function (t) {
              (e = ye(t.target).closest(".mbsc-ms-item")).length && !e.hasClass("mbsc-disabled") && ("touchend" === t.type ? K(t, t.target) : (c.navigate(e, !0), o.hide()));
            });
          }
        });
      }, c.___destroy = function () {
        o.destroy(), r.append(c._$items), a.remove();
      }, i = c.settings, c.init();
    };
  
    Ji.prototype = {
      _class: "navigation",
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _responsive: !0,
      _defaults: Se({}, Oi.prototype._defaults, {
        type: "bottom",
        moreText: "More",
        moreIcon: "material-more-horiz",
        menuIcon: "material-menu"
      })
    }, we.Navigation = Ji;
  
    var qi = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Bi = function (t) {
      function a(e, t) {
        r(this, a);
        var n = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return n.type = t, n.elm = n.elm.bind(n), n;
      }
  
      return u(a, Li), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props, {
            type: this.type
          });
          this.instance = new Ji(this.domNode, e);
  
          for (var t = 0; t < this.childComponents.length; t++) {
            this.childComponents[t].setInstance(this.instance);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.optimizeUpdate.updateChildren && this.instance.refresh(!0);
        }
      }, {
        key: "elm",
        value: function value(e) {
          this.domNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          return e.createElement("div", null, e.createElement("div", {
            ref: this.elm,
            className: this.initialCssClass + " mbsc-cloak"
          }, this.renderChildren()));
        }
      }]), a;
    }();
  
    Bi.defaultProps = qi({}, Bi.defaultProps, {
      replace: !1
    }), Bi.propTypes = qi({}, Li.propTypes, {
      display: a.oneOf(["top", "bottom", "inline"]),
      moreText: a.string,
      moreIcon: a.string,
      menuText: a.string,
      menuIcon: a.string,
      onMenuShow: a.func,
      onMenuHide: a.func,
      replace: a.bool,
      children: function children(t, a, n) {
        var s,
            i = t[a];
        return e.Children.forEach(i, function (e) {
          s || void 0 !== e && null !== e && !1 !== e && e.type !== Zi && (s = new Error("`" + n + "` only accepts `NavItem`."));
        }), s;
      }
    });
  
    var Ki = function (e) {
      function t(e) {
        return r(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "bottom"));
      }
  
      return u(t, Bi), t;
    }(),
        Gi = function (e) {
      function t(e) {
        return r(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "hamburger"));
      }
  
      return u(t, Bi), t;
    }(),
        Xi = function (e) {
      function t(e) {
        return r(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "tab"));
      }
  
      return u(t, Bi), t;
    }(),
        Zi = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.handleClick = t.handleClick.bind(t), t;
      }
  
      return u(a, zi), l(a, [{
        key: "handleClick",
        value: function value(e) {
          if (this.props.onClick && this.props.onClick(e), this.context.router && !e.defaultPrevented) {
            e.preventDefault();
            var t = this.context.router.history,
                a = this.props,
                n = a.replace,
                s = a.to;
            n ? t.replace(s) : t.push(s);
          }
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              a = t.icon,
              n = t.selected,
              s = t.disabled,
              i = t.badge;
          return e.createElement("div", {
            "data-icon": a,
            "data-id": this.id,
            "data-selected": n,
            "data-disabled": s,
            "data-badge": i,
            onClick: this.handleClick
          }, this.props.children);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          return this.optimizeUpdate = {
            updateChildren: !qe(this.props.children, e.children),
            updateSelected: this.props.selected !== e.selected,
            updateDisabled: this.props.disabled !== e.disabled,
            updateBadge: this.props.badge !== e.badge
          }, this.optimizeUpdate.updateChildren || this.optimizeUpdate.updateSelected || this.optimizeUpdate.updateDisabled || this.optimizeUpdate.updateBadge;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this._instance && (this.optimizeUpdate.updateSelected && (this.props.selected ? this._instance.select(this._DOMNode) : this._instance.deselect(this._DOMNode)), this.optimizeUpdate.updateDisabled && (this.props.disabled ? this._instance.disable(this._DOMNode) : this._instance.enable(this._DOMNode)), this.optimizeUpdate.updateBadge && this._instance.setBadge(this._DOMNode, this.props.badge));
        }
      }]), a;
    }();
  
    Zi.propTypes = qi({}, zi.propTypes, {
      badge: a.string
    }), n.Nav = Bi, n.BottomNav = Ki, n.HamburgerNav = Gi, n.TabNav = Xi, n.NavItem = Zi, Pt.number = Pt.measurement;
  
    var Qi = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        eo = a.string,
        to = a.number,
        ao = {
      defaultValue: eo,
      invalid: a.array,
      max: to,
      min: to,
      scale: to,
      step: to,
      wholeText: eo,
      fractionText: eo,
      signText: eo
    },
        no = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "number"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    no.propTypes = Qi({}, no.propTypes, Re, ao), n.Number = no;
  
    var so = {},
        io = function io(e, t, a) {
      var s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w = ye(e),
          C = this,
          S = [],
          M = [],
          k = {},
          D = {},
          O = {
        107: "+",
        109: "-"
      },
          N = {
        48: 0,
        49: 1,
        50: 2,
        51: 3,
        52: 4,
        53: 5,
        54: 6,
        55: 7,
        56: 8,
        57: 9,
        96: 0,
        97: 1,
        98: 2,
        99: 3,
        100: 4,
        101: 5,
        102: 6,
        103: 7,
        104: 8,
        105: 9
      };
  
      function P(t) {
        var a,
            u = l.validate.call(e, {
          values: g.slice(0),
          variables: k
        }, C) || [],
            d = u && u.disabled || [];
  
        if (C._isValid = !u.invalid, C._tempValue = l.formatValue.call(e, g.slice(0), k, C), r = g.length, x = u.length || T, C._isVisible && n.XdAQT) {
          if (ye(".mbsc-np-ph", s).each(function (e) {
            ye(this).html("ltr" == l.fill ? e >= r ? o : c || g[e] : e >= T - x ? e + r < T ? o : c || g[e + r - T] : "");
          }), ye(".mbsc-np-cph", s).each(function () {
            ye(this).html(k[ye(this).attr("data-var")] || ye(this).attr("data-ph"));
          }), r === T) for (a = 0; a <= 9; a++) {
            d.push(a);
          }
  
          for (ye(".mbsc-np-btn", s).removeClass(i), a = 0; a < d.length; a++) {
            ye('.mbsc-np-btn[data-val="' + d[a] + '"]', s).addClass(i);
          }
  
          C._isValid ? ye(".mbsc-fr-btn-s .mbsc-fr-btn", s).removeClass(i) : ye(".mbsc-fr-btn-s .mbsc-fr-btn", s).addClass(i), C.live && (C._hasValue = t || C._hasValue, E(t, !1, t), t && y("onSet", {
            valueText: C._value
          }));
        }
      }
  
      function E(e, t, a, n) {
        t && P(), n || (_ = g.slice(0), D = Se({}, k), S = M.slice(0), C._value = C._hasValue ? C._tempValue : null), e && (C._isInput && w.val(C._hasValue && C._isValid ? C._value : ""), y("onFill", {
          valueText: C._hasValue ? C._tempValue : "",
          change: a
        }), a && (C._preventChange = !0, w.trigger("change")));
      }
  
      function V(e) {
        var t,
            a,
            n = e || [],
            s = [];
  
        for (M = [], k = {}, t = 0; t < n.length; t++) {
          /:/.test(n[t]) ? (a = n[t].split(":"), k[a[0]] = a[1], M.push(a[0])) : (s.push(n[t]), M.push("digit"));
        }
  
        return s;
      }
  
      function A(e, t) {
        !(r || t || l.allowLeadingZero) || e.hasClass("mbsc-disabled") || e.hasClass("mbsc-np-btn-empty") || r < T && n.XdAQT && (M.push("digit"), g.push(t), P(!0));
      }
  
      function F(e) {
        var t,
            a,
            n = e.attr("data-val"),
            s = "false" !== e.attr("data-track"),
            i = e.attr("data-var");
  
        if (!e.hasClass("mbsc-disabled")) {
          if (i && (a = i.split(":"), s && M.push(a[0]), k[a[0]] = void 0 === a[2] ? a[1] : k[a[0]] == a[1] ? a[2] : a[1]), n.length + r <= x) for (t = 0; t < n.length; ++t) {
            a = L(n[t]) ? +n[t] : n[t], (l.allowLeadingZero || r || a) && (M.push("digit"), g.push(a), r = g.length);
          }
          P(!0);
        }
      }
  
      function I() {
        var e,
            t,
            a = M.pop();
  
        if (r || "digit" !== a) {
          if ("digit" !== a && k[a]) for (delete k[a], t = M.slice(0), M = [], e = 0; e < t.length; e++) {
            t[e] !== a && M.push(t[e]);
          } else g.pop();
          P(!0);
        }
      }
  
      function j() {
        clearInterval(b), v = !1;
      }
  
      function H(e) {
        if (ot(e, this)) {
          if ("keydown" == e.type && 32 != e.keyCode) return;
          !function (e) {
            v = !0, u = G(e, "X"), d = G(e, "Y"), clearInterval(b), clearTimeout(b), I(), b = setInterval(function () {
              I();
            }, 150);
          }(e), "mousedown" == e.type && ye(document).on("mousemove", z).on("mouseup", U);
        }
      }
  
      function z(e) {
        v && (m = G(e, "X"), p = G(e, "Y"), h = m - u, f = p - d, (Math.abs(h) > 7 || Math.abs(f) > 7) && j());
      }
  
      function U(e) {
        v && (e.preventDefault(), j(), "mouseup" == e.type && ye(document).off("mousemove", z).off("mouseup", U));
      }
  
      Dt.call(this, e, t, !0), C.setVal = C._setVal = function (t, a, n, s) {
        C._hasValue = null !== t && void 0 !== t, g = V(ye.isArray(t) ? t.slice(0) : l.parseValue.call(e, t, C)), E(a, !0, void 0 === n ? a : n, s);
      }, C.getVal = C._getVal = function (e) {
        return C._hasValue || e ? C[e ? "_tempValue" : "_value"] : null;
      }, C.setArrayVal = C.setVal, C.getArrayVal = function (e) {
        return e ? g.slice(0) : C._hasValue ? _.slice(0) : null;
      }, C._readValue = function () {
        var t = w.val() || "";
        "" !== t && (C._hasValue = !0), c ? (k = {}, M = [], g = []) : (k = C._hasValue ? D : {}, M = C._hasValue ? S : [], g = C._hasValue && _ ? _.slice(0) : V(l.parseValue.call(e, t, C)), E(!1, !0));
      }, C._fillValue = function () {
        C._hasValue = !0, E(!0, !1, !0);
      }, C._generateContent = function () {
        var e,
            t,
            a,
            s = 1,
            i = "";
  
        for (i += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + l.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + l.deleteIcon + '"></div><div class="mbsc-np-dsp">', i += l.template.replace(/d/g, '<span class="mbsc-np-ph">' + o + "</span>").replace(/&#100;/g, "d").replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>'), i += "</div></div>", i += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">', e = 0; e < 4; e++) {
          for (i += '<div class="mbsc-np-row">', t = 0; t < 3; t++) {
            a = s, 10 == s || 12 == s ? a = "" : 11 == s && (a = 0), "" === a ? 10 == s && l.leftKey ? i += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (l.leftKey.variable ? 'data-var="' + l.leftKey.variable + '"' : "") + ' data-val="' + (l.leftKey.value || "") + '" ' + (void 0 !== l.leftKey.track ? ' data-track="' + l.leftKey.track + '"' : "") + ">" + l.leftKey.text + "</div>" : 12 == s && l.rightKey ? i += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (l.rightKey.variable ? 'data-var="' + l.rightKey.variable + '"' : "") + ' data-val="' + (l.rightKey.value || "") + '" ' + (void 0 !== l.rightKey.track ? ' data-track="' + l.rightKey.track + '"' : "") + " >" + l.rightKey.text + "</div>" : i += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' : i += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + a + '">' + a + C._getText(n, .2) + "</div>", s++;
          }
  
          i += "</div>";
        }
  
        return i += "</div></div>";
      }, C._markupReady = function () {
        s = C._markup, P();
      }, C._attachEvents = function (e) {
        e.on("keydown", function (t) {
          var a;
          void 0 !== O[t.keyCode] ? (a = ye('.mbsc-np-btn[data-var="sign:-:"]', e)).length && (k.sign = 107 == t.keyCode ? "-" : "", F(a)) : void 0 !== N[t.keyCode] ? A(ye('.mbsc-np-btn[data-val="' + N[t.keyCode] + '"]', e), N[t.keyCode]) : 8 == t.keyCode && (t.preventDefault(), I());
        }), C.tap(ye(".mbsc-np-btn", e), function () {
          var e = ye(this);
          e.hasClass("mbsc-np-btn-custom") ? F(e) : A(e, +e.attr("data-val"));
        }, !1, 30, !0), ye(".mbsc-np-del", e).on("touchstart mousedown keydown", H).on("touchmove mousemove", z).on("touchend mouseup keyup", U);
      }, C.__init = function () {
        (l = C.settings).template = l.template.replace(/\\d/, "&#100;"), o = l.placeholder, T = (l.template.match(/d/g) || []).length, i = "mbsc-disabled " + (l.disabledClass || ""), c = l.mask, y = C.trigger, c && w.is("input") && w.attr("type", "password");
      }, C._indexOf = function (e, t) {
        var a;
  
        for (a = 0; a < e.length; ++a) {
          if (e[a].toString() === t.toString()) return a;
        }
  
        return -1;
      }, a || C.init();
    };
  
    io.prototype = {
      _hasDef: !0,
      _hasTheme: !0,
      _hasLang: !0,
      _responsive: !0,
      _class: "numpad",
      _presets: so,
      _defaults: Se({}, Dt.prototype._defaults, {
        template: "dd.dd",
        placeholder: "0",
        deleteIcon: "backspace",
        allowLeadingZero: !1,
        headerText: !1,
        fill: "rtl",
        compClass: "mbsc-np",
        deleteText: "Delete",
        decimalSeparator: ".",
        thousandsSeparator: ",",
        validate: F,
        parseValue: F,
        formatValue: function formatValue(e, t, a) {
          var n,
              s = 1,
              i = a.settings,
              o = i.placeholder,
              r = i.template,
              l = e.length,
              c = r.length,
              u = "";
  
          for (n = 0; n < c; n++) {
            "d" == r[c - n - 1] ? (u = s <= l ? e[l - s] + u : o + u, s++) : u = r[c - n - 1] + u;
          }
  
          return ye.each(t, function (e, t) {
            u = u.replace("{" + e + "}", t);
          }), ye("<div>" + u + "</div>").text();
        }
      })
    }, we.Numpad = io, n.themes.numpad = n.themes.frame;
    var oo = {
      min: 0,
      max: 99.99,
      scale: 2,
      prefix: "",
      suffix: "",
      returnAffix: !1
    };
  
    function ro(e) {
      for (var t = 0, a = 1, n = 0; e.length;) {
        t > 3 ? a = 3600 : t > 1 && (a = 60), n += e.pop() * a * (t % 2 ? 10 : 1), t++;
      }
  
      return n;
    }
  
    so.decimal = function (e) {
      function t(e, t) {
        for (var a, n = e.slice(0), s = 0; n.length;) {
          s = 10 * s + n.shift();
        }
  
        for (a = 0; a < i; a++) {
          s /= 10;
        }
  
        return t ? -1 * s : s;
      }
  
      function a(e) {
        var a = t(e).toFixed(i).split(".");
        return a[0].replace(/\B(?=(\d{3})+(?!\d))/g, s.thousandsSeparator) + (a[1] ? s.decimalSeparator + a[1] : "");
      }
  
      var n = Se({}, e.settings),
          s = Se(e.settings, oo, n),
          i = s.scale,
          o = +s.min.toFixed(i),
          r = +s.max.toFixed(i),
          l = o < 0,
          c = new RegExp(s.thousandsSeparator, "g");
      return e.setVal = function (t, a, n, s) {
        return e._setVal(z(t, o, r), a, n, s);
      }, e.getVal = function (t) {
        var a = e._getVal(t),
            n = (a + "").replace(c, "").replace(s.decimalSeparator, ".");
  
        return L(n) ? +n : a;
      }, {
        template: (l ? "{sign}" : "") + s.prefix.replace(/d/g, "\\d") + Array((Math.floor(Math.max(r, Math.abs(o))) + "").length + 1).join("d") + (i ? "." + Array(i + 1).join("d") : "") + s.suffix.replace(/d/g, "\\d"),
        leftKey: l ? {
          text: "-/+",
          variable: "sign:-:",
          track: !1
        } : void 0,
        parseValue: function parseValue(e) {
          var t,
              a,
              n = e || s.defaultValue,
              o = [];
          if (n && (a = (n = (n + "").replace(c, "").replace(s.decimalSeparator, ".")).match(/\d+\.?\d*/g))) for (a = (+a[0]).toFixed(i), t = 0; t < a.length; t++) {
            "." != a[t] && (+a[t] ? o.push(+a[t]) : o.length && o.push(0));
          }
          return e < 0 && o.push("sign:-"), o;
        },
        formatValue: function formatValue(e, n) {
          var i = a(e);
          return (t(e, n && "-" == n.sign) < 0 ? "-" : "") + (s.returnAffix ? s.prefix + i + s.suffix : i);
        },
        validate: function validate(n) {
          var i = n.values,
              l = a(i),
              c = t(i, n.variables && "-" == n.variables.sign),
              u = [];
          return i.length || s.allowLeadingZero || u.push(0), e.isVisible() && ye(".mbsc-np-dsp", e._markup).html((n.variables.sign || "") + s.prefix + l + s.suffix), {
            disabled: u,
            invalid: c > r || c < o || !!s.invalid && -1 != e._indexOf(s.invalid, c)
          };
        }
      };
    };
  
    var lo = ["h", "m", "s"],
        co = {
      min: 0,
      max: 362439,
      defaultValue: 0,
      hourTextShort: "h",
      minuteTextShort: "m",
      secTextShort: "s"
    };
  
    so.timespan = function (e) {
      var t = Se({}, e.settings),
          a = Se(e.settings, co, t),
          n = {
        h: a.hourTextShort.replace(/d/g, "\\d"),
        m: a.minuteTextShort.replace(/d/g, "\\d"),
        s: a.secTextShort.replace(/d/g, "\\d")
      },
          s = 'd<span class="mbsc-np-sup mbsc-np-time">' + n.s + "</span>";
  
      function i(e) {
        var t,
            a = "",
            s = 3600;
        return ye(lo).each(function (i, o) {
          t = Math.floor(e / s), e -= t * s, s /= 60, (t > 0 || "s" == o && !a) && (a = a + (a ? " " : "") + t + n[o]);
        }), a;
      }
  
      return a.max > 9 && (s = "d" + s), a.max > 99 && (s = '<span class="mbsc-np-ts-m">' + (a.max > 639 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + n.m + "</span>" + s), a.max > 6039 && (s = '<span class="mbsc-np-ts-h">' + (a.max > 38439 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + n.h + "</span>" + s), e.setVal = function (t, a, n, s) {
        return L(t) && (t = i(t)), e._setVal(t, a, n, s);
      }, e.getVal = function (t) {
        return e._hasValue || t ? ro(e.getArrayVal(t)) : null;
      }, {
        template: s,
        parseValue: function parseValue(e) {
          var t,
              s = e || i(a.defaultValue),
              o = [];
          return s && ye(lo).each(function (e, a) {
            (t = new RegExp("(\\d+)" + n[a], "gi").exec(s)) ? (t = +t[1]) > 9 ? (o.push(Math.floor(t / 10)), o.push(t % 10)) : (o.length && o.push(0), (t || o.length) && o.push(t)) : o.length && (o.push(0), o.push(0));
          }), o;
        },
        formatValue: function formatValue(e) {
          return i(ro(e));
        },
        validate: function validate(t) {
          var n = t.values,
              s = ro(n.slice(0)),
              i = [];
          return n.length || i.push(0), {
            disabled: i,
            invalid: s > a.max || s < a.min || !!a.invalid && -1 != e._indexOf(a.invalid, +s)
          };
        }
      };
    };
  
    var uo = {
      timeFormat: "hh:ii A",
      amText: "am",
      pmText: "pm"
    };
  
    so.time = function (e) {
      var t = Se({}, e.settings),
          a = Se(e.settings, uo, t),
          n = a.timeFormat.split(":"),
          s = a.timeFormat.match(/a/i),
          i = s ? "a" == s[0] ? a.amText : a.amText.toUpperCase() : "",
          o = s ? "a" == s[0] ? a.pmText : a.pmText.toUpperCase() : "",
          r = 0,
          l = a.min ? "" + a.min.getHours() : "",
          c = a.max ? "" + a.max.getHours() : "",
          u = a.min ? "" + (a.min.getMinutes() < 10 ? "0" + a.min.getMinutes() : a.min.getMinutes()) : "",
          d = a.max ? "" + (a.max.getMinutes() < 10 ? "0" + a.max.getMinutes() : a.max.getMinutes()) : "",
          m = a.min ? "" + (a.min.getSeconds() < 10 ? "0" + a.min.getSeconds() : a.min.getSeconds()) : "",
          p = a.max ? "" + (a.max.getSeconds() < 10 ? "0" + a.max.getSeconds() : a.max.getSeconds()) : "";
  
      function h(e, t) {
        var a,
            n = "";
  
        for (a = 0; a < e.length; ++a) {
          n += e[a] + (a % 2 == (e.length % 2 == 1 ? 0 : 1) && a != e.length - 1 ? ":" : "");
        }
  
        return ye.each(t, function (e, t) {
          n += " " + t;
        }), n;
      }
  
      return a.min && a.min.setFullYear(2014, 7, 20), a.max && a.max.setFullYear(2014, 7, 20), {
        placeholder: "-",
        allowLeadingZero: !0,
        template: (3 == n.length ? "dd:dd:dd" : 2 == n.length ? "dd:dd" : "dd") + (s ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
        leftKey: s ? {
          text: i,
          variable: "ampm:" + i,
          value: "00"
        } : {
          text: ":00",
          value: "00"
        },
        rightKey: s ? {
          text: o,
          variable: "ampm:" + o,
          value: "00"
        } : {
          text: ":30",
          value: "30"
        },
        parseValue: function parseValue(e) {
          var t,
              n,
              r = e || a.defaultValue,
              l = [];
  
          if (r) {
            if (n = (r += "").match(/\d/g)) for (t = 0; t < n.length; t++) {
              l.push(+n[t]);
            }
            s && l.push("ampm:" + (r.match(new RegExp(a.pmText, "gi")) ? o : i));
          }
  
          return l;
        },
        formatValue: function formatValue(e, t) {
          return h(e, t);
        },
        validate: function validate(t) {
          var i = t.values,
              o = h(i, t.variables),
              f = i.length >= 3 ? new Date(2014, 7, 20, "" + i[0] + (i.length % 2 == 0 ? i[1] : ""), "" + i[i.length % 2 == 0 ? 2 : 1] + i[i.length % 2 == 0 ? 3 : 2]) : "";
          return {
            disabled: function (e) {
              var t,
                  i,
                  o,
                  h,
                  f,
                  v,
                  b,
                  g,
                  x,
                  y,
                  T = [],
                  _ = 2 * n.length;
  
              if (r = _, e.length || (s && (T.push(0), T.push(a.leftKey.value)), T.push(a.rightKey.value)), !s && (_ - e.length < 2 || 1 != e[0] && (e[0] > 2 || e[1] > 3) && _ - e.length <= 2) && (T.push("30"), T.push("00")), (s ? e[0] > 1 || e[1] > 2 : 1 != e[0] && (e[0] > 2 || e[1] > 3)) && e[0] && (e.unshift(0), r = _ - 1), e.length == _) for (t = 0; t <= 9; ++t) {
                T.push(t);
              } else if (1 == e.length && s && 1 == e[0] || e.length && e.length % 2 == 0 || !s && 2 == e[0] && e[1] > 3 && e.length % 2 == 1) for (t = 6; t <= 9; ++t) {
                T.push(t);
              }
              if (x = void 0 !== e[1] ? "" + e[0] + e[1] : "", y = +d == +(void 0 !== e[3] ? "" + e[2] + e[3] : ""), a.invalid) for (t = 0; t < a.invalid.length; ++t) {
                if (v = a.invalid[t].getHours(), b = a.invalid[t].getMinutes(), g = a.invalid[t].getSeconds(), v == +x) {
                  if (2 == n.length && (b < 10 ? 0 : +("" + b)[0]) == +e[2]) {
                    T.push(b < 10 ? b : +("" + b)[1]);
                    break;
                  }
  
                  if ((g < 10 ? 0 : +("" + g)[0]) == +e[4]) {
                    T.push(g < 10 ? g : +("" + g)[1]);
                    break;
                  }
                }
              }
  
              if (a.min || a.max) {
                if (i = +l == +x, f = (o = +c == +x) && y, h = i && y, 0 === e.length) {
                  for (t = s ? 2 : l > 19 ? l[0] : 3; t <= (1 == l[0] ? 9 : l[0] - 1); ++t) {
                    T.push(t);
                  }
  
                  if (l >= 10 && (T.push(0), 2 == l[0])) for (t = 3; t <= 9; ++t) {
                    T.push(t);
                  }
                  if (c && c < 10 || l && l >= 10) for (t = c && c < 10 ? +c[0] + 1 : 0; t < (l && l >= 10 ? l[0] : 10); ++t) {
                    T.push(t);
                  }
                }
  
                if (1 == e.length) {
                  if (0 === e[0]) for (t = 0; t < l[0]; ++t) {
                    T.push(t);
                  }
                  if (l && 0 !== e[0] && (s ? 1 == e[0] : 2 == e[0])) for (t = s ? 3 : 4; t <= 9; ++t) {
                    T.push(t);
                  }
                  if (e[0] == l[0]) for (t = 0; t < l[1]; ++t) {
                    T.push(t);
                  }
                  if (e[0] == c[0] && !s) for (t = +c[1] + 1; t <= 9; ++t) {
                    T.push(t);
                  }
                }
  
                if (2 == e.length && (i || o)) for (t = o ? +d[0] + 1 : 0; t < (i ? +u[0] : 10); ++t) {
                  T.push(t);
                }
                if (3 == e.length && (o && e[2] == d[0] || i && e[2] == u[0])) for (t = o && e[2] == d[0] ? +d[1] + 1 : 0; t < (i && e[2] == u[0] ? +u[1] : 10); ++t) {
                  T.push(t);
                }
                if (4 == e.length && (h || f)) for (t = f ? +p[0] + 1 : 0; t < (h ? +m[0] : 10); ++t) {
                  T.push(t);
                }
                if (5 == e.length && (h && e[4] == m[0] || f && e[4] == p[0])) for (t = f && e[4] == p[0] ? +p[1] + 1 : 0; t < (h && e[4] == m[0] ? +m[1] : 10); ++t) {
                  T.push(t);
                }
              }
  
              return T;
            }(i),
            length: r,
            invalid: (s ? !new RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + a.amText + "|" + a.pmText + ")$", "i").test(o) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(o)) || !!a.invalid && -1 != e._indexOf(a.invalid, f) || !((!a.min || a.min <= f) && (!a.max || f <= a.max))
          };
        }
      };
    };
  
    var mo = {
      dateOrder: "mdy",
      dateFormat: "mm/dd/yy",
      delimiter: "/"
    };
  
    so.date = function (e) {
      var t,
          a,
          n,
          s,
          i = [],
          o = Se({}, e.settings),
          r = Se(e.settings, ge, mo, o),
          l = r.dateOrder,
          c = r.min ? "" + (r.getMonth(r.min) + 1) : 0,
          u = r.max ? "" + (r.getMonth(r.max) + 1) : 0,
          d = r.min ? "" + r.getDay(r.min) : 0,
          m = r.max ? "" + r.getDay(r.max) : 0,
          p = r.min ? "" + r.getYear(r.min) : 0,
          h = r.max ? "" + r.getYear(r.max) : 0;
  
      for (l = (l = (l = l.replace(/y+/gi, "yyyy")).replace(/m+/gi, "mm")).replace(/d+/gi, "dd"), t = l.toUpperCase().indexOf("Y"), a = l.toUpperCase().indexOf("M"), n = l.toUpperCase().indexOf("D"), l = "", i.push({
        val: t,
        n: "yyyy"
      }, {
        val: a,
        n: "mm"
      }, {
        val: n,
        n: "dd"
      }), i.sort(function (e, t) {
        return e.val - t.val;
      }), ye.each(i, function (e, t) {
        l += t.n;
      }), t = l.indexOf("y"), a = l.indexOf("m"), n = l.indexOf("d"), l = "", s = 0; s < 8; ++s) {
        l += "d", s + 1 != t && s + 1 != a && s + 1 != n || (l += r.delimiter);
      }
  
      function f(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
      }
  
      function v(e) {
        return new Date(+("" + e[t] + e[t + 1] + e[t + 2] + e[t + 3]), +("" + e[a] + e[a + 1]) - 1, +("" + e[n] + e[n + 1]));
      }
  
      return e.getVal = function (t) {
        return e._hasValue || t ? v(e.getArrayVal(t)) : null;
      }, {
        placeholder: "-",
        fill: "ltr",
        allowLeadingZero: !0,
        template: l,
        parseValue: function parseValue(e) {
          var t,
              a = [],
              n = e || r.defaultValue,
              s = ne(r.dateFormat, n, r);
          if (n) for (t = 0; t < i.length; ++t) {
            a = /m/i.test(i[t].n) ? a.concat(((r.getMonth(s) < 9 ? "0" : "") + (r.getMonth(s) + 1)).split("")) : /d/i.test(i[t].n) ? a.concat(((r.getDay(s) < 10 ? "0" : "") + r.getDay(s)).split("")) : a.concat((r.getYear(s) + "").split(""));
          }
          return a;
        },
        formatValue: function formatValue(e) {
          return ae(r.dateFormat, v(e), r);
        },
        validate: function validate(s) {
          var i = s.values,
              o = v(i);
          return {
            disabled: function (e) {
              var s,
                  i,
                  o,
                  l,
                  v,
                  b = [],
                  g = void 0 !== e[t + 3] ? "" + e[t] + e[t + 1] + e[t + 2] + e[t + 3] : "",
                  x = void 0 !== e[a + 1] ? "" + e[a] + e[a + 1] : "",
                  y = void 0 !== e[n + 1] ? "" + e[n] + e[n + 1] : "",
                  T = "" + r.getMaxDayOfMonth(g || 2012, x - 1 || 0),
                  _ = p === g && +c == +x,
                  w = h === g && +u == +x;
  
              if (r.invalid) for (s = 0; s < r.invalid.length; ++s) {
                if (o = r.getYear(r.invalid[s]), l = r.getMonth(r.invalid[s]), v = r.getDay(r.invalid[s]), o == +g && l + 1 == +x && (v < 10 ? 0 : +("" + v)[0]) == +e[n]) {
                  b.push(v < 10 ? v : +("" + v)[1]);
                  break;
                }
  
                if (l + 1 == +x && v == +y && ("" + o).substring(0, 3) == "" + e[t] + e[t + 1] + e[t + 2]) {
                  b.push(("" + o)[3]);
                  break;
                }
  
                if (o == +g && v == +y && (l < 10 ? 0 : +("" + (l + 1))[0]) == +e[a]) {
                  b.push(l < 10 ? l : +("" + (l + 1))[1]);
                  break;
                }
              }
  
              if ("31" != y || e.length != a && e.length != a + 1 || (1 != e[a] ? b.push(2, 4, 6, 9, 11) : b.push(1)), "30" == y && 0 === e[a] && e.length <= a + 1 && b.push(2), e.length == a) {
                for (s = h === g && +u < 10 ? 1 : 2; s <= 9; ++s) {
                  b.push(s);
                }
  
                p === g && +c >= 10 && b.push(0);
              }
  
              if (e.length == a + 1) {
                if (1 == e[a]) {
                  for (s = h === g ? +u[1] + 1 : 3; s <= 9; ++s) {
                    b.push(s);
                  }
  
                  if (p == g) for (s = 0; s < +c[1]; ++s) {
                    b.push(s);
                  }
                }
  
                if (0 === e[a] && (b.push(0), h === g || p === g)) for (s = h === g ? +y > +m ? +u : +u + 1 : 0; s <= (p === g ? +c - 1 : 9); ++s) {
                  b.push(s);
                }
              }
  
              if (e.length == n) {
                for (s = w ? 1 + (+m > 10 ? +m[0] : 0) : +T[0] + 1; s <= 9; ++s) {
                  b.push(s);
                }
  
                if (_) for (s = 0; s < (+d < 10 ? 0 : d[0]); ++s) {
                  b.push(s);
                }
              }
  
              if (e.length == n + 1) {
                if (e[n] >= 3 || "02" == x) for (s = +T[1] + 1; s <= 9; ++s) {
                  b.push(s);
                }
                if (w && +m[0] == e[n]) for (s = +m[1] + 1; s <= 9; ++s) {
                  b.push(s);
                }
                if (_ && d[0] == e[n]) for (s = 0; s < +d[1]; ++s) {
                  b.push(s);
                }
                if (0 === e[n] && (b.push(0), w || _)) for (s = w ? +m + 1 : 1; s <= (_ ? +d - 1 : 9); ++s) {
                  b.push(s);
                }
              }
  
              if (void 0 !== e[t + 2] && "02" == x && "29" == y) for (i = +("" + e[t] + e[t + 1] + e[t + 2] + 0); i <= +("" + e[t] + e[t + 1] + e[t + 2] + 9); ++i) {
                b.push(f(i) ? "" : i % 10);
              }
  
              if (e.length == t) {
                if (r.min) for (s = 0; s < +p[0]; ++s) {
                  b.push(s);
                }
                if (r.max) for (s = +h[0] + 1; s <= 9; ++s) {
                  b.push(s);
                }
                b.push(0);
              }
  
              if (r.min || r.max) for (i = 1; i < 4; ++i) {
                if (e.length == t + i) {
                  if (e[t + i - 1] == +p[i - 1] && (3 != i || e[t + i - 2] == +p[i - 2])) for (s = 0; s < +p[i] + (3 == i && e[a + 1] && +c > +x ? 1 : 0); ++s) {
                    b.push(s);
                  }
                  if (e[t + i - 1] == +h[i - 1] && (3 != i || e[t + i - 2] == +h[i - 2])) for (s = +h[i] + (3 == i && +u < +x ? 0 : 1); s <= 9; ++s) {
                    b.push(s);
                  }
                }
              }
              return b;
            }(i),
            invalid: !("Invalid Date" != o && (!r.min || r.min <= o) && (!r.max || o <= r.max)) || !!r.invalid && -1 != e._indexOf(r.invalid, o)
          };
        }
      };
    };
  
    var po = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        ho = a.bool,
        fo = a.string,
        vo = a.func,
        bo = a.number,
        go = a.shape({
      text: fo.isRequired,
      variable: fo,
      value: fo
    }),
        xo = {
      allowLeadingZero: ho,
      deleteIcon: fo,
      fill: a.oneOf(["ltr", "rtl"]),
      leftKey: go,
      mask: fo,
      placeholder: fo,
      preset: a.oneOf(["decimal", "timespan", "time", "date"]),
      rightKey: go,
      template: fo,
      onSet: vo,
      validate: vo,
      onClear: vo,
      cancelText: fo,
      clearText: fo,
      setText: fo,
      dateFormat: fo,
      dateOrder: fo,
      decimalSeparator: fo,
      defaultValue: a.oneOfType([bo, fo]),
      delimiter: fo,
      invalid: a.array,
      scale: bo,
      max: a.oneOfType([bo, a.instanceOf(Date)]),
      min: a.oneOfType([bo, a.instanceOf(Date)]),
      prefix: fo,
      returnAffix: ho,
      suffix: fo,
      thousandsSeparator: fo,
      timeFormat: fo,
      formatValue: vo,
      parseValue: vo
    },
        yo = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          component: "Numpad"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    yo.propTypes = po({}, yo.propTypes, xo, Ye), n.Numpad = yo;
    var To = {
      autoCorrect: !0,
      showSelector: !0,
      minRange: 1,
      rangeTap: !0
    };
  
    Pt.range = function (e) {
      function t(e, t) {
        e && (e.setFullYear(t.getFullYear()), e.setMonth(t.getMonth()), e.setDate(t.getDate()));
      }
  
      function a(t, a) {
        var n = e._order,
            s = new Date(t);
        return void 0 === n.h && s.setHours(a ? 23 : 0), void 0 === n.i && s.setMinutes(a ? 59 : 0), void 0 === n.s && s.setSeconds(a ? 59 : 0), s.setMilliseconds(a ? 999 : 0), s;
      }
  
      function n(e, t) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
      }
  
      function s(e) {
        h ? (T - x > N.maxRange - 1 && (e ? x = new Date(Math.max(b, T - N.maxRange + 1)) : T = new Date(Math.min(v, +x + N.maxRange - 1))), T - x < N.minRange - 1 && (e ? x = new Date(Math.max(b, T - N.minRange + 1)) : T = new Date(Math.min(v, +x + N.minRange - 1)))) : (Math.ceil((T - x) / V) > F && (e ? x = a(Math.max(b, n(T, 1 - F)), !1) : T = a(Math.min(v, n(x, F - 1)), !0)), Math.ceil((T - x) / V) < A && (e ? x = a(Math.max(b, n(T, 1 - A)), !1) : T = a(Math.min(v, n(x, A - 1)), !0)));
      }
  
      function i(e, t) {
        var a = !0;
        return e && x && T && (s(k), s(!k)), x && T || (a = !1), t && r(), a;
      }
  
      function o() {
        C && d && (ye(".mbsc-range-btn", d).removeClass(j).removeAttr("aria-checked"), ye(".mbsc-range-btn", d).eq(k).addClass(j).attr("aria-checked", "true"));
      }
  
      function r() {
        var t,
            a,
            n,
            s,
            i,
            o = 0,
            r = E || !k ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start",
            l = E || k ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
        if (e.startVal = x ? ae(p, x, N) : "", e.endVal = T ? ae(p, T, N) : "", d && (ye(".mbsc-range-btn-v-start", d).html(e.startVal || "&nbsp;"), ye(".mbsc-range-btn-v-end", d).html(e.endVal || "&nbsp;"), t = x ? new Date(x) : null, n = T ? new Date(T) : null, !t && n && (t = new Date(n)), !n && t && (n = new Date(t)), i = k ? n : t, ye(".mbsc-cal-day-picker .mbsc-cal-day-hl", d).removeClass(L), ye(".mbsc-cal-day-picker .mbsc-selected", d).removeClass("mbsc-cal-sel-start mbsc-cal-sel-end " + j).removeAttr("aria-selected"), t && n)) for (a = t.setHours(0, 0, 0, 0), s = n.setHours(0, 0, 0, 0); n >= t && o < 126;) {
          ye('.mbsc-cal-day[data-full="' + i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + '"]', d).addClass(j + " " + (i.getTime() === a ? r : "") + (i.getTime() === s ? l : "")).attr("aria-selected", "true"), i.setDate(i.getDate() + (k ? -1 : 1)), i.setHours(0, 0, 0, 0), o++;
        }
      }
  
      function l(e, t) {
        return {
          h: e ? e.getHours() : t ? 23 : 0,
          i: e ? e.getMinutes() : t ? 59 : 0,
          s: e ? e.getSeconds() : t ? 59 : 0
        };
      }
  
      function c() {
        x && (f = !0, e.setDate(x, !1, 0, !0), x = e.getDate(!0)), T && (f = !0, e.setDate(T, !1, 0, !0), T = e.getDate(!0));
      }
  
      var u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g,
          x,
          y,
          T,
          _,
          w,
          C,
          S = e._startDate,
          M = e._endDate,
          k = 0,
          D = new Date(),
          O = Se({}, e.settings),
          N = Se(e.settings, To, O),
          P = N.anchor,
          E = N.rangeTap,
          V = 864e5,
          A = Math.max(1, Math.ceil(N.minRange / V)),
          F = Math.max(1, Math.ceil(N.maxRange / V)),
          I = "mbsc-disabled " + (N.disabledClass || ""),
          j = "mbsc-selected " + (N.selectedClass || ""),
          L = "mbsc-cal-day-hl",
          H = null === N.defaultValue ? [] : N.defaultValue || [new Date(D.setHours(0, 0, 0, 0)), new Date(D.getFullYear(), D.getMonth(), D.getDate() + 6, 23, 59, 59, 999)];
  
      return E && (N.tabs = !0), u = Ht.call(this, e), p = e._format, h = /time/i.test(N.controls.join(",")), w = "time" === N.controls.join(""), C = N.showSelector, v = N.max ? a(ue(N.max, p, N), !0) : 1 / 0, b = N.min ? a(ue(N.min, p, N), !1) : -1 / 0, H[0] = ue(H[0], p, N, N.isoParts), H[1] = ue(H[1], p, N, N.isoParts), N.startInput && e.attachShow(ye(N.startInput), function () {
        k = 0, N.anchor = P || ye(N.startInput);
      }), N.endInput && e.attachShow(ye(N.endInput), function () {
        k = 1, N.anchor = P || ye(N.endInput);
      }), e._getDayProps = function (e, t) {
        var a = x ? new Date(x.getFullYear(), x.getMonth(), x.getDate()) : null,
            n = T ? new Date(T.getFullYear(), T.getMonth(), T.getDate()) : null;
        return {
          selected: a && n && e >= a && e <= T,
          cssClass: t.cssClass + " " + ((E || !k) && a && a.getTime() === e.getTime() || (E || k) && n && n.getTime() === e.getTime() ? L : "") + (a && a.getTime() === e.getTime() ? " mbsc-cal-sel-start" : "") + (n && n.getTime() === e.getTime() ? " mbsc-cal-sel-end" : "")
        };
      }, e.setVal = function (t, a, n, s, i) {
        var o,
            r = t || [];
        x = ue(r[0], p, N, N.isoParts), T = ue(r[1], p, N, N.isoParts), c(), e.startVal = x ? ae(p, x, N) : "", e.endVal = T ? ae(p, T, N) : "", o = u.parseValue(k ? T : x, e), s || (e._startDate = S = x, e._endDate = M = T), g = !0, e._setVal(o, a, n, s, i);
      }, e.getVal = function (t) {
        return t ? [ce(x, N, p), ce(T, N, p)] : e._hasValue ? [ce(S, N, p), ce(M, N, p)] : null;
      }, e.setActiveDate = function (t) {
        var a;
        k = "start" == t ? 0 : 1, a = "start" == t ? x : T, e.isVisible() && (o(), E || (ye(".mbsc-cal-table .mbsc-cal-day-hl", d).removeClass(L), a && ye('.mbsc-cal-day[data-full="' + a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + '"]', d).addClass(L)), a && (f = !0, e.setDate(a, !1, 1e3, !0)));
      }, e.getValue = e.getVal, Se({}, u, {
        highlight: !1,
        outerMonthChange: !1,
        formatValue: function formatValue() {
          return e.startVal + (N.endInput ? "" : e.endVal ? " - " + e.endVal : "");
        },
        parseValue: function parseValue(t) {
          var a = t ? t.split(" - ") : [],
              n = N.startInput ? ye(N.startInput).val() : a[0],
              s = N.endInput ? ye(N.endInput).val() : a[1];
          return N.defaultValue = H[1], M = s ? ne(p, s, N) : H[1], N.defaultValue = H[0], S = n ? ne(p, n, N) : H[2], N.defaultValue = H[k], e.startVal = S ? ae(p, S, N) : "", e.endVal = M ? ae(p, M, N) : "", e._startDate = S, e._endDate = M, u.parseValue(k ? M : S, e);
        },
        onFill: function onFill(t) {
          var a;
          a = t.change, e._startDate = S = x, e._endDate = M = T, N.startInput && (ye(N.startInput).val(e.startVal), a && ye(N.startInput).trigger("change")), N.endInput && (ye(N.endInput).val(e.endVal), a && ye(N.endInput).trigger("change"));
        },
        onBeforeClose: function onBeforeClose(t) {
          if ("set" === t.button && !i(!0, !0)) return e.setActiveDate(k ? "start" : "end"), !1;
        },
        onHide: function onHide() {
          u.onHide.call(e), k = 0, d = null, N.anchor = P;
        },
        onClear: function onClear() {
          E && (k = 0);
        },
        onBeforeShow: function onBeforeShow() {
          x = S || H[0], T = M || H[1], y = l(x, 0), _ = l(T, 1), N.counter && (N.headerText = function () {
            var e = x && T ? Math.max(1, Math.round((new Date(T).setHours(0, 0, 0, 0) - new Date(x).setHours(0, 0, 0, 0)) / 864e5) + 1) : 0;
            return (e > 1 && N.selectedPluralText || N.selectedText).replace(/{count}/, e);
          }), g = !0;
        },
        onMarkupReady: function onMarkupReady(t) {
          var a;
          c(), (k && T || !k && x) && (f = !0, e.setDate(k ? T : x, !1, 0, !0)), r(), u.onMarkupReady.call(this, t), (d = ye(t.target)).addClass("mbsc-range"), C && (a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + N.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (e.startVal || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + N.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (e.endVal || "&nbsp;") + "</div></div></div></div>", N.headerText ? ye(".mbsc-fr-hdr", d).after(a) : ye(".mbsc-fr-w", d).prepend(a), o()), ye(".mbsc-range-btn", d).on("touchstart click", function (t) {
            ot(t, this) && (e._showDayPicker(), e.setActiveDate(ye(this).attr("data-select")));
          });
        },
        onDayChange: function onDayChange(e) {
          e.active = k ? "end" : "start", m = !0;
        },
        onSetDate: function onSetDate(n) {
          var s;
          f || (s = a(n.date, k), g && !m || (E && m && (1 == k && s < x && (k = 0), k ? s.setHours(_.h, _.i, _.s, 999) : s.setHours(y.h, y.i, y.s, 0)), k ? (T = new Date(s), _ = l(T)) : (x = new Date(s), y = l(x)), w && N.autoCorrect && (t(x, s), t(T, s)), E && m && !k && (T = null))), w && !N.autoCorrect && T < x && (T = new Date(T.setDate(T.getDate() + 1))), e._isValid = i(g || m || N.autoCorrect, !f), n.active = k ? "end" : "start", !f && E && (m && (k = k ? 0 : 1), o()), e.isVisible() && (e._isValid ? ye(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).removeClass(I) : ye(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).addClass(I)), m = !1, g = !1, f = !1;
        },
        onTabChange: function onTabChange(t) {
          "calendar" != t.tab && e.setDate(k ? T : x, !1, 1e3, !0), i(!0, !0);
        }
      });
    };
  
    var _o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    };
  
    var wo = a.string,
        Co = a.bool,
        So = a.number,
        Mo = a.func,
        ko = a.object,
        Do = {
      autoCorrect: Co,
      controls: a.arrayOf(a.oneOf(["time", "date", "calendar"])),
      endInput: a.oneOfType([wo, ko]),
      maxRange: So,
      minRange: So,
      showSelector: Co,
      startInput: a.oneOfType([wo, ko]),
      fromText: wo,
      toText: wo,
      onSetDate: Mo
    },
        Oo = function (a) {
      function n(e) {
        return r(this, n), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
      }
  
      return u(n, at), l(n, [{
        key: "componentDidMount",
        value: function value() {
          function e(e) {
            var a = ye(t.findDOMNode(e));
            return a.is("input") ? a : a.find("input");
          }
  
          var a = t.findDOMNode(this),
              n = ye(a).find("input"),
              s = {};
          this.refs.start || this.refs.end ? (this.refs.start && (s.startInput = e(this.refs.start)), this.refs.end && (s.endInput = e(this.refs.end)), s.skipShow = !0) : 2 == n.length ? (s.startInput = n[0], s.endInput = n[1], s.skipShow = !0) : n.length && (a = n[0]);
          var i = Se({
            preset: "range"
          }, s, this.getSettingsFromProps(this.props));
          this.instance = new we.Scroller(a, i), void 0 !== this.props.value && (this.instance.setVal(this.props.value, !0), this.updateForIonInput());
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              a = this.props,
              n = a.readOnly,
              s = a.disabled,
              i = a.placeholder,
              o = a.type,
              r = a.children;
  
          if (o = o || "text", this.isIonInput(r)) {
            this.valueState = !0;
            var l = this.instance ? this.instance._value : "";
            return e.cloneElement(r, _o({
              value: l
            }, r.props));
          }
  
          return e.Children.count(r) > 0 ? e.createElement("div", null, e.Children.map(r, function (a) {
            var n = {};
            return a.type !== No && a.type !== Po || (n.wrapper = t, n.ref = a.type === No ? "start" : "end"), e.cloneElement(a, n);
          })) : e.createElement("input", {
            className: this.initialCssClass,
            type: o,
            readOnly: n,
            disabled: s,
            placeholder: i
          });
        }
      }]), n;
    }();
  
    Oo.propTypes = _o({}, Oo.propTypes, Re, $e, We, Do), n.Range = Oo;
  
    var No = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.rangeIndex = 0, t;
      }
  
      return u(a, t), l(a, [{
        key: "componentDidUpdate",
        value: function value() {
          if (this.props.value) {
            var e = this.props.wrapper.instance.getVal() || [null, null];
            qe(this.props.value, e[this.rangeIndex]) || (e[this.rangeIndex] = this.props.value, this.props.wrapper.instance.setVal(e, !0));
          }
        }
      }, {
        key: "render",
        value: function value() {
          /* eslint-disable no-unused-vars */
          var t = this.props,
              a = (t.value, t.wrapper, function (e, t) {
            var a = {};
  
            for (var n in e) {
              t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
            }
  
            return a;
          }(t, ["value", "wrapper"]));
          return this.props.children ? e.createElement("div", null, this.props.children) : e.createElement("input", a);
        }
      }]), a;
    }(e.Component);
  
    No.propTypes = {
      value: a.oneOfType([a.string, a.object])
    }, n.RangeStart = No;
  
    var Po = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.rangeIndex = 1, a;
      }
  
      return u(t, No), t;
    }();
  
    Po.propTypes = _o({}, No.propTypes), n.RangeEnd = Po;
  
    var Eo = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Vo = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          component: "Scroller"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Vo.propTypes = Eo({}, Vo.propTypes, Re), n.Scroller = Vo;
  
    var Ao = function (t) {
      function a(e) {
        r(this, a);
        var t = d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        return t.elm = t.elm.bind(t), t;
      }
  
      return u(a, ji), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new Di(this.domNode, e);
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          c(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "componentDidUpdate", this).call(this), this.optimizeUpdate.updateChildren && this.instance.refresh();
        }
      }, {
        key: "elm",
        value: function value(e) {
          this.domNode = e;
        }
      }, {
        key: "render",
        value: function value() {
          return e.createElement("div", null, e.createElement("div", {
            ref: this.elm,
            className: this.initialCssClass + " mbsc-cloak"
          }, this.props.children));
        }
      }]), a;
    }();
  
    n.ScrollView = Ao;
    var Fo = 0;
  
    function Io(e, t, a) {
      "jsonp" == a ? function (e, t) {
        var a = document.createElement("script"),
            n = "mbscjsonp" + ++Fo;
        window[n] = function (e) {
          a.parentNode.removeChild(a), delete window[n], e && t(e);
        }, a.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + n, document.body.appendChild(a);
      }(e, t) : function (e, t) {
        var a = new XMLHttpRequest();
        a.open("GET", e, !0), a.onload = function () {
            console.log("XXX", this.response);
          this.status >= 200 && this.status < 400 && t(JSON.parse(this.response));
        }, a.onerror = function () {}, a.send();
      }(e, t);
    }
  
    s.getJson = Io;
    var jo = {
      inputClass: "",
      rtl: !1,
      showInput: !0,
      groupLabel: "Groups",
      dataHtml: "html",
      dataText: "text",
      dataValue: "value",
      dataGroup: "group",
      dataDisabled: "disabled",
      filterPlaceholderText: "Type to filter",
      filterEmptyText: "No results",
      filterClearIcon: "material-close"
    };
  
    Pt.select = function (e, t) {
      var a,
          n,
          s,
          i,
          o,
          r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b = "",
          g = {},
          x = 1e3,
          y = this,
          T = ye(y),
          _ = Se({}, e.settings),
          w = Se(e.settings, jo, _),
          C = ye('<div class="mbsc-sel-empty">' + w.filterEmptyText + "</div>"),
          S = w.readonly,
          M = {},
          k = w.layout || (/top|bottom|inline/.test(w.display) || w.filter ? "liquid" : ""),
          D = "liquid" == k || !w.touchUi,
          O = L(w.select) ? w.select : "multiple" == w.select || T.prop("multiple"),
          N = O || !(!w.filter && !w.tapSelect) && 1,
          P = this.id + "_dummy",
          E = ye('label[for="' + this.id + '"]').attr("for", P),
          V = void 0 !== w.label ? w.label : E.length ? E.text() : T.attr("name"),
          A = w.group,
          z = !!w.data,
          U = z ? !!w.group : ye("optgroup", T).length,
          Y = U && A && !1 !== A.groupWheel,
          R = U && A && Y && !0 === A.clustered,
          $ = U && (!A || !1 !== A.header && !R),
          W = T.val() || (O ? [] : [""]),
          J = [];
  
      function q(e) {
        var t,
            a,
            s,
            i,
            o,
            l,
            u = 0,
            d = 0,
            m = {};
        if (M = {}, c = {}, p = [], r = [], J.length = 0, z) ye.each(n, function (n, u) {
          o = u[w.dataText] + "", a = u[w.dataHtml], l = u[w.dataValue], s = u[w.dataGroup], i = {
            value: l,
            html: a,
            text: o,
            index: n,
            cssClass: $ ? "mbsc-sel-gr-itm" : ""
          }, M[l] = i, e && !te(o, e) || (p.push(i), U && (void 0 === m[s] ? (t = {
            text: s,
            value: d,
            options: [],
            index: d
          }, c[d] = t, m[s] = d, r.push(t), d++) : t = c[m[s]], R && (i.index = t.options.length), i.group = m[s], t.options.push(i)), u[w.dataDisabled] && J.push(l));
        });else if (U) {
          var h = !0;
          ye("optgroup", T).each(function (t) {
            c[t] = {
              text: this.label,
              value: t,
              options: [],
              index: t
            }, h = !0, ye("option", this).each(function (a) {
              i = {
                value: this.value,
                text: this.text,
                index: R ? a : u++,
                group: t,
                cssClass: $ ? "mbsc-sel-gr-itm" : ""
              }, M[this.value] = i, e && !te(this.text, e) || (h && (r.push(c[t]), h = !1), p.push(i), c[t].options.push(i), this.disabled && J.push(this.value));
            });
          });
        } else ye("option", T).each(function (t) {
          i = {
            value: this.value,
            text: this.text,
            index: t
          }, M[this.value] = i, e && !te(this.text, e) || (p.push(i), this.disabled && J.push(this.value));
        });
        b = w.defaultValue ? w.defaultValue : p.length ? p[0].value : "", $ && (p = [], u = 0, ye.each(c, function (e, t) {
          t.options.length && (l = "__group" + e, i = {
            text: t.text,
            value: l,
            group: e,
            index: u++,
            cssClass: "mbsc-sel-gr"
          }, M[l] = i, p.push(i), J.push(i.value), ye.each(t.options, function (e, t) {
            t.index = u++, p.push(t);
          }));
        })), C && (p.length ? C.removeClass("mbsc-sel-empty-v") : C.addClass("mbsc-sel-empty-v"));
      }
  
      function B(e, t, a, n, s) {
        var i,
            o = [];
  
        for (i = 0; i < e.length; i++) {
          o.push({
            value: e[i].value,
            display: e[i].html || e[i].text,
            cssClass: e[i].cssClass
          });
        }
  
        return {
          circular: !1,
          multiple: t && !n ? 1 : n,
          cssClass: (t && !n ? "mbsc-sel-one" : "") + " " + s,
          data: o,
          label: a
        };
      }
  
      function K() {
        return B(R && c[o] ? c[o].options : p, N, V, O, "");
      }
  
      function G() {
        var e = [[]];
        return Y && (l = B(r, N, w.groupLabel, !1, "mbsc-sel-gr-whl"), D ? e[0][u] = l : e[u] = [l]), h = K(), D ? e[0][f] = h : e[f] = [h], e;
      }
  
      function X(e) {
        O && (e && H(e) && (e = e.split(",")), ye.isArray(e) && (e = e[0])), !M[m = void 0 === e || null === e || "" === e ? b : e] && p && p.length && (m = p[0].value), Y && (o = M[m] ? M[m].group : null);
      }
  
      function Z(e) {
        return g[e] || (M[e] ? M[e].text : "");
      }
  
      function Q() {
        var t,
            n = "",
            s = e.getVal(),
            i = w.formatValue.call(y, e.getArrayVal(), e, !0);
  
        if (w.filter && "inline" == w.display || a.val(i), T.is("select") && z) {
          if (O) for (t = 0; t < s.length; t++) {
            n += '<option value="' + s[t] + '">' + Z(s[t]) + "</option>";
          } else n = '<option value="' + (null === s ? "" : s) + '">' + i + "</option>";
          T.html(n);
        }
  
        y !== a[0] && T.val(s);
      }
  
      function ee() {
        var t = {};
        t[f] = K(), v = !0, e.changeWheel(t);
      }
  
      function te(e, t) {
        return t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), e.match(new RegExp(t, "ig"));
      }
  
      function ae(e) {
        return w.data.dataField ? e[w.data.dataField] : w.data.processResponse ? w.data.processResponse(e) : e;
      }
  
      function ne(t) {
        var a = {};
        q(t), X(m), w.wheels = G(), a[f] = h, e._tempWheelArray[f] = m, Y && (a[u] = l, e._tempWheelArray[u] = o), e.changeWheel(a, 0, !0), Q();
      }
  
      function se(t) {
        return e.trigger("onFilter", {
          filterText: t
        });
      }
  
      function ie(t) {
        t[u] != o && (o = t[u], m = c[o].options[0].value, t[f] = m, R ? ee() : e.setArrayVal(t, !1, !1, !0, x));
      }
  
      return e.setVal = function (t, a, n, s, i) {
        if (N && (null === t || void 0 === t || O || (t = [t]), t && H(t) && (t = t.split(",")), e._tempSelected[f] = j(t), s || (e._selected[f] = j(t)), t = t ? t[0] : null, Y)) {
          var o = M[t],
              r = o && o.group;
          e._tempSelected[u] = j([r]), s || (e._selected[u] = j([r]));
        }
  
        e._setVal(t, a, n, s, i);
      }, e.getVal = function (t, a) {
        var n;
        return N ? (n = I(t ? e._tempSelected[f] : e._selected[f]), n = O ? n : n.length ? n[0] : null) : n = (n = t ? e._tempWheelArray : e._hasValue ? e._wheelArray : null) ? n[f] : null, O ? n : void 0 !== n ? U && a ? [M[n] ? M[n].group : null, n] : n : null;
      }, e.refresh = function (e, t, a) {
        a = a || F, e ? (n = e, d || (w.data = e)) : ye.isArray(w.data) && (n = w.data), !e && d && void 0 === t ? Io(w.data.url, function (e) {
          n = ae(e), ne(), a();
        }, w.data.dataType) : (ne(t), a());
      }, t.invalid || (w.invalid = J), Y ? (u = 0, f = 1) : (u = -1, f = 0), N && (O && T.prop("multiple", !0), W && H(W) && (W = W.split(",")), e._selected[f] = j(W)), e._$input && e._$input.remove(), T.next().is(".mbsc-select-input") ? a = T.next().removeAttr("tabindex") : w.input ? a = ye(w.input) : (w.filter && "inline" == w.display ? e._$input = ye('<div class="mbsc-sel-input-wrap"><input type="text" id="' + P + '" class="mbsc-select-input mbsc-control ' + w.inputClass + '" readonly /></div>') : (a = ye('<input type="text" id="' + P + '" class="mbsc-select-input mbsc-control ' + w.inputClass + '" readonly />'), e._$input = a), w.showInput && (e._$input.insertAfter(T), a || (a = e._$input.find("#" + P)))), e.attachShow(a.attr("placeholder", w.placeholder || "")), a[0] !== y && T.addClass("mbsc-sel-hdn").attr("tabindex", -1), !N || w.rows % 2 || (w.rows = w.rows - 1), w.filter && (s = w.filter.minLength || 0), (d = w.data && w.data.url) ? e.refresh() : (z && (n = w.data), q(), X(T.val())), {
        layout: k,
        headerText: !1,
        anchor: a,
        compClass: "mbsc-sc mbsc-sel" + (N ? " mbsc-sel-multi" : ""),
        setOnTap: !Y || [!1, !0],
        formatValue: function formatValue(e, t, a) {
          var n,
              s = [],
              i = a ? t._selected : t._tempSelected;
  
          if (N) {
            for (n in i[f]) {
              s.push(Z(n));
            }
  
            return s.join(", ");
          }
  
          return Z(e[f]);
        },
        tapSelect: N,
        parseValue: function parseValue(e) {
          return X(void 0 === e ? T.val() : e), Y ? [o, m] : [m];
        },
        validate: function validate(e) {
          var t = e.index,
              a = [];
          return a[f] = w.invalid, R && !v && void 0 === t && ee(), v = !1, {
            disabled: a
          };
        },
        onRead: Q,
        onFill: Q,
        onMarkupReady: function onMarkupReady(e, t) {
          if (w.filter) {
            var n,
                o,
                r,
                l = ye(".mbsc-fr-w", e.target),
                c = ye('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + w.filterClearIcon + '"></span>');
            "inline" == w.display ? (n = a, a.parent().find(".mbsc-sel-filter-clear").remove()) : (l.find(".mbsc-fr-c").before('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input tabindex="0" type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>'), n = l.find(".mbsc-sel-filter-input")), i = null, r = n[0], n.prop("readonly", !1).attr("placeholder", w.filterPlaceholderText).parent().append(c), l.find(".mbsc-fr-c").prepend(C), t._activeElm = r, t.tap(c, function () {
              i = null, r.value = "", t.refresh(), c.removeClass("mbsc-sel-filter-show-clear"), se("");
            }), n.on("keydown", function (e) {
              13 != e.keyCode && 27 != e.keyCode || (e.stopPropagation(), r.blur());
            }).on("keyup", function () {
              clearTimeout(o), r.value.length ? c.addClass("mbsc-sel-filter-show-clear") : c.removeClass("mbsc-sel-filter-show-clear"), o = setTimeout(function () {
                i !== r.value && !1 !== se(r.value) && ((i = r.value).length >= s || !i.length) && (d && w.data.remoteFilter ? Io(w.data.url + encodeURIComponent(i), function (e) {
                  t.refresh(ae(e));
                }, w.data.dataType) : t.refresh(void 0, i));
              }, 500);
            });
          }
        },
        onBeforeShow: function onBeforeShow() {
          O && w.counter && (w.headerText = function () {
            var t = 0;
            return ye.each(e._tempSelected[f], function () {
              t++;
            }), (t > 1 && w.selectedPluralText || w.selectedText).replace(/{count}/, t);
          }), X(T.val()), N && Y && (e._selected[u] = j([o])), w.filter && q(void 0), e.settings.wheels = G(), v = !0;
        },
        onWheelGestureStart: function onWheelGestureStart(e) {
          e.index == u && (w.readonly = [!1, !0]);
        },
        onWheelAnimationEnd: function onWheelAnimationEnd(t) {
          var a = e.getArrayVal(!0);
          t.index == u ? (w.readonly = S, N || ie(a)) : t.index == f && a[f] != m && (m = a[f], Y && M[m] && M[m].group != o && (o = M[m].group, a[u] = o, e._tempSelected[u] = j([o]), e.setArrayVal(a, !1, !1, !0, x)));
        },
        onItemTap: function onItemTap(t) {
          var a;
          if (t.index == f && (g[t.value] = M[t.value].text, N && !O && t.selected)) return !1;
  
          if (t.index == u && N) {
            if (t.selected) return !1;
            (a = e.getArrayVal(!0))[u] = t.value, ie(a);
          }
        },
        onClose: function onClose() {
          d && w.data.remoteFilter && i && e.refresh();
        },
        onDestroy: function onDestroy() {
          e._$input && e._$input.remove(), T.removeClass("mbsc-sel-hdn").removeAttr("tabindex");
        }
      };
    };
  
    var Lo = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Ho = a.bool,
        zo = a.string,
        Uo = a.array,
        Yo = a.number,
        Ro = function (a) {
      function s(e) {
        return r(this, s), d(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
      }
  
      return u(s, tt), l(s, [{
        key: "componentDidMount",
        value: function value() {
          var e,
              a = t.findDOMNode(this);
          (e = n.$(a).find("input")).length && (a = e);
          var s = this.getSettingsFromProps(this.props, {
            preset: "select",
            data: null === this.props.data ? [] : this.props.data,
            input: this.isIonInput(this.props.children) ? a : void 0
          });
          this.instance = new Ft(a, s), void 0 !== this.props.value && (this.instance.setVal(this.props.value, !0), this.updateForIonInput());
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          if (this.optimizeUpdate) {
            var e = this.optimizeUpdate,
                t = e.updateChildren,
                a = e.updateData,
                n = e.updateOptions,
                s = e.updateValue,
                i = this.props.data;
  
            if (n && (a || t)) {
              var o = this.getSettingsFromProps(this.props, a ? {
                data: i
              } : {});
              this.instance.option(o);
            } else a || t && !i ? this.instance.refresh(i && i.url ? void 0 : i) : n && this.instance.option(this.getSettingsFromProps(this.props));
  
            s && (this.instance.setVal(this.props.value, !0), this.updateForIonInput());
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function value(e) {
          var t = this.getSettingsFromProps(this.props),
              a = !qe(this.getSettingsFromProps(e), t),
              n = !qe(e.data, this.props.data),
              s = !qe(e.children, this.props.children),
              i = !qe(e.value, this.props.value) && void 0 !== e.value && !qe(e.value, this.instance.getVal());
          return this.optimizeUpdate = {
            updateOptions: a,
            updateData: n,
            updateValue: i,
            updateChildren: s
          }, a || n || i || s;
        }
      }, {
        key: "isSelectOrInput",
        value: function value(t) {
          return 1 == e.Children.count(t) && ("select" == t.type || "input" == t.type);
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              a = t.readOnly,
              n = t.disabled,
              s = t.data,
              i = t.value,
              o = t.children,
              r = i;
  
          if (this.isIonInput(o)) {
            this.valueState = !0;
            var l = this.instance ? this.instance._value : "";
            return e.cloneElement(o, Lo({
              value: l
            }, o.props));
          }
  
          return this.isSelectOrInput(o) ? o : void 0 !== s ? e.Children.count(o) > 0 ? o : e.createElement("input", {
            defaultValue: r,
            type: "text",
            className: this.initialCssClass,
            readOnly: a,
            disabled: n
          }) : e.createElement("select", {
            className: this.initialCssClass + " mbsc-cloak",
            readOnly: a,
            disabled: n
          }, this.props.children);
        }
      }]), s;
    }();
  
    Ro.propTypes = Lo({}, Ro.propTypes, Ue, Ye, Re, {
      counter: Ho,
      data: a.oneOfType([Uo, a.shape({
        url: zo,
        dataField: zo,
        dataType: a.oneOf(["json", "jsonp"]),
        processResponse: a.func,
        remoteFilter: Ho
      })]),
      dataText: zo,
      dataGroup: zo,
      dataValue: zo,
      group: a.oneOfType([Ho, a.shape({
        groupedWheel: Ho,
        header: Ho,
        clustered: Ho
      })]),
      filter: Ho,
      filterPlaceholderText: zo,
      filterEmptyText: zo,
      groupLabel: zo,
      input: a.oneOfType([zo, a.object]),
      inputClass: zo,
      invalid: Uo,
      label: zo,
      placeholder: zo,
      select: a.oneOfType([Yo, a.oneOf(["single", "multiple"])]),
      showInput: Ho,
      onFilter: a.func
    }), n.Select = Ro;
    var $o = {
      autostart: !1,
      step: 1,
      useShortLabels: !1,
      labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds", ""],
      labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
      startText: "Start",
      stopText: "Stop",
      resetText: "Reset",
      lapText: "Lap",
      hideText: "Hide",
      mode: "countdown"
    };
  
    Pt.timer = function (e) {
      function t(e) {
        return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
      }
  
      function a(e) {
        var t = 1,
            a = w[e],
            s = a.wheel,
            i = a.prefix,
            o = a.until,
            l = w[_[ye.inArray(e, _) - 1]];
  
        if (a.index <= w[P].index && (!l || l.limit > N)) if (C[e] || F[0].push(s), C[e] = 1, s.data = [], s.label = a.label || "", s.cssClass = "mbsc-timer-whl-" + e, N >= a.limit && (t = Math.max(Math.round(N / a.limit), 1), c = t * a.limit), e == P) s.min = 0, s.data = function (e) {
          return {
            value: e,
            display: n(e, i, a.label)
          };
        }, s.getIndex = function (e) {
          return e;
        };else for (r = 0; r <= o; r += t) {
          s.data.push({
            value: r,
            display: n(r, i, a.label)
          });
        }
      }
  
      function n(e, t, a) {
        return (t || "") + (e < 10 ? "0" : "") + e + '<span class="mbsc-timer-lbl">' + a + "</span>";
      }
  
      function s(e) {
        var a,
            n = [],
            s = function (e) {
          var a = {};
  
          if (A && w[P].index > w.days.index) {
            var n,
                s,
                i,
                o,
                r = new Date(),
                l = f ? r : V,
                c = f ? V : r;
  
            for (c = t(c), l = t(l), a.years = l.getFullYear() - c.getFullYear(), a.months = l.getMonth() - c.getMonth(), a.days = l.getDate() - c.getDate(), a.hours = l.getHours() - c.getHours(), a.minutes = l.getMinutes() - c.getMinutes(), a.seconds = l.getSeconds() - c.getSeconds(), a.fract = (l.getMilliseconds() - c.getMilliseconds()) / 10, n = _.length; n > 0; n--) {
              s = _[n - 1], i = w[s], o = _[ye.inArray(s, _) - 1], w[o] && a[s] < 0 && (a[o]--, a[s] += "months" == o ? 32 - new Date(l.getFullYear(), l.getMonth(), 32).getDate() : i.until + 1);
            }
  
            "months" == P && (a.months += 12 * a.years, delete a.years);
          } else ye(_).each(function (t, n) {
            w[n].index <= w[P].index && (a[n] = Math.floor(e / w[n].limit), e -= a[n] * w[n].limit);
          });
  
          return a;
        }(e);
  
        return ye(_).each(function (e, t) {
          C[t] && (a = Math.max(Math.round(N / w[t].limit), 1), n.push(Math.round(s[t] / a) * a));
        }), n;
      }
  
      function i(e) {
        A ? ((p = V - new Date()) < 0 ? (p *= -1, f = !0) : f = !1, h = 0, O = !0) : void 0 !== V ? (O = !1, p = 1e3 * V, f = "countdown" != x.mode, e && (h = 0)) : (p = 0, f = "countdown" != x.mode, O = f, e && (h = 0));
      }
  
      function o() {
        k ? (ye(".mbsc-fr-w", v).addClass("mbsc-timer-running mbsc-timer-locked"), ye(".mbsc-timer-btn-toggle-c > div", v).text(x.stopText), e.buttons.start.icon && ye(".mbsc-timer-btn-toggle-c > div", v).removeClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && ye(".mbsc-timer-btn-toggle-c > div", v).addClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == x.mode && (ye(".mbsc-timer-btn-resetlap-c > div", v).text(x.lapText), e.buttons.reset.icon && ye(".mbsc-timer-btn-resetlap-c > div", v).removeClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && ye(".mbsc-timer-btn-resetlap-c > div", v).addClass("mbsc-ic-" + e.buttons.lap.icon))) : (ye(".mbsc-fr-w", v).removeClass("mbsc-timer-running"), ye(".mbsc-timer-btn-toggle-c > div", v).text(x.startText), e.buttons.start.icon && ye(".mbsc-timer-btn-toggle-c > div", v).addClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && ye(".mbsc-timer-btn-toggle-c > div", v).removeClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == x.mode && (ye(".mbsc-timer-btn-resetlap-c > div", v).text(x.resetText), e.buttons.reset.icon && ye(".mbsc-timer-btn-resetlap-c > div", v).addClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && ye(".mbsc-timer-btn-resetlap-c > div", v).removeClass("mbsc-ic-" + e.buttons.lap.icon)));
      }
  
      var r,
          l,
          c,
          u,
          d,
          m,
          p,
          h,
          f,
          v,
          b,
          g = Se({}, e.settings),
          x = Se(e.settings, $o, g),
          y = x.useShortLabels ? x.labelsShort : x.labels,
          T = ["resetlap", "toggle"],
          _ = ["years", "months", "days", "hours", "minutes", "seconds", "fract"],
          w = {
        years: {
          index: 6,
          until: 10,
          limit: 31536e6,
          label: y[0],
          wheel: {}
        },
        months: {
          index: 5,
          until: 11,
          limit: 2592e6,
          label: y[1],
          wheel: {}
        },
        days: {
          index: 4,
          until: 31,
          limit: 864e5,
          label: y[2],
          wheel: {}
        },
        hours: {
          index: 3,
          until: 23,
          limit: 36e5,
          label: y[3],
          wheel: {}
        },
        minutes: {
          index: 2,
          until: 59,
          limit: 6e4,
          label: y[4],
          wheel: {}
        },
        seconds: {
          index: 1,
          until: 59,
          limit: 1e3,
          label: y[5],
          wheel: {}
        },
        fract: {
          index: 0,
          until: 99,
          limit: 10,
          label: y[6],
          prefix: ".",
          wheel: {}
        }
      },
          C = {},
          S = [],
          M = 0,
          k = !1,
          D = !0,
          O = !1,
          N = Math.max(10, 1e3 * x.step),
          P = x.maxWheel,
          E = "stopwatch" == x.mode || A,
          V = x.targetTime,
          A = V && void 0 !== V.getTime,
          F = [[]];
      return e.start = function () {
        if (D && e.reset(), !k) {
          if (i(), !O && h >= p) return;
          k = !0, D = !1, d = new Date(), u = h, x.readonly = !0, e.setVal(s(f ? h : p - h), !0, !0, !1, 100), l = setInterval(function () {
            h = new Date() - d + u, e.setVal(s(f ? h : p - h), !0, !0, !1, Math.min(100, c - 10)), !O && h + c >= p && (clearInterval(l), setTimeout(function () {
              e.stop(), h = p, e.setVal(s(f ? h : 0), !0, !0, !1, 100), e.trigger("onFinish", {
                time: p
              }), D = !0;
            }, p - h));
          }, c), o(), e.trigger("onStart");
        }
      }, e.stop = function () {
        k && (k = !1, clearInterval(l), h = new Date() - d + u, o(), e.trigger("onStop", {
          ellapsed: h
        }));
      }, e.toggle = function () {
        k ? e.stop() : e.start();
      }, e.reset = function () {
        e.stop(), h = 0, S = [], M = 0, e.setVal(s(f ? 0 : p), !0, !0, !1, 1e3), e.settings.readonly = E, D = !0, E || ye(".mbsc-fr-w", v).removeClass("mbsc-timer-locked"), e.trigger("onReset");
      }, e.lap = function () {
        k && (m = new Date() - d + u, b = m - M, M = m, S.push(m), e.trigger("onLap", {
          ellapsed: m,
          lap: b,
          laps: S
        }));
      }, e.resetlap = function () {
        k && "stopwatch" == x.mode ? e.lap() : e.reset();
      }, e.getTime = function () {
        return p;
      }, e.setTime = function (e) {
        V = e / 1e3, p = e;
      }, e.getEllapsedTime = function () {
        return D ? 0 : k ? new Date() - d + u : h;
      }, e.setEllapsedTime = function (t, a) {
        D || (u = h = t, d = new Date(), e.setVal(s(f ? h : p - h), !0, a, !1, 1e3));
      }, i(!0), P || p || (P = "minutes"), "inline" !== x.display && T.unshift("hide"), P || ye(_).each(function (e, t) {
        if (!P && p >= w[t].limit) return P = t, !1;
      }), ye(_).each(function (e, t) {
        a(t);
      }), c = Math.max(97, c), x.autostart && setTimeout(function () {
        e.start();
      }, 0), e.handlers.toggle = e.toggle, e.handlers.start = e.start, e.handlers.stop = e.stop, e.handlers.resetlap = e.resetlap, e.handlers.reset = e.reset, e.handlers.lap = e.lap, e.buttons.toggle = {
        parentClass: "mbsc-timer-btn-toggle-c",
        text: x.startText,
        icon: x.startIcon,
        handler: "toggle"
      }, e.buttons.start = {
        text: x.startText,
        icon: x.startIcon,
        handler: "start"
      }, e.buttons.stop = {
        text: x.stopText,
        icon: x.stopIcon,
        handler: "stop"
      }, e.buttons.reset = {
        text: x.resetText,
        icon: x.resetIcon,
        handler: "reset"
      }, e.buttons.lap = {
        text: x.lapText,
        icon: x.lapIcon,
        handler: "lap"
      }, e.buttons.resetlap = {
        parentClass: "mbsc-timer-btn-resetlap-c",
        text: x.resetText,
        icon: x.resetIcon,
        handler: "resetlap"
      }, e.buttons.hide = {
        parentClass: "mbsc-timer-btn-hide-c",
        text: x.hideText,
        icon: x.closeIcon,
        handler: "cancel"
      }, {
        wheels: F,
        headerText: !1,
        readonly: E,
        buttons: T,
        compClass: "mbsc-timer mbsc-sc",
        parseValue: function parseValue() {
          return s(f ? 0 : p);
        },
        formatValue: function formatValue(e) {
          var t = "",
              a = 0;
          return ye(_).each(function (n, s) {
            "fract" != s && C[s] && (t += e[a] + ("seconds" == s && C.fract ? "." + e[a + 1] : "") + " " + y[n] + " ", a++);
          }), t;
        },
        validate: function validate(e) {
          var t = e.values,
              a = e.index,
              n = 0;
          D && void 0 !== a && (V = 0, ye(_).each(function (e, a) {
            C[a] && (V += w[a].limit * t[n], n++);
          }), V /= 1e3, i(!0));
        },
        onBeforeShow: function onBeforeShow() {
          x.showLabel = !0;
        },
        onMarkupReady: function onMarkupReady(e) {
          v = ye(e.target), o(), E && ye(".mbsc-fr-w", v).addClass("mbsc-timer-locked");
        },
        onPosition: function onPosition(e) {
          ye(".mbsc-fr-w", e.target).css("min-width", 0).css("min-width", ye(".mbsc-fr-btn-cont", e.target)[0].offsetWidth);
        },
        onDestroy: function onDestroy() {
          clearInterval(l);
        }
      };
    };
  
    var Wo = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        Jo = a.bool,
        qo = a.number,
        Bo = a.string,
        Ko = a.func,
        Go = {
      autostart: Jo,
      maxWheel: a.oneOf(["years", "months", "days", "hours", "minutes", "seconds", "fract"]),
      mode: a.oneOf(["countdown", "stopwatch"]),
      step: qo,
      targetTime: qo,
      useShortLabels: Jo,
      hideText: Bo,
      labels: a.arrayOf(Bo),
      labelsShort: a.arrayOf(Bo),
      lapText: Bo,
      resetText: Bo,
      startText: Bo,
      stopText: Bo,
      lap: Ko,
      onFinish: Ko,
      onReset: Ko,
      onStart: Ko,
      onStop: Ko
    },
        Xo = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "timer"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    Xo.propTypes = Wo({}, Xo.propTypes, Re, Go), n.Timer = Xo;
    var Zo = {
      wheelOrder: "hhiiss",
      useShortLabels: !1,
      min: 0,
      max: 1 / 0,
      labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"],
      labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"]
    };
  
    Pt.timespan = function (e) {
      function t(e) {
        var t = {};
        return ye(h).each(function (a, n) {
          t[n] = g[n] ? Math.floor(e / f[n].limit) : 0, e -= t[n] * f[n].limit;
        }), t;
      }
  
      function a(e) {
        var t = !1,
            a = b[g[e] - 1] || 1,
            s = f[e],
            o = s.label,
            r = s.wheel;
        if (r.data = [], r.label = s.label, m.match(new RegExp(s.re + s.re, "i")) && (t = !0), e == x) r.min = l[e], r.max = c[e], r.data = function (e) {
          return {
            value: e * a,
            display: n(e * a, t, o)
          };
        }, r.getIndex = function (e) {
          return Math.round(e / a);
        };else for (i = 0; i <= s.until; i += a) {
          r.data.push({
            value: i,
            display: n(i, t, o)
          });
        }
      }
  
      function n(e, t, a) {
        return (e < 10 && t ? "0" : "") + e + '<span class="mbsc-ts-lbl">' + a + "</span>";
      }
  
      function s(e) {
        var t = 0;
        return ye.each(v, function (a, n) {
          isNaN(+e[0]) || (t += f[n.v].limit * e[a]);
        }), t;
      }
  
      var i,
          o,
          r,
          l,
          c,
          u = Se({}, e.settings),
          d = Se(e.settings, Zo, u),
          m = d.wheelOrder,
          p = d.useShortLabels ? d.labelsShort : d.labels,
          h = ["years", "months", "days", "hours", "minutes", "seconds"],
          f = {
        years: {
          ord: 0,
          index: 6,
          until: 10,
          limit: 31536e6,
          label: p[0],
          re: "y",
          wheel: {}
        },
        months: {
          ord: 1,
          index: 5,
          until: 11,
          limit: 2592e6,
          label: p[1],
          re: "m",
          wheel: {}
        },
        days: {
          ord: 2,
          index: 4,
          until: 31,
          limit: 864e5,
          label: p[2],
          re: "d",
          wheel: {}
        },
        hours: {
          ord: 3,
          index: 3,
          until: 23,
          limit: 36e5,
          label: p[3],
          re: "h",
          wheel: {}
        },
        minutes: {
          ord: 4,
          index: 2,
          until: 59,
          limit: 6e4,
          label: p[4],
          re: "i",
          wheel: {}
        },
        seconds: {
          ord: 5,
          index: 1,
          until: 59,
          limit: 1e3,
          label: p[5],
          re: "s",
          wheel: {}
        }
      },
          v = [],
          b = d.steps || [],
          g = {},
          x = "seconds",
          y = d.defaultValue || Math.max(d.min, Math.min(0, d.max)),
          T = [[]];
      return ye(h).each(function (e, t) {
        (o = m.search(new RegExp(f[t].re, "i"))) > -1 && (v.push({
          o: o,
          v: t
        }), f[t].index > f[x].index && (x = t));
      }), v.sort(function (e, t) {
        return e.o > t.o ? 1 : -1;
      }), ye.each(v, function (e, t) {
        g[t.v] = e + 1, T[0].push(f[t.v].wheel);
      }), l = t(d.min), c = t(d.max), ye.each(v, function (e, t) {
        a(t.v);
      }), e.getVal = function (t, a) {
        return a ? e._getVal(t) : e._hasValue || t ? s(e.getArrayVal(t)) : null;
      }, {
        showLabel: !0,
        wheels: T,
        compClass: "mbsc-ts mbsc-sc",
        parseValue: function parseValue(e) {
          var a,
              n = [];
          return L(e) || !e ? (r = t(e || y), ye.each(v, function (e, t) {
            n.push(r[t.v]);
          })) : ye.each(v, function (t, s) {
            a = new RegExp("(\\d+)\\s?(" + d.labels[f[s.v].ord] + "|" + d.labelsShort[f[s.v].ord] + ")", "gi").exec(e), n.push(a ? a[1] : 0);
          }), ye(n).each(function (e, t) {
            n[e] = function (e, t) {
              return Math.floor(e / t) * t;
            }(t, b[e] || 1);
          }), n;
        },
        formatValue: function formatValue(e) {
          var t = "";
          return ye.each(v, function (a, n) {
            t += +e[a] ? e[a] + " " + f[n.v].label + " " : "";
          }), t ? t.replace(/\s+$/g, "") : 0;
        },
        validate: function validate(a) {
          var n,
              i,
              o,
              r,
              u = a.values,
              d = a.direction,
              m = [],
              p = !0,
              v = !0;
          return ye(h).each(function (a, h) {
            if (void 0 !== g[h]) {
              if (o = g[h] - 1, m[o] = [], r = {}, h != x) {
                if (p) for (i = c[h] + 1; i <= f[h].until; i++) {
                  r[i] = !0;
                }
                if (v) for (i = 0; i < l[h]; i++) {
                  r[i] = !0;
                }
              }
  
              u[o] = e.getValidValue(o, u[o], d, r), n = t(s(u)), p = p && n[h] == c[h], v = v && n[h] == l[h], ye.each(r, function (e) {
                m[o].push(e);
              });
            }
          }), {
            disabled: m
          };
        }
      };
    };
  
    var Qo = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        er = a.number,
        tr = a.string,
        ar = {
      defaultValue: er,
      max: er,
      min: er,
      steps: a.arrayOf(er),
      useShortLabels: a.bool,
      wheelOrder: tr,
      labels: a.arrayOf(tr),
      labelsShort: a.arrayOf(tr)
    },
        nr = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "timespan"
        }, a;
      }
  
      return u(t, nt), t;
    }();
  
    nr.propTypes = Qo({}, nr.propTypes, Re, ar), n.Timespan = nr, Pt.treelist = Is;
  
    var sr = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        ir = a.array,
        or = a.string,
        rr = {
      defaultValue: ir,
      inputClass: or,
      invalid: ir,
      labels: a.arrayOf(or),
      placeholder: or,
      showInput: a.bool
    },
        lr = function (e) {
      function t(e) {
        r(this, t);
        var a = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return a.mbscInit = {
          preset: "treelist"
        }, a;
      }
  
      return u(t, st), t;
    }();
  
    lr.propTypes = sr({}, lr.propTypes, rr), n.Treelist = lr;
  
    var cr = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
  
        for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }
  
      return e;
    },
        ur = function (t) {
      function a(e) {
        return r(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
      }
  
      return u(a, at), l(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this.getSettingsFromProps(this.props);
          this.instance = new Qa(this.refs.popup, e);
        }
      }, {
        key: "render",
        value: function value() {
          return e.createElement("div", {
            className: this.initialCssClass + " mbsc-cloak",
            style: this.props.style,
            ref: "popup"
          }, this.props.children);
        }
      }]), a;
    }();
  
    function dr(e) {
      return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7);
    }
  
    function mr(e, t, a) {
      e = parseInt(e), t = parseInt(t), a = parseInt(a);
      var n,
          s,
          i,
          o = new Array(0, 0, 0);
      return a = (n = (n = (n = (e > 1582 || 1582 == e && t > 10 || 1582 == e && 10 == t && a > 14 ? dr(1461 * (e + 4800 + dr((t - 14) / 12)) / 4) + dr(367 * (t - 2 - 12 * dr((t - 14) / 12)) / 12) - dr(3 * dr((e + 4900 + dr((t - 14) / 12)) / 100) / 4) + a - 32075 : 367 * e - dr(7 * (e + 5001 + dr((t - 9) / 7)) / 4) + dr(275 * t / 9) + a + 1729777) - 1948440 + 10632) - 10631 * (i = dr((n - 1) / 10631)) + 354) - dr((30 - (s = dr((10985 - n) / 5316) * dr(50 * n / 17719) + dr(n / 5670) * dr(43 * n / 15238))) / 15) * dr(17719 * s / 50) - dr(s / 16) * dr(15238 * s / 43) + 29) - dr(709 * (t = dr(24 * n / 709)) / 24), e = 30 * i + s - 30, o[2] = a, o[1] = t, o[0] = e, o;
    }
  
    ur.propTypes = cr({}, ur.propTypes, Ue, Ye), n.Popup = ur, n.Widget = ur, i.hijri = {
      getYear: function getYear(e) {
        return mr(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
      },
      getMonth: function getMonth(e) {
        return --mr(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
      },
      getDay: function getDay(e) {
        return mr(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
      },
      getDate: function getDate(e, t, a, n, s, i, o) {
        t < 0 && (e += Math.floor(t / 12), t = 12 + t % 12), t > 11 && (e += Math.floor(t / 12), t %= 12);
  
        var r = function (e, t, a) {
          e = parseInt(e), t = parseInt(t), a = parseInt(a);
          var n,
              s,
              i,
              o,
              r,
              l,
              c = new Array(3);
          return (n = dr((11 * e + 3) / 30) + 354 * e + 30 * t - dr((t - 1) / 2) + a + 1948440 - 385) > 2299160 ? (s = n + 68569, a = (s = (s -= dr((146097 * (o = dr(4 * s / 146097)) + 3) / 4)) - dr(1461 * (r = dr(4e3 * (s + 1) / 1461001)) / 4) + 31) - dr(2447 * (i = dr(80 * s / 2447)) / 80), t = i + 2 - 12 * (s = dr(i / 11)), e = 100 * (o - 49) + r + s) : (a = (r = (s = (i = n + 1402) - 1461 * (l = dr((i - 1) / 1461))) - 365 * (o = dr((s - 1) / 365) - dr(s / 1461)) + 30) - dr(2447 * (i = dr(80 * r / 2447)) / 80), t = i + 2 - 12 * (r = dr(i / 11)), e = 4 * l + o + r - 4716), c[2] = a, c[1] = t, c[0] = e, c;
        }(e, +t + 1, a);
  
        return new Date(r[0], r[1] - 1, r[2], n || 0, s || 0, i || 0, o || 0);
      },
      getMaxDayOfMonth: function getMaxDayOfMonth(e, t) {
        return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0);
      }
    }, n.i18n.ar = {
      rtl: !0,
      setText: "تعيين",
      cancelText: "إلغاء",
      clearText: "مسح",
      selectedText: "{count} المحدد",
      dateFormat: "dd/mm/yy",
      dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
      dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
      dayText: "يوم",
      hourText: "ساعات",
      minuteText: "الدقائق",
      monthNames: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
      monthNamesShort: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
      monthText: "شهر",
      secText: "ثواني",
      amText: "ص",
      pmText: "م",
      timeFormat: "hh:ii A",
      yearText: "عام",
      nowText: "الآن",
      firstDay: 0,
      dateText: "تاريخ",
      timeText: "وقت",
      closeText: "إغلاق",
      todayText: "اليوم",
      prevMonthText: "الشهر السابق",
      nextMonthText: "الشهر القادم",
      prevYearText: "السنه السابقة",
      nextYearText: "العام القادم",
      allDayText: "اليوم كله",
      noEventsText: "لا توجد احداث",
      eventText: "الحدث",
      eventsText: "أحداث",
      moreEventsText: "واحد آخر",
      moreEventsPluralText: "اثنان آخران {count}",
      fromText: "يبدا",
      toText: "ينتهي",
      wholeText: "كامل",
      fractionText: "جزء",
      unitText: "وحدة",
      delimiter: "/",
      decimalSeparator: ".",
      thousandsSeparator: ",",
      labels: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
      labelsShort: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
      startText: "بدء",
      stopText: "إيقاف",
      resetText: "إعادة ضبط",
      lapText: "الدورة",
      hideText: "إخفاء",
      offText: "إيقاف",
      onText: "تشغيل",
      backText: "رجوع",
      undoText: "تراجع"
    }, n.i18n.bg = {
      setText: "Задаване",
      cancelText: "Отмяна",
      clearText: "Изчистване",
      selectedText: "{count} подбран",
      dateFormat: "dd.mm.yy",
      dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
      dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
      dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
      dayText: "ден",
      delimiter: ".",
      hourText: "час",
      minuteText: "минута",
      monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
      monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
      monthText: "месец",
      secText: "секунди",
      timeFormat: "H:ii",
      yearText: "година",
      nowText: "Сега",
      pmText: "pm",
      amText: "am",
      firstDay: 1,
      dateText: "Дата",
      timeText: "път",
      todayText: "днес",
      prevMonthText: "Предишния месец",
      nextMonthText: "Следващият месец",
      prevYearText: "Предходната година",
      nextYearText: "Следващата година",
      closeText: "затвори",
      eventText: "Събитие",
      eventsText: "Събития",
      allDayText: "Цял ден",
      noEventsText: "Няма събития",
      moreEventsText: "Още {count}",
      fromText: "ОТ",
      toText: "ДО",
      wholeText: "цяло",
      fractionText: "фракция",
      unitText: "единица",
      labels: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
      labelsShort: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
      startText: "Стар��",
      stopText: "Стоп",
      resetText: "Нулиране",
      lapText: "Обиколка",
      hideText: "крия",
      backText: "връщане",
      undoText: "ОТМЯНА",
      offText: "ИЗКЛ",
      onText: "ВКЛ",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.ca = {
      setText: "Acceptar",
      cancelText: "Cancel·lar",
      clearText: "Esborrar",
      selectedText: "{count} seleccionat",
      selectedPluralText: "{count} seleccionats",
      dateFormat: "dd/mm/yy",
      dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
      dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
      dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
      dayText: "Dia",
      hourText: "Hores",
      minuteText: "Minuts",
      monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
      monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
      monthText: "Mes",
      secText: "Segons",
      timeFormat: "HH:ii",
      yearText: "Any",
      nowText: "Ara",
      pmText: "pm",
      amText: "am",
      todayText: "Avui",
      firstDay: 1,
      dateText: "Data",
      timeText: "Temps",
      closeText: "Tancar",
      allDayText: "Tot el dia",
      noEventsText: "Cap esdeveniment",
      eventText: "Esdeveniments",
      eventsText: "Esdeveniments",
      moreEventsText: "{count} més",
      fromText: "Iniciar",
      toText: "Final",
      wholeText: "Sencer",
      fractionText: "Fracció",
      unitText: "Unitat",
      labels: ["Anys", "Mesos", "Dies", "Hores", "Minuts", "Segons", ""],
      labelsShort: ["Anys", "Mesos", "Dies", "Hrs", "Mins", "Secs", ""],
      startText: "Iniciar",
      stopText: "Aturar",
      resetText: "Reiniciar",
      lapText: "Volta",
      hideText: "Amagar",
      backText: "Enrere",
      undoText: "Desfés",
      offText: "No",
      onText: "Si"
    }, n.i18n.cs = {
      setText: "Zadej",
      cancelText: "Storno",
      clearText: "Vymazat",
      selectedText: "Označený: {count}",
      dateFormat: "dd.mm.yy",
      dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
      dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
      dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
      dayText: "Den",
      hourText: "Hodiny",
      minuteText: "Minuty",
      monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
      monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
      monthText: "Měsíc",
      secText: "Sekundy",
      timeFormat: "HH:ii",
      yearText: "Rok",
      nowText: "Teď",
      amText: "am",
      pmText: "pm",
      todayText: "Dnes",
      firstDay: 1,
      dateText: "Datum",
      timeText: "Čas",
      closeText: "Zavřít",
      allDayText: "Celý den",
      noEventsText: "Žádné události",
      eventText: "Událostí",
      eventsText: "Události",
      moreEventsText: "{count} další",
      fromText: "Začátek",
      toText: "Konec",
      wholeText: "Celý",
      fractionText: "Část",
      unitText: "Jednotka",
      labels: ["Roky", "Měsíce", "Dny", "Hodiny", "Minuty", "Sekundy", ""],
      labelsShort: ["Rok", "Měs", "Dny", "Hod", "Min", "Sec", ""],
      startText: "Start",
      stopText: "Stop",
      resetText: "Resetovat",
      lapText: "Etapa",
      hideText: "Schovat",
      backText: "Zpět",
      undoText: "Zpět",
      offText: "O",
      onText: "I",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.da = {
      setText: "Sæt",
      cancelText: "Annuller",
      clearText: "Ryd",
      selectedText: "{count} valgt",
      selectedPluralText: "{count} valgt",
      dateFormat: "dd/mm/yy",
      dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
      dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
      dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
      dayText: "Dag",
      hourText: "Timer",
      minuteText: "Minutter",
      monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
      monthText: "Måned",
      secText: "Sekunder",
      amText: "am",
      pmText: "pm",
      timeFormat: "HH.ii",
      yearText: "År",
      nowText: "Nu",
      todayText: "I dag",
      firstDay: 1,
      dateText: "Dato",
      timeText: "Tid",
      closeText: "Luk",
      allDayText: "Hele dagen",
      noEventsText: "Ingen begivenheder",
      eventText: "Begivenheder",
      eventsText: "Begivenheder",
      moreEventsText: "{count} mere",
      fromText: "Start",
      toText: "Slut",
      wholeText: "Hele",
      fractionText: "Dele",
      unitText: "Enhed",
      labels: ["År", "Måneder", "Dage", "Timer", "Minutter", "Sekunder", ""],
      labelsShort: ["År", "Mdr", "Dg", "Timer", "Min", "Sek", ""],
      startText: "Start",
      stopText: "Stop",
      resetText: "Nulstil",
      lapText: "Omgang",
      hideText: "Skjul",
      offText: "Fra",
      onText: "Til",
      backText: "Tilbage",
      undoText: "Fortryd"
    }, n.i18n.de = {
      setText: "OK",
      cancelText: "Abbrechen",
      clearText: "Löschen",
      selectedText: "{count} ausgewählt",
      dateFormat: "dd.mm.yy",
      dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
      dayText: "Tag",
      delimiter: ".",
      hourText: "Stunde",
      minuteText: "Minuten",
      monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
      monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      monthText: "Monat",
      secText: "Sekunden",
      timeFormat: "HH:ii",
      yearText: "Jahr",
      nowText: "Jetzt",
      pmText: "pm",
      amText: "am",
      todayText: "Heute",
      firstDay: 1,
      dateText: "Datum",
      timeText: "Zeit",
      closeText: "Schließen",
      allDayText: "Ganztägig",
      noEventsText: "Keine Ereignisse",
      eventText: "Ereignis",
      eventsText: "Ereignisse",
      moreEventsText: "{count} weiteres Element",
      moreEventsPluralText: "{count} weitere Elemente",
      fromText: "Von",
      toText: "Bis",
      wholeText: "Ganze Zahl",
      fractionText: "Bruchzahl",
      unitText: "Maßeinheit",
      labels: ["Jahre", "Monate", "Tage", "Stunden", "Minuten", "Sekunden", ""],
      labelsShort: ["Jahr.", "Mon.", "Tag.", "Std.", "Min.", "Sek.", ""],
      startText: "Starten",
      stopText: "Stoppen",
      resetText: "Zurücksetzen",
      lapText: "Lap",
      hideText: "Ausblenden",
      backText: "Zurück",
      undoText: "Rückgängig machen",
      offText: "Aus",
      onText: "Ein",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.el = {
      setText: "Ορισμος",
      cancelText: "Ακυρωση",
      clearText: "Διαγραφη",
      selectedText: "{count} επιλεγμένα",
      dateFormat: "dd/mm/yy",
      dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
      dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
      dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
      dayText: "ημέρα",
      delimiter: "/",
      hourText: "ώρα",
      minuteText: "λεπτό",
      monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
      monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
      monthText: "Μήνας",
      secText: "δευτερόλεπτα",
      timeFormat: "H:ii",
      yearText: "έτος",
      nowText: "τώρα",
      pmText: "μμ",
      amText: "πμ",
      firstDay: 1,
      dateText: "Ημερομηνία",
      timeText: "φορά",
      todayText: "Σήμερα",
      prevMonthText: "Προηγούμενο μήνα",
      nextMonthText: "Επόμενο μήνα",
      prevYearText: "Προηγούμενο έτος",
      nextYearText: "Επόμενο έτος",
      closeText: "Κλείσιμο",
      eventText: "Γεγονότα",
      eventsText: "Γεγονότα",
      allDayText: "Ολοήμερο",
      noEventsText: "Δεν υπάρχουν γεγονότα",
      moreEventsText: "{count} ακόμη",
      fromText: "Αρχή",
      toText: "Τέλος",
      wholeText: "Ολόκληρος",
      fractionText: "κλάσμα",
      unitText: "Μονάδα",
      labels: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτερόλεπτα", ""],
      labelsShort: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτ", ""],
      startText: "΄Εναρξη",
      stopText: "Διακοπή",
      resetText: "Επαναφορά",
      lapText: "Γύρος",
      hideText: "κρύβω",
      backText: "Πίσω",
      undoText: "Αναιρεση",
      offText: "Ανενεργό",
      onText: "Ενεργό",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n["en-GB"] = n.i18n["en-UK"] = {
      dateFormat: "dd/mm/yy",
      timeFormat: "HH:ii"
    }, n.i18n.es = {
      setText: "Aceptar",
      cancelText: "Cancelar",
      clearText: "Borrar",
      selectedText: "{count} seleccionado",
      selectedPluralText: "{count} seleccionados",
      dateFormat: "dd/mm/yy",
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
      dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
      dayText: "Día",
      hourText: "Horas",
      minuteText: "Minutos",
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      monthText: "Mes",
      secText: "Segundos",
      timeFormat: "HH:ii",
      yearText: "A&ntilde;o",
      nowText: "Ahora",
      pmText: "pm",
      amText: "am",
      todayText: "Hoy",
      firstDay: 1,
      dateText: "Fecha",
      timeText: "Tiempo",
      closeText: "Cerrar",
      allDayText: "Todo el día",
      noEventsText: "No hay eventos",
      eventText: "Evento",
      eventsText: "Eventos",
      moreEventsText: "{count} más",
      fromText: "Iniciar",
      toText: "Final",
      wholeText: "Entero",
      fractionText: "Fracción",
      unitText: "Unidad",
      labels: ["Años", "Meses", "Días", "Horas", "Minutos", "Segundos", ""],
      labelsShort: ["Año", "Mes", "Día", "Hora", "Min", "Seg", ""],
      startText: "Iniciar",
      stopText: "Deténgase",
      resetText: "Reinicializar",
      lapText: "Lap",
      hideText: "Esconder",
      backText: "Atrás",
      undoText: "Deshacer",
      offText: "No",
      onText: "Sí",
      decimalSeparator: ",",
      thousandsSeparator: " "
    };
    var pr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        hr = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  
    function fr(e, t, a) {
      var n,
          s = (e = parseInt(e)) - 1600,
          i = (t = parseInt(t)) - 1,
          o = (a = parseInt(a)) - 1,
          r = 365 * s + parseInt((s + 3) / 4) - parseInt((s + 99) / 100) + parseInt((s + 399) / 400);
  
      for (n = 0; n < i; ++n) {
        r += pr[n];
      }
  
      i > 1 && (s % 4 == 0 && s % 100 != 0 || s % 400 == 0) && ++r;
      var l = (r += o) - 79,
          c = parseInt(l / 12053);
      l %= 12053;
      var u = 979 + 33 * c + 4 * parseInt(l / 1461);
  
      for ((l %= 1461) >= 366 && (u += parseInt((l - 1) / 365), l = (l - 1) % 365), n = 0; n < 11 && l >= hr[n]; ++n) {
        l -= hr[n];
      }
  
      return [u, n + 1, l + 1];
    }
  
    i.jalali = {
      getYear: function getYear(e) {
        return fr(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
      },
      getMonth: function getMonth(e) {
        return --fr(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
      },
      getDay: function getDay(e) {
        return fr(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
      },
      getDate: function getDate(e, t, a, n, s, i, o) {
        t < 0 && (e += Math.floor(t / 12), t = 12 + t % 12), t > 11 && (e += Math.floor(t / 12), t %= 12);
  
        var r = function (e, t, a) {
          var n,
              s = (e = parseInt(e)) - 979,
              i = (t = parseInt(t)) - 1,
              o = (a = parseInt(a)) - 1,
              r = 365 * s + 8 * parseInt(s / 33) + parseInt((s % 33 + 3) / 4);
  
          for (n = 0; n < i; ++n) {
            r += hr[n];
          }
  
          var l = (r += o) + 79,
              c = 1600 + 400 * parseInt(l / 146097),
              u = !0;
  
          for ((l %= 146097) >= 36525 && (l--, c += 100 * parseInt(l / 36524), (l %= 36524) >= 365 ? l++ : u = !1), c += 4 * parseInt(l / 1461), (l %= 1461) >= 366 && (u = !1, l--, c += parseInt(l / 365), l %= 365), n = 0; l >= pr[n] + (1 == n && u); n++) {
            l -= pr[n] + (1 == n && u);
          }
  
          return [c, n + 1, l + 1];
        }(e, +t + 1, a);
  
        return new Date(r[0], r[1] - 1, r[2], n || 0, s || 0, i || 0, o || 0);
      },
      getMaxDayOfMonth: function getMaxDayOfMonth(e, t) {
        for (var a, n, s, i = 31; !1 == (n = t + 1, s = i, !((a = e) < 0 || a > 32767 || n < 1 || n > 12 || s < 1 || s > hr[n - 1] + (12 == n && (a - 979) % 33 % 4 == 0)));) {
          i--;
        }
  
        return i;
      }
    }, n.i18n.fa = {
      setText: "تاييد",
      cancelText: "انصراف",
      clearText: "واضح ",
      selectedText: "{count} منتخب",
      calendarSystem: "jalali",
      dateFormat: "yy/mm/dd",
      dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
      dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
      dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
      dayText: "روز",
      hourText: "ساعت",
      minuteText: "دقيقه",
      monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
      monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
      monthText: "ماه",
      secText: "ثانيه",
      timeFormat: "HH:ii",
      timeWheels: "iiHH",
      yearText: "سال",
      nowText: "اکنون",
      amText: "ب",
      pmText: "ص",
      todayText: "امروز",
      firstDay: 6,
      rtl: !0,
      dateText: "تاریخ ",
      timeText: "زمان ",
      closeText: "نزدیک",
      allDayText: "تمام روز",
      noEventsText: "هیچ رویداد",
      eventText: "رویداد",
      eventsText: "رویدادها",
      moreEventsText: "{count} مورد دیگر",
      fromText: "شروع ",
      toText: "پایان",
      wholeText: "تمام",
      fractionText: "کسر",
      unitText: "واحد",
      labels: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
      labelsShort: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
      startText: "شروع",
      stopText: "پايان",
      resetText: "تنظیم مجدد",
      lapText: "Lap",
      hideText: "پنهان کردن",
      backText: "پشت",
      undoText: "واچیدن"
    }, n.i18n.fi = {
      setText: "Aseta",
      cancelText: "Peruuta",
      clearText: "Tyhjennä",
      selectedText: "{count} valita",
      dateFormat: "d. MM yy",
      dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
      dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
      dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
      dayText: "Päivä",
      delimiter: ".",
      hourText: "Tuntia",
      minuteText: "Minuutti",
      monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
      monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
      monthText: "Kuukausi",
      secText: "Sekunda",
      timeFormat: "H:ii",
      yearText: "Vuosi",
      nowText: "Nyt",
      pmText: "pm",
      amText: "am",
      firstDay: 1,
      dateText: "Päiväys",
      timeText: "Aika",
      todayText: "Tänään",
      prevMonthText: "Edellinen kuukausi",
      nextMonthText: "Ensi kuussa",
      prevYearText: "Edellinen vuosi",
      nextYearText: "Ensi vuosi",
      closeText: "Sulje",
      eventText: "Tapahtumia",
      eventsText: "Tapahtumia",
      allDayText: "Koko päivä",
      noEventsText: "Ei tapahtumia",
      moreEventsText: "{count} muu",
      moreEventsPluralText: "{count} muuta",
      fromText: "Alkaa",
      toText: "Päättyy",
      wholeText: "Kokonainen",
      fractionText: "Murtoluku",
      unitText: "Yksikkö",
      labels: ["Vuosi", "Kuukausi", "Päivä", "Tunnin", "Minuutti", "sekuntia", ""],
      labelsShort: ["Vuo", "Kuu", "Päi", "Tun", "Min", "Sek", ""],
      startText: "Käynnistys",
      stopText: "Seis",
      resetText: "Aseta uudelleen",
      lapText: "Kierros",
      hideText: "Vuota",
      backText: "Edellinen",
      undoText: "Kumoa",
      offText: "Pois",
      onText: "Päällä",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.fr = {
      setText: "Terminer",
      cancelText: "Annuler",
      clearText: "Effacer",
      selectedText: "{count} sélectionné",
      selectedPluralText: "{count} sélectionnés",
      dateFormat: "dd/mm/yy",
      dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
      dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
      dayText: "Jour",
      monthText: "Mois",
      monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
      hourText: "Heures",
      minuteText: "Minutes",
      secText: "Secondes",
      timeFormat: "HH:ii",
      yearText: "Année",
      nowText: "Maintenant",
      pmText: "pm",
      amText: "am",
      todayText: "Aujourd'hui",
      firstDay: 1,
      dateText: "Date",
      timeText: "Heure",
      closeText: "Fermer",
      allDayText: "Toute la journée",
      noEventsText: "Aucun événement",
      eventText: "Événement",
      eventsText: "Événements",
      moreEventsText: "{count} autre",
      moreEventsPluralText: "{count} autres",
      fromText: "Démarrer",
      toText: "Fin",
      wholeText: "Entier",
      fractionText: "Fraction",
      unitText: "Unité",
      labels: ["Ans", "Mois", "Jours", "Heures", "Minutes", "Secondes", ""],
      labelsShort: ["Ans", "Mois", "Jours", "Hrs", "Min", "Sec", ""],
      startText: "Démarrer",
      stopText: "Arrêter",
      resetText: "Réinitialiser",
      lapText: "Lap",
      hideText: "Cachez",
      backText: "Retour",
      undoText: "Annuler",
      offText: "Non",
      onText: "Oui",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.he = {
      rtl: !0,
      setText: "שמירה",
      cancelText: "ביטול",
      clearText: "נקה",
      selectedText: "{count} נבחר",
      selectedPluralText: "{count} נבחרו",
      dateFormat: "dd/mm/yy",
      dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
      dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
      dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
      dayText: "יום",
      hourText: "שעות",
      minuteText: "דקות",
      monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
      monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
      monthText: "חודש",
      secText: "שניות",
      amText: "am",
      pmText: "pm",
      timeFormat: "HH:ii",
      timeWheels: "iiHH",
      yearText: "שנה",
      nowText: "עכשיו",
      firstDay: 0,
      dateText: "תאריך",
      timeText: "זמן",
      closeText: "סגירה",
      todayText: "היום",
      allDayText: "כל היום",
      noEventsText: "אין אירועים",
      eventText: "מִקרֶה",
      eventsText: "מִקרֶה",
      moreEventsText: "אירוע אחד נוסף",
      moreEventsPluralText: "{count} אירועים נוספים",
      fromText: "התחלה",
      toText: "סיום",
      wholeText: "כֹּל",
      fractionText: "שבריר",
      unitText: "יחידה",
      labels: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
      labelsShort: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
      startText: "התחל",
      stopText: "עצור",
      resetText: "אתחול",
      lapText: "הקפה",
      hideText: "הסתר",
      offText: "כיבוי",
      onText: "הפעלה",
      backText: "חזור",
      undoText: "ביטול פעולה"
    }, n.i18n.hi = {
      setText: "सैट करें",
      cancelText: "रद्द करें",
      clearText: "साफ़ को",
      selectedText: "{count} चयनित",
      dateFormat: "dd/mm/yy",
      dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
      dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
      dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
      dayText: "दिन",
      delimiter: ".",
      hourText: "घंटा",
      minuteText: "मिनट",
      monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
      monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
      monthText: "महीना",
      secText: "सेकंड",
      timeFormat: "H:ii",
      yearText: "साल",
      nowText: "अब",
      pmText: "अपराह्न",
      amText: "पूर्वाह्न",
      firstDay: 1,
      dateText: "तिथि",
      timeText: "समय",
      todayText: "आज",
      prevMonthText: "पिछ्ला महिना",
      nextMonthText: "अगले महीने",
      prevYearText: "पिछला साल",
      nextYearText: "अगले वर्ष",
      closeText: "बंद",
      eventText: "इवेट३",
      eventsText: "इवेट३",
      allDayText: "पूरे दिन",
      noEventsText: "Ei tapahtumia",
      moreEventsText: "{count} और",
      fromText: "से",
      toText: "तक",
      wholeText: "समूचा",
      fractionText: "अंश",
      unitText: "इकाई",
      labels: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
      labelsShort: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
      startText: "प्रारंभ",
      stopText: "रोकें",
      resetText: "रीसेट करें",
      lapText: "लैप",
      hideText: "छिपाना",
      backText: "वापस",
      undoText: "वापस लाएं",
      offText: "बंद",
      onText: "चालू",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.hr = {
      setText: "Postavi",
      cancelText: "Izlaz",
      clearText: "Izbriši",
      selectedText: "{count} odabran",
      dateFormat: "dd.mm.yy",
      dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
      dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
      dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
      dayText: "Dan",
      delimiter: ".",
      hourText: "Sat",
      minuteText: "Minuta",
      monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
      monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
      monthText: "Mjesec",
      secText: "Sekunda",
      timeFormat: "H:ii",
      yearText: "Godina",
      nowText: "Sada",
      pmText: "pm",
      amText: "am",
      firstDay: 1,
      dateText: "Datum",
      timeText: "Vrijeme",
      todayText: "Danas",
      prevMonthText: "Prethodni mjesec",
      nextMonthText: "Sljedeći mjesec",
      prevYearText: "Prethodni godina",
      nextYearText: "Slijedeće godine",
      closeText: "Zatvori",
      eventText: "Događaj",
      eventsText: "događaja",
      allDayText: "Cijeli dan",
      noEventsText: "Bez događaja",
      moreEventsText: "Još {count}",
      fromText: "Počinje",
      toText: "Završava",
      wholeText: "Cjelina",
      fractionText: "Frakcija",
      unitText: "Jedinica",
      labels: ["godina", "mjesec", "dan", "sat", "minuta", "sekunda", ""],
      labelsShort: ["god", "mje", "dan", "sat", "min", "sec", ""],
      startText: "Početak",
      stopText: "Prekid",
      resetText: "Resetiraj",
      lapText: "Ciklus",
      hideText: "Sakriti",
      backText: "Natrag",
      undoText: "Poništavanje",
      offText: "Uklj.",
      onText: "Isklj.",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.hu = {
      setText: "OK",
      cancelText: "Mégse",
      clearText: "Törlés",
      selectedText: "{count} kiválasztva",
      dateFormat: "yy.mm.dd.",
      dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
      dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
      dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
      dayText: "Nap",
      delimiter: ".",
      hourText: "Óra",
      minuteText: "Perc",
      monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
      monthText: "Hónap",
      secText: "Másodperc",
      timeFormat: "H:ii",
      yearText: "Év",
      nowText: "Most",
      pmText: "pm",
      amText: "am",
      firstDay: 1,
      dateText: "Dátum",
      timeText: "Idő",
      todayText: "Ma",
      prevMonthText: "Előző hónap",
      nextMonthText: "Következő hónap",
      prevYearText: "Előző év",
      nextYearText: "Következő év",
      closeText: "Bezár",
      eventText: "esemény",
      eventsText: "esemény",
      allDayText: "Egész nap",
      noEventsText: "Nincs esemény",
      moreEventsText: "{count} további",
      fromText: "Eleje",
      toText: "Vége",
      wholeText: "Egész",
      fractionText: "Tört",
      unitText: "Egység",
      labels: ["Év", "Hónap", "Nap", "Óra", "Perc", "Másodperc", ""],
      labelsShort: ["Év", "Hó.", "Nap", "Óra", "Perc", "Mp.", ""],
      startText: "Indít",
      stopText: "Megállít",
      resetText: "Visszaállít",
      lapText: "Lap",
      hideText: "Elrejt",
      backText: "Vissza",
      undoText: "Visszavon",
      offText: "Ki",
      onText: "Be",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.it = {
      setText: "OK",
      cancelText: "Annulla",
      clearText: "Chiarire",
      selectedText: "{count} selezionato",
      selectedPluralText: "{count} selezionati",
      dateFormat: "dd/mm/yy",
      dayNames: ["Domenica", "Lunedì", "Mertedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
      dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
      dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
      dayText: "Giorno",
      hourText: "Ore",
      minuteText: "Minuti",
      monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
      monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
      monthText: "Mese",
      secText: "Secondi",
      timeFormat: "HH:ii",
      yearText: "Anno",
      nowText: "Ora",
      pmText: "pm",
      amText: "am",
      todayText: "Oggi",
      firstDay: 1,
      dateText: "Data",
      timeText: "Volta",
      closeText: "Chiudere",
      allDayText: "Tutto il giorno",
      noEventsText: "Nessun evento",
      eventText: "Evento",
      eventsText: "Eventi",
      moreEventsText: "{count} altro",
      moreEventsPluralText: "altri {count}",
      fromText: "Inizio",
      toText: "Fine",
      wholeText: "Intero",
      fractionText: "Frazione",
      unitText: "Unità",
      labels: ["Anni", "Mesi", "Giorni", "Ore", "Minuti", "Secondi", ""],
      labelsShort: ["Anni", "Mesi", "Gio", "Ore", "Min", "Sec", ""],
      startText: "Inizio",
      stopText: "Arresto",
      resetText: "Ripristina",
      lapText: "Lap",
      hideText: "Nascondi",
      backText: "Indietro",
      undoText: "Annulla",
      offText: "Via",
      onText: "Su",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.ja = {
      setText: "セット",
      cancelText: "キャンセル",
      clearText: "クリア",
      selectedText: "{count} 選択",
      dateFormat: "yy年mm月dd日",
      dayNames: ["日", "月", "火", "水", "木", "金", "土"],
      dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
      dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
      dayText: "日",
      hourText: "時",
      minuteText: "分",
      monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      monthText: "月",
      secText: "秒",
      timeFormat: "HH:ii",
      yearText: "年",
      nowText: "今",
      pmText: "午後",
      amText: "午前",
      yearSuffix: "年",
      monthSuffix: "月",
      daySuffix: "日",
      todayText: "今日",
      dateText: "日付",
      timeText: "時間",
      closeText: "クローズ",
      allDayText: "終日",
      noEventsText: "イベントはありません",
      eventText: "イベント",
      eventsText: "イベント",
      moreEventsText: "他 {count} 件",
      fromText: "開始",
      toText: "終わり",
      wholeText: "全数",
      fractionText: "分数",
      unitText: "単位",
      labels: ["年間", "月間", "日間", "時間", "分", "秒", ""],
      labelsShort: ["年間", "月間", "日間", "時間", "分", "秒", ""],
      startText: "開始",
      stopText: "停止",
      resetText: "リセット",
      lapText: "ラップ",
      hideText: "隠す",
      backText: "バック",
      undoText: "アンドゥ"
    }, n.i18n.ko = {
      setText: "설정",
      cancelText: "취소",
      clearText: "삭제",
      selectedText: "{count} 선택된",
      dateFormat: "yy년mm월dd일",
      dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
      dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      dayText: "일",
      delimiter: "-",
      hourText: "시간",
      minuteText: "분",
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      monthText: "달",
      secText: "초",
      timeFormat: "H:ii",
      yearText: "년",
      nowText: "지금",
      pmText: "오후",
      amText: "오전",
      yearSuffix: "년",
      monthSuffix: "월",
      daySuffix: "일",
      firstDay: 0,
      dateText: "날짜",
      timeText: "시간",
      todayText: "오늘",
      prevMonthText: "이전 달",
      nextMonthText: "다음 달",
      prevYearText: "이전 년",
      nextYearText: "다음 년",
      closeText: "닫기",
      eventText: "이벤트",
      eventsText: "이벤트",
      allDayText: "종일",
      noEventsText: "이벤트 없음",
      moreEventsText: "{count}개 더보기",
      fromText: "시작",
      toText: "종료",
      wholeText: "정수",
      fractionText: "분수",
      unitText: "단위",
      labels: ["년", "달", "일", "시간", "분", "초", ""],
      labelsShort: ["년", "달", "일", "시간", "분", "초", ""],
      startText: "시작",
      stopText: "중지 ",
      resetText: "초기화",
      lapText: "기록",
      hideText: "숨는 장소",
      backText: "뒤로",
      undoText: "실행취소",
      offText: "끔",
      onText: "켬",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.lt = {
      setText: "OK",
      cancelText: "Atšaukti",
      clearText: "Išvalyti",
      selectedText: "Pasirinktas {count}",
      selectedPluralText: "Pasirinkti {count}",
      dateFormat: "yy-mm-dd",
      dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
      dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
      dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
      dayText: "Diena",
      hourText: "Valanda",
      minuteText: "Minutes",
      monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
      monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
      monthText: "Mėnuo",
      secText: "Sekundes",
      amText: "am",
      pmText: "pm",
      timeFormat: "HH:ii",
      yearText: "Metai",
      nowText: "Dabar",
      todayText: "Šiandien",
      firstDay: 1,
      dateText: "Data",
      timeText: "Laikas",
      closeText: "Uždaryti",
      allDayText: "Visą dieną",
      noEventsText: "Nėra įvykių",
      eventText: "Įvykių",
      eventsText: "Įvykiai",
      moreEventsText: "Dar {count}",
      fromText: "Nuo",
      toText: "Iki",
      wholeText: "Visas",
      fractionText: "Frakcija",
      unitText: "Vienetas",
      labels: ["Metai", "Mėnesiai", "Dienos", "Valandos", "Minutes", "Sekundes", ""],
      labelsShort: ["m", "mėn.", "d", "h", "min", "s", ""],
      startText: "Pradėti",
      stopText: "Sustabdyti",
      resetText: "Išnaujo",
      lapText: "Ratas",
      hideText: "Slėpti",
      backText: "Atgal",
      undoText: "Anuliuoti",
      offText: "Išj.",
      onText: "Įj.",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.nl = {
      setText: "Instellen",
      cancelText: "Annuleren",
      clearText: "Leegmaken",
      selectedText: "{count} gekozen",
      dateFormat: "dd-mm-yy",
      dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
      dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
      dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
      dayText: "Dag",
      hourText: "Uur",
      minuteText: "Minuten",
      monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
      monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
      monthText: "Maand",
      secText: "Seconden",
      timeFormat: "HH:ii",
      yearText: "Jaar",
      nowText: "Nu",
      pmText: "pm",
      amText: "am",
      todayText: "Vandaag",
      firstDay: 1,
      dateText: "Datum",
      timeText: "Tijd",
      closeText: "Sluiten",
      allDayText: "Hele dag",
      noEventsText: "Geen activiteiten",
      eventText: "Activiteit",
      eventsText: "Activiteiten",
      moreEventsText: "nog {count}",
      fromText: "Start",
      toText: "Einde",
      wholeText: "geheel",
      fractionText: "fractie",
      unitText: "eenheid",
      labels: ["Jaren", "Maanden", "Dagen", "Uren", "Minuten", "Seconden", ""],
      labelsShort: ["j", "m", "d", "u", "min", "sec", ""],
      startText: "Start",
      stopText: "Stop",
      resetText: "Reset",
      lapText: "Ronde",
      hideText: "Verbergen",
      backText: "Terug",
      undoText: "Onged. maken",
      offText: "Uit",
      onText: "Aan",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.no = {
      setText: "OK",
      cancelText: "Avbryt",
      clearText: "Tømme",
      selectedText: "{count} valgt",
      dateFormat: "dd.mm.yy",
      dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
      dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
      dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
      dayText: "Dag",
      delimiter: ".",
      hourText: "Time",
      minuteText: "Minutt",
      monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
      monthText: "Måned",
      secText: "Sekund",
      timeFormat: "HH:ii",
      yearText: "År",
      nowText: "Nå",
      pmText: "pm",
      amText: "am",
      todayText: "I dag",
      firstDay: 1,
      dateText: "Dato",
      timeText: "Tid",
      closeText: "Lukk",
      allDayText: "Hele dagen",
      noEventsText: "Ingen hendelser",
      eventText: "Hendelse",
      eventsText: "Hendelser",
      moreEventsText: "{count} mere",
      fromText: "Start",
      toText: "End",
      wholeText: "Hele",
      fractionText: "Fraksjon",
      unitText: "Enhet",
      labels: ["År", "Måneder", "Dager", "Timer", "Minutter", "Sekunder", ""],
      labelsShort: ["År", "Mån", "Dag", "Time", "Min", "Sek", ""],
      startText: "Start",
      stopText: "Stopp",
      resetText: "Tilbakestille",
      lapText: "Runde",
      hideText: "Skjul",
      backText: "Tilbake",
      undoText: "Angre",
      offText: "Av",
      onText: "På",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.pl = {
      setText: "Zestaw",
      cancelText: "Anuluj",
      clearText: "Oczyścić",
      selectedText: "Wybór: {count}",
      dateFormat: "yy-mm-dd",
      dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
      dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
      dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
      dayText: "Dzień",
      hourText: "Godziny",
      minuteText: "Minuty",
      monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
      monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
      monthText: "Miesiąc",
      secText: "Sekundy",
      timeFormat: "HH:ii",
      yearText: "Rok",
      nowText: "Teraz",
      amText: "am",
      pmText: "pm",
      todayText: "Dzisiaj",
      firstDay: 1,
      dateText: "Data",
      timeText: "Czas",
      closeText: "Zakończenie",
      allDayText: "Cały dzień",
      noEventsText: "Brak wydarzeń",
      eventText: "Wydarzeń",
      eventsText: "Wydarzenia",
      moreEventsText: "Jeszcze {count}",
      fromText: "Rozpoczęcie",
      toText: "Koniec",
      wholeText: "Cały",
      fractionText: "Ułamek",
      unitText: "Jednostka",
      labels: ["Lata", "Miesiąc", "Dni", "Godziny", "Minuty", "Sekundy", ""],
      labelsShort: ["R", "M", "Dz", "Godz", "Min", "Sek", ""],
      startText: "Rozpoczęcie",
      stopText: "Zatrzymać",
      resetText: "Zresetować",
      lapText: "Zakładka",
      hideText: "Ukryć",
      backText: "Wróć",
      undoText: "Cofnij",
      offText: "Wył",
      onText: "Wł",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n["pt-BR"] = {
      setText: "Selecionar",
      cancelText: "Cancelar",
      clearText: "Claro",
      selectedText: "{count} selecionado",
      selectedPluralText: "{count} selecionados",
      dateFormat: "dd/mm/yy",
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      dayText: "Dia",
      hourText: "Hora",
      minuteText: "Minutos",
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      monthText: "Mês",
      secText: "Segundo",
      timeFormat: "HH:ii",
      yearText: "Ano",
      nowText: "Agora",
      pmText: "pm",
      amText: "am",
      todayText: "Hoje",
      dateText: "Data",
      timeText: "Tempo",
      closeText: "Fechar",
      allDayText: "Dia inteiro",
      noEventsText: "Nenhum evento",
      eventText: "Evento",
      eventsText: "Eventos",
      moreEventsText: "Mais {count}",
      fromText: "In&iacute;cio",
      toText: "Fim",
      wholeText: "Inteiro",
      fractionText: "Fração",
      unitText: "Unidade",
      labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
      labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
      startText: "Começar",
      stopText: "Pare",
      resetText: "Reinicializar",
      lapText: "Lap",
      hideText: "Esconder",
      backText: "Anterior",
      undoText: "Desfazer",
      offText: "Desl",
      onText: "Lig",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n["pt-PT"] = {
      setText: "Seleccionar",
      cancelText: "Cancelar",
      clearText: "Claro",
      selectedText: "{count} selecionado",
      selectedPluralText: "{count} selecionados",
      dateFormat: "dd-mm-yy",
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
      dayText: "Dia",
      hourText: "Horas",
      minuteText: "Minutos",
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      monthText: "Mês",
      secText: "Segundo",
      timeFormat: "HH:ii",
      yearText: "Ano",
      nowText: "Actualizar",
      pmText: "pm",
      amText: "am",
      todayText: "Hoy",
      firstDay: 1,
      dateText: "Data",
      timeText: "Tempo",
      closeText: "Fechar",
      allDayText: "Todo o dia",
      noEventsText: "Nenhum evento",
      eventText: "Evento",
      eventsText: "Eventos",
      moreEventsText: "mais {count}",
      fromText: "Início",
      toText: "Fim",
      wholeText: "Inteiro",
      fractionText: "Fracção",
      unitText: "Unidade",
      labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
      labelsShort: ["Ano", "Mês", "Dia", "Hora", "Min", "Seg", ""],
      startText: "Começar",
      stopText: "Parar",
      resetText: "Reinicializar",
      lapText: "Lap",
      hideText: "Esconder",
      backText: "Anterior",
      undoText: "Anular",
      offText: "Desl",
      onText: "Lig",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.ro = {
      setText: "Setare",
      cancelText: "Anulare",
      clearText: "Ştergere",
      selectedText: "{count} selectat",
      selectedPluralText: "{count} selectate",
      dateFormat: "dd.mm.yy",
      dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
      dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
      dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
      dayText: " Ziua",
      delimiter: ".",
      hourText: " Ore ",
      minuteText: "Minute",
      monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
      monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
      monthText: "Luna",
      secText: "Secunde",
      timeFormat: "HH:ii",
      yearText: "Anul",
      nowText: "Acum",
      amText: "am",
      pmText: "pm",
      todayText: "Astăzi",
      prevMonthText: "Luna anterioară",
      nextMonthText: "Luna următoare",
      prevYearText: "Anul anterior",
      nextYearText: "Anul următor",
      eventText: "Eveniment",
      eventsText: "Evenimente",
      allDayText: "Toată ziua",
      noEventsText: "Niciun eveniment",
      moreEventsText: "Încă unul",
      moreEventsPluralText: "Încă {count}",
      firstDay: 1,
      dateText: "Data",
      timeText: "Ora",
      closeText: "Închidere",
      fromText: "Start",
      toText: "Final",
      wholeText: "Complet",
      fractionText: "Parţial",
      unitText: "Unitate",
      labels: ["Ani", "Luni", "Zile", "Ore", "Minute", "Secunde", ""],
      labelsShort: ["Ani", "Luni", "Zile", "Ore", "Min.", "Sec.", ""],
      startText: "Start",
      stopText: "Stop",
      resetText: "Resetare",
      lapText: "Tură",
      hideText: "Ascundere",
      backText: "Înapoi",
      undoText: "Anulează",
      offText: "Nu",
      onText: "Da",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n["ru-UA"] = {
      setText: "Установить",
      cancelText: "Отменить",
      clearText: "Очиститьr",
      selectedText: "{count} Вібрать",
      dateFormat: "dd.mm.yy",
      dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
      dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
      dayText: "День",
      delimiter: ".",
      hourText: "Часы",
      minuteText: "Минуты",
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
      monthText: "Месяцы",
      secText: "Сикунды",
      timeFormat: "HH:ii",
      yearText: "Год",
      nowText: "Сейчас",
      amText: "am",
      pmText: "pm",
      todayText: "Cегодня",
      firstDay: 1,
      dateText: "Дата",
      timeText: "Время",
      closeText: "Закрыть",
      allDayText: "Весь день",
      noEventsText: "Нет событий",
      eventText: "Мероприятия",
      eventsText: "Мероприятия",
      moreEventsText: "Ещё {count}",
      fromText: "Начало",
      toText: "Конец",
      wholeText: "Весь",
      fractionText: "Часть",
      unitText: "Единица",
      labels: ["Годы", " Месяцы ", " Дни ", " Часы ", " Минуты ", " Секунды", ""],
      labelsShort: ["Год", "Мес.", "Дн.", "Ч.", "Мин.", "Сек.", ""],
      startText: "Старт",
      stopText: "Стоп",
      resetText: " Сброс ",
      lapText: " Этап ",
      hideText: " Скрыть ",
      backText: "назад",
      undoText: "ОтменитЬ",
      offText: "O",
      onText: "I",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n["ru-RU"] = n.i18n.ru = {
      setText: "Установить",
      cancelText: "Отмена",
      clearText: "Очистить",
      selectedText: "{count} Выбрать",
      dateFormat: "dd.mm.yy",
      dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
      dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
      dayText: "День",
      delimiter: ".",
      hourText: "Час",
      minuteText: "Минут",
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      monthText: "Месяц",
      secText: "Секунд",
      timeFormat: "HH:ii",
      yearText: "Год",
      nowText: "Сейчас",
      amText: "am",
      pmText: "pm",
      todayText: "Cегодня",
      firstDay: 1,
      dateText: "Дата",
      timeText: "Время",
      closeText: "Закрыть",
      allDayText: "Весь день",
      noEventsText: "Нет событий",
      eventText: "Мероприятия",
      eventsText: "Мероприятия",
      moreEventsText: "Ещё {count}",
      fromText: "Начало",
      toText: "Конец",
      wholeText: "Целое",
      fractionText: "Дробное",
      unitText: "Единица",
      labels: ["Лет", "Месяцев", "Дней", "Часов", "Минут", "Секунд", ""],
      labelsShort: ["Лет", "Мес", "Дн", "Час", "Мин", "Сек", ""],
      startText: "Старт",
      stopText: "Стоп",
      resetText: "Сбросить",
      lapText: "Круг",
      hideText: "Скрыть",
      backText: "назад",
      undoText: "ОтменитЬ",
      offText: "O",
      onText: "I",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.sk = {
      setText: "Zadaj",
      cancelText: "Zrušiť",
      clearText: "Vymazať",
      selectedText: "Označený: {count}",
      dateFormat: "d.m.yy",
      dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
      dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
      dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
      dayText: "Ďeň",
      hourText: "Hodiny",
      minuteText: "Minúty",
      monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
      monthText: "Mesiac",
      secText: "Sekundy",
      timeFormat: "H:ii",
      yearText: "Rok",
      nowText: "Teraz",
      amText: "am",
      pmText: "pm",
      todayText: "Dnes",
      firstDay: 1,
      dateText: "Datum",
      timeText: "Čas",
      closeText: "Zavrieť",
      allDayText: "Celý deň",
      noEventsText: "Žiadne udalosti",
      eventText: "Udalostí",
      eventsText: "Udalosti",
      moreEventsText: "{count} ďalšia",
      moreEventsPluralText: "{count} ďalšie",
      fromText: "Začiatok",
      toText: "Koniec",
      wholeText: "Celý",
      fractionText: "Časť",
      unitText: "Jednotka",
      labels: ["Roky", "Mesiace", "Dni", "Hodiny", "Minúty", "Sekundy", ""],
      labelsShort: ["Rok", "Mes", "Dni", "Hod", "Min", "Sec", ""],
      startText: "Start",
      stopText: "Stop",
      resetText: "Resetovať",
      lapText: "Etapa",
      hideText: "Schovať",
      backText: "Späť",
      undoText: "Späť",
      offText: "O",
      onText: "I",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.sr = {
      setText: "Постави",
      cancelText: "Откажи",
      clearText: "Обриши",
      selectedText: "{count} изабрана",
      dateFormat: "dd.mm.yy",
      dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
      dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
      dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
      dayText: "Дан",
      delimiter: ".",
      hourText: "Час",
      minuteText: "Минут",
      monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
      monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
      monthText: "месец",
      secText: "Секунд",
      timeFormat: "H:ii",
      yearText: "година",
      nowText: "сада",
      pmText: "pm",
      amText: "am",
      firstDay: 1,
      dateText: "Датум",
      timeText: "време",
      todayText: "Данас",
      prevMonthText: "Претходни мјесец",
      nextMonthText: "Следећег месеца",
      prevYearText: "Претходна године",
      nextYearText: "Следеће године",
      closeText: "Затвори",
      eventText: "Догађај",
      eventsText: "Догађаји",
      allDayText: "Цео дан",
      noEventsText: "Нема догађаја",
      moreEventsText: "Још {count}",
      fromText: "Од",
      toText: "До",
      wholeText: "цео",
      fractionText: "Фракција",
      unitText: "единица",
      labels: ["Године", "Месеци", "Дана", "Сати", "Минута", "Секунди", ""],
      labelsShort: ["Год", "Мес", "Дана", "Сати", "Мину", "Секу", ""],
      startText: "Започни",
      stopText: "Стоп",
      resetText: "Ресетуј",
      lapText: "Круг",
      hideText: "Сакрити",
      backText: "Повратак",
      undoText: "Опозови",
      offText: "нe",
      onText: "да",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.sv = {
      setText: "OK",
      cancelText: "Avbryt",
      clearText: "Klara",
      selectedText: "{count} vald",
      dateFormat: "yy-mm-dd",
      dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
      dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
      dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
      dayText: "Dag",
      hourText: "Timme",
      minuteText: "Minut",
      monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
      monthText: "Månad",
      secText: "Sekund",
      timeFormat: "HH:ii",
      yearText: "År",
      nowText: "Nu",
      pmText: "pm",
      amText: "am",
      todayText: "I dag",
      firstDay: 1,
      dateText: "Datum",
      timeText: "Tid",
      closeText: "Stäng",
      allDayText: "Heldag",
      noEventsText: "Inga aktiviteter",
      eventText: "Händelse",
      eventsText: "Händelser",
      moreEventsText: "{count} till",
      fromText: "Start",
      toText: "Slut",
      wholeText: "Hela",
      fractionText: "Bråk",
      unitText: "Enhet",
      labels: ["År", "Månader", "Dagar", "Timmar", "Minuter", "Sekunder", ""],
      labelsShort: ["År", "Mån", "Dag", "Tim", "Min", "Sek", ""],
      startText: "Start",
      stopText: "Stopp",
      resetText: "Återställ",
      lapText: "Varv",
      hideText: "Dölj",
      backText: "Tillbaka",
      undoText: "Ångra",
      offText: "Av",
      onText: "På"
    }, n.i18n.th = {
      setText: "ตั้งค่า",
      cancelText: "ยกเลิก",
      clearText: "ล้าง",
      selectedText: "{count} เลือก",
      dateFormat: "dd/mm/yy",
      dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
      dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
      dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
      dayText: "วัน",
      delimiter: ".",
      hourText: "ชั่วโมง",
      minuteText: "นาที",
      monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
      monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
      monthText: "เดือน",
      secText: "วินาที",
      timeFormat: "HH:ii",
      yearText: "ปี",
      nowText: "ตอนนี้",
      pmText: "pm",
      amText: "am",
      firstDay: 0,
      dateText: "วัน",
      timeText: "เวลา",
      today: "วันนี้",
      prevMonthText: "เดือนก่อนหน้า",
      nextMonthText: "เดือนถัดไป",
      prevYearText: "ปีก่อนหน้า",
      nextYearText: "ปีถัดไป",
      closeText: "ปิด",
      eventText: "เหตุการณ์",
      eventsText: "เหตุการณ์",
      allDayText: "ตลอดวัน",
      noEventsText: "ไม่มีกิจกรรม",
      moreEventsText: "อีก {count} กิจกรรม",
      fromText: "จาก",
      toText: "ถึง",
      wholeText: "ทั้งหมด",
      fractionText: "เศษส่วน",
      unitText: "หน่วย",
      labels: ["ปี", "เดือน", "วัน", "ชั่วโมง", "นาที", "วินาที", ""],
      labelsShort: ["ปี", "เดือน", "วัน", "ชั่วโมง", "นาที", "วินาที", ""],
      startText: "เริ่ม",
      stopText: "หยุด",
      resetText: "รีเซ็ต",
      lapText: "รอบ",
      hideText: "ซ่อน",
      backText: "ย้อนกลับ",
      undoText: "เลิกทา",
      offText: "ปิด",
      onText: "เปิด",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.tr = {
      setText: "Seç",
      cancelText: "İptal",
      clearText: "Temizleyin",
      selectedText: "{count} seçilmiş",
      dateFormat: "dd.mm.yy",
      dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
      dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
      dayText: "Gün",
      delimiter: ".",
      hourText: "Saat",
      minuteText: "Dakika",
      monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
      monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
      monthText: "Ay",
      secText: "Saniye",
      timeFormat: "HH:ii",
      yearText: "Yıl",
      nowText: "Şimdi",
      pmText: "pm",
      amText: "am",
      todayText: "Bugün",
      firstDay: 1,
      dateText: "Tarih",
      timeText: "Zaman",
      closeText: "Kapatmak",
      allDayText: "Tüm gün",
      noEventsText: "Etkinlik Yok",
      eventText: "Etkinlik",
      eventsText: "Etkinlikler",
      moreEventsText: "{count} tane daha",
      fromText: "Başla",
      toText: "Son",
      wholeText: "Tam",
      fractionText: "Kesir",
      unitText: "Birim",
      labels: ["Yıl", "Ay", "Gün", "Saat", "Dakika", "Saniye", ""],
      labelsShort: ["Yıl", "Ay", "Gün", "Sa", "Dak", "Sn", ""],
      startText: "Başla",
      stopText: "Durdur",
      resetText: "Sıfırla",
      lapText: "Tur",
      hideText: "Gizle",
      backText: "Geri",
      undoText: "Geri Al",
      offText: "O",
      onText: "I",
      decimalSeparator: ",",
      thousandsSeparator: "."
    }, n.i18n.ua = {
      setText: "встановити",
      cancelText: "відміна",
      clearText: "очистити",
      selectedText: "{count} вибрані",
      dateFormat: "dd.mm.yy",
      dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
      dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      dayText: "День",
      delimiter: ".",
      hourText: "година",
      minuteText: "хвилина",
      monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
      monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
      monthText: "Місяць",
      secText: "Секунд",
      timeFormat: "H:ii",
      yearText: "Рік",
      nowText: "Зараз",
      pmText: "pm",
      amText: "am",
      firstDay: 1,
      dateText: "дата",
      timeText: "Час",
      todayText: "Сьогодні",
      prevMonthText: "Попередній місяць",
      nextMonthText: "Наступного місяця",
      prevYearText: "Попередній рік",
      nextYearText: "Наступного року",
      closeText: "Закрити",
      eventText: "подія",
      eventsText: "події",
      allDayText: "Увесь день",
      noEventsText: "Жодної події",
      moreEventsText: "та ще {count}",
      fromText: "від",
      toText: "кінець",
      wholeText: "всі",
      fractionText: "фракція",
      unitText: "одиниця",
      labels: ["Рік", "Місяць", "День", "година", "хвилина", "Секунд", ""],
      labelsShort: ["Рік", "Місяць", "День", "година", "хвилина", "Секунд", ""],
      startText: "Початок",
      stopText: "СТОП",
      resetText: "скинути",
      lapText: "коло",
      hideText: "сховати",
      backText: "назад",
      undoText: "відмінити",
      offText: "Вимикати",
      onText: "Увімкнути",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.vi = {
      setText: "Đặt",
      cancelText: "Hủy bỏ",
      clearText: "Xóa",
      selectedText: "{count} chọn",
      dateFormat: "dd/mm/yy",
      dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
      dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      dayText: "",
      delimiter: "/",
      hourText: "Giờ",
      minuteText: "Phút",
      monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
      monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      monthText: "Tháng",
      secText: "Giây",
      timeFormat: "H:ii",
      yearText: "Năm",
      nowText: "Bây giờ",
      pmText: "pm",
      amText: "am",
      firstDay: 0,
      dateText: "Ngày",
      timeText: "Hồi",
      todayText: "Hôm nay",
      prevMonthText: "Tháng trước",
      nextMonthText: "Tháng tới",
      prevYearText: "Măm trước",
      nextYearText: "Năm tới",
      closeText: "Đóng",
      eventText: "Sự kiện",
      eventsText: "Sự kiện",
      allDayText: "Cả ngày",
      noEventsText: "Không có sự kiện",
      moreEventsText: "{count} thẻ khác",
      fromText: "Từ",
      toText: "Tới",
      wholeText: "Toàn thể",
      fractionText: "Phân số",
      unitText: "đơn vị",
      labels: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
      labelsShort: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
      startText: "Bắt đầu",
      stopText: "Dừng",
      resetText: "Đặt lại",
      lapText: "Vòng",
      hideText: "Giấu",
      backText: "Quay lại",
      undoText: "Hoàn tác",
      offText: "Tất",
      onText: "Bật",
      decimalSeparator: ",",
      thousandsSeparator: " "
    }, n.i18n.zh = {
      setText: "确定",
      cancelText: "取消",
      clearText: "明确",
      selectedText: "{count} 选",
      dateFormat: "yy年mm月d日",
      dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
      dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
      dayText: "日",
      hourText: "时",
      minuteText: "分",
      monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
      monthText: "月",
      secText: "秒",
      timeFormat: "HH:ii",
      yearText: "年",
      nowText: "当前",
      pmText: "下午",
      amText: "上午",
      yearSuffix: "年",
      monthSuffix: "月",
      daySuffix: "日",
      todayText: "今天",
      dateText: "日",
      timeText: "时间",
      closeText: "关闭",
      allDayText: "全天",
      noEventsText: "无事件",
      eventText: "活动",
      eventsText: "活动",
      moreEventsText: "他 {count} 件",
      fromText: "开始时间",
      toText: "结束时间",
      wholeText: "合计",
      fractionText: "分数",
      unitText: "单位",
      labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
      labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
      startText: "开始",
      stopText: "停止",
      resetText: "重置",
      lapText: "圈",
      hideText: "隐藏",
      backText: "返回",
      undoText: "复原",
      offText: "关闭",
      onText: "开启",
      decimalSeparator: ",",
      thousandsSeparator: " "
    };
    var vr = n.themes;
    vr.frame.bootstrap = {
      disabledClass: "disabled",
      selectedClass: "btn-primary",
      selectedTabClass: "active",
      tabLink: !0,
      todayClass: "text-primary mbsc-cal-today",
      onMarkupInserted: function onMarkupInserted(e) {
        var t = ye(e.target),
            a = ye(".mbsc-cal-tabs", t);
        ye(".mbsc-fr-popup", t).addClass("popover"), ye(".mbsc-fr-w", t).addClass("popover-content"), ye(".mbsc-fr-hdr", t).addClass("popover-title popover-header"), ye(".mbsc-fr-arr-i", t).addClass("popover"), ye(".mbsc-fr-arr", t).addClass("arrow"), ye(".mbsc-fr-btn", t).addClass("btn btn-default btn-secondary"), ye(".mbsc-fr-btn-s .mbsc-fr-btn", t).removeClass("btn-default btn-secondary").addClass("btn btn-primary"), a.addClass("nav nav-tabs"), a.find(".mbsc-cal-tab").addClass("nav-item"), a.find("a").addClass("nav-link"), a.find(".mbsc-cal-tab.active .nav-link").addClass("active"), ye(".mbsc-cal-picker", t).addClass("popover"), ye(".mbsc-range-btn", t).addClass("btn btn-sm btn-small btn-default"), ye(".mbsc-np-btn", t).addClass("btn btn-default"), ye(".mbsc-sel-filter-cont", t).removeClass("mbsc-input"), ye(".mbsc-sel-filter-input", t).addClass("form-control");
      },
      onTabChange: function onTabChange(e, t) {
        ye(".mbsc-cal-tabs .nav-link", t._markup).removeClass("active"), ye(".mbsc-cal-tab.active .nav-link", t._markup).addClass("active");
      },
      onPosition: function onPosition(e) {
        setTimeout(function () {
          ye(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", e.target).removeClass("bottom bs-popover-bottom").addClass("top bs-popover-top"), ye(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i", e.target).removeClass("top bs-popover-top").addClass("bottom  bs-popover-bottom");
        }, 10);
      }
    }, vr.scroller.bootstrap = Se({}, vr.frame.bootstrap, {
      dateDisplay: "Mddyy",
      btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
      btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
      btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5 btn-light",
      btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5 btn-light",
      selectedLineHeight: !0,
      onEventBubbleShow: function onEventBubbleShow(e) {
        var t = ye(e.eventList);
        ye(".mbsc-cal-event-list", t).addClass("list-group"), ye(".mbsc-cal-event", t).addClass("list-group-item");
      }
    }), vr.navigation.bootstrap = {
      wrapperClass: "popover panel panel-default",
      groupClass: "btn-group",
      activeClass: "btn-primary",
      disabledClass: "disabled",
      itemClass: "btn btn-default"
    };
    var br,
        gr,
        xr = n.themes;
  
    function yr(e, t) {
      var a = G(t, "X", !0),
          n = G(t, "Y", !0),
          s = e.offset(),
          i = a - s.left,
          o = n - s.top,
          r = Math.max(i, e[0].offsetWidth - i),
          l = Math.max(o, e[0].offsetHeight - o),
          c = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(l, 2));
      Tr(gr), gr = ye('<span class="mbsc-ripple"></span>').css({
        width: c,
        height: c,
        top: n - s.top - c / 2,
        left: a - s.left - c / 2
      }).appendTo(e), setTimeout(function () {
        gr.addClass("mbsc-ripple-scaled mbsc-ripple-visible");
      }, 10);
    }
  
    function Tr(e) {
      setTimeout(function () {
        e && (e.removeClass("mbsc-ripple-visible"), setTimeout(function () {
          e.remove();
        }, 2e3));
      }, 100);
    }
  
    function _r(e, t, a, n) {
      var s, i;
      e.off(".mbsc-ripple").on("touchstart.mbsc-ripple mousedown.mbsc-ripple", t, function (e) {
        ot(e, this) && (s = G(e, "X"), i = G(e, "Y"), (br = ye(this)).hasClass(a) || br.hasClass(n) ? br = null : yr(br, e));
      }).on("touchmove.mbsc-ripple mousemove.mbsc-ripple", t, function (e) {
        (br && Math.abs(G(e, "X") - s) > 9 || Math.abs(G(e, "Y") - i) > 9) && (Tr(gr), br = null);
      }).on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", t, function () {
        br && (setTimeout(function () {
          Tr(gr);
        }, 100), br = null);
      });
    }
  
    xr.frame.ios = {
      display: "bottom",
      headerText: !1,
      btnWidth: !1,
      deleteIcon: "ios-backspace",
      scroll3d: "wp" != _ && ("android" != _ || C > 7)
    }, xr.scroller.ios = Se({}, xr.frame.ios, {
      rows: 5,
      height: 34,
      minWidth: 55,
      selectedLineHeight: !0,
      selectedLineBorder: 1,
      showLabel: !1,
      useShortLabels: !0,
      btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
      btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
      checkIcon: "ion-ios7-checkmark-empty",
      filterClearIcon: "ion-close-circled",
      dateDisplay: "MMdyy",
      btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
      btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }), xr.listview.ios = {
      leftArrowClass: "mbsc-ic-ion-ios7-arrow-back",
      rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward"
    }, xr.form.ios = {};
    var wr = n.themes;
    wr.frame.material = {
      headerText: !1,
      btnWidth: !1,
      deleteIcon: "material-backspace",
      onMarkupReady: function onMarkupReady(e) {
        _r(ye(e.target), ".mbsc-fr-btn-e", "mbsc-disabled", "mbsc-fr-btn-nhl");
      }
    }, wr.scroller.material = Se({}, wr.frame.material, {
      showLabel: !1,
      selectedLineBorder: 2,
      weekDays: "min",
      icon: {
        filled: "material-star",
        empty: "material-star-outline"
      },
      checkIcon: "material-check",
      btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
      btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
      btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
      btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right"
    }), wr.listview.material = {
      leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
      rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
      onItemActivate: function onItemActivate(e) {
        yr(ye(e.target), e.domEvent);
      },
      onItemDeactivate: function onItemDeactivate() {
        Tr(gr);
      },
      onSlideStart: function onSlideStart(e) {
        ye(".mbsc-ripple", e.target).remove();
      },
      onSortStart: function onSortStart(e) {
        ye(".mbsc-ripple", e.target).remove();
      }
    }, wr.navigation.material = {
      onInit: function onInit() {
        _r(ye(this), ".mbsc-ms-item.mbsc-btn-e", "mbsc-disabled", "mbsc-btn-nhl");
      },
      onMarkupInit: function onMarkupInit() {
        ye(".mbsc-ripple", this).remove();
      },
      onDestroy: function onDestroy() {
        ye(this).off(".mbsc-ripple");
      }
    }, wr.form.material = {
      addRipple: function addRipple(e, t) {
        yr(e, t);
      },
      removeRipple: function removeRipple() {
        Tr(gr);
      }
    };
    var Cr = n.themes;
    Cr.frame.windows = {
      headerText: !1,
      deleteIcon: "backspace4",
      btnReverse: !0
    }, Cr.scroller.windows = Se({}, Cr.frame.windows, {
      rows: 6,
      minWidth: 88,
      height: 44,
      btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
      btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
      checkIcon: "material-check",
      dateDisplay: "MMdyy",
      showLabel: !1,
      showScrollArrows: !0,
      btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
      btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
      dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      useShortLabels: !0
    }), Cr.form.windows = {}, n.customTheme("ios-dark", "ios"), n.customTheme("material-dark", "material"), n.customTheme("mobiscroll-dark", "mobiscroll"), n.customTheme("windows-dark", "windows");
    var Sr = n.themes,
        Mr = "mobiscroll";
    return "android" == _ ? Mr = "material" : "ios" == _ ? Mr = "ios" : "wp" == _ && (Mr = "windows"), ye.each(Sr.frame, function (e, t) {
      if (Mr && t.baseTheme == Mr && "mobiscroll-dark" != e && "material-dark" != e && "windows-dark" != e && "ios-dark" != e) return n.autoTheme = e, !1;
      e == Mr && (n.autoTheme = e);
    }), n.customTheme("ios-gray", "ios"), n.customTheme("material-indigo", "material"), n.customTheme("mobiscroll-lime", "mobiscroll"), n.customTheme("windows-yellow", "windows"), n.apiKey = "8b2967bf", n.apiUrl = "https://trial.mobiscroll.com/", n.fw = "react", n;
  });
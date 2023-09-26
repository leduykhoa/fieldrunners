window.jQuery(document).ready(function () {
    function retryImage(a, b) {
        if (a.attempts && a.attempts > kMaxAttempts)
            return;
        var c = [], d;
        for (d = 1; d < arguments.length; d++)
            c.push(arguments[d]);
        if (this.contentPrefix || this.prefix)
            b = (this.contentPrefix || this.prefix) + "/" + b;
        a.src = "about:blank", a.src = b, a.attempts = a.attempts ? a.attempts + 1 : 1
    }
    (function () {
        Math.clamp = function (a, b, c) {
            return Math.max(Math.min(a, c), b)
        }, Math.lerp = function (a, b, c) {
            return (c - b) * Math.clamp(a, 0, 1) + b
        }, Math.log10 = function (a) {
            return Math.log(a) / Math.log(10)
        }, Math.sum = function (a) {
            var b = 0;
            return a.forEach(function (a) {
                b += a
            }), b
        };
        var a = {};
        a.inRange = function (a, b) {
            var c = b - a;
            return Math.random() * c + a
        };
        var b = {};
        b.all = function (a, b) {
            var c = !0, d = a.length;
            for (var e = 0; e < d; e++)
                if (!b(a[e], e, a)) {
                    c = !1;
                    break
                }
            return c
        };
        var c = {};
        c.findValue = function (a, b, c, d) {
            if (b === null || b == undefined)
                return d;
            if (c) {
                b = b.toLowerCase();
                for (var e in a)
                    if (e.toLowerCase() == b)
                        return a[e]
            } else
                for (var e in a)
                    if (e == b)
                        return a[e];
            return d
        }, c.findKey = function (a, b, c) {
            for (var d in a)
                if (a[d] == b)
                    return d;
            return c
        };
        var d = function (a, b) {
            return function (d) {
                return c.findValue(a, d, !0, b)
            }
        };
        Object.destroy = function (a) {
            for (var b in a)
                a[b] && a[b].destroy && a[b].destroy(), delete a[b]
        }, Array.prototype.destroy = function () {
            for (var a = this.length - 1; a >= 0; a--)
                this[a] && this[a].destroy && this[a].destroy(), this.pop()
        }, Array.prototype.remove = function (a) {
            var b = this.indexOf(a);
            b != -1 && this.removeAt(b)
        }, Array.prototype.removeFast = function (a) {
            this.removeAtIndexFast(this.indexOf(a))
        }, Array.prototype.removeAt = function (a) {
            if (a > this.length / 2) {
                for (var b = a, c = this.length - 1; b < c; b++)
                    this[b] = this[b + 1];
                this.pop()
            } else {
                for (var b = a; b > 0; b--)
                    this[b] = this[b - 1];
                this.shift()
            }
        }, Array.prototype.removeAtIndex = Array.prototype.removeAt, Array.prototype.removeLastObject = function () {
            this.pop()
        }, Array.prototype.removeAtIndexFast = function (a) {
            if (a == -1)
                return;
            var b = this[a];
            this[a] = this[this.length - 1], this[this.length - 1] = b, this.pop()
        }, Array.prototype.clear = function () {
            while (this.length > 0)
                this.pop()
        }, Array.prototype.removeAllObjects = Array.prototype.clear, Array.prototype.swapObjects = function (a, b) {
            var c = this[a];
            this[a] = this[b], this[b] = c
        }, Array.prototype.containsObject = function (a) {
            return this.indexOf(a) != -1
        }, StringExt = {
            stringByDeletingPathExtension: function (a) {
                return a.match(/(.*)\.\w+$/)[1]
            }, pathExtension: function (a) {
                return a.match(/\.(.*)$/)[1]
            }, hasPrefix: function (a, b) {
                return (new RegExp("^" + b)).test(a)
            }
        };
        var e = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                var b = Math.random() * 16 | 0, c = a == "x" ? b : b & 3 | 8;
                return c.toString(16)
            })
        }, f = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
        window.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                window.setTimeout(a, 1e3 / 60)
            }
        }(), console.Level = { NONE: -1, INFO: 0, WARN: 1, DEBUG: 2, ASSERT: 3, ALL: 4 };
        var g = console.Level.INFO, h = function () {
        };
        console._info = console.info, console._warn = console.warn, console._debug = console.debug, console._assert = console.assert, Object.defineProperty(console, "level", {
            get: function () {
                return g
            }, set: function (a) {
                g = a, console.info = a < console.Level.INFO ? h : console._info, console.warn = a < console.Level.WARN ? h : console._warn, console.debug = a < console.Level.DEBUG ? h : console._debug, console.assert = a < console.Level.ASSERT ? h : console._assert
            }, configurable: !0
        }), console.level = console.Level.NONE, this.Enum = c, this.Functional = this.F = b, this.Random = a, this.parseEnum = d, this.parseString = function (a) {
            return a
        }, this.guid = e, this.bindSelf = f
    })(), function () {
        var a = !1, b = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
        this.Class = function () {
        }, Class.extend = function (c, d) {
            var e = this.prototype;
            a = !0;
            var f = new this;
            a = !1;
            for (var g in c) {
                if (typeof c[g] == "object") {
                    c[g].get && f.__defineGetter__(g, typeof c[g].get == "function" && typeof e.__lookupGetter__(g) == "function" && b.test(c[g].get) ? function (a, b) {
                        return function () {
                            var c = this._super;
                            this._super = e.__lookupGetter__(a);
                            var d = b.apply(this, arguments);
                            return this._super = c, d
                        }
                    }(g, c[g].get) : c[g].get), c[g].set && f.__defineSetter__(g, typeof c[g].set == "function" && typeof e.__lookupSetter__(g) == "function" && b.test(c[g].set) ? function (a, b) {
                        return function () {
                            var c = this._super;
                            this._super = e.__lookupSetter__(a);
                            var d = b.apply(this, arguments);
                            return this._super = c, d
                        }
                    }(g, c[g].set) : c[g].set);
                    continue
                }
                f[g] = typeof c[g] == "function" && typeof e[g] == "function" && b.test(c[g]) ? function (a, b) {
                    return function () {
                        var c = this._super;
                        this._super = e[a];
                        var d = b.apply(this, arguments);
                        return this._super = c, d
                    }
                }(g, c[g]) : c[g]
            }
            return d = d || "Class", Class = function () {
                !a && this.init && this.init.apply(this, arguments)
            }, Class.prototype = f, Class.constructor = Class, Class.extend = arguments.callee, Class
        }
    }();
    var sprintf = function () {
        function a(a) {
            return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
        }
        function b(a, b) {
            for (var c = []; b > 0; c[--b] = a)
                ;
            return c.join("")
        }
        var c = function () {
            return c.cache.hasOwnProperty(arguments[0]) || (c.cache[arguments[0]] = c.parse(arguments[0])), c.format.call(null, c.cache[arguments[0]], arguments)
        };
        return c.format = function (c, d) {
            var e = 1, f = c.length, g = "", h, i = [], j, k, l, m, n, o;
            for (j = 0; j < f; j++) {
                g = a(c[j]);
                if (g === "string")
                    i.push(c[j]);
                else if (g === "array") {
                    l = c[j];
                    if (l[2]) {
                        h = d[e];
                        for (k = 0; k < l[2].length; k++) {
                            if (!h.hasOwnProperty(l[2][k]))
                                throw sprintf('[sprintf] property "%s" does not exist', l[2][k]);
                            h = h[l[2][k]]
                        }
                    } else
                        l[1] ? h = d[l[1]] : h = d[e++];
                    if (/[^s]/.test(l[8]) && a(h) != "number")
                        throw sprintf("[sprintf] expecting number but found %s", a(h));
                    switch (l[8]) {
                        case "b":
                            h = h.toString(2);
                            break;
                        case "c":
                            h = String.fromCharCode(h);
                            break;
                        case "d":
                            h = parseInt(h, 10);
                            break;
                        case "e":
                            h = l[7] ? h.toExponential(l[7]) : h.toExponential();
                            break;
                        case "f":
                            h = l[7] ? parseFloat(h).toFixed(l[7]) : parseFloat(h);
                            break;
                        case "o":
                            h = h.toString(8);
                            break;
                        case "s":
                            h = (h = String(h)) && l[7] ? h.substring(0, l[7]) : h;
                            break;
                        case "u":
                            h = Math.abs(h);
                            break;
                        case "x":
                            h = h.toString(16);
                            break;
                        case "X":
                            h = h.toString(16).toUpperCase()
                    }
                    h = /[def]/.test(l[8]) && l[3] && h >= 0 ? "+" + h : h, n = l[4] ? l[4] == "0" ? "0" : l[4].charAt(1) : " ", o = l[6] - String(h).length, m = l[6] ? b(n, o) : "", i.push(l[5] ? h + m : m + h)
                }
            }
            return i.join("")
        }, c.cache = {}, c.parse = function (a) {
            var b = a, c = [], d = [], e = 0;
            while (b) {
                if ((c = /^[^\x25]+/.exec(b)) !== null)
                    d.push(c[0]);
                else if ((c = /^\x25{2}/.exec(b)) !== null)
                    d.push("%");
                else {
                    if ((c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)) === null)
                        throw "[sprintf] huh?";
                    if (c[2]) {
                        e |= 1;
                        var f = [], g = c[2], h = [];
                        if ((h = /^([a-z_][a-z_\d]*)/i.exec(g)) === null)
                            throw "[sprintf] huh?";
                        f.push(h[1]);
                        while ((g = g.substring(h[0].length)) !== "")
                            if ((h = /^\.([a-z_][a-z_\d]*)/i.exec(g)) !== null)
                                f.push(h[1]);
                            else {
                                if ((h = /^\[(\d+)\]/.exec(g)) === null)
                                    throw "[sprintf] huh?";
                                f.push(h[1])
                            }
                        c[2] = f
                    } else
                        e |= 2;
                    if (e === 3)
                        throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                    d.push(c)
                }
                b = b.substring(c[0].length)
            }
            return d
        }, c
    }(), vsprintf = function (a, b) {
        return b.unshift(a), sprintf.apply(null, b)
    };
    (function () {
        BinaryParser = function (a, b) {
            this.bigEndian = a, this.allowExceptions = b
        };
        with ({ p: BinaryParser.prototype }) {
            p.encodeFloat = function (a, b, c) {
                var d = Math.pow(2, c - 1) - 1, e = -d + 1, f = d, g = e - b, h = isNaN(m = parseFloat(a)) || m == -Infinity || m == +Infinity ? m : 0, i = 0, j = 2 * d + 1 + b + 3, k = new Array(j), l = (m = h !== 0 ? 0 : m) < 0, m = Math.abs(m), n = Math.floor(m), o = m - n, p, q, s, t, u;
                for (p = j; p; k[--p] = 0)
                    ;
                for (p = d + 2; n && p; k[--p] = n % 2, n = Math.floor(n / 2))
                    ;
                for (p = d + 1; o > 0 && p; (k[++p] = ((o *= 2) >= 1) - 0) && --o)
                    ;
                for (p = - 1; ++p < j && !k[p];)
                    ;
                if (k[(q = b - 1 + (p = (i = d + 1 - p) >= e && i <= f ? p + 1 : d + 1 - (i = e - 1))) + 1]) {
                    if (!(s = k[q]))
                        for (t = q + 2; !s && t < j; s = k[t++])
                            ;
                    for (t = q + 1; s && --t >= 0; (k[t] = !k[t] - 0) && (s = 0))
                        ;
                }
                for (p = p - 2 < 0 ? - 1 : p - 3; ++p < j && !k[p];)
                    ;
                (i = d + 1 - p) >= e && i <= f ? ++p : i < e && (i != d + 1 - j && i < g && this.warn("encodeFloat::float underflow"), p = d + 1 - (i = e - 1)), (n || h !== 0) && (this.warn(n ? "encodeFloat::float overflow" : "encodeFloat::" + h), i = f + 1, p = d + 2, h == -Infinity ? l = 1 : isNaN(h) && (k[p] = 1));
                for (m = Math.abs(i + d), t = c + 1, u = ""; --t; u = m % 2 + u, m = m >>= 1)
                    ;
                for (m = 0, t = 0, p = (u = (l ? "1" : "0") + u + k.slice(p, p + b).join("")).length, r = []; p; m += (1 << t) * u.charAt(--p), t == 7 && (r[r.length] = String.fromCharCode(m), m = 0), t = (t + 1) % 8)
                    ;
                return r[r.length] = m ? String.fromCharCode(m) : "", (this.bigEndian ? r.reverse() : r).join("")
            }, p.encodeInt = function (a, b, c) {
                var d = Math.pow(2, b), e = [];
                (a >= d || a < -(d >> 1)) && this.warn("encodeInt::overflow") && (a = 0), a < 0 && (a += d);
                for (; a; e[e.length] = String.fromCharCode(a % 256), a = Math.floor(a / 256))
                    ;
                for (b = - (- b >> 3) - e.length; b--; e[e.length] = "\0")
                    ;
                return (this.bigEndian ? e.reverse() : e).join("")
            }, p.decodeFloat = function (a, b, c) {
                var d = ((d = new this.Buffer(this.bigEndian, a)).checkBuffer(b + c + 1), d), e = Math.pow(2, c - 1) - 1, f = d.readBits(b + c, 1), g = d.readBits(b, c), h = 0, i = 2, j = d.buffer.length + (-b >> 3) - 1, k, l, m;
                do
                    for (k = d.buffer[++j], l = b % 8 || 8, m = 1 << l; m >>= 1; k & m && (h += 1 / i), i *= 2)
                        ;
                while (b -= l);
                return g == (e << 1) + 1 ? h ? NaN : f ? -Infinity : +Infinity : (1 + f * -2) * (g || h ? g ? Math.pow(2, g - e) * (1 + h) : Math.pow(2, -e + 1) * h : 0)
            }, p.decodeInt = function (a, b, c) {
                var d = new this.Buffer(this.bigEndian, a), e = d.readBits(0, b), f = Math.pow(2, b);
                return c && e >= f / 2 ? e - f : e
            };
            with ({
                p: (p.Buffer = function (a, b) {
                    this.bigEndian = a || 0, this.buffer = [], this.setBuffer(b)
                }).prototype
            })
            p.readBits = function (a, b) {
                function c(a, b) {
                    for (++b; --b; a = ((a %= 2147483647 + 1) & 1073741824) == 1073741824 ? a * 2 : (a - 1073741824) * 2 + 2147483647 + 1)
                        ;
                    return a
                }
                if (a < 0 || b <= 0)
                    return 0;
                this.checkBuffer(a + b);
                for (var d, e = a % 8, f = this.buffer.length - (a >> 3) - 1, g = this.buffer.length + (-(a + b) >> 3), h = f - g, i = (this.buffer[f] >> e & (1 << (h ? 8 - e : b)) - 1) + (h && (d = (a + b) % 8) ? (this.buffer[g++] & (1 << d) - 1) << (h-- << 3) - e : 0); h; i += c(this.buffer[g++], (h-- << 3) - e))
                    ;
                return i
            }, p.setBuffer = function (a) {
                if (a) {
                    for (var b, c = b = a.length, d = this.buffer = new Array(b); c; d[b - c] = a.charCodeAt(--c))
                        ;
                    this.bigEndian && d.reverse()
                }
            }, p.hasNeededBits = function (a) {
                return this.buffer.length >= -(-a >> 3)
            }, p.checkBuffer = function (a) {
                if (!this.hasNeededBits(a))
                    throw new Error("checkBuffer::missing bytes")
            };
            p.warn = function (a) {
                if (this.allowExceptions)
                    throw new Error(a);
                return 1
            }, p.toSmall = function (a) {
                return this.decodeInt(a, 8, !0)
            }, p.fromSmall = function (a) {
                return this.encodeInt(a, 8, !0)
            }, p.toByte = function (a) {
                return this.decodeInt(a, 8, !1)
            }, p.fromByte = function (a) {
                return this.encodeInt(a, 8, !1)
            }, p.toShort = function (a) {
                return this.decodeInt(a, 16, !0)
            }, p.fromShort = function (a) {
                return this.encodeInt(a, 16, !0)
            }, p.toWord = function (a) {
                return this.decodeInt(a, 16, !1)
            }, p.fromWord = function (a) {
                return this.encodeInt(a, 16, !1)
            }, p.toInt = function (a) {
                return this.decodeInt(a, 30, !0)
            }, p.fromInt = function (a) {
                return this.encodeInt(a, 30, !0)
            }, p.toDWord = function (a) {
                return this.decodeInt(a, 30, !1)
            }, p.fromDWord = function (a) {
                return this.encodeInt(a, 30, !1)
            }, p.toFloat = function (a) {
                return this.decodeFloat(a, 23, 8)
            }, p.fromFloat = function (a) {
                return this.encodeFloat(a, 23, 8)
            }, p.toDouble = function (a) {
                return this.decodeFloat(a, 52, 11)
            }, p.fromDouble = function (a) {
                return this.encodeFloat(a, 52, 11)
            }
        }
    })();
    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
        }, searchString: function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].string, d = a[b].prop;
                this.versionSearchString = a[b].versionSearch || a[b].identity;
                if (c) {
                    if (c.indexOf(a[b].subString) != -1)
                        return a[b].identity
                } else if (d)
                    return a[b].identity
            }
        }, searchVersion: function (a) {
            var b = a.indexOf(this.versionSearchString);
            if (b == -1)
                return;
            return parseFloat(a.substring(b + this.versionSearchString.length + 1))
        }, dataBrowser: [{ string: navigator.userAgent, subString: "Chrome", identity: "Chrome" }, { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" }, { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" }, { prop: window.opera, identity: "Opera", versionSearch: "Version" }, { string: navigator.vendor, subString: "iCab", identity: "iCab" }, { string: navigator.vendor, subString: "KDE", identity: "Konqueror" }, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" }, { string: navigator.vendor, subString: "Camino", identity: "Camino" }, { string: navigator.userAgent, subString: "Netscape", identity: "Netscape" }, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }, { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" }, { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }], dataOS: [{ string: navigator.platform, subString: "Win", identity: "Windows" }, { string: navigator.platform, subString: "Mac", identity: "Mac" }, { string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod" }, { string: navigator.platform, subString: "Linux", identity: "Linux" }]
    };
    BrowserDetect.init();
    if (typeof btoa == "undefined")
        function btoa(a) {
            var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = [], d = 0;
            while (d < a.length) {
                var e = a.charCodeAt(d++), f = a.charCodeAt(d++), g = a.charCodeAt(d++), h = (e << 16) + ((f || 0) << 8) + (g || 0), i = (h & 63 << 18) >> 18, j = (h & 258048) >> 12, k = isNaN(f) ? 64 : (h & 4032) >> 6, l = isNaN(g) ? 64 : h & 63;
                c[c.length] = b.charAt(i), c[c.length] = b.charAt(j), c[c.length] = b.charAt(k), c[c.length] = b.charAt(l)
            }
            return c.join("")
        }
    if (typeof atob == "undefined")
        function atob(a) {
            var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = { strlen: a.length % 4 != 0, chars: (new RegExp("[^" + b + "]")).test(a), equals: /=/.test(a) && (/=[^=]/.test(a) || /={3}/.test(a)) };
            if (c.strlen || c.chars || c.equals)
                throw new Error("Invalid base64 data");
            var d = [], e = 0;
            while (e < a.length) {
                var f = b.indexOf(a.charAt(e++)), g = b.indexOf(a.charAt(e++)), h = b.indexOf(a.charAt(e++)), i = b.indexOf(a.charAt(e++)), j = (f << 18) + (g << 12) + ((h & 63) << 6) + (i & 63), k = (j & 255 << 16) >> 16, l = h == 64 ? -1 : (j & 65280) >> 8, m = i == 64 ? -1 : j & 255;
                d[d.length] = String.fromCharCode(k), l >= 0 && (d[d.length] = String.fromCharCode(l)), m >= 0 && (d[d.length] = String.fromCharCode(m))
            }
            return d.join("")
        }
    var gal = null, kMaxAttempts = 5, Preloader = function () {
        this.codeCache = {}, this.textCache = {}, this.callbacks = {}, this.loadingObjects = {}, this.loadAllCallbacks = [], this.dependencyMap = {}, this.objectDependencyMap = {}, this.log = !1
    }, removeAt = function (a) {
        var b = this.length;
        for (var c = a; c < b - 1; c++)
            this[c] = this[c + 1];
        this.pop()
    }, callLoadAll = function () {
        Object.keys(this.loadingObjects).length == 0 && (this.loadAllCallbacks.forEach(function (a) {
            a()
        }), this.loadAllCallbacks = [])
    }, handleMedia = function (a, b, c) {
        return handle.apply(arguments)
    }, handle = function (a, b, c) {
        return function () {
            a.log && console.log(b + " loaded"), callCallback.call(a, b, c), delete a.loadingObjects[b], callLoadAll.call(a), c && c.onload && (c.onload = undefined)
        }
    }, handleText = function (a, b) {
        return function (c) {
            a.log && console.log(b + " loaded"), callCallback.call(a, b, c), delete a.loadingObjects[b], a.textCache[b] = c, callLoadAll.call(a)
        }
    }, handleScript = function (a, b) {
        return function () {
            console.debug(b + " loaded")
        }
    }, setCallback = function (a, b, c) {
        if (b) {
            if (c)
                var d = b, b = function () {
                    d.apply(c, arguments)
                };
            this.callbacks[a] ? this.callbacks[a].push(b) : this.callbacks[a] = [b]
        }
    }, callCallback = function (a, b) {
        this.callbacks[a] && (this.callbacks[a].forEach(function (a) {
            a(b)
        }), delete this.callbacks[a])
    };
    Preloader.prototype.loadImage = function (a, b) {
        var c = a;
        if (this.contentPrefix || this.prefix)
            a = (this.contentPrefix || this.prefix) + "/" + a;
        var d = new Image;
        d.onload = handle(this, a, d), d.onerror = retryImage.bind(this, d, c);
        var e = document.createElement("a");
        return e.href = a, window.location.host != e.host && (d.crossOrigin = "use-credentials"), this.loadingObjects[a] = d, b && setCallback.call(this, a, b), d.src = a, d
    }, Preloader.prototype.initComplete = function (a) {
        console.debug(a + " initialized"), this.codeCache[a] = !0, callCallback.call(this, a), delete this.loadingObjects[a], callLoadAll.call(this)
    }, Preloader.prototype.loadText = function (a, b, c) {
        var d = a;
        if (this.contentPrefix || this.prefix)
            a = (this.contentPrefix || this.prefix) + "/" + a;
        self.log && console.log(a + " loading"), setCallback.call(this, a, b, c);
        if (this.textCache[a]) {
            handleText(this, a)(this.textCache[a]);
            return
        }
        this.loadingObjects[a] = { prefix: this.contentPrefix || this.prefix };
        var e = function (a, b) {
            if (this.loadingObjects[a].attempts > kMaxAttempts)
                return;
            var c = a, d = this.contentPrefix || this.prefix;
            this.loadingObjects[a].prefix != d && (c = d + "/" + a, this.loadingObjects[a].prefix = d), window.jQuery.ajax({
                url: a, dataType: "text", success: handleText(this, c), error: function () {
                    setTimeout(e.bind(this, a, b), 50)
                }.bind(this)
            }), this.loadingObjects[a].attempts = this.loadingObjects[a].attempts ? this.loadingObjects[a].attempts + 1 : 1
        };
        if (this.gal) {
            var f = this.gal.get(d);
            if (f)
                e.call(this, f, a);
            else {
                var g = this.gal.findBundleAndDownload(d);
                g ? this.gal.onLoaded(g, bindSelf(function () {
                    e.call(this, this.gal.get(d), a)
                }, this)) : e.call(this, a)
            }
        } else
            e.call(this, a, d)
    }, Preloader.prototype.loadScript = function (a, b) {
        var c = a;
        if (this.scriptPrefix || this.prefix)
            c = (this.scriptPrefix || this.prefix) + "/" + a;
        this.log && console.log(a + " loading");
        var d = this;
        if (this.codeCache[a])
            b();
        else if (this.loadingObjects[a])
            setCallback.call(this, a, b);
        else {
            setCallback.call(this, a, b), this.loadingObjects[a] = {};
            if (!this.falseScripts) {
                var e = document.createElement("script");
                e.onload = function () {
                    handleScript(d, a)
                }, e.src = c, document.head.appendChild(e)
            }
        }
    }, Preloader.prototype.loadManyScripts = function (a, b) {
        var c = this, d = !1, e = function () {
            return !d && F.all(a, function (a) {
                return Boolean(c.codeCache[a])
            })
        };
        if (e())
            b.call(window);
        else {
            var f = function () {
                e() && (d = !0, b.call(window))
            };
            a.forEach(function (a) {
                c.loadScript(a, f)
            })
        }
    }, Preloader.prototype.loadSound = function (a, b) {
        if (this.contentPrefix || this.prefix)
            a = (this.contentPrefix || this.prefix) + "/" + a;
        var c = new Audio;
        return c.onload = handle(this, a, c), this.loadingObjects[a] = c, setCallback.call(this, a, b), c.src = a, c
    }, Preloader.prototype.onLoadAll = function (a) {
        this.loadAllCallbacks.push(a)
    };
    var onDependencyLoaded = function (a, b) {
        return function () {
            (function () {
                var a = this.dependencyMap[b._guid];
                if (a) {
                    var c, d = [b], e = [];
                    do {
                        c = d.shift();
                        if (e.indexOf(c) != -1)
                            continue;
                        var f = this.dependencyMap[c._guid];
                        for (var g in f)
                            d.indexOf(f[g]) == -1 && d.push(f[g]);
                        c._dependenciesLoaded || (c._dependenciesLoaded = 0), c._dependenciesLoaded++, c.onprogress && c.onprogress(c._dependenciesLoaded, c._dependencies), e.push(c)
                    } while (d.length > 0);
                    delete this.dependencyMap[b._guid];
                    for (var h = a.length - 1; h >= 0; h--) {
                        var i = a[h], j = this.objectDependencyMap[i._guid];
                        j && j.remove(b), j.length === 0 && (delete this.objectDependencyMap[i._guid], i.isLoaded = !0, i instanceof Function ? i() : i.onload && i.onload.call(i))
                    }
                }
                delete b.onload
            }).apply(a, arguments)
        }
    };
    Preloader.prototype.dependOn = function (a, b) {
        var c = b == undefined;
        c && (b = { _guid: guid(), type: "function" }), a._guid || (a._guid = guid()), b && !b._guid && (b._guid = guid());
        var d = this.dependencyMap[b._guid], e = this.objectDependencyMap[a._guid];
        return d == undefined && (this.dependencyMap[b._guid] = d = [], b.onload = onDependencyLoaded(this, b)), e == undefined && (this.objectDependencyMap[a._guid] = e = []), d.indexOf(a) == -1 && d.push(a), e.indexOf(b) == -1 && e.push(b), a._dependencies || (a._dependencies = 0), a._dependencies = Math.max(a._dependencies, this.countDependencies(a)) + 1, b && b.isLoaded ? (b.onload(), b) : c ? b.onload : b
    }, Preloader.prototype.countDependencies = function (a, b) {
        var c = b ? -1 : 0;
        b || (b = []);
        var d = this.objectDependencyMap[a._guid];
        if (d == undefined)
            return 0;
        for (var e in d) {
            if (d[e] == undefined || b.indexOf(d[e]._guid) != -1)
                continue;
            b.push(d[e]._guid), this.countDependencies(d[e], b)
        }
        return b.length
    };
    var instance = Preloader.instance = new Preloader, wrap = function (a, b) {
        return function () {
            return a.apply(b || instance, arguments)
        }
    };
    Preloader.initialize = wrap(instance.initComplete, instance), Preloader.initComplete = wrap(instance.initComplete, instance), Preloader.loadText = wrap(instance.loadText), Preloader.loadScript = function () {
        return instance.loadScript.apply(instance, arguments)
    }, Preloader.loadManyScripts = wrap(instance.loadManyScripts, instance), Preloader.include = wrap(instance.loadManyScripts, instance), Preloader.loadImage = function () {
        return instance.loadImage.apply(instance, arguments)
    }, Preloader.onLoadAll = function () {
        return instance.onLoadAll.apply(instance, arguments)
    }, Preloader.dependOn = wrap(instance.dependOn);
    var defProp = function (a) {
        Object.defineProperty(Preloader, a, {
            get: function () {
                return instance[a]
            }, set: function (b) {
                instance[a] = b
            }, enumerable: !0, configurable: !1
        })
    };
    defProp("prefix"), defProp("contentPrefix"), defProp("scriptPrefix"), window.CONTENT_PREFIX && (Preloader.contentPrefix = window.CONTENT_PREFIX), window.Preloader = Preloader, Preloader.instance.falseScripts = !0, head.ready(function () {
        Preloader.include(["extras/gal.filesystem.js"], function () {
        })
    }), $(function () {
        Preloader.prefix = baseUrl, Preloader.contentPrefix = baseUrl + "/asset";
        var a = function () {
        };
        location.assign("#" + (localStorage.resolution || "hd")), Preloader.include(["graphics/renderdevice.js"], function () {
            $(window).bind("hashchange", function (b) {
                var c = window.location.toString(), d = "";
                c.indexOf("#") != -1 && (d = c.substring(c.indexOf("#") + 1));
                var e = 1024;
                d == "sd" && (e = 640), localStorage.resolution = d;
                var f = $("canvas"), g = f.parent(), h = $("body");
                d == "sd" ? h.addClass("sd") : h.removeClass("sd"), g.width(e), window.EAGLView ? (f.width(e), f.height(e * .75), EAGLView.sScreenDimensions.x = e, EAGLView.sScreenDimensions.y = e * .75) : Preloader.include(["graphics/renderdevice.js"], function () {
                    setTimeout(function () {
                        console.log("hashchange.trigger"), $(window).trigger("hashchange")
                    }, 0)
                }), $(window).unbind("resize", a), a = function () {
                    var a = 1865, b = 1120;
                    d == "sd" && (a = 1280, b = 800), $("body").css("margin-top", Math.max(0, Math.min(b - window.innerHeight, 80))), $("body").css("margin-left", Math.clamp(a - window.innerWidth, 0, d == "sd" ? 200 : 234))
                }, $(window).bind("resize", a).trigger("resize"), window.scrollTo(f.width() / 2 + f.position().left - window.innerWidth / 2, 0)
            }).trigger("hashchange")
        });
        if (window.innerHeight < 768 || window.innerHeight < 1024) {
            var b = localStorage.resolution;
            location.assign("#sd"), localStorage.resolution = b
        }
        Preloader.include(["extras/user.js"], function () {
            User.bind("change", function (a) {
                a.isAnonymous ? (jQuery("#user-bar").html('<a class="login">Login</a>'), jQuery(".login").attr("href", a.urls.login)) : jQuery("#user-bar").html(sprintf('%s | <a href="%s" class="logout">Logout</a>', a.email, a.urls.logout))
            }), Preloader.include(["extras/ads.js", "extras/payment.js", "game/map.js", "userinterface/forms/mapselectionform.js", "utilities/nextstep/userdefaults.js"], function () {
                function g(a) {
                    var b = jQuery("#sidebar");
                    !a && b.css("opacity") == 0 ? (f = !1, jQuery("body").css("margin-left", 0)) : f = !0, b.animate({ opacity: a ? 1 : 0 }, 1e3)
                }
                var a = NextStep.UserDefaults.standardUserDefaults(), b = [], c, d, e, f = !0;
                jQuery("#sidebar a").click(function () {
                    Payment.buy("all", function () {
                        eaglview.userInterface.activeBackgroundFormName == kTitleScreenFormName && eaglview.userInterface.switchToPopupForm(kMapConfigurationFormName)
                    })
                }), $(window).bind("hashchange", function () {
                    f || jQuery("body").css("margin-left", "")
                });
                for (c = kMapIndex.Grasslands + 1; c <= kMapIndexSingleplayerLast; c++)
                    d = Map.getOfficialMapNameForIndex(c), e = d + kMapSettingsKey, a[e] && a[e][kPlayableKey] && b.push(d);
                User.bind("change", function (a) {
                    a.isAnonymous && Payment.events.trigger("permissionsChange", [], [])
                }), Payment.events.on("permissionsChange", function (a) {
                    var b = NextStep.UserDefaults.standardUserDefaults(), c, d, e;
                    for (c = kMapIndex.Grasslands + 1; c <= kMapIndexSingleplayerLast; c++)
                        d = Map.getOfficialMapNameForIndex(c), e = d + kMapSettingsKey, a.indexOf(d) >= 0 ? (b[e] || (b[e] = {}), b[e][kPlayableKey] = !0) : b[e] && (b[e][kPlayableKey] = !1);
                    b.synchronize()
                }), Payment.events.on("permissionsChange", function (a) {
                    function c(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            if (a.indexOf(d) == -1)
                                return !1
                        }
                        return !0
                    }
                    var b = ["crossroads", "drylands", "skyway", "frostbite", "cave", "rainforest", "volcano"];
                    g(!c(a, b))
                }).trigger("permissionsChange", b, []), User.getUser(), Payment.permissionsList(function () {
                }, function () {
                })
            })
        }), Preloader.include(["graphics/renderdevice.js", "extras/gal.filesystem.js", "input/inputcallbacks.js", "userinterface/userinterface.js"], function () {
            Preloader.dependOn(function () {
                input.target = $("canvas")[0]
            }, window.eaglview = new EAGLView), g()
        });
        var c = Date.now(), d = 0, e = 0, f = Date.now(), g = function () {
            var a = Date.now(), b = (a - c) / 1e3;
            window.die || requestAnimFrame(g), eaglview && eaglview.isLoaded && a - c > 1e3 / 35 ? (eaglview.updateView(), c = a) : eaglview && eaglview.isLoaded && eaglview.render()
        }
    });
    var Mustache = function () {
        function g(a) {
            return String(a).replace(/&(?!\w+;)|[<>"']/g, function (a) {
                return f[a] || a
            })
        }
        var a = Object.prototype.toString;
        Array.isArray = Array.isArray || function (b) {
            return a.call(b) == "[object Array]"
        };
        var b = String.prototype.trim, c;
        if (b)
            c = function (a) {
                return a == null ? "" : b.call(a)
            };
        else {
            var d, e;
            /\S/.test(" ") ? (d = /^[\s\xA0]+/, e = /[\s\xA0]+$/) : (d = /^\s+/, e = /\s+$/), c = function (a) {
                return a == null ? "" : a.toString().replace(d, "").replace(e, "")
            }
        }
        var f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, h = {}, i = function () {
        };
        return i.prototype = {
            otag: "{{", ctag: "}}", pragmas: {}, buffer: [], pragmas_implemented: { "IMPLICIT-ITERATOR": !0 }, context: {}, render: function (a, b, c, d) {
                d || (this.context = b, this.buffer = []);
                if (!this.includes("", a)) {
                    if (d)
                        return a;
                    this.send(a);
                    return
                }
                a = this.render_pragmas(a);
                var e = this.render_section(a, b, c);
                e === !1 && (e = this.render_tags(a, b, c, d));
                if (d)
                    return e;
                this.sendLines(e)
            }, send: function (a) {
                a !== "" && this.buffer.push(a)
            }, sendLines: function (a) {
                if (a) {
                    var b = a.split("\n");
                    for (var c = 0; c < b.length; c++)
                        this.send(b[c])
                }
            }, render_pragmas: function (a) {
                if (!this.includes("%", a))
                    return a;
                var b = this, c = this.getCachedRegex("render_pragmas", function (a, b) {
                    return new RegExp(a + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + b, "g")
                });
                return a.replace(c, function (a, c, d) {
                    if (!b.pragmas_implemented[c])
                        throw { message: "This implementation of mustache doesn't understand the '" + c + "' pragma" };
                    b.pragmas[c] = {};
                    if (d) {
                        var e = d.split("=");
                        b.pragmas[c][e[0]] = e[1]
                    }
                    return ""
                })
            }, render_partial: function (a, b, d) {
                a = c(a);
                if (!d || d[a] === undefined)
                    throw { message: "unknown_partial '" + a + "'" };
                return !b || typeof b[a] != "object" ? this.render(d[a], b, d, !0) : this.render(d[a], b[a], d, !0)
            }, render_section: function (a, b, c) {
                if (!this.includes("#", a) && !this.includes("^", a))
                    return !1;
                var d = this, e = this.getCachedRegex("render_section", function (a, b) {
                    return new RegExp("^([\\s\\S]*?)" + a + "(\\^|\\#)\\s*(.+)\\s*" + b + "\n*([\\s\\S]*?)" + a + "\\/\\s*\\3\\s*" + b + "\\s*([\\s\\S]*)$", "g")
                });
                return a.replace(e, function (a, e, f, g, h, i) {
                    var j = e ? d.render_tags(e, b, c, !0) : "", k = i ? d.render(i, b, c, !0) : "", l, m = d.find(g, b);
                    return f === "^" ? !m || Array.isArray(m) && m.length === 0 ? l = d.render(h, b, c, !0) : l = "" : f === "#" && (Array.isArray(m) ? l = d.map(m, function (a) {
                        return d.render(h, d.create_context(a), c, !0)
                    }).join("") : d.is_object(m) ? l = d.render(h, d.create_context(m), c, !0) : typeof m == "function" ? l = m.call(b, h, function (a) {
                        return d.render(a, b, c, !0)
                    }) : m ? l = d.render(h, b, c, !0) : l = ""), j + l + k
                })
            }, render_tags: function (a, b, c, d) {
                var e = this, f = function () {
                    return e.getCachedRegex("render_tags", function (a, b) {
                        return new RegExp(a + "(=|!|>|&|\\{|%)?([^#\\^]+?)\\1?" + b + "+", "g")
                    })
                }, h = f(), i = function (a, d, i) {
                    switch (d) {
                        case "!":
                            return "";
                        case "=":
                            return e.set_delimiters(i), h = f(), "";
                        case ">":
                            return e.render_partial(i, b, c);
                        case "{":
                        case "&":
                            return e.find(i, b);
                        default:
                            return g(e.find(i, b))
                    }
                }, j = a.split("\n");
                for (var k = 0; k < j.length; k++)
                    j[k] = j[k].replace(h, i, this), d || this.send(j[k]);
                if (d)
                    return j.join("\n")
            }, set_delimiters: function (a) {
                var b = a.split(" ");
                this.otag = this.escape_regex(b[0]), this.ctag = this.escape_regex(b[1])
            }, escape_regex: function (a) {
                if (!arguments.callee.sRE) {
                    var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
                    arguments.callee.sRE = new RegExp("(\\" + b.join("|\\") + ")", "g")
                }
                return a.replace(arguments.callee.sRE, "\\$1")
            }, find: function (a, b) {
                function d(a) {
                    return a === !1 || a === 0 || a
                }
                a = c(a);
                var e;
                if (a.match(/([a-z_]+)\./ig)) {
                    var f = this.walk_context(a, b);
                    d(f) && (e = f)
                } else
                    d(b[a]) ? e = b[a] : d(this.context[a]) && (e = this.context[a]);
                return typeof e == "function" ? e.apply(b) : e !== undefined ? e : ""
            }, walk_context: function (a, b) {
                var c = a.split("."), d = b[c[0]] != undefined ? b : this.context, e = d[c.shift()];
                while (e != undefined && c.length > 0)
                    d = e, e = e[c.shift()];
                return typeof e == "function" ? e.apply(d) : e
            }, includes: function (a, b) {
                return b.indexOf(this.otag + a) != -1
            }, create_context: function (a) {
                if (this.is_object(a))
                    return a;
                var b = ".";
                this.pragmas["IMPLICIT-ITERATOR"] && (b = this.pragmas["IMPLICIT-ITERATOR"].iterator);
                var c = {};
                return c[b] = a, c
            }, is_object: function (a) {
                return a && typeof a == "object"
            }, map: function (a, b) {
                if (typeof a.map == "function")
                    return a.map(b);
                var c = [], d = a.length;
                for (var e = 0; e < d; e++)
                    c.push(b(a[e]));
                return c
            }, getCachedRegex: function (a, b) {
                var c = h[this.otag];
                c || (c = h[this.otag] = {});
                var d = c[this.ctag];
                d || (d = c[this.ctag] = {});
                var e = d[a];
                return e || (e = d[a] = b(this.otag, this.ctag)), e
            }
        }, {
            name: "mustache.js", version: "0.5.0-dev", to_html: function (a, b, c, d) {
                var e = new i;
                d && (e.send = d), e.render(a, b || {}, c);
                if (!d)
                    return e.buffer.join("\n")
            }
        }
    }();
    Preloader.initialize("mustache.js"), glMatrixArrayType = typeof Float32Array != "undefined" ? Float32Array : typeof WebGLFloatArray != "undefined" ? WebGLFloatArray : Array;
    var vec3 = {};
    vec3.create = function (a) {
        var b = new glMatrixArrayType(3);
        return a && (b[0] = a[0], b[1] = a[1], b[2] = a[2]), b
    }, vec3.set = function (a, b) {
        return b[0] = a[0], b[1] = a[1], b[2] = a[2], b
    }, vec3.add = function (a, b, c) {
        return !c || a == c ? (a[0] += b[0], a[1] += b[1], a[2] += b[2], a) : (c[0] = a[0] + b[0], c[1] = a[1] + b[1], c[2] = a[2] + b[2], c)
    }, vec3.subtract = function (a, b, c) {
        return !c || a == c ? (a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a) : (c[0] = a[0] - b[0], c[1] = a[1] - b[1], c[2] = a[2] - b[2], c)
    }, vec3.negate = function (a, b) {
        return b || (b = a), b[0] = -a[0], b[1] = -a[1], b[2] = -a[2], b
    }, vec3.scale = function (a, b, c) {
        return !c || a == c ? (a[0] *= b, a[1] *= b, a[2] *= b, a) : (c[0] = a[0] * b, c[1] = a[1] * b, c[2] = a[2] * b, c)
    }, vec3.normalize = function (a, b) {
        b || (b = a);
        var c = a[0], d = a[1], e = a[2], f = Math.sqrt(c * c + d * d + e * e);
        return f ? f == 1 ? (b[0] = c, b[1] = d, b[2] = e, b) : (f = 1 / f, b[0] = c * f, b[1] = d * f, b[2] = e * f, b) : (b[0] = 0, b[1] = 0, b[2] = 0, b)
    }, vec3.cross = function (a, b, c) {
        c || (c = a);
        var d = a[0], e = a[1];
        a = a[2];
        var f = b[0], g = b[1];
        return b = b[2], c[0] = e * b - a * g, c[1] = a * f - d * b, c[2] = d * g - e * f, c
    }, vec3.length = function (a) {
        var b = a[0], c = a[1];
        return a = a[2], Math.sqrt(b * b + c * c + a * a)
    }, vec3.dot = function (a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }, vec3.direction = function (a, b, c) {
        c || (c = a);
        var d = a[0] - b[0], e = a[1] - b[1];
        return a = a[2] - b[2], b = Math.sqrt(d * d + e * e + a * a), b ? (b = 1 / b, c[0] = d * b, c[1] = e * b, c[2] = a * b, c) : (c[0] = 0, c[1] = 0, c[2] = 0, c)
    }, vec3.lerp = function (a, b, c, d) {
        return d || (d = a), d[0] = a[0] + c * (b[0] - a[0]), d[1] = a[1] + c * (b[1] - a[1]), d[2] = a[2] + c * (b[2] - a[2]), d
    }, vec3.str = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
    };
    var mat3 = {};
    mat3.create = function (a) {
        var b = new glMatrixArrayType(9);
        return a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9]), b
    }, mat3.set = function (a, b) {
        return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b
    }, mat3.identity = function (a) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
    }, mat3.transpose = function (a, b) {
        if (!b || a == b) {
            var c = a[1], d = a[2], e = a[5];
            return a[1] = a[3], a[2] = a[6], a[3] = c, a[5] = a[7], a[6] = d, a[7] = e, a
        }
        return b[0] = a[0], b[1] = a[3], b[2] = a[6], b[3] = a[1], b[4] = a[4], b[5] = a[7], b[6] = a[2], b[7] = a[5], b[8] = a[8], b
    }, mat3.toMat4 = function (a, b) {
        return b || (b = mat4.create()), b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = 0, b[4] = a[3], b[5] = a[4], b[6] = a[5], b[7] = 0, b[8] = a[6], b[9] = a[7], b[10] = a[8], b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, b
    }, mat3.str = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
    };
    var mat4 = {};
    mat4.create = function (a) {
        var b = new glMatrixArrayType(16);
        return a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]), b
    }, mat4.set = function (a, b) {
        return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15], b
    }, mat4.identity = function (a) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
    }, mat4.transpose = function (a, b) {
        if (!b || a == b) {
            var c = a[1], d = a[2], e = a[3], f = a[6], g = a[7], h = a[11];
            return a[1] = a[4], a[2] = a[8], a[3] = a[12], a[4] = c, a[6] = a[9], a[7] = a[13], a[8] = d, a[9] = f, a[11] = a[14], a[12] = e, a[13] = g, a[14] = h, a
        }
        return b[0] = a[0], b[1] = a[4], b[2] = a[8], b[3] = a[12], b[4] = a[1], b[5] = a[5], b[6] = a[9], b[7] = a[13], b[8] = a[2], b[9] = a[6], b[10] = a[10], b[11] = a[14], b[12] = a[3], b[13] = a[7], b[14] = a[11], b[15] = a[15], b
    }, mat4.determinant = function (a) {
        var b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], i = a[7], j = a[8], k = a[9], l = a[10], m = a[11], n = a[12], o = a[13], p = a[14];
        return a = a[15], n * k * h * e - j * o * h * e - n * g * l * e + f * o * l * e + j * g * p * e - f * k * p * e - n * k * d * i + j * o * d * i + n * c * l * i - b * o * l * i - j * c * p * i + b * k * p * i + n * g * d * m - f * o * d * m - n * c * h * m + b * o * h * m + f * c * p * m - b * g * p * m - j * g * d * a + f * k * d * a + j * c * h * a - b * k * h * a - f * c * l * a + b * g * l * a
    }, mat4.inverse = function (a, b) {
        b || (b = a);
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], i = a[6], j = a[7], k = a[8], l = a[9], m = a[10], n = a[11], o = a[12], p = a[13], q = a[14], r = a[15], s = c * h - d * g, t = c * i - e * g, u = c * j - f * g, v = d * i - e * h, w = d * j - f * h, x = e * j - f * i, y = k * p - l * o, z = k * q - m * o, A = k * r - n * o, B = l * q - m * p, C = l * r - n * p, D = m * r - n * q, E = 1 / (s * D - t * C + u * B + v * A - w * z + x * y);
        return b[0] = (h * D - i * C + j * B) * E, b[1] = (-d * D + e * C - f * B) * E, b[2] = (p * x - q * w + r * v) * E, b[3] = (-l * x + m * w - n * v) * E, b[4] = (-g * D + i * A - j * z) * E, b[5] = (c * D - e * A + f * z) * E, b[6] = (-o * x + q * u - r * t) * E, b[7] = (k * x - m * u + n * t) * E, b[8] = (g * C - h * A + j * y) * E, b[9] = (-c * C + d * A - f * y) * E, b[10] = (o * w - p * u + r * s) * E, b[11] = (-k * w + l * u - n * s) * E, b[12] = (-g * B + h * z - i * y) * E, b[13] = (c * B - d * z + e * y) * E, b[14] = (-o * v + p * t - q * s) * E, b[15] = (k * v - l * t + m * s) * E, b
    }, mat4.toRotationMat = function (a, b) {
        return b || (b = mat4.create()), b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] =
            a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, b
    }, mat4.toMat3 = function (a, b) {
        return b || (b = mat3.create()), b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[4], b[4] = a[5], b[5] = a[6], b[6] = a[8], b[7] = a[9], b[8] = a[10], b
    }, mat4.toInverseMat3 = function (a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[4], g = a[5], h = a[6], i = a[8], j = a[9], k = a[10], l = k * g - h * j, m = -k * f + h * i, n = j * f - g * i, o = c * l + d * m + e * n;
        return o ? (o = 1 / o, b || (b = mat3.create()), b[0] = l * o, b[1] = (-k * d + e * j) * o, b[2] = (h * d - e * g) * o, b[3] = m * o, b[4] = (k * c - e * i) * o, b[5] = (-h * c + e * f) * o, b[6] = n * o, b[7] = (-j * c + d * i) * o, b[8] = (g * c - d * f) * o, b) : null
    }, mat4.multiply = function (a, b, c) {
        c || (c = a);
        var d = a[0], e = a[1], f = a[2], g = a[3], h = a[4], i = a[5], j = a[6], k = a[7], l = a[8], m = a[9], n = a[10], o = a[11], p = a[12], q = a[13], r = a[14];
        a = a[15];
        var s = b[0], t = b[1], u = b[2], v = b[3], w = b[4], x = b[5], y = b[6], z = b[7], A = b[8], B = b[9], C = b[10], D = b[11], E = b[12], F = b[13], G = b[14];
        return b = b[15], c[0] = s * d + t * h + u * l + v * p, c[1] = s * e + t * i + u * m + v * q, c[2] = s * f + t * j + u * n + v * r, c[3] = s * g + t * k + u * o + v * a, c[4] = w * d + x * h + y * l + z * p, c[5] = w * e + x * i + y * m + z * q, c[6] = w * f + x * j + y * n + z * r, c[7] = w * g + x * k + y * o + z * a, c[8] = A * d + B * h + C * l + D * p, c[9] = A * e + B * i + C * m + D * q, c[10] = A * f + B * j + C * n + D * r, c[11] = A * g + B * k + C * o + D * a, c[12] = E * d + F * h + G * l + b * p, c[13] = E * e + F * i + G * m + b * q, c[14] = E * f + F * j + G * n + b * r, c[15] = E * g + F * k + G * o + b * a, c
    }, mat4.multiplyVec3 = function (a, b, c) {
        c || (c = b);
        var d = b[0], e = b[1];
        return b = b[2], c[0] = a[0] * d + a[4] * e + a[8] * b + a[12], c[1] = a[1] * d + a[5] * e + a[9] * b + a[13], c[2] = a[2] * d + a[6] * e + a[10] * b + a[14], c
    }, mat4.multiplyVec4 = function (a, b, c) {
        c || (c = b);
        var d = b[0], e = b[1], f = b[2];
        return b = b[3], c[0] = a[0] * d + a[4] * e + a[8] * f + a[12] * b, c[1] = a[1] * d + a[5] * e + a[9] * f + a[13] * b, c[2] = a[2] * d + a[6] * e + a[10] * f + a[14] * b, c[3] = a[3] * d + a[7] * e + a[11] * f + a[15] * b, c
    }, mat4.translate = function (a, b, c) {
        var d = b[0], e = b[1];
        b = b[2];
        if (!c || a == c)
            return a[12] = a[0] * d + a[4] * e + a[8] * b + a[12], a[13] = a[1] * d + a[5] * e + a[9] * b + a[13], a[14] = a[2] * d + a[6] * e + a[10] * b + a[14], a[15] = a[3] * d + a[7] * e + a[11] * b + a[15], a;
        var f = a[0], g = a[1], h = a[2], i = a[3], j = a[4], k = a[5], l = a[6], m = a[7], n = a[8], o = a[9], p = a[10], q = a[11];
        return c[0] = f, c[1] = g, c[2] = h, c[3] = i, c[4] = j, c[5] = k, c[6] = l, c[7] = m, c[8] = n, c[9] = o, c[10] = p, c[11] = q, c[12] = f * d + j * e + n * b + a[12], c[13] = g * d + k * e + o * b + a[13], c[14] = h * d + l * e + p * b + a[14], c[15] = i * d + m * e + q * b + a[15], c
    }, mat4.scale = function (a, b, c) {
        var d = b[0], e = b[1];
        return b = b[2], !c || a == c ? (a[0] *= d, a[1] *= d, a[2] *= d, a[3] *= d, a[4] *= e, a[5] *= e, a[6] *= e, a[7] *= e, a[8] *= b, a[9] *= b, a[10] *= b, a[11] *= b, a) : (c[0] = a[0] * d, c[1] = a[1] * d, c[2] = a[2] * d, c[3] = a[3] * d, c[4] = a[4] * e, c[5] = a[5] * e, c[6] = a[6] * e, c[7] = a[7] * e, c[8] = a[8] * b, c[9] = a[9] * b, c[10] = a[10] * b, c[11] = a[11] * b, c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15], c)
    }, mat4.rotate = function (a, b, c, d) {
        var e = c[0], f = c[1];
        c = c[2];
        var g = Math.sqrt(e * e + f * f + c * c);
        if (!g)
            return null;
        g != 1 && (g = 1 / g, e *= g, f *= g, c *= g);
        var h = Math.sin(b), i = Math.cos(b), j = 1 - i;
        b = a[0], g = a[1];
        var k = a[2], l = a[3], m = a[4], n = a[5], o = a[6], p = a[7], q = a[8], r = a[9], s = a[10], t = a[11], u = e * e * j + i, v = f * e * j + c * h, w = c * e * j - f * h, x = e * f * j - c * h, y = f * f * j + i, z = c * f * j + e * h, A = e * c * j + f * h;
        return e = f * c * j - e * h, f = c * c * j + i, d ? a != d && (d[12] = a[12], d[13] = a[13], d[14] = a[14], d[15] = a[15]) : d = a, d[0] = b * u + m * v + q * w, d[1] = g * u + n * v + r * w, d[2] = k * u + o * v + s * w, d[3] = l * u + p * v + t * w, d[4] = b * x + m * y + q * z, d[5] = g * x + n * y + r * z, d[6] = k * x + o * y + s * z, d[7] = l * x + p * y + t * z, d[8] = b * A + m * e + q * f, d[9] = g * A + n * e + r * f, d[10] = k * A + o * e + s * f, d[11] = l * A + p * e + t * f, d
    }, mat4.rotateX = function (a, b, c) {
        var d = Math.sin(b);
        b = Math.cos(b);
        var e = a[4], f = a[5], g = a[6], h = a[7], i = a[8], j = a[9], k = a[10], l = a[11];
        return c ? a != c && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a, c[4] = e * b + i * d, c[5] = f * b + j * d, c[6] = g * b + k * d, c[7] = h * b + l * d, c[8] = e * -d + i * b, c[9] = f * -d + j * b, c[10] = g * -d + k * b, c[11] = h * -d + l * b, c
    }, mat4.rotateY = function (a, b, c) {
        var d = Math.sin(b);
        b = Math.cos(b);
        var e = a[0], f = a[1], g = a[2], h = a[3], i = a[8], j = a[9], k = a[10], l = a[11];
        return c ? a != c && (c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a, c[0] = e * b + i * -d, c[1] = f * b + j * -d, c[2] = g * b + k * -d, c[3] = h * b + l * -d, c[8] = e * d + i * b, c[9] = f * d + j * b, c[10] = g * d + k * b, c[11] = h * d + l * b, c
    }, mat4.rotateZ = function (a, b, c) {
        var d = Math.sin(b);
        b = Math.cos(b);
        var e = a[0], f = a[1], g = a[2], h = a[3], i = a[4], j = a[5], k = a[6], l = a[7];
        return c ? a != c && (c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a, c[0] = e * b + i * d, c[1] = f * b + j * d, c[2] = g * b + k * d, c[3] = h * b + l * d, c[4] = e * -d + i * b, c[5] = f * -d + j * b, c[6] = g * -d + k * b, c[7] = h * -d + l * b, c
    }, mat4.frustum = function (a, b, c, d, e, f, g) {
        g || (g = mat4.create());
        var h = b - a, i = d - c, j = f - e;
        return g[0] = e * 2 / h, g[1] = 0, g[2] = 0, g[3] = 0, g[4] = 0, g[5] = e * 2 / i, g[6] = 0, g[7] = 0, g[8] = (b + a) / h, g[9] = (d + c) / i, g[10] = -(f + e) / j, g[11] = -1, g[12] = 0, g[13] = 0, g[14] = -(f * e * 2) / j, g[15] = 0, g
    }, mat4.perspective = function (a, b, c, d, e) {
        return a = c * Math.tan(a * Math.PI / 360), b = a * b, mat4.frustum(-b, b, -a, a, c, d, e)
    }, mat4.ortho = function (a, b, c, d, e, f, g) {
        g || (g = mat4.create());
        var h = b - a, i = d - c, j = f - e;
        return g[0] = 2 / h, g[1] = 0, g[2] = 0, g[3] = 0, g[4] = 0, g[5] = 2 / i, g[6] = 0, g[7] = 0, g[8] = 0, g[9] = 0, g[10] = -2 / j, g[11] = 0, g[12] = -(a + b) / h, g[13] = -(d + c) / i, g[14] = -(f + e) / j, g[15] = 1, g
    }, mat4.lookAt = function (a, b, c, d) {
        d || (d = mat4.create());
        var e = a[0], f = a[1];
        a = a[2];
        var g = c[0], h = c[1], i = c[2];
        c = b[1];
        var j = b[2];
        if (e == b[0] && f == c && a == j)
            return mat4.identity(d);
        var k, l, m, n;
        return c = e - b[0], j = f - b[1], b = a - b[2], n = 1 / Math.sqrt(c * c + j * j + b * b), c *= n, j *= n, b *= n, k = h * b - i * j, i = i * c - g * b, g = g * j - h * c, (n = Math.sqrt(k * k + i * i + g * g)) ? (n = 1 / n, k *= n, i *= n, g *= n) : g = i = k = 0, h = j * g - b * i, l = b * k - c * g, m = c * i - j * k, (n = Math.sqrt(h * h + l * l + m * m)) ? (n = 1 / n, h *= n, l *= n, m *= n) : m = l = h = 0, d[0] = k, d[1] = h, d[2] = c, d[3] = 0, d[4] = i, d[5] = l, d[6] = j, d[7] = 0, d[8] = g, d[9] = m, d[10] = b, d[11] = 0, d[12] = -(k * e + i * f + g * a), d[13] = -(h * e + l * f + m * a), d[14] = -(c * e + j * f + b * a), d[15] = 1, d
    }, mat4.str = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
    }, quat4 = {}, quat4.create = function (a) {
        var b = new glMatrixArrayType(4);
        return a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]), b
    }, quat4.set = function (a, b) {
        return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b
    }, quat4.calculateW = function (a, b) {
        var c = a[0], d = a[1], e = a[2];
        return !b || a == b ? (a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), a) : (b[0] = c, b[1] = d, b[2] = e, b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), b)
    }, quat4.inverse = function (a, b) {
        return !b || a == b ? (a[0] *= 1, a[1] *= 1, a[2] *= 1, a) : (b[0] = -a[0], b[1] = -a[1], b[2] = -a[2], b[3] = a[3], b)
    }, quat4.length = function (a) {
        var b = a[0], c = a[1], d = a[2];
        return a = a[3], Math.sqrt(b * b + c * c + d * d + a * a)
    }, quat4.normalize = function (a, b) {
        b || (b = a);
        var c = a[0], d = a[1], e = a[2], f = a[3], g = Math.sqrt(c * c + d * d + e * e + f * f);
        return g == 0 ? (b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0, b) : (g = 1 / g, b[0] = c * g, b[1] = d * g, b[2] = e * g, b[3] = f * g, b)
    }, quat4.multiply = function (a, b, c) {
        c || (c = a);
        var d = a[0], e = a[1], f = a[2];
        a = a[3];
        var g = b[0], h = b[1], i = b[2];
        return b = b[3], c[0] = d * b + a * g + e * i - f * h, c[1] = e * b + a * h + f * g - d * i, c[2] = f * b + a * i + d * h - e * g, c[3] = a * b - d * g - e * h - f * i, c
    }, quat4.multiplyVec3 = function (a, b, c) {
        c || (c = b);
        var d = b[0], e = b[1], f = b[2];
        b = a[0];
        var g = a[1], h = a[2];
        a = a[3];
        var i = a * d + g * f - h * e, j = a * e + h * d - b * f, k = a * f + b * e - g * d;
        return d = -b * d - g * e - h * f, c[0] = i * a + d * -b + j * -h - k * -g, c[1] = j * a + d * -g + k * -b - i * -h, c[2] = k * a + d * -h + i * -g - j * -b, c
    }, quat4.toMat3 = function (a, b) {
        b || (b = mat3.create());
        var c = a[0], d = a[1], e = a[2], f = a[3], g = c + c, h = d + d, i = e + e, j = c * g, k = c * h;
        c *= i;
        var l = d * h;
        return d *= i, e *= i, g = f * g, h = f * h, f *= i, b[0] = 1 - (l + e), b[1] = k - f, b[2] = c + h, b[3] = k + f, b[4] = 1 - (j + e), b[5] = d - g, b[6] = c - h, b[7] = d + g, b[8] = 1 - (j + l), b
    }, quat4.toMat4 = function (a, b) {
        b || (b = mat4.create());
        var c = a[0], d = a[1], e = a[2], f = a[3], g = c + c, h = d + d, i = e + e, j = c * g, k = c * h;
        c *= i;
        var l = d * h;
        return d *= i, e *= i, g = f * g, h = f * h, f *= i, b[0] = 1 - (l + e), b[1] = k - f, b[2] = c + h, b[3] = 0, b[4] = k + f, b[5] = 1 - (j + e), b[6] = d - g, b[7] = 0, b[8] = c - h, b[9] = d + g, b[10] = 1 - (j + l), b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, b
    }, quat4.slerp = function (a, b, c, d) {
        d || (d = a);
        var e = c;
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] < 0 && (e = -1 * c), d[0] = 1 - c * a[0] + e * b[0], d[1] = 1 - c * a[1] + e * b[1], d[2] = 1 - c * a[2] + e * b[2], d[3] = 1 - c * a[3] + e * b[3], d
    }, quat4.str = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
    }, Preloader.initialize("glMatrix0.9.5.min.js"), Preloader.include([], function () {
        var a = Class.extend({
            init: function () {
                this.isAnonymous = !0
            }
        }, "User");
        window.jQuery.extend(a, {
            _events: {}, bind: function (b, c) {
                var d = a._events[b];
                d == undefined && (d = a._events[b] = []), d.indexOf(c) == -1 && d.push(c)
            }, unbind: function (b, c) {
                var d = a._events[b];
                if (d == undefined)
                    return !1;
                d.remove(c)
            }, trigger: function (b, c) {
                var d = a._events[b];
                if (d == undefined)
                    return;
                for (var e = 0; e < d.length; e++)
                    d[e](c)
            }, getUser: function (b) {
                // window.jQuery.ajax({url: Preloader.prefix + "/api/user", dataType: "json"}).success(function(c) {
                window.jQuery.ajax({ url: Preloader.prefix, dataType: "json" }).success(function (c) {
                    c = {
                        "LogoutURL": "",
                        "User": {
                            "Email": "",
                            "AuthDomain": "",
                            "Admin": false,
                            "ID": "",
                            "FederatedIdentity": "",
                            "FederatedProvider": ""
                        }
                    };
                    var d = !1;
                    a._current || (a._current = new a, d = !0);
                    var e = a._current;
                    e.urls = {};
                    var f = e.isAnonymous;
                    e.isAnonymous = !c.User.Email, e.isAnonymous ? e.urls.login = c.LoginURL : (e.email = c.User.Email, e.id = c.User.Id, e.urls.logout = c.LogoutURL), b && b(e), a.trigger("update");
                    if (f != e.isAnonymous || d)
                        a.trigger("change", e), e.isAnonymous || a.trigger("login", e), e.isAnonymous && a.trigger("logout")
                })
            }, showFrame: function (b, c) {
                c == undefined && (c = !0);
                var d = $("#user-frame"), e = $("#shadow-popup");
                if (c)
                    var f = a._interval = setInterval(function () {
                        d.css("display", "block"), d.css("left", (window.innerWidth - d.outerWidth()) / 2), d.css("top", (window.innerHeight - d.outerHeight()) / 2), e.css("display", "block")
                    }, 33);
                d.find("iframe")[0].src = b
            }, hideFrame: function () {
                var b = $("#user-frame"), c = $("#shadow-popup");
                clearInterval(a._interval), b.find("iframe")[0].src = "about:blank", b.css("display", "none"), c.css("display", "none"), a.getUser(), window.focus()
            }
        }), window.User = a, Preloader.initialize("extras/user.js")
    }), function (a) {
        function c(a, b) {
            var c = new XMLHttpRequest;
            c.open("GET", a, !0), c.addEventListener("load", function (a) {
                if (this.status != 200)
                    throw "Unable to load manifest.";
                b(JSON.parse(c.responseText))
            }), c.send()
        }
        function d(a) {
            this.adapter = new b.adapterClass, this.adapter.init(function () {
                a()
            })
        }
        function e(a) {
            this.manifest = a;
            for (var b = 0, c; c = a.bundles[b]; ++b)
                this.bundles[c.name] = c.contents, this.bundleOrder.push(c.name)
        }
        function f(a, b) {
            var c = this;
            d.call(c, function () {
                e.call(c, a), a.autoDownload && c.online() && j.call(c), b()
            })
        }
        function g(a, b, c) {
            typeof b == "function" && (c = b, b = "*"), a[b] || (a[b] = []), a[b].push(c)
        }
        function h(a, b, c) {
            i(a, b, c), i(a, "*", c)
        }
        function i(a, b, c) {
            var d = a[b];
            if (d)
                for (var e = 0, f; f = d[e]; ++e)
                    d[e](c)
        }
        function j() {
            var a = this;
            (function b(c) {
                if (c == a.bundleOrder.length)
                    return;
                var d = a.bundleOrder[c];
                a.onLoaded(d, function () {
                    b(c + 1)
                }), a.download(d)
            })(0)
        }
        var b = function (a) {
            this.manifestUrl = a, this.bundles = {}, this.bundleOrder = [], this.loaded = {}, this.progress = {}, this.error = {}, this.currentlyDownloading = {}
        };
        b.prototype.init = function (a) {
            var b = this;
            if (this.online())
                c(this.manifestUrl, function (c) {
                    localStorage.setItem(b.manifestUrl, JSON.stringify(c)), f.call(b, c, a)
                });
            else {
                var d = JSON.parse(localStorage.getItem(this.manifestUrl));
                f.call(b, d, a)
            }
        }, b.prototype.download = function (a) {
            var b = this.bundles[a];
            if (!b)
                throw "Invalid bundle specified";
            if (this.currentlyDownloading[a])
                return;
            this.online() || this.check(a, function (b) {
                b.success ? h(this.loaded, a, { success: !0, cached: !0, bundleName: a }) : h(this.error, a, { error: "Missing resources cant be downloaded while offline" })
            }), this.currentlyDownloading[a] = !0;
            var c = this;
            (function d(e) {
                if (e == b.length) {
                    delete c.currentlyDownloading[a], h(c.loaded, a, { bundleName: a, success: !0 });
                    return
                }
                var f = b[e], g = c.manifest.assetRoot + f;
                console.log(f, g), c.adapter.saveAsset(f, g, function () {
                    h(c.progress, a, { current: e + 1, total: b.length }), d(e + 1)
                })
            })(0)
        }, b.prototype.onLoaded = function (a, b) {
            g(this.loaded, a, b)
        }, b.prototype.onProgress = function (a, b) {
            g(this.progress, a, b)
        }, b.prototype.onError = function (a, b) {
            g(this.error, a, b)
        }, b.prototype.check = function (a, b) {
            var c = this.bundles[a];
            if (!c) {
                b({ success: !1 });
                return
            }
            var d = this.adapter;
            (function e(a) {
                if (a == c.length) {
                    b({ success: !0 });
                    return
                }
                var f = c[a];
                d.checkAsset(f, function () {
                    e(a + 1)
                }, function () {
                    b({ success: !1 })
                })
            })(0)
        }, b.prototype.get = function (a) {
            return this.adapter.getAssetUrl(a) || null
        }, b.prototype.cacheTime = function (a) {
            return Math.random()
        }, b.prototype.online = function () {
            return navigator.onLine
        }, b.prototype.findBundle = function (a) {
            for (var b in this.bundles) {
                var c = this.bundles[b];
                if (c.indexOf(a) != -1)
                    return console.log(a, "in", b), b
            }
            return null
        }, b.prototype.findBundleAndDownload = function (a) {
            var b = this.findBundle(a);
            return b && this.download(b), b
        }, a.GameAssetLoader = b
    }(window), Preloader.initialize("extras/gal.js"), Preloader.include(["extras/gal.js"], function () {
        (function (a) {
            function d(a) {
                console.error("Filesystem error:", a)
            }
            function e(a, b, c) {
                if (b[0] === "." || b[0] === "")
                    b = b.slice(1);
                b.length || c(a), a.getDirectory(b[0], { create: !0 }, function (a) {
                    b.length && e(a, b.slice(1), c)
                }, d)
            }
            function f(a) {
                var b = a.match(/(.*)\//);
                return b && b[1] || ""
            }
            function g(a) {
                return a.replace(/.*\//, "")
            }
            function h() {
                this.lookupTable = {}
            }
            var b = "gal", c = 314572800;
            h.prototype.init = function (a, e) {
                var f = window.requestFileSystem || window.webkitRequestFileSystem, g = window.storageInfo || window.webkitStorageInfo, h = e || c, i = this, j = function (c) {
                    i.fs = c, c.root.getDirectory(b, { create: !0 }, function (b) {
                        i.root = b, a()
                    }, d)
                }, k = function (a) {
                    i.grantedBytes = a, f(window.PERSISTENT, a, j, d)
                };
                g.requestQuota(window.PERSISTENT, h, k, d)
            }, h.prototype.saveAsset = function (a, b, c, d) {
                var h = window.BlobBuilder || window.WebKitBlobBuilder, i = this.root, j = this.lookupTable, k = new XMLHttpRequest;
                k.open("GET", b, !0), k.responseType = "arraybuffer", k.addEventListener("load", function () {
                    e(i, f(a).split("/"), function (b) {
                        b.getFile(g(a), { create: !0 }, function (b) {
                            b.createWriter(function (e) {
                                e.onwrite = function (d) {
                                    j[a] = b.toURL(), c()
                                }, e.onerror = d;
                                var f = new h;
                                f.append(k.response), e.write(f.getBlob())
                            }, d)
                        }, d)
                    })
                }), k.addEventListener("error", d), k.send()
            }, h.prototype.getAssetUrl = function (a) {
                return this.lookupTable[a]
            }, h.prototype.checkAsset = function (a, b, c) {
                var d = this.lookupTable;
                this.root.getFile(a, {}, function (c) {
                    d[a] = c.toURL(), b()
                }, c)
            }, h.prototype.clear = function () {
                this.root.removeRecursively(function () {
                }, d);
                var a = this;
                this.fs.root.getDirectory(b, { create: !0 }, function (b) {
                    a.root = b
                }, d)
            };
            if (!a)
                throw "Game asset loader needs to be loaded before loading the fs adapter";
            a.adapterClass = h
        })(GameAssetLoader), Preloader.initialize("extras/gal.filesystem.js")
    });
    var prototype = EventMixin = {
        _events: {}, on: function (a, b) {
            var c = this._events[a];
            return c == undefined && (c = this._events[a] = []), c.indexOf(b) == -1 && c.push(b), this
        }, off: function (a, b) {
            var c = this._events[a];
            return c == undefined ? !1 : (c.remove(b), this)
        }, trigger: function (a) {
            var b = this._events[a], c = Array.prototype.slice.call(arguments, 1);
            if (b == undefined)
                return;
            for (var d = 0; d < b.length; d++)
                b[d].apply(this, c);
            return this
        }
    };
    EventMixin.constructor = function () {
        this._events = {}
    }, EventMixin.prototype = prototype, mixinEvents = function (a) {
        return a.events = Object.create(EventMixin), EventMixin.constructor.call(a.events), a.events
    }, Preloader.initialize("extras/events.js"), Preloader.include(["mustache.js", "extras/payment.js"], function () {
        function b(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (a.indexOf(d) == -1)
                    return !1
            }
            return !0
        }
        function c(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (a.indexOf(d) != -1)
                    return !0
            }
            return !1
        }
        function d(a, c) {
            return b(a, c) && b(c, a)
        }
        var a = ["crossroads", "drylands", "skyway", "frostbite", "cave", "rainforest", "volcano"], e = '<img id="frbar" class="bg" src="{{imageurl}}" usemap="{{res}}"/><map name="hd" id="hdmap">{{#hdmap}}<area shape="rect" coords="{{join_coords}}" title="{{alt}}"{{#target}} target="{{target}}"{{/target}} href="{{href}}"{{#stats}} onclick="return recordOutboundLink(this, \'{{type}}\', \'{{path}}\');"{{/stats}}/>{{/hdmap}}</map><map name="sd" id="sdmap">{{#sdmap}}<area shape="rect" coords="{{join_coords}}" title="{{alt}}"{{#target}} target="{{target}}"{{/target}} href="{{href}}"{{#stats}} onclick="return recordOutboundLink(this, \'{{type}}\', \'{{path}}\');"{{/stats}}/>{{/sdmap}}</map>';
        window.ad_buy = function (a) {
            Payment.buy(a, function () {
                var b;
                eaglview.userInterface.activeBackgroundFormName == kTitleScreenFormName ? b = eaglview.userInterface.switchToPopupForm(kMapConfigurationFormName) : eaglview.userInterface.activePopupFormName == kMapConfigurationFormName && (b = eaglview.userInterface.getFormWithName(kMapConfigurationFormName)), b && (b.selectedMapIndex = Enum.findValue(kMapIndex, a, !0, 0), b.mapSelectionPositionTarget = 1 - b.selectedMapIndex / (kMapIndicesTotal() + 1), b.mapSelectionPositionTarget >= 1 && (b.mapSelectionPositionTarget = 0))
            })
        }.bind();
        var f = Class.extend({
            init: function () {
                this.ad = null, this.config = null, this.permissions = null, Payment.events.on("permissionsChange", this.onPermissionsChange.bind(this)), jQuery.ajax({
                    url: "bar/ads.json", dataType: "json", success: function (a) {
                        this.config = a, this.pick()
                    }.bind(this)
                })
            }, onPermissionsChange: function (c) {
                b(c, a) ? this.disable() : (this.permissions = c, this.pick()), setTimeout(function () {
                    jQuery(window).trigger("hashchange")
                }, 100)
            }, pick: function () {
                if (!this.permissions || !this.config || this.ad)
                    return;
                var a = jQuery.extend(!0, [], this.config.ads), b;
                for (b = 0; b < a.length; b++)
                    c(this.permissions, a[b].permissions) && (a.splice(b, 1), b--);
                if (a.length > 0) {
                    this.ad = a[Math.floor(Math.random() * a.length)];
                    var d = this.render(this.ad);
                    jQuery("#rightbar").html(d).css("opacity", 0).animate({ opacity: 1 }, 1e3)
                }
            }, disable: function () {
                jQuery("#rightbar").animate({ opacity: 0 }, 1e3)
            }, join_coords: function (a, b) {
                var c;
                b = b.slice();
                for (c = 0; c < b.length; c++)
                    b[c] *= a;
                return b.join(",")
            }, render: function (a) {
                function f(a, b) {
                    !b.href && b.item && (b.href = 'javascript:window.ad_buy("' + b.item + '");'), !b.join_coords && b.coords && (b.join_coords = this.join_coords.bind(this, a, b.coords))
                }
                var b, c, d;
                a = jQuery.extend(!0, {}, a), a.height = Math.min(870, a.size[1]), a.res = location.hash.toString().slice(1), a.hdmap = jQuery.extend(!0, [], a.map), a.sdmap = jQuery.extend(!0, [], a.map), a.hdmap.forEach(f.bind(this, 1)), a.sdmap.forEach(f.bind(this, 560 / a.size[1]));
                var g = Mustache.to_html(e, a);
                return g
            }
        }), g = new f({ id: "#rightbar" });
        Preloader.initialize("extras/ads.js")
    }), Preloader.include(["extras/user.js", "extras/events.js"], function () {
        function b(a, b) {
            if (typeof b != 'undefined') {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (a.indexOf(d) == -1)
                        return !1
                }
            }
            return !0
        }
        function c(a, c) {
            return b(a, c) && b(c, a)
        }
        function d(a, b) {
            if (this._events[a]) {
                var c = this._events[a][b];
                delete this._events[a];
                if (c)
                    for (var d = 0; d < c.length; d++)
                        c[d] && c[d]()
            }
        }
        var a = ["crossroads", "drylands", "skyway", "frostbite", "cave", "rainforest", "volcano"];
        Payment = Class.extend({
            init: function () {
                mixinEvents(this), this._events = {}, this._lastPermissions = []
            }, list: function (a, b) {
                var c = jQuery.ajax({ url: Preloader.prefix + "/api/buy/", dataType: "json" }).success(function (b) {
                    a(b.ids)
                });
                b && c.fail(b)
            }, getJWT: function (a, b, c) {
                var d = function () {
                    var d = jQuery.ajax({ url: Preloader.prefix + "/api/buy/" + a, dataType: "text" }).success(b);
                    c && d.fail(c)
                };
                User.getUser(function (a) {
                    a.isAnonymous ? location.assign(User._current.urls.login) : d()
                })
            }, buy: function (b, c, d) {
                this.hasPermissions(b == "all" ? a : [b], bindSelf(function (a) {
                    a ? c() : this.getJWT(b, bindSelf(function (a) {
                        this._events[b] ? (this._events[b].success.push(c), this._events[b].failure.push(d)) : this._events[b] = { success: [c], failure: [d] }, User.showFrame("buy.html#" + a)
                    }, this), d)
                }, this))
            }, isPaidUser: function (a) {
                this.permissionsList(function (b) {
                    if (typeof b != 'undefined') {
                        a(b.length !== 0)
                    }
                }, function (b, c) {
                    a(c == 404)
                })
            }, trigger: function (c) {
                this.permissionsList(bindSelf(function (e) {
                    for (var f = 0; f < e.length; f++)
                        d.call(this, e[f], c);
                    b(e, a) && d.call(this, "all", c)
                }, this))
            }, permissionsList: function (a, b) {
                // jQuery.ajax({url: Preloader.prefix + "/api/user/permissions", dataType: "json"}).success(bindSelf(function(b) {
                jQuery.ajax({ url: Preloader.prefix, dataType: "json" }).success(bindSelf(function (b) {
                    b = {
                        Permissions: 302
                    };
                    this._checkPermissionChange(b.Permissions), a(b.Permissions)
                }, this)).error(function (a) {
                    b(a, a.status)
                })
            }, _checkPermissionChange: function (a) {
                c(a, this._lastPermissions) || (this.events.trigger("permissionsChange", a, this._lastPermissions), this._lastPermissions = a)
            }, hasPermissions: function (a, b) {
                window.Payment.permissionsList(function (c) {
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        if (typeof c != 'undefined' && c.length > 0) {
                            if (c.indexOf(e) == -1) {
                                b(!1, a);
                                return
                            }
                        }
                    }
                    b(!0, a)
                }, function () {
                    b(!1, a)
                })
            }
        }, "Payment"), Payment = new Payment, Preloader.initialize("extras/payment.js")
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function (a, b, c) {
                this.mString = "", this.mCallbackForm = a, this.mKeyPressCallback = b, this.mDismissKeyboardCallback = c
            }, destroy: function () {
            }, update: function (b) {
                for (var c = 0; c < a.buffer.length; c++) {
                    var d = a.buffer.charAt(c), e = a.buffer.charCodeAt(c);
                    if (e == 13) {
                        this.OnEvent_DismissKeyboard();
                        break
                    }
                    e == 8 ? this.mString.length > 0 && (this.mString = this.mString.slice(0, this.mString.length - 1), this.OnEvent_KeyPress(this.mString)) : (d == " " || "a".charCodeAt(0) <= e && e <= "z".charCodeAt(0) || "A".charCodeAt(0) <= e && e <= "Z".charCodeAt(0) || "0".charCodeAt(0) <= e && e <= "9".charCodeAt(0)) && this.mString.length < 10 && (this.mString += d, this.OnEvent_KeyPress(this.mString))
                }
                a.buffer = ""
            }, Show: function () {
                a.buffer = ""
            }, OnEvent_DismissKeyboard: function () {
                this.mKeyPressCallback && this.mDismissKeyboardCallback()
            }, OnEvent_KeyPress: function (a) {
                this.mKeyPressCallback && this.mKeyPressCallback(a)
            }
        }, "WindowsKeyboard");
        a.buffer = "", window.WindowsKeyboard = a, Preloader.initialize("input/windowskeyboard.js")
    }), Preloader.include(["utilities/nextstep/bundle.js"], function () {
        var a = this.kDefaultPlayerID = 0;
        MULTIPLAYER_HUD = !1, kMaxPlayers = 1;
        var b = this.kTargetPhysicsFPS = 30;
        WORLD_UNITS_SCALAR = 1.895833, DATA_PATH = "/HighResolution", IsPlatformIPad = function () {
            return !1
        }, IsPlatformMac = function () {
            return !0
        }, IsPlatformPSP = function () {
            return !1
        }, IsPlatformAndroid = function () {
            return !1
        }, LocalizeString = function (a, b) {
            return NextStep.Bundle.mainBundle().localizedString(a, b || null)
        }, Preloader.initialize("utilities/defines.js")
    });
    var Point = this.Point = Class.extend({
        init: function (a, b) {
            this.x = a || 0, this.y = b || 0
        }, add: function (a) {
            var b = this.copy();
            return b.x += a.x, b.y += a.y, b
        }, sub: function (a) {
            var b = new Point(this.x, this.y);
            return b.x -= a.x, b.y -= a.y, b
        }, equals: function (a) {
            return this.x == a.x && this.y == a.y
        }, Length: function () {
            return SQRT(SQUARE(this.x) + SQUARE(this.y))
        }, copy: function () {
            return new Point(this.x, this.y)
        }
    }, "Point");
    Preloader.initialize("utilities/point.js"), Preloader.include(["utilities/point.js"], function () {
        var a = Class.extend({
            init: function (a, b) {
                this.location = a || new Point, this.previousLocation = b || new Point
            }, setLocation: function (a, b) {
                this.location = a, this.previousLocation = b
            }, locationInView: function (a) {
                return this.location.copy()
            }, previousLocationInView: function (a) {
                return this.previousLocation.copy()
            }
        }, "Touch");
        window.Touch = a, Preloader.initialize("input/touch.js")
    }), Preloader.include(["input/touch.js", "input/windowskeyboard.js"], function () {
        GLUT_LEFT_BUTTON = 0, GLUT_MIDDLE_BUTTON = 1, GLUT_RIGHT_BUTTON = 2, GLUT_WHEEL_UP = 3, GLUT_WHEEL_DOWN = 4, GLUT_XBUTTON1 = 5, GLUT_XBUTTON2 = 6;
        var a = 0, b = 1, c = function (a) {
            var b = new Point;
            return b.x = (a.pageX - window.jQuery(a.target).position().left) / (parseInt(a.target.style.width) / 1024), b.y = (a.pageY - window.jQuery(a.target).position().top) / (parseInt(a.target.style.height) / 768), b
        }, d, e = !1, f = !0;
        $(window).mouseup(function (a) {
            if (input.enabled) {
                e = !1;
                var d = c(a);
                n(GLUT_LEFT_BUTTON, b, d.x, d.y)
            }
        }).keydown(function (a) {
            var b = String.fromCharCode(a.which), c = a.which;
            if (b.match(/[A-Z0-9 \u000d\u000a\u0008]/)) {
                var d = b;
                if (a.shiftKey == undefined && !a.originalEvent.shiftKey || !a.shiftKey)
                    d = b.toLowerCase();
                WindowsKeyboard.buffer += d
            }
            if (IsPlatformMac()) {
                switch (a.originalEvent.keyIdentifier) {
                    case "Left":
                    case "U+0041":
                        eaglview.buttonPressed(kButtonPress.Left);
                        return;
                    case "Up":
                    case "U+0057":
                        eaglview.buttonPressed(kButtonPress.Up);
                        return;
                    case "Down":
                    case "U+0053":
                        eaglview.buttonPressed(kButtonPress.Down);
                        return;
                    case "Right":
                    case "U+0044":
                        eaglview.buttonPressed(kButtonPress.Right);
                        return
                }
                eaglview.userInterface.getBackgroundFormName() == kGameHudFormName && eaglview.userInterface.getPopupFormName() === null ? c == 27 ? eaglview.buttonPressed(kGameHudButtonPressQuit) : b == " " ? eaglview.buttonPressed(kGameHudButtonPressPause) : b.toLowerCase() == "f" ? eaglview.buttonPressed(kGameHudButtonPressFfwd) : "1".charCodeAt(0) <= c && c <= "6".charCodeAt(0) && eaglview.buttonPressed(kGameHudButtonPressSelectTower1 + (c - "1".charCodeAt(0))) : c == 27 && eaglview.buttonPressed(kButtonPress.Back)
            }
            return a.metaKey != undefined ? a.metaKey : a.originalEvent.metaKey
        });
        var g = {
            focus: function () {
                f = !0
            }, blur: function () {
                d.removeClass("nocursor"), d.hasClass("nocursor")
            }, contextmenu: function (a) {
                return a.stopImmediatePropagation(), a.preventDefault(), !1
            }, mousemove: function (a) {
                f && setTimeout(function () {
                    d.hasClass("nocursor"), d.addClass("nocursor"), d.hasClass("nocursor"), f = !1
                }, 100);
                var b = c(a);
                o(b.x, b.y)
            }, mousedown: function (b) {
                f && (d.addClass("nocursor"), d.hasClass("nocursor"));
                var g = c(b);
                return e = !0, n(b.which - 1, a, g.x, g.y), !1
            }, mouseup: function (a) {
                var d = c(a);
                return e = !1, n(a.which - 1, b, d.x, d.y), document.getSelection().empty(), !1
            }, mousewheel: function (a) {
                var b = c(a), d = a.wheelDelta > 0 ? GLUT_WHEEL_UP : GLUT_WHEEL_DOWN;
                return n(d, d, b.x, b.y), !1
            }
        }, h = function (a) {
            d = $(a);
            for (var b in g)
                d.bind(b, g[b])
        }, i = function (a) {
            d = $(a);
            for (var b in g)
                d.unbind(b, g[b])
        }, j = null, k = !0;
        window.input = {}, Object.defineProperty(window.input, "target", {
            get: function () {
                return j
            }, set: function (a) {
                k && a != j && (j && i(j), a && h(a)), j = a
            }
        }), Object.defineProperty(window.input, "enabled", {
            get: function () {
                return Boolean(k)
            }, set: function (a) {
                a != k && (a && j ? h(j) : j && i(j)), k = a
            }
        });
        var l = [!1, !1, !1], m = [0, 0], n = function (b, c, d, e) {
            if (typeof eaglview == 'undefined' || eaglview == null)
                return;
            if (b <= GLUT_RIGHT_BUTTON) {
                var f = [], g;
                c == a ? (l[0] = !0, g = new Touch(new Point(d, e), new Point(d, e)), g.button = b, f.push(g), eaglview.touchesBegan(f), m[0] = d, m[1] = e) : (l[0] = !1, g = new Touch(new Point(d, e), new Point(m[0], m[1])), g.button = b, f.push(g), eaglview.touchesEnded(f), m[0] = d, m[1] = e)
            }
            b == GLUT_LEFT_BUTTON && (l[0] = c == a), b == GLUT_MIDDLE_BUTTON && (l[1] = c == a), b == GLUT_RIGHT_BUTTON && (l[2] = c == a);
            if (b == GLUT_WHEEL_UP || b == GLUT_WHEEL_DOWN) {
                var f = [], g, h = 10 * WORLD_UNITS_SCALAR, i = new Point(d, e), j = new Point(d - h, e + h), k = new Point(d + h, e - h);
                b == GLUT_WHEEL_UP ? g = new Touch(j, i) : g = new Touch(i, j), f.push(g), b == GLUT_WHEEL_UP ? g = new Touch(k, i) : g = new Touch(i, k), f.push(g), eaglview.touchesMoved(f)
            }
            eaglview.setMouseCursor(m[0], m[1], l[0])
        }, o = function (a, b) {
            if (eaglview == null)
                return;
            if (l[0]) {
                var c = [], d = new Touch(new Point(a, b), new Point(m[0], m[1]));
                c.push(d), eaglview.touchesMoved(c)
            } else
                eaglview.mouseMoved(m[0], m[1], a, b);
            m[0] = a, m[1] = b, eaglview.setMouseCursor(m[0], m[1], l[0])
        };
        Preloader.initialize("input/inputcallbacks.js")
    }), Preloader.include([], function () {
        var a = "UserDefaults", b = null, c = Class.extend({
            init: function () {
                var b = localStorage.getItem(a);
                b && window.jQuery.extend(this, JSON.parse(b))
            }, registerDefaults: function (a) {
                window.jQuery.extend(this, a)
            }, synchronize: function () {
                localStorage.setItem(a, JSON.stringify(this))
            }, setObject: function (a, b) {
                this[b] = a
            }, setInteger: function (a, b) {
                this[b] = a
            }, objectForKey: function (a) {
                return this[a]
            }, integerForKey: function (a) {
                return this[a]
            }, floatForKey: function (a) {
                return this[a]
            }, boolForKey: function (a) {
                return this[a]
            }, stringForKey: function (a) {
                return this[a]
            }
        });
        c.standardUserDefaults = function () {
            return b === null && (b = new c), b
        }, c.clearStandardUserDefaults = function () {
            b = null
        };
        var d = window.NextStep = window.NextStep || {};
        d.UserDefaults = c, Preloader.initialize("utilities/nextstep/userdefaults.js")
    }), Preloader.include([], function () {
        kPlayerNamePreference = "name_preference", kDifficultyPreference = "difficulty_preference", kGameplayModePreference = "gameplay_mode_preference", kTutorialTipsPreference = "tutorial_tips_preference", kVibrationPreference = "vibration_preference", kGridPreference = "grid_preference", kSoundPreference = "sound_preference", kSoundEffectVolumePreference = "sound_fx_volume_preference", kMusicVolumePreference = "music_volume_preference", Preloader.initialize("game/preferences.js")
    }), Preloader.include([], function () {
        function a() {
            jQuery.ajax({
                url: "sounds.json", dataType: "json", success: function (a) {
                    this.soundslist = a.sounds, this.soundslistCallbacks.forEach(function (a) {
                        a()
                    }.bind(this))
                }.bind(this), fail: function () {
                    a.call(this)
                }
            })
        }
        var b = Class.extend({
            init: function () {
                function c() {
                    this._isPaused || (this._nodes.effectsGain.disconnect(), this._nodes.loopedEffectsGain.disconnect()), this._background.source.disconnect()
                }
                function d() {
                    this._isPaused || (this._nodes.effectsGain.connect(this._nodes.coreEffectsGain), this._nodes.loopedEffectsGain.connect(this._nodes.coreEffectsGain)), this._background.source.connect(this._nodes.backgroundMusicGain)
                }
                this.soundslist = null, this.soundslistCallbacks = [], a.call(this), this._context = new webkitAudioContext, this._nodes = { effectsGain: this._context.createGainNode(), loopedEffectsGain: this._context.createGainNode(), pausedEffectsGain: this._context.createGainNode(), coreEffectsGain: this._context.createGainNode(), backgroundMusicGain: this._context.createGainNode(), masterGain: this._context.createGainNode() }, this._background = { buffer: null, source: this._context.createBufferSource() };
                var b = this._background.source;
                b.looping = !0, b.connect(this._nodes.backgroundMusicGain), this._nodes.effectsGain.connect(this._nodes.coreEffectsGain), this._nodes.loopedEffectsGain.connect(this._nodes.coreEffectsGain), this._nodes.pausedEffectsGain.connect(this._nodes.coreEffectsGain), this._nodes.coreEffectsGain.connect(this._nodes.masterGain), this._nodes.backgroundMusicGain.connect(this._nodes.masterGain), this._nodes.masterGain.connect(this._context.destination), this._soundEffects = {}, this._soundEffectsMap = {}, this._soundEffectCounter = 0, this._isSoundEffectsEnabled = !!webkitAudioContext, this._isMusicEnabled = !!webkitAudioContext, this._isPaused = !1, this._backgroundMusic = new Audio, this._backgroundMusic.loop = !0, this._backgroundMusic.onloadstart = function () {
                    console.log("loadstart", this)
                }, this._backgroundMusic.oncanplay = function () {
                    console.log(this), this.play()
                }, this._backgroundMusic.queue = [], document.webkitHidden !== undefined ? (console.info("disable sound using webkitvisiblitychange"), document.addEventListener("webkitvisibilitychange", bindSelf(function () {
                    document.webkitHidden ? c.call(this) : d.call(this)
                }, this))) : (console.info("disable sound using setTimeout and requestAnimationFrame"), window.jQuery(window).blur(bindSelf(function (a) {
                    var b = !1, c = !1;
                    requestAnimFrame(bindSelf(function () {
                        b = !0, c && (this._isPaused || (this._nodes.effectsGain.connect(this._nodes.coreEffectsGain), this._nodes.loopedEffectsGain.connect(this._nodes.coreEffectsGain)), this._background.source.connect(this._nodes.backgroundMusicGain))
                    }, this)), setTimeout(bindSelf(function () {
                        b || (this._isPaused || (this._nodes.effectsGain.disconnect(), this._nodes.loopedEffectsGain.disconnect()), this._background.source.disconnect(), c = !0)
                    }, this), 100)
                }, this)))
            }, getIsSoundEffectsEnabled: function () {
                return this._isSoundEffectsEnabled
            }, setIsSoundEffectsEnabled: function (a) {
                this._isSoundEffectsEnabled = !!a
            }, setIsMusicEnabled: function (a) {
                this._isMusicEnabled = !!a
            }, SetIsMusicEnabled: function () {
                this.setIsMusicEnabled.apply(this, arguments)
            }, GetIsMusicEnabled: function () {
                return this._isMusicEnabled
            }, SetEffectsVolume: function () {
                this.setEffectsVolume.apply(this, arguments)
            }, GetBackgroundMusicVolume: function (a) {
                return this._backgroundMusic.volume
            }, SetBackgroundMusicVolume: function (a) {
                this._nodes.backgroundMusicGain.gain.value = a * this.GetMasterVolume(), this._backgroundMusic.volume = a * this.GetMasterVolume()
            }, LoadBackgroundMusicTrack: function (a, b, c) {
                this._backgroundMusic.src = Preloader.contentPrefix + "/" + a, this._backgroundMusic.load(), this._backgroundMusic.loop = !0;
                var d = new XMLHttpRequest;
                d.open("GET", Preloader.contentPrefix + "/" + a, !0), d.responseType = "arraybuffer";
                var e = this;
                d.onreadystatechange = function () {
                    if (d.readyState == 4 && d.status == 200) {
                        var a = e._background.buffer = e._context.createBuffer(d.response, !1), b = e._background.source;
                        b.noteOff(0), b.buffer = a, e._background.playonload && b.noteOn(0)
                    }
                }, d.send()
            }, UnloadBackgroundMusicTrack: function () {
                this._background.source.noteOff(0), this._background.source.disconnect(), this._background.buffer = null
            }, StartBackgroundMusic: function () {
                var a = this._background.source;
                a && (a.noteOff(0), a.disconnect()), a = this._background.source = this._context.createBufferSource(), a.looping = !0, a.connect(this._nodes.backgroundMusicGain), this._background.playonload = this._background.buffer == null, this._background.buffer && (a.buffer = this._background.buffer, a.noteOn(0))
            }, SetEffectsVolume: function () {
                this.setEffectsVolume.apply(this, arguments)
            }, PauseAllEffects: function () {
                this._nodes.effectsGain.disconnect(), this._nodes.loopedEffectsGain.disconnect(), this._isPaused = !0
            }, ResumeAllEffects: function () {
                this._nodes.effectsGain.connect(this._nodes.coreEffectsGain), this._nodes.loopedEffectsGain.connect(this._nodes.coreEffectsGain), this._isPaused = !1
            }, StopAllEffects: function () {
                for (var a in this._soundEffects)
                    this.stopEffect(this._soundEffects[a].effectID)
            }, setEffectsVolume: function (a) {
                this._nodes.coreEffectsGain.gain.value = a
            }, setBackgroundMusicVolume: function (a) {
                this._nodes.backgroundMusicGain.gain.value = a, this._backgroundMusic.volume = a
            }, GetMasterVolume: function () {
                return this.getMasterVolume.apply(this, arguments)
            }, getMasterVolume: function () {
                return this._nodes.masterGain.gain.value
            }, SetMasterVolume: function () {
                this.setMasterVolume.apply(this, arguments)
            }, setMasterVolume: function (a) {
                this._nodes.masterGain.gain.value = a, this._backgroundMusic.volume = a
            }, loadEffect: function (a, b, c) {
                var d, e = this;
                if (this.soundslist == null) {
                    this.soundslistCallbacks.append(this.loadEffect.bind(this, a, b, c));
                    return
                }
                var f = a.split("/");
                if (this.soundslist.indexOf(f[f.length - 1]) == -1) {
                    c();
                    return
                }
                var g = e._soundEffectsMap[a];
                if (g) {
                    g != -1 ? g.buffer ? b(g.effectID) : g.onload ? g.onload.push([b, c]) : g.onload = [[b, c]] : c();
                    return
                }
                d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", g = e._soundEffects[++e._soundEffectCounter] = { effectID: e._soundEffectCounter, path: a, buffer: null, sourceNodes: [] }, e._soundEffectsMap[a] = e._soundEffects[e._soundEffectCounter], d.onreadystatechange = function (f) {
                    if (d.readyState == 4)
                        if (d.status == 200) {
                            g.buffer = e._context.
                                createBuffer(d.response, !1), b(g.effectID);
                            if (g.onload) {
                                for (var h = 0; h < g.onload.length; h++)
                                    g.onload[h][0](g.effectID);
                                delete g.onload
                            }
                        } else {
                            delete e._soundEffects[e._soundEffectsMap[a].effectID], e._soundEffectsMap[a] = -1, c();
                            if (g.onload) {
                                for (var h = 0; h < g.onload.length; h++)
                                    g.onload[h][1]();
                                delete g.onload
                            }
                        }
                }, d.send()
            }, startEffect: function (a, b, c, d) {
                var e;
                if (!this._soundEffects.hasOwnProperty(a))
                    return;
                var f = Date.now(), g = this._soundEffects[a];
                if (g.sourceNodes.length > 0) {
                    var e = g.sourceNodes[0];
                    if (!(!c && f - e.noteOnAt > g.buffer.duration * 1e3))
                        return;
                    e.noteOff(0), e.disconnect(), g.sourceNodes.shift()
                }
                e = this._context.createBufferSource(), this._soundEffects[a].sourceNodes.push(e), e.noteOnAt = f, e.buffer = this._soundEffects[a].buffer, e.connect(d ? this._nodes.pausedEffectsGain : c ? this._nodes.loopedEffectsGain : this._nodes.effectsGain), e.looping = c || !1, e.noteOn(0)
            }, stopEffect: function (a) {
                if (!this._soundEffects.hasOwnProperty(a))
                    return;
                if (!this._soundEffects[a].sourceNodes.length)
                    return;
                var b = this._soundEffects[a].sourceNodes.shift();
                b.noteOff(0), b.disconnect()
            }
        });
        if (!window.webkitAudioContext) {
            var c = [b];
            for (var d = 0; d < c.length; d++) {
                var e = c[d].prototype;
                Object.keys(e).forEach(function (a) {
                    e[a] instanceof Function && (e[a] = function () {
                        return !1
                    })
                })
            }
        }
        window.SoundEngine = b = new b;
        var f = Class.extend({
            init: function (a) {
                this._variantIDs = [], this._lastVariantIndex = -1, this._loop = /loop/gi.test(a.fileName), this._loopPlaybackRequests = 0, this._load(a.fileName)
            }, _load: function (a, c) {
                var d = this, e = this._variantIDs.length + 1, f;
                f = Preloader.contentPrefix + "/Sounds/" + a, c || (f += "_" + (e < 10 ? "0" : "") + e), f += ".wav", b.loadEffect(f, function (b) {
                    d._variantIDs.push(b), c || d._load(a)
                }, function () {
                    return d._variantIDs.length == 0 && !c && d._load(a, !0), !1
                })
            }, stopWithDecay: function () {
                if (this._loop) {
                    this._loopPlaybackRequests--;
                    if (this._loopPlaybackRequests >= this._variantIDs.length)
                        return
                }
                if (this._lastVariantIndex != -1) {
                    if (this._loopPlaybackRequests < 0)
                        throw new Error("Error stopping loop sound.");
                    b.stopEffect(this._variantIDs[this._lastVariantIndex]), this._lastVariantIndex--, this._lastVariantIndex < 0 && (this._lastVariantIndex = this._variantIDs.length - 1)
                }
            }, play: function () {
                this.playWithIgnorePause(!1)
            }, playWithIgnorePause: function (a) {
                this._lastVariantIndex++, this._lastVariantIndex >= this._variantIDs.length && (this._lastVariantIndex = 0);
                if (this._loop) {
                    this._loopPlaybackRequests++;
                    if (this._loopPlaybackRequests > this._variantIDs.length)
                        return
                }
                b.startEffect(this._variantIDs[this._lastVariantIndex], 1, this._loop, a)
            }, reset: function () {
                this._lastVariantIndex = -1, this._loopPlaybackRequests = 0
            }
        }), g = Class.extend({
            init: function (a, b) {
                this.fileName = b.attr(a) || null, this.volume = b.attr(a + "volume") || null, this.volumeVariance = b.attr(a + "volumevariance") || null, this.pitchVariance = b.attr(a + "pitchvariance") || null
            }
        });
        window.SoundEffectDefinition = g, window.SoundEffect = f, Preloader.initialize("game/SoundEngine.js")
    }), Preloader.include(["game/SoundEngine.js"], function () {
        var a = Class.extend({
            init: function (a) {
                this.sellTowerSoundEffect = null, this.upgradeTowerSoundEffect = null, this.buildTowerSoundEffect = null, this.invalidBuildLocationSoundEffect = null, this.enemyEscapesSoundEffect = null, this.beginGameSoundEffect = null, this.failureTuneSoundEffect = null, this.victoryTuneSoundEffect = null, this.towerSelectSoundEffect = null, this.towerDeselectSoundEffect = null, this.buttonClickSoundEffect = null, this.unlockableSoundEffect = null, this.unlockEverythingCheatSoundEffect = null, this.moneyAndHealthCheatSoundEffect = null;
                var b = Preloader.dependOn(this);
                Preloader.loadText(a, bindSelf(function (a) {
                    var c = $(a), d = c;
                    for (var e = d.children().first(); e.length > 0; e = e.next()) {
                        var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = e, u = e;
                        f = new SoundEffectDefinition("sellTowerSound", u), g = new SoundEffectDefinition("upgradeTowerSound", u), h = new SoundEffectDefinition("buildTower", u), i = new SoundEffectDefinition("invalidBuildLocation", u), j = new SoundEffectDefinition("enemyEscapes", u), l = new SoundEffectDefinition("beginGame", u), m = new SoundEffectDefinition("failureTune", u), n = new SoundEffectDefinition("victoryTune", u), k = new SoundEffectDefinition("buttonClick", u), o = new SoundEffectDefinition("towerSelect", u), p = new SoundEffectDefinition("towerDeselect", u), q = new SoundEffectDefinition("unlockable", u), r = new SoundEffectDefinition("unlockEverythingCheat", u), s = new SoundEffectDefinition("moneyAndHealthCheat", u), this.sellTowerSoundEffect = f.fileName !== null ? new SoundEffect(f) : null, this.upgradeTowerSoundEffect = g.fileName !== null ? new SoundEffect(g) : null, this.buildTowerSoundEffect = h.fileName !== null ? new SoundEffect(h) : null, this.invalidBuildLocationSoundEffect = i.fileName !== null ? new SoundEffect(i) : null, this.enemyEscapesSoundEffect = j.fileName !== null ? new SoundEffect(j) : null, this.buttonClickSoundEffect = k.fileName !== null ? new SoundEffect(k) : null, this.beginGameSoundEffect = l.fileName !== null ? new SoundEffect(l) : null, this.failureTuneSoundEffect = m.fileName !== null ? new SoundEffect(m) : null, this.victoryTuneSoundEffect = n.fileName !== null ? new SoundEffect(n) : null, this.towerSelectSoundEffect = o.fileName !== null ? new SoundEffect(o) : null, this.towerDeselectSoundEffect = p.fileName !== null ? new SoundEffect(p) : null, this.unlockableSoundEffect = q.fileName !== null ? new SoundEffect(q) : null, this.unlockEverythingCheatSoundEffect = r.fileName !== null ? new SoundEffect(r) : null, this.moneyAndHealthCheatSoundEffect = s.fileName !== null ? new SoundEffect(s) : null;
                        break
                    }
                    b()
                }, this))
            }, destroy: function () {
                this.sellTowerSoundEffect = null, this.upgradeTowerSoundEffect = null, this.buildTowerSoundEffect = null, this.invalidBuildLocationSoundEffect = null, this.enemyEscapesSoundEffect = null, this.beginGameSoundEffect = null, this.failureTuneSoundEffect = null, this.victoryTuneSoundEffect = null, this.towerSelectSoundEffect = null, this.towerDeselectSoundEffect = null, this.unlockableSoundEffect = null, this.buttonClickSoundEffect = null, this.unlockEverythingCheatSoundEffect = null, this.moneyAndHealthCheatSoundEffect = null
            }
        }, "AudioConfig");
        window.AudioConfig = a, Preloader.initialize("game/audioconfig.js")
    }), Preloader.include(["utilities/point.js", "utilities/nextstep/userdefaults.js", "game/preferences.js", "game/SoundEngine.js", "game/audioconfig.js"], function () {
        kTargetRenderFPS = 30, kTargetPhysicsFPS = 30;
        var a = Class.extend({
            init: function () {
                this.blurFramebuffer = !1, this.lastTime = 0, this.depthBufferID = 0, this.frameBufferID = 0, this.renderBufferID = 0, this.renderBufferWidth = 0, this.renderBufferHeight = 0, this.applicationController = null, this.mouseX = -FLT_MAX, this.mouseY = -FLT_MAX, this.bMouseButtonDown = !1, this.mouseCursorTexID = 0, this.mouseCursorButtonDownTexID = 0, this.mouseCursorTexWidth = 0, this.mouseCursorTexHeight = 0, this.postProcessTextureID = 0, this.blurIntensity = 1, this.blurOpacity = 0, this.blurAmount = 0;
                if (!this.createFramebuffer())
                    return;
                var a = Preloader.dependOn(this);
                gl.clearColor(0, 0, 0, 1), gl.clear(gl.COLOR_BUFFER_BIT), this.map = null, this.numFramesRendered = 0, this.logTimers = !1;
                var b = NextStep.UserDefaults.standardUserDefaults(), c = b.stringForKey(kPlayerNamePreference);
                if (c == null) {
                    var d = NextStep.UserDefaults.standardUserDefaults(), e = { playable: !0 }, f = sprintf("%s%s", Map.getOfficialMapNameForIndex(0), kMapSettingsKey);
                    d[f] = e
                }
                console.assert(b[kSoundPreference] == null || typeof b[kSoundPreference] == "number");
                var g = b[kSoundPreference];
                if (g == null) {
                    var h = "Application", i = h + "/" + "Preferences.bundle", j = i + "/" + "Root.json", k = Preloader.dependOn(this);
                    Preloader.loadText(j, function (a) {
                        var b = typeof a == "object" ? a : JSON.parse(a), c = b.PreferenceSpecifiers, d = null, e = null, f = null, g = null, h = null, i = null, j = null, l = null, m = null, n;
                        for (var o = 0; o < c.length; ++o) {
                            n = c[o];
                            var p = n.Key, q = n.DefaultValue;
                            if (p === null || q === null)
                                continue;
                            var r = typeof q == "string" ? q == "YES" : !1;
                            p == kPlayerNamePreference ? (console.assert(typeof q == "string"), d = q) : p == kDifficultyPreference ? (console.assert(q instanceof Number), e = q) : p == kGameplayModePreference ? (console.assert(q instanceof Number), f = q) : p == kTutorialTipsPreference ? (console.assert(typeof q == "string"), g = r) : p == kVibrationPreference ? (console.assert(typeof q == "string"), h = r) : p == kGridPreference ? (console.assert(typeof q == "string"), i = r) : p == kSoundPreference ? (console.assert(typeof q == "string"), j = r) : p == kSoundEffectVolumePreference ? (console.assert(q instanceof Number), l = q) : p == kMusicVolumePreference && (console.assert(q instanceof Number), m = q)
                        }
                        console.assert(d != null), console.assert(e != null), console.assert(f != null), console.assert(g != null), console.assert(h != null), console.assert(i != null), console.assert(j != null), console.assert(l != null), console.assert(m != null);
                        var s = NextStep.Dictionary.dictionaryWithObjectsAndKeys(d, kPlayerNamePreference, e, kDifficultyPreference, f, kGameplayModePreference, g, kTutorialTipsPreference, h, kVibrationPreference, i, kGridPreference, j, kSoundPreference, l, kSoundEffectVolumePreference, m, kMusicVolumePreference, null);
                        NextStep.UserDefaults.standardUserDefaults().registerDefaults(s), NextStep.UserDefaults.standardUserDefaults()[kPlayerNamePreference] = d, NextStep.UserDefaults.standardUserDefaults().synchronize(), k()
                    })
                }
                this.loadPostBootstrap = !0, this.updateInterval = 1 / kTargetPhysicsFPS / 4, this.userInterface = new UserInterface(this), Preloader.dependOn(function (a) {
                    return function () {
                        (function () {
                            this.userInterface.update(0);
                            for (var a = 0; a < 2; a++)
                                this.userInterface.render(0)
                        }).call(a)
                    }
                }(this), this.userInterface);
                var l = b.boolForKey(kSoundPreference) && SoundEngine.getIsSoundEffectsEnabled(), m = b.boolForKey(kVibrationPreference), n = null;
                n = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Common", "audio", "config"), this.audioConfig = null, n != null && (this.audioConfig = new AudioConfig(n), Preloader.dependOn(this, this.audioConfig), console.assert(this.audioConfig != null, "Error loading the audio config file."));
                var o = b.floatForKey(kMusicVolumePreference), p = b.floatForKey(kSoundEffectVolumePreference);
                l && SoundEngine.setBackgroundMusicVolume(o), l && SoundEngine.setEffectsVolume(p), Map.LoadAchievementCounters();
                var q = Preloader.dependOn(this);
                Map.loadCommonResources(null, q), this.mouseCursorTexID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", "mouse_cursor.png", bindSelf(function (a, b) {
                    this.mouseCursorTexWidth = a, this.mouseCursorTexHeight = b
                }, this)));
                var r, s;
                this.mouseCursorButtonDownTexID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", "mouse_cursor_down.png", function (a, b) {
                    r = a, s = b
                }));
                var t = function () {
                    console.assert(r == this.mouseCursorTexWidth && s == this.mouseCursorTexHeight)
                };
                Preloader.dependOn(t, this.mouseCursorTexID), Preloader.dependOn(t, this.mouseCursorButtonDownTexID), this.bBeginFrameCalled = !1, a()
            }, destroy: function () {
                this.map !== null && (this.map.clearAndRelease(), this.map = null), this.mouseCursorTexID > 0 && Sprite.destroyTexture(this.mouseCursorTexID), this.mouseCursorButtonDownTexID > 0 && Sprite.destroyTexture(this.mouseCursorButtonDownTexID), Map.unloadCommonResources(), NextStep.UserDefaults.clearStandardUserDefaults()
            }, createFramebuffer: function () {
                var b = RenderDevice.getRenderDevice();
                b.setViewport(0, 0, a.sScreenDimensions.width, a.sScreenDimensions.height), gl.disable(gl.DEPTH_TEST);
                var c = 0, d = 1e3;
                return b.setOrthographicProjection(-a.sScreenDimensions.width / 2, a.sScreenDimensions.width / 2, a.sScreenDimensions.height / 2, -a.sScreenDimensions.height / 2, c, d), !0
            }, updateView: function () {
                gl.clear(gl.COLOR_BUFFER_BIT);
                var a = 1 / kTargetRenderFPS, b = 1 / kTargetPhysicsFPS, c = 1;
                if (this.map != null)
                    switch (this.map.playbackSpeed) {
                        case kPlaybackSpeed.Normal:
                            c = kPlaybackModifier.Normal;
                            break;
                        case kPlaybackSpeed.Fast:
                            c = kPlaybackModifier.Fast
                    }
                this.numFramesRendered++, this.bBeginFrameCalled || (this.bBeginFrameCalled = !0);
                for (var d = 0; d < c; d++)
                    this.update(b);
                this.render(!0)
            }, render: function (a) {
                a || gl.clear(gl.COLOR_BUFFER_BIT);
                var b = 1 / kTargetRenderFPS;
                this.userInterface.render(b)
            }, update: function (b) {
                if (this.loadPostBootstrap) {
                    if (a.sJumpstartFile !== null) {
                        var c = a.sJumpstartFile;
                        if (c.match(/\.sav$/)) {
                            var d = "Saves";
                            c = d + "/" + a.sJumpstartFile
                        }
                        this.map = null, this.map = new Map(this), this.map.restoringGameState = !1, a.sStartingWave >= 0 && (this.map.waveIndex = a.sStartingWave - 1, this.map.unboundedWaveIndex = a.sStartingWave - 1);
                        if (a.sStartingDifficulty != kDifficultyLevel.None)
                            this.map.difficultyLevel = a.sStartingDifficulty;
                        else {
                            var e = NextStep.UserDefaults.standardUserDefaults(), f = e.integerForKey(kDifficultyPreference);
                            this.map.difficultyLevel = f
                        }
                        this.map.gameplayMode = kGameplayMode.Classic, this.map.name = c, this.map.filename = c, this.map.loadFromFile(a.sJumpstartFile, null), Preloader.dependOn(bindSelf(function () {
                            this.userInterface.switchToBackgroundForm(kGameHudFormName), this.map.reset()
                        }, this), this.map), a.sJumpstartFile = null
                    } else
                        Preloader.dependOn(bindSelf(function () {
                            this.userInterface.switchToBackgroundForm(kBootstrapForm2Name)
                        }, this), this.userInterface.loadForm(kTitleScreenFormName));
                    this.loadPostBootstrap = !1
                }
                this.userInterface.update(b), this.map != null && this.map.update(b)
            }, setMouseCursor: function (a, b, c) {
                this.mouseX = a, this.mouseY = b, this.bMouseButtonDown = c
            }, touchesBegan: function (a) {
                this.userInterface.touchesBegan(a)
            }, touchesMoved: function (a) {
                this.userInterface.touchesMoved(a)
            }, touchesEnded: function (a) {
                this.userInterface.touchesEnded(a)
            }, mouseMoved: function (a, b, c, d) {
                this.userInterface.mouseMoved(a, b, c, d)
            }, buttonPressed: function (a) {
                this.userInterface.buttonPressed(a)
            }, buttonReleased: function (a) {
                this.userInterface.buttonReleased(a)
            }
        }, "EAGLView");
        window.jQuery.extend(a, { sScreenDimensions: new Point, sVirtualScreenDimensions: new Point, sStartingMoney: -1, sStartingHealth: -1, sStartingWave: -1, sJumpstartFile: null }), Preloader.include(["game/map.js"], function () {
            a.sStartingDifficulty = kDifficultyLevel.Medium
        }), window.EAGLView = a, Preloader.initialize("core/eaglview.js")
    }), Preloader.include([], function () {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder;
        var a = null;
        kStoragePathPrefix = "FieldRunners/";
        var b = Class.extend({
            init: function () {
            }, destroy: function () {
            }, fileSizeAtPath: function (a, b) {
                b(1)
            }, fileAttributesAtPath: function (a, b) {
                return console.assert(!1), null
            }, fileExistsAtPath: function (a, c) {
                b.fileSystem ? b.fileSystem.root.getFile(a, {}, function () {
                    c(!0)
                }, function () {
                    c(!1)
                }) : c(this.translatePath(kStoragePathPrefix + a) in localStorage)
            }, createFileAtPath: function (a, c, d, e) {
                b.fileSystem ? b.fileSystem.root.getFile(a, { create: !0 }, function () {
                    e && e(!0)
                }, function () {
                    e && e(!1)
                }) : (localStorage[this.translatePath(kStoragePathPrefix + a)] = "", e && e(!0))
            }, removeItemAtPath: function (a, c) {
                b.fileSystem ? b.fileSystem.root.getFile(a, {}, function (a) {
                    a.remove(function () {
                        c && c(!0)
                    }, function () {
                        c && c(!1)
                    })
                }, function () {
                    c && c(!1)
                }) : (localStorage.removeItem(this.translatePath(kStoragePathPrefix + a)), c && c(!0))
            }, translatePath: function (a) {
                if (!b.fileSystem) {
                    while (a.indexOf("/") != - 1)
                        a = a.replace("/", "_");
                    while (a.indexOf(".") != - 1)
                        a = a.replace(".", "_")
                }
                return a
            }
        }, "FileManager");
        a = new b, window.jQuery.extend(b, {
            defaultManager: function () {
                return a
            }
        }), window.NextStep = window.NextStep || {}, window.NextStep.FileManager = b;
        var c = function (a) {
            if (BrowserDetect.browser == "Chrome" && BrowserDetect.version >= 13) {
                var b = function () {
                    localStorage.useStorage = !0, a()
                };
                window.requestFileSystem(window.PERSISTENT, 1048576, d(a), b)
            } else
                a()
        }, d = function (a) {
            return function (c) {
                b.fileSystem = c, a()
            }
        }, e = function (a) {
            return function (b) {
                a()
            }
        };
        Preloader.initialize("utilities/nextstep/filemanager.js")
    }), Preloader.include(["utilities/nextstep/filemanager.js"], function () {
        var a = NextStep.FileManager.fileSystem, b = Class.extend({
            init: function () {
                this.m_data = null
            }, fromFile: function (b, c) {
                var d = bindSelf(function (a) {
                    this.m_data = a, c && c(), this.onload && this.onload(), this.isLoaded = !0
                }, this), e = function () {
                    d(atob(localStorage[NextStep.FileManager.defaultManager().translatePath(kStoragePathPrefix + b)]))
                };
                a ? a.root.getFile(b, {}, function (a) {
                    a.file(function (a) {
                        var c = new FileReader;
                        c.onloadend = function () {
                            console.log(this), d(atob(this.result))
                        }, c.onerror = function () {
                            console.error("failed to read " + b), e()
                        }, c.readAsText(a)
                    })
                }, function (a) {
                    console.error("failed to open " + b), e()
                }) : e()
            }, destroy: function () {
                this.clear()
            }, getBytes: function (a, b, c) {
                console.assert(this.m_data !== null), console.assert(b + c <= this.m_data.length, "Data.getBytes paramaters out of range"), a(this.m_data.substring(b, b + c))
            }, writeToFile: function (b, c, d) {
                console.assert(this.m_data !== null);
                var e = bindSelf(function () {
                    localStorage[NextStep.FileManager.defaultManager().translatePath(kStoragePathPrefix + b)] = btoa(this.m_data), d && d(!0)
                }, this);
                if (a) {
                    var f = this;
                    function g(a, b, c, d) {
                        if (b[0] == "." || b[0] == "")
                            b = b.slice(1);
                        b.length ? a.getDirectory(b[0], { create: !0 }, function (a) {
                            b.length ? g(a, b.slice(1), c, d) : c && c(a)
                        }, function () {
                            d && d()
                        }) : c && c(a)
                    }
                    var h = b.split("/"), b = h[h.length - 1];
                    h = h.slice(0, h.length - 1), g(a.root, h, function (a) {
                        a.getFile(b, { create: !0 }, function (a) {
                            a.createWriter(function (a) {
                                a.onwriteend = function (a) {
                                    console.log(a, a.toString()), d && d(!0)
                                }, a.onerror = function (b) {
                                    console.error(this.error, this.error.code), e(), a.onwriteend = undefined, a.onerror = undefined
                                };
                                var b = new BlobBuilder;
                                b.append(btoa(f.m_data)), console.log(f, btoa(f.m_data), btoa(f.m_data).length), a.write(b.getBlob("text/plain"))
                            }, function (a) {
                                console.error("failed to prepare writer for " + b), e()
                            })
                        }, function () {
                            console.error("failed to open " + b), e()
                        })
                    }, function () {
                        console.log("failed to retrieve directories", h), e()
                    })
                } else
                    e()
            }
        }, "Data"), c = b.extend({
            init: function () {
                this._super()
            }, destroy: function () {
                this._super()
            }, appendBytes: function (a, b) {
                this.m_data || (this.m_data = "");
                while (a.length < b)
                    a += String.fromCharCode(0);
                this.m_data += a
            }
        }, "MutableData");
        window.NextStep = window.NextStep || {}, window.NextStep.Data = b, window.NextStep.MutableData = c, Preloader.initialize("utilities/nextstep/data.js")
    }), Preloader.include(["utilities/nextstep/filemanager.js", "utilities/nextstep/data.js"], function () {
        var a = function (a, b, c, d) {
            return a + "/" + b + "." + c
        };
        this.GET_RESOURCE_PATH_FROM_MAIN_BUNDLE = a, SERIALIZE = function (a, b, c) {
            return a.serialize(b, c)
        }, SERIALIZE_STRING = function (a, b, c) {
            return a.serializeString(b, c)
        }, SERIALIZE_OBJECT = function (a, b) {
            return b.serialize(a)
        }, kFilePermissions = { None: 0, Read: 1, Write: 2 };
        var b = 256, c = Class.extend({
            init: function () {
                this.fileManager = NextStep.FileManager.defaultManager(), this.filePath = null, this.readBuffer = null, this.writeBuffer = null, this.permissions = kFilePermissions.None, this.readBufferPos = 0, this.version = 0, this.isOpen = !1, this.binaryParser = new BinaryParser(!0, !0)
            }, destroy: function () {
            }, openFile: function (a, b) {
                return this.filePath = a, this.permissions = b, b == kFilePermissions.Write ? (console.info("Opening binary file '%s' for writing.", a), this.writeBuffer = new NextStep.MutableData, this.isOpen = !0, Preloader.dependOn(this)()) : (this.readBuffer = new NextStep.Data, this.readBuffer.fromFile(a), Preloader.dependOn(this, this.readBuffer), this.readBufferPos = 0, this.isOpen = !0), this.isOpen
            }, close: function () {
                if (this.isOpen) {
                    var a = !0;
                    return this.permissions == kFilePermissions.Write ? (a = this.writeBuffer.writeToFile(this.filePath, !0), this.writeBuffer = null) : this.readBuffer = null, this.isOpen = !1, this.filePath = null, a
                }
                return !1
            }, isLoading: function () {
                return this.permissions == kFilePermissions.Read
            }, isSaving: function () {
                return this.permissions == kFilePermissions.Write
            }, read: function (a, b) {
                console.assert(this.readBufferPos + b <= this.readBuffer.length, "Attempting to read past the end of file %s.", this.filePath), this.readBuffer.getBytes(a, this.readBufferPos, b), this.readBufferPos += b
            }, readBool: function (a) {
                this.read(bindSelf(function (b) {
                    a(Boolean(this.binaryParser.toByte(b)))
                }, this), 1)
            }, readInt: function (a) {
                this.read(bindSelf(function (b) {
                    a(this.binaryParser.toInt(b))
                }, this), 4)
            }, readDouble: function (a) {
                this.read(bindSelf(function (b) {
                    a(this.binaryParser.toDouble(b))
                }, this), 8)
            }, readString: function (a) {
                var b;
                this.readInt(function (a) {
                    b = a
                });
                var c;
                this.read(function (a) {
                    c = a
                }, b), a(c)
            }, serialize: function (a, b) {
                var c = a[b], d = typeof c;
                d == "number" ? c - Math.floor(c) !== 0 ? this.serializeDouble(a, b) : this.serializeInt(a, b) : d == "boolean" ? this.serializeBool(a, b) : d == "string" ? this.serializeString(a, b) : c && c.serialize && c.serialize(this)
            }, serializeBool: function (a, b) {
                this.permissions == kFilePermissions.Read ? this.readBool(function (c) {
                    a[b] = c
                }) : this.writeBool(a[b])
            }, serializeInt: function (a, b) {
                this.permissions == kFilePermissions.Read ? this.readInt(function (c) {
                    a[b] = c
                }) : this.writeInt(a[b])
            }, serializeDouble: function (a, b) {
                this.permissions == kFilePermissions.Read ? this.readDouble(function (c) {
                    a[b] = c
                }) : this.writeDouble(a[b])
            }, serializeString: function (a, b) {
                this.permissions == kFilePermissions.Read ? this.readString(function (c) {
                    a[b] = c
                }) : this.writeString(a[b])
            }, write: function (a, b) {
                this.writeBuffer.appendBytes(a, b)
            }, writeBool: function (a) {
                this.write(this.binaryParser.fromByte(a ? 1 : 0), 1)
            }, writeInt: function (a) {
                this.write(this.binaryParser.fromInt(a), 4)
            }, writeDouble: function (a) {
                this.write(this.binaryParser.fromDouble(a), 8)
            }, writeString: function (a) {
                this.writeInt(a.length), this.write(a, a.length)
            }
        }, "BinaryFile");
        window.jQuery.extend(c, {
            deleteFile: function (a, b) {
                var c = NextStep.FileManager.defaultManager();
                c.removeItemAtPath(a, null, function (c) {
                    c || (console.warn("File '%s' could not be deleted.", a), b && b(!1)), b && b(!0)
                })
            }, doesFileExist: function (a, b) {
                var c = NextStep.FileManager.defaultManager();
                c.fileExistsAtPath(a, b)
            }
        }), window.BinaryFile = c, Preloader.initialize("utilities/fileutilities.js")
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function (a, b) {
                this.width = a, this.height = b
            }
        });
        window.CGSize = a, Preloader.initialize("utilities/nextstep/cgsize.js")
    }), Preloader.include([], function () {
        kDefaultLanguage = "english";
        var a = window.kTextAlignment = { Left: 0, Center: 1, Right: 2 }, b = Class.extend({
            init: function (a, b) {
                this.mFilename = StringExt.stringByDeletingPathExtension(a), this.mTracking = b, this.mSprite = Preloader.dependOn(this, new Sprite("Fonts", a)), Preloader.dependOn(bindSelf(function () {
                    var a = kDefaultLanguage, b = this.mSprite.animationHash[a];
                    console.assert(b !== null, "Language not supported."), this.mSpaceWidth = (b.maxFrameWidth - this.mTracking) / EAGLView.sVirtualScreenDimensions.width * .28
                }, this), this.mSprite)
            }, destroy: function () {
                this.mSprite.destroy(), this.mSprite = null
            }, GetFilename: function () {
                return this.mFilename
            }, GetSpaceWidth: function () {
                return this.mSpaceWidth
            }, GetSprite: function () {
                return this.mSprite
            }, GetTracking: function () {
                return this.mTracking
            }
        }, "Font"), c = Class.extend({
            init: function (b) {
                this.mString = null, this.mFont = null, this.mScale = 1, this.mSize = 1, this.mAlignment = a.Left, this.mPosition = new Vector2, this.mAnchor = new Vector2, this.mTextBoxSize = new Vector2, this.mTint = new Color, b !== null && (this.mFont = b)
            }, destroy: function () {
                this.mFont = null, this.mString = null
            }, MeasureString: function (a, b) {
                var c = 0, d = 0;
                if (a) {
                    var e = this.mFont.GetSprite(), f = kDefaultLanguage, g = e.animationHash[f], h = !0;
                    for (var i = 0; i < a.length; i++) {
                        var j = a.charCodeAt(i) - 33;
                        if (j >= 0) {
                            var k = g.frameList[j];
                            console.assert(k !== null, "Character does not exist in the character map.");
                            var l = e.GetTileSpacingFromAnchorToTileEdge(k, this.mSize * this.mScale, kMirrorType.None, kDirection.West), m = e.GetTileSpacingFromAnchorToTileEdge(k, this.mSize * this.mScale, kMirrorType.None, kDirection.East);
                            c += (l + m) / EAGLView.sVirtualScreenDimensions.width, h ? h = !1 : c += this.mFont.GetTracking() * this.mScale * this.mSize, d = Math.max(d, k.tileHeight / EAGLView.sVirtualScreenDimensions.height)
                        } else
                            j == -1 && (c += this.mFont.GetSpaceWidth() * this.mSize * this.mScale)
                    }
                }
                b(c, d)
            }, SetString: function (a) {
                this.mString = null;
                if (a === null)
                    return;
                if (this.mString === null || !this.mString == a)
                    this.mString = a
            }, RenderTextBox: function (b) {
                var c = this.mPosition.GetX() + this.mAnchor.GetX(), d = this.mPosition.GetY() + this.mAnchor.GetY(), e, f;
                if (!this.mTextBoxSize.IsZero())
                    e = this.mTextBoxSize.GetX(), f = this.mTextBoxSize.GetY();
                else {
                    this.MeasureString(this.mString, function (a, b) {
                        e = a, f = b
                    });
                    if (this.mAlignment != a.Left) {
                        var g, h;
                        this.MeasureString(this.mString, function (a, b) {
                            g = a, h = b
                        }), this.mAlignment == a.Center && (g /= 2), c -= g * EAGLView.sVirtualScreenDimensions.width
                    }
                }
                e *= EAGLView.sVirtualScreenDimensions.width, f *= EAGLView.sVirtualScreenDimensions.height;
                var i = RenderDevice.createVertexArray(4, [c, d, 0, c + e, d, 0, c, d + f, 0, c + e, d + f, 0]), j = 64, k = RenderDevice.createColorArray(4, new Color(0, 0, 255, j)), l = RenderDevice.getRenderDevice();
                l.setVertexStreamDataArrays(i, k), l.setBlendState(kBlendState.Alpha), l.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)
            }, Render: function (b) {
                if (this.mString !== null) {
                    var c = this.mFont.GetSprite(), d = kDefaultLanguage, e = c.animationHash[d], f = null, g = this.mPosition.copy(), h = 0, i = NextStep.Scanner.scannerWithString(this.mString), j = null, k = 1;
                    while (k > 0) {
                        k = 0;
                        if (!this.mTextBoxSize.IsZero()) {
                            var l = /[ \t\n\r]/g, m = 0, n = 0, o = 0, p = !1;
                            f = "";
                            while (m < this.mTextBoxSize.GetX()) {
                                if (j === null) {
                                    if (p)
                                        break;
                                    if (!i.scanUpToCharactersFromSet(l, function (a) {
                                        j = a
                                    }, function (a) {
                                        p = a
                                    }))
                                        break
                                }
                                k > 0 && (m += this.mFont.GetSpaceWidth() * this.mSize * this.mScale, m += this.mFont.GetTracking() * this.mScale * this.mSize), this.MeasureString(j, function (a, b) {
                                    n = a, o = b
                                });
                                if (!(n < this.mTextBoxSize.GetX() - m))
                                    break;
                                m += n, k > 0 && (f += " "), f += j, j = null, k++
                            }
                            f += "\0"
                        } else
                            f = this.mString;
                        g.SetX(this.mPosition.GetX());
                        var q = new Vector2, r, s;
                        EAGLView.sVirtualScreenDimensions.height > 400 ? s = this.mFont.GetSpaceWidth() * EAGLView.sVirtualScreenDimensions.height : s = this.mFont.GetSpaceWidth() * EAGLView.sVirtualScreenDimensions.height * .5;
                        if (this.mAlignment != a.Left) {
                            var t;
                            this.MeasureString(f, function (a, b) {
                                r = a, t = b
                            }), this.mAlignment == a.Center && (r /= 2), g.SubtractFromX(r * EAGLView.sVirtualScreenDimensions.width);
                            if (!this.mTextBoxSize.IsZero())
                                switch (this.mAlignment) {
                                    case a.Center:
                                        g.AddToX(this.mTextBoxSize.GetX() / 2 * EAGLView.sScreenDimensions.width);
                                        break;
                                    case a.Right:
                                        g.AddToX(this.mTextBoxSize.GetX() * EAGLView.sScreenDimensions.width)
                                }
                        }
                        var u = !0;
                        for (var v = 0; v < f.length; h++, v++) {
                            var w = f.charCodeAt(v) - 33;
                            if (w >= 0) {
                                var x = e.frameList[w], y = c.GetTileSpacingFromAnchorToTileEdge(x, this.mScale * this.mSize, kMirrorType.None, kDirection.West), z = c.GetTileSpacingFromAnchorToTileEdge(x, this.mScale * this.mSize, kMirrorType.None, kDirection.East);
                                if (u) {
                                    u = !1;
                                    var A = e.frameList["W".charCodeAt(0) - 33], B = c.GetTileSpacingFromAnchorToTileEdge(A, this.mSize, kMirrorType.None, kDirection.North);
                                    g.AddToY(B)
                                } else
                                    g.AddToX(this.mFont.GetTracking() * this.mScale * this.mSize * EAGLView.sVirtualScreenDimensions.width);
                                g.AddToX(y), c.render(x, this.mTint, g.GetX() + this.mAnchor.GetX(), g.GetY() + this.mAnchor.GetY(), 0, this.mSize * this.mScale, kMirrorType.None), g.AddToX(z)
                            } else
                                w == -1 && g.AddToX(this.mFont.GetSpaceWidth() * this.mSize * this.mScale * EAGLView.sVirtualScreenDimensions.width)
                        }
                        g.AddToY(s)
                    }
                }
            }, GetPosition: function () {
                return this.mPosition
            }, GetString: function () {
                return this.mString
            }, GetAnchor: function () {
                return this.mAnchor
            }, GetTint: function () {
                return this.mTint
            }, GetFont: function () {
                return this.mFont
            }, GetSize: function () {
                return this.mSize
            }, SetAlignment: function (a) {
                this.mAlignment = a
            }, SetAnchor: function (a, b) {
                this.mAnchor.Set(a, b)
            }, SetNormalizedPositionWithVector: function (a) {
                this.mPosition = a, this.mPosition.ScaleX(EAGLView.sScreenDimensions.width), this.mPosition.ScaleY(EAGLView.sScreenDimensions.height)
            }, SetNormalizedPosition: function (a, b) {
                this.mPosition.Set(a * EAGLView.sScreenDimensions.width, b * EAGLView.sScreenDimensions.height)
            }, SetPositionWithVector: function (a) {
                this.mPosition = a
            }, SetPosition: function (a, b) {
                this.mPosition.Set(a, b)
            }, SetSize: function (a) {
                this.mSize = a
            }, SetScale: function (a) {
                this.mScale = a
            }, SetTextBoxSize: function (a) {
                this.mTextBoxSize = a
            }, SetTint: function (a) {
                this.mTint = a
            }, SetOpacity: function (a) {
                this.mTint.SetAlpha(a * 255)
            }
        }, "Text");
        window.Font = b, window.Text = c, Preloader.initialize("graphics/text.js")
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function () {
                this.mResources = 0, this.mScore = 0, this.mHealth = 20
            }, serialize: function (a) {
                SERIALIZE(a, this, "mResources"), SERIALIZE(a, this, "mScore"), SERIALIZE(a, this, "mHealth")
            }, GetResources: function () {
                return this.mResources
            }, GetScore: function () {
                return this.mScore
            }, GetHealth: function () {
                return this.mHealth
            }, AddResources: function (a) {
                console.assert(a >= 0, "Subtracting a negative amount of resources is not allowed."), this.mResources += a;
                var b = AchievementManager.GetSingleton();
                b.SetTotalAccumulatedWealth(b.GetTotalAccumulatedWealth() + a)
            }, AddScore: function (a) {
                this.mScore += a
            }, SubtractResources: function (a) {
                console.assert(a >= 0, "Subtracting a negative amount of resources is not allowed."), this.mResources -= a, console.assert(this.mResources >= 0, "Resources should never be negative.");
                var b = AchievementManager.GetSingleton();
                b.SetTotalWealthSpent(b.GetTotalWealthSpent() + a)
            }, SubtractScore: function (a) {
                this.mScore = a <= this.mScore ? this.mScore - a : 0
            }, SetResources: function (a) {
                console.assert(this.mResources >= 0, "Resources should never be negative."), this.mResources = a
            }, SetScore: function (a) {
                this.mScore = a
            }, SubtractHealth: function (a) {
                console.assert(a >= 0, "Subtracting a negative amount of health is not allowed."), this.mHealth -= a, this.mHealth = Math.max(this.mHealth, 0);
                var b = AchievementManager.GetSingleton();
                b.SetTotalHealthLost(b.GetTotalHealthLost() + a)
            }, SetHealth: function (a) {
                this.mHealth = MAX(a, 0)
            }
        });
        this.Player = a, Preloader.initialize("game/player.js")
    }), Preloader.include(["utilities/defines.js"], function () {
        kNumInvalidAchievements = IsPlatformMac() ? 24 : 25, kAchievement = { Undefined: -1, ThatWasEasy: 0, BootCampJunior: 1, FieldPrivate: 2, FieldCorporal: 3, FieldSergeant: 4, FieldRunner: 5, GrasslandsBronze: 6, GrasslandsSilver: 7, GrasslandsGold: 8, ThatWasEasyAgain: 9, BootCampSenior: 10, BaseSergeant: 11, BaseMajor: 12, BaseOfficer: 13, BaseRunner: 14, CrossroadsBronze: 15, CrossroadsSilver: 16, CrossroadsGold: 17, Cakewalk: 18, BootCampDominator: 19, DesertLieutenant: 20, DesertCaptain: 21, DesertCommander: 22, DesertRunner: 23, NowWereTalking: 24, BootCampMaster: 25, SkyCaptain: 26, SkyColonel: 27, SkyCommodore: 28, SkyRunner: 29, SkywayBronze: 30, SkywaySilver: 31, SkywayGold: 32, MakeMyDay: 33, BootCampComplete: 34, IceColonel: 35, IceBrigadier: 36, IceGeneral: 37, IceRunner: 38, FrostbiteBronze: 39, FrostbiteSilver: 40, FrostbiteGold: 41, NoMercy: 42, TheyKeepComingIKeepGunning: 43, Statistic: 44, Berzerker: 45, ActiveDenialSystem: 46, PreciousSnowflake: 47, SliceThemUp: 48, ILoveTheSmellOfNapalm: 49, NuclearDawn: 50, JellyUp: 51, HardWorker: 52, PatienceIsAVirtue: 53, Lemming: 54, WarHero: 55, CommanderInChief: 56, Flawless: 57, ThisIsSparta: 58, AerialSurvivalist: 59, AerialMadman: 60, Impenetrable: 61, WarmingUp: 62, IronFist: 63, MasterPlan: 64, PurpleHeart: 65, DieHard: 66, MowThemDown: 67, SlowMow: 68, BlowEmUp: 69, MadScientist: 70, GlobalWarmer: 71, ManhattanProject: 72, CutsLikeButter: 73, NuclearWinter: 74, GuerrillaWarfare: 75, MedalOfHonor: 76, HardCore: 77, DrylandsBronze: 78, DrylandsSilver: 79, DrylandsGold: 80, ItsBetterToBeAlive: 81, TimeFlies: 82, Insane: 83, StrategicGenius: 84, Daredevil: 85, SolarFlare: 86, WelcomeToTheJungle: 87, MudOnYourBoots: 88, JungleRecon: 89, NaturalBornSniper: 90, GreenBeret: 91, Mudrunner: 92, MudslideBronze: 93, MudslideSilver: 94, MudslideGold: 95, GetOffMyLawn: 96, EasyShine: 97, CrystalClear: 98, ThroughTheLookingGlass: 99, DiamondsAreForever: 100, MasterMiner: 101, Crystalrunner: 102, CrystalCavesBronze: 103, CrystalCavesSilver: 104, CrystalCavesGold: 105, SuperVolcano: 106, GoWithTheFlow: 107, Firecracker: 108, FireAway: 109, Firewalker: 110, FlameThrower: 111, Lavarunner: 112, LavaflowBronze: 113, LavaflowSilver: 114, LavaflowGold: 115, FullyUpgradePoisonTower: 116, kNumAchievements: 117 }, kNumAchievements = kAchievement.kNumAchievements, kAchievementModifier = 1, kDiehardAchievementWaveCount = 75, kGuerrillaWarfareAchievementWaveCount = 39, window.location.host == "dev.gradient-studios.com" && (kAchievementModifier = 100, kDiehardAchievementWaveCount = 2, kGuerrillaWarfareAchievementWaveCount = 39), kNumAchievementsForMedalOfHonor = (kNumAchievements - kNumInvalidAchievements) / 2 - 1, kNumAchievementsForHardcore = kNumAchievements - kNumInvalidAchievements - 2;
        var a = Class.extend({
            init: function () {
                this.ResetCounters()
            }, destroy: function () {
            }, GetAchievementGoal: function (b) {
                if (a.achievementIsInvalid(b))
                    return -1;
                switch (b) {
                    case kAchievement.NoMercy:
                        return 5e3 / kAchievementModifier;
                    case kAchievement.TheyKeepComingIKeepGunning:
                        return 25e3 / kAchievementModifier;
                    case kAchievement.Statistic:
                        return 1e5 / kAchievementModifier;
                    case kAchievement.Berzerker:
                        return 5e5 / kAchievementModifier;
                    case kAchievement.ActiveDenialSystem:
                        return 1e6 / kAchievementModifier;
                    case kAchievement.PreciousSnowflake:
                        return 5e4 / kAchievementModifier;
                    case kAchievement.SliceThemUp:
                        return 5e3 / kAchievementModifier;
                    case kAchievement.ILoveTheSmellOfNapalm:
                        return 5e3 / kAchievementModifier;
                    case kAchievement.NuclearDawn:
                        return 15e3 / kAchievementModifier;
                    case kAchievement.JellyUp:
                        return 1e5 / kAchievementModifier;
                    case kAchievement.HardWorker:
                        return 100 / kAchievementModifier;
                    case kAchievement.PatienceIsAVirtue:
                        return 500 / kAchievementModifier;
                    case kAchievement.Lemming:
                        return 1e3 / kAchievementModifier;
                    case kAchievement.WarHero:
                        return 100 / kAchievementModifier;
                    case kAchievement.CommanderInChief:
                        return 500 / kAchievementModifier;
                    case kAchievement.Flawless:
                        return 1;
                    case kAchievement.ThisIsSparta:
                        return 100 / kAchievementModifier;
                    case kAchievement.AerialSurvivalist:
                        return 100 / kAchievementModifier;
                    case kAchievement.AerialMadman:
                        return 500 / kAchievementModifier;
                    case kAchievement.Impenetrable:
                        return 5e3 / kAchievementModifier
                }
                return -1
            }, GetAchievementDescription: function (a) {
                var b = "";
                return b = sprintf("AchievementDescription%03d", a), LocalizeString(b)
            }, GetAchievementTitle: function (a) {
                var b;
                return b = sprintf("AchievementTitle%03d", a), LocalizeString(b)
            }, GetAchievementProgress: function (a) {
                return a == kAchievement.NoMercy || a == kAchievement.TheyKeepComingIKeepGunning || a == kAchievement.Statistic || a == kAchievement.Berzerker || a == kAchievement.ActiveDenialSystem ? this.mTotalKills
                    : a == kAchievement.PreciousSnowflake ? this.mNumTowerClassImpacts[kTowerClass.Ice] : a == kAchievement.SliceThemUp ? this.mNumTowerClassKills[kTowerClass.Laser] : a == kAchievement.ILoveTheSmellOfNapalm ? this.mNumTowerClassKills[kTowerClass.Flame] : a == kAchievement.NuclearDawn ? this.mNumTowerClassKills[kTowerClass.Mortar] : a == kAchievement.JellyUp ? this.mNumTowerClassImpacts[kTowerClass.Goo] : a == kAchievement.HardWorker || a == kAchievement.PatienceIsAVirtue || a == kAchievement.Lemming ? this.mNumPersonalDefeats : a == kAchievement.WarHero || a == kAchievement.CommanderInChief ? this.mNumPersonalVictories : a == kAchievement.Flawless || a == kAchievement.ThisIsSparta ? this.mNumFlawlessVictories : a == kAchievement.AerialSurvivalist || a == kAchievement.AerialMadman || a == kAchievement.Impenetrable ? this.mTotalAirUnitsKilled : -1
            }, GetNumKillsByTowerClass: function (a) {
                return this.mNumTowerClassKills[a]
            }, GetNumImpactsByTowerClass: function (a) {
                return this.mNumTowerClassImpacts[a]
            }, IncrementNumImpactsByTowerClass: function (a) {
                this.mNumTowerClassImpacts[a]++, this.UnlockAchievementFromCounters()
            }, IncrementNumKillsByTowerClass: function (a) {
                this.mNumTowerClassKills[a]++, this.UnlockAchievementFromCounters()
            }, IncrementNumTimesMapPlayed: function (a) {
                this.mNumTimesMapPlayed[a]++, this.UnlockAchievementFromCounters()
            }, OutputToLog: function () {
                console.info("---------------------------------------------------"), console.info("Number of Personal Victories: %d", this.mNumPersonalVictories), console.info("Number of Flawless Victories: %d", this.mNumFlawlessVictories), console.info("Number of Personal Defeats: %d", this.mNumPersonalDefeats), console.info("Number of Personal True Defeats: %d", this.mNumPersonalTrueDefeats), console.info("Number of Games Played: %d", this.mNumGamesPlayed), console.info("Number of Achievements Unlocked: %d", this.mNumAchievementsUnlocked), console.info("Total Accumulated Score: %d", this.mTotalAccumulatedScore), console.info("Total Accumulated Wealth: %d", this.mTotalAccumulatedWealth), console.info("Total Wealth Spent: %d", this.mTotalWealthSpent), console.info("Total Health Lost: %d", this.mTotalHealthLost), console.info("Total Kills: %d", this.mTotalKills), console.info("Total Air Units Kills: %d", this.mTotalAirUnitsKilled), console.info("Total Rounds Played: %d", this.mTotalWavesPlayed);
                for (var a = 0; a < kNumTowerClasses; a++) {
                    var b = TowerClass.getTowerNameFromTowerClassID(a);
                    console.info("Number of Impacts by %s: %d", b, this.mNumTowerClassImpacts[a])
                }
                for (var a = 0; a < kNumTowerClasses; a++) {
                    var b = TowerClass.getTowerNameFromTowerClassID(a);
                    console.info("Number of Kills by %s: %d", b, this.mNumTowerClassKills[a])
                }
                for (var c = 0; c < kNumOfficialMaps; c++)
                    console.info("Number of Times %s was Played: %d", Map.getOfficialMapNameForIndex(c), this.mNumTimesMapPlayed[c]);
                console.info("---------------------------------------------------")
            }, GetTopAchievementInQueue: function () {
                return this.mAchievementUnlockQueue.length > 0 ? this.mAchievementUnlockQueue[0] : kAchievement.Undefined
            }, PopAchievementFromQueue: function () {
                if (this.mAchievementUnlockQueue.length > 0) {
                    var a = this.mAchievementUnlockQueue[0];
                    return this.mAchievementUnlockQueue.shift(), a
                }
                return kAchievement.Undefined
            }, ResetCounters: function () {
                this.mNumPersonalVictories = 0, this.mNumFlawlessVictories = 0, this.mNumPersonalDefeats = 0, this.mNumPersonalTrueDefeats = 0, this.mNumGamesPlayed = 0, this.mNumAchievementsUnlocked = 0, this.mTotalAccumulatedScore = 0, this.mTotalAccumulatedWealth = 0, this.mTotalWealthSpent = 0, this.mTotalHealthLost = 0, this.mTotalKills = 0, this.mTotalAirUnitsKilled = 0, this.mTotalWavesPlayed = 0, this.mAchievementUnlockQueue = [], this.mNumTowerClassKills = new Array(kNumTowerClasses), this.mNumTowerClassImpacts = new Array(kNumTowerClasses), this.mNumTimesMapPlayed = new Array(kMaxOfficialMaps), this.mbIsAchievementUnlocked = new Array(kNumAchievements);
                for (var a = 0; a < kNumTowerClasses; a++)
                    this.mNumTowerClassKills[a] = 0, this.mNumTowerClassImpacts[a] = 0;
                for (var b = 0; b < kNumOfficialMaps; b++)
                    this.mNumTimesMapPlayed[b] = 0;
                for (var c = 0; c < kNumAchievements; c++)
                    this.mbIsAchievementUnlocked[c] = !1
            }, Serialize: function (a) {
                var b = {};
                b.saveGameVersion = PACK_VERSION_NUMBER(kGameReleaseVersion, kGameMajorVersion, kGameMinorVersion), a.serializeInt(b, "saveGameVersion"), a.version = b.saveGameVersion, a.serializeInt(this, "mNumPersonalVictories"), a.serializeInt(this, "mNumFlawlessVictories"), a.serializeInt(this, "mNumPersonalDefeats"), a.serializeInt(this, "mNumPersonalTrueDefeats"), a.serializeInt(this, "mNumGamesPlayed"), a.serializeInt(this, "mNumAchievementsUnlocked"), a.serializeInt(this, "mTotalAccumulatedScore"), a.serializeInt(this, "mTotalAccumulatedWealth"), a.serializeInt(this, "mTotalWealthSpent"), a.serializeInt(this, "mTotalHealthLost"), a.serializeInt(this, "mTotalKills"), a.serializeInt(this, "mTotalAirUnitsKilled"), a.serializeInt(this, "mTotalWavesPlayed"), b.numTowerClasses = kNumTowerClasses, a.serializeInt(b, "numTowerClasses");
                var c = b.numTowerClasses;
                for (var d = 0; d < c; d++)
                    a.serializeInt(this.mNumTowerClassKills, d), a.serializeInt(this.mNumTowerClassImpacts, d);
                b.numOfficialMaps = kNumOfficialMaps, a.serializeInt(b, "numOfficialMaps");
                var e = b.numOfficialMaps;
                for (var f = 0; f < e; f++)
                    a.serializeInt(this.mNumTimesMapPlayed, f);
                b.numAchievements = kNumAchievements, a.serializeInt(b, "numAchievements");
                var g = b.numAchievements;
                for (var h = 0; h < g; h++)
                    a.serializeBool(this.mbIsAchievementUnlocked, h);
                this.OutputToLog()
            }, UnlockAchievementFromCounters: function () {
                this.mTotalKills == 5e3 / kAchievementModifier ? this.UnlockAchievement(kAchievement.NoMercy) : this.mTotalKills == 25e3 / kAchievementModifier ? this.UnlockAchievement(kAchievement.TheyKeepComingIKeepGunning) : this.mTotalKills == 1e5 / kAchievementModifier ? this.UnlockAchievement(kAchievement.Statistic) : this.mTotalKills == 5e5 / kAchievementModifier ? this.UnlockAchievement(kAchievement.Berzerker) : this.mTotalKills == 1e6 / kAchievementModifier && this.UnlockAchievement(kAchievement.ActiveDenialSystem), this.mNumTowerClassImpacts[kTowerClass.Ice] == 5e4 / kAchievementModifier && this.UnlockAchievement(kAchievement.PreciousSnowflake), this.mNumTowerClassKills[kTowerClass.Laser] == 5e3 / kAchievementModifier && this.UnlockAchievement(kAchievement.SliceThemUp), this.mNumTowerClassKills[kTowerClass.Flame] == 5e3 / kAchievementModifier && this.UnlockAchievement(kAchievement.ILoveTheSmellOfNapalm), this.mNumTowerClassKills[kTowerClass.Mortar] == 15e3 / kAchievementModifier && this.UnlockAchievement(kAchievement.NuclearDawn), this.mNumTowerClassImpacts[kTowerClass.Goo] == 1e5 / kAchievementModifier && this.UnlockAchievement(kAchievement.JellyUp), this.mNumPersonalDefeats == 100 / kAchievementModifier ? this.UnlockAchievement(kAchievement.HardWorker) : this.mNumPersonalDefeats == 500 / kAchievementModifier ? this.UnlockAchievement(kAchievement.PatienceIsAVirtue) : this.mNumPersonalDefeats == 1e3 / kAchievementModifier && this.UnlockAchievement(kAchievement.Lemming), this.mNumPersonalVictories == 100 / kAchievementModifier ? this.UnlockAchievement(kAchievement.WarHero) : this.mNumPersonalVictories == 500 / kAchievementModifier && this.UnlockAchievement(kAchievement.CommanderInChief), this.mNumFlawlessVictories == 1 ? this.UnlockAchievement(kAchievement.Flawless) : this.mNumFlawlessVictories == 100 / kAchievementModifier && this.UnlockAchievement(kAchievement.ThisIsSparta), this.mTotalAirUnitsKilled == 100 / kAchievementModifier ? this.UnlockAchievement(kAchievement.AerialSurvivalist) : this.mTotalAirUnitsKilled == 500 / kAchievementModifier ? this.UnlockAchievement(kAchievement.AerialMadman) : this.mTotalAirUnitsKilled == 5e3 / kAchievementModifier && this.UnlockAchievement(kAchievement.Impenetrable)
            }, UnlockAchievement: function (b, c) {
                c == undefined && (c = !0);
                if (a.achievementIsInvalid(b))
                    return;
                this.mbIsAchievementUnlocked[b] || (this.mbIsAchievementUnlocked[b] = !0, c && this.mAchievementUnlockQueue.push(b), this.mNumAchievementsUnlocked++, this.mNumAchievementsUnlocked > kNumAchievementsForHardcore ? this.UnlockAchievement(kAchievement.HardCore) : this.mNumAchievementsUnlocked > kNumAchievementsForMedalOfHonor && this.UnlockAchievement(kAchievement.MedalOfHonor))
            }, Update: function (a) {
            }, SyncToServer: function () {
            }, SetNumImpactsByTowerClass: function (a, b) {
                this.mNumTowerClassImpacts[a] = b
            }, SetNumKillsByTowerClass: function (a, b) {
                this.mNumTowerClassKills[a] = b
            }, ClearAchievementQueue: function () {
                this.mAchievementUnlockQueue.clear()
            }, GetIsAchievementUnlocked: function (a) {
                return this.mbIsAchievementUnlocked[a]
            }, GetNumPersonalVictories: function () {
                return this.mNumPersonalVictories
            }, GetNumFlawlessVictories: function () {
                return this.mNumFlawlessVictories
            }, GetNumPersonalDefeats: function () {
                return this.mNumPersonalDefeats
            }, GetNumPersonalTrueDefeats: function () {
                return this.mNumPersonalTrueDefeats
            }, GetNumGamesPlayed: function () {
                return this.mNumGamesPlayed
            }, GetNumAchievementsUnlocked: function () {
                return this.mNumAchievementsUnlocked
            }, GetTotalAccumulatedScore: function () {
                return this.mTotalAccumulatedScore
            }, GetTotalAccumulatedWealth: function () {
                return this.mTotalAccumulatedWealth
            }, GetTotalWealthSpent: function () {
                return this.mTotalWealthSpent
            }, GetTotalHealthLost: function () {
                return this.mTotalHealthLost
            }, GetTotalKills: function () {
                return this.mTotalKills
            }, GetTotalAirUnitsKilled: function () {
                return this.mTotalAirUnitsKilled
            }, GetTotalWavesPlayed: function () {
                return this.mTotalWavesPlayed
            }, SetNumPersonalVictories: function (a) {
                this.mNumPersonalVictories = a, this.UnlockAchievementFromCounters()
            }, SetNumFlawlessVictories: function (a) {
                this.mNumFlawlessVictories = a, this.UnlockAchievementFromCounters()
            }, SetNumPersonalDefeats: function (a) {
                this.mNumPersonalDefeats = a, this.UnlockAchievementFromCounters()
            }, SetNumPersonalTrueDefeats: function (a) {
                this.mNumPersonalTrueDefeats = a, this.UnlockAchievementFromCounters()
            }, SetNumGamesPlayed: function (a) {
                this.mNumGamesPlayed = a, this.UnlockAchievementFromCounters(), this.UnlockAchievementFromCounters()
            }, SetNumAchievementsUnlocked: function (a) {
                this.mNumAchievementsUnlocked = a, this.UnlockAchievementFromCounters()
            }, SetTotalAccumulatedScore: function (a) {
                this.mTotalAccumulatedScore = a, this.UnlockAchievementFromCounters()
            }, SetTotalAccumulatedWealth: function (a) {
                this.mTotalAccumulatedWealth = a, this.UnlockAchievementFromCounters()
            }, SetTotalWealthSpent: function (a) {
                this.mTotalWealthSpent = a, this.UnlockAchievementFromCounters()
            }, SetTotalHealthLost: function (a) {
                this.mTotalHealthLost = a, this.UnlockAchievementFromCounters()
            }, SetTotalKills: function (a) {
                this.mTotalKills = a, this.UnlockAchievementFromCounters()
            }, SetTotalAirUnitsKilled: function (a) {
                this.mTotalAirUnitsKilled = a, this.UnlockAchievementFromCounters()
            }, SetTotalWavesPlayed: function (a) {
                this.mTotalWavesPlayed = a, this.UnlockAchievementFromCounters()
            }
        }, "AchievementManager"), b = null;
        window.jQuery.extend(a, {
            GetSingleton: function () {
                return b === null && (b = new a), b
            }, ClearSingleton: function () {
                b.destroy(), b = null
            }, achievementIsInvalid: function (a) {
                for (var b = 0; b < kNumInvalidAchievements; b++)
                    if (c[b] == a)
                        return !0;
                return !1
            }
        });
        var c = [kAchievement.ThatWasEasy, kAchievement.FieldPrivate, kAchievement.FieldSergeant, kAchievement.ThatWasEasyAgain, kAchievement.BaseSergeant, kAchievement.BaseOfficer, kAchievement.Cakewalk, kAchievement.DesertLieutenant, kAchievement.DesertCommander, kAchievement.NowWereTalking, kAchievement.SkyCaptain, kAchievement.SkyCommodore, kAchievement.MakeMyDay, kAchievement.IceColonel, kAchievement.IceGeneral, kAchievement.WelcomeToTheJungle, kAchievement.JungleRecon, kAchievement.GreenBeret, kAchievement.EasyShine, kAchievement.ThroughTheLookingGlass, kAchievement.MasterMiner, kAchievement.GoWithTheFlow, kAchievement.FireAway, kAchievement.FlameThrower, kAchievement.FullyUpgradePoisonTower];
        window.AchievementManager = a, Preloader.initialize("game/achievementmanager.js")
    }), Preloader.include([], function () {
        kReplayEventType = { Undefined: 0, BuyTower: 1, SellTower: 2, UpgradeTower: 3, Wave: 4 };
        var a = Class.extend({
            init: function (a, b) {
                this.type = a == undefined ? kReplayEventType.Undefined : a, this.playTimeTick = b == undefined ? 0 : b
            }, serialize: function (a) {
                console.assert(!1), console.warn("Replay events must have context.  This warning should never be hit.")
            }
        }, "ReplayEvent");
        a.serializeReplayEvent = function (a, e) {
            var f = {}, g;
            if (e.isLoading()) {
                e.serializeInt(f, "compressedReplayEventType");
                var h = f.compressedReplayEventType;
                switch (h) {
                    case kReplayEventType.Wave:
                        g = new d;
                        break;
                    case kReplayEventType.BuyTower:
                        g = new c;
                        break;
                    case kReplayEventType.SellTower:
                    case kReplayEventType.UpgradeTower:
                        g = new b;
                        break;
                    default:
                        console.warn("Serialization behavior for replay event '%d' is undefined.", h)
                }
                g.type = h, e.serializeInt(f, "playTimeTick"), g.playTimeTick = f.playTimeTick, SERIALIZE_OBJECT(e, g), a(g)
            } else {
                g = a, f.compressedReplayEventType = g.type, e.serializeInt(f, "compressedReplayEventType");
                var i = g.playTimeTick;
                e.serializeInt(f, "playTimeTick"), SERIALIZE_OBJECT(e, g)
            }
        };
        var b = a.extend({
            init: function (a, b, c, d) {
                this._super(a, b), this.tileGridIndex = c, this.playerIndex = d
            }, serialize: function (a) {
                a.serializeInt(this, "tileGridIndex"), a.serializeInt(this, "playerIndex")
            }
        }, "PlayerReplayEvent"), c = b.extend({
            init: function (a, b, c, d, e) {
                this._super(a, b, c, e), this.towerClassIndex = d
            }, serialize: function (a) {
                this._super(a), a.serializeInt(this, "towerClassIndex")
            }
        }, "BuyTowerReplayEvent"), d = a.extend({
            init: function (a, b, c, d, e) {
                this._super(a, b), this.health = c || 0, this.resources = d || 0, this.score = e || 0
            }, serialize: function (a) {
                a.serializeInt(this, "health"), a.serializeInt(this, "resources"), a.serializeInt(this, "score")
            }
        }, "WaveReplayEvent");
        window.ReplayEvent = a, window.PlayerReplayEvent = b, window.BuyTowerPlayerReplayEvent = c, window.WaveReplayEvent = d, Preloader.initialize("game/replayevent.js")
    }), kPrecisionErrorCorrection = .001, kPI = 3.141592654, kPISQR = 9.869604401, kTwoPI = 6.28, kHalfPI = 1.570796326, kPIOver180 = .017453293, k180OverPI = 57.29577951, M_PI = kPI, UINT_MAX = Math.pow(2, 32) - 1, INT_MAX = Math.pow(2, 31) - 1, FLT_MAX = Infinity, sinf = Math.sin, sinl = Math.sin, sinhf = Math.sin, sinhl = Math.sin, cosf = Math.cos, cosl = Math.cos, coshf = Math.cos, coshl = Math.cos, atan2l = Math.atan2, atan2f = Math.atan2, logf = Math.log, logl = Math.log, log10f = Math.log10, log10l = Math.log10, expf = Math.exp, expl = Math.exp, sqrtf = Math.sqrt, sqrtl = Math.sqrt, fabsf = Math.abs, fabsl = Math.abs, ceil = Math.ceil, MIN = Math.min, MAX = Math.max, SQUARE = function (a) {
        return a * a
    }, NOT_EQUAL = function (a, b) {
        return !IS_ZERO(a - b)
    }, NOT_ZERO = function (a) {
        return a < -kPrecisionErrorCorrection || a > kPrecisionErrorCorrection
    }, IS_ZERO = function (a) {
        return a >= -kPrecisionErrorCorrection && a <= kPrecisionErrorCorrection
    }, IS_GREATER_THAN = function (a, b) {
        return a > b - kPrecisionErrorCorrection
    }, IS_LESS_THAN = function (a, b) {
        return a < b + kPrecisionErrorCorrection
    }, IS_EQUAL = function (a, b) {
        return IS_ZERO(a - b)
    }, RADIANS_TO_DEGREES = function (a) {
        return a * k180OverPI
    }, DEGREES_TO_RADIANS = function (a) {
        return a * kPIOver180
    }, IS_ZERO = function (a) {
        return a >= -kPrecisionErrorCorrection && a <= kPrecisionErrorCorrection
    }, SQRT = Math.sqrt, COS = Math.cos, SIN = Math.sin, ACOS = Math.acos, normalizeAngle = function (a, b, c) {
        while (a >= c)
            a -= c;
        while (a < b)
            a += c;
        return a
    }, Math.FtoI = function (a) {
        return parseInt(a)
    }, Math.ArcTangent2 = function (a, b) {
        var c = atan2f(a, b);
        return c
    }, Math.FastSine = function (a) {
        return a != 0 ? sinf(a) : 0
    }, Math.FastCosine = function (a) {
        return a != 0 ? cosf(a) : 1
    }, Math.RandomFloat = Math.random, Math.RandomFloatWithMax = function (a) {
        return Math.random() * a
    }, Math.RandomFloatWithMinMax = function (a, b) {
        return Math.random() * (b - a) + a
    }, Math.RandomInt = function () {
        return Math.floor(Math.random() * INT_MAX)
    }, Math.RandomIntWithMax = function (a) {
        return Math.floor(Math.random() * a)
    }, Math.RandomIntWithMinMax = function (a, b) {
        return Math.floor(Math.random() * (b - a) + a)
    }, Math.Floor2 = Math.floor, Preloader.initialize("utilities/mathutilities.js"), Preloader.include(["utilities/mathutilities.js"], function () {
        var a = Class.extend({
            init: function (a, b) {
                this.x = a || 0, this.y = b || 0
            }, copy: function () {
                return new a(this.x, this.y)
            }, IsZero: function () {
                return IS_ZERO(this.x) && IS_ZERO(this.y)
            }, AddToX: function (a) {
                this.x += a
            }, AddToY: function (a) {
                this.y += a
            }, normalize: function () {
                var a = this.computeLength();
                if (a != 0) {
                    var b = 1 / a;
                    this.x *= b, this.y *= b, this.x < -1 ? this.x = -1 : this.x > 1 && (this.x = 1), this.y < -1 ? this.y = -1 : this.y > 1 && (this.y = 1)
                } else
                    this.x = 0, this.y = 0;
                return a
            }, computeLength: function () {
                return SQRT(SQUARE(this.x) + SQUARE(this.y))
            }, computeAngle: function (a) {
                return ACOS(this.dotProduct(a))
            }, dotProduct: function (a) {
                return this.x * a.x + this.y * a.y
            }, isCounterClockwiseToVector: function (a) {
                var b = this.x * a.y - a.x * this.y;
                return b > kPrecisionErrorCorrection
            }, clampLength: function (a, b) {
                var c = this.normalize();
                c > b && (c = b), c < a && (c = a), this.scaleBy(c)
            }, scaleBy: function (a) {
                this.x *= a, this.y *= a
            }, GetX: function () {
                return this.x
            }, GetY: function () {
                return this.y
            }, SubtractFromX: function (a) {
                this.x -= a
            }, SubtractFromY: function (a) {
                this.y -= a
            }, SetX: function (a) {
                this.x = a
            }, SetY: function (a) {
                this.y = a
            }, Set: function (a, b) {
                this.x = a, this.y = b
            }, serialize: function (a) {
                a.serializeDouble(this, "x"), a.serializeDouble(this, "y")
            }
        }, "Vector2"), b = new a(0, 1);
        a.orientationAxis = function () {
            return b
        };
        var c = Class.extend({
            mX: {
                get: function () {
                    return this[0]
                }, set: function (a) {
                    this[0] = a
                }
            }, mY: {
                get: function () {
                    return this[1]
                }, set: function (a) {
                    this[1] = a
                }
            }, mZ: {
                get: function () {
                    return this[2]
                }, set: function (a) {
                    this[2] = a
                }
            }, init: function (a, b, c) {
                this[0] = a || 0, this[1] = b || 0, this[2] = c || 0
            }, copy: function () {
                return new c(this[0], this[1], this[2])
            }, crossProduct: function (a) {
                return new Vector3f(this.mY * a.GetZ() - this.mZ * a.GetY(), this.mZ * a.GetX() - this.mX * a.GetZ(), this.mX * a.GetY() - this.mY * a.GetX())
            }, dotProduct: function (a) {
                return this.mX * a.mX + this.mY * a.mY + this.mZ * a.mZ
            }, Add: function (a, b, c) {
                this.mX += a, this.mY += b, this.mZ += c
            }, AddWithVector: function (a) {
                this.mX += a.GetX(), this.mY += a.GetY(), this.mZ += a.GetZ()
            }, Subtract: function (a, b, c) {
                this.mX -= a, this.mY -= b, this.mZ -= c
            }, SubtractWithVector: function (a) {
                this.mX -= a.GetX(), this.mY -= a.GetY(), this.mZ -= a.GetZ()
            }, negate: function () {
                return new Vector3f(-this.mX, -this.mY, -this.mZ)
            }, add: function (a) {
                return new Vector3f(this.mX + a.GetX(), this.mY + a.GetY(), this.mZ + a.GetZ())
            }, sub: function (a) {
                return new Vector3f(this.mX - a.GetX(), this.mY - a.GetY(), this.mZ - a.GetZ())
            }, mul: function (a) {
                return new Vector3f(a * this[0], a * this[1], a * this[2])
            }, div: function (a) {
                return new Vector3f(this.mX / a, this.mY / a, this.mZ / a)
            }, divByVector: function (a) {
                return new Vector3f(this.mX / a.mX, this.mY / a.mY, this.mZ / a.mZ)
            }, addInternal: function (a) {
                return this[0] += a[0], this[1] += a[1], this[2] += a[2], this
            }, subInternal: function (a) {
                return this.mX -= a.mX, this.mY -= a.mY, this.mZ -= a.mZ, this
            }, mulInternal: function (a) {
                return this[0] *= a, this[1] *= a, this[2] *= a, this
            }, divInternal: function (a) {
                return this.mX /= a, this.mY /= a, this.mZ /= a, this
            }, divInternalByVector: function (a) {
                return this.mX /= a.mX, this.mY /= a.mY, this.mZ /= a.mZ, this
            }, equals: function (a) {
                return this.mX == a.mX && this.mY == a.mY && this.mZ == a.mZ
            }, notEquals: function (a) {
                return this.mX != a.mX || this.mY != a.mY || this.mZ != a.mZ
            }, IsZero: function () {
                return this[0] == 0 && this[1] == 0 && this[2] == 0
            }, SetX: function (a) {
                this.mX = a
            }, SetY: function (a) {
                this.mY = a
            }, SetZ: function (a) {
                this.mZ = a
            }, SetWithVector: function (a) {
                return this[0] = a[0], this[1] = a[1], this[2] = a[2], this
            }, Set: function (a, b, c) {
                return this[0] = a, this[1] = b, this[2] = c, this
            }, GetX: function () {
                return this.mX
            }, GetY: function () {
                return this.mY
            }, GetZ: function () {
                return this.mZ
            }, serialize: function (a) {
                a.serializeDouble(this, "mX"), a.serializeDouble(this, "mY"), a.serializeDouble(this, "mZ")
            }
        }, "Vector3");
        window.Vector2 = window.Vector2f = a, window.Vector3 = window.Vector3f = c, Preloader.initialize("utilities/vector.js")
    });
    var intRE = /-?[0-9]+/g, floatRE = /[0-9]+\.?[0-9]*/g, Scanner = Class.extend({
        init: function (a) {
            this.string = a, this.substring = this.string, this.skipChars = /^[ \t\r\n]/, this.scanPos = 0
        }, isAtEnd: function () {
            var a = this.scanPos;
            this._skipLeadingKrud();
            var b = this.scanPos >= this.string.length;
            return this.scanPos = a, b
        }, scanInt: function (a) {
            this._skipLeadingKrud();
            if (this.scanPos >= this.string.length)
                return !1;
            intRE.lastIndex = this.scanPos;
            var b = intRE.exec(this.string);
            return b ? (this.scanPos = b.index + b[0].length, a(parseInt(b[0])), !0) : !1
        }, scanFloat: function (a) {
            this._skipLeadingKrud();
            if (this.scanPos >= this.string.length)
                return !1;
            floatRE.lastIndex = this.scanPos;
            var b = floatRE.exec(this.string);
            return b ? (this.scanPos = b.index + b[0].length, a(parseFloat(b[0])), !0) : !1
        }, scanUpToCharactersFromSet: function (a, b, c) {
            this._skipLeadingKrud();
            var d = !1;
            if (this.scanPos >= this.string.length)
                return b(null), c && c(d), !1;
            a.lastIndex = this.scanPos;
            var e = a.exec(this.string), f, g;
            if (e) {
                f = this.string.substring(this.scanPos, e.index);
                if (c) {
                    var h = f.search(/\\n/);
                    h != -1 && (f = this.string.substring(this.scanPos, this.scanPos + h), g = this.scanPos + h + 2, d = !0)
                }
                this.scanPos = g || e.index
            } else
                f = this.string.substring(this.scanPos), this.scanPos = this.string.length;
            return b(f), c && c(d), !0
        }, _skipLeadingKrud: function () {
            while (this.scanPos < this.string.length) {
                if (this.string.charAt(this.scanPos).match(this.skipChars) == null)
                    break;
                this.scanPos++
            }
        }
    });
    Scanner.scannerWithString = function (a) {
        return new Scanner(a)
    }, this.Scanner = Scanner, window.NextStep = window.NextStep || {}, window.NextStep.Scanner = Scanner, Preloader.initialize("utilities/nextstep/scanner.js"), Preloader.include([], function () {
        var a = Class.extend({
            init: function (a) {
                this.currentAnimationNameHash = null, this.currentAnimationFrameList = null, this.currentAnimationFrame = null, this.currentAnimation = null, this.currentFrame = -1, this.sprite = a
            }, destroy: function () {
            }, doesAnimationExist: function (a) {
                var b = this.sprite.animationHash[a];
                return b != undefined
            }, getAnimation: function (a) {
                var b = a;
                if (this.currentAnimationNameHash != b) {
                    var c = this.sprite.animationHash[b];
                    return console.assert(c !== null, "Animation with name '" + a + "' is not defined by sprite file '" + this.sprite.spriteFilename + "'."), c
                }
                return this.currentAnimation
            }, getFrameCount: function (a) {
                var b = a;
                return this.currentAnimationNameHash != b ? this.sprite.animationHash[b].frameList.length : this.currentAnimationFrameList.length
            }, render: function (a, b, c, d, e, f, g, h, i, j) {
                var k = this.updateAnimation(a, b, h);
                i instanceof Function && i(k), this.currentAnimationFrameList !== null && this.sprite.render(this.currentAnimationFrame, c, d, e, f, g, j)
            }, updateAnimation: function (a, b, c) {
                var d = !1, e = !1, f = a;
                return this.currentAnimationNameHash != f ? (this.currentAnimationNameHash = f, this.currentAnimation = this.sprite.animationHash[f], this.currentAnimation !== null ? (this.currentAnimationFrameList = this.currentAnimation.frameList, d = !0) : this.currentAnimationFrameList = null) : b != this.currentFrame && this.currentAnimationFrameList !== null && (d = !0), d && (c ? b %= this.currentAnimationFrameList.length : b >= this.currentAnimationFrameList.length && (b = this.currentAnimationFrameList.length - 1, e = !0), this.currentFrame = b, this.currentAnimationFrame = this.currentAnimationFrameList[b]), this.currentAnimationFrameList === null && (e = !0), e
            }, getAxisAlignedBoundingBox: function (a, b, c, d, e, f, g, h, i, j) {
                this.updateAnimation(c, d, i), console.assert(this.currentAnimationFrameList !== null, "no current animation frame list"), this.sprite.getAxisAlignedBoundingBox(a, b, this.currentAnimationFrame, e, f, g, h, j)
            }, getBoundingBox: function (a, b, c, d, e, f, g, h, i) {
                this.updateAnimation(b, c, h), console.assert(this.currentAnimationFrameList !== null, "no current animation frame list"), this.sprite.getBoundingBox(a, this.currentAnimationFrame, d, e, f, g, i)
            }
        }, "AnimationController");
        this.AnimationController = a, Preloader.initialize("graphics/animationcontroller.js")
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function () {
                this.sprite = null
            }, destroy: function () {
                this.sprite.destroy()
            }
        });
        this.EntityClass = a, Preloader.initialize("game/entities/entityclass.js")
    }), Preloader.include(["game/entities/entityclass.js"], function () {
        kEnemyType = { Ground: 0, Air: 1 }, kCommonDeathTypeAnimationName = "common", kExplosiveImpactDeathTypeAnimationName = "explosive", kElectricalShockDeathTypeAnimationName = "shock";
        var a = Class.extend({
            init: function () {
                this.effectType = 0
            }
        }, "Immunity"), b = EntityClass.extend({
            init: function (c, d) {
                this._super(c), this.speed = 1, this.score = 0, this.resources = 0, this.damage = 1, this.deathAnimationDelay = 0, this.maxHealth = 100, this.healthBarOffset = 0, this.type = kEnemyType.Ground, this.renderFirstUponDeath = !1, this.mirrorHorizontal = !0, this.deathParticleSystemExClass = null, this.movementParticleSystemExClass = null, this.isFollower = !1, this.frontThreshold = 0, this.rearThreshold = 0, this.renderMoveParticlesLast = !0, this.asymmetricRotationAnimations = c == "unit_train.enemy", this.immunityList = [];
                var e = Preloader.dependOn(this);
                Preloader.loadText(c, function (c) {
                    var f = $(c), g = f, h = null, i = null, j = null, k = f, l = xmlAttr(this, k);
                    h = xmlAttr(null, k)("sprite", h, parseString), i = xmlAttr(null, k)("deathParticleSystemEx", i, parseString), j = xmlAttr(null, k)("movementParticleSystemEx", j, parseString), xmlBoolAttr(l, "renderMoveExParticlesLast", "renderMoveParticlesLast"), l("speed", "speed", parseFloat), l("health", "maxHealth", parseFloat), l("healthBarOffset", "healthBarOffset", parseFloat), l("deathAnimationDelay", "deathAnimationDelay", parseFloat), l("frontThreshold", "frontThreshold", parseFloat), l("rearThreshold", "rearThreshold", parseFloat), l("damage", "damage", parseInt), l("score", "score", parseInt), l("resources", "resources", parseInt);
                    var m = new SoundEffectDefinition("deathSound", k), n = new SoundEffectDefinition("movementSound", k);
                    xmlBoolAttr(l, "isFollower", "isFollower", "yes"), xmlBoolAttr(l, "renderFirstUponDeath", "renderFirstUponDeath", "yes"), l("type", "type", parseEnum(kEnemyType, kEnemyType.Ground)), l("mirrorHorizontal", "mirrorHorizontal", function (a) {
                        return a != "no"
                    }), this.healthBarOffset *= WORLD_UNITS_SCALAR, this.deathSoundEffect = m.fileName != null ? new SoundEffect(m) : null, this.movementSoundEffect = n.fileName != null ? new SoundEffect(n) : null;
                    for (var o = g.children().first(); o.length > 0; o = o.next())
                        if (o[0].localName == "Immunities".toLowerCase())
                            for (var p = o.children().first(); p.length > 0; p = p.next()) {
                                var q = new a;
                                xmlAttr(q, p)("immuneToEffect", "effectType", parseEnum(kEffectType, kEffectType.None)), this.immunityList.push(q)
                            }
                    this.sprite = Preloader.dependOn(this, new Sprite("Enemies", h)), Preloader.dependOn(bindSelf(function () {
                        this.numDeathAnimationVariants = new Array(kDamageType.Max);
                        for (var a = 0; a < kDamageType.Max; a++) {
                            this.numDeathAnimationVariants[a] = 0;
                            var c = 1, d = !0;
                            while (d) {
                                var e = sprintf("death_%s%02d_000", b.GetDeathTypeAnimationName(a), c);
                                d = this.sprite.doesContainAnimation(e), d && (this.numDeathAnimationVariants[a]++, c++)
                            }
                        }
                    }, this), this.sprite), i != null && (this.deathParticleSystemExClass = this.SetupParticleSystem(i, d)), j != null && (this.movementParticleSystemExClass = this.SetupParticleSystem(j, d)), e()
                }, this)
            }, destroy: function () {
                this.movementSoundEffect = null, this.deathSoundEffect = null, this.deathParticleSystemExClass = null, this.movementParticleSystemExClass = null
            }, SetupParticleSystem: function (a, b) {
                var c = null;
                for (var d = 0; d < b.length; ++d) {
                    c = b[d];
                    if (c.GetFilename() == a)
                        return c
                }
                var e = null;
                return e = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", a, "fx"), e != null && (c = Preloader.dependOn(this, new ParticleSystemExClass), c.Load(e), c.selfdestruct = !0, console.assert(c != null, "Error loading particle system '%s'.", e)), c
            }, GetNumDeathAnimationVariants: function (a) {
                return console.assert(a < kDamageType.Max, "Undefined enemy death type."), this.numDeathAnimationVariants[a]
            }
        }, "EnemyClass");
        b.GetDeathTypeAnimationName = function (a) {
            switch (a) {
                case kDamageType.Common:
                    return kCommonDeathTypeAnimationName;
                case kDamageType.ExplosiveImpact:
                    return kExplosiveImpactDeathTypeAnimationName;
                case kDamageType.ElectricalShock:
                    return kElectricalShockDeathTypeAnimationName;
                default:
                    console.warn("Undefined death type.")
            }
            return null
        }, window.EnemyClass = b, Preloader.initialize("game/entities/enemyclass.js")
    }), RANDOM_FLOAT_IN_RANGE = function (a, b, c) {
        return (c || Math.random)() * (b - a) + a
    }, RANDOM_INT_IN_RANGE = function (a, b, c) {
        return b - a != 0 ? Math.floor((c || Math.random)() * (b - a) + a) : a
    }, Preloader.initialize("utilities/randomutilities.js");
    var kDirection = {};
    kDirection.None = 0, kDirection.North = 1, kDirection.East = 2, kDirection.South = 4, kDirection.West = 8, kDirection.NorthEast = 16, kDirection.SouthEast = 32, kDirection.SouthWest = 64, kDirection.NorthWest = 128, kDirection.Lateral = kDirection.North | kDirection.East | kDirection.South | kDirection.West, kDirection.Diagonal = kDirection.NorthEast | kDirection.SouthEast | kDirection.SouthWest | kDirection.NorthWest, this.kDirection = kDirection, Preloader.initialize("utilities/directionutilities.js"), Preloader.include(["utilities/defines.js", "game/entities/entityclass.js"], function () {
        var a = this.kDamageType = { Common: 0, ExplosiveImpact: 1, ElectricalShock: 2, Max: 3 }, b = this.kProjectileType = { Bullet: 0, Beam: 1, Bolt: 2, Cloud: 3, Parabolic: 4, Spray: 5, Plasma: 6 }, c = this.kEffectType = { None: 0, Slow: 1, Flash: 2, Burn: 4, Poison: 8 }, d = Class.extend({
            init: function () {
                this.projectileClass = null, this.timeRemaining = 0, this.opacity = 0, this.towerTechLevelIndex = -1, this.projectileClassIndex = -1
            }, serialize: function (a) {
                SERIALIZE(a, this, "projectileClassIndex"), a.serializeDouble(this, "timeRemaining"), a.serializeDouble(this, "opacity"), SERIALIZE(a, this, "towerTechLevelIndex")
            }
        }), e = Class.extend({
            init: function () {
                this.effectIntensity = 0, this.effectColor = new Color(0, 0, 0, 0)
            }
        }), f = EntityClass.extend({
            init: function (d, f, g) {
                this._super(d), this.name = null, this.particleSystemExClass = null, this.impactParticleSystemExClass = null, this.damageType = a.Common, this.dependencies = 1, this.isLoaded = !1;
                var h = this, i = function () {
                    h.dependencies--, h.dependencies === 0 && (h.isLoaded = !0, h.onload && h.onload(h))
                };
                Preloader.loadText(d, function (j) {
                    this.type = b.Bullet, this.displayTime = -1, this.impactDelay = 0, this.particleSystem = null, this.effectType = c.None, this.effectDuration = Infinity, this.minRotationSpeed = 0, this.maxRotationSpeed = 0, this.techLevels = null, this.timeToImpact = 0, this.acceleration = 0, this.parabolicScale = 0, this.parabolicHeight = 0, this.maxSpeed = 100;
                    var k = window.jQuery(j), l = k;
                    this.name = l[0].localName;
                    var m = function (a) {
                        return l.attr(a) || null
                    }, n = m("image"), o = m("particleSystem"), p = m("particleSystemEx"), q = m("sprite"), r = m("impactParticleSystemEx"), s = new SoundEffectDefinition("launchSound", l), t = new SoundEffectDefinition("impactSound", l), u = m("type");
                    for (var v in b)
                        if (v.toLowerCase() == u) {
                            this.type = b[v];
                            break
                        }
                    this.damageType = Enum.findValue(a, m("damageType"), !0, this.damageType), this.effectType = Enum.findValue(c, m("effect"), !0, c.None);
                    var w = function (a) {
                        h[a] = parseFloat(m(a)) || h[a]
                    }, x = function (a) {
                        for (var b in a)
                            w(a[b])
                    };
                    x(["effectDuration", "minRotationSpeed", "maxRotationSpeed", "parabolicScale", "parabolicHeight", "acceleration", "timeToImpact", "displayTime", "impactDelay"]), this.maxSpeed = parseFloat(m("speed")) || this.maxSpeed, this.maxSpeed *= WORLD_UNITS_SCALAR, this.parabolicHeight *= WORLD_UNITS_SCALAR, this.impactSoundEffect = t.fileName != null ? new SoundEffect(t) : null, this.launchSoundEffect = s.fileName != null ? new SoundEffect(s) : null;
                    for (var y = l.children().first(); y.length > 0; y = y.next())
                        if (y[0].localName == "techlevels") {
                            this.techLevels = [];
                            for (var z = y.children().first(); z.length > 0; z = z.next()) {
                                var A = new Color;
                                A.r = 255, A.g = 255, A.b = 255, A.a = 255;
                                var B = new e;
                                B.effectIntensity = 1, B.effectColor = A, B.effectIntensity = parseFloat(z.attr("effectIntensity") || B.effectIntensity);
                                var C = parseInt(z.attr("effectColor"), 16);
                                if (C) {
                                    var D = new Color;
                                    D.r = C >> 24 & 255, D.g = C >> 16 & 255, D.b = C >> 8 & 255, D.a = C & 255, B.effectColor = D
                                }
                                (B.effectIntensity <= 0 || B.effectIntensity >= 1) && console.warn("Effect intensity '" + B.effectIntensity + "' for projectile class '" + d + "' not within the expected range [0.0, 1.0]."), this.techLevels.push(B)
                            }
                        }
                    var E, F;
                    if (o !== null)
                        for (E = 0, F = f.length; E < F; ++E) {
                            var G = f[E];
                            if (G.name == o) {
                                this.particleSystem = G;
                                break
                            }
                        }
                    var H, I;
                    if (p !== null) {
                        for (E = 0; E < g.length; ++E) {
                            I = g[E];
                            if (I.GetFilename() == p) {
                                this.particleSystemExClass = I;
                                break
                            }
                            I = null
                        }
                        this.particleSystemExClass === null && (H = null, H = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", p, "fx"), H !== null && (this.particleSystemExClass = new ParticleSystemExClass, this.particleSystemExClass.Load(H), this.particleSystemExClass.selfdestruct = !0))
                    }
                    if (r !== null) {
                        for (E = 0; E < g.length; ++E) {
                            I = g[E];
                            if (I.GetFilename() == r) {
                                this.impactParticleSystemExClass = I;
                                break
                            }
                            I = null
                        }
                        this.impactParticleSystemExClass === null && (H = null, H = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", r, "fx"), H !== null && (this.impactParticleSystemExClass = new ParticleSystemExClass, this.impactParticleSystemExClass.Load(H)))
                    }
                    if (q !== null) {
                        this.dependencies++, this.sprite = new Sprite("Projectiles", q);
                        var J = this.sprite;
                        this.sprite.onload = function () {
                            delete J.onload, i()
                        }
                    } else
                        n !== null && (this.dependencies++, this.textureID = Sprite.initTextureFromFile("Projectiles", n, i));
                    i()
                }, this)
            }, destroy: function () {
                this.particleSystemExClass && this.particleSystemExClass.selfdestruct && (this.particleSystemExClass.destroy(), this.particleSystemExClass = null), this.impactParticleSystemExClass && this.impactParticleSystemExClass.selfdestruct && (this.impactParticleSystemExClass.destroy(), this.impactParticleSystemExClass = null), this.textureID != undefined && Sprite.destroyTexture(this.textureID)
            }, getProjectileTechLevel: function (a) {
                return this.techLevels[a]
            }, getDamageType: function () {
                return this.damageType
            }
        });
        this.Effect = d, this.ProjectileClass = f, Preloader.initialize("game/entities/projectileclass.js")
    }), Preloader.include([], function () {
        var a = Class.extend({});
        a.dictionaryWithObjectsAndKeys = function () {
            var a = {};
            for (var b = arguments.length - 3; b >= 0; b -= 2)
                a[arguments[b + 1]] = arguments[b];
            return a
        };
        var b = window.NextStep = window.NextStep || {};
        b.Dictionary = a, Preloader.initialize("utilities/nextstep/dictionary.js")
    }), Preloader.loadManyScripts(["utilities/nextstep/scanner.js", "utilities/nextstep/dictionary.js", "utilities/nextstep/userdefaults.js"], function () {
        var a = window.NextStep = window.NextStep || {};
        a.Ordered = { Descending: -1, Same: 0, Ascending: 1 }, this.NextStep = a, Preloader.initialize("utilities/nextstep/nextstep.js"
        )
    }), Preloader.include(["utilities/defines.js", "utilities/nextstep/nextstep.js", "graphics/animationcontroller.js"], function () {
        var a = Class.extend({
            init: function (b, c) {
                this.x = -9999, this.y = -9999, this.animationController = null, this.entityClass = b, this.map = c, this.tileGridIndex = -1, this.renderFirst = !1, this.blockPathing = !0, this.blockBuilding = !0, this.uniqueID = a.generateUniqueID(), this.entityClass != undefined && (this.animationController = new AnimationController(this.entityClass.sprite))
            }, destroy: function () {
                this.animationController !== null && this.animationController.destroy()
            }, sortComparison: function (a) {
                var b = a, c = b.y, d = b.x;
                if (b.isOverlay()) {
                    var e = b;
                    c = e.anchorY, d = e.anchorX
                }
                var f = this.x, g = this.y;
                if (this.isOverlay()) {
                    var h = this;
                    f = h.anchorX, g = h.anchorY
                }
                if (g > c)
                    return NextStep.Ordered.Descending;
                if (g < c)
                    return NextStep.Ordered.Ascending;
                if (g == c) {
                    if (this.renderFirst && b.renderFirst)
                        return f > d ? NextStep.Ordered.Descending : f < d ? NextStep.Ordered.Ascending : NextStep.Ordered.Same;
                    if (this.renderFirst)
                        return NextStep.Ordered.Ascending;
                    if (b.renderFirst)
                        return NextStep.Ordered.Descending;
                    if (f > d)
                        return NextStep.Ordered.Descending;
                    if (f < d)
                        return NextStep.Ordered.Ascending
                }
                return NextStep.Ordered.Same
            }, isVisible: function () {
                var a = this.map.gameHudForm.camera, b = this.entityClass.sprite;
                return this.x + b.boundsRight < a.left || this.x + b.boundsLeft > a.right || this.y + b.boundsTop > a.bottom || this.y + b.boundsBottom < a.top ? !1 : !0
            }, render: function (a) {
            }, serialize: function (a) {
                a.serializeDouble(this, "x"), a.serializeDouble(this, "y"), SERIALIZE(a, this, "tileGridIndex"), SERIALIZE(a, this, "renderFirst"), SERIALIZE(a, this, "uniqueID")
            }, update: function (a) {
                return !1
            }, isEnemy: function () {
                return !1
            }, isTower: function () {
                return !1
            }, isOverlay: function () {
                return !1
            }
        });
        window.jQuery.extend(a, {
            blockedTile: function () {
                return b
            }, buildOnlyTile: function () {
                return c.blockPathing = !0, c.blockBuilding = !1, c
            }, pathOnlyTile: function () {
                return d.blockPathing = !1, d.blockBuilding = !0, d
            }, generateUniqueID: function () {
                return e++, e
            }, getLastUniqueID: function () {
                return e
            }, setLastUniqueID: function (a) {
                e = a
            }, sortComparison: function (a, b) {
                var c = a.sortComparison(b);
                return -c
            }
        });
        var b = new a, c = new a, d = new a, e = 0;
        this.Entity = a, Preloader.initialize("game/entities/entity.js")
    }), Preloader.include(["game/entities/entity.js", "utilities/point.js"], function () {
        var a = { Open: 0, Closed: 1, Unvisited: 2 }, b = Class.extend({
            init: function (a) {
                this.m_nSize = 0, this.m_data = new Array(a)
            }, count: function () {
                return this.m_nSize
            }, removeAll: function () {
                this.m_nSize = 0
            }, insert: function (a) {
                console.assert(this.m_nSize < this.m_data.length), this.m_data[this.m_nSize] = a, this.reformatHeapUp(this.m_nSize++)
            }, removeMinimumValue: function () {
                console.assert(this.m_nSize > 0);
                var a = this.m_data[0];
                return this.m_data[0] = this.m_data[--this.m_nSize], this.reformatHeapDown(0), a
            }, update: function (a, b) {
                if (this.m_nSize == 1)
                    return;
                for (var c = 0; c < this.m_nSize; c++)
                    if (this.m_data[c] == a) {
                        var d = a.fitnessCost;
                        b != d && (a.fitnessCost = b, b < d ? this.reformatHeapUp(c) : this.reformatHeapDown(c));
                        return
                    }
            }, reformatHeapUp: function (a) {
                for (var b = Math.floor((a - 1) / 2); b >= 0 && this.m_data[b].fitnessCost > this.m_data[a].fitnessCost; b = Math.floor((a - 1) / 2)) {
                    var c = this.m_data[a];
                    this.m_data[a] = this.m_data[b], this.m_data[b] = c, a = b
                }
            }, reformatHeapDown: function (a) {
                var b = 2 * a + 1;
                if (b < this.m_nSize) {
                    var c = b + 1;
                    c < this.m_nSize && this.m_data[b].fitnessCost > this.m_data[c].fitnessCost && (b = c);
                    if (this.m_data[b].fitnessCost < this.m_data[a].fitnessCost) {
                        var d = this.m_data[a];
                        this.m_data[a] = this.m_data[b], this.m_data[b] = d, this.reformatHeapDown(b)
                    }
                }
            }
        }, "PFBinaryHeap");
        Object.defineProperty(b.prototype, "length", {
            get: function () {
                return this.m_nSize
            }
        });
        var c = Class.extend({
            init: function () {
                this.category = 0, this.connectionNode = null, this.fitnessCost = 0, this.tilePosX = 0, this.tilePosY = 0, this.uniqueID = 0, this.goalCost = 0
            }
        }, "PathFinderNode"), d = Class.extend({
            init: function (d, e) {
                this.tilesAcross = d, this.tilesDown = e, this.pathFinderNodeArray = new Array(this.tilesAcross * this.tilesDown), console.assert(this.pathFinderNodeArray !== null, "Not enough memory to allocate the path finder node grid.");
                var f, g;
                for (g = 0; g < this.tilesDown; g++)
                    for (f = 0; f < this.tilesAcross; f++) {
                        var h = this.getUniqueIDforTilePos(f, g), i = this.pathFinderNodeArray[h] = new c;
                        console.assert(i !== null, "Path finder node not initialized."), i.tilePosX = f, i.tilePosY = g, i.uniqueID = h, i.connectionNode = null, i.goalCost = 0, i.fitnessCost = 0, i.category = a.Unvisited
                    }
                this.openList = new b(this.tilesAcross * this.tilesDown)
            }, destroy: function () {
                console.assert(this.pathFinderNodeArraydeArray !== null, "Path finder node array cannot be freed; it was never allocated."), delete this.pathFinderNodeArray, delete this.openList
            }, findClosestGoalTileGridIndex: function (a, b, c, d, e) {
                var f, g = INT_MAX, h, i;
                for (var j = 0; j < d.length; ++j) {
                    var k = d[j], l = k;
                    c.getTilePos(l, function (a, b) {
                        h = a, i = b
                    }), f = Math.sqrt(SQUARE(h - a) + SQUARE(i - b)), f < g && (g = f, e(h, i))
                }
            }, findPath: function (b, d, e, f, g, h, i) {
                var j = !1, k = this.getUniqueIDforTilePos(b, d), l, m;
                this.findClosestGoalTileGridIndex(b, d, g, i, function (a, b) {
                    l = a, m = b
                });
                if (!this.pathFinderNodeArray[k]) {
                    var n = this.pathFinderNodeArray[k] = new c;
                    n.tileX = b, n.tileY = d, n.uniqueID = k, n.category = a.Unvisited
                }
                var o = this.pathFinderNodeArray[k];
                o.category = a.Open, o.fitnessCost = Math.sqrt(SQUARE(l - b) + SQUARE(m - d)), this.openList.insert(o);
                var p = this.tilesAcross * this.tilesDown;
                while (this.openList.length > 0) {
                    o = this.openList.removeMinimumValue();
                    for (var q = 0; q < i.length; ++q) {
                        var r = i[q];
                        if (o.uniqueID == r) {
                            j = !0;
                            break
                        }
                    }
                    if (j)
                        break;
                    var s, t;
                    for (t = 0; t < 4; t++) {
                        var u = o.tilePosX, v = o.tilePosY, w = -1;
                        switch (t) {
                            case 0:
                                if (u + 1 == this.tilesAcross)
                                    continue;
                                w = this.getUniqueIDforTilePos(u + 1, v);
                                break;
                            case 1:
                                if (u == 0)
                                    continue;
                                w = this.getUniqueIDforTilePos(u - 1, v);
                                break;
                            case 2:
                                if (v == 0)
                                    continue;
                                w = this.getUniqueIDforTilePos(u, v - 1);
                                break;
                            case 3:
                                if (v + 1 == this.tilesDown)
                                    continue;
                                w = this.getUniqueIDforTilePos(u, v + 1);
                                break;
                            default:
                                console.assert(!1), console.warn("Invalid adjacent node index.")
                        }
                        if (w < 0 || w >= this.tilesAcross * this.tilesDown)
                            continue;
                        if (!h && e[w] !== null && e[w].blockPathing)
                            continue;
                        s = this.pathFinderNodeArray[w];
                        var x = o.goalCost + 1;
                        if (s.category == a.Closed) {
                            if (s.goalCost <= x)
                                continue
                        } else if (s.category == a.Open && s.goalCost <= x)
                            continue;
                        this.findClosestGoalTileGridIndex(s.tilePosX, s.tilePosY, g, i, function (a, b) {
                            l = a, m = b
                        });
                        var y;
                        y = Math.sqrt(SQUARE(l - s.tilePosX) + SQUARE(m - s.tilePosY)), s.connectionNode = o, s.goalCost = x;
                        var z = x + y;
                        s.category != a.Open ? (s.fitnessCost = z, s.category = a.Open, this.openList.insert(s)) : NOT_EQUAL(s.fitnessCost, z) && this.openList.update(s, z)
                    }
                    o.category = a.Closed
                }
                this.openList.removeAll();
                if (j) {
                    var A = !1;
                    do {
                        var B = new Point;
                        B.x = o.tilePosX, B.y = o.tilePosY, f.push(B), A = o.uniqueID == k || o.connectionNode === null, o = o.connectionNode
                    } while (!A)
                } else
                    for (var q = 0; q < p; q++)
                        if (this.pathFinderNodeArray[q].category == a.Closed) {
                            var B = new Point;
                            B.x = this.pathFinderNodeArray[q].tilePosX, B.y = this.pathFinderNodeArray[q].tilePosY, f.push(B)
                        }
                return this.resetNodeArray(), j
            }, getUniqueIDforPathFinderNode: function (a) {
                return Math.floor(this.tilesAcross * Math.floor(a.tilePosY) + Math.floor(a.tilePosX))
            }, getUniqueIDforTilePos: function (a, b) {
                return Math.floor(this.tilesAcross * Math.floor(b) + Math.floor(a))
            }, resetNodeArray: function () {
                var b, c;
                for (c = 0; c < this.tilesDown; c++)
                    for (b = 0; b < this.tilesAcross; b++) {
                        var d = this.getUniqueIDforTilePos(b, c), e = this.pathFinderNodeArray[d];
                        console.assert(e !== null, "Path finder node not initialized."), e.connectionNode = null, e.goalCost = 0, e.fitnessCost = 0, e.category = a.Unvisited
                    }
            }
        }, "PathFinder");
        window.PathFinder = d, Preloader.initialize("utilities/pathfinder.js")
    }), Preloader.include(["game/entities/entity.js"], function () {
        kEnemyState = { Move: 0, Death: 1, Goal: 2 }, kHealthBarHalfWidth = 12 * WORLD_UNITS_SCALAR, kHealthBarHeight = 2 * WORLD_UNITS_SCALAR, kHealthBarDefaultTime = 2, kEffectColorIntensity = .25, kSlowEffectFadeTime = .1, kBurnEffectFadeTime = .2, kPoisonEffectFadeTime = .1, kFlashSpeed = .2, kAirEnemyDecayTime = .1667, kGroundEnemyDecayTime = 2;
        var a = Entity.extend({
            init: function (a, b) {
                this._super(a, b), this.deathByDamageType = kDamageType.Common, this.currentPathNode = -1, this.destinationTileGridIndex = -1, this.pathProgress = 0, this.animFrame = 0, this.animTimer = 0, this.decayTimer = a.type == kEnemyType.Air ? kAirEnemyDecayTime : kGroundEnemyDecayTime, this.flashTimer = kFlashSpeed, this.streamIndex = -1, this.enemyClass = a, this.slowEffect = null, this.burnEffect = null, this.poisonEffect = null, this.targetAnimationName = null, this.currentAnimationName = null, this.movementParticleSystemEx = null, this.state = kEnemyState.Move, this.appliedEffects = kEffectType.None, this.healthBarTimer = 0, this.healthModifier = 1, this.targetPlayer = 0, this.killerPlayerIndex = 0, this.deathAnimationDelayTimer = a.deathAnimationDelay, this.targetAnimationLoop = !0, this.restartAnimation = !0, this.transparency = 255, this.deathAnimationVariantIndex = 1, this.pathNodes = [], this.pathNodesDirty = !1, this.health = a.maxHealth, this.movementDirection = kDirection.East, this.movementStopped = !1, this.followedBy = [], this.reservedTiles = [], this.leaderID = -1, this.onFixedPath = !1, this.crossOverIndex = 0, this.spawnedBefore = null, this.leader = null, this.spawnedBeforeID = -1, this.updateBuffer = !1, this.slowingDown = !1, this.speedModifier = 1, this.isFollower = a.isFollower, this.frontThreshold = a.frontThreshold, this.rearThreshold = a.rearThreshold, this.animationComplete = !1, this.rotatingClockwise = !0, this.effectList = [], this.isMovementSoundPlaying = !1
            }, destroy: function () {
                this.map.notifyEnemyHasBeenRemoved(this), this.isMovementSoundPlaying && this.enemyClass.movementSoundEffect && (this.enemyClass.movementSoundEffect.stopWithDecay(), this.isMovementSoundPlaying = !1), this.movementParticleSystemEx !== null && (this.movementParticleSystemEx.StopEmission(), this.map.particleSystemExList.remove(this.movementParticleSystemEx), this.movementParticleSystemEx.destroy(), this.movementParticleSystemEx = null), this.followedBy = null, this.reservedTiles = null, this.leader = null, this.spawnedBefore = null, this.targetAnimationName = null, this.currentAnimationName = null
            }, setShowHealth: function (a) {
                this.healthBarTimer = a ? kHealthBarDefaultTime : 0
            }, applyHealthModifier: function (a) {
                this.health *= a, this.healthModifier = a
            }, predictPosition: function (a, b) {
                if (this.health > 0) {
                    var c = this.currentPathNode;
                    if (this.currentPathNode >= 0 && this.currentPathNode < this.pathNodes.length) {
                        var d = 1;
                        if (this.slowEffect != null) {
                            var e = this.slowEffect.projectileClass.getProjectileTechLevel(this.slowEffect.towerTechLevelIndex);
                            d = 1 - e.effectIntensity
                        }
                        var f = this.pathProgress + a * this.enemyClass.speed * d * this.speedModifier;
                        while (f > 1)
                            f -= 1, c--;
                        if (c <= 0)
                            return !1;
                        var g = this.pathNodes[c], h = g.x * this.map.tileWidth + this.map.tileWidth * .5 + this.map.offsetX, i = g.y * this.map.tileHeight + this.map.tileHeight * .5 + this.map.offsetY;
                        if (c - 1 >= 0) {
                            var j = this.pathNodes[c - 1], k = this.map.getTileGridIndex(j.x, j.y), l, m;
                            l = j.x, m = j.y, this.map.getTilePos(k, function (a, b) {
                                l = a, m = b
                            }), h += (l - g.x) * this.map.tileWidth * f, i += (m - g.y) * this.map.tileHeight * f
                        }
                        b(h, i)
                    }
                    return !0
                }
                return b(this.x, this.y), !1
            }, renderAnimation: function (a) {
                if (this.currentAnimationName == null)
                    return;
                var b = RenderDevice.getRenderDevice(), c = new Color;
                if (this.appliedEffects & kEffectType.Flash)
                    this.flashTimer < kFlashSpeed * .5 ? (c.r = kEffectColorIntensity * 128, c.g = kEffectColorIntensity * 128, c.b = kEffectColorIntensity * 255, b.useShaderProgram(kProgramID.ColorAdditive)) : (c.r = 128, c.g = 128, c.b = 128), c.a = this.transparency;
                else if (this.appliedEffects & kEffectType.Burn) {
                    this.burnEffect.timeRemaining < kBurnEffectFadeTime ? (this.burnEffect.opacity -= a * (1 / kBurnEffectFadeTime), this.burnEffect.opacity = MAX(this.burnEffect.opacity, 0)) : (this.burnEffect.opacity += a * (1 / kBurnEffectFadeTime), this.burnEffect.opacity = MIN(this.burnEffect.opacity, 1));
                    var d = this.burnEffect.projectileClass.getProjectileTechLevel(this.burnEffect.towerTechLevelIndex);
                    c.r = d.effectColor.r * this.burnEffect.opacity, c.g = d.effectColor.g * this.burnEffect.opacity, c.b = d.effectColor.b * this.burnEffect.opacity, c.a = this.transparency, b.useShaderProgram(kProgramID.ColorAdditive)
                } else if (this.appliedEffects & kEffectType.Slow) {
                    this.slowEffect.timeRemaining < kSlowEffectFadeTime ? (this.slowEffect.opacity -= a * (1 / kSlowEffectFadeTime), this.slowEffect.opacity = MAX(this.slowEffect.opacity, 0)) : (this.slowEffect.opacity += a * (1 / kSlowEffectFadeTime), this.slowEffect.opacity = MIN(this.slowEffect.opacity, 1));
                    var d = this.slowEffect.projectileClass.getProjectileTechLevel(this.slowEffect.towerTechLevelIndex);
                    c.r = kEffectColorIntensity * d.effectColor.r * this.slowEffect.opacity, c.g = kEffectColorIntensity * d.effectColor.g * this.slowEffect.opacity, c.b = kEffectColorIntensity * d.effectColor.b * this.slowEffect.opacity, c.a = this.transparency, b.useShaderProgram(kProgramID.ColorAdditive)
                } else if (this.appliedEffects & kEffectType.Poison) {
                    this.poisonEffect.timeRemaining < kPoisonEffectFadeTime ? (this.poisonEffect.opacity -= a * (1 / kPoisonEffectFadeTime), this.poisonEffect.opacity = MAX(this.poisonEffect.opacity, 0)) : (this.poisonEffect.opacity += a * (1 / kPoisonEffectFadeTime), this.poisonEffect.opacity = MIN(this.poisonEffect.opacity, 1));
                    var d = this.poisonEffect.projectileClass.getProjectileTechLevel(this.poisonEffect.towerTechLevelIndex);
                    c.r = kEffectColorIntensity * d.effectColor.r * this.poisonEffect.opacity, c.g = kEffectColorIntensity * d.effectColor.g * this.poisonEffect.opacity, c.b = kEffectColorIntensity * d.effectColor.b * this.poisonEffect.opacity, c.a = this.transparency, b.useShaderProgram(kProgramID.ColorAdditive)
                } else
                    c.r = 255, c.g = 255, c.b = 255, c.a = this.transparency;
                var e = kMirrorType.None;
                this.movementDirection == kDirection.NorthEast || this.movementDirection == kDirection.NorthWest || this.movementDirection == kDirection.SouthEast || this.movementDirection == kDirection.SouthWest ? (this.enemyClass.mirrorHorizontal && !this.rotatingClockwise && (e = kMirrorType.Horizontal), this.animationController.render(this.currentAnimationName, this.animFrame, c, this.x, this.y, 0, 1, !1, function () {
                }, e)) : (this.enemyClass.mirrorHorizontal && this.movementDirection == kDirection.West && (e = kMirrorType.Horizontal), this.animationController.render(this.currentAnimationName, this.animFrame, c, this.x, this.y, 0, 1, !0, function () {
                }, e)), (this.appliedEffects & kEffectType.Slow || this.appliedEffects & kEffectType.Burn || this.appliedEffects & kEffectType.Flash || this.appliedEffects & kEffectType.Poison) && b.useShaderProgram(kProgramID.Default)
            }, getAxisAlignedBoundingBox: function (a, b) {
                var c = kMirrorType.None;
                this.enemyClass.mirrorHorizontal && this.movementDirection == kDirection.West && (c = kMirrorType.Horizontal), this.currentAnimationName == null ? (a.x = b.x = this.x, a.y = b.y = this.y) : this.animationController.getAxisAlignedBoundingBox(a, b, this.currentAnimationName, this.animFrame, this.x, this.y, 0, 1, !0, c)
            }, renderHealthBar: function (a) {
                this.healthBarTimer > 0 && (this.healthBarTimer -= a, this.healthBarTimer < 0 && (this.healthBarTimer = 0));
                if (this.healthBarTimer == 0)
                    return;
                var b = RenderDevice.createVertexArray(4), c = RenderDevice.createColorArray(4, new Color(255, 0, 0, 255));
                b[0] = this.x - kHealthBarHalfWidth, b[1] = this.y + this.enemyClass.healthBarOffset, b[3] = this.x + kHealthBarHalfWidth, b[4] = this.y + this.enemyClass.healthBarOffset, b[6] = this.x - kHealthBarHalfWidth, b[7] = this.y + this.enemyClass.healthBarOffset + kHealthBarHeight, b[9] = this.x + kHealthBarHalfWidth, b[10] = this.y + this.enemyClass.healthBarOffset + kHealthBarHeight;
                var d = 1 - this.health / (this.enemyClass.maxHealth * this.healthModifier) * 2, e = RenderDevice.createVertexArray(4), f = RenderDevice.createColorArray(4, new Color(0, 255, 0, 255));
                e[0] = this.x - kHealthBarHalfWidth, e[1] = this.y + this.enemyClass.healthBarOffset, e[3] = this.x - kHealthBarHalfWidth * d, e[4] = this.y + this.enemyClass.healthBarOffset, e[6] = this.x - kHealthBarHalfWidth, e[7] = this.y + this.enemyClass.healthBarOffset + kHealthBarHeight, e[9] = this.x - kHealthBarHalfWidth * d, e[10] = this.y + this.enemyClass.healthBarOffset + kHealthBarHeight;
                var g = RenderDevice.getRenderDevice();
                g.useShaderProgram(kProgramID.Textureless), g.setBlendState(kBlendState.None), g.setVertexStreamDataArrays(b, c), g.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), g.setVertexStreamDataArrays(e, f), g.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), g.useShaderProgram(kProgramID.Default)
            }, render: function (a) {
                if (!this.isVisible())
                    return;
                if ((this.appliedEffects & kEffectType.Slow) != 0 && this.state != kEnemyState.Death) {
                    console.assert(this.slowEffect != null, "Slow effect not initialized.");
                    var b = this.slowEffect.projectileClass.getProjectileTechLevel(this.slowEffect.towerTechLevelIndex);
                    a *= 1 - b.effectIntensity
                }
                this.renderAnimation(a);
                var c = !0;
                this.health > 0 && c && this.renderHealthBar(a)
            }, serialize: function (a) {
                this._super(a);
                var b = {};
                a.serializeInt(this, "state"), a.serializeInt(this, "movementDirection"), a.serializeDouble(this, "pathProgress"), a.serializeDouble(this, "transparency"), a.serializeDouble(this, "animTimer"), a.serializeDouble(this, "decayTimer"), a.serializeDouble(this, "health"), a.serializeDouble(this, "healthModifier"), a.serializeDouble(this, "healthBarTimer"), a.serializeDouble(this, "flashTimer"), a.serializeInt(this, "currentPathNode"), a.serializeInt(this, "animFrame"), a.serializeInt(this, "destinationTileGridIndex"), SERIALIZE(a, this, "pathNodesDirty"), SERIALIZE(a, this, "targetAnimationLoop"), a.serializeInt(this, "streamIndex"), a.serializeInt(this, "deathAnimationVariantIndex"), a.serializeInt(this, "targetPlayer"), a.serializeInt(this, "killerPlayerIndex"), SERIALIZE(a, this, "isFollower"), a.serializeDouble(this, "frontThreshold"), a.serializeDouble(this, "rearThreshold"), a.serializeBool(this, "onFixedPath"), a.serializeInt(this, "leaderID"), a.serializeInt(this, "spawnedBeforeID"), a.serializeBool(this, "slowingDown"), a.serializeDouble(this, "speedModifier"), b.numEffects = this.effectList.length, a.serializeInt(b, "numEffects");
                var c = b.numEffects;
                if (a.isLoading()) {
                    var d;
                    for (d = 0; d < c; d++) {
                        var e = new Effect;
                        SERIALIZE_OBJECT(a, e), e.projectileClass = Map.sProjectileClassList[e.projectileClassIndex], this.effectList.push(e), e = null
                    }
                    this.restartAnimation = !1
                } else
                    for (var f = 0; f < this.effectList.length; ++f) {
                        var e = this.effectList[f];
                        SERIALIZE_OBJECT(a, e)
                    }
            }, updateAnimation: function (a) {
                if (this.targetAnimationName == null)
                    return !0;
                var b = this.animationController.getFrameCount(this.targetAnimationName), c = this.animationController.getAnimation(this.targetAnimationName);
                this.animTimer += a;
                while (this.animTimer >= c.interval)
                    this.animTimer -= c.interval, this.animFrame++;
                if (this.currentAnimationName == null || this.currentAnimationName != this.targetAnimationName)
                    this.currentAnimationName = null, this.currentAnimationName = this.targetAnimationName, this.restartAnimation ? (this.animTimer = 0, this.animFrame = 0) : this.restartAnimation = !0;
                var d = !1;
                return this.targetAnimationLoop ? this.animFrame = this.animFrame % b : this.animFrame >= b && (this.animFrame = b - 1, d = !0), d
            }, updateDeathState: function (a) {
                this.deathAnimationDelayTimer -= a;
                if (this.deathAnimationDelayTimer <= 0) {
                    this.movementParticleSystemEx != null && this.movementParticleSystemEx.StopEmission(), this.targetAnimationLoop = !1;
                    var b = EnemyClass.GetDeathTypeAnimationName(this.deathByDamageType), c = sprintf("death_%s%02d_000", b, 1);
                    this.animationController.doesAnimationExist(c) || (this.deathByDamageType = kDamageType.Common, b = EnemyClass.GetDeathTypeAnimationName(this.deathByDamageType));
                    switch (this.movementDirection) {
                        case kDirection.North:
                            c = sprintf("death_%s%02d_000", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.East:
                            c = sprintf("death_%s%02d_090", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.South:
                            c = sprintf("death_%s%02d_180", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.West:
                            this.enemyClass.mirrorHorizontal ? c = sprintf("death_%s%02d_090", b, this.deathAnimationVariantIndex) : c = sprintf("death_%s%02d_270", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.NorthEast:
                            this.rotatingClockwise ? c = sprintf("death_%s%02d_090", b, this.deathAnimationVariantIndex) : c = sprintf("death_%s%02d_000", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.NorthWest:
                            this.rotatingClockwise ? c = sprintf("death_%s%02d_000", b, this.deathAnimationVariantIndex) : this.enemyClass.mirrorHorizontal ? c = sprintf("death_%s%02d_090", b, this.deathAnimationVariantIndex) : c = sprintf("death_%s%02d_270", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.SouthEast:
                            this.rotatingClockwise ? c = sprintf("death_%s%02d_180", b, this.deathAnimationVariantIndex) : c = sprintf("death_%s%02d_090", b, this.deathAnimationVariantIndex);
                            break;
                        case kDirection.SouthWest:
                            this.rotatingClockwise ? this.enemyClass.mirrorHorizontal ? c = sprintf("death_%s%02d_090", b, this.deathAnimationVariantIndex) : c = sprintf("death_%s%02d_270", b, this.deathAnimationVariantIndex) : c = sprintf("death_%s%02d_180", b, this.deathAnimationVariantIndex)
                    }
                    (this.currentAnimationName == null || this.currentAnimationName != c) && !this.animationController.doesAnimationExist(c) && (c = sprintf("death_%s%2d_090", b, this.deathAnimationVariantIndex));
                    var d;
                    if (this.currentAnimationName != null && this.currentAnimationName == c || this.animationController.doesAnimationExist(c)) {
                        if (this.targetAnimationName == null || this.targetAnimationName != c)
                            this.targetAnimationName = null, this.targetAnimationName = c;
                        d = this.animationController.getFrameCount(this.targetAnimationName)
                    } else
                        this.targetAnimationName = null, this.targetAnimationName = null, d = this.animFrame + 1;
                    if (this.animFrame == d - 1) {
                        this.decayTimer -= a;
                        if (this.decayTimer < 1) {
                            this.decayTimer = MAX(this.decayTimer, 0), console.assert(kAirEnemyDecayTime != 0), console.assert(kGroundEnemyDecayTime != 0);
                            var e = this.enemyClass.type == kEnemyType.Air ? kAirEnemyDecayTime : kGroundEnemyDecayTime;
                            this.transparency = 255 * this.decayTimer / MIN(e, 1)
                        }
                    }
                    this.animFrame >= d / 2 && this.enemyClass.type != kEnemyType.Air && (this.renderFirst = !0);
                    if (this.decayTimer <= 0)
                        return !0
                }
                return !1
            }, updateGoalState: function (a) {
                return !0
            }, updateMoveState: function (a) {
                this.leader != null && (this.slowingDown = this.leader.slowingDown, this.speedModifier = this.leader.speedModifier, this.movementStopped = this.leader.movementStopped);
                if (this.currentPathNode <= 1 && this.followedBy.length > 0)
                    for (var b = 0; b < this.followedBy.length; b++) {
                        var c = this.followedBy[b];
                        c != null ? c.currentPathNode <= 0 && this.followedBy.removeAt(b) : this.followedBy.removeAt(b)
                    }
                if (this.spawnedBefore == null)
                    this.slowingDown = !1, this.movementStopped = !1;
                else if (this.spawnedBefore.health <= 0) {
                    if (this.spawnedBefore.spawnedBefore != null && this.spawnedBefore.spawnedBefore.health > 0) {
                        var d = this.spawnedBefore.spawnedBefore;
                        this.spawnedBefore = null, this.spawnedBefore = d
                    } else
                        this.spawnedBefore = null;
                    this.movementStopped = !1
                }
                if (this.pathProgress > this.frontThreshold && !this.isFollower && this.currentPathNode > 1 && this.spawnedBefore != null && this.spawnedBefore.health > 0 && this.spawnedBefore.currentPathNode > 0) {
                    var e = this.spawnedBefore.pathNodes[this.spawnedBefore.currentPathNode - 1], f = this.pathNodes[this.currentPathNode - 2];
                    f.x == e.x && f.y == e.y && this.spawnedBefore.pathProgress < this.spawnedBefore.rearThreshold && (this.movementStopped = !0, this.speedModifier = 0, this.updateBuffer = !0)
                }
                this.slowingDown == 1 && this.leader == null ? this.speedModifier > .1 && (this.speedModifier -= a * 2, this.speedModifier < .1 && (this.speedModifier = .1)) : this.slowingDown == 0 && this.leader == null && this.speedModifier < 1 && this.movementStopped == 0 && (this.speedModifier += a * 2), this.onFixedPath || (this.speedModifier = 1, this.slowingDown = !1);
                if (this.followedBy.length > 0)
                    for (var b = 0; b < this.followedBy.length; b++)
                        this.followedBy[b].speedModifier = this.speedModifier, this.followedBy[b].movementStopped = this.movementStopped;
                this.currentPathNode <= 1 && (this.movementStopped = !1);
                if (this.health > 0 && this.movementStopped == 0) {
                    if (this.enemyClass.movementParticleSystemExClass != null && this.currentAnimationName != null) {
                        this.movementParticleSystemEx == null && (this.movementParticleSystemEx = new ParticleSystemEx(this.enemyClass.movementParticleSystemExClass, Vector3f(this.x, this.y, 0)), this.map.particleSystemExList.push(this.movementParticleSystemEx));
                        var g, h, i = this.entityClass.sprite.getTagPointPosRelativeToAnchor("move01", this.currentAnimationName, this.animFrame, function (a, b) {
                            g = a, h = b
                        });
                        if (i) {
                            var j = this.entityClass.sprite.getTagPointOrientation("move01", this.currentAnimationName, this.animFrame);
                            j = -(j - 90), this.enemyClass.mirrorHorizontal && this.movementDirection == kDirection.West && (g = -g, j = -j), this.movementParticleSystemEx.SetPosition(this.x + g, this.y + h), this.movementParticleSystemEx.SetRotationAngle(j)
                        }
                    }
                    !this.isMovementSoundPlaying && this.enemyClass.movementSoundEffect != null && (this.enemyClass.movementSoundEffect.play(), this.isMovementSoundPlaying = !0);
                    if (this.currentPathNode >= 0 && this.currentPathNode < this.pathNodes.length) {
                        var k, l, m = !1;
                        this.pathNodesDirty && (this.currentPathNode > this.pathNodes.length - 1 && (this.currentPathNode = this.pathNodes.length - 1), this.currentPathNode - 1 >= 0 && (k = this.pathNodes[this.currentPathNode - 1], l = this.map.getTileGridIndex(k.x, k.y), l != this.destinationTileGridIndex ? m = !0 : this.pathNodesDirty = !1)), this.pathProgress += m ? -a * this.enemyClass.speed * this.speedModifier : a * this.enemyClass.speed * this.speedModifier, this.pathProgress < 0 && (m = !1, this.pathProgress = -this.pathProgress, this.pathNodesDirty = !1);
                        while (this.pathProgress > 1) {
                            this.pathProgress -= 1, this.currentPathNode--;
                            if (this.currentPathNode >= 0 && this.reservedTiles.length > 0) {
                                var n = this.pathNodes[this.currentPathNode], o = this.reservedTiles[this.reservedTiles.length - 1];
                                if (n.x == o.x && n.y == o.y) {
                                    if (this.reservedTiles.length > 0) {
                                        for (var p = 0; p < this.reservedTiles.length; p++) {
                                            var q = this.reservedTiles[p];
                                            for (var r = 0; r < this.map.reservedTiles.length; r++) {
                                                var s = this.map.reservedTiles[r];
                                                s.x == q.x && s.y == q.y && this.map.reservedTiles.removeAt(r)
                                            }
                                        }
                                        this.reservedTiles.removeAllObjects()
                                    }
                                } else if (this.onFixedPath)
                                    for (var t = 0; t < this.map.crossOverTiles.length; t++) {
                                        var u = this.map.crossOverTiles[t];
                                        for (var r = 0; r < this.reservedTiles.length; r++) {
                                            var s = this.reservedTiles[r];
                                            if (s.x == u.x && s.y == u.y) {
                                                var v = this.map.crossOverLights[t];
                                                v.setTimer(.7)
                                            }
                                        }
                                    }
                            }
                        }
                        if (this.currentPathNode <= 0) {
                            this.currentPathNode = 0, this.followedBy.length <= 0 && (this.state = kEnemyState.Goal, this.health = 0, this.map.notifyEnemyHasEscaped(this), this.isMovementSoundPlaying = !1, this.enemyClass.movementSoundEffect && this.enemyClass.movementSoundEffect.stopWithDecay(), this.map.removePathLeader(this));
                            if (this.leader != null) {
                                for (var b = 0; b < this.leader.followedBy.length; b++)
                                    this.leader.followedBy[b].uniqueID == this.uniqueID && this.leader.followedBy.removeAt(b);
                                this.leader = null
                            }
                            this.spawnedBefore = null
                        } else {
                            if (this.onFixedPath == 1)
                                for (var t = 0; t < this.map.crossOverTiles.length; t++) {
                                    var u = this.map.crossOverTiles[t];
                                    for (var r = 0; r < this.reservedTiles.length; r++) {
                                        var s = this.reservedTiles[r];
                                        if (s.x == u.x && s.y == u.y) {
                                            var v = this.map.crossOverLights[t];
                                            v.setTimer(.7)
                                        }
                                    }
                                }
                            var w = this.pathNodes[this.currentPathNode];
                            this.tileGridIndex = this.map.getTileGridIndex(w.x, w.y), this.x = w.x * this.map.tileWidth + this.map.tileWidth * .5 + this.map.offsetX, this.y = w.y * this.map.tileHeight + this.map.tileHeight * .5 + this.map.offsetY;
                            if (this.currentPathNode - 1 >= 0) {
                                var x, y, k = this.pathNodes[this.currentPathNode - 1];
                                if (!this.pathNodesDirty) {
                                    this.destinationTileGridIndex = this.map.getTileGridIndex(k.x, k.y);
                                    var z = !1;
                                    for (var t = 0; t < this.map.crossOverTiles.length; t++)
                                        if (k.x == this.map.crossOverTiles[t].x && k.y == this.map.crossOverTiles[t].y) {
                                            z = !0, this.crossOverIndex = t;
                                            if (this.onFixedPath) {
                                                var v = this.map.crossOverLights[t];
                                                v.setTimer(.7)
                                            }
                                        }
                                    this.enemyClass.type == kEnemyType.Air && (z = !1);
                                    if (z && this.reservedTiles.length <= 0 && this.movementStopped == 0) {
                                        var A = !1;
                                        for (var B = 0; B < this.map.reservedTiles.length; B++) {
                                            var C = this.map.reservedTiles[B];
                                            if (k.x == C.x && k.y == C.y) {
                                                A = !0;
                                                for (var D = 0; D < this.map.enemyList.length; D++) {
                                                    var d = this.map.enemyList[D];
                                                    if (d.reservedTiles.length > 0)
                                                        for (var E = 0; E < d.reservedTiles.length; E++) {
                                                            var F = d.reservedTiles[E];
                                                            F.x == C.x && F.y == C.y && d.onFixedPath == this.onFixedPath && (A = !1)
                                                        }
                                                }
                                            }
                                        }
                                        if (this.movementStopped == 0)
                                            if (A && this.reservedTiles.length <= 0)
                                                this.movementStopped = !0, this.speedModifier = 0;
                                            else if (!this.onFixedPath && this.map.crossOverLights[this.crossOverIndex].getTimer() > 0)
                                                this.movementStopped = !0, this.speedModifier = 0;
                                            else {
                                                if (this.reservedTiles.length > 0) {
                                                    for (var p = 0; p < this.reservedTiles.length; p++) {
                                                        var q = this.reservedTiles[p];
                                                        for (var r = 0; r < this.map.reservedTiles.length; r++) {
                                                            var s = this.map.reservedTiles[r];
                                                            s.x == q.x && s.y == q.y && this.map.reservedTiles.removeAt(r)
                                                        }
                                                    }
                                                    this.reservedTiles.removeAllObjects()
                                                }
                                                if (z) {
                                                    var G = 1, H = !0;
                                                    while (H == 1) {
                                                        var I = this.pathNodes[this.currentPathNode - G];
                                                        H = !1;
                                                        for (var t = 0; t < this.map.crossOverTiles.length; t++)
                                                            if (I.x == this.map.crossOverTiles[t].x && I.y == this.map.crossOverTiles[t].y) {
                                                                this.reservedTiles.push(I), this.map.reservedTiles.push(I), H = !0;
                                                                if (this.onFixedPath) {
                                                                    var v = this.map.crossOverLights[t];
                                                                    v.setTimer(.7)
                                                                }
                                                            }
                                                        G++
                                                    }
                                                } else
                                                    this.reservedTiles.push(this.pathNodes[this.currentPathNode - 1]), this.map.reservedTiles.push(k)
                                            }
                                    }
                                    x = k.x, y = k.y
                                } else {
                                    var z = !1;
                                    this.destinationTileGridIndex >= 0 ? this.map.getTilePos(this.destinationTileGridIndex, function (a, b) {
                                        x = a, y = b
                                    }) : (x = w.x, y = w.y);
                                    for (var t = 0; t < this.map.crossOverTiles.length; t++)
                                        if (x == this.map.crossOverTiles[t].x && y == this.map.crossOverTiles[t].y) {
                                            z = !0, this.crossOverIndex = t;
                                            if (this.onFixedPath) {
                                                var v = this.map.crossOverLights[t];
                                                v.setTimer(.7)
                                            }
                                        }
                                    if (z && this.reservedTiles.length <= 0 && !this.movementStopped) {
                                        var A = !1;
                                        for (var B = 0; B < this.map.reservedTiles.length; B++) {
                                            var C = this.map.reservedTiles[B];
                                            if (x == this.map.reservedTiles[B].x && y == this.map.reservedTiles[B].y) {
                                                A = !0;
                                                for (var D = 0; D < this.map.enemyList.length; D++) {
                                                    var d = this.map.enemyList[D];
                                                    if (d.reservedTiles.length > 0)
                                                        for (var E = 0; E < this.reservedTiles.length; E++) {
                                                            var F = d.reservedTiles[E];
                                                            F.x == C.x && F.y == C.y && d.onFixedPath == this.onFixedPath && (A = !1)
                                                        }
                                                }
                                            }
                                        }
                                        !this.onFixedPath && this.map.crossOverLights[this.crossOverIndex].getTimer() > 0 && (this.movementStopped = !0, this.speedModifier = 0);
                                        if (A && this.reservedTiles.length <= 0)
                                            this.movementStopped = !0, this.speedModifier = 0;
                                        else {
                                            if (this.reservedTiles.length > 0) {
                                                for (var p = 0; p < this.reservedTiles.length; p++) {
                                                    var q = this.reservedTiles[p];
                                                    for (var r = 0; r < this.map.reservedTiles.length; r++) {
                                                        var s = this.map.reservedTiles[r];
                                                        s.x == q.x && s.y == q.y && this.map.reservedTiles.removeAt(r)
                                                    }
                                                }
                                                this.reservedTiles.removeAllObjects()
                                            }
                                            this.reservedTiles.push(this.pathNodes[this.currentPathNode]), this.map.reservedTiles.push(k)
                                        }
                                    }
                                }
                                this.movementStopped || (this.x += (x - w.x) * this.map.tileWidth * this.pathProgress, this.y += (y - w.y) * this.map.tileHeight * this.pathProgress);
                                if ((this.movementDirection == kDirection.NorthEast || this.movementDirection == kDirection.NorthWest || this.movementDirection == kDirection.SouthEast || this.movementDirection == kDirection.SouthWest) && this.animationComplete || this.movementDirection != kDirection.NorthEast && this.movementDirection != kDirection.NorthWest && this.movementDirection != kDirection.SouthEast && this.movementDirection != kDirection.SouthWest) {
                                    !this.animationComplete, x > w.x ? this.movementDirection = m ? kDirection.West : kDirection.East : x < w.x ? this.movementDirection = m ? kDirection.East : kDirection.West : y > w.y ? this.movementDirection = m ? kDirection.North : kDirection.South : y < w.y && (this.movementDirection = m ? kDirection.South : kDirection.North);
                                    if (this.onFixedPath && this.pathProgress > .75 && this.currentPathNode > 1) {
                                        var J = this.pathNodes[this.currentPathNode - 2];
                                        switch (this.movementDirection) {
                                            case kDirection.North:
                                                J.x > x ? (this.rotatingClockwise = !0, this.movementDirection = kDirection.NorthEast) : J.x < x && (this.rotatingClockwise = !1, this.movementDirection = kDirection.NorthWest);
                                                break;
                                            case kDirection.South:
                                                J.x < x ? (this.rotatingClockwise = !0, this.movementDirection = kDirection.SouthWest) : J.x > x && (this.rotatingClockwise = !1, this.movementDirection = kDirection.SouthEast);
                                                break;
                                            case kDirection.East:
                                                J.y > y ? (this.rotatingClockwise = !0, this.movementDirection = kDirection.SouthEast) : J.y < y && (this.rotatingClockwise = !1, this.movementDirection = kDirection.NorthEast);
                                                break;
                                            case kDirection.West:
                                                J.y < y ? (this.rotatingClockwise = !0, this.movementDirection = kDirection.NorthWest) : J.y > y && (this.rotatingClockwise = !1, this.movementDirection = kDirection.SouthWest);
                                                break;
                                            default:
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (this.health > 0 && this.movementStopped == 1)
                    if (!this.updateBuffer) {
                        var K = !1, k = this.pathNodes[this.currentPathNode - 1];
                        for (var t = 0; t < this.map.crossOverTiles.length; t++)
                            k.x == this.map.crossOverTiles[t].x && k.y == this.map.crossOverTiles[t].y && (K = !0);
                        if (K) {
                            var L = !1, k = this.pathNodes[this.currentPathNode - 1];
                            if (this.map.crossOverLights.length > 0 && !this.onFixedPath) {
                                var v = this.map.crossOverLights[this.crossOverIndex];
                                v.getTimer() > 0 && (L = !0)
                            }
                            for (var B = 0; B < this.map.reservedTiles.length; B++) {
                                var C = this.map.reservedTiles[B];
                                if (k.x == this.map.reservedTiles[B].x && k.y == this.map.reservedTiles[B].y) {
                                    L = !0;
                                    for (var D = 0; D < this.map.enemyList.length; D++) {
                                        var d = this.map.enemyList[D];
                                        if (d.reservedTiles.length > 0)
                                            for (var E = 0; E < d.reservedTiles.length; E++) {
                                                var F = d.reservedTiles[E];
                                                F.x == C.x && F.y == C.y && d.onFixedPath == this.onFixedPath && (L = !1)
                                            }
                                    }
                                }
                            }
                            if (L == 0) {
                                if (this.reservedTiles.length > 0) {
                                    for (var p = 0; p < this.reservedTiles.length; p++) {
                                        var q = this.reservedTiles[p];
                                        for (var r = 0; r < this.map.reservedTiles.length; r++) {
                                            var s = this.map.reservedTiles[r];
                                            s.x == q.x && s.y == q.y && this.map.reservedTiles.removeAtIndex(r)
                                        }
                                    }
                                    this.reservedTiles.removeAllObjects()
                                }
                                this.reservedTiles.push(this.pathNodes[this.currentPathNode - 1]), this.map.reservedTiles.push(this.pathNodes[this.currentPathNode - 1]), this.movementStopped = !1, this.slowingDown = !1
                            }
                        }
                    } else {
                        this.leader != null && (this.slowingDown = this.leader.slowingDown, this.movementStopped = this.leader.movementStopped, this.updateBuffer = this.leader.updateBuffer, this.speedModifier = this.leader.speedModifier);
                        if (this.spawnedBefore != null && this.leader == null) {
                            var e = new Point;
                            this.map.getTilePosAsPoint(this.spawnedBefore.destinationTileGridIndex, e);
                            var f = this.pathNodes[this.currentPathNode - 2];
                            f.x == e.x && f.y == e.y ? this.spawnedBefore
                                .pathProgress < this.spawnedBefore.rearThreshold && (this.movementStopped = !0, this.speedModifier = 0) : (this.movementStopped = !1, this.slowingDown = !1, this.updateBuffer = !1), e = null
                        } else
                            this.spawnedBefore == null && (this.movementStopped = !1, this.slowingDown = !1, this.updateBuffer = !1)
                    }
                else {
                    this.state = kEnemyState.Death;
                    if (this.followedBy.length > 0)
                        for (var M = 0; M < this.followedBy.length; M++)
                            this.followedBy[M].health = 0;
                    this.map.removePathLeader(this), this.leader = null, this.spawnedBefore = null;
                    if (this.reservedTiles.length > 0) {
                        for (var p = 0; p < this.reservedTiles.length; p++) {
                            var q = this.reservedTiles[p];
                            for (var r = 0; r < this.map.reservedTiles.length; r++) {
                                var s = this.map.reservedTiles[r];
                                s.x == q.x && s.y == q.y && this.map.reservedTiles.removeAtIndex(r)
                            }
                        }
                        this.reservedTiles.removeAllObjects()
                    }
                    var N = EnemyClass.GetDeathTypeAnimationName(this.deathByDamageType), O = sprintf("death_%s%02d_000", N, 1);
                    this.animationController.doesAnimationExist(O) || (this.deathByDamageType = kDamageType.Common), this.deathAnimationVariantIndex = RANDOM_INT_IN_RANGE(1, this.enemyClass.GetNumDeathAnimationVariants(this.deathByDamageType) + 1);
                    if (this.enemyClass.deathParticleSystemExClass != null) {
                        var P = new ParticleSystemEx(this.enemyClass.deathParticleSystemExClass, new Vector3f(this.x, this.y, 0));
                        this.map.particleSystemExList.push(P), P = null
                    }
                    this.map.notifyEnemyHasBeenKilled(this), this.isMovementSoundPlaying && this.enemyClass.movementSoundEffect && (this.isMovementSoundPlaying = !1, this.enemyClass.movementSoundEffect.stopWithDecay()), this.enemyClass.deathSoundEffect.play();
                    var Q = 0;
                    this.map.numPlayers > 1 ? (this.map.addScore(this.enemyClass.score, this.killerPlayerIndex), this.map.isCoop ? Q = this.targetPlayer : Q = this.killerPlayerIndex) : this.map.addScore(this.enemyClass.score), this.map.GetPlayer(Q).AddResources(this.enemyClass.resources)
                }
                var O = null;
                switch (this.movementDirection) {
                    case kDirection.North:
                        O = "move_000", this.targetAnimationLoop = !0;
                        break;
                    case kDirection.East:
                        O = "move_090", this.targetAnimationLoop = !0;
                        break;
                    case kDirection.South:
                        O = "move_180", this.targetAnimationLoop = !0;
                        break;
                    case kDirection.West:
                        O = this.enemyClass.mirrorHorizontal ? "move_090" : "move_270", this.targetAnimationLoop = !0;
                        break;
                    case kDirection.NorthEast:
                        O = this.rotatingClockwise ? "turn_45" : "turn_315", this.targetAnimationLoop = !1;
                        break;
                    case kDirection.NorthWest:
                        O = this.enemyClass.mirrorHorizontal && !this.rotatingClockwise ? "turn_45" : "turn_315", this.targetAnimationLoop = !1;
                        break;
                    case kDirection.SouthEast:
                        O = this.rotatingClockwise ? "turn_135" : "turn_225", this.targetAnimationLoop = !1;
                        break;
                    case kDirection.SouthWest:
                        O = this.enemyClass.mirrorHorizontal && !this.rotatingClockwise ? "turn_135" : "turn_225", this.targetAnimationLoop = !1;
                        break;
                    default:
                }
                if (this.targetAnimationName === null || this.targetAnimationName != O)
                    this.targetAnimationName = null, this.targetAnimationName = O
            }, update: function (a) {
                var b = !1;
                if (a < kPrecisionErrorCorrection && this.currentAnimationName !== null && this.targetAnimationName !== null)
                    return b;
                var c = a;
                this.appliedEffects = kEffectType.None;
                var d;
                for (d = this.effectList.length - 1; d >= 0; d--) {
                    var e = this.effectList[d];
                    e.timeRemaining -= a;
                    switch (e.projectileClass.effectType) {
                        case kEffectType.Slow:
                            this.slowEffect = e;
                            var f = e.projectileClass.getProjectileTechLevel(e.towerTechLevelIndex);
                            c *= 1 - f.effectIntensity, this.appliedEffects = this.appliedEffects | kEffectType.Slow;
                            break;
                        case kEffectType.Burn:
                            this.burnEffect = e, this.appliedEffects = this.appliedEffects | kEffectType.Burn;
                            break;
                        case kEffectType.Flash:
                            this.flashTimer -= a;
                            while (this.flashTimer < 0)
                                this.flashTimer += kFlashSpeed;
                            this.appliedEffects = this.appliedEffects | kEffectType.Flash;
                            break;
                        case kEffectType.Poison:
                            if (this.poisonEffect !== null && this.health > 0) {
                                var g = a * e.projectileClass.getProjectileTechLevel(e.towerTechLevelIndex).effectIntensity;
                                this.leader !== null ? (this.leader.health -= g, this.leader.setShowHealth(!0)) : (this.health -= g, this.setShowHealth(!0)), this.health <= 0 && AchievementManager.GetSingleton().IncrementNumKillsByTowerClass(kTowerClass.Poison)
                            }
                            this.poisonEffect = e, this.appliedEffects = this.appliedEffects | kEffectType.Poison;
                            break;
                        default:
                            console.warn("Undefined effect type.")
                    }
                    e.timeRemaining <= 0 && (e.projectileClass.effectType == kEffectType.Slow ? (this.slowEffect = null, this.appliedEffects = this.appliedEffects ^ kEffectType.Slow) : e.projectileClass.effectType == kEffectType.Burn ? (this.burnEffect = null, this.appliedEffects = this.appliedEffects ^ kEffectType.Burn) : e.projectileClass.effectType == kEffectType.Poison && (this.poisonEffect = null, this.appliedEffects = this.appliedEffects ^ kEffectType.Poison), this.effectList.removeAtIndexFast(d))
                }
                switch (this.state) {
                    case kEnemyState.Move:
                        this.updateMoveState(c);
                        break;
                    case kEnemyState.Death:
                        b = this.updateDeathState(c);
                        break;
                    case kEnemyState.Goal:
                        b = this.updateGoalState(c);
                        break;
                    default:
                }
                return this.animationComplete = this.updateAnimation(a), b
            }, isEnemy: function () {
                return !0
            }, SetDeathByDamageType: function (a) {
                this.deathByDamageType = a
            }
        }, "Enemy");
        window.Enemy = a, Preloader.initialize("game/entities/enemy.js")
    }), function (a, b, c, d, e, f, g) {
        function h(a) {
            var b, d, e = this, f = a.length, g = 0, h = e.i = e.j = e.m = 0;
            e.S = [], e.c = [], f || (a = [f++]);
            while (g < c)
                e.S[g] = g++;
            for (g = 0; g < c; g++)
                b = e.S[g], h = k(h + b + a[g % f]), d = e.S[h], e.S[g] = d, e.S[h] = b;
            e.g = function (b) {
                var d = e.S, f = k(e.i + 1), g = d[f], h = k(e.j + g), i = d[h];
                d[f] = i, d[h] = g;
                var j = d[k(g + i)];
                while (--b)
                    f = k(f + 1), g = d[f], h = k(h + g), i = d[h], d[f] = i, d[h] = g, j = j * c + d[k(g + i)];
                return e.i = f, e.j = h, j
            }, e.g(c)
        }
        function i(a, b, c, d, e) {
            c = [], e = typeof a;
            if (b && e == "object")
                for (d in a)
                    if (d.indexOf("S") < 5)
                        try {
                            c.push(i(a[d], b - 1))
                        } catch (f) {
                        }
            return c.length ? c : a + (e != "string" ? "\0" : "")
        }
        function j(a, b, c, d) {
            a += "", c = 0;
            for (d = 0; d < a.length; d++)
                b[k(d)] = k((c ^= b[k(d)] * 19) + a.charCodeAt(d));
            a = "";
            for (d in b)
                a += String.fromCharCode(b[d]);
            return a
        }
        function k(a) {
            return a & c - 1
        }
        b.seedrandom = function (l, m) {
            var n = [], o;
            return l = j(i(m ? [l, a] : arguments.length ? l : [(new Date).getTime(), a, window], 3), n), o = new h(n), j(o.S, a), b.randomRC4 = function () {
                var b = o.g(d), h = g, i = 0;
                while (b < e)
                    b = (b + i) * c, h *= c, i = o.g(1);
                while (b >= f)
                    b /= 2, h /= 2, i >>>= 1;
                return (b + i) / h
            }, l
        }, g = b.pow(c, d), e = b.pow(2, e), f = e * 2, j(b.random(), a), Preloader.initialize("utilities/seedrandom.js")
    }([], Math, 256, 6, 52), Preloader.include([], function () {
        window.xmlAttr = function (a, b) {
            return function (c, d, e) {
                var f = b.attr(c);
                if (a === null)
                    return f ? e(f, d) : d;
                if (f && typeof d == "string")
                    return a[d] = e(f);
                if (f)
                    return e(f, d)
            }
        }, window.xmlBoolAttr = function (a, b, c, d) {
            a(b, c, function (a) {
                return a.toLowerCase() == (d || "true") ? !0 : !1
            })
        }, Preloader.initialize("utilities/xmlutilities.js")
    }), Preloader.include(["utilities/xmlutilities.js"], function () {
        var a = { Constant: 0, Linear: 1, FastRamp: 2, SlowRamp: 3, SineCurve: 4, CosineCurve: 5, CyclicSineCurve: 6 }, b = function (b, c, d, e) {
            console.assert(c >= 0 && c <= 1, "Invalid input value specified.");
            var f;
            switch (b) {
                case a.Constant:
                    f = d;
                    break;
                case a.Linear:
                    f = d + (e - d) * c;
                    break;
                case a.FastRamp:
                    f = 1 - SQUARE(1 - c), f = d + (e - d) * f;
                    break;
                case a.SlowRamp:
                    f = SQUARE(c), f = d + (e - d) * f;
                    break;
                case a.SineCurve:
                    f = SIN(c * kPI), f = d + (e - d) * f;
                    break;
                case a.CosineCurve:
                    f = (1 + COS(c * kPI)) * .5, f = d + (e - d) * f;
                    break;
                case a.CyclicSineCurve:
                    f = SIN((c + .75) * kTwoPI);
                    var g = e - d, h = e - g * .5;
                    f = h + g * f * .5;
                    break;
                default:
                    f = d, console.warn("Unsupported interpolator type.")
            }
            return f
        }, c = Class.extend({
            init: function (b, c, d, e, f) {
                this.mInterpolatorType = b || a.Constant, this.mInitialValue = c || 0, this.mInitialVariance = d || 0, this.mFinalValue = e || 0, this.mFinalVariance = f || 0
            }, GetInitialValue: function () {
                return this.mInitialValue
            }, GetInitialVariance: function () {
                return this.mInitialVariance
            }, GetInterpolatorType: function () {
                return this.mInterpolatorType
            }, GetFinalValue: function () {
                return this.mFinalValue
            }, GetFinalVariance: function () {
                return this.mFinalVariance
            }, Scale: function (a) {
                this.mInitialValue *= a, this.mInitialVariance *= a, this.mFinalValue *= a, this.mFinalVariance *= a
            }, SetInitialValue: function (a) {
                this.mInitialValue = a
            }, SetInitialVariance: function (a) {
                this.mInitialVariance = Math.max(a, 0)
            }, SetFinalValue: function (a) {
                this.mFinalValue = a
            }, SetFinalVariance: function (a) {
                this.mFinalVariance = Math.max(a, 0)
            }, SetInterpolatorType: function (a) {
                this.mInterpolatorType = a
            }, Clamp: function (a) {
                this.mInitialValue < a && (this.mInitialVariance = this.mInitialVariance + (this.mInitialValue - a), this.mInitialVariance = Math.max(this.mInitialVariance, 0), this.mInitialValue = a), this.mFinalValue < a && (this.mFinalVariance = this.mFinalVariance + (this.mFinalValue - a), this.mFinalVariance = Math.max(this.mFinalVariance, 0), this.mFinalValue = a)
            }
        }, "InterpolatorClass"), d = Class.extend({
            init: function (a, b, c) {
                this.mInterpolatorType = a, this.mInitialValue = b, this.mFinalValue = c
            }, GetInterpolatorType: function () {
                return this.mInterpolatorType
            }, GetValue: function (a) {
                var c = b(this.mInterpolatorType, a, this.mInitialValue, this.mFinalValue);
                return c
            }, Set: function (a, b, c) {
                this.mInterpolatorType = a, this.mInitialValue = b, this.mFinalValue = c
            }, GetInitialValue: function () {
                return this.mInitialValue
            }, GetFinalValue: function () {
                return this.mFinalValue
            }, SetInitialValue: function (a) {
                this.mInitialValue = a
            }, SetFinalValue: function (a) {
                this.mFinalValue = a
            }, SetInterpolatorType: function (a) {
                this.mInterpolatorType = a
            }
        }, "Interpolator");
        window.kInterpolatorType = a, window.InterpolateValue = b, window.InterpolatorClass = c, window.Interpolator = d, window.xmlInterpolatorClassAttr = function (a, b, c, d) {
            return d = d || parseFloat, a(b + "FinalValue", c, function (a, b) {
                b.SetFinalValue(d(a))
            }), a(b + "FinalVariance", c, function (a, b) {
                b.SetFinalVariance(d(a))
            }), a(b + "Value", c, function (a, b) {
                b.SetInitialValue(d(a))
            }), a(b + "Variance", c, function (a, b) {
                b.SetInitialVariance(d(a))
            }), a(b + "InterpolatorType", c, function (a, b) {
                b.SetInterpolatorType(parseInt(a, 10))
            }), c
        }, Preloader.initialize("utilities/interpolator.js")
    }), Preloader.include(["utilities/xmlutilities.js"], function () {
        var a = Class.extend({
            init: function (a, b) {
                this.mValue = a || 0, this.mVariance = b || 0
            }, GetValue: function () {
                return this.mValue
            }, GetVariance: function () {
                return this.mVariance
            }, SetValue: function (a) {
                this.mValue = a
            }, SetVariance: function (a) {
                this.mVariance = a
            }, Clamp: function (a) {
                this.mValue < a && (this.mVariance = this.mVariance + (this.mValue - a), this.mValue = a)
            }
        });
        window.VaryingParameter = a, window.xmlVaryingAttr = function (a, b, c, d) {
            return d = d || parseFloat, a(b + "Value", c, function (a, b) {
                b.SetValue(d(a))
            }), a(b + "Variance", c, function (a, b) {
                b.SetVariance(d(a))
            }), c
        }, Preloader.initialize("utilities/varyingparameter.js")
    }), Preloader.include(["utilities/defines.js", "utilities/interpolator.js", "utilities/varyingparameter.js"], function () {
        kEmitterShape = { Point: 0, Box: 1, Cylinder: 2 }, kParticleCoordinateSystem = { World: 0, Velocity: 1, HostUnit: 2, TagPoint: 3 };
        var a = Class.extend({
            init: function () {
                this.mTextureID = 0, this.mTextureWidth = 0, this.mTextureHeight = 0, this.mEmitterShape = kEmitterShape.Point, this.mAppearanceFile = null, this.mSoundEffect = null, this.mParticleClassList = null, this.mParticleClassList = [], this.mbIsInfiniteLifetime = !1, this.mbExpireUponUnitDeath = !1, this.mCoordinateSystem = kParticleCoordinateSystem.World, this.mbIsVelocityBasedTilt = !1, this.mEmitterWidthOuter = 0, this.mEmitterWidthInner = 0, this.mEmitterHeightOuter = 0, this.mEmitterHeightInner = 0, this.mEmitterDepthOuter = 0, this.mEmitterDepthInner = 0, this.mNumEmitterRevolutions = 0, this.mbRandomizeVelocityPerParticleInstance = !1, this.mbEmitterEnabled = !1, this.mbEmitUponDeath = !1, this.mbFixedSampling = !1, this.mbGraphicsEnabled = !1, this.mbUniformScaling = !1, this.mAnchor = new Vector2f, this.mBlendState = kBlendState.None, this.mAnimationID = 0, this.mbLoopAnimation = !1, this.mbDistortion = !1, this.mbApplyRandomVelocity = !1, this.mbConstantAngularVelocity = !1, this.mbCollidesWithTerrain = !1, this.mLifetime = new VaryingParameter, this.mPeriod = new VaryingParameter, this.mOffsetX = new InterpolatorClass, this.mOffsetY = new InterpolatorClass, this.mOffsetZ = new InterpolatorClass, this.mYaw = new VaryingParameter, this.mPitch = new VaryingParameter, this.mRoll = new VaryingParameter, this.mTilt = new InterpolatorClass, this.mEmitterInterval = new InterpolatorClass, this.mEmitterSpawnNumber = new InterpolatorClass, this.mEmitterVelocity = new InterpolatorClass, this.mEmitterSpawnDelay = new VaryingParameter, this.mScaleX = new InterpolatorClass, this.mScaleY = new InterpolatorClass, this.mTexCoordU = new InterpolatorClass, this.mTexCoordV = new InterpolatorClass, this.mMass = new VaryingParameter, this.mAerodynamics = new VaryingParameter, this.mDamping = new VaryingParameter, this.mBounce = new VaryingParameter, this.mFriction = new VaryingParameter, this.mCameraShake = new VaryingParameter, this.mCameraShakeRange = new VaryingParameter, this.mRandomInterval = new VaryingParameter, this.mRandomPauseInterval = new VaryingParameter, this.mSpinAroundCenter = new InterpolatorClass, this.mSpinAroundPivot = new InterpolatorClass, this.mRandomDirectionX = new InterpolatorClass, this.mRandomDirectionY = new InterpolatorClass, this.mRandomDirectionZ = new InterpolatorClass, this.mColorCycle = new ColorCycleClass
            }, destroy: function () {
                for (var a = this.mParticleClassList.length - 1; a >= 0; a--)
                    this.mParticleClassList[a].destroy();
                this.mParticleClassList = null, this.mSoundEffect = null, this.mTextureID > 0 && Sprite.destroyTexture(this.mTextureID)
            }, Load: function (b) {
                var c = Preloader.dependOn(this), d = 0, e = b, f = xmlAttr(this, e);
                xmlVaryingAttr(f, "lifetime", this.mLifetime), xmlVaryingAttr(f, "period", this.mPeriod), xmlBoolAttr(f, "infiniteLifetime", "mbIsInfiniteLifetime"), xmlBoolAttr(f, "expireUponUnitDeath", "mbExpireUponUnitDeath"), f("coordinateSystem", "mCoordinateSystem", parseInt), xmlInterpolatorClassAttr(f, "offsetX", this.mOffsetX), xmlInterpolatorClassAttr(f, "offsetY", this.mOffsetY), xmlInterpolatorClassAttr(f, "offsetZ", this.mOffsetZ), xmlVaryingAttr(f, "yaw", this.mYaw), xmlVaryingAttr(f, "pitch", this.mPitch), xmlVaryingAttr(f, "roll", this.mRoll), xmlInterpolatorClassAttr(f, "tilt", this.mTilt), xmlBoolAttr(f, "velocityBasedTilt", "mbIsVelocityBasedTilt"), xmlBoolAttr(f, "enableEmitter", "mbEmitterEnabled"), xmlBoolAttr(f, "emitUponDeath", "mbEmitUponDeath"), xmlInterpolatorClassAttr(f, "emitterInterval", this.mEmitterInterval, parseFloat), xmlInterpolatorClassAttr(f, "emitterSpawnNumber", this.mEmitterSpawnNumber, parseInt), xmlInterpolatorClassAttr(f, "emitterVelocity", this.mEmitterVelocity, parseFloat), xmlVaryingAttr(f, "emitterSpawnDelay", this.mEmitterSpawnDelay, parseFloat), f("emitterShapeOuterWidth", "mEmitterWidthOuter", parseFloat), f("emitterShapeInnerWidth", "mEmitterWidthInner", parseFloat), f("emitterShapeOuterHeight", "mEmitterHeightOuter", parseFloat), f("emitterShapeInnerHeight", "mEmitterHeightInner", parseFloat), f("emitterShapeOuterDepth", "mEmitterDepthOuter", parseFloat), f("emitterShapeInnerDepth", "mEmitterDepthInner", parseFloat), f("emitterShape", null, function (a) {
                    d = parseInt(a)
                }), f("emitterRevolutions", "mNumEmitterRevolutions", parseFloat), xmlBoolAttr(f, "fixedSampling", "mbFixedSampling"), xmlBoolAttr(f, "enableGraphics", "mbGraphicsEnabled"), f("blendMode", "mBlendState", parseEnum(kBlendState, this.mBlendState)), xmlBoolAttr(f, "uniformScaling", "mbUniformScaling"), xmlInterpolatorClassAttr(f, "scaleX", this.mScaleX, parseFloat), xmlInterpolatorClassAttr(f, "scaleY", this.mScaleY, parseFloat), xmlInterpolatorClassAttr(f, "texCoordU", this.mTexCoordU, parseFloat), xmlInterpolatorClassAttr(f, "texCoordV", this.mTexCoordV, parseFloat), f("appearanceFile", "mAppearanceFile", parseString), f("animationID", "mAnimationID", parseInt), xmlBoolAttr(f, "loopAnimation", "mbLoopAnimation"), xmlBoolAttr(f, "distortion", "mbDistortion"), f("colorColorKeys", this.mColorCycle, function (a, b) {
                    b.Load("color", e)
                }), f("anchorX", this.mAnchor, function (a, b) {
                    b.x = parseFloat(a)
                }), f("anchorY", this.mAnchor, function (a, b) {
                    b.y = parseFloat(a)
                }), xmlVaryingAttr(f, "mass", this.mMass, parseFloat), xmlVaryingAttr(f, "aeroDynamics", this.mAerodynamics, parseFloat), xmlVaryingAttr(f, "damping", this.mDamping, parseFloat), xmlVaryingAttr(f, "bounce", this.mBounce, parseFloat), xmlVaryingAttr(f, "friction", this.mFriction, parseFloat), xmlVaryingAttr(f, "cameraShake", this.mCameraShake, parseFloat), xmlVaryingAttr(f, "cameraShakeRange", this.mCameraShakeRange, parseFloat), xmlInterpolatorClassAttr(f, "spinAroundCenter", this.mSpinAroundCenter, parseFloat), xmlInterpolatorClassAttr(f, "spinAroundPivot", this.mSpinAroundPivot, parseFloat), xmlVaryingAttr(f, "randomInterval", this.mRandomInterval, parseFloat), xmlVaryingAttr(f, "randomPauseInterval", this.mRandomPauseInterval, parseFloat), xmlInterpolatorClassAttr(f, "randomDirectionX", this.mRandomDirectionX, parseFloat), xmlInterpolatorClassAttr(f, "randomDirectionY", this.mRandomDirectionY, parseFloat), xmlInterpolatorClassAttr(f, "randomDirectionZ", this.mRandomDirectionZ, parseFloat), xmlBoolAttr(f, "constantAngularVelocity", "mbConstantAngularVelocity"), xmlBoolAttr(f, "collidesWithTerrain", "mbCollidesWithTerrain"), xmlBoolAttr(f, "applyRandomVelocity", "mbApplyRandomVelocity");
                var g = new SoundEffectDefinition("soundFile", e);
                this.mSoundEffect = g.filename != null ? new SoundEffect(g) : null, this.mLifetime.Clamp(0), this.mPeriod.Clamp(0), this.mEmitterInterval.Clamp(0), this.mEmitterSpawnNumber.Clamp(1), this.mEmitterVelocity.Clamp(0), this.mEmitterSpawnDelay.Clamp(0), this.mScaleX.Clamp(0), this.mScaleY.Clamp(0), this.mMass.Clamp(0), this.mAerodynamics.Clamp(0), this.mDamping.Clamp(0), this.mbCollidesWithTerrain && (this.mBounce.Clamp(0), this.mBounce.SetValue(this.mBounce.GetValue() / 100), this.mBounce.SetVariance(this.mBounce.GetVariance() / 100), this.mFriction.SetValue(this.mFriction.GetValue() / 100), this.mFriction.SetVariance(this.mFriction.GetVariance() / 100)), this.mSpinAroundCenter.Scale(kTwoPI), this.mSpinAroundPivot.Scale(kTwoPI), this.mYaw.SetValue(DEGREES_TO_RADIANS(this.mYaw.GetValue())), this.mYaw.SetVariance(DEGREES_TO_RADIANS(this.mYaw.GetVariance())), this.mPitch.SetValue(DEGREES_TO_RADIANS(this.mPitch.GetValue())), this.mPitch.SetVariance(DEGREES_TO_RADIANS(this.mPitch.GetVariance())), this.mRoll.SetValue(DEGREES_TO_RADIANS(this.mRoll.GetValue())), this.mRoll.SetVariance(DEGREES_TO_RADIANS(this.mRoll.GetVariance())), this.mTilt.SetInitialValue(DEGREES_TO_RADIANS(this.mTilt.GetInitialValue())), this.mTilt.SetInitialVariance(DEGREES_TO_RADIANS(this.mTilt.GetInitialVariance())), this.mTilt.SetFinalValue(DEGREES_TO_RADIANS(this.mTilt.GetFinalValue())), this.mTilt.SetFinalVariance(DEGREES_TO_RADIANS(this.mTilt.GetFinalVariance())), this.mEmitterShape = d, this.mEmitterShape == kEmitterShape.Cylinder && (this.mEmitterWidthInner /= 100, this.mEmitterHeightInner /= 100, this.mEmitterDepthInner /= 100), this.mAppearanceFile != null && this.mAppearanceFile.length > 0 && (this.mTextureID = Sprite.initTextureFromFile("Particles", this.mAppearanceFile, bindSelf(function (a, b) {
                    this.mTextureWidth = a, this.mTextureHeight = b
                }, this))), b.children().first() == null && (this.mbEmitterEnabled = !1);
                for (var h = b.children().first(); h.length > 0; h = h.next()) {
                    var i = Preloader.dependOn(this, new a);
                    i.Load(h), this.mParticleClassList.push(i)
                }
                c()
            }, GetTextureID: function () {
                return this.mTextureID
            }, GetNumChildren: function () {
                return this.mParticleClassList.length
            }, GetChildParticleClass: function (a) {
                return console.assert(a < this.mParticleClassList.length, "Invalid child particle class index."), this.mParticleClassList[a]
            }, GetLifetime: function () {
                return this.mLifetime
            }, GetPeriod: function () {
                return this.mPeriod
            }, GetIsPeriodEnabled: function () {
                return this.mPeriod.GetValue() > kPrecisionErrorCorrection
            }, GetIsInfiniteLifetime: function () {
                return this.mbIsInfiniteLifetime
            }, GetOffsetX: function () {
                return this.mOffsetX
            }, GetOffsetY: function () {
                return this.mOffsetY
            }, GetOffsetZ: function () {
                return this.mOffsetZ
            }, GetCoordinateSystem: function () {
                return this.mCoordinateSystem
            }, GetYaw: function () {
                return this.mYaw
            }, GetPitch: function () {
                return this.mPitch
            }, GetRoll: function () {
                return this.mRoll
            }, GetTilt: function () {
                return this.mTilt
            }, GetIsVelocityBasedTilt: function () {
                return this.mbIsVelocityBasedTilt
            }, GetGraphicsEnabled: function () {
                return this.mbGraphicsEnabled
            }, GetUniformScaling: function () {
                return this.mbUniformScaling
            }, GetAnchor: function () {
                return this.mAnchor
            }, GetBlendState: function () {
                return this.mBlendState
            }, GetColorCycle: function () {
                return this.mColorCycle
            }, GetDistortion: function () {
                return this.mbDistortion
            }, GetNumEmitterRevolutions: function () {
                return this.mNumEmitterRevolutions
            }, GetScaleX: function () {
                return this.mScaleX
            }, GetScaleY: function () {
                return this.mScaleY
            }, GetTexCoordU: function () {
                return this.mTexCoordU
            }, GetTexCoordV: function () {
                return this.mTexCoordV
            }, GetEmitterEnabled: function () {
                return this.mbEmitterEnabled
            }, GetRandomizeVelocityPerParticleInstance: function () {
                return this.mbRandomizeVelocityPerParticleInstance
            }, GetEmitUponDeath: function () {
                return this.mbEmitUponDeath & this.mbEmitterEnabled
            }, GetEmitterInterval: function () {
                return this.mEmitterInterval
            }, GetEmitterShape: function () {
                return this.mEmitterShape
            }, GetEmitterWidthInner: function () {
                return this.mEmitterWidthInner
            }, GetEmitterWidthOuter: function () {
                return this.mEmitterWidthOuter
            }, GetEmitterHeightInner: function () {
                return this.mEmitterHeightInner
            }, GetEmitterHeightOuter: function () {
                return this.mEmitterHeightOuter
            }, GetEmitterDepthInner: function () {
                return this.mEmitterDepthInner
            }, GetEmitterDepthOuter: function () {
                return this.mEmitterDepthOuter
            }, GetEmitterSpawnNumber: function () {
                return this.mEmitterSpawnNumber
            }, GetEmitterVelocity: function () {
                return this.mEmitterVelocity
            }, GetEmitterSpawnDelay: function () {
                return this.mEmitterSpawnDelay
            }, GetAerodynamics: function () {
                return this.mAerodynamics
            }, GetBounce: function () {
                return this.mBounce
            }, GetDamping: function () {
                return this.mDamping
            }, GetFriction: function () {
                return this.mFriction
            }, GetMass: function () {
                return this.mMass
            }, GetApplyRandomVelocity: function () {
                return this.mbApplyRandomVelocity
            }, GetRandomDirectionX: function () {
                return this.mRandomDirectionX
            }, GetRandomDirectionY: function () {
                return this.mRandomDirectionY
            }, GetRandomDirectionZ: function () {
                return this.mRandomDirectionZ
            }, GetRandomInterval: function () {
                return this.mRandomInterval
            }, GetRandomPauseInterval: function () {
                return this.mRandomPauseInterval
            }, GetSpinAroundCenter: function () {
                return this.mSpinAroundCenter
            }, GetSpinAroundPivot: function () {
                return this.mSpinAroundPivot
            }, GetCollidesWithTerrain: function () {
                return this.mbCollidesWithTerrain
            }, GetFixedSampling: function () {
                return this.mbFixedSampling
            }, GetSoundEffect: function () {
                return this.mSoundEffect
            }
        }, "ParticleClass");
        this.ParticleClass = a, Preloader.initialize("graphics/particleclass.js")
    }), Preloader.include(["graphics/particleclass.js"], function () {
        var a = Class.extend({
            init: function () {
                this.mParticleClass = null, this.mFilename = null
            }, destroy: function () {
                this.mParticleClass.destroy(), this.mParticleClass = null, this.mFilename = null
            }, Load: function (a, b) {
                b && (this.onload = function () {
                    b(!0), delete this.onload
                });
                var c = Preloader.dependOn(this);
                Preloader.loadText(a, function (b) {
                    var d = window.jQuery(b), e = d;
                    this.mFilename = a.match(/\/([^\/]+)\..*$/)[1];
                    for (var f = e.children().first(); f.length > 0; f = f.next())
                        console.assert(this.mParticleClass === null, "There can only be one root particle class."), this.mParticleClass = Preloader.dependOn(this, new ParticleClass), this.mParticleClass.Load(f);
                    c()
                }, this)
            }, GetFilename: function () {
                return this.mFilename
            }, GetParticleClass: function () {
                return this.mParticleClass
            }
        }, "ParticleSystemExClass");
        this.ParticleSystemExClass = a, Preloader.initialize("graphics/particlesystemexclass.js")
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function (a, b, c) {
                this.mYaw = a, this.mPitch = b, this.mRoll = c
            }, equals: function (a) {
                return this.mYaw == a.mYaw && this.mPitch == a.mPitch && this.mRoll == a.mRoll
            }, notEquals: function (a) {
                return this.mYaw != a.mYaw || this.mPitch != a.mPitch || this.mRoll != a.mRoll
            }, add: function (b) {
                return new a(this.mYaw + b.mYaw, this.mPitch + b.mPitch, this.mRoll + b.mRoll)
            }, sub: function (b) {
                return new a(this.mYaw - b.mYaw, this.mPitch - b.mPitch, this.mRoll - b.mRoll)
            }, mul: function (b) {
                return new a(b * this.mYaw, b * this.mPitch, b * this.mRoll)
            }, negate: function () {
                return new a(-this.mYaw, -this.mPitch, -this.mRoll)
            }, GetYaw: function () {
                return this.mYaw
            }, GetPitch: function () {
                return this.mPitch
            }, GetRoll: function () {
                return this.mRoll
            }, Set: function (a, b, c) {
                this.mYaw = a, this.mPitch = b, this.mRoll = c
            }, AddYaw: function (a) {
                this.mYaw += a
            }, AddPitch: function (a) {
                this.mPitch += a
            }, AddRoll: function (a) {
                this.mRoll += a
            }, SetYaw: function (a) {
                this.mYaw = a
            }, SetPitch: function (a) {
                this.mPitch = a
            }, SetRoll: function (a) {
                this.mRoll = a
            }
        }, "Orientation");
        window.Orientation = a, Preloader.initialize("utilities/orientation.js")
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function (a) {
                this.type = a, this.objects = [], this.count = 0
            }, NewObject: function () {
                return this.count < this.objects.length ? this.objects[this.count++] : (this.objects.push(new this.type), this.objects[this.count++])
            }, DeleteObject: function (a) {
                var b = this.objects.indexOf(a), c = this.objects[b];
                this.objects[b] = this.objects[this.count - 1], this.objects[this.count - 1] = c, this.count--
            }, ClearPool: function () {
                return !0
            }, ValidatePool: function () {
                var a = [];
                for (var b = this.objects.length - 1; b >= 0; b--)
                    this.objects[b]._guid || (this.objects[b]._guid = guid()), a.containsObject(this.objects[b]._guid) || a.push(this.objects[b]._guid);
                return a.length == this.objects.length
            }
        }, "MemoryPool");
        window.MemoryPool = a, Preloader.initialize("utilities/memorypool.js")
    }), Preloader.include(["glMatrix0.9.5.min.js", "core/eaglview.js", "utilities/fileutilities.js"], function () {
        function c() {
            var a = Date.now(), b = setInterval(bindSelf(function () {
                var c = window.jQuery("canvas"), d;
                if (c[0])
                    try {
                        d = c[0].getContext("experimental-webgl")
                    } catch (e) {
                        alert("failed to create glContext")
                    }
                else {
                    window.jQuery(document.body).html('<canvas id="webgl" width="1024" height="768"></canvas>'), c = window.jQuery("canvas#webgl");
                    try {
                        d = c[0].getContext("experimental-webgl")
                    } catch (e) {
                        alert("failed to create glContext")
                    }
                }
                d ? (this.canvas = c, this.gl = d, window.gl = d, clearInterval(b), this.oninit && this.oninit.call(this)) : Date.now() - a > 1e3 && (showPopup({ elm: $("#webgl-warning"), shadow: $("#shadow-popup") }), clearInterval(b), this.oninit && this.oninit.call(this))
            }, this), 50)
        }
        function d(a) {
            this.oninit = function () {
                var b = this.canvas;
                gl.viewportWidth = b.width(), gl.viewportHeight = b.height(), EAGLView.sScreenDimensions.width = b.width(), EAGLView.sScreenDimensions.height = b.height(), EAGLView.sVirtualScreenDimensions.width = EAGLView.sScreenDimensions.width, EAGLView.sVirtualScreenDimensions.height = EAGLView.sScreenDimensions.height;
                var c = this.projectionMatrix = mat4.create(), d = gl.viewportWidth / 2, e = gl.viewportHeight / 2;
                mat4.identity(c), a.call(this)
            }, c.call(this), this.vertexStreamData = [], this.buffers = {}, this.matrix = mat4.create(), mat4.identity(this.matrix), this.matrixStack = [this.matrix], this.shaderPrograms = new Array(kProgramID.Count), this.shaderAttributes = [], this.shaderUniforms = []
        }
        var a = null;
        getCallLine = function () {
            var a = [], b = null;
            try {
                new _
            } catch (c) {
                b = c.stack.substring(c.stack.indexOf("at", c.stack.indexOf("at", c.stack.indexOf("at", c.stack.indexOf("at") + 1) + 1) + 1)).match(/(\w+:\/\/.*)\)/)[1]
            }
            return b
        }, printError = function () {
            var a = gl.getError();
            if (a)
                for (var b in gl)
                    if (gl[b] == a) {
                        var c = [], d = null;
                        try {
                            new _
                        } catch (e) {
                            d = e.stack.substring(e.stack.indexOf("at", e.stack.indexOf("at", e.stack.indexOf("at", e.stack.indexOf("at") + 1) + 1) + 1)).match(/(\w+:\/\/.*)\)/)[1]
                        }
                        console.error(b, arguments, d)
                    }
            return a
        };
        var b = Class.extend({
            init: function (a, b, c, d) {
                this.r = a == undefined ? 255 : a, this.g = b == undefined ? 255 : b, this.b = c == undefined ? 255 : c, this.a = d == undefined ? 255 : d
            }, copy: function () {
                return new b(this.r, this.g, this.b, this.a)
            }, mul: function (a) {
                var c = this, d = MIN(c.r * a, 255), e = MIN(c.g * a, 255), f = MIN(c.b * a, 255), g = MIN(c.a * a, 255);
                return b(d, e, f, g)
            }, div: function (a) {
                var c = this, d = c.r / a, e = c.g / a, f = c.b / a, g = c.a / a;
                return b(d, e, f, g)
            }, mulInternal: function (a) {
                return this.r = MIN(this.r * a, 255), this.g = MIN(this.g * a, 255), this.b = MIN(this.b * a, 255), this.a = MIN(this.a * a, 255), this
            }, addInternal: function (a) {
                return this.r = MIN(this.r + a.r, 255), this.g = MIN(this.g + a.g, 255), this.b = MIN(this.b + a.b, 255), this.a = MIN(this.a + a.a, 255), this
            }, subInternal: function (a) {
                return this.r = MAX(this.r - a.r, 0), this.g = MAX(this.g - a.g, 0), this.b = MAX(this.b - a.b, 0), this.a = MAX(this.a - a.a, 0), this
            }, divInternal: function (a) {
                return this.r = this.r / a, this.g = this.g / a, this.b = this.b / a, this.a = this.a / a, this
            }, GetRed: function () {
                return this.r
            }, GetGreen: function () {
                return this.g
            }, GetBlue: function () {
                return this.b
            }, GetAlpha: function () {
                return this.a
            }, SetRed: function (a) {
                this.r = a
            }, SetGreen: function (a) {
                this.g = a
            }, SetBlue: function (a) {
                this.b = a
            }, SetAlpha: function (a) {
                this.a = a
            }
        });
        b.parse = function (a, c) {
            var d = parseInt(a, 16);
            return c = c || new b, c.r = a >> 24 & 255, c.g = a >> 16 & 255, c.b = a >> 8 & 255, c.a = a & 255, c
        };
        var e = window.kBlendState = d.kBlendState = d.BlendState = { None: 0, Overwrite: 1, Alpha: 2, Multiply: 3, Add: 4, AlphaAdd: 5, Count: 6 }, f = window.kFlexibleVertexFormat = d.FlexibleVertexFormat = { None: 0, Position: 1, Color: 2, TexCoords: 4, Count: 3 };
        kProgramID = { Default: 1, Distortion: 1, Textureless: 2, ColorAdditive: 3, Count: 4 };
        var g = { Position: "aPosition", Color: "aColor", TexCoords: "aTexCoord0" }, h = { Position: 0, Color: 1, TexCoords: 2 }, i = d.ShaderConstant = { ModelViewProjectionMatrix: 0, Texture0: 1, Texture1: 2, Max: 3 }, j = { ModelViewProjectionMatrix: "uModelViewProjectionMatrix", Texture0: "uSceneTexture", Texture1: "uDistortionTexture" }, k = window.kTextureFilterType = d.kTextureFilterType = { Point: 0, Linear: 1, Anisotropic: 2, Count: 3 }, l = window.kTextureAddressMode = d.kTextureAddressMode = { Wrap: 0, Clamp: 1, Mirror: 2, Count: 3 }, m = window.kBufferTypes = d.BufferTypes = { Float: 0, Byte: 1 }, n = window.kPrimitiveType = d.kPrimitiveType = { Points: 0, TriangleStrip: 1, TriangleFan: 2, Triangles: 3, LineStrip: 4, LineLoop: 5, Lines: 6, QuadStrip: 7, Quads: 8, Polygon: 9 };
        d.getCurrentDevice = d.getRenderDevice = function (b) {
            return a === null && (a = new d(b)), a
        }, d.prototype.checkGL = function (a) {
            if (a == undefined)
                return this._checkGL;
            this._checkGL = a;
            for (var b in gl)
                if (gl[b] instanceof Function && !b.match(/^_|^getError/)) {
                    var c = "_" + b;
                    gl[c] == undefined && (gl[c] = gl[b]), gl[b] = a ? function (a, b) {
                        return function () {
                            var c = a.apply(window.gl, arguments);
                            return printError(b), c
                        }
                    }(gl[c], b) : gl[c]
                }
        }, d.prototype.destroy = function () {
            a = null, this.gl = undefined, this.canvas.parent().html(""), this.canvas = undefined, window.gl = undefined
        }, d.prototype.compileShader = function (a, b, c) {
            var d = this;
            Preloader.loadText(b, function (b) {
                var e = gl.createShader(a);
                gl.shaderSource(e, b), gl.compileShader(e), c && c.call(d, e)
            })
        }, d.prototype.combineShader = function (a, b) {
            for (var c = b.length - 1; c >= 0; c--)
                gl.attachShader(a, b[c]);
            gl.linkProgram(a), this.shaderPrograms[a.id] = a, this.shaderAttributes[a.id] = [];
            for (var c = 0; c < 3; c++)
                this.shaderAttributes[a.id].push(gl.getAttribLocation(a, g[Enum.findKey(h, c)]));
            this.shaderUniforms[a.id] = [];
            for (var c = 0; c < 3; c++)
                this.shaderUniforms[a.id].push(gl.getUniformLocation(a, j[Enum.findKey(i, c)]));
            a.isLoaded = !0, a.onload && a.onload.call(a)
        }, d.prototype.loadSingleShader = function (a) {
            var b = gl.createProgram();
            b.id = kProgramID[a];
            var c = [], d = bindSelf(function (a) {
                c.push(a), c.length >= 2 && this.combineShader(b, c)
            }, this);
            return this.compileShader(gl.VERTEX_SHADER, GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Shaders", a, "vsh", !1), d), this.compileShader(gl.FRAGMENT_SHADER, GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Shaders", a, "fsh", !1), d), b
        }, d.prototype.loadShaders = function (a) {
            var b, c, d, e;
            this.distortionShaderProgram = this.defaultShaderProgram = gl.createProgram(), this.distortionShaderProgram.id = kProgramID.Default, d = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Shaders", "Distortion", "vsh", !1), e = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Shaders", "Distortion", "fsh", !1);
            var f = function () {
                gl.attachShader(this.distortionShaderProgram, b), gl.attachShader(this.distortionShaderProgram, c), gl.linkProgram(this.distortionShaderProgram), this.shaderPositionAttribute = gl.getAttribLocation(this.distortionShaderProgram, "aPosition"), this.shaderColorAttribute = gl.getAttribLocation(this.distortionShaderProgram, "aColor"), this.shaderTexCoord0Attribute = gl.getAttribLocation(this.distortionShaderProgram, "aTexCoord0"), this.distortionUniforms = [], this.distortionUniforms[i.ModelViewProjectionMatrix] = gl.getUniformLocation(this.distortionShaderProgram, "uModelViewProjectionMatrix"), this.distortionUniforms[i.Texture0] = gl.getUniformLocation(this.distortionShaderProgram, "uSceneTexture"), this.distortionUniforms[i.Texture1] = gl.getUniformLocation(this.distortionShaderProgram, "uDistortionTexture"), this.distortionShaderProgram.onload && this.distortionShaderProgram.onload()
            }, g = this.loadSingleShader("Textureless");
            a && Preloader.dependOn(a, g), g = this.loadSingleShader("ColorAdditive"), a && Preloader.dependOn(a, g), g = this.loadSingleShader("Distortion"), a && Preloader.dependOn(a, g);
            var h = bindSelf(function () {
                this.useShaderProgram(g.id)
            }, this);
            Preloader.dependOn(h, g)
        }, d.prototype.setViewport = function (a, b, c, d) {
            gl.viewport(a, b, c, d)
        }, d.prototype.loadIdentity = function () {
            mat4.identity(this.matrixStack[this.matrixStack.length - 1])
        }, d.prototype.pushMatrix = function () {
            this.matrixStack.push(mat4.create(this.matrixStack[this.matrixStack.length - 1]))
        }, d.prototype.popMatrix = function () {
            this.matrixStack.pop()
        }, d.prototype.setOrthographicProjection = function (a, b, c, d, e, f) {
            var g = b - a, h = d - c, i = f - e, j = -(b + a) / g, k = -(d + c) / h, l = -(f + e) / i;
            this.projectionMatrix[0] = 2 / g, this.projectionMatrix[1] = 0, this.projectionMatrix[2] = 0, this.projectionMatrix[3] = 0, this.projectionMatrix[4] = 0, this.projectionMatrix[5] = 2 / h, this.projectionMatrix[6] = 0, this.projectionMatrix[7] = 0, this.projectionMatrix[8] = 0, this.projectionMatrix[9] = 0, this.projectionMatrix[10] = -2 / i, this.projectionMatrix[11] = 0, this.projectionMatrix[12] = j, this.projectionMatrix[13] = k, this.projectionMatrix[14] = l, this.projectionMatrix[15] = 1
        }, d.prototype.useShaderProgram = function (a) {
            a != this.programID && (this.programID = a, gl.useProgram(this.shaderPrograms[a]))
        }, d.prototype.translateModelViewMatrix = function (a, b, c) {
            var d = this.matrixStack[this.matrixStack.length - 1], e = d;
            mat4.translate
                (e, [a, b, c || 0])
        }, d.prototype.scaleModelViewMatrix = function (a, b, c) {
            b == undefined && (b = a, c = a), mat4.scale(this.matrixStack[this.matrixStack.length - 1], [a, b, c || 1])
        }, d.prototype.rotateModelViewMatrixByAngle = function (a, b, c, d) {
            a = DEGREES_TO_RADIANS(a);
            var e = this.matrixStack[this.matrixStack.length - 1];
            mat4.rotate(e, a, [b, c, d])
        }, d.prototype.drawPrimitiveType = function (a, b, c) {
            var d = n.TriangleStrip;
            switch (a) {
                case n.Points:
                    console.warn("Unsupported primitive type.");
                    break;
                case n.TriangleStrip:
                    d = gl.TRIANGLE_STRIP;
                    break;
                case n.TriangleFan:
                    d = gl.TRIANGLE_FAN;
                    break;
                case n.Triangles:
                    d = gl.TRIANGLES;
                    break;
                case n.LineStrip:
                    d = gl.LINE_STRIP;
                    break;
                case n.LineLoop:
                    console.warn("Unsupported primitive type.");
                    break;
                case n.Lines:
                    d = gl.LINES;
                    break;
                case n.QuadStrip:
                    console.warn("Unsupported primitive type.");
                    break;
                case n.Quads:
                    console.warn("Unsupported primitive type.");
                    break;
                case n.Polygon:
                    console.warn("Unsupported primitive type.");
                    break;
                default:
                    console.warn("Unsupported primitive type.")
            }
            var e = this.matrixStack[this.matrixStack.length - 1], f = mat4.multiply(this.projectionMatrix, e, mat4.create());
            gl.uniformMatrix4fv(this.shaderUniforms[this.programID][i.ModelViewProjectionMatrix], !1, f), gl.drawArrays(d, b, c)
        }, d.prototype.setLineWidth = function (a) {
            this.lineWidth != a && (this.lineWidth = a, gl.lineWidth(this.lineWidth))
        }, d.prototype.setVertexStreamData = function (a, b, c, d, e, g, i) {
            this.boundData != b && a !== null && (this.boundData = b, typeof a != "number" ? (gl.bindBuffer(gl.ARRAY_BUFFER, a), gl.bufferData(gl.ARRAY_BUFFER, b, gl.DYNAMIC_DRAW)) : (this.buffers[a] == undefined && (this.buffers[a] = gl.createBuffer()), gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers[a]), gl.bufferData(gl.ARRAY_BUFFER, b, gl.DYNAMIC_DRAW)));
            var j = -1;
            switch (c) {
                case f.Position:
                    j = this.shaderAttributes[this.programID][h.Position];
                    break;
                case f.Color:
                    j = this.shaderAttributes[this.programID][h.Color];
                    break;
                case f.TexCoords:
                    j = this.shaderAttributes[this.programID][h.TexCoords];
                    break;
                default:
                    console.warn("Unsupported flexible vertex format.")
            }
            j != -1 && (c == f.Color ? gl.vertexAttribPointer(j, d, e, !0, g, i) : gl.vertexAttribPointer(j, d, e, !1, g, i), gl.enableVertexAttribArray(j))
        }, d.prototype.setVertexStreamDataArrays = function () {
            for (var a = arguments.length - 1; a >= 0; a--) {
                var b = arguments[a];
                (b.format & f.Position) != 0 && this.setVertexStreamData(d.BufferTypes.Float, b, d.FlexibleVertexFormat.Position, b.positionElements, gl.FLOAT, b.packedElements * b.numBytes, b.positionOffset * b.numBytes), (b.format & f.TexCoords) != 0 && this.setVertexStreamData(d.BufferTypes.Float, b, d.FlexibleVertexFormat.TexCoords, b.texcoordElements, gl.FLOAT, b.packedElements * b.numBytes, b.texcoordOffset * b.numBytes), (b.format & f.Color) != 0 && this.setVertexStreamData(d.BufferTypes.Byte, b, d.FlexibleVertexFormat.Color, b.colorElements, gl.UNSIGNED_BYTE, b.packedElements * b.numBytes, b.colorOffset * b.numBytes)
            }
        }, d.prototype.setBlendState = function (a) {
            if (this.blendState != a) {
                this.blendState = a;
                var b = !0;
                switch (a) {
                    case e.None:
                        b = !1;
                        break;
                    case e.AlphaAdd:
                        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
                        break;
                    case e.Alpha:
                        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
                        break;
                    case e.Multiply:
                        gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
                        break;
                    case e.Add:
                        gl.blendFunc(gl.ONE, gl.ONE);
                        break;
                    default:
                        console.warn("Unsupported blend state specified. Disabling blending."), b = !1
                }
                this.enableBlending != b && (this.enableBlending = b, this.enableBlending ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND))
            }
        }, d.prototype.setTextureWithID = function (a, b) {
            b === undefined ? this.textureID != a && (this.textureID = a, gl.bindTexture(gl.TEXTURE_2D, a)) : (gl.activeTexture(gl.TEXTURE1), gl.bindTexture(gl.TEXTURE_2D, b), this.setTextureFilteringMode(k.Linear), gl.activeTexture(gl.TEXTURE0))
        }, d.prototype.setTextureFilteringMode = function (a) {
            console.assert(a >= 0 && a < k.Count, "Invalid texture filter type specified.");
            if (this.textureFilterType != a) {
                this.textureFilterType = a;
                var b;
                switch (a) {
                    case k.Point:
                        b = gl.NEAREST;
                        break;
                    case k.Linear:
                        b = gl.LINEAR;
                        break;
                    default:
                        console.warn("Unsupported texture filter type requested. Defaulting to point filtering."), b = gl.NEAREST
                }
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, b), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, b)
            }
        }, d.prototype.setTextureAddressingMode = function (a) {
            console.assert(a >= 0 && a < l.Count, "Invalid texture addressing mode specified.");
            var b;
            switch (a) {
                case l.Clamp:
                    b = gl.CLAMP_TO_EDGE;
                    break;
                case l.Wrap:
                    b = gl.REPEAT;
                    break;
                default:
                    console.warn("Unsupported texture filter type requested. Defaulting to clamp addressing."), b = gl.CLAMP_TO_EDGE
            }
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, b), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, b)
        }, d.createVertexArray = function (a, b) {
            var c = new Float32Array(a * 5);
            c.format = f.Position, c.numBytes = 4, c.packedElements = 3, c.positionElements = 3, c.positionOffset = 0;
            if (b != undefined && b instanceof Array)
                if (b.length == 3)
                    for (var d = c.length - 1; d >= 0; d--)
                        c[d] = b[d % 3];
                else
                    for (var d = c.length - 1; d >= 0; d--)
                        c[d] = b[d];
            return c
        }, d.createVertexTexCoordArray = function (a, b, c) {
            var d = new Float32Array(a * 5);
            d.format = f.Position | f.TexCoords, d.numBytes = 4, d.packedElements = 5, d.positionElements = 3, d.texcoordElements = 2, d.positionOffset = 0, d.texcoordOffset = 3;
            if (b != undefined && b instanceof Array)
                if (b.length == 3)
                    for (var e = d.length - 1; e >= 0; e--) {
                        if (e % 5 >= 3)
                            continue;
                        d[e] = b[e % 3]
                    }
                else
                    for (var e = d.length - 1; e >= 0; e--) {
                        if (e % 5 >= 3)
                            continue;
                        d[e] = b[Math.floor(e / 5) * 3 + e % 5]
                    }
            if (c != undefined && c instanceof Array)
                if (c.length == 2)
                    for (var e = d.length - 1; e >= 0; e--) {
                        if (e % 5 <= 2)
                            continue;
                        d[e] = c[e % 5 - 3]
                    }
                else
                    for (var e = d.length - 1; e >= 0; e--) {
                        if (e % 5 <= 2)
                            continue;
                        d[e] = c[Math.floor(e / 5) * 2 + (e % 5 - 3)]
                    }
            return d
        }, d.createColorArray = function (a, c) {
            var d = new Uint8Array(a * 4);
            d.format = f.Color, d.numBytes = 1, d.packedElements = 0, d.colorElements = 4, d.colorOffset = 0;
            if (c != undefined)
                if (c instanceof b)
                    for (var e = a - 1; e >= 0; e--)
                        d[e * 4 + 0] = c.r, d[e * 4 + 1] = c.g, d[e * 4 + 2] = c.b, d[e * 4 + 3] = c.a;
                else
                    for (var e = d.length - 1; e >= 0; e--)
                        d[e] = c;
            return d
        }, this.Color = b, this.RenderDevice = d, d.getCurrentDevice(function () {
            this.loadShaders(function () {
                Preloader.initialize("graphics/renderdevice.js")
            })
        })
    }), Preloader.include(["utilities/defines.js", "utilities/vector.js", "utilities/fileutilities.js", "utilities/mathutilities.js", "utilities/nextstep/scanner.js", "graphics/renderdevice.js"], function () {
        var a = Math.pow(2, 32), b = { Automatic: 0, RGBA8888: 1, RGBA4444: 2, RGB565: 3, A8: 4 }, c = { None: 0, Horizontal: 1, Vertical: 2 };
        CORRECT_U = function (a, b) {
            return b
        }, CORRECT_V = function (a, b) {
            return b
        };
        var d = Class.extend({
            init: function () {
                this.posX = 0, this.posY = 0, this.orientation = 0
            }
        }), e = Class.extend({
            init: function () {
                this.data = null, this.pixelFormat = b.RGBA4444, this.width = 0, this.height = 0
            }
        }), f = Class.extend({
            init: function () {
                this.frameList = [], this.interval = .033, this.maxFrameWidth = 0, this.maxFrameHeight = 0
            }, destroy: function () {
            }
        }), g = Class.extend({
            init: function () {
                this.tilePosLeft = 0, this.tilePosRight = 0, this.tilePosTop = 0, this.tilePosBottom = 0, this.textureIndex = -1, this.tileWidth = 0, this.tileHeight = 0, this.textureFilename = null, this.tagPointList = []
            }, destroy: function () {
            }
        }), h = Class.extend({
            init: function (a, b) {
                this.m_textureId = 0, this.m_texWidth = 0, this.m_texHeight = 0, this.m_vertices = RenderDevice.createVertexTexCoordArray(4), this.m_verticesColors = RenderDevice.createColorArray(4), b !== null && this.set(a, b)
            }, destroy: function () {
                this.m_textureId > 0 && k.destroyTexture(this.m_textureId)
            }, set: function (a, b) {
                this.m_textureId > 0 && k.destroyTexture(this.m_textureId), this.m_textureId = Preloader.dependOn(this, k.initTextureFromFile(a, b, bindSelf(function (a, b) {
                    this.m_texWidth = a, this.m_texHeight = b
                }, this))), this.m_vertices[3] = CORRECT_U(this.m_textureId, 0), this.m_vertices[4] = CORRECT_V(this.m_textureId, 0), this.m_vertices[0] = -1, this.m_vertices[1] = -1, this.m_vertices[8] = CORRECT_U(this.m_textureId, 1), this.m_vertices[9] = CORRECT_V(this.m_textureId, 0), this.m_vertices[5] = 1, this.m_vertices[6] = -1, this.m_vertices[13] = CORRECT_U(this.m_textureId, 0), this.m_vertices[14] = CORRECT_V(this.m_textureId, 1), this.m_vertices[10] = -1, this.m_vertices[11] = 1, this.m_vertices[18] = CORRECT_U(this.m_textureId, 1), this.m_vertices[19] = CORRECT_V(this.m_textureId, 1), this.m_vertices[15] = 1, this.m_vertices[16] = 1;
                for (var c = 0; c < 4; c++)
                    this.m_verticesColors[c * 4 + 0] = 255, this.m_verticesColors[c * 4 + 1] = 255, this.m_verticesColors[c * 4 + 2] = 255, this.m_verticesColors[c * 4 + 3] = 255, this.m_vertices[c * 5 + 2] = 0
            }, render: function (a, b) {
                console.assert(this.m_textureId > 0), this.m_vertices[0] = a - this.m_texWidth / 2, this.m_vertices[1] = b - this.m_texHeight / 2, this.m_vertices[5] = a + this.m_texWidth / 2, this.m_vertices[6] = b - this.m_texHeight / 2, this.m_vertices[10] = a - this.m_texWidth / 2, this.m_vertices[11] = b + this.m_texHeight / 2, this.m_vertices[15] = a + this.m_texWidth / 2, this.m_vertices[16] = b + this.m_texHeight / 2;
                var c = RenderDevice.getRenderDevice();
                c.setTextureWithID(this.m_textureId), c.setTextureFilteringMode(kTextureFilterType.Linear), c.setTextureAddressingMode(kTextureAddressMode.Clamp), c.setBlendState(kBlendState.Alpha), c.setVertexStreamDataArrays(this.m_vertices, this.m_verticesColors), c.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)
            }, getTexWidth: function () {
                return this.m_texWidth
            }, getTexHeight: function () {
                return this.m_texHeight
            }
        }, "SimpleSprite"), i = "asc", j = 0, k = Class.extend({
            init: function (a, b) {
                this.tagPointNameHash = {}, this.animationHash = {}, this.textureIDList = [], this.boundsLeft = 0, this.boundsTop = 0, this.boundsRight = 0, this.boundsBottom = 0, this.anchorTagID = -1, this.spriteFilename = b;
                var c = null, d = b.substring(0, b.length - i.length - 1);
                return c = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE(a, d, i, !1), c !== null && this.loadFromFile(a, c), j++, this
            }, destroy: function () {
                j--;
                var a = this.textureIDList, b = a.length;
                for (var c = 0; c < b; c++) {
                    var d = a[c];
                    k.destroyTexture(d)
                }
            }, doesContainAnimation: function (a) {
                return Boolean(this.animationHash[a])
            }, getTagPointPosRelativeToAnchor: function (a, b, c, d) {
                var e = this.animationHash[b];
                if (!e)
                    return console.info("Tag point " + a + " is not defined for animation '" + b + "'"), !1;
                var f = e.frameList;
                if (!f)
                    return console.info("Tag point " + a + " is not defined for animation '" + b + "'"), !1;
                c %= f.length;
                var g = f[c], h = this.tagPointNameHash, i = h[a], j = i != undefined ? i : -1;
                if (j >= 0) {
                    console.assert(j >= 0 && j < g.tagPointList.length, "Invalid tag point ID.");
                    var k = g.tagPointList[j], l = g.tagPointList[this.anchorTagID];
                    d((k.posX - l.posX) * g.tileWidth, (k.posY - l.posY) * g.tileHeight)
                } else
                    d(0, 0);
                return !0
            }, getAxisAlignedBoundingBox: function (a, b, d, e, f, g, h, i) {
                var j = d.tileWidth, k = d.tileHeight;
                h != 1 && (j *= h, k *= h);
                var l, m;
                if (this.anchorTagID >= 0) {
                    console.assert(this.anchorTagID >= 0 && this.anchorTagID < d.tagPointList.length, "Invalid tag point ID.");
                    var n = d.tagPointList[this.anchorTagID];
                    l = n.posX, m = n.posY;
                    if (IS_ZERO(g))
                        i == c.None ? a.x = e - l * j : a.x = e - (1 - l) * j, a.y = f - m * k, b.x = a.x + j, b.y = a.y + k;
                    else {
                        var o = new Array(4);
                        for (var p = 0; p < 4; p++)
                            o[p] = new Vector2;
                        i == c.None ? o[2].x = o[0].x = -(l * j) : o[2].x = o[0].x = -((1 - l) * j), o[1].y = o[0].y = -(m * k), o[3].x = o[1].x = o[0].x + j, o[3].y = o[2].y = o[0].y + k;
                        var q = cosf(g), r = sinf(g);
                        a.x = a.y = FLT_MAX, b.x = b.y = -FLT_MAX;
                        for (var s = 0; s < 4; s++) {
                            var t = o[s].x;
                            o[s].x = e + q * o[s].x - r * o[s].y, o[s].y = f + r * t + q * o[s].y, o[s].x < a.x && (a.x = o[s].x), o[s].x > b.x && (b.x = o[s].x), o[s].y < a.y && (a.y = o[s].y), o[s].y > b.y && (b.y = o[s].y)
                        }
                    }
                } else
                    a.x = e - .5 * j, a.y = f - .5 * k, b.x = a.x + j, b.y = a.y + k
            }, getAnimationFrame: function (a, b) {
                b = b || 0;
                var c = this.animationHash[a];
                return console.assert(c !== null && b < c.frameList.length), c.frameList[b]
            }, loadFromFile: function (a, b) {
                var c = /[ \t\n\r]/g;
                this.dependencies = 1, Preloader.loadText(b, function (b) {
                    var e = new Scanner(b), h;
                    e.scanInt(function (a) {
                        h = a
                    });
                    if (h == 36658) {
                        var i;
                        e.scanInt(function (a) {
                            i = a
                        });
                        var j;
                        e.scanInt(function (a) {
                            j = a
                        });
                        var l;
                        for (l = 0; l < j; l++) {
                            var m;
                            e.scanInt(function (a) {
                                m = a
                            });
                            var n;
                            e.scanUpToCharactersFromSet(c, function (a) {
                                n = a
                            }), this.tagPointNameHash[n] = m
                        }
                        var o = this.tagPointNameHash, p = this.tagPointNameHash.anchor;
                        this.anchorTagID = p != undefined ? p : -1;
                        var q, r, s, t, u = -1, v = -1, w = -1, x = 3 + j;
                        while (!e.isAtEnd()) {
                            e.scanUpToCharactersFromSet(c, function (a) {
                                s = a
                            });
                            if (s == "anim")
                                e.scanUpToCharactersFromSet(c, function (a) {
                                    q = a
                                }), e.scanInt(function (a) {
                                    w = a
                                }), x++;
                            else if (s == "file") {
                                e.scanUpToCharactersFromSet(c, function (a) {
                                    r = a
                                }), e.scanInt(function (a) {
                                    u = a
                                }), e.scanInt(function (a) {
                                    v = a
                                });
                                var y;
                                y = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE(a, r.match(/(.*)\..*/)[1], r.match(/.*\.(.*)/)[1]), this.dependencies++;
                                var z = this, A = k.initTextureFromFile(a, r, function (a, b) {
                                    z.dependencies--, z.dependencies <= 0 && z.onload ? (z.onload.call(z), z.isLoaded = !0) : z.dependencies <= 0 && (z.isLoaded = !0)
                                });
                                this.textureIDList.push(A), x++
                            } else {
                                t = new g, t.textureFilename = r, t.textureIndex = this.textureIDList.length - 1;
                                var B = this.animationHash[q];
                                B === undefined && (console.assert(w >= 0, "Invalid animation interval defined for animation " + q + "."), B = new f, B.interval = w / 1e3, this.animationHash[q] = B);
                                var C, D, E, F;
                                e.scanInt(function (a) {
                                    C = a
                                }), t.tilePosLeft = C / u, e.scanInt(function (a) {
                                    D = a
                                }), t.tilePosTop = D / v, e.scanInt(function (a) {
                                    E = a
                                }), t.tileWidth = E, t.tilePosRight = t.tilePosLeft + E / u, e.scanInt(function (a) {
                                    F = a
                                }), t.tileHeight = F, t.tilePosBottom = t.tilePosTop + F / v, e.scanInt(function (a) {
                                    j = a
                                }), B.maxFrameWidth = Math.max(t.tileWidth, B.maxFrameWidth), B.maxFrameHeight = Math.max(t.tileHeight, B.maxFrameHeight);
                                var G = -1, H = -1;
                                for (l = 0; l < j; l++) {
                                    var I;
                                    e.scanInt(function (a) {
                                        I = a
                                    });
                                    var J = new d;
                                    e.scanInt(function (a) {
                                        I = a
                                    }), J.posX = I / E, l == this.anchorTagID && (G = I), e.scanInt(function (a) {
                                        I = a
                                    }), J.posY = I / F, l == this.anchorTagID && (H = I);
                                    var K;
                                    e.scanFloat(function (a) {
                                        K = a
                                    }), J.orientation = K, t.tagPointList.push(J)
                                }
                                this.anchorTagID < 0 && (G = t.tileWidth / 2, H = t.tileHeight / 2), this.boundsLeft = Math.min(-G, this.boundsLeft), this.boundsRight = Math.max(-G + E, this.boundsRight), this.boundsTop = Math.min(-H, this.boundsTop), this.boundsBottom = Math.max(-H + F, this.boundsBottom), B.frameList.push(t), x += 1 + j
                            }
                        }
                    }
                    this.dependencies--, this.dependencies <= 0 && this.onload ? (this.onload.call(this), this.isLoaded = !0) : this.dependencies <= 0 && (this.isLoaded = !0)
                }, this)
            }, render: function (a, b, d, e, f, g, h) {
                var i = a.spriteVertices !== undefined, j = new Float32Array(20), k = RenderDevice.createColorArray(4, b), l = a.tileWidth, m = a.tileHeight;
                g != 1 && (l *= g, m *= g);
                var n, o;
                if (this.anchorTagID >= 0) {
                    console.assert(this.anchorTagID >= 0 && this.anchorTagID < a.tagPointList.length, "Invalid tag point ID.");
                    var p = a.tagPointList[this.anchorTagID];
                    n = p.posX, o = p.posY;
                    if (IS_ZERO(f))
                        h == c.None ? j[10] = j[0] = d - n * l : j[10] = j[0] = d - (1 - n) * l, j[6] = j[1] = e - o * m, j[15] = j[5] = j[0] + l, j[16] = j[11] = j[1] + m;
                    else {
                        h == c.None ? j[10] = j[0] = -(n * l) : j[10] = j[0] = -((1 - n) * l), j[6] = j[1] = -(o * m), j[15] = j[5] = j[0] + l, j[16] = j[11] = j[1] + m;
                        var q = Math.cos(f), r = Math.sin(f);
                        for (var s = 0; s < 4; s++) {
                            var t = j[s * 5 + 0];
                            j[s * 5 + 0] = d + q * j[s * 5 + 0] - r * j[s * 5 + 1], j[s * 5 + 1] = e + r * t + q * j[s * 5 + 1]
                        }
                    }
                } else
                    j[10] = j[0] = d - .5 * l, j[6] = j[1] = e - .5 * m, j[15] = j[5] = j[0] + l, j[16] = j[11] = j[1] + m;
                console.assert(a.textureIndex >= 0, "Invalid texture ID.");
                var u = this.textureIDList[a.textureIndex], v = u;
                h == c.None ? (j[13] = j[3] = CORRECT_U(v, a.tilePosLeft), j[9] = j[4] = CORRECT_V(v, a.tilePosTop), j[18] = j[8] = CORRECT_U(v, a.tilePosRight), j[19] = j[14] = CORRECT_V(v, a.tilePosBottom)) : (j[13] = j[3] = CORRECT_U(v, a.tilePosRight), j[9] = j[4] = CORRECT_V(v, a.tilePosTop), j[18] = j[8] = CORRECT_U(v, a.tilePosLeft), j[19] = j[14] = CORRECT_V(v, a.tilePosBottom));
                var w = RenderDevice.getCurrentDevice();
                w.setVertexStreamData(RenderDevice.BufferTypes.Float, j, RenderDevice.FlexibleVertexFormat.Position, 3, gl.FLOAT, 20, 0), w.setVertexStreamData(RenderDevice.BufferTypes.Float, j, RenderDevice.FlexibleVertexFormat.TexCoords, 2, gl.FLOAT, 20, 12), w.setVertexStreamData(RenderDevice.BufferTypes.Byte, k, RenderDevice.FlexibleVertexFormat.Color, 4, gl.UNSIGNED_BYTE, 0, 0), w.setBlendState(RenderDevice.kBlendState.Alpha), w.setTextureWithID(v), w.setTextureFilteringMode(RenderDevice.kTextureFilterType.Linear), w.drawPrimitiveType(RenderDevice.kPrimitiveType.TriangleStrip, 0, 4)
            }, hasTagPoint: function (a, b) {
                var c = this.animationHash[b];
                if (c == undefined || c.frameList === null)
                    return !1;
                var d = this.tagPointNameHash[a];
                return d != undefined && d >= 0
            }, GetTileSpacingFromAnchorToTileEdge: function (a, b, d, e) {
                var f = 0;
                if (this.anchorTagID >= 0) {
                    console.assert(this.anchorTagID >= 0 && this.anchorTagID < a.tagPointList.length, "Invalid tag point ID."), anchorTag = a.tagPointList[this.anchorTagID];
                    if (d == c.None)
                        switch (e) {
                            case kDirection.West:
                                f = anchorTag.posX * a.tileWidth;
                                break;
                            case kDirection.East:
                                f = a.tileWidth - anchorTag.posX * a.tileWidth;
                                break;
                            case kDirection.North:
                                f = anchorTag.posY * a.tileHeight;
                                break;
                            case kDirection.South:
                                f = a.tileHeight - anchorTag.posY * a.tileHeight;
                                break;
                            default:
                                console.warn("Invalid tile edge specified.")
                        }
                    else if (d == c.Horizontal)
                        switch (e) {
                            case kDirection.East:
                                f = anchorTag.posX * a.tileWidth;
                                break;
                            case kDirection.West:
                                f = a.tileWidth - anchorTag.posX * a.tileWidth;
                                break;
                            case kDirection.North:
                                f = anchorTag.posY * a.tileHeight;
                                break;
                            case kDirection.South:
                                f = a.tileHeight - anchorTag.posY * a.tileHeight;
                                break;
                            default:
                                console.warn("Invalid tile edge specified.")
                        }
                    else
                        console.warn("Unsupported mirror type.")
                }
                return f * b
            }
        }, "Sprite");
        k.addTextureReference = function (b) {
            for (var c in m) {
                var d = m[c];
                if (d.getTextureID() == b)
                    return d.IncrementReferenceCount(), b
            }
            return console.assert(!1), a
        }, k.destroyTexture = function (a) {
            for (var b in m) {
                var c = m[b];
                if (c.getTextureID() == a) {
                    c.DecrementReferenceCount() <= 0 && (gl.deleteTexture(a), delete m[b]);
                    return
                }
            }
            gl.deleteTexture(a)
        }, k.initWithData = function (a, b, c) {
            var d = gl.getParameter(gl.TEXTURE_BINDING_2D);
            return gl.bindTexture(gl.TEXTURE_2D, a), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, b.data), c && gl.generateMipmap(gl.TEXTURE_2D), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.bindTexture(gl.TEXTURE_2D, d), a
        }, k.initTextureFromFile = function (a, c, d) {
            var f = "";
            a && (f += a + "/"), f += c;
            var g, h = m[f];
            if (h != undefined) {
                h.IncrementReferenceCount(), g = h.getTextureID();
                if (g.isLoaded && d)
                    d(h.getTextureWidth(), h.getTextureHeight());
                else if (d) {
                    var i = function () {
                        d(h.getTextureWidth(), h.getTextureHeight())
                    };
                    g.onloadCallbacks ? g.onloadCallbacks.push(i) : g.onloadCallbacks = [i]
                }
                return h.getTextureID()
            }
            g = gl.createTexture(), g.isLoaded = !1, h = new l(g, 0, 0), m[f] = h;
            var j = Preloader.loadImage(f, function (a) {
                var f = b.RGBA8888, i = new e;
                i.data = j, i.pixelFormat = f, i.width = j.width, i.height = j.height, h.textureWidth = j.width, h.textureHeight = j.height;
                var l = !1;
                k.initWithData(g, i, l), console.info("Loaded " + j.width + "x" + j.height + " image '" + c + "' into " + j.width + "x" + j.height + "x" + (f == b.RGBA8888 ? 32 : -1) + " texture."), g.isLoaded = !0, g.onload && g.onload.call(this), g.onloadCallbacks && (g.onloadCallbacks.forEach(function (a) {
                    a(g)
                }), g.onloadCallbacks = undefined), d && d(h.getTextureWidth(), h.getTextureHeight())
            });
            return g
        }, k.dump = function () {
            for (var a in m) {
                var b = m[a];
                gl.deleteTexture(b.getTextureID())
            }
            m = {}, console.log("dump complete")
        };
        var l = Class.extend({
            init: function (a, b, c) {
                this.textureID = a, this.textureWidth = b, this.textureHeight = c, this.referenceCount = 1
            }, getTextureID: function () {
                return this.textureID
            }, getTextureWidth: function () {
                return this.textureWidth
            }, getTextureHeight: function () {
                return this.textureHeight
            }, IncrementReferenceCount: function () {
                return ++this.referenceCount
            }, DecrementReferenceCount: function () {
                return --this.referenceCount
            }
        }), m = {};
        this.kMirrorType = c, this.Sprite = k, this.SimpleSprite = h, Preloader.initialize("graphics/sprite.js")
    }), Preloader.include(["graphics/sprite.js", "graphics/text.js"], function () {
        kTrackParentSpeed = .2, kButtonPulseSpeed = .1, kButtonPressedScale = .9, kDefaultLabelFontName = "font_dark", kButtonState = { Enabled: 0, Pressed: 1 }, kButtonAnimationType = { Translate: 0, Scale: 1 };
        var a = function (a) {
            if (a == null)
                return null;
            var b = a.indexOf(":");
            return b == -1 && (b = a.length), a.substring(0, b)
        }, b = Class.extend({
            init: function (a) {
                this.selectorName = a || ""
            }, callback: function (a, b, c) {
                a[this.selectorName] && a[this.selectorName].call(a, a, b, c)
            }
        }, "ButtonCallback");
        window.ButtonCallback = b;
        var c = Class.extend({
            init: function (c, d, e) {
                var f = Preloader.dependOn(this);
                this.name = null, this.minFadeOpacity = 0, this.isPressedUnderlay = !1, this.parent = d, this.view = e, this.centerX = 0, this.centerY = 0, this.halfWidth = 0, this.halfHeight = 0, this.currentCenterX = 0, this.currentCenterY = 0, this.trackTimer = 1, this.pressTimer = 1, this.textureID = 0, this.pressedTextureID = 0, this.disabledTextureID = 0, this.toggleTextureID = 0, this.halfHitRegionWidth = 0, this.halfHitRegionHeight = 0, this.scale = 1, this.state = kButtonState.Enabled, this.animationType = kButtonAnimationType.Translate, this.pressSelector = new b, this.releaseSelector = new b, this.enterSelector = new b, this.exitSelector = new b, this.isHidden = !1, this.isDisabled = !1, this.trackParentPos = !0, this.fadeAnimation = !1, this.translateAnimation = !0, this.scaleWhenPressed = !1, this.isToggled = !1, this.isToggleable = !1;
                var g = null, h = null, i = null, j = null, k = null, l = null, m = null, n = null, o = null, p = null, q = null, r = 0, s = 1, t = 0, u = 0;
                this.labelOffsetX = 0, this.labelOffsetY = 0;
                var v, w = kTextAlignment.Left, x = c;
                this.name = x[0].localName;
                var y = x, z = xmlAttr(this, y), A = xmlAttr(null, y);
                z("centerx", "centerX", parseFloat), z("centery", "centerY", parseFloat), z("width", "halfWidth", parseFloat), z("height", "halfHeight", parseFloat), r = A("expandHitRegion", r, parseFloat), k = A("image", k, parseString), m = A("disabledImage", m, parseString), n = A("selectionImage", n, parseString), o = A("toggleImage", o, parseString), g = A("pressSelector", g, parseString), h = A("releaseSelector", h, parseString), j = A("exitSelector", j, parseString), q = A("labelFont", q, parseString), p = A("labelText", p, parseString), t = A("labelWidth", t, parseFloat), u = A("labelHeight", u, parseFloat), z("labelOffsetX", "labelOffsetX", parseFloat), z("labelOffsetY", "labelOffsetY", parseFloat), v = new SoundEffectDefinition("clickSound", y), s = A("labelFontSize", s, parseFloat), z("minFadeOpacity", "minFadeOpacity", function (a) {
                    return Math.clamp(parseFloat(a), 0, 1)
                }), z("labelColor", "labelColor", Color.parse), w = A("labelAlignment", w, parseEnum(kTextAlignment, kTextAlignment.Center)), z("fadeAnimation", "fadeAnimation", function (a) {
                    return a == "yes"
                }), z("translateAnimation", "translateAnimation", function (a) {
                    return a == "yes"
                }), xmlBoolAttr(z, "scaleWhenPressed", "scaleWhenPressed", "yes"), z("animationType", "animationType", parseEnum(kButtonAnimationType, kButtonAnimationType.Translate)), l = A("pressedImage", l, function (a) {
                    return this.isPressedUnderlay = !1, a
                }), l = A("pressedUnderlayImage", l, function (a) {
                    return this.isPressedUnderlay = !0, a
                }), q == null ? this.labelText = new Text(Map.GetFont(kDefaultLabelFontName)) : this.labelText = new Text(Map.GetFont(q)), q = null, this.labelText.SetSize(s), this.labelText.SetAlignment(w), this.labelText.SetTextBoxSize(new Vector2(t, u)), this.labelColor = new Color, this.labelColor.r = 0, this.labelColor.g = 0, this.labelColor.b = 0, this.labelColor.a = 0, this.clickSoundEffect = v.filename != null ? new SoundEffect(v) : null, this.pressSelector.selectorName = a(g), this.releaseSelector.selectorName = a(h), this.enterSelector.selectorName = a(i), this.exitSelector.selectorName = a(j);
                var B = 0, C = 0;
                this.textureID = 0, k != null && (k.length != 0 && (this.textureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", k, bindSelf(function (a, b) {
                    B = a, C = b;
                    if (this.halfWidth <= kPrecisionErrorCorrection || this.halfHeight <= kPrecisionErrorCorrection)
                        this.halfWidth = B / EAGLView.sScreenDimensions.width, this.halfHeight = C / EAGLView.sScreenDimensions.height, this.textureID && (this.halfWidth *= .5, this.halfHeight *= .5), this.halfHitRegionWidth = r + this.halfWidth, this.halfHitRegionHeight = r + this.halfHeight
                }, this)))), k = null), this.pressedTextureID = 0, l != null && (l.length != 0 && (this.pressedTextureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", l))), l = null), this.disabledTextureID = 0, m != null && (m.length != 0 && (this.disabledTextureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", m))), m = null), this.selectionTextureID = 0, n != null && (n.length != 0 && (this.selectionTextureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", n))), n = null), this.toggleTextureID = 0, o != null && (o.length != 0 && (this.toggleTextureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", o, bindSelf(function () {
                    setTimeout(bindSelf(function () {
                        this.toggleTextureID && (this.isToggleable = !0)
                    }, this), 0)
                }, this)))), o = null), this.halfWidth *= .5, this.halfHeight *= .5, this.halfHitRegionWidth = r + this.halfWidth, this.halfHitRegionHeight = r + this.halfHeight, d ? (this.currentCenterX = d.centerX, this.currentCenterY = d.centerY) : (this.currentCenterX = this.centerX, this.currentCenterY = this.centerY);
                if (p != null) {
                    if (p.length > 0) {
                        var D = LocalizeString(p, null);
                        this.setLabel(D)
                    }
                    p = null
                }
                f()
            }, destroy: function () {
                this.labelText.destroy(), this.textureID !== 0 && Sprite.destroyTexture(this.textureID), this.pressedTextureID !== 0 && Sprite.destroyTexture(this.pressedTextureID), this.disabledTextureID !== 0 && Sprite.destroyTexture(this.disabledTextureID), this.selectionTextureID !== 0 && Sprite.destroyTexture(this.selectionTextureID), this.toggleTextureID !== 0 && Sprite.destroyTexture(this.toggleTextureID)
            }, setLabel: function (a) {
                a !== null ? (this.labelText.SetString(a), this.labelText.SetPosition(this.currentCenterX * EAGLView.sScreenDimensions.width, this.currentCenterY * EAGLView.sScreenDimensions.height), this.labelText.SetAnchor(this.labelOffsetX * EAGLView.sScreenDimensions.width, this.labelOffsetY * EAGLView.sScreenDimensions.height)) : this.labelText.SetString("")
            }, setLabelTint: function (a) {
                this.labelText.SetTint(a)
            }, loadImage: function (a) {
                this.unloadImage();
                var b = 0, c = 0;
                a && a && a.length > 0 && (this.textureID = Sprite.initTextureFromFile("UserInterface", a, bindSelf(function (a, d) {
                    b = a, c = d, this.halfWidth = b / EAGLView.sScreenDimensions.width, this.halfHeight = c / EAGLView.sScreenDimensions.height, this.halfWidth *= .5, this.halfHeight *= .5
                }, this))), this.textureID || (this.halfWidth *= .5, this.halfHeight *= .5)
            }, unloadImage: function () {
                this.textureID && (Sprite.destroyTexture(this.textureID), delete this.textureID)
            }, render: function (a) {
                if (this.isHidden || this.parent != null && this.parent.isHidden || this.fadeAnimation && IS_ZERO(this.minFadeOpacity) && this.trackTimer * 255 == 0)
                    return;
                var b = 0;
                switch (this.state) {
                    case kButtonState.Enabled:
                        this.isDisabled ? b = this.disabledTextureID : b = this.isToggled ? this.toggleTextureID : this.textureID;
                        break;
                    case kButtonState.Pressed:
                        this.pressedTextureID ? b = this.isDisabled ? 0 : this.pressedTextureID : b = this.isToggled ? this.toggleTextureID : this.textureID;
                        break;
                    default:
                        console.assert(!1)
                }
                var c = 1, d = RenderDevice.getRenderDevice();
                if (b != 0) {
                    var e = RenderDevice.createVertexTexCoordArray(4), f = RenderDevice.createColorArray(4, 255);
                    e[0] = -1, e[1] = -1, e[5] = 1, e[6] = -1, e[8] = 1, e[10] = -1, e[11] = 1, e[14] = 1, e[15] = 1, e[16] = 1, e[18] = 1, e[19] = 1;
                    var g = Math.min((this.trackTimer + this.minFadeOpacity) * 255, 255);
                    f[3] = f[7] = f[11] = f[15] = this.fadeAnimation ? g : 255, d.pushMatrix(), d.translateModelViewMatrix(this.currentCenterX * EAGLView.sScreenDimensions.width, this.currentCenterY * EAGLView.sScreenDimensions.height), this.scaleWhenPressed && (c = MIN(MAX(this.pressTimer == 0 ? 0 : logf(this.pressTimer) + 1, 0), 1) * (1 - kButtonPressedScale) + kButtonPressedScale), d.scaleModelViewMatrix(this.scale * c * this.halfWidth * EAGLView.sScreenDimensions.width, this.scale * c * this.halfHeight * EAGLView.sScreenDimensions.height), d.setTextureWithID(b), d.setTextureAddressingMode(kTextureAddressMode.Clamp), d.setTextureFilteringMode(kTextureFilterType.Linear), d.setBlendState(kBlendState.Alpha), d.setVertexStreamDataArrays(e, f), d.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), b == this.pressedTextureID && this.isPressedUnderlay && (d.setTextureWithID(this.textureID), d.setTextureFilteringMode(kTextureFilterType.Linear), d.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)), d.popMatrix()
                }
                if (this.labelText != null)
                    if (!this.translateAnimation || this.translateAnimation && this.trackTimer >= 1 - kPrecisionErrorCorrection) {
                        this.labelText.SetOpacity(this.fadeAnimation ? Math.min(this.trackTimer + this.minFadeOpacity, 1) : 1);
                        var h = 1 - (1 - c) * 2;
                        this.labelText.SetScale(h);
                        var i = this.labelText.GetAnchor();
                        this.labelText.SetAnchor(i.x, i.y * h), this.labelText.Render(a), this.labelText.SetAnchor(i.x, i.y)
                    }
                b == this.toggleTextureID && this.selectionTextureID !== 0 && (d.pushMatrix(), d.translateModelViewMatrix(this.currentCenterX * EAGLView.sScreenDimensions.width, this.currentCenterY * EAGLView.sScreenDimensions.height), this.scaleWhenPressed && (c = MIN(MAX(this.pressTimer == 0 ? 0 : logf(this.pressTimer) + 1, 0), 1) * (1 - kButtonPressedScale) + kButtonPressedScale), d.scaleModelViewMatrix(this.scale * c * this.halfWidth * EAGLView.sScreenDimensions.width, this.scale * c * this.halfHeight * EAGLView.sScreenDimensions.height), d.setTextureWithID(this.selectionTextureID), d.setBlendState(kBlendState.AlphaAdd), d.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), d.popMatrix())
            }, loadDisabledImage: function (a, b, c) {
                this.unloadDisabledImage(), b = b == undefined ? 0 : b, c = c == undefined ? 0 : c;
                var d = 0, e = 0;
                a !== null && a !== null && a.length > 0 && (this.disabledTextureID = Sprite.initTextureFromFile("UserInterface", a, bindSelf(function (a, f) {
                    d = a, e = f, b <= kPrecisionErrorCorrection || c <= kPrecisionErrorCorrection ? (this.textureID && (this.halfWidth = d / EAGLView.sScreenDimensions.width, this.halfHeight = e / EAGLView.sScreenDimensions.height), this.halfWidth *= .5, this.halfHeight *= .5) : (this.halfWidth = b, this.halfHeight = c)
                }, this))), !this.disabledTextureID && (b > kPrecisionErrorCorrection || c > kPrecisionErrorCorrection) && (this.halfWidth = b, this.halfHeight = c)
            }, unloadDisabledImage: function () {
                this.disabledTextureID && (Sprite.destroyTexture(this.disabledTextureID), delete this.disabledTextureID)
            }, update: function (a) {
                if (this.parent != null) {
                    this.parent.trackParentPos ? (this.trackTimer -= a * 1 / kTrackParentSpeed, this.trackTimer = MAX(this.trackTimer, 0)) : (this.trackTimer += a * 1 / kTrackParentSpeed, this.trackTimer = MIN(this.trackTimer, 1));
                    if (this.translateAnimation) {
                        this.trackTimer < kPrecisionErrorCorrection ? this.isHidden = !0 : this.isHidden = !1;
                        var b = this.trackTimer;
                        this.animationType == kButtonAnimationType.Translate && (b = MIN(MAX((this.trackTimer == 0 ? 0 : logf(this.trackTimer)) * .4 + 1, 0), 1)), this.currentCenterX = this.parent.centerX + this.centerX * b, this.currentCenterY = this.parent.centerY + this.centerY * b, this.animationType == kButtonAnimationType.Scale && (this.scale = this.trackTimer)
                    } else
                        this.currentCenterX = this.parent.centerX + this.centerX, this.currentCenterY = this.parent.centerY + this.centerY
                }
                this.state == kButtonState.Pressed ? (this.pressTimer -= a * 1 / kButtonPulseSpeed, this.pressTimer = MAX(this.pressTimer, 0), isNaN(this.pressTimer) && (this.pressTimer = 0)) : (this.pressTimer += a * 1 / kButtonPulseSpeed, this.pressTimer = MIN(this.pressTimer, 1), isNaN(this.pressTimer) && (this.pressTimer = 1)), this.labelText != null && (this.labelText.SetPosition(this.currentCenterX * EAGLView.sScreenDimensions.width, this.currentCenterY * EAGLView.sScreenDimensions.height), this.parent != null && this.parent.trackParentPos ? this.labelText.SetAnchor((this.parent.centerX + this.labelOffsetX) * EAGLView.sScreenDimensions.width, (this.parent.centerY + this.labelOffsetY) * EAGLView.sScreenDimensions.height) : this.labelText.SetAnchor(this.labelOffsetX * EAGLView.sScreenDimensions.width, this.labelOffsetY * EAGLView.sScreenDimensions.height))
            }, GetName: function () {
                return this.name
            }, getName: function () {
                return this.name
            }
        }, "Button");
        window.Button = c, Preloader.initialize("userinterface/button.js")
    }), Preloader.include(["userinterface/button.js"], function () {
        var a = { Landscape: 0, Portrait: 1 }, b = { Background: 0, Popup: 1, Overlay: 2 };
        kButtonPress = { Up: 0, Down: 1, Left: 2, Right: 3, Select: 4, Back: 5, Special1: 6, Special2: 7, Special3: 8, Special4: 9, Special5: 10, Special6: 11, Special7: 12, Special8: 13, Special9: 14, Special10: 15, Special11: 16, Special12: 17, Special13: 18, Special14: 19, Special15: 20 };
        var c = Class.extend({
            init: function () {
                this.name = null, this.bMirrored = !1, this.isHidden = !1, this.textureID = 0, this.halfHeight = 0, this.halfWidth = 0, this.centerY = 0, this.centerX = 0
            }, destroy: function () {
                this.textureID && Sprite.destroyTexture(this.textureID)
            }, GetName: function () {
                return this.name
            }, getName: function () {
                return this.name
            }
        }, "Overlay"), d = Class.extend({
            init: function (c, d, e, f, g) {
                this.view = d, this.formOrientation = a.Landscape, this.formType = b.Background, this.formName = f, this.centerX = .5, this.centerY = .5, this.halfWidth = 1, this.halfHeight = 1, this.shadowHalfWidth = 1, this.shadowHalfHeight = 1, this.userInterface = e, this.textureID = 0, this.shadowTextureID = 0, this.buttonCallbacks = g, this.coopStartWaveIndex = 0, this.soundVolumeUpperLeftX = 0, this.soundVolumeUpperLeftY = 0, this.soundVolumeWidth = 0, this.soundVolumeHeight = 0, this.musicVolumeUpperLeftX = 0, this.musicVolumeUpperLeftY = 0, this.musicVolumeWidth = 0, this.musicVolumeHeight = 0, this.newScoreTextPositionX = 0, this.newScoreTextPositionY = 0, this.newScoreTextSize = 0, this.textSize = 0, this.moneyPosX = 0, this.moneyPosY = 0, this.healthPosX = 0, this.healthPosY = 0, this.scorePosX = 0, this.scorePosY = 0, this.statusPosX = 0, this.statusPosY = 0, this.scorePlayerPosX = 0, this.scoreScorePosX = 0, this.scoreWavePosX = 0, this.scoreFontSize = 0, this.achievementTitleSize = 0, this.achievementTitlePosX = 0, this.achievementTitlePosY = 0, this.creditsHeadingSize = 0, this.creditsNamesSize = 0, this.creditsStartOffsetY = 0, this.activeButton = new Array(kMaxPlayers), this.pressedButton = new Array(kMaxPlayers);
                for (var h = 0; h < kMaxPlayers; h++)
                    this.activeButton[h] = null, this.pressedButton[h] = null;
                this.loadFromFile(c)
            }, destroy: function () {
                this.textureID !== 0 && Sprite.destroyTexture(this.textureID), this.shadowTextureID !== 0 && Sprite.destroyTexture(this.shadowTextureID)
            }, loadFromFile: function (d) {
                var e = this.milestone != undefined ? this.milestone : this, f = Preloader.dependOn(e);
                console.info("Loading form '%s'.", d), Preloader.loadText(d, function (d) {
                    var g = window.jQuery(d), h = g, i = null, j = null, k = g, l = xmlAttr(this, k), m = xmlAttr(null, k);
                    i = m("image", i, parseString), j = m("shadowImage", j, parseString), l("centerx", "centerX", parseFloat), l("centery", "centerY", parseFloat), l("width", "halfWidth", parseFloat), l("height", "halfHeight", parseFloat), l("shadowWidth", "shadowHalfWidth", parseFloat), l("shadowHeight", "shadowHalfHeight", parseFloat
                    ), l("orientation", "formOrientation", parseEnum(a, a.Portrait)), l("type", "formType", parseEnum(b, b.Background)), l("soundVolumeUpperLeftX", "soundVolumeUpperLeftX", parseFloat), l("soundVolumeUpperLeftY", "soundVolumeUpperLeftY", parseFloat), l("soundVolumeWidth", "soundVolumeWidth", parseFloat), l("soundVolumeHeight", "soundVolumeHeight", parseFloat), l("musicVolumeUpperLeftX", "musicVolumeUpperLeftX", parseFloat), l("musicVolumeUpperLeftY", "musicVolumeUpperLeftY", parseFloat), l("musicVolumeWidth", "musicVolumeWidth", parseFloat), l("musicVolumeHeight", "musicVolumeHeight", parseFloat), l("newScoreTextPositionX", "newScoreTextPositionX", parseFloat), l("newScoreTextPositionY", "newScoreTextPositionY", parseFloat), l("newScoreTextSize", "newScoreTextSize", parseFloat), l("textSize", "textSize", parseFloat), l("moneyPosX", "moneyPosX", parseFloat), l("moneyPosY", "moneyPosY", parseFloat), l("healthPosX", "healthPosX", parseFloat), l("healthPosY", "healthPosY", parseFloat), l("scorePosX", "scorePosX", parseFloat), l("scorePosY", "scorePosY", parseFloat), l("statusPosX", "statusPosX", parseFloat), l("statusPosY", "statusPosY", parseFloat), l("scorePlayerPosX", "scorePlayerPosX", parseFloat), l("scoreScorePosX", "scoreScorePosX", parseFloat), l("scoreWavePosX", "scoreWavePosX", parseFloat), l("scoreFontSize", "scoreFontSize", parseFloat), l("achievementTitleSize", "achievementTitleSize", parseFloat), l("achievementTitlePosX", "achievementTitlePosX", parseFloat), l("achievementTitlePosY", "achievementTitlePosY", parseFloat), l("creditsHeadingSize", "creditsHeadingSize", parseFloat), l("creditsNamesSize", "creditsNamesSize", parseFloat), l("creditsStartOffsetY", "creditsStartOffsetY", parseFloat), this.halfWidth *= .5, this.halfHeight *= .5, this.shadowHalfWidth *= .5, this.shadowHalfHeight *= .5, this.buttonList = [], this.overlayList = [];
                    for (var n = h.children().first(); n.length > 0; n = n.next())
                        if (n[0].localName == "Buttons".toLowerCase())
                            for (var o = n.children().first(); o.length > 0; o = o.next()) {
                                var p = new Button(o, null, this.view);
                                Preloader.dependOn(e, p), this.registerCallbacks(p);
                                for (var q = o.children().first(); q.length > 0; q = q.next()) {
                                    var r = new Button(q, p, this.view);
                                    Preloader.dependOn(e, r), this.registerCallbacks(r), this.buttonList.push(r)
                                }
                                this.buttonList.push(p)
                            }
                        else if (n[0].localName == "Overlays".toLowerCase())
                            for (var s = n.children().first(); s.length > 0; s = s.next()) {
                                var t = null, u = new c, v = new Color;
                                v.r = 255, v.g = 255, v.b = 255, v.a = 255, u.color = v, u.halfWidth = 0, u.halfHeight = 0, u.name = s[0].localName, u.isHidden = !1, k = s, m = xmlAttr(null, k), t = m("image", t, parseString), xmlAttr(u, k)("centerx", "centerX", parseFloat), xmlAttr(u, k)("centery", "centerY", parseFloat), xmlAttr(u, k)("width", "halfWidth", parseFloat), xmlAttr(u, k)("height", "halfHeight", parseFloat), xmlBoolAttr(xmlAttr(u, k), "mirror", "bMirrored"), xmlAttr(u, k)("isHidden", "isHidden", function (a) {
                                    return a == "yes"
                                });
                                if (t !== null) {
                                    var w, x, y = "UserInterface", z = t;
                                    u.textureID = Preloader.dependOn(e, Sprite.initTextureFromFile(y, z, bindSelf(function (a, b) {
                                        w = a, x = b;
                                        if (this.halfWidth <= kPrecisionErrorCorrection || this.halfHeight <= kPrecisionErrorCorrection)
                                            this.halfWidth = w / EAGLView.sScreenDimensions.width, this.halfHeight = x / EAGLView.sScreenDimensions.height;
                                        this.halfWidth *= .5, this.halfHeight *= .5
                                    }, u)))
                                } else
                                    u.halfWidth *= .5, u.halfHeight *= .5;
                                this.overlayList.push(u)
                            }
                    this.textureID = i !== null ? Preloader.dependOn(e, Sprite.initTextureFromFile("UserInterface", i)) : 0, this.shadowTextureID = j !== null ? Preloader.dependOn(e, Sprite.initTextureFromFile("UserInterface", j)) : 0, f.call(e), e != this && Preloader.dependOn(this, e)
                }, this)
            }, renderShadow: function (b) {
                var c = RenderDevice.createVertexTexCoordArray(4, [-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 1, 1]);
                this.formOrientation == a.Landscape ? (c[3] = CORRECT_U(this.shadowTextureID, 0), c[4] = CORRECT_V(this.shadowTextureID, 0), c[8] = CORRECT_U(this.shadowTextureID, 1), c[9] = CORRECT_V(this.shadowTextureID, 0), c[13] = CORRECT_U(this.shadowTextureID, 0), c[14] = CORRECT_V(this.shadowTextureID, 1), c[18] = CORRECT_U(this.shadowTextureID, 1), c[19] = CORRECT_V(this.shadowTextureID, 1)) : (c[3] = CORRECT_U(this.shadowTextureID, 1), c[4] = CORRECT_V(this.shadowTextureID, 0), c[8] = CORRECT_U(this.shadowTextureID, 1), c[9] = CORRECT_V(this.shadowTextureID, 1), c[13] = CORRECT_U(this.shadowTextureID, 0), c[14] = CORRECT_V(this.shadowTextureID, 0), c[18] = CORRECT_U(this.shadowTextureID, 0), c[19] = CORRECT_V(this.shadowTextureID, 1));
                var d = RenderDevice.getRenderDevice();
                d.pushMatrix(), d.translateModelViewMatrix(this.centerX * EAGLView.sScreenDimensions.width, this.centerY * EAGLView.sScreenDimensions.height), d.scaleModelViewMatrix(this.shadowHalfWidth * EAGLView.sScreenDimensions.width, this.shadowHalfHeight * EAGLView.sScreenDimensions.height), d.setTextureWithID(this.shadowTextureID), d.setTextureFilteringMode(kTextureFilterType.Linear), d.setTextureAddressingMode(kTextureAddressMode.Clamp), d.setBlendState(kBlendState.Alpha), d.setVertexStreamDataArrays(c, RenderDevice.createColorArray(4, 255)), d.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), d.popMatrix()
            }, render: function (a) {
                this.shadowTextureID && this.formType != b.Background && this.renderShadow(a), this.formType != b.Overlay && this.renderForm(), this.renderOverlays(), this.renderButtons(a)
            }, postRender: function () {
            }, renderForm: function () {
                var c = RenderDevice.createVertexTexCoordArray(4);
                c[0] = -1, c[1] = -1, c[5] = 1, c[6] = -1, c[8] = 1, c[10] = -1, c[11] = 1, c[14] = 1, c[15] = 1, c[16] = 1, c[18] = 1, c[19] = 1;
                var d = RenderDevice.createColorArray(4);
                for (var e = d.length - 1; e >= 0; e--)
                    d[e] = 255;
                this.formOrientation == a.Landscape ? (c[3] = CORRECT_U(this.textureID, 0), c[4] = CORRECT_V(this.textureID, 0), c[8] = CORRECT_U(this.textureID, 1), c[9] = CORRECT_V(this.textureID, 0), c[13] = CORRECT_U(this.textureID, 0), c[14] = CORRECT_V(this.textureID, 1), c[18] = CORRECT_U(this.textureID, 1), c[19] = CORRECT_V(this.textureID, 1)) : (c[3] = CORRECT_U(this.textureID, 1), c[4] = CORRECT_V(this.textureID, 0), c[8] = CORRECT_U(this.textureID, 1), c[9] = CORRECT_V(this.textureID, 1), c[13] = CORRECT_U(this.textureID, 0), c[14] = CORRECT_V(this.textureID, 0), c[18] = CORRECT_U(this.textureID, 0), c[19] = CORRECT_V(this.textureID, 1));
                if (this.textureID !== 0) {
                    var f = RenderDevice.getRenderDevice();
                    f.pushMatrix(), f.translateModelViewMatrix(this.centerX * EAGLView.sScreenDimensions.width, this.centerY * EAGLView.sScreenDimensions.height, 0), f.scaleModelViewMatrix(this.halfWidth * EAGLView.sScreenDimensions.width, this.halfHeight * EAGLView.sScreenDimensions.height), f.setTextureWithID(this.textureID), this.formType == b.Background ? f.setBlendState(kBlendState.None) : f.setBlendState(kBlendState.Alpha), f.setTextureAddressingMode(kTextureAddressMode.Clamp), f.setTextureFilteringMode(kTextureFilterType.Linear), f.setVertexStreamDataArrays(c, d), f.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), f.popMatrix()
                }
            }, renderOverlays: function () {
                if (!this.overlayList)
                    return;
                for (var a = 0; a < this.overlayList.length; ++a) {
                    var b = this.overlayList[a];
                    !b.isHidden && b.textureID != 0 && this.renderOverlay(b)
                }
            }, renderOverlay: function (a) {
                var b = RenderDevice.createVertexTexCoordArray(4), c = RenderDevice.createColorArray(4, 255);
                b[0] = -1, b[1] = -1, b[5] = 1, b[6] = -1, b[10] = -1, b[11] = 1, b[15] = 1, b[16] = 1;
                var d = RenderDevice.getRenderDevice();
                c[0] = c[4] = c[8] = c[12] = a.color.r, c[1] = c[5] = c[9] = c[13] = a.color.g, c[2] = c[6] = c[10] = c[14] = a.color.b, c[3] = c[7] = c[11] = c[15] = a.color.a, a.bMirrored ? (b[3] = CORRECT_U(a.textureID, 1), b[4] = CORRECT_V(a.textureID, 0), b[8] = CORRECT_U(a.textureID, 0), b[9] = CORRECT_V(a.textureID, 0), b[13] = CORRECT_U(a.textureID, 1), b[14] = CORRECT_V(a.textureID, 1), b[18] = CORRECT_U(a.textureID, 0), b[19] = CORRECT_V(a.textureID, 1)) : (b[3] = CORRECT_U(a.textureID, 0), b[4] = CORRECT_V(a.textureID, 0), b[8] = CORRECT_U(a.textureID, 1), b[9] = CORRECT_V(a.textureID, 0), b[13] = CORRECT_U(a.textureID, 0), b[14] = CORRECT_V(a.textureID, 1), b[18] = CORRECT_U(a.textureID, 1), b[19] = CORRECT_V(a.textureID, 1)), d.pushMatrix(), d.translateModelViewMatrix(a.centerX * EAGLView.sScreenDimensions.width, a.centerY * EAGLView.sScreenDimensions.height), d.scaleModelViewMatrix(a.halfWidth * EAGLView.sScreenDimensions.width, a.halfHeight * EAGLView.sScreenDimensions.height), d.setTextureWithID(a.textureID), d.setBlendState(kBlendState.Alpha), d.setTextureAddressingMode(kTextureAddressMode.Clamp), d.setTextureFilteringMode(kTextureFilterType.Linear), d.setVertexStreamDataArrays(b, c), d.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), d.popMatrix()
            }, renderButtons: function (a) {
                if (!this.buttonList)
                    return;
                for (var b = 0; b < this.buttonList.length; ++b) {
                    var c = this.buttonList[b];
                    c.render(a)
                }
            }, update: function (a) {
                if (!this.buttonList)
                    return;
                for (var b = 0; b < this.buttonList.length; ++b) {
                    var c = this.buttonList[b];
                    c.update(a)
                }
            }, onFormClose: function () {
            }, onFormOpen: function () {
            }, registerCallbacks: function (a) {
                for (var b = this.buttonCallbacks.length - 1; b >= 0; b--) {
                    var c = this.buttonCallbacks[b];
                    a.pressSelector.selectorName && a.pressSelector.selectorName == c.selectorName ? a.pressSelector.callback = c.callback : a.releaseSelector.selectorName && a.releaseSelector.selectorName == c.selectorName ? a.releaseSelector.callback = c.callback : a.enterSelector.selectorName && a.enterSelector.selectorName == c.selectorName ? a.enterSelector.callback = c.callback : a.exitSelector.selectorName && a.exitSelector.selectorName == c.selectorName && (a.exitSelector.callback = c.callback)
                }
            }, GetPlayerIndexForTouch: function (a, b) {
                var c = 0;
                return c
            }, pressReleaseButton: function (a) {
                var b = new Touch(new Point(a.currentCenterX * EAGLView.sScreenDimensions.width, a.currentCenterY * EAGLView.sScreenDimensions.height), new Point(a.currentCenterX * EAGLView.sScreenDimensions.width, a.currentCenterY * EAGLView.sScreenDimensions.height)), c = [];
                c.push(b), this.touchesBegan(c), this.touchesEnded(c)
            }, touchesBegan: function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b], d = c.locationInView(this.view);
                    d.x /= EAGLView.sScreenDimensions.width, d.y /= EAGLView.sScreenDimensions.height;
                    var e = d, f = !0, g = this.GetPlayerIndexForTouch(e.x, e.y);
                    this.activeButton[g] = null, this.pressedButton[g] = null;
                    for (var h = 0; h < this.buttonList.length; ++h) {
                        var i = this.buttonList[h];
                        if (e.x >= i.currentCenterX - i.halfHitRegionWidth && e.x <= i.currentCenterX + i.halfHitRegionWidth && e.y >= i.currentCenterY - i.halfHitRegionHeight && e.y <= i.currentCenterY + i.halfHitRegionHeight && !i.isHidden && !i.isDisabled && i.trackTimer >= 1 - kPrecisionErrorCorrection) {
                            this.pressedButton[g] = i, this.activeButton[g] = i, i.pressSelector.selectorName && (i.pressSelector.callback(this, i, a), i.isToggleable && (i.isToggled = !i.isToggled)), i.state = kButtonState.Pressed, f && (this.activeButton[g].clickSoundEffect != null ? this.activeButton[g].clickSoundEffect.play() : this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0));
                            break
                        }
                    }
                }
            }, setActiveButton: function (a, b) {
                a instanceof Number && (a = this.buttonList[index]);
                if (a != this.activeButton[kDefaultPlayerID]) {
                    if (this.activeButton[kDefaultPlayerID] != null) {
                        var c = [], d = new Touch(new Point(-100, -100), new Point(-100, -100));
                        c.push(d), touchesMoved(c), console.assert(this.activeButton[kDefaultPlayerID] == null)
                    }
                    var e = UINT_MAX;
                    for (var f = 0; f < this.buttonList.length; f++)
                        if (this.buttonList[f] == a) {
                            e = f;
                            break
                        }
                    console.assert(e != UINT_MAX), this.buttonList.swapObjects(0, e), touchesBegan(new Point(a.currentCenterX, a.currentCenterY), null, b), console.assert(this.activeButton[kDefaultPlayerID] == a), this.buttonList.swapObjects(0, e)
                }
            }, touchesMoved: function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b], d = c.locationInView(this.view);
                    d.x /= EAGLView.sScreenDimensions.width, d.y /= EAGLView.sScreenDimensions.height;
                    for (var e = 0; e < kMaxPlayers; e++) {
                        this.activeButton[e] != null && (d.x < this.activeButton[e].currentCenterX - this.activeButton[e].halfHitRegionWidth || d.x > this.activeButton[e].currentCenterX + this.activeButton[e].halfHitRegionWidth || d.y < this.activeButton[e].currentCenterY - this.activeButton[e].halfHitRegionHeight || d.y > this.activeButton[e].currentCenterY + this.activeButton[e].halfHitRegionHeight) && (!this.activeButton[e].isHidden && !this.activeButton[e].isDisabled && this.activeButton[e].trackTimer >= 1 - kPrecisionErrorCorrection && this.activeButton[e].exitSelector.selectorName && this.activeButton[e].exitSelector.callback(this, this.activeButton[e], a), this.activeButton[e].state = kButtonState.Enabled, this.activeButton[e] = null);
                        if (this.activeButton[e] == null)
                            for (var f = 0; f < this.buttonList.length; ++f) {
                                var g = this.buttonList[f];
                                d.x >= g.currentCenterX - g.halfHitRegionWidth && d.x <= g.currentCenterX + g.halfHitRegionWidth && d.y >= g.currentCenterY - g.halfHitRegionHeight && d.y <= g.currentCenterY + g.halfHitRegionHeight && !g.isHidden && !g.isDisabled && g.trackTimer >= 1 - kPrecisionErrorCorrection && (g == this.pressedButton[e] && (this.activeButton[e] = g, g.enterSelector.selectorName && g.enterSelector.callback(this, g, a)), this.activeButton[e] != null && (this.activeButton[e].state = kButtonState.Pressed))
                            }
                    }
                }
            }, touchesEnded: function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b], d = c.locationInView(this.view);
                    d.x /= EAGLView.sScreenDimensions.width, d.y /= EAGLView.sScreenDimensions.height;
                    var e = this.GetPlayerIndexForTouch(d.x, d.y);
                    for (var f = 0; f < this.buttonList.length; ++f) {
                        var g = this.buttonList[f];
                        if (d.x >= g.currentCenterX - g.halfHitRegionWidth && d.x <= g.currentCenterX + g.halfHitRegionWidth && d.y >= g.currentCenterY - g.halfHitRegionHeight && d.y <= g.currentCenterY + g.halfHitRegionHeight && !g.isHidden && !g.isDisabled && g.trackTimer >= 1 - kPrecisionErrorCorrection) {
                            if (g.releaseSelector.selectorName && g == this.pressedButton[e]) {
                                g.releaseSelector.callback(this, g, a), g.state = kButtonState.Enabled, g.isToggleable && (g.isToggled = !g.isToggled);
                                break
                            }
                            g.state = kButtonState.Enabled
                        }
                    }
                    this.activeButton[e] != null && this.activeButton[e].state != kButtonState.Enabled && (!this.activeButton[e].isHidden && !this.activeButton[e].isDisabled && this.activeButton[e].trackTimer >= 1 - kPrecisionErrorCorrection && this.activeButton[e].exitSelector.selectorName && this.activeButton[e].exitSelector.callback(this, this.activeButton[e], a), this.activeButton[e].state = kButtonState.Enabled), this.activeButton[e] = null
                }
            }, mouseMoved: function (a, b, c, d) {
            }, buttonPressable: function (a) {
                console.assert(a < this.buttonList.length);
                var b = this.buttonList[a];
                return !b.isHidden && !b.isDisabled && b.halfWidth != 0 && b.halfHeight != 0 && (b.pressSelector.callback != null || b.releaseSelector.callback != null || b.enterSelector.callback != null || b.exitSelector.callback != null)
            }, numPressableButtons: function () {
                var a = 0;
                for (var b = 0; b < this.buttonList.length; b++)
                    this.buttonPressable(b) && a++;
                return a
            }, buttonPressed: function (a) {
                switch (a) {
                    case kButtonPress.Select:
                        if (this.numPressableButtons() > 0 && this.activeButton[kDefaultPlayerID].releaseSelector.callback != null) {
                            console.assert(this.activeButton[kDefaultPlayerID] != null), this.activeButton[kDefaultPlayerID].clickSoundEffect != null ? this.activeButton[kDefaultPlayerID].clickSoundEffect.play() : this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0);
                            var c = this.activeButton[kDefaultPlayerID], d = [], e = new Touch(new Point(this.activeButton[kDefaultPlayerID].currentCenterX * EAGLView.sScreenDimensions.width, this.activeButton[kDefaultPlayerID].currentCenterY * EAGLView.sScreenDimensions.height), new Point(0, 0));
                            d.push(e), this.touchesEnded(d), console.assert(this.activeButton[kDefaultPlayerID] == null), this.formType == b.Background && this.setActiveButton(c, !1)
                        }
                        break;
                    case kButtonPress.Back:
                        this.formType == b.Popup && (this.userInterface.switchToPopupForm(null), this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0));
                        break;
                    case kButtonPress.Up:
                    case kButtonPress.Down:
                    case kButtonPress.Left:
                    case kButtonPress.Right:
                        console.assert(this.activeButton[kDefaultPlayerID] != null || this.numPressableButtons() == 0);
                        var f = UINT_MAX, g = FLT_MAX;
                        for (var h = 0; h < this.buttonList.length; h++) {
                            var i = this.buttonList[h];
                            if (i == this.activeButton[kDefaultPlayerID] || !this.buttonPressable(h))
                                continue;
                            console.assert(i.trackTimer >= 1 - kPrecisionErrorCorrection);
                            if (a == kButtonPress.Up && (i.currentCenterY >= this.activeButton[kDefaultPlayerID].currentCenterY || i.currentCenterY >= this.activeButton[kDefaultPlayerID].currentCenterY - this.activeButton[kDefaultPlayerID].halfHeight && (i.currentCenterX <= this.activeButton[kDefaultPlayerID].currentCenterX - this.activeButton[kDefaultPlayerID].halfWidth || i.currentCenterX >= this.activeButton[kDefaultPlayerID].currentCenterX + this.activeButton[kDefaultPlayerID].halfWidth)) || a == kButtonPress.Down && (i.currentCenterY <= this.activeButton[kDefaultPlayerID].currentCenterY || i.currentCenterY <= this.activeButton[kDefaultPlayerID].currentCenterY + this.activeButton[kDefaultPlayerID].halfHeight && (i.currentCenterX <= this.activeButton[kDefaultPlayerID].currentCenterX - this.activeButton[kDefaultPlayerID].halfWidth || i.currentCenterX >= this.activeButton[kDefaultPlayerID].currentCenterX + this.activeButton[kDefaultPlayerID].halfWidth)) || a == kButtonPress.Left && (i.currentCenterX >= this.activeButton[kDefaultPlayerID].currentCenterX || i.currentCenterX >= this.activeButton[kDefaultPlayerID].currentCenterX - this.activeButton[kDefaultPlayerID].halfWidth && (i.currentCenterY <= this.activeButton[kDefaultPlayerID].currentCenterY - this.activeButton[kDefaultPlayerID].halfHeight || i.currentCenterY >= this.activeButton[kDefaultPlayerID].currentCenterY + this.activeButton[kDefaultPlayerID].halfHeight)) || a == kButtonPress.Right && (i.currentCenterX <= this.activeButton[kDefaultPlayerID].currentCenterX || i.currentCenterX <= this.activeButton[kDefaultPlayerID].currentCenterX + this.activeButton[kDefaultPlayerID].halfWidth && (i.currentCenterY <= this.activeButton[kDefaultPlayerID].currentCenterY - this.activeButton[kDefaultPlayerID].halfHeight || i.currentCenterY >= this.activeButton[kDefaultPlayerID].currentCenterY + this.activeButton[kDefaultPlayerID].halfHeight)))
                                continue;
                            var j = (i.currentCenterX - this.activeButton[kDefaultPlayerID].currentCenterX) * (i.currentCenterX - this.activeButton[kDefaultPlayerID].currentCenterX) + (i.currentCenterY - this.activeButton[kDefaultPlayerID].currentCenterY) * (i.currentCenterY - this.activeButton[kDefaultPlayerID].currentCenterY);
                            j < g && (g = j, f = h)
                        }
                        f != UINT_MAX && this.setActiveButton(f, !0);
                        break;
                    default:
                }
            }, buttonReleased: function (a) {
            }, GetPlayerIndexForTouch: function (a, b) {
                var c = 0;
                return c
            }
        }, "Form");
        d.FindPlayerTouch = function (a, b, c) {
            var d = 0;
            for (var e = 0; e < b.length; e++) {
                var f = b[e], g = f.locationInView(null);
                if (a == 1 && g.x > .5 * EAGLView.sScreenDimensions.width) {
                    d++;
                    if (d == c)
                        return f
                } else if (a == 0 && g.x <= .5 * EAGLView.sScreenDimensions.width) {
                    d++;
                    if (d == c)
                        return f
                }
            }
            return b[0]
        }, window.Form = d, Preloader.initialize("userinterface/form.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = Form.extend({
            init: function (a, b, c, d) {
                this._super(a, b, c, d)
            }
        });
        window.BootstrapForm = a, Preloader.initialize("userinterface/forms/bootstrapform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = Form.extend({
            init: function (a, b, c, d) {
                this._super(a, b, c, d)
            }, onFormOpen: function () {
                setTimeout(bindSelf(function () {
                    eaglview.userInterface.switchToBackgroundForm(kTitleScreenFormName)
                }, this), 3e3)
            }
        }, "BootstrapForm2");
        window.BootstrapForm2 = a, Preloader.initialize("userinterface/forms/bootstrapform2.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = Form.extend({
            init: function (a, b, c, d) {
                this._super(a, b, c, d, []), this.mapName = d.match(/upsell_(.*)/)[1], this.mapIndex = Enum.findValue(kMapIndex, this.mapName, !0, 0)
            }, onButtonReleaseOk: function (a, b, c) {
                var d = this.userInterface.switchToPopupForm(kScoresFormName);
                d.highlightNewestHighScore = this.scoresHighlightNewest, d.mapName = null, d.mapName = this.scoresMapName, d.selectedGameplayMode = this.scoresGameplayMode
            }, onButtonReleaseCancel: function (a, b, c) {
                this.userInterface.switchToPopupForm(kMapConfigurationFormName)
            }, onButtonReleaseBuy: function (a, b, c) {
                var d = this.userInterface.switchToPopupForm(kMapConfigurationFormName);
                Preloader.dependOn(function () {
                    setTimeout(function () {
                        d.selectedMapIndex = a.mapIndex, d.mapSelectionPositionTarget = a.mapIndex / kMapIndicesTotal(), d.updateMapIcons(), d.updateMapSelection(), d.onButtonReleaseStart(d, null, null)
                    }, 0)
                }, d)
            }
        });
        window.UpsellForm = a, Preloader.initialize("userinterface/forms/upsellform.js")
    }), Preloader.include(["graphics/renderdevice.js", "utilities/nextstep/cgsize.js", "userinterface/form.js"], function () {
        kNextRoundOpeningTime = .35, kZoomWhereMapTexelsEqualPixels = 1.6, kZoomSpeed = 250, kAutomaticZoomSpeed = 4, kScrollSpeed = 1, kRangeIndicatorFadeSpeed = 5, kPlacementGridFadeSpeed = 5, kHUDFontName = "Arial", kHUDFontSize = 16, kTowerIconButtonPackingModifier = .85, kResourceTextPosX = .06, kResourceTextPosY = .018, kHealthTextPosX = .94, kHealthTextPosY = kResourceTextPosY, kScoreTextWidth = .25, kScoreTextPosX = .5, kScoreTextPosY = kResourceTextPosY, kStatusTextWidth = 1, kStatusTextPosX = .5, kStatusTextPosY = .07, kStatusTextDisplayTime = 3, kStatusTextFadeInTime = .4, kStatusTextFadeOutTime = .4, kTimeTrialTimerReminder = 3e4, kTimeTrialTimerReminderPulseLength = 1e3, kEndGameTextDisplayTime = 3, kEndGameTextFadeSpeed = 2, kEndGameTextScaleSpeed = 3, kEndGameTextInitialScale = 2.2995, kTextShadowOffset = .0035, kBackgroundMusicFadeSpeed = 1, kUnlockableDisplayTime = 5, kHeartbeatPumpTime = .3, kStreamIndicatorArrowTopScreenPadding = .09 * EAGLView.sScreenDimensions.height + 16, kStreamIndicatorArrowBottomScreenPadding = .08 * EAGLView.sScreenDimensions.height + 16, kStreamIndicatorArrowLeftScreenPadding = .02 * EAGLView.sScreenDimensions.width + 16, kStreamIndicatorArrowRightScreenPadding = kStreamIndicatorArrowLeftScreenPadding, kStreamIndicatorArrowZoomFadeDistance = .05, kStreamIndicatorArrowScaleUpAnimSpeed = 5, kStreamIndicatorArrowScaleDownAnimSpeed = 7, kStreamIndicatorArrowMaxStretchSize = 1.7, kStreamIndicatorArrowFadeSpeed = 1, kStreamIndicatorArrowMinOpacity = .2, kMinZoomLevel = 1.5, kTowerPlacementVerticalOffset = 18, kGatlingTowerIndex = 0, kGooTowerIndex = 1, kMissileTowerIndex = 2, kLightningTowerIndex = 3, kFlameTowerIndex = 4, kMortarTowerIndex = 5;
        var a = 3;
        kCaptureMode = { None: 0, Screenshots: 1, Video: 2 };
        var b = { LowerLeft: 0, LowerMiddle: 1, LowerRight: 2, MiddleLeft: 3, MiddleMiddle: 4, MiddleRight: 5, UpperLeft: 6, UpperMiddle: 7, UpperRight: 8 };
        kGameHudButtonPressPause = kButtonPress.Special1, kGameHudButtonPressQuit = kButtonPress.Special2, kGameHudButtonPressTowerSelectLeft = kButtonPress.Special3, kGameHudButtonPressTowerSelectRight = kButtonPress.Special4, kGameHudButtonPressFfwd = kButtonPress.Special5, kGameHudButtonPressSelectTower1 = kButtonPress.Special6, kGameHudButtonPressSelectTower2 = kButtonPress.Special7, kGameHudButtonPressSelectTower3 = kButtonPress.Special8, kGameHudButtonPressSelectTower4 = kButtonPress.Special9, kGameHudButtonPressSelectTower5 = kButtonPress.Special10, kGameHudButtonPressSelectTower6 = kButtonPress.Special11, kGameHudButtonPressPlaceTower = kButtonPress.Select;
        var c = 9, d = function (a) {
            var b = a.length - 1, c = a[b], d = parseInt(c) - 1;
            return d
        }, e = function (a) {
            console.assert(a), console.assert(a.length == 1 || a[a.length - 2] < "1" || a[a.length - 2] > "9");
            var b = a.charCodeAt(a.length - 1);
            if ("1".charCodeAt(0) <= b && b <= "9".charCodeAt(0)) {
                var c = b - "1".charCodeAt(0);
                return console.assert(0 <= c && c < kMaxPlayers), c
            }
            return 0
        }, f = function (a, b, c, d, e, f, g, h, i) {
            i = i == undefined ? 255 : i;
            var j = 36, k = 1 + j + 1, l = RenderDevice.createVertexArray(k), m = RenderDevice.createColorArray(k);
            l[0] = l[1] = l[2] = 0;
            for (var n = 1; n < k; n++) {
                var o = d + (e - d) * (n - 1) / j;
                l[n * 3 + 0] = COS(o) * c, l[n * 3 + 1] = SIN(o) * c, l[n * 3 + 2] = 0, m[n * 4 + 0] = f, m[n * 4 + 1] = g, m[n * 4 + 2] = h, m[n * 4 + 3] = i
            }
            var p = RenderDevice.getRenderDevice();
            p.useShaderProgram(kProgramID.Textureless), p.setBlendState(kBlendState.Alpha), p.setVertexStreamDataArrays(l, m), p.pushMatrix(), p.translateModelViewMatrix(a, b), p.drawPrimitiveType(kPrimitiveType.TriangleFan, 0, k), p.popMatrix(), p.useShaderProgram(kProgramID.Default)
        }, g = Class.extend({
            init: function () {
                this.left = 0, this.top = 0, this.right = 0, this.bottom = 0, this.centerX = 0, this.centerY = 0
            }
        }), h = Class.extend({
            init: function (a, b) {
                this.playerIndex = a, this.heartbeatScale = b
            }
        }, "HeartbeatInfo"), i = Class.extend({
            init: function (a, b, d) {
                this.filename = a, this.frame = b, this.enemyCount = d, this.spawnSections = new Array(c);
                for (var e = 0; e < c; e++)
                    this.spawnSections[e] = !1
            }
        }, "unitClass"), j = function (a) {
            return function (b, c, d) {
                a.call(b, c, d)
            }
        }, k = [new ButtonCallback("onButtonReleasePlayback"), new ButtonCallback("onButtonExitBuildTower"), new ButtonCallback("onButtonPressBuildTower"), new ButtonCallback("onButtonReleaseBuildTower"), new ButtonCallback("onButtonReleaseSellTower"), new ButtonCallback("onButtonReleaseUpgradeTower")], l = Form.extend({
            init: function (a, b, f, h) {
                var i = Preloader.dependOn(this);
                this.milestone = {}, this._super(a, b, f, h, k), Preloader.dependOn(this, eaglview.userInterface.loadForm(kInGameOptionsFormName)), Preloader.dependOn(bindSelf(function () {
                    this.tutorialParent = null, this.achievementIcon = null, this.victoryTextOverlay = null, this.defeatTextOverlay = null, this.timesUpTextOverlay = null, this.playerOneVictoryTextOverlay = null, this.playerTwoVictoryTextOverlay = null, this.tieGameTextOverlay = null, this.nextRoundOverlay = null, this.nextRoundOverlayOriginalCenterX = 0, this.bNextRoundOpening = !1, this.nextRoundOpenAmount = 0, this.nextRoundEnemies = null, this.bFadeOutMusic = !1, this.endGameTextOverlayHalfWidth = 0, this.endGameTextOverlayHalfHeight = 0, this.heartbeatTimer = kHeartbeatPumpTime, this.endGameTextDisplayTimer = kEndGameTextDisplayTime, this.endGameTextScale = 0, this.hasInGameBackgroundMusicBeenTriggered = !1, this.endGameTextDisplayTimerHasExpired = !1, this.arrowTextureID = 0, this.masterVolume = SoundEngine.GetMasterVolume(), this.heartbeatQueue = [], this.unlockableQueue = [], this.camera = new g, this.placementGridOpacity = 0, this.showEndGameText = !1, this.endGameTextOverlay = null, this.unlockableBox = null, this.unlockableBoxParent = null, this.scoreText = new Array(kMaxPlayers + 1), this.resourcesText = new Array(kMaxPlayers), this.healthText = new Array(kMaxPlayers), this.healthIconOverlay = new Array(kMaxPlayers), this.healthIconOverlayHalfWidth = new Array(kMaxPlayers), this.healthIconOverlayHalfHeight = new Array(kMaxPlayers), this.scoreText = new Array(kMaxPlayers);
                    for (var a = 0; a < kMaxPlayers; a++)
                        this.resourcesText[a] = null, this.healthText[a] = null, this.healthIconOverlay[a] = null, this.healthIconOverlayHalfWidth[a] = 0, this.healthIconOverlayHalfHeight[a] = 0, this.scoreText[a] = null;
                    this.clockIconOverlay = null, this.scoreText[kMaxPlayers] = null, this.statusString = null, this.statusStringSaved = null, this.statusStringLastUpdate = null, this.statusTextCurrentOpacity = 0, this.statusTextTargetOpacity = 0, this.statusTextSavedOpacity = 0, this.unlockableTimer = 0, this.resourcesLastUpdate = -1, this.healthLastUpdate = -1, this.scoreLastUpdate = -1, this.zoomLevel = 0, this.targetZoomLevel = kZoomWhereMapTexelsEqualPixels, this.viewPos = new Point, this.viewPos.x = 0, this.viewPos.y = 0, this.targetViewPos = new Point, this.targetViewPos.x = 0, this.targetViewPos.y = 0, this.firstTouch = !0, this.towerIconGlowTexID = 0, this.towerIconCurrent = -1, this.towerIconFirst = -1, this.towerIconLast = -1, this.pulseAngle2Hz = 0, this.pulseAngle1Hz = 0, this.cursorOverlapTimer = 0, this.cursorTexID = 0, this.cursorXTexID = 0, this.cursorTexWidth = 0, this.cursorTexHeight = 0, this.cursorTileX = (this.view.map.minBuildTileX + this.view.map.maxBuildTileX) / 2, this.cursorTileY = (this.view.map.minBuildTileY + this.view.map.maxBuildTileY) / 2, this.bCursorOverlapTimerRunning = !1, this.bCursorOnValidBuildLocation = !0, this.bHideCursor = !1, this.cursorTower = null, this.buildTowerMenuUpperLeft = new Point(FLT_MAX, FLT_MAX), this.buildTowerMenuLowerRight = new Point(-FLT_MAX, -FLT_MAX), this.bTouchesEndedCanPlaceTower = !0, this.mousePosition = new Point, this.mousePosition.x = EAGLView.sScreenDimensions.width / 2, this.mousePosition.y = EAGLView.sScreenDimensions.height / 2, this.nextRoundNumberText = null, this.nextRoundUnitsText = null;
                    var b = Map.GetFont("font_gold");
                    this.scoreText[0] = new Text(b), this.scoreText[0].SetSize(1), this.scoreText[0].SetPositionWithVector(new Vector2(kScoreTextPosX * EAGLView.sScreenDimensions.width, kScoreTextPosY * EAGLView.sScreenDimensions.height)), this.scoreText[0].SetAlignment(kTextAlignment.Center), this.resourcesText[0] = new Text(b), this.resourcesText[0].SetSize(1), this.resourcesText[0].SetPositionWithVector(new Vector2(kResourceTextPosX * EAGLView.sScreenDimensions.width, kResourceTextPosY * EAGLView.sScreenDimensions.height)), this.resourcesText[0].SetAlignment(kTextAlignment.Left), this.resourcesText[1] = new Text(b), this.resourcesText[1].SetSize(1), this.resourcesText[1].SetAlignment(kTextAlignment.Right), this.scoreText[1] = new Text(b), this.scoreText[1].SetSize(1), this.scoreText[1].SetAlignment(kTextAlignment.Right), this.healthText[0] = new Text(b), this.healthText[0].SetSize(1), this.healthText[0].SetAlignment(kTextAlignment.Center), this.statusText = new Text(b), this.statusText.SetSize(.9), this.statusText.SetPositionWithVector(new Vector2(kStatusTextPosX * EAGLView.sScreenDimensions.width, kStatusTextPosY * EAGLView.sScreenDimensions.height)), this.statusText.SetAlignment(kTextAlignment.Center), this.healthText[0].SetAlignment(kTextAlignment.Right), this.healthText[0].SetPositionWithVector(new Vector2(kHealthTextPosX * EAGLView.sScreenDimensions.width, kHealthTextPosY * EAGLView.sScreenDimensions.height)), b = Map.GetFont("font_dark"), this.achievementTitle = new Text(b), this.achievementTitle.SetSize(.8), this.achievementTitle.SetPositionWithVector(new Vector2(.315 * EAGLView.sScreenDimensions.width, .15 * EAGLView.sScreenDimensions.height)), this.achievementTitle.SetAlignment(kTextAlignment.Left), this.achievementTitle.SetString(""), this.achievementTitle.SetOpacity(0), this.achievementDescription = new Text(b), this.achievementDescription.SetSize(.51), this.achievementDescription.SetPositionWithVector(new Vector2(.317 * EAGLView.sScreenDimensions.width, .185 * EAGLView.sScreenDimensions.height)), this.achievementDescription.SetAlignment(kTextAlignment.Left), this.achievementDescription.SetString(""), this.achievementDescription.SetOpacity(0), this.fastForwardButton = new Array(kMaxPlayers), this.playbackButton = new Array(kMaxPlayers), this.towerButtonList = new Array(kMaxPlayers), this.towerCursor = new Array(kMaxPlayers), this.buildTowerMenu = new Array(kMaxPlayers), this.modifyTowerMenu = new Array(kMaxPlayers), this.sellTowerButton = new Array(kMaxPlayers), this.upgradeTowerButton = new Array(kMaxPlayers), this.towerCursorIndex = new Array(kMaxPlayers), this.selectedTowerTileGridIndex = new Array(kMaxPlayers), this.previouslySelectedTowerTileGridIndex = new Array(kMaxPlayers), this.touchDeltaViewSpace = new Array(kMaxPlayers), this.towerCursorRangeIndicatorOpacity = new Array(kMaxPlayers), this.sellTowerButtonOriginalCenterX = new Array(kMaxPlayers), this.upgradeTowerButtonOriginalCenterX = new Array(kMaxPlayers), this.isValidBuildLocation = new Array(kMaxPlayers);
                    for (var f = 0; f < kMaxPlayers; f++)
                        this.fastForwardButton[f] = null, this.playbackButton[f] = null, this.towerButtonList[f] = [], this.towerCursor[f] = null, this.buildTowerMenu[f] = null, this.modifyTowerMenu[f] = null, this.sellTowerButton[f] = null, this.upgradeTowerButton[f] = null, this.towerCursorIndex[f] = -1, this.selectedTowerTileGridIndex[f] = -1, this.previouslySelectedTowerTileGridIndex[f] = -1, this.touchDeltaViewSpace[f] = 0, this.towerCursorRangeIndicatorOpacity[f] = 0, this.sellTowerButtonOriginalCenterX[f] = 0, this.upgradeTowerButtonOriginalCenterX[f] = 0, this.isValidBuildLocation[f] = !1;
                    this.bMultiplayer = !1, this.maxZoom = this.view.map.imageWidth * kZoomWhereMapTexelsEqualPixels / EAGLView.sScreenDimensions.width, this.viewDimensions = new CGSize, this.viewDimensions.width = 1 / kZoomWhereMapTexelsEqualPixels * EAGLView.sScreenDimensions.width * .5, this.viewDimensions.height = 1 / kZoomWhereMapTexelsEqualPixels * EAGLView.sScreenDimensions.height * .5;
                    for (var a = 0; a < this.buttonList.length; ++a) {
                        var h = this.buttonList[a];
                        if (h.name.match(new RegExp("^" + "ModifyTower".toLowerCase()))) {
                            for (var f = 0; f < kMaxPlayers; f++)
                                if (this.modifyTowerMenu[f] == null) {
                                    this.modifyTowerMenu[f] = h;
                                    break
                                }
                        } else if (h.name.match(new RegExp("^" + "SellTower".toLowerCase()))) {
                            for (var f = 0; f < kMaxPlayers; f++)
                                if (this.sellTowerButton[f] == null) {
                                    this.sellTowerButton[f] = h, this.sellTowerButton[f].trackTimer = 0, this.sellTowerButtonOriginalCenterX[f] = this.sellTowerButton[f].centerX;
                                    break
                                }
                        } else if (h.name.match(new RegExp("^" + "UpgradeTower".toLowerCase()))) {
                            for (var f = 0; f < kMaxPlayers; f++)
                                if (this.upgradeTowerButton[f] == null) {
                                    this.upgradeTowerButton[f] = h, this.upgradeTowerButton[f].trackTimer = 0, this.upgradeTowerButtonOriginalCenterX[f] = this.upgradeTowerButton[f].centerX;
                                    break
                                }
                        } else if (h.name.match(new RegExp("^" + "BuildParent".toLowerCase()))) {
                            for (var f = 0; f < kMaxPlayers; f++)
                                if (this.buildTowerMenu[f] == null) {
                                    this.buildTowerMenu[f] = h, this.buildTowerMenu[f].trackParentPos = !1;
                                    break
                                }
                        } else if (h.name.match(new RegExp("^" + "Playback".toLowerCase())))
                            this.playbackButton[e(h.name)] = h;
                        else if (h.name == "AchievementParent".toLowerCase())
                            this.unlockableBoxParent = h, this.unlockableBoxParent.isHidden = !0;
                        else if (h.name == "Achievement".toLowerCase())
                            this.unlockableBox = h, this.unlockableBox.trackParentPos = !0;
                        else if (h.name.match(new RegExp("^" + "FastForward".toLowerCase())))
                            this.fastForwardButton[e(h.name)] = h;
                        else if (h.name.match(new RegExp("^" + "Tower".toLowerCase()))) {
                            var j = d(h.name);
                            if (j < this.view.map.towerClassList.length) {
                                var k = this.view.map.towerClassList[j];
                                h.textureID = Sprite.addTextureReference(k.iconTextureID), h.disabledTextureID = Sprite.addTextureReference(k.disabledIconTextureID);
                                var l = k.techLevels[0], m = l.cost;
                                h.setLabel(sprintf("$%d", m));
                                var f;
                                h.parent.GetName().match(/02$/) ? f = 1 : f = 0, this.towerButtonList[f].push(h)
                            } else
                                h.isHidden = !0
                        } else if (h.name == "AchievementIcon".toLowerCase())
                            this.achievementIcon = h;
                        else if (h.name == "TutorialParent".toLowerCase()) {
                            this.tutorialParent = h;
                            var n = NextStep.UserDefaults.standardUserDefaults();
                            n.boolForKey(kTutorialTipsPreference) ? this.tutorialParent.trackParentPos = !1 : (this.tutorialParent.isHidden = !0, this.tutorialParent.isDisabled = !0, this.tutorialParent.trackParentPos = !0)
                        } else
                            h.name != "Audio".toLowerCase() && h.name == "Save"
                                .toLowerCase() && (h.isHidden = !0)
                    }
                    for (var a = 0; a < this.overlayList.length; ++a) {
                        var o = this.overlayList[a];
                        if (o.name == "VictoryText".toLowerCase())
                            this.victoryTextOverlay = o;
                        else if (o.name == "DefeatText".toLowerCase())
                            this.defeatTextOverlay = o;
                        else if (o.name == "TimesUpText".toLowerCase())
                            this.timesUpTextOverlay = o;
                        else if (o.name == "PlayerOneVictoryText".toLowerCase())
                            this.playerOneVictoryTextOverlay = o;
                        else if (o.name == "PlayerTwoVictoryText".toLowerCase())
                            this.playerTwoVictoryTextOverlay = o;
                        else if (o.name == "TieGameText".toLowerCase())
                            this.tieGameTextOverlay = o;
                        else if (o.name == "HealthIcon".toLowerCase())
                            this.healthIconOverlay[0] = o, this.healthIconOverlayHalfWidth[0] = o.halfWidth, this.healthIconOverlayHalfHeight[0] = o.halfHeight;
                        else if (o.name == "HealthIcon2".toLowerCase())
                            this.healthIconOverlay[1] = o, this.healthIconOverlayHalfWidth[1] = o.halfWidth, this.healthIconOverlayHalfHeight[1] = o.halfHeight;
                        else if (o.name == "ClockIcon".toLowerCase())
                            this.clockIconOverlay = o;
                        else if (o.name == "ButtonFrameRight".toLowerCase())
                            this.buttonFrameRightOverlay = o, this.buttonFrameRightOverlay.isHidden = !0;
                        else if (o.name == "NextRound".toLowerCase() && IsPlatformMac()) {
                            this.nextRoundOverlay = o, this.nextRoundOverlay.isHidden = !0, this.nextRoundOverlayOriginalCenterX = this.nextRoundOverlay.centerX, this.nextRoundNumberText = new Text(Map.GetFont("font_gold")), this.nextRoundNumberText.SetAlignment(kTextAlignment.Center), this.nextRoundUnitsText = new Text(Map.GetFont("font_gold")), this.nextRoundUnitsText.SetAlignment(kTextAlignment.Center), this.nextRoundUnitsText.SetSize(.5), this.nextRoundEnemies = Preloader.dependOn(this, new Sprite("UserInterface", "next_round_enemies.asc")), this.nextRoundUnitFrame = Preloader.dependOn(this, new SimpleSprite("UserInterface", "next_round_unitframe.png")), this.nextRoundUnitFrameGrey = new Array(c), this.nextRoundUnitFrameGlow = new Array(c), this.nextRoundAllSpawnSections = new Array(c);
                            for (var p = 0; p < c; p++) {
                                var q;
                                q = sprintf("next_round_gray_%02d.png", p + 1), this.nextRoundUnitFrameGrey[p] = Preloader.dependOn(this, new SimpleSprite("UserInterface", q)), q = sprintf("next_round_glow_%02d.png", p + 1), this.nextRoundUnitFrameGlow[p] = Preloader.dependOn(this, new SimpleSprite("UserInterface", q)), this.nextRoundAllSpawnSections[p] = !1
                            }
                            for (var p = 0; p < this.view.map.waves.length; p++) {
                                var r = this.view.map.waves[p];
                                for (var s = 0; s < r.streams.length; s++)
                                    this.nextRoundAllSpawnSections[this.getStreamSpawnSection(r.streams[s])] = !0
                            }
                        }
                    }
                    console.assert(this.tutorialParent !== null, "The tutorial parent is undefined."), console.assert(this.buildTowerMenu !== null, "The build parent is undefined."), console.assert(this.modifyTowerMenu !== null, "The modify tower menu is undefined."), console.assert(this.sellTowerButton !== null, "The sell tower button is undefined."), console.assert(this.upgradeTowerButton !== null, "The upgrade tower button is undefined."), console.assert(this.victoryTextOverlay !== null, "The victory text overlay is undefined."), console.assert(this.timesUpTextOverlay !== null || this.view.map.gameplayMode != kGameplayMode.TimeTrial, "The time's up text overlay is undefined."), console.assert(this.clockIconOverlay !== null || this.view.map.gameplayMode != kGameplayMode.TimeTrial, "The clock icon is undefined."), console.assert(this.defeatTextOverlay !== null, "The defeat text overlay is undefined."), console.assert(this.healthIconOverlay[0] !== null, "The health icon overlay is undefined."), console.assert(this.achievementIcon !== null, "The achievement icon is undefined.");
                    for (var a = 0; a < this.buttonList.length; a++) {
                        var h = this.buttonList[a];
                        if (h.parent == this.buildTowerMenu[kDefaultPlayerID]) {
                            this.towerIconFirst = a;
                            for (a++; a < this.buttonList.length; a++) {
                                var h = this.buttonList[a];
                                if (h.parent != this.buildTowerMenu[kDefaultPlayerID])
                                    break
                            }
                            this.towerIconLast = a - 1;
                            break
                        }
                    }
                    console.assert(this.towerIconFirst != -1 && this.towerIconLast != -1), this.view.map.pathList.length > 1 && this.view.map.showStreamIndicatorArrows && (this.arrowTextureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", "hud_arrow.png"))), this.updateView(0), i(), console.info("GameHudForm initialized")
                }, this), this.milestone)
            }, destroy: function () {
                this._super(), this.camera = null, this.unlockableQueue = null;
                for (var a = 0; a < kMaxPlayers; a++)
                    this.resourcesText[a].destroy(), this.healthText[a].destroy(), this.scoreText[a].destroy();
                this.scoreText[kMaxPlayers].destroy(), this.statusText.destroy(), this.achievementTitle.destroy(), this.achievementDescription.destroy(), this.statusString = null, this.statusStringSaved = null;
                for (var b = 0; b < kMaxPlayers; b++)
                    this.towerCursor[b] = null, this.towerButtonList[b] = null;
                this.nextRoundNumberText && this.nextRoundNumberText.destroy(), this.nextRoundNumberText && this.nextRoundUnitsText.destroy(), this.nextRoundEnemies && this.nextRoundEnemies.destroy(), this.towerIconGlowTexID > 0 && Sprite.destroyTexture(this.towerIconGlowTexID), this.cursorTexID > 0 && Sprite.destroyTexture(this.cursorTexID), this.cursorXTexID > 0 && Sprite.destroyTexture(this.cursorXTexID), this.cursorTower = null, this.view.map != null && (this.view.map.clearAndRelease(), this.view.map = null), this.arrowTextureID > 0 && Sprite.destroyTexture(this.arrowTextureID), SoundEngine.SetMasterVolume(this.masterVolume), this._super()
            }, render: function (a) {
                if (!this.targetViewPos.equals(this.viewPos)) {
                    var b = this.targetViewPos.sub(this.viewPos);
                    if (b.Length() < kPrecisionErrorCorrection)
                        this.viewPos = this.targetViewPos;
                    else {
                        var c = 10, d = c * (1 / kTargetRenderFPS);
                        this.viewPos += d * b
                    }
                    this.updateView(a, !1), !IsPlatformPSP() && this.isTowerMenuOpen(0) && this.updateTowerMenuPosition(this.modifyTowerMenu[kDefaultPlayerID], 0)
                }
                this.pulseAngle2Hz += 2 * 1 / kTargetRenderFPS * 2 * M_PI, this.pulseAngle2Hz >= 2 * M_PI && (this.pulseAngle2Hz -= 2 * M_PI), this.pulseAngle1Hz += 1 * 1 / kTargetRenderFPS * 2 * M_PI, this.pulseAngle1Hz >= 2 * M_PI && (this.pulseAngle1Hz -= 2 * M_PI);
                var e = RenderDevice.getRenderDevice();
                e.pushMatrix(), e.loadIdentity(), e.scaleModelViewMatrix(kZoomWhereMapTexelsEqualPixels / this.zoomLevel), e.translateModelViewMatrix(this.viewPos.x, this.viewPos.y, -this.zoomLevel * 100), e.pushMatrix(), this.view.map.render(a);
                var f = !0;
                if (f) {
                    for (var g = 0; g < this.view.map.GetNumPlayers(); g++) {
                        this.towerCursorRangeIndicatorOpacity[g] -= a * kRangeIndicatorFadeSpeed, this.towerCursorRangeIndicatorOpacity[g] = MAX(this.towerCursorRangeIndicatorOpacity[g], 0), this.placementGridOpacity -= a * kPlacementGridFadeSpeed, this.placementGridOpacity = MAX(this.placementGridOpacity, 0);
                        if (this.isTowerMenuOpen(g)) {
                            var h = this.view.map.getTowerAtTileGridIndex(this.selectedTowerTileGridIndex[g]);
                            h != null && (this.towerCursorRangeIndicatorOpacity[g] += a * kRangeIndicatorFadeSpeed * 2, this.towerCursorRangeIndicatorOpacity[g] = MIN(this.towerCursorRangeIndicatorOpacity[g], 1), TowerClass.renderRangeIndicatorWithTower(h, this.towerCursorRangeIndicatorOpacity[g], !1), h.renderWithIdleEffect(0)), this.previouslySelectedTowerTileGridIndex[g] = this.selectedTowerTileGridIndex[g]
                        } else if (this.towerCursor[g] == null && this.previouslySelectedTowerTileGridIndex[g] != -1 && this.towerCursorRangeIndicatorOpacity[g] > 0) {
                            var h = this.view.map.getTowerAtTileGridIndex(this.previouslySelectedTowerTileGridIndex[g]);
                            h != null && (TowerClass.renderRangeIndicatorWithTower(h, this.towerCursorRangeIndicatorOpacity[g], !1), h.render(0))
                        }
                    }
                    e.loadIdentity(), e.translateModelViewMatrix(-EAGLView.sScreenDimensions.width * .5, -EAGLView.sScreenDimensions.height * .5, -kZoomWhereMapTexelsEqualPixels * 100), l.sCaptureMode == kCaptureMode.None && this.renderStreamIndicatorArrows(a)
                }
                e.popMatrix(), e.popMatrix()
            }, getPulseAlpha: function (a, b) {
                var c = b + (1 - b) * sinf(a);
                return c * 255
            }, getStreamSpawnSection: function (a) {
                var c = this.view.map.pathList[a.pathIndex].spawnTiles[0], d, e;
                this.view.map.getTilePos(c, function (a, b) {
                    d = a, e = b
                });
                var f = this.view.map.getTilesAcross(), g = this.view.map.getTilesDown();
                return console.assert(d < f && e < g), d < 1 * f / 3 ? e < 1 * g / 3 ? b.UpperLeft : e < 2 * g / 3 ? b.MiddleLeft : b.LowerLeft : d < 2 * f / 3 ? e < 1 * g / 3 ? b.UpperMiddle : e < 2 * g / 3 ? b.MiddleMiddle : b.LowerMiddle : e < 1 * g / 3 ? b.UpperRight : e < 2 * g / 3 ? b.MiddleRight : b.LowerRight
            }, renderDynamicText: function (b) {
                this.view.map.gameState == kGameState.Paused && (b = 0), this.resourcesText[0].SetString(sprintf("%d", this.view.map.GetPlayer().GetResources())), this.resourcesText[0].Render(b);
                if (this.view.map.gameplayMode == kGameplayMode.TimeTrial) {
                    var d = this.view.map.timeTrialTimer * 1e3, e = d / 6e4, f = d % 6e4 / 1e3;
                    this.healthText[0].SetString(sprintf("%d:%02d", e, f));
                    var g = 255;
                    if (d <= kTimeTrialTimerReminder + 1e3) {
                        var h = 1e3 - MAX(d, 0) % kTimeTrialTimerReminderPulseLength;
                        g = 255 - SIN(h / 1e3 * kPI) * 255
                    }
                    this.healthText[0].SetTint(new Color(255, g, g))
                } else
                    this.healthText[0].SetString(sprintf("%d", this.view.map.GetPlayer().GetHealth()));
                this.healthText[0].Render(b), this.scoreText[0].SetString(sprintf("%d", this.view.map.GetPlayer().GetScore())), this.scoreText[0].Render(b), this.statusText.SetString(this.statusString), this.statusText.Render(b), this.achievementTitle.Render(b), this.achievementDescription.Render(b);
                var j;
                this.statusTextCurrentOpacity < this.statusTextTargetOpacity ? (this.statusTextCurrentOpacity += b, this.statusTextCurrentOpacity >= this.statusTextTargetOpacity && (this.statusTextCurrentOpacity = this.statusTextTargetOpacity, this.statusTextTargetOpacity = 0), j = MIN(this.statusTextCurrentOpacity, kStatusTextFadeInTime), j /= kStatusTextFadeInTime) : (this.statusTextCurrentOpacity -= b, this.statusTextCurrentOpacity = MAX(this.statusTextCurrentOpacity, this.statusTextTargetOpacity), j = MIN(this.statusTextCurrentOpacity, kStatusTextFadeOutTime), j /= kStatusTextFadeOutTime);
                if (j > kPrecisionErrorCorrection) {
                    var k = j * 255;
                    this.statusText.SetTint(new Color(255, 255, 255, k)), this.statusText.Render(b)
                } else
                    this.statusString = null;
                if (this.nextRoundOverlay !== null) {
                    this.renderOverlay(this.nextRoundOverlay);
                    if (this.nextRoundOpenAmount > 0) {
                        var l = new Color(255, 255, 255);
                        for (var m = 0; m < a; m++) {
                            var n = (this.view.map.unboundedWaveIndex >= 0 ? this.view.map.unboundedWaveIndex : 0) + m;
                            if (n >= this.view.map.waves.length && this.view.map.gameplayMode != kGameplayMode.Endless)
                                break;
                            var o = (this.view.map.waveIndex >= 0 ? this.view.map.waveIndex : 0) + m;
                            if (o >= this.view.map.waves.length)
                                while (o > this.view.map.endlessModeWaveEnd)
                                    o -= this.view.map.endlessModeWaveEnd - this.view.map.endlessModeWaveStart + 1;
                            this.nextRoundNumberText.SetString(sprintf("%d", n + 1));
                            var p = this.nextRoundOverlay.centerX + .02, q = this.nextRoundOverlay.centerY - this.nextRoundOverlay.halfHeight + .085 + m * .16375;
                            this.nextRoundNumberText.SetNormalizedPosition(p, q), this.nextRoundNumberText.Render(b);
                            var r = [], s = this.view.map.waves[o];
                            for (var t = 0; t < s.streams.length; t++) {
                                var u = s.streams[t], v = this.view.map.enemyClassMap[u.enemyFile];
                                if (v.isFollower)
                                    continue;
                                var w = !1;
                                for (var x = 0; x < r.length; x++)
                                    if (u.enemyFile == r[x].filename) {
                                        w = !0, r[x].enemyCount += u.enemyCount, r[x].spawnSections[this.getStreamSpawnSection(u)] = !0;
                                        break
                                    }
                                w || (r.push(new i(u.enemyFile, this.nextRoundEnemies.getAnimationFrame(u.enemyFile), u.enemyCount)), r[r.length - 1].spawnSections[this.getStreamSpawnSection(u)] = !0)
                            }
                            for (var t = 0; t < r.length; t++) {
                                var y = p - .094 + t * (.003 + this.nextRoundUnitFrame.getTexWidth() / EAGLView.sScreenDimensions.width), z = q - .015 + this.nextRoundUnitFrame.getTexHeight() / EAGLView.sScreenDimensions.height, A = z - .02;
                                this.nextRoundUnitFrame.render(y * EAGLView.sScreenDimensions.width, z * EAGLView.sScreenDimensions.height);
                                for (var x = 0; x < c; x++) {
                                    var B = [[.2295, .8539], [.5, .8539], [.7623, .8539], [.2541, .7078], [.5, .7078], [.7377, .7078], [.2705, .5954], [.5, .5954], [.7213, .5954]];
                                    (r[t].spawnSections[x] || this.nextRoundAllSpawnSections[x]) && (r[t].spawnSections[x] ? this.nextRoundUnitFrameGlow : this.nextRoundUnitFrameGrey)[x].render((y + (B[x][0] - .5) * this.nextRoundUnitFrame.getTexWidth() / EAGLView.sScreenDimensions.width) * EAGLView.sScreenDimensions.width, (z + (B[x][1] - .5) * this.nextRoundUnitFrame.getTexHeight() / EAGLView.sScreenDimensions.height) * EAGLView.sScreenDimensions.height)
                                }
                                this.nextRoundEnemies.render(r[t].frame, l, y * EAGLView.sScreenDimensions.width, A * EAGLView.sScreenDimensions.height, 0, 1, kMirrorType.None), this.nextRoundUnitsText.SetString(sprintf("%d", r[t].enemyCount));
                                var C = z - this.nextRoundUnitFrame.getTexHeight() / EAGLView.sScreenDimensions.height / 2 - .0075;
                                this.nextRoundUnitsText.SetNormalizedPosition(y, C), this.nextRoundUnitsText.Render(b)
                            }
                        }
                    }
                }
            }, renderEndGameText: function (a) {
                this.endGameTextOverlay.halfWidth = this.endGameTextOverlayHalfWidth * this.endGameTextScale, this.endGameTextOverlay.halfHeight = this.endGameTextOverlayHalfHeight * this.endGameTextScale;
                var b = this.endGameTextOverlay.color;
                b.a = 255 * MAX(MIN((kEndGameTextDisplayTime - this.endGameTextDisplayTimer) * kEndGameTextFadeSpeed, 1), 0), this.endGameTextOverlay.color = b
            }, postRender: function (a) {
                var b = RenderDevice.getRenderDevice();
                b.pushMatrix(), b.loadIdentity(), b.scaleModelViewMatrix(kZoomWhereMapTexelsEqualPixels / this.zoomLevel), b.translateModelViewMatrix(this.viewPos.x, this.viewPos.y, -this.zoomLevel * 100), b.pushMatrix(), b.loadIdentity(), b.translateModelViewMatrix(-EAGLView.sScreenDimensions.width * .5, -EAGLView.sScreenDimensions.height * .5, -kZoomWhereMapTexelsEqualPixels * 100);
                var c = !0;
                c && l.sCaptureMode == kCaptureMode.None && (Form.prototype.render.call(this, a), this.renderDynamicText(a)), this.showEndGameText && this.renderEndGameText(a), b.popMatrix(), this.renderTowerCursor(a), b.popMatrix()
            }, update: function (a) {
                if (SoundEngine.GetIsMusicEnabled() && this.view.map.musicFilename) {
                    var b = NextStep.UserDefaults.standardUserDefaults(), c = b.floatForKey(kMusicVolumePreference);
                    if (!this.hasInGameBackgroundMusicBeenTriggered) {
                        var e = MAX(SoundEngine.GetBackgroundMusicVolume() - a * kBackgroundMusicFadeSpeed, 0);
                        e = MIN(e, c), SoundEngine.SetBackgroundMusicVolume(e), SoundEngine.SetEffectsVolume(NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference));
                        if (e <= kPrecisionErrorCorrection) {
                            this.hasInGameBackgroundMusicBeenTriggered = !0, SoundEngine.UnloadBackgroundMusicTrack();
                            var f, g = null;
                            g = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Music", this.view.map.musicFilename, "ogg"), f = g, SoundEngine.LoadBackgroundMusicTrack(f, !1, !0), SoundEngine.SetBackgroundMusicVolume(0), SoundEngine.StartBackgroundMusic()
                        }
                        SoundEngine.SetEffectsVolume(NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference))
                    } else {
                        var h = this.bFadeOutMusic ? 0 : c, e = SoundEngine.GetBackgroundMusicVolume();
                        IS_LESS_THAN(e, h) ? e = MIN(e + a * kBackgroundMusicFadeSpeed, h) : e = MAX(e - a * kBackgroundMusicFadeSpeed, h), SoundEngine.SetBackgroundMusicVolume(e), SoundEngine.SetEffectsVolume(NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference))
                    }
                }
                if (this.view.map.GetNumPlayers() == 1 && this.isTowerMenuOpen(0))
                    var i = this.view.map.getTowerAtTileGridIndex(this.selectedTowerTileGridIndex[kDefaultPlayerID]), j = (new Point(i.x, i.y)).sub(new Point(i.techLevel.attackRadius, i.techLevel.attackRadius)), k = (new Point(i.x, i.y)).add(new Point(i.techLevel.attackRadius, i.techLevel.attackRadius));
                if (NOT_ZERO(this.targetZoomLevel - this.zoomLevel) && !this.firstTouch && !this.bMultiplayer) {
                    var l = this.targetZoomLevel - this.zoomLevel;
                    this.zoomLevel = this.zoomLevel + l / fabsf(l) * a * kAutomaticZoomSpeed, this.zoomLevel = l < 0 ? MAX(this.zoomLevel, this.targetZoomLevel) : MIN(this.zoomLevel, this.targetZoomLevel), this.view.map.initialFocusRegion & kDirection.North ? this.viewPos.y = -this.zoomLevel * this.viewDimensions.height : this.view.map.initialFocusRegion & kDirection.East ? this.viewPos.x = this.zoomLevel * this.viewDimensions.width : this.view.map.initialFocusRegion & kDirection.South ? this.viewPos.y = this.zoomLevel * this.viewDimensions.height : this.view.map.initialFocusRegion & kDirection.West ? this.viewPos.x = -this.zoomLevel * this.viewDimensions.width : this.view.map.initialFocusRegion & kDirection.NorthEast ? (this.viewPos.y = -this.zoomLevel * this.viewDimensions.height, this.viewPos.x = this.zoomLevel * this.viewDimensions.width) : this.view.map.initialFocusRegion & kDirection.SouthEast ? (this.viewPos.y = this.zoomLevel * this.viewDimensions.height, this.viewPos.x = this.zoomLevel * this.viewDimensions.width) : this.view.map.initialFocusRegion & kDirection.SouthWest ? (this.viewPos.y = this.zoomLevel * this.viewDimensions.height, this.viewPos.x = -this.zoomLevel * this.viewDimensions.width) : this.view.map.initialFocusRegion & kDirection.NorthWest && (this.viewPos.y = -this.zoomLevel * this.viewDimensions.height, this.viewPos.x = -this.zoomLevel * this.viewDimensions.width), this.updateView(a)
                }
                Form.prototype.update.call(this, a);
                for (var m = 0; m < this.view.map.GetNumPlayers(); m++)
                    ;
                this.updateAchievementDisplay(a), this.updateUnlockableDisplay(a), this.towerIconCurrent == -1 && this.selectTowerIconRight();
                for (var m = 0; m < this.view.map.GetNumPlayers(); m++) {
                    for (var n = 0; n < this.towerButtonList[m].length; n++) {
                        var o = this.towerButtonList[m][n], p = d(o.name), q = this.view.map.towerClassList[p], r = q.techLevels[0];
                        o.isDisabled = !(this.view.map.GetPlayer(m).GetResources() >= r.cost), o.isDisabled && n == this.towerIconCurrent && this.selectTowerIconLeft()
                    }
                    this.towerIconCurrent != -1 && this.cursorTower === null && (this.cursorTower = this.createCursorTower());
                    if (this.selectedTowerTileGridIndex[m] != -1) {
                        var i = this.view.map.getTowerAtTileGridIndex(this.selectedTowerTileGridIndex[m]), s = !1;
                        if (i.techLevelIndex < i.towerClass.techLevels.length - 1) {
                            var r = i.towerClass.techLevels[i.techLevelIndex + 1];
                            this.view.map.GetPlayer(m).GetResources() >= r.cost && (s = !0)
                        }
                        this.upgradeTowerButton[m].isDisabled = !s
                    }
                }
                this.showEndGameText && this.updateEndGameText(a), this.updateHeartbeat(a);
                if (this.nextRoundOverlay !== null) {
                    this.bNextRoundOpening ? (this.nextRoundOpenAmount += a / kNextRoundOpeningTime, this.nextRoundOpenAmount > 1 && (this.nextRoundOpenAmount = 1)) : (this.nextRoundOpenAmount -= a / kNextRoundOpeningTime, this.nextRoundOpenAmount < 0 && (this.nextRoundOpenAmount = 0));
                    var t = 1 - this.nextRoundOverlay.halfWidth;
                    console.assert(0 <= this.nextRoundOpenAmount && this.nextRoundOpenAmount <= 1);
                    var u = (cosf((1 - this.nextRoundOpenAmount) * M_PI) + 1) / 2;
                    this.nextRoundOverlay.centerX = u * t + (1 - u) * this.nextRoundOverlayOriginalCenterX
                }
            }, updateView: function (a, b) {
                b = b == undefined ? !0 : b, this.viewPos.x = MIN(this.viewPos.x, -this.zoomLevel * this.viewDimensions.width), this.viewPos.x = MAX(this.viewPos.x, -this.view.map.getMapImageWidth() + this.zoomLevel * this.viewDimensions.width), this.viewPos.y = MIN(this.viewPos.y, -this.zoomLevel * this.viewDimensions.height), this.viewPos.y = MAX(this.viewPos.y, -this.view.map.getMapImageHeight() + this.zoomLevel * this.viewDimensions.height);
                var c = 1 - (this.zoomLevel - kMinZoomLevel) / (this.maxZoom - kMinZoomLevel), d = this.view.map.imageHeight * .5;
                this.viewPos.y = Math.min(this.viewPos.y, -d + d * c), this.viewPos.y = Math.max(this.viewPos.y, -d - d * c), b && (this.targetViewPos = this.viewPos);
                var e = new Point(0, 0), f = new Point(EAGLView.sScreenDimensions.width, EAGLView.sScreenDimensions.height);
                e = this.convertToWorldPosFromViewPos(e), f = this.convertToWorldPosFromViewPos(f), this.camera.left = e.x, this.camera.top = e.y, this.camera.right = f.x, this.camera.bottom = f.y, this.camera.centerX = this.camera.left + (this.camera.right - this.camera.left) / 2, this.camera.centerY = this.camera.top + (this.camera.bottom - this.camera.top) / 2, this.updateModifyTowerMenuForZoom()
            }, convertToWorldPosFromViewPos: function (a) {
                var b = new Point;
                return b.x = -(this.viewPos.x + EAGLView.sScreenDimensions.width * .5), b.y = -(this.viewPos.y + EAGLView.sScreenDimensions.height * .5), b.x += a.x * this.zoomLevel / kZoomWhereMapTexelsEqualPixels + (EAGLView.sScreenDimensions.width * .5 - this.zoomLevel * this.viewDimensions.width), b.y += a.y * this.zoomLevel / kZoomWhereMapTexelsEqualPixels + (EAGLView.sScreenDimensions.height * .5 - this.zoomLevel * this.viewDimensions.height), b
            }, updateAchievementDisplay: function (a) {
                var b = AchievementManager.GetSingleton(), c = b.GetTopAchievementInQueue();
                if (c != kAchievement.Undefined && (this.view.map.gameState != kGameState.Paused || this.showEndGameText)) {
                    this.unlockableBox.setLabel(null), this.achievementIcon.textureID && this.achievementIcon.textureID.isLoaded && (this.unlockableTimer -= a), this.achievementTitle.SetString(b.GetAchievementTitle(c)), this.achievementDescription.SetString(b.GetAchievementDescription(c)), this.unlockableTimer <= kPrecisionErrorCorrection && (this.unlockableBoxParent.trackParentPos ? IS_EQUAL(this.unlockableBox.trackTimer, 0) && (this.achievementIcon.unloadImage(), this.unlockableTimer = kUnlockableDisplayTime) : (b.PopAchievementFromQueue(), this.unlockableBoxParent.trackParentPos = !0));
                    if (!this.achievementIcon.textureID) {
                        var d;
                        d = sprintf("Achievements/achievement_icon_%03d.png", c), this.achievementIcon.loadImage(d), Preloader.dependOn(bindSelf(function () {
                            this.view.audioConfig.unlockableSoundEffect.play(), this.unlockableBoxParent.trackParentPos = !1
                        }, this), this.achievementIcon.textureID)
                    }
                    this.achievementTitle.SetOpacity(this.unlockableBox.trackTimer), this.achievementDescription.SetOpacity(this.unlockableBox.trackTimer), this.achievementIcon.textureID.isLoaded && (this.achievementIcon.isHidden = !1, this.unlockableBoxParent.isHidden = !1)
                }
            }, updateModifyTowerMenuForZoom: function () {
                for (var a = 0; a < kMaxPlayers; a++) {
                    var b = (this.zoomLevel - kMinZoomLevel) / (this.maxZoom - kMinZoomLevel), c = Math.lerp(b, 1.3, 1);
                    this.sellTowerButton[a] != null && (this.sellTowerButton[a].centerX = this.sellTowerButtonOriginalCenterX[a] * c), this.upgradeTowerButton[a] != null && (this.upgradeTowerButton[a].centerX = this.upgradeTowerButtonOriginalCenterX[a] * c)
                }
            }, onFormClose: function () {
                SoundEngine.StopAllEffects(), this.view.map.playbackSpeed = kPlaybackSpeed.Normal
            }, onFormOpen: function () {
                if (!this.bMultiplayer)
                    for (var a = 0; a < this.towerButtonList[kDefaultPlayerID].length; a++) {
                        var b = this.towerButtonList[kDefaultPlayerID][a];
                        b.centerX -= (this.towerButtonList[kDefaultPlayerID].length - (a + 1)) * b.halfWidth * 2 * kTowerIconButtonPackingModifier
                    }
                this.showEndGameText = !1, this.defeatTextOverlay.isHidden = !0, this.victoryTextOverlay.isHidden = !0, this.timesUpTextOverlay.isHidden = !0, this.buildTowerMenuUpperLeft = new Point(FLT_MAX, FLT_MAX), this.buildTowerMenuLowerRight = new Point(-FLT_MAX, -FLT_MAX), this.buildTowerMenuUpperLeft.x *= EAGLView.sScreenDimensions.width, this.buildTowerMenuUpperLeft.y *= EAGLView.sScreenDimensions.height, this.buildTowerMenuLowerRight.x *= EAGLView.sScreenDimensions.width, this.buildTowerMenuLowerRight.y *= EAGLView.sScreenDimensions.height, this.hasInGameBackgroundMusicBeenTriggered = !1, this.zoomLevel = this.maxZoom, this.updateView(0)
            }, reset: function () {
                this.showEndGameText = !1, this.defeatTextOverlay.isHidden = !0, this.victoryTextOverlay.isHidden = !0, IsPlatformAndroid() || (this.timesUpTextOverlay.isHidden = !0), MapSelectionForm.bIsMultiplayer && (this.playerOneVictoryTextOverlay.isHidden = !0, this.playerTwoVictoryTextOverlay.isHidden = !0, this.tieGameTextOverlay.isHidden = !0);
                if (this.view.map.gameplayMode == kGameplayMode.TimeTrial) {
                    for (var a = 0; a < kMaxPlayers; a++)
                        this.healthIconOverlay[a] !== null && (this.healthIconOverlay[a].isHidden = !0);
                    this.clockIconOverlay !== null && (this.clockIconOverlay.isHidden = !1)
                } else {
                    for (var a = 0; a < kMaxPlayers; a++)
                        this.healthIconOverlay[a] !== null && (this.healthIconOverlay[a].isHidden = !1);
                    this.clockIconOverlay !== null && (this.clockIconOverlay.isHidden = !0)
                }
                for (var a = 0; a < kMaxPlayers; a++)
                    this.playbackButton[a] !== null && (this.playbackButton[a].isDisabled = !1)
            }, onButtonReleaseAudio: function (a, b, c) {
                var d = a;
                SoundEngine.SetMasterVolume(b.isToggled ? d.masterVolume : 0)
            }, onButtonReleasePlayback: function (a, b, c) {
                var d = a;
                if (a.view.map.gameState == kGameState.Running) {
                    a.view.map.pauseGame();
                    var e = LocalizeString("PausedInstructions", "The state of the game when it is not executing.");
                    a.setStatusString(e, 0, !0)
                } else
                    a.view.map.unpauseGame(), a.view.map.updateStatusTextWithCurrentRound();
                for (var f = 0; f < kMaxPlayers; f++)
                    d.playbackButton[f] != null && d.playbackButton[f] != b && (d.playbackButton[f].isToggled = a.view.map.gameState == kGameState.Paused)
            }, onButtonReleaseConfigure: function (a, b, c) {
                a.unlockableTimer = 0, a.userInterface.switchToPopupForm(kInGameOptionsFormName)
            }, onButtonExitBuildTower: function (a, b, c) {
            }, onButtonExitBuildTowerForButtonWithTouches: function (a, b) {
                var c = this.GetPlayerIndexForTouch(a.centerX, a.centerY);
                if (this.towerCursor[c] == null) {
                    var d = Form.FindPlayerTouch(c, b), e = a.name.substring(a.name.length - 1), f = parseInt(e) - 1, g = d.locationInView(this.view);
                    this.buildTower(f, g.x, g.y, c)
                }
            }, onButtonPressBuildTower: function (a, b, c) {
            }, onButtonReleaseBuildTower: function (a, b, c) {
                if (IsPlatformMac()) {
                    var d = a;
                    d.onButtonPressBuildTowerForButton(b), d.onButtonExitBuildTowerForButtonWithTouches(b, c), d.bTouchesEndedCanPlaceTower = !1
                }
            }, onButtonPressBuildTowerForButton: function (a) {
                var b = a.name.substring(a.name.length - 1);
                this.startBuildTower(this.GetPlayerIndexForTouch(a.centerX, a.centerY), parseInt(b) - 1)
            }, onButtonReleaseSellTower: function (a, b, c) {
                var d = a, e = d.GetPlayerIndexForTouch(b.parent.centerX, b.parent.centerY);
                d.selectedTowerTileGridIndex[e] != -1 && (d.view.map.sellTowerAtTileGridIndex(d.selectedTowerTileGridIndex[e]), d.closeTowerMenu(e))
            }, onButtonReleaseUpgradeTower: function (a, b, c) {
                var d = a, e = d.GetPlayerIndexForTouch(b.parent.centerX, b.parent.centerY);
                d.selectedTowerTileGridIndex[e] != -1 && (d.view.map.upgradeTowerAtTileGridIndex(d.selectedTowerTileGridIndex[e]), d.updateModifyTowerButtonLabelsForTowerAtTileGridIndex(d.selectedTowerTileGridIndex[e]), d.closeTowerMenu(e))
            }, onButtonReleaseFastForward: function (a, b, c) {
                var d = a, e = d.view.map.playbackSpeed == kPlaybackSpeed.Fast;
                d.view.map.playbackSpeed = e ? kPlaybackSpeed.Normal : kPlaybackSpeed.Fast;
                for (var f = 0; f < kMaxPlayers; f++)
                    d.fastForwardButton[f] != null && d.fastForwardButton[f] != b && (console.assert(d.fastForwardButton[f].isToggleable), d.fastForwardButton[f].isToggled = !e)
            }, startBuildTower: function (a, b) {
                this.towerCursorIndex[a] = b
            }, buildTower: function (a, b, c, d) {
                var e = !1;
                if (this.selectedTowerTileGridIndex[d] != -1)
                    return e;
                a = MIN(a, this.view.map.towerClassList.length - 1);
                var f = this.view.map.towerClassList[a], g = f.techLevels[0];
                if (this.view.map.GetPlayer(d).GetResources() >= g.cost) {
                    this.towerCursor[d] != null && (this.towerCursor[d].setColor(255, 255, 255, 255), this.view.map.buyTower(this.towerCursor[d], d), this.towerCursor[d] = null);
                    if (this.view.map.GetPlayer(d).GetResources() >= g.cost) {
                        var h = this.convertToWorldPosFromViewPos(new Point(b, c));
                        h.y += kTowerPlacementVerticalOffset;
                        var i = this.view.map.getTileGridIndexForWorldPos(h.x, h.y);
                        i > 0 && (this.view.map.getWorldPosFromTileGridIndex(i, h), this.towerCursor[d] = new Tower(f, this.view.map, d), this.towerCursor[d].x = h.x + this.view.map.tileWidth * .5, this.towerCursor[d].y = h.y + this.view.map.tileHeight * .5, this.towerCursor[d].tileGridIndex = i, this.towerCursorRangeIndicatorOpacity[d] = 0, this.isValidBuildLocation[d] = this.view.map.isValidBuildLocation(this.towerCursor[d].tileGridIndex), this.buildTowerMenu[d].trackParentPos = !0, e = !0)
                    }
                }
                return e
            }, renderStreamIndicatorArrows: function (a) {
                if (this.view.map.streamIndicatorWaveIndex < 0 || this.view.map.streamIndicatorWaveIndex >= this.view.map.waves.length || this.view.map.pathList.length <= 1 || !this.view.map.showStreamIndicatorArrows)
                    return;
                var b = RenderDevice.getRenderDevice();
                console.assert(this.arrowTextureID > 0), b.setTextureWithID(this.arrowTextureID);
                var c = RenderDevice.createVertexTexCoordArray(4, [0, 0, 0], [0, 0, 1, 0, 0, 1, 1, 1]), d = RenderDevice.createColorArray(4, 255);
                b.setBlendState(kBlendState.Alpha);
                var e = this.view.map.waves[this.view.map.streamIndicatorWaveIndex], f = new Vector2;
                for (var g = 0; g < e.streams.length; g++) {
                    var h = e.streams[g], i = this.view.map.pathList[h.pathIndex].spawnTiles[0], j = new Point;
                    this.view.map.getWorldPosFromTileGridIndex(i, j), j.x += .5 * this.view.map.tileWidth, j.y += .5 * this.view.map.tileHeight;
                    var k, l;
                    this.view.map.getTilePos(i, function (a, b) {
                        k = a, l = b
                    }), h.indicatorArrowAnimTimer += h.indicatorOpacity < .2 ? -a * kStreamIndicatorArrowScaleDownAnimSpeed : a * kStreamIndicatorArrowScaleUpAnimSpeed, h.indicatorArrowAnimTimer = MAX(h.indicatorArrowAnimTimer, 0);
                    if (h.indicatorArrowAnimTimer <= kPrecisionErrorCorrection)
                        continue;
                    d[3] = d[7] = d[11] = d[15] = h.indicatorArrowOpacity * 255;
                    var m, n;
                    this.convertToViewPosFromWorldPos(j.x, j.y, function (a, b) {
                        m = a, n = b
                    }), j.x = MAX(this.camera.left, j.x), j.y = MAX(this.camera.top, j.y), j.x = MIN(this.camera.right, j.x), j.y = MIN(this.camera.bottom, j.y);
                    var o, p;
                    this.convertToViewPosFromWorldPos(j.x, j.y, function (a, b) {
                        o = a, p = b
                    });
                    var q, r;
                    this.convertToViewPosFromWorldPos(this.view.map.tileWidth + this.camera.left, this.view.map.tileHeight + this.camera.top, function (a, b) {
                        q = a, r = b
                    });
                    var s = 1 - (this.zoomLevel - kMinZoomLevel) / (this.maxZoom - kMinZoomLevel), t = k < this.view.map.minVisibleTileX || k > this.view.map.maxVisibleTileX ? 2.5 : 1, u = l < this.view.map.minVisibleTileY || l > this.view.map.maxVisibleTileY ? 2.5 : 1;
                    m + q * .5 >= -(t * q) + kStreamIndicatorArrowLeftScreenPadding && n + r * .5 >= -(u * r) + kStreamIndicatorArrowTopScreenPadding && m + q * .5 <= EAGLView.sScreenDimensions.width + t * q - kStreamIndicatorArrowRightScreenPadding && n + r * .5 <= EAGLView.sScreenDimensions.height + u * r - kStreamIndicatorArrowBottomScreenPadding || s <= kStreamIndicatorArrowZoomFadeDistance ? (h.indicatorArrowOpacity -= a * kStreamIndicatorArrowFadeSpeed, h.indicatorArrowOpacity = MAX(h.indicatorArrowOpacity, kStreamIndicatorArrowMinOpacity)) : (h.indicatorArrowOpacity += a * kStreamIndicatorArrowFadeSpeed, h.indicatorArrowOpacity = MIN(h.indicatorArrowOpacity, 1));
                    var v = this.view.map.tileWidth, w = this.view.map.tileHeight;
                    o = MIN(o, EAGLView.sScreenDimensions.width - v - kStreamIndicatorArrowRightScreenPadding), p = MIN(p, EAGLView.sScreenDimensions.height - w - kStreamIndicatorArrowBottomScreenPadding), o = MAX(o, kStreamIndicatorArrowLeftScreenPadding), p = MAX(p, kStreamIndicatorArrowTopScreenPadding), f.x = o, f.y = p, f.x -= m, f.y -= n, f.normalize();
                    var x = f.computeAngle(Vector2.orientationAxis());
                    f.isCounterClockwiseToVector(Vector2.orientationAxis()) && (x = kTwoPI - x), h.indicatorArrowAnimTimer = MAX(MIN(kHalfPI + kHalfPI * .55, h.indicatorArrowAnimTimer), 0);
                    var y = SIN(h.indicatorArrowAnimTimer) * kStreamIndicatorArrowMaxStretchSize;
                    c[0] = -v * .5 * y, c[1] = -w * .5 * y, c[5] = v * .5 * y, c[6] = -w * .5 * y, c[10] = -v * .5 * y, c[11] = w * .5 * y, c[15] = v * .5 * y, c[16] = w * .5 * y;
                    var z = COS(x), A = SIN(x), B;
                    for (B = 0; B < 4; B++) {
                        var C = c[B * 5 + 0];
                        c[B * 5 + 0] = z * c[B * 5 + 0] - A * c[B * 5 + 1], c[B * 5 + 1] = A * C + z * c[B * 5 + 1], c[B * 5 + 0] += o, c[B * 5 + 1] += p
                    }
                    b.setVertexStreamDataArrays(c, d), b.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)
                }
            }, renderTowerCursor: function (a) {
                for (var b = 0; b < this.view.map.GetNumPlayers(); b++)
                    this.towerCursor[b] != null && (this.towerCursorIndex[b] >= 0 ? (this.towerCursorRangeIndicatorOpacity[b] += a * kRangeIndicatorFadeSpeed * 2, this.towerCursorRangeIndicatorOpacity[b] = MIN(this.towerCursorRangeIndicatorOpacity[b], 1), this.placementGridOpacity += a * kPlacementGridFadeSpeed * 2, this.placementGridOpacity = MIN(this.placementGridOpacity, 1), this.isValidBuildLocation[b] ? this.towerCursor[b].setColor(255, 255, 255, 255) : this.towerCursor[b].setColor(255, 0, 0, 255), TowerClass.renderRangeIndicatorWithTower(this.towerCursor[b], this.towerCursorRangeIndicatorOpacity[b], !this.isValidBuildLocation[b]), this.towerCursor[b].render(0)) : (TowerClass.renderRangeIndicatorWithTower(this.towerCursor[b], this.towerCursorRangeIndicatorOpacity[b], !1), this.towerCursor[b].render(0), this.towerCursorRangeIndicatorOpacity[b] <= 0 && (this.towerCursor[b].setColor(255, 255, 255, 255), this.view.map.buyTower(this.towerCursor[b], b), this.towerCursor[b] = null, this.towerCursorIndex[b] = -1)))
            }, testFirstTouch: function () {
                console.assert(this.firstTouch), this.tutorialParent.isDisabled = !0, this.tutorialParent.trackParentPos = !0, this.firstTouch = !1, this.view.map.unpauseGame();
                var a, b;
                this.view.map.initialFocusRegion & kDirection.West ? a = this.view.map.getTilesAcross() / 4 : this.view.map.initialFocusRegion & kDirection.East ? a = 3 * this.view.map.getTilesAcross() / 4 : a = this.view.map.getTilesAcross() / 2, this.view.map.initialFocusRegion & kDirection.North ? b = this.view.map.getTilesDown() / 4 : this.view.map.initialFocusRegion & kDirection.South ? b = 3 * this.view.map.getTilesDown() / 4 : b = this.view.map.getTilesDown() / 2, this.setCursorTowerTilePos(a, b)
            }, serialize: function (a) {
                a.serializeDouble(this, "zoomLevel"), a.serializeDouble(this.viewPos, "x"), a.serializeDouble(this.viewPos, "y"), this.updateView(0);
                if (a.isLoading()) {
                    this.targetZoomLevel = this.zoomLevel;
                    var b = LocalizeString("PausedInstructions", "The state of the game when it is not running.");
                    this.setStatusString(b, 0, !0);
                    for (var c = 0; c < kMaxPlayers; c++)
                        this.playbackButton[c] !== null && (this.playbackButton[c].isToggled = !0);
                    this.setCursorTowerTilePos(this.cursorTileX, this.cursorTileY)
                }
                this.firstTouch = !1
            }, setFadeOutMusic: function (a) {
                this.bFadeOutMusic = a
            }, setStatusString: function (a, b, c) {
                b == undefined && (b = kStatusTextDisplayTime), c == undefined && (c = !1);
                if (a === null)
                    this.statusTextCurrentOpacity = this.statusTextSavedOpacity, this.statusTextTargetOpacity = 0, this.statusString = this.statusStringSaved !== null ? this.statusStringSaved : null, this.statusStringSaved = null;
                else {
                    this.statusString === null && (this.statusTextTargetOpacity = b * .5, this.statusTextCurrentOpacity = 0), c && (this.statusTextSavedOpacity = this.statusTextCurrentOpacity, this.statusStringSaved = null, this.statusStringSaved = this.statusString !== null ? this.statusString : null, this.statusTextCurrentOpacity = MAX(1, this.statusTextCurrentOpacity));
                    if (this.statusString === null || this.statusString != a)
                        this.statusString = null, this.statusString = a !== null ? a : null, this.statusTextTargetOpacity = b * .5
                }
            }, kShowEndGameText: {
                get: function () {
                    return { Victory: 0, Defeat: 1, TimesUp: 2 }
                }
            }, setShowEndGameText: function (a) {
                if (!this.showEndGameText) {
                    this.showEndGameText = !0;
                    if (this.view.map.numPlayers > 1 && !this.view.map.isCoop) {
                        var b = this.view.map.player[0].GetScore(), c = this.view.map.player[1].GetScore();
                        this.view.map.player[0].GetHealth() == 0 ? this.endGameTextOverlay = this.playerTwoVictoryTextOverlay : this.view.map.player[1].GetHealth() == 0 ? this.endGameTextOverlay = this.playerOneVictoryTextOverlay
                            : b > c ? this.endGameTextOverlay = this.playerOneVictoryTextOverlay : b < c ? this.endGameTextOverlay = this.playerTwoVictoryTextOverlay : this.endGameTextOverlay = this.tieGameTextOverlay
                    } else
                        switch (a) {
                            case this.kShowEndGameText.Victory:
                                this.endGameTextOverlay = this.victoryTextOverlay;
                                break;
                            case this.kShowEndGameText.Defeat:
                                this.endGameTextOverlay = this.defeatTextOverlay;
                                break;
                            case this.kShowEndGameText.TimesUp:
                                this.endGameTextOverlay = this.timesUpTextOverlay
                        }
                    this.endGameTextOverlay.isHidden = !1, this.endGameTextDisplayTimer = kEndGameTextDisplayTime, this.endGameTextDisplayTimerHasExpired = !1, this.endGameTextScale = kEndGameTextInitialScale;
                    var d = this.endGameTextOverlay.color;
                    d.a = 0, this.endGameTextOverlay.color = d, this.endGameTextOverlayHalfWidth = this.endGameTextOverlay.halfWidth, this.endGameTextOverlayHalfHeight = this.endGameTextOverlay.halfHeight, this.view.map.handleGameEnd()
                }
            }, buttonPressed: function (a) {
                var b = null;
                if (a == kGameHudButtonPressQuit)
                    return;
                if (this.firstTouch) {
                    (a == kGameHudButtonPressPause || a == kGameHudButtonPressPlaceTower) && this.testFirstTouch();
                    return
                }
                switch (a) {
                    case kGameHudButtonPressFfwd:
                        for (var c = 0; c < kMaxPlayers; c++)
                            this.fastForwardButton[c] !== null && this.pressReleaseButton(this.fastForwardButton[c]);
                        break;
                    case kGameHudButtonPressPause:
                        this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0), this.onButtonReleasePlayback(this, null, null);
                        for (var c = 0; c < this.view.map.numPlayers; c++)
                            this.closeTowerMenu(c);
                        break;
                    case kButtonPress.Up:
                        this.isTowerMenuOpen() || (this.cursorTileY--, this.cursorTileY < this.view.map.minBuildTileY && (this.cursorTileY = this.view.map.minBuildTileY), this.setCursorTowerTilePos(this.cursorTileX, this.cursorTileY));
                        break;
                    case kButtonPress.Down:
                        this.isTowerMenuOpen() || (this.cursorTileY++, this.cursorTileY > this.view.map.maxBuildTileY && (this.cursorTileY = this.view.map.maxBuildTileY), this.setCursorTowerTilePos(this.cursorTileX, this.cursorTileY));
                        break;
                    case kButtonPress.Left:
                        this.isTowerMenuOpen() ? (this.sellTowerButton[kDefaultPlayerID].animationType = kButtonAnimationType.Translate, this.onButtonReleaseSellTower(this, this.sellTowerButton[kDefaultPlayerID], null), this.bCursorOnValidBuildLocation = !0) : (this.cursorTileX--, this.cursorTileX < this.view.map.minBuildTileX && (this.cursorTileX = this.view.map.minBuildTileX), this.setCursorTowerTilePos(this.cursorTileX, this.cursorTileY));
                        break;
                    case kButtonPress.Right:
                        this.isTowerMenuOpen() ? this.upgradeTowerButton[kDefaultPlayerID].isDisabled || (this.upgradeTowerButton[kDefaultPlayerID].animationType = kButtonAnimationType.Translate, this.onButtonReleaseUpgradeTower(this, this.upgradeTowerButton[kDefaultPlayerID], null)) : (this.cursorTileX++, this.cursorTileX > this.view.map.maxBuildTileX && (this.cursorTileX = this.view.map.maxBuildTileX), this.setCursorTowerTilePos(this.cursorTileX, this.cursorTileY));
                        break;
                    case kGameHudButtonPressPlaceTower:
                        this.bHideCursor ? this.bHideCursor = !1 : this.bCursorOnValidBuildLocation ? this.cursorTower !== null && (this.view.audioConfig.buildTowerSoundEffect.play(), this.cursorTower.setColor(255, 255, 255, 255), this.view.map.buyTower(this.cursorTower), this.cursorTower = null, this.bCursorOnValidBuildLocation = !1) : this.view.map.isTowerAtTilePosition(this.cursorTileX, this.cursorTileY) ? isTowerMenuOpen() ? this.closeTowerMenu() : this.openTowerMenu(this.cursorTileX, this.cursorTileY) : this.view.audioConfig.invalidBuildLocationSoundEffect.play();
                        break;
                    case kButtonPress.Back:
                        this.isTowerMenuOpen() ? this.closeTowerMenu() : this.bHideCursor = !this.bHideCursor;
                        break;
                    case kGameHudButtonPressSelectTower1:
                    case kGameHudButtonPressSelectTower2:
                    case kGameHudButtonPressSelectTower3:
                    case kGameHudButtonPressSelectTower4:
                    case kGameHudButtonPressSelectTower5:
                    case kGameHudButtonPressSelectTower6:
                        if (this.towerCursor[kDefaultPlayerID] === null) {
                            this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0);
                            var d = a - kGameHudButtonPressSelectTower1;
                            this.buildTower(d, this.mousePosition.x, this.mousePosition.y, kDefaultPlayerID) && this.startBuildTower(kDefaultPlayerID, d)
                        }
                        break;
                    default:
                }
            }, touchesBegan: function (a) {
                var b = a[0];
                if (this.firstTouch) {
                    this.testFirstTouch();
                    return
                }
                if (a.length == 1 || this.bMultiplayer) {
                    this._super(a);
                    var c = b.locationInView(this.view), d = this.GetPlayerIndexForTouch(c.x / EAGLView.sScreenDimensions.width, c.y / EAGLView.sScreenDimensions.height);
                    b.button == GLUT_RIGHT_BUTTON && this.towerCursor[d] && (this.towerCursor[d] = null);
                    if (this.selectedTowerTileGridIndex[d] == -1) {
                        this.touchDeltaViewSpace[d] = 0;
                        var e = this.convertToWorldPosFromViewPos(c);
                        if (e.x < 0 || e.y < 0)
                            return;
                        this.selectedTowerTileGridIndex[d] = this.findSelectedTowerAtWorldPos(e.x, e.y);
                        if (this.activeButton[d] != null || this.selectedTowerTileGridIndex[d] != -1 && !this.view.map.isTowerAtTileGridIndex(this.selectedTowerTileGridIndex[d]))
                            this.selectedTowerTileGridIndex[d] = -1
                    } else
                        this.isModifyTowerButtonInFocus(d) || this.closeTowerMenu(d)
                }
            }, touchesMoved: function (a) {
                this._super(a);
                var b = -1;
                for (var c = 0; c < kMaxPlayers; c++) {
                    var d = this.GetNumPlayerTouches(c, a);
                    if (d >= 2) {
                        b = c;
                        break
                    }
                }
                if (a.length == 2 && !this.bMultiplayer) {
                    if (this.isTowerMenuOpen(b) || this.towerCursor[0])
                        return;
                    var e = null, f = null;
                    this.bMultiplayer && (e = Form.FindPlayerTouch(b, a, 1), f = Form.FindPlayerTouch(b, a, 2));
                    var g, h, i, j;
                    for (var k = 0; k < a.length; ++k) {
                        var l = a[k];
                        k == 0 ? (g = l.previousLocationInView(this.view), i = l.locationInView(this.view)) : (h = l.previousLocationInView(this.view), j = l.locationInView(this.view))
                    }
                    var m = (h.x + g.x) * .5, n = (h.y + g.y) * .5, o = (j.x + i.x) * .5, p = (j.y + i.y) * .5;
                    this.viewPos.x = this.viewPos.x + (o - m) * kScrollSpeed, this.viewPos.y = this.viewPos.y + (p - n) * kScrollSpeed;
                    var q = SQRT(SQUARE(h.x - g.x) + SQUARE(h.y - g.y)), r = SQRT(SQUARE(j.x - i.x) + SQUARE(j.y - i.y)), s = (q - r) / kZoomSpeed;
                    this.zoomLevel = this.zoomLevel + s, this.zoomLevel = MAX(MIN(this.zoomLevel, this.maxZoom), kMinZoomLevel), this.updateModifyTowerMenuForZoom(), this.targetZoomLevel = this.zoomLevel, this.updateView(0)
                } else {
                    var t = this.bMultiplayer ? a.length : 1;
                    for (var k = 0; k < t; k++) {
                        var l = a[k], u = l.locationInView(this.view), c = this.GetPlayerIndexForTouch(u.x / EAGLView.sScreenDimensions.width, u.y / EAGLView.sScreenDimensions.height);
                        if (this.isTowerMenuOpen(c))
                            continue;
                        if (!(this.towerCursorIndex[c] >= 0) && this.towerCursorIndex[c] == -1) {
                            if (this.pressedButton[c] != null)
                                return;
                            var v = l.previousLocationInView(this.view);
                            this.touchDeltaViewSpace[c] += SQRT(SQUARE(u.x - v.x) + SQUARE(u.y - v.y)), this.viewPos.x = this.viewPos.x + (u.x - v.x) * kScrollSpeed, this.viewPos.y = this.viewPos.y + (u.y - v.y) * kScrollSpeed, this.updateView(0)
                        }
                    }
                }
                for (var c = 0; c < kMaxPlayers; c++)
                    this.modifyTowerMenu[c] != null && this.updateTowerMenuPosition(this.modifyTowerMenu[c], c)
            }, mouseMoved: function (a, b, c, d) {
                var e = c / EAGLView.sScreenDimensions.width, f = d / EAGLView.sScreenDimensions.height;
                if (IsPlatformMac()) {
                    var g = this.GetPlayerIndexForTouch(e, f);
                    if (this.towerCursorIndex[g] >= 0)
                        this.moveTowerBeingPlaced(c, d);
                    else if (this.nextRoundOverlay != null && !this.firstTouch)
                        if (!this.bNextRoundOpening) {
                            var h = .021 * 2 * this.nextRoundOverlay.halfWidth, i = .465 * 2 * this.nextRoundOverlay.halfHeight, j = .133 * 2 * this.nextRoundOverlay.halfWidth, k = .632 * 2 * this.nextRoundOverlay.halfHeight;
                            this.bNextRoundOpening = this.nextRoundOverlay.centerX - this.nextRoundOverlay.halfWidth + h <= e && e <= this.nextRoundOverlay.centerX - this.nextRoundOverlay.halfWidth + j && this.nextRoundOverlay.centerY - this.nextRoundOverlay.halfHeight + i <= f && f <= this.nextRoundOverlay.centerY - this.nextRoundOverlay.halfHeight + k
                        } else
                            this.bNextRoundOpening = this.nextRoundOverlay.centerX - this.nextRoundOverlay.halfWidth <= e && e <= this.nextRoundOverlay.centerX + this.nextRoundOverlay.halfWidth && this.nextRoundOverlay.centerY - this.nextRoundOverlay.halfHeight <= f && f <= this.nextRoundOverlay.centerY + this.nextRoundOverlay.halfHeight
                }
                this.mousePosition.x = c, this.mousePosition.y = d
            }, touchesEndedPlaceTower: function (a) {
                var b = !1;
                return this.towerCursor[a] != null && (b = !0, this.isValidBuildLocation[a] ? this.towerCursorIndex[a] != -1 && this.view.audioConfig.buildTowerSoundEffect.play() : (this.view.audioConfig.invalidBuildLocationSoundEffect.play(), this.towerCursor[a] = null, this.previouslySelectedTowerTileGridIndex[a] = -1, this.selectedTowerTileGridIndex[a] = -1)), this.buildTowerMenu[a].trackParentPos = !1, this.towerCursorIndex[a] = -1, b
            }, touchesEnded: function (a) {
                this._super(a);
                for (var b = 0; b < a.length; b++) {
                    var c = a[b], d = c.locationInView(this.view), e = this.GetPlayerIndexForTouch(d.x / EAGLView.sScreenDimensions.width, d.y / EAGLView.sScreenDimensions.height), f = !1;
                    this.bTouchesEndedCanPlaceTower ? f = this.touchesEndedPlaceTower(e) : this.bTouchesEndedCanPlaceTower = !0;
                    var g = this.convertToWorldPosFromViewPos(d);
                    if (g.x < 0 || g.y < 0)
                        return;
                    if (this.touchDeltaViewSpace[e] <= this.view.map.tileWidth) {
                        var h = this.findSelectedTowerAtWorldPos(g.x, g.y);
                        if (this.selectedTowerTileGridIndex[e] != -1 && this.selectedTowerTileGridIndex[e] == h && this.view.map.isTowerAtTileGridIndex(h) && !f) {
                            var i, j;
                            this.view.map.getTilePos(h, function (a, b) {
                                i = a, j = b
                            }), this.openTowerMenu(i, j, e)
                        } else
                            this.closeTowerMenu(e)
                    } else
                        this.closeTowerMenu(e)
                }
            }, findSelectedTowerAtWorldPos: function (a, b) {
                var c = this.view.map.getTileGridIndexForWorldPos(a, b);
                if (c == -1)
                    return c;
                var d, e;
                this.view.map.getTilePos(c, function (a, b) {
                    d = a, e = b
                });
                var f = FLT_MAX, g, h;
                for (g = MAX(d - 1, this.view.map.minBuildTileX); g <= MIN(d + 1, this.view.map.maxBuildTileX); g++)
                    for (h = MAX(e - 1, this.view.map.minBuildTileY); h <= MIN(e + 1, this.view.map.maxBuildTileY); h++) {
                        var i = this.view.map.getTileGridIndex(g, h);
                        if (this.view.map.isTowerAtTileGridIndex(i)) {
                            var j, k;
                            this.view.map.getWorldPosFromTilePos(g, h, function (a, b) {
                                j = a, k = b
                            }), j += this.view.map.tileWidth * .5, k += this.view.map.tileHeight * .5;
                            var l = SQRT(SQUARE(j - a) + SQUARE(k - b));
                            l < f && (f = l, c = i)
                        }
                    }
                return c
            }, moveTowerBeingPlaced: function (a, b) {
                var c = this.GetPlayerIndexForTouch(a / EAGLView.sScreenDimensions.width, b / EAGLView.sScreenDimensions.height);
                console.assert(this.towerCursorIndex[c] >= 0);
                var d = this.convertToWorldPosFromViewPos(new Point(a, b));
                d.y += kTowerPlacementVerticalOffset;
                var e = this.view.map.getTileGridIndexForWorldPos(d.x, d.y);
                e > 0 && this.towerCursor[c] != null && e != this.towerCursor[c].tileGridIndex && (this.view.map.getWorldPosFromTileGridIndex(e, d), this.towerCursor[c].x = d.x + this.view.map.tileWidth * .5, this.towerCursor[c].y = d.y + this.view.map.tileHeight * .5, this.towerCursor[c].tileGridIndex = e, this.isValidBuildLocation[c] = this.view.map.isValidBuildLocation(this.towerCursor[c].tileGridIndex))
            }, isModifyTowerButtonInFocus: function (a) {
                return this.activeButton[a] == this.sellTowerButton[a] || this.activeButton[a] == this.upgradeTowerButton[a] ? !0 : !1
            }, closeTowerMenu: function (a) {
                this.isTowerMenuOpen(a) && this.view.audioConfig.towerDeselectSoundEffect.play(), this.modifyTowerMenu[a].trackParentPos = !0, this.selectedTowerTileGridIndex[a] = -1
            }, GetNumPlayerTouches: function (a, b) {
                var c = 0;
                for (var d = 0; d < b.length; d++) {
                    var e = b[d], f = e.locationInView(null);
                    this.GetPlayerIndexForTouch(f.x / EAGLView.sScreenDimensions.width, f.y / EAGLView.sScreenDimensions.height) == a && c++
                }
                return c
            }, isTowerMenuOpen: function (a) {
                return !this.modifyTowerMenu[a || 0].trackParentPos
            }, updateTowerMenuPosition: function (a, b) {
                if (this.selectedTowerTileGridIndex[b] == -1)
                    return;
                console.assert(this.view.map.isTowerAtTileGridIndex(this.selectedTowerTileGridIndex[b]));
                var c, d;
                this.view.map.getTilePos(this.selectedTowerTileGridIndex[b], function (a, b) {
                    c = a, d = b
                });
                var e, f;
                this.view.map.getWorldPosFromTilePos(c, d, function (a, b) {
                    e = a, f = b
                }), e += this.view.map.tileWidth * .5, f += this.view.map.tileHeight * .5;
                var g, h;
                this.convertToViewPosFromWorldPos(e, f, function (a, b) {
                    g = a, h = b
                }), this.modifyTowerMenu[b].centerX = g / EAGLView.sScreenDimensions.width, this.modifyTowerMenu[b].centerY = h / EAGLView.sScreenDimensions.height
            }, queueHeartbeat: function (a, b) {
                this.heartbeatQueue.push(new h(b, a))
            }, openTowerMenu: function (a, b, c) {
                this.selectedTowerTileGridIndex[c] = this.view.map.getTileGridIndex(a, b), console.assert(this.view.map.isTowerAtTileGridIndex(this.selectedTowerTileGridIndex[c])), this.sellTowerButton[c].animationType = kButtonAnimationType.Scale, this.upgradeTowerButton[c].animationType = kButtonAnimationType.Scale;
                var d, e;
                this.view.map.getWorldPosFromTilePos(a, b, function (a, b) {
                    d = a, e = b
                }), d += this.view.map.tileWidth * .5, e += this.view.map.tileHeight * .5;
                var f, g;
                this.convertToViewPosFromWorldPos(d, e, function (a, b) {
                    f = a, g = b
                }), this.modifyTowerMenu[c].centerX = f / EAGLView.sScreenDimensions.width, this.modifyTowerMenu[c].centerY = g / EAGLView.sScreenDimensions.height, this.modifyTowerMenu[c].trackParentPos = !1, this.view.audioConfig.towerSelectSoundEffect.play(), this.updateModifyTowerButtonLabelsForTowerAtTileGridIndex(this.selectedTowerTileGridIndex[c])
            }, queueUnlockable: function (a) {
                var b = LocalizeString(a, null);
                this.unlockableQueue.push(b), this.unlockableBoxParent.isHidden = !1
            }, createCursorTower: function () {
                console.assert(this.towerIconCurrent >= 0);
                var a = this.view.map.towerClassList, b = d(this.buttonList[this.towerIconCurrent].name), c = a[b], e = new Tower(c, this.view.map, kDefaultPlayerID), f = new Point;
                return this.view.map.getWorldPosFromTilePos(this.cursorTileX, this.cursorTileY, function (a, b) {
                    f.x = a, f.y = b
                }), e.x = f.x + this.view.map.tileWidth * .5, e.y = f.y + this.view.map.tileHeight * .5, e.tileGridIndex = this.view.map.getTileGridIndex(this.cursorTileX, this.cursorTileY), e
            }, selectTowerIconLeft: function () {
                this.selectTowerIconIncrement(-1)
            }, selectTowerIconRight: function () {
                this.selectTowerIconIncrement(1)
            }, selectTowerIconIncrement: function (a) {
                this.towerIconCurrent == -1 && (this.towerIconCurrent = a > 0 ? this.towerIconLast : this.towerIconFirst);
                var b = this.towerIconCurrent, c;
                do
                    this.towerIconCurrent += a, this.towerIconCurrent < this.towerIconFirst ? this.towerIconCurrent = this.towerIconLast : this.towerIconCurrent > this.towerIconLast && (this.towerIconCurrent = this.towerIconFirst), c = this.buttonList[this.towerIconCurrent];
                while (this.towerIconCurrent != b && (c.isHidden || c.isDisabled));
                if (c.isHidden || c.isDisabled)
                    this.towerIconCurrent = -1;
                this.cursorTower = null, this.towerIconCurrent != -1 && this.towerIconCurrent != b && (this.cursorTower = this.createCursorTower())
            }, updateUnlockableDisplay: function (a) {
                var b = AchievementManager.GetSingleton(), c = b.GetTopAchievementInQueue();
                if (c == kAchievement.Undefined) {
                    this.achievementTitle.SetOpacity(0), this.achievementDescription.SetOpacity(0);
                    if (this.unlockableQueue.length > 0 && (this.view.map.gameState != kGameState.Paused || this.showEndGameText)) {
                        this.achievementIcon.isHidden = !0, this.unlockableTimer -= a;
                        if (this.unlockableTimer <= kPrecisionErrorCorrection)
                            if (!this.unlockableBoxParent.trackParentPos)
                                this.unlockableQueue.removeAtIndex(0), this.unlockableBoxParent.trackParentPos = !0;
                            else if (this.unlockableQueue.length > 0 && IS_EQUAL(this.unlockableBox.trackTimer, 0)) {
                                this.unlockableTimer = kUnlockableDisplayTime;
                                var d = this.unlockableQueue[0];
                                this.unlockableBox.setLabel(d), this.view.audioConfig.unlockableSoundEffect.play(), this.unlockableBoxParent.trackParentPos = !1
                            }
                    }
                }
            }, updateEndGameText: function (a) {
                this.endGameTextDisplayTimer -= a, this.endGameTextScale -= a * kEndGameTextScaleSpeed, this.endGameTextScale = MAX(this.endGameTextScale, 1);
                var b = AchievementManager.GetSingleton(), c = b.GetTopAchievementInQueue(), d = this.unlockableQueue.length;
                if (this.endGameTextDisplayTimer <= 0 && d == 0 && c == kAchievement.Undefined && IS_EQUAL(this.unlockableBox.trackTimer, 0) && !this.endGameTextDisplayTimerHasExpired) {
                    this.endGameTextOverlay.halfWidth = this.endGameTextOverlayHalfWidth, this.endGameTextOverlay.halfHeight = this.endGameTextOverlayHalfHeight, this.endGameTextDisplayTimer = kEndGameTextDisplayTime, this.endGameTextDisplayTimerHasExpired = !0;
                    if (this.view.map.highScoreAchieved)
                        this.userInterface.switchToPopupForm(kNewHighScoreFormName);
                    else {
                        var e, f = this.view.map.name, g = this.view.map.gameplayMode;
                        Payment ? Payment.isPaidUser(bindSelf(function (a) {
                            if (!a) {
                                var b = this.userInterface.switchToPopupForm(kUpsellForm + "_grasslands");
                                b.scoresMapName = f, b.scoresHighlightNewest = !1, b.scoresGameplayMode = g
                            } else
                                e = this.userInterface.switchToPopupForm(kScoresFormName), e.highlightNewestHighScore = !1, e.mapName = null, e.mapName = f, e.selectedGameplayMode = g
                        }, this)) : (e = this.userInterface.switchToPopupForm(kScoresFormName), e.highlightNewestHighScore = !1, e.mapName = null, e.mapName = this.view.map.name, e.selectedGameplayMode = g)
                    }
                }
            }, updateModifyTowerButtonLabelsForTowerAtTileGridIndex: function (a) {
                var b = this.view.map.getTowerAtTileGridIndex(a), c = b.towerClass, d = null;
                b.techLevelIndex + 1 < c.techLevels.length && (d = c.techLevels[b.techLevelIndex + 1]), d != null ? this.upgradeTowerButton[b.GetPlayerIndex()].setLabel(sprintf("$%d", d.cost)) : this.upgradeTowerButton[b.GetPlayerIndex()].setLabel(sprintf("max"));
                var e = this.view.map.getTowerSellCostAtTileGridIndex(a);
                this.sellTowerButton[b.GetPlayerIndex()].setLabel(sprintf("$%d", e))
            }, setCursorTowerTilePos: function (a, b) {
                this.cursorTileX = a, this.cursorTileY = b, console.assert(this.view.map.minBuildTileY <= this.cursorTileY && this.cursorTileY <= this.view.map.maxBuildTileY), console.assert(this.view.map.minBuildTileX <= this.cursorTileX && this.cursorTileX <= this.view.map.maxBuildTileX), this.bCursorOnValidBuildLocation = this.view.map.isValidBuildLocation(this.cursorTileX, this.cursorTileY);
                if (this.cursorTower !== null) {
                    var c = new Point;
                    this.view.map.getWorldPosFromTilePos(this.cursorTileX, this.cursorTileY, function (a, b) {
                        c.x = a, c.y = b
                    }), this.cursorTower.x = c.x + this.view.map.tileWidth * .5, this.cursorTower.y = c.y + this.view.map.tileHeight * .5, this.cursorTower.tileGridIndex = this.view.map.getTileGridIndex(this.cursorTileX, this.cursorTileY)
                }
            }, convertToViewPosFromWorldPos: function (a, b, c) {
                c((a - this.camera.left) / (this.camera.right - this.camera.left) * EAGLView.sScreenDimensions.width, (b - this.camera.top) / (this.camera.bottom - this.camera.top) * EAGLView.sScreenDimensions.height)
            }, queueHeartbeat: function (a, b) {
                this.heartbeatQueue.push(new h(b, a))
            }, updateHeartbeat: function (a) {
                if (this.heartbeatQueue.length > 0 && this.view.map.gameState != kGameState.Paused) {
                    var b = this.heartbeatQueue[0].heartbeatScale - 1, c = this.heartbeatQueue[0].playerIndex, d = SIN((kHeartbeatPumpTime - this.heartbeatTimer) / kHeartbeatPumpTime * kPI) * b + 1;
                    this.healthIconOverlay[c].halfHeight = this.healthIconOverlayHalfHeight[c] * d, this.healthIconOverlay[c].halfWidth = this.healthIconOverlayHalfWidth[c] * d, this.heartbeatTimer -= a, this.heartbeatTimer <= kPrecisionErrorCorrection && (this.healthIconOverlay[c].halfWidth = this.healthIconOverlayHalfWidth[c], this.healthIconOverlay[c].halfHeight = this.healthIconOverlayHalfHeight[c], this.heartbeatQueue.shift(), this.heartbeatTimer = kHeartbeatPumpTime, this.heartbeatQueue.length > 0 && this.view.audioConfig.enemyEscapesSoundEffect.play())
                }
            }
        }, "GameHudForm");
        window.jQuery.extend(l, { sCaptureMode: kCaptureMode.None, kShowEndGameText: l.prototype.kShowEndGameText }), window.GameHudForm = l, Preloader.initialize("userinterface/forms/gamehudform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        kBackgroundMusicFadeInSpeed = 1;
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a)
            }, destroy: function () {
                this._super()
            }, buttonPressed: function (a) {
            }, onButtonReleaseCredits: function (a, b, c) {
                a.userInterface.switchToPopupForm(kCreditsFormName)
            }, onButtonReleaseOptions: function (a, b, c) {
                a.userInterface.switchToPopupForm(kTitleOptionsFormName)
            }, onButtonReleaseHelp: function (a, b, c) {
                a.userInterface.switchToPopupForm(kHelpForm01Name)
            }, onButtonReleasePlay: function (a, b, c) {
                Map.doesSaveGameExist(function (b) {
                    b ? a.userInterface.switchToPopupForm(kConfirmNewGameFormName) : a.userInterface.switchToPopupForm(IsPlatformIPad() ? kGameTypeFormName : IsPlatformMac() || IsPlatformAndroid() ? kMapConfigurationFormName : kMapSelectionFormName)
                })
            }, onButtonReleaseResume: function (a, b, c) {
                Map.doesSaveGameExist(function (b) {
                    b && (a.view.map !== null && a.view.map.clearAndRelease(), a.view.map = new Map(a.view), a.view.map.setMapNameFromSaveFile(null, function () {
                        a.view.map.restoringGameState = !0, a.userInterface.switchToPopupForm(kLoadingFormName)
                    }))
                })
            }, onButtonReleaseScores: function (a, b, c) {
                var d = a.userInterface.switchToPopupForm(kScoresFormName);
                d.highlightNewestHighScore = !1, d.mapName = null, d.mapName = Map.getOfficialMapNameForIndex(0)
            }, onFormOpen: function () {
                this._super(), this.updateResumeButton();
                if (SoundEngine.GetIsMusicEnabled()) {
                    SoundEngine.UnloadBackgroundMusicTrack();
                    var a, b = null;
                    b = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Music", "theme", "ogg"), a = b, SoundEngine.LoadBackgroundMusicTrack(a, !1, !0), SoundEngine.SetBackgroundMusicVolume(0), SoundEngine.StartBackgroundMusic()
                }
                Map.doesSaveGameExist(bindSelf(function (a) {
                    if (!this.overlayList)
                        return;
                    for (var b = 0; b < this.overlayList.length; ++b) {
                        var c = this.overlayList[b];
                        if (c.name == "DisabledResume".toLowerCase()) {
                            var d = c.color;
                            d.a = a ? 0 : 255, c.color = d
                        }
                    }
                    for (var b = 0; b < this.buttonList.length; ++b) {
                        var e = this.buttonList[b];
                        e.name == "Resume".toLowerCase() ? e.isDisabled = !a : e.name != "Play".toLowerCase()
                    }
                }, this))
            }, update: function (a) {
                this._super(a), this.updateResumeButton();
                var b = NextStep.UserDefaults.standardUserDefaults();
                if (SoundEngine.GetIsMusicEnabled()) {
                    var c = b.floatForKey(kMusicVolumePreference), d = MIN(SoundEngine.GetBackgroundMusicVolume() + a * kBackgroundMusicFadeInSpeed, c);
                    SoundEngine.SetBackgroundMusicVolume(d), SoundEngine.SetEffectsVolume(b.floatForKey(kSoundEffectVolumePreference))
                }
            }, updateResumeButton: function () {
                Map.doesSaveGameExist(bindSelf(function (a) {
                    if (!this.overlayList)
                        return;
                    for (var b = 0; b < this.overlayList.length; b++) {
                        var c = this.overlayList[b];
                        if (c.name == "DisabledResume".toLowerCase()) {
                            var d = c.color.copy();
                            d.a = a ? 0 : 255, c.color = d
                        }
                    }
                    for (var b = 0; b < this.buttonList.length; b++) {
                        var e = this.buttonList[b];
                        e.name == "Resume".toLowerCase() && (e.isDisabled = !a)
                    }
                }, this))
            }
        }, "TitleScreenForm");
        window.TitleScreenForm = b, Preloader.initialize("userinterface/forms/titlescreenform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        kCreditHeadingsFontName = "font_gold", kCreditHeadingsFontSize = 1.5, kCreditNamesFontName = "font_dark", kCreditNamesFontSize = 1, kCreditScrollSpeed = 50, kCreditSectionPadding = 0, kCreditPostHeadingPadding = 10, kCreditScrollStartYPosition = function () {
            return EAGLView.sScreenDimensions.height - 50
        };
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a), this.numSections = 0, this.creditsFrameTextureID = Sprite.initTextureFromFile("UserInterface", "about_screen_frame.png")
            }, destroy: function () {
                this._super(), this.creditsFrameTextureID > 0 && Sprite.destroyTexture(this.creditsFrameTextureID)
            }, onButtonReleaseX: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }, onFormOpen: function () {
                this.loadCredits()
            }, loadCredits: function () {
                var a = [], b = [], c, d, e;
                d = 1, c = sprintf("%s%03d", "CreditsHeading", d), e = LocalizeString(c, null);
                while (e != c)
                    a.push(e), c = sprintf("%s%03d", "CreditsHeading", ++d), e = LocalizeString(c, null);
                d = 1, c = sprintf("%s%03d", "CreditsNames", d), e = LocalizeString(c, null);
                while (e != c)
                    b.push(e), c = sprintf("%s%03d", "CreditsNames", ++d), e = LocalizeString(c, null);
                console.assert(b.length == a.length, "The number of credit headings and name sections do not match!"), this.numSections = b.length, this.creditHeadings = new Array(a.length), this.creditNames = new Array(a.length);
                for (var f = 0; f < this.numSections; f++)
                    this.creditHeadings[f] = new Text(Map.GetFont(kCreditHeadingsFontName)), this.creditHeadings[f].SetString(a[f]), this.creditHeadings[f].SetTextBoxSize(new Vector2(1, 1)), this.creditHeadings[f].SetAlignment(kTextAlignment.Center), this.creditHeadings[f].SetSize(kCreditHeadingsFontSize), f == 0 ? this.creditHeadings[f].SetPosition(0, kCreditScrollStartYPosition()) : this.creditHeadings[f].SetPosition(0, this.creditNames[f - 1].GetPosition().y + this.sectionLength(this.creditNames[f - 1]) + kCreditSectionPadding), this.creditNames[f] = new Text(Map.GetFont(kCreditNamesFontName)), this.creditNames[f].SetString(b[f]), this.creditNames[f].SetTextBoxSize(new Vector2(1, 1)), this.creditNames[f].SetAlignment(kTextAlignment.Center), this.creditNames[f].SetSize(kCreditNamesFontSize), this.creditNames[f].SetPosition(0, this.creditHeadings[f].GetPosition().y + this.sectionLength(this.creditHeadings[f]) + kCreditSectionPadding)
            }, renderFrame: function () {
                var a = RenderDevice.createVertexTexCoordArray(4, [-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 1, 1]);
                if (this.creditsFrameTextureID) {
                    var b = RenderDevice.getRenderDevice();
                    b.pushMatrix(), b.translateModelViewMatrix(.5 * EAGLView.sScreenDimensions.width, .5 * EAGLView.sScreenDimensions.height), b.scaleModelViewMatrix(.5 * EAGLView.sScreenDimensions.width, .5 * EAGLView.sScreenDimensions.height), b.setTextureWithID(this.creditsFrameTextureID), b.setBlendState(kBlendState.Alpha), b.setTextureAddressingMode(kTextureAddressMode.Clamp), b.setTextureFilteringMode(kTextureFilterType.Linear), b.setVertexStreamDataArrays(a), b.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), b.popMatrix()
                }
            }, render: function (a) {
                this._super(a);
                for (var b = 0; b < this.numSections; b++) {
                    var c = this.creditHeadings[b].GetPosition();
                    c.y -= kCreditScrollSpeed * a, this.creditHeadings[b].SetPositionWithVector(c), this.creditHeadings[b].Render(a), c = this.creditNames[b].GetPosition(), c.y -= kCreditScrollSpeed * a, this.creditNames[b].SetPositionWithVector(c), this.creditNames[b].Render(a)
                }
                this.creditNames[this.numSections - 1].GetPosition().y <= 130 - this.sectionLength(this.creditNames[this.numSections - 1]) && this.resetAnimation(), this.renderFrame()
            }, update: function (a) {
            }, sectionLength: function (a) {
                if (a.GetString().length <= 0)
                    return 0;
                var b = 1, c = a.GetString(), d = 0, e = /\\n/g;
                while (e.exec(c))
                    b++;
                var f = 0, g = 0;
                return a.MeasureString(a.GetString(), function (a, b) {
                    f = a, g = b
                }), b == 1 && (g += a.GetFont().GetSpaceWidth() * 2), g *= EAGLView.sScreenDimensions.height, g * b
            }, resetAnimation: function () {
                for (var a = 0; a < this.numSections; a++)
                    a == 0 ? this.creditHeadings[a].SetPosition(0, kCreditScrollStartYPosition()) : this.creditHeadings[a].SetPosition(0, this.creditNames[a - 1].GetPosition().y + this.sectionLength(this.creditNames[a - 1]) + kCreditSectionPadding), this.creditNames[a].SetPosition(0, this.creditHeadings[a].GetPosition().y + this.sectionLength(this.creditHeadings[a]) + kCreditSectionPadding)
            }
        }, "CreditsForm");
        window.CreditsForm = b, Preloader.initialize("userinterface/forms/creditsform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a), this.mapButton = new Array(kNumOfficialMaps);
                for (var f = 0; f < kNumOfficialMaps; f++)
                    this.mapButton[f] = null
            }, destroy: function () {
                this._super()
            }, onFormOpen: function () {
                for (var a = 0; a < this.buttonList.length; ++a) {
                    var c = this.buttonList[a], d = this.GetMapButtonMapNum(c);
                    d >= 0 && (this.mapButton[d] = c, this.mapButton[d].isDisabled = !b.isMapPlayable(d))
                }
                this._super()
            }, onButtonReleaseMap: function (a, c, d) {
                var e = a, f = this.GetMapButtonMapNum(c);
                console.assert(f >= 0), b.selectedMapIndex = f
            }, onButtonReleaseX: function (a, b, c) {
                var d = a;
                d.userInterface.switchToPopupForm(null)
            }
        }, "MapSelectionForm");
        window.jQuery.extend(b, {
            selectedMapIndex: -1, bIsMultiplayer: !1, bIsMultiplayerCoop: !1, GetMapNum: function (a) {
                var b = a, c = !0;
                try {
                    var d = parseInt(a, 10) - 1;
                    return d >= 0 ? d : -1
                } catch (e) {
                    return -1
                }
                return -1
            }, isMapPlayable: function (a, c) {
                if (b.bIsMultiplayer)
                    return !0;
                if (a == 0)
                    return !0;
                if (a == kMapIndex.BuyAllPsuedoMap) {
                    var d = !0, e = 0, f = kMapIndexSingleplayerLast;
                    for (; e <= f; e++)
                        if (!b.isMapPlayable(e, c)) {
                            d = !1;
                            break
                        }
                    return d
                }
                var g = NextStep.UserDefaults.standardUserDefaults(), h = Map.getOfficialMapNameForIndex(a), i;
                i = h, i += kMapSettingsKey;
                var j = g[i], k = !1;
                return j && j[kPlayableKey] && (k = j[kPlayableKey]), navigator.onLine && (this.permissionCheck || (this.permissionCheck = 0), this.permissionCheck == 0 && (this.permissionCheck++, Payment.permissionsList(bindSelf(function (a) {
                    for (var b = 0; b <= kMapIndexSingleplayerLast; b++) {
                        var d = g[Map.getOfficialMapNameForIndex(b) + kMapSettingsKey];
                        d && (d[kPlayableKey] = !1, d[kTowerCombo2Key] = !1)
                    }
                    if (typeof a != 'undefined' && a.length > 0) {
                        g["grasslands" + kMapSettingsKey][kPlayableKey] = !0, a.forEach(function (a) {
                            var b = a + kMapSettingsKey, c = g[b];
                            c || (c = g[b] = {}), c[kPlayableKey] = !0;
                            var d = Enum.findValue(kMapIndex, a, !0), e = Map.getTowerCombo2ReverseDependencyForMapIndex(d);
                            e && e.forEach(function (a) {
                                var b = Map.getOfficialMapNameForIndex(a), c = b + kMapSettingsKey, d = g[c];
                                d || (d = g[c] = {}), d[kTowerCombo2Key] = !0
                            })
                        }), g.synchronize(), c && c(), this.permissionCheck--
                    }
                }, this), bindSelf(function (a) {
                    if (a.status == 302) {
                        var b = !1;
                        for (var c = 1; c <= kMapIndexSingleplayerLast; c++) {
                            var d = g[Map.getOfficialMapNameForIndex(c) + kMapSettingsKey];
                            d && (b = b || d[kPlayableKey], d[kPlayableKey] = !1, d[kTowerCombo2Key] = !1)
                        }
                        g["grasslands" + kMapSettingsKey][kPlayableKey] = !0, b && User.getUser(function (a) {
                            showPopup({ elm: $("#login-purchased-warning").attr("href", a.urls.login), shadow: $("#shadow-popup"), closers: $("#login-purchased-warning .continue") })
                        })
                    }
                    this.permissionCheck--
                }, this)))), k
            }, GetMapButtonMapNum: function (a) {
                var b = "Map";
                return StringExt.hasPrefix(a.GetName(), b) ? Map.GetMapNum(a.GetName().subsring(b.length)) : -1
            }
        }), window.MapSelectionForm = b, Preloader.initialize("userinterface/forms/mapselectionform.js")
    }), Preloader.include(["userinterface/form.js", "userinterface/forms/mapselectionform.js"], function () {
        function e() {
            var a = NextStep.UserDefaults.standardUserDefaults(), b = Map.getOfficialMapNameForIndex(kMapIndex.Grasslands) + kMapSettingsKey;
            a[b][kEndlessModeKey] = !1, a.synchronize()
        }
        function f() {
            var a = NextStep.UserDefaults.standardUserDefaults(), b = Map.getOfficialMapNameForIndex(kMapIndex.Grasslands) + kMapSettingsKey;
            grasslandsSettings = a[b], grasslandsSettings[kPlayableKey] = !0, grasslandsSettings[kEndlessModeKey] = !0, a.synchronize()
        }
        var a = function () {
            return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerFirst : kMapIndexSingleplayerFirst
        }, b = function () {
            return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerLast : kMapIndexSingleplayerLast
        }, c = function () {
            return MapSelectionForm.bIsMultiplayer ? kNumOfficialMultiplayerMaps : kNumOfficialSingleplayerMaps
        };
        window.kMapIndicesTotal = c;
        var d = [], g = Form.extend({
            init: function (b, e, f, g) {
                this._super(b, e, f, g, d), this.difficultyLevel = kDifficultyLevel.Easy, this.gameplayMode = kGameplayMode.Classic, this.disabledColor = new Color(128, 128, 128, 255), this.whiteColor = new Color(255, 255, 255, 255), this.activeColor = new Color(255, 255, 26, 255), this.mapName = null, this.mapNameLabel = null, this.easyButton = null, this.mediumButton = null, this.hardButton = null, this.startButton = null, this.classicMode = null, this.endlessMode = null, this.extendedMode = null, this.suddenDeathMode = null, this.timeTrialMode = null, this.towerCombo1Mode = null, this.towerCombo2Mode = null, this.description = null, this.mapSelectionTimer = 0, this.mapTimerIncrement = 0, this.bIsSelectingMap = !1, this.bIsClickingMap = !1, this.mapSelectionBoxOverlay = null, this.mapIconOriginalHalfWidth = new Array(kMaxOfficialMaps), this.mapIconOriginalHalfHeight = new Array(kMaxOfficialMaps), this.mapThumbnails = new Array(kNumOfficialMaps);
                for (var h = 0; h < kNumOfficialMaps; h++)
                    this.mapThumbnails[h] = null;
                !IsPlatformIPad() && !IsPlatformAndroid() && !IsPlatformMac() ? this.selectedMapIndex = MapSelectionForm.selectedMapIndex : this.selectedMapIndex = a(), this.mostRecentUnlockedSelectedMapIndex = this.selectedMapIndex, this.mapIconOverlays = new Array(kNumOfficialMaps), this.mapIconIsLocked = new Array(kNumOfficialMaps);
                for (var h = 0; h < kNumOfficialMaps; h++)
                    this.mapIconOverlays[h] = -1, this.mapIconIsLocked[h] = !0;
                this.bAllMapsLocked = !0, this.mapSelectionPosition = (c() - (this.selectedMapIndex - a())) % c() / c(), this.mapSelectionPositionTarget = this.mapSelectionPosition
            }, destroy: function () {
                this._super()
            }, isCombinationPlayable: function (a, b) {
                if (MapSelectionForm.bIsMultiplayer)
                    return !0;
                if (a == kMapIndex.BuyAllPsuedoMap)
                    return !1;
                var c = NextStep.UserDefaults.standardUserDefaults(), d = Map.getOfficialMapNameForIndex(a), e = sprintf("%s%s", d, kMapSettingsKey), f = c[e], g = f && f[kPlayableKey] ? f[kPlayableKey] : !1, h = f && f[kEndlessModeKey] ? f[kEndlessModeKey] : !1, i = h, j = !1;
                if (this.selectedMapIndex == 0 || g)
                    if (b == kGameplayMode.Classic && a != kMapIndex.BuyAllPsuedoMap || b == kGameplayMode.Endless && h || (b == kGameplayMode.Extended || b == kGameplayMode.SuddenDeath || b == kGameplayMode.TimeTrial || b == kGameplayMode.TowerCombo1 || b == kGameplayMode.TowerCombo2) && i)
                        j = !0;
                return j
            }, onFormOpen: function (d) {
                !d && Payment && Payment.isPaidUser(bindSelf(function (a) {
                    a ? f.call(this) : e.call(this), this.updateGameplayModeSelection()
                }, this)), this.startButton = null;
                for (var g = 0; g < this.buttonList.length; ++g) {
                    var h = this.buttonList[g];
                    h.name == "Easy".toLowerCase() ? this.easyButton = h : h.name == "Medium".toLowerCase() ? this.mediumButton = h : h.name == "Hard".toLowerCase() ? this.hardButton = h : h.name == "ClassicMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? h.isHidden = !0 : this.classicMode = h : h.name == "FiftyRoundMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? this.classicMode = h : h.isHidden = !0 : h.name == "ExtendedMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? h.isHidden = !0 : this.extendedMode = h : h.name == "OneHundredRoundMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? this.extendedMode = h : h.isHidden = !0 : h.name == "EndlessMode".toLowerCase() ? this.endlessMode = h : h.name == "SuddenDeathMode".toLowerCase() ? this.suddenDeathMode = h : h.name == "TimeTrialMode".toLowerCase() ? this.timeTrialMode = h : h.name == "TowerCombo1Mode".toLowerCase() ? this.towerCombo1Mode = h : h.name == "TowerCombo2Mode".toLowerCase() ? this.towerCombo2Mode = h : h.name == "Description".toLowerCase() ? this.description = h : h.name == "Start".toLowerCase() ? this.startButton = h : h.name == "Download".toLowerCase() && (this.downloadButton = h, h.isHidden = !0)
                }
                var i = NextStep.UserDefaults.standardUserDefaults(), j = i.integerForKey(kDifficultyPreference);
                switch (j) {
                    case 0:
                        this.difficultyLevel = kDifficultyLevel.Easy;
                        break;
                    case 1:
                        this.difficultyLevel = kDifficultyLevel.Medium;
                        break;
                    case 2:
                        this.difficultyLevel = kDifficultyLevel.Hard;
                        break;
                    default:
                        console.warn("Invalid difficulty level requested.")
                }
                this.easyButton.isToggled = j == 0, this.mediumButton
                    .isToggled = j == 1, this.hardButton.isToggled = j == 2, this.updateMapSelection(), a = function () {
                        return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerFirst : kMapIndexSingleplayerFirst
                    }, b = function () {
                        return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerLast : kMapIndexSingleplayerLast
                    }, c = function () {
                        return MapSelectionForm.bIsMultiplayer ? kNumOfficialMultiplayerMaps : kNumOfficialSingleplayerMaps
                    };
                if (IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac()) {
                    for (var g = 0; g < this.overlayList.length; ++g) {
                        var k = this.overlayList[g];
                        if (k.name == "MapSelectionBox".toLowerCase())
                            console.assert(this.mapSelectionBoxOverlay === null), this.mapSelectionBoxOverlay = k;
                        else if (StringExt.hasPrefix(k.name, "MapLocked".toLowerCase())) {
                            var l = MapSelectionForm.GetMapNum(k.getName().substring("MapLocked".length));
                            l >= 0 && (a() <= l && l <= b() || l == kMapIndex.BuyAllPsuedoMap ? (k.isHidden = MapSelectionForm.isMapPlayable(l, bindSelf(function () {
                                this.onFormOpen(!0)
                            }, this)), d ? (k.halfWidth = k.originalHalfWidth, k.halfHeight = k.originalHalfHeight) : (k.originalHalfWidth = k.halfWidth, k.originalHalfHeight = k.halfHeight), k.isHidden || (this.mapIconOverlays[l] = g, this.mapIconIsLocked[l] = !0, d || (this.mapIconOriginalHalfWidth[l] = k.halfWidth, this.mapIconOriginalHalfHeight[l] = k.halfHeight), l == kMapIndex.BuyAllPsuedoMap && (b = function () {
                                return kMapIndexSingleplayerLast + 1
                            }, c = function () {
                                return kNumOfficialSingleplayerMaps + 1
                            }))) : k.isHidden = !0)
                        } else if (StringExt.hasPrefix(k.name, "Map".toLowerCase())) {
                            var l = MapSelectionForm.GetMapNum(k.getName().substring("Map".length));
                            l >= 0 && (a() <= l && l <= b() ? (k.isHidden = !MapSelectionForm.isMapPlayable(l, bindSelf(function () {
                                this.onFormOpen(!0)
                            }, this)), k.isHidden || (this.mapIconOverlays[l] = g, this.mapIconIsLocked[l] = !1, this.bAllMapsLocked = !0, d || (this.mapIconOriginalHalfWidth[l] = k.halfWidth, this.mapIconOriginalHalfHeight[l] = k.halfHeight))) : k.isHidden = !0)
                        }
                    }
                    this.updateMapIcons()
                }
                this.startButton !== null && this._super()
            }, buttonPressed: function (a) {
                switch (a) {
                    case kButtonPress.Select:
                        this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0), this.onButtonReleaseStart(this, null, null);
                        break;
                    case kButtonPress.Back:
                        this.onButtonReleaseX(this, null, null), this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0);
                        break;
                    case kButtonPress.Up:
                    case kButtonPress.Down:
                        var b = this.gameplayMode;
                        do
                            a == kButtonPress.Up ? this.gameplayMode == 0 ? this.gameplayMode = kNumGameplayModes - 1 : this.gameplayMode = this.gameplayMode - 1 : this.gameplayMode == kNumGameplayModes - 1 ? this.gameplayMode = 0 : this.gameplayMode = this.gameplayMode + 1;
                        while (!this.updateGameplayModeSelection() && this.gameplayMode != b);
                        break;
                    case kButtonPress.Left:
                    case kButtonPress.Right:
                        a == kButtonPress.Left ? this.difficultyLevel == 0 ? this.difficultyLevel = kNumDifficultyLevels - 1 : this.difficultyLevel = this.difficultyLevel - 1 : this.difficultyLevel == kNumDifficultyLevels - 1 ? this.difficultyLevel = 0 : this.difficultyLevel = this.difficultyLevel + 1, this.updateDifficultyModeSelection();
                        break;
                    default:
                }
            }, touchesBegan: function (b) {
                if (!IsPlatformIPad() && !IsPlatformAndroid() && !IsPlatformMac()) {
                    this._super(b);
                    return
                }
                var c = b[0], d = c.locationInView(null), e = d.x / EAGLView.sScreenDimensions.width, f = d.y / EAGLView.sScreenDimensions.height;
                if (MapSelectionForm.bIsMultiplayer) {
                    if (this.mapSelectionBoxOverlay.centerY - .075 <= f && f <= this.mapSelectionBoxOverlay.centerY + .07) {
                        var g = this.selectedMapIndex;
                        this.mapSelectionBoxOverlay.centerX - .15 <= e && e <= this.mapSelectionBoxOverlay.centerX - .05 ? this.selectedMapIndex = a() + 1 : this.mapSelectionBoxOverlay.centerX + .05 <= e && e <= this.mapSelectionBoxOverlay.centerX + .15 && (this.selectedMapIndex = a()), this.selectedMapIndex != g && (this.bIsClickingMap = !0, this.updateMapIcons(), this.updateMapSelection())
                    }
                } else if (this.mapSelectionBoxOverlay.centerX - this.mapSelectionBoxOverlay.halfWidth <= e && e <= this.mapSelectionBoxOverlay.centerX + this.mapSelectionBoxOverlay.halfWidth && this.mapSelectionBoxOverlay.centerY - this.mapSelectionBoxOverlay.halfHeight <= f && f <= this.mapSelectionBoxOverlay.centerY + this.mapSelectionBoxOverlay.halfHeight) {
                    this.bIsSelectingMap = !0;
                    for (var h = 0; h < this.mapIconOverlays.length; h++) {
                        var i = this.overlayList[this.mapIconOverlays[h]];
                        if (!i)
                            continue;
                        if (i.centerX - i.halfWidth <= e && i.centerX + i.halfWidth >= e && i.centerY - i.halfHeight <= f && i.centerY + i.halfHeight >= f) {
                            eaglview.audioConfig.buttonClickSoundEffect.play(), this.selectedMapIndex = h, this.updateMapIcons(), this.updateMapSelection();
                            return
                        }
                    }
                }
                if (!this.bIsSelectingMap || !this.bIsClickingMap) {
                    this._super(b);
                    return
                }
            }, updateMapIcons: function () {
                for (var d = a(); d <= b(); d++)
                    if (this.mapIconOverlays[d] >= 0) {
                        var e = (d - a()) / c(), f = 1 - this.mapSelectionPosition - e;
                        while (f >= 1)
                            f -= 1;
                        while (f < 0)
                            f += 1;
                        var g = Math.clamp(Math.abs(f), 0, 1 / c()) * c(), h = -0.05, i = .19, j = .15, k = this.mapSelectionBoxOverlay.centerX - i + i * (e * c() % 3), l = this.mapSelectionBoxOverlay.centerY - j + j * Math.floor(e * c() / 3), m = e;
                        m > .5 && (m = 1 - m), MapSelectionForm.bIsMultiplayer ? (k = this.mapSelectionBoxOverlay.centerX + (d == a() ? .1 : -0.1), l = this.mapSelectionBoxOverlay.centerY - .025, d == this.selectedMapIndex ? this.mapTimerIncrement > 0 ? m = .5 - this.mapSelectionTimer : this.mapTimerIncrement < 0 ? m = this.mapSelectionTimer : m = 0 : this.mapTimerIncrement > 0 ? m = this.mapSelectionTimer : this.mapTimerIncrement < 0 ? m = .5 - this.mapSelectionTimer : m = .5, m /= 2) : m *= 2;
                        var n = this.overlayList[this.mapIconOverlays[d]];
                        n.centerX = k, n.centerY = l;
                        var o = 1;
                        d != this.selectedMapIndex && (o = .8), n.color.r = n.color.g = n.color.b = 255 * o;
                        var p = .8, q = 1.05, r = Math.lerp(g, d == this.selectedMapIndex ? 1.3 : .9, .9);
                        n.halfWidth = this.mapIconOriginalHalfWidth[d] * r * q, n.halfHeight = this.mapIconOriginalHalfHeight[d] * r * q
                    }
                for (var d = a(); d <= b() - 1; d++) {
                    var e = this.mapSelectionPosition + (d - a()) / c();
                    while (e >= 1)
                        e -= 1;
                    e > .5 && (e = 1 - e);
                    for (var s = d + 1; s <= b(); s++) {
                        var t = this.mapSelectionPosition + (s - a()) / c();
                        while (t >= 1)
                            t -= 1;
                        t > .5 && (t = 1 - t);
                        if (this.mapIconOverlays[d] >= 0 && this.mapIconOverlays[s] >= 0)
                            if (e < t && this.mapIconOverlays[d] < this.mapIconOverlays[s] || e > t && this.mapIconOverlays[d] > this.mapIconOverlays[s]) {
                                this.overlayList.swapObjects(this.mapIconOverlays[d], this.mapIconOverlays[s]);
                                var u = this.mapIconOverlays[d];
                                this.mapIconOverlays[d] = this.mapIconOverlays[s], this.mapIconOverlays[s] = u
                            }
                    }
                }
            }, touchesEnded: function (b) {
                if (!IsPlatformIPad() && !IsPlatformAndroid() && !IsPlatformMac() || !this.bIsSelectingMap || this.bIsClickingMap) {
                    this.bIsClickingMap = !1, this._super(b);
                    return
                }
                this.bIsSelectingMap = !1;
                if (!this.bAllMapsLocked) {
                    var d = this.selectedMapIndex;
                    this.selectedMapIndex = this.mostRecentUnlockedSelectedMapIndex, this.selectedMapIndex != d && this.updateMapSelection()
                }
                this.mapSelectionPositionTarget = (c() - (this.selectedMapIndex - a())) % c() / c()
            }, update: function (b) {
                if (MapSelectionForm.bIsMultiplayer)
                    this.selectedMapIndex == a() ? (this.mapSelectionTimer -= b * 2, this.mapSelectionTimer < 0 ? this.mapTimerIncrement = 0 : this.mapTimerIncrement = -b * 2) : (this.mapSelectionTimer += b * 2, this.mapSelectionTimer > .5 ? this.mapTimerIncrement = 0 : this.mapTimerIncrement = b * 2), this.mapSelectionTimer = Math.max(Math.min(this.mapSelectionTimer, .5), 0), this.updateMapIcons();
                else if ((IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac()) && !this.bIsSelectingMap && this.mapSelectionPosition != this.mapSelectionPositionTarget) {
                    var d = (this.mapSelectionPositionTarget == 0 ? 0 : 1 - this.mapSelectionPositionTarget) - (this.mapSelectionPosition == 0 ? 0 : 1 - this.mapSelectionPosition), e = d, f = 1;
                    Math.abs(d) > 1 / (c() + 1) && (this.mapSelectionPosition = this.mapSelectionPositionTarget + d / Math.abs(d) * (1 / (c() + 1))), d = d > 0 ? -1 : 1;
                    if (fabsf(d) <= kPrecisionErrorCorrection || f * b > Math.abs(e))
                        this.mapSelectionPosition = this.mapSelectionPositionTarget;
                    else {
                        this.mapSelectionPosition += d * f * b;
                        while (this.mapSelectionPosition >= 1)
                            this.mapSelectionPosition -= 1;
                        while (this.mapSelectionPosition < 0)
                            this.mapSelectionPosition += 1
                    }
                    this.updateMapIcons()
                }
                this._super()
            }, onButtonPressClassicMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.Classic, d.classicMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressEndlessMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.Endless, d.endlessMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressExtendedMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.Extended, d.extendedMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressSuddenDeathMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.SuddenDeath, d.suddenDeathMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressTimeTrialMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.TimeTrial, d.timeTrialMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressTowerCombo1Mode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.TowerCombo1, d.towerCombo1Mode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressTowerCombo2Mode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.TowerCombo2, d.towerCombo2Mode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressEasy: function (a, b, c) {
                var d = a;
                d.difficultyLevel = kDifficultyLevel.Easy, d.updateDifficultyModeSelection()
            }, onButtonPressMedium: function (a, b, c) {
                var d = a;
                d.difficultyLevel = kDifficultyLevel.Medium, d.updateDifficultyModeSelection()
            }, onButtonPressHard: function (a, b, c) {
                var d = a;
                d.difficultyLevel = kDifficultyLevel.Hard, d.updateDifficultyModeSelection()
            }, onButtonReleaseStart: function (a, b, c) {
                var d = NextStep.UserDefaults.standardUserDefaults(), e = Map.getOfficialMapNameForIndex(a.selectedMapIndex), f = d[e + kMapSettingsKey];
                if (a.selectedMapIndex == kMapIndex.BuyAllPsuedoMap) {
                    Payment.buy(e, function () {
                        MapSelectionForm.isMapPlayable(1, function () {
                            a.selectedMapIndex = 0, a.mapSelectionPositionTarget = 0, a.onFormOpen(!0)
                        })
                    });
                    return
                }
                if (!f || !f[kPlayableKey]) {
                    Payment.buy(e, function () {
                        f || (f = d[e + kMapSettingsKey] = {}), f[kPlayableKey] = !0, d.synchronize(), a.onButtonReleaseStart(a, b, c)
                    });
                    return
                }
                if (this.gameplayMode == kGameplayMode.TowerCombo2 && !f[kTowerCombo2Key])
                    if (!f || !f[kTowerCombo2Key]) {
                        var g = Map.getOfficialMapNameForIndex(Map.getTowerCombo2DependencyForMapIndex(a.selectedMapIndex));
                        Payment.buy(g, function () {
                            f || (f = d[e + kMapSettingsKey] = {}, f[kPlayableKey] = !0), f[kTowerCombo2Key] = !0, d.synchronize(), a.onButtonReleaseStart(a, b, c)
                        });
                        return
                    }
                var h = a;
                h.view.map !== null && h.view.map.clearAndRelease(), h.view.map = new Map(h.view), h.view.map.restoringGameState = !1, h.view.map.difficultyLevel = h.difficultyLevel, h.view.map.SetGameplayMode(h.gameplayMode), h.view.map.name = Map.getOfficialMapNameForIndex(h.selectedMapIndex), h.view.map.filename = h.view.map.name;
                if (IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac())
                    MapSelectionForm.selectedMapIndex = h.selectedMapIndex, MapSelectionForm.bIsMultiplayer && (MapSelectionForm.bIsMultiplayerCoop = MapSelectionForm.selectedMapIndex == kMapIndexRainforestMP);
                MapSelectionForm.bIsMultiplayer && (h.view.map.filename = sprintf("%s_mp", h.view.map.filename));
                if (h.gameplayMode != kGameplayMode.Classic) {
                    var i = sprintf("%s_extended", h.view.map.filename), j = null;
                    j = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE(h.view.map.getDirectoryName(), i, "map"), h.view.map.filename = i
                }
                h.userInterface.switchToPopupForm(kLoadingFormName)
            }, onButtonReleaseX: function (a, b, c) {
                console.log("beep");
                var d = a;
                d.userInterface.switchToPopupForm(IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac() ? null : kMapSelectionFormName)
            }, onButtonReleaseMap: function (a, b, c) {
                var d = a, e = MapSelectionForm.GetMapButtonMapNum(b);
                assert(e >= 0), d.selectedMapIndex = e
            }, onButtonReleaseMapSelectLeft: function (b, d, e) {
                var f = b;
                f.selectedMapIndex--, f.selectedMapIndex < 0 && (f.selectedMapIndex += c()), f.updateMapSelection(), f.mapIconIsLocked[f.selectedMapIndex] || (f.mostRecentUnlockedSelectedMapIndex = f.selectedMapIndex), f.mapSelectionPositionTarget = (c() - (f.selectedMapIndex - a())) % c() / c(), f.updateMapIcons()
            }, onButtonReleaseMapSelectRight: function (b, d, e) {
                var f = b;
                f.selectedMapIndex++, f.selectedMapIndex >= c() && (f.selectedMapIndex -= c()), f.updateMapSelection(), f.mapIconIsLocked[f.selectedMapIndex] || (f.mostRecentUnlockedSelectedMapIndex = f.selectedMapIndex), f.mapSelectionPositionTarget = (c() - (f.selectedMapIndex - a())) % c() / c(), f.updateMapIcons()
            }, refreshDisplay: function () {
                var a = NextStep.UserDefaults.standardUserDefaults(), b = Map.getOfficialMapNameForIndex(this.selectedMapIndex), c = sprintf("%s%s", b, kMapSettingsKey), d = a[c], e = d && d[kEndlessModeKey] ? d[kEndlessModeKey] : !1, f = e && d && d[kTowerCombo2Key] ? d[kTowerCombo2Key] : !1, g = new Color(64, 64, 64), h = new Color(255, 255, 255);
                this.selectedMapIndex == kMapIndex.BuyAllPsuedoMap ? this.classicMode.setLabelTint(g) : this.classicMode.setLabelTint(h), !e && !MapSelectionForm.bIsMultiplayer ? this.endlessMode.setLabelTint(g) : this.endlessMode.setLabelTint(h);
                var i = e;
                !i && !MapSelectionForm.bIsMultiplayer ? this.extendedMode.setLabelTint(g) : this.extendedMode.setLabelTint(h), !i && !MapSelectionForm.bIsMultiplayer ? (this.suddenDeathMode !== null && this.suddenDeathMode.setLabelTint(g), this.timeTrialMode !== null && this.timeTrialMode.setLabelTint(g), this.towerCombo1Mode !== null && this.towerCombo1Mode.setLabelTint(g)) : (this.suddenDeathMode !== null && this.suddenDeathMode.setLabelTint(h), this.timeTrialMode !== null && this.timeTrialMode.setLabelTint(h), this.towerCombo1Mode !== null && this.towerCombo1Mode.setLabelTint(h)), !f && !MapSelectionForm.bIsMultiplayer ? this.towerCombo2Mode !== null && this.towerCombo2Mode.setLabelTint(g) : this.towerCombo2Mode !== null && this.towerCombo2Mode.setLabelTint(h)
            }, updateMapSelection: function () {
                for (var a = 0; a < this.buttonList.length; ++a) {
                    var b = this.buttonList[a];
                    if (b.name == "MapNameLabel".toLowerCase()) {
                        var c = "";
                        c = sprintf("OfficialMapName%02d", this.selectedMapIndex + 1), b.setLabel(LocalizeString(c, ""))
                    }
                }
                for (var a = 0; a < this.overlayList.length; ++a) {
                    var d = this.overlayList[a];
                    if (StringExt.hasPrefix(d.name, "MapThumbnail".toLowerCase())) {
                        var e = d.name.substring(d.name.length - 2), f = parseInt(e, 10) - 1;
                        this.mapThumbnails[f] = d, this.mapThumbnails[f].isHidden = f == this.selectedMapIndex ? !1 : !0
                    }
                }
                var g = NextStep.UserDefaults.standardUserDefaults(), h = g.integerForKey(kGameplayModePreference);
                switch (h) {
                    case 0:
                        this.gameplayMode = kGameplayMode.Classic;
                        break;
                    case 1:
                        this.gameplayMode = kGameplayMode.Extended;
                        break;
                    case 2:
                        this.gameplayMode = kGameplayMode.Endless;
                        break;
                    default:
                        console.warn("Invalid gameplay mode requested.")
                }
                this.isCombinationPlayable(this.selectedMapIndex, this.gameplayMode) || (this.gameplayMode = kGameplayMode.Classic), this.classicMode.isToggled = this.gameplayMode == kGameplayMode.Classic, this.extendedMode.isToggled = this.gameplayMode == kGameplayMode.Extended, this.endlessMode.isToggled = this.gameplayMode == kGameplayMode.Endless, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = this.gameplayMode == kGameplayMode.SuddenDeath), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = this.gameplayMode == kGameplayMode.TimeTrial), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = this.gameplayMode == kGameplayMode.TowerCombo1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = this.gameplayMode == kGameplayMode.TowerCombo2), this.updateGameplayModeSelection();
                if (this.selectedMapIndex != kMapIndex.BuyAllPsuedoMap && !MapSelectionForm.isMapPlayable(this.selectedMapIndex)) {
                    var i = Map.getOfficialMapNameForIndex(this.selectedMapIndex);
                    this.userInterface.switchToPopupForm(kUpsellForm + "_" + i)
                }
            }, updateDifficultyModeSelection: function () {
                var a = NextStep.UserDefaults.standardUserDefaults();
                a.setInteger(this.difficultyLevel, kDifficultyPreference), this.easyButton.isToggled = !1, this.mediumButton.isToggled = !1, this.hardButton.isToggled = !1
            }, updateGameplayModeSelection: function () {
                if (this.selectedMapIndex == kMapIndex.BuyAllPsuedoMap)
                    this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1), this.gameplayMode = kGameplayMode.Classic;
                else
                    switch (this.gameplayMode) {
                        case kGameplayMode.Classic:
                            this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.Extended:
                            this.classicMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.Endless:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.SuddenDeath:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.TimeTrial:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.TowerCombo1:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.TowerCombo2:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1)
                    }
                var a = NextStep.UserDefaults.standardUserDefaults();
                a.setInteger(this.gameplayMode, kGameplayModePreference), this.refreshDisplay();
                var b = this.isCombinationPlayable(this.selectedMapIndex, this.gameplayMode);
                this.startButton.isHidden = !1, this.downloadButton.isHidden = !0;
                if (this.startButton !== null)
                    this.startButton.isDisabled = !b;
                else if (!b)
                    return !1;
                var c = Map.getOfficialMapNameForIndex(this.selectedMapIndex), d = sprintf("%s%s", c, kMapSettingsKey), e = a[d], f = e && e[kEndlessModeKey] ? e[kEndlessModeKey] : !1, g = f && e && e[kTowerCombo2Key] ? e[kTowerCombo2Key] : !1;
                MapSelectionForm.bIsMultiplayer && (f = !0);
                var h = f;
                if (this.gameplayMode == kGameplayMode.Classic)
                    if (b) {
                        var i = null;
                        MapSelectionForm.bIsMultiplayer ? i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("50RoundModeDescription", null)) : i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("ClassicModeDescription", null)), this.description.labelColor = this.activeColor, this.description.setLabel(i)
                    } else
                        this.downloadButton.isHidden = !1, this.startButton.isHidden = !0, this.updateUnlockDescription();
                else if (this.gameplayMode == kGameplayMode.Endless && f) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("EndlessModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.Extended && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("ExtendedModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.SuddenDeath && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("SuddenDeathModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.TimeTrial && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("TimeTrialModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.TowerCombo1 && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("TowerCombo1ModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.TowerCombo2 && g) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("TowerCombo2ModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else
                    this.updateUnlockDescription(f, g);
                return !0
            }, updateUnlockDescription: function (a, b) {
                this.description.labelColor = this.disabledColor, this.selectedMapIndex == kMapIndex.BuyAllPsuedoMap ? this.description.setLabel(Map.getOfficialUnlockDescription(this.selectedMapIndex)) : this.gameplayMode == kGameplayMode.Classic ? this.description.setLabel(Map.getOfficialUnlockDescription(this.selectedMapIndex)) : this.gameplayMode == kGameplayMode.TowerCombo2 ? (a && !b && (this.startButton.isHidden = !0, this.downloadButton.isHidden = !1), this.description.setLabel(Map.getOfficialTowerCombo2UnlockDescription(this.selectedMapIndex))) : this.description.setLabel(Map.getOfficialUnlockDescription(0))
            }
        }, "MapConfigurationForm");
        window.MapConfigurationForm = g, Preloader.initialize("userinterface/forms/mapconfigurationform.js")
    }), Preloader.include(["userinterface/form.js", "userinterface/forms/mapselectionform.js"], function () {
        function e() {
            var a = NextStep.UserDefaults.standardUserDefaults(), b = Map.getOfficialMapNameForIndex(kMapIndex.Grasslands) + kMapSettingsKey;
            a[b][kEndlessModeKey] = !1, a.synchronize()
        }
        function f() {
            var a = NextStep.UserDefaults.standardUserDefaults(), b = Map.getOfficialMapNameForIndex(kMapIndex.Grasslands) + kMapSettingsKey;
            grasslandsSettings = a[b], grasslandsSettings[kPlayableKey] = !0, grasslandsSettings[kEndlessModeKey] = !0, a.synchronize()
        }
        var a = function () {
            return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerFirst : kMapIndexSingleplayerFirst
        }, b = function () {
            return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerLast : kMapIndexSingleplayerLast
        }, c = function () {
            return MapSelectionForm.bIsMultiplayer ? kNumOfficialMultiplayerMaps : kNumOfficialSingleplayerMaps
        };
        window.kMapIndicesTotal = c;
        var d = [], g = Form.extend({
            init: function (b, e, f, g) {
                this._super(b, e, f, g, d), this.difficultyLevel = kDifficultyLevel.Easy, this.gameplayMode = kGameplayMode.Classic, this.disabledColor = new Color(128, 128, 128, 255), this.whiteColor = new Color(255, 255, 255, 255), this.activeColor = new Color(255, 255, 26, 255), this.mapName = null, this.mapNameLabel = null, this.easyButton = null, this.mediumButton = null, this.hardButton = null, this.startButton = null, this.classicMode = null, this.endlessMode = null, this.extendedMode = null, this.suddenDeathMode = null, this.timeTrialMode = null, this.towerCombo1Mode = null, this.towerCombo2Mode = null, this.description = null, this.mapSelectionTimer = 0, this.mapTimerIncrement = 0, this.bIsSelectingMap = !1, this.bIsClickingMap = !1, this.mapSelectionBoxOverlay = null, this.mapIconOriginalHalfWidth = new Array(kMaxOfficialMaps), this.mapIconOriginalHalfHeight = new Array(kMaxOfficialMaps), this.mapThumbnails = new Array(kNumOfficialMaps);
                for (var h = 0; h < kNumOfficialMaps; h++)
                    this.mapThumbnails[h] = null;
                !IsPlatformIPad() && !IsPlatformAndroid() && !IsPlatformMac() ? this.selectedMapIndex = MapSelectionForm.selectedMapIndex : this.selectedMapIndex = a(), this.mostRecentUnlockedSelectedMapIndex = this.selectedMapIndex, this.mapIconOverlays = new Array(kNumOfficialMaps), this.mapIconIsLocked = new Array(kNumOfficialMaps);
                for (var h = 0; h < kNumOfficialMaps; h++)
                    this.mapIconOverlays[h] = -1, this.mapIconIsLocked[h] = !0;
                this.bAllMapsLocked = !0, this.mapSelectionPosition = (c() - (this.selectedMapIndex - a())) % c() / c(), this.mapSelectionPositionTarget = this.mapSelectionPosition
            }, destroy: function () {
                this._super()
            }, isCombinationPlayable: function (a, b) {
                if (MapSelectionForm.bIsMultiplayer)
                    return !0;
                if (a == kMapIndex.BuyAllPsuedoMap)
                    return !1;
                var c = NextStep.UserDefaults.standardUserDefaults(), d = Map.getOfficialMapNameForIndex(a), e = sprintf("%s%s", d, kMapSettingsKey), f = c[e], g = f && f[kPlayableKey] ? f[kPlayableKey] : !1, h = f && f[kEndlessModeKey] ? f[kEndlessModeKey] : !1, i = h, j = !1;
                if (this.selectedMapIndex == 0 || g)
                    if (b == kGameplayMode.Classic && a != kMapIndex.BuyAllPsuedoMap || b == kGameplayMode.Endless && h || (b == kGameplayMode.Extended || b == kGameplayMode.SuddenDeath || b == kGameplayMode.TimeTrial || b == kGameplayMode.TowerCombo1 || b == kGameplayMode.TowerCombo2) && i)
                        j = !0;
                return j
            }, onFormOpen: function (d) {
                !d && Payment && Payment.isPaidUser(bindSelf(function (a) {
                    a ? f.call(this) : e.call(this), this.updateGameplayModeSelection()
                }, this)), this.startButton = null;
                for (var g = 0; g < this.buttonList.length; ++g) {
                    var h = this.buttonList[g];
                    h.name == "Easy".toLowerCase() ? this.easyButton = h : h.name == "Medium".toLowerCase() ? this.mediumButton = h : h.name == "Hard".toLowerCase() ? this.hardButton = h : h.name == "ClassicMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? h.isHidden = !0 : this.classicMode = h : h.name == "FiftyRoundMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? this.classicMode = h : h.isHidden = !0 : h.name == "ExtendedMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? h.isHidden = !0 : this.extendedMode = h : h.name == "OneHundredRoundMode".toLowerCase() ? MapSelectionForm.bIsMultiplayer ? this.extendedMode = h : h.isHidden = !0 : h.name == "EndlessMode".toLowerCase() ? this.endlessMode = h : h.name == "SuddenDeathMode".toLowerCase() ? this.suddenDeathMode = h : h.name == "TimeTrialMode".toLowerCase() ? this.timeTrialMode = h : h.name == "TowerCombo1Mode".toLowerCase() ? this.towerCombo1Mode = h : h.name == "TowerCombo2Mode".toLowerCase() ? this.towerCombo2Mode = h : h.name == "Description".toLowerCase() ? this.description = h : h.name == "Start".toLowerCase() ? this.startButton = h : h.name == "Download".toLowerCase() && (this.downloadButton = h, h.isHidden = !0)
                }
                var i = NextStep.UserDefaults.standardUserDefaults(), j = i.integerForKey(kDifficultyPreference);
                switch (j) {
                    case 0:
                        this.difficultyLevel = kDifficultyLevel.Easy;
                        break;
                    case 1:
                        this.difficultyLevel = kDifficultyLevel.Medium;
                        break;
                    case 2:
                        this.difficultyLevel = kDifficultyLevel.Hard;
                        break;
                    default:
                        console.warn("Invalid difficulty level requested.")
                }
                this.easyButton.isToggled = j == 0, this.mediumButton.isToggled = j == 1, this.hardButton.isToggled = j == 2, this.updateMapSelection(), a = function () {
                    return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerFirst : kMapIndexSingleplayerFirst
                }, b = function () {
                    return MapSelectionForm.bIsMultiplayer ? kMapIndexMultiplayerLast : kMapIndexSingleplayerLast
                }, c = function () {
                    return MapSelectionForm.bIsMultiplayer ? kNumOfficialMultiplayerMaps : kNumOfficialSingleplayerMaps
                };
                if (IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac()) {
                    for (var g = 0; g < this.overlayList.length; ++g) {
                        var k = this.overlayList[g];
                        if (k.name == "MapSelectionBox".toLowerCase())
                            console.assert(this.mapSelectionBoxOverlay === null), this.mapSelectionBoxOverlay = k;
                        else if (StringExt.hasPrefix(k.name, "MapLocked".toLowerCase())) {
                            var l = MapSelectionForm.GetMapNum(k.getName().substring("MapLocked".length));
                            l >= 0 && (a() <= l && l <= b() || l == kMapIndex.BuyAllPsuedoMap ? (k.isHidden = MapSelectionForm.isMapPlayable(l, bindSelf(function () {
                                this.onFormOpen(!0)
                            }, this)), d ? (k.halfWidth = k.originalHalfWidth, k.halfHeight = k.originalHalfHeight) : (k.originalHalfWidth = k.halfWidth, k.originalHalfHeight = k.halfHeight), k.isHidden || (this.mapIconOverlays[l] = g, this.mapIconIsLocked[l] = !0, d || (this.mapIconOriginalHalfWidth[l] = k.halfWidth, this.mapIconOriginalHalfHeight[l] = k.halfHeight), l == kMapIndex.BuyAllPsuedoMap && (b = function () {
                                return kMapIndexSingleplayerLast + 1
                            }, c = function () {
                                return kNumOfficialSingleplayerMaps + 1
                            }))) : k.isHidden = !0)
                        } else if (StringExt.hasPrefix(k.name, "Map".toLowerCase())) {
                            var l = MapSelectionForm.GetMapNum(k.getName().substring("Map".length));
                            l >= 0 && (a() <= l && l <= b() ? (k.isHidden = !MapSelectionForm.isMapPlayable(l, bindSelf(function () {
                                this.onFormOpen(!0)
                            }, this)), k.isHidden || (this.mapIconOverlays[l] = g, this.mapIconIsLocked[l] = !1, this.bAllMapsLocked = !0, d || (this.mapIconOriginalHalfWidth[l] = k.halfWidth, this.mapIconOriginalHalfHeight[l] = k.halfHeight))) : k.isHidden = !0)
                        }
                    }
                    this.updateMapIcons()
                }
                this.startButton !== null && this._super()
            }, buttonPressed: function (a) {
                switch (a) {
                    case kButtonPress.Select:
                        this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0), this.onButtonReleaseStart(this, null, null);
                        break;
                    case kButtonPress.Back:
                        this.onButtonReleaseX(this, null, null), this.view.audioConfig.buttonClickSoundEffect.playWithIgnorePause(!0);
                        break;
                    case kButtonPress.Up:
                    case kButtonPress.Down:
                        var b = this.gameplayMode;
                        do
                            a == kButtonPress.Up ? this.gameplayMode == 0 ? this.gameplayMode = kNumGameplayModes - 1 : this.gameplayMode = this.gameplayMode - 1 : this.gameplayMode == kNumGameplayModes - 1 ? this.gameplayMode = 0 : this.gameplayMode = this.gameplayMode + 1;
                        while (!this.updateGameplayModeSelection() && this.gameplayMode != b);
                        break;
                    case kButtonPress.Left:
                    case kButtonPress.Right:
                        a == kButtonPress.Left ? this.difficultyLevel == 0 ? this.difficultyLevel = kNumDifficultyLevels - 1 : this.difficultyLevel = this.difficultyLevel - 1 : this.difficultyLevel == kNumDifficultyLevels - 1 ? this.difficultyLevel = 0 : this.difficultyLevel = this.difficultyLevel + 1, this.updateDifficultyModeSelection();
                        break;
                    default:
                }
            }, touchesBegan: function (b) {
                if (!IsPlatformIPad() && !IsPlatformAndroid() && !IsPlatformMac()) {
                    this._super(b);
                    return
                }
                var c = b[0], d = c.locationInView(null), e = d.x / EAGLView.sScreenDimensions.width, f = d.y / EAGLView.sScreenDimensions.height;
                if (MapSelectionForm.bIsMultiplayer) {
                    if (this.mapSelectionBoxOverlay.centerY - .075 <= f && f <= this.mapSelectionBoxOverlay.centerY + .07) {
                        var g = this.selectedMapIndex;
                        this.mapSelectionBoxOverlay.centerX - .15 <= e && e <= this.mapSelectionBoxOverlay.centerX - .05 ? this.selectedMapIndex = a() + 1 : this.mapSelectionBoxOverlay.centerX + .05 <= e && e <= this.mapSelectionBoxOverlay.centerX + .15 && (this.selectedMapIndex = a()), this.selectedMapIndex != g && (this.bIsClickingMap = !0, this.updateMapIcons(), this.updateMapSelection())
                    }
                } else if (this.mapSelectionBoxOverlay.centerX - this.mapSelectionBoxOverlay.halfWidth <= e && e <= this.mapSelectionBoxOverlay.centerX + this.mapSelectionBoxOverlay.halfWidth && this.mapSelectionBoxOverlay.centerY - this.mapSelectionBoxOverlay.halfHeight <= f && f <= this.mapSelectionBoxOverlay.centerY + this.mapSelectionBoxOverlay.halfHeight) {
                    this.bIsSelectingMap = !0;
                    for (var h = 0; h < this.mapIconOverlays.length; h++) {
                        var i = this.overlayList[this.mapIconOverlays[h]];
                        if (!i)
                            continue;
                        if (i.centerX - i.halfWidth <= e && i.centerX + i.halfWidth >= e && i.centerY - i.halfHeight <= f && i.centerY + i.halfHeight >= f) {
                            eaglview.audioConfig.buttonClickSoundEffect.play(), this.selectedMapIndex = h, this.updateMapIcons(), this.updateMapSelection();
                            return
                        }
                    }
                }
                if (!this.bIsSelectingMap || !this.bIsClickingMap) {
                    this._super(b);
                    return
                }
            }, updateMapIcons: function () {
                for (var d = a(); d <= b(); d++)
                    if (this.mapIconOverlays[d] >= 0) {
                        var e = (d - a()) / c(), f = 1 - this.mapSelectionPosition - e;
                        while (f >= 1)
                            f -= 1;
                        while (f < 0)
                            f += 1;
                        var g = Math.clamp(Math.abs(f), 0, 1 / c()) * c(), h = -0.05, i = .19, j = .15, k = this.mapSelectionBoxOverlay.centerX - i + i * (e * c() % 3), l = this.mapSelectionBoxOverlay.centerY - j + j * Math.floor(e * c() / 3), m = e;
                        m > .5 && (m = 1 - m), MapSelectionForm.bIsMultiplayer ? (k = this.mapSelectionBoxOverlay.centerX + (d == a() ? .1 : -0.1), l = this.mapSelectionBoxOverlay.centerY - .025, d == this.selectedMapIndex ? this.mapTimerIncrement > 0 ? m = .5 - this.mapSelectionTimer : this.mapTimerIncrement < 0 ? m = this.mapSelectionTimer : m = 0 : this.mapTimerIncrement > 0 ? m = this.mapSelectionTimer : this.mapTimerIncrement < 0 ? m = .5 - this.mapSelectionTimer : m = .5, m /= 2) : m *= 2;
                        var n = this.overlayList[this.mapIconOverlays[d]];
                        n.centerX = k, n.centerY = l;
                        var o = 1;
                        d != this.selectedMapIndex && (o = .8), n.color.r = n.color.g = n.color.b = 255 * o;
                        var p = .8, q = 1.05, r = Math.lerp(g, d == this.selectedMapIndex ? 1.3 : .9, .9);
                        n.halfWidth = this.mapIconOriginalHalfWidth[d] * r * q, n.halfHeight = this.mapIconOriginalHalfHeight[d] * r * q
                    }
                for (var d = a(); d <= b() - 1; d++) {
                    var e = this.mapSelectionPosition + (d - a()) / c();
                    while (e >= 1)
                        e -= 1;
                    e > .5 && (e = 1 - e);
                    for (var s = d + 1; s <= b(); s++) {
                        var t = this.mapSelectionPosition + (s - a()) / c();
                        while (t >= 1)
                            t -= 1;
                        t > .5 && (t = 1 - t);
                        if (this.mapIconOverlays[d] >= 0 && this.mapIconOverlays[s] >= 0)
                            if (e < t && this.mapIconOverlays[d] < this.mapIconOverlays[s] || e > t && this.mapIconOverlays[d] > this.mapIconOverlays[s]) {
                                this.overlayList.swapObjects(this.mapIconOverlays[d], this.mapIconOverlays[s]);
                                var u = this.mapIconOverlays[d];
                                this.mapIconOverlays[d] = this.mapIconOverlays[s], this.mapIconOverlays[s] = u
                            }
                    }
                }
            }, touchesEnded: function (b) {
                if (!IsPlatformIPad() && !IsPlatformAndroid() && !IsPlatformMac() || !this.bIsSelectingMap || this.bIsClickingMap) {
                    this.bIsClickingMap = !1, this._super(b);
                    return
                }
                this.bIsSelectingMap = !1;
                if (!this.bAllMapsLocked) {
                    var d = this.selectedMapIndex;
                    this.selectedMapIndex = this.mostRecentUnlockedSelectedMapIndex, this.selectedMapIndex != d && this.updateMapSelection()
                }
                this.mapSelectionPositionTarget = (c() - (this.selectedMapIndex - a())) % c() / c()
            }, update: function (b) {
                if (MapSelectionForm.bIsMultiplayer)
                    this.selectedMapIndex == a() ? (this.mapSelectionTimer -= b * 2, this.mapSelectionTimer < 0 ? this.mapTimerIncrement = 0 : this.mapTimerIncrement = -b * 2) : (this.mapSelectionTimer += b * 2, this.mapSelectionTimer > .5 ? this.mapTimerIncrement = 0 : this.mapTimerIncrement = b * 2), this.mapSelectionTimer = Math.max(Math.min(this.mapSelectionTimer, .5), 0), this.updateMapIcons
                        ();
                else if ((IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac()) && !this.bIsSelectingMap && this.mapSelectionPosition != this.mapSelectionPositionTarget) {
                    var d = (this.mapSelectionPositionTarget == 0 ? 0 : 1 - this.mapSelectionPositionTarget) - (this.mapSelectionPosition == 0 ? 0 : 1 - this.mapSelectionPosition), e = d, f = 1;
                    Math.abs(d) > 1 / (c() + 1) && (this.mapSelectionPosition = this.mapSelectionPositionTarget + d / Math.abs(d) * (1 / (c() + 1))), d = d > 0 ? -1 : 1;
                    if (fabsf(d) <= kPrecisionErrorCorrection || f * b > Math.abs(e))
                        this.mapSelectionPosition = this.mapSelectionPositionTarget;
                    else {
                        this.mapSelectionPosition += d * f * b;
                        while (this.mapSelectionPosition >= 1)
                            this.mapSelectionPosition -= 1;
                        while (this.mapSelectionPosition < 0)
                            this.mapSelectionPosition += 1
                    }
                    this.updateMapIcons()
                }
                this._super()
            }, onButtonPressClassicMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.Classic, d.classicMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressEndlessMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.Endless, d.endlessMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressExtendedMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.Extended, d.extendedMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressSuddenDeathMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.SuddenDeath, d.suddenDeathMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressTimeTrialMode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.TimeTrial, d.timeTrialMode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressTowerCombo1Mode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.TowerCombo1, d.towerCombo1Mode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressTowerCombo2Mode: function (a, b, c) {
                var d = a;
                d.gameplayMode = kGameplayMode.TowerCombo2, d.towerCombo2Mode.isToggled = !1, d.updateGameplayModeSelection()
            }, onButtonPressEasy: function (a, b, c) {
                var d = a;
                d.difficultyLevel = kDifficultyLevel.Easy, d.updateDifficultyModeSelection()
            }, onButtonPressMedium: function (a, b, c) {
                var d = a;
                d.difficultyLevel = kDifficultyLevel.Medium, d.updateDifficultyModeSelection()
            }, onButtonPressHard: function (a, b, c) {
                var d = a;
                d.difficultyLevel = kDifficultyLevel.Hard, d.updateDifficultyModeSelection()
            }, onButtonReleaseStart: function (a, b, c) {
                var d = NextStep.UserDefaults.standardUserDefaults(), e = Map.getOfficialMapNameForIndex(a.selectedMapIndex), f = d[e + kMapSettingsKey];
                if (a.selectedMapIndex == kMapIndex.BuyAllPsuedoMap) {
                    Payment.buy(e, function () {
                        MapSelectionForm.isMapPlayable(1, function () {
                            a.selectedMapIndex = 0, a.mapSelectionPositionTarget = 0, a.onFormOpen(!0)
                        })
                    });
                    return
                }
                if (!f || !f[kPlayableKey]) {
                    Payment.buy(e, function () {
                        f || (f = d[e + kMapSettingsKey] = {}), f[kPlayableKey] = !0, d.synchronize(), a.onButtonReleaseStart(a, b, c)
                    });
                    return
                }
                if (this.gameplayMode == kGameplayMode.TowerCombo2 && !f[kTowerCombo2Key])
                    if (!f || !f[kTowerCombo2Key]) {
                        var g = Map.getOfficialMapNameForIndex(Map.getTowerCombo2DependencyForMapIndex(a.selectedMapIndex));
                        Payment.buy(g, function () {
                            f || (f = d[e + kMapSettingsKey] = {}, f[kPlayableKey] = !0), f[kTowerCombo2Key] = !0, d.synchronize(), a.onButtonReleaseStart(a, b, c)
                        });
                        return
                    }
                var h = a;
                h.view.map !== null && h.view.map.clearAndRelease(), h.view.map = new Map(h.view), h.view.map.restoringGameState = !1, h.view.map.difficultyLevel = h.difficultyLevel, h.view.map.SetGameplayMode(h.gameplayMode), h.view.map.name = Map.getOfficialMapNameForIndex(h.selectedMapIndex), h.view.map.filename = h.view.map.name;
                if (IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac())
                    MapSelectionForm.selectedMapIndex = h.selectedMapIndex, MapSelectionForm.bIsMultiplayer && (MapSelectionForm.bIsMultiplayerCoop = MapSelectionForm.selectedMapIndex == kMapIndexRainforestMP);
                MapSelectionForm.bIsMultiplayer && (h.view.map.filename = sprintf("%s_mp", h.view.map.filename));
                if (h.gameplayMode != kGameplayMode.Classic) {
                    var i = sprintf("%s_extended", h.view.map.filename), j = null;
                    j = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE(h.view.map.getDirectoryName(), i, "map"), h.view.map.filename = i
                }
                h.userInterface.switchToPopupForm(kLoadingFormName)
            }, onButtonReleaseX: function (a, b, c) {
                console.log("beep");
                var d = a;
                d.userInterface.switchToPopupForm(IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac() ? null : kMapSelectionFormName)
            }, onButtonReleaseMap: function (a, b, c) {
                var d = a, e = MapSelectionForm.GetMapButtonMapNum(b);
                assert(e >= 0), d.selectedMapIndex = e
            }, onButtonReleaseMapSelectLeft: function (b, d, e) {
                var f = b;
                f.selectedMapIndex--, f.selectedMapIndex < 0 && (f.selectedMapIndex += c()), f.updateMapSelection(), f.mapIconIsLocked[f.selectedMapIndex] || (f.mostRecentUnlockedSelectedMapIndex = f.selectedMapIndex), f.mapSelectionPositionTarget = (c() - (f.selectedMapIndex - a())) % c() / c(), f.updateMapIcons()
            }, onButtonReleaseMapSelectRight: function (b, d, e) {
                var f = b;
                f.selectedMapIndex++, f.selectedMapIndex >= c() && (f.selectedMapIndex -= c()), f.updateMapSelection(), f.mapIconIsLocked[f.selectedMapIndex] || (f.mostRecentUnlockedSelectedMapIndex = f.selectedMapIndex), f.mapSelectionPositionTarget = (c() - (f.selectedMapIndex - a())) % c() / c(), f.updateMapIcons()
            }, refreshDisplay: function () {
                var a = NextStep.UserDefaults.standardUserDefaults(), b = Map.getOfficialMapNameForIndex(this.selectedMapIndex), c = sprintf("%s%s", b, kMapSettingsKey), d = a[c], e = d && d[kEndlessModeKey] ? d[kEndlessModeKey] : !1, f = e && d && d[kTowerCombo2Key] ? d[kTowerCombo2Key] : !1, g = new Color(64, 64, 64), h = new Color(255, 255, 255);
                this.selectedMapIndex == kMapIndex.BuyAllPsuedoMap ? this.classicMode.setLabelTint(g) : this.classicMode.setLabelTint(h), !e && !MapSelectionForm.bIsMultiplayer ? this.endlessMode.setLabelTint(g) : this.endlessMode.setLabelTint(h);
                var i = e;
                !i && !MapSelectionForm.bIsMultiplayer ? this.extendedMode.setLabelTint(g) : this.extendedMode.setLabelTint(h), !i && !MapSelectionForm.bIsMultiplayer ? (this.suddenDeathMode !== null && this.suddenDeathMode.setLabelTint(g), this.timeTrialMode !== null && this.timeTrialMode.setLabelTint(g), this.towerCombo1Mode !== null && this.towerCombo1Mode.setLabelTint(g)) : (this.suddenDeathMode !== null && this.suddenDeathMode.setLabelTint(h), this.timeTrialMode !== null && this.timeTrialMode.setLabelTint(h), this.towerCombo1Mode !== null && this.towerCombo1Mode.setLabelTint(h)), !f && !MapSelectionForm.bIsMultiplayer ? this.towerCombo2Mode !== null && this.towerCombo2Mode.setLabelTint(g) : this.towerCombo2Mode !== null && this.towerCombo2Mode.setLabelTint(h)
            }, updateMapSelection: function () {
                for (var a = 0; a < this.buttonList.length; ++a) {
                    var b = this.buttonList[a];
                    if (b.name == "MapNameLabel".toLowerCase()) {
                        var c = "";
                        c = sprintf("OfficialMapName%02d", this.selectedMapIndex + 1), b.setLabel(LocalizeString(c, ""))
                    }
                }
                for (var a = 0; a < this.overlayList.length; ++a) {
                    var d = this.overlayList[a];
                    if (StringExt.hasPrefix(d.name, "MapThumbnail".toLowerCase())) {
                        var e = d.name.substring(d.name.length - 2), f = parseInt(e, 10) - 1;
                        this.mapThumbnails[f] = d, this.mapThumbnails[f].isHidden = f == this.selectedMapIndex ? !1 : !0
                    }
                }
                var g = NextStep.UserDefaults.standardUserDefaults(), h = g.integerForKey(kGameplayModePreference);
                switch (h) {
                    case 0:
                        this.gameplayMode = kGameplayMode.Classic;
                        break;
                    case 1:
                        this.gameplayMode = kGameplayMode.Extended;
                        break;
                    case 2:
                        this.gameplayMode = kGameplayMode.Endless;
                        break;
                    default:
                        console.warn("Invalid gameplay mode requested.")
                }
                this.isCombinationPlayable(this.selectedMapIndex, this.gameplayMode) || (this.gameplayMode = kGameplayMode.Classic), this.classicMode.isToggled = this.gameplayMode == kGameplayMode.Classic, this.extendedMode.isToggled = this.gameplayMode == kGameplayMode.Extended, this.endlessMode.isToggled = this.gameplayMode == kGameplayMode.Endless, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = this.gameplayMode == kGameplayMode.SuddenDeath), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = this.gameplayMode == kGameplayMode.TimeTrial), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = this.gameplayMode == kGameplayMode.TowerCombo1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = this.gameplayMode == kGameplayMode.TowerCombo2), this.updateGameplayModeSelection();
                if (this.selectedMapIndex != kMapIndex.BuyAllPsuedoMap && !MapSelectionForm.isMapPlayable(this.selectedMapIndex)) {
                    var i = Map.getOfficialMapNameForIndex(this.selectedMapIndex);
                    this.userInterface.switchToPopupForm(kUpsellForm + "_" + i)
                }
            }, updateDifficultyModeSelection: function () {
                var a = NextStep.UserDefaults.standardUserDefaults();
                a.setInteger(this.difficultyLevel, kDifficultyPreference), this.easyButton.isToggled = !1, this.mediumButton.isToggled = !1, this.hardButton.isToggled = !1
            }, updateGameplayModeSelection: function () {
                if (this.selectedMapIndex == kMapIndex.BuyAllPsuedoMap)
                    this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1), this.gameplayMode = kGameplayMode.Classic;
                else
                    switch (this.gameplayMode) {
                        case kGameplayMode.Classic:
                            this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.Extended:
                            this.classicMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.Endless:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.SuddenDeath:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.TimeTrial:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.TowerCombo1:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo2Mode !== null && (this.towerCombo2Mode.isToggled = !1);
                            break;
                        case kGameplayMode.TowerCombo2:
                            this.classicMode.isToggled = !1, this.extendedMode.isToggled = !1, this.endlessMode.isToggled = !1, this.suddenDeathMode !== null && (this.suddenDeathMode.isToggled = !1), this.timeTrialMode !== null && (this.timeTrialMode.isToggled = !1), this.towerCombo1Mode !== null && (this.towerCombo1Mode.isToggled = !1)
                    }
                var a = NextStep.UserDefaults.standardUserDefaults();
                a.setInteger(this.gameplayMode, kGameplayModePreference), this.refreshDisplay();
                var b = this.isCombinationPlayable(this.selectedMapIndex, this.gameplayMode);
                this.startButton.isHidden = !1, this.downloadButton.isHidden = !0;
                if (this.startButton !== null)
                    this.startButton.isDisabled = !b;
                else if (!b)
                    return !1;
                var c = Map.getOfficialMapNameForIndex(this.selectedMapIndex), d = sprintf("%s%s", c, kMapSettingsKey), e = a[d], f = e && e[kEndlessModeKey] ? e[kEndlessModeKey] : !1, g = f && e && e[kTowerCombo2Key] ? e[kTowerCombo2Key] : !1;
                MapSelectionForm.bIsMultiplayer && (f = !0);
                var h = f;
                if (this.gameplayMode == kGameplayMode.Classic)
                    if (b) {
                        var i = null;
                        MapSelectionForm.bIsMultiplayer ? i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("50RoundModeDescription", null)) : i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("ClassicModeDescription", null)), this.description.labelColor = this.activeColor, this.description.setLabel(i)
                    } else
                        this.downloadButton.isHidden = !1, this.startButton.isHidden = !0, this.updateUnlockDescription();
                else if (this.gameplayMode == kGameplayMode.Endless && f) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("EndlessModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.Extended && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("ExtendedModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.SuddenDeath && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("SuddenDeathModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.TimeTrial && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("TimeTrialModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.TowerCombo1 && h) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("TowerCombo1ModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else if (this.gameplayMode == kGameplayMode.TowerCombo2 && g) {
                    var i = sprintf("%s %s", Map.getOfficialMapDescription(this.selectedMapIndex), LocalizeString("TowerCombo2ModeDescription", null));
                    this.description.labelColor = this.activeColor, this.description.setLabel(i)
                } else
                    this.updateUnlockDescription(f, g);
                return !0
            }, updateUnlockDescription: function (a, b) {
                this.description.labelColor = this.disabledColor, this.selectedMapIndex == kMapIndex.BuyAllPsuedoMap ? this.description.setLabel(Map.getOfficialUnlockDescription(this.selectedMapIndex)) : this.gameplayMode == kGameplayMode.Classic ? this.description.setLabel(Map.getOfficialUnlockDescription(this.selectedMapIndex)) : this.gameplayMode == kGameplayMode.TowerCombo2 ? (a && !b && (this.startButton.isHidden = !0, this.downloadButton.isHidden = !1), this.description.setLabel(Map.getOfficialTowerCombo2UnlockDescription(this.selectedMapIndex))) : this.description.setLabel(Map.getOfficialUnlockDescription(0))
            }
        }, "MapConfigurationForm");
        window.MapConfigurationForm = g, Preloader.initialize("userinterface/forms/mapconfigurationform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        kLoadingBarUpdateSpeed = .5, kLoadingBarAnimationSpeed = .1;
        var a = Form.extend({
            init: function (a, b, c, d) {
                this._super(a, b, c, d), this.bLoadingMap = !1, this.bLoadingMapFinished = !1, this.bLoadingForm = !1, this.bLoadingFormFinished = !1, this.targetForm = null, this.bSkipFirstUpdateFrame = !0, this.loadingBarOverlay = null, this.loadingBarScrollAnimation = 0, this.currentLoadingProgress = 0, this.targetLoadingProgress = 0, this.isMapDefinitionLocal = !0
            }, destroy: function () {
                this._super()
            }, loadMapWithFilename: function (a) {
                this.bLoadingMap = !0, this.bLoadingMapFinished = !1, this.targetLoadingProgress = 0, this.loadMap()
            }, loadMap: function () {
                var a = !1;
                a || (this.isMapDefinitionLocal = !0, this.view.map.loadFromFile(this.view.map.filename, this))
            }, onFormClose: function () {
                this._super(), this.bLoadingForm = !1, this.targetForm = null
            }, onFormOpen: function () {
                this._super(), this.bLoadingMap = !1, this.bLoadingMapFinished = !1, this.currentLoadingProgress = 0, this.targetLoadingProgress = 0;
                for (var a = 0; a < this.overlayList.length; ++a) {
                    var b = this.overlayList[a];
                    b.name == "LoadingBar".toLowerCase() && (this.loadingBarOverlay = b, this.loadingBarOverlay.isHidden = !0)
                }
            }, render: function (a) {
                this._super(a);
                var b = this.currentLoadingProgress * this.loadingBarOverlay.halfWidth * 2, c = this.loadingBarOverlay.centerX - this.loadingBarOverlay.halfWidth, d = this.loadingBarOverlay.centerY - this.loadingBarOverlay.halfHeight, e = this.loadingBarOverlay.centerY + this.loadingBarOverlay.halfHeight, f = (1 - this.loadingBarScrollAnimation % 1) * this.loadingBarOverlay.halfWidth * 2;
                b < f && (f = b), b -= f;
                var g = 1 / EAGLView.sScreenDimensions.width, h = c + f, i = RenderDevice.createVertexTexCoordArray(8, [c, d, 0, h, d, 0, c, e, 0, h, e, 0, h, d, 0, h + b, d, 0, h, e, 0, h + b, e, 0], [CORRECT_U(this.loadingBarOverlay.textureID, this.loadingBarScrollAnimation), 0, CORRECT_U(this.loadingBarOverlay.textureID, this.currentLoadingProgress + this.loadingBarScrollAnimation >= 1 ? 1 : this.currentLoadingProgress + this.loadingBarScrollAnimation), 0, CORRECT_U(this.loadingBarOverlay.textureID, this.loadingBarScrollAnimation), CORRECT_V(this.loadingBarOverlay.textureID, 1), CORRECT_U(this.loadingBarOverlay.textureID, this.currentLoadingProgress + this.loadingBarScrollAnimation >= 1 ? 1 : this.currentLoadingProgress + this.loadingBarScrollAnimation), CORRECT_V(this.loadingBarOverlay.textureID, 1), CORRECT_U(this.loadingBarOverlay.textureID, 0), 0, CORRECT_U(this.loadingBarOverlay.textureID, this.currentLoadingProgress + this.loadingBarScrollAnimation - 1), 0, CORRECT_U(this.loadingBarOverlay.textureID, 0), CORRECT_V(this.loadingBarOverlay.textureID, 1), CORRECT_U(this.loadingBarOverlay.textureID, this.currentLoadingProgress + this.loadingBarScrollAnimation - 1), CORRECT_V(this.loadingBarOverlay.textureID, 1)]), j = RenderDevice.createColorArray(8, 255);
                this.loadingBarScrollAnimation -= a * kLoadingBarAnimationSpeed;
                while (this.loadingBarScrollAnimation <= 0)
                    this.loadingBarScrollAnimation += 1;
                var k = RenderDevice.getRenderDevice();
                k.pushMatrix(), k.scaleModelViewMatrix(EAGLView.sScreenDimensions.width, EAGLView.sScreenDimensions.height), k.setVertexStreamDataArrays(i, j), k.setTextureWithID(this.loadingBarOverlay.textureID), k.setTextureAddressingMode(kTextureAddressMode.Clamp), k.setTextureFilteringMode(kTextureFilterType.Linear), k.setBlendState(kBlendState.Alpha), k.drawPrimitiveType(kPrimitiveType.TriangleStrip, 4, 4), k.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), k.popMatrix()
            }, updateLoadingProgressWithPercent: function (a) {
                this.currentLoadingProgress = this.targetLoadingProgress, this.targetLoadingProgress = a, this.view.userInterface.render(0), a >= 0 && (this.bLoadingMapFinished = !0)
            }, update: function (a) {
                this._super(a);
                if (this.bSkipFirstUpdateFrame) {
                    this.bSkipFirstUpdateFrame = !1;
                    return
                }
                if (this.bLoadingForm)
                    return;
                this.bLoadingMap || this.loadMapWithFilename(this.view.map.filename);
                if (this.view.map.isLoaded && this.bLoadingMapFinished && this.currentLoadingProgress >= 1 - kPrecisionErrorCorrection) {
                    var b = this.userInterface.switchToBackgroundForm(kGameHudFormName);
                    b && b.isLoaded ? (this.userInterface.switchToPopupForm(null), this.view.map.reset(), this.view.map.restoringGameState ? this.view.map.restoreGameState() : this.view.map.startNewGame()) : b && !b.callLoadingForm && (b.callLoadingForm = !0, Preloader.dependOn(bindSelf(function () {
                        this.update(0)
                    }, this), b))
                } else
                    this.currentLoadingProgress < this.targetLoadingProgress && (this.currentLoadingProgress += a * kLoadingBarUpdateSpeed, this.currentLoadingProgress = MIN(this.currentLoadingProgress, this.targetLoadingProgress))
            }
        }, "LoadingForm");
        window.LoadingForm = a, Preloader.initialize("userinterface/forms/loadingform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        kUserNameDefaultKey = "PlayerName", kHighScoresDefaultKey = "HighScores", kScoreKey = "score", kRoundKey = "wave", kNumHighScoreRows = 11, kNumHighScoreEntries = 10;
        var a = { Local: 0, Global: 1, Friends: 2 }, b = { Top: 0, Up: 1, Home: 2, Down: 3, Bottom: 4, Count: 5 };
        kScoresFontName = "font_light", kScoresFontSize = .8, kScoresFontHeight = .05, kScoreTextTop = IsPlatformIPad() || IsPlatformMac() ? .18 : .165, kScoreFadeSpeed = .5, kHighlightMinIntensity = 0, kHighlightMaxIntensity = 1, kHighlightFlashSpeed = 5;
        var c = [], d = Form.extend({
            init: function (d, e, f, g) {
                this._super(d, e, f, g, c), this.mapName = null, this.fadeTimer = 0, this.highlightTimer = 0, this.newestScoreIndex = -1, this.highlightNewestHighScore = !1, this.bIsSelectingMap = !1, this.mapSelectionBoxOverlay = null, this.globalScoresTextureID = 0, this.localScoresTextureID = 0, this.friendsScoresTextureID = 0, this.selectedScoreboard = a.Local, this.selectedGameplayMode = kGameplayMode.Classic, this.targetHourglassOpacity = 0, this.hourglassOverlay = null, this.targetOfflineMessageOpacity = 0, this.targetScorePage = 1, this.totalScores = 0, this.targetMapNotSupportedOpacity = 0, this.iosOutOfDateText = null, this.targetOutOfDateOpacity = 0, this.multiplayerOverlay = null, this.playerNamesText = new Array(kNumHighScoreRows), this.scoresText = new Array(kNumHighScoreRows), this.wavesText = new Array(kNumHighScoreRows), this.mapButtons = new Array(kMaxOfficialMaps), this.navButtons = new Array(b.Count), this.mapIconOverlays = new Array(kMaxOfficialMaps), this.mapIconOriginalHalfWidth = new Array(kMaxOfficialMaps), this.mapIconOriginalHalfHeight = new Array(kMaxOfficialMaps), this.navButtonDisabledOverlays = new Array(b.Count), this.gameplayModeHilightOverlays = new Array(kNumGameplayModes);
                for (var h = 0; h < kNumHighScoreRows; h++)
                    this.playerNamesText[h] = null, this.scoresText[h] = null, this.wavesText[h] = null;
                for (var i = 0; i < kNumOfficialSingleplayerMaps; i++)
                    this.mapButtons[i] = null;
                this.localScoresTextureID = this.textureID, this.textureID = this.localScoresTextureID, this.selectedMapIndex = this.mostRecentSelectedMapIndex = 0, this.mapSelectionPosition = this.mapSelectionPositionTarget = (kNumOfficialSingleplayerMaps - this.selectedMapIndex) % kNumOfficialSingleplayerMaps / kNumOfficialSingleplayerMaps;
                for (var i = 0; i < kNumOfficialSingleplayerMaps; i++)
                    this.mapIconOverlays[i] = -1;
                this.retrievingScoresText = new Text(Map.GetFont(kScoresFontName)), this.retrievingScoresText.SetString("Retrieving Scores..."), this.retrievingScoresText.SetTextBoxSize(Vector2(.53, kScoresFontHeight)), this.retrievingScoresText.SetAlignment(kTextAlignment.Center), this.retrievingScoresText.SetSize(kScoresFontSize), this.retrievingScoresText.SetPosition(245, 395), this.gameCenterOfflineText = new Text(Map.GetFont(kScoresFontName)), this.gameCenterOfflineText.SetString("Unable to connect to Game Center. You must be online and logged in to Game Center to view Global and Friends scores."), this.gameCenterOfflineText.SetTextBoxSize(new Vector2(.53, kScoresFontHeight * 3)), this.gameCenterOfflineText.SetAlignment(kTextAlignment.Center), this.gameCenterOfflineText.SetSize(kScoresFontSize), this.gameCenterOfflineText.SetPosition(200, 300), this.gameCenterOfflineText.SetOpacity(0), this.mapNotSupportedByGCText = new Text(Map.GetFont(kScoresFontName)), this.mapNotSupportedByGCText.SetString("Multiplayer map high scores are not globally ranked."), this.mapNotSupportedByGCText.SetTextBoxSize(new Vector2(.53, kScoresFontHeight * 3)), this.mapNotSupportedByGCText.SetAlignment(kTextAlignment.Center), this.mapNotSupportedByGCText.SetSize(kScoresFontSize), this.mapNotSupportedByGCText.SetPosition(200, 300), this.mapNotSupportedByGCText.SetOpacity(0), this.iosOutOfDateText = new Text(Map.GetFont(kScoresFontName)), this.iosOutOfDateText.SetString("Cannot display Global or Friends scores.  This version of iOS does not support Game Center.  Please update your iPad to the latest iOS version."), this.iosOutOfDateText.SetTextBoxSize(new Vector2(.53, kScoresFontHeight * 3)), this.iosOutOfDateText.SetAlignment(kTextAlignment.Center), this.iosOutOfDateText.SetSize(kScoresFontSize), this.iosOutOfDateText.SetPosition(240, 300), this.iosOutOfDateText.SetOpacity(0);
                for (var j = 0; j < b.Count; j++)
                    this.navButtonDisabledOverlays[j] = null, this.navButtons[j] = null;
                for (var j = 0; j < kNumGameplayModes; j++)
                    this.gameplayModeHilightOverlays[j] = null
            }, destroy: function () {
                this.ReleaseDynamicText(), this.retrievingScoresText.destroy(), this.gameCenterOfflineText.destroy(), this.mapNotSupportedByGCText.destroy(), this.iosOutOfDateText.destroy()
            }, displayScoresForMapName: function (a) {
                this.fadeTimer = 0, this.targetHourglassOpacity = 0;
                var b = NextStep.UserDefaults.standardUserDefaults(), c, e = sprintf("%s%s", Map.getOfficialMapNameForIndex(this.selectedMapIndex), "_mp");
                if (this.selectedMapIndex >= kMapIndexMultiplayerFirst && a != e) {
                    var f = sprintf("%s%s", a, "_mp");
                    c = d.getHighScoresKeyForMap(f), f = null, this.mapName = sprintf("%s%s", a, "_mp")
                } else
                    c = d.getHighScoresKeyForMap(a);
                e = null;
                var g = b[c];
                this.newestScoreIndex = -1;
                if (g) {
                    var h = null;
                    for (var i = 0; i < g.length; i++) {
                        var j = g[i], k = j.date;
                        if (h || h > k)
                            h = k, this.newestScoreIndex = i + 1
                    }
                }
                var l = null;
                if (g) {
                    l = [];
                    for (var i = 0; i < g.length; i++) {
                        var j = g[i], m = j.gameplayMode;
                        m == this.selectedGameplayMode && l.push(g[i])
                    }
                }
                for (var i = 0; i < kNumHighScoreRows; i++) {
                    var n = null, o = null;
                    if (i == 0)
                        o = LocalizeString("Name", "The name of the player that had obtained the high score.");
                    else {
                        if (!g || i - 1 >= l.length) {
                            for (; i < kNumHighScoreRows; i++)
                                this.playerNamesText[i].SetString(""), this.scoresText[i].SetString(""), this.wavesText[i].SetString("");
                            break
                        }
                        console.assert(i >= 1 && i - 1 < l.length, "Invalid high score index '%d' requested.", i), n = l[i - 1], o = sprintf("%d. %s", i, n.name)
                    }
                    this.playerNamesText[i].SetOpacity(1), this.playerNamesText[i].SetString(o), i == 0 ? o = LocalizeString("Score", "The points that the player had obtained during a previous game.") : o = sprintf("%d", n[kScoreKey]), this.scoresText[i].SetOpacity(1), this.scoresText[i].SetString(o), i == 0 ? o = LocalizeString("Round", "The level at which the high score was achieved.") : o = sprintf("%d", n[kRoundKey]), this.wavesText[i].SetOpacity(1), this.wavesText[i].SetString(o)
                }
                l = null
            }, InitializeDynamicText: function () {
                var a = Map.GetFont(kScoresFontName);
                for (var b = 0; b < kNumHighScoreRows; b++)
                    this.playerNamesText[b] = new Text(a), this.playerNamesText[b].SetNormalizedPosition(.1, kScoreTextTop + b * kScoresFontHeight), this.playerNamesText[b].SetSize(kScoresFontSize), this.scoresText[b] = new Text(a), this.scoresText[b].SetNormalizedPosition(.6, kScoreTextTop + b * kScoresFontHeight), this.scoresText[b].SetAlignment(kTextAlignment.Center), this.scoresText[b].SetSize(kScoresFontSize), this.wavesText[b] = new Text(a), this.wavesText[b].SetNormalizedPosition(.83, kScoreTextTop + b * kScoresFontHeight), this.wavesText[b].SetAlignment(kTextAlignment.Center), this.wavesText[b].SetSize(kScoresFontSize)
            }, onButtonPressMap: function (a, b, c) {
                var d = a, e = MapSelectionForm.GetMapButtonMapNum(b);
                console.assert(e >= 0), d.refreshDisplayForMap(e)
            }, onButtonReleaseX: function (a, b, c) {
                var d = a;
                d.userInterface.switchToPopupForm(null)
            }, onButtonReleaseArrowLeft: function (a, b, c) {
                console.log("left");
                var d = a;
                d.selectedMapIndex++, d.selectedMapIndex >= kNumOfficialSingleplayerMaps && (d.selectedMapIndex = 0), d.refreshDisplayForMap(d.selectedMapIndex), d.mapSelectionPositionTarget = (kNumOfficialSingleplayerMaps - d.selectedMapIndex) % kNumOfficialSingleplayerMaps / kNumOfficialSingleplayerMaps
            }, onButtonReleaseArrowRight: function (a, b, c) {
                console.log("right");
                var d = a;
                d.selectedMapIndex--, d.selectedMapIndex < 0 && (d.selectedMapIndex = kNumOfficialSingleplayerMaps - 1), d.refreshDisplayForMap(d.selectedMapIndex), d.mapSelectionPositionTarget = (kNumOfficialSingleplayerMaps - d.selectedMapIndex) % kNumOfficialSingleplayerMaps / kNumOfficialSingleplayerMaps
            }, onButtonReleaseBottomPage: function () {
                var a = f;
                a.targetScorePage = ceil(a.totalScores / kNumHighScoreEntries), a.showScoreboardType(a.selectedScoreboard)
            }, onButtonReleaseTopPage: function (a, b, c) {
                var d = a;
                d.targetScorePage = 1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseHome: function (a, b, c) {
            }, onButtonReleasePageDown: function () {
                var a = f;
                a.targetScorePage++, a.targetScorePage > ceil(a.totalScores / kNumHighScoreEntries) && (a.targetScorePage = ceil(a.totalScores / kNumHighScoreEntries)), a.showScoreboardType(a.selectedScoreboard)
            }, onButtonReleasePageUp: function () {
                var a = f;
                a.targetScorePage--, a.targetScorePage < 1 && (a.targetScorePage = 1), a.showScoreboardType(a.selectedScoreboard)
            }, onButtonReleaseGlobal: function () {
                var b = f;
                b.textureID = b.globalScoresTextureID, b.showScoreboardType(a.Global), b.targetScorePage = 1
            }, onButtonReleaseLocal: function () {
                var b = f;
                b.textureID = b.localScoresTextureID, b.showScoreboardType(a.Local), b.targetScorePage = 1
            }, onButtonReleaseFriends: function (b, c, d) {
                var e = b;
                e.textureID = e.friendsScoresTextureID, e.showScoreboardType(a.Friends), e.targetScorePage = 1
            }, onButtonReleaseClassic: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.Classic;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseExtended: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.Extended;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseEndless: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.Endless;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseSuddenDeath: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.SuddenDeath;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseTimeTrial: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.TimeTrial;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseTowerCombo1: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.TowerCombo1;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onButtonReleaseTowerCombo2: function (a, b, c) {
                var d = a;
                d.selectedGameplayMode = kGameplayMode.TowerCombo2;
                for (var e = 0; e < kNumGameplayModes; e++)
                    d.gameplayModeHilightOverlays[e] !== null && (d.gameplayModeHilightOverlays[e].isHidden = !0);
                d.gameplayModeHilightOverlays[d.selectedGameplayMode].isHidden = !1, d.showScoreboardType(d.selectedScoreboard)
            }, onFormClose: function () {
                this._super(), this.ReleaseDynamicText(), this.userInterface.switchToBackgroundForm(kTitleScreenFormName), this.view.map !== null && (this.view.map.gameState = kGameState.Stopped)
            }, onFormOpen: function () {
                for (var c = 0; c < this.buttonList.length; ++c) {
                    var d = this.buttonList[c], e = MapSelectionForm.GetMapButtonMapNum(d);
                    e >= 0 ? this.mapButtons[e] = d : d.name == "NavTop".toLowerCase() ? this.navButtons[b.Top] = d : d.name == "NavUp".toLowerCase() ? this.navButtons[b.Up] = d : d.name == "NavHome".toLowerCase() ? this.navButtons[b.Home] = d : d.name == "NavDown".toLowerCase() ? this.navButtons[b.Down] = d : d.name == "NavBottom".toLowerCase() && (this.navButtons[b.Bottom] = d)
                }
                this.InitializeDynamicText();
                if (this.mapName !== null)
                    if (IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac())
                        for (var f = 0; f < kNumOfficialSingleplayerMaps; f++) {
                            if (this.mapName == Map.getOfficialMapNameForIndex(f)) {
                                this.selectedMapIndex = this.mostRecentSelectedMapIndex = f, this.mapSelectionPosition = this.mapSelectionPositionTarget = (kNumOfficialSingleplayerMaps - this.selectedMapIndex) % kNumOfficialSingleplayerMaps / kNumOfficialSingleplayerMaps;
                                break
                            }
                            if (f >= kMapIndexMultiplayerFirst) {
                                var g = sprintf("%s%s", Map.getOfficialMapNameForIndex(f), "_mp");
                                if (this.mapName == g) {
                                    g = null, this.selectedMapIndex = this.mostRecentSelectedMapIndex = f, this.mapSelectionPosition = this.mapSelectionPositionTarget = (kNumOfficialSingleplayerMaps - this.selectedMapIndex) % kNumOfficialSingleplayerMaps / kNumOfficialSingleplayerMaps;
                                    break
                                }
                                g = null
                            }
                        }
                    else
                        for (var f = 0; f < kNumOfficialSingleplayerMaps; f++)
                            this.mapButtons[f].isToggled = this.mapName == Map.getOfficialMapNameForIndex(f), this.mapButtons[f].isToggled && this.setActiveButton(this.mapButtons[f]);
                else
                    this._super();
                if (IsPlatformIPad() || IsPlatformAndroid() || IsPlatformMac()) {
                    for (var c = 0; c < this.overlayList.length; ++c) {
                        var h = this.overlayList[c];
                        if (h.name == "MapSelectionBox".toLowerCase())
                            console.assert(this.mapSelectionBoxOverlay === null), this.mapSelectionBoxOverlay = h;
                        else if (StringExt.hasPrefix(h.name, "Map".toLowerCase())) {
                            var e = MapSelectionForm.GetMapNum(h.getName().substring("Map".length));
                            e >= 0 && (console.assert(e < kNumOfficialSingleplayerMaps), this.mapIconOverlays[e] = c, this.mapIconOriginalHalfWidth[e] = h.halfWidth, this.mapIconOriginalHalfHeight[e] = h.halfHeight)
                        } else if (h.name == "Hourglass".toLowerCase()) {
                            this.hourglassOverlay = h;
                            var i = new Color;
                            i.r = this.hourglassOverlay.color.r, i.g = this.hourglassOverlay.color.g, i.b = this.hourglassOverlay.color.b, i.a = 0, this.hourglassOverlay.color = i, this.retrievingScoresText.SetOpacity(i.a / 255)
                        } else
                            StringExt.hasPrefix(h.name, "Nav".toLowerCase()) ? h.name == "NavUpDisabled".toLowerCase() ? this.navButtonDisabledOverlays[b.Up] = h : h.name == "NavDownDisabled".toLowerCase() ? this.navButtonDisabledOverlays[b.Down] = h : h.name == "NavUpJumpDisabled".toLowerCase() ? this.navButtonDisabledOverlays[b.Top] = h : h.name == "NavDownJumpDisabled".toLowerCase() ? this.navButtonDisabledOverlays[b.Bottom] = h : h.name == "NavHomeDisabled".toLowerCase() && (this.navButtonDisabledOverlays
                            [b.Home] = h) : h.name == "ClassicSelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.Classic] = h : h.name == "ExtendedSelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.Extended] = h : h.name == "EndlessSelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.Endless] = h : h.name == "SuddenDeathSelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.SuddenDeath] = h : h.name == "TimeTrialSelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.TimeTrial] = h : h.name == "TowerCombo1SelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.TowerCombo1] = h : h.name == "TowerCombo2SelectedOverlay".toLowerCase() ? this.gameplayModeHilightOverlays[kGameplayMode.TowerCombo2] = h : h.name == "MultiplayerOverlay".toLowerCase() && (this.multiplayerOverlay = h)
                    }
                    this.updateMapIcons(), this.updateMapIcons()
                }
                this.showScoreboardType(a.Local)
            }, touchesBegan: function (a) {
                var b = a[0], c = b.locationInView(null), d = c.x / EAGLView.sScreenDimensions.width, e = c.y / EAGLView.sScreenDimensions.height;
                this.mapSelectionBoxOverlay.centerX - this.mapSelectionBoxOverlay.halfWidth <= d && d <= this.mapSelectionBoxOverlay.centerX + this.mapSelectionBoxOverlay.halfWidth && this.mapSelectionBoxOverlay.centerY - this.mapSelectionBoxOverlay.halfHeight <= e && e <= this.mapSelectionBoxOverlay.centerY + this.mapSelectionBoxOverlay.halfHeight && (this.bIsSelectingMap = !0);
                if (!this.bIsSelectingMap) {
                    this._super(a);
                    return
                }
            }, touchesMoved: function (a) {
                if (!IsPlatformIPad() && !IsPlatformMac() && !IsPlatformAndroid() || !this.bIsSelectingMap) {
                    this._super(a);
                    return
                }
                var b = 1, c = a[0], d = c.locationInView(null), e = c.previousLocationInView(null), f = (d.x - e.x) / EAGLView.sScreenDimensions.width;
                this.mapSelectionPosition += f * b;
                while (this.mapSelectionPosition >= 1)
                    this.mapSelectionPosition -= 1;
                while (this.mapSelectionPosition < 0)
                    this.mapSelectionPosition += 1;
                var g = this.mapSelectionPosition * kNumOfficialSingleplayerMaps - .5;
                g < 0 && (g += kNumOfficialSingleplayerMaps);
                var h = this.selectedMapIndex;
                this.selectedMapIndex = Math.floor(kNumOfficialSingleplayerMaps - g), this.selectedMapIndex != h && this.refreshDisplayForMap(this.selectedMapIndex), this.mostRecentSelectedMapIndex = this.selectedMapIndex, this.updateMapIcons()
            }, updateNavButtons: function () {
                if (this.selectedScoreboard == a.Local || IsPlatformAndroid())
                    for (var c = 0; c < b.Count; c++)
                        this.navButtonDisabledOverlays[c] !== null && (this.navButtonDisabledOverlays[c].isHidden = !0), this.navButtons[c] !== null && (this.navButtons[c].isDisabled = !0);
                else
                    this.navButtonDisabledOverlays[b.Top].isHidden = !1, this.navButtonDisabledOverlays[b.Up].isHidden = !1, this.navButtonDisabledOverlays[b.Home].isHidden = !1, this.navButtonDisabledOverlays[b.Down].isHidden = !1, this.navButtonDisabledOverlays[b.Bottom].isHidden = !1, this.navButtons[b.Top].isDisabled = !0, this.navButtons[b.Up].isDisabled = !0, this.navButtons[b.Home].isDisabled = !0, this.navButtons[b.Down].isDisabled = !0, this.navButtons[b.Bottom].isDisabled = !0;
                for (var d = 0; d < kNumGameplayModes; d++)
                    this.gameplayModeHilightOverlays[d] !== null && (this.gameplayModeHilightOverlays[d].isHidden = !0);
                this.gameplayModeHilightOverlays[this.selectedGameplayMode].isHidden = !1
            }, updateMapIcons: function () {
                for (var a = 0; a < kNumOfficialSingleplayerMaps; a++)
                    if (this.mapIconOverlays[a] >= 0) {
                        var b = this.mapSelectionPosition + a / kNumOfficialSingleplayerMaps;
                        while (b >= 1)
                            b -= 1;
                        var c = 0, d = IsPlatformAndroid() ? .2 : .33, e = 0, f = this.mapSelectionBoxOverlay.centerX + d * SIN(b * 2 * M_PI), g = this.mapSelectionBoxOverlay.centerY + e * COS(b * 2 * M_PI) + c, h = this.overlayList[this.mapIconOverlays[a]];
                        h.centerX = f, h.centerY = g;
                        var i = b;
                        i > .5 && (i = 1 - i), i *= 2;
                        var j = i >= .5 ? 0 : 1 - 1 * i * 2;
                        h.color.r = h.color.g = h.color.b = 255 * j;
                        var k = .8, l = 1;
                        j > k && (l += .5 * ((j - k) / (1 - k))), h.halfWidth = this.mapIconOriginalHalfWidth[a] * l, h.halfHeight = this.mapIconOriginalHalfHeight[a] * l
                    }
                for (var a = 0; a < kNumOfficialSingleplayerMaps - 1; a++) {
                    var b = this.mapSelectionPosition + a / kNumOfficialSingleplayerMaps;
                    while (b >= 1)
                        b -= 1;
                    b > .5 && (b = 1 - b);
                    for (var m = a + 1; m < kNumOfficialSingleplayerMaps; m++) {
                        var n = this.mapSelectionPosition + m / kNumOfficialSingleplayerMaps;
                        while (n >= 1)
                            n -= 1;
                        n > .5 && (n = 1 - n);
                        if (this.mapIconOverlays[a] >= 0 && this.mapIconOverlays[m] >= 0)
                            if (b < n && this.mapIconOverlays[a] < this.mapIconOverlays[m] || b > n && this.mapIconOverlays[a] > this.mapIconOverlays[m]) {
                                this.overlayList.swapObjects(this.mapIconOverlays[a], this.mapIconOverlays[m]);
                                var o = this.mapIconOverlays[a];
                                this.mapIconOverlays[a] = this.mapIconOverlays[m], this.mapIconOverlays[m] = o
                            }
                    }
                }
            }, touchesEnded: function (a) {
                if (!IsPlatformIPad() && !IsPlatformMac() && !IsPlatformAndroid() || !this.bIsSelectingMap) {
                    this._super(a);
                    return
                }
                this.bIsSelectingMap = !1;
                var b = this.selectedMapIndex;
                this.selectedMapIndex = this.mostRecentSelectedMapIndex, this.selectedMapIndex != b && this.refreshDisplayForMap(this.selectedMapIndex), this.mapSelectionPositionTarget = (kNumOfficialSingleplayerMaps - this.selectedMapIndex) % kNumOfficialSingleplayerMaps / kNumOfficialSingleplayerMaps
            }, update: function (a) {
                if ((IsPlatformIPad() || IsPlatformMac() || IsPlatformAndroid()) && !this.bIsSelectingMap && this.mapSelectionPosition != this.mapSelectionPositionTarget) {
                    var b = this.mapSelectionPositionTarget - this.mapSelectionPosition;
                    fabsf(b) > .5 && (b = b > 0 ? -(1 - b) : 1 + b);
                    if (fabsf(b) <= kPrecisionErrorCorrection)
                        this.mapSelectionPosition = this.mapSelectionPositionTarget;
                    else {
                        var c = 10;
                        this.mapSelectionPosition += b * c * a;
                        while (this.mapSelectionPosition >= 1)
                            this.mapSelectionPosition -= 1;
                        while (this.mapSelectionPosition < 0)
                            this.mapSelectionPosition += 1
                    }
                    this.updateMapIcons()
                }
            }, refreshDisplayForMap: function (a) {
                if (this.mapName !== null && this.mapName == Map.getOfficialMapNameForIndex(a))
                    return;
                var b = Map.getOfficialMapNameForIndex(a);
                this.mapName = b, this.highlightNewestHighScore = !1, this.showScoreboardType(this.selectedScoreboard)
            }, ReleaseDynamicText: function () {
                var a;
                for (a = 0; a < kNumHighScoreRows; a++)
                    this.playerNamesText[a].destroy(), this.scoresText[a].destroy(), this.wavesText[a].destroy()
            }, renderHighlightedScore: function (a) {
                this.highlightTimer += a * kHighlightFlashSpeed;
                while (this.highlightTimer > kTwoPI)
                    this.highlightTimer -= kTwoPI;
                var b = SIN(this.highlightTimer) * .5 + .5, c = b * (kHighlightMaxIntensity - kHighlightMinIntensity) + kHighlightMinIntensity, d = this.playerNamesText[this.newestScoreIndex].GetPosition().copy(), e = 700, f = 30;
                d.AddToY(5);
                var g = RenderDevice.createVertexArray(4, [d.GetX(), d.GetY(), 0, d.GetX() + e, d.GetY(), 0, d.GetX(), d.GetY() + f, 0, d.GetX() + e, d.GetY() + f, 0]), h = 255, i = 255, j = RenderDevice.createColorArray(4, new Color(h, i, 0, c)), k = RenderDevice.getRenderDevice();
                k.useShaderProgram(kProgramID.Textureless), k.setVertexStreamDataArrays(g, j), k.setBlendState(kBlendState.Alpha), k.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), k.useShaderProgram(kProgramID.Default)
            }, render: function (b) {
                this._super(b), this.fadeTimer += b * 1 / kScoreFadeSpeed, this.fadeTimer = MIN(this.fadeTimer, 1e3);
                if (this.hourglassOverlay !== null) {
                    var c = new Color;
                    c.r = this.hourglassOverlay.color.r, c.g = this.hourglassOverlay.color.g, c.b = this.hourglassOverlay.color.b, this.retrievingScoresText.SetTint(new Color(255, 255, 92)), this.targetHourglassOpacity > this.hourglassOverlay.color.a ? (c.a = MIN(this.hourglassOverlay.color.a + b / kScoreFadeSpeed * 255, 254), this.hourglassOverlay.color = c, this.retrievingScoresText.SetOpacity(c.a / 255)) : (c.a = MAX(this.hourglassOverlay.color.a - b / kScoreFadeSpeed * 255, 0), this.hourglassOverlay.color = c, this.retrievingScoresText.SetOpacity(c.a / 255)), this.retrievingScoresText.Render(b)
                }
                if (this.targetOfflineMessageOpacity > this.gameCenterOfflineText.GetTint().a) {
                    var d = MIN(this.gameCenterOfflineText.GetTint().a + b / kScoreFadeSpeed * 255, 254);
                    this.gameCenterOfflineText.SetTint(Color(255, 255, 92, d))
                } else if (this.targetOfflineMessageOpacity < this.gameCenterOfflineText.GetTint().a) {
                    var d = MAX(this.gameCenterOfflineText.GetTint().a - b / kScoreFadeSpeed * 255, 0);
                    this.gameCenterOfflineText.SetTint(Color(255, 255, 92, d))
                }
                this.gameCenterOfflineText.Render(b);
                if (this.targetMapNotSupportedOpacity > this.mapNotSupportedByGCText.GetTint().a) {
                    var d = MIN(this.mapNotSupportedByGCText.GetTint().a + b / kScoreFadeSpeed * 255, 254);
                    this.mapNotSupportedByGCText.SetTint(Color(255, 255, 92, d))
                } else if (this.targetMapNotSupportedOpacity < this.mapNotSupportedByGCText.GetTint().a) {
                    var d = MAX(this.mapNotSupportedByGCText.GetTint().a - b / kScoreFadeSpeed * 255, 0);
                    this.mapNotSupportedByGCText.SetTint(Color(255, 255, 92, d))
                }
                this.mapNotSupportedByGCText.Render(b);
                if (this.targetOutOfDateOpacity > this.iosOutOfDateText.GetTint().a) {
                    var d = MIN(this.iosOutOfDateText.GetTint().a + b / kScoreFadeSpeed * 255, 254);
                    this.iosOutOfDateText.SetTint(Color(255, 255, 92, d))
                } else if (this.targetOutOfDateOpacity < this.iosOutOfDateText.GetTint().a) {
                    var d = MAX(this.iosOutOfDateText.GetTint().a - b / kScoreFadeSpeed * 255, 0);
                    this.iosOutOfDateText.SetTint(Color(255, 255, 92, d))
                }
                this.iosOutOfDateText.Render(b), this.highlightTimer += b * kHighlightFlashSpeed;
                while (this.highlightTimer > kTwoPI)
                    this.highlightTimer -= kTwoPI;
                var e = SIN(this.highlightTimer) * .5 + .5, f = e * (kHighlightMaxIntensity - kHighlightMinIntensity) + kHighlightMinIntensity, g;
                for (g = 0; g < kNumHighScoreRows; g++) {
                    var h = Math.max(Math.min(this.fadeTimer - g * .15, 1), 0);
                    if (!IsPlatformAndroid()) {
                        var i = this.scoresText[g].GetPosition().copy();
                        this.selectedScoreboard == a.Local ? i.x = 614.400024 : i.x = 814.400024, this.scoresText[g].SetPositionWithVector(i)
                    }
                    !(this.highlightNewestHighScore && this.newestScoreIndex >= 0 && g != this.newestScoreIndex && g != 0), this.playerNamesText[g] !== null && this.playerNamesText[g].SetOpacity(h), this.wavesText[g] !== null && (this.selectedScoreboard != a.Local ? this.wavesText[g].SetOpacity(0) : this.wavesText[g].SetOpacity(h)), this.scoresText[g] !== null && this.scoresText[g].SetOpacity(h), this.playerNamesText[g] !== null && this.playerNamesText[g].Render(b), this.scoresText[g] !== null && this.scoresText[g].Render(b), this.wavesText[g] !== null && this.wavesText[g].Render(b);
                    if (this.highlightNewestHighScore && this.newestScoreIndex >= 0 && g == this.newestScoreIndex) {
                        h *= f * .7, this.playerNamesText[g] !== null && this.playerNamesText[g].SetOpacity(h), this.wavesText[g] !== null && (this.selectedScoreboard != a.Local ? this.wavesText[g].SetOpacity(0) : this.wavesText[g].SetOpacity(h)), this.scoresText[g] !== null && this.scoresText[g].SetOpacity(h);
                        var j = 2;
                        for (var k = 0; k < j; k++)
                            this.playerNamesText[g] !== null && this.playerNamesText[g].Render(b), this.scoresText[g] !== null && this.scoresText[g].Render(b), this.wavesText[g] !== null && this.wavesText[g].Render(b)
                    }
                }
            }, gameCenterDidFetchHighScores: function (a, b, c) {
                if (b != this.selectedScoreboard)
                    return;
                this.fadeTimer = 0, this.targetHourglassOpacity = 0, this.totalScores = c, this.newestScoreIndex = -1;
                if (a !== null) {
                    var d = null;
                    for (var e = 0; e < a.length; e++) {
                        var f = a[e], g = f.date;
                        if (d || d > g)
                            d = g, this.newestScoreIndex = e + 1
                    }
                }
                for (var e = 0; e < kNumHighScoreRows; e++) {
                    var h = null, i = null;
                    if (e == 0)
                        i = LocalizeString("Name", "The name of the player that had obtained the high score.");
                    else {
                        if (a === null || e - 1 >= a.length) {
                            for (; e < kNumHighScoreRows; e++)
                                this.playerNamesText[e].SetString(""), this.scoresText[e].SetString(""), this.wavesText[e].SetString("");
                            break
                        }
                        console.assert(e >= 1 && e - 1 < a.length, "Invalid high score index '%d' requested.", e), h = a[e - 1], i = sprintf("%d. %s", e + (this.targetScorePage - 1) * kNumHighScoreEntries, h.name)
                    }
                    this.playerNamesText[e].SetOpacity(1), this.playerNamesText[e].SetString(i), e == 0 ? i = LocalizeString("Score", "The points that the player had obtained during a previous game.") : i = sprintf("%d", h[kScoreKey]), this.scoresText[e].SetOpacity(1), this.scoresText[e].SetString(i)
                }
                this.updateNavButtons()
            }, showScoreboardType: function (b) {
                for (var c = 0; c < kNumHighScoreRows; c++)
                    this.wavesText[c].SetString(""), this.scoresText[c].SetString(""), this.playerNamesText[c].SetString("");
                this.selectedScoreboard = b, this.fadeTimer = 0, this.targetHourglassOpacity = 255, this.targetOfflineMessageOpacity = 0, this.targetMapNotSupportedOpacity = 0, this.targetOutOfDateOpacity = 0, this.updateNavButtons();
                switch (b) {
                    case a.Local:
                        this.displayScoresForMapName(this.mapName);
                        break;
                    case a.Global:
                        for (var c = 0; c < kNumHighScoreRows; c++)
                            this.wavesText[c].SetString(""), this.scoresText[c].SetString(""), this.playerNamesText[c].SetString("");
                        if (this.selectedMapIndex == kMapIndexRainforestMP || this.selectedMapIndex == kMapIndexVolcanoMP) {
                            this.targetOutOfDateOpacity = 0, this.targetHourglassOpacity = 0, this.targetOfflineMessageOpacity = 0, this.targetMapNotSupportedOpacity = 255;
                            break
                        }
                        break;
                    case a.Friends:
                        for (var c = 0; c < kNumHighScoreRows; c++)
                            this.wavesText[c].SetString(""), this.scoresText[c].SetString(""), this.playerNamesText[c].SetString("");
                        if (this.selectedMapIndex == kMapIndexRainforestMP || this.selectedMapIndex == kMapIndexVolcanoMP) {
                            this.targetOutOfDateOpacity = 0, this.targetHourglassOpacity = 0, this.targetOfflineMessageOpacity = 0, this.targetMapNotSupportedOpacity = 255;
                            break
                        }
                        break;
                    default:
                }
            }, gameCenterDidFetchPlayersRank: function (a, b) {
                if (this.selectedScoreboard != b)
                    return;
                this.targetScorePage = MAX(MIN(a / kNumHighScoreEntries, ceil(this.totalScores / kNumHighScoreEntries)), 1), this.showScoreboardType(this.selectedScoreboard)
            }
        }, "ScoresForm");
        window.jQuery.extend(d, {
            getHighScoresKeyForMap: function (a) {
                var b = null;
                return a === null || a == Map.getOfficialMapNameForIndex(0) ? b = sprintf("%s", kHighScoresDefaultKey) : b = sprintf("%s%s", a, kHighScoresDefaultKey), b
            }
        }), window.ScoresForm = d, Preloader.initialize("userinterface/forms/scoresform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a), this.savedGameState = kGameState.Running
            }, destroy: function () {
            }, onButtonReleaseX: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }, onButtonReleaseRestart: function (a, b, c) {
                a.userInterface.switchToPopupForm(kConfirmRestartFormName)
            }, onButtonReleaseAchievements: function (a, b, c) {
                a.userInterface.switchToPopupForm(kAchievementsForm)
            }, onButtonReleaseOptions: function (a, b, c) {
                a.userInterface.switchToPopupForm(kTitleOptionsFormName)
            }, onButtonReleaseSaveAndQuit: function (a, b, c) {
                a.view.map.gameState = kGameState.Paused, a.view.map.exitGame(), a.savedGameState = kGameState.Paused, a.userInterface.switchToBackgroundForm(kTitleScreenFormName), a.userInterface.switchToPopupForm(null)
            }, onFormClose: function () {
                this.userInterface.getTargetPopupFormName() === null && (this.savedGameState != kGameState.Paused && (this.view.map.unpauseGame(), this.view.map.updateStatusTextWithCurrentRound()), this.view.map.updatePauseButtonState())
            }, onFormOpen: function () {
                this._super(), this.userInterface.getPreviousPopupFormName() === null && (this.savedGameState = this.view.map.gameState, this.savedGameState != kGameState.Paused && this.view.map.pauseGame(), this.view.map.updatePauseButtonState());
                var a = null;
                switch (this.view.map.gameplayMode) {
                    case kGameplayMode.Classic:
                        a = LocalizeString("Classic", null);
                        break;
                    case kGameplayMode.Extended:
                        a = LocalizeString("Extended", null);
                        break;
                    case kGameplayMode.Endless:
                        a = LocalizeString("Endless", null);
                        break;
                    case kGameplayMode.SuddenDeath:
                        a = LocalizeString("SuddenDeath", null);
                        break;
                    case kGameplayMode.TimeTrial:
                        a = LocalizeString("TimeTrial", null);
                        break;
                    case kGameplayMode.TowerCombo1:
                        a = LocalizeString("TowerCombo1", null);
                        break;
                    case kGameplayMode.TowerCombo2:
                        a = LocalizeString("TowerCombo2", null);
                        break;
                    default:
                        console.warn("Invalid gameplay mode requested.")
                }
                var b = null;
                switch (this.view.map.difficultyLevel) {
                    case kDifficultyLevel.Easy:
                        b = LocalizeString("Easy", null);
                        break;
                    case kDifficultyLevel.Medium:
                        b = LocalizeString("Medium", null);
                        break;
                    case kDifficultyLevel.Hard:
                        b = LocalizeString("Hard", null);
                        break;
                    default:
                        console.warn("Invalid difficulty level requested.")
                }
                var c = sprintf("%s - %s %s (%s)", LocalizeString("Paused", null), a, LocalizeString("Mode", null), b);
                this.view.map.gameHudForm.setStatusString(c, 0, !0)
            }
        }, "InGameOptionsForm");
        window.InGameOptionsForm = b, Preloader.initialize("userinterface/forms/ingameoptionsform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a)
            }, onButtonReleaseYes: function (a, b, c) {
                a.view.map.reset(), a.view.map.unpauseGame();
                for (var d = 0; d < a.view.map.numPlayers; d++)
                    a.view.map.gameHudForm.playbackButton[d] && (a.view.map.gameHudForm.playbackButton[d].isToggled = !1);
                a.userInterface.switchToPopupForm(null)
            }, onButtonReleaseNo: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }, onButtonReleaseX: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }
        }, "ConfirmRestartForm");
        window.ConfirmRestartForm = b, Preloader.initialize("userinterface/forms/confirmrestartform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        kMaxPlayerNameLength = 10;
        var a = Form.extend({
            init: function (a, b, c, d) {
                this.milestone = {}, this._super(a, b, c, d);
                var e = Preloader.dependOn(this);
                Preloader.dependOn(bindSelf(function () {
                    this.mKeyboard = new WindowsKeyboard(this, bindSelf(this.OnEvent_KeyPress, this), bindSelf(this.OnEvent_DismissKeyboard, this)), this.mPlayerName = new Text(Map.GetFont("font_gold_large")), this.mPlayerName.SetNormalizedPosition(.163, this.centerY - .06), this.mPlayerName.SetScale(1), this.mPlayerName.SetString(""), this.name = "", e()
                }, this), this.milestone)
            }, destroy: function () {
                this.mKeyboard.destroy(), this.mPlayerName.destroy()
            }, render: function (a) {
                this._super(a), this.mPlayerName.Render(a)
            }, onFormClose: function () {
                var a = !0;
                a && Map.deleteSaveGame(), this.view.map.highScoreAchieved = !1
            }, onFormOpen: function () {
                this._super(), this.showKeyboard()
            }, touchesBegan: function (a) {
            }, update: function (a) {
                this.mKeyboard.update(a)
            }, buttonPressed: function (a) {
            }, OnEvent_DismissKeyboard: function () {
                this.textFieldDidEndEditing()
            }, OnEvent_KeyPress: function (a) {
                a != this.mPlayerName.GetString() ? this.mPlayerName.SetString(a) : this.view.audioConfig.invalidBuildLocationSoundEffect.play()
            }, showKeyboard: function () {
                this.mKeyboard.Show();
                var a = NextStep.UserDefaults.standardUserDefaults(), b = a.stringForKey(kPlayerNamePreference);
                this.name = b
            }, saveScore: function () {
                var a = this.view.map.GetPlayer(kDefaultPlayerID), b = NextStep.UserDefaults.standardUserDefaults(), c = b.stringForKey(kPlayerNamePreference), d = "Guest";
                c || (c = d);
                var e;
                if (this.view.map.numPlayers > 1) {
                    var f = sprintf("%s%s", this.view.map.name, "_mp");
                    e = ScoresForm.getHighScoresKeyForMap(f), f = null
                } else
                    e = ScoresForm.getHighScoresKeyForMap(this.view.map.name);
                var g = b[e];
                g || (g = [], b[e] = g);
                var h = { name: c, date: Date.now(), layout: 0, difficulty: this.view.map.difficultyLevel, health: a.GetHealth(), gameplayMode: this.view.map.gameplayMode, complete: this.view.map.isCompleted };
                h[kScoreKey] = a.GetScore(), h[kRoundKey] = this.view.map.unboundedWaveIndex + 1, g.push(h);
                for (var i = 0; i < g.length - 1; i++)
                    for (var j = i + 1; j < g.length; j++) {
                        var k = g[i], l = g[j], m = k.date, n = l.date;
                        (k[kScoreKey] < l[kScoreKey] || k[kScoreKey] == l[kScoreKey] && (k[kRoundKey] < l[kScoreKey] || k[kRoundKey] == l[kRoundKey] && m > n)) && g.swapObjects(i, j)
                    }
                for (var o = 0; o < kNumGameplayModes; o++) {
                    var p = o, q = 0;
                    for (var r = 0; r < g.length; r++) {
                        var s = g[r], t = s.gameplayMode;
                        if (t == p) {
                            q++;
                            if (q > kNumHighScoreEntries) {
                                for (var u = g.length - 1; u >= r; u--) {
                                    var v = g[u], w = v.gameplayMode;
                                    w == p && g.removeAtIndex(u)
                                }
                                break
                            }
                        }
                    }
                }
                b.synchronize()
            }, textFieldDidEndEditing: function () {
                var a = this.mPlayerName.GetString(), b = NextStep.UserDefaults.standardUserDefaults();
                b[kPlayerNamePreference] = a, this.saveScore();
                var c, d = this.view.map.name, e = this.view.map.gameplayMode;
                Payment ? Payment.isPaidUser(bindSelf(function (a) {
                    if (!a) {
                        var b = this.userInterface.switchToPopupForm(kUpsellForm + "_grasslands");
                        b.scoresMapName = d, b.scoresHighlightNewest = !0, b.scoresGameplayMode = e
                    } else
                        c = this.userInterface.switchToPopupForm(kScoresFormName), c.highlightNewestHighScore = !0, this.view.map.numPlayers > 1 ? c.mapName = sprintf("%s%s", d, "_mp") : c.mapName = sprintf(d), c.selectedGameplayMode = e
                }, this)) : (c = this.userInterface.switchToPopupForm(kScoresFormName), c.highlightNewestHighScore = !0, this.view.map.numPlayers > 1 ? c.mapName = sprintf("%s%s", d, "_mp") : c.mapName = sprintf(d), c.selectedGameplayMode = e)
            }
        }, "NewHighScoreForm");
        window.NewHighScoreForm = a, Preloader.initialize("userinterface/forms/newhighscoreform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = .15, b = [], c = Form.extend({
            init: function (a, c, d, e) {
                this.milestone = {};
                var f = Preloader.dependOn(this);
                this._super(a, c, d, e, b), this.soundVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference), this.musicVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kMusicVolumePreference), this.targetSoundVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference), this.targetMusicVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kMusicVolumePreference), this.bGridEnabled = NextStep.UserDefaults.standardUserDefaults().boolForKey(kGridPreference), this.bInSound = !1, this.bInMusic = !1, this.bInGrid = !1, this.soundEffectId = 0, this.mVolumeBarTextureID = 0, this.gridCheckOverlay = null, Preloader.dependOn(bindSelf(function () {
                    for (var a = 0; a < this.buttonList.length; ++a) {
                        var b = this.buttonList[a];
                        if (b.GetName() == "Grid".toLowerCase()) {
                            b.isToggled = this.bGridEnabled;
                            break
                        }
                    }
                    f()
                }, this), this.milestone), this.mVolumeBarTextureID = Preloader.dependOn(this, Sprite.initTextureFromFile("UserInterface", "Options_Bar.png"))
            }, destroy: function () {
                this.mVolumeBarTextureID && Sprite.destroyTexture(this.mVolumeBarTextureID)
            }, buttonPressed: function (b) {
                if (this.bInSound) {
                    if (b == kButtonPress.Left || b == kButtonPress.Right) {
                        this.soundVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference) + (b == kButtonPressLeft ? -a : a), this.soundVolume = Math.max(this.soundVolume, 0), this.soundVolume = Math.min(this.soundVolume, 1), NextStep.UserDefaults.standardUserDefaults()[kSoundEffectVolumePreference] = this.soundVolume;
                        return
                    }
                    b != kButtonPress.Back
                } else if (this.bInMusic) {
                    if (b == kButtonPress.Left || b == kButtonPress.Right) {
                        this.musicVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kMusicVolumePreference) + (b == kButtonPressLeft ? -a : a), this.musicVolume = Math.max(this.musicVolume, 0), this.musicVolume = Math.min(this.musicVolume, 1), NextStep.UserDefaults.standardUserDefaults()[kMusicVolumePreference] = NextStep.Number.numberWithFloat(this.musicVolume);
                        return
                    }
                } else if (this.bInGrid && b == kButtonPress.Select) {
                    this.bGridEnabled = !NextStep.UserDefaults.standardUserDefaults().boolForKey(kGridPreference), NextStep.UserDefaults.standardUserDefaults()[kGridPreference] = this.bGridEnabled;
                    return
                }
                b == kButtonPress.Back && NextStep.UserDefaults.standardUserDefaults().synchronize(), this._super(b)
            }, onButtonPressSound: function (b, c, d) {
                var e = b;
                e.bInSound = !0, IsPlatformPSP() || (e.targetSoundVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kSoundEffectVolumePreference) + (c.GetName() == "SoundDown".toLowerCase() ? -a : a), e.targetSoundVolume = Math.max(e.targetSoundVolume, 0), e.targetSoundVolume = Math.min(e.targetSoundVolume, 1))
            }, onButtonExitSound: function (a, b, c) {
                var d = a;
                d.bInSound = !1
            }, onButtonPressMusic: function (b, c, d) {
                var e = b;
                e.bInMusic = !0, IsPlatformPSP() || (e.targetMusicVolume = NextStep.UserDefaults.standardUserDefaults().floatForKey(kMusicVolumePreference) + (c.GetName() == "MusicDown".toLowerCase() ? -a : a), e.targetMusicVolume = Math.max(e.targetMusicVolume, 0), e.targetMusicVolume = Math.min(e.targetMusicVolume, 1))
            }, onButtonExitMusic: function (a, b, c) {
                var d = a;
                d.bInMusic = !1
            }, onButtonPressGrid: function (a, b, c) {
                var d = a;
                d.bInGrid = !0, IsPlatformPSP() || (d.bGridEnabled = !NextStep.UserDefaults.standardUserDefaults().boolForKey(kGridPreference), NextStep.UserDefaults.standardUserDefaults()[kGridPreference] = d.bGridEnabled)
            }, onButtonExitGrid: function (a, b, c) {
                var d = a;
                d.bInGrid = !1
            }, onButtonReleaseOk: function (a, b, c) {
                var d = a;
                NextStep.UserDefaults.standardUserDefaults().synchronize(), d.userInterface.switchToPopupForm(null)
            }, render: function (a) {
                this._super(a);
                var b = [.293, .37], c = [.424, .034], d = RenderDevice.createVertexTexCoordArray(4, [b[0], b[1], 0, b[0], b[1] + c[1], 0, b[0] + c[0] * this.soundVolume, b[1], 0, b[0] + c[0] * this.soundVolume, b[1] + c[1], 0], [0, 0, 0, CORRECT_V(this.mVolumeBarTextureID, 1), CORRECT_U(this.mVolumeBarTextureID, this.soundVolume), 0, CORRECT_U(this.mVolumeBarTextureID, this.soundVolume), CORRECT_V(this.mVolumeBarTextureID, 1)]), e = RenderDevice.getRenderDevice();
                e.pushMatrix(), e.scaleModelViewMatrix(EAGLView.sScreenDimensions.width, EAGLView.sScreenDimensions.height), e.setTextureWithID(this.mVolumeBarTextureID), e.setTextureAddressingMode(kTextureAddressMode.Clamp), e.setVertexStreamDataArrays(d, RenderDevice.createColorArray(4, 255)), e.setBlendState(kBlendState.None), e.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4);
                var f = [.293, .49], g = [.424, .034];
                d[0] = f[0], d[1] = f[1], d[5] = f[0], d[6] = f[1] + g[1], d[10] = f[0] + g[0] * this.musicVolume, d[11] = f[1], d[15] = f[0] + g[0] * this.musicVolume, d[16] = f[1] + g[1], d[13] = CORRECT_U(this.mVolumeBarTextureID, this.musicVolume), d[18] = CORRECT_U(this.mVolumeBarTextureID, this.musicVolume), e.setVertexStreamDataArrays(d, RenderDevice.createColorArray(4, new Color)), e.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4), e.popMatrix()
            }, update: function (a) {
                this._super(a), IS_EQUAL(this.musicVolume, this.targetMusicVolume) ? this.musicVolume = this.targetMusicVolume : this.musicVolume += (this.targetMusicVolume - this.musicVolume) * a * 6, IS_EQUAL(this.soundVolume, this.targetSoundVolume) ? this.soundVolume = this.targetSoundVolume : this.soundVolume += (this.targetSoundVolume - this.soundVolume) * a * 6, NextStep.UserDefaults.standardUserDefaults()[kMusicVolumePreference] = this.musicVolume, NextStep.UserDefaults.standardUserDefaults()[kSoundEffectVolumePreference] = this.soundVolume
            }
        }, "TitleOptionsForm");
        window.TitleOptionsForm = c, Preloader.initialize("userinterface/forms/titleoptionsform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a)
            }, destroy: function () {
                this._super()
            }, buttonPressed: function (a) {
                if (a == kButtonPress.Left || a == kButtonPress.Right) {
                    var b = [kHelpForm01Name, kHelpForm02Name, kHelpForm03Name], c = b.length;
                    for (var d = 0; d < c; d++)
                        if (this.formName == b[d]) {
                            a == kButtonPress.Left ? this.userInterface.switchToPopupForm(d == 0 ? null : b[d - 1]) : this.userInterface.switchToPopupForm(d == c - 1 ? null : b[d + 1]);
                            return
                        }
                }
                this._super(a)
            }, onButtonReleaseBack: function (a, b, c) {
                var d = a;
                d.buttonPressed(kButtonPress.Left)
            }, onButtonReleaseNext: function (a, b, c) {
                var d = a;
                d.buttonPressed(kButtonPress.Right)
            }, onButtonReleaseX: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }
        }, "HelpForm");
        window.HelpForm = b, Preloader.initialize("userinterface/forms/helpform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        kNumAchievementsPerPage = 6;
        var a = Form.extend({
            init: function (a, b, c, d) {
                var e = this.milestone = { formName: d + "_milestone" }, f = Preloader.dependOn(this);
                this._super(a, b, c, d, []), this.mPage = 0, this.mNavUpButton = null, this.mNavDownButton = null, this.mAchievementTitle = new Array(kNumAchievementsPerPage), this.mAchievementDescription = new Array(kNumAchievementsPerPage), this.mAchievementIcons = new Array(kNumAchievementsPerPage), Preloader.dependOn(bindSelf(function () {
                    for (var a = 0; a < this.buttonList.length; ++a) {
                        var b = this.buttonList[a];
                        if (StringExt.hasPrefix(b.name, "AchievementTitle".toLowerCase())) {
                            var c = parseInt(b.name.substring(b.name.length - 3));
                            this.mAchievementTitle[c] = b
                        } else if (StringExt.hasPrefix(b.name, "AchievementDescription".toLowerCase())) {
                            var c = parseInt(b.name.substring(b.name.length - 3));
                            this.mAchievementDescription[c] = b
                        } else if (StringExt.hasPrefix(b.name, "AchievementIcon".toLowerCase())) {
                            var c = parseInt(b.name.substring(b.name.length - 3));
                            this.mAchievementIcons[c] = b
                        } else
                            b.name == "AchievementProgress".toLowerCase() ? this.mAchievementProgress = b : b.name == "NavUp".toLowerCase() ? this.mNavUpButton = b : b.name == "NavDown".toLowerCase() && (this.mNavDownButton = b)
                    }
                    f()
                }, this), e)
            }, destroy: function () {
                this._super()
            }, onButtonReleaseX: function (a, b, c) {
                a.userInterface.switchToPopupForm(kInGameOptionsFormName)
            }, onButtonPressNavUp: function (a, b, c) {
                var d = a;
                d.SetPage(d.GetPage() - 1), d.RefreshDisplay()
            }, onButtonPressNavDown: function (a, b, c) {
                var d = a;
                d.SetPage(d.GetPage() + 1), d.RefreshDisplay()
            }, onFormClose: function () {
                this._super()
            }, onFormOpen: function () {
                this._super(), this.SetPage(this.mPage), this.RefreshDisplay()
            }, RefreshDisplay: function () {
                var a = AchievementManager.GetSingleton(), b = this.mPage * kNumAchievementsPerPage;
                for (var c = 0; c <= b && c < kNumAchievements; c++)
                    AchievementManager.achievementIsInvalid(c) && b++;
                var d = 0;
                for (var e = 0; e < kNumAchievementsPerPage; e++) {
                    var c = b + e + d;
                    while (c < kNumAchievements && AchievementManager.achievementIsInvalid(c))
                        c++, d++;
                    if (c < kNumAchievements) {
                        var f, g, h;
                        f = sprintf("AchievementTitle%03d", c), g = sprintf("AchievementDescription%03d", c), h = sprintf("Achievements/achievement_icon_%03d.png", c);
                        var i = c, j = LocalizeString(f), k = null;
                        if (a.GetAchievementGoal(i) >= 0) {
                            var l = Math.min(a.GetAchievementProgress(i), a.GetAchievementGoal(i));
                            k = sprintf("%s [%d/%d]", j, l, a.GetAchievementGoal(i))
                        } else
                            k = sprintf("%s", j);
                        this.mAchievementTitle[e].setLabel(k), this.mAchievementDescription[e].setLabel(LocalizeString(g)), a.GetIsAchievementUnlocked(c) ? (this.mAchievementIcons[e].loadDisabledImage(h, this.mAchievementIcons[e].halfWidth, this.mAchievementIcons[e].halfHeight), this.mAchievementIcons[e].isDisabled = !0) : (this.mAchievementIcons[e].loadDisabledImage("locked_achievement_icon.png", this.mAchievementIcons[e].halfWidth, this.mAchievementIcons[e].halfHeight), this.mAchievementIcons[e].isDisabled = !0), this.mAchievementTitle[e].isHidden = !1, this.mAchievementDescription[e].isHidden = !1, this.mAchievementIcons[e].isHidden = !1
                    } else
                        this.mAchievementTitle[e].isHidden = !0, this.mAchievementDescription[e].isHidden = !0, this.mAchievementIcons[e].isHidden = !0
                }
                var m = a.GetNumAchievementsUnlocked() / (kNumAchievements - kNumInvalidAchievements) * 100;
                m = Math.min(m, 100);
                var n = sprintf("%d%%", m);
                this.mAchievementProgress.setLabel(n)
            }, GetPage: function () {
                return this.mPage
            }, SetPage: function (a) {
                var b = ceil((kNumAchievements - kNumInvalidAchievements) / kNumAchievementsPerPage) - 1;
                this.mPage = Math.max(a, 0), this.mPage = Math.min(this.mPage, b), this.mNavUpButton.isDisabled = this.mPage == 0, this.mNavDownButton.isDisabled = this.mPage == b
            }
        }, "AchievementsForm");
        window.AchievementsForm = a, Preloader.initialize("userinterface/forms/achievementsform.js")
    }), Preloader.include(["userinterface/form.js"], function () {
        var a = [], b = Form.extend({
            init: function (b, c, d, e) {
                this._super(b, c, d, e, a)
            }, onButtonReleaseYes: function (a, b, c) {
                a.userInterface.switchToPopupForm(IsPlatformIPad() ? kGameTypeFormName : IsPlatformMac() || IsPlatformAndroid() ? kMapConfigurationFormName : kMapSelectionFormName)
            }, onButtonReleaseNo: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }, onButtonReleaseX: function (a, b, c) {
                a.userInterface.switchToPopupForm(null)
            }
        }, "ConfirmNewGameForm");
        window.ConfirmNewGameForm = b, Preloader.initialize("userinterface/forms/confirmnewgameform.js")
    }), Preloader.include(["utilities/directionutilities.js", "game/entities/entityclass.js", "game/entities/projectileclass.js", "graphics/renderdevice.js", "graphics/sprite.js"], function () {
        var a = 74, b = 3, c = { Undefined: -1, Gatling: 0, Goo: 1, Missile: 2, Lightning: 3, Flame: 4, Mortar: 5, Laser: 6, Ice: 7, Plasma: 8, Lava: 9, Shotgun: 10, Poison: 11, kNumTowerClasses: 12 };
        kNumTowerClasses = c.kNumTowerClasses;
        var d = { LineOfSight: 0, AttackRange: 1 }, e = new Array(b), f = new Array(12), g = new Array(b), h = Class.extend({
            init: function () {
                this.launchProjectileParticleSystemExClass = null, this.launchProjectileParticleSystemEx2Class = null, this.spawnProjectileParticleSystemExClass = null, this.projectileClass = null, this.projectile2Class = null, this.particleSystem = null, this.fireTrigger = d.LineOfSight, this.lockAttackDirections = kDirection.None, this.projectileSpawnDelay = 0, this.fireDisplayTime = 0, this.orientationDelay = 0, this.reloadSpeed = 0, this.reloadSpeed2 = 0, this.attackRadius = 0, this.minAttackRadius = 0, this.fieldOfView = 360, this.turnSpeed = 0, this.splashDamageModifier = 0, this.splashDamageRange = 0, this.minDamage = 0, this.maxDamage = 0, this.minDamage2 = 0, this.maxDamage2 = 0, this.cost = 0, this.bDamageAllEnemiesInFieldOfView = !1
            }, destroy: function () {
            }
        }), i = EntityClass.extend({
            init: function (a, b, e, f) {
                this._super(a), this.disabledIconTextureID = 0, this.hasAttackAnimation = !1, this.towerClassID = c.Undefined, this.techLevels = null, this.mirrorHorizontal = !0, this.attackSoundEffect = null, this.filename = a.match(/\/(.*)\.\w+/)[1], this.dependencies = 1, this.isLoaded = !1, Preloader.loadText(a, function (c) {
                    var g = window.tower = window.jQuery(c);
                    this.techLevels = [];
                    var j = g;
                    this.towerClassID = i.getTowerClassIDFromTowerName(j[0].localName);
                    var k = j.attr("sprite") || null, l = j.attr("icon") || null, m = j.attr("disabledIcon") || null, n = new SoundEffectDefinition("attackSound", j), o = j.attr("mirrorHorizontal");
                    o != undefined && (this.mirrorHorizontal = o == "no"), this.attackSoundEffect = n.fileName != null ? new SoundEffect(n) : null;
                    for (var p = j.children().first(); p.length > 0; p = p.next())
                        if (p[0].localName == "techlevels")
                            for (var q = p.children().first(); q.length > 0; q = q.next()) {
                                var r = new h, s = q.attr("launchProjectileParticleSystemEx") || null, t = q.attr("launchProjectileParticleSystemEx2") || null, u = q.attr("spawnProjectileParticleSystemEx") || null, v = q.attr("projectile") || null, w = q.attr("projectile2") || null, x = q.attr("particleSystem") || null, y = !1, z = function (a) {
                                    r[a] = parseFloat(q.attr(a)) || r[a]
                                }, A = function (a) {
                                    a.forEach(z)
                                };
                                A(["fireDisplayTime", "orientationDelay", "minDamage", "maxDamage", "minDamage2", "maxDamage2", "turnSpeed", "reloadSpeed", "reloadSpeed2", "attackRadius", "fieldOfView", "minAttackRadius", "projectileSpawnDelay", "splashDamageModifier", "splashDamageRange"]), r.cost = parseInt(q.attr("cost"), 10), r.fireTrigger = q.attr("fireWhenEnemyEnters") == "attackRange" ? d.AttackRange : d.LineOfSight;
                                var B = q.attr("lockAttackDirections"
                                );
                                B == "laterally" ? r.lockAttackDirections = kDirection.Lateral : B == "diagonally" ? r.lockAttackDirections = kDirection.Diagonal : B == "laterallyAndDiagonally" ? r.lockAttackDirections = kDirection.Lateral | kDirection.Diagonal : r.lockAttackDirections = kDirection.None;
                                var C = q.attr("continuousDamage");
                                y = C == "yes";
                                var D = q.attr("damageAllEnemiesInFieldOfView");
                                r.bDamageAllEnemiesInFieldOfView = D == "yes", console.assert(v === null && w === null || !r.bDamageAllEnemiesInFieldOfView);
                                if (v !== null) {
                                    console.assert(!y);
                                    for (var E = 0; E < b.length; ++E) {
                                        var F = b[E];
                                        if (F.name == v) {
                                            r.projectileClass = F;
                                            break
                                        }
                                    }
                                    console.assert(r.projectileClass !== null || r.projectileClass != undefined, "Invalid projectile specified."), r.projectileClass.type == kProjectileType.Spray && (r.minDamage /= kTargetPhysicsFPS, r.maxDamage /= kTargetPhysicsFPS, r.minDamage2 /= kTargetPhysicsFPS, r.maxDamage2 /= kTargetPhysicsFPS)
                                } else
                                    y && (r.minDamage /= kTargetPhysicsFPS, r.maxDamage /= kTargetPhysicsFPS, r.minDamage2 /= kTargetPhysicsFPS, r.maxDamage2 /= kTargetPhysicsFPS);
                                if (w !== null || w != undefined) {
                                    for (E = 0; E < b.length; ++E) {
                                        var G = b[E];
                                        if (G.name == w) {
                                            r.projectile2Class = G;
                                            break
                                        }
                                    }
                                    console.assert(r.projectile2Class !== null || r.projectile2Class != undefined, "Invalid projectile specified.")
                                }
                                if (x !== null || x != undefined) {
                                    for (var H = 0; H < e.length; ++H) {
                                        var I = e[H];
                                        if (I.name == x) {
                                            r.particleSystem = I;
                                            break
                                        }
                                    }
                                    console.assert(r.particleSystem !== null || r.particleSystem != undefined, "Invalid particle system specified.")
                                }
                                this.InitializeParticleSystemExClass(s, f, function (a) {
                                    r.launchProjectileParticleSystemExClass = a
                                }), t != null && this.InitializeParticleSystemExClass(t, f, function (a) {
                                    r.launchProjectileParticleSystemEx2Class = a
                                }), this.InitializeParticleSystemExClass(u, f, function (a) {
                                    r.spawnProjectileParticleSystemExClass = a
                                }), r.attackRadius *= WORLD_UNITS_SCALAR, r.minAttackRadius *= WORLD_UNITS_SCALAR, r.splashDamageRange *= WORLD_UNITS_SCALAR, this.techLevels.push(r)
                            }
                    var J = this, K = function () {
                        J.dependencies--, J.dependencies <= 0 && (J.isLoaded = !0, J.onload && J.onload())
                    };
                    console.assert(k !== null, "Sprite filename undefined."), m === null && (console.warn("Disabled icon file undefined for tower '" + a + "'"), m = l), this.dependencies++, this.disabledIconTextureID = Sprite.initTextureFromFile("UserInterface", m, K), this.dependencies++, this.sprite = new Sprite("Towers", k), console.assert(l !== null, "Icon file undefined for tower '" + a + "'."), this.dependencies++, this.iconTextureID = Sprite.initTextureFromFile("UserInterface", l, K), this.sprite.onload = function () {
                        J.hasAttackAnimation = J.sprite.doesContainAnimation("attack_level1"), K()
                    }, K()
                }, this)
            }, destroy: function () {
                this._super(), Sprite.destroyTexture(this.iconTextureID), Sprite.destroyTexture(this.disabledIconTextureID)
            }, InitializeParticleSystemExClass: function (a, b, c) {
                if (a !== null || a != undefined) {
                    var d = null;
                    for (var e = 0; e < b.length; ++e) {
                        d = b[e];
                        if (d.GetFilename() == a)
                            break;
                        d = null
                    }
                    if (d === null) {
                        var f = null;
                        f = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", a, "fx"), f !== null && (d = new ParticleSystemExClass, d.Load(f), d.selfdestruct = !0)
                    }
                    d && (console.log("InitializeParticleSystemExClass", a, d), c(d))
                }
            }, getAttackAnimationName: function (a) {
                return this.hasAttackAnimation ? (k(), console.assert(a < b, "Invalid tech level index requested."), e[a]) : this.getIdleAnimationName(a)
            }, getDirectionalAttackAnimationName: function (a, c) {
                if (!this.hasAttackAnimation)
                    return this.getIdleAnimationName(a);
                k();
                var d;
                switch (c) {
                    case kDirection.North:
                        d = 0;
                        break;
                    case kDirection.East:
                        d = 1;
                        break;
                    case kDirection.South:
                        d = 2;
                        break;
                    case kDirection.West:
                        d = 3;
                        break;
                    default:
                        d = 0, console.warn("Unsupported direction requested.")
                }
                console.assert(a < b, "Invalid tech level index requested.");
                var e = 4;
                return f[a * e + d]
            }, getIdleAnimationName: function (a) {
                return k(), console.assert(a < b, "Invalid tech level index requested."), g[a]
            }, GetTowerClassID: function () {
                return this.towerClassID
            }, getFilename: function () {
                return this.filename
            }
        });
        i.getTowerClassIDFromTowerName = function (a) {
            var b = Enum.findValue(c, a.substring(0, a.search("tower")), !0, c.Undefined);
            return console.assert(b != c.Undefined, "The tower class must be defined."), b
        }, i.getTowerNameFromTowerClassID = function (a) {
            for (var b in c)
                if (c[b] == a)
                    return b + " Tower";
            return "Undefined Tower"
        };
        var j = !1, k = function () {
            if (!j) {
                j = !0;
                for (var a = 0; a < b; ++a) {
                    var c = ["attack_level1", "attack_level2", "attack_level3"];
                    e[a] = "", e[a] += c[a]
                }
                for (a = 0; a < 12; ++a) {
                    var d = ["attack_level1_north", "attack_level1_east", "attack_level1_south", "attack_level1_east", "attack_level2_north", "attack_level2_east", "attack_level2_south", "attack_level2_east", "attack_level3_north", "attack_level3_east", "attack_level3_south", "attack_level3_east"];
                    f[a] = "", f[a] += d[a]
                }
                for (a = 0; a < b; ++a) {
                    var h = ["idle_level1", "idle_level2", "idle_level3"];
                    g[a] = "", g[a] += h[a]
                }
            }
        };
        i.clearAnimationNames = function () {
        }, i.renderFieldOfView = function (a, b, c) {
        }, i.renderRangeIndicator = function (b, c, d, e, f, g, h) {
            if (g <= kPrecisionErrorCorrection)
                return;
            var i = RenderDevice.createVertexTexCoordArray(a), j = RenderDevice.createColorArray(a), k = RenderDevice.createVertexTexCoordArray(a), l = RenderDevice.createVertexTexCoordArray(a * 2), m = RenderDevice.createColorArray(a * 2, new Color(128, 255, 128, 255)), n = RenderDevice.createColorArray(a * 2, new Color(255, 92, 92, 255)), o = RenderDevice.createColorArray(a), p = RenderDevice.createVertexTexCoordArray(a), q = RenderDevice.createColorArray(a), r = RenderDevice.createVertexTexCoordArray(a), s = RenderDevice.createColorArray(a), t = 3 * WORLD_UNITS_SCALAR / 3 * eaglview.map.gameHudForm.zoomLevel, u = d > kPrecisionErrorCorrection ? a : a / 2, v = 0, w;
            for (w = 0; w < u; w++)
                d < kPrecisionErrorCorrection ? (v = 360 / (a / 2 - 2) * w, w == 0 ? (i[0] = k[0] = p[0] = r[0] = 0, i[1] = k[1] = p[1] = r[1] = 0) : (i[w * 5 + 0] = k[w * 5 + 0] = p[w * 5 + 0] = r[w * 5 + 0] = COS(DEGREES_TO_RADIANS(v)) * e, i[w * 5 + 1] = k[w * 5 + 1] = p[w * 5 + 1] = r[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * e)) : (v = 360 / (a / 2 - 2) * (w / 2), w % 2 == 0 ? (i[w * 5 + 0] = k[w * 5 + 0] = p[w * 5 + 0] = r[w * 5 + 0] = COS(DEGREES_TO_RADIANS(v)) * e, i[w * 5 + 1] = k[w * 5 + 1] = p[w * 5 + 1] = r[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * e) : (i[w * 5 + 0] = k[w * 5 + 0] = p[w * 5 + 0] = r[w * 5 + 0] = COS(DEGREES_TO_RADIANS(v)) * d, i[w * 5 + 1] = k[w * 5 + 1] = p[w * 5 + 1] = r[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * d)), i[w * 5 + 2] = k[w * 5 + 2] = p[w * 5 + 2] = r[w * 5 + 2] = 0, v = 360 / (a / 2 - 2) * w, k[w * 5] = COS(DEGREES_TO_RADIANS(v)) * e, k[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * e, l[w * 2 * 5 + 0] = k[w * 5 + 0] - t * COS(DEGREES_TO_RADIANS(v)), l[w * 2 * 5 + 1] = k[w * 5 + 1] - t * SIN(DEGREES_TO_RADIANS(v)), l[(w * 2 + 1) * 5 + 0] = k[w * 5 + 0] + t * COS(DEGREES_TO_RADIANS(v)), l[(w * 2 + 1) * 5 + 1] = k[w * 5 + 1] + t * SIN(DEGREES_TO_RADIANS(v)), j[w * 4 + 0] = 32, j[w * 4 + 1] = 160, j[w * 4 + 2] = 56, j[w * 4 + 3] = 255, o[w * 4 + 0] = 128, o[w * 4 + 1] = 255, o[w * 4 + 2] = 128, o[w * 4 + 3] = 255, q[w * 4 + 0] = 192, q[w * 4 + 1] = 0, q[w * 4 + 2] = 0, q[w * 4 + 3] = 255, s[w * 4 + 0] = 255, s[w * 4 + 1] = 92, s[w * 4 + 2] = 92, s[w * 4 + 3] = 255;
            for (w = 0; w < a; w++)
                h ? (q[w * 4 + 3] = 128 * g, s[w * 4 + 3] = 160 * g) : (j[w * 4 + 3] = 128 * g, o[w * 4 + 3] = 160 * g), m[w * 2 * 4 + 3] = 160 * g, m[(w * 2 + 1) * 4 + 3] = 160 * g, n[w * 2 * 4 + 3] = 160 * g, n[(w * 2 + 1) * 4 + 3] = 160 * g;
            var x = RenderDevice.getRenderDevice();
            x.useShaderProgram(kProgramID.Textureless), x.setBlendState(kBlendState.Alpha), h ? x.setVertexStreamDataArrays(p, q) : x.setVertexStreamDataArrays(i, j), x.pushMatrix(), x.translateModelViewMatrix(b, c), x.scaleModelViewMatrix(f), d < kPrecisionErrorCorrection ? x.drawPrimitiveType(kPrimitiveType.TriangleFan, 0, a / 2) : x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, a - 2), x.setLineWidth(3 * WORLD_UNITS_SCALAR);
            if (d > kPrecisionErrorCorrection) {
                var y = RenderDevice.createVertexTexCoordArray(a * 2), z = RenderDevice.createColorArray(a * 2);
                for (var A = 0; A < a * 2; A++)
                    if (!h) {
                        for (var B = 4; B >= 0; B--)
                            y[A * 5 + B] = l[A * 5 + B];
                        for (B = 3; B >= 0; B--)
                            z[A * 4 + B] = m[A * 4 + B]
                    } else {
                        for (var B = 4; B >= 0; B--)
                            y[A * 5 + B] = l[A * 5 + B];
                        for (B = 3; B >= 0; B--)
                            z[A * 4 + B] = n[A * 4 + B]
                    }
                x.setVertexStreamDataArrays(y, z), x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 2, a - 2), x.popMatrix(), x.pushMatrix(), x.translateModelViewMatrix(b, c), x.scaleModelViewMatrix(f);
                for (var A = 0; A < a * 2; A++)
                    v = 360 / (a / 2 - 2) * A, k[A * 5] = COS(DEGREES_TO_RADIANS(v)) * d, k[A * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * d, l[A * 2 * 5 + 0] = k[A * 5 + 0] - t * COS(DEGREES_TO_RADIANS(v)), l[A * 2 * 5 + 1] = k[A * 5 + 1] - t * SIN(DEGREES_TO_RADIANS(v)), l[(A * 2 + 1) * 5 + 0] = k[A * 5 + 0] + t * COS(DEGREES_TO_RADIANS(v)), l[(A * 2 + 1) * 5 + 1] = k[A * 5 + 1] + t * SIN(DEGREES_TO_RADIANS(v));
                x.setVertexStreamDataArrays(l), x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 2, a - 2), x.popMatrix()
            } else
                h ? x.setVertexStreamDataArrays(l, n) : x.setVertexStreamDataArrays(l, m), x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 2, a - 2), x.popMatrix();
            x.useShaderProgram(kProgramID.Default)
        }, i.renderRangeIndicatorWithTower = function (a, b, c) {
            var d = a.techLevel.minAttackRadius, e = a.techLevel.attackRadius, f = a.x, g = a.y;
            i.renderRangeIndicator(f, g, d, e, 1, b, c)
        }, this.kTowerClass = c, this.kTowerFireTrigger = d, this.TowerClass = i, Preloader.initialize("game/entities/towerclass.js")
    }), Preloader.include(["utilities/mathutilities.js", "utilities/seedrandom.js", "graphics/sprite.js", "game/entities/entity.js"], function () {
        var a = Entity.extend({
            init: function (a, b, c) {
                this._super(a, b), this.initCommon(a, c)
            }, destroy: function () {
                this.target = null, this.tower = null, this.particleSystemEx !== null && (this.particleSystemEx.destroy(), this.map.particleSystemExList.removeFast(this.particleSystemEx), this.particleSystemEx = null), this.beamBurstTextureID > 0 && Sprite.destroyTexture(this.beamBurstTextureID)
            }, initCommon: function (a, b) {
                this.projectileClass = a, this.targetUniqueID = 0, this.towerUniqueID = 0, this.animTimer = 0, this.timeToImpactTimer = 0, this.displayTimer = a.displayTime, this.impactTimer = a.impactDelay, this.animFrame = 0, this.tower = b, this.hasImpact = !1, this.isDead = !1, this.beamBurstTextureID = 0, this.isVisible = !1, this.target = null, this.particleTimer = 0, this.visibleTimer = 0, this.verticalOffset = 0, this.scale = 1, this.rotationSpeed = RANDOM_FLOAT_IN_RANGE(this.projectileClass.minRotationSpeed, this.projectileClass.maxRotationSpeed), this.particleSystemEx = null, this.minDamage = 0, this.maxDamage = 0, this.enemiesHit = [], this.targetLocation = new Vector2f, this.velocity = new Vector2f, this.tower !== null && (this.visibleTimer = b.techLevel.projectileSpawnDelay), this.projectileClass.launchSoundEffect !== null && this.projectileClass.launchSoundEffect.play(), this.projectileClass.type == kProjectileType.Bolt && (this.beamBurstTextureID = Sprite.initTextureFromFile("Projectiles", "projectile_lightning_burst.png")), this.projectileClass.type == kProjectileType.Plasma && this.projectileClass.particleSystemExClass !== null && (this.particleSystemEx = new ParticleSystemEx(this.projectileClass.particleSystemExClass, new Vector3f(this.x, this.y, 0)), this.map.particleSystemExList.push(this.particleSystemEx))
            }, applyDamageToAllEnemiesInLineOfSight: function () {
                if (this.tower === null)
                    return;
                for (var a = 0; a < this.tower.enemiesWithinAttackRange.length; ++a) {
                    var b = this.tower.enemiesWithinAttackRange[a], c = this.tower.findAngleToEnemy(b), d = c - this.tower.orientationAngle, e = fabsf(d) <= this.tower.techLevel.fieldOfView * .5 || fabsf(c - (360 + this.tower.orientationAngle)) <= this.tower.techLevel.fieldOfView * .5;
                    e && this.applyDamageToEnemy(b)
                }
            }, applyDamageToEnemy: function (a) {
                if (this.tower === null)
                    return;
                var b = RANDOM_FLOAT_IN_RANGE(this.minDamage, this.maxDamage), c = AchievementManager.GetSingleton(), d, e, f, g, h, i;
                if (this.tower.techLevel.splashDamageModifier > kPrecisionErrorCorrection)
                    for (g = 0, h = this.map.enemyList.length; g < h; ++g) {
                        var j = this.map.enemyList[g];
                        console.assert(j !== null, "Enemy not initialized.");
                        if (j != a) {
                            var k = SQRT(SQUARE(this.x - j.x) + SQUARE(this.y - j.y));
                            k <= this.tower.techLevel.splashDamageRange && (d = j.health > 0, d && c.IncrementNumImpactsByTowerClass(this.tower.towerClass.GetTowerClassID()), j.leader ? (j.leader.health -= b * this.tower.techLevel.splashDamageModifier, j.leader.setShowHealth(!0)) : (j.health -= b * this.tower.techLevel.splashDamageModifier, this.tower.towerClass.GetTowerClassID() != kTowerClass.Goo && j.setShowHealth(!0)), d && j.health <= 0 && (c.IncrementNumKillsByTowerClass(this.tower.towerClass.GetTowerClassID()), j.killerPlayerIndex = this.tower.playerIndex))
                        }
                    }
                this.hasImpact = !0;
                if (this.projectileClass.impactParticleSystemExClass) {
                    var l = new ParticleSystemEx(this.projectileClass.impactParticleSystemExClass, new Vector3f(this.x, this.y, 0));
                    this.map.particleSystemExList.push(l)
                }
                var m = !0;
                if (a !== null && this.projectileClass.effectType != kEffectType.None) {
                    var n = !1;
                    for (g = 0, h = a.enemyClass.immunityList.length; g < h; ++g) {
                        var o = a.enemyClass.immunityList[g];
                        if (o.effectType == this.projectileClass.effectType) {
                            n = !0;
                            if (o.effectType == kEffectType.Burn || o.effectType == kEffectType.Poison)
                                m = !1
                        }
                    }
                    if (!n) {
                        var p = null;
                        for (g = 0; g < a.effectList.length; ++g) {
                            e = a.effectList[g];
                            if (e.projectileClass.effectType == this.projectileClass.effectType) {
                                p = e;
                                break
                            }
                        }
                        if (p === null) {
                            p = new Effect, p.opacity = 0;
                            if (a.leader) {
                                a.leader.effectList.push(p), this.createEffect(p);
                                for (i = 0; i < a.leader.followedBy.length; i++)
                                    p = new Effect, p.opacity = 0, a.leader.followedBy[i].effectList.push(p), this.createEffect(p)
                            } else if (a.followedBy && a.followedBy.length > 0) {
                                a.effectList.push(p), this.createEffect(p);
                                for (i = 0; i < a.followedBy.length; i++)
                                    p = new Effect, p.opacity = 0, a.followedBy[i].effectList.push(p), this.createEffect(p)
                            } else
                                a.effectList.push(p), this.createEffect(p)
                        } else {
                            this.createEffect(p);
                            if (a.leader) {
                                for (g = 0; g < a.leader.effectList.length; ++g) {
                                    e = a.leader.effectList[g];
                                    if (e.projectileClass.effectType == this.projectileClass.effectType) {
                                        p = e;
                                        break
                                    }
                                }
                                this.createEffect(p);
                                for (i = 0; i < a.leader.followedBy.length; i++) {
                                    f = a.leader.followedBy[i];
                                    for (g = 0; g < f.effectList.length; ++g) {
                                        e = f.effectList[g];
                                        if (e.projectileClass.effectType == this.projectileClass.effectType) {
                                            p = e;
                                            break
                                        }
                                    }
                                    this.createEffect(p)
                                }
                            } else if (a.followedBy && a.followedBy.length > 0)
                                for (i = 0; i < a.followedBy.length; i++) {
                                    f = a.followedBy[i];
                                    for (g = 0; g < f.effectList.length; ++g) {
                                        e = f.effectList[g];
                                        if (e.projectileClass.effectType == this.projectileClass.effectType) {
                                            p = e;
                                            break
                                        }
                                    }
                                    this.createEffect(p)
                                }
                        }
                    }
                }
                a !== null && m && (d = a.health > 0, d && c.IncrementNumImpactsByTowerClass(this.tower.towerClass.GetTowerClassID()), a.leader ? a.leader.health -= b : (a.health -= b, this.tower.towerClass.GetTowerClassID() != kTowerClass.Goo && a.setShowHealth(!0)), a.health <= 0 && (a.SetDeathByDamageType(this.projectileClass.getDamageType()), a.killerPlayerIndex = this.tower.playerIndex), d && a !== null && a.health <= 0 && c.IncrementNumKillsByTowerClass(this.tower.towerClass.GetTowerClassID())), this.projectileClass.impactSoundEffect !== null && this.projectileClass.impactSoundEffect.play()
            }, createEffect: function (a) {
                a.timeRemaining = this.projectileClass.effectDuration, a.projectileClass = this.projectileClass, a.towerTechLevelIndex = this.tower.techLevelIndex;
                var b = Map.sProjectileClassList.indexOf(this.projectileClass);
                a.projectileClassIndex = b
            }, computeBeamDirection: function () {
                return this.targetLocation.x < 0 ? kDirection.West : this.targetLocation.y < 0 ? kDirection.North : this.targetLocation.x > 0 ? kDirection.East : this.targetLocation.y > 0 ? kDirection.South : kDirection.None
            }, computePlasmaDirection: function () {
                return this.velocity.x < 0 ? kDirection.West : this.velocity.y < 0 ? kDirection.North : this.velocity.x > 0 ? kDirection.East : this.velocity.y > 0 ? kDirection.South : kDirection.None
            }, findAngleToTarget: function (a) {
                if (a === null)
                    return 0;
                var b = new Vector2f(a.x - this.x, a.y - this.y);
                b.normalize();
                var c = b.computeAngle(Vector2f.orientationAxis());
                return b.isCounterClockwiseToVector(Vector2f.orientationAxis()) && (c = kTwoPI - c), c
            }, invalidateTarget: function () {
                this.target = null
            }, isEnemyInPathOfBeam: function (a, b) {
                if (this.tower === null)
                    return !1;
                var c, d;
                this.map.getTilePos(this.tower.tileGridIndex, function (a, b) {
                    c = a, d = b
                });
                var e, f;
                this.map.getTilePosFromWorldPosX(a.x, a.y, function (a, b) {
                    e = a, f = b
                });
                var g = !1;
                switch (b) {
                    case kDirection.North:
                        e == c && f < d && (g = !0);
                        break;
                    case kDirection.East:
                        e > c && f == d && (g = !0);
                        break;
                    case kDirection.South:
                        e == c && f > d && (g = !0);
                        break;
                    case kDirection.West:
                        e < c && f == d && (g = !0);
                        break;
                    default:
                }
                return g
            }, renderBeamProjectile: function (a) {
                var b = this.computeBeamDirection(), c = this.map.gameHudForm.camera, d = 4, e = RenderDevice.createVertexTexCoordArray(d), f = RenderDevice.createColorArray(d);
                for (var g = 0; g < d; g++)
                    f[g * 4 + 0] = 128, f[g * 4 + 1] = 128, f[g * 4 + 2] = 255, f[g * 4 + 3] = 192, e[g * 5 + 2] = 0;
                var h = this.projectileClass.displayTime / 4, i = 7.5 * WORLD_UNITS_SCALAR;
                this.displayTimer < h ? i *= this.displayTimer / h : this.displayTimer > this.projectileClass.displayTime - h && (i *= 1 - (this.displayTimer - (this.projectileClass.displayTime - h)) / h);
                var j = 0;
                switch (b) {
                    case kDirection.North:
                        e[0] = this.x - i, e[1] = this.y, e[5] = this.x + i, e[6] = this.y, e[10] = this.x - i, e[11] = c.top, e[15] = this.x + i, e[16] = c.top, j = this.y - c.top;
                        break;
                    case kDirection.East:
                        e[0] = this.x, e[1] = this.y - i, e[5] = this.x, e[6] = this.y + i, e[10] = c.right, e[11] = this.y - i, e[15] = c.right, e[16] = this.y + i, j = c.right - this.x;
                        break;
                    case kDirection.South:
                        e[0] = this.x + i, e[1] = this.y, e[5] = this.x - i, e[6] = this.y, e[10] = this.x + i, e[11] = c.bottom, e[15] = this.x - i, e[16] = c.bottom, j = c.bottom - this.y;
                        break;
                    case kDirection.West:
                        e[0] = this.x, e[1] = this.y + i, e[5] = this.x, e[6] = this.y - i, e[10] = c.left, e[11] = this.y + i, e[15] = c.left, e[16] = this.y - i, j = this.x - c.left;
                        break;
                    default:
                        console.warn("Beam direction not supported.")
                }
                var k = 32;
                e[3] = CORRECT_U(this.projectileClass.textureID, 0), e[4] = CORRECT_V(this.projectileClass.textureID, 0), e[8] = CORRECT_U(this.projectileClass.textureID, 0), e[9] = CORRECT_V(this.projectileClass.textureID, 1), e[13] = CORRECT_U(this.projectileClass.textureID, j / k), e[14] = CORRECT_V(this.projectileClass.textureID, 0), e[18] = CORRECT_U(this.projectileClass.textureID, j / k), e[19] = CORRECT_V(this.projectileClass.textureID, 1);
                var l = RenderDevice.getRenderDevice();
                l.setVertexStreamDataArrays(e, f), l.setTextureWithID(this.projectileClass.textureID), l.setBlendState(kBlendState.AlphaAdd);
                for (var m = 0; m < 2; m++)
                    l.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)
            }, renderBoltProjectile: function (a, b) {
                if (this.target === null)
                    return;
                var c = new Vector2f(this.target.x, this.target.y), d = new Vector2f(this.target.x - this.x, c.GetY() - this.y), e = d.normalize(), f = new Vector2f(-d.y, d.x), g = 8 * WORLD_UNITS_SCALAR, h = 5 * WORLD_UNITS_SCALAR, i = 4.5 * WORLD_UNITS_SCALAR, j = 70 * WORLD_UNITS_SCALAR, k = e / h * 2, l = RenderDevice.createVertexTexCoordArray(k * 2), m = RenderDevice.createVertexArray(k), n = RenderDevice.createColorArray(k, 255);
                a < kPrecisionErrorCorrection && Math.seedrandom(this.displayTimer * 1e4 + b);
                var o = 0, p, q = k / 2;
                for (p = 0; p < q; p++) {
                    if (p === 0)
                        l[(p * 2 + 0) * 5 + 0] = this.x, l[(p * 2 + 0) * 5 + 1] = this.y, l[(p * 2 + 1) * 5 + 0] = this.x, l[(p * 2 + 1) * 5 + 1] = this.y, m[p * 3 + 0] = this.x, m[p * 3 + 1] = this.y;
                    else if (p == q - 1)
                        l[(p * 2 + 0) * 5 + 0] = this.target.x, l[(p * 2 + 0) * 5 + 1] = c.GetY(), l[(p * 2 + 1) * 5 + 0] = this.target.x, l[(p * 2 + 1) * 5 + 1] = c.GetY(), m[p * 3 + 0] = this.target.x, m[p * 3 + 1] = c.GetY();
                    else {
                        var r = p / (q - 1), s = RANDOM_FLOAT_IN_RANGE(-i, i, Math.randomRC4), t = j * (1 - r);
                        o += s, o = MAX(MIN(o, t), -t);
                        var u = this.x + d.x * h * p + f.x * o, v = this.y + d.y * h * p + f.y * o, w = .25, x = p / (q - 1);
                        x < .15 ? x = SIN(x * kHalfPI * 1 / .15) : (x = 1 - (x - .15), x += w, x = Math.min(x, 1)), l[(p * 2 + 0) * 5 + 0] = u, l[(p * 2 + 0) * 5 + 1] = v, l[(p * 2 + 1) * 5 + 0] = l[(p * 2 + 0) * 5 + 0] + d.y * g * x, l[(p * 2 + 1) * 5 + 1] = l[(p * 2 + 0) * 5 + 1] - d.x * g * x, l[(p * 2 + 0) * 5 + 0] += -d.y * g * x, l[(p * 2 + 0) * 5 + 1] += d.x * g * x, m[p * 3 + 0] = u, m[p * 3 + 1] = v
                    }
                    l[(p * 2 + 0) * 5 + 2] = 0, l[(p * 2 + 1) * 5 + 2] = 0, m[p * 3 + 2] = 0, l[(p * 2 + 0) * 5 + 0 + 3] = CORRECT_U(this.projectileClass.textureID, 0), l[(p * 2 + 0) * 5 + 1 + 3] = CORRECT_V(this.projectileClass.textureID, -0.25 * p), l[(p * 2 + 1) * 5 + 0 + 3] = CORRECT_U(this.projectileClass.textureID, 1), l[(p * 2 + 1) * 5 + 1 + 3] = CORRECT_V(this.projectileClass.textureID, -0.25 * p), n[p * 4 + 0] = 130, n[p * 4 + 1] = 182, n[p * 4 + 2] = 191, n[p * 4 + 3] = 255
                }
                var y = RenderDevice.getRenderDevice();
                y.setVertexStreamDataArrays(l, n), y.setTextureWithID(this.projectileClass.textureID), y.setBlendState(kBlendState.AlphaAdd), y.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, k)
            }, renderBulletProjectile: function (a) {
                var b = new Color;
                b.r = 255, b.g = 255, b.b = 255, b.a = 255;
                if (!this.hasImpact) {
                    var c;
                    this.projectileClass.type != kProjectileType.Parabolic ? (c = this.findAngleToTarget(this.target), c += kPI) : c = this.timeToImpactTimer * this.rotationSpeed, this.animationController.render("idle", this.animFrame, b, this.x, this.y, c, this.scale, !0)
                } else {
                    this.deathOrienation == undefined && (this.deathOrienation = Math.random() * 360);
                    var d = this.deathOrientation;
                    d = 0, d = DEGREES_TO_RADIANS(d), this.animationController.render("death", this.animFrame, b, this.x, this.y, d, this.scale, !1, bindSelf(function (a) {
                        this.isDead = a
                    }, this), kMirrorType.None)
                }
            }, renderCloudProjectile: function (a) {
            }, renderSprayProjectile: function (a) {
            }, renderPlasmaProjectile: function (a) {
                var b = new Color(255, 255, 255, 255);
                console.assert((this.velocity.x === 0 || this.velocity.y === 0) && (this.velocity.x !== 0 || this.velocity.y !== 0));
                var c = this.velocity.y < 0 ? 0 : this.velocity.y > 0 ? M_PI : this.velocity.x > 0 ? M_PI / 2 : 3 * M_PI / 2;
                this.animationController.render("idle", this.animFrame, b, this.x, this.y, c, this.scale, !0)
            }, renderParabolicProjectile: function (a) {
                if (!this.hasImpact) {
                    var b = this.animFrame;
                    this.animFrame = 1;
                    var c = this.scale;
                    this.scale = 1 - this.projectileClass.parabolicScale + (1 - c), this.renderBulletProjectile(a), this.scale = c, this.animFrame = b
                }
                this.y += this.verticalOffset, this.renderBulletProjectile(a), this.y -= this.verticalOffset
            }, render: function (a) {
                if (this.isVisible)
                    switch (this.projectileClass.type) {
                        case kProjectileType.Beam:
                            this.renderBeamProjectile(a);
                            break;
                        case kProjectileType.Bolt:
                            this.renderBoltProjectile(a, 0);
                            break;
                        case kProjectileType.Bullet:
                            this.renderBulletProjectile(a);
                            break;
                        case kProjectileType.Cloud:
                            this.renderCloudProjectile(a);
                            break;
                        case kProjectileType.Parabolic:
                            this.renderParabolicProjectile(a);
                            break;
                        case kProjectileType.Spray:
                            this.renderSprayProjectile(a);
                            break;
                        case kProjectileType.Plasma:
                            this.renderPlasmaProjectile(a);
                            break;
                        default:
                            console.warn("Undefined projectile type.")
                    }
            }, restoreTarget: function (a) {
                if (this.targetUniqueID !== 0)
                    for (var b = 0, c = a.length; b < c; ++b) {
                        var d = a[b];
                        if (d.uniqueID == this.targetUniqueID) {
                            this.target = d;
                            break
                        }
                    }
            }, restoreTower: function (a) {
                if (this.towerUniqueID !== 0)
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        if (c.uniqueID == this.towerUniqueID) {
                            this.tower = c;
                            break
                        }
                    }
            }, serialize: function (a) {
                this._super(a);
                var b = {};
                a.serializeDouble(this, "displayTimer"), a.serializeDouble(this, "impactTimer"), a.serializeDouble(this, "animTimer"), a.serializeDouble(this, "particleTimer"), a.serializeInt(this, "animFrame"), SERIALIZE(a, this, "hasImpact"), SERIALIZE(a, this, "isDead"), a.serializeDouble(this, "timeToImpactTimer"), a.serializeDouble(this, "visibleTimer"), a.serializeDouble(this, "rotationSpeed"), SERIALIZE_OBJECT(a, this.targetLocation), SERIALIZE_OBJECT(a, this.velocity), b.targetUniqueID = this.target !== null ? this.target.uniqueID : 0, a.serializeInt(b, "targetUniqueID"), this.targetUniqueID = b.targetUniqueID, b.towerUniqueID = this.tower !== null ? this.tower.uniqueID : 0, a.serializeInt(b, "towerUniqueID"), this.towerUniqueID = b.towerUniqueID, a.serializeDouble(this, "minDamage"), a.serializeDouble(this, "maxDamage")
            }, updateBeamProjectile: function (a) {
                if (this.tower === null)
                    return !0;
                if (!this.hasImpact) {
                    var b = this.computeBeamDirection();
                    for (var c = 0, d = this.map.enemyList.length; c < d; c++) {
                        var e = this.map.enemyList[c];
                        this.isEnemyInPathOfBeam(e, b) && e.health > 0 && this.applyDamageToEnemy(e)
                    }
                }
                return this.displayTimer -= a, this.displayTimer <= 0 || this.tower === null || this.tower.removeFromList ? !0 : !1
            }, updateBoltProjectile: function (a) {
                return this.hasImpact || this.applyDamageToEnemy(this.target), this.displayTimer -= a, this.displayTimer <= 0 || this.target === null || this.tower === null || this.tower.removeFromList ? !0 : !1
            }, updateBulletProjectile: function (a) {
                if (this.tower === null)
                    return !0;
                if (this.target === null) {
                    this.hasImpact = !0;
                    if (this.projectileClass.impactParticleSystemExClass) {
                        var b = new ParticleSystemEx(this.projectileClass.impactParticleSystemExClass, new Vector3f(this.x, this.y, 0));
                        this.map.particleSystemExList.push(b)
                    }
                    this.animTimer += a;
                    while (this.animTimer > .1)
                        this.animTimer -= .1, this.animFrame++;
                    return this.isDead
                }
                var c = this.target.x - this.map.tileWidth * .3, d = this.target.x + this.map.tileWidth * .3, e = this.target.y - this.map.tileHeight * .3, f = this.target.y + this.map.tileHeight * .3;
                if (this.hasImpact || this.x > c && this.x < d && this.y > e && this.y < f) {
                    this.animTimer += a;
                    while (this.animTimer > .1)
                        this.animTimer -= .1, this.animFrame++;
                    return this.hasImpact || this.applyDamageToEnemy(this.target), this.isDead
                }
                var g = new Vector2f;
                g.x = this.target.x - this.x, g.y = this.target.y - this.y, g.normalize();
                if (IS_ZERO(this.projectileClass.acceleration))
                    console.assert(-1e4 < this.velocity.x && this.velocity.x < 1e4 && -1e4 < this.velocity.y && this.velocity.y < 1e4), this.velocity.x = g.x * this.projectileClass.maxSpeed * a, this.velocity.y = g.y * this.projectileClass.maxSpeed * a, console.assert(-1e4 < this.velocity.x && this.velocity.x < 1e4 && -1e4 < this.velocity.y && this.velocity.y < 1e4);
                else {
                    g.x *= a * this.projectileClass.maxSpeed, g.y *= a * this.projectileClass.maxSpeed, this.velocity.x *= a * this.projectileClass.acceleration, this.velocity.y *= a * this.projectileClass.acceleration, this.velocity.x += g.x, this.velocity.y += g.y;
                    var h = g.computeLength();
                    if (h > this.projectileClass.maxSpeed) {
                        var i = 1 / h;
                        this.velocity.x *= i, this.velocity.y *= i
                    }
                }
                return this.x += this.velocity.x, this.y += this.velocity.y, this.projectileClass.particleSystem !== null && (this.particleTimer -= a, this.particleTimer < 0 && (this.particleTimer = this.projectileClass.particleSystem.emissionInterval, this.projectileClass.particleSystem.spawnParticle(this.x, this.y))), this.isDead
            }, updateCloudProjectile: function (a) {
                if (this.tower === null)
                    return !0;
                this.displayTimer -= a;
                if (this.projectileClass.particleSystem !== null) {
                    this.particleTimer -= a;
                    var b, c;
                    this.tower.entityClass.sprite.getTagPointPosRelativeToAnchor("attack01", sprintf("idle_level%d", this.tower.techLevelIndex + 1), this.tower.discretizedAngle, function (a, d) {
                        b = a, c = d
                    }), this.tower.mirrorType == kMirrorType.Horizontal && (b = -b), b += this.tower.x, c += this.tower.y;
                    while (this.particleTimer < 0)
                        this.particleTimer += this.projectileClass.particleSystem.emissionInterval, this.projectileClass.particleSystem.spawnParticle(b, c, DEGREES_TO_RADIANS(this.tower.orientationAngle))
                }
                return this.impactTimer -= a, !this.hasImpact && this.impactTimer <= 0 && (this.tower.cacheAliveEnemiesWithinAttackRange(), this.applyDamageToAllEnemiesInLineOfSight(), this.hasImpact = !0), this.hasImpact && this.displayTimer <= kPrecisionErrorCorrection && (this.isDead = !0), this.isDead
            }, updateParabolicProjectile: function (a) {
                if (this.tower === null)
                    return !0;
                var b = new Vector2f(this.targetLocation.x - this.tower.x, this.targetLocation.y - this.tower.y), c = MIN(this.timeToImpactTimer, this.projectileClass.timeToImpact) / this.projectileClass.timeToImpact;
                b.scaleBy(c);
                if (this.timeToImpactTimer >= this.projectileClass.timeToImpact) {
                    this.animTimer += a;
                    while (this.animTimer > .1)
                        this.animTimer -= .1, this.animFrame++;
                    this.scale = 1, this.hasImpact || (this.applyDamageToEnemy(this.target), this.projectileClass.particleSystem !== null && this.projectileClass.particleSystem.spawnParticle(this.x, this.y))
                } else {
                    this.timeToImpactTimer += a;
                    var d = SQUARE(c - .5), e = SQUARE(-0.5);
                    this.scale = 1 - this.projectileClass.parabolicScale + (.5 - SQUARE(c - .5) * 2) * this.projectileClass.parabolicScale * 2, this.verticalOffset = (d - e) * this.projectileClass.parabolicHeight, this.x = this.tower.x + b.x, this.y = this.tower.y + b.y
                }
                return this.isDead
            }, updateSprayProjectile: function (a) {
                if (this.tower === null)
                    return !0;
                this.displayTimer -= a;
                if ((this.tower === null || this.tower.removeFromList || this.tower.techLevel.fireTrigger == kTowerFireTrigger.AttackRange && this.tower.enemiesWithinAttackRange.length === 0 || this.tower.techLevel.fireTrigger == kTowerFireTrigger.LineOfSight && this.target === null) && this.displayTimer <= kPrecisionErrorCorrection)
                    return this.isDead = !0, this.isDead;
                if (this.projectileClass.particleSystem !== null) {
                    this.particleTimer -= a;
                    var b, c;
                    this.tower.entityClass.sprite.getTagPointPosRelativeToAnchor("attack01", sprintf("idle_level%d", this.tower.techLevelIndex + 1), this.tower.discretizedAngle, function (a, d) {
                        b = a, c = d
                    }), this.tower.mirrorType == kMirrorType.Horizontal && (b = -b), b += this.tower.x, c += this.tower.y;
                    while (this.particleTimer < 0)
                        this.particleTimer += this.projectileClass.particleSystem.emissionInterval, this.projectileClass.particleSystem.spawnParticle(b, c, DEGREES_TO_RADIANS(this.tower.orientationAngle + 180))
                }
                return this.applyDamageToAllEnemiesInLineOfSight(), this.isDead
            }, updatePlasmaProjectile: function (a) {
                this.velocity.x = this.targetLocation.x, this.velocity.y = this.targetLocation.y, this.velocity.normalize(), this.velocity.x *= this.projectileClass.maxSpeed, this.velocity.y *= this.projectileClass.maxSpeed;
                var c, d;
                this.map.getTilePosFromWorldPosX(this.x, this.y, function (a, b) {
                    c = a, d = b
                }), console.assert((this.velocity.x === 0 || this.velocity.y === 0) && (this.velocity.x !== 0 || this.velocity.y !== 0));
                var e = this.velocity.x !== 0, f, g, h = new Vector2f, i = new Vector2f;
                for (var j = 0; j < this.map.enemyList.length; j++) {
                    var k = this.map.enemyList[j];
                    if (k.health <= 0)
                        continue;
                    if (this.isEnemyInPathOfBeam(k, this.computePlasmaDirection())) {
                        k.getAxisAlignedBoundingBox(h, i), this.map.getTilePosFromWorldPosX(k.x, k.y, function (a, b) {
                            f = a, g = b
                        });
                        var l = 18;
                        (e && g == d || !e && f == c) && b(h, i, this.x, this.y) <= l && this.enemiesHit.indexOf(k.uniqueID) == -1 && (this.applyDamageToEnemy(k), this.enemiesHit.push(k.uniqueID))
                    }
                }
                if (c >= 0 && c < this.map.tilesAcross && d >= 0 && d < this.map.tilesDown) {
                    var m = this.map.getTileGridIndex(c, d), n = this.map.getTowerAtTileGridIndex(m);
                    if (n !== null && n != this.tower && n.towerClass.GetTowerClassID() == kTowerClass.Plasma) {
                        n.reloadTimer2 <= kPrecisionErrorCorrection && (n.launchProjectile(!0), n.SpawnLaunchProjectileParticleSystem2("attack01"));
                        if (this.projectileClass.impactParticleSystemExClass) {
                            var o = new ParticleSystemEx(this.projectileClass.impactParticleSystemExClass, new Vector3f(this.x, this.y, 0));
                            this.map.particleSystemExList.push(o)
                        }
                        return !0
                    }
                }
                return this.x += this.velocity.x * a, this.y += this.velocity.y * a, this.particleSystemEx.SetPosition(this.x, this.y, 0), c >= 0 && c < this.map.tilesAcross && d >= 0 && d < this.map.tilesDown ? !1 : !0
            }, update: function (a) {
                var b = !1;
                if (this.visibleTimer > kPrecisionErrorCorrection)
                    this.visibleTimer -= a, this.projectileClass.type != kProjectileType.Parabolic && this.target === null && (b = !0);
                else {
                    this.isVisible = !0;
                    switch (this.projectileClass.type) {
                        case kProjectileType.Beam:
                            b = this.updateBeamProjectile(a);
                            break;
                        case kProjectileType.Bolt:
                            b = this.updateBoltProjectile(a);
                            break;
                        case kProjectileType.Bullet:
                            b = this.updateBulletProjectile(a);
                            break;
                        case kProjectileType.Cloud:
                            b = this.updateCloudProjectile(a);
                            break;
                        case kProjectileType.Parabolic:
                            b = this.updateParabolicProjectile(a);
                            break;
                        case kProjectileType.Spray:
                            b = this.updateSprayProjectile(a);
                            break;
                        case kProjectileType.Plasma:
                            b = this.updatePlasmaProjectile(a);
                            break;
                        default:
                            console.warn("Undefined projectile type.")
                    }
                }
                return b && this.projectileClass.launchSoundEffect !== null && this.projectileClass.launchSoundEffect.stopWithDecay(), b
            }
        }, "Projectile");
        a.createAtEnemy = function (b, c, d, e) {
            var f = new a(b, c, d);
            return f.target = e, f
        }, a.createAtLocation = function (b, c, d, e) {
            var f = new a(b, c, d);
            return f.targetLocation = e, f
        };
        var b = function (a, b, c, d) {
            var e = new Vector2f((a.x + b.x) / 2, (a.y + b.y) / 2), f = new Vector2f((b.x - a.x) / 2, (b.y - a.y) / 2), g = new Vector2f(c - e.x, d - e.y), h = 0, i;
            return g.x < -f.x ? (i = g.x + f.x, h += i) : g.x > f.x && (i = g.x - f.x, h += i), g.y < -f.y ? (i = g.y + f.y, h += i) : g.y > f.y && (i = g.y - f.y, h += i), h
        };
        this.Projectile = a, Preloader.initialize("game/entities/projectile.js")
    }), Preloader.loadManyScripts(["graphics/renderdevice.js"], function () {
        var a = 2e3, b = function () {
            this.x = 0, this.y = 0, this.velocityX = 0, this.velocityY = 0, this.scale = 0, this.opacity = 0, this.angle = 0, this.angularVelocity = 0, this.age = 0, this.lifetime = 0
        }, c = function (a, b) {
            return function (c) {
                shader = gl.createShader(b), gl.shaderSource(shader, c), gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
                    return alert(gl.getShaderInfoLog(shader)), null;
                gl.attachShader(a, shader), a.attachedShaders++, a.attachedShaders == 2 && (gl.linkProgram(a), gl.getProgramParameter(a, gl.LINK_STATUS) || alert("Could not initialise shaders"), gl.useProgram(a), a.vertexPositionAttribute = gl.getAttribLocation(a, "aVertexPosition"), gl.enableVertexAttribArray(a.vertexPositionAttribute), a.textureCoordAttribute = gl.getAttribLocation(a, "aTextureCoord"), gl.enableVertexAttribArray(a.textureCoordAttribute), a.colorAttribute = gl.getAttribLocation(a, "aColor"), gl.enableVertexAttribArray(a.colorAttribute), a.samplerUniform = gl.getUniformLocation(a, "uSampler"), a.pMatrixUniform = gl.getUniformLocation(a, "uPMatrix"), a.mvMatrixUniform = gl.getUniformLocation(a, "uMVMatrix"), a.loaded = !0, console.log("ParticleProgram (shader program) loaded"))
            }
        };
        ParticleSystem = function (b) {
            this.floatArray = RenderDevice.createVertexTexCoordArray(6 * a), this.colorByteArray = RenderDevice.createColorArray(6 * a), this.floatBuffer = gl.createBuffer(), this.colorBuffer = gl.createBuffer(), this.particles = [], this.count = 0, this.blend = RenderDevice.BlendState.Alpha, this.color = { r: 255, g: 255, b: 255, a: 255 }, this.lifetime = 0, this.lifetimeVariance = 0, this.minAngularVelocity = 0, this.maxAngularVelocity = 0, this.spread = 0, this.velocity = 0, this.growthRate = 0, this.scale = 1, this.emissionInterval = 0, this.textureID = 0, this.alphaAdditiveTextureID = 0, this.minInitialOrientationAngle = 0, this.maxInitialOrientationAngle = 360, this.dependencies = 1, this.isLoaded = !1;
            var c = function (a) {
                return function () {
                    a.dependencies--, a.dependencies <= 0 && (a.isLoaded = !0, a.onload && a.onload.call(this))
                }
            }(this), d = this;
            Preloader.loadText(b, function (a) {
                this.xml = window.jQuery(a), this.name = this.xml[0].localName, this.xml = this.xml;
                var b = this, d = function (a, c) {
                    b[a] = c(b.xml.attr(a)) || b[a]
                }, e = function (a, c, d) {
                    b[c] = d(b.xml.attr(a)) || b[c]
                };
                d("lifetime", parseFloat), d("lifetimeVariance", parseFloat), d("spread", parseFloat), d("velocity", parseFloat), d("minAngularVelocity", parseFloat), d("maxAngularVelocity", parseFloat), d("growthRate", parseFloat), d("scale", parseFloat), e("minInitialOrientation", "minInitialOrientationAngle", parseFloat), e("maxInitialOrientation", "maxInitialOrientationAngle", parseFloat), e("emissionRate", "emissionInterval", parseFloat), e("blendingMode", "blendState", function (a) {
                    return Enum.findValue(kBlendState, a, !0, kBlendState.Alpha)
                }), this.scale *= WORLD_UNITS_SCALAR, this.velocity *= WORLD_UNITS_SCALAR
                    , this.minAngularVelocity *= kTwoPI, this.maxAngularVelocity *= kTwoPI, this.emissionInterval = this.emissionInterval > 0 ? 1 / this.emissionInterval : 0, console.assert(this.minInitialOrientationAngle >= -360 && this.minInitialOrientationAngle <= 360, "Invalid orientation specified."), console.assert(this.maxInitialOrientationAngle >= -360 && this.maxInitialOrientationAngle <= 360, "Invalid orientation specified."), this.spread = DEGREES_TO_RADIANS(this.spread * .5), this.minInitialOrientationAngle = DEGREES_TO_RADIANS(this.minInitialOrientationAngle), this.maxInitialOrientationAngle = DEGREES_TO_RADIANS(this.maxInitialOrientationAngle);
                if (this.xml.attr(ParticleSystem.ATTR_IMAGE)) {
                    this.dependencies++;
                    var f = this.image = Sprite.initTextureFromFile("Particles", this.xml.attr(ParticleSystem.ATTR_IMAGE), c)
                }
                if (this.xml.attr(ParticleSystem.ATTR_ALPHA_ADD_IMAGE)) {
                    this.dependencies++;
                    var g = this.alphaAdditiveImage = Sprite.initTextureFromFile("Particles", this.xml.attr(ParticleSystem.ATTR_ALPHA_ADD_IMAGE), c)
                }
                c()
            }, this)
        }, ParticleSystem.ATTR_IMAGE = "image", ParticleSystem.ATTR_ALPHA_ADD_IMAGE = "alphaAdditiveImage", ParticleSystem.prototype.clearAllParticles = function () {
            this.count = 0
        }, ParticleSystem.prototype.render = function () {
            if (this.count == 0)
                return;
            if (this.dependencies != 0)
                return;
            var a = [0, 0, 0, 0], b = [0, 0, 0, 0], c;
            for (c = this.count - 1; c >= 0; c--) {
                var d = this.particles[c], e = d.scale;
                this.useFullScale && (e = this.scale), a[0] = -0.5 * e, b[0] = -0.5 * e, a[1] = .5 * e, b[2] = .5 * e, a[2] = a[0], a[3] = a[1], b[1] = b[0], b[3] = b[2];
                var f = Math.cos(d.angle), g = Math.sin(d.angle), h;
                for (h = 0; h < 4; h++) {
                    var i = a[h];
                    a[h] = f * a[h] - g * b[h], b[h] = g * i + f * b[h], a[h] += d.x, b[h] += d.y
                }
                var j = this.color.a * d.opacity;
                this.floatArray[c * 5 * 6 + 0] = a[0], this.floatArray[c * 5 * 6 + 0 + 1] = b[0], this.colorByteArray[c * 4 * 6 + 0 + 3] = j, this.floatArray[c * 5 * 6 + 5] = a[1], this.floatArray[c * 5 * 6 + 5 + 1] = b[1], this.colorByteArray[c * 4 * 6 + 4 + 3] = j, this.floatArray[c * 5 * 6 + 10] = a[2], this.floatArray[c * 5 * 6 + 10 + 1] = b[2], this.colorByteArray[c * 4 * 6 + 8 + 3] = j, this.floatArray[c * 5 * 6 + 15] = a[1], this.floatArray[c * 5 * 6 + 15 + 1] = b[1], this.colorByteArray[c * 4 * 6 + 12 + 3] = j, this.floatArray[c * 5 * 6 + 20] = a[3], this.floatArray[c * 5 * 6 + 20 + 1] = b[3], this.colorByteArray[c * 4 * 6 + 16 + 3] = j, this.floatArray[c * 5 * 6 + 25] = a[2], this.floatArray[c * 5 * 6 + 25 + 1] = b[2], this.colorByteArray[c * 4 * 6 + 20 + 3] = j
            }
            var k = RenderDevice.getRenderDevice();
            k.setVertexStreamDataArrays(this.floatArray, this.colorByteArray), k.setTextureFilteringMode(kTextureFilterType.Linear), k.setTextureWithID(this.image), k.setBlendState(this.blendState), k.drawPrimitiveType(kPrimitiveType.Triangles, 0, this.count * 6), this.alphaAdditiveImage && (k.setTextureWithID(this.alphaAdditiveImage), k.setBlendState(kBlendState.AlphaAdd), k.drawPrimitiveType(kPrimitiveType.Triangles, 0, this.count * 6))
        }, ParticleSystem.prototype.update = function (a) {
            var b;
            for (b = this.count - 1; b >= 0; b--) {
                var c = this.particles[b];
                c.x += c.velocityX * a, c.y += c.velocityY * a, c.age += a, c.angle += c.angularVelocity * a, c.scale = Math.log10(c.age * this.growthRate + 1) * this.scale, c.age < c.lifetime * .5 ? c.opacity = Math.min(c.age / (c.lifetime * .05), 1) : c.opacity = 2 - c.age / (c.lifetime * .5);
                if (c.age > c.lifetime) {
                    if (this.count > 1) {
                        var d = this.particles[this.count - 1];
                        if (d != c) {
                            var e = this.particles[b];
                            this.particles[b] = d, this.particles[this.count - 1] = e
                        }
                    }
                    this.count--
                }
            }
        }, ParticleSystem.prototype.spawnParticle = function (c, d, e) {
            if (e == undefined) {
                if (this.count + 1 >= a)
                    return null;
                if (this.particles.length == this.count) {
                    this.particles[this.count] = new b;
                    var f = this.count;
                    for (var g = 0; g < 6; g++)
                        this.floatArray[f * 5 * 6 + g * 5 + 2] = 0, this.colorByteArray[f * 4 * 6 + g * 4 + 0] = 255, this.colorByteArray[f * 4 * 6 + g * 4 + 1] = 255, this.colorByteArray[f * 4 * 6 + g * 4 + 2] = 255;
                    this.floatArray[f * 5 * 6 + 0 + 3] = 0, this.floatArray[f * 5 * 6 + 0 + 4] = 1, this.floatArray[f * 5 * 6 + 5 + 3] = 1, this.floatArray[f * 5 * 6 + 5 + 4] = 1, this.floatArray[f * 5 * 6 + 10 + 3] = 0, this.floatArray[f * 5 * 6 + 10 + 4] = 0, this.floatArray[f * 5 * 6 + 15 + 3] = 1, this.floatArray[f * 5 * 6 + 15 + 4] = 1, this.floatArray[f * 5 * 6 + 20 + 3] = 1, this.floatArray[f * 5 * 6 + 20 + 4] = 0, this.floatArray[f * 5 * 6 + 25 + 3] = 0, this.floatArray[f * 5 * 6 + 25 + 4] = 0
                }
                var h = this.particles[this.count];
                return h.x = c, h.y = d, h.velocityX = this.velocity, h.velocityY = this.velocity, h.scale = 0, h.opacity = 0, h.angle = Random.inRange(Math.min(this.minInitialOrientationAngle, this.maxInitialOrientationAngle), Math.max(this.minInitialOrientationAngle, this.maxInitialOrientationAngle)), h.angularVelocity = Random.inRange(Math.min(this.minAngularVelocity, this.maxAngularVelocity), Math.max(this.minAngularVelocity, this.maxAngularVelocity)), h.age = 0, h.lifetime = this.lifetime + Random.inRange(-this.lifetimeVariance * .5, this.lifetimeVariance), this.count++, h
            }
            var h = this.spawnParticle(c, d);
            if (h === null)
                return h;
            var i = Random.inRange(-this.spread, this.spread), j = 0, k = this.velocity, l = -Math.sin(e), m = -Math.cos(e), n = j;
            return j = j * m - k * l, k = k * m + n * l, h.velocityX = j, h.velocityY = k, h
        }, Preloader.initialize("graphics/particlesystem.js")
    }), Preloader.include(["utilities/directionutilities.js", "game/entities/entityclass.js", "game/entities/projectileclass.js", "graphics/renderdevice.js", "graphics/sprite.js"], function () {
        var a = 74, b = 3, c = { Undefined: -1, Gatling: 0, Goo: 1, Missile: 2, Lightning: 3, Flame: 4, Mortar: 5, Laser: 6, Ice: 7, Plasma: 8, Lava: 9, Shotgun: 10, Poison: 11, kNumTowerClasses: 12 };
        kNumTowerClasses = c.kNumTowerClasses;
        var d = { LineOfSight: 0, AttackRange: 1 }, e = new Array(b), f = new Array(12), g = new Array(b), h = Class.extend({
            init: function () {
                this.launchProjectileParticleSystemExClass = null, this.launchProjectileParticleSystemEx2Class = null, this.spawnProjectileParticleSystemExClass = null, this.projectileClass = null, this.projectile2Class = null, this.particleSystem = null, this.fireTrigger = d.LineOfSight, this.lockAttackDirections = kDirection.None, this.projectileSpawnDelay = 0, this.fireDisplayTime = 0, this.orientationDelay = 0, this.reloadSpeed = 0, this.reloadSpeed2 = 0, this.attackRadius = 0, this.minAttackRadius = 0, this.fieldOfView = 360, this.turnSpeed = 0, this.splashDamageModifier = 0, this.splashDamageRange = 0, this.minDamage = 0, this.maxDamage = 0, this.minDamage2 = 0, this.maxDamage2 = 0, this.cost = 0, this.bDamageAllEnemiesInFieldOfView = !1
            }, destroy: function () {
            }
        }), i = EntityClass.extend({
            init: function (a, b, e, f) {
                this._super(a), this.disabledIconTextureID = 0, this.hasAttackAnimation = !1, this.towerClassID = c.Undefined, this.techLevels = null, this.mirrorHorizontal = !0, this.attackSoundEffect = null, this.filename = a.match(/\/(.*)\.\w+/)[1], this.dependencies = 1, this.isLoaded = !1, Preloader.loadText(a, function (c) {
                    var g = window.tower = window.jQuery(c);
                    this.techLevels = [];
                    var j = g;
                    this.towerClassID = i.getTowerClassIDFromTowerName(j[0].localName);
                    var k = j.attr("sprite") || null, l = j.attr("icon") || null, m = j.attr("disabledIcon") || null, n = new SoundEffectDefinition("attackSound", j), o = j.attr("mirrorHorizontal");
                    o != undefined && (this.mirrorHorizontal = o == "no"), this.attackSoundEffect = n.fileName != null ? new SoundEffect(n) : null;
                    for (var p = j.children().first(); p.length > 0; p = p.next())
                        if (p[0].localName == "techlevels")
                            for (var q = p.children().first(); q.length > 0; q = q.next()) {
                                var r = new h, s = q.attr("launchProjectileParticleSystemEx") || null, t = q.attr("launchProjectileParticleSystemEx2") || null, u = q.attr("spawnProjectileParticleSystemEx") || null, v = q.attr("projectile") || null, w = q.attr("projectile2") || null, x = q.attr("particleSystem") || null, y = !1, z = function (a) {
                                    r[a] = parseFloat(q.attr(a)) || r[a]
                                }, A = function (a) {
                                    a.forEach(z)
                                };
                                A(["fireDisplayTime", "orientationDelay", "minDamage", "maxDamage", "minDamage2", "maxDamage2", "turnSpeed", "reloadSpeed", "reloadSpeed2", "attackRadius", "fieldOfView", "minAttackRadius", "projectileSpawnDelay", "splashDamageModifier", "splashDamageRange"]), r.cost = parseInt(q.attr("cost"), 10), r.fireTrigger = q.attr("fireWhenEnemyEnters") == "attackRange" ? d.AttackRange : d.LineOfSight;
                                var B = q.attr("lockAttackDirections");
                                B == "laterally" ? r.lockAttackDirections = kDirection.Lateral : B == "diagonally" ? r.lockAttackDirections = kDirection.Diagonal : B == "laterallyAndDiagonally" ? r.lockAttackDirections = kDirection.Lateral | kDirection.Diagonal : r.lockAttackDirections = kDirection.None;
                                var C = q.attr("continuousDamage");
                                y = C == "yes";
                                var D = q.attr("damageAllEnemiesInFieldOfView");
                                r.bDamageAllEnemiesInFieldOfView = D == "yes", console.assert(v === null && w === null || !r.bDamageAllEnemiesInFieldOfView);
                                if (v !== null) {
                                    console.assert(!y);
                                    for (var E = 0; E < b.length; ++E) {
                                        var F = b[E];
                                        if (F.name == v) {
                                            r.projectileClass = F;
                                            break
                                        }
                                    }
                                    console.assert(r.projectileClass !== null || r.projectileClass != undefined, "Invalid projectile specified."), r.projectileClass.type == kProjectileType.Spray && (r.minDamage /= kTargetPhysicsFPS, r.maxDamage /= kTargetPhysicsFPS, r.minDamage2 /= kTargetPhysicsFPS, r.maxDamage2 /= kTargetPhysicsFPS)
                                } else
                                    y && (r.minDamage /= kTargetPhysicsFPS, r.maxDamage /= kTargetPhysicsFPS, r.minDamage2 /= kTargetPhysicsFPS, r.maxDamage2 /= kTargetPhysicsFPS);
                                if (w !== null || w != undefined) {
                                    for (E = 0; E < b.length; ++E) {
                                        var G = b[E];
                                        if (G.name == w) {
                                            r.projectile2Class = G;
                                            break
                                        }
                                    }
                                    console.assert(r.projectile2Class !== null || r.projectile2Class != undefined, "Invalid projectile specified.")
                                }
                                if (x !== null || x != undefined) {
                                    for (var H = 0; H < e.length; ++H) {
                                        var I = e[H];
                                        if (I.name == x) {
                                            r.particleSystem = I;
                                            break
                                        }
                                    }
                                    console.assert(r.particleSystem !== null || r.particleSystem != undefined, "Invalid particle system specified.")
                                }
                                this.InitializeParticleSystemExClass(s, f, function (a) {
                                    r.launchProjectileParticleSystemExClass = a
                                }), t != null && this.InitializeParticleSystemExClass(t, f, function (a) {
                                    r.launchProjectileParticleSystemEx2Class = a
                                }), this.InitializeParticleSystemExClass(u, f, function (a) {
                                    r.spawnProjectileParticleSystemExClass = a
                                }), r.attackRadius *= WORLD_UNITS_SCALAR, r.minAttackRadius *= WORLD_UNITS_SCALAR, r.splashDamageRange *= WORLD_UNITS_SCALAR, this.techLevels.push(r)
                            }
                    var J = this, K = function () {
                        J.dependencies--, J.dependencies <= 0 && (J.isLoaded = !0, J.onload && J.onload())
                    };
                    console.assert(k !== null, "Sprite filename undefined."), m === null && (console.warn("Disabled icon file undefined for tower '" + a + "'"), m = l), this.dependencies++, this.disabledIconTextureID = Sprite.initTextureFromFile("UserInterface", m, K), this.dependencies++, this.sprite = new Sprite("Towers", k), console.assert(l !== null, "Icon file undefined for tower '" + a + "'."), this.dependencies++, this.iconTextureID = Sprite.initTextureFromFile("UserInterface", l, K), this.sprite.onload = function () {
                        J.hasAttackAnimation = J.sprite.doesContainAnimation("attack_level1"), K()
                    }, K()
                }, this)
            }, destroy: function () {
                this._super(), Sprite.destroyTexture(this.iconTextureID), Sprite.destroyTexture(this.disabledIconTextureID)
            }, InitializeParticleSystemExClass: function (a, b, c) {
                if (a !== null || a != undefined) {
                    var d = null;
                    for (var e = 0; e < b.length; ++e) {
                        d = b[e];
                        if (d.GetFilename() == a)
                            break;
                        d = null
                    }
                    if (d === null) {
                        var f = null;
                        f = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", a, "fx"), f !== null && (d = new ParticleSystemExClass, d.Load(f), d.selfdestruct = !0)
                    }
                    d && (console.log("InitializeParticleSystemExClass", a, d), c(d))
                }
            }, getAttackAnimationName: function (a) {
                return this.hasAttackAnimation ? (k(), console.assert(a < b, "Invalid tech level index requested."), e[a]) : this.getIdleAnimationName(a)
            }, getDirectionalAttackAnimationName: function (a, c) {
                if (!this.hasAttackAnimation)
                    return this.getIdleAnimationName(a);
                k();
                var d;
                switch (c) {
                    case kDirection.North:
                        d = 0;
                        break;
                    case kDirection.East:
                        d = 1;
                        break;
                    case kDirection.South:
                        d = 2;
                        break;
                    case kDirection.West:
                        d = 3;
                        break;
                    default:
                        d = 0, console.warn("Unsupported direction requested.")
                }
                console.assert(a < b, "Invalid tech level index requested.");
                var e = 4;
                return f[a * e + d]
            }, getIdleAnimationName: function (a) {
                return k(), console.assert(a < b, "Invalid tech level index requested."), g[a]
            }, GetTowerClassID: function () {
                return this.towerClassID
            }, getFilename: function () {
                return this.filename
            }
        });
        i.getTowerClassIDFromTowerName = function (a) {
            var b = Enum.findValue(c, a.substring(0, a.search("tower")), !0, c.Undefined);
            return console.assert(b != c.Undefined, "The tower class must be defined."), b
        }, i.getTowerNameFromTowerClassID = function (a) {
            for (var b in c)
                if (c[b] == a)
                    return b + " Tower";
            return "Undefined Tower"
        };
        var j = !1, k = function () {
            if (!j) {
                j = !0;
                for (var a = 0; a < b; ++a) {
                    var c = ["attack_level1", "attack_level2", "attack_level3"];
                    e[a] = "", e[a] += c[a]
                }
                for (a = 0; a < 12; ++a) {
                    var d = ["attack_level1_north", "attack_level1_east", "attack_level1_south", "attack_level1_east", "attack_level2_north", "attack_level2_east", "attack_level2_south", "attack_level2_east", "attack_level3_north", "attack_level3_east", "attack_level3_south", "attack_level3_east"];
                    f[a] = "", f[a] += d[a]
                }
                for (a = 0; a < b; ++a) {
                    var h = ["idle_level1", "idle_level2", "idle_level3"];
                    g[a] = "", g[a] += h[a]
                }
            }
        };
        i.clearAnimationNames = function () {
        }, i.renderFieldOfView = function (a, b, c) {
        }, i.renderRangeIndicator = function (b, c, d, e, f, g, h) {
            if (g <= kPrecisionErrorCorrection)
                return;
            var i = RenderDevice.createVertexTexCoordArray(a), j = RenderDevice.createColorArray(a), k = RenderDevice.createVertexTexCoordArray(a), l = RenderDevice.createVertexTexCoordArray(a * 2), m = RenderDevice.createColorArray(a * 2, new Color(128, 255, 128, 255)), n = RenderDevice.createColorArray(a * 2, new Color(255, 92, 92, 255)), o = RenderDevice.createColorArray(a), p = RenderDevice.createVertexTexCoordArray(a), q = RenderDevice.createColorArray(a), r = RenderDevice.createVertexTexCoordArray(a), s = RenderDevice.createColorArray(a), t = 3 * WORLD_UNITS_SCALAR / 3 * eaglview.map.gameHudForm.zoomLevel, u = d > kPrecisionErrorCorrection ? a : a / 2, v = 0, w;
            for (w = 0; w < u; w++)
                d < kPrecisionErrorCorrection ? (v = 360 / (a / 2 - 2) * w, w == 0 ? (i[0] = k[0] = p[0] = r[0] = 0, i[1] = k[1] = p[1] = r[1] = 0) : (i[w * 5 + 0] = k[w * 5 + 0] = p[w * 5 + 0] = r[w * 5 + 0] = COS(DEGREES_TO_RADIANS(v)) * e, i[w * 5 + 1] = k[w * 5 + 1] = p[w * 5 + 1] = r[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * e)) : (v = 360 / (a / 2 - 2) * (w / 2), w % 2 == 0 ? (i[w * 5 + 0] = k[w * 5 + 0] = p[w * 5 + 0] = r[w * 5 + 0] = COS(DEGREES_TO_RADIANS(v)) * e, i[w * 5 + 1] = k[w * 5 + 1] = p[w * 5 + 1] = r[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * e) : (i[w * 5 + 0] = k[w * 5 + 0] = p[w * 5 + 0] = r[w * 5 + 0] = COS(DEGREES_TO_RADIANS(v)) * d, i[w * 5 + 1] = k[w * 5 + 1] = p[w * 5 + 1] = r[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * d)), i[w * 5 + 2] = k[w * 5 + 2] = p[w * 5 + 2] = r[w * 5 + 2] = 0, v = 360 / (a / 2 - 2) * w, k[w * 5] = COS(DEGREES_TO_RADIANS(v)) * e, k[w * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * e, l[w * 2 * 5 + 0] = k[w * 5 + 0] - t * COS(DEGREES_TO_RADIANS(v)), l[w * 2 * 5 + 1] = k[w * 5 + 1] - t * SIN(DEGREES_TO_RADIANS(v)), l[(w * 2 + 1) * 5 + 0] = k[w * 5 + 0] + t * COS(DEGREES_TO_RADIANS(v)), l[(w * 2 + 1) * 5 + 1] = k[w * 5 + 1] + t * SIN(DEGREES_TO_RADIANS(v)), j[w * 4 + 0] = 32, j[w * 4 + 1] = 160, j[w * 4 + 2] = 56, j[w * 4 + 3] = 255, o[w * 4 + 0] = 128, o[w * 4 + 1] = 255, o[w * 4 + 2] = 128, o[w * 4 + 3] = 255, q[w * 4 + 0] = 192, q[w * 4 + 1] = 0, q[w * 4 + 2] = 0, q[w * 4 + 3] = 255, s[w * 4 + 0] = 255, s[w * 4 + 1] = 92, s[w * 4 + 2] = 92, s[w * 4 + 3] = 255;
            for (w = 0; w < a; w++)
                h ? (q[w * 4 + 3] = 128 * g, s[w * 4 + 3] = 160 * g) : (j[w * 4 + 3] = 128 * g, o[w * 4 + 3] = 160 * g), m[w * 2 * 4 + 3] = 160 * g, m[(w * 2 + 1) * 4 + 3] = 160 * g, n[w * 2 * 4 + 3] = 160 * g, n[(w * 2 + 1) * 4 + 3] = 160 * g;
            var x = RenderDevice.getRenderDevice();
            x.useShaderProgram(kProgramID.Textureless), x.setBlendState(kBlendState.Alpha), h ? x.setVertexStreamDataArrays(p, q) : x.setVertexStreamDataArrays(i, j), x.pushMatrix(), x.translateModelViewMatrix(b, c), x.scaleModelViewMatrix(f), d < kPrecisionErrorCorrection ? x.drawPrimitiveType(kPrimitiveType.TriangleFan, 0, a / 2) : x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, a - 2), x.setLineWidth(3 * WORLD_UNITS_SCALAR);
            if (d > kPrecisionErrorCorrection) {
                var y = RenderDevice.createVertexTexCoordArray(a * 2), z = RenderDevice.createColorArray(a * 2);
                for (var A = 0; A < a * 2; A++)
                    if (!h) {
                        for (var B = 4; B >= 0; B--)
                            y[A * 5 + B] = l[A * 5 + B];
                        for (B = 3; B >= 0; B--)
                            z[A * 4 + B] = m[A * 4 + B]
                    } else {
                        for (var B = 4; B >= 0; B--)
                            y[A * 5 + B] = l[A * 5 + B];
                        for (B = 3; B >= 0; B--)
                            z[A * 4 + B] = n[A * 4 + B]
                    }
                x.setVertexStreamDataArrays(y, z), x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 2, a - 2), x.popMatrix(), x.pushMatrix(), x.translateModelViewMatrix(b, c), x.scaleModelViewMatrix(f);
                for (var A = 0; A < a * 2; A++)
                    v = 360 / (a / 2 - 2) * A, k[A * 5] = COS(DEGREES_TO_RADIANS(v)) * d, k[A * 5 + 1] = SIN(DEGREES_TO_RADIANS(v)) * d, l[A * 2 * 5 + 0] = k[A * 5 + 0] - t * COS(DEGREES_TO_RADIANS(v)), l[A * 2 * 5 + 1] = k[A * 5 + 1] - t * SIN(DEGREES_TO_RADIANS(v)), l[(A * 2 + 1) * 5 + 0] = k[A * 5 + 0] + t * COS(DEGREES_TO_RADIANS(v)), l[(A * 2 + 1) * 5 + 1] = k[A * 5 + 1] + t * SIN(DEGREES_TO_RADIANS(v));
                x.setVertexStreamDataArrays(l), x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 2, a - 2), x.popMatrix()
            } else
                h ? x.setVertexStreamDataArrays(l, n) : x.setVertexStreamDataArrays(l, m), x.drawPrimitiveType(kPrimitiveType.TriangleStrip, 2, a - 2), x.popMatrix();
            x.useShaderProgram(kProgramID.Default)
        }, i.renderRangeIndicatorWithTower = function (a, b, c) {
            var d = a.techLevel.minAttackRadius, e = a.techLevel.attackRadius, f = a.x, g = a.y;
            i.renderRangeIndicator(f, g, d, e, 1, b, c)
        }, this.kTowerClass = c, this.kTowerFireTrigger = d, this.TowerClass = i, Preloader.initialize("game/entities/towerclass.js")
    }), Preloader.include(["graphics/renderdevice.js"], function () {
        var a = null, b = Class.extend({
            init: function () {
                this.bReadLocalizedStrings = !1, this.localizedStringLookup = {}
            }, destroy: function () {
                this.localizedStringLookup = null
            }, localizedString: function (a, b, c) {
                if (!this.bReadLocalizedStrings) {
                    var d = Preloader.dependOn(this);
                    this.bReadLocalizedStrings = !0;
                    var e = "Localization", f = "";
                    f += e;
                    var g = f, h = "en.lproj";
                    console.assert(!c), c || (c = "Localizable.strings");
                    var i = g + "/" + h + "/" + c;
                    Preloader.loadText(i, bindSelf(function (a) {
                        var b = a.split("\n"), c = [];
                        for (var e = b.length - 1; e >= 0; e--) {
                            if (b[e].match(/^\/\//))
                                continue;
                            if (b[e].trim().length == 0)
                                continue;
                            c.push(b[e])
                        }
                        b = c, b.forEach(bindSelf(function (a) {
                            a = a.trim(), a = a.slice(0, a.length - 1);
                            var b = a.split("="), c = JSON.parse(b[0].trim()), d = JSON.parse(b[1].trim()), e = -1;
                            while ((e = d.indexOf("%%", e + 1)) != - 1)
                                d = d.replace("%%", "%", e);
                            this.localizedStringLookup[c] = d
                        }, this)), this.bReadLocalizedStrings = !0, d()
                    }, this))
                }
                var j = this.localizedStringLookup[a] != undefined ? this.localizedStringLookup[a] : a;
                return j
            }
        });
        b.mainBundle = function () {
            return a == null && (a = new b), a
        }, window.NextStep = window.NextStep || {}, window.NextStep.Bundle = b, $(function () {
            b.mainBundle().localizedString(""), Preloader.dependOn(function () {
                Preloader.initialize("utilities/nextstep/bundle.js")
            }, b.mainBundle())
        })
    }), Preloader.include([], function () {
        var a = Class.extend({
            init: function () {
                this.mColor = new Color(0, 0, 0, 0), this.mColorVariance = new Color(0, 0, 0, 0), this.mTime = 0
            }, GetColor: function () {
                return this.mColor
            }, GetColorVariance: function () {
                return this.mColorVariance
            }, GetIsColorVarianceZero: function () {
                return this.mColorVariance.GetRed() == 0 && this.mColorVariance.GetGreen() == 0 && this.mColorVariance.GetBlue() == 0 && this.mColorVariance.GetAlpha() == 0
            }, GetTime: function () {
                return this.mTime
            }, SetColorWithColor: function (a) {
                this.mColor = a
            }, SetColorVarianceWithColor: function (a) {
                this.mColorVariance = a
            }, SetColor: function (a, b) {
                this.mColor.a = a, this.mColor.r = b.r, this.mColor.g = b.g, this.mColor.b = b.b
            }, SetColorVariance: function (a, b) {
                this.mColorVariance.a = a, this.mColorVariance.r = b.r, this.mColorVariance.g = b.g, this.mColorVariance.b = b.b
            }, SetTime: function (a) {
                this.mTime = a
            }
        }, "ColorKeyClass"), b = Class.extend({
            init: function () {
                this.mColor = new Color(0, 0, 0, 0), this.mTime = 0
            }, GetColor: function () {
                return this.mColor
            }, GetTime: function () {
                return this.mTime
            }, SetColorWithColor: function (a) {
                this.mColor = a
            }, SetColor: function (a, b) {
                this.mColor.a = a, this.mColor.r = b.r, this.mColor.g = b.g, this.mColor.b = b.b
            }, SetTime: function (a) {
                this.mTime = a
            }
        }, "ColorKey"), c = function (a, b, c, d) {
            return (c + d).slice(0, b)
        }, d = Class.extend({
            init: function () {
                this.mRandomSeed = 0, mbCyclic = !1, this.mColorKeyClasses = new Array
            }, destroy: function () {
                for (var a = 0; a < this.mColorKeyClasses.length; a++)
                    ;
            }, Load: function (b, d) {
                var e, f = 64;
                e = c(e, f, b, "ColorKeys");
                var g = d.attr(e);
                e = c(e, f, b, "ColorVarianceKeys");
                var h = d.attr(e);
                e = c(e, f, b, "Cyclic"), this.mbCyclic = d.attr(e) == "True";
                var i = 6, j = g.length / i, k = new Array(j);
                for (var l = 0; l < j; l++)
                    k[l] = new a;
                for (var m = 0; m < j; m++) {
                    var n = parseInt(g.slice(m * i, m * i + 6), 16), o = parseInt(h.slice(m * i, m * i + 6), 16), p;
                    if (m == 0)
                        p = 0;
                    else if (m == j - 1)
                        p = 1;
                    else {
                        var q = "%sColorKeyTime%d", e = sprintf(q, b, m);
                        p = parseFloat(d.attr(e))
                    }
                    var r = new Color(o >> 16 & 255, o >> 8 & 255, o & 255, 255), s = new Color(n >> 16 & 255, n >> 8 & 255, n & 255, 255);
                    k[m].SetColorWithColor(s), k[m].SetColorVarianceWithColor(r), k[m].SetTime(p)
                }
                e = c(e, f, b, "OpacityKeys");
                var t = d.attr(e);
                e = c(e, f, b, "OpacityVarianceKeys");
                var u = d.attr(e), v = 2, w = t.length / v, x = new Array(w);
                for (var l = 0; l < w; l++)
                    x[l] = new a;
                for (var y = 0; y < w; y++) {
                    var z = parseInt(t.slice(y * v, (y + 1) * v), 16), A = parseInt(u.slice(y * v, (y + 1) * v), 16), p;
                    if (y == 0)
                        p = 0;
                    else if (y == w - 1)
                        p = 1;
                    else {
                        var B = "%sOpacityKeyTime%d";
                        e = sprintf(B, b, y), p = parseFloat(d.attr(e))
                    }
                    var C = new Color(A & 255, A & 255, A & 255, A & 255), s = new Color(z & 255, z & 255, z & 255, z & 255);
                    x[y].SetColorWithColor(s), x[y].SetColorVarianceWithColor(C), x[y].SetTime(p)
                }
                var D = 1, E = 1, F = new a;
                F.SetColor(x[0].GetColor().r, k[0].GetColor()), F.SetColorVariance(x[0].GetColorVariance().r, k[0].GetColorVariance()), F.SetTime(0), this.mColorKeyClasses.push(F);
                var G = !1;
                while (D < w || E < j) {
                    var H = D < w ? x[D] : null, I = E < j ? k[E] : null;
                    if (G || I === null || H.GetTime() < I.GetTime()) {
                        var J = I.GetTime() - F.GetTime(), K = H.GetTime() - F.GetTime(), L = K / J, M = new Color;
                        M.r = F.GetColor().r * (1 - L) + I.GetColor().r * L, M.g = F.GetColor().g * (1 - L) + I.GetColor().g * L, M.b = F.GetColor().b * (1 - L) + I.GetColor().b * L;
                        var N = new Color;
                        N.r = F.GetColorVariance().r * (1 - L) + I.GetColorVariance().r * L, N.g = F.GetColorVariance().g * (1 - L) + I.GetColorVariance().g * L, N.b = F.GetColorVariance().b * (1 - L) + I.GetColorVariance().b * L;
                        var O = new a;
                        O.SetTime(H.GetTime()), O.SetColor(H.GetColor().r, M), O.SetColorVariance(H.GetColorVariance().r, N), this.mColorKeyClasses.push(O), D++, I.GetTime() == H.GetTime() && E++, F = O, G = !1
                    } else {
                        var J = H.GetTime() - F.GetTime(), K = I.GetTime() - F.GetTime(), L = K / J, P = F.GetColor().a * (1 - L) + H.GetColor().r * L, Q = F.GetColorVariance().a * (1 - L) + H.GetColorVariance().r * L;
                        if (I.GetTime() < H.GetTime()) {
                            console.assert(!G);
                            var O = new a;
                            O.SetTime(I.GetTime()), O.SetColor(P, I.GetColor()), O.SetColorVariance(Q, I.GetColorVariance()), this.mColorKeyClasses.push(O), E++, F = O
                        } else
                            G = !0
                    }
                }
            }, GetColorKeyClasses: function () {
                return this.mColorKeyClasses
            }, GetIsCyclic: function () {
                return mbCyclic
            }, GetRandomSeed: function () {
                return this.mRandomSeed
            }
        }, "ColorCycleClass"), e = Class.extend({
            init: function () {
                this.mColorKeys = [new b, new b], this.mLastColorKeyIndex = 0
            }, destroy: function () {
                this.Clear()
            }, Clear: function () {
                this.mColorKeys = [new b, new b], this.mLastColorKeyIndex = 0
            }, GetColor: function (a, b) {
                var c = this.mLastColorKeyIndex, d = (this.mLastColorKeyIndex + 1) % this.mColorKeys.length;
                for (var e = 0; e < this.mColorKeys.length; e++) {
                    var f = this.mColorKeys[c], g = this.mColorKeys[d];
                    if (f.GetTime() <= a && g.GetTime() >= a) {
                        var h = g.GetTime() - f.GetTime(), i = a - f.GetTime(), j = i / h;
                        b.SetRed(f.GetColor().GetRed() * (1 - j) + g.GetColor().GetRed() * j), b.SetGreen(f.GetColor().GetGreen() * (1 - j) + g.GetColor().GetGreen() * j), b.SetBlue(f.GetColor().GetBlue() * (1 - j) + g.GetColor().GetBlue() * j), b.SetAlpha(f.GetColor().GetAlpha() * (1 - j) + g.GetColor().GetAlpha() * j), this.mLastColorKeyIndex = e;
                        break
                    }
                    c = d, d = (d + 1) % this.mColorKeys.length
                }
            }, Initialize: function (a) {
                this.Clear();
                var c = a.GetColorKeyClasses(), d = a.GetRandomSeed();
                for (var e = 0; e < c.length; e++) {
                    var f = c[e], g = f.GetColor();
                    if (!f.GetIsColorVarianceZero())
                        if (a.GetIsCyclic() && e == c.length - 1) {
                            var h = this.mColorKeys[0];
                            g = h.GetColor()
                        } else {
                            var i = Math.RandomFloat(1), j = f.GetColorVariance(), k = g.copy();
                            k.subInternal(j), g.addInternal(j), g.subInternal(k), g.mulInternal(i), g.addInternal(k)
                        }
                    var l = new b;
                    l.SetColorWithColor(g), l.SetTime(f.GetTime()), this.mColorKeys.push(l)
                }
            }
        }, "ColorCycle");
        window.ColorKeyClass = a, window.ColorKey = b, window.ColorCycleClass = d, window.ColorCycle = e, Preloader.initialize("utilities/colorbar.js")
    }), Preloader.include(["utilities/vector.js", "utilities/colorbar.js"], function () {
        kNumRandomVarianceValues = 4;
        var a = mat4.create(), b = Class.extend({
            init: function () {
                this.mArrayIndex = -1, this.mParticleManager = null, this.mTransform = mat4.identity(mat4.create()), this.mPosition = new Vector3f, this.mPostPivotPosition = new Vector3f, this.mOffsetX = new Interpolator, this.mOffsetY = new Interpolator, this.mOffsetZ = new Interpolator, this.mVelocity = new Vector3f, this.mTilt = new Interpolator, this.mScaleX = new Interpolator, this.mScaleY = new Interpolator, this.mTexCoordU = new Interpolator, this.mTexCoordV = new Interpolator, this.mColorCycle = new ColorCycle, this.mEmitterSpawnNumber = new Interpolator, this.mRandomDirection = new Vector3f, this.mSpinAroundCenter = new Interpolator, this.mSpinAroundPivot = new Interpolator, this.mRandomDirectionX = new Interpolator, this.mRandomDirectionY = new Interpolator, this.mRandomDirectionZ = new Interpolator
            }, ApplyCoordinateSystem: function (b, c) {
                console.assert(this.mParticleManager !== null, "The particle manager must be initialized.");
                var d = this.mParticleManager.GetParticleClass();
                switch (d.GetCoordinateSystem()) {
                    case kParticleCoordinateSystem.World:
                        c.SetWithVector(b);
                        break;
                    case kParticleCoordinateSystem.Velocity:
                        var e = this.mVelocity.copy();
                        e.IsZero() || (e.normalize(), mat4.identity(a), mat4.rotateX(a, Math.ArcTangent2(e.GetY(), e.GetX()) - kHalfPI), mat4.rotateY(a, Math.ArcSine(e.GetZ()) - kHalfPI), mat4.rotateZ(a, 0), mat4.multiplyVec3(a, e, c));
                        break;
                    case kParticleCoordinateSystem.HostUnit:
                        break;
                    case kParticleCoordinateSystem.TagPoint:
                }
            }, Initialize: function (a, b) {
                console.assert(this.mParticleManager !== null, "The particle manager must be initialized before the particle can be initialized.");
                var c = this.mParticleManager.GetParticleClass(), d = new Array(kNumRandomVarianceValues);
                for (var e = 0; e < kNumRandomVarianceValues; e++)
                    d[e] = Math.RandomFloat(1);
                this.mAge = 0, this.mNormalizedAge = 0, this.mPosition = a.copy(), this.mPostPivotPosition.Set(0, 0, 0), this.mVelocity = b.copy(), c.GetIsInfiniteLifetime() ? this.mLifetime = FLT_MAX : this.mLifetime = c.GetLifetime().GetValue() + c.GetLifetime().GetVariance() * d[0], this.mPeriod = c.GetPeriod().GetValue() + c.GetPeriod().GetVariance() * d[0];
                var f = c.GetOffsetX(), g = c.GetOffsetY(), h = c.GetOffsetZ(), i = c.GetTilt();
                this.mOffsetX.Set(f.GetInterpolatorType(), f.GetInitialValue() + f.GetInitialVariance() * d[0], f.GetFinalValue() + f.GetFinalVariance() * d[1]), this.mOffsetY.Set(g.GetInterpolatorType(), g.GetInitialValue() + g.GetInitialVariance() * d[2], g.GetFinalValue() + g.GetFinalVariance() * d[3]), this.mOffsetZ.Set(h.GetInterpolatorType(), h.GetInitialValue() + h.GetInitialVariance() * d[1], h.GetFinalValue() + h.GetFinalVariance() * d[3]), this.mYaw = c.GetYaw().GetValue() + c.GetYaw().GetVariance() * d[3], this.mPitch = c.GetPitch().GetValue() + c.GetPitch().GetVariance() * d[0], this.mRoll = c.GetRoll().GetValue() + c.GetRoll().GetVariance() * d[1], this.mTilt.Set(i.GetInterpolatorType(), i.GetInitialValue() + i.GetInitialVariance() * d[1], i.GetFinalValue() + i.GetFinalVariance() * d[2]), this.mVelocityBasedTilt = 0;
                var j = c.GetEmitterSpawnDelay();
                this.mEmitterSpawnDelay = j.GetValue() + j.GetVariance() * d[0], this._guid || (this._guid = guid());
                var k = c.GetMass(), l = c.GetDamping(), m = c.GetBounce(), n = c.GetFriction(), o = c.GetAerodynamics(), p = c.GetRandomInterval(), q = c.GetRandomPauseInterval(), r = c.GetSpinAroundCenter(), s = c.GetSpinAroundPivot(), t = c.GetRandomDirectionX(), u = c.GetRandomDirectionY(), v = c.GetRandomDirectionZ();
                this.mMass = k.GetValue() + k.GetVariance() * d[0], this.mDamping = l.GetValue() + l.GetVariance() * d[1], this.mBounce = -1 - (m.GetValue() + m.GetVariance() * d[2]), this.mFriction = n.GetValue() + n.GetVariance() * d[3], this.mAerodynamics = o.GetValue() + o.GetVariance() * d[3], this.mSpinAroundCenter.Set(r.GetInterpolatorType(), r.GetInitialValue() + r.GetInitialVariance() * d[0], r.GetFinalValue() + r.GetFinalVariance() * d[1]), this.mSpinAroundPivot.Set(s.GetInterpolatorType(), s.GetInitialValue() + s.GetInitialVariance() * d[2], s.GetFinalValue() + s.GetFinalVariance() * d[3]), this.mRandomDirectionX.Set(t.GetInterpolatorType(), t.GetInitialValue() + t.GetInitialVariance() * d[0], t.GetFinalValue() + t.GetFinalVariance() * d[1]), this.mRandomDirectionY.Set(u.GetInterpolatorType(), u.GetInitialValue() + u.GetInitialVariance() * d[2], u.GetFinalValue() + u.GetFinalVariance() * d[3]), this.mRandomDirectionZ.Set(v.GetInterpolatorType(), v.GetInitialValue() + v.GetInitialVariance() * d[3], v.GetFinalValue() + v.GetFinalVariance() * d[1]), this.mRandomInterval = p.GetValue() + p.GetVariance() * d[1], this.mRandomPauseInterval = q.GetValue() + q.GetVariance() * d[2], this.mCenterSpinAngle = 0, this.mPivotSpinAngle = 0, this.mRandomIntervalTimer = this.mRandomInterval, this.mRandomPauseIntervalTimer = this.mRandomPauseInterval, this.mRandomDirection.Set(0, 0, 0);
                var w = c.GetScaleX(), x = c.GetScaleY(), y = c.GetTexCoordU(), z = c.GetTexCoordV();
                this.mTexCoordU.Set(y.GetInterpolatorType(), y.GetInitialValue() + y.GetInitialVariance() * d[2], y.GetFinalValue() + y.GetFinalVariance() * d[0]), this.mTexCoordV.Set(z.GetInterpolatorType(), z.GetInitialValue() + z.GetInitialVariance() * d[3], z.GetFinalValue() + z.GetFinalVariance() * d[1]), this.mScaleX.Set(w.GetInterpolatorType(), w.GetInitialValue() + w.GetInitialVariance() * d[0], w.GetFinalValue() + w.GetFinalVariance() * d[1]), c.GetUniformScaling() ? this.mScaleY.Set(this.mScaleX.GetInterpolatorType(), this.mScaleX.GetInitialValue(), this.mScaleX.GetFinalValue()) : this.mScaleY.Set(x.GetInterpolatorType(), x.GetInitialValue() + x.GetInitialVariance() * d[2], x.GetFinalValue() + x.GetFinalVariance() * d[3]), this.mColorCycle.Initialize(c.GetColorCycle())
            }, Update: function (a) {
                console.assert(this.mParticleManager !== null, "Particle manager must be initialized before the particle can be initialized.");
                var b = this.mParticleManager.GetParticleClass(), c = a * .001;
                this.mAge += c;
                if (this.mAge >= this.mLifetime) {
                    b.GetEmitUponDeath() && this.SpawnChildParticles(), this.mParticleManager.DestroyParticle(this);
                    return
                }
                b.GetIsPeriodEnabled() ? (this.mNormalizedAge = this.mAge / this.mPeriod, this.mNormalizedAge -= Math.Floor2(this.mNormalizedAge)) : !b.GetIsInfiniteLifetime() && NOT_ZERO(this.mLifetime) ? this.mNormalizedAge = this.mAge / this.mLifetime : this.mNormalizedAge = 0;
                var d = new Vector3f(0, 0, -this.mMass), e = this.mAerodynamics;
                if (e > kPrecisionErrorCorrection) {
                    var f = new Vector3(-1, 0, 0);
                    f.mulInternal(e), d.addInternal(f)
                }
                var g = this.mDamping;
                if (g > kPrecisionErrorCorrection) {
                    var h = this.mVelocity.copy();
                    h.mulInternal(-g), d.addInternal(h)
                }
                d.IsZero() || this.mVelocity.addInternal(d.mul(c)), this.mVelocity.IsZero() || this.mPosition.addInternal(this.mVelocity.mul(c));
                if (b.GetApplyRandomVelocity()) {
                    this.mRandomIntervalTimer += c;
                    if (this.mRandomIntervalTimer >= this.mRandomInterval) {
                        IS_ZERO(this.mRandomPauseIntervalTimer) && this.mVelocity.SubtractWithVector(this.mRandomDirection), this.mRandomPauseIntervalTimer += c;
                        if (this.mRandomPauseIntervalTimer >= this.mRandomPauseInterval) {
                            this.mRandomIntervalTimer = 0, this.mRandomPauseIntervalTimer = 0;
                            var i = this.mRandomDirectionX.GetValue(this.mNormalizedAge), j = this.mRandomDirectionY.GetValue(this.mNormalizedAge), k = this.mRandomDirectionZ.GetValue(this.mNormalizedAge);
                            this.mRandomDirection.Set(Math.RandomFloatWithMinMax(-i, i), Math.RandomFloatWithMinMax(-j, j), Math.RandomFloatWithMinMax(-k, k)), this.mVelocity.AddWithVector(this.mRandomDirection)
                        }
                    }
                }
                this.mCenterSpinAngle += this.mSpinAroundCenter.GetValue(this.mNormalizedAge) * c, this.mPivotSpinAngle += this.mSpinAroundPivot.GetValue(this.mNormalizedAge) * c, mat4.rotateX(mat4.rotateY(mat4.rotateZ(mat4.identity(this.mTransform), this.mYaw + this.mPivotSpinAngle), this.mPitch), this.mRoll);
                var l = new Vector3f(this.mOffsetX.GetValue(this.mNormalizedAge), this.mOffsetY.GetValue(this.mNormalizedAge), this.mOffsetZ.GetValue(this.mNormalizedAge));
                if (!l.IsZero()) {
                    var m = new Vector3;
                    this.ApplyCoordinateSystem(l, m), m = mat4.multiplyVec3(this.mTransform, m), this.mPostPivotPosition = this.mPosition.add(m)
                } else
                    this.mPostPivotPosition = this.mPosition.copy();
                if (b.GetCollidesWithTerrain()) {
                    var n = 0, o = this.mPostPivotPosition.GetZ() <= n;
                    if (o) {
                        this.mPostPivotPosition.SetZ(n);
                        var p = new Vector3(0, 0, 1), q = this.mVelocity.dotProduct(p);
                        q < 0 && (q *= this.mBounce, this.mVelocity.SetZ(this.mVelocity.GetZ() + q));
                        var r = new Vector3f(this.mVelocity.GetX(), this.mVelocity.GetY(), 0);
                        r.mulInternal(-this.mFriction), this.mVelocity.addInternal(r)
                    }
                }
                if (b.GetIsVelocityBasedTilt() && (NOT_ZERO(this.mVelocity.GetX()) || NOT_ZERO(this.mVelocity.GetY()))) {
                    var s = mat4.multiplyVec3(this.mTransform, this.mVelocity.copy());
                    this.mVelocityBasedTilt = Math.ArcTangent2(s.GetY(), s.GetX()) + kHalfPI
                }
                b.GetEmitterEnabled() && (this.mEmitterSpawnDelay -= c, this.mEmitterSpawnDelay <= 0 && !b.GetEmitUponDeath() && this.SpawnChildParticles())
            }, SpawnChildParticles: function () {
                console.assert(this.mParticleManager !== null, "The particle manager must be initialized before the particle can be initialized.");
                var a = this.mParticleManager.GetParticleClass();
                this._guid || (this._guid = guid());
                var b = a.GetEmitterInterval();
                this.mEmitterSpawnDelay += InterpolateValue(b.GetInterpolatorType(), this.mNormalizedAge, b.GetInitialValue() + b.GetInitialVariance() * Math.RandomFloat(1), b.GetFinalValue() + b.GetFinalVariance() * Math.RandomFloat(1));
                var c = a.GetEmitterSpawnNumber(), d = InterpolateValue(c.GetInterpolatorType(), this.mNormalizedAge, c.GetInitialValue() + Math.RandomIntWithMax(c.GetInitialVariance() + 1), c.GetFinalValue() + Math.RandomIntWithMax(c.GetFinalVariance() + 1)), e = a.GetEmitterVelocity(), f = 0, g = -1, h = 0;
                for (var i = this.mParticleManager.GetNumChildParticleManagers() - 1; i >= 0; i--) {
                    var j = this.mParticleManager.GetChildParticleManager(i);
                    for (var k = 0; k < d; k++) {
                        if (a.GetRandomizeVelocityPerParticleInstance() || k == 0)
                            h = InterpolateValue(e.GetInterpolatorType(), this.mNormalizedAge, e.GetInitialValue() + e.GetInitialVariance() * Math.RandomFloat(1), e.GetFinalValue() + e.GetFinalVariance() * Math.RandomFloat(1));
                        var l = new Vector3(0, -h, 0), m = new Vector3, n = a.GetEmitterShape();
                        switch (n) {
                            case kEmitterShape.Point:
                                m.SetWithVector(this.mPostPivotPosition);
                                break;
                            case kEmitterShape.Box:
                                var o, p;
                                o = Math.RandomFloatWithMinMax(-1, 1), p = Math.RandomFloatWithMinMax(-1, 1), g = Math.RandomFloatWithMinMax(-1, 1);
                                var q = new Vector3f(0, 1, 0), r = new Vector3f(0, 0, 1), s = q.crossProduct(r), t = s.mul(a.GetEmitterWidthOuter() * .5), u = q.mul(a.GetEmitterHeightOuter() * .5), v = r.mul(a.GetEmitterDepthOuter() * .5), w = t.mul(o), x = u.mul(p), y = v.mul(g);
                                m.SetWithVector(this.mPostPivotPosition).addInternal(w).addInternal(x).addInternal(y);
                                break;
                            case kEmitterShape.Cylinder:
                                a.GetFixedSampling() ? (f += kTwoPI / d * a.GetNumEmitterRevolutions(), g += 2 / d) : (f = Math.RandomFloatWithMax(kTwoPI), g = Math.RandomFloatWithMinMax(-1, 1));
                                var z =
                                    Math.RandomFloatWithMinMax(a.GetEmitterWidthInner(), 1), A = Math.RandomFloatWithMinMax(a.GetEmitterHeightInner(), 1), q = new Vector3f(0, 1, 0), r = new Vector3f(0, 0, 1), s = q.crossProduct(r), t = s.mul(a.GetEmitterWidthOuter() * .5), u = q.mul(a.GetEmitterHeightOuter() * .5), v = r.mul(a.GetEmitterDepthOuter() * .5), B = z * SIN(f), C = A * COS(f);
                                m.SetWithVector(this.mPostPivotPosition).addInternal(t.mul(B)).addInternal(u.mul(C)).addInternal(v.mul(g))
                        }
                        var D = a.GetYaw().GetValue() + Math.RandomFloatWithMax(a.GetYaw().GetVariance()), E = a.GetPitch().GetValue() + Math.RandomFloatWithMax(a.GetPitch().GetVariance()), F = a.GetRoll().GetValue() + Math.RandomFloatWithMax(a.GetRoll().GetVariance());
                        mat4.rotateX(mat4.rotateY(mat4.rotateZ(mat4.identity(this.mTransform), D + this.mCenterSpinAngle), E), F);
                        var G = mat4.multiplyVec3(this.mTransform, l, new Vector3);
                        j.SpawnParticle(this, m, G)
                    }
                }
            }, GetCenterSpinAngle: function () {
                return this.mCenterSpinAngle
            }, GetColor: function (a) {
                this.mColorCycle.GetColor(this.mNormalizedAge, a)
            }, GetNormalizedAge: function () {
                return this.mNormalizedAge
            }, GetArrayIndex: function () {
                return console.assert(this.mArrayIndex >= 0), this.mArrayIndex
            }, GetPitch: function () {
                return this.mPitch
            }, GetPosition: function () {
                return this.mPostPivotPosition
            }, GetRoll: function () {
                return this.mRoll
            }, GetScaleX: function () {
                return this.mScaleX.GetValue(this.mNormalizedAge)
            }, GetScaleY: function () {
                return this.mScaleY.GetValue(this.mNormalizedAge)
            }, GetTexCoordU: function () {
                return this.mTexCoordU.GetValue(this.mNormalizedAge)
            }, GetTexCoordV: function () {
                return this.mTexCoordV.GetValue(this.mNormalizedAge)
            }, GetVelocityBasedTilt: function () {
                return this.mVelocityBasedTilt
            }, GetTilt: function () {
                return this.mTilt.GetValue(this.mNormalizedAge)
            }, GetVelocity: function () {
                return this.mVelocity
            }, GetYaw: function () {
                return this.mYaw
            }, SetArrayIndex: function (a) {
                this.mArrayIndex = a
            }, SetVelocity: function (a) {
                this.mVelocity = a
            }, SetParticleManager: function (a) {
                console.assert(a !== null, "Initializing a particle with an invalid particle manager."), this.mParticleManager = a
            }, SetPositionWithVector: function (a) {
                this.mPosition.SetWithVector(a)
            }, SetPosition: function (a, b, c) {
                this.mPosition.Set(a, b, c)
            }, GetLifetime: function () {
                return this.mLifetime
            }, Destroy: function () {
                this.mLifetime = 0, this.mParticleManager = null
            }
        }, "Particle");
        window.Particle = b, Preloader.initialize("graphics/particle.js")
    }), Preloader.include(["utilities/orientation.js", "utilities/memorypool.js", "graphics/particle.js"], function () {
        kInitialCapacityOfParticleBuffer = 20;
        var a = Class.extend({
            init: function (b, c) {
                this.mParticleClass = b, this.mParticleSystem = c, this.mNumParticles = 0, this.mChildParticleManagers = null, this.mParticles = new Array;
                var d = b.GetNumChildren();
                if (d > 0) {
                    this.mChildParticleManagers = [];
                    for (var e = 0; e < d; e++) {
                        var f = b.GetChildParticleClass(e), g = new a(f, c);
                        this.mChildParticleManagers.push(g)
                    }
                }
            }, destroy: function () {
                var a;
                for (a = this.mParticles.length - 1; a >= 0; a--) {
                    var b = this.mParticles[a];
                    this.DestroyParticle(b)
                }
                if (this.mChildParticleManagers)
                    for (var c = 0; c < this.mChildParticleManagers.length; c++)
                        this.mChildParticleManagers[c].destroy();
                this.mChildParticleManagers = null, this.mParticleClass = null
            }, DestroyParticle: function (b) {
                var c = b.GetArrayIndex(), d = c == this.mParticles.length - 1;
                this.mParticles.removeAtIndexFast(c), d || this.mParticles[c].SetArrayIndex(c), this.mParticleSystem.DecrementParticleCount(), this.mNumParticles--, a.sParticleMemoryPool.DeleteObject(b)
            }, PostRender: function (a) {
                this.Render(a, !0)
            }, Render: function (a, b) {
                if (this.mChildParticleManagers !== null)
                    for (var c = 0; c < this.mChildParticleManagers.length; c++) {
                        var d = this.mChildParticleManagers[c];
                        d.Render(a, b)
                    }
                if (!this.mParticleClass.GetGraphicsEnabled() || this.mNumParticles == 0 || this.mParticleClass.GetDistortion() != b)
                    return;
                var e = RenderDevice.getRenderDevice();
                e.pushMatrix(), e.translateModelViewMatrix(this.mParticleSystem.GetPosition().GetX(), this.mParticleSystem.GetPosition().GetY(), this.mParticleSystem.GetPosition().GetZ()), e.rotateModelViewMatrixByAngle(this.mParticleSystem.GetRotationAngle(), 0, 0, 1), e.scaleModelViewMatrix(kParticleSystemScale), e.setTextureWithID(this.mParticleClass.GetTextureID()), e.setTextureAddressingMode(kTextureAddressMode.Clamp), e.setTextureFilteringMode(kTextureFilterType.Linear), e.setBlendState(this.mParticleClass.GetBlendState());
                var f = 4, g = RenderDevice.createVertexTexCoordArray(f), h = RenderDevice.createColorArray(f);
                for (var i = 0, j = this.mParticles.length; i < j; i++) {
                    var k = this.mParticles[i], l = k.GetPosition();
                    g[10] = g[0] = -this.mParticleClass.GetAnchor().GetX() * k.GetScaleX(), g[6] = g[1] = -this.mParticleClass.GetAnchor().GetY() * k.GetScaleY(), g[15] = g[5] = k.GetScaleX() + g[0], g[16] = g[11] = k.GetScaleY() + g[1], g[2] = g[7] = g[12] = g[17] = l.GetZ();
                    var m = k.GetCenterSpinAngle() + k.GetTilt() + k.GetVelocityBasedTilt();
                    if (NOT_ZERO(m)) {
                        var n = Math.FastCosine(m), o = Math.FastSine(m);
                        for (var p = 0; p < f; p++) {
                            var q = g[p * 5 + 0], r = g[p * 5 + 1];
                            g[p * 5 + 0] = l.GetX() + n * q - o * r, g[p * 5 + 1] = l.GetY() + o * q + n * r
                        }
                    } else
                        for (var p = 0; p < f; p++)
                            g[p * 5 + 0] += l.GetX(), g[p * 5 + 1] += l.GetY();
                    var s = new Color;
                    k.GetColor(s);
                    for (var t = 0; t < f; t++)
                        h[t * 4 + 0] = s.r, h[t * 4 + 1] = s.g, h[t * 4 + 2] = s.b, h[t * 4 + 3] = s.a;
                    var u = k.GetTexCoordU(), v = k.GetTexCoordV();
                    g[3] = g[13] = CORRECT_U(this.mParticleClass.GetTextureID(), u), g[4] = g[9] = CORRECT_V(this.mParticleClass.GetTextureID(), v), g[8] = g[18] = CORRECT_U(this.mParticleClass.GetTextureID(), u + 1), g[14] = g[19] = CORRECT_V(this.mParticleClass.GetTextureID(), v + 1), e.setVertexStreamDataArrays(g, h), e.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)
                }
                e.popMatrix()
            }, SpawnParticle: function (b, c, d) {
                var e = a.sParticleMemoryPool.NewObject();
                return e.SetParticleManager(this), e.Initialize(c, d), e.SetArrayIndex(this.mParticles.length), this.mParticles.push(e), this.mParticleClass.GetSoundEffect() !== null && this.mParticleClass.GetSoundEffect().play(), this.mParticleSystem.IncrementParticleCount(), this.mNumParticles++, e
            }, Update: function (a) {
                for (var b = this.mParticles.length - 1; b >= 0; b--) {
                    var c = this.mParticles[b];
                    c.Update(a)
                }
                if (this.mChildParticleManagers !== null)
                    for (var d = 0; d < this.mChildParticleManagers.length; d++) {
                        var e = this.mChildParticleManagers[d];
                        e.Update(a)
                    }
            }, GetParticleClass: function () {
                return this.mParticleClass
            }, GetParticleSystem: function () {
                return this.mParticleSystem
            }, GetNumChildParticleManagers: function () {
                return this.mChildParticleManagers === null ? 0 : this.mChildParticleManagers.length
            }, GetChildParticleManager: function (a) {
                return console.assert(a < this.mChildParticleManagers.length, "Invalid child index."), this.mChildParticleManagers[a]
            }
        }, "ParticleManager");
        window.jQuery.extend(a, {
            sCameraPosition: new Vector3f(0, 0, 0), sCameraOrientation: new Orientation(0, 0, 0), sParticleMemoryPool: new MemoryPool(Particle), ClearPool: function () {
                return a.sParticleMemoryPool.ClearPool()
            }
        }), window.ParticleManager = a, Preloader.initialize("graphics/particlemanager.js")
    }), Preloader.include(["graphics/particlesystemexclass.js", "graphics/particlemanager.js"], function () {
        var a = 0;
        kParticleSystemScale = 23 * WORLD_UNITS_SCALAR;
        var b = Class.extend({
            init: function (b, c, d) {
                this.mParticleSystemExClass = b, this.mNumParticles = 0, this.mRotationAngle = d || 0, console.assert(b !== null, "A particle system cannot be spawned from an undefined particle system class.");
                var e = b.GetParticleClass();
                this.mParticleManager = new ParticleManager(e, this), this.mPosition = c.copy(), this.mInstanceID = a++, this.mRootParticle = this.mParticleManager.SpawnParticle(null, (new Vector3f(0, 0, 0)).div(kParticleSystemScale), new Vector3f(0, 0, 0))
            }, destroy: function () {
                this.mParticleManager && (this.mParticleManager.destroy(), this.mParticleManager = null), this.mParticleSystemExClass = null
            }, PostRender: function (a) {
                this.mParticleManager.Render(a, !0)
            }, Render: function (a) {
                this.mParticleManager.Render(a, !1)
            }, Lifetime: function () {
                return this.mRootParticle.GetLifetime()
            }, StopEmission: function () {
                this.mRootParticle.Destroy()
            }, Update: function (a) {
                this.mParticleManager.Update(a)
            }, GetPosition: function () {
                return this.mPosition
            }, GetRotationAngle: function () {
                return this.mRotationAngle
            }, GetParticleCount: function () {
                return this.mNumParticles
            }, GetInstanceID: function () {
                return this.mInstanceID
            }, IncrementParticleCount: function () {
                this.mNumParticles++
            }, DecrementParticleCount: function () {
                console.assert(this.mNumParticles > 0, "Cannot destroy particle that do not exist."), this.mNumParticles--
            }, SetPosition: function (a) {
                this.mPosition = a
            }, SetPosition: function (a, b) {
                this.mPosition.Set(a, b, 0)
            }, SetPosition: function (a, b, c) {
                this.mPosition.Set(a, b, c)
            }, SetRotationAngle: function (a) {
                this.mRotationAngle = a
            }
        }, "ParticleSystemEx");
        window.ParticleSystemEx = b, Preloader.initialize("graphics/particlesystemex.js")
    }), Preloader.include(["utilities/mathutilities.js", "utilities/randomutilities.js", "utilities/directionutilities.js", "utilities/point.js", "utilities/vector.js", "graphics/sprite.js", "graphics/particlesystemex.js", "game/entities/entity.js", "game/entities/projectile.js"], function () {
        var a = 10, b = 30, c = 8, d = { Idle: 0, Attack: 1, Upgrade: 2 }, e = Entity.extend({
            init: function (a, b, c) {
                this._super(a, b), this.towerClass = a, this.target = null, this.targetTileGridIndex = -1, this.enemiesWithinAttackRange = new Array, this.techLevelIndex = 0, this.attackDirection = kDirection.None, this.state = d.Idle, this.mirrorType = kMirrorType.None, this.orientationAngle = 0, this.discretizedAngle = 0, this.fireAnimTimer = 0, this.animTimer = 0, this.animFrame = 0, this.showFireAnim = !1, this.color = new Color, this.color.r = 255, this.color.g = 255, this.color.b = 255, this.color.a = 255, this.targetUniqueID = 0, this.hasBeenSimulated = !1, this.removeFromList = !1, this.isAttackSoundPlaying = !1, this.playerIndex = c, this.reloadTimer = 0, this.reloadTimer2 = 0, this.orientationDelayTimer = 0, this.spawnProjectileParticleSystemEx = null, this.launchProjectileParticleSystemEx2 = null, this.computeDiscretizedAngle(), console.assert(this.techLevelIndex >= 0 && this.techLevelIndex < this.towerClass.techLevels.length, "Tech level not defined for tower."), this.techLevel = this.towerClass.techLevels[this.techLevelIndex], console.assert(this.techLevel != null, "Requested tech level is invalid."), this.targetWithinLineOfSight = this.techLevel.turnSpeed <= kPrecisionErrorCorrection
            }, destroy: function () {
                this.isAttackSoundPlaying && (this.towerClass.attackSoundEffect && this.towerClass.attackSoundEffect.stopWithDecay(), this.isAttackSoundPlaying = !1), this.RemoveParticleSystems()
            }, GetPlayerIndex: function () {
                return this.playerIndex
            }, RemoveParticleSystems: function () {
                this.spawnProjectileParticleSystemEx && (console.warn("destroying tower spawn particle system"), this.towerClass.towerClassID == kTowerClass.Plasma ? this.map.notLastParticleSystemExList.removeFast(this.spawnProjectileParticleSystemEx) : this.map.particleSystemExList.removeFast(this.spawnProjectileParticleSystemEx), this.spawnProjectileParticleSystemEx.destroy()), this.launchProjectileParticleSystemEx2 && (console.warn("destroying tower launch particle system"), this.towerClass.towerClassID == kTowerClass.Plasma ? this.map.notLastParticleSystemExList.removeFast(this.launchProjectileParticleSystemEx2) : this.map.particleSystemExList.removeFast(this.launchProjectileParticleSystemEx2), this.launchProjectileParticleSystemEx2.destroy())
            }, spawnParticleSystemEx: function (a, b, c) {
                if (b) {
                    var d, e;
                    this.entityClass.sprite.getTagPointPosRelativeToAnchor(a, c, this.discretizedAngle, function (a, b) {
                        d = a, e = b
                    }), this.mirrorType == kMirrorType.Horizontal && (d = -d), d += this.x, e += this.y;
                    var f = new ParticleSystemEx(b, new Vector3(d, e, 0), this.techLevel.turnSpeed == 0 ? 0 : this.orientationAngle + 180);
                    return this.towerClass.towerClassID == kTowerClass.Plasma ? this.map.notLastParticleSystemExList.push(f) : this.map.particleSystemExList.push(f), f
                }
                return null
            }, attackTarget: function () {
                var a = !1, b = !0;
                if (this.techLevel.projectileClass !== null)
                    b = this.launchProjectile(), b && (this.orientationDelayTimer = this.techLevel.orientationDelay, this.techLevel.projectileClass != null && (this.techLevel.projectileClass.type == kProjectileType.Cloud || this.techLevel.projectileClass.type == kProjectileType.Beam) && (a = !0));
                else {
                    this.SpawnLaunchProjectileParticleSystem("attack01");
                    var c = RANDOM_FLOAT_IN_RANGE(this.techLevel.minDamage, this.techLevel.maxDamage), d = AchievementManager.GetSingleton();
                    if (this.techLevel.splashDamageModifier > 0)
                        for (var e = 0, f = this.map.enemyList.length; e < f; e++) {
                            var g = this.map.enemyList[e];
                            console.assert(g != null, "Enemy not initialized.");
                            if (g != this.target) {
                                var h = SQRT(SQUARE(this.target.x - g.x) + SQUARE(this.target.y - g.y));
                                h <= this.techLevel.splashDamageRange && (g.leader !== null ? (g.leader.health -= c * this.techLevel.splashDamageModifier, g.leader.setShowHealth(!0)) : (g.health -= c * this.techLevel.splashDamageModifier, g.setShowHealth(!0)), g.health <= 0 && (g.killerPlayerIndex = this.playerIndex, d.IncrementNumKillsByTowerClass(this.towerClass.towerClassID)))
                            }
                        }
                    if (this.techLevel.bDamageAllEnemiesInFieldOfView)
                        for (var i = 0, f = this.enemiesWithinAttackRange.length; i < f; ++i) {
                            var g = this.enemiesWithinAttackRange[i];
                            if (g != this.target) {
                                var j = this.findAngleToEnemy(g), k = j - this.orientationAngle, l = Math.abs(k) <= this.techLevel.fieldOfView * .5 || Math.abs(j - (360 + this.orientationAngle)) <= this.techLevel.fieldOfView * .5;
                                l && (g.leader !== null ? (g.leader.health -= c * this.techLevel.splashDamageModifier, g.leader.setShowHealth(!0)) : (g.health -= c, g.setShowHealth(!0)), g.health <= 0 && (g.killerPlayerIndex = this.playerIndex, d.IncrementNumKillsByTowerClass(this.towerClass.towerClassID)))
                            }
                        }
                    this.target.leader != null ? (this.target.leader.health -= c, this.target.leader.setShowHealth(!0)) : (this.target.health -= c, this.target.setShowHealth(!0)), this.target != null && this.target.health <= 0 && (this.target.killerPlayerIndex = this.playerIndex, d.IncrementNumKillsByTowerClass(this.towerClass.towerClassID))
                }
                if (b) {
                    this.reloadTimer = this.techLevel.reloadSpeed;
                    var m = this.techLevel.fireDisplayTime * 2;
                    this.fireAnimTimer < kPrecisionErrorCorrection && (this.fireAnimTimer = m > kPrecisionErrorCorrection ? m : this.techLevel.reloadSpeed, this.animTimer = 0, this.animFrame = 0), this.isAttackSoundPlaying || (this.towerClass.attackSoundEffect != null && this.towerClass.attackSoundEffect.play(), this.isAttackSoundPlaying = !0)
                }
                return a
            }, cacheAliveEnemiesWithinAttackRange: function () {
                var a = null;
                this.enemiesWithinAttackRange.clear();
                var b = FLT_MAX, d, e;
                this.map.getTilePosFromWorldPosX(this.x, this.y, function (a, b) {
                    d = a, e = b
                });
                for (var f = 0; f < this.map.enemyList.length; ++f) {
                    var g = this.map.enemyList[f];
                    if (g.health > 0) {
                        if (this.techLevel.lockAttackDirections == kDirection.Lateral) {
                            var h, i;
                            this.map.getTilePosFromWorldPosX(g.x, g.y, function (a, b) {
                                h = a, i = b
                            });
                            if (h != d && i != e)
                                continue
                        }
                        var j = SQRT(SQUARE(g.x - this.x) + SQUARE(g.y - this.y));
                        if (j <= this.techLevel.attackRadius && j >= this.techLevel.minAttackRadius) {
                            this.enemiesWithinAttackRange.push(g);
                            if (g.health < b) {
                                if (this.techLevel.projectileClass !== null && this.techLevel.projectileClass.type == kProjectileType.Parabolic) {
                                    var k = this.techLevel.projectileClass.timeToImpact + this.techLevel.projectileSpawnDelay, l, m, n = g.predictPosition(k, function (a, b) {
                                        l = a, m = b
                                    });
                                    if (!n)
                                        continue;
                                    var o = MAX(this.techLevel.splashDamageRange - c, 0), p = SQRT(SQUARE(l - this.x) + SQUARE(m - this.y));
                                    if (p > this.techLevel.attackRadius + o || p < this.techLevel.minAttackRadius - o)
                                        continue
                                }
                                b = g.health, a = g
                            }
                        }
                    }
                }
                return a
            }, computeDiscretizedAngle: function () {
                this.discretizedAngle = this.orientationAngle + 180, this.discretizedAngle = (this.discretizedAngle + a / 2) / a * a % 360, this.discretizedAngle /= a, this.discretizedAngle = Math.floor(this.discretizedAngle), this.towerClass.mirrorHorizontal && this.discretizedAngle > 18 ? (this.mirrorType = kMirrorType.Horizontal, this.discretizedAngle = 18 - (this.discretizedAngle - 18)) : this.mirrorType = kMirrorType.None
            }, findAngleToEnemy: function (a) {
                var b = new Point;
                b.x = a.x, b.y = a.y;
                var c = new Vector2f(b.x - this.x, b.y - this.y);
                c.normalize();
                var d = c.computeAngle(Vector2f.orientationAxis());
                return c.isCounterClockwiseToVector(Vector2f.orientationAxis()) && (d = kTwoPI - d), RADIANS_TO_DEGREES(d)
            }, findAngleToTile: function (a) {
                var b = new Point;
                this.map.getWorldPosFromTileGridIndex(a, b), b.x += this.map.tileWidth / 2, b.y += this.map.tileHeight / 2;
                var c = new Vector2f;
                c.x = b.x - this.x, c.y = b.y - this.y, c.normalize();
                var d = c.computeAngle(Vector2f.orientationAxis());
                return c.isCounterClockwiseToVector(Vector2f.orientationAxis()) && (d = kTwoPI - d), RADIANS_TO_DEGREES(d)
            }, initiateUpgrade: function () {
                if (this.techLevelIndex + 1 < this.towerClass.techLevels.length) {
                    var a = this.towerClass.techLevels[this.techLevelIndex + 1];
                    console.assert(a !== null, "Requested tech level is invalid.");
                    if (this.map.GetPlayer(this.playerIndex).GetResources() >= a.cost) {
                        var b = a.cost;
                        this.map.GetPlayer(this.playerIndex).SubtractResources(b);
                        if (a.spawnProjectileParticleSystemExClass !== null) {
                            var c = this.towerClass.getAttackAnimationName(this.techLevelIndex);
                            this.spawnProjectileParticleSystemEx && (this.towerClass.towerClassID == kTowerClass.Plasma ? this.map.notLastParticleSystemExList.remove(this.spawnProjectileParticleSystemEx) : this.map.particleSystemExList.remove(this.spawnProjectileParticleSystemEx), this.spawnProjectileParticleSystemEx.destroy()), this.spawnProjectileParticleSystemEx = this.spawnParticleSystemEx("spawnfx", a.spawnProjectileParticleSystemExClass, c), this.updateOrientationAngleSpawnProjectileParticleSystemEx()
                        }
                        this.state == d.Attack && (this.target = null), this.state = d.Upgrade, this.map.view.audioConfig.upgradeTowerSoundEffect.play(), this.update(0);
                        if (this.techLevelIndex == this.towerClass.techLevels.length - 1) {
                            var e = kAchievement.Undefined, f = AchievementManager.GetSingleton();
                            switch (this.towerClass.towerClassID) {
                                case kTowerClass.Gatling:
                                    e = kAchievement.MowThemDown;
                                    break;
                                case kTowerClass.Goo:
                                    e = kAchievement.SlowMow;
                                    break;
                                case kTowerClass.Missile:
                                    e = kAchievement.BlowEmUp;
                                    break;
                                case kTowerClass.Lightning:
                                    e = kAchievement.MadScientist;
                                    break;
                                case kTowerClass.Flame:
                                    e = kAchievement.GlobalWarmer;
                                    break;
                                case kTowerClass.Mortar:
                                    e = kAchievement.ManhattanProject;
                                    break;
                                case kTowerClass.Laser:
                                    e = kAchievement.CutsLikeButter;
                                    break;
                                case kTowerClass.Ice:
                                    e = kAchievement.NuclearWinter;
                                    break;
                                case kTowerClass.Plasma:
                                    e = kAchievement.SolarFlare;
                                    break;
                                case kTowerClass.Lava:
                                    e = kAchievement.SuperVolcano;
                                    break;
                                case kTowerClass.Shotgun:
                                    e = kAchievement.GetOffMyLawn;
                                    break;
                                case kTowerClass.Poison:
                                    e = kAchievement.FullyUpgradePoisonTower;
                                    break;
                                default:
                                    console.warn("No achievement associated with this tower class.")
                            }
                            f.UnlockAchievement(e)
                        }
                        return !0
                    }
                }
                return !1
            }, launchProjectile: function (a) {
                var b = 1, c = new Array(32), d = null, e, f, g;
                a ? (g = this.techLevel.projectile2Class, e = this.techLevel.minDamage2, f = this.techLevel.maxDamage2) : (g = this.techLevel.projectileClass, e = this.techLevel.minDamage, f = this.techLevel.maxDamage), c = sprintf("attack%02d", b);
                var h = !0;
                do {
                    var i = null;
                    console.assert(g !== null, "No projectile class.");
                    switch (g.type) {
                        case kProjectileType.Parabolic:
                            var j, k, l = g.timeToImpact + this.techLevel.projectileSpawnDelay;
                            this.target.predictPosition(l, function (a, b) {
                                j = a, k = b
                            });
                            var m = new Vector2f(j, k);
                            m.x -= this.x, m.y -= this.y, m.clampLength(this.techLevel.minAttackRadius, this.techLevel.attackRadius), m.x += this.x, m.y += this.y, i = Projectile.createAtLocation(g, this.map, this, m);
                            break;
                        case kProjectileType.Beam:
                            var n, o;
                            this.map.getTilePos(this.tileGridIndex, function (a, b) {
                                n = a, o = b
                            });
                            var p, q;
                            this.targetTileGridIndex >= 0 ? this.map.getTilePos(this.targetTileGridIndex, function (a, b) {
                                p = a, q = b
                            }) : (console.assert(this.target), this.map.getTilePosFromWorldPosX(this.target.x, this.target.y, function (a, b) {
                                p = a, q = b
                            }));
                            var m = new Vector2f(p - n, q - o);
                            i = Projectile.createAtLocation(g, this.map, this, m), this.attackDirection = i.computeBeamDirection();
                            break;
                        case kProjectileType.Plasma:
                            var r = !a && this.target !== null && this.target.health > 0 && this.targetWithinLineOfSight && this.reloadTimer <= kPrecisionErrorCorrection;
                            if (r) {
                                var s = SQRT(SQUARE(this.target.x - this.x) + SQUARE(this.target.y - this.y));
                                r = s <= this.techLevel.attackRadius && s >= this.techLevel.minAttackRadius
                            }
                            if (r) {
                                if (b == 1) {
                                    var n, o, p, q;
                                    this.map.getTilePosFromWorldPosX(this.x, this.y, function (a, b) {
                                        n = a, o = b
                                    }), this.map.getTilePosFromWorldPosX(this.target.x, this.target.y, function (a, b) {
                                        p = a, q = b
                                    });
                                    if (n != p && o != q)
                                        return !1
                                }
                            } else
                                this.reloadTimer2 = this.techLevel.reloadSpeed2;
                            var m = new Vector2f;
                            switch (b) {
                                case 1:
                                    m.x = 0, m.y = -1;
                                    break;
                                case 2:
                                    m.x = 0, m.y = 1;
                                    break;
                                case 3:
                                    m.x = 1, m.y = 0;
                                    break;
                                case 4:
                                    m.x = -1, m.y = 0;
                                    break;
                                default:
                                    console.assert(b >= 1 && b <= 4, "Plasma tower only uses 4 diagonal attack points")
                            }
                            m.normalize(), i = Projectile.createAtLocation(g, this.map, this, m);
                            break;
                        default:
                            i = Projectile.createAtEnemy(g, this.map, this, this.target)
                    }
                    console.assert(i !== null, "No projectile object created."), i.minDamage = e, i.maxDamage = f, b == 1 && (this.techLevel.lockAttackDirections == kDirection.None ? d = this.towerClass.getAttackAnimationName(this.techLevelIndex) : (console.assert(this.attackDirection != kDirection.None, "Invalid attack direction."), d = this.towerClass.getDirectionalAttackAnimationName(this.techLevelIndex, this.attackDirection)));
                    var t, u;
                    this.entityClass.sprite.getTagPointPosRelativeToAnchor(c, d, this.discretizedAngle, function (a, b) {
                        t = a, u = b
                    }), this.mirrorType == kMirrorType.Horizontal && (t = -t), i.x = this.x + t, i.y = this.y + u, this.map.addProjectile(i), b == 1 && this.SpawnLaunchProjectileParticleSystem(c), b++, c = sprintf("attack%02d", b), h = this.entityClass.sprite.hasTagPoint(c, d)
                } while (h);
                return !0
            }, SpawnParticleSystem: function (a, b) {
                if (b != null) {
                    var c = null;
                    return this.techLevel.lockAttackDirections == kDirection.None ? c = this.towerClass.getAttackAnimationName(this.techLevelIndex) : (console.assert(this.attackDirection != kDirection.None, "Invalid attack direction."), c = this.towerClass.getDirectionalAttackAnimationName(this.techLevelIndex, this.attackDirection)), this.spawnParticleSystemEx(a, b, c)
                }
                return null
            }, SpawnLaunchProjectileParticleSystem: function (a) {
                this.SpawnParticleSystem(a, this.techLevel.launchProjectileParticleSystemExClass)
            }, SpawnLaunchProjectileParticleSystem2: function (a) {
                this.launchProjectileParticleSystemEx2 = this.SpawnParticleSystem(a, this.techLevel.launchProjectileParticleSystemEx2Class)
            }, playAnimation: function (a, b, c) {
                var d = this.animationController.getFrameCount(a), e = this.animationController.getAnimation(a);
                this.animTimer += b;
                while (this.animTimer >= e.interval)
                    this.animTimer -= e.interval, this.animFrame++;
                var f = !1;
                return c ? this.animFrame = this.animFrame % d : this.animFrame >= d && (this.animFrame = d - 1, f = !0, this.animTimer = 0, this.animFrame = 0), f
            }, OnEvent_PostBuild: function () {
                if (this.techLevel.spawnProjectileParticleSystemExClass) {
                    var a = this.towerClass.getAttackAnimationName(this.techLevelIndex);
                    this.spawnProjectileParticleSystemEx && (this.towerClass.towerClassID == kTowerClass.Plasma ? this.map.notLastParticleSystemExList.remove(this.spawnProjectileParticleSystemEx) : this.map.particleSystemExList.remove(this.spawnProjectileParticleSystemEx), this.spawnProjectileParticleSystemEx.destroy()), this.spawnProjectileParticleSystemEx = this.spawnParticleSystemEx("spawnfx", this.techLevel.spawnProjectileParticleSystemExClass, a)
                }
            }, renderSplashDamageRegion: function (a) {
                if (!this.isVisible())
                    return;
                if (this.towerClass != null && this.techLevel.splashDamageRange > kPrecisionErrorCorrection) {
                    var b = 1 / this.techLevel.attackRadius * this.techLevel.splashDamageRange, c = this.techLevel.minAttackRadius > kPrecisionErrorCorrection ? kPrecisionErrorCorrection * 2 : 0;
                    this.target != null && TowerClass.renderRangeIndicator(this.target.x, this.target.y, c, 0, b, 1, !0)
                }
            }, renderWithIdleEffect: function (a) {
                this.render(a), this.spawnProjectileParticleSystemEx && this.spawnProjectileParticleSystemEx.Render(a)
            }, render: function (a) {
                var b = this.techLevel.fireDisplayTime * 2;
                b < kPrecisionErrorCorrection && (b = this.techLevel.reloadSpeed);
                var c = null;
                if (this.techLevel.turnSpeed == 0 && this.techLevel.projectileClass.displayTime < kPrecisionErrorCorrection || this.techLevel.lockAttackDirections != kDirection.None) {
                    if (this.fireAnimTimer > b * .5) {
                        this.techLevel.lockAttackDirections == kDirection.None ? c = this.towerClass.getAttackAnimationName(this.techLevelIndex) : (console.assert(this.attackDirection != kDirection.None, "Invalid attack direction."), c = this.towerClass.getDirectionalAttackAnimationName(this.techLevelIndex, this.attackDirection));
                        var d = this.playAnimation(c, a, !1);
                        d || (this.discretizedAngle = this.animFrame), d && (this.attackDirection = kDirection.None, this.animTimer = 0, this.animFrame = 0, this.fireAnimTimer = 0)
                    } else if (this.techLevel.lockAttackDirections == kDirection.None) {
                        var e = this.towerClass.getIdleAnimationName(this.techLevelIndex);
                        this.playAnimation(e, a, !0), this.discretizedAngle = this.animFrame
                    }
                } else
                    c = this.towerClass.getAttackAnimationName(this.techLevelIndex);
                this.fireAnimTimer > b * .5 ? this.animationController.render(c, this.discretizedAngle, this.color, this.x, this.y, 0, 1, !0, function () {
                }, this.mirrorType) : this.animationController.render(this.towerClass.getIdleAnimationName(this.techLevelIndex), this.discretizedAngle, this.color, this.x, this.y, 0, 1, !1, function () {
                }, this.mirrorType)
            }, restoreTarget: function (a) {
                if (this.targetUniqueID != 0)
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        c.uniqueID == this.targetUniqueID && (this.target = c)
                    }
            }, serialize: function (a) {
                this._super(a);
                var b = {};
                a.serializeInt(this, "state"), a.serializeDouble(this, "fireAnimTimer"), a.serializeDouble(this, "orientationAngle"), a.serializeInt(this, "techLevelIndex"), SERIALIZE(a, this, "showFireAnim"), SERIALIZE(a, this, "targetWithinLineOfSight"), a.serializeDouble(this, "reloadTimer"), a.serializeDouble(this, "reloadTimer2"), SERIALIZE(a, this, "removeFromList"), a.serializeInt(this, "playerIndex"), a.serializeInt(this, "attackDirection"), a.serializeInt(this, "targetTileGridIndex"), a.serializeDouble(this, "orientationDelayTimer"), SERIALIZE(a, this, "hasBeenSimulated"), b.targetUniqueID = this.target !== null ? this.target.uniqueID : 0, a.serializeInt(b, "targetUniqueID"), this.targetUniqueID = b.targetUniqueID, a.isLoading() && (console.assert(this.techLevelIndex >= 0 && this.techLevelIndex < this.towerClass.techLevels.length, "Tech level not defined for tower."), this.techLevel = this.towerClass.techLevels[this.techLevelIndex], console.assert(this.techLevel !== null, "Requested tech level is invalid."))
            }, setColor: function (a, b, c, d) {
                this.color.r = a, this.color.g = b, this.color.b = c, this.color.a = d
            }, updateAttackState: function (a) {
                console.assert(this.target != null || this.targetTileGridIndex >= 0, "A target must be valid during the attack state."), this.techLevel.projectileClass != null && this.techLevel.projectileClass.type == kProjectileType.Spray && (this.cacheAliveEnemiesWithinAttackRange(), this.fireAnimTimer = this.techLevel.fireDisplayTime * 2);
                var b = !1;
                if (this.targetTileGridIndex >= 0)
                    this.techLevel.turnSpeed > kPrecisionErrorCorrection && this.updateOrientationAngle(a), this.targetWithinLineOfSight && this.reloadTimer <= kPrecisionErrorCorrection && !b && (this.attackTarget(), b = !0);
                else if (this.target.health > 0) {
                    var e = new Point, f = SQRT(SQUARE(this.target.x - this.x) + SQUARE(this.target.y - this.y));
                    if (f <= this.techLevel.attackRadius && f >= this.techLevel.minAttackRadius) {
                        this.techLevel.turnSpeed > kPrecisionErrorCorrection && this.updateOrientationAngle(a);
                        if (this.techLevel.projectileClass != null && this.techLevel.projectileClass.type == kProjectileType.Parabolic) {
                            var g = this.techLevel.projectileClass.timeToImpact + this.techLevel.projectileSpawnDelay, h = this.target.predictPosition(g, function (a, b) {
                                e.x = a, e.y = b
                            });
                            h || (b = !0);
                            var i = MAX(this.techLevel.splashDamageRange - c, 0), j = SQRT(SQUARE(e.x - this.x) + SQUARE(e.y - this.y));
                            if (j > this.techLevel.attackRadius + i || j < this.techLevel.minAttackRadius - i)
                                b = !0
                        }
                        this.targetWithinLineOfSight && this.reloadTimer <= kPrecisionErrorCorrection && (this.techLevel.projectileClass == null || this.techLevel.projectileClass.type != kProjectileType.Spray) && !b && (b = this.attackTarget())
                    } else
                        b = !0
                } else
                    b = !0;
                b && (this.target = null, this.state = d.Idle, this.targetWithinLineOfSight = this.techLevel.turnSpeed <= kPrecisionErrorCorrection)
            }, updateIdleState: function (a) {
                this.isAttackSoundPlaying && (this.towerClass.towerClassID != kTowerClass.Shotgun && this.towerClass.attackSoundEffect != null && this.towerClass.attackSoundEffect.stopWithDecay(), this.isAttackSoundPlaying = !1);
                var b = this.enemiesWithinAttackRange.length > 0;
                if (this.techLevel.projectileClass != null && this.techLevel.projectileClass.type == kProjectileType.Cloud && this.reloadTimer > kPrecisionErrorCorrection)
                    return;
                if (this.techLevel.lockAttackDirections != kDirection.None && this.reloadTimer > kPrecisionErrorCorrection)
                    return;
                var c = this.cacheAliveEnemiesWithinAttackRange();
                if (c != null) {
                    this.techLevel.projectileClass != null && this.techLevel.projectileClass.type == kProjectileType.Spray && this.techLevel.fireTrigger == kTowerFireTrigger.AttackRange && !b && this.enemiesWithinAttackRange.length > 0 && this.launchProjectile();
                    if (this.techLevel.lockAttackDirections == kDirection.None)
                        this.target = c, this.techLevel.turnSpeed > kPrecisionErrorCorrection && this.updateOrientationAngle(a), this.targetWithinLineOfSight ? this.state = d.Attack : this.target = null;
                    else if (this.techLevel.lockAttackDirections == kDirection.Lateral) {
                        var e, f;
                        this.map.getTilePosFromWorldPosX(this.x, this.y, function (a, b) {
                            e = a, f = b
                        });
                        var g, h;
                        this.map.getTilePosFromWorldPosX(c.x, c.y, function (a, b) {
                            g = a, h = b
                        }), g != e && h != f || g == e && h == f ? this.targetTileGridIndex = -1 : (this.targetTileGridIndex = this.map.getTileGridIndex(g, h), this.state = d.Attack)
                    }
                }
            }, updateOrientationAngle: function (a) {
                if (this.orientationDelayTimer > kPrecisionErrorCorrection)
                    return;
                var b;
                this.targetTileGridIndex < 0 ? b = this.findAngleToEnemy(this.target) : b = this.findAngleToTile(this.targetTileGridIndex);
                var c = b - this.orientationAngle;
                this.targetWithinLineOfSight = fabsf(c) <= this.techLevel.fieldOfView * .5 || fabsf(b - (360 + this.orientationAngle)) <= this.techLevel.fieldOfView * .5;
                var d = c >= 0;
                if (c > 180 || c < -180)
                    d = !d;
                var e = a * this.techLevel.turnSpeed;
                e < fabsf(c) ? this.orientationAngle += (d ? 1 : -1) * e : this.orientationAngle = b, this.orientationAngle = normalizeAngle(this.orientationAngle, 0, 360), this.updateOrientationAngleSpawnProjectileParticleSystemEx()
            }, updateOrientationAngleSpawnProjectileParticleSystemEx: function () {
                if (this.spawnProjectileParticleSystemEx && this.techLevel.turnSpeed != 0) {
                    this.computeDiscretizedAngle();
                    var a = this.towerClass.getIdleAnimationName(this.techLevelIndex), b, c;
                    this.entityClass.sprite.getTagPointPosRelativeToAnchor("attack01", a, this.discretizedAngle, function (a, d) {
                        b = a, c = d
                    }), this.mirrorType == kMirrorType.Horizontal && (b = -b), b += this.x, c += this.y, this.spawnProjectileParticleSystemEx.SetPosition(b, c), this.spawnProjectileParticleSystemEx.SetRotationAngle(this.orientationAngle + 180)
                }
            }, updateUpgradeState: function (a) {
                this.techLevelIndex++, console.assert(this.techLevelIndex >= 0 && this.techLevelIndex < this.towerClass.techLevels.length, "Tech level not defined for tower."), this.techLevel = this.towerClass.techLevels[this.techLevelIndex], console.assert(this.techLevel !== null, "Requested tech level is invalid."), this.state = d.Idle
            }, update: function (a) {
                this.fireAnimTimer -= a, this.reloadTimer -= a, this.reloadTimer = MAX(this.reloadTimer, 0), this.reloadTimer2 -= a, this.reloadTimer2 = MAX(this.reloadTimer2, 0), this.orientationDelayTimer -= a, this.orientationDelayTimer = MAX(this.orientationDelayTimer, 0), a > kPrecisionErrorCorrection && (this.hasBeenSimulated = !0), this.computeDiscretizedAngle();
                switch (this.state) {
                    case d.Attack:
                        a > kPrecisionErrorCorrection && this.updateAttackState(a);
                        break;
                    case d.Upgrade:
                        this.updateUpgradeState(a);
                        break;
                    case d.Idle:
                        a > kPrecisionErrorCorrection && this.updateIdleState(a)
                }
                return this.removeFromList && this.RemoveParticleSystems(), this.removeFromList
            }, isTower: function () {
                return !0
            }
        }, "Tower");
        this.Tower = e, Preloader.initialize("game/entities/tower.js")
    }), Preloader.include(["utilities/defines.js", "utilities/nextstep/userdefaults.js", "utilities/nextstep/bundle.js", "utilities/pathfinder.js", "utilities/fileutilities.js", "core/eaglview.js", "graphics/text.js", "graphics/sprite.js", "graphics/particlesystem.js", "graphics/particlesystemexclass.js", "game/preferences.js", "game/player.js", "game/entities/entity.js", "game/entities/enemy.js", "game/entities/enemyclass.js", "game/entities/tower.js", "game/entities/towerclass.js", "game/achievementmanager.js", "game/replayevent.js"], function () {
        kGameplayMode_SuddenDeath_EnemyHealthModifier = .9, kSaveGameMagicNumber = 3126770193, kSellTowerScorePenalty = -2500, kRemainingHealthScoreBonus = 1e3, kRemainingResourceScoreBonus = 10, kTimeBeforeFirstWave = 10, kStreamIndicatorFadeSpeed = 2, kStartingResourcesWithCheat = 9999, kStartingHealthWithCheat = 999, VIDEO_CAPTURE = 0, CACHE_ENEMIES_AFTER_LOAD = 0, FRONTLOAD_ENEMIES = 1, kGameReleaseVersion = 1, kGameMajorVersion = 1, kGameMinorVersion = 0, PACK_VERSION_NUMBER = function (a, b, c) {
            return a * 1e4 + b * 100 + c
        }, UNPACK_RELEASE_VERSION = function (a) {
            return a / 1e4
        }, UNPACK_MAJOR_VERSION = function (a) {
            return a % 1e4 / 100
        }, UNPACK_MINOR_VERSION = function (a) {
            return a % 100
        }, kSaveGameFilename = "Saves/temp.sav", kUserDataFilename = "Saves/default.usr", kMapSettingsKey = "MapSettings", kMapOwnedKey = "owned", kDefaultProfileKey = "DefaultProfile", kPlayableKey = "playable", kEndlessModeKey = "endlessMode", kExtendedModeKey = "extendedMode", kTowerCombo2Key = "towercombo2Mode;", kMapCompleteKey = "complete";
        var a = "fastForward";
        kWaveToUnlockEndlessMode = 100, kWaveToUnlockExtendedMode = 100, kWaveToUnlockMaps = 49, kUnpaidWaveCap = 49, kMaxRecordedReplayEvents = 2e3, kWaveToUnlockFirstMapSpecificOpenFeintAchievement = 49, kWaveToUnlockSecondMapSpecificOpenFeintAchievement = 99, kWaveToUnlockThirdMapSpecificOpenFeintAchievement = 149, kWaveToUnlockFourthMapSpecificOpenFeintAchievement = 249, kWaveToUnlockFifthMapSpecificOpenFeintAchievement = 149, kWaveToUnlockSixthMapSpecificOpenFeintAchievement = 499, kMapIndex = { Grasslands: 0, Crossroads: 1, Drylands: 2, Skyway: 3, Frostbite: 4, Cave: 5, Rainforest: 6, Volcano: 7, BuyAllPsuedoMap: 8, RainforestMP: 9, VolcanoMP: 10 }, kMapIndexSingleplayerFirst = 0, kMapIndexMultiplayerFirst = 9, kMaxOfficialMaps = 11
            , kNumOfficialMaps = kMaxOfficialMaps, kNumOfficialMultiplayerMaps = kMaxOfficialMaps - kMapIndex.MultiplayerFirst, kMapIndexSingleplayerLast = kMapIndexMultiplayerFirst - 2, kMapIndexMultiplayerLast = kMapIndexMultiplayerFirst + kNumOfficialMultiplayerMaps - 1, kNumOfficialSingleplayerMaps = kMapIndexSingleplayerLast - kMapIndexSingleplayerFirst + 1;
        var b = { DuringPlacement: 0, Always: 1, Never: 2 }, c = { None: 0, Additive: 1, Modulative: 2, Alpha: 3 };
        kGameState = { Stopped: 0, Paused: 1, Running: 2 }, kDifficultyLevel = { Easy: 0, Medium: 1, Hard: 2, Count: 3, None: 4 }, kNumDifficultyLevels = kDifficultyLevel.Count, kPlaybackSpeed = { Slow: 0, Normal: 1, Fast: 2 }, kPlaybackModifier = { Normal: 1, Fast: 3 }, kGameplayMode = { Classic: 0, Extended: 1, Endless: 2, SuddenDeath: 3, TimeTrial: 4, TowerCombo1: 5, TowerCombo2: 6, Count: 7 }, kNumGameplayModes = kGameplayMode.Count, kGameplayFeature = { FastForward: 0 };
        var d = Entity.extend({
            init: function () {
                this._super(null, null), this.applyDistortion = !1, this.anchorX = 0, this.anchorY = 0, this.renderAsEntity = !1, this.textureID = 0, this.width = 0, this.height = 0, this.blendingMode = c.Alpha, this.opacity = 1, this.renderCount = 1, this.contractTexCoords = !1, this.fullscreen = !1, this.scrollSpeedX = 0, this.scrollSpeedY = 0, this.depthOffset = 0, this.offsetX = 0, this.offsetY = 0, this.color = new Color, this.color.r = 255, this.color.g = 255, this.color.b = 255, this.color.a = 255
            }, isOverlay: function () {
                return !0
            }, destroy: function () {
                this.textureID && Sprite.destroyTexture(this.textureID)
            }
        }, "MapOverlay"), e = [], f = Class.extend({
            init: function () {
                this.mbUnblockable = !1, this.spawnTiles = [], this.goalTiles = [], this.wayPoints = [], this.renderFirstIndicatorList = [], this.renderLastIndicatorList = [], this.currentLeader = null, this.lastSpawned = null, this.currentLeaderID = -1, this.lastSpawnedID = -1
            }, destroy: function () {
            }, isFixedPath: function () {
                return this.wayPoints.length >= 2
            }, serialize: function (a) {
                a.serializeInt(this, "currentLeaderID"), a.serializeInt(this, "lastSpawnedID")
            }, GetIsUnblockable: function () {
                return this.mbUnblockable
            }, GetPlayer: function () {
                return this.mPlayer
            }, SetIsUnblockable: function (a) {
                mbUnblockable = a
            }, SetPlayer: function (a) {
                mPlayer = a - 1
            }
        }, "Path"), g = Class.extend({
            init: function () {
                this.enemyFile = null, this.enemyClass = null
            }, destroy: function () {
            }
        }, "AmbientClass"), h = Class.extend({
            init: function () {
                this.streams = [], this.resourceReward = 0;
                var a;
                this.healthModifiers = new Array(kNumDifficultyLevels);
                for (a = 0; a < kNumDifficultyLevels; a++)
                    this.healthModifiers[a] = 1
            }, destroy: function () {
            }
        }, "Wave"), j = Class.extend({
            init: function () {
                this.enemyFile = null, this.enemyCount = 0, this.pathIndex = -1, this.spawnRate = 0, this.healthModifier = 1, this.delayStart = 0, this.indicatorOpacity = 0, this.indicatorArrowAnimTimer = 0, this.indicatorArrowOpacity = 1
            }, destroy: function () {
            }
        }, "Stream"), k = Class.extend({
            init: function () {
                this.enemyClass = null, this.timeBeforeNextSpawn = 0, this.numSpawnsRemaining = 0, this.numEnemiesAlive = 0, this.healthModifier = 0, this.timeSinceStreamStart = 0
            }, destroy: function () {
                this.enemyClass = null
            }, serialize: function (a) {
                a.serializeDouble(this, "timeBeforeNextSpawn"), a.serializeInt(this, "numSpawnsRemaining"), a.serializeInt(this, "numEnemiesAlive")
            }
        }, "StreamStats"), l = Class.extend({
            init: function () {
                this.timerValue = 0
            }, getTimer: function () {
                return this.timerValue
            }, setTimer: function (a) {
                this.timerValue = a
            }, destroy: function () {
            }
        }, "StopLightTimer"), m = Class.extend({
            init: function (a) {
                this.parallaxX = 0, this.parallaxY = 0, this.musicFilename = null, this.backgroundFilename = null, this.backgroundWithGridFilename = null, this.backgroundOverlay = null, this.enemyClassMap = {}, this.ambientClasses = [], this.towerClassList = [], this.particleSystemInstanceList = [], this.particleSystemExList = [], this.notLastParticleSystemExList = [], this.mapParticleSystemExList = [], this.pathList = [], this.waves = [], this.blockedTiles = [], this.pathOnlyTiles = [], this.buildOnlyTiles = [], this.crossOverTiles = [], this.crossOverLights = [], this.reservedTiles = [], this.renderFirstOverlayList = [], this.renderLastOverlayList = [], this.renderBeforeAirUnitsOverlayList = [], this.entityOverlayList = [], this.replayEvents = null, this.projectileList = null, this.enemyList = null, this.ambientList = null, this.towerList = null, this.renderList = null, this.renderFirstListUnsorted = null, this.renderLastList = null, this.tileGrid = null, this.placementGridVertices = null, this.placementGridTileCount = 0, this.streamStatsList = null, this.gameHudForm = null, this.pathFinder = null, this.name = null, this.filename = null, this.view = a, this.difficultyLevel = kDifficultyLevel.Medium, this.gameplayMode = kGameplayMode.Classic, this.playbackSpeed = kPlaybackSpeed.Normal, this.minBuildTileX = 0, this.minBuildTileY = 0, this.maxBuildTileX = 0, this.maxBuildTileY = 0, this.minVisibleTileX = 0, this.maxVisibleTileX = 0, this.minVisibleTileY = 0, this.maxVisibleTileY = 0, this.endlessModeWaveStart = 0, this.endlessModeWaveEnd = 0, this.endlessModeHealthModifier = 1, this.streamIndicatorWaveIndex = -1, this.imageWidth = 0, this.imageHeight = 0, this.maxPlacementGridOpacity = .2, this.ignoreGameNotifies = !1, this.restoringGameState = !1, this.highScoreAchieved = !1, this.showStreamIndicatorArrows = !0, this.initialFocusRegion = kDirection.None, this.startingHealth = 20, this.startingResources = 15, this.tilesAcross = 0, this.tilesDown = 0, this.tileWidth = 32, this.tileHeight = 32, this.offsetX = 0, this.offsetY = 0, this.gameCountdownTimer = kTimeBeforeFirstWave, this.waveIndex = -1, this.unboundedWaveIndex = -1, this.numSpawnsRemaining = 0, this.numEnemiesAlive = 0, this.currentPlayTimeTick = 0, this.currentReplayEventIndex = 0, this.gameState = kGameState.Paused, this.savedGameState = kGameState.Paused, this.firstWave = !1, this.isCompleted = !1, this.timeTrialTimer = 0, this.isWaveCapped = !0, Payment && Payment.isPaidUser(bindSelf(function (a) {
                    this.isWaveCapped = !a
                }, this)), this.numPlayers = 1, this.isCoop = !1, this.player = new Array(kMaxPlayers);
                for (var b = 0; b < kMaxPlayers; b++)
                    this.player[b] = null;
                var c = NextStep.UserDefaults.standardUserDefaults();
                this.placementGridShowOptions = c.boolForKey(kGridPreference)
            }, clearAndRelease: function () {
                if (!this.enemyList)
                    return;
                for (var a = 0; a < this.enemyList.length; a++)
                    this.enemyList[a].followedBy.length > 0 && (this.enemyList[a] = null);
                this.waves.destroy(), this.pathList.destroy(), this.blockedTiles.destroy(), this.pathOnlyTiles.destroy(), this.buildOnlyTiles.destroy(), this.projectileList.destroy(), this.enemyList.destroy(), this.ambientList.destroy(), this.towerList.destroy(), this.renderList.destroy(), this.streamStatsList.destroy(), this.renderFirstListUnsorted.destroy(), this.renderLastList.destroy(), this.renderFirstOverlayList.destroy(), this.renderLastOverlayList.destroy(), this.renderBeforeAirUnitsOverlayList.destroy(), this.entityOverlayList.destroy(), this.replayEvents = null, this.name = null, this.filename = null, this.musicFilename = null, this.backgroundFilename = null, this.backgroundWithGridFilename = null;
                for (var b = 0; b < kMaxPlayers; b++)
                    this.player[b] = null;
                for (var c = this.towerClassList.length - 1; c >= 0; c--)
                    this.towerClassList[c].isCommon || this.towerClassList[c].destroy(), this.towerClassList.removeAtIndexFast(c);
                Object.destroy(this.enemyClassMap), this.ambientClasses.destroy(), this.particleSystemExList.destroy(), this.notLastParticleSystemExList.destroy(), this.mapParticleSystemExList.destroy(), this.crossOverTiles.destroy(), this.crossOverLights.destroy(), this.reservedTiles.destroy(), this.tileGrid.destroy();
                var d = ParticleManager.ClearPool();
                console.assert(d)
            }, SetGameplayMode: function (a) {
                this.gameplayMode = a, this.gameplayMode == kGameplayMode.TimeTrial && (this.timeTrialTimer = 900)
            }, reset: function () {
                this.SetGameplayMode(this.gameplayMode), this.ignoreGameNotifies = !0, AchievementManager.GetSingleton().ClearAchievementQueue();
                for (var a = 0; a < this.numPlayers; a++)
                    this.player[a] = null, this.player[a] = new Player;
                for (var a = 0; a < this.numPlayers; a++)
                    EAGLView.sStartingMoney >= 0 ? this.player[a].SetResources(EAGLView.sStartingMoney) : this.player[a].SetResources(this.startingResources), EAGLView.sStartingHealth > 0 ? this.SetPlayerHealth(a, EAGLView.sStartingHealth) : this.SetPlayerHealth(a, this.startingHealth);
                var b = NextStep.UserDefaults.standardUserDefaults();
                this.placementGridShowOptions = b.boolForKey(kGridPreference), this.streamIndicatorWaveIndex = -1, this.gameCountdownTimer = kTimeBeforeFirstWave, EAGLView.sStartingWave > 0 ? (this.waveIndex = EAGLView.sStartingWave - 1, this.unboundedWaveIndex = EAGLView.sStartingWave - 1) : (this.waveIndex = -1, this.unboundedWaveIndex = -1), this.suddenDeathWaveIndex = this.player[0].GetHealth() == 1 ? 0 : -1, this.numSpawnsRemaining = 0, this.numEnemiesAlive = 0, this.currentPlayTimeTick = 0, this.buySellCounter = 0, this.currentReplayEventIndex = 0, this.gameState = kGameState.Paused, this.savedGameState = kGameState.Paused, this.highScoreAchieved = !1, this.firstWave = !1, this.isCompleted = !1, this.appliedEndGameScoreBonus = !1, this.projectileList && this.projectileList.destroy(), this.enemyList && this.enemyList.destroy(), this.towerList && this.towerList.destroy();
                for (var c = 0; c < this.crossOverLights.length; c++)
                    this.crossOverLights[c].setTimer(0);
                for (var d = 0; d < this.pathList.length; d++)
                    this.pathList[d].currentLeader = null, this.pathList[d].lastSpawned = null;
                for (var e = 0; e < m.sSharedParticleSystemList.length; ++e) {
                    var f = m.sSharedParticleSystemList[e];
                    f.clearAllParticles()
                }
                this.particleSystemExList = [], this.notLastParticleSystemExList = [], this.replayEvents = [], this.projectileList = [], this.enemyList = [], this.ambientList = [], this.towerList = [], this.renderList = [], this.renderFirstListUnsorted = [], this.renderLastList = [], this.streamStatsList = [], this.reservedTiles = [];
                for (var e = 0; e < this.entityOverlayList.length; e++)
                    this.renderList.push(this.entityOverlayList[e]);
                this.ignoreGameNotifies = !1, this.initTileGrid(), this.gameHudForm = this.view.userInterface.getFormWithName(kGameHudFormName), console.assert(this.gameHudForm !== null, "The game hud form has not been initialized."), Preloader.dependOn(bindSelf(function () {
                    this.gameHudForm.reset()
                }, this), this.gameHudForm), this.spawnAmbients()
            }, restoreGameState: function () {
                var a;
                a = sprintf("%s", kSaveGameFilename), BinaryFile.doesFileExist(a, bindSelf(function (b) {
                    if (b) {
                        var c = new BinaryFile;
                        c.openFile(a, kFilePermissions.Read), Preloader.dependOn(bindSelf(function () {
                            this.serialize(c), c.close(), this.highScoreAchieved && this.view.userInterface.switchToPopupForm(kNewHighScoreFormName)
                        }, this), c)
                    }
                }, this))
            }, resumeGameState: function () {
                this.gameState = this.savedGameState
            }, saveGameState: function () {
                if (this.gameState != kGameState.Stopped && (this.player[0].GetHealth() > 0 || this.highScoreAchieved)) {
                    var a = new BinaryFile;
                    a.openFile(kSaveGameFilename, kFilePermissions.Write), this.serialize(a);
                    var b = a.close();
                    return a = null, m.SaveAchievementCounters(), b
                }
                return !1
            }, getMapImageWidth: function () {
                return this.imageWidth
            }, getMapImageHeight: function () {
                return this.imageHeight
            }, getTilePosAsPoint: function (a, b) {
                console.assert(a >= 0 && a < this.tilesAcross * this.tilesDown, "Invalid tile grid index '%d' requested.", a), b.x = Math.floor(a % this.tilesAcross), b.y = Math.floor(a / this.tilesAcross)
            }, getTilePos: function (a, b) {
                console.assert(a >= 0 && a < this.tilesAcross * this.tilesDown, "Invalid tile grid index '%d' requested.", a), b(Math.floor(a % this.tilesAcross), Math.floor(a / this.tilesAcross))
            }, getTilePosFromWorldPosX: function (a, b, c) {
                c(Math.floor((a - this.offsetX) / this.tileWidth), Math.floor((b - this.offsetY) / this.tileHeight))
            }, getWorldPosFromTileGridIndex: function (a, b) {
                console.assert(a >= 0 && a < this.tilesAcross * this.tilesDown, "Invalid tile grid index '%d' requested.", a);
                var c = Math.floor(a % this.tilesAcross), d = Math.floor(a / this.tilesAcross);
                b.x = Math.floor(c * this.tileWidth + this.offsetX), b.y = Math.floor(d * this.tileHeight + this.offsetY)
            }, applyEndGameScoreBonus: function () {
                if (!this.appliedEndGameScoreBonus) {
                    for (var a = 0; a < this.numPlayers; a++)
                        this.gameplayMode != kGameplayMode.TimeTrial && this.addScore(this.player[a].GetHealth() * kRemainingHealthScoreBonus, a), this.addScore(this.player[a].GetResources() * kRemainingResourceScoreBonus, a);
                    this.appliedEndGameScoreBonus = !0
                }
            }, handleGameEnd: function () {
                var a = AchievementManager.GetSingleton();
                a.SetNumGamesPlayed(a.GetNumGamesPlayed() + 1), this.checkUnlockablesAtWaveIndex(this.unboundedWaveIndex), this.applyEndGameScoreBonus();
                if (m.sbRecordReplay)
                    for (var b = 0; b < this.numPlayers; b++) {
                        var c = new WaveReplayEvent(kReplayEventType.Wave, this.currentPlayTimeTick, this.player[b].GetHealth(), this.player[b].GetResources(), this.player[b].GetScore());
                        this.replayEvents.push(c)
                    }
                var d = NextStep.UserDefaults.standardUserDefaults(), e = ScoresForm.getHighScoresKeyForMap(this.name);
                this.highScoreAchieved = !0;
                if (d[e]) {
                    var f = d[e], g = 0;
                    for (var b = 0; b < this.numPlayers; b++)
                        g += this.player[b].GetScore();
                    var h = 0;
                    for (var i = 0; i < f.length; i++) {
                        var j = f[i], k = j.gameplayMode;
                        if (k == this.gameplayMode) {
                            var l = j.score;
                            if (g >= l)
                                break;
                            h++, h > kNumHighScoreEntries && (this.highScoreAchieved = !1)
                        }
                    }
                }
                this.highScoreAchieved && this.autosave(), m.deleteSaveGame(), m.SaveAchievementCounters(), a.UnlockAchievementFromCounters()
            }, getTileGridIndex: function (a, b) {
                return Math.floor(this.tilesAcross * Math.floor(b) + Math.floor(a))
            }, GetPlayer: function (a) {
                return a = a || kDefaultPlayerID, console.assert(a < this.numPlayers, "Invalid player index."), this.player[a]
            }, addProjectile: function (a) {
                this.projectileList.push(a)
            }, SetPlayerHealth: function (a, b) {
                console.assert(0 <= a && a < this.numPlayers), this.gameplayMode == kGameplayMode.SuddenDeath ? b = 1 : this.gameplayMode == kGameplayMode.TimeTrial && (b = 999999), this.player[a].SetHealth(b)
            }, loadFromFile: function (a, b) {
                console.info("Loading map file: '%s'.", this.filename);
                var c = null;
                c = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE(this.getDirectoryName(), this.filename, "map"), console.assert(c != null, "Unable to load map file '%s'.", a);
                var d = this.loadFromURL(c, b, 1);
                return d
            }, loadFromURL: function (a, b, c, d) {
                this.dependencies = 1, this.isLoaded = !1;
                var e = function (a) {
                    return function () {
                        --a.dependencies <= 0 && (a.isLoaded = !0, a.onload && a.onload.call(this), d && d.call(this, !0))
                    }
                }(this);
                Preloader.loadText(a, function (a) {
                    var d = a.match(/<\?xml.*\?>/);
                    d && (a = a.substring(d[0].length));
                    var i = window.jQuery(a), k = i, n = b || {
                        updateLoadingProgressWithPercent: function () {
                        }
                    };
                    n.updateLoadingProgressWithPercent(0);
                    var o = function (a) {
                        return function (b, c, d, e) {
                            return a[e || c] = d(b.attr(c)) || a[e || c]
                        }
                    }(this), p = function (a) {
                        return function (b, c, d) {
                            return o(b, c, a, d)
                        }
                    }, q = p(parseFloat), r = p(parseInt), s = p(function (a) {
                        return a
                    }), t, u = function (a, b, c, d) {
                        var e = a.attr(b);
                        return e ? c(e) : d
                    }, v = function (a, b, c) {
                        for (var d = c.length - 1; d >= 0; d--)
                            b(a, c[d][0], c[d][1] || c[d][0])
                    };
                    v(k, r, [["width", "imageWidth"], ["height", "imageHeight"], ["tilesAcross", "tilesAcross"], ["tilesDown"], ["tileWidth"], ["tileHeight"], ["minBuildTileX"], ["minBuildTileY"], ["maxBuildTileX"], ["maxBuildTileY"], ["minVisibleTileX"], ["maxVisibleTileX"], ["minVisibleTileY"], ["maxVisibleTileY"], ["offsetX"], ["offsetY"], ["startingHealth"], ["startingResources"], ["endlessModeWaveStart"], ["endlessModeWaveEnd"]]), v(k, q, [["gridOpacity", "maxPlacementGridOpacity"], ["endlessModeHealthModifier"]]), v(k, s, [["musicFile", "musicFilename"]]), o(k, "initialFocusRegion", function (a) {
                        return Enum.findValue(kDirection, a, !0, kDirection.None)
                    }), xmlBoolAttr(xmlAttr(this, k), "showStreamIndicatorArrows", "showStreamIndicatorArrows", "yes"), this.offsetX -= this.tileWidth * this.minVisibleTileX, this.offsetY -= this.tileHeight * this.minVisibleTileY, console.assert(this.tilesAcross > 0, "Invalid tile grid width."), console.assert(this.tilesDown > 0, "Invalid tile grid height.");
                    var w = [], x = [], y = [], z = [], A = [], B = [];
                    for (var C = k.children().first(); C.length > 0; C = C.next())
                        if (C[0].localName == "BlockedTiles".toLowerCase())
                            for (var D = C.children().first(); D.length > 0; D = D.next()) {
                                var E = -1, F = -1;
                                t = D.attr("tileX"), t && (E = parseInt(t)), t = D.attr("tileY"), t && (F = parseInt(t)), console.assert(E >= 0, "Invalid tile position."), console.assert(F >= 0, "Invalid tile position.");
                                var G = this.getTileGridIndex(E, F);
                                if (D[0].localName == "PathOnly".toLowerCase())
                                    this.pathOnlyTiles.push(G);
                                else if (D[0].localName == "BuildOnly".toLowerCase())
                                    this.buildOnlyTiles.push(G);
                                else if (D[0].localName == "Crossover".toLowerCase()) {
                                    var H = new Point;
                                    H.x = E, H.y = F, this.crossOverTiles.push(H);
                                    var I = new l;
                                    I.setTimer(0), this.crossOverLights.push(I), this.pathOnlyTiles.push(G)
                                } else
                                    this.blockedTiles.push(G)
                            }
                        else if (C[0].localName == "Towers".toLowerCase() && this.gameplayMode != kGameplayMode.TowerCombo1 && this.gameplayMode != kGameplayMode.TowerCombo2 || C[0].localName == "Towers1".toLowerCase() && this.gameplayMode == kGameplayMode.TowerCombo1 || C[0].localName == "Towers2".toLowerCase() && this.gameplayMode == kGameplayMode.TowerCombo2)
                            for (var J = C.children().first(); J.length > 0; J = J.next())
                                y.push(J);
                        else if (C[0].localName == "ParticleSystems".toLowerCase())
                            for (var K = C.children().first(); K.length > 0; K = K.next())
                                z.push(K);
                        else if (C[0].localName == "Layers".toLowerCase())
                            for (var L = C.children().first(); L.length > 0; L = L.next().length > 0 ? L.next() : L.children().first())
                                x.push(L);
                        else if (C[0].localName == "Paths".toLowerCase())
                            for (var M = C.children().first(); M.length > 0; M = M.next()) {
                                var N = new f, O = !1, P = 1;
                                t = M.attr("unblockable"), t && (O = t == "true" ? !0 : !1), t = M.attr("player"), t && (P = parseInt("player")), N.SetIsUnblockable(O), N.SetPlayer(P), w.push(M[0].localName);
                                for (var Q = M.children().first(); Q.length > 0; Q = Q.next()) {
                                    var R = Q;
                                    if (R[0].localName == "SpawnTiles".toLowerCase())
                                        for (var S = Q.children().first(); S.length > 0; S = S.next()) {
                                            var E = u(S, "tileX", parseInt, -1), F = u(S, "tileY", parseInt, -1);
                                            console.assert(E >= 0, "Invalid tile position."), console.assert(F >= 0, "Invalid tile position.");
                                            var G = this.getTileGridIndex(E, F);
                                            N.spawnTiles.push(G)
                                        }
                                    else if (R[0].localName == "GoalTiles".toLowerCase())
                                        for (var T = Q.children().first(); T.length > 0; T = T.next()) {
                                            var E = u(T, "tileX", parseInt, -1), F = u(T, "tileY", parseInt, -1);
                                            console.assert(E >= 0, "Invalid tile position."), console.assert(F >= 0, "Invalid tile position.");
                                            var G = this.getTileGridIndex(E, F);
                                            N.goalTiles.push(G)
                                        }
                                    else if (R[0].localName == "Indicators".toLowerCase())
                                        for (var U = Q.children().first(); U.length > 0; U = U.next())
                                            A.push(U), B.push(N);
                                    else if (R[0].localName == "Waypoints".toLowerCase())
                                        for (var V = Q.children().first(); V.length > 0; V = V.next()) {
                                            var E = u(V, "tileX", parseInt, -1), F = u(V, "tileY", parseInt, -1);
                                            console.assert(E >= 0, "Invalid tile position."), console.assert(F >= 0, "Invalid tile position.");
                                            var G = this.getTileGridIndex(E, F);
                                            N.wayPoints.push(G)
                                        }
                                }
                                this.pathList.push(N)
                            }
                        else if (C[0].localName == "DifficultyModifiers".toLowerCase())
                            for (var W = C.children().first(); W.length > 0; W = W.next()) {
                                var X = function (a) {
                                    return function (b, c, d) {
                                        return u(a, b, c, d)
                                    }
                                }(W), Y = xmlAttr(null, W), Z = Y("startWave", -1, parseInt), $ = Y("endWave", -1, parseInt), _ = Y("healthModifier", 1, parseFloat), ab = Y("difficulty", kDifficultyLevel.Medium, parseEnum(kDifficultyLevel, kDifficultyLevel.Medium));
                                Z -= 1, $ -= 1, console.assert(Z >= 0 && Z < this.waves.length, "Start wave '%d' invalid for difficulty modifier.", Z), console.assert($ >= 0 && $ < this.waves.length, "End wave '%d' invalid for difficulty modifier.", $), console.assert(ab >= kDifficultyLevel.Easy && ab < kNumDifficultyLevels, "Invalid difficulty level '%d' specified for difficulty modifier.", ab);
                                var bb;
                                for (bb = Z; bb <= $; bb++) {
                                    var cb = this.waves[bb];
                                    console.assert(!cb, "Invalid wave specified for difficulty modifier."), console.assert(cb.healthModifiers[ab] < 1 + kPrecisionErrorCorrection && cb.healthModifiers[ab] > 1 - kPrecisionErrorCorrection, "Duplicate health modifier '%.2f' found for wave index '%d' with difficulty level '%d'.", _, bb, ab), cb.healthModifiers[ab] = _
                                }
                            }
                        else if (C[0].localName == "Ambients".toLowerCase())
                            for (var db = C.children().first(); db.length > 0; db = db.next()) {
                                var X = function (a) {
                                    return function (b, c, d) {
                                        return u(a, b, c, d)
                                    }
                                }(db), eb = new g, fb = db, gb = xmlAttr(eb, fb);
                                gb("enemyFile", "enemyFile", parseString), gb("spawnTileX", "spawnTileX", parseInt), gb("spawnTileY", "spawnTileY", parseInt);
                                if (!this.enemyClassMap[eb.enemyFile]) {
                                    var hb;
                                    hb = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Enemies", eb.enemyFile, "enemy");
                                    if (hb) {
                                        var ib = Preloader.dependOn(this, new EnemyClass(hb, m.sSharedParticleSystemExClassList));
                                        this.enemyClassMap[eb.enemyFile] = ib
                                    }
                                }
                                eb.enemyClass = this.enemyClassMap[eb.enemyFile], this.ambientClasses.push(eb)
                            }
                        else if (C[0].localName == "Waves".toLowerCase())
                            for (var jb = C.children().first(); jb.length > 0; jb = jb.next()) {
                                var cb = new h, X = function (a) {
                                    return function (b, c, d) {
                                        return u(a, b, c, d)
                                    }
                                }(jb);
                                cb.resourceReward = X("resourceReward", parseInt, 0);
                                for (var kb = jb.children().first(); kb.length > 0; kb = kb.next()) {
                                    var lb = new j, X = function (a) {
                                        return function (b, c, d) {
                                            return u(a, b, c, d)
                                        }
                                    }(jb), fb = kb, mb = null, nb = xmlAttr(lb, kb);
                                    nb("enemyFile", "enemyFile", parseString), nb("count", "enemyCount", parseInt), nb("spawnRate", "spawnRate", parseFloat), nb("delayStart", "delayStart", parseFloat), nb("healthModifier", "healthModifier", parseFloat), mb = xmlAttr(null, fb)("path", mb, parseString), console.assert(lb.enemyCount > 0, "Invalid number of enemies in stream."), console.assert(mb !== null, "Path undefined for stream.");
                                    var ob = !1;
                                    for (var pb = 0; pb < w.length; pb++) {
                                        var qb = w[pb];
                                        if (mb.toLowerCase() == qb) {
                                            lb.pathIndex = pb, ob = !0;
                                            break
                                        }
                                    }
                                    console.assert(ob, "Invalid path name '%s' defined for stream.", mb), mb = null;
                                    if (!this.enemyClassMap[lb.enemyFile]) {
                                        var hb;
                                        hb = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Enemies", lb.enemyFile, "enemy");
                                        if (hb) {
                                            var ib = Preloader.dependOn(this, new EnemyClass(hb, m.sSharedParticleSystemExClassList));
                                            this.enemyClassMap[lb.enemyFile] = ib
                                        }
                                    }
                                    cb.streams.push(lb)
                                }
                                this.waves.push(cb)
                            }
                    this.endlessModeWaveStart = this.endlessModeWaveStart - 1, this.endlessModeWaveEnd = this.endlessModeWaveEnd - 1, this.endlessModeWaveStart = MIN(MAX(this.endlessModeWaveStart, 0), this.waves.length - 1), this.endlessModeWaveEnd = MIN(MAX(this.endlessModeWaveEnd, 0), this.waves.length - 1);
                    var rb = c, sb = 0;
                    for (var tb = 0; tb < y.length; ++tb) {
                        var J = y[tb];
                        rb += m.getFileSizeOfTowerResourceDataFromNode(J)
                    }
                    for (var tb = 0; tb < z.length; ++tb) {
                        var K = z[tb];
                        rb += m.getFileSizeOfParticleSystemResourceDataFromNode(K)
                    }
                    for (var tb = 0; tb < x.length; ++tb) {
                        var L = x[tb];
                        rb += m.getFileSizeOfOverlayResourceDataFromNode(L)
                    }
                    for (var tb = 0; tb < A.length; ++tb) {
                        var U = A[tb];
                        rb += m.getFileSizeOfOverlayResourceDataFromNode(U)
                    }
                    sb += c, n.updateLoadingProgressWithPercent(sb / rb);
                    for (var tb = 0; tb < x.length; ++tb) {
                        var L = x[tb];
                        Preloader.dependOn(function (a) {
                            return function () {
                                sb += m.getFileSizeOfOverlayResourceDataFromNode(a), n.updateLoadingProgressWithPercent(sb / rb)
                            }
                        }(L), this.createMapOverlayFromNode(L, this.renderFirstOverlayList, this.renderLastOverlayList, this.renderBeforeAirUnitsOverlayList))
                    }
                    for (var tb = 0; tb < y.length; ++tb) {
                        var J = y[tb], ub = this.createTowerFromNode(J);
                        ub && !ub.isLoaded ? Preloader.dependOn(function (a) {
                            return function () {
                                sb += m.getFileSizeOfTowerResourceDataFromNode(a), n.updateLoadingProgressWithPercent(sb / rb)
                            }
                        }(J), ub) : (sb += m.getFileSizeOfTowerResourceDataFromNode(J), n.updateLoadingProgressWithPercent(sb / rb))
                    }
                    for (var vb = 0; vb < A.length; vb++) {
                        var U = A[vb], N = B[vb];
                        Preloader.dependOn(function (a) {
                            return function () {
                                sb += m.getFileSizeOfOverlayResourceDataFromNode(a), n.updateLoadingProgressWithPercent(sb / rb)
                            }
                        }(U), this.createMapOverlayFromNode(U, N.renderFirstIndicatorList, N.renderLastIndicatorList))
                    }
                    for (var tb = 0; tb < z.length; ++tb) {
                        var K = z[tb], wb = this.createParticleSystemFromNode(K);
                        wb && !wb.isLoaded ? Preloader.dependOn(function (a) {
                            return function () {
                                sb += m.getFileSizeOfParticleSystemResourceDataFromNode(K), n.updateLoadingProgressWithPercent(sb / rb)
                            }
                        }(K), wb) : (sb += m.getFileSizeOfTowerResourceDataFromNode(J), n.updateLoadingProgressWithPercent(sb / rb))
                    }
                    B.clear(), e()
                }, this)
            }, getDirectoryName: function (a) {
                a = a || this.filename;
                var b = "Maps/?", c = "", d = a;
                for (var e = 0; e < kNumOfficialMaps; e++) {
                    var f = m.getOfficialMapNameForIndex(e);
                    if (a.match(new RegExp("^" + f))) {
                        d = f;
                        break
                    }
                }
                return b = b.slice(0, 5) + d.charAt(0).toUpperCase(), c = b, c += d.slice(1), c
            }, updatePauseButtonState: function () {
                for (var a = 0; a < this.numPlayers; a++)
                    this.gameHudForm.playbackButton[a] !== null && (this.gameHudForm.playbackButton[a].isToggled = this.gameState == kGameState.Paused)
            }, spawnAmbients: function () {
                for (var a = 0; a < this.ambientClasses.length; a++) {
                    var b = this.ambientClasses[a], c = new Enemy(b.enemyClass, this);
                    c.streamIndex = -1, c.enemyClass.type != kEnemyType.Air ? this.renderFirstListUnsorted.push(c) : this.renderLastList.push(c), this.ambientList.push(c);
                    var d = new Point2;
                    d.x = b.spawnTileX, d.y = b.spawnTileY, c.pathNodes.push(d), d = new Point2, d.x = b.spawnTileX, d.y = b.spawnTileY, c.pathNodes.push(d), d = new Point2, d.x = b.spawnTileX + 1, d.y = b.spawnTileY, c.pathNodes.push(d), c.currentPathNode = c.pathNodes.length - 1;
                    if (c.pathNodes.length > 0) {
                        var e = c.pathNodes[c.currentPathNode];
                        c.x = e.x * this.tileWidth + this.tileWidth * .5 + this.offsetX, c.y = e.y * this.tileHeight + this.tileHeight * .5 + this.offsetY
                    }
                }
            }, updateAmbientPathing: function (a) {
                for (var b = 0; b < this.ambientList.length; b++) {
                    var c = this.ambientList[b];
                    if (c.currentPathNode == 1) {
                        var d = c.pathNodes[1], e = c.pathNodes[2];
                        e.x = d.x, e.y = d.y;
                        var f = !1;
                        while (!f) {
                            var g = Math.RandomInt(2), h = e.x, i = e.y;
                            switch (g) {
                                case 0:
                                    h--;
                                    break;
                                case 1:
                                    h++;
                                    break;
                                case 2:
                                    i--;
                                    break;
                                case 3:
                                    i++;
                                    break;
                                default:
                                    console.warn("Invalid random direction.")
                            }
                            if (h < 0 || h > this.tilesAcross || i < 0 || i > this.tilesDown)
                                continue;
                            var j = getTileGridIndex(h, i);
                            this.tileGrid[j] != Entity.blockedTile() && (d.x = h, d.y = i, c.currentPathNode = c.pathNodes.length - 1, f = !0)
                        }
                        c.update(a)
                    }
                }
            }, startNewGame: function () {
                var a = LocalizeString("TouchScreenBeginPlay", null);
                this.gameHudForm.setStatusString(a, 0, !0)
            }, createMapOverlayFromNode: function (a, b, e, f) {
                var g = new d, h = null, i = null, j = 0, k = 0, l = !1, m = a, n = a, o = xmlAttr(null, n), p = xmlAttr(g, n);
                h = o("image", h, parseString), i = o("gridImage", i, parseString), p("x", "x", parseFloat), p("y", "y", parseFloat), j = o("width", j, parseFloat), k = o("height", k, parseFloat), p("renderCount", "renderCount", parseInt), p("opacity", "opacity", parseFloat), p("scrollSpeedX", "scrollSpeedX", parseFloat), p("scrollSpeedY", "scrollSpeedY", parseFloat), p("depthOffset", "depthOffset", parseFloat), xmlBoolAttr(p, "applyDistortion", "applyDistortion"), p("anchorX", "anchorX", parseFloat), p("anchorY", "anchorY", parseFloat), p("contractTexCoords", "contractTexCoords", function (a) {
                    return a == "yes"
                }), o("renderOrder", l, bindSelf(function (a) {
                    l = !0, a == "first" ? b.push(g) : a == "last" ? e.push(g) : a == "before_air_units" ? (console.assert(f != null), f.push(g)) : a == "entity" ? (this.entityOverlayList.push(g), g.renderAsEntity = !0) : (console.assert(!1), l = !1)
                }, this)), p("fullscreen", "fullscreen", function (a) {
                    return a == "yes"
                }), p("blendingMode", "blendingMode", parseEnum(c, c.Alpha)), p("color", "color", Color.parse);
                var q, r, s = i !== null && this.placementGridShowOptions ? i : h;
                g.textureID = Sprite.initTextureFromFile(this.getDirectoryName(), s, bindSelf(function (a, b) {
                    q = a, r = b, g.width = j < kPrecisionErrorCorrection ? q : j * this.imageWidth, g.height = k < kPrecisionErrorCorrection ? r : k * this.imageHeight, g.renderAsEntity && (g.anchorX = g.x + g.anchorX * g.width, g.anchorY = g.y + g.anchorY * g.height)
                }, this));
                if (!g.textureID.isLoaded)
                    Preloader.dependOn(g, g.textureID), Preloader.dependOn(this, g);
                else {
                    var t = Preloader.dependOn(g);
                    setTimeout(function () {
                        t()
                    }, 0)
                }
                return a[0].localName == "background" && (this.backgroundOverlay = g, this.backgroundFilename = null, this.backgroundWithGridFilename = null, this.backgroundFilename = h, this.backgroundWithGridFilename = i), h = null, i = null, l || e.push(g), g
            }, createParticleSystemFromNode: function (a) {
                var b = null, c = 0, d = 0, e = 0, f = a;
                b = xmlAttr(null, f)("file", b, parseString), c = xmlAttr(null, f)("x", c, parseFloat), d = xmlAttr(null, f)("y", d, parseFloat), e = xmlAttr(null, f)("emissionAngle", e, parseFloat), console.assert(b !== null, "A particle system file was not specified."), c *= this.imageWidth, d *= this.imageHeight, e = DEGREES_TO_RADIANS(e);
                var g, h = null;
                return g = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", StringExt.stringByDeletingPathExtension(b), StringExt.pathExtension(b)), g !== null && StringExt.pathExtension(b) == "fx" && (h = new ParticleSystemExClass, h.Load(g), Preloader.dependOn(this, h), Preloader.dependOn(bindSelf(function () {
                    var a = new ParticleSystemEx(h, new Vector3f(c, d, 0));
                    this.mapParticleSystemExList.push(a)
                }, this), h)), b = null, h
            }, createTowerFromNode: function (a) {
                var b = null, c = a, d = a;
                b = xmlAttr(null, d)("file", b, parseString), console.assert(b != null, "A tower file was not specified.");
                var e = null, f = b.match(/(.*)\.(\w+)$/)[1], g = !1;
                for (var h = 0; h < m.sTowerClassList.length; ++h) {
                    e = m.sTowerClassList[h];
                    if (e.getFilename() == f) {
                        this.towerClassList.push(e), g = !0;
                        break
                    }
                }
                if (!g) {
                    var i;
                    i = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Towers", f, b.match(/(.*)\.(\w+)$/)[2]), b = null, i != null && (e = Preloader.dependOn(this, new TowerClass(i, m.sProjectileClassList, m.sSharedParticleSystemList, m.sSharedParticleSystemExClassList)), console.assert(e != null, "Error loading tower class."), this.towerClassList.push(e))
                } else
                    b = null;
                return e
            }, notifyEnemyHasBeenRemoved: function (a) {
                !!this.ignoreGameNotifies
            }, notifyEnemyHasEscaped: function (a) {
                var b = a.enemyClass.damage;
                if (!this.ignoreGameNotifies) {
                    this.numEnemiesAlive--;
                    var c = this.streamStatsList[a.streamIndex];
                    c.numEnemiesAlive--
                }
                if (!a.isFollower) {
                    this.player[0].SubtractHealth(b);
                    for (var d = 0; d < this.numPlayers; d++)
                        this.player[d].GetHealth() == 1 && this.suddenDeathWaveIndex == -1 && (this.suddenDeathWaveIndex = this.unboundedWaveIndex);
                    this.view.audioConfig.enemyEscapesSoundEffect.play(), MapSelectionForm.bIsMultiplayerCoop || !MapSelectionForm.bIsMultiplayer ? (this.gameHudForm.queueHeartbeat(1.2, 0), this.gameHudForm.queueHeartbeat(1.35, 0)) : (this.gameHudForm.queueHeartbeat(1.2, a.targetPlayer), this.gameHudForm.queueHeartbeat(1.35, a.targetPlayer))
                }
                for (var d = 0; d < this.numPlayers; d++)
                    if (this.player[d].GetHealth() <= 0) {
                        SoundEngine.PauseAllEffects(), this.gameHudForm.setFadeOutMusic(!0), this.view.audioConfig.failureTuneSoundEffect !== null && this.view.audioConfig.failureTuneSoundEffect.play(), this.gameState = kGameState.Paused, this.applyEndGameScoreBonus(), this.gameHudForm.setShowEndGameText(GameHudForm.kShowEndGameText.Defeat);
                        var e = AchievementManager.GetSingleton();
                        this.gameplayMode != kGameplayMode.Endless && e.SetNumPersonalTrueDefeats(e.GetNumPersonalTrueDefeats() + 1), e.SetNumPersonalDefeats(e.GetNumPersonalDefeats() + 1);
                        break
                    }
            }, autosave: function () {
                var a = !0;
                a && this.saveGameState()
            }, beginNextWave: function () {
                if (this.gameplayMode == kGameplayMode.Endless || this.waveIndex + 1 < this.waves.length) {
                    this.unboundedWaveIndex++;
                    var a;
                    for (a = this.projectileList.length - 1; a >= 0; a--) {
                        var b = this.projectileList[a];
                        console.assert(b !== null, "Projectile not initialized."), b.invalidateTarget()
                    }
                    var c = AchievementManager.GetSingleton();
                    c.SetTotalWavesPlayed(c.GetTotalWavesPlayed() + 1), this.suddenDeathWaveIndex != -1 && this.unboundedWaveIndex == this.suddenDeathWaveIndex + kDiehardAchievementWaveCount && c.UnlockAchievement(kAchievement.DieHard);
                    if (m.sbRecordReplay)
                        for (var d = 0; d < this.numPlayers; d++) {
                            var e = new WaveReplayEvent(kReplayEventType.Wave, this.currentPlayTimeTick, this.player[d].GetHealth(), this.player[d].GetResources(), this.player[d].GetScore());
                            this.replayEvents.push(e)
                        }
                    this.checkUnlockablesAtWaveIndex(this.unboundedWaveIndex), this.firstWave && this.view.audioConfig.beginGameSoundEffect !== null && (this.view.audioConfig.beginGameSoundEffect.play(), this.firstWave = !1), this.beginWave(this.unboundedWaveIndex, !1), this.autosave(), this.unpauseGame();
                    for (var f = 0; f < this.numPlayers; f++)
                        this.gameHudForm.playbackButton[f] !== null && (this.gameHudForm.playbackButton[f].isToggled = !1)
                }
            }, beginWave: function (a, b) {
                console.info("Initiating round %d.", a + 1), console.assert(this.numEnemiesAlive == 0, "A wave cannot be ended until all enemies are killed.");
                var c = null, d = null, e = a - 1, f = 0;
                if (e >= 0) {
                    while (e >= this.waves.length)
                        f++, e -= this.endlessModeWaveEnd - this.endlessModeWaveStart + 1;
                    c = this.waves[e]
                }
                this.waveIndex = a, f = 0;
                if (this.waveIndex >= this.waves.length)
                    while (this.waveIndex > this.endlessModeWaveEnd)
                        f++, this.waveIndex -= this.endlessModeWaveEnd - this.endlessModeWaveStart + 1;
                d = this.waves[this.waveIndex];
                var g = f * (this.endlessModeWaveEnd - this.endlessModeWaveStart + 1) * this.endlessModeHealthModifier;
                this.numSpawnsRemaining = 0;
                var h;
                for (h = 0; h < d.streams.length; h++) {
                    var i = d.streams[h], j = null;
                    c !== null && h < c.streams.length && (j = c.streams[h]);
                    var l = null;
                    h >= this.streamStatsList.length ? (l = new k, this.streamStatsList.push(l)) : l = this.streamStatsList[h];
                    if (b || c === null || j === null || c !== null && j !== null && j.enemyFile != i.enemyFile) {
                        l.enemyClass !== null && (l.enemyClass = null);
                        var m, n;
                        for (n = 0; n < h; n++) {
                            m = d.streams[n];
                            if (m.enemyFile == i.enemyFile) {
                                var o = this.streamStatsList[n];
                                l.enemyClass = o.enemyClass;
                                break
                            }
                        }
                        if (l.enemyClass === null) {
                            var p = null;
                            p = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Enemies", i.enemyFile, "enemy"), p !== null && (l.enemyClass = this.enemyClassMap[i.enemyFile], console.assert(l.enemyClass !== null, "Error loading enemy class file '%s'.", p))
                        }
                    }
                    l.numSpawnsRemaining = i.enemyCount, l.timeBeforeNextSpawn = -i.delayStart, l.timeSinceStreamStart = -i.delayStart, l.healthModifier = i.healthModifier + i.healthModifier * g, this.numSpawnsRemaining += i.enemyCount
                }
                while (this.streamStatsList.length > d.streams.length)
                    this.streamStatsList.removeLastObject();
                this.updateStatusTextWithCurrentRound()
            }, unpauseGame: function () {
                SoundEngine.ResumeAllEffects(), this.gameState = kGameState.Running
            }, pauseGame: function () {
                SoundEngine.PauseAllEffects(), this.gameState = kGameState.Paused
            }, update: function (a) {
                var b = NextStep.UserDefaults.standardUserDefaults();
                if (this.placementGridShowOptions != b.boolForKey(kGridPreference)) {
                    this.placementGridShowOptions = b.boolForKey(kGridPreference);
                    var c = this.backgroundWithGridFilename != null && this.placementGridShowOptions ? this.backgroundWithGridFilename : this.backgroundFilename, d = Sprite.initTextureFromFile(this.getDirectoryName(), c);
                    d.isGrid = this.placementGridShowOptions, Preloader.dependOn(bindSelf(function () {
                        this.placementGridShowOptions == d.isGrid && (this.backgroundOverlay.textureID && Sprite.destroyTexture(this.backgroundOverlay.textureID), this.backgroundOverlay.textureID = d)
                    }, this), d)
                }
                this.gameState == kGameState.Running && this.gameplayMode ==
                    kGameplayMode.TimeTrial && this.gameHudForm != null && !this.gameHudForm.firstTouch && this.unboundedWaveIndex >= 0 && (this.timeTrialTimer -= a / (this.playbackSpeed == kPlaybackSpeed.Fast ? kPlaybackModifier.Fast : kPlaybackModifier.Normal), this.timeTrialTimer = MAX(this.timeTrialTimer, 0), this.timeTrialTimer <= 1 && (SoundEngine.PauseAllEffects(), this.gameState = kGameState.Paused, this.applyEndGameScoreBonus(), this.gameHudForm.setShowEndGameText(GameHudForm.kShowEndGameText.TimesUp)));
                if (this.gameState == kGameState.Running || a < kPrecisionErrorCorrection) {
                    m.sbRecordReplay || this.handleReplayEvents();
                    var e = AchievementManager.GetSingleton();
                    if (this.waveIndex == -1) {
                        this.gameCountdownTimer -= a;
                        var f = LocalizeString("GameCountdownTimer", null);
                        if (this.gameCountdownTimer <= 0) {
                            f = sprintf(f, 0), this.gameHudForm.setStatusString(f, 0, !1), this.firstWave = !0;
                            var g;
                            for (g = 0; g < kNumOfficialMaps - 1; g++) {
                                var h = m.getOfficialMapNameForIndex(g);
                                if (this.name == h) {
                                    e.IncrementNumTimesMapPlayed(g);
                                    break
                                }
                            }
                            this.beginNextWave()
                        } else
                            f = sprintf(f, this.gameCountdownTimer + 1), this.gameHudForm.setStatusString(f, this.gameCountdownTimer, !1)
                    }
                    e.Update(a);
                    if (this.waveIndex >= 0 && !this.isCompleted) {
                        this.currentPlayTimeTick++, this.enemyList.length == 0 && this.numSpawnsRemaining <= 0 && this.beginNextWave();
                        var i = this.waves[this.waveIndex];
                        for (var j = 0; j < i.streams.length; j++) {
                            var k = i.streams[j], l = this.streamStatsList[j];
                            l.timeSinceStreamStart += a, l.timeBeforeNextSpawn += a;
                            if (l.numSpawnsRemaining > 0) {
                                k.indicatorOpacity += kStreamIndicatorFadeSpeed * a, k.indicatorOpacity = MIN(k.indicatorOpacity, 1);
                                if (l.timeBeforeNextSpawn >= 0) {
                                    this.numSpawnsRemaining--, this.numEnemiesAlive++, l.timeBeforeNextSpawn -= k.spawnRate, l.numEnemiesAlive++, l.numSpawnsRemaining--;
                                    var n = new Enemy(l.enemyClass, this);
                                    n.streamIndex = j;
                                    var o = 1;
                                    switch (this.difficultyLevel) {
                                        case kDifficultyLevel.Easy:
                                            o = .7;
                                            break;
                                        case kDifficultyLevel.Medium:
                                            o = 1;
                                            break;
                                        case kDifficultyLevel.Hard:
                                            o = 1.2
                                    }
                                    this.gameplayMode == kGameplayMode.SuddenDeath && (o *= kGameplayMode_SuddenDeath_EnemyHealthModifier), n.applyHealthModifier(l.healthModifier * o * i.healthModifiers[this.difficultyLevel]);
                                    var p = this.pathList[k.pathIndex].spawnTiles[0];
                                    n.targetPlayer = this.pathList[k.pathIndex].GetPlayer();
                                    var q = new Point;
                                    this.getWorldPosFromTileGridIndex(p, q), n.tileGridIndex = p, n.x = q.x, n.y = q.y, this.addEnemy(n);
                                    if (n.pathNodes.length > 0) {
                                        var r = n.pathNodes[n.currentPathNode];
                                        n.x = r.x * this.tileWidth + this.tileWidth * .5 + this.offsetX, n.y = r.y * this.tileHeight + this.tileHeight * .5 + this.offsetY
                                    }
                                    n = null
                                }
                            } else {
                                var s = 3;
                                l.timeSinceStreamStart >= s * .5 ? (k.indicatorOpacity -= kStreamIndicatorFadeSpeed * a, k.indicatorOpacity = MAX(k.indicatorOpacity, 0)) : (k.indicatorOpacity += kStreamIndicatorFadeSpeed * a, k.indicatorOpacity = MIN(k.indicatorOpacity, 1))
                            }
                        }
                    }
                    if (this.numSpawnsRemaining == 0 && this.numEnemiesAlive == 0 && this.streamIndicatorWaveIndex < this.waves.length && this.streamIndicatorWaveIndex >= 0) {
                        var t = this.waves[this.streamIndicatorWaveIndex];
                        for (var j = 0; j < t.streams.length; j++) {
                            var k = t.streams[j];
                            k.indicatorOpacity += kStreamIndicatorFadeSpeed * a, k.indicatorOpacity = MIN(k.indicatorOpacity, 1)
                        }
                    }
                    for (var u = 0; u < this.crossOverTiles.length; u++)
                        if (this.crossOverLights[u].getTimer() > 0) {
                            var v = this.crossOverLights[u].getTimer();
                            v -= a, this.crossOverLights[u].setTimer(v)
                        }
                    var w;
                    for (w = this.renderFirstListUnsorted.length - 1; w >= 0; w--) {
                        var x = this.renderFirstListUnsorted[w];
                        console.assert(x != null, "Entity not initialized.");
                        var y = x.update(a);
                        if (y) {
                            if (x.isEnemy())
                                console.assert(this.enemyList.containsObject(x), "Cannot find the enemy in the enemy list."), this.enemyList.removeFast(x);
                            else if (x.isTower()) {
                                var z = x.tileGridIndex;
                                this.tileGrid[z] = null, this.updatePathingForAllEnemies(), this.towerList.removeFast(x)
                            }
                            x.destroy(), this.renderFirstListUnsorted.removeAtIndexFast(w)
                        }
                    }
                    var w;
                    for (w = this.renderList.length - 1; w >= 0; w--) {
                        var x = this.renderList[w];
                        console.assert(x != null, "Entity not initialized.");
                        var y = x.update(a), n = x.isEnemy() ? x : null;
                        if (x.renderFirst && n != null && n.enemyClass.renderFirstUponDeath)
                            this.renderFirstListUnsorted.push(x), this.renderList.removeAtIndexFast(w);
                        else if (y) {
                            if (x.isEnemy())
                                console.assert(this.enemyList.containsObject(x), "Cannot find the enemy in the enemy list."), this.enemyList.removeFast(x);
                            else if (x.isTower()) {
                                var z = x.tileGridIndex;
                                this.tileGrid[z] = null, this.updatePathingForAllEnemies(), this.towerList.removeFast(x)
                            }
                            x.destroy(), this.renderList.removeAtIndexFast(w)
                        }
                    }
                    var w;
                    for (w = this.renderLastList.length - 1; w >= 0; w--) {
                        var x = this.renderLastList[w];
                        console.assert(x != null, "Entity not initialized.");
                        var y = x.update(a), n = x.isEnemy() ? x : null;
                        if (x.renderFirst && n != null && n.enemyClass.renderFirstUponDeath)
                            this.renderFirstListUnsorted.push(x), this.renderLastList.removeAtIndexFast(w);
                        else if (y) {
                            if (x.isEnemy())
                                console.assert(this.enemyList.containsObject(x), "Cannot find the enemy in the enemy list."), this.enemyList.removeFast(x);
                            else if (x.isTower()) {
                                var z = x.tileGridIndex;
                                this.tileGrid[z] = null, this.updatePathingForAllEnemies(), this.towerList.removeFast(x)
                            }
                            x.destroy(), this.renderLastList.removeAtIndexFast(w)
                        }
                    }
                    var A;
                    for (A = this.projectileList.length - 1; A >= 0; A--) {
                        var B = this.projectileList[A];
                        console.assert(B != null, "Projectile not initialized.");
                        var C = B.update(a);
                        C && (B.destroy(), this.projectileList.removeAtIndexFast(A))
                    }
                    for (var D = 0; D < m.sSharedParticleSystemList.length; ++D) {
                        var E = m.sSharedParticleSystemList[D];
                        E.update(a)
                    }
                    for (var D = 0; D < this.particleSystemInstanceList.length; ++D) {
                        var F = this.particleSystemInstanceList[D], E = F.particleSystem;
                        F.emissionTimer -= a, F.emissionTimer <= 0 && (F.emissionTimer = E.getEmissionInterval(), E.spawnParticle(F.x, F.y, F.emissionAngle)), E.update(a)
                    }
                    var G = Math.FtoI(a * 1e3);
                    for (var D = this.particleSystemExList.length - 1; D >= 0; D--) {
                        var H = this.particleSystemExList[D];
                        if (!H) {
                            console.warn("invalid particle system:", H), this.particleSystemExList.removeAtIndexFast(D);
                            continue
                        }
                        H.Update(G), H.GetParticleCount() <= 0 && (H.destroy(), this.particleSystemExList.removeAtIndexFast(D))
                    }
                    for (var D = this.notLastParticleSystemExList.length - 1; D >= 0; D--) {
                        var H = this.notLastParticleSystemExList[D];
                        if (!H) {
                            console.warn("invalid particle system:", H), this.notLastParticleSystemExList.removeAtIndexFast(D);
                            continue
                        }
                        H.Update(G), H.GetParticleCount() <= 0 && (H.destroy(), this.notLastParticleSystemExList.removeAtIndexFast(D))
                    }
                    for (var D = this.mapParticleSystemExList.length - 1; D >= 0; D--) {
                        var H = this.mapParticleSystemExList[D];
                        H.Update(G), H.GetParticleCount() <= 0 && (H.destroy(), this.mapParticleSystemExList.removeAtIndexFast(D))
                    }
                    this.updateAmbientPathing(a), this.waveIndex >= 0 && !this.isCompleted && this.enemyList.length == 0 && this.numSpawnsRemaining <= 0 && this.endWave()
                }
            }, removePathLeader: function (a) {
                var b = this.waves[this.waveIndex], c = b.streams[a.streamIndex];
                for (var d = 0; d < this.pathList.length; d++)
                    if (c.pathIndex == d && this.pathList[d].currentLeader !== null) {
                        this.pathList[d].currentLeader !== null && this.pathList[d].currentLeader.uniqueID == a.uniqueID && (this.pathList[d].currentLeader = null);
                        if (this.pathList[d].lastSpawned !== null) {
                            if (this.pathList[d].lastSpawned.uniqueID == a.uniqueID) {
                                var e = this.pathList[d];
                                e.lastSpawned = null, a.spawnedBefore !== null && a.spawnedBefore.health > 0 && (e.lastSpawned = a.spawnedBefore)
                            }
                            for (var f = 0; f < this.enemyList.length; f++) {
                                var g = this.enemyList[f];
                                g.leader !== null && g.leader.uniqueID == a.uniqueID && (g.leader = null), g.spawnedBefore !== null && g.spawnedBefore.uniqueID == a.uniqueID && (g.spawnedBefore = null, a.spawnedBefore !== null && a.spawnedBefore.health > 0 && (g.spawnedBefore = a.spawnedBefore))
                            }
                        }
                    }
            }, markMapAsComplete: function (a) {
                var b = NextStep.UserDefaults.standardUserDefaults(), c = sprintf("%s%s", a, kMapSettingsKey), d = b[c];
                d || (d = {}, b[c] = d, b.synchronize());
                var e = !d[kMapCompleteKey] && d[kMapCompleteKey];
                e || (d[kMapCompleteKey] = !0, b[c] = d, b.synchronize())
            }, notifyEnemyHasBeenKilled: function (a) {
                if (!this.ignoreGameNotifies) {
                    this.numEnemiesAlive--;
                    var b = this.streamStatsList[a.streamIndex];
                    b.numEnemiesAlive--;
                    var c = AchievementManager.GetSingleton();
                    c.SetTotalKills(c.GetTotalKills() + 1), a.enemyClass.type == kEnemyType.Air && c.SetTotalAirUnitsKilled(c.GetTotalAirUnitsKilled() + 1)
                }
            }, endWave: function () {
                var a = this.waves[this.waveIndex], b = a.resourceReward;
                for (var c = 0; c < this.numPlayers; c++)
                    this.player[c].AddResources(b);
                this.gameState != kGameState.Stopped && console.assert(this.numEnemiesAlive == 0, "A wave cannot be ended until all enemies are killed.");
                if (this.gameplayMode != kGameplayMode.Endless && this.waveIndex + 1 >= this.waves.length || this.isWaveCapped && this.waveIndex + 1 > kUnpaidWaveCap) {
                    SoundEngine.PauseAllEffects();
                    if (!this.isWaveCapped) {
                        var d = m.unlockGameplayMode(kGameplayMode.Extended, this.name);
                        d !== null && this.gameHudForm.queueUnlockable(d), d = m.unlockGameplayMode(kGameplayMode.Endless, this.name), d !== null && this.gameHudForm.queueUnlockable(d)
                    }
                    this.isCompleted = !0, this.applyEndGameScoreBonus(), this.markMapAsComplete(this.name), this.gameHudForm.setShowEndGameText(GameHudForm.kShowEndGameText.Victory);
                    var e = AchievementManager.GetSingleton();
                    e.SetNumPersonalVictories(e.GetNumPersonalVictories() + 1), this.player[0].GetHealth() == 1 && this.gameplayMode != kGameplayMode.SuddenDeath && e.UnlockAchievement(kAchievement.PurpleHeart), this.player[0].GetHealth() == this.startingHealth && this.gameplayMode != kGameplayMode.SuddenDeath && this.gameplayMode != kGameplayMode.TimeTrial && e.SetNumFlawlessVictories(e.GetNumFlawlessVictories() + 1), this.gameHudForm.setFadeOutMusic(!0), this.view.audioConfig.victoryTuneSoundEffect !== null && this.view.audioConfig.victoryTuneSoundEffect.play();
                    var f = m.sSharedParticleSystemExClassList[0], g = new ParticleSystemEx(f, new Vector3f(this.imageWidth / 2, this.imageHeight, 0));
                    this.particleSystemExList.push(g)
                }
            }, checkUnlockablesAtWaveIndex: function (a) {
                var b;
                for (b = 0; b < kNumOfficialMaps; b++) {
                    var c = m.getOfficialMapNameForIndex(b);
                    if (this.name == c) {
                        if (a == kWaveToUnlockMaps && b + 1 <= kMapIndexSingleplayerLast) {
                            var d = m.unlockMap(m.getOfficialMapNameForIndex(b + 1));
                            d !== null && this.gameHudForm.queueUnlockable(d)
                        }
                        var e = kAchievement.Undefined;
                        if (a == kWaveToUnlockFirstMapSpecificOpenFeintAchievement)
                            switch (this.difficultyLevel) {
                                case kDifficultyLevel.Easy:
                                    switch (b) {
                                        case kMapIndex.Grasslands:
                                            e = kAchievement.ThatWasEasy;
                                            break;
                                        case kMapIndex.Crossroads:
                                            e = kAchievement.ThatWasEasyAgain;
                                            break;
                                        case kMapIndex.Drylands:
                                            e = kAchievement.Cakewalk;
                                            break;
                                        case kMapIndex.Skyway:
                                            e = kAchievement.NowWereTalking;
                                            break;
                                        case kMapIndex.Frostbite:
                                            e = kAchievement.MakeMyDay;
                                            break;
                                        case kMapIndex.Rainforest:
                                            e = kAchievement.WelcomeToTheJungle;
                                            break;
                                        case kMapIndex.Volcano:
                                            e = kAchievement.GoWithTheFlow;
                                            break;
                                        case kMapIndex.Cave:
                                            e = kAchievement.EasyShine;
                                            break;
                                        default:
                                            console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                    }
                                    break;
                                case kDifficultyLevel.Medium:
                                    switch (b) {
                                        case kMapIndex.Grasslands:
                                            e = kAchievement.FieldPrivate;
                                            break;
                                        case kMapIndex.Crossroads:
                                            e = kAchievement.BaseSergeant;
                                            break;
                                        case kMapIndex.Drylands:
                                            e = kAchievement.DesertLieutenant;
                                            break;
                                        case kMapIndex.Skyway:
                                            e = kAchievement.SkyCaptain;
                                            break;
                                        case kMapIndex.Frostbite:
                                            e = kAchievement.IceColonel;
                                            break;
                                        case kMapIndex.Rainforest:
                                            e = kAchievement.JungleRecon;
                                            break;
                                        case kMapIndex.Volcano:
                                            e = kAchievement.FireAway;
                                            break;
                                        case kMapIndex.Cave:
                                            e = kAchievement.ThroughTheLookingGlass;
                                            break;
                                        default:
                                            console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                    }
                                    break;
                                case kDifficultyLevel.Hard:
                                    switch (b) {
                                        case kMapIndex.Grasslands:
                                            e = kAchievement.FieldSergeant;
                                            break;
                                        case kMapIndex.Crossroads:
                                            e = kAchievement.BaseOfficer;
                                            break;
                                        case kMapIndex.Drylands:
                                            e = kAchievement.DesertCommander;
                                            break;
                                        case kMapIndex.Skyway:
                                            e = kAchievement.SkyCommodore;
                                            break;
                                        case kMapIndex.Frostbite:
                                            e = kAchievement.IceGeneral;
                                            break;
                                        case kMapIndex.Rainforest:
                                            e = kAchievement.GreenBeret;
                                            break;
                                        case kMapIndex.Volcano:
                                            e = kAchievement.FlameThrower;
                                            break;
                                        case kMapIndex.Cave:
                                            e = kAchievement.MasterMiner;
                                            break;
                                        default:
                                            console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                    }
                                    break;
                                default:
                                    console.warn("Achievements not defined for this difficulty level.")
                            }
                        if (a == kWaveToUnlockSecondMapSpecificOpenFeintAchievement)
                            switch (this.gameplayMode) {
                                case kGameplayMode.Classic:
                                    switch (this.difficultyLevel) {
                                        case kDifficultyLevel.Easy:
                                            switch (b) {
                                                case kMapIndex.Grasslands:
                                                    e = kAchievement.BootCampJunior;
                                                    break;
                                                case kMapIndex.Crossroads:
                                                    e = kAchievement.BootCampSenior;
                                                    break;
                                                case kMapIndex.Drylands:
                                                    e = kAchievement.BootCampDominator;
                                                    break;
                                                case kMapIndex.Skyway:
                                                    e = kAchievement.BootCampMaster;
                                                    break;
                                                case kMapIndex.Frostbite:
                                                    e = kAchievement.BootCampComplete;
                                                    break;
                                                case kMapIndex.Rainforest:
                                                    e = kAchievement.MudOnYourBoots;
                                                    break;
                                                case kMapIndex.Volcano:
                                                    e = kAchievement.Firecracker;
                                                    break;
                                                case kMapIndex.Cave:
                                                    e = kAchievement.CrystalClear;
                                                    break;
                                                default:
                                                    console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                            }
                                            break;
                                        case kDifficultyLevel.Medium:
                                            switch (b) {
                                                case kMapIndex.Grasslands:
                                                    e = kAchievement.FieldCorporal;
                                                    break;
                                                case kMapIndex.Crossroads:
                                                    e = kAchievement.BaseMajor;
                                                    break;
                                                case kMapIndex.Drylands:
                                                    e = kAchievement.DesertCaptain;
                                                    break;
                                                case kMapIndex.Skyway:
                                                    e = kAchievement.SkyColonel;
                                                    break;
                                                case kMapIndex.Frostbite:
                                                    e = kAchievement.IceBrigadier;
                                                    break;
                                                case kMapIndex.Rainforest:
                                                    e = kAchievement.NaturalBornSniper;
                                                    break;
                                                case kMapIndex.Volcano:
                                                    e = kAchievement.Firewalker;
                                                    break;
                                                case kMapIndex.Cave:
                                                    e = kAchievement.DiamondsAreForever;
                                                    break;
                                                default:
                                                    console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                            }
                                            break;
                                        case kDifficultyLevel.Hard:
                                            switch (b) {
                                                case kMapIndex.Grasslands:
                                                    e = kAchievement.FieldRunner;
                                                    break;
                                                case kMapIndex.Crossroads:
                                                    e = kAchievement.BaseRunner;
                                                    break;
                                                case kMapIndex.Drylands:
                                                    e = kAchievement.DesertRunner;
                                                    break;
                                                case kMapIndex.Skyway:
                                                    e = kAchievement.SkyRunner;
                                                    break;
                                                case kMapIndex.Frostbite:
                                                    e = kAchievement.IceRunner;
                                                    break;
                                                case kMapIndex.Rainforest:
                                                    e = kAchievement.Mudrunner;
                                                    break;
                                                case kMapIndex.Volcano:
                                                    e = kAchievement.Lavarunner;
                                                    break;
                                                case kMapIndex.Cave:
                                                    e = kAchievement.Crystalrunner;
                                                    break;
                                                default:
                                                    console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                            }
                                            break;
                                        default:
                                            console.warn("Achievements not defined for this difficulty level.")
                                    }
                                    break;
                                case kGameplayMode.Extended:
                                    switch (this.difficultyLevel) {
                                        case kDifficultyLevel.Easy:
                                            switch (b) {
                                                case kMapIndex.Grasslands:
                                                    e = kAchievement.GrasslandsBronze;
                                                    break;
                                                case kMapIndex.Crossroads:
                                                    e = kAchievement.CrossroadsBronze;
                                                    break;
                                                case kMapIndex.Drylands:
                                                    e = kAchievement.DrylandsBronze;
                                                    break;
                                                case kMapIndex.Skyway:
                                                    e = kAchievement.SkywayBronze;
                                                    break;
                                                case kMapIndex.Frostbite:
                                                    e = kAchievement.FrostbiteBronze;
                                                    break;
                                                case kMapIndex.Rainforest:
                                                    e = kAchievement.MudslideBronze;
                                                    break;
                                                case kMapIndex.Volcano:
                                                    e = kAchievement.LavaflowBronze;
                                                    break;
                                                case kMapIndex.Cave:
                                                    e = kAchievement.CrystalCavesBronze;
                                                    break;
                                                default:
                                                    console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                            }
                                            break;
                                        case kDifficultyLevel.Medium:
                                            switch (b) {
                                                case kMapIndex.Grasslands:
                                                    e = kAchievement.GrasslandsSilver;
                                                    break;
                                                case kMapIndex.Crossroads:
                                                    e = kAchievement.CrossroadsSilver;
                                                    break;
                                                case kMapIndex.Drylands:
                                                    e = kAchievement.DrylandsSilver;
                                                    break;
                                                case kMapIndex.Skyway:
                                                    e = kAchievement.SkywaySilver;
                                                    break;
                                                case kMapIndex.Frostbite:
                                                    e = kAchievement.FrostbiteSilver;
                                                    break;
                                                case kMapIndex.Rainforest:
                                                    e = kAchievement.MudslideSilver;
                                                    break;
                                                case kMapIndex.Volcano:
                                                    e = kAchievement.LavaflowSilver;
                                                    break;
                                                case kMapIndex.Cave:
                                                    e = kAchievement.CrystalCavesSilver;
                                                    break;
                                                default:
                                                    console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                            }
                                            break;
                                        case kDifficultyLevel.Hard:
                                            switch (b) {
                                                case kMapIndex.Grasslands:
                                                    e = kAchievement.GrasslandsGold;
                                                    break;
                                                case kMapIndex.Crossroads:
                                                    e = kAchievement.CrossroadsGold;
                                                    break;
                                                case kMapIndex.Drylands:
                                                    e = kAchievement.DrylandsGold;
                                                    break;
                                                case kMapIndex.Skyway:
                                                    e = kAchievement.SkywayGold;
                                                    break;
                                                case kMapIndex.Frostbite:
                                                    e = kAchievement.FrostbiteGold;
                                                    break;
                                                case kMapIndex.Rainforest:
                                                    e = kAchievement.MudslideGold;
                                                    break;
                                                case kMapIndex.Volcano:
                                                    e = kAchievement.LavaflowGold;
                                                    break;
                                                case kMapIndex.Cave:
                                                    e = kAchievement.CrystalCavesGold;
                                                    break;
                                                default:
                                                    console.warn("Map-specific achievement not defined for map with name '%s'.", this.name)
                                            }
                                            break;
                                        default:
                                            console.warn("Achievements not defined for this difficulty level.")
                                    }
                            }
                        a == kWaveToUnlockThirdMapSpecificOpenFeintAchievement && this.difficultyLevel == kDifficultyLevel.Hard && (e = kAchievement.Daredevil), a == kWaveToUnlockFourthMapSpecificOpenFeintAchievement && (this.difficultyLevel == kDifficultyLevel.Easy ? e = kAchievement.TimeFlies : this.difficultyLevel == kDifficultyLevel.Medium && (e = kAchievement.StrategicGenius)), a == kWaveToUnlockFifthMapSpecificOpenFeintAchievement && this.difficultyLevel == kDifficultyLevel.Easy && (e = kAchievement.ItsBetterToBeAlive), a == kWaveToUnlockSixthMapSpecificOpenFeintAchievement && this.difficultyLevel == kDifficultyLevel.Easy && (e = kAchievement.Insane);
                        if (e != kAchievement.Undefined) {
                            var f = AchievementManager.GetSingleton();
                            f.UnlockAchievement(e)
                        }
                    }
                }
            }, addEnemy: function (a) {
                var b, c;
                this.getTilePos(a.tileGridIndex, function (a, d) {
                    b = a, c = d
                }), console.assert(this.waveIndex >= 0, "Cannot add an enemy to a wave with an invalid index.");
                var d = this.waves[this.waveIndex], e = d.streams[a.streamIndex];
                if (!this.pathList[e.pathIndex].isFixedPath()) {
                    var f = this.pathList[e.pathIndex].goalTiles;
                    console.assert(f.length > 0, "No goal tiles defined for the map."), this.pathFinder.findPath(b, c, this.tileGrid, a.pathNodes, this, a.enemyClass.type == kEnemyType.Air, f)
                } else {
                    a.onFixedPath = !0;
                    var g = [], h = [], i = [], j = [], b, c;
                    for (var k = this.pathList[e.pathIndex].wayPoints.length - 1; k >= 1; k--) {
                        i.push(this.pathList[e.pathIndex].wayPoints[k]), j.push(this.pathList[e.pathIndex].wayPoints[k - 1]);
                        var l = j[0];
                        this.getTilePos(l, function (a, d) {
                            b = a, c = d
                        }), this.pathFinder.findPath(b, c, this.tileGrid, h, this, !0, i);
                        for (var m = 0; m < h.length; m++)
                            g.push(h[m]);
                        k != 1 && g.removeLastObject(), h.removeAllObjects(), i.removeAllObjects(), j.removeAllObjects()
                    }
                    for (var n = 0; n < g.length; n++)
                        a.pathNodes.push(g[n]);
                    g = null, h = null, i = null, j = null
                }
                a.currentPathNode = a.pathNodes.length - 1, a.currentPathNode < 0 && (a.currentPathNode = 0), a.enemyClass.type != kEnemyType.Air ? this.renderList.push(a) : this.renderLastList.push(a);
                var o = !0;
                for (var p = 0; p < this.pathList.length; p++) {
                    var q = this.pathList[p];
                    if (e.pathIndex == p) {
                        if (a.enemyClass.isFollower == 1 && this.pathList[p].currentLeader !== null) {
                            a.leader = null, a.leader = q.currentLeader, q.currentLeader.followedBy.push(a), a.leaderID = a.leader.uniqueID;
                            if (a.leader.effectList.length > 0)
                                for (var r = 0; r < a.leader.effectList.length; r++) {
                                    var s = !1;
                                    for (var t = 0; t < a.effectList.length; t++)
                                        a.leader.effectList[r].projectileClass == a.effectList[t].projectileClass && (a.effectList[t].timeRemaining = a.leader.effectList[r].timeRemaining, s = !0);
                                    if (s == 0) {
                                        var u = new Effect;
                                        u.opacity = 0, a.effectList.push(u), u.timeRemaining = a.leader.effectList[r].timeRemaining, u.projectileClass = a.leader.effectList[r].projectileClass, u.towerTechLevelIndex = a.leader.effectList[r].towerTechLevelIndex, u.projectileClassIndex = a.leader.effectList[r].projectileClassIndex
                                    }
                                }
                        } else
                            a.enemyClass.isFollower == 0 && (q.currentLeader = null, q.currentLeader = a, q.currentLeaderID = a.uniqueID);
                        if (o && a.spawnedBeforeID == -1) {
                            var q = this.pathList[p];
                            q.lastSpawned !== null && (a.spawnedBefore = null, a.spawnedBefore = q.lastSpawned, a.spawnedBeforeID = a.spawnedBefore.uniqueID), q.lastSpawned = null, q.lastSpawned = a, q.lastSpawnedID = a.uniqueID
                        }
                    }
                }
                o == 0 && (a.health = 0), this.enemyList.push(a)
            }, render: function (a) {
                if (this.gameState == kGameState.Stopped)
                    return;
                this.gameState == kGameState.Paused && (a = 0), this.renderOverlaysInList(this.renderFirstOverlayList, a);
                var b = null;
                this.streamIndicatorWaveIndex = this.numSpawnsRemaining == 0 && this.numEnemiesAlive == 0 ? this.waveIndex + 1 : this.waveIndex;
                if (this.gameplayMode == kGameplayMode.Endless && this.streamIndicatorWaveIndex >= this.waves.length)
                    while (this.streamIndicatorWaveIndex > this.endlessModeWaveEnd)
                        this.streamIndicatorWaveIndex -= this.endlessModeWaveEnd - this.endlessModeWaveStart + 1;
                if (this.streamIndicatorWaveIndex >= 0 && this.streamIndicatorWaveIndex < this.waves.length) {
                    b = this.waves[this.streamIndicatorWaveIndex];
                    for (var c = 0; c < b.streams.length; c++) {
                        var d = b.streams[c], e = !0;
                        for (var f = c + 1; f < b.streams.length; f++) {
                            var g = b.streams[f];
                            if (d.pathIndex == g.pathIndex) {
                                g.indicatorOpacity = MAX(d.indicatorOpacity, g.indicatorOpacity), e = !1;
                                break
                            }
                        }
                        if (e && d.indicatorOpacity > kPrecisionErrorCorrection) {
                            var h = this.pathList[d.pathIndex].renderFirstIndicatorList;
                            if (h.length > 0) {
                                for (var i = 0; i < h.length; ++i) {
                                    var j = h[i];
                                    j.opacity = d.indicatorOpacity
                                }
                                this.renderOverlaysInList(h, a)
                            }
                        }
                    }
                }
                this.renderList.sort(Entity.sortComparison), this.renderLastList.sort(Entity.sortComparison);
                for (var i = 0; i < this.renderFirstListUnsorted.length; ++i) {
                    var k = this.renderFirstListUnsorted[i];
                    console.assert(k != null, "Entity not initialized."), k.render(a)
                }
                for (var i = 0; i < this.renderList.length; ++i) {
                    var k = this.renderList[i];
                    console.assert(k != null, "Entity not initialized."), k.isOverlay() ? this.renderOverlay(k, a) : k.render(a)
                }
                for (var i = this.notLastParticleSystemExList.length - 1; i >= 0; i--) {
                    var l = this.notLastParticleSystemExList[i];
                    l.Render(Math.FtoI(a * 1e3))
                }
                this.renderOverlaysInList(this.renderBeforeAirUnitsOverlayList, a);
                for (var i = 0; i < this.renderLastList.length; ++i) {
                    var k = this.renderLastList[i];
                    console.assert(k != null, "Entity not initialized."), k.render(a)
                }
                this.renderOverlaysInList(this.renderLastOverlayList, a);
                if (b !== null)
                    for (var c = 0; c < b.streams.length; c++) {
                        var d = b.streams[c], e = !0;
                        for (var f = c + 1; f < b.streams.length; f++) {
                            var g = b.streams[f];
                            if (d.pathIndex == g.pathIndex) {
                                g.indicatorOpacity = MAX(d.indicatorOpacity, g.indicatorOpacity), e = !1;
                                break
                            }
                        }
                        if (e && d.indicatorOpacity > kPrecisionErrorCorrection) {
                            var n = this.pathList[d.pathIndex].renderLastIndicatorList;
                            if (n.length > 0) {
                                for (var i = 0; i < n.length; ++i) {
                                    var j = n[i];
                                    j.opacity = d.indicatorOpacity
                                }
                                this.renderOverlaysInList(n, a)
                            }
                        }
                    }
                for (var i = 0; i < this.projectileList.length; ++i) {
                    var o = this.projectileList[i];
                    console.assert(o != null, "Projectile not initialized."), o.render(a)
                }
                for (var i = 0; i < m.sSharedParticleSystemList.length; ++i) {
                    var p = m.sSharedParticleSystemList[i];
                    p.render(a)
                }
                for (var i = 0; i < this.particleSystemInstanceList.length; ++i)
                    ;
                for (var i = this.mapParticleSystemExList.length - 1; i >= 0; i--) {
                    var l = this.mapParticleSystemExList[i];
                    l.Render(Math.FtoI(a * 1e3))
                }
                for (var i = this.particleSystemExList.length - 1; i >= 0; i--) {
                    var l = this.particleSystemExList[i];
                    l.Render(Math.FtoI(a * 1e3))
                }
            }, renderOverlaysInList: function (a, b) {
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    this.renderOverlay(d, b)
                }
            }, renderOverlay: function (a, b) {
                var d = RenderDevice.createVertexTexCoordArray(4), e = RenderDevice.createColorArray(4, 255), f = RenderDevice.getRenderDevice(), g = this.imageWidth, h = this.imageHeight;
                f.setTextureWithID(a.textureID);
                if (a.fullscreen) {
                    var i = this.gameHudForm.camera.centerX / g * a.depthOffset, j = this.gameHudForm.camera.centerY / h * a.depthOffset;
                    a.offsetX += b * -a.scrollSpeedX, a.offsetY += b * -a.scrollSpeedY, f.setTextureAddressingMode(kTextureAddressMode.Wrap), d[0] = this.gameHudForm.camera.left, d[1] = this.gameHudForm.camera.top, d[2] = 0, d[5] = this.gameHudForm.camera.right, d[6] = this.gameHudForm.camera.top, d[7] = 0, d[10] = this.gameHudForm.camera.left, d[11] = this.gameHudForm.camera.bottom, d[12] = 0, d[15] = this.gameHudForm.camera.right, d[16] = this.gameHudForm.camera.bottom, d[17] = 0;
                    var k = new Float32Array(8);
                    k[0] = a.offsetX + i, k[1] = a.offsetY + j, k[2] = a.offsetX + g / a.width + i, k[3] = a.offsetY + j, k[4] = a.offsetX + i, k[5] = a.offsetY + h / a.height + j, k[6] = a.offsetX + g / a.width + i, k[7] = a.offsetY + h / a.height + j;
                    var l = this.gameHudForm.camera.left / g, m = this.gameHudForm.camera.right / g, n = this.gameHudForm.camera.top / h, o = this.gameHudForm.camera.bottom / h, p = k[2] - k[0], q = k[5] - k[3];
                    d[3] = CORRECT_U(a.textureID, p * l + k[0]), d[4] = CORRECT_V(a.textureID, q * n + k[1]), d[8] = CORRECT_U(a.textureID, p * m + k[0]), d[9] = CORRECT_V(a.textureID, q * n + k[1]), d[13] = CORRECT_U(a.textureID, p * l + k[0]), d[14] = CORRECT_V(a.textureID, q * o + k[1]), d[18] = CORRECT_U(a.textureID, p * m + k[0]), d[19] = CORRECT_V(a.textureID, q * o + k[1])
                } else {
                    f.setTextureAddressingMode(kTextureAddressMode.Clamp);
                    var i = (.5 - this.gameHudForm.camera.centerX / this.imageWidth + this.parallaxX) * a.depthOffset, j = (.5 - this.gameHudForm.camera.centerY / this.imageHeight + this.parallaxY) * a.depthOffset, r = a.x + i, s = a.x + a.width + i, t = a.y + j, u = a.y + a.height + j;
                    d[0] = r, d[1] = t, d[2] = 0, d[5] = s, d[6] = t, d[7] = 0, d[10] = r, d[11] = u, d[12] = 0, d[15] = s, d[16] = u, d[17] = 0;
                    var v = d[5] - d[0], w = d[11] - d[6];
                    if (v <= 0 && w <= 0)
                        return;
                    var x, y, z, A;
                    a.contractTexCoords ? (x = .01, y = .99, z = .01, A = .99) : (x = 0, y = 1, z = 0, A = 1), d[3] = CORRECT_U(a.textureID, x + (d[0] - r) / a.width), d[4] = CORRECT_V(a.textureID, z + (d[1] - t) / a.height), d[8] = CORRECT_U(a.textureID, y - (s - d[5]) / a.width), d[9] = d[4], d[13] = d[3], d[14] = CORRECT_V(a.textureID, A - (u - d[11]) / a.height), d[18] = d[8], d[19] = d[14]
                }
                var B = a.opacity * a.color.a;
                e[0] = e[4] = e[8] = e[12] = a.color.r, e[1] = e[5] = e[9] = e[13] = a.color.g, e[2] = e[6] = e[10] = e[14] = a.color.b, e[3] = e[7] = e[11] = e[15] = B, f.setTextureFilteringMode(kTextureFilterType.Linear), f.setVertexStreamDataArrays(d, e), a.blendingMode == c.None ? f.setBlendState(kBlendState.None) : a.blendingMode == c.Alpha ? f.setBlendState(kBlendState.Alpha) : a.blendingMode == c.Modulative ? f.setBlendState(kBlendState.Multiply) : f.setBlendState(kBlendState.AlphaAdd);
                var C;
                for (C = 0; C < a.renderCount; C++)
                    f.drawPrimitiveType(kPrimitiveType.TriangleStrip, 0, 4)
            }, GetNumPlayers: function () {
                return this.numPlayers
            }, isValidBuildLocationWithXY: function (a, b) {
                return this.isValidBuildLocation(this.getTileGridIndex(a, b))
            }, isValidBuildLocation: function (a) {
                var b = this.tileGrid[a] == null || !this.tileGrid[a].blockBuilding, c, d;
                this.getTilePos(a, function (a, b) {
                    c = a, d = b
                });
                if (c < this.minBuildTileX || c > this.maxBuildTileX || d < this.minBuildTileY || d > this.maxBuildTileY)
                    return !1;
                var e = !0;
                if (b) {
                    var f = this.tileGrid[a];
                    this.tileGrid[a] = Entity.blockedTile();
                    var g = [], h, i, j, k = 4, l = null;
                    for (var m = 0; m < k + this.pathList.length; m++) {
                        switch (m) {
                            case 0:
                                l = this.pathList[0], h = c + 1, i = d, j = this.getTileGridIndex(h, i);
                                break;
                            case 1:
                                h = c - 1, i = d, j = this.getTileGridIndex(h, i);
                                break;
                            case 2:
                                h = c, i = d - 1, j = this.getTileGridIndex(h, i);
                                break;
                            case 3:
                                h = c, i = d + 1, j = this.getTileGridIndex(h, i);
                                break;
                            default:
                                l = this.pathList[MAX(m - k, 0)];
                                if (l.GetIsUnblockable())
                                    continue;
                                if (l.isFixedPath())
                                    continue;
                                var n = l.spawnTiles[0];
                                this.getTilePos(n, function (a, b) {
                                    c = a, d = b
                                }), h = c, i = d, j = n
                        }
                        console.assert(l != null, "Path undefined.");
                        var o = this.tileGrid[j] == null || !this.tileGrid[j].blockPathing;
                        if (o) {
                            g.clear(), e = this.pathFinder.findPath(h, i, this.tileGrid, g, this, !1, l.goalTiles);
                            if (!e && m < k) {
                                e = !0;
                                for (var p = 0; p < this.enemyList.length; ++p) {
                                    var q = this.enemyList[p];
                                    console.assert(q != null, "Enemy not initialized.");
                                    if (q.health > 0 && q.enemyClass.type != kEnemyType.Air) {
                                        var r = this.getTileGridIndexForWorldPos(q.x, q.y);
                                        for (var s = 0; s < g.length; s++) {
                                            var t = g[s], u = this.getTileGridIndex(t.x, t.y);
                                            if (u == r) {
                                                e = !1;
                                                break
                                            }
                                        }
                                    }
                                    if (!e)
                                        break
                                }
                            }
                        }
                        if (!e)
                            break
                    }
                    this.tileGrid[a] = f
                } else
                    e = !1;
                return e
            }, getWorldPosFromTilePos: function (a, b, c) {
                console.assert(a >= 0 && a < this.tilesAcross, "Invalid x-axis tile position '%d' requested.", a), console.assert(b >= 0 && b < this.tilesDown, "Invalid y-axis tile position '%d' requested.", b), c(a * this.tileWidth + this.offsetX, b * this.tileHeight + this.offsetY)
            }, getTowerAtTileGridIndex: function (a) {
                return console.assert(a >= 0 && a < this.tilesAcross * this.tilesDown, "Invalid tile grid index '%d' requested.", a), this.tileGrid[a] != null && this.tileGrid[a].isTower() ? this.tileGrid[a] : null
            }, getTileGridIndexForWorldPos: function (a, b) {
                console.assert(this.tileWidth > 0, "Invalid tile width."), console.assert(this.tileHeight > 0, "Invalid tile height.");
                var c = (a - this.offsetX) / this.tileWidth, d = (b - this.offsetY) / this.tileHeight;
                return c >= 0 && c < this.tilesAcross && d >= 0 && d < this.tilesDown ? this.getTileGridIndex(c, d) : -1
            }, initTileGrid: function () {
                this.tileGrid != null && (this.tileGrid = null), console.assert(this.tilesAcross > 0, "Invalid tile grid width."), console.assert(this.tilesDown > 0, "Invalid tile grid height."), this.tileGrid = new Array(this.tilesAcross * this.tilesDown), console.assert(this.tileGrid != null, "Not enough memory to allocate the tile grid.");
                var a, b;
                for (a = 0; a < this.tilesAcross; a++)
                    for (b = 0; b < this.tilesDown; b++) {
                        var c = this.getTileGridIndex(a, b);
                        this.tileGrid[c] = null;
                        for (var d = 0; d < this.pathOnlyTiles.length; ++d) {
                            var e = this.pathOnlyTiles[d];
                            if (c == e) {
                                this.tileGrid[c] = Entity.pathOnlyTile();
                                break
                            }
                        }
                        for (var d = 0; d < this.buildOnlyTiles.length; ++d) {
                            var f = this.buildOnlyTiles[d];
                            if (c == f) {
                                this.tileGrid[c] = Entity.buildOnlyTile();
                                break
                            }
                        }
                        for (var d = 0; d < this.blockedTiles.length; ++d) {
                            var g = this.blockedTiles[d];
                            if (c == g) {
                                this.tileGrid[c] = Entity.blockedTile();
                                break
                            }
                        }
                    }
                this.pathFinder == null, this.pathFinder = new PathFinder(this.tilesAcross, this.tilesDown)
            }, getTilesAcross: function () {
                return this.tilesAcross
            }, getTilesDown: function () {
                return this.tilesDown
            }, getTileWidth: function () {
                return this.tileWidth
            }, getTileHeight: function () {
                return this.tileHeight
            }, isTowerAtTileGridIndex: function (a) {
                return console.assert(a >= 0 && a < this.tilesAcross * this.tilesDown, "Invalid tile grid index '%d' requested.", a), this.tileGrid[a] != null && this.tileGrid[a].isTower() ? !0 : !1
            }, buyTower: function (a, b) {
                if (this.tileGrid[a.tileGridIndex] == null) {
                    this.addTower(a);
                    var c = a.towerClass.techLevels[0], d = c.cost;
                    if (this.replayEvents != null && this.replayEvents.length > 0) {
                        for (var e = 0; e < this.replayEvents.length; e++) {
                            var f = this.replayEvents[this.replayEvents.length - 1 - e];
                            if (f.type == kReplayEventType.SellTower) {
                                this.buySellCounter++;
                                break
                            }
                            if (f.type == kReplayEventType.Wave)
                                continue;
                            this.buySellCounter = 0;
                            break
                        }
                        if (this.buySellCounter == kGuerrillaWarfareAchievementWaveCount) {
                            var g = AchievementManager.GetSingleton();
                            g.UnlockAchievement(kAchievement.GuerrillaWarfare), this.buySellCounter = 0
                        }
                    }
                    this.player[b].SubtractResources(d);
                    if (m.sbRecordReplay) {
                        var h = this.towerClassList.indexOf(a.towerClass), i;
                        i = new BuyTowerPlayerReplayEvent(kReplayEventType.BuyTower, this.currentPlayTimeTick, a.tileGridIndex, h, b), this.replayEvents.push(i)
                    }
                }
            }, addTower: function (a) {
                this.tileGrid[a.tileGridIndex] == null && (this.renderList.push(a), a.OnEvent_PostBuild(), this.tileGrid[a.tileGridIndex] = a, this.updatePathingForAllEnemies(), this.towerList.push(a))
            }, updateStatusTextWithCurrentRound: function () {
                var a = LocalizeString("Round#", "Each level consists of multiple rounds or waves.");
                a = sprintf(a, MAX(this.unboundedWaveIndex, 0) + 1), this.gameHudForm.setStatusString(a, 9999, !0)
            }, updatePathingForAllEnemies: function () {
                this.reservedTiles.removeAllObjects();
                for (var a = 0; a < this.enemyList.length; ++a) {
                    var b = this.enemyList[a];
                    console.assert(b !== null, "Enemy not initialized.");
                    var c = this.waves[this.waveIndex], d = c.streams[b.streamIndex];
                    if (b.health > 0 && !this.pathList[d.pathIndex].isFixedPath()) {
                        console.assert(b.pathNodes.length > 0, "Enemy does not contain any pathing information."), console.assert(b.currentPathNode >= 0, "Enemy path node not initialized.");
                        var e, f;
                        this.getTilePos(b.tileGridIndex, function (a, b) {
                            e = a, f = b
                        });
                        var g = this.pathList[d.pathIndex].goalTiles;
                        console.assert(g.length > 0, "No goal tiles defined for the stream."), b.pathNodes.removeAllObjects(), this.pathFinder.findPath(e, f, this.tileGrid, b.pathNodes, this, b.enemyClass.type == kEnemyType.Air, g), b.pathNodesDirty = !0, b.currentPathNode = b.pathNodes.length - 1, b.currentPathNode < 0 && (b.currentPathNode = 0)
                    }
                }
            }, upgradeTowerAtTileGridIndex: function (a) {
                var b = this.tileGrid[a];
                if (b.isTower()) {
                    var c = b;
                    c.initiateUpgrade();
                    if (m.sbRecordReplay) {
                        var d = new PlayerReplayEvent(kReplayEventType.UpgradeTower, this.currentPlayTimeTick, a, c.playerIndex);
                        this.replayEvents.push(d)
                    }
                }
            }, sellTowerAtTileGridIndex: function (a) {
                if (this.tileGrid[a] != null && this.tileGrid[a].isTower()) {
                    var b = this.getTowerSellCostAtTileGridIndex(a), c = this.tileGrid[a];
                    if (c.hasBeenSimulated && this.replayEvents != null && this.replayEvents.length > 0) {
                        for (var d = 0; d < this.replayEvents.length; d++) {
                            var e = this.replayEvents[this.replayEvents.length - 1 - d];
                            if (e.type == kReplayEventType.BuyTower) {
                                this.buySellCounter++;
                                break
                            }
                            if (e.type == kReplayEventType.Wave)
                                continue;
                            this.buySellCounter = 0;
                            break
                        }
                        if (this.buySellCounter == 39) {
                            var f = AchievementManager.GetSingleton();
                            f.UnlockAchievement(kAchievement.GuerrillaWarfare), this.buySellCounter = 0
                        }
                    }
                    if (m.sbRecordReplay) {
                        var g = new PlayerReplayEvent(kReplayEventType.SellTower, this.currentPlayTimeTick, a, c.playerIndex);
                        this.replayEvents.push(g)
                    }
                    this.player[c.playerIndex].AddResources(b), c.hasBeenSimulated && this.addScore(kSellTowerScorePenalty, c.playerIndex), c.removeFromList = !0, this.update(0), this.view.audioConfig.sellTowerSoundEffect.play()
                }
            }, serialize: function (a) {
                var b = {};
                b.saveGameMagicNumber = kSaveGameMagicNumber, a.serializeDouble(b, "saveGameMagicNumber");
                if (a.isLoading() && b.saveGameMagicNumber != kSaveGameMagicNumber)
                    return;
                b.saveGameVersion = PACK_VERSION_NUMBER(kGameReleaseVersion, kGameMajorVersion, kGameMinorVersion), a.serializeInt(b, "saveGameVersion"), a.version = b.saveGameVersion, a.isLoading() && (this.filename = null, this.name = null), SERIALIZE_STRING(a, this, "name"), SERIALIZE_STRING(a, this, "filename"), a.serializeBool(this, "bIsMultiplayer"), a.serializeBool(this, "bIsMultiplayerCoop"), this.numPlayers = 1, this.isCoop = !1, SERIALIZE(a, this, "difficultyLevel"), SERIALIZE(a, this, "gameplayMode"), this.gameplayMode == kGameplayMode.TimeTrial && a.serializeDouble(this, "timeTrialTimer"), this.gameHudForm.tutorialParent.trackParentPos = !0, this.gameHudForm.tutorialParent.isHidden = !0, b.numReplayActions = MIN(this.replayEvents.length, kMaxRecordedReplayEvents), a.serializeInt(b, "numReplayActions");
                var c = b.numReplayActions;
                if (a.isLoading()) {
                    var d;
                    for (d = 0; d < c; d++) {
                        var e;
                        ReplayEvent.serializeReplayEvent(function (a) {
                            e = a
                        }, a), this.replayEvents.push(e)
                    }
                } else
                    for (var g = 0; g < this.replayEvents.length; ++g) {
                        var e = this.replayEvents[g];
                        ReplayEvent.serializeReplayEvent(e, a)
                    }
                if (!m.sbRecordReplay)
                    return;
                SERIALIZE(a, this
                    , "numPlayers"), SERIALIZE(a, this, "isCoop");
                for (var h = 0; h < this.numPlayers; h++)
                    this.player[h] === null && (this.player[h] = new Player), SERIALIZE_OBJECT(a, this.player[h]);
                SERIALIZE(a, this, "suddenDeathWaveIndex"), a.serializeDouble(this, "gameCountdownTimer"), SERIALIZE(a, this, "waveIndex"), SERIALIZE(a, this, "unboundedWaveIndex"), SERIALIZE(a, this, "isCompleted"), SERIALIZE(a, this, "highScoreAchieved"), SERIALIZE(a, this, "currentPlayTimeTick"), a.isLoading() && this.numPlayers == 2 && this.gameplayMode != kGameplayMode.Classic && this.gameHudForm.updateTowerPlacement(), a.isLoading() && this.unboundedWaveIndex >= 0 && this.beginWave(this.unboundedWaveIndex, !0), SERIALIZE(a, this, "numSpawnsRemaining"), SERIALIZE(a, this, "numEnemiesAlive"), b.lastUniqueID = Entity.getLastUniqueID(), SERIALIZE(a, b, "lastUniqueID"), a.isLoading() && Entity.setLastUniqueID(b.lastUniqueID), this.gameHudForm.serialize(a);
                if (a.isLoading())
                    for (var i = 0; i < this.streamStatsList.length; i++) {
                        var j = this.streamStatsList[i];
                        SERIALIZE_OBJECT(a, j)
                    }
                else
                    for (var g = 0; g < this.streamStatsList.length; ++g) {
                        var j = this.streamStatsList[g];
                        SERIALIZE_OBJECT(a, j)
                    }
                b.numEnemies = this.enemyList.length, a.serializeInt(b, "numEnemies");
                var k = b.numEnemies;
                if (a.isLoading()) {
                    var l;
                    for (l = 0; l < k; l++) {
                        b.streamIndex = 0, a.serializeInt(b, "streamIndex");
                        var j = this.streamStatsList[b.streamIndex], n = new Enemy(j.enemyClass, this);
                        SERIALIZE_OBJECT(a, n), this.addEnemy(n);
                        var o = null;
                        if (n.state == kEnemyState.Death && n.deathAnimationDelayTimer > 0) {
                            switch (n.movementDirection) {
                                case kDirection.North:
                                    o = "move_000", n.targetAnimationLoop = !0;
                                    break;
                                case kDirection.East:
                                    o = "move_090", n.targetAnimationLoop = !0;
                                    break;
                                case kDirection.South:
                                    o = "move_180", n.targetAnimationLoop = !0;
                                    break;
                                case kDirection.West:
                                    o = n.enemyClass.mirrorHorizontal ? "move_090" : "move_270", n.targetAnimationLoop = !0;
                                    break;
                                case kDirection.NorthEast:
                                    o = n.rotatingClockwise ? "turn_45" : "turn_315", n.targetAnimationLoop = !1;
                                    break;
                                case kDirection.NorthWest:
                                    o = n.enemyClass.mirrorHorizontal && !n.rotatingClockwise ? "turn_45" : "turn_315", n.targetAnimationLoop = !1;
                                    break;
                                case kDirection.SouthEast:
                                    o = n.rotatingClockwise ? "turn_135" : "turn_225", n.targetAnimationLoop = !1;
                                    break;
                                case kDirection.SouthWest:
                                    o = n.enemyClass.mirrorHorizontal && !n.rotatingClockwise ? "turn_135" : "turn_225", n.targetAnimationLoop = !1
                            }
                            if (n.targetAnimationName === null || n.targetAnimationName != o)
                                n.targetAnimationName = o;
                            n.updateAnimation(0)
                        }
                        n = null
                    }
                    for (var l = 0; l < this.enemyList.length; l++) {
                        var n = this.enemyList[l], p;
                        if (n.leaderID != 0)
                            for (var q = 0; q < this.enemyList.length; q++) {
                                p = this.enemyList[q];
                                if (p.uniqueID == n.leaderID) {
                                    n.leader === null && (n.leader = p);
                                    var r = !1;
                                    for (var s = 0; s < p.followedBy.length; s++)
                                        p.followedBy[s].uniqueID == n.uniqueID && (r = !0);
                                    r || p.followedBy.push(n)
                                }
                            }
                    }
                    for (var l = 0; l < this.enemyList.length; l++) {
                        var n = this.enemyList[l], p;
                        if (n.spawnedBeforeID != 0)
                            for (var q = 0; q < this.enemyList.length; q++)
                                p = this.enemyList[q], p.uniqueID == n.spawnedBeforeID && (n.spawnedBefore = p)
                    }
                } else
                    for (var g = 0; g < this.enemyList.length; ++g) {
                        var n = this.enemyList[g];
                        b.streamIndex = n.streamIndex, a.serializeInt(b, "streamIndex"), SERIALIZE_OBJECT(a, n)
                    }
                b.numTowers = this.towerList.length, a.serializeInt(b, "numTowers");
                var t = b.numTowers;
                if (a.isLoading()) {
                    var u;
                    for (u = 0; u < t; u++) {
                        b.towerClassIndex = 0, a.serializeInt(b, "towerClassIndex");
                        var v = this.towerClassList[b.towerClassIndex], w = new Tower(v, this);
                        SERIALIZE_OBJECT(a, w), w.restoreTarget(this.enemyList), this.addTower(w), w.cacheAliveEnemiesWithinAttackRange()
                    }
                    for (var g = 0; g < this.towerList.length; ++g) {
                        var w = this.towerList[g];
                        w.update(0)
                    }
                } else
                    for (var g = 0; g < this.towerList.length; ++g) {
                        var w = this.towerList[g];
                        b.towerClassIndex = this.towerClassList.indexOf(w.towerClass), a.serializeInt(b, "towerClassIndex"), SERIALIZE_OBJECT(a, w)
                    }
                SERIALIZE(a, this, "buySellCounter"), SERIALIZE(a, this, "appliedEndGameScoreBonus"), b.numProjectiles = this.projectileList.length, a.serializeInt(b, "numProjectiles");
                var x = b.numProjectiles;
                if (a.isLoading()) {
                    var y;
                    for (y = 0; y < x; y++) {
                        b.projectileClassIndex = 0, a.serializeInt(b, "projectileClassIndex");
                        var z = m.sProjectileClassList[b.projectileClassIndex], A = new Projectile(z, this, null);
                        SERIALIZE_OBJECT(a, A), A.restoreTarget(this.enemyList), A.restoreTower(this.towerList), this.addProjectile(A)
                    }
                    for (var g = 0; g < this.projectileList.length; ++g) {
                        var A = this.projectileList[g];
                        A.update(0)
                    }
                } else
                    for (var g = 0; g < this.projectileList.length; ++g) {
                        var A = this.projectileList[g];
                        b.projectileClassIndex = m.sProjectileClassList.indexOf(A.projectileClass), a.serializeInt(b, "projectileClassIndex"), SERIALIZE_OBJECT(a, A)
                    }
                if (a.isLoading()) {
                    var B = new f;
                    for (var g = 0; g < this.pathList.length; ++g) {
                        var C = this.pathList[g];
                        SERIALIZE_OBJECT(a, B);
                        if (B.currentLeaderID != -1)
                            for (var l = 0; l < this.enemyList.length; l++) {
                                var n = this.enemyList[l];
                                n.uniqueID == B.currentLeaderID && (C.currentLeader !== null && (C.currentLeader = null), C.currentLeader = n, C.currentLeaderID = n.uniqueID)
                            }
                        if (B.lastSpawnedID != -1)
                            for (var l = 0; l < this.enemyList.length; l++) {
                                var n = this.enemyList[l];
                                n.uniqueID == B.lastSpawnedID && (C.lastSpawned !== null && (C.lastSpawned = null), C.lastSpawned = n, C.currentLeaderID = n.uniqueID)
                            }
                    }
                    B = null
                } else
                    for (var g = 0; g < this.pathList.length; ++g) {
                        var B = this.pathList[g];
                        SERIALIZE_OBJECT(a, B)
                    }
                a.version > PACK_VERSION_NUMBER(1, 3, 0) && (b.falseBoolean = !1, SERIALIZE(a, b, "falseBoolean"));
                if (a.isLoading()) {
                    this.updatePathingForAllEnemies();
                    for (var g = 0; g < this.enemyList.length; ++g) {
                        var n = this.enemyList[g];
                        n.update(0)
                    }
                }
                a.isLoading() && this.pauseGame()
            }, setMapNameFromSaveFile: function (a, b) {
                a = a || kSaveGameFilename, BinaryFile.doesFileExist(a, bindSelf(function (c) {
                    if (c) {
                        var d = new BinaryFile;
                        d.openFile(a, kFilePermissions.Read), console.info("opening save file", d), Preloader.dependOn(bindSelf(function () {
                            console.info("read save file");
                            var a = {};
                            a.saveGameMagicNumber = 0, d.serializeDouble(a, "saveGameMagicNumber");
                            if (a.saveGameMagicNumber != kSaveGameMagicNumber)
                                return;
                            a.saveGameVersion = PACK_VERSION_NUMBER(kGameReleaseVersion, kGameMajorVersion, kGameMinorVersion), SERIALIZE(d, a, "saveGameVersion"), this.filename = null, this.name = null, SERIALIZE_STRING(d, this, "name"), SERIALIZE_STRING(d, this, "filename"), SERIALIZE(d, MapSelectionForm, "bIsMultiplayer"), SERIALIZE(d, MapSelectionForm, "bIsMultiplayerCoop"), this.numPlayers = 1, this.isCoop = !1, SERIALIZE(d, this, "difficultyLevel"), SERIALIZE(d, this, "gameplayMode"), this.gameplayMode == kGameplayMode.TimeTrial && d.serializeDouble(this, "timeTrialTimer"), d.close(), b()
                        }, this), d)
                    } else
                        b()
                }, this))
            }, addScore: function (a, b) {
                b = b || 0;
                var c = 1;
                switch (this.difficultyLevel) {
                    case kDifficultyLevel.Easy:
                        c = .5;
                        break;
                    case kDifficultyLevel.Medium:
                        c = 1;
                        break;
                    case kDifficultyLevel.Hard:
                        c = 1.5
                }
                var d = a * c;
                this.player[b].GetScore() + d < 0 ? this.player[b].SetScore(0) : this.player[b].SetScore(this.player[b].GetScore() + d);
                var e = AchievementManager.GetSingleton();
                e.SetTotalAccumulatedScore(e.GetTotalAccumulatedScore() + d), this.player[b].GetScore() > 85e4 / kAchievementModifier ? e.UnlockAchievement(kAchievement.MasterPlan) : this.player[b].GetScore() > 5e5 / kAchievementModifier ? e.UnlockAchievement(kAchievement.IronFist) : this.player[b].GetScore() > 1e5 / kAchievementModifier && e.UnlockAchievement(kAchievement.WarmingUp)
            }, getTowerSellCostAtTileGridIndex: function (a) {
                var b = 0;
                if (this.tileGrid[a] != null && this.tileGrid[a].isTower()) {
                    var c = this.tileGrid[a], d;
                    for (d = 0; d <= c.techLevelIndex; d++) {
                        var e = c.towerClass.techLevels[d];
                        b += e.cost
                    }
                    c.hasBeenSimulated && (b = b * 3 >> 2)
                }
                return b
            }, exitGame: function () {
                var a = !0;
                a && this.saveGameState(), this.gameState = kGameState.Stopped
            }, handleReplayEvents: function () {
                var a = !1;
                while (!a && this.currentReplayEventIndex < this.replayEvents.length) {
                    var b = this.replayEvents[this.currentReplayEventIndex];
                    if (b.playTimeTick <= this.currentPlayTimeTick) {
                        console.assert(b.playTimeTick == this.currentPlayTimeTick, "Old events should already have fired."), this.currentReplayEventIndex++;
                        switch (b.type) {
                            case kReplayEventType.BuyTower:
                                var c = b, d = this.towerClassList[c.towerClassIndex], e = new Tower(d, this, c.playerIndex), f = new Point;
                                getWorldPosFromTileGridIndex(c.tileGridIndex, f), e.x = f.x + this.tileWidth * .5, e.y = f.y + this.tileHeight * .5, e.tileGridIndex = c.tileGridIndex, this.buyTower(e);
                                break;
                            case kReplayEventType.SellTower:
                                var g = b;
                                this.sellTowerAtTileGridIndex(g.tileGridIndex);
                                break;
                            case kReplayEventType.UpgradeTower:
                                var g = b;
                                this.upgradeTowerAtTileGridIndex(g.tileGridIndex);
                                break;
                            case kReplayEventType.Wave:
                        }
                        this.currentReplayEventIndex == this.replayEvents.length && console.info("Replay playback complete.")
                    } else
                        a = !0
                }
            }
        }, "Map");
        m.sSharedParticleSystemList = [], m.sSharedParticleSystemExClassList = [], m.sProjectileClassList = [], m.sTowerClassList = [], m.sFontList = [], m.getKeyForGameplayFeature = function (b) {
            var c = null;
            switch (b) {
                case kGameplayFeature.FastForward:
                    c = a;
                    break;
                default:
            }
            return c
        }, m.getUnlockableStringForGameplayFeature = function (a) {
            var b = null;
            switch (a) {
                case kGameplayFeature.FastForward:
                    b = "FastForwardUnlocked";
                    break;
                default:
                    console.warn("Undefined gameplay feature.")
            }
            return b
        }, m.isGameplayFeatureUnlocked = function (a, b) {
            var c = NextStep.UserDefaults.standardUserDefaults(), d = sprintf("%s%s", b, kMapSettingsKey), e = c[d];
            if (e == undefined) {
                var f = {};
                c[d] = f, c.synchronize(), e = c[d]
            }
            var g = m.getKeyForGameplayFeature(a), h = e[g], i = !1;
            return h != undefined && (i = Boolean(h)), i
        }, m.unlockGameplayFeature = function (a, b) {
            if (m.sbMoneyAndHealthCheatActivated)
                return null;
            var c = NextStep.UserDefaults.standardUserDefaults(), d = sprintf("%s%s", b, kMapSettingsKey), e = c[d];
            e == undefined && (e = {}, c[d] = e, c.synchronize());
            var f = m.getKeyForGameplayFeature(a), g = e[f], h = !1;
            g != undefined && (h = g);
            var i = null;
            if (g == undefined || !h)
                e[f] = !0, c[d] = e, c.synchronize(), i = m.getUnlockableStringForGameplayFeature(a);
            return i
        }, m.unlockGameplayMode = function (a, b) {
            if (m.sbMoneyAndHealthCheatActivated)
                return null;
            var c = NextStep.UserDefaults.standardUserDefaults(), d = sprintf("%s%s", b, kMapSettingsKey), e = c[d];
            e == undefined && (e = {}, c[d] = e, c.synchronize());
            var f = null, g = null;
            switch (a) {
                case kGameplayMode.Extended:
                    f = kExtendedModeKey, g = "ExtendedModeUnlocked";
                    break;
                case kGameplayMode.Endless:
                    f = kEndlessModeKey, g = "EndlessModeUnlocked";
                    break;
                case kGameplayMode.SuddenDeath:
                    f = kExtendedModeKey, g = "SuddenDeathModeUnlocked";
                    break;
                case kGameplayMode.TimeTrial:
                    f = kExtendedModeKey, g = "TimeTrialModeUnlocked";
                    break;
                case kGameplayMode.TowerCombo1:
                    f = kExtendedModeKey, g = "TowerCombo1ModeUnlocked";
                    break;
                case kGameplayMode.TowerCombo2:
                    f = kExtendedModeKey, g = "TowerCombo2ModeUnlocked";
                    break;
                default:
                    console.warn("Undefined gameplay mode.")
            }
            var h = e[f], i = !1;
            return h != undefined && (i = h), h == undefined || !i ? (e[f] = !0, c[d] = e, c.synchronize()) : g = null, g
        }, m.getFileSizeOfTowerResourceDataFromNode = function (a) {
            return 1
        }, m.getFileSizeOfParticleSystemResourceDataFromNode = function (a) {
            return 1
        }, m.getFileSizeOfOverlayResourceDataFromNode = function (a) {
            var b = null;
            return b = a.attr("image"), 1
        };
        var n = new Array(kNumOfficialMaps), o = !1;
        m.getOfficialMapNameForIndex = function (a) {
            if (!o) {
                o = !0;
                var b = new Array(kMaxOfficialMaps);
                b[kMapIndex.Grasslands] = "grasslands", b[kMapIndex.Crossroads] = "crossroads", b[kMapIndex.Drylands] = "drylands", b[kMapIndex.Skyway] = "skyway", b[kMapIndex.Frostbite] = "frostbite", b[kMapIndex.Cave] = "cave", b[kMapIndex.Rainforest] = "rainforest", b[kMapIndex.Volcano] = "volcano", b[kMapIndex.BuyAllPsuedoMap] = "all", b[kMapIndex.RainforestMP] = "rainforest", b[kMapIndex.VolcanoMP] = "volcano";
                for (var c = 0; c < kNumOfficialMaps; ++c)
                    n[c] = "", n[c] += b[c]
            }
            return console.assert(a >= 0 && a < kNumOfficialMaps, "Invalid map name requested."), n[a]
        };
        var p = new Array(kNumOfficialMaps), q = !1;
        m.getTowerCombo2DependencyForMapIndex = function (a) {
            return q || (q = !0, p[kMapIndex.Grasslands] = kMapIndex.Cave, p[kMapIndex.Crossroads] = kMapIndex.Frostbite, p[kMapIndex.Drylands] = kMapIndex.Rainforest, p[kMapIndex.Skyway] = kMapIndex.Drylands, p[kMapIndex.Frostbite] = kMapIndex.Volcano, p[kMapIndex.Cave] = kMapIndex.Drylands, p[kMapIndex.Rainforest] = kMapIndex.Skyway, p[kMapIndex.Volcano] = kMapIndex.Crossroads), p[a]
        };
        var r = new Array(kNumOfficialMaps), s = !1;
        m.getTowerCombo2ReverseDependencyForMapIndex = function (a) {
            if (!s) {
                s = !0;
                for (var b = 0; b <= kMapIndexSingleplayerLast; b++) {
                    var c = m.getTowerCombo2DependencyForMapIndex(b);
                    r[c] ? r[c].push(b) : r[c] = [b]
                }
            }
            return r[a]
        }, m.loadCommonResources = function (a, b) {
            var c = 0, d = [], e = function (e) {
                return c++, e.onload = function () {
                    delete e.onload, a && a(e), c--, c <= 0 && (d.length > 0 ? d.shift().call(this) : b && b())
                }, e
            }, f = function (a) {
                d.push(a)
            };
            f(function () {
                var a = ["fx_smoke", "fx_flame", "fx_mortar_glow", "fx_ice", null];
                for (var b = a.length - 2; b >= 0; b--) {
                    var c = a[b], d = null;
                    d = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", c, "particle");
                    if (d) {
                        var f = e(new ParticleSystem(d));
                        console.assert(f !== null, "Error loading particle system."), m.sSharedParticleSystemList == null && (m.sSharedParticleSystemList = []), m.sSharedParticleSystemList.push(f)
                    }
                }
            }), f(function () {
                var a = ["fireworks", "explosion_heavy_chopper", "explosion_nuke", "explosion", "explosion_blimp", "explosion_chopper", "explosion_plane", null];
                for (i = 0; i < a.length - 1; i++) {
                    var b = a[i], c = null;
                    c = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Particles", b, "fx");
                    if (c !== null) {
                        var d = e(new ParticleSystemExClass);
                        d.Load(c), console.assert(d !== null, "Error loading particle system '%s'.", c), m.sSharedParticleSystemExClassList == null && (m.sSharedParticleSystemExClassList = []), m.sSharedParticleSystemExClassList.push(d)
                    }
                }
            });
            var g = this;
            f(function () {
                var a = ["projectile_missile", "projectile_lightning", "projectile_goo", "projectile_mortar", "projectile_flame", "projectile_laser", "projectile_ice", "projectile_plasma", "projectile_plasma_special", "projectile_lava", "projectile_poison", null];
                for (i = a.length - 2; i >= 0; i--) {
                    var b = a[i], c = null;
                    c = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Projectiles", b, "projectile");
                    if (c != null) {
                        var d = e(new ProjectileClass(c, m.sSharedParticleSystemList, m.sSharedParticleSystemExClassList));
                        console.assert(d != null, "Error loading projectile class."), m.sProjectileClassList == null && (m.sProjectileClassList = []), m.sProjectileClassList.push(d)
                    }
                }
            }), f(function () {
                var a = ["tower_gatling", "tower_missile", null];
                for (i = a.length - 2; i >= 0; i--) {
                    var b = a[i], c = null;
                    c = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("Towers", b, "tower");
                    if (c) {
                        var d = e(new TowerClass(c, m.sProjectileClassList, m.sSharedParticleSystemList, m.sSharedParticleSystemExClassList));
                        d.isCommon = !0, console.assert(d !== null, "Error loading tower class."), m.sTowerClassList == null && (m.sTowerClassList = []), m.sTowerClassList.push(d)
                    }
                }
            });
            var h = ["font_gold.asc", "font_dark.asc", "font_light.asc", "font_gold_large.asc", null], j = [-0.005, -0.01, -0.025, 0];
            IsPlatformAndroid() && (j[2] = -0.03);
            for (i = h.length - 2; i >= 0; i--) {
                var k = h[i], l = i, n = k, o = Preloader.dependOn(this, new Font(n, j[l]));
                console.assert(o !== null, "Error loading font."), m.sFontList || (m.sFontList = []), m.sFontList.push(o)
            }
            return d.shift().call(this), !0
        }, m.unloadCommonResources = function () {
            console.debug("Map.unloadCommonResources"), m.sSharedParticleSystemList = [], m.sSharedParticleSystemExClassList = [], m.sProjectileClassList = [], m.sTowerClassList = [], m.sFontList = []
        }, m.GetFont = function (a) {
            for (var b = 0; b < m.sFontList.length; b++) {
                var c = m.sFontList[b];
                if (c.GetFilename() == a)
                    return c
            }
            return console.warn("Invalid font '%s' requested.", a), null
        }, m.deleteSaveGame = function () {
            BinaryFile.deleteFile(kSaveGameFilename)
        }, m.doesSaveGameExist = function (a) {
            BinaryFile.doesFileExist(kSaveGameFilename, a)
        }, m.unlockMap = function (a) {
            return null;
            var b, c, d, e, f
        }, window.jQuery.extend(m, {
            LoadAchievementCounters: function () {
                var a = new BinaryFile;
                BinaryFile.doesFileExist(kUserDataFilename, bindSelf(function (b) {
                    b ? (a.openFile(kUserDataFilename, kFilePermissions.Read), Preloader.dependOn(function () {
                        var b = AchievementManager.GetSingleton();
                        return b.Serialize(a), a.close(), a = null, !0
                    }, a)) : (a.close(), a = null)
                }, this))
            }, ResetAchievementCounters: function () {
                var a = AchievementManager.GetSingleton();
                a.ResetCounters()
            }, SaveAchievementCounters: function () {
                var a = new BinaryFile;
                a.openFile(kUserDataFilename, kFilePermissions.Write), Preloader.dependOn(function () {
                    var b = AchievementManager.GetSingleton();
                    b.Serialize(a), a.close(), a = null
                }, a)
            }, getOfficialMapDescription: function (a) {
                var b = sprintf("OfficialMapDescription%02d", a + 1);
                return LocalizeString(b, null)
            }, getOfficialUnlockDescription: function (a) {
                if (a == 0)
                    return LocalizeString("UnlockDescription00", null);
                var b = a == kMapIndex.BuyAllPsuedoMap ? a + 1 : 1;
                return sprintf(LocalizeString(sprintf("UnlockDescription%02d", b), null), LocalizeString(sprintf("OfficialMapName%02d", a + 1), null))
            }, getOfficialTowerCombo2UnlockDescription: function (a, b) {
                if (b == undefined) {
                    var c = NextStep.UserDefaults.standardUserDefaults(), d = m.getOfficialMapNameForIndex(a) + kMapSettingsKey, e = c[d];
                    b = e && (e[kEndlessModeKey] ? e[kEndlessModeKey] : !1)
                }
                return sprintf(LocalizeString(sprintf("TowerCombo2%sUnlockDescription", b ? "" : "AndEndless"), null), LocalizeString(sprintf("OfficialMapName%02d", m.getTowerCombo2DependencyForMapIndex(a) + 1), null))
            }
        }), m.sbRecordReplay = !0, this.Map = m, Preloader.initialize("game/map.js")
    }), Preloader.include(["utilities/defines.js", "userinterface/form.js", "userinterface/forms/bootstrapform.js", "userinterface/forms/bootstrapform2.js", "userinterface/forms/upsellform.js", "userinterface/forms/gamehudform.js", "userinterface/forms/titlescreenform.js", "userinterface/forms/creditsform.js", "userinterface/forms/mapselectionform.js", "userinterface/forms/mapconfigurationform.js", "userinterface/forms/loadingform.js", "userinterface/forms/scoresform.js", "userinterface/forms/ingameoptionsform.js", "userinterface/forms/confirmrestartform.js", "userinterface/forms/newhighscoreform.js", "userinterface/forms/titleoptionsform.js", "userinterface/forms/helpform.js", "userinterface/forms/achievementsform.js", "userinterface/forms/confirmnewgameform.js", "game/map.js"], function () {
        kAchievementsForm = "achievements", kBootstrapFormName = "bootstrap", kBootstrapForm2Name = "bootstrap2", kUpsellForm = "upsell", kContractorLogoName = "contractor_logo", kConfirmNewGameFormName = "confirm_new_game", kConfirmRestartFormName = "confirm_restart", kCreditsFormName = "credits", kGameTypeFormName = "game_type", kHelpForm01Name = "help_01", kHelpForm02Name = "help_02", kHelpForm03Name = "help_03", kHelpForm04Name = "help_04", kHelpForm05Name = "help_05", kHelpForm06Name = "help_06", kInGameOptionsFormName = "in_game_options", kLoadingFormName = "loading", kMapConfigurationFormName = IsPlatformMac() ? "map_configuration_more_modes_no_mp" : "map_configuration", kMapSelectionFormName = "map_selection", kNewHighScoreFormName = IsPlatformMac() ? "new_high_score_computer" : "new_high_score", kScoresFormName = IsPlatformMac() ? "scores_more_modes_no_global_friends_mp" : "scores", kTitleScreenFormName = "title_screen", kTitleOptionsFormName = "title_options", kGameHudFormName = MapSelectionForm.bIsMultiplayer ? MapSelectionForm.bIsMultiplayerCoop ? "game_hud_multiplayer" : "game_hud_multiplayer_versus" : IsPlatformMac() ? "game_hud_computer" : "game_hud", kScreenTintOpacity = .5, kScreenTintFadeSpeed = 3;
        var a = Class.extend({
            init: function (a) {
                this.view = a, this.activeBackgroundFormName = null, this.targetBackgroundFormName = kBootstrapFormName, this.activePopupFormName = null, this.targetPopupFormName = null, this.previousPopupFormName = null, this.formNameToFormMap = {}, this.screenTintOpacity = 0, this.loadForm(kBootstrapFormName), this.loadForm(kLoadingFormName), this.distortionTextureID = 0
            }, destroy: function () {
                this.activeBackgroundFormName === null, this.targetBackgroundFormName == null, this.activePopupFormName == null, this.targetPopupFormName == null, this.previousPopupFormName == null, this.distortionTextureID !== 0 && Sprite.destroyTexture(this.distortionTextureID)
            }, switchToBackgroundForm: function (a) {
                return this.targetBackgroundFormName = a ? a : null, this.loadForm(a)
            }, switchToPopupForm: function (a) {
                return this.targetPopupFormName = a === null ? null : a, a != null && a != kLoadingFormName && this.activePopupFormName != kLoadingFormName && (this.targetPopupFormTimeoutID = setTimeout(bindSelf(function () {
                    if (this.activePopupFormName != a) {
                        var b = this.switchToPopupForm(kLoadingFormName);
                        b.bLoadingForm = !0, b.targetForm = this.loadForm(a);
                        if (a != kConfirmNewGameFormName && a != kConfirmRestartFormName && a != kTitleOptionsFormName && a != kInGameOptionsFormName && !a.match(kUpsellForm))
                            b.targetForm.onprogress = function (a, c) {
                                b.updateLoadingProgressWithPercent(a / c)
                            };
                        else {
                            var c;
                            c = setInterval(bindSelf(function () {
                                b.updateLoadingProgressWithPercent(.999), this.activePopupFormName == a && clearInterval(c)
                            }, this), 33)
                        }
                        Preloader.dependOn(bindSelf(function () {
                            setTimeout(function () {
                                b.bLoadingForm = !1, b.targetForm = null
                            }, 0), delete b.targetForm.onprogress, this.switchToPopupForm(a)
                        }, this), b.targetForm)
                    }
                }, this), 300)), this.loadForm(a)
            }, getBackgroundFormName: function () {
                return this.activeBackgroundFormName
            }, getPopupFormName: function () {
                return this.activePopupFormName === null ? null : this.activePopupFormName
            }, getTargetPopupFormName: function () {
                return this.targetPopupFormName === null ? null : this.targetPopupFormName
            }, getPreviousPopupFormName: function () {
                return this.previousPopupFormName === null ? null : this.previousPopupFormName
            }, loadForm: function (a) {
                var b = null;
                if (a != null) {
                    b = this.formNameToFormMap[a];
                    if (b == null) {
                        var c = null, d = sprintf("%s%s", a, "_wide");
                        c = GET_RESOURCE_PATH_FROM_MAIN_BUNDLE("UserInterface", d, "form"), c != null && (b = this.createForm(a, c, this.view), console.assert(b != null, "Error loading form."), this.formNameToFormMap[a] = b)
                    }
                }
                return b
            }, createForm: function (a, b, c) {
                var d = null, e = a;
                return a == kBootstrapFormName || a == kContractorLogoName ? d = new BootstrapForm(b, c, this, e) : a == kBootstrapForm2Name ? d = new BootstrapForm2(b, c, this, e) : a.match(kUpsellForm) ? d = new UpsellForm("UserInterface/MapUpsell/" + a + ".form", c, this, e) : a == kConfirmNewGameFormName ? d = new ConfirmNewGameForm(b, c, this, e) : a == kConfirmRestartFormName ? d = new ConfirmRestartForm(b, c, this, e) : a == kCreditsFormName ? d = new CreditsForm(b, c, this, e) : a == kGameHudFormName ? d = new GameHudForm(b, c, this, e) : a == kGameTypeFormName ? d = new GameTypeForm(b, c, this, e) : a == kHelpForm01Name ? d = new HelpForm(b, c, this, e) : a == kHelpForm02Name ? d = new HelpForm(b, c, this, e) : a == kHelpForm03Name ? d = new HelpForm(b, c, this, e) : a == kHelpForm04Name ? d = new HelpForm(b, c, this, e) : a == kHelpForm05Name ? d = new HelpForm(b, c, this, e) : a == kHelpForm06Name ? d = new HelpForm(b, c, this, e) : a == kInGameOptionsFormName ? d = new InGameOptionsForm(b, c, this, e) : a == kLoadingFormName ? d = new LoadingForm(b, c, this, e) : a == kMapConfigurationFormName ? d = new MapConfigurationForm(b, c, this, e) : a == kMapSelectionFormName ? d = new MapSelectionForm(b, c, this, e) : a == kNewHighScoreFormName ? d = new NewHighScoreForm(b, c, this, e) : a == kScoresFormName ? d = new ScoresForm(b, c, this, e) : a == kTitleScreenFormName ? d = new TitleScreenForm(b, c, this, e) : a == kTitleOptionsFormName ? d = new TitleOptionsForm(b, c, this, e) : a == kAchievementsForm && (d = new AchievementsForm(b, c, this, e)), Preloader.dependOn(this, d), d
            }, getFormWithName: function (a) {
                return a != null ? this.formNameToFormMap[a] : null
            }, render: function (a) {
                var b = RenderDevice.getRenderDevice(), c = this.formNameToFormMap[this.activeBackgroundFormName];
                EAGLView.sApplyViewOrientationTransform ? b.setViewport(0, 0, EAGLView.sScreenDimensions.height, EAGLView.sScreenDimensions.width) : b.setViewport(0, 0, EAGLView.sScreenDimensions.width, EAGLView.sScreenDimensions.height), b.loadIdentity(), b.translateModelViewMatrix(-EAGLView.sScreenDimensions.width * .5, -EAGLView.sScreenDimensions.height * .5, -160), this.view.blurFramebuffer || c.render(a), c.postRender(a), this.activePopupFormName !== null ? (this.screenTintOpacity += a * kScreenTintFadeSpeed, this.screenTintOpacity = MIN(this.screenTintOpacity, 1), this.formNameToFormMap[this.activePopupFormName].render(a)) : (this.screenTintOpacity -= a * kScreenTintFadeSpeed, this.screenTintOpacity = MAX(this.screenTintOpacity, 0))
            }, checkForFormSwitch: function () {
                var a = this.targetPopupFormName === null || this.formNameToFormMap[this.targetPopupFormName] != undefined && this.formNameToFormMap[this.targetPopupFormName].isLoaded, b = this.formNameToFormMap[this.targetBackgroundFormName] != undefined && this.formNameToFormMap[this.targetBackgroundFormName].isLoaded;
                if (this.activePopupFormName != this.targetPopupFormName && a) {
                    if (this.activePopupFormName != null) {
                        var c = this.formNameToFormMap[this.activePopupFormName];
                        c != null && c.onFormClose(), this.unloadForm(this.activePopupFormName)
                    }
                    this.previousPopupFormName = this.activePopupFormName, this.activePopupFormName = this.targetPopupFormName;
                    if (this.targetPopupFormName != null) {
                        this.targetPopupFormTimeoutID && this.targetPopupFormName != kLoadingFormName && (clearTimeout(this.targetPopupFormTimeoutID), delete this.targetPopupFormTimeoutID);
                        var c = this.formNameToFormMap[this.targetPopupFormName];
                        c != null && c.onFormOpen()
                    }
                }
                if (this.activeBackgroundFormName != this.targetBackgroundFormName && (this.activeBackgroundFormName == null || this.targetBackgroundFormName == null || this.activeBackgroundFormName != this.targetBackgroundFormName) && b) {
                    if (this.activeBackgroundFormName != null) {
                        var c = this.formNameToFormMap[this.activeBackgroundFormName];
                        c != null && c.onFormClose(), this.unloadForm(this.activeBackgroundFormName)
                    }
                    this.activeBackgroundFormName = this.targetBackgroundFormName;
                    var c = this.formNameToFormMap[this.targetBackgroundFormName];
                    c != null && c.onFormOpen()
                }
            }, update: function (a) {
                this.checkForFormSwitch(), this.formNameToFormMap[this.activeBackgroundFormName].update(a), this.activePopupFormName !== null && (this.formNameToFormMap[this.activePopupFormName].update(a), this.checkForFormSwitch())
            }, unloadForm: function (a) {
                a != null && (this.formNameToFormMap[a] && this.formNameToFormMap[a].destroy(), delete this.formNameToFormMap[a])
            }, touchesBegan: function (a) {
                if (this.activePopupFormName != null) {
                    var b = this.formNameToFormMap[this.activePopupFormName];
                    b.touchesBegan(a)
                } else {
                    var b = this.formNameToFormMap[this.activeBackgroundFormName];
                    b.touchesBegan(a)
                }
                this.checkForFormSwitch()
            }, touchesMoved: function (a) {
                if (this.activePopupFormName != null) {
                    var b = this.formNameToFormMap[this.activePopupFormName];
                    b.touchesMoved(a)
                } else {
                    var b = this.formNameToFormMap[this.activeBackgroundFormName];
                    b.touchesMoved(a)
                }
                this.checkForFormSwitch()
            }, touchesEnded: function (a) {
                if (this.activePopupFormName != null) {
                    var b = this.formNameToFormMap[this.activePopupFormName];
                    b.touchesEnded(a)
                } else {
                    var b = this.formNameToFormMap[this.activeBackgroundFormName];
                    b.touchesEnded(a)
                }
                this.checkForFormSwitch()
            }, mouseMoved: function (a, b, c, d) {
                if (this.activePopupFormName != null) {
                    var e = this.formNameToFormMap[this.activePopupFormName];
                    e.mouseMoved(a, b, c, d)
                } else {
                    var e = this.formNameToFormMap[this.activeBackgroundFormName];
                    e.mouseMoved(a, b, c, d)
                }
                this.checkForFormSwitch()
            }, buttonPressed: function (a) {
                if (this.activePopupFormName != null) {
                    var b = this.formNameToFormMap[this.activePopupFormName];
                    b.buttonPressed(a)
                } else {
                    var b = this.formNameToFormMap[this.activeBackgroundFormName];
                    b.buttonPressed(a)
                }
                this.checkForFormSwitch()
            }, buttonReleased: function (a) {
                if (this.activePopupFormName != null) {
                    var b = this.formNameToFormMap[this.activePopupFormName];
                    b.buttonReleased(a)
                } else {
                    var b = this.formNameToFormMap[this.activeBackgroundFormName];
                    b.buttonReleased(a)
                }
                this.checkForFormSwitch()
            }
        });
        window.UserInterface = a, Preloader.initialize("userinterface/userinterface.js")
    })
});
!function (t, e, i) { var n, o, h, r, a, s, l, d, c, g, u, f, p, m, w, v, x, y, b, T, C, H, k, W, E, I, M, L, F, R, S, K, P, B = { html: !1, photo: !1, iframe: !1, inline: !1, transition: "elastic", speed: 300, fadeOut: 300, width: !1, initialWidth: "600", innerWidth: !1, maxWidth: !1, height: !1, initialHeight: "450", innerHeight: !1, maxHeight: !1, scalePhotos: !0, scrolling: !0, opacity: .3, preloading: !0, className: !1, overlayClose: !0, escKey: !0, arrowKey: !0, top: !1, bottom: !1, left: !1, right: !1, fixed: !1, data: void 0, closeButton: !0, fastIframe: !0, open: !1, reposition: !0, loop: !0, slideshow: !1, slideshowAuto: !0, slideshowSpeed: 2500, slideshowStart: "start slideshow", slideshowStop: "stop slideshow", photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i, retinaImage: !1, retinaUrl: !1, retinaSuffix: "@2x.$1", current: "image {current} of {total}", previous: "previous", next: "next", close: "close", xhrError: "This content failed to load.", imgError: "This image failed to load.", returnFocus: !0, trapFocus: !0, onOpen: !1, onLoad: !1, onComplete: !1, onCleanup: !1, onClosed: !1, rel: function () { return this.rel }, href: function () { return t(this).attr("href") }, title: function () { return this.title }, createImg: function () { var e = new Image, i = t(this).data("cbox-img-attrs"); return "object" == typeof i && t.each(i, function (t, i) { e[t] = i }), e }, createIframe: function () { var i = e.createElement("iframe"), n = t(this).data("cbox-iframe-attrs"); return "object" == typeof n && t.each(n, function (t, e) { i[t] = e }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i } }, O = "colorbox", _ = "cbox", j = _ + "Element", D = _ + "_open", N = _ + "_load", z = _ + "_complete", A = _ + "_cleanup", q = _ + "_closed", U = _ + "_purge", $ = t("<a/>"), G = "div", Q = 0, J = {}; function V(i, n, o) { var h = e.createElement(i); return n && (h.id = _ + n), o && (h.style.cssText = o), t(h) } function X() { return i.innerHeight ? i.innerHeight : t(i).height() } function Y(e, i) { i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) { var n; return void 0 === this.cache[e] && (void 0 !== (n = t(this.el).attr("data-cbox-" + e)) ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== B[e] && (this.cache[e] = B[e])), this.cache[e] }, this.get = function (e) { var i = this.value(e); return t.isFunction(i) ? i.call(this.el, this) : i } } function Z(t) { var e = c.length, i = (I + t) % e; return i < 0 ? e + i : i } function tt(t, e) { return Math.round((/%/.test(t) ? ("x" === e ? g.width() : X()) / 100 : 1) * parseInt(t, 10)) } function et(t, e) { return t.get("photo") || t.get("photoRegex").test(e) } function it(t, e) { return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e } function nt(t) { "contains" in o[0] && !o[0].contains(t.target) && t.target !== n[0] && (t.stopPropagation(), o.focus()) } function ot(t) { ot.str !== t && (o.add(n).removeClass(ot.str).addClass(t), ot.str = t) } function ht(i) { t(e).trigger(i), $.triggerHandler(i) } var rt = function () { var t, e, i = _ + "Slideshow_", n = "click." + _; function h() { clearTimeout(e) } function r() { (C.get("loop") || c[I + 1]) && (h(), e = setTimeout(K.next, C.get("slideshowSpeed"))) } function a() { v.html(C.get("slideshowStop")).unbind(n).one(n, s), $.bind(z, r).bind(N, h), o.removeClass(i + "off").addClass(i + "on") } function s() { h(), $.unbind(z, r).unbind(N, h), v.html(C.get("slideshowStart")).unbind(n).one(n, function () { K.next(), a() }), o.removeClass(i + "on").addClass(i + "off") } function l() { t = !1, v.hide(), h(), $.unbind(z, r).unbind(N, h), o.removeClass(i + "off " + i + "on") } return function () { t ? C.get("slideshow") || ($.unbind(A, l), l()) : C.get("slideshow") && c[1] && (t = !0, $.one(A, l), C.get("slideshowAuto") ? a() : s(), v.show()) } }(); function at(h) { var g, w; if (!R) { if (g = t(h).data(O), C = new Y(h, g), w = C.get("rel"), I = 0, w && !1 !== w && "nofollow" !== w ? (c = t("." + j).filter(function () { return new Y(this, t.data(this, O)).get("rel") === w }), -1 === (I = c.index(C.el)) && (c = c.add(C.el), I = c.length - 1)) : c = t(C.el), !L) { L = F = !0, ot(C.get("className")), o.css({ visibility: "hidden", display: "block", opacity: "" }), u = V(G, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), r.css({ width: "", height: "" }).append(u), H = a.height() + d.height() + r.outerHeight(!0) - r.height(), k = s.width() + l.width() + r.outerWidth(!0) - r.width(), W = u.outerHeight(!0), E = u.outerWidth(!0); var v = tt(C.get("initialWidth"), "x"), x = tt(C.get("initialHeight"), "y"), y = C.get("maxWidth"), P = C.get("maxHeight"); C.w = Math.max((!1 !== y ? Math.min(v, tt(y, "x")) : v) - E - k, 0), C.h = Math.max((!1 !== P ? Math.min(x, tt(P, "y")) : x) - W - H, 0), u.css({ width: "", height: C.h }), K.position(), ht(D), C.get("onOpen"), T.add(m).hide(), o.focus(), C.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", nt, !0), $.one(q, function () { e.removeEventListener("focus", nt, !0) })), C.get("returnFocus") && $.one(q, function () { t(C.el).focus() }) } var B = parseFloat(C.get("opacity")); n.css({ opacity: B == B ? B : "", cursor: C.get("overlayClose") ? "pointer" : "", visibility: "visible" }).show(), C.get("closeButton") ? b.html(C.get("close")).appendTo(r) : b.appendTo("<div/>"), function () { var e, n, o, h = K.prep, r = ++Q; F = !0, M = !1, ht(U), ht(N), C.get("onLoad"), C.h = C.get("height") ? tt(C.get("height"), "y") - W - H : C.get("innerHeight") && tt(C.get("innerHeight"), "y"), C.w = C.get("width") ? tt(C.get("width"), "x") - E - k : C.get("innerWidth") && tt(C.get("innerWidth"), "x"), C.mw = C.w, C.mh = C.h, C.get("maxWidth") && (C.mw = tt(C.get("maxWidth"), "x") - E - k, C.mw = C.w && C.w < C.mw ? C.w : C.mw); C.get("maxHeight") && (C.mh = tt(C.get("maxHeight"), "y") - W - H, C.mh = C.h && C.h < C.mh ? C.h : C.mh); if (e = C.get("href"), S = setTimeout(function () { p.show() }, 100), C.get("inline")) { var a = t(e).eq(0); o = t("<div>").hide().insertBefore(a), $.one(U, function () { o.replaceWith(a) }), h(a) } else C.get("iframe") ? h(" ") : C.get("html") ? h(C.get("html")) : et(C, e) ? (e = it(C, e), M = C.get("createImg"), t(M).addClass(_ + "Photo").bind("error." + _, function () { h(V(G, "Error").html(C.get("imgError"))) }).one("load", function () { r === Q && setTimeout(function () { var e; C.get("retinaImage") && i.devicePixelRatio > 1 && (M.height = M.height / i.devicePixelRatio, M.width = M.width / i.devicePixelRatio), C.get("scalePhotos") && (n = function () { M.height -= M.height * e, M.width -= M.width * e }, C.mw && M.width > C.mw && (e = (M.width - C.mw) / M.width, n()), C.mh && M.height > C.mh && (e = (M.height - C.mh) / M.height, n())), C.h && (M.style.marginTop = Math.max(C.mh - M.height, 0) / 2 + "px"), c[1] && (C.get("loop") || c[I + 1]) && (M.style.cursor = "pointer", t(M).bind("click." + _, function () { K.next() })), M.style.width = M.width + "px", M.style.height = M.height + "px", h(M) }, 1) }), M.src = e) : e && f.load(e, C.get("data"), function (e, i) { r === Q && h("error" === i ? V(G, "Error").html(C.get("xhrError")) : t(this).contents()) }) }() } } function st() { o || (P = !1, g = t(i), o = V(G).attr({ id: O, class: !1 === t.support.opacity ? _ + "IE" : "", role: "dialog", tabindex: "-1" }).hide(), n = V(G, "Overlay").hide(), p = t([V(G, "LoadingOverlay")[0], V(G, "LoadingGraphic")[0]]), h = V(G, "Wrapper"), r = V(G, "Content").append(m = V(G, "Title"), w = V(G, "Current"), y = t('<button type="button"/>').attr({ id: _ + "Previous" }), x = t('<button type="button"/>').attr({ id: _ + "Next" }), v = t('<button type="button"/>').attr({ id: _ + "Slideshow" }), p), b = t('<button type="button"/>').attr({ id: _ + "Close" }), h.append(V(G).append(V(G, "TopLeft"), a = V(G, "TopCenter"), V(G, "TopRight")), V(G, !1, "clear:left").append(s = V(G, "MiddleLeft"), r, l = V(G, "MiddleRight")), V(G, !1, "clear:left").append(V(G, "BottomLeft"), d = V(G, "BottomCenter"), V(G, "BottomRight"))).find("div div").css({ float: "left" }), f = V(G, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), T = x.add(y).add(w).add(v)), e.body && !o.parent().length && t(e.body).append(n, o.append(h, f)) } function lt() { function i(t) { t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), at(this)) } return !!o && (P || (P = !0, x.click(function () { K.next() }), y.click(function () { K.prev() }), b.click(function () { K.close() }), n.click(function () { C.get("overlayClose") && K.close() }), t(e).bind("keydown." + _, function (t) { var e = t.keyCode; L && C.get("escKey") && 27 === e && (t.preventDefault(), K.close()), L && C.get("arrowKey") && c[1] && !t.altKey && (37 === e ? (t.preventDefault(), y.click()) : 39 === e && (t.preventDefault(), x.click())) }), t.isFunction(t.fn.on) ? t(e).on("click." + _, "." + j, i) : t("." + j).live("click." + _, i)), !0) } t[O] || (t(st), (K = t.fn[O] = t[O] = function (e, i) { var n = this; return e = e || {}, t.isFunction(n) && (n = t("<a/>"), e.open = !0), n[0] ? (st(), lt() && (i && (e.onComplete = i), n.each(function () { var i = t.data(this, O) || {}; t.data(this, O, t.extend(i, e)) }).addClass(j), new Y(n[0], e).get("open") && at(n[0])), n) : n }).position = function (e, i) { var n, c, u, f = 0, p = 0, m = o.offset(); function w() { a[0].style.width = d[0].style.width = r[0].style.width = parseInt(o[0].style.width, 10) - k + "px", r[0].style.height = s[0].style.height = l[0].style.height = parseInt(o[0].style.height, 10) - H + "px" } if (g.unbind("resize." + _), o.css({ top: -9e4, left: -9e4 }), c = g.scrollTop(), u = g.scrollLeft(), C.get("fixed") ? (m.top -= c, m.left -= u, o.css({ position: "fixed" })) : (f = c, p = u, o.css({ position: "absolute" })), !1 !== C.get("right") ? p += Math.max(g.width() - C.w - E - k - tt(C.get("right"), "x"), 0) : !1 !== C.get("left") ? p += tt(C.get("left"), "x") : p += Math.round(Math.max(g.width() - C.w - E - k, 0) / 2), !1 !== C.get("bottom") ? f += Math.max(X() - C.h - W - H - tt(C.get("bottom"), "y"), 0) : !1 !== C.get("top") ? f += tt(C.get("top"), "y") : f += Math.round(Math.max(X() - C.h - W - H, 0) / 2), o.css({ top: m.top, left: m.left, visibility: "visible" }), h[0].style.width = h[0].style.height = "9999px", n = { width: C.w + E + k, height: C.h + W + H, top: f, left: p }, e) { var v = 0; t.each(n, function (t) { n[t] === J[t] || (v = e) }), e = v } J = n, e || o.css(n), o.dequeue().animate(n, { duration: e || 0, complete: function () { w(), F = !1, h[0].style.width = C.w + E + k + "px", h[0].style.height = C.h + W + H + "px", C.get("reposition") && setTimeout(function () { g.bind("resize." + _, K.position) }, 1), t.isFunction(i) && i() }, step: w }) }, K.resize = function (t) { var e; L && ((t = t || {}).width && (C.w = tt(t.width, "x") - E - k), t.innerWidth && (C.w = tt(t.innerWidth, "x")), u.css({ width: C.w }), t.height && (C.h = tt(t.height, "y") - W - H), t.innerHeight && (C.h = tt(t.innerHeight, "y")), t.innerHeight || t.height || (e = u.scrollTop(), u.css({ height: "auto" }), C.h = u.height()), u.css({ height: C.h }), e && u.scrollTop(e), K.position("none" === C.get("transition") ? 0 : C.get("speed"))) }, K.prep = function (i) { if (L) { var n, h = "none" === C.get("transition") ? 0 : C.get("speed"); u.remove(), (u = V(G, "LoadedContent").append(i)).hide().appendTo(f.show()).css({ width: (C.w = C.w || u.width(), C.w = C.mw && C.mw < C.w ? C.mw : C.w, C.w), overflow: C.get("scrolling") ? "auto" : "hidden" }).css({ height: (C.h = C.h || u.height(), C.h = C.mh && C.mh < C.h ? C.mh : C.h, C.h) }).prependTo(r), f.hide(), t(M).css({ float: "none" }), ot(C.get("className")), n = function () { var i, n, r = c.length; function a() { !1 === t.support.opacity && o[0].style.removeAttribute("filter") } L && (n = function () { clearTimeout(S), p.hide(), ht(z), C.get("onComplete") }, m.html(C.get("title")).show(), u.show(), r > 1 ? ("string" == typeof C.get("current") && w.html(C.get("current").replace("{current}", I + 1).replace("{total}", r)).show(), x[C.get("loop") || I < r - 1 ? "show" : "hide"]().html(C.get("next")), y[C.get("loop") || I ? "show" : "hide"]().html(C.get("previous")), rt(), C.get("preloading") && t.each([Z(-1), Z(1)], function () { var i = c[this], n = new Y(i, t.data(i, O)), o = n.get("href"); o && et(n, o) && (o = it(n, o), e.createElement("img").src = o) })) : T.hide(), C.get("iframe") ? (i = C.get("createIframe"), C.get("scrolling") || (i.scrolling = "no"), t(i).attr({ src: C.get("href"), class: _ + "Iframe" }).one("load", n).appendTo(u), $.one(U, function () { i.src = "//about:blank" }), C.get("fastIframe") && t(i).trigger("load")) : n(), "fade" === C.get("transition") ? o.fadeTo(h, 1, a) : a()) }, "fade" === C.get("transition") ? o.fadeTo(h, 0, function () { K.position(0, n) }) : K.position(h, n) } }, K.next = function () { !F && c[1] && (C.get("loop") || c[I + 1]) && (I = Z(1), at(c[I])) }, K.prev = function () { !F && c[1] && (C.get("loop") || I) && (I = Z(-1), at(c[I])) }, K.close = function () { L && !R && (R = !0, L = !1, ht(A), C.get("onCleanup"), g.unbind("." + _), n.fadeTo(C.get("fadeOut") || 0, 0), o.stop().fadeTo(C.get("fadeOut") || 0, 0, function () { o.hide(), n.hide(), ht(U), u.remove(), setTimeout(function () { R = !1, ht(q), C.get("onClosed") }, 1) })) }, K.remove = function () { o && (o.stop(), t[O].close(), o.stop(!1, !0).remove(), n.remove(), R = !1, o = null, t("." + j).removeData(O).removeClass(j), t(e).unbind("click." + _).unbind("keydown." + _)) }, K.element = function () { return t(C.el) }, K.settings = B) }(jQuery, document, window);
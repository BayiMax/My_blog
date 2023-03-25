!function (t) {
    t.tooltip = function (t, e, o, i) {
        if (t && "string" == typeof t) {
            if (e && "Object" === {}.constructor.name) var n = e.transition || !1, r = e.time || 200, s = null;
            var c = document.querySelectorAll(t), l = document.createElement("div");
            Array.prototype.slice.call(c).forEach((function (t) {
                t.addEventListener("mouseenter", (function () {
                    var e = t.offsetLeft, i = t.offsetTop, r = t.offsetWidth, s = t.offsetHeight,
                        c = t.getAttribute("data-tip"), f = t.getAttribute("data-direction") || "top";
                    !function (t, e, i) {
                        if (t.innerHTML = e, t.className = "tool_tip tool_tip_" + i, document.body.appendChild(t), !0 === n) return void a(t, "enter");
                        "function" == typeof o && o()
                    }(l, c, f);
                    var p = l.offsetWidth, u = l.offsetHeight;
                    switch (f) {
                        case"top":
                            l.style.left = e + r / 2 - p / 2 + "px", l.style.top = i - u - 7 + "px";
                            break;
                        case"left":
                            l.style.left = e - p - 7 + "px", l.style.top = i + s / 2 - u / 2 + "px";
                            break;
                        case"right":
                            l.style.left = e + r + 7 + "px", l.style.top = i + s / 2 - u / 2 + "px";
                            break;
                        case"bottom":
                            l.style.left = e + r / 2 - p / 2 + "px", l.style.top = i + s + 7 + "px"
                    }
                }), !1), function (t) {
                    t.addEventListener("mouseleave", (function () {
                        var t = document.querySelector(".tool_tip");
                        if (t) {
                            if (!0 === n) return a(t, "leave");
                            document.body.removeChild(t), "function" == typeof i && i()
                        }
                    }), !1)
                }(t)
            }))
        } else console.error(new Error('The "tooltip" method requires the "class" of at least one parameter'));

        function a(t, e) {
            s && clearTimeout(s), t.style.setProperty("transition", "opacity " + r / 1e3 + "s"), t.style.setProperty("-webkit-transition", "opacity " + r / 1e3 + "s"), "enter" === e ? (t.style.opacity = 0, s = setTimeout((function () {
                t.style.opacity = 1, "function" == typeof o && o()
            }), 0)) : "leave" === e && (t.style.opacity = 0, "function" == typeof i && i(), s = setTimeout((function () {
                try {
                    document.body.removeChild(t)
                } catch (t) {
                }
            }), r))
        }
    }
}(window);
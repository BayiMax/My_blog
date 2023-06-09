!function (t) {
    "use strict";
    var o = function (o, f) {
        this.options = t.extend({}, t.fn.affix.defaults, f), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy((function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }), this)), this.$element = t(o), this.checkPosition()
    };
    o.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var o, f = t(document).height(), i = this.$window.scrollTop(), n = this.$element.offset(),
                e = this.options.offset, s = e.bottom, a = e.top;
            "object" != typeof e && (s = a = e), "function" == typeof a && (a = e.top()), "function" == typeof s && (s = e.bottom()), o = !(null != this.unpin && i + this.unpin <= n.top) && (null != s && n.top + this.$element.height() >= f - s ? "bottom" : null != a && i <= a && "top"), this.affixed !== o && (this.affixed = o, this.unpin = "bottom" == o ? n.top - i : null, this.$element.removeClass("affix affix-top affix-bottom").addClass("affix" + (o ? "-" + o : "")))
        }
    };
    var f = t.fn.affix;
    t.fn.affix = function (f) {
        return this.each((function () {
            var i = t(this), n = i.data("affix"), e = "object" == typeof f && f;
            n || i.data("affix", n = new o(this, e)), "string" == typeof f && n[f]()
        }))
    }, t.fn.affix.Constructor = o, t.fn.affix.defaults = { offset: 0 }, t.fn.affix.noConflict = function () {
        return t.fn.affix = f, this
    }, t(window).on("load", (function () {
        t('[data-spy="affix"]').each((function () {
            var o = t(this), f = o.data();
            f.offset = f.offset || {}, f.offsetBottom && (f.offset.bottom = f.offsetBottom), f.offsetTop && (f.offset.top = f.offsetTop), o.affix(f)
        }))
    }))
}(window.jQuery);
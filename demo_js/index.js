function switchNightMode() {
    document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'), setTimeout((function () {
        document.querySelector("body").classList.contains("DarkMode") ? (document.querySelector("body").classList.remove("DarkMode"), localStorage.setItem("isDark", "0"), document.getElementById("modeicon").setAttribute("xlink:href", "#icon-moon")) : (document.querySelector("body").classList.add("DarkMode"), localStorage.setItem("isDark", "1"), document.getElementById("modeicon").setAttribute("xlink:href", "#icon-sun")), setTimeout((function () {
            document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition = "opacity 3s", document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity = "0", setTimeout((function () {
                document.getElementsByClassName("Cuteen_DarkSky")[0].remove()
            }), 1e3)
        }), 2e3)
    }));
    "light" === ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night), document.getElementById("modeicon").setAttribute("xlink:href", "#icon-sun")) : (activateLightMode(), saveToLocal.set("theme", "light", 2), document.querySelector("body").classList.add("DarkMode"), document.getElementById("modeicon").setAttribute("xlink:href", "#icon-moon")), "function" == typeof utterancesTheme && utterancesTheme(), "object" == typeof FB && window.loadFBComment(), window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout((() => window.disqusReset()), 200)
}

function tagsBarActive() {
    var e = $("#tags-bar"), t = window.location.pathname;
    if ("/" == (t = decodeURIComponent(t))) {
        if (e) {
            const t = '\n            <div class="category-bar-item select" id="首页">\n            <a href="javascript:;">首页</a>\n            </div>';
            e.find(".category-bar-items").prepend(t)
        }
    } else {
        if (/\/tags\/.*?\//.test(t)) {
            var n = t.split("/")[2];
            e && document.getElementById(n).classList.add("select")
        }
    }
}

function categoriesBarActive() {
    let e = $("#category-bar"), t = window.location.pathname;
    if ("/" == (t = decodeURIComponent(t))) {
        if (e) {
            const t = '\n            <div class="category-bar-item select" id="首页">\n            <a href="javascript:;">首页</a>\n            </div>';
            e.find(".category-bar-items").prepend(t)
        }
    } else {
        if (/\/categories\/.*?\//.test(t)) {
            var n = t.split("/")[2];
            e && document.getElementById(n).classList.add("select")
        }
    }
}

function topCategoriesBarScroll() {
    if (document.getElementById("category-bar-items")) {
        let e = document.getElementById("category-bar-items");
        e.addEventListener("mousewheel", (function (t) {
            let n = -t.wheelDelta / 2;
            e.scrollLeft += n, t.preventDefault()
        }), !1)
    }
}

function PublicSacrificeDay() {
    let e = ["0403", "0404", "0405", "0406", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1213"],
        t = new Date, n = "", o = t.getMonth() + 1;
    return t.getMonth() > 9 ? n += o : n += "0" + o, t.getDate() > 9 ? n += t.getDate() : n += "0" + t.getDate(), e.indexOf(n) > -1 ? 1 : 0
}

window.onload = function () {
    const e = window.location.pathname, t = document.querySelector(".card-shuo .card-content .item-headline i");
    t && (t.className = "iconfont ByaMax-qiubite");
    const n = document.querySelector("#post-comment .comment-head .comment-headline i");
    if (n && (n.className = "iconfont ByaMax-xinxi"), localStorage.setItem("right_menu_switch", "on"), tooltip(".resource-wrap-container-item", {
        transition: !0,
        time: 200
    }), e === /resource/) {
        $("body").attr({"data-spy": "scroll", "data-target": "affix-container"});
        const o = $("#affix-container"), i = o.offset().top;
        o.attr("data-offset-top", i - 60), $(".affix-container-item").click((function (e) {
            let t = $(this).attr("data-id"),
                n = o.hasClass("affix") ? $("#" + t).offset().top : $("#" + t).offset().top - o.height();
            $(this).addClass("active").siblings().removeClass("active"), $("html, body").stop().animate({scrollTop: n - 60 - o.height()}, 1e3), e.preventDefault()
        })), $(".affix-container").width($("#resource-sharing").width() + "px"), window.addEventListener("resize", (function () {
            o.width($("#resource-sharing").width() + "px")
        })), window.addEventListener("scroll", (function () {
            $(".affix-container-item").each((function () {
                let e = $(this).attr("data-id");
                $(window).scrollTop() > $("#" + e).offset().top - 80 - o.height() && $(this).addClass("active").siblings().removeClass("active")
            }))
        }))
    }
}, document.addEventListener("scroll", (function () {
    const e = window.scrollY + document.documentElement.clientHeight, t = window.scrollY,
        n = document.getElementById("pagination"), o = document.getElementById("post-comment");
    if (o && n) {
        const i = o.offsetTop + o.offsetHeight / 2;
        n.style.display = i > t && i < e ? "flex" : "none"
    }
})), tagsBarActive(), categoriesBarActive(), topCategoriesBarScroll(), PublicSacrificeDay() && document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
let ByaMax = {};

function rightMenuOff() {
    localStorage.setItem("right_menu_switch", "off"), btf.snackbarShow("你关他干撒子o.0?")
}

function right_menu_switch() {
    "off" === localStorage.getItem("right_menu_switch") ? (localStorage.setItem("right_menu_switch", "on"), btf.snackbarShow("开了开了"), ByaMax.showRightMenu(!0)) : rightMenuOff()
}

function welcome() {
    window.sessionStorage.getItem("isWelcome") || (swal({
        title: "我看看是哪位o.0?",
        button: "收到",
        imageUrl: "./picture/me1.jpg",
        text: "点OK啊!等撒子?"
    }), window.sessionStorage.setItem("isWelcome", !0))
}

ByaMax.showRightMenu = function (e, t = 0, n = 0) {
    let o = $("#rightMenu");
    o.css("top", t + "px").css("left", n + "px"), e ? o.show() : o.hide()
}, navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || (window.oncontextmenu = function (e) {
    if ($(".rightMenu-group.hide").hide(), document.getSelection().toString() && $("#menu-tools").show(), e.ctrlKey) return !0;
    if ("off" === localStorage.getItem("right_menu_switch")) return !0;
    let t = e.clientX + 10, n = e.clientY, o = $("#rightMenu").width(), i = $("#rightMenu").height();
    return t + o > window.innerWidth && (t -= o + 10), n + i > window.innerHeight && (n -= n + i - window.innerHeight), ByaMax.showRightMenu(!0, n, t), !1
}, window.addEventListener("click", (function () {
    ByaMax.showRightMenu(!1)
}))), $("#menu-translate").on("click", (function () {
    // translateInitialization()
})), ByaMax.scrollToTop = function () {
    btf.scrollToDest(0, 500)
}, ByaMax.openTidio = function () {
    window.tidioChatApi.show(), window.tidioChatApi.open()
}, console.log("\n %c BayMax %c ./otherHtml/article.html \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), $(document).ready((() => {
    welcome()
}));
window.addEventListener("load", (() => {
    let e = !1;
    const t = () => {
        const t = document.body.style;
        t.width = "100%", t.overflow = "hidden", btf.animateIn(document.getElementById("search-mask"), "to_show 0.5s"), btf.animateIn(document.querySelector("#local-search .search-dialog"), "titleScale 0.5s"), setTimeout((() => {
            document.querySelector("#local-search-input input").focus()
        }), 100), e || (!async function (e) {
            let t = [];
            const n = e.split(".")[1], c = await fetch(GLOBAL_CONFIG.root + e);
            if ("json" === n) t = await c.json(); else if ("xml" === n) {
                const e = await c.text(), n = await (new window.DOMParser).parseFromString(e, "text/xml"), o = await n;
                t = [...o.querySelectorAll("entry")].map((function (e) {
                    return {
                        title: e.querySelector("title").textContent,
                        content: e.querySelector("content") && e.querySelector("content").textContent,
                        url: e.querySelector("url").textContent
                    }
                }))
            }
            if (c.ok) {
                const e = document.getElementById("loading-database");
                e.nextElementSibling.style.display = "block", e.remove()
            }
            const o = document.querySelector("#local-search-input input"),
                a = document.getElementById("local-search-results"), l = document.getElementById("loading-status");
            o.addEventListener("input", (function () {
                const e = this.value.trim().toLowerCase().split(/[\s]+/);
                "" !== e[0] && (l.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>'), a.innerHTML = "";
                let n = '<div class="search-result-list">';
                if (e.length <= 0) return;
                let c = 0;
                t.forEach((function (t) {
                    let o = !0, a = t.title ? t.title.trim().toLowerCase() : "";
                    const l = t.content ? t.content.trim().replace(/<[^>]+>/g, "").toLowerCase() : "",
                        s = t.url.startsWith("/") ? t.url : GLOBAL_CONFIG.root + t.url;
                    let r = -1, i = -1, d = -1;
                    if ("" !== a || "" !== l ? e.forEach((function (e, t) {
                        r = a.indexOf(e), i = l.indexOf(e), r < 0 && i < 0 ? o = !1 : (i < 0 && (i = 0), 0 === t && (d = i))
                    })) : o = !1, o) {
                        if (d >= 0) {
                            let t = d - 30, o = d + 100;
                            t < 0 && (t = 0), 0 === t && (o = 100), o > l.length && (o = l.length);
                            let r = l.substring(t, o);
                            e.forEach((function (e) {
                                const t = new RegExp(e, "gi");
                                r = r.replace(t, '<span class="search-keyword">' + e + "</span>"), a = a.replace(t, '<span class="search-keyword">' + e + "</span>")
                            })), n += '<div class="local-search__hit-item"><a href="' + s + '" class="search-result-title">' + a + "</a>", c += 1, "" !== l && (n += '<p class="search-result">' + r + "...</p>")
                        }
                        n += "</div>"
                    }
                })), 0 === c && (n += '<div id="local-search__hits-empty">' + GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) + "</div>"), n += "</div>", a.innerHTML = n, "" !== e[0] && (l.innerHTML = ""), window.pjax && window.pjax.refresh(a)
            }))
        }(GLOBAL_CONFIG.localSearch.path), e = !0), document.addEventListener("keydown", (function e(t) {
            "Escape" === t.code && (n(), document.removeEventListener("keydown", e))
        }))
    }, n = () => {
        const e = document.body.style;
        e.width = "", e.overflow = "", btf.animateOut(document.querySelector("#local-search .search-dialog"), "search_close .5s"), btf.animateOut(document.getElementById("search-mask"), "to_hide 0.5s")
    }, c = () => {
        document.querySelector("#search-button > .search").addEventListener("click", t), document.getElementById("search-mask").addEventListener("click", n), document.querySelector("#local-search .search-close-button").addEventListener("click", n)
    };
    c(), window.addEventListener("pjax:complete", (function () {
        "block" === getComputedStyle(document.querySelector("#local-search .search-dialog")).display && n(), c()
    }))
}));
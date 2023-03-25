!function (c, l, a, r, i, t, y) {
    a[c]("metadata", (function (e) {
        try {
            var n = "dataLayer", o = "gtag";
            a[n] = a[n] || [], a[o] = a[o] || function () {
                a[n].push(arguments)
            }, a[o]("config", "G-2P0LMHZNDD", {send_page_view: !1}), a[o]("event", "Clarity", {
                eventCategory: "Clarity",
                eventAction: e.sessionId,
                nonInteraction: !0,
                "claritydimension": ["https://clarity.microsoft.com/ga", e.projectId, e.userId, e.sessionId].join("/")
            })
        } catch (e) {
        }
    }));
    if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId);
    a[c].t = !0, (t = l.createElement(r)).async = !0, t.src = "https://www.clarity.ms/eus-f/s/0.7.0/clarity.js", (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y), a[c]("start", i), a[c].q.unshift(a[c].q.pop())
}("clarity", document, window, "script", {
    "projectId": "c5fan0plby",
    "upload": "https://m.clarity.ms/collect",
    "expire": 365,
    "cookies": ["_uetmsclkid", "_uetvid"],
    "track": true,
    "lean": false,
    "content": true,
    "extract": [3, 1, ["4f509md79", "zjy56jaz", "4s4zm72hj"]],
    "report": "https://www.clarity.ms/report/eus2"
});
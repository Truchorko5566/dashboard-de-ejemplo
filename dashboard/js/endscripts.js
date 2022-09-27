let loadedDelayedfa = false
let delayedfa = () => {
    if (loadedDelayedfa) {
        return
    }
    loadedDelayedfa = true;


    (function () {
        c = document.createElement('link');
        c.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css';
        c.rel = 'stylesheet';
        document.head.insertBefore(c, document.getElementsByTagName("head")[0].firstChild);
    })();

}

document.addEventListener('DOMContentLoaded', () => setTimeout(delayedfa, 5000))
addEventListener('scroll', () => {
    setTimeout(delayedfa, 300)
}, { once: true });
['click', 'mousemove'].forEach(e => addEventListener(e, delayedfa, { once: true }))

let loadedDelayedui = false
let delayedui = () => {
    if (loadedDelayedui) {
        return
    }
    loadedDelayedui = true;

    s = document.createElement("script");
    s.src = "https://d1pnnwteuly8z3.cloudfront.net/libs/floating-ui/1.0.1/floating-ui.min.js";
    s.async = false;
    document.body.appendChild(s);
    s = document.createElement("script");
    s.src = "https://d1pnnwteuly8z3.cloudfront.net/libs/versoly-ui/2.0.0/versoly-ui.js";
    s.async = false;
    document.body.appendChild(s);

}

document.addEventListener('DOMContentLoaded', () => setTimeout(delayedui, 5000))
addEventListener('scroll', () => {
    setTimeout(delayedui, 300)
}, { once: true });
['click', 'mousemove'].forEach(e => addEventListener(e, delayedui, { once: true }))



if (document.getElementById("navbar")) {
    var style = document.createElement('style');
    style.innerHTML = '* {scroll-margin-top: ' + document.getElementById("navbar").offsetHeight + 'px}';
    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
}
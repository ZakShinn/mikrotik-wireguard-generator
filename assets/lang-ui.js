(function (w) {
    var KEY = 'mikrotik-lang';
    var EVT = 'mikrotik-lang-change';

    function normalize(v) {
        return v === 'en' ? 'en' : 'vi';
    }

    function getStored() {
        try {
            return normalize(localStorage.getItem(KEY));
        } catch (e) {
            return 'vi';
        }
    }

    function setStored(lang) {
        var v = normalize(lang);
        try {
            localStorage.setItem(KEY, v);
        } catch (e) {}
        notify(v);
        return v;
    }

    function toggle() {
        return setStored(getStored() === 'vi' ? 'en' : 'vi');
    }

    function notify(lang) {
        try {
            w.dispatchEvent(new CustomEvent(EVT, { detail: { lang: lang } }));
        } catch (e) {}
    }

    // Keep multiple tabs in sync
    try {
        w.addEventListener('storage', function (e) {
            if (!e || e.key !== KEY) return;
            notify(getStored());
        });
    } catch (e) {}

    w.MikrotikLang = { get: getStored, set: setStored, toggle: toggle };
})(typeof window !== 'undefined' ? window : this);


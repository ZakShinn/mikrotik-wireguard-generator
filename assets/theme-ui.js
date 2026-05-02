(function (w) {
    var KEY = 'mikrotik-theme';

    function get() {
        try {
            return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
        } catch (e) {
            return 'light';
        }
    }

    function setMeta(dark) {
        var m = document.querySelector('meta[name="theme-color"]');
        if (m) m.setAttribute('content', dark ? '#0c0f14' : '#f5f7fa');
    }

    function apply(theme) {
        var dark = theme === 'dark';
        document.documentElement.classList.toggle('theme-dark', dark);
        setMeta(dark);
        try {
            localStorage.setItem(KEY, dark ? 'dark' : 'light');
        } catch (e) {}
    }

    function toggle() {
        apply(get() === 'dark' ? 'light' : 'dark');
    }

    function syncMeta() {
        setMeta(document.documentElement.classList.contains('theme-dark'));
    }

    w.MikrotikTheme = { get: get, apply: apply, toggle: toggle, syncMeta: syncMeta };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', syncMeta);
    } else {
        syncMeta();
    }
})(typeof window !== 'undefined' ? window : this);

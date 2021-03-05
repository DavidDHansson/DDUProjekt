import smoothscroll from 'smoothscroll-polyfill';

export default function scrollToTop() {
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
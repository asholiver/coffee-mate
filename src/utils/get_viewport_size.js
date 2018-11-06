const getViewportSize = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const rootEl = document.querySelector("html");
    rootEl.style.setProperty("--g-viewport-height", height + "px");
    rootEl.style.setProperty("--g-viewport-width", width + "px");
};

export default getViewportSize;

const DURATION_MS = 1400;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function scrollToY(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return;
  }

  const startTime = performance.now();

  function step(now: number) {
    const progress = Math.min((now - startTime) / DURATION_MS, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/** Rola devagar até a seção quando o usuário clica em um link âncora (#secao). */
export function enableSmoothAnchorScroll() {
  function handleClick(event: MouseEvent) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;

    const link = (event.target as Element).closest<HTMLAnchorElement>(
      'a[href^="#"]',
    );
    if (!link) return;

    const id = link.getAttribute("href")!.slice(1);
    const target = id ? document.getElementById(id) : document.body;
    if (!target) return;

    event.preventDefault();
    scrollToY(id ? target.getBoundingClientRect().top + window.scrollY : 0);
    history.pushState(null, "", id ? `#${id}` : window.location.pathname);
  }

  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
}

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)');

function readTheme() {
  try {
    return localStorage.getItem('portfolio-theme');
  } catch {
    return null;
  }
}

function setTheme(dark) {
  root.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
}

setTheme(root.dataset.theme === 'dark');
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  setTheme(dark);
  try {
    localStorage.setItem('portfolio-theme', root.dataset.theme);
  } catch {
    // The chosen theme still applies to the current page.
  }
});
preferredTheme.addEventListener('change', (event) => {
  if (!readTheme()) setTheme(event.matches);
});

const navigation = document.querySelector('#navigation');
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const mobileLayout = window.matchMedia('(max-width: 49rem)');

function setMenu(open) {
  navigation.hidden = mobileLayout.matches && !open;
  menuButton.setAttribute('aria-expanded', String(open));
}

function updateMenuLayout() {
  menuButton.hidden = !mobileLayout.matches;
  setMenu(false);
}

updateMenuLayout();
mobileLayout.addEventListener('change', updateMenuLayout);
menuButton.addEventListener('click', () => setMenu(navigation.hidden));
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

function closeMenuOutsideHeader(event) {
  if (!header.contains(event.target) && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
}
document.addEventListener('click', closeMenuOutsideHeader);
document.addEventListener('focusin', closeMenuOutsideHeader);

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href')));
let framePending = false;
let currentSection = -1;

function updateCurrentSection() {
  framePending = false;
  const threshold = header.getBoundingClientRect().bottom + 28;
  let active = 0;
  if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
    active = sections.length - 1;
  } else {
    for (let index = 1; index < sections.length; index++) {
      if (sections[index].getBoundingClientRect().top > threshold) break;
      active = index;
    }
  }
  if (active === currentSection) return;
  currentSection = active;
  sectionLinks.forEach((link, index) => {
    if (index === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function scheduleSectionUpdate() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(updateCurrentSection);
}
window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
window.addEventListener('resize', scheduleSectionUpdate);
window.addEventListener('load', scheduleSectionUpdate);
updateCurrentSection();

function connectForm(form, successMessage) {
  const button = form.querySelector('button');
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;
    button.disabled = true;
    status.textContent = 'Sending…';
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.textContent = successMessage;
    } catch {
      status.textContent = 'Could not submit. Please try again or email info@jpjoshi.com.np.';
    } finally {
      button.disabled = false;
    }
  });
}

connectForm(document.querySelector('#customForm'), 'Thanks. Your message was sent.');
connectForm(document.querySelector('#newsLetter'), 'Thanks for subscribing.');

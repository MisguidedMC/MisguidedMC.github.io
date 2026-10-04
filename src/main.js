/** Progressive enhancements: all portfolio content remains visible without JS. */
const root = document.documentElement;
const themeButton = document.querySelector('.theme-button');
function applyTheme(theme) {
  root.dataset.theme = theme;
  const next = theme === 'dark' ? 'light' : 'dark';
  themeButton.textContent = `${next[0].toUpperCase()}${next.slice(1)} mode`;
  themeButton.setAttribute('aria-label', `Switch to ${next} theme`);
}
try {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') applyTheme(saved);
} catch { /* Storage may be unavailable; the default theme remains usable. */ }
themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('portfolio-theme', theme); } catch { /* Device preference only. */ }
});
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuButton.focus();
  }
});
const filters = document.querySelector('.project-filters');
const cards = [...document.querySelectorAll('.project-card')];
filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count += 1;
  });
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
});
document.querySelector('#year').textContent = String(new Date().getFullYear());

const contributionPanel = document.querySelector('.contribution-panel');
const contributionGrid = document.querySelector('#contribution-grid');
const contributionTotal = document.querySelector('#contribution-total');
const contributionStatus = document.querySelector('#contribution-status');
const contributionLegend = document.querySelector('#contribution-legend');

async function loadContributionActivity() {
  const username = contributionPanel.dataset.githubUser;
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      { headers: { Accept: 'application/json' } }
    );
    if (!response.ok) throw new Error(`Contribution service returned ${response.status}`);
    const data = await response.json();
    if (
      !Array.isArray(data.contributions) ||
      !Number.isSafeInteger(data.total?.lastYear) ||
      data.total.lastYear < 0
    ) {
      throw new Error('Contribution service returned an unexpected response');
    }

    const firstDate = new Date(`${data.contributions[0]?.date}T00:00:00Z`);
    if (Number.isNaN(firstDate.getTime())) throw new Error('Contribution data has no valid date range');
    const fragment = document.createDocumentFragment();
    const emptyCell = () => {
      const cell = document.createElement('span');
      cell.className = 'contribution-day is-empty';
      cell.setAttribute('aria-hidden', 'true');
      fragment.append(cell);
    };
    for (let index = 0; index < firstDate.getUTCDay(); index += 1) emptyCell();

    const dateFormatter = new Intl.DateTimeFormat(undefined, {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    for (const day of data.contributions) {
      if (
        typeof day.date !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}$/.test(day.date) ||
        !Number.isSafeInteger(day.count) ||
        day.count < 0 ||
        !Number.isInteger(day.level) ||
        day.level < 0 ||
        day.level > 4
      ) {
        throw new Error('Contribution service returned invalid daily activity');
      }
      const date = new Date(`${day.date}T00:00:00Z`);
      if (Number.isNaN(date.getTime())) throw new Error('Contribution service returned an invalid date');
      const cell = document.createElement('span');
      cell.className = 'contribution-day';
      cell.dataset.level = String(day.level);
      cell.title = `${day.count} contributions on ${dateFormatter.format(date)}`;
      cell.setAttribute('aria-hidden', 'true');
      fragment.append(cell);
    }
    while (fragment.childElementCount % 7 !== 0) emptyCell();

    contributionGrid.replaceChildren(fragment);
    contributionGrid.hidden = false;
    contributionGrid.setAttribute(
      'aria-label',
      `${data.total.lastYear.toLocaleString()} public GitHub contributions in the last year`
    );
    contributionTotal.textContent = data.total.lastYear.toLocaleString();
    contributionTotal.hidden = false;
    contributionLegend.hidden = false;
    contributionStatus.textContent = `Showing the last ${data.contributions.length} days of public activity.`;
  } catch (error) {
    console.error('Unable to load GitHub contribution activity:', error);
    contributionStatus.textContent = 'Contribution activity could not be loaded right now. View my GitHub profile for the latest activity.';
  }
}

if (contributionPanel) loadContributionActivity();

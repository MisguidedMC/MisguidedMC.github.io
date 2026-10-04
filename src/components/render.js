/** Escape content at the HTML boundary, including attribute values. */
export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
const e = escapeHtml;
export function sectionHeading(number, label, title, description = '') {
  return `<div class="section-heading"><div><p class="eyebrow"><span>${e(number)}</span> / ${e(label)}</p><h2>${title}</h2></div>${description ? `<p class="section-description">${e(description)}</p>` : ''}</div>`;
}
export function projectCard(project, index) {
  return `<article class="project-card" data-category="${e(project.category)}"><div class="project-preview" aria-hidden="true"><div class="preview-bar"><span></span><span></span><span></span><b>${e(project.language)}</b></div><pre>${project.code.map(e).join('\n')}</pre><span class="preview-index">0${index + 1}</span></div><div class="project-body"><p class="eyebrow">${e(project.category)}</p><h3>${e(project.name)}</h3><p>${e(project.description)}</p><p class="project-focus">${e(project.focus)}</p><a class="text-link" href="https://github.com/MisguidedMC/${e(project.repository)}">View repository<span class="sr-only">: ${e(project.name)}</span></a></div></article>`;
}
export function skillCard(skill, index) {
  return `<article class="skill-card"><span class="skill-number">0${index + 1}</span><h3>${e(skill.name)}</h3><p>${e(skill.detail)}</p><ul class="tags">${skill.items.map(item => `<li>${e(item)}</li>`).join('')}</ul></article>`;
}
export function experienceCard(item) {
  return `<article class="experience-card"><div class="experience-meta"><p class="eyebrow">${e(item.date)}</p>${item.current ? '<span class="current-label">Current role</span>' : ''}<p class="organization-code">${e(item.acronym)}</p></div><div><h3>${e(item.role)}</h3><p class="organization">${e(item.organization)}</p><p>${e(item.summary)}</p><details${item.current ? ' open' : ''}><summary>Responsibilities &amp; contributions</summary><ul class="responsibilities">${item.points.map(point => `<li>${e(point)}</li>`).join('')}</ul></details></div></article>`;
}

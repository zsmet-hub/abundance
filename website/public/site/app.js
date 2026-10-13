import { apps, categoryGroups, filterApps, statusLabels } from './catalog.js';
import tutorials from './tutorial-data.js';
import { appSourceURL } from './source-links.js';
import { icon } from '/packages/ui/icons.js';

const $ = selector => document.querySelector(selector);
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const appById = new Map(apps.map(app => [app.id, app]));
const platforms = { windows: 'Windows', macos: 'macOS', linux: 'Linux' };
const collections = {
  everyday: { name: 'Everyday essentials', ids: ['finish', 'cells', 'link', 'day', 'parcel', 'compare'] },
  creative: { name: 'The creative desk', ids: ['light', 'vector', 'sprite', 'compose', 'board', 'stage'] },
  research: { name: 'Stay curious', ids: ['cite', 'recall', 'branch', 'index', 'sift', 'words'] },
  organized: { name: 'Get a little organized', ids: ['timeline', 'hours', 'keep', 'savor', 'shelf', 'stock'] },
  data: { name: 'Make sense of data', ids: ['tidy', 'cells', 'sample', 'plot', 'inspect', 'conduit'] }
};
const groupIcons = { 'All tools':'spark', 'Write & document':'form', 'Create & design':'photo', 'Sound & video':'audio', 'Work & organize':'timeline', 'Learn & research':'search', 'Data & technical':'finance' };
let group = 'All tools';
let category = 'All tools';
let opener = null;
let openerReference = null;
let routeClosing = false;
let closePending = false;
let lastRoute = '';

$('.hero-footnote').textContent = `All ${apps.length} apps are in development. No installers are available yet.`;
$('.development').lastChild.textContent = `${apps.length} apps taking shape`;
$('.search-icon').innerHTML = icon('search');
$('.close-button').innerHTML = icon('close');
document.querySelectorAll('[data-ui-icon]').forEach(element => { element.innerHTML = icon(element.dataset.uiIcon); });
document.querySelectorAll('[data-app-icon]').forEach(element => {
  if (appById.has(element.dataset.appIcon)) element.innerHTML = `<img src="/site/icons/${element.dataset.appIcon}.svg" width="96" height="96" alt="" decoding="async">`;
});
$('.filters').innerHTML = Object.keys(categoryGroups).map((name, index) => `<button class="filter" aria-pressed="${index === 0}" data-category="${escape(name)}">${icon(groupIcons[name])}<span>${escape(name === 'All tools' ? 'All apps' : name)}</span><span>${filterApps('', name).length}</span></button>`).join('');

function focusOptions() {
  const available = categoryGroups[group];
  $('#subcategory').innerHTML = `<option value="${escape(group)}">${group === 'All tools' ? 'All categories' : 'All in this category'}</option>` + available.map(name => `<option value="${escape(name)}">${escape(name)}</option>`).join('');
  $('#subcategory').value = category;
}
function params() {
  const value = new URLSearchParams();
  if ($('#search').value) value.set('q', $('#search').value);
  if (group !== 'All tools') value.set('group', group);
  if (category !== group) value.set('category', category);
  if ($('#curation').value) value.set('collection', $('#curation').value);
  if ($('#format').value) value.set('format', $('#format').value);
  if ($('#platform').value) value.set('platform', $('#platform').value);
  if ($('#sort').value !== 'relevance') value.set('sort', $('#sort').value);
  return value.toString();
}
function listURL() { const value = params(); return '#collection' + (value ? '?' + value : ''); }
function appURL(id) { const value = params(); return '#app/' + id + (value ? '?' + value : ''); }
function releaseURL() { const value = params(); return '#release-information' + (value ? '?' + value : ''); }
function isModalRoute() { const path = location.hash.slice(1).split('?')[0]; return path.startsWith('app/') || path === 'release-information'; }
function hasVerifiedInstaller(app, platform) {
  // A target OS is not compatibility evidence. Only verified release artifacts count.
  // All current catalog records are in development with release: null.
  return app.status === 'released' && Array.isArray(app.release?.downloads) && app.release.downloads.some(download => download.platform === platform && download.verified === true && typeof download.url === 'string' && download.url.length > 0);
}
function visibleApps(ignoreCategory = false) {
  let result = filterApps($('#search').value, ignoreCategory ? 'All tools' : category, $('#format').value, $('#sort').value);
  const collection = collections[$('#curation').value];
  if (collection) result = result.filter(app => collection.ids.includes(app.id));
  const platform = $('#platform').value;
  if (platform) result = result.filter(app => hasVerifiedInstaller(app, platform));
  return result;
}
function renderSpotlights() {
  $('#spotlight').innerHTML = ['finish', 'light', 'cells'].map(id => {
    const app = appById.get(id);
    return `<a class="spotlight-card" href="${appURL(id)}" data-app="${id}" data-origin="spotlight"><img src="/site/icons/${id}.svg" width="62" height="62" alt="" loading="lazy" decoding="async"><div class="spotlight-copy"><h3>${escape(app.name)}</h3><p>${escape(app.tagline)}</p><span class="spotlight-category">${escape(app.category)} · In development</span></div>${icon('arrow')}</a>`;
  }).join('');
}
function updateNavigation() {
  const path = location.hash.slice(1).split('?')[0];
  const current = path === 'about' ? 'about' : path === 'collection' || path.startsWith('app/') ? 'collection' : 'discover';
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function render() {
  updateNavigation();
  $('.development-banner [data-info="releases"]').setAttribute('href', releaseURL());
  const filtered = visibleApps();
  $('#catalog').innerHTML = filtered.map(app => `<article class="app-card"><div class="card-top"><div class="app-icon"><img src="/site/icons/${app.id}.svg" width="60" height="60" alt="" loading="lazy" decoding="async"></div><div class="card-heading"><h3><a href="${appURL(app.id)}" data-app="${app.id}" data-origin="catalog">${escape(app.name)}</a></h3><div class="card-category">${escape(app.category)}</div></div></div><p>${escape(app.description)}</p><div class="card-bottom"><span class="status">${escape(statusLabels[app.status])}</span><span class="card-open" aria-hidden="true">Explore ${icon('arrow')}</span></div></article>`).join('');
  const platform = $('#platform').value;
  $('#result-count').textContent = platform ? `${filtered.length} verified ${platforms[platform]} installers` : `${filtered.length} ${filtered.length === 1 ? 'app' : 'apps'} in development`;
  const active = [$('#search').value && `Search: “${$('#search').value}”`, category !== 'All tools' && category, collections[$('#curation').value]?.name, $('#format').value && `Format: ${$('#format').value}`, platform && `${platforms[platform]} installers`].filter(Boolean);
  $('#active-filters').textContent = active.join(' · ');
  $('#clear-filters').hidden = !active.length && $('#sort').value === 'relevance';
  $('#empty').hidden = filtered.length !== 0;
  if (platform) {
    $('#empty-title').textContent = `No ${platforms[platform]} installers yet.`;
    $('#empty-message').textContent = `No apps in this collection have a verified ${platforms[platform]} release. Explore the ${apps.length} apps in development to see their workflows, walkthroughs, and current limitations.`;
  } else {
    $('#empty-title').textContent = 'Nothing here just yet.';
    const elsewhere = visibleApps(true).length;
    $('#empty-message').textContent = elsewhere ? `${elsewhere} matching ${elsewhere === 1 ? 'app is' : 'apps are'} in other categories. Choose All apps or clear your filters.` : 'Try fewer words, a file format like PDF, or a broader task such as “photo”. This collection may not cover every task yet.';
  }
  document.querySelectorAll('.filter').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === group)));
  renderSpotlights();
}
function changed() {
  history.replaceState(null, '', listURL());
  lastRoute = location.href;
  render();
}
function resetValues() {
  group = category = 'All tools';
  $('#search').value = '';
  $('#format').value = '';
  $('#platform').value = '';
  $('#curation').value = '';
  $('#sort').value = 'relevance';
  focusOptions();
}
function reset() { resetValues(); changed(); $('#search').focus(); }
$('.filters').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  group = button.dataset.category;
  category = group;
  focusOptions();
  changed();
});
$('#subcategory').addEventListener('change', () => { category = $('#subcategory').value; changed(); });
$('#search').addEventListener('input', changed);
['format', 'platform', 'curation', 'sort'].forEach(id => $('#' + id).addEventListener('change', changed));
$('#reset-search').addEventListener('click', reset);
$('#clear-filters').addEventListener('click', reset);
$('.task-examples').addEventListener('click', event => {
  const button = event.target.closest('[data-query]');
  if (!button) return;
  resetValues();
  $('#search').value = button.dataset.query;
  changed();
  $('#search').focus();
});

function rememberOpener(trigger, appId) {
  opener = trigger || document.querySelector(`#catalog [data-app="${appId}"]`) || document.querySelector(`[data-app="${appId}"]`);
  openerReference = opener?.dataset.app ? { app: opener.dataset.app, origin: opener.dataset.origin || 'catalog' } : null;
}
function showDialog() {
  document.body.classList.add('modal-open');
  if (!$('#detail-dialog').open) $('#detail-dialog').showModal();
  $('#detail-dialog').scrollTop = 0;
  $('.close-button').focus();
}
function openDetail(id, trigger) {
  const app = appById.get(id);
  if (!app) return false;
  lastRoute = location.href;
  updateNavigation();
  rememberOpener(trigger, app.id);
  const tutorial = tutorials[id];
  const sourceURL = appSourceURL(id);
  $('#detail-content').innerHTML = `<p class="detail-breadcrumb">The collection / ${escape(app.category)}</p>
    <div class="detail-hero"><div class="app-icon"><img src="/site/icons/${id}.svg" width="96" height="96" alt="" decoding="async"></div><div class="detail-title-copy"><h2 id="detail-title">${escape(app.name)}</h2><p class="tagline">${escape(app.tagline)}</p><p class="detail-category">${escape(app.category)} · Abundance</p></div><div class="download-unavailable"><button disabled aria-describedby="download-status">Not released</button><span id="download-status">No installer available</span></div></div>
    <dl class="detail-facts"><div><dt>CURRENT STAGE</dt><dd>In development</dd></div><div><dt>PRICING COMMITMENT</dt><dd>Planned to be free</dd></div><div><dt>PLATFORM SUPPORT</dt><dd>Not yet verified</dd></div></dl>
    <div class="detail-tabs" role="tablist" aria-label="App details"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" tabindex="0" data-tab="overview">Overview</button><button id="tab-walkthrough" role="tab" aria-selected="false" aria-controls="panel-walkthrough" tabindex="-1" data-tab="walkthrough">Walkthrough</button><button id="tab-compatibility" role="tab" aria-selected="false" aria-controls="panel-compatibility" tabindex="-1" data-tab="compatibility">Compatibility</button></div>
    <section id="panel-overview" class="detail-panel" role="tabpanel" aria-labelledby="tab-overview" tabindex="0"><h3>About ${escape(app.name)}</h3><p class="description">${escape(app.description)}</p><h3>Workflow in development</h3><ul class="workflow-list">${app.features.map(feature => `<li>${icon('check')}<span>${escape(feature)}</span></li>`).join('')}</ul><p class="development-note"><strong>Engineering prototype.</strong> No released installer is available. Native installation and desktop behavior still need verification.</p><h3>Formats & limits</h3><p class="description">${escape(tutorial?.formats || app.formats)}</p><p class="development-note">${escape(app.note)}</p>${sourceURL ? `<p class="source-action"><a class="button secondary" href="${escape(sourceURL)}" target="_blank" rel="noopener noreferrer">View ${escape(app.name)} source on GitHub <span aria-hidden="true">↗</span></a></p>` : `<div class="source-pending">${icon('guide')}<div><strong>Source publication is in progress</strong><p>This app’s source link will appear here once its public files are available.</p></div></div>`}</section>
    <section id="panel-walkthrough" class="detail-panel" role="tabpanel" aria-labelledby="tab-walkthrough" tabindex="0" hidden><h3>A little guidance</h3><p class="description">A practice walkthrough for the engineering build. Practice files and Help are inside the app. This catalog does not open, run, or install an app.</p>${tutorial ? `<details class="tutorial" open><summary>Practice walkthrough · ${tutorial.steps.length} steps</summary><ol>${tutorial.steps.map(step => `<li><strong>${escape(step.title)}</strong><p>${escape(step.text)}</p></li>`).join('')}</ol></details><details class="tutorial"><summary>Limitations & troubleshooting</summary><ul>${(tutorial.trouble || []).map(item => `<li>${escape(item)}</li>`).join('')}</ul></details>` : '<p class="development-note">A practice walkthrough is being prepared.</p>'}</section>
    <section id="panel-compatibility" class="detail-panel" role="tabpanel" aria-labelledby="tab-compatibility" tabindex="0" hidden><h3>Downloads & compatibility</h3><p class="description">Windows, macOS, and Linux installers have not been released. A platform listed here is a release target, not a claim of verified support.</p><div class="compatibility-grid">${Object.entries(platforms).map(([key, name], index) => `<article class="compatibility-card" data-platform="${key}"><span class="platform-symbol" aria-hidden="true">${['⊞', '⌘', '›_'][index]}</span><h4>${name}</h4><p>Installer not released<br>Compatibility unverified</p><button disabled aria-label="${name} installer unavailable">Not available yet</button></article>`).join('')}</div><p class="development-note"><strong>Before downloading.</strong> Minimum operating-system versions, processor architectures, signing details, file sizes, checksums, and installation steps will accompany verified release artifacts. None is available yet.</p><h3>Current engineering limitations</h3><p class="description">${escape(app.note)}</p></section>`;
  $('#detail-status').textContent = statusLabels[app.status];
  $('.dialog-bottom').hidden = false;
  showDialog();
  document.title = `${app.name} — Abundance`;
  return true;
}
function selectDetailTab(name, moveFocus = false) {
  const tab = document.querySelector(`[data-tab="${name}"]`);
  if (!tab) return;
  document.querySelectorAll('[data-tab]').forEach(button => {
    const selected = button.dataset.tab === name;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
    $('#' + button.getAttribute('aria-controls')).hidden = !selected;
  });
  if (moveFocus) tab.focus();
}
$('#detail-content').addEventListener('click', event => {
  const tab = event.target.closest('[data-tab]');
  if (tab) selectDetailTab(tab.dataset.tab);
});
$('#detail-content').addEventListener('keydown', event => {
  const tab = event.target.closest('[data-tab]');
  if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...document.querySelectorAll('[data-tab]')];
  const current = tabs.indexOf(tab);
  const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  selectDetailTab(tabs[index].dataset.tab, true);
});
function closeDetail() {
  if (closePending) return;
  if (isModalRoute()) {
    if (history.state?.detail) { closePending = true; history.back(); }
    else { history.replaceState(null, '', listURL()); restoreRoute(); }
  } else $('#detail-dialog').close();
}
$('.close-button').addEventListener('click', closeDetail);
$('.detail-home').addEventListener('click', event => { event.preventDefault(); closeDetail(); });
$('#detail-dialog').addEventListener('cancel', event => { event.preventDefault(); closeDetail(); });
$('#detail-dialog').addEventListener('click', event => {
  if (event.target !== $('#detail-dialog')) return;
  const bounds = event.target.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDetail();
});
$('#detail-dialog').addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (!isModalRoute()) document.title = 'Abundance — Discover your next tool.';
  (opener?.isConnected && !$('#detail-dialog').contains(opener) ? opener : $('#search')).focus();
  if (!routeClosing && isModalRoute()) closeDetail();
});
function restoreRoute(event) {
  if (event && lastRoute === location.href) return;
  lastRoute = location.href;
  closePending = false;
  const [path, query = ''] = location.hash.slice(1).split('?');
  const value = new URLSearchParams(query);
  group = Object.hasOwn(categoryGroups, value.get('group')) ? value.get('group') : 'All tools';
  category = categoryGroups[group].includes(value.get('category')) ? value.get('category') : group;
  $('#search').value = (value.get('q') || '').slice(0, 200);
  $('#format').value = value.get('format') || '';
  if ($('#format').selectedIndex < 0) $('#format').value = '';
  $('#platform').value = Object.hasOwn(platforms, value.get('platform')) ? value.get('platform') : '';
  $('#curation').value = Object.hasOwn(collections, value.get('collection')) ? value.get('collection') : '';
  $('#sort').value = value.get('sort') === 'name' ? 'name' : 'relevance';
  focusOptions();
  const previous = openerReference;
  render();
  if (path.startsWith('app/') && openDetail(path.slice(4))) return;
  if (path === 'release-information') {
    const container = history.state?.infoOrigin === 'footer' ? '.footer' : '.development-banner';
    openInformation('releases', document.querySelector(`${container} [data-info="releases"]`));
    return;
  }
  routeClosing = true;
  if (previous?.app) opener = document.querySelector(`[data-app="${previous.app}"][data-origin="${previous.origin}"]`);
  else if (previous?.info) opener = document.querySelector(`${previous.origin === 'footer' ? '.footer' : '.development-banner'} [data-info="${previous.info}"]`);
  if ($('#detail-dialog').open) $('#detail-dialog').close();
  routeClosing = false;
  document.title = 'Abundance — Discover your next tool.';
  if (path.startsWith('app/')) {
    $('#result-count').textContent = 'That app is not in this collection. Explore the apps below.';
    history.replaceState(null, '', listURL());
  }
}
window.addEventListener('popstate', restoreRoute);
window.addEventListener('hashchange', restoreRoute);
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !$('#detail-dialog').open && !document.activeElement.isContentEditable && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault(); $('#search').focus();
  }
});

const information = {
  help: { title: 'A little help.', body: '<p class="description">Browse the categories, choose a collection, or search by app name, task, or file format. Select an app to explore its engineering workflow, format limits, practice walkthrough, and compatibility status.</p><h3>Finding your way</h3><p class="description">Filters work together. Clear filters to start again, or use the suggested searches to explore across the full catalog. The platform filter shows verified installers only; all three platforms currently have no releases.</p><h3>Keyboard shortcuts</h3><p class="description">Press / to focus search. Use Tab to move between controls, Enter to open an app, and Escape to close details. In app details, use the left and right arrow keys to switch tabs, or Home and End to jump to the first or last tab.</p><h3>Where are the downloads?</h3><p class="description">All 104 apps are in development. No released installers are available. Installation instructions will accompany genuine, verified release artifacts.</p>' },
  privacy: { title: 'Your work, your space.', body: '<p class="description">This catalog has no app accounts, advertising, file uploads, or database. The site does not add analytics or cookies. Search and filters run in your browser. Your current search is included in the address fragment so Back and Forward can restore it.</p><h3>How this catalog works</h3><p class="description">Vercel hosts this website and receives normal web requests, including your IP address and browser information. Code, styles, and icons load from this website. GitHub receives a request if you open a source link. Search text stays in the address fragment and browser history; the catalog does not send it to the host. Do not type sensitive information into search.</p><h3>Our desktop commitment</h3><p class="description">We intend to build free, offline tools without ads or required accounts. App-specific data handling, permissions, local storage, deletion, and recovery details will be documented and tested before each release.</p><p class="development-note">This catalog is not a security audit or a privacy guarantee for future applications. It does not run the desktop applications or access your files.</p>' },
  releases: { title: 'Thoughtfully taking shape.', body: `<p class="description">All ${apps.length} apps are in development. No Windows, macOS, or Linux installers have been released.</p><h3>What you can explore now</h3><p class="description">The original app collection, its development workflows, format limitations, and engineering practice walkthroughs. Curated collections are browsing suggestions, not popularity charts or release endorsements.</p><h3>What makes a release ready?</h3><p class="description">Core workflows, native installation, offline operation, and file handling need verification on each supported operating system. Release notes, minimum system requirements, signing details, checksums, and installation steps will accompany genuine download artifacts.</p><p class="development-note">No release dates, ratings, download counts, or screenshots of released apps are claimed. The artwork in this catalog consists of the collection’s original app icons.</p>` }
};
function openInformation(name, trigger) {
  const info = information[name];
  if (!info) return;
  lastRoute = location.href;
  opener = trigger;
  openerReference = { info: name, origin: trigger?.closest('.footer') ? 'footer' : 'banner' };
  $('#detail-content').innerHTML = `<h2 id="detail-title">${info.title}</h2>${info.body}`;
  $('.dialog-bottom').hidden = true;
  showDialog();
  document.title = `${name === 'releases' ? 'Release information' : name === 'privacy' ? 'Privacy' : 'Help'} — Abundance`;
}
document.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
  const searchLink = event.target.closest('[data-find-app]');
  if (searchLink) {
    event.preventDefault();
    history.replaceState(null, '', listURL());
    updateNavigation();
    $('#search').focus();
    return;
  }
  const appLink = event.target.closest('[data-app]');
  if (appLink) {
    event.preventDefault();
    history.pushState({ detail: true }, '', appLink.getAttribute('href'));
    openDetail(appLink.dataset.app, appLink);
    return;
  }
  const collectionLink = event.target.closest('[data-collection]');
  if (collectionLink) {
    event.preventDefault();
    history.pushState(null, '', collectionLink.getAttribute('href'));
    restoreRoute();
    $('#collection').scrollIntoView?.({ block: 'start' });
    $('#collection-title').setAttribute('tabindex', '-1');
    $('#collection-title').focus({ preventScroll: true });
    return;
  }
  const informationLink = event.target.closest('[data-info]');
  if (informationLink) {
    event.preventDefault();
    if (informationLink.dataset.info === 'releases') {
      history.pushState({ detail: true, infoOrigin: informationLink.closest('.footer') ? 'footer' : 'banner' }, '', releaseURL());
    }
    openInformation(informationLink.dataset.info, informationLink);
  }
});
restoreRoute();

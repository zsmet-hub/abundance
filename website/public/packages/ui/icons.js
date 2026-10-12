const paths={
form:'M7 3h7l4 4v14H5V3h2m7 0v5h5M8 12h7m-7 4h5',
guide:'M4 5h16v12H4zM9 21h6m-3-4v4M9 9l6 3-6 3z',
photo:'M4 4h16v16H4zM4 16l5-6 4 4 3-3 4 5M15 8h.01',
room:'M3 10l9-7 9 7v11H3zM8 21v-9h8v9M3 10h18',
audio:'M4 10v4m4-8v12m4-15v18m4-15v12m4-8v4',
finance:'M4 20V10m5 10V4m6 16v-7m5 7V7M2 20h20',
label:'M3 3h8l10 10-8 8L3 11zM7 7h.01m4 4 5 5m-8-2 5 5',
plan:'M3 3h18v18H3zM3 9h10V3m0 6v7h8M8 9v12',
invoice:'M5 3h14v18l-3-2-4 2-4-2-3 2zM8 7h8m-8 4h8m-8 4h4',
timeline:'M4 3v18M8 6h12M8 11h7m-3 5h8',
search:'m20 20-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
arrow:'M5 12h14m-6-6 6 6-6 6',close:'m6 6 12 12M6 18 18 6',check:'m5 12 4 4L19 6',spark:'M12 3l2 7 7 2-7 2-2 7-2-7-7-2 7-2z'};
export function icon(name,cls=''){return `<svg class="icon ${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.spark}"/></svg>`;}

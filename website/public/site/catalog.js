import catalog from '../packages/catalog/apps.js';
export const apps=catalog.map(app=>({...app,status:'development',release:null}));
export const statusLabels={planned:'Planned',development:'In development',released:'Released'};
export const categories=['All tools',...new Set(catalog.map(app=>app.category))];
export const categoryGroups={
 'All tools':categories.slice(1),
 'Write & document':['Documents','Writing'],
 'Create & design':['Creative','Design'],
 'Sound & video':['Audio','Music','Media'],
 'Work & organize':['Work','Planning','Organization','Files'],
 'Learn & research':['Learning','Research'],
 'Data & technical':['Data','Development','Specialist']
};
// Task vocabulary describes existing catalog scope, not a claim of release readiness.
export const taskVocabulary={
  "finish": "edit pdf fill form annotate document",
  "guide": "capture desktop steps record workflow tutorial guide make create build",
  "light": "edit photo crop image organize photos tone curve histogram color recipe batch",
  "room": "plan room furniture floor layout make create build",
  "cut": "edit podcast transcript audio",
  "ledger": "track spending budget finances csv",
  "label": "create make labels barcode qr code build",
  "measure": "measure blueprint drawing distance area takeoff",
  "invoice": "create make invoice bill customer build",
  "timeline": "plan project gantt chart schedule tasks make create build",
  "tidy": "clean csv data remove duplicate rows",
  "nest": "plan sheet cutting rectangular parts stock material make create build",
  "gather": "seating plan assign guests tables make create build",
  "hours": "track time work timesheet timer make create build",
  "keep": "manage home inventory organize receipts belongings make create build",
  "savor": "organize recipes recipe binder cooking grocery shopping list scale servings make create build",
  "roster": "organization chart reporting hierarchy staff tree make create build",
  "storyline": "create story timeline historical events narrative make build",
  "folio": "write markdown document preview export make create build",
  "compare": "compare text diff files differences",
  "branch": "create mind map brainstorm outline topic tree make build",
  "flow": "make flowchart process diagram draw connectors create build",
  "cite": "manage references citations bibliography research notes make create build",
  "recall": "create flashcards memorize study spaced repetition make build",
  "kin": "build family tree genealogy ancestry make create",
  "inspect": "inspect sqlite database tables queries",
  "frame": "write screenplay movie script fountain make create build",
  "book": "write make create ebook epub chapters build",
  "vector": "draw vector shapes svg artwork bezier linear gradient stops opacity make create build",
  "cue": "edit subtitles captions video timing make create build",
  "phrase": "compose music piano roll midi notes make create build",
  "tag": "edit mp3 tags song metadata album artist",
  "cells": "make create edit spreadsheet workbook formulas build",
  "gauge": "calculate units formulas calculation sheet make create build",
  "sprite": "draw pixel art create sprite animation make build",
  "stitch": "create cross stitch pattern chart embroidery symbols make build",
  "shelf": "search file catalog offline disks metadata",
  "trail": "edit gpx tracks waypoints repair route",
  "stage": "make create slide deck presentation slides speaker notes build",
  "press": "design page layout publication brochure magazine make create build",
  "theme": "analyze qualitative interviews code transcripts evidence",
  "gloss": "translate text segments translation memory make create build",
  "sample": "analyze statistics csv data experiment",
  "prompt": "teleprompter script rundown presenter display make create build",
  "scan": "ocr scanned document recognize text searchable pdf",
  "parcel": "open zip archive unzip extract files",
  "trace": "digitize graph chart image data points",
  "plot": "plot scientific graph chart data uncertainty make create build",
  "type": "create make font draw glyph typography build",
  "score": "write compose sheet music staff notation piano make create build",
  "fold": "print booklet pdf imposition signatures",
  "board": "create storyboard shots animatic sequence make build",
  "cross": "create crossword puzzle word grid make build",
  "match": "organize tournament bracket club results draws make create build",
  "day": "plan calendar events schedule recurrence ics make create build",
  "link": "take write notes linked notebook backlinks markdown make create build",
  "draft": "draw cad 2d dimension sketch geometry make create build",
  "circuit": "analyze electrical circuit voltage current simulation make create build",
  "bond": "draw molecule chemical structure reactions make create build",
  "atlas": "map geojson polygons geographic data projection make create build",
  "relate": "create relational database tables sqlite constraints make build",
  "compose": "edit image layers photo composition raster make create build",
  "index": "search pdf text documents collection",
  "clean": "clean audio recording wav processing",
  "weave": "create build static website html css make",
  "seam": "draft sewing pattern outline seam allowance make create build",
  "read": "read ebooks epub annotate books",
  "mesh": "inspect 3d mesh boolean solid stl obj",
  "mix": "mix audio multitrack wav tracks make create build",
  "keys": "practice typing speed accuracy keyboard",
  "post": "read email archive eml messages attachments",
  "learn": "create lessons course quiz assessments elearning scorm make build",
  "write": "write edit word document docx formatting make create build",
  "people": "manage contacts address book vcard duplicates make create build",
  "motion": "animate bones rig keyframes poses make create build",
  "variation": "analyze chess games pgn variations moves",
  "model": "model types schema relationships typescript make create build",
  "struct": "edit xml json tree validate schema xpath make create build",
  "lane": "manage tasks kanban board todo checklists dependencies make create build",
  "bytes": "inspect edit binary hex bytes patch files",
  "logic": "simulate logic gates digital circuit traces make create build",
  "queue": "simulate service queue waiting network experiments make create build",
  "tiles": "create tile map game level layers tmx make build",
  "loom": "design weaving pattern draft shaft treadle liftplan wif make create build",
  "paper": "unfold 3d papercraft model actual scale sheets make create build",
  "night": "plan astronomy stargazing observing windows targets make create build",
  "tone": "synthesize sound create audio waveform wav make build",
  "listen": "practice ear training musical hearing exercises",
  "rise": "edit terrain heightfield elevation grid landscape make create build",
  "tale": "write interactive branching story offline player make create build",
  "needle": "design embroidery geometry stitches dst make create build",
  "stock": "track stock inventory movements reservations counts make create build",
  "words": "analyze text word patterns concordance tokens",
  "check": "manage manual test cases execution records evidence make create build",
  "compass": "geometric construction lessons dependencies make create build",
  "sift": "review screen research evidence decisions review counts",
  "mark": "annotate label images dataset bounding boxes",
  "math": "write equation formula mathml fractions roots make create build",
  "face": "compare fonts ttf glyph coverage typography",
  "poly": "create edit 3d model mesh textured glb make build",
  "accounts": "bookkeeping balanced journal reconcile statement entries make create build",
  "shift": "plan staffing schedule shifts availability assignments make create build",
  "copper": "design pcb circuit board footprints route nets gerber make create build",
  "conduit": "transform data pipeline join csv parquet lineage make create build"
};
const tasks=taskVocabulary;
const aliases={editing:'edit',edited:'edit',pdfs:'pdf',photos:'photo',images:'image',pictures:'photo',picture:'photo',spreadsheets:'spreadsheet',documents:'document',forms:'form',videos:'video',subtitles:'subtitle',captions:'subtitle',jpeg:'jpg',jpg:'jpg',wave:'wav',contacts:'contact',notes:'note',slides:'slide',decks:'deck',recipes:'recipe',fonts:'font',files:'file',tasks:'task',charts:'chart',books:'book',emails:'email',messages:'message',layers:'layer',tracks:'track',diagrams:'diagram',equations:'equation',recordings:'recording',grids:'grid',patterns:'pattern',maps:'map',models:'model',guests:'guest',events:'event',invoices:'invoice',labels:'label',transcripts:'transcript',scanned:'scan'};
const stop=new Set(['a','an','the','to','my','with','for','of','and','i','want','need','how','can','do','please','use']);
export function tokens(value){return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().match(/[\p{L}\p{N}]+/gu)?.map(t=>aliases[t]||t).filter(t=>!stop.has(t))||[];}
const index=new Map(apps.map(a=>[a.id,tokens([a.name,a.title,a.description,a.tagline,a.formats,...a.features,tasks[a.id]||''].join(' '))]));
export function filterApps(query='',category='All tools',format='',sort='relevance'){
 const words=tokens(query), allowed=Object.hasOwn(categoryGroups,category)?categoryGroups[category]:(categories.includes(category)?[category]:[]);
 const results=apps.filter(a=>allowed.includes(a.category)&&(!format||tokens(a.formats).includes(tokens(format)[0]))).map(a=>{
  const terms=index.get(a.id),match=words.every(w=>terms.includes(w)||(w.length>2&&tokens(a.name).some(t=>t.startsWith(w))));
  const score=(a.name.toLowerCase()===query.trim().toLowerCase()?1000:0)+words.reduce((n,w)=>n+(tokens(a.name).includes(w)?40:0)+(tokens(a.description).includes(w)?8:0)+(tokens(tasks[a.id]||'').includes(w)?12:0),0);
  return {a,match,score};
 }).filter(r=>r.match);
 if(sort==='name')results.sort((a,b)=>a.a.name.localeCompare(b.a.name));
 else if(words.length)results.sort((a,b)=>b.score-a.score);
 return results.map(r=>r.a);
}

# Third-party scope and distribution status

The root AGPL-3.0-only license applies to original Abundance code only. Existing third-party grants and notices remain in effect. Preserve adjacent LICENSE, NOTICE, PROVENANCE, THIRD-PARTY, vendor-notices and source files when redistributing components.

`third-party/licenses/` contains collected exact dependency license texts. `third-party/native-compliance/` contains upstream source/notice records and unresolved native redistribution requirements. `third-party/math-staging/` contains distinct MathLive, KaTeX, MathJax and NewCM font/source records. `third-party/dependencies.json` is an engineering inventory, not legal clearance; package metadata may differ from actual grants.

Cite's processor offers CPAL or AGPL version 3 or later; the actual grant is preserved in apps/cite/vendor-notices/citeproc-LICENSE. This source distribution uses its AGPL-3.0-or-later option. CSL styles have separate attribution/share-alike terms. Day's ical.js source is MPL-2.0. JSZip has a MIT option. Font and model notices remain distinct from code licenses.

No installed dependency tree, native executable, packaged desktop application or installer is included. LGPL/native linkage, font attribution and exact component-source correspondence must be resolved before binary distribution. See component records for the specific open requirements. This notice is not a claim that all third-party distribution checks are complete.

Folio and Frame use an original source adapter in apps/folio/pdf-vendor.js that imports the pinned pdf-lib and @pdf-lib/fontkit npm packages. The precompiled PDF/Fontkit bundle is not distributed in this source tree. A local build may generate third-party bundles; resolve complete bundle attribution before distributing them.

Nonruntime evidence headers for Cairo, libuiohook and RapidJSON are intentionally omitted from this source export. Historical component records may identify upstream paths and hashes; those records do not mean the headers are included here. Original app runtime code is unchanged by these omissions.

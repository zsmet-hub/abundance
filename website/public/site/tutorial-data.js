export default {
  "finish": {
    "formats": "Input: ordinary PDFs or standard AcroForm text/check/choice/radio forms. Organizer: 6 MiB combined originals, 32 originals, 200 current pages; all originals remain embedded within the 32 MiB project envelope. Output: copied packet, selected-page PDF, exact recovered original, or editable/flattened form PDF. Copied document metadata is regenerated. Encrypted PDF, XFA and digital signatures are refused.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "Make a three-page garden packet using finish-packet-a.pdf and finish-packet-b.pdf. Download finish-packet-walkthrough.md for the full guide. The practice files contain fictional information; never use a real signature or secrets. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Open and combine ordinary PDFs",
        "text": "Choose Open PDF and select finish-packet-a.pdf: Welcome, then Wrap-up. On Welcome, add a text mark Reviewed at X 42 / Y 120 with Add at X / Y. Choose Organize pages, read the limitations and source inventory, then Import another PDF → finish-packet-b.pdf. Activities and Spare are appended. Forms, links/annotations and tagged structures are refused without changing the packet.",
        "target": "Open PDF"
      },
      {
        "title": "Select, arrange and recover",
        "text": "Select only page 3 (Activities) and choose Move selected up once. Rotate selected 90°, then Undo, Redo, Undo to return it upright; Reviewed stays on Welcome. Uncheck Activities, select page 4 (Spare), then Delete selected pages and their marks. Expect Welcome → Activities → Wrap-up, all upright. Recover original: finish-packet-b.pdf writes a fresh copy containing Activities AND Spare. All original bytes remain in the project; deletion and visible marks are not secure redaction.",
        "target": "Move selected up"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Review, export or fill a form",
        "text": "Check I reviewed these page-copy limitations, then Export PDF to a fresh filename. Independently check the three-page order and Reviewed on Welcome. Select only pages 1 and 2; Extract selected PDF produces Welcome then Activities without removing them. For form practice, save this packet first, start New and Open PDF → practice-form.pdf. Enter Practice Person in practice-name. Export PDF keeps fields editable unless Flatten form fields on export is checked. Forms cannot enter the organizer; signature strokes are not certified signatures.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Save after your last edits, close, then choose Open for your practice .abundance project. If warned about unsaved changes, Keep editing and save first. For the packet, check Welcome → Activities → Wrap-up, upright rotation, Reviewed on Welcome and both retained originals. Export to a fresh PDF and check it in an independent reader. A form project should retain its field values and marks. Open your previous project when finished.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Organizer refuses a PDF: forms/widgets, annotations/links, bookmarks, attachments, tagged structures and other unsupported semantics cannot be copied safely. Keep the original; use the form workflow or prepare a separate simplified copy in its authoring app.",
      "Export blocked: apply or discard pending raw edits and acknowledge page-copy limitations. Importing another PDF resets the review. Use fresh export/recovery filenames; existing destinations are refused.",
      "Limit reached after deleting pages: all original bytes remain retained and count toward 6 MiB; deletion does not discard sources. Recover original saves the complete source, including removed pages. This is not secure redaction.",
      "Form text overflow: shorten the value or reduce field text size. CJK, complex-script shaping and unsupported characters are not supported. If preview fails, retain your project and report the error. Installed Windows, canvas rendering and dense-content extremes still need separate checks."
    ]
  },
  "guide": {
    "formats": "Input: supported native screen capture when available, or PNG/JPEG screenshots up to 24 megapixels. Up to 500 captured steps per session / 1,000 project steps. Output: local sanitized HTML/PDF, 16 MiB per sanitized PNG, 20 MiB total images and 32 MiB document output. Media projects require their companion assets. Capture permission/selection must remain visible and explicit.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "Use the supplied synthetic screenshot for editing practice. Do not capture real private information during a tutorial. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Capture or import consciously",
        "text": "For safe practice choose Import screenshots and select practice-image.png. Genuine capture requires an available native source picker and visible capture controls. Select a source, start explicitly, pause/resume as needed and stop before editing. If capture is unavailable, screenshot import is only the documented intermediate path. Never grant or start capture just to dismiss this tutorial.",
        "target": "Import screenshots"
      },
      {
        "title": "Edit a step",
        "text": "Select a step, edit its caption, reorder it and adjust crop. Add a solid redaction over an area to learn sanitization. Redactions are burned into exported pixels; original source assets remain in editable projects. Inspect every exported page before sharing.",
        "target": "Step caption"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export sanitized guide",
        "text": "Use Export sanitized HTML or Export sanitized PDF. Inspect the output to ensure captions, order, crop and redactions are correct. A saved editable project can still contain unredacted originals; share the reviewed sanitized export rather than the project when privacy matters.",
        "target": "Export sanitized HTML"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Capture unavailable: do not infer that import proves capture works. Native permission/source-picker/click-hook support is a separate required gate.",
      "Redaction misplaced: verify normalized coordinates and inspect actual exported pixels. Cropping alone is not a privacy guarantee.",
      "A project contains original assets. Treat it as sensitive even when its export looks redacted. Stop capture before switching applications or entering private information."
    ]
  },
  "light": {
    "formats": "Input: static JPEG/PNG. ZIP delivery requires native imported asset-backed photos; reimport legacy inline originals first. Admission ceilings are 100 photo records, 128 MiB combined distinct source bytes, 24 megapixels per decoded or transformed image, and 512 MiB total encoded archive output. These are ceilings, not throughput claims. Longest-edge limits are 64–8192 pixels without enlargement; JPEG quality is 60–100, default 94. ZIP contains rendered PNG/JPEG files and delivery.json; extract it yourself. No RAW, animated-image support, source metadata preservation, full Adobe compatibility or verified photographic color-display fidelity is claimed. Existing per-photo PNG/JPEG exports remain separate. Portable projects require their companion asset directory. Original beginner and two-ramp color practice files remain available.",
    "steps": [
      {
        "title": "Make a separate practice folder",
        "target": "New",
        "text": "Save your current work first. In Help → Practice files, save light-delivery-practice.zip and light-delivery-walkthrough.md. Extract the practice ZIP yourself into a new folder using your file manager. It contains 13 named copies of two original 256 × 96 synthetic color ramps, not 13 different photographs. Close Help, choose New, then Add photos and select all 13 extracted PNGs together. Alternatively choose Open photo folder and select that extracted folder. Do not import the ZIP itself. Native import creates asset-backed photos; this exercise does not use an inline project."
      },
      {
        "title": "Choose photos across two pages",
        "target": "Add photos",
        "text": "Set Sort photos to name and Minimum star rating to All ratings. Choose Clear export selection. On page 1 check Include light-delivery-01.png in export; select that photo, set Star rating to 5 and exposure to 0.5, then finish the edit. Choose Next photos and check Include light-delivery-13.png in export on page 2. Set Minimum star rating to At least 5 stars: expect 2 selected for export, 1 visible and 1 hidden by filter. Visible includes all filtered pages. If you try Use filtered photos for export, it replaces the selection with only the matching photo; Undo once restores the two-photo selection. The photo being inspected is separate from export selection."
      },
      {
        "title": "Review size, names and hidden selection",
        "target": "Deliver selected as ZIP",
        "text": "Choose Deliver selected as ZIP. Check the sheet says 2 photos and 1 hidden by the current filter. The sheet freezes photos and edit recipes in project order, which need not match the displayed sort order. Set Output format to PNG; Output size to Limit longest edge (no upscaling); Longest edge in pixels (64–8192) to 128; File naming to Numbered prefix; Filename prefix to ramp-check. Review the exact names ramp-check-0001.png and ramp-check-0002.png. Dimensions remain pending native decode; these uncropped practice ramps should each produce 128 × 48. To change which photos or edits are included, choose Close delivery sheet, make changes and open it again."
      },
      {
        "title": "Save one ZIP and reusable settings",
        "target": "Save project",
        "text": "Choose Start ZIP delivery. Light first waits for active previews, builds one archive and then opens one native Save dialog. Choose a fresh filename such as ramp-check-delivery.zip in your practice folder and wait for Saved. An existing filename is refused; choose a new name on another attempt. Valid settings enter project Undo history when Start is accepted, even if that delivery is later cancelled. Choose Close delivery sheet. For this new unsaved practice project, choose Save project with a fresh practice .abundance filename. If you instead started from Open, choose Save as first for a fresh working copy; Save project alone updates the currently opened project. Later Save project updates your chosen copy. Keep it together with its sibling .abundance.assets directory. Exporting the ZIP does not save the editable project."
      },
      {
        "title": "Extract and inspect the result",
        "target": "Deliver selected as ZIP",
        "text": "Using your file manager, extract the saved delivery ZIP into another empty folder. Expect exactly ramp-check-0001.png, ramp-check-0002.png and delivery.json. Open both images in an image viewer: each should be 128 × 48, one ramp runs the opposite way, and photo 01 has the exposure adjustment. Use delivery.json to check output order, filenames, dimensions, PNG format and SHA-256 entries; it is a delivery receipt, not an editable project. This tiny opaque practice does not demonstrate transparency, photographic fidelity or batch throughput. PNG preserves transparency when present; JPEG composites white and is lossy. Both remove source metadata and produce sRGB output."
      },
      {
        "title": "Reopen, check settings and practise cancelling",
        "target": "Open",
        "text": "Choose Open and reopen your saved practice .abundance project. Check the 13 photos, photo 01’s exposure/rating and the two selected photos. Open Deliver selected as ZIP and check PNG, longest edge 128 and prefix ramp-check were restored. Choose Start ZIP delivery again. While work is pending, choose Cancel ZIP delivery; if the tiny run reaches the native Save dialog first, cancel that dialog instead. A cancellation after publication may still report the complete saved filename: inspect the result rather than assuming nothing was written. Cancellation does not undo saved settings or remove an earlier completed ZIP. Close the sheet and explicitly Open your previous saved work when finished; the walkthrough never changes documents for you."
      }
    ],
    "trouble": [
      "Wrong photos: filtering alone preserves selection. Inspect selected-visible/hidden counts; hidden means filtered out, not merely off-page. Clear export selection clears every photo; Use filtered photos for export replaces selection across all filtered pages. Close and reopen a delivery sheet to refresh its snapshot.",
      "ZIP unavailable: import the extracted PNG/JPEG files with Add photos or Open photo folder in the native app. An inline legacy project or a web-only adapter does not qualify. Finish or correct pending raw edits; rejected drafts are kept.",
      "Names or size differ: read the exact filename list. Names are sanitized to conservative ASCII and case-insensitive collisions receive suffixes. Do not create unsafe or reserved filenames to test this. Full edited size and longest-edge sizing use full-resolution edits, not preview pixels; straightening may exceed the transformed-image ceiling.",
      "Destination refused or delivery failed: keep the project open, choose another fresh filename or supported writable local folder, and explicitly start another delivery. Do not assume an overwrite prompt permits replacement. Check the status and any completed ZIP after a cancellation race.",
      "Missing originals after reopen: restore the project’s sibling .abundance.assets directory. The extracted delivery and its receipt cannot replace that folder. These engineering walkthroughs are not Windows, accessibility, large-batch or release acceptance."
    ]
  },
  "room": {
    "formats": "Creates vector layouts; no external-plan import. Up to 2,000 objects and 20 variants. Metric/imperial display, rotation and grid snap. Output: scaled SVG/PDF and visual PNG. PDF font rejects unsupported characters; SVG retains Unicode.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "The sample is a fictional 6 × 4 metre room. It is a planning aid, not a construction drawing. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Create objects",
        "text": "Choose Add door and Add window. Select Desk in Furniture library and choose Add library item. Use Layout objects to select an object for numeric editing.",
        "target": "Add library item"
      },
      {
        "title": "Edit layout",
        "text": "Change X, Y, Width, Depth and Rotation in the inspector. Use Save layout variant before trying another arrangement. Restore the named variant to compare. Red outlines warn about furniture overlap; doors/windows are freestanding symbols.",
        "target": "Save layout variant"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export a plan",
        "text": "Choose Export SVG or Export PDF for physical scale; print at 100%. Export PNG is a visual image, not calibrated printing. Verify dimensions on site and test printer scale with a ruler.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Object moves unexpectedly: inspect grid snap and displayed units; data is stored in metres.",
      "Overlap warning is advisory and does not block edits. Openings do not cut or attach to walls.",
      "No structural analysis, code compliance, collision prevention or 3D rendering. PNG/browser rendering and physical printing still require native QA."
    ]
  },
  "cut": {
    "formats": "Audio input: WAV PCM8/16/24/32 or float32, 8–192 kHz, up to 8 channels. Transcript input: timestamped SRT/VTT. Output: PCM16 WAV under 4 GiB and aligned VTT. Cue audition is limited to 60 seconds. Local ASR currently requires PCM16 mono/stereo WAV, English, and a configured tiny.en runtime/model. MP3/AAC, RF64 and WAV headers over 1 MiB are not supported.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "The supplied WAV contains two original sentences synthesized offline. Its reviewed VTT is a fallback, not proof of speech recognition. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Import audio and transcript",
        "text": "Choose Import WAV audio and select practice-speech.wav, then Transcribe locally. Review the recognized words against the two-sentence script in practice-speech.vtt. A licensed local runtime/model must already be configured; absence is a blocker. Import SRT / VTT can load the reviewed transcript as an explicitly intermediate fallback.",
        "target": "Import WAV audio"
      },
      {
        "title": "Edit and audition",
        "text": "Use each cue’s keep checkbox, text and start/end fields; reorder cues to change the audio sequence. Automatic transcription may produce word-sized cues: uncheck all first-sentence cues and keep all second-sentence cues. Correct ‘the’ to ‘this’ if needed; this known sample recognition error makes review important. Keep only the sentence ‘Keep this second sentence in the final audio,’ then Play cue to audition. Correct recognition errors and trim boundaries if needed. Boundary fade (milliseconds) controls edit edges.",
        "target": "Play cue"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Render audio and transcript",
        "text": "Choose Export edited WAV, then Export updated transcript to save the aligned VTT separately. Reopen the WAV in an audio player and listen for only the retained second sentence; inspect aligned VTT timestamps. Transcript edits must correspond to actual rendered audio. Imported captions are not generated speech recognition.",
        "target": "Export edited WAV"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Transcription unavailable: a compatible local runtime and model must be installed/configured; no model is silently downloaded. The imported fallback transcript does not establish that speech recognition works. Automatic timestamps may span silence or neighboring words; inspect and audition trim boundaries.",
      "Bad cuts: inspect start/end times against audio duration, cue order and fade length; listen to the rendered export.",
      "Missing audio after reopen: restore the companion assets folder. Long-audio, native playback and Windows export checks remain release gates."
    ]
  },
  "ledger": {
    "formats": "Input: UTF-8/BOM comma, semicolon or tab-delimited text up to 8 MiB / 20,000 rows / 100 columns. Explicit ISO/DMY/MDY date and decimal-point/comma mapping. USD, EUR, GBP, CAD, AUD, CHF (2 decimal places), JPY (0), KWD (3). Output: transactions/rejected-row CSV.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "Practice entries are fictional: income 105.50 USD, outflow 25.50 USD, net 80.00 USD. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Map and review CSV",
        "text": "Choose Import CSV and open practice-transactions.csv. Map Date, Description and signed Amount; choose ISO dates, decimal point and USD. Choose Validate & preview, review rows, then Import 3 selected rows. Reimporting suggests duplicates, unchecked by default.",
        "target": "Import CSV"
      },
      {
        "title": "Categorize and budget",
        "text": "Open Categories & budgets, enter Supplies in New category and choose Add category. Assign Practice supplies to Supplies. Set a January 2026 USD Supplies budget of 30.00. Use All dates to see net 80.00 USD; currencies remain separate.",
        "target": "Categories & budgets"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export records",
        "text": "Choose Export transactions CSV. Inspect the file in a spreadsheet or text editor; amounts are signed and text is protected against common formula injection. Rejected-row reports are available during import review. CSV is a report, not a full project backup.",
        "target": "Export transactions CSV"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Wrong totals: check signed amount versus separate debit/credit mapping, date filters, currency and duplicate selection. Refunds reduce category spending.",
      "Rejected amount: remove grouping separators and use the selected decimal separator; unsupported extra decimals are rejected, not rounded.",
      "No bank connection or currency conversion is provided. Totals are records you supply, not verified bank balances."
    ]
  },
  "label": {
    "formats": "Input: UTF-8 CSV/TSV and first-worksheet XLSX, up to 12 MiB, 10,000 data rows and 100 columns. XLSX expanded-size ceiling 64 MiB / 2,000 entries. Formulas, macros and external links are rejected. Output: print PDF, maximum 2,000 labels. QR and ASCII Code 128; no GS1 certification.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "The practice CSV includes leading-zero codes and three total labels. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Import spreadsheet data",
        "text": "Choose Import CSV or XLSX and open practice-labels.csv. In Inspect imported rows, check Code values 000123 and 000456 retain their zeros.",
        "target": "Import CSV or XLSX"
      },
      {
        "title": "Map and lay out",
        "text": "Set Main text to Name, Barcode value to Code, Quantity column to Quantity, and Barcode type to QR. The sample yields one Practice A label and two Practice B labels. Choose a template and inspect the preview before printing.",
        "target": "Main text"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export and test print",
        "text": "Choose Export print PDF. Print at Actual size / 100% with scaling off; first test on plain paper. Measure margins and scan the printed barcode before using label stock. A digital scan test is not physical-printer calibration.",
        "target": "Export print PDF"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Labels do not fit: reduce label size, margins or gaps, or choose the matching paper template. All dimensions are millimetres.",
      "Barcode too small: enlarge the label or reduce text. Do not remove quiet zones.",
      "Formula cells: export calculated values as CSV first. Long text fails visibly; shorten text, reduce font or enlarge labels."
    ]
  },
  "measure": {
    "formats": "Input: PDF, PNG, JPEG. Up to 50 pages, 16 million pixels per imported page, 64 million pixels per import; 28 MiB app-state import ceiling / 32 MiB project ceiling. PDF renders at 150 dpi. Output: quantities CSV and annotated PDF. Projects embed page images, not original PDF vector layers.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "The synthetic practice drawing has a 6 metre line from image point (100, 530) to (700, 530). Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Import a plan",
        "text": "Choose Import PDF / image and select practice-image.png. Use the numeric point controls for repeatable calibration; importing adds pages and leaves source files unchanged.",
        "target": "Import PDF / image"
      },
      {
        "title": "Calibrate and measure",
        "text": "Choose calibration, enter points 100, 530 and 700, 530 with Add point, set Known length to 6 and Known unit to m, then Finish / apply. Choose length and that calibration; add points 100, 100 and 700, 100, label it Practice width and Finish / apply. Expect 6.00 m.",
        "target": "Finish / apply"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export quantities and plan",
        "text": "Choose Export CSV for quantities and calibration provenance; Export PDF for the source raster and aligned annotations. Check Practice width = 6.00 m. Changing a calibration recalculates all measurements assigned to it.",
        "target": "Export CSV"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "No quantity: assign a valid known-length calibration to lengths/areas. Counts need no calibration.",
      "Wrong scale: verify endpoints and known units. Use separate named calibrations for differently scaled regions. Scan distortion is not corrected.",
      "Import too large: split PDF or reduce resolution; cancellation/failure preserves existing pages. Annotated PDF preserves image alignment, not original print scale."
    ]
  },
  "invoice": {
    "formats": "Output: multipage A4 PDF with embedded font. Project includes business, customers, catalog, invoice sequence and history. Maximum 200 lines per invoice, 1,000 invoices/customers/catalog items each, within 32 MiB. Latin, Greek and Cyrillic are supported; CJK, RTL and complex-script PDF text are not.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "The sample is a fictional draft with a 50.00 USD total. It is never sent. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Create a draft",
        "text": "For a fresh workflow, use Business to enter Practice Studio, Customers → New customer for Practice Customer, then New invoice. Select Saved customer and choose Use current business profile. Alternatively open invoice-practice.abundance.",
        "target": "New invoice"
      },
      {
        "title": "Edit and review",
        "text": "Choose Add line. Set Description to Practice service, Quantity to 2, Unit price to 25.00 and Tax rate to 0. Check 50.00 USD total and due date. Keep it a draft for this exercise. Issue and lock changes local status only; Create revision corrects an issued invoice.",
        "target": "Add line"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export the invoice",
        "text": "Choose Export PDF and inspect the DRAFT label, parties, line items and 50.00 total. A PDF export is not sending an invoice, payment collection or evidence of payment. Mark paid only after independently verifying payment.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Wrong total: check inclusive/exclusive prices, quantity, tax and discount. Use decimal points without grouping separators. Rounding policy is shown in the app and PDF.",
      "Locked contents: create an explicit numbered revision. Issued snapshots remain in the project.",
      "Keep one master numbering project per business. Separate copies do not coordinate numbers. No tax-jurisdiction certification, payment processing or sending is included."
    ]
  },
  "timeline": {
    "formats": "Project: up to 2,000 tasks, dates 1900–2199, 5,000 holidays. Output: CSV and paginated landscape PDF. Finish-to-start dependencies without lag; shared calendar. No critical path, resource levelling or recurring-task support.",
    "steps": [
      {
        "title": "Practice without risking your work",
        "text": "Build a small two-task schedule using date-only values. Download practice files from Help → Practice files. Downloads never load or replace your current project. Save current work first, then explicitly use New or Open a practice project. Keep practice files in their own folder.",
        "target": "New"
      },
      {
        "title": "Create tasks",
        "text": "Choose Add task twice. Name the tasks Prepare and Review; set Prepare to 2026-01-05 through 2026-01-06 and Review to 2026-01-07 through 2026-01-08. Enter an owner and progress value.",
        "target": "Add task"
      },
      {
        "title": "Schedule deliberately",
        "text": "Select Prepare as Review’s predecessor. Choose Preview scheduling, review the old/new dates, then Apply date changes only if correct. Calendar weekdays and holidays affect working duration. Dragging a task alone does not silently move successors.",
        "target": "Preview scheduling"
      },
      {
        "title": "Save editable work",
        "text": "For a new unsaved project, choose Save project and a fresh filename. If you opened a supplied sample, choose Save as first to keep that sample unchanged; later Save project updates your copy. Wait for confirmation. Export is separate and does not save your editable project.",
        "target": "Save project"
      },
      {
        "title": "Export schedule",
        "text": "Choose Export CSV for task data or Export PDF for the Gantt and full calendar/details. Check dates, dependencies and progress in the exported file. CSV does not preserve the entire editable working calendar; keep the project.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and check",
        "text": "After saving, choose Open and select your practice .abundance project. If prompted about unsaved changes, choose Keep editing and save first. Check your edits are still present. Media projects also need their companion asset folder. Open your previous project when finished; the walkthrough never switches files for you.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Dependency rejected: remove cycles, self-links, duplicate or missing predecessors.",
      "Unexpected duration: dates are inclusive; inspect working weekdays and holidays. Zero-working-day tasks are flagged. Preview before applying bulk shifts.",
      "Long charts compress; use exact table dates. Unsupported complex-script PDF text fails visibly; project/CSV text stays unchanged."
    ]
  },
  "tidy": {
    "formats": "UTF-8 CSV, TSV, pasted delimited text with comma, semicolon, tab or pipe. Source text and current table save in .abundance projects. CSV export is comma-delimited, quoted and CRLF-terminated. No XLSX, formulas, encoding conversion or automatic data type inference.",
    "steps": [
      {
        "title": "Protect your current work",
        "text": "Save your current project before starting. Use New for an empty table, or explicitly download and Open the separate practice .abundance project. Opening a sample never happens automatically.",
        "target": "New"
      },
      {
        "title": "Bring in a CSV",
        "text": "Choose Import delimiter, then Import CSV for your UTF-8 file. The first record is the header. Alternatively, expand Paste CSV text and use Import pasted text with the selected delimiter. The practice project already has four sample rows, a duplicate and IDs with leading zeros.",
        "target": "Import CSV"
      },
      {
        "title": "Preview a precise change",
        "text": "Select the Name column, choose Trim surrounding whitespace, then Preview change. Check the resulting rows and choose Apply change. Try duplicate removal with all columns or Remove fully empty rows. Split column uses a literal separator with 2–20 output columns and rejects overflow instead of truncating. Undo restores one complete change.",
        "target": "Preview change"
      },
      {
        "title": "Save the editable project",
        "text": "Use Save project to store a .abundance project. It contains the untouched source text and current table. This is separate from exporting a CSV copy.",
        "target": "Save project"
      },
      {
        "title": "Export a clean copy",
        "text": "Leave CSV formula handling on Protected and choose Export cleaned CSV. The sample formula gets a leading apostrophe in export only. CSV cannot force another spreadsheet to retain leading zeros; import those columns as text.",
        "target": "Export cleaned CSV"
      },
      {
        "title": "Reopen and continue",
        "text": "Use Open to select the .abundance project you saved, then review the table and preserved source. Choose Restore imported table to restart cleaning, with Undo available. Use Help to replay this walkthrough.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Encoding errors: convert the source to UTF-8 first. Tidy never inserts silent replacement characters.",
      "Uneven rows or malformed quotes: verify the delimiter or repair the source. Imports fail without changing the current table.",
      "Limits: 8 MiB input, 4 million characters, 10,000 rows, 100 columns and 250,000 cells. This is a bounded cleaner, not a million-row spreadsheet.",
      "Protected CSV changes risky exported values with an apostrophe. Exact-string mode is intended for trusted downstream importers and can enable spreadsheet formulas.",
      "Native Windows dialogs, installed offline runtime and screen-reader behavior still require release testing."
    ]
  },
  "nest": {
    "formats": "Portable .abundance projects; PDF numbered diagrams and key; UTF-8 CSV placements/unplaced list; one SVG per used sheet. 200 types, 500 pieces, 100 identical sheets. No irregular nesting, CNC paths, mixed materials or automatic grain matching.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Use New for an empty cut list, or save and open the separate practice project. Practice never replaces your live document.",
        "target": "New"
      },
      {
        "title": "Add your first piece",
        "text": "Choose Add part and enter its finished rectangular dimensions. Use real sheet sizes and the same material/thickness for every piece.",
        "target": "Add part"
      },
      {
        "title": "Set the saw allowance",
        "text": "Edit Saw kerf and Edge trim on each side. Grain lock holds a part’s width parallel to sheet width and prevents rotation.",
        "target": "Saw kerf"
      },
      {
        "title": "Keep an editable copy",
        "text": "Save project creates a portable .abundance file with stock and part data. Undo and Redo step through edits.",
        "target": "Save project"
      },
      {
        "title": "Make a workshop reference",
        "text": "Export cut PDF for numbered sheet diagrams and a part key. Export CSV includes unplaced pieces; sheet SVG is also available. These are not to scale or a certified cutting sequence.",
        "target": "Export cut PDF"
      },
      {
        "title": "Reopen and check",
        "text": "Open your saved project and check quantities and units before cutting. Changing the unit label does not convert dimensions.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Unplaced pieces need larger stock, more sheets, smaller trim/kerf, or a different layout; this heuristic is not globally optimal.",
      "Waste includes trim and kerf on used sheets only. Part numbers are references, not a saw-cut sequence. Verify machine-safe workholding and measurements.",
      "If a document changes while PDF export is prepared, export is cancelled safely. Retry from the current layout. Native Windows dialogs, screen reader and physical print output remain release QA gates."
    ]
  },
  "gather": {
    "formats": "Editable .abundance projects, UTF-8 comma-separated CSV import with first,last and optional party,diet, alphabetical/table CSV exports, and A4 PDF guest charts/table sheets. Up to 1,000 guests and 100 tables. No XLSX, live RSVPs, invitations, scaled floor plans or individual chair assignments.",
    "steps": [
      {
        "title": "Start with a safe copy",
        "text": "Choose New or save and open the separate fictional practice project. Practice will not replace your live guest list.",
        "target": "New"
      },
      {
        "title": "Bring in your guests",
        "text": "Use Import guest CSV to append a UTF-8 file with first,last headers and optional party,diet columns. Or choose Add guest. Imported names start unseated.",
        "target": "Import guest CSV"
      },
      {
        "title": "Make an assignment",
        "text": "Add a round or rectangular table and set its capacity. Select a guest, then choose Assigned table with the keyboard or pointer. Review unseated, duplicate and capacity warnings.",
        "target": "Assigned table"
      },
      {
        "title": "Keep the editable plan",
        "text": "Save project stores the full plan, including private notes, in a local .abundance file. Use Undo/Redo to recover edits.",
        "target": "Save project"
      },
      {
        "title": "Print a clear chart",
        "text": "Export guest chart PDF gives an alphabetical list. Export table sheets PDF makes a sheet per table. Private notes are excluded unless you explicitly select the checkbox in this app.",
        "target": "Export guest chart PDF"
      },
      {
        "title": "Reopen for final checks",
        "text": "Open your saved project and review all seating checks before printing. Protect the project because it includes party and dietary notes.",
        "target": "Open"
      }
    ],
    "trouble": [
      "CSV imports append and never merge matching names. Review possible duplicates, which can be legitimate people. Only first,last,party,diet headers are supported.",
      "Capacity changes never silently move guests. An overfilled table stays visible with a warning; unseat or reassign guests yourself. Party split warnings are reminders, not automatic constraints.",
      "Guest-facing exports exclude private notes by default. The project contains them. Unsupported font characters stop PDF export safely; CSV preserves UTF-8. Native Windows dialogs, screen readers and actual print output remain release QA gates."
    ]
  },
  "hours": {
    "formats": "Input: manual duration or date plus start/end times, one explicit persisted wall-clock timer, and editable .abundance projects. Output: UTF-8 CSV or locally generated PDF, with up to 500 filtered entries in PDF, 5,000 entries and 100 projects overall. Fixed UTC offsets are stored per entry; daylight-saving rules are not inferred. Duration-only entries cannot be checked for overlap.",
    "steps": [
      {
        "title": "Make room to practice",
        "text": "Save your current work first. Use New or explicitly Open the separate Hours practice project in your own practice folder. This walkthrough never replaces the live document or starts a timer. Sample entries are fictional.",
        "target": "New"
      },
      {
        "title": "Record a small piece of work",
        "text": "Choose a project, date and Task. Leave Entry method on Duration only and enter 0:30. Choose Add entry. Or start the single timer explicitly, wait at least a second, then Stop and record. A timer stores a wall-clock timestamp; it includes time while the app is closed if its start was saved.",
        "target": "Add entry"
      },
      {
        "title": "Review and correct your record",
        "text": "Choose Edit beside an entry. Try Start and end time, adjust the times and UTC offset, then Check overlap and Save entry changes. Overnight work needs End is on the next day. Overlap warnings do not block saving. Undo and Redo remain in the File controls.",
        "target": "Entry method"
      },
      {
        "title": "Save editable work",
        "text": "First commit form edits with Add entry or Save entry changes; unsubmitted drafts are not included in project saves. Choose Save project and save an .abundance file in your practice folder. This keeps projects, entries, rates and any active timer. Save after starting or stopping a timer; the app does not silently autosave. Save as makes a separate editable copy.",
        "target": "Save project"
      },
      {
        "title": "Export a readable report",
        "text": "Choose All dates so the dated sample is visible, or set a report range and project. Export report CSV saves all matching rows; Export report PDF creates a paginated local document. Exports omit the active timer. Inspect the actual saved file. PDF supports up to 500 filtered entries and supported simple-script text.",
        "target": "Export report PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Use Open to explicitly reopen the saved practice .abundance file, then check the entries and totals. Open your own saved file to return to real work. Tutorial dismissal leaves your edited workspace alone. Never assume cancelling a save or export wrote a file.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Timer looks too long or the clock moved backward: use Review or correct elapsed time and Record reviewed duration. A saved timestamp includes closed or sleeping time; the app does not run a background timer.",
      "An entry is missing from a report: choose All dates and All projects, then check its start date. Overnight entries belong entirely to their start date. Active timers are excluded until recorded.",
      "PDF rejects text or has too many entries: narrow the report or use CSV, which preserves all Unicode. PDF supports Latin, Greek and Cyrillic text with the bundled font and refuses unsupported glyphs or shaping.",
      "Save or export fails: keep the current project open and try another writable destination. Native Windows dialogs, installed-offline behavior and screen-reader checks remain separate release gates."
    ]
  },
  "keep": {
    "formats": "Portable media .abundance manifest plus companion .assets directory; exact-schema UTF-8 CSV item import/export; paginated PDF dossier with attachment filenames/checksums. Receipt photos and supported raster images only, no PDF attachments. 1,000 items, 20 attachments each. Prices have at most two decimals; no appraisal, currency conversion, depreciation or insurance-coverage validation.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Use New for an empty inventory. Save existing work first. The separate sample CSV and synthetic receipt are practice sources, not your possessions.",
        "target": "New"
      },
      {
        "title": "Create your first record",
        "text": "Choose Add item, or import the sample CSV. CSV import replaces item records and drops attachment references; Undo restores the previous state. Imports never change source files.",
        "target": "Add item"
      },
      {
        "title": "Review the details",
        "text": "Enter room, category, quantity, model, serial, dates and price per item. Keep currency codes separate. Attach a local image using Attach photo or receipt image; PDFs are not accepted.",
        "target": "Price per item"
      },
      {
        "title": "Keep an editable copy",
        "text": "Save project preserves records and source images. Keep the .abundance manifest and its entire sibling .assets directory together. Undo/Redo reverses workspace edits; save writes them to disk.",
        "target": "Save project"
      },
      {
        "title": "Export a useful result",
        "text": "Export dossier PDF creates a printable item record with image names and checksums, not embedded image pages. Export CSV excludes attachments. Save original exports one unchanged image.",
        "target": "Export dossier PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved manifest with its companion directory present. Review items and export an original image to check your backup. Originals and backups stay unchanged unless you explicitly overwrite an export destination.",
        "target": "Open"
      }
    ],
    "trouble": [
      "CSV safety prefixes are removed on import; for third-party literal apostrophes before formula-like text, add one extra apostrophe. CSV requires the exact header: id,name,room,category,quantity,model,serial,purchaseDate,price,currency,warrantyDate,notes. Duplicate IDs and invalid real dates reject the entire import. Blank prices mean unknown. Purchase price is per unit.",
      "An attachment missing after copying a project usually means the companion .assets directory was not copied. Restore both from a backup. Imported source files remain read-only; removing a reference does not delete them.",
      "PDF embeds bundled DejaVu Sans for Latin/Greek/Cyrillic text. Missing glyphs and known complex-script shaping are blocked rather than silently replaced. Use CSV for unsupported text. Windows native dialogs, assistive technologies and installed offline operation remain release QA gates."
    ]
  },
  "savor": {
    "formats": "Portable .abundance project; versioned UTF-8 Savor JSON import/export; paginated PDF recipes and selected-meal grocery list. 300 recipes, 200 ingredients per recipe, 100 meal selections. No scraping, nutrition calculation, unit conversion, automatic food-safety advice or cooking-time scaling.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Use New for an empty binder, or save current work and open the separate practice project. Practice never silently replaces your active document.",
        "target": "New"
      },
      {
        "title": "Create your first record",
        "text": "Choose Add recipe and name it. Enter the original serving count, tags, instructions and source attribution. No websites are scraped or recipes fetched.",
        "target": "Add recipe"
      },
      {
        "title": "Review the details",
        "text": "Add ingredients with a decimal, fraction (1/2), mixed fraction (1 1/2), unit and optional preparation note. Blank quantity means to taste. Preview servings scales quantities only; it does not modify the original recipe.",
        "target": "Original servings"
      },
      {
        "title": "Keep an editable copy",
        "text": "Save project keeps all recipes and meal selections in a portable .abundance file. Save As creates a separate backup. Undo/Redo can reverse every saved workspace edit.",
        "target": "Save project"
      },
      {
        "title": "Export a useful result",
        "text": "Add recipes to meals, adjust meal servings and review the consolidated grocery list. Export recipe PDF prints the binder and selected grocery list; Export portable JSON preserves editable data.",
        "target": "Export recipe PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Open your saved project or import a Savor JSON file. JSON import replaces the binder and is undoable. Check original servings and cooking instructions before preparing food.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Grocery rows combine only matching names, units and notes after case/whitespace normalization. Gram, g, cup and blank units remain separate; different preparation notes remain separate. Review and standardize units yourself.",
      "Serving ratios use finite JavaScript numbers and display ten significant digits. Null quantities remain to taste. Cooking time, temperature, pan size, yeast/spices and safe handling need your judgment; scaling is arithmetic only.",
      "PDF supports bundled-font characters without complex-script shaping. Unsupported scripts fail before file creation. JSON keeps all Unicode text. Native Windows dialogs, screen readers and physical printing are unverified release gates."
    ]
  },
  "roster": {
    "formats": "Portable .abundance project; exact-schema UTF-8 CSV import/export; complete top-down tree SVG with fit/pan preview; landscape A4 manager-and-reports chart PDF with branch continuation references plus a separate full-text directory PDF. Maximum 500 people and 20 graphical levels. Single manager per person; no automatic directory sync, employee assessment, compensation data or HR decisions.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Use New for an empty roster. The separate practice project and CSV contain fictional people. Save existing work before opening a different project.",
        "target": "New"
      },
      {
        "title": "Create your first record",
        "text": "Choose Add person, or import CSV with the exact id,name,title,department,managerId header. Every ID must be unique and stable. Import replaces records atomically and is undoable.",
        "target": "Add person"
      },
      {
        "title": "Review the details",
        "text": "Enter names, role titles and departments. Put the manager’s exact ID in Manager ID; leave it blank for a root. Editing an ID updates manager references within this project.",
        "target": "Manager ID (blank for root)"
      },
      {
        "title": "Keep an editable copy",
        "text": "Save project keeps the complete roster as a portable .abundance file. Save As makes a backup. Undo/Redo reverses edits, removals and imports.",
        "target": "Save project"
      },
      {
        "title": "Export a useful result",
        "text": "Review cycle, missing-manager and same-name warnings. Export chart PDF makes a genuine paginated hierarchy diagram; Export tree SVG saves the complete centered top-down tree. Small trees print completely on one page at readable size. Larger PDF pages place a manager above up to three reports, with page references for deeper branches. Export CSV preserves every record.",
        "target": "Export chart PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project and review roots and parent links. If a manager was deleted, repair the retained links. Cycles block chart/PDF export until corrected; CSV export remains available.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Duplicate IDs reject the complete import. Duplicate names are permitted and flagged; stable IDs distinguish people. Empty manager IDs are roots; missing managers remain explicit orphan roots.",
      "Fix cycles by clearing or correcting at least one manager ID in each reported loop. Hierarchies deeper than 20 levels remain editable and exportable as CSV but cannot generate charts.",
      "CSV is formula-hardened for spreadsheet opening; the matching importer removes exactly one safety apostrophe. For a third-party literal apostrophe before formula-like text, add one extra apostrophe before import. SVG escapes markup. PDF blocks unsupported glyphs/shaping. Windows dialogs, screen readers and physical print fidelity remain unverified release gates."
    ]
  },
  "storyline": {
    "formats": "Gregorian dates 0001–9999; 500 events, 100 people, 50 lanes. CSV import up to 4 MiB replaces events after preview. CSV/SVG/paginated PDF exports; PDF Latin/Greek/Cyrillic only. No BCE, fantasy calendars or scheduling.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work, then choose New or open the fictional garden practice project. No historical claims are implied.",
        "target": "New"
      },
      {
        "title": "Add an event",
        "text": "Choose Add event. The date-only Gregorian event starts in Main thread; no other dates move automatically.",
        "target": "Add event"
      },
      {
        "title": "Edit narrative detail",
        "text": "Edit Event title, Start date, End date, notes and source, then Apply event edits. Add people in People and birthdays and reference their IDs. Review computed ages.",
        "target": "Apply event edits"
      },
      {
        "title": "Save the chronology",
        "text": "If you opened practice, choose Save as for a new practice copy; use Save project for later edits. A new unsaved project asks for its first filename through Save project. Projects preserve all lanes, people, dates and citations.",
        "target": "Save project"
      },
      {
        "title": "Export a readable copy",
        "text": "Choose Export PDF for paginated full narrative details, Export SVG for current filtered timeline, or Export CSV for all event records. Inspect results before sharing.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Choose Open and reopen the saved project. Check dates, people and citations. Save current work before switching.",
        "target": "Open"
      }
    ],
    "trouble": [
      "End before start is rejected without changing the event. Feb 29 birthdays advance on March 1 in non-leap years.",
      "CSV requires exact headers and existing lane/person IDs. A changed project invalidates an old preview.",
      "Native Windows dialogs, installed-offline operation, screen readers and physical printing remain release gates."
    ]
  },
  "folio": {
    "formats": "UTF-8 Markdown up to 1 MiB / 20,000 lines. Exact .md, self-contained HTML and real paginated PDF (500-page limit). Raw HTML stays literal; all images/resources blocked. PDF Latin/Greek/Cyrillic only, tables linearized.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work, then choose New or open the fictional practice project. Practice files never replace current work automatically.",
        "target": "New"
      },
      {
        "title": "Open source",
        "text": "Choose Open Markdown and select practice-notes.md, or paste into Markdown source. HTML is literal and images are blocked.",
        "target": "Open Markdown"
      },
      {
        "title": "Write and inspect",
        "text": "Edit Markdown source and leave the field to apply. Try headings, lists and :::pagebreak on its own paragraph. Outline and Find next help navigation.",
        "target": "Markdown source"
      },
      {
        "title": "Save editable work",
        "text": "Save retains the source and paper settings. If you opened practice, choose Save as for a new copy; use Save project for later edits. A new unsaved project asks for its first filename through Save project.",
        "target": "Save project"
      },
      {
        "title": "Print a separate copy",
        "text": "Choose Export PDF, then inspect actual pages in a PDF reader. Tables use linear cell rows in PDF. Export Markdown preserves exact source.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and check",
        "text": "Choose Open and select the saved .abundance project. Confirm source and paper settings survived. Save current work before switching.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Unsupported PDF characters fail before writing; Markdown and HTML preserve full Unicode.",
      "Preview is a continuous reading view, not page-perfect PDF pagination. Inspect exported PDF.",
      "Native Windows dialogs, installed offline use, assistive technology and physical printing remain release gates."
    ]
  },
  "compare": {
    "formats": "Two UTF-8 text inputs, each up to 4 MiB and 50,000 lines. Outputs exact unified diff and escaped self-contained HTML. Large ambiguous regions use bounded nonminimal replacement. No directory/binary comparison, merge or original-file editing.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save existing work; choose New or open the supplied practice project. Sources are copies and never changed.",
        "target": "New"
      },
      {
        "title": "Open the before copy",
        "text": "Choose Open left text and select practice-before.txt, then Open right text for practice-after.txt. Or paste into Before text and After text.",
        "target": "Open left text"
      },
      {
        "title": "Review a change",
        "text": "Choose Next change. Compare exact and ignore-all-whitespace modes, then try Inline. Edit After text and leave the field; Undo restores the copy.",
        "target": "Next change"
      },
      {
        "title": "Save editable review",
        "text": "For a new unsaved project, choose Save project and a new .abundance filename. If you opened practice, choose Save as first; later Save project updates that copy. Both source texts and options are included; keep the file private when texts are private.",
        "target": "Save project"
      },
      {
        "title": "Export copies",
        "text": "Choose Export unified diff for an exact patch regardless of display mode. Export HTML report reflects your selected mode. Review both in another local viewer.",
        "target": "Export unified diff"
      },
      {
        "title": "Reopen and verify",
        "text": "Choose Open and reopen the saved project. Check both texts, file names and review mode. Preserve existing work before switching.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Invalid UTF-8 or NUL: convert a copy with an authorized text editor first.",
      "Whitespace mode hides all whitespace differences, including line endings. Exported patches always remain exact.",
      "Native Windows dialogs, screen readers and installed offline operation remain release gates."
    ]
  },
  "branch": {
    "formats": "Portable .abundance; OPML 2.0 import/export with _note, abundanceSide and abundanceCollapsed extensions; Markdown outline export; Unicode SVG; bounded PNG; PDF single-page A4/A3 diagrams or overview plus readable register for large maps. Small diagram PDFs omit notes, which remain in OPML/Markdown/project files. 1,000 topics, 100 levels, 500-character labels and 10,000-character notes. OPML requires exactly one root; unsupported third-party attributes are not retained.",
    "steps": [
      {
        "title": "Begin locally",
        "text": "New starts one central topic. The separate practice project is fictional; save your own work before opening it.",
        "target": "New"
      },
      {
        "title": "Capture a branch",
        "text": "Select the canvas. Tab adds a child; Enter adds a sibling. Use F2 or Topic label to rename. Add child and Add sibling also work without shortcuts.",
        "target": "Add child"
      },
      {
        "title": "Navigate and focus",
        "text": "Arrows navigate; Space or Collapse / expand folds a branch. Notes retain extra detail. Search reveals a matching topic and expands its ancestors.",
        "target": "Collapse / expand"
      },
      {
        "title": "Keep an editable copy",
        "text": "Save project keeps every topic, notes, collapsed branches and selection in a portable .abundance file. Undo/Redo restores edits. Reparent by dragging onto a topic or with Move branch; cycles are refused.",
        "target": "Save project"
      },
      {
        "title": "Export and inspect",
        "text": "Export SVG retains scalable Unicode text. Choose entire or visible map for SVG, PNG and PDF. OPML and Markdown always include the entire outline. PDF uses one A4/A3 diagram page when labels fit at 9.5pt or larger; larger maps add a readable register. Small diagram PDFs omit notes; use OPML/Markdown for all notes.",
        "target": "Export SVG"
      },
      {
        "title": "Reopen and compare",
        "text": "Reopen the saved project and check a folded branch. Import OPML replaces the map undoably. SVG is the most faithful scalable visual; Small PDF charts are one A4/A3 page; large charts add a readable register. Notes remain in the editable/text exports.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Moving a topic into its descendant is rejected without changing the project. The root cannot be removed or reparented.",
      "PNG refuses huge charts that would require unreadably small text; choose SVG or visible topics. SVG text uses local fonts and may look different on another system.",
      "PDF cannot shape all scripts or embed every Unicode character; unsupported text blocks PDF with an explicit error, while SVG/OPML retain it. The overview can be small; the following register is readable.",
      "Windows native dialogs, installed offline launch, real pointer/keyboard rendering, accessibility and visual UI acceptance remain unverified on this host."
    ]
  },
  "flow": {
    "formats": "Portable .abundance and versioned Flow JSON import/export; directed SVG, bounded PNG and PDF single-page A4/A3 diagrams or overview with readable register for large graphs. Small diagram PDFs omit notes, which remain in JSON/project files. 500 nodes, 1,500 connectors, 500-character node labels, 120-character connector labels and 10,000-character notes. No Visio or draw.io import.",
    "steps": [
      {
        "title": "Begin safely",
        "text": "New opens an empty process. Open the separate fictional practice project only after saving your current work.",
        "target": "New"
      },
      {
        "title": "Choose meaningful shapes",
        "text": "Add start for a start/end capsule, action for a step, decision for a question. Rename the selected node in the inspector.",
        "target": "Add decision"
      },
      {
        "title": "Connect the process",
        "text": "Choose From node, To node and a label, then Connect nodes. Decisions can have Yes/No branches, loops and self-loops. Expand Connectors to edit or remove them.",
        "target": "Connect nodes"
      },
      {
        "title": "Keep an editable copy",
        "text": "Save project preserves shapes, labels, notes, groups and manual positions. Undo/Redo reverses edits. Automatic layout rearranges directed ranks; use X/Y or arrows for precise positioning.",
        "target": "Save project"
      },
      {
        "title": "Export and inspect",
        "text": "Export SVG retains decision shapes, direction arrows and loop labels. PNG is bounded. PDF uses one A4/A3 diagram page when labels fit at 9.5pt or larger; larger graphs add a readable register. Small diagram PDFs omit notes; JSON/project files preserve them. Flow JSON preserves all editable details.",
        "target": "Export SVG"
      },
      {
        "title": "Verify your result",
        "text": "Reopen your project or export/import Flow JSON. Check that your decision labels and return loop are preserved. Use SVG for detailed visual inspection and zoom.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Automatic layout handles directed cycles through stable breadth-first ranks; complex graphs may need manual spacing. It is not an obstacle-avoiding professional routing engine.",
      "Node deletion also deletes incident connectors and is undoable. Group labels select related nodes; groups are not containers or nested subgraphs.",
      "SVG retains Unicode and uses local fonts. Huge PNG exports are blocked when readability would be lost. PDF rejects unsupported fonts/scripts; use SVG/JSON instead. The overview can be small, but the accompanying register retains all labels and notes.",
      "Installed Windows/offline runtime, native dialogs, real visual pointer interaction and accessibility remain release gates on this host."
    ]
  },
  "cite": {
    "formats": "BibTeX, RIS and CSL-JSON imports; metadata exports to those formats; APA/Harvard plain-text bibliography; Markdown research notes; full JSON backup and .abundance. 5,000 sources, 100 import batches, 4 MiB per source import and 24 MiB library. No PDF annotation, Word integration, online DOI lookup or remote plugins.",
    "steps": [
      {
        "title": "Begin a library",
        "text": "Save current work before New. The separate practice library contains fictional, original references only.",
        "target": "New"
      },
      {
        "title": "Import carefully",
        "text": "Preview BibTeX, RIS or CSL-JSON. All records validate before Apply. Original source text is kept in your full backup. Imports append rather than replace.",
        "target": "Preview BibTeX import"
      },
      {
        "title": "Record evidence",
        "text": "Add a reference and edit structured authors, date, folder and tags. Write source-linked research notes and quotations with exact page or section locators.",
        "target": "Add reference"
      },
      {
        "title": "Review duplicates",
        "text": "Open Review duplicates. Choose the source to keep and the other record; resolve metadata fields individually, then merge. Notes and quotations combine. Undo restores the two originals.",
        "target": "Save project"
      },
      {
        "title": "Save and cite",
        "text": "Save project preserves the complete library. Select sources and preview an APA or Harvard bibliography. Metadata-only exports omit research data and display a loss report.",
        "target": "Export full backup"
      },
      {
        "title": "Reopen your evidence",
        "text": "Open a saved project or restore the full JSON backup in a disposable document. Check notes, locators and original imports. Export full backup before sharing a reduced metadata format.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Authors JSON accepts personal names with family/given/particles/suffix and corporate names with literal. Preserve supplied metadata; missing author, title or date is flagged, never invented. Date JSON uses CSL date-parts, for example {\"date-parts\":[[2024,3,12]]}.",
      "BibTeX/RIS conversion may normalize escaped accents, braces, structured authors, custom fields and dates. Original source text is retained in full backup. CSL-JSON metadata export also omits research notes, folders, tags, quotations and import provenance. Download the loss report and retain your backup.",
      "Duplicate matches use DOI or exact normalized title. They are suggestions, not proof. Manual field choices preserve the selected metadata; research notes and quotations combine. A second folder becomes a Former folder tag.",
      "Only bundled APA and Harvard styles are offered. Bibliography uses selected sources, or all when none are selected. Check output against your institution’s requirements; in-text citations and Word fields are not produced.",
      "Native browser/Electron, platform dialogs, cold offline launch, visual and assistive-technology checks remain blocked on this host. No release certification is implied."
    ]
  },
  "recall": {
    "formats": "Portable .abundance projects; versioned full JSON backup and content-only JSON; strict four-column UTF-8 TSV import. Local PNG images up to 500 KiB and 4096×4096; 40 megapixels total; 10,000 cards, 50,000 reviews, 24 MiB state. Not Anki-compatible. No remote resources, HTML, accounts or AI.",
    "steps": [
      {
        "title": "Start a collection",
        "text": "Save existing work before New. The separate garden practice kit contains original example cards.",
        "target": "New"
      },
      {
        "title": "Write a card",
        "text": "Add a basic card, a reverse pair, or a cloze card. Edit the question and answer. After editing a basic card, Create reverse from this card makes an independent opposite card. Reverse pairs from TSV are also generated; only c1 cloze groups are supported.",
        "target": "Add basic card"
      },
      {
        "title": "Bring your notes",
        "text": "Preview TSV import validates all rows and reports duplicates before Apply. Use deck, kind, front, back headers separated by tabs. No embedded tabs/newlines.",
        "target": "Study due cards"
      },
      {
        "title": "Save your study state",
        "text": "Save project preserves cards, FSRS parameters, history and PNGs. During study, reveal then grade your recall. Suspend excludes a card; bury delays it 24 hours. Undo restores the exact previous schedule.",
        "target": "Save project"
      },
      {
        "title": "Keep every review",
        "text": "Save project or Export full backup preserves schedules, history, edits and local PNGs. Content JSON is for reuse and intentionally excludes scheduling.",
        "target": "Export full backup"
      },
      {
        "title": "Verify your copy",
        "text": "Restore a backup into a disposable project and check cards and history. Open also restores a saved .abundance project. Save before replacing work.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Scheduling uses pinned ts-fsrs 5.4.2 (FSRS v6), default retention 0.9, learning steps 1m/10m, relearning 10m, and fuzz disabled. Parameters and complete schedule are saved. Intervals are elapsed UTC time, independent of timezone and DST. No learning guarantee.",
      "Invalid imports reject all rows and keep the original unchanged. Identical deck/kind/front/back rows are skipped. Changing those fields makes a new card. TSV cannot carry media or scheduling.",
      "Cards are plain text. c1 hides all marked answers together; make separate cards for separate groups. Edits do not reset schedules. Reverse pairs do not stay linked.",
      "Native dialogs, installed offline launch, visual layout and screen readers remain unverified on this host. Keep explicit disk backups; this app does not silently save form drafts."
    ]
  },
  "kin": {
    "formats": "Portable .abundance JSON; UTF-8 GEDCOM 5.5.1 graph import/export; living-redacted text report. 1,000 people, 2,000 families and sources, 8 MiB project, 100,000 import lines. No Gramps interoperability certification, chart PDF, DNA or online record search.",
    "steps": [
      {
        "title": "Start privately",
        "text": "Open the separate fictional practice project or choose New. Save existing work first. No records leave your computer.",
        "target": "New"
      },
      {
        "title": "Add a person",
        "text": "Choose Add person, select them, edit their name, and keep Living checked when uncertain. Stable IDs are generated automatically.",
        "target": "Add person"
      },
      {
        "title": "Connect the family",
        "text": "Add a partnership / parent group. Copy person IDs into partner slots and add child links. Pick birth, adopted, foster or unknown. Create separate groups for repeated partnerships.",
        "target": "Add partnership / parent group"
      },
      {
        "title": "Record evidence and save",
        "text": "Add sources below and attach citations to people or events. Enter uncertain dates such as ABT 1900 verbatim; explain conflicts in notes. Save project keeps the complete editable history.",
        "target": "Save project"
      },
      {
        "title": "Save and exchange",
        "text": "Save project retains everything. Export GEDCOM produces full private GEDCOM 5.5.1; use the separately labeled redacted report before sharing.",
        "target": "Export GEDCOM"
      },
      {
        "title": "Reopen and inspect",
        "text": "Open your saved project; check ancestor and descendant views. Repeated ancestors remain visible and cycles stop. GEDCOM import replaces the project and is undoable.",
        "target": "Open"
      }
    ],
    "trouble": [
      "GEDCOM must declare 5.5.1 and UTF-8. Invalid references or duplicate IDs reject the whole import. Unknown tags remain in portable state and exports; original nested records are preserved in _KIN_ORIGINAL as provenance.",
      "The modeled core covers names, sex, notes, events, source citations and family links. Additional names, nested structures and external multimedia remain original provenance rather than editable structured fields. No remote resources load.",
      "Living-person reports omit living details and all free-text notes, places, sources and project title. They retain deceased names, exact/year-only dates and anonymized family links; review before sharing. GEDCOM always contains private full data. Dates are not silently corrected. Native dialogs, visual layout and screen readers require release validation."
    ]
  },
  "inspect": {
    "formats": "Read-only local SQLite 3 table viewer using bundled sql.js 1.14.2 asm.js (no runtime CDN/WASM fetch). Portable .abundance embeds source bytes. Typed CSV/JSON and schema JSON export. No arbitrary SQL, editing, networking, credentials, attachments or extension loading.",
    "steps": [
      {
        "title": "Get a safe snapshot",
        "text": "Close the database’s source application and make a checkpointed copy. WAL/-shm sidecars are not imported. The practice database is fictional.",
        "target": "New"
      },
      {
        "title": "Open a copy",
        "text": "Choose Open SQLite copy for an unencrypted SQLite 3 database up to 8 MiB. Original bytes are copied into project state and never written back.",
        "target": "Open SQLite copy"
      },
      {
        "title": "Read the schema",
        "text": "Choose Read schema / refresh, then a table. Views and virtual tables show definitions only. Load table displays 100 typed rows.",
        "target": "Read schema / refresh"
      },
      {
        "title": "Filter and save",
        "text": "Select a column and filter type, then Load table / apply filter. Integers stay exact; NULL differs from empty text. Save project embeds original bytes and view settings.",
        "target": "Save project"
      },
      {
        "title": "Export a useful copy",
        "text": "Export source snapshot extracts exact unchanged database bytes from the project. After loading a table, filtered typed CSV/JSON exports up to 5,000 matching rows with integer strings and BLOB hex.",
        "target": "Export source snapshot"
      },
      {
        "title": "Reopen and check",
        "text": "Open your saved project and refresh to inspect its embedded source database. Cancel operation stops the engine; refresh restarts an isolated copy.",
        "target": "Open"
      }
    ],
    "trouble": [
      "If a file has a WAL header, a bare .db may be missing changes. Obtain a checkpointed copy from the original app. Encryption, corruption and unsupported modules cause an error without modifying the source.",
      "Queries terminate after five seconds; cancel also terminates the worker. Files are limited to 8 MiB, results to 8 MiB, exports to 5,000 rows, schema to 1,000 objects and tables to 200 columns. Worker termination is not an OS-level memory quota.",
      "Choose a unique sorting column for stable pages. BLOB previews show only the first 32 bytes; export retains full hex. SQLite integer values stay exact decimal strings. Browser/Electron runtime and native dialogs remain release gates."
    ]
  },
  "frame": {
    "formats": "UTF-8 Fountain and .abundance projects. Real screenplay PDF, up to 500 pages. Source: 1 MiB / 30,000 lines / 4,000 characters per line; 12 snapshots / 4 MiB. FDX unsupported.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Save current work, then choose New or open the fictional practice project.",
        "target": "New"
      },
      {
        "title": "Open your source",
        "text": "Open Fountain imports a local UTF-8 screenplay. The practice kit includes a short script with simultaneous dialogue.",
        "target": "Open Fountain"
      },
      {
        "title": "Shape the screenplay",
        "text": "Edit Fountain source, then leave the field. Use Scene outline moves, Insert title page and explicit snapshots. Undo reverses edits.",
        "target": "Fountain source"
      },
      {
        "title": "Save the editable draft",
        "text": "Save project preserves exact source and explicit snapshots. Keep Fountain backups as a portable plain-text copy.",
        "target": "Save project"
      },
      {
        "title": "Export actual pages",
        "text": "Export PDF creates measured Letter pages with embedded monospace fonts, dialogue continuations and an unnumbered title page.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and compare",
        "text": "Open the saved project. Check source and snapshots, then inspect exported PDF pages in an independent reader.",
        "target": "Open"
      }
    ],
    "trouble": [
      "If uppercase action becomes dialogue, prefix it with !. Force mixed-case character names with @.",
      "Unsupported PDF glyphs fail explicitly. Fountain retains all Unicode. Preview is not page-perfect.",
      "Save project keeps snapshots; Fountain does not. Native desktop, installed-offline and assistive-technology checks remain open."
    ]
  },
  "book": {
    "formats": "UTF-8 Markdown/text input, PNG/JPEG assets, portable .abundance project and genuine EPUB 3 output. Existing EPUB import is unsupported.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Save current work, then open the fictional garden practice project or choose New.",
        "target": "New"
      },
      {
        "title": "Describe your book",
        "text": "Set Book title, Author, Language tag and a stable Book identifier. The default identifier is a local UUID.",
        "target": "Book title"
      },
      {
        "title": "Author chapters",
        "text": "Use Import chapter or Add chapter. Edit Chapter Markdown, then leave the field to apply edits. Reorder with the chapter buttons.",
        "target": "Chapter Markdown"
      },
      {
        "title": "Save the editable book",
        "text": "Save project keeps chapters and images. Add artwork using New image description and Import image, then choose Cover image.",
        "target": "Save project"
      },
      {
        "title": "Inspect and export",
        "text": "Inspect generated package and resolve any export blockers. Export EPUB, then open it in an independent ebook reader.",
        "target": "Export EPUB"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved .abundance file and confirm the order, metadata and bundled artwork survived.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Resolve missing image and unsupported-link blockers before export.",
      "Readers can override fonts and spacing. Preview is a reading view, not a conformance validator.",
      "Independent EPUBCheck is a build-time gate; native desktop and reader visual checks remain open."
    ]
  },
  "vector": {
    "formats": "Native versioned projects, editable local linear fill/stroke gradients with 2–16 ordered stops, #RRGGBB colors and stop opacity, bounded safe SVG import/export, and PNG export up to 16 million pixels. Artboard 1–8192 units; 500 total objects; group depth 16; 2,000 commands per path / 50,000 total; SVG source 4 MiB. Paths support M/L/H/V/C/S/Q/T/Z on import, normalized to M/L/C/Q/Z. No boolean operations, elliptical arcs, filters, masks, clipping, radial/objectBoundingBox gradients, gradientTransform, href inheritance, CSS, images, multiline text, external references, embedded fonts, Illustrator files or CMYK. Unsupported SVG is refused without replacing the document. Text uses local generic fonts.",
    "steps": [
      {
        "title": "Begin with original practice artwork",
        "text": "Choose New, or save the separate Vector practice project from Help and explicitly Open it. The practice badge contains editable paths, shapes and text. Save your existing work before switching documents. For an optional second exercise, use vector-gradient-practice.abundance and vector-gradient-walkthrough.md from Help.",
        "target": "New"
      },
      {
        "title": "Draw and import safely",
        "text": "Add Rectangle, Ellipse or Text. Bézier shape adds a real editable curved path. Pen path lets you click anchors, finish or close a path, then convert line segments to cubic curves. Import SVG accepts only the documented plain SVG subset and refuses unsupported content as a whole.",
        "target": "Bézier shape"
      },
      {
        "title": "Shape the curve and organize layers",
        "text": "Select a path and use Edit Bézier nodes. Drag the round anchors/control points or use the numeric Path command fields. Shift-select layers, align them, and group adjacent layers. Drag moves; the lower-right handle resizes. Numeric geometry and rotation offer keyboard alternatives. In the separate gradient practice, select Sunset tile; edit Fill stop colors, opacity and endpoints, then Apply fill gradient edits. Add fill stop and Reverse fill gradient reshape the ramp.",
        "target": "Select all"
      },
      {
        "title": "Save the exact editable project",
        "text": "Use Save project for a portable .abundance editing backup, including groups and preserved imported source. Undo/Redo reverses committed changes. Source SVG files are never changed in place.",
        "target": "Save project"
      },
      {
        "title": "Export real artwork",
        "text": "Export SVG writes safe editable geometry, local generic font text and local userSpaceOnUse linear fill/stroke gradients with pad spread. Export PNG rasterizes the artboard, preserving transparency when Background is none, up to 16 million pixels. Review the export in your intended editor; local fonts may render differently.",
        "target": "Export SVG"
      },
      {
        "title": "Reopen and verify",
        "text": "Choose Open to restore your project, inspect Bézier controls and layer ordering, and export again. Import a copy of the exported SVG to check interchange. Keep the native project for exact backup because SVG normalizes groups/transforms and text metrics depend on fonts.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Linear gradients require distinct numeric local endpoints and ordered offsets/opacity from 0 to 1. Imported shared paints become independent per-object paints; original source is preserved. Pending raw edits must be corrected or discarded.",
      "SVG import refuses unsupported elements or attributes rather than silently flattening them. Convert arcs or special effects to supported plain paths in your source editor first.",
      "Layer grouping requires adjacent siblings to preserve stacking order; reorder layers before grouping. Groups can be nested up to 16 levels.",
      "Path size uses the Bézier control hull, not tight rendered bounds; text bounds are local-font estimates. Inspect your export for final layout.",
      "Keep width and height positive. Singular transforms and invalid colors/geometry are refused; Undo restores prior committed edits.",
      "Browser/Electron interaction and Windows native save/PNG dialogs still require manual runtime verification; independent SVG rasterization tests do not prove those UI gates."
    ]
  },
  "cue": {
    "formats": "UTF-8 SRT and bounded WebVTT, with exact integer millisecond timing. Maximum 5,000 cues, 48 hours, 20,000 characters per cue and 8 MiB subtitle source and combined cue text. MP4/WebM containers may be imported through opaque native assets; a container is not a promise of codec playback. Preview is limited to 256 MiB. No transcription, translation, transcoding or real-time styled VTT rendering. Active or external references in VTT metadata are refused. VTT blocks are preserved before cues; original source is preserved exactly.",
    "steps": [
      {
        "title": "Start with a safe practice track",
        "text": "Choose New and save the separate Cue source kit from Help. Import cue-garden.vtt with Import SRT / VTT and optionally cue-garden.webm with Import video. The sample has an intentional overlap and Unicode text; the walkthrough never replaces your document.",
        "target": "New"
      },
      {
        "title": "Import subtitles and optional video",
        "text": "Use Import SRT / VTT for a UTF-8 track. For the source kit, import cue-garden.webm through Import video, then Load video preview. Playback is optional, limited to 256 MiB, and depends on runtime codec support.",
        "target": "Import SRT / VTT"
      },
      {
        "title": "Finish timing and text",
        "text": "Select a cue using its timing button. Edit exact in/out times and text. Place the text cursor between words to split. Check adjacent cues to merge or offset. VTT settings stay with split cues; merging conflicting settings is refused.",
        "target": "Add cue"
      },
      {
        "title": "Save the editable project",
        "text": "Choose Save project to preserve text, millisecond timings, original source and VTT metadata. Video is copied to the companion assets directory; move that entire directory together with the .abundance file. Save does not overwrite imported originals.",
        "target": "Save project"
      },
      {
        "title": "Export and inspect the track",
        "text": "Export VTT preserves identifiers, settings and inert metadata, while preview displays literal text. Export SRT requires acknowledging any VTT-only metadata loss. Open the exported track in your intended player and verify timing and styling.",
        "target": "Export VTT"
      },
      {
        "title": "Reopen and keep a portable backup",
        "text": "Use Open to restore the saved project, then Load video preview if needed. Check the first and last cue, intentional overlaps and reading-speed warnings. Keep both the project and its companion media directory in your backup.",
        "target": "Open"
      }
    ],
    "trouble": [
      "If preview cannot decode the file, keep editing subtitles and use a video codec your installed runtime supports; Cue does not transcode.",
      "If merge fails, select adjacent cues and reconcile differing VTT settings first. Offset cannot create negative timing or zero-duration cues.",
      "If VTT import refuses active metadata, remove external URL/script references in a trusted text editor; no portion of the refused file replaces your project.",
      "The overlap and reading-speed flags are editorial hints, not automatic correctness judgments. Use Trim overlaps only on selected cues after sorting.",
      "A failed native save keeps the document dirty. Preserve the .abundance file and complete companion assets directory; reopening verifies source hashes."
    ]
  },
  "phrase": {
    "formats": "Portable abundance JSON projects and Standard MIDI File type 1, 480 PPQ exports. MIDI import, SMPTE, type 2, recording, VSTs, hardware MIDI and notation are unsupported.",
    "steps": [
      {
        "title": "Explore two tracks",
        "text": "Open the original First light practice project. Select Piano or Bass and inspect their independent notes.",
        "target": "Track"
      },
      {
        "title": "Shape a note",
        "text": "Choose Move or Resize and drag a note; select it to edit pitch, tick, duration and velocity precisely.",
        "target": "Tool"
      },
      {
        "title": "Hear and refine",
        "text": "Play at low volume. Add a tempo change or quantize the selected track; Undo restores the earlier arrangement.",
        "target": "Play"
      },
      {
        "title": "Save the composition",
        "text": "Save a portable project containing notes, tempo map, meter and instrument choices.",
        "target": "Save project"
      },
      {
        "title": "Export real MIDI",
        "text": "Export a Type-1 PPQ MIDI file with a conductor track and separate instrument tracks. Mute/solo affect audition only.",
        "target": "Export MIDI"
      },
      {
        "title": "Reopen your work",
        "text": "Open the saved abundance project. Standard MIDI import is deliberately unsupported to prevent loss of controllers or SysEx.",
        "target": "Open"
      }
    ],
    "trouble": [
      "If sound is absent, check the device output and use Play again; actual native playback remains unverified.",
      "Same-pitch overlaps within one track are rejected: shorten or move a note.",
      "Invalid values stay visible and block Save/Export until corrected or deliberately discarded."
    ]
  },
  "tag": {
    "formats": "Reads bounded MP3 ID3v2.3/v2.4 revision 0 with zero tag/frame flags; preserves unknown frames and audio bytes. Exports changed new MP3 copies plus SHA-256 manifest in ZIP. No FLAC or flagged tags.",
    "steps": [
      {
        "title": "Inspect a small batch",
        "text": "Open the practice project or import an MP3. Keep sources and cover data within 16 MiB total. Read the before values and preserved unrecognized frames.",
        "target": "Import MP3"
      },
      {
        "title": "Apply shared metadata",
        "text": "Select tracks, type a shared album or artist in the batch draft, then explicitly apply nonempty batch fields.",
        "target": "Apply nonempty batch fields"
      },
      {
        "title": "Review exact changes",
        "text": "Number selected tracks and compare each before/after field and cover preview. Originals remain untouched.",
        "target": "Number selected tracks"
      },
      {
        "title": "Save the workspace",
        "text": "Save the portable project with embedded original sources and editable changes. Batch drafts require Apply first.",
        "target": "Save project"
      },
      {
        "title": "Export modified copies",
        "text": "Export a ZIP with changed MP3 copies and verification manifest. Extract into a new directory; do not overwrite originals.",
        "target": "Export modified album ZIP"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the project to continue. Import a tagged output copy to inspect its tags, then check it in your music player.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Flagged, encrypted, compressed, unsynchronized or malformed tags are refused before any write.",
      "No changed copies means nothing will export; apply metadata or cover edits first.",
      "Practice audio is an original half-second 440 Hz tone generated locally for safe, repeatable file tests."
    ]
  },
  "cells": {
    "formats": "Portable .abundance workbook; reviewed XLSX import (4 MiB compressed) with exact-original recovery; UTF-8 text-only CSV import (2 MB); active-sheet calculated-values CSV export; formula-preserving XLSX export; all-sheet browser print. Up to 8 sheets, A1:Z200 per sheet and 10,000 stored cells. No macros, external workbook/data connections, chart/pivot/merge editing or full Excel compatibility. Formula limit 2,048 characters, 512 tokens, 48 parse levels and 256 dependency levels.",
    "steps": [
      {
        "title": "Open a separate practice copy",
        "target": "New",
        "text": "Save current work. Download cells-practice.abundance from Help, explicitly Open it, then choose Save as with a new practice filename. Downloads and walkthrough tips never replace work. On Supplies, the starting D2/D3 values are 26 and 36; D4 and Summary B1 are 62. New starts an empty workbook, not this sample."
      },
      {
        "title": "Review and retain an XLSX source",
        "target": "Import XLSX",
        "text": "Export XLSX to a fresh practice filename, then choose Import XLSX for that file. Read worksheet sizes, errors and every normalization/loss note. Choose Apply reviewed XLSX copy explicitly; it replaces the editable workbook and retains the exact source separately. Do not edit while reviewing; a stale preview must be imported again. On Supplies, set Columns to 8 if needed and leave the field to commit before continuing. Keep the exported source file for comparison."
      },
      {
        "title": "Select a range and fill deliberately",
        "target": "Cell content",
        "text": "On Supplies, click D3, enter 0 in Cell content and leave the field to commit. Click D2, then Shift-click D3: check selected range D2:D3, active cell D3, destination D3:D3 and one nonempty overwrite. Clear Filter visible rows and finish or explicitly discard pending fields/copy proposals first. Choose Fill Down: D3 becomes =(B3*C3), with value 36; D4 and Summary B1 return to 62. Undo once restores D3 to 0; Redo restores the fill. Next, click F2, enter Reviewed and leave the field to commit. Click F2 again and Shift-arrow right twice to select F2:H2; inspect destination G2:H2 and choose Fill Right. All three cells read Reviewed. The top row or leftmost column supplies the fill, even for reverse selections; the active focus cell alone owns Cell content, formatting and row/column commands."
      },
      {
        "title": "Save the editable practice",
        "target": "Save project",
        "text": "Use Save as if you have not yet made a separate practice copy; Save project thereafter updates that copy. Wait for saved confirmation. Valid retained cell/settings fields save to their original targets; invalid, conflicting or stale proposals stay visible and block persistence until corrected or explicitly discarded. Save never executes Copy range or Fill. The native project keeps every supported sheet/formula/style, the exact imported XLSX and its loss report. Downloads and the source file remain separate."
      },
      {
        "title": "Export and recover separately",
        "target": "Export XLSX",
        "text": "Export XLSX to a fresh filename for editable formulas and supported types/styles. Export exact XLSX original recovers the untouched source from step 2, including after edits. Compare its bytes with that saved source. Export values CSV keeps only the active sheet’s calculated display values with formula-injection protection; Print workbook includes all sheets. A new export is not a native-project save. Inspect your intended consumer; no full Excel or native desktop acceptance is implied."
      },
      {
        "title": "Reopen and check dependencies",
        "target": "Open",
        "text": "After saving, Open your practice .abundance copy; Keep editing cancels replacement if work still needs saving. Check Supplies D3 is =(B3*C3) and F2:H2 all read Reviewed. Change Supplies B2 to 5 and commit: D2 becomes 32.5, D4 becomes 68.5 and Summary B1 becomes 68.5. Save the new edit. Recover the exact XLSX original again; these edits must not change it. Selection is view state and resets on Open/history rather than being saved."
      }
    ],
    "trouble": [
      "More practice in Help: download cells-clipboard-walkthrough.md, repair-cafe.abundance, materials.tsv and cells-clipboard-expected.json for the separate six-step Repair café copy/paste exercise. Grid-focused copy/paste and Paste table text use an explicit review and Apply reviewed table paste; Save never applies it. Expected D5/D6 values are 7.5/5, then B5=10 gives D5=25; safe external values give D8=7. Native clipboard/Excel/Windows acceptance remains unpassed.",
      "Fill repeats immutable source values, formulas, types and supported formatting; there is no series inference or drag handle. Clipboard table paste is a separate explicitly reviewed workflow. Relative references shift independently; $ locks remain fixed. Missing/default blank sources clear destination records; deliberately styled/typed blanks retain metadata. Any active row filter disables fill, including hidden rows. A fill with no destination changes nothing.",
      "Keep other editing workflows explicit: Copy range has separate source/destination proposals. Insert/delete acts on the active cell’s entire row/column and rewrites surviving explicit references, including $ references; deleted targets become #REF!. Undo restores the operation. These commands do not act on every row/column of the selected rectangle.",
      "Supported functions (14): SUM, AVERAGE, MIN, MAX, COUNT, IF, ABS, ROUND, SQRT, IFERROR, COUNTIF, SUMIF, MATCH and INDEX. MATCH needs a one-row or one-column range and an explicit final 0; approximate matching is unsupported. INDEX returns one cell, truncates fractional positions and rejects zero/array-return positions. IFERROR cannot hide cycles or resource limits.",
      "COUNTIF and SUMIF support numeric, boolean and text criteria, comparison operators and case-insensitive *, ? and ~ wildcards. Numeric criteria keep numbers distinct from text. SUMIF uses its sum range’s top-left cell and the criteria range’s size, within sheet bounds. Dates are distinct ISO values from 1900-03-01 onward; date arithmetic is rejected. Earlier imported dates/times become labeled text after review. Text equality is case-insensitive; ordinary text ordering and mixed-type comparisons reject.",
      "Import checks bounded ZIP/XML structure before loading. Supported values, safe formulas, bold, General, 0.00 and 0.0% formatting become editable; other presentation features are reported as normalized or omitted. Review losses before Apply. Exact-original recovery preserves the source separately; it does not restore omitted features into the editable grid.",
      "Calculation uses an original bounded AST interpreter, never JavaScript eval. A fresh worker stops on cancellation or the three-second limit. ExcelJS handles files, not calculation. Independent headless LibreOffice tests recalculated three exports, checked 15 expected formula values and verified a changed-input dependency. This is targeted consumer evidence; native Microsoft Excel, browser/Electron GUI, Windows installed offline launch and print layout remain unverified.",
      "Sort keeps row 1 as headers, moves whole rows and adjusts relative formulas like copying. It does not retarget other formulas to follow a record. Inspect formulas after sorting. Sheet renaming is disabled while cross-sheet references exist. CSV keeps calculated display values only; use XLSX or .abundance to keep supported formulas."
    ]
  },
  "gauge": {
    "formats": "Portable .abundance notebook; Unicode plain-text source/results report; paginated selectable-text PDF; sweep CSV and SVG plot. Original scalar real SI interpreter with length, mass and time dimensions; explicitly listed SI/imperial units and dimensionless angles. Maximum 100 blocks, 2,048 expression characters, 512 tokens, 48 parse levels, magnitude 1e100 and 2–200 evenly spaced sweep samples.",
    "steps": [
      {
        "title": "Start safely",
        "text": "Save current work before opening the separate travel-time practice notebook. Downloading the sample never changes your active project. New starts an empty notebook.",
        "target": "New"
      },
      {
        "title": "Name an input",
        "text": "Choose Add calculation. Use a variable name such as distance, an expression such as 12 * km, and output unit km. Multiplication must be explicit. Notes explain the assumption behind each input.",
        "target": "Add calculation"
      },
      {
        "title": "Show the derivation",
        "text": "Add speed = 24 * km / h, then duration = distance / speed with output unit min. Calculations run top to bottom. Dependent results show substituted SI values; move blocks to repair forward references.",
        "target": "Expression 1"
      },
      {
        "title": "Save your notebook",
        "text": "Save project keeps expressions, notes, assumptions, order and sweep settings. Save as creates another editable copy. Undo/Redo restores changes; invalid fields stay visible until corrected.",
        "target": "Save project"
      },
      {
        "title": "Sweep and report",
        "text": "Set Sweep variable to distance, start 0 * km, end 24 * km, result duration, X unit km and Y unit min. The 25-point table and plot should end at 24 km and 60 min. Export PDF shows equations, substitutions, results and any errors.",
        "target": "Export PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project and change distance from 12 * km to 24 * km. Duration should double from 30 to 60 min. Export source preserves reviewable text; sweep CSV and SVG keep labeled axes.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Use explicit * and /, for example 9.80665 * m / s^2. Functions are sqrt, abs, sin, cos, tan, exp, log, min and max. No offset temperatures (Celsius/Fahrenheit), matrices, complex quantities, import functions, external code, symbolic solving or design-code certification. Unit names and variables are case-sensitive.",
      "Unknown, duplicate and forward names, incompatible dimensions, nonfinite values and invalid domains appear as errors. Reports include ERROR lines rather than presenting invalid notebooks as successful. Sweeps reject notebooks with errors, dimension mismatches and counts over 200. Changing a sweep input overrides its named block for each sample.",
      "The original interpreter avoids Math.js/CSparse and Hurmet dependencies. Calculations run in a terminable module worker with a three-second deadline. PDF uses a standard embedded font and visibly substitutes unsupported characters with ?; use source text for exact Unicode. Native Windows dialogs, installed offline launch, physical print and visual accessibility remain unverified."
    ]
  },
  "sprite": {
    "formats": "Portable native project; PNG input up to 128×128 and 2 MiB; lossless RGBA PNG frame/sheet at 1×–8× (4 million output pixels); matching JSON rectangles/timings; real looping GIF. Canvas 1–128 each side, 100 frames, 8 layers, 1,048,576 total cel pixels. Fixed approximate GIF palette, binary alpha threshold 128, 10 ms timing units. No Aseprite import, skeletal animation, tilemaps or interpolated scaling.",
    "steps": [
      {
        "title": "Open an original practice loop",
        "text": "Save the separate firefly practice project from Help, then Open it explicitly. It has three editable cels. Save your existing document before switching.",
        "target": "Open"
      },
      {
        "title": "Make pixel marks",
        "text": "Choose pencil, eraser or fill. Drag line or rectangle tools. Change Ink, zoom in, and use arrow keys plus Space on the focused canvas for keyboard drawing. Select a region, then move it; Alt copies.",
        "target": "Tool"
      },
      {
        "title": "Build animation",
        "text": "Add layers, toggle their visibility and raise them. Add blank frames or duplicate a frame, reorder it, and change Frame duration ms. Show onion skin to compare the previous frame, then Play.",
        "target": "Duplicate frame"
      },
      {
        "title": "Keep an editable backup",
        "text": "Save project creates a portable .abundance file with every cel, layer, timing and imported PNG source. Undo/Redo restores committed edits; history is bounded. Save as keeps a named alternative.",
        "target": "Save project"
      },
      {
        "title": "Export usable assets",
        "text": "Export a PNG frame or an untrimmed PNG sheet plus its matching metadata JSON at the same integer scale. Export animated GIF for preview/sharing. Read the fixed-palette and transparency limits before choosing GIF.",
        "target": "Export animated GIF"
      },
      {
        "title": "Reopen and check timing",
        "text": "Open the saved project, inspect layer independence and durations, and play the loop. Check the GIF in an independent viewer and reconstruct sheet frames using their x/y rectangles and durationMs metadata.",
        "target": "Open"
      }
    ],
    "trouble": [
      "PNG import replaces the document only when decoding succeeds and no draft typing occurred while it was pending. Source files stay untouched.",
      "A selection must fit entirely inside the canvas; move/copy refuses clipping. Resize crops right/bottom, with Undo available.",
      "GIF cannot preserve partial alpha or all RGB colors; PNG/project are exact. Some viewers clamp fast GIF delays.",
      "Keep invalid field text visible, correct it, then Save again. The shell blocks persistence while invalid values remain.",
      "Native pointer capture, HiDPI, GIF playback and Windows dialogs remain manual runtime gates on this host."
    ]
  },
  "stitch": {
    "formats": "Portable native project/source PNG; full-cross counted charts up to 300×300, 64 chart colors; PNG input up to 2048×2048 and 2 MiB; PNG overview, paginated monochrome PDF with color overview and legend, thread-count CSV. Custom thread library CSV: brand,code,name,color. Generic unmapped colors are not purchasable floss. No fractional/backstitch, OXS, embroidery-machine export or proprietary pattern extraction.",
    "steps": [
      {
        "title": "Begin a counted chart",
        "text": "Open the separate original garden-diamond practice project from Help, or start blank. Width/height are stitch counts. Fabric stitches per inch controls physical dimensions without moving stitches.",
        "target": "Width in stitches"
      },
      {
        "title": "Convert a picture deliberately",
        "text": "Set chart size and color limit, then Import PNG for preview. Conversion uses a bounded background worker and transparent pixels become blanks. Inspect the preview before Apply image conversion. Sources stay untouched.",
        "target": "Import PNG for preview"
      },
      {
        "title": "Edit and assign real thread",
        "text": "Paint, erase or fill full crosses. Select/move/copy regions; use the keyboard cursor if preferred. Edit brand/code/name and unique symbols, merge colors, or import your own palette CSV and assign a thread.",
        "target": "Thread code"
      },
      {
        "title": "Plan fabric and save",
        "text": "Choose fabric count, margin, working strands and waste. Finished size and approximate materials change immediately. Save project preserves the exact chart, mapping, source and provenance; Undo/Redo reverses committed edits.",
        "target": "Save project"
      },
      {
        "title": "Print a stitchable chart",
        "text": "Export chart PDF provides an overview, coordinate-labeled disjoint monochrome chart pages and a symbol/count legend. Print at 100%; chart diagram scale is not fabric scale. Export CSV for counts and PNG for the color overview.",
        "target": "Export chart PDF"
      },
      {
        "title": "Reopen and reconcile",
        "text": "Reopen your project and compare the full-cross total with the CSV and PDF legend. Join pages by their column/row ranges: no overlaps and no missing stitches. Compare actual physical floss before buying.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Blank cells and white thread are different. Blank cells have no symbol; every white stitch does.",
      "Screen matches are approximate; compare physical thread before buying. Thread-length estimates have explicit path/strand/waste assumptions and are not skein guarantees.",
      "PDF chart pages have no overlap and use labeled 1-based coordinate ranges. Overview is decorative; symbol pages are the working chart.",
      "Typing while an image or palette import is pending makes that old result stale. Your current draft remains intact.",
      "Invalid thread symbols and values remain visible until corrected. Native worker, pointer/keyboard interaction, printing and Windows dialogs still require runtime verification."
    ]
  },
  "shelf": {
    "formats": "Portable .abundance project and Shelf catalog JSON include coverage/history/virtual tags/notes; CSV reports entries only. Native scans accept explicitly chosen ordinary local subfolders, not whole-drive roots/network shares. Up to 200,000 entries per project, 100 media, 64 scan levels, 24 MiB serialized scan metadata and 28 MiB compact state. Metadata caps are not process-memory quotas.",
    "steps": [
      {
        "title": "Try a detached sample safely",
        "text": "Save current work first. Download the original synthetic Shelf practice project from Help, then explicitly Open it. The invented file records are a learning sample, not evidence of a real disk scan. Two equal labels intentionally have different catalog identities.",
        "target": "New"
      },
      {
        "title": "Catalog a selected local subfolder",
        "text": "Enter New medium label, then Choose root and scan new medium. Select an ordinary local subfolder in the native dialog. Filesystem roots, network shares and symlink roots are unsupported. The scan reads metadata only; review coverage and Apply reviewed catalog. No source file is opened or hashed.",
        "target": "Choose root and scan new medium"
      },
      {
        "title": "Search disconnected observations",
        "text": "Search path / notes and filter medium, type, tags, modification date or byte size. Results remain searchable with the disk disconnected. Click an entry to edit virtual tags or notes. A rescan requires your explicit same-medium/root identification and review; labels and drive letters cannot prove identity.",
        "target": "Search path / notes"
      },
      {
        "title": "Save your catalog",
        "text": "Save project keeps metadata, notes, tags, scan coverage and history. New Save/Save as needs a fresh filename outside all subfolders selected for cataloging in this app session. Ordinary Save updates only the current validated project. Undo/Redo restores committed catalog edits.",
        "target": "Save project"
      },
      {
        "title": "Export a portable copy",
        "text": "Export portable catalog writes complete editable catalog JSON; Export CSV is a spreadsheet-friendly entry report. Every export requires a fresh filename outside cataloged subfolders. Formula-like text in CSV is neutralized; JSON preserves exact text. A catalog contains no file contents and is not a backup.",
        "target": "Export portable catalog"
      },
      {
        "title": "Reopen and check coverage",
        "text": "Open the saved .abundance project, or use Open portable catalog for exported JSON. Search and edit notes while media are absent. Partial rescans retain unobserved prior entries as not checked; full enumerations retain them as missing, never as proof of deletion. Inspect Saved scan coverage and history.",
        "target": "Open"
      }
    ],
    "trouble": [
      "A catalog is not a backup, content index, recovery tool or live filesystem browser. There are no source open/hash/rename/delete/copy shortcuts. Names and notes are private local data; no telemetry or hosting is used.",
      "Choose a local subfolder, not a filesystem root or network share. Skipped links/special names, unreadable entries and depth/byte/count limits create explicit partial coverage. Cancel and stale typing never apply a scan.",
      "Never identify a disk from its label alone. Equal labels remain distinct. Select the same physical medium AND root explicitly before rescanning. Shelf cannot prove that identity, and a different root can produce a misleading comparison.",
      "Save as and exports refuse existing filenames and selected catalog subfolders. Pick a fresh name elsewhere. Selected subfolder protections remain for the app session even after New or releasing the scan.",
      "Large catalogs need more memory than their serialized size. Real Linux testing covered 100,001 owned synthetic files, native project persistence and mid-scan cancellation; Windows/removable-disk/native-dialog/screen-reader/DPI acceptance remains NOT RUN."
    ]
  },
  "trail": {
    "formats": "UTF-8/ASCII GPX 1.1 import and edited-copy export, point CSV and JSON change report; portable .abundance source+working XML. Maximum 4 MiB XML, 20,000 geographic points, 100,000 XML nodes and 64 levels. Links, active XML, DTDs/entities and unsupported structures are refused. Namespace/metadata/extension subtrees are retained by supported edits; XML whitespace/quoting may change. One recording is open at a time.",
    "steps": [
      {
        "title": "Open a separate practice recording",
        "text": "Save current work first. Download the original synthetic Trail practice project from Help and explicitly Open it. The source coordinates and sensor text are invented; they are not a surveyed route. New creates an empty project.",
        "target": "New"
      },
      {
        "title": "Import and inspect GPX",
        "text": "Import GPX accepts one UTF-8 GPX 1.1 source at a time and replaces the working recording. The original XML remains in the editable project. Choose a track segment, route or waypoint group. No online map, road snapping or navigation is provided.",
        "target": "Import GPX"
      },
      {
        "title": "Repair a selected point",
        "text": "Use Linked point selection, the point table or arrow keys on a chart. In the unedited practice track, point 3 is a synthetic spike. Select it, choose Preview removal, then read the warning and Remove previewed points. Coordinate/time/elevation fields edit only the selected observation. Split preserves a gap; Merge next segment explicitly connects it.",
        "target": "Linked point selection"
      },
      {
        "title": "Save editable work",
        "text": "Save project keeps the imported source XML, edited XML and change history in one portable .abundance file. Undo/Redo restores committed changes. Correct invalid drafts before saving. Moving a point retains its observed time/elevation; reversing does not invent a new time order.",
        "target": "Save project"
      },
      {
        "title": "Export a new track copy",
        "text": "Export GPX copy writes the edited track through an explicit local Save dialog. Export points CSV and Export change report provide coordinates, original timezone timestamps, distances and a provenance summary. Distances use spherical haversine and omit gaps between separate segments. Elevation gain is unsmoothed.",
        "target": "Export GPX copy"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved .abundance project and inspect the source, selected segment and edits. Check the exported GPX in your intended viewer before relying on it. Trimming is not anonymization: metadata, waypoints and retained sensor extensions may still reveal location.",
        "target": "Open"
      }
    ],
    "trouble": [
      "An empty elevation plot means the segment has no recorded elevations. Nothing is fetched or inferred. The coordinate canvas is a schematic local view without a basemap; it is not a navigation tool.",
      "Latitude must be −90…90; longitude −180 inclusive to 180 exclusive. Time requires a valid ISO date/time and timezone. Blank elevation/time removes that observation. Source files remain unchanged.",
      "Merge is limited to the next segment in the same track. It explicitly adds a straight connection across the gap; next-segment metadata blocks merging to avoid silent loss. Split duplicates segment metadata and the report records this.",
      "Pending imports are discarded if you type or replace the document. Correct invalid fields before changing selections, or use the shell New/Open discard route. Previewed removals require their separate Apply button.",
      "Native Windows dialogs, installed offline behavior, screen readers/DPI and independent GUI GPX-viewer acceptance remain unverified. Engineering evidence includes independent lxml GPX1.1 schema checks, source-fidelity tests and rasterized chart inspection."
    ]
  },
  "stage": {
    "formats": "Up to 100 authored slides; simple PPTX intake up to 50 slides, 4 MiB original, and 144–2000 points per side, 100 objects per slide / 2,000 total. Text, rectangles, ellipses, 20 × 8 tables and embedded PNG/JPEG. PNG/JPEG imports are limited to 4 MiB and 8 million pixels each, 12 MiB total image bytes, 64 images and 24 million decoded pixels per project. Project JSON is capped at 18 MiB. PNG output is 2× current-slide resolution. PDF embeds the bundled DejaVu Sans font. PPTX references that font without embedding it; embedded-font source packages are refused; no animations, video or collaboration. Simple PPTX import is reviewed, fail-closed and limited to regular text, supported shapes/images/tables and body-only notes. Visible imported PNG must be 8-bit noninterlaced grayscale/RGB with optional alpha, without ICC or animation; JPEG must have no ICC or rotated EXIF. Every media part is decoded and bounded. Font substitution, template linkage, line-box export and other omissions are disclosed before adoption.",
    "steps": [
      {
        "title": "Choose a separate practice deck",
        "text": "Save current work. Help offers the original stage-practice.abundance Garden workshop for beginner authoring: explicitly Open it, then Save as a new name. For migration, download garden-migration.pptx and pptx-migration.md into a separate folder. Downloading practice files never replaces your current document. Finish saving before starting the import review.",
        "target": "Save project"
      },
      {
        "title": "Import, inspect and adopt deliberately",
        "text": "Choose Import PPTX and select garden-migration.pptx. Your current document stays unchanged until adoption. Use Previous review slide and Next review slide to inspect all three slides. Read every listed change: Calibri becomes regular DejaVu Sans, template linkage becomes per-slide objects, note formatting becomes plain text, and regenerated PPTX uses line textboxes rather than original paragraph grouping. Check Acknowledge PPTX changes, then Adopt editable PPTX copy. Unsupported packages are refused as a whole.",
        "target": "Import PPTX"
      },
      {
        "title": "Make real editable changes",
        "text": "On Garden plan, select Title 1 and set Object text to A revised garden together. On Shapes and photographs, edit Garden bed fill and move Sun with X/Y. On Workshop tasks, select Table 2 and change Cell R2 C2 to Seeds and shared compost. Move that slide earlier, add Bring spare pots to Speaker notes, then Undo and Redo. Beginner decks can use Add text, shapes, tables and the same numeric controls. Invalid drafts must be corrected or deliberately discarded.",
        "target": "Add text"
      },
      {
        "title": "Save the editable project",
        "text": "Choose Save as with a fresh .abundance filename for a separate practice copy; Save project then updates your copy. Focused text edits are committed before saving. Exact original PPTX bytes remain inside the imported native project. Bounded history snapshots can also contain copies; source bytes are not deduplicated across history. Exports do not save your project.",
        "target": "Save project"
      },
      {
        "title": "Export and inspect independently",
        "text": "Export PPTX creates editable text, shapes and tables plus embedded pictures and notes. Install DejaVu Sans in the receiving presentation program and inspect the result there. PDF embeds that font for fixed-layout sharing; PNG renders the current slide at 2×. Overset text or unavailable glyphs blocks export. Use fresh filenames; existing source and project files cannot be overwritten by exports. Present locally previews the deck, with arrows to navigate and Escape to exit.",
        "target": "Export PPTX"
      },
      {
        "title": "Reopen and recover the original",
        "text": "Open the saved native project and verify the edited title, table cell, notes, images and slide order. Recover exact original PPTX to a fresh filename produces the byte-identical selected source, including after native reopen. Save after later edits. Keep the .abundance project for future Stage editing and explicitly Open previous work when finished. The separate six-step pptx-migration.md guide repeats the full migration exercise.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Overset text blocks export. Enlarge the frame, reduce font size or shorten the text. The full original text always remains in the project.",
      "The bundled font covers many European, Greek and Cyrillic characters, but not CJK. Unsupported glyphs are listed in preflight and refused, never silently substituted.",
      "DejaVu Sans is not embedded in PPTX. Install the bundled, licensed font on your presentation computer. Target-office visual fidelity remains a release gate until reviewed there.",
      "Imported image sources are never modified. A pending import becomes stale as soon as you type or change the document. Try Import image again after finishing edits.",
      "A red invalid field prevents save/export. Correct it, use Discard draft, or use the shell New/Open discard prompt. Drafts are not silently clamped.",
      "Embedded-font packages, including the tested Impress-resaved source, are refused. Successful output consumption does not imply re-import compatibility. The ten-second worker deadline may refuse a large valid deck safely; published limits are admission ceilings, not a maximum-size responsiveness guarantee.",
      "Native Windows/Electron interaction, native PNG rendering and released PowerPoint/LibreOffice GUI behavior remain separate release gates. Headless consumer evidence does not certify general interoperability."
    ]
  },
  "press": {
    "formats": "Up to 48 pages, 100 objects per page / 2,000 total, 200 stories / 500,000 total story characters. Page sizes 144–2,000 pt, margins at least 18 pt, bleed 0–36 pt. One to four columns with a fixed 12 pt gutter. Linked flow order is explicit and unique per story. PNG/JPEG images up to 4 MiB and 8 million pixels each, 12 MiB image bytes total, 64 images and 24 million decoded pixels per project. PDF embeds bundled DejaVu Sans and includes trim, bleed, crop and media boxes. PNG exports the current page at 2×. No PUB, INDD, arbitrary PDF import, CMYK, PDF/X, imposition or hyphenation.",
    "steps": [
      {
        "title": "Choose a small publication",
        "text": "Create a new publication, or download the separate original four-page Neighborhood notebook practice project from Help and explicitly Open it. Page dimensions, margin and bleed are in points, with 72 points to an inch. The tri-fold source kit provides a separate two-sided brochure example.",
        "target": "New"
      },
      {
        "title": "Place text and images",
        "text": "Add text frames and import local PNG/JPEG images. Select objects in the outline or on the page. Drag to move, or use numeric X, Y, Width and Height. Choose image Fit to keep the whole picture, or Crop to fill its frame.",
        "target": "Add text"
      },
      {
        "title": "Flow one story through frames",
        "text": "Select an independent text frame and choose Create story from text. Other text frames can select that Linked story. Flow order determines reading order across all pages; each frame needs a unique whole number within its story. Set Columns to one through four. Edit Story text once to reflow every linked frame.",
        "target": "Create story from text"
      },
      {
        "title": "Build the pages",
        "text": "Duplicate or reorder pages, set Header and Footer, and use {page} and {pages} in the footer. Duplicate page copies its stories independently. Linking is explicit: a duplicate does not steal text from the original story. The margin guide is visible on canvas but not exported.",
        "target": "Save project"
      },
      {
        "title": "Preflight and save",
        "text": "Review preflight for unplaced text, missing font glyphs and low image resolution. Overset or unsupported glyphs block export while preserving full text in the project. Save project keeps all stories and embedded images. Undo reverses committed edits.",
        "target": "Export PDF"
      },
      {
        "title": "Export and reopen",
        "text": "Export PDF creates selectable embedded-font text and actual trim/bleed boxes. Print at 100% without Fit to page when physical dimensions matter. Reopen your native project to continue editing. This is an RGB home/office workflow, without CMYK, PDF/X or professional imposition.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Unplaced story characters block export. Add and link another frame, make frames larger or edit the story. Deleting a frame preserves its complete story text and can create a visible overset warning.",
      "Duplicate page duplicates the entire story associated with frames on that page. If only part of a linked story was on that page, the independent copy may need more frames; preflight reports this.",
      "Images below 150 ppi produce a warning, not an export error. Use higher-resolution source images for print. Crop is centered and cannot be panned in this version.",
      "The bundled font supports many European, Greek and Cyrillic characters, not CJK. Unsupported characters are refused rather than exported as missing boxes.",
      "Page dimensions and bleed are points. PDF MediaBox is trim plus bleed on each edge, TrimBox is inset by bleed. Background color extends into bleed; content remains inside trim.",
      "Native Windows/Electron pointer/keyboard/PNG behavior and physical printer ruler checks remain unverified release gates."
    ]
  },
  "theme": {
    "formats": "Exact UTF-8 text import; editable .abundance projects; coded evidence CSV, plain-text evidence report and codebook CSV. 50 sources, 1 MiB total source bytes, 200 codes, hierarchy depth 12, 5,000 spans, 8 MiB project. No audio, automatic coding, REFI-QDA/QDPX or clinical inference.",
    "steps": [
      {
        "title": "Begin with a safe copy",
        "text": "Save your own work. Help offers a separate fictional practice project and raw UTF-8 transcripts; opening practice uses the normal discard protection.",
        "target": "New"
      },
      {
        "title": "Import an immutable source",
        "text": "Import a UTF-8 transcript. Source text and newlines are preserved exactly. Select words in the read-only source, or enter UTF-16 offsets.",
        "target": "Import UTF-8 transcript"
      },
      {
        "title": "Define a code",
        "text": "Add a code, give it a useful definition and optional parent. Existing labels and definitions remain editable; merge changes require a preview.",
        "target": "Add code"
      },
      {
        "title": "Save editable work",
        "text": "Use Save project after applying any explicit Add/Assign forms. It preserves editable sources, annotations and review state. Keep the original imported files unchanged.",
        "target": "Save project"
      },
      {
        "title": "Export a reviewed copy",
        "text": "Export codebook CSV from the current code definitions. Evidence exports separately require explicit source selection and may contain sensitive interview text.",
        "target": "Export codebook CSV"
      },
      {
        "title": "Reopen and continue",
        "text": "Use Open to select the saved .abundance project in a fresh session. Check the editable source and review data before continuing; opening never modifies an imported original.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Offsets are zero-based UTF-16 code units and the end is exclusive. Emoji surrogate pairs cannot be split. Combining accents can be selected separately; review exact excerpt boundaries. Sources cannot be edited in this app after import.",
      "A code with children or assignments cannot be deleted until those uses are removed or merged. Merge preview names the affected span and direct-child counts; definitions and memos combine and duplicate assignments collapse. Merging into a descendant is refused.",
      "Evidence exports require selected source checkboxes. They include source names/IDs, aliases, exact text, code labels, offsets and linked memos. CSV neutralizes formula-like text with a leading apostrophe; project data and plain-text reports remain verbatim.",
      "Save commits a focused valid field synchronously. Invalid drafts stay visible and block saves/exports. Unsubmitted new-span offsets/memos are local forms until Assign. Imports finishing after new typing are discarded.",
      "Native Windows dialogs, browser visual layout, assistive technology and installed offline runtime are unverified. This is a private engineering preview with no release certification.",
      "Additional workflow guidance: Code exact words: Select a source span, set the start and exclusive end, choose a code and Assign. Retrieved spans allow multiple assignments and linked memos. Undo reverses coding. Inspect your reasoning: Use OR/AND queries and document filters. The matrix counts exact code-to-span assignments, not people or prevalence. Save the project with its immutable source text. Export consciously: Explicitly check included sources before exporting evidence. CSV and text retain offsets, quotes and memos. Aliases alone do not anonymize interviews. Export the codebook separately."
    ]
  },
  "gloss": {
    "formats": "Exact UTF-8 plain-text source; editable .abundance; reconstructed translated text with preserved CRLF/LF/CR boundaries; bilingual review CSV; glossary TSV; strict PlainText TMX 1.4 pairs. Source ≤1 MiB, 5,000 segments, 10,000 units per paragraph, 2,000 memory pairs, 1,000 terms, project ≤8 MiB. No DOCX, XLIFF, SDLXLIFF, Trados projects, machine translation or online dictionaries.",
    "steps": [
      {
        "title": "Start your language pair",
        "text": "Save current work, then use New or open the separate fictional practice project from Help. Set source and target language identifiers before translating.",
        "target": "New"
      },
      {
        "title": "Review source boundaries",
        "text": "Import UTF-8 plain text. Initial segments follow physical paragraphs/lines. Split or join within a paragraph before confirming segmentation; newline boundaries stay exact.",
        "target": "Import UTF-8 source text"
      },
      {
        "title": "Translate and review",
        "text": "Write the target beside its immutable source. Move between segments and set Draft, Reviewed or Approved. Editing a target returns it to Draft; empty targets cannot be approved.",
        "target": "Next segment"
      },
      {
        "title": "Save editable work",
        "text": "Use Save project after applying any explicit Add/Assign forms. It preserves editable sources, annotations and review state. Keep the original imported files unchanged.",
        "target": "Save project"
      },
      {
        "title": "Export a reviewed copy",
        "text": "Export bilingual review CSV to inspect source, target and approval status. Approved text, source-fallback text and local-memory exports have separate clearly labeled controls.",
        "target": "Export bilingual review CSV"
      },
      {
        "title": "Reopen and continue",
        "text": "Use Open to select the saved .abundance project in a fresh session. Check the editable source and review data before continuing; opening never modifies an imported original.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Segmentation is deliberately manual. Abbreviations, Japanese punctuation and Spanish question marks are never guessed. Confirm boundaries before editing targets; start a fresh project for a different source. Original source remains unchanged.",
      "Exact memory matches are case/whitespace-sensitive. Fuzzy scores use UTF-16 Levenshtein distance, limited to 500 units and 40 closest-length candidates. Candidate coverage and provenance are shown; suggestions require your review.",
      "TMX import accepts exactly two matching language variants per unit, plain segment text and supported header attributes. Inline tags, properties, DTDs, external entities, CDATA and unsupported formats are rejected visibly. Empty units reject the whole import. Original TMX formatting is not preserved; supported text and language semantics are.",
      "CSV/TSV neutralize formula-like values with a leading apostrophe. TSV export refuses tabs/newlines in fields rather than silently changing them. TMX preserves Unicode and uses safe XML escaping, but omits app-specific memory provenance. Keep the project for provenance.",
      "Invalid drafts stay visible and block saves/exports. Explicit Add-term/Add-memory forms stay local until submitted. Native Windows dialogs, browser/RTL visual layout, screen readers, installed offline launch and OmegaT application import remain unverified release gates.",
      "Additional workflow guidance: Reuse with provenance: Find exact or scored fuzzy local-memory matches. Open the result to inspect provenance, then deliberately Apply. Suggestions are always Draft and never auto-approved. Check what matters: Add terminology and run checks for missing translations, numbers, placeholders, repeated sources and missing glossary targets. These warnings do not judge fluency or correctness. Save and export honestly: Save the project, then export bilingual review CSV. Approved text requires every segment approved. The clearly labeled source-fallback file may mix languages; memory export contains only stored pairs."
    ]
  },
  "sample": {
    "formats": "Comma-separated UTF-8 CSV only; exact source text retained including BOM and line endings. Portable .abundance projects, text analysis report, cleaned formula-safe CSV and original CSV exports. Maximum 10,000 rows, 30 variables, 100,000 cells, 1 million source characters, 2 MiB source bytes, 30 analysis definitions and 8 MiB compact state. No SAV, spreadsheet formulas or executable expressions.",
    "steps": [
      {
        "title": "Start with a safe practice copy",
        "text": "Save current work first. Download the fictional Sample practice project and raw CSV from Help. Open the project deliberately, or use Import CSV for the source. Import replaces the dataset and definitions; downloading practice files never changes your current work.",
        "target": "Import CSV"
      },
      {
        "title": "Define types and missing values",
        "text": "Choose before in Variable, set Variable type to Numeric, and set Missing codes to [\"\",\"NA\"]. Identifiers such as 001 stay categorical. Exact recodes accepts JSON pairs such as [[\"yes\",\"Yes\"]]. The original UTF-8 source remains unchanged.",
        "target": "Import CSV"
      },
      {
        "title": "Save an explicit analysis",
        "text": "Choose Paired t-test with before as X and after as Y. Select Add analysis, then Run analyses. The practice project has six complete before/after pairs; rows with either value missing are excluded together. Review the sample size, difference, df, p-value, interval and assumptions.",
        "target": "Run analyses"
      },
      {
        "title": "Save, undo and reopen",
        "text": "Save project keeps source text, variable definitions, filters, analyses and an audit of edits. Change the analysis title, Undo, then Redo. Save as keeps a separate project copy. Invalid drafts must be corrected or deliberately discarded before saving.",
        "target": "Save project"
      },
      {
        "title": "Export a reviewable result",
        "text": "Export analysis report includes definitions, results, errors and assumptions. Export cleaned CSV contains filtered/re-coded typed data with source row numbers. Categorical formula-like strings are neutralized for spreadsheets; Export original CSV preserves the source exactly.",
        "target": "Export analysis report"
      },
      {
        "title": "Check the saved work",
        "text": "Open your saved project and rerun analyses. No test is selected automatically. A sparse chi-square or constant variable produces an error rather than a pretend result. Compare the report and source row counts before using any analysis.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Every variable starts categorical. Numeric cells use explicit decimal syntax; unsafe plain integers, nonfinite values, underflow and magnitudes over 1e100 are invalid and counted separately from missing values. Missing-code matching and recoding are exact, including whitespace.",
      "Descriptives use sample SD (n−1) and type-7 linear quantiles. Welch/paired t and Pearson tests are two-sided with 95% intervals; Pearson uses an approximate Fisher-z interval and requires at least four complete pairs. Chi-square has no continuity correction and refuses any expected count below 5. Its Cramér’s V has no implemented confidence interval.",
      "Zero-variance t-tests, constant or numerically rank-deficient correlation and unsupported tail ranges fail explicitly. A null p with finite logP means a tail below floating-point representability, not zero probability. No automatic test selection, multiple-testing adjustment, imputation, causal or clinical interpretation is supplied.",
      "Analysis runs in a terminable offline worker with a five-second limit. A new edit/import/document state cancels old results. Audit is capped at 500 edits and project bytes; original source is unchanged. Native Windows dialogs, installed offline launch, accessibility and large-project responsiveness are unverified release gates."
    ]
  },
  "prompt": {
    "formats": "Plain UTF-8 .txt import and selected-script export; portable .abundance rundown with all scripts/settings/bookmarks/operator notes; readable rundown text export with speaker cues and estimated durations. No PDF, rich-text, speech tracking, audio or recording. Maximum 50 scripts, 100,000 aggregate script/notes UTF-16 units, 100 bookmarks per script, 1 MiB state/import bytes.",
    "steps": [
      {
        "title": "Open an original practice copy",
        "text": "Save your current work before opening the separate fictional Prompt practice project from Help. Downloading does not replace your document. Import script text appends a new UTF-8 script; Add script starts a blank one.",
        "target": "Import script text"
      },
      {
        "title": "Edit the rundown",
        "text": "Select a script, edit Script text and the operator-only speaker cue/notes. Move script earlier/later changes the rundown. Any cue the talent should read must be written inside Script text, such as [PAUSE]. Notes never enter the talent snapshot.",
        "target": "Script text"
      },
      {
        "title": "Rehearse with the clock",
        "text": "Set reading speed and countdown, then Start countdown. Pause and save position stores the current logical text anchor. Resume continues; Reverse direction changes travel. Faster/Slower or the wheel over Talent preview adjusts throttle. Long background gaps pause rather than jump.",
        "target": "Start countdown"
      },
      {
        "title": "Save an editable project",
        "text": "Save project retains scripts, settings, notes, bookmarks and the last saved read position. Use Pause and save position before saving a live rehearsal location. Undo/Redo restores committed script edits. Estimated time is approximate and excludes pauses.",
        "target": "Save project"
      },
      {
        "title": "Review the separate output",
        "text": "List talent displays, select a screen and Open talent display. Mirroring is horizontal and applies only to reading text. Close talent display when finished. Native two-monitor full-screen, unplug/replug and smoothness remain unverified; rehearse safely before relying on them. Export rundown text includes operator notes, so review the file before sharing.",
        "target": "Export rundown text"
      },
      {
        "title": "Reopen and find a cue",
        "text": "Open the saved project. Use Go to bookmark or Next paragraph to find a logical cue. Changing font size/width preserves the text anchor while reflowing. The app has no microphone, camera, voice tracking, remote control or network pairing.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Text anchors count UTF-16 code units. Edits rebase bookmarks by unchanged prefix/suffix; anchors inside replaced text collapse to the start of the replacement. Review bookmarks after major rewrites. Editing the text area normalizes line endings to LF; untouched imported text exports exactly.",
      "Runtime position is transient until Pause and save position or another committed edit. Countdown, throttle and direction are rehearsal controls and reset on document replacement. Operator hiding or gaps longer than one second pause; the app never skips a large unseen distance to catch up.",
      "Talent receives only the selected script and bounded visual settings. Speaker labels and notes are operator-only. Rundown text export intentionally includes notes, while selected-script export does not. Closing the operator, loading a new project, renderer loss or monitor removal closes native talent output.",
      "The separate window is a private engineering implementation, not verified Windows dual-monitor software. Actual full-screen, mixed DPI, monitor unplug/replug, smooth scrolling, screen-reader use and clean-machine offline behavior still need native acceptance."
    ]
  },
  "scan": {
    "formats": "PNG/JPEG static images and unencrypted PDF raster import at a 150-DPI output scale; printed English local OCR; schema-2 .abundance plus companion .assets folder; searchable image-backed PDF and UTF-8 text export. 20 pages, 6 MP/page, 16 MiB original sources. No scanner drivers, handwriting promise, automatic deskew, PDF/A, PDF structure preservation or non-English model.",
    "steps": [
      {
        "title": "Start with original practice pages",
        "text": "Save your current work. In Help, save the original clean.png or raster-input.pdf practice source. Practice source downloads never replace your current project. Choose New for a separate practice session.",
        "target": "New"
      },
      {
        "title": "Import selected pages",
        "text": "Import scan images / PDF reads explicitly selected PNG/JPEG/PDF files. PDF pages to import accepts all or ranges such as 1,3-5. The original files remain unchanged.",
        "target": "Import scan images / PDF"
      },
      {
        "title": "Prepare and recognize",
        "text": "Set crop, rotation and contrast, then Prepare page image to inspect the pixels. Run OCR (replaces page words) runs the bundled English model locally. Select word regions or Word to review; correct text and reading order. Add a missed word with an explicit image rectangle.",
        "target": "Run OCR (replaces page words)"
      },
      {
        "title": "Keep the editable review",
        "text": "Save project stores original and prepared images in a companion .assets folder, plus edits and word review metadata. Keep the .abundance file and its entire .assets folder together. Undo/Redo restores edits.",
        "target": "Save project"
      },
      {
        "title": "Export useful copies",
        "text": "Export searchable PDF overlays invisible coordinate-aligned text on each prepared image. Export recognized text creates UTF-8 text in your reviewed word order. Review unreviewed/low-confidence counts before sharing.",
        "target": "Export searchable PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project with its companion assets folder. Search the exported PDF in an independent reader and compare it with the image. Word confidence does not guarantee correctness.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Changing image transforms invalidates the page’s OCR so stale words cannot enter an export. Run OCR again after preparing the image; it replaces that page’s reviewed words. Undo can restore the earlier preparation and review.",
      "Crop coordinates refer to the original oriented image before quarter-turn rotation. Word rectangles refer to the prepared image. Correct rotation manually before OCR. Searchable PDF uses WinAnsi Helvetica and rejects unsupported characters; UTF-8 text export retains them.",
      "The included clean/noisy/rotated files are small original synthetic fixtures, not a guarantee of accuracy on real scans. Native Windows dialogs, installed offline startup, screen-reader behavior and printed output remain release gates. PDF forms/scripts, encryption, excessive pages or pixels are refused."
    ]
  },
  "parcel": {
    "formats": "Portable .abundance project; strict ordinary ZIP store/deflate import; stored ZIP export; individual file-copy Save. 512 entries, 4 MiB per entry, 8 MiB decoded total, 16 MiB compressed input, 256 KiB editable UTF-8 text. ZIP64, extra fields, descriptors, encryption, RAR/7z, links and split archives are refused.",
    "steps": [
      {
        "title": "Keep your work safe",
        "text": "Save any current work first. Use Help to save and open the separate observatory practice project, or choose New for an empty archive.",
        "target": "New"
      },
      {
        "title": "Import or create entries",
        "text": "Import ZIP document validates every entry and CRC before replacing the document. Add selected file copies one explicitly chosen file. New text and folder drafts need their Add buttons.",
        "target": "Import ZIP document"
      },
      {
        "title": "Find a file",
        "text": "Search archive searches all names plus supported UTF-8 entries up to 256 KiB. Search entries shows the exact content-search coverage.",
        "target": "Search entries"
      },
      {
        "title": "Edit a document",
        "text": "Select notes.txt and change Entry UTF-8 text. Archive-relative name edits affect only the ZIP document. Undo and Redo restore edits. Save project preserves all entry bytes.",
        "target": "Save project"
      },
      {
        "title": "Write a separate copy",
        "text": "Export new ZIP writes a standard stored ZIP through an explicit Save dialog. Save selected file copy writes only that selected file through its own Save dialog; there is no Extract all.",
        "target": "Export new ZIP"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project to continue editing, or Import ZIP document to inspect the new ZIP. Check names, text coverage and byte counts before sharing.",
        "target": "Open"
      }
    ],
    "trouble": [
      "An unsupported ZIP is refused completely rather than repacked with missing entries. Use another archive utility to create a compatible ordinary ZIP if needed. Parcel does not bypass password protection.",
      "Export normalizes timestamps to 1980-01-01, keeps regular-file/folder kind, and discards comments and permissions. Byte contents and archive-relative names are preserved. Stored output can be larger than a compressed input.",
      "Imported source files are immutable. Archive entry names never become filesystem destinations. Select a fresh output name in the native Save dialog. This is not a malware scanner; do not launch untrusted entries. Native Windows dialogs, installed offline startup and screen readers remain unverified."
    ]
  },
  "trace": {
    "formats": "Still PNG input only, up to 2 MiB, 4096 pixels per side and 8 million pixels. 20 datasets / 5,000 total points. Linear/log Cartesian calibration with tilted independent basis; manual digitization only. Numeric CSV, provenance JSON, annotated SVG and PNG (4 million pixels). Original source bytes are embedded unchanged.",
    "steps": [
      {
        "title": "Open the original practice graph",
        "text": "Download the practice project and PNG through Help. Save current work, then explicitly Open the practice project. Import graph PNG replaces a document only after bounded decoding succeeds.",
        "target": "Import graph PNG"
      },
      {
        "title": "Review independent X/Y calibration",
        "text": "Open Image view and calibration. Check two values and source-pixel endpoints for each axis. This practice graph has tilted linear X and logarithmic Y. Crop/rotation transform the view without changing source coordinates.",
        "target": "Import graph PNG"
      },
      {
        "title": "Mark and refine a dataset",
        "text": "Select Add point and click the graph, or enter source-pixel coordinates. Select a table row to edit numeric X/Y or pixel positions. Focus the graph and use arrow keys; Shift nudges ten pixels. The selected point has a magnified view.",
        "target": "Add pixel point"
      },
      {
        "title": "Save editable work",
        "text": "Save a portable project with unchanged source PNG, calibration, named datasets and points. Undo/Redo restores edits, including calibration changes. Save as makes an alternative project.",
        "target": "Save project"
      },
      {
        "title": "Export numbers and evidence",
        "text": "Export numeric CSV plus provenance JSON. CSV contains full floating-point values and original source pixels. Export annotated SVG or bounded PNG to document the selected graph view.",
        "target": "Export numeric CSV"
      },
      {
        "title": "Reopen and independently replot",
        "text": "Open the saved project and inspect the selected table. Replot the CSV in a separate graph tool and compare source coordinates against the original image. Do not treat numerical precision as experimental accuracy.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Collinear calibration axes, equal axis values and nonpositive log endpoints are rejected. Correct invalid visible drafts before saving.",
      "Cropping or quarter-turn rotation changes display only. Hidden calibration endpoints still refer to original pixels; reset calibration is a separate explicit action.",
      "No automatic curve tracing, JPEG/PDF input, perspective correction, OCR or original-data accuracy claim.",
      "Native pointer/HiDPI behavior, decode workers, dialogs and installed offline Windows use remain unverified."
    ]
  },
  "plot": {
    "formats": "UTF-8 CSV, unique headers, explicit numeric mappings and missing codes; 20,000 aggregate rows, 2 MiB raw CSV, 20 series, 4 panels. Reversible overrides/exclusions; asymmetric X/Y errors; linear/log display; unweighted original-unit OLS. SVG, PDF and bounded 16-million-pixel PNG, raw CSV, numeric review CSV and residual report.",
    "steps": [
      {
        "title": "Open the original data kit",
        "text": "Download the practice project and original CSV in Help. Save current work before explicitly opening the practice project, or Import CSV series to add raw UTF-8 observations.",
        "target": "Import CSV series"
      },
      {
        "title": "Map typed columns and uncertainty",
        "text": "Select the X/Y columns. Map positive uncertainty distances on each side; use the same column for symmetric errors. Declare SD, SE, CI or user-entered meaning explicitly. Missing codes stay distinct from zero.",
        "target": "Import CSV series"
      },
      {
        "title": "Review exclusions and figure panels",
        "text": "Select a data row, edit reversible overrides or exclude it with a reason. Choose panel, marker and linear/log axes. The practice figure compares original and log display; log-invalid error extents are excluded visibly.",
        "target": "Exclude selected row"
      },
      {
        "title": "Inspect a narrow fit and save",
        "text": "Choose the unweighted OLS straight-line model. Review slope, intercept, sample size and residuals. Error bars do not become weights, and log display does not transform the fitted model. Save the editable project; Undo/Redo restores source mappings and overrides.",
        "target": "Save project"
      },
      {
        "title": "Export the composed figure",
        "text": "Export SVG/PDF or 150/300/600-DPI PNG at the declared millimetre size, then export the included/excluded CSV and fit report. PDF uses a limited standard font; choose SVG/PNG for unsupported scripts.",
        "target": "Export figure PDF"
      },
      {
        "title": "Reopen and verify independently",
        "text": "Open the project, compare the untouched original CSV with your overrides, and inspect the output at its intended print size. Recalculate fit results in an independent tool; no fit establishes causality or significance.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Rows with missing/nonnumeric values, unsafe integer strings, negative uncertainty or invalid log extents are visibly excluded, never silently zero-filled.",
      "A line fit needs two distinct included X values. No weighting, nonlinear fits, confidence bands or errors-in-variables model is provided.",
      "Raw source CSV remains exact; Export original CSV reproduces it. Numeric review CSV is formula-safe for text fields.",
      "Four legend entries per panel; enlarge crowded figures or split series across panels. Fonts depend on the offline system except the PDF standard font.",
      "Native PNG workers, print/readability, Windows startup, dialogs and accessibility remain unverified gates."
    ]
  },
  "type": {
    "formats": "Native .abundance save/reopen; original static OpenType CFF .otf and outline specimen PDF export. 256 glyphs, 2,000 commands per glyph, 40,000 total commands; 500 proof characters. Integer coordinates, bounded metrics, unique Unicode scalar mappings, closed M/L/Q/C/Z contours. Family/style use plain Latin names. No third-party font import, installation, tracing, kerning, variable/color fonts or complex shaping.",
    "steps": [
      {
        "title": "Start an original font",
        "text": "Save your current work, then use New or save the separate practice project from Help and explicitly Open it. The practice font contains original A, O and g outlines plus required space and missing-glyph shapes.",
        "target": "New"
      },
      {
        "title": "Map a new glyph",
        "text": "Set New Unicode decimal to an unused scalar value, such as 66 for B, and choose Add mapped glyph. Select glyphs with the Glyph list. Type does not import or modify existing fonts.",
        "target": "Add mapped glyph"
      },
      {
        "title": "Edit real contours",
        "text": "Select a contour command, edit X/Y coordinates, or drag a node. Closed contours use M, L, Q, C and Z commands. Add a rectangle and reverse its line-only contour to make a counter. All contours must close.",
        "target": "Closed contours M L Q C Z"
      },
      {
        "title": "Set metrics and proof",
        "text": "Set advance width and left side bearing, then edit Proof text. The proof uses your outlines and substitutes .notdef for unmapped characters. Keep glyphs inside ascender/descender metrics before exporting. Save project stores exact editable contours; Undo/Redo reverses edits.",
        "target": "Save project"
      },
      {
        "title": "Export a real font and specimen",
        "text": "Export OpenType makes a static CFF-based OTF copy. Export specimen PDF prints original outlines with embedded report labels. Font generation never installs the font. Review both files in an independent font reader before using them elsewhere.",
        "target": "Export OpenType"
      },
      {
        "title": "Reopen and check",
        "text": "Open the saved .abundance project, inspect mappings, contours, bearings and proof text, then export again. Preserve the native project as your editable source. No kerning, variable fonts or complex-script shaping is claimed.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Correct marked invalid values before saving or exporting. Invalid contour text remains visible rather than reverting silently.",
      "Every contour needs M, at least two segments and Z. Reverse the winding of an interior line-only contour to create a hole. Curved contours can be reversed manually in the command editor.",
      "Advance width and left bearing are separate. Control-point bounds are conservative; side-bearing display is based on the control hull. Adjust ascender/descender if a glyph exceeds vertical metrics.",
      "Use the explicit missing-glyph box and empty space; unmapped characters in proof are deliberately visible. The practice font is a small starter, not a complete alphabet.",
      "FontTools checksums/tables and FreeType rendering are host-tested. Native Windows font consumers, dialogs, HiDPI and accessibility remain unverified; no system installation is performed."
    ]
  },
  "score": {
    "formats": "Native .abundance projects; MusicXML 4.0 export only; full-score PDF and current-page self-contained SVG. Maximum 128 measures, two staves, one voice per staff, 4,000 events, six pitches per chord. Whole through sixteenth notes with one dot; octave 2–6 and single flat/natural/sharp. Fixed key/time/clefs; pickup duration in exact 1/32 units. Dense measures and long lyric/text overflow are refused. No tuplets, percussion, multiple voices per staff, repeats, arbitrary MusicXML import or professional engraving parity. Display text uses printable ASCII in this bounded version.",
    "steps": [
      {
        "title": "Begin with a short piece",
        "text": "Save current work, then use New or download the original Garden steps practice project in Help and explicitly Open it. Choose solo or piano, time, key, clef and tempo. Removing a nonempty second staff is refused.",
        "target": "New"
      },
      {
        "title": "Enter staff notation",
        "text": "Select a measure and staff. Choose Entry duration and dot, then click the pitch on the small note-entry staff, press A–G while it is focused, or use Add C note. Shift with a letter uses octave five. Add rest makes a timed rest.",
        "target": "Add C note"
      },
      {
        "title": "Spell chords and finish bars",
        "text": "Select an event button and edit pitches such as C#4,E4,G4. An empty pitch field creates a rest. Add a dot or a tie to the next identical spelled chord. Fill remaining with rests completes supported durations. Every bar uses exact rational timing.",
        "target": "Fill remaining with rests"
      },
      {
        "title": "Shape the score and save",
        "text": "Copy or move measures, add short lyrics/dynamics/measure text, and change measures per system, systems per page or staff gap. Preview every page and resolve overflow. Save project preserves all editing choices; Undo/Redo reverses committed changes.",
        "target": "Save project"
      },
      {
        "title": "Export notation and print copies",
        "text": "Export MusicXML writes editable MusicXML 4.0. Export PDF prints every page; Export current page SVG makes a self-contained path-based copy of the selected page. Incomplete bars, dangling ties and detected layout overflow must be fixed first.",
        "target": "Export MusicXML"
      },
      {
        "title": "Reopen and independently review",
        "text": "Open the native project and check note spelling, ties and page layout. Import the MusicXML into your intended notation program before relying on interchange. An independent Verovio import/render is tested; your native notation program remains a separate check. Play local tones is a quiet bounded pitch/timing check, not a sampled piano.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Underfilled bars remain editable but cannot export. Fill remaining with rests supports whole through sixteenth values; a 1/32 remainder needs an edited rhythm.",
      "Changing meter never silently truncates notes. Delete or shorten events before choosing a shorter bar. Key changes alter signatures, not stored pitch spellings.",
      "A tie requires the entire next chord to match, including spelling; a different enharmonic spelling is not accepted. Playback sustains ties rather than reattacking them.",
      "Reduce maximum measures per system for dense music or longer syllables. One extremely dense measure must be simplified or divided; export refuses clipped output.",
      "Sound preview is limited to five minutes and 800 events. Stop sound or any edit immediately stops it. Native audio listening, Windows dialogs, physical printing and native notation-consumer import remain unverified."
    ]
  },
  "fold": {
    "formats": "Plain PDF import (8 MiB, 256 pages). Portable .abundance projects retain the exact source. Genuine imposed PDF output (24 MiB, 254 sheet sides) plus JSON print audit. Two-up folios only; A4, Letter or A3 landscape. Left/right binding, short/long edge duplex, 4–256-page signatures or a custom plan; explicit blanks, crop/trim clipping, fit or actual size, gutter and bounded inward creep.",
    "steps": [
      {
        "title": "Start with a saved copy",
        "text": "Save any current work first. New starts an empty imposition; Help provides an original eight-page calibration project and its PDF source for explicit Open/Import.",
        "target": "New"
      },
      {
        "title": "Import and preflight",
        "text": "Import PDF preserves exact source bytes. Check count, MediaBox, CropBox, TrimBox and rotation. Interactive, encrypted, annotated and signed inputs are refused. Create calibration source makes numbered orientation pages.",
        "target": "Import PDF"
      },
      {
        "title": "Plan the folds",
        "text": "Choose Sheet paper, Maximum signature pages, Binding, Duplex flip edge and Source box. Optional custom plans use comma-separated multiples of four. Inspect every Preview sheet side and intentional blank; adjust gutter, margins and creep in points.",
        "target": "Sheet paper"
      },
      {
        "title": "Save the editable imposition",
        "text": "Save project preserves source PDF and all settings. Undo/Redo reverses committed edits. Invalid visible settings must be corrected before saving; unchanged focused controls do not alter the plan.",
        "target": "Save project"
      },
      {
        "title": "Export and calibrate",
        "text": "Export imposed PDF writes real vector-preserving two-up sheets. Export print audit records settings and mappings. Print at 100% landscape with the selected duplex edge, disabling printer booklet/N-up. Physically fold a calibration copy before production.",
        "target": "Export imposed PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the .abundance project and confirm its preflight and sheet mapping. Output order is front/back pairs, outermost sheet first per signature. Printer feed, physical folds and press suitability require real-world checking.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Actual-size pages that do not fit refuse export; choose larger paper or Fit. Fit may enlarge pages.",
      "Source content is clipped visually, not securely redacted: hidden content/resources can remain recoverable in the imposed PDF. Do not use imposition to remove confidential content.",
      "The bounded PDF worker has 20 seconds, 8 MiB per decoded stream, 64 MiB cumulative decode growth and 100,000 parsed objects. Unsupported or unusually complex PDFs may be refused.",
      "Native Windows dialogs/offline launch, screen readers/HiDPI and physical print/fold validation remain unverified. There is no PDF/X, color or press certification, or automatic manual-duplex feed claim."
    ]
  },
  "board": {
    "formats": "Portable .abundance projects; local non-interlaced 8-bit RGB/RGBA still PNG import; real PNG sequence ZIP with exact rational-fps timing manifest and formula-safe CSV; paginated PDF shot pack. 100 shots, ten minutes, 50,000 drawing points; PNG maximum 2 MiB/2 MP each, 8 MiB source and 48 MiB decoded aggregate. No JPEG, video, audio, HTML playback or cloud media.",
    "steps": [
      {
        "title": "Begin a sequence safely",
        "text": "Save current work, then New or explicitly Open the original garden-gate practice project from Help. Practice never replaces unsaved work automatically.",
        "target": "New"
      },
      {
        "title": "Create real shots",
        "text": "Add shot makes a stable-ID shot. Draw with the primary pointer, use Add horizon line, or Import panel PNG. A PNG replaces the selected panel; Undo restores its prior drawing.",
        "target": "Add shot"
      },
      {
        "title": "Set camera and timing",
        "text": "Edit Scene, Shot name, Shot size, Camera direction, Action, Dialogue and Production notes. Duration frames is a positive integer. Choose 24, 25 or 30 fps; changing fps keeps frame counts and changes elapsed time. Move or duplicate shots in the timeline.",
        "target": "Duration frames"
      },
      {
        "title": "Save the editable project",
        "text": "Save project keeps drawings, exact PNG copies, IDs, notes and timing. Undo/Redo reverses edits. Correct invalid drafts first. Clear panel removes an imported panel before drawing, with Undo available.",
        "target": "Save project"
      },
      {
        "title": "Review and export",
        "text": "Play animatic is a real elapsed-time preview. Pause, restart or seek an exact frame. Export image sequence gives numbered PNG panels, timing.json and shot CSV. Export shot PDF makes a readable paginated shot pack.",
        "target": "Export image sequence"
      },
      {
        "title": "Reopen and verify timing",
        "text": "Open the project and check the shot order and notes. In the exported package each PNG is held for its manifest frame count, using start-inclusive/end-exclusive intervals. It is a silent sequence, not a video file.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Imported images are letterboxed in 16:9 preview/PDF; exported PNGs retain original dimensions and aspect ratio. timing.json describes this explicitly.",
      "Only whole-frame durations are accepted. At the end, playback stops on the final panel. Editing stops playback.",
      "PNG palette/grayscale/16-bit/interlaced/APNG inputs are refused; export a plain RGB/RGBA still PNG copy first. PDF export refuses text not covered by its bundled font; CSV/project preserve the original text.",
      "Export is bounded to 24 MiB and 20 seconds of worker time, with at most 100 MiB raw sequence PNG data. Native playback cadence, dialogs/offline launch, pointer/HiDPI, screen readers and physical PDF readability remain unverified."
    ]
  },
  "cross": {
    "formats": "Editable .abundance; UTF-8 TXT/TSV scored dictionary import; blank/solution PDF; completed PUZ 1.3 export. 3–21 cells per side, 50,000 words/4 MiB dictionary source, five-second/200,000-node worker search. Grid letters A–Z only; Unicode clues stay in projects. PDF supports supported Latin/Greek/Cyrillic glyphs; PUZ Latin-1 only. No rebus, barred grids, automatic clues, online databases or professional-autofill claim.",
    "steps": [
      {
        "title": "Begin an original puzzle",
        "text": "Save current work first. Help offers a separate original Garden corner practice project; download and explicitly Open it. New begins an empty 5×5 grid. Resize using the clearly labeled replacement control; Undo reverses the replacement.",
        "target": "New"
      },
      {
        "title": "Build and lock the grid",
        "text": "Select a cell, choose symmetry and Toggle block. Blocks clear clues because slots changed. Type one A–Z Selected letter. Lock selected cell protects theme letters or blocks. Arrow keys move around the grid; all edits also have labeled controls.",
        "target": "Toggle block"
      },
      {
        "title": "Choose local fill",
        "text": "Import your own UTF-8 word list: one word per line, optionally a tab and integer score. Review rejected rows/duplicates before Use imported dictionary. Original source text is retained exactly. The tiny bundled list is a teaching fixture, not production autofill data. Choose Across/Down and a candidate button. Amber letters are a preview; Apply letter preview commits. Autofill preview uses a bounded local worker; solution, proof of impossibility and budget exhaustion are different outcomes. Cancel autofill terminates the worker; edits invalidate it.",
        "target": "Import word list"
      },
      {
        "title": "Save the editable project",
        "text": "Save project retains grid, locks, clues, dictionary scores and original import text. Open the saved copy and independently review the exported PUZ in your intended crossword app. PUZ 1.3 is Latin-1; Unicode beyond its limits is refused, never corrupted.",
        "target": "Save project"
      },
      {
        "title": "Write clues and print",
        "text": "Choose each numbered slot and write Selected clue. Review Construction checks for missing clues, short slots, repeated answers and connectivity. Export blank PDF hides answers; solution PDF includes them. Incomplete PDFs are explicitly DRAFT. Completed PUZ requires every letter and clue.",
        "target": "Export blank PDF"
      },
      {
        "title": "Reopen and verify",
        "text": "Use Open to reopen the saved .abundance project and verify letters, locks, dictionary scores and clues. Exported PUZ is a completed interchange result, not the full editable project.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Autofill preserves every existing letter. Clear unlocked letters if you want them reconsidered; locked cells remain.",
      "Impossible means the finite search exhausted this dictionary with these constraints. Budget exhausted does not mean impossible.",
      "Block edits clear slot clues deliberately; Undo recovers them.",
      "List normalization uses uppercase A–Z, removes Latin diacritics, spaces, apostrophes and hyphens. Raw spelling/source stays separate. Invalid rows are counted; duplicate normalized words keep highest score.",
      "The bundled lexicon is original and small. Import only word lists you have permission to use.",
      "Native Windows, HiDPI/screen reader, target crossword-app import and physical printing remain unverified."
    ]
  },
  "match": {
    "formats": "Editable .abundance projects; UTF-8 roster CSV with exact header name,alias; formula-safe results CSV; event/season PDF and match slips PDF. Maximum 500 club participants, 64 per event, 50 events, 10,000 results, 1 MiB roster source. No Swiss, double elimination, federation submission, ratings, public signup, payments or wagering.",
    "steps": [
      {
        "title": "Set up a club roster",
        "text": "Save current work before New or explicitly opening the downloadable Garden club practice. Add participant creates a stable ID; duplicate names remain distinct. Import roster CSV previews additions with fresh IDs. Name/alias fields require Add and are not silently saved.",
        "target": "Add participant"
      },
      {
        "title": "Create and seed an event",
        "text": "Create event takes up to the first 64 roster members. Enter/remove people for this event and move seeds up. Select single elimination or round robin; choose roster-order seeding or an explicitly recorded reproducible shuffle. Set points before freezing.",
        "target": "Create event"
      },
      {
        "title": "Review and freeze",
        "text": "Inspect every round, bye and participant ID in Draw preview. Freeze reviewed draw locks roster and scoring. Rounds are sequential. Click ready match cards to assign a table/lane; duplicate assignments within a round are reported. Click a ready real match, enter scores and choose a winner for tied elimination games or forfeits. Preview result change lists recorded descendants that will be cleared; Confirm applies it. A withdrawal only marks a person: explicitly record affected forfeits, never invent a champion.",
        "target": "Freeze reviewed draw"
      },
      {
        "title": "Save the editable project",
        "text": "Save project keeps editable club/event history. Export event PDF gives readable round-by-round bracket tables and standings; match slips PDF prints recording forms. Export CSV is formula-safe and includes stable IDs. Reopen your saved project before event day.",
        "target": "Save project"
      },
      {
        "title": "Review standings and history",
        "text": "Standings use points, score difference, then scores for; seed order only orders equal display rows. History derives from recorded real matches by stable ID. Byes and abandoned round-robin games are excluded; forfeits count W/L. Archive only when all real games are resolved.",
        "target": "Export results CSV"
      },
      {
        "title": "Reopen and verify",
        "text": "Use Open to reopen the saved .abundance project and verify roster IDs, frozen draws, confirmed results and correction history. Unapplied result drafts need Preview/Confirm before project Save.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Equal names are intentionally allowed. Use stable IDs and aliases when confirming results.",
      "Frozen rosters and scoring cannot change; make a new event for a new scheme. Undo can reverse an accidental freeze.",
      "Single-elimination equal scores need an explicit deciding winner. Round-robin equal scores are a tie.",
      "Correcting an earlier game clears all recorded dependent games after preview. Finals never resolve through an unresolved predecessor.",
      "Withdrawal does not automatically change results. Enter an explicit forfeit with a winner; forfeits count toward history.",
      "Native Windows dialogs, screen reader/HiDPI and physical printing remain unverified."
    ]
  },
  "day": {
    "formats": "RFC5545 ICS with bounded ICAL.js recurrence and explicit timezones. 1900–2199, 12 calendars, 5,000 VEVENTs, 8 MiB including source copies, 50,000 occurrences/view. UTC, floating, Chicago, New York, Berlin, Lord Howe; others need supplied VTIMEZONE.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work, then explicitly Open the original garden practice project from Help. Its October 2026 appointments are fictional.",
        "target": "New"
      },
      {
        "title": "Review an ICS import",
        "text": "Import ICS checks supported event and timezone semantics before acceptance. Unsupported alarms, attendees, unresolved TZIDs or attachments block import rather than disappearing.",
        "target": "Import ICS"
      },
      {
        "title": "Create an explicit event",
        "text": "New event opens a draft. Choose timed versus all-day, a timezone or floating, start and exclusive end. Apply event commits it; unapplied drafts are not included in Save or Export. Choose month, week or agenda and a view date. Update view runs bounded local recurrence expansion. Search events and overlap warnings help inspect the result. Recurring rows offer distinct series/occurrence edits.",
        "target": "New event"
      },
      {
        "title": "Save editable work",
        "text": "Use Apply event to commit event forms first, then Save project to preserve committed calendars, exact imported sources and editable event settings. Unapplied drafts are excluded and retained; correct invalid fields before saving.",
        "target": "Save project"
      },
      {
        "title": "Export a portable calendar",
        "text": "Export ICS preserves event identities and supported recurrence/timezone semantics in a new file. Save project separately also keeps original imports and named calendars.",
        "target": "Export ICS"
      },
      {
        "title": "Print and reopen",
        "text": "Use Open to reopen the saved .abundance project and verify the editable state. Export print HTML writes a script-free agenda for the selected view/search. Open locally and Print, then reopen the saved .abundance project to verify editable data.",
        "target": "Open"
      }
    ],
    "trouble": [
      "All-day end dates are exclusive. Floating times have no timezone. Future timezone laws may change beyond the bundled tzdata snapshot.",
      "The worker can be cancelled; 8-second/150,000-step limits stop complex recurrence scans without losing source.",
      "No OS/background/sleep-wake reminders, invitations or sync. Native Windows, assistive technology, independent desktop-calendar interchange and physical print acceptance remain open."
    ]
  },
  "link": {
    "formats": "Original safe Markdown/wikilink dialect. 2,000 notes, 256 KiB/note, 8 MiB aggregate text including originals, 10,000 links, 200 tags. Stored ZIP export/import includes stable IDs and metadata; ordinary deflated or unrelated ZIPs are refused.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work first. Help offers an original garden notebook and a Markdown source. Open practice explicitly; nothing replaces current work automatically.",
        "target": "New"
      },
      {
        "title": "Bring in a note",
        "text": "Import Markdown opens a preflight. Accept import adds a copy with retained original text. Duplicate titles remain ambiguous until you use stable IDs.",
        "target": "Import Markdown"
      },
      {
        "title": "Find connected ideas",
        "text": "Search all notes matches titles, aliases, tags and source text. Open a result, then follow its links, heading targets and backlinks. Expand the graph and complete keyboard-accessible link list. Broken links are shown explicitly. Edit a note, preview rename or deletion, and use shell Undo to restore.",
        "target": "Search all notes"
      },
      {
        "title": "Save editable work",
        "text": "Save project preserves all note IDs, bodies, aliases, tags and source copies. Undo/Redo reverses committed changes. Correct invalid drafts before saving and retain the complete vault backup for interchange.",
        "target": "Save project"
      },
      {
        "title": "Keep a portable vault",
        "text": "Export vault ZIP writes every Markdown note using stable-ID filenames plus a metadata manifest. Save project separately keeps editable history state.",
        "target": "Export vault ZIP"
      },
      {
        "title": "Reopen and verify",
        "text": "Use Open to reopen the saved .abundance project and verify the editable state. Open vault ZIP, inspect the note-count preview and accept only if you want to replace this notebook. Verify links and tags; Undo can reverse acceptance.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Raw HTML, external images/links and plugin syntax stay literal; nothing is fetched or executed.",
      "Duplicate title or alias targets are ambiguous. Use Insert stable link to choose the exact note ID.",
      "Archive export is standard Markdown plus metadata, but independent desktop-wiki compatibility, native accessibility and installed-offline acceptance remain open."
    ]
  },
  "draft": {
    "formats": "Original strict sketch JSON and portable project. Real DXF LINE/CIRCLE/ARC/TEXT with mm/inch units; 1:1 SVG/PDF. 80 points, 100 entities, 200 constraints, 12 layers. Counterclockwise arcs, no tangency or DWG import.",
    "steps": [
      {
        "title": "Open an original practice sketch",
        "text": "Download the original project and raw sketch JSON in Help. Save your current work before explicitly opening the practice project, or import the JSON copy. The fixture is a closed plate with a positioned circular hole.",
        "target": "Import sketch JSON"
      },
      {
        "title": "Change a driving dimension",
        "text": "In Persistent constraints, edit width, height or hole offsets. Values use the selected mm/inch display unit. The accepted geometry stays unchanged until a solution is approved.",
        "target": "Solve constraints"
      },
      {
        "title": "Solve and inspect the candidate",
        "text": "Solve in a cancellable local worker. Review candidate geometry, residuals and rank-based degrees of freedom. Dependent constraints are distinct from contradictory constraints; a failed solve preserves the previous geometry. Apply the candidate only after reviewing its branch. Undo/Redo restores prior geometry and constraints. Save the editable project to preserve dimensions, layers, notes and immutable imported source.",
        "target": "Solve constraints"
      },
      {
        "title": "Save the editable project",
        "text": "Apply solution explicitly after reviewing a successful solve. Save project preserves accepted geometry and editable constraints; unapplied Add constraint forms or pending candidate solutions are not silently committed. Correct invalid fields and retain a separate original copy.",
        "target": "Save project"
      },
      {
        "title": "Export usable technical drawings",
        "text": "Export actual DXF lines/circles/arcs or to-scale SVG/PDF. PDF/SVG include a 10 mm calibration line. Layer visibility and construction styles are visible in the drawing; hidden layers remain in DXF.",
        "target": "Export DXF"
      },
      {
        "title": "Reopen and verify",
        "text": "Use Open to reopen the saved .abundance project and verify editable state. Reopen the project and change another dimension. Read DXF in an independent CAD tool, and print PDF at 100% without fit-to-page. The application is a bounded educational 2D constraint editor, not DWG, 3D, CAM or manufacturing certification.",
        "target": "Open"
      }
    ],
    "trouble": [
      "A failed solve never moves accepted geometry. Inspect and remove conflicting constraints, then solve again.",
      "Rank is local with a relative 1e-8 threshold. Reported tolerance scales with coordinate magnitude; convergence does not imply a globally unique branch.",
      "Explicit Add constraint forms are not saved until Add is pressed. Invalid committed-field drafts remain visible and block Save/Export.",
      "PDF standard labels are Latin-1. Use SVG for other scripts. Paper calibration and installed Windows/CAD GUI gates remain open.",
      "SVG/PDF export accepted geometry, including when dimensions are awaiting a solve. The unresolved status is printed visibly."
    ]
  },
  "circuit": {
    "formats": "Strict network JSON, portable project, schematic SVG/PDF, generated restricted linear SPICE netlist and numeric results CSV. 100 components, 100 non-ground nodes, 1000 frequency points subject to a preallocation work cap.",
    "steps": [
      {
        "title": "Open the original divider",
        "text": "Download the original practice project and raw network JSON from Help. Save current work before opening practice. JSON imports make an immutable source copy; executable SPICE decks are never imported.",
        "target": "Import network JSON"
      },
      {
        "title": "Build the electrical topology",
        "text": "Add named nodes and R/L/C or independent voltage/current sources. Every component connects an explicit positive p node and negative n node. Ground is node 0; crossings are not junctions.",
        "target": "Add node"
      },
      {
        "title": "Set values and run",
        "text": "Edit component values in SI units. DC uses source DC values; sinusoidal AC uses amplitude and phase. Choose a bounded linear-frequency sweep and run. Floating nets and contradictory ideal-source loops are refused. Choose a voltage probe node. Inspect exact real/imaginary values, magnitude/phase curves and signed p-to-n component currents. Electrical edits mark old results stale until rerun.",
        "target": "Run DC / AC analysis"
      },
      {
        "title": "Save the editable project",
        "text": "Save project preserves the editable network, analysis settings and accepted results. Unapplied forms need their explicit Add/Apply action. Correct invalid fields first; unchanged focused controls must not erase analysis or add Undo history.",
        "target": "Save project"
      },
      {
        "title": "Save and export copies",
        "text": "Save the editable network, then export schematic SVG/PDF, a generated restricted netlist or result CSV with Hz/V/A units. Original source export stays byte exact; no generated file overwrites an import.",
        "target": "Export results CSV"
      },
      {
        "title": "Reopen and verify",
        "text": "Use Open to reopen the saved .abundance project and verify editable state. Reopen the project and compare the original divider with the analytic ratio. Inspect exported topology, source polarity and values in an independent tool. This engine is linear DC/AC only, with no nonlinear/transient/PCB or safety-certified hardware claims.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Floating nodes need a voltage-reference path to ground. Current sources and DC-open capacitors alone do not provide one.",
      "Ideal voltage-source loops or redundant DC inductors may be singular. The engine refuses unstable/ill-conditioned solves rather than inventing a ground leakage.",
      "Source AC amplitudes and phases are independent of DC values. Current direction is p to n; voltage is Vp minus Vn.",
      "Old results remain visibly stale after electrical edits and cannot be exported as current. Unchanged focused controls do not erase them.",
      "No imported executable netlists, model files, transistor models, transient integration or hardware connection. Windows/offline startup and real pointer/accessibility remain open gates."
    ]
  },
  "bond": {
    "formats": "Local plain SMILES, 2D V2000 MOL and V2000 RXN; 500 total atoms, 1,000 bonds, 12 molecules, 64KiB per source. H/B/C/N/O/F/P/S/Cl/Br/I, charges±3, isotope labels and verified tetrahedral/E/Z interchange. MOL/SMILES/RXN, SVG sheet and active-structure1200×800 PNG.",
    "steps": [
      {
        "title": "Open the original practice kit",
        "text": "Download the practice project and original ethanol MOL in Help. Save your current work before explicitly opening the practice project. Import structure accepts supported MOL, SMILES and RXN without changing the source.",
        "target": "Import structure"
      },
      {
        "title": "Edit a real molecular graph",
        "text": "Use Add carbon atom or Add six-membered ring. Select atoms and change element, position, formal charge or isotope; select bonds to set endpoints, order and wedge/hash stereo. Every edit requires a fresh chemistry check. Undo restores prior graph values.",
        "target": "Add carbon atom"
      },
      {
        "title": "Check and inspect",
        "text": "Check chemistry uses the bundled local Indigo engine. Unusual valence, radicals and unsupported graphs are refused, never repaired invisibly. Inspect the publication depiction and compare charges, labels and stereochemistry. Preview clean layout retains the current drawing until Apply clean layout. Add structures and choose reactant/product roles for a drawing scheme; literal conditions are annotations, not validated chemistry. Save project retains editable graphs and exact sources.",
        "target": "Check chemistry"
      },
      {
        "title": "Save the editable project",
        "text": "Save project preserves editable molecular graphs, original source text and checked results. Apply a reviewed clean-layout preview explicitly before saving if wanted; newer graph edits require checking again. Correct invalid fields before saving.",
        "target": "Save project"
      },
      {
        "title": "Export genuine interchange and drawings",
        "text": "Export the checked active molecule as MOL/SMILES or PNG. For RXN, add and check both reactants and products. Publication SVG is a labeled multi-structure sheet with the literal conditions and reactants-to-products direction.",
        "target": "Export publication SVG"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project and compare the original MOL export. Inspect exported structures in another chemistry toolkit and publication files at their intended size. No output certifies synthesis, safety, biological effect or feasibility.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Aromatic [nH] structures such as pyrrole currently emit unsupported implicit-hydrogen data S-groups and are refused rather than losing hydrogens.",
      "Unchecked edits block chemical and publication exports; Check chemistry before exporting.",
      "Stereo wedge/hash is allowed only on single bonds. Endpoint indices are zero-based. Small-molecule supported corpus is independently checked; unfamiliar/query/radical/metal/macromolecule/CDX structures are refused.",
      "SVG sheet includes all checked structures. PNG exports only the active structure. Reaction arrows and literal conditions are drawing annotations.",
      "Native chemistry worker is terminable after15seconds, with256MiB maximum WASM linear memory; V8 heap and process overhead are separate.",
      "Windows startup, native dialogs, accessibility, publication typography and renderer/font distribution clearance remain open release gates."
    ]
  },
  "atlas": {
    "formats": "Strict Polygon/MultiPolygon GeoJSON and UTF-8 CSV.6layers,1,000 aggregate features,10,000 vertices,500edges/ring,4MiB/import,16MiB/project. Explicit WGS84, Web Mercator or WGS84 UTM30/31/32N input; WGS84 GeoJSON output. CSV/map SVG/JSON report exports.",
    "steps": [
      {
        "title": "Open the original local data kit",
        "text": "Download the practice project, district GeoJSON, mask GeoJSON and observations CSV in Help. Save current work before explicitly opening practice. For your own file, choose its actual CRS before Import GeoJSON; inspect and Accept imported layer.",
        "target": "Import GeoJSON"
      },
      {
        "title": "Preview exact identifier joins",
        "text": "Import GeoJSON first, then review any joined attributes. The practice keys preserve leading zeros. Select feature and CSV keys, then Preview join. Review unmatched features, unused CSV rows and duplicates. Duplicate CSV keys block application; missing values remain null. Apply reviewed join adds prefixed attributes.",
        "target": "Import GeoJSON"
      },
      {
        "title": "Inspect linked map and table",
        "text": "Choose Feature1 or click a polygon; the orange boundary and table selection correspond. Edit text attributes reversibly. Pick the joined numeric field and three increasing class boundaries; missing/non-numeric values use a distinct color. Safe predicates filter both map and exports. Use the original mask to Clip active layer, creating a new layer. On the district layer, Dissolve active layer unions polygons by the exact group text. Selected UTM30/31/32N must contain all coordinates. Reports use approximate UTM map areas, never Web Mercator ground areas.",
        "target": "Feature 1"
      },
      {
        "title": "Save the editable project",
        "text": "Save project preserves source copies, accepted layers, joined attributes, filtering and styling. Apply reviewed import/join/operation previews explicitly first. Undo/Redo restores accepted changes; invalid visible settings must be corrected.",
        "target": "Save project"
      },
      {
        "title": "Save and export useful outputs",
        "text": "Save project retains editable data, exact source text, joins and operation settings. Export visible GeoJSON in WGS84, formula-safe attribute CSV, map SVG with title/legend/CRS/attribution and a processing report. Undo/Redo restores earlier layers.",
        "target": "Export map SVG"
      },
      {
        "title": "Reopen and check independently",
        "text": "Open the project, reproduce the original source, and reopen exported GeoJSON in an independent GIS. Confirm counts, identifiers, coordinates, holes and clip boundaries; inspect the map at publication size. Source observations are synthetic, not survey data.",
        "target": "Open"
      }
    ],
    "trouble": [
      "No shapefile, point/line, raster, antimeridian/polar geometry, arbitrary CRS, web basemap or automatic topology repair is supported.",
      "Self-crossing/touching rings, overlapping/nested holes, overlapping MultiPolygon parts and unsupported property names are refused. Distinct input features may overlap; dissolve unions their areas.",
      "Joins require text keys. Numeric/unsafe integer identifiers are never silently coerced; fix the source explicitly.",
      "Clip mask needs exactly one polygon feature. Spatial operations preserve inputs as separate layers; the aggregate project cap can require removing unneeded derived layers.",
      "Windows native dialogs, pointer/HiDPI/screenreader behavior, independent interactive QGIS reopening and publication rendering remain open gates."
    ]
  },
  "relate": {
    "formats": "UTF-8 CSV import with exact matching headings; \\N means null. Stable record IDs encode references. SQLite, typed JSON, formula-safe CSV, and ZIP backup exports. 12 tables, 40 fields/table, 10,000 records, 100,000 cells, 8 MiB project.",
    "steps": [
      {
        "title": "Shape the database",
        "text": "Select Beds or Plantings, then Fields & relations. Rename a field without changing its stable ID. Add a typed field or create a junction table for a many-to-many relationship. In Records & form, choose a record and use the reference picker.",
        "target": "Fields & relations"
      },
      {
        "title": "Open original garden data",
        "text": "Download the original practice project and raw CSV files from Help. Save current work first, then explicitly Open the practice project. Import CSV previews a file without changing records.",
        "target": "Import CSV"
      },
      {
        "title": "Query related records",
        "text": "Use Query builder. Load Plants by bed and Run query to see a left join and exact integer sum. Resting plot retains a null child row. Import plantings.csv, inspect the preview, then Apply CSV import. invalid-plantings.csv is refused atomically.",
        "target": "Query builder"
      },
      {
        "title": "Save the editable database",
        "text": "Save project preserves schema, records, form ordering, saved views and exact original CSV text. New record and schema forms need their explicit Add action. Undo and Redo restore relational edits.",
        "target": "Save project"
      },
      {
        "title": "Export genuine SQLite",
        "text": "Export SQLite creates real constrained tables with foreign keys and unique indexes. The manifest maps stable IDs to labels. Exact integer fields use TEXT to retain precision; portable backup also contains typed JSON, CSV and original imports.",
        "target": "Export SQLite"
      },
      {
        "title": "Reopen and verify",
        "text": "Open your saved project. Compare the Plants by bed view and original imports. Independently inspect SQLite with another database tool. CSV neutralizes spreadsheet formulas; typed JSON retains exact values.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Required, unique, type and reference errors refuse the entire edit/import. Correct the input; no hidden coercion or cascading deletion occurs.",
      "Exact integer fields accept canonical decimal strings up to 40 digits; SQLite stores them as TEXT. Decimal sums use finite floating-point arithmetic.",
      "Query counts are joined-row counts, including one null row for a parent without children. Search is literal and case-sensitive.",
      "Only the first 100 records/results are drawn at once; the selector and queries retain all records. Results export is capped at 5,000 rows.",
      "No Access import, remote databases, attachments, macros, SQL console, executable schemas or runtime downloads. Windows dialogs, accessibility and installed runtime remain release gates."
    ]
  },
  "compose": {
    "formats": "Native portable media project; unchanged PNG/JPEG originals; editable sRGB painting up to2048px per side; 8 layers, 2,097,152 working-source pixels. True PNG, JPEG94 and bounded flat OpenRaster import/export with explicit preview and source recovery. No PSD, RAW, HDR, CMYK, animation or complex text shaping.",
    "steps": [
      {
        "title": "Open the original garden collage",
        "text": "From Help save the separate practice project and raw PNG source kit. Save your current work before explicitly opening the practice project.",
        "target": "Open"
      },
      {
        "title": "Paint an independent mask",
        "text": "Choose Masked flower patch and the mask-hide tool. Paint around an edge, then choose mask-reveal to restore it. Brush radius and opacity control continuous-tone coverage. Undo restores the previous stroke.",
        "target": "Tool"
      },
      {
        "title": "Build the composition",
        "text": "Edit the title text, add a paint layer, try multiply or screen, and change Layer X, Y, scale or rotation. Select a rectangle and copy it to a new independent layer. Import photo as editing copy explicitly creates a 1024px copy while retaining the original.",
        "target": "Add editable text"
      },
      {
        "title": "Save the editable work",
        "text": "Save project retains every source, operation, mask, text and transform. Imported originals use the adjacent .assets folder: move the saved project and that whole folder together.",
        "target": "Save project"
      },
      {
        "title": "Export an interoperable result",
        "text": "Export PNG keeps alpha; JPEG uses a white background. Export OpenRaster keeps separate raster layers and blend/opacity, baking masks, text and transforms into pixels. Native project remains your editable master.",
        "target": "Export OpenRaster"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project, edit the title, and inspect the mask and transform. Export unchanged original restores the selected imported file byte-for-byte. For the separate layered-migration.ora practice, choose Review OpenRaster import, inspect both previews and any discrepancy, then Adopt reviewed layered document. Undo/Redo adoption. Save and reopen with the .assets folder; Recover original OpenRaster archive restores the exact archive. Compare the edited new ORA in an independent reader, noting the declared encoded-sRGB blend profile.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Import one source at a time. JPEG/PNG originals are limited to24MP and32MiB; a1024px editing copy is made explicitly, not silently.",
      "Use the native .abundance project for editable masks and text; OpenRaster contains rendered layer pixels.",
      "Copy/merge may be refused if retaining original sources plus generated pixels would exceed the working-source budget.",
      "Correct marked invalid fields before saving/exporting. Cancel processing leaves the project untouched.",
      "GIMP3 default blending can differ from encoded-sRGB Compose. Actual tested UNION + RGB_PERCEPTUAL settings match; default visual parity remains unpassed.",
      "Windows dialogs, pointer capture, HiDPI and screen-reader interaction remain native acceptance gates."
    ]
  },
  "index": {
    "formats": "Explicit PDF/TXT imports only; 8 MiB/file, 128 MiB originals, 200 documents, 2,000 pages, 8 MiB total page text. Portable editable project plus companion assets, original PDF/TXT copies, metadata/search JSON and bounded ZIP exports.",
    "steps": [
      {
        "title": "Choose original practice documents",
        "text": "Save your current work. Download the three authored garden/seed/tool manuals and two TXT notes in Help. Open the separate practice project or choose New. Import documents explicitly selects individual PDF/TXT files and copies them locally.",
        "target": "Import documents"
      },
      {
        "title": "Review and describe your archive",
        "text": "Review the page and indexed-page counts, then Add imported documents. Select each item and add a collection, tags, date or note. The green rectangle page has no text and is honestly unindexed. Exact duplicate imports are identified, never silently removed.",
        "target": "Import documents"
      },
      {
        "title": "Search and inspect the actual page",
        "text": "Search for Compost tea using Exact phrase. Select the garden manual page 2 result to render the actual copied page. Compare its text and source hash. Add a note anchored to the match; all-terms search and date/tag filters are also available.",
        "target": "Search pages"
      },
      {
        "title": "Save the complete editable archive",
        "text": "Save project stores copied originals in a companion .assets folder with the metadata, page text, annotations and named searches in the project. Keep the .abundance file and its entire companion folder together. Undo/Redo restores edits and removed documents.",
        "target": "Save project"
      },
      {
        "title": "Export a portable archive",
        "text": "Export portable archive creates a ZIP with exact original bytes, metadata, page-text and search results. It is capped at 16 MiB of originals and 24 MiB output; larger complete archives use Save project with companion assets. Export original document writes an unchanged copy.",
        "target": "Export portable archive"
      },
      {
        "title": "Reopen and check provenance",
        "text": "Open the saved project with its companion assets folder. Repeat the search, inspect the same page and annotations, and compare source hashes. PDF extraction is not OCR; use Scan separately for scanned pages and explicitly import its searchable PDF.",
        "target": "Open"
      }
    ],
    "trouble": [
      "No folder scanning, watchers, Office/email/HTML import, active links, cloud indexing, OCR or AI answers. PDF scripts, forms, attachments, links, encryption and unsupported compression are refused.",
      "Image-only pages remain visible through Open copied page but unindexed. PDF multi-column reading order, spacing and ligatures can differ from the page image.",
      "Search is case-sensitive: phrase means exact substring; all terms means complete Unicode letter/number/underscore tokens. Empty search lists all pages including unindexed pages.",
      "Page offsets identify extracted text, not PDF source byte locations. Exact originals are hash-checked on export and save/reopen.",
      "Unused/rejected copied imports retain native session quota until New or reopen; save current work before resetting.",
      "Only one page preview is retained. Work is cancellable and native PDF operations terminate after 15 seconds. V8/canvas/decoded-stream budgets are separate from total-process RSS. Windows offline startup, native dialogs, accessibility and real-document visual acceptance remain release gates."
    ]
  },
  "clean": {
    "formats": "PCM16/24 RIFF/WAVE; mono/stereo; 44.1 or 48 kHz; 1024 samples to three minutes; maximum 52 MiB source. PCM16 WAV and JSON recipe output. Preview selections ≤15 seconds.",
    "steps": [
      {
        "title": "Import the original practice WAV",
        "text": "Download the original synthetic noisy-melody WAV in Help. Save current work before opening the practice project. Import WAV explicitly; its first half second contains only seeded noise, DC and 60 Hz hum. Sources are copied unchanged, never edited in place.",
        "target": "Import WAV"
      },
      {
        "title": "Select and inspect noise",
        "text": "Set Noise start sample to 0 and Noise end sample to 24000. Enable Remove DC, choose 60 Hz hum and enable Reduce stationary noise. Start at 9 dB. Inspect processing computes genuine waveform and STFT panels. The selected noise region must not contain wanted sound.",
        "target": "Inspect processing"
      },
      {
        "title": "Compare and reverse",
        "text": "For the fixture, set click start/end to 120000/120001 and enable interpolation. Prepare aligned A/B, then compare source, processed and residue using the same player volume. Keep gain at 0 dB while comparing. Undo/Redo or Bypass complete chain reverses the recipe. This synthetic example cannot prove speech recovery.",
        "target": "Prepare aligned A/B"
      },
      {
        "title": "Save the reversible project",
        "text": "Save project stores the recipe and a companion assets directory containing the original source. Keep both together. Invalid draft settings must be corrected before saving. No rendered audio is substituted for the source.",
        "target": "Save project"
      },
      {
        "title": "Export a useful recording",
        "text": "Export restored WAV renders the whole source to PCM16 with the original rate, channels and exact sample count. Output above full scale is refused; lower gain and inspect again. Export recipe records settings and source identity separately.",
        "target": "Export restored WAV"
      },
      {
        "title": "Reopen and verify",
        "text": "Open your saved project, keeping its companion assets folder beside it. Reinspect and compare exports in an independent audio player. Numerical synthetic tests do not establish listening quality; native playback and Windows UI acceptance remain unverified.",
        "target": "Open"
      }
    ],
    "trouble": [
      "No compressed audio, extensible WAV, voice isolation, declipping, reverberation removal, transcription, recording or arbitrary plugins.",
      "Noise reduction can damage desired sound. Listen to residue and lower reduction if meaningful sound is being removed.",
      "Click interpolation is explicit and limited to 5 milliseconds with intact samples on both sides.",
      "All processing starts from the exact source. Equal player volume is not automatic loudness matching; compare at 0 dB recipe gain.",
      "Worker termination is enforced at 90 seconds. Three-minute arrays are bounded separately from the worker V8 heap; measured memory is documented.",
      "Real-device listening, keyboard/screenreader, HiDPI and Windows native dialogs remain release gates."
    ]
  },
  "weave": {
    "formats": "Typed Weave JSON and .abundance projects; local non-interlaced 8-bit RGB/RGBA PNG; portable stored ZIP containing HTML/CSS/PNG/manifest. 10 pages,500 nodes,depth8,12 images,2MiB each/6MiB total,16MP aggregate.",
    "steps": [
      {
        "title": "Open the original garden site",
        "text": "Download the practice project, source JSON and original garden PNG in Help. Save current work before explicitly opening the project. It contains three fictional pages, a shared navigation bar, responsive cards and one deliberately broken link.",
        "target": "Import site JSON"
      },
      {
        "title": "Edit semantic content and repair links",
        "text": "Select the Join garden-days link in the home-page content tree. Set Link page to Join. Check site finds broken local links, missing alt text and heading hierarchy problems. Add content into a section or grid; raw HTML and scripts are not supported.",
        "target": "Check site"
      },
      {
        "title": "Inspect responsive rules",
        "text": "Select the cards grid. It uses one mobile column and two tablet/desktop columns. Preview 320, 768 and1280 px; edit breakpoint and spacing controls. The editor preview is inert and makes no network requests. Exported browser layout still needs independent visual checking.",
        "target": "Preview 320 px"
      },
      {
        "title": "Save the editable model",
        "text": "Save project preserves all pages, shared navigation, exact local PNG bytes and typed responsive settings. Undo/Redo restores prior edits. Focused edits commit synchronously; invalid drafts remain visible and block persistence.",
        "target": "Save project"
      },
      {
        "title": "Export a standalone static site",
        "text": "After repairing the practice link and passing Check site, Export website ZIP writes actual HTML pages, stylesheet, PNG assets and a manifest. The archive has safe relative names, contains no scripts and needs no build service. Export site JSON is the editable interchange format.",
        "target": "Export website ZIP"
      },
      {
        "title": "Reopen and verify independently",
        "text": "Open the saved project to continue editing. Open exported index.html in an independent browser when available, check navigation and image alt text, and inspect at320,768 and1280 CSS pixels plus200% zoom. Native browser acceptance remains unverified on this host.",
        "target": "Open"
      }
    ],
    "trouble": [
      "The original practice intentionally contains one broken link. Repair it before exporting.",
      "Only authored pages and node anchors are supported as links. No external links, remote images, custom HTML/CSS/scripts, tracking, forms or hosting.",
      "Each page needs exactly one H1 and a coherent heading hierarchy. Meaningful images need alt text; explicitly decorative images must use empty alt text.",
      "Keep an index home page. Page URLs are safe lowercase relative filenames; renaming a page keeps internal links tied to its stable identity.",
      "Images are immutable source bytes, checked structurally and through bounded zlib inflation. Delete references before removing an asset.",
      "Inert Shadow DOM preview cannot establish independent rendering correctness. Windows/browser/zoom/keyboard/screenreader acceptance remains open."
    ]
  },
  "seam": {
    "formats": "Strict original pattern JSON and portable projects; actual-scale SVG, tiled A4/Letter PDF, seam report and exact original source.",
    "steps": [
      {
        "title": "Open the original practice pattern",
        "text": "Download the separate project and raw tote-pattern.json from Help. Save current work before explicitly opening the practice project, or import its JSON. Three original pieces include a curved pocket and an intentional mismatch.",
        "target": "Import pattern JSON"
      },
      {
        "title": "Edit piece geometry and markings",
        "text": "Choose a piece. Edit its allowance, cut count, fold flag, grainline, endpoints or cubic controls. Add notches at seam-length fractions. Add measured rectangles or mirrored copies. Invalid or self-crossing outlines remain visible as invalid drafts until corrected.",
        "target": "Add measured rectangle"
      },
      {
        "title": "Walk paired seams",
        "text": "Compare the front and back first edges: the original pair differs by 10 mm. Correct endpoints or explicitly record intentional ease. Inspect allowance corners and notches. Undo/Redo restores accepted pattern geometry.",
        "target": "Export seam report"
      },
      {
        "title": "Save the editable pattern",
        "text": "Save project stores geometry, seam pairs, markings and immutable original source. Explicit Add-form measurements are only applied when Add is pressed. Correct all invalid fields before saving.",
        "target": "Save project"
      },
      {
        "title": "Export actual-scale print sheets",
        "text": "Export tiled PDF uses A4 or Letter with 10 mm overlaps, labeled rows/columns, registration crosses and a 100 mm calibration ruler. SVG is in millimeters. Print at 100% without fit-to-page and measure before cutting.",
        "target": "Export tiled PDF"
      },
      {
        "title": "Reopen and check",
        "text": "Open the saved project and confirm its editable pieces and mismatch report. Independently inspect PDF/SVG and physically check printed scale. Sew a sample; no fit, body grading or manufacturing guarantee is made.",
        "target": "Open"
      }
    ],
    "trouble": [
      "All coordinates and ease are millimeters. Negative mismatch means B is shorter than A after ease.",
      "Only simple non-touching outlines and disjoint internal holes are accepted. Tight allowance holes may disappear naturally as allowance expands.",
      "PDF labels support Latin-1; SVG supports other scripts.",
      "Original rectangle width/height forms add new geometry; they are not persistent body-fit constraints.",
      "Physical print, native Windows, HiDPI and screen-reader acceptance remain open."
    ]
  },
  "read": {
    "formats": "Explicit DRM-free reflowable EPUB2/3 strict subset. UTF-8 OCF/container/OPF, unique spine, EPUB3 TOC or EPUB2 NCX, safe semantic XHTML, allowlisted non-executable CSS, static PNG/JPEG. Native project+asset folder is the complete portable collection; JSON/CSV is metadata and notes, original EPUBs export separately.",
    "steps": [
      {
        "title": "Open the original reading collection",
        "text": "From Help save the separate practice collection and the two original EPUB editions. Save current work first, then Open the practice project explicitly. Both editions share a title but have different byte hashes.",
        "target": "Open"
      },
      {
        "title": "Read and find a passage",
        "text": "Use Import DRM-free EPUB for a supplied original edition, or Open the practice collection first. Open the selected edition, use Contents and Next page, change reader type size and spacing, then search for The gate was open. Search results keep exact chapter and offset locations.",
        "target": "Import DRM-free EPUB"
      },
      {
        "title": "Highlight and remember",
        "text": "Select a passage and choose Use selected passage, or use explicit source offsets. Type a new note and choose Add highlight and note. Bookmark the current position; edit the selected note and try Undo.",
        "target": "Add highlight and note"
      },
      {
        "title": "Save a portable library",
        "text": "Save project copies imported unchanged EPUB originals into the adjacent .assets directory. Move the project and that whole directory together. Notes, tags, status, type settings and reading position remain editable.",
        "target": "Save project"
      },
      {
        "title": "Export source-anchored notes",
        "text": "Export notes JSON preserves exact source/chapter hashes, UTF-16 offsets and quote context. Markdown is a readable report. Export unchanged EPUB restores source bytes. Collection JSON/CSV describe your editions; source EPUB files are separate.",
        "target": "Export notes JSON"
      },
      {
        "title": "Reopen and resume",
        "text": "Open the saved collection. Verify the same edition, page position and highlighted quote. Restore selected-book notes accepts only the exact edition and validates every quote before replacing notes, with Undo available.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Unsupported or unsafe content causes whole-book refusal; nothing is imported partially. Scripts, remote URLs, encrypted assets, fonts, SVG, media, fixed layout, nonlinear/unspined chapters, arbitrary CSS and unsupported ZIP metadata are refused.",
      "Reading pages are word-boundary segments that change with type size, not publisher print-page numbers. Scroll inside a long segment when needed. Reader typography overrides publisher fonts, type size and colors.",
      "Save before deleting/moving an imported original. Save copies it into the portable companion folder; temporary parsed content is not an archive.",
      "Notes use exact edition/chapter SHA256 and canonical UTF-16 offsets. Different bytes with the same title are separate editions; notes are never guessed onto another edition.",
      "Windows reading flow, real text selection/HiDPI and screen-reader ergonomics remain unverified native gates."
    ]
  },
  "mesh": {
    "formats": "Binary/plain ASCII STL and strict XYZ/positive-index triangular OBJ. Real binary STL, OBJ and JSON audit; exact source export. 2 MiB/input, 20000 aggregate triangles.",
    "steps": [
      {
        "title": "Open or import original meshes",
        "text": "Download the separate practice project and original STL/OBJ fixtures from Help. Save current work before explicitly opening practice. Select units before importing: STL and this OBJ subset do not establish physical units themselves.",
        "target": "Import STL or OBJ"
      },
      {
        "title": "Inspect and preview a limited repair",
        "text": "Inspect boundary, winding, duplicate, degenerate and non-manifold counts. The missing-face cube can preview convex planar hole filling; the duplicate and reversed fixtures exercise other repairs. Review the candidate and explicitly Apply; failed repairs preserve accepted geometry.",
        "target": "Preview planar convex hole fill"
      },
      {
        "title": "Make a genuine solid edit",
        "text": "The practice contains overlapping 20 mm boxes, offset 10 mm. Preview union gives 12000 mm³; difference gives 4000 mm³. The selected model is A and the first other model is B. A plane cut keeps its positive-axis side. Review and Apply; Undo restores the previous accepted solid.",
        "target": "Preview union"
      },
      {
        "title": "Save the editable project",
        "text": "Save project stores all accepted models, exact imported sources and audit entries. Unapplied previews and creation/transform form values are not silently saved. Correct invalid fields first.",
        "target": "Save project"
      },
      {
        "title": "Export real triangle interchange",
        "text": "Export STL or OBJ writes the selected accepted mesh in millimeters. Export audit report records topology and accepted operations. Export original returns unchanged imported bytes. Open exports in a separate consumer and explicitly choose millimeters.",
        "target": "Export STL"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project and compare editable geometry, source exports and audit. Topology checks do not establish absence of self-intersection, manufacturability or structural safety. No G-code or printer control is provided.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Solid jobs require the packaged offline desktop runtime and acceptable closed outward-oriented positive-volume input.",
      "Grid weld rounds to an explicit millimeter grid and reports displacement. It is not arbitrary nearest-neighbor repair.",
      "Hole filling only accepts strictly convex simple planar loops up to 64 edges; nonplanar holes are refused.",
      "Native jobs stop after 15 seconds. WASM linear memory is bounded to 128 MiB; V8 and runtime overhead are separate.",
      "Native Windows, disconnected installed startup, actual dialogs, HiDPI, screen readers and independent GUI consumer review remain release gates."
    ]
  },
  "mix": {
    "formats": "Strict RIFF PCM16/24 WAV, mono/stereo, 44.1 or 48 kHz with one matched project rate. Stereo PCM16 mixed/stem WAV and cue CSV exports. Projects retain opaque copied source assets.",
    "steps": [
      {
        "title": "Meet your tracks",
        "text": "Extract the original garden-arrangement ZIP with its companion assets folder, then Open its project. Save current work first.",
        "target": "Track"
      },
      {
        "title": "Import original sounds",
        "text": "The sample has three tones, aligned claps and a 12000-sample crossfade. You can also Import WAV from the raw kit, then select a source and Add clip.",
        "target": "Import WAV"
      },
      {
        "title": "Overlap and shape",
        "text": "Set Clip start, in/out and fades in integer samples. Add another source on a second track; render to inspect clipping. Lower gains when clipped samples are reported.",
        "target": "Render and inspect"
      },
      {
        "title": "Save portable sources",
        "text": "Save the project and its companion assets folder together. Undo restores arrangement edits without duplicating audio in history.",
        "target": "Save project"
      },
      {
        "title": "Export an actual mix",
        "text": "Export mixed WAV sums all audible clips into stereo PCM16. Export selected stem isolates one track; cue CSV documents sample positions.",
        "target": "Export mixed WAV"
      },
      {
        "title": "Reopen the arrangement",
        "text": "Open the saved abundance project with its companion asset folder. Source hashes and settings are checked before activation.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Mixed rates, compressed WAV, extensible headers and noncanonical trailing chunks are refused, never silently converted.",
      "Render reports clipping without normalizing. Reduce track or clip gain and render again.",
      "Native playback, audio-device behavior and installed Windows packaging remain unverified release gates."
    ]
  },
  "keys": {
    "formats": "Portable abundance projects and UTF-8 printable-ASCII text lessons of at most 4096 characters; CSV progress export. IME, non-US layouts and multiline exercises are unsupported.",
    "steps": [
      {
        "title": "Read before typing",
        "text": "Inspect the US-QWERTY finger map and home-row instruction. This lesson is original garden-themed practice.",
        "target": "Lesson"
      },
      {
        "title": "Begin deliberately",
        "text": "Choose Start or resume and type only in the exercise. Backspace corrects; Tab and Escape pause.",
        "target": "Start or resume"
      },
      {
        "title": "Review and adapt",
        "text": "Finish a lesson, inspect corrected and remaining errors, then use Practice weak keys for your recent mistakes.",
        "target": "Practice weak keys"
      },
      {
        "title": "Save your notebook",
        "text": "Save lesson selection, paused progress and up to 500 sessions in a portable project.",
        "target": "Save project"
      },
      {
        "title": "Export measured progress",
        "text": "Export the history CSV with active time, attempts, errors and explicitly defined speed and accuracy.",
        "target": "Export progress CSV"
      },
      {
        "title": "Reopen and resume",
        "text": "Open your saved project. Read the current instruction and explicitly resume the paused exercise.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Choose Start or resume before typing. Only the focused exercise captures text.",
      "Paste, held-key repeats and composition do not count; IME pauses the exercise.",
      "Correct marked title or custom-text inputs before saving or exporting."
    ]
  },
  "post": {
    "formats": "Individual EML import only; portable self-contained .abundance archive; ZIP originals/index/attachments/report; single original EML and transfer-decoded attachment export. 200 messages, 2 MiB each, 8 MiB raw total, 8 MiB decoded attachments; depth 16, 200 MIME parts and 64 KiB aggregate headers per message. No mbox/PST/OST, mailbox sync, sending, server deletion, decryption or signature validation.",
    "steps": [
      {
        "title": "Start with original mail",
        "text": "Open the separate Garden correspondence practice project through Help, or choose Import EML to append one of the five original sample messages. Existing work is never silently replaced.",
        "target": "New"
      },
      {
        "title": "Import and inspect",
        "text": "Choose Import EML for an original sample, then choose a message. Review decoded text, header lines, source digest and attachments. HTML appears only as inert source. Garden picture has an unsafe display filename, which never becomes a destination path.",
        "target": "Import EML"
      },
      {
        "title": "Organize and find",
        "text": "Enter a New collection name and choose Add collection. Assign it in Message collection, add comma-separated tags and use Search and filters. The Garden meeting reply has a missing parent; a Manual thread group records your own grouping without rewriting headers.",
        "target": "Add collection"
      },
      {
        "title": "Save the editable archive",
        "text": "Use Save project to preserve original EML bytes, exact decoded attachments and applied tags, collection, group and notes. Add collection is explicit: an unsubmitted proposal is retained but not saved. Undo/Redo restores applied archive changes.",
        "target": "Save project"
      },
      {
        "title": "Export portable evidence",
        "text": "Export archive ZIP writes exact original EMLs, a JSON index and attachment manifest, safe numbered attachment files, and a text thread report. Export selected original EML or Export attachment 1 writes one item. Attachments are never launched.",
        "target": "Export archive ZIP"
      },
      {
        "title": "Reopen and review",
        "text": "Open your saved .abundance project. A local worker must verify parsed metadata against the original EMLs before displaying source claims. Then compare message count, tags and diagnostics. Your saved original EMLs remain authoritative. Duplicate IDs, missing parents and reply cycles are warnings, not invented subject-based threads.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Restored source claims stay hidden until Verify archive confirms internal correspondence with raw EMLs. If verification fails, Recover raw EML checks the byte digest and lets you reimport into a new archive. This does not authenticate a sender or signature.",
      "EML parsing runs in a terminable local worker with a 15-second timeout. New input, another import, New/Open or closing the editor cancels stale work. A failed import leaves the archive unchanged.",
      "Date filters require real YYYY-MM-DD calendar dates. Date searches exclude missing, impossible or unsupported message dates. Search is case-insensitive over decoded plain-text rendition, subject, sender, recipients, local notes and tags. HTML is not rendered or fetched.",
      "Raw EML bytes are retained exactly. Decoded text/header views normalize line endings and may use charset fallback, which is flagged. Calendar attachments bypass postal-mime normalization to preserve transfer-decoded bytes; nested message/rfc822 remains an opaque attachment.",
      "Invalid or context-hidden raw edits remain copyable and block Save/Export until corrected or explicitly discarded. Real native Windows dialogs, installed offline rendering and screen-reader behavior remain unverified release gates."
    ]
  },
  "learn": {
    "formats": "Editable .abundance projects and strict Learn course JSON; PNG illustrations; runnable standalone ZIP and SCORM 1.2 single-SCO ZIP; learner session JSON. 20 lessons, 100 pages, 16 choices per question, 8,000 characters per page, 2,000 per choice/feedback, weights 1–100, 1–10 attempts, 4 KiB sessions, 500 KiB/one-megapixel PNGs, 4 MiB total illustration bytes and 8 MiB project.",
    "steps": [
      {
        "title": "Start with a safe copy",
        "text": "Save your own work. Help provides a separate original five-page practice course, editable raw JSON and a PNG. Open practice through normal replacement confirmation.",
        "target": "New"
      },
      {
        "title": "Build the course",
        "text": "Add a lesson, then Add page to that lesson. Edit page text, move pages and choose their lesson. Import local PNG illustrations and write meaningful descriptions.",
        "target": "Add lesson"
      },
      {
        "title": "Write the assessment",
        "text": "Select a practice question or Add question to a text page. Choose one or multiple answers, mark the answer key, write feedback and set the weight. Start learner preview to answer, fail, retry and pass.",
        "target": "Start learner preview"
      },
      {
        "title": "Save editable work",
        "text": "Save project retains the hierarchy, plain text, questions, keys and original PNG bytes. Undo and Redo restore authoring changes. Any course edit resets the separate preview session.",
        "target": "Save project"
      },
      {
        "title": "Export a runnable course",
        "text": "Export standalone course produces real HTML, CSS, fixed authored JavaScript and illustrations. Export SCORM 1.2 course also includes a single-SCO manifest and an LMS adapter. Extract the standalone copy and open index.html; download session JSON before closing.",
        "target": "Export standalone course"
      },
      {
        "title": "Reopen and resume",
        "text": "Open your saved .abundance to continue authoring. Learners import their small session JSON into the exact unchanged exported course. SCORM resumes bounded suspend data supplied by an LMS. Answer keys are inspectable; this is practice training, not a secure exam.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Questions may be saved while incomplete, but preview/export requires at least one correct answer. Single-choice keys contain one answer; multiple-choice grading is all-or-nothing exact-set, weighted across all questions. Text-only courses finish at 100%.",
      "Sequential mode requires marking a text page read or submitting its answer before Next. All pages must be complete before the final score. Retry clears the current attempt and uses one of the configured attempts. The API reports SCORM 1.2 lesson_status, raw/min/max score, lesson_location and suspend_data; it does not implement SCORM 2004 or xAPI.",
      "Standalone courses do not rely on localStorage. Download/import session JSON is the explicit fallback. SCORM missing API and API errors stay visible; download progress before closing. A changed course rejects an older session. Finishing the assessment and ending the LMS session are separate actions.",
      "Authoring fields commit on change or focused Save. Invalid exact raw strings stay visible, including in other or deleted records. New/Open clears old drafts only after accepted replacement; cancelled import and newer typing retain current work.",
      "Only authored plain text, choices and local PNG images are supported. No imported HTML/scripts/styles, remote links, video, audio, LMS hosting, rosters, certificate or exam-security guarantee. PNG envelope checks do not establish arbitrary browser decoder safety.",
      "The emitted runner has been executed under a strict DOM harness with an independent SCORM API and actual ZIP/XML output consumed by Python. Real browsers, native Windows dialogs, file-URL behavior, actual LMS platforms, visual layout and screen readers remain unverified release gates."
    ]
  },
  "write": {
    "formats": "Editable .abundance projects; bounded DOCX supported subset and still PNG import; genuine DOCX, inert self-contained HTML, and untouched imported DOCX export. Single-section page geometry, four margins and paragraph before/after/automatic line spacing. Continuous editor; no pagination or PDF export. Fixed unmerged table columns: integral twips, at least 18 pt each, total within current printable width; 18 pt is an admission minimum, not a readable-width recommendation.",
    "steps": [
      {
        "title": "Open separate original practice",
        "target": "New",
        "text": "Save current work. Download write-practice.abundance and garden-handbook-default-template.docx from Help. Explicitly Open the native practice, then Save as with a fresh filename before editing. Downloads and tips never adopt a document. The fictional Saturday rota has Time, Task and Volunteer columns. New starts a separate blank document."
      },
      {
        "title": "Review the handbook source",
        "target": "Import DOCX",
        "text": "Choose Import DOCX for garden-handbook-default-template.docx. Read the supported-content, table-width and empty-bibliography findings, then choose Apply reviewed DOCX explicitly. This replaces the editable document and keeps the exact imported bytes separately. Save your practice copy. Discard import preview keeps current content; editing while a preview is open requires a fresh import. The independently authored source has the same three-column fictional rota."
      },
      {
        "title": "Set and compare fixed widths",
        "target": "Bold",
        "text": "Place the caret in a Saturday rota cell. In Selected table column widths, choose Use fixed column widths if the table is automatic. Enter 72, 216 and 72 in Table column 1/2/3 width (pt), then Apply table widths: total 360 pt. Set the first width to 90 and Apply: total 378 pt, with the other columns unchanged. Undo, then Redo checks that edit. Reselect a cell if needed; Distribute table columns evenly proposes 126 pt each. Apply, then Undo to restore 90/216/72. With no width draft pending, select ordinary text and use Bold to try the existing formatting workflow. Numeric widths use 0.05 pt steps (72 pt = 1 inch); the total must fit the page’s printable width."
      },
      {
        "title": "Save widths and resolve drafts",
        "target": "Save project",
        "text": "Use Save as for a separate practice copy if not already done, then Save project and wait for confirmation. Save/Save as/Export commit valid owned width/layout fields; invalid input such as 90 wide stays visible and blocks saving. Correct it to 90 or choose Discard table width draft, then retry. A width draft stays with its original table: selection does not retarget it, and table edits/history can make it stale. Finish or discard drafts before structure edits. Save preserves supported content, widths, images, page settings and the imported original."
      },
      {
        "title": "Export and recover independently",
        "target": "Export DOCX",
        "text": "Export DOCX and Export HTML to fresh files. Inspect Time/Task/Volunteer text and the 90/216/72 pt columns in your intended consumer. Export original DOCX recovers the exact imported file; compare bytes with the source downloaded in step 1. DOCX and HTML preserve supported fixed widths, but consumer layout/resaving may vary. Headless Writer evidence retained table text with small twip changes; it does not establish Word fidelity or interactive/native GUI acceptance. There is no Write PDF export or controlled table pagination."
      },
      {
        "title": "Reopen and continue",
        "target": "Open",
        "text": "Open the saved .abundance practice copy, cancelling replacement with Keep editing if you still need to save. Place the caret in the rota and check 90/216/72 pt widths and all original cell text. Export original DOCX should still recover the unchanged source. With no draft pending, add a row using Add table row: the widths stay unchanged. Undo restores the table. Keep the native project as well as exports; older Write builds may reject fixed-width projects."
      }
    ],
    "trouble": [
      "More practice in Help: download write-links-walkthrough.md, tool-library-handbook.docx and write-links-source-sha256.txt. Explicitly Import DOCX and Apply reviewed DOCX, edit the complete borrowing guide address with Full link destination / Apply link, remove the hours link, Save as and reopen, then compare Export original DOCX byte-for-byte. Links stay inert in Write; DOCX/HTML exports contain functional links. HTTPS is not a safety endorsement. Invalid/stale drafts require correction or Discard link draft.",
      "HTTPS link consumer limit: the strict headless Writer gate FAILED for fragment/encoded targets and mixed-run formatting. Plain-HTTPS structural and uniformly plain rendering controls passed only their narrow profiles. The earlier build refused Writer resaves at its ZIP data-descriptor boundary. The bounded ZIP32 successor now admits the exact plain-control envelope but still refuses its section metadata: Unsupported section feature type. These results do not establish overall Writer, Word, browser or Windows acceptance; keep your native project and exact original.",
      "Protected DOCX safety: all documentProtection and writeProtection declarations are refused, including inactive or advisory ones, because editable export cannot preserve those restrictions. Settings must be absent or have one correctly related, typed and well-formed context. Keep protected originals in an editor that supports their protection; Write has no password handling or protection-removal workflow. Do not remove protection to force an import.",
      "A page/margin change that would make a fixed table too wide is refused, never silently scaled. Long unbroken text and oversized images produce warnings; adjust content or widths yourself. Narrow columns can stack letters, and consumer rows may split across pages. The editor remains continuous, not a paginated Word preview.",
      "With no width draft pending, Add table column splits the caret’s selected column into two widths, rounding the first half up by a twip if needed; a column below 36 pt cannot split. Delete table column removes its width and narrows the total. Add/Delete table row preserves column widths. One-column selection is required for fixed column edits; Undo restores the operation.",
      "Existing tools remain available: select text for Bold/Italic and headings; use Page setup and Apply page setup for size/orientation/margins, Apply paragraph spacing for paragraph layout, and selected PNG controls for size/aspect/alternative text. Apply or discard owned drafts before changing their targets. Copy/paste inside the active Write session preserves supported rich content; external clipboard remains plain text.",
      "Import is a preview until Apply reviewed DOCX. Read layout normalization notes as well as content notes. Exact/minimum line heights, gutters, columns and other unsupported layout settings may be normalized; multiple sections and unsupported structural OOXML are refused. Original bytes remain separately recoverable.",
      "The exact source is retained. Empty unused bibliography template metadata may be omitted only after visible review; nonempty custom XML and data-bound controls are refused.",
      "Page setup offers A4, US Letter and preservation of custom imported dimensions, not arbitrary width/height fields. Margins use points (72 pt = 1 inch), in 0.05 pt increments: 0–720 pt, leaving at least 36 pt of printable width and height. Paragraph before/after is 0–144 pt; automatic line spacing is 0.5–4 lines. Untouched blank fields mean inherited/default or mixed values; clearing an edited field is invalid.",
      "Correct marked title or layout fields before save/export, even after moving focus away. Fix the value and retry Save, or discard that layout draft. Body/heading changes preserve paragraph spacing. Find/replace and image-alt proposals survive same-document history; successful New/Open clears project-owned proposals.",
      "Copy/paste within this active Write session preserves supported formatting, lists, tables and images. External clipboard exchange is plain text; use DOCX for rich interchange.",
      "Independent python-docx/lxml consumers verified exact exported page/spacing values, and isolated headless Writer rendered reviewed DOCX samples. One custom-size sample rendered with a small page-width deviation, also seen with an independently authored source. This is not pixel-exact fidelity. Native Windows, editor/interactive Writer GUI, Microsoft Word, accessibility, IME and print behavior remain unverified."
    ]
  },
  "people": {
    "formats": "UTF-8 vCard 3.0 / 4.0 with CRLF lines, structured escapes, octet folding and opaque original fields. Explicitly mapped CSV input. Portable .abundance projects, group VCF, formula-safe CSV and inert directory HTML output.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work. In Help, save the original practice project and garden-club.vcf separately, then explicitly Open the practice project. It contains fictional Unicode contacts and a duplicate pair.",
        "target": "Open"
      },
      {
        "title": "Review original contacts",
        "text": "Import vCard previews versions and opaque fields before acceptance. Original bytes remain in the project. CSV needs explicit column mapping. Same names and colliding UIDs remain separate.",
        "target": "Import vCard"
      },
      {
        "title": "Edit a real contact",
        "text": "New contact creates an explicit draft. Use structured names, repeatable labeled email/telephone/address fields, categories and notes. Apply contact stores changes. Pending drafts survive record switches and history. In Duplicate review, choose a candidate and Keep or Omit every field; keep one UID and structured name. Apply reviewed merge retains both originals and decisions, and Undo restores the pair. No version conversion is guessed.",
        "target": "New contact"
      },
      {
        "title": "Save and reopen",
        "text": "Apply contact forms first, then Save project. Reopen the .abundance file with Open to recover the editable book, original sources and merge history. Save excludes unapplied forms and leaves them available for review.",
        "target": "Save project"
      },
      {
        "title": "Export the current group",
        "text": "Search or filter a category, then Export group vCard. Formula-safe CSV and script-free directory HTML are additional local copies. VCF preserves repeated fields and original vCard versions; CSV is a flattened report.",
        "target": "Export group vCard"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved .abundance project and check structured names, repeated fields, original source records and merge decisions. Choose Keep editing to cancel replacement. Save as under a fresh practice name to preserve the downloaded sample.",
        "target": "Open"
      }
    ],
    "trouble": [
      "New/Open clears old-project proposals only after successful replacement. Cancel and Keep editing preserve them.",
      "No vCard 2.1, legacy charset or quoted-printable support, implicit version conversion, remote photos, sync, sending, country-code inference or automatic same-name merging.",
      "2,000 contacts; 4 MiB/source; 8 MiB retained originals; 16 MiB portable project. Native Windows, screen readers, visual layout and Thunderbird acceptance are unverified."
    ]
  },
  "motion": {
    "formats": "Portable abundance projects; vector-only Motion rig JSON; strict non-interlaced 8-bit RGB/RGBA PNG cutouts. SVG and PNG frame ZIPs with timing manifest.",
    "steps": [
      {
        "title": "Inspect a genuine hierarchy",
        "text": "Download the separate paper-robot practice kit from Help. Save current work before opening it. Select Upper arm and inspect its parent Body; Forearm inherits both transforms.",
        "target": "Selected bone"
      },
      {
        "title": "Author a pose key",
        "text": "Select Upper arm. Choose rotation, frame 8, value -40 and linear easing, then Add keyframe. These are explicit unapplied fields until Add.",
        "target": "Add keyframe"
      },
      {
        "title": "Inspect intermediate motion",
        "text": "Scrub frame 6. The pose is interpolated, not a held panel. Show onion skin, edit a selected cubic curve or change direct versus shortest rotation.",
        "target": "Scrub frame"
      },
      {
        "title": "Save the editable rig",
        "text": "Save project stores bones, parts, original sources and all keyframes. Unsubmitted proposals stay visible but are not silently added. Undo/Redo restores accepted changes.",
        "target": "Save project"
      },
      {
        "title": "Render frame interchange",
        "text": "Export SVG or PNG frame sequence. The ZIP contains actual intermediate frames, rational-FPS timing and a contact sheet. Export caps may require fewer frames or a smaller canvas.",
        "target": "Export SVG frame sequence"
      },
      {
        "title": "Reopen and verify",
        "text": "Open your saved project and scrub again. Independently inspect the exported frame sequence. No video, IK or deformation compatibility is claimed.",
        "target": "Open"
      }
    ],
    "trouble": [
      "A bone hierarchy cannot contain cycles or exceed 16 levels.",
      "Each bone/channel/frame has one key; retime or remove an existing key before duplicating there.",
      "Cubic controls must each be between0 and1. Hold, linear and bezier are the supported outgoing easings.",
      "PNG source:2MiB,1024 per side; combined originals8MiB, decoded cutouts16MiB. Output ZIP24MiB.",
      "Native Windows playback smoothness, pointer capture, visual layout and accessibility remain unverified."
    ]
  },
  "variation": {
    "formats": "UTF-8 PGN for standard chess with escaped tag quotes/backslashes, brace/semicolon comments, NAGs and recursive variations. Portable abundance projects and printable TXT.",
    "steps": [
      {
        "title": "Import authored games",
        "text": "Download the separate garden-studies PGN practice kit from Help. Save current work before importing. The three original studies include nested alternatives, promotion and en passant; the illegal fixture must be rejected.",
        "target": "Import PGN collection"
      },
      {
        "title": "Navigate and branch",
        "text": "Choose a move in the accessible move tree. Select source/destination board squares or enter their coordinates and a promotion letter, then Add legal move / variation.",
        "target": "Add legal move / variation"
      },
      {
        "title": "Annotate and compare",
        "text": "Add a human comment and optional NAG. Choose an alternative and Promote selected branch. This changes ordering without deleting other lines.",
        "target": "Add comment / NAG"
      },
      {
        "title": "Search and save",
        "text": "Find this exact position across the local collection and inspect counted next moves. Save project preserves the legal tree and exact original PGN text.",
        "target": "Save project"
      },
      {
        "title": "Export real PGN",
        "text": "Export annotated PGN with comments, numeric NAGs and nested parentheses. Every branch is legal. Export printable study text for a simple paper review.",
        "target": "Export annotated PGN"
      },
      {
        "title": "Reopen and verify",
        "text": "Open the saved project or import its PGN export. Navigate each branch and compare metadata and notes. No chess-engine evaluation is generated.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Illegal SAN/FEN, duplicate tags, unknown variants, malformed escapes and unclosed variations are refused.",
      "Comments containing braces cannot be exported by this bounded PGN grammar; edit them explicitly.",
      "Position matching includes board, turn, castling and legally available en-passant, but ignores clocks.",
      "Maximum2000games,100000plies,8MiBPGN,16nested variations and1000comments per game. Lists paginate200games/1000positions per page; exports preserve the full accepted collection.",
      "Native screen-reader, board layout, installed offline behavior and real dialogs remain unverified."
    ]
  },
  "model": {
    "formats": "Documented semantic JSON import/export; TypeScript .d.ts, JSON Schema draft-07 data projections and SVG views. 500 entities, 2,000 members, 1,000 relations, 20 views, 8 MiB.",
    "steps": [
      {
        "title": "Create a semantic entity",
        "text": "Use Entities & members to add a class, interface, package or enumeration. Download the original library practice kit from Help; save current work, then explicitly Open the practice project.",
        "target": "Entities & members"
      },
      {
        "title": "Edit shared types",
        "text": "In Library loans select Book. Add a typed attribute with a minimum/maximum. Select Member to inspect borrow(book:book). Code names and stable type IDs have different jobs; labels may be Unicode.",
        "target": "Entities & members"
      },
      {
        "title": "Validate relations",
        "text": "Use Relations. Add a generalization from Item to Book: the existing reverse edge makes a cycle, so the proposal is refused and retained. Correct or discard it. Associations have named directed ends and explicit multiplicities. Use Diagram views. Circulation and Item hierarchy refer to the same Book. Rename its label, then switch views: both update without cloned classes. Numeric X/Y placement is keyboard accessible.",
        "target": "Relations"
      },
      {
        "title": "Save semantic repository",
        "target": "Save project",
        "text": "Save project retains shared semantic entities, relations and every diagram view. Apply proposals first; unapplied forms are not part of the saved project."
      },
      {
        "title": "Save and export real types",
        "text": "Save project stores semantic repository and views. Export TypeScript emits declaration interfaces and literal enum unions. Select Book and Export JSON Schema for the structural data projection; operations are intentionally omitted.",
        "target": "Export TypeScript"
      },
      {
        "title": "Reopen and independently inspect",
        "text": "Open your saved project. Export typed model is deterministic documented JSON, not XMI. Compile the provided usage.ts against model.d.ts with TypeScript and validate book.json using a draft-07 JSON Schema consumer.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Inheritance/package cycles, dangling IDs, code-name collisions and impossible multiplicities reject atomically.",
      "Deleting an entity first previews references. Typed member/package children must be removed deliberately; view placements and relations are listed before confirmation.",
      "TypeScript integer/cardinality constraints require the separate JSON Schema projection at runtime. No method bodies are generated.",
      "JSON Schema embeds association values, not object identity. Operations and diagram layout have no data-schema meaning.",
      "No arbitrary UML/XMI, SysML, source reverse engineering, plugins or remote schemas. Native Windows layout/accessibility remain unverified."
    ]
  },
  "struct": {
    "formats": "UTF-8 XML1.0 (ASCII QNames) and strict JSON. Exact original source export, working source copies, XML subtrees and JSON reports. No automatic XML↔JSON conversion. 10,000 nodes/source, 4 MiB/source, 8 MiB workspace.",
    "steps": [
      {
        "title": "Start with the original kit",
        "target": "New",
        "text": "Download the equipment practice project and raw sources from Help. Save current work before explicitly opening the practice project."
      },
      {
        "title": "Open original source",
        "text": "Import XML or JSON from an explicitly selected UTF-8 file. Download the original equipment practice project/raw sources from Help, save current work, then explicitly Open the practice project. In catalog.xml the note is Keep, an em element containing dry, then after use. Select the tail text node and Apply node value. The surrounding element, namespaces and text order remain intact. Source edits require Apply source.",
        "target": "Import XML"
      },
      {
        "title": "Run a real bounded XPath",
        "text": "Load Calibrated equipment, then Run XPath. The explicit e prefix binds urn:garden:equipment even though the document uses a default namespace. Go to a result or export its subtree. Try count(/e:catalog/e:item). Select catalog.json. Its imported catalog-schema is associated already. Validate JSON. Change condition from ready to an invalid enum, apply, validate and navigate the exact error pointer; correct it and validate again.",
        "target": "Run XPath"
      },
      {
        "title": "Save working copies",
        "text": "Save project retains originals, current sources, named queries and local schema associations. Unapplied source/node forms are excluded and retained. Undo/Redo restores applied sources. Export source copy writes a fresh working file; Export exact original preserves the input.",
        "target": "Save project"
      },
      {
        "title": "Export an inspectable copy",
        "target": "Export source copy",
        "text": "Export source copy writes the working source to a fresh filename. Export exact original preserves the imported bytes. XML subtrees and result reports provide separate inspection outputs."
      },
      {
        "title": "Reopen and verify results",
        "text": "Open the saved project, rerun the named query and JSON validation. Export result report records first-error pointers or query node paths. Check XML with lxml and JSON/schema with Python jsonschema or another draft-07 consumer.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Default XML namespaces need an explicit query prefix; unprefixed attributes remain in no namespace. DTD, custom entities, processing instructions and XInclude refuse.",
      "Duplicate JSON keys/expanded XML attributes and numeric lexemes that would lose precision refuse before normalization. Exact originals are retained separately.",
      "Only documented absolute XPath paths, one descendant step, attribute/text literal predicates and scalar wrappers are supported. Work/materialization is conservatively refused before the engine, with a secondary five-second worker watchdog.",
      "Draft-07 supports boolean schemas, type, enum, const, properties/required/additionalProperties, homogeneous items, numeric/length/count bounds, allOf and acyclic explicit local references. Other keywords, regexes, formats and network references refuse.",
      "Draft fields belong to their exact document/source revision/target. After another source edit, older proposals remain visible conflicts rather than attaching to a changed path.",
      "No XSLT/XQuery/XSD generation or validation, extensions, scripts, giant-file or native Windows accessibility certification."
    ]
  },
  "lane": {
    "formats": "Portable .abundance plus .assets companion. Typed JSON imports attachment-free interchange; JSON containing attachment references must be opened through its native project. Complete ZIP includes all copied attachment bytes.16 MiB/file,64 MiB total,100 attachments;1000 tasks,10 boards,20 columns/board,768KiB metadata.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work first. Download and explicitly Open the fictional seed-swap practice project from Help → Practice files. Practice files never replace work automatically.",
        "target": "Open"
      },
      {
        "title": "Triage the inbox",
        "text": "Select Check seed supplies. Use Task destination and Move task to place it in My board / Doing. Capture another task with Add inbox task. Moves also work with keyboard controls. Check Count envelopes, then Complete task. Its seven-day recurrence creates exactly one successor. Prepare welcome table is blocked until its dependency completes. Reopen and complete again to confirm no duplicate successor.",
        "target": "Add inbox task"
      },
      {
        "title": "Copy actual attachments",
        "text": "Choose Attach selected files and select the supplied supply-list.txt and seed-map.png. These bytes are copied into owned storage. Keep both the saved manifest and companion asset folder.",
        "target": "Attach selected files"
      },
      {
        "title": "Save the applied working copy",
        "target": "Save project",
        "text": "Choose a fresh .abundance filename and keep its companion .assets folder. Save includes applied edits only; use the explicit Add/Apply controls for pending forms. Ordinary Save updates the current project; Save as and exports require unused filenames."
      },
      {
        "title": "Save and export",
        "text": "If you opened practice, choose Save as under a new name; Save project updates the opened copy. Export board and attachments ZIP for Markdown, typed JSON, task/checklist CSV and byte-identical attachments. CSV protects formula-like text; JSON retains exact text.",
        "target": "Export board and attachments ZIP"
      },
      {
        "title": "Reopen and check",
        "text": "Open the saved .abundance project with its companion folder present. Inspect the task, checklist and recurrence successor. Export an attachment copy and compare it with the authored original.",
        "target": "Open"
      }
    ],
    "trouble": [
      "WIP counts incomplete tasks; reduce the target column count or raise its limit before moving.",
      "Complete dependencies and every checklist item before completing a task.",
      "Move the .assets folder with the manifest. Large-file, collaboration, live server and OS reminder workflows are not supported."
    ]
  },
  "bytes": {
    "formats": "Opaque selected ordinary files up to16 MiB each; current output up to20 MiB. Original and comparison are owned copied assets. At most512 edits,4 MiB combined new/guarded-old edit bytes,1000 annotations and6 MiB metadata. Search literal bytes or UTF-8, never scripts or regex.",
    "steps": [
      {
        "title": "Practice safely",
        "text": "Save current work. Download the fictional GARD files from Help → Practice files. The walkthrough never loads a project automatically. Start New for a separate working copy.",
        "target": "New"
      },
      {
        "title": "Inspect the original",
        "text": "Choose Open binary source and select gard-original.bin. Set View offset to 8 and Range end to 12. Inspect uint32 Little endian: count is 3. The hex table uses current working-copy offsets.",
        "target": "Open binary source"
      },
      {
        "title": "Edit a record",
        "text": "Set Edit offset to 12, operation Overwrite, Hex bytes to 14 00 00 00. Apply byte edit. This corrects the first quantity from 200 to 20. Undo and Redo to check history. The CRC is not automatically updated; the practice README gives its explicit new bytes. Add an annotation for range 12–16 labeled First quantity. Select gard-expected.bin as comparison. Compare at identical offsets; this does not infer insertions. Complete the explicit CRC edit from the practice README.",
        "target": "Apply byte edit"
      },
      {
        "title": "Save the applied working copy",
        "target": "Save project",
        "text": "Choose a fresh .abundance filename and keep its companion .assets folder. Save includes applied edits only; use the explicit Add/Apply controls for pending forms. Ordinary Save updates the current project; Save as and exports require unused filenames."
      },
      {
        "title": "Save and export copies",
        "text": "If you opened practice, choose Save as to a new .abundance name; Save project updates the opened copy. Keep its companion .assets folder. Export fresh binary, guarded patch and digest manifest. The original remains unchanged. Replay requires the unedited exact original, its SHA-256 and source length.",
        "target": "Export fresh binary"
      },
      {
        "title": "Reopen and verify",
        "text": "Open your saved project, then Load bytes. Check annotations and edits. Compare your exported binary with gard-expected.bin using a local independent byte viewer. Native Windows/dialog/layout verification remains a release gate.",
        "target": "Open"
      }
    ],
    "trouble": [
      "After reopening choose Load bytes to verify/read owned source bytes.",
      "Guarded replay refuses a different original, changed digest/length, wrong expected old bytes or an already edited base.",
      "Save both manifest and companion folder. Never execute untrusted binary data.",
      "Undo retains up to100 small edits within a16MiB serialized-history budget. Large patch states evict older history sooner; this is not a process-memory cap."
    ]
  },
  "logic": {
    "formats": "Strict circuit JSON and decimal stimulus CSV with clock,reset,input IDs and optional expect:signal columns. Exact originals retained. Circuit JSON, stimulus/results CSV, VCD, waveform SVG and vector schematic SVG/PDF.",
    "steps": [
      {
        "title": "Open a safe practice copy",
        "target": "Open",
        "text": "Download the portable seed-packet project and original JSON/CSV from Help. Save your work, then explicitly Open the practice copy. Nothing is replaced automatically."
      },
      {
        "title": "Inspect gates and a carry fault",
        "target": "Import circuit JSON",
        "text": "You can import logic-seed-counter.json into a separate project, review the preview and accept it explicitly. In the opened practice project, select carry1. Set Node inputs to q0,q0 and Apply node. Run trace: failed expectations appear. This deliberately swapped carry input is an educational fault; no physical hardware is controlled. Undo to restore q0,enable."
      },
      {
        "title": "Step explicit input and clock state",
        "target": "Step one vector",
        "text": "Run trace, Reset trace cursor, then Step one vector twice. The second row captures old-state D values simultaneously on a rising edge. Append vector exposes enable/clock/reset switches. CSV expected-count edits produce exact failed ticks; Undo restores them. Reset1 restores initial registers before evaluation and dominates an edge."
      },
      {
        "title": "Save a named experiment",
        "target": "Save project",
        "text": "Save experiment result with a descriptive name, then Save project. Undo/Redo restores accepted edits and saved snapshots. Unapplied raw source/port proposals stay visible and are excluded until Apply."
      },
      {
        "title": "Export independent evidence",
        "target": "Export circuit JSON",
        "text": "Export circuit JSON writes a fresh editable network. Run trace, then export VCD, result CSV, waveform and schematic SVG/PDF. VCD1ns is a cosmetic display unit, never an electrical timing claim. Exports do not change originals."
      },
      {
        "title": "Reopen and reproduce",
        "target": "Open",
        "text": "Open the saved portable project. Original input bytes, circuit, vectors and named identified results remain. Restore experiment inputs deliberately and rerun; the supplied Python consumer reconstructs actual emitted VCD/CSV with independent arithmetic and verifies full-adder truth with SymPy."
      }
    ],
    "trouble": [
      "Binary0/1 only: unknown/high-impedance X/Z, analog effects, HDL and gate delay refuse or are outside profile.",
      "A missing input, width mismatch or combinational feedback is refused. Register feedback is valid; all registers use one explicit rising-edge clock.",
      "An unapplied raw edit is retained separately; Apply is explicit. Source changes require fresh traces. Title/layout-only changes can retain trace validity.",
      "At most500 nodes,2000 wires,64 registers and10 input bits for combinational truth tables. Budget guards can refuse large runs before allocation.",
      "No native Windows, real-browser rendering, GTKWave GUI, physical-electronics or accessibility certification is claimed."
    ]
  },
  "queue": {
    "formats": "Strict bounded model JSON; exact UTF-8 schedule CSV with one duration column headed duration. Positive decimal durations only. Original source text retained. Portable .abundance projects; complete event CSV, sampled schedules CSV, scenario replication CSV, JSON model and text experiment report. No executable formulas, live feeds or arbitrary Python.",
    "steps": [
      {
        "title": "Open a safe practice copy",
        "text": "Save your current project. Download the original fictional Queue practice project and two raw schedule CSVs from Help, then explicitly Open queue-practice.abundance. Practice downloads never replace your work. The model has packing and checkout stations with one packer and one checkout server.",
        "target": "Open"
      },
      {
        "title": "Import and step exact events",
        "text": "Choose Import exact schedule CSV and select queue-arrivals.csv. Review twelve positive durations, then Apply schedule to arrivals. Select packing, import queue-services.csv and Apply schedule to selected service. Step event creates the first arrival at minute 2. Keep stepping or Play events and Pause to inspect FIFO queues.",
        "target": "Import exact schedule CSV"
      },
      {
        "title": "Compare a second packer",
        "text": "Run simulation for Baseline, then choose Two packers in Active scenario and run again. The alternative overrides only packing servers. Exact service schedules begin separately at index zero for each server. Compare completed counts, censored jobs, queue area and departure-conditioned waiting means; this is a fictional experiment, not a staffing recommendation. Set Interarrival distribution JSON to {\"kind\":\"exponential\",\"value\":2}. Set packing Service distribution JSON to {\"kind\":\"uniform\",\"min\":2,\"max\":4}. Keep Replications at 5 and choose Compare scenarios. The baseline and alternative each have five distinct derived seeds. Replication summary rows are separate; no per-event confidence interval is claimed.",
        "target": "Run simulation"
      },
      {
        "title": "Keep edits and recover safely",
        "text": "Try Servers 0 to see a retained invalid draft. Correct it to 2, then Undo and Redo the accepted change. An invalid draft itself is not an undoable committed edit. Save project, then explicitly Open your saved copy and verify both scenarios. Add station proposals are not applied by Save. Save as uses a fresh filename.",
        "target": "Save project"
      },
      {
        "title": "Export reproducible evidence",
        "text": "Export event CSV, sampled schedules CSV, replication summaries CSV, model JSON and experiment report. Event and sampled schedule exports recompute the same current scenario and seed, so their event identities agree. Check created = completed + rejected + in-system and station admitted = departures + queued + busy. The supplied independent Python consumer verifies actual emitted fixtures; native/browser acceptance remains separate.",
        "target": "Export model JSON"
      },
      {
        "title": "Reopen and independently replay",
        "target": "Open",
        "text": "Open the saved portable project and verify both scenarios and exact original schedules. Run the same seed again and export event/sampled-schedule CSV. The supplied independent Python consumer checks actual event order, waits, occupancy integration, warm-up and conservation. Browser and real-world process acceptance remain separate."
      }
    ],
    "trouble": [
      "Routes must form an acyclic graph, name existing stations and sum to one. Empty routes means sink. Waiting capacity excludes busy servers. A full station rejects a job explicitly; downstream rejection ends that job.",
      "Warm-up applies to occupancy integration over [warm-up,horizon]. Waiting averages include full waits of station jobs departing at or after warm-up. Jobs still queued or in service at the horizon are censored and excluded from completed waiting averages.",
      "Exact service values are consumed separately by each server stream; exhaustion fails the run rather than repeating values. Departure events precede transferred arrivals and external arrivals at the same time; sequence breaks remaining ties.",
      "A model/source edit cancels old output and playback. Limits are 40 stations, 80 edges, 16 servers/station, 10,000 arrivals, 100,000 event/log rows, 20 replications, 1 million aggregate processed events, 4 MiB project, 16 MiB output and 30 seconds per worker. No truncated run is reported as finished.",
      "This is an educational process experiment. No operational, healthcare staffing, safety-critical capacity, financial decision or manufacturing guarantee. Windows installation/dialogs, browser workers, visual/accessibility and real-world process validation remain unverified."
    ]
  },
  "tiles": {
    "formats": "Finite orthogonal Tiled TMX with embedded tileset metadata, separately selected plain PNG filenames, CSV tile layers, H/V GID flags and point/rectangle typed objects. Portable abundance projects, genuine ZIP/PNG and object CSV.",
    "steps": [
      {
        "title": "Select and inspect original sheets",
        "text": "Download both night-garden PNGs and the portable practice map from Help. Save current work first. The terrain sheet needs margin1 and spacing1; select it with an intentionally wrong spacing0, inspect the preview, discard, correct spacing and select again.",
        "target": "Select PNG sheet preview"
      },
      {
        "title": "Paint a connected path",
        "text": "Open the practice map, select Ground, and choose Terrain preview. Set a keyboard Selection x/y or click a cell. Review the north/east/south/west neighbor masks, then Apply terrain preview. All16 masks are explicit tile assignments.",
        "target": "Apply selected tool"
      },
      {
        "title": "Organize objects and layers",
        "text": "Inspect the locked Lanterns layer and hidden planning layer. Ground remains editable. Add a point Spawn or a rectangle collision area using pixel coordinates, then attach an inert bool solid property.",
        "target": "Add map object"
      },
      {
        "title": "Undo and save the world",
        "text": "Stamp a tile or move/copy a selected rectangle. Undo, Redo and Save project. The project owns exact selected PNGs, layered cells, terrain assignments and typed objects. Unapplied forms stay pending.",
        "target": "Save project"
      },
      {
        "title": "Export and inspect interchange",
        "text": "Export TMX and PNG ZIP, flattened PNG and object CSV. Hidden layers remain in TMX; flattened pixels include only visible tile layers. The independent PyTMX/Pillow replay compares actual emitted pixels and object coordinates.",
        "target": "Export TMX and PNG ZIP"
      },
      {
        "title": "Reopen without losing sources",
        "text": "Open the saved project. For TMX import, explicitly select matching PNG names first; paths in XML are never followed. Review the map before applying. Help steps are replayable/skippable and never replace current work silently.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Only still noninterlaced8-bit RGB/RGBA PNG is accepted; strict chunks/CRC/decoded limits precede rendering.",
      "Unknown TMX features, external TSX/path/URL references, diagonal/hex flags, compressed/base64 data, DTD/entities and malformed counts are refused.",
      "Maximum256×256 cells,8 layers,32768 aggregate cells,4 sheets/4MiB total,1024 tiles and512 objects. Flat PNG ≤1280 pixels per side.",
      "Locked layers cannot be painted/moved/flipped. Remove sheet references and terrain assignments before removing an owned sheet.",
      "Native Tiled GUI, Windows dialogs, real browser visual/accessibility checks and game-engine integration remain unverified."
    ]
  },
  "loom": {
    "formats": "Strict WIF 1.1 text with one shaft per end, treadle or liftplan controls, rising/sinking shed, RGB palettes and inert private sections; portable abundance project, genuine numbered PDF, PNG/SVG, checklist/materials CSV.",
    "steps": [
      {
        "title": "Review the original WIF",
        "text": "Download night-garden.wif from Help. Save current work first. Import WIF preview, inspect eight ends, eight picks, four shafts, rising shed and two colors, then Apply reviewed WIF.",
        "target": "Import WIF preview"
      },
      {
        "title": "Extend the structure",
        "text": "Open Dimensions and repeated runs. Set Run count to 8 and Additional repeats to 3, then Append repeated run for 32 ends. Edit Treadle 1 shafts to 1,2,3 and inspect the calculated cloth.",
        "target": "Append repeated run"
      },
      {
        "title": "Compare yarns and floats",
        "text": "Change two end color selectors. Show back, then return to front. Set Minimum highlighted float to 3 and Analyze floats. Compare finite borders with periodic repeat mode; unbound yarns have no finite binding length.",
        "target": "Analyze floats"
      },
      {
        "title": "Save the full editable draft",
        "text": "Set Manual current pick to 4. Undo and Redo the tie-up change, then Save project. Unapplied repeat forms stay outside the saved draft until explicitly applied.",
        "target": "Save project"
      },
      {
        "title": "Export genuine instructions",
        "text": "Export WIF, numbered PDF, preview PNG and threading checklist. Every end/pick has a number. The independent consumer replay compares actual emitted WIF against a separate mathematical model; real loom weaving remains unverified.",
        "target": "Export numbered PDF"
      },
      {
        "title": "Reopen and compare",
        "text": "Open the saved .abundance project and compare structure, colors, current pick and original WIF. Import the exported WIF as a separate review when needed. Replay or skip any Help step; practice never silently replaces current work.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Unknown WIF fields, duplicate keys, conflicting liftplan/treadling, multiple shafts per end and oversized dimensions are refused before adoption. Exact accepted source text is retained.",
      "A periodic all-identical yarn is UNBOUND; the reported one-period count is not its finite float maximum.",
      "Maximum1024 ends×1024 picks,32 shafts/treadles,128 colors,2MiB WIF. SVG accepts65536 crossings; numbered PDF refuses more than100 pages.",
      "pyweaving0.0.7 misreads zero-only unused controls as the last shaft/treadle; those edge cases have a separate mathematical proof, not broad-reader compatibility.",
      "Native Windows printing, actual cloth, browser rendering and accessibility remain unverified."
    ]
  },
  "paper": {
    "formats": "Strict triangular OBJ (bare positive indices only) and ASCII/binary STL (no attributes), explicit mm/cm/m/in. Portable exact-source project, PDF/SVG millimeter sheets, mapping JSON, assembly text and ZIP. 2 MiB source, 2,000 triangles, 4,000 vertices, 100 pages/islands; bounded refusals may occur below caps.",
    "steps": [
      {
        "title": "Open the original two-island practice",
        "target": "Open",
        "text": "Use Help to save seed-pod.obj, irregular-prism.obj and the separate Paper practice project. Save your current project before explicitly opening the practice project. Its 24 triangles form two real 12-face islands on two sheets. Practice files never silently replace your work."
      },
      {
        "title": "Inspect source and linked faces",
        "target": "Import OBJ or STL",
        "text": "Enter face 1 and Go to face. Compare the orthographic model, highlighted sheet triangle and readable assembly key. Import the separate irregular prism with units mm to review its preview; Dismiss import preview keeps the seed pod untouched. Exact source bytes remain available for export."
      },
      {
        "title": "Edit the cut forest",
        "target": "Cut selected seam",
        "text": "Select a joined apex edge in the current face and Cut selected seam. The affected triangles become distinct islands with paired seam IDs; unchanged placements remain. Select that cut edge and Join selected seam. A real rigid join runs before commit, refusing overlap or cycles. Undo/Redo restores accepted seams and pages."
      },
      {
        "title": "Apply proposals and save accepted work",
        "target": "Save project",
        "text": "Try a 20 mm tab depth with bevel 0. Apply tab dimensions. The practice reports colliding apex tabs; the last accepted geometry stays intact and the proposal stays visible. Restore depth 1.5 and bevel 0.35. Choose a cut seam, swap its Tab owner face and Apply tab owner, or explicitly enter a Tabless reason before Suppress selected tab. Never assume a missing tab is harmless. Choose a face in the second island. Enter a rotation, X/Y in millimeters and an explicit page number. Apply island placement validates face/tab collisions and the reserved ruler band. Save project preserves the accepted source, seams, tabs and placement; unapplied independent forms remain pending. Undo/Redo restores accepted edits."
      },
      {
        "title": "Export actual-scale evidence",
        "target": "Export complete bundle",
        "text": "Export complete bundle writes actual-scale PDF/SVG, mapping JSON, an assembly key, millimeter OBJ and untouched original. Reopen the saved project: the source is reparsed and the cut forest regenerated before output is enabled. Inspect the 100 mm ruler and print at 100%, never fit-to-page. Physical printer accuracy and assembly still need human verification."
      },
      {
        "title": "Reopen and verify",
        "target": "Open",
        "text": "Open the saved project. Exact source bytes are reparsed and editable decisions reconstructed before output; compare seam IDs, tab decisions and physical placements. Unapplied forms are not part of Save."
      }
    ],
    "trouble": [
      "A manifold orientable triangulated surface is required; no automatic healing, materials, textures, OBJ groups or external paths. STL welding uses exact coordinates. Global 3D self-intersection and physical assembly are not certified.",
      "Face/edge IDs are local to a mesh. Import Apply assigns a new mesh identity; older pending drafts stay attached to their original source and appear as retained conflicts. Reopen independently reparses exact bytes and reconstructs every join.",
      "Overlapping joins, cyclic joins, colliding tabs and out-of-margin placements refuse. Explicit tab suppression requires a saved reason and appears in the key. No optimal-net or optimal-packing claim.",
      "PDF labels are intentionally small; use the readable assembly key or zoom the screen preview. Label-to-label collision freedom is not checked. Preview zoom never changes output scale.",
      "Unapplied forms do not become applied by Save. Rejected proposals preserve the previous accepted model and layout. Successful New/Open clears document-owned proposals; cancelled actions do not.",
      "Some maximum models hit the 200,000 candidate-work guard. Geometry workers stop after 15 seconds; output workers after 30 seconds. No browser/native Windows, printer, material-strength or manufacturing approval."
    ]
  },
  "night": {
    "formats": "Strict UTF-8 six-column CSV: name,ra,dec,magnitude,type,notes; explicit RA hours/degrees. Portable editable .abundance project with exact source text and saved unverified snapshots. CSV windows/samples/targets, SVG chart, ASCII-text PDF plan and JSON calculation manifest.",
    "steps": [
      {
        "title": "Open the separate original practice kit",
        "text": "Download the editable practice project and original target CSV from Help. Save current work before explicitly opening practice. Walkthrough tips never replace your document.",
        "target": "Open"
      },
      {
        "title": "Declare coordinate units and import",
        "text": "Choose CSV RA unit explicitly: the original kit uses hours. Import targets CSV, inspect the retained source preview, then Accept imported targets. The original bytes remain exportable.",
        "target": "Import targets CSV"
      },
      {
        "title": "Set local site and UTC boundaries",
        "text": "Enter latitude, east-positive longitude and elevation manually. Use full UTC Z timestamps. Review the approximate model or manually supplied UT1/TT offsets. No location is uploaded. Set target altitude25, Sun altitude-18 and Moon separation30 degrees.",
        "target": "Start UTC"
      },
      {
        "title": "Compute, edit and save",
        "target": "Save project",
        "text": "Compute observing windows. Select Lantern Field and inspect the altitude chart. South Needle has no eligible altitude interval at Greenwich. The sampled curve is separate from the refined search; grazing and boundary corridors remain unresolved. Edit observation notes or groups, reorder targets with the keyboard buttons, and add a new target with explicit RA hours/declination. Change a numerical coordinate to invalidate results. Undo and redo, then Save project."
      },
      {
        "title": "Export editable targets and checked output",
        "target": "Export editable targets CSV",
        "text": "Export editable targets CSV preserves current target coordinates. Open the saved project. Saved calculation snapshots are unverified until recomputation. Export windows CSV, samples CSV, altitude SVG, ASCII-label PDF and calculation manifest from current inputs. These are airless geometry, never weather, safety or visibility guarantees."
      },
      {
        "title": "Reopen and recompute",
        "target": "Open",
        "text": "Open the saved project. Saved calculation snapshots are unverified until recomputation; run Compute observing windows before treating outputs as current."
      }
    ],
    "trouble": [
      "100 targets,48 hours,300,000 combined calls,10-second worker,8MiB results,12MiB project and24MiB history ceiling. Difficult near-flat/grazing cases can exhaust the budget rather than report a false complete result.",
      "UTC must include seconds and Z. Dates1900–2100 use an approximate time model by default. Leap-second notation, telescope control, satellites, live catalogs and weather are unsupported.",
      "The pinned engine uses instantaneous lunar coordinates without a separate lunar light-time/aberration correction; see exact conventions. Fixed directions omit proper motion, parallax, annual aberration and light deflection.",
      "PDF supports ASCII labels only and refuses unsupported text; CSV/SVG/JSON preserve Unicode. Formula-sensitive textual CSV cells are prefixed for spreadsheet safety.",
      "Browser/Electron, Windows dialogs, visual/keyboard/accessibility on real hardware and actual observing utility remain separate unverified gates."
    ]
  },
  "tone": {
    "formats": "Portable abundance project; strict UTF-8 abundance-tone-bank-1 JSON import/export; PCM16 mono WAV at44100/48000Hz; TXT settings.128patches,64harmonics/oscillator,8active voices including release,1–30seconds/render,40million estimated operations,4MiB retained originals. No plugin, sample-wave, MIDI or microphone import.",
    "steps": [
      {
        "title": "Review the original bank",
        "text": "Save current work. Download glass-seed-bank.json from Help, choose Import patch bank preview, inspect its count and explicitly Adopt reviewed bank. The original JSON is retained unchanged.",
        "target": "Import patch bank preview"
      },
      {
        "title": "Edit the harmonics",
        "text": "Select Glass Seed. Change oscillator1 harmonics to1,0.2,0.1,0.08. The nominal waveform is computed from those amplitudes. Render waveform to inspect actual PCM and strongest Hann-spectrum bins.",
        "target": "Oscillator 1 harmonics"
      },
      {
        "title": "Shape the envelope",
        "text": "Set Attack seconds to0.03 and Release seconds to0.7. Choose Render waveform, then Play rendered sound. Stop explicitly. Playback and export use the same synthesized PCM, not a generic browser oscillator. Set LFO Hz to0.6 and LFO cutoff depth octaves to0.5. Render and inspect peak/clipping. Enter a Variant name and Duplicate patch variant. Undo/Redo compares edits; clipping must be fixed by lowering gain.",
        "target": "Render waveform"
      },
      {
        "title": "Save and reopen the bank",
        "text": "Save project preserves both patches, exact imported JSON and the note audition phrase. Open that separate project and inspect the values. Nothing auto-plays. Save does not consume an unapplied new-patch or variant name.",
        "target": "Save project"
      },
      {
        "title": "Export real samples",
        "text": "Use Notes JSON with MIDI60 for C4 and Export PCM16 WAV. Export settings report records parameters; the shell export writes an editable patch bank. Independent numerical checks are included, but real listening remains a separate gate.",
        "target": "Export PCM16 WAV"
      },
      {
        "title": "Reopen the saved practice",
        "target": "Open",
        "text": "Open the saved project explicitly. Confirm its accepted settings and records, then regenerate audio or evidence from those settings. Unapplied proposals are not included in Save; native audio listening remains unverified."
      }
    ],
    "trouble": [
      "Correct invalid retained numeric/JSON fields before Save or Export. Fields keep their original patch ownership through selection and history.",
      "A harmonic is included only when its worst-case carrier stays below0.45×sample rate. Time-varying modulation and truncated releases may still create sidebands.",
      "WAV export refuses any sample beyond full scale. Lower oscillator or patch gain; no hidden normalization occurs.",
      "Shorten or simplify renders exceeding the40million-operation work gate. Workers terminate after10seconds.",
      "Native listening, Windows playback/dialogs and screen-reader/visual acceptance remain unverified."
    ]
  },
  "listen": {
    "formats": "Portable abundance projects, strict UTF-8 abundance-listen-bank-1 exercise JSON, session CSV and ZIP containing mono PCM16/44100Hz WAVs with a separate structured answer key. Intervals0–12semitones, major/minor/diminished triads with3inversions and root-position augmented triads, four-beat rhythms.200sets,100questions/session,250sessions,5000events,12MiBproject state,1MiBsource and16MiBaudio ZIP ceilings. No microphone or imported sound recording.",
    "steps": [
      {
        "title": "Read and compare sounds",
        "text": "Read the original interval/triad/rhythm lesson. Use Hear a major second, Hear a minor third and Hear a perfect fifth to compare real locally generated examples. Stop audio whenever needed; playback starts only on your action.",
        "target": "Hear a major second"
      },
      {
        "title": "Create seeded practice",
        "text": "Save current work. Download seed-exercises.json from Help, preview and explicitly adopt its sets, or select Seed intervals. Keep6questions and seed31, then Create session and Resume session.",
        "target": "Create session"
      },
      {
        "title": "Answer and compare",
        "text": "Play question. Intentionally choose one wrong answer, then Compare my last answer and Replay target. Try again and read the semitone explanation. Only the first answer affects first-attempt accuracy; replays and reveals remain separate. Finish the session or explicitly Discard unfinished session. Select Four-beat rhythms and create/resume another. Enter eighth-note ticks such as2+1+1+4 in Your rhythm ticks, then Check rhythm. Durations must total8; wall-clock taps are never graded.",
        "target": "Play question"
      },
      {
        "title": "Pause, save and resume",
        "text": "Pause session and Save project. Reopen it, read the current question and explicitly Resume session. Exact questions, first/later attempts and category confusions survive. Undo/Redo restores practice events and authored sets.",
        "target": "Save project"
      },
      {
        "title": "Export useful exercises",
        "text": "Export audio exercise ZIP contains actual numbered WAV questions and a separate answer-key JSON. Export progress CSV keeps chronological attempts. Independent FFT, sample timing, music-table and event checks are included; native listening is still unverified.",
        "target": "Export audio exercise ZIP"
      },
      {
        "title": "Reopen the saved practice",
        "target": "Open",
        "text": "Open the saved project explicitly. Confirm its accepted settings and records, then regenerate audio or evidence from those settings. Unapplied proposals are not included in Save; native audio listening remains unverified."
      }
    ],
    "trouble": [
      "Create a session, then Resume session before answering or playing a question. Reopen and history restoration require explicit resume; no auto-play.",
      "First answers are counted once. Revealing before answering is separate from accuracy; playback requests do not prove that sound was heard.",
      "Roots must fit every configured interval/inversion within MIDI48–84. A comparison at an extreme root may be refused rather than silently transposed.",
      "Use fewer questions if the complete audio ZIP would exceed16MiB. One current buffer is generated on demand; history audio is not preloaded.",
      "No claim of hearing health, certified achievement, measured skill improvement or latency-accurate tapping is made."
    ]
  },
  "rise": {
    "formats": "Arc/Info ASCII square-cell local grids import; editable Abundance projects; ASCII, gray16 PNG with mask/units sidecar, open OBJ and preview PNG/SVG bundle.",
    "steps": [
      {
        "title": "Review the original island",
        "target": "Import ASCII grid preview",
        "text": "Download the original practice kit in Help. Save your work, then Open the portable practice project, or import lantern-island.asc with metre horizontal/height units and review before accepting. The 129×129 island has a negative basin and a NoData corner."
      },
      {
        "title": "Read physical samples",
        "target": "Sample table",
        "text": "Compare exact row/column heights with Height and contours. Row zero is north; the origin is the lower-left outer corner. Change only the contour display: authoritative heights must stay unchanged."
      },
      {
        "title": "Build a camp and ridge",
        "target": "Apply brush",
        "text": "Use column64,row64,radius4,raise amount2 and Apply brush. Then flatten column70,row60,radius3 to height15. Each Apply is one exact Undo transaction."
      },
      {
        "title": "Constrain smoothing and save",
        "target": "Save project",
        "text": "Set selection x0=50,y0=50,x1=80,y1=80. Apply selection; smooth at64,64,radius12,strength0.5. Undo and Redo restore exact arrays. Clear selection, then Save the full editable project."
      },
      {
        "title": "Export usable terrain",
        "target": "Export terrain bundle",
        "text": "Enter mesh stride2 and Inspect mesh loss to deliberately omit intermediate samples. Export terrain.asc,height16.png,mandatory mask/units JSON,terrain.obj and preview PNG. Gray16 rounding error is at most half the displayed step. Independent GDAL/Pillow/VTK tests read actual emitted bytes."
      },
      {
        "title": "Reopen and inspect exact work",
        "target": "Open",
        "text": "Open your saved project. Compare exact height samples, selection, original source and unit declarations. Export exact original recovers the unchanged imported ASCII. The129×129 supported profile is deliberate; larger grids are refused, never silently reduced. Native visual acceptance remains separate."
      }
    ],
    "trouble": [
      "Choose units explicitly. Unit labels do not convert numbers or infer a CRS.",
      "NoData is a separate mask. PNG zero can also be a valid minimum; keep its sidecar.",
      "129×129 grid maximum. Larger input is refused without silent downsampling; mesh stride is an explicit loss choice.",
      "Resampling requires an exact square-cell aspect; all four valid contributors are required.",
      "Terrain is an open surface. No caves, erosion simulator, hydrological or engineering predictions."
    ]
  },
  "tale": {
    "formats": "Strict typed story JSON or explicit first-line-title/plain-text mapping; portable project; standalone offline HTML, JSON source and readable script.",
    "steps": [
      {
        "title": "Open an original branching story",
        "target": "Import story preview",
        "text": "Download the practice kit from Help. Save your own work, then explicitly Open the portable project or import seed-library.json. Review twelve passages, a Boolean key, a bounded visit counter and an enum. Imported text is literal."
      },
      {
        "title": "Make a consequential choice",
        "target": "Passages",
        "text": "Select The listening stacks. Inspect get-key: it targets desk and sets key=true. Add a new choice to desk and add its typed key set effect. Stable choice IDs make saved tests survive reordering."
      },
      {
        "title": "Gate and test three endings",
        "target": "Play and test",
        "text": "Inspect archive-gate and plant conditions in Passages. Remove the key condition, observe the changed route, then restore key eq true. Replay test-1,test-2,test-3. Back from dawn restores the complete prior state. A fourth returning-stair increment is refused. Save a deliberately expected path as a test."
      },
      {
        "title": "Preserve authoring work",
        "target": "Save project",
        "text": "Edit a passage speaker or text, Undo and Redo, then Save the full authoring project. Unapplied Add forms require explicit Add and are not silently written into saved state."
      },
      {
        "title": "Deliver an offline story",
        "target": "Export standalone HTML",
        "text": "Export standalone HTML with fixed CSP-hashed code, inert data and no network dependencies. In a supported browser, Save progress and Resume progress; a changed story rejects older progress. Independent actual-emitted-player tests compare transitions, Back and resume with Python."
      },
      {
        "title": "Reopen and verify the source",
        "target": "Open",
        "text": "Open the saved project, replay your deliberate tests and recover imported text through Export exact original. The graph, stable choices, typed effects, notes and tests remain editable. Native browser rendering/CSP enforcement and accessibility remain separate acceptance gates."
      }
    ],
    "trouble": [
      "Conditions are conjunctions; Boolean/enum allow eq/ne, counters also support ordering.",
      "Counter overflow rejects the entire choice with no partial state change.",
      "Resolve incoming targets and saved tests before deleting a referenced passage/choice/variable.",
      "Analysis stops at10,000 unique states and explicitly reports incomplete.",
      "Twine, Ink/Inky and Yarn Spinner are mature free alternatives. This is a smaller typed, code-free profile."
    ]
  },
  "needle": {
    "formats": "Strict Needle version-1 source JSON (UTF-8, 256 KiB), portable abundance project, genuine Tajima DST, RGB/color-order JSON and actual-size placement SVG. 50 objects, 1,000 vertices total, 128/path, 50,000 commands, 20 colors, 200 × 200 mm hoop; 1 MiB native state. Limits need not combine. No DST import, holes, nonconvex satin, fonts, photographs, trim/sequin controls or hardware connection.",
    "steps": [
      {
        "title": "Choose a safe practice copy",
        "text": "Open Help and save autumn-path.json (raw editable source) or autumn-path.abundance (portable project). Save current work first, close Help, then use Import source preview for the JSON, inspect the three objects and 120 × 100 mm hoop, and Apply reviewed source. Nothing loads silently.",
        "target": "Import source preview"
      },
      {
        "title": "Shape the running trail",
        "text": "Select 1. trail · running. Change trail point 2 x from -39.91 to -39, inspect the linked source line, then Undo and Redo. Keep the manually entered hoop inside your independently checked machine limits.",
        "target": "Hoop width mm"
      },
      {
        "title": "Set the satin and fill",
        "text": "Select 2. stem · satin and inspect both rails in matching direction. Select 3. leaf · fill; change Row / rail spacing mm to 0.8 and Fill angle degrees to 30. Try 0.01 spacing to see refusal, then correct it. Underlay explicitly selects one contour run or none.",
        "target": "Compile stitch preview"
      },
      {
        "title": "Review, bake and save",
        "text": "Use Earlier leaf / Later leaf to inspect sewing order. Compile stitch preview, step through penetrations and gold dashed jumps, then Accept reviewed stitch plan. Optionally open Explicit baked-copy corrections, Bake editable stitch copy, set command 1 to x -42 and y -29, Apply, then recompile and accept. Save project; Undo/Redo preserves source and declared corrections. Acceptance is not machine or fabric safety verification.",
        "target": "Save project"
      },
      {
        "title": "Export editable source and machine companions",
        "text": "Export editable source writes geometry JSON independently of the reviewed machine stream. After compiling, inspecting and accepting the current plan, use Export DST, Export color order and Export placement SVG to fresh files. DST does not carry RGB. Print placement at 100 percent and independently verify its 10 mm scale.",
        "target": "Export editable source"
      },
      {
        "title": "Reopen and independently verify",
        "text": "Open your saved autumn-path.abundance practice or your own saved project. Inspect source, bake mode and corrections, then recompute and accept locally before DST export. Recover retained imports with Export exact original source. Physical machine preview and supervised stitch-out remain unverified; no machine connects automatically.",
        "target": "Open"
      }
    ],
    "trouble": [
      "Correct or discard invalid fields before Save/Export. Hidden invalid fields stay attached to their original object and vertex identity; selection does not move them.",
      "Raw correction inputs are proposals until Apply. New/Open clears proposals only after successful replacement. Baked geometry is locked; Return to source and discard corrections is explicit and undoable.",
      "Any source change invalidates reviewed output. Reopened files contain source and declared corrections, not trusted saved stitch streams; recompute and accept locally.",
      "Source imports refuse duplicate keys, unsupported fields, nonfinite/out-of-hoop geometry, crossing/degenerate polygons and invalid rails. Narrow fill, excessive commands and unsupported corrections may be refused at compile.",
      "DST encodes movements/color-change order, not RGB. Keep its color-order JSON alongside it. Jumps/trim interpretations vary by machine.",
      "Machine preview, physical stitch-out, printer scaling, native Windows, real browser/CSP and accessibility remain unverified. No fabric or machine compatibility guarantee."
    ]
  },
  "stock": {
    "formats": "CSV opening import; portable .abundance; CSV balances, movement ledger, reservations and counts; complete ledger JSON; inert HTML stock sheet.",
    "steps": [
      {
        "title": "Open the separate practice kit",
        "target": "Open",
        "text": "Download stock-original-opening.csv and the portable Stock practice project from Help. Save existing work before explicitly opening practice; tutorial tips never replace your ledger."
      },
      {
        "title": "Preview opening stock",
        "target": "Import opening CSV",
        "text": "Choose Opening location. Import the supplied stock-original-opening.csv into a fresh ledger, review and Apply opening import. SKU0012 must remain text."
      },
      {
        "title": "Move, reserve and count",
        "target": "Reserve stock",
        "text": "Add a location, receive stock, reserve supplies, transfer available quantities, then fulfill part and release the remainder. Freeze a stocktake, enter one discrepancy and Post reviewed stocktake. Any later ledger event makes the old unposted count stale."
      },
      {
        "title": "Save and inspect history",
        "target": "Save project",
        "text": "Undo and redo a substantive movement or count. Save project. Explicit reversals/corrections remain separate domain records; workspace history is not a compliance audit."
      },
      {
        "title": "Export current balances",
        "target": "Export balances CSV",
        "text": "Export balances, movement ledger, reservations, stocktakes, JSON and the readable HTML stock sheet. Use Export original to recover the unchanged input CSV. Compare integer quantities and transfer conservation."
      },
      {
        "title": "Reopen the ledger",
        "target": "Open",
        "text": "Open the saved project and inspect reconstructed balances, retained originals, reservations and frozen stocktakes. No order is placed, and no cost or valuation is calculated."
      }
    ],
    "trouble": [
      "200 SKUs,20 locations,2,000 events,300 reservations,20 stocktakes;512KiB retained sources;8MiB project. Limits do not necessarily combine.",
      "Quantities have immutable0–3 decimal precision per SKU. Nonnegative available stock is enforced. No unit conversion, pricing, medication inventory, valuation, tax or automatic ordering.",
      "Stale stocktakes cannot post. Freeze a new count and review it. Insufficient available quantity refuses the complete operation.",
      "Original CSV requires sku,name,unit,precision,quantity. Formula-sensitive CSV text receives a protective apostrophe; matching import removes one.",
      "Browser/Electron, Windows dialogs, real accessibility/IME and physical operations are not verified."
    ]
  },
  "words": {
    "formats": "Strict UTF-8 TXT selection; portable .abundance; frequencies and KWIC CSV; source-anchored JSON; inert HTML; exact-original/current-text TXT recovery.",
    "steps": [
      {
        "title": "Open the separate original corpus",
        "target": "Open",
        "text": "Download the portable Words practice and five words-day-one.txt through words-day-five.txt files from Help. Save work before explicitly opening practice."
      },
      {
        "title": "Import an exact text",
        "target": "Import UTF-8 text",
        "text": "Select one supplied TXT in a fresh corpus, set its section/group, inspect the preview and Apply text import. Repeat for other diaries. Exact originals stay separately exportable."
      },
      {
        "title": "Build a bounded token query",
        "target": "Token query",
        "text": "Use is|are|was|were gap{0,3} *ing. Preview case/apostrophe/hyphen policy on a selected document and Analyze corpus. Review frequencies, dispersion and exact UTF-16/UTF-8 source anchors. Annotate a literal suffix false positive."
      },
      {
        "title": "Save queries and evidence",
        "target": "Save project",
        "text": "Save query and policy. Undo/redo a policy or source edit, Analyze again, then Save project. Source edits cannot invalidate retained evidence anchors silently."
      },
      {
        "title": "Export the concordance",
        "target": "Export frequencies CSV",
        "text": "Export frequencies, KWIC CSV, concordance JSON and inert HTML. Truncated results are visibly labelled. Export exact originals separately; current edited text is another export."
      },
      {
        "title": "Reopen and recompute",
        "target": "Open",
        "text": "Open the saved corpus, select a saved query, and Analyze corpus. Exact source text, policy, query definitions and annotations are preserved; analyses are freshly recomputed."
      }
    ],
    "trouble": [
      "50 documents;150,000 UTF-16 units including exact originals;40,000 tokens;10,000 emitted hits;2million matching operations;4MiB project.",
      "Pinned Unicode15 letter/mark/number runs with optional internal apostrophes/hyphens. No NFC normalization or general linguistic segmentation.",
      "Queries use literals, alternatives, prefix*, *suffix and bounded gap{min,max};1–8 atoms, at most two gaps0–10. No regex or scripts.",
      "Stopwords only exclude frequency entries; query positions retain them. Aliases are exact acyclic normalized-token mappings. One section per source, never cross-document matching.",
      "Real browser/Electron, native dialogs, IME/assistive technology and visual review remain unverified."
    ]
  },
  "check": {
    "formats": "Typed requirements/cases JSON; exact UTF-8 TXT evidence; portable .abundance; results CSV; full records JSON; inert HTML; evidence ZIP with SHA-256 inventory.",
    "steps": [
      {
        "title": "Open the separate original practice",
        "target": "Open",
        "text": "Download the portable Check practice, check-original-cases.json and check-original-log.txt from Help. Save work before explicitly opening practice."
      },
      {
        "title": "Import authored manual cases",
        "target": "Import cases JSON",
        "text": "Preview check-original-cases.json in an empty notebook and Apply case import. Add a requirement, author action => expected steps and save an approved local revision."
      },
      {
        "title": "Freeze definitions and record evidence",
        "target": "Freeze manual run",
        "text": "Freeze a run for practice-1, then edit a case and save a new revision. The run keeps its earlier definition. Record failed/passed/blocked/not-run outcomes, import the original text log, link its evidence ID and an internal defect. Start a new attempt to retain earlier failure history."
      },
      {
        "title": "Save a complete notebook",
        "target": "Save project",
        "text": "Close and freeze run. A correction creates a linked successor run; it cannot rewrite the closed run. Undo/redo and Save project retain definitions, results, attempts and evidence."
      },
      {
        "title": "Export and compare",
        "target": "Export results CSV",
        "text": "Export results CSV, records JSON, report HTML and evidence ZIP. Compare selected runs: changed definitions are labelled not like-for-like. ZIP includes exact text bytes and SHA-256 inventory; hashes are not authenticity proofs."
      },
      {
        "title": "Reopen frozen records",
        "target": "Open",
        "text": "Open the saved notebook and verify old expected results, attempt histories, honest denominators and exact evidence. No software execution or external issue filing occurs."
      }
    ],
    "trouble": [
      "100 cases;500 revisions/1,000 total revision steps;10 runs;2,000 result events;25 evidence files/250,000 characters;2MiB project.",
      "Each approved or draft definition save creates a new revision. Run snapshots freeze exact revisions. Retest creates a new attempt, preserving prior changes.",
      "Only TXT evidence is currently admitted; PNG/screenshots, executable attachments, remote links, credentials and machine execution are unsupported.",
      "Not-run and blocked steps remain in denominators. Local approval is not organizational signoff; no regulated, legal or medical validation promise.",
      "Browser/Electron, Windows dialogs, real keyboard/IME/accessibility/HiDPI remain unverified."
    ]
  },
  "compass": {
    "formats": "Strict UTF-8 construction JSON preview/accept, portable Abundance Save/Open. Exact original JSON recovery. SVG final/selected-step diagram, student/worked vector PDF, text lesson sequence and JSON coordinate/dependency report.",
    "steps": [
      {
        "title": "Open a safe practice copy",
        "target": "Open",
        "text": "In Help, download compass-practice.abundance and garden-gate.json. Save your own work, then explicitly Open the portable practice project. Nothing loads automatically. Find where to place a post equally far from two gate endpoints."
      },
      {
        "title": "Inspect the free endpoints",
        "target": "Add constructor",
        "text": "Select A in Construction dependencies. Change Free point x or y, or drag its green point. Arrow keys move a focused free point by 0.1; Shift moves by 1. Add constructor creates a typed point, line, circle or dependent object. Named, type-aware selectors choose the existing points, lines or circles used as sources. Advanced node JSON remains a separate explicit option."
      },
      {
        "title": "Follow branches and test degeneracy",
        "target": "Worked sheet",
        "text": "Choose Worked sheet, then 2. Transfer radius AB and 3. Name both intersections. Both arcs use radius endpoints A,B. P is left of directed A→B; Q is right. Joining P,Q constructs the bisector. Set A x to 3, matching B at y0: undefined ancestors propagate. Undo restores the same branches. Arc intersections use complete supporting circles."
      },
      {
        "title": "Save the editable lesson",
        "target": "Save project",
        "text": "Edit the question, step titles and notes. Set step student visibility, edit visible IDs and Apply visibility. Move step up reorders the sequence. Student sheet begins with given endpoints; worked sheets show construction steps. If you opened practice, choose Save as for a fresh filename; use Save project for later edits to that copy; use Undo/Redo to inspect accepted history, then save the version you want."
      },
      {
        "title": "Export independently checked evidence",
        "target": "Export coordinate report",
        "text": "Export coordinate report contains typed dependencies, branch conventions and freshly derived statuses. Export diagram SVG, worked PDF, student PDF and lesson steps as separate fresh outputs. Exact original recovery exports garden-gate.json unchanged. These are educational constructions, not theorem proofs or survey measurements."
      },
      {
        "title": "Reopen and continue the construction",
        "target": "Open",
        "text": "Open your saved project explicitly, keeping current work if prompted. Confirm the free points, stable branches, labels and lesson steps, then move an endpoint again. Undefined states must recover deterministically. Downloading a practice file never replaces your work."
      }
    ],
    "trouble": [
      "Undefined geometry is omitted from the diagram and identified in node inspectors and the coordinate report; its descendants remain explicitly undefined until sources recover.",
      "Raw JSON proposals require Preview/Apply or Apply node definition. Saving does not silently accept proposals. Failed edits retain exact text.",
      "Arcs specify a counterclockwise visual sweep; intersection constructors use their supporting circles. Tangencies retain both selected branch IDs at the same point.",
      "At most 500 nodes, depth 100, 50 steps and 1 MiB project. UTF-8 raw imports are at most 512 KiB. Unsupported scripts, formulas, .ggb and external references refuse.",
      "PDF labels use ASCII fallback and circles/arcs use cubic approximations. Dense labels can overlap. Real-browser, Windows, accessibility, IME, HiDPI and physical print quality remain unverified."
    ]
  },
  "sift": {
    "formats": "RIS TAG-line subset, CSL-JSON year-only subset, selected PDF attachments for exact recovery only; portable .abundance; audit JSON, quoted CSV, included RIS/CSL, SVG flow.",
    "steps": [
      {
        "title": "Download separate practice",
        "target": "Open",
        "text": "Download sift-practice.abundance, sift-batch-a.ris, sift-batch-b.json and sift-mock-report.pdf. Save current work, then explicitly open practice; Help never replaces your document."
      },
      {
        "title": "Import an immutable batch",
        "target": "Import RIS or CSL JSON",
        "text": "In a new review enter search source/date/literal query, select a practice batch, inspect the preview and Apply reviewed import. Repeat for the other batch. Recover exact originals whenever needed."
      },
      {
        "title": "Reconcile records and human decisions",
        "target": "Queue filter",
        "text": "Inspect explainable duplicate proposals. Select the second copy of the design report, enter the first record ID and a reason, and Confirm duplicate with reason. Keep the distinct follow-up report separate; one study may have two reports. Select a record, record title/abstract include/exclude/maybe with a reason. For included records use sought, retrieved or unavailable, then full-text include/exclude. Attach the selected original mock PDF; inclusion needs a manually identified study label."
      },
      {
        "title": "Reassess and save the review",
        "target": "Save project",
        "text": "Add a field, human observation, page and exact quote. Publish changed criteria to flag past decisions. Reassess flagged title/abstract and full-text decisions explicitly. Undo/Redo preserves decision history; Save project and Open restore the complete review. If you opened practice, choose Save as to create a fresh project copy; Save project updates the currently opened file."
      },
      {
        "title": "Export reconciled accounting",
        "target": "Export audit JSON",
        "text": "Export audit JSON, decisions/extraction CSV, included RIS/CSL and original flow SVG. Counts distinguish records, reports and studies. Conflicts block included-reference export. These are human records, not methodology certification."
      },
      {
        "title": "Reopen and check retained evidence",
        "target": "Open",
        "text": "Open your saved review explicitly. Confirm criteria versions, unresolved reassessments, record/report/study distinctions and extraction anchors. Recover exact bibliography and mock PDF originals separately. Current work is replaced only after explicit confirmation."
      }
    ],
    "trouble": [
      "600 records,10 batches,2,400 events,40 criterion versions,1,000 extraction rows,512KiB bibliography originals,4 PDFs/4MiB combined,8MiB project.",
      "Duplicate confirmation never merges distinct reports automatically. Search queries and DOI strings are inert metadata.",
      "New title/abstract decision resets full-text status but preserves earlier events. Criterion changes flag old decisions; no consensus is fabricated.",
      "CSV protects formula-sensitive text. PDF contents are not rendered or authenticated. Single reviewer only.",
      "Real browser/Electron, Windows dialogs, screen readers/IME and visual quality remain unverified."
    ]
  },
  "mark": {
    "formats": "Explicit RGB/RGBA8 noninterlaced PNG selection; bounded COCO boxes/single simple polygon subset with manual image mapping; portable .abundance; COCO JSON and dataset ZIP; previewed YOLO detection ZIP.",
    "steps": [
      {
        "title": "Open the separate practice kit",
        "target": "Open",
        "text": "Download mark-practice.abundance, mark-garden.png, mark-empty.png and mark-import.json. Save current work and explicitly open the practice project. Help never silently replaces work."
      },
      {
        "title": "Select and identify images",
        "target": "Select PNG image",
        "text": "Select one supported local PNG, inspect its dimensions and Apply selected image. Image IDs, not filenames, own objects; the practice project deliberately gives two selected images the same metadata name."
      },
      {
        "title": "Annotate and map an import",
        "target": "Next unresolved image",
        "text": "Choose an image. Stage two box corners or ordered polygon vertices and Apply staged shape, or enter numeric coordinates. Select an object to edit its box or polygon vertices. Zoom/scroll changes only display. Undo/Redo restores objects. Select mark-import.json. Choose the correct already selected image for COCO image71 despite ambiguous names, inspect classes/dimensions, then Apply mapped COCO annotations. No filename is opened as a path."
      },
      {
        "title": "Review and save annotations",
        "target": "Save project",
        "text": "Mark the empty image reviewed-negative and the annotated image complete-with-objects. Edits reset review to unreviewed. Save project and Open it again; exact PNG and COCO originals remain recoverable."
      },
      {
        "title": "Export mapping and reviewed formats",
        "target": "Export dataset mapping JSON",
        "text": "Export dataset mapping JSON to inspect stable source/class/object associations. Then Preview COCO mapping before its JSON/ZIP output, or Preview YOLO mapping and loss before its detection ZIP. Every polygon-to-box conversion is explicit. Export COCO JSON or ZIP. Review YOLO zero-based class indices and every polygon-to-box conversion before exporting. ZIP contains controlled names, exact selected PNGs, labels and manifest. Continuous polygon area differs from consumer raster area."
      },
      {
        "title": "Reopen exact sources and coordinates",
        "target": "Open",
        "text": "Open the saved project explicitly. Verify the reviewed-negative image, annotations and intrinsic-pixel coordinates, then recover exact PNG/COCO originals using their controls. Re-preview format mappings after edits; saved claims never waive verification."
      }
    ],
    "trouble": [
      "32 PNG images,1024 pixels/side,4MiB source bytes,1,000 objects,10,000 vertices,128 vertices/polygon,100 classes,1MiB COCO sources and8MiB project.",
      "PNG ancillary chunks are restricted by the reviewed decoder. JPEG/EXIF, RLE/crowd/holes/keypoints/multipart polygons are unsupported.",
      "Coordinates use source pixels with top-left edge origin; no silent snapping/clipping. Polygon self-crossings/touches and out-of-bounds objects refuse.",
      "COCO area/bbox describe continuous geometry; official raster masks can have different area/bbox. YOLO polygons explicitly lose shape.",
      "Actual browser pointer/HiDPI, screen readers/IME, Electron/Windows and downstream training utility remain unverified."
    ]
  },
  "math": {
    "formats": "Portable .abundance notebook; restricted UTF-8 source .txt/.tex; narrow Presentation MathML .mml/.mathml/.xml. Fresh MathML, source and self-contained SVG outputs. Original selected-file bytes have direct recovery controls.",
    "steps": [
      {
        "title": "Open a separate practice copy",
        "target": "Open",
        "text": "Download math-practice.abundance and math-garden-import.mml from Help. Save your work, then deliberately Open the practice copy. Nothing replaces your current notebook automatically."
      },
      {
        "title": "Edit a fraction and matrix directly",
        "target": "Insert fraction",
        "text": "Select Bed density and select numerator p or denominator a to type a different ASCII letter. Insert fraction creates an editable1/2 at the selection. Select Sample grid and change one cell. Use the Greek selector, Insert bounded sum and either integral palette. Update Explanation, then duplicate or reorder an equation."
      },
      {
        "title": "Review a real MathML import",
        "target": "Import Presentation MathML",
        "text": "Choose math-garden-import.mml, inspect the restricted source preview and Apply imported equation. Try math-rejected-reference.mml separately: it is refused and retained as exact original bytes, never interpreted as external content."
      },
      {
        "title": "Undo and save the notebook",
        "target": "Save project",
        "text": "Undo and Redo restore accepted equation trees through shared history. Save project captures focused math edits. Restricted source is an explicit Apply proposal. Unsupported raw text stays available for copying until deliberately discarded."
      },
      {
        "title": "Export independent editable and vector files",
        "target": "Export selected MathML",
        "text": "Export selected MathML and SVG to fresh files. MathML remains structured notation; SVG contains only glyph paths and explicit baseline metadata. Exact imported bytes have their own original-recovery exports."
      },
      {
        "title": "Reopen and inspect the result",
        "target": "Open",
        "text": "Open your saved Abundance project to continue editing. Separately open exported MathML in LibreOffice Math and inspect the editable fraction, scripts and matrix. Native visual/font/keyboard acceptance remains unverified here."
      }
    ],
    "trouble": [
      "ASCII letters/digits, enumerated Greek alpha/beta/gamma/delta/theta/lambda/mu/pi/sigma/phi/omega/Delta/Sigma/Omega, + - = ( ) , ± × ÷ ∞, fractions, roots, scripts, bounded sums, integrals and rectangular matrices. General TeX/macros, other glyphs, accents, HTML/CSS/URLs and annotations refuse.",
      "At most32 equations,128 nodes each, depth16,6×6 matrices,8 originals,64 KiB per source and256 KiB originals total;2 MiB project and1 MiB output. Five-second cancellable local SVG worker.",
      "A refused import within the source limit remains an exact original with recovery export. Refused mathfield text stays inert for copying within the source limit. Correct or discard invalid entries before Save or Export.",
      "Native caret geometry, real-browser/Electron/CSP/font loading, accessibility/IME/HiDPI and physical print layout remain release gates. This is a private engineering preview."
    ]
  },
  "face": {
    "formats": "Selected uncompressed static TrueType .ttf only, 2 MiB/file, 32 font records and 8 MiB aggregate. Native .abundance portable projects include exact bytes. Output coverage CSV, outlined SVG/PDF and direct original .ttf copies. Up to four fonts per comparison, 256 scalar sample, 50 glyphs/coverage rows per page, 5-second worker deadline. Latin/Cyrillic LTR and mapped single combining marks after explicit NFC normalization. No CFF/OTF, variable axes, color/bitmap, collections, WOFF or complex scripts.",
    "steps": [
      {
        "title": "Start with original selected fonts",
        "text": "Save current work, then download face-practice.abundance from Help and explicitly Open it. The separate project contains two original Type-artwork TrueType files. Downloading practice never replaces current work. Raw TypeSeed-1.ttf and TypeSeed-2.ttf are also supplied.",
        "target": "Open"
      },
      {
        "title": "Preview an independently licensed font",
        "text": "Download the supplied DejaVuSans.ttf and its DejaVu-LICENSE.txt. Choose Import selected TTF, select that file, inspect names, byte hash and coverage, read the copying-rights reminder, then Apply selected font import. This never installs a font. Reimporting the same file identifies a byte-exact duplicate before acceptance.",
        "target": "Import selected TTF"
      },
      {
        "title": "Organize a comparison",
        "text": "Select a font, add tags or a display label, and use Add to comparison or Remove from comparison. Keep up to four fonts checked. Enter a New collection name and Create collection from comparison. Family names are not byte identity; the original two fonts deliberately share names but have different advances.",
        "target": "Create collection from comparison"
      },
      {
        "title": "Inspect, edit and save",
        "text": "Set Comparison sample to office AV Привет мир and select DejaVuSans.ttf. Inspect selected font and examine glyph IDs, scalar clusters, coverage and missing boxes. Try a Latin-only sample to compare ligature settings, then mapped x plus acute with DejaVu. Add tags or notes, Save project and try Undo/Redo. Save preserves fonts, collections, text and feature settings; unapplied collection names remain proposals.",
        "target": "Save project"
      },
      {
        "title": "Recover and export fresh evidence",
        "text": "Export exact original recovers selected bytes. Choose Export selected coverage CSV; it decodes current selected bytes afresh. Export comparison SVG/PDF similarly regenerates current outlines for checked fonts. Choose fresh filenames. Sparse-font missing marks are refused, while ordinary missing letters show real .notdef boxes. Copy/share portable projects only with the necessary font rights.",
        "target": "Export selected coverage CSV"
      },
      {
        "title": "Reopen and verify again",
        "text": "Explicitly Open the saved project. Results start unverified; inspect or compare again to derive metadata from the exact original bytes. Check the deliberate missing box in AO g?, tags, collection membership, feature settings and exported specimen. No browser fallback or whole-language compatibility claim is made.",
        "target": "Open"
      }
    ],
    "trouble": [
      "A box means the selected font lacks that character; other installed fonts never fill the gap. Coverage excludes glyph-zero mappings and is separate from shaping success.",
      "Unsupported profile or missing combining mark: preserve/recover original bytes and choose a supported sample/font. Face does not silently simplify unsupported scripts or variations.",
      "Open resets proof authority. Saved hashes/names cannot bypass source decoding; inspect again before relying on derived results.",
      "Imported font bytes are included in portable projects. Embedding flags are information, not license permission. DejaVu and original practice notices are supplied separately.",
      "Source/worker and independent artifact checks pass in cloud QA; real Windows dialogs, browser/Electron, accessibility/IME/HiDPI and physical print remain unverified."
    ]
  },
  "poly": {
    "formats": "Strict selected OBJ positive v/vt/f subset; opaque noninterlaced RGB/RGBA8 PNG. Native portable .abundance state; self-contained GLB, UV-aware OBJ, correspondence JSON, CPU preview PNG and exact originals. 256 vertices, 512 faces, 3072 corners, 64 corners/face, eight materials, two 256×256 textures, 1 MiB per original and 6 MiB state. CPU preview has a 12-million candidate-pixel budget and five-second worker deadline.",
    "steps": [
      {
        "title": "Open a separate original practice copy",
        "target": "Open",
        "text": "Save your current work. In Help, download poly-practice.abundance, seed-kiosk.obj and seed-sign.png. Explicitly Open the practice project. Downloads never replace current work. The practice begins with a genuine editable asymmetric six-face block and one original four-color sign texture."
      },
      {
        "title": "Inspect the mesh and import preview",
        "target": "Import OBJ preview",
        "text": "Select f9 in the face list and compare its orange model outline, UV patch and corners. Try importing seed-kiosk.obj; inspect Review replacement model, then Discard import preview to keep the practice. The keyboard lists and explicit IDs also reach vertices and edges. Refresh accepted preview shows depth-tested CPU texture sampling."
      },
      {
        "title": "Make real topology changes",
        "target": "Extrude selected face",
        "text": "Select f12, set Extrusion distance to 0.75, then Extrude selected face. Select f14 and Split selected face using v6 and v3. Set Selection kind to vertex and Selected IDs to v2, Select listed elements, enter Move X 0.2 with Move Y/Z zero, then Move selected vertices. Try Undo and Redo to confirm these are editable topology changes. Invalid nonplanar or nonmanifold edits refuse atomically."
      },
      {
        "title": "Edit UV corners and materials",
        "target": "Save project",
        "text": "Select f9. Change UV v5 U to 1, v6 U to 0, v7 U to 0 and v8 U to 1. Save project flushes all authoritative corner drafts and the linked preview flips the sign. Invalid UV text stays visible and blocks Save/Export. Try the material texture/color controls or explicit planar projection and UV move/rotation/scale actions. Unapplied extrusion/transform forms remain separate proposals."
      },
      {
        "title": "Export current geometry and recover originals",
        "target": "Export textured GLB",
        "text": "Export textured GLB to a fresh destination for the real geometry, corner UVs and embedded PNG. Export geometry OBJ preserves editable polygon faces and UVs but does not write material libraries. Recover exact original OBJ and Recover exact texture t0 return unchanged selected bytes. Export CPU preview PNG gives the current accepted model view, not unapplied proposals."
      },
      {
        "title": "Reopen and verify your asset",
        "target": "Open",
        "text": "Save, then explicitly Open the saved project. Inspect topology, sign UVs and material references; preview decodes embedded pixels again. Open the emitted GLB in an independent consumer such as Blender. Shared Undo/Redo is bounded session history; the portable project stores current editable geometry and exact originals, not a parametric replay log."
      }
    ],
    "trouble": [
      "Only planar strictly convex faces are supported. Concave, repeated, collinear, crossing and nonplanar faces, invalid indices and nonmanifold fans refuse; no automatic repair or cross-face intersection guarantee.",
      "OBJ material libraries, external URLs/paths, normals, negative indices, scripts, animations and arbitrary shaders are refused. Review imports before Apply; originals are never overwritten.",
      "Native topology is authoritative edited content. Source references describe correspondence and retained originals, not authorship authenticity. Shell history is transient and byte-bounded; reopening keeps the current model.",
      "Transparent PNG is outside this opaque CPU-preview profile. PNG dimensions/CRC are checked synchronously; full decompression happens on import/preview/export. Forged embedded compressed data refuses output and its exact original remains recoverable.",
      "Invalid authoritative fields block Save/Export. Explicit Apply forms are unapplied proposals and survive failed actions. New/Open replacement clears document-owned drafts only after confirmation.",
      "Real Windows dialogs, browser/Electron/CSP, accessibility/IME/HiDPI, physical or game-engine suitability remain unverified. This is a private engineering preview, not a Blender replacement."
    ]
  },
  "accounts": {
    "formats": "Exact CSV statement input; portable .abundance project; strict hledger journal; split CSV; UTF-8 label manifest; readable review PDF; exact original source recovery.",
    "steps": [
      {
        "title": "Open separate original practice",
        "target": "New",
        "text": "Download repair-club.accounts.abundance and repair-club-statement.csv from Help. Save your existing work, then explicitly Open the practice project. Tutorials never replace a book automatically. Inspect founding equity and the typed account tree."
      },
      {
        "title": "Enter balanced splits",
        "target": "Add account",
        "text": "Stay in the opened practice book. Inspect the named account tree and existing balances. To try a harmless chart edit, enter a New account name, choose expense as New account type, then Add account. Existing posted account types and currency units cannot be changed."
      },
      {
        "title": "Edit and review the actual workflow",
        "target": "Refresh reports",
        "text": "In this same practice book, enter a description for a small supplies purchase. Choose Workshop supplies for Split 1 account with amount 1.00, and Club bank for Split 2 account with amount -1.00. Choose Create draft, inspect the zero imbalance, then Post balanced draft. Refresh reports: after this one 1.00 purchase, expense is 46.00, profit is 104.00 and Club bank is 924.00 USD. The new bank posting makes the earlier frozen comparison stale; do not treat its original closing amount as current. Optional separate exercises: use a reasoned reversal/correction, or start a separate saved practice book for Choose statement CSV and explicit mapping/matching. Imports never create journals automatically, and outstanding rows require explicit review."
      },
      {
        "title": "Save a separate practice copy",
        "target": "Save project",
        "text": "Because you opened the downloaded practice project, choose Save as to create a fresh .abundance copy. Wait for confirmation, then use Save project for later edits to that copy. Save project alone updates the currently opened project and does not ask for a new filename. Save keeps applied state; unfinished Add/Apply/import proposals are not silently submitted. Keep exact originals and earlier exports."
      },
      {
        "title": "Export independently readable outputs",
        "target": "Export split CSV",
        "text": "Choose Export split CSV for the separate current output. Export the strict journal, split CSV, label manifest and review PDF. Journal tokens are stable generated identities; the manifest retains names. Recover the original CSV exactly. Actual hledger and independent Decimal tests reconstruct these outputs; they are not professional bookkeeping, tax or compliance certification."
      },
      {
        "title": "Reopen and verify",
        "target": "Open",
        "text": "Choose Open and select the saved .abundance project. Confirm only after saving or intentionally discarding current work. Check edits, exact originals and relevant frozen snapshots; rerun current analysis after history or source changes."
      }
    ],
    "trouble": [
      "64 accounts;100 journals;400 splits;96 statement rows;4 reconciliation revisions;56KiB originals. Engine-only higher caps are not the mounted app profile.",
      "Signed decimal amounts use the immutable currency precision0–3. Correct invalid pending fields or discard that exact retained field; Save never silently applies Add/import proposals.",
      "Every effective bank posting must be matched or explicitly outstanding. Frozen book opening must equal statement opening. Reconciliation is local and can become stale after corrections.",
      "Worker imports and exports are cancellable with a5-second deadline. A cancelled or superseded operation cannot publish output. PDF unsupported characters refuse rather than substitute.",
      "No real-bank connection, payments, tax, payroll, compliance or financial advice. Native Windows, visual/HiDPI, keyboard/IME, accessibility and installed-offline acceptance remain unverified."
    ]
  },
  "shift": {
    "formats": "Exact UTF-8 constraints JSON import/recovery; native .abundance project; team/per-person CSV/PDF; per-person RFC5545 ICS.",
    "steps": [
      {
        "title": "Open separate practice",
        "target": "New",
        "text": "Download shift-original-constraints.json and the native Shift practice project from Help. Save existing work, then explicitly Open practice. Tips never replace your plan. Six fictional people cover 13 of 14 requirements; Remote table is deliberately uncovered."
      },
      {
        "title": "Inspect people and availability",
        "target": "Add person",
        "text": "In the opened practice select Edit Aster and inspect target/max planned hours, named roles and explicit-offset availability. Edit a target value for the core exercise. Add person is an optional creation route, also available in a new empty plan. No reasons, wages or sensitive employee attributes are collected. A constraint edit makes accepted assignments stale."
      },
      {
        "title": "Edit and review the actual workflow",
        "target": "Run bounded suggestion",
        "text": "For the main practice path keep the existing required slots. Run bounded suggestion, review uncovered slots, and explicitly Apply reviewed proposal. Feasible/incomplete status is independently checked; a timeout is not infeasibility. Enter New snapshot name and Freeze current schedule if you want a later comparison or private ICS export. Optional slot-creation exercise: choose named role/location and explicit start/end offsets; the overnight practice crosses New York fall-back, ending at -05:00 after starting at -04:00. Gaps and mismatched offsets are refused. Manual assignments and paired swaps are atomic. Saved optimality labels are never trusted proof; rerun to review current suggestions."
      },
      {
        "title": "Save a separate practice copy",
        "target": "Save project",
        "text": "Because you opened the downloaded practice project, choose Save as to create a fresh .abundance copy. Wait for confirmation, then use Save project for later edits to that copy. Save project alone updates the currently opened project and does not ask for a new filename. Save keeps applied state; unfinished Add/Apply/import proposals are not silently submitted. Keep exact originals and earlier exports."
      },
      {
        "title": "Export a private snapshot",
        "target": "Export CSV",
        "text": "Choose Export CSV for the separate current output. Export team or per-person CSV/PDF. For ICS choose one person and an immutable named frozen snapshot. Each newly frozen snapshot has a separate calendar identity, fixed SEQUENCE0 and retained creation time. Other people and private availability/target hours are omitted. Recover original returns unchanged input bytes. These files do not send messages or update an existing calendar. Successive snapshots can duplicate appointments: import into a separate calendar or manually delete the old snapshot in your calendar app."
      },
      {
        "title": "Reopen and verify",
        "target": "Open",
        "text": "Choose Open and select the saved .abundance project. Confirm only after saving or intentionally discarding current work. Check edits, exact originals and relevant frozen snapshots; rerun current analysis after history or source changes."
      }
    ],
    "trouble": [
      "12 people, 60 slots over 28 days, 240 intervals, 10 roles, 5 locations and 5 frozen schedules; 256 KiB exact originals and 8 MiB project.",
      "Manual assignments must satisfy all current pins, roles, locations, availability, overlap, rest and maximum planned hours. These are user constraints, not labor-law rules.",
      "Worker proposals are separate until Apply. Serialized proof is conservatively downgraded; feasible means full coverage and incomplete may be a valid partial schedule.",
      "PDF embeds the bundled DejaVu font and refuses unsupported glyphs instead of substituting them. UTF-8 CSV/ICS preserve Unicode.",
      "No notifications, live synchronization, wages, protected attributes, legal compliance or critical-staffing assurance. Browser/Electron, Windows dialogs, GUI, IME, accessibility and real calendar import remain unverified."
    ]
  },
  "copper": {
    "formats": "Portable Abundance Save/Open; exact bounded Copper board JSON preview/apply and original recovery. Genuine RS-274X Gerber / explicit decimal metric Excellon in stored ZIP, manifest, BOM/placement CSV and vector review PDF.",
    "steps": [
      {
        "title": "Open a safe practice copy",
        "target": "New",
        "text": "Download copper-practice.abundance and paper-led.json from offline Help. Save your own work, then explicitly Open the practice project. It is newly authored fictional geometry, not a working or safe electrical circuit. Nothing is loaded automatically."
      },
      {
        "title": "Inspect and author named geometry",
        "target": "Object type",
        "text": "Keep the opened fictional board as the main practice path. In Object type choose components, then select Bottom LED. Inspect its named footprint, mirrored bottom layer and 90-degree rotation. Board size and geometric rules shows millimetres. Optional footprint and pad creation is a separate exercise; it is not required for the following move."
      },
      {
        "title": "Edit and review the actual workflow",
        "target": "Run current DRC",
        "text": "With Object type still components and Bottom LED selected, set Placement x to 27 and y to 14. Apply placement initially refuses attached copper. In Attached copper policy choose Leave routes in place; inspect and reroute opens, then Apply placement. Run current DRC and inspect the resulting open connections; do not interpret an unfinished route as clean. Optional rerouting: change Object type to traces, select the affected segment, and use Apply reroute to change both endpoints atomically. Optional failure experiment: change Object type to vias and alter Drill, then Undo; switch back to components before selecting Bottom LED again. This geometry is not a certified working circuit."
      },
      {
        "title": "Save a separate practice copy",
        "target": "Save project",
        "text": "Because you opened the downloaded practice project, choose Save as to create a fresh .abundance copy. Wait for confirmation, then use Save project for later edits to that copy. Save project alone updates the currently opened project and does not ask for a new filename. Save keeps applied state; unfinished Add/Apply/import proposals are not silently submitted. Keep exact originals and earlier exports."
      },
      {
        "title": "Export and reopen the actual project",
        "target": "Export placement CSV",
        "text": "Choose Export placement CSV for the separate current output. Export exchange ZIP writes genuine Gerber, separate plated/nonplated Excellon, manifest, placement/BOM CSV and a review PDF for the current accepted source. Reopen your saved project and rerun checks; saved status is never trusted. Export original paper-led.json recovers exact selected source bytes. No fabrication, ordering, equipment connection or energizing is provided."
      },
      {
        "title": "Reopen and verify",
        "target": "Open",
        "text": "Choose Open and select the saved .abundance project. Confirm only after saving or intentionally discarding current work. Check edits, exact originals and relevant frozen snapshots; rerun current analysis after history or source changes."
      }
    ],
    "trouble": [
      "Only two copper layers, rectangular boards, quarter-turn components and straight/45-degree routes. No pours, arcs, slots, blind vias, arbitrary imported part libraries, impedance or electrical/current/thermal assurance.",
      "Drilled copper supports its own annulus and same-net centre-anchored radial routes reaching the annulus. Other drill intersections are explicitly unsupported.",
      "Every input cancels previous DRC/export work. Worker deadline is five seconds; Cancel terminates. Above 100,000 candidate pairs, checks are incomplete, not clean.",
      "Focused valid authoritative fields flush on Save; invalid fields remain visible and block Save/history/export. Add/Apply proposals are separate and never submitted by Save. Resolve or discard retained hidden fields explicitly.",
      "At most 50 components, 250 placed pads, 100 nets, 500 routes, 100 vias, 50 holes; at most 600 expanded copper/drill/silk primitives and 100 by 100 mm. Exact original JSON max 1 MiB; project 4 MiB. PDF labels use ASCII fallback, and drill files are authoritative for hole geometry.",
      "Real Windows, GUI/native dialogs, keyboard/IME/accessibility/HiDPI, visual print and physical manufacture are unverified. Semantic DOM and artifact parser tests cannot establish those gates."
    ]
  },
  "conduit": {
    "formats": "Exact CSV and narrow flat uncompressed PLAIN V1/V2 Parquet input/recovery; native .abundance; genuine Parquet, typed JSON, CSV and recipe bundle output.",
    "steps": [
      {
        "title": "Open separate original practice",
        "target": "New",
        "text": "Download garden.conduit.abundance and the two original CSV files from Help. Save existing work, then explicitly Open the native practice. Tips never replace your project. These fictional deliveries include a 9,007,199,254,740,993 quantity, empty text, formula-like text and an unmatched bed."
      },
      {
        "title": "Inspect named sources and exact types",
        "target": "Choose CSV or Parquet",
        "text": "In the opened practice, use Sources and version replacement to inspect Garden deliveries CSV and recover its exact original. Choose CSV or Parquet is for an optional separate import preview; it is not needed to run the existing graph. Named labels identify sources and steps, while stable field IDs retain their bindings."
      },
      {
        "title": "Edit and review the actual workflow",
        "target": "Run current pipeline",
        "text": "In Named pipeline steps select Full garden match, then Edit selected step. Choose All left rows or Matching rows, retain the explicit many-left-to-one-right policy, and Apply step changes. Select the desired Output step if needed, choose Run current pipeline, and inspect row counts, typed values, rejects and original-row lineage. Null join keys never match. Optional separate exercises: use Build or edit a transformation to add a typed filter/group/output step, or preview a new source version and explicitly review stable-field mappings before applying it. Any edit or history action invalidates previous results; rerun before exporting computed data."
      },
      {
        "title": "Save a separate practice copy",
        "target": "Save project",
        "text": "Because you opened the downloaded practice project, choose Save as to create a fresh .abundance copy. Wait for confirmation, then use Save project for later edits to that copy. Save project alone updates the currently opened project and does not ask for a new filename. Save keeps applied state; unfinished Add/Apply/import proposals are not silently submitted. Keep exact originals and earlier exports."
      },
      {
        "title": "Export actual current files",
        "target": "Export recipe bundle with originals",
        "text": "Choose Export recipe bundle with originals for the separate current output. Run the current pipeline. Inspect paginated output, reject evidence and original-row lineage. Export genuine Parquet, typed JSON, spreadsheet-safe CSV or a recipe bundle with originals. Parquet column names are stable IDs; labels are in JSON/bundle. CSV collapses null and quotes formula-like text with a safety prefix, so use Parquet/typed JSON for exact typed fidelity."
      },
      {
        "title": "Reopen and verify",
        "target": "Open",
        "text": "Choose Open and select the saved .abundance project. Confirm only after saving or intentionally discarding current work. Check edits, exact originals and relevant frozen snapshots; rerun current analysis after history or source changes."
      }
    ],
    "trouble": [
      "128 KiB total exact originals, 2,000 retained input rows, 12,000 input cells, 8 source identities, 16 retained revisions and 24 graph steps. Combined engine live-cache/lineage/product caps can refuse sooner.",
      "Only flat UTF8, BOOLEAN, INT64 and DOUBLE. No compression, nested fields, dictionaries, sorting metadata or nonempty statistics. Parquet field IDs use bounded ASCII identifiers.",
      "A display-label rename cannot repair a missing stable field. Edit dependent selections or remove dependent steps before changing upstream shape. Join field IDs must be distinct; same-schema Parquet sources can be stacked or anti-joined.",
      "Any input/history/open cancels old worker authority. Run again after editing. A blocked cast shows rejected values and original-row references.",
      "Original hashes identify bytes, not authenticity. No SQL, executable expressions, runtime URLs, networking, credentials, publication or external data operation. Private candidate with release null; native/visual/installed acceptance remains unverified."
    ]
  }
};

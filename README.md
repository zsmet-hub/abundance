# Abundance

A suite of 104 local-first application prototypes sharing one source repository.

## Status

Development source only. No production-readiness, signed installer, native Windows verification or universal file-format compatibility is claimed. App-specific limitations are recorded in each source directory. Desktop binary redistribution is a separate release gate.

## Local development

Use Node.js 24 (version 24.15.0 or newer) and npm. Run `npm ci`, then `npm start` for the local catalog. Run `npm run desktop:build` and `npm run desktop:start` for the development desktop shell. These commands create local artifacts; they do not produce an approved public release.

Core checks: `npm run test:catalog`, `npm test`, `npm run test:desktop`, `npm run test:apps`, and `npm run test:tutorials`. Some interoperability tests require optional third-party command-line programs and fixture generation. See `docs/DEVELOPMENT.md` for prerequisites and current validation limits.

## Source layout

- `apps/<id>/`: each app's source, tests, tutorial and limitations
- `packages/`: shared runtime, desktop shell, UI, catalog and tutorials
- `scripts/`: local build and verification tools
- `third-party/`: dependency notices, source/provenance records and known native-distribution limits
- `website/`: separately hosted static catalog, when included

## License

Original Abundance code is licensed under GNU Affero General Public License version 3 only (AGPL-3.0-only); see LICENSE. This grant does not relicense third-party code, fonts, models, citation styles or separately licensed fixtures. See THIRD_PARTY_NOTICES.md and adjacent component notices. The software is provided without warranty.

Source: https://github.com/zsmet-hub/abundance

## Website deployment

The publication source is website/: deploy only its public/ output as a Vercel Other/static project with root directory website, no install command and no build command. Never deploy the repository root. site/ is the local development preview.

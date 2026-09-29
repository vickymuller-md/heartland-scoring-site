# HEARTLAND Scoring Site

Public landing page for the [`heartland-scoring`](https://github.com/vickymuller-md/heartland-scoring) package.

**Live site:** https://scoring.heartlandprotocol.org

## Local verification and version identity

Run `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, then
`HEARTLAND_SCORING_SITE_BUILT=1 npm test` to verify the production HTML.
The version shown in the navigation, calculator and examples comes from the
resolved package lock and is checked against the installed package. It is not
the site's own version or an unpublished candidate in the sibling repository.
Update the package pin only after that release is available on npm; rebuild,
verify and deploy separately. The current local corrections are not a deploy receipt.

The package entry point requires Zod. Use `npm install heartland-scoring zod`.
The calculator is a synthetic demonstration with complete Boolean examples;
unchecked boxes do not represent unknown clinical inputs. The framework remains
proposed pending validation, with no authorization for patient care or PHI.

The underlying [Cureus article](https://doi.org/10.7759/cureus.104817),
[Toolkit v3.3](https://doi.org/10.5281/zenodo.19101219) and historical
[software v1.0.0 archive](https://doi.org/10.5281/zenodo.19634995) are distinct
works. Those archives do not identify future package versions or this site's
current checkout. Article publication does not establish software peer review.

## Software preservation

Software Heritage snapshot (archived 2026-08-25): [`swh:1:snp:d065da40d3ef68cdb8bbd33ca18125a712bbc3ce`](https://archive.softwareheritage.org/swh:1:snp:d065da40d3ef68cdb8bbd33ca18125a712bbc3ce/)

This persistent SWHID identifies the repository snapshot captured on that date; archival does not imply endorsement or validation.

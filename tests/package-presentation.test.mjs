import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const require = createRequire(import.meta.url);
const installed = JSON.parse(readFileSync(resolve(dirname(require.resolve('heartland-scoring')), '../package.json'), 'utf8'));
const lock = JSON.parse(read('package-lock.json'));
const sourcePaths = ['app/page.tsx', 'app/layout.tsx', ...['hero', 'abstract', 'quickstart', 'calculator', 'colophon', 'masthead', 'install-command', 'reference'].map((name) => `components/landing/${name}.tsx`)];
const sources = sourcePaths.map(read).join('\n');

test('public copy does not promise a dependency-free package or universal integration', () => {
  assert.doesNotMatch(sources, /dependency-free|zero runtime|zero deps|optional (?:Zod|peer)|Zod is optional|any EHR|every modern bundler/i);
});
test('versions come from the resolved package, not the site or future release', () => {
  assert.equal(lock.packages['node_modules/heartland-scoring'].version, installed.version);
  assert.match(read('lib/package-info.ts'), /lock\.packages\["node_modules\/heartland-scoring"\]\.version/);
  for (const path of ['app/page.tsx', 'components/landing/quickstart.tsx', 'components/landing/masthead.tsx']) {
    assert.match(read(path), /SCORING_VERSION/);
    assert.doesNotMatch(read(path), /version="v\d|^\s+v1\.0\.[012]\s*$/m);
  }
  assert.match(read('app/page.tsx'), /<Calculator packageVersion=\{SCORING_VERSION\}/);
});
test('the copied install command explicitly includes Zod', () => {
  assert.match(read('components/landing/install-command.tsx'), /npm install heartland-scoring zod/);
  assert.match(read('components/landing/quickstart.tsx'), /Zod is required/);
});
test('the synthetic boundary and missing-input limitation remain visible', () => {
  const calculator = read('components/landing/calculator.tsx');
  assert.match(calculator, /Synthetic demonstration only/);
  assert.match(calculator, /real patient, personal, or health information/);
  assert.match(calculator, /Unchecked boxes represent negative findings in this fictional example, not unknown values/);
  assert.match(read('components/landing/hero.tsx'), /proposed framework pending validation/);
  assert.doesNotMatch(sources, /Not FDA-cleared|No\s+patient health information is ever collected|Peer-reviewed in Cureus/);
});
test('software archive and article citations identify different works', () => {
  const page = read('app/page.tsx'), legacy = read('components/landing/colophon.tsx');
  for (const value of [page, legacy]) assert.match(value, /10\.5281\/zenodo\.23050660/);
  assert.match(page, /Source archive v1\.0\.2/);
  assert.match(page, /uses npm package v\{SCORING_VERSION\}/);
  assert.match(page, /source archive is not an npm/);
  assert.match(page, /10\.5281\/zenodo\.19634995/);
  assert.match(page, /Software archive v1\.0\.0/);
  assert.match(page, /Toolkit v3\.3 archive/);
  assert.match(page, /10\.7759\/cureus\.104817/);
  assert.doesNotMatch(read('components/landing/quickstart.tsx'), /Cr 1\.3 mg\/dL/);
});
test('the gate uses the supported linter and regression suite', () => {
  const manifest = JSON.parse(read('package.json'));
  assert.equal(manifest.scripts.lint, 'eslint . --max-warnings=0');
  assert.equal(manifest.scripts.test, 'node --test tests/*.test.mjs');
});

if (process.env.HEARTLAND_SCORING_SITE_BUILT === '1') {
  test('production HTML identifies actual runtime, boundaries, dependencies and archives', () => {
    const html = read('.next/server/app/index.html');
    assert.ok(html.includes(`v${installed.version}`));
    assert.match(html, /Synthetic demonstration only/);
    assert.match(html, /npm install heartland-scoring zod/);
    assert.match(html, /10\.5281\/zenodo\.19634995/);
    assert.match(html, /10\.5281\/zenodo\.23050660/);
    const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ');
    assert.ok(text.includes(`uses npm package v${installed.version}`));
    assert.match(text, /Source archive v1\.0\.2/);
    assert.match(text, /source archive is not an npm publication/);
    assert.match(html, /10\.7759\/cureus\.104817/);
    assert.match(html, /proposed framework pending validation/);
    assert.doesNotMatch(html, /dependency-free|zero runtime|any EHR|Not FDA-cleared|Peer-reviewed in Cureus|clinical decision support|readmission risk \+ monitoring intensity/i);
  });
}

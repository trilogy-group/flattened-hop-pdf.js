# PDF.js

[PDF.js](https://mozilla.github.io/pdf.js/) is a Portable Document Format (PDF) viewer that is built with HTML5.

PDF.js is community-driven and supported by Mozilla. Our goal is to
create a general-purpose, web standards-based platform for parsing and
rendering PDFs.

In this fork, we are make it a single html file, so it can be used as a single file library.

We are also adding dark mode button to toolbar and removing edit, annotations and load buttons.

run `gulp minified-legacy` or `gulp generic-legacy` to generate the single viewer.html file with all the dependencies.

The single file is generated in `build/minified-legacy/web/viewer.html` or `build/generic-legacy/web/viewer.html` depending on the command you run.

It supports only english language.

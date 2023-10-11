# PDF.js

[PDF.js](https://mozilla.github.io/pdf.js/) is a Portable Document Format (PDF) viewer that is built with HTML5.

PDF.js is community-driven and supported by Mozilla. Our goal is to
create a general-purpose, web standards-based platform for parsing and
rendering PDFs.

In this fork, we are make it into fewer dependency files.

We are also adding dark mode button to toolbar and removing edit, annotations and load buttons.

run `gulp minified-legacy` or `gulp generic-legacy` to generate the single viewer.html file with all the dependencies.

the required files are in the `build/generic-legacy` or `build/minified-legacy` folder.

The required files are:

- viewer.html
- viewer.css
- pdf.viewer.js
- pdf.worker.js

It supports only english language.

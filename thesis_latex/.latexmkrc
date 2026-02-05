$pdf_mode = 1;

# Use XeLaTeX by default (the template relies on ctex/xeCJK and system fonts).
$pdflatex = 'xelatex -interaction=nonstopmode -file-line-error %O %S';

# Bibliography (template uses BibTeX + natbib + gbt7714 bst by default)
$bibtex = 'bibtex %O %B';

# Make sure we rerun enough times for cross-refs/citations.
$max_repeat = 10;



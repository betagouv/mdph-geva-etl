const { extract, transform, load } = require('./src/load-geva-questions');
const path = require('path');

// Take the first argument as filename
var fileName = process.argv[2] ? process.argv[2] : __dirname + '/Outil_éval_-_nomenclature_de_ref_V19_030817.xlsx';

// Take the second argument as filename
var output_file = process.argv[3] ? process.argv[3] : __dirname + '/questions.json';

extract(fileName).then(transform).then(json => load(json, output_file));

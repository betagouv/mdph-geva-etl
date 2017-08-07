'use strict';

const { extract, transform, load } = require('../src/load-geva-questions');
const questionsSpec = require('./questions.json');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

const fileName = __dirname + '/Outil_éval_-_nomenclature_de_ref_V19_030817.xlsx';
const outputFile = __dirname + '/questions.json';

describe('ETL Geva', () => {
  let worksheet;

  describe('When extracting the excel', () => {
    it('should find the correct excel worksheet', () => {
      worksheet = extract(fileName);
      return worksheet.should.eventually.exist;
    });
  });

  describe('When transforming the worksheet', () => {
    it('should find the correct excel worksheet', () => {
      const json = worksheet.then(transform);

      return Promise.all([
        json.should.eventually.exist,
        json.should.eventually.have.lengthOf(12),
        json.should.eventually.deep.equal(questionsSpec)
      ]);
    });
  });
});

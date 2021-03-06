const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed'), (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // assert.equal(err, null);

      console.log(desc.trim());
      const expectedDescription = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      assert.equal(expectedDescription, desc.trim());

      done();
    });
  }
});
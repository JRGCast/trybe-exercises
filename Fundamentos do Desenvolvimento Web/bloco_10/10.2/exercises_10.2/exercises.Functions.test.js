const { describe } = require('yargs');
const exercises = require('./exercisesFunctions');

const uppercase = exercises.uppercase;

// describe(`tests function 'uppercase'`),
//   () => {
it(`uppercase 'xablau' to equal 'XABLAU'`, (done) => {
  uppercase('xablau', (str) => {
    expect(str).toBe('XABLAU');
    done();
  });
});
//};

const { encode, decode, techList, hydrate } = require('./refactorPGFunctions');

describe(`Tests to 'encode' and 'decode' functions`, () => {
  describe(`Tests to 'encode`, () => {
    it(`verify if 'encode' is defined`, () => {
      expect(encode).toBeDefined();
    });
    it(`verify if 'encode' is a function`, () => {
      expect(typeof encode).toBe('function');
    });
    it(`verify if vowels are converted to numbers [1-5]`, () => {
      expect(encode('ARIGATO Uu sayonara')).toBe('1R3G1T4 55 s1y4n1r1');
    });
    it(`verify if encoded string length remains the same`, () => {
      expect(encode('aeiou').length).toBe('aeiou'.length);
    });
  });
  describe(`Tests to 'decode'`, () => {
    it(`verify if 'decode' is defined`, () => {
      expect(encode).toBeDefined();
    });
    it(`verify if 'encode' is a function`, () => {
      expect(typeof decode).toBe('function');
    });
    it(`verify if numbers [1-5] are converted to lowerCase vowels`, () => {
      expect(decode('1R3G1T4 55 s1y4n1r1')).toBe('aRiGaTo uu sayonara');
    });
    it(`verify if decoded string length remains the same`, () => {
      expect(decode('12345').length).toBe('12345'.length);
    });
  });
});

describe(`Tests to 'techList'`, () => {
  it(`verify if 'techList' is defined`, () => {
    expect(techList).toBeDefined();
  });
  it(`verify if 'techList' is a function`, () => {
    expect(typeof techList).toBe('function');
  });
  it(`verify if returns an array in a sorted array of objects`, () => {
    expect(
      techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'),
    ).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it(`verify if an empty array returns 'Vazio!'`, () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe(`Tests to 'hydrate'`, () => {
  it(`verify if 'hydrate' is defined`, () => {
    expect(hydrate).toBeDefined();
  });
  it(`verify if 'hydrate' is a function`, () => {
    expect(typeof hydrate).toBe('function');
  });
  it(`verify if string containing numbers returns sum of numbers plus 'copos de água'`, () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe(
      '7 copos de água',
    );
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe(
      '5 copos de água',
    );
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe(
      '3 copos de água',
    );
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

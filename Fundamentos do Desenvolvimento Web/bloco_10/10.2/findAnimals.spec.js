let { getListAnimals } = require('./findAnimals.js');

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
      expect(listDogs).toEqual(expect.not.arrayContaining(['Bob']));
    });
  });
  describe('Quando o tipo do animal, não existe', () => {
    test('Retorne a lista de animais', () => {
      return getListAnimals('Lion').catch(error =>
        expect(error).toEqual({ error: 'Não possui esse tipo de animal.' }),
      );
    });
    test('Testando com async/await, testando o reject', async () => {
      try {
        await getListAnimals('Lion');
      } catch (error) {
        expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
      }
    });
  });
  describe('Testando promise - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ];
        expect.assertions(1);
        return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
      });
    });

    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getListAnimals('Lion')).rejects.toEqual({
          error: 'Não possui esse tipo de animal.',
        });
      });
    });
  });
  describe('Testando Async/Await - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', async () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ];
        expect.assertions(1);
        await expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
      });
    });

    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', async () => {
        expect.assertions(1);
        await expect(getListAnimals('Lion')).rejects.toEqual({
          error: 'Não possui esse tipo de animal.',
        });
      });
    });
  });
});

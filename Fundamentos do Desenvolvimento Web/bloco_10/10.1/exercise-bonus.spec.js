const { professionalBoard, searchEmployee } = require('./exercise-bonus');
// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

describe(`tests to exercise-bonus`, () => {
  describe(`tests to 'professionalBoard'`, () => {
    it(`verify if 'professionalBoard' is an array`, () => {
      expect(Array.isArray(professionalBoard)).toBe(true);
    });
  });
  describe(`tests to 'searchEmployee`, () => {
    // exercise-bonus.test.js
    it('Testa se searchEmployee é uma função', () => {
      expect(typeof searchEmployee).toBe('function');
    });
    it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
      const actual = searchEmployee('1256-4', 'firstName');
      const expected = 'Linda';

      expect(actual).toBe(expected);
    });
    it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
      const actual = searchEmployee('1256-4', 'lastName');
      const expected = 'Bezos';

      expect(actual).toBe(expected);
    });
    it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
      const actual = searchEmployee('1256-4', 'specialities');
      expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
    });
    it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
      expect(() => {
        searchEmployee('1256-8', 'specialities');
      }).toThrow();
    });
    it('Testa a mensagem do erro para ID inexistente', () => {
      expect(() => {
        searchEmployee('1256-8', 'specialities');
      }).toThrowError(new Error('ID não identificada'));
    });
    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
      expect(() => {
        searchEmployee();
      }).toThrow();
    });
    it('Testa a mensagem do erro para informação inexistente', () => {
      expect(() => {
        searchEmployee('4678-2', 'shift');
      }).toThrowError(new Error('Informação indisponível'));
    });
  });
});

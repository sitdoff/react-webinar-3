import { pluralizedCount } from '../utils';

describe('pluralizedCount function', () => {
  test('должно возвращать "1 раз" для 1', () => {
    expect(pluralizedCount(1)).toBe('1 раз');
  });

  test('должно возвращать "2 раза" для 2', () => {
    expect(pluralizedCount(2)).toBe('2 раза');
  });

  test('должно возвращать "5 раз" для 5', () => {
    expect(pluralizedCount(5)).toBe('5 раз');
  });

  test('должно возвращать "11 раз" для 11', () => {
    expect(pluralizedCount(11)).toBe('11 раз');
  });

  test('должно возвращать "12 раз" для 12', () => {
    expect(pluralizedCount(12)).toBe('12 раз');
  });

  test('должно возвращать "13 раз" для 13', () => {
    expect(pluralizedCount(13)).toBe('13 раз');
  });

  test('должно возвращать "14 раз" для 14', () => {
    expect(pluralizedCount(14)).toBe('14 раз');
  });

  test('должно возвращать "15 раз" для 15', () => {
    expect(pluralizedCount(15)).toBe('15 раз');
  });

  test('должно возвращать "21 раз" для 21', () => {
    expect(pluralizedCount(21)).toBe('21 раз');
  });

  test('должно возвращать "22 раза" для 22', () => {
    expect(pluralizedCount(22)).toBe('22 раза');
  });

  test('должно возвращать "23 раза" для 23', () => {
    expect(pluralizedCount(23)).toBe('23 раза');
  });

  test('должно возвращать "24 раза" для 24', () => {
    expect(pluralizedCount(24)).toBe('24 раза');
  });

  test('должно возвращать "25 раз" для 25', () => {
    expect(pluralizedCount(25)).toBe('25 раз');
  });

  test('должно возвращать "100 раз" для 100', () => {
    expect(pluralizedCount(100)).toBe('100 раз');
  });

  test('должно возвращать "101 раз" для 101', () => {
    expect(pluralizedCount(101)).toBe('101 раз');
  });
});

const templates = {
  firstForm: count => `| Выделяли ${count} раз`,
  secondForm: count => `| Выделяли ${count} раза`,
};

describe('pluralizedCount function', () => {
  test('должно возвращать "Выделяли 1 раз" для 1', () => {
    expect(pluralizedCount(1, templates)).toBe('| Выделяли 1 раз');
  });

  test('должно возвращать "Выделяли 2 раза" для 2', () => {
    expect(pluralizedCount(2, templates)).toBe('| Выделяли 2 раза');
  });

  test('должно возвращать "Выделяли 5 раз" для 5', () => {
    expect(pluralizedCount(5, templates)).toBe('| Выделяли 5 раз');
  });

  test('должно возвращать "Выделяли 11 раз" для 11', () => {
    expect(pluralizedCount(11, templates)).toBe('| Выделяли 11 раз');
  });

  test('должно возвращать "Выделяли 12 раз" для 12', () => {
    expect(pluralizedCount(12, templates)).toBe('| Выделяли 12 раз');
  });

  test('должно возвращать "Выделяли 13 раз" для 13', () => {
    expect(pluralizedCount(13, templates)).toBe('| Выделяли 13 раз');
  });

  test('должно возвращать "Выделяли 14 раз" для 14', () => {
    expect(pluralizedCount(14, templates)).toBe('| Выделяли 14 раз');
  });

  test('должно возвращать "Выделяли 15 раз" для 15', () => {
    expect(pluralizedCount(15, templates)).toBe('| Выделяли 15 раз');
  });

  test('должно возвращать "Выделяли 21 раз" для 21', () => {
    expect(pluralizedCount(21, templates)).toBe('| Выделяли 21 раз');
  });

  test('должно возвращать "Выделяли 22 раза" для 22', () => {
    expect(pluralizedCount(22, templates)).toBe('| Выделяли 22 раза');
  });

  test('должно возвращать "Выделяли 23 раза" для 23', () => {
    expect(pluralizedCount(23, templates)).toBe('| Выделяли 23 раза');
  });

  test('должно возвращать "Выделяли 24 раза" для 24', () => {
    expect(pluralizedCount(24, templates)).toBe('| Выделяли 24 раза');
  });

  test('должно возвращать "Выделяли 25 раз" для 25', () => {
    expect(pluralizedCount(25, templates)).toBe('| Выделяли 25 раз');
  });

  test('должно возвращать "Выделяли 100 раз" для 100', () => {
    expect(pluralizedCount(100, templates)).toBe('| Выделяли 100 раз');
  });

  test('должно возвращать "Выделяли 101 раз" для 101', () => {
    expect(pluralizedCount(101, templates)).toBe('| Выделяли 101 раз');
  });
});

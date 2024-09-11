import { pluralizedCount } from '../utils';

describe('pluralizedCount function', () => {
  test('должно возвращать "Выделяли 1 раз" для 1', () => {
    expect(pluralizedCount(1)).toBe('| Выделяли 1 раз');
  });

  test('должно возвращать "Выделяли 2 раза" для 2', () => {
    expect(pluralizedCount(2)).toBe('| Выделяли 2 раза');
  });

  test('должно возвращать "Выделяли 5 раз" для 5', () => {
    expect(pluralizedCount(5)).toBe('| Выделяли 5 раз');
  });

  test('должно возвращать "Выделяли 11 раз" для 11', () => {
    expect(pluralizedCount(11)).toBe('| Выделяли 11 раз');
  });

  test('должно возвращать "Выделяли 12 раз" для 12', () => {
    expect(pluralizedCount(12)).toBe('| Выделяли 12 раз');
  });

  test('должно возвращать "Выделяли 13 раз" для 13', () => {
    expect(pluralizedCount(13)).toBe('| Выделяли 13 раз');
  });

  test('должно возвращать "Выделяли 14 раз" для 14', () => {
    expect(pluralizedCount(14)).toBe('| Выделяли 14 раз');
  });

  test('должно возвращать "Выделяли 15 раз" для 15', () => {
    expect(pluralizedCount(15)).toBe('| Выделяли 15 раз');
  });

  test('должно возвращать "Выделяли 21 раз" для 21', () => {
    expect(pluralizedCount(21)).toBe('| Выделяли 21 раз');
  });

  test('должно возвращать "Выделяли 22 раза" для 22', () => {
    expect(pluralizedCount(22)).toBe('| Выделяли 22 раза');
  });

  test('должно возвращать "Выделяли 23 раза" для 23', () => {
    expect(pluralizedCount(23)).toBe('| Выделяли 23 раза');
  });

  test('должно возвращать "Выделяли 24 раза" для 24', () => {
    expect(pluralizedCount(24)).toBe('| Выделяли 24 раза');
  });

  test('должно возвращать "Выделяли 25 раз" для 25', () => {
    expect(pluralizedCount(25)).toBe('| Выделяли 25 раз');
  });

  test('должно возвращать "Выделяли 100 раз" для 100', () => {
    expect(pluralizedCount(100)).toBe('| Выделяли 100 раз');
  });

  test('должно возвращать "Выделяли 101 раз" для 101', () => {
    expect(pluralizedCount(101)).toBe('| Выделяли 101 раз');
  });
});

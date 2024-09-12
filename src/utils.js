const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function pluralizedCount(count, templates) {
  const defaults = {
    firstForm: count => `${count} раз`,
    secondForm: count => `${count} раза`,
  };

  const phrases = { ...defaults, ...templates };

  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return phrases.firstForm(count);
  }

  if (lastDigit === 1) {
    return phrases.firstForm(count);
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return phrases.secondForm(count);
  } else {
    return phrases.firstForm(count);
  }
}

import _ from 'lodash';

export const addComma = (number: number | string | undefined, fixedNumber = 0): string => {
  if (!number) {
    return '0';
  }
  if (number <= 0) {
    return Number(number).toFixed(fixedNumber);
  }

  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  const round = (Number(number).toFixed(fixedNumber));
  return round.toString().replace(regexp, ',');
};

const replaceString = (str: string, replacer: RegExp) => (_.isString(str) ? str.replace(replacer, '') : '');

export const numberFilter = (str: string) => replaceString(str, /[^0-9]/g);

export const setColorToIncreaseAndDecrease = (number: number): string => {
  if (number > 0) {
    return '#ff0000';
  } if (number < 0) {
    return '#0080ff';
  }
  return 'none';
};

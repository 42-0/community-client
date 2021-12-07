import { Dayjs } from 'dayjs';
import dayjs from '../plugins/day-js';

export const getDay = (date: string | Date | Dayjs) => {
  if (!date) {
    return;
  }
  return dayjs(date).format('YYYY-MM-DD');
};

export const getDayOfTheWeek = (date: string | Date | Dayjs) => {
  if (!date) {
    return;
  }
  return dayjs(date).format('YYYY-MM-DD (ddd)');
};

export const getDateTime = (date: string | Date | Dayjs) => {
  if (!date) {
    return;
  }
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export const getUtcDateTime = (date: string | Date | Dayjs) => {
  if (!date) {
    return;
  }
  return dayjs.utc(date).format('YYYY-MM-DD HH:mm:ss');
};

export const getTime = (date: string | Date | Dayjs) => {
  if (!date) {
    return;
  }
  return dayjs.utc(date).format('HH:mm');
};

export const getDateTimeDetail = (date: string | Date | Dayjs) => {
  if (!date) {
    return;
  }
  return dayjs(date).format('YYYY.MM.DD ddd A HH:mm:ss');
};

export const getDayOfWeekColor = (date: string): string => {
  switch (dayjs(date).day()) {
    case 0:
      return '#ff0000';
    case 6:
      return '#0080ff';
    default:
      return 'none';
  }
};

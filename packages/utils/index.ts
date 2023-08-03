import dayjs from 'dayjs';
export const formatTime = () => {
  return dayjs().format('YYYY-MM-DD ss:mm:ss ');
};

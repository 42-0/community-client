import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
// import duration from 'dayjs/plugin/duration';

dayjs.locale('ko');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
// dayjs.extend(duration);

dayjs.tz.setDefault('Asia/Seoul');
// dayjs.tz.setDefault('Asia/Hong_Kong');
// dayjs.tz.setDefault('America/New_York');

export default dayjs;

import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

export default function HumanDate({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMM	d, yyyy')}</time>;
}

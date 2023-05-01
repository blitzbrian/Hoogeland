// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { Accordion } from '@mantine/core';
import Subject from './Subject';

interface Props {
  days: Day[]
}

interface Day {
  day: number
  subjects: ISubject[]
}

// The name Subject is already in use
interface ISubject {
  start: number;
  end: number;
  hour: string;
  title: string;
  location: string;
  description: string;
  teacher: string;
  test: boolean;
  homework: string;
  break: boolean;
  bigBreak: boolean;
  breakStart: number;
  breakEnd: number;
}

const generateLabel = (time: number) => {
  const day = new Date(time).toLocaleString('nl-NL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return day.charAt(0).toUpperCase() + day.slice(1);
};

// const getDefaultItem = (day) => {
//   const date = new Date(day.day);
//   const today = new Date();
//   return (
//     date.toDateString() == today.toDateString() ||
//     ((today.getDay() == 6 || today.getDay() == 0) && date.getDay() == 1)
//   );
// };

const Days: React.FC<Props> = (props) => {
  return (
    <Accordion
      styles={{
        control: {
          boxShadow: 'none !important',
          lineHeight: 'normal !important',
        },
      }}
    >
      {props.days?.map((day) => (
        <Accordion.Item key={uuidv4()} value={day.day.toString()}>
          <Accordion.Control>
            {generateLabel(day.day)}
          </Accordion.Control>
          <Accordion.Panel>
            {day.subjects.map((subject) => (
              <Subject key={uuidv4()} subject={subject} />
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Days;

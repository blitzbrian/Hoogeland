import { open } from './Popup';
import Title from './Title';
import { Paper } from '@mantine/core';

interface Subject {
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

interface Props {
  subject: Subject;
}

const Subject: React.FC<Props> = ({ subject }) => {
  return (
    <>
      {(subject.break || subject.bigBreak) && (
        <Paper
          shadow="xs"
          p="xs"
          radius={0}
          sx={{
            cursor: 'pointer',
          }}
          withBorder
          onClick={() => open(subject, true)}
        >
          <Title subject={subject} Break={true}/>
        </Paper>
      )}
      <Paper
        shadow="xs"
        p="xs"
        radius={0}
        sx={{
          cursor: 'pointer',
        }}
        withBorder
        onClick={() => open(subject, false)}
      >
        <Title subject={subject} Break={false}/>
      </Paper>
    </>
  );
};

export default Subject;

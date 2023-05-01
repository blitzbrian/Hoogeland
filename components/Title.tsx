import { Badge } from '@mantine/core';

interface Props {
  subject: Subject | undefined;
  Break: boolean;
}

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

const Title: React.FC<Props> = ({ subject, Break }) => {
  if (Break === false)
    return (
      <>
        {subject?.hour && (
          <Badge
            sx={{ marginRight: '5px', cursor: 'pointer' }}
            color="teal"
            radius="md"
            size="sm"
            variant="filled"
          >
            {subject?.hour}
          </Badge>
        )}
        {subject?.title}
        {subject?.test && (
          <Badge
            sx={{ marginLeft: '5px', cursor: 'pointer' }}
            radius="md"
            variant="filled"
          >
            Toets
          </Badge>
        )}
        {subject?.homework && !subject?.test && (
          <Badge
            sx={{ marginLeft: '5px', cursor: 'pointer' }}
            radius="md"
            variant="filled"
          >
            Huiswerk
          </Badge>
        )}
      </>
    );
  else
    return (
      <>
        {subject?.break && <>Pauze</>}
        {subject?.bigBreak && <>Grote pauze</>}
      </>
    );
};

export default Title;

import { Badge } from '@mantine/core';

interface Props {
  subject: any;
  Break: boolean;
  done: boolean;
}

const Title: React.FC<Props> = ({ subject, Break, done }) => {
  if (Break === false)
    return (
      <>
        {subject?.LesuurVan && (
          <Badge
            sx={{ marginRight: '5px', cursor: 'pointer' }}
            color="teal"
            radius="md"
            size="sm"
            variant="filled"
          >
            {subject?.LesuurVan}
          </Badge>
        )}
        {subject ? subject.Omschrijving.split('-').splice(0, 2).join('-') + (subject.Lokatie ? ('- ' + subject.Lokatie) : '') : ''}
        
        {subject?.type && (
          <Badge
            sx={{ marginLeft: '5px', cursor: 'pointer' }}
            radius="md"
            variant="filled"
            color={done ? "teal" : undefined}
          >
            {subject.type}
          </Badge>
        )}
      </>
    );
  else
    return (
      <>
        {subject?.break && <>Kleine pauze</>}
        {subject?.bigBreak && <>Grote pauze</>}
      </>
    );
};

export default Title;

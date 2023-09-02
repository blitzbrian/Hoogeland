import { Badge } from '@mantine/core';

interface Props {
  subject: any;
  Break: boolean;
}

const Title: React.FC<Props> = ({ subject, Break }) => {
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
        {subject?.Omschrijving}
        {subject?.test && (
          <Badge
            sx={{ marginLeft: '5px', cursor: 'pointer' }}
            radius="md"
            variant="filled"
          >
            Toets
          </Badge>
        )}
        {subject?.Inhoud && !subject?.test && (
          <Badge
            sx={{ marginLeft: '5px', cursor: 'pointer' }}
            radius="md"
            variant="filled"
            color={subject.Afgerond ? "teal" : undefined}
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

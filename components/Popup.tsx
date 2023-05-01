import Title from './Title';
import { Modal, Divider } from '@mantine/core';
import { useState } from 'react';

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
// @ts-ignore
let opened: boolean, setOpen: (open) => void, subject, setSubject: (subject) => void, Break: boolean, setBreak: (Break) => void;

const open = (subject: Subject, Break: boolean) => {
  setBreak(Break);
  setSubject(subject);
  setOpen(true);
};

const Popup = () => {
  [opened, setOpen] = useState(false);
  [subject, setSubject] = useState<Subject>();
  [Break, setBreak] = useState(false);

  
  return (
    <Modal
      opened={opened}
      onClose={() => setOpen(false)}
      withCloseButton={false}
      title={<Title subject={subject} Break={Break}/>}
      styles={{
        title: {
          cursor: 'default',
        },
      }}
      transitionProps = {{ transition: "slide-down", duration: 300 }}
    >
      <table
        style={{
          textAlign: 'left',
          tableLayout: 'fixed',
          cursor: 'default',
          width: '100%',
        }}
      >
        <tbody>
          {Break === false && (
            <>
              {subject?.start && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Begin</th>
                    <td>
                      {new Date(subject?.start).toLocaleTimeString('nl-NL', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                </>
              )}
              {subject?.end && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Eind</th>
                    <td>
                      {new Date(subject?.end).toLocaleTimeString('nl-NL', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                </>
              )}
              {subject?.location && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Locatie</th>
                    <td>{subject?.location}</td>
                  </tr>
                </>
              )}
              {subject?.description && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Vak</th>
                    <td>{subject?.description}</td>
                  </tr>
                </>
              )}
              {subject?.teacher && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Docent</th>
                    <td>{subject?.teacher}</td>
                  </tr>
                </>
              )}
            </>
          )}
          {Break === true && (
            <>
              <Divider variant="dotted" sx={{ width: '200%' }} />
              <tr>
                <th>Begin</th>
                <td>
                  {new Date(subject?.breakStart || 0).toLocaleTimeString('nl-NL', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
              <Divider variant="dotted" sx={{ width: '200%' }} />
              <tr>
                <th>Eind</th>
                <td>
                  {new Date(subject?.breakEnd || 0).toLocaleTimeString('nl-NL', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      {subject?.homework && Break === false && (
        <>
          <Divider variant="dotted" sx={{ width: '100%' }} />
          <strong
            style={{
              marginLeft: '2.5px',
            }}
          >
            Huiswerk{' '}
          </strong>
          <p
            style={{
              marginTop: 0,
              marginLeft: '2.5px',
            }}
            dangerouslySetInnerHTML={{ __html: `${subject?.homework}` }}
          ></p>
        </>
      )}
    </Modal>
  );
};

export { open };
export default Popup;

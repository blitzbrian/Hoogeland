import Title from './Title';
import { Modal, Divider } from '@mantine/core';
import { useState } from 'react';

// @ts-ignore
let opened: boolean, setOpen: (open) => void, subject, setSubject: (subject) => void, Break: any, setBreak: (Break) => void;

const open = (subject: any, Break: boolean) => {
  setBreak(Break);
  setSubject(subject);
  setOpen(true);
};

const Popup = () => {
  [opened, setOpen] = useState(false);
  [subject, setSubject] = useState();
  [Break, setBreak] = useState();

  
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
              {subject?.Start && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Begin</th>
                    <td>
                      {new Date(subject?.Start).toLocaleTimeString('nl-NL', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                </>
              )}
              {subject?.Einde && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Eind</th>
                    <td>
                      {new Date(subject?.Einde).toLocaleTimeString('nl-NL', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                </>
              )}
              {subject?.Lokatie && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Locatie</th>
                    <td>{subject?.Lokatie}</td>
                  </tr>
                </>
              )}
              {subject?.Vakken && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Vak</th>
                    <td>{subject?.Vakken[0].Naam}</td>
                  </tr>
                </>
              )}
              {subject?.Docent && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Docent</th>
                    <td>{subject?.Docent}</td>
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
      {subject?.Inhoud && Break === false && (
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
            dangerouslySetInnerHTML={{ __html: `${subject?.Inhoud}` }}
          ></p>
        </>
      )}
    </Modal>
  );
};

export { open };
export default Popup;

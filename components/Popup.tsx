import Title from './Title';
import { Modal, Divider, Switch, TypographyStylesProvider } from '@mantine/core';
import { useState } from 'react';

// @ts-ignore
let opened: boolean, setOpen: (open) => void, subject, setSubject: (subject) => void, Break: any, setBreak: (Break) => void, checked, setChecked: (checked) => void;

const open = (subject: any, Break: boolean) => {
  setBreak(Break);
  setSubject(subject);
  setOpen(true);
  setChecked(subject.Afgerond);
};


interface Props {
  setDays: (days: any) => void
}

const Popup: React.FC<Props> = ({ setDays }) => {
  [opened, setOpen] = useState(false);
  [subject, setSubject] = useState();
  [Break, setBreak] = useState();
  [checked, setChecked] = useState(false);

  const onCheck = async (e: any) => {
    setChecked(e?.currentTarget?.checked);
    
    await fetch('/api/homework', {
      body: JSON.stringify({
        // @ts-ignore
        ...subject,
        // @ts-ignore
        Afgerond: !checked
      }),
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    });  

    const res = await fetch('/api/days', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'token': 'true'
      },
      credentials: 'include'
    });

    const data = await res.json()
    
    if(data.success !== false) setDays(data);
    
  }
  
  return (
    <Modal
      opened={opened}
      onClose={() => setOpen(false)}
      withCloseButton={false}
      title={<Title subject={subject} Break={Break} done={checked} />}
      styles={{
        title: {
          cursor: 'default',
        },
      }}
      transitionProps={{ transition: "slide-down", duration: 300 }}
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
              {subject?.Vakken[0]?.Naam && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Vak</th>
                    <td>{subject?.Vakken[0]?.Naam}</td>
                  </tr>
                </>
              )}
              {subject?.Docenten.length !== 0 && (
                <>
                  <Divider variant="dotted" sx={{ width: '200%' }} />
                  <tr>
                    <th>Docent</th>
                    <td>{subject?.Docenten?.map((docent: any, i: number) => {
                      if (i === 0) {
                        return docent.Naam
                      } else {
                        return ', ' + docent.Naam
                      }
                    })}</td>
                  </tr>
                </>
              )}
            </>
          )}
          {Break === true && (
            <>
              <Divider variant="dotted" sx={{ width: '200%' }} />
              <tr>
                <th>Stroom</th>
                <td>
                  {subject.stroom}
                </td>
              </tr>
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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <strong
              style={{
                marginLeft: '2.5px',
                display: 'inline-block'
              }}
            >
              Huiswerk{' '}
            </strong>
             <Switch sx={{ display: 'inline-block', marginLeft: 'auto'}} checked={checked} onChange={onCheck}/>
          </div>
          <TypographyStylesProvider>
            <p
              style={{
                marginTop: 0,
                marginLeft: '2.5px',
              }}
              dangerouslySetInnerHTML={{ __html: `${subject?.Inhoud}` }}
            ></p>
          </TypographyStylesProvider>
        </>
      )}
    </Modal>
  );
};

export { open };
export default Popup;

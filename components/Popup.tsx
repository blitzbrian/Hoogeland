import Title from "./Title";
import {
    Modal,
    Divider,
    Switch,
    TypographyStylesProvider,
} from "@mantine/core";
import { useState } from "react";

// @ts-ignore
let opened: boolean,
    setOpen: (open: any) => void,
    subject: any,
    setSubject: (subject: any) => void,
    Break: any,
    setBreak: (Break: any) => void,
    checked: any,
    setChecked: (checked: any) => void;

const open = (subject: any, Break: boolean) => {
    setBreak(Break);
    setSubject(subject);
    setOpen(true);
    setChecked(subject.Afgerond);
};

interface Props {
    setDays: (days: any) => void;
    setOpen: (opened: boolean) => void;
    opened: boolean;
}

const Popup: React.FC<Props> = (props) => {
    const setDays = props.setDays;
    setOpen = props.setOpen;
    opened = props.opened;
    [subject, setSubject] = useState();
    [Break, setBreak] = useState();
    [checked, setChecked] = useState(false);

    const onCheck = async (e: any) => {
        setChecked(e?.currentTarget?.checked);

        const res = await fetch("/api/homework", {
            body: JSON.stringify({
                // @ts-ignore
                ...subject,
                // @ts-ignore
                Afgerond: !checked,
            }),
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            credentials: "include",
        });

        const data = await res.json();

        if (res.status === 200) setDays(data);
    };

    return (
        <Modal
            opened={opened}
            onClose={() => setOpen(false)}
            title={<Title subject={subject} Break={Break} done={checked} />}
            xOffset={0}
            size="100vw"
            withOverlay={false}
            withCloseButton={false}
            styles={{
                title: {
                    cursor: "default",
                },
                content: {
                    height: "100%",
                    maxHeight: "100%"
                },
                inner: {
                    paddingTop: "60px",
                    paddingBottom: 0
                },
            }}
            shadow="0px"
            transitionProps={{ transition: "pop", duration: 300 }}
        >
            {Break === false && (
                <>
                    {subject?.Start && (
                        <>
                            <Divider component="p" variant="dotted" mt={0} />
                            <b>Begin</b>
                            <br />
                            {new Date(subject?.Start).toLocaleTimeString(
                                "nl-NL",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}
                        </>
                    )}
                    {subject?.Einde && (
                        <>
                            <Divider component="p" variant="dotted" />
                            <b>Eind</b>
                            <br />
                            {new Date(subject?.Einde).toLocaleTimeString(
                                "nl-NL",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}
                        </>
                    )}
                    {subject?.Lokatie && (
                        <>
                            <Divider component="p" variant="dotted" />
                            <b>Locatie</b>
                            <br />
                            {subject?.Lokatie}
                        </>
                    )}
                    {subject?.Vakken[0]?.Naam && (
                        <>
                            <Divider component="p" variant="dotted" />
                            <b>Vak</b>
                            <br />
                            {subject?.Vakken[0]?.Naam}
                        </>
                    )}
                    {subject?.Docenten.length !== 0 && (
                        <>
                            <Divider component="p" variant="dotted" />
                            <b>Docent</b>
                            <br />
                            {subject?.Docenten?.map(
                                (docent: any, i: number) => {
                                    if (i === 0) {
                                        return docent.Naam;
                                    } else {
                                        return ", " + docent.Naam;
                                    }
                                }
                            )}
                        </>
                    )}
                </>
            )}
            {Break === true && (
                <>
                    <Divider component="p" variant="dotted" mt={0} />
                    <b>Stroom</b>
                    <br />
                    {subject.stroom}
                    <Divider component="p" variant="dotted" />
                    <b>Begin</b>
                    <br />
                    {new Date(subject?.breakStart || 0).toLocaleTimeString(
                        "nl-NL",
                        {
                            hour: "2-digit",
                            minute: "2-digit",
                        }
                    )}
                    <Divider component="p" variant="dotted" />
                    <b>Eind</b>
                    <br />
                    {new Date(subject?.breakEnd || 0).toLocaleTimeString(
                        "nl-NL",
                        {
                            hour: "2-digit",
                            minute: "2-digit",
                        }
                    )}
                </>
            )}
            {subject?.Inhoud && Break === false && (
                <>
                    <Divider component="p" variant="dotted" w="100%" />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <strong
                            style={{
                                marginLeft: "2.5px",
                                display: "inline-block",
                            }}
                        >
                            Huiswerk{" "}
                        </strong>
                        <Switch
                            display="inline-block"
                            ml="auto"
                            styles={{
                                track: {
                                    outline: "none",
                                    border: "0px",
                                },
                            }}
                            checked={checked}
                            onChange={onCheck}
                        />
                    </div>
                    <TypographyStylesProvider m={0} p={0}>
                        <p
                            style={{
                                marginTop: 0,
                                marginLeft: "2.5px",
                            }}
                            dangerouslySetInnerHTML={{
                                __html: `${subject?.Inhoud}`,
                            }}
                        ></p>
                    </TypographyStylesProvider>
                </>
            )}
        </Modal>
    );
};

export { open };
export default Popup;

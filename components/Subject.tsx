import { open } from "./Popup";
import Title from "./Title";
import { Paper } from "@mantine/core";

interface Props {
    subject: any;
}

const Subject: React.FC<Props> = ({ subject }) => {
    return (
        <>
            {(subject.break || subject.bigBreak) && (
                <Paper
                    shadow="xs"
                    p="xs"
                    radius={0}
                    style={{
                        cursor: "pointer",
                    }}
                    withBorder
                    onClick={() => open(subject, true)}
                    onKeyDown={(e) => { if(e.code === "Enter") open(subject, true) }}
                    tabIndex={0}
                >
                    <Title subject={subject} Break={true} done={false} />
                </Paper>
            )}
            <Paper
                shadow="xs"
                p="xs"
                radius={0}
                style={{
                    cursor: "pointer"
                }}
                withBorder
                onClick={() => open(subject, false)}
                onKeyDown={(e) => { if(e.code === "Enter") open(subject, false) }}
                tabIndex={0}
            >
                <Title
                    subject={subject}
                    Break={false}
                    done={subject.Afgerond}
                />
            </Paper>
        </>
    );
};

export default Subject;

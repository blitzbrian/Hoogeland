import { Badge } from "@mantine/core";

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
                        style={{ cursor: "pointer" }}
                        mr="5px"
                        color="teal"
                        radius="md"
                        size="sm"
                        variant="filled"
                    >
                        {subject?.LesuurVan}
                    </Badge>
                )}
                {!subject.LesuurVan && (
                    <Badge
                        style={{ cursor: "pointer" }}
                        mr="5px"
                        color="blue"
                        radius="md"
                        size="sm"
                        variant="filled"
                    >
                        {new Date(subject?.Start).toLocaleTimeString("NL-nl", {
                            hour: "numeric",
                            minute: "numeric",
                        }) +
                            "-" +
                            new Date(subject?.Einde).toLocaleTimeString(
                                "NL-nl",
                                { hour: "numeric", minute: "numeric" }
                            )}
                    </Badge>
                )}
                {subject
                    ? subject.Omschrijving.split("-")
                          .splice(0, 2)
                          .join("-")
                          .trim() +
                      " " +
                      (subject.Lokatie ? "- " + subject.Lokatie : "")
                    : ""}

                {subject?.type && (
                    <Badge
                        style={{ cursor: "pointer" }}
                        ml="5px"
                        radius="md"
                        variant="light"
                        color={done ? "teal" : "blue"}
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

// @ts-nocheck
import { useState } from "react";
import { ActionIcon } from "@mantine/core";
import dynamic from "next/dynamic";
import Calendar from "./svg/Calendar";

const DatePicker = dynamic(() =>
    import("@mantine/dates").then((module) => module.DatePicker)
);
const Modal = dynamic(() =>
    import("@mantine/core").then((module) => module.Modal)
);
const Group = dynamic(() =>
    import("@mantine/core").then((module) => module.Group)
);

interface Props {
    setData: (data: any) => void;
}

const dayRenderer = (date) => {
    const currentDay = date.toDateString() === new Date().toDateString();

    return (
            <div
                style={{
                    color: currentDay ? "cyan" : "white",
                }}
            >
                {date.getDate()}
            </div>
    );
};

const Datepicker: React.FC<Props> = ({ setData }) => {
    let [opened, setOpen] = useState(false);
    let [date, setDate] = useState<Date | null>(null);
    let [lastDate, setLastDate] = useState<Date | null>();

    const open = () => {
        setOpen(true);
        setLastDate(date);
    };

    const close = async () => {
        setOpen(false);
        if (lastDate == date) return;
        const res = await fetch("/api/days", {
            method: "POST",
            body: JSON.stringify({
                date: date?.toDateString(),
            }),
            headers: {
                "content-type": "application/json",
                // Make the server use the token instead of fetching it
                token: "true",
            },
        });
        const json = await res.json();
        if (json.error || json.success === false) {
            return;
        }
        setData(json);
    };
    return (
        <>
            <ActionIcon
                variant="transparent"
                style={{ marginLeft: "auto" }}
                onClick={open}
            >
                <Calendar />
            </ActionIcon>
            <Modal
                size="auto"
                opened={opened}
                onClose={close}
                withCloseButton={false}
                transitionProps={{ transition: "pop", duration: 300 }}
                centered={true}
            >
                <Group position="center">
                    <DatePicker
                        value={date}
                        onChange={setDate}
                        renderDay={dayRenderer}
                    />
                </Group>
            </Modal>
        </>
    );
};

export default Datepicker;

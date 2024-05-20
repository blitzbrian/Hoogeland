import { Burger, Drawer, NavLink } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Calendar from "./svg/Calendar";
import Gear from "./svg/Gear";
import Grades from "./svg/Grades";

interface Props {
    setNavOpen: (navOpen: any) => void;
    navOpened: boolean;
}

const Nav: React.FC<Props> = ({ navOpened, setNavOpen }) => {
    const router = useRouter();

    const renderLink = (props: any) => {
        return <Link prefetch={false} {...props} />;
    };

    return (
        <Drawer
            opened={navOpened}
            onClose={() => setNavOpen(false)}
            position="right"
            closeButtonProps={{
                icon: (
                    <Burger component="div" opened={navOpened} onClick={() => setNavOpen(false)} transitionTimingFunction="linear" style={{ display: 'flex', alignItems: 'center' }} />
                ),
            }}
            transitionProps={{ transition: "fade", duration: 300, timingFunction: 'linear' }}
            title={
                <b>Navigatie</b>
            }
            keepMounted={true}
        >
            <NavLink
                href="/"
                label="Agenda"
                renderRoot={renderLink}
                active={router.pathname === "/"}
                leftSection={<Calendar size="15px" />}
                onClick={() => setNavOpen(false)}
            />
            <NavLink
                href="/grades"
                label="Cijfers"
                renderRoot={renderLink}
                active={router.pathname === "/grades"}
                leftSection={<Grades />}
                onClick={() => setNavOpen(false)}
            />
            <NavLink
                href="/settings"
                label="Instellingen"
                renderRoot={renderLink}
                active={router.pathname === "/settings"}
                leftSection={<Gear />}
                onClick={() => setNavOpen(false)}
            />
        </Drawer>
    );
};

export default Nav;

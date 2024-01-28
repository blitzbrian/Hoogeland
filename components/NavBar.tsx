import { Burger, Drawer, NavLink } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    setNavOpen: (navOpen: any) => void;
    navOpened: boolean;
}

const NavBar: React.FC<Props> = ({ navOpened, setNavOpen }) => {
    const router = useRouter();

    const renderLink = (props: any) => {
        return <Link shallow={true} prefetch={false} {...props} />
    }

    return (
        <Drawer
            opened={navOpened}
            onClose={() => setNavOpen(false)}
            position="right"
            closeButtonProps={{
                icon: (
                    <Burger
                        opened={true}
                        onClick={() => setNavOpen(false)}
                    />
                ),
            }}
            transitionProps={{ transition: "fade", duration: 300 }}
            title={<b>Navigatie</b>}
        >
            <NavLink
                href="/"
                label="Agenda"
                renderRoot={renderLink}
                active={router.pathname === "/"}
            />
            <NavLink
                href="/settings"
                label="Instellingen"
                renderRoot={renderLink}
                active={router.pathname === "/settings"}
            />
        </Drawer>
    );
};

export default NavBar;

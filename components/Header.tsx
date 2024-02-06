import { AppShell, Burger } from "@mantine/core";
import Logo from "./svg/Logo";

interface Props {
    Button?: React.ReactNode;
    setNavOpen: (navOpen: any) => void;
    navOpened: boolean;
    onClose: () => void;
}

const Header: React.FC<Props> = ({
    Button,
    setNavOpen,
    navOpened,
    onClose,
}) => {
    return (
        <AppShell.Header
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
            display="flex"
            p="xs"
        >
            {Button || <div style={{ marginRight: "auto" }} />}
            <Logo />
            <Burger
                ml="auto"
                opened={navOpened}
                onClick={() => (navOpened ? onClose() : setNavOpen(true))}
                transitionTimingFunction="linear"
            />
        </AppShell.Header>
    );
};

export default Header;

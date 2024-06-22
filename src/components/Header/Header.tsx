import {Burger, Container, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {links} from "../../pages/Router.tsx";



export function Header() {
    const [opened, {toggle}] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                <Container fluid className={classes.left}>
                    <Link to="/" className={classes.mainTitle}>Les SexMaitresses</Link>

                </Container>
                <Group gap={30} visibleFrom="xs">
                    {links.map((link) => (
                        <NavLink
                            to={link.link}
                            key={link.label}
                            className={classes.link}>
                            {link.label}
                        </NavLink>
                    ))}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
            </Container>
        </header>
    );
}
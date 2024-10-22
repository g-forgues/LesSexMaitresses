import {Burger, Container, Drawer, Group, Image} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {links} from "../../pages/Router.tsx";
import image from '../../assets/header.png';
import { useState } from 'react';



export function Header() {
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState<Number>(0);

    const handleClick = (index: Number) => {
        console.log(index);
        setActive(index);
        opened ? toggle : undefined;
    }

    const linksComponent = (
        links.map((link, index) => (
            <NavLink
                to={link.link}
                key={link.label}
                className={`${classes.link} ${index === active ? classes.active : undefined}`}
                onClick={()=> handleClick(index)}
            >
                {link.label}
            </NavLink>
        ))
    )

    return (
        <header className={classes.header}>
            <Container fluid  className={classes.inner}>
                <Container  className={classes.left}>
                    <Link to="/" className={classes.titleLogo} >     
                     <Image src={image} className={classes.image} />
                    </Link>

                </Container>
                <Group gap={30} visibleFrom="sm">
                    {linksComponent}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md"/>
                <Drawer
                    position="right"
                    offset={9}
                    opened={opened}
                    onClose={toggle}
                    title="Les SexMaitresses"
                    size="96%"
                >
                    {linksComponent}
                </Drawer>
            </Container>
        </header>
    );
}
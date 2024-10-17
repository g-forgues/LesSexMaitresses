import { Container, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
               
              <Text> mettre ÉCRIVEZ-NOUS ici. Sinon j'ai fait un début de <Link to="https://linktr.ee/guiloutest" target="_blank">Linktree</Link> pour tester </Text>  <Text>@lessexmaitresses </Text>
            </Container>
        </div>
    );
}
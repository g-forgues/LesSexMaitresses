import { Container, Title, Text, List } from '@mantine/core';
import classes from './Services.module.css';


function ServicesPage() {
    return (
        <Container my="md">
            <Title className={classes.title}>
                Services
            </Title>
            <div className={classes.inner}>
                <Text c="dimmed" mt="md">                                    
                <List
                    mt={30}
                    spacing="sm"
                    size="md"                        
                >
                    <List.Item>
                        <b> Apparition dans vos balados</b>
                    </List.Item>
                    <List.Item>
                        <b> Invitation pour soutenir votre art sexu et/ou féministe
                        </b>
                    </List.Item>
                    <List.Item>
                        <b> Participation à vos événements féministes, militants ou communautaires </b>
                    </List.Item>
                    <List.Item>
                        <b>Participation à vos conférences, panels et ateliers d’éducation à la sexualité ($)</b>
                    </List.Item>
                    <List.Item>
                        <b> Création de contenu vulgarisé pour vos réseaux sociaux ($)</b>
                    </List.Item>
                </List>
            </Text>
        </div>
        </Container>
    );

}

export default ServicesPage;
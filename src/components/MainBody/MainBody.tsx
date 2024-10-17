import { Container, Title, Text, List } from '@mantine/core';
import { Link } from "react-router-dom";
import classes from './MainBody.module.css';

export function MainBody() {

    return (
        <Container my="md">
                            <Title className={classes.title}>
                    Choses à faire
                </Title>
            <div className={classes.inner}>

                <Text c="dimmed" mt="md">                                    
                    <List
                        mt={10}
                        spacing="sm"
                        size="md"                        
                    > <List.Item>
                            <b>Travailler</b>   
                            </List.Item>
                         <List.Item>
                            <b>En tête</b>                          
                            <List spacing="sm" size="md" mt={10}>
                                <List.Item>
                                   Remplacer logo.
                                </List.Item>
                                <List.Item>
                                   Refaire l'alignement maintant que j'sais plus c'que je fais.
                                </List.Item>
                                <List.Item>
                                   Highlight page courante.
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>
                            <b>Page d'accueil </b> – <Link to="/test"> Nouvelle version </Link>
                            <List spacing="sm" size="md" mt={10}>
                                <List.Item>
                                   Texte moins sur des longues lignes.
                                </List.Item>
                                <List.Item>
                                   Liens sociaux option 1 ou 2. Feedbacks?
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>
                            <b>Épisodes</b> – Repenser design. J'le hais. À suivre.
                        </List.Item>
                        <List.Item>
                            <b>Collabos, services et qui-sommes nous</b> – Formattage, style, image, etc.  
                        </List.Item>
                        <List.Item>
                            <b>Autre</b>                          
                            <List spacing="sm" size="md" mt={10}>
                                <List.Item>
                                    Pied de page toujours en bas completement.      
                                </List.Item>
                                <List.Item>
                                   Toute vérifier mobile.
                                </List.Item>
                                <List.Item>
                                    PALETTE DE COULEUR POUR GUILLAUME: #137C8B #709CA7 #B8CBD0 #7A90A4 #344D59
                                </List.Item>
                            </List>
                        </List.Item>
                    </List>
                </Text>
            </div>
        </Container>
    );
}
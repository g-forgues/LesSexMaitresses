import { Image, Container, Title, Button, Group, Text, rem} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { IconBrandApplePodcast } from '@tabler/icons-react';
import image from '../../assets/trio.jpg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  //todo make objects of type, link, icon
  const FB = "https://www.facebook.com/lessexmaitresses";
  const IG = "https://instagram.com/lessexmaitresses";
  const SPOTIFY = "https://open.spotify.com/show/7dHcznBFHyVLhPhcCRZxZC";
  const APPLE = "https://podcasts.apple.com/ca/podcast/les-sexmaitresses/id1546523611?l=fr-CA";

  const openTab = (type: string) => {
    //embarassing
    if (type === "FB") {
      window.open(FB, "_blank");
    } else if (type === "IG") {
      window.open(IG, "_blank");
    } else if (type === "SPOTIFY") {
      window.open(SPOTIFY, "_blank");
    } else if (type === "APPLE") {
      window.open(APPLE, "_blank");
    }  
  }

  return (
    <Container size="90%">
      <div className={classes.inner}>
      <Image src={image} className={classes.image} />

        <div className={classes.content}>
          <Title className={classes.title}>
            Les SexMaitresses
          </Title>
          <Text c="dimmed" mt="md" lh="xl" fz="lg">
          Salut! Vous écoutez les SexMaitresses, Audrey, Sarah et Valérie, 
          diplômées de la maîtrise en sexologie et féministes du plus profond de notre âme.
          </Text>
          <Text c="dimmed" mt="md" lh="xl" fz="lg">
          Que vous soyez calé(e)s ou novices en la matière, on vous parle de sujets sexo, de sujets féministes parsemés d’anecdotes cocasses.
          </Text> 

          <Text mt="md" size="md" className={classes.subtitle}><b>Option 1</b></Text>

          <Group mt={10}>
            <Button variant="outline" size="md" className={classes.icons} onClick={() => openTab("IG")}>
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Button>
            <Button variant="outline" size="md" className={classes.icons} onClick={() => openTab("FB")}>
              <FontAwesomeIcon icon={faSquareFacebook} size="2xl" className={classes.icons} />
            </Button>
            <Button variant="outline" size="md" className={classes.icons} onClick={() => openTab("SPOTIFY")}>
            <FontAwesomeIcon icon={faSpotify} size="2xl" />
            </Button>
            <Button variant="outline" size="md" className={classes.icons} onClick={() => openTab("APPLE")}>
              <IconBrandApplePodcast stroke={2} style={{ width: rem(38), height: rem(38) }} />
            </Button>
            <Button variant="outline" size="md" className={classes.icons} onClick={() => openTab("APPLE")}>
              <IconBrandApplePodcast stroke={2} style={{ width: rem(38), height: rem(38) }} />
            </Button>
          </Group>         
        </div>
      </div>
    </Container>
  );
}
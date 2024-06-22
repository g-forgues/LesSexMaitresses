import Episode from "../../dto/Episode.ts";
import {Container, Text, Title} from "@mantine/core";

function EpisodeItem({ episode }: { episode: Episode }) {

    function createMarkup() {
        return {__html: episode.description};
    }

    return (
        <Container>
            <Title>{episode.title}</Title>
            <Text>{episode.date}</Text>
            <audio controls preload="none">
                <source src={episode.mp3} type="audio/mpeg"/>
            </audio>
            <Container dangerouslySetInnerHTML={createMarkup()} />
        </Container>
    );
}

export default EpisodeItem;
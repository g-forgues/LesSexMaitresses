import {Title} from "@mantine/core";
import {useLoaderData} from "react-router-dom";
import EpisodeItem from "../components/EpisodeItem/EpisodeItem.tsx";
import parseRss from "../util/RssParser.tsx";

function EpisodesPage() {

    const data = useLoaderData() as string;
    const episodes = parseRss(data);

    return (
        <>
            <Title>Episodes</Title>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.title} episode={episode}/>
            ))}
        </>
    );
}

export default EpisodesPage;

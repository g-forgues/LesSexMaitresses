import {Avatar, Container, Group, Text, Title} from "@mantine/core";
import About from "../../dto/About.ts";

function AboutItem({about, imageOnRight = false, showName = false}: { about: About, imageOnRight?:boolean, showName?:boolean }) {

    function getImgUrl(image: string) {
        return new URL(`../../assets/${image}`, import.meta.url).href;
    }

    const imageDiv = (
        <div>
            <Avatar
                src={getImgUrl(about.image)}
                size={300}
                radius="md"
            />
        </div>
    );

    let fontTest;
    if (about.name === "Valérie"){
        fontTest = "spectral";
    } else if (about.name ==="Audrey") {
        fontTest = "playfair";
    } else if (about.name==="Sarah") {
        fontTest = "merryweather";
    }

    const textDiv = (
        <div className={fontTest}>
            <Title order={2} hidden={!showName} my="xs">
                {about.name}
            </Title>
            <Title order={4}>
                {about.title}
            </Title>
            <Text>
                {about.primaryDescription}
            </Text>
            <Text>
                {about.secondaryDescription}
            </Text>
        </div>
    );

    return (
        <Container>
            <Group wrap="nowrap">
                {imageOnRight ? [imageDiv, textDiv]: [textDiv, imageDiv]}

            </Group>
        </Container>
    );
}

export default AboutItem;
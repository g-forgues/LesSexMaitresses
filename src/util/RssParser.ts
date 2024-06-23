import Episode from "../dto/Episode.ts";

export default function parseRss(rss: string): Episode[] {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rss, "text/xml");
    const itemList = xmlDoc.querySelectorAll('item');
    const episodes: Episode[] = [];

    itemList.forEach(item => {
        const title = (item.querySelector('title') as Element).innerHTML;
        const description = parseDescription((item.querySelector('description') as Element).innerHTML);
        const date = (item.querySelector('pubDate') as Element).textContent as string;
        const mp3 = (item.querySelector('enclosure') as Element).getAttribute('url') as string;

        episodes.push(new Episode(title, description, mp3, date));
    });

    return episodes;
}

function parseDescription(description: string): string {
    return description.replace("<![CDATA[", "")
        .replace("]]>", "")
        .replaceAll('<a', '<a target="_blank"');
}
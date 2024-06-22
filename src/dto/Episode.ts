export default class Episode {
    title: string;
    description: string;
    mp3: string;
    date: string;


    constructor(title: string, description: string, mp3: string, date: string) {
        this.title = title;
        this.description = description;
        this.mp3 = mp3;
        this.date = date;
    }
}
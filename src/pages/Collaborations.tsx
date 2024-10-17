import AboutItem from "../components/AboutItem/AboutItem.tsx";
import collabosData from '../data/collabos.json';

function CollaborationsPage() {
    return (
        <>
            {collabosData.map((collabo, index) => (
                <AboutItem key={collabo.name} about={collabo} imageOnRight={index % 2 === 1}/>
            ))}
        </>
    );

}

export default CollaborationsPage;
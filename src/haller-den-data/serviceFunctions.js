import {Episodes, Participants} from "./data";

export const getAllEpisodes = () => {
    return Episodes;
}

export const getAllParticipants = () => {
    return Participants;
}
export const getParticipantById = (id) => {
    return Participants.find(p => p.id === id);
}

export const getImageName = (movieName) => {
    let imageName = movieName.replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace('Å', 'a').replace('Ä', 'a').replace('Ö', 'o');
    return imageName.toLowerCase().replace(/[^a-z]+/g, "");
}

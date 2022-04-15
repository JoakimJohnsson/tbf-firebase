import {Episodes, Participants} from "./data";

export const getAllEpisodes = () => {
    return Episodes;
}

export const getAllParticipants = () => {
    return Participants;
}

export const getImageName = (movieName) => {
    return movieName.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
}

import React from "react";
import FetchAllSongs from "../../api-functions/Songs";

const SongList = () => {
    const songs = FetchAllSongs();
    return (
        <ul>
            {songs.map((song) =>
                <li key={song.id}>
                    <a href={song.url}>
                    {song.name}
                    </a>
                    <p className="text-truncate__200px small m-0">{song.url ? song.url : "No url available"}</p>
                </li>
            )}
        </ul>
    )
};

export default SongList;
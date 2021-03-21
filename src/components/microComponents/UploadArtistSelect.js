import React from 'react';

const UploadArtistSelect = ({artistId, onChange}) => (
    <select
        id="artistId"
        name="artistId"
        className="form-control"
        value={artistId}
        onChange={onChange}>
        <option value="select">-- Select --</option>
        <option value="15th-22">15th 22</option>
        <option value="the-baseball-field">The Baseball field</option>
        <option value="the-bodonis">The Bodonis</option>
        <option value="fredrik-svensson">Fredrik Svensson</option>
        <option value="mc-bomb">MC Bomb</option>
        <option value="music-ninja">Music / Ninja</option>
        <option value="olle">Olle</option>
        <option value="satans-galjonsfigurer">Satans Galjonsfigurer</option>
    </select>
);

export default UploadArtistSelect;

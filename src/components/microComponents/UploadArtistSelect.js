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
        <option value="the-alabama-alcoholics">The Alabama Alcoholics</option>
        <option value="a-blueprint">A Blueprint</option>
        <option value="the-baseball-field">The Baseball field</option>
        <option value="the-bodonis">The Bodonis</option>
        <option value="boys-on-heroin">Boys on Heroin</option>
        <option value="fangorn">Fangorn</option>
        <option value="h-2-0">H2O</option>
        <option value="mc-bomb">MC Bomb</option>
        <option value="music-ninja">Music / Ninja</option>
        <option value="olle">Olle</option>
        <option value="satans-galjonsfigurer">Satans Galjonsfigurer</option>
        <option value="fredrik-svensson">Fredrik Svensson</option>
    </select>
);

export default UploadArtistSelect;

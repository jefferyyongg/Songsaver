import React from "react"
import SongList from "./SongList";
import UserInput from "./UserInput";
import FilterSongs from "./FilterSongs";

function SearchSong ({songs, addInput, onSongClick, filterList}){
    return(
        <div className="searchSong">
            <UserInput onSubmit={addInput}/>

            <h2>MyPlaylist</h2>
            <FilterSongs
            onSubmit={filterList}
            />

            <SongList 
            songs={songs}
            onSongClick={onSongClick}
            />
        </div>
    )
}

export default SearchSong
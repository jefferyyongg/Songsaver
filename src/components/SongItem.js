import React from "react"

function SongItem({song, clickSong}){
    return(
            <li
            title={song.title}
            artist={song.artist}
            genre={song.genre}
            rating={song.rating}
            onClick={clickSong}
            >{song.title}   |  {song.artist}  |  {song.genre}  |  {song.rating}</li>
    )
}

export default SongItem
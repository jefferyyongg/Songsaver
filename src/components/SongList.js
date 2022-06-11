import React, {Component} from "react"
import SongItem from "./SongItem"

class SongList extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.songs.map((song, index) =>
                    <SongItem
                    song={song}
                    key={index}
                    clickSong={() => this.props.onSongClick(song)}
                    />
                    )}
                </ul>
            </div>
        )
    }
}

export default SongList
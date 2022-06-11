import React, { Component } from "react"
import SearchSong from "./components/SearchSong"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songSaverList: [
                { title: "Shape of you", artist: "Ed sheeran", genre: "Pop", rating: "5" },
                { title: "Rain on blues ", artist: "justin biebar", genre: "Jazz", rating: "5" },
                { title: "All by myself", artist: "Eric carmen", genre: "Classical", rating: "5" },
                { title: "Welcome to the jungle", artist: "Guns n roses", genre: "Rock", rating: "5" },
                { title: "Come as you are", artist: "Nirvana", genre: "Rock", rating: "1" },
                { title: "Bad Romance", artist: "Lady Gaga", genre: "Pop", rating: "3" },
                { title: "Africa", artist: "Toto", genre: "Pop", rating: "2" },
                { title: "Billie Jean", artist: "Michael Jackson", genre: "Rock", rating: "4" },
                { title: "Fur Elise", artist: "Beethoven", genre: "Classical", rating: "2" },
            ],

            filteredSongList: []
        }
        this.addInput = this.addInput.bind(this)
        this.onSongClick = this.onSongClick.bind(this)
        this.filterList = this.filterList.bind(this)
    }

    addInput = (song) => {
        this.setState({
            songSaverList: [...this.state.songSaverList,
            {
                title: song.title,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            }]
        })
    }

    onSongClick(song) {
        const newSongSaverList = this.state.songSaverList.filter(item => item.title !== song.title)
        this.setState({ songSaverList: newSongSaverList })
    }

    filterList(filter) {
        var filterList = filter.genre === "" ? this.state.songSaverList.map(item => item) : this.state.songSaverList.filter(item => item.genre === filter.genre)
            if(filter.sortAz === "a-z"){
                filterList.sort((a, b) => (a.title > b.title) ? 1 : -1)
            }else if(filter.sortAz === "z-a"){
                filterList.sort((a, b) => (a.title < b.title) ? 1 : -1)
            }
            this.setState({ filteredSongList: filterList })
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Song Saver List</h1>
                </header>

                <main>
                    <SearchSong
                        songs={this.state.filteredSongList.length > 0 ? this.state.filteredSongList : this.state.songSaverList}
                        addInput={this.addInput}
                        onSongClick={this.onSongClick}
                        filterList={this.filterList}
                    />
                </main>
            </div>
        )
    }
}

export default Container;

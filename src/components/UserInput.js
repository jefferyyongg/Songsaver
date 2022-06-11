import {useState} from "react"

function UserInput ({onSubmit}){

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    function addButton (e){
        e.preventDefault()
        const song = {
            title: title, artist: artist, genre: genre, rating: rating
        }
        onSubmit(song)
    }

    return(
        <form onSubmit={addButton}>
            <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Song Title"
            />

            <input
            type="text"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist"
            />

            <select 
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            >
                <option value="">-- Genre --</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
            </select>

            <select 
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            >
                <option value="">-- Rating --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button>Add Song</button>
        </form>
    )
}

export default UserInput
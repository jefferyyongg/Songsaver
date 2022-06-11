import {useState} from "react"

function FilterSongs ({onSubmit}){

    const [genre, setGenre] = useState("")
    const [sortAz, setSortAz] = useState("")

    function submitFilter(e){
        e.preventDefault()
        const filter = {genre: genre, sortAz: sortAz}
        onSubmit(filter)
    }
    

    return (
        <div>
            <form className="sortAlphabet">
                <button onClick={submitFilter}>Filter</button>

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
                
                <input 
                        type="radio" 
                        name="sortAz"
                        value="a-z"
                        onChange={(e) => setSortAz(e.target.value)}
                    />a-z

                <input 
                        type="radio" 
                        name="sortAz"
                        value="z-a"
                        onChange={(e) => setSortAz(e.target.value)}
                    />z-a
            </form>
        </div>
    )
}

export default FilterSongs


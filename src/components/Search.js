import React, {useState, useEffect} from "react"
import NewStoreForm from "./NewStoreForm";
import StoreList from "./StoreList";

function Search() {
    const [nextDoorStores, setNextDoorStores] = useState([])

    useEffect(() => {
      fetch ("http://localhost:8085/stores")
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setNextDoorStores(data)
      })

    
      
    }, [])
    
    return (

        <div>
            <div className="search-container">
                <input type="text" placeholder="Search names..." onChange={() => console.log("Searching...")} />
            </div>
            <NewStoreForm />
            { nextDoorStores.length > 0 && <StoreList allStores={nextDoorStores} />}
        </div>
    );
}

export default Search;
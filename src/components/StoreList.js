import React, {useEffect} from "react"
import Store from "./Store"

function StoreList({ allStores }) {
 useEffect(() => {
   
 console.log("allStores", allStores)
   
 }, [])
 

    return (
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {/** Render a list of <Store> components here. */
                    allStores.map((Store) => {
                        return (
                            <>
                                <Store store={Store} />
                            </>
                        )
                    })
                }


            </tbody>

        </table>
    );
}

export default StoreList;
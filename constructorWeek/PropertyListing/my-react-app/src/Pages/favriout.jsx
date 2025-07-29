import { useContext } from "react";

export function fav(){
    const{favrouties}=useContext()
    return(
          <>
<div>
    <h2>Your Favorite Properties</h2>
    {favrouties.length===0?(
    <p>No favrouties yet added</p>
    ):(
   <div>  {favorites.map((property) => (
            <PropertiesCard key={property.id} data={property} />
          ))}
    
    </div>
    )}
    <p></p>
    </div>        
        </>
    )
}
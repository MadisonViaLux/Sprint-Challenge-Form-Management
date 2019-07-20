import React, { useEffect, useState } from "react";
import { axiosAuth } from "./axiosAuth";

export default function Restricted ({ history }) {

    const [tokenData, setTokenData] = useState([]);

    const setRestricted = res => setTokenData(res)


    useEffect(() => {
   console.log(axiosAuth)

            axiosAuth().get("/restricted/data").then( res => {console.log(res); setRestricted(res.data)}).catch(err => console.error(err))

    }, [])

    return(
        <div>

            <label>Restricted data</label>

            <div>{tokenData.map((e, k) => {
              return  <div key={k}>
                    <h2>{e.name}</h2>
                    <p>{e.course}</p>
                    <p>{e.technique}</p>
                    {e.ingredients.map( (e, k) => {
                       return <div key={k}>
                            <p>{e}</p>
                        </div>
                    })}
                </div>
            })}</div>


        </div>
    )

}



// export default Restricted;
// name: 'Brisket',
// course: 'Main',
// technique: 'Sous-Vide',
// ingredients: [
//   'Smoked Salt',
//   'Prague Powder No. 1',
//   'Liquid Aminos',
//   'Chipotle Powder',
//   'Molassas'
// ]
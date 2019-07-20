import React, { useEffect, useState } from "react";
import { axiosAuth } from "./axiosAuth";

function Restricted ({ history }) {

    const [tokenData, setTokenData] = useState('');

    useEffect( () => {
        const token = localStorage.getItem('token');
        const url = 'http://localhost:5000/api/restricted/data'

        if(token){
            axiosAuth().get(url, {
                headers: {
                    'Authorization': `${token}`
                }
            }).then(res => {
                console.log(res)
                setTokenData(res.data.tokenData)
            })
            .catch(e => {
              console.log(e);
              localStorage.removeItem("token");
              history.push("/api");
            });
        }
    }, [history])

    return(
        <div>

            <label>Restricted data</label>

            <div>{tokenData}</div>


        </div>
    )

}



export default Restricted;
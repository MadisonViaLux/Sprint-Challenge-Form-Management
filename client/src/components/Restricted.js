import React, { useEffect, useState } from "react";
import { axiosAuth } from "./axiosAuth";

function Restricted ({ history }) {

    const [tokenData, setTokenData] = useState('');

    useEffect( () => {
        const token = localStorage.getItem('useToken');
        const url = 'http://localhost:5000/api/restricted/data'

        if(token){
            axiosAuth().get(url, {
                headers: {
                    'Authorization': `${token}`
                }
            }).then(res => {
                console.log(res)
            })
        }
    })

}



export default Restricted;
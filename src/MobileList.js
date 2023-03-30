import React from "react";
import { Mobile } from "./Mobile";
import { useState } from "react";
import { API } from "./global.js";
import { useEffect } from "react";
import { Changes } from "./Changes";
import { Wall1 } from "./Wall1";
import { PhoneList } from "./PhoneList";




export function MobileList() {

    const [mobileList, setMobileList] = useState([]);
    const getMobiles = () => {
        fetch(`${API}/mobiles`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMobileList(mvs));
    };
    useEffect(() => getMobiles(), [])
    return (

        <div className="mobile-list">
            <Wall1 />
            <Changes />
            <PhoneList />
            <h2 className="small-details">Review of Top products</h2>

            {mobileList.map((mv) => (
                <Mobile mobiles={mv} />
            ))}
        </div>
    )
}
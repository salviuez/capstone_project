import react from "react";
import { Carousels } from "./Carousels";
import { useState } from "react";

export function Home() {
    const [pictureList, setPictureList] = useState([]);
    // const pictures = () => {
    //     fetch(`${API}/mobiles`, {
    //         method: "GET",
    //     })
    //         .then((data) => data.json())
    //         .then((pcs) => setPictureList(pcs));
    // };
    const pictures = [
        { url: "https://www.edudwar.com/wp-content/uploads/2021/09/top-mobile-phone-companies.jpg", title: "mobile" },
        { url: "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?w=2000", title: "mobile" },
        { url: "https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Samsung-Samartphone.jpg", title: "mobile4" },

        { url: "https://w0.peakpx.com/wallpaper/874/260/HD-wallpaper-iphone-12-purple-mini-2021-apple-poster.jpg", title: "mobile" },
        { url: "https://images.indianexpress.com/2018/05/oneplus6_revealed1.jpg", title: "mobile2" },
        { url: "https://images.moneycontrol.com/static-mcnews/2020/04/Mi-Note-10-Lite-poster.jpg?impolicy=website&width=1600&height=900", title: "mobile3" },
        { url: "https://s3b.cashify.in/gpro/uploads/2022/07/17171534/Best-vivo-phone-under-8000-in-India.jpg", title: "mobile5" }
    ]
    //useEffect(() => pictures(), [])

    const pictureStyles = {
        width: "100%",
        height: "400px",
        margin: "0 auto",

    }
    return (
        <div>
            <div style={pictureStyles}>

                <h1>Home</h1>
                <Carousels pictures={pictures} />


            </div>


        </div>


    )
}



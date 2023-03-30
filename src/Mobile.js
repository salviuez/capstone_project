import React from "react";
import { Link } from "react-router-dom";


export function Mobile({ mobiles }) {

    // const mobiles =
    // {
    //     price: 20000,
    //     memory: "RAM 4GB and Internal storage 64GB",
    //     model: "OnePlus 9 5G",
    //     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    //     company: "Oneplus",
    //     rating: 4,
    //     summary: "Thank you kart❤ you always best, My phone delivered to me just in 3 days. And phone delivered to me safely and in perfect condition"
    // };





    const styles = {
        color: mobiles.rating > 3.9 ? "green" : "red"
    };

    // const navigate = useNavigate();

    // const [show, setShow] = useState(true);


    return (

        <div className="mobile-container">

            <div className="mobile-specs">
                <img src={mobiles.img} alt={mobiles.model} className="mobile-model" />
                <div className="mobile-name"><Link style={{ textDecoration: 'none' }} to="/">{mobiles.model} </Link>

                    <h4>💸{mobiles.price}  </h4>
                    <h5>💾 {mobiles.memory}</h5>

                </div>



                <div className="mobile-rating">
                    <h5 style={styles} className="mobile-rating"> ⭐{mobiles.rating}</h5>
                    <p>{mobiles.summary}</p>
                </div>

            </div>

        </div>



    )
}
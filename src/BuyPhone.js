import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';
import { purple } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export function BuyPhone() {
    const { id } = useParams();
    console.log(useParams());

    const [phone, setPhone] = useState({});
    const getPhone = () => {
        fetch(`${API}/phones/${id}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((pn) => setPhone(pn));
    };
    useEffect(() => getPhone(), []);

    const styles = {
        color: phone.rating > 8.5 ?
            "green" : "red",
    };
    const navigate = useNavigate();

    //buy button css
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: purple[700],

        },
    }));

    return (
        <div>
            <Card className="phone-container">
                <img src={phone.img} alt={phone.model} className="phone-poster" />
            </Card>
            <CardContent>
                <div className="phone-detail-container">
                    <div className="phone-specs">
                        <h2 className="phone-name">
                            {phone.name}

                        </h2>
                        <p style={styles} className="phone-rating"> ⭐{phone.rating} </p>
                    </div>

                    <p className="phone-summary"><h3>Price - {phone.price}</h3></p>
                    <p className="phone-summary">{phone.memory}</p>
                    <p className="phone-summary"><h2>{phone.model}</h2></p>
                    <Stack spacing={2} direction="row">
                        <ColorButton variant="contained">Click to Buy</ColorButton>
                        <Button variant="contained" disableElevation>Add to Cart </Button>
                    </Stack>




                </div>
            </CardContent>
            <Button onClick={() => navigate(-1)} color="inherit" className="back">
                Back
            </Button>

        </div>
    );
}

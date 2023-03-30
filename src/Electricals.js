import React, { useState } from "react";
// import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";



export function Electricals({ electricals, deleteButton, editButton }) {

    const styles = {
        color: electricals.rating > 8.5 ? "green" : "red"
    };

    const navigate = useNavigate();


    return (
        <Card className="phone-container">
            <img src={electricals.img} alt={electricals.model} className="phone-poster" />
            <CardContent>
                <div className="phone-specs">
                    <h3 className="phone-name">{electricals.model}</h3>


                    <p style={styles} className="phone-rating"> ⭐{electricals.rating} </p>


                </div>


            </CardContent>
            <CardActions>

                {/* <Counter /> */}
                {editButton} {deleteButton}
                <Button onClick={() => navigate(`/electricals/${electricals.id}`)} aria-label="delete" variant="contained" color="success">
                    Buy Now
                </Button>
            </CardActions>

        </Card>

    );
}

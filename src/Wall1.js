import react from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

export function Wall1() {
    const wall = { wallpost: "https://s3b.cashify.in/gpro/uploads/2022/11/17181422/Cashify-X-Apple-Exchange-Offer_-Best-Deals-On-iPhones.jpg", title: "mobile4" }


    return (
        <div className="fullwall">

            <div>
                <img src={wall.wallpost} className="post-style" />
            </div>

            <div className="movebtn">
                <ColorButton variant="contained" >Custom CSS</ColorButton>

            </div>




        </div>
    )
}
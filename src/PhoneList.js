import React from "react";
import { Phone } from "./Phone";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global.js"


export function PhoneList() {

    const [phonesList, setPhonesList] = useState([]);

    const getPhones = () => {
        fetch(`${API}/phones`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((phs) => setPhonesList(phs));
    };

    useEffect(() => getPhones(), [])




    const deletePhone = (id) => {
        fetch(`${API}/phones/${id}`, {
            method: "DELETE",
        }).then(() => getPhones(),);

    }


    const navigate = useNavigate();
    return (
        <div>
            <div className="phone-list">
                {phonesList.map((ph) => (
                    <Phone phone={ph}

                        deleteButton={
                            <IconButton
                                onClick={() => deletePhone(ph.id)}
                                color="error"
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>

                        }

                        editButton={
                            <IconButton
                                onClick={() => navigate(`/phones/edit/${ph.id}`)}
                                color="secondary"
                                aria-label="edit">
                                <EditIcon />
                            </IconButton>

                        }
                    />
                ))}
            </div>
        </div>

    );

}

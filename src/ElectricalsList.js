import React from "react";
import { Electricals } from "./Electricals";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global.js"


export function ElectricalsList() {

    const [electricalsList, setElectricalsList] = useState([]);

    const getElectricals = () => {
        fetch(`${API}/electricals`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((els) => setElectricalsList(els));
    };

    useEffect(() => getElectricals(), [])




    const deleteElectrical = (id) => {
        fetch(`${API}/electricals/${id}`, {
            method: "DELETE",
        }).then(() => getElectricals(),);

    }


    const navigate = useNavigate();
    return (
        <div>
            <div className="phone-list">
                {electricalsList.map((el) => (
                    <Electricals electricals={el}

                        deleteButton={
                            <IconButton
                                onClick={() => deleteElectrical(el.id)}
                                color="error"
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>

                        }

                        editButton={
                            <IconButton
                                onClick={() => navigate(`/electricals/edit/${el.id}`)}
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

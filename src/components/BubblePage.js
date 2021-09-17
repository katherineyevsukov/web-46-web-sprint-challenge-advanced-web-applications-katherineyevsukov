import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from "../services/fetchColorService";


const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`/colors/${editColor.id}`, editColor)
      .then((res) => {
        setColors(
          colors.map((col) => {
            return col.id === editColor.id ? res.data : col;
          })
        );
        setEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then((res) => {
        setColors(colors.filter((col) => col.id !== colorToDelete.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchColorService()
      .then((data) => setColors(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions

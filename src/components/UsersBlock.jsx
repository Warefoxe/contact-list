import React from "react";
import image from "../assets/img/Bitmap.png";
import call from "../assets/img/phone.png";
import edit from "../assets/img/edit.png";
import UpdateContact from "./UpdateContact";
import Button from "./Button";

const UsersBlock = ({ contact, index }) => {
  const [editMode, setEditMode] = React.useState(false);
  const toggleEditMode = () => setEditMode((mode) => !mode);

  return (
    <>
      <div className="contact-item">
        <div className="contact-item__header">
          <img src={image} alt="bitmap" className="contact-item__img" />
          <img
            src={edit}
            alt="edit"
            className="contact-item__edit"
            onClick={toggleEditMode}
          />
        </div>
        <div className="contact-item__content">
          <div className="contact-item__title">{contact.name}</div>
          <Button className="contact-item__button">
            <img src={call} alt="phone" />
          </Button>
        </div>
      </div>

      <UpdateContact
        {...contact}
        index={index}
        toggleEditMode={toggleEditMode}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </>
  );
};

export default UsersBlock;

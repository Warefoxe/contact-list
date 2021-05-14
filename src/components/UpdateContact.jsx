import React from "react";
import { useDispatch } from "react-redux";
import close from "../assets/img/clear-24px.png";
import { updateContact } from "../redux/actions/users";
import Button from "./Button";

const UpdateContact = ({
  name,
  phone,
  toggleEditMode,
  editMode,
  setEditMode,
  index,
}) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = React.useState({ name, phone });

  const updateFormValue = ({ target: { name, value } }) =>
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));

  const updateContactData = () => {
    dispatch(updateContact({ ...inputs }, index));
    toggleEditMode();
  };

  return (
    <>
      {editMode ? (
        <div className="modal">
          <div className="modal__block">
            <img
              src={close}
              alt="edit"
              className="modal-item__close"
              onClick={() => setEditMode((visiablity) => !visiablity)}
            />
            <div className="modal__title">Edit contact</div>
            <input
              className="modal__input"
              type="text"
              name="name"
              value={inputs.name}
              onChange={(e) => updateFormValue(e)}
            ></input>
            <input
              className="modal__input"
              type="text"
              name="phone"
              value={inputs.phone}
              onChange={(e) => updateFormValue(e)}
            ></input>
            <Button className="modal__button" onClick={updateContactData}>
              Save
            </Button>
            <Button
              className="modal__button modal__button-close"
              onClick={toggleEditMode}
            >
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UpdateContact;

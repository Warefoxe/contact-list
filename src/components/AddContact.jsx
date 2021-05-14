import React from "react";
import { useDispatch } from "react-redux";
import close from "../assets/img/clear-24px.png";
import { createContact } from "../redux/actions/users";
import Button from "./Button";

const AddContact = ({ onClose, showModal, setShowModal }) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = React.useState({ name: "", phone: "" });

  const updateFormValue = ({ target: { name, value } }) =>
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));

  const addContact = () => {
    dispatch(createContact({ ...inputs }));
    onClose();
  };

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal__block">
            <img
              src={close}
              alt="edit"
              className="modal-item__close"
              onClick={() => setShowModal((visiablity) => !visiablity)}
            />
            <div className="modal__title">New contact</div>
            <input
              className="modal__input"
              type="text"
              placeholder="Contact Name"
              name="name"
              value={inputs.name}
              onChange={(e) => updateFormValue(e)}
            ></input>
            <input
              className="modal__input"
              type="text"
              placeholder="Contact Phone"
              name="phone"
              value={inputs.phone}
              onChange={(e) => updateFormValue(e)}
            ></input>
            <Button className="modal__button" onClick={addContact}>
              Save
            </Button>
            <Button
              className="modal__button modal__button-close"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddContact;

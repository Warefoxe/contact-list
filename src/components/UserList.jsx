import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../redux/actions/login";
import Button from "./Button";
import UsersBlock from "./UsersBlock";

const UserList = ({ openModal, loginName }) => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.users.list);

  const logout = () => {
    dispatch(onLogout());
  };

  return (
    <>
      <div>
        <div className="header">
          <div className="container">
            <div className="header__content">
              <div className="header__name">Hello, {loginName}</div>
              <div className="header__logout" onClick={logout}>Logout</div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="container">
            <div className="about__content">
              <Button className="about__button" onClick={openModal}>
                New Contact
              </Button>
              <Button className="about__button">Download CSV</Button>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="container">
            <div className="contact__content">
              {contacts
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map((contact, index) => (
                  <UsersBlock contact={contact} index={index} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;

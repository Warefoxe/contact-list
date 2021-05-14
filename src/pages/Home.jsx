import React from "react";
import { useSelector } from "react-redux";
import AddContact from "../components/AddContact";
import UserList from "../components/UserList";

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);
  const login = useSelector((state) => state.login);

  const openModal = () => {
    setShowModal((visiablity) => !visiablity);
  };

  return (
    <>
      <div>
        <UserList {...login} openModal={openModal} />
        <AddContact
          onClose={openModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
};

export default Home;

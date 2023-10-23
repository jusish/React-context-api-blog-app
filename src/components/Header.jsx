import { useContext, useState } from "react";
import AddPost from "./AddPost";
import { AppContext } from "../context/AppState";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { darkTheme } = useContext(AppContext);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={`${darkTheme ? "dark" : ""}`}>
      <h1>Blog</h1>
      <button onClick={() => setOpenModal(!openModal)}>Create Post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;

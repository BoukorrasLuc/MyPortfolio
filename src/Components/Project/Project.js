// Scss
import "./Project.scss";

// Packages
import Modal from "react-modal";
import React from "react";

const Project = ({ item }) => {
  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -200%)",
  //     maxWidth: "350px",
  //     backgroundColor: "#fff",
  //     borderRadius: "10px",

  //     fontFamily: "poppins",
  //     boxShadow: "0 10px 10px #000000",
  //   },
  //   overlay: {
  //     backgroundSize: "100%",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center",
  //     zIndex: "10",
  //   },
  // };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="project">
      <section>
        <div className="container" onClick={openModal}>
          <div className="background-img">
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
                <h2>{item.name}</h2>
                <img src={item.picture} alt={item.name} />

                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Projet Modal"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="showInfos">
          <div className="infosContent">
            <div
              className="head"
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "5px 0",
                fontFamily: "poppins",
              }}
            >
              <h2>{item.name}</h2>&ensp;
              <div>
                <a
                  href={item.source}
                  className="button"
                  rel="noreferrer"
                  target="_blank"
                >
                  Code source
                </a>
                &ensp;
              </div>
              {item.netlify === null ? (
                <div>
                  <a
                    href={item.netlify}
                    className="button"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Projet non public
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    href={item.netlify}
                    className="button"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Projet
                  </a>
                </div>
              )}
            </div>
            <p className="text" style={{ marginTop: "15px" }}>
              {item.info}
            </p>
            <div className="button return" onClick={closeModal}>
              Retourner sur la page
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;

// Scss
import "./Project.scss";

// Packages
import Modal from "react-modal";
import React from "react";

const Project = ({ item }) => {
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
        contentLabel="Projet Modal"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{item.name}</h2>&ensp;
              <div className="sourceCode">
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
                <div className="netlify">
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
                <div className="netlify">
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
            <p className="text">{item.info}</p>
            <div className="buttonReturn" onClick={closeModal}>
              Retourner sur la page
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;

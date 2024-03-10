import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import useOutSideClose from "../../Hooks/useOutSideClose";

const ModalContext = createContext();

function Modal({ children }) {
  const [name, setName] = useState("");
  const close = () => setName("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const open = setName;

  return (
    <ModalContext.Provider
      value={{ name, close, open, setIsShowSuccessModal, isShowSuccessModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, name }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(name) });
}

function Page({ children, name: windowName, title }) {
  const { close, name } = useContext(ModalContext);
  const ref = useOutSideClose(close, true);
  if (name !== windowName) return null;

  return (
    <>
      <div
        id="delete-modal"
        className="bg-black/50 fixed inset-0  flex items-center justify-center  z-50"
      >
        <div ref={ref}>{cloneElement(children, { onClose: close })}</div>
      </div>
    </>
  );
}

Modal.Open = Open;
Modal.Page = Page;

export default Modal;

import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Checkbox from "./Checkbox";

const Modal = ({ showModal, setShowModal, handleStop }) => {
  const [classCompleted, setClassCompleted] = useState(false);
  const [classAborted, setClassAborted] = useState(false);
  const [otherReason, setOtherReason] = useState(false);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-sm mx-auto my-6 lg:max-w-3xl">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 space-x-16 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="flex-1 text-base font-semibold lg:text-2xl">
                    Select a reason to end class
                  </h3>
                  <button
                    className="z-10 float-right p-1 ml-auto text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-gray-500 sfocus:outline-none">
                      <MdClose />
                    </span>
                  </button>
                </div>

                <div className="relative flex-auto p-6 space-y-5">
                  <Checkbox
                    classCompleted={classCompleted}
                    setClassCompleted={setClassCompleted}
                    classAborted={classAborted}
                    setClassAborted={setClassAborted}
                    otherReason={otherReason}
                    setOtherReason={setOtherReason}
                  />
                  <div className="flex">
                    <a
                      className="inline-block px-10 py-2 text-white no-underline bg-red-500 rounded hover:text-underline"
                      href="#"
                      onClick={() => handleStop()}
                    >
                      End Class
                    </a>
                    <a
                      className="inline-block px-5 py-2 text-gray-700 no-underline bg-transparent rounded hover:text-underline"
                      href="#"
                      onClick={() => setShowModal(false)}
                      s
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

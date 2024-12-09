import { useState } from "react";
import Modal from "../components/Modal";

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="text-xl my-8">Contact with us!</h1>
      <button
        className="my-6 bg-blue-600 w-32 rounded-md p-2 text-white hover:bg-blue-400"
        onClick={() => setIsOpen(true)}
      >
        Open Popup
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl font-bold text-red-400">Hiii</p>}
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded bg-slate-300 px-4 py-2 font-bold"
            >
              Ok
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nam dolorem maiores architecto quisquam voluptate numquam adipisci
          sunt dignissimos temporibus. Consequuntur enim, minima aut quia
          debitis officiis quis reiciendis nisi!
        </p>
      </Modal>
    </>
  );
};

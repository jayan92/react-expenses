import viteLogo from "/vite.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <NavLink to="/">
        <img src={viteLogo} alt="vite logo" />
      </NavLink>

      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={() => setIsOpen(true)}>Sign In</button>
          <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
              type="text"
              placeholder="Username"
              className="grow rounded border border-gray-600 px-2 py-1"
            />

            <input
              type="text"
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
            />
          </Modal>
        </li>
      </ul>
    </header>
  );
};

export default Header;

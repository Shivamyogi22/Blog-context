import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles.css";

export const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <div
            className={`w-full py-5 fixed top-0 ${
                isDarkMode ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow" : "bg-white text-black border shadow-lg"
            } flex justify-between`}
        >
            <button></button>
            <header className="text-center">
                <h1 className="text-3xl font-bold uppercase">
                    Shivam Yogi Blogs
                </h1>
            </header>
            <button className="text-2xl text-left m-2" onClick={toggleTheme}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
                {/* {isDarkMode ? " Light" : " Dark"}    */}
            </button>
        </div>
    );
};

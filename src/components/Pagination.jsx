import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import { useTheme } from "../context/ThemContext";
// import "../styles.css"

export const Pagination = ({ isDarkMode }) => {
    const { page, handlePageChange, totalPages } = useContext(AppContext);
    // const { isDarkMode } = useTheme();

    return (
        <div
            className={`w-full flex justify-center items-center fixed bottom-0  
        ${
            isDarkMode
                ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow"
                : "bg-white text-black border shadow-lg"
        }`}
        >
            <div className={`flex justify-between w-11/12 max-w-[670px] py-2 `}>
                <div className={` flex gap-x-2  `}>
                    {page > 1 && (
                        <button
                            className={`rounded-md border-2 px-4 py-1 `}
                            onClick={() => handlePageChange(page - 1)}
                        >
                            Previous
                        </button>
                    )}
                    {page < totalPages && (
                        <button
                            className="rounded-md border-2 px-4 py-1"
                            onClick={() => handlePageChange(page + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>

                <p className="font-bold">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
};

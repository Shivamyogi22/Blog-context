import { Header } from "./components/Header";
import { Blogs } from "./components/Blogs";
import { Pagination } from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect, useState } from "react";
import "./App.css";
// import "./styles.css";

export default function App() {
    const { fetchBlogPosts } = useContext(AppContext);

    useEffect(() => {
        fetchBlogPosts();
        // eslint-disable-next-line
    }, []);

    const [isDarkMode, setIsDarkMode] = useState("light");

    const toggleTheme = () => {
        setIsDarkMode((prevTheme) => !prevTheme);
    };

    return (
        // <div className="w-full h-full flex flex-col gap-y-1">
             <div className={`w-full min-h-screen flex flex-col gap-y-1 app ${isDarkMode ? 'dark' : 'light'}`}>
            <Header toggleTheme = {toggleTheme} isDarkMode = {isDarkMode}/>
            <Blogs isDarkMode={isDarkMode} />
            <Pagination isDarkMode={isDarkMode} />
        </div>
    );
}

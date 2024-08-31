import { useEffect, useState } from "preact/hooks";
//import type { FunctionalComponent } from "preact";
//import type ThemeToggle from "./ThemeToggle.astro";

let ThemeToggle = () => {
    let defaultTheme: string | null = "dark";

    try {
        let defaultTheme_ = localStorage.getItem("theme");
        defaultTheme = defaultTheme_;
    } catch (ex) {
//        console.log(ex);
        console.log(`Using a default theme of ${defaultTheme}`);
    }
    const [theme, setTheme] = useState(defaultTheme ?? "light");

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
        console.log(`classlist: ${document.documentElement.classList}`);
    }, [theme]);

    return (
        <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
    );
};

export { ThemeToggle };

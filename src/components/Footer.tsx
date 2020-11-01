import React from "react";

export default function Footer() {
    return (
        <footer className="text-center mt-auto">
            <p>quoctrungdh &copy; {new Date().getFullYear()}</p>
            <p>Powered by coffee, Gatsby and TailwindCSS</p>
        </footer>
    )
}
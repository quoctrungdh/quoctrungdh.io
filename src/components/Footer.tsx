import React from "react";

import GatsbyLogo from "../assets/icons/Gatsby.svg";
import TailwindCSSLogo from "../assets/icons/TailwindCSS.svg";
import CoffeeIcon from "../assets/icons/Coffee.svg";

export default function Footer() {
    return (
        <footer className=" mt-auto py-4 text-center">
            <p>quoctrungdh &copy; {new Date().getFullYear()}</p>
            <p className="flex items-center justify-center">
                Powered by
                <span className="mx-2 w-16"><img src={GatsbyLogo} alt="Gatsby logo"/></span> &amp;
                <span  className="mx-2 w-4"><img src={TailwindCSSLogo} alt="Tailwind logo"/></span>
                with lots of <span className="mx-1 w-4"><img src={CoffeeIcon} alt="Coffee"/></span>
            </p>
        </footer>
    )
}
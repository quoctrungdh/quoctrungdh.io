import React from "react";
import { Link } from "gatsby";

type NavItem = {
    id: string;
    label: string;
    url: string;
    desc: string;
}

type NavProps = {
    navItems: NavItem[]
}

export const navConfig: NavItem[] = [
    {
        id: "blog",
        url: "/",
        label: "Blog",
        desc: "TD's blog"
    },
    {
        id: "about",
        url: "/about",
        label: "About me",
        desc: "About TD"
    }
]

export default function Nav(props: NavProps) {
    return (
        <ul className="container mx-auto flex justify-end py-4">
            {props.navItems.map((item) => (
                <li className="mr-4" key={item.id}>
                    <Link
                        to={item.url}
                        activeClassName="underline"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
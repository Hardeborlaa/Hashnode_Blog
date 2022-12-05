import React from "react";

function Nav(){
return(
    <nav className="flex justify-between shadow-md h-18 mb-16 items-center px-7">
        <h1 className="text-3xl font-extrabold">
     Hardeborlaa
        </h1>
        <ul className="flex justify-between w-60">
            <li><a href= "https://twitter.com/Hardeborlaa">Twitter</a></li>
            <li><a href= "https://github.com/hardeborlaa">Github</a></li>
        </ul>
    </nav>
)
}

export default Nav;
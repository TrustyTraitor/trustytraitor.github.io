import './App.css';

import { marked } from "marked";
import GetReadme from "./GetReadme.ts";
import {useEffect} from "react";

export default function App() {
    let url: string = "https://raw.githubusercontent.com/TrustyTraitor/TrustyTraitor/main/README.md"

    useEffect(() => {
        GetReadme(url).then((data) =>
            document.getElementById("readme").innerHTML = marked.parse(data));
    });

    return (
        <div className="App">
                <div className="Text-Box Box-Glow">
                    <div id="readme"> </div>
                </div>
                <div className="Text-Box Box-Glow">
                    This site is a WIP. In the meantime,
                    check out my <a href="https://github.com/TrustyTraitor/" rel="noreferrer" target="_blank">Github </a>
                    to see more of my projects not included here.
                </div>
        </div>
    );
}

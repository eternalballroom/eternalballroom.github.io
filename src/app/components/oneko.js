import { useEffect } from "react";
import { Neko } from "./neko.ts";


export default function Oneko() {

    useEffect(() => {
        const neko = new Neko({ nekoName: "neko", nekoImageUrl: "oneko2.png" });
        neko.init();

        return () => {
            neko.destroy();
        };
    }, []);

    return <></>;
}
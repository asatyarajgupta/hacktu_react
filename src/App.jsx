
import {LampContainer} from "./components/ui/Lamp.jsx";
import { motion } from "framer-motion";
import {HeroParallax} from "./components/HeroParallax.jsx";
import Diamond from "./components/Diamond.jsx";
import {Navbar} from "./components/ui/Navbar.jsx";
import NavbarDemo from "./components/NavbarDemo.jsx";
import ExpandButton from "./components/ExpandButton.jsx";
import HoverEffect from "./components/ui/HoverEffect.jsx";
import UseContact from "./components/UseContact.jsx";

export default function App() {
    const products = [
        {
            title: "Moonbeam",
            link: "https://gomoonbeam.com",
            thumbnail: "https://i.pinimg.com/736x/e9/eb/9e/e9eb9ec1b0da71003807507b2368cd21.jpg",
        },
        {
            title: "Cursor",
            link: "https://cursor.so",
            thumbnail: "https://i.pinimg.com/736x/e9/eb/9e/e9eb9ec1b0da71003807507b2368cd21.jpg",
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
    ]
    const items = [
        { title: "Basic Plan", description: "no Sex only cuck chair nigga", link: "https://example.com/1" },
        { title: "Premium Plan", description: "Sex Consensual", link: "https://example.com/2" },
        { title: "Ultimate Plan", description: "Sex Consensual(not)", link: "https://example.com/3" },
    ];

    return (
        <>


            {/*</div>*/}
            <div className={"h-[500vh] bg-black"}>
                <div className={"mt-[-2rem]"}>
                    <NavbarDemo/>

                </div>


                <HeroParallax products={products}/>
                <div className="fixed bottom-5 right-5">
                    <ExpandButton
                        logo={"https://logosandtypes.com/wp-content/uploads/2022/03/cognito.svg"}
                        name="COGNITO"
                    />
                </div>
                <div className={"mt-[4rem]"}>
                    <HoverEffect items={items}/>

                </div>
                <div>
                    <UseContact />
                </div>

            </div>


        </>
    )
}
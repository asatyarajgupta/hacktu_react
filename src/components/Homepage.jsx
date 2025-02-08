import NavbarDemo from "./NavbarDemo.jsx";
import {HeroParallax} from "./HeroParallax.jsx";
import ExpandButton from "./ExpandButton.jsx";
import HoverEffect from "./ui/HoverEffect.jsx";
import UseContact from "./UseContact.jsx";

export default function Homepage() {
    const products = [
        {
            title: "Moonbeam",
            link: "https://gomoonbeam.com",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Cursor",
            link: "https://cursor.so",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            thumbnail: "https://i.ibb.co/PsvJNpYh/foundation.jpg" ,
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail: "https://i.ibb.co/PsvJNpYh/foundation.jpg",
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            thumbnail: "https://i.ibb.co/PsvJNpYh/foundation.jpg",
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },
    ]
    const items = [
        { title: "Basic Plan", description: "AI-powered learning with ads and limited features", link: "https://example.com/1" },
        { title: "Premium Plan", description: "Ad-free, personalized AI learning with advanced tools", link: "https://example.com/2" },
        { title: "Ultimate Plan", description: "AI tutoring, exam coaching, and exclusive early access", link: "https://example.com/3" },
    ];
    return (
        <>


            {/*</div>*/}
            <div className={"min-h-screen bg-black overflow-hidden"}>
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
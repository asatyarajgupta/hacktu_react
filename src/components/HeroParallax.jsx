import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {Cover} from "./ui/Cover.jsx";
import FlipWords from "./ui/FlipWords.jsx";

export const HeroParallax = ({ products }) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
    return (
        <div ref={ref} className="h-[300vh] py-40 overflow-hidden relative flex flex-col bg-black text-white w-full">
            <Header />
            <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                {/*<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">*/}
                {/*    {thirdRow.map((product) => (*/}
                {/*        <ProductCard product={product} translate={translateX} key={product.title} />*/}
                {/*    ))}*/}
                {/*</motion.div>*/}
            </motion.div>
        </div>
    );
};

export const Header = () => {
    const words = ["Share", "Shape", "Create"]

    return (
        <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full ">
            <h1 className="text-2xl md:text-7xl font-bold">THE <br/> <div className={"text-[6rem] text-[#d79921]"}>STUDY LOK</div></h1>
            <p className="max-w-2xl text-base md:text-xl mt-8">
                {/*Whether you're a student, professional or lifelong learner,so at STUDY LOK*/}
                <span className={"text-[2.5rem]"}> Let's <FlipWords words={words} />
                knowledge</span>

            </p>
        </div>
    );
};

export const ProductCard = ({ product, translate }) => {
    return (
        <motion.div
            style={{ x: translate }}
            whileHover={{ y: -20 }}
            className="group h-96 w-[30rem] relative flex-shrink-0"
        >
            <a href={product.link} className="block group-hover:shadow-2xl">
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-80 bg-black"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};

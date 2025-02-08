import React, { useEffect, useState, useId } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

const SparklesCore = (props) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        particleColor,
        particleDensity,
    } = props;

    const [init, setInit] = useState(false);
    const controls = useAnimation();
    const generatedId = useId();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container) => {
        if (container) {
            controls.start({
                opacity: 1,
                transition: {
                    duration: 1,
                },
            });
        }
    };

    return (
        <motion.div animate={controls} className={`opacity-0 ${className}`}>
            {init && (
                <Particles
                    id={id || generatedId}
                    className="h-full w-full"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: { value: background || "#0d47a1" },
                        },
                        fullScreen: { enable: false, zIndex: 1 },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: false, mode: "repulse" },
                                resize: true,
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            move: { enable: true, speed: speed || 4, direction: "none" },
                            number: {
                                density: { enable: true, width: 400, height: 400 },
                                value: particleDensity || 120,
                            },
                            opacity: { value: { min: 0.1, max: 1 } },
                            color: { value: particleColor || "#ffffff" },
                            size: { value: { min: minSize || 1, max: maxSize || 3 } },
                            shape: { type: "circle" },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </motion.div>
    );
};

export default SparklesCore;

import { useState } from "react";
import { Button } from "./ui/Button.jsx";
import { Input } from "./ui/input";

export default function ExamDevta() {
    const [urls, setUrls] = useState([""]);

    const addUrlField = () => {
        if (urls.length < 5) {
            setUrls([...urls, ""]);
        }
    };

    const updateUrl = (index, value) => {
        const newUrls = [...urls];
        newUrls[index] = value;
        setUrls(newUrls);
    };

    return (
        <div className="relative p-12 max-w-3xl mx-auto space-y-6 bg-black text-white min-h-screen overflow-hidden">
            {/* Cosmic Stars Background */}
            <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?night-sky,stars')" }}>
                </div>
                <div className="absolute inset-0 animate-moveStars"></div>
            </div>

            {/* Title with Neon Glow */}
            <h1 className="text-5xl font-bold text-center relative animate-pulse font-orbitron">Exam Devta</h1>
            <h2 className="text-2xl text-center relative">Enter Your URL (You can add maximum 5 URLs)</h2>

            <div className="space-y-6 relative">
                {urls.map((url, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                        <Input
                            value={url}
                            onChange={(e) => updateUrl(index, e.target.value)}
                            placeholder="Enter YouTube URL here..."
                            className="p-4 rounded-lg w-full border text-white placeholder-gray-300 bg-gray-900 border-gray-700 focus:ring-yellow-500 transition-all hover:shadow-lg"
                        />
                        {/* Video Thumbnail Preview */}
                        {url && url.includes("youtube.com") && (
                            <img
                                src={"https://img.youtube.com/vi/${url.split("v=")[1]?.split("&")[0]}/hqdefault.jpg"}
                                    alt="YouTube Thumbnail"
                                    className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                                    />
                                    )}
                            </div>
                            ))}
                    </div>

                {/* Buttons with Floating Effect */}
                    <Button
                    onClick={addUrlField}
                 className={`w-full p-3 text-lg relative transition-all transform hover:-translate-y-1 hover:shadow-lg ${urls.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''`}}
                 disabled={urls.length >= 5}
            >
                Add
            </Button>

            <Button
                className="w-full p-3 text-lg mt-4 bg-blue-600 hover:bg-blue-700 relative shadow-lg hover:shadow-blue-500 transition-all transform hover:-translate-y-1"
            >
                Submit
            </Button>

            {/* CSS Animation for Moving Stars */}
            <style>
                {`
            @keyframes moveStars {
              0% { transform: translateY(0px); }
              100% { transform: translateY(-50px); }
            }
            .animate-moveStars {
              background: url('https://source.unsplash.com/1600x900/?stars,galaxy') repeat;
              background-size: cover;
              opacity: 0.3;
              animation: moveStars 20s linear infinite alternate;
            }
          `}
            </style>
        </div>
);
}
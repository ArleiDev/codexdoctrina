// src/components/VideoAula.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const VideoAula = () => {
    const { videoId } = useParams();
    const videoUrl = `https://www.youtube.com/embed/videoseries?si=${videoId}`;

    return (
        <div className="flex h-screen">
            <Sidebar className="w-64 bg-orange-600 text-white" />
            <div className="flex-1 flex justify-center items-center p-4">
                <div className="w-full items-center flex justify-center  ">
                    <iframe
                        className="w-5/6 h-screen py-12 shadow-2xl"
                        src={videoUrl}
                        title="Video Aula"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoAula;

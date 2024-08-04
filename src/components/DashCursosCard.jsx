// src/components/DashCursosCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashCursosCard = ({ videoId, videoTitle, thumbnailUrl }) => {
    const navigate = useNavigate();
    
    const thumbnail = thumbnailUrl;

    const handleClick = () => {
        navigate(`/video-aula/${videoId}`);
    };

    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"
            onClick={handleClick}
        >
            <img
                className="w-full h-auto rounded-lg"
                src={thumbnail}
                alt={videoTitle}
            />
            <div className="p-2">
                <h3 className="text-lg font-bold">{videoTitle}</h3>
            </div>
        </div>
    );
};

export default DashCursosCard;

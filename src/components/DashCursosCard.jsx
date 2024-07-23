// src/components/DashCursosCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashCursosCard = ({ videoId, videoTitle }) => {
    const navigate = useNavigate();
    const thumbnailUrl = `https://i.postimg.cc/Qx1XXs5K/image.png`;

    const handleClick = () => {
        navigate(`/video-aula/${videoId}`);
    };

    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={handleClick}
        >
            <img
                className="w-full h-auto rounded-lg"
                src={thumbnailUrl}
                alt={videoTitle}
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{videoTitle}</h3>
            </div>
        </div>
    );
};

export default DashCursosCard;

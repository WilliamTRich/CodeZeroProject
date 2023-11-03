import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const history = useNavigate();

    const backButton = () => {
        history(-1);
    };

    return (
        <div className="flex flex-col items-center p-8">

        <button
            className="bg-accent-mediumlight w-[10%] text-background py-2 px-4 rounded-lg hover:bg-accent-light  hover:text-accent-mediumlight transition duration-300"
            type="submit"
            onClick={backButton}
        >
            Back
        </button>
        </div>

    );
};

export default BackButton;

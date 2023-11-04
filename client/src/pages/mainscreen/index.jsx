import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MainNav from '../../components/MainNav.jsx';

const MainScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const delay = 1000;
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={'flex flex-col min-h-screen w-screen bg-background'}>
            <MainNav />
            <div className={'flex flex-col md:flex-row h-auto md:h-[80%] p-5 md:gap-8 justify-center items-center'}>
                <img
                    src={'splashscreen-main.avif'}
                    alt={'Splash screen picture.'}
                    className={'h-[40em] w-[28em] md:w-[40em] object-cover border-highlight border-4 rounded-2xl mb-6 md:mb-0 md:h-full'}
                />
                <div className={'md:w-[28em] text-lg sm:text-l md:text-xl lg:text-2xl xl:text-3xl text-primary text-center md:text-left overflow-hidden'}>
                    <h2 className={`text-center text-3xl md:text-4xl font-bold mb-4 fade-in ${isVisible ? 'visible' : ''}`}>
                        Welcome to Pulse360
                    </h2>
                    <p className={`text-center p-2 fade-in ${isVisible ? 'visible' : ''}`}>
                        Your ultimate fitness companion! Whether you're a seasoned athlete or just starting your wellness journey, our app is designed to empower you to achieve your fitness goals and lead a healthier lifestyle.
                    </p>
                    <p className={`text-center p-2 fade-in ${isVisible ? 'visible' : ''}`}>
                        With personalized workout plans, comprehensive tracking tools, and a supportive community, Pulse360 is here to guide you every step of the way towards a fitter, stronger, and more vibrant you.
                    </p>
                    <p className={`text-center p-2 fade-in ${isVisible ? 'visible' : ''}`}>
                        Get ready to sweat, inspire, and transform with us!
                    </p>
                </div>
            </div>
            <div className={'flex justify-center items-center space-x-4 p-8 fade-in-buttons'}>
                <button
                    className={
                        `px-6 py-2 mr-10 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-highlight text-background border-background border-2 rounded-lg hover:bg-secondary hover:text-accent-extralight fade-in ${isVisible ? 'visible' : ''}`
                    }
                    onClick={() => navigate('/client-login')}
                >
                    Log in as Client
                </button>
                <button
                    className={
                        `px-6 py-2 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-highlight text-background border-background border-2 rounded-lg hover:bg-secondary hover:text-accent-extralight fade-in ${isVisible ? 'visible' : ''}`
                    }
                    onClick={() => navigate('/trainer-login')}
                >
                    Log in as Trainer
                </button>
            </div>
        </div>
    );
};

export default MainScreen;

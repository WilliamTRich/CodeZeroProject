import React from 'react';
import MainNav from '../../components/MainNav.jsx';

const MainScreen = () => {
    return (
        <div className={'flex flex-col min-h-screen w-screen bg-background'}>
            <MainNav />
            <div className={'flex flex-col md:flex-row h-auto md:h-[80%] p-5 md:gap-8 justify-center items-center'}>
                <img
                    src={'splashscreen-main.avif'}
                    alt={'Splash screen picture.'}
                    className={'h-[34em] w-[24em] md:w-[34em] object-cover border-highlight border-4 rounded-2xl mb-6 md:mb-0 md:h-full'}
                />
                <p className={'w-full md:w-[28em] text-lg sm:text-l md:text-xl lg:text-2xl xl:text-3xl text-primary text-center md:text-left overflow-hidden'}>
                    Welcome to Pulse360, your ultimate fitness companion!
                    Whether you're a seasoned athlete or just starting your
                    wellness journey, our app is designed to empower you to
                    achieve your fitness goals and led a healthier lifestyle.
                    With personalized workout plans, comprehensive tracking
                    tools, and a supportive community, Pulse360 is here to
                    guide you every step of the way towards a fitter, stronger,
                    and more vibrant you. Get ready to sweat, inspire, and
                    transform with us!
                </p>
            </div>
        </div>
    );
};

export default MainScreen;

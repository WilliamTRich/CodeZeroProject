const Nav = () => {
    return (
        <div className="flex h-screen w-56 flex-col justify-around bg-gray-900">
            <img
                src="/user2.png"
                className="mx-auto h-32 w-32 justify-center"
                alt={'User icon'}
            />
            <div className="flex h-64 w-full flex-col items-center justify-around text-xl text-amber-100">
                <button
                    className={
                        'bg-amber-600 w-40 text-center py-2 rounded-lg hover:bg-amber-800 hover:text-amber-200 duration-300'
                    }
                >
                    Dashboard
                </button>
                <button
                    className={
                        'bg-amber-600 w-40 text-center py-2 rounded-lg hover:bg-amber-800 hover:text-amber-200 duration-300'
                    }
                >
                    Messages
                </button>
                <button
                    className={
                        'bg-amber-600 w-40 text-center py-2 rounded-lg hover:bg-amber-800 hover:text-amber-200 duration-300'
                    }
                >
                    Calendar
                </button>
            </div>
            <button
                className={
                    'w-40 self-center bg-red-600 px-8 py-3 text-xl rounded-md text-red-100 hover:bg-red-500 transition duration-300'
                }
            >
                Log Out
            </button>
        </div>
    );
};

export { Nav };

import React from "react";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <CountdownCircleTimer
                isPlaying
                duration={30}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                size={500} // Increased the size
            >
                {({ remainingTime }) => (
                    <div style={{ fontSize: '20vw', fontWeight: 'bold', color: 'dark:text-white' }}>
                        {remainingTime}
                    </div>
                )}
            </CountdownCircleTimer>

            <Link to="/activity">
                <button
                    style={{
                        marginTop: '20px', // Added margin-top for space
                        background: '#d08b2a',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '1.5rem', // Increased font size
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Exit
                </button>
            </Link>
        </div>
    );
};

export default Timer;

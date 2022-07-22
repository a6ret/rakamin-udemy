import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useTransition, animated } from 'react-spring';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    // className='fixed bg-gray-200 top-0 left-0 h-full w-4/5 z-50 shadow'
    // className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });

    return (
        <nav>
            <FaBars
                className='text-xl'
                onClick={() => setShowMenu(!showMenu)}
            />

            {menuTransitions(
                ({ item, key, props }) =>
                    item && (
                        <animated.div
                            key={key}
                            style={props}
                            className='fixed bg-gray-200 top-0 left-0 h-full w-4/5 z-50 shadow'>tes</animated.div>
                    )
            )}
        </nav>
    );
};

export default Navigation;

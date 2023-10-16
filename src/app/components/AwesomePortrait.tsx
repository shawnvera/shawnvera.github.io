import React from 'react';
import Shawn from '../../../public/shawn-vera.jpg';
import Image from 'next/image';

function AwesomePortrait() {
    return (
        <>
            <header>
                <div className="flex items-center justify-center">
                    <div className="mask mask-hexagon">
                        <Image src={Shawn} alt="Shawn's Avatar" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default AwesomePortrait;

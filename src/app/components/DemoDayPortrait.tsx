import React from 'react'
import ShawnDemoDay from '../../../public/shawndemoday.svg';
import Image from 'next/image';

const DemoDayPortrait = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="mask mask-hexagon w-72 h-80">
        <Image src={ShawnDemoDay} alt="Shawn in front of his final project 'Inventory Controller'" />
    </div>
</div>
  )
}

export default DemoDayPortrait
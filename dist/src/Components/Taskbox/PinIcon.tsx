import React from "react";



{

  /* <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 288 512">

      <path d="M144 0C64.47 0 0 64.47 0 144c0 74.05 56.1 134.33 128 142.39v206.43l11.01 16.51c2.38 3.56 7.61 3.56 9.98 0L160 492.82V286.39c71.9-8.05 128-68.34 128-142.39C288 64.47 223.53 0 144 0zm0 256c-61.76 0-112-50.24-112-112S82.24 32 144 32s112 50.24 112 112-50.24 112-112 112zm0-192c-44.12 0-80 35.89-80 80 0 8.84 7.16 16 16 16s16-7.16 16-16c0-26.47 21.53-48 48-48 8.84 0 16-7.16 16-16s-7.16-16-16-16z" />

    </svg> */

}

const PinIcon = (props: React.SVGProps<SVGSVGElement>) => {

  return (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>

      <path d="M300.8 203.9L290.7 128H328c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24H56C42.8 0 32 10.8 32 24v80c0 13.2 10.8 24 24 24h37.3l-10.1 75.9C34.9 231.5 0 278.4 0 335.2c0 8.8 7.2 16 16 16h160V472c0 .7.1 1.3.2 1.9l8 32c2 8 13.5 8.1 15.5 0l8-32c.2-.6.2-1.3.2-1.9V351.2h160c8.8 0 16-7.2 16-16 .1-56.8-34.8-103.7-83.1-131.3zM33.3 319.2c6.8-42.9 39.6-76.4 79.5-94.5L128 96H64V32h256v64h-64l15.3 128.8c40 18.2 72.7 51.8 79.5 94.5H33.3z" />

    </svg>

  );

};



export default PinIcon;


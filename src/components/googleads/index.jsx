// import React, { useEffect } from 'react';

// const GoogleAds = ({ client, slot }) => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
//         script.async = true;
//         script.crossOrigin = "anonymous";
//         document.body.appendChild(script);

//         // Initialize ads after the script is loaded
//         script.onload = () => {
//             window.adsbygoogle && window.adsbygoogle.push({});
//         };

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <ins className="adsbygoogle"
//              style={{ display: 'block' }}
//              data-ad-client={client}
//              data-ad-slot={slot}
//              data-ad-format="auto"
//              data-full-width-responsive="true">
//     </ins>
//     );
// };

// export default GoogleAds;

import React, { useEffect, useRef } from 'react';

const GoogleAds = ({ client, slot }) => {
    const adRef = useRef(null);

    useEffect(() => {
        // Check if the adsbygoogle script is already in the document
        if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5243466940901679"]')) {
            const script = document.createElement('script');
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5243466940901679";
            script.async = true;
            script.crossOrigin = "anonymous";
            document.body.appendChild(script);

            // Initialize ads once the script is loaded
            script.onload = () => {
                if (window.adsbygoogle && adRef.current) {
                    window.adsbygoogle.push({});
                }
            };

            // Clean up: remove the script on component unmount
            return () => {
                document.body.removeChild(script);
            };
        } else {
            // If the script already exists, just push the ad
            if (window.adsbygoogle && adRef.current) {
                window.adsbygoogle.push({});
            }
        }
    }, []);

    return (
        <ins ref={adRef} className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client={client}
             data-ad-slot={slot}
             data-ad-format="auto"
             data-full-width-responsive="true">
        </ins>
    );
};

export default GoogleAds;

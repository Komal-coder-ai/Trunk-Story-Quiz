import React, { useEffect } from 'react';

const GoogleAds = ({ client, slot }) => {
    useEffect(() => {
        // Load the Google Ads script
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client={client}
             data-ad-slot={slot}
             data-ad-format="auto"
             data-full-width-responsive="true">
        </ins>
    );
};

export default GoogleAds;

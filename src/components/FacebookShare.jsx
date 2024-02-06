import React, { useEffect } from 'react';

const shareFacebook =()=>{
    useEffect(() => {
        window.fbAsyncInit = function () {
            //SDK loaded, initialize it
            window.FB.init({
                xfbml: true,
                version: 'v12.0'
            });
            //JS SDK initialized
            window.FB.XFBML.parse();
        };
    
        //load the JavaScript SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/zh_TW/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return(
        <div>

      {/* Facebook Share Button */}
        <div className="fb-share-button" data-href="https://exotic-pet.github.io/Web-Project/" data-layout="button" data-size="large">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website-url.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore"></a>
        </div>
    </div>
    )
}
export default shareFacebook;
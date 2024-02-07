import React, { useEffect } from 'react';

const shareLine = () => {
    useEffect(() => {
    // 在 component mount 時載入 Line 的 JavaScript SDK
    const script = document.createElement('script');
    script.src = 'https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // 在 component unmount 時移除 script 元素，以避免殘留
        document.body.removeChild(script);
    };
    }, []);

    return (
    <div>
      {/* Your React Component Content Here */}

      {/* Line Share Button */}
        <div 
            className="line-it-button" 
            data-lang="zh_Hant" 
            data-type="share-a" 
            data-env="REAL" 
            data-url="https://exotic-pet.github.io/Web-Project/" 
            data-color="default" 
            data-size="large" 
            data-count="false" 
            data-ver="3" 
            style={{ display: 'none' }}>
        </div>
    </div>
    );
}

export default shareLine;

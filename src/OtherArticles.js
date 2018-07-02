import React from 'react';

import OtherArticle from './OtherArticle';

const OtherArticles = () => {
    return (
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <OtherArticle src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc"/>
            <OtherArticle src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain" />
            <OtherArticle src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
            <OtherArticle src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
        </div>
    );
};

export default OtherArticles;
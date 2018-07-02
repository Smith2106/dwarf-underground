import React from 'react';

const OtherArticle = props => {
    return (
        <div className="small-6 medium-3 columns other-article">
            <a href="#">
                <img src={props.src} alt={props.alt} />
                <p>{props.name}</p>
            </a>  
        </div>
    );
}

export default OtherArticle;
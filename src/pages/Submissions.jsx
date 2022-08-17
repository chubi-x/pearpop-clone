import React from "react";

export default function Submissions(){
    return(
        <div>
            <div className="sort">
                Sort by:
                <button>views</button>
                <button>followers</button>
            </div>
            <div className="submissions-container">
                <div className="submission-list-item">
                    <div className="submisssion-img"></div>
                    <div className="submission-metadata">
                        <div className="social-details">
                            <div className="submission-account-name"></div>
                            <div className="submission-tiktok-followers"></div>
                        </div>
                        <div className="play-icon"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
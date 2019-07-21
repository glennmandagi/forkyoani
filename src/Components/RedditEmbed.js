import React, { Component } from 'react';

class RedditEmbed extends Component{
    
    componentWillMount(){
        const script = document.createElement("script");
        script.async = true;
        script.src = "//embed.redditmedia.com/widgets/platform.js";
        script.charset = "UTF-8";

        document.body.appendChild(script);
    }
    

    render(){
        const divStyle = {
            backgroundColor: "#ffffff",
        };

        return (
                <blockquote class="reddit-card" data-card-preview="1">
                    <a href="https://www.reddit.com/r/anime/comments/ceu2ns/kyoto_animation_fire_megathread/">
                        Kyoto Animation Fire Megathread</a> 
                        from <a href="http://www.reddit.com/r/anime">r/anime</a>
                </blockquote>
        );
    }

}

export default RedditEmbed;
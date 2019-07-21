import React, { Component } from 'react';
import './Component.css';
import RedditEmbed from './RedditEmbed';

class Sidebar extends Component {
    
    componentWillMount(){
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://platform.twitter.com/widgets.js";
        script.charset = "UTF-8";

        document.body.appendChild(script);
    }


    render(){
        const facebookPostStyle = {
            border:'none',
            overflow:'hidden',
            background:'#ffffff'
        };

        return (
            <sidebar id="about">
                <div className="container">
                    <div className="card">
                        <h1>Tragedy at Kyoto Animation</h1>
                        <p>Kyoto Animation, a Japanese animation studio based in Kyoto, is a treasure among many anime fans. Their studio No.1 was attacked by an arson on Thursday morning, July 18th, 2019.</p>
                        
                        <img src="https://cdn.cnn.com/cnnnext/dam/assets/190719112354-01-kyoto-fire-0719-super-169.jpg"/>
                        <br/>
                        <img src="https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2019/07/XJH127-719_2019_071056.jpg"/>
                        <br/>
                        <p>Since then the world was shaken by the tragic news. Reports were followed by <a href="https://www3.nhk.or.jp/nhkworld/en/news/20190719_04/">NHK</a>, <a href="https://www.bbc.com/news/world-asia-49055468">BBC</a>, <a href="https://www.theguardian.com/world/2019/jul/21/kyoto-animations-stories-celebrated-warmth-and-belonging-the-fire-is-a-tragic-loss-of-life-and-legacy">The Guardian</a>, <a href="https://www.cnn.com/2019/07/19/asia/kyoto-animation-fire-investigation-intl-hnk/index.html">CNN</a>, <a href="https://www.nytimes.com/2019/07/19/world/asia/japan-fire-kyoto-animation.html">New York Times</a>.</p>
                        <p>With 34 lives lost in the fire with more than 30 injured, the event is the deadliest mass-murder in Japan since WWII.</p>

                    </div>

                    <div className="card">
                        <h1>🔔 Updates</h1>
                        <p>There is a <a href="https://www.reddit.com/r/anime/comments/ceu2ns/kyoto_animation_fire_megathread/">reddit megathread</a> that is kept updated on the event.</p>
                        <p>Follow the fan administered <a href="https://www.facebook.com/kyoanico">Facebook page</a> for updates.</p>
                    </div>
                    
                    <div className="card">
                        <h1>🖤 Donations</h1>
                        <h2>Help the victims from the event</h2>
                        <p><a className="hoverTweet" href="https://twitter.com/SentaiFilmworks/status/1151726531896643584">Sentai Filmworks</a> is collaborating with <a href="https://twitter.com/gofundme/status/1151909731998392326">GoFundMe</a> to ensure all donations will assist individual victims of the (July 18th, 2019) fire at Kyoto Animation.</p>
                        
                        <div className="center responsive-object">
                        <iframe src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=help-kyoani-heal&image=1&coinfo=1&preview=1" frameborder="0"></iframe>

                        <div className="mini-card">
                        <img src="https://www.animate-onlineshop.jp/special/anion_info_en/images/logo_new.png"></img>
                        </div>
                        <p><a href="https://www.animate-onlineshop.jp/">Animate</a>, one of the largest chain retailers of anime, video games, manga from Japan, will be taking donations at all locations countrywide.</p>
                        </div>
                    </div>

                    <div className="card">
                        <h1>🤝 Support KyoAni</h1>
                        <p>There are more ways to support Kyoto Animation then donations.</p>

                        
                        <div className="share">
                            <div class="fb-share-button" data-href="https://www.gofundme.com/f/help-kyoani-heal" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.gofundme.com%2Ff%2Fhelp-kyoani-heal&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <br/>
                            <a href="https://twitter.com/intent/tweet?button_hashtag=PrayForKyoAni&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #PrayForKyoAni</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                        <p>Spread awareness through social media, or tell your friends.</p>


                        <img widht="100%" src="https://img21.shop-pro.jp/PA01407/047/PA01407047.png?cmsp_timestamp=20190717171616"></img>
                        <p>
                            Provide direct support through their <a href="https://kyoani.shop-pro.jp/">online shop</a>.
                            <br/>There is a guide to navigate through their shop <a href="https://twitter.com/zetsubouzhainu/status/1151770699054428162">here</a>.
                        </p>
                        <p>Watch their shows in following streaming servies:</p>
                        <a href="https://www.crunchyroll.com/miss-kobayashis-dragon-maid">
                            <div className="mini-card">
                                <img className="card-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/921px-Crunchyroll_Logo.svg.png"></img>
                            </div>
                        </a>
                        <a href="https://www.netflix.com/title/80223226">
                            <div className="mini-card">
                                <img className="card-logo" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png"></img>
                            </div>
                        </a>
                        <a href="https://www.funimation.com/discover/love-for-kyoani/">
                            <div className="mini-card">
                                <img className="card-logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2c4d56a-f66f-45e8-b6af-2f19d0f711d9/d9s8q8r-9492a155-089c-414d-a0a9-00da151537f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyYzRkNTZhLWY2NmYtNDVlOC1iNmFmLTJmMTlkMGY3MTFkOVwvZDlzOHE4ci05NDkyYTE1NS0wODljLTQxNGQtYTBhOS0wMGRhMTUxNTM3ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Th2AFX0n8CXQZXcIeAe2wksIUsqNtJCDLN2LazyU2xI"></img>
                            </div>
                        </a>
                    </div>

                    <div className="card">
                        <h1>💌 Message KyoAni  </h1>
                        <p> Crunchyroll is collecting messages to send to Kyoto Animation studio. Send them a supportive message with love at <a href="https://got.cr/for-kyoani">this link</a>.
                        </p>
                        <div className="center">
                            <div className="innerCenter">
                                <blockquote class="twitter-tweet">
                                    <p lang="en" dir="ltr">Thank you for everything, Kyoto Animation. 💌 
                                    <a href="https://twitter.com/hashtag/PrayForKyoAni?src=hash&amp;ref_src=twsrc%5Etfw">#PrayForKyoAni</a>
                                    <br/><br/>
                                    🌸 More: <a href="https://t.co/t62oLZr37h">https://t.co/t62oLZr37h</a> 
                                    <a href="https://t.co/HFmTPybphF">pic.twitter.com/HFmTPybphF</a>
                                    </p>
                                    &mdash; Crunchyroll (@Crunchyroll) <a href="https://twitter.com/Crunchyroll/status/1151956396834902016?ref_src=twsrc%5Etfw">July 18, 2019</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h1>💬 Contact Us</h1>
                        <p>We're a team of Kyoto Animation fan administrators on <a href="https://www.facebook.com/kyoanico/">facebook.com/kyoanico</a>. Follow us for updates on Facebook or message us for more info.</p>
                    
                        <div className="center">
                        <div class="fb-page" data-href="https://www.facebook.com/kyoanico/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/kyoanico/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/kyoanico/">Kyoto Animation - 京都アニメーション</a></blockquote></div>
                        </div>
                    </div>

                </div>
            </sidebar>
        );
    }
}

export default Sidebar;
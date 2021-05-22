import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
function Banner() {
    return (
        //we need to positon our div container to relative for the responsive-carousel to stay in the div cuz it has a position absolute by default
        <div className="relative ">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-300 to-transparent bottom-0 z-20"></div>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" />
                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" />

                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" />

                </div>

            </Carousel>
        </div>
    )
}

export default Banner

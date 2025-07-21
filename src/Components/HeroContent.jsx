import "./HeroContent.css";
function HeroContent(){
    return(
        <>
        <div className="Hero">
            <div className="hero-con">
                
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            
            <div className="hero-btn">
                <button className="primary-btn">Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on:</p>
                <div className="brand-icons">
                <img src="src\assets\flipkart.png" alt="Flipkart-logo"/>
                <img src="src\assets\amazon.png" alt="Amazon-logo"/>
                </div>
            </div>

         </div>
        <div className="hero-img">
            <img src="src\assets\shoe_image.png" alt="Shoe-image"/>
        </div>
        </div>
        </>
    )
}
export default HeroContent;
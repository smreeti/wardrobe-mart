import React from "react";


export default function About() {
  return (
    <>


      <section className="wholesec">
        <div className="cover-image resdiv image-container">
          <img src="../../images/team.jpg" className="resimg" alt="Cover" />
          <div className="overlay">
            <h1>About Us</h1>
          </div>
        </div>

        <section className="about-section remmargin">
          <div className="about-us-container">
            <div className="row">
              <div className="col-md-6">
                <video
                  className="img-fluid"
                  src="../../images/promotionvideo.mp4"
                  controls
                ></video>
              </div>
              <div className="col-md-6">
                <h2>Welcome to Wardrobe Mart – Your Ultimate Destination for Fashion and Style!

                </h2>
                <p>
                  At Wardrobe Mart, we believe that fashion is not just about clothing, but a reflection of your individuality, creativity, and personality. Our online emporium is dedicated to bringing you an exquisite collection of clothing, accessories, and more, carefully curated to cater to your diverse tastes and fashion aspirations.


                </p>
                <p>
                  With a passion for the latest trends and an eye for timeless classics,
                  we strive to be your go-to source for all things stylish.


                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="top_selling_container" className="changecol">
          <h1>SUCCESS STORIES</h1>
          <div id="top_selling">
            <div className="items resdiv">
              <img
                className="imgbor resimg"
                src="./../images/ryan.jpg"
                alt="Scooby Doo"
              />
              <p className="product_title">

                <span className="success"> Alex Thompson</span>
                <br></br>
              </p>
              <p className="product_title texts">

                Meet Alex, the visionary CEO of Wardrobe Mart. With a deep understanding of fashion trends and a keen business acumen, Alex transformed a small startup into a global fashion powerhouse. Through strategic partnerships, innovative marketing campaigns, and a relentless focus on customer satisfaction, Alex's leadership propelled Wardrobe Mart to new heights. Their story is a testament to how a clear vision and unwavering determination can reshape industries.
              </p>
            </div>
            <div className="items resdiv">
              <img
                className="imgbor resimg"
                src="./../images/smiling.jpeg"
                alt="Scooby Doo"
              />
              <p className="product_title">

                <span className="success">Mark Rodriguez</span>
                <br></br>
              </p>
              <p className="product_title texts">
                Introducing Mark, the brilliant mind behind Wardrobe Mart's technological prowess. As the CTO, Mark spearheaded the development of a cutting-edge e-commerce platform that revolutionized the online shopping experience. His expertise in leveraging AI-driven personalization and seamless user interfaces has not only enhanced customer engagement but also optimized backend operations. Mark's journey underscores the power of innovation in driving business success in the digital age.
              </p>
            </div>

            <div className="items resdiv">
              <img
                className="imgbor resimg"
                src="./../images/woman.jpg"
                alt="Scooby Doo"
              />
              <p className="product_title">

                <span className="success"> Lisa parker</span>
                <br></br>
              </p>
              <p className="product_title texts">

                Meet Lisa, the astute CFO of Wardrobe Mart. With an eagle eye for financial management, Lisa ensured the company's growth was not only steady but sustainable. Her strategic financial planning and resource allocation enabled Wardrobe Mart to expand while maintaining fiscal discipline. Lisa's story highlights the indispensable role of sound financial stewardship in securing the company's present and future.
              </p>
            </div>
          </div>
        </section>

        <section className="cover-image midimg" id="hero_banner">
          <div>
            <div className="slideshowAbout overlay" style={{ animationName: 'slideAbout' }}></div>
          </div>
        </section>

        <section className="introduction">
          <br />
          <p className="centertext">
            Elevating Fashion: Our Passion, Your Style
            <br />
            <br />
            <span className="fonttext">

              With a user-friendly interface, seamless shopping experience, and swift delivery, we aim to make your journey with us as enjoyable as the styles we offer. Your satisfaction is our priority, and every click you make is a step toward enhancing your wardrobe and style sensibilities.
            </span>
            <br />
            <br />
          </p>
        </section>

        <section className="about-section">
          <div className="about-us-container ">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img
                  src="./../images/shop.jpg"
                  alt="About Us"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h1 className="std">Discover Your Perfect Style</h1>

                <p className="standout">
                  Your Wardrobe Awaits at Clothes Wardrobe Mart
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
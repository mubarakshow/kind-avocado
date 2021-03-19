import React from "react";

const ProductsSection = () => {
  return (
    <section className="section">
      <div className="container container--lg">
        <div
          className="prodcuts--brochure-container"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          {/* Products Brocher */}
          <iframe
            className="products--brochure"
            src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vzp2cjko7k"
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            title=" jsx-a11y/iframe-has-title"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

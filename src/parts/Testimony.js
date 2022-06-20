import React from "react";
import Star from "elements/Star";
import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";

export default function Testimony(data) {
  return (
    <section>
      <div className="container">
        <div className="row align-item-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              />
            </div>
          </div>
          <div className="col-6">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

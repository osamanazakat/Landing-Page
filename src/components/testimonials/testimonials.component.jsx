import { testimonials } from "../../data";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./testimonials.scss";

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">What they've said</h2>
      <div className="testimonials__container">
        <motion.div
          className="testimonials__carousel"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="testimonials__carousel-inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {testimonials.map(({ id, avatar, name, description }) => {
              return (
                <motion.div className="testimonials__testimonial" key={id}>
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="testimonials__testimonial-avatar"
                  />
                  <h3 className="testimonials__testimonial-heading">{name}</h3>
                  <p className="testimonials__testimonial-text">
                    {description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import { features } from "../../data.js";
import "./features.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="features__container container">
        <div className="features__left">
          <h2 className="features__heading">What’s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="features__right">
          {features.map(({ id, number, heading, text }) => {
            return (
              <div key={id} className="features__feature">
                <div className="features__feature-heading-container">
                  <h3 className="features__feature-num">{number}</h3>
                  <h3>{heading}</h3>
                </div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

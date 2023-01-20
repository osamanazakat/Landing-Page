import "./cta.scss";
import Button from "../button/button.component";

const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__container container">
        <h2 className="cta__heading">Simplify how your team works today.</h2>
        <Button text="Get Started" className="btn-white" />
      </div>
    </section>
  );
};

export default Cta;

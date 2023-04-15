import center from "../Images/photo-grid.png";
export default function Center() {
  return (
    <>
      <section className="center">
        <img src={center} alt="" className="center-logo" />
        <h1 className="center-header">Online Experiences</h1>
        <p className="center-para">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </>
  );
}

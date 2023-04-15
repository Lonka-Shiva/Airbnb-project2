// import photo from "../Images/mountain-bike.png";
import star from "../Images/star.png";
export default function Card(props) {
  let badgeText;
  if (props.item.openspots === 0) {
    badgeText = "SOLDOUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={props.item.coverImg} alt="" className="card-img" />
        <div className="card-stats">
          <img src={star} alt="" className="card-star" />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • </span>
          <span className="gray"> {props.item.location}</span>
        </div>
        <p className="card-title">{props.item.title}</p>
        <p className="card-price">
          <b>From ${props.item.price}</b>
        </p>
      </div>
    </>
  );
}

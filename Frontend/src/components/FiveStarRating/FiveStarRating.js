
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {

const starList=[];

const StarFillCount=Math.floor(rating);

const hasStartHalf= rating -StarFillCount >=0.5;

  const emptyStarCount = 5-StarFillCount-(hasStartHalf?1:0)

  for (let i = 1; i <= StarFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  
  if (hasStartHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
 
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  return <div>{starList}</div>;
}
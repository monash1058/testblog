import Image from "next/image";
import logoDark from "../public/images/Background.png";


const Banner = () => {
  return (
    <div className="container">
    <Image src={logoDark} alt="logoDark" />
    </div>
  );
};

export default Banner;

import Head from "next/head";
import "slick-carousel/slick/slick.css";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import logoDark from "../public/images/Background.png";
import background2 from "../public/images/background2.png";
import background3 from "../public/images/backgroundLay.png";
import cardImg from "../public/images/Card.png";
import  cardImg4  from "../public/images/Subscribe.png";
import BannerBottom from "../components/BannerBottom";
import { IoIosArrowForward } from "react-icons/io";

export default function Home({post, accord }: any ) {
  return (
    <div>
      <Head>
        <title>Stamford</title>
        <link rel="icon" href="/smallLogo.ico" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <main className="font-bodyFont">
        <div className="container">
          <div>
            <Image src={logoDark} alt="logoDark" className="img1" />
            <p className="bannerText">{post[0].bannerTitle} </p>   
            <p className="bannerText1">{post[0].bannerPara}</p>
            <p className="smallText">{post[0].bannerText} <IoIosArrowForward /></p>
            <div className="top-right"><Image className="bannerImg" width={380} height={380} src={urlFor(post[0].mainImage).url()} alt="logoDark" /></div>
          </div>


          <h1 className="textService">{post[0].ClinicTitle}</h1>
          <h1 className="textHeader">{post[0].DiscoverService}</h1>

          <div className="nextBanner">
            <div>
              <Image src={cardImg} alt="card1" className="cardImg" />
              <div>
                <Image width={380} height={380} src={urlFor(post[0].gsimage).url()} alt="Pineapple" className="cardsimg2" />
                <p className="cardsimg2Text">{post[0].gsHeading}</p>
                <p className="cardsimg2Text1">{post[0].gsDesc}</p>
                <p className="cardsimg2Text2">{post[0].gsText} <IoIosArrowForward /></p>
              </div>
            </div>
            <div className="innerBanner">
              <Image src={cardImg} alt="card1" className="cardImg2" />
              <div>
                <Image width={380} height={380} src={urlFor(post[0].dsimage).url()} alt="Pineapple" className="cardsimg3" />
                <p className="cardsimg3Text">{post[0].dsHeading}</p>
                <p className="cardsimg3Text1">{post[0].dsDesc}</p>
                <p className="cardsimg3Text2">{post[0].dsText} <IoIosArrowForward /></p>
              </div>
            </div>
           
            <Image src={cardImg4} alt="cardImg4" className="cardImg4" />
           
            <Image src={background2} alt="background2" className="backImg2" />
          </div>

          <div className="nextBanner1">
           <p className="lastText">{post[0].locationText}</p>
           <p className="lastText1">{post[0].locationTitle}</p>
           <p className="lastText2">{post[0].locationPara}</p>
           <iframe className="maps"
           src={post[0].destination}
           style={{border:0}} 
           loading="lazy">
           </iframe>
            <BannerBottom value={accord}/>
            <Image src={background3} alt="background3" className="backImg3" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-4"></div> 
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{...}`
  const post = await sanityClient.fetch(query);
  const queryData = `*[_type == "accord"]{...}`
  const accord = await sanityClient.fetch(queryData);
  return {
    props: {
      post,
      accord
    }
  }
}
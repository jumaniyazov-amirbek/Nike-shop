import img1 from "../assets/infrom/nike-1.jpg";
import img2 from "../assets/infrom/https___cloudfront-us-east-2.images.arcpublishing.com_reuters_YC333JKSXFIDBPSJ5ST2T25XWE.avif";
import img3 from "../assets/infrom/depositphotos_654659632-stock-photo-nike-store-istiklal-street-beyolu.jpg";
export default function NikeInfo() {
  return (
    <div className="Information">
      <h1>Information</h1>
      <div className="Information-1block">
        <div className="Information-1block-text">
          <h1>Main type of activity</h1>
          <p>
            Nike is one of the largest companies in the world for the production
            of <br />
            sports products. The company's products are produced under the{" "}
            <br />
            following trademarks: Nike, Air Jordan, Total 90, Nike Golf, Team{" "}
            <br />
            Starter, etc. Nike also operates companies that manufacture products{" "}
            <br />
            under the brands Bauer, Cole Haan, Converse and Hurley
            International.
          </p>
        </div>
        <div className="Information-1block-img">
          <img src={img1} alt="" />
        </div>
      </div>
      <hr />
      <div className="Information-1block">
        {" "}
        <div className="Information-1block-img">
          <img src={img2} alt="" />
        </div>
        <div className="Information-1block-text">
          <h1>Performance indicators</h1>
          <p>
            The total number of employees is 26,700 people (2006). In 2005,
            <br />
            according to Hoovers, the turnover of the company was $14.9 billion,{" "}
            <br /> and the net profit was $1.3 billion.
          </p>
        </div>
      </div>
      <hr />
      <div className="Information-1block">
        <div className="Information-1block-text">
          <h1>"Swoosh" (Nike emblem)</h1>
          <p>
            The world-famous Nike sneaker was created in 1971 by Portland <br />
            University student-designer Carolyn Davidson. He received a $35 fee{" "}
            <br />
            for this work. This emblem has become one of the most famous <br />
            brands in the world. 1983 Nike chairman Phil Nate presented Davidson{" "}
            <br />
            with this silent gold ring and a piece of company stock as a token
            of <br />
            appreciation.
          </p>
        </div>
        <div className="Information-1block-img">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

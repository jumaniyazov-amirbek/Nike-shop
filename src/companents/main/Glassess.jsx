import glassess1 from "../../assets/images/0126756_nike-wmns-air-force-1-07-dd8959-100.webp";
import glassess2 from "../../assets/images/0173433_nike-air-force-1-07-fz4617-001.webp";
import glassess3 from "../../assets/images/0125847_nike-court-vision-lo-nn-dh2987-101.webp";
export default function Glassess() {
  return (
    <div className="Glassess-all">
      <div className="continer">
        <div className="Glassess-block">
          <div className="Glassess-block-btn">
            <img src={glassess2} alt="" />
            <div className="Glassess-block-btn-text">
           <p>nike air force 5 <br /> black </p>
            </div>
          </div>
          <div className="Glassess-block-btn">
            <img src={glassess1} alt="" />
            <div className="Glassess-block-btn-text">
           <p> Nike air force 1 </p>
            </div>
          </div>
          <div className="Glassess-block-btn">
            <img src={glassess3} alt="" />
            <div className="Glassess-block-btn-text">
           <p> Nike Court Vision Lo Nn </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Member() {
  return (
    
    <div className="Member-block">
      <h1>Information</h1>
      <div className="container">
        <div className="Member-block-text">
          <p>Where about Nike</p>
          <h4>
          The company was founded in 1972 by Phil Knight, a student on the <br />
           University of Oregon track team, and his coach, Bill Bowerman. The <br />
            motto of the company was "Just Do It". The name of the company is <br />
             derived from the name of the Greek god Nika.
          </h4>
         
          <Link to="/NikeInfo"><button>In detail</button></Link>

        </div>
      </div>
    </div>
  );
}

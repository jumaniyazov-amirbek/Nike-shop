import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Member() {
  const [data, setData] = useState([]);

  const url = "https://128de5c23d00ef14.mokky.dev/InformationNike";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);
  };
  return (
    <div>
      {
        data.map((product) => (
          <div className="Member-block">

            <h1>{product.h1}</h1>
            <div className="container">
              <div className="Member-block-text">
                <p>{product.p}</p>
                <h4>
                  {product.h4}
                </h4>

                <Link to="/NikeInfo"><button>In detail</button></Link>

              </div>
            </div>
          </div>
        ))}
    </div>

  );
}

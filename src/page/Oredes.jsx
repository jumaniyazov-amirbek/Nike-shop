import OredesMini from "../companents/main/OredesMini";
export default function Oredes() {
  return (
      <div className="Oredes-block">
          <div className="blok">
              <OredesMini />

          </div>
          <div className="Oredes-price">
              <h1>Summary</h1>
              <div className="Oredes-price-block">
                  <div className="Oredes-price-block-1">
                      <p>Subtotal</p>
                      <p>$ 20.000</p>
                  </div>
                  <div className="Oredes-price-block-1">
                      <p>Delivery</p>
                      <p>Free</p>
                  </div>
                  <div className="Oredes-price-block-1">
                      <p>Total</p> <p>$ 40.000</p>
                  </div>
                  <div className="Oredes-price-block-btn">
                      <button>Member Checkout</button>
                  </div>
              </div>
          </div>
      </div>
  );
}

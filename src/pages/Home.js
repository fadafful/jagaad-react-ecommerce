import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="info">
        <div className="info__item">
          <h2>Free Delivery</h2>
          <p>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="info__item">
          <h2>90 Days Return</h2>
          <p>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className="info__item">
          <h2>Secure Payment</h2>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

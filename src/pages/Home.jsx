import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Http from "../helper/Fetch";

const Home = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    getAllProperty();
  }, []);

  const getAllProperty = async () => {
    try {
      const response = await Http.get("/properties");
      setProperty(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            {property.map((item, index) => (
              <div className="col-sm-6 col-lg-4">
                <Link to={`/detail-property/${item.id}`} className="card card-sm" key={index}>
                  <a href="#" className="d-block">
                    <img
                      src="defaultImageForVilla.webp"
                      className="card-img-top"
                    />
                  </a>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <div>{item.property_name}</div>
                        <div className="text-muted">{item.Area.area_name}</div>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="text-muted">
                          {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                          </svg>
                          467
                        </a>
                        <a href="#" className="ms-3 text-muted">
                          {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                          </svg>
                          67
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

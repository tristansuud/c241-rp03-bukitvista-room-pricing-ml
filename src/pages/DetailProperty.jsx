import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const DetailProperty = () => {
  useEffect(() => {
    document.title = "Detail Property";
  }, []);
  return (
    <>
      <Header />
      {/* buatkan sebelah kiri setengahnya adalah foto property, sebelah kanan setengahnya informasi tentang property */}
      <div className="container-xl">
        <div className="row">
          <div className="col-6">
            <img
              src="https://images.unsplash.com/photo-1560185893-8a9b3b5e3f9f"
              alt="property"
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <h2>Nama Property</h2>
            <p>Deskripsi Property</p>
            <p>Alamat Property</p>
            <p>Harga Property</p>
            <p>Luas Property</p>
            <p>Deskripsi Property</p>
          </div>
        </div>
        {/* buatkan daftar card room yang dimiliki property  */}
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-sm-6 col-lg-4">
              <Link
                to="/detail-property/5/detail-room"
                className="card card-sm"
              >
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/beautiful-blonde-woman-relaxing-with-a-can-of-coke-on-a-tree-stump-by-the-beach.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{
                        backgroundImage: "url(./static/avatars/000m.jpg)",
                      }}
                    />
                    <div>
                      <div>Paweł Kuna</div>
                      <div className="text-muted">3 days ago</div>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProperty;

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      {/* card */}
      <div>
        {/* Page header */}
        <div className="page-header d-print-none mt-5">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <h2 className="page-title">Daftar Property</h2>
                <div className="text-muted mt-1">1-12 of 800 property</div>
              </div>
              {/* Page title actions */}
              <div className="col-auto ms-auto d-print-none">
                <div className="d-flex">
                  <div className="me-3">
                    <div className="input-icon">
                      <input
                        type="text"
                        defaultValue
                        className="form-control"
                        placeholder="Search…"
                      />
                      <span className="input-icon-addon">
                        {/* Download SVG icon from http://tabler-icons.io/i/search */}
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
                          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                          <path d="M21 21l-6 -6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page body */}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-sm-6 col-lg-4">
                <Link to="/detail-property/5" className="card card-sm">
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
      </div>
      <Footer />
    </>
  );
};

export default Home;

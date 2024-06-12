import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Http from "../helper/Fetch";

const DetailProperty = () => {
  const [property, setProperty] = useState([]);
  const [room, setRoom] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetailProperty();
  }, []);

  const getDetailProperty = async () => {
    try {
      const response = await Http.get("/properties/" + id);
      setProperty(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(property);

  return (
    <>
      <Header />
      {/* buatkan sebelah kiri setengahnya adalah foto property, sebelah kanan setengahnya informasi tentang property */}
      <div className="container-xl mt-5">
        <div className="row">
          <div className="col-6">
            <h2>Daftar Room Tersedia di {property.property_name}</h2>
            <p>Lokasi berada di {property.Area?.area_name}</p>
            <div
              id="carousel-captions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div>
                <div className="carousel-inner">
                  {property.rooms?.map((room, index) => (
                    <div className="carousel-item active" key={index}>
                      <img
                        className="d-block w-100"
                        alt
                        src="../../../public/defaultImageForVilla.webp"
                      />
                      <div className="carousel-caption-background d-none d-md-block" />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>{room.room_name}</h3>
                        <p>
                          Capacity: {room.capacity}, Bedroom: {room.bedroom}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carousel-captions"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-captions"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 mt-7">
            {/* select room id with drop down */}
            <div className="row mb-2">
              <div className="col-6">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="room_id"
                    name="room_id"
                    required
                    aria-label="Floating label select example"
                    onChange={(e) => {
                      const room_id = e.target.value;
                      const room = property.rooms?.find(
                        (room) => room.id == room_id
                      );
                      document.getElementById("capacity").value = room.capacity;
                      document.getElementById("bedroom").value = room.bedroom;
                    }}
                  >
                    <option value>Choose...</option>
                    {property.rooms?.map((room, index) => (
                      <option value={room.id} key={index}>
                        {room.room_name}
                      </option>
                    ))}
                  </select>
                  <label for="floatingSelect">Room</label>
                </div>
              </div>
            </div>

            {/* fill room name base on room id */}
            {/* fill capacity and bedroom base on room id */}
            <div className="row mb-2">
              <div className="col-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="capacity"
                    placeholder="Capacity"
                    disabled
                  />
                  <label for="capacity">Capacity</label>
                </div>
              </div>
              <div className="col-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="bedroom"
                    placeholder="Bedroom"
                    disabled
                  />
                  <label for="bedroom">Bedroom</label>
                </div>
              </div>
            </div>
            {/* select date start and date end */}
            <div className="row">
              <div className="col-6 mb-2">
                <p>Start Booking</p>
                <input
                  type="date"
                  class="form-control"
                  id="start_date"
                  required
                />
              </div>
              <div className="col-6">
                <p>End Booking</p>
                <input
                  type="date"
                  class="form-control"
                  id="end_date"
                  required
                />
              </div>
            </div>
            {/* click predict to predict price */}
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    const room_id = document.getElementById("room_id").value;
                    const start_date =
                      document.getElementById("start_date").value;
                    const end_date = document.getElementById("end_date").value;
                    const price = Math.ceil(Math.random() * 1000);
                    const duration = Math.ceil(
                      (new Date(end_date) - new Date(start_date)) /
                        (1000 * 60 * 60 * 24)
                    );
                    console.log(duration);
                    console.log(price);
                    const total_price = price * duration;
                    document.getElementById("total_price").value = total_price;
                  }}
                >
                  Predict Price
                </button>
              </div>
            </div>
            {/* show price in label */}
            <div className="col-6 mt-2">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="total_price"
                  placeholder="Total Price"
                  disabled
                />
                <label for="total_price">Total Price</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProperty;

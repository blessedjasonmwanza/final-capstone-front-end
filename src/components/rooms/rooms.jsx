import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../features/rooms/roomsState';
import Aside from '../sidebar/sidebar';

function Rooms() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.roomList.items);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 pt-3">

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="carousel slide multi-item-carousel" id="theCarousel">
                <div className="carousel-inner">
                  {rooms.map((item) => (
                    <div className="col-md-4 mb-3 item" key={item.id}>
                      <div className="card" id={item.id}>
                        <img
                          className="img-fluid"
                          src={item.image_url}
                          alt={item.name}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{item.name}</h4>
                          <p className="card-text">
                            {item.price}
                            {' '}
                            per night
                          </p>
                          <button type="button">More details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="left carousel-control"
                  href="#theCarousel"
                  data-slide="prev"
                >
                  <i className="glyphicon glyphicon-chevron-left" />
                </a>
                <a
                  className="right carousel-control"
                  href="#theCarousel"
                  data-slide="next"
                >
                  <i className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rooms;

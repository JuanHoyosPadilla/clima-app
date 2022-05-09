import { FaTemperatureLow,FaTemperatureHigh } from 'react-icons/fa';
import "../components/dataComponent/stylesData.css";

function DataTemp({datos}) {
  return (
    <>
      <div className="card mb-3 whithCard">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="cont-temp">
              <h4>
                <span>
                  <FaTemperatureLow />
                </span>
                <strong>{datos.main.temp}°C </strong>
              </h4>
              <img
                src={`http://openweathermap.org/img/wn/${datos.weather[0].icon}.png`}
                alt="icon"
                className="img-fluid rounded-start"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="nameCity">
                <strong>{datos.name}</strong>
              </h3>
              <h4>
                Country: <strong>{datos.sys.country}</strong>
              </h4>

              <h4>
                Humidity: <strong>{datos.main.humidity}% </strong>
              </h4>
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  <span>
                    <FaTemperatureHigh />
                  </span>{" "}
                  <strong>{datos.main.temp_max}°C</strong>
                </li>
                <li className="list-group-item">
                  <span>
                    <FaTemperatureLow />
                  </span>{" "}
                  <strong>{datos.main.temp_min}°C</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTemp;

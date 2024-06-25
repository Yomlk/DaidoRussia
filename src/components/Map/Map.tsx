import { YMaps, Map } from "@pbe/react-yandex-maps";
import "./Map.scss";

const MapYan = () => {
  return (
    <>
      <YMaps>
        <section>
          <div className="mapblk">
            <h2 className="MapText">Где нас найти</h2>
          </div>
          <Map
            className="Mapp"
            defaultState={{ center: [56.642193, 43.41255], zoom: 16 }}
          />
        </section>
      </YMaps>
    </>
  );
}

export default MapYan;

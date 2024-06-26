import { YMaps, Map } from "@pbe/react-yandex-maps";
import "./Map.scss";

const MapYan = () => {
  return (
    <>
      <YMaps>
        <section className="Mapsection">
          <div className="mapblk">
            <div className="MapBlkText"><h2 className="MapText">Наше местоположение</h2></div>
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

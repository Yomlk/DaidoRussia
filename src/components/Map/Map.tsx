import { YMaps, Map } from "@pbe/react-yandex-maps";
import "./Map.scss";
import { useTranslation } from "react-i18next";

const MapYan = () => {
  const { t } = useTranslation();
  const mapState = { center: [56.642193, 43.41255], zoom: 16 };
  const apiKey = "93cd2f38-3df7-46b7-8aae-5d1328b4bd82";

  return (
    <>
      <YMaps query={{ apikey: apiKey }}>
        <section className="Mapsection">
          <div className="mapblk">
            <div className="MapBlkText">
              <h2 className="MapText">{t("Map")}</h2>
            </div>
          </div>
          <Map className="Mapp" defaultState={mapState} />
        </section>
      </YMaps>
    </>
  );
};

export default MapYan;

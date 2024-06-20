import { useRef, useState, useEffect } from 'react';
import VideoButton from "../Buttons/VideoButton";
import "./Video.scss";
import "./media.scss";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    const handlePlay = () => setButtonVisible(false);
    const handlePause = () => setButtonVisible(true);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  const handlePlayButtonClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="BlkVideo">
      <div className="video-view">
        <video
          ref={videoRef}
          className="video"
          controls
          src="./src/components/Video/Video.mp4"
          poster="./src/components/Video/img/videoOBl.PNG"
          width="100%"
        >
          <p>
            Ваш браузер не поддерживает встроенные видео. Попробуйте посмотреть его по
            <a href="http://daidorussia.ru/data/pages/video/files/v2.2%20RUS.mp4">этой ссылке</a>.
          </p>
        </video>
        <div className="video-content">
          {buttonVisible && (
            <button className="PlayButton" onClick={handlePlayButtonClick}></button>
          )}
        </div>
      </div>
      <div className="RightSide">
        <div className="Text">
          <h2 className="About">О компании</h2>
          <p className="AboutText">
            <span className="Bold">ООО «Дайдо Металл Русь»</span> - крупнейший поставщик подшипников скольжения для сборочных конвейеров в России и странах СНГ.
          </p>
          <p className="AboutTextBot">
            Наличие полного цикла производства и высокотехнологичного оборудования позволяет выпускать широкий ассортимент продукции для бензиновых, дизельных двигателей и компрессоров:
            <br />
            - коренные и шатунные вкладыши;
            <br />
            - упорные полукольца;
            <br />
            - втулки.
          </p>
        </div>
        <div className="VideoBtn">
          <div><VideoButton /></div>
        </div>
      </div>
    </div>
  );
}

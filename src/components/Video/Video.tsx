import { useRef, useState, useEffect } from "react";
import VideoButton from "../Buttons/VideoButton";
import { useTranslation } from "react-i18next";
import "./Video.scss";
import "./media.scss";

const Video = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handlePlay = () => setButtonVisible(false);
    const handlePause = () => setButtonVisible(true);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
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
    <div className="Videosection">
      <div className="BlkVideo">
        <div className="video-view">
          <video
            ref={videoRef}
            className="video"
            controls
            src="./public/img/Video/Video.mp4"
            poster="./public/img/Video/videoOBl.PNG"
            width="100%"
          >
            <p>
              {t("video.videoNotSupported")}{" "}
              <a href="http://daidorussia.ru/data/pages/video/files/v2.2%20RUS.mp4"></a>
              .
            </p>
          </video>
          <div className="video-content">
            {buttonVisible && (
              <button
                className="PlayButton"
                onClick={handlePlayButtonClick}
              ></button>
            )}
          </div>
        </div>
        <div className="RightSide">
          <div className="Text">
            <h2 className="About">{t("video.sectionTitle")}</h2>
            <p
              className="AboutText"
              dangerouslySetInnerHTML={{
                __html: t("video.companyDescription"),
              }}
            ></p>
            <p
              className="AboutTextBot"
              dangerouslySetInnerHTML={{ __html: t("video.companyDetails") }}
            ></p>
          </div>
          <div className="VideoBtn">
            <div className="drop">
              <div className="menu-button" onClick={() => setOpen(!isOpen)}>
                <VideoButton btnkey="videoButton" />
              </div>
              <div className={`menu ${isOpen ? "active" : ""}`}>
                <div className="menu__list">
                  <p className="menu__item">{t("video.companyHistory")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

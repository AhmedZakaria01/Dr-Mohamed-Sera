import React, { useState } from "react";

export default function AnalFissure() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <>
    <div className="analBackground ">

    </div>
      <div className="container ">
        <div className="m-auto text-center">
          <iframe
            width="953"
            height="400"
            src="https://www.youtube.com/embed/Oe8TLPlJLHM"
            title="أفضل عملية تخسيس"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="mt-5"
            style={{
              borderRadius: "5px",
              boxShadow: "1px 3px 5px 0px #222222",
            }}
          ></iframe>
        </div>
        <h1 className="mt-3">AnalFissure</h1>
        <p>
          An anal fissure is a small tear in the skin of the lower wall of the
          rectum or a cut in the tissue lining the anus, and it causes pain
          during the process of passing stool. It is considered a common
          disease, but it does not lead to more serious diseases. It appears in
          different people at different ages, and anal fissures may appear with
          hemorrhoids.
        </p>
        <p className="fw-semibold">
          There are several symptoms of anal fissures
        </p>
        <ul>
          <li>Acute pain</li>
          <li>Itchiness</li>
          <li>A stinging or burning feeling during the excretory process</li>
          <li>Yellow secretions</li>
        </ul>
        <p className="fw-semibold">There are several causes of anal fissures</p>
        <p>
          An anal fissure occurs as a result of a wound (injury) in the area of
          the anus, and this occurs in several ways:
        </p>
        <ul>
          <li>
            Large stools, which lead to tightening and expansion of the anus
          </li>
          <li>Constipation and straining</li>
          <li>Frequent cases of diarrhea</li>
        </ul>
        <p className="fw-semibold">Anal fissure treatment:</p>
        <p>
          At least 50 percent of fissures heal on their own and can be treated
          with home remedies, including using a special medicated cream, using
          stool softeners, avoiding constipation, or sitz baths (soaking the
          area in plain warm water for 10-20 minutes, several times per day).
          Fissures that do not respond to treatment at home should be examined
          by a doctor to determine the reason for not healing.
        </p>
      </div>

      <div className="video-container w-100 pt-5 d-flex justify-content-center">
        {!isPlaying ? (
          <img
            src="/assets/4.png"
            //   alt="Video Thumbnail"
            style={{
              cursor: "pointer",
              width: "1000px",
              height: "500px",
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={handlePlayVideo}
          />
        ) : (
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/LPM9BoTk4FM?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=1&enablejsapi=1"
            allowFullScreen
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          ></iframe>
        )}
      </div>
    </>
  );
}

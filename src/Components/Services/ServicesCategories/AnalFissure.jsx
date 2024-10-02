import React, { useState } from "react";

export default function AnalFissure() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div className="analBackground ">
        <div className="pt-4">
          <p className="d-flex align-items-center justify-content-center text-white pt-5 fs-1 pt-5 fw-medium">
            Anal Fissure
          </p>
        </div>
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
        <h1 className="mt-3 titlecolor">AnalFissure</h1>
        <article className='pb-3'>
          An anal fissure is a small tear in the skin of the lower wall of the
          rectum or a cut in the tissue lining the anus, and it causes pain
          during the process of passing stool. It is considered a common
          disease, but it does not lead to more serious diseases. It appears in
          different people at different ages, and anal fissures may appear with
          hemorrhoids.
        </article>
        <p className="fw-bold titlecolor">
          There are several symptoms of anal fissures
        </p>
        <ul className='pb-3'>
          <li>Acute pain</li>
          <li>Itchiness</li>
          <li>A stinging or burning feeling during the excretory process</li>
          <li>Yellow secretions</li>
        </ul>
        <p className="fw-bold titlecolor">There are several causes of anal fissures</p>
        <article>
          An anal fissure occurs as a result of a wound (injury) in the area of
          the anus, and this occurs in several ways:
        </article>
        <ul className='pb-3'>
          <li>
            Large stools, which lead to tightening and expansion of the anus
          </li>
          <li>Constipation and straining</li>
          <li>Frequent cases of diarrhea</li>
        </ul>
        <p className="fw-bold titlecolor">Anal fissure treatment:</p>
        <article className='pb-5'>
          At least 50 percent of fissures heal on their own and can be treated
          with home remedies, including using a special medicated cream, using
          stool softeners, avoiding constipation, or sitz baths (soaking the
          area in plain warm water for 10-20 minutes, several times per day).
          Fissures that do not respond to treatment at home should be examined
          by a doctor to determine the reason for not healing.
        </article>
      </div>

 
    </>
  );
}

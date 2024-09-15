import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../assets/img-24.jpg";
import img2 from "../../../assets/img25.jpg";
import img3 from "../../../assets/img26.jpg";
import img4 from "../../../assets/img27.jpg";
import Loading from "../../Loading/Loading";
const AbdominalWallSurgeries = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  loading && <Loading />;

  return (
    <div className="container my-5">
      {/* First Section: Text Left, Image Right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 px-4">
          <h2 className="fw-bold mb-3 ">Abdominoplasty Surgeries</h2>
          <p>
            Tummy tuck surgery, also known as abdominoplasty, is a cosmetic
            procedure designed to remove excess skin and strengthen abdominal
            muscles. This surgery is particularly beneficial for individuals
            with significant amounts of loose skin and fat in the abdominal
            area, which may also be accompanied by muscle weakness. Sagging in
            the abdominal region, whether around the navel or across the
            midsection, can negatively impact both self-confidence and overall
            health. As this condition has become more prevalent, abdominoplasty
            and body contouring have emerged as highly effective solutions for
            restoring a firmer, more toned appearance.
          </p>
        </div>
        <div className="col-md-6">
          <img src={img1} alt="Tummy Tuck" className="img-fluid rounded-3" />
        </div>
      </div>

      {/* Second Section: Image Left, Text Right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img
            src={img2}
            alt="Causes of Sagging Abdomen"
            className="img-fluid rounded-3"
          />
        </div>
        <div className="col-md-6 px-4 ">
          <h2 className="fw-bold mb-3 ">Causes of Sagging Abdomen</h2>
          <p>
            Several factors contribute to the development of a sagging abdomen,
            including:
          </p>
          <ul className="list-unstyled">
            <li>- Individual body composition and genetics</li>
            <li> - Multiple pregnancies </li>
            <li> - Cesarean section deliveries </li>
            <li> - Significant fluctuations in body weight </li>
            <li> - Previous abdominal surgeries </li>
            <li> - The presence of a large umbilical hernia </li>
            <li> - Natural aging processes </li>
            <li> - Cesarean section deliveries </li>
          </ul>
        </div>
      </div>

      {/* Third Section: Text Left, Image Right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 px-4">
          <h2 className="fw-bold mb-3">Types of Tummy Tuck</h2>
          <p>
            There are two primary types of tummy tuck procedures, distinguished
            by the extent of skin removal and the surgical technique used:
          </p>
          <ul className="list-unstyled">
            <li>
              <h5>Full Tummy Tuck:</h5>
              <p>
                This procedure involves the removal of excess fat and skin from
                the abdominal area below the navel, tightening weakened
                abdominal muscles, and repositioning the navel for a more
                natural appearance.
              </p>
            </li>
            <li>
              <h5>Mini Tummy Tuck:</h5>
              <p>
                A less extensive procedure than the full abdominoplasty, the
                mini tummy tuck focuses on removing excess skin below the navel
                without altering its position. This procedure may also include
                tightening of the lower abdominal muscles.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-6 px-4">
          <img
            src={img3}
            alt="Types of Tummy Tuck"
            className="img-fluid rounded-3"
          />
        </div>
      </div>

      {/* Fourth Section: Centered Text Only */}
      <div className="row mb-5">
        <div className="col-12 text-start">
          <h2 className="text-center pt-5 pb-3 fw-bold">
            Suitability for Tummy Tuck
          </h2>
          <h4>
            There are some cases for which a tummy tuck is most suitable, which
            are:
          </h4>
          <ul className="list-unstyled">
            <li>- Women after repeated pregnancies and deliveries.</li>
            <li>- Obese patients. </li>
            <li>
              - Those who suffer from mild localized obesity in the abdominal
              area who do not respond to diets.
            </li>
          </ul>
          <h4> There is a recovery period for tummy tuck surgery: </h4>
          <p>
            You can be discharged from the hospital within several hours of the
            operation, but the recovery period from the tummy tuck operation may
            extend for 1-2 months, during which a complete recovery from the
            operation is made and the result is clearly visible, as the pain
            disappears, the swelling decreases, and the fluid accumulates in the
            place of the operation gradually. In order to speed up the healing
            process; the doctor’s instructions should be carried out after the
            operation.
          </p>
          <h4> The difference between liposuction and tummy tuck: </h4>
          <p>
            Liposuction is based on getting rid of excess fats from places where
            fat cells accumulate in the body in a chronic way, which is
            difficult to get rid of using traditional weight loss methods.
            During liposuction, a small hole is made in the skin layers and a
            thin tube connected to a liposuction device is inserted. As for the
            abdominoplasty operation, the excess skin in the anterior abdominal
            wall is cut and a flap is stretched from the upper piece of the
            abdominal wall and attached to the remaining piece above the pubic
            region through surgical sutures, then a place for the navel is made
            in the new abdominal wall if necessary. Usually, the two operations
            are combined, as liposuction alone is not sufficient to give the
            abdomen a flat shape free of sagging, so the doctor resorts to
            combining it with tummy tuck surgery to obtain the desired results.
          </p>
        </div>
      </div>

      {/* Fifth Section: Text Left, Image Right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 px-4">
          <h2 className="pb-3">Umbilical Hernia</h2>
          <p>
            An umbilical hernia occurs near the umbilicus and is common in
            children, often caused by the incomplete closure of the blood
            vessels in the umbilical cord. In many infants, the navel may
            protrude outward, particularly when crying, which is a typical sign
            of an umbilical hernia. Although this condition is common, it is
            usually not serious. Treatment typically involves repairing the
            abdominal wall hernia through either open surgery or laparoscopic
            procedures, depending on the severity of the case.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={img4}
            alt="Umbilical Hernia"
            className="img-fluid rounded-3"
          />
        </div>
      </div>

      {/* Last Section: Centered Text */}
      <div className="row mb-5">
        <div className="col-12 text-start">
          <h5 className="  text-center pt-5 pb-3 fw-bold">
            Symptoms of an Umbilical Hernia
          </h5>
          <ul className="list-unstyled">
            <li>
              - A small bulge or soft bump near the navel, typically ranging
              from one to five centimeters in diameter.
            </li>
            <li>
              - In infants, the hernia may become more prominent when crying or
              straining, but the bulge may subside when the child calms down or
              lies on their back.
            </li>
            <li>- Adults may experience abdominal discomfort.</li>
            <li>- Persistent pain or discomfort in the abdominal region.</li>
            <li>- Pain or discomfort that interferes with daily activities.</li>
            <li>- Worsening pain or discomfort over time.</li>
            <li>- Rapid increase in the size of the hernia.</li>
            <li>- Severe abdominal pain accompanied by vomiting.</li>
            <li>
              - Hernias that press on nerves, causing irritation and numbness.
            </li>
            <li>
              - Potential for tissue traction, such as the intestines, which may
              lead to compromised blood flow if untreated.
            </li>
          </ul>
          <h5 className="fw-bold"> Surgical Procedure:</h5>
          <ul className="list-unstyled">
            <li>- An incision is made to access the hernia.</li>
            <li>
              - The hernia is gently repositioned back into the abdomen, and may
              be secured or removed as necessary.
            </li>
            <li>
              - The weakened area of muscle is reinforced with stitches or, in
              the case of larger hernias, with an elastic mesh to prevent
              recurrence.
            </li>
            <li>
              - Recovery typically ranges from 3 to 6 weeks, with a gradual
              return to daily activities expected within 1 to 2 weeks.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbdominalWallSurgeries;

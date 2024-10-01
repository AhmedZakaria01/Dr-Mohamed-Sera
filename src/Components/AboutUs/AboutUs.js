import { useEffect, useState } from "react";
import dr_mohamed from "../../assets/doctor.jpeg";
import "./AboutUs.Module.css";
import Loading from "../Loading/Loading";
import Certificates from "../Certificates/Certificates";

function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  loading && <Loading />;
  return (
    <>
      <div className="about-us-container">
        {/* <h1 className="text-center">ABOUT US</h1> */}
        <div className="row d-flex justify-content-center">
          {/* <div className="col-sm-12 col-md-4 text-center mb-3">
            <img
              src={dr_mohamed}
              className="rounded-4 w-75"
              alt="Dr. Mohamed Sera"
            />
          </div> */}
          <div className="col-sm-12 col-md-6">
            {/* <article className="my-3">
              When we talk about us we will start with doctor Mohamed Sera and
              his educational journey from Al kasr EL Ainy to be a proficient
              vascular surgeon. He got his bachelor’s degree in medicine from
              Cairo University in 2008 and received his MBA in general surgery
              from El Menoufia University in 2016. Among his accomplishments, in
              2007 he got Dr. Hassan Hamdy’s Science award and was appointed as
              a member of the Infection Control Department at the Egyptian
              Ministry of Health in 2014 until his arrival as Director of the
              Infection Control Department (15 May Medical District) Health
              Affairs Directorate in Cairo 2015 until now.
            </article> */}
            {/* <h3 className="text-warning">READ MORE ABOUT Dr Mohamed Sera</h3> */}
            {/* <article>
              Dr. Sera has a TOEFL certificate from AMIDEAST, which is
              accredited by the British Embassy. Moreover, Sera was appointed as
              the permanent President of the world society for pelvic diseases
              (Hangzhou, China), and the general coordinator of the Egyptian
              Colon and Rectal Society (Egypt). It is worth mentioning that he
              was chosen to be the President at 1- the 27th Biennial Conference
              of the International Society of Colon and Rectal Surgeons, 2- the
              29th National Conference of Colon and Rectal Surgeons (India), 3-
              and the 2nd Conference of the International Society of Pelvic
              Floor and Disorders in Mumbai, India, September 2016. As well as
              he is a member of the Egyptian Society of Surgeons (Egypt).
            </article> */}
            {/* <h5 className="text-warning mt-3">
              Dr.MOHAMED SERA ALSO PARTICIPATED IN ATTENDING SOME FORUMS TO
              SHARE OPINIONS AND INFORMATION, SUCH AS
            </h5> */}
            {/* <ul className="list-unstyled">
              <li>
                <span className="text-warning"> - </span> The Second
                International Academic Symposium of Constipation” in Hangzhou,
                China, 2010.
              </li>
              <li>
                <span className="text-warning"> - </span>Attending “Basic and
                Clinical Research of Pelvic - Floor Disorders” in Hangzhou,
                China, 2010.
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the World
                Pelvic Floor Association
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the course
                "Career Development in Medicine"
              </li>
              <li>
                <span className="text-warning"> - </span> Training at Damascus
                University in Syria 2006.
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the "Basics
                of Infection Control" course in King Abdullah City - Al Ain
                Hospital.
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the "Medical
                Practice Ethics" course at King Abdullah City for Science and
                Technology - Al Ain Hospital.
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the
                "Healthcare Communication" course.
              </li>
              <li>
                <span className="text-warning"> - </span> Attend the Basic
                Surgical Skill Course in the Learning Resource Center.
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the
                "immediate life support" program qualified by the European
                Resuscitation Council.
              </li>
              <li>
                <span className="text-warning"> - </span> Attending the
                “Cardiopulmonary Resuscitation Training” included in the “ILS”
              </li>
            </ul> */}
          </div>
        </div>
        {/* <div className="d-flex bg-white justify-content-evenly flex-wrap logos-container">
          <div className="logo-item">
            <img
              src="https://mohamedsera.com/wp-content/uploads/2022/03/2-150x150.png"
              alt="logo1"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://mohamedsera.com/wp-content/uploads/2022/03/4-150x150.png"
              alt="logo2"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://mohamedsera.com/wp-content/uploads/2022/03/1-150x150.png"
              alt="logo3"
            />
          </div>
          <div className="logo-item">
            <img
              src="https://mohamedsera.com/wp-content/uploads/2022/03/3-150x150.png"
              alt="logo4"
            />
          </div>
        </div> */}
      </div>

      <div className="container">
        <div className="d-flex align-items-center">
          <div>
            <h1> Dr.Mohamed Sera</h1>
            <p>
              Dr. Sera has a TOEFL certificate from AMIDEAST, which is
              accredited by the British Embassy. Moreover, Sera was appointed as
              the permanent President of the world society for pelvic diseases
              (Hangzhou, China), and the general coordinator of the Egyptian
              Colon and Rectal Society (Egypt). It is worth mentioning that he
              was chosen to be the President at 1- the 27th Biennial Conference
              of the International Society of Colon and Rectal Surgeons, 2- the
              29th National Conference of Colon and Rectal Surgeons (India), 3-
              and the 2nd Conference of the International Society of Pelvic
              Floor and Disorders in Mumbai, India, September 2016. As well as
              he is a member of the Egyptian Society of Surgeons (Egypt).
            </p>
          </div>

          <div className="col-sm-12 col-md-4 text-center mb-3">
            <img
              src={dr_mohamed}
              className="rounded-4 w-50"
              alt="Dr. Mohamed Sera"
            />
          </div>
        </div>
              

              
        <h2>
          Dr.MOHAMED SERA ALSO PARTICIPATED IN ATTENDING SOME FORUMS TO SHARE
          OPINIONS AND INFORMATION, SUCH AS
        </h2>
        <article className="my-3">
          When we talk about us we will start with doctor Mohamed Sera and his
          educational journey from Al kasr EL Ainy to be a proficient vascular
          surgeon. He got his bachelor’s degree in medicine from Cairo
          University in 2008 and received his MBA in general surgery from El
          Menoufia University in 2016. Among his accomplishments, in 2007 he got
          Dr. Hassan Hamdy’s Science award and was appointed as a member of the
          Infection Control Department at the Egyptian Ministry of Health in
          2014 until his arrival as Director of the Infection Control Department
          (15 May Medical District) Health Affairs Directorate in Cairo 2015
          until now.
        </article>

        <h5 className="mt-3 ">
          Dr.MOHAMED SERA ALSO PARTICIPATED IN ATTENDING SOME FORUMS TO SHARE
          OPINIONS AND INFORMATION, SUCH AS
        </h5>
        <ul className="list-unstyled">
          <li>
            <span className="text-warning"> - </span> The Second International
            Academic Symposium of Constipation” in Hangzhou, China, 2010.
          </li>
          <li>
            <span className="text-warning"> - </span>Attending “Basic and
            Clinical Research of Pelvic - Floor Disorders” in Hangzhou, China,
            2010.
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the World Pelvic
            Floor Association
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the course
            "Career Development in Medicine"
          </li>
          <li>
            <span className="text-warning"> - </span> Training at Damascus
            University in Syria 2006.
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the "Basics of
            Infection Control" course in King Abdullah City - Al Ain Hospital.
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the "Medical
            Practice Ethics" course at King Abdullah City for Science and
            Technology - Al Ain Hospital.
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the "Healthcare
            Communication" course.
          </li>
          <li>
            <span className="text-warning"> - </span> Attend the Basic Surgical
            Skill Course in the Learning Resource Center.
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the "immediate
            life support" program qualified by the European Resuscitation
            Council.
          </li>
          <li>
            <span className="text-warning"> - </span> Attending the
            “Cardiopulmonary Resuscitation Training” included in the “ILS”
          </li>
        </ul>
        <Certificates />
      </div>
    </>
  );
}

export default AboutUs;

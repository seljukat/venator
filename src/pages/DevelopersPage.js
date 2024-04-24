import "../styles/flip-cards.css";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const DevelopersPage = () => (
  <>
    <div className="flip-cards developers-page-anim">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <RxAvatar style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="flip-card-back">
            <h1 className="flip-name">Arda</h1>
            <h1 className="flip-surname">Uyaroğlu</h1>
            <p>Computer Engineer</p>
            <div className="flip-card-back-footer">
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://github.com/arda-uyaroglu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="flip-icon" />
                </a>
              </div>
              <div className="between"></div>
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/arda-uyaro%C4%9Flu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin className="flip-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <RxAvatar style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="flip-card-back">
            <h1 className="flip-name">Berker</h1>
            <h1 className="flip-surname">Tomaç</h1>
            <p>Computer Engineer</p>
            <div className="flip-card-back-footer">
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://github.com/BerkerTomac"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="flip-icon" />
                </a>
              </div>
              <div className="between"></div>
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/berkertomac/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin className="flip-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <RxAvatar style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="flip-card-back">
            <h1 className="flip-name">Selçuk</h1>
            <h1 className="flip-surname">Topkaya</h1>
            <p>Computer Engineer</p>
            <div className="flip-card-back-footer">
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://github.com/seljukat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="flip-icon" />
                </a>
              </div>
              <div className="between"></div>
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/sel%C3%A7uk-topkaya-233b02230/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin className="flip-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <RxAvatar style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="flip-card-back">
            <h1 className="flip-name">Utku</h1>
            <h1 className="flip-surname">Oktay</h1>
            <p>Computer Engineer</p>
            <div className="flip-card-back-footer">
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://github.com/UtkuOktay"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="flip-icon" />
                </a>
              </div>
              <div className="between"></div>
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/utku-oktay-9b30581b4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin className="flip-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default DevelopersPage;

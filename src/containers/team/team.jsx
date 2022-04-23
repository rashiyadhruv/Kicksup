import "./team.scss";
import linkedin from "../../assets/images/linkedin.png";
import medium from "../../assets/images/medium.png";
import facebook from "../../assets/images/facebook.png";
import nba from "../../assets/images/nba.png";

import { Members } from "./utils/members";
const team = () => {
  return (
    <div className="team">
      <div className="team-text">
        <div>
          Without bonding and coordination,every project is a failure.Look at
          who makes KICKSUP great. ;)
        </div>
      </div>
      <div className="team-members">
        {Members.map((member) => (
          <div className="memcard-wrapper" key={member.id}>
            <div className="memcard-image">
              <img src={member.imgurl} alt={member.name} />
            </div>
            <div className="memcard-text">
              <div className="memcard-text-name">{member.name}</div>
              <div className="memcard-text-position">{member.position}</div>
            </div>
            <div className="memcard-links">
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<img src={linkedin} alt="linkedin" />}
                </a>
              ) : null}
              {member.medium ? (
                <a
                  href={member.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<img src={medium} alt="medium" />}
                </a>
              ) : null}
              {member.facebook ? (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<img src={facebook} alt="facebook" />}
                </a>
              ) : null}
              {member.nba ? (
                <a href={member.nba} target="_blank" rel="noopener noreferrer">
                  {<img src={nba} alt="nba" />}
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="team-text"> and You! ;)</div>
    </div>
  );
};

export default team;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import RegisterChallenge from "../components/RegisterChallengeButton";
// import EnterChallenge from "./EnterChallenge";
export default function Details() {
  return (
    <div className="challenge-details">
      <div className="challenge-details-header">
        <h2> CHALLENGE DETAILS </h2>
        <div className="tooltip">
          <FontAwesomeIcon icon={faCircleInfo} size="xl" />
        </div>
      </div>
      <div className="challenge-description">
        <p>If 2 of something is great, then how much better is FOUR ? ♦️♠️♥️</p>
        <p>
          That’ s the question we want to answer in a fun video that fits your
          content style, ending with a promotion for Zynga’ s Poker’ s newest
          game mode : Omaha.Omaha has double the cards of classic Texas Hold‘ Em
          for twice the gameplay action, and who doesn’ t like to double a good
          thing ? ♣️
        </p>
        <p>
          Open the video by showing two of something you love(think: tacos,
          pairs of shoes, puppies, new art supplies, etc) then cut to double
          that with FOUR… how awesome is that ? !You can express this by showing
          yourself reacting to two(nice) then four(AMAZING!) or by showing how
          four is better.
        </p>
        <p>
          Once you are done with your 2 to 4 transition(s), close out the video
          by showing Omaha gameplay and telling your audience, by text overlay
          or vocally or both, that if they think four is better they should
          download Zynga Poker.If you’ re choosing to display a link in your bio
          / link site etc you can also let them know that clicking it will get
          them 3 million free chips.
        </p>
        <p>
          ♦️Download Zynga Poker here : https : apps.apple.com / us / app /
          zynga - poker - texas - holdem / id354902315
        </p>
        ⚠️ Requirements:
        <br /> ✅US, UK, Australia, & Canada only <br /> ✅Must be 18 +
        <br /> ✅Caption MUST include include# ZyngaPartner and a call to action
        to check out the game for themselves. - Optionally, you can also comment
        on your own video tagging @zyngapokerofficial pinning it to the top,
        encouraging your audience to be an early follower and so they can stay
        up to date!
        <br /> ✅Must not include other logos, dangerous acts, obscenity, or
        music that is not from the TikTok commercial library. <br /> ✅Must
        include English subtitles if video is recorded in a non - English
        language. <p> </p>
      </div>
      <div className="challenge-rules">
        <div className="challenge-rule-numbers"> 1 </div>
        <p>
          Create a video using the creative and trend shown in this{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              textDecoration: "underline",
            }}
            href="https://www.tiktok.com/@wolfgangpoker/video/7102118074249153835"
          >
            link
          </a>
        </p>
        <div className="challenge-rule-numbers"> 2 </div>
        Enter your published link here so we can track your progress
      </div>
      <RegisterChallenge />
    </div>
  );
}


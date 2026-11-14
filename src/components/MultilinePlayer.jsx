import NewAudioPlayer from "./AudioPlayer";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MultilinePlayer = () => {
  const trackInfo = [
    {
      title: "Sister Journey",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AH6X2kgAa-09CbjK3RMMX0s/1%20Sister%20Journey%20%28Vietnamese%20Fantasy%29.wav?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Vietnamese Fantasy",
      index: "1",
      length: "1:32",
    },
    {
      title: "Run Tiger Run!",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AGwv0y28mgt-308azBV1Rj0/2%20Run%20Tiger%20Run%21%20%28Jungle%20Pursuit%29.wav?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Jungle Pursuit",
      index: "2",
      length: "0:52",
    },
    {
      title: "Gladwell",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AEMW28Dq8xuKHp-BDG6xRbg/3%20Gladwell%20%28JRPG%20Orchestral%20Rock%29.wav?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "JRPG Orchestral Rock",
      index: "3",
      length: "2:06",
    },
    {
      title: "Across the Astral Sea",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/APf-O2hLAhPLFAsaUQ5KTVY/4%20Across%20the%20Astral%20Sea%20%28TTRPG%20Pop-Punk%29.wav?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "TTRPG Pop-Punk",
      index: "4",
      length: "2:49",
    },
    {
      title: "Don't Play With Knives!",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AKT1_S-1_LQUy4u1UwEglIA/5%20Don%27t%20Play%20With%20Knives%21%20%28Retro%20Electronic%29.mp3?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Retro Electronic",
      index: "5",
      length: "0:33",
    },
    {
      title: "Kitty Conundrum",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/ACiUGos0-x_Be7DBtuiZVM0/6%20Kitty%20Conundrum%20%28Slapstick%20Country%29.mp3?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Slapstick Country",
      index: "6",
      length: "0:45",
    },
    {
      title: "Busy Hour",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AP4TwzUcPB0kdjqWWHj9lno/7%20Busy%20Hour%20%28Funk%20Fusion%29.mp3?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Funk Fusion",
      index: "7",
      length: "1:55",
    },
    {
      title: "Be A Hero",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AHs--wSXecKwBhoibnXWKdM/8%20Be%20A%20Hero%20%28Anime%20Opening%29.mp3?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Anime Opening",
      index: "8",
      length: "1:01",
    },
    {
      title: "Vignettes",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/1a8so68u69mvax8ybokob/AB-ePGoymcj5EtvWMpeutIc/9%20Vignettes%20%28Storybook%20Fantasy%29.wav?rlkey=n4l7mc7hira1fsyb0dn47r9ba&dl=0",
      info: "Storybook Fantasy",
      index: "9",
      length: "0:47",
    },
  ];

  const [selectedTrack, setSelectedTrack] = useState({
    title: trackInfo[0].title,
    track: trackInfo[0].track,
    index: "1",
    length: trackInfo[0].length,
  });

  const handleClick = (track) => {
    setSelectedTrack(track);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverEnter = (item) => {
    setHoveredIndex(item);
  };

  const handleHoverLeave = () => {
    setHoveredIndex(null)
  };

  return (
    <div style={{ paddingBottom: "25px" }}>
      <div style={{ margin: "auto", width: "30%", paddingBottom: "30px" }}>
        <NewAudioPlayer
          key={selectedTrack.title}
          songs={[selectedTrack.track]}
          trackName={selectedTrack.title}
          trackInfo={trackInfo}
          onSelectTrack={setSelectedTrack}
        />
      </div>
      <Container>
        <Row>
          <Col>
            {trackInfo.slice(0, 3).map((track, index) => {
              return (
                <>
                  <p
                    style={{
                      color: "white",
                      marginBottom: "0",
                      padding: "4px",
                      fontSize: "1rem",
                      marginLeft: "1.1%",
                      fontFamily: "Georgia",
                      fontWeight:
                        hoveredIndex === track.index ? "bold" : "",
                      backgroundColor:
                        selectedTrack.index === track.index
                          ? "#313131"
                          : "black",
                      borderRadius: "6px",
                    }}
                    key={index}
                    onClick={() => handleClick(track)}
                    onMouseEnter={() => handleHoverEnter(track)}
                    onMouseLeave={handleHoverLeave}
                  >
                    <span style={{ float: "right" }}>{track.length}</span>
                    {track.index}. {track.title} <br />
                    <i>{track.info}</i>
                    {track.index == "a" ? (
                      <span style={{ fontSize: ".5rem" }}>
                        Themes by Jérôme Leroy; Orchestration by Victor Kong
                      </span>
                    ) : (
                      <></>
                    )}
                  </p>
                </>
              );
            })}
          </Col>
          <Col>
            {trackInfo.slice(3, 6).map((track, index) => {
              return (
                <>
                  <p
                    style={{
                      color: "white",
                      marginBottom: "0",
                      padding: "4px",
                      fontSize: "1rem",
                      marginLeft: "1.1%",
                      fontFamily: "Georgia",
                      fontWeight:
                        hoveredIndex === track.index ? "bold" : "",
                      backgroundColor:
                        selectedTrack.index === track.index
                          ? "#313131"
                          : "black",
                      borderRadius: "6px",
                    }}
                    key={index}
                    onClick={() => handleClick(track)}
                    onMouseEnter={() => handleHoverEnter(track)}
                    onMouseLeave={handleHoverLeave}
                  >
                    <span style={{ float: "right" }}>{track.length}</span>
                    <span style={{ cursor: 'default' }}>{track.index}. {track.title}<br />
                      <i>{track.info}</i></span>
                    <br />
                  </p>
                </>
              );
            })}
          </Col>
          <Col>
            {trackInfo.slice(6, 9).map((track, index) => {
              return (
                <>
                  <p
                    style={{
                      color: "white",
                      marginBottom: "0",
                      padding: "4px",
                      fontSize: "1rem",
                      marginLeft: "1.1%",
                      fontFamily: "Georgia",
                      fontWeight:
                        hoveredIndex === track.index ? "bold" : "",
                      backgroundColor:
                        selectedTrack.index === track.index
                          ? "#313131"
                          : "black",
                      borderRadius: "6px",
                    }}
                    key={index}
                    onClick={() => handleClick(track)}
                    onMouseEnter={() => handleHoverEnter(track)}
                    onMouseLeave={handleHoverLeave}
                  >
                    <span style={{ float: "right" }}>{track.length}</span>
                    {track.index}. {track.title} <br />
                    <i>{track.info}</i>
                    {track.index == "a" ? (
                      <>Themes by Jérôme Leroy; Orchestration by Victor Kong</>
                    ) : (
                      <></>
                    )}
                  </p>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MultilinePlayer;

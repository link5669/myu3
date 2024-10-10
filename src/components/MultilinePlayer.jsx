import NewAudioPlayer from "./AudioPlayer";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MultilinePlayer = () => {
  const trackInfo = [
    {
      title: "A Bard’s Tale: Norse Vol. 1",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/ADb3WIIdIitPjp6Bi3PEi9Y/Audio%20Files/Select%20Tracks/1.%20A%20Bard%27s%20Tale%20%28Library%20Music%20%3A%20Viking%20Metal%2C%20Action%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "Viking Metal / Action",
      index: "1",
      length: "3:02",
    },
    {
      title: "Across the Astral Sea",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/AHbOtGUyUlzMqOG39D2RHjM/Audio%20Files/Select%20Tracks/2.%20Across%20the%20Astral%20Sea%20-%20Tekha%20%28TTRPG%20%3A%20Adventure%20Pop%20Punk%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "TTRPG / Adventure Pop Punk",
      index: "3",
      length: "2:49"
    },
    {
      title: "Dexter",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/APRJD3nkPdD0S5kqYJgEmEc/Audio%20Files/Select%20Tracks/3.%20Dexter%20%28Re-Score%20%3A%20Crime%20Drama%2C%20Main%20Titles%29.mp3?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "Crime Drama / Main Titles (Re-Score)",
      index: "2",
      length: "1:43",
    },
    {
      title: "Shpilkes",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/AAJjUEWCh5ozNGRXjNs3-p0/Audio%20Files/Select%20Tracks/4.%20Shpilkes%20%28Short%20Film%20%3A%20Psychological%20Thriller%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "Psychological Thriller / Suspense",
      index: "4",
      length: "0:55",
    },
    {
      title: "A Spell To Break",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/AHjMLkPQDT7mqMIT2zdcaAA/Audio%20Files/Select%20Tracks/5.%20A%20Spell%20To%20Break%20%28Short%20Film%20%3A%20Magical%20Fantasy%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "Short Film / Magical Fantasy",
      index: "5",
      length: "1:13",
    },
    {
      title: "Moonstruck",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/AJKp1XtjN7DloqUX9VVDuWw/Audio%20Files/Select%20Tracks/6.%20Moonstruck%20%28Feature%20Film%20%3A%20Romantic%20Comedy%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: `Romantic Comedy / Ghibli-Style Fantasy`,
      index: "6",
      length: "2:01",
    },
    {
      title: "Gladwell",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/ACILoQblYbov6QLkaZCsXEQ/Audio%20Files/Select%20Tracks/7.%20Gladwell%20%28JRPG%20Podcast%20%3A%20Orchestral%20Rock%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "JRPG Podcast / Orchestral Rock",
      index: "7",
      length: "2:11",
    },
    
    {
      title: "Resurgence of the Storm",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/AOPP_vnQ16LMuYyDZSrK-0o/Audio%20Files/Select%20Tracks/8.%20Resurgence%20of%20the%20Storm%20%28MOBA%20%3A%20Sci-Fi%20Adventure%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "MOBA / Sci-Fi Adventure",
      index: "8",
      length: "3:35",
    },
    {
      title: "Stalling",
      track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/AOypfgC2gmdVnAuWMBctV24/Audio%20Files/Select%20Tracks/9.%20Stalling%20%28Musical%20Theater%20%3A%20Folk%20Cabaret%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
      info: "Musical Theater / Folk Cabaret",
      index: "9",
      length: "1:00",
    },
  ];

  const audioTracks = [
    trackInfo[0].track,
    trackInfo[1].track,
    trackInfo[2].track,
    trackInfo[3].track,
    trackInfo[4].track,
    trackInfo[5].track,
    trackInfo[6].track,
    trackInfo[7].track,
    trackInfo[8].track,
  ];

  const [selectedTrack, setSelectedTrack] = useState({
    title: "A Bard’s Tale: Norse Vol. 1",
    track: "https://www.dl.dropboxusercontent.com/scl/fo/ixabmeia9gkmg65em8dp1/ADb3WIIdIitPjp6Bi3PEi9Y/Audio%20Files/Select%20Tracks/1.%20A%20Bard%27s%20Tale%20%28Library%20Music%20%3A%20Viking%20Metal%2C%20Action%29.wav?rlkey=kl8udpl881ml2puw7rnwkkjr2&dl=0",
    info: "Viking Metal / Action",
    index: "1",
    length: "3:02",
  });

  const handleClick = (track) => {
    setSelectedTrack(track);
  };

  const [hoveredItem, setHoveredItem] = useState({
    title: "", track: "", index: "", length: ""
  });

  const handleHoverEnter = (item) => {
    setHoveredItem(item);
  };

  const handleHoverLeave = () => {
    setHoveredItem({ title: "", track: "", index: "", length: "" });
  };

  const [playingTrackIndex, setPlayingTrackIndex] = useState(0);

  useEffect(() => {
    setSelectedTrack(trackInfo[playingTrackIndex]);
  }, [playingTrackIndex]);

  return (
    <div style={{ paddingBottom: "25px" }}>
      <div style={{ margin: "auto", width: "30%", paddingBottom: "30px" }}>
        <NewAudioPlayer
          trackName={selectedTrack.title}
          songs={audioTracks}
          trackInfo={trackInfo}
          playingTrackIndex={playingTrackIndex}
          setPlayingTrackIndex={setPlayingTrackIndex}
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
                        hoveredItem.index === track.index ? "bold" : "",
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
                        hoveredItem.index === track.index ? "bold" : "",
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
                    {track.index == "6" ? (
                      <span style={{ fontSize: ".8rem" }}>
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
                        hoveredItem.index === track.index ? "bold" : "",
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

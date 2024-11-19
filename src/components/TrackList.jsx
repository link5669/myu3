// TrackList.js
import React, { memo } from 'react';

const TrackList = memo(function TrackList({ 
  trackInfo, 
  selectedTrack, 
  onTrackClick,
  hoveredItem,
  onHoverEnter,
  onHoverLeave 
}) {
  return (
    <>
      {trackInfo.map((track, index) => (
        <p
          style={{
            color: "white",
            marginBottom: "0",
            padding: "4px",
            fontSize: "1rem",
            marginLeft: "1.1%",
            fontFamily: "Georgia",
            fontWeight: hoveredItem === index ? "bold" : "",
            backgroundColor:
              selectedTrack.title === track.title
                ? "#313131"
                : "black",
            borderRadius: "6px",
          }}
          key={track.title}
          onClick={() => onTrackClick(track)}
          onMouseEnter={() => onHoverEnter(index)}
          onMouseLeave={onHoverLeave}
        >
          <span style={{ cursor: "default" }}>
            {track.index}. {track.title}{" "}
          </span>
          <span style={{ float: "right" }}>{track.length}</span>
        </p>
      ))}
    </>
  );
});

export default TrackList;
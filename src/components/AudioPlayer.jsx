import "./App.css";
import React, { useEffect, useState, memo, useCallback } from "react";
import PlayPause from "./PlayPause";
import { Howl } from "howler";

const NewAudioPlayer = memo(({
  trackName,
  songs,
  trackInfo,
  playingTrackIndex,
  setPlayingTrackIndex,
}) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Create new Howl instance when track changes
  useEffect(() => {
    if (sound) {
      sound.unload(); // Clean up previous sound
    }

    const newSound = new Howl({
      src: songs,
      html5: true,
      preload: true,
      onload: () => {
        setDuration(newSound.duration());
        setProgress(0);
      },
      onend: () => {
        setIsPlaying(false);
        setProgress(0);
        if (setPlayingTrackIndex && playingTrackIndex < songs.length - 1) {
          setPlayingTrackIndex(playingTrackIndex + 1);
        }
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setIsPlaying(false);
        setProgress(0);
      }
    });

    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, [trackName]); // Change dependency to trackName instead of songs array

  // Update progress
  useEffect(() => {
    let intervalId;
    
    if (isPlaying && sound) {
      intervalId = setInterval(() => {
        const currentProgress = sound.seek();
        setProgress(currentProgress || 0);
      }, 100);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, sound]);

  const togglePlay = useCallback(() => {
    if (!sound) return;
    
    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  }, [sound]);

  const onScrub = useCallback((value) => {
    if (!sound) return;
    sound.seek(value);
    setProgress(value);
  }, [sound]);

  const formatTime = useCallback((secs) => {
    if (!secs) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  return (
    <div className="audio-player">
      <div style={{ alignItems: "center", width: "100%" }}>
        <div
          style={{
            display: "flex",
            paddingBottom: "8px",
            paddingTop: "8px",
          }}
        >
          <div
            className={`circular-play-pause-button ${isPlaying ? "playing" : ""}`}
            onClick={togglePlay}
            style={{
              alignSelf: "center",
            }}
          >
            <PlayPause isPlaying={isPlaying} />
          </div>
          <input
            type="range"
            value={progress || 0}
            step=".01"
            min="0"
            max={duration || 0}
            className="progress"
            onChange={(e) => onScrub(parseFloat(e.target.value))}
            style={{
              background: `linear-gradient(to right, #DEE2E6 0%, #DEE2E6 ${
                (progress / duration) * 100
              }%, gray ${
                (progress / duration) * 100
              }%, gray 100%)`,
              alignSelf: "center",
              maxWidth: "60%",
            }}
          />
          <p
            style={{
              alignSelf: "center",
              marginBottom: "0",
              color: "white",
              fontSize: ".96rem",
              fontFamily: "Georgia",
              paddingLeft: "5px",
            }}
          >
            <span>{formatTime(progress)}</span>/{formatTime(duration)}
          </p>
        </div>
      </div>
    </div>
  );
});

export default NewAudioPlayer;
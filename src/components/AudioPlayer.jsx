import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTimer } from "react-timer-hook";
import PlayPause from "./PlayPause";
import "./App.css"

const LazyLoadingAudioPlayer = ({
  trackName,
  songs,
  trackInfo,
  playingTrackIndex,
  setPlayingTrackIndex,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());
  const intervalRef = useRef();
  const currentTrackIndex = useRef(playingTrackIndex);
  const isReady = useRef(false);

  const preloadAudio = useCallback((url) => {
    const audio = new Audio();
    audio.src = url;
    audio.preload = 'auto';
  }, []);

  useEffect(() => {
    songs.forEach(preloadAudio);
  }, [songs, preloadAudio]);

  const loadAudio = useCallback((url) => {
    if (audioRef.current.src !== url) {
      audioRef.current.src = url;
      audioRef.current.load();
      setTrackProgress(0);
      isReady.current = false;

      audioRef.current.oncanplay = () => {
        isReady.current = true;
        if (isPlaying) {
          audioRef.current.play();
        }
      };

      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };

      audioRef.current.onended = () => {
        const nextIndex = (currentTrackIndex.current + 1) % songs.length;
        currentTrackIndex.current = nextIndex;
        loadAudio(songs[nextIndex]);
        if (setPlayingTrackIndex) {
          setPlayingTrackIndex(nextIndex);
        }
      };
    }
  }, [songs, setPlayingTrackIndex, isPlaying]);

  useEffect(() => {
    let index = trackInfo.findIndex(track => track.title === trackName);
    if (index !== -1 && index !== currentTrackIndex.current) {
      currentTrackIndex.current = index;
      loadAudio(songs[index]);
    }
  }, [trackName, songs, trackInfo, loadAudio]);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        const nextIndex = (currentTrackIndex.current + 1) % songs.length;
        currentTrackIndex.current = nextIndex;
        loadAudio(songs[nextIndex]);
        if (setPlayingTrackIndex) {
          setPlayingTrackIndex(nextIndex);
        }
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }, [songs, setPlayingTrackIndex, loadAudio]);

  const playAudio = useCallback(() => {
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
  }, [startTimer]);

  const pauseAudio = useCallback(() => {
    audioRef.current.pause();
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  }, []);

  const onScrub = useCallback((value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }, []);

  const onScrubEnd = useCallback(() => {
    if (!isPlaying) {
      playAudio();
    } else {
      startTimer();
    }
  }, [isPlaying, playAudio, startTimer]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Timer logic (simplified for brevity)
  let timestamp = new Date();
  timestamp.setSeconds(timestamp.getSeconds() + 1);

  const { restart } = useTimer({
    autoStart: true,
    expiryTimestamp: timestamp,
    onExpire: () => {
      if (currentTrackIndex.current !== playingTrackIndex && setPlayingTrackIndex) {
        setPlayingTrackIndex(currentTrackIndex.current);
      }
      const time = new Date();
      time.setSeconds(time.getSeconds() + 0.2);
      restart(time);
    },
  });

  return (
    <div className="audio-player">
      <div style={{ alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", paddingBottom: "8px", paddingTop: "8px" }}>
          <div
            className={`circular-play-pause-button ${isPlaying ? "playing" : ""}`}
            onClick={() => isPlaying ? pauseAudio() : playAudio()}
            style={{ alignSelf: "center" }}
          >
            <PlayPause isPlaying={isPlaying} />
          </div>
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{
              background: `linear-gradient(to right, #DEE2E6 0%, #DEE2E6 ${
                (trackProgress / duration) * 100
              }%, gray ${
                (trackProgress / duration) * 100
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
            <span>{formatTime(trackProgress)}</span>/{formatTime(duration)}
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper function to format time
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default LazyLoadingAudioPlayer;
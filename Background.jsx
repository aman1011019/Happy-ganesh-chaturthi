import React, { useEffect } from 'react';

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = document.getElementById('background-audio');
    audio.play();
  }, []);

  return (
    <audio id="background-audio" loop autoPlay>
      <source src="path/to/your/audio.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;

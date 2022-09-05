import React from "react";
import ReactPlayer from 'react-player'

export default function Mp4Player(prop) {
  return (
    <React.Fragment>
      <ReactPlayer
        ref={prop.player}
        url={prop.videoFilePath} 
        config={{ 
          youtube: { 
            playerVars: { origin: 'https://www.youtube.com' } 
          } 
        }}
        width={"100%"}
        height={prop.videoHeight}
        controls={true}
      />
    </React.Fragment>
  );
}

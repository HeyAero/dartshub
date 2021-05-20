import React, { useEffect } from 'react'
 
const Video = () => {

    useEffect(() => {
        initialiseJitsi();
      },[])

    const jitsiContainerId = "jitsi-container-id";

    const loadJitsiScript = () => 
     new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://meet.jit.si/external_api.js";
      script.async = true;
      script.onload = resolve
      document.body.appendChild(script);
    });

    const initialiseJitsi = async () => {
        if (!window.JitsiMeetExternalAPI) {
          await loadJitsiScript();
        }
    
        const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
          parentNode: document.getElementById(jitsiContainerId),
          roomName: "grimm",
          devices: {
            audioInput: 'true',
            audioOutput: '<deviceLabel>',
            videoInput: '<deviceLabel>'
        }
          
        });
    
        setJitsi(_jitsi)
      };
    return (
        <>
        <div id={jitsiContainerId} style={{ height: 150, width: 150 }} />;
        </>
    )

}


export default Video
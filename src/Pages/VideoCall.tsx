import { useEffect, useState } from 'react';
import "./VideoCall.css"


const VideoCall = () => {
    const [localStream, setLocalStream] = useState(null);

    useEffect(() => {
        const init = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                setLocalStream(stream);
            } catch (error) {
                console.error('Error accessing media devices:', error);
            }
        };
        init();
    }, []);

    return (
        <>
            <div id='videos' >
            {localStream && (
                    <video className='video-player' id='user-1' autoPlay playsInline ref={videoRef => {
                        if (videoRef) {
                            videoRef.srcObject = localStream;
                        }
                    }} />
                )} 
                {localStream && (
                    <video className='video-player' id='user-2' autoPlay playsInline ref={videoRef => {
                        if (videoRef) {
                            videoRef.srcObject = localStream;
                        }
                    }} />
                )}
            </div>
        </>
    );
};

export default VideoCall;

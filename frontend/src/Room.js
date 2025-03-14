import { useEffect, useRef } from "react";
import Peer from "peerjs";

const Room = ({ roomId }) => {
    const videoRef = useRef(null);
    const peer = useRef(new Peer());

    useEffect(() => {
        navigator.mediaDevices.getDisplayMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                peer.current.on("call", (call) => {
                    call.answer(stream);
                });
            });

        peer.current.on("open", (id) => {
            console.log("My peer ID is: " + id);
        });
    }, []);

    return <video ref={videoRef} autoPlay />;
};

export default Room;

import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {BsVolumeUpFill} from 'react-icons/bs';
import {BiVolumeMute} from 'react-icons/bi';

function Loop({ name, color, path, isLoop, playAudio}) {
   
    const [isMute, setIsMute] = useState(false);
    
    const audioPlayer = useRef();
    //activate the loop the spesipic loop .
    useEffect(()=>{
        playAudio ? audioPlayer.current.play() : stopAndGoStart();
    },[playAudio])
    //stops the player and go from the start. 
    const stopAndGoStart = () => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
    }
    //activate the mute button . 
    const toggleMute = () => {
        setIsMute(!isMute);
    }
    
    return  <Item color={color}>
        <p>{name}</p>
        <audio src={path} muted={isMute}  ref={audioPlayer} loop={isLoop} ></audio>
        <MuteIcon onClick={toggleMute}>{!isMute ? <BsVolumeUpFill/> : <BiVolumeMute/>}</MuteIcon>
    </Item>;
}


const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 200px;
    height: 3rem;
    background: ${props => props.color};
    margin-bottom: 30px;
    color: #140303;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 40px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    font-size: 40px;
    align-items: center;
    letter-spacing: 1.5px;
    font-weight: bolder;
   

    
`

const MuteIcon = styled.button`
    font-size: 40px;
    color: #191970;
    border: none;
    background: none;
    cursor: pointer;
`

export default Loop;

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ALL from '../LoopFiles/ALL TRACK.mp3';


function Slider({playAudio, isLoop, setPlayAudio}) {
    
    const audioPlayer = useRef();
    const timeline = useRef();
    //Initialize the Slider.
    const [backgroundSize,setBackgroundSize] = useState('0% 100%')
    //abjust the correlation between the position of the slider and the audio loop . 
    const changTielinePosition = () => {
        const percentagePosition = (100 * audioPlayer.current.currentTime) / audioPlayer.current.duration;
        setBackgroundSize(`${percentagePosition}% 100%`);
    }

    useEffect(()=>{
        playAudio ? audioPlayer.current.play() : stopAndGoStart();
    },[playAudio])

    const stopAndGoStart = () => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
    }

    const handlerOnEnded = () => {
        setPlayAudio(false);
    }

    

    return <div>
        <RangeInput type="range" max="100" ref={timeline} backgroundSize={backgroundSize} />
        <audio src={ALL} onEnded={handlerOnEnded} muted ref={audioPlayer} onTimeUpdate={changTielinePosition} loop={isLoop}/>
    </div>;
}

const RangeInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 745px;
  height: 0.5rem;
  background-color: white ;
  border: 1px #720a8b solid;
  border-radius: 5px;
  background-size: ${props => props.backgroundSize};
  background-image: linear-gradient(#e6c1d1, #dfc2cf);
  background-repeat: no-repeat;
  margin-bottom: 20px;

  ::-webkit-slider-thumb {
  -webkit-appearance: none;
  }
`

export default Slider;

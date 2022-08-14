import axios from 'axios';
import { useState } from 'react';
import GOOGLE_API from '../services/Google'
import Display from './Display';

function Search(props){
    //console.log(props)
    const [videoInfo, setVideoInfo] = useState({})
    const [videoId, setVideoId] = useState("ZLxJZpaph8M")


let key = GOOGLE_API;
const search = async ()=>{ 
    let res = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=40&q=Top%20music%20in%20${props.style}%2C%20artist%20${props.artist.toUpperCase()}%2C%20song%20${props.song.toUpperCase()}&safeSearch=moderate&type=video&videoDuration=short&key=${'AIzaSyAoWqMFTd-oAOk5j4MzLLJMV5xzSVs41ng'}`)
    console.log(props.number)
    console.log(res.data.items)
        let VIDEO_ID = res.data.items[props?.number]?.id?.videoId
        let videoData = res.data.items[props.number]?.snippet
        setVideoInfo(videoData)
        console.log(VIDEO_ID)
        setVideoId(VIDEO_ID)
        console.log(videoId)
        console.log(videoInfo)
}

function HandleSearchClick(){
        console.log('click')
        search()
    }


// console.log(videoInfo)

        return(
            <div>
                {videoInfo?.title !== undefined ? 
                <><h3 className='vid title'>{videoInfo?.title}</h3><Display videoId={videoId}/></> : <><br/>
                <button className='btn submit-btn' onClick={()=>HandleSearchClick()} >Submit</button>
                <br/>
                <input type='checkbox' />
            <label>Check this box if you would like to receive the link via text*</label><p className='disclaimer-p'>* can only send text to US phone numbers</p></>}
  
            </div>
        )
    }

    export default Search
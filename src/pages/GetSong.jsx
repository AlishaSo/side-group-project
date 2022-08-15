import axios from 'axios';
import GOOGLE_API from '../services/Google';
import Display from '../components/Display';
import { useState } from 'react';
import Genre from '../components/Genre';
import Initial from '../components/Alphabet';

export default function GetSong() {
  const [style, setStyle] = useState('')
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const [number, setNumber] = useState('');
  const [phone, setPhone] = useState(0);
  const [videoInfo, setVideoInfo] = useState({})
  const [videoId, setVideoId] = useState("ZLxJZpaph8M")

  const handleChange = (event) =>{
    let newPhone = event.target.value
      setPhone(newPhone)
      console.log(phone)
    let newNumber = (""+newPhone).split("")
    if(newNumber.length === 10){
      let numOne = parseInt(newNumber[0]) + parseInt(newNumber[1]) + parseInt(newNumber[2])
      let numTwo = parseInt(newNumber[3]) + parseInt(newNumber[4]) + parseInt(newNumber[5])
      let lastNum = parseInt(newNumber[6]) + parseInt(newNumber[7]) + parseInt(newNumber[8]) + parseInt(newNumber[9])
      let avgNum = Math.floor((numOne + numTwo + lastNum) / 3)

      let wholeNumber = avgNum
      setNumber(wholeNumber)
    }
  }

  const cipher = (num) =>{
    let nums = (""+num).split("")
    //console.log(nums)
if(nums.length < 10 || num === 0 || num === undefined){
    alert("Please enter a 10+ digit number!")
}
try{
const firstThree = (parseInt(nums[0])+parseInt(nums[1])+parseInt(nums[2])) > 2 ? (parseInt(nums[0])+parseInt(nums[1])+parseInt(nums[2]))-2 : 0;
// console.log(firstThree)
const secondThree = (parseInt(nums[3])+parseInt(nums[4])+parseInt(nums[5])) > 2 ? (parseInt(nums[3])+parseInt(nums[4])+parseInt(nums[5]))-2 : 0;
// console.log(secondThree)
const finalFour = (parseInt(nums[6])+parseInt(nums[7])+parseInt(nums[8])+parseInt(nums[9])) > 2 ? (parseInt(nums[6])+parseInt(nums[7])+parseInt(nums[8])+parseInt(nums[9]))-2 : 0;
// console.log(finalFour)

const codedNumber = Math.floor((firstThree+secondThree+finalFour)/3)
// console.log(codedNumber)
setNumber(codedNumber)
// console.log(number)

if(firstThree < 26){
let letter = Initial[firstThree]
// console.log(letter)
let newStyle = Genre[firstThree][letter]
setStyle(newStyle)
// console.log(style)
}
if(secondThree < 26){
    let newArtist = Initial[secondThree]
    setArtist(newArtist)
    // console.log(artist)
    }
if(finalFour > 26){
    let tooLarge = finalFour-9
    let newSong = Initial[tooLarge]
    setSong(newSong)
    // console.log(song)
  }else if(finalFour < 26){
    let standardSong = Initial[finalFour]
    setSong(standardSong)
    // console.log(song)
  }
}catch(err){
    console.error(err)
}
}

  const handleSubmit = (event) => {
      event.preventDefault()
      //console.log(cipher(number))
      cipher(phone)
  }

  let key = GOOGLE_API;
const search = async ()=>{ 
    let res = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=40&q=Top%20music%20in%20${style}%2C%20artist%20${artist.toUpperCase()}%2C%20song%20${song.toUpperCase()}&safeSearch=moderate&type=video&videoDuration=short&key=${key}`)
    // console.log(number)
    // console.log(res.data.items)
        let VIDEO_ID = res.data.items[number]?.id?.videoId
        let videoData = res.data.items[number]?.snippet
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

  return (
    <div id='song' className='song-div'>
      {videoInfo?.title !== undefined ? 
                <><h2 className='vid-title'>{videoInfo?.title}</h2><Display videoId={videoId}/></> : <><div className='form'>
          <h2>Enter a phone number and get a YouTube video tailored to you</h2>
          <form onSubmit={ handleSubmit }>
            <input onChange={ handleChange }
              placeholder='(999) 999-9999'
            />
            <div>
                <br/>
                <button className='btn submit-btn' onClick={()=>HandleSearchClick()} >Submit</button>
                <br/>
                <input type='checkbox' />
            <label>Check this box if you would like to receive the link via text*</label><p className='disclaimer-p'>* can only send text to US phone numbers</p>
  
            </div>
          </form>
        </div></>}
    </div>
  )
}
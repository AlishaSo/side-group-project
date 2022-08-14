import { useState } from 'react';
import Genre from '../components/Genre';
import Initial from '../components/Alphabet';

export default function GetSong() {
  const [style, setStyle] = useState('')
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const [number, setNumber] = useState(0);

  const handleChange = (event) =>{
    let newNumber = event.target.value
      setNumber(newNumber)
      //console.log(number)
  }

  const cipher = (num) =>{
    let nums = (""+num).split("")
    //console.log(nums)
if(nums.length < 10 || num == 0 || num === undefined){
    alert("Please enter a 10+ digit number!")
}
try{
const firstThree = (parseInt(nums[0])+parseInt(nums[1])+parseInt(nums[2])) > 2 ? (parseInt(nums[0])+parseInt(nums[1])+parseInt(nums[2]))-2 : alert("Your number is not currently supported.")
console.log(firstThree)
const secondThree = (parseInt(nums[3])+parseInt(nums[4])+parseInt(nums[5])) > 2 ? (parseInt(nums[3])+parseInt(nums[4])+parseInt(nums[5]))-2 : alert("Your number is not currently supported.")
console.log(secondThree)
const finalFour = (parseInt(nums[6])+parseInt(nums[7])+parseInt(nums[8])+parseInt(nums[9])) > 2 ? (parseInt(nums[6])+parseInt(nums[7])+parseInt(nums[8])+parseInt(nums[9]))-2 : alert("Your number is not currently supported.")
console.log(finalFour)

if(firstThree < 26){
let letter = Initial[firstThree]
console.log(letter)
let newStyle = Genre[firstThree][letter]
setStyle(newStyle)
console.log(style)
}
if(secondThree < 26){
    let newArtist = Initial[secondThree]
    setArtist(newArtist)
    console.log(artist)
    }
if(finalFour > 26){
    let tooLarge = finalFour-9
    let newSong = Initial[tooLarge]
    setSong(newSong)
    console.log(song)
  }else if(finalFour < 26){
    let standardSong = Initial[finalFour]
    setSong(standardSong)
    console.log(song)
  }
}catch(err){
    console.error(err)
}
}

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(cipher(number))
      cipher(number)
  }

  return (
    <div id='song' className='song-div'>
      {/* {song ?  */}
        <div className='form'>
          <h2>Enter a phone number and get a YouTube video tailored to you</h2>
          <form onSubmit={ handleSubmit }>
            <input onChange={ handleChange }
              placeholder='(999) 999-9999'
            />
            <button className='btn submit-btn'>Submit</button>
            <br />
            <input type='checkbox' />
            <label>Check this box if you would like to receive the link via text*</label>
          </form>
          <p className='disclaimer-p'>* can only send text to US phone numbers</p>
        </div>
        {/* :
        <div>
          <iframe src="" frameborder="0"></iframe>
        </div>
      } */}
    </div>
  )
}
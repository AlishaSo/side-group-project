import Youtube from 'react-youtube';

function Display(props){
    //console.log(props)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady= (evn)=>{
        evn.target.pauseVideo();
    }
   return(
    <div>
        <br/>
        <Youtube videoId={props.videoId} opts={opts} onReady={onReady} />
        <br/>
    </div>
   )
}

export default Display
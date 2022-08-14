



const search = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=40&q=Top%20music%20in%20${style}%2C%20artist%20${artist.toUpperCase()}%2C%20song%20${song.toUpperCase()}&safeSearch=moderate&type=video&videoDuration=short&key=${key}`

//Takes Cipher value and uses search engine [holds state]
export const playListData = [
  {
    id: 1,
    title: 'Ocean feeding frenzy',
    author: 'Super Mario',
    duration: 200000,
    sources: [
      { src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4'}
    ],
    watched: false
  },
  {
    id: 2,
    title: 'Big buck bunny short film',
    author: 'Super Mario',
    duration: 300000,
    sources: [
      { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4'}
    ],
    watched: false
  },
  {
    id: 3,
    title: 'Elephants dream short film',
    author: 'Super Mario',
    duration: 400000,
    sources: [
      { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4'}
    ],
    watched: false
  },
  {
    id: 4,
    title: 'Chromecast commercial: For bigger blazes',
    author: 'Super Mario',
    duration: 600000,
    sources: [
      { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video/mp4'}
    ],
    watched: false
  },
  {
    id: 5,
    title: 'Chromecast commercial: For bigger escapes',
    author: 'Super Mario',
    duration: 500000,
    sources: [
      { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', type: 'video/mp4'}
    ],
    watched: false
  },
  {
    id: 6,
    title: 'Chromecast commercial: For bigger fun',
    author: 'Super Mario',
    duration: 200000,
    sources: [
      { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', type: 'video/mp4'}
    ],
    watched: false
  },
  {
    id: 7,
    title: 'Chromecast commercial: For bigger joy rides',
    author: 'Super Mario',
    duration: 700000,
    sources: [
      { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video/mp4'}
    ],
    watched: false
  }
]

export const fetchPlayListData = (success: boolean, timeout: any): Promise<Array<any>> => {
  return new Promise((resolve, reject) => {
    if(success) {
      resolve(playListData)
    } else {
      reject({message: 'Error'})
    }
  })
}

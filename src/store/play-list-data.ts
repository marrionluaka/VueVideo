const playListData = [
  {
    id: 1,
    title: 'tutorial 1',
    duration: 200000,
    source: ''
  },
  {
    id: 2,
    title: 'tutorial 2',
    duration: 300000,
    source: ''
  },
  {
    id: 3,
    title: 'tutorial 3',
    duration: 400000,
    source: ''
  },
  {
    id: 4,
    title: 'tutorial 4',
    duration: 600000,
    source: ''
  },
  {
    id: 5,
    title: 'tutorial 5',
    duration: 500000,
    source: ''
  },
  {
    id: 6,
    title: 'tutorial 6',
    duration: 200000,
    source: ''
  },
  {
    id: 7,
    title: 'tutorial 7',
    duration: 700000,
    source: ''
  }
]

export const fetchPlayListData = (success: boolean, timeout: any): Promise<Array<any>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve(playListData)
      } else {
        reject({message: 'Error'})
      }
    }, timeout)
  })
}
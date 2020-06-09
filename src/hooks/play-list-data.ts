const playListData = [
  {
    id: 1,
    title: 'Food qualities braise chicken cuts bowl through slices butternut',
    author: 'Super Mario',
    duration: 200000,
    source: '',
    watched: false
  },
  {
    id: 2,
    title: 'One-pot low heat plenty of time adobo fat raw soften fruit',
    author: 'Super Mario',
    duration: 300000,
    source: '',
    watched: false
  },
  {
    id: 3,
    title: 'Sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder',
    author: 'Super Mario',
    duration: 400000,
    source: '',
    watched: false
  },
  {
    id: 4,
    title: 'Minutes clever slotted tongs scrape, brown steem undisturbed rice',
    author: 'Super Mario',
    duration: 600000,
    source: '',
    watched: false
  },
  {
    id: 5,
    title: 'Delicious butternut squash hunk. Flavor centerpiece plate, delicious',
    author: 'Super Mario',
    duration: 500000,
    source: '',
    watched: false
  },
  {
    id: 6,
    title: 'Sweet effortlessly pork, low heat smoker soy sauce flavor meat, rice fruit',
    author: 'Super Mario',
    duration: 200000,
    source: '',
    watched: false
  },
  {
    id: 7,
    title: 'Fruit soften edges frond slices onion snack pork steem on wines',
    author: 'Super Mario',
    duration: 700000,
    source: '',
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
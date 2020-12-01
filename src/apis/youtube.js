import axios from 'axios';
 
// Change the line below before deployment
const KEY = 'KEY_GOES_HERE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  },
});
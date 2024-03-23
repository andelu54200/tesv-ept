import tslib from 'tslib'
import axios from 'axios' 

const extractHostname = (url) => {
  let hostname = (url.indexOf("//") > -1) ? url.split('/')[2] : url.split('/')[0]
  // Remove port number.
  hostname = hostname.split(':')[0]
  // Remove querystring.
  hostname = hostname.split('?')[0]
  return hostname
}
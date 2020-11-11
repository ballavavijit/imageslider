import WS_ImageList from '../../Webservices/WS_ImageList';
import {IMAGE_LIST} from './actionTypes';


  export const imageListAction = () => ({
    type: IMAGE_LIST,
    async payload() {
      try {
       
        let response_imageList = await WS_ImageList.imageList();
  
        console.log("Response..userinfo.", response_imageList);
  
       
        return response_imageList;
  
      } catch (error) {
        console.error('error', error);
      }
    }
  });
  
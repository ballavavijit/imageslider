import { BASE_URL, Time_out, IMAGE_LIST } from './configUrl'


function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

class WS_ImageList {

    imageList = async () => {
        console.log("URL Path: " + BASE_URL + IMAGE_LIST)
        try {
            let response = await fetch(BASE_URL + IMAGE_LIST, {
                method: 'GET',
                timeout: Time_out,
                headers: {
                    "Content-Type": "application/json"
                },
            });

            console.log("response result : " + response)

            if (response != null) {
                let responseJson = await response.json();
                
                console.log("response result : " + responseJson)

                let SampleArray= shuffleArray(responseJson)
                console.log("response SampleArray : " + SampleArray)

                return SampleArray;
            } else {
                alert("NULL");
                return null;
            }
        } catch (err) {
            console.log("assetList error: " + err);
            return null;
        }

    }


   
}
export default new WS_ImageList();
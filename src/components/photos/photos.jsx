import { useContext, useEffect, useState } from "react";
import { photoContext } from "../photoscontext";
import "./photos.css"


const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent& api_key=29222b4cf9883460303c308c3a7fa3db`
const Photo = () => {
    const [photos, setPhotos] = useState([])
    const gallery = useContext(photoContext)

    useEffect(() => {
        callApi()
    }, [gallery.inputField])


    const callApi = () => {
        fetch(`${URL}&tag=${gallery.inputField}&per_page=8 &format=json&nojsoncallback=1`).then(res => {
            return res.json();
        }).then(data => {
            let image= data.photos.photo
            setPhotos(image)
        })
    }

    return (
        <>
            <div className="gallery-container">
                {photos.map((data, index) => {
                    return (
                        <div className="img-container" key={index}>
                            <img src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}alt="index" />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Photo;

import { useEffect, useState } from "react";
import styles from "../info.module.scss";
import { getImagePath } from "../../../../utils/getImage";
interface ImageShowProps{
  images: string[]
}
function ImageShow({images}: ImageShowProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  useEffect(() => {
    setSelectedImage(images[0])
  }, [images])
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <img src={getImagePath(selectedImage)} alt="foto principal" />
      </div>

      <div className={styles.listImage}>
        {images.map((img, index) => (
          <label key={index} className={styles.item}>
            <input
              type="radio"
              name="image-select"
              checked={selectedImage === img}
              onChange={() => setSelectedImage(img)}
              style={{ display: "none" }}
            />
            <img src={getImagePath(img)} alt={`foto ${index}`} />
          </label>
        ))}
      </div>
    </div>
  );
}

export default ImageShow;

import { useEffect, useState } from "react";
import { Button } from "antd";
import UploadModal from "./UploadModal";
import Post from "./Post"

export default function Feed() {
  const [photoList, setPhotoList] = useState();
  const [showUpload, setShowUpload] = useState(false);
  useEffect(() => {
    fetch("https://express-ts-ed.web.app/photos")
      .then((result) => result.json())
      .then((data) => setPhotoList(data))
      .catch(alert);
  }, [setPhotoList]);
  return (
    <section className="photo-feed">
      {!photoList 
      ? <p>Loading...</p> 
      : photoList.map( post => ( 
        <Post post={post} key={post.photoId}/>
      ))
      }
      {showUpload ? <UploadModal setPhotoList={setPhotoList} setShowUpload={setShowUpload} /> : null}
      <Button
        onClick={() => setShowUpload(true)}
        className="fab"
        type="primary"
        shape="circle"
        size="large"
      >
        +
      </Button>
    </section>
  );
}

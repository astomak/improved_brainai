import React, { useEffect, useState } from "react";
import UrlBox from "../UrlBox/UrlBox";
import ImageBox from "../ImageBox/ImageBox";
import Clarifai from "clarifai";

const clarifai = new Clarifai.App({
  apiKey: "1b879d426d424167a2f494359ca48908",
});


function DetectionBox() {
  const [imageUrl, setImageUrl] = useState("");
  const [boundingBox, setBoundingBox] = useState([]);

  const changeImageUrl = (value) => {
    setImageUrl(value);
  };

  useEffect(() => {
    if (imageUrl !== "") {
      clarifai.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
      .then((response) => {
        setBoundingBox(response.outputs[0].data.regions);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [imageUrl])

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense rounded-lg shadow-large bg-gradient-to-r from-pink-700 to-gray-800 opacity-90  max-w-md md:max-w-3xl lg:max-w-4xl mx-2 mb-10"
      style={{
        borderTopLeftRadius: "90px",
        borderBottomRightRadius: "90px",
      }}
    >
      <UrlBox changeImageUrl={changeImageUrl} />
      <ImageBox imageUrl={imageUrl} boundingBox={boundingBox}/>
    </div>
  );
}

export default DetectionBox;

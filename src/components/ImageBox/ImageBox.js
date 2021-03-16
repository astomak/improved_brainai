import React from "react";
import FaceDetectionBox from "../FaceDetectionBox/FaceDetectionBox";

function ImageBox({ imageUrl, boundingBox }) {
  return (
    <div className="relative">
      <img
        className="p-2 object-fill h-full w-full"
        style={{ borderBottomRightRadius: "99px" }}
        src={
          imageUrl === ""
            ? "https://previews.123rf.com/images/fish4/fish41802/fish4180200036/96077389-face-detection-flat-icon-facial-biometric-recognition-vector-illustration-.jpg"
            : imageUrl
        }
        alt="Face Detection Input"
      ></img>
      {boundingBox.map((element) => {
        return (
          <FaceDetectionBox
            key={element.id}
            boxBoundary={element.region_info.bounding_box}
            percentage={element.value}
          />
        );
      })}
    </div>
  );
}

export default ImageBox;

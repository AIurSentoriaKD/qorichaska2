"use client";
import React, { useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
interface CustomImage extends Image {
  original: string;
}

function GalleryFromImages({ images }: { images: any }) {
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = React.useState(false);
  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <div className="w-full">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        plugins={[Thumbnails]}
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default GalleryFromImages;

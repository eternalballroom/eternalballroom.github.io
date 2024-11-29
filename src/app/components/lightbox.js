import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photoz from "./photos";

export default function LightboxW({ i,w }) {
  const [index, setIndex] = useState(-1);

  return (
    <> {/* rowConstraints={{ minPhotos:1,maxPhotos:1 }} */}
      <RowsPhotoAlbum photos={photoz[i]} targetRowHeight={[w]} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photoz[i]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

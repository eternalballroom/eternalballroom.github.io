import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

/* [1080, 640, 384, 256, 128, 96, 64, 48] */

function assetLink(asset: string, width: number) {
  return `${asset}`;
}

// pixels

const photos0 = [
  {
    asset: "/images/pixels/lbhorror.jpg",
    width: 1344,
    height: 756,

  },
  {
    asset: "/images/pixels/lbspin.gif",
    width: 1064,
    height: 1064,

  },
  {
    asset: "/images/pixels/lbnmc1.png",
    width: 864,
    height: 288,

  },
  {
    asset: "/images/pixels/lbnmc2.png",
    width: 864,
    height: 288,

  },
  {
    asset: "/images/pixels/lbnmc3.png",
    width: 864,
    height: 288,

  },
  {
    asset: "/images/pixels/lbnmc4.png",
    width: 864,
    height: 288,

  },
  {
    asset: "/images/pixels/lbnmc5.png",
    width: 864,
    height: 288,

  },
  {
    asset: "/images/pixels/lbnmc6.png",
    width: 864,
    height: 288,

  },
  {
    asset: "/images/pixels/lbnmc7.png",
    width: 864,
    height: 288,

  },
  
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      
    }) as Photo,
);


// illustration

const sunset1 = [
  {
    asset: "/images/illustration/lbsunset1.png",
    width: 1080,
    height: 1080,

  },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      
    }) as Photo,
);

const sunset3 = [
  {
    asset: "/images/illustration/lbsunset3.png",
    width: 1080,
    height: 1080,

  },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      
    }) as Photo,
);

const illustration1 = [
  {
    asset: "/images/illustration/lb1.png",
    width: 1920,
    height: 2500,
  },
  {
    asset: "/images/illustration/lb2.png",
    width: 1500,
    height: 2164,
  },
  {
    asset: "/images/illustration/lb3.png",
    width: 1500,
    height: 2164,
  },
  {
    asset: "/images/illustration/lb4.png",
    width: 2200,
    height: 1700,
  },
  {
    asset: "/images/illustration/lb5.png",
    width: 6600,
    height: 5100,
  },
  {
    asset: "/images/illustration/lb6.png",
    width: 1365,
    height: 2385,
  },
  {
    asset: "/images/illustration/lb7.png",
    width: 2817,
    height: 5193,
  },
  {
    asset: "/images/illustration/lb8.png",
    width: 1904,
    height: 1832,
  },
  

  //

].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      
    }) as Photo,
);


export default [photos0,sunset1,sunset3,illustration1];

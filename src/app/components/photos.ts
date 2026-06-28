import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

/* [1080, 640, 384, 256, 128, 96, 64, 48] */

function assetLink(asset: string, width: number) {
  return `${asset}`;
}

// pixels

const photos0 = [
  {
    asset: "/images/pixels/orange.png",
    width: 576,
    height: 576,

  },
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
    asset: "/images/illustration/bgsun.png",
    width: 3840,
    height: 5101,
  },
  {
    asset: "/images/illustration/deark.png",
    width: 3840,
    height: 5101,
  },
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
    asset: "/images/illustration/nonafin.png",
    width: 1637,
    height: 1801,
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


  // {
  //   asset: "/images/illustration/lb5.png",
  //   width: 6600,
  //   height: 5100,
  // },
  // {
  //   asset: "/images/illustration/summer.png",
  //   width: 1812,
  //   height: 885,



  // {
  //   asset: "/images/illustration/lb8.png",
  //   width: 1904,
  //   height: 1832,
  // },

].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);

const plum5 = [
  {
    asset: "/images/illustration/plum.png",
    width: 4996,
    height: 6164,

  },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);


//cooking


const cooking4 = [
  {
    asset: "/images/cooking/lb1.webp",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb2.webp",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb3.webp",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb4.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb5.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb6.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb7.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb8.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb9.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb10.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb11.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb12.jpg",
    width: 1080,
    height: 1920,
  },
  // {
  //   asset: "/images/cooking/lb13.jpg", fine dining 5
  //   width: 1080,
  //   height: 1920,
  // },
  {
    asset: "/images/cooking/lb14.jpg",
    width: 1080,
    height: 1920,
  },
  // {
  //   asset: "/images/cooking/lb15.jpg", FD5
  //   width: 1080,
  //   height: 1920,
  // },
  {
    asset: "/images/cooking/lb16.jpg",
    width: 1512,
    height: 2016,
  },
  {
    asset: "/images/cooking/lb17.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb18.png",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb19.png",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb20.png",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb21.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb22.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb23.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb24.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb25.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb26.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb27.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb28.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb29.jpg",
    width: 1080,
    height: 1920,
  },
  {
    asset: "/images/cooking/lb30.jpg",
    width: 1080,
    height: 1920,
  },

].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);

//misc
const le6 = [
  {
    asset: "/images/misc/le.png",
    width: 948,
    height: 577,

  },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);

const site7 = [
  {
    asset: "/images/misc/website.png",
    width: 1691,
    height: 911,

  },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);


const ad8 = [
  {
    asset: "/images/ad/ad1.jpg",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad2.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad3.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad4.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad5.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad6.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad7.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad8.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad9.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad10.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad11.jpg",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad12.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad13.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad14.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad15.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad16.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad17.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad18.gif",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad19.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad20.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad21.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad22.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad23.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad24.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad25.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad26.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad27.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad28.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad29.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad30.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad31.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad32.webp",
    width: 400,
    height: 120,
  },
{
    asset: "/images/ad/ad33.gif",
    width: 400,
    height: 120,
  },


].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);

const ad9 = [
{
    asset: "/images/ad/bigad1.gif",
    width: 615,
    height: 264,
  },
{
    asset: "/images/ad/bigad2.gif",
    width: 615,
    height: 264,
  },

].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);

const ad10 = [
  {
    asset: "/images/ad/longad1.gif",
    width: 1370,
    height: 120,
  },

  {
    asset: "/images/ad/longad2.jpg",
    width: 1370,
    height: 120,
  },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,

    }) as Photo,
);

export default [photos0, sunset1, sunset3, illustration1, cooking4, plum5, le6, site7, ad8, ad9, ad10];
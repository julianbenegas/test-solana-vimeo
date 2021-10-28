import Link from "next/link";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import videoStill16x9 from "../public/src/img/index/index-video-169-2.jpg";

const StyledHeroVimeoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  background: #000;

  display: none;
  @media (min-width: 768px) {
    display: block;
  }

  iframe {
    position: absolute;
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    top: 20%;
    left: 70%;
    transform: translate(-70%, -20%);
    @media (min-width: 768px) {
      left: 50%;
      transform: translate(-50%, -20%);
    }
  }
`;

const StyledLazyLoadImage = styled.div`
  position: absolute;
  top: 0;
  left: -66%;
  width: 100%;
  height: 100%;
  transform: translate(50%, 0);
  overflow: visible;
  img {
    left: -77%;
    width: 200%;
  }
  @media (min-width: 512px) {
    left: -60%;
    img {
      left: -62%;
    }
  }
  @media (min-width: 768px) {
    position: absolute;
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    top: 20%;
    left: 75%;
    transform: translate(-70%, -20%);
    img {
      left: 0;
      width: 100%;
    }
  }
`;

const StyledIndexHeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #000000 15%,
    rgba(0, 0, 0, 0) 30.78%,
    #000000 100%
  );
`;

/**
 * Shows a video with a preview image behind the Hero Header.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const IndexHeroVideo = () => {
  const iframeSrc = `https://player.vimeo.com/video/589655407?background=1&autoplay=1&loop=1&byline=0&autopause=0&title=0&transparent=0`;
  return (
    <StyledHeroVimeoWrapper className="py-9 py-md-12 pt-14">
      <StyledLazyLoadImage>
        <Image
          // className="still-vimeo-image"
          src={videoStill16x9}
          loading="eager"
          layout="responsive"
          alt="A preview image shown before the Solana Glass video has loaded"
          quality={90}
          placeholder="blur"
        />
      </StyledLazyLoadImage>
      <iframe
        src={iframeSrc}
        frameBorder="0"
        loading="lazy"
        webkitallowfullscreen={`${true}`}
        mozallowfullscreen={`${true}`}
        allowFullScreen
        title="Solana Glass Video"
      />
      <StyledIndexHeroOverlay />
    </StyledHeroVimeoWrapper>
  );
};

export default function IndexPage() {
  return (
    <>
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <IndexHeroVideo />
    </>
  );
}

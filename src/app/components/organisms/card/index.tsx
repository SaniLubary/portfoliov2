import { MutableRefObject, ReactElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from './card.module.css'
import { ScrollTrigger } from "gsap/all";

const SeparatorLine = () => <div className={styles.separatorLine}></div>

interface CardProps {
  data: {
    images: {
      path: string;
      id?: string;
      selected: boolean;
      alt?: string;
      style?: {[key: string]: string | number};
    }[];
    title?: string;
    details: { imgId: string, text: string | ReactElement, title: string }[] | string;
    icons?: { path: string, icon: string }[];
  };
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const floatAnimation = (ref: MutableRefObject<any>) => {
  const tl = gsap.timeline()
  tl.repeat(-1)
  tl.yoyo(true)
  tl.to(ref.current,
    {
      duration: getRandomInt(3, 5),
      scale: 1.2,
      y: '+=4',
      x: '+=3',
      rotation: `-=${getRandomInt(-3, 3)}`,
      ease: "power1.ease"
    })
}

const Card = ({ data }: CardProps) => {
  const [cardData, setCardData] = useState(data);
  const [currentImg, setCurrentImg] = useState(cardData.images[0])

  const refImage = useRef<HTMLImageElement | null>(null);
  const card = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (refImage.current) {
        floatAnimation(refImage)
      }
    }, 'main')

    return () => ctx.revert()
  }, [])

  const handleButtonClick = (img: CardProps["data"]["images"][0]) => {
    if (img.selected || !refImage?.current) return

    img.selected = true
    refImage.current.src = img.path;
    setCurrentImg(img)
    fadeOutCardImage(refImage.current)

    setCardData({
      ...cardData,
      images: cardData.images.map((oldImg) =>
        oldImg.path === img.path
          ? { path: img.path, selected: true, id: img.id }
          : { path: oldImg.path, selected: false, id: oldImg.id }
      ),
    });
  }

  function fadeOutCardImage(elem: HTMLElement) {
    gsap.to(elem, {
      opacity: 1,
      duration: 0.5,
      ease: "power3.inOut",
    })
  }

  const handleImageClick = () => {
    if (cardData.images.length === 1) return

    const images = cardData.images;

    // Logic to loop over images on click
    for (let i = 0; i < images.length; i++) {
      // Current is false? do nothing
      if (images[i].selected === false) continue;

      if (
        images[i - 1] === undefined ||
        (images[i - 1].selected === false && images[i + 1] !== undefined)
      ) {
        // Current is true? last one false? set next one to true
        images[i + 1].selected = true;
        continue;
      } else if (
        images[i - 1] !== undefined &&
        images[i - 1].selected === true
      ) {
        // Current is true? last one also true? set last one to false
        images[i - 1].selected = false;
        break;
      } else if (
        images[i - 1] !== undefined &&
        images[i - 1].selected === false &&
        i === images.length - 1 &&
        images[i].selected === true
      ) {
        // Last elem of array? start over
        images[i].selected = false;
        images[i - 1].selected = false;
        images[0].selected = true;
        break;
      }
    }

    // Update img properties 
    images.forEach((img) => {
      if (img.selected === true && refImage.current) {
        refImage.current.src = img.path;
        setCurrentImg(img)
        fadeOutCardImage(refImage.current)
      }
    });

    setCardData({
      images: images,
      title: cardData.title,
      details: cardData.details,
      icons: cardData.icons
    });
  }

  return (
    <div ref={card} className={`${styles.card} card`}>
      {/* Image */}
      <div className={styles.imageContainer} onClick={() => handleImageClick()}>
        <Image
          height={100}
          width={100}
          style={currentImg?.style}
          ref={refImage}
          className={styles.image}
          src={currentImg.path}
          alt={currentImg.alt ? currentImg.alt : 'Imagen sin descripcion'}
        />
      </div>

      {/* Image selection */}
      {cardData.images.length > 1 && <div className={styles.imageSelectionContainer}>
        {cardData.images.map((img) =>
          <div
            key={img.id+img.path}
            className={`${styles.imageSelection} ${img.selected ? styles.selected : styles.notSelected}`}
            onClick={() => handleButtonClick(img)}>
          </div>
        )}
      </div>}

      <SeparatorLine />

      {/* Card Body */}
      <section style={{
        margin: '6px auto',
        width: '80%',
      }}>
        {typeof cardData.details === 'string' && (
          <>
            <h1>{cardData.title}</h1>
            <p>{cardData.details}</p>
          </>
        )}
        {typeof cardData.details !== 'string' && cardData.details.map((detail) => {
          if (detail.imgId == currentImg.id) {
            return <div key={detail.imgId}>
              <h1>{detail.title}</h1>
              <p>{detail.text}</p>
            </div>
          }
        })}
      </section>

      {(cardData?.icons && cardData.icons.length > 0) && <>
        <div>
          <SeparatorLine />
          <div>
            {cardData.icons.map(icon => <>
              <a target="_blank" key={icon.path} href={icon.path}>
                <Image alt={'Icon'} style={{ height: '24px', margin: '5px' }} src={icon.icon} />
              </a>
            </>)}
          </div>
        </div>
      </>}
    </div>
  )
};

export default Card;

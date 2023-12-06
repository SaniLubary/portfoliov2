import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import styles from './mountains.module.css'

const Mountains = (props: any) => {
  const mountains = useRef(null)
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(mountains.current, {
        scrollTrigger: {
          trigger: 'main',
          start: '30% 50%',
          end: '40% 50%',
          scrub: 3,
        },
        top: 600,
        scaleX: 1.3,
        scaleY: -1.3
      })
    }, 'main')

    return () => ctx.revert()
  }, [])
  
  return (
    <svg
      width={829}
      height={704}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'scale(-1, 1)'}}
      ref={mountains}
      className={styles.mountains}
      {...props}
    >
      <g filter="url(#a)">
        <path
          d="M257 297v122.5L104.5 682l-87.5.5L257 297Z"
          fill="url(#b)"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#c)">
        <path
          d="m725 301 105 185.5V668l-305.5-23.5L725 301Z"
          fill="url(#d)"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="m454.917 79 315.086 548 5.497 37.5-103.5-9-147.5-11-420 37.5L454.917 79Z"
        fill="url(#e)"
      />
      <path
        d="M481 648.438 454.917 79l198.335 344.945L524.5 644.5l-43.5 3.938Z"
        fill="url(#f)"
      />
      <path
        d="M462 223c-27.6 33.2-86.667 13.833-91.5 0l84-144 76 132.5c-8.667-10-40.9-21.7-68.5 11.5ZM731.5 447c-27.6 33.2-86.667 13.833-91.5 0l84-144 76 132.5c-8.667-10-40.9-21.7-68.5 11.5ZM244 442.5c-20.827 37.818-69.667 9.333-74.5-4.5L257 297l34 64.5c-18.5 30.5-28 46.5-47 81Z"
        fill="#fff"
        fillOpacity={0.26}
      />
      <g filter="url(#g)" shapeRendering="crispEdges">
        <path
          d="m830.003 486.5-105-185.5L775 663.5l55.003 4.5V486.5Z"
          fill="url(#h)"
        />
        <path d="M291 361.5 257.003 297v122.5l33.997-58Z" fill="url(#i)" />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={261.499}
          y1={289.516}
          x2={261.499}
          y2={726.391}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00ADB5" />
          <stop offset={0.828} stopColor="#00565A" stopOpacity={0.91} />
          <stop offset={1} stopColor="#00565A" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="d"
          x1={724.457}
          y1={301}
          x2={724.457}
          y2={734.662}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00ADB5" />
          <stop offset={0.833} stopColor="#00565A" stopOpacity={0.41} />
          <stop offset={1} stopColor="#00565A" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="e"
          x1={440}
          y1={79}
          x2={440}
          y2={682}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00ADB5" />
          <stop offset={0.891} stopColor="#00565A" stopOpacity={0.41} />
          <stop offset={1} stopColor="#00565A" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="f"
          x1={440}
          y1={79}
          x2={440}
          y2={682}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset={1} stopColor="#F5F5F5" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="h"
          x1={491.714}
          y1={285.961}
          x2={303.318}
          y2={1123.64}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.521} stopColor="#C4C4C4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="i"
          x1={491.714}
          y1={285.961}
          x2={303.318}
          y2={1123.64}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.521} stopColor="#C4C4C4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="j"
          x1={668.538}
          y1={0}
          x2={668.538}
          y2={157.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA700" />
          <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
        </linearGradient>
        <linearGradient
          id="k"
          x1={668.538}
          y1={0}
          x2={668.538}
          y2={157.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA700" />
          <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
        </linearGradient>
        <linearGradient
          id="l"
          x1={668.538}
          y1={0}
          x2={668.538}
          y2={157.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA700" />
          <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
        </linearGradient>
        <linearGradient
          id="m"
          x1={668.538}
          y1={0}
          x2={668.538}
          y2={157.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA700" />
          <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
        </linearGradient>
        <linearGradient
          id="n"
          x1={668.538}
          y1={0}
          x2={668.538}
          y2={157.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA700" />
          <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
        </linearGradient>
        <linearGradient
          id="o"
          x1={668.538}
          y1={0}
          x2={668.538}
          y2={157.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA700" />
          <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
        </linearGradient>
        <filter
          id="a"
          x={0}
          y={284}
          width={274}
          height={419.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={8.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_41" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_851_41"
            result="shape"
          />
        </filter>
        <filter
          id="c"
          x={507.5}
          y={288}
          width={339.5}
          height={401}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={8.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_41" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_851_41"
            result="shape"
          />
        </filter>
        <filter
          id="g"
          x={240.003}
          y={284}
          width={607}
          height={405}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={8.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_41" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_851_41"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Mountains

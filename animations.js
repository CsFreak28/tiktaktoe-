import gsap from "gsap";
const preloaderDiv = document.querySelector(".preloader");
const shapes = preloaderDiv.children[0];
let letterX = shapes.children[1];
let letterO = shapes.children[0];
let clonedX = letterX.cloneNode(true);
let secondCloneX = letterX.cloneNode(true);
let clonedO = letterO.cloneNode(true);
let secondCloneO = letterO.cloneNode(true);
clonedO.classList.add("secondO");
secondCloneO.classList.add("thirdO");
clonedX.classList.add("secondX");
secondCloneX.classList.add("thirdX");
export function preloader() {
  shapes.appendChild(clonedX);
  shapes.appendChild(secondCloneX);
  shapes.appendChild(secondCloneO);
  shapes.appendChild(clonedO);
  const tl = gsap.timeline();
  const shapesTl = gsap.timeline();
  tl.from(letterX, 1.5, {
    ease: "power4.out",
    scale: 0,
    opacity: 0,
  })
    .from(letterO, 0.5, {
      scale: 0,
      ease: "expo.out",
    })
    .to(letterX, 4.5, {
      rotateY: "180deg",
      ease: "elastic.out",
    });

  gsap.to(letterO, 3.5, {
    delay: 2.5,
    rotateY: "-180deg",
    ease: "elastic.out",
  });
  gsap.to(shapes, 2, {
    rotateY: "180deg",
  });
  shapesTl
    .to(shapes, 2, {
      delay: 3.5,
      rotateY: "360deg",
      x: "-120px",
    })
    .to(clonedX, 0.3, {
      opacity: 1,
      y: "110px",
      ease: "power2.out",
    })
    .to(clonedO, 0.3, {
      opacity: 1,
      y: "-100px",
      x: "180px",
      ease: "power2.out",
    })
    .to(secondCloneX, 0.3, {
      opacity: 1,
      y: "-100px",
      x: "180px",
      ease: "power2.out",
    })
    .to(secondCloneO, 0.3, {
      opacity: 1,
      y: "100px",
      ease: "power2.out",
    })
    .to(clonedX, 0.3, {
      x: "200px",
      ease: "power2.out",
    })
    .to(clonedO, 1.5, {
      x: "-0.7px",
      ease: "power4.out",
    })
    .to([clonedO, secondCloneO, letterO], 0.5, {
      color: "#0094c6",
    })
    .to(preloaderDiv, 0.5, {
      opacity: 0,
    })
    .to(preloaderDiv, 0.5, {
      display: "none",
    });
}

const header = document.querySelector(".head");
const mainText = header.getElementsByTagName("span");
const arrayOfTexts = [...mainText];
console.log(arrayOfTexts);
export default function headerAnimation() {
  const tl = gsap.timeline();
  tl.from(arrayOfTexts, 1, {
    delay: 6,
    opacity: 0,
    y: "100px",
    x: "20px",
    stagger: 0.2,
    ease: "circ.out",
    // yoyo: true,
    // repeat: -1,
  });
}

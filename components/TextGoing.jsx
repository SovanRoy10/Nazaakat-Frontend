import { gsap } from "gsap";
import { useEffect } from "react";

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first elem1ent's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

export default function TextGoing() {
  useEffect(() => {
    const elem1s = gsap.utils.toArray(".elem1"),
      loop = horizontalLoop(elem1s, { paused: false, repeat: -1 });

    document.querySelectorAll(".stripe").forEach(function (stripe) {
      stripe.addEventListener("mousemove", function () {
        gsap.to(stripe.children[0], {
          height: "100%",
          //   ease: Expo,
          duration: 0.3,
          // delay: .1
        });

        gsap.to(stripe.children[1], {
          opacity: 0,
          //   ease: Expo,
          duration: 0.3,
          delay: 0.1,
        });

        gsap.to(stripe.children[0].children[0], {
          opacity: 1,
          //   ease: Expo,
          duration: 0.1,
          // delay: .1
        });
      });

      stripe.addEventListener("mouseleave", function () {
        gsap.to(stripe.children[0], {
          height: "0%",
          //   ease: Expo,
          duration: 0.3,
        });

        gsap.to(stripe.children[1], {
          opacity: 1,
          //   ease: Expo,
          duration: 0.3,
          delay: 0.1,
        });
        gsap.to(stripe.children[0].children[0], {
          opacity: 0,
          //   ease: Expo,
          duration: 0.1,
          // delay: .1
        });
      });
    });
  }, []);

  return (
    <div id="main" className="mt-12 overflow-hidden">
      <div className="stripe">
        <div className="stripe2">
          <div className="bgContainer">
            <div className="elem1">
              <div className="photo">
                <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                  alt=""
                />
              </div>
             <h1 className="text-lg md:text-[45px]">
                Offer 15% off <span>14</span>{" "}
              </h1>
            </div>
            <div className="elem1">
              <div className="photo">
                <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                  alt=""
                />
              </div>
             <h1 className="text-lg md:text-[45px]">
                Offer 15% off <span>14</span>{" "}
              </h1>
            </div>
            <div className="elem1">
              <div className="photo">
                <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                  alt=""
                />
              </div>
             <h1 className="text-lg md:text-[45px]">
                Offer 15% off <span>14</span>{" "}
              </h1>
            </div>
            <div className="elem1">
              <div className="photo">
                <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                  alt=""
                />
              </div>
             <h1 className="text-lg md:text-[45px]">
                Offer 15% off <span>14</span>{" "}
              </h1>
            </div>
            <div className="elem1">
              <div className="photo">
                <img
                  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                  alt=""
                />
              </div>
             <h1 className="text-lg md:text-[45px]">
                Offer 15% off <span>14</span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="elem1">
            <div className="photo">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
            </div>
           <h1 className="text-lg md:text-[45px]">
              Offer 15% off <span>14</span>{" "}
            </h1>
          </div>
          <div className="elem1">
            <div className="photo">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
            </div>
           <h1 className="text-lg md:text-[45px]">
              Offer 15% off <span>14</span>{" "}
            </h1>
          </div>
          <div className="elem1">
            <div className="photo">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
            </div>
           <h1 className="text-lg md:text-[45px]">
              Offer 15% off <span>14</span>{" "}
            </h1>
          </div>
          <div className="elem1">
            <div className="photo">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
            </div>
           <h1 className="text-lg md:text-[45px]">
              Offer 15% off <span>14</span>{" "}
            </h1>
          </div>
          <div className="elem1">
            <div className="photo">
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720806427_3261097.jpg?format=webp&w=480&dpr=1.3"
                alt=""
              />
            </div>
           <h1 className="text-lg md:text-[45px]">
              Offer 15% off <span>14</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

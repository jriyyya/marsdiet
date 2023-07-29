import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const items = [
  {
    title: "Keep Track of your Steps",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quisquam sit modi dolorum nobis dolorem voluptas aspernatur ipsum cum! Laboriosam?",
    imgUrl: "/images/hero/jogging.png",
  },
  {
    title: "Get reminders for drinking water",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quisquam sit modi dolorum nobis dolorem voluptas aspernatur ipsum cum! Laboriosam?",
    imgUrl: "/images/hero/drinking-water.png",
  },
  {
    title: "Know your sleep schedule",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quisquam sit modi dolorum nobis dolorem voluptas aspernatur ipsum cum! Laboriosam?",
    imgUrl: "/images/hero/sleep-analysis.png",
  },
];

const topCardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

export default function StayHealthy() {
  const [ref, inView] = useInView();
  return (
    <section className="p-page my-32 flex flex-col items-center">
      <div className="text-[2.5rem] font-semibold">
        Staying healthy, made easy with technology
      </div>
      <div>
        <div className="flex gap-x-4 justify-between mt-20">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white w-[27%] relative shadow-2xl items-center duration-500 rounded-3xl gap-y-1 group flex flex-col text-center"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-[80%] aspect-square object-contain duration-inherit group-hover:-translate-y-1/3 group-hover:drop-shadow-xl"
              />
              <h3 className="text-lg group-hover:scale-75 px-2 pb-4 font-semibold duration-inherit group-hover:-translate-y-24">
                {item.title}
              </h3>
              <p className="text-front text-opacity-70 duration-inherit group-hover:scale-100 mt-2 scale-0 translate-y-1/2 px-2 pb-3 text-sm group-hover:translate-y-0 absolute bottom-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

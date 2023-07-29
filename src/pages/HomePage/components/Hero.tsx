import ReactTyped from "react-typed";
import MaterialIcon from "../../../common/MaterialIcon";

const typingText = [
  "Tell us what you ate",
  "2 Glasses of milk",
  "1 MacDonalds Burger",
  "I ate three slices of white bread",
  "or just Upload a picture",
];
export default function Hero() {
  return (
    <section className="flex p-page my-16">
      <div className="basis-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="text-front text-6xl font-extrabold tracking-wide gap-y-2 flex flex-col">
            Healthy <br />{" "}
            <div>
              {" "}
              <span className="text-primary">food</span> a
            </div>
            a healthy life
          </div>
          <div className="text-lg text-[#000000ae]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            eius, impedit aliquid amet atque assumenda minus dignissimos omnis
            sit voluptatibus vero! Modi qui dolore quisquam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusamus nisi, numquam ullam
            cumque perferendis facere quasi nostrum molestias repellat totam non
            soluta! Adipisci, alias esse!
          </div>
        </div>
        <div className="flex gap-x-4">
          <button className="px-10 py-2 text-back font-medium rounded-3xl text-[1.5rem] bg-gradient-to-tl from-primary to-secondary">
            Login
          </button>
          <button className="px-8 py-2 text-back font-medium rounded-3xl text-[1.5rem] bg-gradient-to-tl from-primary to-secondary">
            Signup
          </button>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center items-center relative z-1">
        <div className="absolute h-[100%] bg-gradient-to-tl from-primary to-secondary rounded-full w-[90%] top-0" />
        <img
          src="/images/hero/mascot.png"
          alt="mascot"
          className="w-[90%] z-1"
        />
        <div className="absolute bottom-0 bg-white w-full items-center z-10 flex py-3 shadow-[rgba(0,_0,_0,_0.68)_0px_12px_25px] px-8 rounded-[2rem] text-2xl justify-between">
          <ReactTyped
            strings={typingText}
            typeSpeed={70}
            loop
            backSpeed={40}
            cursorChar="|"
            showCursor={true}
          />
          <MaterialIcon codepoint="e8b6" className="text-primary text-4xl" />
        </div>
      </div>
    </section>
  );
}

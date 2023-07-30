import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex-1" />
      <footer className="">
        <div className="relative h-[7vh] overflow-x-hidden translate-y-1">
          <Wave opacity={100} />
          <Wave opacity={50} />
          <Wave opacity={70} />
          <Wave opacity={30} />
        </div>
        <div className="bg-primary text-back items-center flex flex-col gap-y-4 py-8 text-opacity-75">
          <div className="flex gap-x-6 text-xl">
            <div>Home</div>
            <Link to="https://devpost.com/software/marsdiet">About</Link>
            <Link to="https://www.linkedin.com/in/marsian83">Contact Us</Link>
          </div>
          <div>Made with 🤍 by Spandan Barve and Riya Jain</div>
        </div>
      </footer>
    </>
  );
}

function Wave(props: { opacity: number }) {
  return (
    <div
      className="w-[200vw] h-full absolute bg-[url('/images/footer-wave.png')] bg-repeat-x z-[100] top-0"
      style={{
        animation: `animate-waves ${8 + Math.random() * 10}s linear ${
          1000 + Math.random() * 4500
        }ms infinite`,
        opacity: `${props.opacity}%`,
      }}
    />
  );
}

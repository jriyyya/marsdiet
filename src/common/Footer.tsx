export default function Footer() {
  return (
    <footer className="">
      <div className="relative h-[8vh] overflow-x-hidden">
        <Wave opacity={100} />
        <Wave opacity={50} />
        <Wave opacity={70} />
        <Wave opacity={30} />
      </div>
      <div className="bg-primary text-back items-center flex flex-col gap-y-4 py-8 text-opacity-75">
        <div className="flex gap-x-6 text-xl">
          <div>Home</div>
          <div>About</div>
          <div>Contact Us</div>
        </div>
        <div>Made with 🤍 by Spandan Barve and Riya Jain</div>
      </div>
    </footer>
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

export default function Hero() {
  return (
    <section className="flex p-page">
      <div className="basis-1/2 justify-center flex flex-col gap-y-6">
        <div className="text-front text-6xl font-extrabold tracking-wide gap-y-2 flex flex-col">
          Healthy <br />{" "}
          <div>
            {" "}
            <span className="text-primary">food</span> a
          </div>
          a healthy life
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          eius, impedit aliquid amet atque assumenda minus dignissimos omnis sit
          voluptatibus vero! Modi qui dolore quisquam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Accusamus nisi, numquam ullam
          cumque perferendis facere quasi nostrum molestias repellat totam non
          soluta! Adipisci, alias esse!
        </div>
        <div className="flex gap-x-4">
            <button className="px-8 py-2 text-back font-medium rounded-3xl text-2xl bg-gradient-to-tl from-primary to-secondary">Login</button>
            <button className="px-8 py-2 text-back font-medium rounded-3xl text-2xl bg-gradient-to-tl from-primary to-secondary">Signup</button>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center items-center ">
        <img src="/images/hero/mascot.png" alt="mascot" className="w-[80%]"/>
      </div>
    </section>
  );
}

export default function HelpPage() {
  return (
    <section className="p-page py-12 flex items-center justify-center">
      <div className="border-[0.8rem] rounded-xl border-primary">
        <div className="m-2 rounded-xl">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/WZe78e6jbkQ`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className=""
          />
        </div>
      </div>
    </section>
  );
}

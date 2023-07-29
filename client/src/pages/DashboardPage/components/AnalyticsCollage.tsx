export default function AnalyticsCollage() {
  return (
    <section className="flex-1 p-6 grid grid-cols-3 grid-rows-2 gap-8 -mt-4">
      <div className="bg-primary aspect-square rounded-3xl"></div>
      <div className="bg-foreground bg-opacity-25 aspect-square rounded-3xl"></div>
      <div className="bg-[url('https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-healthy-food.png')] bg-cover aspect-square rounded-3xl"></div>
      <div className="bg-foreground bg-opacity-25 aspect-square rounded-3xl"></div>
      <div className="bg-[url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-1/11178-Different_types_of_water_header-1296x728.jpg?w=1155&h=1528')] bg-cover bg-center aspect-square rounded-3xl"></div>
      <div className="bg-secondary aspect-square rounded-3xl"></div>
    </section>
  );
}

import CaloriesTracker from "./collage/CaloriesTracker";
import SleepTrack from "./collage/SleepTrack";
import WaterTracker from "./collage/WaterTracker";

export default function AnalyticsCollage() {
  return (
    <section className="flex p-6 flex-1 -mt-4 gap-x-4">
      <CaloriesTracker />
      <div className="flex-1 gap-y-4 flex flex-col">
        <div className="flex basis-1/2 gap-x-4">
          <WaterTracker />
          {/* <div className="bg-[url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-1/11178-Different_types_of_water_header-1296x728.jpg?w=1155&h=1528')] bg-cover bg-center aspect-square rounded-3xl w-full"></div> */}
        </div>
        {/* <div className="bg-[url('https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-healthy-food.png')] bg-cover aspect-square rounded-3xl w-full"></div> */}
        {/* <div className="bg-foreground bg-opacity-25 aspect-square rounded-3xl"></div> */}
        <SleepTrack />
        {/* <div className="bg-primary basis-1/2"></div> */}
      </div>
    </section>
  );
}

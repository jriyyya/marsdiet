import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import MaterialIcon from "../../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";

export default function CaloriesTrackerForm() {
  const [showDescriptionHelp, setShowDescriptionHelp] = useState(false);
  const [selectedInput, setSelectedInput] = useState<HTMLInputElement | null>(
    null
  );

  const descriptionRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const calorieRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [query, setQuery] = useState<{
    type: "calorie" | "food";
    message: string;
  }>({ type: "food", message: "" });

  useEffect(() => {
    if (descriptionRef.current === selectedInput) {
      setQuery({ type: "food", message: descriptionRef.current.value });
      calorieRef.current.value = "";
    }
    if (calorieRef.current === selectedInput) {
      setQuery({
        type: "calorie",
        message: Number(calorieRef.current.value).toString(),
      });
      descriptionRef.current.value = "";
    }
  }, [selectedInput]);

  return (
    <div className="bg-primary rounded-3xl basis-1/3 bg-opacity-90 p-4 items-center flex flex-col text-back gap-y-4">
      <h2 className="text-2xl font-semibold font-raleway">
        Track your Calories
      </h2>
      <div className="flex flex-col p-3 rounded-xl border w-11/12">
        <div className="flex flex-col w-full gap-y-2">
          <p className="text-xs">Tell us what you ate</p>
          <div className="w-full relative">
            <input
              className="outline-none w-full rounded-md py-2 px-4 text-back placeholder:text-back placeholder:text-opacity-90 bg-transparent border"
              type="text"
              placeholder="Describe your food"
              ref={descriptionRef}
              onFocus={(event) => setSelectedInput(event.target)}
              maxLength={50}
              onChange={(event) => {
                setQuery((q) => {
                  return { ...q, message: event.target.value };
                });
                if (event.target.value.length > event.target.maxLength) {
                  event.target.value = event.target.value.slice(
                    0,
                    event.target.value.length - 1
                  );
                }
              }}
            />
            <button onClick={() => setShowDescriptionHelp((b) => !b)}>
              <MaterialIcon
                codepoint={showDescriptionHelp ? "e5c9" : "e887"}
                className="absolute top-1/2 -translate-y-1/2 right-2"
              />
            </button>
            {showDescriptionHelp && (
              <div className="absolute top-full right-0 -translate-y-2 w-4/5 text-xs bg-background p-1 rounded-md text-front shadow-lg border border-foreground border-opacity-30">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat temporibus dicta quae perferendis odio voluptatibus
                  explicabo consectetur. Quia eligendi itaque, blanditiis nam
                  pariatur illum odio maxime voluptatibus explicabo, facilis
                  autem tenetur debitis esse repellendus!
                </p>
              </div>
            )}
          </div>
        </div>
        <span className="text-base text-center my-2 font-medium font-raleway tracking-wider">
          OR
        </span>
        <div className="flex flex-col w-full">
          <p className="text-xs">How many calories did you eat?</p>
          <input
            className="outline-none truncate rounded-md py-2 px-4 text-back placeholder:text-back placeholder:text-opacity-90 bg-transparent border"
            type="number"
            placeholder="Enter a number"
            step={0.1}
            min={0}
            max={20000}
            maxLength={8}
            ref={calorieRef}
            onFocus={(event) => setSelectedInput(event.target)}
            onChange={(event) => {
              setQuery((q) => {
                return { ...q, message: event.target.value };
              });
              if (event.target.value > event.target.max) {
                event.target.value = event.target.max;
              }
              if (event.target.value.length > event.target.maxLength) {
                event.target.value = event.target.value.slice(
                  0,
                  event.target.value.length - 1
                );
              }
            }}
          />
        </div>
        <button className="bg-back text-primary py-2 px-3 rounded-xl mt-4 font-semibold hover:-translate-y-1 duration-300 hover:shadow-lg">
          Add +
        </button>
      </div>
      {JSON.stringify(query)}
    </div>
  );
}

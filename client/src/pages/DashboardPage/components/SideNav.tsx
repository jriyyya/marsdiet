import { User, useAuth0 } from "@auth0/auth0-react";
import dummyUser from "../../../assets/data/dummyUser";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";

interface SideNavProps {
  className?: string;
}

export default function SideNav(props: SideNavProps) {
  //   const { user } = useAuth0() as User;
  const [user, setUser] = useState(dummyUser);

  return (
    <div
      className={twMerge(
        "h-[90vh] p-6 border-t-2 border-b-2 border-r-2 border-l-transparent mt-6 border-primary rounded-r-xl",
        props.className
      )}
    >
      <div className="flex  items-center pb-12 pt-6 gap-x-2">
        <img src="/images/logo.png" className="w-[25%]" />
        <h2 className="text-3xl font-semibold text-primary">MarsDiet</h2>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-3 items-center">
          <img
            src={user.picture || "/images/default-pfp.png"}
            alt={user?.name}
            className="rounded-full"
          />
          <h2 className="text-sm truncate">{user.name}</h2>
          <button className="bg-red-600 rounded-md px-5 py-1 text-white duration-300 hover:-translate-y-1 hover:shadow">
            Logout
          </button>
        </div>

        <div className="flex flex-col gap-y-3">
          <UserInfo name="Age" value={user.age} editable />
          <UserInfo name="Gender" value={user.gender} />
          <UserInfo name="Weight" value={user.weight} editable />
          <UserInfo name="Height" value={user.age} editable />
        </div>
      </div>
    </div>
  );
}

function UserInfo(props: { name: string; value: any; editable?: boolean }) {
  let type: string = "text";
  typeof props.value === "string" && (type = "text");
  typeof props.value === "number" && (type = "number");

  const [editing, setEditing] = useState(false);

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div className="mx-5 px-2 py-1 rounded-md relative bg-foreground bg-opacity-20">
      <h5 className="text-xs">{props.name}</h5>
      {editing ? (
        <div className="relative">
          <input
            ref={inputRef}
            className="w-full mt-1 rounded px-1"
            defaultValue={props.value}
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={() => {
              setEditing(false);
            }}
          >
            <MaterialIcon codepoint="e876" className="text-xl" />
          </button>
        </div>
      ) : (
        <p>{props.value}</p>
      )}
      {props.editable && !editing && (
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => setEditing(true)}
        >
          <MaterialIcon codepoint="e3c9" className="text-base" />
        </button>
      )}
    </div>
  );
}

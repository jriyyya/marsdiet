import { useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";

interface AuthInputProps {
  placeholder: string;
  icon: string;
  name: string;
  type?: boolean;
  showPasswordToggle?: boolean;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AuthInput(props: AuthInputProps) {
  const [type, setType] = useState(props.type ? "number" : "text");

  return (
    <div className="flex flex-col gap-y-1">
      <div className="text-sm">{props.name}</div>
      <div className="flex w-[25vw] items-center gap-x-2 rounded-lg border-2 border-foreground border-opacity-40 p-2 focus-within:border-primary">
        <MaterialIcon
          className="text-3xl text-primary"
          codepoint={props.icon}
        />
        <input
          autoComplete={props.autoComplete}
          type={type}
          name={props.name}
          placeholder={props.placeholder}
          className="flex-1 border-none bg-transparent outline-none focus:outline-none"
          onChange={props.onChange}
        />
        {/* {props.password && props.showPasswordToggle && (
          <button
            className=""
            type="button"
            onClick={() => setType(type === "password" ? "text" : "password")}
          >
            {type === "password" ? (
              <MaterialIcon
                className="text-3xl text-primary"
                codepoint="e8f4"
              />
            ) : (
              <MaterialIcon
                className="text-3xl text-primary"
                codepoint="e8f5"
              />
            )}
          </button>
        )} */}
      </div>
    </div>
  );
}

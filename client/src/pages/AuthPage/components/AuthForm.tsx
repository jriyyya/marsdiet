import {
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import AuthInput from "./AuthInput";

interface AuthFormProps {
  inputs: {
    icon: string;
    name: string;
    password?: boolean;
    showPasswordToggle?: boolean;
    placeholder: string;
  }[];
  submitAction: (data: object) => void;
  texts: { title: string; subtitle: string; btnText: string };
}

export default function AuthForm(props: AuthFormProps) {
  const [formData, setFormData] = useState<object>({});

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    props.submitAction(formData);
  };

  return (
    <form
      className="mt-14 flex flex-col gap-y-3 rounded-2xl bg-secondary bg-opacity-10 px-14 py-8 items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl text-primary font-bold">{props.texts.title}</h1>
      <h1 className="text-front text-opacity-90">{props.texts.subtitle}</h1>

      <div className="mt-5 flex flex-col gap-y-4">
        {props.inputs.map((input, key) => (
          <AuthInput
            key={key}
            {...input}
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                [input.name]: event.target.value,
              }));
            }}
          />
        ))}
      </div>

      <button className="my-6 rounded-md bg-gradient-to-tr from-primary to-secondary py-4 w-full text-sm duration-300 hover:-translate-y-1 text-back font-bold hover:shadow-lg">
        {props.texts.btnText}
      </button>
    </form>
  );
}

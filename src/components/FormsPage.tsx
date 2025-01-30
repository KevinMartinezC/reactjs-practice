import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const FormsPage = () => {
  const { register , handleSubmit} = useForm<FormInputs>({
    defaultValues: {
      email: "kevin@gmail.com",
      password: "123456",
    },
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h3>Formulario</h3>
        <div className="flex flex-col space-y-2 w-[500px]">
          <input
            type="email"
            placeholder="email"
            className="p-2 border border-gray-300 rounded-xl"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="password"
            className="p-2 border border-gray-300 rounded-xl"
            {...register("password", { required: true })}
          />

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-xl"
          >           
           Ingresar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormsPage;

import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({ className = "", ...props }: Props) {
  return (
    <input
      {...props}
      className={[
        "w-full p-3 rounded-md bg-[#EDD7D2] border border-[#D8A29A] text-[#3B3A39]",
        "placeholder-[#8A7665] focus:outline-none focus:ring-2 focus:ring-[#CBB279]",
        className,
      ].join(" ")}
    />
  );
}

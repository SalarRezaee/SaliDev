import React from "react";

interface serviceProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  position?: string;
}

const ServiceBox = (props: serviceProps) => {
  return (
    <div
      className={`relative ${
        props.position && `lg:${props.position}-22`
      } w-8/12 md:w-full sm:w-full lg:w-full transform scale-110 bg-gradient-to-br mx-auto from-[#363641] to-[#23232A] flex items-center justify-center flex-col rounded-lg`}
    >
      <div className="flex items-center justify-center bg-[#23232A] p-2 rounded-md mt-4 w-12 h-12">
        {props.icon}
      </div>
      <h3 className="text-center text-sm mt-4 mb-6">{props.title}</h3>
      {props.description && (
        <p className="text-xs leading-7 mb-4 px-3 text-gray-300 text-justify">
          {props.description}
        </p>
      )}
    </div>
  );
};

export default ServiceBox;

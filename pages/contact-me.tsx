import { Button } from "../components/elements";

const ContactMe = () => {
  return (
    <div className="w-full container mx-auto p-3 rounded-md bg-gradient-to-r from-[#23232A] to-[#2E2E37]">
      <h1 className="text-center my-4 text-white">
        با من تماس بگیرید تا با هم محصولات بی نظیری خلق بدهیم!
      </h1>
      <div className="w-9/12 mx-auto py-3 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 gap-y-5 my-2">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="px-3 m py-4 text-white outline-none rounded-md text-sm bg-transparent border-2 border-solid border-[#393944]"
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="px-3 py-4 text-white outline-none rounded-md text-sm bg-transparent border-2 border-solid border-[#393944]"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="موضوع"
            className="w-full my-4 px-3 py-4 text-white outline-none rounded-md text-sm bg-transparent border-2 border-solid border-[#393944]"
          />
          <textarea
            className="w-full h-32 rounded-md py-3 outline-none px-2 text-sm bg-transparent border-2 border-solid border-[#393944] resize-none"
            placeholder="توضیحات"
          ></textarea>
        </div>
        <div className="w-36 my-5 text-center mx-auto text-xs text-white">
          <Button url="#" title="ارسال درخواست" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

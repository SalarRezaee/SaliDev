import { Button } from "../elements";

const ContactMeMain = () => {
  return (
    <div className="lg:w-7/12 text-center mx-auto flex items-center flex-col w-full py-12 pt-2 text-white bg-gradient-to-br from-[#23232A] to-[#2E2E37]  rounded-lg my-12 shadow-md">
      <h2 className="my-4">پروژه ای در سرتان دارید</h2>
      <p className="text-sm mb-6 text-gray-300 px-2">
        من برای گفتگو با شما درباره ایده‌های سازنده و گسترش دادن آنها آماده ام!{" "}
      </p>
      <Button title="تماس با من" url="/contact-me" />
    </div>
  );
};

export default ContactMeMain;

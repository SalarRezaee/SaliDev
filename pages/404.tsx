import Image from "next/image";
import { Button } from "../components/elements";
export default function Custom404() {
  return (
    <div className="w-full container mx-auto text-center">
      <Image src="/images/404.svg" width={300} height={300} />
      <h2 className="text-white">متاسفم چیزی نتونستم پیدا کنم</h2>
      <div className="w-36 mx-auto text-white my-4">
        <Button url="/" title="برو به صفحه اصلی" />
      </div>
    </div>
  );
}

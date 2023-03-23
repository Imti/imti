import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-6">
      <Link className="flex items-center justify-center" href="/">
        <Image
          className="rounded-full mr-3"
          src="/photo.jpeg"
          alt="photo of Imti"
          width={48}
          height={48}
        />
        <span className="text-xl font-semibold text-slate-700">
          Imti Majeed
        </span>
      </Link>
      <div className="flex">
        <a href="https://twitter.com/imtimaj" target="_blank">
          <FaTwitter
            className="text-[#1DA1F2] hover:scale-125 transition-transform mr-2"
            size={20}
          />
        </a>
        <a href="https://www.linkedin.com/in/imtimajeed/" target="_blank">
          <FaLinkedin
            className="text-[#0072b1] hover:scale-125 transition-transform"
            size={20}
          />
        </a>
      </div>
    </div>
  );
}

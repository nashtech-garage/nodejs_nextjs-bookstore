import Image from "next/image";

export default function Img() {
  return (
    <div>
      <img src="/ABC.jpg" width={600} height={500}></img>

      <Image src="/ABC.jpg" alt="" width={600} height={500}></Image>
    </div>
  );
}
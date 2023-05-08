
import Image from 'next/image';


export default function Img() {
  return <Image
  src="/gita_painting.png"
  alt="Vercel Logo"
  className="dark:invert"
  width={100}
  height={24}
  priority
/>
}

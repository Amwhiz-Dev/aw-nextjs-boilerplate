import { Homemade_Apple } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const apple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);
  
  return <div className={`${apple.className}`} />;
}

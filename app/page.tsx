import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
 <div className="flex flex-col gap-y-4">
  <div>
  This is a Screen for authenitcated users only
  </div>
  <div>
    <UserButton/>
  </div>

 </div>
  );
}

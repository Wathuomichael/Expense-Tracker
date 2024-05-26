import Transactions from "@/components/Transactions";
import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <>
      <div className="h-screen float-right mt-4 mr-4">
        <UserButton />
      </div>
      <Transactions />
    </>
  )
}

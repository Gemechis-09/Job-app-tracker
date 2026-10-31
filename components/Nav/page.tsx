import { Button } from "../ui/button";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Nav(){
    return(
        <nav className="bg-white border-b border-grey-200">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link className="flex gap-2 items-center text-xl font-semibold text-primary" href='/'>
                    <Briefcase/>
                    Job Tracker
                </Link>
                <div>
                    <Link href="/sign-in">
                        <Button variant="ghost" className='text-grey-700 hover:text-black'>
                            Log In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="bg-primary hover:bg-primary/90">
                        Start for free</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
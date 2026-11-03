'use client';
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const[ activeTab, setActiveTab] = useState("organize");
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/*Hero section*/}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job aplication
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href='/sign-in'>
                <Button className="h-12 px-8 text-lg font-medium">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="flex gap-2 justify-center mb-8">
                <Button onClick={()=>setActiveTab("organize")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary" : "bg-gray-100 text-gray-700 hover:text-white"}`}>Organize Applications</Button>
                <Button onClick={()=>setActiveTab("hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary" : "bg-gray-100 text-gray-700 hover:text-white"}`}>Get Hired</Button>
                <Button onClick={()=>setActiveTab("manage")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "manage" ? "bg-primary" : "bg-gray-100 text-gray-700 hover:text-white"}`}>Manage Boards</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-grey-200 shadow-xl">
                {activeTab === "organize"&&(
                  <Image 
                  src='/hero-images/hero1.png'
                  alt="Organize application"
                  width={1200}
                  height={800}
                />
                )}
                {activeTab === "hired" &&(
                  <Image 
                  src='/hero-images/hero2.png'
                  alt="Get Hired"
                  width={1200}
                  height={800}
                />
                )}
                
                {activeTab === "manage" &&(
                <Image 
                  src='/hero-images/hero3.png'
                  alt="Manage Boards"
                  width={1200}
                  height={800}
                />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & open-source text similarity API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className=" container pt-32 max-w-7xl mx-auto w-full h-full"></div>
    </div>
  );
}

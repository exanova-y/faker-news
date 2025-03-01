
import { ReactNode } from "react";
import HNHeader from "./HNHeader";
import { Toaster } from "@/components/ui/toaster";

interface HNLayoutProps {
  children: ReactNode;
}

const HNLayout = ({ children }: HNLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HNHeader />
      <main className="flex-grow">
        <div className="hn-container animate-in">{children}</div>
      </main>
      <footer className="py-6 text-center text-xs text-hn-subtext">
        <p>Hacker News Clone — Built with Lovable</p>
      </footer>
      <Toaster />
    </div>
  );
};

export default HNLayout;

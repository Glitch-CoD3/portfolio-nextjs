
import Navigation from "@/Components/navbar/navbar";
import "./globals.css";
import Home from "./page";
import Sidebar from "@/Components/sidebar/sidebar";

export const metadata = {
  title: {
    template: "%s | JUEL-RANA",
    default: "Home | JUEL-RANA",
  },
  description: {
    default: "Welcome to my portfolio website showcasing my skills, education, and projects.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">


        <div className="main-container">

          <div>
            <Sidebar />
          </div>

          <div className="content-bar mt-8">

            <div className="nav-bar">
              <Navigation />
            </div>

            <div className="px-6">

              {children}

            </div>

          </div>

        </div>
      </body>
    </html>
  );
}



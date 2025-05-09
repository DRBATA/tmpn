import type { Metadata } from "next";
import "./globals.css";

import { UserProvider } from "../contexts/user-context";
import { ToastContainer } from "./components/ToastNotification";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
          <ToastContainer />
        </UserProvider>
      </body>
    </html>
  );
}

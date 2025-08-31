import "./globals.css"
import Footer from "@/components/layout/Footer";
 
type Props = {
  children: React.ReactNode;
};
 
export default async function RootLayout({children}: Props) {
  return (
    <html>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
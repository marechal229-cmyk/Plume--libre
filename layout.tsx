import "./globals.css"; import {Header} from "@/components/header";
export const metadata={title:"Plume Libre",description:"Publiez, lisez et améliorez des histoires gratuitement."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body><Header/><main>{children}</main></body></html>}
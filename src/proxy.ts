import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Excluye el panel de Payload y su API del enrutado de locales.
  matcher: ["/((?!api|admin|trpc|_next|_vercel|.*\\..*).*)"],
};

import { authMiddleware } from "@clerk/nextjs";

/*
    publicRoutes: [
        '/',
        '/upcoming',
        '/previous',
        '/recordings',
        '/personal-room',
        '/meeting(.*)' 
    ],
*/
export default authMiddleware({
});
 
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
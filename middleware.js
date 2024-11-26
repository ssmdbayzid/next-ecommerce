export const moddleware = (req) =>{
    console.log("from middleware", req)

    const pathname = req.nextUrl.pathname.startsWith('/blog');
    console.log(pathname)
}


export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*']
}
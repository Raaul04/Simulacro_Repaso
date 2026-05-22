import { NextResponse,NextRequest } from "next/server";

export const proxy=(request:NextRequest)=>{

    const validar=request.cookies.get("AY_MI_CUKI")?.value

    if(validar!=="1234"){
        return NextResponse.redirect(new URL('/',request.url))
    }

    return NextResponse.next()
}

export const config={
    matcher:['/favoritos','/character/:path*']
}
import { NextResponse } from "next/server";

import myUser from "@/app/actions/getUser";
import prisma from '../../lib/prismadb'


export async function PUT(request:Request) {
    const currentUser = await myUser();

    if(!currentUser) {
        return NextResponse.error()
    }

    let basketIds = [...(currentUser.basketIds || [])]

    basketIds = [];

    const user = await prisma.user.update({
        where: {
            id:currentUser.id
        },
        data:{
            basketIds
        }
    })
    return NextResponse.json(user)

}
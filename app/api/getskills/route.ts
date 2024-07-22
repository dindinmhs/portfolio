import { storage, listAll, ref, getDownloadURL } from "@/firebase/firebaseConfig";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export const GET = async () => {
    try {
        const imageRef = ref(storage, 'skills/')
        const imageList = await listAll(imageRef)
        const imageURLs = await Promise.all(imageList.items.map(itemRef=> getDownloadURL(itemRef)))
        return NextResponse.json(imageURLs,{status : 200})
      } catch (error) {
        return NextResponse.json({message : error},{status : 500})
      }
};

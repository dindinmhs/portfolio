import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export const GET = async () => {
    try {
        const querySnapshot = await getDocs(collection(db,"project"))
        if (querySnapshot) {
            const projects : DocumentData[] = []
            querySnapshot.forEach(project=>{
                projects.push(project.data())
            })
            return NextResponse.json(projects, { status: 200 });
          } else {
              throw new Error("No such document!");
          }
      } catch (error) {
        return NextResponse.json({message : error},{status : 500})
      }
};

import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, DocumentData, query, orderBy } from "firebase/firestore";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export const GET = async () => {
    try {
        const academyQuery = query(collection(db, "academy"), orderBy("start_year", "asc"));
        const querySnapshot = await getDocs(academyQuery)
        if (querySnapshot) {
            const academies : DocumentData[] = []
            querySnapshot.forEach(project=>{
                academies.push(project.data())
            })
            return NextResponse.json(academies, { status: 200 });
          } else {
              throw new Error("No such document!");
          }
      } catch (error) {
        return NextResponse.json({message : error},{status : 500})
      }
};
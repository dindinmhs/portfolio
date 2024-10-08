import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export const GET = async () => {
    try {
      const docId = "about";
      const docRef = doc(db, "about", docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data().paragraf;
        return NextResponse.json(data, { status: 200 });
      } else {
          throw new Error("No such document!");
      }
    } catch (error) {
      return NextResponse.json({message : error},{status : 500})
    }
};
import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import { setMaxListeners } from 'process'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Movie } from '../typings'

export default function useList(uid: string | undefined){
    const []  = useState<DocumentData[] | Movie[]>([])

    useEffect(()=>{
        if(!uid) return 

        return onSnapshot(
            collection(db, 'customers', uid, 'myList'), 
            (snapshot) => {
                setMaxListeners(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                )
            }
        )
    }. [db, uid])

    return list
}
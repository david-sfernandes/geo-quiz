import Head from "next/head";
import Button from "../components/button";
import Layout from "../components/layout";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useResultsStore from "../../store/store";
import { db } from "../../firebase";

export default function Result() {
  const points = useResultsStore((state) => state.points);
  const [userPoints, setUserPoints] = useState(0);
  const startGame = useResultsStore((state) => state.startGame);
  const cleanState = useResultsStore((state) => state.cleanState);
  const [bestScore, setBestScore] = useState(0);
  const [newHighScore, setnewHighScore] = useState(false);
  const { data: session } = useSession();
  const [lastScore, setLastScore] = useState(0);
  const [lastScoreDoc, setlastScoreDoc] =
    useState<QueryDocumentSnapshot<DocumentData>>();
  const router = useRouter();

  const tryAgain = async () => {
    if (lastScoreDoc) await updateLastScore(lastScoreDoc);
    startGame();
    cleanState();
    router.push("/");
  };

  const updateLastScore = async (
    lastScoreDoc: QueryDocumentSnapshot<DocumentData>
  ) => {
    if (lastScoreDoc)
      await updateDoc(doc(db, `${session?.user?.email}`, lastScoreDoc.id), {
        points: points,
      });
    else if (points > 0)
      await addDoc(collection(db, `${session?.user?.email}`), {
        points: points,
        type: "last",
      });
  };

  const updateHighScore = (
    highScoreDoc: QueryDocumentSnapshot<DocumentData>
  ) => {
    if (highScoreDoc) {
      setBestScore(highScoreDoc.data().points);
      if (points > highScoreDoc.data().points) {
        setnewHighScore(true);
        updateDoc(doc(db, `${session?.user?.email}`, highScoreDoc.id), {
          points: points,
        });
      }
    } else if (points > 0)
      addDoc(collection(db, `${session?.user?.email}`), {
        points: points,
        type: "best",
      });
  };

  useEffect(() => {
    setUserPoints(points);
    const getUserResults = async () => {
      if (session) {
        const userCollecttion = collection(db, `${session.user?.email}`);

        const lastScoreQuery = query(
          userCollecttion,
          where("type", "==", "last")
        );
        const highScoreQuery = query(
          userCollecttion,
          where("type", "==", "best")
        );

        const lastScoreDoc = await getDocs(lastScoreQuery).then(
          (res) => res.docs[0]
        );
        setLastScore(lastScoreDoc.data().points);
        setlastScoreDoc(lastScoreDoc);

        const highScoreDoc = await getDocs(highScoreQuery).then(
          (res) => res.docs[0]
        );
        updateHighScore(highScoreDoc);
      }
    };

    getUserResults();
  }, [session, points]);

  return (
    <Layout showTopImg={false} pageTitle="Results | Geo Quiz">
      <div className="flex flex-col mb-16">
        <img
          className="w-60 m-auto mb-16"
          src="/assets/undraw_winners_ao2o 2.svg"
          alt="Trophy"
        />
        <h1 className="text-xl font-bold">Results</h1>
        {newHighScore && (
          <h3 className="text-orange font-medium">New High Score!</h3>
        )}

        <p className="text-xs">
          You got <span className="text-xl text-green">{userPoints}</span>{" "}
          correct answers
        </p>
        {session && (
          <>
            <p className="text-xs">
              Your best score:{" "}
              <span className="text-green text-md">{lastScore}</span>
            </p>
            <p className="text-sm">
              Your best score:{" "}
              <span className="text-green text-md">{bestScore}</span>
            </p>
          </>
        )}
      </div>
      <Button text="Try again" onClick={tryAgain} />
    </Layout>
  );
}

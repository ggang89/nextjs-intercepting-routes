"use client";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function ModalLogin() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  
  return (
    <dialog
      ref={dialogRef}
      onClick={() => router.back()}
      className="border p-2 rounded backdrop:bg-slate-500/30"
    >
      <button onClick={() => dialogRef.current?.close()}>X</button>
      <h1>Modal Login</h1>
    </dialog>
  );
}

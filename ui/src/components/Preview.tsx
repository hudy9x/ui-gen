"use client";

export default function Preview() {
  return (
    <div className="w-[700px] shrink-0 px-2 border-l">
      <iframe className="w-full h-screen" src="http://localhost:3000"></iframe>
    </div>
  );
}

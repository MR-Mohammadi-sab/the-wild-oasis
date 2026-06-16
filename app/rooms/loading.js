import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return <div className="grid items-center justify-center gap-4">
      <Spinner />
      <p className="text-xl text-primary-200">loading  room data...</p>
  </div>
}

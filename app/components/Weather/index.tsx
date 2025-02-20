import useWeather from "@/app/helper/hooks";
import Alert from "@/app/components/Atomic/Alert";
import Skeleton from "@/app/components/Atomic/Skeleton";

export default function Weather() {
  const { data, isLoading, error } = useWeather("Plovdiv");

  return (
    <aside className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">🌦 Weather</h2>

      {isLoading ? (
        <>
          <Skeleton width="100px" height="24px" />
          <Skeleton width="150px" height="24px" />
        </>
      ) : error ? (
        <Alert type="error" message={`Error: ${error.message}`} />
      ) : (
        <>
          <p>Temperature: {data?.main?.temp ?? "N/A"}°C</p>
          <p>Condition: {data?.weather?.[0]?.main ?? "N/A"}</p>
        </>
      )}
    </aside>
  );
}
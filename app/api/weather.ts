export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_WEATHER_API_URL;

  if (!apiKey || !apiUrl) {
    throw new Error("❌ Missing OpenWeather API key or base URL in .env.local.");
  }

  // ✅ Create a new AbortController for each request
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const res = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`, { signal });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`❌ Failed to fetch weather data: ${errorText}`);
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("❌ Weather fetch aborted");
      return {} as WeatherData; // ✅ Return empty data if aborted
    }
    console.error("❌ Weather API Error:", error);
    throw new Error("Failed to fetch weather data. Please try again.");
  }
};
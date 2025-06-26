import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [backgroundClass, setBackgroundClass] = useState('clear');

  const apiKey = 'write your own api';

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      setWeather(null);
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');

      const data = await res.json();
      setWeather(data);
      setError('');

      const condition = data.weather[0].description.toLowerCase();
      if (condition.includes('clear')) setBackgroundClass('clear');
      else if (condition.includes('cloud')) setBackgroundClass('clouds');
      else if (condition.includes('rain') || condition.includes('drizzle')) setBackgroundClass('rain');
      else if (condition.includes('snow')) setBackgroundClass('snow');
      else if (condition.includes('thunder')) setBackgroundClass('thunder');
      else if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) setBackgroundClass('fog');
      else setBackgroundClass('default');

      console.log('Condition:', condition);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div
      className={`app ${backgroundClass}`}
      style={{
        background:
          backgroundClass === 'fog'
            ? "url('https://i.ibb.co/YXz7Xdd/fog.gif') center/cover no-repeat"
            : undefined,
      }}
    >
      <div className="overlay">
        <div className="weather-container">
          <h2>🌦️ Weather App</h2>

          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Search</button>

          {error && <p className="error">{error}</p>}

          {weather && (
            <div className="weather-info">
              <h3>
                {weather.name}, {weather.sys.country}
              </h3>
              <p>
                <strong>Temperature:</strong> {weather.main.temp}°C
              </p>
              <p>
                <strong>Condition:</strong> {weather.weather[0].description}
              </p>
              <p>
                <strong>Humidity:</strong> {weather.main.humidity}%
              </p>
              <p>
                <strong>Wind:</strong> {weather.wind.speed} m/s
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
          )}

          <div className="footer">Made with ❤️ by Deepanshi Goswami</div>
        </div>
      </div>
    </div>
  );
};

export default App;

# weatherforecastereact
A beautiful weather application built with **React.js** that fetches live weather data from the [OpenWeatherMap API](https://openweathermap.org/api). The app dynamically changes its background based on the weather condition, using animated backgrounds or color gradients.

---

## 🚀 Features

- 🔍 **Search Weather by City Name**
- 🌡️ Real-time Temperature, Condition, Humidity, and Wind Speed
- 🎨 **Dynamic Animated Backgrounds** based on weather conditions:
  - Clear
  - Clouds
  - Rain / Drizzle
  - Snow
  - Thunderstorm
  - Mist / Fog / Haze
- ❌ Error handling for invalid city names
- 💅 Modern **Glassmorphism UI** with animated transitions
- 📱 Fully Responsive for mobile and desktop

---
## 🛠️ Tech Stack

- **Frontend**: React.js, CSS3 (Glassmorphism, animations)
- **API**: OpenWeatherMap API
- **Hosting**: You can deploy it to Vercel, Netlify, or GitHub Pages

---

## 🔧 Installation & Setup

# Install Dependencies
bash

npm install

# Add Your OpenWeatherMap API Key
Create a file .env in the root directory and add:
-REACT_APP_WEATHER_API_KEY=your_api_key_here

#Run the App
npm start

## 🧠 Weather Condition Mapping
-Condition Keyword  	-Background Type

-clear	             - Blue Gradient

-cloud	             - Cloudy Gradient

-rain, drizzle	     - Rainy Gradient

-snow	               - Light Gradient

-thunder           	 - Dark Blue Gradient

-fog, mist	         - 🎞️ Animated GIF

-others	             - Default Gradient

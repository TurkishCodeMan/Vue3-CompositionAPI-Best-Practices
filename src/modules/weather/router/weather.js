export const WeatherRoutes = [
    {
        path: "/weather",
        name: "Weather",
        component: () => import('@/modules/weather/views/Weather'),
    }
]
export interface Subscriber {
    id: string;
    name: string;
    role: string;
    location: {
        city: string;
        country: string;
        lat?: number; // Optional for future map use
        lng?: number; // Optional for future map use
    };
    joinedAt: string; // ISO date string
    avatarColor: string;
}

export const MOCK_SUBSCRIBERS: Subscriber[] = [
    // User's Location (Assume "Riyadh, Saudi Arabia" for demo)
    { id: "1", name: "Ahmed Al-Fahad", role: "Software Engineer", location: { city: "Riyadh", country: "Saudi Arabia" }, joinedAt: new Date().toISOString(), avatarColor: "bg-blue-500" },
    { id: "2", name: "Sara Khaled", role: "Graphic Designer", location: { city: "Riyadh", country: "Saudi Arabia" }, joinedAt: new Date(Date.now() - 3600000).toISOString(), avatarColor: "bg-pink-500" },
    { id: "3", name: "Omar Youssef", role: "Project Manager", location: { city: "Riyadh", country: "Saudi Arabia" }, joinedAt: new Date(Date.now() - 7200000).toISOString(), avatarColor: "bg-green-500" },

    // Global / Other Locations
    { id: "4", name: "John Smith", role: "Data Scientist", location: { city: "New York", country: "USA" }, joinedAt: new Date(Date.now() - 10800000).toISOString(), avatarColor: "bg-indigo-500" },
    { id: "5", name: "Maria Garcia", role: "Nurse", location: { city: "Madrid", country: "Spain" }, joinedAt: new Date(Date.now() - 14400000).toISOString(), avatarColor: "bg-red-500" },
    { id: "6", name: "Wei Chen", role: "Architect", location: { city: "Shanghai", country: "China" }, joinedAt: new Date(Date.now() - 18000000).toISOString(), avatarColor: "bg-yellow-500" },
    { id: "7", name: "Fatima Ali", role: "Translator", location: { city: "Cairo", country: "Egypt" }, joinedAt: new Date(Date.now() - 21600000).toISOString(), avatarColor: "bg-teal-500" },
    { id: "8", name: "Hans Müller", role: "Mechanical Eng.", location: { city: "Berlin", country: "Germany" }, joinedAt: new Date(Date.now() - 25200000).toISOString(), avatarColor: "bg-orange-500" },
    { id: "9", name: "Yuki Tanaka", role: "UI/UX Designer", location: { city: "Tokyo", country: "Japan" }, joinedAt: new Date(Date.now() - 28800000).toISOString(), avatarColor: "bg-violet-500" },
    { id: "10", name: "Isabella Rossi", role: "Marketing Specialist", location: { city: "Rome", country: "Italy" }, joinedAt: new Date(Date.now() - 32400000).toISOString(), avatarColor: "bg-rose-500" },
];

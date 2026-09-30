
import { Workout } from "../types/index"
const API_URL = "https://api.abcz.workers.dev/api/fitlog"
export const getWorkouts = async (): Promise<Workout[]> => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error("Failed to fetch workouts")
    }
    return response.json()
}
export const getWorkoutById = async (id: string): Promise<Workout> => {
    const workouts = await getWorkouts()
    const workout = workouts.find(
        (item) => String(item.id) === String(id)
    )
    if (!workout) {
        throw new Error("Workout not found")
    }
    return workout
}
export type Workout = {

    id: string | number
    name: string
    image: string
    muscleGroups: string[]
    equipment: string
    difficulty: string
    duration: number
    caloriesBurned: number
    sets: number;
    reps: string;
    rating: number
    description: string
    instructions: string[]

}
export type CardProps = {
    workout: Workout
}
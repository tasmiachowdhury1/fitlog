"use client"
import { ReactNode, createContext, useContext, useState } from "react"
import { Workout } from "../types/index"

type PlanContextType = {
    plan: Workout[]
    saved: Workout[]
    addToPlan: (workout: Workout) => void
    removeFromPlan: (id: string | number) => void
    saveWorkout: (workout: Workout) => void
    removeFromSaveWorkout: (id: string | number) => void
}

const PlanContext = createContext<PlanContextType | undefined>(undefined)
type WorkoutProvideProps = { children: ReactNode }
export const WorkoutProvider = ({ children }: WorkoutProvideProps) => {
    const [plan, setPlan] = useState<Workout[]>([])
    const [saved, setSaved] = useState<Workout[]>([])
    const addToPlan = (workout: Workout) => {
        setPlan((currentPlan) => {
            if (currentPlan.some((item) => item.id === workout.id)) {
                return currentPlan
            }
            return [...currentPlan, workout]
        })
    }
    const removeFromPlan = (id: string | number) => {
        setPlan((currentPlan) =>
            currentPlan.filter((workout) => workout.id !== id))
    }
    const saveWorkout = (workout: Workout) => {
        setSaved((currentSaved) => {
            if (currentSaved.some((item) => item.id === workout.id)) {
                return currentSaved
            }
            return [...currentSaved, workout]
        })
    }

    const removeFromSaveWorkout = (id: string | number) => {
        setSaved((currentSaved) =>
            currentSaved.filter((workout) => workout.id !== id)
        )
    }

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeFromSaveWorkout,
            }}>
            {children}
        </PlanContext.Provider>)
}

export const useWorkout = () => {
    const context = useContext(PlanContext)
    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider")
    }
    return context
}
export default PlanContext
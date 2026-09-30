"use client"
import { useWorkout } from "@/app/context/PlanContext"
import { Workout } from "@/app/types/index"
import Link from "next/link"

type ActionButtonsProps = {
    workout: Workout
}
const ActionButtons = ({ workout }: ActionButtonsProps) => {
    const { addToPlan, saveWorkout } = useWorkout()

    const addWorkout = () => {
        addToPlan(workout)
    }
    const saveWorkoutItems = () => {
        saveWorkout(workout)
    }

    return (
        <div className="mt-7 flex flex-wrap gap-3">



            <button
                onClick={addWorkout}
                className="mt-5 rounded-xl cursor-pointer bg-(--primary-dark) px-6 py-3 font-semibold  text-white hover:bg-(--primary)"
            >
                ＋ Add to today's plan
            </button>




            <button
                onClick={saveWorkoutItems}
                className="rounded-xl cursor-pointer mt-5 border border-(--border) px-5 py-3 text-[15px] font-semibold text-(--primary-dark) hover:bg-(--primary-soft)"
            >
                ♡ Save for later
            </button>



        </div>
    )
}

export default ActionButtons
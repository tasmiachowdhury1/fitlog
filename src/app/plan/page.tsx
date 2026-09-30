"use client"
import React from 'react'
import { useWorkout } from '../context/PlanContext'
import Link from 'next/link'
import { useState } from 'react'
import toast from "react-hot-toast"

const planPage = () => {
    const { plan, saved, removeFromPlan, removeFromSaveWorkout } = useWorkout()
    const [selectedTab, setSelectedTab] = useState<"plan" | "saved">("plan")
    const [sortBy, setSortBy] = useState("duration")
    const workouts = [...(selectedTab === "plan" ? plan : saved)].sort(
        (a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned
            }

            if (sortBy === "rating") {
                return b.rating - a.rating
            }

            return 0
        }
    )
    const totalMin = workouts.reduce(
        (total, workout) => total + workout.duration,
        0
    )

    const totalCal = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    )

    return (
        <main className="min-h-screen px-5 py-10 sm:px-8 lg:px-10 lg:py-16">

            <div className="max-w-7xl mx-auto">

                <div>

                    <h1 className="text-3xl font-bold text-(--primary-dark) sm:text-3xl">
                        MY PLAN
                    </h1>

                    <p className="mt-3 text-(--purple) text-[15px] sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>


                <div className="mt-10 grid grid-cols-1 rounded-2xl border-2 border-(--border) bg-(--card) sm:grid-cols-3">

                    <div className="p-5">
                        <p className="text-[15px] text-pink-800">
                            EXERCISES
                        </p>

                        <p className="mt-2 text-4xl font-bold text-(--primary-dark)">
                            {workouts.length}
                        </p>
                    </div>

                    <div className="border-l border-(--border) p-5">
                        <p className="text-[15px] text-pink-800">
                            MINUTES
                        </p>

                        <p className="mt-2 text-4xl font-bold text-(--primary-dark)">
                            {totalMin}
                        </p>
                    </div>

                    <div className="border-l border-(--border) p-5">
                        <p className="text-[15px] text-pink-800">
                            CALORIES
                        </p>

                        <p className="mt-2 text-4xl font-bold text-(--primary-dark)">
                            {totalCal}
                        </p>
                    </div>

                </div>

                <section className="mt-14">

                    <div className='flex justify-between'>
                        <div className="flex">

                            <button
                                onClick={() => setSelectedTab("plan")}
                                className={`cursor-pointer rounded-xl px-5 py-3 text-[15px] font-semibold ${selectedTab === "plan"
                                    ? "bg-(--primary) text-white"
                                    : "text-(--primary-dark)"
                                    }`}
                            >
                                Today's Plan
                            </button>

                            <button

                                onClick={() => setSelectedTab("saved")}
                                className={`cursor-pointer rounded-lg px-5 py-3 text-[15px] font-semibold ${selectedTab === "saved"
                                    ? "bg-(--primary) text-white"
                                    : "text-(--primary-dark)"
                                    }`}
                            >
                                Saved
                            </button>
                        </div>
                        <div className="flex items-center gap-2 justify-between sm:justify-end">

                            <span className="text-[16px] text-(--primary-dark) sm:text-base">
                                Sort By
                            </span>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="rounded-lg border border-(--border) bg-(--card) px-3 py-2 text-[15px] text-white sm:px-4"

                            >
                                <option value="duration">
                                    Duration
                                </option>

                                <option value="calories">
                                    Calories
                                </option>

                                <option value="rating">
                                    Rating
                                </option>
                            </select>

                        </div>
                    </div>

                    {workouts.length === 0 ? (

                        <div className="mt-8 rounded-2xl border border-(--border) bg-(--card) px-6 py-12 text-center">

                            <h3 className="text-2xl font-bold text-(--primary-dark)">
                                NOTHING HERE YET
                            </h3>

                            <p className="mt-3 text-">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/components/#library"
                                className="mt-6 inline-block rounded-full bg-(--primary-dark) px-6 py-3 font-semibold text-white"
                            >
                                Go to Workouts
                            </Link>

                        </div>

                    ) : (

                        <div className="mt-6 space-y-4">

                            {workouts.map((workout) => (

                                <div
                                    key={workout.id}
                                    className="flex flex-col sm:flex-row  items-center justify-between rounded-2xl border border-(--border) bg-(--card) p-3">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={workout.image}
                                            alt={workout.name}
                                            className="h-16 w-24 rounded-xl object-cover" />

                                        <div>

                                            <h3 className="font-bold uppercase text-(--primary-dark)">
                                                {workout.name}
                                            </h3>

                                            <p className="mt-1 text-[15px] text-(--purple)">
                                                {workout.equipment}
                                            </p>

                                            <div className="mt-2 flex flex-wrap gap-3 text-[15px] text-black">

                                                <span>
                                                    ◷ {workout.duration} min
                                                </span>

                                                <span>
                                                    🔥 {workout.caloriesBurned} kcal
                                                </span>

                                                <span>
                                                    ⭐ {workout.rating}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <Link
                                            href={`/workout/${workout.id}`}
                                            className="rounded-full border border-(--border) px-5 py-2 text-[15px] font-semibold text-(--primary-dark) hover:bg-(--primary)"
                                        >
                                            View Details
                                        </Link>

                                        {selectedTab === "plan" && (

                                            <button

                                                onClick={() => {
                                                    removeFromPlan(workout.id)
                                                    toast.success(`${workout.name} marked as done!`)
                                                }}
                                                className="cursor-pointer rounded-full bg-(--primary-dark) px-5 py-2 text-[15px] font-semibold text-white hover:bg-(--primary)"
                                            >
                                                Mark as Done
                                            </button>

                                        )}


                                        {selectedTab === "saved" && (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        removeFromSaveWorkout(workout.id)
                                                        toast.success(`${workout.name} removed from saved!`)
                                                    }}
                                                    className="cursor-pointer px-2 text-xl font-bold text-(--muted) hover:text-(--primary-dark)"

                                                    aria-label={`Remove ${workout.name}`}
                                                >
                                                    ×
                                                </button>
                                            </>
                                        )}

                                    </div>

                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}

export default planPage
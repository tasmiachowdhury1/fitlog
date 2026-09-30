import Link from 'next/link';
import React from 'react';
import { CardProps } from '../types/index';


const Card = ({ workout }: CardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="w-full overflow-hidden rounded-2xl border-2 border-gray-500 bg-(--card) transition duration-200 hover:-translate-y-1"
        >
            <div className="relative h-54 w-full overflow-hidden">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
                />
            </div>
            <div className="p-5">
                <div className="flex-wrap flex gap-3">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-(--badges) px-3 py-1 text-xs font-semibold text-black"
                        >
                            {muscle.toUpperCase()}
                        </span>
                    ))}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                    {workout.name}
                </h3>

                <p className="mt-2 text-[15px] text-(--purple)">
                    {workout.equipment}
                </p>

                <div className="mt-5 border-t pt-4 border-black flex flex-wrap gap-3 text-[15px]  text-(--purple)">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>⭐ {workout.rating}</span>
                </div>

            </div>
        </Link>
    );
};

export default Card;
import { getWorkouts } from '@/app/utils/api';
import React from 'react';
import WorkoutCard from './WorkoutCard';

const LibrarySec = async () => {
    const workouts = await getWorkouts()
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
                <WorkoutCard
                    key={workout.id}
                    workout={workout} />
            ))}
        </div>
    );
};

export default LibrarySec;
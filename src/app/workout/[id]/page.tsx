import { getWorkoutById } from "@/app/utils/api";
import ActionButtons from "@/app/components/ActionButtons";

type WorkoutDetailsProps = {
    params: Promise<{ id: string }>;
};

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    return (
        <main>

            <section className="w-full mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">

                <div className="grid gap-10 lg:gap-12 lg:grid-cols-2">

                    <div className="rounded-2xl border border-gray-700">
                        <img
                            src={workout.image}
                            alt={workout.name}
                            className="h-full min-h-100 rounded-2xl w-full object-cover lg:min-h-162.5"
                        />
                    </div>

                    <div className="flex flex-col justify-center">

                        <h1 className="mt-4 text-3xl font-bold uppercase text-(--primary) sm:text-4xl">
                            {workout.name}
                        </h1>


                        <p className="mt-3 max-w-2xl text-[15px] text-(--purple)">
                            {workout.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="mt-2 rounded-full bg-(--badges) px-3 py-1 text-sm font-semibold text-black"
                                >
                                    {muscle.toUpperCase()}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 rounded-xl border border-gray-700 bg-(--card)">

                            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Equipment
                                </p>

                                <p className="text-[15px]">
                                    {workout.equipment}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Difficulty
                                </p>

                                <p className="text-[15px]">
                                    {workout.difficulty}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Sets
                                </p>

                                <p className="text-[15px]">
                                    {workout.sets}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Reps
                                </p>

                                <p className="text-[15px]">
                                    {workout.reps}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Duration
                                </p>

                                <p className="text-[15px]">
                                    {workout.duration} min
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Calories
                                </p>

                                <p className="text-[15px]">
                                    {workout.caloriesBurned} kcal
                                </p>
                            </div>

                            <div className="flex items-center justify-between px-4 py-4">
                                <p className="text-sm uppercase text-(--primary-dark)">
                                    Rating
                                </p>

                                <p className="text-[15px]">
                                    {workout.rating}
                                </p>
                            </div>

                        </div>


                        <div className="mt-7">

                            <h2 className="text-[17px] font-bold uppercase text-(--primary)">
                                Instructions
                            </h2>

                            <ol className="mt-4 space-y-3 text-[15px] leading-6 text-gray-300">
                                {workout.instructions.map((instruction, index) => (
                                    <li key={index} className="flex gap-2">
                                        <span className="text-black">
                                            {index + 1}.
                                        </span>

                                        <span className="text-(--primary)">
                                            {instruction}
                                        </span>
                                    </li>
                                ))}
                            </ol>

                        </div>

                        <ActionButtons workout={workout} />

                    </div>

                </div>

            </section>
        </main>
    );
};

export default WorkoutDetails;
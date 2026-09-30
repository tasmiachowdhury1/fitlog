import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="mt-10 max-w-[1600px] mx-auto bg-(--primary-soft) rounded-2xl">
            <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-12 px-6 py-16 sm:px-8 lg:px-8 md:py-24">
                <div>
                    <p className="text-sm font-semibold text-(--primary-dark)">
                        WORKOUT LIBRARY
                    </p>
                    <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-7 text-(--purple) sm:text-lg">
                        Build a consistent workout routine, track your progress,
                        and stay motivated with every session.
                    </p>
                    <Link href="#library"
                        className="mt-7 inline-block rounded-2xl bg-(--primary-dark) px-6 py-3 text-sm font-semibold  text-white hover:bg-(--primary)">BROWSE WORKOUTS
                    </Link>
                </div>
                <div className="relative">
                    <div className="relative h:64 ml-auto w-full max-w-md sm:h-95">
                        <Image
                            src="/banner.png"
                            alt="Working out"
                            fill priority
                            className="object-contain" sizes="(max-width:1030px) 500px" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
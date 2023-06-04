import {SunIcon} from "@heroicons/react/solid";

function Loading() {
    return (
        <div className={"bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center text-slate-500"}>
            <SunIcon
                className={"h-24- w-24 animate-bounce text-yellow-500"}
                color={"yellow"}
            />
            <h1 className={"text-6xl font-bold text-center mb-10 animate-pulse"}>
                Loading City Weather Information
            </h1>
            <h2>
                Hold a, we are crunching the numbers and generating AI summery of the weather!
            </h2>
        </div>
    );
}

export default Loading
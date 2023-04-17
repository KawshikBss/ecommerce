export default function Home() {
    return (
        <>
            <section
                className="w-full h-[70vh] bg-no-repeat bg-cover bg-center flex flex-col justify-evenly items-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'",
                }}
            >
                <h1 className="text-[48px] leading-[1.31] font-bold tracking-[0.5px] text-white">
                    The Fan Favorite
                </h1>
                <p className="text-[16px] leading-[1.5] font-bold tracking-[0.5px] text-white">
                    The cult-favorite Tree Dasher Relay like you’ve never seen
                    it.
                </p>
                <span className="font-bold text-[0.7em] tracking-[1px] uppercase text-center py-[13px] px-[18px] rounded-sm bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                    Shop Now
                </span>
            </section>
        </>
    );
}

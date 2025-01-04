export function Header() {
    return (
        <header className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img className="h-8 w-auto" src="/Dex-Weaver.svg" alt="Dex Weaver logo" />
                            {/* Dex Weaver */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
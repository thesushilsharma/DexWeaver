import { Form } from "react-router";

export function Hero() {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md">
                <Form method="get">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Base Chain Liquidity Lens</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This tool helps you analyze liquidity pools on your base chain.
                                Enter a Pool ID to get detailed information about the pool's
                                reserves, token pairs, and trading activity.
                            </p>
                            <div className="sm:col-span-4">
                                <label htmlFor="poolId" className="block text-sm/6 font-medium text-gray-900">
                                    Pool ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="poolId"
                                        name="poolId"
                                        type="text"
                                        autoComplete="poolId"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        placeholder="Enter Pool ID"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}
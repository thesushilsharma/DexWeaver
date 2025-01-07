import { Form } from "react-router";
import { ChevronDown } from 'lucide-react';
import { networkNames } from "lib/constants/networkName";
export function Hero() {

    return (
        <div className="flex items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-md rounded-lg p-6 shadow-md sm:p-8">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Chain Liquidity Lens
                        </h2>
                        <p className="mt-4 text-sm text-gray-500 sm:text-base">
                            This tool helps you analyze liquidity pools on your base chain. Enter a Pool ID to get
                            detailed information about the pool's reserves, token pairs, and trading activity.
                        </p>
                    </div>

                    {/* Form */}
                    <Form className="space-y-6" method="post">
                        {/* Pool ID Input */}
                        <div>
                            <label htmlFor="ID" className="block text-sm font-medium text-gray-700">
                                Pool ID
                            </label>
                            <div className="mt-1">
                                <input
                                    id="ID"
                                    name="ID"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter Pool ID"
                                />
                            </div>
                        </div>

                        {/* Network Select Dropdown */}
                        <div>
                            <label htmlFor="networkName" className="block text-sm font-medium text-gray-700">
                                Blockchain Network
                            </label>
                            <div className="relative mt-1">
                                <select
                                    id="networkName"
                                    name="networkName"
                                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" required >
                                    {networkNames.map((network) => (
                                        <option key={network} value={network}>
                                            {network}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Load Contract
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
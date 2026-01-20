import React from 'react'

export default function Sales_To_Stocks() {
    return (
        <div className='mt-20 ml-8 text-white flex flex-col w-full justify-center leading-7'>
            <section id='title'>
                <h1 className='text-4xl font-bold  pb-2'>Sales & Stocks Analysis Tool</h1>
                <h3 className='text-lg font-thin italic'>Built to solve a real operational problem at my workplace</h3>
                <section className='pt-2'>
                    <h3 className='text-lg'><span className='font-bold'>Status: </span><span className='text-green-500 '>Active Development</span></h3>
                    <h3 className='text-lg'><span className='font-bold'>Tech Stack: </span><span>Python | CLI | DuckDB | Pandas </span></h3>
                </section>
            </section>
            <section id="the-problem" className='w-[71ch] sm:w-fit pt-12 '>
                <h2 className='text-2xl pb-2'>The Problem</h2>
                <p>My workplace needed better visibility into product performance and inventory planning. Sales reports exist, but extracting actionable insights is difficult because:</p>
                <ul className='list-disc list-inside pl-2 py-3'>
                    <li>Products have complex compositions (multiple ingredients, varying portion sizes)</li>
                    <li>Different yield rates across items make calculating actual usage complicated</li>
                    <li>Reports don't account for wastage</li>
                    <li>Data format from reports isn't structured for analysis</li>
                </ul>
                <p>Without this visibility, we're missing opportunities to optimize stock ordering, identify top performers, plan for seasonal demand (Christmas, summer), and improve operational efficiency at the bar.</p>
            </section>
            <section id="why-this-matters" className="w-[71ch] pt-12">
                <h2 className='text-2xl pb-2'>Why This Matters</h2>
                <p>Previously at my last place when I started this and even now currently at my current place, decisions about what to stock, what to promote, and how to prepare for busy periods are largely based on intuition rather than data. This tool will enable:</p>
                <ul className='list-disc list-inside pl-2 py-3'>
                    <li>Identification of underperforming products for promotional targeting</li>
                    <li>Prevention of stock-outs during peak periods</li>
                    <li>Data-driven bar layout optimization for service efficiency</li>
                    <li>Like-for-like performance comparisons across different time periods</li>

                </ul>
            </section>
        </div>
    )
}

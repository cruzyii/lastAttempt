import React from 'react';



function TopMenu() {
    return (
        <section className="flex justify-center text-xs font-semibold shadow-sm bg-gray-100 font-roboto">
            <nav className='flex flex-1 justify-between p-2 px-16'>
                <ul className="flex divide-x divide-gray-500">
                    <li><a href='#' className='p-2 hover:text-gray-500'>Par e-veikalu</a></li>
                    <li><a href='#' className='p-2 hover:text-gray-500'>Palīdzība</a></li>
                </ul>
                <ul className="flex divide-x divide-gray-500">
                    <li><a href='#' className='p-2 hover:text-gray-500'>Piegāde</a></li>
                    <li><a href='#' className='p-2 hover:text-gray-500'>Kontakti</a></li>
                    <li><a href='#' className='p-2 hover:text-gray-500'>Pieslēgties</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default TopMenu;
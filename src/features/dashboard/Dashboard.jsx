import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="lg:w-[70%] grid gap-14">
            <section>
                <h1 className="font-montserrat font-semibold text-[1.75rem]">Admin Dashboard </h1>
            </section>
            <section className="grid grid-cols-3 gap-6">
                <Link className="flex flex-col max-lg:items-center">
                    Sales tracking
                </Link>
                <Link className="flex flex-col max-lg:items-center">
                    View Products
                </Link>
                <Link className="flex flex-col max-lg:items-center">
                    Add Product
                </Link>
            </section>
            <section className="lg:flex justify-end w-full">
                <section className="w-full lg:w-[50%] bg-white shadow-md p-2">
                    <h2 className="font-montserrat text-[1.35rem] font-medium">Orders</h2>
                </section>
            </section>
        </div>
    )
}
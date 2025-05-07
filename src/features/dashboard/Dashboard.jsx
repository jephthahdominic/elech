import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="grid gap-10">
            <section>
                <h1 className="font-montserrat font-semibold text-[1.75rem]">Admin Dashboard </h1>
            </section>
            <section className="grid grid-cols-3 gap-6">
                <Link className="flex flex-col items-center">
                    Sales tracking
                </Link>
                <Link className="flex flex-col items-center">
                    View Products
                </Link>
                <Link className="flex flex-col items-center">
                    Add Product
                </Link>
            </section>
            <section className="bg-white bg-opacity-15 shadow-md p-2">
                <h2 className="font-montserrat text-[1.35rem] font-medium">Orders</h2>
            </section>
        </div>
    )
}
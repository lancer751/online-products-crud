
export default function CartItem() {
    return (
        <div className="card card-sm bg-base-100 shadow-sm">
            <figure className="w-full h-40">
                <img
                    className="w-full h-full object-cover object-center"
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">New movie is released!</h2>
                <p className="text-[1rem] font-semibold text-secondary">Precio: $90</p>
                <div className="flex gap-3 items-center">
                    <button className="btn text-xl btn-square btn-accent">-</button>
                    <span className="">3</span>
                    <button className="btn text-xl btn-square btn-accent">+</button>
                </div>
            </div>
        </div>
    )
}

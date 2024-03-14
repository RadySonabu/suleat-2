const posts = [
    {
        title: "Suleat Promo",
        desc: "Enjoy the foods with biggest promo!",
        img: "https://c0.wallpaperflare.com/preview/1012/904/854/people-woman-girl-alone.jpg",
        href: "javascript:void(0)"
    },
    {
        title: "Suleat Deals",
        desc: "Enjoy the different kinds of delicious dish!",
        img: "https://c0.wallpaperflare.com/preview/1011/400/993/green-leaf-on-cookbook.jpg",
        href: "javascript:void(0)"
    },
    {
        title: "Suleat Order",
        desc: "Order now, through online!",
        img: "https://c4.wallpaperflare.com/wallpaper/744/330/408/cutlery-tape-fork-spoon-wallpaper-preview.jpg",
        href: "javascript:void(0)"
    }
]

export default () => {
    return (
        <section className="py-32">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Suleat Super Food!</h1>
                    <p className="text-gray-600">Foods that are loved by the community.</p>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-orange-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-orange-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
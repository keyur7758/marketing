import Card from "./Card"

export function Cardprint() {
    const data = [
        {
            "images": "images/img4.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        },
        {
            "images": "images/img5.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }, {
            "images": "images/img6.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }]
    return (
        <>
            <section class="card-area">
                <div class="container">
                    <div class="row gx-4">
                        {
                            data.map((item) =>
                                <Card data={item} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export function Cardprint2() {
    const data = [
        {
            "images": "images/img4.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        },
        {
            "images": "images/img5.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }, {
            "images": "images/img6.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }, {
            "images": "images/img6.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }, {
            "images": "images/img6.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }, {
            "images": "images/img6.png", "title1": "Product Design", "title2": "Digital Product Design",
            "title3": "Creating a higher spacing and how people move through a unique.",
        }]

    return (
        <>
            <section class="card-area">
                <div class="container">
                    <div class="row gx-4">
                        {
                            data.map((item) =>
                                <Card data={item} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

